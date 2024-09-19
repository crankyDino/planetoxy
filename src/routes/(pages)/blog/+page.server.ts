
// export async function load() {
//   const URL = `${STRAPI_URL}/articles?populate[tags]=*&pagination[page]=1&pagination[pageSize]=2&publicationState=live&locale[0]=en`;

//   // const result = await fetch(URL);

//   // if (!result.ok) {
//   //   return {
//   //     status: result.status,
//   //     error: new Error("dang..."),
//   //   };
//   // }

//   // // const { data }: { data: IArticle } = await result.json();
//   // const { data, meta }: { data: Array<IData>, meta: IMeta } = await result.json();
//   // // console.log("here");
//   //   const data = query(graphql`
//   //   query 
//   //   {
//   //   allArticle{
//   //     title,
//   //     slug{
//   //     current
//   //     },
//   //     tags{
//   //       tagName
//   //     },
//   //     author
//   //   }
//   // }
//   //   `
//   //   )

//   //   console.log(data);
//   //   // console.log(meta);

//   //   return {
//   //     articles: data,
//   //     // meta: meta
//   //   };
// }
