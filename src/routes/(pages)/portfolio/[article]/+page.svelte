<script lang="ts">
  import Sidebar from "$lib/components/sidebar/sidebar.svelte";
</script>

<Sidebar />

<div
  class="banner h-[9em] md:h-60 lg:h-[33rem] overflow-hidden -z-10 w-full bg-fixed bg-no-repeat bg-[10%]"
  style="background-image: url(https://media.digitalhippie.xyz/beat%20tape%20cover.jpg); background-size: 100%; "
></div>

<div
  class="grid grid-flow-col lg:w-fit mt-8 mx-12 lg:mx-auto gap-x-12 lg:gap-x-16"
>
  <img
    class="margin-auto w-2xs col-span-1"
    src="https://media.digitalhippie.xyz/DH%20Stretch.jpg"
    alt=""
  />
  <div class="grid grid-flow-row col-span-12">
    <div class="flex flex-col gap-y-2 col-span-6">
      <h1 class="font-space-mono text-dh-orange font-bold text-3xl">
        RARECLUB MAGAZINE
      </h1>
      <p class="font-space-mono text-dh-white">> RARECLUB MAGAZINE</p>
      <p class="font-space-mono text-dh-white">> Album art | Poster</p>
      <p class="font-space-mono text-dh-white">> 2019</p>
    </div>
    <img
      class="margin-auto w-xs col-start-4 lg:col-start-12 lg:self-end"
      src="https://media.digitalhippie.xyz/Vinyl.jpg"
      alt="rare club poster"
    />
  </div>
</div>

<div class="mt-12">
  <div class="marquee absolute flex flex-row w-full">
    <h2
      class="marquee-text font-pokemon-classic text-7xl text-dh-white font-extrabold invert-100 mix-blend-exclusion"
      style="-webkit-text-stroke: 2px #dddddd;"
    >
      RARECLUB
    </h2>
  </div>
  <img
    class="m-auto w-3xl col-start-4"
    src="https://media.digitalhippie.xyz/Vinyl.jpg"
    alt="rare club poster"
  />
</div>
