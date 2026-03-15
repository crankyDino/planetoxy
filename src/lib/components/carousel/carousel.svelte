<script lang="ts">
  import { onMount } from "svelte";
  import "./carousel.css";
  import {
      playCarousel,
      type ICarouselItem,
      type TCarouselDirection,
      type TCarouselType,
  } from "./carousel";
  let carousel: HTMLDivElement | null = $state(null);
  interface Props {
    carouselType?: TCarouselType;
    grayscale?: boolean;
    direction?: TCarouselDirection;
    // carouselItems?: Map<number, ICarouselItem>;
    carouselItems?: Array<ICarouselItem>;
  }

  let {
    carouselType = "icon",
    grayscale = false,
    direction = "right",
    carouselItems = [],
  }: Props = $props();

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
  <div class="carousel overflow-hidden pl-1.5 w-[85vw] m-auto">
    <div
      class="carousel__content__wrapper flex flex-row flex-wrap justify-center gap-3 items-center"
    >
      {#each carouselItems as item}
        <div class="carousel__content max-w-48 {grayscale ? 'grayscale' : ''}">
          {#if carouselType === "card"}
            <img
              class="carousel__image h-fit w-48 max-w-56"
              src={item.contentUrl}
              alt=""
            />
            <div class="carousel__label w-full pl-2 overflow-clip">
              <h6
                class="text-dh-orange font-space-mono text-ellipsis text-lg w-full overflow-hidden text-nowrap"
              >
                {item.title}
              </h6>
              <p class="text-sm text-gray-400 w-fit text-clip">
                {item.type}
              </p>
              <p class="text-sm text-gray-400 w-fit">
                {item.dateCreated.getFullYear()}
              </p>
            </div>
          {:else}
            <img
              class="carousel__image h-fit w-16 max-w-16"
              src={item.contentUrl}
              alt=""
            />
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>
