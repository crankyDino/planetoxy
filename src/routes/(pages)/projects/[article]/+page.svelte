<script lang="ts">
  import Sidebar from "$lib/components/sidebar/sidebar.svelte";
</script>

<Sidebar />

<section class="pt-6 px-8 xl:w-4/5 xl:m-auto">
  <div class="grid grid-flow-col gap-x-4">
    <div class="row-span-12 col-span-6 col-start-1 row-start-1">
      <div class="pb-2">
        <img
          class="h-full max-h-96 xl:h-[50vh]"
          src="https://media.digitalhippie.xyz/beat%20tape%20cover.jpg"
          alt=""
        />
        <div class="grid grid-flow-col grid-cols-4 py-1 gap-0">
          {#each [1, 1] as tag}
            <p
              class=" text-dh-white w-fit tracking-wider text-sm font-space-mono font-thin min-w-[11%] overflow-hidden text-nowrap text-ellipsis"
            >
              chill
            </p>
          {/each}
        </div>
      </div>

      <ul class="grid grid-flow-col grid-cols-6 gap-x-4">
        {#each [1, 1, 1] as tag}
          <li>
            <a target="_blank" href="https://digitalhippie.xyz">
              <img
                style="max-width: 4rem; width: 2.2rem;"
                src="../assets/vectors/dh_logo.svg"
                alt="digital hippie"
                class="filter--white"
              />
            </a>
          </li>
        {/each}
      </ul>
    </div>

    <h1
      class="font-bold text-dh-white font-pokemon-classic text-lg md:text-5xl col-span-6 md:col-start-9"
    >
      A Thing I Did
    </h1>
    <p
      class="font-space-mono text-dh-white text-xs xl:text-xl xl:w-1/2 row-span-2 col-span-6 md:col-start-9 row-start-8"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
      reprehenderit us maxime modi corrupti perferendis ipsum, laudantium ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. laudantium ea.
    </p>
  </div>

  <div class="grid md:grid-flow-col xl:grid-cols-12 gap-y-4 md:gap-x-4 pt-6">
    <div class="flex flex-col w-fit col-span-12 md:col-span-3">
      <h2
        class="text-dh-orange text-lg md:text-4xl font-bold font-pokemon-classic"
      >
        Tools Used
      </h2>
      <ul class="font-space-mono text-dh-white w-full text-md md:text-xl pt-3">
        <li>> Adobe Photoshop</li>
        <li>> Adobe Illustrator</li>
        <li>> Canon M40 MII</li>
      </ul>
    </div>
    <div
      class="mx-auto w-4/5 col-span-12 md:col-span-9 xl:col-start-4 rounded-3xl overflow-hidden h-1/2 md:w-fit md:w-[135px] xl:w-[33vw] xl:h-[30%]"
    >
      <img
        class="md:h-auto w-full relative bottom-[50%] md:bottom-[120%]"
        src="https://media.digitalhippie.xyz/beat%20tape%20cover.jpg"
        alt=""
      />
    </div>
  </div>
</section>
