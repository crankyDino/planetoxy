// import { STRAPI_URL } from "$env/static/private";
// import type { IData } from "$lib/models/article.model.js";

import { SANITY_APP_ID } from "$env/static/private";
import { createClient } from "@sanity/client";
import { json } from "@sveltejs/kit";



// // export function getArticles(): Promise<any> {
// //     try {
// //         const URL = `${STRAPI_URL}/articles`
// //         const options = {
// //             method: "GET"
// //         }

// //         return fetch(URL, options)
// //     } catch (error) {
// //         console.log(error);
// //         throw error
// //     }
// // }

// export async function load({ params }) {
//   const slug = params.article;
//   // const URL = `${STRAPI_URL}/articles/1`;
//   // const URL = `${STRAPI_URL}/articles?filters[title][$eq]=${slug}&populate=*&pagination[pageSize]=1&publicationState=live&locale[0]=en`;
//   const URL = `${STRAPI_URL}/articles?filters[title][$eq]=${slug.replace(" ", " ")}&populate[paragraph][populate][row][populate][0]=content&populate[tags]=*&populate[row]=*&populate[card]=*&populate[banner]=*&pagination[pageSize]=1&publicationState=live&locale[0]=en`;

//   const result = await fetch(URL);
//   console.log(slug.replace(" ", " "));

//   if (!result.ok) {
//     return {
//       status: result.status,
//       error: new Error("dang..."),
//     };
//   }

//   const { data } = await result.json();

//   console.log(data);

//   return data[0] as IData;
// }

const client = createClient({
    projectId: SANITY_APP_ID,
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
})


export async function GET({ url }): Promise<Response> {
    const query = `*[_type=='graphic' && _id == '${url.searchParams.get("ref")}']{title, type, contentUrl, description}`;
    const res = await client.fetch(query);
    return json({ res });
}