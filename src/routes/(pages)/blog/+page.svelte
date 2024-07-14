<script lang="ts">
  import "./blog.css"
</script>

<h3
  class="font-space-mono text-light-gray-dh pl-8 font-semibold text-xl opacity-15"
>
  blog
</h3>

{#each [1, 2, 3, 4] as i}
  <a href="./">
    <div class="w-full h-fit flex flex-row items-end px-[4vw] pt-6">
      <span class="bg-orange-dh grid h-20 w-3 content-end"></span>
      <div class="grid grid-cols-12 pl-4 w-[90%]">
        <div class="col-span-12 gird grid-row-2">
          <div class="col-span-8 grid grid-cols-12">
            <h4
              class="text-white-dh font-hanuman col-span-10 font-extrabold text-6xl min-w-[33%] overflow-hidden text-nowrap text-ellipsis w-[75%]"
            >
              Did a Thing
            </h4>
            <div class="w-fit col-span-2 m-auto min-w-[33%]">
              <p class="font-quirkyrobot tracking-[.2em] text-white-dh">
                20-40-2023
              </p>
              <p class="font-quirkyrobot text-white-dh tracking-[.11em]">
                /// read more
              </p>
            </div>
          </div>
          <div class="col-span-4 flex justify-between items-center">
            <p
              class="text-white-dh tracking-wider text-sm font-space-mono font-thin min-w-[11%] overflow-hidden text-nowrap text-ellipsis"
            >
              description
            </p>
            <span
              style="width:clamp(6vw, 100%, 33em);"
              class="ml-4 bg-orange-dh h-3 !min-w-[25%]"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </a>
{/each}
