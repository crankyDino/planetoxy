<script lang="ts">
  import { beforeUpdate } from "svelte";
  import "../terminal/terminal.css";
  import { path } from "./terminal-bar";
  let command: HTMLInputElement | null = null;


  // $: path.set(window?.location?.pathname ?? "/..."), $path;
</script>

<div class="w-full bg-[#292929] flex flex-row text-green-dh">
  <p class="pl-8">guest@home{ $path ??"/..."} ></p>
  <input
    bind:this={command}
    type="text"
    class="bg-transparent focus-within:outline-none"
    on:keydown={(key) => {
      if (key.code === "Enter" && command) {
        command.value = "";
      }
    }}
  />
  <!-- <span id="terminal_input" class="cli terminal__text"></span> -->
</div>
