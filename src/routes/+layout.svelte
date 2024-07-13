<script>
  import "../styles/style.css";
  import Navbar from "../lib/components/navbar/navbar.svelte";
  import Sidebar from "../lib/components/sidebar/sidebar.svelte";
  import Footer from "$lib/components/footer/footer.svelte";
</script>

<Navbar />
<Sidebar />
<slot />
<Footer />