import { Y as createVNode, _ as Fragment, aq as __astro_tag_component__ } from './astro/server_DgC14Out.mjs';
import 'clsx';

const frontmatter = {
  "title": "Sarah Rainsberger",
  "description": "Creates and solves problems. Sometimes, in that order.",
  "template": "splash",
  "hero": {
    "tagline": "Sarah photographs birds, watches baseball, and writes docs!",
    "image": {
      "file": "../../assets/mewithbird.webp"
    },
    "actions": [{
      "text": "About me, and more!",
      "link": "/about/",
      "icon": "right-arrow",
      "variant": "primary"
    }, {
      "text": "\"50 docs tips in 50 days\"",
      "link": "/blog/50-docs-tips-in-50-days",
      "icon": "rocket",
      "variant": "secondary"
    }]
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/docs/index.mdx";
const file = "/home/user/starlight-blog/src/content/docs/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/starlight-blog/src/content/docs/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
