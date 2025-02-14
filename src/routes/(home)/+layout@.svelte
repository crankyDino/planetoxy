<script lang="ts">
  import Sidebar from "$lib/components/sidebar/sidebar.svelte";
  import TerminalBar from "$lib/components/terminal-bar/terminal-bar.svelte";
  let { children } = $props();
</script>

<Sidebar />
<!-- {@render children()} -->
<slot />
