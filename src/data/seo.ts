import type { Seo } from '~/types/data';

export const defaultSeo: Seo = {
	title: 'developer',
	titleTemplate: '%s ─ nuro',
	description: "Hey 👋 I'm Ben, a developer",
	openGraph: {
		title: 'developer ─ nuro',
		siteName: 'nuro.dev',
	},
	twitter: {
		cardType: 'summary_large_image',
		handle: '@nurodev',
		site: '@nurodev',
	},
};
