<script lang="ts">
  import Sidebar from "$lib/components/sidebar/sidebar.svelte";
  import type { Props } from "$lib/models/prop.model";
  import type { PageData } from "./$houdini";

  let { data }: Props<PageData> = $props();

  let { Projects } = $derived(data);

  console.log($Projects);
</script>

<Sidebar />

<section
  class="grid md:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-8 gap-y-12 2xl:gap-x-30 pb-12 m-3 mt-6 mx-auto sm:w-[80%] md:w-[88%] lg:w-[70%] px-[1.8em]"
>
  {#each $Projects.data?.allProject as any as project}
    <a
      id="projectCard"
      href="projects/{project.slug.current}"
      class="overflow-[unset] grid md:w-full xl:w-4/5 2xl:w-full lg:m-auto"
    >
      <div
        class="flex flex-col lg:justify-between lg:py-4 lg:pl-6 col-span-9 border-[.15em] border-dh-orange h-36 lg:h-full rounded-xs px-3 py-2 col-start-1 row-start-1"
      >
        <div class="flex flex-col grid-rows-12">
          <h3
            class="font-hanuman text-dh-orange text-3xl lg:text-7xl font-extrabold"
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
          class="font-space-mono text-dh-gray flex flex-col text-[.7em] lg:text-lg border-l-[.5em] border-dh-orange pl-1"
        >
          <div class="flex flex-row pl-2">
            <p class="hidden lg:block">Project</p>
            <p>> {project.details.project}</p>
          </div>
          <div class="flex flex-row pl-2">
            <p class="hidden lg:block">Client</p>
            <p>> {project.details.client}</p>
          </div>
          <div class="flex flex-row pl-2">
            <p class="hidden lg:block">Date</p>
            <p>> {new Date(project.details.date).getFullYear()}</p>
          </div>
        </div>
      </div>
      <div
        class="col-start-7 lg:col-start-6 col-span-3 scale-[1.3] lg:scale-200 row-start-1 rounded-xs justify-self-end overflow-hidden w-3/5 sm:w-[135px] h-[92px] relative top-[4rem] left-[-1%] lg:left-[25%] mix-blend-color"
      >
        <img
          class="z-10 bottom-[50%] relative h-auto w-[400px]"
          style="clip-path: inset(15px 0px);"
          src="{project.hero.contentUrl}"
          alt="a thing"
        />
      </div>
      <div
        class="col-start-6 left-8 sm:left-0 lg:col-start-7 col-span-3 scale-[1.3] lg:scale-200 row-start-1 rounded-xs justify-self-end overflow-hidden w-3/5 sm:w-[135px] h-[92px] relative top-[5rem]"
      >
        <img
          class="z-10 bottom-[50%] relative h-auto w-[400px]"
          style="clip-path: inset(15px 0px);"
          src="{project.hero.contentUrl}"
          alt="a thing"
        />
      </div>
    </a>
  {/each}
</section>
