<script lang="ts">
  import Sidebar from "$lib/components/sidebar/sidebar.svelte";
  import type { Props } from "$lib/models/prop.model";
  import { centerHotspot } from "$lib/util/apply-hotspot.util";
  import type { PageData } from "./$houdini";

  let { data }: Props<PageData> = $props();
  let { Portfolio } = $derived(data);
  let _portfolio = $derived($Portfolio.data?.allPortfolio[0]!);
  // $inspect(Portfolio);
  // console.log($Portfolio);
</script>

<Sidebar />
{#if !$Portfolio.fetching}
  <div
    class="banner h-[9em] md:h-60 lg:h-[33rem] overflow-hidden -z-10 w-full md:bg-fixed bg-no-repeat bg-[10%]"
    style="background-image: url({_portfolio.banner?.asset
      ?.url}); background-size: auto; background-position:66%;"
  ></div>

  <div
    class="grid md:grid-flow-col gap-y-6 justify-center lg:w-fit mt-8 mx-12 lg:mx-auto md:gap-x-12 lg:gap-x-16"
  >
    <img
      class="margin-auto w-3/4 justify-self-center md:w-2xs col-span-1"
      src={_portfolio.hero?.contentUrl}
      alt=""
    />
    <div class="grid grid-flow-row gap-y-6 md:col-span-12">
      <div class="flex flex-col gap-y-2 col-span-6">
        <h1 class="font-space-mono text-dh-orange font-bold text-3xl">
          {_portfolio.title}
        </h1>
        <p class="font-space-mono text-dh-white">
          > {_portfolio.details?.project}
        </p>
        <p class="font-space-mono text-dh-white">
          > {_portfolio.details?.projectType}
        </p>
        <p class="font-space-mono text-dh-white">
          > {new Date(
            $Portfolio.data?.allPortfolio[0].details?.date!
          ).getFullYear()}
        </p>
      </div>
      <img
        class="margin-auto col-span-12 w-xs md:col-start-4 lg:col-start-12 lg:self-end"
        src={_portfolio.media?.contentUrl}
        alt="rare club poster"
      />
    </div>
  </div>

  <div class="mt-12">
    <div class="marquee absolute flex flex-row w-full">
      <h2
        class="marquee-text font-pokemon-classic text-7xl text-dh-white font-extrabold invert-100 mix-blend-exclusion text-nowrap"
        style="-webkit-text-stroke: 2px #dddddd;"
      >
        {_portfolio.title}
      </h2>
    </div>
    <img
      class="m-auto w-3xl col-start-4"
      src={_portfolio.mockup?.contentUrl}
      alt="rare club poster"
    />
  </div>
{/if}
