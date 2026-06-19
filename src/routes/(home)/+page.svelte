<script lang="ts">
  import type { ICarouselItem } from "$lib/components/carousel/carousel";
  import ContactDialog from "$lib/components/contact-dialog/contact-dialog.svelte";
  import { onMount } from "svelte";
  import Terminal from "../../lib/components/terminal/terminal.svelte";
  import type { PageData } from "./$houdini";
  import type { Props } from "$lib/models/prop.model";
  import Carousel from "$lib/components/carousel/carousel.svelte";

  let { data }: Props<PageData> = $props();

  let dialog: any;
  let carouselContent = $state(Array<ICarouselItem>());

  const { PortfolioCarousel, Headshot } = $derived(data);

  onMount(() => {
    if (
      !$PortfolioCarousel.data ||
      $PortfolioCarousel.data.allCarousel.length === -1
    ) {
      return;
    }

    carouselContent = ($PortfolioCarousel.data.allCarousel[0].media ?? [])
      .filter((item): item is NonNullable<typeof item> => item !== null)
      .map(
        (item): ICarouselItem => ({
          title: item.title!,
          description: item.description!,
          type: item.mediaType!,
          projectType: item.projectType!,
          contentUrl: item.contentUrl!,
          link: item.link!,
          dateCreated: new Date(item.dateCreated!),
        }),
      );
  });
</script>

<section
  id="antihero"
  class="container m-auto flex flex-col items-center justify-between justify-items-end gap-8 px-4 pb-24 md:px-24 lg:flex-row"
>
  <!-- terminal -->
  <Terminal />
  <div
    class="hero__tagline text-dh-white grid h-full justify-items-center md:grid-flow-col md:items-start md:gap-x-4 lg:w-[47vw] lg:gap-7 xl:items-end"
  >
    <div
      class="hero__name flex h-fit flex-col justify-start md:w-[88%] lg:w-fit"
    >
      <p class="font-space-mono text-lg text-nowrap">Hi, I'm</p>
      <div class=" justify-right flex flex-row py-2.5 md:py-0">
        <h1
          class="shadow--solid__ashley font-pokemon-classic z-10 pl-6 text-3xl font-bold"
        >
          ASHLEY.
        </h1>
      </div>
    </div>
    <!-- <div class="w-full flex md:flex-row lg:flex-col flex-col md:justify-center items-end gap-4"> -->
    <p
      class="hero__intro font-space-mono mb-2 w-4/5 text-justify text-xl sm:w-4/6 sm:text-right md:w-[88%] md:text-justify lg:w-full xl:w-4/5 xl:text-end"
    >
      <strong class="text-dh-orange">I Make</strong>
      cool websites, take pretty pictures and film epic videos
    </p>

    <div
      class="hero__cta justify-even flex w-max flex-row content-end gap-3 pt-4 md:flex-col md:pt-0 lg:flex-row xl:flex-col"
    >
      <button class="btn bg-dh-orange text-dh-white">
        <a href="/projects">Projects</a>
      </button>
      <button
        onclick={() => dialog.open()}
        id="btnOpenHmuForm"
        class="btn border-dh-orange text-dh-white border-[3px] bg-transparent"
      >
        HIT ME UP!
      </button>
    </div>
    <!-- </div> -->
  </div>
</section>

<section
  class="container m-auto mb-2 flex flex-col items-center justify-between justify-items-end gap-2 px-8 md:flex-row md:px-16 lg:pl-32"
>
  <div id="about_me" class="text-dh-white col-auto w-full space-y-5 md:w-3/4">
    <h2
      style="word-spacing: -0.5rem; "
      id="about_me_headline"
      class="shadow--solid__about-me font-pokemon-classic! relative z-10 mb-4 text-[6vw] font-semibold tracking-[3.6px] sm:text-[2.6rem] md:text-4xl lg:text-5xl"
    >
      A
      <!-- <strong
        class="text-dh-orange font-hanuman text-[10vw] md:text-5xl lg:text-6xl"
        >Bit</strong
      > -->
      Bit About Me
    </h2>
    <p
      class="paragraph font-space-mono mb-2 text-justify first-letter:text-[2rem] first-letter:font-bold before:w-8 md:mt-auto! md:w-11/12 md:text-start lg:w-3/5"
    >
      I am a self-taught Web Developer, Graphic Designer and Videographer from
      South Africa. I also enjoy playing around with Machine Learning and
      Blockchain technologies. I made this website using vanilla HTML/CSS &
      Javascript.
    </p>

    <div class="skills mb-1 w-full">
      <h3
        class="text-dh-orange font-space-mono text-base font-bold md:text-2xl"
      >
        Technologies I've worked with
      </h3>
      <ul
        style="line-height: 1.5em"
        class="font-space-mono m-0 flex h-24 max-w-xl list-none flex-col flex-wrap overflow-hidden pl-1.5"
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
      class="btn bg-dh-orange border-dh-orange text-dh-white border-[3px]"
    >
      View CV
    </button>
  </div>
  <div
    id="pictureFrame"
    style="width: fit-content"
    class="relative col-span-2 col-start-2 m-auto pt-6 md:mr-[2%]"
  >
    <div>
      <img
        class="headshot relative z-2 w-36 xl:w-52"
        src={$Headshot.data?.allGraphic[0].contentUrl ??
          "/assets/bitmap/IMG_20200408_170956paint.jpg"}
        alt=""
      />
      <span
        style="transform: translateX(-42%) translateY(-89%)"
        id="pictureFrame"
        class="absolute left-9 z-1 w-36 xl:w-52"
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
    class="shadow--solid__portfolio font-pokemon-classic text-dh-white z-10 container m-auto mb-2 px-8 pb-2 text-center text-[8vw] font-bold md:px-16 md:text-2xl lg:pl-32 lg:text-4xl"
  >
    Portfolio
  </h3>
  <!-- <Carousel carouselItems={things} carouselType={"card"} /> -->
  {#if !$PortfolioCarousel.fetching && $PortfolioCarousel?.data}
    <Carousel animate={false} carouselItems={carouselContent}></Carousel>
  {/if}
</section>
<section class="grid grid-rows-1 py-12"></section>

<ContactDialog bind:this={dialog} />
