import { Y as createVNode, _ as Fragment, aq as __astro_tag_component__ } from './astro/server_DgC14Out.mjs';
import 'clsx';

const camera = new Proxy({"src":"/_astro/camera.Dw6qNUCW.jpg","width":1760,"height":3074,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/user/starlight-blog/src/assets/camera.jpg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Photography",
  "description": "About my photography. Mostly birds.",
  "template": "doc"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "philosophy",
    "text": "Philosophy"
  }, {
    "depth": 2,
    "slug": "history",
    "text": "History"
  }, {
    "depth": 2,
    "slug": "android-photography-apps-i-use",
    "text": "Android photography apps I use"
  }];
}
function _createMdxContent(props) {
  const _components = {
    li: "li",
    ul: "ul",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>I’m still organizing photos on Flickr, experimenting with <a href=\"https://astro-loaders.lekoarts.de/\">an Astro Flickr content loader</a>, and figuring out the best way to display my collections of photos.</p>\n<p>In the mean time, you can <a href=\"https://www.flickr.com/photos/sarahrainsberger/\">visit my Flickr photo stream</a>, view <a href=\"https://mastodon.social/@sarah11918/media\">photos posted to the Fediverse from Mastodon</a> or see a sample embedded album below:<br><br></p>\n"
    }), createVNode("a", {
      "data-flickr-embed": "true",
      "data-header": "true",
      "data-footer": "false",
      href: "https://www.flickr.com/photos/sarahrainsberger/albums/72177720295657321",
      title: "PEI Canada Nature",
      children: createVNode("img", {
        src: "https://live.staticflickr.com/65535/51792833621_0c9da5df8d_z.jpg",
        width: "640",
        height: "480",
        alt: "PEI Canada Nature"
      })
    }), "\n", createVNode("script", {
      async: true,
      src: "//embedr.flickr.com/assets/client-code.js",
      charset: "utf-8"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"philosophy\">Philosophy</h2>\n<p>Since I began traveling regularly (2006), I have always photographed as a way of journaling, and organized my photos into albums with what can only be described as an unhealthy enthusiasm.  (“What year did they have that duckpin bowling tournament? In… was it Quebec City or Montreal?” WELL, LET ME AND MY METICULOUSLY ORGANIZED PHOTO ALBUMS TELL YOU…)</p>\n<p>Long before the days of Google Maps, I would photograph to remember the menu of a restuarant or the hours of a coffee shop in Munich. When we bought a new couch? That’s a photograph, so I can always look up how it is. When we traveled for several months out of the year, my photographs were also the souvenirs we didn’t have room to bring home. For the longest time, photography wasn’t art, but memory for me.</p>\n<p>Of course, it helps if the photographs look nice, too! So I started to take more care in the photos I took. I began to take photographs to capture emotions, not just information. I’m not a very artistic person, so when I thought something looked “nice” or “cool”, I’d try to capture that. At the very least, if I captured the <em>thing</em> then I could <em>remember</em> the emotion, even if I couldn’t evoke it in someone else. And, I’m happy if that’s all I ever achieve!</p>\n<p>What I can do, even without much artistic sense, is improve my technical abilities as a photographer: learn about light, use the appropriate shutter speed and aperature for the thing I’m taking a picture of or the image I want to create, and put myself in the position to be ready for an opportunity.</p>\n<p>Also, because I’m shy and don’t like being <em>in</em> the action, I often have a great view <em>of</em> the action from the periphery. I often notice what others miss, so I enjoy being the unofficial family photographer at gatherings. (Protip: if you’re holding the camera, you won’t get caught <em>in</em> the photos!)</p>\n<p>Still chronicling life today (sometimes as if to prepare for a triva show that is never going to happen), my recent gallery contains the new honey ginger whiskey we ordered (now, with thoughtful framing and lighting of course!), the old bingo hall being torn down to make way for condos, a pot of hot mulled wine on the stove with our festive mugs to open Rainsberger Backyard Christmas Market, and the Ho Ho Holiday 5K runners dressed in Santa suits that we noticed jogging by the front window one Saturday morning.</p>\n<h2 id=\"history\">History</h2>\n<p>My bird and nature photography hobby began in earnest with a Nikon P900 super-zoom camera. As I joined forums to learn how to use the camera and improve my photography, it turned out many of the users of this camera were using it for bird photography because of its long reach. So, that’s what I learned how to do, and how my photography pivoted from travel journaling to nature!</p>\n<p>I then upgraded to the Sony RX10iv for fast shutter speeds and burst modes (though less zoom) to better capture birds in flight. That camera is still today considered the best compact, non-interchangeable lens camera for birding and is popular among aging birders who “downsize” their gear. While fantastic in the field,</p>\n<p>On a whim, I wandered into my local pawn shop and discovered an inexpensive, old Nikon D7000 DSLR which I initially intended only for indoor/low-light photography (e.g. family gatherings, bowling tournaments). However, I noticed the improved image quality and the lack of start-up time with a DSLR compared to the RX10iv made it a compelling upgrade for nature photography, too. When my trusty local pawn shop had a compatible 70-300mm lens available, I finally had a chance to give the Nikon a serious try for birding and was hooked.</p>\n<p>I now use a Nikon D7500 and D500 for all my photography, and have since added a used Sigma 150-600mm which I was thrilled to find locally very inexpensively. On my photo walks, I usually wear a Cotton Carrier harness to distribute the weight of the camera and lens while also giving me quick access for spontaneous shots. I am still learning how to use (I mean, even how to <strong>hold</strong>!) the new gear, but I enjoy the challenge and occasional rewarding capture!</p>\n<h2 id=\"android-photography-apps-i-use\">Android photography apps I use</h2>\n"
    }), createVNode("div", {
      style: "display:flex; justify-content: space-between",
      children: [createVNode(_components.ul, {
        children: [createVNode(_components.li, {
          children: createVNode("a", {
            href: "https://play.google.com/store/apps/details?id=com.google.android.apps.photos",
            "set:html": "Google Photos"
          })
        }), createVNode(_components.li, {
          children: createVNode("a", {
            href: "https://play.google.com/store/apps/details?id=com.flickr.android",
            "set:html": "Flickr"
          })
        }), createVNode(_components.li, {
          children: createVNode("a", {
            href: "https://play.google.com/store/apps/details?id=com.fstop.photo",
            "set:html": "F-Stop Gallery"
          })
        }), createVNode(_components.li, {
          children: createVNode("a", {
            href: "https://play.google.com/store/apps/details?id=com.diune.pictures",
            "set:html": "Piktures"
          })
        }), createVNode(_components.li, {
          children: createVNode("a", {
            href: "https://play.google.com/store/apps/details?id=com.snapwood.photos2",
            "set:html": "pixFolio"
          })
        }), createVNode(_components.li, {
          children: createVNode("a", {
            href: "https://play.google.com/store/apps/details?id=com.snapwood.flickfolio",
            "set:html": "FlickFolio"
          })
        }), createVNode(_components.li, {
          children: createVNode("a", {
            href: "https://play.google.com/store/apps/details?id=com.niksoftware.snapseed",
            "set:html": "Snapseed"
          })
        }), createVNode(_components.li, {
          children: createVNode("a", {
            href: "https://play.google.com/store/apps/details?id=photo.editor.polarr",
            "set:html": "Polarr Photo Editor"
          })
        }), createVNode(_components.li, {
          children: createVNode("a", {
            href: "https://play.google.com/store/apps/details?id=com.iudesk.android.photo.editor",
            "set:html": "Android Photo Editor"
          })
        }), createVNode(_components.li, {
          children: createVNode("a", {
            href: "https://play.google.com/store/apps/details?id=com.goodtemperapps.renamephotosandvideos.pro",
            "set:html": "Rename Photos and Videos"
          })
        })]
      }), createVNode("div", {
        style: "padding-right: 3em;",
        children: createVNode("img", {
          alt: "Me wearing a camera harness vest with a large camera and VERY large lense attached, taking up almost the length of my entire upper body.",
          src: camera.src,
          width: "180px"
        })
      })]
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

const url = "src/content/docs/photography.mdx";
const file = "/home/user/starlight-blog/src/content/docs/photography.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/user/starlight-blog/src/content/docs/photography.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
