/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
  watchSchema: {
    url: "https://pd7aruhx.api.sanity.io/v2023-08-01/graphql/production/experiment",
  },
  plugins: {
    "houdini-svelte": {},
  },
  scalars: {
    // DateTime: {
    //   type: "Date",
    //   unmarshal(val) {
    //     return val ? new Date(val) : null;
    //   },
    //   marshal(date) {
    //     return date && date.getTime();
    //   },
    // },
    // JSON: {
    //   type: "JSON",
    //   unmarshal(val) {
    //     return val ? JSON.parse(val) : null;
    //   },
    // },
  },
};

export default config;
