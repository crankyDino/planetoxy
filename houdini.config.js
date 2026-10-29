/// <references types="houdini-svelte">
/** @type {import('houdini').ConfigFile} */
const config = {
  url: import.meta.env.VITE_SANITY_GQL_API,
  watchSchema: {
    url: (env) => `${env.VITE_SANITY_GQL_API}`,
  },
  schemaPath: "./schema.graphql",
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
