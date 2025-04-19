<script lang="ts">
  import { page } from "$app/state";
  import { onMount } from "svelte";
  import "./article.css";
  import Sidebar from "$lib/components/sidebar/sidebar.svelte";
  import type { IArticleMedia } from "$lib/models/article.model";
  import type { PageData } from "./$types";
  import type { Props } from "$lib/models/prop.model";
  import { getMedia } from "$lib/util/sanity.util";
  import type { Article as hdAritcle } from "$houdini";
  import { centerHotspot } from "$lib/util/apply-hotspot.util";

  let loading: boolean = $state(true);
  let title = $state(page);

  let { data }: Props<PageData> = $props();
  let { loadArticle } = $derived(data);
  let { Article } = $derived(loadArticle);
  let _article = $derived($Article.data?.allArticle[0]!);

  let paragraphMedia: Array<IArticleMedia> = $state([]);

  async function loadMedia(ref: string, key: string) {
    loading = true;
    const { res } = await getMedia(ref);

    paragraphMedia.push({
      contentUrl: res[0].contentUrl,
      description: res[0].description,
      title: res[0].title,
      type: res[0].type,
      ref: key,
    });

    loading = false;
  }

  onMount(() => {
    $effect(() => {
      if (!$Article.fetching) {
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
        // alignBanner();
        // $Article.data?.allArticle[0].header;
      }
    });

    // header.hotspot.width = (bannerBox.offsetHeight * header.hotspot.width) / 100;
  });
</script>

<Sidebar />
{#if !$Article.fetching && !loading}
  <div
    use:centerHotspot={_article}
    class="banner h-[9em] md:h-60 lg:h-96 overflow-hidden -z-10 w-full bg-fixed bg-no-repeat"
    style="background-image: url({_article.header!.asset!
      .url}); background-size: 100%;"
  ></div>
  <!-- <div
    bind:this={banner}
    use:centerHotspot
    class="banner h-[9em] md:h-60 lg:h-96 overflow-hidden -z-10 w-full bg-fixed bg-no-repeat"
    style="background-image: url({_article.header!.asset!
      .url}); background-size: 100%; background-position:calc({posX}% ) calc(({posY}% + ({offset}px / 3.8)) - min({offset}px, 100vh / 2))"
  ></div> -->
  <div class="md:pl-12 lg:pl-40">
    <section class="grid grid-cols-12 w-full px-4 gap-y-6 py-0">
      <div class="grid sm:flex flex-col col-span-12 md:flex-row w-fit">
        <div class="w-full">
          <h1
            class="bg-dh-black relative bottom-7 md:bottom-12 lg:bottom-8 w-fit md:max-w-[45vw] md:w-[50vw] font-hanuman font-extrabold text-dh-orange text-[1.5em] md:text-6xl text-wrap lg:text-nowrap p-2 md:p-4 md:pb-6"
          >
            {_article.title}
          </h1>
          <div
            class="font-quirkyrobot bg-dh-black text-dh-gray pl-2 pr-8 w-fit"
          >
            <p class="letter--spacing--sm text-[1.3em]">
              By: {_article.author ?? "olepiob"}
            </p>
            <p
              style="letter-spacing: 3px;
              word-spacing: -3px;"
              class="text-[.9em]"
            >
              {new Date(_article.published!).toISOString().split("T")[0]}
            </p>
          </div>
        </div>
        <div
          class="text-nowrap px-2 md:pr-0 md:pl-4 flex flex-row gap-2 h-fit w-full overflow-auto top-[34%] md:top-[10px] relative"
        >
          {#each _article.tags! as tag}
            <p
              class="letter--spacing--md font-quirkyrobot text-dh-orange text-[.9em]"
            >
              #{tag!.tagName}
            </p>
          {/each}
        </div>
      </div>

      <div class="col-span-12 md:col-span-8 lg:col-span-6 space-y-3">
        {#each _article.paragraphRaw! as any as paragraph}
          {#if paragraph.style?.includes("h")}
            <h3
              style="letter-spacing: 0.08em; line-height: 100%;"
              class="title__backdrop font-quirkyrobot text-dh-orange mb-auto h-min md:h-24 md:w-[75vw] md:max-h-full pl-2 text-[2.8em] md:text-[6em] font-bold"
            >
              {paragraph.children[0].text}
            </h3>
          {/if}

          {#if paragraph.style === "normal"}
            {#each paragraph.children as body}
              <div class="font-space-mono text-dh-gray pl-2 text-[.7em]">
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

  <!-- {#if _article.media!.length > 0}
    <div
      class="flex flex-row gap-x-8 h-full absolute z-10 top-[40em] left-[58em]"
    >
      {#each _article.media! as card}
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
  -->
{/if}
