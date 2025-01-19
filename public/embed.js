"use strict";
(() => {
    var v = ["attachedMedia", "authorLink", "authorName", "authorUserName", "avatarUrl", "contentHtml", "dateTimeIso", "editedDateTimeIso", "dateTimeText", "hiddenIfNotEdited", "editedDateTimeText", "embedATootVersion", "favoritesCount", "favoritesLink", "optionAttributes", "reblogsLink", "repliesLink", "reblogsCount", "repliesCount", "server", "statusId", "whenEmbedGeneratedDateTimeIso"],
        S = v.reduce((t, o) => (t[o] = "{{".concat(o, "}}"), t), {}),
        i = {
            fediverseStatus: "fediverse-status",
            emoji: "emoji",
            fediverseAttachment: "fediverse-attachment",
            authorsAvatar: "authors-avatar",
            authorsAvatarLink: "authors-avatar-link",
            counterFavourites: "counter-favourites",
            counterReblogs: "counter-reblogs",
            counterReplies: "counter-replies",
            editTime: "edit-time",
            postAuthor: "post-author",
            postAuthorsDisplayName: "post-authors-display-name",
            postAuthorsFediverseIdentity: "post-authors-fediverse-identity",
            postAuthorsFediverseUsername: "post-authors-fediverse-username",
            postAuthorsFediverseServer: "post-authors-fediverse-server",
            postTime: "post-time",
            atSymbol: "at-symbol",
            usernameAtSymbol: "username-at-symbol",
            serverAtSymbol: "server-at-symbol"
        };
    var p = t => t.media_attachments.map(e => {
        switch (e.type) {
            case "image":
                return '<img class="'.concat(i.fediverseAttachment, '" src="').concat(encodeURI(e.url), '" alt="').concat(encodeURIComponent(e.description), '" />');
            case "gifv":
                return '<video class="'.concat(i.fediverseAttachment, '" video" alt="').concat(encodeURIComponent(e.description), '" role="application" src="').concat(encodeURI(e.url), '" controls playsinline autoplay loop></video>');
            case "video":
                return '<video class="'.concat(i.fediverseAttachment, '" gifv" alt="').concat(encodeURIComponent(e.description), '" role="application" src="').concat(encodeURI(e.url), '" controls playsinline autoplay loop></video>');
            case "audio":
                return ""
        }
    }).join("");
    var m = (t, o) => {
        let e = t;
        return o.forEach(s => {
            let n = document.createElement("source");
            n.setAttribute("srcset", s.url), n.setAttribute("media", "(prefers-reduced-motion: no-preference)");
            let r = document.createElement("img");
            r.classList.add("emoji"), r.setAttribute("src", s.static_url), r.setAttribute("alt", ":".concat(s.shortcode, ":")), r.setAttribute("title", ":".concat(s.shortcode, ":"));
            let a = document.createElement("picture");
            a.classList.add("emoji"), a.appendChild(n), a.append(r), e = e.replace(":".concat(s.shortcode, ":"), a.outerHTML)
        }), e
    };
    var T = t => {
            var n;
            let {
                host: o,
                pathname: e
            } = new URL(t), s = (n = e.split("/")[2]) != null ? n : "";
            return {
                host: o,
                status: s
            }
        },
        g = async (...t) => {
            let o = await fetch(...t);
            if (!o.ok) throw new Error(o.statusText);
            return await o.json()
        }, f = (t, o = {}) => {
            let {
                host: e,
                status: s
            } = typeof t == "string" ? T(t) : t;
            return g("https://".concat(e, "/api/v1/statuses/").concat(s), o)
        };
    var b = (t, o, e) => {
            let s = t.querySelector("main"),
                n = t.querySelector(".".concat(i.counterReblogs)),
                r = t.querySelector(".".concat(i.counterReplies)),
                a = t.querySelector(".".concat(i.counterFavourites)),
                d = t.querySelector(".".concat(i.editTime));
            if (o.content && s && "setHTML" in s && (s.setHTML(m(e.content, e.emojis) + p(e)), e.edited_at && d)) {
                d.removeAttribute("hidden");
                let l = new Date(e.edited_at);
                d.dateTime = l.toISOString(), d.textContent = l.toLocaleString(void 0, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit"
                })
            }
            o.counters && (n != null && (n.textContent = "".concat(e.reblogs_count)), a != null && (a.textContent = "".concat(e.favourites_count)), r != null && (r.textContent = "".concat(e.replies_count)))
        },
        h = () => Promise.allSettled([...document.querySelectorAll("[data-mastodon-host][data-status]")].map(async t => {
            if (t instanceof HTMLElement) {
                let {
                    mastodonHost: o,
                    status: e,
                    update: s,
                    updateContent: n,
                    updateCounters: r
                } = t.dataset, a = {
                    counters: s != null || r != null,
                    content: s != null || n != null
                };
                if (a.content || a.counters) {
                    let d = await f({
                        host: o,
                        status: e
                    }, {
                        headers: {
                            "Request-Purpose": "update rendered post on the referring page",
                            "Request-Module": "https://github.com/UppaJung/embed-a-toot v1.0.0"
                        }
                    });
                    b(t, a, d)
                }
            }
        }));
    var u = !1,
        c = !0,
        y = () => {
            if (u) {
                c = !0;
                return
            }
            do c = !1, u = !0, h().finally(() => {
                u = !1
            }); while (c)
        };
    document.addEventListener("DOMContentLoaded", () => {
        y(), new MutationObserver(y).observe(document.body, {
            childList: !0,
            attributeFilter: ["data-mastodon-host", "data-status", "data-update-counters", "data-update-content"]
        })
    });
})();
//# sourceMappingURL=updated-embedded-posts.js.map