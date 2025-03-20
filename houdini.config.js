import { PUBLIC_SANITY_GQL_API } from "$env/static/public";

/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
  watchSchema: {
    url: `${PUBLIC_SANITY_GQL_API}/v2023-08-01/graphql/production/experiment`,
  },
  plugins: {
    "houdini-svelte": { forceRunesMode: true },
  },
};

export default config;
