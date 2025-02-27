import { Y as createVNode, _ as Fragment, aq as __astro_tag_component__ } from './astro/server_DgC14Out.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from './_astro_assets_BQ_QfnC2.mjs';
import { $ as $$YouTube } from './post_CNYaRzqU.mjs';
import 'clsx';

const __0_______assets_your_photo_was_used_png__ = new Proxy({"src":"/_astro/your-photo-was-used.CwyA3MRy.png","width":823,"height":707,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/user/starlight-blog/src/assets/your-photo-was-used.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Birding",
  "description": "The birding apps and tools I use",
  "template": "doc"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "participatory-science",
    "text": "Participatory science"
  }, {
    "depth": 2,
    "slug": "android-birding-apps",
    "text": "Android Birding Apps"
  }, {
    "depth": 2,
    "slug": "sbirb",
    "text": "sBirb"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    "astro-image": "astro-image",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  }, _component0 = _components["astro-image"], {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>In 2014 my <a href=\"/photography/\">photography</a> began to drift towards nature and birds. I started casually recording bird observations using the <a href=\"https://merlin.allaboutbirds.org/\">Merlin birding app</a> to identify and save observations locally. In 2018 I moved my observations over to <a href=\"https://ebird.org\">eBird.org</a> where you can find <a href=\"https://ebird.org/profile/OTE3ODE4/world\">my birding profile</a> (available to logged in users).</p>\n<h2 id=\"participatory-science\">Participatory science</h2>\n<p>Birding is great hobby that allows you to participate in <a href=\"https://en.wikipedia.org/wiki/Citizen_science\">citizen science</a> (also known by <a href=\"https://www.ecospark.ca/blog/q3yvjx673xfa12esi43295aosviyl2\">the more inclusive “community science”</a> since “citizen” is a term describing one’s legal status within a jurisdiction). Your observations are used by research scientists to track and understand bird populations around the world.</p>\n<p>Global organizations like eBird and <a href=\"https://www.inaturalist.org/\">iNaturalist</a> connect your data with scientists and projects supporting education and biodiversity. Importantly for me, it’s a hobby I can do wherever in the world I happen to be: from my own backyard to travelling around Europe.</p>\n"
    }), createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "Screenshot of an email from eBird with a collage of several bird photos in portrait mode, as if taken on a mobile phone with the text: Hi Sarah, Thank you for contributing photos to eBird and the Macaulay Library. This November, we released a new version of Photo ID in Merlin, and we wanted to extend our gratitude for the important part you played in the creation of this new resource. 1 of your photos were used to train Merlin to identify birds in photos.",
        src: __0_______assets_your_photo_was_used_png__
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Canadians can also find <a href=\"https://www.birdscanada.org/you-can-help/citizen-science\">local citizen science initiatives to participate in at Birds Canada</a>, organized by province. These range from continuous ongoing projects such as eBird checklists, targeted studies for one species of bird, and specific “blitz” days or weekends like the Christmas Bird Count or “Global Big Day” events.</p>\n<h2 id=\"android-birding-apps\">Android Birding Apps</h2>\n<p>The following apps for identifying and observing birds can be downloaded from Google Play:</p>\n"
    }), createVNode(_components.ul, {
      children: [createVNode(_components.li, {
        children: createVNode("a", {
          href: "https://play.google.com/store/apps/details?id=com.audubon.mobile.android",
          "set:html": "Audubon"
        })
      }), createVNode(_components.li, {
        children: createVNode("a", {
          href: "https://play.google.com/store/apps/details?id=edu.cornell.birds.ebird",
          "set:html": "eBird"
        })
      }), createVNode(_components.li, {
        children: createVNode("a", {
          href: "https://play.google.com/store/apps/details?id=com.labs.merlinbirdid.app",
          "set:html": "Merlin"
        })
      }), createVNode(_components.li, {
        children: createVNode("a", {
          href: "https://play.google.com/store/apps/details?id=org.inaturalist.android",
          "set:html": "iNaturalist"
        })
      }), createVNode(_components.li, {
        children: createVNode("a", {
          href: "https://play.google.com/store/apps/details?id=com.thenerdbirder.GoBird",
          "set:html": "GoBird"
        })
      }), createVNode(_components.li, {
        children: createVNode("a", {
          href: "https://play.google.com/store/apps/details?id=de.tu_chemnitz.mi.kahst.birdnet",
          "set:html": "BirdNET"
        })
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"sbirb\">sBirb</h2>\n<p>After taking self-study courses at <a href=\"https://scrimba.com/home\">Scrimba</a> to learn JavaScript and React, I built <a href=\"https://sbirb.netlify.app/\"><code dir=\"auto\">sbirb</code></a> in Astro and React to house my experiments working with the eBird API to fetch and display data in a way that is not available through eBird’s website nor any other existing birding apps. It isn’t pretty, but it works!</p>\n<p>I created this app specifically to track <a href=\"https://sbirb.netlify.app/#unusual\"><strong>reported but not yet reviewed</strong> rare or unusual bird sightings</a> so I could check on the status of my own observations and see when they were confirmed or denied. (Because reasons, this was otherwise impossible without direct access to the API.)</p>\n<p>Over time, I added other functions that <strong>I</strong> found useful when birding, such as a quick <a href=\"https://sbirb.netlify.app/#recent\">“show me a list of which birds have been recently reported in this area”</a> as a “gut check” when I think I’ve seen a certain bird that seems unusual for this time of year. If someone else has recently reported seeing that bird, then it’s a safer bet that it is in fact the bird I think it is.</p>\n<p>Watch 2 minutes of my React Conf 2021 talk “Learning in the Browser” where I describe building this tool as my very first React project!</p>\n"
    }), createVNode($$YouTube, {
      id: "5X-WEQflCL0",
      params: "start=186&end=343",
      title: "Excerpt: How did I decide what to build? Solve a real problem you have!",
      poster: "https://lh3.googleusercontent.com/pw/AP1GczPqtri7_KSX0T1OMq6KrramYwQzdpIlfHdnvlNQmjcavNVF3FyzgI5S3lJxOP-6QNqo2IgbZ_lN6AYcgDLfTuUdU5M9YvyT10TGX64scBDmiRQB_wrv1EA5blbveINYjnFd2hdIrVtE6Ok7LQCbZ-PPlw=w1191-h655-s-no-gm?authuser=0"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/docs/birding.mdx";
const file = "/home/user/starlight-blog/src/content/docs/birding.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/starlight-blog/src/content/docs/birding.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
