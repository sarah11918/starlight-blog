import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "🐦 Sarah Rainsberger",
			customCss: [
        './src/styles/custom.css',
      ],
			head: [
				{tag: "meta", 
					attrs: {
						property: "og:image", 
						content: "/flatjay.jpg",
					}
				},
				{tag: "script",
				 	attrs: {
					 "data-goatcounter": "https://sarah-starlight.goatcounter.com/count",
					 async: true,
					 src: "//gc.zgo.at/count.js",
				 	}
				}
			],
			social: {
				github: 'https://github.com/sarah11918/starlight-blog',
				mastodon: 'https://m.webtoo.ls/@astro',
				discord: 'https://astro.build/chat',
				twitter: 'https://twitter.com/sarah11918',
				youtube: 'https://youtube.com/sarahrainsberger',
				email: 'mailto:sarah@rainsberger.ca',
			},
			sidebar: [
				{ label: 'About', link: '/about/' },
				{ label: 'Gear', link: '/gear/' },
				{ label: 'Photography', link: '/photography/' },
				{ label: 'Choir Tech', link: '/choirtech/' },
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
					// items: [
						// Each item here is one entry in the navigation menu.
						// { label: 'Example Guide', link: '/guides/example/' },
					//],
				},
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
			plugins: [
				starlightBlog({
					authors: {
						sarah: {
							name: 'Sarah',
							title: '',
							picture: '/profile.jpg',
							url: 'https://rainsberger.ca/about/',
						}
					},
					recentPostCount: 5
				}),
			]
		}),
	],
});
