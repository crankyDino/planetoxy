import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	GITHUB_API_KEY: { static: true },
	PUBLIC_BLOG_REPO: { public: true, static: true },
	PUBLIC_IS_PROD: { public: true, static: true },
	SANITY_API_KEY: { static: true },
	SANITY_APP_ID: { static: true },
	MOONBASE_URL: { static: true },
	PUBLIC_DH: { public: true, static: true },
	PUBLIC_GH: { public: true, static: true },
	PUBLIC_IG: { public: true, static: true },
	PUBLIC_LINKEDIN: { public: true, static: true },
	PUBLIC_TWITTER: { public: true, static: true },
	PUBLIC_EMAILTO: { public: true, static: true }
});
