export type TCarouselType = "card" | "icon";
export type TCarouselDirection = "left" | "right";
export interface ICarouselItem {
    title: string;
    type: string;
    content: string;
    date: Date;
}

export function playCarousel(carousel: HTMLDivElement) {
    // const carousels = document.querySelectorAll(".carousel");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }

    function addAnimation() {
        // add data-animated="true" to every `.carousel` on the page
        //@ts-ignore
        carousel.setAttribute("data-animated", true);

        // Make an array from the elements within `.carousel-inner`
        const carouselInner = carousel.querySelector(".carousel__content__wrapper");
        if (!carouselInner) {
            return;
        }
        const carouselContent = Array.from(carouselInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.carousel-inner`
        carouselContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            //@ts-ignore
            duplicatedItem.setAttribute("aria-hidden", true);
            carouselInner.append(duplicatedItem);
        });
    }
}
