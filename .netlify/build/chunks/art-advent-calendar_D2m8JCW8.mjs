import { Y as createVNode, _ as Fragment, aq as __astro_tag_component__ } from './astro/server_DgC14Out.mjs';
import { a as $$Post } from './post_CNYaRzqU.mjs';
import 'clsx';

const frontmatter = {
  "title": "#ArtAdventCalendar",
  "description": "Social media posts labelled #ArtAdventCalendar",
  "template": "doc"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>These posts can also be found with a <a href=\"https://bsky.app/search?q=from%3Asarah11918.rainsberger.ca+%23ArtAdventCalendar\">custom Bluesky search</a>.</p>\n"
    }), createVNode($$Post, {
      id: "https://bsky.app/profile/sarah11918.rainsberger.ca/post/3ldywfpaq6s2z"
    }), "\n", createVNode($$Post, {
      id: "https://bsky.app/profile/sarah11918.rainsberger.ca/post/3ldw7nn7sc227"
    }), "\n", createVNode($$Post, {
      id: "https://bsky.app/profile/sarah11918.rainsberger.ca/post/3ldtsqnfjzs2c"
    }), "\n", createVNode($$Post, {
      id: "https://bsky.app/profile/sarah11918.rainsberger.ca/post/3ldresalmbc2n"
    }), "\n", createVNode($$Post, {
      id: "https://bsky.app/profile/sarah11918.rainsberger.ca/post/3ldoxalszhk23"
    }), "\n", createVNode($$Post, {
      id: "https://bsky.app/profile/sarah11918.rainsberger.ca/post/3ldmpdvror22a"
    }), "\n", createVNode($$Post, {
      id: "https://bsky.app/profile/sarah11918.rainsberger.ca/post/3ldjvamtjy22i"
    }), "\n", createVNode($$Post, {
      id: "https://bsky.app/profile/sarah11918.rainsberger.ca/post/3ldhfebbr5s2i"
    }), "\n", createVNode($$Post, {
      id: "https://bsky.app/profile/sarah11918.rainsberger.ca/post/3ldeptnmld22u"
    }), "\n", createVNode($$Post, {
      id: "https://bsky.app/profile/sarah11918.rainsberger.ca/post/3ldbuycsos225"
    }), "\n", createVNode($$Post, {
      id: "https://bsky.app/profile/sarah11918.rainsberger.ca/post/3ld7ss7rzyk2w"
    }), "\n", createVNode($$Post, {
      id: "https://bsky.app/profile/sarah11918.rainsberger.ca/post/3ld2ovevr3s2v"
    }), "\n", createVNode($$Post, {
      id: "https://bsky.app/profile/sarah11918.rainsberger.ca/post/3lcxcktx36s2g"
    }), "\n", createVNode($$Post, {
      id: "https://bsky.app/profile/sarah11918.rainsberger.ca/post/3lcvr4fcjhk27"
    }), "\n", createVNode($$Post, {
      id: "https://bsky.app/profile/sarah11918.rainsberger.ca/post/3lcspt4ikt22h"
    }), "\n", createVNode($$Post, {
      id: "https://bsky.app/profile/sarah11918.rainsberger.ca/post/3lcqn72b4pk2u"
    }), "\n", createVNode($$Post, {
      id: "https://bsky.app/profile/sarah11918.rainsberger.ca/post/3lco522vccc2r"
    }), "\n", createVNode($$Post, {
      id: "https://bsky.app/profile/sarah11918.rainsberger.ca/post/3lclowlvmbc2n"
    }), "\n", createVNode($$Post, {
      id: "https://bsky.app/profile/sarah11918.rainsberger.ca/post/3lcjhe3xdgs2i"
    }), "\n", createVNode($$Post, {
      id: "https://bsky.app/profile/sarah11918.rainsberger.ca/post/3lcguntvscc2x"
    }), "\n", createVNode($$Post, {
      id: "https://bsky.app/profile/sarah11918.rainsberger.ca/post/3lcefwktw522v"
    }), "\n", createVNode($$Post, {
      id: "https://bsky.app/profile/sarah11918.rainsberger.ca/post/3lcbjce7vg22b"
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

const url = "src/content/docs/photography/art-advent-calendar.mdx";
const file = "/home/user/starlight-blog/src/content/docs/photography/art-advent-calendar.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/starlight-blog/src/content/docs/photography/art-advent-calendar.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
