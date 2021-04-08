function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(c) {
    function e() {}

    function f(e, t) {
        m.ev.on("mfp" + e + b, t)
    }

    function p(e, t, n, r) {
        var i = document.createElement("div");
        return i.className = "mfp-" + e, n && (i.innerHTML = n), r ? t && t.appendChild(i) : (i = c(i), t && i.appendTo(t)), i
    }

    function d(e, t) {
        m.ev.triggerHandler("mfp" + e, t), m.st.callbacks && (e = e.charAt(0).toLowerCase() + e.slice(1), m.st.callbacks[e] && m.st.callbacks[e].apply(m, c.isArray(t) ? t : [t]))
    }

    function h(e) {
        return e === t && m.currTemplate.closeBtn || (m.currTemplate.closeBtn = c(m.st.closeMarkup.replace("%title%", m.st.tClose)), t = e), m.currTemplate.closeBtn
    }

    function o() {
        c.magnificPopup.instance || ((m = new e).init(), c.magnificPopup.instance = m)
    }
    var m, r, g, i, v, t, u = "Close",
        l = "BeforeClose",
        y = "MarkupParse",
        x = "Open",
        b = ".mfp",
        w = "mfp-ready",
        n = "mfp-removing",
        a = "mfp-prevent-close",
        s = !!window.jQuery,
        C = c(window);
    e.prototype = {
        constructor: e,
        init: function() {
            var e = navigator.appVersion;
            m.isLowIE = m.isIE8 = document.all && !document.addEventListener, m.isAndroid = /android/gi.test(e), m.isIOS = /iphone|ipad|ipod/gi.test(e), m.supportsTransition = function() {
                var e = document.createElement("p").style,
                    t = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== e.transition) return !0;
                for (; t.length;)
                    if (t.pop() + "Transition" in e) return !0;
                return !1
            }(), m.probablyMobile = m.isAndroid || m.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), g = c(document), m.popupsCache = {}
        },
        open: function(e) {
            var t;
            if (!1 === e.isObj) {
                m.items = e.items.toArray(), m.index = 0;
                var n, r = e.items;
                for (t = 0; t < r.length; t++)
                    if ((n = r[t]).parsed && (n = n.el[0]), n === e.el[0]) {
                        m.index = t;
                        break
                    }
            } else m.items = c.isArray(e.items) ? e.items : [e.items], m.index = e.index || 0;
            if (!m.isOpen) {
                m.types = [], v = "", e.mainEl && e.mainEl.length ? m.ev = e.mainEl.eq(0) : m.ev = g, e.key ? (m.popupsCache[e.key] || (m.popupsCache[e.key] = {}), m.currTemplate = m.popupsCache[e.key]) : m.currTemplate = {}, m.st = c.extend(!0, {}, c.magnificPopup.defaults, e), m.fixedContentPos = "auto" === m.st.fixedContentPos ? !m.probablyMobile : m.st.fixedContentPos, m.st.modal && (m.st.closeOnContentClick = !1, m.st.closeOnBgClick = !1, m.st.showCloseBtn = !1, m.st.enableEscapeKey = !1), m.bgOverlay || (m.bgOverlay = p("bg").on("click" + b, function() {
                    m.close()
                }), m.wrap = p("wrap").attr("tabindex", -1).on("click" + b, function(e) {
                    m._checkIfClose(e.target) && m.close()
                }), m.container = p("container", m.wrap)), m.contentContainer = p("content"), m.st.preloader && (m.preloader = p("preloader", m.container, m.st.tLoading));
                var i = c.magnificPopup.modules;
                for (t = 0; t < i.length; t++) {
                    var o = i[t];
                    o = o.charAt(0).toUpperCase() + o.slice(1), m["init" + o].call(m)
                }
                d("BeforeOpen"), m.st.showCloseBtn && (m.st.closeBtnInside ? (f(y, function(e, t, n, r) {
                    n.close_replaceWith = h(r.type)
                }), v += " mfp-close-btn-in") : m.wrap.append(h())), m.st.alignTop && (v += " mfp-align-top"), m.fixedContentPos ? m.wrap.css({
                    overflow: m.st.overflowY,
                    overflowX: "hidden",
                    overflowY: m.st.overflowY
                }) : m.wrap.css({
                    top: C.scrollTop(),
                    position: "absolute"
                }), !1 !== m.st.fixedBgPos && ("auto" !== m.st.fixedBgPos || m.fixedContentPos) || m.bgOverlay.css({
                    height: g.height(),
                    position: "absolute"
                }), m.st.enableEscapeKey && g.on("keyup" + b, function(e) {
                    27 === e.keyCode && m.close()
                }), C.on("resize" + b, function() {
                    m.updateSize()
                }), m.st.closeOnContentClick || (v += " mfp-auto-cursor"), v && m.wrap.addClass(v);
                var a = m.wH = C.height(),
                    s = {};
                if (m.fixedContentPos && m._hasScrollBar(a)) {
                    var u = m._getScrollbarSize();
                    u && (s.marginRight = u)
                }
                m.fixedContentPos && (m.isIE7 ? c("body, html").css("overflow", "hidden") : s.overflow = "hidden");
                var l = m.st.mainClass;
                return m.isIE7 && (l += " mfp-ie7"), l && m._addClassToMFP(l), m.updateItemHTML(), d("BuildControls"), c("html").css(s), m.bgOverlay.add(m.wrap).prependTo(m.st.prependTo || c(document.body)), m._lastFocusedEl = document.activeElement, setTimeout(function() {
                    m.content ? (m._addClassToMFP(w), m._setFocus()) : m.bgOverlay.addClass(w), g.on("focusin" + b, m._onFocusIn)
                }, 16), m.isOpen = !0, m.updateSize(a), d(x), e
            }
            m.updateItemHTML()
        },
        close: function() {
            m.isOpen && (d(l), m.isOpen = !1, m.st.removalDelay && !m.isLowIE && m.supportsTransition ? (m._addClassToMFP(n), setTimeout(function() {
                m._close()
            }, m.st.removalDelay)) : m._close())
        },
        _close: function() {
            d(u);
            var e = n + " " + w + " ";
            if (m.bgOverlay.detach(), m.wrap.detach(), m.container.empty(), m.st.mainClass && (e += m.st.mainClass + " "), m._removeClassFromMFP(e), m.fixedContentPos) {
                var t = {
                    marginRight: ""
                };
                m.isIE7 ? c("body, html").css("overflow", "") : t.overflow = "", c("html").css(t)
            }
            g.off("keyup.mfp focusin" + b), m.ev.off(b), m.wrap.attr("class", "mfp-wrap").removeAttr("style"), m.bgOverlay.attr("class", "mfp-bg"), m.container.attr("class", "mfp-container"), !m.st.showCloseBtn || m.st.closeBtnInside && !0 !== m.currTemplate[m.currItem.type] || m.currTemplate.closeBtn && m.currTemplate.closeBtn.detach(), m.st.autoFocusLast && m._lastFocusedEl && c(m._lastFocusedEl).focus(), m.currItem = null, m.content = null, m.currTemplate = null, m.prevHeight = 0, d("AfterClose")
        },
        updateSize: function(e) {
            if (m.isIOS) {
                var t = document.documentElement.clientWidth / window.innerWidth,
                    n = window.innerHeight * t;
                m.wrap.css("height", n), m.wH = n
            } else m.wH = e || C.height();
            m.fixedContentPos || m.wrap.css("height", m.wH), d("Resize")
        },
        updateItemHTML: function() {
            var e = m.items[m.index];
            m.contentContainer.detach(), m.content && m.content.detach(), e.parsed || (e = m.parseEl(m.index));
            var t = e.type;
            if (d("BeforeChange", [m.currItem ? m.currItem.type : "", t]), m.currItem = e, !m.currTemplate[t]) {
                var n = !!m.st[t] && m.st[t].markup;
                d("FirstMarkupParse", n), m.currTemplate[t] = !n || c(n)
            }
            i && i !== e.type && m.container.removeClass("mfp-" + i + "-holder");
            var r = m["get" + t.charAt(0).toUpperCase() + t.slice(1)](e, m.currTemplate[t]);
            m.appendContent(r, t), e.preloaded = !0, d("Change", e), i = e.type, m.container.prepend(m.contentContainer), d("AfterChange")
        },
        appendContent: function(e, t) {
            (m.content = e) ? m.st.showCloseBtn && m.st.closeBtnInside && !0 === m.currTemplate[t] ? m.content.find(".mfp-close").length || m.content.append(h()) : m.content = e: m.content = "", d("BeforeAppend"), m.container.addClass("mfp-" + t + "-holder"), m.contentContainer.append(m.content)
        },
        parseEl: function(e) {
            var t, n = m.items[e];
            if ((n = n.tagName ? {
                    el: c(n)
                } : (t = n.type, {
                    data: n,
                    src: n.src
                })).el) {
                for (var r = m.types, i = 0; i < r.length; i++)
                    if (n.el.hasClass("mfp-" + r[i])) {
                        t = r[i];
                        break
                    } n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"))
            }
            return n.type = t || m.st.type || "inline", n.index = e, n.parsed = !0, m.items[e] = n, d("ElementParse", n), m.items[e]
        },
        addGroup: function(t, n) {
            function e(e) {
                e.mfpEl = this, m._openClick(e, t, n)
            }
            var r = "click.magnificPopup";
            (n = n || {}).mainEl = t, n.items ? (n.isObj = !0, t.off(r).on(r, e)) : (n.isObj = !1, n.delegate ? t.off(r).on(r, n.delegate, e) : (n.items = t).off(r).on(r, e))
        },
        _openClick: function(e, t, n) {
            if ((void 0 !== n.midClick ? n.midClick : c.magnificPopup.defaults.midClick) || !(2 === e.which || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
                var r = void 0 !== n.disableOn ? n.disableOn : c.magnificPopup.defaults.disableOn;
                if (r)
                    if (c.isFunction(r)) {
                        if (!r.call(m)) return !0
                    } else if (C.width() < r) return !0;
                e.type && (e.preventDefault(), m.isOpen && e.stopPropagation()), n.el = c(e.mfpEl), n.delegate && (n.items = t.find(n.delegate)), m.open(n)
            }
        },
        updateStatus: function(e, t) {
            if (m.preloader) {
                r !== e && m.container.removeClass("mfp-s-" + r), t || "loading" !== e || (t = m.st.tLoading);
                var n = {
                    status: e,
                    text: t
                };
                d("UpdateStatus", n), e = n.status, t = n.text, m.preloader.html(t), m.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }), m.container.addClass("mfp-s-" + e), r = e
            }
        },
        _checkIfClose: function(e) {
            if (!c(e).hasClass(a)) {
                var t = m.st.closeOnContentClick,
                    n = m.st.closeOnBgClick;
                if (t && n) return !0;
                if (!m.content || c(e).hasClass("mfp-close") || m.preloader && e === m.preloader[0]) return !0;
                if (e === m.content[0] || c.contains(m.content[0], e)) {
                    if (t) return !0
                } else if (n && c.contains(document, e)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            m.bgOverlay.addClass(e), m.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e), m.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (m.isIE7 ? g.height() : document.body.scrollHeight) > (e || C.height())
        },
        _setFocus: function() {
            (m.st.focus ? m.content.find(m.st.focus).eq(0) : m.wrap).focus()
        },
        _onFocusIn: function(e) {
            return e.target === m.wrap[0] || c.contains(m.wrap[0], e.target) ? void 0 : (m._setFocus(), !1)
        },
        _parseMarkup: function(i, e, t) {
            var o;
            t.data && (e = c.extend(t.data, e)), d(y, [i, e, t]), c.each(e, function(e, t) {
                if (void 0 === t || !1 === t) return !0;
                if (1 < (o = e.split("_")).length) {
                    var n = i.find(b + "-" + o[0]);
                    if (0 < n.length) {
                        var r = o[1];
                        "replaceWith" === r ? n[0] !== t[0] && n.replaceWith(t) : "img" === r ? n.is("img") ? n.attr("src", t) : n.replaceWith(c("<img>").attr("src", t).attr("class", n.attr("class"))) : n.attr(o[1], t)
                    }
                } else i.find(b + "-" + e).html(t)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === m.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), m.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return m.scrollbarSize
        }
    }, c.magnificPopup = {
        instance: null,
        proto: e.prototype,
        modules: [],
        open: function(e, t) {
            return o(), (e = e ? c.extend(!0, {}, e) : {}).isObj = !0, e.index = t || 0, this.instance.open(e)
        },
        close: function() {
            return c.magnificPopup.instance && c.magnificPopup.instance.close()
        },
        registerModule: function(e, t) {
            t.options && (c.magnificPopup.defaults[e] = t.options), c.extend(this.proto, t.proto), this.modules.push(e)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, c.fn.magnificPopup = function(e) {
        o();
        var t = c(this);
        if ("string" == typeof e)
            if ("open" === e) {
                var n, r = s ? t.data("magnificPopup") : t[0].magnificPopup,
                    i = parseInt(arguments[1], 10) || 0;
                n = r.items ? r.items[i] : (n = t, r.delegate && (n = n.find(r.delegate)), n.eq(i)), m._openClick({
                    mfpEl: n
                }, t, r)
            } else m.isOpen && m[e].apply(m, Array.prototype.slice.call(arguments, 1));
        else e = c.extend(!0, {}, e), s ? t.data("magnificPopup", e) : t[0].magnificPopup = e, m.addGroup(t, e);
        return t
    };

    function T() {
        S && (E.after(S.addClass(k)).detach(), S = null)
    }
    var k, E, S, A = "inline";
    c.magnificPopup.registerModule(A, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                m.types.push(A), f(u + "." + A, function() {
                    T()
                })
            },
            getInline: function(e, t) {
                if (T(), e.src) {
                    var n = m.st.inline,
                        r = c(e.src);
                    if (r.length) {
                        var i = r[0].parentNode;
                        i && i.tagName && (E || (k = n.hiddenClass, E = p(k), k = "mfp-" + k), S = r.after(E).detach().removeClass(k)), m.updateStatus("ready")
                    } else m.updateStatus("error", n.tNotFound), r = c("<div>");
                    return e.inlineElement = r
                }
                return m.updateStatus("ready"), m._parseMarkup(t, {}, e), t
            }
        }
    });

    function j() {
        D && c(document.body).removeClass(D)
    }

    function N() {
        j(), m.req && m.req.abort()
    }
    var D, I = "ajax";
    c.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                m.types.push(I), D = m.st.ajax.cursor, f(u + "." + I, N), f("BeforeChange." + I, N)
            },
            getAjax: function(i) {
                D && c(document.body).addClass(D), m.updateStatus("loading");
                var e = c.extend({
                    url: i.src,
                    success: function(e, t, n) {
                        var r = {
                            data: e,
                            xhr: n
                        };
                        d("ParseAjax", r), m.appendContent(c(r.data), I), i.finished = !0, j(), m._setFocus(), setTimeout(function() {
                            m.wrap.addClass(w)
                        }, 16), m.updateStatus("ready"), d("AjaxContentAdded")
                    },
                    error: function() {
                        j(), i.finished = i.loadError = !0, m.updateStatus("error", m.st.ajax.tError.replace("%url%", i.src))
                    }
                }, m.st.ajax.settings);
                return m.req = c.ajax(e), ""
            }
        }
    });
    var L;
    c.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var e = m.st.image,
                    t = ".image";
                m.types.push("image"), f(x + t, function() {
                    "image" === m.currItem.type && e.cursor && c(document.body).addClass(e.cursor)
                }), f(u + t, function() {
                    e.cursor && c(document.body).removeClass(e.cursor), C.off("resize" + b)
                }), f("Resize" + t, m.resizeImage), m.isLowIE && f("AfterChange", m.resizeImage)
            },
            resizeImage: function() {
                var e = m.currItem;
                if (e && e.img && m.st.image.verticalFit) {
                    var t = 0;
                    m.isLowIE && (t = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", m.wH - t)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0, L && clearInterval(L), e.isCheckingImgSize = !1, d("ImageHasSize", e), e.imgHidden && (m.content && m.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function(t) {
                var n = 0,
                    r = t.img[0],
                    i = function(e) {
                        L && clearInterval(L), L = setInterval(function() {
                            return 0 < r.naturalWidth ? void m._onImageHasSize(t) : (200 < n && clearInterval(L), void(3 === ++n ? i(10) : 40 === n ? i(50) : 100 === n && i(500)))
                        }, e)
                    };
                i(1)
            },
            getImage: function(e, t) {
                var n = 0,
                    r = function() {
                        e && (e.img[0].complete ? (e.img.off(".mfploader"), e === m.currItem && (m._onImageHasSize(e), m.updateStatus("ready")), e.hasSize = !0, e.loaded = !0, d("ImageLoadComplete")) : ++n < 200 ? setTimeout(r, 100) : i())
                    },
                    i = function() {
                        e && (e.img.off(".mfploader"), e === m.currItem && (m._onImageHasSize(e), m.updateStatus("error", o.tError.replace("%url%", e.src))), e.hasSize = !0, e.loaded = !0, e.loadError = !0)
                    },
                    o = m.st.image,
                    a = t.find(".mfp-img");
                if (a.length) {
                    var s = document.createElement("img");
                    s.className = "mfp-img", e.el && e.el.find("img").length && (s.alt = e.el.find("img").attr("alt")), e.img = c(s).on("load.mfploader", r).on("error.mfploader", i), s.src = e.src, a.is("img") && (e.img = e.img.clone()), 0 < (s = e.img[0]).naturalWidth ? e.hasSize = !0 : s.width || (e.hasSize = !1)
                }
                return m._parseMarkup(t, {
                    title: function(e) {
                        if (e.data && void 0 !== e.data.title) return e.data.title;
                        var t = m.st.image.titleSrc;
                        if (t) {
                            if (c.isFunction(t)) return t.call(m, e);
                            if (e.el) return e.el.attr(t) || ""
                        }
                        return ""
                    }(e),
                    img_replaceWith: e.img
                }, e), m.resizeImage(), e.hasSize ? (L && clearInterval(L), e.loadError ? (t.addClass("mfp-loading"), m.updateStatus("error", o.tError.replace("%url%", e.src))) : (t.removeClass("mfp-loading"), m.updateStatus("ready"))) : (m.updateStatus("loading"), e.loading = !0, e.hasSize || (e.imgHidden = !0, t.addClass("mfp-loading"), m.findImageSize(e))), t
            }
        }
    });
    var P;
    c.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, o = m.st.zoom,
                    t = ".zoom";
                if (o.enabled && m.supportsTransition) {
                    var n, r, i = o.duration,
                        a = function(e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                n = "all " + o.duration / 1e3 + "s " + o.easing,
                                r = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                i = "transition";
                            return r["-webkit-" + i] = r["-moz-" + i] = r["-o-" + i] = r[i] = n, t.css(r), t
                        },
                        s = function() {
                            m.content.css("visibility", "visible")
                        };
                    f("BuildControls" + t, function() {
                        if (m._allowZoom()) {
                            if (clearTimeout(n), m.content.css("visibility", "hidden"), !(e = m._getItemToZoom())) return void s();
                            (r = a(e)).css(m._getOffset()), m.wrap.append(r), n = setTimeout(function() {
                                r.css(m._getOffset(!0)), n = setTimeout(function() {
                                    s(), setTimeout(function() {
                                        r.remove(), e = r = null, d("ZoomAnimationEnded")
                                    }, 16)
                                }, i)
                            }, 16)
                        }
                    }), f(l + t, function() {
                        if (m._allowZoom()) {
                            if (clearTimeout(n), m.st.removalDelay = i, !e) {
                                if (!(e = m._getItemToZoom())) return;
                                r = a(e)
                            }
                            r.css(m._getOffset(!0)), m.wrap.append(r), m.content.css("visibility", "hidden"), setTimeout(function() {
                                r.css(m._getOffset())
                            }, 16)
                        }
                    }), f(u + t, function() {
                        m._allowZoom() && (s(), r && r.remove(), e = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === m.currItem.type
            },
            _getItemToZoom: function() {
                return !!m.currItem.hasSize && m.currItem.img
            },
            _getOffset: function(e) {
                var t, n = (t = e ? m.currItem.img : m.st.zoom.opener(m.currItem.el || m.currItem)).offset(),
                    r = parseInt(t.css("padding-top"), 10),
                    i = parseInt(t.css("padding-bottom"), 10);
                n.top -= c(window).scrollTop() - r;
                var o = {
                    width: t.width(),
                    height: (s ? t.innerHeight() : t[0].offsetHeight) - i - r
                };
                return void 0 === P && (P = void 0 !== document.createElement("p").style.MozTransform), P ? o["-moz-transform"] = o.transform = "translate(" + n.left + "px," + n.top + "px)" : (o.left = n.left, o.top = n.top), o
            }
        }
    });

    function O(e) {
        if (m.currTemplate[q]) {
            var t = m.currTemplate[q].find("iframe");
            t.length && (e || (t[0].src = "//about:blank"), m.isIE8 && t.css("display", e ? "block" : "none"))
        }
    }
    var q = "iframe";
    c.magnificPopup.registerModule(q, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                m.types.push(q), f("BeforeChange", function(e, t, n) {
                    t !== n && (t === q ? O() : n === q && O(!0))
                }), f(u + "." + q, function() {
                    O()
                })
            },
            getIframe: function(e, t) {
                var n = e.src,
                    r = m.st.iframe;
                c.each(r.patterns, function() {
                    return -1 < n.indexOf(this.index) ? (this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)), n = this.src.replace("%id%", n), !1) : void 0
                });
                var i = {};
                return r.srcAction && (i[r.srcAction] = n), m._parseMarkup(t, i, e), m.updateStatus("ready"), t
            }
        }
    });

    function H(e) {
        var t = m.items.length;
        return t - 1 < e ? e - t : e < 0 ? t + e : e
    }

    function M(e, t, n) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
    }
    c.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var o = m.st.gallery,
                    e = ".mfp-gallery";
                return m.direction = !0, !(!o || !o.enabled) && (v += " mfp-gallery", f(x + e, function() {
                    o.navigateByImgClick && m.wrap.on("click" + e, ".mfp-img", function() {
                        return 1 < m.items.length ? (m.next(), !1) : void 0
                    }), g.on("keydown" + e, function(e) {
                        37 === e.keyCode ? m.prev() : 39 === e.keyCode && m.next()
                    })
                }), f("UpdateStatus" + e, function(e, t) {
                    t.text && (t.text = M(t.text, m.currItem.index, m.items.length))
                }), f(y + e, function(e, t, n, r) {
                    var i = m.items.length;
                    n.counter = 1 < i ? M(o.tCounter, r.index, i) : ""
                }), f("BuildControls" + e, function() {
                    if (1 < m.items.length && o.arrows && !m.arrowLeft) {
                        var e = o.arrowMarkup,
                            t = m.arrowLeft = c(e.replace(/%title%/gi, o.tPrev).replace(/%dir%/gi, "left")).addClass(a),
                            n = m.arrowRight = c(e.replace(/%title%/gi, o.tNext).replace(/%dir%/gi, "right")).addClass(a);
                        t.click(function() {
                            m.prev()
                        }), n.click(function() {
                            m.next()
                        }), m.container.append(t.add(n))
                    }
                }), f("Change" + e, function() {
                    m._preloadTimeout && clearTimeout(m._preloadTimeout), m._preloadTimeout = setTimeout(function() {
                        m.preloadNearbyImages(), m._preloadTimeout = null
                    }, 16)
                }), void f(u + e, function() {
                    g.off(e), m.wrap.off("click" + e), m.arrowRight = m.arrowLeft = null
                }))
            },
            next: function() {
                m.direction = !0, m.index = H(m.index + 1), m.updateItemHTML()
            },
            prev: function() {
                m.direction = !1, m.index = H(m.index - 1), m.updateItemHTML()
            },
            goTo: function(e) {
                m.direction = e >= m.index, m.index = e, m.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, t = m.st.gallery.preload,
                    n = Math.min(t[0], m.items.length),
                    r = Math.min(t[1], m.items.length);
                for (e = 1; e <= (m.direction ? r : n); e++) m._preloadItem(m.index + e);
                for (e = 1; e <= (m.direction ? n : r); e++) m._preloadItem(m.index - e)
            },
            _preloadItem: function(e) {
                if (e = H(e), !m.items[e].preloaded) {
                    var t = m.items[e];
                    t.parsed || (t = m.parseEl(e)), d("LazyLoad", t), "image" === t.type && (t.img = c('<img class="mfp-img" />').on("load.mfploader", function() {
                        t.hasSize = !0
                    }).on("error.mfploader", function() {
                        t.hasSize = !0, t.loadError = !0, d("LazyLoadError", t)
                    }).attr("src", t.src)), t.preloaded = !0
                }
            }
        }
    });
    var _ = "retina";
    c.magnificPopup.registerModule(_, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (1 < window.devicePixelRatio) {
                    var n = m.st.retina,
                        r = n.ratio;
                    1 < (r = isNaN(r) ? r() : r) && (f("ImageHasSize." + _, function(e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / r,
                            width: "100%"
                        })
                    }), f("ElementParse." + _, function(e, t) {
                        t.src = n.replaceSrc(t, r)
                    }))
                }
            }
        }
    }), o()
}), $(document).ready(function() {
    $("a").on("click", function(e) {
        if ("" !== this.hash) {
            e.preventDefault();
            var t = this.hash;
            $("html, body").animate({
                scrollTop: $(t).offset().top
            }, 800, function() {
                window.location.hash = t
            })
        }
    })
}), $(".photo a").magnificPopup({
    type: "image",
    gallery: {
        enabled: !0,
        preload: [0, 2]
    },
    mainClass: "mfp-fade"
}), $.fn.extend({
    toggleText: function(e, t) {
        return this.text(this.text() == t ? e : t)
    }
}), $(".email").click(function() {
    $(this).toggleText("Email", "tulio.vasconcelos1@gmail.com")
}), $(".note__title").click(function() {
    $(this).siblings(".note__body").toggle()
}), $("button.control").click(function() {
    var e = $(this).next().get(0);
    $("button.control").text("Play"), $("audio").each(function() {
        $(this).get(0).pause()
    }), 0 < e.currentTime ? ($(this).text("Play"), e.currentTime = 0, e.pause()) : ($(this).text("Pause"), e.currentTime = 0, e.play())
});