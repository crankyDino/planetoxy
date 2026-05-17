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
  <section class="pt-6 px-8 sm:px-18 md:px-14 xl:w-4/5 xl:m-auto">
    <div class="grid md:grid-flow-col gap-y-[.2em] md:gap-x-4 xl:gap-x-16">
      <div
        class="col-start-1 row-start-1 md:row-span-12 col-span-12 md:col-span-6 pb-3"
      >
        <h1
          class="sm:hidden block pb-4 wrap-break-word md:m-initial text-left text-dh-orange font-space-mono text-3xl font-extrabold text-dh-orange md:text-5xl col-span-12 md:col-span-6 md:col-start-7"
        >
          {$Article.data?.allArticle[0].title}
        </h1>
        <div class="pb-2 w-full">
          <img
            class="m-auto md:m-initial h-78 md:h-full max-h-96 xl:h-[50vh]"
            src={$Article.data?.allArticle[0].intro!.media!.contentUrl}
            alt=""
          />

          {#if $Article.data?.allArticle[0]}
            <div class="flex flex-row py-1 gap-3">
              {#each $Article.data?.allArticle[0].tags as tag, i}
                <!-- TODO! Add tag filter for articles -->
                <button
                  class="text-dh-white hover:text-dh-orange! hover:cursor-pointer"
                  onclick={() => {
                    console.log(tag?.tagName);
                  }}
                >
                  <p
                    class="w-fit tracking-wider text-sm font-space-mono font-thin min-w-[11%] overflow-hidden text-nowrap text-ellipsis"
                  >
                    #{tag?.tagName}
                    {#if $Article.data?.allArticle[0].tags!.length > i + 1}
                      <span class="text-dh-white">|</span>
                    {/if}
                  </p>
                </button>
              {/each}
            </div>
          {/if}
        </div>

        {#if $Article.data?.allArticle[0].links}
          <ul class="hidden sm:grid sm:grid-flow-col md:grid-cols-6 gap-x-4">
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

      <div class="col-start-1 md:row-span-12 col-span-12 md:col-span-6 pb-3 flex flex-col gap-y-5">
        <!-- <div class="flex flex-col col-start-1 w-full md:w-3/4 gap-y-4 md:gap-y-12"> -->
        <h1
          class="hidden sm:block font-bold text-dh-white font-pokemon-classic text-lg md:text-5xl col-span-12 md:col-span-6 md:col-start-7"
        >
          {$Article.data?.allArticle[0].title}
        </h1>
        <p
          class="font-space-mono text-dh-white break-all text-xs xl:text-lg row-span-2 col-span-12 md:col-span-6 md:col-start-7 row-start-8"
        >
          {$Article.data?.allArticle[0].intro?.paragraph}
        </p>

        {#if $Article.data?.allArticle[0].links}
          <ul class="sm:hidden m-auto grid grid-flow-col md:grid-cols-6 gap-x-4">
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
    </div>
  </section>
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
