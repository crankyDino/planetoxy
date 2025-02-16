<script lang="ts">
  import { onMount } from "svelte";
  import "./blog.css";
  // import type { PageData } from "./$houdini";
  interface Props {
    data: any;
  }

  let { data }: Props = $props();
  // let { Articles } = data;
  let { Articles } = $derived(data);

  // let posts: any[] = $state([]);
  /* @type { import('./$houdini').PageData } */
  // console.log($Articles.data.allArticle);
  // console.log(posts);
  onMount(() => {
    // console.log($inspect($Articles.data));
    // if (!$data.Articles.fetching) {
    //   posts = $Articles.data.allArticle;
    // }
  });
</script>

<h3 class="font-space-mono text-dh-light-gray/15 pl-8 font-semibold text-xl">
  blog
</h3>
{#if !$Articles.fetching}
  {#each $Articles.data?.allArticle as any as post}
    <a href="/blog/{post.slug.current}" class="block w-fit">
      <div
        class="blog__item__block w-[90vw] md:w-[70vw] h-fit flex flex-row pl-[4vw] pt-6"
      >
        <span
          class="blog__item__elem bg-dh-orange grid h-14 align-top w-3 content-end"
        ></span>
        <div class="max-w-full grid grid-cols-12 ml-3 w-[90%]">
          <div
            class="blog__item--hover relative max-w-full col-span-12 gird grid-row-2"
          >
            <div class="col-span-8 grid grid-cols-12">
              <h4
                class="col-span-8 md:col-span-10 text-dh-white pt-3 font-hanuman font-extrabold text-2xl md:text-6xl min-w-[33%] overflow-hidden text-nowrap text-ellipsis w-[75%]"
              >
                {post.title}
              </h4>
              <div
                class="col-span-4 md:col-span-2 m-auto w-fit md:min-w-[33%] text-end text-nowrap"
              >
                <p class="font-quirkyrobot tracking-[.2em] text-dh-white">
                  {post.published?.split("T")[0]}
                </p>
                <p class="font-quirkyrobot text-dh-white tracking-[.11em]">
                  /// read more
                </p>
              </div>
            </div>
            <div class="col-span-4 flex justify-between items-center">
              {#each post.tags as tag}
                <div>
                  <p
                    class="text-dh-white tracking-wider text-sm font-space-mono font-thin min-w-[11%] overflow-hidden text-nowrap text-ellipsis"
                  >
                    {tag.tagName}
                  </p>
                </div>
              {/each}
              <span
                style="width:clamp(6vw, 100%, 33em);"
                class="blog__item__underline ml-4 bg-dh-orange h-3 !min-w-[25%]"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </a>
  {/each}
{/if}

<pre
  hidden
  id="tiresult"
  style="font-size: 3px;padding: 4px 5px;--fs: 9px;z-index: -1;position: absolute;right: .5vw;top: 25vh;ce-around;=: =;gap: 12px;flex;p-reverse;"><b
    style="color:#000000"
    >10111110010101101100100011111001010100111110101001100010100011000000111111101100010001011010001010100000010011001001101101001</b
  >
  <b style="color:#000000"
    >11110100000110010001011100101001001011001001101110111110001000111101111011111110100010011110101011001110100010001010111101111</b
  >
  <b style="color:#000000"
    >00010000110111110010000001101010111000110000010101000010101001110101010011101001011010011000001110001110111010100110101010100</b
  >
  <b style="color:#000000"
    >11000011111100011111001011111111001011111100101111100101001110101111101101010101101100111110101100011001111011000000000000110</b
  >
  <b style="color:#000000">1100100011101</b><b style="color:#FFFFFF">00000111</b
  ><b style="color:#000000">010110110</b><b style="color:#FFFFFF">011</b><b
    style="color:#000000">0010010</b
  ><b style="color:#FFFFFF">10101110</b><b style="color:#000000">00110</b><b
    style="color:#FFFFFF">001010000</b
  ><b style="color:#000000">11110</b><b style="color:#FFFFFF">1010110</b><b
    style="color:#000000">0000</b
  ><b style="color:#FFFFFF">10110</b><b style="color:#000000">000110</b><b
    style="color:#FFFFFF">1010</b
  ><b style="color:#000000">111</b><b style="color:#FFFFFF">011</b><b
    style="color:#000000">000</b
  ><b style="color:#FFFFFF">010100010</b><b style="color:#000000"
    >01100110111000</b
  >
  <b style="color:#000000">1001100101111</b><b style="color:#FFFFFF">1111</b><b
    style="color:#000000">1</b
  ><b style="color:#FFFFFF">1001</b><b style="color:#000000">1000101</b><b
    style="color:#FFFFFF">11001</b
  ><b style="color:#000000">1010011</b><b style="color:#FFFFFF">101</b><b
    style="color:#000000">0</b
  ><b style="color:#FFFFFF">1011</b><b style="color:#000000">10000</b><b
    style="color:#FFFFFF">011</b
  ><b style="color:#000000">11</b><b style="color:#FFFFFF">0</b><b
    style="color:#000000">1</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">101</b><b
    style="color:#FFFFFF">0000</b
  ><b style="color:#000000">001</b><b style="color:#FFFFFF">010</b><b
    style="color:#000000">000</b
  ><b style="color:#FFFFFF">0011</b><b style="color:#000000">1101001</b><b
    style="color:#FFFFFF">1000</b
  ><b style="color:#000000">1001</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">0011</b
  ><b style="color:#FFFFFF">0010</b><b style="color:#000000">1</b><b
    style="color:#FFFFFF">100</b
  ><b style="color:#000000">10101010100010</b>
  <b style="color:#000000">0010011110100</b><b style="color:#FFFFFF">10010111</b
  ><b style="color:#000000">1111111</b><b style="color:#FFFFFF">11</b><b
    style="color:#000000">1</b
  ><b style="color:#FFFFFF">1001</b><b style="color:#000000">010001</b><b
    style="color:#FFFFFF">1111010</b
  ><b style="color:#000000">110010</b><b style="color:#FFFFFF">001101</b><b
    style="color:#000000">11110</b
  ><b style="color:#FFFFFF">1111</b><b style="color:#000000">011110010</b><b
    style="color:#FFFFFF">0110</b
  ><b style="color:#000000">1111011</b><b style="color:#FFFFFF">0001</b><b
    style="color:#000000">0011</b
  ><b style="color:#FFFFFF">01</b><b style="color:#000000">1100</b><b
    style="color:#FFFFFF">00110010</b
  ><b style="color:#000000">01011010100100</b>
  <b style="color:#000000">1101000010011</b><b style="color:#FFFFFF">0001</b><b
    style="color:#000000">1</b
  ><b style="color:#FFFFFF">1111</b><b style="color:#000000">01001</b><b
    style="color:#FFFFFF">001111111</b
  ><b style="color:#000000">01010</b><b style="color:#FFFFFF">101</b><b
    style="color:#000000">0</b
  ><b style="color:#FFFFFF">0010</b><b style="color:#000000">00011</b><b
    style="color:#FFFFFF">110</b
  ><b style="color:#000000">11</b><b style="color:#FFFFFF">1</b><b
    style="color:#000000">01100</b
  ><b style="color:#FFFFFF">00011</b><b style="color:#000000">01100011</b><b
    style="color:#FFFFFF">0111</b
  ><b style="color:#000000">100</b><b style="color:#FFFFFF">1</b><b
    style="color:#000000">101</b
  ><b style="color:#FFFFFF">0101</b><b style="color:#000000">0110</b><b
    style="color:#FFFFFF">01</b
  ><b style="color:#000000">0101</b><b style="color:#FFFFFF">1011</b><b
    style="color:#000000">1</b
  ><b style="color:#FFFFFF">0001</b><b style="color:#000000">1111011110110</b>
  <b style="color:#000000">0101110110101</b><b style="color:#FFFFFF">0011</b><b
    style="color:#000000">11</b
  ><b style="color:#FFFFFF">1101</b><b style="color:#000000">101</b><b
    style="color:#FFFFFF">100</b
  ><b style="color:#000000">000</b><b style="color:#FFFFFF">11011</b><b
    style="color:#000000">101</b
  ><b style="color:#FFFFFF">10010</b><b style="color:#000000">1</b><b
    style="color:#FFFFFF">0000</b
  ><b style="color:#000000">010</b><b style="color:#FFFFFF">011000001</b><b
    style="color:#000000">11001</b
  ><b style="color:#FFFFFF">1101000</b><b style="color:#000000">1111</b><b
    style="color:#FFFFFF">01110110</b
  ><b style="color:#000000">0101</b><b style="color:#FFFFFF">00011110</b><b
    style="color:#000000">0100</b
  ><b style="color:#FFFFFF">1110100010</b><b style="color:#000000"
    >0000111001110</b
  >
  <b style="color:#000000">1111001001001</b><b style="color:#FFFFFF">0110</b><b
    style="color:#000000">000</b
  ><b style="color:#FFFFFF">001</b><b style="color:#000000">100</b><b
    style="color:#FFFFFF">0110</b
  ><b style="color:#000000">01</b><b style="color:#FFFFFF">11110</b><b
    style="color:#000000">100</b
  ><b style="color:#FFFFFF">11110</b><b style="color:#000000">10</b><b
    style="color:#FFFFFF">1000</b
  ><b style="color:#000000">110</b><b style="color:#FFFFFF">01111000</b><b
    style="color:#000000">0110101</b
  ><b style="color:#FFFFFF">11101</b><b style="color:#000000">0000</b><b
    style="color:#FFFFFF">11011010</b
  ><b style="color:#000000">01000</b><b style="color:#FFFFFF">01000</b><b
    style="color:#000000">001011</b
  ><b style="color:#FFFFFF">001101</b><b style="color:#000000">1</b><b
    style="color:#FFFFFF">11</b
  ><b style="color:#000000">00111100110101</b>
  <b style="color:#000000">01000100110001</b><b style="color:#FFFFFF">00</b><b
    style="color:#000000">0</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">001</b><b
    style="color:#FFFFFF">011</b
  ><b style="color:#000000">111</b><b style="color:#FFFFFF">011</b><b
    style="color:#000000">000</b
  ><b style="color:#FFFFFF">10101</b><b style="color:#000000">00010</b><b
    style="color:#FFFFFF">011</b
  ><b style="color:#000000">00</b><b style="color:#FFFFFF">1100</b><b
    style="color:#000000">0100</b
  ><b style="color:#FFFFFF">10111</b><b style="color:#000000">0</b><b
    style="color:#FFFFFF">0</b
  ><b style="color:#000000">0111110</b><b style="color:#FFFFFF">11001</b><b
    style="color:#000000">1010</b
  ><b style="color:#FFFFFF">100</b><b style="color:#000000">01</b><b
    style="color:#FFFFFF">01</b
  ><b style="color:#000000">110001</b><b style="color:#FFFFFF">00</b><b
    style="color:#000000">0</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">0010111</b><b
    style="color:#FFFFFF">1111</b
  ><b style="color:#000000">10</b><b style="color:#FFFFFF">11</b><b
    style="color:#000000">00111101110110</b
  >
  <b style="color:#000000">000101110111111</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">0</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">111</b><b
    style="color:#FFFFFF">100</b
  ><b style="color:#000000">000</b><b style="color:#FFFFFF">1111</b><b
    style="color:#000000">101</b
  ><b style="color:#FFFFFF">1010</b><b style="color:#000000">10111</b><b
    style="color:#FFFFFF">101</b
  ><b style="color:#000000">111</b><b style="color:#FFFFFF">0111</b><b
    style="color:#000000">0011</b
  ><b style="color:#FFFFFF">0011110</b><b style="color:#000000">0011100</b><b
    style="color:#FFFFFF">0001</b
  ><b style="color:#000000">01010</b><b style="color:#FFFFFF">01</b><b
    style="color:#000000">00</b
  ><b style="color:#FFFFFF">01</b><b style="color:#000000">011001</b><b
    style="color:#FFFFFF">10</b
  ><b style="color:#000000">0</b><b style="color:#FFFFFF">0</b><b
    style="color:#000000">101001</b
  ><b style="color:#FFFFFF">0010</b><b style="color:#000000">010</b><b
    style="color:#FFFFFF">0</b
  ><b style="color:#000000">00000001101000</b>
  <b style="color:#000000">1100001100000001</b><b style="color:#FFFFFF">1011</b
  ><b style="color:#000000">1111</b><b style="color:#FFFFFF">110</b><b
    style="color:#000000">0110</b
  ><b style="color:#FFFFFF">110</b><b style="color:#000000">110</b><b
    style="color:#FFFFFF">10101</b
  ><b style="color:#000000">00111</b><b style="color:#FFFFFF">11</b><b
    style="color:#000000">1101</b
  ><b style="color:#FFFFFF">110</b><b style="color:#000000">1001</b><b
    style="color:#FFFFFF">111100</b
  ><b style="color:#000000">00001100</b><b style="color:#FFFFFF">1001</b><b
    style="color:#000000">01110</b
  ><b style="color:#FFFFFF">11</b><b style="color:#000000">10</b><b
    style="color:#FFFFFF">00</b
  ><b style="color:#000000">01100</b><b style="color:#FFFFFF">01101</b><b
    style="color:#000000">101001</b
  ><b style="color:#FFFFFF">110</b><b style="color:#000000">01</b><b
    style="color:#FFFFFF">01</b
  ><b style="color:#000000">1001011101100</b>
  <b style="color:#000000">000100000001110110</b><b style="color:#FFFFFF"
    >0110</b
  ><b style="color:#000000">10011</b><b style="color:#FFFFFF">11</b><b
    style="color:#000000">1101</b
  ><b style="color:#FFFFFF">011</b><b style="color:#000000">00100</b><b
    style="color:#FFFFFF">110</b
  ><b style="color:#000000">000011</b><b style="color:#FFFFFF">11</b><b
    style="color:#000000">0111</b
  ><b style="color:#FFFFFF">100</b><b style="color:#000000">1110</b><b
    style="color:#FFFFFF">110010</b
  ><b style="color:#000000">01010100</b><b style="color:#FFFFFF">111</b><b
    style="color:#000000">11010</b
  ><b style="color:#FFFFFF">000101</b><b style="color:#000000">100000</b><b
    style="color:#FFFFFF">001</b
  ><b style="color:#000000">001110</b><b style="color:#FFFFFF">0110</b><b
    style="color:#000000">11</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">101000111000</b>
  <b style="color:#000000">10011110011001110000</b><b style="color:#FFFFFF"
    >0010</b
  ><b style="color:#000000">010100</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">01100</b
  ><b style="color:#FFFFFF">100</b><b style="color:#000000">11111</b><b
    style="color:#FFFFFF">001</b
  ><b style="color:#000000">001001</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">011</b
  ><b style="color:#FFFFFF">001</b><b style="color:#000000">1100</b><b
    style="color:#FFFFFF">111011</b
  ><b style="color:#000000">11111101</b><b style="color:#FFFFFF">100</b><b
    style="color:#000000">01101</b
  ><b style="color:#FFFFFF">01111</b><b style="color:#000000">111101</b><b
    style="color:#FFFFFF">011</b
  ><b style="color:#000000">010001</b><b style="color:#FFFFFF">000</b><b
    style="color:#000000">01</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">11101111100</b>
  <b style="color:#000000">00010110110101001000100</b><b style="color:#FFFFFF"
    >1000</b
  ><b style="color:#000000">1001100</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">100111</b
  ><b style="color:#FFFFFF">01</b><b style="color:#000000">01110</b><b
    style="color:#FFFFFF">001</b
  ><b style="color:#000000">000110</b><b style="color:#FFFFFF">1</b><b
    style="color:#000000">1000</b
  ><b style="color:#FFFFFF">010</b><b style="color:#000000">0111</b><b
    style="color:#FFFFFF">01101</b
  ><b style="color:#000000">01011100</b><b style="color:#FFFFFF">001</b><b
    style="color:#000000">00111</b
  ><b style="color:#FFFFFF">11100</b><b style="color:#000000">101000</b><b
    style="color:#FFFFFF">010</b
  ><b style="color:#000000">11000</b><b style="color:#FFFFFF">111</b><b
    style="color:#000000">000111111000</b
  >
  <b style="color:#000000">00011110110010101010010011</b><b
    style="color:#FFFFFF">01001</b
  ><b style="color:#000000">110111</b><b style="color:#FFFFFF">101</b><b
    style="color:#000000">00111</b
  ><b style="color:#FFFFFF">000</b><b style="color:#000000">11010</b><b
    style="color:#FFFFFF">100</b
  ><b style="color:#000000">10011</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">101</b
  ><b style="color:#FFFFFF">111</b><b style="color:#000000">0010</b><b
    style="color:#FFFFFF">11111</b
  ><b style="color:#000000">01100001</b><b style="color:#FFFFFF">110</b><b
    style="color:#000000">10101</b
  ><b style="color:#FFFFFF">1111</b><b style="color:#000000">110110</b><b
    style="color:#FFFFFF">000</b
  ><b style="color:#000000">00010</b><b style="color:#FFFFFF">100</b><b
    style="color:#000000">1</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">11101101</b>
  <b style="color:#000000">1011101100001000001011010001</b><b
    style="color:#FFFFFF">0010</b
  ><b style="color:#000000">00</b><b style="color:#FFFFFF">0</b><b
    style="color:#000000">10011</b
  ><b style="color:#FFFFFF">0110</b><b style="color:#000000">1110</b><b
    style="color:#FFFFFF">0010</b
  ><b style="color:#000000">101</b><b style="color:#FFFFFF">0110</b><b
    style="color:#000000">0010</b
  ><b style="color:#FFFFFF">011</b><b style="color:#000000">011</b><b
    style="color:#FFFFFF">110</b
  ><b style="color:#000000">111</b><b style="color:#FFFFFF">001011</b><b
    style="color:#000000">0110010</b
  ><b style="color:#FFFFFF">1010</b><b style="color:#000000">1101</b><b
    style="color:#FFFFFF">00001</b
  ><b style="color:#000000">01010</b><b style="color:#FFFFFF">001</b><b
    style="color:#000000">01111</b
  ><b style="color:#FFFFFF">11</b><b style="color:#000000">10</b><b
    style="color:#FFFFFF">1</b
  ><b style="color:#000000">011110</b>
  <b style="color:#000000">0011000100011001001110011011111</b><b
    style="color:#FFFFFF">001</b
  ><b style="color:#000000">0</b><b style="color:#FFFFFF">010</b><b
    style="color:#000000">1100</b
  ><b style="color:#FFFFFF">1111</b><b style="color:#000000">111</b><b
    style="color:#FFFFFF">1101</b
  ><b style="color:#000000">101</b><b style="color:#FFFFFF">11100</b><b
    style="color:#000000">10100</b
  ><b style="color:#FFFFFF">11</b><b style="color:#000000">00</b><b
    style="color:#FFFFFF">1101</b
  ><b style="color:#000000">101</b><b style="color:#FFFFFF">00101</b><b
    style="color:#000000">1</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">010010</b><b
    style="color:#FFFFFF">0111</b
  ><b style="color:#000000">0110</b><b style="color:#FFFFFF">11</b><b
    style="color:#000000">1</b
  ><b style="color:#FFFFFF">10</b><b style="color:#000000">00001</b><b
    style="color:#FFFFFF">110</b
  ><b style="color:#000000">1011</b><b style="color:#FFFFFF">000</b><b
    style="color:#000000">1</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">00001</b>
  <b style="color:#000000">10001001111011100100100010010010</b><b
    style="color:#FFFFFF">10</b
  ><b style="color:#000000">00</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">0111</b
  ><b style="color:#FFFFFF">000</b><b style="color:#000000">1101</b><b
    style="color:#FFFFFF">1001</b
  ><b style="color:#000000">011</b><b style="color:#FFFFFF">1101</b><b
    style="color:#000000">000</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">1</b><b
    style="color:#FFFFFF">11</b
  ><b style="color:#000000">010</b><b style="color:#FFFFFF">0110</b><b
    style="color:#000000">101</b
  ><b style="color:#FFFFFF">01100</b><b style="color:#000000">1</b><b
    style="color:#FFFFFF">1</b
  ><b style="color:#000000">110111</b><b style="color:#FFFFFF">11111</b><b
    style="color:#000000">0001</b
  ><b style="color:#FFFFFF">00</b><b style="color:#000000">10</b><b
    style="color:#FFFFFF">01</b
  ><b style="color:#000000">1100</b><b style="color:#FFFFFF">1</b><b
    style="color:#000000">1</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">1000</b><b
    style="color:#FFFFFF">00</b
  ><b style="color:#000000">0010000</b>
  <b style="color:#000000">10000110101100100001101100111</b><b
    style="color:#FFFFFF">1100</b
  ><b style="color:#000000">1</b><b style="color:#FFFFFF">1</b><b
    style="color:#000000">10100</b
  ><b style="color:#FFFFFF">10</b><b style="color:#000000">11000</b><b
    style="color:#FFFFFF">100</b
  ><b style="color:#000000">001</b><b style="color:#FFFFFF">0100</b><b
    style="color:#000000">01110</b
  ><b style="color:#FFFFFF">00</b><b style="color:#000000">0110</b><b
    style="color:#FFFFFF">11</b
  ><b style="color:#000000">00001</b><b style="color:#FFFFFF">010010</b><b
    style="color:#000000">100111111</b
  ><b style="color:#FFFFFF">1010</b><b style="color:#000000">00111</b><b
    style="color:#FFFFFF">01</b
  ><b style="color:#000000">10</b><b style="color:#FFFFFF">11</b><b
    style="color:#000000">1101</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">1</b><b
    style="color:#FFFFFF">0</b
  ><b style="color:#000000">1110</b><b style="color:#FFFFFF">00</b><b
    style="color:#000000">1000101</b
  >
  <b style="color:#000000">100101000001011000110111111</b><b
    style="color:#FFFFFF">1000</b
  ><b style="color:#000000">010001</b><b style="color:#FFFFFF">11</b><b
    style="color:#000000">01110</b
  ><b style="color:#FFFFFF">01</b><b style="color:#000000">00110</b><b
    style="color:#FFFFFF">0</b
  ><b style="color:#000000">0000111001011001000</b><b style="color:#FFFFFF"
    >011001</b
  ><b style="color:#000000">0000111100</b><b style="color:#FFFFFF">1110</b><b
    style="color:#000000">110010</b
  ><b style="color:#FFFFFF">010</b><b style="color:#000000">1</b><b
    style="color:#FFFFFF">01</b
  ><b style="color:#000000">11100</b><b style="color:#FFFFFF">110</b><b
    style="color:#000000">0100</b
  ><b style="color:#FFFFFF">111</b><b style="color:#000000">0</b><b
    style="color:#FFFFFF">1</b
  ><b style="color:#000000">01001</b>
  <b style="color:#000000">1000110110101000011011001</b><b style="color:#FFFFFF"
    >011</b
  ><b style="color:#000000">01011100111100100101000001110111111</b><b
    style="color:#FFFFFF">1101010</b
  ><b style="color:#000000">001010000001</b><b style="color:#FFFFFF">011</b><b
    style="color:#000000">010111101</b
  ><b style="color:#FFFFFF">111011</b><b style="color:#000000">100101</b><b
    style="color:#FFFFFF">011</b
  ><b style="color:#000000">00111</b><b style="color:#FFFFFF">110</b><b
    style="color:#000000">01</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">11111</b>
  <b style="color:#000000">1001110001000001101001</b><b style="color:#FFFFFF"
    >11</b
  ><b style="color:#000000">1101011110011011111110110010110</b><b
    style="color:#FFFFFF">010111</b
  ><b style="color:#000000">0000001101111110111001110110</b><b
    style="color:#FFFFFF">101010</b
  ><b style="color:#000000">000011100</b><b style="color:#FFFFFF">110</b><b
    style="color:#000000">000101</b
  ><b style="color:#FFFFFF">000</b><b style="color:#000000">11</b><b
    style="color:#FFFFFF">111</b
  ><b style="color:#000000">0011</b>
  <b style="color:#000000">1101000101101101011</b><b style="color:#FFFFFF">10</b
  ><b style="color:#000000">100000000000111111110011010</b><b
    style="color:#FFFFFF">11001</b
  ><b style="color:#000000">101001100101011110111110110</b><b
    style="color:#FFFFFF">0110</b
  ><b style="color:#000000">11001100111101000</b><b style="color:#FFFFFF">010</b
  ><b style="color:#000000">1010010</b><b style="color:#FFFFFF">100</b><b
    style="color:#000000">1110</b
  ><b style="color:#FFFFFF">010</b><b style="color:#000000">0110</b>
  <b style="color:#000000">0011101010000101</b><b style="color:#FFFFFF">01</b><b
    style="color:#000000">101101111111001010101110</b
  ><b style="color:#FFFFFF">10111</b><b style="color:#000000"
    >00001111110010010110010</b
  ><b style="color:#FFFFFF">011</b><b style="color:#000000"
    >1111010110001111001110</b
  ><b style="color:#FFFFFF">00110</b><b style="color:#000000">011011000</b><b
    style="color:#FFFFFF">1000</b
  ><b style="color:#000000">01010</b><b style="color:#FFFFFF">101</b><b
    style="color:#000000">1111</b
  >
  <b style="color:#000000">1110111101100</b><b style="color:#FFFFFF">00</b><b
    style="color:#000000">11101110000110001</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">10110</b><b
    style="color:#FFFFFF">01011</b
  ><b style="color:#000000">11110010</b><b style="color:#FFFFFF">000</b><b
    style="color:#000000">111101111</b
  ><b style="color:#FFFFFF">0110</b><b style="color:#000000">10010111111101</b
  ><b style="color:#FFFFFF">1001010010010</b><b style="color:#000000"
    >011001100111</b
  ><b style="color:#FFFFFF">1010</b><b style="color:#000000">000010</b><b
    style="color:#FFFFFF">101</b
  ><b style="color:#000000">110001</b>
  <b style="color:#000000">0001101110</b><b style="color:#FFFFFF">01</b><b
    style="color:#000000">100101110</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">0011100</b><b
    style="color:#FFFFFF">0</b
  ><b style="color:#000000">0100</b><b style="color:#FFFFFF">01011</b><b
    style="color:#000000">1001001</b
  ><b style="color:#FFFFFF">0101</b><b style="color:#000000">011011</b><b
    style="color:#FFFFFF">1101011</b
  ><b style="color:#000000">0001101111</b><b style="color:#FFFFFF">11000</b><b
    style="color:#000000">011100000011110100001111</b
  ><b style="color:#FFFFFF">10011</b><b style="color:#000000">1110</b><b
    style="color:#FFFFFF">0101</b
  ><b style="color:#000000">1000011111</b>
  <b style="color:#000000">00101110</b><b style="color:#FFFFFF">01</b><b
    style="color:#000000">01010011</b
  ><b style="color:#FFFFFF">01</b><b style="color:#000000">000000</b><b
    style="color:#FFFFFF">11</b
  ><b style="color:#000000">001</b><b style="color:#FFFFFF">001110</b><b
    style="color:#000000">0010101</b
  ><b style="color:#FFFFFF">10000</b><b style="color:#000000">0001</b><b
    style="color:#FFFFFF">1000</b
  ><b style="color:#000000">11</b><b style="color:#FFFFFF">011</b><b
    style="color:#000000">100001</b
  ><b style="color:#FFFFFF">000111</b><b style="color:#000000"
    >0101111100111010101111</b
  ><b style="color:#FFFFFF">1100001</b><b style="color:#000000">111</b><b
    style="color:#FFFFFF">10</b
  ><b style="color:#000000">11101011111010011</b>
  <b style="color:#000000">101010</b><b style="color:#FFFFFF">1</b><b
    style="color:#000000">000001011</b
  ><b style="color:#FFFFFF">00</b><b style="color:#000000">011</b><b
    style="color:#FFFFFF">1</b
  ><b style="color:#000000">00</b><b style="color:#FFFFFF">010</b><b
    style="color:#000000">111</b
  ><b style="color:#FFFFFF">0000</b><b style="color:#000000">00</b><b
    style="color:#FFFFFF">0</b
  ><b style="color:#000000">110001</b><b style="color:#FFFFFF">010110</b><b
    style="color:#000000">01101</b
  ><b style="color:#FFFFFF">011</b><b style="color:#000000">11</b><b
    style="color:#FFFFFF">101</b
  ><b style="color:#000000">111111</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">0</b
  ><b style="color:#FFFFFF">11</b><b style="color:#000000">000101010</b><b
    style="color:#FFFFFF">100110111110</b
  ><b style="color:#000000">1</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">01001</b
  ><b style="color:#FFFFFF">11</b><b style="color:#000000"
    >010001101011100011010</b
  >
  <b style="color:#000000">0010</b><b style="color:#FFFFFF">1</b><b
    style="color:#000000">000110</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">11</b><b
    style="color:#FFFFFF">10</b
  ><b style="color:#000000">100</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">00</b
  ><b style="color:#FFFFFF">011</b><b style="color:#000000">100</b><b
    style="color:#FFFFFF">10011010</b
  ><b style="color:#000000">111111010</b><b style="color:#FFFFFF">11010</b><b
    style="color:#000000">000110</b
  ><b style="color:#FFFFFF">000100</b><b style="color:#000000">1101011</b><b
    style="color:#FFFFFF">1</b
  ><b style="color:#000000">00</b><b style="color:#FFFFFF">11</b><b
    style="color:#000000">0100101</b
  ><b style="color:#FFFFFF">0001110</b><b style="color:#000000">01100110</b><b
    style="color:#FFFFFF">00</b
  ><b style="color:#000000">00100011000001011001110111</b>
  <b style="color:#000000">10</b><b style="color:#FFFFFF">0</b><b
    style="color:#000000">010110</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">10</b><b
    style="color:#FFFFFF">100</b
  ><b style="color:#000000">011</b><b style="color:#FFFFFF">00</b><b
    style="color:#000000">00</b
  ><b style="color:#FFFFFF">10101</b><b style="color:#000000">011010</b><b
    style="color:#FFFFFF">0011001</b
  ><b style="color:#000000">0100001111</b><b style="color:#FFFFFF">1100</b><b
    style="color:#000000">1111110</b
  ><b style="color:#FFFFFF">11101</b><b style="color:#000000">1111110</b><b
    style="color:#FFFFFF">1001</b
  ><b style="color:#000000">10110001</b><b style="color:#FFFFFF">0000</b><b
    style="color:#000000">1010</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000"
    >1110111011011011101000010101100</b
  >
  <b style="color:#FFFFFF">0</b><b style="color:#000000">001</b><b
    style="color:#FFFFFF">0</b
  ><b style="color:#000000">01</b><b style="color:#FFFFFF">00</b><b
    style="color:#000000">01</b
  ><b style="color:#FFFFFF">010</b><b style="color:#000000">10</b><b
    style="color:#FFFFFF">0</b
  ><b style="color:#000000">1</b><b style="color:#FFFFFF">101</b><b
    style="color:#000000">00011</b
  ><b style="color:#FFFFFF">00010</b><b style="color:#000000">0110100</b><b
    style="color:#FFFFFF">1001111</b
  ><b style="color:#000000">00100010</b><b style="color:#FFFFFF">11000</b><b
    style="color:#000000">101000</b
  ><b style="color:#FFFFFF">110101</b><b style="color:#000000">0101010</b><b
    style="color:#FFFFFF">110</b
  ><b style="color:#000000">11101010</b><b style="color:#FFFFFF">101</b><b
    style="color:#000000">011</b
  ><b style="color:#FFFFFF">10</b><b style="color:#000000"
    >00010001011010111010110010010</b
  >
  <b style="color:#000000">01</b><b style="color:#FFFFFF">0</b><b
    style="color:#000000">110</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">01</b><b
    style="color:#FFFFFF">1100</b
  ><b style="color:#000000">101001010</b><b style="color:#FFFFFF">100</b><b
    style="color:#000000">111011011</b
  ><b style="color:#FFFFFF">100</b><b style="color:#000000">000001</b><b
    style="color:#FFFFFF">111010</b
  ><b style="color:#000000">001110</b><b style="color:#FFFFFF">1</b><b
    style="color:#000000">01</b
  ><b style="color:#FFFFFF">10110</b><b style="color:#000000">1</b><b
    style="color:#FFFFFF">1011110101</b
  ><b style="color:#000000">01100</b><b style="color:#FFFFFF">011100</b><b
    style="color:#000000">001</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">10</b><b
    style="color:#FFFFFF">001</b
  ><b style="color:#000000">0001100001011001011110011000010</b>
  <b style="color:#000000">1</b><b style="color:#FFFFFF">0</b><b
    style="color:#000000">10</b
  ><b style="color:#FFFFFF">101</b><b style="color:#000000">01</b><b
    style="color:#FFFFFF">10100010</b
  ><b style="color:#000000">10000001000100</b><b style="color:#FFFFFF">01</b><b
    style="color:#000000">000001</b
  ><b style="color:#FFFFFF">100</b><b style="color:#000000">0011</b><b
    style="color:#FFFFFF">100110</b
  ><b style="color:#000000">1111</b><b style="color:#FFFFFF">1000111</b><b
    style="color:#000000">0</b
  ><b style="color:#FFFFFF">01</b><b style="color:#000000">10</b><b
    style="color:#FFFFFF">1001110000</b
  ><b style="color:#000000">0</b><b style="color:#FFFFFF">01</b><b
    style="color:#000000">10</b
  ><b style="color:#FFFFFF">01100101100000</b><b style="color:#000000"
    >1001110100100000100011111110</b
  >
  <b style="color:#FFFFFF">0</b><b style="color:#000000">00</b><b
    style="color:#FFFFFF">1100</b
  ><b style="color:#000000">101111000011</b><b style="color:#FFFFFF"
    >110110001</b
  ><b style="color:#000000">1100110</b><b style="color:#FFFFFF">001</b><b
    style="color:#000000">1001</b
  ><b style="color:#FFFFFF">110</b><b style="color:#000000">0100</b><b
    style="color:#FFFFFF">101010</b
  ><b style="color:#000000">0</b><b style="color:#FFFFFF">01</b><b
    style="color:#000000">100101011001101</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">110110</b><b
    style="color:#FFFFFF">1</b
  ><b style="color:#000000">1001010</b><b style="color:#FFFFFF">111110000111</b
  ><b style="color:#000000">1111001100111110010111011</b>
  <b style="color:#FFFFFF">0</b><b style="color:#000000">10</b><b
    style="color:#FFFFFF">1001111001101111</b
  ><b style="color:#000000">000000101</b><b style="color:#FFFFFF">10100</b><b
    style="color:#000000">110110</b
  ><b style="color:#FFFFFF">10</b><b style="color:#000000">1011</b><b
    style="color:#FFFFFF">100</b
  ><b style="color:#000000">1</b><b style="color:#FFFFFF">11011</b><b
    style="color:#000000">0</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">00110</b><b
    style="color:#FFFFFF">000</b
  ><b style="color:#000000">00</b><b style="color:#FFFFFF">111</b><b
    style="color:#000000">1011</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">0</b><b
    style="color:#FFFFFF">10</b
  ><b style="color:#000000">001</b><b style="color:#FFFFFF">1</b><b
    style="color:#000000">1110</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">010</b><b
    style="color:#FFFFFF">11010011001010</b
  ><b style="color:#000000">00</b><b style="color:#FFFFFF">0</b><b
    style="color:#000000">0110110010010111010</b
  >
  <b style="color:#FFFFFF">0</b><b style="color:#000000"
    >000011100000010101101</b
  ><b style="color:#FFFFFF">01110</b><b style="color:#000000">10110</b><b
    style="color:#FFFFFF">10101</b
  ><b style="color:#000000">0000</b><b style="color:#FFFFFF">101</b><b
    style="color:#000000">01</b
  ><b style="color:#FFFFFF">0101101</b><b style="color:#000000">10</b><b
    style="color:#FFFFFF">01</b
  ><b style="color:#000000">1010111010</b><b style="color:#FFFFFF">0</b><b
    style="color:#000000">11100001000</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">1000111</b><b
    style="color:#FFFFFF">1</b
  ><b style="color:#000000">01</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">00</b
  ><b style="color:#FFFFFF">1101011111</b><b style="color:#000000">110</b><b
    style="color:#FFFFFF">1</b
  ><b style="color:#000000">11101110110001011</b>
  <b style="color:#000000">0</b><b style="color:#FFFFFF">11001</b><b
    style="color:#000000">0</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">00</b><b
    style="color:#FFFFFF">1</b
  ><b style="color:#000000">0001</b><b style="color:#FFFFFF">0</b><b
    style="color:#000000">1</b
  ><b style="color:#FFFFFF">111</b><b style="color:#000000">01100101</b><b
    style="color:#FFFFFF">0011</b
  ><b style="color:#000000">1110</b><b style="color:#FFFFFF">111</b><b
    style="color:#000000">0011</b
  ><b style="color:#FFFFFF">101100100</b><b style="color:#000000"
    >000110111001001111001</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">00100111100101111</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">1100</b><b
    style="color:#FFFFFF">101110111</b
  ><b style="color:#000000">011</b><b style="color:#FFFFFF">01</b><b
    style="color:#000000">111000100100000</b
  >
  <b style="color:#000000">000001001110101101111000</b><b style="color:#FFFFFF"
    >00</b
  ><b style="color:#000000">110111</b><b style="color:#FFFFFF">101</b><b
    style="color:#000000">1101</b
  ><b style="color:#FFFFFF">10</b><b style="color:#000000">1</b><b
    style="color:#FFFFFF">01001</b
  ><b style="color:#000000">0000010100101001110011000</b><b
    style="color:#FFFFFF">00</b
  ><b style="color:#000000">0110001001</b><b style="color:#FFFFFF">010</b><b
    style="color:#000000">01101110</b
  ><b style="color:#FFFFFF">100111</b><b style="color:#000000">110</b><b
    style="color:#FFFFFF">110111</b
  ><b style="color:#000000">011110100110110</b>
  <b style="color:#000000">000110</b><b style="color:#FFFFFF">1111</b><b
    style="color:#000000">0</b
  ><b style="color:#FFFFFF">01</b><b style="color:#000000">0</b><b
    style="color:#FFFFFF">0000</b
  ><b style="color:#000000">001111000</b><b style="color:#FFFFFF"
    >00011000101000111100</b
  ><b style="color:#000000">10</b><b style="color:#FFFFFF">011110000000111110</b
  ><b style="color:#000000">0</b><b style="color:#FFFFFF"
    >011101100010100011101011011000000</b
  ><b style="color:#000000">100</b><b style="color:#FFFFFF">1010000</b><b
    style="color:#000000">11010000011001</b
  >
  <b style="color:#000000">0110110010001011</b><b style="color:#FFFFFF"
    >1111010101111010011001100011000010011001001100010110000110110010111101110101110010100110011010010</b
  ><b style="color:#000000">101101000101</b>
  <b style="color:#000000">011000000010</b><b style="color:#FFFFFF"
    >00001100110101100010001000110100001100111110011010101100111111110101011100001111010101110100011100011</b
  ><b style="color:#000000">100100001010</b>
  <b style="color:#000000">111100010010</b><b style="color:#FFFFFF"
    >01111000101100000</b
  ><b style="color:#000000">0</b><b style="color:#FFFFFF"
    >0000010001000011100000011111101011111101101000000010001100000111010100000111101110</b
  ><b style="color:#000000">0010010000100</b>
  <b style="color:#000000">0111101010001</b><b style="color:#FFFFFF"
    >00001100111</b
  ><b style="color:#000000">100010</b><b style="color:#FFFFFF"
    >000110100011010100101001000010010011010101000010000010111011101000010011000010001</b
  ><b style="color:#000000">01001001111101</b>
  <b style="color:#000000">001000000111111</b><b style="color:#FFFFFF">00100</b
  ><b style="color:#000000">01000000011010</b><b style="color:#FFFFFF"
    >111111000010010001110110101000001001101101011111000101011</b
  ><b style="color:#000000">01011100000</b><b style="color:#FFFFFF">1000110</b
  ><b style="color:#000000">1011010101111111</b>
  <b style="color:#000000">1010111001100000</b><b style="color:#FFFFFF">100</b
  ><b style="color:#000000">10000001101110111</b><b style="color:#FFFFFF"
    >01000000101010010110000110100111010000111010110100000</b
  ><b style="color:#000000">0001111011110001</b><b style="color:#FFFFFF">111</b
  ><b style="color:#000000">00011101010010000</b>
  <b style="color:#000000">0011110100101100</b><b style="color:#FFFFFF">01</b><b
    style="color:#000000">11011101</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">0110000000</b><b
    style="color:#FFFFFF">10100</b
  ><b style="color:#000000">1</b><b style="color:#FFFFFF">0001100</b><b
    style="color:#000000">11001010101011110100011110111010000</b
  ><b style="color:#FFFFFF">00</b><b style="color:#000000"
    >1100010101000111011</b
  ><b style="color:#FFFFFF">010</b><b style="color:#000000">100</b><b
    style="color:#FFFFFF">1</b
  ><b style="color:#000000">111001111110</b>
  <b style="color:#000000">10100001011010101</b><b style="color:#FFFFFF">0</b><b
    style="color:#000000">111011</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">1</b><b
    style="color:#FFFFFF">1</b
  ><b style="color:#000000">00</b><b style="color:#FFFFFF">1</b><b
    style="color:#000000">0011011</b
  ><b style="color:#FFFFFF">110100011</b><b style="color:#000000"
    >111011010011101010001001010101100100</b
  ><b style="color:#FFFFFF">11001</b><b style="color:#000000">101010</b><b
    style="color:#FFFFFF">000</b
  ><b style="color:#000000">11</b><b style="color:#FFFFFF">1</b><b
    style="color:#000000">00101001</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">1</b><b
    style="color:#FFFFFF">111</b
  ><b style="color:#000000">0</b><b style="color:#FFFFFF">1</b><b
    style="color:#000000">00111111111</b
  >
  <b style="color:#000000">101000100101010010000011</b><b style="color:#FFFFFF"
    >0</b
  ><b style="color:#000000">01010</b><b style="color:#FFFFFF">0</b><b
    style="color:#000000">0110010</b
  ><b style="color:#FFFFFF">000111110111001100001010101111110111000100011001</b
  ><b style="color:#000000">1100101</b><b style="color:#FFFFFF">0</b><b
    style="color:#000000">01100</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">00101010011</b><b
    style="color:#FFFFFF">10</b
  ><b style="color:#000000">0</b><b style="color:#FFFFFF">0</b><b
    style="color:#000000">1101011010</b
  >
  <b style="color:#000000">1010010100100110000000010</b><b style="color:#FFFFFF"
    >11</b
  ><b style="color:#000000">0</b><b style="color:#FFFFFF">011</b><b
    style="color:#000000">010100011110101</b
  ><b style="color:#FFFFFF">10</b><b style="color:#000000"
    >01010010111000100000</b
  ><b style="color:#FFFFFF">1010</b><b style="color:#000000">1100</b><b
    style="color:#FFFFFF">01111</b
  ><b style="color:#000000">1011100100111</b><b style="color:#FFFFFF">00</b><b
    style="color:#000000">00</b
  ><b style="color:#FFFFFF">01</b><b style="color:#000000">1</b><b
    style="color:#FFFFFF">1</b
  ><b style="color:#000000">011</b><b style="color:#FFFFFF">001</b><b
    style="color:#000000">0011</b
  ><b style="color:#FFFFFF">01</b><b style="color:#000000">10</b><b
    style="color:#FFFFFF">1</b
  ><b style="color:#000000">10111011</b>
  <b style="color:#000000">0000101100001110001011110</b><b style="color:#FFFFFF"
    >1</b
  ><b style="color:#000000">10</b><b style="color:#FFFFFF">1</b><b
    style="color:#000000">11011110001011011111000000101111011101110111</b
  ><b style="color:#FFFFFF">01001011</b><b style="color:#000000"
    >0110110001111</b
  ><b style="color:#FFFFFF">00</b><b style="color:#000000">1</b><b
    style="color:#FFFFFF">1</b
  ><b style="color:#000000">01101011</b><b style="color:#FFFFFF">001</b><b
    style="color:#000000">0011</b
  ><b style="color:#FFFFFF">111</b><b style="color:#000000">0</b><b
    style="color:#FFFFFF">1</b
  ><b style="color:#000000">1010101</b>
  <b style="color:#000000">01110100111101101010000111000110100</b><b
    style="color:#FFFFFF">0</b
  ><b style="color:#000000">0110101011011000101011</b><b style="color:#FFFFFF"
    >1111011010101010</b
  ><b style="color:#000000">00111111111111</b><b style="color:#FFFFFF">01</b><b
    style="color:#000000">00011001000000011</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">1</b><b
    style="color:#FFFFFF">1</b
  ><b style="color:#000000">0100</b><b style="color:#FFFFFF">010</b><b
    style="color:#000000">1</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">101101</b>
  <b style="color:#000000"
    >1000100101001000000011000010100011001111111101100100100010000110000100100100000101100</b
  ><b style="color:#FFFFFF">01</b><b style="color:#000000"
    >11100101001110100100</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">1</b><b
    style="color:#FFFFFF">0</b
  ><b style="color:#000000">00001</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">01</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">00100</b>
  <b style="color:#000000">10111110110111101000101100</b><b
    style="color:#FFFFFF">011</b
  ><b style="color:#000000">110110</b><b style="color:#FFFFFF">11</b><b
    style="color:#000000">10111</b
  ><b style="color:#FFFFFF">101000</b><b style="color:#000000"
    >01111010000111001100011110110011101100011100</b
  ><b style="color:#FFFFFF">10010111</b><b style="color:#000000">010010</b><b
    style="color:#FFFFFF">1010</b
  ><b style="color:#000000">10001</b><b style="color:#FFFFFF">010</b><b
    style="color:#000000">0</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">01000</b>
  <b style="color:#000000">00011110110111</b><b style="color:#FFFFFF">1</b><b
    style="color:#000000">111010</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">00</b><b
    style="color:#FFFFFF">01</b
  ><b style="color:#000000">0010111</b><b style="color:#FFFFFF">1</b><b
    style="color:#000000">0110</b
  ><b style="color:#FFFFFF">11100</b><b style="color:#000000">1000001111</b><b
    style="color:#FFFFFF">01010</b
  ><b style="color:#000000">000000100111101110000101111</b><b
    style="color:#FFFFFF">01001101</b
  ><b style="color:#000000">00100110101</b><b style="color:#FFFFFF">10100</b><b
    style="color:#000000">11011</b
  ><b style="color:#FFFFFF">110</b><b style="color:#000000">10</b><b
    style="color:#FFFFFF">1</b
  ><b style="color:#000000">00101</b>
  <b style="color:#000000">100110111011</b><b style="color:#FFFFFF">01</b><b
    style="color:#000000">11</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">00</b><b
    style="color:#FFFFFF">01</b
  ><b style="color:#000000">10</b><b style="color:#FFFFFF">01</b><b
    style="color:#000000">10</b
  ><b style="color:#FFFFFF">00</b><b style="color:#000000">0</b><b
    style="color:#FFFFFF">111</b
  ><b style="color:#000000">01</b><b style="color:#FFFFFF">110001</b><b
    style="color:#000000">1111000</b
  ><b style="color:#FFFFFF">11010</b><b style="color:#000000">01100101101000</b
  ><b style="color:#FFFFFF">010000000011</b><b style="color:#000000"
    >1010100101010100010111</b
  ><b style="color:#FFFFFF">10111</b><b style="color:#000000">0011010</b><b
    style="color:#FFFFFF">0001</b
  ><b style="color:#000000">100</b><b style="color:#FFFFFF">00</b><b
    style="color:#000000">111</b
  >
  <b style="color:#000000">10101101100</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">00</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">00</b><b
    style="color:#FFFFFF">00</b
  ><b style="color:#000000">10</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">10</b
  ><b style="color:#FFFFFF">00</b><b style="color:#000000">1</b><b
    style="color:#FFFFFF">011</b
  ><b style="color:#000000">10</b><b style="color:#FFFFFF">0101</b><b
    style="color:#000000">0</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">010111</b><b
    style="color:#FFFFFF">100011</b
  ><b style="color:#000000">11011</b><b style="color:#FFFFFF">00010</b><b
    style="color:#000000">00</b
  ><b style="color:#FFFFFF">11011</b><b style="color:#000000"
    >101111011000000000010001</b
  ><b style="color:#FFFFFF">00110010</b><b style="color:#000000">1110100010</b
  ><b style="color:#FFFFFF">111111</b><b style="color:#000000">0110</b><b
    style="color:#FFFFFF">110</b
  ><b style="color:#000000">1</b>
  <b style="color:#000000">0101100100</b><b style="color:#FFFFFF">01</b><b
    style="color:#000000">11</b
  ><b style="color:#FFFFFF">10</b><b style="color:#000000">01</b><b
    style="color:#FFFFFF">11</b
  ><b style="color:#000000">0</b><b style="color:#FFFFFF">100</b><b
    style="color:#000000">11</b
  ><b style="color:#FFFFFF">10</b><b style="color:#000000">11</b><b
    style="color:#FFFFFF">10</b
  ><b style="color:#000000">010</b><b style="color:#FFFFFF">01100</b><b
    style="color:#000000">00000001</b
  ><b style="color:#FFFFFF">1100</b><b style="color:#000000">11100</b><b
    style="color:#FFFFFF">1110</b
  ><b style="color:#000000">10</b><b style="color:#FFFFFF">001</b><b
    style="color:#000000">111110100011</b
  ><b style="color:#FFFFFF">111000100001</b><b style="color:#000000"
    >110000110000100011</b
  ><b style="color:#FFFFFF">00101000</b><b style="color:#000000">10101</b><b
    style="color:#FFFFFF">010</b
  ><b style="color:#000000">1</b>
  <b style="color:#000000">010111110</b><b style="color:#FFFFFF">011</b><b
    style="color:#000000">10</b
  ><b style="color:#FFFFFF">00</b><b style="color:#000000">01</b><b
    style="color:#FFFFFF">11</b
  ><b style="color:#000000">10</b><b style="color:#FFFFFF">00</b><b
    style="color:#000000">111</b
  ><b style="color:#FFFFFF">11</b><b style="color:#000000">01</b><b
    style="color:#FFFFFF">01</b
  ><b style="color:#000000">1001</b><b style="color:#FFFFFF">000011</b><b
    style="color:#000000">001100000</b
  ><b style="color:#FFFFFF">100</b><b style="color:#000000">11110</b><b
    style="color:#FFFFFF">01</b
  ><b style="color:#000000">1</b><b style="color:#FFFFFF">001</b><b
    style="color:#000000">1110110</b
  ><b style="color:#FFFFFF">101</b><b style="color:#000000">1</b><b
    style="color:#FFFFFF">110</b
  ><b style="color:#000000">11000011000100110111100</b><b style="color:#FFFFFF"
    >100000010</b
  ><b style="color:#000000">110010</b><b style="color:#FFFFFF">0011</b><b
    style="color:#000000">010</b
  >
  <b style="color:#000000">100000000</b><b style="color:#FFFFFF">1</b><b
    style="color:#000000">0</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">00</b><b
    style="color:#FFFFFF">01</b
  ><b style="color:#000000">10</b><b style="color:#FFFFFF">110</b><b
    style="color:#000000">10</b
  ><b style="color:#FFFFFF">011</b><b style="color:#000000">110</b><b
    style="color:#FFFFFF">01</b
  ><b style="color:#000000">111</b><b style="color:#FFFFFF">01</b><b
    style="color:#000000">01101</b
  ><b style="color:#FFFFFF">1101011</b><b style="color:#000000">10100111</b><b
    style="color:#FFFFFF">00</b
  ><b style="color:#000000">01110</b><b style="color:#FFFFFF">1111</b><b
    style="color:#000000">010100</b
  ><b style="color:#FFFFFF">01</b><b style="color:#000000">1</b><b
    style="color:#FFFFFF">10</b
  ><b style="color:#000000">0000111110011001</b><b style="color:#FFFFFF"
    >1011001011</b
  ><b style="color:#000000">101000111001011101100</b>
  <b style="color:#000000">101111111</b><b style="color:#FFFFFF">010</b><b
    style="color:#000000">11</b
  ><b style="color:#FFFFFF">000</b><b style="color:#000000">10</b><b
    style="color:#FFFFFF">010</b
  ><b style="color:#000000">01</b><b style="color:#FFFFFF">010</b><b
    style="color:#000000">11101</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">0111</b><b
    style="color:#FFFFFF">100</b
  ><b style="color:#000000">0100010</b><b style="color:#FFFFFF">111010</b><b
    style="color:#000000">1011000110110</b
  ><b style="color:#FFFFFF">000</b><b style="color:#000000">11010</b><b
    style="color:#FFFFFF">1100</b
  ><b style="color:#000000">01001110</b><b style="color:#FFFFFF">111100001010</b
  ><b style="color:#000000">00110</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">11100111001010011110</b
  >
  <b style="color:#000000">0110101010</b><b style="color:#FFFFFF">0</b><b
    style="color:#000000">1</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">10</b><b
    style="color:#FFFFFF">001</b
  ><b style="color:#000000">100</b><b style="color:#FFFFFF">100</b><b
    style="color:#000000">011</b
  ><b style="color:#FFFFFF">110</b><b style="color:#000000">000101</b><b
    style="color:#FFFFFF">0</b
  ><b style="color:#000000">101010</b><b style="color:#FFFFFF">010</b><b
    style="color:#000000">1010010</b
  ><b style="color:#FFFFFF">00000</b><b style="color:#000000">01110111010</b><b
    style="color:#FFFFFF">10</b
  ><b style="color:#000000">10110</b><b style="color:#FFFFFF">100</b><b
    style="color:#000000">0011001</b
  ><b style="color:#FFFFFF">101100</b><b style="color:#000000">0011100</b><b
    style="color:#FFFFFF">1110</b
  ><b style="color:#000000">1110101111110111001011</b>
  <b style="color:#000000">00111011010</b><b style="color:#FFFFFF">1</b><b
    style="color:#000000">1</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">001</b><b
    style="color:#FFFFFF">11</b
  ><b style="color:#000000">0100</b><b style="color:#FFFFFF">101</b><b
    style="color:#000000">1110</b
  ><b style="color:#FFFFFF">0001</b><b style="color:#000000"
    >100001010000110100000001</b
  ><b style="color:#FFFFFF">0001</b><b style="color:#000000">1010101010</b><b
    style="color:#FFFFFF">0</b
  ><b style="color:#000000">11010</b><b style="color:#FFFFFF">000</b><b
    style="color:#000000">001001</b
  ><b style="color:#FFFFFF">11100</b><b style="color:#000000">011</b><b
    style="color:#FFFFFF">1010</b
  ><b style="color:#000000">01000110111000110001000010</b>
  <b style="color:#000000">101111110000</b><b style="color:#FFFFFF">111</b><b
    style="color:#000000">0000</b
  ><b style="color:#FFFFFF">11</b><b style="color:#000000">10101</b><b
    style="color:#FFFFFF">001</b
  ><b style="color:#000000">10100</b><b style="color:#FFFFFF">01111</b><b
    style="color:#000000">10101000100011101110100</b
  ><b style="color:#FFFFFF">011</b><b style="color:#000000">001100101</b><b
    style="color:#FFFFFF">10</b
  ><b style="color:#000000">11011</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">1111110</b
  ><b style="color:#FFFFFF">100</b><b style="color:#000000">001</b><b
    style="color:#FFFFFF">11</b
  ><b style="color:#000000">110011100111011000110100001</b>
  <b style="color:#000000">1010011000110</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">0</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">1001</b><b
    style="color:#FFFFFF">101</b
  ><b style="color:#000000">11011</b><b style="color:#FFFFFF">0000</b><b
    style="color:#000000">010010</b
  ><b style="color:#FFFFFF">110100</b><b style="color:#000000"
    >10101011000001000100</b
  ><b style="color:#FFFFFF">111</b><b style="color:#000000">1111</b><b
    style="color:#FFFFFF">0</b
  ><b style="color:#000000">001</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">11101</b
  ><b style="color:#FFFFFF">000</b><b style="color:#000000">111101</b><b
    style="color:#FFFFFF">101</b
  ><b style="color:#000000">01</b><b style="color:#FFFFFF">00</b><b
    style="color:#000000">01101101100000111101100011</b
  >
  <b style="color:#000000">00010010011011</b><b style="color:#FFFFFF">00</b><b
    style="color:#000000">0</b
  ><b style="color:#FFFFFF">11</b><b style="color:#000000">1010</b><b
    style="color:#FFFFFF">001</b
  ><b style="color:#000000">1010010</b><b style="color:#FFFFFF">10010</b><b
    style="color:#000000">100000110</b
  ><b style="color:#FFFFFF">010000</b><b style="color:#000000">0001111</b><b
    style="color:#FFFFFF">10</b
  ><b style="color:#000000">100100</b><b style="color:#FFFFFF">11</b><b
    style="color:#000000">0100</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">1000</b><b
    style="color:#FFFFFF">11</b
  ><b style="color:#000000">00101</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">111111</b
  ><b style="color:#FFFFFF">001</b><b style="color:#000000">00</b><b
    style="color:#FFFFFF">0</b
  ><b style="color:#000000">1000011100100001000001101</b>
  <b style="color:#000000">011101101000001</b><b style="color:#FFFFFF">000</b><b
    style="color:#000000">0</b
  ><b style="color:#FFFFFF">10</b><b style="color:#000000">1100</b><b
    style="color:#FFFFFF">11001</b
  ><b style="color:#000000">1000101</b><b style="color:#FFFFFF">00111101</b><b
    style="color:#000000">1001110</b
  ><b style="color:#FFFFFF">010111</b><b style="color:#000000">10101</b><b
    style="color:#FFFFFF">0</b
  ><b style="color:#000000">110</b><b style="color:#FFFFFF">1</b><b
    style="color:#000000">00</b
  ><b style="color:#FFFFFF">011</b><b style="color:#000000">011</b><b
    style="color:#FFFFFF">11</b
  ><b style="color:#000000">100</b><b style="color:#FFFFFF">01</b><b
    style="color:#000000">10011</b
  ><b style="color:#FFFFFF">101</b><b style="color:#000000">000011</b><b
    style="color:#FFFFFF">000</b
  ><b style="color:#000000">1</b><b style="color:#FFFFFF">1</b><b
    style="color:#000000">10001000001101111010000</b
  >
  <b style="color:#000000">11001001111111110</b><b style="color:#FFFFFF">10</b
  ><b style="color:#000000">00</b><b style="color:#FFFFFF">01</b><b
    style="color:#000000">10010</b
  ><b style="color:#FFFFFF">10011</b><b style="color:#000000">10110011</b><b
    style="color:#FFFFFF">11100100</b
  ><b style="color:#000000">1111</b><b style="color:#FFFFFF">01100110</b><b
    style="color:#000000">100</b
  ><b style="color:#FFFFFF">01</b><b style="color:#000000">010</b><b
    style="color:#FFFFFF">1</b
  ><b style="color:#000000">10</b><b style="color:#FFFFFF">000</b><b
    style="color:#000000">111</b
  ><b style="color:#FFFFFF">00</b><b style="color:#000000">110</b><b
    style="color:#FFFFFF">10</b
  ><b style="color:#000000">111111</b><b style="color:#FFFFFF">01</b><b
    style="color:#000000">011111</b
  ><b style="color:#FFFFFF">010</b><b style="color:#000000">1</b><b
    style="color:#FFFFFF">1</b
  ><b style="color:#000000">011110100001100011010</b>
  <b style="color:#000000">011010011011000001</b><b style="color:#FFFFFF">10</b
  ><b style="color:#000000">01</b><b style="color:#FFFFFF">11</b><b
    style="color:#000000">10101</b
  ><b style="color:#FFFFFF">0010111</b><b style="color:#000000">00110</b><b
    style="color:#FFFFFF">110101</b
  ><b style="color:#000000">01010</b><b style="color:#FFFFFF">10011110</b><b
    style="color:#000000">0100</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">0</b><b
    style="color:#FFFFFF">10</b
  ><b style="color:#000000">01</b><b style="color:#FFFFFF">11</b><b
    style="color:#000000">01</b
  ><b style="color:#FFFFFF">001</b><b style="color:#000000">100</b><b
    style="color:#FFFFFF">00</b
  ><b style="color:#000000">011</b><b style="color:#FFFFFF">011</b><b
    style="color:#000000">11010</b
  ><b style="color:#FFFFFF">101</b><b style="color:#000000">01001</b><b
    style="color:#FFFFFF">000</b
  ><b style="color:#000000">010100111000010110000</b>
  <b style="color:#000000">1011111101010111001</b><b style="color:#FFFFFF">10</b
  ><b style="color:#000000">11</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">0000</b
  ><b style="color:#FFFFFF">11010</b><b style="color:#000000">01111</b><b
    style="color:#FFFFFF">0000</b
  ><b style="color:#000000">01111</b><b style="color:#FFFFFF">1010</b><b
    style="color:#000000">11111101110</b
  ><b style="color:#FFFFFF">10110</b><b style="color:#000000">10</b><b
    style="color:#FFFFFF">111</b
  ><b style="color:#000000">00</b><b style="color:#FFFFFF">111</b><b
    style="color:#000000">0001</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">111</b><b
    style="color:#FFFFFF">10</b
  ><b style="color:#000000">0</b><b style="color:#FFFFFF">1</b><b
    style="color:#000000">1011</b
  ><b style="color:#FFFFFF">0111</b><b style="color:#000000">0101</b><b
    style="color:#FFFFFF">011</b
  ><b style="color:#000000">10</b><b style="color:#FFFFFF">0</b><b
    style="color:#000000">11011001101001011</b
  >
  <b style="color:#000000">0000111100100011000</b><b style="color:#FFFFFF">11</b
  ><b style="color:#000000">10</b><b style="color:#FFFFFF">0</b><b
    style="color:#000000">1110</b
  ><b style="color:#FFFFFF">0001</b><b style="color:#000000">0110</b><b
    style="color:#FFFFFF">001</b
  ><b style="color:#000000">1001</b><b style="color:#FFFFFF">001</b><b
    style="color:#000000">100110011000100000100011</b
  ><b style="color:#FFFFFF">101</b><b style="color:#000000">01</b><b
    style="color:#FFFFFF">0000</b
  ><b style="color:#000000">1111</b><b style="color:#FFFFFF">01</b><b
    style="color:#000000">00</b
  ><b style="color:#FFFFFF">01</b><b style="color:#000000">0</b><b
    style="color:#FFFFFF">0</b
  ><b style="color:#000000">0011</b><b style="color:#FFFFFF">0110</b><b
    style="color:#000000">11001</b
  ><b style="color:#FFFFFF">100</b><b style="color:#000000">11</b><b
    style="color:#FFFFFF">0</b
  ><b style="color:#000000">010111101011010</b>
  <b style="color:#000000">010011010111100111</b><b style="color:#FFFFFF">00</b
  ><b style="color:#000000">01</b><b style="color:#FFFFFF">1</b><b
    style="color:#000000">0110</b
  ><b style="color:#FFFFFF">011</b><b style="color:#000000">0100</b><b
    style="color:#FFFFFF">11</b
  ><b style="color:#000000">1001</b><b style="color:#FFFFFF">110</b><b
    style="color:#000000">00101</b
  ><b style="color:#FFFFFF">010</b><b style="color:#000000">01011110</b><b
    style="color:#FFFFFF">001001101000</b
  ><b style="color:#000000">1110</b><b style="color:#FFFFFF">1100</b><b
    style="color:#000000">1100</b
  ><b style="color:#FFFFFF">00</b><b style="color:#000000">010</b><b
    style="color:#FFFFFF">0</b
  ><b style="color:#000000">10</b><b style="color:#FFFFFF">1</b><b
    style="color:#000000">0100</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">1</b><b
    style="color:#FFFFFF">0</b
  ><b style="color:#000000">00010</b><b style="color:#FFFFFF">1010</b><b
    style="color:#000000">01</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">11110010001000</b>
  <b style="color:#000000">01111111110000011</b><b style="color:#FFFFFF">11</b
  ><b style="color:#000000">1</b><b style="color:#FFFFFF">00</b><b
    style="color:#000000">011</b
  ><b style="color:#FFFFFF">101</b><b style="color:#000000">011</b><b
    style="color:#FFFFFF">110</b
  ><b style="color:#000000">101</b><b style="color:#FFFFFF">0101</b><b
    style="color:#000000">1101</b
  ><b style="color:#FFFFFF">00</b><b style="color:#000000">0100</b><b
    style="color:#FFFFFF">11010</b
  ><b style="color:#000000">10110101000100110</b><b style="color:#FFFFFF"
    >11000</b
  ><b style="color:#000000">1111</b><b style="color:#FFFFFF">101</b><b
    style="color:#000000">100</b
  ><b style="color:#FFFFFF">11</b><b style="color:#000000">1</b><b
    style="color:#FFFFFF">1</b
  ><b style="color:#000000">0101</b><b style="color:#FFFFFF">00</b><b
    style="color:#000000">1</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">00001</b><b
    style="color:#FFFFFF">001</b
  ><b style="color:#000000">11</b><b style="color:#FFFFFF">0</b><b
    style="color:#000000">00011101110111</b
  >
  <b style="color:#000000">1111100011111011</b><b style="color:#FFFFFF">01</b><b
    style="color:#000000">1</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">100</b><b
    style="color:#FFFFFF">100</b
  ><b style="color:#000000">110</b><b style="color:#FFFFFF">000</b><b
    style="color:#000000">010</b
  ><b style="color:#FFFFFF">1010</b><b style="color:#000000">0000</b><b
    style="color:#FFFFFF">11</b
  ><b style="color:#000000">111</b><b style="color:#FFFFFF">000</b><b
    style="color:#000000">00111010</b
  ><b style="color:#FFFFFF">00011111001011100</b><b style="color:#000000"
    >00101</b
  ><b style="color:#FFFFFF">010</b><b style="color:#000000">100</b><b
    style="color:#FFFFFF">01</b
  ><b style="color:#000000">1</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">1101</b
  ><b style="color:#FFFFFF">10</b><b style="color:#000000">1</b><b
    style="color:#FFFFFF">0</b
  ><b style="color:#000000">01010</b><b style="color:#FFFFFF">001</b><b
    style="color:#000000">00</b
  ><b style="color:#FFFFFF">11</b><b style="color:#000000">0100001001100</b>
  <b style="color:#000000">011101010110001</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">1</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">010</b><b
    style="color:#FFFFFF">001</b
  ><b style="color:#000000">100</b><b style="color:#FFFFFF">000</b><b
    style="color:#000000">10</b
  ><b style="color:#FFFFFF">0111</b><b style="color:#000000">1001</b><b
    style="color:#FFFFFF">00</b
  ><b style="color:#000000">101</b><b style="color:#FFFFFF">100</b><b
    style="color:#000000">0000</b
  ><b style="color:#FFFFFF">00100100100101010001</b><b style="color:#000000"
    >0000010</b
  ><b style="color:#FFFFFF">001</b><b style="color:#000000">111</b><b
    style="color:#FFFFFF">01</b
  ><b style="color:#000000">00</b><b style="color:#FFFFFF">01</b><b
    style="color:#000000">0000</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">0</b><b
    style="color:#FFFFFF">10</b
  ><b style="color:#000000">11101</b><b style="color:#FFFFFF">011</b><b
    style="color:#000000">10</b
  ><b style="color:#FFFFFF">00</b><b style="color:#000000">0000111000100</b>
  <b style="color:#000000">01010100100010</b><b style="color:#FFFFFF">11</b><b
    style="color:#000000">0</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">100</b><b
    style="color:#FFFFFF">01</b
  ><b style="color:#000000">101</b><b style="color:#FFFFFF">101</b><b
    style="color:#000000">000</b
  ><b style="color:#FFFFFF">011</b><b style="color:#000000">0111</b><b
    style="color:#FFFFFF">00</b
  ><b style="color:#000000">111</b><b style="color:#FFFFFF">00</b><b
    style="color:#000000">0001</b
  ><b style="color:#FFFFFF">0110100010</b><b style="color:#000000">1</b><b
    style="color:#FFFFFF">1</b
  ><b style="color:#000000">1110011100000101</b><b style="color:#FFFFFF">011</b
  ><b style="color:#000000">1100</b><b style="color:#FFFFFF">00</b><b
    style="color:#000000">11</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">10111</b><b
    style="color:#FFFFFF">00</b
  ><b style="color:#000000">1</b><b style="color:#FFFFFF">1</b><b
    style="color:#000000">011100</b
  ><b style="color:#FFFFFF">001</b><b style="color:#000000">10</b><b
    style="color:#FFFFFF">00</b
  ><b style="color:#000000">0111010001110</b>
  <b style="color:#000000">0101111111100</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">0</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">111</b><b
    style="color:#FFFFFF">11</b
  ><b style="color:#000000">111</b><b style="color:#FFFFFF">111</b><b
    style="color:#000000">11</b
  ><b style="color:#FFFFFF">1111</b><b style="color:#000000">101</b><b
    style="color:#FFFFFF">00</b
  ><b style="color:#000000">111</b><b style="color:#FFFFFF">00</b><b
    style="color:#000000">0010</b
  ><b style="color:#FFFFFF">110001</b><b style="color:#000000"
    >010001111100100101010</b
  ><b style="color:#FFFFFF">1001</b><b style="color:#000000">1010</b><b
    style="color:#FFFFFF">000</b
  ><b style="color:#000000">1</b><b style="color:#FFFFFF">11</b><b
    style="color:#000000">10001</b
  ><b style="color:#FFFFFF">10</b><b style="color:#000000">1</b><b
    style="color:#FFFFFF">0</b
  ><b style="color:#000000">010101</b><b style="color:#FFFFFF">0111</b><b
    style="color:#000000">01</b
  ><b style="color:#FFFFFF">01</b><b style="color:#000000">1101100101100</b>
  <b style="color:#000000">0110100101011</b><b style="color:#FFFFFF">1</b><b
    style="color:#000000">0</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">001</b><b
    style="color:#FFFFFF">00</b
  ><b style="color:#000000">01</b><b style="color:#FFFFFF">100</b><b
    style="color:#000000">001</b
  ><b style="color:#FFFFFF">011</b><b style="color:#000000">011</b><b
    style="color:#FFFFFF">11</b
  ><b style="color:#000000">100</b><b style="color:#FFFFFF">00</b><b
    style="color:#000000">010</b
  ><b style="color:#FFFFFF">01010</b><b style="color:#000000"
    >011101010100110101001</b
  ><b style="color:#FFFFFF">10110</b><b style="color:#000000">00001</b><b
    style="color:#FFFFFF">101</b
  ><b style="color:#000000">1</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">101001</b
  ><b style="color:#FFFFFF">00</b><b style="color:#000000">0</b><b
    style="color:#FFFFFF">1</b
  ><b style="color:#000000">1000101</b><b style="color:#FFFFFF">0011</b><b
    style="color:#000000">11</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">00100001110110</b>
  <b style="color:#000000">011000101101</b><b style="color:#FFFFFF">11</b><b
    style="color:#000000">0001</b
  ><b style="color:#FFFFFF">00</b><b style="color:#000000">11</b><b
    style="color:#FFFFFF">001</b
  ><b style="color:#000000">10</b><b style="color:#FFFFFF">000</b><b
    style="color:#000000">111</b
  ><b style="color:#FFFFFF">10</b><b style="color:#000000">101</b><b
    style="color:#FFFFFF">01</b
  ><b style="color:#000000">111</b><b style="color:#FFFFFF">1000</b><b
    style="color:#000000">00110100011011001</b
  ><b style="color:#FFFFFF">00100110</b><b style="color:#000000">001111</b><b
    style="color:#FFFFFF">001</b
  ><b style="color:#000000">01</b><b style="color:#FFFFFF">01</b><b
    style="color:#000000">010000</b
  ><b style="color:#FFFFFF">001</b><b style="color:#000000">1</b><b
    style="color:#FFFFFF">1</b
  ><b style="color:#000000">1010111</b><b style="color:#FFFFFF">1000</b><b
    style="color:#000000">010</b
  ><b style="color:#FFFFFF">0</b><b style="color:#000000">10010000101000</b>
  <b style="color:#000000">111111100111</b><b style="color:#FFFFFF">0</b><b
    style="color:#000000">0</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">01</b><b
    style="color:#FFFFFF">01</b
  ><b style="color:#000000">01</b><b style="color:#FFFFFF">01</b><b
    style="color:#000000">01</b
  ><b style="color:#FFFFFF">000</b><b style="color:#000000">101</b><b
    style="color:#FFFFFF">01</b
  ><b style="color:#000000">01</b><b style="color:#FFFFFF">11</b><b
    style="color:#000000">110</b
  ><b style="color:#FFFFFF">1101</b><b style="color:#000000">0100101101</b><b
    style="color:#FFFFFF">001111000011</b
  ><b style="color:#000000">010001011</b><b style="color:#FFFFFF">1100</b><b
    style="color:#000000">0</b
  ><b style="color:#FFFFFF">000</b><b style="color:#000000">1110001</b><b
    style="color:#FFFFFF">00</b
  ><b style="color:#000000">0</b><b style="color:#FFFFFF">11</b><b
    style="color:#000000">01111100</b
  ><b style="color:#FFFFFF">1001</b><b style="color:#000000">100</b><b
    style="color:#FFFFFF">0</b
  ><b style="color:#000000">00000000011100</b>
  <b style="color:#000000">11000010101</b><b style="color:#FFFFFF">100</b><b
    style="color:#000000">01</b
  ><b style="color:#FFFFFF">01</b><b style="color:#000000">01</b><b
    style="color:#FFFFFF">01</b
  ><b style="color:#000000">01</b><b style="color:#FFFFFF">00</b><b
    style="color:#000000">000</b
  ><b style="color:#FFFFFF">1</b><b style="color:#000000">001</b><b
    style="color:#FFFFFF">10</b
  ><b style="color:#000000">100</b><b style="color:#FFFFFF">0000</b><b
    style="color:#000000">1001111</b
  ><b style="color:#FFFFFF">111011111</b><b style="color:#000000"
    >1111000110011</b
  ><b style="color:#FFFFFF">0011</b><b style="color:#000000">01</b><b
    style="color:#FFFFFF">000</b
  ><b style="color:#000000">00001010</b><b style="color:#FFFFFF">001</b><b
    style="color:#000000">0</b
  ><b style="color:#FFFFFF">11</b><b style="color:#000000">01101010</b><b
    style="color:#FFFFFF">00100</b
  ><b style="color:#000000">11</b><b style="color:#FFFFFF">11</b><b
    style="color:#000000">11111001111010</b
  >
  <b style="color:#000000">00111101101</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">11</b
  ><b style="color:#FFFFFF">11</b><b style="color:#000000">11</b><b
    style="color:#FFFFFF">1</b
  ><b style="color:#000000">01</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">111</b
  ><b style="color:#FFFFFF">10</b><b style="color:#000000">11</b><b
    style="color:#FFFFFF">11</b
  ><b style="color:#000000">11</b><b style="color:#FFFFFF">10001</b><b
    style="color:#000000">001010</b
  ><b style="color:#FFFFFF">011000</b><b style="color:#000000">00000011000010</b
  ><b style="color:#FFFFFF">10011</b><b style="color:#000000">001</b><b
    style="color:#FFFFFF">1100</b
  ><b style="color:#000000">111011010</b><b style="color:#FFFFFF">00</b><b
    style="color:#000000">11</b
  ><b style="color:#FFFFFF">10</b><b style="color:#000000">10110010</b><b
    style="color:#FFFFFF">10110</b
  ><b style="color:#000000">110</b><b style="color:#FFFFFF">10</b><b
    style="color:#000000">11010011001010</b
  >
  </pre>
