<script lang="ts">
  import { run } from 'svelte/legacy';

  
  import "../terminal/terminal.css";
  import { page } from "$app/stores";
  let command: HTMLInputElement | null = $state(null);
  let path: string = $state("nowhere");
  run(() => {
    path = $page.url.pathname;
  });
</script>

<div class="w-full bg-[#292929] flex flex-row text-dh-green sticky top-0 z-50">
  <p class=" pl-2 pr-1 lg:pl-8 pb-1 text-nowrap">
    guest@<a href="/">home</a>{path ?? "/..."}{">"}
  </p>
  <input
    bind:this={command}
    type="text"
    class="bg-transparent w-full focus-within:outline-none"
    onkeydown={(key) => {
      if (key.code === "Enter" && command) {
        command.value = "";
      }
    }}
  />
  <!-- <span id="terminal_input" class="cli terminal__text"></span> -->
</div>
