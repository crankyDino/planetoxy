<script lang="ts">
  import { onMount } from "svelte";
  import "./article.css";
  import "highlight.js/styles/github-dark.css";
  import Sidebar from "$lib/components/sidebar/sidebar.svelte";
  import { LANGUAGE_NAMES } from "$lib/shared/Programming_Languages";
  let { data } = $props();

  function getLanguageName(code: HTMLElement): string | null {
    const match = Array.from(code.classList).find((c) =>
      c.startsWith("language-"),
    );
    if (!match) return null;
    const key = match.replace("language-", "").toLowerCase();
    return LANGUAGE_NAMES[key] ?? key;
  }

  function addCopyButton() {
    document.querySelectorAll<HTMLElement>(".prose pre").forEach((pre) => {
      const codeEl = pre.querySelector<HTMLElement>("code");

      const bar = document.createElement("div");
      bar.className = "code__block__bar";

      const lang = codeEl ? getLanguageName(codeEl) : null;
      if (lang) {
        const langLabel = document.createElement("span");
        langLabel.className = "code__lang__label";
        langLabel.textContent = lang;
        bar.appendChild(langLabel);
      }

      const btn = document.createElement("button");
      btn.className = "copy__code__btn";
      btn.textContent = "copy";
      btn.addEventListener("click", async () => {
        const text = codeEl?.innerText ?? pre.innerText ?? "";
        await navigator.clipboard.writeText(text);
        btn.textContent = "copied!";
        btn.classList.add("copied");
        setTimeout(() => {
          btn.textContent = "copy";
          btn.classList.remove("copied");
        }, 2000);
      });

      bar.appendChild(btn);
      pre.prepend(bar);
    });
  }

  onMount(() => {
    addCopyButton();
  });
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
