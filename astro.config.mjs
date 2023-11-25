import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlightBlog(),
		starlight({
			title: "Home",
			social: {
				github: 'https://github.com/sarah11918/starlight-blog',
			},
			components: {
			  MarkdownContent: 'starlight-blog/overrides/MarkdownContent.astro',
			  Sidebar: 'starlight-blog/overrides/Sidebar.astro',
			  ThemeSelect: 'starlight-blog/overrides/ThemeSelect.astro',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
