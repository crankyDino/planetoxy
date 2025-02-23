<script lang="ts">
  import Sidebar from "$lib/components/sidebar/sidebar.svelte";
</script>

<Sidebar />

<section class="pt-6 pl-16">
  <div class="grid grid-flow-col gap-x-4 align-">
    <div class="row-span-12 col-span-6 col-start-1 row-start-1">
      <div class="pb-2">
        <img
          src="https://media.digitalhippie.xyz/beat%20tape%20cover.jpg"
          alt=""
          class="h-96"
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
      class="col-span-8 font-bold text-dh-white font-pokemon-classic text-5xl"
    >
      A Thing I Did
    </h1>
    <p class="row-span-2 col-span-3 text-dh-white row-start-9">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
      reprehenderit us maxime modi corrupti perferendis ipsum, laudantium ea.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. laudantium ea.
    </p>
  </div>
</section>
