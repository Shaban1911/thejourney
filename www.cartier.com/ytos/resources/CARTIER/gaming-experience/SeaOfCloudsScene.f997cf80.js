var D = Object.defineProperty;
var j = (c, s, e) => s in c ? D(c, s, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : c[s] = e;
var S = (c, s, e) => (j(c, typeof s != "symbol" ? s + "" : s, e),
e);
import {al as n, bz as $, bD as B, ao as W, a$ as E, b5 as I, bG as d, c2 as k, c3 as z, aQ as x, c4 as Y, c5 as G, aW as N} from "./vendors/vendors.a233fc08.js";
import {B as L, a as u, S as V, i as v, H} from "./app.0ebd139a.js";
import {B as g, A as q, S as Q, C as X, E as Z} from "./BaseLevel.3cf717b5.js";
import {G as J, T as O} from "./TextMaterial.a6b46cf7.js";
import "./experience.js";
class K extends L {
    init() {
        const {color: s=n(11576740)} = this.props
          , {$store: e, $game: a} = this.webgl;
        e.camBoundaries,
        this.base = new $(this.webgl.$assets.geometries.register("plane", B),new J({
            color: new W(s.value),
            fog: !0,
            uniforms: {
                uCityCenter: {
                    value: this.scene.environment.center
                }
            }
        })),
        this.base.rotation.x = Math.PI / -2,
        this.base.renderOrder = -1,
        this.base.renderToDepthPrepass = !0,
        this.base.matrixAutoUpdate = !1,
        this.base.manualMatrixUpdate = !0,
        this.position = this.base.position,
        this.position.y = -7,
        this.base.updateMatrix(),
        this.base.updateMatrixWorld(!0),
        this.base.material.onBeforeCompile = t => {
            Object.assign(t.uniforms, {
                ...E.fog
            })
        }
        ,
        this.updateScale()
    }
    update() {
        const s = this.scene.camera;
        this.base.position.x = s.base.position.x,
        this.base.updateMatrix()
    }
    updateScale() {
        const {horizontal: s, vertical: e} = this.webgl.$store.camBoundaries
          , a = (s.value.y - s.value.x) * 1e3
          , t = (e.value.y - e.value.x) * 10;
        this.base.scale.set(a, t, 1),
        this.base.updateMatrix(),
        this.base.updateMatrixWorld(!0)
    }
    dispose() {
        this.base.geometry.dispose(),
        this.base.material.dispose()
    }
}
const ee = new x(0,5,10);
class se extends L {
    init() {
        const {$store: s} = this.webgl;
        this.base = new I,
        this.alColor = d(n(6766955), "soc_alColor"),
        this.alIntensity = d(n(1), "soc_alIntensity"),
        this.dlColor = d(n(16763036), "soc_dlColor"),
        this.dlIntensity = d(n(.5), "soc_dlIntensity"),
        this.sunColor = d(n(16759665), "soc_sunColor"),
        this.sunIntensity = d(n(1.6), "soc_sunIntensity"),
        this.sunDistance = d(n(0), "soc_sunDistance"),
        this.sunDecay = d(n(2), "soc_sunDecay"),
        this.al = new k(this.alColor.get(),this.alIntensity.get()),
        this.al.layers.enable(s.layers.PLAYER),
        this.sun = new z(this.sunColor.get(),this.sunIntensity.get(),this.sunDistance.get()),
        this.sunPosition = d(n(new x(200,70,-20)), "soc_sunPosition"),
        this.sun.position.copy(this.sunPosition.get()),
        this.sun.matrixAutoUpdate = !1,
        this.sun.manualMatrixUpdate = !0,
        this.sun.layers.enable(s.layers.PLAYER),
        this.sun.updateMatrix(),
        this.zepLight = new z(16759665,3,15),
        this.zepLight.position.set(-4.62896, 10.9302, 12.95189),
        this.zepLight.matrixAutoUpdate = !1,
        this.zepLight.manualMatrixUpdate = !0,
        this.zepLight.layers.enable(s.layers.PLAYER),
        this.zepLight.layers.enable(s.layers.ENV),
        this.base.add(this.al, this.sun, this.zepLight)
    }
    update() {
        const s = this.scene.camera;
        this.sun.position.copy(this.sunPosition.value),
        this.sun.position.x += s.base.position.x,
        this.sun.updateMatrix(),
        this.zepLight.position.copy(this.parent.zeppelin.base.position).add(ee),
        this.zepLight.updateMatrix(),
        this.zepLight.updateMatrixWorld(!0)
    }
}
const te = {
    principle: u.$device.type.mobile ? u.$l("TUTORIAL-one-mobile") : u.$l("TUTORIAL-one-desktop"),
    gems: u.$l("TUTORIAL-two-all"),
    congratulations: "Congratulations"
}
  , _ = new x
  , A = ["th_th"];
class ie extends L {
    init() {
        const {ld: s, textColor: e="#ffffff"} = this.props
          , {$store: a} = this.webgl
          , t = new B
          , i = u.$device.type.mobile
          , m = u.$i18n.locale
          , f = A.includes(m);
        let b = 14;
        f && (b *= 1.2),
        this.ld = s,
        this.textures = {},
        this.base = new I,
        this._timeScale = 1,
        this.timeScaleTarget = 1,
        this.isSlowingDown = !1,
        this.offsetX = 8,
        this.isOver = !1,
        this.createTextures(),
        this.firstCollectible = s.collectiblesManager.collectibles.reduce( (r, l) => l.position.x < r.position.x ? l : r, {
            position: {
                x: 1 / 0
            }
        }),
        this.firstCollectible.collided = () => {
            this.tutorials.gems.highlight.visible = !1,
            this.tutorials.gems.highlight.collected = !0
        }
        ,
        this.firstCombo = s.combosManager.combos.reduce( (r, l) => l.collectibles[0].instance.position.x < r.position.x ? l.collectibles[0].instance : r, {
            position: {
                x: 1 / 0
            }
        }),
        this.tutorials = {
            principle: {
                mesh: new $(t,new O({
                    color: e,
                    map: this.textures.principle,
                    uniforms: {
                        progress: {
                            value: 0
                        }
                    }
                })),
                offset: new x(0,i ? -3 : -1.5,-20)
            },
            gems: {
                mesh: new $(t,new O({
                    color: e,
                    map: this.textures.gems,
                    uniforms: {
                        progress: {
                            value: 0
                        }
                    }
                })),
                offset: new x(0,i ? -20 : -25,i ? -51 : -100),
                parent: this.firstCollectible.parent,
                highlight: new V({
                    batcher: "titles",
                    sprite: "circle",
                    alpha: 1,
                    fx: 1,
                    scale: .01,
                    billboard: !0,
                    parent: this.firstCollectible.parent
                })
            }
        },
        this.arrayTutos = Object.values(this.tutorials),
        this.arrayTutos.forEach( ({mesh: r}) => {
            r.renderOrder = a.z.ld,
            r.scale.setScalar(b),
            this.base.add(r)
        }
        ),
        this.webgl.$game.events.start.watch( () => this.reset()),
        this.webgl.$game.events.reset.watch( () => this.reset()),
        this.update()
    }
    createTextures() {
        const {textColor: s="#ffffff", shadowBlur: e=60, shadowColor: a="rgba(0, 0, 0, .3)"} = this.props
          , t = this.webgl.$renderer.pixelRatio.get()
          , i = u.$device.type.mobile
          , m = u.$store.isRTL
          , f = u.$i18n.locale
          , b = A.includes(f)
          , r = 1.2
          , l = (i ? 256 : 1024) * t;
        let p = (i ? 24 : 86) * t;
        b && (p *= .8),
        Object.entries(te).forEach( ([y,w]) => {
            const h = document.createElement("canvas");
            h.width = l * t,
            h.height = l * t,
            h.style.width = `${l / t}px`,
            h.style.height = `${l / t}px`;
            const o = h.getContext("2d");
            o.textAlign = "center",
            o.direction = m ? "rtl" : "ltr",
            o.textBaseline = "bottom",
            o.font = `italic ${p}px FancyCutPro, Times News Roman, serif`,
            o.shadowBlur = e * t,
            o.shadowColor = a,
            o.scale(t, t);
            const P = new Y(w,{
                br: /<br\/?>/,
                nbsp: /&nbsp;/,
                shy: /&shy;/,
                zwsp: /&ZeroWidthSpace;/,
                measure: C => (o.textAlign = "center",
                o.shadowBlur = e * t,
                o.shadowColor = a,
                o.direction = m ? "rtl" : "ltr",
                o.textBaseline = "bottom",
                o.font = `italic ${p}px FancyCutPro, Times News Roman, serif`,
                o.measureText(C).width)
            })
              , {lines: T} = P.wrap(h.width / t);
            o.fillStyle = `${s}`;
            const F = h.height / (2 * t) - p * r * (T.length * .5);
            T.forEach( (C, U) => {
                const R = U * p * r;
                o.textAlign = "center",
                o.textBaseline = "bottom",
                o.fillText(C.value, h.width / (2 * t), R + F)
            }
            );
            const M = new G(h);
            this.scene.prerenderTextures.push(M),
            this.textures[y] = M
        }
        ),
        this.arrayTextures = Object.values(this.textures)
    }
    mount() {
        this.isOver = !1,
        this.arrayTutos.forEach( ({mesh: s, highlight: e}) => {
            e == null || e.addToBatcher(),
            e && (e.collected = !1)
        }
        )
    }
    unMount() {
        this.isOver = !0,
        this.arrayTutos.forEach( ({mesh: s, highlight: e}) => {
            e == null || e.removeFromBatcher()
        }
        )
    }
    reset() {
        this.isResetting = !0,
        this.isOver = !1,
        this.arrayTutos.forEach( ({mesh: s, highlight: e}) => {
            s.visible = !1,
            s.material.progress = 0,
            s.material.alpha = 0,
            e && (e.visible = !0,
            e.collected = !1)
        }
        ),
        setTimeout( () => {
            this.arrayTutos.forEach( ({mesh: s}) => {
                s.visible = !0
            }
            )
        }
        , 1e3)
    }
    update(s) {
        if (!this.webgl || !this.started && !s)
            return;
        const {pausedElapsed: e} = this.webgl.$time
          , {progress: a} = this.scene;
        if (this.isOver) {
            this.base.visible = !1;
            return
        }
        const t = this.ld.isVisible;
        this.base.visible = t,
        this.isOver = a > 100,
        this.arrayTutos.forEach( (i, m) => {
            const {mesh: f, offset: b, parent: r} = i;
            _.copy(b),
            r && _.applyMatrix4(r.matrixWorld);
            const l = N(a - _.x, -20, 0);
            i.mesh.material.progress = l,
            i.mesh.material.alpha = this.started ? 1 : 0,
            f.position.copy(_),
            i.highlight && (i.highlight.collected || (i.highlight.visible = this.base.visible && !this.isOver),
            i.highlight.scale.setScalar(.02 + Math.sin(e * .003) * .002))
        }
        )
    }
    start() {
        this.started = !0
    }
    stop() {
        this.started = !1
    }
    dispose() {
        this.arrayTutos.forEach( ({mesh: s}) => {
            s.material.dispose(),
            s.geometry.dispose()
        }
        ),
        this.arrayTextures.forEach(s => s.dispose())
    }
}
class he extends g {
    constructor() {
        super(...arguments);
        S(this, "name", "sea_of_clouds")
    }
    static async load() {
        const {load: e} = v.$assets;
        await Promise.all([e("sea_of_clouds/dataset", {
            id: "soc_dataset"
        }), e("sea_of_clouds/lightmap", {
            id: "soc_lightmap"
        }), e("sea_of_clouds/env", {
            id: "soc_env"
        }), e("sea_of_clouds/lut", {
            id: "soc_lut",
            data: !0,
            flipY: !1,
            linear: !0
        }), e("sea_of_clouds/lut-storm", {
            id: "soc_lutstorm",
            data: !0,
            flipY: !1,
            linear: !0
        }), ...g.getLoadArray("sea_of_clouds/textures/albedo", "soc_env/albedo", {
            data: !0
        }), ...g.getLoadArray("sea_of_clouds/textures/roughness", "soc_env/roughness", {
            data: !0
        }), ...g.getLoadArray("sea_of_clouds/textures/normal", "soc_env/normal", {
            data: !0
        }), ...g.getLoadArray("sea_of_clouds/textures/metallic", "soc_env/metallic", {
            data: !0
        })])
    }
    init() {
        this.webgl,
        this.fogColor.set(16762010),
        this.fog.near = 100,
        this.fog.far = 230,
        E.fog.fogFarDensity.value = 100,
        this.lut = v.$assets.textures.soc_lut,
        this.lutStorm = v.$assets.textures.soc_lutstorm,
        this.ascendFog = new q(this.name,{
            color: 6243167,
            density: 4.72,
            offset: -4.46,
            frequency: 7e-4,
            amplitude: 2.17,
            speed: 2,
            lacunarity: 3,
            gain: .47
        }),
        this.color = 14196856,
        this.reset(),
        this.generateLevel()
    }
    destroy() {
        const {$particles: e, $game: a} = this.webgl;
        e.removeFromParent(["smoke", "gem_normal", "gem_emissive", "birds_normal", "trail", "titles", "wind"]),
        super.destroy()
    }
    afterInit() {
        var e, a;
        super.afterInit(),
        this.sky = this.add(Q, {
            color: this.ascendFog.color.value
        }),
        this.ground = this.add(K, {
            color: this.ascendFog.color
        }),
        this.tutorial = this.add(ie, {
            ld: this.ld
        }),
        this.title.startPos = 80,
        this.title.scale.setScalar(.012),
        this.storm && (this.storm.setColors({
            topColor: 5064553,
            botColor: 9341850
        }),
        this.storm.setWeather({
            rainColor: 16774360
        }),
        this.storm.hasThunder = !0),
        (e = this.ld.collectiblesManager) == null || e.setColors(16702816, 16702816),
        (a = this.ld.combosManager) == null || a.setColors(16761066, 16761066)
    }
    in() {
        var i;
        const {$particles: e, $store: a, playSound: t} = this.webgl;
        e.addTo(this.base, ["smoke", "gem_normal", "gem_emissive", "birds_normal", "trail", "titles", "wind"]),
        setTimeout( () => {}
        , 5e3),
        this.zeppelin.materials.Ballon.emissive.set(6425607),
        this.zeppelin.materials.Ballon.envMapIntensity = .5,
        this.zeppelin.materials.Ring.emissive.set(9604720),
        this.zeppelin.materials.Temple.color.set(16302451),
        this.temple.templeMaterial.emissiveIntensity = .24,
        (i = this.tutorial) == null || i.mount()
    }
    out() {
        var e;
        this.webgl,
        this.webgl,
        (e = this.tutorial) == null || e.unMount()
    }
    update() {
        const e = this.webgl.$time.dt * .001;
        this.webgl.$time.elapsed * .001,
        this.ascendFog.update(e)
    }
    generateLevel() {
        const {$assets: e, $game: a, $particles: t, $renderer: i, $app: m} = this.webgl
          , {bgm: f} = m.$audio;
        this.lights = this.add(se),
        this.clouds = this.add(X, {
            noiseFrequency: .3,
            noiseAmplitude: 3.5,
            windSpeed: .05,
            scales: {
                x: 8,
                y: 10
            },
            offsetY: -5.4,
            density: 16,
            layers: 12,
            repartition: 60,
            ascendFog: this.ascendFog,
            name: "Clouds",
            color: 7694168,
            lightColor: 16756601
        }),
        this.environment = this.add(Z, {
            lightmapScale: e.data.soc_dataset.lightmap_scale,
            scene: e.objects.soc_env.scene,
            ascendFog: this.ascendFog,
            texturePrefix: "soc_env"
        });
        const {atlas: b, res: r, ...l} = this.clouds.material.uniforms
          , p = t.batchers.smoke;
        Object.assign(p.base.material.defines, this.clouds.material.defines),
        Object.assign(p.base.material.uniforms, {
            res: i.drawingBufferSize,
            ...l
        }),
        this.hotairballoon = this.add(H),
        this.level = a.levels.create(this.name, {
            scene: this,
            data: e.data.soc_dataset
        }),
        this.level.stormy.watch(y => {
            var w;
            (w = this.storm) == null || w.toggleStorm(y),
            f.toggle("soc_storm", y, {
                force: !0
            })
        }
        )
    }
    dispose() {
        const {soc_lightmap: e, soc_lut: a, soc_lutstorm: t} = v.$assets.textures;
        [e, a, t].forEach(i => i == null ? void 0 : i.dispose()),
        super.dispose()
    }
}
export {he as default};
