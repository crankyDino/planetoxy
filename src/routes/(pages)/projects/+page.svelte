<script lang="ts">
  import Sidebar from "$lib/components/sidebar/sidebar.svelte";
</script>

<Sidebar />

<section
  class="grid md:grid-cols-2 lg:grid-cols-1 gap-8 gap-y-12 m-3 mt-6 mx-auto w-[88%]"
>
  {#each [1, 2, 3, 4] as i}
    <a
      id="projectCard"
      href="projects/a-thing"
      class="overflow-[unset] grid lg:w-[80%] xlg:w-1/2 lg:h-[20vh] lg:m-auto"
    >
      <div
        class="flex flex-col lg:justify-between lg:py-4 lg:pl-6 col-span-9 border-[.15em] border-dh-orange h-36 lg:h-full rounded-xs px-3 py-2 col-start-1 row-start-1"
      >
        <div class="flex flex-col grid-rows-12">
          <h3
            class="font-hanuman text-dh-orange text-3xl lg:text-7xl font-extrabold"
          >
            Did a thing
          </h3>
          <p
            class="font-quirkyrobot text-dh-light-gray/50 lg:text-[1.3rem]"
            style="letter-spacing:.2em;"
          >
            20/04/2023
          </p>
        </div>
        <div
          class="font-space-mono text-dh-gray flex flex-col text-[.7em] lg:text-lg border-l-[.5em] border-dh-orange pl-1"
        >
          <div class="flex flex-row pl-2">
            <p class="hidden lg:block">Project </p>
            <p>> Website</p>
          </div>
          <div class="flex flex-row pl-2">
            <p class="hidden lg:block">Client</p>
            <p>> Rareclub</p>
          </div>
          <div class="flex flex-row pl-2">
            <p class="hidden lg:block">Date</p>
            <p>> 2019</p>
          </div>
        </div>
      </div>
      <div
        class="col-start-7 lg:col-start-6 col-span-3 scale-[1.3] lg:scale-200 row-start-1 rounded-xs justify-self-end overflow-hidden w-[135px] h-[92px] relative top-[4rem] left-[-1%] lg:left-[25%] mix-blend-color"
      >
        <img
          class="z-10 bottom-[50%] relative h-auto w-[400px]"
          style="clip-path: inset(15px 0px);"
          src="https://media.digitalhippie.xyz/beat%20tape%20cover.jpg"
          alt="a thing"
        />
      </div>
      <div
        class="col-start-6 lg:col-start-7 col-span-3 scale-[1.3] lg:scale-200 row-start-1 rounded-xs justify-self-end overflow-hidden w-[135px] h-[92px] relative top-[5rem]"
      >
        <img
          class="z-10 bottom-[50%] relative h-auto w-[400px]"
          style="clip-path: inset(15px 0px);"
          src="https://media.digitalhippie.xyz/beat%20tape%20cover.jpg"
          alt="a thing"
        />
      </div>
    </a>
  {/each}
</section>
