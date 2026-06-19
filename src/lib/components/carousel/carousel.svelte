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
    animate?: boolean;
    direction?: TCarouselDirection;
    carouselItems?: Array<ICarouselItem>;
  }

  let {
    carouselType = "icon",
    grayscale = false,
    animate = true,
    direction = "right",
    carouselItems = Array<ICarouselItem>(),
  }: Props = $props();

  let shift = () => Math.floor(Math.random() * (78 - 71 + 1)) + 71;

  onMount(() => {
    if (carousel) {
      playCarousel(carousel);
    }
  });
</script>

{#if carouselItems}
  <div
    bind:this={carousel}
    data-direction={direction}
    class="carousel m-auto w-fit items-center overflow-hidden pl-1.5"
  >
    <div
      class="carousel__content--row m-auto h-full w-[85vw] overflow-hidden pl-1.5"
    >
      <div
        data-animated={animate}
        class="carousel__content__wrapper relative flex h-96 flex-row flex-wrap items-center justify-center"
      >
        {#each carouselItems as item, i}
          <div
            class="carousel__content shadow-xl -translate-x-[{shift()}] translate-y-[{shift()}] w-[{Math.floor(
              Math.random() * 10,
            )}rem] relative max-w-[12.5rem] min-w-[9.5rem] {grayscale
              ? 'grayscale'
              : ''} z-[{Math.floor(i * 10 + 1)}]
            "
          >
            {#if carouselType === "card"}
              <img
                class="carousel__image h-fit w-48 max-w-56"
                src={item.contentUrl}
                alt=""
              />
              <div class="carousel__label w-full overflow-clip pl-2">
                <h6
                  style="text-overflow: ellipsis;"
                  class="text-dh-orange font-space-mono w-full overflow-hidden text-lg text-nowrap"
                >
                  {item.title}
                </h6>
                <p class="w-fit text-sm text-clip text-gray-400">
                  {item.type}
                </p>
                <p class="w-fit text-sm text-gray-400">
                  {item.dateCreated!.getFullYear()}
                </p>
              </div>
            {:else}
              <img
                class="carousel__image h-fit w-full"
                src={item.contentUrl}
                alt=""
              />
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
{/if}
