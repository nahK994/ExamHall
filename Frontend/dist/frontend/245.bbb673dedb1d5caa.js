"use strict";(self.webpackChunkFrontend=self.webpackChunkFrontend||[]).push([[245],{5245:(X,O,l)=>{l.d(O,{Hw:()=>Q,Ps:()=>J});var i=l(5e3),E=l(508),T=l(3191),S=l(9808),g=l(9646),w=l(2843),D=l(4128),N=l(727),C=l(8505),d=l(4004),U=l(262),x=l(8746),B=l(3099),W=l(5698),F=l(520),M=l(2313);const b=["*"];let v;function m(o){var a;return(null===(a=function K(){if(void 0===v&&(v=null,"undefined"!=typeof window)){const o=window;void 0!==o.trustedTypes&&(v=o.trustedTypes.createPolicy("angular#components",{createHTML:a=>a}))}return v}())||void 0===a?void 0:a.createHTML(o))||o}function R(o){return Error(`Unable to find icon with the name "${o}"`)}function y(o){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${o}".`)}function A(o){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${o}".`)}class h{constructor(a,t,e){this.url=a,this.svgText=t,this.options=e}}let I=(()=>{class o{constructor(t,e,n,s){this._httpClient=t,this._sanitizer=e,this._errorHandler=s,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass="material-icons",this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,s){return this._addSvgIconConfig(t,e,new h(n,null,s))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,s){const r=this._sanitizer.sanitize(i.q3G.HTML,n);if(!r)throw A(n);const c=m(r);return this._addSvgIconConfig(t,e,new h("",c,s))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new h(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){const s=this._sanitizer.sanitize(i.q3G.HTML,e);if(!s)throw A(e);const r=m(s);return this._addSvgIconSetConfig(t,new h("",r,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){const e=this._sanitizer.sanitize(i.q3G.RESOURCE_URL,t);if(!e)throw y(t);const n=this._cachedIconsByUrl.get(e);return n?(0,g.of)(p(n)):this._loadSvgIconFromConfig(new h(t,null)).pipe((0,C.b)(s=>this._cachedIconsByUrl.set(e,s)),(0,d.U)(s=>p(s)))}getNamedSvgIcon(t,e=""){const n=L(e,t);let s=this._svgIconConfigs.get(n);if(s)return this._getSvgFromConfig(s);if(s=this._getIconConfigFromResolvers(e,t),s)return this._svgIconConfigs.set(n,s),this._getSvgFromConfig(s);const r=this._iconSetConfigs.get(e);return r?this._getSvgFromIconSetConfigs(t,r):(0,w._)(R(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?(0,g.of)(p(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe((0,d.U)(e=>p(e)))}_getSvgFromIconSetConfigs(t,e){const n=this._extractIconWithNameFromAnySet(t,e);if(n)return(0,g.of)(n);const s=e.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe((0,U.K)(c=>{const u=`Loading icon set URL: ${this._sanitizer.sanitize(i.q3G.RESOURCE_URL,r.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(u)),(0,g.of)(null)})));return(0,D.D)(s).pipe((0,d.U)(()=>{const r=this._extractIconWithNameFromAnySet(t,e);if(!r)throw R(t);return r}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){const s=e[n];if(s.svgText&&s.svgText.toString().indexOf(t)>-1){const r=this._svgElementFromConfig(s),c=this._extractSvgIconFromSet(r,t,s.options);if(c)return c}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe((0,C.b)(e=>t.svgText=e),(0,d.U)(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?(0,g.of)(null):this._fetchIcon(t).pipe((0,C.b)(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){const s=t.querySelector(`[id="${e}"]`);if(!s)return null;const r=s.cloneNode(!0);if(r.removeAttribute("id"),"svg"===r.nodeName.toLowerCase())return this._setSvgAttributes(r,n);if("symbol"===r.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(r),n);const c=this._svgElementFromString(m("<svg></svg>"));return c.appendChild(r),this._setSvgAttributes(c,n)}_svgElementFromString(t){const e=this._document.createElement("DIV");e.innerHTML=t;const n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){const e=this._svgElementFromString(m("<svg></svg>")),n=t.attributes;for(let s=0;s<n.length;s++){const{name:r,value:c}=n[s];"id"!==r&&e.setAttribute(r,c)}for(let s=0;s<t.childNodes.length;s++)t.childNodes[s].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[s].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){var e;const{url:n,options:s}=t,r=null!==(e=null==s?void 0:s.withCredentials)&&void 0!==e&&e;if(!this._httpClient)throw function H(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}();if(null==n)throw Error(`Cannot fetch icon from URL "${n}".`);const c=this._sanitizer.sanitize(i.q3G.RESOURCE_URL,n);if(!c)throw y(n);const _=this._inProgressUrlFetches.get(c);if(_)return _;const u=this._httpClient.get(c,{responseType:"text",withCredentials:r}).pipe((0,d.U)(f=>m(f)),(0,x.x)(()=>this._inProgressUrlFetches.delete(c)),(0,B.B)());return this._inProgressUrlFetches.set(c,u),u}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(L(t,e),n),this}_addSvgIconSetConfig(t,e){const n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){const e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){const s=this._resolvers[n](e,t);if(s)return $(s)?new h(s.url,null,s.options):new h(s,null)}}}return o.\u0275fac=function(t){return new(t||o)(i.LFG(F.eN,8),i.LFG(M.H7),i.LFG(S.K0,8),i.LFG(i.qLn))},o.\u0275prov=i.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function p(o){return o.cloneNode(!0)}function L(o,a){return o+":"+a}function $(o){return!(!o.url||!o.options)}const j=(0,E.pj)(class{constructor(o){this._elementRef=o}}),Y=new i.OlP("mat-icon-location",{providedIn:"root",factory:function G(){const o=(0,i.f3M)(S.K0),a=o?o.location:null;return{getPathname:()=>a?a.pathname+a.search:""}}}),P=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],V=P.map(o=>`[${o}]`).join(", "),k=/^url\(['"]?#(.*?)['"]?\)$/;let Q=(()=>{class o extends j{constructor(t,e,n,s,r){super(t),this._iconRegistry=e,this._location=s,this._errorHandler=r,this._inline=!1,this._currentIconFetch=N.w0.EMPTY,n||t.nativeElement.setAttribute("aria-hidden","true")}get inline(){return this._inline}set inline(t){this._inline=(0,T.Ig)(t)}get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}get fontSet(){return this._fontSet}set fontSet(t){const e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(t){const e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_splitIconName(t){if(!t)return["",""];const e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){const t=this._elementsWithExternalReferences;if(t&&t.size){const e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();const e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){const t=this._elementRef.nativeElement;let e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){const n=t.childNodes[e];(1!==n.nodeType||"svg"===n.nodeName.toLowerCase())&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;const t=this._elementRef.nativeElement,e=this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet):this._iconRegistry.getDefaultFontSetClass();e!=this._previousFontSetClass&&(this._previousFontSetClass&&t.classList.remove(this._previousFontSetClass),e&&t.classList.add(e),this._previousFontSetClass=e),this.fontIcon!=this._previousFontIconClass&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return"string"==typeof t?t.trim().split(" ")[0]:t}_prependPathToReferences(t){const e=this._elementsWithExternalReferences;e&&e.forEach((n,s)=>{n.forEach(r=>{s.setAttribute(r.name,`url('${t}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(t){const e=t.querySelectorAll(V),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let s=0;s<e.length;s++)P.forEach(r=>{const c=e[s],_=c.getAttribute(r),u=_?_.match(k):null;if(u){let f=n.get(c);f||(f=[],n.set(c,f)),f.push({name:r,value:u[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){const[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe((0,W.q)(1)).subscribe(s=>this._setSvgElement(s),s=>{this._errorHandler.handleError(new Error(`Error retrieving icon ${e}:${n}! ${s.message}`))})}}}return o.\u0275fac=function(t){return new(t||o)(i.Y36(i.SBq),i.Y36(I),i.$8M("aria-hidden"),i.Y36(Y),i.Y36(i.qLn))},o.\u0275cmp=i.Xpm({type:o,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:7,hostBindings:function(t,e){2&t&&(i.uIk("data-mat-icon-type",e._usingFontIcon()?"font":"svg")("data-mat-icon-name",e._svgName||e.fontIcon)("data-mat-icon-namespace",e._svgNamespace||e.fontSet),i.ekj("mat-icon-inline",e.inline)("mat-icon-no-color","primary"!==e.color&&"accent"!==e.color&&"warn"!==e.color))},inputs:{color:"color",inline:"inline",svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[i.qOj],ngContentSelectors:b,decls:1,vars:0,template:function(t,e){1&t&&(i.F$t(),i.Hsn(0))},styles:[".mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"],encapsulation:2,changeDetection:0}),o})(),J=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({imports:[[E.BQ],E.BQ]}),o})()}}]);