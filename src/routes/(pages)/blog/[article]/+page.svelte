<script lang="ts">
  // import { PUBLIC_STRAPI_URL } from "$env/static/public";
  import { page } from "$app/stores";
  import type { IArticle } from "$lib/models/article.model";
  import { onMount } from "svelte";
  import "./article.css";
  import Sidebar from "$lib/components/sidebar/sidebar.svelte";

  let title = $page.url.pathname;
  interface Props {
    data: any;
  }

  let { data }: Props = $props();
  let { Article } = data;
  let post: any = $state(null);
  let header: any = $state(null);
  let media: any = $state(null);
  let bannerBox: HTMLDivElement | null = $state(null);

  let posX = $state(0);
  let posY = $state(0);
  let offset = $state(0);
  console.log(post);
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
        posX = header.hotspot.width;
        posY = header.hotspot.height;
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

  onMount(() => {
    if (!$Article.fetching) {
      post = $Article.data.allArticle[0];
      header = $Article.data.allArticle[0].header;
      media = $Article.data.allArticle[0].media;
      console.log($Article);
      alignBanner();
    }

    // header.hotspot.width =
    // (bannerBox.offsetHeight * header.hotspot.width) / 100;
  });
</script>

<Sidebar />
{#if post}
  <!-- 
  <p class="text-white-dh">
    {$Article.data.allArticle[0].author}
    </p> -->

  <!-- <div
    class="h-[9em] md:h-1/3 lg:h-96 overflow-hidden -z-10 w-full bg-fixed md:!bg-top bg-no-repeat"
    style="background-image: url({header.asset
    .url}); background-size: 125%; background-position:0rem 5rem"
    ></div> -->

  <!-- <div
    bind:this={bannerBox}
    class="banner h-[9em] md:h-60 lg:h-96 overflow-hidden -z-10 w-full bg-fixed bg-no-repeat"
    style="background-image: url({header.asset
    .url}); background-size: 100%; background-position:{`${header.hotspot.width * 100}% ${header.hotspot.height * 100}%`}"
    ></div> -->
  <div
    bind:this={bannerBox}
    class="banner h-[9em] md:h-60 lg:h-96 overflow-hidden -z-10 w-full bg-fixed bg-no-repeat"
    style="background-image: url({header.asset
      .url}); background-size: 100%; background-position:calc({posX}% ) calc(({posY}% + ({offset}px / 3.8)) - min({offset}px, 100vh / 2))"
  ></div>
  <div class="md:pl-12 lg:pl-40">
    <section class="grid grid-cols-12 w-full px-4 gap-y-6 py-0">
      <div class="grid sm:flex flex-col col-span-12 md:flex-row w-fit">
        <div class="w-full">
          <h1
            class="bg-black-dh relative bottom-7 md:bottom-12 lg:bottom-8 w-fit max-w-[45vw] md:w-[50vw] font-hanuman font-extrabold text-orange-dh text-[1.5em] md:text-6xl text-wrap lg:text-nowrap p-2 md:p-4 md:pb-6"
          >
            {post.title}
          </h1>
          <div
            class="font-quirkyrobot bg-black-dh text-gray-dh pl-2 pr-8 w-fit"
          >
            <p class="letter--spacing--sm text-[1.3em]">
              By: {post.author ?? "olepiob"}
            </p>
            <p
              style="letter-spacing: 3px;
              word-spacing: -3px;"
              class="text-[.9em]"
            >
              {post.published.split("T")[0]}
            </p>
          </div>
        </div>
        <div
          class="text-nowrap px-2 md:pr-0 md:pl-4 flex flex-row gap-2 h-fit w-full overflow-auto top-[34%] md:top-[10px] relative"
        >
          {#each post.tags as tag}
            <p
              class="letter--spacing--md font-quirkyrobot text-orange-dh text-[.9em]"
            >
              #{tag.tagName}
            </p>
          {/each}
        </div>
      </div>

      <div class="col-span-12 md:col-span-8 lg:col-span-6 space-y-3">
        {#each post.paragraphRaw as paragraph}
          {#if paragraph.style === "h2"}
            <h3
              class=" font-quirkyrobot text-gray-dh h-8 max-h-full pl-2 text-[2em] mb-[1rem]"
            >
              {paragraph.children[0].text}
            </h3>
          {/if}

          {#if paragraph.style === "normal"}
            {#each paragraph.children as body}
              <div class="font-quirkyrobot text-gray-dh pl-2">
                {body.text}
              </div>
            {/each}

            <div class="flex flex-row gap-x-8">
              {media.content}
              {#each media as card}
                {#if card.contentUrl}
                  <img
                    class=" pl-2"
                    width="150"
                    src={card.contentUrl}
                    alt={card.contentUrl}
                  />
                {/if}
              {/each}
            </div>
          {/if}
        {/each}
      </div>
    </section>
  </div>

  <div class="flex flex-row gap-x-8">
    {#each media as card}
      {#if card.contentUrl}
        <img
          class=" pl-2"
          width="150"
          src={card.contentUrl}
          alt={card.contentUrl}
        />
      {/if}
    {/each}
  </div>
{/if}
