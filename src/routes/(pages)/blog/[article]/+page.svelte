<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import "./article.css";
  import Sidebar from "$lib/components/sidebar/sidebar.svelte";
  import type { IArticleMedia } from "$lib/models/article.model";
  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  let title = $page.url.pathname;

  let { data }: Props = $props();
  let { getMedia, loadArticle } = $derived(data);
  let { Article } = $derived(loadArticle);

  let paragraphMedia: Array<IArticleMedia> = $state([]);
  let media: Array<any> = $derived([]);
  let bannerBox: HTMLDivElement | null = $state(null);

  let posX = $state(0);
  let posY = $state(0);
  let offset = $state(0);

  /**
   * TODO: figure out a better method than setTimeout
   */
  function alignBanner() {
    let x = setTimeout(() => {
      if (bannerBox) {
        // console.log("x", header.hotspot.x);
        // console.log("y", header.hotspot.y);
        // console.log("h", header.hotspot.height);
        // console.log("w", header.hotspot.width);
        // console.log("offset", bannerBox.offsetHeight);

        // posX = header.hotspot.x;
        // posY = header.hotspot.y;
        posX = $Article.data?.allArticle[0].header?.hotspot?.width || 0;
        posY = $Article.data?.allArticle[0].header?.hotspot?.height || 0;
        offset = bannerBox.offsetHeight;

        // const digitsBeforeDecimal =
        //   Math.floor(Math.log10(header.hotspot.height)) + 1; // Number of digits before the decimal point
        // const scaledNum =
        //   header.hotspot.height / Math.pow(10, digitsBeforeDecimal); // Scale the number down
        // const result = parseFloat(scaledNum.toFixed(4));

        // console.log(result);
        // header.hotspot.height = (bannerBox.offsetHeight * result) / 100;
      }
      clearTimeout(x);
    }, 0);
  }

  function loadMedia(ref: string, key: string) {
    getMedia(ref)
      .then((res: any) => {
        console.log(res);
        paragraphMedia.push({
          contentUrl: res[0].contentUrl,
          description: res[0].description,
          title: res[0].title,
          type: res[0].type,
          ref: key,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onload() {
    let key: string = "";

    ($Article.data!.allArticle[0].paragraphRaw as any[]).map((p: any) => {
      if (p.style === "normal") {
        key = p._key;
      }

      if (p._type.includes("reference")) {
        const ref = p._ref;
        loadMedia(ref, key);
      }
    });
  }

  onMount(() => {
    console.log("loadArticle", $Article);

    if (!$Article.fetching) {
      onload();
    }

    // alignBanner();
    // header.hotspot.width = (bannerBox.offsetHeight * header.hotspot.width) / 100;
  });
</script>

<Sidebar />
{#if !$Article.fetching}
  <div
    {onload}
    bind:this={bannerBox}
    class="banner h-[9em] md:h-60 lg:h-96 overflow-hidden -z-10 w-full bg-fixed bg-no-repeat"
    style="background-image: url({$Article.data!.allArticle[0].header!.asset!
      .url}); background-size: 100%; background-position:calc({posX}% ) calc(({posY}% + ({offset}px / 3.8)) - min({offset}px, 100vh / 2))"
  ></div>
  <div class="md:pl-12 lg:pl-40">
    <section class="grid grid-cols-12 w-full px-4 gap-y-6 py-0">
      <div class="grid sm:flex flex-col col-span-12 md:flex-row w-fit">
        <div class="w-full">
          <h1
            class="bg-dh-black relative bottom-7 md:bottom-12 lg:bottom-8 w-fit max-w-[45vw] md:w-[50vw] font-hanuman font-extrabold text-dh-orange text-[1.5em] md:text-6xl text-wrap lg:text-nowrap p-2 md:p-4 md:pb-6"
          >
            {$Article.data!.allArticle[0].title}
          </h1>
          <div
            class="font-quirkyrobot bg-dh-black text-dh-gray pl-2 pr-8 w-fit"
          >
            <p class="letter--spacing--sm text-[1.3em]">
              By: {$Article.data!.allArticle[0].author ?? "olepiob"}
            </p>
            <p
              style="letter-spacing: 3px;
              word-spacing: -3px;"
              class="text-[.9em]"
            >
              {$Article.data!.allArticle[0].published?.split("T")[0]}
            </p>
          </div>
        </div>
        <div
          class="text-nowrap px-2 md:pr-0 md:pl-4 flex flex-row gap-2 h-fit w-full overflow-auto top-[34%] md:top-[10px] relative"
        >
          {#each $Article.data!.allArticle[0].tags! as tag}
            <p
              class="letter--spacing--md font-quirkyrobot text-dh-orange text-[.9em]"
            >
              #{tag!.tagName}
            </p>
          {/each}
        </div>
      </div>

      <div class="col-span-12 md:col-span-8 lg:col-span-6 space-y-3">
        {#each $Article.data!.allArticle[0].paragraphRaw as paragraph}
          {#if paragraph.style?.includes("h")}
            <h3
              class="title__backdrop font-quirkyrobot text-dh-gray h-24 w-[75vw] max-h-full pl-2 text-[6em] mb-[1rem]"
            >
              {paragraph.children[0].text}
            </h3>
          {/if}

          {#if paragraph.style === "normal"}
            {#each paragraph.children as body}
              <div class="font-space-mono text-dh-gray pl-2 text-[.85]">
                {body.text}
              </div>
            {/each}
            {#if paragraphMedia.length > 0 && paragraphMedia.some((p) => p.ref === paragraph._key)}
              <div class="flex flex-row gap-x-8 text-dh-gray">
                {#each paragraphMedia as card}
                  {#if card.contentUrl && card.ref === paragraph._key}
                    <img
                      class="pl-2 !h-full !w-[45%]"
                      src={card.contentUrl}
                      alt={card.contentUrl}
                    />
                  {/if}
                {/each}
              </div>
            {/if}
          {/if}
        {/each}
      </div>
    </section>
  </div>

  {#if $Article.data!.allArticle[0].media!.length > 0}
    <div
      class="flex flex-row gap-x-8 h-full absolute z-10 top-[40em] left-[58em]"
    >
      {#each $Article.data!.allArticle[0].media! as card}
        {#if card!.contentUrl}
          <img
            class=" pl-2 h-80 w-full"
            width="150"
            src={card!.contentUrl}
            alt={card!.contentUrl}
          />
        {/if}
      {/each}
    </div>
  {/if}
{/if}
