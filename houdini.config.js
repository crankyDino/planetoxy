/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
  watchSchema: {
    url: "https://pd7aruhx.api.sanity.io/v2023-08-01/graphql/production/experiment",
  },
  plugins: {
    "houdini-svelte": { forceRunesMode: true },
  },
};

export default config;
