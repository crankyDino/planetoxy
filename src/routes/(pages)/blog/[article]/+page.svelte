<script lang="ts">
  import { onMount } from "svelte";
  import "./article.css";
  import Sidebar from "$lib/components/sidebar/sidebar.svelte";
  import { json } from "@sveltejs/kit";
  import { compile } from "mdsvex";

  // const svelte = require("svelte/compiler");
  // const { mdsvex } = require("mdsvex");

  // let DynamicComponent = $state();
  let { data } = $props();
  console.log(data);

  // onMount(() => {
  //    loadComponent(data.content);
  // });

  // async function loadComponent(code:string) {
  //   // Remove the script tags and extract just the HTML
  //   const htmlMatch = code.match(/<\/script>\s*([\s\S]*)/);
  //   if (htmlMatch) {
  //     const html = htmlMatch[1];
  //     // For simple rendering, just use the HTML part
  //     DynamicComponent = html;
  //   }
  // }

  // const content = await compile(data.content);

  // const preprocessed =  svelte.preprocess(data.content);
</script>

<Sidebar />

<svelte:head>
  <title>planetoxy | {(data.metadata?.title as string) ?? ""}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={(data.metadata?.title as string) ?? ""} />
</svelte:head>

<div
  class="banner h-[9em] md:h-60 lg:h-[45vh] overflow-hidden -z-10 w-full bg-fixed bg-no-repeat"
  style="background-image: url({data.metadata.banner}); background-size: 100%;"
></div>

<section class="container m-auto px-48">
  {#if data.content && data.metadata}
    <article>
      <hgroup
        class="flex flex-col relative bottom-7 md:bottom-12 lg:bottom-8 gap-y-1"
      >
        <h1
          class="bg-dh-black w-fit font-hanuman font-extrabold text-dh-orange text-[1.5em] md:text-6xl text-wrap lg:text-nowrap p-4 pb-0"
        >
          {data.metadata.title}
        </h1>
        <p>{new Date(data.metadata.date).toISOString().split("T")[0]}</p>

        <div
          class="tags flex letter--spacing--md font-quirkyrobot text-dh-orange text-[.9em] !gap-x-3"
        >
          {#each data.metadata.tags as tag}
            <span class="surface-4">&num;{tag}</span>
          {/each}
        </div>
      </hgroup>

      <div class="prose flex flex-col gap-y-6">
        {@html data.content}
      </div>
    </article>
  {/if}
</section>

<style>
  * {
    color: white;
  }
  article {
    max-inline-size: var(--size-content-3);
    margin-inline: auto;

    h1 {
      text-transform: capitalize;
    }

    h1 + p {
      margin-top: var(--size-2);
      color: var(--text-2);
    }

    .tags {
      display: flex;
      gap: var(--size-3);
      margin-top: var(--size-7);

      > * {
        padding: var(--size-2) var(--size-3);
        border-radius: var(--radius-round);
      }
    }
  }
</style>
