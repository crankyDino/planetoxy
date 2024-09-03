<script lang="ts">
  import { PUBLIC_STRAPI_URL } from "$env/static/public";
  import { page } from "$app/stores";
  import type { IArticle, IData, IMedia } from "$lib/models/article.model";
  import { onMount } from "svelte";
  import "./article.css";

  let title = $page.url.pathname;
  export let data: IData;
  const article = data.attributes as IArticle;
  const banner = article.banner.data.attributes as IMedia;
  onMount(() => {});
</script>

{#if data}
  <div
    class="h-[9em] md:h-1/3 lg:h-96 overflow-hidden -z-10 w-full bg-fixed md:!bg-top bg-no-repeat"
    style="background-image: url({PUBLIC_STRAPI_URL}{banner.url}); background-size: 125%; background-position:0rem 5rem"
  ></div>
  <div class="md:pl-40">
    <section
      class="grid grid-cols-12 w-full px-4 gap-y-6 relative bottom-16 md:bottom-32 py-0"
    >
      <div
        class="grid sm:flex flex-col col-span-12 md:flex-row w-fit md:w-full"
      >
        <div class="w-full overflow-clip text-ellipsis">
          <h1
            class="bg-black-dh w-fit font-hanuman font-extrabold text-orange-dh text-[1.5em] md:text-6xl text-wrap p-2 md:p-4 md:pb-6"
          >
            {article.title}
          </h1>
          <div
            class="font-quirkyrobot bg-black-dh text-gray-dh pl-2 pr-8 w-fit"
          >
            <p class="letter--spacing--sm text-[1.3em]">
              By: {article.author ?? "Ashley Modise"}
            </p>
            <p
              style="letter-spacing: 3px;
              word-spacing: -3px;"
              class="text-[.9em]"
            >
              {article.publishedAt.split("T")[0]}
            </p>
          </div>
        </div>
        <div
          class="text-nowrap px-2 md:px-0 flex flex-row gap-2 h-fit w-full overflow-auto top-[34%] relative"
        >
          {#each article.tags as { tag }}
            <p
              class="letter--spacing--md font-quirkyrobot text-orange-dh text-[.9em]"
            >
              #{tag}
            </p>
          {/each}
        </div>
      </div>

      <div class="col-span-12 md:col-span-8 lg:col-span-6 space-y-3">
        {#each article.paragraph as paragraph}
          {#each paragraph.body as body}
            {#if body.type === "heading"}
              <h3
                class=" font-quirkyrobot text-gray-dh h-8 max-h-full pl-2 text-[2em] mb-[1rem]"
              >
                {body.children[0].text}
              </h3>
            {/if}
            {#if body.type === "paragraph"}
              {#each body.children as paragraph}
                <div class="font-quirkyrobot text-gray-dh pl-2">
                  {paragraph.text}
                </div>
              {/each}

              <div class="flex flex-row gap-x-8">
                {#each paragraph.row as card}
                  <img
                    class=" pl-2"
                    width="150"
                    src="{PUBLIC_STRAPI_URL}{card.content.data.attributes.url}"
                    alt="{PUBLIC_STRAPI_URL}{card.content.data.attributes
                      .alternativeText}"
                  />
                {/each}
              </div>
            {/if}
          {/each}
        {/each}
      </div>
    </section>
  </div>
{/if}
