<script lang="ts">
  import "./portfolio.css";
  import Sidebar from "$lib/components/sidebar/sidebar.svelte";
</script>

<Sidebar />

<div class="marquee absolute flex flex-row top-48 w-full">
  <h1
    class="marquee-text font-pokemon-classic text-9xl text-dh-white font-extrabold invert-100 mix-blend-exclusion"
    style="    -webkit-text-stroke: 2px #dddddd;"
  >
    RARECLUB
  </h1>
</div>

<div class="grid grid-flow-row m-auto w-6/7">
  <div class="relative grid col-span-8 row-span-8 col-start-1 row-start-1">
    <div
      class="col-start-1 col-span-3 row-start-1 rounded-lg justify-self-start overflow-hidden relative left-[-1%]"
    >
      <img
        class=" border border-dh-orange relative h-auto w-[400px] xl:w-[28vw]"
        style="clip-path: inset(15px 0px);"
        src="https://media.digitalhippie.xyz/beat%20tape%20cover.jpg"
        alt="a thing"
      />
    </div>
    <div
      class="col-start-3 col-span-3 row-start-1 rounded-lg justify-self-start overflow-hidden w-fit xl:w-[28vw] h-[15em] xl:h-[33vh] relative top-[10rem] xl:top-[20rem]  mix-blend-hard-light invert-75 scale-125"
    >
      <img
        class="z-10 border border-dh-orange bottom-[50%] relative h-auto w-[400px] xl:w-full"
        style="clip-path: inset(15px 0px);"
        src="https://media.digitalhippie.xyz/beat%20tape%20cover.jpg"
        alt="a thing"
      />
    </div>
  </div>
  <div
    class="relative grid col-span-5 row-span-8 col-start-5 xl:col-start-3 row-start-1 pl-8 pb-12"
  >
    <div class="flex flex-col row-start-2">
      <h4
        class="font-space-mono text-dh-orange text-3xl font-bold"
        style="letter-spacing: .4em;"
      >
        RARECLUB
      </h4>
      <p class="font-space-mono text-dh-dark-gray text-xl">poster design</p>
      <p class="font-space-mono text-dh-dark-gray text-xl">2020</p>
    </div>
    <a
      class="flex col-start-12 row-start-12 items-center justify-center self-end btn bg-dh-orange border-[3px] border-dh-orange text-dh-white"
      href="http://">View</a
    >
  </div>
</div>

<div class="flex flex-row w-full justify-center gap-24">
  <button class="">
    <img
      class="headshot w-10 relative z-[2] rotate-180"
      src="/assets/vectors/icons/arrow-right.svg"
      alt="left navigation arrow button "
    />
  </button>
  <button class="">
    <img
      class="headshot w-10 relative z-[2]"
      src="/assets/vectors/icons/arrow-right.svg"
      alt="right navigation arrow button "
    />
  </button>
</div>
