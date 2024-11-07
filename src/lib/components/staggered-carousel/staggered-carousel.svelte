<script lang="ts">
  import { onMount } from "svelte";
  import "./staggered-carousel.css";
  import {
    playCarousel,
    type ICarouselItem,
    type TCarouselDirection,
    type TCarouselType,
  } from "./staggered-carousel";
  let carousel: HTMLDivElement | null = $state(null);
  interface Props {
    carouselType?: TCarouselType;
    grayscale?: boolean;
    direction?: TCarouselDirection;
    carouselItems?: Map<number, ICarouselItem>;
  }

  let {
    carouselType = "icon",
    grayscale = false,
    direction = "right",
    carouselItems = new Map<number, ICarouselItem>(),
  }: Props = $props();

  let shift = () => Math.floor(Math.random() * (78 - 71 + 1)) + 71;

  onMount(() => {
    if (carousel) {
      playCarousel(carousel);
    }
  });
</script>

<div
  bind:this={carousel}
  class="carousel items-center overflow-hidden pl-1.5"
  data-direction={direction}
>
  <div class="carousel overflow-hidden pl-1.5 h-full w-[85vw] m-auto">
    <div
      class="carousel__content__wrapper h-96 relative flex flex-row flex-wrap justify-center items-center"
    >
      {#each carouselItems as item}
        <div
          class="carousel__content shadow-xl -translate-x-[{shift()}] translate-y-[{shift()}] w-[{Math.floor(
            Math.random() * 10
          )}rem]
           min-w-[9.5rem] max-w-[12.5rem] relative {grayscale
            ? 'grayscale'
            : ''} z-[{Math.floor(Math.random() * 10)}]
            "
        >
          <!-- {#if carouselType === "card"}
            <img
              class="carousel__image h-fit w-[12rem] max-w-[14rem]"
              src={item[1].content}
              alt=""
            />
            <div class="carousel__label w-full pl-2 overflow-clip">
              <h6
                style="text-overflow: ellipsis;"
                class="text-orange-dh font-space-mono text-lg w-full overflow-hidden text-nowrap"
              >
                {item[1].title}
              </h6>
              <p class="text-sm text-gray-400 w-fit text-clip">
                {item[1].type}
              </p>
              <p class="text-sm text-gray-400 w-fit">
                {item[1].date.getFullYear()}
              </p>
            </div>
          {:else} -->
          <img
            class="carousel__image h-fit w-full"
            src={item[1].content}
            alt=""
          />
          <!-- {/if} -->
        </div>
      {/each}
    </div>
  </div>
</div>
