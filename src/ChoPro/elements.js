(()=>{"use strict";class t extends HTMLElement{constructor(e){super();const s=this.attachShadow({mode:"open"}),o=document.createElement("link"),r=new Event("ready",{bubbles:!0,composed:!0});o.setAttribute("rel","stylesheet"),o.setAttribute("href",`${t.publicPath}${e}`),o.addEventListener("load",(()=>this.dispatchEvent(r)),{once:!0}),s.appendChild(o)}}class e extends t{constructor(){super("styles/styles.control.css")}}class s extends t{constructor(){super("styles/styles.root.css")}}(()=>{const o=document.currentScript;if(!o)throw new Error("Could not reference current script");const r=o.getAttribute("public-path");if(!r)throw new Error("Custom elements could not be registered");t.publicPath=r,customElements.get("protonpass-root")||customElements.define("protonpass-root",s),customElements.get("protonpass-control")||customElements.define("protonpass-control",e)})()})();
//# sourceMappingURL=elements.js.map