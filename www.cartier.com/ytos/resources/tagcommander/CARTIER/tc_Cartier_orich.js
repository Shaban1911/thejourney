/*
 * tagContainer Generator v94.1
 * Copyright Commanders Act
 * https://www.commandersact.com/fr/
 * Generated: 2024-07-29 10:46:51 Europe/Paris
 * ---
 * Version	: 83.09
 * IDTC 	: 5
 * IDS		: 5181
 */
/*!compressed by terser*/
"undefined" == typeof tC && (void 0 !== document.domain && void 0 !== document.referrer || (document = window.document),
function(t, e) {
    var n, r = t.document, i = (t.location,
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
            var i, s, d;
            if (!t)
                return this;
            if (t.nodeType)
                return this.context = this[0] = t,
                this.length = 1,
                this;
            if ("string" == typeof t) {
                if (!(i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : o.exec(t)) || !i[1] && e)
                    return !e || e.tC ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1])
                    return d = (e = e instanceof a ? e[0] : e) && e.nodeType ? e.ownerDocument || e : r,
                    t = a.parseHTML(i[1], d, !0),
                    c.test(i[1]) && a.isPlainObject(e) && this.attr.call(t, e, !0),
                    a.merge(this, t);
                if ((s = r.getElementById(i[2])) && s.parentNode) {
                    if (s.id !== i[2])
                        return n.find(t);
                    this.length = 1,
                    this[0] = s
                }
                return this.context = r,
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
        var t, e, n, r, i, o, c = arguments[0] || {}, s = 1, d = arguments.length, v = !1;
        for ("boolean" == typeof c && (v = c,
        c = arguments[1] || {},
        s = 2),
        "object" == typeof c || a.isFunction(c) || (c = {}),
        d === s && (c = this,
        --s); s < d; s++)
            if (null != (t = arguments[s]))
                for (e in t)
                    n = c[e],
                    c !== (r = t[e]) && (v && r && (a.isPlainObject(r) || (i = a.isArray(r))) ? (i ? (i = !1,
                    o = n && a.isArray(n) ? n : []) : o = n && a.isPlainObject(n) ? n : {},
                    c[e] = a.extend(v, o, r)) : undefined !== r && (c[e] = r));
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
            var r, i = Array.prototype.indexOf;
            if (e) {
                if (i)
                    return i.call(e, t, n);
                for (r = e.length,
                n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
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
            return null == t ? String(t) : s[i.call(t)] || "object"
        },
        each: function(t, e, n) {
            var r, i = 0, o = t.length, c = undefined === o || a.isFunction(t);
            if (n)
                if (c) {
                    for (r in t)
                        if (!1 === e.apply(t[r], n))
                            break
                } else
                    for (; i < o && !1 !== e.apply(t[i++], n); )
                        ;
            else if (c) {
                for (r in t)
                    if (!1 === e.call(t[r], r, t[r]))
                        break
            } else
                for (; i < o && !1 !== e.call(t[i], i, t[i++]); )
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
    n = a(r);
    a.buildFragment = function(t, e, n) {
        var i, o, c, s = t[0];
        return e = (e = !(e = e || r).nodeType && e[0] || e).ownerDocument || e,
        !(1 === t.length && "string" == typeof s && s.length < 512 && e === r && "<" === s.charAt(0)) || a.rnocache.test(s) || !a.support.checkClone && a.rchecked.test(s) || !a.support.html5Clone && a.rnoshimcache.test(s) || (o = !0,
        c = undefined !== (i = jQuery.fragments[s])),
        i || (i = e.createDocumentFragment(),
        a.clean(t, e, i, n),
        o && (a.fragments[s] = c && i)),
        {
            fragment: i,
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
        id_container: String(5),
        id_site: String(5181),
        frequency: String(620),
        containerVersion: String(83.09),
        generatorVersion: String("94.1"),
        containerStart: Date.now(),
        sourceKey: String("31a01236-3089-42aa-8a89-bfca8211a90a")
    };
    tC.config = tC.config || {},
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
        config: tC.config
    });
    var r, i, a, o, c = {};
    c["internalvars_" + n.id_site] = void 0 !== tC["internalvars_" + n.id_site] ? tC["internalvars_" + n.id_site] : {},
    tC.extend(c),
    window["tC_" + n.id_site + "_" + n.id_container] = n,
    tC.extend({
        launchTag: function(t, e, n, r, i, a) {
            void 0 === a && (a = 0),
            tC.array_launched_tags.push(e),
            tC.array_launched_tags_keys.push(t),
            tC.containersLaunched[r][i].t.push({
                id: t,
                label: e,
                idTpl: n
            }),
            window.top.postMessage('TC.EX:{"id":"' + t + '","idc":"' + i + '","idt":"' + n + '","ids":"' + r + '","lb":"' + e.replace(/"/g, '\\"') + '","idtr":"' + a + '"}', "*")
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
              , r = 0;
            return "string" == typeof e[r] && (n.event = e[r++]),
            "object" == typeof e[r] && (n.properties = Object.assign({}, e[r++])),
            "object" == typeof e[r] && (n.config = Object.assign({}, e[r++])),
            "function" == typeof e[r] && (n.callback = e[r++]),
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
                var e, n = JSON.parse(JSON.stringify(t)), r = n._done;
                return delete n.event,
                delete n.callback,
                delete n._done,
                e = 0 !== Object.keys(n).length ? [t.event, n, t.callback] : [t.event, t.callback],
                r && (e._tc_meta = {
                    done: r
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
                    var i = t.cact[n]._tc_version;
                    if (e = Array.prototype.slice.call(e, null == i ? 0 : 1),
                    null == i) {
                        var a = r(e);
                        t.cact[n](a, a.callback)
                    } else
                        t.cact[n].apply(t.cact, e)
                }
            }
              , n = function() {}
              , r = function(t) {
                var e, r;
                return "object" == typeof t[1] ? (e = t[1],
                r = t[2]) : "function" == typeof t[1] ? (e = {},
                r = t[1]) : e = {},
                e.event = t[0],
                e.callback = r || n,
                e
            };
            t.cact.exec = function() {
                for (var n = 0; n < window.caReady.length; ++n)
                    e(window.caReady[n]);
                var r = t.cactUtils.formatArgumentsV2(arguments);
                r && r.callback && r.callback()
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
        var t = function(t) {
            var e;
            return (e = t instanceof Event ? t.target : t)instanceof Element ? e : null
        };
        tC.cact.trigger = function() {
            var e = tC.cactUtils.formatArgumentsV2(arguments)
              , n = e.event
              , r = Object.assign({}, e.properties)
              , i = e.config
              , a = e.callback;
            if ("string" == typeof n && "" !== n) {
                if (tC.trigger) {
                    var o = t(r.from);
                    o && (i.eventTarget = o,
                    delete r.from),
                    tC.trigger({
                        event: n,
                        properties: r,
                        config: i
                    })
                }
                return a(),
                tC.uniqueEventIndex
            }
        }
        ,
        tC.cact.trigger._tc_version = 2,
        tC.cact.setProperty = function(t, e) {
            tC.set && "string" == typeof t && (tC.config = tC.config || {},
            tC.config.eventData = tC.config.eventData || {},
            tC.set(tC.config.eventData, t, e))
        }
        ,
        tC.cact.setProperty._tc_version = 2,
        tC.cact.dispatchEvent = function() {
            var e = tC.cactUtils.formatArgumentsV2(arguments)
              , n = e.event
              , r = Object.assign({}, e.properties)
              , i = Object.assign({}, e.config)
              , a = e.callback;
            i.eventData = r;
            var o = t(r.from);
            o && (i.eventTarget = o,
            delete r.from),
            tC.eventTarget.dispatchEvent(n, i),
            a()
        }
        ,
        tC.cact.dispatchEvent._tc_version = 2,
        tC.cact.emit = tC.cact.dispatchEvent,
        tC.cact.addEventListener = function() {
            var t = tC.cactUtils.formatArgumentsV2(arguments)
              , e = t.event
              , n = t.callback;
            return tC.eventTarget.addEventListener(e, n)
        }
        ,
        tC.cact.addEventListener._tc_version = 2,
        tC.cact.on = tC.cact.addEventListener,
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
        tC.cact.removeEventListener._tc_version = 2,
        tC.cact.off = tC.cact.removeEventListener
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
    tC.setCookie = tC.setCookie || function(t, e, n, r, i, a, o) {
        i || (i = tC.domain()),
        tC.config = tC.config || {},
        tC.cookieForceSameSite = tC.cookieForceSameSite || "",
        o = o || tC.config.cookieForceSameSite || tC.cookieForceSameSite,
        tC.isSameSiteContext() || (o = "None"),
        o || (o = tC.isSubdomain(i) ? "Lax" : "None"),
        tC.cookieForceSecure = null != tC.cookieForceSecure ? tC.cookieForceSecure : "",
        null == a && (a = tC.config.cookieForceSecure),
        null == a && (a = tC.cookieForceSecure),
        a = Boolean(Number(a)),
        "none" === o.toLowerCase() && (a = !0);
        var c = new Date;
        c.setTime(c.getTime()),
        n && (n = 1e3 * n * 60 * 60 * 24);
        var s = new Date(c.getTime() + n)
          , d = t + "=" + tC.cookieEncode(e) + (n ? ";expires=" + s.toGMTString() : "") + (r ? ";path=" + r : ";path=/") + (i ? ";domain=" + i : "") + (a ? ";secure" : "") + ";SameSite=" + o;
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
            var r = "";
            try {
                r = decodeURIComponent(n[1])
            } catch (t) {
                r = unescape(n[1])
            }
            return r
        }
        return ""
    }
    ,
    tC.cookieCheck = function(t) {
        var e, n = (t = t || {}).domain ? ";domain=" + t.domain : "", r = t.samesite ? ";samesite=" + t.samesite : "", i = Math.random().toString(36).substr(2, 9), a = "tc_test_cookie=" + i + ";expires=0;path=/;" + r + n;
        document.cookie = a;
        var o = new RegExp("(?:^|; )tc_test_cookie=([^;]*)").exec(document.cookie);
        return o && (o = o[1]),
        (e = o === i) && (a = "tc_test_cookie=;expires=" + new Date(0).toUTCString() + ";path=/;" + r + n,
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
        for (var n, r = !1, i = 2; !r && i <= e; ++i)
            n = "." + t.slice(e - i, e).join("."),
            r = tC.cookieCheck({
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
    tC.isTcDns = function(t) {
        return "" !== (t = t || "") && (-1 !== t.indexOf(".commander1.com") || -1 !== t.indexOf(".tagcommander.com"))
    }
    ,
    tC.isCustomDns = function(t) {
        return "" !== (t = t || "") && !tC.isTcDns(t)
    }
    ,
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
                var r = tC.getDomainLevels().map((function(t) {
                    return new RegExp("^[\\w,\\d,\\-]*" + t.replace(".", "\\.") + "$")
                }
                ));
                return e().find((function(t) {
                    return r.find((function(e) {
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
            createEvent: function(t, e) {
                var n;
                if (t instanceof Event && null == t.target)
                    n = t;
                else {
                    if ("string" != typeof t || "*" === t)
                        return;
                    n = new Event(t)
                }
                return null != e && "object" == typeof e || (e = {}),
                n.eventData = e,
                n
            },
            dispatchEvent: function(e, n) {
                n = n || {};
                var r = t.eventTarget.createEvent(e, n.eventData);
                this._eventTarget.dispatchEvent(r);
                var i = new Event("*");
                i.originalEvent = r,
                this._eventTarget.dispatchEvent(i),
                t.eventTarget.callTagTrigger(r.type, n)
            },
            callTagTrigger: function(e, n) {
                if (!0 !== n.skipTrigger) {
                    var r = t.eventTarget.createEvent(e, n.eventData)
                      , i = n.tagTrigger;
                    null == i && (i = r.type.replace(/-/g, "_"));
                    var a = n.eventTarget
                      , o = {};
                    a && a.getAttributeNames && a.getAttributeNames().forEach((function(t) {
                        o[t] = a[t]
                    }
                    )),
                    Object.defineProperty(r, "target", {
                        writable: !0,
                        value: o
                    }),
                    Object.defineProperty(r, "target", {
                        writable: !1
                    }),
                    null != i && null != t.event && "function" == typeof t.event[i] && t.event[i](r, r.eventData)
                }
            },
            dispatchEventAsync: function(e, n) {
                var r = 0;
                (n = Object.assign({}, n)).delay > 0 && (r = Number(n.delay),
                delete n.delay),
                setTimeout((function() {
                    t.eventTarget.dispatchEvent(e, n)
                }
                ), r)
            }
        }
    }(),
    tC.set = function(t, e, n) {
        if (!t || "object" != typeof t)
            return t;
        "string" == typeof e && (e = e.split(".").map((function(t) {
            return t.indexOf("[") > -1 ? t.replace(/\]/g, "").split("[") : t
        }
        )).reduce((function(t, e) {
            return t.concat(e)
        }
        ), []));
        for (var r = t, i = 0; i < e.length; i++) {
            var a = e[i];
            i === e.length - 1 ? r[a] = n : (r[a] && "object" == typeof r[a] || (r[a] = isNaN(Number(e[i + 1])) ? {} : []),
            r = r[a])
        }
        return t
    }
    ,
    tC.deepMerge = function() {
        var t = function(t) {
            return t && "object" == typeof t && !Array.isArray(t)
        }
          , e = Array.from(arguments)
          , n = e.shift();
        if (!e.length)
            return n;
        var r, i = e.shift();
        if (t(n) && t(i))
            for (var a in i)
                t(i[a]) ? (n[a] || ((r = {})[a] = {},
                Object.assign(n, r)),
                tC.deepMerge(n[a], i[a])) : ((r = {})[a] = i[a],
                Object.assign(n, r));
        return tC.deepMerge.apply(tC, [n].concat(e))
    }
    ,
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
        var r = function() {
            if (e.readyState === XMLHttpRequest.DONE) {
                var n = t[e.status >= 200 && e.status < 300 ? "done" : "fail"];
                if (n) {
                    var r = e.response;
                    if (!0 === t.json)
                        try {
                            r = JSON.parse(r)
                        } catch (t) {}
                    n(r, e.status)
                }
            }
        };
        e.onload = r,
        e.onerror = r,
        e.send(n)
    }
    ,
    function() {
        "use strict";
        tC.getCrossDomainCookie = tC.getCrossDomainCookie || function(t, e) {
            e = e || function() {}
            ;
            var n = t.siteId
              , r = t.name
              , i = t.domain;
            tC.xhr({
                url: "https://" + i + "/get-cookie?tc_s=" + n + "&name=" + r,
                withCredentials: !0,
                json: !0,
                done: function(t) {
                    var n = "";
                    try {
                        n = t[r] || ""
                    } catch (t) {}
                    e(n)
                },
                fail: function(t) {
                    tC.log && tC.log("error occured retrieving cookie " + r, t),
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
                syncDomain: "collect.commander1.com",
                siteQueryArg: "tcs"
            },
            "measure-visit": {
                path: "s3",
                serverId: "mix",
                defaultDomain: tC.clientCampaignDns || "mix.commander1.com",
                syncDomain: "collect.commander1.com",
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
        null == tC.track && (tC._trackVersion = 4),
        tC.track = tC.track || function(r) {
            var i = (r = r || {}).siteId || tC.config.siteId || tC.id_site
              , a = t[r.route];
            if (null == a)
                return null;
            var o = {};
            a.siteQueryArg && i && (o[a.siteQueryArg] = i),
            Object.assign(o, r.queryParams);
            var c = Object.keys(o).reduce((function(t, e) {
                var n = o[e];
                return t.push(e + "=" + n),
                t
            }
            ), []);
            (c = c.join("&")) && (c = "?" + c);
            var s = JSON.stringify(r.body || {})
              , d = a.defaultDomain
              , v = r.domain || window.tC_collect_dns || tC.config.collectionDomain || d;
            "/" === (v = v.split("://").slice(-1)[0])[v.length - 1] && (v = v.slice(0, -1));
            var C = tC.isCustomDns(v)
              , u = (a.cookielessDomains || []).includes(v)
              , p = "https://" + v + (C && !u ? "/" + a.serverId : "") + "/" + a.path + c
              , l = tC.getCookie("CAID")
              , g = !1 !== a.caidSync;
            if (g && (g = null != tC.config.caidSync ? tC.config.caidSync : g,
            g = null != r.caidSync ? r.caidSync : g),
            C && !u && !l)
                if (g) {
                    var y = a.syncDomain || d;
                    tC.getCrossDomainCookie({
                        name: "TCID",
                        siteId: i,
                        domain: y
                    }, (function(t) {
                        var r = t;
                        r || (r = e()),
                        tC.setCookie("CAID", r),
                        n(p, s)
                    }
                    ))
                } else {
                    var _ = e();
                    tC.setCookie("CAID", _),
                    n(p, s)
                }
            else
                n(p, s)
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
        tC.trigger = function(r) {
            var i = (r = r || {}).event
              , a = Object.assign({}, r.properties)
              , o = r.config || {}
              , c = a.url || function(r) {
                try {
                    var i = new URL(r);
                    return i.pathname = n(i.pathname),
                    i.searchParams.forEach((function(r, a) {
                        return t.test(r) ? i.searchParams.set(a, n(r)) : e.test(a) ? i.searchParams.set(a, "*****") : void 0
                    }
                    )),
                    i.toString()
                } catch (t) {
                    return r
                }
            }(window.location.href);
            tC.uniqueEventIndex++,
            tC.uniqueEventId = tC.generateEventId();
            var s = {}
              , d = o.sourceKey || tC.config.sourceKey || "31a01236-3089-42aa-8a89-bfca8211a90a";
            d && (s.token = d);
            var v, C = tC.config.eventData;
            if ("object" == typeof C && tC.deepMerge && (a = tC.deepMerge({}, C, a)),
            a.user = a.user || {},
            !a.user.consent_categories) {
                var u = [];
                "privacy"in tC && (u = "getValidCategories"in tC.privacy ? tC.privacy.getValidCategories() : tC.privacy.getOptinCategories());
                var p = tC.getCookie(tC.privacy && tC.privacy.getCN() || "TC_PRIVACY");
                /ALL/.test(p) && (u = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]),
                a.user.consent_categories = u
            }
            if (!a.user.rejected_vendors) {
                var l = [];
                tC.privacy && (tC.privacy.checkOptoutAllVendors && tC.privacy.checkOptoutAllVendors() ? l = "ALL" : tC.privacy.checkOptinAllVendors && !tC.privacy.checkOptinAllVendors() && (l = tC.privacy.getOptoutVendors())),
                a.user.rejected_vendors = l
            }
            switch (a.revenue && (a.amount = a.revenue),
            a.integrations = a.integrations || {},
            a.integrations.facebook = a.integrations.facebook || {},
            a.integrations.facebook.fbc = tC.getCookie("_fbc") || void 0,
            a.integrations.facebook.fbp = tC.getCookie("_fbp") || void 0,
            a.integrations.facebook.event_id = a.integrations.facebook.event_id || tC.uniqueEventId,
            i) {
            case "page_view":
                a.title = document.title,
                a.path = location.pathname,
                a.url = c,
                "" !== document.referrer && (a.referrer = document.referrer),
                a.type = a.type || (window.tc_vars || {}).env_template || "other",
                a.page_type = a.page_type || (window.tc_vars || {}).env_template || "other";
                break;
            case "purchase":
                a.status = a.status || "in_progress",
                a.type = a.type || "online"
            }
            try {
                v = window.Intl && window.Intl.DateTimeFormat().resolvedOptions().timeZone
            } catch (t) {}
            var g, y = document.documentElement || {}, _ = window.navigator || {}, f = {
                title: document.title,
                url: c,
                lang: y.lang,
                referrer: document.referrer || tC.storage && tC.storage.get("TC_REFERRER"),
                viewport: {
                    width: y.clientWidth,
                    height: y.clientHeight
                }
            }, m = {
                cookie: (g = ["_fbp", "_fbc", /^_+(ga|gcl|opt_|utm)/, /^(pm_sess|VISITOR_INFO1|FPGCL|GA_)/, "__gsas", "NID", "DSID", "test_cookie", "id", "GED_PLAYLIST_ACTIVITY", "ACLK_DATA", "aboutads_sessNNN", "FPAU", "ANID", "AID", "IDE", "TAID", "FLC", "RUL", "FCCDCF", "FCNEC", "CUID", "1P_JAR", "Conversion", "YSC", "FPLC", "_gid", "AMP_TOKEN", "FPID", "_dc_gtm_", "PAIDCONTENT", "atuserid", "xtidc", "crto_mapped_user_id", "awc", "tduid", "kwks2s", "_ttp", /^_pk_id\./, "_pcid", "pa_vid", "rmStore", "_uetmsclkid", /^_dy.*/, /^ty_.*/],
                (document.cookie || "").split("; ").filter((function(t) {
                    var e = t.split("=")[0];
                    return g.find((function(t) {
                        return t.test ? t.test(e) : e === t
                    }
                    ))
                }
                )).join("; ") || ""),
                lang: _.language || _.userLanguage,
                screen: {
                    width: window.screen.width,
                    height: window.screen.height
                },
                timezone: v
            };
            tC.internalvars.caEventData = a;
            var h = {
                event_name: i,
                context: {
                    page: f,
                    device: m,
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
            var E = o.siteId || o.idSite
              , w = o.collectionDomain;
            if (tC.track({
                domain: w,
                route: "events",
                siteId: E,
                queryParams: s,
                body: h,
                caidSync: o.caidSync
            }),
            tC.eventTarget) {
                var b = {
                    eventData: h,
                    eventTarget: o.eventTarget
                };
                tC.eventTarget.dispatchEvent("track_" + i, b),
                tC.eventTarget.dispatchEvent("track_all_events", b)
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
                var r = (new Date).getTime()
                  , i = 1e3 * n * 60 * 60 * 24
                  , a = JSON.stringify({
                    value: e,
                    expires: r + i
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
    (r = {}).hitCounter_5181_5 = function() {
        var t = window.tC_5181_5;
        0 === Math.floor(Math.random() * parseInt(t.frequency)) && tC.pixelTrack.add("https://manager.tagcommander.com/utils/hit.php?id=" + t.id_container + "&site=" + t.id_site + "&version=" + t.containerVersion + "&frequency=" + t.frequency + "&position=" + tC.container_position + "&rand=" + Math.random())
    }
    ,
    tC.extend(r),
    tC.container_position = "undefined" != typeof tc_container_position ? tc_container_position : void 0 !== tC.container_position ? tC.container_position : 0,
    tC.container_position++,
    "undefined" != typeof tc_container_position && tc_container_position++,
    tC.hitCounter_5181_5(),
    tC.script = {
        add: function(t, e, n) {
            var r = document.getElementsByTagName("body")[0] || document.getElementsByTagName("script")[0].parentNode
              , i = document.createElement("script");
            i.type = "text/javascript",
            i.async = !0,
            i.src = t,
            i.charset = "utf-8",
            i.id = "tc_script_" + Math.random(),
            r ? (e && (i.addEventListener ? i.addEventListener("load", (function() {
                e()
            }
            ), !1) : i.onreadystatechange = function() {
                i.readyState in {
                    loaded: 1,
                    complete: 1
                } && (i.onreadystatechange = null,
                e())
            }
            ),
            n && "number" == typeof n && setTimeout((function() {
                r && i.parentNode && r.removeChild(i)
            }
            ), n),
            r.insertBefore(i, r.firstChild)) : tC.log("tC.script error : the element <script> or <body> is not found ! the file " + t + " is not implemented !", "warn")
        }
    },
    tC.bypassBookmarklet = !0,
    tC.extend({
        match: function(t, e, n) {
            try {
                return t.match(new RegExp(e,n))
            } catch (r) {
                tC.log("the tC.match error ! message : " + r.message, "data : " + t, "p : " + e, "flag : " + n, "warn")
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
                  , r = atob(e)
                  , i = new n(8 * r.length);
                for (var a in r)
                    r.hasOwnProperty(a) && (i.buffer[a] = r.charCodeAt(a));
                return i
            }
            ,
            n.prototype.toBase64URL = function() {
                var t = String.fromCharCode.apply(null, this.buffer);
                return btoa(t).replace(/\+/g, "-").replace(/\//g, "_")
            }
            ,
            n.fromArray = function(t) {
                for (var e = new n(t.length), r = 0; r < t.length; ++r)
                    t[r] && e.set(r);
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
                var r = t(n, this.length)
                  , i = e(n);
                return Boolean(this.buffer[r] & i)
            }
            ,
            n.prototype.set = function(n) {
                var r = t(n, this.length)
                  , i = e(n);
                return this.buffer[r] |= i,
                this
            }
            ,
            n.prototype.unset = function(n) {
                var r = t(n, this.length)
                  , i = e(n);
                return this.buffer[r] &= ~i,
                this
            }
            ,
            window.tC.Bitfield = n
        }
    }(),
    tC.fn.css = function(t) {
        try {
            this.each((function(e, n) {
                for (var r in t) {
                    var i = "";
                    if (/-/.test(r)) {
                        var a = r.split("-");
                        for (var e in a)
                            if (0 == e)
                                i = a[e];
                            else {
                                var o = a[e].split("");
                                i += o.shift().toUpperCase() + o.join("")
                            }
                    } else
                        i = r;
                    n.style[i] = t[r]
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
                var r = parseInt(tC.privacy.cookieData[0] || 0);
                tC.privacy.categories = 1 === r ? [] : tC.privacy.allSelectableCategoriesId || []
            } else
                tC.privacy.categories = "" !== tC.privacy.categories ? tC.privacy.categories.split(",") : [];
            null == tC.privacy.cookieData[0] && tC.privacy.initIabLegitimateInterests && tC.privacy.initIabLegitimateInterests();
            var i = (tC.privacy.cookieData[4] || "").split(",");
            tC.privacy.consentDates = {
                updatedAt: Number(i[0]) || null,
                createdAt: Number(i[1]) || null,
                expiresAt: Number(i[2]) || null
            },
            tC.privacy.initialized || (tC.privacy.initialized = !0,
            tC.gtagInit && tC.gtagInit(),
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
            var r = null != t.hitOptin ? t.hitOptin : t.optin
              , i = t.vendorList || ""
              , a = t.privacyVersion || tC.privacy.getVersion()
              , o = t.privacyId || tC.privacy.getId()
              , c = t.action || "banner_button"
              , s = {};
            null != t.acmVendorList && (s.acmVendorList = t.acmVendorList);
            var d = null == tC.privacy.cookieData || 0 === tC.privacy.cookieData.length;
            tC.privacy.cok(Number(!e), a, n, i, s),
            !1 !== t.sendHit && tC.privacy.hit(Number(r), a, o, c),
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
    tC.privacy.In = tC.privacy.In || function(t, e, n, r, i, a, o) {
        o = o || {},
        tC.privacy.saveConsent({
            optin: !0,
            privacyId: t,
            privacyVersion: e,
            action: i,
            categoryList: r,
            vendorList: a,
            acmVendorList: o.acmVendorList,
            sendHit: o.sendHit
        })
    }
    ,
    tC.privacy.Out = tC.privacy.Out || function(t, e, n, r, i, a, o) {
        o = o || {},
        "ALL" === r && (r = ""),
        tC.privacy.saveConsent({
            optin: !1,
            privacyId: t,
            privacyVersion: e,
            action: i,
            categoryList: r,
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
        var n, r = tC.privacy.getCategoryIdList().join(","), i = tC.privacy.getVendorIdList();
        if (null != tC.privacy.isIabGoogleAcmEnabled && tC.privacy.isIabGoogleAcmEnabled()) {
            var a = tC.privacy.prepareAcmVendorConsent(i);
            i = a.nonAcmVendors,
            n = tC.privacy.encodeVendorList(a.acmVendors)
        }
        i = tC.privacy.encodeVendorList(i),
        tC.privacy.saveConsent({
            optin: !0,
            action: t,
            categoryList: r,
            vendorList: i,
            acmVendorList: n,
            sendHit: e.sendHit
        })
    }
    ,
    tC.privacy.prepareConsent = function(t) {
        var e = ((t = t || {}).categories || []).map(String)
          , n = (t.vendors || []).map(String);
        if (tC.privacy.iabCategoriesToPublicCategories) {
            var r = tC.privacy.iabCategoriesToPublicCategories({
                purposes: (t.iabPurposes || []).map(String),
                legIntPurposes: (t.iabPurposes || []).map(String).filter((function(t) {
                    return 1 !== t
                }
                )),
                specialFeatures: (t.iabSpecialFeatures || []).map(String)
            });
            e = e.concat(r)
        }
        if (tC.privacy.iabVendorsToPublicVendors) {
            var i = tC.privacy.iabVendorsToPublicVendors({
                vendors: (t.iabVendors || []).map(String),
                legIntVendors: (t.iabVendors || []).map(String)
            });
            n = n.concat(i)
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
          , r = n.categories
          , i = n.vendors;
        if (0 !== r.length || 0 !== i.length) {
            var a;
            if (r = r.concat(e.reset ? [] : tC.privacy.getOptinCategories()).filter(tC.arrayUniqueFilter),
            i = i.concat(e.reset ? [] : tC.privacy.getOptinVendors()).filter(tC.arrayUniqueFilter),
            null != tC.privacy.isIabGoogleAcmEnabled && tC.privacy.isIabGoogleAcmEnabled()) {
                var o = tC.privacy.prepareAcmVendorConsent(i);
                i = o.nonAcmVendors,
                a = tC.privacy.encodeVendorList(o.acmVendors)
            }
            i = tC.privacy.encodeVendorList(i),
            tC.privacy.saveConsent({
                optin: !0,
                action: t,
                categoryList: r,
                vendorList: i,
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
          , r = n.categories
          , i = n.vendors;
        if (0 !== r.length || 0 !== i.length) {
            var a = tC.privacy.getOptinCategories()
              , o = tC.privacy.getOptinVendors();
            if (r = a.filter((function(t) {
                return -1 === r.indexOf(t)
            }
            )),
            i = o.filter((function(t) {
                return -1 === i.indexOf(t)
            }
            )),
            0 !== r.length || 0 !== i.length) {
                var c;
                if (null != tC.privacy.isIabGoogleAcmEnabled && tC.privacy.isIabGoogleAcmEnabled()) {
                    var s = tC.privacy.prepareAcmVendorConsent(i);
                    i = s.nonAcmVendors,
                    c = tC.privacy.encodeVendorList(s.acmVendors)
                }
                i = tC.privacy.encodeVendorList(i),
                tC.privacy.saveConsent({
                    optin: !0,
                    action: t,
                    categoryList: r,
                    vendorList: i,
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
        var n, r = e.categories || {}, i = e.vendors || {};
        if (t.purpose) {
            if (t.purpose.consents)
                for (var a in t.purpose.consents)
                    r[n = "tcf2_" + a] = r[n] || {},
                    r[n].status = !0 === t.purpose.consents[a] ? e.on : e.off;
            if (t.purpose.legitimateInterests)
                for (var o in t.purpose.legitimateInterests)
                    r[n = "tcf2_" + o] = r[n] || {},
                    r[n].legIntStatus = !0 === t.purpose.legitimateInterests[o] ? e.on : e.off
        }
        if (t.vendor) {
            if (t.vendor.consents)
                for (var c in t.vendor.consents)
                    i[n = "tcf2_" + c] = i[n] || {},
                    i[n].status = !0 === t.vendor.consents[c] ? e.on : e.off;
            if (t.vendor.legitimateInterests)
                for (var s in t.vendor.legitimateInterests)
                    i[n = "tcf2_" + s] = i[n] || {},
                    i[n].legIntStatus = !0 === t.vendor.legitimateInterests[s] ? e.on : e.off
        }
        if (t.specialFeatureOptins)
            for (var d in t.specialFeatureOptins)
                r[n = "tcf2_sf_" + d] = r[n] || {},
                r[n].status = !0 === t.specialFeatureOptins[d] ? e.on : e.off;
        return {
            categories: r,
            vendors: i
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
          , r = null;
        null == tC.privacy.cookieData && tC.privacy.init(),
        0 === tC.privacy.cookieData.length ? (n = e ? "unset" : null,
        r = "unset") : 1 === Number(tC.privacy.cookieData[0]) && (r = "all-off");
        var i = !0
          , a = !1;
        e && (i = "on",
        a = "off");
        var o = tC.privacy.getOptinCategories().reduce((function(t, e) {
            return t[e] = i,
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
            null == r && t[a][c] !== i && (r = "mixed"),
            t
        }
        ), {}),
        tC.privacy.getBlockedOnCategories().forEach((function(t) {
            c[t] = {
                status: i,
                required: !0
            }
        }
        ));
        var s = tC.privacy.getVendorIdList()
          , d = tC.privacy.getOptinVendors().reduce((function(t, e) {
            return t[e] = i,
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
            null == r && t[a][o] !== i && (r = "mixed"),
            t
        }
        ), {}),
        tC.storage.getWithExpiry(tC.privacy.getCN() + "_TCF")) {
            var v = tC.storage.getWithExpiry(tC.privacy.getCN() + "_TCF")
              , C = tC.privacy.setTcfConsent(v, {
                categories: c,
                vendors: s,
                on: i,
                off: a
            });
            c = C.categories,
            s = C.vendors
        }
        r = r || "all-on";
        var u = {
            version: "1.0",
            siteId: tC.id_site,
            consentId: tC.privacy.getConsentId(),
            bannerId: String(tC.privacy.getId()),
            bannerVersion: tC.privacy.getVersion()
        };
        return tC.privacy.iabVendorList && (u.tcfPolicyVersion = String(tC.privacy.iabVendorList.tcfPolicyVersion)),
        tC.privacy.consentDates && (u.dateCreated = tC.privacy.consentDates.createdAt,
        u.dateUpdated = tC.privacy.consentDates.updatedAt,
        u.dateExpires = tC.privacy.consentDates.expiresAt),
        {
            meta: u,
            consent: {
                status: r,
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
                  , r = {
                    categories: [],
                    vendors: [],
                    sendHit: !1
                }
                  , i = {
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
                          , v = d ? String(o).match(/tcf2_sf_(\d*)/) : null;
                        v ? c = 13e3 + Number(v[1]) : d && (c = 2 * Number(d[1]) - 1 + 1e4,
                        s.legIntStatus === e ? r.categories.push(c + 1) : s.legIntStatus === n && i.categories.push(c + 1))
                    }
                    s.status === e ? r.categories.push(c) : s.status === n && i.categories.push(c)
                }
                )),
                Object.keys(t.vendors).forEach((function(o) {
                    var c = o
                      , s = t.vendors[o];
                    if (a) {
                        var d = String(o).match(/tcf2_(\d*)/);
                        d && (c = 2 * Number(d[1]) - 1 + 1e3,
                        s.legIntStatus === e ? r.vendors.push(c + 1) : s.legIntStatus === n && i.vendors.push(c + 1))
                    }
                    s.status === e ? r.vendors.push(c) : s.status === n && i.vendors.push(c)
                }
                )),
                tC.privacy.optin(t.action, r),
                tC.privacy.optout(t.action, i),
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
    tC.privacy.cok = tC.privacy.cok || function(t, e, n, r, i) {
        i = i || {},
        n = n || "",
        r = r || "";
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
        var v = t + tC.privacy.getCS() + e + tC.privacy.getCS() + n + tC.privacy.getCS() + (tC.privacy.blockedOnCategories || "") + tC.privacy.getCS() + s + tC.privacy.getCS() + r;
        if (tC.setCookie(tC.privacy.getCN(), v, a, "/", o),
        tC.setCookie(tC.privacy.getPCCN(), n, a, "/", o),
        null != i.acmVendorList && tC.storage.setWithExpiry(tC.privacy.getCN() + "_ACM", i.acmVendorList, a),
        null != window.__tcfapi) {
            var C = tC.privacy.getCN() + "_TCF";
            tC.storage.remove(C);
            var u = !1
              , p = tC.privacy.gcmEnabled && window.gtag_enable_tcf_support;
            window.__tcfapi("getTCData", 2, (function(t, e) {
                e && (t.vendorListVersion = tC.privacy.iabVendorList.vendorListVersion,
                tC.storage.setWithExpiry(C, t, a),
                u && p && tC.privacy.gcmUpdate())
            }
            )),
            u = !0
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
    tC.privacy.hit = tC.privacy.hit || function(t, e, n, r) {
        var i;
        i = 0 === t ? 1 : 1 === t ? 0 : parseInt(tC.privacy.cookieData[0] || 1);
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
            var v = tC.privacy.privacySelectableUnblockedCategoriesId || tC.privacy.getFlattenCategoryIdList()
              , C = v.slice()
              , u = tC.privacy.getOptinCategories()
              , p = 0;
            u.length >= v.length && (v.forEach((function(t) {
                u.indexOf(String(t)) > -1 && C.splice(C.indexOf(t), 1)
            }
            )),
            p = 0 === C.length ? 1 : 0);
            var l = {
                id_tc: String(tC.privacy.containerId || 5),
                site: String(5181),
                version: e,
                id_privacy: n,
                type_action: r,
                privacy_action: t.toString(),
                optin_categories: tC.privacy.getValidCategories(),
                optout_categories: tC.privacy.getOptoutCategories(),
                optin_to_all: p,
                tcpid: tC.privacy.getConsentId(),
                tc_optout: i
            }
              , g = Number(window.tc_privacy_do_not_track || tC.getCookie("TC_PRIVACY_DO_NOT_TRACK"));
            if (g) {
                if (!(-1 !== ["1", "0"].indexOf(l.privacy_action)))
                    return;
                l.do_not_track = Boolean(g)
            }
            1 === t && (l.optin_vendors = tC.privacy.getOptinVendors(),
            l.optin_to_all_vendors = Number(tC.privacy.checkOptinAllVendors())),
            tC.privacy.sendBeacon(l)
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
            var r = tC.privacy.getPrivacyHitsCategory();
            if (null == r || tC.privacy.validRules(r)) {
                var i = {
                    id_tc: String(tC.privacy.containerId || 5),
                    site: String(5181),
                    version: tC.privacy.getVersion(),
                    id_privacy: t,
                    type_action: e,
                    privacy_action: "V",
                    tcpid: tC.privacy.getConsentId(),
                    tc_optout: n
                };
                tC.privacy.sendBeacon(i)
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
          , r = parseInt(n[0])
          , i = n.length > 2 ? parseInt(n[n.length - 2]) : 0
          , a = (tC.privacy.cookieData[2] || "").split(",")
          , o = tC.privacy.cookieData[3] ? tC.privacy.cookieData[3].split(",") : []
          , c = tC.privacy.optinVendors
          , s = tC.privacy.tagsCategoriesAssignation && tC.privacy.tagsCategoriesAssignation[t] ? tC.privacy.tagsCategoriesAssignation[t] : 0
          , d = tC.privacy.tagsVendorsAssignation && tC.privacy.tagsVendorsAssignation[t] ? tC.privacy.tagsVendorsAssignation[t] : 0
          , v = -1 !== tC.inArray(s.toString(), o)
          , C = -1 !== tC.inArray(s.toString(), a) || -1 !== tC.inArray("ALL", a)
          , u = -1 !== tC.inArray(d.toString(), c)
          , p = -1 !== tC.inArray(parseInt(t), tC.privacy.minorTags)
          , l = tC.privacy.includedVendors && tC.privacy.includedVendors[d] ? parseInt(tC.privacy.includedVendors[d].privacyVersion[i]) : 0;
        return (v || e && C) && (!d || u || p && l > r)
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
        E292: 7,
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
        836: 7,
        932: 7,
        930: 7,
        931: 7,
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
        tagsId: [63, "E12", "E16", "E240", "E212", "E225", "E313", "E311", "E276", "E302", "E304", "E306", "E308", "E319", "E1", "E3", "E7", "E10", "E11", "E13", "E14", "E17", "E22", "E24", "E26", "E28", "E101", "E103", "E105", "E107", "E109", "E114", "E118", "E119", "E121", "E116", "E165", "E194", "E221", "E227", "E229", "E231", "E233", "E244", "E246", "E248", "E223", "E309", "E318", "E320", "E270", "E286", "E5", "E322", "E9", "E321", "E272", "E288", "E290", "E296", "E327", "E330", "E329", "E328", "E331", "E332", "E333", "E334", "E335", "E336", "E337", "E339", "E340", "E341", "E342", "E343", "E344", "E345", "E346", "E347", "E348", "E349", "E350", "E351", "E353", "E354", "E355", "E352", "E338", "E360", "E357", "E358", "E359", "E278", "E300", "E361", "E362", "E363", "E364", "E365", "E366", "E367", "E368", "E292", 67, 71, 75, 621, 135, 108, 81, 118, 120, 121, 83, 85, 111, 114, 117, 147, 148, 149, 150, 91, 69, 657, 92, 87, 113, 110, 112, 137, 94, 101, 95, 102, 103, 104, 105, 119, 134, 136, 138, 139, 140, 141, 142, 143, 600, 602, 787, 806, 808, 834, 828, 810, 837, 822, 824, 843, 844, 845, 848, 851, 854, 856, 857, 858, 859, 860, 862, 863, 861, 865, 871, 872, 873, 874, 875, 877, 878, 879, 883, 885, 882, 146, 79, 557, 555, 855, 864, 880, 884, 896, 820, 826, 899, 901, 900, 903, 898, 902, 904, 909, 915, 916, 881, 911, 914, 912, 920, 913, 922, 812, 941, 836, 932, 930, 931]
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
    tC.gtagInit = tC.gtagInit || function() {
        !0 !== (tC.config || {}).disableGtag && (window.dataLayer = window.dataLayer || [],
        window.gtag = window.gtag || function() {
            window.dataLayer.push(arguments)
        }
        ,
        window.gtag("set", "developer_id.dOWVhY2", !0))
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
              , r = n.consent.status;
            if ("unset" !== r)
                return n.updateEvent = "set",
                void e.callback(n);
            var i = function() {
                var n = t.privacy.getConsent({
                    pretty: !0
                });
                n.updateEvent = "set",
                e.callback(n)
            };
            t.eventTarget.addEventListener("consent-ready", i)
        }
        ,
        t.cact["consent.onReady"]._tc_version = 2,
        t.cact["consent.onUpdate"] = function() {
            var e = t.cactUtils.formatArgumentsV2(arguments)
              , n = t.privacy.getConsent({
                pretty: !0
            })
              , r = "unset" === n.consent.status ? "set" : "changed"
              , i = function() {
                r = "revoked"
            }
              , a = function() {
                var n = t.privacy.getConsent({
                    pretty: !0
                })
                  , i = r;
                n.updateEvent = i,
                r = "revoked" === i ? "set" : "changed",
                e.callback(n)
            };
            t.eventTarget.addEventListener("consent-update", a),
            t.eventTarget.addEventListener("consent-revoke", i)
        }
        ,
        t.cact["consent.onUpdate"]._tc_version = 2)
    }(),
    null != tC.privacy && !1 === tC.privacy.initialized && tC.privacy.init(),
    tC.extend({}),
    tC.event = tC.event || {},
    tC.event.SalesforceChatRedirectionListFunctions = tC.event.SalesforceChatRedirectionListFunctions || [],
    tC.event.SalesforceChatRedirectionListIdTags = tC.event.SalesforceChatRedirectionListIdTags || [],
    tC.event.SalesforceChatRedirection = function(t, e) {
        tc_array_events = tC.container_5181_5.init_tc_array_events(e);
        for (var n = 0, r = tC.event.SalesforceChatRedirectionListFunctions.length; n < r; n++)
            tC.event.SalesforceChatRedirectionListFunctions[n](t, e)
    }
    ,
    tC.event.virtualPageView_opcListFunctions = tC.event.virtualPageView_opcListFunctions || [],
    tC.event.virtualPageView_opcListIdTags = tC.event.virtualPageView_opcListIdTags || [],
    tC.event.virtualPageView_opc = function(t, e) {
        tc_array_events = tC.container_5181_5.init_tc_array_events(e);
        for (var n = 0, r = tC.event.virtualPageView_opcListFunctions.length; n < r; n++)
            tC.event.virtualPageView_opcListFunctions[n](t, e)
    }
    ,
    tC.event.virtualPageview_popinListFunctions = tC.event.virtualPageview_popinListFunctions || [],
    tC.event.virtualPageview_popinListIdTags = tC.event.virtualPageview_popinListIdTags || [],
    tC.event.virtualPageview_popin = function(t, e) {
        tc_array_events = tC.container_5181_5.init_tc_array_events(e);
        for (var n = 0, r = tC.event.virtualPageview_popinListFunctions.length; n < r; n++)
            tC.event.virtualPageview_popinListFunctions[n](t, e)
    }
    ,
    tC.event.virtualPageview_textsearchListFunctions = tC.event.virtualPageview_textsearchListFunctions || [],
    tC.event.virtualPageview_textsearchListIdTags = tC.event.virtualPageview_textsearchListIdTags || [],
    tC.event.virtualPageview_textsearch = function(t, e) {
        tc_array_events = tC.container_5181_5.init_tc_array_events(e);
        for (var n = 0, r = tC.event.virtualPageview_textsearchListFunctions.length; n < r; n++)
            tC.event.virtualPageview_textsearchListFunctions[n](t, e)
    }
    ,
    tC.event.enh_addcartListFunctions = tC.event.enh_addcartListFunctions || [],
    tC.event.enh_addcartListIdTags = tC.event.enh_addcartListIdTags || [],
    -1 == tC.event.enh_addcartListIdTags.indexOf("864") && (tC.event.enh_addcartListIdTags.push("864"),
    tC.event.enh_addcartListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("864") && (tC.executeTag864_5181_5(t, e),
        tC.launchTag(864, "AB Tasty - Cart", 1373, 5181, 5, 49))
    }
    ))),
    -1 == tC.event.enh_addcartListIdTags.indexOf("884") && (tC.event.enh_addcartListIdTags.push("884"),
    tC.event.enh_addcartListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("884") && (tC.executeTag884_5181_5(t, e),
        tC.launchTag(884, "Pixlee - add to cart", 26, 5181, 5, 49))
    }
    ))),
    -1 == tC.event.enh_addcartListIdTags.indexOf("932") && (tC.event.enh_addcartListIdTags.push("932"),
    tC.event.enh_addcartListFunctions.push((function(t, e) {
        "" != tC.getCookie(tC.privacy.getCN()) && tC.privacy.validRules("932") && ("FR" == tc_vars.nav_countryCode || "DE" == tc_vars.nav_countryCode || "CH" == tc_vars.nav_countryCode || "GB" == tc_vars.nav_countryCode || "ES" == tc_vars.nav_countryCode || "IT" == tc_vars.nav_countryCode || "NL" == tc_vars.nav_countryCode || "FI" == tc_vars.nav_countryCode || "IT" == tc_vars.nav_countryCode && "test" == tc_vars.env_work || "CH" == tc_vars.nav_countryCode && "test" == tc_vars.env_work || "MT" == tc_vars.nav_countryCode || "BE" == tc_vars.nav_countryCode || "HR" == tc_vars.nav_countryCode || "CZ" == tc_vars.nav_countryCode || "GR" == tc_vars.nav_countryCode || "HU" == tc_vars.nav_countryCode || "IE" == tc_vars.nav_countryCode || "LT" == tc_vars.nav_countryCode || "LU" == tc_vars.nav_countryCode || "DK" == tc_vars.nav_countryCode || "MC" == tc_vars.nav_countryCode || "AT" == tc_vars.nav_countryCode || "PL" == tc_vars.nav_countryCode || "PT" == tc_vars.nav_countryCode || "RO" == tc_vars.nav_countryCode || "SK" == tc_vars.nav_countryCode || "SE" == tc_vars.nav_countryCode || "BG" == tc_vars.nav_countryCode || "AT" == tc_vars.nav_countryCode && "test" == tc_vars.env_work || "BE" == tc_vars.nav_countryCode && "test" == tc_vars.env_work || "BG" == tc_vars.nav_countryCode && "test" == tc_vars.env_work || "CZ" == tc_vars.nav_countryCode && "test" == tc_vars.env_work || "DE" == tc_vars.nav_countryCode && "test" == tc_vars.env_work || "DK" == tc_vars.nav_countryCode && "test" == tc_vars.env_work || "ES" == tc_vars.nav_countryCode && "test" == tc_vars.env_work || "FI" == tc_vars.nav_countryCode && "test" == tc_vars.env_work || "FR" == tc_vars.nav_countryCode && "test" == tc_vars.env_work || "GR" == tc_vars.nav_countryCode && "test" == tc_vars.env_work || "HR" == tc_vars.nav_countryCode && "test" == tc_vars.env_work || "HU" == tc_vars.nav_countryCode && "test" == tc_vars.env_work || "LT" == tc_vars.nav_countryCode && "test" == tc_vars.env_work || "LU" == tc_vars.nav_countryCode && "test" == tc_vars.env_work || "MC" == tc_vars.nav_countryCode && "test" == tc_vars.env_work || "MT" == tc_vars.nav_countryCode && "test" == tc_vars.env_work || "NL" == tc_vars.nav_countryCode && "test" == tc_vars.env_work || "PL" == tc_vars.nav_countryCode && "test" == tc_vars.env_work || "PT" == tc_vars.nav_countryCode && "test" == tc_vars.env_work || "RO" == tc_vars.nav_countryCode && "test" == tc_vars.env_work || "SE" == tc_vars.nav_countryCode && "test" == tc_vars.env_work || "SK" == tc_vars.nav_countryCode && "test" == tc_vars.env_work) && (tC.executeTag932_5181_5(t, e),
        tC.launchTag(932, "Avatar - cartManagement.addItem", 26, 5181, 5, 49))
    }
    ))),
    tC.event.enh_addcart = function(t, e) {
        tc_array_events = tC.container_5181_5.init_tc_array_events(e);
        for (var n = 0, r = tC.event.enh_addcartListFunctions.length; n < r; n++)
            tC.event.enh_addcartListFunctions[n](t, e)
    }
    ,
    tC.event.new_rmovecartListFunctions = tC.event.new_rmovecartListFunctions || [],
    tC.event.new_rmovecartListIdTags = tC.event.new_rmovecartListIdTags || [],
    tC.event.new_rmovecart = function(t, e) {
        tc_array_events = tC.container_5181_5.init_tc_array_events(e);
        for (var n = 0, r = tC.event.new_rmovecartListFunctions.length; n < r; n++)
            tC.event.new_rmovecartListFunctions[n](t, e)
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
    i = {},
    a = window.tC_5181_5 || {},
    o = {
        load: function(t, e) {
            tC.container_position++,
            tC.hitCounter_5181_5(),
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
            "" === tC.getCookie("PV_WebAdv") ? (t = 1,
            tC.setCookie("PV_WebAdv", 1, 0, "/")) : (t = parseInt(tC.getCookie("PV_WebAdv"), 10),
            t++,
            tC.setCookie("PV_WebAdv", t, 0, "/")),
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
            var t = tC.internalvars_5181_5.listVar;
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
        },
        cact: function() {
            var t = arguments;
            "trigger" === t[0] && (t[0] = "trigger_5181_5"),
            window.caReady.push(t)
        },
        get_info: function() {
            var t = Object.assign({}, a);
            return delete t.api,
            t
        },
        get_config: function() {
            return Object.assign({}, tC.config)
        }
    },
    i.container_5181_5 = o,
    tC.extend(i),
    a.api = o,
    void 0 === tC.containerList && (tC.containerList = []),
    tC.containerList.push("5181_5"),
    window.tc_array_events = tC.container_5181_5.init_tc_array_events([]),
    tC.cact && (tC.cact.trigger_5181_5 = function() {
        var t = tC.cactUtils.formatArgumentsV2(arguments)
          , e = t.event
          , n = Object.assign({}, t.properties)
          , r = Object.assign({}, t.config)
          , i = t.callback
          , o = tC.config || {};
        r.sourceKey || o.sourceKey || !a.sourceKey || (r.sourceKey = a.sourceKey),
        r.siteId || r.id_site || o.siteId || !a.id_site || (r.siteId = a.id_site),
        tC.cact.trigger(e, n, r, i)
    }
    ,
    tC.cact.trigger_5181_5._tc_version = 2),
    window["tC" + n.id_site + "_" + n.id_container] = tC,
    window.postMessage('TC.EX.CONTAINER:{"id":' + n.id_container + ',"ids":' + n.id_site + ',"v":"' + n.containerVersion + '","g":' + n.generatorVersion + ',"p":' + tC.container_position + ',"url":"' + (document.currentScript ? document.currentScript.src : "") + '"}', "*")
}();
tC.container_5181_5.datalayer();
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
tC.internalFunctions.MD5 = {};
tC.internalFunctions.MD5.hexcase = 0;
tC.internalFunctions.MD5.md5 = function(s) {
    return (s !== '') ? tC.internalFunctions.MD5.rstr2hex(tC.internalFunctions.MD5.rstr(tC.internalFunctions.MD5.str2rstr_utf8(s))) : '';
}
tC.internalFunctions.MD5.rstr = function(s) {
    return tC.internalFunctions.MD5.binl2rstr(tC.internalFunctions.MD5.binl(tC.internalFunctions.MD5.rstr2binl(s), s.length * 8));
}
tC.internalFunctions.MD5.rstr2hex = function(input) {
    try {
        tC.internalFunctions.MD5.hexcase
    } catch (e) {
        tC.internalFunctions.MD5.hexcase = 0;
    }
    var hex_tab = tC.internalFunctions.MD5.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var output = "";
    var x;
    for (var i = 0; i < input.length; i++) {
        x = input.charCodeAt(i);
        output += hex_tab.charAt((x >>> 4) & 0x0F) + hex_tab.charAt(x & 0x0F);
    }
    return output;
}
tC.internalFunctions.MD5.str2rstr_utf8 = function(input) {
    var output = "";
    var i = -1;
    var x, y;
    while (++i < input.length) {
        x = input.charCodeAt(i);
        y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
        if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
            x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
            i++;
        }
        if (x <= 0x7F)
            output += String.fromCharCode(x);
        else if (x <= 0x7FF)
            output += String.fromCharCode(0xC0 | ((x >>> 6) & 0x1F), 0x80 | (x & 0x3F));
        else if (x <= 0xFFFF)
            output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F));
        else if (x <= 0x1FFFFF)
            output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07), 0x80 | ((x >>> 12) & 0x3F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F));
    }
    return output;
}
tC.internalFunctions.MD5.rstr2binl = function(input) {
    var output = Array(input.length >> 2);
    for (var i = 0; i < output.length; i++)
        output[i] = 0;
    for (var i = 0; i < input.length * 8; i += 8)
        output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
    return output;
}
tC.internalFunctions.MD5.binl2rstr = function(input) {
    var output = "";
    for (var i = 0; i < input.length * 32; i += 8)
        output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
    return output;
}
tC.internalFunctions.MD5.binl = function(x, len) {
    x[len >> 5] |= 0x80 << ((len) % 32);
    x[(((len + 64) >>> 9) << 4) + 14] = len;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for (var i = 0; i < x.length; i += 16) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        a = tC.internalFunctions.MD5.ff(a, b, c, d, x[i + 0], 7, -680876936);
        d = tC.internalFunctions.MD5.ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = tC.internalFunctions.MD5.ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = tC.internalFunctions.MD5.ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = tC.internalFunctions.MD5.ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = tC.internalFunctions.MD5.ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = tC.internalFunctions.MD5.ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = tC.internalFunctions.MD5.ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = tC.internalFunctions.MD5.ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = tC.internalFunctions.MD5.ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = tC.internalFunctions.MD5.ff(c, d, a, b, x[i + 10], 17, -42063);
        b = tC.internalFunctions.MD5.ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = tC.internalFunctions.MD5.ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = tC.internalFunctions.MD5.ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = tC.internalFunctions.MD5.ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = tC.internalFunctions.MD5.ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = tC.internalFunctions.MD5.gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = tC.internalFunctions.MD5.gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = tC.internalFunctions.MD5.gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = tC.internalFunctions.MD5.gg(b, c, d, a, x[i + 0], 20, -373897302);
        a = tC.internalFunctions.MD5.gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = tC.internalFunctions.MD5.gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = tC.internalFunctions.MD5.gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = tC.internalFunctions.MD5.gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = tC.internalFunctions.MD5.gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = tC.internalFunctions.MD5.gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = tC.internalFunctions.MD5.gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = tC.internalFunctions.MD5.gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = tC.internalFunctions.MD5.gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = tC.internalFunctions.MD5.gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = tC.internalFunctions.MD5.gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = tC.internalFunctions.MD5.gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = tC.internalFunctions.MD5.hh(a, b, c, d, x[i + 5], 4, -378558);
        d = tC.internalFunctions.MD5.hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = tC.internalFunctions.MD5.hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = tC.internalFunctions.MD5.hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = tC.internalFunctions.MD5.hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = tC.internalFunctions.MD5.hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = tC.internalFunctions.MD5.hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = tC.internalFunctions.MD5.hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = tC.internalFunctions.MD5.hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = tC.internalFunctions.MD5.hh(d, a, b, c, x[i + 0], 11, -358537222);
        c = tC.internalFunctions.MD5.hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = tC.internalFunctions.MD5.hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = tC.internalFunctions.MD5.hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = tC.internalFunctions.MD5.hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = tC.internalFunctions.MD5.hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = tC.internalFunctions.MD5.hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = tC.internalFunctions.MD5.ii(a, b, c, d, x[i + 0], 6, -198630844);
        d = tC.internalFunctions.MD5.ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = tC.internalFunctions.MD5.ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = tC.internalFunctions.MD5.ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = tC.internalFunctions.MD5.ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = tC.internalFunctions.MD5.ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = tC.internalFunctions.MD5.ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = tC.internalFunctions.MD5.ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = tC.internalFunctions.MD5.ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = tC.internalFunctions.MD5.ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = tC.internalFunctions.MD5.ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = tC.internalFunctions.MD5.ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = tC.internalFunctions.MD5.ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = tC.internalFunctions.MD5.ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = tC.internalFunctions.MD5.ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = tC.internalFunctions.MD5.ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = tC.internalFunctions.MD5.safe_add(a, olda);
        b = tC.internalFunctions.MD5.safe_add(b, oldb);
        c = tC.internalFunctions.MD5.safe_add(c, oldc);
        d = tC.internalFunctions.MD5.safe_add(d, oldd);
    }
    return Array(a, b, c, d);
}
tC.internalFunctions.MD5.cmn = function(q, a, b, x, s, t) {
    return tC.internalFunctions.MD5.safe_add(tC.internalFunctions.MD5.bit_rol(tC.internalFunctions.MD5.safe_add(tC.internalFunctions.MD5.safe_add(a, q), tC.internalFunctions.MD5.safe_add(x, t)), s), b);
}
tC.internalFunctions.MD5.ff = function(a, b, c, d, x, s, t) {
    return tC.internalFunctions.MD5.cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
tC.internalFunctions.MD5.gg = function(a, b, c, d, x, s, t) {
    return tC.internalFunctions.MD5.cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
tC.internalFunctions.MD5.hh = function(a, b, c, d, x, s, t) {
    return tC.internalFunctions.MD5.cmn(b ^ c ^ d, a, b, x, s, t);
}
tC.internalFunctions.MD5.ii = function(a, b, c, d, x, s, t) {
    return tC.internalFunctions.MD5.cmn(c ^ (b | (~d)), a, b, x, s, t);
}
tC.internalFunctions.MD5.safe_add = function(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
}
tC.internalFunctions.MD5.bit_rol = function(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
}

/*VARIABLES_BLOCK*/
tC.internalvars_5181.initiators = tC.internalvars_5181.initiators || {};
tC.internalvars_5181_5 = {
    listVar: []
}
tC.internalvars_5181.initiators.var980 = typeof tC.internalvars_5181.initiators.var980 == "function" ? tC.internalvars_5181.initiators.var980 : function() {
    tC.internalvars.GA4_property = tC.internalvars.GA4_property ? tC.internalvars.GA4_property : "";
}
tC.internalvars_5181.initiators.var980();
tC.internalvars_5181_5.listVar.push(980);
tC.internalvars_5181.initiators.var982 = typeof tC.internalvars_5181.initiators.var982 == "function" ? tC.internalvars_5181.initiators.var982 : function() {
    tC.internalvars.GA4isOrderIdValid = tC.internalvars.GA4isOrderIdValid ? tC.internalvars.GA4isOrderIdValid : "";
}
tC.internalvars_5181.initiators.var982();
tC.internalvars_5181_5.listVar.push(982);
tC.internalvars_5181.initiators.var984 = typeof tC.internalvars_5181.initiators.var984 == "function" ? tC.internalvars_5181.initiators.var984 : function() {
    tC.internalvars.GA_contentgroup1_GA4 = tC.internalvars.GA_contentgroup1_GA4 ? tC.internalvars.GA_contentgroup1_GA4 : "";
}
tC.internalvars_5181.initiators.var984();
tC.internalvars_5181_5.listVar.push(984);
tC.internalvars_5181.initiators.var986 = typeof tC.internalvars_5181.initiators.var986 == "function" ? tC.internalvars_5181.initiators.var986 : function() {
    tC.internalvars.GA4_UserID = tC.internalvars.GA4_UserID ? tC.internalvars.GA4_UserID : "";
}
tC.internalvars_5181.initiators.var986();
tC.internalvars_5181_5.listVar.push(986);
tC.internalvars_5181.initiators.var988 = typeof tC.internalvars_5181.initiators.var988 == "function" ? tC.internalvars_5181.initiators.var988 : function() {
    tC.internalvars.getClientId_GA4 = tC.internalvars.getClientId_GA4 ? tC.internalvars.getClientId_GA4 : "";
}
tC.internalvars_5181.initiators.var988();
tC.internalvars_5181_5.listVar.push(988);
tC.internalvars_5181.initiators.var455 = typeof tC.internalvars_5181.initiators.var455 == "function" ? tC.internalvars_5181.initiators.var455 : function() {
    tC.internalvars.getBooleanToString = tC.internalvars.getBooleanToString ? tC.internalvars.getBooleanToString : "";
}
tC.internalvars_5181.initiators.var455();
tC.internalvars_5181_5.listVar.push(455);
tC.internalvars_5181.initiators.var457 = typeof tC.internalvars_5181.initiators.var457 == "function" ? tC.internalvars_5181.initiators.var457 : function() {
    tC.internalvars.getSizmekId = tC.internalvars.getSizmekId ? tC.internalvars.getSizmekId : "";
}
tC.internalvars_5181.initiators.var457();
tC.internalvars_5181_5.listVar.push(457);
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
tC.internalvars_5181_5.listVar.push(459);
tC.internalvars_5181.initiators.var461 = typeof tC.internalvars_5181.initiators.var461 == "function" ? tC.internalvars_5181.initiators.var461 : function() {
    tC.internalvars.getSessionId = tC.internalvars.getSessionId ? tC.internalvars.getSessionId : "";
}
tC.internalvars_5181.initiators.var461();
tC.internalvars_5181_5.listVar.push(461);
tC.internalvars_5181.initiators.var463 = typeof tC.internalvars_5181.initiators.var463 == "function" ? tC.internalvars_5181.initiators.var463 : function() {
    tC.internalvars.getTimestamp = tC.internalvars.getTimestamp ? tC.internalvars.getTimestamp : "";
}
tC.internalvars_5181.initiators.var463();
tC.internalvars_5181_5.listVar.push(463);
tC.internalvars_5181.initiators.var465 = typeof tC.internalvars_5181.initiators.var465 == "function" ? tC.internalvars_5181.initiators.var465 : function() {
    tC.internalvars.getStringToNa = tC.internalvars.getStringToNa ? tC.internalvars.getStringToNa : "";
}
tC.internalvars_5181.initiators.var465();
tC.internalvars_5181_5.listVar.push(465);
tC.internalvars_5181.initiators.var1 = function() {
    tC.internalvars.tc_fulldomain = window.location.hostname;
}
tC.internalvars_5181.initiators.var1();
tC.internalvars_5181_5.listVar.push(1);
tC.internalvars_5181.initiators.var3 = function() {
    if (tc_vars["nav_sessionTP"] !== "") {
        tC.internalvars.tpcode = tc_vars["nav_sessionTP"];
    } else {
        tC.internalvars.tpcode = tc_vars["nav_historicalTP"];
    }
}
tC.internalvars_5181.initiators.var3();
tC.internalvars_5181_5.listVar.push(3);
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
tC.internalvars_5181_5.listVar.push(209);
tC.internalvars_5181.initiators.var217 = function() {
    if (tC.match(new String(tC.getCookie("PARTNER")), 'criteo', "") || tC.match(new String(tC.getCookie("PARTNER")), 'Criteo', "") || tC.match(new String(tC.getCookie("PARTNER")), 'CRITEO', "")) {
        tC.internalvars.criteodedup = "1";
    } else {
        tC.internalvars.criteodedup = "0";
    }
}
tC.internalvars_5181.initiators.var217();
tC.internalvars_5181_5.listVar.push(217);
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
tC.internalvars_5181_5.listVar.push(219);
tC.internalvars_5181.initiators.var251 = function() {
    tC.internalvars.md5_email = "";
}
tC.internalvars_5181.initiators.var251();
tC.internalvars_5181_5.listVar.push(251);
tC.internalvars_5181.initiators.var253 = typeof tC.internalvars_5181.initiators.var253 == "function" ? tC.internalvars_5181.initiators.var253 : function() {
    tC.internalvars.GA_UA = tC.internalvars.GA_UA ? tC.internalvars.GA_UA : "";
}
tC.internalvars_5181.initiators.var253();
tC.internalvars_5181_5.listVar.push(253);
tC.internalvars_5181.initiators.var255 = function() {
    tC.internalvars.UserId = "";
    if ((tC.getCookie("tc_iduserid") !== "") && (tc_vars.user_Id === "")) {
        tC.internalvars.UserId = tC.getCookie("tc_iduserid");
    } else {
        tC.internalvars.UserId = tc_vars.user_Id;
    }
}
tC.internalvars_5181.initiators.var255();
tC.internalvars_5181_5.listVar.push(255);
tC.internalvars_5181.initiators.var259 = typeof tC.internalvars_5181.initiators.var259 == "function" ? tC.internalvars_5181.initiators.var259 : function() {
    tC.internalvars.GA_contentgroup2 = tC.internalvars.GA_contentgroup2 ? tC.internalvars.GA_contentgroup2 : "";
}
tC.internalvars_5181.initiators.var259();
tC.internalvars_5181_5.listVar.push(259);
tC.internalvars_5181.initiators.var261 = typeof tC.internalvars_5181.initiators.var261 == "function" ? tC.internalvars_5181.initiators.var261 : function() {
    tC.internalvars.GA_contentgroup3 = tC.internalvars.GA_contentgroup3 ? tC.internalvars.GA_contentgroup3 : "";
}
tC.internalvars_5181.initiators.var261();
tC.internalvars_5181_5.listVar.push(261);
tC.internalvars_5181.initiators.var277 = typeof tC.internalvars_5181.initiators.var277 == "function" ? tC.internalvars_5181.initiators.var277 : function() {
    tC.internalvars.GA_fnl = tC.internalvars.GA_fnl ? tC.internalvars.GA_fnl : "";
}
tC.internalvars_5181.initiators.var277();
tC.internalvars_5181_5.listVar.push(277);
tC.internalvars_5181.initiators.var281 = typeof tC.internalvars_5181.initiators.var281 == "function" ? tC.internalvars_5181.initiators.var281 : function() {
    tC.internalvars.GA_ClientID = tC.internalvars.GA_ClientID ? tC.internalvars.GA_ClientID : "";
}
tC.internalvars_5181.initiators.var281();
tC.internalvars_5181_5.listVar.push(281);
tC.internalvars_5181.initiators.var283 = function() {
    tC.internalvars.sr_results = "";
    if (tc_vars.env_template == "searchresult") {
        tC.internalvars.sr_results = tc_vars.sr_items.length;
    } else {
        tC.internalvars.sr_results = "NA";
    }
}
tC.internalvars_5181.initiators.var283();
tC.internalvars_5181_5.listVar.push(283);
tC.internalvars_5181.initiators.var285 = typeof tC.internalvars_5181.initiators.var285 == "function" ? tC.internalvars_5181.initiators.var285 : function() {
    tC.internalvars.GA_step = tC.internalvars.GA_step ? tC.internalvars.GA_step : "";
}
tC.internalvars_5181.initiators.var285();
tC.internalvars_5181_5.listVar.push(285);
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
tC.internalvars_5181_5.listVar.push(315);
tC.internalvars_5181.initiators.var317 = typeof tC.internalvars_5181.initiators.var317 == "function" ? tC.internalvars_5181.initiators.var317 : function() {
    tC.internalvars.GA_dpt = tC.internalvars.GA_dpt ? tC.internalvars.GA_dpt : "";
}
tC.internalvars_5181.initiators.var317();
tC.internalvars_5181_5.listVar.push(317);
tC.internalvars_5181.initiators.var320 = function() {
    tC.internalvars.email_hash = "";
}
tC.internalvars_5181.initiators.var320();
tC.internalvars_5181_5.listVar.push(320);
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
tC.internalvars_5181_5.listVar.push(321);
tC.internalvars_5181.initiators.var322 = typeof tC.internalvars_5181.initiators.var322 == "function" ? tC.internalvars_5181.initiators.var322 : function() {
    tC.internalvars.GA_UserID = tC.internalvars.GA_UserID ? tC.internalvars.GA_UserID : "";
}
tC.internalvars_5181.initiators.var322();
tC.internalvars_5181_5.listVar.push(322);
tC.internalvars_5181.initiators.var329 = typeof tC.internalvars_5181.initiators.var329 == "function" ? tC.internalvars_5181.initiators.var329 : function() {
    tC.internalvars.GA_remarketing = tC.internalvars.GA_remarketing ? tC.internalvars.GA_remarketing : "";
}
tC.internalvars_5181.initiators.var329();
tC.internalvars_5181_5.listVar.push(329);
tC.internalvars_5181.initiators.var330 = typeof tC.internalvars_5181.initiators.var330 == "function" ? tC.internalvars_5181.initiators.var330 : function() {
    tC.internalvars.GA_contentgroup1 = tC.internalvars.GA_contentgroup1 ? tC.internalvars.GA_contentgroup1 : "";
}
tC.internalvars_5181.initiators.var330();
tC.internalvars_5181_5.listVar.push(330);
tC.internalvars_5181.initiators.var331 = function() {
    tC.internalvars.cart_itemsNo = "";
    if (typeof tc_vars.cart_itemsNo !== "undefined" && tc_vars.cart_itemsNo === "") {
        tC.internalvars.cart_itemsNo = "0"
    } else
        tC.internalvars.cart_itemsNo = tc_vars.cart_itemsNo;
}
tC.internalvars_5181.initiators.var331();
tC.internalvars_5181_5.listVar.push(331);
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
tC.internalvars_5181_5.listVar.push(333);
tC.internalvars_5181.initiators.var335 = function() {
    tC.internalvars.new_arrivals = "";
    if (typeof tc_vars["itemsList"] !== "undefined") {
        if (typeof tc_vars["itemsList"]["Homepage|New_Arrivals"] !== "undefined") {
            tC.internalvars.new_arrivals = tc_vars["itemsList"]["Homepage|New_Arrivals"];
        }
    }
}
tC.internalvars_5181.initiators.var335();
tC.internalvars_5181_5.listVar.push(335);
tC.internalvars_5181.initiators.var338 = function() {
    tC.internalvars.checkout_related = "";
    if (typeof tc_vars["itemsList"] !== "undefined") {
        if (typeof tc_vars["itemsList"]["Checkout|Related"] !== "undefined") {
            tC.internalvars.checkout_related = tc_vars["itemsList"]["Checkout|Related"];
        }
    }
}
tC.internalvars_5181.initiators.var338();
tC.internalvars_5181_5.listVar.push(338);
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
tC.internalvars_5181_5.listVar.push(339);
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
tC.internalvars_5181_5.listVar.push(348);
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
tC.internalvars_5181_5.listVar.push(349);
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
tC.internalvars_5181_5.listVar.push(351);
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
tC.internalvars_5181_5.listVar.push(355);
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
tC.internalvars_5181_5.listVar.push(356);
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
tC.internalvars_5181_5.listVar.push(357);
tC.internalvars_5181.initiators.var358 = function() {
    tC.internalvars.promoCod10 = "51122474XD,45351795KE,45351709CF,45351722ST,45351749BT,45351740TW,45367779OL,45370917WU,45358171HT,45358176PV,45365640QO,45358126MN,45366535MO,45358280IH,45370839KR,45370837QO,45358435XT,45358168JV,45358099EK,45358111BT,45368927OR,45369590UM,45358198KB,45370975RD,45369009FJ,45358195PU,45370974CI,45369008WD,45358308XE,45358269JM,45370822BA,45370780HS,45370716DO,45370799GH,45370811EB,45370723FU,45370913BC,45370911PN,45367775PF,45370848SD,45358116MJ,45358153VX,45358104QP,45358189DO,45370828KD,45370695JW,45370698GQ,45358151WX,45358105AA,45358178QD,45358422RU,45358446WT,45358387SD,45369732FH,45358100KA,45358432TW,45370601XJ,45358129AA,45369731QC,45358113SW,45370844VM,45370840KA,45358159MO,45358397JG,45370600IP,45358407HV,45358109GK,45370845KA,45358484RU";
}
tC.internalvars_5181.initiators.var358();
tC.internalvars_5181_5.listVar.push(358);
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
tC.internalvars_5181_5.listVar.push(359);
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
tC.internalvars_5181_5.listVar.push(362);
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
tC.internalvars_5181_5.listVar.push(363);
tC.internalvars_5181.initiators.var379 = function() {
    tC.internalvars.listName = "";
    if (tc_vars["nav_pagetype"] === "categories") {
        tC.internalvars.listName = tc_vars["nav_GAsection"] + '|' + tc_vars["nav_section_dept"] + '_' + tc_vars["nav_dept"];
    } else if (tc_vars["nav_pagetype"] === "searchresult") {
        tC.internalvars.listName = tc_vars["nav_GAsection"] + '|' + "textsearch";
    }
}
tC.internalvars_5181.initiators.var379();
tC.internalvars_5181_5.listVar.push(379);
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
tC.internalvars_5181_5.listVar.push(384);
tC.internalvars_5181.initiators.var385 = typeof tC.internalvars_5181.initiators.var385 == "function" ? tC.internalvars_5181.initiators.var385 : function() {
    tC.internalvars.baseDomain = tC.internalvars.baseDomain ? tC.internalvars.baseDomain : "";
}
tC.internalvars_5181.initiators.var385();
tC.internalvars_5181_5.listVar.push(385);
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
tC.internalvars_5181_5.listVar.push(466);
tC.internalvars_5181.initiators.var491 = function() {
    tC.internalvars.startCuralate = function() {
        var CRL8_SITENAME = 'cartier-h2m4mj';
        var e = window.crl8 = window.crl8 || {}
          , n = !1
          , i = [];
        e.ready = function(e) {
            n ? e() : i.push(e)
        }
        ,
        e.pixel = e.pixel || function() {
            e.pixel.q.push(arguments)
        }
        ,
        e.pixel.q = e.pixel.q || [];
        var t = window.document
          , o = t.createElement("script")
          , c = e.debug || -1 !== t.location.search.indexOf("crl8-debug=true") ? "js" : "min.js";
        o.src = t.location.protocol + "//cdn.curalate.com/sites/" + CRL8_SITENAME + "/site/latest/site." + c,
        o.onload = function() {
            n = !0,
            i.forEach(function(e) {
                e()
            })
        }
        ;
        var r = t.getElementsByTagName("script")[0];
        r.parentNode.insertBefore(o, r.nextSibling)
    }
}
tC.internalvars_5181.initiators.var491();
tC.internalvars_5181_5.listVar.push(491);
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
tC.internalvars_5181_5.listVar.push(495);
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
tC.internalvars_5181_5.listVar.push(497);
tC.internalvars_5181.initiators.var500 = function() {
    tC.internalvars.tc_url = document.location.href;
}
tC.internalvars_5181.initiators.var500();
tC.internalvars_5181_5.listVar.push(500);
tC.internalvars_5181.initiators.var502 = function() {
    tC.internalvars.tc_pathname = window.location.pathname;
}
tC.internalvars_5181.initiators.var502();
tC.internalvars_5181_5.listVar.push(502);
tC.internalvars_5181.initiators.var508 = typeof tC.internalvars_5181.initiators.var508 == "function" ? tC.internalvars_5181.initiators.var508 : function() {
    tC.internalvars.ricFacebookID = tC.internalvars.ricFacebookID ? tC.internalvars.ricFacebookID : "";
}
tC.internalvars_5181.initiators.var508();
tC.internalvars_5181_5.listVar.push(508);
tC.internalvars_5181.initiators.var510 = typeof tC.internalvars_5181.initiators.var510 == "function" ? tC.internalvars_5181.initiators.var510 : function() {
    tC.internalvars.ricCartNameArray = tC.internalvars.ricCartNameArray ? tC.internalvars.ricCartNameArray : "";
}
tC.internalvars_5181.initiators.var510();
tC.internalvars_5181_5.listVar.push(510);
tC.internalvars_5181.initiators.var512 = typeof tC.internalvars_5181.initiators.var512 == "function" ? tC.internalvars_5181.initiators.var512 : function() {
    tC.internalvars.ricCartCategoryArray = tC.internalvars.ricCartCategoryArray ? tC.internalvars.ricCartCategoryArray : "";
}
tC.internalvars_5181.initiators.var512();
tC.internalvars_5181_5.listVar.push(512);
tC.internalvars_5181.initiators.var514 = typeof tC.internalvars_5181.initiators.var514 == "function" ? tC.internalvars_5181.initiators.var514 : function() {
    tC.internalvars.ricCartIDArray = tC.internalvars.ricCartIDArray ? tC.internalvars.ricCartIDArray : "";
}
tC.internalvars_5181.initiators.var514();
tC.internalvars_5181_5.listVar.push(514);
tC.internalvars_5181.initiators.var518 = function() {
    tC.internalvars.ricOrderNameArray = [];
    if (tc_vars["order_items"] !== undefined) {
        for (var i = 0; i < tc_vars["order_items"].length; i++) {
            tC.internalvars.ricOrderNameArray.push(tc_vars["order_items"][i].order_item_name)
        }
    }
}
tC.internalvars_5181.initiators.var518();
tC.internalvars_5181_5.listVar.push(518);
tC.internalvars_5181.initiators.var520 = typeof tC.internalvars_5181.initiators.var520 == "function" ? tC.internalvars_5181.initiators.var520 : function() {
    tC.internalvars.ricOrderCatArray = tC.internalvars.ricOrderCatArray ? tC.internalvars.ricOrderCatArray : "";
}
tC.internalvars_5181.initiators.var520();
tC.internalvars_5181_5.listVar.push(520);
tC.internalvars_5181.initiators.var522 = typeof tC.internalvars_5181.initiators.var522 == "function" ? tC.internalvars_5181.initiators.var522 : function() {
    tC.internalvars.ricOrderIDArray = tC.internalvars.ricOrderIDArray ? tC.internalvars.ricOrderIDArray : "";
}
tC.internalvars_5181.initiators.var522();
tC.internalvars_5181_5.listVar.push(522);
tC.internalvars_5181.initiators.var534 = typeof tC.internalvars_5181.initiators.var534 == "function" ? tC.internalvars_5181.initiators.var534 : function() {
    tC.internalvars.amazonExFchId = tC.internalvars.amazonExFchId ? tC.internalvars.amazonExFchId : "";
}
tC.internalvars_5181.initiators.var534();
tC.internalvars_5181_5.listVar.push(534);
tC.internalvars_5181.initiators.var536 = typeof tC.internalvars_5181.initiators.var536 == "function" ? tC.internalvars_5181.initiators.var536 : function() {
    tC.internalvars.xandrSiteId = tC.internalvars.xandrSiteId ? tC.internalvars.xandrSiteId : "";
}
tC.internalvars_5181.initiators.var536();
tC.internalvars_5181_5.listVar.push(536);
tC.internalvars_5181.initiators.var538 = typeof tC.internalvars_5181.initiators.var538 == "function" ? tC.internalvars_5181.initiators.var538 : function() {
    tC.internalvars.mInsightTagId = tC.internalvars.mInsightTagId ? tC.internalvars.mInsightTagId : "";
}
tC.internalvars_5181.initiators.var538();
tC.internalvars_5181_5.listVar.push(538);
tC.internalvars_5181.initiators.var540 = typeof tC.internalvars_5181.initiators.var540 == "function" ? tC.internalvars_5181.initiators.var540 : function() {
    tC.internalvars.TTDClashAdvId = tC.internalvars.TTDClashAdvId ? tC.internalvars.TTDClashAdvId : "";
}
tC.internalvars_5181.initiators.var540();
tC.internalvars_5181_5.listVar.push(540);
tC.internalvars_5181.initiators.var542 = typeof tC.internalvars_5181.initiators.var542 == "function" ? tC.internalvars_5181.initiators.var542 : function() {
    tC.internalvars.TTDClashFmtId = tC.internalvars.TTDClashFmtId ? tC.internalvars.TTDClashFmtId : "";
}
tC.internalvars_5181.initiators.var542();
tC.internalvars_5181_5.listVar.push(542);
tC.internalvars_5181.initiators.var546 = typeof tC.internalvars_5181.initiators.var546 == "function" ? tC.internalvars_5181.initiators.var546 : function() {
    tC.internalvars.pepperjamId = tC.internalvars.pepperjamId ? tC.internalvars.pepperjamId : "";
}
tC.internalvars_5181.initiators.var546();
tC.internalvars_5181_5.listVar.push(546);
tC.internalvars_5181.initiators.var548 = typeof tC.internalvars_5181.initiators.var548 == "function" ? tC.internalvars_5181.initiators.var548 : function() {
    tC.internalvars.dv360EoyNov19SrcId = tC.internalvars.dv360EoyNov19SrcId ? tC.internalvars.dv360EoyNov19SrcId : "";
}
tC.internalvars_5181.initiators.var548();
tC.internalvars_5181_5.listVar.push(548);
tC.internalvars_5181.initiators.var550 = typeof tC.internalvars_5181.initiators.var550 == "function" ? tC.internalvars_5181.initiators.var550 : function() {
    tC.internalvars.dv360EoyNov19TypeId = tC.internalvars.dv360EoyNov19TypeId ? tC.internalvars.dv360EoyNov19TypeId : "";
}
tC.internalvars_5181.initiators.var550();
tC.internalvars_5181_5.listVar.push(550);
tC.internalvars_5181.initiators.var552 = typeof tC.internalvars_5181.initiators.var552 == "function" ? tC.internalvars_5181.initiators.var552 : function() {
    tC.internalvars.yahooJpRetargetingId = tC.internalvars.yahooJpRetargetingId ? tC.internalvars.yahooJpRetargetingId : "";
}
tC.internalvars_5181.initiators.var552();
tC.internalvars_5181_5.listVar.push(552);
tC.internalvars_5181.initiators.var554 = typeof tC.internalvars_5181.initiators.var554 == "function" ? tC.internalvars_5181.initiators.var554 : function() {
    tC.internalvars.bingId = tC.internalvars.bingId ? tC.internalvars.bingId : "";
}
tC.internalvars_5181.initiators.var554();
tC.internalvars_5181_5.listVar.push(554);
tC.internalvars_5181.initiators.var556 = typeof tC.internalvars_5181.initiators.var556 == "function" ? tC.internalvars_5181.initiators.var556 : function() {
    tC.internalvars.mobkoiSrcId = tC.internalvars.mobkoiSrcId ? tC.internalvars.mobkoiSrcId : "";
}
tC.internalvars_5181.initiators.var556();
tC.internalvars_5181_5.listVar.push(556);
tC.internalvars_5181.initiators.var558 = typeof tC.internalvars_5181.initiators.var558 == "function" ? tC.internalvars_5181.initiators.var558 : function() {
    tC.internalvars.mobkoiTypeId = tC.internalvars.mobkoiTypeId ? tC.internalvars.mobkoiTypeId : "";
}
tC.internalvars_5181.initiators.var558();
tC.internalvars_5181_5.listVar.push(558);
tC.internalvars_5181.initiators.var560 = typeof tC.internalvars_5181.initiators.var560 == "function" ? tC.internalvars_5181.initiators.var560 : function() {
    tC.internalvars.leFigaroEventId = tC.internalvars.leFigaroEventId ? tC.internalvars.leFigaroEventId : "";
}
tC.internalvars_5181.initiators.var560();
tC.internalvars_5181_5.listVar.push(560);
tC.internalvars_5181.initiators.var562 = typeof tC.internalvars_5181.initiators.var562 == "function" ? tC.internalvars_5181.initiators.var562 : function() {
    tC.internalvars.elleEventId = tC.internalvars.elleEventId ? tC.internalvars.elleEventId : "";
}
tC.internalvars_5181.initiators.var562();
tC.internalvars_5181_5.listVar.push(562);
tC.internalvars_5181.initiators.var564 = typeof tC.internalvars_5181.initiators.var564 == "function" ? tC.internalvars_5181.initiators.var564 : function() {
    tC.internalvars.mozzooPm = tC.internalvars.mozzooPm ? tC.internalvars.mozzooPm : "";
}
tC.internalvars_5181.initiators.var564();
tC.internalvars_5181_5.listVar.push(564);
tC.internalvars_5181.initiators.var566 = typeof tC.internalvars_5181.initiators.var566 == "function" ? tC.internalvars_5181.initiators.var566 : function() {
    tC.internalvars.aduxId = tC.internalvars.aduxId ? tC.internalvars.aduxId : "";
}
tC.internalvars_5181.initiators.var566();
tC.internalvars_5181_5.listVar.push(566);
tC.internalvars_5181.initiators.var568 = typeof tC.internalvars_5181.initiators.var568 == "function" ? tC.internalvars_5181.initiators.var568 : function() {
    tC.internalvars.emoteevTagId = tC.internalvars.emoteevTagId ? tC.internalvars.emoteevTagId : "";
}
tC.internalvars_5181.initiators.var568();
tC.internalvars_5181_5.listVar.push(568);
tC.internalvars_5181.initiators.var570 = typeof tC.internalvars_5181.initiators.var570 == "function" ? tC.internalvars_5181.initiators.var570 : function() {
    tC.internalvars.sizmekTagIdUS = tC.internalvars.sizmekTagIdUS ? tC.internalvars.sizmekTagIdUS : "";
}
tC.internalvars_5181.initiators.var570();
tC.internalvars_5181_5.listVar.push(570);
tC.internalvars_5181.initiators.var572 = typeof tC.internalvars_5181.initiators.var572 == "function" ? tC.internalvars_5181.initiators.var572 : function() {
    tC.internalvars.lineTagIdJp = tC.internalvars.lineTagIdJp ? tC.internalvars.lineTagIdJp : "";
}
tC.internalvars_5181.initiators.var572();
tC.internalvars_5181_5.listVar.push(572);
tC.internalvars_5181.initiators.var574 = typeof tC.internalvars_5181.initiators.var574 == "function" ? tC.internalvars_5181.initiators.var574 : function() {
    tC.internalvars.yahooPurchaseIdJp = tC.internalvars.yahooPurchaseIdJp ? tC.internalvars.yahooPurchaseIdJp : "";
}
tC.internalvars_5181.initiators.var574();
tC.internalvars_5181_5.listVar.push(574);
tC.internalvars_5181.initiators.var576 = typeof tC.internalvars_5181.initiators.var576 == "function" ? tC.internalvars_5181.initiators.var576 : function() {
    tC.internalvars.yahooConvLabelIdJp = tC.internalvars.yahooConvLabelIdJp ? tC.internalvars.yahooConvLabelIdJp : "";
}
tC.internalvars_5181.initiators.var576();
tC.internalvars_5181_5.listVar.push(576);
tC.internalvars_5181.initiators.var578 = typeof tC.internalvars_5181.initiators.var578 == "function" ? tC.internalvars_5181.initiators.var578 : function() {
    tC.internalvars.dbmTypeId = tC.internalvars.dbmTypeId ? tC.internalvars.dbmTypeId : "";
}
tC.internalvars_5181.initiators.var578();
tC.internalvars_5181_5.listVar.push(578);
tC.internalvars_5181.initiators.var580 = function() {
    tC.internalvars.dbmIdUs = "8437420";
}
tC.internalvars_5181.initiators.var580();
tC.internalvars_5181_5.listVar.push(580);
tC.internalvars_5181.initiators.var584 = typeof tC.internalvars_5181.initiators.var584 == "function" ? tC.internalvars_5181.initiators.var584 : function() {
    tC.internalvars.sizmekArrivalId = tC.internalvars.sizmekArrivalId ? tC.internalvars.sizmekArrivalId : "";
}
tC.internalvars_5181.initiators.var584();
tC.internalvars_5181_5.listVar.push(584);
tC.internalvars_5181.initiators.var586 = typeof tC.internalvars_5181.initiators.var586 == "function" ? tC.internalvars_5181.initiators.var586 : function() {
    tC.internalvars.sa360CounterTypeId = tC.internalvars.sa360CounterTypeId ? tC.internalvars.sa360CounterTypeId : "";
}
tC.internalvars_5181.initiators.var586();
tC.internalvars_5181_5.listVar.push(586);
tC.internalvars_5181.initiators.var588 = typeof tC.internalvars_5181.initiators.var588 == "function" ? tC.internalvars_5181.initiators.var588 : function() {
    tC.internalvars.sa360SalesTypeId = tC.internalvars.sa360SalesTypeId ? tC.internalvars.sa360SalesTypeId : "";
}
tC.internalvars_5181.initiators.var588();
tC.internalvars_5181_5.listVar.push(588);
tC.internalvars_5181.initiators.var606 = typeof tC.internalvars_5181.initiators.var606 == "function" ? tC.internalvars_5181.initiators.var606 : function() {
    tC.internalvars.teadsAdvertiserId = tC.internalvars.teadsAdvertiserId ? tC.internalvars.teadsAdvertiserId : "";
}
tC.internalvars_5181.initiators.var606();
tC.internalvars_5181_5.listVar.push(606);
tC.internalvars_5181.initiators.var590 = typeof tC.internalvars_5181.initiators.var590 == "function" ? tC.internalvars_5181.initiators.var590 : function() {
    tC.internalvars.sa360AdvId = tC.internalvars.sa360AdvId ? tC.internalvars.sa360AdvId : "";
}
tC.internalvars_5181.initiators.var590();
tC.internalvars_5181_5.listVar.push(590);
tC.internalvars_5181.initiators.var594 = typeof tC.internalvars_5181.initiators.var594 == "function" ? tC.internalvars_5181.initiators.var594 : function() {
    tC.internalvars.mInsightMacauSanyaId = tC.internalvars.mInsightMacauSanyaId ? tC.internalvars.mInsightMacauSanyaId : "";
}
tC.internalvars_5181.initiators.var594();
tC.internalvars_5181_5.listVar.push(594);
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
tC.internalvars_5181_5.listVar.push(598);
tC.internalvars_5181.initiators.var600 = typeof tC.internalvars_5181.initiators.var600 == "function" ? tC.internalvars_5181.initiators.var600 : function() {
    tC.internalvars.xaxisClashId = tC.internalvars.xaxisClashId ? tC.internalvars.xaxisClashId : "";
}
tC.internalvars_5181.initiators.var600();
tC.internalvars_5181_5.listVar.push(600);
tC.internalvars_5181.initiators.var602 = typeof tC.internalvars_5181.initiators.var602 == "function" ? tC.internalvars_5181.initiators.var602 : function() {
    tC.internalvars.dv360EoyNov19CatId = tC.internalvars.dv360EoyNov19CatId ? tC.internalvars.dv360EoyNov19CatId : "";
}
tC.internalvars_5181.initiators.var602();
tC.internalvars_5181_5.listVar.push(602);
tC.internalvars_5181.initiators.var608 = typeof tC.internalvars_5181.initiators.var608 == "function" ? tC.internalvars_5181.initiators.var608 : function() {
    tC.internalvars.teadsConversionType = tC.internalvars.teadsConversionType ? tC.internalvars.teadsConversionType : "";
}
tC.internalvars_5181.initiators.var608();
tC.internalvars_5181_5.listVar.push(608);
tC.internalvars_5181.initiators.var616 = typeof tC.internalvars_5181.initiators.var616 == "function" ? tC.internalvars_5181.initiators.var616 : function() {
    tC.internalvars.sizmekActivityId = tC.internalvars.sizmekActivityId ? tC.internalvars.sizmekActivityId : "";
}
tC.internalvars_5181.initiators.var616();
tC.internalvars_5181_5.listVar.push(616);
tC.internalvars_5181.initiators.var620 = typeof tC.internalvars_5181.initiators.var620 == "function" ? tC.internalvars_5181.initiators.var620 : function() {
    tC.internalvars.mInsightsMainCat = tC.internalvars.mInsightsMainCat ? tC.internalvars.mInsightsMainCat : "";
}
tC.internalvars_5181.initiators.var620();
tC.internalvars_5181_5.listVar.push(620);
tC.internalvars_5181.initiators.var622 = typeof tC.internalvars_5181.initiators.var622 == "function" ? tC.internalvars_5181.initiators.var622 : function() {
    tC.internalvars.mInsightsSubCat1 = tC.internalvars.mInsightsSubCat1 ? tC.internalvars.mInsightsSubCat1 : "";
}
tC.internalvars_5181.initiators.var622();
tC.internalvars_5181_5.listVar.push(622);
tC.internalvars_5181.initiators.var624 = typeof tC.internalvars_5181.initiators.var624 == "function" ? tC.internalvars_5181.initiators.var624 : function() {
    tC.internalvars.mInsightsSubCat2 = tC.internalvars.mInsightsSubCat2 ? tC.internalvars.mInsightsSubCat2 : "";
}
tC.internalvars_5181.initiators.var624();
tC.internalvars_5181_5.listVar.push(624);
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
tC.internalvars_5181_5.listVar.push(638);
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
tC.internalvars_5181_5.listVar.push(648);
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
tC.internalvars_5181_5.listVar.push(650);
tC.internalvars_5181.initiators.var670 = typeof tC.internalvars_5181.initiators.var670 == "function" ? tC.internalvars_5181.initiators.var670 : function() {
    tC.internalvars.mInsightIdNotProdPag = tC.internalvars.mInsightIdNotProdPag ? tC.internalvars.mInsightIdNotProdPag : "";
}
tC.internalvars_5181.initiators.var670();
tC.internalvars_5181_5.listVar.push(670);
tC.internalvars_5181.initiators.var674 = typeof tC.internalvars_5181.initiators.var674 == "function" ? tC.internalvars_5181.initiators.var674 : function() {
    tC.internalvars.xandrConvIdNotPP = tC.internalvars.xandrConvIdNotPP ? tC.internalvars.xandrConvIdNotPP : "";
}
tC.internalvars_5181.initiators.var674();
tC.internalvars_5181_5.listVar.push(674);
tC.internalvars_5181.initiators.var678 = typeof tC.internalvars_5181.initiators.var678 == "function" ? tC.internalvars_5181.initiators.var678 : function() {
    tC.internalvars.xandrSegIdNotPP = tC.internalvars.xandrSegIdNotPP ? tC.internalvars.xandrSegIdNotPP : "";
}
tC.internalvars_5181.initiators.var678();
tC.internalvars_5181_5.listVar.push(678);
tC.internalvars_5181.initiators.var686 = typeof tC.internalvars_5181.initiators.var686 == "function" ? tC.internalvars_5181.initiators.var686 : function() {
    tC.internalvars.ricCartPriceArray = tC.internalvars.ricCartPriceArray ? tC.internalvars.ricCartPriceArray : "";
}
tC.internalvars_5181.initiators.var686();
tC.internalvars_5181_5.listVar.push(686);
tC.internalvars_5181.initiators.var688 = typeof tC.internalvars_5181.initiators.var688 == "function" ? tC.internalvars_5181.initiators.var688 : function() {
    tC.internalvars.ricCartCollectionArray = tC.internalvars.ricCartCollectionArray ? tC.internalvars.ricCartCollectionArray : "";
}
tC.internalvars_5181.initiators.var688();
tC.internalvars_5181_5.listVar.push(688);
tC.internalvars_5181.initiators.var690 = function() {
    tC.internalvars.ricOrderPriceArray = [];
    if (tc_vars["order_items"] !== undefined) {
        for (var i = 0; i < tc_vars["order_items"].length; i++) {
            tC.internalvars.ricOrderPriceArray.push(tc_vars["order_items"][i].order_item_discount_ati)
        }
    }
}
tC.internalvars_5181.initiators.var690();
tC.internalvars_5181_5.listVar.push(690);
tC.internalvars_5181.initiators.var692 = typeof tC.internalvars_5181.initiators.var692 == "function" ? tC.internalvars_5181.initiators.var692 : function() {
    tC.internalvars.orderCollectionArray = tC.internalvars.orderCollectionArray ? tC.internalvars.orderCollectionArray : "";
}
tC.internalvars_5181.initiators.var692();
tC.internalvars_5181_5.listVar.push(692);
tC.internalvars_5181.initiators.var694 = function() {
    tC.internalvars.ricOrderQtyArray = [];
    if (tc_vars["order_items"] !== undefined) {
        for (var i = 0; i < tc_vars["order_items"].length; i++) {
            tC.internalvars.ricOrderQtyArray.push(tc_vars["order_items"][i].order_item_quantity)
        }
    }
}
tC.internalvars_5181.initiators.var694();
tC.internalvars_5181_5.listVar.push(694);
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
tC.internalvars_5181_5.listVar.push(698);
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
tC.internalvars_5181_5.listVar.push(700);
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
tC.internalvars_5181_5.listVar.push(717);
tC.internalvars_5181.initiators.var721 = typeof tC.internalvars_5181.initiators.var721 == "function" ? tC.internalvars_5181.initiators.var721 : function() {
    tC.internalvars.getAvailabilityFromString = tC.internalvars.getAvailabilityFromString ? tC.internalvars.getAvailabilityFromString : "";
}
tC.internalvars_5181.initiators.var721();
tC.internalvars_5181_5.listVar.push(721);
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
tC.internalvars_5181_5.listVar.push(723);
tC.internalvars_5181.initiators.var730 = typeof tC.internalvars_5181.initiators.var730 == "function" ? tC.internalvars_5181.initiators.var730 : function() {
    tC.internalvars.getModifiedString = tC.internalvars.getModifiedString ? tC.internalvars.getModifiedString : "";
}
tC.internalvars_5181.initiators.var730();
tC.internalvars_5181_5.listVar.push(730);
tC.internalvars_5181.initiators.var750 = typeof tC.internalvars_5181.initiators.var750 == "function" ? tC.internalvars_5181.initiators.var750 : function() {
    tC.internalvars.getPersonalization = tC.internalvars.getPersonalization ? tC.internalvars.getPersonalization : "";
}
tC.internalvars_5181.initiators.var750();
tC.internalvars_5181_5.listVar.push(750);
tC.internalvars_5181.initiators.var752 = typeof tC.internalvars_5181.initiators.var752 == "function" ? tC.internalvars_5181.initiators.var752 : function() {
    tC.internalvars.getPaymentInfo = tC.internalvars.getPaymentInfo ? tC.internalvars.getPaymentInfo : "";
}
tC.internalvars_5181.initiators.var752();
tC.internalvars_5181_5.listVar.push(752);
tC.internalvars_5181.initiators.var760 = typeof tC.internalvars_5181.initiators.var760 == "function" ? tC.internalvars_5181.initiators.var760 : function() {
    tC.internalvars.envFolder = tC.internalvars.envFolder ? tC.internalvars.envFolder : "";
}
tC.internalvars_5181.initiators.var760();
tC.internalvars_5181_5.listVar.push(760);
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
tC.internalvars_5181_5.listVar.push(764);
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
tC.internalvars_5181_5.listVar.push(771);
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
tC.internalvars_5181_5.listVar.push(797);
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
tC.internalvars_5181_5.listVar.push(799);
tC.internalvars_5181.initiators.var801 = function() {
    tC.internalvars.ric_envwork_country = "";
    if (tc_vars["env_work"] !== "" || tc_vars["nav_countryCode"] !== "") {
        tC.internalvars.ric_envwork_country = tc_vars["env_work"] + "-" + tc_vars["nav_countryCode"];
    }
}
tC.internalvars_5181.initiators.var801();
tC.internalvars_5181_5.listVar.push(801);
tC.internalvars_5181.initiators.var813 = typeof tC.internalvars_5181.initiators.var813 == "function" ? tC.internalvars_5181.initiators.var813 : function() {
    tC.internalvars.CookieSetting = tC.internalvars.CookieSetting ? tC.internalvars.CookieSetting : "";
}
tC.internalvars_5181.initiators.var813();
tC.internalvars_5181_5.listVar.push(813);
tC.internalvars_5181.initiators.var819 = function() {
    tC.internalvars.ric_countrycode_and_languagecode = "";
    if (tc_vars["nav_countryCode"] !== "" || tc_vars["nav_languageCode"] !== "") {
        tC.internalvars.ric_countrycode_and_languagecode = tc_vars["nav_countryCode"] + "-" + tc_vars["nav_languageCode"];
    }
}
tC.internalvars_5181.initiators.var819();
tC.internalvars_5181_5.listVar.push(819);
tC.internalvars_5181.initiators.var821 = typeof tC.internalvars_5181.initiators.var821 == "function" ? tC.internalvars_5181.initiators.var821 : function() {
    tC.internalvars.mediacomCatId = tC.internalvars.mediacomCatId ? tC.internalvars.mediacomCatId : "";
}
tC.internalvars_5181.initiators.var821();
tC.internalvars_5181_5.listVar.push(821);
tC.internalvars_5181.initiators.var827 = typeof tC.internalvars_5181.initiators.var827 == "function" ? tC.internalvars_5181.initiators.var827 : function() {
    tC.internalvars.tc_timestamp = tC.internalvars.tc_timestamp ? tC.internalvars.tc_timestamp : "";
}
tC.internalvars_5181.initiators.var827();
tC.internalvars_5181_5.listVar.push(827);
tC.internalvars_5181.initiators.var829 = typeof tC.internalvars_5181.initiators.var829 == "function" ? tC.internalvars_5181.initiators.var829 : function() {
    tC.internalvars.isOrganicReferrer = tC.internalvars.isOrganicReferrer ? tC.internalvars.isOrganicReferrer : "";
}
tC.internalvars_5181.initiators.var829();
tC.internalvars_5181_5.listVar.push(829);
tC.internalvars_5181.initiators.var831 = typeof tC.internalvars_5181.initiators.var831 == "function" ? tC.internalvars_5181.initiators.var831 : function() {
    tC.internalvars.tc_referrer = tC.internalvars.tc_referrer ? tC.internalvars.tc_referrer : "";
}
tC.internalvars_5181.initiators.var831();
tC.internalvars_5181_5.listVar.push(831);
tC.internalvars_5181.initiators.var833 = typeof tC.internalvars_5181.initiators.var833 == "function" ? tC.internalvars_5181.initiators.var833 : function() {
    tC.internalvars.hrefHasUtmorGclid = tC.internalvars.hrefHasUtmorGclid ? tC.internalvars.hrefHasUtmorGclid : "";
}
tC.internalvars_5181.initiators.var833();
tC.internalvars_5181_5.listVar.push(833);
tC.internalvars_5181.initiators.var835 = typeof tC.internalvars_5181.initiators.var835 == "function" ? tC.internalvars_5181.initiators.var835 : function() {
    tC.internalvars.twitterPixelIdJewelry = tC.internalvars.twitterPixelIdJewelry ? tC.internalvars.twitterPixelIdJewelry : "";
}
tC.internalvars_5181.initiators.var835();
tC.internalvars_5181_5.listVar.push(835);
tC.internalvars_5181.initiators.var849 = typeof tC.internalvars_5181.initiators.var849 == "function" ? tC.internalvars_5181.initiators.var849 : function() {
    tC.internalvars.tc_randomCachebuster = tC.internalvars.tc_randomCachebuster ? tC.internalvars.tc_randomCachebuster : "";
}
tC.internalvars_5181.initiators.var849();
tC.internalvars_5181_5.listVar.push(849);
tC.internalvars_5181.initiators.var851 = typeof tC.internalvars_5181.initiators.var851 == "function" ? tC.internalvars_5181.initiators.var851 : function() {
    tC.internalvars.singlePersonalized = tC.internalvars.singlePersonalized ? tC.internalvars.singlePersonalized : "";
}
tC.internalvars_5181.initiators.var851();
tC.internalvars_5181_5.listVar.push(851);
tC.internalvars_5181.initiators.var853 = typeof tC.internalvars_5181.initiators.var853 == "function" ? tC.internalvars_5181.initiators.var853 : function() {
    tC.internalvars.isPersonalizedNA = tC.internalvars.isPersonalizedNA ? tC.internalvars.isPersonalizedNA : "";
}
tC.internalvars_5181.initiators.var853();
tC.internalvars_5181_5.listVar.push(853);
tC.internalvars_5181.initiators.var871 = typeof tC.internalvars_5181.initiators.var871 == "function" ? tC.internalvars_5181.initiators.var871 : function() {
    tC.internalvars.isAdjustedNA = tC.internalvars.isAdjustedNA ? tC.internalvars.isAdjustedNA : "";
}
tC.internalvars_5181.initiators.var871();
tC.internalvars_5181_5.listVar.push(871);
tC.internalvars_5181.initiators.var873 = typeof tC.internalvars_5181.initiators.var873 == "function" ? tC.internalvars_5181.initiators.var873 : function() {
    tC.internalvars.isEmbossedNA = tC.internalvars.isEmbossedNA ? tC.internalvars.isEmbossedNA : "";
}
tC.internalvars_5181.initiators.var873();
tC.internalvars_5181_5.listVar.push(873);
tC.internalvars_5181.initiators.var875 = typeof tC.internalvars_5181.initiators.var875 == "function" ? tC.internalvars_5181.initiators.var875 : function() {
    tC.internalvars.isEngravedNA = tC.internalvars.isEngravedNA ? tC.internalvars.isEngravedNA : "";
}
tC.internalvars_5181.initiators.var875();
tC.internalvars_5181_5.listVar.push(875);
tC.internalvars_5181.initiators.var877 = typeof tC.internalvars_5181.initiators.var877 == "function" ? tC.internalvars_5181.initiators.var877 : function() {
    tC.internalvars.isPersonalizedNabis = tC.internalvars.isPersonalizedNabis ? tC.internalvars.isPersonalizedNabis : "";
}
tC.internalvars_5181.initiators.var877();
tC.internalvars_5181_5.listVar.push(877);
tC.internalvars_5181.initiators.var881 = function() {
    tC.internalvars.ricEnvCountryLang = "";
    if (tc_vars["env_work"] !== "" || tc_vars["nav_countryCode"] !== "" || tc_vars["nav_languageCode"] !== "") {
        tC.internalvars.ricEnvCountryLang = tc_vars["env_work"] + "-" + tc_vars["nav_countryCode"] + "-" + tc_vars["nav_languageCode"];
    }
}
tC.internalvars_5181.initiators.var881();
tC.internalvars_5181_5.listVar.push(881);
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
tC.internalvars_5181_5.listVar.push(902);
tC.internalvars_5181.initiators.var914 = function() {
    tC.internalvars.domain_country_lang = "";
    if (tC.internalvars.tc_fulldomain !== "" || tc_vars["nav_countryCode"] !== "" || tc_vars["nav_languageCode"] !== "") {
        tC.internalvars.domain_country_lang = tC.internalvars.tc_fulldomain + "-" + tc_vars["nav_countryCode"] + "-" + tc_vars["nav_languageCode"];
    }
}
tC.internalvars_5181.initiators.var914();
tC.internalvars_5181_5.listVar.push(914);
tC.internalvars_5181.initiators.var916 = function() {
    tC.internalvars.masterSku_event = "";
    if (tc_array_events["defaultMfPartNumber"] !== "") {
        tC.internalvars.masterSku_event = tc_array_events["defaultMfPartNumber"];
    } else {
        tC.internalvars.masterSku_event = tc_array_events["mfPartNumber"];
    }
}
tC.internalvars_5181.initiators.var916();
tC.internalvars_5181_5.listVar.push(916);
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
tC.internalvars_5181_5.listVar.push(922);
tC.internalvars_5181.initiators.var958 = typeof tC.internalvars_5181.initiators.var958 == "function" ? tC.internalvars_5181.initiators.var958 : function() {
    tC.internalvars.isPersonalizedNabis2 = tC.internalvars.isPersonalizedNabis2 ? tC.internalvars.isPersonalizedNabis2 : "";
}
tC.internalvars_5181.initiators.var958();
tC.internalvars_5181_5.listVar.push(958);
tC.internalvars_5181.initiators.var960 = function() {
    tC.internalvars.ricOrderQtyArray = [];
    if (tc_vars["order_items"] !== undefined) {
        for (var i = 0; i < tc_vars["order_items"].length; i++) {
            tC.internalvars.ricOrderQtyArray.push(tc_vars["order_items"][i].order_item_quantity)
        }
    }
}
tC.internalvars_5181.initiators.var960();
tC.internalvars_5181_5.listVar.push(960);
tC.internalvars_5181.initiators.var962 = function() {
    tC.internalvars.cartValue = 0;
    if (tc_vars["cart_items"] !== undefined) {
        for (var i = 0; i < tc_vars["cart_items"].length; i++) {
            tC.internalvars.cartValue += (Number(tc_vars["cart_items"][i].cart_item_unitprice_ati))
        }
    }
}
tC.internalvars_5181.initiators.var962();
tC.internalvars_5181_5.listVar.push(962);
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
tC.internalvars_5181_5.listVar.push(964);
tC.internalvars_5181.initiators.var966 = typeof tC.internalvars_5181.initiators.var966 == "function" ? tC.internalvars_5181.initiators.var966 : function() {
    tC.internalvars.ricCartQuantityArray = tC.internalvars.ricCartQuantityArray ? tC.internalvars.ricCartQuantityArray : "";
}
tC.internalvars_5181.initiators.var966();
tC.internalvars_5181_5.listVar.push(966);
tC.internalvars_5181.initiators.var967 = typeof tC.internalvars_5181.initiators.var967 == "function" ? tC.internalvars_5181.initiators.var967 : function() {
    tC.internalvars.productSizeSoldout = tC.internalvars.productSizeSoldout ? tC.internalvars.productSizeSoldout : "";
}
tC.internalvars_5181.initiators.var967();
tC.internalvars_5181_5.listVar.push(967);
tC.internalvars_5181.initiators.var969 = typeof tC.internalvars_5181.initiators.var969 == "function" ? tC.internalvars_5181.initiators.var969 : function() {
    tC.internalvars.productSizeIsOnlyOne = tC.internalvars.productSizeIsOnlyOne ? tC.internalvars.productSizeIsOnlyOne : "";
}
tC.internalvars_5181.initiators.var969();
tC.internalvars_5181_5.listVar.push(969);
tC.internalvars_5181.initiators.var971 = typeof tC.internalvars_5181.initiators.var971 == "function" ? tC.internalvars_5181.initiators.var971 : function() {
    tC.internalvars.productSizeAvailable = tC.internalvars.productSizeAvailable ? tC.internalvars.productSizeAvailable : "";
}
tC.internalvars_5181.initiators.var971();
tC.internalvars_5181_5.listVar.push(971);
tC.internalvars_5181.initiators.var977 = typeof tC.internalvars_5181.initiators.var977 == "function" ? tC.internalvars_5181.initiators.var977 : function() {
    tC.internalvars.cartItemsIsEyewear = tC.internalvars.cartItemsIsEyewear ? tC.internalvars.cartItemsIsEyewear : "";
}
tC.internalvars_5181.initiators.var977();
tC.internalvars_5181_5.listVar.push(977);
tC.internalvars_5181.initiators.var979 = typeof tC.internalvars_5181.initiators.var979 == "function" ? tC.internalvars_5181.initiators.var979 : function() {
    tC.internalvars.orderItemIsEyewear = tC.internalvars.orderItemIsEyewear ? tC.internalvars.orderItemIsEyewear : "";
}
tC.internalvars_5181.initiators.var979();
tC.internalvars_5181_5.listVar.push(979);
tC.internalvars_5181.initiators.var990 = typeof tC.internalvars_5181.initiators.var990 == "function" ? tC.internalvars_5181.initiators.var990 : function() {
    tC.internalvars.pguri_GA4 = tC.internalvars.pguri_GA4 ? tC.internalvars.pguri_GA4 : "";
}
tC.internalvars_5181.initiators.var990();
tC.internalvars_5181_5.listVar.push(990);
tC.internalvars_5181.initiators.var992 = typeof tC.internalvars_5181.initiators.var992 == "function" ? tC.internalvars_5181.initiators.var992 : function() {
    tC.internalvars.getTimestampGA4 = tC.internalvars.getTimestampGA4 ? tC.internalvars.getTimestampGA4 : "";
}
tC.internalvars_5181.initiators.var992();
tC.internalvars_5181_5.listVar.push(992);
tC.internalvars_5181.initiators.var994 = typeof tC.internalvars_5181.initiators.var994 == "function" ? tC.internalvars_5181.initiators.var994 : function() {
    tC.internalvars.getSessionId_GA4 = tC.internalvars.getSessionId_GA4 ? tC.internalvars.getSessionId_GA4 : "";
}
tC.internalvars_5181.initiators.var994();
tC.internalvars_5181_5.listVar.push(994);
tC.internalvars_5181.initiators.var998 = typeof tC.internalvars_5181.initiators.var998 == "function" ? tC.internalvars_5181.initiators.var998 : function() {
    tC.internalvars.getTrafficType = tC.internalvars.getTrafficType ? tC.internalvars.getTrafficType : "";
}
tC.internalvars_5181.initiators.var998();
tC.internalvars_5181_5.listVar.push(998);
tC.internalvars_5181.initiators.var1000 = typeof tC.internalvars_5181.initiators.var1000 == "function" ? tC.internalvars_5181.initiators.var1000 : function() {
    tC.internalvars.currency = tC.internalvars.currency ? tC.internalvars.currency : "";
}
tC.internalvars_5181.initiators.var1000();
tC.internalvars_5181_5.listVar.push(1000);
tC.internalvars_5181.initiators.var1002 = typeof tC.internalvars_5181.initiators.var1002 == "function" ? tC.internalvars_5181.initiators.var1002 : function() {
    tC.internalvars.getParameterByName = tC.internalvars.getParameterByName ? tC.internalvars.getParameterByName : "";
}
tC.internalvars_5181.initiators.var1002();
tC.internalvars_5181_5.listVar.push(1002);
tC.internalvars_5181.initiators.var1006 = typeof tC.internalvars_5181.initiators.var1006 == "function" ? tC.internalvars_5181.initiators.var1006 : function() {
    tC.internalvars.checkoutShippingMeth = tC.internalvars.checkoutShippingMeth ? tC.internalvars.checkoutShippingMeth : "";
}
tC.internalvars_5181.initiators.var1006();
tC.internalvars_5181_5.listVar.push(1006);
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
tC.internalvars_5181_5.listVar.push(1007);
tC.internalvars_5181.initiators.var1023 = typeof tC.internalvars_5181.initiators.var1023 == "function" ? tC.internalvars_5181.initiators.var1023 : function() {
    tC.internalvars.pgURI_opc_car_GA4 = tC.internalvars.pgURI_opc_car_GA4 ? tC.internalvars.pgURI_opc_car_GA4 : "";
}
tC.internalvars_5181.initiators.var1023();
tC.internalvars_5181_5.listVar.push(1023);
tC.internalvars_5181.initiators.var1025 = typeof tC.internalvars_5181.initiators.var1025 == "function" ? tC.internalvars_5181.initiators.var1025 : function() {
    tC.internalvars.getPlpDictionaryName = tC.internalvars.getPlpDictionaryName ? tC.internalvars.getPlpDictionaryName : "";
}
tC.internalvars_5181.initiators.var1025();
tC.internalvars_5181_5.listVar.push(1025);
tC.internalvars_5181.initiators.var1027 = typeof tC.internalvars_5181.initiators.var1027 == "function" ? tC.internalvars_5181.initiators.var1027 : function() {
    tC.internalvars.content_square_integration = tC.internalvars.content_square_integration ? tC.internalvars.content_square_integration : "";
}
tC.internalvars_5181.initiators.var1027();
tC.internalvars_5181_5.listVar.push(1027);
tC.internalvars_5181.initiators.var1036 = function() {
    tC.internalvars.IdAndName = "";
    if (tc_vars["product_mfPartNumber"] !== "" || tc_vars["product_eng_title"] !== "") {
        tC.internalvars.IdAndName = tc_vars["product_mfPartNumber"] + "-" + tc_vars["product_eng_title"];
    }
}
tC.internalvars_5181.initiators.var1036();
tC.internalvars_5181_5.listVar.push(1036);
tC.internalvars_5181.initiators.var1040 = typeof tC.internalvars_5181.initiators.var1040 == "function" ? tC.internalvars_5181.initiators.var1040 : function() {
    tC.internalvars.amItester = tC.internalvars.amItester ? tC.internalvars.amItester : "";
}
tC.internalvars_5181.initiators.var1040();
tC.internalvars_5181_5.listVar.push(1040);
tC.internalvars_5181.initiators.var1045 = typeof tC.internalvars_5181.initiators.var1045 == "function" ? tC.internalvars_5181.initiators.var1045 : function() {
    tC.internalvars.tiktokKeringId = tC.internalvars.tiktokKeringId ? tC.internalvars.tiktokKeringId : "";
}
tC.internalvars_5181.initiators.var1045();
tC.internalvars_5181_5.listVar.push(1045);
tC.internalvars_5181.initiators.var1046 = function() {
    tC.internalvars.snapchatKeringId = "fb5a3aad-fbff-45e0-82bd-8b717f7be3a9";
}
tC.internalvars_5181.initiators.var1046();
tC.internalvars_5181_5.listVar.push(1046);
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
tC.internalvars_5181_5.listVar.push(249);
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
tC.internalvars_5181_5.listVar.push(345);
tC.internalvars_5181.initiators.var365 = typeof tC.internalvars_5181.initiators.var365 == "function" ? tC.internalvars_5181.initiators.var365 : function() {
    tC.internalvars.GA_step_OPC = tC.internalvars.GA_step_OPC ? tC.internalvars.GA_step_OPC : "";
}
tC.internalvars_5181.initiators.var365();
tC.internalvars_5181_5.listVar.push(365);
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
tC.internalvars_5181_5.listVar.push(380);
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
tC.internalvars_5181_5.listVar.push(476);
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
tC.internalvars_5181_5.listVar.push(478);
tC.internalvars_5181.initiators.var504 = function() {
    tC.internalvars.ricBrandlockJSID = "";
    switch (tc_vars["nav_countryCode"]) {
    case "GB":
        tC.internalvars.ricBrandlockJSID = "4bcf651f";
        break;
    default:
        tC.internalvars.ricBrandlockJSID = "f8e366da";
        break;
    }
}
tC.internalvars_5181.initiators.var504();
tC.internalvars_5181_5.listVar.push(504);
tC.internalvars_5181.initiators.var506 = function() {
    tC.internalvars.ricBrandlockID = "";
    switch (tc_vars["nav_countryCode"]) {
    case "GB":
        tC.internalvars.ricBrandlockID = "d26eufcawwi37e";
        break;
    default:
        tC.internalvars.ricBrandlockID = "d2wi0zd8hr0kno";
        break;
    }
}
tC.internalvars_5181.initiators.var506();
tC.internalvars_5181_5.listVar.push(506);
tC.internalvars_5181.initiators.var516 = typeof tC.internalvars_5181.initiators.var516 == "function" ? tC.internalvars_5181.initiators.var516 : function() {
    tC.internalvars.btqPickupCountry = tC.internalvars.btqPickupCountry ? tC.internalvars.btqPickupCountry : "";
}
tC.internalvars_5181.initiators.var516();
tC.internalvars_5181_5.listVar.push(516);
tC.internalvars_5181.initiators.var524 = function() {
    tC.internalvars.ricMedalliaSiteID = "";
    switch (tc_vars["nav_countryCode"]) {
    case "CH":
        tC.internalvars.ricMedalliaSiteID = "166757";
        break;
    case "ES":
        tC.internalvars.ricMedalliaSiteID = "202746";
        break;
    case "DE":
        tC.internalvars.ricMedalliaSiteID = "202746";
        break;
    case "IT":
        tC.internalvars.ricMedalliaSiteID = "202746";
        break;
    case "FR":
        tC.internalvars.ricMedalliaSiteID = "202746";
        break;
    case "GB":
        tC.internalvars.ricMedalliaSiteID = "24493";
        break;
    default:
        tC.internalvars.ricMedalliaSiteID = "";
        break;
    }
}
tC.internalvars_5181.initiators.var524();
tC.internalvars_5181_5.listVar.push(524);
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
tC.internalvars_5181_5.listVar.push(526);
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
tC.internalvars_5181_5.listVar.push(528);
tC.internalvars_5181.initiators.var592 = typeof tC.internalvars_5181.initiators.var592 == "function" ? tC.internalvars_5181.initiators.var592 : function() {
    tC.internalvars.dcmId = tC.internalvars.dcmId ? tC.internalvars.dcmId : "";
}
tC.internalvars_5181.initiators.var592();
tC.internalvars_5181_5.listVar.push(592);
tC.internalvars_5181.initiators.var596 = typeof tC.internalvars_5181.initiators.var596 == "function" ? tC.internalvars_5181.initiators.var596 : function() {
    tC.internalvars.twitterPixelId = tC.internalvars.twitterPixelId ? tC.internalvars.twitterPixelId : "";
}
tC.internalvars_5181.initiators.var596();
tC.internalvars_5181_5.listVar.push(596);
tC.internalvars_5181.initiators.var604 = typeof tC.internalvars_5181.initiators.var604 == "function" ? tC.internalvars_5181.initiators.var604 : function() {
    tC.internalvars.snapchatId = tC.internalvars.snapchatId ? tC.internalvars.snapchatId : "";
}
tC.internalvars_5181.initiators.var604();
tC.internalvars_5181_5.listVar.push(604);
tC.internalvars_5181.initiators.var610 = typeof tC.internalvars_5181.initiators.var610 == "function" ? tC.internalvars_5181.initiators.var610 : function() {
    tC.internalvars.mobkoiCategoryId = tC.internalvars.mobkoiCategoryId ? tC.internalvars.mobkoiCategoryId : "";
}
tC.internalvars_5181.initiators.var610();
tC.internalvars_5181_5.listVar.push(610);
tC.internalvars_5181.initiators.var612 = typeof tC.internalvars_5181.initiators.var612 == "function" ? tC.internalvars_5181.initiators.var612 : function() {
    tC.internalvars.dbmSourceId = tC.internalvars.dbmSourceId ? tC.internalvars.dbmSourceId : "";
}
tC.internalvars_5181.initiators.var612();
tC.internalvars_5181_5.listVar.push(612);
tC.internalvars_5181.initiators.var614 = typeof tC.internalvars_5181.initiators.var614 == "function" ? tC.internalvars_5181.initiators.var614 : function() {
    tC.internalvars.dbmCategoryId = tC.internalvars.dbmCategoryId ? tC.internalvars.dbmCategoryId : "";
}
tC.internalvars_5181.initiators.var614();
tC.internalvars_5181_5.listVar.push(614);
tC.internalvars_5181.initiators.var618 = typeof tC.internalvars_5181.initiators.var618 == "function" ? tC.internalvars_5181.initiators.var618 : function() {
    tC.internalvars.sa360FunnelCatId = tC.internalvars.sa360FunnelCatId ? tC.internalvars.sa360FunnelCatId : "";
}
tC.internalvars_5181.initiators.var618();
tC.internalvars_5181_5.listVar.push(618);
tC.internalvars_5181.initiators.var656 = typeof tC.internalvars_5181.initiators.var656 == "function" ? tC.internalvars_5181.initiators.var656 : function() {
    tC.internalvars.pinterestTagId = tC.internalvars.pinterestTagId ? tC.internalvars.pinterestTagId : "";
}
tC.internalvars_5181.initiators.var656();
tC.internalvars_5181_5.listVar.push(656);
tC.internalvars_5181.initiators.var672 = typeof tC.internalvars_5181.initiators.var672 == "function" ? tC.internalvars_5181.initiators.var672 : function() {
    tC.internalvars.mInsightId = tC.internalvars.mInsightId ? tC.internalvars.mInsightId : "";
}
tC.internalvars_5181.initiators.var672();
tC.internalvars_5181_5.listVar.push(672);
tC.internalvars_5181.initiators.var676 = typeof tC.internalvars_5181.initiators.var676 == "function" ? tC.internalvars_5181.initiators.var676 : function() {
    tC.internalvars.xandrConvId = tC.internalvars.xandrConvId ? tC.internalvars.xandrConvId : "";
}
tC.internalvars_5181.initiators.var676();
tC.internalvars_5181_5.listVar.push(676);
tC.internalvars_5181.initiators.var680 = typeof tC.internalvars_5181.initiators.var680 == "function" ? tC.internalvars_5181.initiators.var680 : function() {
    tC.internalvars.xandrSegId = tC.internalvars.xandrSegId ? tC.internalvars.xandrSegId : "";
}
tC.internalvars_5181.initiators.var680();
tC.internalvars_5181_5.listVar.push(680);
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
tC.internalvars_5181_5.listVar.push(719);
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
tC.internalvars_5181_5.listVar.push(725);
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
tC.internalvars_5181_5.listVar.push(748);
tC.internalvars_5181.initiators.var756 = function() {
    tC.internalvars.cybbaID = "";
    switch (tc_vars["nav_countryCode"]) {
    case "FR":
        tC.internalvars.cybbaID = "0BF4AF9D-646F-126B-1205-575ABB2BAE51";
        break;
    case "CH":
        tC.internalvars.cybbaID = "3C92692C-0611-0212-D510-0B1BBF03FC84";
        break;
    case "DE":
        tC.internalvars.cybbaID = "B9A889D8-E294-E936-0209-3FA53E40585E";
        break;
    case "NL":
        tC.internalvars.cybbaID = "7303CCF8-CFCC-6845-C6EF-3FE4CC6D571F";
        break;
    case "GB":
        tC.internalvars.cybbaID = "67B19C2A-418A-3B13-6FEF-207FF060498A";
        break;
    case "ES":
        tC.internalvars.cybbaID = "585D99A4-ACC0-3C3C-B451-F78144394658";
        break;
    case "IT":
        tC.internalvars.cybbaID = "FF14C653-499B-3ED0-53A8-15B2513FBE58";
        break;
    default:
        tC.internalvars.cybbaID = "";
        break;
    }
}
tC.internalvars_5181.initiators.var756();
tC.internalvars_5181_5.listVar.push(756);
tC.internalvars_5181.initiators.var758 = function() {
    tC.internalvars.HeroID = "";
    switch (tC.internalvars.ric_envwork_country) {
    case "test-GB":
        tC.internalvars.HeroID = "staging-47ab2fdc-89b7-4cad-b0f3-93a3bcb951bf";
        break;
    case "prod-GB":
        tC.internalvars.HeroID = "be77af4e-d0eb-41bd-916e-6b6df7abd7b7";
        break;
    case "test-FR":
        tC.internalvars.HeroID = "staging-d79d00c8-ae39-4d79-923a-49a36d1b9e63";
        break;
    case "prod-FR":
        tC.internalvars.HeroID = "9b5cd556-67ea-46fe-8074-17a20b9c1193";
        break;
    case "test-IT":
        tC.internalvars.HeroID = "staging-7de4a8de-345c-41c6-8e65-bdbf97f8f174";
        break;
    case "prod-IT":
        tC.internalvars.HeroID = "9c5c6825-2748-4b69-a82a-7d025e478d13";
        break;
    case "test-CH":
        tC.internalvars.HeroID = "staging-f991fbe1-f47f-478d-a352-93884fbc6929";
        break;
    case "prod-CH":
        tC.internalvars.HeroID = "ccd7d089-298f-41a5-9874-76d94c83fd9a";
        break;
    default:
        tC.internalvars.HeroID = "";
        break;
    }
}
tC.internalvars_5181.initiators.var758();
tC.internalvars_5181_5.listVar.push(758);
tC.internalvars_5181.initiators.var766 = function() {
    tC.internalvars.ric_pepperjam_id = "";
    switch (tc_vars["nav_countryCode"]) {
    case "GB":
        tC.internalvars.ric_pepperjam_id = "2635229648";
        break;
    case "CH":
        tC.internalvars.ric_pepperjam_id = "904231618";
        break;
    case "FR":
        tC.internalvars.ric_pepperjam_id = "3326240934";
        break;
    case "DE":
        tC.internalvars.ric_pepperjam_id = "345576428";
        break;
    case "IT":
        tC.internalvars.ric_pepperjam_id = "1015796928";
        break;
    case "ES":
        tC.internalvars.ric_pepperjam_id = "3288429412";
        break;
    case "NL":
        tC.internalvars.ric_pepperjam_id = "3348972114";
        break;
    case "FI":
        tC.internalvars.ric_pepperjam_id = "3348972114";
        break;
    default:
        tC.internalvars.ric_pepperjam_id = "";
        break;
    }
}
tC.internalvars_5181.initiators.var766();
tC.internalvars_5181_5.listVar.push(766);
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
tC.internalvars_5181_5.listVar.push(817);
tC.internalvars_5181.initiators.var823 = typeof tC.internalvars_5181.initiators.var823 == "function" ? tC.internalvars_5181.initiators.var823 : function() {
    tC.internalvars.minsightServer = tC.internalvars.minsightServer ? tC.internalvars.minsightServer : "";
}
tC.internalvars_5181.initiators.var823();
tC.internalvars_5181_5.listVar.push(823);
tC.internalvars_5181.initiators.var825 = typeof tC.internalvars_5181.initiators.var825 == "function" ? tC.internalvars_5181.initiators.var825 : function() {
    tC.internalvars.mInsightAddToCartID = tC.internalvars.mInsightAddToCartID ? tC.internalvars.mInsightAddToCartID : "";
}
tC.internalvars_5181.initiators.var825();
tC.internalvars_5181_5.listVar.push(825);
tC.internalvars_5181.initiators.var837 = function() {
    tC.internalvars.ric_salesforceID = "";
    switch (tC.internalvars.domain_country_lang) {
    case "cartier-s03.yooxbox.com-GB-en":
        tC.internalvars.ric_salesforceID = "5733N0000004F6i";
        break;
    case "www.cartier.com-GB-en":
        tC.internalvars.ric_salesforceID = "5731i000000Gqik";
        break;
    case "cartier-s03.yooxbox.com-CH-de":
        tC.internalvars.ric_salesforceID = "5733N0000004FBs";
        break;
    case "cartier-s03.yooxbox.com-CH-fr":
        tC.internalvars.ric_salesforceID = "5733N0000004FBx";
        break;
    case "cartier-s03.yooxbox.com-CH-en":
        tC.internalvars.ric_salesforceID = "5733N0000004FBn";
        break;
    case "cartier-s03.yooxbox.com-CH-it":
        tC.internalvars.ric_salesforceID = "5733N0000004FC2";
        break;
    case "cartier-s03.yooxbox.com-DE-de":
        tC.internalvars.ric_salesforceID = "5733N0000004FBd";
        break;
    case "cartier-s03.yooxbox.com-ES-es":
        tC.internalvars.ric_salesforceID = "5733N0000004FBY";
        break;
    case "cartier-s03.yooxbox.com-FR-fr":
        tC.internalvars.ric_salesforceID = "5733N0000004FBT";
        break;
    case "cartier-s03.yooxbox.com-IT-it":
        tC.internalvars.ric_salesforceID = "5733N0000004FBO";
        break;
    case "cartier-s02.yooxbox.com-GB-en":
        tC.internalvars.ric_salesforceID = "5731i000000Gqik";
        break;
    case "cartier-s02.yooxbox.com-CH-de":
        tC.internalvars.ric_salesforceID = "5731i000000Gqk7";
        break;
    case "cartier-s02.yooxbox.com-CH-fr":
        tC.internalvars.ric_salesforceID = "5731i000000GqkC";
        break;
    case "cartier-s02.yooxbox.com-CH-en":
        tC.internalvars.ric_salesforceID = "5731i000000Gqk2";
        break;
    case "cartier-s02.yooxbox.com-CH-it":
        tC.internalvars.ric_salesforceID = "5731i000000GqkH";
        break;
    case "cartier-s02.yooxbox.com-DE-de":
        tC.internalvars.ric_salesforceID = "5731i000000Gqjx";
        break;
    case "cartier-s02.yooxbox.com-ES-es":
        tC.internalvars.ric_salesforceID = "5731i000000Gqjs";
        break;
    case "cartier-s02.yooxbox.com-FR-fr":
        tC.internalvars.ric_salesforceID = "5731i000000Gqjn";
        break;
    case "cartier-s02.yooxbox.com-IT-it":
        tC.internalvars.ric_salesforceID = "5731i000000Gqji";
        break;
    case "cartier-s01.yooxbox.com-FR-fr":
        tC.internalvars.ric_salesforceID = "5731j0000008S1U";
        break;
    case "www.cartier.com-CH-de":
        tC.internalvars.ric_salesforceID = "5731i000000Gqk7";
        break;
    case "www.cartier.com-CH-en":
        tC.internalvars.ric_salesforceID = "5731i000000Gqk2";
        break;
    case "www.cartier.com-CH-fr":
        tC.internalvars.ric_salesforceID = "5731i000000GqkC";
        break;
    case "www.cartier.com-CH-it":
        tC.internalvars.ric_salesforceID = "5731i000000GqkH";
        break;
    case "www.cartier.com-DE-de":
        tC.internalvars.ric_salesforceID = "5731i000000Gqjx";
        break;
    case "www.cartier.com-ES-es":
        tC.internalvars.ric_salesforceID = "5731i000000Gqjs";
        break;
    case "www.cartier.com-FR-fr":
        tC.internalvars.ric_salesforceID = "5731i000000Gqjn";
        break;
    case "www.cartier.com-IT-it":
        tC.internalvars.ric_salesforceID = "5731i000000Gqji";
        break;
    case "cartier-s01.yooxbox.com-CH-fr":
        tC.internalvars.ric_salesforceID = "5731j0000008S1t";
        break;
    case "cartier-s01.yooxbox.com-CH-de":
        tC.internalvars.ric_salesforceID = "5731j0000008S1o";
        break;
    case "cartier-s01.yooxbox.com-CH-en":
        tC.internalvars.ric_salesforceID = "5731j0000008S1j";
        break;
    case "cartier-s01.yooxbox.com-CH-it":
        tC.internalvars.ric_salesforceID = "5731j0000008S1y";
        break;
    case "cartier-s01.yooxbox.com-DE-de":
        tC.internalvars.ric_salesforceID = "5731j0000008S1e";
        break;
    case "cartier-s01.yooxbox.com-IT-it":
        tC.internalvars.ric_salesforceID = "5731j0000008S1P";
        break;
    case "cartier-s01.yooxbox.com-ES-es":
        tC.internalvars.ric_salesforceID = "5731j0000008S1Z";
        break;
    case "cartier-s01.yooxbox.com-GB-en":
        tC.internalvars.ric_salesforceID = "5731i000000Gqik";
        break;
    default:
        tC.internalvars.ric_salesforceID = "";
        break;
    }
}
tC.internalvars_5181.initiators.var837();
tC.internalvars_5181_5.listVar.push(837);
tC.internalvars_5181.initiators.var839 = function() {
    tC.internalvars.ric_salesforceEnv = "";
    switch (tC.internalvars.tc_fulldomain) {
    case "cartier-s03.yooxbox.com":
        tC.internalvars.ric_salesforceEnv = "https://richemont--quality.my.salesforce.com";
        break;
    case "www.cartier.com":
        tC.internalvars.ric_salesforceEnv = "https://richemont.my.salesforce.com";
        break;
    case "cartier-s02.yooxbox.com":
        tC.internalvars.ric_salesforceEnv = "https://richemont--trainingtt.my.salesforce.com";
        break;
    case "cartier-s01.yooxbox.com":
        tC.internalvars.ric_salesforceEnv = "https://richemont--validation.my.salesforce.com";
        break;
    default:
        tC.internalvars.ric_salesforceEnv = "";
        break;
    }
}
tC.internalvars_5181.initiators.var839();
tC.internalvars_5181_5.listVar.push(839);
tC.internalvars_5181.initiators.var841 = function() {
    tC.internalvars.ric_salesforceEnv2 = "";
    switch (tC.internalvars.tc_fulldomain) {
    case "cartier-s03.yooxbox.com":
        tC.internalvars.ric_salesforceEnv2 = " https://quality-richemont.cs128.force.com";
        break;
    case "www.cartier.com":
        tC.internalvars.ric_salesforceEnv2 = "https://richemont.force.com";
        break;
    case "cartier-s02.yooxbox.com":
        tC.internalvars.ric_salesforceEnv2 = "https://trainingtt-richemont.cs162.force.com";
        break;
    case "cartier-s01.yooxbox.com":
        tC.internalvars.ric_salesforceEnv2 = "https://validation-richemont.cs162.force.com";
        break;
    default:
        tC.internalvars.ric_salesforceEnv2 = "";
        break;
    }
}
tC.internalvars_5181.initiators.var841();
tC.internalvars_5181_5.listVar.push(841);
tC.internalvars_5181.initiators.var843 = function() {
    tC.internalvars.ric_salesforceGslURL = "";
    switch (tC.internalvars.tc_fulldomain) {
    case "cartier-s03.yooxbox.com":
        tC.internalvars.ric_salesforceGslURL = "00D3N0000008lAQ";
        break;
    case "www.cartier.com":
        tC.internalvars.ric_salesforceGslURL = "00D1i000000gOLG";
        break;
    case "cartier-s02.yooxbox.com":
        tC.internalvars.ric_salesforceGslURL = "00D5t0000004fkj";
        break;
    default:
        tC.internalvars.ric_salesforceGslURL = "";
        break;
    }
}
tC.internalvars_5181.initiators.var843();
tC.internalvars_5181_5.listVar.push(843);
tC.internalvars_5181.initiators.var845 = function() {
    tC.internalvars.ric_SalesforceDepID = "";
    switch (tC.internalvars.tc_fulldomain) {
    case "cartier-s03.yooxbox.com":
        tC.internalvars.ric_SalesforceDepID = "5723N0000004DC2";
        break;
    case "www.cartier.com":
        tC.internalvars.ric_SalesforceDepID = "5721i000000GqQD";
        break;
    case "cartier-s02.yooxbox.com":
        tC.internalvars.ric_SalesforceDepID = "5721i000000GqQD";
        break;
    case "cartier-s01.yooxbox.com":
        tC.internalvars.ric_SalesforceDepID = "5721i000000GqQD";
        break;
    default:
        tC.internalvars.ric_SalesforceDepID = "";
        break;
    }
}
tC.internalvars_5181.initiators.var845();
tC.internalvars_5181_5.listVar.push(845);
tC.internalvars_5181.initiators.var847 = function() {
    tC.internalvars.ric_salesforceAGURL = "";
    switch (tC.internalvars.tc_fulldomain) {
    case "cartier-s03.yooxbox.com":
        tC.internalvars.ric_salesforceAGURL = "la2-c1cs-cdg";
        break;
    case "www.cartier.com":
        tC.internalvars.ric_salesforceAGURL = "la1-c2-cdg";
        break;
    case "cartier-s02.yooxbox.com":
        tC.internalvars.ric_salesforceAGURL = "la3-c1cs-cdg";
        break;
    case "cartier-s01.yooxbox.com":
        tC.internalvars.ric_salesforceAGURL = "la3-c1cs-cdg";
        break;
    default:
        tC.internalvars.ric_salesforceAGURL = "";
        break;
    }
}
tC.internalvars_5181.initiators.var847();
tC.internalvars_5181_5.listVar.push(847);
tC.internalvars_5181.initiators.var883 = function() {
    tC.internalvars.ric_salesforcelanguage = "";
    switch (tc_vars["nav_languageCode"]) {
    case "en":
        tC.internalvars.ric_salesforcelanguage = "en";
        break;
    case "de":
        tC.internalvars.ric_salesforcelanguage = "de";
        break;
    case "fr":
        tC.internalvars.ric_salesforcelanguage = "fr";
        break;
    case "it":
        tC.internalvars.ric_salesforcelanguage = "it";
        break;
    case "es":
        tC.internalvars.ric_salesforcelanguage = "es";
        break;
    default:
        tC.internalvars.ric_salesforcelanguage = "";
        break;
    }
}
tC.internalvars_5181.initiators.var883();
tC.internalvars_5181_5.listVar.push(883);
tC.internalvars_5181.initiators.var885 = function() {
    tC.internalvars.ric_sfdefaultmintext = "";
    switch (tc_vars["nav_languageCode"]) {
    case "en":
        tC.internalvars.ric_sfdefaultmintext = "Welcome to Cartier. How may we assist you?";
        break;
    case "de":
        tC.internalvars.ric_sfdefaultmintext = "Willkommen bei Cartier. Wie können wir Ihnen behilflich sein?";
        break;
    case "fr":
        tC.internalvars.ric_sfdefaultmintext = "Bienvenue chez Cartier. Comment pouvons-nous vous aider?";
        break;
    case "it":
        tC.internalvars.ric_sfdefaultmintext = "Le diamo il benvenuto su Cartier. Come possiamo aiutarla?";
        break;
    case "es":
        tC.internalvars.ric_sfdefaultmintext = "Le doy la bienvenida a Cartier, ¿Cómo puedo ayudarle?";
        break;
    default:
        tC.internalvars.ric_sfdefaultmintext = "";
        break;
    }
}
tC.internalvars_5181.initiators.var885();
tC.internalvars_5181_5.listVar.push(885);
tC.internalvars_5181.initiators.var887 = function() {
    tC.internalvars.ric_sfdismint = "";
    switch (tc_vars["nav_languageCode"]) {
    case "en":
        tC.internalvars.ric_sfdismint = "Contact Us";
        break;
    case "de":
        tC.internalvars.ric_sfdismint = "Kontaktieren Sie uns";
        break;
    case "fr":
        tC.internalvars.ric_sfdismint = "Nous Contacter";
        break;
    case "it":
        tC.internalvars.ric_sfdismint = "Ci contatti";
        break;
    case "es":
        tC.internalvars.ric_sfdismint = "Contáctenos";
        break;
    default:
        tC.internalvars.ric_sfdismint = "";
        break;
    }
}
tC.internalvars_5181.initiators.var887();
tC.internalvars_5181_5.listVar.push(887);
tC.internalvars_5181.initiators.var889 = function() {
    tC.internalvars.ric_sfCountryID = "";
    switch (tC.internalvars.ric_countrycode_and_languagecode) {
    case "GB-en":
        tC.internalvars.ric_sfCountryID = "United Kingdom";
        break;
    case "CH-de":
        tC.internalvars.ric_sfCountryID = "Switzerland German";
        break;
    case "CH-en":
        tC.internalvars.ric_sfCountryID = "Switzerland English";
        break;
    case "CH-fr":
        tC.internalvars.ric_sfCountryID = "Switzerland French";
        break;
    case "CH-it":
        tC.internalvars.ric_sfCountryID = "Switzerland Italian";
        break;
    case "DE-de":
        tC.internalvars.ric_sfCountryID = "German";
        break;
    case "ES-es":
        tC.internalvars.ric_sfCountryID = "Spain";
        break;
    case "FR-fr":
        tC.internalvars.ric_sfCountryID = "France";
        break;
    case "IT-it":
        tC.internalvars.ric_sfCountryID = "Italy";
        break;
    default:
        tC.internalvars.ric_sfCountryID = "";
        break;
    }
}
tC.internalvars_5181.initiators.var889();
tC.internalvars_5181_5.listVar.push(889);
tC.internalvars_5181.initiators.var891 = function() {
    tC.internalvars.ric_sfRICCRC_chat = "";
    switch (tC.internalvars.ric_countrycode_and_languagecode) {
    case "GB-en":
        tC.internalvars.ric_sfRICCRC_chat = "RICCRC_Chat_UK";
        break;
    case "CH-de":
        tC.internalvars.ric_sfRICCRC_chat = "RICCRC_Chat_CH_DE";
        break;
    case "CH-en":
        tC.internalvars.ric_sfRICCRC_chat = "RICCRC_Chat_CH_EN";
        break;
    case "CH-fr":
        tC.internalvars.ric_sfRICCRC_chat = "RICCRC_Chat_CH_FR";
        break;
    case "CH-it":
        tC.internalvars.ric_sfRICCRC_chat = "RICCRC_Chat_CH_IT";
        break;
    case "DE-de":
        tC.internalvars.ric_sfRICCRC_chat = "RICCRC_Chat_DE";
        break;
    case "ES-es":
        tC.internalvars.ric_sfRICCRC_chat = "RICCRC_Chat_ES";
        break;
    case "FR-fr":
        tC.internalvars.ric_sfRICCRC_chat = "RICCRC_Chat_FR";
        break;
    case "IT-it":
        tC.internalvars.ric_sfRICCRC_chat = "RICCRC_Chat_IT";
        break;
    default:
        tC.internalvars.ric_sfRICCRC_chat = "";
        break;
    }
}
tC.internalvars_5181.initiators.var891();
tC.internalvars_5181_5.listVar.push(891);
tC.internalvars_5181.initiators.var893 = function() {
    tC.internalvars.ric_sfLiveAgentDev = "";
    switch (tC.internalvars.ric_countrycode_and_languagecode) {
    case "GB-en":
        tC.internalvars.ric_sfLiveAgentDev = "EmbeddedServiceLiveAgent_Parent04I9E0000004CpnUAE_1766c1a5e41";
        break;
    case "CH-de":
        tC.internalvars.ric_sfLiveAgentDev = "RICCRC_Chat_CH_DE_EmbeddedServiceLiveAgent";
        break;
    case "CH-en":
        tC.internalvars.ric_sfLiveAgentDev = "RICCRC_Chat_CH_EN_EmbeddedServiceLiveAgent";
        break;
    case "CH-fr":
        tC.internalvars.ric_sfLiveAgentDev = "RICCRC_Chat_CH_FR_EmbeddedServiceLiveAgent";
        break;
    case "CH-it":
        tC.internalvars.ric_sfLiveAgentDev = "RICCRC_Chat_CH_IT_EmbeddedServiceLiveAgent";
        break;
    case "DE-de":
        tC.internalvars.ric_sfLiveAgentDev = "RICCRC_Chat_DE_EmbeddedServiceLiveAgent";
        break;
    case "ES-es":
        tC.internalvars.ric_sfLiveAgentDev = "RICCRC_Chat_ES_EmbeddedServiceLiveAgent";
        break;
    case "FR-fr":
        tC.internalvars.ric_sfLiveAgentDev = "RICCRC_Chat_FR_EmbeddedServiceLiveAgent";
        break;
    case "IT-it":
        tC.internalvars.ric_sfLiveAgentDev = "RICCRC_Chat_IT_EmbeddedServiceLiveAgent";
        break;
    default:
        tC.internalvars.ric_sfLiveAgentDev = "";
        break;
    }
}
tC.internalvars_5181.initiators.var893();
tC.internalvars_5181_5.listVar.push(893);
tC.internalvars_5181.initiators.var895 = function() {
    tC.internalvars.ric_sfTextLeave = "";
    switch (tc_vars["nav_languageCode"]) {
    case "en":
        tC.internalvars.ric_sfTextLeave = "Leave chat";
        break;
    case "de":
        tC.internalvars.ric_sfTextLeave = "Chat verlassen";
        break;
    case "fr":
        tC.internalvars.ric_sfTextLeave = "Quitter le chat";
        break;
    case "it":
        tC.internalvars.ric_sfTextLeave = "Lasci la chat";
        break;
    case "es":
        tC.internalvars.ric_sfTextLeave = "Abandone el chat";
        break;
    default:
        tC.internalvars.ric_sfTextLeave = "";
        break;
    }
}
tC.internalvars_5181.initiators.var895();
tC.internalvars_5181_5.listVar.push(895);
tC.internalvars_5181.initiators.var897 = function() {
    tC.internalvars.ric_sfTextStart = "";
    switch (tc_vars["nav_languageCode"]) {
    case "en":
        tC.internalvars.ric_sfTextStart = "Start a new chat";
        break;
    case "de":
        tC.internalvars.ric_sfTextStart = "Chat starten";
        break;
    case "fr":
        tC.internalvars.ric_sfTextStart = "Démarrer un nouveau chat";
        break;
    case "it":
        tC.internalvars.ric_sfTextStart = "Inizi una nuova chat";
        break;
    case "es":
        tC.internalvars.ric_sfTextStart = "Empiece una chat";
        break;
    default:
        tC.internalvars.ric_sfTextStart = "";
        break;
    }
}
tC.internalvars_5181.initiators.var897();
tC.internalvars_5181_5.listVar.push(897);
tC.internalvars_5181.initiators.var912 = function() {
    tC.internalvars.ric_sf_text_gotit = "";
    switch (tc_vars["nav_languageCode"]) {
    case "en":
        tC.internalvars.ric_sf_text_gotit = "got it";
        break;
    case "de":
        tC.internalvars.ric_sf_text_gotit = "Verstanden";
        break;
    case "fr":
        tC.internalvars.ric_sf_text_gotit = "Compris";
        break;
    case "it":
        tC.internalvars.ric_sf_text_gotit = "Ho capito";
        break;
    case "es":
        tC.internalvars.ric_sf_text_gotit = "Lo entiendo";
        break;
    default:
        tC.internalvars.ric_sf_text_gotit = "";
        break;
    }
}
tC.internalvars_5181.initiators.var912();
tC.internalvars_5181_5.listVar.push(912);
tC.internalvars_5181.initiators.var913 = function() {
    tC.internalvars.ric_sf_loading_text = "";
    switch (tc_vars["nav_languageCode"]) {
    case "fr":
        tC.internalvars.ric_sf_loading_text = "Chargement en cours";
        break;
    case "de":
        tC.internalvars.ric_sf_loading_text = "Einen Moment bitte";
        break;
    case "es":
        tC.internalvars.ric_sf_loading_text = "Cargando";
        break;
    case "it":
        tC.internalvars.ric_sf_loading_text = "Caricamento";
        break;
    case "en":
        tC.internalvars.ric_sf_loading_text = "Loading";
        break;
    default:
        tC.internalvars.ric_sf_loading_text = "";
        break;
    }
}
tC.internalvars_5181.initiators.var913();
tC.internalvars_5181_5.listVar.push(913);
tC.internalvars_5181.initiators.var924 = function() {
    tC.internalvars.ric_Partnerize_id = "";
    switch (tc_vars["nav_countryCode"]) {
    case "FR":
        tC.internalvars.ric_Partnerize_id = "10000l9426";
        break;
    case "CH":
        tC.internalvars.ric_Partnerize_id = "10000l9731";
        break;
    case "DE":
        tC.internalvars.ric_Partnerize_id = "10000l9439";
        break;
    case "ES":
        tC.internalvars.ric_Partnerize_id = "10000l9624";
        break;
    case "IT":
        tC.internalvars.ric_Partnerize_id = "10000l9699";
        break;
    case "MT":
        tC.internalvars.ric_Partnerize_id = "1011l5496";
        break;
    case "FI":
        tC.internalvars.ric_Partnerize_id = "1100l5418";
        break;
    case "NL":
        tC.internalvars.ric_Partnerize_id = "1101l5453";
        break;
    case "GB":
        tC.internalvars.ric_Partnerize_id = "1011l6006";
        break;
    default:
        tC.internalvars.ric_Partnerize_id = "";
        break;
    }
}
tC.internalvars_5181.initiators.var924();
tC.internalvars_5181_5.listVar.push(924);
tC.internalvars_5181.initiators.var957 = typeof tC.internalvars_5181.initiators.var957 == "function" ? tC.internalvars_5181.initiators.var957 : function() {
    tC.internalvars.tiktokId = tC.internalvars.tiktokId ? tC.internalvars.tiktokId : "";
}
tC.internalvars_5181.initiators.var957();
tC.internalvars_5181_5.listVar.push(957);
tC.internalvars_5181.initiators.var973 = typeof tC.internalvars_5181.initiators.var973 == "function" ? tC.internalvars_5181.initiators.var973 : function() {
    tC.internalvars.countryInPinterestScope = tC.internalvars.countryInPinterestScope ? tC.internalvars.countryInPinterestScope : "";
}
tC.internalvars_5181.initiators.var973();
tC.internalvars_5181_5.listVar.push(973);
tC.internalvars_5181.initiators.var975 = typeof tC.internalvars_5181.initiators.var975 == "function" ? tC.internalvars_5181.initiators.var975 : function() {
    tC.internalvars.facebookKeringCountryScope = tC.internalvars.facebookKeringCountryScope ? tC.internalvars.facebookKeringCountryScope : "";
}
tC.internalvars_5181.initiators.var975();
tC.internalvars_5181_5.listVar.push(975);
tC.internalvars_5181.initiators.var1032 = typeof tC.internalvars_5181.initiators.var1032 == "function" ? tC.internalvars_5181.initiators.var1032 : function() {
    tC.internalvars.DV360LandingPageFR = tC.internalvars.DV360LandingPageFR ? tC.internalvars.DV360LandingPageFR : "";
}
tC.internalvars_5181.initiators.var1032();
tC.internalvars_5181_5.listVar.push(1032);
tC.internalvars_5181.initiators.var1037 = typeof tC.internalvars_5181.initiators.var1037 == "function" ? tC.internalvars_5181.initiators.var1037 : function() {
    tC.internalvars.dv360_adv_id = tC.internalvars.dv360_adv_id ? tC.internalvars.dv360_adv_id : "";
}
tC.internalvars_5181.initiators.var1037();
tC.internalvars_5181_5.listVar.push(1037);
tC.internalvars_5181.initiators.var1038 = typeof tC.internalvars_5181.initiators.var1038 == "function" ? tC.internalvars_5181.initiators.var1038 : function() {
    tC.internalvars.dv360_countingMethod = tC.internalvars.dv360_countingMethod ? tC.internalvars.dv360_countingMethod : "";
}
tC.internalvars_5181.initiators.var1038();
tC.internalvars_5181_5.listVar.push(1038);
tC.internalvars_5181.initiators.var1039 = typeof tC.internalvars_5181.initiators.var1039 == "function" ? tC.internalvars_5181.initiators.var1039 : function() {
    tC.internalvars.dv360_activityTagString = tC.internalvars.dv360_activityTagString ? tC.internalvars.dv360_activityTagString : "";
}
tC.internalvars_5181.initiators.var1039();
tC.internalvars_5181_5.listVar.push(1039);
tC.internalvars_5181.initiators.var1044 = typeof tC.internalvars_5181.initiators.var1044 == "function" ? tC.internalvars_5181.initiators.var1044 : function() {
    tC.internalvars.tiktokKeringCountryScope = tC.internalvars.tiktokKeringCountryScope ? tC.internalvars.tiktokKeringCountryScope : "";
}
tC.internalvars_5181.initiators.var1044();
tC.internalvars_5181_5.listVar.push(1044);
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
tC.internalvars_5181_5.listVar.push(1047);
/*END_VARIABLES_BLOCK*/

/*DYNAMIC JS BLOCK 2*/

/*END DYNAMIC JS BLOCK 2*/

/*CUSTOM_JS_BLOCK2*/

/*END_CUSTOM_JS_BLOCK2*/
tC.container_5181_5.datastorage();
tC.inclusion_pixlee_events_1 = "if(\"object\"==typeof PixleeTrackingPixel&&PixleeTrackingPixel.pixleeAnalyticsIncluded)console.log(\"Pixlee Analytics already included in page\");else{PixleeTrackingPixel={pixleeAnalyticsIncluded:!0};var Pixlee_Analytics=function(e,n,t){function i(){this._listeners={}}function r(){var e=navigator.userAgent.toLowerCase();return-1!=e.indexOf(\"msie\")&&parseInt(e.split(\"msie\")[1])}function a(t){var n={excludes:{fonts:!0,fontsFlash:!0,webgl:!0,webglVendorAndRenderer:!0,plugins:!0,audio:!0}};setTimeout(function(){try{PixleeTrackingPixel.Fingerprint2.get(n,function(e){var n=e.map(function(e){return e.value});PixleeTrackingPixel.fingerprint=PixleeTrackingPixel.Fingerprint2.x64hash128(n.join(\"\"),31),PixleeTrackingPixel.trackUA=Math.abs(A(PixleeTrackingPixel.fingerprint))%100<10,t()})}catch(e){t()}},0)}function o(){x(\"pixlee_analytics_cookie\")?(m(I),m(_),m(L)):m(S,[v(I),v(_),v(L)])}var s=e,c=10,l=1e4,u=1e3,d=!1,f=0,g=0,h=n||30;window.pixleeDisableLegacyCookie=t||!1,\"undefined\"!=typeof Sentry&&\"undefined\"==typeof window.pixSentry&&(window.pixSentry=new Sentry.BrowserClient({dsn:\"https:\/\/f2c63857ff3d4d609f3011523e5933d5@sentry.io/12047\",ignoreErrors:[/{\\\"name\\\":\\\"Error executing guarded function\\\",\\\"message\\\":\\\"Unable to get property \\'origin\\' of undefined or null reference\\\"}/,/{\\\"name\\\":\\\"Error executing guarded function\\\",\\\"message\\\":\\\"i is undefined\\\"}/,/widget url is undefined or empty/,/onMessage is not a function/,/The operation is insecure/,/is not a function \\(evaluating/,/Unable to get property \\'appendChild\\' of undefined or null reference/,/currentAlbum is undefined/,/attempted to read protected variable/,/postMessage is not a function/,/Object doesn\\'t support this property or method/,/FastClick is not defined/,/variable: FastClick/,/\\$ is not defined/,/Cannot call method \\\"get\\\" of undefined/,/Cannot find function addEventListener in object/,/find variable: \\$/,/but instead had type object/,/property or method \\'postMessage\\'/,/\\'FastClick\\' is undefined/,/NS_ERROR_FAILURE:/,/\\'$\\' is undefined/,/Access is denied/,/\\'undefined\\' is not a function/,/\\'console\\' is undefined/,/function miss failed/,/Invalid calling object/,/Out of memory/,/undefined is not an object/,/Error: Unspecified error/,/global jQuery object was not available/,/The operation was aborted/,/Illegal invocation/,/The play() request was interrupted by a call to pause()/,/The request is not allowed by the user agent or the platform in the current context/,/Non-Error promise rejection captured with/,/find variable: disableLegacyCookie/],denyUrls:[/pdp\\.test/,/widget\\.test/,/codepen/]}));var p=function(e,n){\"undefined\"!=typeof console&&console.log(e),\"undefined\"!=typeof window.pixSentry&&(n=n||\"\",window.pixSentry.captureException(e,{tags:{source:\"Pixlee Events\"},extra:{objectBody:n}}))},m=function(e,n){try{e.apply(this,n)}catch(i){var t={functionName:e.name};p(i,t)}},v=function(r,a){return function(e){try{var n=[];a&&(n=n.concat(a)),e&&n.push(e),r.apply(this,n)}catch(i){var t=new Error(JSON.stringify({name:\"Error executing guarded function\",message:i.message}));p(t,r.name)}}},T=function(e,n,t){var i;if(t){var r=new Date;r.setTime(r.getTime()+24*t*60*60*1e3),i=\"; expires=\"+r.toGMTString()}else i=\"\";var a=\"=\"+n+i+\"; path=/; domain=\"+window.location.host.replace(\"www\",\"\");document.cookie=e+a+\"SameSite=None; Secure\",window.pixleeDisableLegacyCookie||(document.cookie=e+\"_legacy\"+a)},x=function(e){var n=document.cookie.split(\";\");return y(e,n)||y(e+\"_legacy\",n)},y=function(e,n){for(var t=0;t<n.length;t++){var i=n[t].substr(0,n[t].indexOf(\"=\")),r=n[t].substr(n[t].indexOf(\"=\")+1);if((i=i.replace(/^\\s+|\\s+$/g,\"\"))==e)try{return JSON.parse(decodeURIComponent(decodeURIComponent(r)))}catch(o){var a=new Error(JSON.stringify({name:\"Failed to fetch Pixlee cookie\",message:o.message}));return p(a),!1}}return!1},w=function(e,n,t){if(t){var i=t.origin||t.originalEvent.origin;if(!(-1===i.indexOf(\"pixlee.co\")&&-1===i.indexOf(\"pxlecdn.com\")||\"undefined\"==typeof t.data||\"function\"==typeof t.data.indexOf&&-1===t.data.indexOf(\"pixlee_distinct_user_hash\"))){\"function\"==typeof t.data.indexOf&&0===t.data.indexOf(\"[object \")&&\"undefined\"!=typeof window.pixSentry&&window.pixSentry.captureMessage(\"PixleeDUH was a serialised JavaScript object, instead of valid JSON.\",{level:\"warning\",fingerprint:[\"receivePixleeDUH\",\"serialised-JS\"],extra:{eventData:t.data}});try{var r=JSON.parse(t.data)}catch(o){new Error(JSON.stringify({name:\"Error Parsing Event data\",message:o.message}));return}if(\"pixlee_distinct_user_hash\"===r[\"function\"]){var a=r.value;!1===x(\"pixlee_analytics_cookie\")&&m(T,[\"pixlee_analytics_cookie\",encodeURIComponent(JSON.stringify({CURRENT_PIXLEE_USER_ID:a})),h]),e&&m(e),n&&m(n)}}}},S=function(e,n){var t=document.createElement(\"iframe\");t.style.display=\"none\",t.src=\"https:\/\/photos.pixlee.com/getDUH\",document.body.appendChild(t),window.addEventListener(\"message\",v(w,[e,n]),!1)};i.prototype={constructor:i,on:function(e,n){\"undefined\"==typeof this._listeners[e]&&(this._listeners[e]=[]),this._listeners[e].push(n)},trigger:function(e,n){if(\"string\"==typeof e){if((e={type:e}).target||(e.target=this),!e.type)throw new Error(\"Event object missing 'type' property.\");if(this._listeners[e.type]instanceof Array)for(var t=this._listeners[e.type],i=0,r=t.length;i<r;i++)t[i].call(this,n)}},off:function(e,n){if(this._listeners[e]instanceof Array)for(var t=this._listeners[e],i=0,r=t.length;i<r;i++)if(t[i]===n){t.splice(i,1);break}}},this.events=new i;var E=function(e){return 0==e||\"\"==e||null==e||\"undefined\"==e||e==undefined||e==NaN||\"null\"==e||\"false\"==e||0==e||\"0\"==e},A=function(e){var n=0;if(0==e.length)return n;for(var t=0;t<e.length;t++)char=e.charCodeAt(t),n=(n<<5)-n+char,n&=n;return n};this.post=function(e,n){if(8==r()||9==r())return!1;if(!s)return!1;var t,i=x(\"pixlee_analytics_cookie\");n||(n={}),PixleeTrackingPixel.fingerprint&&(n.fingerprint=PixleeTrackingPixel.fingerprint),!n.uid&&i&&i.CURRENT_PIXLEE_USER_ID&&(n.uid=i.CURRENT_PIXLEE_USER_ID),n.parentURL=document.location.href,n.pixleeEventsVersion=\"2.0.0\",s&&(n.API_KEY=s),E(n.API_KEY)||E(n.uid)&&E(n.fingerprint)||((t=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject(\"Microsoft.XMLHTTP\")).open(\"POST\",e,!0),t.setRequestHeader(\"Content-type\",\"application/json\"),t.send(JSON.stringify(n)))};var C=this,P={host:\"https:\/\/inbound-analytics.pixlee.com\",\"converted-photo\":function(){return this.host+\"/events/conversion\"},\"link:id\":function(){return this.host+\"/events/linkID\"},\"add:to:cart\":function(){return this.host+\"/events/addToCart\"},\"remove:from:cart\":function(){return this.host+\"/events/removeFromCart\"},\"checkout:start\":function(){return this.host+\"/events/checkoutStart\"},\"opened:widget\":function(){return this.host+\"/events/openedWidget\"},\"widget:visible\":function(){return this.host+\"/events/widgetVisible\"},\"opened:lightbox\":function(){return this.host+\"/events/openedLightbox\"},\"action:clicked\":function(){return this.host+\"/events/actionClicked\"},\"load:more\":function(){return this.host+\"/events/loadMore\"},\"nav:left\":function(){return this.host+\"/events/navLeft\"},\"nav:right\":function(){return this.host+\"/events/navRight\"},\"user:active\":function(){return this.host+\"/events/userActive\"},\"shopify:cart\":function(){return this.host+\"/events/shopifyCart\"},\"tag:by:email\":function(){return this.host+\"/events/tagByEmail\"},\"record:duh\":function(){return this.host+\"/events/recordDUH\"},\"link:tracking:click:received\":function(){return this.host+\"/events/linkTrackingClick\"}};this.events.on(\"add:to:cart\",function(e){m(C.post,[P[\"add:to:cart\"](),e])}),this.events.on(\"link:id\",function(e){m(C.post,[P[\"link:id\"](),e])}),this.events.on(\"remove:from:cart\",function(e){m(C.post,[P[\"remove:from:cart\"](),e])}),this.events.on(\"checkout:start\",function(e){m(C.post,[P[\"checkout:start\"](),e])}),this.events.on(\"converted:photo\",function(e){m(C.post,[P[\"converted-photo\"](),e])}),this.events.on(\"opened:widget\",function(e){m(C.post,[P[\"opened:widget\"](),e])}),this.events.on(\"widget:visible\",function(e){m(C.post,[P[\"widget:visible\"](),e])}),this.events.on(\"opened:lightbox\",function(e){m(C.post,[P[\"opened:lightbox\"](),e])}),this.events.on(\"action:clicked\",function(e){m(C.post,[P[\"action:clicked\"](),e])}),this.events.on(\"load:more\",function(e){m(C.post,[P[\"load:more\"](),e])}),this.events.on(\"nav:left\",function(e){m(C.post,[P[\"nav:left\"](),e])}),this.events.on(\"nav:right\",function(e){m(C.post,[P[\"nav:right\"](),e])}),this.events.on(\"user:active\",function(e){m(C.post,[P[\"user:active\"](),e])}),this.events.on(\"shopify:cart\",function(e){m(C.post,[P[\"shopify:cart\"](),e])}),this.events.on(\"tag:by:email\",function(e){m(C.post,[P[\"tag:by:email\"](),e])}),this.events.on(\"record:duh\",function(e){m(C.post,[P[\"record:duh\"](),e])}),this.events.on(\"link:tracking:click:received\",function(e){m(C.post,[P[\"link:tracking:click:received\"](),e])});var k=function(e){var n=[\"img\",\"span\",\"button\",\"a\"],t=[];t.push(e.target.parentElement),t.concat(e.target.childNodes);for(var i=0;i<t.length;i++){try{var r=\"\";E(t[i])||(r=t[i].tagName)}catch(o){new Error(JSON.stringify({name:\"Failed to find non-bounce interaction element\",message:o.message}));continue}if(!E(r)&&-1!==n.indexOf(r.toLowerCase())){var a=x(\"pixlee_analytics_cookie\");a.BOUNCED=!1,m(T,[\"pixlee_analytics_cookie\",encodeURIComponent(JSON.stringify(a)),h]),window.removeEventListener(\"click\",PixleeTrackingPixel.captureNonBounceRef);break}}},b=function(){if(PixleeTrackingPixel.ifvisible.now()){var e=x(\"pixlee_analytics_cookie\");e.TIME_SPENT=parseInt(PixleeTrackingPixel.TimeMe.getTimeOnCurrentPageInSeconds()),m(T,[\"pixlee_analytics_cookie\",encodeURIComponent(JSON.stringify(e)),h])}},B=function(){if(PixleeTrackingPixel.ifvisible.now()){var e=Date.now()/1e3-g;if(PixleeTrackingPixel.trackUA&&(0===f||10<=e/Math.pow(f,2))){var n=x(\"pixlee_analytics_cookie\");if(E(n.TIME_SPENT))return;var t={timeSpent:n.TIME_SPENT,bounced:n.BOUNCED};this.events.trigger(\"user:active\",t),f+=1,PixleeTrackingPixel.TimeMe.resetAllRecordedPageTimes(),PixleeTrackingPixel.TimeMe.startTimer(),n.TIME_SPENT=0,m(T,[\"pixlee_analytics_cookie\",encodeURIComponent(JSON.stringify(n)),h])}}},O=function(){if(!d){d=!0;var e=this;g=Date.now()/1e3,PixleeTrackingPixel.TimeMe.setIdleDurationInSeconds(c),PixleeTrackingPixel.TimeMe.initialize(),B.call(e),PixleeTrackingPixel.captureNonBounceRef=v(k.bind(e)),window.addEventListener(\"click\",PixleeTrackingPixel.captureNonBounceRef),window.setInterval(b.bind(e),u),PixleeTrackingPixel.ifvisible.on(\"wakeup\",B.bind(e)),window.setInterval(B.bind(e),l)}},M=function(e){if(\"\"!==e&&null!==e&&e!==undefined){e=e.replace(/[[]/,\"\\\\[\").replace(/[\\]]/,\"\\\\]\");var n=new RegExp(\"[\\\\?&]\"+e+\"=([^&#]*)\").exec(location.search);return null===n?\"\":decodeURIComponent(n[1].replace(/\\+/g,\" \"))}var t=location.href.split(\"/\");return t[t.length-1]},I=function(){E(PixleeTrackingPixel.ifvisible)||E(PixleeTrackingPixel.TimeMe)?console.log(\"Missing ifvisible / timeme libraries\"):PixleeTrackingPixel.ifvisible.now(\"active\")?O.call(this):PixleeTrackingPixel.ifvisible.on(\"wakeup\",O.bind(this))}.bind(this),_=function(){if(-1!==window.location.href.indexOf(\"pixlee_source=email\")){if(window.Pixlee&&window.Pixlee.taggedByEmail||PixleeTrackingPixel&&PixleeTrackingPixel.taggedByEmail)return;this.events.trigger(\"tag:by:email\",{}),PixleeTrackingPixel.taggedByEmail=!0}}.bind(this),L=function(){if(-1!==window.location.href.indexOf(\"pixlee_campaign_influencer_link_id=\")){if(window.Pixlee&&window.Pixlee.linkTrackingClick||PixleeTrackingPixel&&PixleeTrackingPixel.linkTrackingClick)return;this.events.trigger(\"link:tracking:click:received\",{pixlee_influencer_id:M(\"pixlee_influencer_id\"),pixlee_campaign_id:M(\"pixlee_campaign_id\"),pixlee_campaign_influencer_id:M(\"pixlee_campaign_influencer_id\"),pixlee_campaign_influencer_link_id:M(\"pixlee_campaign_influencer_link_id\")}),PixleeTrackingPixel.linkTrackingClick=!0}}.bind(this);PixleeTrackingPixel.pixleeAnalyticsInvoked?console.log(\"Pixlee Analytics already invoked\"):(PixleeTrackingPixel.pixleeAnalyticsInvoked=!0,\"complete\"===document.readyState?a(o):window.addEventListener(\"load\",function(){a(o)}))}}(function(){var e;e=function(){var t,i,a,n,r,o,s,c,l,u,d,f,g,h,p,m;return c={},a=document,u=!1,d=\"active\",r=!(o=6e4),function(){return(65536*(1+Math.random())|0).toString(16).substring(1)},p={},h=\"__ceGUID\",m=!(i={add:function(e,n,t){return e[h]=undefined,e[h]||(e[h]=\"ifvisible.object.event.identifier\"),p[e[h]]||(p[e[h]]={}),p[e[h]][n]||(p[e[h]][n]=[]),p[e[h]][n].push(t)},remove:function(e,n,t){var i,r,a,o,s;if(t){if(e[h]&&p[e[h]]&&p[e[h]][n])for(r=a=0,o=(s=p[e[h]][n]).length;a<o;r=++a)if((i=s[r])===t)return p[e[h]][n].splice(r,1),i}else if(e[h]&&p[e[h]]&&p[e[h]][n])return delete p[e[h]][n]},fire:function(e,n,t){var i,r,a,o,s;if(e[h]&&p[e[h]]&&p[e[h]][n]){for(s=[],r=0,a=(o=p[e[h]][n]).length;r<a;r++)i=o[r],s.push(i(t||{}));return s}}}),t=function(e,n,t){return m||(m=e.addEventListener?function(e,n,t){return e.addEventListener(n,t,!1)}:e.attachEvent?function(e,n,t){return e.attachEvent(\"on\"+n,t,!1)}:function(e,n,t){return e[\"on\"+n]=t}),m(e,n,t)},function(e,n){var t;return a.createEventObject?e.fireEvent(\"on\"+n,t):((t=a.createEvent(\"HTMLEvents\")).initEvent(n,!0,!0),!e.dispatchEvent(t))},s=function(){var e,n,t,i,r;for(i=void 0,r=3,t=a.createElement(\"div\"),e=t.getElementsByTagName(\"i\"),n=function(){return t.innerHTML=\"<!--[if gt IE \"+ ++r+\"]><i></i><![endif]\",e[0]};n(););return 4<r?r:i}(),n=!1,g=void 0,\"undefined\"!=typeof a.hidden?(n=\"hidden\",g=\"visibilitychange\"):\"undefined\"!=typeof a.mozHidden?(n=\"mozHidden\",g=\"mozvisibilitychange\"):\"undefined\"!=typeof a.msHidden?(n=\"msHidden\",g=\"msvisibilitychange\"):\"undefined\"!=typeof a.webkitHidden&&(n=\"webkitHidden\",g=\"webkitvisibilitychange\"),f=function(){var e,n;return e=[],(n=function(){return e.map(clearTimeout),\"active\"!==d&&c.wakeup(),r=+new Date,e.push(setTimeout(function(){if(\"active\"===d)return c.idle()},o))})(),t(a,\"mousemove\",n),t(a,\"keyup\",n),t(a,\"touchstart\",n),t(window,\"scroll\",n),c.focus(n),c.wakeup(n)},initVisibility=function(){return a[n]?c.blur():c.focus()},l=function(){var e;return!!u||(!1===n?(e=\"blur\",s<9&&(e=\"focusout\"),t(window,e,function(){return c.blur()}),t(window,\"focus\",function(){return c.focus()})):t(a,g,initVisibility,!1),u=!0,f(),initVisibility())},c={setIdleDuration:function(e){return o=1e3*e},getIdleDuration:function(){return o},getIdleInfo:function(){var e,n;return e=+new Date,n={},\"idle\"===d?(n.isIdle=!0,n.idleFor=e-r,n.timeLeft=0,n.timeLeftPer=100):(n.isIdle=!1,n.idleFor=e-r,n.timeLeft=r+o-e,n.timeLeftPer=(100-100*n.timeLeft/o).toFixed(2)),n},focus:function(e){return\"function\"==typeof e?this.on(\"focus\",e):(d=\"active\",i.fire(this,\"focus\"),i.fire(this,\"wakeup\"),i.fire(this,\"statusChanged\",{status:d})),this},blur:function(e){return\"function\"==typeof e?this.on(\"blur\",e):(d=\"hidden\",i.fire(this,\"blur\"),i.fire(this,\"idle\"),i.fire(this,\"statusChanged\",{status:d})),this},idle:function(e){return\"function\"==typeof e?this.on(\"idle\",e):(d=\"idle\",i.fire(this,\"idle\"),i.fire(this,\"statusChanged\",{status:d})),this},wakeup:function(e){return\"function\"==typeof e?this.on(\"wakeup\",e):(d=\"active\",i.fire(this,\"wakeup\"),i.fire(this,\"statusChanged\",{status:d})),this},on:function(e,n){return l(),i.add(this,e,n),this},off:function(e,n){return l(),i.remove(this,e,n),this},onEvery:function(e,n){var t,i;return l(),t=!1,n&&(i=setInterval(function(){if(\"active\"===d&&!1===t)return n()},1e3*e)),{stop:function(){return clearInterval(i)},pause:function(){return t=!0},resume:function(){return t=!1},code:i,callback:n}},now:function(e){return l(),d===(e||\"active\")}}},this.ifvisible=e()}).call(PixleeTrackingPixel),function(){var e,n;n=function(e){var o={startStopTimes:{},idleTimeout:60,currentPageName:\"default-page-name\",getIfVisibleHandle:function(){if(\"object\"==typeof e)return e;throw\"undefined\"!=typeof console&&console.log(\"Required dependency (ifvisible.js) not found.  Make sure it has been included.\"),{name:\"MissingDependencyException\",message:\"Required dependency (ifvisible.js) not found.  Make sure it has been included.\"}},startTimer:function(){var e=o.currentPageName;if(o.startStopTimes[e]===undefined)o.startStopTimes[e]=[];else{var n=o.startStopTimes[e],t=n[n.length-1];if(t!==undefined&&t.stopTime===undefined)return}o.startStopTimes[e].push({startTime:new Date,stopTime:undefined})},stopTimer:function(){var e=o.currentPageName,n=o.startStopTimes[e];n!==undefined&&0!==n.length&&n[n.length-1].stopTime===undefined&&(n[n.length-1].stopTime=new Date)},getTimeOnCurrentPageInSeconds:function(){return o.getTimeOnPageInSeconds(o.currentPageName)},getTimeOnPageInSeconds:function(e){var n=o.startStopTimes[e];if(n!==undefined){for(var t=0,i=0;i<n.length;i++){var r=n[i].startTime,a=n[i].stopTime;a===undefined&&(a=new Date),t+=(a-r)/1e3}return Number(t)}},getTimeOnAllPagesInSeconds:function(){for(var e=[],n=Object.keys(o.startStopTimes),t=0;t<n.length;t++){var i=n[t],r=o.getTimeOnPageInSeconds(i);e.push({pageName:i,timeOnPage:r})}return e},setIdleDurationInSeconds:function(e){var n=parseFloat(e);if(!1!==isNaN(n))throw{name:\"InvalidDurationException\",message:\"An invalid duration time (\"+e+\") was provided.\"};o.getIfVisibleHandle().setIdleDuration(n),o.idleTimeout=n},setCurrentPageName:function(e){o.currentPageName=e},resetRecordedPageTime:function(e){delete o.startStopTimes[e]},resetAllRecordedPageTimes:function(){for(var e=Object.keys(o.startStopTimes),n=0;n<e.length;n++)o.resetRecordedPageTime(e[n])},listenForVisibilityEvents:function(){o.getIfVisibleHandle().on(\"blur\",function(){o.stopTimer()}),o.getIfVisibleHandle().on(\"focus\",function(){o.startTimer()}),o.getIfVisibleHandle().on(\"idle\",function(){0<o.idleTimeout&&o.stopTimer()}),o.getIfVisibleHandle().on(\"wakeup\",function(){0<o.idleTimeout&&o.startTimer()})},initialize:function(){o.listenForVisibilityEvents(),o.startTimer()}};return o},(e=this).TimeMe!==undefined||(e.TimeMe=n(e.ifvisible))}.call(PixleeTrackingPixel),function(e,n,t){\"use strict\";PixleeTrackingPixel[\"Fingerprint2\"]=t()}(0,0,function(){\"use strict\";\"undefined\"==typeof Array.isArray&&(Array.isArray=function(e){return\"[object Array]\"===Object.prototype.toString.call(e)});var d=function(e,n){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],n=[n[0]>>>16,65535&n[0],n[1]>>>16,65535&n[1]];var t=[0,0,0,0];return t[3]+=e[3]+n[3],t[2]+=t[3]>>>16,t[3]&=65535,t[2]+=e[2]+n[2],t[1]+=t[2]>>>16,t[2]&=65535,t[1]+=e[1]+n[1],t[0]+=t[1]>>>16,t[1]&=65535,t[0]+=e[0]+n[0],t[0]&=65535,[t[0]<<16|t[1],t[2]<<16|t[3]]},f=function(e,n){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],n=[n[0]>>>16,65535&n[0],n[1]>>>16,65535&n[1]];var t=[0,0,0,0];return t[3]+=e[3]*n[3],t[2]+=t[3]>>>16,t[3]&=65535,t[2]+=e[2]*n[3],t[1]+=t[2]>>>16,t[2]&=65535,t[2]+=e[3]*n[2],t[1]+=t[2]>>>16,t[2]&=65535,t[1]+=e[1]*n[3],t[0]+=t[1]>>>16,t[1]&=65535,t[1]+=e[2]*n[2],t[0]+=t[1]>>>16,t[1]&=65535,t[1]+=e[3]*n[1],t[0]+=t[1]>>>16,t[1]&=65535,t[0]+=e[0]*n[3]+e[1]*n[2]+e[2]*n[1]+e[3]*n[0],t[0]&=65535,[t[0]<<16|t[1],t[2]<<16|t[3]]},g=function(e,n){return 32===(n%=64)?[e[1],e[0]]:n<32?[e[0]<<n|e[1]>>>32-n,e[1]<<n|e[0]>>>32-n]:(n-=32,[e[1]<<n|e[0]>>>32-n,e[0]<<n|e[1]>>>32-n])},h=function(e,n){return 0===(n%=64)?e:n<32?[e[0]<<n|e[1]>>>32-n,e[1]<<n]:[e[1]<<n-32,0]},p=function(e,n){return[e[0]^n[0],e[1]^n[1]]},m=function(e){return e=p(e,[0,e[0]>>>1]),e=f(e,[4283543511,3981806797]),e=p(e,[0,e[0]>>>1]),e=f(e,[3301882366,444984403]),e=p(e,[0,e[0]>>>1])},s=function(e,n){n=n||0;for(var t=(e=e||\"\").length%16,i=e.length-t,r=[0,n],a=[0,n],o=[0,0],s=[0,0],c=[2277735313,289559509],l=[1291169091,658871167],u=0;u<i;u+=16)o=[255&e.charCodeAt(u+4)|(255&e.charCodeAt(u+5))<<8|(255&e.charCodeAt(u+6))<<16|(255&e.charCodeAt(u+7))<<24,255&e.charCodeAt(u)|(255&e.charCodeAt(u+1))<<8|(255&e.charCodeAt(u+2))<<16|(255&e.charCodeAt(u+3))<<24],s=[255&e.charCodeAt(u+12)|(255&e.charCodeAt(u+13))<<8|(255&e.charCodeAt(u+14))<<16|(255&e.charCodeAt(u+15))<<24,255&e.charCodeAt(u+8)|(255&e.charCodeAt(u+9))<<8|(255&e.charCodeAt(u+10))<<16|(255&e.charCodeAt(u+11))<<24],o=f(o,c),o=g(o,31),o=f(o,l),r=p(r,o),r=g(r,27),r=d(r,a),r=d(f(r,[0,5]),[0,1390208809]),s=f(s,l),s=g(s,33),s=f(s,c),a=p(a,s),a=g(a,31),a=d(a,r),a=d(f(a,[0,5]),[0,944331445]);switch(o=[0,0],s=[0,0],t){case 15:s=p(s,h([0,e.charCodeAt(u+14)],48));case 14:s=p(s,h([0,e.charCodeAt(u+13)],40));case 13:s=p(s,h([0,e.charCodeAt(u+12)],32));case 12:s=p(s,h([0,e.charCodeAt(u+11)],24));case 11:s=p(s,h([0,e.charCodeAt(u+10)],16));case 10:s=p(s,h([0,e.charCodeAt(u+9)],8));case 9:s=p(s,[0,e.charCodeAt(u+8)]),s=f(s,l),s=g(s,33),s=f(s,c),a=p(a,s);case 8:o=p(o,h([0,e.charCodeAt(u+7)],56));case 7:o=p(o,h([0,e.charCodeAt(u+6)],48));case 6:o=p(o,h([0,e.charCodeAt(u+5)],40));case 5:o=p(o,h([0,e.charCodeAt(u+4)],32));case 4:o=p(o,h([0,e.charCodeAt(u+3)],24));case 3:o=p(o,h([0,e.charCodeAt(u+2)],16));case 2:o=p(o,h([0,e.charCodeAt(u+1)],8));case 1:o=p(o,[0,e.charCodeAt(u)]),o=f(o,c),o=g(o,31),o=f(o,l),r=p(r,o)}return r=p(r,[0,e.length]),a=p(a,[0,e.length]),r=d(r,a),a=d(a,r),r=m(r),a=m(a),r=d(r,a),a=d(a,r),(\"00000000\"+(r[0]>>>0).toString(16)).slice(-8)+(\"00000000\"+(r[1]>>>0).toString(16)).slice(-8)+(\"00000000\"+(a[0]>>>0).toString(16)).slice(-8)+(\"00000000\"+(a[1]>>>0).toString(16)).slice(-8)},e={preprocessor:null,audio:{timeout:1e3,excludeIOS11:!0},fonts:{swfContainerId:\"fingerprintjs2\",swfPath:\"flash/compiled/FontList.swf\",userDefinedFonts:[],extendedJsFonts:!1},screen:{detectScreenOrientation:!0},plugins:{sortPluginsFor:[/palemoon/i],excludeIE:!1},extraComponents:[],excludes:{enumerateDevices:!0,pixelRatio:!0,doNotTrack:!0,fontsFlash:!0,adBlock:!0},NOT_AVAILABLE:\"not available\",ERROR:\"error\",EXCLUDED:\"excluded\"},v=function(e,n){if(Array.prototype.forEach&&e.forEach===Array.prototype.forEach)e.forEach(n);else if(e.length===+e.length)for(var t=0,i=e.length;t<i;t++)n(e[t],t,e);else for(var r in e)e.hasOwnProperty(r)&&n(e[r],r,e)},c=function(e,i){var r=[];return null==e?r:Array.prototype.map&&e.map===Array.prototype.map?e.map(i):(v(e,function(e,n,t){r.push(i(e,n,t))}),r)},n=function(e,n){if(null==n)return e;var t,i;for(i in n)null==(t=n[i])||Object.prototype.hasOwnProperty.call(e,i)||(e[i]=t);return e},t=function(n,e){if(!i())return n(e.NOT_AVAILABLE);navigator.mediaDevices.enumerateDevices().then(function(e){n(e.map(function(e){return\"id=\"+e.deviceId+\";gid=\"+e.groupId+\";\"+e.kind+\";\"+e.label}))})[\"catch\"](function(e){n(e)})},i=function(){return navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices},r=function(e,n){e(a(n))},a=function(e){var n=[window.screen.width,window.screen.height];return e.screen.detectScreenOrientation&&n.sort().reverse(),n},o=function(e,n){e(l(n))},l=function(e){if(window.screen.availWidth&&window.screen.availHeight){var n=[window.screen.availHeight,window.screen.availWidth];return e.screen.detectScreenOrientation&&n.sort().reverse(),n}return e.NOT_AVAILABLE},u=function(e,n){e(U(n))},T=function(e,n){e(F(n))},x=function(e,n){e(G(n))},y=function(e,n){e(V(n))},w=function(e,n){e(j(n))},S=function(e,n){e(X(n))},E=function(e,n){ee()?e(K(n)):e(n.NOT_AVAILABLE)},A=function(e,n){ne()?e(z()):e(n.NOT_AVAILABLE)},C=function(e){ne()?e(J()):e()},P=function(e){e(Z())},k=function(e){e(q())},b=function(e){e(Y())},B=function(e){e(Q())},O=function(e){e($())},M=function(n,e){return re()?ae()?e.fonts.swfPath?void se(function(e){n(e)},e):n(\"missing options.fonts.swfPath\"):n(\"flash not installed\"):n(\"swf object not loaded\")},I=function(e,n){te()?n.plugins.excludeIE?e(n.EXCLUDED):e(L(n)):e(_(n))},_=function(e){if(null==navigator.plugins)return e.NOT_AVAILABLE;for(var n=[],t=0,i=navigator.plugins.length;t<i;t++)navigator.plugins[t]&&n.push(navigator.plugins[t]);return R(e)&&(n=n.sort(function(e,n){return e.name>n.name?1:e.name<n.name?-1:0})),c(n,function(e){var n=c(e,function(e){return[e.type,e.suffixes]});return[e.name,e.description,n]})},L=function(t){var e=[];Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(window,\"ActiveXObject\")||\"ActiveXObject\"in window?e=c([\"AcroPDF.PDF\",\"Adodb.Stream\",\"AgControl.AgControl\",\"DevalVRXCtrl.DevalVRXCtrl.1\",\"MacromediaFlashPaper.MacromediaFlashPaper\",\"Msxml2.DOMDocument\",\"Msxml2.XMLHTTP\",\"PDF.PdfCtrl\",\"QuickTime.QuickTime\",\"QuickTimeCheckObject.QuickTimeCheck.1\",\"RealPlayer\",\"RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)\",\"RealVideo.RealVideo(tm) ActiveX Control (32-bit)\",\"Scripting.Dictionary\",\"SWCtl.SWCtl\",\"Shell.UIHelper\",\"ShockwaveFlash.ShockwaveFlash\",\"Skype.Detection\",\"TDCCtl.TDCCtl\",\"WMPlayer.OCX\",\"rmocx.RealPlayer G2 Control\",\"rmocx.RealPlayer G2 Control.1\"],function(e){try{return new window.ActiveXObject(e),e}catch(n){return t.ERROR}}):e.push(t.NOT_AVAILABLE);return navigator.plugins&&(e=e.concat(_(t))),e},R=function(e){for(var n=!1,t=0,i=e.plugins.sortPluginsFor.length;t<i;t++){var r=e.plugins.sortPluginsFor[t];if(navigator.userAgent.match(r)){n=!0;break}}return n},D=function(e){e(W())},N=function(e,n){e(H(n))},U=function(e){try{return!!window.sessionStorage}catch(n){return e.ERROR}},F=function(e){try{return!!window.localStorage}catch(n){return e.ERROR}},G=function(e){if(ie())return e.EXCLUDED;try{return!!window.indexedDB}catch(n){return e.ERROR}},H=function(e){return navigator.hardwareConcurrency?navigator.hardwareConcurrency:e.NOT_AVAILABLE},V=function(e){return navigator.cpuClass||e.NOT_AVAILABLE},j=function(e){return navigator.platform?navigator.platform:e.NOT_AVAILABLE},X=function(e){return navigator.doNotTrack?navigator.doNotTrack:navigator.msDoNotTrack?navigator.msDoNotTrack:window.doNotTrack?window.doNotTrack:e.NOT_AVAILABLE},W=function(){var e,n=0;\"undefined\"!=typeof navigator.maxTouchPoints?n=navigator.maxTouchPoints:\"undefined\"!=typeof navigator.msMaxTouchPoints&&(n=navigator.msMaxTouchPoints);try{document.createEvent(\"TouchEvent\"),e=!0}catch(t){e=!1}return[n,e,\"ontouchstart\"in window]},K=function(e){var n=[],t=document.createElement(\"canvas\");t.width=2e3,t.height=200,t.style.display=\"inline\";var i=t.getContext(\"2d\");return i.rect(0,0,10,10),i.rect(2,2,6,6),n.push(\"canvas winding:\"+(!1===i.isPointInPath(5,5,\"evenodd\")?\"yes\":\"no\")),i.textBaseline=\"alphabetic\",i.fillStyle=\"#f60\",i.fillRect(125,1,62,20),i.fillStyle=\"#069\",e.dontUseFakeFontInCanvas?i.font=\"11pt Arial\":i.font=\"11pt no-real-font-123\",i.fillText(\"Cwm fjordbank glyphs vext quiz, \\ud83d\\ude03\",2,15),i.fillStyle=\"rgba(102, 204, 0, 0.2)\",i.font=\"18pt Arial\",i.fillText(\"Cwm fjordbank glyphs vext quiz, \\ud83d\\ude03\",4,45),i.globalCompositeOperation=\"multiply\",i.fillStyle=\"rgb(255,0,255)\",i.beginPath(),i.arc(50,50,50,0,2*Math.PI,!0),i.closePath(),i.fill(),i.fillStyle=\"rgb(0,255,255)\",i.beginPath(),i.arc(100,50,50,0,2*Math.PI,!0),i.closePath(),i.fill(),i.fillStyle=\"rgb(255,255,0)\",i.beginPath(),i.arc(75,100,50,0,2*Math.PI,!0),i.closePath(),i.fill(),i.fillStyle=\"rgb(255,0,255)\",i.arc(75,75,75,0,2*Math.PI,!0),i.arc(75,75,25,0,2*Math.PI,!0),i.fill(\"evenodd\"),t.toDataURL&&n.push(\"canvas fp:\"+t.toDataURL()),n},z=function(){var o,e=function(e){return o.clearColor(0,0,0,1),o.enable(o.DEPTH_TEST),o.depthFunc(o.LEQUAL),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT),\"[\"+e[0]+\", \"+e[1]+\"]\"},n=function(e){var n=e.getExtension(\"EXT_texture_filter_anisotropic\")||e.getExtension(\"WEBKIT_EXT_texture_filter_anisotropic\")||e.getExtension(\"MOZ_EXT_texture_filter_anisotropic\");if(n){var t=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);return 0===t&&(t=2),t}return null};if(!(o=ce()))return null;var s=[],t=\"attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}\",i=\"precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}\",r=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,r);var a=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);o.bufferData(o.ARRAY_BUFFER,a,o.STATIC_DRAW),r.itemSize=3,r.numItems=3;var c=o.createProgram(),l=o.createShader(o.VERTEX_SHADER);o.shaderSource(l,t),o.compileShader(l);var u=o.createShader(o.FRAGMENT_SHADER);o.shaderSource(u,i),o.compileShader(u),o.attachShader(c,l),o.attachShader(c,u),o.linkProgram(c),o.useProgram(c),c.vertexPosAttrib=o.getAttribLocation(c,\"attrVertex\"),c.offsetUniform=o.getUniformLocation(c,\"uniformOffset\"),o.enableVertexAttribArray(c.vertexPosArray),o.vertexAttribPointer(c.vertexPosAttrib,r.itemSize,o.FLOAT,!1,0,0),o.uniform2f(c.offsetUniform,1,1),o.drawArrays(o.TRIANGLE_STRIP,0,r.numItems);try{s.push(o.canvas.toDataURL())}catch(f){}s.push(\"extensions:\"+(o.getSupportedExtensions()||[]).join(\";\")),s.push(\"webgl aliased line width range:\"+e(o.getParameter(o.ALIASED_LINE_WIDTH_RANGE))),s.push(\"webgl aliased point size range:\"+e(o.getParameter(o.ALIASED_POINT_SIZE_RANGE))),s.push(\"webgl alpha bits:\"+o.getParameter(o.ALPHA_BITS)),s.push(\"webgl antialiasing:\"+(o.getContextAttributes().antialias?\"yes\":\"no\")),s.push(\"webgl blue bits:\"+o.getParameter(o.BLUE_BITS)),s.push(\"webgl depth bits:\"+o.getParameter(o.DEPTH_BITS)),s.push(\"webgl green bits:\"+o.getParameter(o.GREEN_BITS)),s.push(\"webgl max anisotropy:\"+n(o)),s.push(\"webgl max combined texture image units:\"+o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),s.push(\"webgl max cube map texture size:\"+o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE)),s.push(\"webgl max fragment uniform vectors:\"+o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS)),s.push(\"webgl max render buffer size:\"+o.getParameter(o.MAX_RENDERBUFFER_SIZE)),s.push(\"webgl max texture image units:\"+o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS)),s.push(\"webgl max texture size:\"+o.getParameter(o.MAX_TEXTURE_SIZE)),s.push(\"webgl max varying vectors:\"+o.getParameter(o.MAX_VARYING_VECTORS)),s.push(\"webgl max vertex attribs:\"+o.getParameter(o.MAX_VERTEX_ATTRIBS)),s.push(\"webgl max vertex texture image units:\"+o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),s.push(\"webgl max vertex uniform vectors:\"+o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS)),s.push(\"webgl max viewport dims:\"+e(o.getParameter(o.MAX_VIEWPORT_DIMS))),s.push(\"webgl red bits:\"+o.getParameter(o.RED_BITS)),s.push(\"webgl renderer:\"+o.getParameter(o.RENDERER)),s.push(\"webgl shading language version:\"+o.getParameter(o.SHADING_LANGUAGE_VERSION)),s.push(\"webgl stencil bits:\"+o.getParameter(o.STENCIL_BITS)),s.push(\"webgl vendor:\"+o.getParameter(o.VENDOR)),s.push(\"webgl version:\"+o.getParameter(o.VERSION));try{var d=o.getExtension(\"WEBGL_debug_renderer_info\");d&&(s.push(\"webgl unmasked vendor:\"+o.getParameter(d.UNMASKED_VENDOR_WEBGL)),s.push(\"webgl unmasked renderer:\"+o.getParameter(d.UNMASKED_RENDERER_WEBGL)))}catch(f){}return o.getShaderPrecisionFormat&&v([\"FLOAT\",\"INT\"],function(a){v([\"VERTEX\",\"FRAGMENT\"],function(r){v([\"HIGH\",\"MEDIUM\",\"LOW\"],function(i){v([\"precision\",\"rangeMin\",\"rangeMax\"],function(e){var n=o.getShaderPrecisionFormat(o[r+\"_SHADER\"],o[i+\"_\"+a])[e];\"precision\"!==e&&(e=\"precision \"+e);var t=[\"webgl \",r.toLowerCase(),\" shader \",i.toLowerCase(),\" \",a.toLowerCase(),\" \",e,\":\",n].join(\"\");s.push(t)})})})}),le(o),s},J=function(){try{var e=ce(),n=e.getExtension(\"WEBGL_debug_renderer_info\"),t=e.getParameter(n.UNMASKED_VENDOR_WEBGL)+\"~\"+e.getParameter(n.UNMASKED_RENDERER_WEBGL);return le(e),t}catch(i){return null}},Z=function(){var e=document.createElement(\"div\");e.innerHTML=\"&nbsp;\";var n=!(e.className=\"adsbox\");try{document.body.appendChild(e),n=0===document.getElementsByClassName(\"adsbox\")[0].offsetHeight,document.body.removeChild(e)}catch(t){n=!1}return n},q=function(){if(\"undefined\"!=typeof navigator.languages)try{if(navigator.languages[0].substr(0,2)!==navigator.language.substr(0,2))return!0}catch(e){return!0}return!1},Y=function(){return window.screen.width<window.screen.availWidth||window.screen.height<window.screen.availHeight},Q=function(){var e,n=navigator.userAgent.toLowerCase(),t=navigator.oscpu,i=navigator.platform.toLowerCase();if(e=0<=n.indexOf(\"windows phone\")?\"Windows Phone\":0<=n.indexOf(\"windows\")||0<=n.indexOf(\"win16\")||0<=n.indexOf(\"win32\")||0<=n.indexOf(\"win64\")||0<=n.indexOf(\"win95\")||0<=n.indexOf(\"win98\")||0<=n.indexOf(\"winnt\")||0<=n.indexOf(\"wow64\")?\"Windows\":0<=n.indexOf(\"android\")?\"Android\":0<=n.indexOf(\"linux\")||0<=n.indexOf(\"cros\")||0<=n.indexOf(\"x11\")?\"Linux\":0<=n.indexOf(\"iphone\")||0<=n.indexOf(\"ipad\")||0<=n.indexOf(\"ipod\")||0<=n.indexOf(\"crios\")||0<=n.indexOf(\"fxios\")?\"iOS\":0<=n.indexOf(\"macintosh\")||0<=n.indexOf(\"mac_powerpc)\")?\"Mac\":\"Other\",(\"ontouchstart\"in window||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints)&&\"Windows\"!==e&&\"Windows Phone\"!==e&&\"Android\"!==e&&\"iOS\"!==e&&\"Other\"!==e&&-1===n.indexOf(\"cros\"))return!0;if(void 0!==t){if(0<=(t=t.toLowerCase()).indexOf(\"win\")&&\"Windows\"!==e&&\"Windows Phone\"!==e)return!0;if(0<=t.indexOf(\"linux\")&&\"Linux\"!==e&&\"Android\"!==e)return!0;if(0<=t.indexOf(\"mac\")&&\"Mac\"!==e&&\"iOS\"!==e)return!0;if((-1===t.indexOf(\"win\")&&-1===t.indexOf(\"linux\")&&-1===t.indexOf(\"mac\"))!=(\"Other\"===e))return!0}return 0<=i.indexOf(\"win\"\n" + ")&&\"Windows\"!==e&&\"Windows Phone\"!==e||((0<=i.indexOf(\"linux\")||0<=i.indexOf(\"android\")||0<=i.indexOf(\"pike\"))&&\"Linux\"!==e&&\"Android\"!==e||((0<=i.indexOf(\"mac\")||0<=i.indexOf(\"ipad\")||0<=i.indexOf(\"ipod\")||0<=i.indexOf(\"iphone\"))&&\"Mac\"!==e&&\"iOS\"!==e||!(0<=i.indexOf(\"arm\")&&\"Windows Phone\"===e)&&(!(0<=i.indexOf(\"pike\")&&0<=n.indexOf(\"opera mini\"))&&((i.indexOf(\"win\")<0&&i.indexOf(\"linux\")<0&&i.indexOf(\"mac\")<0&&i.indexOf(\"iphone\")<0&&i.indexOf(\"ipad\")<0&&i.indexOf(\"ipod\")<0)!==(\"Other\"===e)||\"undefined\"==typeof navigator.plugins&&\"Windows\"!==e&&\"Windows Phone\"!==e))))},$=function(){var e,n=navigator.userAgent.toLowerCase(),t=navigator.productSub;if(0<=n.indexOf(\"edge/\")||0<=n.indexOf(\"iemobile/\"))return!1;if(0<=n.indexOf(\"opera mini\"))return!1;if((\"Chrome\"===(e=0<=n.indexOf(\"firefox/\")?\"Firefox\":0<=n.indexOf(\"opera/\")||0<=n.indexOf(\" opr/\")?\"Opera\":0<=n.indexOf(\"chrome/\")?\"Chrome\":0<=n.indexOf(\"safari/\")?0<=n.indexOf(\"android 1.\")||0<=n.indexOf(\"android 2.\")||0<=n.indexOf(\"android 3.\")||0<=n.indexOf(\"android 4.\")?\"AOSP\":\"Safari\":0<=n.indexOf(\"trident/\")?\"Internet Explorer\":\"Other\")||\"Safari\"===e||\"Opera\"===e)&&\"20030107\"!==t)return!0;var i,r=eval.toString().length;if(37===r&&\"Safari\"!==e&&\"Firefox\"!==e&&\"Other\"!==e)return!0;if(39===r&&\"Internet Explorer\"!==e&&\"Other\"!==e)return!0;if(33===r&&\"Chrome\"!==e&&\"AOSP\"!==e&&\"Opera\"!==e&&\"Other\"!==e)return!0;try{throw\"a\"}catch(a){try{a.toSource(),i=!0}catch(o){i=!1}}return i&&\"Firefox\"!==e&&\"Other\"!==e},ee=function(){var e=document.createElement(\"canvas\");return!(!e.getContext||!e.getContext(\"2d\"))},ne=function(){if(!ee())return!1;var e=ce(),n=!!window.WebGLRenderingContext&&!!e;return le(e),n},te=function(){return\"Microsoft Internet Explorer\"===navigator.appName||!(\"Netscape\"!==navigator.appName||!/Trident/.test(navigator.userAgent))},ie=function(){return 2<=(\"msWriteProfilerMark\"in window)+(\"msLaunchUri\"in navigator)+(\"msSaveBlob\"in navigator)},re=function(){return\"undefined\"!=typeof window.swfobject},ae=function(){return window.swfobject.hasFlashPlayerVersion(\"9.0.0\")},oe=function(e){var n=document.createElement(\"div\");n.setAttribute(\"id\",e.fonts.swfContainerId),document.body.appendChild(n)},se=function(n,e){var t=\"___fp_swf_loaded\";window[t]=function(e){n(e)};var i=e.fonts.swfContainerId;oe();var r={onReady:t},a={allowScriptAccess:\"always\",menu:\"false\"};window.swfobject.embedSWF(e.fonts.swfPath,i,\"1\",\"1\",\"9.0.0\",!1,r,a,{})},ce=function(){var e=document.createElement(\"canvas\"),n=null;try{n=e.getContext(\"webgl\")||e.getContext(\"experimental-webgl\")}catch(t){}return n||(n=null),n},le=function(e){var n=e.getExtension(\"WEBGL_lose_context\");null!=n&&n.loseContext()},ue=[{key:\"userAgent\",getData:function(e){e(navigator.userAgent)}},{key:\"webdriver\",getData:function(e,n){e(null==navigator.webdriver?n.NOT_AVAILABLE:navigator.webdriver)}},{key:\"language\",getData:function(e,n){e(navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||n.NOT_AVAILABLE)}},{key:\"colorDepth\",getData:function(e,n){e(window.screen.colorDepth||n.NOT_AVAILABLE)}},{key:\"deviceMemory\",getData:function(e,n){e(navigator.deviceMemory||n.NOT_AVAILABLE)}},{key:\"pixelRatio\",getData:function(e,n){e(window.devicePixelRatio||n.NOT_AVAILABLE)}},{key:\"hardwareConcurrency\",getData:N},{key:\"screenResolution\",getData:r},{key:\"availableScreenResolution\",getData:o},{key:\"timezoneOffset\",getData:function(e){e((new Date).getTimezoneOffset())}},{key:\"timezone\",getData:function(e,n){window.Intl&&window.Intl.DateTimeFormat?e((new window.Intl.DateTimeFormat).resolvedOptions().timeZone||n.NOT_AVAILABLE):e(n.NOT_AVAILABLE)}},{key:\"sessionStorage\",getData:u},{key:\"localStorage\",getData:T},{key:\"indexedDb\",getData:x},{key:\"addBehavior\",getData:function(e){e(!!window.HTMLElement.prototype.addBehavior)}},{key:\"openDatabase\",getData:function(e){e(!!window.openDatabase)}},{key:\"cpuClass\",getData:y},{key:\"platform\",getData:w},{key:\"doNotTrack\",getData:S},{key:\"plugins\",getData:I},{key:\"canvas\",getData:E},{key:\"webgl\",getData:A},{key:\"webglVendorAndRenderer\",getData:C},{key:\"adBlock\",getData:P},{key:\"hasLiedLanguages\",getData:k},{key:\"hasLiedResolution\",getData:b},{key:\"hasLiedOs\",getData:B},{key:\"hasLiedBrowser\",getData:O},{key:\"touchSupport\",getData:D},{key:\"fonts\",getData:function(e,n){var s=[\"monospace\",\"sans-serif\",\"serif\"],c=[\"Andale Mono\",\"Arial\",\"Arial Black\",\"Arial Hebrew\",\"Arial MT\",\"Arial Narrow\",\"Arial Rounded MT Bold\",\"Arial Unicode MS\",\"Bitstream Vera Sans Mono\",\"Book Antiqua\",\"Bookman Old Style\",\"Calibri\",\"Cambria\",\"Cambria Math\",\"Century\",\"Century Gothic\",\"Century Schoolbook\",\"Comic Sans\",\"Comic Sans MS\",\"Consolas\",\"Courier\",\"Courier New\",\"Geneva\",\"Georgia\",\"Helvetica\",\"Helvetica Neue\",\"Impact\",\"Lucida Bright\",\"Lucida Calligraphy\",\"Lucida Console\",\"Lucida Fax\",\"LUCIDA GRANDE\",\"Lucida Handwriting\",\"Lucida Sans\",\"Lucida Sans Typewriter\",\"Lucida Sans Unicode\",\"Microsoft Sans Serif\",\"Monaco\",\"Monotype Corsiva\",\"MS Gothic\",\"MS Outlook\",\"MS PGothic\",\"MS Reference Sans Serif\",\"MS Sans Serif\",\"MS Serif\",\"MYRIAD\",\"MYRIAD PRO\",\"Palatino\",\"Palatino Linotype\",\"Segoe Print\",\"Segoe Script\",\"Segoe UI\",\"Segoe UI Light\",\"Segoe UI Semibold\",\"Segoe UI Symbol\",\"Tahoma\",\"Times\",\"Times New Roman\",\"Times New Roman PS\",\"Trebuchet MS\",\"Verdana\",\"Wingdings\",\"Wingdings 2\",\"Wingdings 3\"];if(n.fonts.extendedJsFonts){var t=[\"Abadi MT Condensed Light\",\"Academy Engraved LET\",\"ADOBE CASLON PRO\",\"Adobe Garamond\",\"ADOBE GARAMOND PRO\",\"Agency FB\",\"Aharoni\",\"Albertus Extra Bold\",\"Albertus Medium\",\"Algerian\",\"Amazone BT\",\"American Typewriter\",\"American Typewriter Condensed\",\"AmerType Md BT\",\"Andalus\",\"Angsana New\",\"AngsanaUPC\",\"Antique Olive\",\"Aparajita\",\"Apple Chancery\",\"Apple Color Emoji\",\"Apple SD Gothic Neo\",\"Arabic Typesetting\",\"ARCHER\",\"ARNO PRO\",\"Arrus BT\",\"Aurora Cn BT\",\"AvantGarde Bk BT\",\"AvantGarde Md BT\",\"AVENIR\",\"Ayuthaya\",\"Bandy\",\"Bangla Sangam MN\",\"Bank Gothic\",\"BankGothic Md BT\",\"Baskerville\",\"Baskerville Old Face\",\"Batang\",\"BatangChe\",\"Bauer Bodoni\",\"Bauhaus 93\",\"Bazooka\",\"Bell MT\",\"Bembo\",\"Benguiat Bk BT\",\"Berlin Sans FB\",\"Berlin Sans FB Demi\",\"Bernard MT Condensed\",\"BernhardFashion BT\",\"BernhardMod BT\",\"Big Caslon\",\"BinnerD\",\"Blackadder ITC\",\"BlairMdITC TT\",\"Bodoni 72\",\"Bodoni 72 Oldstyle\",\"Bodoni 72 Smallcaps\",\"Bodoni MT\",\"Bodoni MT Black\",\"Bodoni MT Condensed\",\"Bodoni MT Poster Compressed\",\"Bookshelf Symbol 7\",\"Boulder\",\"Bradley Hand\",\"Bradley Hand ITC\",\"Bremen Bd BT\",\"Britannic Bold\",\"Broadway\",\"Browallia New\",\"BrowalliaUPC\",\"Brush Script MT\",\"Californian FB\",\"Calisto MT\",\"Calligrapher\",\"Candara\",\"CaslonOpnface BT\",\"Castellar\",\"Centaur\",\"Cezanne\",\"CG Omega\",\"CG Times\",\"Chalkboard\",\"Chalkboard SE\",\"Chalkduster\",\"Charlesworth\",\"Charter Bd BT\",\"Charter BT\",\"Chaucer\",\"ChelthmITC Bk BT\",\"Chiller\",\"Clarendon\",\"Clarendon Condensed\",\"CloisterBlack BT\",\"Cochin\",\"Colonna MT\",\"Constantia\",\"Cooper Black\",\"Copperplate\",\"Copperplate Gothic\",\"Copperplate Gothic Bold\",\"Copperplate Gothic Light\",\"CopperplGoth Bd BT\",\"Corbel\",\"Cordia New\",\"CordiaUPC\",\"Cornerstone\",\"Coronet\",\"Cuckoo\",\"Curlz MT\",\"DaunPenh\",\"Dauphin\",\"David\",\"DB LCD Temp\",\"DELICIOUS\",\"Denmark\",\"DFKai-SB\",\"Didot\",\"DilleniaUPC\",\"DIN\",\"DokChampa\",\"Dotum\",\"DotumChe\",\"Ebrima\",\"Edwardian Script ITC\",\"Elephant\",\"English 111 Vivace BT\",\"Engravers MT\",\"EngraversGothic BT\",\"Eras Bold ITC\",\"Eras Demi ITC\",\"Eras Light ITC\",\"Eras Medium ITC\",\"EucrosiaUPC\",\"Euphemia\",\"Euphemia UCAS\",\"EUROSTILE\",\"Exotc350 Bd BT\",\"FangSong\",\"Felix Titling\",\"Fixedsys\",\"FONTIN\",\"Footlight MT Light\",\"Forte\",\"FrankRuehl\",\"Fransiscan\",\"Freefrm721 Blk BT\",\"FreesiaUPC\",\"Freestyle Script\",\"French Script MT\",\"FrnkGothITC Bk BT\",\"Fruitger\",\"FRUTIGER\",\"Futura\",\"Futura Bk BT\",\"Futura Lt BT\",\"Futura Md BT\",\"Futura ZBlk BT\",\"FuturaBlack BT\",\"Gabriola\",\"Galliard BT\",\"Gautami\",\"Geeza Pro\",\"Geometr231 BT\",\"Geometr231 Hv BT\",\"Geometr231 Lt BT\",\"GeoSlab 703 Lt BT\",\"GeoSlab 703 XBd BT\",\"Gigi\",\"Gill Sans\",\"Gill Sans MT\",\"Gill Sans MT Condensed\",\"Gill Sans MT Ext Condensed Bold\",\"Gill Sans Ultra Bold\",\"Gill Sans Ultra Bold Condensed\",\"Gisha\",\"Gloucester MT Extra Condensed\",\"GOTHAM\",\"GOTHAM BOLD\",\"Goudy Old Style\",\"Goudy Stout\",\"GoudyHandtooled BT\",\"GoudyOLSt BT\",\"Gujarati Sangam MN\",\"Gulim\",\"GulimChe\",\"Gungsuh\",\"GungsuhChe\",\"Gurmukhi MN\",\"Haettenschweiler\",\"Harlow Solid Italic\",\"Harrington\",\"Heather\",\"Heiti SC\",\"Heiti TC\",\"HELV\",\"Herald\",\"High Tower Text\",\"Hiragino Kaku Gothic ProN\",\"Hiragino Mincho ProN\",\"Hoefler Text\",\"Humanst 521 Cn BT\",\"Humanst521 BT\",\"Humanst521 Lt BT\",\"Imprint MT Shadow\",\"Incised901 Bd BT\",\"Incised901 BT\",\"Incised901 Lt BT\",\"INCONSOLATA\",\"Informal Roman\",\"Informal011 BT\",\"INTERSTATE\",\"IrisUPC\",\"Iskoola Pota\",\"JasmineUPC\",\"Jazz LET\",\"Jenson\",\"Jester\",\"Jokerman\",\"Juice ITC\",\"Kabel Bk BT\",\"Kabel Ult BT\",\"Kailasa\",\"KaiTi\",\"Kalinga\",\"Kannada Sangam MN\",\"Kartika\",\"Kaufmann Bd BT\",\"Kaufmann BT\",\"Khmer UI\",\"KodchiangUPC\",\"Kokila\",\"Korinna BT\",\"Kristen ITC\",\"Krungthep\",\"Kunstler Script\",\"Lao UI\",\"Latha\",\"Leelawadee\",\"Letter Gothic\",\"Levenim MT\",\"LilyUPC\",\"Lithograph\",\"Lithograph Light\",\"Long Island\",\"Lydian BT\",\"Magneto\",\"Maiandra GD\",\"Malayalam Sangam MN\",\"Malgun Gothic\",\"Mangal\",\"Marigold\",\"Marion\",\"Marker Felt\",\"Market\",\"Marlett\",\"Matisse ITC\",\"Matura MT Script Capitals\",\"Meiryo\",\"Meiryo UI\",\"Microsoft Himalaya\",\"Microsoft JhengHei\",\"Microsoft New Tai Lue\",\"Microsoft PhagsPa\",\"Microsoft Tai Le\",\"Microsoft Uighur\",\"Microsoft YaHei\",\"Microsoft Yi Baiti\",\"MingLiU\",\"MingLiU_HKSCS\",\"MingLiU_HKSCS-ExtB\",\"MingLiU-ExtB\",\"Minion\",\"Minion Pro\",\"Miriam\",\"Miriam Fixed\",\"Mistral\",\"Modern\",\"Modern No. 20\",\"Mona Lisa Solid ITC TT\",\"Mongolian Baiti\",\"MONO\",\"MoolBoran\",\"Mrs Eaves\",\"MS LineDraw\",\"MS Mincho\",\"MS PMincho\",\"MS Reference Specialty\",\"MS UI Gothic\",\"MT Extra\",\"MUSEO\",\"MV Boli\",\"Nadeem\",\"Narkisim\",\"NEVIS\",\"News Gothic\",\"News GothicMT\",\"NewsGoth BT\",\"Niagara Engraved\",\"Niagara Solid\",\"Noteworthy\",\"NSimSun\",\"Nyala\",\"OCR A Extended\",\"Old Century\",\"Old English Text MT\",\"Onyx\",\"Onyx BT\",\"OPTIMA\",\"Oriya Sangam MN\",\"OSAKA\",\"OzHandicraft BT\",\"Palace Script MT\",\"Papyrus\",\"Parchment\",\"Party LET\",\"Pegasus\",\"Perpetua\",\"Perpetua Titling MT\",\"PetitaBold\",\"Pickwick\",\"Plantagenet Cherokee\",\"Playbill\",\"PMingLiU\",\"PMingLiU-ExtB\",\"Poor Richard\",\"Poster\",\"PosterBodoni BT\",\"PRINCETOWN LET\",\"Pristina\",\"PTBarnum BT\",\"Pythagoras\",\"Raavi\",\"Rage Italic\",\"Ravie\",\"Ribbon131 Bd BT\",\"Rockwell\",\"Rockwell Condensed\",\"Rockwell Extra Bold\",\"Rod\",\"Roman\",\"Sakkal Majalla\",\"Santa Fe LET\",\"Savoye LET\",\"Sceptre\",\"Script\",\"Script MT Bold\",\"SCRIPTINA\",\"Serifa\",\"Serifa BT\",\"Serifa Th BT\",\"ShelleyVolante BT\",\"Sherwood\",\"Shonar Bangla\",\"Showcard Gothic\",\"Shruti\",\"Signboard\",\"SILKSCREEN\",\"SimHei\",\"Simplified Arabic\",\"Simplified Arabic Fixed\",\"SimSun\",\"SimSun-ExtB\",\"Sinhala Sangam MN\",\"Sketch Rockwell\",\"Skia\",\"Small Fonts\",\"Snap ITC\",\"Snell Roundhand\",\"Socket\",\"Souvenir Lt BT\",\"Staccato222 BT\",\"Steamer\",\"Stencil\",\"Storybook\",\"Styllo\",\"Subway\",\"Swis721 BlkEx BT\",\"Swiss911 XCm BT\",\"Sylfaen\",\"Synchro LET\",\"System\",\"Tamil Sangam MN\",\"Technical\",\"Teletype\",\"Telugu Sangam MN\",\"Tempus Sans ITC\",\"Terminal\",\"Thonburi\",\"Traditional Arabic\",\"Trajan\",\"TRAJAN PRO\",\"Tristan\",\"Tubular\",\"Tunga\",\"Tw Cen MT\",\"Tw Cen MT Condensed\",\"Tw Cen MT Condensed Extra Bold\",\"TypoUpright BT\",\"Unicorn\",\"Univers\",\"Univers CE 55 Medium\",\"Univers Condensed\",\"Utsaah\",\"Vagabond\",\"Vani\",\"Vijaya\",\"Viner Hand ITC\",\"VisualUI\",\"Vivaldi\",\"Vladimir Script\",\"Vrinda\",\"Westminster\",\"WHITNEY\",\"Wide Latin\",\"ZapfEllipt BT\",\"ZapfHumnst BT\",\"ZapfHumnst Dm BT\",\"Zapfino\",\"Zurich BlkEx BT\",\"Zurich Ex BT\",\"ZWAdobeF\"];c=c.concat(t)}c=(c=c.concat(n.fonts.userDefinedFonts)).filter(function(e,n){return c.indexOf(e)===n});var i=\"mmmmmmmmmmlli\",r=\"72px\",a=document.getElementsByTagName(\"body\")[0],o=document.createElement(\"div\"),l=document.createElement(\"div\"),u={},d={},f=function(){var e=document.createElement(\"span\");return e.style.position=\"absolute\",e.style.left=\"-9999px\",e.style.fontSize=r,e.style.fontStyle=\"normal\",e.style.fontWeight=\"normal\",e.style.letterSpacing=\"normal\",e.style.lineBreak=\"auto\",e.style.lineHeight=\"normal\",e.style.textTransform=\"none\",e.style.textAlign=\"left\",e.style.textDecoration=\"none\",e.style.textShadow=\"none\",e.style.whiteSpace=\"normal\",e.style.wordBreak=\"normal\",e.style.wordSpacing=\"normal\",e.innerHTML=i,e},g=function(e,n){var t=f();return t.style.fontFamily=\"'\"+e+\"',\"+n,t},h=function(){for(var e={},n=0,t=c.length;n<t;n++){for(var i=[],r=0,a=s.length;r<a;r++){var o=g(c[n],s[r]);l.appendChild(o),i.push(o)}e[c[n]]=i}return e},p=function(e){for(var n=!1,t=0;t<s.length;t++)if(n=e[t].offsetWidth!==u[s[t]]||e[t].offsetHeight!==d[s[t]])return n;return n},m=function(){for(var e=[],n=0,t=s.length;n<t;n++){var i=f();i.style.fontFamily=s[n],o.appendChild(i),e.push(i)}return e}();a.appendChild(o);for(var v=0,T=s.length;v<T;v++)u[s[v]]=m[v].offsetWidth,d[s[v]]=m[v].offsetHeight;var x=h();a.appendChild(l);for(var y=[],w=0,S=c.length;w<S;w++)p(x[c[w]])&&y.push(c[w]);a.removeChild(l),a.removeChild(o),e(y)},pauseBefore:!0},{key:\"fontsFlash\",getData:M,pauseBefore:!0},{key:\"audio\",getData:function(i,e){var n=e.audio;if(n.excludeIOS11&&navigator.userAgent.match(/OS 11.+Version\\/11.+Safari/))return i(e.EXCLUDED);var t=window.OfflineAudioContext||window.webkitOfflineAudioContext;if(null==t)return i(e.NOT_AVAILABLE);var r=new t(1,44100,44100),a=r.createOscillator();a.type=\"triangle\",a.frequency.setValueAtTime(1e4,r.currentTime);var o=r.createDynamicsCompressor();v([[\"threshold\",-50],[\"knee\",40],[\"ratio\",12],[\"reduction\",-20],[\"attack\",0],[\"release\",.25]],function(e){o[e[0]]!==undefined&&\"function\"==typeof o[e[0]].setValueAtTime&&o[e[0]].setValueAtTime(e[1],r.currentTime)}),a.connect(o),o.connect(r.destination),a.start(0),r.startRendering();var s=setTimeout(function(){return console.warn('Audio fingerprint timed out. Please report bug at https:\/\/github.com/fingerprintjs/fingerprintjs with your user agent: \"'+navigator.userAgent+'\".'),r.oncomplete=function(){},r=null,i(\"audioTimeout\")},n.timeout);r.oncomplete=function(e){var n;try{clearTimeout(s),n=e.renderedBuffer.getChannelData(0).slice(4500,5e3).reduce(function(e,n){return e+Math.abs(n)},0).toString(),a.disconnect(),o.disconnect()}catch(t){return void i(t)}i(n)}}},{key:\"enumerateDevices\",getData:t}],de=function(){throw new Error(\"'new Fingerprint()' is deprecated, see https:\/\/github.com/fingerprintjs/fingerprintjs#upgrade-guide-from-182-to-200\")};return de.get=function(i,r){r?i||(i={}):(r=i,i={}),n(i,e),i.components=i.extraComponents.concat(ue);var a={data:[],addPreprocessedComponent:function(e,n){\"function\"==typeof i.preprocessor&&(n=i.preprocessor(e,n)),a.data.push({key:e,value:n})}},o=-1,s=function(e){if((o+=1)>=i.components.length)r(a.data);else{var n=i.components[o];if(i.excludes[n.key])s(!1);else{if(!e&&n.pauseBefore)return o-=1,void setTimeout(function(){s(!0)},1);try{n.getData(function(e){a.addPreprocessedComponent(n.key,e),s(!1)},i)}catch(t){a.addPreprocessedComponent(n.key,String(t)),s(!1)}}}};s(!1)},de.getPromise=function(n){return new Promise(function(e){de.get(n,e)})},de.getV18=function(a,o){return null==o&&(o=a,a={}),de.get(a,function(e){for(var n=[],t=0;t<e.length;t++){var i=e[t];if(i.value===(a.NOT_AVAILABLE||\"not available\"))n.push({key:i.key,value:\"unknown\"});else if(\"plugins\"===i.key)n.push({key:\"plugins\",value:c(i.value,function(e){var n=c(e[2],function(e){return e.join?e.join(\"~\"):e}).join(\",\");return[e[0],e[1],n].join(\"::\")})});else if(-1!==[\"canvas\",\"webgl\"].indexOf(i.key)&&Array.isArray(i.value))n.push({key:i.key,value:i.value.join(\"~\")});else if(-1!==[\"sessionStorage\",\"localStorage\",\"indexedDb\",\"addBehavior\",\"openDatabase\"].indexOf(i.key)){if(!i.value)continue;n.push({key:i.key,value:1})}else i.value?n.push(i.value.join?{key:i.key,value:i.value.join(\";\")}:i):n.push({key:i.key,value:i.value})}var r=s(c(n,function(e){return e.value}).join(\"~~~\"),31);o(r,n)})},de.x64hash128=s,de.VERSION=\"2.1.4\",de});";

//----------------------------------------------------

//----

tC.extend({
    executeTag864_5181_5: function(el, p) {
        if (!el || !el.target) {
            el = {
                type: "no_event",
                target: {}
            }
        }
        ;if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_5.init_tc_array_events(p);
        var cact = tC.container_5181_5.cact || window.cact;
        var cact_container = window.tC_5181_5;
        var cact_event = el || {};
        var cact_event_vars = Object.assign({}, tc_array_events);
        var cact_event_attrs = cact_event.target || {};
        if (typeof _abtasty != "undefined") {
            window.abtasty.send("product", {
                pit: "CART_ITEM",
                pcid: tC.internalvars.tc_randomCachebuster,
                pq: tc_array_events["quantity"],
                pp: tc_array_events["discount_price_ati"],
                ps: tC.internalvars.getID(tc_array_events["productSkuMfPartNumber"]),
                pn: tc_array_events["prdname"]
            });
        }
    }
});
tC.extend({
    executeTag884_5181_5: function(el, p) {
        if (!el || !el.target) {
            el = {
                type: "no_event",
                target: {}
            }
        }
        ;if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_5.init_tc_array_events(p);
        var cact = tC.container_5181_5.cact || window.cact;
        var cact_container = window.tC_5181_5;
        var cact_event = el || {};
        var cact_event_vars = Object.assign({}, tc_array_events);
        var cact_event_attrs = cact_event.target || {};
        if (typeof pixlee_analytics !== 'undefined') {
            var id_prd = tC.internalvars.getID(tc_array_events["productSkuMfPartNumber"]);
            var id_slice;
            switch (id_prd) {
            case /CR/.test(id_prd):
                id_slice = "ID_" + id_prd.slice(2)
                break;
            case "":
                id_slice = "_not_set_"
                break;
            default:
                id_slice = "ID_" + id_prd
            }
            pixlee_analytics.events.trigger('add:to:cart', {
                'product_sku': id_slice,
                'price': tc_array_events["discount_price_ati"],
                'quantity': tc_array_events["quantity"],
                'currency': tc_vars["nav_currency"]
            });
        }
    }
});
tC.extend({
    executeTag932_5181_5: function(el, p) {
        if (!el || !el.target) {
            el = {
                type: "no_event",
                target: {}
            }
        }
        ;if (typeof p == "undefined") {
            p = {};
        }
        tc_array_events = tC.container_5181_5.init_tc_array_events(p);
        var cact = tC.container_5181_5.cact || window.cact;
        var cact_container = window.tC_5181_5;
        var cact_event = el || {};
        var cact_event_vars = Object.assign({}, tc_array_events);
        var cact_event_attrs = cact_event.target || {};
        var newItemCart = [];
        var index = 0;
        if (_insideData.cart === undefined) {
            _insideData.cart = [];
            _insideData.cart.items = [];
            _insideData.cart.total = 0;
        }
        if (Object.hasOwn(_insideData, "cart")) {
            var cartTmp = _insideData.cart.items;
            var totalTmp = _insideData.cart.total;
        } else {
            var cartTmp = [];
            var totalTmp = 0;
        }
        if (window.tc_array_events !== undefined) {
            if (window.tc_array_events.id === "enh_addcart") {
                _insideData.cart.items.push({
                    sku: tc_array_events.pid,
                    qty: tc_array_events.quantity,
                    price: String(tc_array_events.price_ati),
                    category: tc_array_events.product_eng_category
                });
            }
        }
        totalTmp = _insideData.cart.total + tc_array_events.price_ati;
        _insideData.cart.total = totalTmp;
    }
});
tC.launchTag(186, 'Commanders Act - Data layer QA', 1375, 5181, 5, 3);
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('195')) {
        if ((document.location).toString().toLowerCase().indexOf(('trinity100').toLowerCase()) == -1) {
            if ((document.location).toString().toLowerCase().indexOf(('thefabulouspage').toLowerCase()) == -1) {
                if ((document.location).toString().toLowerCase().indexOf(('thefabulouscartierjourney').toLowerCase()) == -1) {
                    if ((document.location).toString().toLowerCase().indexOf(('watchesandwonders').toLowerCase()) == -1) {
                        if (!tc_vars["pguri"].toString().toLowerCase().match(new RegExp(('timeproject').replace(new RegExp("\\*","g"), ".*"),"gi"))) {
                            if ((document.location).toString().toLowerCase().indexOf(('love-is-all').toLowerCase()) == -1) {
                                tC.launchTag(195, 'Medallia - Main', 26, 5181, 5, 3);
                                tC.script.add("https://nebula-cdn.kampyle.com/we/" + tC.internalvars.ricMedalliaSiteID + "/onsite/embed.js")
                            }
                        }
                    }
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('246')) {
        if ((tc_vars["nav_countryCode"] == 'GB') || (tc_vars["nav_countryCode"] == 'ES') || (tc_vars["nav_countryCode"] == 'FR') || (tc_vars["nav_countryCode"] == 'DE') || (tc_vars["nav_countryCode"] == 'CH')) {
            tC.launchTag(246, 'Freespee', 26, 5181, 5, 3);
            var formattingFunction = function(localNumber, e164Number) {
                return e164Number.replace(/\+(\d{0,2})(\d{0,2})(\d{0,4})(\d*)/, '+$1 (0)$2 $3 $4');
            };
            var __fs_conf = __fs_conf || [];
            __fs_conf.push(['setAdv', {
                'id': tC.internalvars.ricfreespeeid,
                'formatting_function': formattingFunction
            }]);
            __fs_conf.push(['setCookieDomain', '.cartier.com']);
            __fs_conf.push(['autoInvoke', false]);
            tC.scriptElt1 = document.createElement("script");
            tC.scriptElt1.id = "tc_script_246_1";
            tC.scriptElt1.type = "text/javascript";
            tC.scriptElt1.src = "//analytics.freespee.com/js/external/fs.js";
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
            var waitFor = function() {
                if (typeof (__fs_dncs_instance) != "undefined") {
                    __fs_dncs_instance.loadEvent();
                } else {
                    setTimeout(function() {
                        waitFor();
                    }, 500);
                }
            }
            waitFor()
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('551')) {
        tC.launchTag(551, 'BrandLock - Main', 26, 5181, 5, 3);
        tC.scriptElt1 = document.createElement("script");
        tC.scriptElt1.id = "tc_script_551_1";
        tC.scriptElt1.src = "//" + tC.internalvars.ricBrandlockID + ".cloudfront.net/" + tC.internalvars.ricBrandlockJSID + ".js";
        tC.scriptElt1.async = true;
        tC.scriptElt1.defer = 'defer';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('450')) {
        if (tc_vars["nav_pagetype"] == 'thankyou') {
            tC.launchTag(450, 'Brandlock - confirmation page', 26, 5181, 5, 3);
            tC.scriptElt1 = document.createElement("script");
            tC.scriptElt1.id = "tc_script_450_1";
            tC.scriptElt1.src = tC.internalvars.ricBrandlockID + ".cloudfront.net/" + tC.internalvars.ricBrandlockJSID + ".js";
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('565')) {
        if ((document.location).toString().toLowerCase().indexOf(('thefabulouspage').toLowerCase()) == -1) {
            if ((document.location).toString().toLowerCase().indexOf(('thefabulouscartierjourney').toLowerCase()) == -1) {
                if (tc_vars["nav_countryCode"] != 'GB') {
                    tC.launchTag(565, 'Hotjar', 1573, 5181, 5, 3);
                    (function(h, o, t, j, a, r) {
                        h.hj = h.hj || function() {
                            (h.hj.q = h.hj.q || []).push(arguments)
                        }
                        ;
                        h._hjSettings = {
                            hjid: '437870',
                            hjsv: '6'
                        };
                        a = o.getElementsByTagName('head')[0];
                        r = o.createElement('script');
                        r.async = 1;
                        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                        a.appendChild(r);
                    }
                    )(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('584')) {
        if (((((tc_vars.nav_pagetype === "thankyou") && (tc_vars.env_template === "checkout")) || (tc_vars.nav_pagetype === "CheckoutPayPalExpress.Thankyou") || ((tc_vars.nav_pagetype === "thankyou") || (tc_vars.nav_pagetype === "CheckoutPayPalExpress.ThankYou") && (tc_vars.env_template === "genericpage"))))) {
            tC.launchTag(584, 'AB Tasty (Builder)', 1823, 5181, 5, 3);
            document.write('<scr' + 'ipt src=' + "//try.abtasty.com/" + "6684f910d2bc7d14165f31517c7d05f6" + ".js" + ' type="text/javascript"></scr' + 'ipt>');
            if (typeof _abtasty != 'undefined') {
                _abtasty.push(['transaction', 'Transaction', tc_vars["order_id"], tc_vars["order_amount_ati_with_sf"]]);
                _abtasty.push(["eco", "Payment Method", tc_vars["order_PaymentType"]]);
                _abtasty.push(["eco", "Shipping Method", tc_vars["order_DeliveryType"]]);
                for (var i = 0; i < tc_vars["order_items"].length; i++) {
                    var product = tc_vars["order_items"][i];
                    _abtasty.push(["eco", "Product Name", product["cart_item_name"]]);
                    _abtasty.push(["eco", "Product SKU", product["cart_item_cod10"]]);
                    _abtasty.push(["eco", "Product Price", product["cart_item_unitprice_ati"]]);
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('610')) {
        if ((tc_vars["nav_countryCode"] == 'FR') || (tc_vars["nav_countryCode"] == 'DE') || (tc_vars["nav_countryCode"] == 'CH') || (tc_vars["nav_countryCode"] == 'GB') || (tc_vars["nav_countryCode"] == 'ES') || (tc_vars["nav_countryCode"] == 'IT') || (tc_vars["nav_countryCode"] == 'NL')) {
            if ((document.location).toString().toLowerCase().indexOf(('thefabulouspage').toLowerCase()) == -1) {
                if ((document.location).toString().toLowerCase().indexOf(('thefabulouscartierjourney').toLowerCase()) == -1) {
                    tC.launchTag(610, 'Cybba - Main', 26, 5181, 5, 3);
                    !function() {
                        var e = document.createElement("script");
                        e.id = "tc_script_610_1";
                        e.type = "text/javascript",
                        e.async = !0,
                        e.src = "//www.rtb123.com/tags/" + tC.internalvars.cybbaID + "/btp.js";
                        var t = document.getElementsByTagName("head")[0];
                        t ? t.appendChild(e, t) : (t = document.getElementsByTagName("script")[0]).parentNode.insertBefore(e, t)
                    }();
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('620')) {
        if ((tc_vars["nav_countryCode"] == 'IT') || (tc_vars["nav_countryCode"] == 'NL') || (tc_vars["nav_countryCode"] == 'FI') || (tc_vars["nav_countryCode"] == 'FR') || (tc_vars["nav_countryCode"] == 'DE') || (tc_vars["nav_countryCode"] == 'CH') || (tc_vars["nav_countryCode"] == 'GB') || (tc_vars["nav_countryCode"] == 'ES')) {
            tC.launchTag(620, 'pepper jam - main', 26, 5181, 5, 3);
            (function() {
                var a = document.createElement("script");
                a.type = "text/javascript",
                a.async = !0,
                a.src = "//container.pepperjam.com/" + tC.internalvars.ric_pepperjam_id + ".js";
                var b = document.getElementsByTagName("head")[0];
                if (b)
                    b.appendChild(a, b);
                else
                    a.id = "tc_script_620_1";
                {
                    var b = document.getElementsByTagName("script")[0];
                    b.parentNode.insertBefore(a, b)
                }
            }
            )();
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('708')) {
        if ((tc_vars["nav_countryCode"] == 'MT') || (tc_vars["nav_countryCode"] == 'FR') || (tc_vars["nav_countryCode"] == 'DE') || (tc_vars["nav_countryCode"] == 'CH') || (tc_vars["nav_countryCode"] == 'GB') || (tc_vars["nav_countryCode"] == 'ES') || (tc_vars["nav_countryCode"] == 'IT') || (tc_vars["nav_countryCode"] == 'NL') || (tc_vars["nav_countryCode"] == 'FI')) {
            if ((document.location).toString().toLowerCase().indexOf(('thefabulouspage').toLowerCase()) == -1) {
                if ((document.location).toString().toLowerCase().indexOf(('thefabulouscartierjourney').toLowerCase()) == -1) {
                    tC.launchTag(708, 'Partnerize - main script', 26, 5181, 5, 3);
                    tC.scriptElt1 = document.createElement("script");
                    tC.scriptElt1.id = "tc_script_708_1";
                    tC.scriptElt1.type = "text/javascript";
                    tC.scriptElt1.src = "https://pzapi-kg.com/b/1100l602/1011l130.js";
                    tC.scriptElt1.async = true;
                    tC.scriptElt1.defer = 'defer';
                    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('710')) {
        if ((tc_vars["nav_countryCode"] == 'FR') || (tc_vars["nav_countryCode"] == 'DE') || (tc_vars["nav_countryCode"] == 'CH') || (tc_vars["nav_countryCode"] == 'GB') || (tc_vars["nav_countryCode"] == 'ES') || (tc_vars["nav_countryCode"] == 'IT') || (tc_vars["nav_countryCode"] == 'NL') || (tc_vars["nav_countryCode"] == 'FI') || (tc_vars["nav_countryCode"] == 'MT')) {
            if (tc_vars["nav_pagetype"] == 'thankyou') {
                tC.launchTag(710, 'Partnerize - campaign', 26, 5181, 5, 3);
                tC.internalvars.p_lineitems = "";
                for (tC.internalvars.tcloopi = 0; tC.internalvars.tcloopi < tc_vars["order_items"].length; tC.internalvars.tcloopi++) {
                    tC.internalvars.p_lineitems += '[category:' + tc_vars["order_items"][tC.internalvars.tcloopi]['order_item_eng_category'] + '/sku:' + tc_vars["order_items"][tC.internalvars.tcloopi]['order_item_skuMfPartNumber'] + '/value:' + tc_vars["order_items"][tC.internalvars.tcloopi]['order_item_unitprice_ati'] + '/quantity:' + tc_vars["order_items"][tC.internalvars.tcloopi]['order_item_quantity'] + ']'
                }
                document.body.innerHTML += "<div id='tc_div_710_1' data-partnerize=" + 'https://prf.hn/conversion' + "/campaign:" + tC.internalvars.ric_Partnerize_id + "/conversionref:" + tc_vars["order_id"] + "/country:" + tc_vars["nav_countryCode"] + "/currency:" + tc_vars["nav_currency"] + "/" + tC.internalvars.p_lineitems + " style='display: none'></div>";
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('713')) {
        if (((document.location).toString().toLowerCase().match(new RegExp(('https\:\/\/www\.cartier\.com\/((en\-gb)|gb)').replace(new RegExp("\\*","g"), ".*"),"gi")))) {
            if ((document.location).toString().toLowerCase().indexOf(('thefabulouspage').toLowerCase()) == -1) {
                if ((document.location).toString().toLowerCase().indexOf(('thefabulouscartierjourney').toLowerCase()) == -1) {
                    if (tc_vars["env_work"] == 'prod') {
                        if ((document.location).toString().toLowerCase().indexOf(('watchesandwonders').toLowerCase()) == -1) {
                            tC.launchTag(713, 'Contentsquare - main tag', 1987, 5181, 5, 3);
                            window._uxa = window._uxa || [];
                            window._uxa.push(['setPath', window.location.pathname + window.location.hash.replace('#', '?__')]);
                            (function() {
                                function setCustomVar(slot, name, value, scope) {
                                    var parsedScope = "";
                                    if (scope) {
                                        var parsedIntScope = parseInt(scope, 10);
                                        if (isNaN(parsedIntScope)) {
                                            parsedScope = scope;
                                        } else {
                                            parsedScope = parsedIntScope;
                                        }
                                        window._uxa.push(['setCustomVariable', slot, name, value, parsedScope]);
                                    } else {
                                        window._uxa.push(['setCustomVariable', slot, name, value]);
                                    }
                                }
                                try {
                                    setCustomVar(1, "pageURI", tc_vars["pguri"], );
                                } catch (e) {}
                                try {
                                    setCustomVar(2, "visitorStatus", tc_vars["user_logged"], );
                                } catch (e) {}
                                try {
                                    setCustomVar(3, "userID", tC.internalvars.UserId, );
                                } catch (e) {}
                                try {
                                    setCustomVar(4, "Country", tc_vars["nav_countryCode"], );
                                } catch (e) {}
                                try {
                                    setCustomVar(5, "Language", tc_vars["nav_languageCode"], );
                                } catch (e) {}
                                try {
                                    setCustomVar(6, "msn_cgGroup", tc_vars["msn_cgGroup"], );
                                } catch (e) {}
                                try {
                                    setCustomVar(7, "rcms_cgGroup", tc_vars["rcms_cgGroup"], );
                                } catch (e) {}
                                try {
                                    setCustomVar(8, "pageType", tc_vars["nav_pagetype"], );
                                } catch (e) {}
                                try {
                                    setCustomVar(9, "currencyCode", tc_vars["nav_currency"], );
                                } catch (e) {}
                                try {
                                    setCustomVar(10, "trnPaymentType", tc_vars["order_PaymentType"], );
                                } catch (e) {}
                                try {
                                    setCustomVar(11, "trnShippingMethod", tc_vars["order_DeliveryType"], );
                                } catch (e) {}
                                try {
                                    setCustomVar(12, "checkoutStep", tC.internalvars.GA_step, );
                                } catch (e) {}
                                try {
                                    setCustomVar(15, "InternalTraffic", tC.internalvars.internalTraffic, );
                                } catch (e) {}
                                try {
                                    setCustomVar(16, "collection", tc_vars["product_collection"], );
                                } catch (e) {}
                                try {
                                    setCustomVar(17, "category", tc_vars["product_category"], );
                                } catch (e) {}
                                try {
                                    setCustomVar(18, "productVertical", tc_vars["product_line"], );
                                } catch (e) {}
                                try {
                                    setCustomVar(19, "id_name", tC.internalvars.IdAndName, );
                                } catch (e) {}
                            }
                            )();
                            (function() {
                                var mt = document.createElement("script");
                                mt.type = "text/javascript";
                                mt.async = true;
                                mt.id = "tc_script__1";
                                mt.src = "//t.contentsquare.net/uxa/c8300b8d8ddb9.js";
                                document.getElementsByTagName("head")[0].appendChild(mt);
                            }
                            )();
                        }
                    }
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('715')) {
        if ((tc_vars["nav_pagetype"] == 'thankyou' && tc_vars["nav_countryCode"] == 'GB')) {
            if (tc_vars["env_work"] == 'prod') {
                tC.launchTag(715, 'Contentsquare - transaction tag', 1987, 5181, 5, 3);
                tC.template = {};
                tC.checkIfDefined = function(parameter) {
                    if (typeof parameter == "undefined") {
                        return "";
                    } else {
                        return parameter;
                    }
                }
                ;
                window._uxa = _uxa || [];
                window._uxa.push(['ecommerce:addTransaction', {
                    'id': tc_vars["order_id"],
                    'revenue': tc_vars["order_amount_ati_with_sf"],
                    'shipping': tc_vars["order_shipping"],
                    'tax': tc_vars["order_tax"]
                }]);
                try {
                    var items = tc_vars["order_items"];
                    for (var i = 0; i < items.length; i++) {
                        var item = items[i];
                        window._uxa.push(['ecommerce:addItem', {
                            'id': tc_vars["order_id"] || "Empty transaction ID",
                            'name': tC.checkIfDefined(item["order_item_eng_title"]) || "Empty name",
                            'sku': tC.checkIfDefined(item["order_item_mfPartNumber"]),
                            'category': tC.checkIfDefined(item["order_item_eng_microcategory"]),
                            'price': tC.checkIfDefined(item["order_item_discount_ati"]) || "0.00",
                            'quantity': tC.checkIfDefined(item["order_item_quantity"]) || "0"
                        }]);
                    }
                } catch (e) {}
                window._uxa.push(['ecommerce:send']);
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('836')) {
        if ((tc_vars["nav_countryCode"] == 'CH')) {
            tC.launchTag(836, 'Batch - unregister', 1867, 5181, 5, 3);
            if (navigator.serviceWorker) {
                navigator.serviceWorker.getRegistrations().then(registrations => {
                    registrations.forEach(registration => {
                        if (registration.active && registration.active.scriptURL.includes('batchsdk-worker-loader.js')) {
                            registration.unregister();
                        }
                    }
                    );
                }
                ).catch( () => {}
                )
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('881')) {
        if ((document.location).toString().toLowerCase().indexOf(('thefabulouspage').toLowerCase()) == -1) {
            if ((document.location).toString().toLowerCase().indexOf(('thefabulouscartierjourney').toLowerCase()) == -1) {
                tC.launchTag(881, 'Pixlee - main', 26, 5181, 5, 3);
                eval(tC.inclusion_pixlee_events_1);
                if (typeof Pixlee_Analytics !== 'undefined') {
                    pixlee_analytics = new Pixlee_Analytics("K0B3CUX5AHPjcMBv2m9g");
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('880')) {
        if (tc_vars["nav_pagetype"] == 'thankyou') {
            tC.launchTag(880, 'Pixlee - Purchase', 26, 5181, 5, 3);
            if (typeof pixlee_analytics !== 'undefined') {
                var tabOrder = [];
                for (var i = 0; i < tc_vars["order_items"].length; i++) {
                    product_sku_prefix = tc_vars["order_items"][i].order_item_skuMfPartNumber.slice(2);
                    tabOrder.push({
                        price: tc_vars["order_items"][i].order_item_unitprice_ati,
                        product_sku: "ID_" + product_sku_prefix,
                        quantity: tc_vars["order_items"][i].order_item_quantity
                    });
                }
                pixlee_analytics.events.trigger('converted:photo', {
                    'cart_contents': tabOrder,
                    'order_id': tc_vars["order_id"],
                    'cart_total_quantity': tc_vars["order_items"].length,
                    'cart_total': tc_vars["order_amount_ati_with_sf"],
                    'currency': tc_vars["nav_currency"]
                });
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('930')) {
        if ((tc_vars["nav_countryCode"] == 'IT' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'DK') || (tc_vars["nav_countryCode"] == 'AT' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'BE' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'BG' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'CZ' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'DE' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'DK' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'ES' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'FI' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'FR' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'GR' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'HR' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'HU' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'LT' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'LU' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'MC' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'MT' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'NL' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'PL' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'PT' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'RO' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'SE' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'SK' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'FR') || (tc_vars["nav_countryCode"] == 'DE') || (tc_vars["nav_countryCode"] == 'CH') || (tc_vars["nav_countryCode"] == 'GB') || (tc_vars["nav_countryCode"] == 'ES') || (tc_vars["nav_countryCode"] == 'IT') || (tc_vars["nav_countryCode"] == 'NL') || (tc_vars["nav_countryCode"] == 'FI') || (tc_vars["nav_countryCode"] == 'CH' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'MT') || (tc_vars["nav_countryCode"] == 'BE') || (tc_vars["nav_countryCode"] == 'HR') || (tc_vars["nav_countryCode"] == 'CZ') || (tc_vars["nav_countryCode"] == 'GR') || (tc_vars["nav_countryCode"] == 'HU') || (tc_vars["nav_countryCode"] == 'IE') || (tc_vars["nav_countryCode"] == 'LT') || (tc_vars["nav_countryCode"] == 'LU') || (tc_vars["nav_countryCode"] == 'MC') || (tc_vars["nav_countryCode"] == 'AT') || (tc_vars["nav_countryCode"] == 'PL') || (tc_vars["nav_countryCode"] == 'PT') || (tc_vars["nav_countryCode"] == 'RO') || (tc_vars["nav_countryCode"] == 'SK') || (tc_vars["nav_countryCode"] == 'SE') || (tc_vars["nav_countryCode"] == 'BG')) {
            if ((document.location).toString().toLowerCase().indexOf(('trinity100').toLowerCase()) == -1) {
                if ((document.location).toString().toLowerCase().indexOf(('watchesandwonders').toLowerCase()) == -1) {
                    tC.launchTag(930, 'Avatar - Main', 26, 5181, 5, 3);
                    window._inside = window._inside || [];
                    var chatLoaded = false;
                    var chatRequested = false;
                    window._inside.push({
                        "action": "bind",
                        "name": "chatavailable",
                        "callback": function(available) {
                            chatLoaded = true;
                            if (available) {
                                if (chatRequested)
                                    insideFrontInterface.openChatPane();
                            } else {}
                            chatRequested = false;
                        }
                    });
                    var openChatButtonClick = function() {
                        if (chatLoaded)
                            insideFrontInterface.openChatPane();
                        else
                            chatRequested = true;
                        return false;
                    };
                    var url = '';
                    if (tc_vars["env_work"] == "prod") {
                        url = "https://cdn5.eu.inside.chat/gtm/IN-1008001-CAR/include.js";
                    } else if (tc_vars["env_work"] == "test") {
                        url = "https://cdn-sandbox5.us.inside.chat/gtm/IN-1001072-CAR/include.js";
                    }
                    (function(u, t, d) {
                        var i = d.createElement(t);
                        i.type = 'text/javascript';
                        i.async = true;
                        i.src = u;
                        var s = d.getElementsByTagName(t)[0];
                        s.parentNode.insertBefore(i, s);
                    }
                    )(url, 'script', document);
                    var _inside = _inside || [];
                    _inside.push({
                        "action": "bind",
                        "name": "googleAnalytics",
                        "callback": function(event) {
                            dataLayer.push({
                                "event": "insideEvent",
                                "insideEventCategory": event.category,
                                "insideEventAction": event.action,
                                "insideEventLabel": event.label,
                                "insideEventValue": 0,
                                "insideEventNI": true,
                            });
                        }
                    });
                }
            }
        }
    }
}
if (tC.getCookie(tC.privacy.getCN()) != '') {
    if (tC.privacy.validRules('931')) {
        if ((tc_vars["nav_countryCode"] == 'BE') || (tc_vars["nav_countryCode"] == 'HR') || (tc_vars["nav_countryCode"] == 'CZ') || (tc_vars["nav_countryCode"] == 'GR') || (tc_vars["nav_countryCode"] == 'HU') || (tc_vars["nav_countryCode"] == 'IE') || (tc_vars["nav_countryCode"] == 'LT') || (tc_vars["nav_countryCode"] == 'LU') || (tc_vars["nav_countryCode"] == 'MC') || (tc_vars["nav_countryCode"] == 'AT') || (tc_vars["nav_countryCode"] == 'PL') || (tc_vars["nav_countryCode"] == 'PT') || (tc_vars["nav_countryCode"] == 'RO') || (tc_vars["nav_countryCode"] == 'SK') || (tc_vars["nav_countryCode"] == 'SE') || (tc_vars["nav_countryCode"] == 'BG') || (tc_vars["nav_countryCode"] == 'FR') || (tc_vars["nav_countryCode"] == 'DE') || (tc_vars["nav_countryCode"] == 'CH') || (tc_vars["nav_countryCode"] == 'GB') || (tc_vars["nav_countryCode"] == 'ES') || (tc_vars["nav_countryCode"] == 'IT') || (tc_vars["nav_countryCode"] == 'NL') || (tc_vars["nav_countryCode"] == 'FI') || (tc_vars["nav_countryCode"] == 'IT' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'CH' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'MT') || (tc_vars["nav_countryCode"] == 'AT' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'BE' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'BG' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'CZ' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'DE' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'DK' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'ES' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'FI' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'FR' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'GR' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'HR' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'HU' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'LT' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'LU' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'MC' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'MT' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'NL' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'PL' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'PT' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'RO' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'SE' && tc_vars["env_work"] == 'test') || (tc_vars["nav_countryCode"] == 'SK' && tc_vars["env_work"] == 'test')) {
            tC.launchTag(931, 'Avatar -_insideData object', 26, 5181, 5, 3);
            var _sfmcID;
            var _userID;
            var pattern = /not-set|_not-set_/;
            if (pattern.test(tc_vars["sfmc_id"])) {
                _sfmcID = null
            } else {
                _sfmcID = tc_vars["sfmc_id"]
            }
            ;if (pattern.test(tc_vars["user_Id"])) {
                _userID = null
            } else {
                _userID = tc_vars["user_Id"]
            }
            ;var _insideData = _insideData || [];
            _insideData = {
                page: {
                    name: tc_vars["pguri"],
                    type: tc_vars["nav_pagetype"]
                },
                user: {
                    sfmc: _sfmcID,
                    user_id: _userID
                },
                website: {
                    country: tc_vars["nav_countryCode"],
                    currency: tc_vars["nav_currency"],
                    language: tc_vars["nav_languageCode"]
                }
            };
            if (tc_vars["nav_pagetype"]) {
                if (/item/i.test(tc_vars["nav_pagetype"].toLowerCase())) {
                    _insideData.product = {
                        name: tc_vars["product_eng_title"],
                        sku: tc_vars["product_cod10"],
                        price: tc_vars["product_discount_ati"],
                        category: tc_vars["product_eng_micro"]
                    }
                }
            }
            ;if (tc_vars["order_id"] !== "" && tc_vars["order_amount_ati_with_sf"] !== "") {
                _insideData.order = {
                    id: tc_vars["order_id"],
                    shipping: tc_vars["order_shipping"],
                    tax: tc_vars["order_tax"],
                    total: tc_vars["order_amount_ati_with_sf"]
                }
            }
            if (tc_vars.cart_items !== "_not-set_" && tc_vars.cart_items !== null && tc_vars.cart_items.length > 0) {
                var rafCart = [];
                for (var i = tc_vars.cart_items.length - 1; i > -1; i--) {
                    rafCart[i] = {},
                    rafCart[i].category = tc_vars.cart_items[i].cart_item_eng_category,
                    rafCart[i].price = tc_vars.cart_items[i].cart_item_unitprice_ati,
                    rafCart[i].qty = tc_vars.cart_items[i].cart_item_quantity,
                    rafCart[i].sku = tc_vars.cart_items[i].cart_item_cod10
                }
                ;if (tc_vars["cart_total"] !== "_not-set_" && tc_vars["cart_total"] !== null) {
                    var rafCartTotal = tc_vars["cart_total"]
                }
                _insideData.cart = {
                    items: rafCart,
                    total: tc_vars["cart_total"]
                };
            }
            ;
        }
    }
}
function tc_events_5(tc_elt, tc_id_event, tc_array_events) {
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
        if (tC.privacy.validRules('E239')) {
            if (tc_array_events["id"] == 'SalesforceChatRedirection') {
                tC.launchTag('eSalesforceChatRedirection', 'TEST - salesforce redirection event', '-1', '5181', '5');
                hero("hide");
                hero("shutdown");
                var mySalesForcestyle = document.createElement('style');
                mySalesForcestyle.type = 'text/css';
                mySalesForcestyle.innerHTML = '.embeddedServiceHelpButton .helpButton .uiButton { background-color: #C10016 !important; font-family: "Arial", sans-serif !important;display: none !important; }' + '.embeddedServiceHelpButton .helpButton .uiButton:focus { outline: 1px solid #C10016; }' + '.embeddedServiceHelpButton .helpButton .uiButton.helpButtonDisabled { display: none !important; }' + '.message { background-color: transparent; border-style: none; border-width: 0; color: white; padding: 0; margin: 0; }' + '.embeddedServiceHelpButton .uiButton { max-width: 30em !important; }' + '.embeddedServiceSidebarMinimizedDefaultUI, .embeddedServiceSidebarMinimizedDefaultUI.helpButton { background: #C10016 }';
                document.getElementsByTagName('head')[0].appendChild(mySalesForcestyle);
                var initESW = function(gslbBaseURL) {
                    embedded_svc.settings.displayHelpButton = true;
                    embedded_svc.settings.language = 'fr';
                    embedded_svc.settings.defaultMinimizedText = 'Bienvenue chez Cartier. Comment pouvons-nous vous aider?';
                    embedded_svc.settings.disabledMinimizedText = 'Nous Contacter';
                    embedded_svc.settings.loadingText = 'Chargement en cours';
                    embedded_svc.settings.offlineSupportMinimizedText = 'Nous Contacter';
                    embedded_svc.settings.enabledFeatures = ['LiveAgent'];
                    embedded_svc.settings.entryFeature = 'LiveAgent';
                    embedded_svc.addEventHandler("onChatRequestSuccess", function(data) {
                        window.tc_events_19(this, 'openLivechat', {
                            'livechatId': 'France',
                            'advisorId': data.liveAgentSessionKey
                        })
                        tC.log("onChatRequestSuccess event was fired, mapped as openLivechat. liveAgentSessionKey was " + data.liveAgentSessionKey + ", France ChatId:5731j0000008S1U");
                    });
                    embedded_svc.addEventHandler("onChatEndedByAgent", function(data) {
                        window.tc_events_19(this, 'onChatEndedByAgent', {
                            'livechatId': 'France',
                            'advisorId': data.liveAgentSessionKey
                        })
                        tC.log("onChatEndedByAgent event was fired. liveAgentSessionKey was " + data.liveAgentSessionKey + ", France ChatId:5731j0000008S1U");
                    });
                    embedded_svc.addEventHandler("onChatEndedByChasitor", function(data) {
                        window.tc_events_19(this, 'onChatEndedByChasitor', {
                            'livechatId': 'France',
                            'advisorId': data.liveAgentSessionKey
                        })
                        tC.log("onChatEndedByChasitor event was fired. liveAgentSessionKey was " + data.liveAgentSessionKey + ", France ChatId:5731j0000008S1U");
                    });
                    embedded_svc.addEventHandler("onChasitorMessage", function(data) {
                        window.tc_events_19(this, 'onChasitorMessage', {
                            'livechatId': 'France',
                            'advisorId': data.liveAgentSessionKey
                        })
                        tC.log("onChasitorMessage event was fired. liveAgentSessionKey was " + data.liveAgentSessionKey + ", France ChatId:5731j0000008S1U");
                    });
                    embedded_svc.addEventHandler("onAgentMessage", function(data) {
                        window.tc_events_19(this, 'onAgentMessage', {
                            'livechatId': 'France',
                            'advisorId': data.liveAgentSessionKey
                        })
                        tC.log("onAgentMessage event was fired. liveAgentSessionKey was " + data.liveAgentSessionKey + ", France ChatId:5731j0000008S1U");
                    });
                    embedded_svc.addEventHandler("afterDestroy", function(data) {
                        window.tc_events_19(this, 'closeLivechat', {
                            'livechatId': 'France'
                        })
                        hero("show");
                        tC.log("afterDestroy event was fired, mapped as closeLivechat");
                        if (observer != null) {
                            observer.disconnect();
                        }
                    });
                    embedded_svc.addEventHandler("onConnectionError", function(data) {
                        window.tc_events_19(this, 'onConnectionError', {
                            'livechatId': 'France',
                            'advisorId': data.liveAgentSessionKey
                        })
                        tC.log("onConnectionError event was fired. liveAgentSessionKey was " + data.liveAgentSessionKey + ", France ChatId:5731j0000008S1U");
                    });
                    embedded_svc.addEventHandler("afterMaximize", function(data) {
                        window.tc_events_19(this, 'afterMaximize', {
                            'livechatId': 'France',
                            'advisorId': data.liveAgentSessionKey
                        })
                        tC.log("afterMaximize event was fired");
                        setTimeout(function() {
                            var button = document.getElementsByClassName("dialogButton")[0];
                            if (button != null) {
                                var childNodes = button.childNodes;
                                childNodes.forEach(function(child) {
                                    if (child.innerText != null && child.innerText.toLowerCase() == 'compris') {
                                        child.onclick = function() {
                                            location.href = "http://www.cartier.com";
                                        }
                                        ;
                                        child.innerText = 'Nous Contacter';
                                    }
                                });
                            }
                        }, 0);
                        var targetNode = document.getElementsByClassName("embeddedServiceSidebar")[0];
                        var config = {
                            attributes: true,
                            childList: true,
                            subtree: true
                        };
                        if (observer != null) {
                            observer.disconnect();
                        }
                        observer = new MutationObserver(observerCallback);
                        observer.observe(targetNode, config);
                    });
                    embedded_svc.addEventHandler("afterMinimize", function(data) {
                        if (observer != null) {
                            observer.disconnect();
                        }
                    });
                    embedded_svc.addEventHandler("onSettingsCallCompleted", function(data) {
                        tC.log("onSettingsCallCompleted event was fired. Agent availability status is " + data.isAgentAvailable ? "online" : "offline");
                        embedded_svc.liveAgentAPI.startChat({
                            directToAgentRouting: {
                                buttonId: "",
                                fallback: true
                            },
                            extraPrechatInfo: [],
                            extraPrechatFormDetails: []
                        });
                    });
                    embedded_svc.init('https://richemont--validation.my.salesforce.com', 'https://validation-richemont.cs102.force.com', gslbBaseURL, '00D1j0000002JHy', 'RICCRC_Chat_FR', {
                        baseLiveAgentContentURL: 'https://c.la1-c1cs-fra.salesforceliveagent.com/content',
                        deploymentId: '5721i000000GqQD',
                        buttonId: '5731j0000008S1U',
                        baseLiveAgentURL: 'https://d.la1-c1cs-fra.salesforceliveagent.com/chat',
                        eswLiveAgentDevName: 'RICCRC_Chat_FR_EmbeddedServiceLiveAgent',
                        isOfflineSupportEnabled: true
                    });
                };
                if (!window.embedded_svc) {
                    var s = document.createElement('script');
                    s.setAttribute('src', 'https://richemont--validation.my.salesforce.com/embeddedservice/5.0/esw.min.js');
                    s.onload = function() {
                        initESW(null);
                    }
                    ;
                    document.body.appendChild(s);
                } else {
                    initESW('https://service.force.com');
                }
                var observer = null;
                var observerCallback = function(mutationsList, observer) {
                    if (mutationsList != null) {
                        var embeddedSidebarButtons = document.getElementsByClassName("dialogButton");
                        for (var i = 0; i < embeddedSidebarButtons.length; i++) {
                            var button = embeddedSidebarButtons.item(i);
                            if (button != null) {
                                var childNodes = button.childNodes;
                                childNodes.forEach(function(child) {
                                    if (child.innerText != null && child.innerText.toLowerCase() == 'quitter le chat') {
                                        child.onclick = function() {
                                            location.href = "http://www.cartier.com";
                                        }
                                        ;
                                        child.innerText = 'Nous Contacter';
                                    } else if (child.innerText != null && child.innerText.toLowerCase() == 'démarrer un nouveau chat') {
                                        button.style.display = 'none';
                                    }
                                });
                            }
                        }
                    }
                };
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E264')) {
            if (tc_array_events["id"] == 'virtualPageview_textsearch') {
                tC.launchTag('evirtualPageview_textsearch', 'contentsquare virtualPageview_textsearch', '-1', '5181', '5');
                if (tc_vars["nav_countryCode"] === "GB") {
                    window._uxa = window._uxa || [];
                    window._uxa.push(['trackPageview', tc_array_events["pgURI"]]);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E266')) {
            if (tc_array_events["id"] == 'virtualPageview_popin') {
                tC.launchTag('evirtualPageview_popin', 'contentsquare virtualPageview_popin', '-1', '5181', '5');
                if (tc_vars["nav_countryCode"] === "GB") {
                    window._uxa = window._uxa || [];
                    window._uxa.push(['trackPageview', tc_array_events["pguri"]]);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E268')) {
            if (tc_array_events["id"] == 'virtualPageView_opc') {
                tC.launchTag('evirtualPageView_opc', 'contentsquare virtualPageView_opc', '-1', '5181', '5');
                if (tc_vars["nav_countryCode"] === "GB") {
                    window._uxa = window._uxa || [];
                    window._uxa.push(['trackPageview', '/' + tc_vars["nav_languageCode"] + '_' + tc_vars["nav_countryCode"].toLowerCase() + tc_array_events["pguri"]]);
                }
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E357')) {
            if (tc_array_events["id"] == 'enh_removecart') {
                tC.launchTag('eenh_removecart', 'Batch - emptied cart', '-1', '5181', '5');
                tC.event.new_rmovecart(this, {});
            }
        }
    }
    if (tC.getCookie(tC.privacy.getCN()) != '') {
        if (tC.privacy.validRules('E360')) {
            if (tc_array_events["id"] == 'enh_addwishlist') {
                tC.launchTag('eenh_addwishlist', 'Batch - wishlist', '-1', '5181', '5');
                batchSDK(function(api) {
                    api.trackEvent("added_item_wishlist", {
                        attributes: {
                            "product_name": tc_array_events["prdname"],
                            "collection": tc_array_events.dataSt.prdcategory,
                            "product_id": tC.internalvars.getID(tc_array_events["productSkuMfPartNumber"]),
                            type: api.eventAttributeTypes.URL,
                            value: tc_vars["nav_page"]
                        }
                    });
                })
            }
        }
    }
}
tC.onDomReady(function() {
    tC.container_5181_5.eventlisteners();
    tC.eventTarget.dispatchEvent('container-ready');
    tC.eventTarget.dispatchEvent('container_5181_5_ready');
});
