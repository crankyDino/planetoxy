<script lang="ts">
  import "../styles/style.css";
  import Navbar from "../lib/components/navbar/navbar.svelte";
  // @ts-ignore
  import Sidebar from "../lib/components/sidebar/sidebar.svelte";
  import Footer from "$lib/components/footer/footer.svelte";
</script>

<Navbar />
<div class="h-100% min-h-[100vh]">
  <slot />
</div>
<Footer />
