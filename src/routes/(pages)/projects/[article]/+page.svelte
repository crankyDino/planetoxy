<script lang="ts">
  import Sidebar from "$lib/components/sidebar/sidebar.svelte";
  import type { Props } from "$lib/models/prop.model";
  import { json } from "@sveltejs/kit";
  // import type { PageData } from "../$houdini";
  import type { PageData } from "./$types";
  import type { IArticleMedia } from "$lib/models/article.model";
  import { onMount } from "svelte";
  import { getMedia } from "$lib/util/sanity.util";

  let loading: boolean = $state(true);
  let { data }: Props<PageData> = $props();
  let { loadProject } = $derived(data);
  let { Project } = $derived(loadProject);
  let paragraphMedia: Array<IArticleMedia> = $state([]);

  console.log($Project);

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

  // onMount(() => {
  //   $effect(() => {
  //     if (!$Project.fetching) {
  //       let key: string = "";

  //       ($Project.data!.allProject[0].paragraph as any[]).map((p: any) => {
  //         if (p.style === "normal") {
  //           key = p._key;
  //         }

  //         if (p._type.includes("reference")) {
  //           const ref = p._ref;
  //           loadMedia(ref, key);
  //         }
  //       });
  //       // alignBanner();
  //     }
  //   });

  //   // header.hotspot.width = (bannerBox.offsetHeight * header.hotspot.width) / 100;
  // });
</script>

<Sidebar />
{#if !$Project.fetching}
  <section class="pt-6 px-8 sm:px-18 md:px-14 xl:w-4/5 xl:m-auto">
    <div class="grid md:grid-flow-col gap-y-[.2em] md:gap-x-4">
      <div
        class="col-start-1 row-start-1 md:row-span-12 col-span-12 md:col-span-6 pb-3"
      >
        <div class="pb-2 w-full">
          <img
            class="m-auto md:m-initial h-78 md:h-full max-h-96 xl:h-[50vh]"
            src={$Project.data?.allProject[0].hero?.contentUrl}
            alt=""
          />

          {#if $Project.data?.allProject[0].tags}
            <div class="flex flex-row py-1 gap-3">
              {#each $Project.data?.allProject[0].tags as tag, i}
                <p
                  class=" text-dh-white w-fit tracking-wider text-sm font-space-mono font-thin min-w-[11%] overflow-hidden text-nowrap text-ellipsis"
                >
                  {tag?.tagName}
                  {#if $Project.data?.allProject[0].tags.length > i + 1}
                    <span class="text-dh-white"> | </span>
                  {/if}
                </p>
              {/each}
            </div>
          {/if}
        </div>

        {#if $Project.data?.allProject[0].links}
          <ul class="grid grid-flow-col md:grid-cols-6 gap-x-4">
            {#each $Project.data?.allProject[0].links as link}
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
        class="font-bold text-dh-white font-pokemon-classic text-lg md:text-5xl col-span-12 md:col-span-6 md:col-start-9"
      >
        {$Project.data?.allProject[0].title}
      </h1>
      <p
        class="font-space-mono text-dh-white break-all text-xs xl:text-xl  row-span-2 col-span-12 md:col-span-6 md:col-start-9 row-start-8"
      >
        {$Project.data?.allProject[0].paragraph}
      </p>
      <!-- <div class="col-span-12 md:col-span-8 lg:col-span-6 space-y-3">
        {#each $Project.data!.allProject[0].paragraphRaw as paragraph}
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
      </div> -->
    </div>

    <div class="grid md:grid-flow-col xl:grid-cols-12 gap-y-4 md:gap-x-4 pt-6">
      <div class="flex flex-col w-fit col-span-12 md:col-span-3">
        <h2
          class="text-dh-orange text-lg md:text-4xl font-bold font-pokemon-classic"
        >
          Tools Used
        </h2>
        <ul
          class="font-space-mono text-dh-white w-full text-md md:text-xl pt-3"
        >
          {#each $Project.data?.allProject[0].stack as any as tool}
            <li>> {tool}</li>
          {/each}
        </ul>
      </div>
      <div
        class="mx-auto w-4/5 col-span-12 md:col-span-9 xl:col-start-4 rounded-3xl overflow-hidden h-1/2 md:w-fit md:w-[135px] xl:w-[33vw] xl:h-[30%]"
      >
        <img
          class="md:h-auto w-full relative bottom-[50%] md:bottom-[120%]"
          src={$Project.data?.allProject[0].mockup?.contentUrl}
          alt=""
        />
      </div>
    </div>
  </section>
{/if}
