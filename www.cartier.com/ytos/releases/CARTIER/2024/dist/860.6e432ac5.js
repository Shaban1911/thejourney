/*! For license information please see 860.6e432ac5.js.LICENSE.txt */
"use strict";
(self.webpackJsonpBrowserUpdateJs = self.webpackJsonpBrowserUpdateJs || []).push([[860], {
    860: (e, t, r) => {
        r.d(t, {
            Z: () => b
        });
        const s = {
            "Amazon Silk": "amazon_silk",
            "Android Browser": "android",
            Bada: "bada",
            BlackBerry: "blackberry",
            Chrome: "chrome",
            Chromium: "chromium",
            Electron: "electron",
            Epiphany: "epiphany",
            Firefox: "firefox",
            Focus: "focus",
            Generic: "generic",
            "Google Search": "google_search",
            Googlebot: "googlebot",
            "Internet Explorer": "ie",
            "K-Meleon": "k_meleon",
            Maxthon: "maxthon",
            "Microsoft Edge": "edge",
            "MZ Browser": "mz",
            "NAVER Whale Browser": "naver",
            Opera: "opera",
            "Opera Coast": "opera_coast",
            PhantomJS: "phantomjs",
            Puffin: "puffin",
            QupZilla: "qupzilla",
            QQ: "qq",
            QQLite: "qqlite",
            Safari: "safari",
            Sailfish: "sailfish",
            "Samsung Internet for Android": "samsung_internet",
            SeaMonkey: "seamonkey",
            Sleipnir: "sleipnir",
            Swing: "swing",
            Tizen: "tizen",
            "UC Browser": "uc",
            Vivaldi: "vivaldi",
            "WebOS Browser": "webos",
            WeChat: "wechat",
            "Yandex Browser": "yandex",
            Roku: "roku"
        }
          , i = {
            amazon_silk: "Amazon Silk",
            android: "Android Browser",
            bada: "Bada",
            blackberry: "BlackBerry",
            chrome: "Chrome",
            chromium: "Chromium",
            electron: "Electron",
            epiphany: "Epiphany",
            firefox: "Firefox",
            focus: "Focus",
            generic: "Generic",
            googlebot: "Googlebot",
            google_search: "Google Search",
            ie: "Internet Explorer",
            k_meleon: "K-Meleon",
            maxthon: "Maxthon",
            edge: "Microsoft Edge",
            mz: "MZ Browser",
            naver: "NAVER Whale Browser",
            opera: "Opera",
            opera_coast: "Opera Coast",
            phantomjs: "PhantomJS",
            puffin: "Puffin",
            qupzilla: "QupZilla",
            qq: "QQ Browser",
            qqlite: "QQ Browser Lite",
            safari: "Safari",
            sailfish: "Sailfish",
            samsung_internet: "Samsung Internet for Android",
            seamonkey: "SeaMonkey",
            sleipnir: "Sleipnir",
            swing: "Swing",
            tizen: "Tizen",
            uc: "UC Browser",
            vivaldi: "Vivaldi",
            webos: "WebOS Browser",
            wechat: "WeChat",
            yandex: "Yandex Browser"
        }
          , n = {
            tablet: "tablet",
            mobile: "mobile",
            desktop: "desktop",
            tv: "tv"
        }
          , o = {
            WindowsPhone: "Windows Phone",
            Windows: "Windows",
            MacOS: "macOS",
            iOS: "iOS",
            Android: "Android",
            WebOS: "WebOS",
            BlackBerry: "BlackBerry",
            Bada: "Bada",
            Tizen: "Tizen",
            Linux: "Linux",
            ChromeOS: "Chrome OS",
            PlayStation4: "PlayStation 4",
            Roku: "Roku"
        }
          , a = {
            EdgeHTML: "EdgeHTML",
            Blink: "Blink",
            Trident: "Trident",
            Presto: "Presto",
            Gecko: "Gecko",
            WebKit: "WebKit"
        };
        class c {
            static getFirstMatch(e, t) {
                const r = t.match(e);
                return r && r.length > 0 && r[1] || ""
            }
            static getSecondMatch(e, t) {
                const r = t.match(e);
                return r && r.length > 1 && r[2] || ""
            }
            static matchAndReturnConst(e, t, r) {
                if (e.test(t))
                    return r
            }
            static getWindowsVersionName(e) {
                switch (e) {
                case "NT":
                    return "NT";
                case "XP":
                case "NT 5.1":
                    return "XP";
                case "NT 5.0":
                    return "2000";
                case "NT 5.2":
                    return "2003";
                case "NT 6.0":
                    return "Vista";
                case "NT 6.1":
                    return "7";
                case "NT 6.2":
                    return "8";
                case "NT 6.3":
                    return "8.1";
                case "NT 10.0":
                    return "10";
                default:
                    return
                }
            }
            static getMacOSVersionName(e) {
                const t = e.split(".").splice(0, 2).map((e => parseInt(e, 10) || 0));
                if (t.push(0),
                10 === t[0])
                    switch (t[1]) {
                    case 5:
                        return "Leopard";
                    case 6:
                        return "Snow Leopard";
                    case 7:
                        return "Lion";
                    case 8:
                        return "Mountain Lion";
                    case 9:
                        return "Mavericks";
                    case 10:
                        return "Yosemite";
                    case 11:
                        return "El Capitan";
                    case 12:
                        return "Sierra";
                    case 13:
                        return "High Sierra";
                    case 14:
                        return "Mojave";
                    case 15:
                        return "Catalina";
                    default:
                        return
                    }
            }
            static getAndroidVersionName(e) {
                const t = e.split(".").splice(0, 2).map((e => parseInt(e, 10) || 0));
                if (t.push(0),
                !(1 === t[0] && t[1] < 5))
                    return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0
            }
            static getVersionPrecision(e) {
                return e.split(".").length
            }
            static compareVersions(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                const s = c.getVersionPrecision(e)
                  , i = c.getVersionPrecision(t);
                let n = Math.max(s, i)
                  , o = 0;
                const a = c.map([e, t], (e => {
                    const t = n - c.getVersionPrecision(e)
                      , r = e + new Array(t + 1).join(".0");
                    return c.map(r.split("."), (e => new Array(20 - e.length).join("0") + e)).reverse()
                }
                ));
                for (r && (o = n - Math.min(s, i)),
                n -= 1; n >= o; ) {
                    if (a[0][n] > a[1][n])
                        return 1;
                    if (a[0][n] === a[1][n]) {
                        if (n === o)
                            return 0;
                        n -= 1
                    } else if (a[0][n] < a[1][n])
                        return -1
                }
            }
            static map(e, t) {
                const r = [];
                let s;
                if (Array.prototype.map)
                    return Array.prototype.map.call(e, t);
                for (s = 0; s < e.length; s += 1)
                    r.push(t(e[s]));
                return r
            }
            static find(e, t) {
                let r, s;
                if (Array.prototype.find)
                    return Array.prototype.find.call(e, t);
                for (r = 0,
                s = e.length; r < s; r += 1) {
                    const s = e[r];
                    if (t(s, r))
                        return s
                }
            }
            static assign(e) {
                const t = e;
                let r, s;
                for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
                    n[o - 1] = arguments[o];
                if (Object.assign)
                    return Object.assign(e, ...n);
                for (r = 0,
                s = n.length; r < s; r += 1) {
                    const e = n[r];
                    if ("object" === typeof e && null !== e) {
                        Object.keys(e).forEach((r => {
                            t[r] = e[r]
                        }
                        ))
                    }
                }
                return e
            }
            static getBrowserAlias(e) {
                return s[e]
            }
            static getBrowserTypeByAlias(e) {
                return i[e] || ""
            }
        }
        const d = /version\/(\d+(\.?_?\d+)+)/i
          , h = [{
            test: [/googlebot/i],
            describe(e) {
                const t = {
                    name: "Googlebot"
                }
                  , r = c.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || c.getFirstMatch(d, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/opera/i],
            describe(e) {
                const t = {
                    name: "Opera"
                }
                  , r = c.getFirstMatch(d, e) || c.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/opr\/|opios/i],
            describe(e) {
                const t = {
                    name: "Opera"
                }
                  , r = c.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || c.getFirstMatch(d, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/SamsungBrowser/i],
            describe(e) {
                const t = {
                    name: "Samsung Internet for Android"
                }
                  , r = c.getFirstMatch(d, e) || c.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/Whale/i],
            describe(e) {
                const t = {
                    name: "NAVER Whale Browser"
                }
                  , r = c.getFirstMatch(d, e) || c.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/MZBrowser/i],
            describe(e) {
                const t = {
                    name: "MZ Browser"
                }
                  , r = c.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || c.getFirstMatch(d, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/focus/i],
            describe(e) {
                const t = {
                    name: "Focus"
                }
                  , r = c.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || c.getFirstMatch(d, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/swing/i],
            describe(e) {
                const t = {
                    name: "Swing"
                }
                  , r = c.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || c.getFirstMatch(d, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/coast/i],
            describe(e) {
                const t = {
                    name: "Opera Coast"
                }
                  , r = c.getFirstMatch(d, e) || c.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/opt\/\d+(?:.?_?\d+)+/i],
            describe(e) {
                const t = {
                    name: "Opera Touch"
                }
                  , r = c.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || c.getFirstMatch(d, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/yabrowser/i],
            describe(e) {
                const t = {
                    name: "Yandex Browser"
                }
                  , r = c.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || c.getFirstMatch(d, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/ucbrowser/i],
            describe(e) {
                const t = {
                    name: "UC Browser"
                }
                  , r = c.getFirstMatch(d, e) || c.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/Maxthon|mxios/i],
            describe(e) {
                const t = {
                    name: "Maxthon"
                }
                  , r = c.getFirstMatch(d, e) || c.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/epiphany/i],
            describe(e) {
                const t = {
                    name: "Epiphany"
                }
                  , r = c.getFirstMatch(d, e) || c.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/puffin/i],
            describe(e) {
                const t = {
                    name: "Puffin"
                }
                  , r = c.getFirstMatch(d, e) || c.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/sleipnir/i],
            describe(e) {
                const t = {
                    name: "Sleipnir"
                }
                  , r = c.getFirstMatch(d, e) || c.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/k-meleon/i],
            describe(e) {
                const t = {
                    name: "K-Meleon"
                }
                  , r = c.getFirstMatch(d, e) || c.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/micromessenger/i],
            describe(e) {
                const t = {
                    name: "WeChat"
                }
                  , r = c.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || c.getFirstMatch(d, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/qqbrowser/i],
            describe(e) {
                const t = {
                    name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
                }
                  , r = c.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || c.getFirstMatch(d, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/msie|trident/i],
            describe(e) {
                const t = {
                    name: "Internet Explorer"
                }
                  , r = c.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/\sedg\//i],
            describe(e) {
                const t = {
                    name: "Microsoft Edge"
                }
                  , r = c.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/edg([ea]|ios)/i],
            describe(e) {
                const t = {
                    name: "Microsoft Edge"
                }
                  , r = c.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/vivaldi/i],
            describe(e) {
                const t = {
                    name: "Vivaldi"
                }
                  , r = c.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/seamonkey/i],
            describe(e) {
                const t = {
                    name: "SeaMonkey"
                }
                  , r = c.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/sailfish/i],
            describe(e) {
                const t = {
                    name: "Sailfish"
                }
                  , r = c.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/silk/i],
            describe(e) {
                const t = {
                    name: "Amazon Silk"
                }
                  , r = c.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/phantom/i],
            describe(e) {
                const t = {
                    name: "PhantomJS"
                }
                  , r = c.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/slimerjs/i],
            describe(e) {
                const t = {
                    name: "SlimerJS"
                }
                  , r = c.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
            describe(e) {
                const t = {
                    name: "BlackBerry"
                }
                  , r = c.getFirstMatch(d, e) || c.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/(web|hpw)[o0]s/i],
            describe(e) {
                const t = {
                    name: "WebOS Browser"
                }
                  , r = c.getFirstMatch(d, e) || c.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/bada/i],
            describe(e) {
                const t = {
                    name: "Bada"
                }
                  , r = c.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/tizen/i],
            describe(e) {
                const t = {
                    name: "Tizen"
                }
                  , r = c.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || c.getFirstMatch(d, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/qupzilla/i],
            describe(e) {
                const t = {
                    name: "QupZilla"
                }
                  , r = c.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || c.getFirstMatch(d, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/firefox|iceweasel|fxios/i],
            describe(e) {
                const t = {
                    name: "Firefox"
                }
                  , r = c.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/electron/i],
            describe(e) {
                const t = {
                    name: "Electron"
                }
                  , r = c.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/MiuiBrowser/i],
            describe(e) {
                const t = {
                    name: "Miui"
                }
                  , r = c.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/chromium/i],
            describe(e) {
                const t = {
                    name: "Chromium"
                }
                  , r = c.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || c.getFirstMatch(d, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/chrome|crios|crmo/i],
            describe(e) {
                const t = {
                    name: "Chrome"
                }
                  , r = c.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/GSA/i],
            describe(e) {
                const t = {
                    name: "Google Search"
                }
                  , r = c.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test(e) {
                const t = !e.test(/like android/i)
                  , r = e.test(/android/i);
                return t && r
            },
            describe(e) {
                const t = {
                    name: "Android Browser"
                }
                  , r = c.getFirstMatch(d, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/playstation 4/i],
            describe(e) {
                const t = {
                    name: "PlayStation 4"
                }
                  , r = c.getFirstMatch(d, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/safari|applewebkit/i],
            describe(e) {
                const t = {
                    name: "Safari"
                }
                  , r = c.getFirstMatch(d, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/.*/i],
            describe(e) {
                const t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                return {
                    name: c.getFirstMatch(t, e),
                    version: c.getSecondMatch(t, e)
                }
            }
        }]
          , l = h
          , u = [{
            test: [/Roku\/DVP/],
            describe(e) {
                const t = c.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                return {
                    name: o.Roku,
                    version: t
                }
            }
        }, {
            test: [/windows phone/i],
            describe(e) {
                const t = c.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
                return {
                    name: o.WindowsPhone,
                    version: t
                }
            }
        }, {
            test: [/windows /i],
            describe(e) {
                const t = c.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e)
                  , r = c.getWindowsVersionName(t);
                return {
                    name: o.Windows,
                    version: t,
                    versionName: r
                }
            }
        }, {
            test: [/Macintosh(.*?) FxiOS(.*?)\//],
            describe(e) {
                const t = {
                    name: o.iOS
                }
                  , r = c.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/macintosh/i],
            describe(e) {
                const t = c.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, ".")
                  , r = c.getMacOSVersionName(t)
                  , s = {
                    name: o.MacOS,
                    version: t
                };
                return r && (s.versionName = r),
                s
            }
        }, {
            test: [/(ipod|iphone|ipad)/i],
            describe(e) {
                const t = c.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
                return {
                    name: o.iOS,
                    version: t
                }
            }
        }, {
            test(e) {
                const t = !e.test(/like android/i)
                  , r = e.test(/android/i);
                return t && r
            },
            describe(e) {
                const t = c.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e)
                  , r = c.getAndroidVersionName(t)
                  , s = {
                    name: o.Android,
                    version: t
                };
                return r && (s.versionName = r),
                s
            }
        }, {
            test: [/(web|hpw)[o0]s/i],
            describe(e) {
                const t = c.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e)
                  , r = {
                    name: o.WebOS
                };
                return t && t.length && (r.version = t),
                r
            }
        }, {
            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
            describe(e) {
                const t = c.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || c.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || c.getFirstMatch(/\bbb(\d+)/i, e);
                return {
                    name: o.BlackBerry,
                    version: t
                }
            }
        }, {
            test: [/bada/i],
            describe(e) {
                const t = c.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                return {
                    name: o.Bada,
                    version: t
                }
            }
        }, {
            test: [/tizen/i],
            describe(e) {
                const t = c.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
                return {
                    name: o.Tizen,
                    version: t
                }
            }
        }, {
            test: [/linux/i],
            describe: () => ({
                name: o.Linux
            })
        }, {
            test: [/CrOS/],
            describe: () => ({
                name: o.ChromeOS
            })
        }, {
            test: [/PlayStation 4/],
            describe(e) {
                const t = c.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
                return {
                    name: o.PlayStation4,
                    version: t
                }
            }
        }]
          , g = [{
            test: [/googlebot/i],
            describe: () => ({
                type: "bot",
                vendor: "Google"
            })
        }, {
            test: [/huawei/i],
            describe(e) {
                const t = c.getFirstMatch(/(can-l01)/i, e) && "Nova"
                  , r = {
                    type: n.mobile,
                    vendor: "Huawei"
                };
                return t && (r.model = t),
                r
            }
        }, {
            test: [/nexus\s*(?:7|8|9|10).*/i],
            describe: () => ({
                type: n.tablet,
                vendor: "Nexus"
            })
        }, {
            test: [/ipad/i],
            describe: () => ({
                type: n.tablet,
                vendor: "Apple",
                model: "iPad"
            })
        }, {
            test: [/Macintosh(.*?) FxiOS(.*?)\//],
            describe: () => ({
                type: n.tablet,
                vendor: "Apple",
                model: "iPad"
            })
        }, {
            test: [/kftt build/i],
            describe: () => ({
                type: n.tablet,
                vendor: "Amazon",
                model: "Kindle Fire HD 7"
            })
        }, {
            test: [/silk/i],
            describe: () => ({
                type: n.tablet,
                vendor: "Amazon"
            })
        }, {
            test: [/tablet(?! pc)/i],
            describe: () => ({
                type: n.tablet
            })
        }, {
            test(e) {
                const t = e.test(/ipod|iphone/i)
                  , r = e.test(/like (ipod|iphone)/i);
                return t && !r
            },
            describe(e) {
                const t = c.getFirstMatch(/(ipod|iphone)/i, e);
                return {
                    type: n.mobile,
                    vendor: "Apple",
                    model: t
                }
            }
        }, {
            test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
            describe: () => ({
                type: n.mobile,
                vendor: "Nexus"
            })
        }, {
            test: [/[^-]mobi/i],
            describe: () => ({
                type: n.mobile
            })
        }, {
            test: e => "blackberry" === e.getBrowserName(!0),
            describe: () => ({
                type: n.mobile,
                vendor: "BlackBerry"
            })
        }, {
            test: e => "bada" === e.getBrowserName(!0),
            describe: () => ({
                type: n.mobile
            })
        }, {
            test: e => "windows phone" === e.getBrowserName(),
            describe: () => ({
                type: n.mobile,
                vendor: "Microsoft"
            })
        }, {
            test(e) {
                const t = Number(String(e.getOSVersion()).split(".")[0]);
                return "android" === e.getOSName(!0) && t >= 3
            },
            describe: () => ({
                type: n.tablet
            })
        }, {
            test: e => "android" === e.getOSName(!0),
            describe: () => ({
                type: n.mobile
            })
        }, {
            test: e => "macos" === e.getOSName(!0),
            describe: () => ({
                type: n.desktop,
                vendor: "Apple"
            })
        }, {
            test: e => "windows" === e.getOSName(!0),
            describe: () => ({
                type: n.desktop
            })
        }, {
            test: e => "linux" === e.getOSName(!0),
            describe: () => ({
                type: n.desktop
            })
        }, {
            test: e => "playstation 4" === e.getOSName(!0),
            describe: () => ({
                type: n.tv
            })
        }, {
            test: e => "roku" === e.getOSName(!0),
            describe: () => ({
                type: n.tv
            })
        }]
          , m = [{
            test: e => "microsoft edge" === e.getBrowserName(!0),
            describe(e) {
                if (/\sedg\//i.test(e))
                    return {
                        name: a.Blink
                    };
                const t = c.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                return {
                    name: a.EdgeHTML,
                    version: t
                }
            }
        }, {
            test: [/trident/i],
            describe(e) {
                const t = {
                    name: a.Trident
                }
                  , r = c.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: e => e.test(/presto/i),
            describe(e) {
                const t = {
                    name: a.Presto
                }
                  , r = c.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test(e) {
                const t = e.test(/gecko/i)
                  , r = e.test(/like gecko/i);
                return t && !r
            },
            describe(e) {
                const t = {
                    name: a.Gecko
                }
                  , r = c.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }, {
            test: [/(apple)?webkit\/537\.36/i],
            describe: () => ({
                name: a.Blink
            })
        }, {
            test: [/(apple)?webkit/i],
            describe(e) {
                const t = {
                    name: a.WebKit
                }
                  , r = c.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r),
                t
            }
        }];
        const p = class {
            constructor(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (void 0 === e || null === e || "" === e)
                    throw new Error("UserAgent parameter can't be empty");
                this._ua = e,
                this.parsedResult = {},
                !0 !== t && this.parse()
            }
            getUA() {
                return this._ua
            }
            test(e) {
                return e.test(this._ua)
            }
            parseBrowser() {
                this.parsedResult.browser = {};
                const e = c.find(l, (e => {
                    if ("function" === typeof e.test)
                        return e.test(this);
                    if (e.test instanceof Array)
                        return e.test.some((e => this.test(e)));
                    throw new Error("Browser's test function is not valid")
                }
                ));
                return e && (this.parsedResult.browser = e.describe(this.getUA())),
                this.parsedResult.browser
            }
            getBrowser() {
                return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
            }
            getBrowserName(e) {
                return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
            }
            getBrowserVersion() {
                return this.getBrowser().version
            }
            getOS() {
                return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
            }
            parseOS() {
                this.parsedResult.os = {};
                const e = c.find(u, (e => {
                    if ("function" === typeof e.test)
                        return e.test(this);
                    if (e.test instanceof Array)
                        return e.test.some((e => this.test(e)));
                    throw new Error("Browser's test function is not valid")
                }
                ));
                return e && (this.parsedResult.os = e.describe(this.getUA())),
                this.parsedResult.os
            }
            getOSName(e) {
                const {name: t} = this.getOS();
                return e ? String(t).toLowerCase() || "" : t || ""
            }
            getOSVersion() {
                return this.getOS().version
            }
            getPlatform() {
                return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
            }
            getPlatformType() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                const {type: t} = this.getPlatform();
                return e ? String(t).toLowerCase() || "" : t || ""
            }
            parsePlatform() {
                this.parsedResult.platform = {};
                const e = c.find(g, (e => {
                    if ("function" === typeof e.test)
                        return e.test(this);
                    if (e.test instanceof Array)
                        return e.test.some((e => this.test(e)));
                    throw new Error("Browser's test function is not valid")
                }
                ));
                return e && (this.parsedResult.platform = e.describe(this.getUA())),
                this.parsedResult.platform
            }
            getEngine() {
                return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
            }
            getEngineName(e) {
                return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
            }
            parseEngine() {
                this.parsedResult.engine = {};
                const e = c.find(m, (e => {
                    if ("function" === typeof e.test)
                        return e.test(this);
                    if (e.test instanceof Array)
                        return e.test.some((e => this.test(e)));
                    throw new Error("Browser's test function is not valid")
                }
                ));
                return e && (this.parsedResult.engine = e.describe(this.getUA())),
                this.parsedResult.engine
            }
            parse() {
                return this.parseBrowser(),
                this.parseOS(),
                this.parsePlatform(),
                this.parseEngine(),
                this
            }
            getResult() {
                return c.assign({}, this.parsedResult)
            }
            satisfies(e) {
                const t = {};
                let r = 0;
                const s = {};
                let i = 0;
                if (Object.keys(e).forEach((n => {
                    const o = e[n];
                    "string" === typeof o ? (s[n] = o,
                    i += 1) : "object" === typeof o && (t[n] = o,
                    r += 1)
                }
                )),
                r > 0) {
                    const e = Object.keys(t)
                      , r = c.find(e, (e => this.isOS(e)));
                    if (r) {
                        const e = this.satisfies(t[r]);
                        if (void 0 !== e)
                            return e
                    }
                    const s = c.find(e, (e => this.isPlatform(e)));
                    if (s) {
                        const e = this.satisfies(t[s]);
                        if (void 0 !== e)
                            return e
                    }
                }
                if (i > 0) {
                    const e = Object.keys(s)
                      , t = c.find(e, (e => this.isBrowser(e, !0)));
                    if (void 0 !== t)
                        return this.compareVersion(s[t])
                }
            }
            isBrowser(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const r = this.getBrowserName().toLowerCase();
                let s = e.toLowerCase();
                const i = c.getBrowserTypeByAlias(s);
                return t && i && (s = i.toLowerCase()),
                s === r
            }
            compareVersion(e) {
                let t = [0]
                  , r = e
                  , s = !1;
                const i = this.getBrowserVersion();
                if ("string" === typeof i)
                    return ">" === e[0] || "<" === e[0] ? (r = e.substr(1),
                    "=" === e[1] ? (s = !0,
                    r = e.substr(2)) : t = [],
                    ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? r = e.substr(1) : "~" === e[0] && (s = !0,
                    r = e.substr(1)),
                    t.indexOf(c.compareVersions(i, r, s)) > -1
            }
            isOS(e) {
                return this.getOSName(!0) === String(e).toLowerCase()
            }
            isPlatform(e) {
                return this.getPlatformType(!0) === String(e).toLowerCase()
            }
            isEngine(e) {
                return this.getEngineName(!0) === String(e).toLowerCase()
            }
            is(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e)
            }
            some() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).some((e => this.is(e)))
            }
        }
        ;
        const b = class {
            static getParser(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if ("string" !== typeof e)
                    throw new Error("UserAgent should be a string");
                return new p(e,t)
            }
            static parse(e) {
                return new p(e).getResult()
            }
            static get BROWSER_MAP() {
                return i
            }
            static get ENGINE_MAP() {
                return a
            }
            static get OS_MAP() {
                return o
            }
            static get PLATFORMS_MAP() {
                return n
            }
        }
    }
}]);
//# sourceMappingURL=/ytos/releases/CARTIER/2024/dist/860.6e432ac5.js.map
