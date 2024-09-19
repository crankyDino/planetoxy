<script lang="ts">
  import { PUBLIC_STRAPI_URL } from "$env/static/public";
  import { page } from "$app/stores";
  import type { IArticle } from "$lib/models/article.model";
  import { onMount } from "svelte";
  import "./article.css";
  import Sidebar from "$lib/components/sidebar/sidebar.svelte";

  let title = $page.url.pathname;
  export let data: any;
  let { Article } = data;
  let post: any = null;
  let header: any = null;
  let media: any = null;

  console.log(post);
  onMount(() => {
    console.log($Article);
    if (!$Article.fetching) {
      post = $Article.data.allArticle[0];
      header = $Article.data.allArticle[0].header;
      media = $Article.data.allArticle[0].media;
    }
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

  <div
    class="banner h-[9em] md:h-60 lg:h-96 overflow-hidden -z-10 w-full bg-fixed bg-no-repeat"
    style="background-image: url({header.asset.url}); background-size: 100%"
  ></div>
  <div class="md:pl-12 lg:pl-40">
    <section
      class="grid grid-cols-12 w-full px-4 gap-y-6 relative bottom-7 md:bottom-12 lg:bottom-8 py-0"
    >
      <div class="grid sm:flex flex-col col-span-12 md:flex-row w-fit">
        <div class="w-full overflow-clip text-ellipsis">
          <h1
            class="bg-black-dh w-fit max-w-[45vw] md:w-[50vw] font-hanuman font-extrabold text-orange-dh text-[1.5em] md:text-6xl text-wrap lg:text-nowrap p-2 md:p-4 md:pb-6"
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
          class="text-nowrap px-2 md:pr-0 md:pl-4 flex flex-row gap-2 h-fit w-full overflow-auto top-[34%] relative"
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
              {#each media as card}
                {#if card.content}
                  <img
                    class=" pl-2"
                    width="150"
                    src={card.content?.asset.url}
                    alt={card.content?.asset.url}
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
      {#if card.content}
        <img
          class=" pl-2"
          width="150"
          src={card.content?.asset.url}
          alt={card.content?.asset.url}
        />
      {/if}
    {/each}
  </div>
{/if}
