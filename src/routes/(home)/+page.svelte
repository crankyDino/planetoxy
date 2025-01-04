<script lang="ts">
  import type { ICarouselItem } from "$lib/components/carousel/carousel";
  import Carousel from "$lib/components/carousel/carousel.svelte";
  import ContactDialog from "$lib/components/contact-dialog/contact-dialog.svelte";
  import StaggeredCarousel from "$lib/components/staggered-carousel/staggered-carousel.svelte";
  import { onMount } from "svelte";

  import Terminal from "../../lib/components/terminal/terminal.svelte";
  let moreThings: Map<number, ICarouselItem> = new Map<number, ICarouselItem>();
  let dialog: any;

  import type { PageData } from "./$houdini";

  interface Props {
    data: PageData;
  }
  const { data } = $props();
  const { PortfolioCarousel } = $derived(data);

  onMount(() => {
    // console.log($inspect($PortfolioCarousel));
    // portfolioCarousel.PortfolioCarousel.fetch().then(({ data }: any) => {
    //   carouselMedia = data.allCarousel[0].media;
    // });
  });
</script>

<section
  id="antihero"
  class="container flex flex-col lg:flex-row justify-between justify-items-end items-center gap-8 m-auto pb-24 px-4 md:px-24"
>
  <!-- terminal -->
  <Terminal />
  <div
    class="hero__tagline grid md:grid-flow-col md:gap-x-4 lg:gap-7 justify-items-center sm:justify-items-end md:items-start xl:items-end lg:w-[47vw] h-full text-white-dh"
  >
    <div
      class="hero__name flex flex-col h-fit justify-start lg:w-fit md:w-[88%]"
    >
      <p class="text-nowrap font-space-mono text-lg">Hi, I'm</p>
      <div class=" flex flex-row justify-right">
        <h1
          class="shadow--solid__ashley font-pokemon-classic font-bold text-3xl pl-6"
        >
          ASHLEY.
        </h1>
      </div>
    </div>
    <!-- <div class="w-full flex md:flex-row lg:flex-col flex-col md:justify-center items-end gap-4"> -->
    <p
      class="hero__intro mb-2 text-justify sm:text-right font-space-mono text-xl w-4/5 sm:w-4/6 md:w-[88%] xl:w-4/5 xl:text-end lg:w-full md:text-justify"
    >
      <strong class="text-orange-dh">I Make</strong>
      cool websites, take pretty pictures and film epic videos
    </p>

    <div
      class="hero__cta w-max flex flex-row sm:flex-col lg:flex-row xl:flex-col gap-3 justify-even content-end"
    >
      <button class="btn bg-orange-dh text-white-dh">
        <a href="https://medium.com/@bamodise">MY BLOG</a>
      </button>
      <button
        onclick={() => dialog.open()}
        id="btnOpenHmuForm"
        class="btn bg-transparent border-[3px] border-orange-dh text-white-dh"
      >
        HIT ME UP!
      </button>
    </div>
    <!-- </div> -->
  </div>
</section>

<section
  class="container flex flex-col md:flex-row justify-between justify-items-end items-center gap-2 m-auto mb-2 px-8 md:px-16 lg:pl-32"
>
  <div id="about_me" class="w-full md:w-3/4 col-auto text-white-dh space-y-5">
    <h2
      style="word-spacing: -0.5rem; "
      id="about_me_headline"
      class="shadow--solid__about-me tracking-[3.6px] font-semibold mb-4 !font-pokemon-classic text-[10vw] md:text-4xl lg:text-5xl"
    >
      A
      <!-- <strong
        class="text-orange-dh font-hanuman text-[10vw] md:text-5xl lg:text-6xl"
        >Bit</strong
      > -->
      Bit About Me
    </h2>
    <p
      class="paragraph text-justify md:!mt-auto md:text-start md:w-11/12 lg:w-3/5 font-space-mono mb-2 before:w-8 first-letter:text-[2rem] first-letter:font-bold"
    >
      I am a self-taught Web Developer, Graphic Designer and Videographer from
      South Africa. I also enjoy playing around with Machine Learning and
      Blockchain technologies. I made this website using vanilla HTML/CSS &
      Javascript.
    </p>

    <div class="skills w-full mb-1">
      <h3
        class="text-orange-dh font-space-mono font-bold text-base md:text-2xl"
      >
        Technologies I've worked with
      </h3>
      <ul
        style="line-height: 1.5em"
        class="flex flex-col flex-wrap pl-1.5 m-0 max-w-xl h-24 font-space-mono list-none overflow-hidden"
      >
        <li>> Angular</li>
        <li>> ASP.NET</li>
        <li>> MySQL</li>
        <li>> Azure</li>
        <!--  -->
        <li>> Svelte</li>
        <li>> Figma</li>
        <li>> DaVinci Resolve</li>
        <li>> Blender</li>
      </ul>
    </div>

    <button
      class="btn bg-orange-dh border-[3px] border-orange-dh text-white-dh"
    >
      View CV
    </button>
  </div>
  <div
    id="pictureFrame"
    style="width: fit-content"
    class="m-auto relative mr-[2%] col-start-2 col-span-2"
  >
    <div>
      <img
        class="headshot w-36 relative z-[-1]"
        src="/assets/bitmap/IMG_20200408_170956paint.jpg"
        alt=""
      />
      <span
        style="transform: translateX(-42%) translateY(-89%)"
        id="pictureFrame"
        class="w-36 absolute z-[-2] left-9"
      >
        <svg
          class="pictureFrame"
          width="175"
          height="215"
          viewBox="0 0 175 245"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.844727 1.40002H173.876V243.621H0.844727V1.40002Z"
            stroke="#E77236"
            stroke-width="4"
          />
        </svg>
      </span>
    </div>
  </div>
</section>

<section class="grid grid-rows-1 pt-8">
  <h3
    class="shadow--solid__portfolio font-pokemon-classic container pb-2 text-center mb-2 px-8 md:px-16 lg:pl-32 text-white-dh text-[8vw] md:text-2xl lg:text-4xl"
  >
    Portfolio
  </h3>
  <!-- <Carousel carouselItems={things} carouselType={"card"} /> -->
  {#if !$PortfolioCarousel.fetching && $PortfolioCarousel?.data}
    <StaggeredCarousel
      carouselItems={$PortfolioCarousel.data.allCarousel[0].media}
      carouselType={"card"}
    ></StaggeredCarousel>
  {/if}
</section>
<section class="grid grid-rows-1 py-12">
  <Carousel
    carouselItems={moreThings}
    carouselType={"icon"}
    direction={"left"}
    grayscale={true}
  />
</section>
<ContactDialog bind:this={dialog} />

<style>
</style>
