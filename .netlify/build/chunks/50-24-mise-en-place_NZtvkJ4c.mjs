import { Y as createVNode, _ as Fragment, aq as __astro_tag_component__ } from './astro/server_DgC14Out.mjs';
import { e as $$LinkCard } from './Code_DPCfmiuD.mjs';
import 'clsx';

const frontmatter = {
  "title": "Tip 24 - mise en place",
  "authors": ["sarah"],
  "date": "2024-07-17T00:00:00.000Z",
  "pubDate": "2024-07-17",
  "excerpt": "Front load prerequisites to avoid distracting side quests.",
  "tags": ["docs tips", "50 tips in 50 days"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<aside aria-label=\"Tip\" class=\"starlight-aside starlight-aside--tip\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.43909 8.85483L1.44039 8.85354L4.96668 5.33815C5.30653 4.99386 5.7685 4.79662 6.2524 4.78972L6.26553 4.78963L12.9014 4.78962L13.8479 3.84308C16.9187 0.772319 20.0546 0.770617 21.4678 0.975145C21.8617 1.02914 22.2271 1.21053 22.5083 1.4917C22.7894 1.77284 22.9708 2.13821 23.0248 2.53199C23.2294 3.94517 23.2278 7.08119 20.1569 10.1521L19.2107 11.0983V17.7338L19.2106 17.7469C19.2037 18.2308 19.0067 18.6933 18.6624 19.0331L15.1456 22.5608C14.9095 22.7966 14.6137 22.964 14.29 23.0449C13.9663 23.1259 13.6267 23.1174 13.3074 23.0204C12.9881 22.9235 12.7011 22.7417 12.4771 22.4944C12.2533 22.2473 12.1006 21.9441 12.0355 21.6171L11.1783 17.3417L6.65869 12.822L4.34847 12.3589L2.38351 11.965C2.05664 11.8998 1.75272 11.747 1.50564 11.5232C1.25835 11.2992 1.07653 11.0122 0.979561 10.6929C0.882595 10.3736 0.874125 10.034 0.955057 9.7103C1.03599 9.38659 1.20328 9.09092 1.43909 8.85483ZM6.8186 10.8724L2.94619 10.096L6.32006 6.73268H10.9583L6.8186 10.8724ZM15.2219 5.21703C17.681 2.75787 20.0783 2.75376 21.1124 2.8876C21.2462 3.92172 21.2421 6.31895 18.783 8.77812L12.0728 15.4883L8.51172 11.9272L15.2219 5.21703ZM13.9042 21.0538L13.1279 17.1811L17.2676 13.0414V17.68L13.9042 21.0538Z\"></path><path d=\"M9.31827 18.3446C9.45046 17.8529 9.17864 17.3369 8.68945 17.1724C8.56178 17.1294 8.43145 17.1145 8.30512 17.1243C8.10513 17.1398 7.91519 17.2172 7.76181 17.3434C7.62613 17.455 7.51905 17.6048 7.45893 17.7835C6.97634 19.2186 5.77062 19.9878 4.52406 20.4029C4.08525 20.549 3.6605 20.644 3.29471 20.7053C3.35607 20.3395 3.45098 19.9148 3.59711 19.476C4.01221 18.2294 4.78141 17.0237 6.21648 16.5411C6.39528 16.481 6.54504 16.3739 6.65665 16.2382C6.85126 16.0016 6.92988 15.678 6.84417 15.3647C6.83922 15.3466 6.83373 15.3286 6.82767 15.3106C6.74106 15.053 6.55701 14.8557 6.33037 14.7459C6.10949 14.6389 5.84816 14.615 5.59715 14.6994C5.47743 14.7397 5.36103 14.7831 5.24786 14.8294C3.22626 15.6569 2.2347 17.4173 1.75357 18.8621C1.49662 19.6337 1.36993 20.3554 1.30679 20.8818C1.27505 21.1464 1.25893 21.3654 1.25072 21.5213C1.24662 21.5993 1.24448 21.6618 1.24337 21.7066L1.243 21.7226L1.24235 21.7605L1.2422 21.7771L1.24217 21.7827L1.24217 21.7856C1.24217 22.3221 1.67703 22.7579 2.2137 22.7579L2.2155 22.7579L2.22337 22.7578L2.23956 22.7577C2.25293 22.7575 2.27096 22.7572 2.29338 22.7567C2.33821 22.7555 2.40073 22.7534 2.47876 22.7493C2.63466 22.7411 2.85361 22.725 3.11822 22.6932C3.64462 22.6301 4.36636 22.5034 5.13797 22.2464C6.58274 21.7653 8.3431 20.7738 9.17063 18.7522C9.21696 18.639 9.26037 18.5226 9.30064 18.4029C9.30716 18.3835 9.31304 18.364 9.31827 18.3446Z\"></path></svg>Tip</p><div class=\"starlight-aside__content\"><p>Front load prerequisites to avoid distracting side quests.</p></div></aside>\n<p>Astro Docs contains several guides to working with third-party services such as CMS guides, deploy hosts, and backend services. And, there are <em>several</em> different “starting points” for the journey of integrating another service with Astro. Do you already have an existing third-party… account? project? token? Do you even <em>have</em> an Astro project yet?</p>\n<p>The French cooking term “<a href=\"https://en.wikipedia.org/wiki/Mise_en_place\">mise en place</a>” refers to laying out your ingredients ahead of time so that you aren’t trying to find or prepare ingredients while you are trying to follow the recipe. “How to build a blog with Astro and CMS X” can feel like baking a pie with a crust, filling, and topping as you open one project here while configuring frontmatter fields over there and adding an environment variable to a deploy host over yonder.</p>\n<p>One PR suggestion I often make for these guides is to <strong>assume people can find and follow existing documentation for side quests</strong>, and put anything that’s not about integrating the two existing services as a stated prerequisite. We <em>have</em> documentation on running <code dir=\"auto\">create astro</code>. This guide does not need to cover it. Similarly, a CMS itself should be documenting how to configure their own settings and use their own dashboard.</p>\n<ul>\n<li>\n<p>✅ Prerequisites: An Astro project configured for <code dir=\"auto\">hybrid</code> rendering and an existing CMS X project with <code dir=\"auto\">title</code>, <code dir=\"auto\">author</code>, <code dir=\"auto\">date</code>, and <code dir=\"auto\">body</code> field labels created. You will also need your personal token from the CMS dashboard for your deploy host.</p>\n</li>\n<li>\n<p>😐 Run <code dir=\"auto\">create astro</code>… Sign up for a free account with “CMS X.” …</p>\n</li>\n</ul>\n<p>Your marketing concerns itself with your project’s “unique selling proposition” (USP). The best recipes and guides also focus on exactly what they can bring to the table that no one else can, or specifically, what no one else has written. (In the Astro + X guides case, it’s <strong>connecting two existing services</strong>.)</p>\n<p>Identify the parts of your guide that are already documented, and don’t redocument them. Make them a prerequisite to even starting! It’s not being “lazy” or “incomplete.” It is keeping your readers focused on <em>your</em> task so that they aren’t trying to bake fudge in the middle of making the ice cream it will go into.</p>\n<p>Not only will you save time writing, you’ll reduce your maintenance burden when something (inevitably) changes in a part of the process that you might not even be responsible for. When a CMS changes their settings menu from <code dir=\"auto\">Settings > Project > Token</code> to <code dir=\"auto\">Settings > Tokens</code>, you can remain <em>blissfully unaware</em> with your <em>still-functioning</em> guide!</p>\n"
    }), "\n", createVNode($$LinkCard, {
      title: "See the whole list of tips!",
      href: "/blog/50-docs-tips-in-50-days"
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

const url = "src/content/docs/blog/50-24-mise-en-place.mdx";
const file = "/home/user/starlight-blog/src/content/docs/blog/50-24-mise-en-place.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/starlight-blog/src/content/docs/blog/50-24-mise-en-place.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
