/*
 * tagContainer Generator v90.3
 * Copyright Commanders Act
 * https://www.commandersact.com/fr/
 * Generated: 2024-04-08 16:02:37 Europe/Paris
 * ---
 * Version	: 11.43
 * IDTC 	: 19
 * IDS		: 5181
 */
/*!compressed by terser*/
"undefined" == typeof tC && (void 0 !== document.domain && void 0 !== document.referrer || (document = window.document),
function(t, e) {
    var n, i = t.document, r = (t.location,
    t.navigator,
    t.tC,
    t.$,
    Array.prototype.push,
    Array.prototype.slice,
    Array.prototype.indexOf,
    Object.prototype.toString), a = (Object.prototype.hasOwnProperty,
    String.prototype.trim,
    function(t, e) {
        return new a.fn.init(t,e,n)
    }
    ), o = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, c = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, s = {};
    a.fn = a.prototype = {
        constructor: a,
        init: function(t, e, n) {
            var r, s, d;
            if (!t)
                return this;
            if (t.nodeType)
                return this.context = this[0] = t,
                this.length = 1,
                this;
            if ("string" == typeof t) {
                if (!(r = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : o.exec(t)) || !r[1] && e)
                    return !e || e.tC ? (e || n).find(t) : this.constructor(e).find(t);
                if (r[1])
                    return d = (e = e instanceof a ? e[0] : e) && e.nodeType ? e.ownerDocument || e : i,
                    t = a.parseHTML(r[1], d, !0),
                    c.test(r[1]) && a.isPlainObject(e) && this.attr.call(t, e, !0),
                    a.merge(this, t);
                if ((s = i.getElementById(r[2])) && s.parentNode) {
                    if (s.id !== r[2])
                        return n.find(t);
                    this.length = 1,
                    this[0] = s
                }
                return this.context = i,
                this.selector = t,
                this
            }
            return a.isFunction(t) ? n.ready(t) : (undefined !== t.selector && (this.selector = t.selector,
            this.context = t.context),
            a.makeArray(t, this))
        },
        each: function(t, e) {
            return a.each(this, t, e)
        },
        ready: function(t) {
            return a.ready.promise(t),
            this
        }
    },
    a.fn.init.prototype = a.fn,
    a.extend = a.fn.extend = function() {
        var t, e, n, i, r, o, c = arguments[0] || {}, s = 1, d = arguments.length, p = !1;
        for ("boolean" == typeof c && (p = c,
        c = arguments[1] || {},
        s = 2),
        "object" == typeof c || a.isFunction(c) || (c = {}),
        d === s && (c = this,
        --s); s < d; s++)
            if (null != (t = arguments[s]))
                for (e in t)
                    n = c[e],
                    c !== (i = t[e]) && (p && i && (a.isPlainObject(i) || (r = a.isArray(i))) ? (r ? (r = !1,
                    o = n && a.isArray(n) ? n : []) : o = n && a.isPlainObject(n) ? n : {},
                    c[e] = a.extend(p, o, i)) : undefined !== i && (c[e] = i));
        return c
    }
    ,
    a.extend({
        ssl: "https://manager.",
        randOrd: function() {
            return Math.round(Math.random()) - .5
        },
        nodeNames: "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        rnocache: /<(?:script|object|embed|option|style)/i,
        rnoshimcache: new RegExp("<(?:" + a.nodeNames + ")[\\s/>]","i"),
        rchecked: /checked\s*(?:[^=]|=\s*.checked.)/i,
        containersLaunched: {}
    }),
    a.extend({
        inArray: function(t, e, n) {
            var i, r = Array.prototype.indexOf;
            if (e) {
                if (r)
                    return r.call(e, t, n);
                for (i = e.length,
                n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                    if (n in e && e[n] === t)
                        return n
            }
            return -1
        },
        isFunction: function(t) {
            return "function" === a.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === a.type(t)
        }
        ,
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        },
        type: function(t) {
            return null == t ? String(t) : s[r.call(t)] || "object"
        },
        each: function(t, e, n) {
            var i, r = 0, o = t.length, c = undefined === o || a.isFunction(t);
            if (n)
                if (c) {
                    for (i in t)
                        if (!1 === e.apply(t[i], n))
                            break
                } else
                    for (; r < o && !1 !== e.apply(t[r++], n); )
                        ;
            else if (c) {
                for (i in t)
                    if (!1 === e.call(t[i], i, t[i]))
                        break
            } else
                for (; r < o && !1 !== e.call(t[r], r, t[r++]); )
                    ;
            return t
        },
        log: function(t, e) {
            try {
                a.getCookie("tCdebugLib") && console && console[e || "log"](t)
            } catch (t) {}
        }
    }),
    a.each("Boolean Number String Function Array Date RegExp Object".split(" "), (function(t, e) {
        s["[object " + e + "]"] = e.toLowerCase()
    }
    )),
    n = a(i);
    a.buildFragment = function(t, e, n) {
        var r, o, c, s = t[0];
        return e = (e = !(e = e || i).nodeType && e[0] || e).ownerDocument || e,
        !(1 === t.length && "string" == typeof s && s.length < 512 && e === i && "<" === s.charAt(0)) || a.rnocache.test(s) || !a.support.checkClone && a.rchecked.test(s) || !a.support.html5Clone && a.rnoshimcache.test(s) || (o = !0,
        c = undefined !== (r = jQuery.fragments[s])),
        r || (r = e.createDocumentFragment(),
        a.clean(t, e, r, n),
        o && (a.fragments[s] = c && r)),
        {
            fragment: r,
            cacheable: o
        }
    }
    ,
    t.tC = a
}(window)),
function() {
    if (!tC.maindomain) {
        var t = location.hostname
          , e = t.split(".");
        e.length < 2 || t.match("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$") ? tC.maindomain = t : tC.maindomain = e[e.length - 2] + "." + e[e.length - 1]
    }
    var n = {
        id_container: String(19),
        id_site: String(5181),
        frequency: String(610),
        containerVersion: String(11.43),
        generatorVersion: String("90.3"),
        containerStart: Date.now(),
        sourceKey: String("ec14f99d-42b3-49de-a2cb-4c2df4c6f8bc")
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
    var i, r, a = {};
    a["internalvars_" + n.id_site] = void 0 !== tC["internalvars_" + n.id_site] ? tC["internalvars_" + n.id_site] : {},
    tC.extend(a),
    window["tC_" + n.id_site + "_" + n.id_container] = n,
    tC.extend({
        launchTag: function(t, e, n, i, r, a) {
            void 0 === a && (a = 0),
            tC.array_launched_tags.push(e),
            tC.array_launched_tags_keys.push(t),
            tC.containersLaunched[i][r].t.push({
                id: t,
                label: e,
                idTpl: n
            }),
            window.top.postMessage('TC.EX:{"id":"' + t + '","idc":"' + r + '","idt":"' + n + '","ids":"' + i + '","lb":"' + e.replace(/"/g, '\\"') + '","idtr":"' + a + '"}', "*")
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
                    var r = t.cact[n]._tc_version;
                    if (e = Array.prototype.slice.call(e, null == r ? 0 : 1),
                    null == r) {
                        var a = i(e);
                        t.cact[n](a, a.callback)
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
              , r = t.callback;
            if ("string" == typeof e && "" !== e)
                return tC.trigger({
                    event: e,
                    properties: n,
                    config: i
                }),
                r(),
                tC.uniqueEventIndex
        }
        ,
        tC.cact.trigger._tc_version = 2
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
    tC.setCookie = tC.setCookie || function(t, e, n, i, r, a, o) {
        r || (r = tC.domain()),
        tC.config = tC.config || {},
        tC.cookieForceSameSite = tC.cookieForceSameSite || "",
        o = o || tC.config.cookieForceSameSite || tC.cookieForceSameSite,
        tC.isSameSiteContext() || (o = "None"),
        o || (o = tC.isSubdomain(r) ? "Lax" : "None"),
        tC.cookieForceSecure = null != tC.cookieForceSecure ? tC.cookieForceSecure : "",
        null == a && (a = tC.config.cookieForceSecure),
        null == a && (a = tC.cookieForceSecure),
        a = Boolean(Number(a)),
        "none" === o.toLowerCase() && (a = !0);
        var c = new Date;
        c.setTime(c.getTime()),
        n && (n = 1e3 * n * 60 * 60 * 24);
        var s = new Date(c.getTime() + n)
          , d = t + "=" + tC.cookieEncode(e) + (n ? ";expires=" + s.toGMTString() : "") + (i ? ";path=" + i : ";path=/") + (r ? ";domain=" + r : "") + (a ? ";secure" : "") + ";SameSite=" + o;
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
        var e, n = (t = t || {}).domain ? ";domain=" + t.domain : "", i = t.samesite ? ";samesite=" + t.samesite : "", r = Math.random().toString(36).substr(2, 9), a = "tc_test_cookie=" + r + ";expires=0;path=/;" + i + n;
        document.cookie = a;
        var o = new RegExp("(?:^|; )tc_test_cookie=([^;]*)").exec(document.cookie);
        return o && (o = o[1]),
        (e = o === r) && (a = "tc_test_cookie=;expires=" + new Date(0).toUTCString() + ";path=/;" + i + n,
        document.cookie = a),
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
        for (var n, i = !1, r = 2; !i && r <= e; ++r)
            n = "." + t.slice(e - r, e).join("."),
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
    tC.getClientDnsList = tC.getClientDnsList || function() {
        return [] || []
    }
    ,
    tC.getClientCollectDns = function() {
        if (tC.clientCollectDns)
            return tC.clientCollectDns;
        var t = tC.getDomainLevels().map((function(t) {
            return new RegExp("^[\\w,\\d,\\-]*" + t.replace(".", "\\.") + "$")
        }
        ));
        return tC.getClientDnsList().find((function(e) {
            return t.find((function(t) {
                return t.test(e)
            }
            ))
        }
        ))
    }
    ,
    tC.clientCollectDns = tC.clientCollectDns || tC.getClientCollectDns(),
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
    function() {
        "use strict";
        var t = window.tC;
        t.eventTarget = t.eventTarget || {
            _eventTarget: document.createElement("null"),
            addEventListener: function(t, e, n) {
                this._eventTarget.addEventListener(t, e, n)
            },
            removeEventListener: function(t, e) {
                this._eventTarget.removeEventListener(t, e)
            },
            dispatchEvent: function(e, n) {
                var i;
                n = n || {},
                "string" != typeof e ? i = e : (i = document.createEvent("Event")).initEvent(e, !0, !0),
                this._eventTarget.dispatchEvent(i);
                var r = n.tagTrigger;
                null != r && null != t.event && "function" == typeof t.event[r] && t.event[r]()
            }
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
            var r = i.event
              , a = i.properties || {}
              , o = i.config || {}
              , c = a.url || function(i) {
                try {
                    var r = new URL(i);
                    return r.pathname = n(r.pathname),
                    r.searchParams.forEach((function(i, a) {
                        return t.test(i) ? r.searchParams.set(a, n(i)) : e.test(a) ? r.searchParams.set(a, "*****") : void 0
                    }
                    )),
                    r.toString()
                } catch (t) {
                    return i
                }
            }(window.location.href);
            tC.uniqueEventIndex++,
            tC.uniqueEventId = tC.generateEventId();
            var s, d = o.siteId || o.idSite || tC.config.siteId || tC.id_site, p = o.collectionDomain || window.tC_collect_dns || tC.config.collectionDomain || "collect.commander1.com", u = "https://" + p + ("collect.commander1.com" === p ? "" : "/cdp") + "/events?tc_s=" + d, C = o.sourceKey || tC.config.sourceKey || "ec14f99d-42b3-49de-a2cb-4c2df4c6f8bc";
            if (C && (u = u + "&token=" + C),
            a.user = a.user || {},
            !a.user.consent_categories) {
                var l = [];
                "privacy"in tC && (l = "getValidCategories"in tC.privacy ? tC.privacy.getValidCategories() : tC.privacy.getOptinCategories());
                var v = tC.getCookie(tC.privacy && tC.privacy.getCN() || "TC_PRIVACY");
                /ALL/.test(v) && (l = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]),
                a.user.consent_categories = l
            }
            if (!a.user.rejected_vendors) {
                var g = [];
                tC.privacy && (tC.privacy.checkOptoutAllVendors && tC.privacy.checkOptoutAllVendors() ? g = "ALL" : tC.privacy.checkOptinAllVendors && !tC.privacy.checkOptinAllVendors() && (g = tC.privacy.getOptoutVendors())),
                a.user.rejected_vendors = g
            }
            switch (a.revenue && (a.amount = a.revenue),
            a.integrations = a.integrations || {},
            a.integrations.facebook = a.integrations.facebook || {},
            a.integrations.facebook.fbc = tC.getCookie("_fbc") || void 0,
            a.integrations.facebook.fbp = tC.getCookie("_fbp") || void 0,
            a.integrations.facebook.event_id = a.integrations.facebook.event_id || tC.uniqueEventId,
            r) {
            case "page_view":
                a.title = document.title,
                a.path = location.pathname,
                a.url = c,
                "" !== document.referrer && (a.referrer = document.referrer),
                a.type = a.type || "other";
                break;
            case "purchase":
                a.status = a.status || "in_progress",
                a.type = a.type || "online"
            }
            try {
                s = window.Intl && window.Intl.DateTimeFormat().resolvedOptions().timeZone
            } catch (t) {}
            var y, f = document.documentElement || {}, m = window.navigator || {}, _ = {
                title: document.title,
                url: c,
                lang: f.lang,
                referrer: document.referrer || tC.storage && tC.storage.get("TC_REFERRER"),
                viewport: {
                    width: f.clientWidth,
                    height: f.clientHeight
                }
            }, E = {
                cookie: (y = ["_fbp", "_fbc", /^_+(ga|gcl|opt_|utm)/, /^(pm_sess|VISITOR_INFO1|FPGCL|GA_)/, "__gsas", "NID", "DSID", "test_cookie", "id", "GED_PLAYLIST_ACTIVITY", "ACLK_DATA", "aboutads_sessNNN", "FPAU", "ANID", "AID", "IDE", "TAID", "FLC", "RUL", "FCCDCF", "FCNEC", "CUID", "1P_JAR", "Conversion", "YSC", "FPLC", "_gid", "AMP_TOKEN", "FPID", "_dc_gtm_", "PAIDCONTENT", "atuserid", "xtidc", "crto_mapped_user_id", "awc", "tduid", "kwks2s", "_ttp", /^_pk_id\./, "_pcid", "pa_vid", "rmStore", "_uetmsclkid"],
                (document.cookie || "").split("; ").filter((function(t) {
                    var e = t.split("=")[0];
                    return y.find((function(t) {
                        return t.test ? t.test(e) : e === t
                    }
                    ))
                }
                )).join("; ") || ""),
                lang: m.language || m.userLanguage,
                screen: {
                    width: window.screen.width,
                    height: window.screen.height
                },
                timezone: s
            };
            tC.internalvars.caEventData = a;
            var h = {
                event_name: r,
                context: {
                    page: _,
                    device: E,
                    eventId: o.eventId ? String(o.eventId) : tC.uniqueEventId,
                    version: 2,
                    created: (new Date).toJSON(),
                    generatorVersion: tC.generatorVersion,
                    containerVersion: tC.containerVersion
                }
            };
            if (Object.assign(h, a),
            100 < tC.triggeredEvents.length)
                for (; tC.triggeredEvents.length > 100; )
                    tC.triggeredEvents.shift();
            tC.triggeredEvents.push(h),
            tC.lastTriggeredEvent = tC.triggeredEvents[tC.triggeredEvents.length - 1];
            var b = JSON.stringify(h);
            if ("function" == typeof navigator.sendBeacon && !navigator.sendBeacon(u, b)) {
                var w = !1;
                if (!(w = new XMLHttpRequest))
                    return !1;
                w.open("POST", u, !0),
                w.withCredentials = !0,
                w.send(b)
            }
            return tC.uniqueEventIndex
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
                  , r = 1e3 * n * 60 * 60 * 24
                  , a = JSON.stringify({
                    value: e,
                    expires: i + r
                });
                try {
                    window.localStorage.setItem(t, a)
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
    (i = {}).hitCounter_5181_19 = function() {
        var t = window.tC_5181_19;
        0 === Math.floor(Math.random() * parseInt(t.frequency)) && tC.pixelTrack.add("https://manager.tagcommander.com/utils/hit.php?id=" + t.id_container + "&site=" + t.id_site + "&version=" + t.containerVersion + "&frequency=" + t.frequency + "&position=" + tC.container_position + "&rand=" + Math.random())
    }
    ,
    tC.extend(i),
    tC.container_position = "undefined" != typeof tc_container_position ? tc_container_position : void 0 !== tC.container_position ? tC.container_position : 0,
    tC.container_position++,
    "undefined" != typeof tc_container_position && tc_container_position++,
    tC.hitCounter_5181_19(),
    tC.script = {
        add: function(t, e, n) {
            var i = document.getElementsByTagName("body")[0] || document.getElementsByTagName("script")[0].parentNode
              , r = document.createElement("script");
            r.type = "text/javascript",
            r.async = !0,
            r.src = t,
            r.charset = "utf-8",
            r.id = "tc_script_" + Math.random(),
            i ? (e && (r.addEventListener ? r.addEventListener("load", (function() {
                e()
            }
            ), !1) : r.onreadystatechange = function() {
                r.readyState in {
                    loaded: 1,
                    complete: 1
                } && (r.onreadystatechange = null,
                e())
            }
            ),
            n && "number" == typeof n && setTimeout((function() {
                i && r.parentNode && i.removeChild(r)
            }
            ), n),
            i.insertBefore(r, i.firstChild)) : tC.log("tC.script error : the element <script> or <body> is not found ! the file " + t + " is not implemented !", "warn")
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
                  , r = new n(8 * i.length);
                for (var a in i)
                    i.hasOwnProperty(a) && (r.buffer[a] = i.charCodeAt(a));
                return r
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
                  , r = e(n);
                return Boolean(this.buffer[i] & r)
            }
            ,
            n.prototype.set = function(n) {
                var i = t(n, this.length)
                  , r = e(n);
                return this.buffer[i] |= r,
                this
            }
            ,
            n.prototype.unset = function(n) {
                var i = t(n, this.length)
                  , r = e(n);
                return this.buffer[i] &= ~r,
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
                    var r = "";
                    if (/-/.test(i)) {
                        var a = i.split("-");
                        for (var e in a)
                            if (0 == e)
                                r = a[e];
                            else {
                                var o = a[e].split("");
                                r += o.shift().toUpperCase() + o.join("")
                            }
                    } else
                        r = i;
                    n.style[r] = t[i]
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
            var r = (tC.privacy.cookieData[4] || "").split(",");
            tC.privacy.consentDates = {
                updatedAt: Number(r[0]) || null,
                createdAt: Number(r[1]) || null,
                expiresAt: Number(r[2]) || null
            },
            tC.privacy.initialized || (tC.privacy.initialized = !0,
            tC.privacy.gcmEnabled && tC.privacy.gcmInit())
        }
    },
    tC.privacy.saveConsent = function(t) {
        var e = t.optin;
        if (null == tC.isCookieEnabledBool && (tC.isCookieEnabledBool = tC.isCookieEnabled()),
        !1 !== tC.isCookieEnabledBool) {
            var n = t.categoryList || "";
            0 === n.length && tC.privacy.privacySelectableUnblockedCategoriesId && tC.privacy.privacySelectableUnblockedCategoriesId.length > 0 && (e = !1);
            var i = null != t.hitOptin ? t.hitOptin : t.optin
              , r = t.vendorList || ""
              , a = t.privacyVersion || tC.privacy.getVersion()
              , o = t.privacyId || tC.privacy.getId()
              , c = t.action || "banner_button"
              , s = {};
            null != t.acmVendorList && (s.acmVendorList = t.acmVendorList),
            tC.privacy.cok(Number(!e), a, n, r, s),
            !1 !== t.sendHit && tC.privacy.hit(Number(i), a, o, c),
            window.tCPrivacyTagManager && tC.privacy.sendDataOtherTMS(),
            tC.privacy.gcmEnabled && tC.privacy.gcmUpdate(),
            tC.eventTarget.dispatchEvent("consent-update")
        }
    }
    ,
    tC.privacy.In = tC.privacy.In || function(t, e, n, i, r, a, o) {
        o = o || {},
        tC.privacy.saveConsent({
            optin: !0,
            privacyId: t,
            privacyVersion: e,
            action: r,
            categoryList: i,
            vendorList: a,
            acmVendorList: o.acmVendorList,
            sendHit: o.sendHit
        })
    }
    ,
    tC.privacy.Out = tC.privacy.Out || function(t, e, n, i, r, a, o) {
        o = o || {},
        "ALL" === i && (i = ""),
        tC.privacy.saveConsent({
            optin: !1,
            privacyId: t,
            privacyVersion: e,
            action: r,
            categoryList: i,
            vendorList: a,
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
        var n, i = tC.privacy.getCategoryIdList().join(","), r = tC.privacy.getVendorIdList();
        if (null != tC.privacy.isIabGoogleAcmEnabled && tC.privacy.isIabGoogleAcmEnabled()) {
            var a = tC.privacy.prepareAcmVendorConsent(r);
            r = a.nonAcmVendors,
            n = tC.privacy.encodeVendorList(a.acmVendors)
        }
        r = tC.privacy.encodeVendorList(r),
        tC.privacy.saveConsent({
            optin: !0,
            action: t,
            categoryList: i,
            vendorList: r,
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
            var r = tC.privacy.iabVendorsToPublicVendors({
                vendors: (t.iabVendors || []).map(String),
                legIntVendors: (t.iabVendors || []).map(String)
            });
            n = n.concat(r)
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
          , r = n.vendors;
        if (0 !== i.length || 0 !== r.length) {
            var a;
            if (i = i.concat(e.reset ? [] : tC.privacy.getOptinCategories()).filter(tC.arrayUniqueFilter),
            r = r.concat(e.reset ? [] : tC.privacy.getOptinVendors()).filter(tC.arrayUniqueFilter),
            null != tC.privacy.isIabGoogleAcmEnabled && tC.privacy.isIabGoogleAcmEnabled()) {
                var o = tC.privacy.prepareAcmVendorConsent(r);
                r = o.nonAcmVendors,
                a = tC.privacy.encodeVendorList(o.acmVendors)
            }
            r = tC.privacy.encodeVendorList(r),
            tC.privacy.saveConsent({
                optin: !0,
                action: t,
                categoryList: i,
                vendorList: r,
                acmVendorList: a,
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
          , r = n.vendors;
        if (0 !== i.length || 0 !== r.length) {
            var a = tC.privacy.getOptinCategories()
              , o = tC.privacy.getOptinVendors();
            if (i = a.filter((function(t) {
                return -1 === i.indexOf(t)
            }
            )),
            r = o.filter((function(t) {
                return -1 === r.indexOf(t)
            }
            )),
            0 !== i.length || 0 !== r.length) {
                var c;
                if (null != tC.privacy.isIabGoogleAcmEnabled && tC.privacy.isIabGoogleAcmEnabled()) {
                    var s = tC.privacy.prepareAcmVendorConsent(r);
                    r = s.nonAcmVendors,
                    c = tC.privacy.encodeVendorList(s.acmVendors)
                }
                r = tC.privacy.encodeVendorList(r),
                tC.privacy.saveConsent({
                    optin: !0,
                    action: t,
                    categoryList: i,
                    vendorList: r,
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
        var n, i = e.categories || {}, r = e.vendors || {};
        if (t.purpose) {
            if (t.purpose.consents)
                for (var a in t.purpose.consents)
                    i[n = "tcf2_" + a] = i[n] || {},
                    i[n].status = !0 === t.purpose.consents[a] ? e.on : e.off;
            if (t.purpose.legitimateInterests)
                for (var o in t.purpose.legitimateInterests)
                    i[n = "tcf2_" + o] = i[n] || {},
                    i[n].legIntStatus = !0 === t.purpose.legitimateInterests[o] ? e.on : e.off
        }
        if (t.vendor) {
            if (t.vendor.consents)
                for (var c in t.vendor.consents)
                    r[n = "tcf2_" + c] = r[n] || {},
                    r[n].status = !0 === t.vendor.consents[c] ? e.on : e.off;
            if (t.vendor.legitimateInterests)
                for (var s in t.vendor.legitimateInterests)
                    r[n = "tcf2_" + s] = r[n] || {},
                    r[n].legIntStatus = !0 === t.vendor.legitimateInterests[s] ? e.on : e.off
        }
        if (t.specialFeatureOptins)
            for (var d in t.specialFeatureOptins)
                i[n = "tcf2_sf_" + d] = i[n] || {},
                i[n].status = !0 === t.specialFeatureOptins[d] ? e.on : e.off;
        return {
            categories: i,
            vendors: r
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
        var r = !0
          , a = !1;
        e && (r = "on",
        a = "off");
        var o = tC.privacy.getOptinCategories().reduce((function(t, e) {
            return t[e] = r,
            t
        }
        ), {})
          , c = tC.privacy.getCategoryIdList();
        c = c.reduce((function(t, e) {
            var a = e
              , c = "status";
            e > 1e4 && e < 13e3 ? (a = "tcf2_" + Math.ceil((e - 1e4) / 2),
            e % 2 == 0 && (c = "legIntStatus")) : e > 13e3 && (a = "tcf2_sf_" + (e - 13e3));
            return t[a] = t[a] || {},
            t[a][c] = o[e] || n,
            null == i && t[a][c] !== r && (i = "mixed"),
            t
        }
        ), {}),
        tC.privacy.getBlockedOnCategories().forEach((function(t) {
            c[t] = {
                status: r,
                required: !0
            }
        }
        ));
        var s = tC.privacy.getVendorIdList()
          , d = tC.privacy.getOptinVendors().reduce((function(t, e) {
            return t[e] = r,
            t
        }
        ), {});
        if (s = s.reduce((function(t, e) {
            var a = e
              , o = "status";
            e > 1e3 && (a = "tcf2_" + Math.ceil((e - 1e3) / 2),
            e % 2 == 0 && (o = "legIntStatus"));
            return t[a] = t[a] || {},
            t[a][o] = d[e] || n,
            null == i && t[a][o] !== r && (i = "mixed"),
            t
        }
        ), {}),
        tC.storage.getWithExpiry(tC.privacy.getCN() + "_TCF")) {
            var p = tC.storage.getWithExpiry(tC.privacy.getCN() + "_TCF")
              , u = tC.privacy.setTcfConsent(p, {
                categories: c,
                vendors: s,
                on: r,
                off: a
            });
            c = u.categories,
            s = u.vendors
        }
        i = i || "all-on";
        var C = {
            version: "1.0",
            siteId: tC.id_site,
            consentId: tC.privacy.getConsentId(),
            bannerId: String(tC.privacy.getId()),
            bannerVersion: tC.privacy.getVersion()
        };
        return tC.privacy.iabVendorList && (C.tcfPolicyVersion = String(tC.privacy.iabVendorList.tcfPolicyVersion)),
        tC.privacy.consentDates && (C.dateCreated = tC.privacy.consentDates.createdAt,
        C.dateUpdated = tC.privacy.consentDates.updatedAt,
        C.dateExpires = tC.privacy.consentDates.expiresAt),
        {
            meta: C,
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
                  , r = {
                    categories: [],
                    vendors: [],
                    sendHit: !1
                }
                  , a = null != window.__tcfapi;
                if (Object.keys(t.categories).forEach((function(o) {
                    var c = o
                      , s = t.categories[o];
                    if (a) {
                        var d = String(o).match(/tcf2_(\d*)/)
                          , p = d ? String(o).match(/tcf2_sf_(\d*)/) : null;
                        p ? c = 13e3 + Number(p[1]) : d && (c = 2 * Number(d[1]) - 1 + 1e4,
                        s.legIntStatus === e ? i.categories.push(c + 1) : s.legIntStatus === n && r.categories.push(c + 1))
                    }
                    s.status === e ? i.categories.push(c) : s.status === n && r.categories.push(c)
                }
                )),
                Object.keys(t.vendors).forEach((function(o) {
                    var c = o
                      , s = t.vendors[o];
                    if (a) {
                        var d = String(o).match(/tcf2_(\d*)/);
                        d && (c = 2 * Number(d[1]) - 1 + 1e3,
                        s.legIntStatus === e ? i.vendors.push(c + 1) : s.legIntStatus === n && r.vendors.push(c + 1))
                    }
                    s.status === e ? i.vendors.push(c) : s.status === n && r.vendors.push(c)
                }
                )),
                tC.privacy.optin(t.action, i),
                tC.privacy.optout(t.action, r),
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
        tC.eventTarget.dispatchEvent("consent-revoke")
    }
    ,
    tC.privacy.cok = tC.privacy.cok || function(t, e, n, i, r) {
        r = r || {},
        n = n || "",
        i = i || "";
        var a = tC.privacy.consentDuration || 13;
        a = 30 * parseInt(a);
        var o = void 0 !== window.tc_privacy_force_domain ? window.tc_privacy_force_domain : null;
        tC.privacy.iabVendorList && (e = e + "|" + tC.privacy.iabVendorList.gvlSpecificationVersion + "|" + tC.privacy.iabVendorList.tcfPolicyVersion + "|" + tC.privacy.iabVendorList.vendorListVersion),
        tC.privacy.getId && (e = e + "|" + tC.privacy.getId() + "|" + tC.id_site);
        var c = (new Date).getTime()
          , s = c;
        if (tC.privacy.consentDates) {
            var d = c + 1e3 * a * 60 * 60 * 24;
            tC.privacy.consentDates.updatedAt = c,
            tC.privacy.consentDates.createdAt = tC.privacy.consentDates.createdAt || c,
            tC.privacy.consentDates.expiresAt = d,
            s = [tC.privacy.consentDates.updatedAt, tC.privacy.consentDates.createdAt, tC.privacy.consentDates.expiresAt].join(",")
        }
        var p = t + tC.privacy.getCS() + e + tC.privacy.getCS() + n + tC.privacy.getCS() + (tC.privacy.blockedOnCategories || "") + tC.privacy.getCS() + s + tC.privacy.getCS() + i;
        if (tC.setCookie(tC.privacy.getCN(), p, a, "/", o),
        tC.setCookie(tC.privacy.getPCCN(), n, a, "/", o),
        null != r.acmVendorList && tC.storage.setWithExpiry(tC.privacy.getCN() + "_ACM", r.acmVendorList, a),
        null != window.__tcfapi) {
            var u = tC.privacy.getCN() + "_TCF";
            tC.storage.remove(u),
            window.__tcfapi("getTCData", 2, (function(t, e) {
                e && (t.vendorListVersion = tC.privacy.iabVendorList.vendorListVersion,
                tC.storage.setWithExpiry(u, t, a))
            }
            ))
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
        var e = tC.privacy.getHitDomain(t.tc_optout)
          , n = -1 === e.indexOf("://") ? "https://" : ""
          , i = -1 === e.indexOf(".commander1.com") && -1 === e.indexOf("privacy.trustcommander.net")
          , r = n + e + (i ? "/trust" : "") + "/privacy-consent/";
        navigator.sendBeacon && navigator.sendBeacon(r, JSON.stringify(t)) || (t = Object.keys(t).map((function(e) {
            return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
        }
        )).join("&"),
        tC.pixelTrack.add(r + "?" + t + "&rand=" + Math.random()))
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
        var r;
        r = 0 === t ? 1 : 1 === t ? 0 : parseInt(tC.privacy.cookieData[0] || 1);
        var a = tC.privacy.getPrivacyHitsCategory()
          , o = !0;
        if (a) {
            var c = tC.privacy.categories || []
              , s = c.length
              , d = tC.privacy.tagsCategoriesAssignation[a];
            tC.privacy.init(),
            o = tC.privacy.validRules(a) || -1 !== (tC.privacy.blockedOnCategories || []).indexOf(d) || 1 === t && c.indexOf(String(d)) > -1 && -1 === tC.privacy.categories.indexOf(String(d)) || 0 === t && s > 0 && 0 === tC.privacy.categories.length
        }
        if (o) {
            var p = tC.privacy.privacySelectableUnblockedCategoriesId || tC.privacy.getFlattenCategoryIdList()
              , u = p.slice()
              , C = tC.privacy.getOptinCategories()
              , l = 0;
            C.length >= p.length && (p.forEach((function(t) {
                C.indexOf(String(t)) > -1 && u.splice(u.indexOf(t), 1)
            }
            )),
            l = 0 === u.length ? 1 : 0);
            var v = {
                id_tc: String(tC.privacy.containerId || 19),
                site: String(5181),
                version: e,
                id_privacy: n,
                type_action: i,
                privacy_action: t.toString(),
                optin_categories: tC.privacy.getValidCategories(),
                optout_categories: tC.privacy.getOptoutCategories(),
                optin_to_all: l,
                tcpid: tC.privacy.getConsentId(),
                tc_optout: r
            }
              , g = Number(window.tc_privacy_do_not_track || tC.getCookie("TC_PRIVACY_DO_NOT_TRACK"));
            if (g) {
                if (!(-1 !== ["1", "0"].indexOf(v.privacy_action)))
                    return;
                v.do_not_track = Boolean(g)
            }
            1 === t && (v.optin_vendors = tC.privacy.getOptinVendors(),
            v.optin_to_all_vendors = Number(tC.privacy.checkOptinAllVendors())),
            tC.privacy.sendBeacon(v)
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
                var r = {
                    id_tc: String(tC.privacy.containerId || 19),
                    site: String(5181),
                    version: tC.privacy.getVersion(),
                    id_privacy: t,
                    type_action: e,
                    privacy_action: "V",
                    tcpid: tC.privacy.getConsentId(),
                    tc_optout: n
                };
                tC.privacy.sendBeacon(r)
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
          , r = n.length > 2 ? parseInt(n[n.length - 2]) : 0
          , a = (tC.privacy.cookieData[2] || "").split(",")
          , o = tC.privacy.cookieData[3] ? tC.privacy.cookieData[3].split(",") : []
          , c = tC.privacy.optinVendors
          , s = tC.privacy.tagsCategoriesAssignation && tC.privacy.tagsCategoriesAssignation[t] ? tC.privacy.tagsCategoriesAssignation[t] : 0
          , d = tC.privacy.tagsVendorsAssignation && tC.privacy.tagsVendorsAssignation[t] ? tC.privacy.tagsVendorsAssignation[t] : 0
          , p = -1 !== tC.inArray(s.toString(), o)
          , u = -1 !== tC.inArray(s.toString(), a) || -1 !== tC.inArray("ALL", a)
          , C = -1 !== tC.inArray(d.toString(), c)
          , l = -1 !== tC.inArray(parseInt(t), tC.privacy.minorTags)
          , v = tC.privacy.includedVendors && tC.privacy.includedVendors[d] ? parseInt(tC.privacy.includedVendors[d].privacyVersion[r]) : 0;
        return (p || e && u) && (!d || C || l && v > i)
    }
    ,
    tC.privacy.sendDataOtherTMS = tC.privacy.sendDataOtherTMS || function() {
        var t = tC.privacy.getListCategoryConsent();
        if (window.tCPrivacyTagManager)
            switch (window.tCPrivacyTagManager) {
            case "gtm":
                window.dataLayer && "function" == typeof window.dataLayer.push && window.dataLayer.push({
                    tcVendorsConsent: "",
                    tcCategoriesConsent: t,
                    event: "tcConsentChanged"
                });
                break;
            case "adobe":
                window.digitalData && window.digitalData.user && (window.digitalData.user.tcVendorsConsent = "",
                window.digitalData.user.tcCategoriesConsent = t)
            }
        window.tcVendorsConsent = "",
        window.tcCategoriesConsent = t
    }
    ,
    tC.privacy.getListCategoryConsent = tC.privacy.getListCategoryConsent || function() {
        if ("" === tC.getCookie(tC.privacy.getCN()))
            return "no_consent";
        var t = tC.privacy.getOptinCategories();
        return Array.isArray(t) && (0 === t.length || 1 === t.length && "" === String(t[0])) && tC.privacy.privacySelectableUnblockedCategoriesId && tC.privacy.privacySelectableUnblockedCategoriesId.length > 0 ? "optout" : tC.privacy.getValidCategories().join()
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
        836: 7,
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
        931: 7,
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
        tagsId: [11, "E113", "E65", "E63", "E61", "E59", "E57", "E55", "E53", "E51", "E47", "E45", "E43", "E41", "E39", "E35", "E31", "E29", "E37", "E33", "E167", "E49", "E123", "E157", "E196", "E184", "E208", "E186", "E198", "E200", "E219", "E217", "E155", "E249", "E235", "E269", "E252", "E242", "E264", "E266", "E268", "E239", "E206", "E324", "E325", 15, 13, 93, 23, 168, 163, 151, 158, 159, 160, 161, 162, 165, 175, 166, 167, 169, 171, 173, 201, 205, 214, 244, 272, 282, 298, 300, 326, 348, 350, 356, 412, 436, 438, 442, 444, 448, 264, 266, 454, 456, 458, 262, 274, 462, 464, 466, 470, 254, 224, 228, 472, 474, 476, 332, 268, 250, 368, 370, 374, 378, 394, 400, 486, 488, 490, 492, 494, 498, 500, 502, 506, 416, 230, 296, 310, 312, 316, 510, 362, 222, 388, 414, 294, 218, 480, 468, 322, 512, 514, 402, 516, 376, 522, 524, 526, 528, 318, 496, 504, 508, 530, 210, 398, 531, 535, 537, 539, 541, 545, 258, 549, 302, 553, 563, 569, 208, 248, 418, 236, 308, 314, 484, 240, 570, 572, 576, 324, 366, 482, 342, 582, 588, 590, 320, 543, 364, 518, 598, 410, 404, 406, 408, 304, 226, 238, 420, 424, 278, 280, 286, 344, 346, 354, 352, 460, 358, 360, 380, 384, 430, 432, 220, 234, 452, 330, 336, 520, 338, 592, 306, 594, 372, 604, 606, 608, 623, 625, 446, 440, 643, 645, 386, 390, 392, 396, 647, 292, 649, 574, 637, 651, 290, 426, 639, 641, 578, 653, 633, 629, 627, 428, 596, 659, 661, 618, 663, 340, 669, 671, 673, 675, 677, 678, 684, 696, 688, 702, 700, 704, 690, 706, 612, 422, 719, 717, 725, 686, 739, 727, 737, 743, 745, 747, 749, 759, 755, 763, 753, 761, 751, 288, 757, 741, 765, 767, 769, 771, 614, 616, 784, 735, 733, 731, 729, 782, 794, 792, 232, 586, 692, 680, 533, 216, 382, 635, 328, 870, 478, 270, 284, 276, 876, 846, 847, 849, 850, 852, 853, 866, 867, 868, 869, 839, 842, 841, 840, 547, 631, 694, 698, 212, 246, 551, 450, 559, 561, 197, 567, 580, 584, 611, 620, 665, 667, 682, 710, 715, 334, 890, 887, 889, 886, 888, 891, 434, 721, 723, 897, 252, 260, 256, 242, 772, 892, 905, 776, 774, 778, 780, 906, 907, 908, 910, 796, 800, 802, 804, 798, 894, 893, 895, 791, 713, 708, 565, 610, 919, 917, 918, 928, 929, 927]
    }, {
        id: 7,
        label: "Analytical cookies",
        categoryParent: -1,
        description: "Analytical cookies, including those of third parties, allow us to understand how the platform is being used by users.  These cookies do not collect information regarding your identity, nor any personal information.  The data is processed in an aggregate and anonymous form.<br />\n",
        isUsedInTarget: "",
        subCategories: null,
        tagsId: [63, "E12", "E16", "E240", "E212", "E225", "E313", "E311", "E276", "E292", "E302", "E304", "E306", "E308", "E319", "E1", "E3", "E7", "E10", "E11", "E13", "E14", "E17", "E22", "E24", "E26", "E28", "E101", "E103", "E105", "E107", "E109", "E114", "E118", "E119", "E121", "E116", "E165", "E194", "E221", "E227", "E229", "E231", "E233", "E244", "E246", "E248", "E223", "E309", "E318", "E320", "E270", "E286", "E5", "E322", "E9", "E321", "E272", "E288", "E290", "E296", "E327", "E330", "E329", "E328", "E331", "E332", "E333", "E334", "E335", "E336", "E337", "E339", "E340", "E341", "E342", "E343", "E344", "E345", "E346", "E347", "E348", "E349", "E350", "E351", "E353", "E354", "E355", "E352", "E338", "E360", "E357", "E358", "E359", "E278", "E300", "E361", "E362", "E363", "E364", 67, 71, 75, 621, 135, 108, 81, 118, 120, 121, 83, 85, 111, 114, 117, 147, 148, 149, 150, 91, 69, 657, 92, 87, 113, 110, 112, 137, 94, 101, 95, 102, 103, 104, 105, 119, 134, 136, 138, 139, 140, 141, 142, 143, 600, 602, 787, 806, 808, 834, 828, 810, 837, 822, 824, 843, 844, 845, 848, 851, 854, 856, 857, 858, 859, 860, 862, 863, 861, 865, 871, 872, 873, 874, 875, 877, 878, 879, 883, 885, 882, 146, 79, 557, 555, 836, 855, 864, 880, 884, 896, 820, 826, 899, 901, 900, 903, 898, 902, 904, 909, 915, 916, 881, 911, 914, 912, 920, 913, 922, 812, 931, 930]
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
            var r = function() {
                var n = t.privacy.getConsent({
                    pretty: !0
                });
                n.updateEvent = "set",
                e.callback(n),
                t.eventTarget.removeEventListener("consent-update", r)
            };
            t.eventTarget.addEventListener("consent-update", r)
        }
        ,
        t.cact["consent.onReady"]._tc_version = 2,
        t.cact["consent.onUpdate"] = function() {
            var e = t.cactUtils.formatArgumentsV2(arguments)
              , n = t.privacy.getConsent({
                pretty: !0
            })
              , i = "unset" === n.consent.status ? "set" : "changed"
              , r = function(n) {
                var r = t.privacy.getConsent({
                    pretty: !0
                });
                "consent-revoke" === n.type ? (r.updateEvent = "revoked",
                i = "set") : (r.updateEvent = i,
                i = "changed"),
                e.callback(r)
            };
            t.eventTarget.addEventListener("consent-update", r),
            t.eventTarget.addEventListener("consent-revoke", r)
        }
        ,
        t.cact["consent.onUpdate"]._tc_version = 2)
    }(),
    null != tC.privacy && !1 === tC.privacy.initialized && tC.privacy.init(),
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
    (r = {}).container_5181_19 = {
        load: function(t, e) {
            tC.container_position++,
            tC.hitCounter_5181_19(),
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
            var t;
            t = 0,
            "" === tC.getCookie("PV_Counter") ? (t = 1,
            tC.setCookie("PV_Counter", 1, 0, "/")) : (t = parseInt(tC.getCookie("PV_Counter"), 10),
            t++,
            tC.setCookie("PV_Counter", t, 0, "/")),
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
        eventlisteners: function() {},
        internalvars: function() {
            var t = tC.internalvars_5181_19.listVar;
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
            var e = "fragrance_sensation|fragrance_discover|fragrance_preference|item_name|video_name|video_position|product_is_in_stock|product_defaultMfPartNumber|chapter|fromPage|discovery|score|pid|page|item_shape_case|name|item_movement|item_budget|category|product_eng_casematerial|brand|product_eng_jewelmaterial|variant|product_eng_leathermaterial|discount_price|product_eng_strapmaterial|quantity|price|category_variant|event|label|discountedPrice_tf|position|price_tf|list|promotion_id|promotion_name|promotion_creative|promotion_position|livechatId|advisorId|productEngravable|filter_and_look|productAdjustable|productEmbossable|product_promotion|storelocator|storelocator_city|storelocator_country|prmid|prmname|prmcreative|prmposition|conversationId|discount_price_ati|associateId|discountedPrice|ratingValue|legacy_macro_id|pguri|ratingFeedbackValue|legacy_micro_id|product_id|productAvailability|product_variant_id|price_ati|promo_id|productSkuMfPartNumber|prdid|promo_name|uri|prdname|promo_creative|prdline|promo_position|prdcollection|prdsubcollection|prdengraved|prdembossed|prdsellable|submitstatus|boutiqueName|prdvariant|productSize|boutique|prdref|purpose|prdcategory|type|prddisplay|appointmentId|prdsize|channel|prdavailability|prdadjusted|product_eng_line|prdpersonalized|step|product_eng_collection|csematerial|product_status|jwlmaterial|strmaterial|option|stepName|lthmaterial|product_sellable|currency|productCaseMaterial|car_category|productJewelryMaterial|car_event|productLeatherMaterial|productStrapMaterial|prdprice|productAdjusted|productEmbossed|productCollection|productEngraved|productLine|product_eng_title|product_mfPartNumber|mfPartNumber|item_size|dataSt|personalizationType|item_diamond|item_material_case|item_dial_colour|item_dial_function|item_strap|item_id|id".split("|");
            for (var n in e)
                t.hasOwnProperty(e[n]) || (t[e[n]] = "");
            return t
        }
    },
    tC.extend(r),
    void 0 === tC.containerList && (tC.containerList = []),
    tC.containerList.push("5181_19"),
    window.tc_array_events = tC.container_5181_19.init_tc_array_events([]),
    window["tC" + n.id_site + "_" + n.id_container] = tC,
    window.postMessage('TC.EX.CONTAINER:{"id":' + n.id_container + ',"ids":' + n.id_site + ',"v":"' + n.containerVersion + '","g":' + n.generatorVersion + ',"p":' + tC.container_position + ',"url":"' + (document.currentScript ? document.currentScript.src : "") + '"}', "*")
}();
tC.container_5181_19.datalayer();
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
tC.internalFunctions.SHA256 = {};
tC.internalFunctions.SHA256.chrsz = 8;
tC.internalFunctions.SHA256.hexcase = 0;
tC.internalFunctions.SHA256.safe_add = function(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
}
tC.internalFunctions.SHA256.S = function(X, n) {
    return (X >>> n) | (X << (32 - n));
}
tC.internalFunctions.SHA256.R = function(X, n) {
    return (X >>> n);
}
tC.internalFunctions.SHA256.Ch = function(x, y, z) {
    return ((x & y) ^ ((~x) & z));
}
tC.internalFunctions.SHA256.Maj = function(x, y, z) {
    return ((x & y) ^ (x & z) ^ (y & z));
}
tC.internalFunctions.SHA256.Sigma0256 = function(x) {
    return (tC.internalFunctions.SHA256.S(x, 2) ^ tC.internalFunctions.SHA256.S(x, 13) ^ tC.internalFunctions.SHA256.S(x, 22));
}
tC.internalFunctions.SHA256.Sigma1256 = function(x) {
    return (tC.internalFunctions.SHA256.S(x, 6) ^ tC.internalFunctions.SHA256.S(x, 11) ^ tC.internalFunctions.SHA256.S(x, 25));
}
tC.internalFunctions.SHA256.Gamma0256 = function(x) {
    return (tC.internalFunctions.SHA256.S(x, 7) ^ tC.internalFunctions.SHA256.S(x, 18) ^ tC.internalFunctions.SHA256.R(x, 3));
}
tC.internalFunctions.SHA256.Gamma1256 = function(x) {
    return (tC.internalFunctions.SHA256.S(x, 17) ^ tC.internalFunctions.SHA256.S(x, 19) ^ tC.internalFunctions.SHA256.R(x, 10));
}
tC.internalFunctions.SHA256.core_sha256 = function(m, l) {
    var K = new Array(0x428A2F98,0x71374491,0xB5C0FBCF,0xE9B5DBA5,0x3956C25B,0x59F111F1,0x923F82A4,0xAB1C5ED5,0xD807AA98,0x12835B01,0x243185BE,0x550C7DC3,0x72BE5D74,0x80DEB1FE,0x9BDC06A7,0xC19BF174,0xE49B69C1,0xEFBE4786,0xFC19DC6,0x240CA1CC,0x2DE92C6F,0x4A7484AA,0x5CB0A9DC,0x76F988DA,0x983E5152,0xA831C66D,0xB00327C8,0xBF597FC7,0xC6E00BF3,0xD5A79147,0x6CA6351,0x14292967,0x27B70A85,0x2E1B2138,0x4D2C6DFC,0x53380D13,0x650A7354,0x766A0ABB,0x81C2C92E,0x92722C85,0xA2BFE8A1,0xA81A664B,0xC24B8B70,0xC76C51A3,0xD192E819,0xD6990624,0xF40E3585,0x106AA070,0x19A4C116,0x1E376C08,0x2748774C,0x34B0BCB5,0x391C0CB3,0x4ED8AA4A,0x5B9CCA4F,0x682E6FF3,0x748F82EE,0x78A5636F,0x84C87814,0x8CC70208,0x90BEFFFA,0xA4506CEB,0xBEF9A3F7,0xC67178F2);
    var HASH = new Array(0x6A09E667,0xBB67AE85,0x3C6EF372,0xA54FF53A,0x510E527F,0x9B05688C,0x1F83D9AB,0x5BE0CD19);
    var W = new Array(64);
    var a, b, c, d, e, f, g, h, i, j;
    var T1, T2;
    m[l >> 5] |= 0x80 << (24 - l % 32);
    m[((l + 64 >> 9) << 4) + 15] = l;
    for (var i = 0; i < m.length; i += 16) {
        a = HASH[0];
        b = HASH[1];
        c = HASH[2];
        d = HASH[3];
        e = HASH[4];
        f = HASH[5];
        g = HASH[6];
        h = HASH[7];
        for (var j = 0; j < 64; j++) {
            if (j < 16)
                W[j] = m[j + i];
            else
                W[j] = tC.internalFunctions.SHA256.safe_add(tC.internalFunctions.SHA256.safe_add(tC.internalFunctions.SHA256.safe_add(tC.internalFunctions.SHA256.Gamma1256(W[j - 2]), W[j - 7]), tC.internalFunctions.SHA256.Gamma0256(W[j - 15])), W[j - 16]);
            T1 = tC.internalFunctions.SHA256.safe_add(tC.internalFunctions.SHA256.safe_add(tC.internalFunctions.SHA256.safe_add(tC.internalFunctions.SHA256.safe_add(h, tC.internalFunctions.SHA256.Sigma1256(e)), tC.internalFunctions.SHA256.Ch(e, f, g)), K[j]), W[j]);
            T2 = tC.internalFunctions.SHA256.safe_add(tC.internalFunctions.SHA256.Sigma0256(a), tC.internalFunctions.SHA256.Maj(a, b, c));
            h = g;
            g = f;
            f = e;
            e = tC.internalFunctions.SHA256.safe_add(d, T1);
            d = c;
            c = b;
            b = a;
            a = tC.internalFunctions.SHA256.safe_add(T1, T2);
        }
        HASH[0] = tC.internalFunctions.SHA256.safe_add(a, HASH[0]);
        HASH[1] = tC.internalFunctions.SHA256.safe_add(b, HASH[1]);
        HASH[2] = tC.internalFunctions.SHA256.safe_add(c, HASH[2]);
        HASH[3] = tC.internalFunctions.SHA256.safe_add(d, HASH[3]);
        HASH[4] = tC.internalFunctions.SHA256.safe_add(e, HASH[4]);
        HASH[5] = tC.internalFunctions.SHA256.safe_add(f, HASH[5]);
        HASH[6] = tC.internalFunctions.SHA256.safe_add(g, HASH[6]);
        HASH[7] = tC.internalFunctions.SHA256.safe_add(h, HASH[7]);
    }
    return HASH;
}
tC.internalFunctions.SHA256.str2binb = function(str) {
    var bin = Array();
    var mask = (1 << tC.internalFunctions.SHA256.chrsz) - 1;
    for (var i = 0; i < str.length * tC.internalFunctions.SHA256.chrsz; i += tC.internalFunctions.SHA256.chrsz) {
        bin[i >> 5] |= (str.charCodeAt(i / tC.internalFunctions.SHA256.chrsz) & mask) << (24 - i % 32);
    }
    return bin;
}
tC.internalFunctions.SHA256.Utf8Encode = function(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";
    for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        if (c < 128) {
            utftext += String.fromCharCode(c);
        } else if ((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
        } else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
        }
    }
    return utftext;
}
tC.internalFunctions.SHA256.binb2hex = function(binarray) {
    var hex_tab = tC.internalFunctions.SHA256.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var str = "";
    for (var i = 0; i < binarray.length * 4; i++) {
        str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) + hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
    }
    return str;
}
tC.internalFunctions.SHA256.SHA256 = function(s) {
    s = tC.internalFunctions.SHA256.Utf8Encode(s);
    return (s !== '') ? tC.internalFunctions.SHA256.binb2hex(tC.internalFunctions.SHA256.core_sha256(tC.internalFunctions.SHA256.str2binb(s), s.length * tC.internalFunctions.SHA256.chrsz)) : '';
}

/*VARIABLES_BLOCK*/
tC.internalvars_5181.initiators = tC.internalvars_5181.initiators || {};
tC.internalvars_5181_19 = {
    listVar: []
}
tC.internalvars_5181.initiators.var980 = typeof tC.internalvars_5181.initiators.var980 == "function" ? tC.internalvars_5181.initiators.var980 : function() {
    tC.internalvars.GA4_property = tC.internalvars.GA4_property ? tC.internalvars.GA4_property : "";
}
tC.internalvars_5181.initiators.var980();
tC.internalvars_5181_19.listVar.push(980);
tC.internalvars_5181.initiators.var982 = function() {
    tC.internalvars.GA4isOrderIdValid = "";
    if (((tc_vars.nav_pagetype === "thankyou") && (tc_vars.env_template === "checkout")) || (tc_vars.nav_pagetype === "CheckoutPayPalExpress.Thankyou") || (tc_vars.nav_pagetype === "thankyou") && (tc_vars.env_template === "genericpage")) {
        var tc_ordIdfromUrl = location.search.split('orderNumber=').splice(1).join('').split('&')[0];
        var tc_ordIdfromCookie = tC.getCookie("tc_idlord_GA4");
        if (tc_ordIdfromUrl.toLowerCase() === tc_ordIdfromCookie.toLowerCase()) {
            tC.internalvars.GA4isOrderIdValid = "false";
        } else {
            tC.internalvars.GA4isOrderIdValid = "true";
        }
    }
}
tC.internalvars_5181.initiators.var982();
tC.internalvars_5181_19.listVar.push(982);
tC.internalvars_5181.initiators.var984 = function() {
    tC.internalvars.GA_contentgroup1_GA4 = "";
    switch (tc_vars.env_template) {
    case 'home':
        tC.internalvars.GA_contentgroup1_GA4 = tc_vars.env_template.toLowerCase();
        break;
    case 'genericpage':
        if (tc_vars.nav_pagetype == 'cart') {
            tC.internalvars.GA_contentgroup1_GA4 = 'cart';
        } else if ((tc_vars.nav_pagetype == 'confirmation') || (tc_vars.nav_pagetype == 'checkout')) {
            tC.internalvars.GA_contentgroup1_GA4 = 'checkout';
        } else if (tc_vars.nav_pagetype == 'thankyou') {
            tC.internalvars.GA_contentgroup1_GA4 = 'thankyou';
        } else if (tc_vars.nav_pagetype == 'CheckoutPayPalExpress.Thankyou') {
            tC.internalvars.GA_contentgroup1_GA4 = 'thankyou';
        } else if (window.location.pathname.split('/')[1].includes('Gallery') > 0 || window.location.pathname.split('/')[1].includes('gallery') > 0) {
            tC.internalvars.GA_contentgroup1_GA4 = 'gallery_focus_on';
        } else if (typeof window.location.pathname.split('/')[2] !== "undefined" && typeof window.location.pathname.split('/')[3] !== "undefined") {
            if (window.location.pathname.split('/')[2].includes('ProductExchange') > 0) {
                tC.internalvars.GA_contentgroup1_GA4 = 'myaccount';
            } else if (typeof window.location.pathname.split('/')[2] !== "undefined" && window.location.pathname.split('/')[2].match('gallery')) {
                tC.internalvars.GA_contentgroup1_GA4 = 'gallery_focus_on';
            } else if (typeof window.location.pathname.split('/')[3] !== "undefined" && window.location.pathname.split('/')[3].includes('preview') > 0) {
                tC.internalvars.GA_contentgroup1_GA4 = 'gallery_preview';
            } else if (typeof window.location.pathname.split('/')[3] !== "undefined" && window.location.pathname.split('/')[3].includes('section') > 0 && window.location.pathname.split('/')[3].includes('preview') > -1) {
                tC.internalvars.GA_contentgroup1_GA4 = 'gallery_focus_on';
            } else if (typeof window.location.pathname.split('/')[4] !== "undefined") {
                tC.internalvars.GA_contentgroup1_GA4 = tc_vars.env_template;
            } else
                tC.internalvars.GA_contentgroup1_GA4 = tc_vars.env_template.toLowerCase();
        } else if (typeof window.location.pathname.split('/')[2] !== "undefined" && window.location.pathname.split('/')[2].includes('authenticity') > 0) {
            tC.internalvars.GA_contentgroup1_GA4 = "experience";
        } else
            tC.internalvars.GA_contentgroup1_GA4 = tc_vars.env_template.toLowerCase();
        break;
    case 'gallery_focus_on':
        if (tc_vars.nav_pagetype === "FashionShow.Index") {
            tC.internalvars.GA_contentgroup1_GA4 = "fashionshow";
        } else
            tC.internalvars.GA_contentgroup1_GA4 = tc_vars.env_template.toLowerCase();
        break;
    case 'gallery_focus_on_editorial':
        tC.internalvars.GA_contentgroup1_GA4 = tc_vars.env_template.toLowerCase();
        break;
    case 'gallery_focus_on_preview':
        tC.internalvars.GA_contentgroup1_GA4 = tc_vars.env_template.toLowerCase();
        break;
    case 'fashionshow_editorial':
        tC.internalvars.GA_contentgroup1_GA4 = tc_vars.env_template.toLowerCase();
        break;
    case 'fashionshow':
        tC.internalvars.GA_contentgroup1_GA4 = tc_vars.env_template.toLowerCase();
        break;
    case 'experience':
        tC.internalvars.GA_contentgroup1_GA4 = tc_vars.env_template.toLowerCase();
        break;
    case 'account':
        tC.internalvars.GA_contentgroup1_GA4 = tc_vars.nav_GAsection.toLowerCase();
        break;
    case 'myaccount':
        tC.internalvars.GA_contentgroup1_GA4 = tc_vars.nav_GAsection.toLowerCase();
        break;
    case 'experience':
        tC.internalvars.GA_contentgroup1_GA4 = tc_vars.env_template.toLowerCase();
        break;
    case 'checkout':
        if (tc_vars.nav_pagetype == 'thankyou') {
            tC.internalvars.GA_contentgroup1_GA4 = 'thankyou';
        } else
            tC.internalvars.GA_contentgroup1_GA4 = tc_vars.env_template.toLowerCase();
        break;
    case 'CustomerCare':
        tC.internalvars.GA_contentgroup1_GA4 = 'customercare';
        break;
    case 'searchresult':
        tC.internalvars.GA_contentgroup1_GA4 = tc_vars.env_template.toLowerCase();
        break;
    default:
        tC.internalvars.GA_contentgroup1_GA4 = tc_vars.env_template.toLowerCase();
        break;
    }
}
tC.internalvars_5181.initiators.var984();
tC.internalvars_5181_19.listVar.push(984);
tC.internalvars_5181.initiators.var986 = function() {
    tC.internalvars.GA4_UserID = "";
    if (tC.getCookie("tc_idusermail") !== "") {
        if (tC.getCookie("tc_idusermail").indexOf("@") === -1) {
            tC.internalvars.GA_UserID = tC.getCookie("tc_idusermail");
        }
    } else if (tC.getCookie("tc_iduserlanding") !== "" && tC.getCookie("tc_idusermail") === "") {
        if (tC.getCookie("tc_iduserlanding").indexOf("@") === -1) {
            tC.internalvars.GA_UserID = tC.getCookie("tc_iduserlanding");
        }
    } else if (tC.getCookie("tc_idGuest") !== "" && tC.getCookie("tc_iduserlanding") === "" && tC.getCookie("tc_idusermail") === "") {
        if (tC.getCookie("tc_idGuest").indexOf("@") === -1) {
            tC.internalvars.GA_UserID = tC.getCookie("tc_idGuest");
        }
    } else if (tC.getCookie("tc_idContatto") !== "" && tC.getCookie("tc_idGuest") === "" && tC.getCookie("tc_iduserlanding") === "" && tC.getCookie("tc_idusermail") === "") {
        if (tC.getCookie("tc_idContatto").indexOf("@") === -1) {
            tC.internalvars.GA_UserID = tC.getCookie("tc_idContatto");
        }
    } else if (tC.getCookie("tc_idNL") !== "" && tC.getCookie("tc_idContatto") === "" && tC.getCookie("tc_idGuest") === "" && tC.getCookie("tc_iduserlanding") === "" && tC.getCookie("tc_idusermail") === "") {
        if (tC.getCookie("tc_idNL").indexOf("@") === -1) {
            tC.internalvars.GA_UserID = tC.getCookie("tc_idNL");
        }
    }
}
tC.internalvars_5181.initiators.var986();
tC.internalvars_5181_19.listVar.push(986);
tC.internalvars_5181.initiators.var988 = function() {
    tC.internalvars.getClientId_GA4 = '';
    try {
        tC.internalvars.gaCookie = tC.getCookie("_ga").split(".");
        tC.internalvars.getClientId_GA4 = tC.internalvars.gaCookie[2] + "." + tC.internalvars.gaCookie[3];
    } catch (e) {
        tC.log("DEBUG | Exception: " + e);
        tC.internalvars.getClientId_GA4 = "";
    }
}
tC.internalvars_5181.initiators.var988();
tC.internalvars_5181_19.listVar.push(988);
tC.internalvars_5181.initiators.var455 = function() {
    tC.internalvars.getBooleanToString = function(a) {
        if (typeof a === "boolean") {
            if (a) {
                return "Yes";
            } else {
                return "No";
            }
        } else {
            return "No";
        }
    }
}
tC.internalvars_5181.initiators.var455();
tC.internalvars_5181_19.listVar.push(455);
tC.internalvars_5181.initiators.var457 = function() {
    tC.internalvars.getSizmekId = function() {
        var random = Math.floor((Math.random() * 10000000000) + 1);
        var setCookie = function(cname, cvalue, opt_expireMilliSecs, opt_domain) {
            if (cname && cvalue) {
                if (opt_expireMilliSecs) {
                    var exdate = new Date();
                    exdate.setTime(exdate.getTime() + opt_expireMilliSecs);
                    document.cookie = cname + "=" + cvalue + ((opt_expireMilliSecs == null) ? "" : ";expires=" + exdate.toUTCString()) + ";path=/" + (opt_domain ? ";domain=" + opt_domain : "");
                } else {
                    document.cookie = cname + "=" + cvalue + ";path=/" + (opt_domain ? ";domain=" + opt_domain : "");
                }
            }
        };
        var getCookie = function(cname) {
            var dc = document.cookie
              , resultValue = "";
            dc = dc.split("; ");
            for (var i = 0; i < dc.length; i++) {
                dc[i] = dc[i].replace("=", "==");
                dc[i] = dc[i].split("==");
                if (dc[i][0] == cname) {
                    resultValue = dc[i][1];
                }
                ;
            }
            ;return resultValue;
        };
        if (getCookie("sizmekID") != "") {
            return getCookie("sizmekID")
        } else {
            setCookie("sizmekID", random, 1000 * 60 * 60 * 24 * 30 * 12 * 2, ".montblanc.com");
        }
        return random;
    }
}
tC.internalvars_5181.initiators.var457();
tC.internalvars_5181_19.listVar.push(457);
tC.internalvars_5181.initiators.var459 = function() {
    tC.internalvars.getClientId = function() {
        try {
            tC.internalvars.gaCookie = tC.getCookie("_ga").split(".");
            return tC.internalvars.gaCookie[2] + "." + tC.internalvars.gaCookie[3];
        } catch (e) {
            tC.log("DEBUG | Exception: " + e);
            return "";
        }
    }
}
tC.internalvars_5181.initiators.var459();
tC.internalvars_5181_19.listVar.push(459);
tC.internalvars_5181.initiators.var461 = function() {
    tC.internalvars.getSessionId = function() {
        if (tC.internalvars.getClientId() !== "") {
            return ((tC.internalvars.getClientId()).split(".")[1]);
        } else {
            return "";
        }
    }
}
tC.internalvars_5181.initiators.var461();
tC.internalvars_5181_19.listVar.push(461);
tC.internalvars_5181.initiators.var463 = function() {
    tC.internalvars.getTimestamp = function() {
        var now = new Date();
        var tzo = -now.getTimezoneOffset();
        var dif = tzo >= 0 ? '+' : '-';
        var pad = function(num) {
            var norm = Math.abs(Math.floor(num));
            return (norm < 10 ? '0' : '') + norm;
        };
        return now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate()) + 'T' + pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds()) + '.' + pad(now.getMilliseconds()) + dif + pad(tzo / 60) + ':' + pad(tzo % 60);
    }
}
tC.internalvars_5181.initiators.var463();
tC.internalvars_5181_19.listVar.push(463);
tC.internalvars_5181.initiators.var465 = function() {
    tC.internalvars.getStringToNa = function(a) {
        if (typeof a === "string") {
            if (a === "") {
                return "NA";
            } else {
                return a;
            }
        } else {
            return "NA";
        }
    }
}
tC.internalvars_5181.initiators.var465();
tC.internalvars_5181_19.listVar.push(465);
tC.internalvars_5181.initiators.var1 = function() {
    tC.internalvars.tc_fulldomain = window.location.hostname;
}
tC.internalvars_5181.initiators.var1();
tC.internalvars_5181_19.listVar.push(1);
tC.internalvars_5181.initiators.var3 = function() {
    if (tc_vars["nav_sessionTP"] !== "") {
        tC.internalvars.tpcode = tc_vars["nav_sessionTP"];
    } else {
        tC.internalvars.tpcode = tc_vars["nav_historicalTP"];
    }
}
tC.internalvars_5181.initiators.var3();
tC.internalvars_5181_19.listVar.push(3);
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
tC.internalvars_5181_19.listVar.push(209);
tC.internalvars_5181.initiators.var217 = function() {
    if (tC.match(new String(tC.getCookie("PARTNER")), 'criteo', "") || tC.match(new String(tC.getCookie("PARTNER")), 'Criteo', "") || tC.match(new String(tC.getCookie("PARTNER")), 'CRITEO', "")) {
        tC.internalvars.criteodedup = "1";
    } else {
        tC.internalvars.criteodedup = "0";
    }
}
tC.internalvars_5181.initiators.var217();
tC.internalvars_5181_19.listVar.push(217);
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
tC.internalvars_5181_19.listVar.push(219);
tC.internalvars_5181.initiators.var251 = function() {
    tC.internalvars.md5_email = "";
}
tC.internalvars_5181.initiators.var251();
tC.internalvars_5181_19.listVar.push(251);
tC.internalvars_5181.initiators.var253 = function() {
    tC.internalvars.GA_UA = "";
    switch (tc_vars["env_work"]) {
    case "prod":
        tC.internalvars.GA_UA = "UA-46573917-1";
        break;
    default:
        tC.internalvars.GA_UA = "UA-46573917-11";
        break;
    }
}
tC.internalvars_5181.initiators.var253();
tC.internalvars_5181_19.listVar.push(253);
tC.internalvars_5181.initiators.var255 = function() {
    tC.internalvars.UserId = "";
    if ((tC.getCookie("tc_iduserid") !== "") && (tc_vars.user_Id === "")) {
        tC.internalvars.UserId = tC.getCookie("tc_iduserid");
    } else {
        tC.internalvars.UserId = tc_vars.user_Id;
    }
}
tC.internalvars_5181.initiators.var255();
tC.internalvars_5181_19.listVar.push(255);
tC.internalvars_5181.initiators.var259 = function() {
    tC.internalvars.GA_contentgroup2 = "";
    switch (tc_vars.nav_pagetype) {
    case 'searchresult':
        tC.internalvars.GA_contentgroup2 = tc_vars.env_template.toLowerCase() + '-' + 'textsearch';
        break;
    case 'categories':
        tC.internalvars.GA_contentgroup2 = tc_vars.env_template.toLowerCase() + '-' + tc_vars.nav_section_dept.toLowerCase();
        break;
    case 'item':
        tC.internalvars.GA_contentgroup2 = tc_vars.env_template.toLowerCase() + '-' + tc_vars.product_category_id;
        break;
    default:
        tC.internalvars.GA_contentgroup2 = tc_vars.nav_pagetype.toLowerCase() + '-' + tc_vars.env_template.toLowerCase()
        break;
    }
}
tC.internalvars_5181.initiators.var259();
tC.internalvars_5181_19.listVar.push(259);
tC.internalvars_5181.initiators.var261 = function() {
    tC.internalvars.GA_contentgroup3 = "";
    switch (tc_vars.env_template) {
    case 'searchresult':
        if (window.location.search.indexOf('textsearch') > 0) {
            tC.internalvars.GA_contentgroup3 = 'textsearch';
        } else
            tC.internalvars.GA_contentgroup3 = tc_vars.nav_section_dept.toLowerCase();
        break;
    case 'categories':
        tC.internalvars.GA_contentgroup3 = tc_vars.nav_section.toLowerCase();
        break;
    case 'item':
        tC.internalvars.GA_contentgroup3 = tc_vars.product_category_id;
        break;
    default:
        tC.internalvars.GA_contentgroup3 = tc_vars.env_template;
        break;
    }
}
tC.internalvars_5181.initiators.var261();
tC.internalvars_5181_19.listVar.push(261);
tC.internalvars_5181.initiators.var277 = function() {
    tC.internalvars.GA_fnl = '';
    gndr = '';
    if (tc_vars.env_template.toLowerCase() == 'searchresult' && window.location.pathname.split('/')[2].indexOf("-") > -1 === true) {
        gndr = 'B';
    } else {
        gndr = tc_vars.nav_dept;
    }
    if (tc_vars.env_template.toLowerCase() == 'searchresult') {
        tC.internalvars.GA_fnl = tc_vars.env_template.toLowerCase() + '_' + gndr;
    } else {
        tC.internalvars.GA_fnl = tc_vars.env_template.toLowerCase();
    }
}
tC.internalvars_5181.initiators.var277();
tC.internalvars_5181_19.listVar.push(277);
tC.internalvars_5181.initiators.var281 = function() {
    tC.internalvars.GA_ClientID = "";
    if (typeof getCookie("_ga") != "undefined") {
        tC.internalvars.GA_ClientID = getCookie("_ga").substring(6)
    }
}
tC.internalvars_5181.initiators.var281();
tC.internalvars_5181_19.listVar.push(281);
tC.internalvars_5181.initiators.var283 = function() {
    tC.internalvars.sr_results = "";
    if (tc_vars.env_template == "searchresult") {
        tC.internalvars.sr_results = tc_vars.sr_items.length;
    } else {
        tC.internalvars.sr_results = "NA";
    }
}
tC.internalvars_5181.initiators.var283();
tC.internalvars_5181_19.listVar.push(283);
tC.internalvars_5181.initiators.var285 = function() {
    tC.internalvars.GA_step = "";
    switch (tc_vars["nav_pagetype"]) {
    case "cart":
        tC.internalvars.GA_step = "1";
        break;
    case "checkemail":
        tC.internalvars.GA_step = "2";
        break;
    case "delivery":
        tC.internalvars.GA_step = "3";
        break;
    case "payment":
        tC.internalvars.GA_step = "4";
        break;
    case "confirmation":
        tC.internalvars.GA_step = "5";
        break;
    case "CheckoutPayPalExpress.Confirmation":
        tC.internalvars.GA_step = "5";
        break;
    case "thankyou":
        tC.internalvars.GA_step = "6";
        break;
    default:
        tC.internalvars.GA_step = "";
        break;
    }
}
tC.internalvars_5181.initiators.var285();
tC.internalvars_5181_19.listVar.push(285);
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
tC.internalvars_5181_19.listVar.push(315);
tC.internalvars_5181.initiators.var317 = function() {
    tC.internalvars.GA_dpt = "";
    if (tc_vars.env_template == "searchresult") {
        if (tc_vars.nav_section_dept === "") {
            tC.internalvars.GA_dpt = tc_vars.env_template + "|" + "textsearch";
        } else
            tC.internalvars.GA_dpt = tc_vars.env_template + "|" + tc_vars.nav_section_dept;
    }
}
tC.internalvars_5181.initiators.var317();
tC.internalvars_5181_19.listVar.push(317);
tC.internalvars_5181.initiators.var320 = function() {
    tC.internalvars.email_hash = "";
}
tC.internalvars_5181.initiators.var320();
tC.internalvars_5181_19.listVar.push(320);
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
tC.internalvars_5181_19.listVar.push(321);
tC.internalvars_5181.initiators.var322 = function() {
    tC.internalvars.GA_UserID = "";
    if (tC.getCookie("tc_idusermail") !== "") {
        if (tC.getCookie("tc_idusermail").indexOf("@") === -1) {
            tC.internalvars.GA_UserID = tC.getCookie("tc_idusermail");
        }
    } else if (tC.getCookie("tc_iduserlanding") !== "" && tC.getCookie("tc_idusermail") === "") {
        if (tC.getCookie("tc_iduserlanding").indexOf("@") === -1) {
            tC.internalvars.GA_UserID = tC.getCookie("tc_iduserlanding");
        }
    } else if (tC.getCookie("tc_idGuest") !== "" && tC.getCookie("tc_iduserlanding") === "" && tC.getCookie("tc_idusermail") === "") {
        if (tC.getCookie("tc_idGuest").indexOf("@") === -1) {
            tC.internalvars.GA_UserID = tC.getCookie("tc_idGuest");
        }
    } else if (tC.getCookie("tc_idContatto") !== "" && tC.getCookie("tc_idGuest") === "" && tC.getCookie("tc_iduserlanding") === "" && tC.getCookie("tc_idusermail") === "") {
        if (tC.getCookie("tc_idContatto").indexOf("@") === -1) {
            tC.internalvars.GA_UserID = tC.getCookie("tc_idContatto");
        }
    } else if (tC.getCookie("tc_idNL") !== "" && tC.getCookie("tc_idContatto") === "" && tC.getCookie("tc_idGuest") === "" && tC.getCookie("tc_iduserlanding") === "" && tC.getCookie("tc_idusermail") === "") {
        if (tC.getCookie("tc_idNL").indexOf("@") === -1) {
            tC.internalvars.GA_UserID = tC.getCookie("tc_idNL");
        }
    }
}
tC.internalvars_5181.initiators.var322();
tC.internalvars_5181_19.listVar.push(322);
tC.internalvars_5181.initiators.var329 = function() {
    tC.internalvars.GA_remarketing = "";
    tC.internalvars.GA_remarketing_productid = "";
    tC.internalvars.GA_remarketing_productvalue = "";
    tC.internalvars.GA_remarketing_producttemplate = "";
    if (tc_vars.env_template === "searchresult") {
        tC.internalvars.GA_remarketing_producttemplate = "category";
    } else if (tc_vars.env_template === "item") {
        tC.internalvars.GA_remarketing_productid = tc_vars.product_cod10.toUpperCase();
        tC.internalvars.GA_remarketing_productvalue = tc_vars.product_discount_tf;
        tC.internalvars.GA_remarketing_producttemplate = "product";
    } else if (tc_vars.nav_pagetype === "cart" || tc_vars.nav_pagetype === "checkemail" || tc_vars.nav_pagetype === "delivery" || tc_vars.nav_pagetype === "payment" || tc_vars.nav_pagetype === "confirmation" || tc_vars.nav_pagetype === "CheckoutPayPalExpress.Confirmation") {
        if (tc_vars.cart_items.length > 0) {
            tC.internalvars.GA_array = [];
            tC.internalvars.GA_array_value = [];
            for (var i = 0; i < tc_vars.cart_items.length; i++) {
                tC.internalvars.GA_array[i] = tc_vars.cart_items[i].cart_item_cod10;
                tC.internalvars.GA_array_value[i] = Number(tc_vars.cart_items[i].cart_item_discount_tf);
            }
            tC.internalvars.GA_remarketing_productid = tC.internalvars.GA_array;
            tC.internalvars.GA_remarketing_productvalue = tC.internalvars.GA_array_value.reduce(function(a, b) {
                return a + b
            }, 0);
            tC.internalvars.GA_remarketing_producttemplate = "cart";
        }
    } else if ((tc_vars.nav_pagetype === 'thankyou' && tc_vars.env_template === 'checkout') || (tc_vars.nav_pagetype === 'CheckoutPayPalExpress.Thankyou') || (tc_vars.nav_pagetype === 'thankyou' && tc_vars.env_template === 'genericpage')) {
        if (tc_vars.order_items.length > 0) {
            tC.internalvars.GA_array_value = [];
            for (var i = 0; i < tc_vars.order_items.length; i++) {
                tC.internalvars.GA_array_value[i] = Number(tc_vars.order_items[i].order_item_discount_tf);
            }
            tC.internalvars.GA_remarketing_productvalue = tC.internalvars.GA_array_value.reduce(function(a, b) {
                return a + b
            }, 0);
            tC.internalvars.GA_remarketing_producttemplate = "purchase";
        }
    } else if (tc_vars.env_template === "home") {
        tC.internalvars.GA_remarketing_producttemplate = "home";
    } else
        tC.internalvars.GA_remarketing_producttemplate = 'other';
}
tC.internalvars_5181.initiators.var329();
tC.internalvars_5181_19.listVar.push(329);
tC.internalvars_5181.initiators.var330 = function() {
    tC.internalvars.GA_contentgroup1 = "";
    switch (tc_vars.nav_pagetype) {
    case 'searchresult':
        tC.internalvars.GA_contentgroup1 = tc_vars.env_template.toLowerCase();
        break;
    case 'categories':
        tC.internalvars.GA_contentgroup1 = tc_vars.env_template.toLowerCase();
        break;
    case 'item':
        tC.internalvars.GA_contentgroup1 = tc_vars.env_template.toLowerCase();
        break;
    case 'checkout':
        tC.internalvars.GA_contentgroup1 = tc_vars.env_template.toLowerCase();
        break;
    default:
        tC.internalvars.GA_contentgroup1 = tc_vars.nav_pagetype.toLowerCase()
        break;
    }
}
tC.internalvars_5181.initiators.var330();
tC.internalvars_5181_19.listVar.push(330);
tC.internalvars_5181.initiators.var331 = function() {
    tC.internalvars.cart_itemsNo = "";
    if (typeof tc_vars.cart_itemsNo !== "undefined" && tc_vars.cart_itemsNo === "") {
        tC.internalvars.cart_itemsNo = "0"
    } else
        tC.internalvars.cart_itemsNo = tc_vars.cart_itemsNo;
}
tC.internalvars_5181.initiators.var331();
tC.internalvars_5181_19.listVar.push(331);
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
tC.internalvars_5181_19.listVar.push(333);
tC.internalvars_5181.initiators.var335 = function() {
    tC.internalvars.new_arrivals = "";
    if (typeof tc_vars["itemsList"] !== "undefined") {
        if (typeof tc_vars["itemsList"]["Homepage|New_Arrivals"] !== "undefined") {
            tC.internalvars.new_arrivals = tc_vars["itemsList"]["Homepage|New_Arrivals"];
        }
    }
}
tC.internalvars_5181.initiators.var335();
tC.internalvars_5181_19.listVar.push(335);
tC.internalvars_5181.initiators.var338 = function() {
    tC.internalvars.checkout_related = "";
    if (typeof tc_vars["itemsList"] !== "undefined") {
        if (typeof tc_vars["itemsList"]["Checkout|Related"] !== "undefined") {
            tC.internalvars.checkout_related = tc_vars["itemsList"]["Checkout|Related"];
        }
    }
}
tC.internalvars_5181.initiators.var338();
tC.internalvars_5181_19.listVar.push(338);
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
tC.internalvars_5181_19.listVar.push(339);
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
tC.internalvars_5181_19.listVar.push(348);
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
tC.internalvars_5181_19.listVar.push(349);
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
tC.internalvars_5181_19.listVar.push(351);
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
tC.internalvars_5181_19.listVar.push(355);
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
tC.internalvars_5181_19.listVar.push(356);
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
tC.internalvars_5181_19.listVar.push(357);
tC.internalvars_5181.initiators.var358 = function() {
    tC.internalvars.promoCod10 = "51122474XD,45351795KE,45351709CF,45351722ST,45351749BT,45351740TW,45367779OL,45370917WU,45358171HT,45358176PV,45365640QO,45358126MN,45366535MO,45358280IH,45370839KR,45370837QO,45358435XT,45358168JV,45358099EK,45358111BT,45368927OR,45369590UM,45358198KB,45370975RD,45369009FJ,45358195PU,45370974CI,45369008WD,45358308XE,45358269JM,45370822BA,45370780HS,45370716DO,45370799GH,45370811EB,45370723FU,45370913BC,45370911PN,45367775PF,45370848SD,45358116MJ,45358153VX,45358104QP,45358189DO,45370828KD,45370695JW,45370698GQ,45358151WX,45358105AA,45358178QD,45358422RU,45358446WT,45358387SD,45369732FH,45358100KA,45358432TW,45370601XJ,45358129AA,45369731QC,45358113SW,45370844VM,45370840KA,45358159MO,45358397JG,45370600IP,45358407HV,45358109GK,45370845KA,45358484RU";
}
tC.internalvars_5181.initiators.var358();
tC.internalvars_5181_19.listVar.push(358);
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
tC.internalvars_5181_19.listVar.push(359);
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
tC.internalvars_5181_19.listVar.push(362);
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
tC.internalvars_5181_19.listVar.push(363);
tC.internalvars_5181.initiators.var379 = function() {
    tC.internalvars.listName = "";
    if (tc_vars["nav_pagetype"] === "categories") {
        tC.internalvars.listName = tc_vars["nav_GAsection"] + '|' + tc_vars["nav_section_dept"] + '_' + tc_vars["nav_dept"];
    } else if (tc_vars["nav_pagetype"] === "searchresult") {
        tC.internalvars.listName = tc_vars["nav_GAsection"] + '|' + "textsearch";
    }
}
tC.internalvars_5181.initiators.var379();
tC.internalvars_5181_19.listVar.push(379);
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
tC.internalvars_5181_19.listVar.push(384);
tC.internalvars_5181.initiators.var385 = typeof tC.internalvars_5181.initiators.var385 == "function" ? tC.internalvars_5181.initiators.var385 : function() {
    tC.internalvars.baseDomain = tC.internalvars.baseDomain ? tC.internalvars.baseDomain : "";
}
tC.internalvars_5181.initiators.var385();
tC.internalvars_5181_19.listVar.push(385);
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
tC.internalvars_5181_19.listVar.push(466);
tC.internalvars_5181.initiators.var491 = typeof tC.internalvars_5181.initiators.var491 == "function" ? tC.internalvars_5181.initiators.var491 : function() {
    tC.internalvars.startCuralate = tC.internalvars.startCuralate ? tC.internalvars.startCuralate : "";
}
tC.internalvars_5181.initiators.var491();
tC.internalvars_5181_19.listVar.push(491);
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
tC.internalvars_5181_19.listVar.push(495);
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
tC.internalvars_5181_19.listVar.push(497);
tC.internalvars_5181.initiators.var500 = function() {
    tC.internalvars.tc_url = document.location.href;
}
tC.internalvars_5181.initiators.var500();
tC.internalvars_5181_19.listVar.push(500);
tC.internalvars_5181.initiators.var502 = function() {
    tC.internalvars.tc_pathname = window.location.pathname;
}
tC.internalvars_5181.initiators.var502();
tC.internalvars_5181_19.listVar.push(502);
tC.internalvars_5181.initiators.var508 = typeof tC.internalvars_5181.initiators.var508 == "function" ? tC.internalvars_5181.initiators.var508 : function() {
    tC.internalvars.ricFacebookID = tC.internalvars.ricFacebookID ? tC.internalvars.ricFacebookID : "";
}
tC.internalvars_5181.initiators.var508();
tC.internalvars_5181_19.listVar.push(508);
tC.internalvars_5181.initiators.var510 = typeof tC.internalvars_5181.initiators.var510 == "function" ? tC.internalvars_5181.initiators.var510 : function() {
    tC.internalvars.ricCartNameArray = tC.internalvars.ricCartNameArray ? tC.internalvars.ricCartNameArray : "";
}
tC.internalvars_5181.initiators.var510();
tC.internalvars_5181_19.listVar.push(510);
tC.internalvars_5181.initiators.var512 = typeof tC.internalvars_5181.initiators.var512 == "function" ? tC.internalvars_5181.initiators.var512 : function() {
    tC.internalvars.ricCartCategoryArray = tC.internalvars.ricCartCategoryArray ? tC.internalvars.ricCartCategoryArray : "";
}
tC.internalvars_5181.initiators.var512();
tC.internalvars_5181_19.listVar.push(512);
tC.internalvars_5181.initiators.var514 = typeof tC.internalvars_5181.initiators.var514 == "function" ? tC.internalvars_5181.initiators.var514 : function() {
    tC.internalvars.ricCartIDArray = tC.internalvars.ricCartIDArray ? tC.internalvars.ricCartIDArray : "";
}
tC.internalvars_5181.initiators.var514();
tC.internalvars_5181_19.listVar.push(514);
tC.internalvars_5181.initiators.var518 = function() {
    tC.internalvars.ricOrderNameArray = [];
    if (tc_vars["order_items"] !== undefined) {
        for (var i = 0; i < tc_vars["order_items"].length; i++) {
            tC.internalvars.ricOrderNameArray.push(tc_vars["order_items"][i].order_item_name)
        }
    }
}
tC.internalvars_5181.initiators.var518();
tC.internalvars_5181_19.listVar.push(518);
tC.internalvars_5181.initiators.var520 = typeof tC.internalvars_5181.initiators.var520 == "function" ? tC.internalvars_5181.initiators.var520 : function() {
    tC.internalvars.ricOrderCatArray = tC.internalvars.ricOrderCatArray ? tC.internalvars.ricOrderCatArray : "";
}
tC.internalvars_5181.initiators.var520();
tC.internalvars_5181_19.listVar.push(520);
tC.internalvars_5181.initiators.var522 = typeof tC.internalvars_5181.initiators.var522 == "function" ? tC.internalvars_5181.initiators.var522 : function() {
    tC.internalvars.ricOrderIDArray = tC.internalvars.ricOrderIDArray ? tC.internalvars.ricOrderIDArray : "";
}
tC.internalvars_5181.initiators.var522();
tC.internalvars_5181_19.listVar.push(522);
tC.internalvars_5181.initiators.var534 = typeof tC.internalvars_5181.initiators.var534 == "function" ? tC.internalvars_5181.initiators.var534 : function() {
    tC.internalvars.amazonExFchId = tC.internalvars.amazonExFchId ? tC.internalvars.amazonExFchId : "";
}
tC.internalvars_5181.initiators.var534();
tC.internalvars_5181_19.listVar.push(534);
tC.internalvars_5181.initiators.var536 = typeof tC.internalvars_5181.initiators.var536 == "function" ? tC.internalvars_5181.initiators.var536 : function() {
    tC.internalvars.xandrSiteId = tC.internalvars.xandrSiteId ? tC.internalvars.xandrSiteId : "";
}
tC.internalvars_5181.initiators.var536();
tC.internalvars_5181_19.listVar.push(536);
tC.internalvars_5181.initiators.var538 = typeof tC.internalvars_5181.initiators.var538 == "function" ? tC.internalvars_5181.initiators.var538 : function() {
    tC.internalvars.mInsightTagId = tC.internalvars.mInsightTagId ? tC.internalvars.mInsightTagId : "";
}
tC.internalvars_5181.initiators.var538();
tC.internalvars_5181_19.listVar.push(538);
tC.internalvars_5181.initiators.var540 = typeof tC.internalvars_5181.initiators.var540 == "function" ? tC.internalvars_5181.initiators.var540 : function() {
    tC.internalvars.TTDClashAdvId = tC.internalvars.TTDClashAdvId ? tC.internalvars.TTDClashAdvId : "";
}
tC.internalvars_5181.initiators.var540();
tC.internalvars_5181_19.listVar.push(540);
tC.internalvars_5181.initiators.var542 = typeof tC.internalvars_5181.initiators.var542 == "function" ? tC.internalvars_5181.initiators.var542 : function() {
    tC.internalvars.TTDClashFmtId = tC.internalvars.TTDClashFmtId ? tC.internalvars.TTDClashFmtId : "";
}
tC.internalvars_5181.initiators.var542();
tC.internalvars_5181_19.listVar.push(542);
tC.internalvars_5181.initiators.var546 = typeof tC.internalvars_5181.initiators.var546 == "function" ? tC.internalvars_5181.initiators.var546 : function() {
    tC.internalvars.pepperjamId = tC.internalvars.pepperjamId ? tC.internalvars.pepperjamId : "";
}
tC.internalvars_5181.initiators.var546();
tC.internalvars_5181_19.listVar.push(546);
tC.internalvars_5181.initiators.var548 = typeof tC.internalvars_5181.initiators.var548 == "function" ? tC.internalvars_5181.initiators.var548 : function() {
    tC.internalvars.dv360EoyNov19SrcId = tC.internalvars.dv360EoyNov19SrcId ? tC.internalvars.dv360EoyNov19SrcId : "";
}
tC.internalvars_5181.initiators.var548();
tC.internalvars_5181_19.listVar.push(548);
tC.internalvars_5181.initiators.var550 = typeof tC.internalvars_5181.initiators.var550 == "function" ? tC.internalvars_5181.initiators.var550 : function() {
    tC.internalvars.dv360EoyNov19TypeId = tC.internalvars.dv360EoyNov19TypeId ? tC.internalvars.dv360EoyNov19TypeId : "";
}
tC.internalvars_5181.initiators.var550();
tC.internalvars_5181_19.listVar.push(550);
tC.internalvars_5181.initiators.var552 = typeof tC.internalvars_5181.initiators.var552 == "function" ? tC.internalvars_5181.initiators.var552 : function() {
    tC.internalvars.yahooJpRetargetingId = tC.internalvars.yahooJpRetargetingId ? tC.internalvars.yahooJpRetargetingId : "";
}
tC.internalvars_5181.initiators.var552();
tC.internalvars_5181_19.listVar.push(552);
tC.internalvars_5181.initiators.var554 = typeof tC.internalvars_5181.initiators.var554 == "function" ? tC.internalvars_5181.initiators.var554 : function() {
    tC.internalvars.bingId = tC.internalvars.bingId ? tC.internalvars.bingId : "";
}
tC.internalvars_5181.initiators.var554();
tC.internalvars_5181_19.listVar.push(554);
tC.internalvars_5181.initiators.var556 = typeof tC.internalvars_5181.initiators.var556 == "function" ? tC.internalvars_5181.initiators.var556 : function() {
    tC.internalvars.mobkoiSrcId = tC.internalvars.mobkoiSrcId ? tC.internalvars.mobkoiSrcId : "";
}
tC.internalvars_5181.initiators.var556();
tC.internalvars_5181_19.listVar.push(556);
tC.internalvars_5181.initiators.var558 = typeof tC.internalvars_5181.initiators.var558 == "function" ? tC.internalvars_5181.initiators.var558 : function() {
    tC.internalvars.mobkoiTypeId = tC.internalvars.mobkoiTypeId ? tC.internalvars.mobkoiTypeId : "";
}
tC.internalvars_5181.initiators.var558();
tC.internalvars_5181_19.listVar.push(558);
tC.internalvars_5181.initiators.var560 = typeof tC.internalvars_5181.initiators.var560 == "function" ? tC.internalvars_5181.initiators.var560 : function() {
    tC.internalvars.leFigaroEventId = tC.internalvars.leFigaroEventId ? tC.internalvars.leFigaroEventId : "";
}
tC.internalvars_5181.initiators.var560();
tC.internalvars_5181_19.listVar.push(560);
tC.internalvars_5181.initiators.var562 = typeof tC.internalvars_5181.initiators.var562 == "function" ? tC.internalvars_5181.initiators.var562 : function() {
    tC.internalvars.elleEventId = tC.internalvars.elleEventId ? tC.internalvars.elleEventId : "";
}
tC.internalvars_5181.initiators.var562();
tC.internalvars_5181_19.listVar.push(562);
tC.internalvars_5181.initiators.var564 = typeof tC.internalvars_5181.initiators.var564 == "function" ? tC.internalvars_5181.initiators.var564 : function() {
    tC.internalvars.mozzooPm = tC.internalvars.mozzooPm ? tC.internalvars.mozzooPm : "";
}
tC.internalvars_5181.initiators.var564();
tC.internalvars_5181_19.listVar.push(564);
tC.internalvars_5181.initiators.var566 = typeof tC.internalvars_5181.initiators.var566 == "function" ? tC.internalvars_5181.initiators.var566 : function() {
    tC.internalvars.aduxId = tC.internalvars.aduxId ? tC.internalvars.aduxId : "";
}
tC.internalvars_5181.initiators.var566();
tC.internalvars_5181_19.listVar.push(566);
tC.internalvars_5181.initiators.var568 = typeof tC.internalvars_5181.initiators.var568 == "function" ? tC.internalvars_5181.initiators.var568 : function() {
    tC.internalvars.emoteevTagId = tC.internalvars.emoteevTagId ? tC.internalvars.emoteevTagId : "";
}
tC.internalvars_5181.initiators.var568();
tC.internalvars_5181_19.listVar.push(568);
tC.internalvars_5181.initiators.var570 = typeof tC.internalvars_5181.initiators.var570 == "function" ? tC.internalvars_5181.initiators.var570 : function() {
    tC.internalvars.sizmekTagIdUS = tC.internalvars.sizmekTagIdUS ? tC.internalvars.sizmekTagIdUS : "";
}
tC.internalvars_5181.initiators.var570();
tC.internalvars_5181_19.listVar.push(570);
tC.internalvars_5181.initiators.var572 = typeof tC.internalvars_5181.initiators.var572 == "function" ? tC.internalvars_5181.initiators.var572 : function() {
    tC.internalvars.lineTagIdJp = tC.internalvars.lineTagIdJp ? tC.internalvars.lineTagIdJp : "";
}
tC.internalvars_5181.initiators.var572();
tC.internalvars_5181_19.listVar.push(572);
tC.internalvars_5181.initiators.var574 = typeof tC.internalvars_5181.initiators.var574 == "function" ? tC.internalvars_5181.initiators.var574 : function() {
    tC.internalvars.yahooPurchaseIdJp = tC.internalvars.yahooPurchaseIdJp ? tC.internalvars.yahooPurchaseIdJp : "";
}
tC.internalvars_5181.initiators.var574();
tC.internalvars_5181_19.listVar.push(574);
tC.internalvars_5181.initiators.var576 = typeof tC.internalvars_5181.initiators.var576 == "function" ? tC.internalvars_5181.initiators.var576 : function() {
    tC.internalvars.yahooConvLabelIdJp = tC.internalvars.yahooConvLabelIdJp ? tC.internalvars.yahooConvLabelIdJp : "";
}
tC.internalvars_5181.initiators.var576();
tC.internalvars_5181_19.listVar.push(576);
tC.internalvars_5181.initiators.var578 = typeof tC.internalvars_5181.initiators.var578 == "function" ? tC.internalvars_5181.initiators.var578 : function() {
    tC.internalvars.dbmTypeId = tC.internalvars.dbmTypeId ? tC.internalvars.dbmTypeId : "";
}
tC.internalvars_5181.initiators.var578();
tC.internalvars_5181_19.listVar.push(578);
tC.internalvars_5181.initiators.var580 = function() {
    tC.internalvars.dbmIdUs = "8437420";
}
tC.internalvars_5181.initiators.var580();
tC.internalvars_5181_19.listVar.push(580);
tC.internalvars_5181.initiators.var584 = typeof tC.internalvars_5181.initiators.var584 == "function" ? tC.internalvars_5181.initiators.var584 : function() {
    tC.internalvars.sizmekArrivalId = tC.internalvars.sizmekArrivalId ? tC.internalvars.sizmekArrivalId : "";
}
tC.internalvars_5181.initiators.var584();
tC.internalvars_5181_19.listVar.push(584);
tC.internalvars_5181.initiators.var586 = typeof tC.internalvars_5181.initiators.var586 == "function" ? tC.internalvars_5181.initiators.var586 : function() {
    tC.internalvars.sa360CounterTypeId = tC.internalvars.sa360CounterTypeId ? tC.internalvars.sa360CounterTypeId : "";
}
tC.internalvars_5181.initiators.var586();
tC.internalvars_5181_19.listVar.push(586);
tC.internalvars_5181.initiators.var588 = typeof tC.internalvars_5181.initiators.var588 == "function" ? tC.internalvars_5181.initiators.var588 : function() {
    tC.internalvars.sa360SalesTypeId = tC.internalvars.sa360SalesTypeId ? tC.internalvars.sa360SalesTypeId : "";
}
tC.internalvars_5181.initiators.var588();
tC.internalvars_5181_19.listVar.push(588);
tC.internalvars_5181.initiators.var606 = typeof tC.internalvars_5181.initiators.var606 == "function" ? tC.internalvars_5181.initiators.var606 : function() {
    tC.internalvars.teadsAdvertiserId = tC.internalvars.teadsAdvertiserId ? tC.internalvars.teadsAdvertiserId : "";
}
tC.internalvars_5181.initiators.var606();
tC.internalvars_5181_19.listVar.push(606);
tC.internalvars_5181.initiators.var590 = typeof tC.internalvars_5181.initiators.var590 == "function" ? tC.internalvars_5181.initiators.var590 : function() {
    tC.internalvars.sa360AdvId = tC.internalvars.sa360AdvId ? tC.internalvars.sa360AdvId : "";
}
tC.internalvars_5181.initiators.var590();
tC.internalvars_5181_19.listVar.push(590);
tC.internalvars_5181.initiators.var594 = typeof tC.internalvars_5181.initiators.var594 == "function" ? tC.internalvars_5181.initiators.var594 : function() {
    tC.internalvars.mInsightMacauSanyaId = tC.internalvars.mInsightMacauSanyaId ? tC.internalvars.mInsightMacauSanyaId : "";
}
tC.internalvars_5181.initiators.var594();
tC.internalvars_5181_19.listVar.push(594);
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
tC.internalvars_5181_19.listVar.push(598);
tC.internalvars_5181.initiators.var600 = typeof tC.internalvars_5181.initiators.var600 == "function" ? tC.internalvars_5181.initiators.var600 : function() {
    tC.internalvars.xaxisClashId = tC.internalvars.xaxisClashId ? tC.internalvars.xaxisClashId : "";
}
tC.internalvars_5181.initiators.var600();
tC.internalvars_5181_19.listVar.push(600);
tC.internalvars_5181.initiators.var602 = typeof tC.internalvars_5181.initiators.var602 == "function" ? tC.internalvars_5181.initiators.var602 : function() {
    tC.internalvars.dv360EoyNov19CatId = tC.internalvars.dv360EoyNov19CatId ? tC.internalvars.dv360EoyNov19CatId : "";
}
tC.internalvars_5181.initiators.var602();
tC.internalvars_5181_19.listVar.push(602);
tC.internalvars_5181.initiators.var608 = typeof tC.internalvars_5181.initiators.var608 == "function" ? tC.internalvars_5181.initiators.var608 : function() {
    tC.internalvars.teadsConversionType = tC.internalvars.teadsConversionType ? tC.internalvars.teadsConversionType : "";
}
tC.internalvars_5181.initiators.var608();
tC.internalvars_5181_19.listVar.push(608);
tC.internalvars_5181.initiators.var616 = typeof tC.internalvars_5181.initiators.var616 == "function" ? tC.internalvars_5181.initiators.var616 : function() {
    tC.internalvars.sizmekActivityId = tC.internalvars.sizmekActivityId ? tC.internalvars.sizmekActivityId : "";
}
tC.internalvars_5181.initiators.var616();
tC.internalvars_5181_19.listVar.push(616);
tC.internalvars_5181.initiators.var620 = typeof tC.internalvars_5181.initiators.var620 == "function" ? tC.internalvars_5181.initiators.var620 : function() {
    tC.internalvars.mInsightsMainCat = tC.internalvars.mInsightsMainCat ? tC.internalvars.mInsightsMainCat : "";
}
tC.internalvars_5181.initiators.var620();
tC.internalvars_5181_19.listVar.push(620);
tC.internalvars_5181.initiators.var622 = typeof tC.internalvars_5181.initiators.var622 == "function" ? tC.internalvars_5181.initiators.var622 : function() {
    tC.internalvars.mInsightsSubCat1 = tC.internalvars.mInsightsSubCat1 ? tC.internalvars.mInsightsSubCat1 : "";
}
tC.internalvars_5181.initiators.var622();
tC.internalvars_5181_19.listVar.push(622);
tC.internalvars_5181.initiators.var624 = typeof tC.internalvars_5181.initiators.var624 == "function" ? tC.internalvars_5181.initiators.var624 : function() {
    tC.internalvars.mInsightsSubCat2 = tC.internalvars.mInsightsSubCat2 ? tC.internalvars.mInsightsSubCat2 : "";
}
tC.internalvars_5181.initiators.var624();
tC.internalvars_5181_19.listVar.push(624);
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
tC.internalvars_5181_19.listVar.push(638);
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
tC.internalvars_5181_19.listVar.push(648);
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
tC.internalvars_5181_19.listVar.push(650);
tC.internalvars_5181.initiators.var670 = typeof tC.internalvars_5181.initiators.var670 == "function" ? tC.internalvars_5181.initiators.var670 : function() {
    tC.internalvars.mInsightIdNotProdPag = tC.internalvars.mInsightIdNotProdPag ? tC.internalvars.mInsightIdNotProdPag : "";
}
tC.internalvars_5181.initiators.var670();
tC.internalvars_5181_19.listVar.push(670);
tC.internalvars_5181.initiators.var674 = typeof tC.internalvars_5181.initiators.var674 == "function" ? tC.internalvars_5181.initiators.var674 : function() {
    tC.internalvars.xandrConvIdNotPP = tC.internalvars.xandrConvIdNotPP ? tC.internalvars.xandrConvIdNotPP : "";
}
tC.internalvars_5181.initiators.var674();
tC.internalvars_5181_19.listVar.push(674);
tC.internalvars_5181.initiators.var678 = typeof tC.internalvars_5181.initiators.var678 == "function" ? tC.internalvars_5181.initiators.var678 : function() {
    tC.internalvars.xandrSegIdNotPP = tC.internalvars.xandrSegIdNotPP ? tC.internalvars.xandrSegIdNotPP : "";
}
tC.internalvars_5181.initiators.var678();
tC.internalvars_5181_19.listVar.push(678);
tC.internalvars_5181.initiators.var686 = typeof tC.internalvars_5181.initiators.var686 == "function" ? tC.internalvars_5181.initiators.var686 : function() {
    tC.internalvars.ricCartPriceArray = tC.internalvars.ricCartPriceArray ? tC.internalvars.ricCartPriceArray : "";
}
tC.internalvars_5181.initiators.var686();
tC.internalvars_5181_19.listVar.push(686);
tC.internalvars_5181.initiators.var688 = typeof tC.internalvars_5181.initiators.var688 == "function" ? tC.internalvars_5181.initiators.var688 : function() {
    tC.internalvars.ricCartCollectionArray = tC.internalvars.ricCartCollectionArray ? tC.internalvars.ricCartCollectionArray : "";
}
tC.internalvars_5181.initiators.var688();
tC.internalvars_5181_19.listVar.push(688);
tC.internalvars_5181.initiators.var690 = function() {
    tC.internalvars.ricOrderPriceArray = [];
    if (tc_vars["order_items"] !== undefined) {
        for (var i = 0; i < tc_vars["order_items"].length; i++) {
            tC.internalvars.ricOrderPriceArray.push(tc_vars["order_items"][i].order_item_discount_ati)
        }
    }
}
tC.internalvars_5181.initiators.var690();
tC.internalvars_5181_19.listVar.push(690);
tC.internalvars_5181.initiators.var692 = typeof tC.internalvars_5181.initiators.var692 == "function" ? tC.internalvars_5181.initiators.var692 : function() {
    tC.internalvars.orderCollectionArray = tC.internalvars.orderCollectionArray ? tC.internalvars.orderCollectionArray : "";
}
tC.internalvars_5181.initiators.var692();
tC.internalvars_5181_19.listVar.push(692);
tC.internalvars_5181.initiators.var694 = function() {
    tC.internalvars.ricOrderQtyArray = [];
    if (tc_vars["order_items"] !== undefined) {
        for (var i = 0; i < tc_vars["order_items"].length; i++) {
            tC.internalvars.ricOrderQtyArray.push(tc_vars["order_items"][i].order_item_quantity)
        }
    }
}
tC.internalvars_5181.initiators.var694();
tC.internalvars_5181_19.listVar.push(694);
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
tC.internalvars_5181_19.listVar.push(698);
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
tC.internalvars_5181_19.listVar.push(700);
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
tC.internalvars_5181_19.listVar.push(717);
tC.internalvars_5181.initiators.var721 = function() {
    tC.internalvars.getAvailabilityFromString = function() {
        var productSize = tc_vars.product_size;
        var availability;
        for (var i = 0; i < productSize.length; i++) {
            if (productSize[i].StockLevel === 'Available' || productSize[i].StockLevel === 'IsOnlyOneLeft') {
                availability = true;
                break;
            } else {
                availability = false;
            }
        }
        if (availability === true) {
            return "instock";
        } else {
            return "outofstock";
        }
    }
}
tC.internalvars_5181.initiators.var721();
tC.internalvars_5181_19.listVar.push(721);
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
tC.internalvars_5181_19.listVar.push(723);
tC.internalvars_5181.initiators.var730 = function() {
    tC.internalvars.getModifiedString = function(a) {
        if (typeof a === "string") {
            if (a) {
                if (a.toLowerCase() === "jewellery") {
                    return "Jewelry";
                } else {
                    return a;
                }
            } else {
                return "";
            }
        } else {
            return "";
        }
    }
}
tC.internalvars_5181.initiators.var730();
tC.internalvars_5181_19.listVar.push(730);
tC.internalvars_5181.initiators.var750 = function() {
    tC.internalvars.getPersonalization = function(a, b, c) {
        if (typeof a === "boolean") {
            if (a === true) {
                return "Yes";
            }
        }
        if (typeof b === "boolean") {
            if (b === true) {
                return "Yes";
            }
        }
        if (typeof c === "boolean") {
            if (c === true) {
                return "Yes";
            }
        }
        return "No";
    }
}
tC.internalvars_5181.initiators.var750();
tC.internalvars_5181_19.listVar.push(750);
tC.internalvars_5181.initiators.var752 = function() {
    tC.internalvars.getPaymentInfo = function(a, b) {
        tC.internalvars.paymentInfo = ""
        if ((typeof a === "string") && (a !== "")) {
            tC.internalvars.paymentInfo += a;
        }
        if ((typeof b === "string") && (b !== "")) {
            if (tC.internalvars.paymentInfo !== "") {
                tC.internalvars.paymentInfo += " ";
            }
            tC.internalvars.paymentInfo += b;
        }
        return tC.internalvars.paymentInfo;
    }
}
tC.internalvars_5181.initiators.var752();
tC.internalvars_5181_19.listVar.push(752);
tC.internalvars_5181.initiators.var760 = typeof tC.internalvars_5181.initiators.var760 == "function" ? tC.internalvars_5181.initiators.var760 : function() {
    tC.internalvars.envFolder = tC.internalvars.envFolder ? tC.internalvars.envFolder : "";
}
tC.internalvars_5181.initiators.var760();
tC.internalvars_5181_19.listVar.push(760);
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
tC.internalvars_5181_19.listVar.push(764);
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
tC.internalvars_5181_19.listVar.push(771);
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
tC.internalvars_5181_19.listVar.push(797);
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
tC.internalvars_5181_19.listVar.push(799);
tC.internalvars_5181.initiators.var801 = typeof tC.internalvars_5181.initiators.var801 == "function" ? tC.internalvars_5181.initiators.var801 : function() {
    tC.internalvars.ric_envwork_country = tC.internalvars.ric_envwork_country ? tC.internalvars.ric_envwork_country : "";
}
tC.internalvars_5181.initiators.var801();
tC.internalvars_5181_19.listVar.push(801);
tC.internalvars_5181.initiators.var813 = function() {
    tC.internalvars.CookieSetting = '';
    if (typeof tcCategoriesConsent !== "undefined") {
        tC.internalvars.CookieSetting = tcCategoriesConsent;
    } else {
        tC.internalvars.CookieSetting = "NA";
    }
}
tC.internalvars_5181.initiators.var813();
tC.internalvars_5181_19.listVar.push(813);
tC.internalvars_5181.initiators.var819 = typeof tC.internalvars_5181.initiators.var819 == "function" ? tC.internalvars_5181.initiators.var819 : function() {
    tC.internalvars.ric_countrycode_and_languagecode = tC.internalvars.ric_countrycode_and_languagecode ? tC.internalvars.ric_countrycode_and_languagecode : "";
}
tC.internalvars_5181.initiators.var819();
tC.internalvars_5181_19.listVar.push(819);
tC.internalvars_5181.initiators.var821 = typeof tC.internalvars_5181.initiators.var821 == "function" ? tC.internalvars_5181.initiators.var821 : function() {
    tC.internalvars.mediacomCatId = tC.internalvars.mediacomCatId ? tC.internalvars.mediacomCatId : "";
}
tC.internalvars_5181.initiators.var821();
tC.internalvars_5181_19.listVar.push(821);
tC.internalvars_5181.initiators.var827 = typeof tC.internalvars_5181.initiators.var827 == "function" ? tC.internalvars_5181.initiators.var827 : function() {
    tC.internalvars.tc_timestamp = tC.internalvars.tc_timestamp ? tC.internalvars.tc_timestamp : "";
}
tC.internalvars_5181.initiators.var827();
tC.internalvars_5181_19.listVar.push(827);
tC.internalvars_5181.initiators.var829 = typeof tC.internalvars_5181.initiators.var829 == "function" ? tC.internalvars_5181.initiators.var829 : function() {
    tC.internalvars.isOrganicReferrer = tC.internalvars.isOrganicReferrer ? tC.internalvars.isOrganicReferrer : "";
}
tC.internalvars_5181.initiators.var829();
tC.internalvars_5181_19.listVar.push(829);
tC.internalvars_5181.initiators.var831 = typeof tC.internalvars_5181.initiators.var831 == "function" ? tC.internalvars_5181.initiators.var831 : function() {
    tC.internalvars.tc_referrer = tC.internalvars.tc_referrer ? tC.internalvars.tc_referrer : "";
}
tC.internalvars_5181.initiators.var831();
tC.internalvars_5181_19.listVar.push(831);
tC.internalvars_5181.initiators.var833 = typeof tC.internalvars_5181.initiators.var833 == "function" ? tC.internalvars_5181.initiators.var833 : function() {
    tC.internalvars.hrefHasUtmorGclid = tC.internalvars.hrefHasUtmorGclid ? tC.internalvars.hrefHasUtmorGclid : "";
}
tC.internalvars_5181.initiators.var833();
tC.internalvars_5181_19.listVar.push(833);
tC.internalvars_5181.initiators.var835 = typeof tC.internalvars_5181.initiators.var835 == "function" ? tC.internalvars_5181.initiators.var835 : function() {
    tC.internalvars.twitterPixelIdJewelry = tC.internalvars.twitterPixelIdJewelry ? tC.internalvars.twitterPixelIdJewelry : "";
}
tC.internalvars_5181.initiators.var835();
tC.internalvars_5181_19.listVar.push(835);
tC.internalvars_5181.initiators.var849 = typeof tC.internalvars_5181.initiators.var849 == "function" ? tC.internalvars_5181.initiators.var849 : function() {
    tC.internalvars.tc_randomCachebuster = tC.internalvars.tc_randomCachebuster ? tC.internalvars.tc_randomCachebuster : "";
}
tC.internalvars_5181.initiators.var849();
tC.internalvars_5181_19.listVar.push(849);
tC.internalvars_5181.initiators.var851 = function() {
    tC.internalvars.singlePersonalized = function(a, b) {
        if (typeof a === "boolean") {
            if (a === false) {
                return "NA"
            } else {
                if (typeof b === "boolean") {
                    if (b) {
                        return "Yes";
                    }
                    return "No"
                }
                return "No"
            }
        }
        return "NA";
    }
}
tC.internalvars_5181.initiators.var851();
tC.internalvars_5181_19.listVar.push(851);
tC.internalvars_5181.initiators.var853 = function() {
    tC.internalvars.isPersonalizedNA = function(a, b, c, d, e, f) {
        if (typeof a === "boolean" && typeof b === "boolean" && typeof c === "boolean") {
            if (a === false && b === false && c === false) {
                return "NA"
            } else {
                if (typeof d === "boolean") {
                    if (d === true) {
                        return "Yes";
                    }
                }
                if (typeof e === "boolean") {
                    if (e === true) {
                        return "Yes";
                    }
                }
                if (typeof f === "boolean") {
                    if (f === true) {
                        return "Yes";
                    }
                }
                return "No";
            }
        }
        return "NA"
    }
}
tC.internalvars_5181.initiators.var853();
tC.internalvars_5181_19.listVar.push(853);
tC.internalvars_5181.initiators.var871 = function() {
    tC.internalvars.isAdjustedNA = function(a, b) {
        if (typeof a === "boolean") {
            if (a === false) {
                return "NA"
            } else {
                if (b[0] === 3 || b[1] === 3 || b[2] === 3) {
                    return "Yes";
                }
                return "No"
            }
        }
        return "NA";
    }
}
tC.internalvars_5181.initiators.var871();
tC.internalvars_5181_19.listVar.push(871);
tC.internalvars_5181.initiators.var873 = function() {
    tC.internalvars.isEmbossedNA = function(a, b) {
        if (typeof a === "boolean") {
            if (a === false) {
                return "NA"
            } else {
                if (b[0] === 2 || b[1] === 2 || b[2] === 2) {
                    return "Yes";
                }
                return "No"
            }
        }
        return "NA";
    }
}
tC.internalvars_5181.initiators.var873();
tC.internalvars_5181_19.listVar.push(873);
tC.internalvars_5181.initiators.var875 = function() {
    tC.internalvars.isEngravedNA = function(a, b) {
        if (typeof a === "boolean") {
            if (a === false) {
                return "NA"
            } else {
                if (b[0] === 1 || b[1] === 1 || b[2] === 1) {
                    return "Yes";
                }
                return "No"
            }
        }
        return "NA";
    }
}
tC.internalvars_5181.initiators.var875();
tC.internalvars_5181_19.listVar.push(875);
tC.internalvars_5181.initiators.var877 = function() {
    tC.internalvars.isPersonalizedNabis = function(a, b, c, d, e) {
        if (typeof a === "boolean" && typeof b === "boolean" && typeof c === "boolean") {
            if (a === false && b === false && c === false) {
                return "NA"
            } else {
                if (typeof d === "string") {
                    if (d === "Embossing") {
                        return "Yes";
                    }
                }
                if (typeof d === "string") {
                    if (d === "Engraving") {
                        return "Yes";
                    }
                }
                if (typeof e === "string") {
                    if (e === "Yes") {
                        return "Yes";
                    }
                }
                return "No";
            }
        }
        return "NA"
    }
}
tC.internalvars_5181.initiators.var877();
tC.internalvars_5181_19.listVar.push(877);
tC.internalvars_5181.initiators.var881 = typeof tC.internalvars_5181.initiators.var881 == "function" ? tC.internalvars_5181.initiators.var881 : function() {
    tC.internalvars.ricEnvCountryLang = tC.internalvars.ricEnvCountryLang ? tC.internalvars.ricEnvCountryLang : "";
}
tC.internalvars_5181.initiators.var881();
tC.internalvars_5181_19.listVar.push(881);
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
tC.internalvars_5181_19.listVar.push(902);
tC.internalvars_5181.initiators.var914 = typeof tC.internalvars_5181.initiators.var914 == "function" ? tC.internalvars_5181.initiators.var914 : function() {
    tC.internalvars.domain_country_lang = tC.internalvars.domain_country_lang ? tC.internalvars.domain_country_lang : "";
}
tC.internalvars_5181.initiators.var914();
tC.internalvars_5181_19.listVar.push(914);
tC.internalvars_5181.initiators.var916 = function() {
    tC.internalvars.masterSku_event = "";
    if (tc_array_events["defaultMfPartNumber"] !== "") {
        tC.internalvars.masterSku_event = tc_array_events["defaultMfPartNumber"];
    } else {
        tC.internalvars.masterSku_event = tc_array_events["mfPartNumber"];
    }
}
tC.internalvars_5181.initiators.var916();
tC.internalvars_5181_19.listVar.push(916);
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
tC.internalvars_5181_19.listVar.push(922);
tC.internalvars_5181.initiators.var958 = function() {
    tC.internalvars.isPersonalizedNabis2 = function(a, b, c, d) {
        if (typeof a === "boolean" && typeof b === "boolean" && typeof c === "boolean") {
            if (a === false && b === false && c === false) {
                return "NA"
            } else {
                if (typeof d === "object") {
                    if (d[0] === 1 || d[0] === 2 || d[0] === 3) {
                        return "Yes";
                    }
                }
                return "No";
            }
        }
        return "NA"
    }
}
tC.internalvars_5181.initiators.var958();
tC.internalvars_5181_19.listVar.push(958);
tC.internalvars_5181.initiators.var960 = function() {
    tC.internalvars.ricOrderQtyArray = [];
    if (tc_vars["order_items"] !== undefined) {
        for (var i = 0; i < tc_vars["order_items"].length; i++) {
            tC.internalvars.ricOrderQtyArray.push(tc_vars["order_items"][i].order_item_quantity)
        }
    }
}
tC.internalvars_5181.initiators.var960();
tC.internalvars_5181_19.listVar.push(960);
tC.internalvars_5181.initiators.var962 = function() {
    tC.internalvars.cartValue = 0;
    if (tc_vars["cart_items"] !== undefined) {
        for (var i = 0; i < tc_vars["cart_items"].length; i++) {
            tC.internalvars.cartValue += (Number(tc_vars["cart_items"][i].cart_item_unitprice_ati))
        }
    }
}
tC.internalvars_5181.initiators.var962();
tC.internalvars_5181_19.listVar.push(962);
tC.internalvars_5181.initiators.var964 = function() {
    tC.internalvars.internalTraffic = (function() {
        var gtmnetsrc = 'false';
        if (/^.*\.cn$/.test(window.location.hostname) === true) {
            return tC.getCookie("raf_ns");
        }
        if (/^.*cartier.*$/.test(window.location.hostname) === false) {
            return tC.getCookie("raf_ns");
        }
        if (/^staging.*$/.test(window.location.hostname) === true) {
            return tC.getCookie("raf_ns");
        }
        if (/.*\.preprod\..*$/.test(window.location.hostname) === true) {
            return tC.getCookie("raf_ns");
        }
        if (/.*\.yooxbox\..*$/.test(window.location.hostname) === true) {
            return tC.getCookie("raf_ns");
        }
        if (/.*\.integ\.ynap\..*$/.test(window.location.hostname) === true) {
            return tC.getCookie("raf_ns");
        }
        if (/^denali-staging.*$/.test(window.location.hostname) === true) {
            return tC.getCookie("raf_ns");
        }
        if (/^cartiercare\.cartier.*$/.test(window.location.hostname) === true) {
            return tC.getCookie("raf_ns");
        }
        if (tC.getCookie("raf_ns") === '') {
            var dmn = document.domain.split('.');
            if (dmn[dmn.length - 2] == 'com' || dmn[dmn.length - 2] == 'co') {
                var domain = dmn[dmn.length - 3] + "." + dmn[dmn.length - 2] + "." + dmn[dmn.length - 1];
            } else {
                var domain = dmn[dmn.length - 2] + "." + dmn[dmn.length - 1];
            }
            var xhr = new XMLHttpRequest();
            xhr.open('GET', "https://www." + domain + "/gtmnetsrc", false);
            xhr.send();
            gtmnetsrc = (xhr.status == 204) ? 'true' : (xhr.status == 200) ? 'false' : 'false';
            document.cookie = "raf_ns=" + gtmnetsrc + ";path=/;domain=" + domain;
            return gtmnetsrc
        } else {
            return tC.getCookie("raf_ns");
        }
    }
    )();
}
tC.internalvars_5181.initiators.var964();
tC.internalvars_5181_19.listVar.push(964);
tC.internalvars_5181.initiators.var966 = typeof tC.internalvars_5181.initiators.var966 == "function" ? tC.internalvars_5181.initiators.var966 : function() {
    tC.internalvars.ricCartQuantityArray = tC.internalvars.ricCartQuantityArray ? tC.internalvars.ricCartQuantityArray : "";
}
tC.internalvars_5181.initiators.var966();
tC.internalvars_5181_19.listVar.push(966);
tC.internalvars_5181.initiators.var967 = function() {
    tC.internalvars.productSizeSoldout = [];
    for (i = 0; i < tc_vars['product_size'].length; i++) {
        if (tc_vars['product_size'][i].StockLevel == "Soldout") {
            tC.internalvars.productSizeSoldout.push(tc_vars['product_size'][i].SizeId)
        }
    }
    tC.internalvars.productSizeSoldout.join(',');
}
tC.internalvars_5181.initiators.var967();
tC.internalvars_5181_19.listVar.push(967);
tC.internalvars_5181.initiators.var969 = function() {
    tC.internalvars.productSizeIsOnlyOne = [];
    for (i = 0; i < tc_vars['product_size'].length; i++) {
        if (tc_vars['product_size'][i].StockLevel == "IsOnlyOneLeft") {
            tC.internalvars.productSizeIsOnlyOne.push(tc_vars['product_size'][i].SizeId)
        }
    }
    tC.internalvars.productSizeIsOnlyOne.join(',');
}
tC.internalvars_5181.initiators.var969();
tC.internalvars_5181_19.listVar.push(969);
tC.internalvars_5181.initiators.var971 = function() {
    tC.internalvars.productSizeAvailable = [];
    for (i = 0; i < tc_vars['product_size'].length; i++) {
        if (tc_vars['product_size'][i].StockLevel == "Available") {
            tC.internalvars.productSizeAvailable.push(tc_vars['product_size'][i].SizeId)
        }
    }
    tC.internalvars.productSizeAvailable.join(',');
}
tC.internalvars_5181.initiators.var971();
tC.internalvars_5181_19.listVar.push(971);
tC.internalvars_5181.initiators.var977 = typeof tC.internalvars_5181.initiators.var977 == "function" ? tC.internalvars_5181.initiators.var977 : function() {
    tC.internalvars.cartItemsIsEyewear = tC.internalvars.cartItemsIsEyewear ? tC.internalvars.cartItemsIsEyewear : "";
}
tC.internalvars_5181.initiators.var977();
tC.internalvars_5181_19.listVar.push(977);
tC.internalvars_5181.initiators.var979 = typeof tC.internalvars_5181.initiators.var979 == "function" ? tC.internalvars_5181.initiators.var979 : function() {
    tC.internalvars.orderItemIsEyewear = tC.internalvars.orderItemIsEyewear ? tC.internalvars.orderItemIsEyewear : "";
}
tC.internalvars_5181.initiators.var979();
tC.internalvars_5181_19.listVar.push(979);
tC.internalvars_5181.initiators.var990 = typeof tC.internalvars_5181.initiators.var990 == "function" ? tC.internalvars_5181.initiators.var990 : function() {
    tC.internalvars.pguri_GA4 = tC.internalvars.pguri_GA4 ? tC.internalvars.pguri_GA4 : "";
}
tC.internalvars_5181.initiators.var990();
tC.internalvars_5181_19.listVar.push(990);
tC.internalvars_5181.initiators.var992 = typeof tC.internalvars_5181.initiators.var992 == "function" ? tC.internalvars_5181.initiators.var992 : function() {
    tC.internalvars.getTimestampGA4 = tC.internalvars.getTimestampGA4 ? tC.internalvars.getTimestampGA4 : "";
}
tC.internalvars_5181.initiators.var992();
tC.internalvars_5181_19.listVar.push(992);
tC.internalvars_5181.initiators.var994 = typeof tC.internalvars_5181.initiators.var994 == "function" ? tC.internalvars_5181.initiators.var994 : function() {
    tC.internalvars.getSessionId_GA4 = tC.internalvars.getSessionId_GA4 ? tC.internalvars.getSessionId_GA4 : "";
}
tC.internalvars_5181.initiators.var994();
tC.internalvars_5181_19.listVar.push(994);
tC.internalvars_5181.initiators.var998 = typeof tC.internalvars_5181.initiators.var998 == "function" ? tC.internalvars_5181.initiators.var998 : function() {
    tC.internalvars.getTrafficType = tC.internalvars.getTrafficType ? tC.internalvars.getTrafficType : "";
}
tC.internalvars_5181.initiators.var998();
tC.internalvars_5181_19.listVar.push(998);
tC.internalvars_5181.initiators.var1000 = typeof tC.internalvars_5181.initiators.var1000 == "function" ? tC.internalvars_5181.initiators.var1000 : function() {
    tC.internalvars.currency = tC.internalvars.currency ? tC.internalvars.currency : "";
}
tC.internalvars_5181.initiators.var1000();
tC.internalvars_5181_19.listVar.push(1000);
tC.internalvars_5181.initiators.var1002 = typeof tC.internalvars_5181.initiators.var1002 == "function" ? tC.internalvars_5181.initiators.var1002 : function() {
    tC.internalvars.getParameterByName = tC.internalvars.getParameterByName ? tC.internalvars.getParameterByName : "";
}
tC.internalvars_5181.initiators.var1002();
tC.internalvars_5181_19.listVar.push(1002);
tC.internalvars_5181.initiators.var1006 = typeof tC.internalvars_5181.initiators.var1006 == "function" ? tC.internalvars_5181.initiators.var1006 : function() {
    tC.internalvars.checkoutShippingMeth = tC.internalvars.checkoutShippingMeth ? tC.internalvars.checkoutShippingMeth : "";
}
tC.internalvars_5181.initiators.var1006();
tC.internalvars_5181_19.listVar.push(1006);
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
tC.internalvars_5181_19.listVar.push(1007);
tC.internalvars_5181.initiators.var1023 = typeof tC.internalvars_5181.initiators.var1023 == "function" ? tC.internalvars_5181.initiators.var1023 : function() {
    tC.internalvars.pgURI_opc_car_GA4 = tC.internalvars.pgURI_opc_car_GA4 ? tC.internalvars.pgURI_opc_car_GA4 : "";
}
tC.internalvars_5181.initiators.var1023();
tC.internalvars_5181_19.listVar.push(1023);
tC.internalvars_5181.initiators.var1025 = typeof tC.internalvars_5181.initiators.var1025 == "function" ? tC.internalvars_5181.initiators.var1025 : function() {
    tC.internalvars.getPlpDictionaryName = tC.internalvars.getPlpDictionaryName ? tC.internalvars.getPlpDictionaryName : "";
}
tC.internalvars_5181.initiators.var1025();
tC.internalvars_5181_19.listVar.push(1025);
tC.internalvars_5181.initiators.var1027 = function() {
    tC.internalvars.content_square_integration = function() {
        var version = "1.11.0";
        function callback() {
            if (!disableCallback) {
                disableCallback = true;
                if (window.CS_CONF) {
                    CS_CONF.integrations = CS_CONF.integrations || [];
                    CS_CONF.integrations.push("Google Analytics - v" + version);
                }
            }
        }
        var disableCallback = false;
        window._uxa = window._uxa || [];
        _uxa.push(["afterPageView", callback]);
        var cmk = null;
        var cn = "_cs_mk_ga";
        function init(cookieValue) {
            if (cookieValue) {
                cmk = cookieValue;
            } else {
                cmk = Math.random() + "_" + Date.now();
                var tld = (function() {
                    var i = 0
                      , domain = document.domain
                      , p = domain.split(".")
                      , s = "_cs_tld" + new Date().getTime();
                    while (i < p.length - 1 && document.cookie.indexOf(s + "=" + s) == -1) {
                        domain = p.slice(-1 - ++i).join(".");
                        document.cookie = s + "=" + s + ";domain=" + domain + ";SameSite=None;Secure";
                    }
                    document.cookie = s + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + domain + ";";
                    return domain;
                }
                )();
                var now = new Date();
                var time = now.getTime();
                time += 30 * 60 * 1000;
                now.setTime(time);
                document.cookie = cn + "=" + cmk + "; expires=" + now.toUTCString() + ";path=/;domain=" + tld + ";SameSite=None;Secure";
            }
            _uxa.push(["trackDynamicVariable", {
                key: "csMatchingKey",
                value: cmk
            }]);
        }
        var cookies = "; " + document.cookie;
        if (cookies) {
            var getCookie = cookies.split("; " + cn + "=");
            if (getCookie.length == 1) {
                init();
            } else {
                var cookieValue = getCookie[1].split(";")[0];
                init(cookieValue);
            }
        }
        if (cmk) {
            return cmk;
        }
    }
    ;
}
tC.internalvars_5181.initiators.var1027();
tC.internalvars_5181_19.listVar.push(1027);
tC.internalvars_5181.initiators.var1036 = function() {
    tC.internalvars.IdAndName = "";
    if (tc_vars["product_mfPartNumber"] !== "" || tc_vars["product_eng_title"] !== "") {
        tC.internalvars.IdAndName = tc_vars["product_mfPartNumber"] + "-" + tc_vars["product_eng_title"];
    }
}
tC.internalvars_5181.initiators.var1036();
tC.internalvars_5181_19.listVar.push(1036);
tC.internalvars_5181.initiators.var1040 = function() {
    tC.internalvars.amItester = "false";
    if (tC.getCookie("raf_pat") !== "") {
        tC.internalvars.amItester = "true";
    } else {
        var expr = document.location.search.toLowerCase();
        if (expr.indexOf('orgn=pat') !== -1) {
            tC.setCookie("raf_pat", "1");
            tC.internalvars.amItester = "true";
        }
    }
}
tC.internalvars_5181.initiators.var1040();
tC.internalvars_5181_19.listVar.push(1040);
tC.internalvars_5181.initiators.var1045 = typeof tC.internalvars_5181.initiators.var1045 == "function" ? tC.internalvars_5181.initiators.var1045 : function() {
    tC.internalvars.tiktokKeringId = tC.internalvars.tiktokKeringId ? tC.internalvars.tiktokKeringId : "";
}
tC.internalvars_5181.initiators.var1045();
tC.internalvars_5181_19.listVar.push(1045);
tC.internalvars_5181.initiators.var1046 = function() {
    tC.internalvars.snapchatKeringId = "fb5a3aad-fbff-45e0-82bd-8b717f7be3a9";
}
tC.internalvars_5181.initiators.var1046();
tC.internalvars_5181_19.listVar.push(1046);
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
tC.internalvars_5181_19.listVar.push(249);
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
tC.internalvars_5181_19.listVar.push(345);
tC.internalvars_5181.initiators.var365 = function() {
    tC.internalvars.GA_step_OPC = "";
    switch (tc_vars["nav_stepName"]) {
    case "CheckMail":
        tC.internalvars.GA_step_OPC = "2";
        break;
    case "ShippingAddress":
        tC.internalvars.GA_step_OPC = "3";
        break;
    case "Payment":
        tC.internalvars.GA_step_OPC = "4";
        break;
    case "Finalization":
        tC.internalvars.GA_step_OPC = "5";
        break;
    case "Thankyou":
        tC.internalvars.GA_step_OPC = "6";
        break;
    case "DeliveryMethod":
        tC.internalvars.GA_step_OPC = "3.5";
        break;
    default:
        tC.internalvars.GA_step_OPC = "";
        break;
    }
}
tC.internalvars_5181.initiators.var365();
tC.internalvars_5181_19.listVar.push(365);
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
tC.internalvars_5181_19.listVar.push(380);
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
tC.internalvars_5181_19.listVar.push(476);
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
tC.internalvars_5181_19.listVar.push(478);
tC.internalvars_5181.initiators.var504 = typeof tC.internalvars_5181.initiators.var504 == "function" ? tC.internalvars_5181.initiators.var504 : function() {
    tC.internalvars.ricBrandlockJSID = tC.internalvars.ricBrandlockJSID ? tC.internalvars.ricBrandlockJSID : "";
}
tC.internalvars_5181.initiators.var504();
tC.internalvars_5181_19.listVar.push(504);
tC.internalvars_5181.initiators.var506 = typeof tC.internalvars_5181.initiators.var506 == "function" ? tC.internalvars_5181.initiators.var506 : function() {
    tC.internalvars.ricBrandlockID = tC.internalvars.ricBrandlockID ? tC.internalvars.ricBrandlockID : "";
}
tC.internalvars_5181.initiators.var506();
tC.internalvars_5181_19.listVar.push(506);
tC.internalvars_5181.initiators.var516 = typeof tC.internalvars_5181.initiators.var516 == "function" ? tC.internalvars_5181.initiators.var516 : function() {
    tC.internalvars.btqPickupCountry = tC.internalvars.btqPickupCountry ? tC.internalvars.btqPickupCountry : "";
}
tC.internalvars_5181.initiators.var516();
tC.internalvars_5181_19.listVar.push(516);
tC.internalvars_5181.initiators.var524 = typeof tC.internalvars_5181.initiators.var524 == "function" ? tC.internalvars_5181.initiators.var524 : function() {
    tC.internalvars.ricMedalliaSiteID = tC.internalvars.ricMedalliaSiteID ? tC.internalvars.ricMedalliaSiteID : "";
}
tC.internalvars_5181.initiators.var524();
tC.internalvars_5181_19.listVar.push(524);
tC.internalvars_5181.initiators.var526 = typeof tC.internalvars_5181.initiators.var526 == "function" ? tC.internalvars_5181.initiators.var526 : function() {
    tC.internalvars.ricSprinklrID = tC.internalvars.ricSprinklrID ? tC.internalvars.ricSprinklrID : "";
}
tC.internalvars_5181.initiators.var526();
tC.internalvars_5181_19.listVar.push(526);
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
tC.internalvars_5181_19.listVar.push(528);
tC.internalvars_5181.initiators.var592 = typeof tC.internalvars_5181.initiators.var592 == "function" ? tC.internalvars_5181.initiators.var592 : function() {
    tC.internalvars.dcmId = tC.internalvars.dcmId ? tC.internalvars.dcmId : "";
}
tC.internalvars_5181.initiators.var592();
tC.internalvars_5181_19.listVar.push(592);
tC.internalvars_5181.initiators.var596 = typeof tC.internalvars_5181.initiators.var596 == "function" ? tC.internalvars_5181.initiators.var596 : function() {
    tC.internalvars.twitterPixelId = tC.internalvars.twitterPixelId ? tC.internalvars.twitterPixelId : "";
}
tC.internalvars_5181.initiators.var596();
tC.internalvars_5181_19.listVar.push(596);
tC.internalvars_5181.initiators.var604 = typeof tC.internalvars_5181.initiators.var604 == "function" ? tC.internalvars_5181.initiators.var604 : function() {
    tC.internalvars.snapchatId = tC.internalvars.snapchatId ? tC.internalvars.snapchatId : "";
}
tC.internalvars_5181.initiators.var604();
tC.internalvars_5181_19.listVar.push(604);
tC.internalvars_5181.initiators.var610 = typeof tC.internalvars_5181.initiators.var610 == "function" ? tC.internalvars_5181.initiators.var610 : function() {
    tC.internalvars.mobkoiCategoryId = tC.internalvars.mobkoiCategoryId ? tC.internalvars.mobkoiCategoryId : "";
}
tC.internalvars_5181.initiators.var610();
tC.internalvars_5181_19.listVar.push(610);
tC.internalvars_5181.initiators.var612 = typeof tC.internalvars_5181.initiators.var612 == "function" ? tC.internalvars_5181.initiators.var612 : function() {
    tC.internalvars.dbmSourceId = tC.internalvars.dbmSourceId ? tC.internalvars.dbmSourceId : "";
}
tC.internalvars_5181.initiators.var612();
tC.internalvars_5181_19.listVar.push(612);
tC.internalvars_5181.initiators.var614 = typeof tC.internalvars_5181.initiators.var614 == "function" ? tC.internalvars_5181.initiators.var614 : function() {
    tC.internalvars.dbmCategoryId = tC.internalvars.dbmCategoryId ? tC.internalvars.dbmCategoryId : "";
}
tC.internalvars_5181.initiators.var614();
tC.internalvars_5181_19.listVar.push(614);
tC.internalvars_5181.initiators.var618 = typeof tC.internalvars_5181.initiators.var618 == "function" ? tC.internalvars_5181.initiators.var618 : function() {
    tC.internalvars.sa360FunnelCatId = tC.internalvars.sa360FunnelCatId ? tC.internalvars.sa360FunnelCatId : "";
}
tC.internalvars_5181.initiators.var618();
tC.internalvars_5181_19.listVar.push(618);
tC.internalvars_5181.initiators.var656 = typeof tC.internalvars_5181.initiators.var656 == "function" ? tC.internalvars_5181.initiators.var656 : function() {
    tC.internalvars.pinterestTagId = tC.internalvars.pinterestTagId ? tC.internalvars.pinterestTagId : "";
}
tC.internalvars_5181.initiators.var656();
tC.internalvars_5181_19.listVar.push(656);
tC.internalvars_5181.initiators.var672 = typeof tC.internalvars_5181.initiators.var672 == "function" ? tC.internalvars_5181.initiators.var672 : function() {
    tC.internalvars.mInsightId = tC.internalvars.mInsightId ? tC.internalvars.mInsightId : "";
}
tC.internalvars_5181.initiators.var672();
tC.internalvars_5181_19.listVar.push(672);
tC.internalvars_5181.initiators.var676 = typeof tC.internalvars_5181.initiators.var676 == "function" ? tC.internalvars_5181.initiators.var676 : function() {
    tC.internalvars.xandrConvId = tC.internalvars.xandrConvId ? tC.internalvars.xandrConvId : "";
}
tC.internalvars_5181.initiators.var676();
tC.internalvars_5181_19.listVar.push(676);
tC.internalvars_5181.initiators.var680 = typeof tC.internalvars_5181.initiators.var680 == "function" ? tC.internalvars_5181.initiators.var680 : function() {
    tC.internalvars.xandrSegId = tC.internalvars.xandrSegId ? tC.internalvars.xandrSegId : "";
}
tC.internalvars_5181.initiators.var680();
tC.internalvars_5181_19.listVar.push(680);
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
tC.internalvars_5181_19.listVar.push(719);
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
tC.internalvars_5181_19.listVar.push(725);
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
tC.internalvars_5181_19.listVar.push(748);
tC.internalvars_5181.initiators.var756 = typeof tC.internalvars_5181.initiators.var756 == "function" ? tC.internalvars_5181.initiators.var756 : function() {
    tC.internalvars.cybbaID = tC.internalvars.cybbaID ? tC.internalvars.cybbaID : "";
}
tC.internalvars_5181.initiators.var756();
tC.internalvars_5181_19.listVar.push(756);
tC.internalvars_5181.initiators.var758 = typeof tC.internalvars_5181.initiators.var758 == "function" ? tC.internalvars_5181.initiators.var758 : function() {
    tC.internalvars.HeroID = tC.internalvars.HeroID ? tC.internalvars.HeroID : "";
}
tC.internalvars_5181.initiators.var758();
tC.internalvars_5181_19.listVar.push(758);
tC.internalvars_5181.initiators.var766 = typeof tC.internalvars_5181.initiators.var766 == "function" ? tC.internalvars_5181.initiators.var766 : function() {
    tC.internalvars.ric_pepperjam_id = tC.internalvars.ric_pepperjam_id ? tC.internalvars.ric_pepperjam_id : "";
}
tC.internalvars_5181.initiators.var766();
tC.internalvars_5181_19.listVar.push(766);
tC.internalvars_5181.initiators.var817 = typeof tC.internalvars_5181.initiators.var817 == "function" ? tC.internalvars_5181.initiators.var817 : function() {
    tC.internalvars.ricfreespeeid = tC.internalvars.ricfreespeeid ? tC.internalvars.ricfreespeeid : "";
}
tC.internalvars_5181.initiators.var817();
tC.internalvars_5181_19.listVar.push(817);
tC.internalvars_5181.initiators.var823 = typeof tC.internalvars_5181.initiators.var823 == "function" ? tC.internalvars_5181.initiators.var823 : function() {
    tC.internalvars.minsightServer = tC.internalvars.minsightServer ? tC.internalvars.minsightServer : "";
}
tC.internalvars_5181.initiators.var823();
tC.internalvars_5181_19.listVar.push(823);
tC.internalvars_5181.initiators.var825 = typeof tC.internalvars_5181.initiators.var825 == "function" ? tC.internalvars_5181.initiators.var825 : function() {
    tC.internalvars.mInsightAddToCartID = tC.internalvars.mInsightAddToCartID ? tC.internalvars.mInsightAddToCartID : "";
}
tC.internalvars_5181.initiators.var825();
tC.internalvars_5181_19.listVar.push(825);
tC.internalvars_5181.initiators.var837 = typeof tC.internalvars_5181.initiators.var837 == "function" ? tC.internalvars_5181.initiators.var837 : function() {
    tC.internalvars.ric_salesforceID = tC.internalvars.ric_salesforceID ? tC.internalvars.ric_salesforceID : "";
}
tC.internalvars_5181.initiators.var837();
tC.internalvars_5181_19.listVar.push(837);
tC.internalvars_5181.initiators.var839 = typeof tC.internalvars_5181.initiators.var839 == "function" ? tC.internalvars_5181.initiators.var839 : function() {
    tC.internalvars.ric_salesforceEnv = tC.internalvars.ric_salesforceEnv ? tC.internalvars.ric_salesforceEnv : "";
}
tC.internalvars_5181.initiators.var839();
tC.internalvars_5181_19.listVar.push(839);
tC.internalvars_5181.initiators.var841 = typeof tC.internalvars_5181.initiators.var841 == "function" ? tC.internalvars_5181.initiators.var841 : function() {
    tC.internalvars.ric_salesforceEnv2 = tC.internalvars.ric_salesforceEnv2 ? tC.internalvars.ric_salesforceEnv2 : "";
}
tC.internalvars_5181.initiators.var841();
tC.internalvars_5181_19.listVar.push(841);
tC.internalvars_5181.initiators.var843 = typeof tC.internalvars_5181.initiators.var843 == "function" ? tC.internalvars_5181.initiators.var843 : function() {
    tC.internalvars.ric_salesforceGslURL = tC.internalvars.ric_salesforceGslURL ? tC.internalvars.ric_salesforceGslURL : "";
}
tC.internalvars_5181.initiators.var843();
tC.internalvars_5181_19.listVar.push(843);
tC.internalvars_5181.initiators.var845 = typeof tC.internalvars_5181.initiators.var845 == "function" ? tC.internalvars_5181.initiators.var845 : function() {
    tC.internalvars.ric_SalesforceDepID = tC.internalvars.ric_SalesforceDepID ? tC.internalvars.ric_SalesforceDepID : "";
}
tC.internalvars_5181.initiators.var845();
tC.internalvars_5181_19.listVar.push(845);
tC.internalvars_5181.initiators.var847 = typeof tC.internalvars_5181.initiators.var847 == "function" ? tC.internalvars_5181.initiators.var847 : function() {
    tC.internalvars.ric_salesforceAGURL = tC.internalvars.ric_salesforceAGURL ? tC.internalvars.ric_salesforceAGURL : "";
}
tC.internalvars_5181.initiators.var847();
tC.internalvars_5181_19.listVar.push(847);
tC.internalvars_5181.initiators.var883 = typeof tC.internalvars_5181.initiators.var883 == "function" ? tC.internalvars_5181.initiators.var883 : function() {
    tC.internalvars.ric_salesforcelanguage = tC.internalvars.ric_salesforcelanguage ? tC.internalvars.ric_salesforcelanguage : "";
}
tC.internalvars_5181.initiators.var883();
tC.internalvars_5181_19.listVar.push(883);
tC.internalvars_5181.initiators.var885 = typeof tC.internalvars_5181.initiators.var885 == "function" ? tC.internalvars_5181.initiators.var885 : function() {
    tC.internalvars.ric_sfdefaultmintext = tC.internalvars.ric_sfdefaultmintext ? tC.internalvars.ric_sfdefaultmintext : "";
}
tC.internalvars_5181.initiators.var885();
tC.internalvars_5181_19.listVar.push(885);
tC.internalvars_5181.initiators.var887 = typeof tC.internalvars_5181.initiators.var887 == "function" ? tC.internalvars_5181.initiators.var887 : function() {
    tC.internalvars.ric_sfdismint = tC.internalvars.ric_sfdismint ? tC.internalvars.ric_sfdismint : "";
}
tC.internalvars_5181.initiators.var887();
tC.internalvars_5181_19.listVar.push(887);
tC.internalvars_5181.initiators.var889 = typeof tC.internalvars_5181.initiators.var889 == "function" ? tC.internalvars_5181.initiators.var889 : function() {
    tC.internalvars.ric_sfCountryID = tC.internalvars.ric_sfCountryID ? tC.internalvars.ric_sfCountryID : "";
}
tC.internalvars_5181.initiators.var889();
tC.internalvars_5181_19.listVar.push(889);
tC.internalvars_5181.initiators.var891 = typeof tC.internalvars_5181.initiators.var891 == "function" ? tC.internalvars_5181.initiators.var891 : function() {
    tC.internalvars.ric_sfRICCRC_chat = tC.internalvars.ric_sfRICCRC_chat ? tC.internalvars.ric_sfRICCRC_chat : "";
}
tC.internalvars_5181.initiators.var891();
tC.internalvars_5181_19.listVar.push(891);
tC.internalvars_5181.initiators.var893 = typeof tC.internalvars_5181.initiators.var893 == "function" ? tC.internalvars_5181.initiators.var893 : function() {
    tC.internalvars.ric_sfLiveAgentDev = tC.internalvars.ric_sfLiveAgentDev ? tC.internalvars.ric_sfLiveAgentDev : "";
}
tC.internalvars_5181.initiators.var893();
tC.internalvars_5181_19.listVar.push(893);
tC.internalvars_5181.initiators.var895 = typeof tC.internalvars_5181.initiators.var895 == "function" ? tC.internalvars_5181.initiators.var895 : function() {
    tC.internalvars.ric_sfTextLeave = tC.internalvars.ric_sfTextLeave ? tC.internalvars.ric_sfTextLeave : "";
}
tC.internalvars_5181.initiators.var895();
tC.internalvars_5181_19.listVar.push(895);
tC.internalvars_5181.initiators.var897 = typeof tC.internalvars_5181.initiators.var897 == "function" ? tC.internalvars_5181.initiators.var897 : function() {
    tC.internalvars.ric_sfTextStart = tC.internalvars.ric_sfTextStart ? tC.internalvars.ric_sfTextStart : "";
}
tC.internalvars_5181.initiators.var897();
tC.internalvars_5181_19.listVar.push(897);
tC.internalvars_5181.initiators.var912 = typeof tC.internalvars_5181.initiators.var912 == "function" ? tC.internalvars_5181.initiators.var912 : function() {
    tC.internalvars.ric_sf_text_gotit = tC.internalvars.ric_sf_text_gotit ? tC.internalvars.ric_sf_text_gotit : "";
}
tC.internalvars_5181.initiators.var912();
tC.internalvars_5181_19.listVar.push(912);
tC.internalvars_5181.initiators.var913 = typeof tC.internalvars_5181.initiators.var913 == "function" ? tC.internalvars_5181.initiators.var913 : function() {
    tC.internalvars.ric_sf_loading_text = tC.internalvars.ric_sf_loading_text ? tC.internalvars.ric_sf_loading_text : "";
}
tC.internalvars_5181.initiators.var913();
tC.internalvars_5181_19.listVar.push(913);
tC.internalvars_5181.initiators.var924 = typeof tC.internalvars_5181.initiators.var924 == "function" ? tC.internalvars_5181.initiators.var924 : function() {
    tC.internalvars.ric_Partnerize_id = tC.internalvars.ric_Partnerize_id ? tC.internalvars.ric_Partnerize_id : "";
}
tC.internalvars_5181.initiators.var924();
tC.internalvars_5181_19.listVar.push(924);
tC.internalvars_5181.initiators.var957 = typeof tC.internalvars_5181.initiators.var957 == "function" ? tC.internalvars_5181.initiators.var957 : function() {
    tC.internalvars.tiktokId = tC.internalvars.tiktokId ? tC.internalvars.tiktokId : "";
}
tC.internalvars_5181.initiators.var957();
tC.internalvars_5181_19.listVar.push(957);
tC.internalvars_5181.initiators.var973 = typeof tC.internalvars_5181.initiators.var973 == "function" ? tC.internalvars_5181.initiators.var973 : function() {
    tC.internalvars.countryInPinterestScope = tC.internalvars.countryInPinterestScope ? tC.internalvars.countryInPinterestScope : "";
}
tC.internalvars_5181.initiators.var973();
tC.internalvars_5181_19.listVar.push(973);
tC.internalvars_5181.initiators.var975 = typeof tC.internalvars_5181.initiators.var975 == "function" ? tC.internalvars_5181.initiators.var975 : function() {
    tC.internalvars.facebookKeringCountryScope = tC.internalvars.facebookKeringCountryScope ? tC.internalvars.facebookKeringCountryScope : "";
}
tC.internalvars_5181.initiators.var975();
tC.internalvars_5181_19.listVar.push(975);
tC.internalvars_5181.initiators.var1032 = typeof tC.internalvars_5181.initiators.var1032 == "function" ? tC.internalvars_5181.initiators.var1032 : function() {
    tC.internalvars.DV360LandingPageFR = tC.internalvars.DV360LandingPageFR ? tC.internalvars.DV360LandingPageFR : "";
}
tC.internalvars_5181.initiators.var1032();
tC.internalvars_5181_19.listVar.push(1032);
tC.internalvars_5181.initiators.var1037 = typeof tC.internalvars_5181.initiators.var1037 == "function" ? tC.internalvars_5181.initiators.var1037 : function() {
    tC.internalvars.dv360_adv_id = tC.internalvars.dv360_adv_id ? tC.internalvars.dv360_adv_id : "";
}
tC.internalvars_5181.initiators.var1037();
tC.internalvars_5181_19.listVar.push(1037);
tC.internalvars_5181.initiators.var1038 = typeof tC.internalvars_5181.initiators.var1038 == "function" ? tC.internalvars_5181.initiators.var1038 : function() {
    tC.internalvars.dv360_countingMethod = tC.internalvars.dv360_countingMethod ? tC.internalvars.dv360_countingMethod : "";
}
tC.internalvars_5181.initiators.var1038();
tC.internalvars_5181_19.listVar.push(1038);
tC.internalvars_5181.initiators.var1039 = typeof tC.internalvars_5181.initiators.var1039 == "function" ? tC.internalvars_5181.initiators.var1039 : function() {
    tC.internalvars.dv360_activityTagString = tC.internalvars.dv360_activityTagString ? tC.internalvars.dv360_activityTagString : "";
}
tC.internalvars_5181.initiators.var1039();
tC.internalvars_5181_19.listVar.push(1039);
tC.internalvars_5181.initiators.var1044 = typeof tC.internalvars_5181.initiators.var1044 == "function" ? tC.internalvars_5181.initiators.var1044 : function() {
    tC.internalvars.tiktokKeringCountryScope = tC.internalvars.tiktokKeringCountryScope ? tC.internalvars.tiktokKeringCountryScope : "";
}
tC.internalvars_5181.initiators.var1044();
tC.internalvars_5181_19.listVar.push(1044);
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
tC.internalvars_5181_19.listVar.push(1047);
/*END_VARIABLES_BLOCK*/

/*DYNAMIC JS BLOCK 2*/

/*END DYNAMIC JS BLOCK 2*/

/*CUSTOM_JS_BLOCK2*/
if (typeof jQuery !== "undefined") {
    jQuery(document).ready(function() {
        (function() {
            tC.log("TagCommander: Scroll listener initialized...");
            var lastKnownScrollPosition = 0;
            var ticking = false;
            var scrollReached25 = false;
            var scrollReached50 = false;
            var scrollReached75 = false;
            var scrollReached100 = false;
            var $container = document.querySelector("body");
            var process = function(scrollPosition) {
                if ($container) {
                    var scrollPositionInPercent = (scrollPosition * 100) / ($container.clientHeight - document.documentElement.clientHeight);
                    if (scrollPositionInPercent >= 25 && !scrollReached25) {
                        scrollReached25 = true;
                        if (typeof window.tc_events_19 !== "undefined") {
                            window.tc_events_19(this, "pg_scroll_25", {});
                        }
                    }
                    if (scrollPositionInPercent >= 50 && !scrollReached50) {
                        scrollReached50 = true;
                        if (typeof window.tc_events_19 !== "undefined") {
                            window.tc_events_19(this, "pg_scroll_50", {});
                        }
                    }
                    if (scrollPositionInPercent >= 75 && !scrollReached75) {
                        scrollReached75 = true;
                        if (typeof window.tc_events_19 !== "undefined") {
                            window.tc_events_19(this, "pg_scroll_75", {});
                        }
                    }
                    if (scrollPositionInPercent >= 95 && !scrollReached100) {
                        scrollReached100 = true;
                        if (typeof window.tc_events_19 !== "undefined") {
                            window.tc_events_19(this, "pg_scroll_100", {});
                        }
                    }
                }
            };
            window.addEventListener("scroll", function(e) {
                lastKnownScrollPosition = window.scrollY;
                if (!ticking) {
                    window.requestAnimationFrame(function() {
                        process(lastKnownScrollPosition);
                        ticking = false;
                    });
                    ticking = true;
                }
            });
            tC.log("TagCommander: Scroll listener loaded!");
        }
        )();
    });
} else {
    tC.log("jQuery is not defined!!!");
}
/*END_CUSTOM_JS_BLOCK2*/
tC.container_5181_19.datastorage();

//----------------------------------------------------

//----

if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('63')) {
        if (tC.internalvars.amItester == 'false') {
            tC.launchTag(63, 'Universal - Start', 1503, 5181, 19, 10);
            (function(i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function() {
                    (i[r].q = i[r].q || []).push(arguments)
                }
                ,
                i[r].l = 1 * new Date();
                a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            }
            )(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
            if (tc_vars.env_work === 'prod') {
                ga('create', tC.internalvars.GA_UA, {
                    'allowLinker': true,
                    'userId': tC.internalFunctions.SHA256.SHA256(tc_vars["user_externalidentifier"]),
                    'siteSpeedSampleRate': 100
                });
            } else {
                ga('create', tC.internalvars.GA_UA, {
                    'allowLinker': true
                });
            }
            ga('require', 'linker');
            ga('linker:autoLink', ['cartier.com', 'cartier.co.uk', 'cartier.sg', 'cartier.us', 'cartier.com.br', 'cartier.mx', 'cartier.fr', 'cartier.de', 'cartier.es', 'cartier.it', 'cartier.ch', 'cartier.jp', 'cartier.cn', 'cartier.hk', 'cartier.co.kr', 'cartier.ae', 'cartier.eu', 'cartier.myvtex.com', 'cartier.vtexcommercestable.com.br', 'cartier.com.au']);
            ga('require', 'ec');
            ga('set', 'anonymizeIp', true);
            ga('set', 'allowAdFeatures', tC.internalvars.getCategoryIdConsent(6));
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('75')) {
        if (tC.internalvars.amItester == 'false') {
            if (tc_vars["nav_pagetype"] != 'thankyou') {
                if (tc_vars["nav_pagetype"] != 'cart') {
                    if (tc_vars["nav_pagetype"] != 'confirmation') {
                        tC.launchTag(75, 'Universal - Content Grouping', 26, 5181, 19, 10);
                        if (typeof ga != "undefined") {
                            ga('set', 'contentGroup1', tc_vars["rcms_cgGroup"]);
                            ga('set', 'contentGroup2', tc_vars["msn_cgGroup"]);
                            ga('set', 'contentGroup3', tc_vars["emerch_cgGroup"]);
                            ga('set', 'contentGroup4', tC.internalvars.GA_contentgroup1.toLowerCase());
                            ga('set', 'contentGroup5', tC.internalvars.GA_contentgroup2.toLowerCase());
                        }
                    }
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('79')) {
        if (tC.internalvars.amItester == 'false') {
            tC.launchTag(79, 'Universal - Dimension', 1503, 5181, 19, 10);
            if (typeof ga != "undefined") {
                tC.internalvars.experimentVersion = "";
                for (tC.internalvars.tcloopi = 0; tC.internalvars.tcloopi < tc_vars["abtests"].length; tC.internalvars.tcloopi++) {
                    for (var property in tc_vars["abtests"][tC.internalvars.tcloopi]) {
                        if (tC.internalvars.experimentVersion === "") {
                            tC.internalvars.experimentVersion += tc_vars["abtests"][tC.internalvars.tcloopi][property];
                        } else {
                            tC.internalvars.experimentVersion += "_" + tc_vars["abtests"][tC.internalvars.tcloopi][property];
                        }
                    }
                }
                ga('set', 'dimension1', tC.internalvars.userLogged);
                ga('set', 'dimension4', '');
                ga('set', 'dimension5', '');
                ga('set', 'dimension6', '');
                ga('set', 'dimension7', tc_vars["nav_countryCode"]);
                ga('set', 'dimension8', tc_vars["nav_languageCode"]);
                ga('set', 'dimension11', "tc_" + tC.containersLaunched["5181"]["19"]["v"]);
                ga('set', 'dimension12', '');
                ga('set', 'dimension14', tC.internalvars.getSizmekId());
                ga('set', 'dimension19', tC.internalvars.getBooleanToString(tc_vars["order_delivery_date_selected"]));
                ga('set', 'dimension24', tC.internalvars.getPaymentInfo(tc_vars.order_PaymentType, tc_vars.order_card_name));
                ga('set', 'dimension25', tc_vars["order_DeliveryType"]);
                ga('set', 'dimension26', (typeof tc_vars["nav_currency"] !== "undefined") ? tc_vars["nav_currency"].toString().toUpperCase() : "");
                ga('set', 'dimension28', (typeof tc_vars["order_billing_country"] !== "undefined") ? tc_vars["order_billing_country"].toString().toLowerCase() : "");
                ga('set', 'dimension29', (typeof tc_vars["order_shipping_country"] !== "undefined") ? tc_vars["order_shipping_country"].toString().toLowerCase() : "");
                ga('set', 'dimension41', '');
                ga('set', 'dimension49', tC.internalvars.getClientId());
                ga('set', 'dimension51', tC.internalvars.internalTraffic);
                ga('set', 'dimension52', tC.internalvars.getSessionId());
                ga('set', 'dimension53', "NA");
                ga('set', 'dimension54', tC.internalvars.getTimestamp());
                ga('set', 'dimension65', tC.internalvars.tc_url);
                ga('set', 'dimension70', navigator.userAgent);
                ga('set', 'dimension71', tC.internalvars.CookieSetting);
                ga('set', 'dimension78', "YNAP");
                ga('set', 'dimension73', Math.round(window.devicePixelRatio * 100) / 100);
                ga('set', 'dimension83', tC.internalvars.checkTransaction);
                if (tc_vars["nav_countryCode"] == "GB") {
                    ga('set', 'dimension102', tC.internalvars.content_square_integration());
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('621')) {
        if (tC.internalvars.amItester == 'false') {
            tC.launchTag(621, 'Universal - Dimension consent Analytics', 26, 5181, 19, 10);
            if (typeof ga != "undefined") {
                tC.internalvars.experimentVersion = "";
                for (tC.internalvars.tcloopi = 0; tC.internalvars.tcloopi < tc_vars["abtests"].length; tC.internalvars.tcloopi++) {
                    for (var property in tc_vars["abtests"][tC.internalvars.tcloopi]) {
                        if (tC.internalvars.experimentVersion === "") {
                            tC.internalvars.experimentVersion += tc_vars["abtests"][tC.internalvars.tcloopi][property];
                        } else {
                            tC.internalvars.experimentVersion += "_" + tc_vars["abtests"][tC.internalvars.tcloopi][property];
                        }
                    }
                }
                ga('set', 'dimension53', tC.internalFunctions.SHA256.SHA256(tc_vars["user_externalidentifier"]));
                ga('set', 'dimension69', tc_vars["sfmc_id"]);
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('81')) {
        if ((((tc_vars.nav_pagetype === "onepagecheckout") && (tc_vars.env_template === "thankyou")) || (tc_vars.nav_pagetype === "CheckoutPayPalExpress.Thankyou") || ((tc_vars.nav_pagetype === "thankyou") && (tc_vars.env_template === "CheckoutOPC")) || ((tc_vars.nav_pagetype === "CheckoutPayPalExpress.ThankYou") && (tc_vars.env_template === "genericpage")) || ((tc_vars.nav_pagetype === "thankyou") && (tc_vars.env_template === "genericpage")))) {
            if (tC.internalvars.amItester == 'false') {
                if (tC.internalvars.isOrderIdValid == 'true') {
                    tC.launchTag(81, 'Universal - eCE - Conversion', 1477, 5181, 19, 10);
                    tC.log("TAG: Conversion");
                    if (typeof ga != "undefined") {
                        ga('set', '&cu', tc_vars["nav_currency"].toUpperCase());
                        var temp_concat = tc_vars["order_items"];
                        for (var i = 0; i < temp_concat.length; i++) {
                            var product = temp_concat[i];
                            ga('ec:addProduct', {
                                'id': tC.internalvars.getID(product['order_item_skuMfPartNumber']),
                                'name': product['order_item_eng_title'],
                                'sku': tC.internalvars.getID(product['order_item_mfPartNumber']),
                                'category': product['order_item_eng_microcategory'],
                                'price': product['order_item_discount_ati'],
                                'quantity': product['order_item_quantity'],
                                'variant': product['order_item_eng_color'],
                                'brand': product['order_item_brand'],
                                'dimension34': tC.internalvars.getID(tC.internalvars.masterSku_cart(product['order_item_defaultMfPartNumber'], product['order_item_mfPartNumber'])),
                                'dimension31': product['order_item_eng_color'],
                                'dimension17': tC.internalvars.getModifiedString(product['order_item_eng_category']),
                                'dimension18': tC.internalvars.getStringToNa(product['order_item_eng_collection']),
                                'dimension27': tC.internalvars.getSellable(product['order_item_sellable']),
                                'dimension2': product['order_item_display'],
                                'dimension30': product['order_item_size'],
                                'dimension15': tC.internalvars.getAvailability(product['order_item_availability']),
                                'dimension9': tC.internalvars.singlePersonalized(product['order_item_engravable'], product['order_item_engraved']),
                                'dimension3': tC.internalvars.singlePersonalized(product['order_item_embossable'], product['order_item_embossed']),
                                'dimension16': tC.internalvars.singlePersonalized(product['order_item_adjustable'], product['order_item_adjusted']),
                                'dimension32': tC.internalvars.isPersonalizedNA(product['order_item_engravable'], product['order_item_embossable'], product['order_item_adjustable'], product['order_item_engraved'], product['order_item_embossed'], product['order_item_adjusted']),
                                'dimension23': tC.internalvars.getStringToNa(product['order_item_eng_casematerial']),
                                'dimension20': tC.internalvars.getStringToNa(product['order_item_eng_jewelmaterial']),
                                'dimension22': tC.internalvars.getStringToNa(product['order_item_eng_strapmaterial']),
                                'dimension33': tC.internalvars.getStringToNa(product['order_item_eng_leathermaterial'])
                            });
                        }
                        ga('ec:setAction', 'purchase', {
                            'id': tc_vars["order_id"],
                            'affiliation': '',
                            'revenue': tc_vars["order_amount_ati_without_sf"],
                            'shipping': tc_vars["order_shipping"],
                            'tax': ((typeof tc_vars["order_amount_ati_without_sf"] !== "undefined") && (typeof tc_vars["order_amount_tf_without_sf"] !== "undefined") && (tc_vars["order_amount_ati_without_sf"] !== "") && (tc_vars["order_amount_tf_without_sf"] !== "")) ? (parseFloat(tc_vars["order_amount_ati_without_sf"] - tc_vars["order_amount_tf_without_sf"])).toFixed(2) : 0.00
                        });
                    }
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('83')) {
        if (tC.internalvars.amItester == 'false') {
            tC.launchTag(83, 'Cookie - OrderId', 26, 5181, 19, 10);
            if ((tc_vars["order_id"] !== "") && (tC.getCookie("tc_idlord") !== tc_vars["order_id"])) {
                tC.setCookie("tc_idlord", tc_vars["order_id"], "365");
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('146')) {
        if ((tc_vars["nav_pagetype"] == 'checkout' || tc_vars["nav_pagetype"] == 'confirmation' || tc_vars["nav_pagetype"] == 'onepagecheckout' || tc_vars["nav_pagetype"] == 'CheckoutPayPalExpress.Confirmation' || tc_vars["nav_pagetype"] == 'CheckoutPayPalExpress.Confirm' || tc_vars["nav_pagetype"] == 'CheckoutPay')) {
            if (tC.internalvars.amItester == 'false') {
                tC.launchTag(146, 'Universal - eCE - Content Grouping OPC', 26, 5181, 19, 10);
                if (typeof ga !== "undefined") {
                    switch (tc_vars["nav_stepName"]) {
                    case 'CheckMail':
                        tC.internalvars.GA_step = "2";
                        tC.internalvars.GA_step_name = "checkemail";
                        break;
                    case 'ShippingAddress':
                        tC.internalvars.GA_step = "3";
                        tC.internalvars.GA_step_name = "delivery";
                        break;
                    case 'Payment':
                        tC.internalvars.GA_step = "4";
                        tC.internalvars.GA_step_name = "payment";
                        break;
                    case 'Finalization':
                        tC.internalvars.GA_step = "5";
                        tC.internalvars.GA_step_name = "confirmation";
                        break;
                    case 'DeliveryMethod':
                        tC.internalvars.GA_step = "3.5";
                        tC.internalvars.GA_step_name = "deliverymethod";
                        break;
                    case 'Gift':
                        tC.internalvars.GA_step = "";
                        tC.internalvars.GA_step_name = "gift";
                        break;
                    default:
                        tC.internalvars.GA_step = "";
                        tC.internalvars.GA_step_name = "";
                        break;
                    }
                    ga('set', 'contentGroup1', tc_vars["rcms_cgGroup"]);
                    ga('set', 'contentGroup2', tc_vars["msn_cgGroup"]);
                    ga('set', 'contentGroup3', tc_vars["emerch_cgGroup"]);
                    ga('set', 'contentGroup4', 'checkout');
                    ga('set', 'contentGroup5', 'checkout' + '-' + tC.internalvars.GA_step_name);
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('147')) {
        if ((tc_vars["nav_pagetype"] == 'confirmation')) {
            if (tC.internalvars.amItester == 'false') {
                tC.launchTag(147, 'Universal - eCE - Funnel Step OPC', 26, 5181, 19, 10);
                if (tc_vars.nav_stepName === "Finalization") {
                    tc_vars.nav_stepName2 = "confirmation"
                    ga('set', 'location', document.location.href);
                    ga('set', 'page', "/virtualpageview/" + "checkout/" + "step" + tC.internalvars.GA_step_OPC + "/" + tC.internalvars.GA_stepOPC_cartier);
                } else
                    tc_vars.nav_stepName2 = tc_vars.nav_stepName;
                if (typeof ga != "undefined" && tc_vars.nav_pagetype == 'confirmation' && tc_vars.nav_stepName !== "Finalization" && tc_vars.nav_stepName !== "DeliveryMethod") {
                    if (typeof ga != "undefined") {
                        var temp_concat = tc_vars["cart_items"];
                        for (var i = 0; i < temp_concat.length; i++) {
                            var product = temp_concat[i];
                            ga('ec:addProduct', {
                                'id': tC.internalvars.getID(product['cart_item_skuMfPartNumber']),
                                'name': product['cart_item_eng_title'],
                                'category': product['cart_item_eng_microcategory'],
                                'brand': product['cart_item_brand'],
                                'variant': product['cart_item_eng_color'],
                                'price': product['cart_item_discount_ati'],
                                'quantity': product['cart_item_quantity'],
                                'dimension34': tC.internalvars.getID(tC.internalvars.masterSku_cart(product['cart_item_defaultMfPartNumber'], product['cart_item_mfPartNumber'])),
                                'dimension31': product['cart_item_eng_color'],
                                'dimension17': tC.internalvars.getModifiedString(product['cart_item_eng_category']),
                                'dimension18': tC.internalvars.getStringToNa(product['cart_item_eng_collection']),
                                'dimension27': tC.internalvars.getSellable(product['cart_item_sellable']),
                                'dimension2': product['cart_item_display'],
                                'dimension30': tc_vars.cart_items[i].cart_item_size[0].SizeId,
                                'dimension15': tC.internalvars.getAvailability(product['cart_item_availability']),
                                'dimension9': tC.internalvars.singlePersonalized(product['cart_item_engravable'], product['cart_item_engraved']),
                                'dimension3': tC.internalvars.singlePersonalized(product['cart_item_embossable'], product['cart_item_embossed']),
                                'dimension16': tC.internalvars.singlePersonalized(product['cart_item_adjustable'], product['cart_item_adjusted']),
                                'dimension32': tC.internalvars.isPersonalizedNA(product['cart_item_engravable'], product['cart_item_embossable'], product['cart_item_adjustable'], product['cart_item_engraved'], product['cart_item_embossed'], product['cart_item_adjusted']),
                                'dimension23': tC.internalvars.getStringToNa(product['cart_item_eng_casematerial']),
                                'dimension20': tC.internalvars.getStringToNa(product['cart_item_eng_jewelmaterial']),
                                'dimension22': tC.internalvars.getStringToNa(product['cart_item_eng_strapmaterial']),
                                'dimension33': tC.internalvars.getStringToNa(product['cart_item_eng_leathermaterial'])
                            });
                        }
                        ga('ec:setAction', 'checkout', {
                            'step': tC.internalvars.GA_step_OPC
                        });
                        ga('set', 'contentGroup1', tc_vars["rcms_cgGroup"]);
                        ga('set', 'contentGroup2', tc_vars["msn_cgGroup"]);
                        ga('set', 'contentGroup3', tc_vars["emerch_cgGroup"]);
                        ga('set', 'location', document.location.href);
                    }
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('148')) {
        if ((tc_vars["nav_pagetype"] == 'cart')) {
            if (tC.internalvars.amItester == 'false') {
                tC.launchTag(148, 'Universal - eCE - OPC Cart Funnel step', 26, 5181, 19, 10);
                if (typeof window.location.pathname.match('/OnePageCheckout/Cart') && (typeof ga != "undefined")) {
                    var temp_concat = tc_vars["cart_items"];
                    for (var i = 0; i < temp_concat.length; i++) {
                        var product = temp_concat[i];
                        ga('ec:addProduct', {
                            'id': tC.internalvars.getID(product['cart_item_skuMfPartNumber']),
                            'name': product['cart_item_eng_title'],
                            'category': product['cart_item_eng_microcategory'],
                            'brand': product['cart_item_brand'],
                            'variant': product['cart_item_eng_color'],
                            'price': product['cart_item_discount_ati'],
                            'quantity': product['cart_item_quantity'],
                            'dimension17': tC.internalvars.getModifiedString(product['cart_item_eng_category']),
                            'dimension18': tC.internalvars.getStringToNa(product['cart_item_eng_collection']),
                            'dimension27': tC.internalvars.getSellable(product['cart_item_sellable']),
                            'dimension2': product['cart_item_display'],
                            'dimension30': tc_vars.cart_items[i].cart_item_size[0].SizeId,
                            'dimension15': tC.internalvars.getAvailability(product['cart_item_availability']),
                            'dimension9': tC.internalvars.singlePersonalized(product['cart_item_engravable'], product['cart_item_engraved']),
                            'dimension3': tC.internalvars.singlePersonalized(product['cart_item_embossable'], product['cart_item_embossed']),
                            'dimension16': tC.internalvars.singlePersonalized(product['cart_item_adjustable'], product['cart_item_adjusted']),
                            'dimension32': tC.internalvars.isPersonalizedNA(product['cart_item_engravable'], product['cart_item_embossable'], product['cart_item_adjustable'], product['cart_item_engraved'], product['cart_item_embossed'], product['cart_item_adjusted']),
                            'dimension23': tC.internalvars.getStringToNa(product['cart_item_eng_casematerial']),
                            'dimension20': tC.internalvars.getStringToNa(product['cart_item_eng_jewelmaterial']),
                            'dimension22': tC.internalvars.getStringToNa(product['cart_item_eng_strapmaterial']),
                            'dimension33': tC.internalvars.getStringToNa(product['cart_item_eng_leathermaterial']),
                            'dimension34': tC.internalvars.getID(tC.internalvars.masterSku_cart(product['cart_item_defaultMfPartNumber'], product['cart_item_mfPartNumber']))
                        });
                    }
                    ga('ec:setAction', 'checkout', {
                        'step': tC.internalvars.GA_step
                    });
                    ga('set', 'contentGroup1', tc_vars["rcms_cgGroup"]);
                    ga('set', 'contentGroup2', tc_vars["msn_cgGroup"]);
                    ga('set', 'contentGroup3', tc_vars["emerch_cgGroup"]);
                    ga('set', 'contentGroup4', 'checkout');
                    ga('set', 'contentGroup5', 'checkout' + '-' + 'cart');
                    ga('set', 'location', document.location.href);
                    ga('set', 'page', '/' + tc_vars["nav_languageCode"] + '_' + tc_vars["nav_countryCode"].toLowerCase() + '/step1/shopping-bag');
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('150')) {
        if (((((tc_vars.nav_pagetype === "thankyou") && (tc_vars.env_template === "checkout")) || (tc_vars.nav_pagetype === "CheckoutPayPalExpress.Thankyou") || ((tc_vars.nav_pagetype === "thankyou") || (tc_vars.nav_pagetype === "CheckoutPayPalExpress.ThankYou") && (tc_vars.env_template === "genericpage"))))) {
            if (tC.internalvars.amItester == 'false') {
                tC.launchTag(150, 'Universal - eCE - Content Grouping Thankyou OPC', 26, 5181, 19, 10);
                if (typeof ga != "undefined") {
                    ga('set', 'contentGroup1', tc_vars["rcms_cgGroup"]);
                    ga('set', 'contentGroup2', tc_vars["msn_cgGroup"]);
                    ga('set', 'contentGroup3', tc_vars["emerch_cgGroup"]);
                    ga('set', 'contentGroup4', 'checkout');
                    ga('set', 'contentGroup5', 'checkout' + '-' + 'thankyou');
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('69')) {
        if ((tc_vars["nav_pagetype"] == 'item')) {
            if (tC.internalvars.amItester == 'false') {
                tC.launchTag(69, 'Universal - eCE - addProduct Detail', 1483, 5181, 19, 10);
                if (typeof ga != "undefined") {
                    ga('ec:addProduct', {
                        'id': tC.internalvars.getID(tc_vars["product_mfPartNumber"]),
                        'name': tc_vars["product_eng_title"],
                        'category': tc_vars["product_eng_micro"],
                        'brand': 'CARTIER',
                        'variant': tc_vars["product_eng_color"],
                        'price': tc_vars["product_discount_ati"],
                        'dimension34': tC.internalvars.getID(tc_vars["product_mfPartNumber"]),
                        'dimension17': tC.internalvars.getModifiedString(tc_vars["product_eng_line"]),
                        'dimension18': tc_vars["product_eng_collection"],
                        'dimension10': tc_vars["product_eng_title"],
                        'dimension27': tC.internalvars.isSellable,
                        'dimension2': tc_vars["prddisplay"],
                        'dimension30': ((typeof tc_vars.product_size !== "undefined") && (typeof tc_vars.product_size[0] !== "undefined")) ? tc_vars.product_size[0].SizeId : "",
                        'dimension15': tC.internalvars.getAvailabilityFromString(),
                        'dimension9': tC.internalvars.singlePersonalized(tc_vars["product_engravable"], tc_vars["product_engraved"]),
                        'dimension3': tC.internalvars.singlePersonalized(tc_vars["product_embossable"], tc_vars["product_embossed"]),
                        'dimension16': tC.internalvars.singlePersonalized(tc_vars["product_adjustable"], tc_vars["product_adjusted"]),
                        'dimension32': tC.internalvars.isPersonalizedNA(tc_vars["product_engravable"], tc_vars["product_embossable"], tc_vars["product_adjustable"], tc_vars["product_engraved"], tc_vars["product_embossed"], tc_vars["product_adjusted"]),
                        'dimension23': tC.internalvars.getStringToNa(tc_vars["product_eng_casematerial"]),
                        'dimension20': tC.internalvars.getStringToNa(tc_vars["product_eng_jewelmaterial"]),
                        'dimension22': tC.internalvars.getStringToNa(tc_vars["product_eng_strapmaterial"]),
                        'dimension33': tC.internalvars.getStringToNa(tc_vars["product_eng_leathermaterial"]),
                        'dimension85': tC.internalvars.productSizeSoldout,
                        'dimension86': tC.internalvars.productSizeAvailable,
                        'dimension87': tC.internalvars.productSizeIsOnlyOne
                    });
                    ga('ec:setAction', 'detail');
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('87')) {
        if (tC.internalvars.amItester == 'false') {
            tC.launchTag(87, 'Universal - End', 1503, 5181, 19, 10);
            if (typeof ga != "undefined") {
                tC.internalvars.restoreObject = false;
                tC.internalvars.origFieldObject = {};
                ga('require', 'linkid');
                if (tc_vars.env_work === 'prod') {
                    ga('set', 'customTask', function(model) {
                        var tempFieldObject = {};
                        var i = 1;
                        tC.log("model | hitType: " + model.get('hitType'));
                        if (model.get('hitType') === 'timing') {
                            tC.log("START => MODEL: ORIG");
                            tC.log(model);
                            tC.log("END => MODEL: ORIG");
                            while (i !== 201) {
                                tC.internalvars.origFieldObject['dimension' + i] = model.get('dimension' + i);
                                tC.internalvars.origFieldObject['metric' + i] = model.get('metric' + i);
                                tC.internalvars.origFieldObject['contentGroup' + i] = model.get('contentGroup' + i);
                                if (i !== 11) {
                                    tempFieldObject['dimension' + i] = undefined;
                                }
                                tempFieldObject['metric' + i] = undefined;
                                if (i !== 2) {
                                    tempFieldObject['contentGroup' + i] = undefined;
                                }
                                i++;
                            }
                            model.set(tempFieldObject);
                            tC.log("START => tempFieldObject");
                            tC.log(tempFieldObject);
                            tC.log("END => tempFieldObject");
                            tC.log("START => MODEL: MOD");
                            tC.log(model);
                            tC.log("END => MODEL: MOD");
                            tC.internalvars.restoreObject = true;
                        } else if (model.get('hitType') === 'event') {
                            if (tC.internalvars.restoreObject === true) {
                                i = 1;
                                while (i !== 201) {
                                    ga('set', 'dimension' + i, tC.internalvars.origFieldObject['dimension' + i]);
                                    ga('set', 'metric' + i, tC.internalvars.origFieldObject['metric' + i]);
                                    ga('set', 'contentGroup' + i, tC.internalvars.origFieldObject['contentGroup' + i]);
                                    i++;
                                }
                                tC.internalvars.restoreObject = false;
                            }
                        }
                    });
                }
                if (tc_vars.nav_pagetype === 'cart') {
                    ga('set', 'page', '/' + tc_vars["nav_languageCode"] + '_' + tc_vars["nav_countryCode"].toLowerCase() + '/step1/shopping-bag');
                } else if (tc_vars.nav_pagetype === 'confirmation') {
                    ga('set', 'page', '/' + tc_vars["nav_languageCode"] + '_' + tc_vars["nav_countryCode"].toLowerCase() + tC.internalvars.pgURI_opc_car);
                } else if (tc_vars.nav_pagetype === 'thankyou') {
                    ga('set', 'page', '/' + tc_vars["nav_languageCode"] + '_' + tc_vars["nav_countryCode"].toLowerCase() + '/OnePageCheckout/ThankYou');
                } else
                    ga('set', 'page', tc_vars["pguri"]);
                ga('send', 'pageview', {
                    'hitCallback': function() {
                        tC.log('hit sent');
                    }
                });
                if (tC.internalvars.restoreObject === true) {
                    var i = 1;
                    while (i !== 201) {
                        ga('set', 'dimension' + i, tC.internalvars.origFieldObject['dimension' + i]);
                        ga('set', 'metric' + i, tC.internalvars.origFieldObject['metric' + i]);
                        ga('set', 'contentGroup' + i, tC.internalvars.origFieldObject['contentGroup' + i]);
                        i++;
                    }
                    tC.internalvars.restoreObject = false;
                }
            }
            if (typeof window.tc_events_19 !== "undefined") {
                if ((typeof window.yTos !== "undefined") && (typeof window.yTos.notify !== "undefined")) {
                    tC.log("INFO: notify event TC::LoadCompleted");
                    window.yTos.notify("TC::LoadCompleted");
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('600')) {
        if ((tc_vars["nav_pagetype"] == 'item')) {
            if (tC.internalvars.amItester == 'false') {
                tC.launchTag(600, 'Universal - eCE - addProduct Detail | Event only', 2518, 5181, 19, 10);
                if (typeof ga !== "undefined") {
                    ga('send', 'event', 'Product Page', 'Product Details View', tC.internalvars.getModifiedString(tc_vars["product_eng_line"]) + " - " + tc_vars["product_eng_collection"] + " - " + tC.internalvars.isSellable + " - " + tC.internalvars.getID(tc_vars["product_mfPartNumber"]) + " - " + tc_vars["product_eng_title"], {
                        nonInteraction: true
                    });
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('602')) {
        if ((((tc_vars.nav_pagetype === "onepagecheckout") && (tc_vars.env_template === "thankyou")) || (tc_vars.nav_pagetype === "CheckoutPayPalExpress.Thankyou") || ((tc_vars.nav_pagetype === "thankyou") && (tc_vars.env_template === "CheckoutOPC")) || ((tc_vars.nav_pagetype === "CheckoutPayPalExpress.ThankYou") && (tc_vars.env_template === "genericpage")) || ((tc_vars.nav_pagetype === "thankyou") && (tc_vars.env_template === "genericpage")))) {
            if (tC.internalvars.amItester == 'false') {
                if (tC.internalvars.isOrderIdValid == 'true') {
                    tC.launchTag(602, 'Universal - eCE - Conversion | Event only', 2518, 5181, 19, 10);
                    if (typeof ga !== "undefined") {
                        ga('send', 'event', 'Checkout Funnel', 'Order Confirmation', {
                            nonInteraction: true
                        });
                    }
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('787')) {
        if ((tc_vars.pguri.split('/')[2] == "news")) {
            if (tC.internalvars.amItester == 'false') {
                tC.launchTag(787, 'Universal - Virtual pageview News section', 26, 5181, 19, 10);
                tC.log('check if tag for listener is launched');
                window.addEventListener('hashchange', function() {
                    ga('send', {
                        'hitType': 'pageview',
                        'page': "/virtualpageview" + document.location.hash.substring(1),
                        'title': document.location.hash.substring(1)
                    });
                    tC.log('check if listener works');
                });
            }
        }
    }
}
function tc_events_19(tc_elt, tc_id_event, tc_array_events) {
    tc_array_events["id"] = tc_id_event;
    (function() {
        var l = 'fragrance_sensation|fragrance_discover|fragrance_preference|item_name|video_name|video_position|product_is_in_stock|product_defaultMfPartNumber|chapter|fromPage|discovery|score|pid|page|item_shape_case|name|item_movement|item_budget|category|product_eng_casematerial|brand|product_eng_jewelmaterial|variant|product_eng_leathermaterial|discount_price|product_eng_strapmaterial|quantity|price|category_variant|event|label|discountedPrice_tf|position|price_tf|list|promotion_id|promotion_name|promotion_creative|promotion_position|livechatId|advisorId|productEngravable|filter_and_look|productAdjustable|productEmbossable|product_promotion|storelocator|storelocator_city|storelocator_country|prmid|prmname|prmcreative|prmposition|conversationId|discount_price_ati|associateId|discountedPrice|ratingValue|legacy_macro_id|pguri|ratingFeedbackValue|legacy_micro_id|product_id|productAvailability|product_variant_id|price_ati|promo_id|productSkuMfPartNumber|prdid|promo_name|uri|prdname|promo_creative|prdline|promo_position|prdcollection|prdsubcollection|prdengraved|prdembossed|prdsellable|submitstatus|boutiqueName|prdvariant|productSize|boutique|prdref|purpose|prdcategory|type|prddisplay|appointmentId|prdsize|channel|prdavailability|prdadjusted|product_eng_line|prdpersonalized|step|product_eng_collection|csematerial|product_status|jwlmaterial|strmaterial|option|stepName|lthmaterial|product_sellable|currency|productCaseMaterial|car_category|productJewelryMaterial|car_event|productLeatherMaterial|productStrapMaterial|prdprice|productAdjusted|productEmbossed|productCollection|productEngraved|productLine|product_eng_title|product_mfPartNumber|mfPartNumber|item_size|dataSt|personalizationType|item_diamond|item_material_case|item_dial_colour|item_dial_function|item_strap|item_id|id'.split('|');
        for (var k in l) {
            if (!tc_array_events.hasOwnProperty(l[k])) {
                tc_array_events[l[k]] = '';
            }
        }
    }
    )();
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E1')) {
            if (tc_array_events["id"] == 'enh_removecart') {
                tC.launchTag('eenh_removecart', 'Universal eCE - addProduct remove', '-1', '5181', '19');
                tC.log("enh_removecart");
                tC.log(tc_array_events);
                tC.internalvars.masterSku_event = "";
                if (tc_array_events["defaultMfPartNumber"] !== "") {
                    tC.internalvars.masterSku_event = tc_array_events["defaultMfPartNumber"];
                } else {
                    tC.internalvars.masterSku_event = tc_array_events["mfPartNumber"];
                }
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('ec:addProduct', {
                        'id': tC.internalvars.getID(tc_array_events["productSkuMfPartNumber"]),
                        'name': tc_array_events["prdname"],
                        'category': tc_array_events.dataSt.prdcategory,
                        'brand': tc_array_events["brand"],
                        'variant': tc_array_events.dataSt.prdvariant,
                        'price': tc_array_events["discount_price_ati"],
                        'quantity': tc_array_events["quantity"],
                        'dimension34': tC.internalvars.getID(tC.internalvars.masterSku_event),
                        'dimension17': tC.internalvars.getModifiedString(tc_array_events.dataSt.prdline),
                        'dimension18': tC.internalvars.getStringToNa(tc_array_events.dataSt.prdcollection),
                        'dimension27': tc_array_events.dataSt.prdsellable,
                        'dimension2': tc_vars["prddisplay"],
                        'dimension30': tC.internalvars.getStringToNa(tc_array_events["productSize"]),
                        'dimension15': tc_array_events["productAvailability"],
                        'dimension9': tC.internalvars.singlePersonalized(tc_array_events["productEngravable"], tc_array_events["productEngraved"]),
                        'dimension3': tC.internalvars.singlePersonalized(tc_array_events["productEmbossable"], tc_array_events["productEmbossed"]),
                        'dimension16': tC.internalvars.singlePersonalized(tc_array_events["productAdjustable"], tc_array_events["productAdjusted"]),
                        'dimension32': tC.internalvars.isPersonalizedNA(tc_array_events["productEngravable"], tc_array_events["productEmbossable"], tc_array_events["productAdjustable"], tc_array_events["productEngraved"], tc_array_events["productEmbossed"], tc_array_events["productAdjusted"]),
                        'dimension23': tC.internalvars.getStringToNa(tc_array_events["product_eng_casematerial"]),
                        'dimension20': tC.internalvars.getStringToNa(tc_array_events["product_eng_jewelmaterial"]),
                        'dimension22': tC.internalvars.getStringToNa(tc_array_events["product_eng_strapmaterial"]),
                        'dimension33': tC.internalvars.getStringToNa(tc_array_events["product_eng_leathermaterial"])
                    });
                    ga('ec:setAction', 'remove');
                    ga('send', 'event', 'Cart', 'Remove from cart', tC.internalvars.getModifiedString(tc_array_events.dataSt.prdline) + " - " + tC.internalvars.getStringToNa(tc_array_events.dataSt.prdcollection) + " - " + tc_array_events.dataSt.prdsellable + " - " + tC.internalvars.getID(tc_array_events["productSkuMfPartNumber"]) + " - " + tc_array_events["prdname"]);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E3')) {
            if (tc_array_events["id"] == 'univ_variant') {
                tC.launchTag('euniv_variant', 'Universal event variant', '-1', '5181', '19');
                tC.log("universal_variant");
                tC.log(tc_array_events);
                if (typeof ga != "undefined" && tc_array_events["event"] !== 'sliderProductClick' && tC.internalvars.amItester == "false") {
                    ga('send', 'event', tc_array_events["category_variant"], tc_array_events["event"], tc_array_events["label"]);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E5')) {
            if (tc_array_events["id"] == 'enh_addcart') {
                tC.launchTag('eenh_addcart', 'Universal - eCE - addProduct add', '-1', '5181', '19');
                tC.log("enh_addcart");
                tC.log(tc_array_events);
                tC.internalvars.masterSku_event = "";
                if (tc_array_events["defaultMfPartNumber"] !== "") {
                    tC.internalvars.masterSku_event = tc_array_events["defaultMfPartNumber"];
                } else {
                    tC.internalvars.masterSku_event = tc_array_events["mfPartNumber"];
                }
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('ec:addProduct', {
                        'id': tC.internalvars.getID(tc_array_events["productSkuMfPartNumber"]),
                        'name': tc_array_events["prdname"],
                        'category': tc_array_events.dataSt.prdcategory,
                        'brand': tc_array_events["brand"],
                        'variant': tc_array_events.dataSt.prdvariant,
                        'price': tc_array_events["discount_price_ati"],
                        'quantity': tc_array_events["quantity"],
                        'dimension34': tC.internalvars.getID(tC.internalvars.masterSku_event),
                        'dimension17': tC.internalvars.getModifiedString(tc_array_events.dataSt.prdline),
                        'dimension18': tC.internalvars.getStringToNa(tc_array_events.dataSt.prdcollection),
                        'dimension27': tc_array_events.dataSt.prdsellable,
                        'dimension2': tc_vars["prddisplay"],
                        'dimension30': tC.internalvars.getStringToNa(tc_array_events["productSize"]),
                        'dimension15': tC.internalvars.getAvailability(tc_array_events["productAvailability"]),
                        'dimension9': tC.internalvars.isEngravedNA(tc_array_events["productEngravable"], tc_array_events["personalizationType"]),
                        'dimension3': tC.internalvars.isEmbossedNA(tc_array_events["productEmbossable"], tc_array_events["personalizationType"]),
                        'dimension16': tC.internalvars.isAdjustedNA(tc_array_events["productAdjustable"], tc_array_events["personalizationType"]),
                        'dimension32': tC.internalvars.isPersonalizedNabis2(tc_array_events["productEngravable"], tc_array_events["productEmbossable"], tc_array_events["productAdjustable"], tc_array_events["personalizationType"]),
                        'dimension23': tC.internalvars.getStringToNa(tc_array_events["product_eng_casematerial"]),
                        'dimension20': tC.internalvars.getStringToNa(tc_array_events["product_eng_jewelmaterial"]),
                        'dimension22': tC.internalvars.getStringToNa(tc_array_events["product_eng_strapmaterial"]),
                        'dimension33': tC.internalvars.getStringToNa(tc_array_events["product_eng_leathermaterial"]),
                        'dimension88': tc_array_events.dataSt.pashaConfigurator,
                        'dimension35': tc_array_events.dataSt.item_strap_exchanged
                    });
                    ga('ec:setAction', 'add');
                    ga('send', 'event', 'Cart', 'Add To Cart', tC.internalvars.getModifiedString(tc_array_events.dataSt.prdline) + " - " + tC.internalvars.getStringToNa(tc_array_events.dataSt.prdcollection) + " - " + tc_array_events.dataSt.prdsellable + " - " + tC.internalvars.getID(tc_array_events["productSkuMfPartNumber"]) + " - " + tc_array_events["prdname"]);
                    tC.log('DEBUG: MASTERID=' + tC.internalvars.masterSku_event);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E7')) {
            if (tc_array_events["id"] == 'enh_prod') {
                tC.launchTag('eenh_prod', 'Universal - eCE - addProduct click', '-1', '5181', '19');
                tC.log("enh_prod");
                tC.log(tc_array_events);
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    if ((tc_vars.env_template === 'searchresult' || tc_vars.env_template === 'categories') && tc_array_events["list"] === "searchresult") {
                        ga('ec:addProduct', {
                            'id': tC.internalvars.getID(tc_array_events["product_mfPartNumber"]),
                            'name': tc_array_events["prdname"],
                            'category': tc_array_events.dataSt.prdcategory,
                            'brand': tc_array_events["brand"],
                            'variant': tc_array_events.dataSt.variant,
                            'price': tc_array_events["discountedPrice"],
                            'position': tc_array_events["position"] + 1,
                            'dimension17': tC.internalvars.getModifiedString(tc_array_events.dataSt.prdline),
                            'dimension18': tc_array_events.dataSt.prdcollection,
                            'dimension27': tc_array_events.dataSt.prdsellable,
                            'dimension31': tc_array_events.dataSt.variant,
                            'dimension34': tC.internalvars.getID(tc_array_events["product_mfPartNumber"])
                        });
                        ga('ec:setAction', 'click', {
                            'list': tc_array_events.dataSt.list
                        });
                        ga('send', 'event', 'Product list', 'Product click', tC.internalvars.getID(tc_array_events["product_mfPartNumber"]), {
                            hitCallback: function() {
                                tC.log('send_sr')
                            }
                        });
                    } else if (tc_array_events["list"] === "searchresult|edition" && tc_vars.nav_pagetype === 'subhome') {
                        ga('ec:addProduct', {
                            'id': tC.internalvars.getID(tc_array_events["product_mfPartNumber"]),
                            'name': tc_array_events["prdname"],
                            'category': tc_array_events.dataSt.prdcategory,
                            'brand': tc_array_events["brand"],
                            'variant': tc_array_events.dataSt.variant,
                            'price': tc_array_events["discountedPrice"],
                            'position': tc_array_events["position"] + 1,
                            'dimension17': tC.internalvars.getModifiedString(tc_array_events.dataSt.prdline),
                            'dimension18': tc_array_events.dataSt.prdcollection,
                            'dimension27': tc_array_events.dataSt.prdsellable,
                            'dimension31': tc_array_events.dataSt.variant
                        });
                        ga('ec:setAction', 'click', {
                            'list': tc_array_events.dataSt.list
                        });
                        ga('send', 'event', 'Product list', 'Product click', tC.internalvars.getID(tc_array_events["product_mfPartNumber"]), {
                            hitCallback: function() {
                                tC.log('send_subhome')
                            }
                        });
                    } else if (tc_vars.nav_pagetype === 'cart') {
                        ga('ec:addProduct', {
                            'id': tC.internalvars.getID(tc_array_events["product_mfPartNumber"]),
                            'name': tc_array_events["prdname"],
                            'category': tc_array_events.dataSt.prdcategory,
                            'brand': tc_array_events["brand"],
                            'variant': tc_array_events.dataSt.variant,
                            'price': tc_array_events["discountedPrice"],
                            'position': tc_array_events["position"] + 1,
                            'dimension17': tC.internalvars.getModifiedString(tc_array_events.dataSt.prdline),
                            'dimension18': tc_array_events.dataSt.prdcollection,
                            'dimension27': tc_array_events.dataSt.prdsellable,
                            'dimension31': tc_array_events.dataSt.variant
                        });
                        ga('ec:setAction', 'click', {
                            'list': 'Checkout pages: Other suggestions - ' + tc_vars["nav_languageCode"] + '_' + tc_vars["nav_countryCode"].toLowerCase() + '/step1/shopping-bag'
                        });
                        ga('send', 'event', 'Product list', 'Product click', tC.internalvars.getID(tc_array_events["product_mfPartNumber"]), {
                            hitCallback: function() {
                                tC.log('send_cart')
                            }
                        });
                    } else {
                        ga('ec:addProduct', {
                            'id': tC.internalvars.getID(tc_array_events["product_mfPartNumber"]),
                            'name': tc_array_events["prdname"],
                            'category': tc_array_events.dataSt.prdcategory,
                            'brand': tc_array_events["brand"],
                            'variant': tc_array_events.dataSt.variant,
                            'price': tc_array_events["discountedPrice"],
                            'position': tc_array_events["position"] + 1,
                            'dimension17': tC.internalvars.getModifiedString(tc_array_events.dataSt.prdline),
                            'dimension18': tc_array_events.dataSt.prdcollection,
                            'dimension27': tc_array_events.dataSt.prdsellable,
                            'dimension31': tc_array_events.dataSt.variant
                        });
                        ga('ec:setAction', 'click', {
                            'list': tc_array_events.dataSt.list
                        });
                        ga('send', 'event', 'Product list', 'Product click', tC.internalvars.getID(tc_array_events["product_mfPartNumber"]), {
                            hitCallback: function() {
                                tC.log('send_others')
                            }
                        });
                    }
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E9')) {
            if (tc_array_events["id"] == 'univ') {
                tC.launchTag('euniv', 'Universal event', '-1', '5181', '19');
                tC.log("universal");
                tC.log(tc_array_events);
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    if (tc_array_events["car_category"] !== "") {
                        if (tc_array_events["car_category"] === "Product List" && tc_array_events["event"] === "SwitchImage") {
                            ga('send', 'event', tc_array_events["car_category"], tc_array_events["event"], tc_array_events["product_eng_line"] + " - " + tc_array_events["product_eng_collection"] + " - " + tC.internalvars.getSellable(tc_array_events["product_status"]) + " - " + tC.internalvars.getID(tc_array_events["product_mfPartNumber"]));
                        } else if ((tc_array_events["car_category"] !== "Product List" && (tc_array_events["event"] === "SwitchImage" || tc_array_events["event"] === "ZoomOpen"))) {
                            ga('send', 'event', "Product Page", tC.internalvars.zoomOpenSwitchImageAction(tc_array_events["event"]), tc_vars["product_eng_line"] + " - " + tc_vars["product_eng_collection"] + " - " + tC.internalvars.getSellable(tc_vars["product_status"]) + " - " + tC.internalvars.getID(tc_vars["product_mfPartNumber"]));
                        } else if (tc_array_events["event"] !== "ZoomOpen" || tc_array_events["event"] !== "SwitchImage") {
                            ga('send', 'event', tc_array_events["car_category"], tc_array_events["car_event"]);
                        }
                    } else if (tc_array_events["event"] === "Login" && tc_array_events["label"] === "Ok") {
                        ga('send', 'event', tc_array_events["category"], tc_array_events["event"], tc_array_events["label"], {
                            'dimension1': 'logged'
                        });
                    } else if (tc_array_events["event"] === "QuickBuy" || tc_array_events["event"] === "ProceedToCheckout" || tc_array_events["event"] === "GoToCart") {
                        tC.log("YNAP events");
                    } else if (tc_array_events["category"] === "Video") {
                        ga('send', 'event', tc_array_events["category"], tc_array_events["event"], tc_array_events["label"], {
                            nonInteraction: true
                        });
                    } else if (tc_array_events["event"] == "AddToWishList" || tc_array_events["event"] == "AddToWishList_Guest") {} else {
                        ga('send', 'event', tc_array_events["category"], tc_array_events["event"], tc_array_events["label"]);
                    }
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E10')) {
            if (tc_array_events["id"] == 'enh_prod_look') {
                tC.launchTag('eenh_prod_look', 'Universal - eCE - addProduct click LOOK', '-1', '5181', '19');
                tC.log("enh_prod_look");
                tC.log(tc_array_events);
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('ec:addProduct', {
                        'id': tc_array_events["pid"].toUpperCase(),
                        'name': tc_array_events["name"].toUpperCase(),
                        'category': tc_array_events["category"].toUpperCase(),
                        'brand': tc_array_events["brand"].toUpperCase(),
                        'variant': tc_array_events["variant"].toUpperCase(),
                        'price': tc_array_events["discountedPrice_tf"],
                        'position': tc_array_events["position"] + 1,
                        'dimension9': tc_array_events["category"],
                        'dimension57': ((product[tc_array_events["price_tf"]] - product[tc_array_events["discountedPrice_tf"]]) === 0) ? "NO" : "YES",
                        'dimension58': ((product[tc_array_events["price_tf"]] - product[tc_array_events["discountedPrice_tf"]]) === 0) ? "NO" : "YES",
                        'dimension62': tc_array_events["product_promotion"],
                        'dimension63': tc_array_events["product_promotion"],
                        'dimension64': tC.internalvars.discount_segment.getSegment(tc_array_events["discountedPrice_tf"], tc_array_events["price_tf"]),
                        'dimension65': tC.internalvars.discount_segment.getSegment(tc_array_events["discountedPrice_tf"], tc_array_events["price_tf"]),
                        'metric3': tc_array_events["discountedPrice_tf"],
                        'metric7': tc_array_events["price_tf"]
                    });
                    ga('ec:setAction', 'click', {
                        'list': tc_array_events["list"].toLowerCase()
                    });
                    ga('send', 'event', tc_vars["env_template"], 'ClickProduct', tc_array_events["pid"].toUpperCase());
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E11')) {
            if (tc_array_events["id"] == 'enh_product_detail_look') {
                tC.launchTag('eenh_product_detail_look', 'Universal - eCE - addProduct Detail LOOK', '-1', '5181', '19');
                tC.log("enh_product_detail_look");
                tC.log(tc_array_events);
                tC.internalvars.fCounter_dlook = tC.internalvars.fCounter_dlook + 1;
                tC.internalvars.iCounter_itemrow = $('.itemRow').length;
                tC.log("tC.internalvars.fCounter_dlook: " + tC.internalvars.fCounter_dlook);
                tC.internalvars.IsOutOfStock_dl = "";
                if (typeof window.location.pathname.split('/')[1] !== "undefined" && window.location.pathname.split('/')[1] === "wx") {
                    tC.internalvars.IsOutOfStock_dl = "WX";
                } else if (typeof window.document.getElementsByClassName("isSoldOut") !== "undefined") {
                    if (typeof window.document.getElementsByClassName("isSoldOut")[tC.internalvars.fCounter_dlook] !== "undefined") {
                        tC.log("window.document.getElementsByClassName('isSoldOut')[" + tC.internalvars.fCounter_dlook + "].getAttribute('data-code10'): " + window.document.getElementsByClassName("isSoldOut")[tC.internalvars.fCounter_dlook].getAttribute("data-code10"));
                    }
                    tC.log("pid: " + tc_array_events["pid"].toUpperCase());
                    for (tC.internalvars.tcloopi = 0; tC.internalvars.tcloopi < window.document.getElementsByClassName("isSoldOut").length; tC.internalvars.tcloopi++) {
                        tC.log((window.document.getElementsByClassName("isSoldOut")[tC.internalvars.tcloopi].getAttribute("data-code10") === tc_array_events["pid"].toUpperCase()));
                        if (window.document.getElementsByClassName("isSoldOut")[tC.internalvars.tcloopi].getAttribute("data-code10") == tc_array_events["pid"].toUpperCase()) {
                            tC.internalvars.IsOutOfStock_dl = "TRUE";
                            break;
                        }
                    }
                    if (tC.internalvars.IsOutOfStock_dl !== "TRUE") {
                        tC.internalvars.IsOutOfStock_dl = "FALSE";
                    }
                } else {
                    tC.internalvars.IsOutOfStock_dl = "FALSE";
                }
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('ec:addProduct', {
                        'id': tc_array_events["pid"].toUpperCase(),
                        'cateogry': tc_array_events["category"],
                        'price': tc_array_events["discountedPrice_tf"],
                        'name': tc_array_events["name"].toUpperCase(),
                        'full_price': tc_array_events["price_tf"],
                        'quantity': tc_array_events["quantity"],
                        'variant': tc_array_events["variant"],
                        'dimension9': tc_array_events["category"],
                        'dimension57': ((tc_array_events["price_tf"] - tc_array_events["discountedPrice_tf"]) === 0) ? "NO" : "YES",
                        'dimension58': ((tc_array_events["price_tf"] - tc_array_events["discountedPrice_tf"]) === 0) ? "NO" : "YES",
                        'dimension62': tc_array_events["product_promotion"],
                        'dimension64': tC.internalvars.discount_segment.getSegment(tc_array_events["price_tf"], tc_array_events["discountedPrice_tf"]),
                        'dimension65': tC.internalvars.discount_segment.getSegment(tc_array_events["price_tf"], tc_array_events["discountedPrice_tf"]),
                        'metric3': tc_array_events["price_tf"],
                        'metric7': tc_array_events["discountedPrice_tf"]
                    });
                    ga('ec:setAction', 'detail');
                    ga('send', 'event', tc_vars["env_template"], 'DetailProduct', tc_array_events["pid"].toUpperCase(), {
                        'dimension36': tC.internalvars.IsOutOfStock_dl
                    });
                }
                tC.log("tC.internalvars.fCounter_dlook + 1: " + (tC.internalvars.fCounter_dlook + 1));
                tC.log("tC.internalvars.iCounter_itemrow: " + tC.internalvars.iCounter_itemrow);
                if ((tC.internalvars.fCounter_dlook + 1) === tC.internalvars.iCounter_itemrow) {
                    tC.internalvars.fCounter_dlook = -1;
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E12')) {
            if (tc_array_events["id"] == 'enh_prod_quick_buy_DISATTIVO') {
                tC.launchTag('eenh_prod_quick_buy_DISATTIVO', 'Universal - eCE - addProduct click QUICK BUY', '-1', '5181', '19');
                tC.log("enh_prod_quick_buy");
                tC.log(tc_array_events);
                if (typeof ga != "undefined") {
                    ga('ec:addProduct', {
                        'id': tc_array_events["pid"].toUpperCase(),
                        'name': tc_array_events["name"].toUpperCase(),
                        'category': tc_array_events["category"].toUpperCase(),
                        'brand': tc_array_events["brand"].toUpperCase(),
                        'variant': tc_array_events["variant"].toUpperCase(),
                        'price': tc_array_events["discountedPrice_tf"],
                        'position': tc_array_events["position"] + 1,
                        'dimension9': tc_array_events["category"],
                        'dimension57': ((tc_array_events["price_tf"] - tc_array_events["discountedPrice_tf"]) === 0) ? "NO" : "YES",
                        'dimension58': ((tc_array_events["price_tf"] - tc_array_events["discountedPrice_tf"]) === 0) ? "NO" : "YES",
                        'dimension62': tc_array_events["product_promotion"],
                        'dimension64': tC.internalvars.discount_segment.getSegment(tc_array_events["price_tf"], tc_array_events["discountedPrice_tf"]),
                        'dimension65': tC.internalvars.discount_segment.getSegment(tc_array_events["price_tf"], tc_array_events["discountedPrice_tf"]),
                        'metric3': tc_array_events["discountedPrice_tf"],
                        'metric7': tc_array_events["price"]
                    });
                    ga('ec:setAction', 'click', {
                        'list': tc_array_events["list"].toLowerCase()
                    });
                    ga('send', 'event', tc_vars["env_template"], 'ClickProduct', tc_array_events["pid"].toUpperCase());
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E13')) {
            if (tc_array_events["id"] == 'QuickBuyCar') {
                tC.launchTag('eQuickBuyCar', 'Universal - Quick Buy Event', '-1', '5181', '19');
                tC.log("QuickBuy Event");
                tC.log(tc_array_events);
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'Product list', tc_array_events["event"], tc_array_events["label"]);
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, tc_array_events["event"], tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E14')) {
            if (tc_array_events["id"] == 'enh_trackPromotionClicks') {
                tC.launchTag('eenh_trackPromotionClicks', 'PromotionClick', '-1', '5181', '19');
                tC.log("enh_trackPromotionClick");
                tC.log(tc_array_events);
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('ec:addPromo', {
                        'id': tc_array_events["prmid"],
                        'name': tc_array_events["prmname"],
                        'creative': tc_array_events["prmcreative"],
                        'position': tc_array_events["prmposition"]
                    });
                    ga('ec:setAction', 'promo_click');
                    ga('send', 'event', 'Internal Marketing', 'Promotion Click', tc_array_events["prmid"]);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E16')) {
            if (tc_array_events["id"] == 'TcVarsItemsListUpdated') {
                tC.launchTag('eTcVarsItemsListUpdated', 'TcVarsItemsListUpdated', '-1', '5181', '19');
                tC.log("TcVarsItemsListUpdated");
                tC.log(tc_array_events);
                tC.log(tc_vars);
                if (tc_vars["nav_pagetype"] === 'categories' || tc_vars["nav_pagetype"] === 'searchresult') {
                    if (typeof ga !== "undefined") {
                        if (typeof tc_vars["itemsList"]['searchresult'] !== "undefined") {
                            tC.internalvars.loop = Math.ceil(tc_vars["itemsList"]['searchresult'].length / 20);
                            tC.log("Array: Search Results - Length: " + tc_vars["itemsList"]['searchresult'].length);
                            tC.internalvars.y = 0;
                            tC.internalvars.lastIndex = parseInt(tC.getCookie("tCImpressionIndex"), 10);
                            for (tC.internalvars.i = tC.internalvars.lastIndex; tC.internalvars.i < tc_vars["itemsList"]['searchresult'].length && tC.internalvars.i < (tC.internalvars.lastIndex + 20); tC.internalvars.i++) {
                                ga('ec:addImpression', {
                                    'id': tc_vars["itemsList"]['searchresult'][tC.internalvars.i]['item_cod10'],
                                    'name': tc_vars["itemsList"]['searchresult'][tC.internalvars.i]['item_name'],
                                    'category': tc_vars["itemsList"]['searchresult'][tC.internalvars.i]['item_macro_category_id'] + "/" + tc_vars["itemsList"]['searchresult'][tC.internalvars.i]['item_micro_category_id'],
                                    'brand': tc_vars["itemsList"]['searchresult'][tC.internalvars.i]['item_brand'],
                                    'variant': tc_vars["itemsList"]['searchresult'][tC.internalvars.i]['item_color_id'],
                                    'price': tc_vars["itemsList"]['searchresult'][tC.internalvars.i]['item_discount_tf'],
                                    'list': tC.internalvars.listName,
                                    'position': tC.internalvars.i + 1,
                                    'dimension9': tc_vars["itemsList"]['searchresult'][tC.internalvars.i]['item_macro_category_id'] + "/" + tc_vars["itemsList"]['searchresult'][tC.internalvars.i]['item_micro_category_id'],
                                    'dimension58': ((tc_vars["itemsList"]['searchresult'][tC.internalvars.i]['item_unitprice_tf'] - tc_vars["itemsList"]['searchresult'][tC.internalvars.i]['item_discount_tf']) === 0) ? "NO" : "YES",
                                    'dimension59': ((tc_vars["itemsList"]['searchresult'][tC.internalvars.i]['item_unitprice_tf'] - tc_vars["itemsList"]['searchresult'][tC.internalvars.i]['item_discount_tf']) === 0) ? "NO" : "YES",
                                    'dimension60': ((tc_vars["itemsList"]['searchresult'][tC.internalvars.i]['item_unitprice_tf'] - tc_vars["itemsList"]['searchresult'][tC.internalvars.i]['item_discount_tf']) === 0) ? "NO" : "YES",
                                    'dimension61': ((tc_vars["itemsList"]['searchresult'][tC.internalvars.i]['item_unitprice_tf'] - tc_vars["itemsList"]['searchresult'][tC.internalvars.i]['item_discount_tf']) === 0) ? "NO" : "YES",
                                    'dimension64': tC.internalvars.discount_segment.getSegment(tc_vars["itemsList"]['searchresult'][tC.internalvars.i]['item_discount_tf'], tc_vars["itemsList"]['searchresult'][tC.internalvars.i]['item_unitprice_tf']),
                                    'dimension65': tC.internalvars.discount_segment.getSegment(tc_vars["itemsList"]['searchresult'][tC.internalvars.i]['item_discount_tf'], tc_vars["itemsList"]['searchresult'][tC.internalvars.i]['item_unitprice_tf']),
                                    'metric2': tc_vars["itemsList"]['searchresult'][tC.internalvars.i]['item_discount_tf'],
                                    'metric6': tc_vars["itemsList"]['searchresult'][tC.internalvars.i]['item_unitprice_tf']
                                });
                            }
                            ga('send', 'event', tc_vars["env_template"], 'impression', 'item_list', {
                                nonInteraction: true
                            });
                            tC.setCookie("tCImpressionIndex", tC.internalvars.i);
                        }
                    }
                }
                if (tc_vars["nav_pagetype"] === 'item') {
                    if ((typeof ga !== "undefined") && (typeof tc_vars["itemsList"] !== "undefined")) {
                        if (typeof tc_vars["itemsList"]['Related'] !== "undefined") {
                            for (tC.internalvars.i = 0; tC.internalvars.i < tc_vars["itemsList"]['Related'].length && tC.internalvars.i < 10; tC.internalvars.i++) {
                                ga('ec:addImpression', {
                                    'id': tc_vars["itemsList"]['Related'][tC.internalvars.i]['item_cod10'].toUpperCase(),
                                    'name': tc_vars["itemsList"]['Related'][tC.internalvars.i]['item_name'].toUpperCase(),
                                    'category': tc_vars["itemsList"]['Related'][tC.internalvars.i]['item_macro_category_id'].toUpperCase() + "/" + tc_vars["itemsList"]['Related'][tC.internalvars.i]['item_micro_category_id'].toUpperCase(),
                                    'brand': tc_vars["itemsList"]['Related'][tC.internalvars.i]['item_brand'].toUpperCase(),
                                    'variant': tc_vars["itemsList"]['Related'][tC.internalvars.i]['item_color_id'].toUpperCase(),
                                    'price': tc_vars["itemsList"]['Related'][tC.internalvars.i]['item_discount_tf'],
                                    'list': tc_vars["env_template"] + '|' + tc_vars["itemsList"]['Related'][tC.internalvars.i]['item_list'].toLowerCase(),
                                    'position': tC.internalvars.i + 1,
                                    'dimension9': tc_vars["itemsList"]['Related'][tC.internalvars.i]['item_macro_category_id'] + "/" + tc_vars["itemsList"]['Related'][tC.internalvars.i]['item_micro_category_id'],
                                    'dimension57': ((tc_vars["itemsList"]['Related'][tC.internalvars.i]['item_unitprice_tf'] - tc_vars["itemsList"]['Related'][tC.internalvars.i]['item_discount_tf']) === 0) ? "NO" : "YES",
                                    'dimension58': ((tc_vars["itemsList"]['Related'][tC.internalvars.i]['item_unitprice_tf'] - tc_vars["itemsList"]['Related'][tC.internalvars.i]['item_discount_tf']) === 0) ? "NO" : "YES",
                                    'dimension64': tC.internalvars.discount_segment.getSegment(tc_vars["itemsList"]['Related'][tC.internalvars.i]['item_discount_tf'], tc_vars["itemsList"]['Related'][tC.internalvars.i]['item_unitprice_tf']),
                                    'dimension65': tC.internalvars.discount_segment.getSegment(tc_vars["itemsList"]['Related'][tC.internalvars.i]['item_discount_tf'], tc_vars["itemsList"]['Related'][tC.internalvars.i]['item_unitprice_tf']),
                                    'metric2': tc_vars["itemsList"]['Related'][tC.internalvars.i]['item_discount_tf'],
                                    'metric6': tc_vars["itemsList"]['Related'][tC.internalvars.i]['item_unitprice_tf']
                                });
                            }
                            ga('send', 'event', 'item', 'impression', 'related', {
                                nonInteraction: true
                            });
                        }
                        if (typeof tc_vars["itemsList"]['RecentlyView'] !== "undefined") {
                            for (tC.internalvars.i = 0; tC.internalvars.i < tc_vars["itemsList"]['RecentlyView'].length && tC.internalvars.i < 10; tC.internalvars.i++) {
                                ga('ec:addImpression', {
                                    'id': tc_vars["itemsList"]['RecentlyView'][tC.internalvars.i]['item_cod10'].toUpperCase(),
                                    'name': tc_vars["itemsList"]['RecentlyView'][tC.internalvars.i]['item_name'].toUpperCase(),
                                    'category': tc_vars["itemsList"]['RecentlyView'][tC.internalvars.i]['item_macro_category_id'].toUpperCase() + "/" + tc_vars["itemsList"]['RecentlyView'][tC.internalvars.i]['item_micro_category_id'].toUpperCase(),
                                    'brand': tc_vars["itemsList"]['RecentlyView'][tC.internalvars.i]['item_brand'].toUpperCase(),
                                    'variant': tc_vars["itemsList"]['RecentlyView'][tC.internalvars.i]['item_color_id'].toUpperCase(),
                                    'price': tc_vars["itemsList"]['RecentlyView'][tC.internalvars.i]['item_discount_tf'],
                                    'list': tc_vars["env_template"] + '|' + tc_vars["itemsList"]['RecentlyView'][tC.internalvars.i]['item_list'].toLowerCase(),
                                    'position': tC.internalvars.i + 1,
                                    'dimension9': tc_vars["itemsList"]['RecentlyView'][tC.internalvars.i]['item_macro_category_id'] + "/" + tc_vars["itemsList"]['RecentlyView'][tC.internalvars.i]['item_micro_category_id'],
                                    'dimension57': ((tc_vars["itemsList"]['RecentlyView'][tC.internalvars.i]['item_unitprice_tf'] - tc_vars["itemsList"]['RecentlyView'][tC.internalvars.i]['item_discount_tf']) === 0) ? "NO" : "YES",
                                    'dimension58': ((tc_vars["itemsList"]['RecentlyView'][tC.internalvars.i]['item_unitprice_tf'] - tc_vars["itemsList"]['RecentlyView'][tC.internalvars.i]['item_discount_tf']) === 0) ? "NO" : "YES",
                                    'dimension64': tC.internalvars.discount_segment.getSegment(tc_vars["itemsList"]['RecentlyView'][tC.internalvars.i]['item_discount_tf'], tc_vars["itemsList"]['RecentlyView'][tC.internalvars.i]['item_unitprice_tf']),
                                    'dimension65': tC.internalvars.discount_segment.getSegment(tc_vars["itemsList"]['RecentlyView'][tC.internalvars.i]['item_discount_tf'], tc_vars["itemsList"]['RecentlyView'][tC.internalvars.i]['item_unitprice_tf']),
                                    'metric2': tc_vars["itemsList"]['RecentlyView'][tC.internalvars.i]['item_discount_tf'],
                                    'metric6': tc_vars["itemsList"]['RecentlyView'][tC.internalvars.i]['item_unitprice_tf']
                                });
                            }
                            ga('send', 'event', 'item', 'impression', 'recentlyview', {
                                nonInteraction: true
                            });
                        }
                    }
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E17')) {
            if (tc_array_events["id"] == 'virtual_storelocator') {
                tC.launchTag('evirtual_storelocator', 'Virtual storelocator', '-1', '5181', '19');
                tC.log("virtual_storelocator");
                tC.log(tc_array_events);
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'pageview', {
                        'hitCallback': function() {
                            tC.log('hit sent');
                        }
                    });
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E22')) {
            if (tc_array_events["id"] == 'car_univ') {
                tC.launchTag('ecar_univ', '[NEW] Car univ', '-1', '5181', '19');
                tC.log("[NEW] Car univ");
                tC.log(tc_array_events);
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    if (tc_array_events["event"] === "Engraving validation" || tc_array_events["event"] === "Embossing validation" || tc_array_events["event"] === "Adjustement validation") {
                        ga('send', 'event', tc_array_events["category"], tc_array_events["event"], tC.internalvars.getModifiedString(tc_array_events["prdline"]) + " - " + tc_array_events["prdcollection"] + " - " + tC.internalvars.getID(tc_array_events["prdid"]) + " - " + tc_array_events["prdname"]);
                    } else if (tc_array_events["event"] === "size update") {
                        ga('send', 'event', tc_array_events["category"], tc_array_events["event"], tC.internalvars.getModifiedString(tc_array_events["prdline"]) + " - " + tc_array_events["prdcollection"] + " - " + tc_array_events["prdid"] + " - " + tc_array_events["prdname"]);
                    } else
                        ga('send', 'event', tc_array_events["category"], tc_array_events["event"], tC.internalvars.getModifiedString(tc_array_events["prdline"]) + " - " + tc_array_events["prdcollection"] + " - " + tc_array_events["prdsellable"] + " - " + tC.internalvars.getID(tc_array_events["prdid"]));
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E24')) {
            if (tc_array_events["id"] == 'univ_noninter') {
                tC.launchTag('euniv_noninter', '[NEW] Univ noninter', '-1', '5181', '19');
                tC.log("[NEW] Univ noninter");
                tC.log(tc_array_events);
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', tc_array_events["category"], tc_array_events["event"], tc_array_events["label"], {
                        nonInteraction: true
                    });
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E26')) {
            if (tc_array_events["id"] == 'batchImpressions') {
                tC.launchTag('ebatchImpressions', '[NEW] Batch impressions', '-1', '5181', '19');
                tC.log("[NEW] Batch impressions");
                tC.log(tc_array_events);
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('ec:addImpression', {
                        'id': tC.internalvars.getID(tc_array_events["product_mfPartNumber"]),
                        'name': tc_array_events["prdname"],
                        'category': tc_array_events.dataSt.prdcategory,
                        'brand': tc_array_events["brand"],
                        'variant': tc_array_events.dataSt.variant,
                        'price': tc_array_events["discountedPrice"],
                        'list': (tc_vars.nav_pagetype === 'cart') ? 'Checkout pages: Other suggestions - ' + tc_vars["nav_languageCode"] + '_' + tc_vars["nav_countryCode"].toLowerCase() + '/step1/shopping-bag' : tc_array_events.dataSt.list,
                        'position': tc_array_events["position"] + 1,
                        'dimension17': tC.internalvars.getModifiedString(tc_array_events.dataSt.prdline),
                        'dimension18': tc_array_events.dataSt.prdcollection,
                        'dimension27': tc_array_events.dataSt.prdsellable,
                        'dimension31': tc_array_events.dataSt.variant,
                        'dimension34': tC.internalvars.getID(tc_array_events["product_mfPartNumber"])
                    });
                    ga('send', 'event', 'Product list', tc_array_events["prdname"], tC.internalvars.getID(tc_array_events["product_mfPartNumber"]), {
                        nonInteraction: true
                    });
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E28')) {
            if (tc_array_events["id"] == 'virtualPageview_textsearch') {
                tC.launchTag('evirtualPageview_textsearch', '[NEW] virtualPageview textsearch', '-1', '5181', '19');
                tC.log("[NEW] virtualPageview textsearch");
                tC.log(tc_array_events);
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('set', 'location', document.location.href);
                    ga('set', 'page', tc_array_events["pgURI"]);
                    ga('send', 'pageview');
                }
            }
        }
    }
    if (tc_array_events["id"] == 'enh_removecart') {
        tC.launchTag('eenh_removecart', '[FWD] enh_removecart', '-1', '5181', '19');
        if (typeof window.tc_events_22 !== "undefined") {
            window.tc_events_22(this, "enh_removecart", tc_array_events);
        }
        if (typeof window.tc_events_26 !== "undefined") {
            window.tc_events_26(this, "enh_removecart", tc_array_events);
        }
    }
    if (tc_array_events["id"] == 'univ_variant') {
        tC.launchTag('euniv_variant', '[FWD] univ_variant', '-1', '5181', '19');
        if (typeof window.tc_events_22 !== "undefined") {
            window.tc_events_22(this, "univ_variant", tc_array_events);
        }
        if (typeof window.tc_events_26 !== "undefined") {
            window.tc_events_26(this, "univ_variant", tc_array_events);
        }
    }
    if (tc_array_events["id"] == 'enh_addcart') {
        tC.launchTag('eenh_addcart', '[FWD] enh_addcart', '-1', '5181', '19');
        if (typeof window.tc_events_22 !== "undefined") {
            window.tc_events_22(this, "enh_addcart", tc_array_events);
        }
        if (typeof window.tc_events_26 !== "undefined") {
            window.tc_events_26(this, "enh_addcart", tc_array_events);
        }
    }
    if (tc_array_events["id"] == 'enh_prod') {
        tC.launchTag('eenh_prod', '[FWD] enh_prod', '-1', '5181', '19');
        if (typeof window.tc_events_22 !== "undefined") {
            window.tc_events_22(this, "enh_prod", tc_array_events);
        }
        if (typeof window.tc_events_26 !== "undefined") {
            window.tc_events_26(this, "enh_prod", tc_array_events);
        }
    }
    if (tc_array_events["id"] == 'univ') {
        tC.launchTag('euniv', '[FWD] univ', '-1', '5181', '19');
        if (typeof window.tc_events_22 !== "undefined") {
            window.tc_events_22(this, "univ", tc_array_events);
        }
        if (typeof window.tc_events_26 !== "undefined") {
            window.tc_events_26(this, "univ", tc_array_events);
        }
    }
    if (tc_array_events["id"] == 'enh_prod_look') {
        tC.launchTag('eenh_prod_look', '[FWD] enh_prod_look', '-1', '5181', '19');
        if (typeof window.tc_events_22 !== "undefined") {
            window.tc_events_22(this, "enh_prod_look", tc_array_events);
        }
        if (typeof window.tc_events_26 !== "undefined") {
            window.tc_events_26(this, "enh_prod_look", tc_array_events);
        }
    }
    if (tc_array_events["id"] == 'enh_product_detail_look') {
        tC.launchTag('eenh_product_detail_look', '[FWD] enh_product_detail_look', '-1', '5181', '19');
        if (typeof window.tc_events_22 !== "undefined") {
            window.tc_events_22(this, "enh_product_detail_look", tc_array_events);
        }
        if (typeof window.tc_events_26 !== "undefined") {
            window.tc_events_26(this, "enh_product_detail_look", tc_array_events);
        }
    }
    if (tc_array_events["id"] == 'enh_prod_quick_buy') {
        tC.launchTag('eenh_prod_quick_buy', '[FWD] enh_prod_quick_buy', '-1', '5181', '19');
        if (typeof window.tc_events_22 !== "undefined") {
            window.tc_events_22(this, "enh_prod_quick_buy", tc_array_events);
        }
    }
    if (tc_array_events["id"] == 'enh_product_detail_quick_buy') {
        tC.launchTag('eenh_product_detail_quick_buy', '[FWD] enh_product_detail_quick_buy', '-1', '5181', '19');
        if (typeof window.tc_events_22 !== "undefined") {
            window.tc_events_22(this, "enh_product_detail_quick_buy", tc_array_events);
        }
    }
    if (tc_array_events["id"] == 'enh_trackPromotionClicks') {
        tC.launchTag('eenh_trackPromotionClicks', '[FWD] enh_trackPromotionClicks', '-1', '5181', '19');
        if (typeof window.tc_events_22 !== "undefined") {
            window.tc_events_22(this, "enh_trackPromotionClicks", tc_array_events);
        }
        if (typeof window.tc_events_26 !== "undefined") {
            window.tc_events_26(this, "enh_trackPromotionClicks", tc_array_events);
        }
    }
    if (tc_array_events["id"] == 'virtualPageView') {
        tC.launchTag('evirtualPageView', '[FWD] virtualPageView', '-1', '5181', '19');
        if (typeof window.tc_events_22 !== "undefined") {
            window.tc_events_22(this, "virtualPageView", tc_array_events);
        }
        if (typeof window.tc_events_26 !== "undefined") {
            window.tc_events_26(this, "virtualPageView", tc_array_events);
        }
    }
    if (tc_array_events["id"] == 'TcVarsItemsListUpdated') {
        tC.launchTag('eTcVarsItemsListUpdated', '[FWD] TcVarsItemsListUpdated', '-1', '5181', '19');
        if (typeof window.tc_events_22 !== "undefined") {
            window.tc_events_22(this, "TcVarsItemsListUpdated", tc_array_events);
        }
        if (typeof window.tc_events_26 !== "undefined") {
            window.tc_events_26(this, "TcVarsItemsListUpdated", tc_array_events);
        }
    }
    if (tc_array_events["id"] == 'virtual_storelocator') {
        tC.launchTag('evirtual_storelocator', '[FWD] virtual_storelocator', '-1', '5181', '19');
        if (typeof window.tc_events_22 !== "undefined") {
            window.tc_events_22(this, "virtual_storelocator", tc_array_events);
        }
        if (typeof window.tc_events_26 !== "undefined") {
            window.tc_events_26(this, "virtual_storelocator", tc_array_events);
        }
    }
    if (tc_array_events["id"] == 'car_univ') {
        tC.launchTag('ecar_univ', '[FWD] car_univ', '-1', '5181', '19');
        if (typeof window.tc_events_22 !== "undefined") {
            window.tc_events_22(this, "car_univ", tc_array_events);
        }
        if (typeof window.tc_events_26 !== "undefined") {
            window.tc_events_26(this, "car_univ", tc_array_events);
        }
    }
    if (tc_array_events["id"] == 'univ_noninter') {
        tC.launchTag('euniv_noninter', '[FWD] univ_noninter', '-1', '5181', '19');
        if (typeof window.tc_events_22 !== "undefined") {
            window.tc_events_22(this, "univ_noninter", tc_array_events);
        }
        if (typeof window.tc_events_26 !== "undefined") {
            window.tc_events_26(this, "univ_noninter", tc_array_events);
        }
    }
    if (tc_array_events["id"] == 'batchImpressions') {
        tC.launchTag('ebatchImpressions', '[FWD] batchImpressions', '-1', '5181', '19');
        if (typeof window.tc_events_22 !== "undefined") {
            window.tc_events_22(this, "batchImpressions", tc_array_events);
        }
        if (typeof window.tc_events_26 !== "undefined") {
            setTimeout(function() {
                window.tc_events_26(this, "batchImpressions", tc_array_events);
                tC.log('tc_events_26 - forwarded')
            }, 10000);
        }
    }
    if (tc_array_events["id"] == 'virtualPageview_textsearch') {
        tC.launchTag('evirtualPageview_textsearch', '[FWD] virtualPageview_textsearch', '-1', '5181', '19');
        if (typeof window.tc_events_22 !== "undefined") {
            window.tc_events_22(this, "virtualPageview_textsearch", tc_array_events);
        }
        if (typeof window.tc_events_5 !== "undefined") {
            window.tc_events_5(this, "virtualPageview_textsearch", tc_array_events);
        }
        if (typeof window.tc_events_26 !== "undefined") {
            window.tc_events_26(this, "virtualPageview_textsearch", tc_array_events);
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E101')) {
            if (tc_array_events["id"] == 'pg_scroll_25') {
                tC.launchTag('epg_scroll_25', '[NEW] Page Scroll 25%', '-1', '5181', '19');
                tC.log("[NEW] Page Scroll 25%");
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'Scroll', '25%', tc_vars["pguri"], {
                        nonInteraction: true
                    })
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E103')) {
            if (tc_array_events["id"] == 'pg_scroll_50') {
                tC.launchTag('epg_scroll_50', '[NEW] Page Scroll 50%', '-1', '5181', '19');
                tC.log("[NEW] Page Scroll 50%");
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'Scroll', '50%', tc_vars["pguri"], {
                        nonInteraction: true
                    })
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E105')) {
            if (tc_array_events["id"] == 'pg_scroll_75') {
                tC.launchTag('epg_scroll_75', '[NEW] Page Scroll 75%', '-1', '5181', '19');
                tC.log("[NEW] Page Scroll 75%");
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'Scroll', '75%', tc_vars["pguri"], {
                        nonInteraction: true
                    })
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E107')) {
            if (tc_array_events["id"] == 'pg_scroll_100') {
                tC.launchTag('epg_scroll_100', '[NEW] Page Scroll 100%', '-1', '5181', '19');
                tC.log("[NEW] Page Scroll 100%");
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'Scroll', '100%', tc_vars["pguri"], {
                        nonInteraction: true
                    })
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E109')) {
            if (tc_array_events["id"] == 'promoImpression') {
                tC.launchTag('epromoImpression', '[NEW] Promo Impression', '-1', '5181', '19');
                tC.log("[NEW] Promo Impression");
                tC.log(tc_array_events);
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    if (tc_array_events[0] !== "undefined" && typeof tc_array_events[0] === "object") {
                        tC.log("multiple promos");
                        for (var count in tc_array_events) {
                            if (typeof tc_array_events[count] === "object") {
                                ga('ec:addPromo', {
                                    'id': tc_array_events[count]["prmid"],
                                    'name': tc_array_events[count]["prmname"],
                                    'creative': tc_array_events[count]["prmcreative"],
                                    'position': tc_array_events[count]["prmposition"]
                                });
                                ga('send', 'event', 'Internal Marketing', 'Promotion Impression', tc_array_events["prmid"], {
                                    nonInteraction: true
                                });
                            }
                        }
                    } else {
                        tC.log("single promos");
                        ga('ec:addPromo', {
                            'id': tc_array_events["prmid"],
                            'name': tc_array_events["prmname"],
                            'creative': tc_array_events["prmcreative"],
                            'position': tc_array_events["prmposition"]
                        });
                        ga('send', 'event', 'Internal Marketing', 'Promotion Impression', tc_array_events["prmid"], {
                            nonInteraction: true
                        });
                    }
                }
            }
        }
    }
    if (tc_array_events["id"] == 'promoImpression') {
        tC.launchTag('epromoImpression', '[FWD] Promo Impression', '-1', '5181', '19');
        if (typeof window.tc_events_22 !== "undefined") {
            window.tc_events_22(this, "promoImpression", tc_array_events);
        }
        if (typeof window.tc_events_26 !== "undefined") {
            window.tc_events_26(this, "promoImpression", tc_array_events);
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E114')) {
            if (tc_array_events["id"] == 'virtualPageview_popin') {
                tC.launchTag('evirtualPageview_popin', '[NEW] virtualPageView Popin', '-1', '5181', '19');
                tC.log("[NEW] virtualPageview popin");
                tC.log(tc_array_events);
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('set', 'location', document.location.href);
                    ga('set', 'page', tc_array_events["pguri"]);
                    ga('send', 'pageview');
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E116')) {
            if (tc_array_events["id"] == 'virtualPageView_opc') {
                tC.launchTag('evirtualPageView_opc', '[NEW] - Trigger - OPC - CARTIER', '-1', '5181', '19');
                tC.log("event: virtualPageView OPC");
                tC.log(tc_array_events);
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    var temp_concat = tc_vars["cart_items"];
                    for (var i = 0; i < temp_concat.length; i++) {
                        var product = temp_concat[i];
                        ga('ec:addProduct', {
                            'id': tC.internalvars.getID(product["cart_item_skuMfPartNumber"]),
                            'name': product["cart_item_eng_title"],
                            'category': product["cart_item_eng_microcategory"],
                            'brand': product["cart_item_brand"],
                            'variant': product["cart_item_eng_color"],
                            'price': product["cart_item_discount_ati"],
                            'quantity': product["cart_item_quantity"],
                            'dimension34': tC.internalvars.getID(tC.internalvars.masterSku_cart(product['cart_item_defaultMfPartNumber'], product['cart_item_mfPartNumber'])),
                            'dimension31': product['cart_item_eng_color'],
                            'dimension17': tC.internalvars.getModifiedString(product['cart_item_eng_category']),
                            'dimension18': product['cart_item_eng_collection'],
                            'dimension27': tC.internalvars.getSellable(product['cart_item_sellable']),
                            'dimension2': product['cart_item_display'],
                            'dimension30': tc_vars.cart_items[i].cart_item_size[0].SizeId,
                            'dimension15': tC.internalvars.getAvailability(product['cart_item_availability']),
                            'dimension9': tC.internalvars.singlePersonalized(product['cart_item_engravable'], product['cart_item_engraved']),
                            'dimension3': tC.internalvars.singlePersonalized(product['cart_item_embossable'], product['cart_item_embossed']),
                            'dimension16': tC.internalvars.singlePersonalized(product['cart_item_adjustable'], product['cart_item_adjusted']),
                            'dimension32': tC.internalvars.isPersonalizedNA(product['cart_item_engravable'], product['cart_item_embossable'], product['cart_item_adjustable'], product['cart_item_engraved'], product['cart_item_embossed'], product['cart_item_adjusted']),
                            'dimension23': tC.internalvars.getStringToNa(product['cart_item_eng_casematerial']),
                            'dimension20': tC.internalvars.getStringToNa(product['cart_item_eng_jewelmaterial']),
                            'dimension22': tC.internalvars.getStringToNa(product['cart_item_eng_strapmaterial']),
                            'dimension33': tC.internalvars.getStringToNa(product['cart_item_eng_leathermaterial'])
                        });
                    }
                    ga('ec:setAction', 'checkout', {
                        'step': tc_array_events["step"]
                    });
                    ga('set', 'location', document.location.href);
                    ga('set', 'page', '/' + tc_vars["nav_languageCode"] + '_' + tc_vars["nav_countryCode"].toLowerCase() + tc_array_events["pguri"]);
                    ga('require', 'linkid');
                    ga('send', 'pageview');
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E118')) {
            if (tc_array_events["id"] == 'univ_checkout') {
                tC.launchTag('euniv_checkout', '[NEW] Univ Checkout', '-1', '5181', '19');
                tC.log("[NEW] Univ Checkout");
                tC.log(tc_array_events);
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('ec:setAction', 'checkout', {
                        'step': tc_array_events["step"],
                        'option': tc_array_events["option"]
                    });
                    ga('send', 'event', "Checkout Funnel", "Checkout Option", tc_array_events["option"]);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E119')) {
            if (tc_array_events["id"] == 'virtualPageView_noenh') {
                tC.launchTag('evirtualPageView_noenh', '[NEW] - Trigger OPC (No ENH)', '-1', '5181', '19');
                tC.log("[NEW] virtualPageview No ENH");
                tC.log(tc_array_events);
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('set', 'location', document.location.href);
                    ga('set', 'page', '/' + tc_vars["nav_languageCode"] + '_' + tc_vars["nav_countryCode"].toLowerCase() + tc_array_events["pguri"]);
                    ga('send', 'pageview');
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E121')) {
            if (tc_array_events["id"] == 'virtualPageView') {
                tC.launchTag('evirtualPageView', '[NEW] - CG Ynap for Trigger OPC', '-1', '5181', '19');
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    switch (tc_array_events["stepName"]) {
                    case 'CheckMail':
                        tC.internalvars.GA_step_name = "checkemail";
                        break;
                    case 'ShippingAddress':
                        tC.internalvars.GA_step_name = "delivery";
                        break;
                    case 'Payment':
                        tC.internalvars.GA_step_name = "payment";
                        break;
                    case 'Finalization':
                        tC.internalvars.GA_step_name = "confirmation";
                        break;
                    case 'DeliveryMethod':
                        tC.internalvars.GA_step_name = "deliverymethod";
                        break;
                    case 'Gift':
                        tC.internalvars.GA_step_name = "gift";
                        break;
                    default:
                        tC.internalvars.GA_step_name = "";
                        break;
                    }
                    ga('set', 'contentGroup4', 'checkout');
                    ga('set', 'contentGroup5', 'checkout' + '-' + tC.internalvars.GA_step_name);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E165')) {
            if (tc_array_events["id"] == 'batchImpressions_Alg') {
                tC.launchTag('ebatchImpressions_Alg', '[NEW] - Batchimpressions Algolia', '-1', '5181', '19');
                tC.log("[NEW] Batch impressions");
                tC.log(tc_array_events);
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('ec:addImpression', {
                        'id': tC.internalvars.getID(tc_array_events["prdid"]),
                        'name': tc_array_events["product_eng_title"],
                        'category': tc_array_events["prdcategory"],
                        'brand': 'CARTIER',
                        'variant': tc_array_events["prdvariant"],
                        'price': tc_array_events["prdprice"],
                        'list': tc_array_events["list"],
                        'position': tc_array_events["position"] + 1,
                        'dimension17': tC.internalvars.getModifiedString(tc_array_events["prdline"]),
                        'dimension18': tc_array_events["prdcollection"],
                        'dimension27': tC.internalvars.getSellable(tc_array_events["prdsellable"]),
                        'dimension31': tc_array_events["prdvariant"],
                        'dimension34': tC.internalvars.getID(tc_array_events["prdid"])
                    });
                    ga('send', 'event', 'Product list', tc_array_events["product_eng_title"], tC.internalvars.getID(tc_array_events["prdid"]), {
                        nonInteraction: true
                    });
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "batchImpressions_Alg", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E194')) {
            if (tc_array_events["id"] == 'enh_prod_Alg') {
                tC.launchTag('eenh_prod_Alg', 'Universal - eCE - addProduct click - Algolia', '-1', '5181', '19');
                tC.log("enh_prod_Alg");
                tC.log(tc_array_events);
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('ec:addProduct', {
                        'id': tC.internalvars.getID(tc_array_events["prdid"]),
                        'name': tc_array_events["product_eng_title"],
                        'category': tc_array_events["prdcategory"],
                        'brand': 'CARTIER',
                        'variant': tc_array_events["prdvariant"],
                        'price': tc_array_events["prdprice"],
                        'position': tc_array_events["position"] + 1,
                        'dimension17': tC.internalvars.getModifiedString(tc_array_events["prdline"]),
                        'dimension18': tc_array_events["prdcollection"],
                        'dimension27': tc_array_events["prdsellable"],
                        'dimension31': tc_array_events["prdvariant"],
                        'dimension34': tC.internalvars.getID(tc_array_events["prdid"])
                    });
                    ga('ec:setAction', 'click', {
                        'list': tc_array_events["list"]
                    });
                    ga('send', 'event', 'Product list', 'Product click', tC.internalvars.getID(tc_array_events["prdid"]), {
                        hitCallback: function() {
                            tC.log('send_sr')
                        }
                    });
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "enh_prod_Alg", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E212')) {
            if (tc_array_events["id"] == 'univ_footer') {
                tC.launchTag('euniv_footer', 'Universal event - Footer', '-1', '5181', '19');
                tC.log("universal");
                tC.log(tc_array_events);
                if (typeof ga != "undefined") {
                    ga('send', 'event', tc_array_events["category"], tC.internalvars.Footer(tc_array_events["event"]));
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "univ_footer", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E221')) {
            if (tc_array_events["id"] == 'openLivechat') {
                tC.launchTag('eopenLivechat', 'Event - Salesforce Interaction - OpenLiveChat', '-1', '5181', '19');
                tC.log(tc_array_events);
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'Salesforce Livechat', 'open chat', tc_array_events["livechatId"], {
                        nonInteraction: true
                    });
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "openLivechat", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E223')) {
            if (tc_array_events["id"] == 'onChatEndedByAgent') {
                tC.launchTag('eonChatEndedByAgent', 'Event - Salesforce Interaction - onChatEndedByAgent', '-1', '5181', '19');
                tC.log(tc_array_events);
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'Salesforce Livechat', 'end conversation by agent', tc_array_events["livechatId"] + " - " + tc_array_events["advisorId"], {
                        nonInteraction: true
                    });
                    ga('send', 'event', 'Salesforce Livechat', "end conversation", tc_array_events["livechatId"] + " - " + tc_array_events["advisorId"], {
                        nonInteraction: true
                    });
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E225')) {
            if (tc_array_events["id"] == 'onChatEndedByChasitor') {
                tC.launchTag('eonChatEndedByChasitor', 'Event - Salesforce Interaction - onChatEndedByChasitor', '-1', '5181', '19');
                tC.log(tc_array_events);
                if (typeof ga != "undefined") {
                    ga('send', 'event', 'Salesforce Livechat', 'end conversation by user', tc_array_events["livechatId"] + " - " + tc_array_events["advisorId"], {
                        nonInteraction: true
                    });
                    ga('send', 'event', 'Salesforce Livechat', "end conversation", tc_array_events["livechatId"] + " - " + tc_array_events["advisorId"], {
                        nonInteraction: true
                    });
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "onChatEndedByChasitor", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E227')) {
            if (tc_array_events["id"] == 'onChasitorMessage') {
                tC.launchTag('eonChasitorMessage', 'Event - Salesforce Interaction - onChasitorMessage', '-1', '5181', '19');
                tC.log(tc_array_events);
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'Salesforce Livechat', 'visitor chat message', tc_array_events["livechatId"] + " - " + tc_array_events["advisorId"], {
                        nonInteraction: true
                    });
                    ga('send', 'event', 'Salesforce Livechat', "chat message", tc_array_events["livechatId"] + " - " + tc_array_events["advisorId"], {
                        nonInteraction: true
                    });
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "onChasitorMessage", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E229')) {
            if (tc_array_events["id"] == 'onAgentMessage') {
                tC.launchTag('eonAgentMessage', 'Event - Salesforce Interaction - onAgentMessage', '-1', '5181', '19');
                tC.log(tc_array_events);
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'Salesforce Livechat', 'agent chat message', tc_array_events["livechatId"] + " - " + tc_array_events["advisorId"], {
                        nonInteraction: true
                    });
                    ga('send', 'event', 'Salesforce Livechat', "chat message", tc_array_events["livechatId"] + " - " + tc_array_events["advisorId"], {
                        nonInteraction: true
                    });
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "onAgentMessage", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E231')) {
            if (tc_array_events["id"] == 'closeLivechat') {
                tC.launchTag('ecloseLivechat', 'Event - Salesforce Interaction - closeLivechat', '-1', '5181', '19');
                tC.log(tc_array_events);
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'Salesforce Livechat', 'close chat', tc_array_events["livechatId"], {
                        nonInteraction: true
                    });
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "closeLivechat", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E233')) {
            if (tc_array_events["id"] == 'onConnectionError') {
                tC.launchTag('eonConnectionError', 'Event - Salesforce Interaction - onConnectionError', '-1', '5181', '19');
                tC.log(tc_array_events);
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'Salesforce Livechat', 'connection error', tc_array_events["livechatId"] + " - " + tc_array_events["advisorId"], {
                        nonInteraction: true
                    });
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "onConnectionError", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E235')) {
            if (tc_array_events["id"] == 'onAgentMessage') {
                tC.launchTag('eonAgentMessage', 'unescapeChat', '-1', '5181', '19');
                function htmlDecode(input) {
                    var e = document.getElementsByClassName('embeddedServiceSidebar');
                    e.innerHTML = input;
                    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
                }
                htmlDecode(input);
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E240')) {
            if (tc_array_events["id"] == 'hero_event') {
                tC.launchTag('ehero_event', 'Universal - Hero chat events', '-1', '5181', '19');
                tC.log("hero_event");
                tC.log(tc_array_events);
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E242')) {
            if (tc_array_events["id"] == 'SalesforceChatRedirection') {
                tC.launchTag('eSalesforceChatRedirection', 'Event - Salesforce Interaction - salesforceChatRedirection', '-1', '5181', '19');
                tC.log(tc_array_events);
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'Hero Livechat', 'salesforce chat redirection', {
                        nonInteraction: true
                    });
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "SalesforceChatRedirection", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E244')) {
            if (tc_array_events["id"] == 'baavirtualPageview') {
                tC.launchTag('ebaavirtualPageview', 'Universal - event - Book an appointment virtualPageview', '-1', '5181', '19');
                tC.log("Universal - event - Book an appointment virtualPageview");
                tC.internalvars.BaaStReplace = '';
                String.prototype.replaceAt = function(index, replacement) {
                    if (index >= this.length) {
                        return this.valueOf();
                    }
                    return this.substring(0, index) + replacement + this.substring(index + 1);
                }
                ;
                var str = tc_array_events["pageURI"]
                str = str.replaceAt(3, '_');
                tC.internalvars.BaaStReplace = str;
                tC.log(tC.internalvars.BaaStReplace);
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('set', 'location', document.location.href);
                    ga('set', 'page', tC.internalvars.BaaStReplace);
                    ga('send', 'pageview');
                }
                tC.log(tC.internalvars.BaaStReplace)
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "baavirtualPageview", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E246')) {
            if (tc_array_events["id"] == 'baa_confirmation') {
                tC.launchTag('ebaa_confirmation', 'Universal - event - Book an appointment confirmation', '-1', '5181', '19');
                tC.log(tc_array_events);
                tC.log("Book an appointment confirmation event");
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', "Boutique Appointment Form", "Confirmation", tc_array_events["boutiqueName"] + " - " + tc_array_events["boutique"] + " - " + tc_array_events["purpose"] + " - " + tc_array_events["type"] + " - " + tc_array_events["channel"] + "-" + tc_array_events["appointmentId"] + "-" + tc_vars["nav_countryCode"].toLowerCase() + "-" + tc_vars["nav_languageCode"]);
                    ga('set', 'location', document.location.href);
                    ga('set', 'page', '/' + tc_vars["nav_languageCode"] + '_' + tc_vars["nav_countryCode"].toLowerCase() + '/book-an-appointment/step5/confirmation');
                    ga('send', 'pageview');
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "baa_confirmation", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E248')) {
            if (tc_array_events["id"] == 'enh_addcart') {
                tC.launchTag('eenh_addcart', 'Universal - event - DE Only - Add to Cart', '-1', '5181', '19');
                tC.log("Add to Cart DE Event");
                tC.log(tc_array_events);
                if ((typeof ga != "undefined") && (tc_vars["nav_countryCode"] === "DE") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'Cart Media DE', 'Add To Cart', tC.internalvars.getModifiedString(tc_array_events.dataSt.prdline) + " - " + tC.internalvars.getStringToNa(tc_array_events.dataSt.prdcollection) + " - " + tc_array_events.dataSt.prdsellable + " - " + tC.internalvars.getID(tc_array_events["productSkuMfPartNumber"]) + " - " + tc_array_events["prdname"], '140');
                }
            }
        }
    }
    if (tc_array_events["id"] == 'virtualPageView_opc') {
        tC.launchTag('evirtualPageView_opc', '[FWD] - Trigger - OPC - CARTIER', '-1', '5181', '19');
        if (typeof window.tc_events_5 !== "undefined") {
            window.tc_events_5(this, "virtualPageView_opc", tc_array_events);
        }
        if (typeof window.tc_events_26 !== "undefined") {
            window.tc_events_26(this, "virtualPageView_opc", tc_array_events);
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E252')) {
            if (tc_array_events["id"] == 'virtualPageview_popin') {
                tC.launchTag('evirtualPageview_popin', '[FWD] virtualPageView Popin', '-1', '5181', '19');
                if (typeof window.tc_events_5 !== "undefined") {
                    window.tc_events_5(this, "virtualPageview_popin", tc_array_events);
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "virtualPageview_popin", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E309')) {
            if (tc_array_events["id"] == 'pasha_configurator_view') {
                tC.launchTag('epasha_configurator_view', 'Universal - event - Pasha configurator view', '-1', '5181', '19');
                tC.log(tc_array_events);
                if ((typeof ga !== "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'Pasha Configurator', 'click - CTA view', tc_array_events["item_size"] + " - " + tc_array_events["item_diamond"] + " - " + tc_array_events["item_material_case"] + " - " + tc_array_events["item_dial_colour"] + " - " + tc_array_events["item_dial_function"] + " - " + tc_array_events["item_strap"] + " - " + tc_array_events["item_id"]);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E313')) {
            if (tc_array_events["id"] == 'add_shipping_address') {
                tC.launchTag('eadd_shipping_address', '[FWD] - add_shipping_address', '-1', '5181', '19');
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "add_shipping_address", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E318')) {
            if (tc_array_events["id"] == 'go_to_fragrance') {
                tC.launchTag('ego_to_fragrance', 'Universal - event - go to fragrance click', '-1', '5181', '19');
                tC.log(tc_array_events);
                if ((typeof ga !== "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'Fragrance finder', 'click - go to fragrance', tc_array_events["item_id"] + " - " + tc_array_events["fragrance_sensation"] + " - " + tc_array_events["fragrance_discover"] + " - " + tc_array_events["fragrance_preference"]);
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "go_to_fragrance", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E320')) {
            if (tc_array_events["id"] == 'time_video_click') {
                tC.launchTag('etime_video_click', 'Universal - event - Time Project video tracking', '-1', '5181', '19');
                tC.log(tc_array_events);
                if ((typeof ga !== "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'Time Video Click', tc_array_events["video_name"], tc_array_events["video_position"]);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E321')) {
            if (tc_array_events["id"] == 'enh_addwishlist') {
                tC.launchTag('eenh_addwishlist', 'Universal - eCe - addWishlist ', '-1', '5181', '19');
                tC.log("enh_addwishlist");
                tC.log(tc_array_events);
                tC.internalvars.masterSku_event = "";
                if (tc_array_events["defaultMfPartNumber"] !== "") {
                    tC.internalvars.masterSku_event = tc_array_events["defaultMfPartNumber"];
                } else {
                    tC.internalvars.masterSku_event = tc_array_events["mfPartNumber"];
                }
                if ((typeof ga != "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('ec:addProduct', {
                        'id': tC.internalvars.getID(tc_array_events["productSkuMfPartNumber"]),
                        'name': tc_array_events["prdname"],
                        'category': tc_array_events.dataSt.prdcategory,
                        'brand': tc_array_events["brand"],
                        'variant': tc_array_events.dataSt.prdvariant,
                        'price': tc_array_events["discount_price_ati"],
                        'quantity': tc_array_events["quantity"],
                        'dimension34': tC.internalvars.getID(tC.internalvars.masterSku_event),
                        'dimension17': tC.internalvars.getModifiedString(tc_array_events.dataSt.prdline),
                        'dimension18': tC.internalvars.getStringToNa(tc_array_events.dataSt.prdcollection),
                        'dimension27': tc_array_events.dataSt.prdsellable,
                        'dimension2': tc_vars["prddisplay"],
                        'dimension30': tC.internalvars.getStringToNa(tc_array_events["productSize"]),
                        'dimension15': tC.internalvars.getAvailability(tc_array_events["productAvailability"]),
                        'dimension9': tC.internalvars.isEngravedNA(tc_array_events["productEngravable"], tc_array_events["personalizationType"]),
                        'dimension3': tC.internalvars.isEmbossedNA(tc_array_events["productEmbossable"], tc_array_events["personalizationType"]),
                        'dimension16': tC.internalvars.isAdjustedNA(tc_array_events["productAdjustable"], tc_array_events["personalizationType"]),
                        'dimension32': tC.internalvars.isPersonalizedNabis2(tc_array_events["productEngravable"], tc_array_events["productEmbossable"], tc_array_events["productAdjustable"], tc_array_events["personalizationType"]),
                        'dimension23': tC.internalvars.getStringToNa(tc_array_events["product_eng_casematerial"]),
                        'dimension20': tC.internalvars.getStringToNa(tc_array_events["product_eng_jewelmaterial"]),
                        'dimension22': tC.internalvars.getStringToNa(tc_array_events["product_eng_strapmaterial"]),
                        'dimension33': tC.internalvars.getStringToNa(tc_array_events["product_eng_leathermaterial"]),
                        'dimension88': tc_array_events.dataSt.pashaConfigurator,
                        'dimension35': tc_array_events.dataSt.item_strap_exchanged
                    });
                    ga('ec:setAction', 'add');
                    ga('send', 'event', 'Wishlist', 'Add To Whislist', tC.internalvars.getModifiedString(tc_array_events.dataSt.prdline) + " - " + tC.internalvars.getStringToNa(tc_array_events.dataSt.prdcollection) + " - " + tc_array_events.dataSt.prdsellable + " - " + tC.internalvars.getID(tc_array_events["productSkuMfPartNumber"]) + " - " + tc_array_events["prdname"]);
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "enh_addwishlist", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E327')) {
            if (tc_array_events["id"] == 'restartChapter') {
                tC.launchTag('erestartChapter', 'Universal - event - EOY Gaming - restartChapter', '-1', '5181', '19');
                tC.log(tc_array_events);
                if ((typeof ga !== "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'EOY Gaming - Restart Chapter', tc_array_events["chapter"], tc_array_events["fromPage"]);
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "restartChapter", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E328')) {
            if (tc_array_events["id"] == 'shareMobile') {
                tC.launchTag('eshareMobile', 'Universal - event - EOY Gaming - shareMobile', '-1', '5181', '19');
                tC.log(tc_array_events);
                if ((typeof ga !== "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'EOY Gaming - Share Mobile', tc_array_events["fromPage"]);
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "shareMobile", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E329')) {
            if (tc_array_events["id"] == 'shareDesktop') {
                tC.launchTag('eshareDesktop', 'Universal - event - EOY Gaming - shareDesktop', '-1', '5181', '19');
                tC.log(tc_array_events);
                if ((typeof ga !== "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'EOY Gaming - Share Desktop', tc_array_events["fromPage"]);
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "shareDesktop", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E330')) {
            if (tc_array_events["id"] == 'accessLegals') {
                tC.launchTag('eaccessLegals', 'Universal - event - EOY Gaming - Access Legals', '-1', '5181', '19');
                tC.log(tc_array_events);
                if ((typeof ga !== "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'EOY Gaming - Access Legals');
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "accessLegals", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E331')) {
            if (tc_array_events["id"] == 'accessTerms') {
                tC.launchTag('eaccessTerms', 'Universal - event - EOY Gaming - accessTerms', '-1', '5181', '19');
                tC.log(tc_array_events);
                if ((typeof ga !== "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'EOY Gaming - Access Terms');
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "accessTerms", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E332')) {
            if (tc_array_events["id"] == 'reachEndChapter') {
                tC.launchTag('ereachEndChapter', 'Universal - event - EOY Gaming - reachEndChapter', '-1', '5181', '19');
                tC.log(tc_array_events);
                if ((typeof ga !== "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'EOY Gaming - Reach End Chapter', tc_array_events["chapter"]);
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "reachEndChapter", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E333')) {
            if (tc_array_events["id"] == 'openDiscoveriesPanel') {
                tC.launchTag('eopenDiscoveriesPanel', 'Universal - event - EOY Gaming - openDiscoveriesPanel', '-1', '5181', '19');
                tC.log(tc_array_events);
                if ((typeof ga !== "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'EOY Gaming - Open Discoveries Panel');
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "openDiscoveriesPanel", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E334')) {
            if (tc_array_events["id"] == 'unlockDiscovery') {
                tC.launchTag('eunlockDiscovery', 'Universal - event - EOY Gaming - unlockDiscovery', '-1', '5181', '19');
                tC.log(tc_array_events);
                if ((typeof ga !== "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'EOY Gaming - Unlock Discovery', tc_array_events["discovery"]);
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "unlockDiscovery", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E335')) {
            if (tc_array_events["id"] == 'accessDiscovery') {
                tC.launchTag('eaccessDiscovery', 'Universal - event - EOY Gaming - accessDiscovery', '-1', '5181', '19');
                tC.log(tc_array_events);
                if ((typeof ga !== "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'EOY Gaming - Access Discovery', tc_array_events["discovery"]);
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "accessDiscovery", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E336')) {
            if (tc_array_events["id"] == 'openPrizesPanel') {
                tC.launchTag('eopenPrizesPanel', 'Universal - event - EOY Gaming - openPrizesPanel', '-1', '5181', '19');
                tC.log(tc_array_events);
                if ((typeof ga !== "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'EOY Gaming - Open Prizes Panel');
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "openPrizesPanel", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E337')) {
            if (tc_array_events["id"] == 'startGame') {
                tC.launchTag('estartGame', 'Universal - event - EOY Gaming - startGame', '-1', '5181', '19');
                tC.log(tc_array_events);
                if ((typeof ga !== "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'EOY Gaming - Start Game', tc_array_events["fromPage"]);
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "startGame", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E338')) {
            if (tc_array_events["id"] == 'pageview') {
                tC.launchTag('epageview', 'Universal - event - EOY Gaming - pageview', '-1', '5181', '19');
                tC.log(tc_array_events);
                if ((typeof ga !== "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'EOY Gaming - Content Views', tc_array_events["page"]);
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "pageview", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E339')) {
            if (tc_array_events["id"] == 'finalScore') {
                tC.launchTag('efinalScore', 'Universal - event - EOY Gaming - finalScore', '-1', '5181', '19');
                tC.log(tc_array_events);
                if ((typeof ga !== "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'EOY Gaming - Final Score', tc_array_events["score"]);
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "finalScore", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E340')) {
            if (tc_array_events["id"] == 'formSent') {
                tC.launchTag('eformSent', 'Universal - event - EOY Gaming - formSent', '-1', '5181', '19');
                tC.log(tc_array_events);
                if ((typeof ga !== "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'EOY Gaming - Form Sent');
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "formSent", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E358')) {
            if (tc_array_events["id"] == 'find_watch_view') {
                tC.launchTag('efind_watch_view', 'Universal - event - find my watch', '-1', '5181', '19');
                tC.log(tc_array_events);
                if ((typeof ga !== "undefined") && (tC.internalvars.amItester == "false")) {
                    ga('send', 'event', 'Find my watch', 'click - go to watch', tc_array_events["item_size"] + ' - ' + tc_array_events["item_diamond"] + ' - ' + tc_array_events["item_material_case"] + ' - ' + tc_array_events["item_shape_case"] + ' - ' + tc_array_events["item_movement"] + ' - ' + tc_array_events["item_strap"] + ' - ' + tc_array_events["item_id"] + ' - ' + tc_array_events["item_budget"]);
                }
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "find_watch_view", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E361')) {
            if (tc_array_events["id"] == 'explore') {
                tC.launchTag('eexplore', 'Event - WW24 - CTA Explore', '-1', '5181', '19');
                tC.log(tc_array_events);
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "explore", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E362')) {
            if (tc_array_events["id"] == 'stay_informed') {
                tC.launchTag('estay_informed', 'Event - WW24 - stay_informed', '-1', '5181', '19');
                tC.log(tc_array_events);
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "stay_informed", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E363')) {
            if (tc_array_events["id"] == 'discover_collection') {
                tC.launchTag('ediscover_collection', 'Event - WW24 - discover_collection', '-1', '5181', '19');
                tC.log(tc_array_events);
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "discover_collection", tc_array_events);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E364')) {
            if (tc_array_events["id"] == 'ww_instagram') {
                tC.launchTag('eww_instagram', 'Event - WW24 - ww_instagram', '-1', '5181', '19');
                tC.log(tc_array_events);
                if (typeof window.tc_events_26 !== "undefined") {
                    window.tc_events_26(this, "ww_instagram", tc_array_events);
                }
            }
        }
    }
}
tC.onDomReady(function() {
    tC.container_5181_19.eventlisteners();
    tC.eventTarget.dispatchEvent('container-ready');
});
