import{a as Ye,b as Xe,c as Je,d as bt,e as ut,f as Nt,g as Vt}from"./chunk-LADNWFAG.js";import{a as ze,b as Ge,c as We,d as Qe,e as $e,f as qe,g as Ze,h as Ke,i as tn,j as en,k as nn,l as an}from"./chunk-RL5PB7UD.js";import{$ as mt,B as Fe,D as Ae,E as Bt,I as Ot,J as Ft,L as Ne,M as Ve,P as je,Q as He,R as Jt,c as Ee,d as tt,da as xt,ea as At,fa as Ue,j as Re,l as Le,p as Yt,r as Xt,s as Be,t as Lt,x as Oe}from"./chunk-Y3MUW6DU.js";import{A as ye,Bb as Ut,Cb as ot,Eb as C,Gb as h,Hb as st,Ib as lt,J as xe,Jb as yt,K as Mt,Kb as rt,L as Ce,Lb as w,M as ht,Mb as I,Oa as s,Qb as X,Rb as Et,S as ke,Sb as L,T as wt,Ta as Dt,Tb as H,Ua as Pt,Ub as p,V as U,Vb as O,Wa as $t,Wb as Q,X as u,Xb as dt,Yb as Zt,Za as we,Zb as Se,a as nt,aa as $,ac as J,b as ue,ba as q,bb as R,cb as St,cc as Kt,d as at,db as Y,ea as Qt,eb as vt,f as pe,fb as it,g as kt,gb as Ie,gc as ct,i as ge,ia as E,ic as D,ja as _t,jc as Rt,k as fe,mb as De,na as k,nb as z,ob as y,pb as x,qb as Pe,ra as Te,rb as qt,sa as It,sb as N,t as he,tb as V,u as _e,ua as K,ub as _,v as Tt,va as Me,vb as l,w as ve,wb as m,xb as j,yb as G,zb as W}from"./chunk-UKVB24HS.js";var ie=["*"];function xn(a,i){a&1&&lt(0)}var Cn=["tabListContainer"],kn=["tabList"],Tn=["tabListInner"],Mn=["nextPaginator"],wn=["previousPaginator"],In=["content"];function Dn(a,i){}var Pn=["tabBodyWrapper"],Sn=["tabHeader"];function En(a,i){}function Rn(a,i){if(a&1&&it(0,En,0,0,"ng-template",12),a&2){let t=h().$implicit;_("cdkPortalOutlet",t.templateLabel)}}function Ln(a,i){if(a&1&&p(0),a&2){let t=h().$implicit;O(t.textLabel)}}function Bn(a,i){if(a&1){let t=ot();l(0,"div",7,2),C("click",function(){let n=$(t),o=n.$implicit,r=n.$index,d=h(),c=X(1);return q(d._handleClick(o,c,r))})("cdkFocusChange",function(n){let o=$(t).$index,r=h();return q(r._tabFocusChanged(n,o))}),j(2,"span",8)(3,"div",9),l(4,"span",10)(5,"span",11),y(6,Rn,1,1,null,12)(7,Ln,1,1),m()()()}if(a&2){let t=i.$implicit,e=i.$index,n=X(1),o=h();H(t.labelClass),L("mdc-tab--active",o.selectedIndex===e),_("id",o._getTabLabelId(t,e))("disabled",t.disabled)("fitInkBarToContent",o.fitInkBarToContent),z("tabIndex",o._getTabIndex(e))("aria-posinset",e+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(e))("aria-selected",o.selectedIndex===e)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),s(3),_("matRippleTrigger",n)("matRippleDisabled",t.disabled||o.disableRipple),s(3),x(t.templateLabel?6:7)}}function On(a,i){a&1&&lt(0)}function Fn(a,i){if(a&1){let t=ot();l(0,"mat-tab-body",13),C("_onCentered",function(){$(t);let n=h();return q(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){$(t);let o=h();return q(o._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){$(t);let o=h();return q(o._bodyCentered(n))}),m()}if(a&2){let t=i.$implicit,e=i.$index,n=h();H(t.bodyClass),_("id",n._getTabContentId(e))("content",t.content)("position",t.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),z("tabindex",n.contentTabIndex!=null&&n.selectedIndex===e?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(t,e))("aria-hidden",n.selectedIndex!==e)}}var An=new U("MatTabContent"),Nn=(()=>{class a{template=u(Pt);constructor(){}static \u0275fac=function(e){return new(e||a)};static \u0275dir=Y({type:a,selectors:[["","matTabContent",""]],features:[dt([{provide:An,useExisting:a}])]})}return a})(),Vn=new U("MatTabLabel"),ln=new U("MAT_TAB"),jn=(()=>{class a extends He{_closestTab=u(ln,{optional:!0});static \u0275fac=(()=>{let t;return function(n){return(t||(t=It(a)))(n||a)}})();static \u0275dir=Y({type:a,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[dt([{provide:Vn,useExisting:a}]),vt]})}return a})(),dn=new U("MAT_TAB_GROUP"),oe=(()=>{class a{_viewContainerRef=u(we);_closestTabGroup=u(dn,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new kt;position=null;origin=null;isActive=!1;constructor(){u(Lt).load(At)}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new je(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=R({type:a,selectors:[["mat-tab"]],contentQueries:function(e,n,o){if(e&1&&yt(o,jn,5)(o,Nn,7,Pt),e&2){let r;w(r=I())&&(n.templateLabel=r.first),w(r=I())&&(n._explicitContent=r.first)}},viewQuery:function(e,n){if(e&1&&rt(Pt,7),e&2){let o;w(o=I())&&(n._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(e,n){e&2&&z("id",null)},inputs:{disabled:[2,"disabled","disabled",D],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[dt([{provide:ln,useExisting:a}]),Te],ngContentSelectors:ie,decls:1,vars:0,template:function(e,n){e&1&&(st(),Ie(0,xn,1,0,"ng-template"))},encapsulation:2})}return a})(),te="mdc-tab-indicator--active",on="mdc-tab-indicator--no-transition",ee=class{_items;_currentItem;constructor(i){this._items=i}hide(){this._items.forEach(i=>i.deactivateInkBar()),this._currentItem=void 0}alignToElement(i){let t=this._items.find(n=>n.elementRef.nativeElement===i),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}},Hn=(()=>{class a{_elementRef=u(K);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(te);return}let n=e.getBoundingClientRect(),o=t.width/n.width,r=t.left-n.left;e.classList.add(on),this._inkBarContentElement.style.setProperty("transform",`translateX(${r}px) scaleX(${o})`),e.getBoundingClientRect(),e.classList.remove(on),e.classList.add(te),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(te)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),n=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement)}static \u0275fac=function(e){return new(e||a)};static \u0275dir=Y({type:a,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",D]}})}return a})();var cn=(()=>{class a extends Hn{elementRef=u(K);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(n){return(t||(t=It(a)))(n||a)}})();static \u0275dir=Y({type:a,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,n){e&2&&(z("aria-disabled",!!n.disabled),L("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",D]},features:[vt]})}return a})(),rn={passive:!0},zn=650,Gn=100,Wn=(()=>{class a{_elementRef=u(K);_changeDetectorRef=u(ct);_viewportRuler=u(Ve);_dir=u(Ot,{optional:!0});_ngZone=u(_t);_platform=u(Yt);_sharedResizeObserver=u(ze);_injector=u(Qt);_renderer=u($t);_animationsDisabled=mt();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new kt;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new kt;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new E;indexFocused=new E;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),rn),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),rn))}ngAfterContentInit(){let t=this._dir?this._dir.change:fe("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(ye(32),ht(this._destroyed)),n=this._viewportRuler.change(150).pipe(ht(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Ae(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Dt(o,{injector:this._injector}),Tt(t,n,e,this._items.changes,this._itemsResized()).pipe(ht(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(r=>{this.indexFocused.emit(r),this._setTabFocus(r)})}_itemsResized(){return typeof ResizeObserver!="function"?ge:this._items.changes.pipe(Mt(this._items),Ce(t=>new pe(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(o=>e.next(o));return t.forEach(o=>n.observe(o.elementRef.nativeElement)),()=>{n.disconnect()}}))),xe(1),ve(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Fe(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:r}=e.elementRef.nativeElement,d,c;this._getLayoutDirection()=="ltr"?(d=o,c=d+r):(c=this._tabListInner.nativeElement.offsetWidth-o,d=c-r);let f=this.scrollDistance,b=this.scrollDistance+n;d<f?this.scrollDistance-=f-d:c>b&&(this.scrollDistance+=Math.min(c-b,d-f))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,n=t-e>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),_e(zn,Gn).pipe(ht(Tt(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:o}=this._scrollHeader(t);(o===0||o>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||a)};static \u0275dir=Y({type:a,inputs:{disablePagination:[2,"disablePagination","disablePagination",D],selectedIndex:[2,"selectedIndex","selectedIndex",Rt]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return a})(),Qn=(()=>{class a extends Wn{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new ee(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=It(a)))(n||a)}})();static \u0275cmp=R({type:a,selectors:[["mat-tab-header"]],contentQueries:function(e,n,o){if(e&1&&yt(o,cn,4),e&2){let r;w(r=I())&&(n._items=r)}},viewQuery:function(e,n){if(e&1&&rt(Cn,7)(kn,7)(Tn,7)(Mn,5)(wn,5),e&2){let o;w(o=I())&&(n._tabListContainer=o.first),w(o=I())&&(n._tabList=o.first),w(o=I())&&(n._tabListInner=o.first),w(o=I())&&(n._nextPaginator=o.first),w(o=I())&&(n._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(e,n){e&2&&L("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",D]},features:[vt],ngContentSelectors:ie,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,n){e&1&&(st(),l(0,"div",5,0),C("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(r){return n._handlePaginatorPress("before",r)})("touchend",function(){return n._stopInterval()}),j(2,"div",6),m(),l(3,"div",7,1),C("keydown",function(r){return n._handleKeydown(r)}),l(5,"div",8,2),C("cdkObserveContent",function(){return n._onContentChanges()}),l(7,"div",9,3),lt(9),m()()(),l(10,"div",10,4),C("mousedown",function(r){return n._handlePaginatorPress("after",r)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),j(12,"div",6),m()),e&2&&(L("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),_("matRippleDisabled",n._disableScrollBefore||n.disableRipple),s(3),L("_mat-animation-noopable",n._animationsDisabled),s(2),z("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),s(5),L("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),_("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[xt,Oe],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return a})(),$n=new U("MAT_TABS_CONFIG"),sn=(()=>{class a extends Jt{_host=u(ne);_ngZone=u(_t);_centeringSub=at.EMPTY;_leavingSub=at.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Mt(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(e){return new(e||a)};static \u0275dir=Y({type:a,selectors:[["","matTabBodyHost",""]],features:[vt]})}return a})(),ne=(()=>{class a{_elementRef=u(K);_dir=u(Ot,{optional:!0});_ngZone=u(_t);_injector=u(Qt);_renderer=u($t);_diAnimationsDisabled=mt();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=at.EMPTY;_position;_previousPosition;_onCentering=new E;_beforeCentering=new E;_afterLeavingCenter=new E;_onCentered=new E(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=u(ct);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Dt(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Dt(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=R({type:a,selectors:[["mat-tab-body"]],viewQuery:function(e,n){if(e&1&&rt(sn,5)(In,5),e&2){let o;w(o=I())&&(n._portalHost=o.first),w(o=I())&&(n._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(e,n){e&2&&z("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(e,n){e&1&&(l(0,"div",1,0),it(2,Dn,0,0,"ng-template",2),m()),e&2&&L("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[sn,Ne],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return a})(),mn=(()=>{class a{_elementRef=u(K);_changeDetectorRef=u(ct);_ngZone=u(_t);_tabsSubscription=at.EMPTY;_tabLabelSubscription=at.EMPTY;_tabBodySubscription=at.EMPTY;_diAnimationsDisabled=mt();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Me;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){let e=t+"";this._animationDuration=/^\d+$/.test(e)?t+"ms":e}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new E;focusChange=new E;animationDone=new E;selectedTabChange=new E(!0);_groupId;_isServer=!u(Yt).isBrowser;constructor(){let t=u($n,{optional:!0});this._groupId=u(Bt).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,o)=>n.isActive=o===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let o=0;o<e.length;o++)if(e[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,n=e[o];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Mt(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new ae;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Tt(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=R({type:a,selectors:[["mat-tab-group"]],contentQueries:function(e,n,o){if(e&1&&yt(o,oe,5),e&2){let r;w(r=I())&&(n._allTabs=r)}},viewQuery:function(e,n){if(e&1&&rt(Pn,5)(Sn,5)(ne,5),e&2){let o;w(o=I())&&(n._tabBodyWrapper=o.first),w(o=I())&&(n._tabHeader=o.first),w(o=I())&&(n._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(e,n){e&2&&(z("mat-align-tabs",n.alignTabs),H("mat-"+(n.color||"primary")),Et("--mat-tab-animation-duration",n.animationDuration),L("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",D],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",D],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",D],selectedIndex:[2,"selectedIndex","selectedIndex",Rt],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Rt],disablePagination:[2,"disablePagination","disablePagination",D],disableRipple:[2,"disableRipple","disableRipple",D],preserveContent:[2,"preserveContent","preserveContent",D],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[dt([{provide:dn,useExisting:a}])],ngContentSelectors:ie,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(e,n){e&1&&(st(),l(0,"mat-tab-header",3,0),C("indexFocused",function(r){return n._focusChanged(r)})("selectFocusedIndex",function(r){return n.selectedIndex=r}),N(2,Bn,8,17,"div",4,qt),m(),y(4,On,1,0),l(5,"div",5,1),N(7,Fn,1,10,"mat-tab-body",6,qt),m()),e&2&&(_("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),De("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),s(2),V(n._tabs),s(2),x(n._isServer?4:-1),s(),L("_mat-animation-noopable",n._animationsDisabled()),s(2),V(n._tabs))},dependencies:[Qn,cn,Be,xt,Jt,ne],styles:[`.mdc-tab {
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
`],encapsulation:2})}return a})(),ae=class{index;tab};var bn=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=St({type:a});static \u0275inj=wt({imports:[Ft]})}return a})();var jt=class{diff(i,t,e={}){let n;typeof e=="function"?(n=e,e={}):"callback"in e&&(n=e.callback);let o=this.castInput(i,e),r=this.castInput(t,e),d=this.removeEmpty(this.tokenize(o,e)),c=this.removeEmpty(this.tokenize(r,e));return this.diffWithOptionsObj(d,c,e,n)}diffWithOptionsObj(i,t,e,n){var o;let r=g=>{if(g=this.postProcess(g,e),n){setTimeout(function(){n(g)},0);return}else return g},d=t.length,c=i.length,f=1,b=d+c;e.maxEditLength!=null&&(b=Math.min(b,e.maxEditLength));let T=(o=e.timeout)!==null&&o!==void 0?o:1/0,B=Date.now()+T,M=[{oldPos:-1,lastComponent:void 0}],F=this.extractCommon(M[0],t,i,0,e);if(M[0].oldPos+1>=c&&F+1>=d)return r(this.buildValues(M[0].lastComponent,t,i));let A=-1/0,Z=1/0,et=()=>{for(let g=Math.max(A,-f);g<=Math.min(Z,f);g+=2){let v,P=M[g-1],S=M[g+1];P&&(M[g-1]=void 0);let ft=!1;if(S){let be=S.oldPos-g;ft=S&&0<=be&&be<d}let Ct=P&&P.oldPos+1<c;if(!ft&&!Ct){M[g]=void 0;continue}if(!Ct||ft&&P.oldPos<S.oldPos?v=this.addToPath(S,!0,!1,0,e):v=this.addToPath(P,!1,!0,1,e),F=this.extractCommon(v,t,i,g,e),v.oldPos+1>=c&&F+1>=d)return r(this.buildValues(v.lastComponent,t,i))||!0;M[g]=v,v.oldPos+1>=c&&(Z=Math.min(Z,g-1)),F+1>=d&&(A=Math.max(A,g+1))}f++};if(n)(function g(){setTimeout(function(){if(f>b||Date.now()>B)return n(void 0);et()||g()},0)})();else for(;f<=b&&Date.now()<=B;){let g=et();if(g)return g}}addToPath(i,t,e,n,o){let r=i.lastComponent;return r&&!o.oneChangePerToken&&r.added===t&&r.removed===e?{oldPos:i.oldPos+n,lastComponent:{count:r.count+1,added:t,removed:e,previousComponent:r.previousComponent}}:{oldPos:i.oldPos+n,lastComponent:{count:1,added:t,removed:e,previousComponent:r}}}extractCommon(i,t,e,n,o){let r=t.length,d=e.length,c=i.oldPos,f=c-n,b=0;for(;f+1<r&&c+1<d&&this.equals(e[c+1],t[f+1],o);)f++,c++,b++,o.oneChangePerToken&&(i.lastComponent={count:1,previousComponent:i.lastComponent,added:!1,removed:!1});return b&&!o.oneChangePerToken&&(i.lastComponent={count:b,previousComponent:i.lastComponent,added:!1,removed:!1}),i.oldPos=c,f}equals(i,t,e){return e.comparator?e.comparator(i,t):i===t||!!e.ignoreCase&&i.toLowerCase()===t.toLowerCase()}removeEmpty(i){let t=[];for(let e=0;e<i.length;e++)i[e]&&t.push(i[e]);return t}castInput(i,t){return i}tokenize(i,t){return Array.from(i)}join(i){return i.join("")}postProcess(i,t){return i}get useLongestToken(){return!1}buildValues(i,t,e){let n=[],o;for(;i;)n.push(i),o=i.previousComponent,delete i.previousComponent,i=o;n.reverse();let r=n.length,d=0,c=0,f=0;for(;d<r;d++){let b=n[d];if(b.removed)b.value=this.join(e.slice(f,f+b.count)),f+=b.count;else{if(!b.added&&this.useLongestToken){let T=t.slice(c,c+b.count);T=T.map(function(B,M){let F=e[f+M];return F.length>B.length?F:B}),b.value=this.join(T)}else b.value=this.join(t.slice(c,c+b.count));c+=b.count,b.added||(f+=b.count)}}return n}};var re=class extends jt{constructor(){super(...arguments),this.tokenize=Zn}equals(i,t,e){return e.ignoreWhitespace?((!e.newlineIsToken||!i.includes(`
`))&&(i=i.trim()),(!e.newlineIsToken||!t.includes(`
`))&&(t=t.trim())):e.ignoreNewlineAtEof&&!e.newlineIsToken&&(i.endsWith(`
`)&&(i=i.slice(0,-1)),t.endsWith(`
`)&&(t=t.slice(0,-1))),super.equals(i,t,e)}},Un=new re;function se(a,i,t){return Un.diff(a,i,t)}function Zn(a,i){i.stripTrailingCr&&(a=a.replace(/\r\n/g,`
`));let t=[],e=a.split(/(\n|\r\n)/);e[e.length-1]||e.pop();for(let n=0;n<e.length;n++){let o=e[n];n%2&&!i.newlineIsToken?t[t.length-1]+=o:t.push(o)}return t}var un={includeIndex:!0,includeUnderline:!0,includeFileHeaders:!0};function le(a,i,t,e,n,o,r){let d;r?typeof r=="function"?d={callback:r}:d=r:d={},typeof d.context>"u"&&(d.context=4);let c=d.context;if(d.newlineIsToken)throw new Error("newlineIsToken may not be used with patch-generation functions, only with diffing functions");if(d.callback){let{callback:b}=d;se(t,e,Object.assign(Object.assign({},d),{callback:T=>{let B=f(T);b(B)}}))}else return f(se(t,e,d));function f(b){if(!b)return;b.push({value:"",lines:[]});function T(g){return g.map(function(v){return" "+v})}let B=[],M=0,F=0,A=[],Z=1,et=1;for(let g=0;g<b.length;g++){let v=b[g],P=v.lines||Kn(v.value);if(v.lines=P,v.added||v.removed){if(!M){let S=b[g-1];M=Z,F=et,S&&(A=c>0?T(S.lines.slice(-c)):[],M-=A.length,F-=A.length)}for(let S of P)A.push((v.added?"+":"-")+S);v.added?et+=P.length:Z+=P.length}else{if(M)if(P.length<=c*2&&g<b.length-2)for(let S of T(P))A.push(S);else{let S=Math.min(P.length,c);for(let Ct of T(P.slice(0,S)))A.push(Ct);let ft={oldStart:M,oldLines:Z-M+S,newStart:F,newLines:et-F+S,lines:A};B.push(ft),M=0,F=0,A=[]}Z+=P.length,et+=P.length}}for(let g of B)for(let v=0;v<g.lines.length;v++)g.lines[v].endsWith(`
`)?g.lines[v]=g.lines[v].slice(0,-1):(g.lines.splice(v+1,0,"\\ No newline at end of file"),v++);return{oldFileName:a,newFileName:i,oldHeader:n,newHeader:o,hunks:B}}}function Ht(a,i){if(i||(i=un),Array.isArray(a)){if(a.length>1&&!i.includeFileHeaders)throw new Error("Cannot omit file headers on a multi-file patch. (The result would be unparseable; how would a tool trying to apply the patch know which changes are to which file?)");return a.map(e=>Ht(e,i)).join(`
`)}let t=[];i.includeIndex&&a.oldFileName==a.newFileName&&t.push("Index: "+a.oldFileName),i.includeUnderline&&t.push("==================================================================="),i.includeFileHeaders&&(t.push("--- "+a.oldFileName+(typeof a.oldHeader>"u"?"":"	"+a.oldHeader)),t.push("+++ "+a.newFileName+(typeof a.newHeader>"u"?"":"	"+a.newHeader)));for(let e=0;e<a.hunks.length;e++){let n=a.hunks[e];n.oldLines===0&&(n.oldStart-=1),n.newLines===0&&(n.newStart-=1),t.push("@@ -"+n.oldStart+","+n.oldLines+" +"+n.newStart+","+n.newLines+" @@");for(let o of n.lines)t.push(o)}return t.join(`
`)+`
`}function de(a,i,t,e,n,o,r){if(typeof r=="function"&&(r={callback:r}),r?.callback){let{callback:d}=r;le(a,i,t,e,n,o,Object.assign(Object.assign({},r),{callback:c=>{d(c?Ht(c,r.headerOptions):void 0)}}))}else{let d=le(a,i,t,e,n,o,r);return d?Ht(d,r?.headerOptions):void 0}}function Kn(a){let i=a.endsWith(`
`),t=a.split(`
`).map(e=>e+`
`);return i?t.pop():t.push(t.pop().slice(0,-1)),t}var gt=class a{compute(i,t){let e=new Set([...Object.keys(i.files),...Object.keys(t.files)]),n={};for(let o of e){let r=i.files[o]??"",d=t.files[o]??"",c;o in i.files?o in t.files?r===d?c="unchanged":c="modified":c="removed":c="added";let f=c==="modified"||c==="added"||c==="removed"?de(o,o,r,d,void 0,void 0,{context:3}):"";n[o]={status:c,patch:f,fromContent:r,toContent:d}}return n}parseDepsChange(i,t){let e=b=>{try{return JSON.parse(b.files["package.json"]??"{}")}catch{return{}}},n=e(i),o=e(t),r=nt(nt({},n.dependencies),n.devDependencies),d=nt(nt({},o.dependencies),o.devDependencies),c=new Set([...Object.keys(r),...Object.keys(d)]),f=[];for(let b of c){let T=r[b]??null,B=d[b]??null;T!==B&&f.push({name:b,fromVersion:T,toVersion:B})}return f.sort((b,T)=>b.name.localeCompare(T.name))}static \u0275fac=function(t){return new(t||a)};static \u0275prov=ke({token:a,factory:a.\u0275fac,providedIn:"root"})};var Yn=["button"],Xn=["*"];function Jn(a,i){if(a&1&&(l(0,"div",2),j(1,"mat-pseudo-checkbox",6),m()),a&2){let t=h();s(),_("disabled",t.disabled)}}var ta=new U("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),ea=new U("MatButtonToggleGroup");var ce=class{source;value;constructor(i,t){this.source=i,this.value=t}};var na=(()=>{class a{_changeDetectorRef=u(ct);_elementRef=u(K);_focusMonitor=u(Xt);_idGenerator=u(Bt);_animationDisabled=mt();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(t){this._tabIndex.set(t)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=t}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new E;constructor(){u(Lt).load(At);let t=u(ea,{optional:!0}),e=u(new Kt("tabindex"),{optional:!0})||"",n=u(ta,{optional:!0});this._tabIndex=k(parseInt(e)||0),this.buttonToggleGroup=t,this._appearance=n&&n.appearance?n.appearance:"standard",this._disabledInteractive=n?.disabledInteractive??!1}ngOnInit(){let t=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){if(this.disabled)return;let t=this.isSingleSelector()?!0:!this._checked;if(t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let e=this.buttonToggleGroup._buttonToggles.find(n=>n.tabIndex===0);e&&(e.tabIndex=-1),this.tabIndex=0}this.change.emit(new ce(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=R({type:a,selectors:[["mat-button-toggle"]],viewQuery:function(e,n){if(e&1&&rt(Yn,5),e&2){let o;w(o=I())&&(n._buttonElement=o.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(e,n){e&1&&C("focus",function(){return n.focus()}),e&2&&(z("aria-label",null)("aria-labelledby",null)("id",n.id)("name",null),L("mat-button-toggle-standalone",!n.buttonToggleGroup)("mat-button-toggle-checked",n.checked)("mat-button-toggle-disabled",n.disabled)("mat-button-toggle-disabled-interactive",n.disabledInteractive)("mat-button-toggle-appearance-standard",n.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",D],appearance:"appearance",checked:[2,"checked","checked",D],disabled:[2,"disabled","disabled",D],disabledInteractive:[2,"disabledInteractive","disabledInteractive",D]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:Xn,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(e,n){if(e&1&&(st(),l(0,"button",1,0),C("click",function(){return n._onButtonClick()}),y(2,Jn,2,1,"div",2),l(3,"span",3),lt(4),m()(),j(5,"span",4)(6,"span",5)),e&2){let o=X(1);_("id",n.buttonId)("disabled",n.disabled&&!n.disabledInteractive||null),z("role",n.isSingleSelector()?"radio":"button")("tabindex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("aria-pressed",n.isSingleSelector()?null:n.checked)("aria-checked",n.isSingleSelector()?n.checked:null)("name",n._getButtonName())("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),s(2),x(n.buttonToggleGroup&&(!n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideSingleSelectionIndicator||n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),s(4),_("matRippleTrigger",o)("matRippleDisabled",n.disableRipple||n.disabled)}},dependencies:[xt,Qe],styles:[`.mat-button-toggle-standalone,
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
`],encapsulation:2,changeDetection:0})}return a})(),pn=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=St({type:a});static \u0275inj=wt({imports:[Ue,na,Ft]})}return a})();var fn=a=>({nodes:a}),ia=(a,i)=>i.path;function oa(a,i){a&1&&Ut(0)}function ra(a,i){if(a&1&&(l(0,"mat-icon",9),p(1),m()),a&2){let t=h().$implicit;s(),Q(" ",t.expanded?"folder_open":"folder"," ")}}function sa(a,i){a&1&&(l(0,"mat-icon",10),p(1,"description"),m())}function la(a,i){if(a&1&&(l(0,"mat-icon",12),p(1),m()),a&2){let t=h().$implicit,e=h(2);_("matTooltip",t.status),s(),Q(" ",e.statusIcon(t.status)," ")}}function da(a,i){a&1&&Ut(0)}function ca(a,i){if(a&1&&it(0,da,1,0,"ng-container",5),a&2){let t=h().$implicit;h(2);let e=X(8);_("ngTemplateOutlet",e)("ngTemplateOutletContext",Zt(2,fn,t.children))}}function ma(a,i){if(a&1){let t=ot();l(0,"div",7)(1,"div",8),C("click",function(){let n=$(t).$implicit,o=h(2);return q(n.isDir?o.toggleDir(n):o.selectFile(n))}),y(2,ra,2,1,"mat-icon",9)(3,sa,2,0,"mat-icon",10),l(4,"span",11),p(5),m(),y(6,la,2,2,"mat-icon",12),m(),y(7,ca,1,4,"ng-container"),m()}if(a&2){let t=i.$implicit,e=h(2);L("selected",t.path===e.selectedFile),s(),H("status-"+e.statusClass(t.status)),Et("padding-left",t.path.split("/").length*12,"px"),s(),x(t.isDir?2:3),s(3),O(t.name),s(),x(t.status&&t.status!=="unchanged"?6:-1),s(),x(t.isDir&&t.expanded&&t.children.length?7:-1)}}function ba(a,i){if(a&1&&N(0,ma,8,10,"div",6,ia),a&2){let t=i.nodes;V(t)}}var zt=class a{set diffResult(i){this._diffResult=i,this.buildTree()}selectedFile=null;fileSelected=new E;changedOnly=k(!1);_diffResult={};tree=k([]);filteredTree=J(()=>this.changedOnly()?this.filterChanged(this.tree()):this.tree());buildTree(){let i=[];for(let[t,e]of Object.entries(this._diffResult)){let n=t.split("/"),o=i,r="";for(let d=0;d<n.length;d++){let c=n[d];r=r?`${r}/${c}`:c;let f=d===n.length-1,b=o.find(T=>T.name===c);b||(b={name:c,path:r,isDir:!f,status:f?e.status:null,children:[],expanded:!0},o.push(b)),f||(o=b.children,e.status!=="unchanged"&&(!b.status||b.status==="unchanged")&&(b.status=e.status))}}this.sortTree(i),this.tree.set(i)}sortTree(i){i.sort((t,e)=>t.isDir!==e.isDir?t.isDir?-1:1:t.name.localeCompare(e.name));for(let t of i)t.children.length&&this.sortTree(t.children)}filterChanged(i){return i.filter(t=>t.status!=="unchanged").map(t=>ue(nt({},t),{children:this.filterChanged(t.children)}))}toggleDir(i){i.expanded=!i.expanded,this.tree.set([...this.tree()])}selectFile(i){i.isDir||this.fileSelected.emit(i.path)}statusIcon(i){switch(i){case"added":return"add_circle";case"removed":return"remove_circle";case"modified":return"edit";default:return""}}statusClass(i){return i??"unchanged"}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=R({type:a,selectors:[["app-file-tree"]],inputs:{diffResult:"diffResult",selectedFile:"selectedFile"},outputs:{fileSelected:"fileSelected"},decls:9,vars:6,consts:[["nodeList",""],[1,"tree-header"],[1,"tree-title"],["matTooltip","Show changed files only",1,"changed-toggle",3,"click"],[1,"tree-container"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"tree-node",3,"selected"],[1,"tree-node"],[1,"node-row",3,"click"],[1,"node-icon","dir-icon"],[1,"node-icon","file-icon"],[1,"node-name"],[1,"status-icon",3,"matTooltip"]],template:function(t,e){if(t&1&&(l(0,"div",1)(1,"span",2),p(2,"Files"),m(),l(3,"button",3),C("click",function(){return e.changedOnly.set(!e.changedOnly())}),p(4," Changed only "),m()(),l(5,"div",4),it(6,oa,1,0,"ng-container",5),m(),it(7,ba,2,0,"ng-template",null,0,Se)),t&2){let n=X(8);s(3),L("active",e.changedOnly()),s(3),_("ngTemplateOutlet",n)("ngTemplateOutletContext",Zt(4,fn,e.filteredTree()))}},dependencies:[tt,Ee,ut,bt,pn,Vt,Nt],styles:[".tree-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border-bottom:1px solid #21262d;font-size:.75rem;text-transform:uppercase;letter-spacing:.08em;color:#ffffff80}.changed-toggle[_ngcontent-%COMP%]{background:none;border:1px solid #30363d;border-radius:4px;color:#ffffff80;padding:2px 8px;font-size:.7rem;cursor:pointer;text-transform:none;letter-spacing:0;transition:border-color .15s,color .15s}.changed-toggle.active[_ngcontent-%COMP%]{border-color:#58a6ff;color:#58a6ff}.tree-container[_ngcontent-%COMP%]{padding:4px 0}.node-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;height:28px;padding-right:8px;cursor:pointer;border-radius:4px;margin:1px 4px;font-size:.8rem;color:#ffffffbf;transition:background .1s}.node-row[_ngcontent-%COMP%]:hover{background:#ffffff0d}.tree-node.selected[_ngcontent-%COMP%] > .node-row[_ngcontent-%COMP%]{background:#388bfd26;color:#58a6ff}.node-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;flex-shrink:0;color:#fff6}.node-name[_ngcontent-%COMP%]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.status-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px;flex-shrink:0}.status-added[_ngcontent-%COMP%], .status-added[_ngcontent-%COMP%]   .node-icon[_ngcontent-%COMP%], .status-added[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%]{color:#3fb950}.status-removed[_ngcontent-%COMP%], .status-removed[_ngcontent-%COMP%]   .node-icon[_ngcontent-%COMP%], .status-removed[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%]{color:#f85149}.status-modified[_ngcontent-%COMP%], .status-modified[_ngcontent-%COMP%]   .node-icon[_ngcontent-%COMP%], .status-modified[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%]{color:#d29922}"]})};function ua(a,i){a&1&&(l(0,"div",0)(1,"mat-icon"),p(2,"diff"),m(),l(3,"p"),p(4,"Select a file to view its diff"),m()())}function pa(a,i){a&1&&p(0," + ")}function ga(a,i){a&1&&p(0," - ")}function fa(a,i){a&1&&p(0," @@ ")}function ha(a,i){if(a&1&&(l(0,"tr")(1,"td",7),y(2,pa,1,0)(3,ga,1,0)(4,fa,1,0),m(),l(5,"td",8)(6,"pre"),p(7),m()()()),a&2){let t=i.$implicit;H("line-"+t.type),s(2),x(t.type==="added"?2:t.type==="removed"?3:t.type==="hunk"?4:-1),s(5),O(t.content)}}function _a(a,i){if(a&1&&(l(0,"div",1)(1,"span",2),p(2),m(),l(3,"span",3),p(4),m()(),l(5,"div",4)(6,"table",5)(7,"tbody"),N(8,ha,8,4,"tr",6,Pe),m()()()),a&2){let t=h();s(2),O(t._file()),s(),H("badge-"+t.entry().status),s(),Q(" ",t.entry().status," "),s(4),V(t.lines())}}var Gt=class a{set file(i){this._file.set(i)}set diffResult(i){this._diffResult.set(i)}_file=k(null);_diffResult=k({});entry=J(()=>{let i=this._file(),t=this._diffResult();return i?t[i]??null:null});lines=J(()=>{let i=this.entry();return i?i.status==="unchanged"?i.fromContent.split(`
`).map(t=>({type:"context",content:t})):this.parsePatch(i.patch):[]});parsePatch(i){let t=[];for(let e of i.split(`
`))e.startsWith("+++")||e.startsWith("---")||e.startsWith("\\")||(e.startsWith("@@")?t.push({type:"hunk",content:e}):e.startsWith("+")?t.push({type:"added",content:e.slice(1)}):e.startsWith("-")?t.push({type:"removed",content:e.slice(1)}):t.push({type:"context",content:e.slice(1)}));return t}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=R({type:a,selectors:[["app-file-diff"]],inputs:{file:"file",diffResult:"diffResult"},decls:2,vars:1,consts:[[1,"empty-state"],[1,"diff-header"],[1,"file-path"],[1,"status-badge"],[1,"diff-content"],[1,"diff-table"],[3,"class"],[1,"line-gutter"],[1,"line-content"]],template:function(t,e){t&1&&y(0,ua,5,0,"div",0)(1,_a,10,4),t&2&&x(e.entry()?1:0)},dependencies:[tt,ut,bt],styles:[".empty-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:#ffffff40}.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:8px 0 0;font-size:.9rem}.diff-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:8px 16px;border-bottom:1px solid #21262d;background:#161b22;font-family:Roboto Mono,monospace;font-size:.8rem;color:#ffffffb3;position:sticky;top:0;z-index:1}.status-badge[_ngcontent-%COMP%]{padding:1px 8px;border-radius:10px;font-size:.7rem;font-family:sans-serif}.status-badge.badge-added[_ngcontent-%COMP%]{background:#3fb95033;color:#3fb950}.status-badge.badge-removed[_ngcontent-%COMP%]{background:#f8514933;color:#f85149}.status-badge.badge-modified[_ngcontent-%COMP%]{background:#d2992233;color:#d29922}.status-badge.badge-unchanged[_ngcontent-%COMP%]{background:#ffffff1a;color:#fff6}.diff-content[_ngcontent-%COMP%]{overflow-x:auto}.diff-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;font-family:Roboto Mono,Fira Code,monospace;font-size:.78rem}tr.line-added[_ngcontent-%COMP%]{background:#3fb9501a}tr.line-removed[_ngcontent-%COMP%]{background:#f851491a}tr.line-hunk[_ngcontent-%COMP%]{background:#388bfd14}.line-gutter[_ngcontent-%COMP%]{width:32px;padding:0 8px;text-align:center;-webkit-user-select:none;user-select:none;color:#ffffff4d;border-right:1px solid #21262d;font-size:.7rem}.line-added[_ngcontent-%COMP%]   .line-gutter[_ngcontent-%COMP%]{color:#3fb950}.line-removed[_ngcontent-%COMP%]   .line-gutter[_ngcontent-%COMP%]{color:#f85149}.line-hunk[_ngcontent-%COMP%]   .line-gutter[_ngcontent-%COMP%]{color:#388bfd}.line-content[_ngcontent-%COMP%]{padding:0 12px}.line-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:0;white-space:pre;color:#e6edf3}.line-added[_ngcontent-%COMP%]   .line-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{color:#aff5b4}.line-removed[_ngcontent-%COMP%]   .line-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{color:#ffdcd7}.line-hunk[_ngcontent-%COMP%]   .line-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{color:#79c0ff}"]})};var va=(a,i)=>i.name;function ya(a,i){a&1&&(G(0,"div",0),p(1,"No dependency changes"),W())}function xa(a,i){if(a&1&&(G(0,"tr")(1,"td",3),p(2),W(),G(3,"td",4),p(4),W(),G(5,"td",4),p(6),W(),G(7,"td",5)(8,"span"),p(9),W()()()),a&2){let t=i.$implicit,e=h(2);H("type-"+e.changeType(t)),s(2),O(t.name),s(2),O(t.fromVersion??"\u2014"),s(2),O(t.toVersion??"\u2014"),s(2),H("badge badge-"+e.changeType(t)),s(),O(e.changeType(t))}}function Ca(a,i){if(a&1&&(G(0,"table",1)(1,"thead")(2,"tr")(3,"th"),p(4,"Package"),W(),G(5,"th"),p(6,"Before"),W(),G(7,"th"),p(8,"After"),W(),G(9,"th"),p(10,"Change"),W()()(),G(11,"tbody"),N(12,xa,10,8,"tr",2,va),W()()),a&2){let t=h();s(12),V(t.changes)}}var Wt=class a{diffService=u(gt);set from(i){this._from=i,this.recompute()}set to(i){this._to=i,this.recompute()}_from;_to;changes=[];recompute(){this._from&&this._to&&(this.changes=this.diffService.parseDepsChange(this._from,this._to))}changeType(i){return i.fromVersion?i.toVersion?"changed":"removed":"added"}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=R({type:a,selectors:[["app-deps-tab"]],inputs:{from:"from",to:"to"},decls:2,vars:1,consts:[[1,"empty"],[1,"deps-table"],[3,"class"],[1,"pkg-name"],[1,"version"],[1,"type-badge"]],template:function(t,e){t&1&&y(0,ya,2,0,"div",0)(1,Ca,14,0,"table",1),t&2&&x(e.changes.length===0?0:1)},dependencies:[tt],styles:[".empty[_ngcontent-%COMP%]{padding:32px 16px;color:#fff6;text-align:center}.deps-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;font-size:.85rem}.deps-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left;padding:8px 12px;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#fff6;border-bottom:1px solid #21262d}.deps-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:6px 12px;border-bottom:1px solid #161b22;vertical-align:middle}.pkg-name[_ngcontent-%COMP%]{font-family:Roboto Mono,monospace;font-size:.8rem}.version[_ngcontent-%COMP%]{font-family:Roboto Mono,monospace;font-size:.78rem;color:#ffffff8c}.badge[_ngcontent-%COMP%]{padding:2px 8px;border-radius:10px;font-size:.7rem}.badge.badge-added[_ngcontent-%COMP%]{background:#3fb95033;color:#3fb950}.badge.badge-removed[_ngcontent-%COMP%]{background:#f8514933;color:#f85149}.badge.badge-changed[_ngcontent-%COMP%]{background:#d2992233;color:#d29922}"]})};var hn=(a,i)=>i.angularMajor;function ka(a,i){if(a&1&&(l(0,"mat-option",5),p(1),m()),a&2){let t=i.$implicit;_("value",t.angularMajor),s(),Q("Angular ",t.angularMajor)}}function Ta(a,i){if(a&1&&(l(0,"mat-option",5),p(1),m()),a&2){let t=i.$implicit;_("value",t.angularMajor),s(),Q("Angular ",t.angularMajor)}}function Ma(a,i){if(a&1&&(l(0,"div",10)(1,"span",15),p(2),m(),l(3,"span",16),p(4),m(),l(5,"span",17),p(6),m()()),a&2){let t=h();s(2),Q("+",t.summary().added," added"),s(2),Q("\u2212",t.summary().removed," removed"),s(2),Q("~",t.summary().modified," modified")}}function wa(a,i){if(a&1&&(l(0,"div",11),j(1,"app-version-meta-card",18)(2,"app-version-meta-card",19),m()),a&2){let t=h();s(),_("snapshot",t.fromSnapshot()),s(),_("snapshot",t.toSnapshot())}}function Ia(a,i){a&1&&(l(0,"div",12),j(1,"mat-spinner",20),l(2,"span"),p(3,"Loading snapshots\u2026"),m()())}function Da(a,i){if(a&1&&(l(0,"div",13),p(1),m()),a&2){let t=h();s(),O(t.error())}}function Pa(a,i){if(a&1&&j(0,"app-deps-tab",28),a&2){let t=h(2);_("from",t.fromSnapshot())("to",t.toSnapshot())}}function Sa(a,i){if(a&1){let t=ot();l(0,"mat-tab-group",14)(1,"mat-tab",21)(2,"div",22)(3,"div",23)(4,"app-file-tree",24),C("fileSelected",function(n){$(t);let o=h();return q(o.onFileSelect(n))}),m()(),l(5,"div",25),j(6,"app-file-diff",26),m()()(),l(7,"mat-tab",27),y(8,Pa,1,2,"app-deps-tab",28),m()()}if(a&2){let t=h();s(4),_("diffResult",t.diffResult())("selectedFile",t.selectedFile()),s(2),_("file",t.selectedFile())("diffResult",t.diffResult()),s(2),x(t.fromSnapshot()&&t.toSnapshot()?8:-1)}}var _n=class a{route=u(Re);router=u(Le);dataService=u(nn);diffService=u(gt);versions=k([]);fromMajor=k(null);toMajor=k(null);selectedFile=k(null);fromSnapshot=k(null);toSnapshot=k(null);diffResult=k(null);loading=k(!1);error=k(null);summary=J(()=>{let i=this.diffResult();if(!i)return null;let t=Object.values(i);return{added:t.filter(e=>e.status==="added").length,removed:t.filter(e=>e.status==="removed").length,modified:t.filter(e=>e.status==="modified").length}});ngOnInit(){this.dataService.getVersions().subscribe({next:i=>{this.versions.set(i);let t=this.route.snapshot.params,e=t.from?Number(t.from):null,n=t.to?Number(t.to):null,o=t.file?decodeURIComponent(t.file):null;if(e&&n)this.fromMajor.set(e),this.toMajor.set(n),this.selectedFile.set(o),this.loadDiff(e,n);else if(i.length>=2){let r=i[i.length-1].angularMajor,d=i[i.length-2].angularMajor;this.router.navigate(["/diff",d,r],{replaceUrl:!0})}},error:()=>this.error.set("Failed to load version list.")})}onFromChange(i){this.fromMajor.set(i),this.navigate(i,this.toMajor())}onToChange(i){this.toMajor.set(i),this.navigate(this.fromMajor(),i)}onFileSelect(i){this.selectedFile.set(i);let t=this.fromMajor(),e=this.toMajor();this.router.navigate(["/diff",t,e,encodeURIComponent(i)])}jumpToLatest(){let i=this.versions();if(i.length<2)return;let t=i[i.length-1].angularMajor,e=i[i.length-2].angularMajor;this.navigate(e,t)}copyShareUrl(){navigator.clipboard.writeText(window.location.href)}navigate(i,t){this.selectedFile.set(null),this.router.navigate(["/diff",i,t]),this.loadDiff(i,t)}loadDiff(i,t){this.loading.set(!0),this.diffResult.set(null),this.fromSnapshot.set(null),this.toSnapshot.set(null),this.error.set(null),he({from:this.dataService.getSnapshot(i),to:this.dataService.getSnapshot(t)}).subscribe({next:({from:e,to:n})=>{this.fromSnapshot.set(e),this.toSnapshot.set(n),this.diffResult.set(this.diffService.compute(e,n)),this.loading.set(!1)},error:()=>{this.error.set("Failed to load snapshots."),this.loading.set(!1)}})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=R({type:a,selectors:[["app-diff-view"]],decls:30,vars:7,consts:[[1,"diff-view"],[1,"controls-bar"],[1,"version-selectors"],["appearance","outline",1,"version-select"],[3,"valueChange","value"],[3,"value"],[1,"arrow-icon"],[1,"controls-actions"],["mat-stroked-button","","matTooltip","Jump to latest versions",3,"click"],["mat-icon-button","","matTooltip","Copy shareable URL",3,"click"],[1,"summary-bar"],[1,"meta-cards"],[1,"loading-state"],[1,"error-state"],["animationDuration","0",1,"diff-tabs"],[1,"summary-added"],[1,"summary-removed"],[1,"summary-modified"],["label","From",3,"snapshot"],["label","To",3,"snapshot"],["diameter","40"],["label","Files"],[1,"diff-body"],[1,"file-tree-panel"],[3,"fileSelected","diffResult","selectedFile"],[1,"file-diff-panel"],[3,"file","diffResult"],["label","Dependencies"],[3,"from","to"]],template:function(t,e){t&1&&(l(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-form-field",3)(4,"mat-label"),p(5,"From"),m(),l(6,"mat-select",4),C("valueChange",function(o){return e.onFromChange(o)}),N(7,ka,2,2,"mat-option",5,hn),m()(),l(9,"mat-icon",6),p(10,"arrow_forward"),m(),l(11,"mat-form-field",3)(12,"mat-label"),p(13,"To"),m(),l(14,"mat-select",4),C("valueChange",function(o){return e.onToChange(o)}),N(15,Ta,2,2,"mat-option",5,hn),m()()(),l(17,"div",7)(18,"button",8),C("click",function(){return e.jumpToLatest()}),l(19,"mat-icon"),p(20,"fast_forward"),m(),p(21," Latest "),m(),l(22,"button",9),C("click",function(){return e.copyShareUrl()}),l(23,"mat-icon"),p(24,"share"),m()()()(),y(25,Ma,7,3,"div",10),y(26,wa,3,2,"div",11),y(27,Ia,4,0,"div",12),y(28,Da,2,1,"div",13),y(29,Sa,9,5,"mat-tab-group",14),m()),t&2&&(s(6),_("value",e.fromMajor()),s(),V(e.versions()),s(7),_("value",e.toMajor()),s(),V(e.versions()),s(10),x(e.summary()?25:-1),s(),x(e.fromSnapshot()&&e.toSnapshot()?26:-1),s(),x(e.loading()?27:-1),s(),x(e.error()?28:-1),s(),x(e.diffResult()?29:-1))},dependencies:[tt,Ke,We,Ge,Ze,$e,qe,Je,Xe,Ye,ut,bt,bn,oe,mn,Vt,Nt,en,tn,zt,Gt,Wt,an],styles:[".diff-view[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:hidden}.controls-bar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;padding:12px 16px 0;flex-shrink:0;flex-wrap:wrap}.version-selectors[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.version-select[_ngcontent-%COMP%]{width:160px}.arrow-icon[_ngcontent-%COMP%]{color:#fff6;margin-top:-20px}.controls-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;margin-top:-20px}.summary-bar[_ngcontent-%COMP%]{display:flex;gap:16px;padding:4px 16px 8px;font-size:.8rem;flex-shrink:0}.summary-added[_ngcontent-%COMP%]{color:#3fb950}.summary-removed[_ngcontent-%COMP%]{color:#f85149}.summary-modified[_ngcontent-%COMP%]{color:#d29922}.meta-cards[_ngcontent-%COMP%]{display:flex;gap:12px;padding:0 16px 8px;flex-shrink:0;flex-wrap:wrap}.loading-state[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;padding:40px 16px;color:#ffffff80}.error-state[_ngcontent-%COMP%]{padding:16px;color:#f85149}.diff-tabs[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;overflow:hidden}.diff-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body-wrapper{flex:1;overflow:hidden}.diff-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body-content{height:100%;overflow:hidden}.diff-body[_ngcontent-%COMP%]{display:flex;height:100%;overflow:hidden}.file-tree-panel[_ngcontent-%COMP%]{width:280px;min-width:200px;flex-shrink:0;overflow-y:auto;border-right:1px solid #21262d}.file-diff-panel[_ngcontent-%COMP%]{flex:1;overflow:auto}"]})};export{_n as DiffViewComponent};
