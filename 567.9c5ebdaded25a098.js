"use strict";(self.webpackChunkFrontend=self.webpackChunkFrontend||[]).push([[567],{4567:(Oe,y,r)=>{r.r(y),r.d(y,{UserModule:()=>xe});var d=r(9808),h=r(4259),l=r(5861),u=r(3075),e=r(5e3),p=r(4464),f=r(520),P=r(900);let x=(()=>{class i{constructor(t,n){this.http=t,this._appService=n}getUserFavourites(){var t=this;return(0,l.Z)(function*(){return yield(0,p.n)(t.http.get(t._appService.doamin+"/favourite-questions",t._appService.httpOptions))})()}getSubjects(){var t=this;return(0,l.Z)(function*(){return yield(0,p.n)(t.http.get(t._appService.doamin+"/subjects",t._appService.httpOptions))})()}deleteQuestionFromArchive(t){var n=this;return(0,l.Z)(function*(){let o="/favourite-questions/"+t;return yield(0,p.n)(n.http.delete(n._appService.doamin+o,n._appService.httpOptions))})()}getExamList(){var t=this;return(0,l.Z)(function*(){return yield(0,p.n)(t.http.get(t._appService.doamin+"/exams",t._appService.httpOptions))})()}getExam(t){var n=this;return(0,l.Z)(function*(){let o="/exams/"+t;return yield(0,p.n)(n.http.get(n._appService.doamin+o,n._appService.httpOptions))})()}getResult(t){var n=this;return(0,l.Z)(function*(){let o="/result/exams/"+t;return yield(0,p.n)(n.http.get(n._appService.doamin+o,n._appService.httpOptions))})()}createResult(t){var n=this;return(0,l.Z)(function*(){return yield(0,p.n)(n.http.post(n._appService.doamin+"/result/exams",t,n._appService.httpOptions))})()}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(f.eN),e.LFG(P.z))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var A=r(2764),C=r(3251),M=r(7322),k=r(4107),m=r(508),v=r(9224),G=r(5239),_=r(7423),T=r(5245);function E(i,s){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",17),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw().goToExam(a)}),e._uU(2),e.qZA(),e.BQk()}if(2&i){const t=s.$implicit;e.xp6(2),e.Oqu(null==t?null:t.name)}}function B(i,s){if(1&i&&(e.TgZ(0,"mat-option",14),e._uU(1),e.qZA()),2&i){const t=s.$implicit;e.Q6J("value",null==t?null:t.subjectId),e.xp6(1),e.Oqu(null==t?null:t.name)}}function D(i,s){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"mat-card",18)(2,"div",19),e._UZ(3,"question",20),e.TgZ(4,"button",21),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw().deleteFromArchive(a)}),e.TgZ(5,"mat-icon",22),e._uU(6,"delete"),e.qZA()()()(),e.BQk()}if(2&i){const t=s.$implicit;e.xp6(3),e.Q6J("question",t)}}let J=(()=>{class i{constructor(t,n,o){this._router=t,this._userService=n,this._activatedRoute=o,this.examList=[],this.questions=[],this.allSubjects=[],this.subject=new u.NI("")}ngOnInit(){var t=this;return(0,l.Z)(function*(){t.examList=yield t._userService.getExamList(),t.allSubjects=yield t._userService.getUserFavourites();let n=[];for(let o of t.allSubjects)for(let a of o.questions)n.push(a);t.userArchivedQuestions=n,t.questions=n,t.subject.valueChanges.subscribe(o=>{if(""===o)return void(t.questions=t.userArchivedQuestions);let a=[];for(let c of t.userArchivedQuestions)c.subject===o&&a.push(c);t.questions=a})})()}goModelTests(){this._router.navigate(["model-tests"])}goToFavourite(){this._router.navigate(["favourites"])}goToExam(t){this._router.navigate(["exam",t.examId],{relativeTo:this._activatedRoute})}deleteFromArchive(t){var n=this;return(0,l.Z)(function*(){yield n._userService.deleteQuestionFromArchive(t.questionId);const o=n.questions.indexOf(t);o>-1&&n.questions.splice(o,1)})()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(h.F0),e.Y36(x),e.Y36(h.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-home"]],decls:32,vars:5,consts:[[1,"user-home"],["label","Exam Section"],[1,"tab-section"],[1,"header"],[1,"text"],[1,"title"],[1,"sub-title"],[1,"content"],[4,"ngFor","ngForOf"],["label","Question Section"],[1,"questions-item"],[1,"subject-select"],["appearance","outline"],[3,"formControl"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"list"],[1,"exam-item",3,"click"],[1,"card"],[1,"card-content"],[3,"question"],["mat-icon-button","",3,"click"],[2,"color","#855646"]],template:function(t,n){1&t&&(e.TgZ(0,"page-container")(1,"mat-tab-group",0)(2,"mat-tab",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5),e._uU(7,"Exam Section"),e.qZA(),e.TgZ(8,"div",6),e._uU(9,"Here you can see all exam information"),e.qZA()()(),e.TgZ(10,"div",7),e.YNc(11,E,3,1,"ng-container",8),e.qZA()()(),e.TgZ(12,"mat-tab",9)(13,"div",2)(14,"div",3)(15,"div",4)(16,"div",5),e._uU(17,"Archived question section"),e.qZA(),e.TgZ(18,"div",6),e._uU(19,"Here you can see all archived question information"),e.qZA()()(),e.TgZ(20,"div",7)(21,"div",10)(22,"div",11)(23,"mat-form-field",12)(24,"mat-label"),e._uU(25,"Subject"),e.qZA(),e.TgZ(26,"mat-select",13)(27,"mat-option",14),e._uU(28,"All"),e.qZA(),e.YNc(29,B,2,2,"mat-option",15),e.qZA()()(),e.TgZ(30,"div",16),e.YNc(31,D,7,1,"ng-container",8),e.qZA()()()()()()()),2&t&&(e.xp6(11),e.Q6J("ngForOf",n.examList),e.xp6(15),e.Q6J("formControl",n.subject),e.xp6(1),e.Q6J("value",""),e.xp6(2),e.Q6J("ngForOf",n.allSubjects),e.xp6(2),e.Q6J("ngForOf",n.questions))},directives:[A.G,C.SP,C.uX,d.sg,M.KE,M.hX,k.gD,u.JJ,u.oH,m.ey,v.a8,G.Y,_.lW,T.Hw],styles:[".user-home[_ngcontent-%COMP%]{width:80%}.user-home[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:16px}.user-home[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;height:100px}.user-home[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:12px}.user-home[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:red;font-size:28px;font-weight:900}.user-home[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;row-gap:16px;column-gap:16px}.user-home[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .exam-item[_ngcontent-%COMP%]{padding:20px 30px;width:15%;height:200px;border-radius:5%;color:#455a64;font-size:18px;cursor:pointer;background-color:#fff;box-shadow:2px 3px 6px #00000040}.user-home[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .questions-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:40px;width:100%}.user-home[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .questions-item[_ngcontent-%COMP%]   .subject-select[_ngcontent-%COMP%]{display:flex;justify-content:center}.user-home[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .questions-item[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;column-gap:16px;row-gap:16px;width:100%}.user-home[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .questions-item[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:500px}.user-home[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .questions-item[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]{display:flex}"]}),i})();var j=r(9506),L=r(8966);function N(i,s){if(1&i&&(e.ynx(0),e.TgZ(1,"mat-card",7)(2,"h1"),e._uU(3),e.qZA(),e.TgZ(4,"div",8)(5,"div",9),e._uU(6,"Marks"),e.qZA(),e.TgZ(7,"div",10),e._uU(8),e.qZA()(),e.TgZ(9,"div",8)(10,"div",9),e._uU(11,"Number of currect answers"),e.qZA(),e.TgZ(12,"div",10),e._uU(13),e.qZA()(),e.TgZ(14,"div",8)(15,"div",9),e._uU(16,"Number of incurrect answers"),e.qZA(),e.TgZ(17,"div",10),e._uU(18),e.qZA()()(),e.BQk()),2&i){const t=s.$implicit;e.xp6(3),e.Oqu(null==t||null==t.subject?null:t.subject.name),e.xp6(5),e.Oqu(null==t?null:t.marks),e.xp6(5),e.Oqu(null==t?null:t.numberOfCorrectAnswer),e.xp6(5),e.Oqu(null==t?null:t.numberOfIncorrectAnswer)}}function Y(i,s){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",3),e.YNc(2,N,19,4,"ng-container",4),e.TgZ(3,"div",5)(4,"button",6),e.NdJ("click",function(){return e.CHM(t),e.oxw().seeRankList()}),e._uU(5,"Rank List"),e.qZA()()(),e.BQk()}if(2&i){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",null==t.result?null:t.result.userResult)}}let R=(()=>{class i{constructor(t,n,o,a){this._activateRoute=t,this._userService=n,this._dialog=o,this._router=a}ngOnInit(){var t=this;return(0,l.Z)(function*(){t.examId=Number(t._activateRoute.snapshot.params.examId),t.result=yield t._userService.getResult(t.examId),t.exam=yield t._userService.getExam(t.examId)})()}submitAnswer(t){var n=this;return(0,l.Z)(function*(){t.examId=n.examId,yield n._userService.createResult(t),n._router.navigate(["model-tests"])})()}seeRankList(){this._dialog.open(j.Q,{data:this.result.rankList})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(h.gz),e.Y36(x),e.Y36(L.uw),e.Y36(h.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-model-test-details"]],decls:4,vars:4,consts:[[3,"returnUrl"],[4,"ngIf"],[3,"canSubmit","exam","submitAnswer"],[1,"result-view"],[4,"ngFor","ngForOf"],[2,"margin","40px"],["mat-raised-button","",3,"click"],[1,"item"],[1,"details"],[1,"name"],[1,"number"]],template:function(t,n){1&t&&(e.TgZ(0,"page-container",0),e.YNc(1,Y,6,1,"ng-container",1),e.ynx(2),e.TgZ(3,"exam-paper",2),e.NdJ("submitAnswer",function(a){return n.submitAnswer(a)}),e.qZA(),e.BQk(),e.qZA()),2&t&&(e.Q6J("returnUrl","user"),e.xp6(1),e.Q6J("ngIf",null==n.result||null==n.result.userResult?null:n.result.userResult.length),e.xp6(2),e.Q6J("canSubmit",0==(null==n.result||null==n.result.userResult?null:n.result.userResult.length))("exam",n.exam))},styles:[".result-view[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;row-gap:12px;width:100%}.result-view[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{width:450px;color:#455a64;display:flex;flex-direction:column;column-gap:12px;row-gap:12px;font-size:20px}.result-view[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.result-view[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{width:80%}.result-view[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{width:15%;text-align:end}"]}),i})();const H=[{path:"",component:J},{path:"exam/:examId",component:R}];let z=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[h.Bz.forChild(H)],h.Bz]}),i})();var $=r(7531),V=r(2569),X=r(1192),W=r(4050);function K(i,s){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"question-item",3),e.NdJ("answerOut",function(o){return e.CHM(t),e.oxw().updateAnswerSheet(o)}),e.qZA(),e.BQk()}if(2&i){const t=s.$implicit,n=e.oxw();e.xp6(1),e.Q6J("canSubmit",n.canSubmit)("question",t)}}function ee(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"button",4),e.NdJ("click",function(){return e.CHM(t),e.oxw().submit()}),e._uU(1,"submit"),e.qZA()}}let Z=(()=>{class i{constructor(){this.answers=[],this.questions=[],this.submitAnswer=new e.vpe}set setExam(t){var n;if(t){this.exam=t,this.questions=null===(n=this.exam)||void 0===n?void 0:n.questions;for(let o of this.questions)this.answers.push({answer:"",questionId:o.questionId})}}set setCanSubmit(t){this.canSubmit=t}ngOnInit(){}updateAnswerSheet(t){for(let n of this.answers)t.questionId===n.questionId&&(n.answer=t.answer)}submit(){this.submitAnswer.emit({answerSheet:this.answers})}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["exam-paper"]],inputs:{setExam:["exam","setExam"],setCanSubmit:["canSubmit","setCanSubmit"]},outputs:{submitAnswer:"submitAnswer"},decls:3,vars:2,consts:[[1,"exam-paper"],[4,"ngFor","ngForOf"],["mat-raised-button","",3,"click",4,"ngIf"],[3,"canSubmit","question","answerOut"],["mat-raised-button","",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.YNc(1,K,2,2,"ng-container",1),e.YNc(2,ee,2,0,"button",2),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",null==n.exam?null:n.exam.questions),e.xp6(1),e.Q6J("ngIf",n.canSubmit))},styles:[".exam-paper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%;row-gap:28px}"]}),i})(),w=(()=>{class i{constructor(t,n){this.http=t,this._appService=n}markQuestionAsFavourite(t){var n=this;return(0,l.Z)(function*(){let o="/favourite-questions/"+t;return yield(0,p.n)(n.http.put(n._appService.doamin+o,{},n._appService.httpOptions))})()}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(f.eN),e.LFG(P.z))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var g=r(3191),te=r(6360),ne=r(5664),ie=r(449);const oe=["input"],se=function(i){return{enterDuration:i}},ae=["*"],re=new e.OlP("mat-radio-default-options",{providedIn:"root",factory:function le(){return{color:"accent"}}});let S=0;const ue={provide:u.JU,useExisting:(0,e.Gpc)(()=>U),multi:!0};class I{constructor(s,t){this.source=s,this.value=t}}const F=new e.OlP("MatRadioGroup");let ce=(()=>{class i{constructor(t){this._changeDetector=t,this._value=null,this._name="mat-radio-group-"+S++,this._selected=null,this._isInitialized=!1,this._labelPosition="after",this._disabled=!1,this._required=!1,this._controlValueAccessorChangeFn=()=>{},this.onTouched=()=>{},this.change=new e.vpe}get name(){return this._name}set name(t){this._name=t,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(t){this._labelPosition="before"===t?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(t){this._value!==t&&(this._value=t,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(t){this._selected=t,this.value=t?t.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(t){this._disabled=(0,g.Ig)(t),this._markRadiosForCheck()}get required(){return this._required}set required(t){this._required=(0,g.Ig)(t),this._markRadiosForCheck()}ngAfterContentInit(){this._isInitialized=!0}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(t=>{t.name=this.name,t._markForCheck()})}_updateSelectedRadioFromValue(){this._radios&&(null===this._selected||this._selected.value!==this._value)&&(this._selected=null,this._radios.forEach(n=>{n.checked=this.value===n.value,n.checked&&(this._selected=n)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new I(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(t=>t._markForCheck())}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetector.markForCheck()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.sBO))},i.\u0275dir=e.lG2({type:i,inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:"disabled",required:"required"},outputs:{change:"change"}}),i})(),U=(()=>{class i extends ce{}return i.\u0275fac=function(){let s;return function(n){return(s||(s=e.n5z(i)))(n||i)}}(),i.\u0275dir=e.lG2({type:i,selectors:[["mat-radio-group"]],contentQueries:function(t,n,o){if(1&t&&e.Suo(o,Q,5),2&t){let a;e.iGM(a=e.CRH())&&(n._radios=a)}},hostAttrs:["role","radiogroup",1,"mat-radio-group"],exportAs:["matRadioGroup"],features:[e._Bn([ue,{provide:F,useExisting:i}]),e.qOj]}),i})();class de{constructor(s){this._elementRef=s}}const pe=(0,m.Kr)((0,m.sb)(de));let me=(()=>{class i extends pe{constructor(t,n,o,a,c,O,q,b){super(n),this._changeDetector=o,this._focusMonitor=a,this._radioDispatcher=c,this._providerOverride=q,this._uniqueId="mat-radio-"+ ++S,this.id=this._uniqueId,this.change=new e.vpe,this._checked=!1,this._value=null,this._removeUniqueSelectionListener=()=>{},this.radioGroup=t,this._noopAnimations="NoopAnimations"===O,b&&(this.tabIndex=(0,g.su)(b,0)),this._removeUniqueSelectionListener=c.listen((Ce,Me)=>{Ce!==this.id&&Me===this.name&&(this.checked=!1)})}get checked(){return this._checked}set checked(t){const n=(0,g.Ig)(t);this._checked!==n&&(this._checked=n,n&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!n&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),n&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(t){this._value!==t&&(this._value=t,null!==this.radioGroup&&(this.checked||(this.checked=this.radioGroup.value===t),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(t){this._labelPosition=t}get disabled(){return this._disabled||null!==this.radioGroup&&this.radioGroup.disabled}set disabled(t){this._setDisabled((0,g.Ig)(t))}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(t){this._required=(0,g.Ig)(t)}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._providerOverride&&this._providerOverride.color||"accent"}set color(t){this._color=t}get inputId(){return`${this.id||this._uniqueId}-input`}focus(t,n){n?this._focusMonitor.focusVia(this._inputElement,n,t):this._inputElement.nativeElement.focus(t)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name)}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{!t&&this.radioGroup&&this.radioGroup._touch()})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new I(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputClick(t){t.stopPropagation()}_onInputInteraction(t){if(t.stopPropagation(),!this.checked&&!this.disabled){const n=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),n&&this.radioGroup._emitChangeEvent())}}_setDisabled(t){this._disabled!==t&&(this._disabled=t,this._changeDetector.markForCheck())}_updateTabIndex(){var t;const n=this.radioGroup;let o;if(o=n&&n.selected&&!this.disabled?n.selected===this?this.tabIndex:-1:this.tabIndex,o!==this._previousTabIndex){const a=null===(t=this._inputElement)||void 0===t?void 0:t.nativeElement;a&&(a.setAttribute("tabindex",o+""),this._previousTabIndex=o)}}}return i.\u0275fac=function(t){e.$Z()},i.\u0275dir=e.lG2({type:i,viewQuery:function(t,n){if(1&t&&e.Gf(oe,5),2&t){let o;e.iGM(o=e.CRH())&&(n._inputElement=o.first)}},inputs:{id:"id",name:"name",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"],checked:"checked",value:"value",labelPosition:"labelPosition",disabled:"disabled",required:"required",color:"color"},outputs:{change:"change"},features:[e.qOj]}),i})(),Q=(()=>{class i extends me{constructor(t,n,o,a,c,O,q,b){super(t,n,o,a,c,O,q,b)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(F,8),e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(ne.tE),e.Y36(ie.A8),e.Y36(te.Qb,8),e.Y36(re,8),e.$8M("tabindex"))},i.\u0275cmp=e.Xpm({type:i,selectors:[["mat-radio-button"]],hostAttrs:[1,"mat-radio-button"],hostVars:17,hostBindings:function(t,n){1&t&&e.NdJ("focus",function(){return n._inputElement.nativeElement.focus()}),2&t&&(e.uIk("tabindex",null)("id",n.id)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),e.ekj("mat-radio-checked",n.checked)("mat-radio-disabled",n.disabled)("_mat-animation-noopable",n._noopAnimations)("mat-primary","primary"===n.color)("mat-accent","accent"===n.color)("mat-warn","warn"===n.color))},inputs:{disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matRadioButton"],features:[e.qOj],ngContentSelectors:ae,decls:13,vars:19,consts:[[1,"mat-radio-label"],["label",""],[1,"mat-radio-container"],[1,"mat-radio-outer-circle"],[1,"mat-radio-inner-circle"],["type","radio",1,"mat-radio-input",3,"id","checked","disabled","required","change","click"],["input",""],["mat-ripple","",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered","matRippleRadius","matRippleAnimation"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mat-radio-label-content"],[2,"display","none"]],template:function(t,n){if(1&t&&(e.F$t(),e.TgZ(0,"label",0,1)(2,"span",2),e._UZ(3,"span",3)(4,"span",4),e.TgZ(5,"input",5,6),e.NdJ("change",function(a){return n._onInputInteraction(a)})("click",function(a){return n._onInputClick(a)}),e.qZA(),e.TgZ(7,"span",7),e._UZ(8,"span",8),e.qZA()(),e.TgZ(9,"span",9)(10,"span",10),e._uU(11,"\xa0"),e.qZA(),e.Hsn(12),e.qZA()()),2&t){const o=e.MAs(1);e.uIk("for",n.inputId),e.xp6(5),e.Q6J("id",n.inputId)("checked",n.checked)("disabled",n.disabled)("required",n.required),e.uIk("name",n.name)("value",n.value)("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedby),e.xp6(2),e.Q6J("matRippleTrigger",o)("matRippleDisabled",n._isRippleDisabled())("matRippleCentered",!0)("matRippleRadius",20)("matRippleAnimation",e.VKq(17,se,n._noopAnimations?0:150)),e.xp6(2),e.ekj("mat-radio-label-before","before"==n.labelPosition)}},directives:[m.wG],styles:[".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;opacity:0;transition:transform ease 280ms,background-color ease 280ms,opacity linear 1ms 280ms;width:20px;transform:scale(0.001);-webkit-print-color-adjust:exact;color-adjust:exact}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5);opacity:1;transition:transform ease 280ms,background-color ease 280ms}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-label-content{-webkit-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none;top:0;left:0}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{opacity:0;position:absolute;top:0;left:0;margin:0;width:100%;height:100%;cursor:inherit;z-index:-1}.cdk-high-contrast-active .mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-ripple,.cdk-high-contrast-active .mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-ripple{outline:solid 3px}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"],encapsulation:2,changeDetection:0}),i})(),he=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[m.si,m.BQ],m.BQ]}),i})();function _e(i,s){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",6),e.NdJ("click",function(){return e.CHM(t),e.oxw().markAsFavourite()}),e._uU(2,"mark as favourite"),e.qZA(),e.BQk()}}function ge(i,s){1&i&&(e.TgZ(0,"div",7),e._uU(1,"Already archived"),e.qZA())}let fe=(()=>{class i{constructor(t){this._examPaperService=t,this.archived=!1,this.answerOut=new e.vpe,this.answer=new u.NI("")}set setQuestion(t){!t||(this.question=t)}set setCanSubmit(t){this.canSubmit=t}ngOnInit(){this.answer.valueChanges.subscribe(t=>{var n;this.answerOut.emit({questionId:null===(n=this.question)||void 0===n?void 0:n.questionId,answer:t})})}markAsFavourite(){var t=this;return(0,l.Z)(function*(){if(t.question)try{yield t._examPaperService.markQuestionAsFavourite(t.question.questionId)}catch(n){}t.archived=!0})()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(w))},i.\u0275cmp=e.Xpm({type:i,selectors:[["question-item"]],inputs:{setQuestion:["question","setQuestion"],setCanSubmit:["canSubmit","setCanSubmit"]},outputs:{answerOut:"answerOut"},decls:20,vars:22,consts:[[1,"question-item"],[1,"question-text"],[4,"ngIf","ngIfElse"],["Archived",""],[1,"radio-style",3,"formControl"],[1,"option-text",3,"value","disabled"],["mat-stroked-button","",3,"click"],[2,"color","#855646","font-size","12px"]],template:function(t,n){if(1&t&&(e.TgZ(0,"mat-card",0)(1,"div",1)(2,"div"),e._uU(3),e.qZA(),e.YNc(4,_e,3,0,"ng-container",2),e.YNc(5,ge,2,0,"ng-template",null,3,e.W1O),e.qZA(),e.TgZ(7,"mat-radio-group",4)(8,"mat-radio-button",5),e._uU(9),e.qZA(),e.TgZ(10,"mat-radio-button",5),e._uU(11),e.qZA(),e.TgZ(12,"mat-radio-button",5),e._uU(13),e.qZA(),e.TgZ(14,"mat-radio-button",5),e._uU(15),e.qZA(),e.TgZ(16,"mat-radio-button",5),e._uU(17),e.qZA(),e.TgZ(18,"mat-radio-button",5),e._uU(19),e.qZA()()()),2&t){const o=e.MAs(6);e.xp6(3),e.Oqu(null==n.question?null:n.question.questionText),e.xp6(1),e.Q6J("ngIf",!n.archived)("ngIfElse",o),e.xp6(3),e.Q6J("formControl",n.answer),e.xp6(1),e.Q6J("value",null==n.question?null:n.question.option1)("disabled",!n.canSubmit),e.xp6(1),e.hij(" ",null==n.question?null:n.question.option1," "),e.xp6(1),e.Q6J("value",null==n.question?null:n.question.option2)("disabled",!n.canSubmit),e.xp6(1),e.hij(" ",null==n.question?null:n.question.option2," "),e.xp6(1),e.Q6J("value",null==n.question?null:n.question.option3)("disabled",!n.canSubmit),e.xp6(1),e.hij(" ",null==n.question?null:n.question.option3," "),e.xp6(1),e.Q6J("value",null==n.question?null:n.question.option4)("disabled",!n.canSubmit),e.xp6(1),e.hij(" ",null==n.question?null:n.question.option4," "),e.xp6(1),e.Q6J("value",null==n.question?null:n.question.option5)("disabled",!n.canSubmit),e.xp6(1),e.hij(" ",null==n.question?null:n.question.option5," "),e.xp6(1),e.Q6J("value",null==n.question?null:n.question.option6)("disabled",!n.canSubmit),e.xp6(1),e.hij(" ",null==n.question?null:n.question.option6," ")}},directives:[v.a8,d.O5,_.lW,U,u.JJ,u.oH,Q],styles:[".question-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:16px;color:#455a64;width:500px}.question-item[_ngcontent-%COMP%]   .question-text[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;column-gap:20px;font-size:20px}.question-item[_ngcontent-%COMP%]   .radio-style[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:8px}.question-item[_ngcontent-%COMP%]   .radio-style[_ngcontent-%COMP%]   .option-text[_ngcontent-%COMP%]{font-size:14px}"]}),i})(),ve=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[w],imports:[[d.ez,he,u.UX,_.ot,f.JF,v.QW]]}),i})();e.B6R(Z,[d.sg,fe,d.O5,_.lW],[]);var be=r(9713);let xe=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[{provide:f.TP,useClass:V.b,multi:!0},x],imports:[[d.ez,z,_.ot,f.JF,u.UX,$.c,v.QW,T.Ps,k.LD,M.lN,W.g,X.y,C.Nh,ve,be.j]]}),i})();e.B6R(R,[A.G,d.O5,d.sg,v.a8,_.lW,Z],[])}}]);