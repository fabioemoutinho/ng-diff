import{a as Ye,b as Xe,c as Je,d as mt,e as bt,f as At,g as Nt}from"./chunk-LADNWFAG.js";import{a as ze,b as Ge,c as We,d as Qe,e as $e,f as qe,g as Ze,h as Ke,i as tn,j as en,k as nn,l as an}from"./chunk-STLDEH5R.js";import{$ as ct,B as Fe,D as Ae,E as Bt,I as Lt,J as Ot,L as Ne,M as je,P as Ve,Q as He,R as Xt,c as Ee,d as tt,da as yt,ea as Ft,fa as Ue,j as Re,l as Be,p as Kt,r as Yt,s as Le,t as Rt,x as Oe}from"./chunk-Y3MUW6DU.js";import{A as ye,Bb as qt,Cb as it,Eb as T,Gb as h,Hb as rt,Ib as st,J as xe,Jb as vt,K as Tt,Kb as ot,L as Ce,Lb as I,M as gt,Mb as D,Oa as s,Qb as X,Rb as Pt,S as ke,Sb as N,T as Mt,Ta as It,Tb as j,Ua as Dt,Ub as m,V as U,Vb as S,Wa as Qt,Wb as Q,X as u,Xb as lt,Yb as Ut,Za as we,Zb as Pe,a as be,aa as $,ac as J,b as ue,ba as q,bb as A,cb as St,cc as Zt,d as nt,db as Y,ea as Wt,eb as _t,f as pe,fb as at,g as Ct,gb as Ie,gc as dt,i as fe,ia as F,ic as P,ja as ht,jc as Et,k as ge,mb as De,na as w,nb as W,ob as y,pb as x,qb as Se,ra as Te,rb as $t,sa as wt,sb as V,t as he,tb as H,u as _e,ua as K,ub as _,v as kt,va as Me,vb as l,w as ve,wb as b,xb as G,yb as C,zb as k}from"./chunk-UKVB24HS.js";var ae=["*"];function Cn(i,a){i&1&&st(0)}var kn=["tabListContainer"],Tn=["tabList"],Mn=["tabListInner"],wn=["nextPaginator"],In=["previousPaginator"],Dn=["content"];function Sn(i,a){}var Pn=["tabBodyWrapper"],En=["tabHeader"];function Rn(i,a){}function Bn(i,a){if(i&1&&at(0,Rn,0,0,"ng-template",12),i&2){let t=h().$implicit;_("cdkPortalOutlet",t.templateLabel)}}function Ln(i,a){if(i&1&&m(0),i&2){let t=h().$implicit;S(t.textLabel)}}function On(i,a){if(i&1){let t=it();l(0,"div",7,2),T("click",function(){let n=$(t),o=n.$implicit,r=n.$index,c=h(),d=X(1);return q(c._handleClick(o,d,r))})("cdkFocusChange",function(n){let o=$(t).$index,r=h();return q(r._tabFocusChanged(n,o))}),G(2,"span",8)(3,"div",9),l(4,"span",10)(5,"span",11),y(6,Bn,1,1,null,12)(7,Ln,1,1),b()()()}if(i&2){let t=a.$implicit,e=a.$index,n=X(1),o=h();j(t.labelClass),N("mdc-tab--active",o.selectedIndex===e),_("id",o._getTabLabelId(t,e))("disabled",t.disabled)("fitInkBarToContent",o.fitInkBarToContent),W("tabIndex",o._getTabIndex(e))("aria-posinset",e+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(e))("aria-selected",o.selectedIndex===e)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),s(3),_("matRippleTrigger",n)("matRippleDisabled",t.disabled||o.disableRipple),s(3),x(t.templateLabel?6:7)}}function Fn(i,a){i&1&&st(0)}function An(i,a){if(i&1){let t=it();l(0,"mat-tab-body",13),T("_onCentered",function(){$(t);let n=h();return q(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){$(t);let o=h();return q(o._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){$(t);let o=h();return q(o._bodyCentered(n))}),b()}if(i&2){let t=a.$implicit,e=a.$index,n=h();j(t.bodyClass),_("id",n._getTabContentId(e))("content",t.content)("position",t.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),W("tabindex",n.contentTabIndex!=null&&n.selectedIndex===e?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(t,e))("aria-hidden",n.selectedIndex!==e)}}var Nn=new U("MatTabContent"),jn=(()=>{class i{template=u(Dt);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=Y({type:i,selectors:[["","matTabContent",""]],features:[lt([{provide:Nn,useExisting:i}])]})}return i})(),Vn=new U("MatTabLabel"),ln=new U("MAT_TAB"),Hn=(()=>{class i extends He{_closestTab=u(ln,{optional:!0});static \u0275fac=(()=>{let t;return function(n){return(t||(t=wt(i)))(n||i)}})();static \u0275dir=Y({type:i,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[lt([{provide:Vn,useExisting:i}]),_t]})}return i})(),dn=new U("MAT_TAB_GROUP"),ie=(()=>{class i{_viewContainerRef=u(we);_closestTabGroup=u(dn,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new Ct;position=null;origin=null;isActive=!1;constructor(){u(Rt).load(Ft)}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Ve(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=A({type:i,selectors:[["mat-tab"]],contentQueries:function(e,n,o){if(e&1&&vt(o,Hn,5)(o,jn,7,Dt),e&2){let r;I(r=D())&&(n.templateLabel=r.first),I(r=D())&&(n._explicitContent=r.first)}},viewQuery:function(e,n){if(e&1&&ot(Dt,7),e&2){let o;I(o=D())&&(n._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(e,n){e&2&&W("id",null)},inputs:{disabled:[2,"disabled","disabled",P],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[lt([{provide:ln,useExisting:i}]),Te],ngContentSelectors:ae,decls:1,vars:0,template:function(e,n){e&1&&(rt(),Ie(0,Cn,1,0,"ng-template"))},encapsulation:2})}return i})(),Jt="mdc-tab-indicator--active",on="mdc-tab-indicator--no-transition",te=class{_items;_currentItem;constructor(a){this._items=a}hide(){this._items.forEach(a=>a.deactivateInkBar()),this._currentItem=void 0}alignToElement(a){let t=this._items.find(n=>n.elementRef.nativeElement===a),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}},zn=(()=>{class i{_elementRef=u(K);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(Jt);return}let n=e.getBoundingClientRect(),o=t.width/n.width,r=t.left-n.left;e.classList.add(on),this._inkBarContentElement.style.setProperty("transform",`translateX(${r}px) scaleX(${o})`),e.getBoundingClientRect(),e.classList.remove(on),e.classList.add(Jt),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Jt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),n=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement)}static \u0275fac=function(e){return new(e||i)};static \u0275dir=Y({type:i,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",P]}})}return i})();var cn=(()=>{class i extends zn{elementRef=u(K);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(n){return(t||(t=wt(i)))(n||i)}})();static \u0275dir=Y({type:i,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,n){e&2&&(W("aria-disabled",!!n.disabled),N("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",P]},features:[_t]})}return i})(),rn={passive:!0},Gn=650,Wn=100,Qn=(()=>{class i{_elementRef=u(K);_changeDetectorRef=u(dt);_viewportRuler=u(je);_dir=u(Lt,{optional:!0});_ngZone=u(ht);_platform=u(Kt);_sharedResizeObserver=u(ze);_injector=u(Wt);_renderer=u(Qt);_animationsDisabled=ct();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new Ct;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new Ct;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new F;indexFocused=new F;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),rn),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),rn))}ngAfterContentInit(){let t=this._dir?this._dir.change:ge("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(ye(32),gt(this._destroyed)),n=this._viewportRuler.change(150).pipe(gt(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Ae(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),It(o,{injector:this._injector}),kt(t,n,e,this._items.changes,this._itemsResized()).pipe(gt(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(r=>{this.indexFocused.emit(r),this._setTabFocus(r)})}_itemsResized(){return typeof ResizeObserver!="function"?fe:this._items.changes.pipe(Tt(this._items),Ce(t=>new pe(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(o=>e.next(o));return t.forEach(o=>n.observe(o.elementRef.nativeElement)),()=>{n.disconnect()}}))),xe(1),ve(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Fe(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:r}=e.elementRef.nativeElement,c,d;this._getLayoutDirection()=="ltr"?(c=o,d=c+r):(d=this._tabListInner.nativeElement.offsetWidth-o,c=d-r);let f=this.scrollDistance,p=this.scrollDistance+n;c<f?this.scrollDistance-=f-c:d>p&&(this.scrollDistance+=Math.min(d-p,c-f))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,n=t-e>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),_e(Gn,Wn).pipe(gt(kt(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:o}=this._scrollHeader(t);(o===0||o>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||i)};static \u0275dir=Y({type:i,inputs:{disablePagination:[2,"disablePagination","disablePagination",P],selectedIndex:[2,"selectedIndex","selectedIndex",Et]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return i})(),$n=(()=>{class i extends Qn{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new te(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=wt(i)))(n||i)}})();static \u0275cmp=A({type:i,selectors:[["mat-tab-header"]],contentQueries:function(e,n,o){if(e&1&&vt(o,cn,4),e&2){let r;I(r=D())&&(n._items=r)}},viewQuery:function(e,n){if(e&1&&ot(kn,7)(Tn,7)(Mn,7)(wn,5)(In,5),e&2){let o;I(o=D())&&(n._tabListContainer=o.first),I(o=D())&&(n._tabList=o.first),I(o=D())&&(n._tabListInner=o.first),I(o=D())&&(n._nextPaginator=o.first),I(o=D())&&(n._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(e,n){e&2&&N("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",P]},features:[_t],ngContentSelectors:ae,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,n){e&1&&(rt(),l(0,"div",5,0),T("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(r){return n._handlePaginatorPress("before",r)})("touchend",function(){return n._stopInterval()}),G(2,"div",6),b(),l(3,"div",7,1),T("keydown",function(r){return n._handleKeydown(r)}),l(5,"div",8,2),T("cdkObserveContent",function(){return n._onContentChanges()}),l(7,"div",9,3),st(9),b()()(),l(10,"div",10,4),T("mousedown",function(r){return n._handlePaginatorPress("after",r)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),G(12,"div",6),b()),e&2&&(N("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),_("matRippleDisabled",n._disableScrollBefore||n.disableRipple),s(3),N("_mat-animation-noopable",n._animationsDisabled),s(2),W("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),s(5),N("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),_("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[yt,Oe],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return i})(),qn=new U("MAT_TABS_CONFIG"),sn=(()=>{class i extends Xt{_host=u(ee);_ngZone=u(ht);_centeringSub=nt.EMPTY;_leavingSub=nt.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Tt(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=Y({type:i,selectors:[["","matTabBodyHost",""]],features:[_t]})}return i})(),ee=(()=>{class i{_elementRef=u(K);_dir=u(Lt,{optional:!0});_ngZone=u(ht);_injector=u(Wt);_renderer=u(Qt);_diAnimationsDisabled=ct();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=nt.EMPTY;_position;_previousPosition;_onCentering=new F;_beforeCentering=new F;_afterLeavingCenter=new F;_onCentered=new F(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=u(dt);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),It(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),It(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=A({type:i,selectors:[["mat-tab-body"]],viewQuery:function(e,n){if(e&1&&ot(sn,5)(Dn,5),e&2){let o;I(o=D())&&(n._portalHost=o.first),I(o=D())&&(n._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(e,n){e&2&&W("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(e,n){e&1&&(l(0,"div",1,0),at(2,Sn,0,0,"ng-template",2),b()),e&2&&N("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[sn,Ne],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return i})(),mn=(()=>{class i{_elementRef=u(K);_changeDetectorRef=u(dt);_ngZone=u(ht);_tabsSubscription=nt.EMPTY;_tabLabelSubscription=nt.EMPTY;_tabBodySubscription=nt.EMPTY;_diAnimationsDisabled=ct();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Me;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){let e=t+"";this._animationDuration=/^\d+$/.test(e)?t+"ms":e}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new F;focusChange=new F;animationDone=new F;selectedTabChange=new F(!0);_groupId;_isServer=!u(Kt).isBrowser;constructor(){let t=u(qn,{optional:!0});this._groupId=u(Bt).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,o)=>n.isActive=o===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let o=0;o<e.length;o++)if(e[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,n=e[o];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Tt(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new ne;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=kt(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=A({type:i,selectors:[["mat-tab-group"]],contentQueries:function(e,n,o){if(e&1&&vt(o,ie,5),e&2){let r;I(r=D())&&(n._allTabs=r)}},viewQuery:function(e,n){if(e&1&&ot(Pn,5)(En,5)(ee,5),e&2){let o;I(o=D())&&(n._tabBodyWrapper=o.first),I(o=D())&&(n._tabHeader=o.first),I(o=D())&&(n._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(e,n){e&2&&(W("mat-align-tabs",n.alignTabs),j("mat-"+(n.color||"primary")),Pt("--mat-tab-animation-duration",n.animationDuration),N("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",P],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",P],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",P],selectedIndex:[2,"selectedIndex","selectedIndex",Et],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Et],disablePagination:[2,"disablePagination","disablePagination",P],disableRipple:[2,"disableRipple","disableRipple",P],preserveContent:[2,"preserveContent","preserveContent",P],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[lt([{provide:dn,useExisting:i}])],ngContentSelectors:ae,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(e,n){e&1&&(rt(),l(0,"mat-tab-header",3,0),T("indexFocused",function(r){return n._focusChanged(r)})("selectFocusedIndex",function(r){return n.selectedIndex=r}),V(2,On,8,17,"div",4,$t),b(),y(4,Fn,1,0),l(5,"div",5,1),V(7,An,1,10,"mat-tab-body",6,$t),b()),e&2&&(_("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),De("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),s(2),H(n._tabs),s(2),x(n._isServer?4:-1),s(),N("_mat-animation-noopable",n._animationsDisabled()),s(2),H(n._tabs))},dependencies:[$n,cn,Le,yt,Xt,ee],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return i})(),ne=class{index;tab};var bn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=St({type:i});static \u0275inj=Mt({imports:[Ot]})}return i})();var jt=class{diff(a,t,e={}){let n;typeof e=="function"?(n=e,e={}):"callback"in e&&(n=e.callback);let o=this.castInput(a,e),r=this.castInput(t,e),c=this.removeEmpty(this.tokenize(o,e)),d=this.removeEmpty(this.tokenize(r,e));return this.diffWithOptionsObj(c,d,e,n)}diffWithOptionsObj(a,t,e,n){var o;let r=g=>{if(g=this.postProcess(g,e),n){setTimeout(function(){n(g)},0);return}else return g},c=t.length,d=a.length,f=1,p=c+d;e.maxEditLength!=null&&(p=Math.min(p,e.maxEditLength));let L=(o=e.timeout)!==null&&o!==void 0?o:1/0,O=Date.now()+L,M=[{oldPos:-1,lastComponent:void 0}],E=this.extractCommon(M[0],t,a,0,e);if(M[0].oldPos+1>=d&&E+1>=c)return r(this.buildValues(M[0].lastComponent,t,a));let z=-1/0,Z=1/0,et=()=>{for(let g=Math.max(z,-f);g<=Math.min(Z,f);g+=2){let v,R=M[g-1],B=M[g+1];R&&(M[g-1]=void 0);let ft=!1;if(B){let me=B.oldPos-g;ft=B&&0<=me&&me<c}let xt=R&&R.oldPos+1<d;if(!ft&&!xt){M[g]=void 0;continue}if(!xt||ft&&R.oldPos<B.oldPos?v=this.addToPath(B,!0,!1,0,e):v=this.addToPath(R,!1,!0,1,e),E=this.extractCommon(v,t,a,g,e),v.oldPos+1>=d&&E+1>=c)return r(this.buildValues(v.lastComponent,t,a))||!0;M[g]=v,v.oldPos+1>=d&&(Z=Math.min(Z,g-1)),E+1>=c&&(z=Math.max(z,g+1))}f++};if(n)(function g(){setTimeout(function(){if(f>p||Date.now()>O)return n(void 0);et()||g()},0)})();else for(;f<=p&&Date.now()<=O;){let g=et();if(g)return g}}addToPath(a,t,e,n,o){let r=a.lastComponent;return r&&!o.oneChangePerToken&&r.added===t&&r.removed===e?{oldPos:a.oldPos+n,lastComponent:{count:r.count+1,added:t,removed:e,previousComponent:r.previousComponent}}:{oldPos:a.oldPos+n,lastComponent:{count:1,added:t,removed:e,previousComponent:r}}}extractCommon(a,t,e,n,o){let r=t.length,c=e.length,d=a.oldPos,f=d-n,p=0;for(;f+1<r&&d+1<c&&this.equals(e[d+1],t[f+1],o);)f++,d++,p++,o.oneChangePerToken&&(a.lastComponent={count:1,previousComponent:a.lastComponent,added:!1,removed:!1});return p&&!o.oneChangePerToken&&(a.lastComponent={count:p,previousComponent:a.lastComponent,added:!1,removed:!1}),a.oldPos=d,f}equals(a,t,e){return e.comparator?e.comparator(a,t):a===t||!!e.ignoreCase&&a.toLowerCase()===t.toLowerCase()}removeEmpty(a){let t=[];for(let e=0;e<a.length;e++)a[e]&&t.push(a[e]);return t}castInput(a,t){return a}tokenize(a,t){return Array.from(a)}join(a){return a.join("")}postProcess(a,t){return a}get useLongestToken(){return!1}buildValues(a,t,e){let n=[],o;for(;a;)n.push(a),o=a.previousComponent,delete a.previousComponent,a=o;n.reverse();let r=n.length,c=0,d=0,f=0;for(;c<r;c++){let p=n[c];if(p.removed)p.value=this.join(e.slice(f,f+p.count)),f+=p.count;else{if(!p.added&&this.useLongestToken){let L=t.slice(d,d+p.count);L=L.map(function(O,M){let E=e[f+M];return E.length>O.length?E:O}),p.value=this.join(L)}else p.value=this.join(t.slice(d,d+p.count));d+=p.count,p.added||(f+=p.count)}}return n}};var oe=class extends jt{constructor(){super(...arguments),this.tokenize=Kn}equals(a,t,e){return e.ignoreWhitespace?((!e.newlineIsToken||!a.includes(`
`))&&(a=a.trim()),(!e.newlineIsToken||!t.includes(`
`))&&(t=t.trim())):e.ignoreNewlineAtEof&&!e.newlineIsToken&&(a.endsWith(`
`)&&(a=a.slice(0,-1)),t.endsWith(`
`)&&(t=t.slice(0,-1))),super.equals(a,t,e)}},Zn=new oe;function re(i,a,t){return Zn.diff(i,a,t)}function Kn(i,a){a.stripTrailingCr&&(i=i.replace(/\r\n/g,`
`));let t=[],e=i.split(/(\n|\r\n)/);e[e.length-1]||e.pop();for(let n=0;n<e.length;n++){let o=e[n];n%2&&!a.newlineIsToken?t[t.length-1]+=o:t.push(o)}return t}var un={includeIndex:!0,includeUnderline:!0,includeFileHeaders:!0};function se(i,a,t,e,n,o,r){let c;r?typeof r=="function"?c={callback:r}:c=r:c={},typeof c.context>"u"&&(c.context=4);let d=c.context;if(c.newlineIsToken)throw new Error("newlineIsToken may not be used with patch-generation functions, only with diffing functions");if(c.callback){let{callback:p}=c;re(t,e,Object.assign(Object.assign({},c),{callback:L=>{let O=f(L);p(O)}}))}else return f(re(t,e,c));function f(p){if(!p)return;p.push({value:"",lines:[]});function L(g){return g.map(function(v){return" "+v})}let O=[],M=0,E=0,z=[],Z=1,et=1;for(let g=0;g<p.length;g++){let v=p[g],R=v.lines||Yn(v.value);if(v.lines=R,v.added||v.removed){if(!M){let B=p[g-1];M=Z,E=et,B&&(z=d>0?L(B.lines.slice(-d)):[],M-=z.length,E-=z.length)}for(let B of R)z.push((v.added?"+":"-")+B);v.added?et+=R.length:Z+=R.length}else{if(M)if(R.length<=d*2&&g<p.length-2)for(let B of L(R))z.push(B);else{let B=Math.min(R.length,d);for(let xt of L(R.slice(0,B)))z.push(xt);let ft={oldStart:M,oldLines:Z-M+B,newStart:E,newLines:et-E+B,lines:z};O.push(ft),M=0,E=0,z=[]}Z+=R.length,et+=R.length}}for(let g of O)for(let v=0;v<g.lines.length;v++)g.lines[v].endsWith(`
`)?g.lines[v]=g.lines[v].slice(0,-1):(g.lines.splice(v+1,0,"\\ No newline at end of file"),v++);return{oldFileName:i,newFileName:a,oldHeader:n,newHeader:o,hunks:O}}}function Vt(i,a){if(a||(a=un),Array.isArray(i)){if(i.length>1&&!a.includeFileHeaders)throw new Error("Cannot omit file headers on a multi-file patch. (The result would be unparseable; how would a tool trying to apply the patch know which changes are to which file?)");return i.map(e=>Vt(e,a)).join(`
`)}let t=[];a.includeIndex&&i.oldFileName==i.newFileName&&t.push("Index: "+i.oldFileName),a.includeUnderline&&t.push("==================================================================="),a.includeFileHeaders&&(t.push("--- "+i.oldFileName+(typeof i.oldHeader>"u"?"":"	"+i.oldHeader)),t.push("+++ "+i.newFileName+(typeof i.newHeader>"u"?"":"	"+i.newHeader)));for(let e=0;e<i.hunks.length;e++){let n=i.hunks[e];n.oldLines===0&&(n.oldStart-=1),n.newLines===0&&(n.newStart-=1),t.push("@@ -"+n.oldStart+","+n.oldLines+" +"+n.newStart+","+n.newLines+" @@");for(let o of n.lines)t.push(o)}return t.join(`
`)+`
`}function le(i,a,t,e,n,o,r){if(typeof r=="function"&&(r={callback:r}),r?.callback){let{callback:c}=r;se(i,a,t,e,n,o,Object.assign(Object.assign({},r),{callback:d=>{c(d?Vt(d,r.headerOptions):void 0)}}))}else{let c=se(i,a,t,e,n,o,r);return c?Vt(c,r?.headerOptions):void 0}}function Yn(i){let a=i.endsWith(`
`),t=i.split(`
`).map(e=>e+`
`);return a?t.pop():t.push(t.pop().slice(0,-1)),t}var pt=class i{compute(a,t){let e=new Set([...Object.keys(a.files),...Object.keys(t.files)]),n={};for(let o of e){let r=a.files[o]??"",c=t.files[o]??"",d;o in a.files?o in t.files?r===c?d="unchanged":d="modified":d="removed":d="added";let f=d==="modified"||d==="added"||d==="removed"?le(o,o,r,c,void 0,void 0,{context:3}):"";n[o]={status:d,patch:f,fromContent:r,toContent:c}}return n}parseDepsChange(a,t){let e=d=>{try{return JSON.parse(d.files["package.json"]??"{}")}catch{return{}}},n=e(a),o=e(t),r=[],c=["dependencies","devDependencies"];for(let d of c){let f=n[d]??{},p=o[d]??{},L=new Set([...Object.keys(f),...Object.keys(p)]);for(let O of L){let M=f[O]??null,E=p[O]??null;M!==E&&r.push({name:O,fromVersion:M,toVersion:E,group:d})}}return r.sort((d,f)=>d.group.localeCompare(f.group)||d.name.localeCompare(f.name))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ke({token:i,factory:i.\u0275fac,providedIn:"root"})};var Xn=["button"],Jn=["*"];function ta(i,a){if(i&1&&(l(0,"div",2),G(1,"mat-pseudo-checkbox",6),b()),i&2){let t=h();s(),_("disabled",t.disabled)}}var ea=new U("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),na=new U("MatButtonToggleGroup");var de=class{source;value;constructor(a,t){this.source=a,this.value=t}};var aa=(()=>{class i{_changeDetectorRef=u(dt);_elementRef=u(K);_focusMonitor=u(Yt);_idGenerator=u(Bt);_animationDisabled=ct();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(t){this._tabIndex.set(t)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=t}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new F;constructor(){u(Rt).load(Ft);let t=u(na,{optional:!0}),e=u(new Zt("tabindex"),{optional:!0})||"",n=u(ea,{optional:!0});this._tabIndex=w(parseInt(e)||0),this.buttonToggleGroup=t,this._appearance=n&&n.appearance?n.appearance:"standard",this._disabledInteractive=n?.disabledInteractive??!1}ngOnInit(){let t=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){if(this.disabled)return;let t=this.isSingleSelector()?!0:!this._checked;if(t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let e=this.buttonToggleGroup._buttonToggles.find(n=>n.tabIndex===0);e&&(e.tabIndex=-1),this.tabIndex=0}this.change.emit(new de(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=A({type:i,selectors:[["mat-button-toggle"]],viewQuery:function(e,n){if(e&1&&ot(Xn,5),e&2){let o;I(o=D())&&(n._buttonElement=o.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(e,n){e&1&&T("focus",function(){return n.focus()}),e&2&&(W("aria-label",null)("aria-labelledby",null)("id",n.id)("name",null),N("mat-button-toggle-standalone",!n.buttonToggleGroup)("mat-button-toggle-checked",n.checked)("mat-button-toggle-disabled",n.disabled)("mat-button-toggle-disabled-interactive",n.disabledInteractive)("mat-button-toggle-appearance-standard",n.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",P],appearance:"appearance",checked:[2,"checked","checked",P],disabled:[2,"disabled","disabled",P],disabledInteractive:[2,"disabledInteractive","disabledInteractive",P]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:Jn,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(e,n){if(e&1&&(rt(),l(0,"button",1,0),T("click",function(){return n._onButtonClick()}),y(2,ta,2,1,"div",2),l(3,"span",3),st(4),b()(),G(5,"span",4)(6,"span",5)),e&2){let o=X(1);_("id",n.buttonId)("disabled",n.disabled&&!n.disabledInteractive||null),W("role",n.isSingleSelector()?"radio":"button")("tabindex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("aria-pressed",n.isSingleSelector()?null:n.checked)("aria-checked",n.isSingleSelector()?n.checked:null)("name",n._getButtonName())("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),s(2),x(n.buttonToggleGroup&&(!n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideSingleSelectionIndicator||n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),s(4),_("matRippleTrigger",o)("matRippleDisabled",n.disableRipple||n.disabled)}},dependencies:[yt,Qe],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2,changeDetection:0})}return i})(),pn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=St({type:i});static \u0275inj=Mt({imports:[Ue,aa,Ot]})}return i})();var gn=i=>({nodes:i}),oa=(i,a)=>a.path;function ra(i,a){i&1&&qt(0)}function sa(i,a){if(i&1&&(l(0,"mat-icon",9),m(1),b()),i&2){let t=h().$implicit;s(),Q(" ",t.expanded?"folder_open":"folder"," ")}}function la(i,a){i&1&&(l(0,"mat-icon",10),m(1,"description"),b())}function da(i,a){if(i&1&&(l(0,"mat-icon",12),m(1),b()),i&2){let t=h().$implicit,e=h(2);_("matTooltip",t.status),s(),Q(" ",e.statusIcon(t.status)," ")}}function ca(i,a){i&1&&qt(0)}function ma(i,a){if(i&1&&at(0,ca,1,0,"ng-container",5),i&2){let t=h().$implicit;h(2);let e=X(8);_("ngTemplateOutlet",e)("ngTemplateOutletContext",Ut(2,gn,t.children))}}function ba(i,a){if(i&1){let t=it();l(0,"div",7)(1,"div",8),T("click",function(){let n=$(t).$implicit,o=h(2);return q(n.isDir?o.toggleDir(n):o.selectFile(n))}),y(2,sa,2,1,"mat-icon",9)(3,la,2,0,"mat-icon",10),l(4,"span",11),m(5),b(),y(6,da,2,2,"mat-icon",12),b(),y(7,ma,1,4,"ng-container"),b()}if(i&2){let t=a.$implicit,e=h(2);N("selected",t.path===e.selectedFile),s(),j("status-"+e.statusClass(t.status)),Pt("padding-left",t.path.split("/").length*12,"px"),s(),x(t.isDir?2:3),s(3),S(t.name),s(),x(t.status&&t.status!=="unchanged"?6:-1),s(),x(t.isDir&&t.expanded&&t.children.length?7:-1)}}function ua(i,a){if(i&1&&V(0,ba,8,10,"div",6,oa),i&2){let t=a.nodes;H(t)}}var Ht=class i{set diffResult(a){this._diffResult=a,this.buildTree()}selectedFile=null;fileSelected=new F;changedOnly=w(!1);_diffResult={};tree=w([]);filteredTree=J(()=>this.changedOnly()?this.filterChanged(this.tree()):this.tree());buildTree(){let a=[];for(let[t,e]of Object.entries(this._diffResult)){let n=t.split("/"),o=a,r="";for(let c=0;c<n.length;c++){let d=n[c];r=r?`${r}/${d}`:d;let f=c===n.length-1,p=o.find(L=>L.name===d);p||(p={name:d,path:r,isDir:!f,status:f?e.status:null,children:[],expanded:!0},o.push(p)),f||(o=p.children,e.status!=="unchanged"&&(!p.status||p.status==="unchanged")&&(p.status=e.status))}}this.sortTree(a),this.tree.set(a)}sortTree(a){a.sort((t,e)=>t.isDir!==e.isDir?t.isDir?-1:1:t.name.localeCompare(e.name));for(let t of a)t.children.length&&this.sortTree(t.children)}filterChanged(a){return a.filter(t=>t.status!=="unchanged"&&t.status!==null).map(t=>ue(be({},t),{children:this.filterChanged(t.children)}))}toggleDir(a){a.expanded=!a.expanded,this.tree.set([...this.tree()])}selectFile(a){a.isDir||this.fileSelected.emit(a.path)}statusIcon(a){switch(a){case"added":return"add_circle";case"removed":return"remove_circle";case"modified":return"edit";default:return""}}statusClass(a){return a??"unchanged"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=A({type:i,selectors:[["app-file-tree"]],inputs:{diffResult:"diffResult",selectedFile:"selectedFile"},outputs:{fileSelected:"fileSelected"},decls:9,vars:6,consts:[["nodeList",""],[1,"tree-header"],[1,"tree-title"],["matTooltip","Show changed files only",1,"changed-toggle",3,"click"],[1,"tree-container"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"tree-node",3,"selected"],[1,"tree-node"],[1,"node-row",3,"click"],[1,"node-icon","dir-icon"],[1,"node-icon","file-icon"],[1,"node-name"],[1,"status-icon",3,"matTooltip"]],template:function(t,e){if(t&1&&(l(0,"div",1)(1,"span",2),m(2,"Files"),b(),l(3,"button",3),T("click",function(){return e.changedOnly.set(!e.changedOnly())}),m(4," Changed only "),b()(),l(5,"div",4),at(6,ra,1,0,"ng-container",5),b(),at(7,ua,2,0,"ng-template",null,0,Pe)),t&2){let n=X(8);s(3),N("active",e.changedOnly()),s(3),_("ngTemplateOutlet",n)("ngTemplateOutletContext",Ut(4,gn,e.filteredTree()))}},dependencies:[tt,Ee,bt,mt,pn,Nt,At],styles:[".tree-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border-bottom:1px solid #21262d;font-size:.75rem;text-transform:uppercase;letter-spacing:.08em;color:#ffffff80}.changed-toggle[_ngcontent-%COMP%]{background:none;border:1px solid #30363d;border-radius:4px;color:#ffffff80;padding:2px 8px;font-size:.7rem;cursor:pointer;text-transform:none;letter-spacing:0;transition:border-color .15s,color .15s}.changed-toggle.active[_ngcontent-%COMP%]{border-color:#58a6ff;color:#58a6ff}.tree-container[_ngcontent-%COMP%]{padding:4px 0}.node-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;height:28px;padding-right:8px;cursor:pointer;border-radius:4px;margin:1px 4px;font-size:.8rem;color:#ffffffbf;transition:background .1s}.node-row[_ngcontent-%COMP%]:hover{background:#ffffff0d}.tree-node.selected[_ngcontent-%COMP%] > .node-row[_ngcontent-%COMP%]{background:#388bfd26;color:#58a6ff}.node-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;flex-shrink:0;color:#fff6}.node-name[_ngcontent-%COMP%]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.status-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px;flex-shrink:0}.status-added[_ngcontent-%COMP%], .status-added[_ngcontent-%COMP%]   .node-icon[_ngcontent-%COMP%], .status-added[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%]{color:#3fb950}.status-removed[_ngcontent-%COMP%], .status-removed[_ngcontent-%COMP%]   .node-icon[_ngcontent-%COMP%], .status-removed[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%]{color:#f85149}.status-modified[_ngcontent-%COMP%], .status-modified[_ngcontent-%COMP%]   .node-icon[_ngcontent-%COMP%], .status-modified[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%]{color:#d29922}"]})};function pa(i,a){i&1&&(l(0,"div",0)(1,"mat-icon"),m(2,"diff"),b(),l(3,"p"),m(4,"Select a file to view its diff"),b()())}function fa(i,a){i&1&&m(0," + ")}function ga(i,a){i&1&&m(0," - ")}function ha(i,a){i&1&&m(0," @@ ")}function _a(i,a){if(i&1&&(l(0,"tr")(1,"td",7),y(2,fa,1,0)(3,ga,1,0)(4,ha,1,0),b(),l(5,"td",8)(6,"pre"),m(7),b()()()),i&2){let t=a.$implicit;j("line-"+t.type),s(2),x(t.type==="added"?2:t.type==="removed"?3:t.type==="hunk"?4:-1),s(5),S(t.content)}}function va(i,a){if(i&1&&(l(0,"div",1)(1,"span",2),m(2),b(),l(3,"span",3),m(4),b()(),l(5,"div",4)(6,"table",5)(7,"tbody"),V(8,_a,8,4,"tr",6,Se),b()()()),i&2){let t=h();s(2),S(t._file()),s(),j("badge-"+t.entry().status),s(),Q(" ",t.entry().status," "),s(4),H(t.lines())}}var zt=class i{set file(a){this._file.set(a)}set diffResult(a){this._diffResult.set(a)}_file=w(null);_diffResult=w({});entry=J(()=>{let a=this._file(),t=this._diffResult();return a?t[a]??null:null});lines=J(()=>{let a=this.entry();return a?a.status==="unchanged"?a.fromContent.split(`
`).map(t=>({type:"context",content:t})):this.parsePatch(a.patch):[]});parsePatch(a){let t=[];for(let e of a.split(`
`))e.startsWith("+++")||e.startsWith("---")||e.startsWith("\\")||(e.startsWith("@@")?t.push({type:"hunk",content:e}):e.startsWith("+")?t.push({type:"added",content:e.slice(1)}):e.startsWith("-")?t.push({type:"removed",content:e.slice(1)}):t.push({type:"context",content:e.slice(1)}));return t}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=A({type:i,selectors:[["app-file-diff"]],inputs:{file:"file",diffResult:"diffResult"},decls:2,vars:1,consts:[[1,"empty-state"],[1,"diff-header"],[1,"file-path"],[1,"status-badge"],[1,"diff-content"],[1,"diff-table"],[3,"class"],[1,"line-gutter"],[1,"line-content"]],template:function(t,e){t&1&&y(0,pa,5,0,"div",0)(1,va,10,4),t&2&&x(e.entry()?1:0)},dependencies:[tt,bt,mt],styles:[".empty-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:#ffffff40}.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:8px 0 0;font-size:.9rem}.diff-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:8px 16px;border-bottom:1px solid #21262d;background:#161b22;font-family:Roboto Mono,monospace;font-size:.8rem;color:#ffffffb3;position:sticky;top:0;z-index:1}.status-badge[_ngcontent-%COMP%]{padding:1px 8px;border-radius:10px;font-size:.7rem;font-family:sans-serif}.status-badge.badge-added[_ngcontent-%COMP%]{background:#3fb95033;color:#3fb950}.status-badge.badge-removed[_ngcontent-%COMP%]{background:#f8514933;color:#f85149}.status-badge.badge-modified[_ngcontent-%COMP%]{background:#d2992233;color:#d29922}.status-badge.badge-unchanged[_ngcontent-%COMP%]{background:#ffffff1a;color:#fff6}.diff-content[_ngcontent-%COMP%]{overflow-x:auto}.diff-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;font-family:Roboto Mono,Fira Code,monospace;font-size:.78rem}tr.line-added[_ngcontent-%COMP%]{background:#3fb9501a}tr.line-removed[_ngcontent-%COMP%]{background:#f851491a}tr.line-hunk[_ngcontent-%COMP%]{background:#388bfd14}.line-gutter[_ngcontent-%COMP%]{width:32px;padding:0 8px;text-align:center;-webkit-user-select:none;user-select:none;color:#ffffff4d;border-right:1px solid #21262d;font-size:.7rem}.line-added[_ngcontent-%COMP%]   .line-gutter[_ngcontent-%COMP%]{color:#3fb950}.line-removed[_ngcontent-%COMP%]   .line-gutter[_ngcontent-%COMP%]{color:#f85149}.line-hunk[_ngcontent-%COMP%]   .line-gutter[_ngcontent-%COMP%]{color:#388bfd}.line-content[_ngcontent-%COMP%]{padding:0 12px}.line-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:0;white-space:pre;color:#e6edf3}.line-added[_ngcontent-%COMP%]   .line-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{color:#aff5b4}.line-removed[_ngcontent-%COMP%]   .line-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{color:#ffdcd7}.line-hunk[_ngcontent-%COMP%]   .line-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{color:#79c0ff}"]})};var hn=(i,a)=>a.name;function ya(i,a){i&1&&(C(0,"div",0),m(1,"No dependency changes"),k())}function xa(i,a){if(i&1&&(C(0,"tr")(1,"td",4),m(2),k(),C(3,"td",5),m(4),k(),C(5,"td",5),m(6),k(),C(7,"td",6)(8,"span"),m(9),k()()()),i&2){let t=a.$implicit,e=h(3);j("type-"+e.changeType(t)),s(2),S(t.name),s(2),S(t.fromVersion??"\u2014"),s(2),S(t.toVersion??"\u2014"),s(2),j("badge badge-"+e.changeType(t)),s(),S(e.changeType(t))}}function Ca(i,a){if(i&1&&(C(0,"div",1),m(1,"dependencies"),k(),C(2,"table",2)(3,"thead")(4,"tr")(5,"th"),m(6,"Package"),k(),C(7,"th"),m(8,"Before"),k(),C(9,"th"),m(10,"After"),k(),C(11,"th"),m(12,"Change"),k()()(),C(13,"tbody"),V(14,xa,10,8,"tr",3,hn),k()()),i&2){let t=h(2);s(14),H(t.dependencies)}}function ka(i,a){if(i&1&&(C(0,"tr")(1,"td",4),m(2),k(),C(3,"td",5),m(4),k(),C(5,"td",5),m(6),k(),C(7,"td",6)(8,"span"),m(9),k()()()),i&2){let t=a.$implicit,e=h(3);j("type-"+e.changeType(t)),s(2),S(t.name),s(2),S(t.fromVersion??"\u2014"),s(2),S(t.toVersion??"\u2014"),s(2),j("badge badge-"+e.changeType(t)),s(),S(e.changeType(t))}}function Ta(i,a){if(i&1&&(C(0,"div",1),m(1,"devDependencies"),k(),C(2,"table",2)(3,"thead")(4,"tr")(5,"th"),m(6,"Package"),k(),C(7,"th"),m(8,"Before"),k(),C(9,"th"),m(10,"After"),k(),C(11,"th"),m(12,"Change"),k()()(),C(13,"tbody"),V(14,ka,10,8,"tr",3,hn),k()()),i&2){let t=h(2);s(14),H(t.devDependencies)}}function Ma(i,a){if(i&1&&(y(0,Ca,16,0),y(1,Ta,16,0)),i&2){let t=h();x(t.dependencies.length>0?0:-1),s(),x(t.devDependencies.length>0?1:-1)}}var Gt=class i{diffService=u(pt);set from(a){this._from=a,this.recompute()}set to(a){this._to=a,this.recompute()}_from;_to;dependencies=[];devDependencies=[];recompute(){if(this._from&&this._to){let a=this.diffService.parseDepsChange(this._from,this._to);this.dependencies=a.filter(t=>t.group==="dependencies"),this.devDependencies=a.filter(t=>t.group==="devDependencies")}}changeType(a){if(!a.fromVersion)return"added";if(!a.toVersion)return"removed";let[t,e]=a.fromVersion.split(".").map(Number),[n,o]=a.toVersion.split(".").map(Number);return n!==t?"major":o!==e?"minor":"patch"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=A({type:i,selectors:[["app-deps-tab"]],inputs:{from:"from",to:"to"},decls:2,vars:1,consts:[[1,"empty"],[1,"section-header"],[1,"deps-table"],[3,"class"],[1,"pkg-name"],[1,"version"],[1,"type-badge"]],template:function(t,e){t&1&&y(0,ya,2,0,"div",0)(1,Ma,2,2),t&2&&x(e.dependencies.length===0&&e.devDependencies.length===0?0:1)},dependencies:[tt],styles:[".empty[_ngcontent-%COMP%]{padding:32px 16px;color:#fff6;text-align:center}.section-header[_ngcontent-%COMP%]{padding:10px 12px 4px;font-size:.7rem;text-transform:uppercase;letter-spacing:.08em;color:#ffffff59;border-bottom:1px solid #21262d;margin-top:8px}.section-header[_ngcontent-%COMP%]:first-child{margin-top:0}.deps-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;font-size:.85rem}.deps-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left;padding:8px 12px;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#fff6;border-bottom:1px solid #21262d}.deps-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:6px 12px;border-bottom:1px solid #161b22;vertical-align:middle}.pkg-name[_ngcontent-%COMP%]{font-family:Roboto Mono,monospace;font-size:.8rem}.version[_ngcontent-%COMP%]{font-family:Roboto Mono,monospace;font-size:.78rem;color:#ffffff8c}.badge[_ngcontent-%COMP%]{padding:2px 8px;border-radius:10px;font-size:.7rem}.badge.badge-added[_ngcontent-%COMP%]{background:#3fb95033;color:#3fb950}.badge.badge-removed[_ngcontent-%COMP%], .badge.badge-major[_ngcontent-%COMP%]{background:#f8514933;color:#f85149}.badge.badge-minor[_ngcontent-%COMP%]{background:#58a6ff33;color:#58a6ff}.badge.badge-patch[_ngcontent-%COMP%]{background:#8b949e26;color:#8b949e}"]})};var _n=(i,a)=>a.angularMajor;function wa(i,a){if(i&1&&(l(0,"mat-option",6),m(1),b()),i&2){let t=a.$implicit;_("value",t.angularMajor),s(),Q("Angular ",t.angularMajor)}}function Ia(i,a){if(i&1&&(l(0,"mat-option",6),m(1),b()),i&2){let t=a.$implicit;_("value",t.angularMajor),s(),Q("Angular ",t.angularMajor)}}function Da(i,a){if(i&1&&(l(0,"div",12)(1,"span",17),m(2),b(),l(3,"span",18),m(4),b(),l(5,"span",19),m(6),b()()),i&2){let t=h();s(2),Q("+",t.summary().added," added"),s(2),Q("\u2212",t.summary().removed," removed"),s(2),Q("~",t.summary().modified," modified")}}function Sa(i,a){if(i&1&&(l(0,"div",13),G(1,"app-version-meta-card",20)(2,"app-version-meta-card",21),b()),i&2){let t=h();s(),_("snapshot",t.fromSnapshot()),s(),_("snapshot",t.toSnapshot())}}function Pa(i,a){i&1&&(l(0,"div",14),G(1,"mat-spinner",22),l(2,"span"),m(3,"Loading snapshots\u2026"),b()())}function Ea(i,a){if(i&1&&(l(0,"div",15),m(1),b()),i&2){let t=h();s(),S(t.error())}}function Ra(i,a){if(i&1&&G(0,"app-deps-tab",30),i&2){let t=h(2);_("from",t.fromSnapshot())("to",t.toSnapshot())}}function Ba(i,a){if(i&1){let t=it();l(0,"mat-tab-group",16)(1,"mat-tab",23)(2,"div",24)(3,"div",25)(4,"app-file-tree",26),T("fileSelected",function(n){$(t);let o=h();return q(o.onFileSelect(n))}),b()(),l(5,"div",27),G(6,"app-file-diff",28),b()()(),l(7,"mat-tab",29),y(8,Ra,1,2,"app-deps-tab",30),b()()}if(i&2){let t=h();s(4),_("diffResult",t.diffResult())("selectedFile",t.selectedFile()),s(2),_("file",t.selectedFile())("diffResult",t.diffResult()),s(2),x(t.fromSnapshot()&&t.toSnapshot()?8:-1)}}var vn=class i{route=u(Re);router=u(Be);dataService=u(nn);diffService=u(pt);versions=w([]);fromMajor=w(null);toMajor=w(null);selectedFile=w(null);fromSnapshot=w(null);toSnapshot=w(null);diffResult=w(null);loading=w(!1);error=w(null);summary=J(()=>{let a=this.diffResult();if(!a)return null;let t=Object.values(a);return{added:t.filter(e=>e.status==="added").length,removed:t.filter(e=>e.status==="removed").length,modified:t.filter(e=>e.status==="modified").length}});ngOnInit(){this.dataService.getVersions().subscribe({next:a=>{this.versions.set(a);let t=this.route.snapshot.params,e=t.from?Number(t.from):null,n=t.to?Number(t.to):null,o=t.file?decodeURIComponent(t.file):null;if(e&&n)this.fromMajor.set(e),this.toMajor.set(n),this.selectedFile.set(o),this.loadDiff(e,n);else if(a.length>=2){let r=a[a.length-1].angularMajor,c=a[a.length-2].angularMajor;this.router.navigate(["/diff",c,r],{replaceUrl:!0})}},error:()=>this.error.set("Failed to load version list.")})}onFromChange(a){this.fromMajor.set(a),this.navigate(a,this.toMajor())}onToChange(a){this.toMajor.set(a),this.navigate(this.fromMajor(),a)}stepBoth(a){let t=this.versions(),e=t.findIndex(c=>c.angularMajor===this.fromMajor()),n=t.findIndex(c=>c.angularMajor===this.toMajor()),o=t[e+a],r=t[n+a];o&&r&&this.navigate(o.angularMajor,r.angularMajor)}canStepBoth(a){let t=this.versions(),e=t.findIndex(o=>o.angularMajor===this.fromMajor()),n=t.findIndex(o=>o.angularMajor===this.toMajor());return!!t[e+a]&&!!t[n+a]}onFileSelect(a){this.selectedFile.set(a);let t=this.fromMajor(),e=this.toMajor();this.router.navigate(["/diff",t,e,encodeURIComponent(a)])}jumpToLatest(){let a=this.versions();if(a.length<2)return;let t=a[a.length-1].angularMajor,e=a[a.length-2].angularMajor;this.navigate(e,t)}copyShareUrl(){navigator.clipboard.writeText(window.location.href)}navigate(a,t){this.fromMajor.set(a),this.toMajor.set(t),this.selectedFile.set(null),this.router.navigate(["/diff",a,t]),this.loadDiff(a,t)}loadDiff(a,t){this.loading.set(!0),this.diffResult.set(null),this.fromSnapshot.set(null),this.toSnapshot.set(null),this.error.set(null),he({from:this.dataService.getSnapshot(a),to:this.dataService.getSnapshot(t)}).subscribe({next:({from:e,to:n})=>{this.fromSnapshot.set(e),this.toSnapshot.set(n),this.diffResult.set(this.diffService.compute(e,n)),this.loading.set(!1)},error:()=>{this.error.set("Failed to load snapshots."),this.loading.set(!1)}})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=A({type:i,selectors:[["app-diff-view"]],decls:36,vars:9,consts:[[1,"diff-view"],[1,"controls-bar"],[1,"version-selectors"],["mat-icon-button","","matTooltip","Previous versions",3,"click","disabled"],["appearance","outline",1,"version-select"],[3,"valueChange","value"],[3,"value"],[1,"arrow-icon"],["mat-icon-button","","matTooltip","Next versions",3,"click","disabled"],[1,"controls-actions"],["mat-stroked-button","","matTooltip","Jump to latest versions",3,"click"],["mat-icon-button","","matTooltip","Copy shareable URL",3,"click"],[1,"summary-bar"],[1,"meta-cards"],[1,"loading-state"],[1,"error-state"],["animationDuration","0",1,"diff-tabs"],[1,"summary-added"],[1,"summary-removed"],[1,"summary-modified"],["label","From",3,"snapshot"],["label","To",3,"snapshot"],["diameter","40"],["label","Files"],[1,"diff-body"],[1,"file-tree-panel"],[3,"fileSelected","diffResult","selectedFile"],[1,"file-diff-panel"],[3,"file","diffResult"],["label","Dependencies"],[3,"from","to"]],template:function(t,e){t&1&&(l(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),T("click",function(){return e.stepBoth(-1)}),l(4,"mat-icon"),m(5,"chevron_left"),b()(),l(6,"mat-form-field",4)(7,"mat-label"),m(8,"From"),b(),l(9,"mat-select",5),T("valueChange",function(o){return e.onFromChange(o)}),V(10,wa,2,2,"mat-option",6,_n),b()(),l(12,"mat-icon",7),m(13,"arrow_forward"),b(),l(14,"mat-form-field",4)(15,"mat-label"),m(16,"To"),b(),l(17,"mat-select",5),T("valueChange",function(o){return e.onToChange(o)}),V(18,Ia,2,2,"mat-option",6,_n),b()(),l(20,"button",8),T("click",function(){return e.stepBoth(1)}),l(21,"mat-icon"),m(22,"chevron_right"),b()()(),l(23,"div",9)(24,"button",10),T("click",function(){return e.jumpToLatest()}),l(25,"mat-icon"),m(26,"fast_forward"),b(),m(27," Latest "),b(),l(28,"button",11),T("click",function(){return e.copyShareUrl()}),l(29,"mat-icon"),m(30,"share"),b()()()(),y(31,Da,7,3,"div",12),y(32,Sa,3,2,"div",13),y(33,Pa,4,0,"div",14),y(34,Ea,2,1,"div",15),y(35,Ba,9,5,"mat-tab-group",16),b()),t&2&&(s(3),_("disabled",!e.canStepBoth(-1)),s(6),_("value",e.fromMajor()),s(),H(e.versions()),s(7),_("value",e.toMajor()),s(),H(e.versions()),s(2),_("disabled",!e.canStepBoth(1)),s(11),x(e.summary()?31:-1),s(),x(e.fromSnapshot()&&e.toSnapshot()?32:-1),s(),x(e.loading()?33:-1),s(),x(e.error()?34:-1),s(),x(e.diffResult()?35:-1))},dependencies:[tt,Ke,We,Ge,Ze,$e,qe,Je,Xe,Ye,bt,mt,bn,ie,mn,Nt,At,en,tn,Ht,zt,Gt,an],styles:[".diff-view[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:hidden}.controls-bar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;padding:12px 16px 0;flex-shrink:0;flex-wrap:wrap}.version-selectors[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.version-selectors[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]{margin-top:-20px;flex-shrink:0}.version-select[_ngcontent-%COMP%]{width:160px}.arrow-icon[_ngcontent-%COMP%]{color:#fff6;margin-top:-20px}.controls-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;margin-top:-20px}.summary-bar[_ngcontent-%COMP%]{display:flex;gap:16px;padding:4px 16px 8px;font-size:.8rem;flex-shrink:0}.summary-added[_ngcontent-%COMP%]{color:#3fb950}.summary-removed[_ngcontent-%COMP%]{color:#f85149}.summary-modified[_ngcontent-%COMP%]{color:#d29922}.meta-cards[_ngcontent-%COMP%]{display:flex;gap:12px;padding:0 16px 8px;flex-shrink:0;flex-wrap:wrap}.loading-state[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;padding:40px 16px;color:#ffffff80}.error-state[_ngcontent-%COMP%]{padding:16px;color:#f85149}.diff-tabs[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;overflow:hidden}.diff-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body-wrapper{flex:1;overflow:hidden}.diff-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body-content{height:100%;overflow:hidden}.diff-body[_ngcontent-%COMP%]{display:flex;height:100%;overflow:hidden}.file-tree-panel[_ngcontent-%COMP%]{width:280px;min-width:200px;flex-shrink:0;overflow-y:auto;border-right:1px solid #21262d}.file-diff-panel[_ngcontent-%COMP%]{flex:1;overflow:auto}"]})};export{vn as DiffViewComponent};
