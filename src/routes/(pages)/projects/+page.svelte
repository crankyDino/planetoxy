<script lang="ts">
  import Sidebar from "$lib/components/sidebar/sidebar.svelte";
</script>

<Sidebar />

<section class="grid m-3 mt-6 mx-auto w-[88%]">
  <div
    class="border-[.15em] border-dh-orange h-36 rounded-md px-3 py-2 col-start-1 row-start-1"
  >
    <div class="flex flex-col grid-rows-12">
      <h3 class="font-hanuman text-dh-orange text-3xl font-extrabold">
        Did a thing
      </h3>
      <p
        class="font-quirkyrobot text-dh-light-gray/50"
        style="letter-spacing: .2em;"
      >
        20/04/2023
      </p>
    </div>

    <div
      class="font-space-mono text-dh-gray flex flex-col text-[.7em] border-l-[.5em] border-dh-orange pl-1"
    >
      <p class="">Project > Website</p>
      <p class="">Client > Rareclub</p>
      <p class="">Date > 2019</p>
    </div>
  </div>

  <div
    class="col-start-1 scale-[1.3] row-start-1 rounded-lg justify-self-end overflow-hidden w-[135px] h-[92px] relative top-[42%] left-[-1%] mix-blend-color"
  >
    <img
      class="z-10 border border-dh-orange bottom-[50%] relative h-auto w-[400px]"
      style="clip-path: inset(15px 0px);"
      src="https://media.digitalhippie.xyz/beat%20tape%20cover.jpg"
      alt="a thing"
    />
  </div>
  <div
    class="col-start-1 scale-[1.3] row-start-1 rounded-lg justify-self-end overflow-hidden w-[135px] h-[92px] relative top-[52%] left-[-8%]"
  >
    <img
      class="z-10 border border-dh-orange bottom-[50%] relative h-auto w-[400px]"
      style="clip-path: inset(15px 0px);"
      src="https://media.digitalhippie.xyz/beat%20tape%20cover.jpg"
      alt="a thing"
    />
  </div>
</section>
