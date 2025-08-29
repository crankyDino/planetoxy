<script lang="ts">
  import { run } from "svelte/legacy";

  import { page, navigating } from "$app/stores";
  import { onMount } from "svelte";
  let navbar: HTMLElement;
  let pageTop: number = $state(0);
  let pageTopPrev: number = 0;
  let pageTitle: string = $state("nowhere");
  function byeBye(ev: UIEvent) {
    if (pageTop < pageTopPrev) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-80px";
    }
    pageTopPrev = pageTop;
  }
  run(() => {
    pageTitle = $page.url.pathname;
  });
</script>

<svelte:window bind:scrollY={pageTop} onscroll={byeBye} />

<section
  bind:this={navbar}
  style="transition:top 0.3s;scroll-behavior: smooth;"
  class="flex flex-row bg-dh-black px-8 md:px-16 pt-4 pb-6 sticky top-0"
>
  <nav class="flex flex-row w-full justify-between">
    <a href="/" class="flex"><img src="/assets/vectors/GLOBE.svg" alt="" /></a>
    <ul
      class="flex flex-row my-auto gap-4 font-space-mono text-dh-white underline__list"
    >
      <li
        class="{pageTitle?.includes('blog')
          ? 'dh__underline--active'
          : ''} dh__underline h-[1.8em]"
      >
        <a href="/blog">blog</a>
      </li>
      <li
        class="{pageTitle?.includes('projects')
          ? 'dh__underline--active'
          : ''} dh__underline h-[1.8em]"
      >
        <a href="/projects">projects</a>
      </li>
      <li
        class="{pageTitle?.includes('portfolio')
          ? 'dh__underline--active'
          : ''} dh__underline h-[1.8em]"
      >
        <a href="/portfolio">portfolio</a>
      </li>
    </ul>
  </nav>
</section>
