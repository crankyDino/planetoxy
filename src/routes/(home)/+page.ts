import { load_PortfolioCarousel } from "$houdini";

// const client = createClient({
//     projectId: PUBLIC_SANITY_APP_ID,
//     dataset: 'production',
//     useCdn: true, // set to `false` to bypass the edge cache
//     apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
// })

export async function load(event) {
    const { params, } = event;

    // async function fetchPortfolio(refId: string) {
    //     const query = `*[_type=='frame' && _id == '${refId}']{title, type, contentUrl, description}`;
    //     return await client.fetch(query);
    // }

    // async function getCarouselMedia(ref: string) {
    //     const prom = {
    //         ...(await load_PortfolioCarousel({
    //             event,
    //             variables: { ref: ref }
    //         }))
    //     }
    //     return await prom.PortfolioCarousel;
    // }
    // return { getPortfolioCarousel }


    // async function getCarouselMedia(ref: string) {
    //     const carouselData = await load_PortfolioCarousel({
    //         event,
    //         variables: { ref }, // Replace `params.slug` with your actual dynamic slug
    //     })
    //     return carouselData.PortfolioCarousel;
    // }
    const { PortfolioCarousel } = {
        ...await load_PortfolioCarousel({
            event,
            variables: { ref: 'portfolioCarousel' }, // Replace `params.slug` with your actual dynamic slug
        })
    }
    return { PortfolioCarousel };


    // console.log(portfolioCarousel);
}
