import{a as J,c as K,d as $,e as tt,f as et,g as ot,h as nt}from"./chunk-JWF3K6SO.js";import{J as Z,a as L,b as V,e as U,f as H,h as Q,i as G,k as Y,m as q,n as W,p as X}from"./chunk-Y3MUW6DU.js";import{Aa as T,Eb as F,Hb as N,Ib as u,Jb as O,Lb as k,Mb as j,P as b,S as y,Sa as D,Sb as z,T as v,Tb as B,Ub as f,V as M,Va as S,X as a,Y as w,Ya as E,bb as c,cb as I,db as P,ea as x,fa as d,ja as _,ma as C,oa as R,ua as A,vb as s,wb as m,xb as p}from"./chunk-UKVB24HS.js";var ct="@",pt=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=a(x);loadingSchedulerFn=a(ft,{optional:!0});_engine;constructor(t,o,r,i,l){this.doc=t,this.delegate=o,this.zone=r,this.animationType=i,this.moduleImpl=l}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-KN3MV3S4.js").then(r=>r),o;return this.loadingSchedulerFn?o=this.loadingSchedulerFn(t):o=t(),o.catch(r=>{throw new b(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:i})=>{this._engine=r(this.animationType,this.doc);let l=new i(this.delegate,this._engine,this.zone);return this.delegate=l,l})}createRenderer(t,o){let r=this.delegate.createRenderer(t,o);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let i=new g(r);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(l=>{let dt=l.createRenderer(t,o);i.use(dt),this.scheduler??=this.injector.get(R,null,{optional:!0}),this.scheduler?.notify(10)}).catch(l=>{i.use(r)}),i}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(t){this._engine?.flush(),this.delegate.componentReplaced?.(t)}static \u0275fac=function(o){E()};static \u0275prov=y({token:n,factory:n.\u0275fac})}return n})(),g=class{delegate;replay=[];\u0275type=1;constructor(e){this.delegate=e}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,o,r){this.delegate.insertBefore(e,t,o,r)}removeChild(e,t,o,r){this.delegate.removeChild(e,t,o,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,o,r){this.delegate.setAttribute(e,t,o,r)}removeAttribute(e,t,o){this.delegate.removeAttribute(e,t,o)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,o,r){this.delegate.setStyle(e,t,o,r)}removeStyle(e,t,o){this.delegate.removeStyle(e,t,o)}setProperty(e,t,o){this.shouldReplay(t)&&this.replay.push(r=>r.setProperty(e,t,o)),this.delegate.setProperty(e,t,o)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,o,r){return this.shouldReplay(t)&&this.replay.push(i=>i.listen(e,t,o,r)),this.delegate.listen(e,t,o,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(ct)}},ft=new M("");function at(n="animations"){return D("NgAsyncAnimations"),w([{provide:S,useFactory:()=>new pt(a(d),a(U),a(_),n)},{provide:T,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var it=[{path:"",redirectTo:"diff",pathMatch:"full"},{path:"diff",loadComponent:()=>import("./chunk-NVU6PVM7.js").then(n=>n.DiffViewComponent)},{path:"diff/:from/:to",loadComponent:()=>import("./chunk-NVU6PVM7.js").then(n=>n.DiffViewComponent)},{path:"diff/:from/:to/:file",loadComponent:()=>import("./chunk-NVU6PVM7.js").then(n=>n.DiffViewComponent)},{path:"browse/:version",loadComponent:()=>import("./chunk-BQA24F7G.js").then(n=>n.BrowseViewComponent)},{path:"**",redirectTo:"diff"}];var lt={providers:[C(),W(it),Q(),at(),{provide:L,useClass:V}]};var ht=["*",[["mat-toolbar-row"]]],ut=["*","mat-toolbar-row"],gt=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275dir=P({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),st=(()=>{class n{_elementRef=a(A);_platform=a(X);_document=a(d);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=c({type:n,selectors:[["mat-toolbar"]],contentQueries:function(o,r,i){if(o&1&&O(i,gt,5),o&2){let l;k(l=j())&&(r._toolbarRows=l)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(o,r){o&2&&(B(r.color?"mat-"+r.color:""),z("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:ut,decls:2,vars:0,template:function(o,r){o&1&&(N(ht),u(0),u(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var mt=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=I({type:n});static \u0275inj=v({imports:[Z]})}return n})();var h=class n{constructor(){let e=a($),t=a(G);e.addSvgIcon("github",t.bypassSecurityTrustResourceUrl("github.svg"))}copyShareUrl(){navigator.clipboard.writeText(window.location.href)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=c({type:n,selectors:[["app-root"]],decls:14,vars:0,consts:[["color","primary",1,"toolbar"],["routerLink","/diff",1,"toolbar-brand"],[1,"brand-ng"],[1,"brand-diff"],[1,"toolbar-spacer"],["mat-icon-button","","matTooltip","Copy shareable URL",3,"click"],["mat-icon-button","","href","https://github.com/fabioemoutinho/ng-diff","target","_blank","rel","noopener","matTooltip","View on GitHub"],["svgIcon","github"],[1,"main-content"]],template:function(t,o){t&1&&(s(0,"mat-toolbar",0)(1,"a",1)(2,"span",2),f(3,"ng"),m(),s(4,"span",3),f(5,"diff"),m()(),p(6,"span",4),s(7,"button",5),F("click",function(){return o.copyShareUrl()}),s(8,"mat-icon"),f(9,"share"),m()(),s(10,"a",6),p(11,"mat-icon",7),m()(),s(12,"main",8),p(13,"router-outlet"),m())},dependencies:[Y,q,mt,st,K,J,et,tt,nt,ot],styles:['.toolbar[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;z-index:100}.toolbar-brand[_ngcontent-%COMP%]{text-decoration:none;font-size:1.25rem;font-weight:700;letter-spacing:-.5px}.toolbar-brand[_ngcontent-%COMP%]   .brand-ng[_ngcontent-%COMP%]{color:#fff}.toolbar-brand[_ngcontent-%COMP%]   .brand-diff[_ngcontent-%COMP%]{color:#ffdcd7;background:#f8514933;border-radius:3px;padding:0 4px;font-family:Roboto Mono,monospace}.toolbar-brand[_ngcontent-%COMP%]   .brand-diff[_ngcontent-%COMP%]:before{content:"-";color:#f85149;margin-right:1px}.toolbar-spacer[_ngcontent-%COMP%]{flex:1}.main-content[_ngcontent-%COMP%]{margin-top:64px;height:calc(100vh - 64px);display:flex;flex-direction:column}']})};H(h,lt).catch(n=>console.error(n));
