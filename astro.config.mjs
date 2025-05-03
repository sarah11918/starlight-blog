import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
// import { imageService } from "@unpic/astro/service";
// import starlightCoolerCredit from 'starlight-cooler-credit'
import netlify from '@astrojs/netlify';

import aiRobotsTxt from 'astro-ai-robots-txt';

// https://astro.build/config
export default defineConfig({
//   Looks like there is an issue with an image in the public folder, not sure yet what it is.
//   image: {
//       service: imageService(),
// 	  },

  site: 'https://www.rainsberger.ca',

  integrations: [starlight({
      credits: true,
      title: "rainsberger.ca",
      logo: {
        src: './src/assets/heartjay200.webp',
      },
      components: {
        Footer: './src/components/ConditionalFooter.astro',
      },
      customCss: [
        './src/styles/custom.css',
      ],
      lastUpdated: true,
      head: [
          {tag: "meta", 
              attrs: {
                property: "og:image", 
                content: "/flatjay.jpg",
              }
          },
          {tag: "meta", 
            attrs: {
                name: "fediverse:creator", 
                content: "@sarah11918@mastodon.social",
            }
          },
          {tag: "script",
              attrs: {
               "data-goatcounter": "https://sarah-starlight.goatcounter.com/count",
               async: true,
               src: "//gc.zgo.at/count.js",
              }
          },
          { tag: "script",
              attrs: {
                  defer: true,
                  src: "https://cloud.umami.is/script.js",
                  "data-website-id": "a0abfc56-ed61-426d-b0bb-5a046918e4c6"
              }
              
          }
      ],
      social: [
          { icon: 'github', label: 'GitHub', href: 'https://github.com/sarah11918/starlight-blog' },
          { icon: 'mastodon', label: 'Mastodon', href: 'https://mastodon.social/@sarah11918' },
          { icon: 'blueSky', label: 'Bluesky', href: 'https://bsky.app/profile/sarah11918.rainsberger.ca' },
          { icon: 'discord', label: 'Discord', href: 'https://astro.build/chat' },
          { icon: 'twitter', label: 'Twitter', href: 'https://x.com/sarah11918' },
          { icon: 'youtube', label: 'YouTube', href: 'https://youtube.com/sarahrainsberger' },
          { icon: 'rss', label: 'RSS', href: 'https://www.rainsberger.ca/blog/rss.xml' },
          { icon: 'email', label: 'email', href: 'mailto:sarah@rainsberger.ca' },
      ],
      sidebar: [
          { label: 'About Me', link: '/about/' },
          { label: 'Birding', link: '/birding/' },
          { label: 'Choir Tech', link: '/choirtech/' },
          { label: 'Gear', link: '/gear/' },
          { label: 'Photography', 
            items: [
               { label: 'My Photography', link: '/photography/' },
               { label: '#SilentSunday', link: '/photography/silent-sunday/' },
               { label: '#ArtAdventCalendar 2024', link: '/photography/art-advent-calendar/' },
            ]
          },
          {
            label: 'Guides',
            autogenerate: { directory: 'guides' },
          },
          { 
            label: 'Featured Blog Posts', 
            items: [
              { label: '50 docs tips in 50 days', link: '/blog/50-docs-tips-in-50-days' },
              { label: "Stop writing docs. Start helping!" , link: '/blog/stop-writing-start-helping' },
              { label: "The value of non-code contributions to open source" , link: '/blog/non-code-contributions' },
            ]
          },
      ],
      plugins: [
        // The starlight-cooler-credit plugin is not updated for Starlight 0.32.0 yet.
        //   starlightCoolerCredit({credit: {title: "Built with Starlight Blog", href: "https://github.com/HiDeoo/starlight-blog", description: "Get your own Starlight Blog!"}}),
          starlightBlog({
              authors: {
                  sarah: {
                      name: 'Sarah Rainsberger',
                      title: 'Creates and solves problems. Sometimes, in that order.',
                      picture: '/profile.jpg',
                      url: 'https://rainsberger.ca/about/',
                  }
              },
              recentPostCount: 10,
              postCount: 15,
          }),
      ]
  }), aiRobotsTxt()],

  output: 'static',
  adapter: netlify(),
});