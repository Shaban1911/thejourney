/*
 * tagContainer Generator v93.0
 * Copyright Commanders Act
 * https://www.commandersact.com/fr/
 * Generated: 2024-06-05 15:52:03 Europe/Paris
 * ---
 * Version	: 147.00
 * IDTC 	: 22
 * IDS		: 5181
 */
/*!compressed by terser*/
"undefined" == typeof tC && (void 0 !== document.domain && void 0 !== document.referrer || (document = window.document),
function(t, e) {
    var n, i = t.document, a = (t.location,
    t.navigator,
    t.tC,
    t.$,
    Array.prototype.push,
    Array.prototype.slice,
    Array.prototype.indexOf,
    Object.prototype.toString), r = (Object.prototype.hasOwnProperty,
    String.prototype.trim,
    function(t, e) {
        return new r.fn.init(t,e,n)
    }
    ), o = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, c = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, s = {};
    r.fn = r.prototype = {
        constructor: r,
        init: function(t, e, n) {
            var a, s, d;
            if (!t)
                return this;
            if (t.nodeType)
                return this.context = this[0] = t,
                this.length = 1,
                this;
            if ("string" == typeof t) {
                if (!(a = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : o.exec(t)) || !a[1] && e)
                    return !e || e.tC ? (e || n).find(t) : this.constructor(e).find(t);
                if (a[1])
                    return d = (e = e instanceof r ? e[0] : e) && e.nodeType ? e.ownerDocument || e : i,
                    t = r.parseHTML(a[1], d, !0),
                    c.test(a[1]) && r.isPlainObject(e) && this.attr.call(t, e, !0),
                    r.merge(this, t);
                if ((s = i.getElementById(a[2])) && s.parentNode) {
                    if (s.id !== a[2])
                        return n.find(t);
                    this.length = 1,
                    this[0] = s
                }
                return this.context = i,
                this.selector = t,
                this
            }
            return r.isFunction(t) ? n.ready(t) : (undefined !== t.selector && (this.selector = t.selector,
            this.context = t.context),
            r.makeArray(t, this))
        },
        each: function(t, e) {
            return r.each(this, t, e)
        },
        ready: function(t) {
            return r.ready.promise(t),
            this
        }
    },
    r.fn.init.prototype = r.fn,
    r.extend = r.fn.extend = function() {
        var t, e, n, i, a, o, c = arguments[0] || {}, s = 1, d = arguments.length, C = !1;
        for ("boolean" == typeof c && (C = c,
        c = arguments[1] || {},
        s = 2),
        "object" == typeof c || r.isFunction(c) || (c = {}),
        d === s && (c = this,
        --s); s < d; s++)
            if (null != (t = arguments[s]))
                for (e in t)
                    n = c[e],
                    c !== (i = t[e]) && (C && i && (r.isPlainObject(i) || (a = r.isArray(i))) ? (a ? (a = !1,
                    o = n && r.isArray(n) ? n : []) : o = n && r.isPlainObject(n) ? n : {},
                    c[e] = r.extend(C, o, i)) : undefined !== i && (c[e] = i));
        return c
    }
    ,
    r.extend({
        ssl: "https://manager.",
        randOrd: function() {
            return Math.round(Math.random()) - .5
        },
        nodeNames: "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        rnocache: /<(?:script|object|embed|option|style)/i,
        rnoshimcache: new RegExp("<(?:" + r.nodeNames + ")[\\s/>]","i"),
        rchecked: /checked\s*(?:[^=]|=\s*.checked.)/i,
        containersLaunched: {}
    }),
    r.extend({
        inArray: function(t, e, n) {
            var i, a = Array.prototype.indexOf;
            if (e) {
                if (a)
                    return a.call(e, t, n);
                for (i = e.length,
                n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                    if (n in e && e[n] === t)
                        return n
            }
            return -1
        },
        isFunction: function(t) {
            return "function" === r.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === r.type(t)
        }
        ,
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        },
        type: function(t) {
            return null == t ? String(t) : s[a.call(t)] || "object"
        },
        each: function(t, e, n) {
            var i, a = 0, o = t.length, c = undefined === o || r.isFunction(t);
            if (n)
                if (c) {
                    for (i in t)
                        if (!1 === e.apply(t[i], n))
                            break
                } else
                    for (; a < o && !1 !== e.apply(t[a++], n); )
                        ;
            else if (c) {
                for (i in t)
                    if (!1 === e.call(t[i], i, t[i]))
                        break
            } else
                for (; a < o && !1 !== e.call(t[a], a, t[a++]); )
                    ;
            return t
        },
        log: function(t, e) {
            try {
                r.getCookie("tCdebugLib") && console && console[e || "log"](t)
            } catch (t) {}
        }
    }),
    r.each("Boolean Number String Function Array Date RegExp Object".split(" "), (function(t, e) {
        s["[object " + e + "]"] = e.toLowerCase()
    }
    )),
    n = r(i);
    r.buildFragment = function(t, e, n) {
        var a, o, c, s = t[0];
        return e = (e = !(e = e || i).nodeType && e[0] || e).ownerDocument || e,
        !(1 === t.length && "string" == typeof s && s.length < 512 && e === i && "<" === s.charAt(0)) || r.rnocache.test(s) || !r.support.checkClone && r.rchecked.test(s) || !r.support.html5Clone && r.rnoshimcache.test(s) || (o = !0,
        c = undefined !== (a = jQuery.fragments[s])),
        a || (a = e.createDocumentFragment(),
        r.clean(t, e, a, n),
        o && (r.fragments[s] = c && a)),
        {
            fragment: a,
            cacheable: o
        }
    }
    ,
    t.tC = r
}(window)),
function() {
    if (!tC.maindomain) {
        var t = location.hostname
          , e = t.split(".");
        e.length < 2 || t.match("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$") ? tC.maindomain = t : tC.maindomain = e[e.length - 2] + "." + e[e.length - 1]
    }
    var n = {
        id_container: String(22),
        id_site: String(5181),
        frequency: String(550),
        containerVersion: String(147),
        generatorVersion: String("93.0"),
        containerStart: Date.now(),
        sourceKey: String("bbe89b85-1491-4428-8718-5890de2df31a")
    };
    tC.extend({
        internalvars: void 0 !== tC.internalvars ? tC.internalvars : {},
        internalFunctions: void 0 !== tC.internalFunctions ? tC.internalFunctions : {},
        privacyVersion: tC.privacyVersion || "",
        id_container: n.id_container,
        id_site: n.id_site,
        containerVersion: n.containerVersion,
        generatorVersion: n.generatorVersion,
        dedup_done: void 0 !== tC.dedup_done && tC.dedup_done,
        containerStart: tC.containerStart || n.containerStart,
        config: tC.config || {}
    });
    var i, a, r = {};
    r["internalvars_" + n.id_site] = void 0 !== tC["internalvars_" + n.id_site] ? tC["internalvars_" + n.id_site] : {},
    tC.extend(r),
    window["tC_" + n.id_site + "_" + n.id_container] = n,
    tC.extend({
        launchTag: function(t, e, n, i, a, r) {
            void 0 === r && (r = 0),
            tC.array_launched_tags.push(e),
            tC.array_launched_tags_keys.push(t),
            tC.containersLaunched[i][a].t.push({
                id: t,
                label: e,
                idTpl: n
            }),
            window.top.postMessage('TC.EX:{"id":"' + t + '","idc":"' + a + '","idt":"' + n + '","ids":"' + i + '","lb":"' + e.replace(/"/g, '\\"') + '","idtr":"' + r + '"}', "*")
        }
    }),
    void 0 === tC.containersLaunched && (tC.containersLaunched = {}),
    void 0 === tC.containersLaunched[n.id_site] && (tC.containersLaunched[n.id_site] = {}),
    tC.containersLaunched[n.id_site][n.id_container] = {
        v: n.containerVersion,
        t: [],
        g: n.generatorVersion
    },
    tC.coreReadyStandalone = !0,
    tC.isDOMReady && (tC.coreReadyStandalone = !1),
    tC.domReady = tC.domReady || !1,
    tC.isDOMReady = tC.isDOMReady || function() {
        if ("complete" === document.readyState || "loaded" === document.readyState)
            return !0;
        if ("interactive" !== document.readyState)
            return !1;
        if (!document.documentElement.doScroll)
            return !0;
        try {
            return document.documentElement.doScroll("left"),
            !0
        } catch (t) {
            return !1
        }
    }
    ,
    tC.waitingOnDomReadyCallBacks = tC.waitingOnDomReadyCallBacks || [],
    tC.excuteOnDomReadyCallBacks = tC.excuteOnDomReadyCallBacks || function() {
        for (var t = 0; t < tC.waitingOnDomReadyCallBacks.length; t++)
            tC.waitingOnDomReadyCallBacks[t]();
        tC.waitingOnDomReadyCallBacks = []
    }
    ,
    tC.onDomReady = tC.onDomReady || function(t) {
        if (this.domReady)
            t();
        else {
            tC.waitingOnDomReadyCallBacks.push(t);
            var e = !1;
            document.addEventListener ? (e = !0,
            document.addEventListener("DOMContentLoaded", (function() {
                document.removeEventListener("DOMContentLoaded", arguments.callee, !1),
                tC.excuteOnDomReadyCallBacks()
            }
            ), !1)) : document.attachEvent && (e = !0,
            document.attachEvent("onreadystatechange", (function() {
                "complete" === document.readyState && (document.detachEvent("onreadystatechange", arguments.callee),
                tC.excuteOnDomReadyCallBacks())
            }
            )),
            document.documentElement.doScroll && window === window.top && function() {
                if (!tC.domReady) {
                    try {
                        document.documentElement.doScroll("left")
                    } catch (t) {
                        return void setTimeout(arguments.callee, 0)
                    }
                    tC.excuteOnDomReadyCallBacks()
                }
            }()),
            e || (window.onload = tC.excuteOnDomReadyCallBacks)
        }
    }
    ,
    !0 === tC.coreReadyStandalone && (tC.isDOMReady() ? tC.domReady = !0 : tC.onDomReady((function() {
        tC.domReady = !0
    }
    ))),
    function() {
        "use strict";
        tC.cactUtils = {};
        var t = function() {};
        tC.cactUtils.formatArgumentsV2 = function(e) {
            var n = {}
              , i = 0;
            return "string" == typeof e[i] && (n.event = e[i++]),
            "object" == typeof e[i] && (n.properties = Object.assign({}, e[i++])),
            "object" == typeof e[i] && (n.config = Object.assign({}, e[i++])),
            "function" == typeof e[i] && (n.callback = e[i++]),
            n.properties = n.properties || {},
            n.config = n.config || {},
            n.callback = n.callback || t,
            n
        }
    }(),
    function() {
        "use strict";
        var t = window.tC;
        if (!(null == t || t.cact && t.cactInfo && t.cactInfo.apiVersion >= 2)) {
            window.caReady = window.caReady || [],
            window.cact = window.cact || function() {
                window.caReady.push(arguments)
            }
            ,
            t.cact && (window.caReady = window.caReady.map((function(t) {
                if (function(t) {
                    return "[object Arguments]" === t.toString() || Array.isArray(t)
                }(t))
                    return t;
                var e, n = JSON.parse(JSON.stringify(t)), i = n._done;
                return delete n.event,
                delete n.callback,
                delete n._done,
                e = 0 !== Object.keys(n).length ? [t.event, n, t.callback] : [t.event, t.callback],
                i && (e._tc_meta = {
                    done: i
                }),
                e
            }
            ))),
            t.cact = t.cact || {},
            t.cactInfo = {
                apiVersion: 2
            };
            var e = function(e) {
                e._tc_meta = e._tc_meta || {};
                var n = e[0];
                if (!e._tc_meta.done && null != t.cact[n]) {
                    e._tc_meta = e._tc_meta || {},
                    e._tc_meta.done = !0;
                    var a = t.cact[n]._tc_version;
                    if (e = Array.prototype.slice.call(e, null == a ? 0 : 1),
                    null == a) {
                        var r = i(e);
                        t.cact[n](r, r.callback)
                    } else
                        t.cact[n].apply(t.cact, e)
                }
            }
              , n = function() {}
              , i = function(t) {
                var e, i;
                return "object" == typeof t[1] ? (e = t[1],
                i = t[2]) : "function" == typeof t[1] ? (e = {},
                i = t[1]) : e = {},
                e.event = t[0],
                e.callback = i || n,
                e
            };
            t.cact.exec = function() {
                for (var n = 0; n < window.caReady.length; ++n)
                    e(window.caReady[n]);
                var i = t.cactUtils.formatArgumentsV2(arguments);
                i && i.callback && i.callback()
            }
            ;
            Object.defineProperty(window.caReady, "push", {
                configurable: !0,
                value: function(t) {
                    Array.prototype.push.call(window.caReady, t),
                    e(t)
                }
            }),
            t.cact.exec()
        }
    }(),
    function() {
        "use strict";
        tC.config = tC.config || {},
        tC.cact.config = function() {
            var t = tC.cactUtils.formatArgumentsV2(arguments)
              , e = t.callback;
            Object.assign(tC.config, t.properties),
            e()
        }
        ,
        tC.cact.config._tc_version = 2
    }(),
    function() {
        "use strict";
        tC.cact.trigger = function() {
            var t = tC.cactUtils.formatArgumentsV2(arguments)
              , e = t.event
              , n = t.properties
              , i = t.config
              , a = t.callback;
            if ("string" == typeof e && "" !== e)
                return tC.trigger && tC.trigger({
                    event: e,
                    properties: n,
                    config: i
                }),
                a(),
                tC.uniqueEventIndex
        }
        ,
        tC.cact.trigger._tc_version = 2,
        tC.cact.dispatchEvent = function() {
            var t = tC.cactUtils.formatArgumentsV2(arguments)
              , e = t.event
              , n = t.callback;
            tC.eventTarget.dispatchEvent(e),
            n()
        }
        ,
        tC.cact.dispatchEvent._tc_version = 2,
        tC.cact.addEventListener = function() {
            var t = tC.cactUtils.formatArgumentsV2(arguments)
              , e = t.event
              , n = t.callback;
            return tC.eventTarget.addEventListener(e, n)
        }
        ,
        tC.cact.addEventListener._tc_version = 2,
        tC.cact.once = function() {
            var t = tC.cactUtils.formatArgumentsV2(arguments)
              , e = t.event
              , n = t.callback;
            return tC.eventTarget.once(e, n)
        }
        ,
        tC.cact.once._tc_version = 2,
        tC.cact.removeEventListener = function() {
            var t = tC.cactUtils.formatArgumentsV2(arguments)
              , e = t.event
              , n = t.callback;
            return tC.eventTarget.removeEventListener(e, n)
        }
        ,
        tC.cact.removeEventListener._tc_version = 2
    }(),
    tC.extend({
        isCurrentVersion: function() {
            if (!0 === Boolean(tC.bypassBookmarklet))
                return !0;
            var t = tC.getCookie("tc_mode_test");
            return "1" !== t || "1" === t && !1
        }
    }),
    tC.pixelTrack = tC.pixelTrack || {
        add: function(t, e) {
            t = t || 0,
            e = e || "img",
            tC.onDomReady((function() {
                var n;
                "iframe" === e ? ((n = document.createElement(e)).src = t,
                n.width = 1,
                n.height = 1,
                n.style.display = "none",
                document.body.appendChild(n)) : (n = new Image).src = t
            }
            ))
        }
    },
    tC.setCookie = tC.setCookie || function(t, e, n, i, a, r, o) {
        a || (a = tC.domain()),
        tC.config = tC.config || {},
        tC.cookieForceSameSite = tC.cookieForceSameSite || "",
        o = o || tC.config.cookieForceSameSite || tC.cookieForceSameSite,
        tC.isSameSiteContext() || (o = "None"),
        o || (o = tC.isSubdomain(a) ? "Lax" : "None"),
        tC.cookieForceSecure = null != tC.cookieForceSecure ? tC.cookieForceSecure : "",
        null == r && (r = tC.config.cookieForceSecure),
        null == r && (r = tC.cookieForceSecure),
        r = Boolean(Number(r)),
        "none" === o.toLowerCase() && (r = !0);
        var c = new Date;
        c.setTime(c.getTime()),
        n && (n = 1e3 * n * 60 * 60 * 24);
        var s = new Date(c.getTime() + n)
          , d = t + "=" + tC.cookieEncode(e) + (n ? ";expires=" + s.toGMTString() : "") + (i ? ";path=" + i : ";path=/") + (a ? ";domain=" + a : "") + (r ? ";secure" : "") + ";SameSite=" + o;
        document.cookie = d
    }
    ,
    tC.cookieEncode = tC.cookieEncode || function(t) {
        var e = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E"
        };
        return encodeURIComponent(t).replace(/[!~'()]/g, (function(t) {
            return e[t]
        }
        ))
    }
    ,
    tC.getCookie = tC.getCookie || function(t) {
        if (null == t)
            return "";
        var e = "@$".split("").some((function(e) {
            return -1 !== t.indexOf(e)
        }
        ));
        t = e ? t.replace("$", "\\$") : encodeURIComponent(t);
        var n = new RegExp("(?:^|; )" + t + "=([^;]*)").exec(document.cookie);
        if (n) {
            var i = "";
            try {
                i = decodeURIComponent(n[1])
            } catch (t) {
                i = unescape(n[1])
            }
            return i
        }
        return ""
    }
    ,
    tC.cookieCheck = function(t) {
        var e, n = (t = t || {}).domain ? ";domain=" + t.domain : "", i = t.samesite ? ";samesite=" + t.samesite : "", a = Math.random().toString(36).substr(2, 9), r = "tc_test_cookie=" + a + ";expires=0;path=/;" + i + n;
        document.cookie = r;
        var o = new RegExp("(?:^|; )tc_test_cookie=([^;]*)").exec(document.cookie);
        return o && (o = o[1]),
        (e = o === a) && (r = "tc_test_cookie=;expires=" + new Date(0).toUTCString() + ";path=/;" + i + n,
        document.cookie = r),
        e
    }
    ,
    tC._samesite = tC._samesite || null,
    tC.isSameSiteContext = tC.isSameSiteContext || function() {
        return null != tC._samesite || (tC.isCrossDomainContext() ? tC._samesite = !1 : tC._samesite = tC.cookieCheck({
            samesite: "lax"
        })),
        tC._samesite
    }
    ,
    tC.isCookieEnabled = function() {
        return !(!navigator.cookieEnabled || -1 !== window.navigator.userAgent.indexOf("MSIE")) || tC.cookieCheck()
    }
    ,
    tC.removeCookie = tC.removeCookie || function(t, e) {
        this.setCookie(t, "", -1, "/", e)
    }
    ,
    tC._domain = tC._domain || null,
    tC.domain = tC.domain || function() {
        if (null != tC._domain)
            return tC._domain;
        var t = (tC.tc_hdoc.domain || "").toLowerCase().split(".")
          , e = t.length;
        if (0 === e)
            return "";
        for (var n, i = !1, a = 2; !i && a <= e; ++a)
            n = "." + t.slice(e - a, e).join("."),
            i = tC.cookieCheck({
                domain: n
            });
        return tC._domain = n || "",
        tC._domain
    }
    ,
    tC.getDomainLevels = tC.getDomainLevels || function() {
        var t = (tC.tc_hdoc.domain || "").toLowerCase().split(".")
          , e = t.map((function(e, n) {
            return "." + t.slice(n).join(".")
        }
        ));
        return e.pop(),
        e.reverse(),
        e
    }
    ,
    tC.isSubdomain = tC.isSubdomain || function(t) {
        return t && "." === t[0] && (t = t.substr(1, t.length - 1)),
        new RegExp(t + "$").test(tC.tc_hdoc.domain)
    }
    ,
    tC.isCrossDomainContext = tC.isCrossDomainContext || function() {
        try {
            return window.top.document,
            !1
        } catch (t) {
            return !0
        }
    }
    ,
    tC.tc_hdoc = tC.tc_hdoc || !1,
    tC.tc_hdoc || (tC.tc_hdoc = tC.isCrossDomainContext() ? window.document : window.top.document),
    function() {
        tC.getCdnDomainList = tC.getCdnDomainList || function() {
            return [] || []
        }
        ,
        tC.getClientDnsList = tC.getClientDnsList || function() {
            return [] || []
        }
        ;
        var t = function(t, e) {
            return function() {
                var n = t();
                if (n)
                    return n;
                var i = tC.getDomainLevels().map((function(t) {
                    return new RegExp("^[\\w,\\d,\\-]*" + t.replace(".", "\\.") + "$")
                }
                ));
                return e().find((function(t) {
                    return i.find((function(e) {
                        return e.test(t)
                    }
                    ))
                }
                ))
            }
        };
        tC.getCachedClientCollectDns = function() {
            return tC.clientCollectDns
        }
        ,
        tC.getCachedClientCdnDomain = function() {
            return tC.clientCdnDomain
        }
        ,
        tC.getClientCollectDns = t(tC.getCachedClientCollectDns, tC.getClientDnsList),
        tC.clientCollectDns = tC.getClientCollectDns(),
        tC.getClientCdnDomain = t(tC.getCachedClientCdnDomain, tC.getCdnDomainList),
        tC.clientCdnDomain = tC.getClientCdnDomain(),
        tC.clientCampaignDns = tC.clientCampaignDns || "redirect1411.tagcommander.com",
        tC.getClientCampaignDns = function() {
            return tC.clientCampaignDns
        }
        ,
        tC.isTcDns = function(t) {
            return "" !== (t = t || "") && (-1 !== t.indexOf(".commander1.com") || -1 !== t.indexOf(".tagcommander.com"))
        }
        ,
        tC.isCustomDns = function(t) {
            return "" !== (t = t || "") && !tC.isTcDns(t)
        }
        ,
        tC.campaignForceCookieFirst = 0,
        tC.getCdnDomain = function() {
            return window.tc_cdn_domain || tC.clientCdnDomain || "cdn.trustcommander.net"
        }
    }(),
    function() {
        "use strict";
        var t = window.tC;
        t.eventTarget = t.eventTarget || {
            _eventTarget: document.createElement("null"),
            addEventListener: function(t, e, n) {
                this._eventTarget.addEventListener(t, e, n)
            },
            once: function(t, e, n) {
                this.addEventListener(t, e, Object.assign({}, n, {
                    once: !0
                }))
            },
            removeEventListener: function(t, e) {
                this._eventTarget.removeEventListener(t, e)
            },
            dispatchEvent: function(e, n) {
                var i;
                if (n = n || {},
                "string" != typeof e ? i = e : (i = document.createEvent("Event")).initEvent(e, !0, !0),
                "*" !== i.type) {
                    var a = n.eventData;
                    null != a && "object" == typeof a || (a = {}),
                    i.eventData = a,
                    this._eventTarget.dispatchEvent(i);
                    var r = document.createEvent("Event");
                    if (r.originalEvent = i,
                    r.initEvent("*", !0, !0),
                    this._eventTarget.dispatchEvent(r),
                    !1 === Boolean(n.skipTrigger)) {
                        var o = n.tagTrigger;
                        null == o && (o = i.type.replace(/-/g, "_")),
                        null != o && null != t.event && "function" == typeof t.event[o] && t.event[o]()
                    }
                }
            },
            dispatchEventAsync: function(e, n) {
                var i = 0;
                (n = Object.assign({}, n)).delay > 0 && (i = Number(n.delay),
                delete n.delay),
                setTimeout((function() {
                    t.eventTarget.dispatchEvent(e, n)
                }
                ), i)
            }
        }
    }(),
    tC.xhr = tC.xhr || function(t) {
        var e = new XMLHttpRequest;
        if (!e)
            return !1;
        e.open(t.method || "GET", t.url),
        t.withCredentials && (e.withCredentials = !0);
        var n = t.data;
        if (!0 === t.json && (e.setRequestHeader("Content-Type", "application/json"),
        "string" != typeof n))
            try {
                n = JSON.stringify(n)
            } catch (t) {
                n = "null"
            }
        t.headers && Object.keys(t.headers).forEach((function(n) {
            e.setRequestHeader(n, t.headers[n])
        }
        ));
        var i = function() {
            if (e.readyState === XMLHttpRequest.DONE) {
                var n = t[e.status >= 200 && e.status < 300 ? "done" : "fail"];
                if (n) {
                    var i = e.response;
                    if (!0 === t.json)
                        try {
                            i = JSON.parse(i)
                        } catch (t) {}
                    n(i, e.status)
                }
            }
        };
        e.onload = i,
        e.onerror = i,
        e.send(n)
    }
    ,
    function() {
        "use strict";
        tC.getCrossDomainCookie = tC.getCrossDomainCookie || function(t, e) {
            e = e || function() {}
            ;
            var n = t.siteId
              , i = t.name
              , a = t.domain;
            tC.xhr({
                url: "https://" + a + "/get-cookie?tc_s=" + n + "&name=" + i,
                withCredentials: !0,
                json: !0,
                done: function(t) {
                    var n = "";
                    try {
                        n = t[i] || ""
                    } catch (t) {}
                    e(n)
                },
                fail: function(t) {
                    tC.log && tC.log("error occured retrieving cookie " + i, t),
                    e("")
                }
            })
        }
    }(),
    function() {
        "use strict";
        var t = {
            "cookie-serverside": {
                path: "css",
                serverId: "phoenix",
                defaultDomain: "collect.commander1.com",
                siteQueryArg: "tc_s",
                caidSync: !1
            },
            dms: {
                path: "dms",
                serverId: "data",
                defaultDomain: "engage.commander1.com",
                siteQueryArg: "tc_s"
            },
            events: {
                path: "events",
                serverId: "cdp",
                defaultDomain: "collect.commander1.com",
                siteQueryArg: "tc_s"
            },
            "measure-click-and-visit": {
                path: "cs3",
                serverId: "mix",
                defaultDomain: tC.clientCampaignDns || "mix.commander1.com",
                siteQueryArg: "tcs"
            },
            "measure-visit": {
                path: "s3",
                serverId: "mix",
                defaultDomain: tC.clientCampaignDns || "mix.commander1.com",
                siteQueryArg: "tcs"
            },
            "privacy-consent": {
                path: "privacy-consent",
                serverId: "trust",
                defaultDomain: "privacy.commander1.com",
                cookielessDomains: ["privacy.trustcommander.net"],
                siteQueryArg: "site"
            }
        }
          , e = function() {
            var t = new Date;
            return t.getFullYear() + ("0" + (t.getMonth() + 1)).slice(-2) + ("0" + t.getDate()).slice(-2) + ("0" + t.getHours()).slice(-2) + ("0" + t.getMinutes()).slice(-2) + ("0" + t.getSeconds()).slice(-2) + Math.floor(12345678942 * Math.random() + 1)
        }
          , n = function(t, e) {
            var n = !1;
            "function" != typeof navigator.sendBeacon ? n = !0 : navigator.sendBeacon(t, e) || (n = !0),
            n && tC.xhr({
                method: "POST",
                json: !0,
                url: t,
                data: e,
                withCredentials: !0
            })
        };
        tC.track = tC.track || function(i) {
            var a = (i = i || {}).siteId || tC.config.siteId || tC.id_site
              , r = t[i.route];
            if (null == r)
                return null;
            var o = {};
            r.siteQueryArg && a && (o[r.siteQueryArg] = a),
            Object.assign(o, i.queryParams);
            var c = Object.keys(o).reduce((function(t, e) {
                var n = o[e];
                return t.push(e + "=" + n),
                t
            }
            ), []);
            (c = c.join("&")) && (c = "?" + c);
            var s = JSON.stringify(i.body || {})
              , d = r.defaultDomain
              , C = i.domain || window.tC_collect_dns || tC.config.collectionDomain || d;
            "/" === (C = C.split("://").slice(-1)[0])[C.length - 1] && (C = C.slice(0, -1));
            var u = C !== d
              , p = (r.cookielessDomains || []).includes(C)
              , v = "https://" + C + (u && !p ? "/" + r.serverId : "") + "/" + r.path + c
              , g = tC.getCookie("CAID")
              , l = !1 !== r.caidSync;
            if (l && (l = null != tC.config.caidSync ? tC.config.caidSync : l,
            l = null != i.caidSync ? i.caidSync : l),
            u && !p && !g)
                if (l)
                    tC.getCrossDomainCookie({
                        name: "TCID",
                        siteId: a,
                        domain: d
                    }, (function(t) {
                        var i = t;
                        i || (i = e()),
                        tC.setCookie("CAID", i),
                        n(v, s)
                    }
                    ));
                else {
                    var y = e();
                    tC.setCookie("CAID", y),
                    n(v, s)
                }
            else
                n(v, s)
        }
    }(),
    function() {
        "use strict";
        tC.uniqueEventIndex = tC.uniqueEventIndex || 0,
        tC.triggeredEvents = tC.triggeredEvents || [],
        tC.config = tC.config || {};
        tC.config.collectionDomain = tC.config.collectionDomain || tC.clientCollectDns;
        var t = /[a-z0-9-.+_-]+@[a-z0-9-]+(\.[a-z0-9-]+)*/i
          , e = /(user|mail|pass(word|phrase)?|secret|((first|last)name))/i
          , n = function(e) {
            return (e || "").replace(t, "*****")
        };
        tC.generateEventId = function() {
            for (var t = String(Date.now()).slice(2) + Math.round(1e13 * Math.random()); t.length < 24; )
                t += "0";
            return t
        }
        ,
        tC.trigger = function(i) {
            var a = i.event
              , r = i.properties || {}
              , o = i.config || {}
              , c = r.url || function(i) {
                try {
                    var a = new URL(i);
                    return a.pathname = n(a.pathname),
                    a.searchParams.forEach((function(i, r) {
                        return t.test(i) ? a.searchParams.set(r, n(i)) : e.test(r) ? a.searchParams.set(r, "*****") : void 0
                    }
                    )),
                    a.toString()
                } catch (t) {
                    return i
                }
            }(window.location.href);
            tC.uniqueEventIndex++,
            tC.uniqueEventId = tC.generateEventId();
            var s, d = {}, C = o.sourceKey || tC.config.sourceKey || "bbe89b85-1491-4428-8718-5890de2df31a";
            if (C && (d.token = C),
            r.user = r.user || {},
            !r.user.consent_categories) {
                var u = [];
                "privacy"in tC && (u = "getValidCategories"in tC.privacy ? tC.privacy.getValidCategories() : tC.privacy.getOptinCategories());
                var p = tC.getCookie(tC.privacy && tC.privacy.getCN() || "TC_PRIVACY");
                /ALL/.test(p) && (u = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]),
                r.user.consent_categories = u
            }
            if (!r.user.rejected_vendors) {
                var v = [];
                tC.privacy && (tC.privacy.checkOptoutAllVendors && tC.privacy.checkOptoutAllVendors() ? v = "ALL" : tC.privacy.checkOptinAllVendors && !tC.privacy.checkOptinAllVendors() && (v = tC.privacy.getOptoutVendors())),
                r.user.rejected_vendors = v
            }
            switch (r.revenue && (r.amount = r.revenue),
            r.integrations = r.integrations || {},
            r.integrations.facebook = r.integrations.facebook || {},
            r.integrations.facebook.fbc = tC.getCookie("_fbc") || void 0,
            r.integrations.facebook.fbp = tC.getCookie("_fbp") || void 0,
            r.integrations.facebook.event_id = r.integrations.facebook.event_id || tC.uniqueEventId,
            a) {
            case "page_view":
                r.title = document.title,
                r.path = location.pathname,
                r.url = c,
                "" !== document.referrer && (r.referrer = document.referrer),
                r.type = r.type || (window.tc_vars || {}).env_template || "other",
                r.page_type = r.page_type || (window.tc_vars || {}).env_template || "other";
                break;
            case "purchase":
                r.status = r.status || "in_progress",
                r.type = r.type || "online"
            }
            try {
                s = window.Intl && window.Intl.DateTimeFormat().resolvedOptions().timeZone
            } catch (t) {}
            var g, l = document.documentElement || {}, y = window.navigator || {}, f = {
                title: document.title,
                url: c,
                lang: l.lang,
                referrer: document.referrer || tC.storage && tC.storage.get("TC_REFERRER"),
                viewport: {
                    width: l.clientWidth,
                    height: l.clientHeight
                }
            }, _ = {
                cookie: (g = ["_fbp", "_fbc", /^_+(ga|gcl|opt_|utm)/, /^(pm_sess|VISITOR_INFO1|FPGCL|GA_)/, "__gsas", "NID", "DSID", "test_cookie", "id", "GED_PLAYLIST_ACTIVITY", "ACLK_DATA", "aboutads_sessNNN", "FPAU", "ANID", "AID", "IDE", "TAID", "FLC", "RUL", "FCCDCF", "FCNEC", "CUID", "1P_JAR", "Conversion", "YSC", "FPLC", "_gid", "AMP_TOKEN", "FPID", "_dc_gtm_", "PAIDCONTENT", "atuserid", "xtidc", "crto_mapped_user_id", "awc", "tduid", "kwks2s", "_ttp", /^_pk_id\./, "_pcid", "pa_vid", "rmStore", "_uetmsclkid"],
                (document.cookie || "").split("; ").filter((function(t) {
                    var e = t.split("=")[0];
                    return g.find((function(t) {
                        return t.test ? t.test(e) : e === t
                    }
                    ))
                }
                )).join("; ") || ""),
                lang: y.language || y.userLanguage,
                screen: {
                    width: window.screen.width,
                    height: window.screen.height
                },
                timezone: s
            };
            tC.internalvars.caEventData = r;
            var h = {
                event_name: a,
                context: {
                    page: f,
                    device: _,
                    eventId: o.eventId ? String(o.eventId) : tC.uniqueEventId,
                    version: 2,
                    created: (new Date).toJSON(),
                    generatorVersion: tC.generatorVersion,
                    containerVersion: tC.containerVersion
                }
            };
            if (Object.assign(h, r),
            100 < tC.triggeredEvents.length)
                for (; tC.triggeredEvents.length > 100; )
                    tC.triggeredEvents.shift();
            tC.triggeredEvents.push(h),
            tC.lastTriggeredEvent = tC.triggeredEvents[tC.triggeredEvents.length - 1];
            var m = o.siteId || o.idSite
              , E = o.collectionDomain;
            return tC.track({
                domain: E,
                route: "events",
                siteId: m,
                queryParams: d,
                body: h,
                caidSync: i.caidSync
            }),
            tC.eventTarget && tC.eventTarget.dispatchEvent("track_" + a, {
                eventData: h
            }),
            tC.uniqueEventIndex
        }
    }(),
    tC.storage = {
        has: function() {
            try {
                return "localStorage"in window && null != window.localStorage && (window.localStorage.setItem("TC_CHECK", "1"),
                window.localStorage.removeItem("TC_CHECK"),
                !0)
            } catch (t) {
                return !1
            }
        },
        isAvailable: function() {
            try {
                return window.localStorage,
                !0
            } catch (t) {
                return !1
            }
        },
        get: function(t) {
            if (this.isAvailable())
                return window.localStorage.getItem(t)
        },
        set: function(t, e) {
            if (this.isAvailable())
                try {
                    return window.localStorage.setItem(t, e) || !0
                } catch (t) {
                    return !1
                }
        },
        remove: function(t) {
            if (this.isAvailable())
                return window.localStorage.removeItem(t) || !0
        },
        setWithExpiry: function(t, e, n) {
            if (this.isAvailable()) {
                var i = (new Date).getTime()
                  , a = 1e3 * n * 60 * 60 * 24
                  , r = JSON.stringify({
                    value: e,
                    expires: i + a
                });
                try {
                    window.localStorage.setItem(t, r)
                } catch (t) {}
            }
        },
        getWithExpiry: function(t) {
            if (this.isAvailable()) {
                var e = window.localStorage.getItem(t);
                if (null == e)
                    return null;
                var n = (new Date).getTime();
                return (e = JSON.parse(e)).expires < n ? (this.remove(t),
                null) : e.value
            }
        }
    },
    (i = {}).hitCounter_5181_22 = function() {
        var t = window.tC_5181_22;
        0 === Math.floor(Math.random() * parseInt(t.frequency)) && tC.pixelTrack.add("https://manager.tagcommander.com/utils/hit.php?id=" + t.id_container + "&site=" + t.id_site + "&version=" + t.containerVersion + "&frequency=" + t.frequency + "&position=" + tC.container_position + "&rand=" + Math.random())
    }
    ,
    tC.extend(i),
    tC.container_position = "undefined" != typeof tc_container_position ? tc_container_position : void 0 !== tC.container_position ? tC.container_position : 0,
    tC.container_position++,
    "undefined" != typeof tc_container_position && tc_container_position++,
    tC.hitCounter_5181_22(),
    tC.script = {
        add: function(t, e, n) {
            var i = document.getElementsByTagName("body")[0] || document.getElementsByTagName("script")[0].parentNode
              , a = document.createElement("script");
            a.type = "text/javascript",
            a.async = !0,
            a.src = t,
            a.charset = "utf-8",
            a.id = "tc_script_" + Math.random(),
            i ? (e && (a.addEventListener ? a.addEventListener("load", (function() {
                e()
            }
            ), !1) : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null,
                e())
            }
            ),
            n && "number" == typeof n && setTimeout((function() {
                i && a.parentNode && i.removeChild(a)
            }
            ), n),
            i.insertBefore(a, i.firstChild)) : tC.log("tC.script error : the element <script> or <body> is not found ! the file " + t + " is not implemented !", "warn")
        }
    },
    tC.bypassBookmarklet = !0,
    tC.extend({
        match: function(t, e, n) {
            try {
                return t.match(new RegExp(e,n))
            } catch (i) {
                tC.log("the tC.match error ! message : " + i.message, "data : " + t, "p : " + e, "flag : " + n, "warn")
            }
        }
    }),
    function() {
        "use strict";
        if (window.tC = window.tC || {},
        null == window.tC.Bitfield) {
            var t = function(t, e) {
                if (isNaN(t) || t < 0 || t >= e)
                    throw new RangeError("Bitfield: invalid index");
                return t >> 3
            }
              , e = function(t) {
                return 1 << t % 8
            }
              , n = function(t) {
                if (isNaN(t) || t <= 0)
                    throw new Error("Bitfield: size must be greater than zero");
                var e = Math.ceil(t / 8);
                this.buffer = new Uint8Array(e),
                this.length = t
            };
            n.fromBase64URL = function(t) {
                var e = t.replace(/\-/g, "+").replace(/_/g, "/")
                  , i = atob(e)
                  , a = new n(8 * i.length);
                for (var r in i)
                    i.hasOwnProperty(r) && (a.buffer[r] = i.charCodeAt(r));
                return a
            }
            ,
            n.prototype.toBase64URL = function() {
                var t = String.fromCharCode.apply(null, this.buffer);
                return btoa(t).replace(/\+/g, "-").replace(/\//g, "_")
            }
            ,
            n.fromArray = function(t) {
                for (var e = new n(t.length), i = 0; i < t.length; ++i)
                    t[i] && e.set(i);
                return e
            }
            ,
            n.prototype.toArray = function() {
                for (var t = Array(this.length), e = 0; e < this.length; ++e)
                    t[e] = this.get(e);
                return t
            }
            ,
            n.prototype.get = function(n) {
                var i = t(n, this.length)
                  , a = e(n);
                return Boolean(this.buffer[i] & a)
            }
            ,
            n.prototype.set = function(n) {
                var i = t(n, this.length)
                  , a = e(n);
                return this.buffer[i] |= a,
                this
            }
            ,
            n.prototype.unset = function(n) {
                var i = t(n, this.length)
                  , a = e(n);
                return this.buffer[i] &= ~a,
                this
            }
            ,
            window.tC.Bitfield = n
        }
    }(),
    tC.fn.css = function(t) {
        try {
            this.each((function(e, n) {
                for (var i in t) {
                    var a = "";
                    if (/-/.test(i)) {
                        var r = i.split("-");
                        for (var e in r)
                            if (0 == e)
                                a = r[e];
                            else {
                                var o = r[e].split("");
                                a += o.shift().toUpperCase() + o.join("")
                            }
                    } else
                        a = i;
                    n.style[a] = t[i]
                }
            }
            ))
        } catch (t) {
            tC.log(["tC.fn.css->error", t.message], "warn")
        }
        return this
    }
    ,
    tC.fn.resetCss = function() {
        return this.each((function(t, e) {
            tC(e).css({
                border: "none",
                background: "none",
                font: "none",
                margin: "none",
                padding: "none",
                top: "none",
                left: "none",
                buttom: "none",
                right: "none",
                width: "none",
                height: "none"
            })
        }
        )),
        this
    }
    ,
    tC.arrayUniqueFilter = function(t, e, n) {
        return n.indexOf(t) === e
    }
    ,
    tC.privacy = tC.privacy || {
        reactived: null,
        id: null,
        version: null,
        categories: null,
        vendorsDisabled: null,
        optinVendors: [],
        cookieData: null,
        initialized: !1,
        init: function() {
            var t = tC.getCookie(tC.privacy.getCN());
            tC.privacy.cookieData = t ? t.indexOf("@") >= 0 ? t.split("@") : t.split(tC.privacy.getCS()) : [],
            tC.privacy.vendorsDisabled = tC.getCookie(this.getVCN()).split(","),
            tC.privacy.optinVendors = [];
            var e = tC.privacy.cookieData[5] || "";
            if ("" !== String(e) && (e = tC.Bitfield.fromBase64URL(e).toArray()).forEach((function(t, e) {
                !0 === t && tC.privacy.optinVendors.push(String(e))
            }
            )),
            null != tC.privacy.isIabGoogleAcmEnabled && tC.privacy.isIabGoogleAcmEnabled()) {
                var n = tC.storage.getWithExpiry(this.getCN() + "_ACM");
                null != n && "" !== String(n) && (n = tC.Bitfield.fromBase64URL(n).toArray()).forEach((function(t, e) {
                    !0 === t && tC.privacy.optinVendors.push("acm_" + e)
                }
                ))
            }
            if (tC.privacy.categories = tC.privacy.cookieData[2] || "",
            tC.privacy.cachedBlockedOnCategories = tC.privacy.cookieData[3] ? tC.privacy.cookieData[3].split(",") : null,
            "ALL" === tC.privacy.categories) {
                var i = parseInt(tC.privacy.cookieData[0] || 0);
                tC.privacy.categories = 1 === i ? [] : tC.privacy.allSelectableCategoriesId || []
            } else
                tC.privacy.categories = "" !== tC.privacy.categories ? tC.privacy.categories.split(",") : [];
            null == tC.privacy.cookieData[0] && tC.privacy.initIabLegitimateInterests && tC.privacy.initIabLegitimateInterests();
            var a = (tC.privacy.cookieData[4] || "").split(",");
            tC.privacy.consentDates = {
                updatedAt: Number(a[0]) || null,
                createdAt: Number(a[1]) || null,
                expiresAt: Number(a[2]) || null
            },
            tC.privacy.initialized || (tC.privacy.initialized = !0,
            tC.privacy.gcmEnabled && tC.privacy.gcmInit(),
            tC.eventTarget.dispatchEventAsync("privacy-module-ready"),
            0 !== tC.privacy.cookieData.length && tC.eventTarget.dispatchEventAsync("consent-ready"))
        }
    },
    tC.privacy.saveConsent = function(t) {
        var e = t.optin;
        if (null == tC.isCookieEnabledBool && (tC.isCookieEnabledBool = tC.isCookieEnabled()),
        !1 !== tC.isCookieEnabledBool) {
            var n = t.categoryList || "";
            0 === n.length && tC.privacy.privacySelectableUnblockedCategoriesId && tC.privacy.privacySelectableUnblockedCategoriesId.length > 0 && (e = !1);
            var i = null != t.hitOptin ? t.hitOptin : t.optin
              , a = t.vendorList || ""
              , r = t.privacyVersion || tC.privacy.getVersion()
              , o = t.privacyId || tC.privacy.getId()
              , c = t.action || "banner_button"
              , s = {};
            null != t.acmVendorList && (s.acmVendorList = t.acmVendorList);
            var d = null == tC.privacy.cookieData || 0 === tC.privacy.cookieData.length;
            tC.privacy.cok(Number(!e), r, n, a, s),
            !1 !== t.sendHit && tC.privacy.hit(Number(i), r, o, c),
            window.tCPrivacyTagManager && tC.privacy.sendDataOtherTMS(),
            tC.privacy.gcmEnabled && tC.privacy.gcmUpdate(),
            d && tC.eventTarget.dispatchEvent("consent-ready"),
            tC.eventTarget.dispatchEvent("consent-update", {
                skipTrigger: !0
            }),
            tC.eventTarget.dispatchEvent("consent-updated")
        }
    }
    ,
    tC.privacy.In = tC.privacy.In || function(t, e, n, i, a, r, o) {
        o = o || {},
        tC.privacy.saveConsent({
            optin: !0,
            privacyId: t,
            privacyVersion: e,
            action: a,
            categoryList: i,
            vendorList: r,
            acmVendorList: o.acmVendorList,
            sendHit: o.sendHit
        })
    }
    ,
    tC.privacy.Out = tC.privacy.Out || function(t, e, n, i, a, r, o) {
        o = o || {},
        "ALL" === i && (i = ""),
        tC.privacy.saveConsent({
            optin: !1,
            privacyId: t,
            privacyVersion: e,
            action: a,
            categoryList: i,
            vendorList: r,
            acmVendorList: o.acmVendorList,
            sendHit: o.sendHit
        })
    }
    ,
    tC.privacy.encodeVendorList = function(t) {
        if (t.length > 0) {
            var e = (t = t.map(Number).sort((function(t, e) {
                return t - e
            }
            )))[t.length - 1]
              , n = new tC.Bitfield(e + 1);
            return t.forEach((function(t) {
                n.set(t)
            }
            )),
            n.toBase64URL()
        }
        return ""
    }
    ,
    tC.privacy.optinAll = function(t, e) {
        t = t || "banner_button",
        e = e || {};
        var n, i = tC.privacy.getCategoryIdList().join(","), a = tC.privacy.getVendorIdList();
        if (null != tC.privacy.isIabGoogleAcmEnabled && tC.privacy.isIabGoogleAcmEnabled()) {
            var r = tC.privacy.prepareAcmVendorConsent(a);
            a = r.nonAcmVendors,
            n = tC.privacy.encodeVendorList(r.acmVendors)
        }
        a = tC.privacy.encodeVendorList(a),
        tC.privacy.saveConsent({
            optin: !0,
            action: t,
            categoryList: i,
            vendorList: a,
            acmVendorList: n,
            sendHit: e.sendHit
        })
    }
    ,
    tC.privacy.prepareConsent = function(t) {
        var e = ((t = t || {}).categories || []).map(String)
          , n = (t.vendors || []).map(String);
        if (tC.privacy.iabCategoriesToPublicCategories) {
            var i = tC.privacy.iabCategoriesToPublicCategories({
                purposes: (t.iabPurposes || []).map(String),
                legIntPurposes: (t.iabPurposes || []).map(String).filter((function(t) {
                    return 1 !== t
                }
                )),
                specialFeatures: (t.iabSpecialFeatures || []).map(String)
            });
            e = e.concat(i)
        }
        if (tC.privacy.iabVendorsToPublicVendors) {
            var a = tC.privacy.iabVendorsToPublicVendors({
                vendors: (t.iabVendors || []).map(String),
                legIntVendors: (t.iabVendors || []).map(String)
            });
            n = n.concat(a)
        }
        return {
            vendors: n,
            categories: e
        }
    }
    ,
    tC.privacy.optin = function(t, e) {
        t = t || "banner_button",
        e = e || {};
        var n = tC.privacy.prepareConsent(e)
          , i = n.categories
          , a = n.vendors;
        if (0 !== i.length || 0 !== a.length) {
            var r;
            if (i = i.concat(e.reset ? [] : tC.privacy.getOptinCategories()).filter(tC.arrayUniqueFilter),
            a = a.concat(e.reset ? [] : tC.privacy.getOptinVendors()).filter(tC.arrayUniqueFilter),
            null != tC.privacy.isIabGoogleAcmEnabled && tC.privacy.isIabGoogleAcmEnabled()) {
                var o = tC.privacy.prepareAcmVendorConsent(a);
                a = o.nonAcmVendors,
                r = tC.privacy.encodeVendorList(o.acmVendors)
            }
            a = tC.privacy.encodeVendorList(a),
            tC.privacy.saveConsent({
                optin: !0,
                action: t,
                categoryList: i,
                vendorList: a,
                acmVendorList: r,
                hitOptin: e.hitOptin,
                sendHit: e.sendHit
            })
        }
    }
    ,
    tC.privacy.optoutAll = function(t, e) {
        var n;
        t = t || "banner_button",
        e = e || {},
        null != tC.privacy.isIabGoogleAcmEnabled && tC.privacy.isIabGoogleAcmEnabled() && (n = ""),
        tC.privacy.saveConsent({
            optin: !1,
            action: t,
            categoryList: "",
            vendorList: "",
            acmVendorList: n,
            sendHit: e.sendHit
        })
    }
    ,
    tC.privacy.optout = function(t, e) {
        t = t || "banner_button";
        var n = tC.privacy.prepareConsent(e)
          , i = n.categories
          , a = n.vendors;
        if (0 !== i.length || 0 !== a.length) {
            var r = tC.privacy.getOptinCategories()
              , o = tC.privacy.getOptinVendors();
            if (i = r.filter((function(t) {
                return -1 === i.indexOf(t)
            }
            )),
            a = o.filter((function(t) {
                return -1 === a.indexOf(t)
            }
            )),
            0 !== i.length || 0 !== a.length) {
                var c;
                if (null != tC.privacy.isIabGoogleAcmEnabled && tC.privacy.isIabGoogleAcmEnabled()) {
                    var s = tC.privacy.prepareAcmVendorConsent(a);
                    a = s.nonAcmVendors,
                    c = tC.privacy.encodeVendorList(s.acmVendors)
                }
                a = tC.privacy.encodeVendorList(a),
                tC.privacy.saveConsent({
                    optin: !0,
                    action: t,
                    categoryList: i,
                    vendorList: a,
                    acmVendorList: c,
                    sendHit: e.sendHit
                })
            } else
                tC.privacy.optoutAll(t, {
                    sendHit: e.sendHit
                })
        }
    }
    ,
    tC.privacy.getFlattenCategories = function() {
        return tC.privacy.allCategories.flatMap((function(t) {
            return (t.subCategories || []).concat(t)
        }
        ))
    }
    ,
    tC.privacy.getFlattenCategoryIdList = function() {
        return tC.privacy.getFlattenCategories().map((function(t) {
            return t.id
        }
        ))
    }
    ,
    tC.privacy.getCategoryIdList = function() {
        var t = tC.privacy.privacySelectableUnblockedCategoriesId || tC.privacy.getFlattenCategoryIdList();
        return tC.privacy.getIabCategoryIdList && (t = t.concat(tC.privacy.getIabCategoryIdList())),
        t
    }
    ,
    tC.privacy.getVendorIdList = function() {
        var t = tC.privacy.includedVendorIds || [];
        return t = null != tC.privacy.isIabGoogleAcmEnabled && tC.privacy.isIabGoogleAcmEnabled() ? t.filter((function(t) {
            return !(t > 1e3)
        }
        )) : t.filter((function(t) {
            return t < 1e3
        }
        )),
        tC.privacy.getIabVendorIdList && (t = t.concat(tC.privacy.getIabVendorIdList())),
        t
    }
    ,
    tC.privacy.getId = tC.privacy.getId || function() {
        return ""
    }
    ,
    tC.privacy.getVersion = tC.privacy.getVersion || function() {
        return ""
    }
    ,
    tC.privacy.setTcfConsent = function(t, e) {
        var n, i = e.categories || {}, a = e.vendors || {};
        if (t.purpose) {
            if (t.purpose.consents)
                for (var r in t.purpose.consents)
                    i[n = "tcf2_" + r] = i[n] || {},
                    i[n].status = !0 === t.purpose.consents[r] ? e.on : e.off;
            if (t.purpose.legitimateInterests)
                for (var o in t.purpose.legitimateInterests)
                    i[n = "tcf2_" + o] = i[n] || {},
                    i[n].legIntStatus = !0 === t.purpose.legitimateInterests[o] ? e.on : e.off
        }
        if (t.vendor) {
            if (t.vendor.consents)
                for (var c in t.vendor.consents)
                    a[n = "tcf2_" + c] = a[n] || {},
                    a[n].status = !0 === t.vendor.consents[c] ? e.on : e.off;
            if (t.vendor.legitimateInterests)
                for (var s in t.vendor.legitimateInterests)
                    a[n = "tcf2_" + s] = a[n] || {},
                    a[n].legIntStatus = !0 === t.vendor.legitimateInterests[s] ? e.on : e.off
        }
        if (t.specialFeatureOptins)
            for (var d in t.specialFeatureOptins)
                i[n = "tcf2_sf_" + d] = i[n] || {},
                i[n].status = !0 === t.specialFeatureOptins[d] ? e.on : e.off;
        return {
            categories: i,
            vendors: a
        }
    }
    ,
    tC.privacy.isSet = tC.privacy.isSet || function() {
        return null != tC.privacy.cookieData && tC.privacy.cookieData.length > 0
    }
    ,
    tC.privacy.getConsent = function(t) {
        var e = (t = t || {}).pretty
          , n = !!e && "off"
          , i = null;
        null == tC.privacy.cookieData && tC.privacy.init(),
        0 === tC.privacy.cookieData.length ? (n = e ? "unset" : null,
        i = "unset") : 1 === Number(tC.privacy.cookieData[0]) && (i = "all-off");
        var a = !0
          , r = !1;
        e && (a = "on",
        r = "off");
        var o = tC.privacy.getOptinCategories().reduce((function(t, e) {
            return t[e] = a,
            t
        }
        ), {})
          , c = tC.privacy.getCategoryIdList();
        c = c.reduce((function(t, e) {
            var r = e
              , c = "status";
            e > 1e4 && e < 13e3 ? (r = "tcf2_" + Math.ceil((e - 1e4) / 2),
            e % 2 == 0 && (c = "legIntStatus")) : e > 13e3 && (r = "tcf2_sf_" + (e - 13e3));
            return t[r] = t[r] || {},
            t[r][c] = o[e] || n,
            null == i && t[r][c] !== a && (i = "mixed"),
            t
        }
        ), {}),
        tC.privacy.getBlockedOnCategories().forEach((function(t) {
            c[t] = {
                status: a,
                required: !0
            }
        }
        ));
        var s = tC.privacy.getVendorIdList()
          , d = tC.privacy.getOptinVendors().reduce((function(t, e) {
            return t[e] = a,
            t
        }
        ), {});
        if (s = s.reduce((function(t, e) {
            var r = e
              , o = "status";
            e > 1e3 && (r = "tcf2_" + Math.ceil((e - 1e3) / 2),
            e % 2 == 0 && (o = "legIntStatus"));
            return t[r] = t[r] || {},
            t[r][o] = d[e] || n,
            null == i && t[r][o] !== a && (i = "mixed"),
            t
        }
        ), {}),
        tC.storage.getWithExpiry(tC.privacy.getCN() + "_TCF")) {
            var C = tC.storage.getWithExpiry(tC.privacy.getCN() + "_TCF")
              , u = tC.privacy.setTcfConsent(C, {
                categories: c,
                vendors: s,
                on: a,
                off: r
            });
            c = u.categories,
            s = u.vendors
        }
        i = i || "all-on";
        var p = {
            version: "1.0",
            siteId: tC.id_site,
            consentId: tC.privacy.getConsentId(),
            bannerId: String(tC.privacy.getId()),
            bannerVersion: tC.privacy.getVersion()
        };
        return tC.privacy.iabVendorList && (p.tcfPolicyVersion = String(tC.privacy.iabVendorList.tcfPolicyVersion)),
        tC.privacy.consentDates && (p.dateCreated = tC.privacy.consentDates.createdAt,
        p.dateUpdated = tC.privacy.consentDates.updatedAt,
        p.dateExpires = tC.privacy.consentDates.expiresAt),
        {
            meta: p,
            consent: {
                status: i,
                categories: c,
                vendors: s
            }
        }
    }
    ,
    tC.privacy.updateConsent = function(t) {
        if ("all-on" !== (t = t || {}).status)
            if ("all-off" !== t.status) {
                t.categories = t.categories || {},
                t.vendors = t.vendors || {};
                var e = !t.pretty || "on"
                  , n = !!t.pretty && "off"
                  , i = {
                    categories: [],
                    vendors: [],
                    sendHit: !1
                }
                  , a = {
                    categories: [],
                    vendors: [],
                    sendHit: !1
                }
                  , r = null != window.__tcfapi;
                if (Object.keys(t.categories).forEach((function(o) {
                    var c = o
                      , s = t.categories[o];
                    if (r) {
                        var d = String(o).match(/tcf2_(\d*)/)
                          , C = d ? String(o).match(/tcf2_sf_(\d*)/) : null;
                        C ? c = 13e3 + Number(C[1]) : d && (c = 2 * Number(d[1]) - 1 + 1e4,
                        s.legIntStatus === e ? i.categories.push(c + 1) : s.legIntStatus === n && a.categories.push(c + 1))
                    }
                    s.status === e ? i.categories.push(c) : s.status === n && a.categories.push(c)
                }
                )),
                Object.keys(t.vendors).forEach((function(o) {
                    var c = o
                      , s = t.vendors[o];
                    if (r) {
                        var d = String(o).match(/tcf2_(\d*)/);
                        d && (c = 2 * Number(d[1]) - 1 + 1e3,
                        s.legIntStatus === e ? i.vendors.push(c + 1) : s.legIntStatus === n && a.vendors.push(c + 1))
                    }
                    s.status === e ? i.vendors.push(c) : s.status === n && a.vendors.push(c)
                }
                )),
                tC.privacy.optin(t.action, i),
                tC.privacy.optout(t.action, a),
                null == t.sendHit || t.sendHit) {
                    var o = tC.privacy.getOptinCategories().length > 0 || tC.privacy.getOptinVendors().length > 0
                      , c = t.action || "banner_button";
                    tC.privacy.hit(Number(o), tC.privacy.getVersion(), tC.privacy.getId(), c)
                }
            } else
                tC.privacy.optoutAll(t.action, {
                    sendHit: t.sendHit
                });
        else
            tC.privacy.optinAll(t.action, {
                sendHit: t.sendHit
            })
    }
    ,
    tC.privacy.revokeConsent = function() {
        tC.privacy.optoutAll(),
        tC.removeCookie(tC.privacy.getCN(), window.tc_privacy_force_domain),
        tC.removeCookie(tC.privacy.getPCCN(), window.tc_privacy_force_domain),
        tC.privacy.cookieData = [],
        tC.storage && (tC.storage.remove(tC.privacy.getCN() + "_TCF"),
        tC.storage.remove(tC.privacy.getCN() + "_ACM")),
        tC.removeCookie("TCPID", window.tc_privacy_force_domain),
        tC.setCookie("TCPID", tC.privacy.rand(), 393, "/", window.tc_privacy_force_domain || tC.domain()),
        tC.eventTarget.dispatchEvent("consent-revoke"),
        tC.eventTarget.dispatchEvent("consent-update")
    }
    ,
    tC.privacy.cok = tC.privacy.cok || function(t, e, n, i, a) {
        a = a || {},
        n = n || "",
        i = i || "";
        var r = tC.privacy.consentDuration || 13;
        r = 30 * parseInt(r);
        var o = void 0 !== window.tc_privacy_force_domain ? window.tc_privacy_force_domain : null;
        tC.privacy.iabVendorList && (e = e + "|" + tC.privacy.iabVendorList.gvlSpecificationVersion + "|" + tC.privacy.iabVendorList.tcfPolicyVersion + "|" + tC.privacy.iabVendorList.vendorListVersion),
        tC.privacy.getId && (e = e + "|" + tC.privacy.getId() + "|" + tC.id_site);
        var c = (new Date).getTime()
          , s = c;
        if (tC.privacy.consentDates) {
            var d = c + 1e3 * r * 60 * 60 * 24;
            tC.privacy.consentDates.updatedAt = c,
            tC.privacy.consentDates.createdAt = tC.privacy.consentDates.createdAt || c,
            tC.privacy.consentDates.expiresAt = d,
            s = [tC.privacy.consentDates.updatedAt, tC.privacy.consentDates.createdAt, tC.privacy.consentDates.expiresAt].join(",")
        }
        var C = t + tC.privacy.getCS() + e + tC.privacy.getCS() + n + tC.privacy.getCS() + (tC.privacy.blockedOnCategories || "") + tC.privacy.getCS() + s + tC.privacy.getCS() + i;
        if (tC.setCookie(tC.privacy.getCN(), C, r, "/", o),
        tC.setCookie(tC.privacy.getPCCN(), n, r, "/", o),
        null != a.acmVendorList && tC.storage.setWithExpiry(tC.privacy.getCN() + "_ACM", a.acmVendorList, r),
        null != window.__tcfapi) {
            var u = tC.privacy.getCN() + "_TCF";
            tC.storage.remove(u);
            var p = !1
              , v = tC.privacy.gcmEnabled && window.gtag_enable_tcf_support;
            window.__tcfapi("getTCData", 2, (function(t, e) {
                e && (t.vendorListVersion = tC.privacy.iabVendorList.vendorListVersion,
                tC.storage.setWithExpiry(u, t, r),
                p && v && tC.privacy.gcmUpdate())
            }
            )),
            p = !0
        }
    }
    ,
    tC.privacy.checkOptinAllVendors = function() {
        var t = tC.privacy.getOptinVendors().map(String);
        return tC.privacy.getVendorIdList().map(String).every((function(e) {
            return -1 !== t.indexOf(e)
        }
        ))
    }
    ,
    tC.privacy.checkOptoutAllVendors = function() {
        return tC.privacy.getVendorIdList().length > 0 && 0 === tC.privacy.getOptinVendors().length
    }
    ,
    tC.privacy.sendBeacon = function(t) {
        t = t || {};
        var e = tC.privacy.getHitDomain(t.tc_optout);
        tC.track({
            domain: e,
            route: "privacy-consent",
            siteId: t.site,
            body: t
        })
    }
    ,
    tC.privacy.createConsentId = function() {
        var t = tC.getCookie("TCPID");
        return "" === t && (t = tC.privacy.rand(),
        tC.setCookie("TCPID", t, 393, "/", tC.domain())),
        t
    }
    ,
    tC.privacy.getConsentId = tC.privacy.getConsentId || function() {
        return tC.privacy.createConsentId() || tC.getCookie("TCPID")
    }
    ,
    tC.privacy.hit = tC.privacy.hit || function(t, e, n, i) {
        var a;
        a = 0 === t ? 1 : 1 === t ? 0 : parseInt(tC.privacy.cookieData[0] || 1);
        var r = tC.privacy.getPrivacyHitsCategory()
          , o = !0;
        if (r) {
            var c = tC.privacy.categories || []
              , s = c.length
              , d = tC.privacy.tagsCategoriesAssignation[r];
            tC.privacy.init(),
            o = tC.privacy.validRules(r) || -1 !== (tC.privacy.blockedOnCategories || []).indexOf(d) || 1 === t && c.indexOf(String(d)) > -1 && -1 === tC.privacy.categories.indexOf(String(d)) || 0 === t && s > 0 && 0 === tC.privacy.categories.length
        }
        if (o) {
            var C = tC.privacy.privacySelectableUnblockedCategoriesId || tC.privacy.getFlattenCategoryIdList()
              , u = C.slice()
              , p = tC.privacy.getOptinCategories()
              , v = 0;
            p.length >= C.length && (C.forEach((function(t) {
                p.indexOf(String(t)) > -1 && u.splice(u.indexOf(t), 1)
            }
            )),
            v = 0 === u.length ? 1 : 0);
            var g = {
                id_tc: String(tC.privacy.containerId || 22),
                site: String(5181),
                version: e,
                id_privacy: n,
                type_action: i,
                privacy_action: t.toString(),
                optin_categories: tC.privacy.getValidCategories(),
                optout_categories: tC.privacy.getOptoutCategories(),
                optin_to_all: v,
                tcpid: tC.privacy.getConsentId(),
                tc_optout: a
            }
              , l = Number(window.tc_privacy_do_not_track || tC.getCookie("TC_PRIVACY_DO_NOT_TRACK"));
            if (l) {
                if (!(-1 !== ["1", "0"].indexOf(g.privacy_action)))
                    return;
                g.do_not_track = Boolean(l)
            }
            1 === t && (g.optin_vendors = tC.privacy.getOptinVendors(),
            g.optin_to_all_vendors = Number(tC.privacy.checkOptinAllVendors())),
            tC.privacy.sendBeacon(g)
        }
    }
    ,
    tC.privacy.rand = tC.privacy.rand || function() {
        var t = new Date;
        return String() + t.getYear() + (t.getMonth() + 1) + t.getDay() + t.getHours() + t.getMinutes() + t.getSeconds() + parseInt(12345678942 * Math.random())
    }
    ,
    tC.privacy.set = tC.privacy.set || function(t) {
        tC.privacy.settings = t
    }
    ,
    tC.privacy.getCN = tC.privacy.getCN || function() {
        return void 0 !== window.tc_privacy_cookie_name ? window.tc_privacy_cookie_name : "TC_PRIVACY"
    }
    ,
    tC.privacy.getPCCN = tC.privacy.getPCCN || function() {
        return tC.privacy.getCN() + "_CENTER"
    }
    ,
    tC.privacy.getVCN = function() {
        return tC.privacy.getCN() + "_VENDOR"
    }
    ,
    tC.privacy.isEnable = tC.privacy.isEnable || function() {
        return null === tC.privacy.cookieData && tC.privacy.init(),
        tC.privacy.cookieData.length <= 2 || "" !== String(tC.privacy.reactivate) && String(tC.privacy.cookieData[1]) === String(tC.privacy.reactivate)
    }
    ,
    tC.privacy.getContainer = tC.privacy.getContainer || function(t) {
        return t.getElementById("tc_div_preview") || t.body
    }
    ,
    tC.privacy.getPrivacyHitsCategory = function() {
        return null
    }
    ,
    tC.privacy.getHitDomain = function(t) {
        var e = window.tc_collect_dns || tC.clientCollectDns;
        return e || (0 === Number(t) ? "https://privacy.commander1.com" : "https://privacy.trustcommander.net")
    }
    ,
    tC.privacy.hitCounter = function(t, e) {
        if (!Number(window.tc_privacy_do_not_track || tC.getCookie("TC_PRIVACY_DO_NOT_TRACK"))) {
            e = e || "banner",
            tC.privacy.init();
            var n = parseInt(tC.privacy.cookieData[0] || 1);
            n = null != tC.privacy.cookieData[2] && "" === String(tC.privacy.cookieData[2]) ? Number(!n) : n;
            var i = tC.privacy.getPrivacyHitsCategory();
            if (null == i || tC.privacy.validRules(i)) {
                var a = {
                    id_tc: String(tC.privacy.containerId || 22),
                    site: String(5181),
                    version: tC.privacy.getVersion(),
                    id_privacy: t,
                    type_action: e,
                    privacy_action: "V",
                    tcpid: tC.privacy.getConsentId(),
                    tc_optout: n
                };
                tC.privacy.sendBeacon(a)
            }
        }
    }
    ,
    tC.privacy.getOptinCategories = function() {
        tC.privacy.init();
        var t = parseInt(tC.privacy.cookieData[0] || 0);
        return tC.privacy.categories && tC.privacy.categories.length && "" === tC.privacy.categories[0] ? [] : 0 === t && null != tC.privacy.categories && "undefined" !== tC.privacy.categories && -1 !== Number(tC.privacy.categories) ? tC.privacy.categories : []
    }
    ,
    tC.privacy.getOptoutCategories = function() {
        var t = tC.privacy.getValidCategories();
        return tC.privacy.getCategoryIdList().concat(tC.privacy.getBlockedOnCategories()).map(String).filter((function(e) {
            return -1 === t.indexOf(e)
        }
        ))
    }
    ,
    tC.privacy.getOptinVendors = function() {
        return tC.privacy.init(),
        tC.privacy.optinVendors || []
    }
    ,
    tC.privacy.getOptoutVendors = function() {
        tC.privacy.init();
        var t = tC.privacy.getVendorIdList().map(String)
          , e = (tC.privacy.optinVendors || []).map(String);
        return t.filter((function(t) {
            return -1 === e.indexOf(String(t))
        }
        ))
    }
    ,
    tC.privacy.getBlockedOnCategories = function() {
        return (tC.privacy.cachedBlockedOnCategories || tC.privacy.blockedOnCategories || []).map(String)
    }
    ,
    tC.privacy.getValidCategories = function() {
        return tC.privacy.getOptinCategories().concat(tC.privacy.getBlockedOnCategories())
    }
    ,
    tC.privacy.getValidVendors = function() {
        var t = tC.privacy.getValidCategories();
        return tC.privacy.getOptinVendors().filter((function(e) {
            var n = tC.privacy.includedVendors[e];
            return !!n && (null == n.categories || n.categories.every((function(e) {
                return -1 !== t.indexOf(String(e))
            }
            )))
        }
        ))
    }
    ,
    tC.privacy.getCS = tC.privacy.getCS || function() {
        return void 0 !== tC.privacyCookieSeparator ? tC.privacyCookieSeparator : "@"
    }
    ,
    tC.privacy.validRules = tC.privacy.validRules || function(t) {
        if (null === tC.privacy.cookieData && tC.privacy.init(),
        !tC.privacy.cookieData.length || 1 === tC.privacy.cookieData.length && "" === tC.privacy.cookieData[0])
            return !0;
        var e = 0 === parseInt(tC.privacy.cookieData[0] || 0)
          , n = tC.privacy.cookieData[1] ? tC.privacy.cookieData[1].split("|") : [0]
          , i = parseInt(n[0])
          , a = n.length > 2 ? parseInt(n[n.length - 2]) : 0
          , r = (tC.privacy.cookieData[2] || "").split(",")
          , o = tC.privacy.cookieData[3] ? tC.privacy.cookieData[3].split(",") : []
          , c = tC.privacy.optinVendors
          , s = tC.privacy.tagsCategoriesAssignation && tC.privacy.tagsCategoriesAssignation[t] ? tC.privacy.tagsCategoriesAssignation[t] : 0
          , d = tC.privacy.tagsVendorsAssignation && tC.privacy.tagsVendorsAssignation[t] ? tC.privacy.tagsVendorsAssignation[t] : 0
          , C = -1 !== tC.inArray(s.toString(), o)
          , u = -1 !== tC.inArray(s.toString(), r) || -1 !== tC.inArray("ALL", r)
          , p = -1 !== tC.inArray(d.toString(), c)
          , v = -1 !== tC.inArray(parseInt(t), tC.privacy.minorTags)
          , g = tC.privacy.includedVendors && tC.privacy.includedVendors[d] ? parseInt(tC.privacy.includedVendors[d].privacyVersion[a]) : 0;
        return (C || e && u) && (!d || p || v && g > i)
    }
    ,
    tC.privacy.sendDataOtherTMS = tC.privacy.sendDataOtherTMS || function() {
        var t = tC.privacy.getListVendorConsent()
          , e = tC.privacy.getListCategoryConsent();
        if (window.tCPrivacyTagManager)
            switch (window.tCPrivacyTagManager) {
            case "gtm":
                window.dataLayer && "function" == typeof window.dataLayer.push && window.dataLayer.push({
                    tcVendorsConsent: t,
                    tcCategoriesConsent: e,
                    event: "tcConsentChanged"
                });
                break;
            case "adobe":
                window.digitalData && window.digitalData.user && (window.digitalData.user.tcVendorsConsent = t,
                window.digitalData.user.tcCategoriesConsent = e)
            }
        window.tcVendorsConsent = t,
        window.tcCategoriesConsent = e
    }
    ,
    tC.privacy.getListCategoryConsent = tC.privacy.getListCategoryConsent || function() {
        if ("" === tC.getCookie(tC.privacy.getCN()))
            return "no_consent";
        var t = tC.privacy.getOptinCategories();
        return Array.isArray(t) && (0 === t.length || 1 === t.length && "" === String(t[0])) && tC.privacy.privacySelectableUnblockedCategoriesId && tC.privacy.privacySelectableUnblockedCategoriesId.length > 0 ? "optout" : tC.privacy.getValidCategories().join()
    }
    ,
    tC.privacy.getListVendorConsent = tC.privacy.getListVendorConsent || function() {
        if ("" === tC.getCookie(tC.privacy.getCN()))
            return "no_consent";
        var t = tC.privacy.getOptinVendors()
          , e = tC.privacy.getVendorIdList();
        return (0 === t.length || 1 === t.length && "" === String(t[0])) && e.length > 0 ? "optout" : tC.privacy.getValidVendors().join()
    }
    ,
    tC.privacy.getEmbeddedCategories = function() {
        return tC.privacy.allSelectableCategoriesId ? tC.privacy.allSelectableCategoriesId.map((function(t) {
            return parseInt(t)
        }
        )) : []
    }
    ,
    tC.privacy.tagsCategoriesAssignation = [tC.privacy.tagsCategoriesAssignation || {}, {
        11: 6,
        E113: 6,
        E65: 6,
        E63: 6,
        E61: 6,
        E59: 6,
        E57: 6,
        E55: 6,
        E53: 6,
        E51: 6,
        E47: 6,
        E45: 6,
        E43: 6,
        E41: 6,
        E39: 6,
        E35: 6,
        E31: 6,
        E29: 6,
        E37: 6,
        E33: 6,
        E167: 6,
        E49: 6,
        E123: 6,
        E157: 6,
        E196: 6,
        E184: 6,
        E208: 6,
        E186: 6,
        E198: 6,
        E200: 6,
        E219: 6,
        E217: 6,
        E155: 6,
        E249: 6,
        E235: 6,
        E269: 6,
        E252: 6,
        E242: 6,
        E264: 6,
        E266: 6,
        E268: 6,
        E239: 6,
        E206: 6,
        E324: 6,
        E325: 6,
        E370: 6,
        E369: 6,
        E371: 6,
        E372: 6,
        15: 6,
        13: 6,
        93: 6,
        23: 6,
        168: 6,
        163: 6,
        151: 6,
        158: 6,
        159: 6,
        160: 6,
        161: 6,
        162: 6,
        165: 6,
        175: 6,
        166: 6,
        167: 6,
        169: 6,
        171: 6,
        173: 6,
        201: 6,
        205: 6,
        214: 6,
        244: 6,
        272: 6,
        282: 6,
        298: 6,
        300: 6,
        326: 6,
        348: 6,
        350: 6,
        356: 6,
        412: 6,
        436: 6,
        438: 6,
        442: 6,
        444: 6,
        448: 6,
        264: 6,
        266: 6,
        454: 6,
        456: 6,
        458: 6,
        262: 6,
        274: 6,
        462: 6,
        464: 6,
        466: 6,
        470: 6,
        254: 6,
        224: 6,
        228: 6,
        472: 6,
        474: 6,
        476: 6,
        332: 6,
        268: 6,
        250: 6,
        368: 6,
        370: 6,
        374: 6,
        378: 6,
        394: 6,
        400: 6,
        486: 6,
        488: 6,
        490: 6,
        492: 6,
        494: 6,
        498: 6,
        500: 6,
        502: 6,
        506: 6,
        416: 6,
        230: 6,
        296: 6,
        310: 6,
        312: 6,
        316: 6,
        510: 6,
        362: 6,
        222: 6,
        388: 6,
        414: 6,
        294: 6,
        218: 6,
        480: 6,
        468: 6,
        322: 6,
        512: 6,
        514: 6,
        402: 6,
        516: 6,
        376: 6,
        522: 6,
        524: 6,
        526: 6,
        528: 6,
        318: 6,
        496: 6,
        504: 6,
        508: 6,
        530: 6,
        210: 6,
        398: 6,
        531: 6,
        535: 6,
        537: 6,
        539: 6,
        541: 6,
        545: 6,
        258: 6,
        549: 6,
        302: 6,
        553: 6,
        563: 6,
        569: 6,
        208: 6,
        248: 6,
        418: 6,
        236: 6,
        308: 6,
        314: 6,
        484: 6,
        240: 6,
        570: 6,
        572: 6,
        576: 6,
        324: 6,
        366: 6,
        482: 6,
        342: 6,
        582: 6,
        588: 6,
        590: 6,
        320: 6,
        543: 6,
        364: 6,
        518: 6,
        598: 6,
        410: 6,
        404: 6,
        406: 6,
        408: 6,
        304: 6,
        226: 6,
        238: 6,
        420: 6,
        424: 6,
        278: 6,
        280: 6,
        286: 6,
        344: 6,
        346: 6,
        354: 6,
        352: 6,
        460: 6,
        358: 6,
        360: 6,
        380: 6,
        384: 6,
        430: 6,
        432: 6,
        220: 6,
        234: 6,
        452: 6,
        330: 6,
        336: 6,
        520: 6,
        338: 6,
        592: 6,
        306: 6,
        594: 6,
        372: 6,
        604: 6,
        606: 6,
        608: 6,
        623: 6,
        625: 6,
        446: 6,
        440: 6,
        643: 6,
        645: 6,
        386: 6,
        390: 6,
        392: 6,
        396: 6,
        647: 6,
        292: 6,
        649: 6,
        574: 6,
        637: 6,
        651: 6,
        290: 6,
        426: 6,
        639: 6,
        641: 6,
        578: 6,
        653: 6,
        633: 6,
        629: 6,
        627: 6,
        428: 6,
        596: 6,
        659: 6,
        661: 6,
        618: 6,
        663: 6,
        340: 6,
        669: 6,
        671: 6,
        673: 6,
        675: 6,
        677: 6,
        678: 6,
        684: 6,
        696: 6,
        688: 6,
        702: 6,
        700: 6,
        704: 6,
        690: 6,
        706: 6,
        612: 6,
        422: 6,
        719: 6,
        717: 6,
        725: 6,
        686: 6,
        739: 6,
        727: 6,
        737: 6,
        743: 6,
        745: 6,
        747: 6,
        749: 6,
        759: 6,
        755: 6,
        763: 6,
        753: 6,
        761: 6,
        751: 6,
        288: 6,
        757: 6,
        741: 6,
        765: 6,
        767: 6,
        769: 6,
        771: 6,
        614: 6,
        616: 6,
        784: 6,
        735: 6,
        733: 6,
        731: 6,
        729: 6,
        782: 6,
        794: 6,
        792: 6,
        232: 6,
        586: 6,
        692: 6,
        680: 6,
        533: 6,
        216: 6,
        382: 6,
        635: 6,
        328: 6,
        870: 6,
        478: 6,
        270: 6,
        284: 6,
        276: 6,
        876: 6,
        846: 6,
        847: 6,
        849: 6,
        850: 6,
        852: 6,
        853: 6,
        866: 6,
        867: 6,
        868: 6,
        869: 6,
        839: 6,
        842: 6,
        841: 6,
        840: 6,
        547: 6,
        631: 6,
        694: 6,
        698: 6,
        212: 6,
        246: 6,
        551: 6,
        450: 6,
        559: 6,
        561: 6,
        197: 6,
        567: 6,
        580: 6,
        584: 6,
        611: 6,
        620: 6,
        665: 6,
        667: 6,
        682: 6,
        710: 6,
        715: 6,
        334: 6,
        890: 6,
        887: 6,
        889: 6,
        886: 6,
        888: 6,
        891: 6,
        434: 6,
        721: 6,
        723: 6,
        897: 6,
        252: 6,
        260: 6,
        256: 6,
        242: 6,
        772: 6,
        892: 6,
        905: 6,
        776: 6,
        774: 6,
        778: 6,
        780: 6,
        906: 6,
        907: 6,
        908: 6,
        910: 6,
        796: 6,
        800: 6,
        802: 6,
        804: 6,
        798: 6,
        894: 6,
        893: 6,
        895: 6,
        791: 6,
        713: 6,
        708: 6,
        565: 6,
        610: 6,
        919: 6,
        917: 6,
        918: 6,
        928: 6,
        929: 6,
        927: 6,
        937: 6,
        933: 6,
        934: 6,
        935: 6,
        936: 6,
        939: 6,
        940: 6,
        938: 6,
        63: 7,
        E12: 7,
        E16: 7,
        E240: 7,
        E212: 7,
        E225: 7,
        E313: 7,
        E311: 7,
        E276: 7,
        E292: 7,
        E302: 7,
        E304: 7,
        E306: 7,
        E308: 7,
        E319: 7,
        E1: 7,
        E3: 7,
        E7: 7,
        E10: 7,
        E11: 7,
        E13: 7,
        E14: 7,
        E17: 7,
        E22: 7,
        E24: 7,
        E26: 7,
        E28: 7,
        E101: 7,
        E103: 7,
        E105: 7,
        E107: 7,
        E109: 7,
        E114: 7,
        E118: 7,
        E119: 7,
        E121: 7,
        E116: 7,
        E165: 7,
        E194: 7,
        E221: 7,
        E227: 7,
        E229: 7,
        E231: 7,
        E233: 7,
        E244: 7,
        E246: 7,
        E248: 7,
        E223: 7,
        E309: 7,
        E318: 7,
        E320: 7,
        E270: 7,
        E286: 7,
        E5: 7,
        E322: 7,
        E9: 7,
        E321: 7,
        E272: 7,
        E288: 7,
        E290: 7,
        E296: 7,
        E327: 7,
        E330: 7,
        E329: 7,
        E328: 7,
        E331: 7,
        E332: 7,
        E333: 7,
        E334: 7,
        E335: 7,
        E336: 7,
        E337: 7,
        E339: 7,
        E340: 7,
        E341: 7,
        E342: 7,
        E343: 7,
        E344: 7,
        E345: 7,
        E346: 7,
        E347: 7,
        E348: 7,
        E349: 7,
        E350: 7,
        E351: 7,
        E353: 7,
        E354: 7,
        E355: 7,
        E352: 7,
        E338: 7,
        E360: 7,
        E357: 7,
        E358: 7,
        E359: 7,
        E278: 7,
        E300: 7,
        E361: 7,
        E362: 7,
        E363: 7,
        E364: 7,
        E365: 7,
        E366: 7,
        E367: 7,
        E368: 7,
        67: 7,
        71: 7,
        75: 7,
        621: 7,
        135: 7,
        108: 7,
        81: 7,
        118: 7,
        120: 7,
        121: 7,
        83: 7,
        85: 7,
        111: 7,
        114: 7,
        117: 7,
        147: 7,
        148: 7,
        149: 7,
        150: 7,
        91: 7,
        69: 7,
        657: 7,
        92: 7,
        87: 7,
        113: 7,
        110: 7,
        112: 7,
        137: 7,
        94: 7,
        101: 7,
        95: 7,
        102: 7,
        103: 7,
        104: 7,
        105: 7,
        119: 7,
        134: 7,
        136: 7,
        138: 7,
        139: 7,
        140: 7,
        141: 7,
        142: 7,
        143: 7,
        600: 7,
        602: 7,
        787: 7,
        806: 7,
        808: 7,
        834: 7,
        828: 7,
        810: 7,
        837: 7,
        822: 7,
        824: 7,
        843: 7,
        844: 7,
        845: 7,
        848: 7,
        851: 7,
        854: 7,
        856: 7,
        857: 7,
        858: 7,
        859: 7,
        860: 7,
        862: 7,
        863: 7,
        861: 7,
        865: 7,
        871: 7,
        872: 7,
        873: 7,
        874: 7,
        875: 7,
        877: 7,
        878: 7,
        879: 7,
        883: 7,
        885: 7,
        882: 7,
        146: 7,
        79: 7,
        557: 7,
        555: 7,
        855: 7,
        864: 7,
        880: 7,
        884: 7,
        896: 7,
        820: 7,
        826: 7,
        899: 7,
        901: 7,
        900: 7,
        903: 7,
        898: 7,
        902: 7,
        904: 7,
        909: 7,
        915: 7,
        916: 7,
        881: 7,
        911: 7,
        914: 7,
        912: 7,
        920: 7,
        913: 7,
        922: 7,
        812: 7,
        941: 7,
        932: 7,
        931: 7,
        836: 7,
        930: 7,
        199: 8,
        E326: 8,
        207: 8,
        195: 8,
        655: 1
    }].reduce((function(t, e) {
        return Object.keys(e).forEach((function(n) {
            t[n] = e[n]
        }
        )),
        t
    }
    ), {}),
    tC.privacy.tagsVendorsAssignation = [tC.privacy.tagsVendorsAssignation || {}, []].reduce((function(t, e) {
        return Object.keys(e).forEach((function(n) {
            t[n] = e[n]
        }
        )),
        t
    }
    ), {}),
    tC.privacy.allCategories = tC.privacy.allCategories || [{
        id: 6,
        label: "Advertising cookies",
        categoryParent: -1,
        description: "Advertising cookies, including those of third parties, are cookies aimed at creating profiles relating to the user and are used to send you promotional messages that are in line with the preferences you have displayed while navigating on the network.<br />\n",
        isUsedInTarget: "",
        subCategories: null,
        tagsId: [11, "E113", "E65", "E63", "E61", "E59", "E57", "E55", "E53", "E51", "E47", "E45", "E43", "E41", "E39", "E35", "E31", "E29", "E37", "E33", "E167", "E49", "E123", "E157", "E196", "E184", "E208", "E186", "E198", "E200", "E219", "E217", "E155", "E249", "E235", "E269", "E252", "E242", "E264", "E266", "E268", "E239", "E206", "E324", "E325", "E370", "E369", "E371", "E372", 15, 13, 93, 23, 168, 163, 151, 158, 159, 160, 161, 162, 165, 175, 166, 167, 169, 171, 173, 201, 205, 214, 244, 272, 282, 298, 300, 326, 348, 350, 356, 412, 436, 438, 442, 444, 448, 264, 266, 454, 456, 458, 262, 274, 462, 464, 466, 470, 254, 224, 228, 472, 474, 476, 332, 268, 250, 368, 370, 374, 378, 394, 400, 486, 488, 490, 492, 494, 498, 500, 502, 506, 416, 230, 296, 310, 312, 316, 510, 362, 222, 388, 414, 294, 218, 480, 468, 322, 512, 514, 402, 516, 376, 522, 524, 526, 528, 318, 496, 504, 508, 530, 210, 398, 531, 535, 537, 539, 541, 545, 258, 549, 302, 553, 563, 569, 208, 248, 418, 236, 308, 314, 484, 240, 570, 572, 576, 324, 366, 482, 342, 582, 588, 590, 320, 543, 364, 518, 598, 410, 404, 406, 408, 304, 226, 238, 420, 424, 278, 280, 286, 344, 346, 354, 352, 460, 358, 360, 380, 384, 430, 432, 220, 234, 452, 330, 336, 520, 338, 592, 306, 594, 372, 604, 606, 608, 623, 625, 446, 440, 643, 645, 386, 390, 392, 396, 647, 292, 649, 574, 637, 651, 290, 426, 639, 641, 578, 653, 633, 629, 627, 428, 596, 659, 661, 618, 663, 340, 669, 671, 673, 675, 677, 678, 684, 696, 688, 702, 700, 704, 690, 706, 612, 422, 719, 717, 725, 686, 739, 727, 737, 743, 745, 747, 749, 759, 755, 763, 753, 761, 751, 288, 757, 741, 765, 767, 769, 771, 614, 616, 784, 735, 733, 731, 729, 782, 794, 792, 232, 586, 692, 680, 533, 216, 382, 635, 328, 870, 478, 270, 284, 276, 876, 846, 847, 849, 850, 852, 853, 866, 867, 868, 869, 839, 842, 841, 840, 547, 631, 694, 698, 212, 246, 551, 450, 559, 561, 197, 567, 580, 584, 611, 620, 665, 667, 682, 710, 715, 334, 890, 887, 889, 886, 888, 891, 434, 721, 723, 897, 252, 260, 256, 242, 772, 892, 905, 776, 774, 778, 780, 906, 907, 908, 910, 796, 800, 802, 804, 798, 894, 893, 895, 791, 713, 708, 565, 610, 919, 917, 918, 928, 929, 927, 937, 933, 934, 935, 936, 939, 940, 938]
    }, {
        id: 7,
        label: "Analytical cookies",
        categoryParent: -1,
        description: "Analytical cookies, including those of third parties, allow us to understand how the platform is being used by users.  These cookies do not collect information regarding your identity, nor any personal information.  The data is processed in an aggregate and anonymous form.<br />\n",
        isUsedInTarget: "",
        subCategories: null,
        tagsId: [63, "E12", "E16", "E240", "E212", "E225", "E313", "E311", "E276", "E292", "E302", "E304", "E306", "E308", "E319", "E1", "E3", "E7", "E10", "E11", "E13", "E14", "E17", "E22", "E24", "E26", "E28", "E101", "E103", "E105", "E107", "E109", "E114", "E118", "E119", "E121", "E116", "E165", "E194", "E221", "E227", "E229", "E231", "E233", "E244", "E246", "E248", "E223", "E309", "E318", "E320", "E270", "E286", "E5", "E322", "E9", "E321", "E272", "E288", "E290", "E296", "E327", "E330", "E329", "E328", "E331", "E332", "E333", "E334", "E335", "E336", "E337", "E339", "E340", "E341", "E342", "E343", "E344", "E345", "E346", "E347", "E348", "E349", "E350", "E351", "E353", "E354", "E355", "E352", "E338", "E360", "E357", "E358", "E359", "E278", "E300", "E361", "E362", "E363", "E364", "E365", "E366", "E367", "E368", 67, 71, 75, 621, 135, 108, 81, 118, 120, 121, 83, 85, 111, 114, 117, 147, 148, 149, 150, 91, 69, 657, 92, 87, 113, 110, 112, 137, 94, 101, 95, 102, 103, 104, 105, 119, 134, 136, 138, 139, 140, 141, 142, 143, 600, 602, 787, 806, 808, 834, 828, 810, 837, 822, 824, 843, 844, 845, 848, 851, 854, 856, 857, 858, 859, 860, 862, 863, 861, 865, 871, 872, 873, 874, 875, 877, 878, 879, 883, 885, 882, 146, 79, 557, 555, 855, 864, 880, 884, 896, 820, 826, 899, 901, 900, 903, 898, 902, 904, 909, 915, 916, 881, 911, 914, 912, 920, 913, 922, 812, 941, 932, 931, 836, 930]
    }, {
        id: 8,
        label: "Functionality cookies",
        categoryParent: -1,
        description: "Functionality cookies are used to activate specific functionalities of the platform and a series of options (for example, language, the products selected for purchase), to improve the service provided.\nIf you disable this type of cookie, some services or certain functions of the platform might not be available or function properly, and you could be forced to change or manually enter some information or preferences each time you visit the platform.<br />",
        isUsedInTarget: "",
        subCategories: null,
        tagsId: [199, "E326", 207, 195]
    }, {
        id: 1,
        label: "Technical cookies",
        categoryParent: -1,
        description: "Technical cookies are cookies that are strictly necessary for the platform to function or to allow you to take advantage of the requested services and content.<br />\nIt is not possible to disable this type of cookie, as this would prevent the platform from functioning properly, and would compromise the use of its content and services.<br />\n",
        isUsedInTarget: "",
        subCategories: null,
        tagsId: [655]
    }, {
        id: 5,
        label: "Social cookies",
        categoryParent: -1,
        description: 'These cookies enable users to share pages and content through third party social media and other platforms. The companies that serve these cookies may also use your information to serve targeted advertising on other platforms.<br />\nFurther detailed information about the specific cookies used on this Platform and the third parties who serve them can be found in our <a href="https://www.cartier.com/en-gb/legal-and-privacy/cookie-policy">Cookie Center</a>.<br />',
        isUsedInTarget: "",
        subCategories: null,
        tagsId: []
    }],
    tC.privacy.includedVendors = tC.privacy.includedVendors || {},
    tC.privacy.minorTags = (tC.privacy.minorTags || []).concat([]).filter(tC.arrayUniqueFilter),
    tC.privacy.setLocale = function(t) {
        tC.privacy.lang = t
    }
    ,
    function() {
        "use strict";
        var t = window.tC;
        null != t && null != t.cact && (t.cact["consent.get"] = function() {
            var e = t.cactUtils.formatArgumentsV2(arguments)
              , n = t.privacy.getConsent({
                pretty: !0
            });
            e.callback(n)
        }
        ,
        t.cact["consent.get"]._tc_version = 2,
        t.cact["consent.onReady"] = function() {
            var e = t.cactUtils.formatArgumentsV2(arguments)
              , n = t.privacy.getConsent({
                pretty: !0
            })
              , i = n.consent.status;
            if ("unset" !== i)
                return n.updateEvent = "set",
                void e.callback(n);
            var a = function() {
                var n = t.privacy.getConsent({
                    pretty: !0
                });
                n.updateEvent = "set",
                e.callback(n)
            };
            t.eventTarget.addEventListener("consent-ready", a)
        }
        ,
        t.cact["consent.onReady"]._tc_version = 2,
        t.cact["consent.onUpdate"] = function() {
            var e = t.cactUtils.formatArgumentsV2(arguments)
              , n = t.privacy.getConsent({
                pretty: !0
            })
              , i = "unset" === n.consent.status ? "set" : "changed"
              , a = function() {
                i = "revoked"
            }
              , r = function() {
                var n = t.privacy.getConsent({
                    pretty: !0
                })
                  , a = i;
                n.updateEvent = a,
                i = "revoked" === a ? "set" : "changed",
                e.callback(n)
            };
            t.eventTarget.addEventListener("consent-update", r),
            t.eventTarget.addEventListener("consent-revoke", a)
        }
        ,
        t.cact["consent.onUpdate"]._tc_version = 2)
    }(),
    null != tC.privacy && !1 === tC.privacy.initialized && tC.privacy.init(),
    tC.extend({
        executeListener50_5181_22: function(t) {
            window.top.postMessage('TC.EX.TRIGGER.FIRED:{"id":50,"name":"DOM ready","idcat":1,"cat":"DOM Ready"}', "*")
        },
        executeListener34_5181_22: function(t) {
            window.top.postMessage('TC.EX.TRIGGER.FIRED:{"id":34,"name":"Click - Create My Account","idcat":3,"cat":"Form submission"}', "*")
        }
    }),
    tC.event = tC.event || {},
    tC.event.virtualPageViewListFunctions = tC.event.virtualPageViewListFunctions || [],
    tC.event.virtualPageViewListIdTags = tC.event.virtualPageViewListIdTags || [],
    -1 == tC.event.virtualPageViewListIdTags.indexOf("478") && (tC.event.virtualPageViewListIdTags.push("478"),
    tC.event.virtualPageViewListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("478") && "true" == tC.internalvars.countryInPinterestScope && (tC.executeTag478_5181_22(t, e),
        tC.launchTag(478, "Pinterest - Base Code", 2418, 5181, 22, 16))
    }
    ))),
    -1 == tC.event.virtualPageViewListIdTags.indexOf("216") && (tC.event.virtualPageViewListIdTags.push("216"),
    tC.event.virtualPageViewListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("216") && (tC.executeTag216_5181_22(t, e),
        tC.launchTag(216, "Facebook - All pages", 2652, 5181, 22, 16))
    }
    ))),
    -1 == tC.event.virtualPageViewListIdTags.indexOf("304") && (tC.event.virtualPageViewListIdTags.push("304"),
    tC.event.virtualPageViewListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("304") && (tC.executeTag304_5181_22(t, e),
        tC.launchTag(304, "DCM - All pages", 2283, 5181, 22, 16))
    }
    ))),
    -1 == tC.event.virtualPageViewListIdTags.indexOf("306") && (tC.event.virtualPageViewListIdTags.push("306"),
    tC.event.virtualPageViewListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("306") && (tC.executeTag306_5181_22(t, e),
        tC.launchTag(306, "Google Ads - All pages", 2143, 5181, 22, 16))
    }
    ))),
    -1 == tC.event.virtualPageViewListIdTags.indexOf("410") && (tC.event.virtualPageViewListIdTags.push("410"),
    tC.event.virtualPageViewListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("410") && (tC.executeTag410_5181_22(t, e),
        tC.launchTag(410, "Adot - All pages", 1272, 5181, 22, 16))
    }
    ))),
    -1 == tC.event.virtualPageViewListIdTags.indexOf("354") && (tC.event.virtualPageViewListIdTags.push("354"),
    tC.event.virtualPageViewListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("354") && (tC.executeTag354_5181_22(t, e),
        tC.launchTag(354, "Sizmek - All pages", 2247, 5181, 22, 16))
    }
    ))),
    -1 == tC.event.virtualPageViewListIdTags.indexOf("424") && (tC.event.virtualPageViewListIdTags.push("424"),
    tC.event.virtualPageViewListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("424") && (tC.executeTag424_5181_22(t, e),
        tC.launchTag(424, "Linkedin - All pages", 1067, 5181, 22, 16))
    }
    ))),
    -1 == tC.event.virtualPageViewListIdTags.indexOf("330") && (tC.event.virtualPageViewListIdTags.push("330"),
    tC.event.virtualPageViewListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("330") && (tc_array_events.stepName.toString().toLowerCase().match(new RegExp("CheckMail".replace(new RegExp("\\*","g"), ".*"),"gi")) || tc_array_events.stepName.toString().toLowerCase().match(new RegExp("ShippingAddress".replace(new RegExp("\\*","g"), ".*"),"gi")) || tc_array_events.stepName.toString().toLowerCase().match(new RegExp("Payment".replace(new RegExp("\\*","g"), ".*"),"gi"))) && (tC.executeTag330_5181_22(t, e),
        tC.launchTag(330, "SA360 - Funnel - Virtual PageView", 2588, 5181, 22, 16))
    }
    ))),
    -1 == tC.event.virtualPageViewListIdTags.indexOf("390") && (tC.event.virtualPageViewListIdTags.push("390"),
    tC.event.virtualPageViewListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("390") && tc_vars.nav_countryCode.toString().toLowerCase().match(new RegExp("CH".replace(new RegExp("\\*","g"), ".*"),"gi")) && (tC.executeTag390_5181_22(t, e),
        tC.launchTag(390, "Xandr - All pages", 26, 5181, 22, 16))
    }
    ))),
    -1 == tC.event.virtualPageViewListIdTags.indexOf("392") && (tC.event.virtualPageViewListIdTags.push("392"),
    tC.event.virtualPageViewListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("392") && tc_vars.nav_countryCode.toString().toLowerCase().match(new RegExp("CH".replace(new RegExp("\\*","g"), ".*"),"gi")) && (tC.executeTag392_5181_22(t, e),
        tC.launchTag(392, "Xandr - Arrival", 26, 5181, 22, 16))
    }
    ))),
    -1 == tC.event.virtualPageViewListIdTags.indexOf("574") && (tC.event.virtualPageViewListIdTags.push("574"),
    tC.event.virtualPageViewListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("574") && tc_array_events.stepName.toString().toLowerCase().match(new RegExp("ShippingAddress".replace(new RegExp("\\*","g"), ".*"),"gi")) && (tC.executeTag574_5181_22(t, e),
        tC.launchTag(574, "Snapchat - Start Checkout", 26, 5181, 22, 16))
    }
    ))),
    -1 == tC.event.virtualPageViewListIdTags.indexOf("586") && (tC.event.virtualPageViewListIdTags.push("586"),
    tC.event.virtualPageViewListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("586") && "true" == tC.internalvars.facebookKeringCountryScope && tc_array_events.stepName.toString().toLowerCase().match(new RegExp("ShippingAddress".replace(new RegExp("\\*","g"), ".*"),"gi")) && (tC.executeTag586_5181_22(t, e),
        tC.launchTag(586, "Facebook - Proceed to checkout", 2652, 5181, 22, 16))
    }
    ))),
    -1 == tC.event.virtualPageViewListIdTags.indexOf("673") && (tC.event.virtualPageViewListIdTags.push("673"),
    tC.event.virtualPageViewListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("673") && tc_vars.nav_countryCode.toString().toLowerCase().match(new RegExp("CH".replace(new RegExp("\\*","g"), ".*"),"gi")) && (tC.executeTag673_5181_22(t, e),
        tC.launchTag(673, "Xaxis - All pages", 75, 5181, 22, 16))
    }
    ))),
    -1 == tC.event.virtualPageViewListIdTags.indexOf("688") && (tC.event.virtualPageViewListIdTags.push("688"),
    tC.event.virtualPageViewListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("688") && tc_vars.nav_countryCode.toString().toLowerCase().match(new RegExp("GB".replace(new RegExp("\\*","g"), ".*"),"gi")) && (tC.executeTag688_5181_22(t, e),
        tC.launchTag(688, "AppNexus - All pages UK", 26, 5181, 22, 16))
    }
    ))),
    -1 == tC.event.virtualPageViewListIdTags.indexOf("723") && (tC.event.virtualPageViewListIdTags.push("723"),
    tC.event.virtualPageViewListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("723") && "FR" == tc_vars.nav_countryCode && (tC.executeTag723_5181_22(t, e),
        tC.launchTag(723, "Tiktok - Pageview", 26, 5181, 22, 16))
    }
    ))),
    -1 == tC.event.virtualPageViewListIdTags.indexOf("765") && (tC.event.virtualPageViewListIdTags.push("765"),
    tC.event.virtualPageViewListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("765") && tc_vars.nav_countryCode.toString().toLowerCase().match(new RegExp("CH".replace(new RegExp("\\*","g"), ".*"),"gi")) && (tC.executeTag765_5181_22(t, e),
        tC.launchTag(765, "TikTok - All pages CH", 26, 5181, 22, 16))
    }
    ))),
    -1 == tC.event.virtualPageViewListIdTags.indexOf("778") && (tC.event.virtualPageViewListIdTags.push("778"),
    tC.event.virtualPageViewListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("778") && tc_vars.nav_stepName.toString().toLowerCase().match(new RegExp("ShippingAddress".replace(new RegExp("\\*","g"), ".*"),"gi")) && (tC.executeTag778_5181_22(t, e),
        tC.launchTag(778, "TikTok - Initiate Checkout - WW", 26, 5181, 22, 16))
    }
    ))),
    -1 == tC.event.virtualPageViewListIdTags.indexOf("784") && (tC.event.virtualPageViewListIdTags.push("784"),
    tC.event.virtualPageViewListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("784") && (tC.executeTag784_5181_22(t, e),
        tC.launchTag(784, "TikTok - Pageview - WW", 26, 5181, 22, 16))
    }
    ))),
    -1 == tC.event.virtualPageViewListIdTags.indexOf("791") && (tC.event.virtualPageViewListIdTags.push("791"),
    tC.event.virtualPageViewListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("791") && (-1 == tc_vars.pguri.toString().toLowerCase().indexOf("sunglasses".toLowerCase()) && -1 == tc_vars.pguri.toString().toLowerCase().indexOf("eyewear".toLowerCase()) || "true" == tC.internalvars.facebookKeringCountryScope && (tC.executeTag791_5181_22(t, e),
        tC.launchTag(791, "Facebook - Kering Eyewear - Pageview - PLP and PDP", 2652, 5181, 22, 16)))
    }
    ))),
    -1 == tC.event.virtualPageViewListIdTags.indexOf("796") && (tC.event.virtualPageViewListIdTags.push("796"),
    tC.event.virtualPageViewListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("796") && "Checkout pages" == tc_vars.rcms_cgGroup && "true" == tC.internalvars.facebookKeringCountryScope && (tC.executeTag796_5181_22(t, e),
        tC.launchTag(796, "Facebook - Kering  Eyewear - PageView - Checkout Funnel", 2652, 5181, 22, 16))
    }
    ))),
    -1 == tC.event.virtualPageViewListIdTags.indexOf("802") && (tC.event.virtualPageViewListIdTags.push("802"),
    tC.event.virtualPageViewListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("802") && "true" == tC.internalvars.facebookKeringCountryScope && tc_array_events.stepName.toString().toLowerCase().match(new RegExp("ShippingAddress".replace(new RegExp("\\*","g"), ".*"),"gi")) && (tC.executeTag802_5181_22(t, e),
        tC.launchTag(802, "Facebook - Kering Eyewear - Proceed  To Checkout", 2652, 5181, 22, 16))
    }
    ))),
    -1 == tC.event.virtualPageViewListIdTags.indexOf("892") && (tC.event.virtualPageViewListIdTags.push("892"),
    tC.event.virtualPageViewListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("892") && (-1 == tc_vars.pguri.toString().toLowerCase().indexOf("sunglasses".toLowerCase()) && -1 == tc_vars.pguri.toString().toLowerCase().indexOf("eyewear".toLowerCase()) || "true" == tC.internalvars.tiktokKeringCountryScope && (tC.executeTag892_5181_22(t, e),
        tC.launchTag(892, "Tiktok - Kering Eyewear - Pageview - PLP and PDP", 2866, 5181, 22, 16)))
    }
    ))),
    -1 == tC.event.virtualPageViewListIdTags.indexOf("898") && (tC.event.virtualPageViewListIdTags.push("898"),
    tC.event.virtualPageViewListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("898") && "Checkout pages" == tc_vars.rcms_cgGroup && "true" == tC.internalvars.tiktokKeringCountryScope && (tC.executeTag898_5181_22(t, e),
        tC.launchTag(898, "Tiktok - Kering  Eyewear - Pageview - Checkout Funnel", 2866, 5181, 22, 16))
    }
    ))),
    -1 == tC.event.virtualPageViewListIdTags.indexOf("899") && (tC.event.virtualPageViewListIdTags.push("899"),
    tC.event.virtualPageViewListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("899") && (-1 == tc_vars.pguri.toString().toLowerCase().indexOf("sunglasses".toLowerCase()) && -1 == tc_vars.pguri.toString().toLowerCase().indexOf("eyewear".toLowerCase()) || "true" == tC.internalvars.snapchatKeringScope && (tC.executeTag899_5181_22(t, e),
        tC.launchTag(899, "Snapchat - Kering - Eywear - Pageview - PLP and PDP", 26, 5181, 22, 16)))
    }
    ))),
    -1 == tC.event.virtualPageViewListIdTags.indexOf("900") && (tC.event.virtualPageViewListIdTags.push("900"),
    tC.event.virtualPageViewListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("900") && "Checkout pages" == tc_vars.rcms_cgGroup && "true" == tC.internalvars.snapchatKeringScope && (tC.executeTag900_5181_22(t, e),
        tC.launchTag(900, "Snapchat - Kering - Eywear - Pageview - Checkout Funnel", 26, 5181, 22, 16))
    }
    ))),
    -1 == tC.event.virtualPageViewListIdTags.indexOf("928") && (tC.event.virtualPageViewListIdTags.push("928"),
    tC.event.virtualPageViewListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("928") && tC.internalvars.tc_pathname.toString().toLowerCase().match(new RegExp("OnePageCheckout/Confirmation".replace(new RegExp("\\*","g"), ".*"),"gi")) && (tC.executeTag928_5181_22(t, e),
        tC.launchTag(928, "Teads - Initiate checkout", 2608, 5181, 22, 16))
    }
    ))),
    tC.event.virtualPageView = function(t, e) {
        tc_array_events = tC.container_5181_22.init_tc_array_events(e);
        for (var n = 0, i = tC.event.virtualPageViewListFunctions.length; n < i; n++)
            tC.event.virtualPageViewListFunctions[n](t, e)
    }
    ,
    tC.event.enh_addcartListFunctions = tC.event.enh_addcartListFunctions || [],
    tC.event.enh_addcartListIdTags = tC.event.enh_addcartListIdTags || [],
    -1 == tC.event.enh_addcartListIdTags.indexOf("547") && (tC.event.enh_addcartListIdTags.push("547"),
    tC.event.enh_addcartListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("547") && "true" == tC.internalvars.countryInPinterestScope && (tC.executeTag547_5181_22(t, e),
        tC.launchTag(547, "Pinterest - Add To Cart", 2418, 5181, 22, 18))
    }
    ))),
    -1 == tC.event.enh_addcartListIdTags.indexOf("242") && (tC.event.enh_addcartListIdTags.push("242"),
    tC.event.enh_addcartListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("242") && (tC.executeTag242_5181_22(t, e),
        tC.launchTag(242, "Snapchat - Add to cart", 26, 5181, 22, 18))
    }
    ))),
    -1 == tC.event.enh_addcartListIdTags.indexOf("386") && (tC.event.enh_addcartListIdTags.push("386"),
    tC.event.enh_addcartListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("386") && tc_vars.nav_countryCode.toString().toLowerCase().match(new RegExp("CH".replace(new RegExp("\\*","g"), ".*"),"gi")) && (tC.executeTag386_5181_22(t, e),
        tC.launchTag(386, "Xandr - AddtoBasket", 26, 5181, 22, 18))
    }
    ))),
    -1 == tC.event.enh_addcartListIdTags.indexOf("344") && (tC.event.enh_addcartListIdTags.push("344"),
    tC.event.enh_addcartListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("344") && (tC.executeTag344_5181_22(t, e),
        tC.launchTag(344, "Sizmek - Add To Cart", 2247, 5181, 22, 18))
    }
    ))),
    -1 == tC.event.enh_addcartListIdTags.indexOf("533") && (tC.event.enh_addcartListIdTags.push("533"),
    tC.event.enh_addcartListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("533") && (tC.executeTag533_5181_22(t, e),
        tC.launchTag(533, "Facebook - Add To Cart", 2652, 5181, 22, 18))
    }
    ))),
    -1 == tC.event.enh_addcartListIdTags.indexOf("592") && (tC.event.enh_addcartListIdTags.push("592"),
    tC.event.enh_addcartListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("592") && (tC.executeTag592_5181_22(t, e),
        tC.launchTag(592, "SA360 - Add To Cart", 2588, 5181, 22, 18))
    }
    ))),
    -1 == tC.event.enh_addcartListIdTags.indexOf("776") && (tC.event.enh_addcartListIdTags.push("776"),
    tC.event.enh_addcartListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("776") && (tC.executeTag776_5181_22(t, e),
        tC.launchTag(776, "TikTok - Add to cart - WW", 26, 5181, 22, 18))
    }
    ))),
    -1 == tC.event.enh_addcartListIdTags.indexOf("800") && (tC.event.enh_addcartListIdTags.push("800"),
    tC.event.enh_addcartListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("800") && "Eyewear" == tc_vars.product_eng_category && "true" == tC.internalvars.facebookKeringCountryScope && (tC.executeTag800_5181_22(t, e),
        tC.launchTag(800, "Facebook - Kering Eyewear - Add To Cart", 2652, 5181, 22, 18))
    }
    ))),
    -1 == tC.event.enh_addcartListIdTags.indexOf("842") && (tC.event.enh_addcartListIdTags.push("842"),
    tC.event.enh_addcartListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("842") && "IT" == tc_vars.nav_countryCode && (tC.executeTag842_5181_22(t, e),
        tC.launchTag(842, "Mediacom - Youtube - Google Ads - Add To Cart - IT", 2572, 5181, 22, 18))
    }
    ))),
    -1 == tC.event.enh_addcartListIdTags.indexOf("894") && (tC.event.enh_addcartListIdTags.push("894"),
    tC.event.enh_addcartListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("894") && "Eyewear" == tc_vars.product_eng_category && "true" == tC.internalvars.tiktokKeringCountryScope && (tC.executeTag894_5181_22(t, e),
        tC.launchTag(894, "Tiktok - Kering  Eyewear - Add to Cart", 2870, 5181, 22, 18))
    }
    ))),
    -1 == tC.event.enh_addcartListIdTags.indexOf("902") && (tC.event.enh_addcartListIdTags.push("902"),
    tC.event.enh_addcartListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("902") && "Eyewear" == tc_vars.product_eng_category && "true" == tC.internalvars.snapchatKeringScope && (tC.executeTag902_5181_22(t, e),
        tC.launchTag(902, "Snapchat - Kering  Eyewear - Add to Cart", 26, 5181, 22, 18))
    }
    ))),
    -1 == tC.event.enh_addcartListIdTags.indexOf("908") && (tC.event.enh_addcartListIdTags.push("908"),
    tC.event.enh_addcartListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("908") && (tC.executeTag908_5181_22(t, e),
        tC.launchTag(908, "Sizmek - DataLayer - Add To Cart", 26, 5181, 22, 18))
    }
    ))),
    -1 == tC.event.enh_addcartListIdTags.indexOf("927") && (tC.event.enh_addcartListIdTags.push("927"),
    tC.event.enh_addcartListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("927") && (tC.executeTag927_5181_22(t, e),
        tC.launchTag(927, "Teads - Add to cart", 2608, 5181, 22, 18))
    }
    ))),
    -1 == tC.event.enh_addcartListIdTags.indexOf("933") && (tC.event.enh_addcartListIdTags.push("933"),
    tC.event.enh_addcartListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("933") && (tC.executeTag933_5181_22(t, e),
        tC.launchTag(933, "CM 360 - Add To Cart", 26, 5181, 22, 18))
    }
    ))),
    tC.event.enh_addcart = function(t, e) {
        tc_array_events = tC.container_5181_22.init_tc_array_events(e);
        for (var n = 0, i = tC.event.enh_addcartListFunctions.length; n < i; n++)
            tC.event.enh_addcartListFunctions[n](t, e)
    }
    ,
    tC.event.virtual_storelocatorListFunctions = tC.event.virtual_storelocatorListFunctions || [],
    tC.event.virtual_storelocatorListIdTags = tC.event.virtual_storelocatorListIdTags || [],
    tC.event.virtual_storelocator = function(t, e) {
        tc_array_events = tC.container_5181_22.init_tc_array_events(e);
        for (var n = 0, i = tC.event.virtual_storelocatorListFunctions.length; n < i; n++)
            tC.event.virtual_storelocatorListFunctions[n](t, e)
    }
    ,
    tC.extend({
        container: {
            reload: function() {
                var t = arguments[0];
                tC.reload_events = !0,
                tC.container_position = 0,
                tC.containerList && tC.each(tC.containerList, (function(e, n) {
                    "object" == typeof tC["container_" + n] && "function" == typeof tC["container_" + n].reload && (tC["container_" + n].reload(t, !0),
                    tC.reload_events = !1)
                }
                ))
            }
        }
    }),
    (a = {}).container_5181_22 = {
        load: function(t, e) {
            tC.container_position++,
            tC.hitCounter_5181_22(),
            this.datalayer(),
            tC.array_launched_tags = [],
            tC.array_launched_tags_keys = [],
            "object" != typeof t && (t = {}),
            "boolean" != typeof e && (e = !1),
            void 0 === t.exclusions && (t.exclusions = []),
            -1 === t.exclusions.indexOf("datastorage") && this.datastorage(),
            -1 === t.exclusions.indexOf("deduplication") && this.deduplication(),
            -1 === t.exclusions.indexOf("internalvars") && this.internalvars(),
            -1 === t.exclusions.indexOf("privacy") && this.privacy(),
            -1 === t.exclusions.indexOf("eventlisteners") && this.eventlisteners(),
            !1 !== tC.reload_events && void 0 !== t.events || (t.events = {}),
            tC.each(t.events, (function(t, e) {
                tC.event && "function" == typeof tC.event[t] && e.length > 0 && (void 0 === e[1] ? tC.event[t](e[0]) : tC.event[t](e[0], e[1]))
            }
            ))
        },
        reload: function(t, e) {
            "boolean" != typeof e && (e = !1),
            e || (tC.container_position = 0,
            tC.reload_events = !0),
            this.load(arguments[0], !0)
        },
        datalayer: function() {
            "undefined" == typeof tc_vars && (window.tc_vars = []);
            var t = "abtests|connection_type|promos|dynamicsearch_firstload|filter_and_look|nav_stepName|position|product_category|order_delivery_date_selected|sfmc_id|nav_GAsection|nav_categoryIdentifier1|env_template|env_work|env_channel|env_version|nav_division|nav_storic_countryCode|pguri|msn_cgGroup|rcms_cgGroup|emerch_cgGroup|nav_countryCode|nav_languageCode|nav_currency|nav_dept|nav_pagetype|nav_section|nav_subsection|nav_section_dept|nav_subsection_dept|nav_page|nav_historicalTP|nav_sessionTP|listname|itemsList|product_mfPartNumber|prddisplay|sr_items|sr_color|sr_size|sr_pricerange|sr_searchoptions|sr_textsearch|productVertical|product_local_reference|product_title|product_category_id|product_micro_id|product_brand|product_color_id|product_status|product_promotion|product_eng_title|product_collection|product_embossed|product_engraved|product_line|prdpersonalized|product_casematerial|product_jewelmaterial|product_leathermaterial|product_strapmaterial|cart_item_size|product_micro|product_size|product_adjusted|product_eng_micro|product_eng_casematerial|product_eng_category|product_eng_collection|product_eng_color|product_eng_jewelmaterial|product_eng_leathermaterial|product_eng_line|product_eng_season_of_sale|product_eng_strapmaterial|product_eng_subcollection|product_engravable|product_adjustable|product_embossable|product_cod8|product_cod10|product_unitprice_ati|product_discount_ati|product_discount_tf|product_unitprice_tf|user_email_sha256|user_externalidentifier|user_Id|user_logged|user_totalorders|user_type|user_email|cart_ispickupinstoreselected|cart_PaymentType|cart_coupon|cart_itemsNo|cart_items|cart_Id|cart_total|cart_subtotal|order_DeliveryType|order_PaymentType|order_tax|order_revenue_eur|order_billing_country|order_shipping_country|order_id|order_itemsNo|order_promotion|order_items|order_amount_ati_without_sf|order_amount_ati_with_sf|order_amount_tf_without_sf|order_amount_tf_with_sf|order_shipping".split("|");
            for (var e in t)
                tc_vars.hasOwnProperty(t[e]) || (tc_vars[t[e]] = "");
            window.top.postMessage("TC.EX.EXT_VARS.RELOAD", "*")
        },
        datastorage: function() {
            window.top.postMessage("TC.EX.DATASTORAGE.RELOAD", "*")
        },
        deduplication: function() {
            tC.dedup && (tC.dedup.LeA = !1,
            tC.dedup.LeAD = !1,
            tC.dedup.LeC = !1,
            tC.dedup.LeCD = !1,
            tC.dedup.LeV = !1,
            tC.dedup.LeVD = !1,
            tC.dedup.FeA = !1,
            tC.dedup.FeAD = !1,
            tC.dedup.FeC = !1,
            tC.dedup.FeCD = !1,
            tC.dedup.FeV = !1,
            tC.dedup.FeVD = !1,
            tC.dedup.AeA = [],
            tC.dedup.AeC = [],
            tC.dedup.AeV = [],
            tC.dedup.init(),
            tC.dedup.setEventList())
        },
        eventlisteners: function() {
            for (var t = document.querySelectorAll("button.submit"), e = 0; e < t.length; e++)
                t[e].removeEventListener("submit", tC.executeListener34_5181_22),
                t[e].addEventListener("submit", tC.executeListener34_5181_22)
        },
        internalvars: function() {
            var t = tC.internalvars_5181_22.listVar;
            if (t.length > 0)
                for (var e = 0; e < t.length; e++)
                    tC.internalvars_5181.initiators["var" + t[e]]();
            window.top.postMessage("TC.EX.INT_VARS.RELOAD", "*")
        },
        privacy: function() {
            tC.privacy && tC.privacy.init()
        },
        init_tc_array_events: function(t) {
            void 0 === t && (t = {});
            var e = "fragrance_sensation|fragrance_discover|fragrance_preference|item_name|video_name|video_position|product_is_in_stock|product_defaultMfPartNumber|chapter|fromPage|discovery|score|pid|page|item_shape_case|name|item_movement|item_budget|category|product_eng_casematerial|univers|brand|product_eng_jewelmaterial|variant|product_eng_leathermaterial|discount_price|product_eng_strapmaterial|quantity|price|category_variant|event|label|discountedPrice_tf|position|price_tf|list|promotion_id|promotion_name|promotion_creative|promotion_position|livechatId|advisorId|productEngravable|filter_and_look|productAdjustable|productEmbossable|product_promotion|storelocator|storelocator_city|storelocator_country|prmid|prmname|prmcreative|prmposition|conversationId|discount_price_ati|associateId|discountedPrice|ratingValue|legacy_macro_id|pguri|ratingFeedbackValue|legacy_micro_id|product_id|productAvailability|product_variant_id|price_ati|promo_id|productSkuMfPartNumber|prdid|promo_name|uri|prdname|promo_creative|prdline|promo_position|prdcollection|prdsubcollection|prdengraved|prdembossed|prdsellable|submitstatus|boutiqueName|prdvariant|productSize|boutique|prdref|purpose|prdcategory|type|prddisplay|appointmentId|prdsize|channel|prdavailability|prdadjusted|product_eng_line|prdpersonalized|step|product_eng_collection|csematerial|product_status|jwlmaterial|strmaterial|option|stepName|lthmaterial|product_sellable|currency|productCaseMaterial|car_category|productJewelryMaterial|car_event|productLeatherMaterial|productStrapMaterial|prdprice|productAdjusted|productEmbossed|productCollection|productEngraved|productLine|product_eng_title|product_mfPartNumber|mfPartNumber|item_size|dataSt|personalizationType|item_diamond|item_material_case|item_dial_colour|item_dial_function|item_strap|item_id|id".split("|");
            for (var n in e)
                t.hasOwnProperty(e[n]) || (t[e[n]] = "");
            return t
        }
    },
    tC.extend(a),
    void 0 === tC.containerList && (tC.containerList = []),
    tC.containerList.push("5181_22"),
    window.tc_array_events = tC.container_5181_22.init_tc_array_events([]),
    window["tC" + n.id_site + "_" + n.id_container] = tC,
    window.postMessage('TC.EX.CONTAINER:{"id":' + n.id_container + ',"ids":' + n.id_site + ',"v":"' + n.containerVersion + '","g":' + n.generatorVersion + ',"p":' + tC.container_position + ',"url":"' + (document.currentScript ? document.currentScript.src : "") + '"}', "*")
}();
tC.container_5181_22.datalayer();
tC.array_launched_tags = [];
tC.array_launched_tags_keys = [];

/*DYNAMIC JS BLOCK 1*/

/*END DYNAMIC JS BLOCK 1*/

/*CUSTOM_JS_BLOCK1*/
function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^s+|s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}
tC.log('DEBUG ' + tc_vars["nav_countryCode"]);
if ((tc_vars["nav_countryCode"] !== "IT") && (tc_vars["nav_countryCode"] !== "it") && (tc_vars["nav_countryCode"] !== "DE") && (tc_vars["nav_countryCode"] !== "de") && (tc_vars["nav_countryCode"] !== "AT") && (tc_vars["nav_countryCode"] !== "at") && (tc_vars["nav_countryCode"] !== "FR") && (tc_vars["nav_countryCode"] !== "fr") && (tc_vars["nav_countryCode"] !== "ES") && (tc_vars["nav_countryCode"] !== "es") && (tc_vars["nav_countryCode"] !== "GB") && (tc_vars["nav_countryCode"] !== "gb") && (tc_vars["nav_countryCode"] !== "BE") && (tc_vars["nav_countryCode"] !== "be") && (tc_vars["nav_countryCode"] !== "BG") && (tc_vars["nav_countryCode"] !== "bg") && (tc_vars["nav_countryCode"] !== "HR") && (tc_vars["nav_countryCode"] !== "hr") && (tc_vars["nav_countryCode"] !== "CZ") && (tc_vars["nav_countryCode"] !== "cz") && (tc_vars["nav_countryCode"] !== "DK") && (tc_vars["nav_countryCode"] !== "dk") && (tc_vars["nav_countryCode"] !== "FI") && (tc_vars["nav_countryCode"] !== "fi") && (tc_vars["nav_countryCode"] !== "GR") && (tc_vars["nav_countryCode"] !== "gr") && (tc_vars["nav_countryCode"] !== "HU") && (tc_vars["nav_countryCode"] !== "hu") && (tc_vars["nav_countryCode"] !== "IE") && (tc_vars["nav_countryCode"] !== "ie") && (tc_vars["nav_countryCode"] !== "LT") && (tc_vars["nav_countryCode"] !== "lt") && (tc_vars["nav_countryCode"] !== "LU") && (tc_vars["nav_countryCode"] !== "lu") && (tc_vars["nav_countryCode"] !== "MT") && (tc_vars["nav_countryCode"] !== "mt") && (tc_vars["nav_countryCode"] !== "NL") && (tc_vars["nav_countryCode"] !== "nl") && (tc_vars["nav_countryCode"] !== "PL") && (tc_vars["nav_countryCode"] !== "pl") && (tc_vars["nav_countryCode"] !== "PT") && (tc_vars["nav_countryCode"] !== "pt") && (tc_vars["nav_countryCode"] !== "RO") && (tc_vars["nav_countryCode"] !== "ro") && (tc_vars["nav_countryCode"] !== "SK") && (tc_vars["nav_countryCode"] !== "sk") && (tc_vars["nav_countryCode"] !== "SE") && (tc_vars["nav_countryCode"] !== "se") && (tc_vars["nav_countryCode"] !== "CH") && (tc_vars["nav_countryCode"] !== "ch") && (tc_vars["nav_countryCode"] !== "MC") && (tc_vars["nav_countryCode"] !== "mc")) {
    tC.privacy.getCN = function() {
        if (tC.getCookie("YEDGESESSION") !== "") {
            return "YEDGESESSION";
        } else if (tC.getCookie("JSESSIONID") !== "") {
            return "JSESSIONID";
        }
    }
    tC.privacy.validRules = function(a) {
        return true;
    }
}
/*END_CUSTOM_JS_BLOCK1*/
if (tC.privacyCookieDisallowed) {
    tC.setCookie('TCPID', '', -1, '', tC.domain());
}
tC.id_site = '5181';
/*VARIABLES_BLOCK*/
tC.internalvars_5181.initiators = tC.internalvars_5181.initiators || {};
tC.internalvars_5181_22 = {
    listVar: []
}
tC.internalvars_5181.initiators.var980 = typeof tC.internalvars_5181.initiators.var980 == "function" ? tC.internalvars_5181.initiators.var980 : function() {
    tC.internalvars.GA4_property = tC.internalvars.GA4_property ? tC.internalvars.GA4_property : "";
}
tC.internalvars_5181.initiators.var980();
tC.internalvars_5181_22.listVar.push(980);
tC.internalvars_5181.initiators.var982 = typeof tC.internalvars_5181.initiators.var982 == "function" ? tC.internalvars_5181.initiators.var982 : function() {
    tC.internalvars.GA4isOrderIdValid = tC.internalvars.GA4isOrderIdValid ? tC.internalvars.GA4isOrderIdValid : "";
}
tC.internalvars_5181.initiators.var982();
tC.internalvars_5181_22.listVar.push(982);
tC.internalvars_5181.initiators.var984 = typeof tC.internalvars_5181.initiators.var984 == "function" ? tC.internalvars_5181.initiators.var984 : function() {
    tC.internalvars.GA_contentgroup1_GA4 = tC.internalvars.GA_contentgroup1_GA4 ? tC.internalvars.GA_contentgroup1_GA4 : "";
}
tC.internalvars_5181.initiators.var984();
tC.internalvars_5181_22.listVar.push(984);
tC.internalvars_5181.initiators.var986 = typeof tC.internalvars_5181.initiators.var986 == "function" ? tC.internalvars_5181.initiators.var986 : function() {
    tC.internalvars.GA4_UserID = tC.internalvars.GA4_UserID ? tC.internalvars.GA4_UserID : "";
}
tC.internalvars_5181.initiators.var986();
tC.internalvars_5181_22.listVar.push(986);
tC.internalvars_5181.initiators.var988 = typeof tC.internalvars_5181.initiators.var988 == "function" ? tC.internalvars_5181.initiators.var988 : function() {
    tC.internalvars.getClientId_GA4 = tC.internalvars.getClientId_GA4 ? tC.internalvars.getClientId_GA4 : "";
}
tC.internalvars_5181.initiators.var988();
tC.internalvars_5181_22.listVar.push(988);
tC.internalvars_5181.initiators.var455 = typeof tC.internalvars_5181.initiators.var455 == "function" ? tC.internalvars_5181.initiators.var455 : function() {
    tC.internalvars.getBooleanToString = tC.internalvars.getBooleanToString ? tC.internalvars.getBooleanToString : "";
}
tC.internalvars_5181.initiators.var455();
tC.internalvars_5181_22.listVar.push(455);
tC.internalvars_5181.initiators.var457 = typeof tC.internalvars_5181.initiators.var457 == "function" ? tC.internalvars_5181.initiators.var457 : function() {
    tC.internalvars.getSizmekId = tC.internalvars.getSizmekId ? tC.internalvars.getSizmekId : "";
}
tC.internalvars_5181.initiators.var457();
tC.internalvars_5181_22.listVar.push(457);
tC.internalvars_5181.initiators.var459 = typeof tC.internalvars_5181.initiators.var459 == "function" ? tC.internalvars_5181.initiators.var459 : function() {
    tC.internalvars.getClientId = tC.internalvars.getClientId ? tC.internalvars.getClientId : "";
}
tC.internalvars_5181.initiators.var459();
tC.internalvars_5181_22.listVar.push(459);
tC.internalvars_5181.initiators.var461 = typeof tC.internalvars_5181.initiators.var461 == "function" ? tC.internalvars_5181.initiators.var461 : function() {
    tC.internalvars.getSessionId = tC.internalvars.getSessionId ? tC.internalvars.getSessionId : "";
}
tC.internalvars_5181.initiators.var461();
tC.internalvars_5181_22.listVar.push(461);
tC.internalvars_5181.initiators.var463 = typeof tC.internalvars_5181.initiators.var463 == "function" ? tC.internalvars_5181.initiators.var463 : function() {
    tC.internalvars.getTimestamp = tC.internalvars.getTimestamp ? tC.internalvars.getTimestamp : "";
}
tC.internalvars_5181.initiators.var463();
tC.internalvars_5181_22.listVar.push(463);
tC.internalvars_5181.initiators.var465 = typeof tC.internalvars_5181.initiators.var465 == "function" ? tC.internalvars_5181.initiators.var465 : function() {
    tC.internalvars.getStringToNa = tC.internalvars.getStringToNa ? tC.internalvars.getStringToNa : "";
}
tC.internalvars_5181.initiators.var465();
tC.internalvars_5181_22.listVar.push(465);
tC.internalvars_5181.initiators.var1 = function() {
    tC.internalvars.tc_fulldomain = window.location.hostname;
}
tC.internalvars_5181.initiators.var1();
tC.internalvars_5181_22.listVar.push(1);
tC.internalvars_5181.initiators.var3 = function() {
    if (tc_vars["nav_sessionTP"] !== "") {
        tC.internalvars.tpcode = tc_vars["nav_sessionTP"];
    } else {
        tC.internalvars.tpcode = tc_vars["nav_historicalTP"];
    }
}
tC.internalvars_5181.initiators.var3();
tC.internalvars_5181_22.listVar.push(3);
tC.internalvars_5181.initiators.var209 = function() {
    tC.internalvars.cookie_affiliation = '';
    function getCookie(c_name) {
        var i, x, y, ARRcookies = document.cookie.split(";");
        for (i = 0; i < ARRcookies.length; i++) {
            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x == c_name) {
                return unescape(y);
            }
        }
    }
    tC.internalvars.cookieTmp = getCookie("AFFILIATION");
    if (tC.internalvars.cookieTmp !== undefined) {
        tC.internalvars.cookieTmp1 = tC.internalvars.cookieTmp.split("=");
        tC.internalvars.cookie_affiliation = tC.internalvars.cookieTmp1[1];
    }
}
tC.internalvars_5181.initiators.var209();
tC.internalvars_5181_22.listVar.push(209);
tC.internalvars_5181.initiators.var217 = function() {
    if (tC.match(new String(tC.getCookie("PARTNER")), 'criteo', "") || tC.match(new String(tC.getCookie("PARTNER")), 'Criteo', "") || tC.match(new String(tC.getCookie("PARTNER")), 'CRITEO', "")) {
        tC.internalvars.criteodedup = "1";
    } else {
        tC.internalvars.criteodedup = "0";
    }
}
tC.internalvars_5181.initiators.var217();
tC.internalvars_5181_22.listVar.push(217);
tC.internalvars_5181.initiators.var219 = function() {
    if (tc_vars["env_channel"] == "desktop") {
        tC.internalvars.criteochannel = "d";
    }
    if (tc_vars["env_channel"] == "mobile") {
        tC.internalvars.criteochannel = "m";
    }
    if (tc_vars["env_channel"] == "tablet") {
        tC.internalvars.criteochannel = "t";
    }
}
tC.internalvars_5181.initiators.var219();
tC.internalvars_5181_22.listVar.push(219);
tC.internalvars_5181.initiators.var251 = function() {
    tC.internalvars.md5_email = "";
}
tC.internalvars_5181.initiators.var251();
tC.internalvars_5181_22.listVar.push(251);
tC.internalvars_5181.initiators.var253 = typeof tC.internalvars_5181.initiators.var253 == "function" ? tC.internalvars_5181.initiators.var253 : function() {
    tC.internalvars.GA_UA = tC.internalvars.GA_UA ? tC.internalvars.GA_UA : "";
}
tC.internalvars_5181.initiators.var253();
tC.internalvars_5181_22.listVar.push(253);
tC.internalvars_5181.initiators.var255 = function() {
    tC.internalvars.UserId = "";
    if ((tC.getCookie("tc_iduserid") !== "") && (tc_vars.user_Id === "")) {
        tC.internalvars.UserId = tC.getCookie("tc_iduserid");
    } else {
        tC.internalvars.UserId = tc_vars.user_Id;
    }
}
tC.internalvars_5181.initiators.var255();
tC.internalvars_5181_22.listVar.push(255);
tC.internalvars_5181.initiators.var259 = typeof tC.internalvars_5181.initiators.var259 == "function" ? tC.internalvars_5181.initiators.var259 : function() {
    tC.internalvars.GA_contentgroup2 = tC.internalvars.GA_contentgroup2 ? tC.internalvars.GA_contentgroup2 : "";
}
tC.internalvars_5181.initiators.var259();
tC.internalvars_5181_22.listVar.push(259);
tC.internalvars_5181.initiators.var261 = typeof tC.internalvars_5181.initiators.var261 == "function" ? tC.internalvars_5181.initiators.var261 : function() {
    tC.internalvars.GA_contentgroup3 = tC.internalvars.GA_contentgroup3 ? tC.internalvars.GA_contentgroup3 : "";
}
tC.internalvars_5181.initiators.var261();
tC.internalvars_5181_22.listVar.push(261);
tC.internalvars_5181.initiators.var277 = typeof tC.internalvars_5181.initiators.var277 == "function" ? tC.internalvars_5181.initiators.var277 : function() {
    tC.internalvars.GA_fnl = tC.internalvars.GA_fnl ? tC.internalvars.GA_fnl : "";
}
tC.internalvars_5181.initiators.var277();
tC.internalvars_5181_22.listVar.push(277);
tC.internalvars_5181.initiators.var281 = typeof tC.internalvars_5181.initiators.var281 == "function" ? tC.internalvars_5181.initiators.var281 : function() {
    tC.internalvars.GA_ClientID = tC.internalvars.GA_ClientID ? tC.internalvars.GA_ClientID : "";
}
tC.internalvars_5181.initiators.var281();
tC.internalvars_5181_22.listVar.push(281);
tC.internalvars_5181.initiators.var283 = function() {
    tC.internalvars.sr_results = "";
    if (tc_vars.env_template == "searchresult") {
        tC.internalvars.sr_results = tc_vars.sr_items.length;
    } else {
        tC.internalvars.sr_results = "NA";
    }
}
tC.internalvars_5181.initiators.var283();
tC.internalvars_5181_22.listVar.push(283);
tC.internalvars_5181.initiators.var285 = typeof tC.internalvars_5181.initiators.var285 == "function" ? tC.internalvars_5181.initiators.var285 : function() {
    tC.internalvars.GA_step = tC.internalvars.GA_step ? tC.internalvars.GA_step : "";
}
tC.internalvars_5181.initiators.var285();
tC.internalvars_5181_22.listVar.push(285);
tC.internalvars_5181.initiators.var315 = function() {
    tC.internalvars.isOrderIdValid = "";
    if (((tc_vars.nav_pagetype === "onepagecheckout") && (tc_vars.env_template === "thankyou")) || (tc_vars.nav_pagetype === "CheckoutPayPalExpress.Thankyou") || ((tc_vars.nav_pagetype === "thankyou") && (tc_vars.env_template === "CheckoutOPC")) || ((tc_vars.nav_pagetype === "CheckoutPayPalExpress.ThankYou") && (tc_vars.env_template === "genericpage")) || ((tc_vars.nav_pagetype === "thankyou") && (tc_vars.env_template === "genericpage"))) {
        var tc_ordIdfromUrl = location.search.split('orderNumber=').splice(1).join('').split('&')[0];
        var tc_ordIdfromCookie = tC.getCookie("tc_idlord");
        if (tc_ordIdfromUrl.toLowerCase() === tc_ordIdfromCookie.toLowerCase()) {
            tC.internalvars.isOrderIdValid = "false";
        } else {
            tC.internalvars.isOrderIdValid = "true";
        }
    }
}
tC.internalvars_5181.initiators.var315();
tC.internalvars_5181_22.listVar.push(315);
tC.internalvars_5181.initiators.var317 = typeof tC.internalvars_5181.initiators.var317 == "function" ? tC.internalvars_5181.initiators.var317 : function() {
    tC.internalvars.GA_dpt = tC.internalvars.GA_dpt ? tC.internalvars.GA_dpt : "";
}
tC.internalvars_5181.initiators.var317();
tC.internalvars_5181_22.listVar.push(317);
tC.internalvars_5181.initiators.var320 = function() {
    tC.internalvars.email_hash = "";
}
tC.internalvars_5181.initiators.var320();
tC.internalvars_5181_22.listVar.push(320);
tC.internalvars_5181.initiators.var321 = function() {
    tC.internalvars.tc_array_url_vars = (function() {
        var qs = window.location.search;
        var params = {}, tokens, re = /[?&]?([^=]+)=([^&]*)/g;
        while (tokens = re.exec(qs)) {
            params[tokens[1]] = tokens[2];
        }
        return params;
    }
    )();
}
tC.internalvars_5181.initiators.var321();
tC.internalvars_5181_22.listVar.push(321);
tC.internalvars_5181.initiators.var322 = typeof tC.internalvars_5181.initiators.var322 == "function" ? tC.internalvars_5181.initiators.var322 : function() {
    tC.internalvars.GA_UserID = tC.internalvars.GA_UserID ? tC.internalvars.GA_UserID : "";
}
tC.internalvars_5181.initiators.var322();
tC.internalvars_5181_22.listVar.push(322);
tC.internalvars_5181.initiators.var329 = typeof tC.internalvars_5181.initiators.var329 == "function" ? tC.internalvars_5181.initiators.var329 : function() {
    tC.internalvars.GA_remarketing = tC.internalvars.GA_remarketing ? tC.internalvars.GA_remarketing : "";
}
tC.internalvars_5181.initiators.var329();
tC.internalvars_5181_22.listVar.push(329);
tC.internalvars_5181.initiators.var330 = typeof tC.internalvars_5181.initiators.var330 == "function" ? tC.internalvars_5181.initiators.var330 : function() {
    tC.internalvars.GA_contentgroup1 = tC.internalvars.GA_contentgroup1 ? tC.internalvars.GA_contentgroup1 : "";
}
tC.internalvars_5181.initiators.var330();
tC.internalvars_5181_22.listVar.push(330);
tC.internalvars_5181.initiators.var331 = function() {
    tC.internalvars.cart_itemsNo = "";
    if (typeof tc_vars.cart_itemsNo !== "undefined" && tc_vars.cart_itemsNo === "") {
        tC.internalvars.cart_itemsNo = "0"
    } else
        tC.internalvars.cart_itemsNo = tc_vars.cart_itemsNo;
}
tC.internalvars_5181.initiators.var331();
tC.internalvars_5181_22.listVar.push(331);
tC.internalvars_5181.initiators.var333 = function() {
    tC.log("tc_vars.env_template: " + tc_vars.env_template);
    switch (tc_vars.env_template) {
    case "genericpage":
        if (typeof window.location.pathname.split('/')[1] !== "undefined" && window.location.pathname.split('/')[1] === "wx") {
            tC.internalvars.IsOutOfStock = "WX";
        } else if (typeof window.document.getElementsByClassName("soldOutItem")[0] !== "undefined") {
            tC.internalvars.IsOutOfStock = "TRUE";
        } else if (typeof window.document.getElementsByClassName("soldOutItem")[1] !== "undefined") {
            tC.internalvars.IsOutOfStock = "TRUE";
        } else if (typeof window.document.getElementsByClassName("soldOutItem")[2] !== "undefined") {
            tC.internalvars.IsOutOfStock = "TRUE";
        } else
            tC.internalvars.IsOutOfStock = "FALSE";
        break;
    case "item":
        if (typeof window.location.pathname.split('/')[1] !== "undefined" && window.location.pathname.split('/')[1] === "wx") {
            tC.internalvars.IsOutOfStock = "WX";
        } else if (typeof window.document.getElementsByClassName("soldOutItem")[0] !== "undefined") {
            tC.internalvars.IsOutOfStock = "TRUE";
        } else if (typeof window.document.getElementsByClassName("soldOutItem")[1] !== "undefined") {
            tC.internalvars.IsOutOfStock = "TRUE";
        } else if (typeof window.document.getElementsByClassName("soldOutItem")[2] !== "undefined") {
            tC.internalvars.IsOutOfStock = "TRUE";
        } else
            tC.internalvars.IsOutOfStock = "FALSE";
        break;
    default:
        tC.internalvars.IsOutOfStock = "NA"
    }
}
tC.internalvars_5181.initiators.var333();
tC.internalvars_5181_22.listVar.push(333);
tC.internalvars_5181.initiators.var335 = function() {
    tC.internalvars.new_arrivals = "";
    if (typeof tc_vars["itemsList"] !== "undefined") {
        if (typeof tc_vars["itemsList"]["Homepage|New_Arrivals"] !== "undefined") {
            tC.internalvars.new_arrivals = tc_vars["itemsList"]["Homepage|New_Arrivals"];
        }
    }
}
tC.internalvars_5181.initiators.var335();
tC.internalvars_5181_22.listVar.push(335);
tC.internalvars_5181.initiators.var338 = function() {
    tC.internalvars.checkout_related = "";
    if (typeof tc_vars["itemsList"] !== "undefined") {
        if (typeof tc_vars["itemsList"]["Checkout|Related"] !== "undefined") {
            tC.internalvars.checkout_related = tc_vars["itemsList"]["Checkout|Related"];
        }
    }
}
tC.internalvars_5181.initiators.var338();
tC.internalvars_5181_22.listVar.push(338);
tC.internalvars_5181.initiators.var339 = function() {
    tC.internalvars.wok = "";
    if (typeof tc_vars["itemsList"] !== "undefined") {
        var keyToFind = "wok"
        completeKey = "",
        arrayKeys = [];
        for (var i in tc_vars["itemsList"]) {
            if (tc_vars["itemsList"].hasOwnProperty(i)) {
                arrayKeys.push(i);
            }
        }
        arrayKeys.forEach(function(key) {
            if (key.indexOf(keyToFind) !== -1) {
                completeKey = key;
            }
        })
        if (typeof tc_vars["itemsList"][completeKey] !== "undefined") {
            tC.internalvars.wok = tc_vars["itemsList"][completeKey];
        }
    }
}
tC.internalvars_5181.initiators.var339();
tC.internalvars_5181_22.listVar.push(339);
tC.internalvars_5181.initiators.var348 = function() {
    tC.internalvars.awin_comGroup = function(a, b) {
        if (typeof tc_vars["order_items"] !== "undefined") {
            switch (tc_vars["order_items"][b][a].toUpperCase()) {
            case "BAGS":
                if (typeof tc_vars["user_totalorders"] !== "undefined") {
                    if ((tc_vars["user_totalorders"] === 0) || (tc_vars["user_totalorders"] === "")) {
                        return "NEW_BAGS";
                    } else {
                        return "Default";
                    }
                } else {
                    return "Default";
                }
                break;
            case "BLOUSES":
                if (typeof tc_vars["user_totalorders"] !== "undefined") {
                    if ((tc_vars["user_totalorders"] === 0) || (tc_vars["user_totalorders"] === "")) {
                        return "NEW_BLOUSES";
                    } else {
                        return "Default";
                    }
                } else {
                    return "Default";
                }
                break;
            case "BODYWEAR":
                if (typeof tc_vars["user_totalorders"] !== "undefined") {
                    if ((tc_vars["user_totalorders"] === 0) || (tc_vars["user_totalorders"] === "")) {
                        return "NEW_BODYWEAR";
                    } else {
                        return "Default";
                    }
                } else {
                    return "Default";
                }
                break;
            case "DRESSES":
                if (typeof tc_vars["user_totalorders"] !== "undefined") {
                    if ((tc_vars["user_totalorders"] === 0) || (tc_vars["user_totalorders"] === "")) {
                        return "NEW_DRESSES";
                    } else {
                        return "Default";
                    }
                } else {
                    return "Default";
                }
                break;
            case "JACKETS":
                if (typeof tc_vars["user_totalorders"] !== "undefined") {
                    if ((tc_vars["user_totalorders"] === 0) || (tc_vars["user_totalorders"] === "")) {
                        return "NEW_JACKETS";
                    } else {
                        return "Default";
                    }
                } else {
                    return "Default";
                }
                break;
            case "JEWELRY":
                if (typeof tc_vars["user_totalorders"] !== "undefined") {
                    if ((tc_vars["user_totalorders"] === 0) || (tc_vars["user_totalorders"] === "")) {
                        return "NEW_JEWELRY";
                    } else {
                        return "Default";
                    }
                } else {
                    return "Default";
                }
                break;
            case "KEYCHAINS":
                if (typeof tc_vars["user_totalorders"] !== "undefined") {
                    if ((tc_vars["user_totalorders"] === 0) || (tc_vars["user_totalorders"] === "")) {
                        return "NEW_KEYCHAINS";
                    } else {
                        return "Default";
                    }
                } else {
                    return "Default";
                }
                break;
            case "KIDSWEAR":
                if (typeof tc_vars["user_totalorders"] !== "undefined") {
                    if ((tc_vars["user_totalorders"] === 0) || (tc_vars["user_totalorders"] === "")) {
                        return "NEW_KIDSWEAR";
                    } else {
                        return "Default";
                    }
                } else {
                    return "Default";
                }
                break;
            case "KNITWEAR":
                if (typeof tc_vars["user_totalorders"] !== "undefined") {
                    if ((tc_vars["user_totalorders"] === 0) || (tc_vars["user_totalorders"] === "")) {
                        return "NEW_KNITWEAR";
                    } else {
                        return "Default";
                    }
                } else {
                    return "Default";
                }
                break;
            case "LIFESTYLE":
                if (typeof tc_vars["user_totalorders"] !== "undefined") {
                    if ((tc_vars["user_totalorders"] === 0) || (tc_vars["user_totalorders"] === "")) {
                        return "NEW_LIFESTYLE";
                    } else {
                        return "Default";
                    }
                } else {
                    return "Default";
                }
                break;
            case "OUTERWEAR":
                if (typeof tc_vars["user_totalorders"] !== "undefined") {
                    if ((tc_vars["user_totalorders"] === 0) || (tc_vars["user_totalorders"] === "")) {
                        return "NEW_OUTERWEAR";
                    } else {
                        return "Default";
                    }
                } else {
                    return "Default";
                }
                break;
            case "PANTS":
                if (typeof tc_vars["user_totalorders"] !== "undefined") {
                    if ((tc_vars["user_totalorders"] === 0) || (tc_vars["user_totalorders"] === "")) {
                        return "NEW_PANTS";
                    } else {
                        return "Default";
                    }
                } else {
                    return "Default";
                }
                break;
            case "SHIRTS":
                if (typeof tc_vars["user_totalorders"] !== "undefined") {
                    if ((tc_vars["user_totalorders"] === 0) || (tc_vars["user_totalorders"] === "")) {
                        return "NEW_SHIRTS";
                    } else {
                        return "Default";
                    }
                } else {
                    return "Default";
                }
                break;
            case "SHOES":
                if (typeof tc_vars["user_totalorders"] !== "undefined") {
                    if ((tc_vars["user_totalorders"] === 0) || (tc_vars["user_totalorders"] === "")) {
                        return "NEW_SHOES";
                    } else {
                        return "Default";
                    }
                } else {
                    return "Default";
                }
                break;
            case "SKIRTS":
                if (typeof tc_vars["user_totalorders"] !== "undefined") {
                    if ((tc_vars["user_totalorders"] === 0) || (tc_vars["user_totalorders"] === "")) {
                        return "NEW_SKIRTS";
                    } else {
                        return "Default";
                    }
                } else {
                    return "Default";
                }
                break;
            case "SMALL LEATHER GOODS":
                if (typeof tc_vars["user_totalorders"] !== "undefined") {
                    if ((tc_vars["user_totalorders"] === 0) || (tc_vars["user_totalorders"] === "")) {
                        return "NEW_SMALL_LEATHER_GOODS";
                    } else {
                        return "Default";
                    }
                } else {
                    return "Default";
                }
                break;
            case "SOFT ACCESSORIES":
                if (typeof tc_vars["user_totalorders"] !== "undefined") {
                    if ((tc_vars["user_totalorders"] === 0) || (tc_vars["user_totalorders"] === "")) {
                        return "NEW_SOFT_ACCESSORIES";
                    } else {
                        return "Default";
                    }
                } else {
                    return "Default";
                }
                break;
            case "SUNGLASSES":
                if (typeof tc_vars["user_totalorders"] !== "undefined") {
                    if ((tc_vars["user_totalorders"] === 0) || (tc_vars["user_totalorders"] === "")) {
                        return "NEW_SUNGLASSES";
                    } else {
                        return "Default";
                    }
                } else {
                    return "Default";
                }
                break;
            case "SWEARTSHIRTS":
                if (typeof tc_vars["user_totalorders"] !== "undefined") {
                    if ((tc_vars["user_totalorders"] === 0) || (tc_vars["user_totalorders"] === "")) {
                        return "NEW_SWEARTSHIRTS";
                    } else {
                        return "Default";
                    }
                } else {
                    return "Default";
                }
                break;
            case "T-SHIRTS":
                if (typeof tc_vars["user_totalorders"] !== "undefined") {
                    if ((tc_vars["user_totalorders"] === 0) || (tc_vars["user_totalorders"] === "")) {
                        return "NEW_T-SHIRTS";
                    } else {
                        return "Default";
                    }
                } else {
                    return "Default";
                }
                break;
            case "WATCHES":
                if (typeof tc_vars["user_totalorders"] !== "undefined") {
                    if ((tc_vars["user_totalorders"] === 0) || (tc_vars["user_totalorders"] === "")) {
                        return "NEW_WATCHES";
                    } else {
                        return "Default";
                    }
                } else {
                    return "Default";
                }
                break;
            default:
                return "Default";
                break;
            }
        }
    }
    ;
}
tC.internalvars_5181.initiators.var348();
tC.internalvars_5181_22.listVar.push(348);
tC.internalvars_5181.initiators.var349 = function() {
    var tc_internalvars_productonsale = '';
    if (typeof ga != "undefined") {
        if ((!(tC.getCookie("tc_uspos").lenght)) && (tC.getCookie("tc_uspos") !== 'YES')) {
            if (tc_vars.env_template === 'item') {
                if (tc_vars.product_unitprice_tf - tc_vars.product_discount_tf === 0) {
                    tC.internalvars.productonsale = "NO"
                    tC.log("NO");
                    tC.log("cookie non settato");
                } else if (tc_vars.product_unitprice_tf - tc_vars.product_discount_tf !== 0) {
                    tC.internalvars.productonsale = "YES"
                    tC.setCookie("tc_uspos", "YES");
                    a = tC.getCookie("tc_uspos");
                    tC.log(a);
                    tC.log("set cookie");
                    tC.log("new user")
                }
            }
        } else {
            if (tc_vars.env_template === 'item') {
                if (tc_vars.product_unitprice_tf - tc_vars.product_discount_tf === 0) {
                    tC.internalvars.productonsale = "NO"
                    tC.log("Cookie presente");
                } else if (tc_vars.product_unitprice_tf - tc_vars.product_discount_tf !== 0) {
                    tC.internalvars.productonsale = "YES"
                    tC.log("YES now");
                    tC.log("old user");
                    tC.log("cookie not overwritten");
                }
            }
        }
    }
}
tC.internalvars_5181.initiators.var349();
tC.internalvars_5181_22.listVar.push(349);
tC.internalvars_5181.initiators.var351 = function() {
    tC.internalvars.productonsale_impres = '';
    if (typeof ga != "undefined") {
        if ((!(tC.getCookie("tc_uspos").lenght)) && (tC.getCookie("tc_uspos") !== 'YES')) {
            if (tc_vars.env_template === 'item') {
                if (tc_vars.product_unitprice_tf - tc_vars.product_discount_tf === 0) {
                    tC.internalvars.productonsale = "NO"
                    tC.log("NO");
                } else if (tc_vars.product_unitprice_tf - tc_vars.product_discount_tf !== 0) {
                    tC.internalvars.productonsale = "YES"
                    tC.log("setto il cookie");
                    tC.setCookie("tc_uspos", "YES");
                    a = tC.getCookie("tc_uspos");
                    tC.log(a);
                    tC.log('nuovo utente')
                }
            }
        } else {
            if (tc_vars.env_template === 'item') {
                if (tc_vars.product_unitprice_tf - tc_vars.product_discount_tf === 0) {
                    tC.internalvars.productonsale = "NO"
                    tC.log("Cookie presente");
                } else if (tc_vars.product_unitprice_tf - tc_vars.product_discount_tf !== 0) {
                    tC.internalvars.productonsale = "YES"
                    tC.log("YES now");
                    tC.log("Cookie non sovrascritto");
                }
            }
        }
    }
}
tC.internalvars_5181.initiators.var351();
tC.internalvars_5181_22.listVar.push(351);
tC.internalvars_5181.initiators.var355 = function() {
    tC.internalvars.productonsale_list = function(a, b) {
        tC.internalvars.resultDif = parseFloat(a[b]["item_unitprice_tf"]) - parseFloat(a[b]["item_discount_tf"]);
        if (tC.internalvars.resultDif === 0) {
            return "NO";
        } else {
            return "YES";
        }
    }
    ;
}
tC.internalvars_5181.initiators.var355();
tC.internalvars_5181_22.listVar.push(355);
tC.internalvars_5181.initiators.var356 = function() {
    tC.internalvars.prodonsale_cart_list = function(a, b) {
        tC.internalvars.resultDif = parseFloat(a[b]["cart_item_unitprice_tf"]) - parseFloat(a[b]["cart_item_discount_tf"]);
        if (tC.internalvars.resultDif === 0) {
            return "NO";
        } else {
            return "YES";
        }
    }
    ;
}
tC.internalvars_5181.initiators.var356();
tC.internalvars_5181_22.listVar.push(356);
tC.internalvars_5181.initiators.var357 = function() {
    tC.internalvars.prodonsale_thk_list = function(a, b) {
        tC.internalvars.resultDif = parseFloat(a[b]["order_item_unitprice_tf"]) - parseFloat(a[b]["order_item_discount_tf"]);
        if (tC.internalvars.resultDif === 0) {
            return "NO";
        } else {
            return "YES";
        }
    }
    ;
}
tC.internalvars_5181.initiators.var357();
tC.internalvars_5181_22.listVar.push(357);
tC.internalvars_5181.initiators.var358 = function() {
    tC.internalvars.promoCod10 = "51122474XD,45351795KE,45351709CF,45351722ST,45351749BT,45351740TW,45367779OL,45370917WU,45358171HT,45358176PV,45365640QO,45358126MN,45366535MO,45358280IH,45370839KR,45370837QO,45358435XT,45358168JV,45358099EK,45358111BT,45368927OR,45369590UM,45358198KB,45370975RD,45369009FJ,45358195PU,45370974CI,45369008WD,45358308XE,45358269JM,45370822BA,45370780HS,45370716DO,45370799GH,45370811EB,45370723FU,45370913BC,45370911PN,45367775PF,45370848SD,45358116MJ,45358153VX,45358104QP,45358189DO,45370828KD,45370695JW,45370698GQ,45358151WX,45358105AA,45358178QD,45358422RU,45358446WT,45358387SD,45369732FH,45358100KA,45358432TW,45370601XJ,45358129AA,45369731QC,45358113SW,45370844VM,45370840KA,45358159MO,45358397JG,45370600IP,45358407HV,45358109GK,45370845KA,45358484RU";
}
tC.internalvars_5181.initiators.var358();
tC.internalvars_5181_22.listVar.push(358);
tC.internalvars_5181.initiators.var359 = function() {
    tC.internalvars.apply_promoCode = function(a, b) {
        tC.internalvars.result = tc_vars["cart_coupon"].lastIndexOf("-");
        if (tC.internalvars.result === -1) {
            return tc_vars["order_items"][b][a];
        } else {
            if (tc_vars["cart_coupon"].indexOf("KTUESDAY") > -1) {
                if (tC.internalvars.promoCod10.indexOf(tc_vars["order_items"][b]["order_item_cod10"].toUpperCase()) > -1) {
                    tC.internalvars.perc = tc_vars["cart_coupon"].substring((tC.internalvars.result + 1), tc_vars["cart_coupon"].length);
                    return (parseFloat(tc_vars["order_items"][b][a]) - (parseFloat(tc_vars["order_items"][b][a]) * parseFloat("0." + tC.internalvars.perc))).toFixed(2)
                }
            } else {
                tC.internalvars.perc = tc_vars["cart_coupon"].substring((tC.internalvars.result + 1), tc_vars["cart_coupon"].length);
                return (parseFloat(tc_vars["order_items"][b][a]) - (parseFloat(tc_vars["order_items"][b][a]) * parseFloat("0." + tC.internalvars.perc))).toFixed(2)
            }
        }
    }
    ;
}
tC.internalvars_5181.initiators.var359();
tC.internalvars_5181_22.listVar.push(359);
tC.internalvars_5181.initiators.var362 = function() {
    tC.internalvars.discount_segment = (function() {
        return {
            getSegment: function(a, b) {
                if (a === b) {
                    return "Full Price";
                } else if ((1 - a / b) > 0 && (1 - a / b) <= 0.1) {
                    return "up to 10%";
                } else if ((1 - a / b) > 0.1 && (1 - a / b) <= 0.2) {
                    return "from 10% to 20%";
                } else if ((1 - a / b) > 0.2 && (1 - a / b) <= 0.3) {
                    return "from 20% to 30%";
                } else if ((1 - a / b) > 0.3 && (1 - a / b) <= 0.4) {
                    return "from 30% to 40%";
                } else if ((1 - a / b) > 0.4 && (1 - a / b) <= 0.5) {
                    return "from 40% to 50%";
                } else if ((1 - a / b) > 0.5 && (1 - a / b) <= 0.6) {
                    return "from 50% to 60%";
                } else if (a > b) {
                    return "Unknown";
                } else {
                    return "60% or more";
                }
                return "";
            }
        };
    }
    )();
}
tC.internalvars_5181.initiators.var362();
tC.internalvars_5181_22.listVar.push(362);
tC.internalvars_5181.initiators.var363 = function() {
    tC.internalvars.ABtests = "";
    if (typeof tc_vars["abtests"] !== "undefined") {
        if (typeof tc_vars["abtests"]["0"] !== "undefined") {
            if (typeof tc_vars["abtests"]["0"]["Active"] !== "undefined") {
                if (tc_vars["abtests"]["0"]["Active"] === true) {
                    tC.internalvars.ABtests = "si";
                } else
                    tC.internalvars.ABtests = "no"
            }
        }
    }
}
tC.internalvars_5181.initiators.var363();
tC.internalvars_5181_22.listVar.push(363);
tC.internalvars_5181.initiators.var379 = function() {
    tC.internalvars.listName = "";
    if (tc_vars["nav_pagetype"] === "categories") {
        tC.internalvars.listName = tc_vars["nav_GAsection"] + '|' + tc_vars["nav_section_dept"] + '_' + tc_vars["nav_dept"];
    } else if (tc_vars["nav_pagetype"] === "searchresult") {
        tC.internalvars.listName = tc_vars["nav_GAsection"] + '|' + "textsearch";
    }
}
tC.internalvars_5181.initiators.var379();
tC.internalvars_5181_22.listVar.push(379);
tC.internalvars_5181.initiators.var384 = function() {
    tC.internalvars.yOrb = "";
    if (typeof tC.getCookie("yOrbRD") !== "undefined") {
        if (tC.getCookie("yOrbRD").indexOf("loggedin") !== -1) {
            tC.internalvars.yOrb = tC.getCookie("yOrbRD").substring(0, 41);
        } else {
            tC.internalvars.yOrb = tC.getCookie("yOrbRD");
        }
    }
}
tC.internalvars_5181.initiators.var384();
tC.internalvars_5181_22.listVar.push(384);
tC.internalvars_5181.initiators.var385 = typeof tC.internalvars_5181.initiators.var385 == "function" ? tC.internalvars_5181.initiators.var385 : function() {
    tC.internalvars.baseDomain = tC.internalvars.baseDomain ? tC.internalvars.baseDomain : "";
}
tC.internalvars_5181.initiators.var385();
tC.internalvars_5181_22.listVar.push(385);
tC.internalvars_5181.initiators.var466 = function() {
    tC.internalvars.userLogged = "";
    switch (tc_vars["user_logged"]) {
    case false:
        tC.internalvars.userLogged = "notLogged";
        break;
    case true:
        tC.internalvars.userLogged = "logged";
        break;
    default:
        tC.internalvars.userLogged = "_not-set_";
        break;
    }
}
tC.internalvars_5181.initiators.var466();
tC.internalvars_5181_22.listVar.push(466);
tC.internalvars_5181.initiators.var491 = typeof tC.internalvars_5181.initiators.var491 == "function" ? tC.internalvars_5181.initiators.var491 : function() {
    tC.internalvars.startCuralate = tC.internalvars.startCuralate ? tC.internalvars.startCuralate : "";
}
tC.internalvars_5181.initiators.var491();
tC.internalvars_5181_22.listVar.push(491);
tC.internalvars_5181.initiators.var495 = function() {
    tC.internalvars.getEngraving = (function() {
        return {
            getEngraving: function(a) {
                if (a === "Engraving") {
                    return "Yes";
                } else if (a === "Embossing") {
                    return "No";
                } else {
                    return "No";
                }
            }
        };
    }
    )();
}
tC.internalvars_5181.initiators.var495();
tC.internalvars_5181_22.listVar.push(495);
tC.internalvars_5181.initiators.var497 = function() {
    tC.internalvars.getEmbossing = (function() {
        return {
            getEmbossing: function(a) {
                if (a === "Embossing") {
                    return "Yes";
                } else if (a === "Engraving") {
                    return "No";
                } else {
                    return "No";
                }
            }
        };
    }
    )();
}
tC.internalvars_5181.initiators.var497();
tC.internalvars_5181_22.listVar.push(497);
tC.internalvars_5181.initiators.var500 = function() {
    tC.internalvars.tc_url = document.location.href;
}
tC.internalvars_5181.initiators.var500();
tC.internalvars_5181_22.listVar.push(500);
tC.internalvars_5181.initiators.var502 = function() {
    tC.internalvars.tc_pathname = window.location.pathname;
}
tC.internalvars_5181.initiators.var502();
tC.internalvars_5181_22.listVar.push(502);
tC.internalvars_5181.initiators.var508 = function() {
    tC.internalvars.ricFacebookID = "";
    switch (true) {
    case /www\.cartier\.mx/.test(tC.internalvars.tc_url):
    case /stores\.cartier\.com\/fr_ch/.test(tC.internalvars.tc_url):
        tC.internalvars.ricFacebookID = "534983596943545";
        break;
    case /stores\.cartier\.com\/de_ch/.test(tC.internalvars.tc_url):
    case /stores\.cartier\.com\/fr_ch/.test(tC.internalvars.tc_url):
        tC.internalvars.ricFacebookID = "699544613813737";
        break;
    case /www\.cartier\.com\.br/.test(tC.internalvars.tc_url):
    case /stores\.cartier\.com\/pt_br/.test(tC.internalvars.tc_url):
        tC.internalvars.ricFacebookID = "524968094611867";
        break;
    default:
        tC.internalvars.ricFacebookID = "109942476021623"
    }
}
tC.internalvars_5181.initiators.var508();
tC.internalvars_5181_22.listVar.push(508);
tC.internalvars_5181.initiators.var510 = function() {
    tC.internalvars.ricCartNameArray = [];
    if (tc_vars["cart_items"] !== undefined) {
        for (var i = 0; i < tc_vars["cart_items"].length; i++) {
            tC.internalvars.ricCartNameArray.push(tc_vars["cart_items"][i].cart_item_name)
        }
    }
}
tC.internalvars_5181.initiators.var510();
tC.internalvars_5181_22.listVar.push(510);
tC.internalvars_5181.initiators.var512 = function() {
    tC.internalvars.ricCartCategoryArray = [];
    if (tc_vars["cart_items"] !== undefined) {
        for (var i = 0; i < tc_vars["cart_items"].length; i++) {
            tC.internalvars.ricCartCategoryArray.push(tc_vars["cart_items"][i].cart_item_micro_category)
        }
    }
}
tC.internalvars_5181.initiators.var512();
tC.internalvars_5181_22.listVar.push(512);
tC.internalvars_5181.initiators.var514 = function() {
    tC.internalvars.ricCartIDArray = [];
    if (tc_vars["cart_items"] !== undefined) {
        for (var i = 0; i < tc_vars["cart_items"].length; i++) {
            tC.internalvars.ricCartIDArray.push((tc_vars["cart_items"][i].cart_item_mfPartNumber).replace(/^CR/i, ""));
        }
    }
}
tC.internalvars_5181.initiators.var514();
tC.internalvars_5181_22.listVar.push(514);
tC.internalvars_5181.initiators.var518 = function() {
    tC.internalvars.ricOrderNameArray = [];
    if (tc_vars["order_items"] !== undefined) {
        for (var i = 0; i < tc_vars["order_items"].length; i++) {
            tC.internalvars.ricOrderNameArray.push(tc_vars["order_items"][i].order_item_name)
        }
    }
}
tC.internalvars_5181.initiators.var518();
tC.internalvars_5181_22.listVar.push(518);
tC.internalvars_5181.initiators.var520 = function() {
    tC.internalvars.ricOrderCatArray = [];
    if (tc_vars["order_items"] !== undefined) {
        for (var i = 0; i < tc_vars["order_items"].length; i++) {
            tC.internalvars.ricOrderCatArray.push(tc_vars["order_items"][i].order_item_micro_category)
        }
    }
}
tC.internalvars_5181.initiators.var520();
tC.internalvars_5181_22.listVar.push(520);
tC.internalvars_5181.initiators.var522 = function() {
    tC.internalvars.ricOrderIDArray = [];
    if (tc_vars["order_items"] !== undefined) {
        for (var i = 0; i < tc_vars["order_items"].length; i++) {
            tC.internalvars.ricOrderIDArray.push((tc_vars["order_items"][i].order_item_mfPartNumber).replace(/^CR/i, ''));
        }
    }
}
tC.internalvars_5181.initiators.var522();
tC.internalvars_5181_22.listVar.push(522);
tC.internalvars_5181.initiators.var534 = function() {
    tC.internalvars.amazonExFchId = "416613";
}
tC.internalvars_5181.initiators.var534();
tC.internalvars_5181_22.listVar.push(534);
tC.internalvars_5181.initiators.var536 = function() {
    tC.internalvars.xandrSiteId = "a107d94b-9656-42e0-bc90-a22b4316038b";
}
tC.internalvars_5181.initiators.var536();
tC.internalvars_5181_22.listVar.push(536);
tC.internalvars_5181.initiators.var538 = function() {
    tC.internalvars.mInsightTagId = "";
    switch (true) {
    case tc_vars["nav_countryCode"] == "GB":
        tC.internalvars.mInsightTagId = "V2_979344";
        break;
    case tc_vars["nav_countryCode"] == "DE":
        tC.internalvars.mInsightTagId = "V2_977203";
        break;
    case tc_vars["nav_countryCode"] == "FR":
        tC.internalvars.mInsightTagId = "V2_975999";
        break;
    case tc_vars["nav_countryCode"] == "IT":
        tC.internalvars.mInsightTagId = "V2_995410";
        break;
    case tc_vars["nav_countryCode"] == "CH":
        tC.internalvars.mInsightTagId = "V2_996901";
        break;
    default:
        tC.internalvars.mInsightTagId = "_not-set_";
    }
}
tC.internalvars_5181.initiators.var538();
tC.internalvars_5181_22.listVar.push(538);
tC.internalvars_5181.initiators.var540 = function() {
    tC.internalvars.ttdClashAdvId = "xfr07dm";
}
tC.internalvars_5181.initiators.var540();
tC.internalvars_5181_22.listVar.push(540);
tC.internalvars_5181.initiators.var542 = function() {
    tC.internalvars.TTD = "3";
}
tC.internalvars_5181.initiators.var542();
tC.internalvars_5181_22.listVar.push(542);
tC.internalvars_5181.initiators.var546 = function() {
    tC.internalvars.pepperjamId = "2792005782";
}
tC.internalvars_5181.initiators.var546();
tC.internalvars_5181_22.listVar.push(546);
tC.internalvars_5181.initiators.var548 = function() {
    tC.internalvars.dv36EoyNov19SrcId = "9753157";
}
tC.internalvars_5181.initiators.var548();
tC.internalvars_5181_22.listVar.push(548);
tC.internalvars_5181.initiators.var550 = function() {
    tC.internalvars.dv360EoyNov19TypeId = "invmedia";
}
tC.internalvars_5181.initiators.var550();
tC.internalvars_5181_22.listVar.push(550);
tC.internalvars_5181.initiators.var552 = function() {
    tC.internalvars.yahooJpRetargetingId = "G6ZTAHMFRJ";
}
tC.internalvars_5181.initiators.var552();
tC.internalvars_5181_22.listVar.push(552);
tC.internalvars_5181.initiators.var554 = function() {
    tC.internalvars.bingId = "5436491";
}
tC.internalvars_5181.initiators.var554();
tC.internalvars_5181_22.listVar.push(554);
tC.internalvars_5181.initiators.var556 = function() {
    tC.internalvars.mobkoiSrcId = "8151765";
}
tC.internalvars_5181.initiators.var556();
tC.internalvars_5181_22.listVar.push(556);
tC.internalvars_5181.initiators.var558 = function() {
    tC.internalvars.mobkoiTypeId = "2019x0";
}
tC.internalvars_5181.initiators.var558();
tC.internalvars_5181_22.listVar.push(558);
tC.internalvars_5181.initiators.var560 = function() {
    tC.internalvars.leFigaroEventId = "Mqu-hAIq";
}
tC.internalvars_5181.initiators.var560();
tC.internalvars_5181_22.listVar.push(560);
tC.internalvars_5181.initiators.var562 = function() {
    tC.internalvars.elleEventId = "Kvz-vVwH";
}
tC.internalvars_5181.initiators.var562();
tC.internalvars_5181_22.listVar.push(562);
tC.internalvars_5181.initiators.var564 = function() {
    tC.internalvars.mozzooPm = "1681465";
}
tC.internalvars_5181.initiators.var564();
tC.internalvars_5181_22.listVar.push(564);
tC.internalvars_5181.initiators.var566 = function() {
    tC.internalvars.aduxId = "1112864";
}
tC.internalvars_5181.initiators.var566();
tC.internalvars_5181_22.listVar.push(566);
tC.internalvars_5181.initiators.var568 = function() {
    tC.internalvars.emoteevTagId = "1734";
}
tC.internalvars_5181.initiators.var568();
tC.internalvars_5181_22.listVar.push(568);
tC.internalvars_5181.initiators.var570 = function() {
    tC.internalvars.sizmekTagIdUS = "10325";
}
tC.internalvars_5181.initiators.var570();
tC.internalvars_5181_22.listVar.push(570);
tC.internalvars_5181.initiators.var572 = function() {
    tC.internalvars.lineTagIdJp = "1cfe6673-2e6f-4018-913f-b90a1b358194";
}
tC.internalvars_5181.initiators.var572();
tC.internalvars_5181_22.listVar.push(572);
tC.internalvars_5181.initiators.var574 = function() {
    tC.internalvars.yahooPurchaseIdJp = "oifbDHsOLDUoO_Q7YLF3";
}
tC.internalvars_5181.initiators.var574();
tC.internalvars_5181_22.listVar.push(574);
tC.internalvars_5181.initiators.var576 = function() {
    tC.internalvars.yahooConvLabelIdJp = "O4N97ADDRAL3U2JFQJV578134";
}
tC.internalvars_5181.initiators.var576();
tC.internalvars_5181_22.listVar.push(576);
tC.internalvars_5181.initiators.var578 = function() {
    tC.internalvars.dbmTypeId = "invmedia";
}
tC.internalvars_5181.initiators.var578();
tC.internalvars_5181_22.listVar.push(578);
tC.internalvars_5181.initiators.var580 = function() {
    tC.internalvars.dbmIdUs = "8437420";
}
tC.internalvars_5181.initiators.var580();
tC.internalvars_5181_22.listVar.push(580);
tC.internalvars_5181.initiators.var584 = function() {
    tC.internalvars.sizmekArrivalId = "494058";
}
tC.internalvars_5181.initiators.var584();
tC.internalvars_5181_22.listVar.push(584);
tC.internalvars_5181.initiators.var586 = function() {
    tC.internalvars.sa360CounterTypeId = "car-c";
}
tC.internalvars_5181.initiators.var586();
tC.internalvars_5181_22.listVar.push(586);
tC.internalvars_5181.initiators.var588 = function() {
    tC.internalvars.sa360SalesTypeId = "car-s";
}
tC.internalvars_5181.initiators.var588();
tC.internalvars_5181_22.listVar.push(588);
tC.internalvars_5181.initiators.var606 = function() {
    tC.internalvars.teadsAdvertiserId = "10366";
}
tC.internalvars_5181.initiators.var606();
tC.internalvars_5181_22.listVar.push(606);
tC.internalvars_5181.initiators.var590 = function() {
    tC.internalvars.sa360AdvId = "9271966";
}
tC.internalvars_5181.initiators.var590();
tC.internalvars_5181_22.listVar.push(590);
tC.internalvars_5181.initiators.var594 = function() {
    tC.internalvars.mInsightMacauSanyaId = "";
    switch (true) {
    case /cartier\.hk\/en\-hk\/maison\/events\/MacaoTRDiamond\.html/.test(tC.internalvars.tc_url):
        tC.internalvars.mInsightMacauSanyaId = "V2_903195";
        break;
    case /cartier\.hk\/zh\-hk\/maison\/events\/MacaoTRDiamond\.html/.test(tC.internalvars.tc_url):
        tC.internalvars.mInsightMacauSanyaId = "V2_903202";
        break;
    case /cartier\.cn\/zh\-cn\/maison\/events\/SanyaTRopening\.html/.test(tC.internalvars.tc_url):
        tC.internalvars.mInsightMacauSanyaId = "V2_903209";
        break;
    default:
        tC.internalvars.mInsightMacauSanyaId = "";
        break;
    }
}
tC.internalvars_5181.initiators.var594();
tC.internalvars_5181_22.listVar.push(594);
tC.internalvars_5181.initiators.var598 = function() {
    tC.internalvars.ttdClashCtId = "";
    switch (true) {
    case /\/en\_us\/collections\/jewelry\/collections\/clash\-de\-cartier/.test(tc_vars["pguri"]):
        tC.internalvars.ttdClashCtId = "gyrlxbc";
        break;
    case /\/en\_us\/home\/homepage/.test(tc_vars["pguri"]):
        tC.internalvars.ttdClashCtId = "90bhbtt";
        break;
    case /\/en\_us\/find\-a\-boutique/.test(tc_vars["pguri"]):
        tC.internalvars.ttdClashCtId = "usoiclx";
        break;
    default:
        tC.internalvars.ttdClashCtId = "";
        break;
    }
}
tC.internalvars_5181.initiators.var598();
tC.internalvars_5181_22.listVar.push(598);
tC.internalvars_5181.initiators.var600 = function() {
    tC.internalvars.xaxisClashId = "";
    switch (true) {
    case /(\/en\_us\/collections\/jewelry\/collections\/clash\-de\-cartier\/)/.test(tc_vars["pguri"]):
        tC.internalvars.xaxisClashId = "4591663";
        break;
    case /\/en\_us\/home\/homepage/.test(tc_vars["pguri"]):
        tC.internalvars.xaxisClashId = "4601111";
        break;
    case /\/en\_us\/find\-a\-boutique/.test(tc_vars["pguri"]):
        tC.internalvars.xaxisClashId = "4591672";
        break;
    default:
        tC.internalvars.xaxisClashId = "";
    }
}
tC.internalvars_5181.initiators.var600();
tC.internalvars_5181_22.listVar.push(600);
tC.internalvars_5181.initiators.var602 = function() {
    tC.internalvars.dv360EoyNov19CatId = "";
    switch (true) {
    case /\/it\/home\/homepage/.test(tc_vars["pguri"]):
        tC.internalvars.dv360EoyNov19CatId = "carti0";
        break;
    case /(\/it\/collections\/jewelry\/collections\/clash\-de\-cartier\/clash\-de\-cartier\-rings\/)/.test(tc_vars["pguri"]):
    case /(\/it\/collections\/jewelry\/collections\/love\/bracelets\/)/.test(tc_vars["pguri"]):
    case /(\/it\/collections\/accessories\/leather\-goods\/hand\-bags\/guirlande\-de\-cartie\/)/.test(tc_vars["pguri"]):
    case /(\/it\/collections\/watches\/mens\-watches\/santos\-de\-cartier\/viewall\/)/.test(tc_vars["pguri"]):
    case /(\/it\/collections\/watches\/womens\-watches\/panthere\-de\-cartier\/)/.test(tc_vars["pguri"]):
        tC.internalvars.dv360EoyNov19CatId = "carti0";
        break;
    default:
        tC.internalvars.dv360EoyNov19CatId = "";
    }
}
tC.internalvars_5181.initiators.var602();
tC.internalvars_5181_22.listVar.push(602);
tC.internalvars_5181.initiators.var608 = function() {
    tC.internalvars.teadsConversionType = "";
    switch (true) {
    case /(\/en_us\/Cartier\/Home\/HomePage)/.test(tc_vars["pguri"]):
    case /(\/en_us\/Cartier\/Collections\/Gifts\/Inspiration\/Give,-just-because…)/.test(tc_vars["pguri"]):
        tC.internalvars.teadsConversionType = "CartierLoveTrueVisits";
        break;
    case /(\/en_US\/Cartier\/Find-A-Boutique)/.test(tc_vars["pguri"]):
        tC.internalvars.teadsConversionType = "CartierLoveStoreLocator";
        break;
    case /(\/de\/Cartier\/Collections\/Watches\/Women\.*s\-watches\/Panthère\-de\-Cartier)/:
        tC.internalvars.teadsConversionType = "CartierLoveStoreLocator";
        break;
    default:
        tC.internalvars.teadsConversionType = "CartierLoveStoreLocator";
    }
}
tC.internalvars_5181.initiators.var608();
tC.internalvars_5181_22.listVar.push(608);
tC.internalvars_5181.initiators.var616 = function() {
    tC.internalvars.sizmekActivityId = "";
    switch (true) {
    case /(.*\/OnePageCheckout\/ThankYou)/.test(tc_vars["pguri"]):
        tC.internalvars.sizmekActivityId = "494059";
        break;
    case /(.*\/(find-boutique)|(find-a-boutique)|(Store-Search)|(Store-Locator-Listing))/.test(tc_vars["pguri"]):
        tC.internalvars.sizmekActivityId = "494061";
        break;
    default:
        tC.internalvars.sizmekActivityId = "";
    }
}
tC.internalvars_5181.initiators.var616();
tC.internalvars_5181_22.listVar.push(616);
tC.internalvars_5181.initiators.var620 = function() {
    tC.internalvars.mInsightsMainCat = "";
    var uri = tc_vars["pguri"];
    if (uri) {
        tC.internalvars.mInsightsMainCat = uri.split('/')[3];
    }
}
tC.internalvars_5181.initiators.var620();
tC.internalvars_5181_22.listVar.push(620);
tC.internalvars_5181.initiators.var622 = function() {
    tC.internalvars.mInsightsSubCat1 = "";
    var uri = tc_vars["pguri"];
    if (uri) {
        tC.internalvars.mInsightSubCat1 = uri.split('/')[4];
    }
}
tC.internalvars_5181.initiators.var622();
tC.internalvars_5181_22.listVar.push(622);
tC.internalvars_5181.initiators.var624 = function() {
    tC.internalvars.mInsightsSubCat2 = "";
    var uri = tc_vars["pguri"];
    if (uri) {
        tC.internalvars.mInsightsSubCat2 = uri.split("/")[5];
    }
}
tC.internalvars_5181.initiators.var624();
tC.internalvars_5181_22.listVar.push(624);
tC.internalvars_5181.initiators.var638 = function() {
    tC.internalvars.isPersonalized = (function() {
        return {
            isPersonalized: function(a) {
                if (a === "" || a === undefined) {
                    return "No";
                } else {
                    return "Yes";
                }
            }
        };
    }
    )();
}
tC.internalvars_5181.initiators.var638();
tC.internalvars_5181_22.listVar.push(638);
tC.internalvars_5181.initiators.var648 = function() {
    tC.internalvars.getSellable = function(a) {
        if (a === "NOTBUYABLE") {
            return "notsellable";
        } else {
            return "sellable";
        }
    }
}
tC.internalvars_5181.initiators.var648();
tC.internalvars_5181_22.listVar.push(648);
tC.internalvars_5181.initiators.var650 = function() {
    tC.internalvars.getAvailability = function(a) {
        if (typeof a === "boolean") {
            if (a) {
                return "instock";
            } else {
                return "outofstock";
            }
        } else {
            return "outofstock";
        }
    }
}
tC.internalvars_5181.initiators.var650();
tC.internalvars_5181_22.listVar.push(650);
tC.internalvars_5181.initiators.var670 = function() {
    tC.internalvars.mInsightIdNotProdPag = "";
    switch (tC.internalvars.tc_url) {
    case /cartier.mx\/joyas/:
    case /cartier.mx\/relojes/:
    case /cartier.mx\/compromiso/:
    case /cartier.mx\/marroquineria\-\-\-accesorios/:
    case /cartier.mx\/perfumes/:
    case /cartier.mx\/colecciones\/regalos/:
        tC.internalvars.mInsightIdNotProdPag = "V2_894418";
        break;
    case /cartier.mx\/checkout\/#\/cart/:
        tC.internalvars.mInsightIdNotProdPag = "V2_894383";
        break;
    case /cartier.mx\/checkout\/#\/shipping/:
        tC.internalvars.mInsightIdNotProdPag = "V2_894390";
        break;
    case /cartier.mx\/checkout\/#\/shipping/:
        tC.internalvars.mInsightIdNotProdPag = "V2_894390";
        break;
    default:
    }
}
tC.internalvars_5181.initiators.var670();
tC.internalvars_5181_22.listVar.push(670);
tC.internalvars_5181.initiators.var674 = function() {
    tC.internalvars.xandrConvIdNotPP = "";
    switch (tC.internalvars.tc_url) {
    case /cartier.mx\/joyas/:
    case /cartier.mx\/relojes/:
    case /cartier.mx\/compromiso/:
    case /cartier.mx\/marroquineria\-\-\-accesorios/:
    case /cartier.mx\/perfumes/:
    case /cartier.mx\/colecciones\/regalos/:
    case /cartier.mx\/checkout\/#\/cart/:
    case /cartier.mx\/checkout\/#\/shipping/:
        tC.internalvars.xandrConvIdNotPP = "1290097";
        break;
    case /cartier.mx\/checkout\/#\/shipping/:
        tC.internalvars.xandrConvIdNotPP = "1290106";
        break;
    default:
    }
}
tC.internalvars_5181.initiators.var674();
tC.internalvars_5181_22.listVar.push(674);
tC.internalvars_5181.initiators.var678 = function() {
    tC.internalvars.xandrSegIdNotPP = "";
    switch (tC.internalvars.tc_url) {
    case /cartier.mx\/joyas/:
    case /cartier.mx\/relojes/:
    case /cartier.mx\/compromiso/:
    case /cartier.mx\/marroquineria\-\-\-accesorios/:
    case /cartier.mx\/perfumes/:
    case /cartier.mx\/colecciones\/regalos/:
        tC.internalvars.xandrSegIdNotPP = "22677925";
        break;
    case /cartier.mx\/checkout\/#\/cart/:
        tC.internalvars.xandrSegIdNotPP = "22678378";
        break;
    case /cartier.mx\/checkout\/#\/shipping/:
        tC.internalvars.xandrSegIdNotPP = "22678402";
        break;
    case /cartier.mx\/checkout\/#\/shipping/:
        tC.internalvars.xandrSegIdNotPP = "22678411";
        break;
    default:
    }
}
tC.internalvars_5181.initiators.var678();
tC.internalvars_5181_22.listVar.push(678);
tC.internalvars_5181.initiators.var686 = function() {
    tC.internalvars.ricCartPriceArray = [];
    if (tc_vars["cart_items"] !== undefined) {
        for (var i = 0; i < tc_vars["cart_items"].length; i++) {
            tC.internalvars.ricCartPriceArray.push(tc_vars["cart_items"][i].cart_item_discount_ati)
        }
    }
}
tC.internalvars_5181.initiators.var686();
tC.internalvars_5181_22.listVar.push(686);
tC.internalvars_5181.initiators.var688 = function() {
    tC.internalvars.ricCartCollectionArray = [];
    if (tc_vars["cart_items"] !== undefined) {
        for (var i = 0; i < tc_vars["cart_items"].length; i++) {
            tC.internalvars.ricCartCollectionArray.push(tc_vars["cart_items"][i].cart_item_collection)
        }
    }
}
tC.internalvars_5181.initiators.var688();
tC.internalvars_5181_22.listVar.push(688);
tC.internalvars_5181.initiators.var690 = function() {
    tC.internalvars.ricOrderPriceArray = [];
    if (tc_vars["order_items"] !== undefined) {
        for (var i = 0; i < tc_vars["order_items"].length; i++) {
            tC.internalvars.ricOrderPriceArray.push(tc_vars["order_items"][i].order_item_discount_ati)
        }
    }
}
tC.internalvars_5181.initiators.var690();
tC.internalvars_5181_22.listVar.push(690);
tC.internalvars_5181.initiators.var692 = function() {
    tC.internalvars.orderCollectionArray = [];
    if (tc_vars["order_items"] !== undefined) {
        for (var i = 0; i < tc_vars["order_items"].length; i++) {
            tC.internalvars.orderCollectionArray.push(tc_vars["order_items"][i].order_item_collection)
        }
    }
}
tC.internalvars_5181.initiators.var692();
tC.internalvars_5181_22.listVar.push(692);
tC.internalvars_5181.initiators.var694 = function() {
    tC.internalvars.ricOrderQtyArray = [];
    if (tc_vars["order_items"] !== undefined) {
        for (var i = 0; i < tc_vars["order_items"].length; i++) {
            tC.internalvars.ricOrderQtyArray.push(tc_vars["order_items"][i].order_item_quantity)
        }
    }
}
tC.internalvars_5181.initiators.var694();
tC.internalvars_5181_22.listVar.push(694);
tC.internalvars_5181.initiators.var698 = function() {
    tC.internalvars.pgURI_opc_car = "";
    switch (tc_vars["nav_stepName"]) {
    case "CheckMail":
        tC.internalvars.pgURI_opc_car = "/virtualpageview/checkout/step2/login";
        break;
    case "ShippingAddress":
        tC.internalvars.pgURI_opc_car = "/virtualpageview/checkout/step3/shipping-address";
        break;
    case "Payment":
        tC.internalvars.pgURI_opc_car = "/virtualpageview/checkout/step4/payment-details";
        break;
    case "Finalization":
        tC.internalvars.pgURI_opc_car = "/virtualpageview/checkout/step5/place-your-order";
        break;
    case "DeliveryMethod":
        tC.internalvars.pgURI_opc_car = "/virtualpageview/checkout/step3_5/shipping-method";
        break;
    default:
        tC.internalvars.pgURI_opc_car = "";
        break;
    }
}
tC.internalvars_5181.initiators.var698();
tC.internalvars_5181_22.listVar.push(698);
tC.internalvars_5181.initiators.var700 = function() {
    tC.internalvars.CAR_opc_CG = "";
    switch (tc_vars["nav_stepName"]) {
    case "CheckMail":
        tC.internalvars.CAR_opc_CG = "checkemail";
        break;
    case "ShippingAddress":
        tC.internalvars.CAR_opc_CG = "delivery";
        break;
    case "Payment":
        tC.internalvars.CAR_opc_CG = "payment";
        break;
    case "Finalization":
        tC.internalvars.CAR_opc_CG = "confirmation";
        break;
    case "DeliveryMethod":
        tC.internalvars.CAR_opc_CG = "deliverymethod";
        break;
    default:
        tC.internalvars.CAR_opc_CG = "";
        break;
    }
}
tC.internalvars_5181.initiators.var700();
tC.internalvars_5181_22.listVar.push(700);
tC.internalvars_5181.initiators.var717 = function() {
    tC.internalvars.zoomOpenSwitchImageAction = function(a) {
        if (a === "ZoomOpen") {
            return "Zoom";
        } else if (a === "SwitchImage") {
            return "SwitchImage";
        }
    }
}
tC.internalvars_5181.initiators.var717();
tC.internalvars_5181_22.listVar.push(717);
tC.internalvars_5181.initiators.var721 = typeof tC.internalvars_5181.initiators.var721 == "function" ? tC.internalvars_5181.initiators.var721 : function() {
    tC.internalvars.getAvailabilityFromString = tC.internalvars.getAvailabilityFromString ? tC.internalvars.getAvailabilityFromString : "";
}
tC.internalvars_5181.initiators.var721();
tC.internalvars_5181_22.listVar.push(721);
tC.internalvars_5181.initiators.var723 = function() {
    tC.internalvars.getID = function(a) {
        if (a !== undefined) {
            return a.substring(2);
        } else {
            return a;
        }
    }
}
tC.internalvars_5181.initiators.var723();
tC.internalvars_5181_22.listVar.push(723);
tC.internalvars_5181.initiators.var730 = typeof tC.internalvars_5181.initiators.var730 == "function" ? tC.internalvars_5181.initiators.var730 : function() {
    tC.internalvars.getModifiedString = tC.internalvars.getModifiedString ? tC.internalvars.getModifiedString : "";
}
tC.internalvars_5181.initiators.var730();
tC.internalvars_5181_22.listVar.push(730);
tC.internalvars_5181.initiators.var750 = typeof tC.internalvars_5181.initiators.var750 == "function" ? tC.internalvars_5181.initiators.var750 : function() {
    tC.internalvars.getPersonalization = tC.internalvars.getPersonalization ? tC.internalvars.getPersonalization : "";
}
tC.internalvars_5181.initiators.var750();
tC.internalvars_5181_22.listVar.push(750);
tC.internalvars_5181.initiators.var752 = typeof tC.internalvars_5181.initiators.var752 == "function" ? tC.internalvars_5181.initiators.var752 : function() {
    tC.internalvars.getPaymentInfo = tC.internalvars.getPaymentInfo ? tC.internalvars.getPaymentInfo : "";
}
tC.internalvars_5181.initiators.var752();
tC.internalvars_5181_22.listVar.push(752);
tC.internalvars_5181.initiators.var760 = typeof tC.internalvars_5181.initiators.var760 == "function" ? tC.internalvars_5181.initiators.var760 : function() {
    tC.internalvars.envFolder = tC.internalvars.envFolder ? tC.internalvars.envFolder : "";
}
tC.internalvars_5181.initiators.var760();
tC.internalvars_5181_22.listVar.push(760);
tC.internalvars_5181.initiators.var764 = function() {
    tC.internalvars.heroTransactionProds = [];
    if (tc_vars["order_items"] !== undefined) {
        for (var i = 0; i < tc_vars["order_items"].length; i++) {
            tC.internalvars.heroTransactionProds.push({
                id: tc_vars["order_items"][i].order_item_mfPartNumber,
                quantity: tc_vars["order_items"][i].order_item_quantity,
                name: tc_vars["order_items"][i].order_item_eng_title,
                price: Number(tc_vars["order_items"][i].order_item_discount_ati),
                currency: tc_vars["nav_currency"],
                brand: "CAR",
                category: tc_vars["order_items"][i].order_item_micro_category,
                location: tC.internalvars.tc_url
            });
        }
    }
}
tC.internalvars_5181.initiators.var764();
tC.internalvars_5181_22.listVar.push(764);
tC.internalvars_5181.initiators.var771 = function() {
    tC.internalvars.Footer = function(a) {
        if (typeof a === "string") {
            if (a === "") {
                return "NA";
            } else if (a == "footer-0-0") {
                return "contact us";
            } else if (a == "footer-0-1") {
                return "call now";
            } else if (a == "footer-0-2") {
                return "shopping online";
            } else if (a == "footer-0-3") {
                return "track your order";
            } else if (a == "footer-0-4") {
                return "delivery services";
            } else if (a == "footer-0-5") {
                return "payment options";
            } else if (a == "footer-0-6") {
                return "help";
            } else if (a == "footer-0-7") {
                return "sitemap";
            } else if (a == "footer-1-0") {
                return "find a boutique";
            } else if (a == "footer-1-1") {
                return "careers";
            } else if (a == "footer-2-0") {
                return "terms of use";
            } else if (a == "footer-2-1") {
                return "conditions of sale";
            } else if (a == "footer-2-2") {
                return "returns policy";
            } else if (a == "footer-2-3") {
                return "privacy policy";
            } else if (a == "footer-2-4") {
                return "cookie policy";
            } else {
                return "NA";
            }
        }
    }
}
tC.internalvars_5181.initiators.var771();
tC.internalvars_5181_22.listVar.push(771);
tC.internalvars_5181.initiators.var797 = function() {
    tC.internalvars.getCategoryIdConsent = function(a) {
        if (typeof tC.privacy.getOptinCategories !== "undefined") {
            tC.log("Info: tC.privacy.getOptinCategories defined!");
            return (tC.privacy.getOptinCategories().indexOf(String(a)) > -1);
        } else {
            tC.log("INFO: tC.privacy.getOptinCategories is NOT defined!");
        }
    }
}
tC.internalvars_5181.initiators.var797();
tC.internalvars_5181_22.listVar.push(797);
tC.internalvars_5181.initiators.var799 = function() {
    if (tc_vars["nav_countryCode"] !== "GB") {
        tC.internalvars.analytics_optin = true;
    } else if (tC.privacy.getOptinCategories().indexOf("7") > -1) {
        tC.log('Analytical cookies accepted');
        tC.internalvars.analytics_optin = true;
    } else {
        tC.internalvars.analytics_optin = false;
    }
}
tC.internalvars_5181.initiators.var799();
tC.internalvars_5181_22.listVar.push(799);
tC.internalvars_5181.initiators.var801 = typeof tC.internalvars_5181.initiators.var801 == "function" ? tC.internalvars_5181.initiators.var801 : function() {
    tC.internalvars.ric_envwork_country = tC.internalvars.ric_envwork_country ? tC.internalvars.ric_envwork_country : "";
}
tC.internalvars_5181.initiators.var801();
tC.internalvars_5181_22.listVar.push(801);
tC.internalvars_5181.initiators.var813 = typeof tC.internalvars_5181.initiators.var813 == "function" ? tC.internalvars_5181.initiators.var813 : function() {
    tC.internalvars.CookieSetting = tC.internalvars.CookieSetting ? tC.internalvars.CookieSetting : "";
}
tC.internalvars_5181.initiators.var813();
tC.internalvars_5181_22.listVar.push(813);
tC.internalvars_5181.initiators.var819 = typeof tC.internalvars_5181.initiators.var819 == "function" ? tC.internalvars_5181.initiators.var819 : function() {
    tC.internalvars.ric_countrycode_and_languagecode = tC.internalvars.ric_countrycode_and_languagecode ? tC.internalvars.ric_countrycode_and_languagecode : "";
}
tC.internalvars_5181.initiators.var819();
tC.internalvars_5181_22.listVar.push(819);
tC.internalvars_5181.initiators.var821 = function() {
    tC.internalvars.mediacomCatId = "";
    switch (true) {
    case tc_vars["pguri"] == "fr_fr/fragrances/women-fragrances/la-panthere-women-fragrances":
        tC.internalvars.mediacomCatId = "carti001";
        break;
    case tc_vars["pguri"] == "/fr_fr/collections/gifts":
        tC.internalvars.mediacomCatId = "carti000";
        break;
    default:
        tC.internalvars.mediacomCatId = "_not-set_";
    }
}
tC.internalvars_5181.initiators.var821();
tC.internalvars_5181_22.listVar.push(821);
tC.internalvars_5181.initiators.var827 = function() {
    tC.internalvars.tc_timestamp = Math.round(new Date().getTime() / 1000.0);
}
tC.internalvars_5181.initiators.var827();
tC.internalvars_5181_22.listVar.push(827);
tC.internalvars_5181.initiators.var829 = function() {
    tC.internalvars.isOrganicReferrer = "";
    var referrer = window.document.referrer;
    switch (true) {
    case /Google/.test(referrer):
    case /Bing/.test(referrer):
    case /Yahoo/.test(referrer):
    case /Baidu/.test(referrer):
        tC.internalvars.isOrganicReferrer = true;
        break;
    default:
        tC.internalvars.isOrganicReferrer = false;
    }
}
tC.internalvars_5181.initiators.var829();
tC.internalvars_5181_22.listVar.push(829);
tC.internalvars_5181.initiators.var831 = function() {
    tC.internalvars.tc_referrer = document.referrer;
}
tC.internalvars_5181.initiators.var831();
tC.internalvars_5181_22.listVar.push(831);
tC.internalvars_5181.initiators.var833 = function() {
    tC.internalvars.hrefHasUtmorGclid = "";
    switch (true) {
    case /utm|gclid/.test(document.location.href):
        tC.internalvars.hrefHasUtmorGclid = true;
        break;
    default:
        tC.internalvars.hrefHasUtmorGclid = false;
    }
}
tC.internalvars_5181.initiators.var833();
tC.internalvars_5181_22.listVar.push(833);
tC.internalvars_5181.initiators.var835 = function() {
    tC.internalvars.twitterPixelIdJewelry = "ntg1l";
}
tC.internalvars_5181.initiators.var835();
tC.internalvars_5181_22.listVar.push(835);
tC.internalvars_5181.initiators.var849 = typeof tC.internalvars_5181.initiators.var849 == "function" ? tC.internalvars_5181.initiators.var849 : function() {
    tC.internalvars.tc_randomCachebuster = tC.internalvars.tc_randomCachebuster ? tC.internalvars.tc_randomCachebuster : "";
}
tC.internalvars_5181.initiators.var849();
tC.internalvars_5181_22.listVar.push(849);
tC.internalvars_5181.initiators.var851 = typeof tC.internalvars_5181.initiators.var851 == "function" ? tC.internalvars_5181.initiators.var851 : function() {
    tC.internalvars.singlePersonalized = tC.internalvars.singlePersonalized ? tC.internalvars.singlePersonalized : "";
}
tC.internalvars_5181.initiators.var851();
tC.internalvars_5181_22.listVar.push(851);
tC.internalvars_5181.initiators.var853 = typeof tC.internalvars_5181.initiators.var853 == "function" ? tC.internalvars_5181.initiators.var853 : function() {
    tC.internalvars.isPersonalizedNA = tC.internalvars.isPersonalizedNA ? tC.internalvars.isPersonalizedNA : "";
}
tC.internalvars_5181.initiators.var853();
tC.internalvars_5181_22.listVar.push(853);
tC.internalvars_5181.initiators.var871 = typeof tC.internalvars_5181.initiators.var871 == "function" ? tC.internalvars_5181.initiators.var871 : function() {
    tC.internalvars.isAdjustedNA = tC.internalvars.isAdjustedNA ? tC.internalvars.isAdjustedNA : "";
}
tC.internalvars_5181.initiators.var871();
tC.internalvars_5181_22.listVar.push(871);
tC.internalvars_5181.initiators.var873 = typeof tC.internalvars_5181.initiators.var873 == "function" ? tC.internalvars_5181.initiators.var873 : function() {
    tC.internalvars.isEmbossedNA = tC.internalvars.isEmbossedNA ? tC.internalvars.isEmbossedNA : "";
}
tC.internalvars_5181.initiators.var873();
tC.internalvars_5181_22.listVar.push(873);
tC.internalvars_5181.initiators.var875 = typeof tC.internalvars_5181.initiators.var875 == "function" ? tC.internalvars_5181.initiators.var875 : function() {
    tC.internalvars.isEngravedNA = tC.internalvars.isEngravedNA ? tC.internalvars.isEngravedNA : "";
}
tC.internalvars_5181.initiators.var875();
tC.internalvars_5181_22.listVar.push(875);
tC.internalvars_5181.initiators.var877 = typeof tC.internalvars_5181.initiators.var877 == "function" ? tC.internalvars_5181.initiators.var877 : function() {
    tC.internalvars.isPersonalizedNabis = tC.internalvars.isPersonalizedNabis ? tC.internalvars.isPersonalizedNabis : "";
}
tC.internalvars_5181.initiators.var877();
tC.internalvars_5181_22.listVar.push(877);
tC.internalvars_5181.initiators.var881 = typeof tC.internalvars_5181.initiators.var881 == "function" ? tC.internalvars_5181.initiators.var881 : function() {
    tC.internalvars.ricEnvCountryLang = tC.internalvars.ricEnvCountryLang ? tC.internalvars.ricEnvCountryLang : "";
}
tC.internalvars_5181.initiators.var881();
tC.internalvars_5181_22.listVar.push(881);
tC.internalvars_5181.initiators.var902 = function() {
    tC.internalvars.checkTransaction = "";
    if (((tc_vars.nav_pagetype === "onepagecheckout") && (tc_vars.env_template === "thankyou")) || (tc_vars.nav_pagetype === "CheckoutPayPalExpress.Thankyou") || ((tc_vars.nav_pagetype === "thankyou") && (tc_vars.env_template === "CheckoutOPC")) || ((tc_vars.nav_pagetype === "CheckoutPayPalExpress.ThankYou") && (tc_vars.env_template === "genericpage")) || ((tc_vars.nav_pagetype === "thankyou") && (tc_vars.env_template === "genericpage"))) {
        if ((tc_vars["order_PaymentType"] === "BankTransfer") && (tc_vars["order_revenue_eur"] > 20000)) {
            tC.internalvars.checkTransaction = "1";
        } else {
            tC.internalvars.checkTransaction = "0";
        }
    }
}
tC.internalvars_5181.initiators.var902();
tC.internalvars_5181_22.listVar.push(902);
tC.internalvars_5181.initiators.var914 = typeof tC.internalvars_5181.initiators.var914 == "function" ? tC.internalvars_5181.initiators.var914 : function() {
    tC.internalvars.domain_country_lang = tC.internalvars.domain_country_lang ? tC.internalvars.domain_country_lang : "";
}
tC.internalvars_5181.initiators.var914();
tC.internalvars_5181_22.listVar.push(914);
tC.internalvars_5181.initiators.var916 = function() {
    tC.internalvars.masterSku_event = "";
    if (tc_array_events["defaultMfPartNumber"] !== "") {
        tC.internalvars.masterSku_event = tc_array_events["defaultMfPartNumber"];
    } else {
        tC.internalvars.masterSku_event = tc_array_events["mfPartNumber"];
    }
}
tC.internalvars_5181.initiators.var916();
tC.internalvars_5181_22.listVar.push(916);
tC.internalvars_5181.initiators.var922 = function() {
    tC.internalvars.masterSku_cart = function(a, b) {
        if (a !== "") {
            return a;
        } else {
            return b;
        }
    }
}
tC.internalvars_5181.initiators.var922();
tC.internalvars_5181_22.listVar.push(922);
tC.internalvars_5181.initiators.var958 = typeof tC.internalvars_5181.initiators.var958 == "function" ? tC.internalvars_5181.initiators.var958 : function() {
    tC.internalvars.isPersonalizedNabis2 = tC.internalvars.isPersonalizedNabis2 ? tC.internalvars.isPersonalizedNabis2 : "";
}
tC.internalvars_5181.initiators.var958();
tC.internalvars_5181_22.listVar.push(958);
tC.internalvars_5181.initiators.var960 = function() {
    tC.internalvars.ricOrderQtyArray = [];
    if (tc_vars["order_items"] !== undefined) {
        for (var i = 0; i < tc_vars["order_items"].length; i++) {
            tC.internalvars.ricOrderQtyArray.push(tc_vars["order_items"][i].order_item_quantity)
        }
    }
}
tC.internalvars_5181.initiators.var960();
tC.internalvars_5181_22.listVar.push(960);
tC.internalvars_5181.initiators.var962 = function() {
    tC.internalvars.cartValue = 0;
    if (tc_vars["cart_items"] !== undefined) {
        for (var i = 0; i < tc_vars["cart_items"].length; i++) {
            tC.internalvars.cartValue += (Number(tc_vars["cart_items"][i].cart_item_unitprice_ati))
        }
    }
}
tC.internalvars_5181.initiators.var962();
tC.internalvars_5181_22.listVar.push(962);
tC.internalvars_5181.initiators.var964 = typeof tC.internalvars_5181.initiators.var964 == "function" ? tC.internalvars_5181.initiators.var964 : function() {
    tC.internalvars.internalTraffic = tC.internalvars.internalTraffic ? tC.internalvars.internalTraffic : "";
}
tC.internalvars_5181.initiators.var964();
tC.internalvars_5181_22.listVar.push(964);
tC.internalvars_5181.initiators.var966 = function() {
    tC.internalvars.ricCartQuantityArray = [];
    if (tc_vars["cart_items"] !== undefined) {
        for (var i = 0; i < tc_vars["cart_items"].length; i++) {
            tC.internalvars.ricCartQuantityArray.push(tc_vars["cart_items"][i].cart_item_quantity)
        }
    }
}
tC.internalvars_5181.initiators.var966();
tC.internalvars_5181_22.listVar.push(966);
tC.internalvars_5181.initiators.var967 = typeof tC.internalvars_5181.initiators.var967 == "function" ? tC.internalvars_5181.initiators.var967 : function() {
    tC.internalvars.productSizeSoldout = tC.internalvars.productSizeSoldout ? tC.internalvars.productSizeSoldout : "";
}
tC.internalvars_5181.initiators.var967();
tC.internalvars_5181_22.listVar.push(967);
tC.internalvars_5181.initiators.var969 = typeof tC.internalvars_5181.initiators.var969 == "function" ? tC.internalvars_5181.initiators.var969 : function() {
    tC.internalvars.productSizeIsOnlyOne = tC.internalvars.productSizeIsOnlyOne ? tC.internalvars.productSizeIsOnlyOne : "";
}
tC.internalvars_5181.initiators.var969();
tC.internalvars_5181_22.listVar.push(969);
tC.internalvars_5181.initiators.var971 = typeof tC.internalvars_5181.initiators.var971 == "function" ? tC.internalvars_5181.initiators.var971 : function() {
    tC.internalvars.productSizeAvailable = tC.internalvars.productSizeAvailable ? tC.internalvars.productSizeAvailable : "";
}
tC.internalvars_5181.initiators.var971();
tC.internalvars_5181_22.listVar.push(971);
tC.internalvars_5181.initiators.var977 = function() {
    tC.internalvars.cartItemIsEyewear = false;
    if (tc_vars['cart_items'] !== undefined) {
        for (var i = 0; i < tc_vars["cart_items"].length; i++) {
            if (/Eyewear/i.test(tc_vars['cart_items'][i]['cart_item_eng_category'])) {
                tC.internalvars.cartItemIsEyewear = true;
                break;
            }
        }
    }
}
tC.internalvars_5181.initiators.var977();
tC.internalvars_5181_22.listVar.push(977);
tC.internalvars_5181.initiators.var979 = function() {
    tC.internalvars.orderItemIsEyewear = false;
    if (tc_vars['order_items'] !== undefined) {
        for (var i = 0; i < tc_vars["order_items"].length; i++) {
            if (/Eyewear/i.test(tc_vars['order_items'][i]['order_item_eng_category'])) {
                tC.internalvars.orderItemIsEyewear = true;
                break;
            }
        }
    }
}
tC.internalvars_5181.initiators.var979();
tC.internalvars_5181_22.listVar.push(979);
tC.internalvars_5181.initiators.var990 = typeof tC.internalvars_5181.initiators.var990 == "function" ? tC.internalvars_5181.initiators.var990 : function() {
    tC.internalvars.pguri_GA4 = tC.internalvars.pguri_GA4 ? tC.internalvars.pguri_GA4 : "";
}
tC.internalvars_5181.initiators.var990();
tC.internalvars_5181_22.listVar.push(990);
tC.internalvars_5181.initiators.var992 = typeof tC.internalvars_5181.initiators.var992 == "function" ? tC.internalvars_5181.initiators.var992 : function() {
    tC.internalvars.getTimestampGA4 = tC.internalvars.getTimestampGA4 ? tC.internalvars.getTimestampGA4 : "";
}
tC.internalvars_5181.initiators.var992();
tC.internalvars_5181_22.listVar.push(992);
tC.internalvars_5181.initiators.var994 = typeof tC.internalvars_5181.initiators.var994 == "function" ? tC.internalvars_5181.initiators.var994 : function() {
    tC.internalvars.getSessionId_GA4 = tC.internalvars.getSessionId_GA4 ? tC.internalvars.getSessionId_GA4 : "";
}
tC.internalvars_5181.initiators.var994();
tC.internalvars_5181_22.listVar.push(994);
tC.internalvars_5181.initiators.var998 = typeof tC.internalvars_5181.initiators.var998 == "function" ? tC.internalvars_5181.initiators.var998 : function() {
    tC.internalvars.getTrafficType = tC.internalvars.getTrafficType ? tC.internalvars.getTrafficType : "";
}
tC.internalvars_5181.initiators.var998();
tC.internalvars_5181_22.listVar.push(998);
tC.internalvars_5181.initiators.var1000 = typeof tC.internalvars_5181.initiators.var1000 == "function" ? tC.internalvars_5181.initiators.var1000 : function() {
    tC.internalvars.currency = tC.internalvars.currency ? tC.internalvars.currency : "";
}
tC.internalvars_5181.initiators.var1000();
tC.internalvars_5181_22.listVar.push(1000);
tC.internalvars_5181.initiators.var1002 = typeof tC.internalvars_5181.initiators.var1002 == "function" ? tC.internalvars_5181.initiators.var1002 : function() {
    tC.internalvars.getParameterByName = tC.internalvars.getParameterByName ? tC.internalvars.getParameterByName : "";
}
tC.internalvars_5181.initiators.var1002();
tC.internalvars_5181_22.listVar.push(1002);
tC.internalvars_5181.initiators.var1006 = typeof tC.internalvars_5181.initiators.var1006 == "function" ? tC.internalvars_5181.initiators.var1006 : function() {
    tC.internalvars.checkoutShippingMeth = tC.internalvars.checkoutShippingMeth ? tC.internalvars.checkoutShippingMeth : "";
}
tC.internalvars_5181.initiators.var1006();
tC.internalvars_5181_22.listVar.push(1006);
tC.internalvars_5181.initiators.var1007 = function() {
    tC.internalvars.getParameterByNamePG = function(name, url) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
          , results = regex.exec(url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
}
tC.internalvars_5181.initiators.var1007();
tC.internalvars_5181_22.listVar.push(1007);
tC.internalvars_5181.initiators.var1023 = typeof tC.internalvars_5181.initiators.var1023 == "function" ? tC.internalvars_5181.initiators.var1023 : function() {
    tC.internalvars.pgURI_opc_car_GA4 = tC.internalvars.pgURI_opc_car_GA4 ? tC.internalvars.pgURI_opc_car_GA4 : "";
}
tC.internalvars_5181.initiators.var1023();
tC.internalvars_5181_22.listVar.push(1023);
tC.internalvars_5181.initiators.var1025 = typeof tC.internalvars_5181.initiators.var1025 == "function" ? tC.internalvars_5181.initiators.var1025 : function() {
    tC.internalvars.getPlpDictionaryName = tC.internalvars.getPlpDictionaryName ? tC.internalvars.getPlpDictionaryName : "";
}
tC.internalvars_5181.initiators.var1025();
tC.internalvars_5181_22.listVar.push(1025);
tC.internalvars_5181.initiators.var1027 = typeof tC.internalvars_5181.initiators.var1027 == "function" ? tC.internalvars_5181.initiators.var1027 : function() {
    tC.internalvars.content_square_integration = tC.internalvars.content_square_integration ? tC.internalvars.content_square_integration : "";
}
tC.internalvars_5181.initiators.var1027();
tC.internalvars_5181_22.listVar.push(1027);
tC.internalvars_5181.initiators.var1036 = function() {
    tC.internalvars.IdAndName = "";
    if (tc_vars["product_mfPartNumber"] !== "" || tc_vars["product_eng_title"] !== "") {
        tC.internalvars.IdAndName = tc_vars["product_mfPartNumber"] + "-" + tc_vars["product_eng_title"];
    }
}
tC.internalvars_5181.initiators.var1036();
tC.internalvars_5181_22.listVar.push(1036);
tC.internalvars_5181.initiators.var1040 = typeof tC.internalvars_5181.initiators.var1040 == "function" ? tC.internalvars_5181.initiators.var1040 : function() {
    tC.internalvars.amItester = tC.internalvars.amItester ? tC.internalvars.amItester : "";
}
tC.internalvars_5181.initiators.var1040();
tC.internalvars_5181_22.listVar.push(1040);
tC.internalvars_5181.initiators.var1045 = function() {
    tC.internalvars.tiktokKeringId = "CDR4JG3C77U4KH13TFRG";
}
tC.internalvars_5181.initiators.var1045();
tC.internalvars_5181_22.listVar.push(1045);
tC.internalvars_5181.initiators.var1046 = function() {
    tC.internalvars.snapchatKeringId = "fb5a3aad-fbff-45e0-82bd-8b717f7be3a9";
}
tC.internalvars_5181.initiators.var1046();
tC.internalvars_5181_22.listVar.push(1046);
var tc_internalvars_countries = '';
switch (tc_vars["nav_countryCode"].toString().toLowerCase()) {
case "ca":
    tc_internalvars_countries = "NA";
    break;
case "do":
    tc_internalvars_countries = "NA";
    break;
case "gt":
    tc_internalvars_countries = "NA";
    break;
case "mx":
    tc_internalvars_countries = "NA";
    break;
case "pa":
    tc_internalvars_countries = "NA";
    break;
case "us":
    tc_internalvars_countries = "NA";
    break;
case "am":
    tc_internalvars_countries = "APAC";
    break;
case "au":
    tc_internalvars_countries = "APAC";
    break;
case "az":
    tc_internalvars_countries = "APAC";
    break;
case "bh":
    tc_internalvars_countries = "APAC";
    break;
case "bn":
    tc_internalvars_countries = "APAC";
    break;
case "cn":
    tc_internalvars_countries = "APAC";
    break;
case "cy":
    tc_internalvars_countries = "APAC";
    break;
case "ge":
    tc_internalvars_countries = "APAC";
    break;
case "hk":
    tc_internalvars_countries = "APAC";
    break;
case "in":
    tc_internalvars_countries = "APAC";
    break;
case "id":
    tc_internalvars_countries = "APAC";
    break;
case "il":
    tc_internalvars_countries = "APAC";
    break;
case "jp":
    tc_internalvars_countries = "APAC";
    break;
case "jo":
    tc_internalvars_countries = "APAC";
    break;
case "kz":
    tc_internalvars_countries = "APAC";
    break;
case "kw":
    tc_internalvars_countries = "APAC";
    break;
case "kg":
    tc_internalvars_countries = "APAC";
    break;
case "lb":
    tc_internalvars_countries = "APAC";
    break;
case "mo":
    tc_internalvars_countries = "APAC";
    break;
case "my":
    tc_internalvars_countries = "APAC";
    break;
case "nz":
    tc_internalvars_countries = "APAC";
    break;
case "om":
    tc_internalvars_countries = "APAC";
    break;
case "ph":
    tc_internalvars_countries = "APAC";
    break;
case "qa":
    tc_internalvars_countries = "APAC";
    break;
case "sa":
    tc_internalvars_countries = "APAC";
    break;
case "sg":
    tc_internalvars_countries = "APAC";
    break;
case "kr":
    tc_internalvars_countries = "APAC";
    break;
case "sy":
    tc_internalvars_countries = "APAC";
    break;
case "tw":
    tc_internalvars_countries = "APAC";
    break;
case "tj":
    tc_internalvars_countries = "APAC";
    break;
case "th":
    tc_internalvars_countries = "APAC";
    break;
case "tm":
    tc_internalvars_countries = "APAC";
    break;
case "ae":
    tc_internalvars_countries = "APAC";
    break;
case "uz":
    tc_internalvars_countries = "APAC";
    break;
case "vn":
    tc_internalvars_countries = "APAC";
    break;
case "al":
    tc_internalvars_countries = "EU";
    break;
case "ad":
    tc_internalvars_countries = "EU";
    break;
case "at":
    tc_internalvars_countries = "EU";
    break;
case "by":
    tc_internalvars_countries = "EU";
    break;
case "be":
    tc_internalvars_countries = "EU";
    break;
case "ba":
    tc_internalvars_countries = "EU";
    break;
case "bg":
    tc_internalvars_countries = "EU";
    break;
case "hr":
    tc_internalvars_countries = "EU";
    break;
case "cz":
    tc_internalvars_countries = "EU";
    break;
case "dk":
    tc_internalvars_countries = "EU";
    break;
case "ee":
    tc_internalvars_countries = "EU";
    break;
case "fi":
    tc_internalvars_countries = "EU";
    break;
case "fr":
    tc_internalvars_countries = "EU";
    break;
case "de":
    tc_internalvars_countries = "EU";
    break;
case "gr":
    tc_internalvars_countries = "EU";
    break;
case "hu":
    tc_internalvars_countries = "EU";
    break;
case "is":
    tc_internalvars_countries = "EU";
    break;
case "ie":
    tc_internalvars_countries = "EU";
    break;
case "it":
    tc_internalvars_countries = "EU";
    break;
case "lv":
    tc_internalvars_countries = "EU";
    break;
case "li":
    tc_internalvars_countries = "EU";
    break;
case "lt":
    tc_internalvars_countries = "EU";
    break;
case "lu":
    tc_internalvars_countries = "EU";
    break;
case "mk":
    tc_internalvars_countries = "EU";
    break;
case "mt":
    tc_internalvars_countries = "EU";
    break;
case "md":
    tc_internalvars_countries = "EU";
    break;
case "mc":
    tc_internalvars_countries = "EU";
    break;
case "me":
    tc_internalvars_countries = "EU";
    break;
case "nl":
    tc_internalvars_countries = "EU";
    break;
case "no":
    tc_internalvars_countries = "EU";
    break;
case "pl":
    tc_internalvars_countries = "EU";
    break;
case "pt":
    tc_internalvars_countries = "EU";
    break;
case "ro":
    tc_internalvars_countries = "EU";
    break;
case "ru":
    tc_internalvars_countries = "EU";
    break;
case "sm":
    tc_internalvars_countries = "EU";
    break;
case "rs":
    tc_internalvars_countries = "EU";
    break;
case "sk":
    tc_internalvars_countries = "EU";
    break;
case "si":
    tc_internalvars_countries = "EU";
    break;
case "se":
    tc_internalvars_countries = "EU";
    break;
case "es":
    tc_internalvars_countries = "EU";
    break;
case "ch":
    tc_internalvars_countries = "EU";
    break;
case "tr":
    tc_internalvars_countries = "EU";
    break;
case "ua":
    tc_internalvars_countries = "EU";
    break;
case "gb":
    tc_internalvars_countries = "EU";
    break;
case "va":
    tc_internalvars_countries = "EU";
    break;
default:
    tc_internalvars_countries = "";
}
tC.internalvars_5181.initiators.var249 = function() {
    tC.internalvars.criteoaccount = "";
    switch (tc_vars["nav_countryCode"]) {
    case "GB":
        tC.internalvars.criteoaccount = "24770";
        break;
    case "US":
        tC.internalvars.criteoaccount = "24771";
        break;
    case "DE":
        tC.internalvars.criteoaccount = "24772";
        break;
    case "FR":
        tC.internalvars.criteoaccount = "24773";
        break;
    default:
        tC.internalvars.criteoaccount = "";
        break;
    }
}
tC.internalvars_5181.initiators.var249();
tC.internalvars_5181_22.listVar.push(249);
tC.internalvars_5181.initiators.var345 = function() {
    tC.internalvars.awin_merchantId = "";
    switch (tc_vars["nav_countryCode"]) {
    case "DE":
        tC.internalvars.awin_merchantId = "11192";
        break;
    case "FR":
        tC.internalvars.awin_merchantId = "11193";
        break;
    case "UK":
        tC.internalvars.awin_merchantId = "11194";
        break;
    case "GB":
        tC.internalvars.awin_merchantId = "11194";
        break;
    case "US":
        tC.internalvars.awin_merchantId = "11213";
        break;
    default:
        tC.internalvars.awin_merchantId = "";
        break;
    }
}
tC.internalvars_5181.initiators.var345();
tC.internalvars_5181_22.listVar.push(345);
tC.internalvars_5181.initiators.var365 = typeof tC.internalvars_5181.initiators.var365 == "function" ? tC.internalvars_5181.initiators.var365 : function() {
    tC.internalvars.GA_step_OPC = tC.internalvars.GA_step_OPC ? tC.internalvars.GA_step_OPC : "";
}
tC.internalvars_5181.initiators.var365();
tC.internalvars_5181_22.listVar.push(365);
tC.internalvars_5181.initiators.var380 = function() {
    tC.internalvars.test = "";
    switch (tc_vars["nav_countryCode"]) {
    case "IT":
        tC.internalvars.test = "test_it";
        break;
    case "SE":
        tC.internalvars.test = "test_se";
        break;
    default:
        tC.internalvars.test = "test_none";
        break;
    }
}
tC.internalvars_5181.initiators.var380();
tC.internalvars_5181_22.listVar.push(380);
tC.internalvars_5181.initiators.var476 = function() {
    tC.internalvars.isEmbossed = "";
    switch (tc_vars["product_embossed"]) {
    case "false":
        tC.internalvars.isEmbossed = "No";
        break;
    case "true":
        tC.internalvars.isEmbossed = "Yes";
        break;
    default:
        tC.internalvars.isEmbossed = "";
        break;
    }
}
tC.internalvars_5181.initiators.var476();
tC.internalvars_5181_22.listVar.push(476);
tC.internalvars_5181.initiators.var478 = function() {
    tC.internalvars.isEngraved = "";
    switch (tc_vars["product_engraved"]) {
    case "false":
        tC.internalvars.isEngraved = "No";
        break;
    case "true":
        tC.internalvars.isEngraved = "Yes";
        break;
    default:
        tC.internalvars.isEngraved = "";
        break;
    }
}
tC.internalvars_5181.initiators.var478();
tC.internalvars_5181_22.listVar.push(478);
tC.internalvars_5181.initiators.var504 = typeof tC.internalvars_5181.initiators.var504 == "function" ? tC.internalvars_5181.initiators.var504 : function() {
    tC.internalvars.ricBrandlockJSID = tC.internalvars.ricBrandlockJSID ? tC.internalvars.ricBrandlockJSID : "";
}
tC.internalvars_5181.initiators.var504();
tC.internalvars_5181_22.listVar.push(504);
tC.internalvars_5181.initiators.var506 = typeof tC.internalvars_5181.initiators.var506 == "function" ? tC.internalvars_5181.initiators.var506 : function() {
    tC.internalvars.ricBrandlockID = tC.internalvars.ricBrandlockID ? tC.internalvars.ricBrandlockID : "";
}
tC.internalvars_5181.initiators.var506();
tC.internalvars_5181_22.listVar.push(506);
tC.internalvars_5181.initiators.var516 = function() {
    tC.internalvars.btqPickupCountry = "";
    switch (tc_vars["nav_countryCode"]) {
    case "US":
        tC.internalvars.btqPickupCountry = "true";
        break;
    case "CA":
        tC.internalvars.btqPickupCountry = "true";
        break;
    default:
        tC.internalvars.btqPickupCountry = "false";
        break;
    }
}
tC.internalvars_5181.initiators.var516();
tC.internalvars_5181_22.listVar.push(516);
tC.internalvars_5181.initiators.var524 = typeof tC.internalvars_5181.initiators.var524 == "function" ? tC.internalvars_5181.initiators.var524 : function() {
    tC.internalvars.ricMedalliaSiteID = tC.internalvars.ricMedalliaSiteID ? tC.internalvars.ricMedalliaSiteID : "";
}
tC.internalvars_5181.initiators.var524();
tC.internalvars_5181_22.listVar.push(524);
tC.internalvars_5181.initiators.var526 = function() {
    tC.internalvars.ricSprinklrID = "";
    switch (tC.internalvars.ric_countrycode_and_languagecode) {
    case "DE-de":
        tC.internalvars.ricSprinklrID = "app_100121394";
        break;
    case "IT-it":
        tC.internalvars.ricSprinklrID = "app_100121395";
        break;
    case "ES-es":
        tC.internalvars.ricSprinklrID = "app_100121428";
        break;
    case "CH-it":
        tC.internalvars.ricSprinklrID = "app_100121409";
        break;
    case "CH-de":
        tC.internalvars.ricSprinklrID = "app_100121399";
        break;
    case "CH-fr":
        tC.internalvars.ricSprinklrID = "app_100121398";
        break;
    case "CH-en":
        tC.internalvars.ricSprinklrID = "app_100121396";
        break;
    default:
        tC.internalvars.ricSprinklrID = "";
        break;
    }
}
tC.internalvars_5181.initiators.var526();
tC.internalvars_5181_22.listVar.push(526);
tC.internalvars_5181.initiators.var528 = function() {
    tC.internalvars.GA_stepOPC_cartier = "";
    switch (tc_vars["nav_stepName"]) {
    case "CheckMail":
        tC.internalvars.GA_stepOPC_cartier = "login";
        break;
    case "ShippingAddress":
        tC.internalvars.GA_stepOPC_cartier = "shipping-address";
        break;
    case "Payment":
        tC.internalvars.GA_stepOPC_cartier = "payment-details";
        break;
    case "Finalization":
        tC.internalvars.GA_stepOPC_cartier = "place-your-order";
        break;
    case "DeliveryMethod":
        tC.internalvars.GA_stepOPC_cartier = "shipping-method";
        break;
    default:
        tC.internalvars.GA_stepOPC_cartier = "";
        break;
    }
}
tC.internalvars_5181.initiators.var528();
tC.internalvars_5181_22.listVar.push(528);
tC.internalvars_5181.initiators.var592 = function() {
    tC.internalvars.dcmId = "";
    switch (tC.internalvars.tc_fulldomain) {
    case "www.cartier.com":
        tC.internalvars.dcmId = "8437420";
        break;
    default:
        tC.internalvars.dcmId = "946397343";
        break;
    }
}
tC.internalvars_5181.initiators.var592();
tC.internalvars_5181_22.listVar.push(592);
tC.internalvars_5181.initiators.var596 = function() {
    tC.internalvars.twitterPixelId = "";
    switch (tc_vars["nav_countryCode"]) {
    case "GB":
        tC.internalvars.twitterPixelId = "o1lq2";
        break;
    case "JP":
        tC.internalvars.twitterPixelId = "o459g";
        break;
    case "FR":
        tC.internalvars.twitterPixelId = "o6xjq";
        break;
    case "CH":
        tC.internalvars.twitterPixelId = "o75mi";
        break;
    default:
        tC.internalvars.twitterPixelId = "";
        break;
    }
}
tC.internalvars_5181.initiators.var596();
tC.internalvars_5181_22.listVar.push(596);
tC.internalvars_5181.initiators.var604 = function() {
    tC.internalvars.snapchatId = "";
    switch (tc_vars["nav_countryCode"]) {
    case "AE":
        tC.internalvars.snapchatId = "f47b40be-1d04-4c55-9dca-6e0d86e96538";
        break;
    default:
        tC.internalvars.snapchatId = "4f900e42-92af-4fc6-bbe0-a3a2327db456";
        break;
    }
}
tC.internalvars_5181.initiators.var604();
tC.internalvars_5181_22.listVar.push(604);
tC.internalvars_5181.initiators.var610 = function() {
    tC.internalvars.mobkoiCategoryId = "";
    switch (tc_vars["nav_countryCode"]) {
    case "US":
        tC.internalvars.mobkoiCategoryId = "carti0";
        break;
    default:
        tC.internalvars.mobkoiCategoryId = "";
        break;
    }
}
tC.internalvars_5181.initiators.var610();
tC.internalvars_5181_22.listVar.push(610);
tC.internalvars_5181.initiators.var612 = function() {
    tC.internalvars.dbmSourceId = "";
    switch (tC.internalvars.tc_fulldomain) {
    case "www.cartier.mx":
        tC.internalvars.dbmSourceId = "8618991";
        break;
    default:
        tC.internalvars.dbmSourceId = "";
        break;
    }
}
tC.internalvars_5181.initiators.var612();
tC.internalvars_5181_22.listVar.push(612);
tC.internalvars_5181.initiators.var614 = function() {
    tC.internalvars.dbmCategoryId = "";
    switch (tC.internalvars.tc_fulldomain) {
    case "www.cartier.mx":
        tC.internalvars.dbmCategoryId = "i0cmlh6t";
        break;
    default:
        tC.internalvars.dbmCategoryId = "";
        break;
    }
}
tC.internalvars_5181.initiators.var614();
tC.internalvars_5181_22.listVar.push(614);
tC.internalvars_5181.initiators.var618 = function() {
    tC.internalvars.sa360FunnelCatId = "";
    switch (tc_vars["nav_stepName"]) {
    case "CheckMail":
        tC.internalvars.sa360FunnelCatId = "f-login";
        break;
    case "ShippingAddress":
        tC.internalvars.sa360FunnelCatId = "f-delivery";
        break;
    case "Payment":
        tC.internalvars.sa360FunnelCatId = "f-pay";
        break;
    default:
        tC.internalvars.sa360FunnelCatId = "";
        break;
    }
}
tC.internalvars_5181.initiators.var618();
tC.internalvars_5181_22.listVar.push(618);
tC.internalvars_5181.initiators.var656 = function() {
    tC.internalvars.pinterestTagId = "";
    switch (tc_vars["nav_countryCode"]) {
    case "FR":
        tC.internalvars.pinterestTagId = "2613354839647";
        break;
    case "GB":
        tC.internalvars.pinterestTagId = "2614043374120";
        break;
    case "DE":
        tC.internalvars.pinterestTagId = "2613084961102";
        break;
    case "IT":
        tC.internalvars.pinterestTagId = "2613434163640";
        break;
    case "CH":
        tC.internalvars.pinterestTagId = "2614074044888";
        break;
    case "ES":
        tC.internalvars.pinterestTagId = "2613780620982";
        break;
    case "NL":
        tC.internalvars.pinterestTagId = "2612398649064";
        break;
    case "BE":
        tC.internalvars.pinterestTagId = "2613221146871";
        break;
    case "DK":
        tC.internalvars.pinterestTagId = "2614392083812";
        break;
    case "SE":
        tC.internalvars.pinterestTagId = "2612474822959";
        break;
    default:
        tC.internalvars.pinterestTagId = "2613636028239";
        break;
    }
}
tC.internalvars_5181.initiators.var656();
tC.internalvars_5181_22.listVar.push(656);
tC.internalvars_5181.initiators.var672 = function() {
    tC.internalvars.mInsightId = "";
    switch (tc_vars["nav_pagetype"]) {
    case "Product pages":
        tC.internalvars.mInsightId = "V2_894411";
        break;
    default:
        tC.internalvars.mInsightId = "tC.internalvars.mInsightIdNotProdPag";
        break;
    }
}
tC.internalvars_5181.initiators.var672();
tC.internalvars_5181_22.listVar.push(672);
tC.internalvars_5181.initiators.var676 = function() {
    tC.internalvars.xandrConvId = "";
    switch (tc_vars["nav_pagetype"]) {
    case "Product pages":
        tC.internalvars.xandrConvId = "1290096";
        break;
    default:
        tC.internalvars.xandrConvId = "tC.internalvars.xandrConvIdNotPP";
        break;
    }
}
tC.internalvars_5181.initiators.var676();
tC.internalvars_5181_22.listVar.push(676);
tC.internalvars_5181.initiators.var680 = function() {
    tC.internalvars.xandrSegId = "";
    switch (tc_vars["nav_pagetype"]) {
    case "Product Pages":
        tC.internalvars.xandrSegId = "22677923";
        break;
    default:
        tC.internalvars.xandrSegId = "tC.internalvars.xandrSegIdNotPP";
        break;
    }
}
tC.internalvars_5181.initiators.var680();
tC.internalvars_5181_22.listVar.push(680);
tC.internalvars_5181.initiators.var719 = function() {
    tC.internalvars.isSellable = "";
    switch (tc_vars["product_status"]) {
    case "NOTBUYABLE":
        tC.internalvars.isSellable = "notsellable";
        break;
    default:
        tC.internalvars.isSellable = "sellable";
        break;
    }
}
tC.internalvars_5181.initiators.var719();
tC.internalvars_5181_22.listVar.push(719);
tC.internalvars_5181.initiators.var725 = function() {
    tC.internalvars.quickBuyCategory = "";
    switch (tc_vars["msn_cgGroup"]) {
    case "Product pages":
        tC.internalvars.quickBuyCategory = "Product page";
        break;
    case "Product listing pages":
        tC.internalvars.quickBuyCategory = "Product list";
        break;
    default:
        tC.internalvars.quickBuyCategory = "";
        break;
    }
}
tC.internalvars_5181.initiators.var725();
tC.internalvars_5181_22.listVar.push(725);
tC.internalvars_5181.initiators.var748 = function() {
    tC.internalvars.sizmekAppointmentId = "";
    switch (tc_vars["nav_countryCode"]) {
    case "GB":
        tC.internalvars.sizmekAppointmentId = "494083";
        break;
    default:
        tC.internalvars.sizmekAppointmentId = "1347051";
        break;
    }
}
tC.internalvars_5181.initiators.var748();
tC.internalvars_5181_22.listVar.push(748);
tC.internalvars_5181.initiators.var756 = typeof tC.internalvars_5181.initiators.var756 == "function" ? tC.internalvars_5181.initiators.var756 : function() {
    tC.internalvars.cybbaID = tC.internalvars.cybbaID ? tC.internalvars.cybbaID : "";
}
tC.internalvars_5181.initiators.var756();
tC.internalvars_5181_22.listVar.push(756);
tC.internalvars_5181.initiators.var758 = typeof tC.internalvars_5181.initiators.var758 == "function" ? tC.internalvars_5181.initiators.var758 : function() {
    tC.internalvars.HeroID = tC.internalvars.HeroID ? tC.internalvars.HeroID : "";
}
tC.internalvars_5181.initiators.var758();
tC.internalvars_5181_22.listVar.push(758);
tC.internalvars_5181.initiators.var766 = typeof tC.internalvars_5181.initiators.var766 == "function" ? tC.internalvars_5181.initiators.var766 : function() {
    tC.internalvars.ric_pepperjam_id = tC.internalvars.ric_pepperjam_id ? tC.internalvars.ric_pepperjam_id : "";
}
tC.internalvars_5181.initiators.var766();
tC.internalvars_5181_22.listVar.push(766);
tC.internalvars_5181.initiators.var817 = function() {
    tC.internalvars.ricfreespeeid = "";
    switch (tc_vars["nav_countryCode"]) {
    case "GB":
        tC.internalvars.ricfreespeeid = "7d90c12e-601f-45df-89e4-e82d0c6cdcaa";
        break;
    case "FR":
        tC.internalvars.ricfreespeeid = "35141c19-1fc8-4056-b5dc-4c16a4a8edce";
        break;
    case "DE":
        tC.internalvars.ricfreespeeid = "ade8c329-0800-42a1-a6a5-336ebf43dd5f";
        break;
    case "ES":
        tC.internalvars.ricfreespeeid = "2056be9f-d174-42de-bc42-7dfe5b29e398";
        break;
    case "CH":
        tC.internalvars.ricfreespeeid = "c3259e49-d720-43de-b097-4d2258a590b9";
        break;
    default:
        tC.internalvars.ricfreespeeid = "";
        break;
    }
}
tC.internalvars_5181.initiators.var817();
tC.internalvars_5181_22.listVar.push(817);
tC.internalvars_5181.initiators.var823 = function() {
    tC.internalvars.minsightServer = "";
    switch (tc_vars["nav_countryCode"]) {
    case "ES":
        tC.internalvars.minsightServer = "es-gmtdmp.mookie1.com";
        break;
    case "CH":
        tC.internalvars.minsightServer = "ch-gmtdmp.mookie1.com";
        break;
    case "GB":
        tC.internalvars.minsightServer = "gb-gmtdmp.mookie1.com";
        break;
    case "DE":
        tC.internalvars.minsightServer = "de-gmtdmp.mookie1.com";
        break;
    case "FR":
        tC.internalvars.minsightServer = "fr-gmtdmp.mookie1.com";
        break;
    case "IT":
        tC.internalvars.minsightServer = "it-gmtdmp.mookie1.com";
        break;
    default:
        tC.internalvars.minsightServer = "_not-set_";
        break;
    }
}
tC.internalvars_5181.initiators.var823();
tC.internalvars_5181_22.listVar.push(823);
tC.internalvars_5181.initiators.var825 = function() {
    tC.internalvars.mInsightAddToCartID = "";
    switch (tc_vars["nav_countryCode"]) {
    case "ES":
        tC.internalvars.mInsightAddToCartID = "V2_930233";
        break;
    default:
        tC.internalvars.mInsightAddToCartID = "_not-set_";
        break;
    }
}
tC.internalvars_5181.initiators.var825();
tC.internalvars_5181_22.listVar.push(825);
tC.internalvars_5181.initiators.var837 = typeof tC.internalvars_5181.initiators.var837 == "function" ? tC.internalvars_5181.initiators.var837 : function() {
    tC.internalvars.ric_salesforceID = tC.internalvars.ric_salesforceID ? tC.internalvars.ric_salesforceID : "";
}
tC.internalvars_5181.initiators.var837();
tC.internalvars_5181_22.listVar.push(837);
tC.internalvars_5181.initiators.var839 = typeof tC.internalvars_5181.initiators.var839 == "function" ? tC.internalvars_5181.initiators.var839 : function() {
    tC.internalvars.ric_salesforceEnv = tC.internalvars.ric_salesforceEnv ? tC.internalvars.ric_salesforceEnv : "";
}
tC.internalvars_5181.initiators.var839();
tC.internalvars_5181_22.listVar.push(839);
tC.internalvars_5181.initiators.var841 = typeof tC.internalvars_5181.initiators.var841 == "function" ? tC.internalvars_5181.initiators.var841 : function() {
    tC.internalvars.ric_salesforceEnv2 = tC.internalvars.ric_salesforceEnv2 ? tC.internalvars.ric_salesforceEnv2 : "";
}
tC.internalvars_5181.initiators.var841();
tC.internalvars_5181_22.listVar.push(841);
tC.internalvars_5181.initiators.var843 = typeof tC.internalvars_5181.initiators.var843 == "function" ? tC.internalvars_5181.initiators.var843 : function() {
    tC.internalvars.ric_salesforceGslURL = tC.internalvars.ric_salesforceGslURL ? tC.internalvars.ric_salesforceGslURL : "";
}
tC.internalvars_5181.initiators.var843();
tC.internalvars_5181_22.listVar.push(843);
tC.internalvars_5181.initiators.var845 = typeof tC.internalvars_5181.initiators.var845 == "function" ? tC.internalvars_5181.initiators.var845 : function() {
    tC.internalvars.ric_SalesforceDepID = tC.internalvars.ric_SalesforceDepID ? tC.internalvars.ric_SalesforceDepID : "";
}
tC.internalvars_5181.initiators.var845();
tC.internalvars_5181_22.listVar.push(845);
tC.internalvars_5181.initiators.var847 = typeof tC.internalvars_5181.initiators.var847 == "function" ? tC.internalvars_5181.initiators.var847 : function() {
    tC.internalvars.ric_salesforceAGURL = tC.internalvars.ric_salesforceAGURL ? tC.internalvars.ric_salesforceAGURL : "";
}
tC.internalvars_5181.initiators.var847();
tC.internalvars_5181_22.listVar.push(847);
tC.internalvars_5181.initiators.var883 = typeof tC.internalvars_5181.initiators.var883 == "function" ? tC.internalvars_5181.initiators.var883 : function() {
    tC.internalvars.ric_salesforcelanguage = tC.internalvars.ric_salesforcelanguage ? tC.internalvars.ric_salesforcelanguage : "";
}
tC.internalvars_5181.initiators.var883();
tC.internalvars_5181_22.listVar.push(883);
tC.internalvars_5181.initiators.var885 = typeof tC.internalvars_5181.initiators.var885 == "function" ? tC.internalvars_5181.initiators.var885 : function() {
    tC.internalvars.ric_sfdefaultmintext = tC.internalvars.ric_sfdefaultmintext ? tC.internalvars.ric_sfdefaultmintext : "";
}
tC.internalvars_5181.initiators.var885();
tC.internalvars_5181_22.listVar.push(885);
tC.internalvars_5181.initiators.var887 = typeof tC.internalvars_5181.initiators.var887 == "function" ? tC.internalvars_5181.initiators.var887 : function() {
    tC.internalvars.ric_sfdismint = tC.internalvars.ric_sfdismint ? tC.internalvars.ric_sfdismint : "";
}
tC.internalvars_5181.initiators.var887();
tC.internalvars_5181_22.listVar.push(887);
tC.internalvars_5181.initiators.var889 = typeof tC.internalvars_5181.initiators.var889 == "function" ? tC.internalvars_5181.initiators.var889 : function() {
    tC.internalvars.ric_sfCountryID = tC.internalvars.ric_sfCountryID ? tC.internalvars.ric_sfCountryID : "";
}
tC.internalvars_5181.initiators.var889();
tC.internalvars_5181_22.listVar.push(889);
tC.internalvars_5181.initiators.var891 = typeof tC.internalvars_5181.initiators.var891 == "function" ? tC.internalvars_5181.initiators.var891 : function() {
    tC.internalvars.ric_sfRICCRC_chat = tC.internalvars.ric_sfRICCRC_chat ? tC.internalvars.ric_sfRICCRC_chat : "";
}
tC.internalvars_5181.initiators.var891();
tC.internalvars_5181_22.listVar.push(891);
tC.internalvars_5181.initiators.var893 = typeof tC.internalvars_5181.initiators.var893 == "function" ? tC.internalvars_5181.initiators.var893 : function() {
    tC.internalvars.ric_sfLiveAgentDev = tC.internalvars.ric_sfLiveAgentDev ? tC.internalvars.ric_sfLiveAgentDev : "";
}
tC.internalvars_5181.initiators.var893();
tC.internalvars_5181_22.listVar.push(893);
tC.internalvars_5181.initiators.var895 = typeof tC.internalvars_5181.initiators.var895 == "function" ? tC.internalvars_5181.initiators.var895 : function() {
    tC.internalvars.ric_sfTextLeave = tC.internalvars.ric_sfTextLeave ? tC.internalvars.ric_sfTextLeave : "";
}
tC.internalvars_5181.initiators.var895();
tC.internalvars_5181_22.listVar.push(895);
tC.internalvars_5181.initiators.var897 = typeof tC.internalvars_5181.initiators.var897 == "function" ? tC.internalvars_5181.initiators.var897 : function() {
    tC.internalvars.ric_sfTextStart = tC.internalvars.ric_sfTextStart ? tC.internalvars.ric_sfTextStart : "";
}
tC.internalvars_5181.initiators.var897();
tC.internalvars_5181_22.listVar.push(897);
tC.internalvars_5181.initiators.var912 = typeof tC.internalvars_5181.initiators.var912 == "function" ? tC.internalvars_5181.initiators.var912 : function() {
    tC.internalvars.ric_sf_text_gotit = tC.internalvars.ric_sf_text_gotit ? tC.internalvars.ric_sf_text_gotit : "";
}
tC.internalvars_5181.initiators.var912();
tC.internalvars_5181_22.listVar.push(912);
tC.internalvars_5181.initiators.var913 = typeof tC.internalvars_5181.initiators.var913 == "function" ? tC.internalvars_5181.initiators.var913 : function() {
    tC.internalvars.ric_sf_loading_text = tC.internalvars.ric_sf_loading_text ? tC.internalvars.ric_sf_loading_text : "";
}
tC.internalvars_5181.initiators.var913();
tC.internalvars_5181_22.listVar.push(913);
tC.internalvars_5181.initiators.var924 = typeof tC.internalvars_5181.initiators.var924 == "function" ? tC.internalvars_5181.initiators.var924 : function() {
    tC.internalvars.ric_Partnerize_id = tC.internalvars.ric_Partnerize_id ? tC.internalvars.ric_Partnerize_id : "";
}
tC.internalvars_5181.initiators.var924();
tC.internalvars_5181_22.listVar.push(924);
tC.internalvars_5181.initiators.var957 = function() {
    tC.internalvars.tiktokId = "";
    switch (tc_vars["nav_countryCode"]) {
    case "FR":
        tC.internalvars.tiktokId = "C5EPKKVGE0M3SF4IO6M0";
        break;
    case "DE":
        tC.internalvars.tiktokId = "C600S8BG5HFAHHFB9700";
        break;
    case "CH":
        tC.internalvars.tiktokId = "C6EE9LRJAJ9ECE1R2ENG";
        break;
    default:
        tC.internalvars.tiktokId = "";
        break;
    }
}
tC.internalvars_5181.initiators.var957();
tC.internalvars_5181_22.listVar.push(957);
tC.internalvars_5181.initiators.var973 = function() {
    tC.internalvars.countryInPinterestScope = "";
    switch (tc_vars["nav_countryCode"]) {
    case "FR":
        tC.internalvars.countryInPinterestScope = "true";
        break;
    case "GB":
        tC.internalvars.countryInPinterestScope = "true";
        break;
    case "DE":
        tC.internalvars.countryInPinterestScope = "true";
        break;
    case "IT":
        tC.internalvars.countryInPinterestScope = "true";
        break;
    case "CH":
        tC.internalvars.countryInPinterestScope = "true";
        break;
    case "ES":
        tC.internalvars.countryInPinterestScope = "true";
        break;
    case "NL":
        tC.internalvars.countryInPinterestScope = "true";
        break;
    case "BE":
        tC.internalvars.countryInPinterestScope = "true";
        break;
    case "DK":
        tC.internalvars.countryInPinterestScope = "true";
        break;
    case "SE":
        tC.internalvars.countryInPinterestScope = "true";
        break;
    default:
        tC.internalvars.countryInPinterestScope = "false";
        break;
    }
}
tC.internalvars_5181.initiators.var973();
tC.internalvars_5181_22.listVar.push(973);
tC.internalvars_5181.initiators.var975 = function() {
    tC.internalvars.facebookKeringCountryScope = "";
    switch (tc_vars["nav_countryCode"]) {
    case "FR":
        tC.internalvars.facebookKeringCountryScope = "true";
        break;
    case "IT":
        tC.internalvars.facebookKeringCountryScope = "true";
        break;
    default:
        tC.internalvars.facebookKeringCountryScope = "false";
        break;
    }
}
tC.internalvars_5181.initiators.var975();
tC.internalvars_5181_22.listVar.push(975);
tC.internalvars_5181.initiators.var1032 = function() {
    tC.internalvars.DV360LandingPageFR = "";
    switch (tc_vars["pguri"]) {
    case "/fr_fr/fragrances/women-fragrances/la-panthere-women-fragrances":
        tC.internalvars.DV360LandingPageFR = "carti002";
        break;
    case "/fr_fr/be-inspired/cartier-classics/":
        tC.internalvars.DV360LandingPageFR = "carti003";
        break;
    case "/en_fr/fragrances/women-fragrances/la-panthere-women-fragrances":
        tC.internalvars.DV360LandingPageFR = "carti002";
        break;
    case "/en_fr/be-inspired/cartier-classics/":
        tC.internalvars.DV360LandingPageFR = "carti003";
        break;
    default:
        tC.internalvars.DV360LandingPageFR = "_not-set_";
        break;
    }
}
tC.internalvars_5181.initiators.var1032();
tC.internalvars_5181_22.listVar.push(1032);
tC.internalvars_5181.initiators.var1037 = function() {
    tC.internalvars.dv360_adv_id = "";
    switch (tc_vars["nav_countryCode"]) {
    case "GB":
        tC.internalvars.dv360_adv_id = "DC-11070562";
        break;
    case "ES":
        tC.internalvars.dv360_adv_id = "DC-12305983";
        break;
    default:
        tC.internalvars.dv360_adv_id = "";
        break;
    }
}
tC.internalvars_5181.initiators.var1037();
tC.internalvars_5181_22.listVar.push(1037);
tC.internalvars_5181.initiators.var1038 = function() {
    tC.internalvars.dv360_countingMethod = "";
    switch (tc_vars["nav_countryCode"]) {
    case "GB":
        tC.internalvars.dv360_countingMethod = "Standard";
        break;
    case "ES":
        tC.internalvars.dv360_countingMethod = "items_sold";
        break;
    default:
        tC.internalvars.dv360_countingMethod = "";
        break;
    }
}
tC.internalvars_5181.initiators.var1038();
tC.internalvars_5181_22.listVar.push(1038);
tC.internalvars_5181.initiators.var1039 = function() {
    tC.internalvars.dv360_activityTagString = "";
    switch (tc_vars["nav_countryCode"]) {
    case "GB":
        tC.internalvars.dv360_activityTagString = "carti00";
        break;
    case "ES":
        tC.internalvars.dv360_activityTagString = "carti0";
        break;
    default:
        tC.internalvars.dv360_activityTagString = "";
        break;
    }
}
tC.internalvars_5181.initiators.var1039();
tC.internalvars_5181_22.listVar.push(1039);
tC.internalvars_5181.initiators.var1044 = function() {
    tC.internalvars.tiktokKeringCountryScope = "";
    switch (tc_vars["nav_countryCode"]) {
    case "FR":
        tC.internalvars.tiktokKeringCountryScope = "true";
        break;
    case "IT":
        tC.internalvars.tiktokKeringCountryScope = "true";
        break;
    default:
        tC.internalvars.tiktokKeringCountryScope = "false";
        break;
    }
}
tC.internalvars_5181.initiators.var1044();
tC.internalvars_5181_22.listVar.push(1044);
tC.internalvars_5181.initiators.var1047 = function() {
    tC.internalvars.snapchatKeringScope = "";
    switch (tc_vars["nav_countryCode"]) {
    case "FR":
        tC.internalvars.snapchatKeringScope = "true";
        break;
    case "IT":
        tC.internalvars.snapchatKeringScope = "true";
        break;
    default:
        tC.internalvars.snapchatKeringScope = "false";
        break;
    }
}
tC.internalvars_5181.initiators.var1047();
tC.internalvars_5181_22.listVar.push(1047);
/*END_VARIABLES_BLOCK*/

/*DYNAMIC JS BLOCK 2*/

/*END DYNAMIC JS BLOCK 2*/

/*CUSTOM_JS_BLOCK2*/

/*END_CUSTOM_JS_BLOCK2*/
tC.container_5181_22.datastorage();

//----------------------------------------------------

//----

tC.extend({
    executeTag478_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        !function(e) {
            if (!window.pintrk) {
                window.pintrk = function() {
                    window.pintrk.queue.push(Array.prototype.slice.call(arguments))
                }
                ;
                var n = window.pintrk;
                n.queue = [],
                n.version = "3.0";
                var t = document.createElement("script");
                t.async = !0,
                t.src = e;
                t.id = "tc_script__1";
                r = document.getElementsByTagName("script")[0];
                r.parentNode.insertBefore(t, r)
            }
        }("https://s.pinimg.com/ct/core.js");
        pintrk('load', tC.internalvars.pinterestTagId);
        pintrk('page');
    }
});
tC.extend({
    executeTag216_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        !function(f, b, e, v, n, t, s) {
            if (f.fbq)
                return;
            n = f.fbq = function() {
                n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            }
            ;
            if (!f._fbq)
                f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
        if (tc_vars["nav_countryCode"] == 'US') {
            fbq('dataProcessingOptions', ['LDU'], 0, 0);
        }
        fbq('init', tC.internalvars.ricFacebookID, {
            em: tc_vars["user_email_sha256"]
        });
        fbq('track', 'PageView');
    }
});
tC.extend({
    executeTag304_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        var google_conversion_id = tC.internalvars.dcmId;
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
        tC.scriptElt1 = document.createElement("script");
        tC.scriptElt1.id = "tc_script_304_1";
        tC.scriptElt1.type = "text/javascript";
        tC.scriptElt1.src = "//www.googleadservices.com/pagead/conversion.js";
        tC.scriptElt1.async = true;
        tC.scriptElt1.defer = 'defer';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
    }
});
tC.extend({
    executeTag306_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        var google_conversion_id = 946397343;
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
        var google_tag_params = {
            pagetype: "",
            productcategory: tc_vars["product_category"],
            productcollection: tc_vars["product_collection"]
        };
        tC.scriptElt1 = document.createElement("script");
        tC.scriptElt1.id = "tc_script_306_1";
        tC.scriptElt1.type = "text/javascript";
        tC.scriptElt1.src = "//www.googleadservices.com/pagead/conversion.js";
        tC.scriptElt1.async = true;
        tC.scriptElt1.defer = 'defer';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
    }
});
tC.extend({
    executeTag410_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        !function(s, e, t) {
            var m = "adotmob"
              , n = Date.now();
            s.adotmobAnalyticsObject = m,
            s[m] = s[m] || {
                init: function(e, t) {
                    var n = t && t.timeMesurement
                      , a = this;
                    if (s[m].c = e,
                    !1 !== n)
                        var i = n && 1e3 * n.threshold || 3e4
                          , o = n && 1e3 * n.frequency || 5e3
                          , c = 0
                          , r = setInterval(function() {
                            c += o,
                            a.event({
                                category: "Time Spent on Page",
                                action: "Spent Time on Page",
                                label: c / 1e3
                            }),
                            i <= c && clearInterval(r)
                        }, o)
                },
                event: function(e) {
                    (s[m].q = s[m].q || []).push(e)
                },
                dimensions: function(e) {
                    s[m].d = e
                }
            },
            s[m].ts = n,
            s[m].event({
                category: "page",
                action: "view",
                ts: n
            });
            var a = e.createElement("script")
              , i = e.getElementsByTagName("script")[0];
            a.id = "tc_script_410_1";
            a.async = 1,
            a.src = t,
            i.parentNode.insertBefore(a, i)
        }(window, document, "//www.atswsd.com/v1/script.js");
        adotmob.init('cartier');
    }
});
tC.extend({
    executeTag354_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        var ebSession = tC.getCookie("_ga").split(".")[3];
        var ebRand = Math.random() + '';
        var script = document.createElement('script');
        ebRand = ebRand * 1000000;
        script.type = "text/javascript";
        script.async = true;
        script.src = ("https:" == document.location.protocol ? "https://" : "http://") + "bs.serving-sys.com/Serving/ActivityServer.bs?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_68}&cn=as&ActivityID=" + tC.internalvars.sizmekArrivalId + "&rnd=" + ebRand + "&Session=" + ebSession;
        document.getElementsByTagName('body')[0].appendChild(script);
    }
});
tC.extend({
    executeTag424_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        _linkedin_data_partner_id = "26500";
        (function() {
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.id = "tc_script_424_1";
            b.type = "text/javascript";
            b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
        }
        )();
    }
});
tC.extend({
    executeTag330_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        tC.scriptElt1 = document.createElement("script");
        tC.scriptElt1.id = "tc_script_330_1";
        tC.scriptElt1.src = "https://www.googletagmanager.com/gtag/js?id=DC-9271966";
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
        window.dataLayer = window.dataLayer || [];
        var gtag = function() {
            dataLayer.push(arguments);
        };
        gtag('js', new Date());
        gtag('config', 'DC-9271966');
        var stepName = "";
        switch (tc_array_events["stepName"]) {
        case "CheckMail":
            stepName = "f-login";
            break;
        case "ShippingAddress":
            stepName = "f-delivery";
            break;
        case "Payment":
            stepName = "f-pay";
            break;
        }
        gtag('event', 'conversion', {
            'allow_custom_scripts': true,
            'u1': tC.internalvars.ricCartNameArray,
            'u2': tC.internalvars.ricCartIDArray,
            'u3': tC.internalvars.ricCartCollectionArray,
            'u4': tC.internalvars.ricCartCategoryArray,
            'u5': tC.internalvars.ricCartPriceArray,
            'send_to': 'DC-9271966/car-c/' + stepName + '+standard'
        });
    }
});
tC.extend({
    executeTag390_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        tC.imageElt1 = document.createElement("img");
        tC.imageElt1.id = "tc_img__1";
        tC.imageElt1.height = "0";
        tC.imageElt1.width = "0";
        tC.imageElt1.border = "0";
        tC.imageElt1.alt = "";
        tC.imageElt1.src = "https://ib.adnxs.com/pixie?pi=" + tC.internalvars.xandrSiteId + "&e=PageView&script=0";
        document.body.appendChild(tC.imageElt1);
    }
});
tC.extend({
    executeTag392_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        tC.imageElt1 = document.createElement("img");
        tC.imageElt1.id = "tc_img__1";
        tC.imageElt1.height = "0";
        tC.imageElt1.width = "0";
        tC.imageElt1.border = "0";
        tC.imageElt1.alt = "";
        tC.imageElt1.src = "https://ib.adnxs.com/pixie?pi=" + tC.internalvars.xandrSiteId + "&e=ArrivalVisit&script=0";
        document.body.appendChild(tC.imageElt1);
    }
});
tC.extend({
    executeTag574_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        (function(e, t, n) {
            if (e.snaptr)
                return;
            var a = e.snaptr = function() {
                a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments)
            }
            ;
            a.queue = [];
            var s = 'script';
            r = t.createElement(s);
            r.async = !0;
            r.src = n;
            var u = t.getElementsByTagName(s)[0];
            u.parentNode.insertBefore(r, u);
        }
        )(window, document, 'https://sc-static.net/scevent.min.js');
        snaptr('init', tC.internalvars.snapchatId);
        snaptr('track', 'START_CHECKOUT', {
            payment_info_available: 1,
            'item_category': tC.internalvars.ricCartCategoryArray,
            'item_ids': tC.internalvars.ricCartIDArray
        });
    }
});
tC.extend({
    executeTag586_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        fbq('trackSingle', tC.internalvars.ricFacebookID, 'InitiateCheckout', {
            content_type: 'product',
            content_name: tC.internalvars.ricCartNameArray,
            content_category: tC.internalvars.ricCartCategoryArray,
            content_ids: tC.internalvars.ricCartIDArray,
            value: tc_vars["cart_total"],
            currency: tc_vars["nav_currency"].toUpperCase()
        });
    }
});
tC.extend({
    executeTag673_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        var iframeElt = document.createElement("iframe");
        iframeElt.id = "tc_iframe__1";
        iframeElt.src = 'https://www.groupm-projects.com/tools/ch.xlptracker/?id=406c485895df4c0e4f9a11f2a0703ea2&r=0.12308633074711817';
        iframeElt.scrolling = "no";
        iframeElt.frameborder = "0";
        iframeElt.width = "1";
        iframeElt.height = "1";
        document.body.appendChild(iframeElt);
    }
});
tC.extend({
    executeTag688_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        tC.imageElt1 = document.createElement("img");
        tC.imageElt1.id = "tc_img__1";
        tC.imageElt1.height = "0";
        tC.imageElt1.width = "0";
        tC.imageElt1.border = "0";
        tC.imageElt1.alt = "";
        tC.imageElt1.src = "https://secure.adnxs.com/px?id=" + '1495711' + "&seg=" + '26925865' + "&redir=https%3A%2F%2Fpixel.mediaiqdigital.com%2Fpixel%3F%26pixel_id%3D1495711%26uid%3D%24%7BUID%7D&t=2";
        document.body.appendChild(tC.imageElt1);
    }
});
tC.extend({
    executeTag723_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        ttq.instance(tC.internalvars.tiktokId).track('Pageview');
    }
});
tC.extend({
    executeTag765_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        !function(w, d, t) {
            w.TiktokAnalyticsObject = t;
            var ttq = w[t] = w[t] || [];
            ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"],
            ttq.setAndDefer = function(t, e) {
                t[e] = function() {
                    t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
                }
            }
            ;
            for (var i = 0; i < ttq.methods.length; i++)
                ttq.setAndDefer(ttq, ttq.methods[i]);
            ttq.instance = function(t) {
                for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
                    ttq.setAndDefer(e, ttq.methods[n]);
                return e
            }
            ,
            ttq.load = function(e, n) {
                var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
                ttq._i = ttq._i || {},
                ttq._i[e] = [],
                ttq._i[e]._u = i,
                ttq._t = ttq._t || {},
                ttq._t[e] = +new Date,
                ttq._o = ttq._o || {},
                ttq._o[e] = n || {};
                var o = document.createElement("script");
                o.type = "text/javascript",
                o.async = !0,
                o.src = i + "?sdkid=" + e + "&lib=" + t;
                var a = document.getElementsByTagName("script")[0];
                a.parentNode.insertBefore(o, a)
            }
            ;
            ttq.load('C6EE9LRJAJ9ECE1R2ENG');
            ttq.page();
        }(window, document, 'ttq');
    }
});
tC.extend({
    executeTag778_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        var contentsArray = [];
        var cartValue = 0
        for (var i = 0; i < tC.internalvars.ricCartIDArray.length; i++) {
            contentsArray.push({
                content_id: tC.internalvars.ricCartIDArray[i].replace(/^CR/i, ""),
                content_name: tc_vars["product_eng_title"][i],
                content_category: tc_vars["product_eng_category"][i],
                quantity: tC.internalvars.ricCartQuantityArray[i],
                price: tC.internalvars.ricCartPriceArray[i]
            });
            cartValue += Number(tC.internalvars.ricCartPriceArray[i]);
        }
        ttq.instance('C70ASRVOUAG086PM0NNG').track('InitiateCheckout', {
            content_type: 'product',
            contents: contentsArray,
            value: cartValue,
            currency: tc_vars["nav_currency"].toUpperCase()
        });
    }
});
tC.extend({
    executeTag784_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        ttq.instance('C70ASRVOUAG086PM0NNG').track('Pageview');
    }
});
tC.extend({
    executeTag791_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        !function(f, b, e, v, n, t, s) {
            if (f.fbq)
                return;
            n = f.fbq = function() {
                n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            }
            ;
            if (!f._fbq)
                f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '3137383833193929');
        fbq('trackSingle', '3137383833193929', 'PageView');
    }
});
tC.extend({
    executeTag796_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        var cartItemIsEyewear = false;
        if (tc_vars['cart_items'] !== undefined) {
            for (var i = 0; i < tc_vars['cart_items'].length; i++) {
                if (/Eyewear/i.test(tc_vars['cart_items'][i]['cart_item_eng_category'])) {
                    cartItemIsEyewear = true;
                    break;
                }
            }
        }
        var orderItemIsEyewear = false;
        if (tc_vars['order_items'] !== undefined) {
            for (var i = 0; i < tc_vars['order_items'].length; i++) {
                if (/Eyewear/i.test(tc_vars['order_items'][i]['order_item_eng_category'])) {
                    orderItemIsEyewear = true;
                    break;
                }
            }
        }
        if (cartItemIsEyewear === true || orderItemIsEyewear === true) {
            !function(f, b, e, v, n, t, s) {
                if (f.fbq)
                    return;
                n = f.fbq = function() {
                    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                }
                ;
                if (!f._fbq)
                    f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = '2.0';
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s)
            }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '3137383833193929');
            fbq('trackSingle', '3137383833193929', 'PageView');
        }
    }
});
tC.extend({
    executeTag802_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        var cartItemIsEyewear = false;
        var contentsArray = [];
        var basketPrice = 0;
        if (tc_vars["cart_items"] !== undefined) {
            for (var i = 0; i < tc_vars["cart_items"].length; i++) {
                if (/Eyewear/i.test(tc_vars["cart_items"][i]['cart_item_eng_category'])) {
                    cartItemIsEyewear = true;
                    break;
                }
            }
        }
        if (cartItemIsEyewear === true) {
            for (var i = 0; i < tc_vars["cart_items"].length; i++) {
                if (/Eyewear/i.test(tc_vars["cart_items"][i]['cart_item_eng_category'])) {
                    contentsArray.push({
                        id: tc_vars["cart_items"][i]['cart_item_mfPartNumber'].replace(/^CR/i, ""),
                        name: tc_vars["cart_items"][i]['cart_item_eng_title'],
                        category: tc_vars["cart_items"][i]['cart_item_eng_category']
                    });
                    basketPrice += Number(tc_vars["cart_items"][i]['cart_item_unitprice_ati']);
                }
            }
            fbq('trackSingle', '3137383833193929', 'InitiateCheckout', {
                content_type: 'product',
                contents: contentsArray,
                value: basketPrice,
                currency: tc_vars["nav_currency"].toUpperCase()
            });
        }
    }
});
tC.extend({
    executeTag892_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        !function(w, d, t) {
            w.TiktokAnalyticsObject = t;
            var ttq = w[t] = w[t] || [];
            ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"],
            ttq.setAndDefer = function(t, e) {
                t[e] = function() {
                    t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
                }
            }
            ;
            for (var i = 0; i < ttq.methods.length; i++)
                ttq.setAndDefer(ttq, ttq.methods[i]);
            ttq.instance = function(t) {
                for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
                    ttq.setAndDefer(e, ttq.methods[n]);
                return e
            }
            ,
            ttq.load = function(e, n) {
                var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
                ttq._i = ttq._i || {},
                ttq._i[e] = [],
                ttq._i[e]._u = i,
                ttq._t = ttq._t || {},
                ttq._t[e] = +new Date,
                ttq._o = ttq._o || {},
                ttq._o[e] = n || {};
                var o = document.createElement("script");
                o.type = "text/javascript",
                o.async = !0,
                o.src = i + "?sdkid=" + e + "&lib=" + t;
                var a = document.getElementsByTagName("script")[0];
                a.parentNode.insertBefore(o, a)
            }
            ;
            ttq.load('CDR4JG3C77U4KH13TFRG');
        }(window, document, 'ttq');
        ttq.instance('CDR4JG3C77U4KH13TFRG').track('Pageview');
    }
});
tC.extend({
    executeTag898_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        var cartItemIsEyewear = false;
        if (tc_vars["cart_items"] !== undefined) {
            for (var i = 0; i < tc_vars["cart_items"].length; i++) {
                if (/Eyewear/i.test(tc_vars["cart_items"][i]['cart_item_eng_category'])) {
                    cartItemIsEyewear = true;
                    break;
                }
            }
        }
        var orderItemIsEyewear = false;
        if (tc_vars["order_items"] !== undefined) {
            for (var i = 0; i < tc_vars["order_items"].length; i++) {
                if (/Eyewear/i.test(tc_vars["order_items"][i]['order_item_eng_category'])) {
                    orderItemIsEyewear = true;
                    break;
                }
            }
        }
        if (cartItemIsEyewear === true || orderItemIsEyewear === true) {
            !function(w, d, t) {
                w.TiktokAnalyticsObject = t;
                var ttq = w[t] = w[t] || [];
                ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"],
                ttq.setAndDefer = function(t, e) {
                    t[e] = function() {
                        t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
                    }
                }
                ;
                for (var i = 0; i < ttq.methods.length; i++)
                    ttq.setAndDefer(ttq, ttq.methods[i]);
                ttq.instance = function(t) {
                    for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
                        ttq.setAndDefer(e, ttq.methods[n]);
                    return e
                }
                ,
                ttq.load = function(e, n) {
                    var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
                    ttq._i = ttq._i || {},
                    ttq._i[e] = [],
                    ttq._i[e]._u = i,
                    ttq._t = ttq._t || {},
                    ttq._t[e] = +new Date,
                    ttq._o = ttq._o || {},
                    ttq._o[e] = n || {};
                    var o = document.createElement("script");
                    o.type = "text/javascript",
                    o.async = !0,
                    o.src = i + "?sdkid=" + e + "&lib=" + t;
                    var a = document.getElementsByTagName("script")[0];
                    a.parentNode.insertBefore(o, a)
                }
                ;
                o.id = "tc_script_898_1";
                ttq.load(tC.internalvars.tiktokKeringId);
            }(window, document, 'ttq');
            ttq.instance(tC.internalvars.tiktokKeringId).track('Pageview');
        }
    }
});
tC.extend({
    executeTag899_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        (function(e, t, n) {
            if (e.snaptr)
                return;
            var a = e.snaptr = function() {
                a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments)
            }
            ;
            a.queue = [];
            var s = 'script';
            r = t.createElement(s);
            r.async = !0;
            r.src = n;
            var u = t.getElementsByTagName(s)[0];
            u.parentNode.insertBefore(r, u);
        }
        )(window, document, 'https://sc-static.net/scevent.min.js');
        snaptr('init', tC.internalvars.snapchatKeringId);
        snaptr('track', tC.internalvars.snapchatKeringId, 'PAGE_VIEW');
    }
});
tC.extend({
    executeTag900_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        var cartItemIsEyewear = false;
        if (tc_vars['cart_items'] !== undefined) {
            for (var i = 0; i < tc_vars['cart_items'].length; i++) {
                if (/Eyewear/i.test(tc_vars['cart_items'][i]['cart_item_eng_category'])) {
                    cartItemIsEyewear = true;
                    break;
                }
            }
        }
        var orderItemIsEyewear = false;
        if (tc_vars['order_items'] !== undefined) {
            for (var i = 0; i < tc_vars['order_items'].length; i++) {
                if (/Eyewear/i.test(tc_vars['order_items'][i]['order_item_eng_category'])) {
                    orderItemIsEyewear = true;
                    break;
                }
            }
        }
        if (cartItemIsEyewear === true || orderItemIsEyewear === true) {
            (function(e, t, n) {
                if (e.snaptr)
                    return;
                var a = e.snaptr = function() {
                    a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments)
                }
                ;
                a.queue = [];
                var s = 'script';
                r = t.createElement(s);
                r.async = !0;
                r.src = n;
                var u = t.getElementsByTagName(s)[0];
                u.parentNode.insertBefore(r, u);
            }
            )(window, document, 'https://sc-static.net/scevent.min.js');
            snaptr('init', tC.internalvars.snapchatKeringId);
            snaptr('track', tC.internalvars.snapchatKeringId, 'PAGE_VIEW');
        }
    }
});
tC.extend({
    executeTag928_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        if (tc_vars["nav_stepName"] === 'ShippingAddress') {
            window.teads_e.push({
                name: tC.internalvars.ricCartNameArray,
                price: tc_vars["cart_total"],
                currency: tc_vars["nav_currency"],
                conversionType: "InitiateCheckout"
            });
        }
    }
});
tC.extend({
    executeTag547_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        pintrk('track', 'addtocart', {
            value: tc_array_events["discount_price_ati"],
            order_quantity: tc_array_events["quantity"],
            currency: tc_vars["nav_currency"].toUpperCase(),
            order_id: tc_array_events["mfPartNumber"].replace(/^CR/, ""),
            line_items: [{
                product_name: tc_array_events["prdname"],
                product_id: tc_array_events["mfPartNumber"].replace(/^CR/, ""),
                product_category: tc_array_events["dataSt"].prdcategory,
                product_price: tc_array_events["discount_price_ati"],
                product_quantity: tc_array_events["quantity"]
            }]
        });
    }
});
tC.extend({
    executeTag242_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        snaptr('track', tC.internalvars.snapchatId, 'ADD_CART', {
            'currency': tc_vars["nav_currency"].toUpperCase(),
            'price': tc_array_events["price_ati"],
            'item_category': tc_array_events["prdcategory"],
            'item_ids': tc_array_events["mfPartNumber"].replace(/^CR/i, "")
        });
    }
});
tC.extend({
    executeTag386_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        tC.imageElt1 = document.createElement("img");
        tC.imageElt1.id = "tc_img__1";
        tC.imageElt1.height = "0";
        tC.imageElt1.width = "0";
        tC.imageElt1.border = "0";
        tC.imageElt1.alt = "";
        tC.imageElt1.src = "https://ib.adnxs.com/pixie?pi=" + tC.internalvars.xandrSiteId + "&e=AddtoBasket&script=0";
        document.body.appendChild(tC.imageElt1);
    }
});
tC.extend({
    executeTag344_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        var ebSession = tC.getCookie("_ga").split(".")[3];
        var ebRand = Math.random() + '';
        var script = document.createElement('script');
        ebRand = ebRand * 1000000;
        script.type = "text/javascript";
        script.async = true;
        script.src = ("https:" == document.location.protocol ? "https://" : "http://") + "bs.serving-sys.com/Serving/ActivityServer.bs?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_68}&cn=as&ActivityID=494065&rnd=" + ebRand + "&Session=" + ebSession;
        document.getElementsByTagName('body')[0].appendChild(script);
    }
});
tC.extend({
    executeTag533_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        fbq('trackSingle', tC.internalvars.ricFacebookID, 'AddToCart', {
            content_type: 'product',
            content_name: tc_array_events["name"],
            content_ids: tc_array_events["mfPartNumber"].replace(/^CR/i, ""),
            content_category: tc_array_events["dataSt"].prdcollection,
            content_collection: tc_array_events["dataSt"].prdcategory,
            value: tc_array_events["price_ati"],
            currency: tc_vars["nav_currency"].toUpperCase()
        })
    }
});
tC.extend({
    executeTag592_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        tC.scriptElt1 = document.createElement("script");
        tC.scriptElt1.id = "tc_script_592_1";
        tC.scriptElt1.src = "https://www.googletagmanager.com/gtag/js?id=DC-9271966";
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
        window.dataLayer = window.dataLayer || [];
        var gtag = function() {
            dataLayer.push(arguments);
        };
        gtag('js', new Date());
        gtag('config', 'DC-9271966');
        gtag('event', 'conversion', {
            'allow_custom_scripts': true,
            'u1': tc_array_events["name"],
            'u2': tc_array_events["mfPartNumber"].replace(/^CR/, ""),
            'u3': tc_array_events["dataSt"].prdcollection,
            'u4': tc_array_events["dataSt"].prdcategory,
            'u5': tc_array_events["price_ati"],
            'send_to': 'DC-9271966/car-c/addtobag+standard'
        });
    }
});
tC.extend({
    executeTag776_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        ttq.instance('C70ASRVOUAG086PM0NNG').track('AddToCart', {
            content_type: 'product',
            content_id: tc_vars["product_mfPartNumber"].replace(/^CR/i, ""),
            content_name: tc_vars["product_eng_title"],
            content_category: tc_vars["product_eng_category"],
            quantity: 1,
            price: tc_vars["product_unitprice_ati"],
            value: tc_vars["product_unitprice_ati"],
            currency: tc_vars["nav_currency"].toUpperCase()
        });
    }
});
tC.extend({
    executeTag800_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        fbq('trackSingle', '3137383833193929', 'AddToCart', {
            content_type: 'product',
            content_ids: tc_vars["product_mfPartNumber"].replace(/^CR/i, ""),
            content_name: tc_vars["product_eng_title"],
            content_category: tc_vars["product_eng_category"],
            content_collection: tc_vars["product_collection"],
            value: tc_vars["product_unitprice_ati"],
            currency: tc_vars["nav_currency"].toUpperCase()
        });
    }
});
tC.extend({
    executeTag842_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        if (typeof gtag !== "undefined") {
            gtag('event', 'conversion', {
                'send_to': 'AW-719420560' + "/" + 'eiusCJ7shtsDEJD5hdcC',
                'value': tc_array_events["price_ati"],
                'currency': tC.internalvars.currency,
                'product_id': tc_array_events["mfPartNumber"].replace(/^CR/i, "")
            });
        }
    }
});
tC.extend({
    executeTag894_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        ttq.instance(tC.internalvars.tiktokKeringId).track('AddToCart', {
            content_type: 'product',
            content_id: tc_vars["product_mfPartNumber"].replace(/^CR/i, ""),
            content_name: tc_vars["product_eng_title"],
            content_catgeory: tc_vars["product_category"],
            description: tc_vars["product_eng_title"],
            quantity: 1,
            price: Number(tc_vars["product_unitprice_ati"]),
            value: Number(tc_vars["product_unitprice_ati"]),
            currency: tc_vars["nav_currency"].toUpperCase()
        });
    }
});
tC.extend({
    executeTag902_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        snaptr('track', tC.internalvars.snapchatKeringId, 'ADD_CART', {
            price: Number(tc_vars["product_unitprice_ati"]),
            item_ids: tc_vars["product_mfPartNumber"].replace(/^CR/i, ""),
            currency: tc_vars["nav_currency"].toUpperCase()
        });
    }
});
tC.extend({
    executeTag908_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        var sizmekPageType = tc_vars.nav_pagetype;
        var sizmekEvent = "add_to_cart";
        var SizmekDataLayer = {};
        SizmekDataLayer = {
            "event": sizmekEvent,
            "pageType": sizmekPageType,
            "OrderID": "",
            "Quantity": "1",
            "Value": tc_vars.product_unitprice_ati.toString(),
            "Currency": tc_vars.nav_currency.toUpperCase(),
            "ProductID": tc_vars.product_mfPartNumber,
            "ProductInfo": tc_vars.product_eng_title,
            "Unit_Quantity": "1",
            "Unit_Price": tc_vars.product_unitprice_ati.toString()
        }
    }
});
tC.extend({
    executeTag927_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        window.teads_e.push({
            name: tc_array_events["name"],
            price: tc_array_events["discount_price_ati"],
            currency: tc_vars["nav_currency"],
            conversionType: "AddToCart"
        });
    }
});
tC.extend({
    executeTag933_5181_22: function(el, p) {
        if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_22.init_tc_array_events(p);
        tC.scriptElt1 = document.createElement("script");
        tC.scriptElt1.id = "tc_script_933_1";
        tC.scriptElt1.src = "https://www.googletagmanager.com/gtag/js?id=DC-14459104";
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
        window.dataLayer = window.dataLayer || [];
        var gtag = function() {
            dataLayer.push(arguments);
        };
        gtag('js', new Date());
        gtag('config', 'DC-14459104');
        gtag('event', 'conversion', {
            'allow_custom_scripts': true,
            'u2': "add_to_cart",
            'u4': tc_vars["product_eng_title"],
            'send_to': 'DC-14459104/car/add2cart+standard'
        });
    }
});
tC.launchTag(926, 'gtag - Google Consent Mode with TRUST', 2662, 5181, 22, 12);
window.dataLayer = window.dataLayer || [];
var gtag = function() {
    dataLayer.push(arguments);
};
tC.internalvars.getRegion = function(a) {
    a = a.toString().replace(/\s/g, '');
    a = a.split(",");
    return a;
}
;
tC.internalvars.setRegion = function(a) {
    tC.internalvars.regionArray = tC.internalvars.getRegion(a);
    if (((typeof tC.privacy.isEnable !== "undefined") && tC.privacy.isEnable()) && (tC.internalvars.regionArray.length > 0) && (tC.internalvars.regionArray[0] !== "") && (typeof tC.internalvars.consentSettings !== "undefined")) {
        tC.internalvars.consentSettings.region = tC.internalvars.regionArray;
        return true;
    } else
        return false;
}
;
tC.internalvars.setWait = function(a) {
    if (((typeof tC.privacy.isEnable !== "undefined") && tC.privacy.isEnable()) && (isNaN(parseInt(a, 10)) === false) && (parseInt(a, 10) > 0) && (typeof tC.internalvars.consentSettings !== "undefined")) {
        tC.internalvars.consentSettings.wait_for_update = parseInt(a, 10);
        return true;
    } else
        return false;
}
;
tC.internalvars.setConsentCommand = function(a, b, c) {
    tC.internalvars.isRegionSet = tC.internalvars.setRegion(b);
    tC.internalvars.isDelaySet = tC.internalvars.setWait(c);
    if (((typeof tC.privacy.isEnable !== "undefined") && tC.privacy.isEnable()) && (tC.internalvars.isRegionSet || tC.internalvars.isDelaySet)) {
        return "default";
    }
    if ((a.toString() === "default") || (a.toString() === "update")) {
        return a;
    }
    if ((typeof tC.privacy.isEnable !== "undefined") && tC.privacy.isEnable())
        return "default";
    else
        return "update";
    return "default";
}
;
gtag('set', 'developer_id.dOWVhY2', true);
tC.internalvars.consentSettings = {
    'ad_storage': ('denied' !== "") ? 'denied' : "denied",
    'analytics_storage': ('denied' !== "") ? 'denied' : "denied",
    'ad_user_data': ('denied' !== "") ? 'denied' : "denied",
    'ad_personalization': ('denied' !== "") ? 'denied' : "denied"
}
tC.log(tC.internalvars.consentSettings);
tC.log("REGION: " + '');
tC.log("WAIT_FOR_UPDATE: " + '500');
tC.log("INFO: default command");
gtag('consent', tC.internalvars.setConsentCommand("default", '', '500'), tC.internalvars.consentSettings);
tC.internalvars.ga_url_passthrough = '';
tC.internalvars.ga_ads_data_redaction = '';
if ((typeof tC.internalvars.consentSettings !== "undefined") && (tC.internalvars.consentSettings.ad_storage === "denied")) {
    if ((tC.internalvars.ga_url_passthrough !== "") && ((tC.internalvars.ga_url_passthrough.toLowerCase() === "true") || (tC.internalvars.ga_url_passthrough.toLowerCase() === "false"))) {
        gtag('set', 'url_passthrough', (tC.internalvars.ga_url_passthrough.toLowerCase() === "true"));
    }
    if ((tC.internalvars.ga_ads_data_redaction !== "") && ((tC.internalvars.ga_ads_data_redaction.toLowerCase() === "true") || (tC.internalvars.ga_ads_data_redaction.toLowerCase() === "false"))) {
        gtag('set', 'ads_data_redaction', (tC.internalvars.ga_ads_data_redaction.toLowerCase() === "true"));
    }
}
tC.internalvars.setConsentUpdateCommand = function(result) {
    tC.internalvars.consentSettings = {
        'ad_storage': (result.consent.categories['6'].status === "on") ? "granted" : "denied",
        'analytics_storage': (result.consent.categories['7'].status === "on") ? "granted" : "denied",
        'ad_user_data': (result.consent.categories['6'].status === "on") ? "granted" : "denied",
        'ad_personalization': (result.consent.categories['6'].status === "on") ? "granted" : "denied"
    }
    tC.log(tC.internalvars.consentSettings);
    tC.log("REGION: " + '');
    tC.log("WAIT_FOR_UPDATE: " + '500');
    tC.log("INFO: update command");
    gtag('consent', tC.internalvars.setConsentCommand("update", '', '500'), tC.internalvars.consentSettings);
    if (typeof dataLayer !== "undefined") {
        if ('' !== "") {
            dataLayer.push({
                'event': ''
            });
        }
        if ('' !== "") {
            dataLayer.push({
                'event': ''
            });
        }
        if ('' !== "") {
            dataLayer.push({
                'event': ''
            });
        }
        if ('' !== "") {
            dataLayer.push({
                'event': ''
            });
        }
        if ('' !== "") {
            dataLayer.push({
                'event': ''
            });
        }
        if ('' !== "") {
            dataLayer.push({
                'event': ''
            });
        }
        if ('' !== "") {
            dataLayer.push({
                'event': ''
            });
        }
    }
}
cact('consent.get', function(result) {
    if (result.consent.status !== "unset") {
        tC.internalvars.setConsentUpdateCommand(result);
    }
});
cact('consent.onUpdate', function(result) {
    tC.internalvars.setConsentUpdateCommand(result);
});
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('478')) {
        if ((tC.internalvars.countryInPinterestScope == 'true')) {
            tC.launchTag(478, 'Pinterest - Base Code', 2418, 5181, 22, 12);
            !function(e) {
                if (!window.pintrk) {
                    window.pintrk = function() {
                        window.pintrk.queue.push(Array.prototype.slice.call(arguments))
                    }
                    ;
                    var n = window.pintrk;
                    n.queue = [],
                    n.version = "3.0";
                    var t = document.createElement("script");
                    t.async = !0,
                    t.src = e;
                    t.id = "tc_script__1";
                    r = document.getElementsByTagName("script")[0];
                    r.parentNode.insertBefore(t, r)
                }
            }("https://s.pinimg.com/ct/core.js");
            pintrk('load', tC.internalvars.pinterestTagId);
            pintrk('page');
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('270')) {
        if ((tC.internalvars.countryInPinterestScope == 'true')) {
            if (tc_vars["msn_cgGroup"].toString().toLowerCase().match(new RegExp(('Product page').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
                tC.launchTag(270, 'Pinterest - Product Page', 2418, 5181, 22, 12);
                pintrk('track', 'pagevisit', {
                    line_items: [{
                        product_name: tc_vars["product_eng_title"],
                        product_id: tc_vars["product_mfPartNumber"].replace(/^CR/, ""),
                        product_category: tc_vars["product_category"],
                        product_price: tc_vars["product_unitprice_ati"]
                    }]
                });
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('284')) {
        if ((tC.internalvars.countryInPinterestScope == 'true')) {
            if (tc_vars["nav_pagetype"].toString().toLowerCase().match(new RegExp(('categories').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
                tC.launchTag(284, 'Pinterest - View Category', 2418, 5181, 22, 12);
                pintrk('track', 'viewcategory', {
                    line_items: [{
                        product_category: tc_vars["nav_categoryIdentifier1"].replace('EU_', '')
                    }]
                });
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('276')) {
        if ((tC.internalvars.countryInPinterestScope == 'true')) {
            if (tc_vars["nav_pagetype"].toString().toLowerCase().match(new RegExp(('thankyou').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
                tC.launchTag(276, 'Pinterest - Purchase Tag', 2418, 5181, 22, 12);
                var orderQuantity = 0;
                for (var i = 0; i < tC.internalvars.ricOrderQtyArray.length; i++) {
                    orderQuantity += tC.internalvars.ricOrderQtyArray[i];
                }
                var products = [];
                for (var i = 0; i < tC.internalvars.ricOrderIDArray.length; i++) {
                    products.push({
                        product_id: tC.internalvars.ricOrderIDArray[i],
                        product_category: tC.internalvars.ricOrderCatArray[i]
                    })
                }
                pintrk('track', 'checkout', {
                    value: tc_vars["order_amount_ati_with_sf"],
                    order_quantity: orderQuantity,
                    currency: tc_vars["nav_currency"].toUpperCase(),
                    order_id: tc_vars["order_id"],
                    line_items: products
                });
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('252')) {
        tC.launchTag(252, 'Snapchat - Main Tag', 26, 5181, 22, 12);
        (function(e, t, n) {
            if (e.snaptr)
                return;
            var a = e.snaptr = function() {
                a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments)
            }
            ;
            a.queue = [];
            var s = 'script';
            r = t.createElement(s);
            r.async = !0;
            r.src = n;
            var u = t.getElementsByTagName(s)[0];
            u.parentNode.insertBefore(r, u);
        }
        )(window, document, 'https://sc-static.net/scevent.min.js');
        snaptr('init', tC.internalvars.snapchatId);
        snaptr('track', tC.internalvars.snapchatId, 'PAGE_VIEW');
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('260')) {
        if (tc_vars["msn_cgGroup"].toString().toLowerCase().match(new RegExp(('Product page').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
            tC.launchTag(260, 'Snapchat - View Content', 26, 5181, 22, 12);
            snaptr('track', tC.internalvars.snapchatId, 'VIEW_CONTENT', {
                'item_category': tc_vars["product_micro"],
                'item_ids': tc_vars["product_mfPartNumber"].replace(/^CR/i, "")
            });
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('256')) {
        if (tc_vars["nav_pagetype"].toString().toLowerCase().match(new RegExp(('thankyou').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
            tC.launchTag(256, 'Snapchat - Purchase', 26, 5181, 22, 12);
            snaptr('track', tC.internalvars.snapchatId, 'PURCHASE', {
                'currency': tc_vars["nav_currency"].toUpperCase(),
                'price': tc_vars["order_amount_tf_with_sf"],
                'transaction_id': tc_vars["order_id"],
                'item_category': tC.internalvars.ricOrderCatArray,
                'item_ids': tC.internalvars.ricOrderIDArray
            });
        }
    }
}
tC.launchTag(192, 'Commanders Act - Data layer QA', 1375, 5181, 22, 12);
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('216')) {
        if (!tc_vars["nav_pagetype"].toString().toLowerCase().match(new RegExp(('thankyou').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
            tC.launchTag(216, 'Facebook - All pages', 2652, 5181, 22, 12);
            !function(f, b, e, v, n, t, s) {
                if (f.fbq)
                    return;
                n = f.fbq = function() {
                    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                }
                ;
                if (!f._fbq)
                    f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = '2.0';
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s)
            }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
            if (tc_vars["nav_countryCode"] == 'US') {
                fbq('dataProcessingOptions', ['LDU'], 0, 0);
            }
            fbq('init', tC.internalvars.ricFacebookID, {
                em: tc_vars["user_email_sha256"]
            });
            fbq('track', 'PageView');
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('304')) {
        tC.launchTag(304, 'DCM - All pages', 2283, 5181, 22, 12);
        var google_conversion_id = tC.internalvars.dcmId;
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
        tC.scriptElt1 = document.createElement("script");
        tC.scriptElt1.id = "tc_script_304_1";
        tC.scriptElt1.type = "text/javascript";
        tC.scriptElt1.src = "//www.googleadservices.com/pagead/conversion.js";
        tC.scriptElt1.async = true;
        tC.scriptElt1.defer = 'defer';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('306')) {
        tC.launchTag(306, 'Google Ads - All pages', 2143, 5181, 22, 12);
        var google_conversion_id = 946397343;
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
        var google_tag_params = {
            pagetype: "",
            productcategory: tc_vars["product_category"],
            productcollection: tc_vars["product_collection"]
        };
        tC.scriptElt1 = document.createElement("script");
        tC.scriptElt1.id = "tc_script_306_1";
        tC.scriptElt1.type = "text/javascript";
        tC.scriptElt1.src = "//www.googleadservices.com/pagead/conversion.js";
        tC.scriptElt1.async = true;
        tC.scriptElt1.defer = 'defer';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('410')) {
        tC.launchTag(410, 'Adot - All pages', 1272, 5181, 22, 12);
        !function(s, e, t) {
            var m = "adotmob"
              , n = Date.now();
            s.adotmobAnalyticsObject = m,
            s[m] = s[m] || {
                init: function(e, t) {
                    var n = t && t.timeMesurement
                      , a = this;
                    if (s[m].c = e,
                    !1 !== n)
                        var i = n && 1e3 * n.threshold || 3e4
                          , o = n && 1e3 * n.frequency || 5e3
                          , c = 0
                          , r = setInterval(function() {
                            c += o,
                            a.event({
                                category: "Time Spent on Page",
                                action: "Spent Time on Page",
                                label: c / 1e3
                            }),
                            i <= c && clearInterval(r)
                        }, o)
                },
                event: function(e) {
                    (s[m].q = s[m].q || []).push(e)
                },
                dimensions: function(e) {
                    s[m].d = e
                }
            },
            s[m].ts = n,
            s[m].event({
                category: "page",
                action: "view",
                ts: n
            });
            var a = e.createElement("script")
              , i = e.getElementsByTagName("script")[0];
            a.id = "tc_script_410_1";
            a.async = 1,
            a.src = t,
            i.parentNode.insertBefore(a, i)
        }(window, document, "//www.atswsd.com/v1/script.js");
        adotmob.init('cartier');
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('354')) {
        tC.launchTag(354, 'Sizmek - All pages', 2247, 5181, 22, 12);
        var ebSession = tC.getCookie("_ga").split(".")[3];
        var ebRand = Math.random() + '';
        var script = document.createElement('script');
        ebRand = ebRand * 1000000;
        script.type = "text/javascript";
        script.async = true;
        script.src = ("https:" == document.location.protocol ? "https://" : "http://") + "bs.serving-sys.com/Serving/ActivityServer.bs?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_68}&cn=as&ActivityID=" + tC.internalvars.sizmekArrivalId + "&rnd=" + ebRand + "&Session=" + ebSession;
        document.getElementsByTagName('body')[0].appendChild(script);
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('424')) {
        if (!tc_vars["msn_cgGroup"].toString().toLowerCase().match(new RegExp(('Checkout pages').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
            tC.launchTag(424, 'Linkedin - All pages', 1067, 5181, 22, 12);
            _linkedin_data_partner_id = "26500";
            (function() {
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.id = "tc_script_424_1";
                b.type = "text/javascript";
                b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);
            }
            )();
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('232')) {
        if (tc_vars["msn_cgGroup"].toString().toLowerCase().match(new RegExp(('Product page').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
            tC.launchTag(232, 'Facebook - Product page', 2652, 5181, 22, 12);
            fbq('track', 'ViewContent', {
                content_type: 'product',
                content_ids: tc_vars["product_mfPartNumber"].replace(/^CR/i, ""),
                content_name: tc_vars["product_eng_title"],
                content_category: tc_vars["product_micro"],
                content_collection: tc_vars["product_collection"],
                value: tc_vars["product_unitprice_ati"],
                currency: tc_vars["nav_currency"].toUpperCase()
            });
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('234')) {
        if (tc_vars["nav_pagetype"].toString().toLowerCase().match(new RegExp(('thankyou').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
            tC.launchTag(234, 'Facebook - Purchase', 2652, 5181, 22, 12);
            !function(f, b, e, v, n, t, s) {
                if (f.fbq)
                    return;
                n = f.fbq = function() {
                    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                }
                ;
                if (!f._fbq)
                    f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = '2.0';
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s)
            }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
            if (tc_vars["nav_countryCode"] == 'US') {
                fbq('dataProcessingOptions', ['LDU'], 0, 0);
            }
            fbq('init', tC.internalvars.ricFacebookID);
            fbq('track', 'PageView');
            if (tC.internalvars.btqPickupCountry && 'TO DEFINE' == "BTQP") {
                fbq('track', 'Purchase', {
                    content_type: 'product',
                    content_name: tC.internalvars.ricOrderNameArray,
                    content_category: tC.internalvars.ricOrderCatArray,
                    content_ids: tC.internalvars.ricOrderIDArray,
                    value: tc_vars["order_amount_ati_with_sf"],
                    currency: tc_vars["nav_currency"].toUpperCase(),
                    bopus: 1
                });
            } else {
                fbq('track', 'Purchase', {
                    content_type: 'product',
                    content_name: tC.internalvars.ricOrderNameArray,
                    content_category: tC.internalvars.ricOrderCatArray,
                    content_ids: tC.internalvars.ricOrderIDArray,
                    value: tc_vars["order_amount_ati_with_sf"],
                    currency: tc_vars["nav_currency"].toUpperCase()
                });
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('336')) {
        if (tc_vars["nav_pagetype"].toString().toLowerCase().match(new RegExp(('thankyou').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
            tC.launchTag(336, 'SA360 - Purchase', 2590, 5181, 22, 12);
            tC.scriptElt1 = document.createElement("script");
            tC.scriptElt1.id = "tc_script_336_1";
            tC.scriptElt1.src = "https://www.googletagmanager.com/gtag/js?id=DC-9271966";
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
            window.dataLayer = window.dataLayer || [];
            var gtag = function() {
                dataLayer.push(arguments);
            };
            gtag('js', new Date());
            gtag('config', 'DC-9271966');
            gtag('event', 'purchase', {
                'allow_custom_scripts': true,
                'value': 0,
                'transaction_id': tc_vars["order_id"],
                'u1': tC.internalvars.ricOrderNameArray,
                'u2': tC.internalvars.ricOrderIDArray,
                'u3': tC.internalvars.orderCollectionArray,
                'u4': tC.internalvars.ricOrderCatArray,
                'u5': tC.internalvars.ricOrderPriceArray,
                'u6': tc_vars["order_amount_ati_with_sf"],
                'u7': tC.internalvars.ricOrderQtyArray,
                'send_to': 'DC-9271966/car-s/' + tc_vars["nav_currency"].toUpperCase() + '+transactions'
            });
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('334')) {
        if ((tc_vars["msn_cgGroup"] == 'Product page')) {
            tC.launchTag(334, 'SA360 - Product Page', 2588, 5181, 22, 12);
            tC.scriptElt1 = document.createElement("script");
            tC.scriptElt1.id = "tc_script_334_1";
            tC.scriptElt1.src = "https://www.googletagmanager.com/gtag/js?id=DC-9271966";
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
            window.dataLayer = window.dataLayer || [];
            var gtag = function() {
                dataLayer.push(arguments);
            };
            gtag('js', new Date());
            gtag('config', 'DC-9271966');
            gtag('event', 'conversion', {
                'allow_custom_scripts': true,
                'u1': tc_vars["product_eng_title"],
                'u2': tc_vars["product_mfPartNumber"].replace(/^CR/i, ""),
                'u3': tc_vars["product_collection"],
                'u4': tc_vars["product_micro"],
                'u5': tc_vars["product_discount_ati"],
                'send_to': 'DC-9271966/car-c/product+standard'
            });
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('328')) {
        if ((tc_vars["pguri"].toString().toLowerCase().match(new RegExp(('maison').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            tC.launchTag(328, 'SA360 - Edito', 476, 5181, 22, 12);
            tC.scriptElt1 = document.createElement("script");
            tC.scriptElt1.id = "tc_script_328_1";
            tC.scriptElt1.src = "https://www.googletagmanager.com/gtag/js?id=DC-9271966";
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
            window.dataLayer = window.dataLayer || [];
            var gtag = function() {
                dataLayer.push(arguments);
            };
            gtag('js', new Date());
            gtag('config', 'DC-9271966');
            gtag('event', 'conversion', {
                'allow_custom_scripts': true,
                'send_to': 'DC-9271966/car-c/edito+standard'
            });
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('382')) {
        tC.launchTag(382, 'Teads - All pages', 2608, 5181, 22, 12);
        tC.scriptElt1 = document.createElement("script");
        tC.scriptElt1.id = "tc_script_382_1";
        tC.scriptElt1.type = "text/javascript";
        tC.scriptElt1.src = "https://p.teads.tv/teads-fellow.js";
        tC.scriptElt1.async = "true";
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
        window.teads_e = window.teads_e || [];
        window.teads_adv_id = Number(tC.internalvars.teadsAdvertiserId);
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('390')) {
        if ((tc_vars["nav_countryCode"].toString().toLowerCase().match(new RegExp(('CH').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            tC.launchTag(390, 'Xandr - All pages', 26, 5181, 22, 12);
            tC.imageElt1 = document.createElement("img");
            tC.imageElt1.id = "tc_img__1";
            tC.imageElt1.height = "0";
            tC.imageElt1.width = "0";
            tC.imageElt1.border = "0";
            tC.imageElt1.alt = "";
            tC.imageElt1.src = "https://ib.adnxs.com/pixie?pi=" + tC.internalvars.xandrSiteId + "&e=PageView&script=0";
            document.body.appendChild(tC.imageElt1);
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('392')) {
        if ((tc_vars["nav_countryCode"].toString().toLowerCase().match(new RegExp(('CH').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            tC.launchTag(392, 'Xandr - Arrival', 26, 5181, 22, 12);
            tC.imageElt1 = document.createElement("img");
            tC.imageElt1.id = "tc_img__1";
            tC.imageElt1.height = "0";
            tC.imageElt1.width = "0";
            tC.imageElt1.border = "0";
            tC.imageElt1.alt = "";
            tC.imageElt1.src = "https://ib.adnxs.com/pixie?pi=" + tC.internalvars.xandrSiteId + "&e=ArrivalVisit&script=0";
            document.body.appendChild(tC.imageElt1);
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('396')) {
        if ((tc_vars["nav_countryCode"].toString().toLowerCase().match(new RegExp(('CH').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            if (tc_vars["nav_pagetype"].toString().toLowerCase().match(new RegExp(('thankyou').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
                tC.launchTag(396, 'Xandr - Purchase', 26, 5181, 22, 12);
                tC.imageElt1 = document.createElement("img");
                tC.imageElt1.id = "tc_img__1";
                tC.imageElt1.height = "0";
                tC.imageElt1.width = "0";
                tC.imageElt1.border = "0";
                tC.imageElt1.alt = "";
                tC.imageElt1.src = "https://ib.adnxs.com/pixie?pi=" + tC.internalvars.xandrSiteId + "&e=Purchase&script=0";
                document.body.appendChild(tC.imageElt1);
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('372')) {
        if (tc_vars["nav_pagetype"].toString().toLowerCase().match(new RegExp(('thankyou').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
            tC.launchTag(372, 'Sizmek - Purchase', 1515, 5181, 22, 12);
            var ebRev = tc_vars["order_amount_ati_with_sf"];
            var ebOrderID = tc_vars["order_id"];
            var ebProductID = tC.internalvars.ricOrderIDArray;
            var ebProductInfo = tC.internalvars.ricOrderNameArray;
            var ebRand = Math.random() + '';
            var script = document.createElement('script');
            ebRand = ebRand * 1000000;
            script.type = "text/javascript";
            script.async = true;
            script.src = ("https:" == document.location.protocol ? "https://" : "http://") + "bs.serving-sys.com/Serving/ActivityServer.bs?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_68}&cn=as&ActivityID=" + tC.internalvars.sizmekActivityId + "&rnd=" + ebRand + "&Value=" + ebRev + "&OrderID=" + ebOrderID + "&ProductID=" + ebProductID + "&ProductInfo=" + ebProductInfo;
            document.getElementsByTagName('body')[0].appendChild(script);
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('418')) {
        if ((tc_vars["nav_countryCode"] == 'FR')) {
            tC.launchTag(418, 'ELLE - all pages', 26, 5181, 22, 12);
            var tl = document.title
              , u = window.location.hostname + window.location.pathname
              , pixlurl = window.location.protocol + "//beacon.krxd.net/event.gif?event_id=" + tC.internalvars.elleEventId + "&event_type=default&lap_ann=Cartier&lap_tl=" + encodeURIComponent(tl) + "&lap_u=" + encodeURIComponent(u)
              , pixl = new Image;
            pixl.src = pixlurl;
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('420')) {
        if ((tc_vars["nav_countryCode"] == 'FR')) {
            tC.launchTag(420, 'Invibes - all pages', 2440, 5181, 22, 12);
            tC.scriptElt1 = document.createElement("script");
            tC.scriptElt1.id = "tc_script_420_1";
            tC.scriptElt1.src = "https://k.r66net.com/GetAnalytics";
            tC.scriptElt1.async = true;
            tC.scriptElt1.defer = 'defer';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('422')) {
        if ((tc_vars["nav_countryCode"] == 'FR')) {
            tC.launchTag(422, 'Le figaro - all pages - FR', 26, 5181, 22, 12);
            tC.imageElt1 = document.createElement("img");
            tC.imageElt1.id = "tc_img__1";
            tC.imageElt1.height = "0";
            tC.imageElt1.width = "0";
            tC.imageElt1.border = "0";
            tC.imageElt1.alt = "";
            tC.imageElt1.src = "https://tagger.opecloud.com/lefigaro/v2/custom-no-tagger?type=pageviews&tag_type=advertiser&advertiser=cartier&uri=" + tc_vars["pguri"];
            document.body.appendChild(tC.imageElt1);
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('426')) {
        if ((tc_vars["nav_countryCode"] == 'FR')) {
            tC.launchTag(426, 'Mozoo - all pages', 2618, 5181, 22, 12);
            var scriptEltG = document.createElement("script");
            scriptEltG.type = "text/javascript";
            scriptEltG.src = "https://mzcreatives.mozoo.com/tracking/mozoo_tracker.js?a=sm&aid=354808&tid=30039&cid=vrox0ikpuvfdylb8hxxndorhsgtlxmvo";
            document.body.appendChild(scriptEltG);
            window._adftrack = Array.isArray(window._adftrack) ? window._adftrack : (window._adftrack ? [window._adftrack] : []);
            window._adftrack.push({
                pm: tC.internalvars.mozzooPm,
                divider: encodeURIComponent('|'),
                pagename: encodeURIComponent('Cartier')
            });
            (function() {
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = 'https://track.adform.net/serving/scripts/trackpoint/async/';
                var x = document.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(s, x);
            }
            )();
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('428')) {
        if ((tc_vars["nav_countryCode"] == 'FR')) {
            tC.launchTag(428, 'Mpublicité - all pages', 26, 5181, 22, 12);
            var axel = Math.random() + '';
            var a = axel * 10000000000000;
            tC.imageElt1 = document.createElement("img");
            tC.imageElt1.id = "tc_img__1";
            tC.imageElt1.height = "0";
            tC.imageElt1.width = "0";
            tC.imageElt1.border = "0";
            tC.imageElt1.alt = "";
            tC.imageElt1.src = "https://pubads.g.doubleclick.net/activity;dc_iu=/" + '128139881' + "/DFPAudiencePixel;ord=" + a + ";dc_seg=" + '799120470' + "?";
            document.body.appendChild(tC.imageElt1);
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('574')) {
        if (tc_vars["nav_stepName"].toString().toLowerCase().match(new RegExp(('ShippingAddress').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
            tC.launchTag(574, 'Snapchat - Start Checkout', 26, 5181, 22, 12);
            (function(e, t, n) {
                if (e.snaptr)
                    return;
                var a = e.snaptr = function() {
                    a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments)
                }
                ;
                a.queue = [];
                var s = 'script';
                r = t.createElement(s);
                r.async = !0;
                r.src = n;
                var u = t.getElementsByTagName(s)[0];
                u.parentNode.insertBefore(r, u);
            }
            )(window, document, 'https://sc-static.net/scevent.min.js');
            snaptr('init', tC.internalvars.snapchatId);
            snaptr('track', 'START_CHECKOUT', {
                payment_info_available: 1,
                'item_category': tC.internalvars.ricCartCategoryArray,
                'item_ids': tC.internalvars.ricCartIDArray
            });
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('578')) {
        tC.launchTag(578, 'gtag- Conversion Linker', 2594, 5181, 22, 12);
        if (typeof gtag !== "undefined") {
            gtag('set', 'linker', {
                'domains': ['cartier.com']
            });
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('586')) {
        if ((tC.internalvars.facebookKeringCountryScope == 'true')) {
            if (tc_vars["nav_stepName"].toString().toLowerCase().match(new RegExp(('ShippingAddress').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
                tC.launchTag(586, 'Facebook - Proceed to checkout', 2652, 5181, 22, 12);
                fbq('trackSingle', tC.internalvars.ricFacebookID, 'InitiateCheckout', {
                    content_type: 'product',
                    content_name: tC.internalvars.ricCartNameArray,
                    content_category: tC.internalvars.ricCartCategoryArray,
                    content_ids: tC.internalvars.ricCartIDArray,
                    value: tc_vars["cart_total"],
                    currency: tc_vars["nav_currency"].toUpperCase()
                });
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('594')) {
        if ((tc_vars["nav_stepName"].toString().toLowerCase().match(new RegExp(('CheckMail').replace(new RegExp("\\*","g"), ".*"),"gi"))) || (tc_vars["nav_stepName"].toString().toLowerCase().match(new RegExp(('ShippingAddress').replace(new RegExp("\\*","g"), ".*"),"gi"))) || (tc_vars["nav_stepName"].toString().toLowerCase().match(new RegExp(('Payment').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            tC.launchTag(594, 'SA360 - Funnel - Container load', 2588, 5181, 22, 12);
            tC.scriptElt1 = document.createElement("script");
            tC.scriptElt1.id = "tc_script_330_1";
            tC.scriptElt1.src = "https://www.googletagmanager.com/gtag/js?id=DC-9271966";
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
            window.dataLayer = window.dataLayer || [];
            var gtag = function() {
                dataLayer.push(arguments);
            };
            gtag('js', new Date());
            gtag('config', 'DC-9271966');
            gtag('event', 'conversion', {
                'allow_custom_scripts': true,
                'u1': tC.internalvars.ricCartNameArray,
                'u2': tC.internalvars.ricCartIDArray,
                'u3': tC.internalvars.ricCartCollectionArray,
                'u4': tC.internalvars.ricCartCategoryArray,
                'u5': tC.internalvars.ricCartPriceArray,
                'send_to': 'DC-9271966/car-c/' + tC.internalvars.sa360FunnelCatId + '+standard'
            });
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('649')) {
        if ((tc_vars["nav_countryCode"].toString().toLowerCase().match(new RegExp(('DE').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            if (tc_vars["msn_cgGroup"].toString().toLowerCase().match(new RegExp(('Product page').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
                tC.launchTag(649, 'Linkedin - Campaign FY21 - ICONS - Product page', 26, 5181, 22, 12);
                tC.imageElt1 = document.createElement("img");
                tC.imageElt1.id = "tc_img__1";
                tC.imageElt1.height = "0";
                tC.imageElt1.width = "0";
                tC.imageElt1.border = "0";
                tC.imageElt1.alt = "";
                tC.imageElt1.src = "https://px.ads.linkedin.com/collect/?pid=" + '3171681' + "&conversionId=" + '4055921' + "&fmt=gif"
                document.body.appendChild(tC.imageElt1);
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('631')) {
        if ((tc_vars["nav_countryCode"] == 'FR') || (tc_vars["nav_countryCode"] == 'ES') || (tc_vars["nav_countryCode"] == 'IT')) {
            tC.launchTag(631, 'Mediacom - Gtag - init', 2586, 5181, 22, 12);
            if (typeof gtag === "undefined") {
                tC.script.add("//www.googletagmanager.com/gtag/js?id=" + 'DC-9270377');
                dataLayer = window.dataLayer || [];
                var gtag = function() {
                    dataLayer.push(arguments);
                };
                gtag('js', new Date());
            }
            if (tc_vars["nav_countryCode"] == "FR") {
                gtag('config', 'DC-9270377');
            } else if (tc_vars["nav_countryCode"] == "IT") {
                gtag('config', 'AW-719420560');
            } else if (tc_vars["nav_countryCode"] == "ES") {
                gtag('config', 'DC-12305983');
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('653')) {
        if ((tc_vars["nav_countryCode"].toString().toLowerCase().match(new RegExp(('DE').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            if (tC.internalvars.isOrganicReferrer == 'true') {
                if (tC.internalvars.hrefHasUtmorGclid == 'false') {
                    tC.launchTag(653, 'Facebook - search lift', 2652, 5181, 22, 12);
                    fbq('track', 'Search Visit');
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('659')) {
        if ((tc_vars["nav_countryCode"] == 'ES')) {
            if (tc_vars["pguri"].toString().toLowerCase().match(new RegExp(('the\-culture\-of\-design').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
                tC.launchTag(659, 'Facebook - Pavilion of Design Pixel 1', 26, 5181, 22, 12);
                tC.imageElt1 = document.createElement("img");
                tC.imageElt1.id = "tc_img__1";
                tC.imageElt1.height = "0";
                tC.imageElt1.width = "0";
                tC.imageElt1.border = "0";
                tC.imageElt1.alt = "";
                tC.imageElt1.src = "https://www.facebook.com/tr?id=" + '926045231519578' + "&ev=PageView&noscript=1";
                document.body.appendChild(tC.imageElt1);
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('673')) {
        if ((tc_vars["nav_countryCode"].toString().toLowerCase().match(new RegExp(('CH').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            tC.launchTag(673, 'Xaxis - All pages', 75, 5181, 22, 12);
            var iframeElt = document.createElement("iframe");
            iframeElt.id = "tc_iframe__1";
            iframeElt.src = 'https://www.groupm-projects.com/tools/ch.xlptracker/?id=406c485895df4c0e4f9a11f2a0703ea2&r=0.12308633074711817';
            iframeElt.scrolling = "no";
            iframeElt.frameborder = "0";
            iframeElt.width = "1";
            iframeElt.height = "1";
            document.body.appendChild(iframeElt);
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('680')) {
        if ((tc_vars["nav_countryCode"].toString().toLowerCase().match(new RegExp(('GB').replace(new RegExp("\\*","g"), ".*"),"gi"))) || (tc_vars["nav_countryCode"] == 'ES')) {
            if (tc_vars["pguri"].toString().toLowerCase().match(new RegExp(('book-an-appointment').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
                tC.launchTag(680, 'Facebook - Boutique appointment', 361, 5181, 22, 12);
                var appointmentPopinAppears = setInterval(function() {
                    var thankyouPage = document.querySelector('div.thankyou-page');
                    var thankyouPageEs = document.querySelector('div.rcc_c_page-confirmation-container');
                    if (thankyouPage || thankyouPageEs) {
                        fbq('track', 'Appointment');
                        clearInterval(appointmentPopinAppears);
                    }
                }, 1000);
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('688')) {
        if ((tc_vars["nav_countryCode"].toString().toLowerCase().match(new RegExp(('GB').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            tC.launchTag(688, 'AppNexus - All pages UK', 26, 5181, 22, 12);
            tC.imageElt1 = document.createElement("img");
            tC.imageElt1.id = "tc_img__1";
            tC.imageElt1.height = "0";
            tC.imageElt1.width = "0";
            tC.imageElt1.border = "0";
            tC.imageElt1.alt = "";
            tC.imageElt1.src = "https://secure.adnxs.com/px?id=" + '1495711' + "&seg=" + '26925865' + "&redir=https%3A%2F%2Fpixel.mediaiqdigital.com%2Fpixel%3F%26pixel_id%3D1495711%26uid%3D%24%7BUID%7D&t=2";
            document.body.appendChild(tC.imageElt1);
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('690')) {
        if ((tc_vars["nav_countryCode"].toString().toLowerCase().match(new RegExp(('GB').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            if (tc_vars["nav_pagetype"].toString().toLowerCase().match(new RegExp(('thankyou').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
                tC.launchTag(690, 'AppNexus - Transaction UK', 26, 5181, 22, 12);
                tC.imageElt1 = document.createElement("img");
                tC.imageElt1.id = "tc_img__1";
                tC.imageElt1.height = "0";
                tC.imageElt1.width = "0";
                tC.imageElt1.border = "0";
                tC.imageElt1.alt = "";
                tC.imageElt1.src = "https://secure.adnxs.com/px?id=" + '1497439' + "&seg=" + '269708943' + "&redir=https%3A%2F%2Fpixel.mediaiqdigital.com%2Fpixel%3Fu1%3D" + tC.internalvars.ricOrderNameArray + "%26u2%3D" + tC.internalvars.ricOrderIDArray + "%26u3%3D" + tC.internalvars.orderCollectionArray + "%26u4%3D" + tC.internalvars.ricOrderCatArray + "%26u5%3D" + tC.internalvars.ricCartPriceArray + "%26u6%3D" + tc_vars["order_amount_ati_with_sf"] + "%26u7%3D" + tC.internalvars.ricOrderQtyArray + "%26pixel_id%3D" + '1497439' + "%26uid%3D%24%7BUID%7D&t=2";
                document.body.appendChild(tC.imageElt1);
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('692')) {
        if ((tc_vars["nav_countryCode"].toString().toLowerCase().match(new RegExp(('GB').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            tC.launchTag(692, 'DV360 - Base Code - UK', 2586, 5181, 22, 12);
            if (typeof gtag === "undefined") {
                tC.script.add("//www.googletagmanager.com/gtag/js?id=" + 'DC-11070562');
                window.dataLayer = window.dataLayer || [];
                var gtag = function() {
                    dataLayer.push(arguments);
                };
                gtag('js', new Date());
            }
            gtag('config', 'DC-11070562');
            gtag('config', 'DC-11047635')
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('694')) {
        if ((tc_vars["nav_countryCode"].toString().toLowerCase().match(new RegExp(('GB').replace(new RegExp("\\*","g"), ".*"),"gi"))) || (tc_vars["nav_countryCode"] == 'ES')) {
            tC.launchTag(694, 'DV360 - All Pages', 2588, 5181, 22, 12);
            if (typeof gtag !== "undefined") {
                gtag('event', 'conversion', {
                    'allow_custom_scripts': true,
                    'u1': tc_vars["pguri"],
                    'send_to': tC.internalvars.dv360_adv_id + "/" + 'invmedia' + "/" + 'carti0' + "+" + 'Standard'
                });
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('698')) {
        if ((tc_vars["nav_countryCode"].toString().toLowerCase().match(new RegExp(('GB').replace(new RegExp("\\*","g"), ".*"),"gi"))) || (tc_vars["nav_countryCode"] == 'ES')) {
            if (tc_vars["nav_pagetype"].toString().toLowerCase().match(new RegExp(('thankyou').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
                tC.launchTag(698, 'DV360 - Purchase', 2588, 5181, 22, 12);
                if (typeof gtag !== "undefined") {
                    gtag('event', 'conversion', {
                        'allow_custom_scripts': true,
                        'value': tc_vars["order_revenue_eur"],
                        'transaction_id': tc_vars["order_id"],
                        'quantity': tc_array_events["quantity"],
                        'send_to': tC.internalvars.dv360_adv_id + "/" + 'invmedia' + "/" + tC.internalvars.dv360_activityTagString + "+" + tC.internalvars.dv360_countingMethod
                    });
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('700')) {
        if ((tc_vars["pguri"].toString().toLowerCase().match(new RegExp(('contact-us').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            tC.launchTag(700, 'Sizmek - Contact Submission', 26, 5181, 22, 12);
            var contactPopinAppears = setInterval(function() {
                var contactPopinText = document.querySelector('div.contactUs.confirmation');
                if (contactPopinText) {
                    var ebSession = tC.getCookie("_ga").split(".")[3];
                    var ebRand = Math.random() + '';
                    var script = document.createElement('script');
                    ebRand = ebRand * 1000000;
                    script.type = "text/javascript";
                    script.async = true;
                    script.src = ("https:" == document.location.protocol ? "https://" : "http://") + "bs.serving-sys.com/Serving/ActivityServer.bs?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_68}&cn=as&ActivityID=494060&rnd=" + ebRand + "&Session=" + ebSession;
                    document.getElementsByTagName('body')[0].appendChild(script);
                    clearInterval(contactPopinAppears);
                }
            }, 1000);
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('702')) {
        if ((tC.internalvars.tc_url.toString().toLowerCase().match(new RegExp(('\/services\/my-cartier\/RegistrationStep1\?account=verified').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            tC.launchTag(702, 'Sizmek - AccountCreation', 26, 5181, 22, 12);
            var ebSession = tC.getCookie("_ga").split(".")[3];
            var ebRand = Math.random() + '';
            var script = document.createElement('script');
            ebRand = ebRand * 1000000;
            script.type = "text/javascript";
            script.async = true;
            script.src = ("https:" == document.location.protocol ? "https://" : "http://") + "bs.serving-sys.com/Serving/ActivityServer.bs?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_68}&cn=as&ActivityID=494063&rnd=" + ebRand + "&Session=" + ebSession;
            document.getElementsByTagName('body')[0].appendChild(script);
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('721')) {
        if ((tc_vars["nav_countryCode"] == 'FR') || (tc_vars["nav_countryCode"].toString().toLowerCase().match(new RegExp(('DE').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            tC.launchTag(721, 'TikTok - Library', 26, 5181, 22, 12);
            !function(w, d, t) {
                w.TiktokAnalyticsObject = t;
                var ttq = w[t] = w[t] || [];
                ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"],
                ttq.setAndDefer = function(t, e) {
                    t[e] = function() {
                        t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
                    }
                }
                ;
                for (var i = 0; i < ttq.methods.length; i++)
                    ttq.setAndDefer(ttq, ttq.methods[i]);
                ttq.instance = function(t) {
                    for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
                        ttq.setAndDefer(e, ttq.methods[n]);
                    return e
                }
                ,
                ttq.load = function(e, n) {
                    var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
                    ttq._i = ttq._i || {},
                    ttq._i[e] = [],
                    ttq._i[e]._u = i,
                    ttq._t = ttq._t || {},
                    ttq._t[e] = +new Date,
                    ttq._o = ttq._o || {},
                    ttq._o[e] = n || {};
                    var o = document.createElement("script");
                    o.type = "text/javascript",
                    o.async = !0,
                    o.src = i + "?sdkid=" + e + "&lib=" + t;
                    var a = document.getElementsByTagName("script")[0];
                    a.parentNode.insertBefore(o, a)
                }
                ;
                ttq.load(tC.internalvars.tiktokId);
            }(window, document, 'ttq');
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('723')) {
        if ((tc_vars["nav_countryCode"] == 'FR')) {
            tC.launchTag(723, 'Tiktok - Pageview', 26, 5181, 22, 12);
            ttq.instance(tC.internalvars.tiktokId).track('Pageview');
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('765')) {
        if ((tc_vars["nav_countryCode"].toString().toLowerCase().match(new RegExp(('CH').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            tC.launchTag(765, 'TikTok - All pages CH', 26, 5181, 22, 12);
            !function(w, d, t) {
                w.TiktokAnalyticsObject = t;
                var ttq = w[t] = w[t] || [];
                ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"],
                ttq.setAndDefer = function(t, e) {
                    t[e] = function() {
                        t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
                    }
                }
                ;
                for (var i = 0; i < ttq.methods.length; i++)
                    ttq.setAndDefer(ttq, ttq.methods[i]);
                ttq.instance = function(t) {
                    for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
                        ttq.setAndDefer(e, ttq.methods[n]);
                    return e
                }
                ,
                ttq.load = function(e, n) {
                    var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
                    ttq._i = ttq._i || {},
                    ttq._i[e] = [],
                    ttq._i[e]._u = i,
                    ttq._t = ttq._t || {},
                    ttq._t[e] = +new Date,
                    ttq._o = ttq._o || {},
                    ttq._o[e] = n || {};
                    var o = document.createElement("script");
                    o.type = "text/javascript",
                    o.async = !0,
                    o.src = i + "?sdkid=" + e + "&lib=" + t;
                    var a = document.getElementsByTagName("script")[0];
                    a.parentNode.insertBefore(o, a)
                }
                ;
                ttq.load('C6EE9LRJAJ9ECE1R2ENG');
                ttq.page();
            }(window, document, 'ttq');
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('772')) {
        tC.launchTag(772, 'TikTok - Library - WW', 26, 5181, 22, 12);
        !function(w, d, t) {
            w.TiktokAnalyticsObject = t;
            var ttq = w[t] = w[t] || [];
            ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"],
            ttq.setAndDefer = function(t, e) {
                t[e] = function() {
                    t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
                }
            }
            ;
            for (var i = 0; i < ttq.methods.length; i++)
                ttq.setAndDefer(ttq, ttq.methods[i]);
            ttq.instance = function(t) {
                for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
                    ttq.setAndDefer(e, ttq.methods[n]);
                return e
            }
            ,
            ttq.load = function(e, n) {
                var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
                ttq._i = ttq._i || {},
                ttq._i[e] = [],
                ttq._i[e]._u = i,
                ttq._t = ttq._t || {},
                ttq._t[e] = +new Date,
                ttq._o = ttq._o || {},
                ttq._o[e] = n || {};
                var o = document.createElement("script");
                o.type = "text/javascript",
                o.async = !0,
                o.src = i + "?sdkid=" + e + "&lib=" + t;
                var a = document.getElementsByTagName("script")[0];
                a.parentNode.insertBefore(o, a)
            }
            ;
            ttq.load('C70ASRVOUAG086PM0NNG');
        }(window, document, 'ttq')
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('774')) {
        if (tc_vars["msn_cgGroup"].toString().toLowerCase().match(new RegExp(('Product page').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
            tC.launchTag(774, 'TikTok - View Content - WW', 26, 5181, 22, 12);
            ttq.instance('C70ASRVOUAG086PM0NNG').track('ViewContent', {
                content_type: 'product',
                content_id: tc_vars["product_mfPartNumber"].replace(/^CR/i, ""),
                content_name: tc_vars["product_eng_title"],
                content_category: tc_vars["product_eng_category"],
                quantity: 1,
                price: tc_vars["product_unitprice_ati"],
                value: tc_vars["product_unitprice_ati"],
                currency: tc_vars["nav_currency"].toUpperCase()
            });
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('778')) {
        if ((tc_vars["nav_stepName"].toString().toLowerCase().match(new RegExp(('ShippingAddress').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            tC.launchTag(778, 'TikTok - Initiate Checkout - WW', 26, 5181, 22, 12);
            var contentsArray = [];
            var cartValue = 0
            for (var i = 0; i < tC.internalvars.ricCartIDArray.length; i++) {
                contentsArray.push({
                    content_id: tC.internalvars.ricCartIDArray[i].replace(/^CR/i, ""),
                    content_name: tc_vars["product_eng_title"][i],
                    content_category: tc_vars["product_eng_category"][i],
                    quantity: tC.internalvars.ricCartQuantityArray[i],
                    price: tC.internalvars.ricCartPriceArray[i]
                });
                cartValue += Number(tC.internalvars.ricCartPriceArray[i]);
            }
            ttq.instance('C70ASRVOUAG086PM0NNG').track('InitiateCheckout', {
                content_type: 'product',
                contents: contentsArray,
                value: cartValue,
                currency: tc_vars["nav_currency"].toUpperCase()
            });
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('780')) {
        if ((tc_vars["nav_pagetype"].toString().toLowerCase().match(new RegExp(('thankyou').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            tC.launchTag(780, 'TikTok - Purchase - WW', 26, 5181, 22, 12);
            var contentsArray = [];
            for (var i = 0; i < tC.internalvars.ricOrderIDArray.length; i++) {
                contentsArray.push({
                    content_id: tC.internalvars.ricOrderIDArray[i].replace(/^CR/i, ""),
                    quantity: tC.internalvars.ricOrderQtyArray[i],
                    price: tC.internalvars.ricOrderPriceArray[i]
                });
            }
            ttq.instance('C70ASRVOUAG086PM0NNG').track('CompletePayment', {
                content_type: 'product',
                contents: contentsArray,
                value: tc_vars["order_amount_ati_with_sf"],
                currency: tc_vars["nav_currency"].toUpperCase()
            });
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('784')) {
        tC.launchTag(784, 'TikTok - Pageview - WW', 26, 5181, 22, 12);
        ttq.instance('C70ASRVOUAG086PM0NNG').track('Pageview');
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('791')) {
        if ((tc_vars["pguri"].toString().toLowerCase().indexOf(('sunglasses').toLowerCase()) != -1 || tc_vars["pguri"].toString().toLowerCase().indexOf(('eyewear').toLowerCase()) != -1)) {
            if (tC.internalvars.facebookKeringCountryScope == 'true') {
                tC.launchTag(791, 'Facebook - Kering Eyewear - Pageview - PLP and PDP', 2652, 5181, 22, 12);
                !function(f, b, e, v, n, t, s) {
                    if (f.fbq)
                        return;
                    n = f.fbq = function() {
                        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                    }
                    ;
                    if (!f._fbq)
                        f._fbq = n;
                    n.push = n;
                    n.loaded = !0;
                    n.version = '2.0';
                    n.queue = [];
                    t = b.createElement(e);
                    t.async = !0;
                    t.src = v;
                    s = b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t, s)
                }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '3137383833193929');
                fbq('trackSingle', '3137383833193929', 'PageView');
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('796')) {
        if ((tc_vars["rcms_cgGroup"] == 'Checkout pages')) {
            if (tC.internalvars.facebookKeringCountryScope == 'true') {
                tC.launchTag(796, 'Facebook - Kering  Eyewear - PageView - Checkout Funnel', 2652, 5181, 22, 12);
                var cartItemIsEyewear = false;
                if (tc_vars['cart_items'] !== undefined) {
                    for (var i = 0; i < tc_vars['cart_items'].length; i++) {
                        if (/Eyewear/i.test(tc_vars['cart_items'][i]['cart_item_eng_category'])) {
                            cartItemIsEyewear = true;
                            break;
                        }
                    }
                }
                var orderItemIsEyewear = false;
                if (tc_vars['order_items'] !== undefined) {
                    for (var i = 0; i < tc_vars['order_items'].length; i++) {
                        if (/Eyewear/i.test(tc_vars['order_items'][i]['order_item_eng_category'])) {
                            orderItemIsEyewear = true;
                            break;
                        }
                    }
                }
                if (cartItemIsEyewear === true || orderItemIsEyewear === true) {
                    !function(f, b, e, v, n, t, s) {
                        if (f.fbq)
                            return;
                        n = f.fbq = function() {
                            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                        }
                        ;
                        if (!f._fbq)
                            f._fbq = n;
                        n.push = n;
                        n.loaded = !0;
                        n.version = '2.0';
                        n.queue = [];
                        t = b.createElement(e);
                        t.async = !0;
                        t.src = v;
                        s = b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t, s)
                    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '3137383833193929');
                    fbq('trackSingle', '3137383833193929', 'PageView');
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('798')) {
        if ((tc_vars["pguri"].toString().toLowerCase().indexOf(('sunglasses').toLowerCase()) != -1 || tc_vars["pguri"].toString().toLowerCase().indexOf(('eyewear').toLowerCase()) != -1)) {
            if (tC.internalvars.facebookKeringCountryScope == 'true') {
                if (tc_vars["msn_cgGroup"].toString().toLowerCase().match(new RegExp(('Product page').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
                    tC.launchTag(798, 'Facebook - Kering  Eyewear - View Content', 2652, 5181, 22, 12);
                    fbq('trackSingle', '3137383833193929', 'ViewContent', {
                        content_type: 'product',
                        content_ids: tc_vars["product_mfPartNumber"].replace(/^CR/i, ""),
                        content_name: tc_vars["product_eng_title"],
                        content_category: tc_vars["product_eng_category"],
                        content_collection: tc_vars["product_collection"],
                        value: tc_vars["product_unitprice_ati"],
                        currency: tc_vars["nav_currency"].toUpperCase()
                    });
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('802')) {
        if ((tC.internalvars.facebookKeringCountryScope == 'true')) {
            if (tc_vars["nav_stepName"].toString().toLowerCase().match(new RegExp(('ShippingAddress').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
                tC.launchTag(802, 'Facebook - Kering Eyewear - Proceed  To Checkout', 2652, 5181, 22, 12);
                var cartItemIsEyewear = false;
                var contentsArray = [];
                var basketPrice = 0;
                if (tc_vars["cart_items"] !== undefined) {
                    for (var i = 0; i < tc_vars["cart_items"].length; i++) {
                        if (/Eyewear/i.test(tc_vars["cart_items"][i]['cart_item_eng_category'])) {
                            cartItemIsEyewear = true;
                            break;
                        }
                    }
                }
                if (cartItemIsEyewear === true) {
                    for (var i = 0; i < tc_vars["cart_items"].length; i++) {
                        if (/Eyewear/i.test(tc_vars["cart_items"][i]['cart_item_eng_category'])) {
                            contentsArray.push({
                                id: tc_vars["cart_items"][i]['cart_item_mfPartNumber'].replace(/^CR/i, ""),
                                name: tc_vars["cart_items"][i]['cart_item_eng_title'],
                                category: tc_vars["cart_items"][i]['cart_item_eng_category']
                            });
                            basketPrice += Number(tc_vars["cart_items"][i]['cart_item_unitprice_ati']);
                        }
                    }
                    fbq('trackSingle', '3137383833193929', 'InitiateCheckout', {
                        content_type: 'product',
                        contents: contentsArray,
                        value: basketPrice,
                        currency: tc_vars["nav_currency"].toUpperCase()
                    });
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('804')) {
        if ((tc_vars["nav_pagetype"].toString().toLowerCase().match(new RegExp(('thankyou').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            if (tC.internalvars.facebookKeringCountryScope == 'true') {
                tC.launchTag(804, 'Facebook - Kering Eyewear - Purchase', 2652, 5181, 22, 12);
                var orderItemIsEyewear = false;
                var contentsArray = [];
                var basketPrice = 0;
                if (tc_vars["order_items"] !== undefined) {
                    for (var i = 0; i < tc_vars["order_items"].length; i++) {
                        if (/Eyewear/i.test(tc_vars["order_items"][i]['order_item_eng_category'])) {
                            orderItemIsEyewear = true;
                            break;
                        }
                    }
                }
                if (orderItemIsEyewear === true) {
                    for (var i = 0; i < tc_vars["order_items"].length; i++) {
                        if (/Eyewear/i.test(tc_vars["order_items"][i]['order_item_eng_category'])) {
                            contentsArray.push({
                                id: tc_vars["order_items"][i]['order_item_mfPartNumber'].replace(/^CR/i, ""),
                                name: tc_vars["order_items"][i]['order_item_eng_title'],
                                category: tc_vars["order_items"][i]['order_item_eng_category']
                            });
                            basketPrice += Number(tc_vars["order_items"][i]['order_item_unitprice_ati']);
                        }
                    }
                    fbq('trackSingle', '3137383833193929', 'Purchase', {
                        content_type: 'product',
                        contents: contentsArray,
                        value: basketPrice,
                        currency: tc_vars["nav_currency"].toUpperCase()
                    });
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('876')) {
        if ((tc_vars["nav_countryCode"] == 'BE')) {
            if (tc_vars["pguri"].toString().toLowerCase().match(new RegExp(('Account/User/Register').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
                tC.launchTag(876, 'Pinterest - Signup - BE', 2800, 5181, 22, 12);
                pintrk('track', 'signup');
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('892')) {
        if ((tc_vars["pguri"].toString().toLowerCase().indexOf(('sunglasses').toLowerCase()) != -1 || tc_vars["pguri"].toString().toLowerCase().indexOf(('eyewear').toLowerCase()) != -1)) {
            if (tC.internalvars.tiktokKeringCountryScope == 'true') {
                tC.launchTag(892, 'Tiktok - Kering Eyewear - Pageview - PLP and PDP', 2866, 5181, 22, 12);
                !function(w, d, t) {
                    w.TiktokAnalyticsObject = t;
                    var ttq = w[t] = w[t] || [];
                    ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"],
                    ttq.setAndDefer = function(t, e) {
                        t[e] = function() {
                            t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
                        }
                    }
                    ;
                    for (var i = 0; i < ttq.methods.length; i++)
                        ttq.setAndDefer(ttq, ttq.methods[i]);
                    ttq.instance = function(t) {
                        for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
                            ttq.setAndDefer(e, ttq.methods[n]);
                        return e
                    }
                    ,
                    ttq.load = function(e, n) {
                        var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
                        ttq._i = ttq._i || {},
                        ttq._i[e] = [],
                        ttq._i[e]._u = i,
                        ttq._t = ttq._t || {},
                        ttq._t[e] = +new Date,
                        ttq._o = ttq._o || {},
                        ttq._o[e] = n || {};
                        var o = document.createElement("script");
                        o.type = "text/javascript",
                        o.async = !0,
                        o.src = i + "?sdkid=" + e + "&lib=" + t;
                        var a = document.getElementsByTagName("script")[0];
                        a.parentNode.insertBefore(o, a)
                    }
                    ;
                    ttq.load('CDR4JG3C77U4KH13TFRG');
                }(window, document, 'ttq');
                ttq.instance('CDR4JG3C77U4KH13TFRG').track('Pageview');
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('898')) {
        if ((tc_vars["rcms_cgGroup"] == 'Checkout pages')) {
            if (tC.internalvars.tiktokKeringCountryScope == 'true') {
                tC.launchTag(898, 'Tiktok - Kering  Eyewear - Pageview - Checkout Funnel', 2866, 5181, 22, 12);
                var cartItemIsEyewear = false;
                if (tc_vars["cart_items"] !== undefined) {
                    for (var i = 0; i < tc_vars["cart_items"].length; i++) {
                        if (/Eyewear/i.test(tc_vars["cart_items"][i]['cart_item_eng_category'])) {
                            cartItemIsEyewear = true;
                            break;
                        }
                    }
                }
                var orderItemIsEyewear = false;
                if (tc_vars["order_items"] !== undefined) {
                    for (var i = 0; i < tc_vars["order_items"].length; i++) {
                        if (/Eyewear/i.test(tc_vars["order_items"][i]['order_item_eng_category'])) {
                            orderItemIsEyewear = true;
                            break;
                        }
                    }
                }
                if (cartItemIsEyewear === true || orderItemIsEyewear === true) {
                    !function(w, d, t) {
                        w.TiktokAnalyticsObject = t;
                        var ttq = w[t] = w[t] || [];
                        ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"],
                        ttq.setAndDefer = function(t, e) {
                            t[e] = function() {
                                t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
                            }
                        }
                        ;
                        for (var i = 0; i < ttq.methods.length; i++)
                            ttq.setAndDefer(ttq, ttq.methods[i]);
                        ttq.instance = function(t) {
                            for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
                                ttq.setAndDefer(e, ttq.methods[n]);
                            return e
                        }
                        ,
                        ttq.load = function(e, n) {
                            var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
                            ttq._i = ttq._i || {},
                            ttq._i[e] = [],
                            ttq._i[e]._u = i,
                            ttq._t = ttq._t || {},
                            ttq._t[e] = +new Date,
                            ttq._o = ttq._o || {},
                            ttq._o[e] = n || {};
                            var o = document.createElement("script");
                            o.type = "text/javascript",
                            o.async = !0,
                            o.src = i + "?sdkid=" + e + "&lib=" + t;
                            var a = document.getElementsByTagName("script")[0];
                            a.parentNode.insertBefore(o, a)
                        }
                        ;
                        o.id = "tc_script_898_1";
                        ttq.load(tC.internalvars.tiktokKeringId);
                    }(window, document, 'ttq');
                    ttq.instance(tC.internalvars.tiktokKeringId).track('Pageview');
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('893')) {
        if ((tc_vars["pguri"].toString().toLowerCase().indexOf(('sunglasses').toLowerCase()) != -1 || tc_vars["pguri"].toString().toLowerCase().indexOf(('eyewear').toLowerCase()) != -1)) {
            if (tC.internalvars.tiktokKeringCountryScope == 'true') {
                if (tc_vars["msn_cgGroup"].toString().toLowerCase().match(new RegExp(('Product page').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
                    tC.launchTag(893, 'Tiktok - Kering  Eyewear - View Content', 2894, 5181, 22, 12);
                    ttq.instance(tC.internalvars.tiktokKeringId).track('ViewContent', {
                        content_type: 'product',
                        content_id: tc_vars["product_mfPartNumber"].replace(/^CR/i, ""),
                        content_name: tc_vars["product_eng_title"],
                        content_category: tc_vars["product_category"],
                        description: tc_vars["product_eng_title"],
                        quantity: 1,
                        price: Number(tc_vars["product_unitprice_ati"]),
                        value: Number(tc_vars["product_unitprice_ati"]),
                        currency: tc_vars["nav_currency"].toUpperCase()
                    });
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('895')) {
        if ((tc_vars["nav_pagetype"].toString().toLowerCase().match(new RegExp(('thankyou').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            if (tC.internalvars.tiktokKeringCountryScope == 'true') {
                tC.launchTag(895, 'Tiktok - Kering  Eyewear - Purchase', 2876, 5181, 22, 12);
                var orderItemIsEyewear = false;
                var contentsArray = [];
                var basketPrice = 0;
                if (tc_vars["order_items"] !== undefined) {
                    for (var i = 0; i < tc_vars["order_items"].length; i++) {
                        if (/Eyewear|Sunglasses/i.test(tc_vars["order_items"][i]['order_item_eng_category'])) {
                            orderItemIsEyewear = true;
                            break;
                        }
                    }
                }
                if (orderItemIsEyewear === true) {
                    for (var i = 0; i < tc_vars["order_items"].length; i++) {
                        if (/Eyewear|Sunglasses/i.test(tc_vars["order_items"][i]['order_item_eng_category'])) {
                            contentsArray.push({
                                content_id: tc_vars["order_items"][i]['order_item_mfPartNumber'].replace(/^CR/i, ""),
                                content_name: tc_vars["order_items"][i]['order_item_eng_title'],
                                content_category: tc_vars["order_items"][i]['order_item_eng_category'],
                                description: tc_vars["order_items"][i]['order_item_eng_title'],
                                quantity: 1,
                                price: tc_vars["order_items"][i]['order_item_unitprice_ati']
                            });
                            basketPrice += Number(tc_vars["order_items"][i]['order_item_unitprice_ati']);
                        }
                    }
                    ttq.instance(tC.internalvars.tiktokKeringId).track('CompletePayment', {
                        content_type: 'product',
                        contents: contentsArray,
                        value: basketPrice,
                        currency: tc_vars["nav_currency"].toUpperCase()
                    });
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('899')) {
        if ((tc_vars["pguri"].toString().toLowerCase().indexOf(('sunglasses').toLowerCase()) != -1 || tc_vars["pguri"].toString().toLowerCase().indexOf(('eyewear').toLowerCase()) != -1)) {
            if (tC.internalvars.snapchatKeringScope == 'true') {
                tC.launchTag(899, 'Snapchat - Kering - Eywear - Pageview - PLP and PDP', 26, 5181, 22, 12);
                (function(e, t, n) {
                    if (e.snaptr)
                        return;
                    var a = e.snaptr = function() {
                        a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments)
                    }
                    ;
                    a.queue = [];
                    var s = 'script';
                    r = t.createElement(s);
                    r.async = !0;
                    r.src = n;
                    var u = t.getElementsByTagName(s)[0];
                    u.parentNode.insertBefore(r, u);
                }
                )(window, document, 'https://sc-static.net/scevent.min.js');
                snaptr('init', tC.internalvars.snapchatKeringId);
                snaptr('track', tC.internalvars.snapchatKeringId, 'PAGE_VIEW');
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('900')) {
        if ((tc_vars["rcms_cgGroup"] == 'Checkout pages')) {
            if (tC.internalvars.snapchatKeringScope == 'true') {
                tC.launchTag(900, 'Snapchat - Kering - Eywear - Pageview - Checkout Funnel', 26, 5181, 22, 12);
                var cartItemIsEyewear = false;
                if (tc_vars['cart_items'] !== undefined) {
                    for (var i = 0; i < tc_vars['cart_items'].length; i++) {
                        if (/Eyewear/i.test(tc_vars['cart_items'][i]['cart_item_eng_category'])) {
                            cartItemIsEyewear = true;
                            break;
                        }
                    }
                }
                var orderItemIsEyewear = false;
                if (tc_vars['order_items'] !== undefined) {
                    for (var i = 0; i < tc_vars['order_items'].length; i++) {
                        if (/Eyewear/i.test(tc_vars['order_items'][i]['order_item_eng_category'])) {
                            orderItemIsEyewear = true;
                            break;
                        }
                    }
                }
                if (cartItemIsEyewear === true || orderItemIsEyewear === true) {
                    (function(e, t, n) {
                        if (e.snaptr)
                            return;
                        var a = e.snaptr = function() {
                            a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments)
                        }
                        ;
                        a.queue = [];
                        var s = 'script';
                        r = t.createElement(s);
                        r.async = !0;
                        r.src = n;
                        var u = t.getElementsByTagName(s)[0];
                        u.parentNode.insertBefore(r, u);
                    }
                    )(window, document, 'https://sc-static.net/scevent.min.js');
                    snaptr('init', tC.internalvars.snapchatKeringId);
                    snaptr('track', tC.internalvars.snapchatKeringId, 'PAGE_VIEW');
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('901')) {
        if ((tc_vars["pguri"].toString().toLowerCase().indexOf(('sunglasses').toLowerCase()) != -1 || tc_vars["pguri"].toString().toLowerCase().indexOf(('eyewear').toLowerCase()) != -1)) {
            if (tC.internalvars.snapchatKeringScope == 'true') {
                if (tc_vars["msn_cgGroup"].toString().toLowerCase().match(new RegExp(('Product page').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
                    tC.launchTag(901, 'Snapchat - Kering  Eyewear - View Content', 26, 5181, 22, 12);
                    snaptr('track', tC.internalvars.snapchatKeringId, 'VIEW_CONTENT', {
                        price: tc_vars["product_unitprice_ati"],
                        item_ids: tc_vars["product_mfPartNumber"].replace(/^CR/i, ""),
                        currency: tc_vars["nav_currency"].toUpperCase()
                    });
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('903')) {
        if ((tc_vars["nav_pagetype"].toString().toLowerCase().match(new RegExp(('thankyou').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            if (tC.internalvars.snapchatKeringScope == 'true') {
                tC.launchTag(903, 'Snapchat - Kering  Eyewear - Purchase', 26, 5181, 22, 12);
                var orderItemIsEyewear = false;
                var contentsArrayId = [];
                var basketPrice = 0;
                if (tc_vars["order_items"] !== undefined) {
                    for (var i = 0; i < tc_vars["order_items"].length; i++) {
                        if (/Eyewear/i.test(tc_vars["order_items"][i]['order_item_eng_category'])) {
                            orderItemIsEyewear = true;
                            break;
                        }
                    }
                }
                if (orderItemIsEyewear === true) {
                    for (var i = 0; i < tc_vars["order_items"].length; i++) {
                        if (/Eyewear/i.test(tc_vars["order_items"][i]['order_item_eng_category'])) {
                            contentsArrayId.push(tc_vars["order_items"][i]['order_item_mfPartNumber'].replace(/^CR/i, ""));
                            basketPrice += Number(tc_vars["order_items"][i]['order_item_unitprice_ati']);
                        }
                    }
                    snaptr('track', tC.internalvars.snapchatKeringId, 'PURCHASE', {
                        price: tc_vars["order_amount_ati_with_sf"],
                        item_ids: contentsArrayId,
                        currency: tc_vars["nav_currency"],
                        transaction_id: tc_vars["order_id"]
                    });
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('905')) {
        tC.launchTag(905, 'Sizmek - Library', 26, 5181, 22, 12);
        (function(e, s, t) {
            t = t || {},
            t.id = e,
            versaTagObj = {
                $: [],
                onready: function(e) {
                    this.$.push(e)
                }
            };
            var n = s.getElementsByTagName("script")[0]
              , r = s.createElement("script");
            r.options = t,
            r.async = !0,
            r.src = "https://secure-ds.serving-sys.com/SemiCachedScripts/ebOneTag.js?id=" + e,
            r.options = t,
            n.parentNode.insertBefore(r, n)
        }
        )("10325", document, {
            dataLayer: "SizmekDataLayer"
        });
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('906')) {
        tC.launchTag(906, 'Sizmek - Datalayer - PageView Based', 26, 5181, 22, 12);
        var sizmekPageType = tc_vars.nav_pagetype;
        if (sizmekPageType === 'home') {
            sizmekPageType = 'Homepage';
        } else if (sizmekPageType === 'item') {
            sizmekPageType = 'Product';
        }
        var sizmekEvent = "page_view";
        var SizmekDataLayer = {};
        SizmekDataLayer = {
            "event": sizmekEvent,
            "pageType": sizmekPageType,
            "OrderID": tc_vars.order_id,
            "Quantity": "",
            "Value": tc_vars.product_unitprice_ati.toString() || "",
            "Currency": tc_vars.nav_currency.toUpperCase(),
            "ProductID": tc_vars.product_mfPartNumber,
            "ProductInfo": tc_vars.product_eng_title,
            "Unit_Quantity": "",
            "Unit_Price": tc_vars.product_unitprice_ati.toString()
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('907')) {
        if ((tC.internalvars.tc_pathname.toString().toLowerCase().match(new RegExp(('OnePageCheckout\/Confirmation').replace(new RegExp("\\*","g"), ".*"),"gi"))) || (tc_vars["nav_pagetype"].toString().toLowerCase().match(new RegExp(('thankyou').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            tC.launchTag(907, 'Sizmek - Datalayer - Initiate Checkout / Purchase', 26, 5181, 22, 12);
            var sizmekPageType = tc_vars.nav_pagetype;
            var sizmekEvent = 'page_view';
            if (sizmekPageType === 'thankyou') {
                sizmekEvent = 'purchase';
            } else if (/OnePageCheckout\/Confirmation/.test(tC.internalvars.tc_pathname)) {
                sizmekEvent = 'begin_checkout';
            }
            var items;
            var sizmekProductId = [];
            var sizmekProductInfo = [];
            var sizmekUnitPrice = [];
            var sizmekUnitQuanity = [];
            var sizmekValue = "";
            var sizmekQuantity = "";
            if (/OnePageCheckout\/Confirmation/.test(tC.internalvars.tc_pathname)) {
                items = tc_vars.cart_items;
                for (var i = 0; i < items.length; i++) {
                    sizmekProductId.push(items[i].cart_item_mfPartNumber);
                    sizmekProductInfo.push(items[i].cart_item_eng_title);
                    sizmekUnitPrice.push(Number(items[i]).cart_item_unitprice_ati);
                    sizmekUnitQuanity.push(Number(items[i].cart_item_quantity));
                    sizmekValue += Number(items[i].cart_item_unitprice_ati);
                    sizmekQuantity += Number(items[i].cart_item_quantity);
                }
            } else if (sizmekPageType === 'thankyou') {
                items = tc_vars.order_items;
                for (var i = 0; i < items.length; i++) {
                    sizmekProductId.push(items[i].order_item_mfPartNumber);
                    sizmekProductInfo.push(items[i].order_item_eng_title);
                    sizmekUnitPrice.push(Number(items[i]).order_item_unitprice_ati);
                    sizmekUnitQuanity.push(Number(items[i].order_item_quantity));
                    sizmekValue += items[i].order_item_unitprice_ati;
                    sizmekQuantity += items[i].order_item_quantity;
                }
            }
            sizmekProductId = sizmekProductId.toString();
            sizmekProductInfo = sizmekProductInfo.toString();
            sizmekUnitPrice = sizmekUnitPrice.toString();
            sizmekUnitQuanity = sizmekUnitQuanity.toString();
            sizmekQuantity = sizmekQuantity.toString();
            sizmekValue = sizmekValue.toString();
            var SizmekDataLayer = {};
            SizmekDataLayer = {
                "event": sizmekEvent,
                "pageType": sizmekPageType,
                "OrderID": tc_vars.order_id,
                "Quantity": sizmekQuantity || "",
                "Value": sizmekValue || "",
                "Currency": tc_vars.nav_currency.toUpperCase(),
                "ProductID": sizmekProductId,
                "ProductInfo": sizmekProductInfo,
                "Unit_Quantity": sizmekUnitQuanity,
                "Unit_Price": sizmekUnitPrice
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('910')) {
        if ((tc_vars["nav_countryCode"].toString().toLowerCase().match(new RegExp(('GB').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            tC.launchTag(910, 'Bing - All pages - UK', 1625, 5181, 22, 12);
            (function(w, d, t, r, u) {
                var f, n, i;
                w[u] = w[u] || [],
                f = function() {
                    var o = {
                        ti: '5436491'
                    };
                    o.q = w[u],
                    w[u] = new UET(o),
                    w[u].push("pageLoad")
                }
                ,
                n = d.createElement(t),
                n.src = r,
                n.async = 1,
                n.onload = n.onreadystatechange = function() {
                    var s = this.readyState;
                    s && s !== "loaded" && s !== "complete" || (f(),
                    n.onload = n.onreadystatechange = null)
                }
                ,
                i = d.getElementsByTagName(t)[0],
                i.parentNode.insertBefore(n, i)
            }
            )(window, document, "script", "//bat.bing.com/bat.js", "uetq");
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('917')) {
        if ((tc_vars["nav_countryCode"] == 'FR')) {
            tC.launchTag(917, 'gtag - Google DV360 - Pageview france', 2592, 5181, 22, 12);
            if (typeof gtag !== "undefined") {
                gtag('event', 'conversion', {
                    'allow_custom_scripts': true,
                    'send_to': 'DC-9270377' + "/" + 'invmedia' + "/" + 'carti004' + "+" + 'standard'
                });
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('918')) {
        if ((tC.internalvars.tc_url == 'https://www.cartier.com/fr-fr/soyez-inspire/les-creations-joaillieres-incontournables' || tC.internalvars.tc_url == 'https://www.cartier.com/fr-fr/soyez-inspire/les-creations-horlogeres-incontournables' || tC.internalvars.tc_url == 'https://www.cartier.com/fr-fr/soyez-inspire/les-petits-luxes' || tC.internalvars.tc_url == 'https://www.cartier.com/fr-fr/soyez-inspire/classiques-cartier')) {
            tC.launchTag(918, 'gtag - Google DV360- Campaign Pageview france', 2592, 5181, 22, 12);
            if (typeof gtag !== "undefined") {
                gtag('event', 'conversion', {
                    'allow_custom_scripts': true,
                    'send_to': 'DC-9270377' + "/" + 'invmedia' + "/" + 'carti005' + "+" + 'standard'
                });
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('919')) {
        if ((tc_vars["nav_countryCode"] == 'FR')) {
            tC.launchTag(919, 'gtag - Google DV360 - Init [START] FR', 2586, 5181, 22, 12);
            if (typeof gtag === "undefined") {
                tC.script.add("//www.googletagmanager.com/gtag/js?id=" + 'DC-9270377');
                window.dataLayer = window.dataLayer || [];
                var gtag = function() {
                    dataLayer.push(arguments);
                };
                gtag('js', new Date());
            }
            gtag('config', 'DC-9270377');
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('928')) {
        if ((tC.internalvars.tc_pathname.toString().toLowerCase().match(new RegExp(('OnePageCheckout\/Confirmation').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            tC.launchTag(928, 'Teads - Initiate checkout', 2608, 5181, 22, 12);
            if (tc_vars["nav_stepName"] === 'ShippingAddress') {
                window.teads_e.push({
                    name: tC.internalvars.ricCartNameArray,
                    price: tc_vars["cart_total"],
                    currency: tc_vars["nav_currency"],
                    conversionType: "InitiateCheckout"
                });
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('929')) {
        if ((tc_vars["nav_pagetype"].toString().toLowerCase().match(new RegExp(('thankyou').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            tC.launchTag(929, 'Teads - Purchase', 2608, 5181, 22, 12);
            window.teads_e.push({
                name: tC.internalvars.ricCartNameArray,
                price: tc_vars["order_amount_ati_with_sf"],
                currency: tc_vars["nav_currency"],
                conversionType: "Purchase"
            });
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('934')) {
        tC.launchTag(934, 'CM 360 - Arrival', 26, 5181, 22, 12);
        tC.scriptElt1 = document.createElement("script");
        tC.scriptElt1.id = "tc_script_934_1";
        tC.scriptElt1.src = "https://www.googletagmanager.com/gtag/js?id=DC-14459104";
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
        window.dataLayer = window.dataLayer || [];
        var gtag = function() {
            dataLayer.push(arguments);
        };
        gtag('js', new Date());
        gtag('config', 'DC-14459104');
        gtag('event', 'conversion', {
            'allow_custom_scripts': true,
            'u2': 'page_view',
            'u3': tc_vars["nav_pagetype"],
            'u4': tc_vars["product_eng_title"],
            'send_to': 'DC-14459104/car/arrival+unique'
        });
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('935')) {
        if ((tc_vars["nav_pagetype"] == 'home')) {
            tC.launchTag(935, 'CM 360 - Homepage', 26, 5181, 22, 12);
            tC.scriptElt1 = document.createElement("script");
            tC.scriptElt1.id = "tc_script_935_1";
            tC.scriptElt1.src = "https://www.googletagmanager.com/gtag/js?id=DC-14459104";
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
            window.dataLayer = window.dataLayer || [];
            var gtag = function() {
                dataLayer.push(arguments);
            };
            gtag('js', new Date());
            gtag('config', 'DC-14459104');
            gtag('event', 'conversion', {
                'allow_custom_scripts': true,
                'u2': 'page_view',
                'u3': tc_vars["nav_pagetype"],
                'send_to': 'DC-14459104/car/homepage+standard'
            });
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('936')) {
        if ((tC.internalvars.tc_pathname.toString().toLowerCase().match(new RegExp(('OnePageCheckout\/Confirmation').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            tC.launchTag(936, 'CM 360 - Initiate Checkout', 26, 5181, 22, 12);
            tC.scriptElt1 = document.createElement("script");
            tC.scriptElt1.id = "tc_script_933_1";
            tC.scriptElt1.src = "https://www.googletagmanager.com/gtag/js?id=DC-14459104";
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
            window.dataLayer = window.dataLayer || [];
            var gtag = function() {
                dataLayer.push(arguments);
            };
            gtag('js', new Date());
            gtag('config', 'DC-14459104');
            var items = tc_vars.cart_items;
            var ProductInfo = [];
            var Value = 0;
            var Quantity = 0;
            for (var i = 0; i < items.length; i++) {
                ProductInfo.push(items[i].cart_item_eng_title);
                Value += Number(items[i].cart_item_unitprice_ati);
                Quantity += Number(items[i].cart_item_quantity);
            }
            gtag('event', 'conversion', {
                'allow_custom_scripts': true,
                'u1': Quantity,
                'u2': 'begin_checkout',
                'u3': tc_vars["nav_pagetype"],
                'u4': ProductInfo,
                'u5': Value,
                'send_to': 'DC-14459104/car/checkout+standard'
            });
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('937')) {
        if ((tc_vars["pguri"].toString().toLowerCase().match(new RegExp(('contact-us').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            tC.launchTag(937, 'CM 360 - Lead - Contact', 26, 5181, 22, 12);
            tC.scriptElt1 = document.createElement("script");
            tC.scriptElt1.id = "tc_script_933_1";
            tC.scriptElt1.src = "https://www.googletagmanager.com/gtag/js?id=DC-14459104";
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
            window.dataLayer = window.dataLayer || [];
            var gtag = function() {
                dataLayer.push(arguments);
            };
            gtag('js', new Date());
            gtag('config', 'DC-14459104');
            gtag('event', 'conversion', {
                'allow_custom_scripts': true,
                'u2': 'contact_requested',
                'u3': tc_vars["nav_pagetype"],
                'send_to': 'DC-14459104/car/lead+standard'
            });
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('938')) {
        if ((tc_vars["msn_cgGroup"] == 'Product page')) {
            tC.launchTag(938, 'CM 360 - Product Page', 26, 5181, 22, 12);
            tC.scriptElt1 = document.createElement("script");
            tC.scriptElt1.id = "tc_script_933_1";
            tC.scriptElt1.src = "https://www.googletagmanager.com/gtag/js?id=DC-14459104";
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
            window.dataLayer = window.dataLayer || [];
            var gtag = function() {
                dataLayer.push(arguments);
            };
            gtag('js', new Date());
            gtag('config', 'DC-14459104');
            gtag('event', 'conversion', {
                'allow_custom_scripts': true,
                'u2': 'product_page',
                'u3': tc_vars["nav_pagetype"],
                'u4': tc_vars.product_eng_title,
                'send_to': 'DC-14459104/car/prodpage+standard'
            });
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('939')) {
        if (tc_vars["nav_pagetype"] == 'thankyou') {
            tC.launchTag(939, 'CM 360 - Purchase', 26, 5181, 22, 12);
            tC.scriptElt1 = document.createElement("script");
            tC.scriptElt1.id = "tc_script_933_1";
            tC.scriptElt1.src = "https://www.googletagmanager.com/gtag/js?id=DC-14459104";
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
            window.dataLayer = window.dataLayer || [];
            var gtag = function() {
                dataLayer.push(arguments);
            };
            gtag('js', new Date());
            gtag('config', 'DC-14459104');
            var items = tc_vars.cart_items;
            var ProductInfo = [];
            var UnitQuanity = [];
            var Value = 0;
            var Quantity = 0;
            for (var i = 0; i < items.length; i++) {
                ProductInfo.push(items[i].cart_item_eng_title);
                UnitQuanity.push(Number(items[i].cart_item_quantity));
                Value += Number(items[i].cart_item_unitprice_ati);
                Quantity += Number(items[i].cart_item_quantity);
            }
            gtag('event', 'purchase', {
                'allow_custom_scripts': true,
                'value': tc_vars["order_amount_ati_with_sf"],
                'transaction_id': tc_vars["order_id"],
                'u1': Quantity,
                'u2': 'purchase',
                'u3': tc_vars["nav_pagetype"],
                'u4': ProductInfo,
                'u5': Value,
                'send_to': 'DC-14459104/carsales/purchase+transactions'
            })
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('941')) {
        if (tc_vars["rcms_cgGroup"].toString().toLowerCase().match(new RegExp(('Store Locator').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
            tC.launchTag(941, 'Free input (custom)', 26, 5181, 22, 12);
        }
    }
}
function tc_events_22(tc_elt, tc_id_event, tc_array_events) {
    tc_array_events["id"] = tc_id_event;
    (function() {
        var l = 'fragrance_sensation|fragrance_discover|fragrance_preference|item_name|video_name|video_position|product_is_in_stock|product_defaultMfPartNumber|chapter|fromPage|discovery|score|pid|page|item_shape_case|name|item_movement|item_budget|category|product_eng_casematerial|univers|brand|product_eng_jewelmaterial|variant|product_eng_leathermaterial|discount_price|product_eng_strapmaterial|quantity|price|category_variant|event|label|discountedPrice_tf|position|price_tf|list|promotion_id|promotion_name|promotion_creative|promotion_position|livechatId|advisorId|productEngravable|filter_and_look|productAdjustable|productEmbossable|product_promotion|storelocator|storelocator_city|storelocator_country|prmid|prmname|prmcreative|prmposition|conversationId|discount_price_ati|associateId|discountedPrice|ratingValue|legacy_macro_id|pguri|ratingFeedbackValue|legacy_micro_id|product_id|productAvailability|product_variant_id|price_ati|promo_id|productSkuMfPartNumber|prdid|promo_name|uri|prdname|promo_creative|prdline|promo_position|prdcollection|prdsubcollection|prdengraved|prdembossed|prdsellable|submitstatus|boutiqueName|prdvariant|productSize|boutique|prdref|purpose|prdcategory|type|prddisplay|appointmentId|prdsize|channel|prdavailability|prdadjusted|product_eng_line|prdpersonalized|step|product_eng_collection|csematerial|product_status|jwlmaterial|strmaterial|option|stepName|lthmaterial|product_sellable|currency|productCaseMaterial|car_category|productJewelryMaterial|car_event|productLeatherMaterial|productStrapMaterial|prdprice|productAdjusted|productEmbossed|productCollection|productEngraved|productLine|product_eng_title|product_mfPartNumber|mfPartNumber|item_size|dataSt|personalizationType|item_diamond|item_material_case|item_dial_colour|item_dial_function|item_strap|item_id|id'.split('|');
        for (var k in l) {
            if (!tc_array_events.hasOwnProperty(l[k])) {
                tc_array_events[l[k]] = '';
            }
        }
    }
    )();
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E29')) {
            if (tc_array_events["id"] == 'enh_removecart') {
                tC.launchTag('eenh_removecart', 'Remove from cart', '-1', '5181', '22');
                tC.log("RICH Media | event: Remove from cart");
                tC.log(tc_array_events);
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E31')) {
            if (tc_array_events["id"] == 'univ_variant') {
                tC.launchTag('euniv_variant', 'Universal variant', '-1', '5181', '22');
                tC.log("RICH Media | event: Universal variant");
                tC.log(tc_array_events);
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E33')) {
            if (tc_array_events["id"] == 'enh_addcart') {
                tC.launchTag('eenh_addcart', 'Add to cart', '-1', '5181', '22');
                tC.log("RICH Media | event: Add to cart");
                tC.log(tc_array_events);
                if ((typeof window.tC.event.enh_addcart !== "undefined")) {
                    window.tC.event.enh_addcart(this, tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E35')) {
            if (tc_array_events["id"] == 'enh_prod') {
                tC.launchTag('eenh_prod', 'Product click', '-1', '5181', '22');
                tC.log("RICH Media | event: Product click");
                tC.log(tc_array_events);
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E37')) {
            if (tc_array_events["id"] == 'univ') {
                tC.launchTag('euniv', 'Universal', '-1', '5181', '22');
                tC.log("RICH Media | event: Universal");
                tC.log(tc_array_events);
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E39')) {
            if (tc_array_events["id"] == 'enh_prod_look') {
                tC.launchTag('eenh_prod_look', 'Product click look', '-1', '5181', '22');
                tC.log("RICH Media | event: Product click look");
                tC.log(tc_array_events);
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E41')) {
            if (tc_array_events["id"] == 'enh_product_detail_look') {
                tC.launchTag('eenh_product_detail_look', 'Product detail look', '-1', '5181', '22');
                tC.log("RICH Media | event: Product detail look");
                tC.log(tc_array_events);
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E43')) {
            if (tc_array_events["id"] == 'enh_prod_quick_buy') {
                tC.launchTag('eenh_prod_quick_buy', 'Product click quick buy', '-1', '5181', '22');
                tC.log("RICH Media | event: Product click quick buy");
                tC.log(tc_array_events);
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E45')) {
            if (tc_array_events["id"] == 'enh_product_detail_quick_buy') {
                tC.launchTag('eenh_product_detail_quick_buy', 'Product detail quick buy', '-1', '5181', '22');
                tC.log("RICH Media | event: Product detail quick buy");
                tC.log(tc_array_events);
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E47')) {
            if (tc_array_events["id"] == 'enh_trackPromotionClicks') {
                tC.launchTag('eenh_trackPromotionClicks', 'Promotion click', '-1', '5181', '22');
                tC.log("RICH Media | event: Promotion click");
                tC.log(tc_array_events);
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E49')) {
            if (tc_array_events["id"] == 'virtualPageView') {
                tC.launchTag('evirtualPageView', 'Virtual pageview', '-1', '5181', '22');
                tC.log("RICH Media | event: Virtual pageview");
                tC.log(tc_array_events);
                if ((typeof window.tC.event.virtualPageView !== "undefined")) {
                    window.tC.event.virtualPageView(this, tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E51')) {
            if (tc_array_events["id"] == 'TcVarsItemsListUpdated') {
                tC.launchTag('eTcVarsItemsListUpdated', 'Item list updated', '-1', '5181', '22');
                tC.log("RICH Media | event: Item list updated");
                tC.log(tc_array_events);
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E53')) {
            if (tc_array_events["id"] == 'virtual_storelocator') {
                tC.launchTag('evirtual_storelocator', 'Virtual store locator', '-1', '5181', '22');
                tC.log("RICH Media | event: Virtual store locator");
                tC.log(tc_array_events);
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E55')) {
            if (tc_array_events["id"] == 'car_univ') {
                tC.launchTag('ecar_univ', 'Car univ', '-1', '5181', '22');
                tC.log("RICH Media | event: Car univ");
                tC.log(tc_array_events);
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E57')) {
            if (tc_array_events["id"] == 'univ_noninter') {
                tC.launchTag('euniv_noninter', 'Univ noninter', '-1', '5181', '22');
                tC.log("RICH Media | event: Univ noninter");
                tC.log(tc_array_events);
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E59')) {
            if (tc_array_events["id"] == 'batchImpressions') {
                tC.launchTag('ebatchImpressions', 'Batch impressions', '-1', '5181', '22');
                tC.log("RICH Media | event: Batch impressions");
                tC.log(tc_array_events);
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E61')) {
            if (tc_array_events["id"] == 'virtualPageview_textsearch') {
                tC.launchTag('evirtualPageview_textsearch', 'Virtual pageview text search', '-1', '5181', '22');
                tC.log("RICH Media | event: Virtual pageview text search");
                tC.log(tc_array_events);
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E63')) {
            if (tc_array_events["id"] == 'gps_popin') {
                tC.launchTag('egps_popin', 'GPS popin', '-1', '5181', '22');
                tC.log("RICH Media | event: GPS popin");
                tC.log(tc_array_events);
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E65')) {
            if (tc_array_events["id"] == 'vid_int') {
                tC.launchTag('evid_int', 'Video interaction', '-1', '5181', '22');
                tC.log("RICH Media | event: Video interaction");
                tC.log(tc_array_events);
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E113')) {
            if (tc_array_events["id"] == 'promoImpression') {
                tC.launchTag('epromoImpression', 'Promo Impression', '-1', '5181', '22');
                tC.log("RICH Media | event: Promo Impression");
                tC.log(tc_array_events);
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E123')) {
            if (tc_array_events["id"] == 'univ') {
                tC.launchTag('euniv', 'Facebook - Newsletter Subcription', '-1', '5181', '22');
                if (tc_array_events["event"] === "Click - Newsletter Subscription") {
                    fbq('track', 'Newsletter');
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E155')) {
            if (tc_array_events["id"] == 'univ') {
                tC.launchTag('euniv', 'Sizmek  - Book Appointment', '-1', '5181', '22');
                if (tc_array_events["event"] === "bookanappointment" && tc_vars["nav_countryCode"] == "GB") {
                    var ebSession = tC.getCookie("_ga").split(".")[3];
                    var ebRand = Math.random() + '';
                    var script = document.createElement('script');
                    ebRand = ebRand * 1000000;
                    script.type = "text/javascript";
                    script.async = true;
                    script.src = ("https:" == document.location.protocol ? "https://" : "http://") + "bs.serving-sys.com/Serving/ActivityServer.bs?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_68}&cn=as&ActivityID=" + tC.internalvars.sizmekAppointmentId + "&rnd=" + ebRand + "&Session=" + ebSession;
                    document.getElementsByTagName('body')[0].appendChild(script);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E157')) {
            if (tc_array_events["id"] == 'univ') {
                tC.launchTag('euniv', 'Sizmek - Newsletter Subscription', '-1', '5181', '22');
                if (tc_array_events["event"] === "Submit ok - Newsletter subscription") {
                    var ebSession = tC.getCookie("_ga").split(".")[3];
                    var ebRand = Math.random() + '';
                    var script = document.createElement('script');
                    ebRand = ebRand * 1000000;
                    script.type = "text/javascript";
                    script.async = true;
                    script.src = ("https:" == document.location.protocol ? "https://" : "http://") + "bs.serving-sys.com/Serving/ActivityServer.bs?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_68}&cn=as&ActivityID=494062&rnd=" + ebRand + "&Session=" + ebSession;
                    document.getElementsByTagName('body')[0].appendChild(script);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E167')) {
            if (tc_array_events["id"] == 'enh_prod_quick_buy') {
                tC.launchTag('eenh_prod_quick_buy', 'Add to cart - plp', '-1', '5181', '22');
                tC.log("RICH Media | event: Add to cart");
                tC.log(tc_array_events);
                if ((typeof window.tC.event.enh_prod_quick_buy !== "undefined")) {
                    window.tC.event.enh_prod_quick_buy(this, tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E184')) {
            if (tc_array_events["id"] == 'car_univ') {
                tC.launchTag('ecar_univ', 'Facebook - Contact Ambassador', '-1', '5181', '22');
                if (tc_array_events["event"] === "contactambassador") {
                    fbq('track', 'Lead');
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E186')) {
            if (tc_array_events["id"] == 'car_univ') {
                tC.launchTag('ecar_univ', 'SA360 - Contact Submission', '-1', '5181', '22');
                tC.scriptElt1 = document.createElement("script");
                tC.scriptElt1.id = "tc_script_186_1";
                tC.scriptElt1.src = "https://www.googletagmanager.com/gtag/js?id=DC-9271966";
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
                if (tc_array_events["event"] === "Submit ok contact ambassador") {
                    window.dataLayer = window.dataLayer || [];
                    var gtag = function() {
                        dataLayer.push(arguments);
                    };
                    gtag('js', new Date());
                    gtag('config', 'DC-9271966');
                }
                if (tc_array_events["event"] === "Submit ok contact ambassador") {
                    gtag('event', 'conversion', {
                        'allow_custom_scripts': true,
                        'session_id': tC.getCookie("_ga").split(".")[3],
                        'send_to': 'DC-9271966/car-c/contact+per_session'
                    });
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E196')) {
            if (tc_array_events["id"] == 'univ') {
                tC.launchTag('euniv', 'Facebook - Account Creation', '-1', '5181', '22');
                if (tc_array_events["event"] === "RegistrationFull") {
                    fbq('track', 'CompleteRegistration');
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E198')) {
            if (tc_array_events["id"] == 'univ') {
                tC.launchTag('euniv', 'SA360 - Newsletter Subcription', '-1', '5181', '22');
                tC.scriptElt1 = document.createElement("script");
                tC.scriptElt1.id = "tc_script_198_1";
                tC.scriptElt1.src = "https://www.googletagmanager.com/gtag/js?id=DC-9271966";
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
                if (tc_array_events["event"] === "Submit ok - Newsletter subscription") {
                    window.dataLayer = window.dataLayer || [];
                    var gtag = function() {
                        dataLayer.push(arguments);
                    };
                    gtag('js', new Date());
                    gtag('config', 'DC-9271966');
                }
                if (tc_array_events["event"] === "Submit ok - Newsletter subscription") {
                    gtag('event', 'conversion', {
                        'allow_custom_scripts': true,
                        'session_id': tC.getCookie("_ga").split(".")[3],
                        'send_to': 'DC-9271966/car-c/nl+per_session'
                    });
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E200')) {
            if (tc_array_events["id"] == 'univ') {
                tC.launchTag('euniv', 'SA360 - Account Creation', '-1', '5181', '22');
                tC.scriptElt1 = document.createElement("script");
                tC.scriptElt1.id = "tc_script_200_1";
                tC.scriptElt1.src = "https://www.googletagmanager.com/gtag/js?id=DC-9271966";
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
                if (tc_array_events["event"] === "RegistrationFull") {
                    window.dataLayer = window.dataLayer || [];
                    var gtag = function() {
                        dataLayer.push(arguments);
                    };
                    gtag('js', new Date());
                    gtag('config', 'DC-9271966');
                }
                if (tc_array_events["event"] === "RegistrationFull") {
                    gtag('event', 'conversion', {
                        'allow_custom_scripts': true,
                        'session_id': tC.getCookie("_ga").split(".")[3],
                        'send_to': 'DC-9271966/car-c/signup+per_session'
                    });
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E206')) {
            if (tc_array_events["id"] == 'univ') {
                tC.launchTag('euniv', 'Sizmek - Account Creation', '-1', '5181', '22');
                if (tc_array_events["event"] === "RegistrationFull") {
                    var ebSession = tC.getCookie("_ga").split(".")[3];
                    var ebRand = Math.random() + '';
                    var script = document.createElement('script');
                    ebRand = ebRand * 1000000;
                    script.type = "text/javascript";
                    script.async = true;
                    script.src = ("https:" == document.location.protocol ? "https://" : "http://") + "bs.serving-sys.com/Serving/ActivityServer.bs?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_68}&cn=as&ActivityID=494063&rnd=" + ebRand + "&Session=" + ebSession;
                    document.getElementsByTagName('body')[0].appendChild(script);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E208')) {
            if (tc_array_events["id"] == 'car_univ') {
                tC.launchTag('ecar_univ', 'Sizmek - Click To Call', '-1', '5181', '22');
                if (tc_array_events["event"] === "Call center") {
                    var ebSession = tC.getCookie("_ga").split(".")[3];
                    var ebRand = Math.random() + '';
                    var script = document.createElement('script');
                    ebRand = ebRand * 1000000;
                    script.type = "text/javascript";
                    script.async = true;
                    script.src = ("https:" == document.location.protocol ? "https://" : "http://") + "bs.serving-sys.com/Serving/ActivityServer.bs?gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_68}&cn=as&ActivityID=494064&rnd=" + ebRand + "&Session=" + ebSession;
                    document.getElementsByTagName('body')[0].appendChild(script);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E217')) {
            if (tc_array_events["id"] == 'car_univ') {
                tC.launchTag('ecar_univ', 'Xandr - ClicktoCall', '-1', '5181', '22');
                if (tc_array_events["event"] === "Call center" && tc_vars["nav_countryCode"] === "CH") {
                    tC.imageElt1 = document.createElement("img");
                    tC.imageElt1.id = "tc_img__1";
                    tC.imageElt1.height = "0";
                    tC.imageElt1.width = "0";
                    tC.imageElt1.border = "0";
                    tC.imageElt1.alt = "";
                    tC.imageElt1.src = "https://ib.adnxs.com/pixie?pi=" + tC.internalvars.xandrSiteId + "&e=ClicktoCall&script=0";
                    document.body.appendChild(tC.imageElt1);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E219')) {
            if (tc_array_events["id"] == 'univ') {
                tC.launchTag('euniv', 'Xandr - SubscribetoNewsletter', '-1', '5181', '22');
                if (tc_array_events["event"] === "Submit ok - Newsletter subscription" && tc_vars["nav_countryCode"] === "CH") {
                    tC.imageElt1 = document.createElement("img");
                    tC.imageElt1.id = "tc_img__1";
                    tC.imageElt1.height = "0";
                    tC.imageElt1.width = "0";
                    tC.imageElt1.border = "0";
                    tC.imageElt1.alt = "";
                    tC.imageElt1.src = "https://ib.adnxs.com/pixie?pi=" + tC.internalvars.xandrSiteId + "&e=SubscribetoNewsletter&script=0";
                    document.body.appendChild(tC.imageElt1);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E249')) {
            if (tc_array_events["id"] == 'univ') {
                tC.launchTag('euniv', 'Pinterest - Newsletter Subcription - DE', '-1', '5181', '22');
                if (tc_array_events["event"] === "Click - Newsletter Subscription" && tc_vars["nav_countryCode"] == "DE") {
                    pintrk('track', 'lead', {
                        lead_type: 'Newsletter'
                    });
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E269')) {
            if (tc_array_events["id"] == 'univ') {
                tC.launchTag('euniv', 'Pinterest - Signup', '-1', '5181', '22');
                if (tc_array_events["event"] === "RegistrationFull" && tC.internalvars.countryInPinterestScope == "true") {
                    pintrk('track', 'signup');
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E324')) {
            if (tc_array_events["id"] == 'car_univ') {
                tC.launchTag('ecar_univ', 'Sizmek - DataLayer - Shop By Phone', '-1', '5181', '22');
                if (tc_array_events["event"] === "Call center") {
                    var sizmekEvent = "shopbyphone";
                    var sizmekDataLayer = {};
                    SizmekDataLayer = {
                        "event": sizmekEvent,
                        "ProductID": tc_vars["product_mfPartNumber"].replace(/^CR/.i, "")
                    }
                    tC.log('Sizmek DataLayer :');
                    tC.log(SizmekDataLayer);
                    tC.log('End SizmekDataLayer');
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E325')) {
            if (tc_array_events["id"] == 'univ') {
                tC.launchTag('euniv', 'Sizmek - Datalayer - Id : univ', '-1', '5181', '22');
                if (tc_array_events["event"] === "Submit ok - Newsletter subscription") {
                    var SizmekDataLayer = {
                        "event": "newsletter_subscription"
                    };
                    tC.log('Sizmek DataLayer :');
                    tC.log(SizmekDataLayer);
                    tC.log('End SizmekDataLayer');
                }
                if (tc_array_events["event"] === "RegistrationFull") {
                    var SizmekDataLayer = {
                        "event": "sign_up"
                    }
                    tC.log('Sizmek DataLayer :');
                    tC.log(SizmekDataLayer);
                    tC.log('End SizmekDataLayer');
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E326')) {
            if (tc_array_events["id"] == 'car_univ') {
                tC.launchTag('ecar_univ', 'Sizmek - DataLayer - Lead', '-1', '5181', '22');
                if (tc_array_events["event"] === 'Submit ok - contact ambassador') {
                    var SizmekDataLayer = {
                        'event': 'contact_requested'
                    }
                    tC.log('Sizmek DataLayer :');
                    tC.log(SizmekDataLayer);
                    tC.log('End SizmekDataLayer');
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E369')) {
            if (tc_array_events["id"] == 'univ') {
                tC.launchTag('euniv', 'CM 360 - Lead - Newsletter_subscription', '-1', '5181', '22');
                tC.scriptElt1 = document.createElement("script");
                tC.scriptElt1.id = "tc_script_933_1";
                tC.scriptElt1.src = "https://www.googletagmanager.com/gtag/js?id=DC-14459104";
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
                if (tc_array_events["event"] === "Submit ok - Newsletter subscription") {
                    window.dataLayer = window.dataLayer || [];
                    var gtag = function() {
                        dataLayer.push(arguments);
                    };
                    gtag('js', new Date());
                    gtag('config', 'DC-14459104');
                }
                if (tc_array_events["event"] === "Submit ok - Newsletter subscription") {
                    gtag('event', 'conversion', {
                        'allow_custom_scripts': true,
                        'u2': 'newsletter_subscription',
                        'u3': tc_vars["nav_pagetype"],
                        'send_to': 'DC-14459104/car/lead+standard'
                    })
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E370')) {
            if (tc_array_events["id"] == 'car_univ') {
                tC.launchTag('ecar_univ', 'CM 360 - Shop By Phone', '-1', '5181', '22');
                tC.scriptElt1 = document.createElement("script");
                tC.scriptElt1.id = "tc_script_933_1";
                tC.scriptElt1.src = "https://www.googletagmanager.com/gtag/js?id=DC-14459104";
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
                if (tc_array_events["event"] === "Call center" || "shop by phone" || "call center" || "Shop by phone") {
                    window.dataLayer = window.dataLayer || [];
                    var gtag = function() {
                        dataLayer.push(arguments);
                    };
                    gtag('js', new Date());
                    gtag('config', 'DC-14459104');
                }
                if (tc_array_events["event"] === "Call center" || "shop by phone" || "call center" || "Shop by phone") {
                    gtag('event', 'conversion', {
                        'allow_custom_scripts': true,
                        'u2': 'shopbyphone',
                        'u4': tc_vars["product_eng_title"],
                        'send_to': 'DC-14459104/car/byphone+standard'
                    })
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E371')) {
            if (tc_array_events["id"] == 'univ') {
                tC.launchTag('euniv', 'CM 360 - Lead - Book appointment', '-1', '5181', '22');
                tC.scriptElt1 = document.createElement("script");
                tC.scriptElt1.id = "tc_script_933_1";
                tC.scriptElt1.src = "https://www.googletagmanager.com/gtag/js?id=DC-14459104";
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
                if (tc_array_events["event"] === "bookanappointment") {
                    window.dataLayer = window.dataLayer || [];
                    var gtag = function() {
                        dataLayer.push(arguments);
                    };
                    gtag('js', new Date());
                    gtag('config', 'DC-14459104');
                }
                if (tc_array_events["event"] === "bookanappointment") {
                    gtag('event', 'conversion', {
                        'allow_custom_scripts': true,
                        'u2': 'baa_confirmation',
                        'u3': tc_vars["nav_pagetype"],
                        'send_to': 'DC-14459104/car/lead+standard'
                    });
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E372')) {
            if (tc_array_events["id"] == 'univ') {
                tC.launchTag('euniv', 'CM 360 - Sign Up ', '-1', '5181', '22');
                tC.scriptElt1 = document.createElement("script");
                tC.scriptElt1.id = "tc_script_933_1";
                tC.scriptElt1.src = "https://www.googletagmanager.com/gtag/js?id=DC-14459104";
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
                if (tc_array_events["event"] === "RegistrationFull") {
                    window.dataLayer = window.dataLayer || [];
                    var gtag = function() {
                        dataLayer.push(arguments);
                    };
                    gtag('js', new Date());
                    gtag('config', 'DC-14459104');
                }
                if (tc_array_events["event"] === "RegistrationFull") {
                    gtag('event', 'conversion', {
                        'allow_custom_scripts': true,
                        'u2': 'sign_up',
                        'send_to': 'DC-14459104/car/signup+standard'
                    })
                }
            }
        }
    }
}
tC.onDomReady(function() {
    tC.container_5181_22.eventlisteners();
    tC.eventTarget.dispatchEvent('container-ready');
    tC.executeListener50_5181_22();
});
