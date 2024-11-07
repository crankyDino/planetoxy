<script lang="ts">
  import "../styles/style.css";
  import Navbar from "../lib/components/navbar/navbar.svelte";
  // @ts-ignore
  import Sidebar from "../lib/components/sidebar/sidebar.svelte";
  import Footer from "$lib/components/footer/footer.svelte";

  // interface Props {
  //   children: null | import("svelte").Snippet;
  // }
  // let { children }: Props = $props();
</script>

<Navbar />

<div class="h-100% min-h-[100vh]">
  <!-- {@render children()} -->
  <slot />
</div>
<Footer />
