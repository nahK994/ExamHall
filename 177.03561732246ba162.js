"use strict";(self.webpackChunkFrontend=self.webpackChunkFrontend||[]).push([[177],{2177:(D,b,a)=>{a.r(b),a.d(b,{CreateExamModule:()=>H});var d=a(9808),T=a(4259),u=a(5861),r=a(3075),e=a(5e3),g=a(4464),S=a(520),y=a(900);let Z=(()=>{class n{constructor(t,o){this.http=t,this._appService=o}getTopics(){var t=this;return(0,u.Z)(function*(){return yield(0,g.n)(t.http.get(t._appService.doamin+"/topics",t._appService.httpOptions))})()}getQuestions(){var t=this;return(0,u.Z)(function*(){return yield(0,g.n)(t.http.get(t._appService.doamin+"/questions",t._appService.httpOptions))})()}createTopic(t){var o=this;return(0,u.Z)(function*(){return yield(0,g.n)(o.http.post(o._appService.doamin+"/topics/create",t,o._appService.httpOptions))})()}createQuestion(t){var o=this;return(0,u.Z)(function*(){return yield(0,g.n)(o.http.post(o._appService.doamin+"/questions/create",t,o._appService.httpOptions))})()}createExam(t){var o=this;return(0,u.Z)(function*(){return yield(0,g.n)(o.http.post(o._appService.doamin+"/exams/create",t,o._appService.httpOptions))})()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(S.eN),e.LFG(y.z))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var Q=a(2764),f=a(7423),h=a(9224),_=a(4106),x=a(7531),C=a(5245);function U(n,l){1&n&&(e.ynx(0),e.TgZ(1,"mat-icon"),e._uU(2,"add"),e.qZA(),e.BQk())}function I(n,l){1&n&&(e.TgZ(0,"mat-icon"),e._uU(1,"remove"),e.qZA())}let E=(()=>{class n{constructor(){this.isSelected=!1,this.selectTopic=new e.vpe,this.deSelectTopic=new e.vpe}takeAction(){var t,o;this.isSelected=!this.isSelected,this.isSelected?this.selectTopic.emit(null===(t=this.topic)||void 0===t?void 0:t.topicId):this.deSelectTopic.emit(null===(o=this.topic)||void 0===o?void 0:o.topicId)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["topic-selector"]],inputs:{topic:"topic"},outputs:{selectTopic:"selectTopic",deSelectTopic:"deSelectTopic"},decls:7,vars:3,consts:[["mat-stroked-button","",3,"click"],[1,"topic-selector"],[4,"ngIf","ngIfElse"],["isSelectedTemp",""]],template:function(t,o){if(1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return o.takeAction()}),e.TgZ(1,"div",1)(2,"div"),e._uU(3),e.qZA(),e.YNc(4,U,3,0,"ng-container",2),e.YNc(5,I,2,0,"ng-template",null,3,e.W1O),e.qZA()()),2&t){const i=e.MAs(6);e.xp6(3),e.Oqu(null==o.topic?null:o.topic.name),e.xp6(1),e.Q6J("ngIf",!o.isSelected)("ngIfElse",i)}},directives:[f.lW,d.O5,C.Hw],styles:[".topic-selector[_ngcontent-%COMP%]{display:flex;column-gap:12px;align-items:center}"]}),n})();var A=a(4107),O=a(508),N=a(5239);function F(n,l){1&n&&(e.ynx(0),e.TgZ(1,"mat-icon"),e._uU(2,"add"),e.qZA(),e.BQk())}function J(n,l){1&n&&(e.TgZ(0,"mat-icon"),e._uU(1,"remove"),e.qZA())}let M=(()=>{class n{constructor(t){this._fb=t,this.isSelected=!1,this.selectQuestion=new e.vpe,this.deSelectQuestion=new e.vpe,this.form=this._fb.group({isChecked:!1})}takeAction(){var t,o;this.isSelected=!this.isSelected,this.isSelected?this.selectQuestion.emit(null===(t=this.question)||void 0===t?void 0:t.questionId):this.deSelectQuestion.emit(null===(o=this.question)||void 0===o?void 0:o.questionId)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(r.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["question-selector"]],inputs:{isSelected:"isSelected",question:"question"},outputs:{selectQuestion:"selectQuestion",deSelectQuestion:"deSelectQuestion"},decls:6,vars:3,consts:[[1,"question-selector"],[3,"question"],["mat-icon-button","",3,"click"],[4,"ngIf","ngIfElse"],["isSelectedTemp",""]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0),e._UZ(1,"question",1),e.TgZ(2,"button",2),e.NdJ("click",function(){return o.takeAction()}),e.YNc(3,F,3,0,"ng-container",3),e.YNc(4,J,2,0,"ng-template",null,4,e.W1O),e.qZA()()),2&t){const i=e.MAs(5);e.xp6(1),e.Q6J("question",o.question),e.xp6(2),e.Q6J("ngIf",!o.isSelected)("ngIfElse",i)}},directives:[N.Y,f.lW,d.O5,C.Hw],styles:[".question-selector[_ngcontent-%COMP%]{display:flex;column-gap:12px}"]}),n})();function k(n,l){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"topic-selector",14),e.NdJ("selectTopic",function(i){return e.CHM(t),e.oxw().selectTopic(i)})("deSelectTopic",function(i){return e.CHM(t),e.oxw().deSelectTopic(i)}),e.qZA(),e.BQk()}if(2&n){const t=l.$implicit;e.xp6(1),e.Q6J("topic",t)}}function w(n,l){if(1&n&&(e.TgZ(0,"mat-option",17),e._uU(1),e.qZA()),2&n){const t=l.$implicit;e.Q6J("value",null==t?null:t.topicId),e.xp6(1),e.Oqu(null==t?null:t.name)}}function P(n,l){if(1&n&&(e.TgZ(0,"mat-form-field",6)(1,"mat-label"),e._uU(2,"Select question topic"),e.qZA(),e.TgZ(3,"mat-select",15),e.YNc(4,w,2,2,"mat-option",16),e.qZA()()),2&n){const t=e.oxw();e.xp6(3),e.Q6J("formControl",t.topic),e.xp6(1),e.Q6J("ngForOf",t.topicListForQuestionSelection)}}function Y(n,l){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"question-selector",18),e.NdJ("selectQuestion",function(i){return e.CHM(t),e.oxw().selectQuestion(i)})("deSelectQuestion",function(i){return e.CHM(t),e.oxw().deSelectQuestion(i)}),e.qZA(),e.BQk()}if(2&n){const t=l.$implicit,o=e.oxw();e.xp6(1),e.Q6J("isSelected",o.isSelectedQuestion(t))("question",t)}}function G(n,l){if(1&n&&(e.TgZ(0,"mat-option",23),e._uU(1),e.qZA()),2&n){const t=l.$implicit;e.Q6J("value",null==t?null:t.topicId),e.xp6(1),e.Oqu(null==t?null:t.name)}}const R=[{path:"",component:(()=>{class n{constructor(t,o,i,c){this._activateRoute=t,this._router=o,this._createExamService=i,this._fb=c,this.allTopics=[],this.questions=[],this.allQuestions=[],this.topic=new r.NI(""),this.topicListForQuestionSelection=[],this.form=this._fb.group({name:["",[r.kI.required]],numberForCorrectAnswer:[,[r.kI.required]],numberForIncorrectAnswer:[,[r.kI.required]],numberOfSeats:[,[r.kI.required]],questions:[[]],topics:[[]]})}ngOnInit(){var t=this;return(0,u.Z)(function*(){t.allTopics=yield t._createExamService.getTopics(),t.allQuestions=yield t._createExamService.getQuestions(),t.topic.valueChanges.subscribe(o=>{let i=[];for(let c of t.allQuestions)c.topicId===o&&i.push(c);t.questions=i})})()}createTopic(){this._router.navigate(["create-topic"],{relativeTo:this._activateRoute})}createQuestion(){this._router.navigate(["create-question"],{relativeTo:this._activateRoute})}selectTopic(t){var o,i;let c=null===(o=this.form.get("topics"))||void 0===o?void 0:o.value;c.push(t),null===(i=this.form.get("topics"))||void 0===i||i.setValue(c);for(let s of this.allTopics)s.topicId===t&&this.topicListForQuestionSelection.push(s)}deSelectTopic(t){var o,i;let c=null===(o=this.form.get("topics"))||void 0===o?void 0:o.value,s=c.indexOf(t);c.splice(s,1),null===(i=this.form.get("topics"))||void 0===i||i.setValue(c),s=this.topicListForQuestionSelection.findIndex(p=>p.topicId===t),this.topicListForQuestionSelection.splice(s,1)}selectQuestion(t){var o,i;let c=null===(o=this.form.get("questions"))||void 0===o?void 0:o.value;c.push(t),null===(i=this.form.get("questions"))||void 0===i||i.setValue(c)}deSelectQuestion(t){var o,i;let c=null===(o=this.form.get("questions"))||void 0===o?void 0:o.value,s=c.indexOf(t);c.splice(s,1),null===(i=this.form.get("questions"))||void 0===i||i.setValue(c)}isSelectedQuestion(t){var o;return null===(o=this.form.get("questions"))||void 0===o?void 0:o.value.includes(t.questionId)}createExam(){var t,o,i,c,s,p;try{let v=Number(null===(t=this.form.get("numberForCorrectAnswer"))||void 0===t?void 0:t.value),q=Number(null===(o=this.form.get("numberForIncorrectAnswer"))||void 0===o?void 0:o.value),m=Number(null===(i=this.form.get("numberOfSeats"))||void 0===i?void 0:i.value);null===(c=this.form.get("numberForCorrectAnswer"))||void 0===c||c.setValue(v),null===(s=this.form.get("numberForIncorrectAnswer"))||void 0===s||s.setValue(q),null===(p=this.form.get("numberOfSeats"))||void 0===p||p.setValue(m),this._createExamService.createExam(this.form.value),this.form.reset(),this.topicListForQuestionSelection=[],this._router.navigate(["admin/home"])}catch(v){console.log(v)}}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(T.gz),e.Y36(T.F0),e.Y36(Z),e.Y36(r.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-create-exam"]],decls:31,vars:5,consts:[[3,"returnUrl"],[1,"layout"],[1,"actions"],["mat-raised-button","",3,"click"],[1,"form"],[1,"input-fields",3,"formGroup"],["appearance","outline"],["matInput","","placeholder","Name","formControlName","name","required",""],["matInput","","placeholder","Number of total seats","formControlName","numberOfSeats","required",""],["matInput","","placeholder","Number for correct answer","formControlName","numberForCorrectAnswer","required",""],["matInput","","placeholder","Number for incorrect answer","formControlName","numberForIncorrectAnswer","required",""],[1,"topic-selection"],[4,"ngFor","ngForOf"],["appearance","outline",4,"ngIf"],[3,"topic","selectTopic","deSelectTopic"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[3,"isSelected","question","selectQuestion","deSelectQuestion"]],template:function(t,o){1&t&&(e.TgZ(0,"page-container",0)(1,"div",1)(2,"div",2)(3,"button",3),e.NdJ("click",function(){return o.createTopic()}),e._uU(4,"Create Topic"),e.qZA(),e.TgZ(5,"button",3),e.NdJ("click",function(){return o.createQuestion()}),e._uU(6,"Create Question"),e.qZA()(),e.TgZ(7,"mat-card",4)(8,"button",3),e.NdJ("click",function(){return o.createExam()}),e._uU(9,"Create Exam"),e.qZA(),e.TgZ(10,"div",5)(11,"mat-form-field",6)(12,"mat-label"),e._uU(13,"Name"),e.qZA(),e._UZ(14,"input",7),e.qZA(),e.TgZ(15,"mat-form-field",6)(16,"mat-label"),e._uU(17,"Number of total seats"),e.qZA(),e._UZ(18,"input",8),e.qZA(),e.TgZ(19,"mat-form-field",6)(20,"mat-label"),e._uU(21,"Number for correct answer"),e.qZA(),e._UZ(22,"input",9),e.qZA(),e.TgZ(23,"mat-form-field",6)(24,"mat-label"),e._uU(25,"Number for incorrect answer"),e.qZA(),e._UZ(26,"input",10),e.qZA()(),e.TgZ(27,"div",11),e.YNc(28,k,2,1,"ng-container",12),e.qZA(),e.YNc(29,P,5,2,"mat-form-field",13),e.YNc(30,Y,2,2,"ng-container",12),e.qZA()()()),2&t&&(e.Q6J("returnUrl","admin"),e.xp6(10),e.Q6J("formGroup",o.form),e.xp6(18),e.Q6J("ngForOf",o.allTopics),e.xp6(1),e.Q6J("ngIf",o.topicListForQuestionSelection.length),e.xp6(1),e.Q6J("ngForOf",o.questions))},directives:[Q.G,f.lW,h.a8,r.JL,r.sg,_.KE,_.hX,x.Nt,r.Fj,r.JJ,r.u,r.Q7,d.sg,E,d.O5,A.gD,r.oH,O.ey,M],styles:[".layout[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;row-gap:12px}.layout[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.layout[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:12px}.layout[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .input-fields[_ngcontent-%COMP%]{display:flex;flex-direction:column}.layout[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .topic-selection[_ngcontent-%COMP%]{display:flex;column-gap:12px}"]}),n})()},{path:"create-topic",component:(()=>{class n{constructor(t,o){this._createExamService=t,this._fb=o,this.topic=this._fb.group({name:["",[r.kI.required]]})}submit(){var t=this;return(0,u.Z)(function*(){yield t._createExamService.createTopic(t.topic.value),t.topic.reset()})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(Z),e.Y36(r.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-create-topic"]],decls:9,vars:2,consts:[[3,"returnUrl"],[3,"formGroup"],["appearance","outline"],["matInput","","placeholder","Enter topic name","formControlName","name","required",""],["mat-raised-button","",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"page-container",0)(1,"mat-card")(2,"form",1)(3,"mat-form-field",2)(4,"mat-label"),e._uU(5,"Enter topic name"),e.qZA(),e._UZ(6,"input",3),e.qZA()()(),e.TgZ(7,"button",4),e.NdJ("click",function(){return o.submit()}),e._uU(8,"Submit"),e.qZA()()),2&t&&(e.Q6J("returnUrl","admin/create-exam"),e.xp6(2),e.Q6J("formGroup",o.topic))},directives:[Q.G,h.a8,r._Y,r.JL,r.sg,_.KE,_.hX,x.Nt,r.Fj,r.JJ,r.u,r.Q7,f.lW],styles:[""]}),n})()},{path:"create-question",component:(()=>{class n{constructor(t,o){this._createExamService=t,this._fb=o,this.allTopics=[],this.question=this._fb.group({questionText:["",[r.kI.required]],explaination:["",[r.kI.required]],topicId:[,[r.kI.required]],answer:["",[r.kI.required]],option1:["",[r.kI.required]],option2:["",[r.kI.required]],option3:["",[r.kI.required]],option4:["",[r.kI.required]],option5:["",[r.kI.required]],option6:["",[r.kI.required]]})}ngOnInit(){var t=this;return(0,u.Z)(function*(){t.allTopics=yield t._createExamService.getTopics()})()}submit(){var t=this;return(0,u.Z)(function*(){var o,i,c,s,p,v,q;let m="";switch(t.question.value.answer){case"1":m=null===(o=t.question.get("option1"))||void 0===o?void 0:o.value;break;case"2":m=null===(i=t.question.get("option2"))||void 0===i?void 0:i.value;break;case"3":m=null===(c=t.question.get("option3"))||void 0===c?void 0:c.value;break;case"4":m=null===(s=t.question.get("option4"))||void 0===s?void 0:s.value;break;case"5":m=null===(p=t.question.get("option5"))||void 0===p?void 0:p.value;break;case"6":m=null===(v=t.question.get("option6"))||void 0===v?void 0:v.value}null===(q=t.question.get("answer"))||void 0===q||q.setValue(m),yield t._createExamService.createQuestion(t.question.value),t.question.reset()})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(Z),e.Y36(r.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-create-question"]],decls:61,vars:3,consts:[[3,"returnUrl"],[1,"form",3,"formGroup"],["appearance","outline"],["matInput","","placeholder","Enter question text","formControlName","questionText","required",""],[1,"options"],[1,"side"],["matInput","","placeholder","Option 1","formControlName","option1","required",""],["matInput","","placeholder","Option 2","formControlName","option2","required",""],["matInput","","placeholder","Option 3","formControlName","option3","required",""],["matInput","","placeholder","Option 4","formControlName","option4","required",""],["matInput","","placeholder","Option 5","formControlName","option5","required",""],["matInput","","placeholder","Option 6","formControlName","option6","required",""],["formControlName","answer"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["value","6"],["matInput","","maxlength","1000","formControlName","explaination","required","","placeholder","Explaination"],["formControlName","topicId"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","",3,"click"],[3,"value"]],template:function(t,o){1&t&&(e.TgZ(0,"page-container",0)(1,"mat-card",1)(2,"mat-form-field",2)(3,"mat-label"),e._uU(4,"Enter question text"),e.qZA(),e._UZ(5,"input",3),e.qZA(),e.TgZ(6,"div",4)(7,"div",5)(8,"mat-form-field",2)(9,"mat-label"),e._uU(10,"Option 1"),e.qZA(),e._UZ(11,"input",6),e.qZA(),e.TgZ(12,"mat-form-field",2)(13,"mat-label"),e._uU(14,"Option 2"),e.qZA(),e._UZ(15,"input",7),e.qZA(),e.TgZ(16,"mat-form-field",2)(17,"mat-label"),e._uU(18,"Option 3"),e.qZA(),e._UZ(19,"input",8),e.qZA()(),e.TgZ(20,"div",5)(21,"mat-form-field",2)(22,"mat-label"),e._uU(23,"Option 4"),e.qZA(),e._UZ(24,"input",9),e.qZA(),e.TgZ(25,"mat-form-field",2)(26,"mat-label"),e._uU(27,"Option 5"),e.qZA(),e._UZ(28,"input",10),e.qZA(),e.TgZ(29,"mat-form-field",2)(30,"mat-label"),e._uU(31,"Option 6"),e.qZA(),e._UZ(32,"input",11),e.qZA()()(),e.TgZ(33,"mat-form-field",2)(34,"mat-label"),e._uU(35,"Answer"),e.qZA(),e.TgZ(36,"mat-select",12)(37,"mat-option",13),e._uU(38,"Option 1"),e.qZA(),e.TgZ(39,"mat-option",14),e._uU(40,"Option 2"),e.qZA(),e.TgZ(41,"mat-option",15),e._uU(42,"Option 3"),e.qZA(),e.TgZ(43,"mat-option",16),e._uU(44,"Option 4"),e.qZA(),e.TgZ(45,"mat-option",17),e._uU(46,"Option 5"),e.qZA(),e.TgZ(47,"mat-option",18),e._uU(48,"Option 6"),e.qZA()()(),e.TgZ(49,"mat-form-field",2)(50,"mat-label"),e._uU(51,"Explaination"),e.qZA(),e.TgZ(52,"textarea",19),e._uU(53,"            "),e.qZA()(),e.TgZ(54,"mat-form-field",2)(55,"mat-label"),e._uU(56,"Topic"),e.qZA(),e.TgZ(57,"mat-select",20),e.YNc(58,G,2,2,"mat-option",21),e.qZA()()(),e.TgZ(59,"button",22),e.NdJ("click",function(){return o.submit()}),e._uU(60,"Submit"),e.qZA()()),2&t&&(e.Q6J("returnUrl","admin/create-exam"),e.xp6(1),e.Q6J("formGroup",o.question),e.xp6(57),e.Q6J("ngForOf",o.allTopics))},directives:[Q.G,h.a8,r.JL,r.sg,_.KE,_.hX,x.Nt,r.Fj,r.JJ,r.u,r.Q7,A.gD,O.ey,r.nD,d.sg,f.lW],styles:[".form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.form[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]{display:flex;column-gap:20px}.form[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .side[_ngcontent-%COMP%]{display:flex;flex-direction:column;column-gap:20px}"]}),n})()}];let B=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[T.Bz.forChild(R)],T.Bz]}),n})(),V=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[d.ez,f.ot,C.Ps]]}),n})();var W=a(4050);let X=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[d.ez,W.g,f.ot,C.Ps]]}),n})();var j=a(2569),z=a(1192);let H=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[{provide:S.TP,useClass:j.b,multi:!0},Z],imports:[[d.ez,B,S.JF,r.UX,f.ot,C.Ps,h.QW,_.lN,x.c,A.LD,V,X,h.QW,z.y]]}),n})()}}]);