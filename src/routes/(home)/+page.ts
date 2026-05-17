import { load_Headshot, load_PortfolioCarousel, loadAll, } from "$houdini";

export async function load(event) {
    const { params, } = event;

    const { PortfolioCarousel, Headshot } = {
        ...(await loadAll(
            load_Headshot({ event }),
            load_PortfolioCarousel({
                event,
                variables: { ref: 'portfolioCarousel' },
            })))
    }

    return { PortfolioCarousel, Headshot };
}
