<script lang="ts">
  import { run } from "svelte/legacy";

  import { page } from "$app/stores";
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
  class="bg-dh-black sticky top-0 flex flex-row px-8 pt-4 pb-6 md:px-16"
>
  <nav class="flex w-full flex-row justify-between">
    <a href="/" class="flex"><img src="/assets/vectors/GLOBE.svg" alt="" /></a>
    <ul
      class="font-space-mono text-dh-white underline__list my-auto flex flex-row gap-4"
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
        <a href="/archive">archive</a>
      </li>
      <!-- <li
        class="{pageTitle?.includes('portfolio')
          ? 'dh__underline--active'
          : ''} dh__underline h-[1.8em]"
      >
        <a href="/portfolio">portfolio</a>
      </li> -->
    </ul>
  </nav>
</section>
