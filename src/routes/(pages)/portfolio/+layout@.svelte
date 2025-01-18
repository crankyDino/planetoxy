<script lang="ts">
  import TerminalBar from "$lib/components/terminal-bar/terminal-bar.svelte";
  let { children } = $props();
</script>

<TerminalBar />
<!-- {@render children()} -->
<slot />
