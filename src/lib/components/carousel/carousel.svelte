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
    console.log(carouselItems);
    if (carousel) {
      // console.log(carouselItems);
      playCarousel(carousel);
    }
  });
</script>

{#if carouselItems}
  <div
    bind:this={carousel}
    data-direction={direction}
    class="carousel items-center overflow-hidden pl-1.5 m-auto w-fit"
  >
    <div
      class="carousel__content--row overflow-hidden pl-1.5 h-full w-[85vw] m-auto"
    >
      <div
        data-animated={animate}
        class="carousel__content__wrapper h-96 relative flex flex-row flex-wrap justify-center items-center"
      >
        {#each carouselItems as item, i}
          <div
            class="carousel__content shadow-xl -translate-x-[{shift()}] translate-y-[{shift()}] w-[{Math.floor(
              Math.random() * 10,
            )}rem]
           min-w-[9.5rem] max-w-[12.5rem] relative {grayscale
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
              <div class="carousel__label w-full pl-2 overflow-clip">
                <h6
                  style="text-overflow: ellipsis;"
                  class="text-dh-orange font-space-mono text-lg w-full overflow-hidden text-nowrap"
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
