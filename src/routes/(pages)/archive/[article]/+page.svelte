<script lang="ts">
  import Sidebar from "$lib/components/sidebar/sidebar.svelte";
  import type { Props } from "$lib/models/prop.model";
  import type { PageData } from "./$houdini";
  import type { IArticleMedia } from "$lib/models/article.model";
  import { getMedia } from "$lib/util/sanity.util";
  import { onMount } from "svelte";

  let { data }: Props<PageData> = $props();
  let { Article } = $derived(data);
  // let article = $derived($Article.data?.allArticle[0]);
  let paragraphMedia: Array<IArticleMedia> = $state([]);

  async function loadMedia(ref: string, key: string) {
    const { res } = await getMedia(ref);

    paragraphMedia.push({
      contentUrl: res[0].contentUrl,
      description: res[0].description,
      title: res[0].title,
      type: res[0].type,
      ref: key,
    });
  }

  $inspect($Article);

  onMount(() => {
    $effect(() => {
      if (!$Article.fetching) {
        let key: string = "";

        // (($Article.data! as any).allArticle[0].paragraph as any[]).map(
        //   (p: any) => {
        //     if (p.style === "normal") {
        //       key = p._key;
        //     }

        //     if (p._type.includes("reference")) {
        //       const ref = p._ref;
        //       loadMedia(ref, key);
        //     }
        //   },
        // );
        // alignBanner();
      }
    });

    // header.hotspot.width = (bannerBox.offsetHeight * header.hotspot.width) / 100;
  });
</script>

<Sidebar />
{#if !$Article.fetching}
  <section class="px-8 py-6 sm:px-18 md:px-14 lg:mx-16 xl:m-auto xl:w-4/5">
    <div class="flex flex-col gap-y-[1.2em] md:flex-row md:gap-x-4 xl:gap-x-16">
      <div
        class="col-span-12 col-start-1 row-start-1 w-full md:col-span-6 md:row-span-12"
      >
        <h1
          class=" md:m-initial text-dh-orange font-space-mono text-dh-orange col-span-12 block pb-4 text-left text-3xl font-extrabold wrap-break-word sm:hidden md:col-span-6 md:col-start-7 md:text-5xl"
        >
          {$Article.data?.allArticle[0].title}
        </h1>
        <div class="w-full">
          <img
            class="md:m-initial m-auto h-78 max-h-96 md:h-full lg:my-auto xl:h-[50vh]"
            src={$Article.data?.allArticle[0].intro!.media!.contentUrl}
            alt=""
          />

          {#if $Article.data?.allArticle[0]}
            <div class="w-fit flex-row py-1 pt-2 md:hidden">
              {#each $Article.data?.allArticle[0].tags as tag, i}
                <!-- TODO! Add tag filter for articles -->
                <button
                  class="text-dh-white hover:text-dh-orange! hover:cursor-pointer"
                  onclick={() => {
                    console.log(tag?.tagName);
                  }}
                >
                  <p
                    class="font-space-mono w-fit min-w-[11%] overflow-hidden pr-3 text-xs font-thin tracking-wider text-nowrap text-ellipsis"
                  >
                    #{tag?.tagName}
                    <!-- {#if $Article.data?.allArticle[0].tags!.length > i + 1}
                      <span class="text-dh-white">|</span>
                    {/if} -->
                  </p>
                </button>
              {/each}
            </div>
          {/if}
        </div>
      </div>

      <div
        class="col-span-12 col-start-1 flex w-[52w-20vw] flex-col gap-y-5 text-justify md:col-span-6 md:row-span-12 lg:mx-16"
      >
        <h1
          class="text-dh-white font-pokemon-classic col-span-12 hidden text-lg font-bold sm:block md:col-span-6 md:col-start-7 md:text-5xl"
        >
          {$Article.data?.allArticle[0].title}
        </h1>

        <p
          class="font-space-mono text-dh-white col-span-12 row-span-2 row-start-8 text-xs break-all md:col-span-6 md:col-start-7 xl:text-lg"
        >
          {$Article.data?.allArticle[0].intro?.paragraph}
        </p>

        <!-- {#if $Article.data?.allArticle[0].links}
          <ul class="m-auto grid grid-flow-col gap-x-4 sm:hidden">
            {#each $Article.data?.allArticle[0].links as link}
              <li>
                <a target="_blank" href={link?.url}>
                  <img
                    style="max-width: 4rem; width: 1.8rem;"
                    src={link?.icon?.contentUrl?.asset?.url}
                    alt={link?.icon?.title}
                    class="filter--white"
                  />
                </a>
              </li>
            {/each}
          </ul>
        {/if} -->
      </div>
    </div>

    <div class="flex justify-between gap-y-3 pt-4 sm:flex-col md:flex-row">
      {#if $Article.data?.allArticle[0]}
        <div class="hidden w-fit flex-row gap-3 py-1 md:flex">
          {#each $Article.data?.allArticle[0].tags as tag, i}
            <!-- TODO! Add tag filter for articles -->
            <button
              class="text-dh-white hover:text-dh-orange! hover:cursor-pointer"
              onclick={() => {
                console.log(tag?.tagName);
              }}
            >
              <p
                class="font-space-mono w-fit min-w-[11%] overflow-hidden text-xs font-thin tracking-wider text-nowrap text-ellipsis"
              >
                #{tag?.tagName}
                <!-- {#if $Article.data?.allArticle[0].tags!.length > i + 1}
                      <span class="text-dh-white">|</span>
                    {/if} -->
              </p>
            </button>
          {/each}
        </div>
      {/if}

      {#if $Article.data?.allArticle[0].links}
        <ul class="w-fit gap-x-4 sm:grid sm:grid-flow-col">
          {#each $Article.data?.allArticle[0].links as link}
            <li>
              <a target="_blank" href={link?.url}>
                <img
                  style="max-width: 4rem; width: 1.8rem;"
                  src={link?.icon?.contentUrl?.asset?.url}
                  alt={link?.icon?.title}
                  class="filter--white"
                />
              </a>
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  </section>

  <section
    class="flex flex-col justify-between gap-y-7 px-8 py-6 sm:px-18 md:flex-row md:px-14 lg:mx-16 xl:m-auto xl:w-4/5"
  >
    <div class="font-space-mono ml-6">
      <h4 class="text-dh-orange text-2xl font-extrabold">Stack</h4>

      <ul class="text-white">
        <li>> thing thang</li>
        <li>> thangalang</li>
        <li>> thang thang</li>
      </ul>
    </div>

    <div class="m-auto h-48 w-66 overflow-hidden rounded-md md:m-0 md:w-96">
      <img src={$Article.data?.allArticle[0].intro!.media!.contentUrl} alt="" />
    </div>
  </section>

  <section
    class="flex flex-col justify-between px-8 py-6 sm:px-18 md:flex-row md:px-14 lg:mx-16 xl:m-auto xl:w-4/5"
  >
    <h4 class="text-dh-orange text-3xl font-extrabold md:hidden">
      Title Of Thang
    </h4>
    <div class="w-52 overflow-hidden rounded-md">
      <img src={$Article.data?.allArticle[0].intro!.media!.contentUrl} alt="" />
    </div>

    <div class="font-space-mono ml-6 flex flex-col">
      <h4 class="text-dh-orange hidden text-3xl font-extrabold md:block">
        Title Of Thang
      </h4>

      <ul class="text-white">
        <li>Client | ipsum dolor sit</li>
        <li>Medium | dolor / sit</li>
        <li>Circa | 2006</li>
      </ul>
    </div>
  </section>

  <section
    class="flex justify-between px-8 py-6 sm:px-18 md:px-14 lg:mx-16 xl:m-auto xl:w-4/5"
  >
    <div class="font-space-mono ml-6 flex w-fit flex-col">
      <h4 class="text-dh-orange text-3xl font-extrabold">Stack</h4>

      <p class="w-4/5 text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quis
        animi dicta sapiente? Explicabo amet nostrum ipsa corrupti inventore?
        Eum facere nisi accusamus ad, pariatur doloribus impedit possimus earum
        praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Architecto quis animi dicta sapiente? Explicabo amet nostrum ipsa
        corrupti inventore? Eum facere.
      </p>
    </div>

    <div class="w-72 overflow-hidden rounded-md">
      <img src={$Article.data?.allArticle[0].intro!.media!.contentUrl} alt="" />
    </div>
  </section>

  <section
    class="relative mt-6 px-8 py-6 sm:px-18 md:px-14 lg:mx-16 xl:m-auto xl:w-4/5"
  >
    <div
      class="marquee absolute top-0 left-1/2 z-20 w-screen -translate-x-1/2 -translate-y-1/2"
    >
      <h2
        class="marquee-text font-pokemon-classic text-dh-white text-5xl font-extrabold text-nowrap invert-0 sm:text-6xl lg:text-7xl xl:text-[9rem]"
      >
        some cool shit i'd say
      </h2>
    </div>
    <div
      class="m-auto h-32 w-4/5 overflow-hidden rounded-md lg:h-72 xl:h-80 xl:w-3/5"
    >
      <img src={$Article.data?.allArticle[0].intro!.media!.contentUrl} alt="" />
    </div>
  </section>

  <section
    class="mx-auto my-8 flex justify-center px-8 py-6 text-center sm:px-18 md:px-14 xl:w-fit"
  >
    <span class="text-3xl text-white xl:text-6xl">``</span>
    <p class="w-4/5 font-bold text-white xl:w-1/3 xl:text-3xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quis
      animi dicta sapiente?
    </p>
    <span class="rotate-180 pl-3 text-3xl text-white xl:text-6xl"> ``</span>
  </section>

  <div class="h-36 overflow-hidden">
    <img src={$Article.data?.allArticle[0].intro!.media!.contentUrl} alt="" />
  </div>
{/if}

<!-- {#if article}
  <section class="pt-6 px-8 sm:px-18 md:px-14 xl:w-4/5 xl:m-auto">
    <div class="grid md:grid-flow-col gap-y-[.2em] md:gap-x-4">
      <div
        class="col-start-1 row-start-1 md:row-span-12 col-span-12 md:col-span-6 pb-3"
      >
        <div class="pb-2 w-full">
          <img
            class="m-auto md:m-initial h-78 md:h-full max-h-96 xl:h-[50vh]"
            src={article.?.contentUrl}
            alt=""
          />

          {#if article.tags}
            <div class="flex flex-row py-1 gap-3">
              {#each article.tags as tag, i}
                <p
                  class=" text-dh-white w-fit tracking-wider text-sm font-space-mono font-thin min-w-[11%] overflow-hidden text-nowrap text-ellipsis"
                >
                  {tag?.tagName}
                  {#if article.tags.length > i + 1}
                    <span class="text-dh-white"> | </span>
                  {/if}
                </p>
              {/each}
            </div>
          {/if}
        </div>

        {#if article.links}
          <ul class="grid grid-flow-col md:grid-cols-6 gap-x-4">
            {#each article.links as link}
              <li>
                <a target="_blank" href={link?.url}>
                  <img
                    style="max-width: 4rem; width: 2.2rem;"
                    src="../assets/vectors/dh_logo.svg"
                    alt={link?.title}
                    class="filter--white"
                  />
                </a>
              </li>
            {/each}
          </ul>
        {/if}
      </div>

      <h1
        class="font-bold text-dh-white font-pokemon-classic text-lg md:text-5xl col-span-12 md:col-span-6 md:col-start-7"
      >
        {article.title}
      </h1>
      <p
        class="font-space-mono text-dh-white break-all text-xs xl:text-lg row-span-2 col-span-12 md:col-span-6 md:col-start-7 row-start-8"
      >
        {article.paragraph}
      </p>
    </div>

    <div class="grid md:grid-flow-col xl:grid-cols-12 gap-y-4 md:gap-x-4 pt-6">
      <div class="flex flex-col w-fit col-span-12 md:col-span-3">
        <h2
          class="text-dh-orange text-lg md:text-4xl font-bold font-pokemon-classic text-nowrap"
        >
          Tools Used
        </h2>
        <ul
          class="font-space-mono text-dh-white w-full text-md md:text-xl pt-3"
        >
          {#each article.stack! as any as tool}
            <li>> {tool}</li>
          {/each}
        </ul>
      </div>
      <div
        class="mx-auto w-4/5 col-span-12 md:col-span-9 xl:col-start-4 rounded-3xl overflow-hidden h-2/3 md:w-fit xl:w-[33vw] lg:h-[50%]"
      >
        <img
          use:centerHotspot={article.}
          class="md:h-auto w-full relative bottom-[25%] sm:bottom-[10vh] md:bottom-[50%]"
          src={article.mockup?.contentUrl}
          alt=""
        />
      </div>
    </div>
  </section>
  {/if} -->
