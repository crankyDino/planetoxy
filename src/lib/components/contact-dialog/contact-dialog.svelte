<script lang="ts">
  import { run } from "svelte/legacy";

  import { onMount } from "svelte";
  import { chips, reset, submitHitMeUp } from "./contact-dialog";
  import {
    dialogState,
    type TDialogState,
  } from "$lib/handlers/dialog.handler/dialog.handler";
  import { focusOnElement } from "$lib/util/element.util";
  import { initForm, resetForm } from "$lib/handlers/form.handler/form.handler";

  let pos: TDialogState = $state("closed");
  let dialog = $state<HTMLDialogElement>();
  let form: HTMLFormElement;
  let reason: HTMLInputElement | null = $state(null);

  onMount(() => {
    if (form) {
      initForm(form);
    }
  });

  export function open() {
    if (dialog) {
      dialogState().open(dialog);
    }
  }
</script>

<dialog
  bind:this={dialog}
  class="m-auto backdrop:bg-dh-black/65 backdrop:blur-md w-[88vw] md:w-2/3 lg:w-[44%] max-h-[85%] font-space-mono"
  id="hitMeUpDialog"
>
  <div class="bg__grid">
    <!-- <div class="grid__block"></div> -->
  </div>
  <div
    class="btn__close flex flex-row justify-between bg-dh-orange mb-3 p-3 pr-6"
  >
    <h3 class="card-title font-bold text-[#fff] pl-9">Hit Me Up</h3>
    <button
      onclick={() => (dialog ? dialogState().close(dialog, form) : "")}
      id="btnCloseHmuForm"
      class="text-[#fff] text-center w-6 rounded-md hover:text-dh-orange hover:bg-[#fff]"
    >
      <img
        src="../assets/vectors/close-small.svg"
        class="filter--white hover:!filter--orange"
        alt="dialog close icon"
      />
    </button>
  </div>

  <form
    bind:this={form}
    class="flex flex-col p-3 px-12 gap-3"
    id="formHitMeUp"
    action="/"
    method="GET"
  >
    <div class="grid grid-rows-1 sm:grid-cols-2 gap-3">
      <div class="form__group">
        <label
          class="text-dh-black text-sm"
          for="hmuFirstname"
          title="firstname">First name<sup>*</sup></label
        >
        <input
          placeholder="Bruce"
          type="text"
          id="hmuFirstname"
          name="Firstname"
          class="pointer-events-auto border-[2px] border-dh-black w-full px-4 py-2"
          maxlength="20"
          minlength="3"
          required
        />
        <small
          hidden
          id="hmuFirstnameErr"
          class="form--error text-dh-orange text-sm text-[0.7em] tracking-[0.08em]"
          >please enter your firstname</small
        >
      </div>
      <div class="form__group">
        <label class="text-dh-black text-sm" for="hmuLastname" title="lastname"
          >Last name<sup>*</sup></label
        >
        <input
          placeholder="Wayne"
          type="text"
          id="hmuLastname"
          name="Lastname"
          class="pointer-events-auto border-[2px] border-dh-black w-full px-4 py-2"
          maxlength="20"
          minlength="3"
          required
        />
        <small
          hidden
          id="hmuLastnameErr"
          class="form--error text-dh-orange text-sm text-[0.7em] tracking-[0.08em]"
          >please enter your lastname</small
        >
      </div>
    </div>

    <div class="form__group grid">
      <label class="text-dh-black text-sm" for="hmuEmail" title="email"
        >E-Mail<sup>*</sup></label
      >
      <input
        placeholder="Batman@Wayne.co"
        id="hmuEmail"
        type="email"
        name="email"
        class="pointer-events-auto border-[2px] border-dh-black px-4 py-2"
        required
      />
      <small
        hidden
        id="hmuEmailErr"
        class="form--error text-dh-orange text-sm text-[0.7em] tracking-[0.08em]"
        >please enter your email</small
      >
    </div>

    <div class="form__group grid h-fit">
      <label class="text-dh-black text-sm" for="hmuReason" title="reason"
        >Reason</label
      >
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div
        id="hmuReasonList"
        class="bg-[#fff] flex flex-row flex-wrap bg-white border-[2px] border-dh-black w-full gap-3 px-4 py-2 h-fit min-h-10 items-center"
        onfocus={() => {
          reason ? reason.focus() : "";
        }}
      >
        {#each $chips as chip (chip[0])}
          <span
            class="rounded-xl bg-dh-orange font-semibold text-[#fff] flex flex-row h-[1.6em] px-2 items-start"
            >{chip[1]}<button
              class="pl-1 pr-[3px]"
              onmousedown={(ev) => {
                chips.deleteChip(chip[0]);
              }}>x</button
            ></span
          >
        {/each}
        <input
          bind:this={reason}
          onkeydown={(k) => {
            if (k.code === "Enter" && reason && reason?.value != "") {
              chips.createChip(reason.value);
              reason.value = "";
            }
            if (k.code === "Backspace" && $chips.size > 0) {
              chips.popChip();
            }
          }}
          id="hmuReason"
          type="text"
          name="Reason"
          class="pointer-events-auto w-fit focus-visible:outline-none pl-1"
        />
      </div>
      <small
        hidden
        id="hmuReasonErr"
        class="form--error text-dh-orange text-sm text-[0.7em] tracking-[0.08em]"
        >reason can't be blank</small
      >
    </div>

    <div class="form__group grid">
      <label class="text-dh-black text-sm" for="hmuMessage" title="message"
        >What's up?<sup>*</sup></label
      >
      <textarea
        placeholder="How can I help you?"
        id="hmuMessage"
        name="message"
        rows="3.6"
        style="resize: none"
        class="pointer-events-auto border-[2px] border-dh-black pl-1"
        maxlength="240"
        required
      ></textarea>
      <small
        hidden
        id="hmuMessageErr"
        class="form--error text-dh-orange text-sm text-[0.7em] tracking-[0.08em]"
        >Tell me what's up</small
      >
    </div>

    <div class="card-body py-3 self-end">
      <button
        onmousedown={() => (form ? reset(form) : "")}
        id="clear"
        class="pointer-events-auto btn bg-gray-400 text-zinc-50"
      >
        Clear
      </button>
      <button
        type="submit"
        id="btnSubmitHmuForm"
        class="pointer-events-auto btn bg-dh-orange text-zinc-50"
        onmousedown={() => (form ? submitHitMeUp(form, dialog!) : "")}
      >
        HIT ME UP!
      </button>
    </div>
  </form>
</dialog>
