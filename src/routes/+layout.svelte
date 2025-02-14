<script lang="ts">
  import "../app.css";
  import Navbar from "../lib/components/navbar/navbar.svelte";
  import Sidebar from "../lib/components/sidebar/sidebar.svelte";
  import Footer from "$lib/components/footer/footer.svelte";
  interface Props {
    children: null | import("svelte").Snippet;
  }
  let { children }: Props = $props();
</script>

<Navbar />

<div class="h-100% min-h-[100vh] bg-black-dh bg-light">
  {@render children!()}
</div>
<Footer />
