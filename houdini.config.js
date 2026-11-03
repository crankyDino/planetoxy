function GetApiURL() {
  let url = import.meta.env.VITE_SANITY_GQL_API

  if (import.meta.env.PUBLIC_IS_PROD && import.meta.env.PUBLIC_IS_PROD.toString().toLowerCase() === 'true') {
    url += 'production/default';
  } else {
    url += 'staging/default'
  }

  return url
}

/// <references types="houdini-svelte">
/** @type {import('houdini').ConfigFile} */
const config = {
  url: GetApiURL(),
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
