import{A as l,B as w,C as p,D as j,E as d,F as G,G as g,H as m,I as y,J as Q,K as pe,L as ge,M as me,N as ee,O as B,P as U,R as ye,S as ve,T as _e,U as Ce,V as Ve,W as De,X as be,Y as H,Z as te,_ as L,a as f,b as V,c as ae,d as le,e as ue,f as Y,g as S,h as v,i as D,j as de,k as T,l as b,m as _,n as M,o as ce,p as he,q as K,r as R,s as h,t as u,u as J,v as N,w as A,x as E,y as fe,z as a}from"./chunk-WG3FEDAE.js";var W=(()=>{let e=class e{set token(i){localStorage.setItem("token",i)}get token(){return localStorage.getItem("token")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Oe=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(u(J),u(K))},e.\u0275dir=M({type:e});let t=e;return t})(),Qe=(()=>{let e=class e extends Oe{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=he(e)))(o||e)}})(),e.\u0275dir=M({type:e,features:[N]});let t=e;return t})(),xe=new D("");var et={provide:xe,useExisting:Y(()=>I),multi:!0};function tt(){let t=ee()?ee().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var it=new D(""),I=(()=>{let e=class e extends Oe{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!tt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(u(J),u(K),u(it,8))},e.\u0275dir=M({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&p("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},features:[Q([et]),N]});let t=e;return t})();var nt=new D(""),rt=new D("");function Pe(t){return t!=null}function ke(t){return pe(t)?ae(t):t}function Te(t){let e={};return t.forEach(n=>{e=n!=null?f(f({},e),n):e}),Object.keys(e).length===0?null:e}function Re(t,e){return e.map(n=>n(t))}function ot(t){return!t.validate}function je(t){return t.map(e=>ot(e)?e:n=>e.validate(n))}function st(t){if(!t)return null;let e=t.filter(Pe);return e.length==0?null:function(n){return Te(Re(n,e))}}function Ge(t){return t!=null?st(je(t)):null}function at(t){if(!t)return null;let e=t.filter(Pe);return e.length==0?null:function(n){let i=Re(n,e).map(ke);return ue(i).pipe(le(Te))}}function Be(t){return t!=null?at(je(t)):null}function Ae(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function lt(t){return t._rawValidators}function ut(t){return t._rawAsyncValidators}function ie(t){return t?Array.isArray(t)?t:[t]:[]}function $(t,e){return Array.isArray(t)?t.includes(e):t===e}function Ee(t,e){let n=ie(e);return ie(t).forEach(r=>{$(n,r)||n.push(r)}),n}function we(t,e){return ie(e).filter(n=>!$(t,n))}var z=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ge(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Be(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},ne=class extends z{get formDirective(){return null}get path(){return null}},P=class extends z{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},re=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},dt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ei=V(f({},dt),{"[class.ng-submitted]":"isSubmitted"}),Z=(()=>{let e=class e extends re{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(u(P,2))},e.\u0275dir=M({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&fe("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[N]});let t=e;return t})();var O="VALID",q="INVALID",F="PENDING",x="DISABLED";function ct(t){return(X(t)?t.validators:t)||null}function ht(t){return Array.isArray(t)?Ge(t):t||null}function ft(t,e){return(X(e)?e.asyncValidators:t)||null}function pt(t){return Array.isArray(t)?Be(t):t||null}function X(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var oe=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===O}get invalid(){return this.status===q}get pending(){return this.status==F}get disabled(){return this.status===x}get enabled(){return this.status!==x}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ee(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ee(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(we(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(we(e,this._rawAsyncValidators))}hasValidator(e){return $(this._rawValidators,e)}hasAsyncValidator(e){return $(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=F,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=x,this.errors=null,this._forEachChild(i=>{i.disable(V(f({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(V(f({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=O,this._forEachChild(i=>{i.enable(V(f({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(V(f({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===O||this.status===F)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?x:O}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=F,this._hasOwnPendingAsyncValidator=!0;let n=ke(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new R,this.statusChanges=new R}_calculateStatus(){return this._allControlsDisabled()?x:this.errors?q:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(F)?F:this._anyControlsHaveStatus(q)?q:O}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){X(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ht(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=pt(this._rawAsyncValidators)}};var Ue=new D("CallSetDisabledState",{providedIn:"root",factory:()=>se}),se="always";function gt(t,e){return[...e.path,t]}function mt(t,e,n=se){vt(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),_t(t,e),Vt(t,e),Ct(t,e),yt(t,e)}function Fe(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function yt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function vt(t,e){let n=lt(t);e.validator!==null?t.setValidators(Ae(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=ut(t);e.asyncValidator!==null?t.setAsyncValidators(Ae(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Fe(e._rawValidators,r),Fe(e._rawAsyncValidators,r)}function _t(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&He(t,e)})}function Ct(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&He(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function He(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Vt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function Dt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function bt(t){return Object.getPrototypeOf(t.constructor)===Qe}function Mt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===I?n=o:bt(o)?i=o:r=o}),r||i||n||null}function Ie(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Se(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var At=class extends oe{constructor(e=null,n,i){super(ct(n),ft(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),X(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Se(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ie(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ie(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Se(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Et={provide:P,useExisting:Y(()=>k)},Ne=Promise.resolve(),k=(()=>{let e=class e extends P{constructor(i,r,o,c,s,Je){super(),this._changeDetectorRef=s,this.callSetDisabledState=Je,this.control=new At,this._registered=!1,this.name="",this.update=new R,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=Mt(this,c)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),Dt(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){mt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){Ne.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&me(r);Ne.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?gt(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(u(ne,9),u(nt,10),u(rt,10),u(xe,10),u(ge,8),u(Ue,8))},e.\u0275dir=M({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[T.None,"disabled","isDisabled"],model:[T.None,"ngModel","model"],options:[T.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[Q([Et]),N,ce]});let t=e;return t})();var wt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=_({type:e}),e.\u0275inj=v({});let t=e;return t})();var Le=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Ue,useValue:i.callSetDisabledState??se}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=_({type:e}),e.\u0275inj=v({imports:[wt]});let t=e;return t})();function It(t,e){if(t&1&&(a(0,"p"),d(1),l()),t&2){let n=e.$implicit;h(),G(n)}}function St(t,e){if(t&1&&(a(0,"div",12),A(1,It,2,1,"p",13),l()),t&2){let n=j();h(),E("ngForOf",n.errorMsg)}}var $e=(()=>{let e=class e{constructor(i,r,o){this.router=i,this.authService=r,this.tokenService=o,this.authRequest={email:"",password:""},this.errorMsg=[]}register(){this.router.navigate(["register"])}login(){this.errorMsg=[],this.authService.authenticate({body:this.authRequest}).subscribe({next:i=>{this.tokenService.token=i.token,this.router.navigate(["books"])},error:i=>{console.log(i),i.error.validationErrors?this.errorMsg=i.error.validationErrors:this.errorMsg.push(i.error.error)}})}};e.\u0275fac=function(r){return new(r||e)(u(H),u(L),u(W))},e.\u0275cmp=b({type:e,selectors:[["app-login"]],decls:21,vars:3,consts:[[1,"container-fluid","card","login-container"],[1,"text-center"],["class","alert alert-danger","role","alert",4,"ngIf"],[1,"mb-3"],["for","login",1,"form-label"],["type","email","id","login","placeholder","name@example.com",1,"form-control",3,"ngModelChange","ngModel"],["for","password",1,"form-label"],["type","password","id","password","placeholder","Password",1,"form-control",3,"ngModelChange","ngModel"],[1,"d-flex","justify-content-between","mb-3"],["type","button",1,"btn","btn-primary",3,"click"],[1,"fas","fa-sign-in-alt"],["type","button",1,"btn","btn-link",3,"click"],["role","alert",1,"alert","alert-danger"],[4,"ngFor","ngForOf"]],template:function(r,o){r&1&&(a(0,"div",0)(1,"h3",1),d(2,"Login"),l(),w(3,"hr"),A(4,St,2,1,"div",2),a(5,"div",3)(6,"label",4),d(7,"Email address"),l(),a(8,"input",5),y("ngModelChange",function(s){return m(o.authRequest.email,s)||(o.authRequest.email=s),s}),l()(),a(9,"div",3)(10,"label",6),d(11,"Password"),l(),a(12,"input",7),y("ngModelChange",function(s){return m(o.authRequest.password,s)||(o.authRequest.password=s),s}),l()(),a(13,"div",8)(14,"button",9),p("click",function(){return o.login()}),a(15,"em",10),d(16,"\xA0 Sign in"),l()(),a(17,"div"),d(18," Don't have an account?\xA0 "),a(19,"button",11),p("click",function(){return o.register()}),d(20," Register "),l()()()()),r&2&&(h(4),E("ngIf",o.errorMsg.length),h(4),g("ngModel",o.authRequest.email),h(4),g("ngModel",o.authRequest.password))},dependencies:[B,U,I,Z,k]});let t=e;return t})();function Nt(t,e){if(t&1&&(a(0,"p"),d(1),l()),t&2){let n=e.$implicit;h(),G(n)}}function Ot(t,e){if(t&1&&(a(0,"div",16),A(1,Nt,2,1,"p",17),l()),t&2){let n=j();h(),E("ngForOf",n.errorMsg)}}var ze=(()=>{let e=class e{constructor(i,r){this.router=i,this.authService=r,this.registerRequest={email:"",firstname:"",lastname:"",password:""},this.errorMsg=[]}login(){this.router.navigate(["login"])}register(){this.errorMsg=[],this.authService.register({body:this.registerRequest}).subscribe({next:()=>{this.router.navigate(["login"])},error:i=>{this.errorMsg=i.error.validationErrors}})}};e.\u0275fac=function(r){return new(r||e)(u(H),u(L))},e.\u0275cmp=b({type:e,selectors:[["app-register"]],decls:29,vars:5,consts:[[1,"container-fluid","card","login-container"],[1,"text-center"],["class","alert alert-danger","role","alert",4,"ngIf"],[1,"mb-3"],["for","firstname",1,"form-label"],["type","text","id","firstname","placeholder","Firstname",1,"form-control",3,"ngModelChange","ngModel"],["for","lastname",1,"form-label"],["type","text","id","lastname","placeholder","Lastname",1,"form-control",3,"ngModelChange","ngModel"],["for","login",1,"form-label"],["type","email","id","login","placeholder","name@example.com",1,"form-control",3,"ngModelChange","ngModel"],["for","password",1,"form-label"],["type","password","id","password","placeholder","Password",1,"form-control",3,"ngModelChange","ngModel"],[1,"d-flex","justify-content-between","mb-3"],["type","button",1,"btn","btn-primary",3,"click"],[1,"fas","fa-sign-in-alt"],["type","button",1,"btn","btn-link",3,"click"],["role","alert",1,"alert","alert-danger"],[4,"ngFor","ngForOf"]],template:function(r,o){r&1&&(a(0,"div",0)(1,"h3",1),d(2,"Create an account"),l(),w(3,"hr"),A(4,Ot,2,1,"div",2),a(5,"div",3)(6,"label",4),d(7,"Firstname"),l(),a(8,"input",5),y("ngModelChange",function(s){return m(o.registerRequest.firstname,s)||(o.registerRequest.firstname=s),s}),l()(),a(9,"div",3)(10,"label",6),d(11,"Lastname"),l(),a(12,"input",7),y("ngModelChange",function(s){return m(o.registerRequest.lastname,s)||(o.registerRequest.lastname=s),s}),l()(),a(13,"div",3)(14,"label",8),d(15,"Email address"),l(),a(16,"input",9),y("ngModelChange",function(s){return m(o.registerRequest.email,s)||(o.registerRequest.email=s),s}),l()(),a(17,"div",3)(18,"label",10),d(19,"Password"),l(),a(20,"input",11),y("ngModelChange",function(s){return m(o.registerRequest.password,s)||(o.registerRequest.password=s),s}),l()(),a(21,"div",12)(22,"button",13),p("click",function(){return o.register()}),a(23,"em",14),d(24,"\xA0Create an account"),l()(),a(25,"div"),d(26," Already have an account?\xA0 "),a(27,"button",15),p("click",function(){return o.login()}),d(28," Login "),l()()()()),r&2&&(h(4),E("ngIf",o.errorMsg.length),h(4),g("ngModel",o.registerRequest.firstname),h(4),g("ngModel",o.registerRequest.lastname),h(4),g("ngModel",o.registerRequest.email),h(4),g("ngModel",o.registerRequest.password))},dependencies:[B,U,I,Z,k]});let t=e;return t})();var xt=[{path:"login",component:$e},{path:"register",component:ze},{path:"books",loadChildren:()=>import("./chunk-76FVNYN7.js").then(t=>t.BookModule)}],Ze=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=_({type:e}),e.\u0275inj=v({imports:[te.forRoot(xt),te]});let t=e;return t})();var Xe=(()=>{let e=class e{constructor(){this.title="infoverse-ui"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=b({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(r,o){r&1&&w(0,"router-outlet")},dependencies:[be]});let t=e;return t})();var Ye=(()=>{let e=class e{constructor(i){this.tokenService=i}intercept(i,r){let o=this.tokenService.token;if(o){let c=i.clone({headers:new ye({Authorization:"Bearer "+o})});return r.handle(c)}return r.handle(i)}};e.\u0275fac=function(r){return new(r||e)(de(W))},e.\u0275prov=S({token:e,factory:e.\u0275fac});let t=e;return t})();var Ke=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=_({type:e,bootstrap:[Xe]}),e.\u0275inj=v({providers:[ve,{provide:_e,useClass:Ye,multi:!0}],imports:[De,Ze,Ce,Le]});let t=e;return t})();Ve().bootstrapModule(Ke).catch(t=>console.error(t));
