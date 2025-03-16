<script lang="ts">
  import Sidebar from "$lib/components/sidebar/sidebar.svelte";
</script>

<Sidebar />

<div class="grid grid-flow-row m-auto w-6/7">
  <div class="grid row-span-8">
    <div
      class="col-start-1 col-span-3 row-start-1 rounded-lg justify-self-start overflow-hidden relative left-[-1%]"
    >
      <img
        class=" border border-dh-orange relative h-auto w-[400px]"
        style="clip-path: inset(15px 0px);"
        src="https://media.digitalhippie.xyz/beat%20tape%20cover.jpg"
        alt="a thing"
      />
    </div>
    <div
      class="col-start-2 col-span-3 row-start-1 rounded-lg justify-self-start overflow-hidden w-fit h-[15em] relative top-[10rem] mix-blend-hard-light invert-75"
    >
      <img
        class="z-10 border border-dh-orange bottom-[50%] relative h-auto w-[400px]"
        style="clip-path: inset(15px 0px);"
        src="https://media.digitalhippie.xyz/beat%20tape%20cover.jpg"
        alt="a thing"
      />
    </div>
  </div>
  <div class="col-span-4 col-start-6">
    <div class="flex flex-col">
      <h4 class="font-space-mono text-dh-white" >RARECLUB</h4>
      <p  class="font-space-mono text-dh-white" >poster design</p>
      <p  class="font-space-mono text-dh-white" >2020</p>
    </div>
    <a
      class="btn bg-dh-orange border-[3px] border-dh-orange text-dh-white"
      href="http://">View</a
    >
  </div>
</div>
