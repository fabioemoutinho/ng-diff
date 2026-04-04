import{a as X,c as Z,d as J,e as K,f as $,g as ee}from"./chunk-LADNWFAG.js";import{J as W,a as V,b as z,e as L,f as U,h as H,k as Q,m as G,n as Y,p as q}from"./chunk-Y3MUW6DU.js";import{Aa as T,Hb as S,Ib as u,Jb as N,Lb as O,Mb as k,P as b,S as y,Sa as D,Sb as j,T as v,Tb as B,Ub as p,V as M,Va as E,X as l,Y as w,Ya as F,bb as c,cb as I,db as P,ea as x,fa as d,ja as _,ma as C,oa as A,ua as R,vb as s,wb as m,xb as h}from"./chunk-UKVB24HS.js";var se="@",me=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=l(x);loadingSchedulerFn=l(de,{optional:!0});_engine;constructor(e,o,r,a,i){this.doc=e,this.delegate=o,this.zone=r,this.animationType=a,this.moduleImpl=i}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-KN3MV3S4.js").then(r=>r),o;return this.loadingSchedulerFn?o=this.loadingSchedulerFn(e):o=e(),o.catch(r=>{throw new b(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:a})=>{this._engine=r(this.animationType,this.doc);let i=new a(this.delegate,this._engine,this.zone);return this.delegate=i,i})}createRenderer(e,o){let r=this.delegate.createRenderer(e,o);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let a=new g(r);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(i=>{let le=i.createRenderer(e,o);a.use(le),this.scheduler??=this.injector.get(A,null,{optional:!0}),this.scheduler?.notify(10)}).catch(i=>{a.use(r)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(o){F()};static \u0275prov=y({token:n,factory:n.\u0275fac})}return n})(),g=class{delegate;replay=[];\u0275type=1;constructor(t){this.delegate=t}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,o,r){this.delegate.insertBefore(t,e,o,r)}removeChild(t,e,o,r){this.delegate.removeChild(t,e,o,r)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,o,r){this.delegate.setAttribute(t,e,o,r)}removeAttribute(t,e,o){this.delegate.removeAttribute(t,e,o)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,o,r){this.delegate.setStyle(t,e,o,r)}removeStyle(t,e,o){this.delegate.removeStyle(t,e,o)}setProperty(t,e,o){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(t,e,o)),this.delegate.setProperty(t,e,o)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,o,r){return this.shouldReplay(e)&&this.replay.push(a=>a.listen(t,e,o,r)),this.delegate.listen(t,e,o,r)}shouldReplay(t){return this.replay!==null&&t.startsWith(se)}},de=new M("");function oe(n="animations"){return D("NgAsyncAnimations"),w([{provide:E,useFactory:()=>new me(l(d),l(L),l(_),n)},{provide:T,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ne=[{path:"",redirectTo:"diff",pathMatch:"full"},{path:"diff",loadComponent:()=>import("./chunk-HNX3JMRI.js").then(n=>n.DiffViewComponent)},{path:"diff/:from/:to",loadComponent:()=>import("./chunk-HNX3JMRI.js").then(n=>n.DiffViewComponent)},{path:"diff/:from/:to/:file",loadComponent:()=>import("./chunk-HNX3JMRI.js").then(n=>n.DiffViewComponent)},{path:"browse/:version",loadComponent:()=>import("./chunk-APLOO3CD.js").then(n=>n.BrowseViewComponent)},{path:"**",redirectTo:"diff"}];var re={providers:[C(),Y(ne),H(),oe(),{provide:V,useClass:z}]};var ce=["*",[["mat-toolbar-row"]]],pe=["*","mat-toolbar-row"],fe=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275dir=P({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),ae=(()=>{class n{_elementRef=l(R);_platform=l(q);_document=l(d);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=c({type:n,selectors:[["mat-toolbar"]],contentQueries:function(o,r,a){if(o&1&&N(a,fe,5),o&2){let i;O(i=k())&&(r._toolbarRows=i)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(o,r){o&2&&(B(r.color?"mat-"+r.color:""),j("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:pe,decls:2,vars:0,template:function(o,r){o&1&&(S(ce),u(0),u(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return n})();var ie=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=I({type:n});static \u0275inj=v({imports:[W]})}return n})();var f=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=c({type:n,selectors:[["app-root"]],decls:12,vars:0,consts:[["color","primary",1,"toolbar"],["routerLink","/diff",1,"toolbar-brand"],[1,"brand-ng"],[1,"brand-diff"],[1,"toolbar-spacer"],["mat-icon-button","","href","https://github.com/fabioemoutinho/ng-diff","target","_blank","rel","noopener","matTooltip","View on GitHub"],[1,"main-content"]],template:function(e,o){e&1&&(s(0,"mat-toolbar",0)(1,"a",1)(2,"span",2),p(3,"ng"),m(),s(4,"span",3),p(5,"-diff"),m()(),h(6,"span",4),s(7,"a",5)(8,"mat-icon"),p(9,"open_in_new"),m()()(),s(10,"main",6),h(11,"router-outlet"),m())},dependencies:[Q,G,ie,ae,Z,X,K,J,ee,$],styles:[".toolbar[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;z-index:100}.toolbar-brand[_ngcontent-%COMP%]{text-decoration:none;font-size:1.25rem;font-weight:700;letter-spacing:-.5px}.toolbar-brand[_ngcontent-%COMP%]   .brand-ng[_ngcontent-%COMP%]{color:#fff}.toolbar-brand[_ngcontent-%COMP%]   .brand-diff[_ngcontent-%COMP%]{color:#ffffffa6}.toolbar-spacer[_ngcontent-%COMP%]{flex:1}.main-content[_ngcontent-%COMP%]{margin-top:64px;height:calc(100vh - 64px);display:flex;flex-direction:column}"]})};U(f,re).catch(n=>console.error(n));
