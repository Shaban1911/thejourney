/*
 * tagContainer Generator v67
 * Copyright Commanders Act
 * https://www.commandersact.com/fr/
 * Generated: 2021-12-20 14:32:26 Europe/Paris
 * ---
 * Version	: 1.16
 * IDTC 	: 25
 * IDS		: 5181
 */
/*!compressed by terser*/
"undefined" == typeof tC && (void 0 !== document.domain && void 0 !== document.referrer || (document = window.document),
function(t, e) {
    var n, r = t.document, i = t.location, a = (t.navigator,
    t.tC,
    t.$,
    Array.prototype.push,
    Array.prototype.slice,
    Array.prototype.indexOf,
    Object.prototype.toString), o = (Object.prototype.hasOwnProperty,
    String.prototype.trim,
    function(t, e) {
        return new o.fn.init(t,e,n)
    }
    ), c = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, s = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, d = {};
    o.containerStart = o.containerStart || Date.now(),
    o.fn = o.prototype = {
        constructor: o,
        init: function(t, e, n) {
            var i, a, d;
            if (!t)
                return this;
            if (t.nodeType)
                return this.context = this[0] = t,
                this.length = 1,
                this;
            if ("string" == typeof t) {
                if (!(i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : c.exec(t)) || !i[1] && e)
                    return !e || e.tC ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1])
                    return d = (e = e instanceof o ? e[0] : e) && e.nodeType ? e.ownerDocument || e : r,
                    t = o.parseHTML(i[1], d, !0),
                    s.test(i[1]) && o.isPlainObject(e) && this.attr.call(t, e, !0),
                    o.merge(this, t);
                if ((a = r.getElementById(i[2])) && a.parentNode) {
                    if (a.id !== i[2])
                        return n.find(t);
                    this.length = 1,
                    this[0] = a
                }
                return this.context = r,
                this.selector = t,
                this
            }
            return o.isFunction(t) ? n.ready(t) : (undefined !== t.selector && (this.selector = t.selector,
            this.context = t.context),
            o.makeArray(t, this))
        },
        each: function(t, e) {
            return o.each(this, t, e)
        },
        ready: function(t) {
            return o.ready.promise(t),
            this
        }
    },
    o.fn.init.prototype = o.fn,
    o.extend = o.fn.extend = function() {
        var t, e, n, r, i, a, c = arguments[0] || {}, s = 1, d = arguments.length, p = !1;
        for ("boolean" == typeof c && (p = c,
        c = arguments[1] || {},
        s = 2),
        "object" == typeof c || o.isFunction(c) || (c = {}),
        d === s && (c = this,
        --s); s < d; s++)
            if (null != (t = arguments[s]))
                for (e in t)
                    n = c[e],
                    c !== (r = t[e]) && (p && r && (o.isPlainObject(r) || (i = o.isArray(r))) ? (i ? (i = !1,
                    a = n && o.isArray(n) ? n : []) : a = n && o.isPlainObject(n) ? n : {},
                    c[e] = o.extend(p, a, r)) : undefined !== r && (c[e] = r));
        return c
    }
    ,
    o.extend({
        ssl: "https://manager.",
        randOrd: function() {
            return Math.round(Math.random()) - .5
        },
        nodeNames: "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        rnocache: /<(?:script|object|embed|option|style)/i,
        rnoshimcache: new RegExp("<(?:" + o.nodeNames + ")[\\s/>]","i"),
        rchecked: /checked\s*(?:[^=]|=\s*.checked.)/i,
        containersLaunched: {}
    }),
    o.extend({
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
            return "function" === o.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === o.type(t)
        }
        ,
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        },
        type: function(t) {
            return null == t ? String(t) : d[a.call(t)] || "object"
        },
        each: function(t, e, n) {
            var r, i = 0, a = t.length, c = undefined === a || o.isFunction(t);
            if (n)
                if (c) {
                    for (r in t)
                        if (!1 === e.apply(t[r], n))
                            break
                } else
                    for (; i < a && !1 !== e.apply(t[i++], n); )
                        ;
            else if (c) {
                for (r in t)
                    if (!1 === e.call(t[r], r, t[r]))
                        break
            } else
                for (; i < a && !1 !== e.call(t[i], i, t[i++]); )
                    ;
            return t
        },
        log: function(t, e) {
            try {
                o.getCookie("tCdebugLib") && console && console[e || "log"](t)
            } catch (t) {}
        }
    }),
    o.each("Boolean Number String Function Array Date RegExp Object".split(" "), (function(t, e) {
        d["[object " + e + "]"] = e.toLowerCase()
    }
    )),
    n = o(r);
    o.buildFragment = function(t, e, n) {
        var i, a, c, s = t[0];
        return e = (e = !(e = e || r).nodeType && e[0] || e).ownerDocument || e,
        !(1 === t.length && "string" == typeof s && s.length < 512 && e === r && "<" === s.charAt(0)) || o.rnocache.test(s) || !o.support.checkClone && o.rchecked.test(s) || !o.support.html5Clone && o.rnoshimcache.test(s) || (a = !0,
        c = undefined !== (i = jQuery.fragments[s])),
        i || (i = e.createDocumentFragment(),
        o.clean(t, e, i, n),
        a && (o.fragments[s] = c && i)),
        {
            fragment: i,
            cacheable: a
        }
    }
    ;
    var p = i.hostname
      , u = p.split(".");
    u.length < 2 || p.match("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$") ? o.maindomain = p : o.maindomain = u[u.length - 2] + "." + u[u.length - 1],
    t.tC = o
}(window)),
tC.extend({
    internalvars: void 0 !== tC.internalvars ? tC.internalvars : {},
    internalFunctions: void 0 !== tC.internalFunctions ? tC.internalFunctions : {},
    privacyVersion: tC.privacyVersion || "",
    containerVersion: String(1.16),
    id_container: String(25),
    id_site: String(5181),
    generatorVersion: "1.0.0",
    dedup_done: void 0 !== tC.dedup_done && tC.dedup_done
}),
function() {
    var t = {};
    t.internalvars_5181 = void 0 !== tC.internalvars_5181 ? tC.internalvars_5181 : {},
    tC.extend(t)
}(),
window.tC_5181_25 = {
    id_container: String(25),
    id_site: String(5181),
    frequency: String(530),
    containerVersion: String(1.16),
    generatorVersion: 67
},
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
void 0 === tC.containersLaunched[5181] && (tC.containersLaunched[5181] = {}),
tC.containersLaunched[5181][25] = {
    v: String(1.16),
    t: [],
    g: 67
},
tC.coreReadyStandalone = !0,
tC.isDOMReady && (tC.coreReadyStandalone = !1),
tC.domReady = tC.domReady || !1,
tC.isDOMReady = tC.isDOMReady || function() {
    if ("complete" == document.readyState || "loaded" == document.readyState)
        return !0;
    if ("interactive" != document.readyState)
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
        document.documentElement.doScroll && window == window.top && function() {
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
        t.cactUtils = {},
        t.cactInfo = {
            apiVersion: 2
        };
        var e = function() {}
          , n = function(e) {
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
        };
        t.cactUtils.formatArgumentsV2 = function(t) {
            var n = {}
              , r = 0;
            return "string" == typeof t[r] && (n.event = t[r++]),
            "object" == typeof t[r] && (n.properties = t[r++]),
            "object" == typeof t[r] && (n.config = t[r++]),
            "function" == typeof t[r] && (n.callback = t[r++]),
            n.properties = n.properties || {},
            n.config = n.config || {},
            n.callback = n.callback || e,
            n
        }
        ;
        var r = function(t) {
            var n, r;
            return "object" == typeof t[1] ? (n = t[1],
            r = t[2]) : "function" == typeof t[1] ? (n = {},
            r = t[1]) : n = {},
            n.event = t[0],
            n.callback = r || e,
            n
        };
        t.cact.exec = function() {
            for (var e = 0; e < window.caReady.length; ++e)
                n(window.caReady[e]);
            var r = t.cactUtils.formatArgumentsV2(arguments);
            r && r.callback && r.callback()
        }
        ;
        Object.defineProperty(window.caReady, "push", {
            configurable: !0,
            value: function(t) {
                Array.prototype.push.call(window.caReady, t),
                n(t)
            }
        }),
        t.cact.exec()
    }
}(),
function() {
    "use strict";
    tC.cact.trigger = function() {
        var t = tC.cactUtils.formatArgumentsV2(arguments)
          , e = t.event
          , n = t.properties
          , r = t.config
          , i = t.callback;
        if ("string" == typeof e && "" !== e)
            return tC.trigger({
                event: e,
                properties: n,
                config: r
            }),
            i(),
            tC.uniqueEventIndex
    }
    ,
    tC.cact.trigger._tc_version = 2
}(),
tC.extend({
    isCurrentVersion: function() {
        if (1 == tC.bypassBookmarklet)
            return !0;
        var t = tC.getCookie("tc_mode_test");
        return "1" != t || "1" == t && !1
    }
}),
tC.pixelTrack = tC.pixelTrack || {
    add: function(t, e) {
        t = t || 0,
        e = e || "img",
        tC.onDomReady((function() {
            var n;
            "iframe" == e ? ((n = document.createElement(e)).src = t,
            n.width = 1,
            n.height = 1,
            n.style.display = "none",
            document.body.appendChild(n)) : (n = new Image).src = t
        }
        ))
    }
},
tC.tc_hdoc = tC.tc_hdoc || !1,
tC.domain || (tC.domain = function(t) {
    t = t > 2 ? t : 2;
    try {
        this.tc_hdoc = tC.isCrossDomainContext() ? window.document : window.top.document;
        var e = void 0 !== this.tc_hdoc.domain && this.tc_hdoc.domain.toLowerCase().split(".")
          , n = e.length;
        return n < 2 || this.tc_hdoc.domain.match("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$") ? "" : (-1 !== ["co", "com"].indexOf(e[n - 2]) && (t += 1),
        t > n ? "" : "." + e.slice(n - t, n).join("."))
    } catch (t) {
        tC.log(["tC.domain error : ", t], "warn")
    }
}
,
tC.isSubdomain = function(t) {
    return t && "." === t[0] && (t = t.substr(1, t.length - 1)),
    new RegExp(t + "$").test(tC.tc_hdoc.domain)
}
,
tC.isCrossDomainContext = function() {
    try {
        return window.top.document,
        !1
    } catch (t) {
        return !0
    }
}
,
tC.domain()),
tC.setCookie = tC.setCookie || function(t, e, n, r, i, a, o) {
    var c = !1;
    i || (c = !0,
    i = tC.domain()),
    tC.cookieForceSameSite = tC.cookieForceSameSite || "",
    o = o || tC.cookieForceSameSite;
    var s = tC.isSubdomain(i);
    o || (o = s ? "Lax" : "None"),
    tC.isCrossDomainContext() && (o = "None"),
    tC.cookieForceSecure = null != tC.cookieForceSecure ? tC.cookieForceSecure : "",
    a = null == a ? Boolean(Number(tC.cookieForceSecure)) : a,
    "none" === o.toLowerCase() && (a = !0);
    var d = new Date;
    d.setTime(d.getTime()),
    n && (n = 1e3 * n * 60 * 60 * 24);
    var p = new Date(d.getTime() + n)
      , u = !0
      , l = 3;
    do {
        var C = t + "=" + escape(e) + (n ? ";expires=" + p.toGMTString() : "") + (r ? ";path=" + r : ";path=/") + (i ? ";domain=" + i : "") + (a ? ";secure" : "") + ";SameSite=" + o;
        document.cookie = C,
        u = -1 === document.cookie.indexOf(t + "="),
        i = tC.domain(l++)
    } while (c && u && i && s)
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
    return n ? unescape(n[1]) : ""
}
,
tC.isCookieEnabled = function() {
    if (navigator.cookieEnabled && -1 === window.navigator.userAgent.indexOf("MSIE"))
        return !0;
    document.cookie = "tc_cookietest=1;";
    var t = -1 !== document.cookie.indexOf("tc_cookietest=");
    return document.cookie = "tc_cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",
    t
}
,
tC.removeCookie = tC.removeCookie || function(t, e) {
    this.setCookie(t, "", -1, "/", e)
}
,
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
        dispatchEvent: function(t) {
            var e;
            "string" != typeof t ? e = t : (e = document.createEvent("Event")).initEvent(t, !0, !0),
            this._eventTarget.dispatchEvent(e)
        }
    }
}(),
function() {
    "use strict";
    tC.uniqueEventIndex = tC.uniqueEventIndex || 0,
    tC.triggeredEvents = tC.triggeredEvents || [],
    tC.trigger = function(t) {
        var e = t.event
          , n = t.properties || {}
          , r = t.config || {};
        for (tC.uniqueEventIndex++,
        tC.uniqueEventId = String(Date.now()).slice(2) + Math.round(1e13 * Math.random()); tC.uniqueEventId.length < 24; )
            tC.uniqueEventId = tC.uniqueEventId + "0";
        var i = r.siteId || r.idSite || tC.id_site
          , a = "https://" + (r.collectionDomain || window.tC_collect_dns || "collect.commander1.com") + "/events?tc_s=" + i;
        if (n.user = n.user || {},
        !n.user.consent_categories) {
            var o = [];
            "privacy"in tC && (o = "getValidCategories"in tC.privacy ? tC.privacy.getValidCategories() : tC.privacy.getOptinCategories());
            var c = tC.getCookie(tC.privacy && tC.privacy.getCN() || "TC_PRIVACY");
            /ALL/.test(c) && (o = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]),
            n.user.consent_categories = o
        }
        switch (n.revenue && (n.amount = n.revenue),
        n.integrations = n.integrations || {},
        n.integrations.facebook = n.integrations.facebook || {},
        n.integrations.facebook.fbc = tC.getCookie("_fbc") || void 0,
        n.integrations.facebook.fbp = tC.getCookie("_fbp") || void 0,
        n.integrations.facebook.event_id = n.integrations.facebook.event_id || tC.uniqueEventId,
        n.url = window.location.href,
        n.created = (new Date).toJSON(),
        e) {
        case "page_view":
            n.title = document.title,
            n.path = location.pathname,
            "" !== document.referrer && (n.referrer = document.referrer),
            n.type = n.type || "other";
            break;
        case "purchase":
            n.status = n.status || "in_progress",
            n.type = n.type || "online"
        }
        tC.internalvars.caEventData = n;
        var s = {
            event: e,
            properties: n,
            eventId: tC.uniqueEventId,
            version: 1,
            generatorVersion: tC.generatorVersion,
            containerVersion: tC.containerVersion
        };
        if (100 < tC.triggeredEvents.length)
            for (; tC.triggeredEvents.length > 100; )
                tC.triggeredEvents.shift();
        tC.triggeredEvents.push(s),
        tC.lastTriggeredEvent = tC.triggeredEvents[tC.triggeredEvents.length - 1];
        var d = JSON.stringify(s);
        if ("function" == typeof navigator.sendBeacon && !navigator.sendBeacon(a, d)) {
            var p = !1;
            if (!(p = new XMLHttpRequest))
                return !1;
            p.open("POST", a, !0),
            p.withCredentials = !0,
            p.send(d)
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
function() {
    var t = {};
    t.hitCounter_5181_25 = function() {
        var t = window.tC_5181_25;
        0 == Math.floor(Math.random() * parseInt(t.frequency)) && tC.pixelTrack.add("https://manager.tagcommander.com/utils/hit.php?id=" + t.id_container + "&site=" + t.id_site + "&version=" + t.containerVersion + "&frequency=" + t.frequency + "&position=" + tC.container_position + "&rand=" + Math.random())
    }
    ,
    tC.extend(t),
    tC.container_position = "undefined" != typeof tc_container_position ? tc_container_position : void 0 !== tC.container_position ? tC.container_position : 0,
    tC.container_position++,
    "undefined" != typeof tc_container_position && tc_container_position++,
    tC.hitCounter_5181_25()
}(),
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
        }
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
        null != t.acmVendorList && (s.acmVendorList = t.acmVendorList),
        tC.privacy.cok(Number(!e), a, n, i, s),
        !1 !== t.sendHit && tC.privacy.hit(Number(r), a, o, c),
        window.tCPrivacyTagManager && tC.privacy.sendDataOtherTMS(),
        tC.eventTarget.dispatchEvent("consent-update")
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
;
var prepareAcmVendorConsent = function(t) {
    var e = t.filter((function(t) {
        return /acm_/.test(t)
    }
    )).map((function(t) {
        return t.split("_")[1]
    }
    ));
    return e.length > 0 && (t = t.filter((function(t) {
        return t > 0
    }
    ))),
    {
        nonAcmVendors: t,
        acmVendors: e
    }
};
tC.privacy.optinAll = function(t, e) {
    t = t || "banner_button",
    e = e || {};
    var n, r = tC.privacy.getCategoryIdList().join(","), i = tC.privacy.getVendorIdList();
    if (null != tC.privacy.isIabGoogleAcmEnabled && tC.privacy.isIabGoogleAcmEnabled()) {
        var a = prepareAcmVendorConsent(i);
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
;
var prepareConsent = function(t) {
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
};
tC.privacy.optin = function(t, e) {
    t = t || "banner_button";
    var n = prepareConsent(e = e || {})
      , r = n.categories
      , i = n.vendors;
    if (0 !== r.length || 0 !== i.length) {
        var a;
        if (r = r.concat(e.reset ? [] : tC.privacy.getOptinCategories()).filter(tC.arrayUniqueFilter),
        i = i.concat(e.reset ? [] : tC.privacy.getOptinVendors()).filter(tC.arrayUniqueFilter),
        null != tC.privacy.isIabGoogleAcmEnabled && tC.privacy.isIabGoogleAcmEnabled()) {
            var o = prepareAcmVendorConsent(i);
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
    var n = prepareConsent(e)
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
                var s = prepareAcmVendorConsent(i);
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
tC.privacy.getCategoryIdList = function() {
    var t = tC.privacy.privacySelectableUnblockedCategoriesId || [];
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
tC.privacy.getConsent = function(t) {
    var e = (t = t || {}).pretty
      , n = !!e && "off"
      , r = null;
    null == tC.privacy.cookieData && tC.privacy.init(),
    0 === tC.privacy.cookieData.length ? (n = e ? "unset" : null,
    r = "unset") : 1 === Number(tC.privacy.cookieData[0]) && (r = "all-off");
    var i = !e || "on"
      , a = tC.privacy.getOptinCategories().reduce((function(t, e) {
        return t[e] = i,
        t
    }
    ), {})
      , o = tC.privacy.getCategoryIdList();
    o = o.reduce((function(t, e) {
        var o = e
          , c = "status";
        e > 1e4 && e < 13e3 ? (o = "tcf2_" + Math.ceil((e - 1e4) / 2),
        e % 2 == 0 && (c = "legIntStatus")) : e > 13e3 && (o = "tcf2_sf_" + (e - 13e3));
        return t[o] = t[o] || {},
        t[o][c] = a[e] || n,
        null == r && t[o][c] !== i && (r = "mixed"),
        t
    }
    ), {}),
    tC.privacy.blockedOnCategories && tC.privacy.blockedOnCategories.forEach((function(t) {
        o[t] = {
            status: i,
            required: !0
        }
    }
    ));
    var c = tC.privacy.getVendorIdList()
      , s = tC.privacy.getOptinVendors().reduce((function(t, e) {
        return t[e] = i,
        t
    }
    ), {});
    c = c.reduce((function(t, e) {
        var a = e
          , o = "status";
        e > 1e3 && (a = "tcf2_" + Math.ceil((e - 1e3) / 2),
        e % 2 == 0 && (o = "legIntStatus"));
        return t[a] = t[a] || {},
        t[a][o] = s[e] || n,
        null == r && t[a][o] !== i && (r = "mixed"),
        t
    }
    ), {}),
    r = r || "all-on";
    var d = {
        version: "1.0",
        siteId: tC.id_site,
        consentId: tC.getCookie("TCPID") || null,
        bannerId: String(tC.privacy.getId()),
        bannerVersion: tC.privacy.getVersion()
    };
    return tC.privacy.iabVendorList && (d.tcfPolicyVersion = String(tC.privacy.iabVendorList.tcfPolicyVersion)),
    tC.privacy.consentDates && (d.dateCreated = tC.privacy.consentDates.createdAt,
    d.dateUpdated = tC.privacy.consentDates.updatedAt,
    d.dateExpires = tC.privacy.consentDates.expiresAt),
    {
        meta: d,
        consent: {
            status: r,
            categories: o,
            vendors: c
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
                      , p = d ? String(o).match(/tcf2_sf_(\d*)/) : null;
                    p ? c = 13e3 + Number(p[1]) : d && (c = 2 * Number(d[1]) - 1 + 1e4,
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
    tC.setCookie("TCPID", tC.privacy.rand(), 393, "/", tC.domain()),
    tC.eventTarget.dispatchEvent("consent-revoke")
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
    var p = t + tC.privacy.getCS() + e + tC.privacy.getCS() + n + tC.privacy.getCS() + (tC.privacy.blockedOnCategories || "") + tC.privacy.getCS() + s + tC.privacy.getCS() + r;
    if (tC.setCookie(tC.privacy.getCN(), p, a, "/", o),
    tC.setCookie(tC.privacy.getPCCN(), n, a, "/", o),
    null != i.acmVendorList && tC.storage.setWithExpiry(tC.privacy.getCN() + "_ACM", i.acmVendorList, a),
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
tC.privacy.hit = tC.privacy.hit || function(t, e, n, r) {
    tC.privacy.categories;
    var i = tC.privacy.privacySelectableUnblockedCategoriesId || ["6", "7", "8", "9", "10"]
      , a = i.slice()
      , o = tC.privacy.getOptinCategories()
      , c = 0;
    if (o.length >= i.length && (i.forEach((function(t) {
        o.indexOf(String(t)) > -1 && a.splice(a.indexOf(t), 1)
    }
    )),
    c = 0 == a.length ? 1 : 0),
    0 === t)
        var s = 1;
    else if (1 === t)
        s = 0;
    else
        s = parseInt(tC.privacy.cookieData[0] || 1);
    var d = tC.privacy.getHitDomain(s)
      , p = -1 === d.indexOf("://") ? "https://" : ""
      , u = -1 === d.indexOf(".commander1.com") && -1 === d.indexOf("privacy.trustcommander.net")
      , l = p + d + (u ? "/trust" : "") + "/privacy-consent/"
      , C = {
        privacyBeacon: {
            id_tc: 25,
            site: 5181,
            version: e,
            id_privacy: n,
            type_action: r,
            privacy_action: t.toString(),
            list_categories: tC.privacy.getValidCategories(),
            optin_to_all: c,
            tcpid: tC.getCookie("TCPID"),
            tc_optout: s
        }
    };
    1 === t && (C.privacyBeacon.list_vendors = tC.privacy.getOptinVendors().join(","),
    C.privacyBeacon.optin_to_all_vendors = Number(tC.privacy.checkOptinAllVendors())),
    navigator.sendBeacon && navigator.sendBeacon(l, JSON.stringify(C)) || (C = Object.keys(C.privacyBeacon).map((function(t) {
        return encodeURIComponent(t) + "=" + encodeURIComponent(C.privacyBeacon[t])
    }
    )).join("&"),
    tC.pixelTrack.add(l + "?" + C + "&rand=" + Math.random()))
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
;
var privacyForceHitDomain = null;
tC.privacy.getHitDomain = function(t) {
    var e = window.tc_collect_dns
      , n = 0 === Number(t) ? e || "https://privacy.commander1.com" : "https://privacy.trustcommander.net";
    return privacyForceHitDomain && (n = privacyForceHitDomain),
    n
}
,
tC.privacy.hitCounter = function(t, e) {
    e = e || "banner",
    tC.privacy.init();
    var n = parseInt(tC.privacy.cookieData[0] || 1);
    n = null != tC.privacy.cookieData[2] && "" === String(tC.privacy.cookieData[2]) ? Number(!n) : n;
    var r = tC.privacy.getHitDomain(n)
      , i = -1 === r.indexOf("://") ? "https://" : ""
      , a = -1 === r.indexOf(".commander1.com") && -1 === r.indexOf("privacy.trustcommander.net")
      , o = i + r + (a ? "/trust" : "") + "/privacy-consent/"
      , c = {
        privacyBeacon: {
            id_tc: 25,
            site: 5181,
            version: tC.privacyVersion,
            id_privacy: t,
            type_action: e,
            privacy_action: "V",
            tcpid: tC.getCookie("TCPID"),
            tc_optout: n
        }
    };
    navigator.sendBeacon && navigator.sendBeacon(o, JSON.stringify(c)) || (c = Object.keys(c.privacyBeacon).map((function(t) {
        return encodeURIComponent(t) + "=" + encodeURIComponent(c.privacyBeacon[t])
    }
    )).join("&"),
    tC.pixelTrack.add(o + "?" + c + "&rand=" + Math.random()))
}
,
tC.privacy.getOptinCategories = function() {
    tC.privacy.init();
    var t = parseInt(tC.privacy.cookieData[0] || 0);
    return tC.privacy.categories && tC.privacy.categories.length && "" === tC.privacy.categories[0] ? [] : 0 === t && null != tC.privacy.categories && "undefined" !== tC.privacy.categories && -1 !== Number(tC.privacy.categories) ? tC.privacy.categories : []
}
,
tC.privacy.getOptinVendors = function() {
    return tC.privacy.init(),
    tC.privacy.optinVendors || []
}
,
tC.privacy.getOptoutVendors = function() {
    var t = []
      , e = tC.getCookie(tC.privacy.getVCN());
    return e && (t = e.split(",")),
    t
}
,
tC.privacy.getBlockedOnCategories = function() {
    return tC.privacy.blockedOnCategories ? tC.privacy.blockedOnCategories.map(String) : []
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
      , p = -1 !== tC.inArray(s.toString(), o)
      , u = -1 !== tC.inArray(s.toString(), a) || -1 !== tC.inArray("ALL", a)
      , l = -1 !== tC.inArray(d.toString(), c)
      , C = -1 !== tC.inArray(parseInt(t), tC.privacy.minorTags)
      , v = tC.privacy.includedVendors && tC.privacy.includedVendors[d] ? parseInt(tC.privacy.includedVendors[d].privacyVersion[i]) : 0;
    return (p || e && u) && (!d || l || C && v > r)
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
;
var tagCategories = tC.privacy.tagsCategoriesAssignation || {};
tC.privacy.tagsCategoriesAssignation = [tagCategories, {
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
    E206: 6,
    E208: 6,
    E186: 6,
    E198: 6,
    E200: 6,
    E219: 6,
    E217: 6,
    E155: 6,
    E239: 6,
    E235: 6,
    E242: 6,
    E249: 6,
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
    252: 6,
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
    559: 6,
    561: 6,
    563: 6,
    569: 6,
    212: 6,
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
    565: 6,
    576: 6,
    324: 6,
    366: 6,
    482: 6,
    342: 6,
    580: 6,
    582: 6,
    584: 6,
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
    216: 6,
    226: 6,
    586: 6,
    232: 6,
    238: 6,
    420: 6,
    424: 6,
    278: 6,
    280: 6,
    284: 6,
    286: 6,
    328: 6,
    334: 6,
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
    434: 6,
    220: 6,
    234: 6,
    270: 6,
    452: 6,
    330: 6,
    336: 6,
    242: 6,
    520: 6,
    338: 6,
    533: 6,
    547: 6,
    592: 6,
    306: 6,
    594: 6,
    372: 6,
    604: 6,
    606: 6,
    608: 6,
    611: 6,
    623: 6,
    625: 6,
    446: 6,
    440: 6,
    643: 6,
    645: 6,
    256: 6,
    260: 6,
    386: 6,
    390: 6,
    392: 6,
    396: 6,
    647: 6,
    292: 6,
    649: 6,
    574: 6,
    246: 6,
    637: 6,
    635: 6,
    651: 6,
    290: 6,
    426: 6,
    639: 6,
    641: 6,
    578: 6,
    653: 6,
    633: 6,
    631: 6,
    629: 6,
    627: 6,
    428: 6,
    596: 6,
    567: 6,
    610: 6,
    382: 6,
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
    450: 6,
    551: 6,
    620: 6,
    678: 6,
    680: 6,
    197: 6,
    684: 6,
    696: 6,
    698: 6,
    694: 6,
    692: 6,
    688: 6,
    702: 6,
    700: 6,
    682: 6,
    704: 6,
    690: 6,
    706: 6,
    708: 6,
    710: 6,
    612: 6,
    422: 6,
    614: 6,
    616: 6,
    713: 6,
    715: 6,
    719: 6,
    717: 6,
    667: 6,
    665: 6,
    725: 6,
    686: 6,
    739: 6,
    727: 6,
    729: 6,
    731: 6,
    733: 6,
    735: 6,
    737: 6,
    743: 6,
    745: 6,
    747: 6,
    721: 6,
    749: 6,
    276: 6,
    759: 6,
    755: 6,
    478: 6,
    763: 6,
    753: 6,
    761: 6,
    751: 6,
    288: 6,
    757: 6,
    723: 6,
    741: 6,
    765: 6,
    767: 6,
    769: 6,
    771: 6,
    555: 7,
    557: 7,
    67: 7,
    71: 7,
    621: 7,
    135: 7,
    108: 7,
    118: 7,
    120: 7,
    121: 7,
    85: 7,
    111: 7,
    114: 7,
    117: 7,
    149: 7,
    91: 7,
    92: 7,
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
    199: 8,
    195: 8,
    207: 8,
    655: 9,
    E1: 9,
    E3: 9,
    E5: 9,
    E7: 9,
    E10: 9,
    E11: 9,
    E12: 9,
    E13: 9,
    E14: 9,
    E16: 9,
    E17: 9,
    E24: 9,
    E26: 9,
    E28: 9,
    E101: 9,
    E103: 9,
    E105: 9,
    E107: 9,
    E109: 9,
    E114: 9,
    E118: 9,
    E119: 9,
    E121: 9,
    E194: 9,
    E212: 9,
    E221: 9,
    E223: 9,
    E225: 9,
    E227: 9,
    E229: 9,
    E231: 9,
    E233: 9,
    E240: 9,
    E248: 9,
    E244: 9,
    E246: 9,
    E165: 9,
    E116: 9,
    E9: 9,
    E22: 9,
    63: 9,
    75: 9,
    79: 9,
    83: 9,
    146: 9,
    150: 9,
    69: 9,
    657: 9,
    87: 9,
    600: 9,
    602: 9,
    147: 9,
    148: 9,
    81: 9
}].reduce((function(t, e) {
    return Object.keys(e).forEach((function(n) {
        t[n] = e[n]
    }
    )),
    t
}
), {});
var tagVendors = tC.privacy.tagsVendorsAssignation || {};
tC.privacy.tagsVendorsAssignation = [tagVendors, []].reduce((function(t, e) {
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
    description: "Advertising cookies, including those of third parties, are cookies aimed at creating profiles relating to the user and are used to send you promotional messages that are in line with the preferences you have displayed while navigating on the network.<br>\n",
    isUsedInTarget: "",
    subCategories: null,
    tagsId: [11, "E113", "E65", "E63", "E61", "E59", "E57", "E55", "E53", "E51", "E47", "E45", "E43", "E41", "E39", "E35", "E31", "E29", "E37", "E33", "E167", "E49", "E123", "E157", "E196", "E184", "E206", "E208", "E186", "E198", "E200", "E219", "E217", "E155", "E239", "E235", "E242", "E249", 15, 13, 93, 23, 168, 163, 151, 158, 159, 160, 161, 162, 165, 175, 166, 167, 169, 171, 173, 201, 205, 214, 244, 272, 282, 298, 300, 326, 348, 350, 356, 412, 436, 438, 442, 444, 448, 264, 266, 454, 456, 458, 262, 274, 462, 464, 466, 470, 254, 224, 228, 472, 474, 476, 332, 268, 252, 250, 368, 370, 374, 378, 394, 400, 486, 488, 490, 492, 494, 498, 500, 502, 506, 416, 230, 296, 310, 312, 316, 510, 362, 222, 388, 414, 294, 218, 480, 468, 322, 512, 514, 402, 516, 376, 522, 524, 526, 528, 318, 496, 504, 508, 530, 210, 398, 531, 535, 537, 539, 541, 545, 258, 549, 302, 553, 559, 561, 563, 569, 212, 208, 248, 418, 236, 308, 314, 484, 240, 570, 572, 565, 576, 324, 366, 482, 342, 580, 582, 584, 588, 590, 320, 543, 364, 518, 598, 410, 404, 406, 408, 304, 216, 226, 586, 232, 238, 420, 424, 278, 280, 284, 286, 328, 334, 344, 346, 354, 352, 460, 358, 360, 380, 384, 430, 432, 434, 220, 234, 270, 452, 330, 336, 242, 520, 338, 533, 547, 592, 306, 594, 372, 604, 606, 608, 611, 623, 625, 446, 440, 643, 645, 256, 260, 386, 390, 392, 396, 647, 292, 649, 574, 246, 637, 635, 651, 290, 426, 639, 641, 578, 653, 633, 631, 629, 627, 428, 596, 567, 610, 382, 659, 661, 618, 663, 340, 669, 671, 673, 675, 677, 450, 551, 620, 678, 680, 197, 684, 696, 698, 694, 692, 688, 702, 700, 682, 704, 690, 706, 708, 710, 612, 422, 614, 616, 713, 715, 719, 717, 667, 665, 725, 686, 739, 727, 729, 731, 733, 735, 737, 743, 745, 747, 721, 749, 276, 759, 755, 478, 763, 753, 761, 751, 288, 757, 723, 741, 765, 767, 769, 771]
}, {
    id: 7,
    label: "Analytical cookies",
    categoryParent: -1,
    description: "Analytical cookies, including those of third parties, allow us to understand how the platform is being used by users.  These cookies do not collect information regarding your identity, nor any personal information.  The data is processed in an aggregate and anonymous form.<br>\n",
    isUsedInTarget: "",
    subCategories: null,
    tagsId: [555, 557, 67, 71, 621, 135, 108, 118, 120, 121, 85, 111, 114, 117, 149, 91, 92, 113, 110, 112, 137, 94, 101, 95, 102, 103, 104, 105, 119, 134, 136, 138, 139, 140, 141, 142, 143]
}, {
    id: 8,
    label: "Functionality cookies",
    categoryParent: -1,
    description: "Functionality cookies are used to activate specific functionalities of the platform and a series of options (for example, language, the products selected for purchase), to improve the service provided.\nIf you disable this type of cookie, some services or certain functions of the platform might not be available or function properly, and you could be forced to change or manually enter some information or preferences each time you visit the platform.<br>",
    isUsedInTarget: "",
    subCategories: null,
    tagsId: [199, 195, 207]
}, {
    id: 9,
    label: "Technical cookies",
    categoryParent: -1,
    description: "Technical cookies are cookies that are strictly necessary for the platform to function or to allow you to take advantage of the requested services and content.<br>\nIt is not possible to disable this type of cookie, as this would prevent the platform from functioning properly, and would compromise the use of its content and services.<br>\n",
    isUsedInTarget: "",
    subCategories: null,
    tagsId: [655, "E1", "E3", "E5", "E7", "E10", "E11", "E12", "E13", "E14", "E16", "E17", "E24", "E26", "E28", "E101", "E103", "E105", "E107", "E109", "E114", "E118", "E119", "E121", "E194", "E212", "E221", "E223", "E225", "E227", "E229", "E231", "E233", "E240", "E248", "E244", "E246", "E165", "E116", "E9", "E22", 63, 75, 79, 83, 146, 150, 69, 657, 87, 600, 602, 147, 148, 81]
}, {
    id: 10,
    label: "Social cookies",
    categoryParent: -1,
    description: 'These cookies enable users to share pages and content through third party social media and other platforms. The companies that serve these cookies may also use your information to serve targeted advertising on other platforms.<br>\nFurther detailed information about the specific cookies used on this Platform and the third parties who serve them can be found in our <a href="https://www.cartier.com/en-gb/legal-and-privacy/cookie-policy">Cookie Center</a>.<br>',
    isUsedInTarget: "",
    subCategories: null,
    tagsId: []
}],
tC.privacy.includedVendors = tC.privacy.includedVendors || {};
var minorTags = [];
tC.privacy.minorTags = null != tC.privacy.minorTags ? tC.privacy.minorTags.concat(minorTags).filter(tC.arrayUniqueFilter) : minorTags,
tC.privacy.setLocale = function(t) {
    tC.privacy.lang = t
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
function() {
    var t = {};
    t.container_5181_25 = {
        load: function(t, e) {
            tC.container_position++,
            tC.hitCounter_5181_25(),
            this.datalayer(),
            tC.array_launched_tags = [],
            tC.array_launched_tags_keys = [],
            "object" != typeof t && (t = {}),
            "boolean" != typeof e && (e = !1),
            void 0 === t.exclusions && (t.exclusions = []),
            -1 == t.exclusions.indexOf("datastorage") && this.datastorage(),
            -1 == t.exclusions.indexOf("deduplication") && this.deduplication(),
            -1 == t.exclusions.indexOf("internalvars") && this.internalvars(),
            -1 == t.exclusions.indexOf("privacy") && this.privacy(),
            -1 == t.exclusions.indexOf("eventlisteners") && this.eventlisteners(),
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
            var t = "abtests|connection_type|promos|dynamicsearch_firstload|filter_and_look|nav_stepName|position|product_category|order_delivery_date_selected|sfmc_id|nav_GAsection|nav_categoryIdentifier1|env_template|env_work|env_channel|env_version|nav_division|nav_storic_countryCode|pguri|msn_cgGroup|rcms_cgGroup|emerch_cgGroup|nav_countryCode|nav_languageCode|nav_currency|nav_dept|nav_pagetype|nav_section|nav_subsection|nav_section_dept|nav_subsection_dept|nav_page|nav_historicalTP|nav_sessionTP|itemsList|product_mfPartNumber|prddisplay|sr_items|sr_color|sr_size|sr_pricerange|sr_searchoptions|sr_textsearch|product_title|product_category_id|product_micro_id|product_brand|product_color_id|product_status|product_promotion|product_eng_title|product_collection|product_embossed|product_engraved|product_line|prdpersonalized|product_casematerial|product_jewelmaterial|product_leathermaterial|product_strapmaterial|cart_item_size|product_micro|product_size|product_adjusted|product_eng_micro|product_eng_casematerial|product_eng_category|product_eng_collection|product_eng_color|product_eng_jewelmaterial|product_eng_leathermaterial|product_eng_line|product_eng_season_of_sale|product_eng_strapmaterial|product_eng_subcollection|product_engravable|product_adjustable|product_embossable|product_cod8|product_cod10|product_unitprice_ati|product_discount_ati|product_discount_tf|product_unitprice_tf|user_email_sha256|user_externalidentifier|user_Id|user_logged|user_totalorders|user_type|user_email|cart_ispickupinstoreselected|cart_PaymentType|cart_coupon|cart_itemsNo|cart_items|cart_Id|cart_total|cart_subtotal|order_DeliveryType|order_PaymentType|order_tax|order_revenue_eur|order_billing_country|order_shipping_country|order_id|order_itemsNo|order_promotion|order_items|order_amount_ati_without_sf|order_amount_ati_with_sf|order_amount_tf_without_sf|order_amount_tf_with_sf|order_shipping".split("|");
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
        eventlisteners: function() {},
        internalvars: function() {
            var t = tC.internalvars_5181_25.listVar;
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
            var e = "pid|name|category|product_eng_casematerial|brand|product_eng_jewelmaterial|variant|product_eng_leathermaterial|discount_price|product_eng_strapmaterial|quantity|price|category_variant|event|label|discountedPrice_tf|position|price_tf|list|promotion_id|promotion_name|promotion_creative|promotion_position|livechatId|advisorId|productEngravable|filter_and_look|productAdjustable|productEmbossable|product_promotion|storelocator|storelocator_city|storelocator_country|prmid|prmname|prmcreative|prmposition|conversationId|discount_price_ati|associateId|discountedPrice|ratingValue|legacy_macro_id|pguri|ratingFeedbackValue|legacy_micro_id|product_id|productAvailability|product_variant_id|price_ati|promo_id|productSkuMfPartNumber|prdid|promo_name|uri|prdname|promo_creative|prdline|promo_position|prdcollection|prdsubcollection|prdengraved|prdembossed|prdsellable|submitstatus|boutiqueName|prdvariant|productSize|boutique|prdref|purpose|prdcategory|type|prddisplay|appointmentId|prdsize|channel|prdavailability|prdadjusted|product_eng_line|prdpersonalized|step|product_eng_collection|csematerial|product_status|jwlmaterial|strmaterial|option|stepName|lthmaterial|product_sellable|currency|productCaseMaterial|car_category|productJewelryMaterial|car_event|productLeatherMaterial|productStrapMaterial|prdprice|productAdjusted|productEmbossed|productCollection|productEngraved|productLine|product_eng_title|product_mfPartNumber|mfPartNumber|dataSt|personalizationType|id".split("|");
            for (var n in e)
                t.hasOwnProperty(e[n]) || (t[e[n]] = "");
            return t
        }
    },
    tC.extend(t),
    void 0 === tC.containerList && (tC.containerList = []),
    tC.containerList.push("5181_25"),
    window.tc_array_events = tC.container_5181_25.init_tc_array_events([])
}(),
window.tC5181_25 = tC,
window.postMessage('TC.EX.CONTAINER:{"id":25,"ids":5181,"v":"1.16","g":67,"p":' + tC.container_position + ',"url":"' + (document.currentScript ? document.currentScript.src : "") + '"}', "*");
tC.container_5181_25.datalayer();
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
tC.internalvars_5181_25 = {
    listVar: []
}
tC.internalvars_5181.initiators.var455 = typeof tC.internalvars_5181.initiators.var455 == "function" ? tC.internalvars_5181.initiators.var455 : function() {
    tC.internalvars.getBooleanToString = tC.internalvars.getBooleanToString ? tC.internalvars.getBooleanToString : "";
}
tC.internalvars_5181.initiators.var455();
tC.internalvars_5181_25.listVar.push(455);
tC.internalvars_5181.initiators.var457 = typeof tC.internalvars_5181.initiators.var457 == "function" ? tC.internalvars_5181.initiators.var457 : function() {
    tC.internalvars.getSizmekId = tC.internalvars.getSizmekId ? tC.internalvars.getSizmekId : "";
}
tC.internalvars_5181.initiators.var457();
tC.internalvars_5181_25.listVar.push(457);
tC.internalvars_5181.initiators.var459 = typeof tC.internalvars_5181.initiators.var459 == "function" ? tC.internalvars_5181.initiators.var459 : function() {
    tC.internalvars.getClientId = tC.internalvars.getClientId ? tC.internalvars.getClientId : "";
}
tC.internalvars_5181.initiators.var459();
tC.internalvars_5181_25.listVar.push(459);
tC.internalvars_5181.initiators.var461 = typeof tC.internalvars_5181.initiators.var461 == "function" ? tC.internalvars_5181.initiators.var461 : function() {
    tC.internalvars.getSessionId = tC.internalvars.getSessionId ? tC.internalvars.getSessionId : "";
}
tC.internalvars_5181.initiators.var461();
tC.internalvars_5181_25.listVar.push(461);
tC.internalvars_5181.initiators.var463 = typeof tC.internalvars_5181.initiators.var463 == "function" ? tC.internalvars_5181.initiators.var463 : function() {
    tC.internalvars.getTimestamp = tC.internalvars.getTimestamp ? tC.internalvars.getTimestamp : "";
}
tC.internalvars_5181.initiators.var463();
tC.internalvars_5181_25.listVar.push(463);
tC.internalvars_5181.initiators.var465 = typeof tC.internalvars_5181.initiators.var465 == "function" ? tC.internalvars_5181.initiators.var465 : function() {
    tC.internalvars.getStringToNa = tC.internalvars.getStringToNa ? tC.internalvars.getStringToNa : "";
}
tC.internalvars_5181.initiators.var465();
tC.internalvars_5181_25.listVar.push(465);
tC.internalvars_5181.initiators.var1 = function() {
    tC.internalvars.tc_fulldomain = window.location.hostname;
}
tC.internalvars_5181.initiators.var1();
tC.internalvars_5181_25.listVar.push(1);
tC.internalvars_5181.initiators.var3 = function() {
    if (tc_vars["nav_sessionTP"] !== "") {
        tC.internalvars.tpcode = tc_vars["nav_sessionTP"];
    } else {
        tC.internalvars.tpcode = tc_vars["nav_historicalTP"];
    }
}
tC.internalvars_5181.initiators.var3();
tC.internalvars_5181_25.listVar.push(3);
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
tC.internalvars_5181_25.listVar.push(209);
tC.internalvars_5181.initiators.var217 = function() {
    if (tC.match(new String(tC.getCookie("PARTNER")), 'criteo', "") || tC.match(new String(tC.getCookie("PARTNER")), 'Criteo', "") || tC.match(new String(tC.getCookie("PARTNER")), 'CRITEO', "")) {
        tC.internalvars.criteodedup = "1";
    } else {
        tC.internalvars.criteodedup = "0";
    }
}
tC.internalvars_5181.initiators.var217();
tC.internalvars_5181_25.listVar.push(217);
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
tC.internalvars_5181_25.listVar.push(219);
tC.internalvars_5181.initiators.var251 = function() {
    tC.internalvars.md5_email = "";
}
tC.internalvars_5181.initiators.var251();
tC.internalvars_5181_25.listVar.push(251);
tC.internalvars_5181.initiators.var253 = typeof tC.internalvars_5181.initiators.var253 == "function" ? tC.internalvars_5181.initiators.var253 : function() {
    tC.internalvars.GA_UA = tC.internalvars.GA_UA ? tC.internalvars.GA_UA : "";
}
tC.internalvars_5181.initiators.var253();
tC.internalvars_5181_25.listVar.push(253);
tC.internalvars_5181.initiators.var255 = function() {
    tC.internalvars.UserId = "";
    if ((tC.getCookie("tc_iduserid") !== "") && (tc_vars.user_Id === "")) {
        tC.internalvars.UserId = tC.getCookie("tc_iduserid");
    } else {
        tC.internalvars.UserId = tc_vars.user_Id;
    }
}
tC.internalvars_5181.initiators.var255();
tC.internalvars_5181_25.listVar.push(255);
tC.internalvars_5181.initiators.var259 = typeof tC.internalvars_5181.initiators.var259 == "function" ? tC.internalvars_5181.initiators.var259 : function() {
    tC.internalvars.GA_contentgroup2 = tC.internalvars.GA_contentgroup2 ? tC.internalvars.GA_contentgroup2 : "";
}
tC.internalvars_5181.initiators.var259();
tC.internalvars_5181_25.listVar.push(259);
tC.internalvars_5181.initiators.var261 = typeof tC.internalvars_5181.initiators.var261 == "function" ? tC.internalvars_5181.initiators.var261 : function() {
    tC.internalvars.GA_contentgroup3 = tC.internalvars.GA_contentgroup3 ? tC.internalvars.GA_contentgroup3 : "";
}
tC.internalvars_5181.initiators.var261();
tC.internalvars_5181_25.listVar.push(261);
tC.internalvars_5181.initiators.var277 = typeof tC.internalvars_5181.initiators.var277 == "function" ? tC.internalvars_5181.initiators.var277 : function() {
    tC.internalvars.GA_fnl = tC.internalvars.GA_fnl ? tC.internalvars.GA_fnl : "";
}
tC.internalvars_5181.initiators.var277();
tC.internalvars_5181_25.listVar.push(277);
tC.internalvars_5181.initiators.var281 = typeof tC.internalvars_5181.initiators.var281 == "function" ? tC.internalvars_5181.initiators.var281 : function() {
    tC.internalvars.GA_ClientID = tC.internalvars.GA_ClientID ? tC.internalvars.GA_ClientID : "";
}
tC.internalvars_5181.initiators.var281();
tC.internalvars_5181_25.listVar.push(281);
tC.internalvars_5181.initiators.var283 = function() {
    tC.internalvars.sr_results = "";
    if (tc_vars.env_template == "searchresult") {
        tC.internalvars.sr_results = tc_vars.sr_items.length;
    } else {
        tC.internalvars.sr_results = "NA";
    }
}
tC.internalvars_5181.initiators.var283();
tC.internalvars_5181_25.listVar.push(283);
tC.internalvars_5181.initiators.var285 = typeof tC.internalvars_5181.initiators.var285 == "function" ? tC.internalvars_5181.initiators.var285 : function() {
    tC.internalvars.GA_step = tC.internalvars.GA_step ? tC.internalvars.GA_step : "";
}
tC.internalvars_5181.initiators.var285();
tC.internalvars_5181_25.listVar.push(285);
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
tC.internalvars_5181_25.listVar.push(315);
tC.internalvars_5181.initiators.var317 = typeof tC.internalvars_5181.initiators.var317 == "function" ? tC.internalvars_5181.initiators.var317 : function() {
    tC.internalvars.GA_dpt = tC.internalvars.GA_dpt ? tC.internalvars.GA_dpt : "";
}
tC.internalvars_5181.initiators.var317();
tC.internalvars_5181_25.listVar.push(317);
tC.internalvars_5181.initiators.var320 = function() {
    tC.internalvars.email_hash = "";
}
tC.internalvars_5181.initiators.var320();
tC.internalvars_5181_25.listVar.push(320);
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
tC.internalvars_5181_25.listVar.push(321);
tC.internalvars_5181.initiators.var322 = typeof tC.internalvars_5181.initiators.var322 == "function" ? tC.internalvars_5181.initiators.var322 : function() {
    tC.internalvars.GA_UserID = tC.internalvars.GA_UserID ? tC.internalvars.GA_UserID : "";
}
tC.internalvars_5181.initiators.var322();
tC.internalvars_5181_25.listVar.push(322);
tC.internalvars_5181.initiators.var329 = typeof tC.internalvars_5181.initiators.var329 == "function" ? tC.internalvars_5181.initiators.var329 : function() {
    tC.internalvars.GA_remarketing = tC.internalvars.GA_remarketing ? tC.internalvars.GA_remarketing : "";
}
tC.internalvars_5181.initiators.var329();
tC.internalvars_5181_25.listVar.push(329);
tC.internalvars_5181.initiators.var330 = typeof tC.internalvars_5181.initiators.var330 == "function" ? tC.internalvars_5181.initiators.var330 : function() {
    tC.internalvars.GA_contentgroup1 = tC.internalvars.GA_contentgroup1 ? tC.internalvars.GA_contentgroup1 : "";
}
tC.internalvars_5181.initiators.var330();
tC.internalvars_5181_25.listVar.push(330);
tC.internalvars_5181.initiators.var331 = function() {
    tC.internalvars.cart_itemsNo = "";
    if (typeof tc_vars.cart_itemsNo !== "undefined" && tc_vars.cart_itemsNo === "") {
        tC.internalvars.cart_itemsNo = "0"
    } else
        tC.internalvars.cart_itemsNo = tc_vars.cart_itemsNo;
}
tC.internalvars_5181.initiators.var331();
tC.internalvars_5181_25.listVar.push(331);
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
tC.internalvars_5181_25.listVar.push(333);
tC.internalvars_5181.initiators.var335 = function() {
    tC.internalvars.new_arrivals = "";
    if (typeof tc_vars["itemsList"] !== "undefined") {
        if (typeof tc_vars["itemsList"]["Homepage|New_Arrivals"] !== "undefined") {
            tC.internalvars.new_arrivals = tc_vars["itemsList"]["Homepage|New_Arrivals"];
        }
    }
}
tC.internalvars_5181.initiators.var335();
tC.internalvars_5181_25.listVar.push(335);
tC.internalvars_5181.initiators.var338 = function() {
    tC.internalvars.checkout_related = "";
    if (typeof tc_vars["itemsList"] !== "undefined") {
        if (typeof tc_vars["itemsList"]["Checkout|Related"] !== "undefined") {
            tC.internalvars.checkout_related = tc_vars["itemsList"]["Checkout|Related"];
        }
    }
}
tC.internalvars_5181.initiators.var338();
tC.internalvars_5181_25.listVar.push(338);
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
tC.internalvars_5181_25.listVar.push(339);
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
tC.internalvars_5181_25.listVar.push(348);
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
tC.internalvars_5181_25.listVar.push(349);
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
tC.internalvars_5181_25.listVar.push(351);
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
tC.internalvars_5181_25.listVar.push(355);
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
tC.internalvars_5181_25.listVar.push(356);
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
tC.internalvars_5181_25.listVar.push(357);
tC.internalvars_5181.initiators.var358 = function() {
    tC.internalvars.promoCod10 = "51122474XD,45351795KE,45351709CF,45351722ST,45351749BT,45351740TW,45367779OL,45370917WU,45358171HT,45358176PV,45365640QO,45358126MN,45366535MO,45358280IH,45370839KR,45370837QO,45358435XT,45358168JV,45358099EK,45358111BT,45368927OR,45369590UM,45358198KB,45370975RD,45369009FJ,45358195PU,45370974CI,45369008WD,45358308XE,45358269JM,45370822BA,45370780HS,45370716DO,45370799GH,45370811EB,45370723FU,45370913BC,45370911PN,45367775PF,45370848SD,45358116MJ,45358153VX,45358104QP,45358189DO,45370828KD,45370695JW,45370698GQ,45358151WX,45358105AA,45358178QD,45358422RU,45358446WT,45358387SD,45369732FH,45358100KA,45358432TW,45370601XJ,45358129AA,45369731QC,45358113SW,45370844VM,45370840KA,45358159MO,45358397JG,45370600IP,45358407HV,45358109GK,45370845KA,45358484RU";
}
tC.internalvars_5181.initiators.var358();
tC.internalvars_5181_25.listVar.push(358);
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
tC.internalvars_5181_25.listVar.push(359);
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
tC.internalvars_5181_25.listVar.push(362);
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
tC.internalvars_5181_25.listVar.push(363);
tC.internalvars_5181.initiators.var379 = function() {
    tC.internalvars.listName = "";
    if (tc_vars["nav_pagetype"] === "categories") {
        tC.internalvars.listName = tc_vars["nav_GAsection"] + '|' + tc_vars["nav_section_dept"] + '_' + tc_vars["nav_dept"];
    } else if (tc_vars["nav_pagetype"] === "searchresult") {
        tC.internalvars.listName = tc_vars["nav_GAsection"] + '|' + "textsearch";
    }
}
tC.internalvars_5181.initiators.var379();
tC.internalvars_5181_25.listVar.push(379);
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
tC.internalvars_5181_25.listVar.push(384);
tC.internalvars_5181.initiators.var385 = typeof tC.internalvars_5181.initiators.var385 == "function" ? tC.internalvars_5181.initiators.var385 : function() {
    tC.internalvars.baseDomain = tC.internalvars.baseDomain ? tC.internalvars.baseDomain : "";
}
tC.internalvars_5181.initiators.var385();
tC.internalvars_5181_25.listVar.push(385);
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
tC.internalvars_5181_25.listVar.push(466);
tC.internalvars_5181.initiators.var491 = typeof tC.internalvars_5181.initiators.var491 == "function" ? tC.internalvars_5181.initiators.var491 : function() {
    tC.internalvars.startCuralate = tC.internalvars.startCuralate ? tC.internalvars.startCuralate : "";
}
tC.internalvars_5181.initiators.var491();
tC.internalvars_5181_25.listVar.push(491);
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
tC.internalvars_5181_25.listVar.push(495);
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
tC.internalvars_5181_25.listVar.push(497);
tC.internalvars_5181.initiators.var500 = function() {
    tC.internalvars.tc_url = document.location.href;
}
tC.internalvars_5181.initiators.var500();
tC.internalvars_5181_25.listVar.push(500);
tC.internalvars_5181.initiators.var502 = function() {
    tC.internalvars.tc_pathname = window.location.pathname;
}
tC.internalvars_5181.initiators.var502();
tC.internalvars_5181_25.listVar.push(502);
tC.internalvars_5181.initiators.var508 = typeof tC.internalvars_5181.initiators.var508 == "function" ? tC.internalvars_5181.initiators.var508 : function() {
    tC.internalvars.ricFacebookID = tC.internalvars.ricFacebookID ? tC.internalvars.ricFacebookID : "";
}
tC.internalvars_5181.initiators.var508();
tC.internalvars_5181_25.listVar.push(508);
tC.internalvars_5181.initiators.var510 = typeof tC.internalvars_5181.initiators.var510 == "function" ? tC.internalvars_5181.initiators.var510 : function() {
    tC.internalvars.ricCartNameArray = tC.internalvars.ricCartNameArray ? tC.internalvars.ricCartNameArray : "";
}
tC.internalvars_5181.initiators.var510();
tC.internalvars_5181_25.listVar.push(510);
tC.internalvars_5181.initiators.var512 = typeof tC.internalvars_5181.initiators.var512 == "function" ? tC.internalvars_5181.initiators.var512 : function() {
    tC.internalvars.ricCartCategoryArray = tC.internalvars.ricCartCategoryArray ? tC.internalvars.ricCartCategoryArray : "";
}
tC.internalvars_5181.initiators.var512();
tC.internalvars_5181_25.listVar.push(512);
tC.internalvars_5181.initiators.var514 = typeof tC.internalvars_5181.initiators.var514 == "function" ? tC.internalvars_5181.initiators.var514 : function() {
    tC.internalvars.ricCartIDArray = tC.internalvars.ricCartIDArray ? tC.internalvars.ricCartIDArray : "";
}
tC.internalvars_5181.initiators.var514();
tC.internalvars_5181_25.listVar.push(514);
tC.internalvars_5181.initiators.var518 = function() {
    tC.internalvars.ricOrderNameArray = [];
    if (tc_vars["order_items"] !== undefined) {
        for (var i = 0; i < tc_vars["order_items"].length; i++) {
            tC.internalvars.ricOrderNameArray.push(tc_vars["order_items"][i].order_item_name)
        }
    }
}
tC.internalvars_5181.initiators.var518();
tC.internalvars_5181_25.listVar.push(518);
tC.internalvars_5181.initiators.var520 = typeof tC.internalvars_5181.initiators.var520 == "function" ? tC.internalvars_5181.initiators.var520 : function() {
    tC.internalvars.ricOrderCatArray = tC.internalvars.ricOrderCatArray ? tC.internalvars.ricOrderCatArray : "";
}
tC.internalvars_5181.initiators.var520();
tC.internalvars_5181_25.listVar.push(520);
tC.internalvars_5181.initiators.var522 = typeof tC.internalvars_5181.initiators.var522 == "function" ? tC.internalvars_5181.initiators.var522 : function() {
    tC.internalvars.ricOrderIDArray = tC.internalvars.ricOrderIDArray ? tC.internalvars.ricOrderIDArray : "";
}
tC.internalvars_5181.initiators.var522();
tC.internalvars_5181_25.listVar.push(522);
tC.internalvars_5181.initiators.var534 = typeof tC.internalvars_5181.initiators.var534 == "function" ? tC.internalvars_5181.initiators.var534 : function() {
    tC.internalvars.amazonExFchId = tC.internalvars.amazonExFchId ? tC.internalvars.amazonExFchId : "";
}
tC.internalvars_5181.initiators.var534();
tC.internalvars_5181_25.listVar.push(534);
tC.internalvars_5181.initiators.var536 = typeof tC.internalvars_5181.initiators.var536 == "function" ? tC.internalvars_5181.initiators.var536 : function() {
    tC.internalvars.xandrSiteId = tC.internalvars.xandrSiteId ? tC.internalvars.xandrSiteId : "";
}
tC.internalvars_5181.initiators.var536();
tC.internalvars_5181_25.listVar.push(536);
tC.internalvars_5181.initiators.var538 = typeof tC.internalvars_5181.initiators.var538 == "function" ? tC.internalvars_5181.initiators.var538 : function() {
    tC.internalvars.mInsightTagId = tC.internalvars.mInsightTagId ? tC.internalvars.mInsightTagId : "";
}
tC.internalvars_5181.initiators.var538();
tC.internalvars_5181_25.listVar.push(538);
tC.internalvars_5181.initiators.var540 = typeof tC.internalvars_5181.initiators.var540 == "function" ? tC.internalvars_5181.initiators.var540 : function() {
    tC.internalvars.TTDClashAdvId = tC.internalvars.TTDClashAdvId ? tC.internalvars.TTDClashAdvId : "";
}
tC.internalvars_5181.initiators.var540();
tC.internalvars_5181_25.listVar.push(540);
tC.internalvars_5181.initiators.var542 = typeof tC.internalvars_5181.initiators.var542 == "function" ? tC.internalvars_5181.initiators.var542 : function() {
    tC.internalvars.TTDClashFmtId = tC.internalvars.TTDClashFmtId ? tC.internalvars.TTDClashFmtId : "";
}
tC.internalvars_5181.initiators.var542();
tC.internalvars_5181_25.listVar.push(542);
tC.internalvars_5181.initiators.var546 = typeof tC.internalvars_5181.initiators.var546 == "function" ? tC.internalvars_5181.initiators.var546 : function() {
    tC.internalvars.pepperjamId = tC.internalvars.pepperjamId ? tC.internalvars.pepperjamId : "";
}
tC.internalvars_5181.initiators.var546();
tC.internalvars_5181_25.listVar.push(546);
tC.internalvars_5181.initiators.var548 = typeof tC.internalvars_5181.initiators.var548 == "function" ? tC.internalvars_5181.initiators.var548 : function() {
    tC.internalvars.dv360EoyNov19SrcId = tC.internalvars.dv360EoyNov19SrcId ? tC.internalvars.dv360EoyNov19SrcId : "";
}
tC.internalvars_5181.initiators.var548();
tC.internalvars_5181_25.listVar.push(548);
tC.internalvars_5181.initiators.var550 = typeof tC.internalvars_5181.initiators.var550 == "function" ? tC.internalvars_5181.initiators.var550 : function() {
    tC.internalvars.dv360EoyNov19TypeId = tC.internalvars.dv360EoyNov19TypeId ? tC.internalvars.dv360EoyNov19TypeId : "";
}
tC.internalvars_5181.initiators.var550();
tC.internalvars_5181_25.listVar.push(550);
tC.internalvars_5181.initiators.var552 = typeof tC.internalvars_5181.initiators.var552 == "function" ? tC.internalvars_5181.initiators.var552 : function() {
    tC.internalvars.yahooJpRetargetingId = tC.internalvars.yahooJpRetargetingId ? tC.internalvars.yahooJpRetargetingId : "";
}
tC.internalvars_5181.initiators.var552();
tC.internalvars_5181_25.listVar.push(552);
tC.internalvars_5181.initiators.var554 = typeof tC.internalvars_5181.initiators.var554 == "function" ? tC.internalvars_5181.initiators.var554 : function() {
    tC.internalvars.bingId = tC.internalvars.bingId ? tC.internalvars.bingId : "";
}
tC.internalvars_5181.initiators.var554();
tC.internalvars_5181_25.listVar.push(554);
tC.internalvars_5181.initiators.var556 = typeof tC.internalvars_5181.initiators.var556 == "function" ? tC.internalvars_5181.initiators.var556 : function() {
    tC.internalvars.mobkoiSrcId = tC.internalvars.mobkoiSrcId ? tC.internalvars.mobkoiSrcId : "";
}
tC.internalvars_5181.initiators.var556();
tC.internalvars_5181_25.listVar.push(556);
tC.internalvars_5181.initiators.var558 = typeof tC.internalvars_5181.initiators.var558 == "function" ? tC.internalvars_5181.initiators.var558 : function() {
    tC.internalvars.mobkoiTypeId = tC.internalvars.mobkoiTypeId ? tC.internalvars.mobkoiTypeId : "";
}
tC.internalvars_5181.initiators.var558();
tC.internalvars_5181_25.listVar.push(558);
tC.internalvars_5181.initiators.var560 = typeof tC.internalvars_5181.initiators.var560 == "function" ? tC.internalvars_5181.initiators.var560 : function() {
    tC.internalvars.leFigaroEventId = tC.internalvars.leFigaroEventId ? tC.internalvars.leFigaroEventId : "";
}
tC.internalvars_5181.initiators.var560();
tC.internalvars_5181_25.listVar.push(560);
tC.internalvars_5181.initiators.var562 = typeof tC.internalvars_5181.initiators.var562 == "function" ? tC.internalvars_5181.initiators.var562 : function() {
    tC.internalvars.elleEventId = tC.internalvars.elleEventId ? tC.internalvars.elleEventId : "";
}
tC.internalvars_5181.initiators.var562();
tC.internalvars_5181_25.listVar.push(562);
tC.internalvars_5181.initiators.var564 = typeof tC.internalvars_5181.initiators.var564 == "function" ? tC.internalvars_5181.initiators.var564 : function() {
    tC.internalvars.mozzooPm = tC.internalvars.mozzooPm ? tC.internalvars.mozzooPm : "";
}
tC.internalvars_5181.initiators.var564();
tC.internalvars_5181_25.listVar.push(564);
tC.internalvars_5181.initiators.var566 = typeof tC.internalvars_5181.initiators.var566 == "function" ? tC.internalvars_5181.initiators.var566 : function() {
    tC.internalvars.aduxId = tC.internalvars.aduxId ? tC.internalvars.aduxId : "";
}
tC.internalvars_5181.initiators.var566();
tC.internalvars_5181_25.listVar.push(566);
tC.internalvars_5181.initiators.var568 = typeof tC.internalvars_5181.initiators.var568 == "function" ? tC.internalvars_5181.initiators.var568 : function() {
    tC.internalvars.emoteevTagId = tC.internalvars.emoteevTagId ? tC.internalvars.emoteevTagId : "";
}
tC.internalvars_5181.initiators.var568();
tC.internalvars_5181_25.listVar.push(568);
tC.internalvars_5181.initiators.var570 = typeof tC.internalvars_5181.initiators.var570 == "function" ? tC.internalvars_5181.initiators.var570 : function() {
    tC.internalvars.sizmekTagIdUS = tC.internalvars.sizmekTagIdUS ? tC.internalvars.sizmekTagIdUS : "";
}
tC.internalvars_5181.initiators.var570();
tC.internalvars_5181_25.listVar.push(570);
tC.internalvars_5181.initiators.var572 = typeof tC.internalvars_5181.initiators.var572 == "function" ? tC.internalvars_5181.initiators.var572 : function() {
    tC.internalvars.lineTagIdJp = tC.internalvars.lineTagIdJp ? tC.internalvars.lineTagIdJp : "";
}
tC.internalvars_5181.initiators.var572();
tC.internalvars_5181_25.listVar.push(572);
tC.internalvars_5181.initiators.var574 = typeof tC.internalvars_5181.initiators.var574 == "function" ? tC.internalvars_5181.initiators.var574 : function() {
    tC.internalvars.yahooPurchaseIdJp = tC.internalvars.yahooPurchaseIdJp ? tC.internalvars.yahooPurchaseIdJp : "";
}
tC.internalvars_5181.initiators.var574();
tC.internalvars_5181_25.listVar.push(574);
tC.internalvars_5181.initiators.var576 = typeof tC.internalvars_5181.initiators.var576 == "function" ? tC.internalvars_5181.initiators.var576 : function() {
    tC.internalvars.yahooConvLabelIdJp = tC.internalvars.yahooConvLabelIdJp ? tC.internalvars.yahooConvLabelIdJp : "";
}
tC.internalvars_5181.initiators.var576();
tC.internalvars_5181_25.listVar.push(576);
tC.internalvars_5181.initiators.var578 = typeof tC.internalvars_5181.initiators.var578 == "function" ? tC.internalvars_5181.initiators.var578 : function() {
    tC.internalvars.dbmTypeId = tC.internalvars.dbmTypeId ? tC.internalvars.dbmTypeId : "";
}
tC.internalvars_5181.initiators.var578();
tC.internalvars_5181_25.listVar.push(578);
tC.internalvars_5181.initiators.var580 = function() {
    tC.internalvars.dbmIdUs = "8437420";
}
tC.internalvars_5181.initiators.var580();
tC.internalvars_5181_25.listVar.push(580);
tC.internalvars_5181.initiators.var582 = typeof tC.internalvars_5181.initiators.var582 == "function" ? tC.internalvars_5181.initiators.var582 : function() {
    tC.internalvars.pinterestGirlandeId = tC.internalvars.pinterestGirlandeId ? tC.internalvars.pinterestGirlandeId : "";
}
tC.internalvars_5181.initiators.var582();
tC.internalvars_5181_25.listVar.push(582);
tC.internalvars_5181.initiators.var584 = typeof tC.internalvars_5181.initiators.var584 == "function" ? tC.internalvars_5181.initiators.var584 : function() {
    tC.internalvars.sizmekArrivalId = tC.internalvars.sizmekArrivalId ? tC.internalvars.sizmekArrivalId : "";
}
tC.internalvars_5181.initiators.var584();
tC.internalvars_5181_25.listVar.push(584);
tC.internalvars_5181.initiators.var586 = typeof tC.internalvars_5181.initiators.var586 == "function" ? tC.internalvars_5181.initiators.var586 : function() {
    tC.internalvars.sa360CounterTypeId = tC.internalvars.sa360CounterTypeId ? tC.internalvars.sa360CounterTypeId : "";
}
tC.internalvars_5181.initiators.var586();
tC.internalvars_5181_25.listVar.push(586);
tC.internalvars_5181.initiators.var588 = typeof tC.internalvars_5181.initiators.var588 == "function" ? tC.internalvars_5181.initiators.var588 : function() {
    tC.internalvars.sa360SalesTypeId = tC.internalvars.sa360SalesTypeId ? tC.internalvars.sa360SalesTypeId : "";
}
tC.internalvars_5181.initiators.var588();
tC.internalvars_5181_25.listVar.push(588);
tC.internalvars_5181.initiators.var590 = typeof tC.internalvars_5181.initiators.var590 == "function" ? tC.internalvars_5181.initiators.var590 : function() {
    tC.internalvars.sa360AdvId = tC.internalvars.sa360AdvId ? tC.internalvars.sa360AdvId : "";
}
tC.internalvars_5181.initiators.var590();
tC.internalvars_5181_25.listVar.push(590);
tC.internalvars_5181.initiators.var594 = typeof tC.internalvars_5181.initiators.var594 == "function" ? tC.internalvars_5181.initiators.var594 : function() {
    tC.internalvars.mInsightMacauSanyaId = tC.internalvars.mInsightMacauSanyaId ? tC.internalvars.mInsightMacauSanyaId : "";
}
tC.internalvars_5181.initiators.var594();
tC.internalvars_5181_25.listVar.push(594);
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
tC.internalvars_5181_25.listVar.push(598);
tC.internalvars_5181.initiators.var600 = typeof tC.internalvars_5181.initiators.var600 == "function" ? tC.internalvars_5181.initiators.var600 : function() {
    tC.internalvars.xaxisClashId = tC.internalvars.xaxisClashId ? tC.internalvars.xaxisClashId : "";
}
tC.internalvars_5181.initiators.var600();
tC.internalvars_5181_25.listVar.push(600);
tC.internalvars_5181.initiators.var602 = typeof tC.internalvars_5181.initiators.var602 == "function" ? tC.internalvars_5181.initiators.var602 : function() {
    tC.internalvars.dv360EoyNov19CatId = tC.internalvars.dv360EoyNov19CatId ? tC.internalvars.dv360EoyNov19CatId : "";
}
tC.internalvars_5181.initiators.var602();
tC.internalvars_5181_25.listVar.push(602);
tC.internalvars_5181.initiators.var608 = typeof tC.internalvars_5181.initiators.var608 == "function" ? tC.internalvars_5181.initiators.var608 : function() {
    tC.internalvars.teadsConversionType = tC.internalvars.teadsConversionType ? tC.internalvars.teadsConversionType : "";
}
tC.internalvars_5181.initiators.var608();
tC.internalvars_5181_25.listVar.push(608);
tC.internalvars_5181.initiators.var616 = typeof tC.internalvars_5181.initiators.var616 == "function" ? tC.internalvars_5181.initiators.var616 : function() {
    tC.internalvars.sizmekActivityId = tC.internalvars.sizmekActivityId ? tC.internalvars.sizmekActivityId : "";
}
tC.internalvars_5181.initiators.var616();
tC.internalvars_5181_25.listVar.push(616);
tC.internalvars_5181.initiators.var620 = typeof tC.internalvars_5181.initiators.var620 == "function" ? tC.internalvars_5181.initiators.var620 : function() {
    tC.internalvars.mInsightsMainCat = tC.internalvars.mInsightsMainCat ? tC.internalvars.mInsightsMainCat : "";
}
tC.internalvars_5181.initiators.var620();
tC.internalvars_5181_25.listVar.push(620);
tC.internalvars_5181.initiators.var622 = typeof tC.internalvars_5181.initiators.var622 == "function" ? tC.internalvars_5181.initiators.var622 : function() {
    tC.internalvars.mInsightsSubCat1 = tC.internalvars.mInsightsSubCat1 ? tC.internalvars.mInsightsSubCat1 : "";
}
tC.internalvars_5181.initiators.var622();
tC.internalvars_5181_25.listVar.push(622);
tC.internalvars_5181.initiators.var624 = typeof tC.internalvars_5181.initiators.var624 == "function" ? tC.internalvars_5181.initiators.var624 : function() {
    tC.internalvars.mInsightsSubCat2 = tC.internalvars.mInsightsSubCat2 ? tC.internalvars.mInsightsSubCat2 : "";
}
tC.internalvars_5181.initiators.var624();
tC.internalvars_5181_25.listVar.push(624);
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
tC.internalvars_5181_25.listVar.push(638);
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
tC.internalvars_5181_25.listVar.push(648);
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
tC.internalvars_5181_25.listVar.push(650);
tC.internalvars_5181.initiators.var670 = typeof tC.internalvars_5181.initiators.var670 == "function" ? tC.internalvars_5181.initiators.var670 : function() {
    tC.internalvars.mInsightIdNotProdPag = tC.internalvars.mInsightIdNotProdPag ? tC.internalvars.mInsightIdNotProdPag : "";
}
tC.internalvars_5181.initiators.var670();
tC.internalvars_5181_25.listVar.push(670);
tC.internalvars_5181.initiators.var674 = typeof tC.internalvars_5181.initiators.var674 == "function" ? tC.internalvars_5181.initiators.var674 : function() {
    tC.internalvars.xandrConvIdNotPP = tC.internalvars.xandrConvIdNotPP ? tC.internalvars.xandrConvIdNotPP : "";
}
tC.internalvars_5181.initiators.var674();
tC.internalvars_5181_25.listVar.push(674);
tC.internalvars_5181.initiators.var678 = typeof tC.internalvars_5181.initiators.var678 == "function" ? tC.internalvars_5181.initiators.var678 : function() {
    tC.internalvars.xandrSegIdNotPP = tC.internalvars.xandrSegIdNotPP ? tC.internalvars.xandrSegIdNotPP : "";
}
tC.internalvars_5181.initiators.var678();
tC.internalvars_5181_25.listVar.push(678);
tC.internalvars_5181.initiators.var686 = typeof tC.internalvars_5181.initiators.var686 == "function" ? tC.internalvars_5181.initiators.var686 : function() {
    tC.internalvars.ricCartPriceArray = tC.internalvars.ricCartPriceArray ? tC.internalvars.ricCartPriceArray : "";
}
tC.internalvars_5181.initiators.var686();
tC.internalvars_5181_25.listVar.push(686);
tC.internalvars_5181.initiators.var688 = typeof tC.internalvars_5181.initiators.var688 == "function" ? tC.internalvars_5181.initiators.var688 : function() {
    tC.internalvars.ricCartCollectionArray = tC.internalvars.ricCartCollectionArray ? tC.internalvars.ricCartCollectionArray : "";
}
tC.internalvars_5181.initiators.var688();
tC.internalvars_5181_25.listVar.push(688);
tC.internalvars_5181.initiators.var690 = function() {
    tC.internalvars.ricOrderPriceArray = [];
    if (tc_vars["order_items"] !== undefined) {
        for (var i = 0; i < tc_vars["order_items"].length; i++) {
            tC.internalvars.ricOrderPriceArray.push(tc_vars["order_items"][i].order_item_discount_ati)
        }
    }
}
tC.internalvars_5181.initiators.var690();
tC.internalvars_5181_25.listVar.push(690);
tC.internalvars_5181.initiators.var692 = typeof tC.internalvars_5181.initiators.var692 == "function" ? tC.internalvars_5181.initiators.var692 : function() {
    tC.internalvars.orderCollectionArray = tC.internalvars.orderCollectionArray ? tC.internalvars.orderCollectionArray : "";
}
tC.internalvars_5181.initiators.var692();
tC.internalvars_5181_25.listVar.push(692);
tC.internalvars_5181.initiators.var694 = function() {
    tC.internalvars.ricOrderQtyArray = [];
    if (tc_vars["order_items"] !== undefined) {
        for (var i = 0; i < tc_vars["order_items"].length; i++) {
            tC.internalvars.ricOrderQtyArray.push(tc_vars["order_items"][i].order_item_quantity)
        }
    }
}
tC.internalvars_5181.initiators.var694();
tC.internalvars_5181_25.listVar.push(694);
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
tC.internalvars_5181_25.listVar.push(698);
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
tC.internalvars_5181_25.listVar.push(700);
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
tC.internalvars_5181_25.listVar.push(717);
tC.internalvars_5181.initiators.var721 = typeof tC.internalvars_5181.initiators.var721 == "function" ? tC.internalvars_5181.initiators.var721 : function() {
    tC.internalvars.getAvailabilityFromString = tC.internalvars.getAvailabilityFromString ? tC.internalvars.getAvailabilityFromString : "";
}
tC.internalvars_5181.initiators.var721();
tC.internalvars_5181_25.listVar.push(721);
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
tC.internalvars_5181_25.listVar.push(723);
tC.internalvars_5181.initiators.var730 = typeof tC.internalvars_5181.initiators.var730 == "function" ? tC.internalvars_5181.initiators.var730 : function() {
    tC.internalvars.getModifiedString = tC.internalvars.getModifiedString ? tC.internalvars.getModifiedString : "";
}
tC.internalvars_5181.initiators.var730();
tC.internalvars_5181_25.listVar.push(730);
tC.internalvars_5181.initiators.var750 = typeof tC.internalvars_5181.initiators.var750 == "function" ? tC.internalvars_5181.initiators.var750 : function() {
    tC.internalvars.getPersonalization = tC.internalvars.getPersonalization ? tC.internalvars.getPersonalization : "";
}
tC.internalvars_5181.initiators.var750();
tC.internalvars_5181_25.listVar.push(750);
tC.internalvars_5181.initiators.var752 = typeof tC.internalvars_5181.initiators.var752 == "function" ? tC.internalvars_5181.initiators.var752 : function() {
    tC.internalvars.getPaymentInfo = tC.internalvars.getPaymentInfo ? tC.internalvars.getPaymentInfo : "";
}
tC.internalvars_5181.initiators.var752();
tC.internalvars_5181_25.listVar.push(752);
tC.internalvars_5181.initiators.var760 = typeof tC.internalvars_5181.initiators.var760 == "function" ? tC.internalvars_5181.initiators.var760 : function() {
    tC.internalvars.envFolder = tC.internalvars.envFolder ? tC.internalvars.envFolder : "";
}
tC.internalvars_5181.initiators.var760();
tC.internalvars_5181_25.listVar.push(760);
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
tC.internalvars_5181_25.listVar.push(764);
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
tC.internalvars_5181_25.listVar.push(771);
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
tC.internalvars_5181_25.listVar.push(797);
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
tC.internalvars_5181_25.listVar.push(799);
tC.internalvars_5181.initiators.var801 = typeof tC.internalvars_5181.initiators.var801 == "function" ? tC.internalvars_5181.initiators.var801 : function() {
    tC.internalvars.ric_envwork_country = tC.internalvars.ric_envwork_country ? tC.internalvars.ric_envwork_country : "";
}
tC.internalvars_5181.initiators.var801();
tC.internalvars_5181_25.listVar.push(801);
tC.internalvars_5181.initiators.var813 = typeof tC.internalvars_5181.initiators.var813 == "function" ? tC.internalvars_5181.initiators.var813 : function() {
    tC.internalvars.CookieSetting = tC.internalvars.CookieSetting ? tC.internalvars.CookieSetting : "";
}
tC.internalvars_5181.initiators.var813();
tC.internalvars_5181_25.listVar.push(813);
tC.internalvars_5181.initiators.var819 = typeof tC.internalvars_5181.initiators.var819 == "function" ? tC.internalvars_5181.initiators.var819 : function() {
    tC.internalvars.ric_countrycode_and_languagecode = tC.internalvars.ric_countrycode_and_languagecode ? tC.internalvars.ric_countrycode_and_languagecode : "";
}
tC.internalvars_5181.initiators.var819();
tC.internalvars_5181_25.listVar.push(819);
tC.internalvars_5181.initiators.var821 = typeof tC.internalvars_5181.initiators.var821 == "function" ? tC.internalvars_5181.initiators.var821 : function() {
    tC.internalvars.mediacomCatId = tC.internalvars.mediacomCatId ? tC.internalvars.mediacomCatId : "";
}
tC.internalvars_5181.initiators.var821();
tC.internalvars_5181_25.listVar.push(821);
tC.internalvars_5181.initiators.var827 = typeof tC.internalvars_5181.initiators.var827 == "function" ? tC.internalvars_5181.initiators.var827 : function() {
    tC.internalvars.tc_timestamp = tC.internalvars.tc_timestamp ? tC.internalvars.tc_timestamp : "";
}
tC.internalvars_5181.initiators.var827();
tC.internalvars_5181_25.listVar.push(827);
tC.internalvars_5181.initiators.var829 = typeof tC.internalvars_5181.initiators.var829 == "function" ? tC.internalvars_5181.initiators.var829 : function() {
    tC.internalvars.isOrganicReferrer = tC.internalvars.isOrganicReferrer ? tC.internalvars.isOrganicReferrer : "";
}
tC.internalvars_5181.initiators.var829();
tC.internalvars_5181_25.listVar.push(829);
tC.internalvars_5181.initiators.var831 = typeof tC.internalvars_5181.initiators.var831 == "function" ? tC.internalvars_5181.initiators.var831 : function() {
    tC.internalvars.tc_referrer = tC.internalvars.tc_referrer ? tC.internalvars.tc_referrer : "";
}
tC.internalvars_5181.initiators.var831();
tC.internalvars_5181_25.listVar.push(831);
tC.internalvars_5181.initiators.var833 = typeof tC.internalvars_5181.initiators.var833 == "function" ? tC.internalvars_5181.initiators.var833 : function() {
    tC.internalvars.hrefHasUtmorGclid = tC.internalvars.hrefHasUtmorGclid ? tC.internalvars.hrefHasUtmorGclid : "";
}
tC.internalvars_5181.initiators.var833();
tC.internalvars_5181_25.listVar.push(833);
tC.internalvars_5181.initiators.var835 = typeof tC.internalvars_5181.initiators.var835 == "function" ? tC.internalvars_5181.initiators.var835 : function() {
    tC.internalvars.twitterPixelIdJewelry = tC.internalvars.twitterPixelIdJewelry ? tC.internalvars.twitterPixelIdJewelry : "";
}
tC.internalvars_5181.initiators.var835();
tC.internalvars_5181_25.listVar.push(835);
tC.internalvars_5181.initiators.var849 = typeof tC.internalvars_5181.initiators.var849 == "function" ? tC.internalvars_5181.initiators.var849 : function() {
    tC.internalvars.tc_randomCachebuster = tC.internalvars.tc_randomCachebuster ? tC.internalvars.tc_randomCachebuster : "";
}
tC.internalvars_5181.initiators.var849();
tC.internalvars_5181_25.listVar.push(849);
tC.internalvars_5181.initiators.var851 = typeof tC.internalvars_5181.initiators.var851 == "function" ? tC.internalvars_5181.initiators.var851 : function() {
    tC.internalvars.singlePersonalized = tC.internalvars.singlePersonalized ? tC.internalvars.singlePersonalized : "";
}
tC.internalvars_5181.initiators.var851();
tC.internalvars_5181_25.listVar.push(851);
tC.internalvars_5181.initiators.var853 = typeof tC.internalvars_5181.initiators.var853 == "function" ? tC.internalvars_5181.initiators.var853 : function() {
    tC.internalvars.isPersonalizedNA = tC.internalvars.isPersonalizedNA ? tC.internalvars.isPersonalizedNA : "";
}
tC.internalvars_5181.initiators.var853();
tC.internalvars_5181_25.listVar.push(853);
tC.internalvars_5181.initiators.var871 = typeof tC.internalvars_5181.initiators.var871 == "function" ? tC.internalvars_5181.initiators.var871 : function() {
    tC.internalvars.isAdjustedNA = tC.internalvars.isAdjustedNA ? tC.internalvars.isAdjustedNA : "";
}
tC.internalvars_5181.initiators.var871();
tC.internalvars_5181_25.listVar.push(871);
tC.internalvars_5181.initiators.var873 = typeof tC.internalvars_5181.initiators.var873 == "function" ? tC.internalvars_5181.initiators.var873 : function() {
    tC.internalvars.isEmbossedNA = tC.internalvars.isEmbossedNA ? tC.internalvars.isEmbossedNA : "";
}
tC.internalvars_5181.initiators.var873();
tC.internalvars_5181_25.listVar.push(873);
tC.internalvars_5181.initiators.var875 = typeof tC.internalvars_5181.initiators.var875 == "function" ? tC.internalvars_5181.initiators.var875 : function() {
    tC.internalvars.isEngravedNA = tC.internalvars.isEngravedNA ? tC.internalvars.isEngravedNA : "";
}
tC.internalvars_5181.initiators.var875();
tC.internalvars_5181_25.listVar.push(875);
tC.internalvars_5181.initiators.var877 = typeof tC.internalvars_5181.initiators.var877 == "function" ? tC.internalvars_5181.initiators.var877 : function() {
    tC.internalvars.isPersonalizedNabis = tC.internalvars.isPersonalizedNabis ? tC.internalvars.isPersonalizedNabis : "";
}
tC.internalvars_5181.initiators.var877();
tC.internalvars_5181_25.listVar.push(877);
tC.internalvars_5181.initiators.var881 = typeof tC.internalvars_5181.initiators.var881 == "function" ? tC.internalvars_5181.initiators.var881 : function() {
    tC.internalvars.ricEnvCountryLang = tC.internalvars.ricEnvCountryLang ? tC.internalvars.ricEnvCountryLang : "";
}
tC.internalvars_5181.initiators.var881();
tC.internalvars_5181_25.listVar.push(881);
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
tC.internalvars_5181_25.listVar.push(902);
tC.internalvars_5181.initiators.var914 = typeof tC.internalvars_5181.initiators.var914 == "function" ? tC.internalvars_5181.initiators.var914 : function() {
    tC.internalvars.domain_country_lang = tC.internalvars.domain_country_lang ? tC.internalvars.domain_country_lang : "";
}
tC.internalvars_5181.initiators.var914();
tC.internalvars_5181_25.listVar.push(914);
tC.internalvars_5181.initiators.var916 = function() {
    tC.internalvars.masterSku_event = "";
    if (tc_array_events["defaultMfPartNumber"] !== "") {
        tC.internalvars.masterSku_event = tc_array_events["defaultMfPartNumber"];
    } else {
        tC.internalvars.masterSku_event = tc_array_events["mfPartNumber"];
    }
}
tC.internalvars_5181.initiators.var916();
tC.internalvars_5181_25.listVar.push(916);
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
tC.internalvars_5181_25.listVar.push(922);
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
tC.internalvars_5181_25.listVar.push(249);
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
tC.internalvars_5181_25.listVar.push(345);
tC.internalvars_5181.initiators.var365 = typeof tC.internalvars_5181.initiators.var365 == "function" ? tC.internalvars_5181.initiators.var365 : function() {
    tC.internalvars.GA_step_OPC = tC.internalvars.GA_step_OPC ? tC.internalvars.GA_step_OPC : "";
}
tC.internalvars_5181.initiators.var365();
tC.internalvars_5181_25.listVar.push(365);
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
tC.internalvars_5181_25.listVar.push(380);
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
tC.internalvars_5181_25.listVar.push(476);
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
tC.internalvars_5181_25.listVar.push(478);
tC.internalvars_5181.initiators.var504 = typeof tC.internalvars_5181.initiators.var504 == "function" ? tC.internalvars_5181.initiators.var504 : function() {
    tC.internalvars.ricBrandlockJSID = tC.internalvars.ricBrandlockJSID ? tC.internalvars.ricBrandlockJSID : "";
}
tC.internalvars_5181.initiators.var504();
tC.internalvars_5181_25.listVar.push(504);
tC.internalvars_5181.initiators.var506 = typeof tC.internalvars_5181.initiators.var506 == "function" ? tC.internalvars_5181.initiators.var506 : function() {
    tC.internalvars.ricBrandlockID = tC.internalvars.ricBrandlockID ? tC.internalvars.ricBrandlockID : "";
}
tC.internalvars_5181.initiators.var506();
tC.internalvars_5181_25.listVar.push(506);
tC.internalvars_5181.initiators.var516 = typeof tC.internalvars_5181.initiators.var516 == "function" ? tC.internalvars_5181.initiators.var516 : function() {
    tC.internalvars.btqPickupCountry = tC.internalvars.btqPickupCountry ? tC.internalvars.btqPickupCountry : "";
}
tC.internalvars_5181.initiators.var516();
tC.internalvars_5181_25.listVar.push(516);
tC.internalvars_5181.initiators.var524 = typeof tC.internalvars_5181.initiators.var524 == "function" ? tC.internalvars_5181.initiators.var524 : function() {
    tC.internalvars.ricMedalliaSiteID = tC.internalvars.ricMedalliaSiteID ? tC.internalvars.ricMedalliaSiteID : "";
}
tC.internalvars_5181.initiators.var524();
tC.internalvars_5181_25.listVar.push(524);
tC.internalvars_5181.initiators.var526 = typeof tC.internalvars_5181.initiators.var526 == "function" ? tC.internalvars_5181.initiators.var526 : function() {
    tC.internalvars.ricSprinklrID = tC.internalvars.ricSprinklrID ? tC.internalvars.ricSprinklrID : "";
}
tC.internalvars_5181.initiators.var526();
tC.internalvars_5181_25.listVar.push(526);
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
tC.internalvars_5181_25.listVar.push(528);
tC.internalvars_5181.initiators.var592 = typeof tC.internalvars_5181.initiators.var592 == "function" ? tC.internalvars_5181.initiators.var592 : function() {
    tC.internalvars.dcmId = tC.internalvars.dcmId ? tC.internalvars.dcmId : "";
}
tC.internalvars_5181.initiators.var592();
tC.internalvars_5181_25.listVar.push(592);
tC.internalvars_5181.initiators.var596 = typeof tC.internalvars_5181.initiators.var596 == "function" ? tC.internalvars_5181.initiators.var596 : function() {
    tC.internalvars.twitterPixelId = tC.internalvars.twitterPixelId ? tC.internalvars.twitterPixelId : "";
}
tC.internalvars_5181.initiators.var596();
tC.internalvars_5181_25.listVar.push(596);
tC.internalvars_5181.initiators.var604 = typeof tC.internalvars_5181.initiators.var604 == "function" ? tC.internalvars_5181.initiators.var604 : function() {
    tC.internalvars.snapchatId = tC.internalvars.snapchatId ? tC.internalvars.snapchatId : "";
}
tC.internalvars_5181.initiators.var604();
tC.internalvars_5181_25.listVar.push(604);
tC.internalvars_5181.initiators.var606 = typeof tC.internalvars_5181.initiators.var606 == "function" ? tC.internalvars_5181.initiators.var606 : function() {
    tC.internalvars.teadsAdvertiserId = tC.internalvars.teadsAdvertiserId ? tC.internalvars.teadsAdvertiserId : "";
}
tC.internalvars_5181.initiators.var606();
tC.internalvars_5181_25.listVar.push(606);
tC.internalvars_5181.initiators.var610 = typeof tC.internalvars_5181.initiators.var610 == "function" ? tC.internalvars_5181.initiators.var610 : function() {
    tC.internalvars.mobkoiCategoryId = tC.internalvars.mobkoiCategoryId ? tC.internalvars.mobkoiCategoryId : "";
}
tC.internalvars_5181.initiators.var610();
tC.internalvars_5181_25.listVar.push(610);
tC.internalvars_5181.initiators.var612 = typeof tC.internalvars_5181.initiators.var612 == "function" ? tC.internalvars_5181.initiators.var612 : function() {
    tC.internalvars.dbmSourceId = tC.internalvars.dbmSourceId ? tC.internalvars.dbmSourceId : "";
}
tC.internalvars_5181.initiators.var612();
tC.internalvars_5181_25.listVar.push(612);
tC.internalvars_5181.initiators.var614 = typeof tC.internalvars_5181.initiators.var614 == "function" ? tC.internalvars_5181.initiators.var614 : function() {
    tC.internalvars.dbmCategoryId = tC.internalvars.dbmCategoryId ? tC.internalvars.dbmCategoryId : "";
}
tC.internalvars_5181.initiators.var614();
tC.internalvars_5181_25.listVar.push(614);
tC.internalvars_5181.initiators.var618 = typeof tC.internalvars_5181.initiators.var618 == "function" ? tC.internalvars_5181.initiators.var618 : function() {
    tC.internalvars.sa360FunnelCatId = tC.internalvars.sa360FunnelCatId ? tC.internalvars.sa360FunnelCatId : "";
}
tC.internalvars_5181.initiators.var618();
tC.internalvars_5181_25.listVar.push(618);
tC.internalvars_5181.initiators.var656 = typeof tC.internalvars_5181.initiators.var656 == "function" ? tC.internalvars_5181.initiators.var656 : function() {
    tC.internalvars.pinterestTagId = tC.internalvars.pinterestTagId ? tC.internalvars.pinterestTagId : "";
}
tC.internalvars_5181.initiators.var656();
tC.internalvars_5181_25.listVar.push(656);
tC.internalvars_5181.initiators.var672 = typeof tC.internalvars_5181.initiators.var672 == "function" ? tC.internalvars_5181.initiators.var672 : function() {
    tC.internalvars.mInsightId = tC.internalvars.mInsightId ? tC.internalvars.mInsightId : "";
}
tC.internalvars_5181.initiators.var672();
tC.internalvars_5181_25.listVar.push(672);
tC.internalvars_5181.initiators.var676 = typeof tC.internalvars_5181.initiators.var676 == "function" ? tC.internalvars_5181.initiators.var676 : function() {
    tC.internalvars.xandrConvId = tC.internalvars.xandrConvId ? tC.internalvars.xandrConvId : "";
}
tC.internalvars_5181.initiators.var676();
tC.internalvars_5181_25.listVar.push(676);
tC.internalvars_5181.initiators.var680 = typeof tC.internalvars_5181.initiators.var680 == "function" ? tC.internalvars_5181.initiators.var680 : function() {
    tC.internalvars.xandrSegId = tC.internalvars.xandrSegId ? tC.internalvars.xandrSegId : "";
}
tC.internalvars_5181.initiators.var680();
tC.internalvars_5181_25.listVar.push(680);
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
tC.internalvars_5181_25.listVar.push(719);
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
tC.internalvars_5181_25.listVar.push(725);
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
tC.internalvars_5181_25.listVar.push(748);
tC.internalvars_5181.initiators.var756 = typeof tC.internalvars_5181.initiators.var756 == "function" ? tC.internalvars_5181.initiators.var756 : function() {
    tC.internalvars.cybbaID = tC.internalvars.cybbaID ? tC.internalvars.cybbaID : "";
}
tC.internalvars_5181.initiators.var756();
tC.internalvars_5181_25.listVar.push(756);
tC.internalvars_5181.initiators.var758 = typeof tC.internalvars_5181.initiators.var758 == "function" ? tC.internalvars_5181.initiators.var758 : function() {
    tC.internalvars.HeroID = tC.internalvars.HeroID ? tC.internalvars.HeroID : "";
}
tC.internalvars_5181.initiators.var758();
tC.internalvars_5181_25.listVar.push(758);
tC.internalvars_5181.initiators.var766 = typeof tC.internalvars_5181.initiators.var766 == "function" ? tC.internalvars_5181.initiators.var766 : function() {
    tC.internalvars.ric_pepperjam_id = tC.internalvars.ric_pepperjam_id ? tC.internalvars.ric_pepperjam_id : "";
}
tC.internalvars_5181.initiators.var766();
tC.internalvars_5181_25.listVar.push(766);
tC.internalvars_5181.initiators.var817 = typeof tC.internalvars_5181.initiators.var817 == "function" ? tC.internalvars_5181.initiators.var817 : function() {
    tC.internalvars.ricfreespeeid = tC.internalvars.ricfreespeeid ? tC.internalvars.ricfreespeeid : "";
}
tC.internalvars_5181.initiators.var817();
tC.internalvars_5181_25.listVar.push(817);
tC.internalvars_5181.initiators.var823 = typeof tC.internalvars_5181.initiators.var823 == "function" ? tC.internalvars_5181.initiators.var823 : function() {
    tC.internalvars.minsightServer = tC.internalvars.minsightServer ? tC.internalvars.minsightServer : "";
}
tC.internalvars_5181.initiators.var823();
tC.internalvars_5181_25.listVar.push(823);
tC.internalvars_5181.initiators.var825 = typeof tC.internalvars_5181.initiators.var825 == "function" ? tC.internalvars_5181.initiators.var825 : function() {
    tC.internalvars.mInsightAddToCartID = tC.internalvars.mInsightAddToCartID ? tC.internalvars.mInsightAddToCartID : "";
}
tC.internalvars_5181.initiators.var825();
tC.internalvars_5181_25.listVar.push(825);
tC.internalvars_5181.initiators.var837 = typeof tC.internalvars_5181.initiators.var837 == "function" ? tC.internalvars_5181.initiators.var837 : function() {
    tC.internalvars.ric_salesforceID = tC.internalvars.ric_salesforceID ? tC.internalvars.ric_salesforceID : "";
}
tC.internalvars_5181.initiators.var837();
tC.internalvars_5181_25.listVar.push(837);
tC.internalvars_5181.initiators.var839 = typeof tC.internalvars_5181.initiators.var839 == "function" ? tC.internalvars_5181.initiators.var839 : function() {
    tC.internalvars.ric_salesforceEnv = tC.internalvars.ric_salesforceEnv ? tC.internalvars.ric_salesforceEnv : "";
}
tC.internalvars_5181.initiators.var839();
tC.internalvars_5181_25.listVar.push(839);
tC.internalvars_5181.initiators.var841 = typeof tC.internalvars_5181.initiators.var841 == "function" ? tC.internalvars_5181.initiators.var841 : function() {
    tC.internalvars.ric_salesforceEnv2 = tC.internalvars.ric_salesforceEnv2 ? tC.internalvars.ric_salesforceEnv2 : "";
}
tC.internalvars_5181.initiators.var841();
tC.internalvars_5181_25.listVar.push(841);
tC.internalvars_5181.initiators.var843 = typeof tC.internalvars_5181.initiators.var843 == "function" ? tC.internalvars_5181.initiators.var843 : function() {
    tC.internalvars.ric_salesforceGslURL = tC.internalvars.ric_salesforceGslURL ? tC.internalvars.ric_salesforceGslURL : "";
}
tC.internalvars_5181.initiators.var843();
tC.internalvars_5181_25.listVar.push(843);
tC.internalvars_5181.initiators.var845 = typeof tC.internalvars_5181.initiators.var845 == "function" ? tC.internalvars_5181.initiators.var845 : function() {
    tC.internalvars.ric_SalesforceDepID = tC.internalvars.ric_SalesforceDepID ? tC.internalvars.ric_SalesforceDepID : "";
}
tC.internalvars_5181.initiators.var845();
tC.internalvars_5181_25.listVar.push(845);
tC.internalvars_5181.initiators.var847 = typeof tC.internalvars_5181.initiators.var847 == "function" ? tC.internalvars_5181.initiators.var847 : function() {
    tC.internalvars.ric_salesforceAGURL = tC.internalvars.ric_salesforceAGURL ? tC.internalvars.ric_salesforceAGURL : "";
}
tC.internalvars_5181.initiators.var847();
tC.internalvars_5181_25.listVar.push(847);
tC.internalvars_5181.initiators.var883 = typeof tC.internalvars_5181.initiators.var883 == "function" ? tC.internalvars_5181.initiators.var883 : function() {
    tC.internalvars.ric_salesforcelanguage = tC.internalvars.ric_salesforcelanguage ? tC.internalvars.ric_salesforcelanguage : "";
}
tC.internalvars_5181.initiators.var883();
tC.internalvars_5181_25.listVar.push(883);
tC.internalvars_5181.initiators.var885 = typeof tC.internalvars_5181.initiators.var885 == "function" ? tC.internalvars_5181.initiators.var885 : function() {
    tC.internalvars.ric_sfdefaultmintext = tC.internalvars.ric_sfdefaultmintext ? tC.internalvars.ric_sfdefaultmintext : "";
}
tC.internalvars_5181.initiators.var885();
tC.internalvars_5181_25.listVar.push(885);
tC.internalvars_5181.initiators.var887 = typeof tC.internalvars_5181.initiators.var887 == "function" ? tC.internalvars_5181.initiators.var887 : function() {
    tC.internalvars.ric_sfdismint = tC.internalvars.ric_sfdismint ? tC.internalvars.ric_sfdismint : "";
}
tC.internalvars_5181.initiators.var887();
tC.internalvars_5181_25.listVar.push(887);
tC.internalvars_5181.initiators.var889 = typeof tC.internalvars_5181.initiators.var889 == "function" ? tC.internalvars_5181.initiators.var889 : function() {
    tC.internalvars.ric_sfCountryID = tC.internalvars.ric_sfCountryID ? tC.internalvars.ric_sfCountryID : "";
}
tC.internalvars_5181.initiators.var889();
tC.internalvars_5181_25.listVar.push(889);
tC.internalvars_5181.initiators.var891 = typeof tC.internalvars_5181.initiators.var891 == "function" ? tC.internalvars_5181.initiators.var891 : function() {
    tC.internalvars.ric_sfRICCRC_chat = tC.internalvars.ric_sfRICCRC_chat ? tC.internalvars.ric_sfRICCRC_chat : "";
}
tC.internalvars_5181.initiators.var891();
tC.internalvars_5181_25.listVar.push(891);
tC.internalvars_5181.initiators.var893 = typeof tC.internalvars_5181.initiators.var893 == "function" ? tC.internalvars_5181.initiators.var893 : function() {
    tC.internalvars.ric_sfLiveAgentDev = tC.internalvars.ric_sfLiveAgentDev ? tC.internalvars.ric_sfLiveAgentDev : "";
}
tC.internalvars_5181.initiators.var893();
tC.internalvars_5181_25.listVar.push(893);
tC.internalvars_5181.initiators.var895 = typeof tC.internalvars_5181.initiators.var895 == "function" ? tC.internalvars_5181.initiators.var895 : function() {
    tC.internalvars.ric_sfTextLeave = tC.internalvars.ric_sfTextLeave ? tC.internalvars.ric_sfTextLeave : "";
}
tC.internalvars_5181.initiators.var895();
tC.internalvars_5181_25.listVar.push(895);
tC.internalvars_5181.initiators.var897 = typeof tC.internalvars_5181.initiators.var897 == "function" ? tC.internalvars_5181.initiators.var897 : function() {
    tC.internalvars.ric_sfTextStart = tC.internalvars.ric_sfTextStart ? tC.internalvars.ric_sfTextStart : "";
}
tC.internalvars_5181.initiators.var897();
tC.internalvars_5181_25.listVar.push(897);
tC.internalvars_5181.initiators.var912 = typeof tC.internalvars_5181.initiators.var912 == "function" ? tC.internalvars_5181.initiators.var912 : function() {
    tC.internalvars.ric_sf_text_gotit = tC.internalvars.ric_sf_text_gotit ? tC.internalvars.ric_sf_text_gotit : "";
}
tC.internalvars_5181.initiators.var912();
tC.internalvars_5181_25.listVar.push(912);
tC.internalvars_5181.initiators.var913 = typeof tC.internalvars_5181.initiators.var913 == "function" ? tC.internalvars_5181.initiators.var913 : function() {
    tC.internalvars.ric_sf_loading_text = tC.internalvars.ric_sf_loading_text ? tC.internalvars.ric_sf_loading_text : "";
}
tC.internalvars_5181.initiators.var913();
tC.internalvars_5181_25.listVar.push(913);
tC.internalvars_5181.initiators.var924 = typeof tC.internalvars_5181.initiators.var924 == "function" ? tC.internalvars_5181.initiators.var924 : function() {
    tC.internalvars.ric_Partnerize_id = tC.internalvars.ric_Partnerize_id ? tC.internalvars.ric_Partnerize_id : "";
}
tC.internalvars_5181.initiators.var924();
tC.internalvars_5181_25.listVar.push(924);
tC.internalvars_5181.initiators.var957 = typeof tC.internalvars_5181.initiators.var957 == "function" ? tC.internalvars_5181.initiators.var957 : function() {
    tC.internalvars.tiktokId = tC.internalvars.tiktokId ? tC.internalvars.tiktokId : "";
}
tC.internalvars_5181.initiators.var957();
tC.internalvars_5181_25.listVar.push(957);
/*END_VARIABLES_BLOCK*/

/*DYNAMIC JS BLOCK 2*/

/*END DYNAMIC JS BLOCK 2*/

/*CUSTOM_JS_BLOCK2*/

/*END_CUSTOM_JS_BLOCK2*/
tC.container_5181_25.datastorage();

//----------------------------------------------------

//----

tC.launchTag(203, 'Commanders Act - Data layer QA', 1375, 5181, 25, 15);
tC.onDomReady(function() {
    tC.container_5181_25.eventlisteners();
});
