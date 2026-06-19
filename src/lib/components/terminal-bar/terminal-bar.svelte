<script lang="ts">
  import { run } from "svelte/legacy";

  import "../terminal/terminal.css";
  import { page } from "$app/stores";
  let command: HTMLInputElement | null = $state(null);
  let path: string = $state("nowhere");
  run(() => {
    path = $page.url.pathname;
  });
</script>

<div
  class="text-dh-green sticky top-0 z-50 flex w-full flex-row bg-[#292929] text-xs md:text-sm"
>
  <p class=" pr-1 pb-1 pl-2 text-nowrap lg:pl-8">
    guest@<a href="/">home</a>{path ?? "/..."}{">"}
  </p>
  <input
    bind:this={command}
    type="text"
    class="w-full bg-transparent focus-within:outline-none"
    onkeydown={(key) => {
      if (key.code === "Enter" && command) {
        command.value = "";
      }
    }}
  />
  <!-- <span id="terminal_input" class="cli terminal__text"></span> -->
</div>
