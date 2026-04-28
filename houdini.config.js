/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
  watchSchema: process.env.NODE_ENV !== 'production' ? {
    url: (env) => `${env.PUBLIC_SANITY_GQL_API}/v2023-08-01/graphql/production/experiment`,
  } : undefined,
  runtimeDir: ".houdini",
  plugins: {
    "houdini-svelte": { forceRunesMode: true },
  },
  scalars: {
    Date: {
      type: 'string'
    },
    DateTime: {
      type: 'Date',
      marshal(val) {
        return val.toISOString();
      },
      unmarshal(val) {
        return val ? new Date(val) : null;
      }
    },
    JSON: {
      type: 'Record<string, any>'
    }
  }
}
export default config
