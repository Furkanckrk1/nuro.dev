import type { IconName } from '~/types/icon';

export interface Referral {
	aliases?: Array<string>;
	bonus?: string;
	code?: string;
	color?: string;
	description: string;
	homepage: string;
	icon: IconName;
	name: string;
	url: string;
}

/**
 * Get all of your referral links.
 *
 * This function allows you to either manually write out
 * your referrals data by hand, or you can fetch it from an
 * external API.
 *
 * @returns {Promise<Array<Referral>>} The array of referrals
 */
export async function getReferrals(): Promise<Array<Referral>> {
	return [
		{
			aliases: ['uptime', 'status'],
			code: '7p8z',
			color: '#0E153A',
			description: 'Get notified with a radically better infrastructure monitoring platform',
			homepage: 'https://betteruptime.com',
			icon: 'Radio',
			name: 'Better Uptime',
			url: 'https://betteruptime.com/?ref=7p8z',
		},
		{
			bonus: 'Free £5 each',
			code: 'SXSQNGL',
			color: '#00D54B',
			description: 'The easiest way to send, spend, bank, and invest',
			homepage: 'https://cash.app',
			icon: 'Banknote',
			name: 'Cash App',
			url: 'https://cash.app/app/SXSQNGL',
		},
		{
			aliases: ['crypto', 'bitcoin'],
			bonus: 'Free £7 in Bitcoin',
			code: 'dixon_23e',
			color: '#0052ff',
			description: 'Jump start your crypto portfolio',
			homepage: 'https://www.coinbase.com',
			icon: 'DollarSign',
			name: 'Coinbase',
			url: 'https://coinbase.com/join/dixon_23e',
		},
		{
			bonus: 'Get between £10-60 off',
			code: 'CQ5psRocnkb',
			color: '#6544E2',
			description: 'Radically better & smarter car insurance',
			homepage: 'https://www.cuvva.com/',
			icon: 'Truck',
			name: 'Cuvva',
			url: 'https://cuvva.insure/CQ5psRocnkb',
		},
		{
			aliases: ['food', 'roo'],
			bonus: '£10 off the first 4 orders',
			code: 'bend1044',
			color: '#00ccbc',
			description: 'Your favourite restaurants, shops & supermarkets delivered to your door',
			homepage: 'https://deliveroo.co.uk/',
			icon: 'ShoppingCart',
			name: 'Deliveroo',
			url: 'https://roo.it/bend1044',
		},
		{
			aliases: ['cloud', 'do'],
			bonus: 'Free $100 credit over 60 days',
			code: '81fa220bbbe0',
			color: '#0069ff',
			description: 'Cloud platform to deploy, manage & scale applications',
			homepage: 'https://www.digitalocean.com/',
			icon: 'Server',
			name: 'DigitalOcean',
			url: 'https://m.do.co/c/81fa220bbbe0',
		},
		{
			aliases: ['dividend', 'dividends'],
			bonus: 'Get 3 months premium for free',
			code: 'ANPTL9oVTA',
			color: '#0856cc',
			description: 'All-in-one tool for dividend investors',
			homepage: 'https://dividend.watch',
			icon: 'BarChart2',
			name: 'DividendWatch',
			url: 'https://dividend.watch/?forfriends=ANPTL9oVTA',
		},
		{
			aliases: ['mail', 'email'],
			bonus: '10% off your first year',
			code: 'u27670144',
			color: '#1565c0',
			description: 'Private email peace of mind',
			homepage: 'https://fastmail.com/',
			icon: 'Mail',
			name: 'Fastmail',
			url: 'https://ref.fm/u27670144',
		},
		{
			aliases: ['investing', 'stocks', 'stonks'],
			bonus: 'Get a free share between £3-200',
			code: '3e2d5864',
			color: '#f7618b',
			description: 'Smart & simple personal investing',
			homepage: 'https://freetrade.io',
			icon: 'Banknote',
			name: 'Freetrade',
			url: 'https://magic.freetrade.io/join/ben/3e2d5864',
		},
		{
			aliases: ['🌍', '💚', 'climate', 'eco'],
			bonus: 'Help save the planet 🌍💚',
			code: 'xtb2dx',
			color: '#25cf7a',
			description: 'Help offset your carbon footprint',
			homepage: 'https://klima.com',
			icon: 'Globe2',
			name: 'Klima',
			url: 'https://klima.com/multiply/join/',
		},
		{
			aliases: ['bank'],
			code: 'd8z35vy',
			color: '#ff4d56',
			description: 'Banking made easy',
			homepage: 'https://monzo.com',
			icon: 'CreditCard',
			name: 'Monzo',
			url: 'https://join.monzo.com/c/d8z35vy',
		},
		{
			code: 'nurodev-charmander',
			color: '#582be8',
			description: 'A new kind of professional network',
			homepage: 'https://www.polywork.com/',
			icon: 'Grid',
			name: 'Polywork',
			url: 'https://www.polywork.com/invite/nurodev-charmander',
		},
		{
			code: 'nuro',
			color: '#853bce',
			description: 'Build apps. Not infrastructure.',
			homepage: 'https://railway.app',
			icon: 'Cloud',
			name: 'Railway',
			url: 'https://railway.app?referralCode=nuro',
		},
		{
			aliases: ['cv', 'resume'],
			code: 'nuro',
			color: '#000000',
			description: 'I’d like to add you to my professional network.',
			homepage: 'https://read.cv',
			icon: 'FileText',
			name: 'Read.cv',
			url: 'https://read.cv/join/nuro',
		},
		{
			aliases: ['phone', 'sim'],
			code: 'X704rL',
			color: '#8ED6C9',
			description: 'Simple, honest mobile.',
			homepage: 'https://smarty.co.uk/',
			icon: 'Phone',
			name: 'Smarty',
			url: 'https://i.smarty.co.uk/X704rL',
		},
		{
			aliases: ['tex', 'taxes'],
			bonus: 'Get 10% off your first tax return',
			code: 'BEN388',
			color: '#e5d4f7',
			description: 'Stress-free tax returns. £119, all in.',
			homepage: 'https://taxscouts.com/',
			icon: 'Landmark',
			name: 'TaxScouts',
			url: 'https://taxscouts.com/i/BEN388',
		},
		{
			aliases: ['git'],
			bonus: 'Get 10% off',
			code: 'R-3LC5426SFD',
			color: '#FFC600',
			description: 'The most powerful Git client for Mac & Windows',
			homepage: 'https://www.git-tower.com/',
			icon: 'GitBranch',
			name: 'Tower',
			url: 'https://www.git-tower.com/p/refer-a-friend/R-3LC5426SFD',
		},
		{
			aliases: ['food'],
			code: 'eats-bend10725ue',
			color: '#000000',
			description: 'Order food to your door',
			homepage: 'https://www.ubereats.com',
			icon: 'Coffee',
			name: 'Uber Eats',
			url: 'https://ubereats.com/feed?promoCode=eats-bend10725ue',
		},
		{
			color: 'black',
			description: 'Develop. Preview. Ship.',
			homepage: 'https://vercel.com/home',
			icon: 'Cloud',
			name: 'Vercel',
			url: 'https://vercel.com/home?utm_source=nuro&utm_campaign=oss',
		},
		{
			bonus: 'Free $10 credit over 30 days',
			code: '7299996',
			color: '#007bfc',
			description: 'Deploy public cloud, storage & single tenant bare metal services',
			homepage: 'https://vultr.com',
			icon: 'Server',
			name: 'Vultr',
			url: 'https://www.vultr.com/?ref=7299996',
		},
	];
}
