import { HoudiniClient } from '$houdini';
import { PUBLIC_SANITY_API_KEY } from "$env/static/public";

export default new HoudiniClient({
    url: 'https://pd7aruhx.api.sanity.io/v2023-08-01/graphql/production/experiment',
    fetchParams({ session }) {
        return {
            headers: {
                Authentication: `Bearer ${PUBLIC_SANITY_API_KEY}`,
            }
        }
    }
})
