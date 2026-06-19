<script lang="ts">
  import Sidebar from "$lib/components/sidebar/sidebar.svelte";
  import type { Props } from "$lib/models/prop.model";
  import type { PageData } from "./$houdini";

  let { data }: Props<PageData> = $props();

  let { Articles } = $derived(data);
</script>

<Sidebar />

<!-- <section
  class="grid md:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-8 gap-y-12 2xl:gap-x-30 pb-12 m-3 mt-6 mx-auto sm:w-[80%] md:w-[88%] lg:w-[70%] px-[1.8em]"
> -->
<section
  class="m-auto my-12 flex flex-col gap-y-12 px-[1.8em] pb-12 sm:w-[80%] md:w-[88%] lg:m-12 lg:w-[60%] xl:m-auto xl:my-12"
>
  {#each $Articles.data?.allArticle as any as project}
    <a
      id="projectCard_{project.slug.current}"
      href="archive/{project.slug.current}"
      class="overflow-[unset] project__card grid lg:m-auto xl:w-4/5 2xl:w-full"
    >
      <div
        class="border-dh-orange col-span-9 col-start-1 row-start-1 flex h-36 w-[84vw] flex-col rounded-xs border-[.18em] px-3 py-2 lg:h-48 lg:justify-between lg:py-4 lg:pl-6 xl:w-[58vw]"
      >
        <div class="flex grid-rows-12 flex-col">
          <h3
            class="font-hanuman text-dh-orange max-w-[66%] overflow-x-hidden pb-1.5 text-2xl font-extrabold text-nowrap text-ellipsis lg:text-4xl"
          >
            {project.title}
          </h3>
          <p
            class="font-quirkyrobot text-dh-light-gray/50 lg:text-[1.3rem]"
            style="letter-spacing:.2em;"
          >
            {new Date(project._createdAt).toISOString().split("T")[0]}
          </p>
        </div>
        <div
          class="font-space-mono text-dh-gray border-dh-orange flex flex-col border-l-[.5em] pl-1 text-[.7em] lg:text-lg"
        >
          <div class="flex flex-row pl-2">
            <p class="hidden lg:block">Project</p>
            <p>> {project.brief?.project}</p>
          </div>
          <div class="flex flex-row pl-2">
            <p class="hidden lg:block">Client</p>
            <p>> {project.brief?.client}</p>
          </div>
          <div class="flex flex-row pl-2">
            <p class="hidden lg:block">Date</p>
            <p>> {new Date(project.brief?.date).getFullYear()}</p>
          </div>
        </div>
      </div>
      <div
        class="relative top-[4rem] left-[-1%] col-span-3 col-start-7 row-start-1 h-[92px] w-3/5 scale-[1.3] justify-self-end overflow-hidden rounded-xs mix-blend-color sm:w-[135px] lg:left-[25%] lg:col-start-6 lg:scale-200"
      >
        <img
          class="relative bottom-[50%] z-10 h-auto w-[400px]"
          style="clip-path: inset(15px 0px);"
          src={project.intro?.media?.contentUrl}
          alt="a thing"
        />
      </div>
      <div
        class="relative top-[5rem] left-8 col-span-3 col-start-6 row-start-1 h-[92px] w-3/5 scale-[1.3] justify-self-end overflow-hidden rounded-xs sm:left-0 sm:w-[135px] lg:col-start-7 lg:scale-200"
      >
        <img
          class="relative bottom-[50%] z-10 h-auto w-[400px]"
          style="clip-path: inset(15px 0px);"
          src={project.intro?.media?.contentUrl}
          alt="a thing"
        />
      </div>
    </a>
  {/each}
</section>
