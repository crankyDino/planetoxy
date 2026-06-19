<script lang="ts">
  import "../app.css";
  import Navbar from "../lib/components/navbar/navbar.svelte";
  import Footer from "$lib/components/footer/footer.svelte";
  interface Props {
    children: null | import("svelte").Snippet;
  }
  let { children }: Props = $props();
</script>

<div class="flex min-h-screen flex-col">
  <Navbar />

  <div class="flex-1">
    {@render children!()}
  </div>

  <Footer />
</div>
