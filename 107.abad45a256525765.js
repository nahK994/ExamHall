"use strict";(self.webpackChunkFrontend=self.webpackChunkFrontend||[]).push([[107],{449:(J,B,r)=>{r.d(B,{A8:()=>C,Ov:()=>A});var T=r(7579),D=r(5e3);class A{constructor(n=!1,o,h=!0){this._multiple=n,this._emitChanges=h,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new T.x,o&&o.length&&(n?o.forEach(O=>this._markSelected(O)):this._markSelected(o[0]),this._selectedToEmit.length=0)}get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}select(...n){this._verifyValueAssignment(n),n.forEach(o=>this._markSelected(o)),this._emitChangeEvent()}deselect(...n){this._verifyValueAssignment(n),n.forEach(o=>this._unmarkSelected(o)),this._emitChangeEvent()}toggle(n){this.isSelected(n)?this.deselect(n):this.select(n)}clear(){this._unmarkAll(),this._emitChangeEvent()}isSelected(n){return this._selection.has(n)}isEmpty(){return 0===this._selection.size}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){this.isSelected(n)||(this._multiple||this._unmarkAll(),this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){}}let C=(()=>{class m{constructor(){this._listeners=[]}notify(o,h){for(let O of this._listeners)O(o,h)}listen(o){return this._listeners.push(o),()=>{this._listeners=this._listeners.filter(h=>o!==h)}}ngOnDestroy(){this._listeners=[]}}return m.\u0275fac=function(o){return new(o||m)},m.\u0275prov=D.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},4107:(J,B,r)=>{r.d(B,{LD:()=>me,gD:()=>ue});var T=r(9776),D=r(9808),i=r(5e3),f=r(508),x=r(7322),V=r(5494),F=r(5664),A=r(3191),z=r(449),C=r(1159),k=r(3075),m=r(7579),n=r(9770),o=r(6451),h=r(8675),O=r(3900),v=r(5698),y=r(9300),M=r(4004),E=r(1884),g=r(2722),_=r(1777),w=r(226);const Q=["trigger"],$=["panel"];function q(l,u){if(1&l&&(i.TgZ(0,"span",8),i._uU(1),i.qZA()),2&l){const e=i.oxw();i.xp6(1),i.Oqu(e.placeholder)}}function ee(l,u){if(1&l&&(i.TgZ(0,"span",12),i._uU(1),i.qZA()),2&l){const e=i.oxw(2);i.xp6(1),i.Oqu(e.triggerValue)}}function te(l,u){1&l&&i.Hsn(0,0,["*ngSwitchCase","true"])}function ie(l,u){if(1&l&&(i.TgZ(0,"span",9),i.YNc(1,ee,2,1,"span",10),i.YNc(2,te,1,0,"ng-content",11),i.qZA()),2&l){const e=i.oxw();i.Q6J("ngSwitch",!!e.customTrigger),i.xp6(2),i.Q6J("ngSwitchCase",!0)}}function se(l,u){if(1&l){const e=i.EpF();i.TgZ(0,"div",13)(1,"div",14,15),i.NdJ("@transformPanel.done",function(s){return i.CHM(e),i.oxw()._panelDoneAnimatingStream.next(s.toState)})("keydown",function(s){return i.CHM(e),i.oxw()._handleKeydown(s)}),i.Hsn(3,1),i.qZA()()}if(2&l){const e=i.oxw();i.Q6J("@transformPanelWrap",void 0),i.xp6(1),i.Gre("mat-select-panel ",e._getPanelTheme(),""),i.Udp("transform-origin",e._transformOrigin)("font-size",e._triggerFontSize,"px"),i.Q6J("ngClass",e.panelClass)("@transformPanel",e.multiple?"showing-multiple":"showing"),i.uIk("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}const ne=[[["mat-select-trigger"]],"*"],ae=["mat-select-trigger","*"],N={transformPanelWrap:(0,_.X$)("transformPanelWrap",[(0,_.eR)("* => void",(0,_.IO)("@transformPanel",[(0,_.pV)()],{optional:!0}))]),transformPanel:(0,_.X$)("transformPanel",[(0,_.SB)("void",(0,_.oB)({transform:"scaleY(0.8)",minWidth:"100%",opacity:0})),(0,_.SB)("showing",(0,_.oB)({opacity:1,minWidth:"calc(100% + 32px)",transform:"scaleY(1)"})),(0,_.SB)("showing-multiple",(0,_.oB)({opacity:1,minWidth:"calc(100% + 64px)",transform:"scaleY(1)"})),(0,_.eR)("void => *",(0,_.jt)("120ms cubic-bezier(0, 0, 0.2, 1)")),(0,_.eR)("* => void",(0,_.jt)("100ms 25ms linear",(0,_.oB)({opacity:0})))])};let j=0;const R=256,X=new i.OlP("mat-select-scroll-strategy"),ce=new i.OlP("MAT_SELECT_CONFIG"),he={provide:X,deps:[T.aV],useFactory:function re(l){return()=>l.scrollStrategies.reposition()}};class _e{constructor(u,e){this.source=u,this.value=e}}const de=(0,f.Kr)((0,f.sb)((0,f.Id)((0,f.FD)(class{constructor(l,u,e,t,s){this._elementRef=l,this._defaultErrorStateMatcher=u,this._parentForm=e,this._parentFormGroup=t,this.ngControl=s}})))),pe=new i.OlP("MatSelectTrigger");let ge=(()=>{class l extends de{constructor(e,t,s,a,c,p,d,b,H,K,fe,ve,ye,P){var Y,W,U;super(c,a,d,b,K),this._viewportRuler=e,this._changeDetectorRef=t,this._ngZone=s,this._dir=p,this._parentFormField=H,this._liveAnnouncer=ye,this._defaultOptions=P,this._panelOpen=!1,this._compareWith=(S,G)=>S===G,this._uid="mat-select-"+j++,this._triggerAriaLabelledBy=null,this._destroy=new m.x,this._onChange=()=>{},this._onTouched=()=>{},this._valueId="mat-select-value-"+j++,this._panelDoneAnimatingStream=new m.x,this._overlayPanelClass=(null===(Y=this._defaultOptions)||void 0===Y?void 0:Y.overlayPanelClass)||"",this._focused=!1,this.controlType="mat-select",this._multiple=!1,this._disableOptionCentering=null!==(U=null===(W=this._defaultOptions)||void 0===W?void 0:W.disableOptionCentering)&&void 0!==U&&U,this.ariaLabel="",this.optionSelectionChanges=(0,n.P)(()=>{const S=this.options;return S?S.changes.pipe((0,h.O)(S),(0,O.w)(()=>(0,o.T)(...S.map(G=>G.onSelectionChange)))):this._ngZone.onStable.pipe((0,v.q)(1),(0,O.w)(()=>this.optionSelectionChanges))}),this.openedChange=new i.vpe,this._openedStream=this.openedChange.pipe((0,y.h)(S=>S),(0,M.U)(()=>{})),this._closedStream=this.openedChange.pipe((0,y.h)(S=>!S),(0,M.U)(()=>{})),this.selectionChange=new i.vpe,this.valueChange=new i.vpe,this.ngControl&&(this.ngControl.valueAccessor=this),null!=(null==P?void 0:P.typeaheadDebounceInterval)&&(this._typeaheadDebounceInterval=P.typeaheadDebounceInterval),this._scrollStrategyFactory=ve,this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=parseInt(fe)||0,this.id=this.id}get focused(){return this._focused||this._panelOpen}get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}get required(){var e,t,s,a;return null!==(a=null!==(e=this._required)&&void 0!==e?e:null===(s=null===(t=this.ngControl)||void 0===t?void 0:t.control)||void 0===s?void 0:s.hasValidator(k.kI.required))&&void 0!==a&&a}set required(e){this._required=(0,A.Ig)(e),this.stateChanges.next()}get multiple(){return this._multiple}set multiple(e){this._multiple=(0,A.Ig)(e)}get disableOptionCentering(){return this._disableOptionCentering}set disableOptionCentering(e){this._disableOptionCentering=(0,A.Ig)(e)}get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}get typeaheadDebounceInterval(){return this._typeaheadDebounceInterval}set typeaheadDebounceInterval(e){this._typeaheadDebounceInterval=(0,A.su)(e)}get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}ngOnInit(){this._selectionModel=new z.Ov(this.multiple),this.stateChanges.next(),this._panelDoneAnimatingStream.pipe((0,E.x)(),(0,g.R)(this._destroy)).subscribe(()=>this._panelDoneAnimating(this.panelOpen))}ngAfterContentInit(){this._initKeyManager(),this._selectionModel.changed.pipe((0,g.R)(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe((0,h.O)(null),(0,g.R)(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){const e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){const s=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?s.setAttribute("aria-labelledby",e):s.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(void 0!==this._previousControl&&null!==t.disabled&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){e.disabled&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this._typeaheadDebounceInterval)}ngOnDestroy(){this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._panelOpen=!0,this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck())}close(){this._panelOpen&&(this._panelOpen=!1,this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched())}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){var e,t;return this.multiple?(null===(e=this._selectionModel)||void 0===e?void 0:e.selected)||[]:null===(t=this._selectionModel)||void 0===t?void 0:t.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){const e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}_isRtl(){return!!this._dir&&"rtl"===this._dir.value}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){const t=e.keyCode,s=t===C.JH||t===C.LH||t===C.oh||t===C.SV,a=t===C.K5||t===C.L_,c=this._keyManager;if(!c.isTyping()&&a&&!(0,C.Vb)(e)||(this.multiple||e.altKey)&&s)e.preventDefault(),this.open();else if(!this.multiple){const p=this.selected;c.onKeydown(e);const d=this.selected;d&&p!==d&&this._liveAnnouncer.announce(d.viewValue,1e4)}}_handleOpenKeydown(e){const t=this._keyManager,s=e.keyCode,a=s===C.JH||s===C.LH,c=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(c||s!==C.K5&&s!==C.L_||!t.activeItem||(0,C.Vb)(e))if(!c&&this._multiple&&s===C.A&&e.ctrlKey){e.preventDefault();const p=this.options.some(d=>!d.disabled&&!d.selected);this.options.forEach(d=>{d.disabled||(p?d.select():d.deselect())})}else{const p=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==p&&t.activeItem._selectViaInteraction()}else e.preventDefault(),t.activeItem._selectViaInteraction()}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_onAttached(){this._overlayDir.positionChange.pipe((0,v.q)(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()})}_getPanelTheme(){return this._parentFormField?`mat-${this._parentFormField.color}`:""}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this._selectionModel.selected.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{const t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){const t=this.options.find(s=>{if(this._selectionModel.isSelected(s))return!1;try{return null!=s.value&&this._compareWith(s.value,e)}catch(a){return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return!!(e!==this._value||this._multiple&&Array.isArray(e))&&(this.options&&this._setSelectionByValue(e),this._value=e,!0)}_initKeyManager(){this._keyManager=new F.s1(this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withAllowedModifierKeys(["shiftKey"]),this._keyManager.tabOut.pipe((0,g.R)(this._destroy)).subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.pipe((0,g.R)(this._destroy)).subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){const e=(0,o.T)(this.options.changes,this._destroy);this.optionSelectionChanges.pipe((0,g.R)(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),(0,o.T)(...this.options.map(t=>t._stateChanges)).pipe((0,g.R)(e)).subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}_onSelect(e,t){const s=this._selectionModel.isSelected(e);null!=e.value||this._multiple?(s!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())):(e.deselect(),this._selectionModel.clear(),null!=this.value&&this._propagateChanges(e.value)),s!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){const e=this.options.toArray();this._selectionModel.sort((t,s)=>this.sortComparator?this.sortComparator(t,s,e):e.indexOf(t)-e.indexOf(s)),this.stateChanges.next()}}_propagateChanges(e){let t=null;t=this.multiple?this.selected.map(s=>s.value):this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){this._keyManager&&(this.empty?this._keyManager.setFirstItemActive():this._keyManager.setActiveItem(this._selectionModel.selected[0]))}_canOpen(){var e;return!this._panelOpen&&!this.disabled&&(null===(e=this.options)||void 0===e?void 0:e.length)>0}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){var e;if(this.ariaLabel)return null;const t=null===(e=this._parentFormField)||void 0===e?void 0:e.getLabelId();return this.ariaLabelledby?(t?t+" ":"")+this.ariaLabelledby:t}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){var e;if(this.ariaLabel)return null;const t=null===(e=this._parentFormField)||void 0===e?void 0:e.getLabelId();let s=(t?t+" ":"")+this._valueId;return this.ariaLabelledby&&(s+=" "+this.ariaLabelledby),s}_panelDoneAnimating(e){this.openedChange.emit(e)}setDescribedByIds(e){this._ariaDescribedby=e.join(" ")}onContainerClick(){this.focus(),this.open()}get shouldLabelFloat(){return this._panelOpen||!this.empty||this._focused&&!!this._placeholder}}return l.\u0275fac=function(e){return new(e||l)(i.Y36(V.rL),i.Y36(i.sBO),i.Y36(i.R0b),i.Y36(f.rD),i.Y36(i.SBq),i.Y36(w.Is,8),i.Y36(k.F,8),i.Y36(k.sg,8),i.Y36(x.G_,8),i.Y36(k.a5,10),i.$8M("tabindex"),i.Y36(X),i.Y36(F.Kd),i.Y36(ce,8))},l.\u0275dir=i.lG2({type:l,viewQuery:function(e,t){if(1&e&&(i.Gf(Q,5),i.Gf($,5),i.Gf(T.pI,5)),2&e){let s;i.iGM(s=i.CRH())&&(t.trigger=s.first),i.iGM(s=i.CRH())&&(t.panel=s.first),i.iGM(s=i.CRH())&&(t._overlayDir=s.first)}},inputs:{panelClass:"panelClass",placeholder:"placeholder",required:"required",multiple:"multiple",disableOptionCentering:"disableOptionCentering",compareWith:"compareWith",value:"value",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:"typeaheadDebounceInterval",sortComparator:"sortComparator",id:"id"},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},features:[i.qOj,i.TTD]}),l})(),ue=(()=>{class l extends ge{constructor(){super(...arguments),this._scrollTop=0,this._triggerFontSize=0,this._transformOrigin="top",this._offsetY=0,this._positions=[{originX:"start",originY:"top",overlayX:"start",overlayY:"top"},{originX:"start",originY:"bottom",overlayX:"start",overlayY:"bottom"}]}_calculateOverlayScroll(e,t,s){const a=this._getItemHeight();return Math.min(Math.max(0,a*e-t+a/2),s)}ngOnInit(){super.ngOnInit(),this._viewportRuler.change().pipe((0,g.R)(this._destroy)).subscribe(()=>{this.panelOpen&&(this._triggerRect=this.trigger.nativeElement.getBoundingClientRect(),this._changeDetectorRef.markForCheck())})}open(){super._canOpen()&&(super.open(),this._triggerRect=this.trigger.nativeElement.getBoundingClientRect(),this._triggerFontSize=parseInt(getComputedStyle(this.trigger.nativeElement).fontSize||"0"),this._calculateOverlayPosition(),this._ngZone.onStable.pipe((0,v.q)(1)).subscribe(()=>{this._triggerFontSize&&this._overlayDir.overlayRef&&this._overlayDir.overlayRef.overlayElement&&(this._overlayDir.overlayRef.overlayElement.style.fontSize=`${this._triggerFontSize}px`)}))}_scrollOptionIntoView(e){const t=(0,f.CB)(e,this.options,this.optionGroups),s=this._getItemHeight();this.panel.nativeElement.scrollTop=0===e&&1===t?0:(0,f.jH)((e+t)*s,s,this.panel.nativeElement.scrollTop,R)}_positioningSettled(){this._calculateOverlayOffsetX(),this.panel.nativeElement.scrollTop=this._scrollTop}_panelDoneAnimating(e){this.panelOpen?this._scrollTop=0:(this._overlayDir.offsetX=0,this._changeDetectorRef.markForCheck()),super._panelDoneAnimating(e)}_getChangeEvent(e){return new _e(this,e)}_calculateOverlayOffsetX(){const e=this._overlayDir.overlayRef.overlayElement.getBoundingClientRect(),t=this._viewportRuler.getViewportSize(),s=this._isRtl(),a=this.multiple?56:32;let c;if(this.multiple)c=40;else if(this.disableOptionCentering)c=16;else{let b=this._selectionModel.selected[0]||this.options.first;c=b&&b.group?32:16}s||(c*=-1);const p=0-(e.left+c-(s?a:0)),d=e.right+c-t.width+(s?0:a);p>0?c+=p+8:d>0&&(c-=d+8),this._overlayDir.offsetX=Math.round(c),this._overlayDir.overlayRef.updatePosition()}_calculateOverlayOffsetY(e,t,s){const a=this._getItemHeight(),c=(a-this._triggerRect.height)/2,p=Math.floor(R/a);let d;return this.disableOptionCentering?0:(d=0===this._scrollTop?e*a:this._scrollTop===s?(e-(this._getItemCount()-p))*a+(a-(this._getItemCount()*a-R)%a):t-a/2,Math.round(-1*d-c))}_checkOverlayWithinViewport(e){const t=this._getItemHeight(),s=this._viewportRuler.getViewportSize(),a=this._triggerRect.top-8,c=s.height-this._triggerRect.bottom-8,p=Math.abs(this._offsetY),b=Math.min(this._getItemCount()*t,R)-p-this._triggerRect.height;b>c?this._adjustPanelUp(b,c):p>a?this._adjustPanelDown(p,a,e):this._transformOrigin=this._getOriginBasedOnOption()}_adjustPanelUp(e,t){const s=Math.round(e-t);this._scrollTop-=s,this._offsetY-=s,this._transformOrigin=this._getOriginBasedOnOption(),this._scrollTop<=0&&(this._scrollTop=0,this._offsetY=0,this._transformOrigin="50% bottom 0px")}_adjustPanelDown(e,t,s){const a=Math.round(e-t);if(this._scrollTop+=a,this._offsetY+=a,this._transformOrigin=this._getOriginBasedOnOption(),this._scrollTop>=s)return this._scrollTop=s,this._offsetY=0,void(this._transformOrigin="50% top 0px")}_calculateOverlayPosition(){const e=this._getItemHeight(),t=this._getItemCount(),s=Math.min(t*e,R),c=t*e-s;let p;p=this.empty?0:Math.max(this.options.toArray().indexOf(this._selectionModel.selected[0]),0),p+=(0,f.CB)(p,this.options,this.optionGroups);const d=s/2;this._scrollTop=this._calculateOverlayScroll(p,d,c),this._offsetY=this._calculateOverlayOffsetY(p,d,c),this._checkOverlayWithinViewport(c)}_getOriginBasedOnOption(){const e=this._getItemHeight(),t=(e-this._triggerRect.height)/2;return`50% ${Math.abs(this._offsetY)-t+e/2}px 0px`}_getItemHeight(){return 3*this._triggerFontSize}_getItemCount(){return this.options.length+this.optionGroups.length}}return l.\u0275fac=function(){let u;return function(t){return(u||(u=i.n5z(l)))(t||l)}}(),l.\u0275cmp=i.Xpm({type:l,selectors:[["mat-select"]],contentQueries:function(e,t,s){if(1&e&&(i.Suo(s,pe,5),i.Suo(s,f.ey,5),i.Suo(s,f.K7,5)),2&e){let a;i.iGM(a=i.CRH())&&(t.customTrigger=a.first),i.iGM(a=i.CRH())&&(t.options=a),i.iGM(a=i.CRH())&&(t.optionGroups=a)}},hostAttrs:["role","combobox","aria-autocomplete","none","aria-haspopup","true",1,"mat-select"],hostVars:20,hostBindings:function(e,t){1&e&&i.NdJ("keydown",function(a){return t._handleKeydown(a)})("focus",function(){return t._onFocus()})("blur",function(){return t._onBlur()}),2&e&&(i.uIk("id",t.id)("tabindex",t.tabIndex)("aria-controls",t.panelOpen?t.id+"-panel":null)("aria-expanded",t.panelOpen)("aria-label",t.ariaLabel||null)("aria-required",t.required.toString())("aria-disabled",t.disabled.toString())("aria-invalid",t.errorState)("aria-describedby",t._ariaDescribedby||null)("aria-activedescendant",t._getAriaActiveDescendant()),i.ekj("mat-select-disabled",t.disabled)("mat-select-invalid",t.errorState)("mat-select-required",t.required)("mat-select-empty",t.empty)("mat-select-multiple",t.multiple))},inputs:{disabled:"disabled",disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matSelect"],features:[i._Bn([{provide:x.Eo,useExisting:l},{provide:f.HF,useExisting:l}]),i.qOj],ngContentSelectors:ae,decls:9,vars:12,consts:[["cdk-overlay-origin","",1,"mat-select-trigger",3,"click"],["origin","cdkOverlayOrigin","trigger",""],[1,"mat-select-value",3,"ngSwitch"],["class","mat-select-placeholder mat-select-min-line",4,"ngSwitchCase"],["class","mat-select-value-text",3,"ngSwitch",4,"ngSwitchCase"],[1,"mat-select-arrow-wrapper"],[1,"mat-select-arrow"],["cdk-connected-overlay","","cdkConnectedOverlayLockPosition","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayMinWidth","cdkConnectedOverlayOffsetY","backdropClick","attach","detach"],[1,"mat-select-placeholder","mat-select-min-line"],[1,"mat-select-value-text",3,"ngSwitch"],["class","mat-select-min-line",4,"ngSwitchDefault"],[4,"ngSwitchCase"],[1,"mat-select-min-line"],[1,"mat-select-panel-wrap"],["role","listbox","tabindex","-1",3,"ngClass","keydown"],["panel",""]],template:function(e,t){if(1&e&&(i.F$t(ne),i.TgZ(0,"div",0,1),i.NdJ("click",function(){return t.toggle()}),i.TgZ(3,"div",2),i.YNc(4,q,2,1,"span",3),i.YNc(5,ie,3,2,"span",4),i.qZA(),i.TgZ(6,"div",5),i._UZ(7,"div",6),i.qZA()(),i.YNc(8,se,4,14,"ng-template",7),i.NdJ("backdropClick",function(){return t.close()})("attach",function(){return t._onAttached()})("detach",function(){return t.close()})),2&e){const s=i.MAs(1);i.uIk("aria-owns",t.panelOpen?t.id+"-panel":null),i.xp6(3),i.Q6J("ngSwitch",t.empty),i.uIk("id",t._valueId),i.xp6(1),i.Q6J("ngSwitchCase",!0),i.xp6(1),i.Q6J("ngSwitchCase",!1),i.xp6(3),i.Q6J("cdkConnectedOverlayPanelClass",t._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",t._scrollStrategy)("cdkConnectedOverlayOrigin",s)("cdkConnectedOverlayOpen",t.panelOpen)("cdkConnectedOverlayPositions",t._positions)("cdkConnectedOverlayMinWidth",null==t._triggerRect?null:t._triggerRect.width)("cdkConnectedOverlayOffsetY",t._offsetY)}},directives:[T.xu,D.RF,D.n9,D.ED,T.pI,D.mk],styles:['.mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{height:16px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-form-field.mat-focused .mat-select-arrow{transform:translateX(0)}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}.mat-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}\n'],encapsulation:2,data:{animation:[N.transformPanelWrap,N.transformPanel]},changeDetection:0}),l})(),me=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=i.oAB({type:l}),l.\u0275inj=i.cJS({providers:[he],imports:[[D.ez,T.U8,f.Ng,f.BQ],V.ZD,x.lN,f.Ng,f.BQ]}),l})()}}]);