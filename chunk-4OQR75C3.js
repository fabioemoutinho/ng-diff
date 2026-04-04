import{a as Mn,b as wn,c as In,e as be,f as fe,g as ge,h as he}from"./chunk-MMUFAVA4.js";import{a as cn,b as fn,c as gn,d as hn,e as _n,f as vn,g as yn,h as xn,i as kn,j as Tn,k as Pn,l as Dn,m as Sn,n as En}from"./chunk-XK5XGJFY.js";import{$ as pe,B as We,D as dn,E as Ie,I as Pe,J as Ge,L as mn,M as un,P as pn,Q as bn,R as pt,c as nn,d as ne,da as De,ea as Qe,fa as Cn,i as an,j as on,l as rn,p as mt,r as ut,s as ln,t as ze,x as sn}from"./chunk-DAWVFQCG.js";import{$a as Xt,$b as tn,A as Gt,Ab as D,Bb as S,Db as st,Eb as U,Gb as C,Ib as b,J as Qt,Jb as ce,K as Re,Kb as me,L as $t,Lb as ue,M as ke,Mb as X,Na as at,Nb as O,Oa as Jt,Ob as L,Qa as l,R as qt,S as Ut,Sb as te,T as Fe,Tb as Ve,Ub as w,V as Y,Va as Ae,Vb as G,Wa as Ne,Wb as m,X as f,Xb as x,Ya as ot,Yb as Q,Zb as re,_b as dt,a as Bt,aa as j,b as At,ba as V,cc as Z,d as ae,db as H,ea as it,eb as je,ec as ct,f as Nt,fb as J,g as Oe,gb as we,hb as oe,i as jt,ia as F,ib as Kt,ic as le,ja as Te,k as Vt,kc as I,lc as He,na as P,ob as en,pb as q,qa as Me,qb as _,ra as Zt,rb as v,sa as Be,sb as rt,t as Ht,tb as lt,u as zt,ua as ee,ub as z,v as Le,va as Yt,vb as W,w as Wt,wb as y,xb as s,yb as d,zb as B}from"./chunk-VJY5EK34.js";var yt=["*"];function Jn(a,i){a&1&&me(0)}var Xn=["tabListContainer"],Kn=["tabList"],ei=["tabListInner"],ti=["nextPaginator"],ni=["previousPaginator"],ii=["content"];function ai(a,i){}var oi=["tabBodyWrapper"],ri=["tabHeader"];function li(a,i){}function si(a,i){if(a&1&&oe(0,li,0,0,"ng-template",12),a&2){let e=b().$implicit;y("cdkPortalOutlet",e.templateLabel)}}function di(a,i){if(a&1&&m(0),a&2){let e=b().$implicit;x(e.textLabel)}}function ci(a,i){if(a&1){let e=U();s(0,"div",7,2),C("click",function(){let n=j(e),o=n.$implicit,r=n.$index,c=b(),u=te(1);return V(c._handleClick(o,u,r))})("cdkFocusChange",function(n){let o=j(e).$index,r=b();return V(r._tabFocusChanged(n,o))}),B(2,"span",8)(3,"div",9),s(4,"span",10)(5,"span",11),_(6,si,1,1,null,12)(7,di,1,1),d()()()}if(a&2){let e=i.$implicit,t=i.$index,n=te(1),o=b();G(e.labelClass),w("mdc-tab--active",o.selectedIndex===t),y("id",o._getTabLabelId(e,t))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),q("tabIndex",o._getTabIndex(t))("aria-posinset",t+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(t))("aria-selected",o.selectedIndex===t)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),l(3),y("matRippleTrigger",n)("matRippleDisabled",e.disabled||o.disableRipple),l(3),v(e.templateLabel?6:7)}}function mi(a,i){a&1&&me(0)}function ui(a,i){if(a&1){let e=U();s(0,"mat-tab-body",13),C("_onCentered",function(){j(e);let n=b();return V(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){j(e);let o=b();return V(o._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){j(e);let o=b();return V(o._bodyCentered(n))}),d()}if(a&2){let e=i.$implicit,t=i.$index,n=b();G(e.bodyClass),y("id",n._getTabContentId(t))("content",e.content)("position",e.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),q("tabindex",n.contentTabIndex!=null&&n.selectedIndex===t?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(e,t))("aria-hidden",n.selectedIndex!==t)}}var pi=new Y("MatTabContent"),bi=(()=>{class a{template=f(Ne);constructor(){}static \u0275fac=function(t){return new(t||a)};static \u0275dir=J({type:a,selectors:[["","matTabContent",""]],features:[re([{provide:pi,useExisting:a}])]})}return a})(),fi=new Y("MatTabLabel"),Fn=new Y("MAT_TAB"),gi=(()=>{class a extends bn{_closestTab=f(Fn,{optional:!0});static \u0275fac=(()=>{let e;return function(n){return(e||(e=Be(a)))(n||a)}})();static \u0275dir=J({type:a,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[re([{provide:fi,useExisting:a}]),we]})}return a})(),Bn=new Y("MAT_TAB_GROUP"),xt=(()=>{class a{_viewContainerRef=f(Xt);_closestTabGroup=f(Bn,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new Oe;position=null;origin=null;isActive=!1;constructor(){f(ze).load(Qe)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new pn(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=H({type:a,selectors:[["mat-tab"]],contentQueries:function(t,n,o){if(t&1&&ue(o,gi,5)(o,bi,7,Ne),t&2){let r;O(r=L())&&(n.templateLabel=r.first),O(r=L())&&(n._explicitContent=r.first)}},viewQuery:function(t,n){if(t&1&&X(Ne,7),t&2){let o;O(o=L())&&(n._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(t,n){t&2&&q("id",null)},inputs:{disabled:[2,"disabled","disabled",I],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[re([{provide:Fn,useExisting:a}]),Zt],ngContentSelectors:yt,decls:1,vars:0,template:function(t,n){t&1&&(ce(),Kt(0,Jn,1,0,"ng-template"))},encapsulation:2})}return a})(),bt="mdc-tab-indicator--active",On="mdc-tab-indicator--no-transition",ft=class{_items;_currentItem;constructor(i){this._items=i}hide(){this._items.forEach(i=>i.deactivateInkBar()),this._currentItem=void 0}alignToElement(i){let e=this._items.find(n=>n.elementRef.nativeElement===i),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let n=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(n),this._currentItem=e}}},hi=(()=>{class a{_elementRef=f(ee);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(bt);return}let n=t.getBoundingClientRect(),o=e.width/n.width,r=e.left-n.left;t.classList.add(On),this._inkBarContentElement.style.setProperty("transform",`translateX(${r}px) scaleX(${o})`),t.getBoundingClientRect(),t.classList.remove(On),t.classList.add(bt),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(bt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),n=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||a)};static \u0275dir=J({type:a,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",I]}})}return a})();var An=(()=>{class a extends hi{elementRef=f(ee);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Be(a)))(n||a)}})();static \u0275dir=J({type:a,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,n){t&2&&(q("aria-disabled",!!n.disabled),w("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",I]},features:[we]})}return a})(),Ln={passive:!0},_i=650,vi=100,yi=(()=>{class a{_elementRef=f(ee);_changeDetectorRef=f(le);_viewportRuler=f(un);_dir=f(Pe,{optional:!0});_ngZone=f(Te);_platform=f(mt);_sharedResizeObserver=f(gn);_injector=f(it);_renderer=f(ot);_animationsDisabled=pe();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new Oe;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new Oe;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new F;indexFocused=new F;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),Ln),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),Ln))}ngAfterContentInit(){let e=this._dir?this._dir.change:Vt("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Gt(32),ke(this._destroyed)),n=this._viewportRuler.change(150).pipe(ke(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new dn(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Ae(o,{injector:this._injector}),Le(e,n,t,this._items.changes,this._itemsResized()).pipe(ke(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(r=>{this.indexFocused.emit(r),this._setTabFocus(r)})}_itemsResized(){return typeof ResizeObserver!="function"?jt:this._items.changes.pipe(Re(this._items),$t(e=>new Nt(t=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(o=>t.next(o));return e.forEach(o=>n.observe(o.elementRef.nativeElement)),()=>{n.disconnect()}}))),Qt(1),Wt(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!We(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,n=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:r}=t.elementRef.nativeElement,c,u;this._getLayoutDirection()=="ltr"?(c=o,u=c+r):(u=this._tabListInner.nativeElement.offsetWidth-o,c=u-r);let p=this.scrollDistance,g=this.scrollDistance+n;c<p?this.scrollDistance-=p-c:u>g&&(this.scrollDistance+=Math.min(u-g,c-p))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,n=e-t>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),zt(_i,vi).pipe(ke(Le(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:o}=this._scrollHeader(e);(o===0||o>=n)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||a)};static \u0275dir=J({type:a,inputs:{disablePagination:[2,"disablePagination","disablePagination",I],selectedIndex:[2,"selectedIndex","selectedIndex",He]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return a})(),xi=(()=>{class a extends yi{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new ft(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Be(a)))(n||a)}})();static \u0275cmp=H({type:a,selectors:[["mat-tab-header"]],contentQueries:function(t,n,o){if(t&1&&ue(o,An,4),t&2){let r;O(r=L())&&(n._items=r)}},viewQuery:function(t,n){if(t&1&&X(Xn,7)(Kn,7)(ei,7)(ti,5)(ni,5),t&2){let o;O(o=L())&&(n._tabListContainer=o.first),O(o=L())&&(n._tabList=o.first),O(o=L())&&(n._tabListInner=o.first),O(o=L())&&(n._nextPaginator=o.first),O(o=L())&&(n._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(t,n){t&2&&w("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",I]},features:[we],ngContentSelectors:yt,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,n){t&1&&(ce(),s(0,"div",5,0),C("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(r){return n._handlePaginatorPress("before",r)})("touchend",function(){return n._stopInterval()}),B(2,"div",6),d(),s(3,"div",7,1),C("keydown",function(r){return n._handleKeydown(r)}),s(5,"div",8,2),C("cdkObserveContent",function(){return n._onContentChanges()}),s(7,"div",9,3),me(9),d()()(),s(10,"div",10,4),C("mousedown",function(r){return n._handlePaginatorPress("after",r)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),B(12,"div",6),d()),t&2&&(w("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),y("matRippleDisabled",n._disableScrollBefore||n.disableRipple),l(3),w("_mat-animation-noopable",n._animationsDisabled),l(2),q("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),l(5),w("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),y("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[De,sn],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return a})(),Ci=new Y("MAT_TABS_CONFIG"),Rn=(()=>{class a extends pt{_host=f(gt);_ngZone=f(Te);_centeringSub=ae.EMPTY;_leavingSub=ae.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Re(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(t){return new(t||a)};static \u0275dir=J({type:a,selectors:[["","matTabBodyHost",""]],features:[we]})}return a})(),gt=(()=>{class a{_elementRef=f(ee);_dir=f(Pe,{optional:!0});_ngZone=f(Te);_injector=f(it);_renderer=f(ot);_diAnimationsDisabled=pe();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=ae.EMPTY;_position;_previousPosition;_onCentering=new F;_beforeCentering=new F;_afterLeavingCenter=new F;_onCentered=new F(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=f(le);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Ae(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Ae(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=H({type:a,selectors:[["mat-tab-body"]],viewQuery:function(t,n){if(t&1&&X(Rn,5)(ii,5),t&2){let o;O(o=L())&&(n._portalHost=o.first),O(o=L())&&(n._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(t,n){t&2&&q("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(t,n){t&1&&(s(0,"div",1,0),oe(2,ai,0,0,"ng-template",2),d()),t&2&&w("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[Rn,mn],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return a})(),Nn=(()=>{class a{_elementRef=f(ee);_changeDetectorRef=f(le);_ngZone=f(Te);_tabsSubscription=ae.EMPTY;_tabLabelSubscription=ae.EMPTY;_tabBodySubscription=ae.EMPTY;_diAnimationsDisabled=pe();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Yt;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let t=e+"";this._animationDuration=/^\d+$/.test(t)?e+"ms":t}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new F;focusChange=new F;animationDone=new F;selectedTabChange=new F(!0);_groupId;_isServer=!f(mt).isBrowser;constructor(){let e=f(Ci,{optional:!0});this._groupId=f(Ie).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,o)=>n.isActive=o===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,n)=>{t.position=n-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),n;for(let o=0;o<t.length;o++)if(t[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,n=t[o];break}!n&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Re(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new ht;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Le(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,n){t.focusIndex=n,e.disabled||(this.selectedIndex=n)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,n)=>t._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=H({type:a,selectors:[["mat-tab-group"]],contentQueries:function(t,n,o){if(t&1&&ue(o,xt,5),t&2){let r;O(r=L())&&(n._allTabs=r)}},viewQuery:function(t,n){if(t&1&&X(oi,5)(ri,5)(gt,5),t&2){let o;O(o=L())&&(n._tabBodyWrapper=o.first),O(o=L())&&(n._tabHeader=o.first),O(o=L())&&(n._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(t,n){t&2&&(q("mat-align-tabs",n.alignTabs),G("mat-"+(n.color||"primary")),Ve("--mat-tab-animation-duration",n.animationDuration),w("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",I],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",I],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",I],selectedIndex:[2,"selectedIndex","selectedIndex",He],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",He],disablePagination:[2,"disablePagination","disablePagination",I],disableRipple:[2,"disableRipple","disableRipple",I],preserveContent:[2,"preserveContent","preserveContent",I],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[re([{provide:Bn,useExisting:a}])],ngContentSelectors:yt,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(t,n){t&1&&(ce(),s(0,"mat-tab-header",3,0),C("indexFocused",function(r){return n._focusChanged(r)})("selectFocusedIndex",function(r){return n.selectedIndex=r}),z(2,ci,8,17,"div",4,lt),d(),_(4,mi,1,0),s(5,"div",5,1),z(7,ui,1,10,"mat-tab-body",6,lt),d()),t&2&&(y("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),en("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),l(2),W(n._tabs),l(2),v(n._isServer?4:-1),l(),w("_mat-animation-noopable",n._animationsDisabled()),l(2),W(n._tabs))},dependencies:[xi,An,ln,De,pt,gt],styles:[`.mdc-tab {
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
`],encapsulation:2})}return a})(),ht=class{index;tab};var jn=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=je({type:a});static \u0275inj=Fe({imports:[Ge]})}return a})();var se=class{diff(i,e,t={}){let n;typeof t=="function"?(n=t,t={}):"callback"in t&&(n=t.callback);let o=this.castInput(i,t),r=this.castInput(e,t),c=this.removeEmpty(this.tokenize(o,t)),u=this.removeEmpty(this.tokenize(r,t));return this.diffWithOptionsObj(c,u,t,n)}diffWithOptionsObj(i,e,t,n){var o;let r=h=>{if(h=this.postProcess(h,t),n){setTimeout(function(){n(h)},0);return}else return h},c=e.length,u=i.length,p=1,g=c+u;t.maxEditLength!=null&&(g=Math.min(g,t.maxEditLength));let E=(o=t.timeout)!==null&&o!==void 0?o:1/0,M=Date.now()+E,T=[{oldPos:-1,lastComponent:void 0}],R=this.extractCommon(T[0],e,i,0,t);if(T[0].oldPos+1>=u&&R+1>=c)return r(this.buildValues(T[0].lastComponent,e,i));let $=-1/0,K=1/0,ie=()=>{for(let h=Math.max($,-p);h<=Math.min(K,p);h+=2){let k,A=T[h-1],N=T[h+1];A&&(T[h-1]=void 0);let Ce=!1;if(N){let Ft=N.oldPos-h;Ce=N&&0<=Ft&&Ft<c}let Ee=A&&A.oldPos+1<u;if(!Ce&&!Ee){T[h]=void 0;continue}if(!Ee||Ce&&A.oldPos<N.oldPos?k=this.addToPath(N,!0,!1,0,t):k=this.addToPath(A,!1,!0,1,t),R=this.extractCommon(k,e,i,h,t),k.oldPos+1>=u&&R+1>=c)return r(this.buildValues(k.lastComponent,e,i))||!0;T[h]=k,k.oldPos+1>=u&&(K=Math.min(K,h-1)),R+1>=c&&($=Math.max($,h+1))}p++};if(n)(function h(){setTimeout(function(){if(p>g||Date.now()>M)return n(void 0);ie()||h()},0)})();else for(;p<=g&&Date.now()<=M;){let h=ie();if(h)return h}}addToPath(i,e,t,n,o){let r=i.lastComponent;return r&&!o.oneChangePerToken&&r.added===e&&r.removed===t?{oldPos:i.oldPos+n,lastComponent:{count:r.count+1,added:e,removed:t,previousComponent:r.previousComponent}}:{oldPos:i.oldPos+n,lastComponent:{count:1,added:e,removed:t,previousComponent:r}}}extractCommon(i,e,t,n,o){let r=e.length,c=t.length,u=i.oldPos,p=u-n,g=0;for(;p+1<r&&u+1<c&&this.equals(t[u+1],e[p+1],o);)p++,u++,g++,o.oneChangePerToken&&(i.lastComponent={count:1,previousComponent:i.lastComponent,added:!1,removed:!1});return g&&!o.oneChangePerToken&&(i.lastComponent={count:g,previousComponent:i.lastComponent,added:!1,removed:!1}),i.oldPos=u,p}equals(i,e,t){return t.comparator?t.comparator(i,e):i===e||!!t.ignoreCase&&i.toLowerCase()===e.toLowerCase()}removeEmpty(i){let e=[];for(let t=0;t<i.length;t++)i[t]&&e.push(i[t]);return e}castInput(i,e){return i}tokenize(i,e){return Array.from(i)}join(i){return i.join("")}postProcess(i,e){return i}get useLongestToken(){return!1}buildValues(i,e,t){let n=[],o;for(;i;)n.push(i),o=i.previousComponent,delete i.previousComponent,i=o;n.reverse();let r=n.length,c=0,u=0,p=0;for(;c<r;c++){let g=n[c];if(g.removed)g.value=this.join(t.slice(p,p+g.count)),p+=g.count;else{if(!g.added&&this.useLongestToken){let E=e.slice(u,u+g.count);E=E.map(function(M,T){let R=t[p+T];return R.length>M.length?R:M}),g.value=this.join(E)}else g.value=this.join(e.slice(u,u+g.count));u+=g.count,g.added||(p+=g.count)}}return n}};function Ct(a,i){let e;for(e=0;e<a.length&&e<i.length;e++)if(a[e]!=i[e])return a.slice(0,e);return a.slice(0,e)}function kt(a,i){let e;if(!a||!i||a[a.length-1]!=i[i.length-1])return"";for(e=0;e<a.length&&e<i.length;e++)if(a[a.length-(e+1)]!=i[i.length-(e+1)])return a.slice(-e);return a.slice(-e)}function $e(a,i,e){if(a.slice(0,i.length)!=i)throw Error(`string ${JSON.stringify(a)} doesn't start with prefix ${JSON.stringify(i)}; this is a bug`);return e+a.slice(i.length)}function qe(a,i,e){if(!i)return a+e;if(a.slice(-i.length)!=i)throw Error(`string ${JSON.stringify(a)} doesn't end with suffix ${JSON.stringify(i)}; this is a bug`);return a.slice(0,-i.length)+e}function ve(a,i){return $e(a,i,"")}function Se(a,i){return qe(a,i,"")}function Tt(a,i){return i.slice(0,Ti(a,i))}function Ti(a,i){let e=0;a.length>i.length&&(e=a.length-i.length);let t=i.length;a.length<i.length&&(t=a.length);let n=Array(t),o=0;n[0]=0;for(let r=1;r<t;r++){for(i[r]==i[o]?n[r]=n[o]:n[r]=o;o>0&&i[r]!=i[o];)o=n[o];i[r]==i[o]&&o++}o=0;for(let r=e;r<a.length;r++){for(;o>0&&a[r]!=i[o];)o=n[o];a[r]==i[o]&&o++}return o}function Mt(a,i){let e=[];for(let t of Array.from(i.segment(a))){let n=t.segment;e.length&&/\s/.test(e[e.length-1])&&/\s/.test(n)?e[e.length-1]+=n:e.push(n)}return e}function Ue(a,i){if(i)return ye(a,i)[1];let e;for(e=a.length-1;e>=0&&a[e].match(/\s/);e--);return a.substring(e+1)}function de(a,i){if(i)return ye(a,i)[0];let e=a.match(/^\s*/);return e?e[0]:""}function ye(a,i){if(!i)return[de(a),Ue(a)];if(i.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');let e=Mt(a,i),t=e[0],n=e[e.length-1],o=/\s/.test(t)?t:"",r=/\s/.test(n)?n:"";return[o,r]}var Ze="a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",Mi=new RegExp(`[${Ze}]+|\\s+|[^${Ze}]`,"ug"),wt=class extends se{equals(i,e,t){return t.ignoreCase&&(i=i.toLowerCase(),e=e.toLowerCase()),i.trim()===e.trim()}tokenize(i,e={}){let t;if(e.intlSegmenter){let r=e.intlSegmenter;if(r.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');t=Mt(i,r)}else t=i.match(Mi)||[];let n=[],o=null;return t.forEach(r=>{/\s/.test(r)?o==null?n.push(r):n.push(n.pop()+r):o!=null&&/\s/.test(o)?n[n.length-1]==o?n.push(n.pop()+r):n.push(o+r):n.push(r),o=r}),n}join(i){return i.map((e,t)=>t==0?e:e.replace(/^\s+/,"")).join("")}postProcess(i,e){if(!i||e.oneChangePerToken)return i;let t=null,n=null,o=null;return i.forEach(r=>{r.added?n=r:r.removed?o=r:((n||o)&&Vn(t,o,n,r,e.intlSegmenter),t=r,n=null,o=null)}),(n||o)&&Vn(t,o,n,null,e.intlSegmenter),i}},wi=new wt;function Vn(a,i,e,t,n){if(i&&e){let[o,r]=ye(i.value,n),[c,u]=ye(e.value,n);if(a){let p=Ct(o,c);a.value=qe(a.value,c,p),i.value=ve(i.value,p),e.value=ve(e.value,p)}if(t){let p=kt(r,u);t.value=$e(t.value,u,p),i.value=Se(i.value,p),e.value=Se(e.value,p)}}else if(e){if(a){let o=de(e.value,n);e.value=e.value.substring(o.length)}if(t){let o=de(t.value,n);t.value=t.value.substring(o.length)}}else if(a&&t){let o=de(t.value,n),[r,c]=ye(i.value,n),u=Ct(o,r);i.value=ve(i.value,u);let p=kt(ve(o,u),c);i.value=Se(i.value,p),t.value=$e(t.value,o,p),a.value=qe(a.value,o,o.slice(0,o.length-p.length))}else if(t){let o=de(t.value,n),r=Ue(i.value,n),c=Tt(r,o);i.value=Se(i.value,c)}else if(a){let o=Ue(a.value,n),r=de(i.value,n),c=Tt(o,r);i.value=ve(i.value,c)}}var It=class extends se{tokenize(i){let e=new RegExp(`(\\r?\\n)|[${Ze}]+|[^\\S\\n\\r]+|[^${Ze}]`,"ug");return i.match(e)||[]}},Hn=new It;function Pt(a,i,e){return Hn.diff(a,i,e)}var Dt=class extends se{constructor(){super(...arguments),this.tokenize=Pi}equals(i,e,t){return t.ignoreWhitespace?((!t.newlineIsToken||!i.includes(`
`))&&(i=i.trim()),(!t.newlineIsToken||!e.includes(`
`))&&(e=e.trim())):t.ignoreNewlineAtEof&&!t.newlineIsToken&&(i.endsWith(`
`)&&(i=i.slice(0,-1)),e.endsWith(`
`)&&(e=e.slice(0,-1))),super.equals(i,e,t)}},Ii=new Dt;function St(a,i,e){return Ii.diff(a,i,e)}function Pi(a,i){i.stripTrailingCr&&(a=a.replace(/\r\n/g,`
`));let e=[],t=a.split(/(\n|\r\n)/);t[t.length-1]||t.pop();for(let n=0;n<t.length;n++){let o=t[n];n%2&&!i.newlineIsToken?e[e.length-1]+=o:e.push(o)}return e}var zn={includeIndex:!0,includeUnderline:!0,includeFileHeaders:!0};function Et(a,i,e,t,n,o,r){let c;r?typeof r=="function"?c={callback:r}:c=r:c={},typeof c.context>"u"&&(c.context=4);let u=c.context;if(c.newlineIsToken)throw new Error("newlineIsToken may not be used with patch-generation functions, only with diffing functions");if(c.callback){let{callback:g}=c;St(e,t,Object.assign(Object.assign({},c),{callback:E=>{let M=p(E);g(M)}}))}else return p(St(e,t,c));function p(g){if(!g)return;g.push({value:"",lines:[]});function E(h){return h.map(function(k){return" "+k})}let M=[],T=0,R=0,$=[],K=1,ie=1;for(let h=0;h<g.length;h++){let k=g[h],A=k.lines||Di(k.value);if(k.lines=A,k.added||k.removed){if(!T){let N=g[h-1];T=K,R=ie,N&&($=u>0?E(N.lines.slice(-u)):[],T-=$.length,R-=$.length)}for(let N of A)$.push((k.added?"+":"-")+N);k.added?ie+=A.length:K+=A.length}else{if(T)if(A.length<=u*2&&h<g.length-2)for(let N of E(A))$.push(N);else{let N=Math.min(A.length,u);for(let Ee of E(A.slice(0,N)))$.push(Ee);let Ce={oldStart:T,oldLines:K-T+N,newStart:R,newLines:ie-R+N,lines:$};M.push(Ce),T=0,R=0,$=[]}K+=A.length,ie+=A.length}}for(let h of M)for(let k=0;k<h.lines.length;k++)h.lines[k].endsWith(`
`)?h.lines[k]=h.lines[k].slice(0,-1):(h.lines.splice(k+1,0,"\\ No newline at end of file"),k++);return{oldFileName:a,newFileName:i,oldHeader:n,newHeader:o,hunks:M}}}function Ye(a,i){if(i||(i=zn),Array.isArray(a)){if(a.length>1&&!i.includeFileHeaders)throw new Error("Cannot omit file headers on a multi-file patch. (The result would be unparseable; how would a tool trying to apply the patch know which changes are to which file?)");return a.map(t=>Ye(t,i)).join(`
`)}let e=[];i.includeIndex&&a.oldFileName==a.newFileName&&e.push("Index: "+a.oldFileName),i.includeUnderline&&e.push("==================================================================="),i.includeFileHeaders&&(e.push("--- "+a.oldFileName+(typeof a.oldHeader>"u"?"":"	"+a.oldHeader)),e.push("+++ "+a.newFileName+(typeof a.newHeader>"u"?"":"	"+a.newHeader)));for(let t=0;t<a.hunks.length;t++){let n=a.hunks[t];n.oldLines===0&&(n.oldStart-=1),n.newLines===0&&(n.newStart-=1),e.push("@@ -"+n.oldStart+","+n.oldLines+" +"+n.newStart+","+n.newLines+" @@");for(let o of n.lines)e.push(o)}return e.join(`
`)+`
`}function Ot(a,i,e,t,n,o,r){if(typeof r=="function"&&(r={callback:r}),r?.callback){let{callback:c}=r;Et(a,i,e,t,n,o,Object.assign(Object.assign({},r),{callback:u=>{c(u?Ye(u,r.headerOptions):void 0)}}))}else{let c=Et(a,i,e,t,n,o,r);return c?Ye(c,r?.headerOptions):void 0}}function Di(a){let i=a.endsWith(`
`),e=a.split(`
`).map(t=>t+`
`);return i?e.pop():e.push(e.pop().slice(0,-1)),e}var xe=class a{compute(i,e){let t=new Set([...Object.keys(i.files),...Object.keys(e.files)]),n={};for(let o of t){let r=i.files[o]??"",c=e.files[o]??"",u;o in i.files?o in e.files?r===c?u="unchanged":u="modified":u="removed":u="added";let p=u==="modified"||u==="added"||u==="removed"?Ot(o,o,r,c,void 0,void 0,{context:3}):"",g=0,E=0;for(let M of p.split(`
`))M.startsWith("+")&&!M.startsWith("+++")?g++:M.startsWith("-")&&!M.startsWith("---")&&E++;n[o]={status:u,patch:p,fromContent:r,toContent:c,addedLines:g,removedLines:E}}return n}parseDepsChange(i,e){let t=u=>{try{return JSON.parse(u.files["package.json"]??"{}")}catch{return{}}},n=t(i),o=t(e),r=[],c=["dependencies","devDependencies"];for(let u of c){let p=n[u]??{},g=o[u]??{},E=new Set([...Object.keys(p),...Object.keys(g)]);for(let M of E){let T=p[M]??null,R=g[M]??null;T!==R&&r.push({name:M,fromVersion:T,toVersion:R,group:u})}}return r.sort((u,p)=>u.group.localeCompare(p.group)||u.name.localeCompare(p.name))}static \u0275fac=function(e){return new(e||a)};static \u0275prov=Ut({token:a,factory:a.\u0275fac,providedIn:"root"})};var Ri=["button"],Fi=["*"];function Bi(a,i){if(a&1&&(s(0,"div",2),B(1,"mat-pseudo-checkbox",6),d()),a&2){let e=b();l(),y("disabled",e.disabled)}}var Wn=new Y("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),Gn=new Y("MatButtonToggleGroup"),Ai={provide:fn,useExisting:qt(()=>Lt),multi:!0},Je=class{source;value;constructor(i,e){this.source=i,this.value=e}},Lt=(()=>{class a{_changeDetector=f(le);_dir=f(Pe,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=f(Ie).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new F;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new F;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=f(Wn,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new cn(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||We(e))return;let n=e.target.id,o=this._buttonToggles.toArray().findIndex(c=>c.buttonId===n),r=null;switch(e.keyCode){case 32:case 13:r=this._buttonToggles.get(o)||null;break;case 38:r=this._getNextButton(o,-1);break;case 37:r=this._getNextButton(o,this.dir==="ltr"?-1:1);break;case 40:r=this._getNextButton(o,1);break;case 39:r=this._getNextButton(o,this.dir==="ltr"?1:-1);break;default:return}r&&(e.preventDefault(),r._onButtonClick(),r.focus())}_emitChangeEvent(e){let t=new Je(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t)}_syncButtonToggle(e,t,n=!1,o=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(e,n)):this._updateModelValue(e,n)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let n=this._buttonToggles;for(let o=1;o<=n.length;o++){let r=(e+t*o+n.length)%n.length,c=n.get(r);if(c&&!c.disabled)return c}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(n=>this._selectValue(n,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(n=>n.tabIndex===-1)){for(let n of t)if(!n.disabled){n.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,t){for(let n of t)if(n.value===e){n.checked=!0,this._selectionModel.select(n),this.multiple||(n.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(t){return new(t||a)};static \u0275dir=J({type:a,selectors:[["mat-button-toggle-group"]],contentQueries:function(t,n,o){if(t&1&&ue(o,Xe,5),t&2){let r;O(r=L())&&(n._buttonToggles=r)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(t,n){t&1&&C("keydown",function(r){return n._keydown(r)}),t&2&&(q("role",n.multiple?"group":"radiogroup")("aria-disabled",n.disabled),w("mat-button-toggle-vertical",n.vertical)("mat-button-toggle-group-appearance-standard",n.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",I],value:"value",multiple:[2,"multiple","multiple",I],disabled:[2,"disabled","disabled",I],disabledInteractive:[2,"disabledInteractive","disabledInteractive",I],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",I],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",I]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[re([Ai,{provide:Gn,useExisting:a}])]})}return a})(),Xe=(()=>{class a{_changeDetectorRef=f(le);_elementRef=f(ee);_focusMonitor=f(ut);_idGenerator=f(Ie);_animationDisabled=pe();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new F;constructor(){f(ze).load(Qe);let e=f(Gn,{optional:!0}),t=f(new ct("tabindex"),{optional:!0})||"",n=f(Wn,{optional:!0});this._tabIndex=P(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=n&&n.appearance?n.appearance:"standard",this._disabledInteractive=n?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(n=>n.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0}this.change.emit(new Je(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=H({type:a,selectors:[["mat-button-toggle"]],viewQuery:function(t,n){if(t&1&&X(Ri,5),t&2){let o;O(o=L())&&(n._buttonElement=o.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(t,n){t&1&&C("focus",function(){return n.focus()}),t&2&&(q("aria-label",null)("aria-labelledby",null)("id",n.id)("name",null),w("mat-button-toggle-standalone",!n.buttonToggleGroup)("mat-button-toggle-checked",n.checked)("mat-button-toggle-disabled",n.disabled)("mat-button-toggle-disabled-interactive",n.disabledInteractive)("mat-button-toggle-appearance-standard",n.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",I],appearance:"appearance",checked:[2,"checked","checked",I],disabled:[2,"disabled","disabled",I],disabledInteractive:[2,"disabledInteractive","disabledInteractive",I]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:Fi,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(t,n){if(t&1&&(ce(),s(0,"button",1,0),C("click",function(){return n._onButtonClick()}),_(2,Bi,2,1,"div",2),s(3,"span",3),me(4),d()(),B(5,"span",4)(6,"span",5)),t&2){let o=te(1);y("id",n.buttonId)("disabled",n.disabled&&!n.disabledInteractive||null),q("role",n.isSingleSelector()?"radio":"button")("tabindex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("aria-pressed",n.isSingleSelector()?null:n.checked)("aria-checked",n.isSingleSelector()?n.checked:null)("name",n._getButtonName())("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),l(2),v(n.buttonToggleGroup&&(!n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideSingleSelectionIndicator||n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),l(4),y("matRippleTrigger",o)("matRippleDisabled",n.disableRipple||n.disabled)}},dependencies:[De,vn],styles:[`.mat-button-toggle-standalone,
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
`],encapsulation:2,changeDetection:0})}return a})(),Ke=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=je({type:a});static \u0275inj=Fe({imports:[Cn,Xe,Ge]})}return a})();var qn=a=>({nodes:a}),ji=(a,i)=>i.path;function Vi(a,i){a&1&&st(0)}function Hi(a,i){if(a&1&&(s(0,"mat-icon",9),m(1),d()),a&2){let e=b().$implicit;l(),Q(" ",e.expanded?"folder_open":"folder"," ")}}function zi(a,i){a&1&&(s(0,"mat-icon",10),m(1,"description"),d())}function Wi(a,i){if(a&1&&(s(0,"span",12),m(1),d()),a&2){let e=b().$implicit;l(),Q("+",e.addedLines)}}function Gi(a,i){if(a&1&&(s(0,"span",13),m(1),d()),a&2){let e=b().$implicit;l(),Q("-",e.removedLines)}}function Qi(a,i){if(a&1&&(s(0,"mat-icon",14),m(1),d()),a&2){let e=b().$implicit,t=b(2);y("matTooltip",e.status),l(),Q(" ",t.statusIcon(e.status)," ")}}function $i(a,i){a&1&&st(0)}function qi(a,i){if(a&1&&oe(0,$i,1,0,"ng-container",5),a&2){let e=b().$implicit;b(2);let t=te(8);y("ngTemplateOutlet",t)("ngTemplateOutletContext",dt(2,qn,e.children))}}function Ui(a,i){if(a&1){let e=U();s(0,"div",7)(1,"div",8),C("click",function(){let n=j(e).$implicit,o=b(2);return V(n.isDir?o.toggleDir(n):o.selectFile(n))}),_(2,Hi,2,1,"mat-icon",9)(3,zi,2,0,"mat-icon",10),s(4,"span",11),m(5),d(),_(6,Wi,2,1,"span",12),_(7,Gi,2,1,"span",13),_(8,Qi,2,2,"mat-icon",14),d(),_(9,qi,1,4,"ng-container"),d()}if(a&2){let e=i.$implicit,t=b(2);w("selected",e.path===t.selectedFile),l(),G("status-"+t.statusClass(e.status)),Ve("padding-left",e.path.split("/").length*12,"px"),l(),v(e.isDir?2:3),l(3),x(e.name),l(),v(!e.isDir&&e.addedLines>0?6:-1),l(),v(!e.isDir&&e.removedLines>0?7:-1),l(),v(e.status&&e.status!=="unchanged"?8:-1),l(),v(e.isDir&&e.expanded&&e.children.length?9:-1)}}function Zi(a,i){if(a&1&&z(0,Ui,10,12,"div",6,ji),a&2){let e=i.nodes;W(e)}}var et=class a{set diffResult(i){this._diffResult=i,this.buildTree()}selectedFile=null;fileSelected=new F;changedOnly=P(!1);_diffResult={};tree=P([]);filteredTree=Z(()=>this.changedOnly()?this.filterChanged(this.tree()):this.tree());buildTree(){let i=[];for(let[e,t]of Object.entries(this._diffResult)){let n=e.split("/"),o=i,r="";for(let c=0;c<n.length;c++){let u=n[c];r=r?`${r}/${u}`:u;let p=c===n.length-1,g=o.find(E=>E.name===u);g||(g={name:u,path:r,isDir:!p,status:p?t.status:null,children:[],expanded:!0,addedLines:p?t.addedLines:0,removedLines:p?t.removedLines:0},o.push(g)),p||(o=g.children,t.status!=="unchanged"&&(!g.status||g.status==="unchanged")&&(g.status=t.status))}}this.sortTree(i),this.tree.set(i)}sortTree(i){i.sort((e,t)=>e.isDir!==t.isDir?e.isDir?-1:1:e.name.localeCompare(t.name));for(let e of i)e.children.length&&this.sortTree(e.children)}filterChanged(i){return i.filter(e=>e.status!=="unchanged"&&e.status!==null).map(e=>At(Bt({},e),{children:this.filterChanged(e.children)}))}toggleDir(i){i.expanded=!i.expanded,this.tree.set([...this.tree()])}selectFile(i){i.isDir||this.fileSelected.emit(i.path)}statusIcon(i){switch(i){case"added":return"add_circle";case"removed":return"remove_circle";case"modified":return"edit";default:return""}}statusClass(i){return i??"unchanged"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=H({type:a,selectors:[["app-file-tree"]],inputs:{diffResult:"diffResult",selectedFile:"selectedFile"},outputs:{fileSelected:"fileSelected"},decls:9,vars:6,consts:[["nodeList",""],[1,"tree-header"],[1,"tree-title"],["matTooltip","Show changed files only",1,"changed-toggle",3,"click"],[1,"tree-container"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"tree-node",3,"selected"],[1,"tree-node"],[1,"node-row",3,"click"],[1,"node-icon","dir-icon"],[1,"node-icon","file-icon"],[1,"node-name"],[1,"line-stat","stat-added"],[1,"line-stat","stat-removed"],[1,"status-icon",3,"matTooltip"]],template:function(e,t){if(e&1&&(s(0,"div",1)(1,"span",2),m(2,"Files"),d(),s(3,"button",3),C("click",function(){return t.changedOnly.set(!t.changedOnly())}),m(4," Changed only "),d()(),s(5,"div",4),oe(6,Vi,1,0,"ng-container",5),d(),oe(7,Zi,2,0,"ng-template",null,0,tn)),e&2){let n=te(8);l(3),w("active",t.changedOnly()),l(3),y("ngTemplateOutlet",n)("ngTemplateOutletContext",dt(4,qn,t.filteredTree()))}},dependencies:[ne,nn,fe,be,Ke,he,ge],styles:[".tree-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border-bottom:1px solid #21262d;font-size:.75rem;text-transform:uppercase;letter-spacing:.08em;color:#ffffff80}.changed-toggle[_ngcontent-%COMP%]{background:none;border:1px solid #30363d;border-radius:4px;color:#ffffff80;padding:2px 8px;font-size:.7rem;cursor:pointer;text-transform:none;letter-spacing:0;transition:border-color .15s,color .15s}.changed-toggle.active[_ngcontent-%COMP%]{border-color:#58a6ff;color:#58a6ff}.tree-container[_ngcontent-%COMP%]{padding:4px 0}.node-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;height:28px;padding-right:8px;cursor:pointer;border-radius:4px;margin:1px 4px;font-size:.8rem;color:#ffffffbf;transition:background .1s}.node-row[_ngcontent-%COMP%]:hover{background:#ffffff0d}.tree-node.selected[_ngcontent-%COMP%] > .node-row[_ngcontent-%COMP%]{background:#388bfd26;color:#58a6ff}.node-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;flex-shrink:0;color:#fff6}.node-name[_ngcontent-%COMP%]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.status-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px;flex-shrink:0}.line-stat[_ngcontent-%COMP%]{font-size:.65rem;font-family:Roboto Mono,monospace;flex-shrink:0}.stat-added[_ngcontent-%COMP%]{color:#3fb950}.stat-removed[_ngcontent-%COMP%]{color:#f85149}.status-unchanged[_ngcontent-%COMP%]{color:#ffffff59}.status-unchanged[_ngcontent-%COMP%]   .node-icon[_ngcontent-%COMP%]{color:#fff3}.status-added[_ngcontent-%COMP%], .status-added[_ngcontent-%COMP%]   .node-icon[_ngcontent-%COMP%], .status-added[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%]{color:#3fb950}.status-removed[_ngcontent-%COMP%], .status-removed[_ngcontent-%COMP%]   .node-icon[_ngcontent-%COMP%], .status-removed[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%]{color:#f85149}.status-modified[_ngcontent-%COMP%], .status-modified[_ngcontent-%COMP%]   .node-icon[_ngcontent-%COMP%], .status-modified[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%]{color:#d29922}"]})};function Yi(a,i){a&1&&(s(0,"div",0)(1,"mat-icon"),m(2,"diff"),d(),s(3,"p"),m(4,"Select a file to view its diff"),d()())}function Ji(a,i){if(a&1){let e=U();s(0,"button",11),C("click",function(){j(e);let n=b(2);return V(n.copy("from"))}),s(1,"mat-icon"),m(2),d(),s(3,"span"),m(4),d()()}if(a&2){let e=b(2);l(2),x(e.copiedSide()==="from"?"check":"content_copy"),l(2),x(e.entry().status==="unchanged"?"copy":e.fromMajor!==null?"v"+e.fromMajor:"from")}}function Xi(a,i){if(a&1){let e=U();s(0,"button",12),C("click",function(){j(e);let n=b(2);return V(n.copy("to"))}),s(1,"mat-icon"),m(2),d(),s(3,"span"),m(4),d()()}if(a&2){let e=b(2);l(2),x(e.copiedSide()==="to"?"check":"content_copy"),l(2),x(e.toMajor!==null?"v"+e.toMajor:"to")}}function Ki(a,i){if(a&1){let e=U();s(0,"mat-button-toggle-group",13),C("change",function(n){j(e);let o=b(2);return V(o.viewMode.set(n.value))}),s(1,"mat-button-toggle",14)(2,"mat-icon"),m(3,"view_stream"),d()(),s(4,"mat-button-toggle",15)(5,"mat-icon"),m(6,"vertical_split"),d()()()}if(a&2){let e=b(2);y("value",e.viewMode())}}function ea(a,i){a&1&&m(0," + ")}function ta(a,i){a&1&&m(0," - ")}function na(a,i){a&1&&m(0," @@ ")}function ia(a,i){if(a&1&&(s(0,"tr")(1,"td",17),m(2),d(),s(3,"td",17),m(4),d(),s(5,"td",18),_(6,ea,1,0)(7,ta,1,0)(8,na,1,0),d(),s(9,"td",19)(10,"pre"),m(11),d()()()),a&2){let e=i.$implicit;G("line-"+e.type),l(2),x(e.leftLineNo??""),l(2),x(e.rightLineNo??""),l(2),v(e.type==="added"?6:e.type==="removed"?7:e.type==="hunk"?8:-1),l(5),x(e.content)}}function aa(a,i){if(a&1&&(s(0,"table",9)(1,"tbody"),z(2,ia,12,6,"tr",16,rt),d()()),a&2){let e=b(2);l(2),W(e.lines())}}function oa(a,i){if(a&1&&(s(0,"tr",20),B(1,"td",17),s(2,"td",21)(3,"pre"),m(4),d()()()),a&2){let e=b().$implicit;l(4),x(e.left)}}function ra(a,i){if(a&1&&B(0,"pre",23),a&2){let e=b(2).$implicit;y("innerHTML",e.leftHtml,at)}}function la(a,i){if(a&1&&(s(0,"pre"),m(1),d()),a&2){let e=b(2).$implicit;l(),x(e.left??"")}}function sa(a,i){if(a&1&&B(0,"pre",23),a&2){let e=b(2).$implicit;y("innerHTML",e.rightHtml,at)}}function da(a,i){if(a&1&&(s(0,"pre"),m(1),d()),a&2){let e=b(2).$implicit;l(),x(e.right??"")}}function ca(a,i){if(a&1&&(s(0,"tr")(1,"td",17),m(2),d(),s(3,"td",22),_(4,ra,1,1,"pre",23)(5,la,2,1,"pre"),d(),s(6,"td",17),m(7),d(),s(8,"td",24),_(9,sa,1,1,"pre",23)(10,da,2,1,"pre"),d()()),a&2){let e=b().$implicit;l(),w("gutter-removed",e.left!==null&&e.type==="changed"),l(),Q(" ",e.leftLineNo??""," "),l(),w("line-removed",e.left!==null&&e.type==="changed")("side-empty",e.left===null),l(),v(e.leftHtml?4:5),l(2),w("gutter-added",e.right!==null&&e.type==="changed"),l(),Q(" ",e.rightLineNo??""," "),l(),w("line-added",e.right!==null&&e.type==="changed")("side-empty",e.right===null),l(),v(e.rightHtml?9:10)}}function ma(a,i){if(a&1&&_(0,oa,5,1,"tr",20)(1,ca,11,16,"tr"),a&2){let e=i.$implicit;v(e.type==="hunk"?0:1)}}function ua(a,i){if(a&1&&(s(0,"table",10)(1,"tbody"),z(2,ma,2,1,null,null,rt),d()()),a&2){let e=b(2);l(2),W(e.sideBySideRows())}}function pa(a,i){if(a&1&&(s(0,"div",1)(1,"span",2),m(2),d(),s(3,"span",3),m(4),d(),B(5,"span",4),_(6,Ji,5,2,"button",5),_(7,Xi,5,2,"button",6),_(8,Ki,7,1,"mat-button-toggle-group",7),d(),s(9,"div",8),_(10,aa,4,0,"table",9)(11,ua,4,0,"table",10),d()),a&2){let e=b();l(2),x(e._file()),l(),G("badge-"+e.entry().status),l(),Q(" ",e.entry().status," "),l(2),v(e.entry().status!=="added"?6:-1),l(),v(e.entry().status!=="removed"&&e.entry().status!=="unchanged"?7:-1),l(),v(e.entry().status==="modified"?8:-1),l(2),v(e.viewMode()==="inline"?10:11)}}var tt=class a{sanitizer=f(an);set file(i){this._file.set(i)}set diffResult(i){this._diffResult.set(i)}fromMajor=null;toMajor=null;_file=P(null);_diffResult=P({});viewMode=P("inline");copiedSide=P(null);mobileQuery=window.matchMedia("(max-width: 600px)");onMobileChange=i=>{i.matches&&this.viewMode.set("inline")};constructor(){Me(()=>{this.entry()?.status!=="modified"&&this.viewMode.set("inline")})}ngOnInit(){this.mobileQuery.matches&&this.viewMode.set("inline"),this.mobileQuery.addEventListener("change",this.onMobileChange)}ngOnDestroy(){this.mobileQuery.removeEventListener("change",this.onMobileChange)}copy(i){let e=i==="from"?this.entry().fromContent:this.entry().toContent;navigator.clipboard.writeText(e).then(()=>{this.copiedSide.set(i),setTimeout(()=>this.copiedSide.set(null),2e3)})}entry=Z(()=>{let i=this._file(),e=this._diffResult();return i?e[i]??null:null});lines=Z(()=>{let i=this.entry();return i?i.status==="unchanged"?i.fromContent.split(`
`).map((e,t)=>({type:"context",content:e,leftLineNo:t+1,rightLineNo:t+1})):this.parsePatch(i.patch):[]});sideBySideRows=Z(()=>{let i=this.lines(),e=[],t=0;for(;t<i.length;){let n=i[t];if(n.type==="hunk")e.push({type:"hunk",left:n.content,right:n.content,leftLineNo:null,rightLineNo:null,leftHtml:null,rightHtml:null}),t++;else if(n.type==="context")e.push({type:"context",left:n.content,right:n.content,leftLineNo:n.leftLineNo,rightLineNo:n.rightLineNo,leftHtml:null,rightHtml:null}),t++;else{let o=[],r=[];for(;t<i.length&&i[t].type==="removed";)o.push(i[t]),t++;for(;t<i.length&&i[t].type==="added";)r.push(i[t]),t++;let c=Math.max(o.length,r.length);for(let u=0;u<c;u++){let p=o[u]??null,g=r[u]??null,E=null,M=null;if(p&&g){let T=Pt(p.content,g.content);E=this.segmentsToHtml(T.filter(R=>!R.added),!0),M=this.segmentsToHtml(T.filter(R=>!R.removed),!1)}e.push({type:"changed",left:p?.content??null,right:g?.content??null,leftLineNo:p?.leftLineNo??null,rightLineNo:g?.rightLineNo??null,leftHtml:E,rightHtml:M})}}}return e});segmentsToHtml(i,e){let t=i.map(n=>{let o=n.value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return(e?n.removed:n.added)?`<span class="word-highlight">${o}</span>`:o}).join("");return this.sanitizer.bypassSecurityTrustHtml(t)}parsePatch(i){let e=[],t=0,n=0;for(let o of i.split(`
`))if(!(o.startsWith("+++")||o.startsWith("---")||o.startsWith("\\")||o.startsWith("Index:")||o.startsWith("===")))if(o.startsWith("@@")){let r=o.match(/@@ -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@/);r&&(t=parseInt(r[1],10),n=parseInt(r[2],10)),e.push({type:"hunk",content:o,leftLineNo:null,rightLineNo:null})}else o.startsWith("+")?e.push({type:"added",content:o.slice(1),leftLineNo:null,rightLineNo:n++}):o.startsWith("-")?e.push({type:"removed",content:o.slice(1),leftLineNo:t++,rightLineNo:null}):e.push({type:"context",content:o.slice(1),leftLineNo:t++,rightLineNo:n++});return e}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=H({type:a,selectors:[["app-file-diff"]],inputs:{file:"file",diffResult:"diffResult",fromMajor:"fromMajor",toMajor:"toMajor"},decls:2,vars:1,consts:[[1,"empty-state"],[1,"diff-header"],[1,"file-path"],[1,"status-badge"],[1,"spacer"],["matTooltip","Copy original file",1,"copy-btn"],["matTooltip","Copy new file",1,"copy-btn"],[1,"view-toggle",3,"value"],[1,"diff-content"],[1,"diff-table"],[1,"diff-table","side-by-side"],["matTooltip","Copy original file",1,"copy-btn",3,"click"],["matTooltip","Copy new file",1,"copy-btn",3,"click"],[1,"view-toggle",3,"change","value"],["value","inline","matTooltip","Inline"],["value","side-by-side","matTooltip","Side by side"],[3,"class"],[1,"line-gutter","line-no"],[1,"line-gutter","line-sign"],[1,"line-content"],[1,"line-hunk"],["colspan","3",1,"line-content","side-left"],[1,"line-content","side-left"],[3,"innerHTML"],[1,"line-content","side-right"]],template:function(e,t){e&1&&_(0,Yi,5,0,"div",0)(1,pa,12,8),e&2&&v(t.entry()?1:0)},dependencies:[ne,fe,be,Ke,Lt,Xe,he,ge],styles:[".empty-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:#ffffff40}.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:8px 0 0;font-size:.9rem}.diff-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:8px 16px;border-bottom:1px solid #21262d;background:#161b22;font-family:Roboto Mono,monospace;font-size:.8rem;color:#ffffffb3;position:sticky;top:0;z-index:1}.diff-header[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1}.status-badge[_ngcontent-%COMP%]{padding:1px 8px;border-radius:10px;font-size:.7rem;font-family:sans-serif}.status-badge.badge-added[_ngcontent-%COMP%]{background:#3fb95033;color:#3fb950}.status-badge.badge-removed[_ngcontent-%COMP%]{background:#f8514933;color:#f85149}.status-badge.badge-modified[_ngcontent-%COMP%]{background:#d2992233;color:#d29922}.status-badge.badge-unchanged[_ngcontent-%COMP%]{background:#ffffff1a;color:#fff6}.copy-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;background:none;border:1px solid #30363d;border-radius:4px;color:#ffffff80;padding:2px 8px;font-size:.7rem;cursor:pointer;transition:color .15s,border-color .15s}.copy-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px}.copy-btn[_ngcontent-%COMP%]:hover{color:#fffc;border-color:#58a6ff}.view-toggle[_ngcontent-%COMP%]{--mat-standard-button-toggle-height: 32px}.view-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.diff-content[_ngcontent-%COMP%]{overflow-x:auto}.diff-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;font-family:Roboto Mono,Fira Code,monospace;font-size:.78rem}tr.line-added[_ngcontent-%COMP%]{background:#3fb9501a}tr.line-removed[_ngcontent-%COMP%]{background:#f851491a}tr.line-hunk[_ngcontent-%COMP%]{background:#388bfd14}.line-gutter[_ngcontent-%COMP%]{padding:0 8px;text-align:right;-webkit-user-select:none;user-select:none;color:#ffffff4d;border-right:1px solid #21262d;font-size:.7rem;white-space:nowrap}.line-gutter.line-no[_ngcontent-%COMP%]{min-width:28px;border-right:none;color:#ffffff40}.line-gutter.line-sign[_ngcontent-%COMP%]{width:16px;text-align:center;padding:0 4px}.line-added[_ngcontent-%COMP%]   .line-gutter[_ngcontent-%COMP%]{color:#3fb950}.line-removed[_ngcontent-%COMP%]   .line-gutter[_ngcontent-%COMP%]{color:#f85149}.line-hunk[_ngcontent-%COMP%]   .line-gutter[_ngcontent-%COMP%]{color:#388bfd}.line-content[_ngcontent-%COMP%]{padding:0 12px}.line-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:0;white-space:pre;color:#e6edf3}.line-added[_ngcontent-%COMP%]   .line-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{color:#aff5b4}.line-removed[_ngcontent-%COMP%]   .line-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{color:#ffdcd7}.line-hunk[_ngcontent-%COMP%]   .line-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{color:#79c0ff}.side-by-side[_ngcontent-%COMP%]{width:auto}.side-by-side[_ngcontent-%COMP%]   td.line-no[_ngcontent-%COMP%]{min-width:28px;white-space:nowrap}.side-by-side[_ngcontent-%COMP%]   td.side-left[_ngcontent-%COMP%], .side-by-side[_ngcontent-%COMP%]   td.side-right[_ngcontent-%COMP%]{min-width:45vw}.side-by-side[_ngcontent-%COMP%]   td.side-left[_ngcontent-%COMP%]{border-right:1px solid #21262d}.side-by-side[_ngcontent-%COMP%]   .gutter-removed[_ngcontent-%COMP%]{color:#f85149}.side-by-side[_ngcontent-%COMP%]   .gutter-added[_ngcontent-%COMP%]{color:#3fb950}.side-by-side[_ngcontent-%COMP%]   td.line-removed[_ngcontent-%COMP%]{background:#f851491a}.side-by-side[_ngcontent-%COMP%]   td.line-added[_ngcontent-%COMP%]{background:#3fb9501a}.side-by-side[_ngcontent-%COMP%]   td.side-empty[_ngcontent-%COMP%]{background:#ffffff05}.side-by-side[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{color:#e6edf3}.side-by-side[_ngcontent-%COMP%]   td.line-removed[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{color:#ffdcd7}.side-by-side[_ngcontent-%COMP%]   td.line-added[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{color:#aff5b4}.word-highlight[_ngcontent-%COMP%]{border-radius:2px;padding:0 1px}.line-removed[_ngcontent-%COMP%]   .word-highlight[_ngcontent-%COMP%]{background:#f8514959}.line-added[_ngcontent-%COMP%]   .word-highlight[_ngcontent-%COMP%]{background:#3fb95059}@media(max-width:600px){.diff-table[_ngcontent-%COMP%]{font-size:.65rem}.line-gutter[_ngcontent-%COMP%]{width:20px;padding:0 4px;font-size:.6rem}.line-content[_ngcontent-%COMP%]{padding:0 6px}.view-toggle[_ngcontent-%COMP%]{display:none}}"]})};var Un=(a,i)=>i.name;function ba(a,i){a&1&&(D(0,"div",0),m(1,"No dependency changes"),S())}function fa(a,i){if(a&1&&(D(0,"tr")(1,"td",4),m(2),S(),D(3,"td",5),m(4),S(),D(5,"td",5),m(6),S(),D(7,"td",6)(8,"span"),m(9),S()()()),a&2){let e=i.$implicit,t=b(3);G("type-"+t.changeType(e)),l(2),x(e.name),l(2),x(e.fromVersion??"\u2014"),l(2),x(e.toVersion??"\u2014"),l(2),G("badge badge-"+t.changeType(e)),l(),x(t.changeType(e))}}function ga(a,i){if(a&1&&(D(0,"div",1),m(1,"dependencies"),S(),D(2,"table",2)(3,"thead")(4,"tr")(5,"th"),m(6,"Package"),S(),D(7,"th"),m(8,"Before"),S(),D(9,"th"),m(10,"After"),S(),D(11,"th"),m(12,"Change"),S()()(),D(13,"tbody"),z(14,fa,10,8,"tr",3,Un),S()()),a&2){let e=b(2);l(14),W(e.dependencies)}}function ha(a,i){if(a&1&&(D(0,"tr")(1,"td",4),m(2),S(),D(3,"td",5),m(4),S(),D(5,"td",5),m(6),S(),D(7,"td",6)(8,"span"),m(9),S()()()),a&2){let e=i.$implicit,t=b(3);G("type-"+t.changeType(e)),l(2),x(e.name),l(2),x(e.fromVersion??"\u2014"),l(2),x(e.toVersion??"\u2014"),l(2),G("badge badge-"+t.changeType(e)),l(),x(t.changeType(e))}}function _a(a,i){if(a&1&&(D(0,"div",1),m(1,"devDependencies"),S(),D(2,"table",2)(3,"thead")(4,"tr")(5,"th"),m(6,"Package"),S(),D(7,"th"),m(8,"Before"),S(),D(9,"th"),m(10,"After"),S(),D(11,"th"),m(12,"Change"),S()()(),D(13,"tbody"),z(14,ha,10,8,"tr",3,Un),S()()),a&2){let e=b(2);l(14),W(e.devDependencies)}}function va(a,i){if(a&1&&(_(0,ga,16,0),_(1,_a,16,0)),a&2){let e=b();v(e.dependencies.length>0?0:-1),l(),v(e.devDependencies.length>0?1:-1)}}var nt=class a{diffService=f(xe);set from(i){this._from=i,this.recompute()}set to(i){this._to=i,this.recompute()}_from;_to;dependencies=[];devDependencies=[];recompute(){if(this._from&&this._to){let i=this.diffService.parseDepsChange(this._from,this._to);this.dependencies=i.filter(e=>e.group==="dependencies"),this.devDependencies=i.filter(e=>e.group==="devDependencies")}}changeType(i){if(!i.fromVersion)return"added";if(!i.toVersion)return"removed";let[e,t]=i.fromVersion.split(".").map(Number),[n,o]=i.toVersion.split(".").map(Number);return n!==e?"major":o!==t?"minor":"patch"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=H({type:a,selectors:[["app-deps-tab"]],inputs:{from:"from",to:"to"},decls:2,vars:1,consts:[[1,"empty"],[1,"section-header"],[1,"deps-table"],[3,"class"],[1,"pkg-name"],[1,"version"],[1,"type-badge"]],template:function(e,t){e&1&&_(0,ba,2,0,"div",0)(1,va,2,2),e&2&&v(t.dependencies.length===0&&t.devDependencies.length===0?0:1)},dependencies:[ne],styles:[".empty[_ngcontent-%COMP%]{padding:32px 16px;color:#fff6;text-align:center}.section-header[_ngcontent-%COMP%]{padding:10px 12px 4px;font-size:.7rem;text-transform:uppercase;letter-spacing:.08em;color:#ffffff59;border-bottom:1px solid #21262d;margin-top:8px}.section-header[_ngcontent-%COMP%]:first-child{margin-top:0}.deps-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;font-size:.85rem}.deps-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left;padding:8px 12px;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:#fff6;border-bottom:1px solid #21262d}.deps-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:6px 12px;border-bottom:1px solid #161b22;vertical-align:middle}.pkg-name[_ngcontent-%COMP%]{font-family:Roboto Mono,monospace;font-size:.8rem}.version[_ngcontent-%COMP%]{font-family:Roboto Mono,monospace;font-size:.78rem;color:#ffffff8c}.badge[_ngcontent-%COMP%]{padding:2px 8px;border-radius:10px;font-size:.7rem}.badge.badge-added[_ngcontent-%COMP%]{background:#3fb95033;color:#3fb950}.badge.badge-removed[_ngcontent-%COMP%], .badge.badge-major[_ngcontent-%COMP%]{background:#f8514933;color:#f85149}.badge.badge-minor[_ngcontent-%COMP%]{background:#58a6ff33;color:#58a6ff}.badge.badge-patch[_ngcontent-%COMP%]{background:#8b949e26;color:#8b949e}"]})};var ya=["fileDiffPanel"],Zn=(a,i)=>i.angularMajor;function xa(a,i){if(a&1&&(s(0,"mat-option",7),m(1),d()),a&2){let e=i.$implicit;y("value",e.angularMajor),l(),x(e.angularMajor)}}function Ca(a,i){if(a&1&&(s(0,"mat-option",7),m(1),d()),a&2){let e=i.$implicit;y("value",e.angularMajor),l(),x(e.angularMajor)}}function ka(a,i){if(a&1&&(s(0,"a",11),m(1," Update guide "),s(2,"mat-icon"),m(3,"open_in_new"),d()()),a&2){let e=b();y("href","https://update.angular.io/?v="+e.fromMajor()+".0-"+e.toMajor()+".0",Jt)}}function Ta(a,i){if(a&1&&(s(0,"div",12)(1,"span",17),m(2),d(),s(3,"span",18),m(4),d(),s(5,"span",19),m(6),d()()),a&2){let e=b();l(2),Q("+",e.summary().added," added"),l(2),Q("\u2212",e.summary().removed," removed"),l(2),Q("~",e.summary().modified," modified")}}function Ma(a,i){if(a&1&&(s(0,"div",13),B(1,"app-version-meta-card",20)(2,"app-version-meta-card",21),d()),a&2){let e=b();l(),y("snapshot",e.fromSnapshot()),l(),y("snapshot",e.toSnapshot())}}function wa(a,i){a&1&&(s(0,"div",14),B(1,"mat-spinner",22),s(2,"span"),m(3,"Loading snapshots\u2026"),d()())}function Ia(a,i){if(a&1&&(s(0,"div",15),m(1),d()),a&2){let e=b();l(),x(e.error())}}function Pa(a,i){if(a&1){let e=U();s(0,"div",33),C("click",function(){j(e);let n=b(2);return V(n.treeOpen.set(!1))}),d()}}function Da(a,i){if(a&1&&B(0,"app-deps-tab",32),a&2){let e=b(2);y("from",e.fromSnapshot())("to",e.toSnapshot())}}function Sa(a,i){if(a&1){let e=U();s(0,"mat-tab-group",16)(1,"mat-tab",23)(2,"div",24)(3,"button",25),C("click",function(){j(e);let n=b();return V(n.treeOpen.set(!n.treeOpen()))}),s(4,"mat-icon"),m(5),d()(),_(6,Pa,1,0,"div",26),s(7,"div",27)(8,"app-file-tree",28),C("fileSelected",function(n){j(e);let o=b();return V(o.onFileSelect(n))}),d()(),s(9,"div",29,0),B(11,"app-file-diff",30),d()()(),s(12,"mat-tab",31),_(13,Da,1,2,"app-deps-tab",32),d()()}if(a&2){let e=b();l(5),x(e.treeOpen()?"close":"folder_open"),l(),v(e.treeOpen()?6:-1),l(),w("mobile-open",e.treeOpen()),l(),y("diffResult",e.diffResult())("selectedFile",e.selectedFile()),l(3),y("file",e.selectedFile())("diffResult",e.diffResult())("fromMajor",e.fromMajor())("toMajor",e.toMajor()),l(2),v(e.fromSnapshot()&&e.toSnapshot()?13:-1)}}var Yn=class a{route=f(on);router=f(rn);dataService=f(Sn);diffService=f(xe);fileDiffPanel;versions=P([]);versionsDesc=Z(()=>this.versions().toReversed());fromMajor=P(null);toMajor=P(null);selectedFile=P(null);treeOpen=P(!1);constructor(){Me(i=>{document.body.style.overflow=this.treeOpen()?"hidden":"",i(()=>{document.body.style.overflow=""})}),Me(()=>{this.selectedFile(),this.fileDiffPanel?.nativeElement&&(this.fileDiffPanel.nativeElement.scrollTop=0)})}fromSnapshot=P(null);toSnapshot=P(null);diffResult=P(null);loading=P(!1);error=P(null);summary=Z(()=>{let i=this.diffResult();if(!i)return null;let e=Object.values(i);return{added:e.filter(t=>t.status==="added").length,removed:e.filter(t=>t.status==="removed").length,modified:e.filter(t=>t.status==="modified").length}});ngOnInit(){this.dataService.getVersions().subscribe({next:i=>{this.versions.set(i);let e=this.route.snapshot.params,t=e.from?Number(e.from):null,n=e.to?Number(e.to):null,o=e.file?decodeURIComponent(e.file):null;if(t&&n)this.fromMajor.set(t),this.toMajor.set(n),this.selectedFile.set(o),this.loadDiff(t,n);else if(i.length>=2){let r=i[i.length-1].angularMajor,c=i[i.length-2].angularMajor;this.router.navigate(["/diff",c,r],{replaceUrl:!0})}},error:()=>this.error.set("Failed to load version list.")})}onFromChange(i){this.fromMajor.set(i),this.navigate(i,this.toMajor())}onToChange(i){this.toMajor.set(i),this.navigate(this.fromMajor(),i)}stepBoth(i){let e=this.versions(),t=e.findIndex(c=>c.angularMajor===this.fromMajor()),n=e.findIndex(c=>c.angularMajor===this.toMajor()),o=e[t+i],r=e[n+i];o&&r&&this.navigate(o.angularMajor,r.angularMajor)}canStepBoth(i){let e=this.versions(),t=e.findIndex(o=>o.angularMajor===this.fromMajor()),n=e.findIndex(o=>o.angularMajor===this.toMajor());return!!e[t+i]&&!!e[n+i]}isAtLatest(){let i=this.versions();return this.toMajor()===i[i.length-1]?.angularMajor}onFileSelect(i){this.selectedFile.set(i),this.treeOpen.set(!1);let e=this.fromMajor(),t=this.toMajor();this.router.navigate(["/diff",e,t,encodeURIComponent(i)])}jumpToLatest(){let i=this.versions();if(i.length<2)return;let e=i[i.length-1].angularMajor,t=i[i.length-2].angularMajor;this.navigate(t,e)}navigate(i,e){this.fromMajor.set(i),this.toMajor.set(e),this.selectedFile.set(null),this.router.navigate(["/diff",i,e]),this.loadDiff(i,e)}loadDiff(i,e){this.loading.set(!0),this.diffResult.set(null),this.fromSnapshot.set(null),this.toSnapshot.set(null),this.error.set(null),Ht({from:this.dataService.getSnapshot(i),to:this.dataService.getSnapshot(e)}).subscribe({next:({from:t,to:n})=>{this.fromSnapshot.set(t),this.toSnapshot.set(n),this.diffResult.set(this.diffService.compute(t,n)),this.loading.set(!1)},error:()=>{this.error.set("Failed to load snapshots."),this.loading.set(!1)}})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=H({type:a,selectors:[["app-diff-view"]],viewQuery:function(e,t){if(e&1&&X(ya,5),e&2){let n;O(n=L())&&(t.fileDiffPanel=n.first)}},decls:32,vars:11,consts:[["fileDiffPanel",""],[1,"diff-view"],[1,"controls-bar"],[1,"version-selectors"],["mat-icon-button","","matTooltip","Previous versions",3,"click","disabled"],["appearance","outline","subscriptSizing","dynamic",1,"version-select"],[3,"valueChange","value"],[3,"value"],[1,"arrow-icon"],["mat-icon-button","","matTooltip","Next versions",3,"click","disabled"],["mat-icon-button","","matTooltip","Jump to latest versions",3,"click","disabled"],["target","_blank","rel","noopener",1,"update-guide-link",3,"href"],[1,"summary-bar"],[1,"meta-cards"],[1,"loading-state"],[1,"error-state"],["animationDuration","0",1,"diff-tabs"],[1,"summary-added"],[1,"summary-removed"],[1,"summary-modified"],["label","From",3,"snapshot"],["label","To",3,"snapshot"],["diameter","40"],["label","Files"],[1,"diff-body"],["mat-mini-fab","",1,"mobile-tree-btn",3,"click"],[1,"tree-backdrop"],[1,"file-tree-panel"],[3,"fileSelected","diffResult","selectedFile"],[1,"file-diff-panel"],[3,"file","diffResult","fromMajor","toMajor"],["label","Dependencies"],[3,"from","to"],[1,"tree-backdrop",3,"click"]],template:function(e,t){e&1&&(s(0,"div",1)(1,"div",2)(2,"div",3)(3,"button",4),C("click",function(){return t.stepBoth(-1)}),s(4,"mat-icon"),m(5,"chevron_left"),d()(),s(6,"mat-form-field",5)(7,"mat-label"),m(8,"From"),d(),s(9,"mat-select",6),C("valueChange",function(o){return t.onFromChange(o)}),z(10,xa,2,2,"mat-option",7,Zn),d()(),s(12,"mat-icon",8),m(13,"arrow_forward"),d(),s(14,"mat-form-field",5)(15,"mat-label"),m(16,"To"),d(),s(17,"mat-select",6),C("valueChange",function(o){return t.onToChange(o)}),z(18,Ca,2,2,"mat-option",7,Zn),d()(),s(20,"button",9),C("click",function(){return t.stepBoth(1)}),s(21,"mat-icon"),m(22,"chevron_right"),d()(),s(23,"button",10),C("click",function(){return t.jumpToLatest()}),s(24,"mat-icon"),m(25,"last_page"),d()()(),_(26,ka,4,1,"a",11),d(),_(27,Ta,7,3,"div",12),_(28,Ma,3,2,"div",13),_(29,wa,4,0,"div",14),_(30,Ia,2,1,"div",15),_(31,Sa,14,11,"mat-tab-group",16),d()),e&2&&(l(3),y("disabled",!t.canStepBoth(-1)),l(6),y("value",t.fromMajor()),l(),W(t.versionsDesc()),l(7),y("value",t.toMajor()),l(),W(t.versionsDesc()),l(2),y("disabled",!t.canStepBoth(1)),l(3),y("disabled",t.isAtLatest()),l(3),v(t.fromMajor()&&t.toMajor()?26:-1),l(),v(t.summary()?27:-1),l(),v(t.fromSnapshot()&&t.toSnapshot()?28:-1),l(),v(t.loading()?29:-1),l(),v(t.error()?30:-1),l(),v(t.diffResult()?31:-1))},dependencies:[ne,Tn,_n,hn,kn,yn,xn,In,wn,Mn,fe,be,jn,xt,Nn,he,ge,Dn,Pn,et,tt,nt,En],styles:[".diff-view[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:hidden}.controls-bar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;padding:12px 16px 8px;flex-shrink:0;flex-wrap:wrap}.version-selectors[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.version-selectors[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]{flex-shrink:0}.version-select[_ngcontent-%COMP%]{width:160px}.arrow-icon[_ngcontent-%COMP%]{color:#fff6}.summary-bar[_ngcontent-%COMP%]{display:flex;gap:16px;padding:4px 16px 8px;font-size:.8rem;flex-shrink:0}.update-guide-link[_ngcontent-%COMP%]{display:flex;align-items:center;gap:3px;font-size:.78rem;color:#58a6ff;text-decoration:none;margin-left:auto}.update-guide-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px}.update-guide-link[_ngcontent-%COMP%]:hover{text-decoration:underline}.summary-added[_ngcontent-%COMP%]{color:#3fb950}.summary-removed[_ngcontent-%COMP%]{color:#f85149}.summary-modified[_ngcontent-%COMP%]{color:#d29922}.meta-cards[_ngcontent-%COMP%]{display:flex;gap:12px;padding:0 16px 8px;flex-shrink:0;flex-wrap:wrap}.loading-state[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;padding:40px 16px;color:#ffffff80}.error-state[_ngcontent-%COMP%]{padding:16px;color:#f85149}.diff-tabs[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;overflow:hidden}.diff-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body-wrapper{flex:1;overflow:hidden}.diff-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body-content{height:100%;overflow:hidden}.diff-body[_ngcontent-%COMP%]{display:flex;height:100%;overflow:hidden;position:relative}.file-tree-panel[_ngcontent-%COMP%]{width:280px;min-width:200px;flex-shrink:0;overflow-y:auto;border-right:1px solid #21262d}.tree-backdrop[_ngcontent-%COMP%]{display:none}.mobile-tree-btn[_ngcontent-%COMP%]{display:none;position:fixed;bottom:20px;right:20px;z-index:18}.file-diff-panel[_ngcontent-%COMP%]{flex:1;overflow:auto}@media(max-width:600px){.controls-bar[_ngcontent-%COMP%]{gap:8px;padding:8px 8px 4px}.version-selectors[_ngcontent-%COMP%]{gap:2px}.version-selectors[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]{--mdc-icon-button-state-layer-size: 32px;--mdc-icon-button-icon-size: 18px}.version-select[_ngcontent-%COMP%]{width:115px}.version-select[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper{min-width:unset}.mobile-tree-btn[_ngcontent-%COMP%]{display:flex}.file-tree-panel[_ngcontent-%COMP%]{position:fixed;top:56px;bottom:0;left:0;z-index:20;background:#0d1117;transform:translate(-100%);transition:transform .2s ease}.file-tree-panel.mobile-open[_ngcontent-%COMP%]{transform:translate(0)}.tree-backdrop[_ngcontent-%COMP%]{display:block;position:fixed;inset:56px 0 0;z-index:19;background:#00000080}}"]})};export{Yn as DiffViewComponent};
