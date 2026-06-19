<script lang="ts">
  import { onMount } from "svelte";
  import { chips, reset, submitHitMeUp } from "./contact-dialog";
  import {
    dialogState,
    type TDialogState,
  } from "$lib/handlers/dialog.handler/dialog.handler";
  import { initForm } from "$lib/handlers/form.handler/form.handler";

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
  class="backdrop:bg-dh-black/65 font-space-mono m-auto max-h-[85%] w-[88vw] max-w-2xl backdrop:blur-md md:w-2/3 lg:w-[44%]"
  id="hitMeUpDialog"
>
  <div class="bg__grid">
    <!-- <div class="grid__block"></div> -->
  </div>
  <div
    class="btn__close bg-dh-orange mb-3 flex flex-row justify-between p-3 pr-6"
  >
    <h3 class="card-title pl-9 font-bold text-white">Hit Me Up</h3>
    <button
      onclick={() => (dialog ? dialogState().close(dialog, form) : "")}
      id="btnCloseHmuForm"
      class="hover:text-dh-orange w-6 rounded-md text-center text-white hover:bg-white"
    >
      <img
        src="../assets/vectors/close-small.svg"
        class="filter--white hover:filter--orange!"
        alt="dialog close icon"
      />
    </button>
  </div>

  <form
    bind:this={form}
    class="flex flex-col gap-3 p-3 px-12"
    id="formHitMeUp"
    action="/"
    method="GET"
  >
    <div class="grid grid-rows-1 gap-3 sm:grid-cols-2">
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
          class="border-dh-black pointer-events-auto w-full border-2 px-4 py-2"
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
          class="border-dh-black pointer-events-auto w-full border-2 px-4 py-2"
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
        class="border-dh-black pointer-events-auto border-2 px-4 py-2"
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
        class="border-dh-black flex h-fit min-h-10 w-full flex-row flex-wrap items-center gap-3 border-2 bg-white px-4 py-2"
        onfocus={() => {
          reason ? reason.focus() : "";
        }}
      >
        {#each $chips as chip (chip[0])}
          <span
            class="bg-dh-orange flex h-[1.6em] flex-row items-start rounded-xl px-2 font-semibold text-white"
            >{chip[1]}<button
              class="pr-3 pl-1"
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
          class="pointer-events-auto w-fit pl-1 focus-visible:outline-none"
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
        class="border-dh-black pointer-events-auto border-2 pl-1"
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

    <div class="card-body self-end py-3">
      <button
        onmousedown={() => (form ? reset(form) : "")}
        id="clear"
        class="btn pointer-events-auto bg-gray-400 text-zinc-50"
      >
        Clear
      </button>
      <button
        type="submit"
        id="btnSubmitHmuForm"
        class="btn bg-dh-orange pointer-events-auto text-zinc-50"
        onmousedown={() => (form ? submitHitMeUp(form, dialog!) : "")}
      >
        HIT ME UP!
      </button>
    </div>
  </form>
</dialog>
