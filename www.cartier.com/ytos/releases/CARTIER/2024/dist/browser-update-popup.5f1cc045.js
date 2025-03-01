"use strict";
(self.webpackJsonpBrowserUpdateJs = self.webpackJsonpBrowserUpdateJs || []).push([[882], {
    586: (e, s, t) => {
        var r = t(860);
        class o extends HTMLElement {
            constructor() {
                super()
            }
            connectedCallback() {
                this.browser = r.Z.getParser(window.navigator.userAgent),
                this.supportedBrowsersList = JSON.parse(this.dataset.supportedBrowsers),
                this.browserUpdateLink = document.getElementById("browserUpdateLink"),
                this.checkSupport()
            }
            getBrowserSupportInfo() {
                var e;
                const s = this.supportedBrowsersList.find((e => this.browser.isBrowser(e.Browser.toLowerCase(), !0) && !this.browser.satisfies({
                    [e.Browser.toLowerCase()]: `>=${e.Version}`
                })));
                return {
                    supported: !s,
                    upgradeLink: null !== (e = null === s || void 0 === s ? void 0 : s.UpgradeLink) && void 0 !== e ? e : ""
                }
            }
            checkSupport() {
                const e = this.getBrowserSupportInfo();
                e.supported || (e.upgradeLink || (this.browserUpdateLink.outerHTML = this.browserUpdateLink.innerText),
                this.showPopup(e.upgradeLink))
            }
            showPopup(e) {
                this.classList.add("ready"),
                document.documentElement.classList.add("locked-navigation"),
                this.browserUpdateLink.href = e,
                [...document.body.children].filter((e => !e.classList.contains("browser-update-popup"))).forEach((e => {
                    e.setAttribute("aria-hidden", "true")
                }
                ));
                const s = () => {
                    [...document.querySelectorAll("*:not(.browser-update-popup)")].filter((e => !e.closest(".browser-update-popup"))).forEach((e => e.setAttribute("tabindex", "-1")))
                }
                ;
                s(),
                setTimeout(s, 3e3)
            }
        }
        customElements.define("browser-update-popup", o)
    }
}, e => {
    e.O(0, [860], ( () => {
        return s = 586,
        e(e.s = s);
        var s
    }
    ));
    e.O()
}
]);
//# sourceMappingURL=/ytos/releases/CARTIER/2024/dist/browser-update-popup.5f1cc045.js.map
