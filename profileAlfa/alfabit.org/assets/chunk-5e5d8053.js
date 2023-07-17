import{_ as u,o as r,c as i,a,af as m,g as c,r as h,n as o,e as f}from"./chunk-4230b989.js";import{t as p}from"./chunk-e3b6086f.js";import{U as y}from"./chunk-854711a0.js";const x={name:"UiIcon",props:{src:{type:String,required:!0}}},g=["src"];function S(e,n,t,d,_,s){return r(),i("img",{class:"icon",src:t.src,alt:"icon",draggable:"false"},null,8,g)}const V=u(x,[["render",S],["__scopeId","data-v-e078f136"]]);const T={name:"ExchangeTimerRate",props:{end:{type:[String,Number],required:!0},redEnd:{type:Boolean,default:!0}},data(){return{now:+new Date,timerId:"",visible:!0}},computed:{prettyTime(){const e=("0"+this.minutes).slice(-2),n=("0"+this.seconds).slice(-2);return`${e}:${n}`},courseEndTime(){return+String(this.end*1e6).replace(/[^0-9]/g,"").slice(0,13)},timeLeft(){const e=this.courseEndTime-this.now;return e>=0?e/1e3:0},hours(){return Math.floor(this.timeLeft/3600)},minutes(){return Math.floor(this.timeLeft/60-Number(this.hours)*60)},seconds(){return Math.floor(this.timeLeft%60)}},mounted(){this.visible=!1,this.timerId=setInterval(()=>{this.now=+new Date},1e3)}},v={class:"timer"},b=["src"],C=["textContent"];function $(e,n,t,d,_,s){return r(),i("div",v,[a("img",{class:"timer__img",width:"20",height:"20",src:s.timeLeft==0&&t.redEnd?"/icons/other/clock_red.svg":"/icons/other/clock_purple.svg",alt:""},null,8,b),a("p",{class:m(["timer__text",s.timeLeft==0&&t.redEnd&&"timer__text--red"]),textContent:c(s.prettyTime)},null,10,C)])}const E=u(T,[["render",$],["__scopeId","data-v-f038f232"]]);const N={name:"ExchangeRate",components:{ExchangeTimerRate:E},props:{end:{type:[String,Number],required:!0},step:{type:[Number,void 0,null],default:1},money1:{type:String,default:""},money1Code:{type:String,default:""},money2:{type:String,default:""},money2Code:{type:String,default:""},rate:{type:[String,Number],required:!0},exponent:{type:[String,Number],default:0},orderStatus:{type:Number,default:0},alwaysVisible:{type:Boolean,default:!1},isInverse:{type:Boolean,default:!1},isFixed:{type:Boolean,default:!1},money1Type:{type:String,default:void 0},money2Type:{type:String,default:void 0},confirmations:{type:String||Number,default:void 0}},computed:{hasCash(){return this.money1Type==="CASH"||this.money2Type==="CASH"},isRateUnfixed(){return!y.includes(this.orderStatus)},timerText(){return this.hasCash&&this.isRateUnfixed?"timer_text_fixed_after_deposit":this.isFixed?"timer_text_fixed":"timer_text_exchange"},rateText(){const e=this.$currencyType(this.money1,this.money1Code),n=this.$currencyType(this.money2,this.money2Code),t=this.$prettyNumber(p(this.rate,this.exponent),{exp:this.exponent});return this.isInverse?`1 ${n} = ${t} ${e}`:`1 ${e} = ${t} ${n}`},hideRateFixed(){return[4,7,8,9,16,17,21,22,23,30,33,35,36,37,38,39].includes(+this.orderStatus)},showTimer(){if(this.hasCash)return!1;if(this.alwaysVisible)return!0;const e=[1,2,3,4,10,11,12,13,15,19];return this.orderStatus?e.includes(+this.orderStatus):!1}}},I={class:"rate-box"},R={class:"rate-box__rates"},w={class:"rate-box__rate-text"},U={key:0,class:"icon-pulse mr8"},k=["textContent"],B=["textContent"];function L(e,n,t,d,_,s){const l=h("ExchangeTimerRate");return r(),i("div",I,[a("div",R,[a("div",w,[s.isRateUnfixed&&s.hasCash?(r(),i("i",U)):o("",!0),a("p",{class:"rate-box__rates__course",textContent:c(e.$t("timer_title_course",[s.rateText]))},null,8,k)]),s.timerText?(r(),i("p",{key:0,class:"rate-box__rates__info",textContent:c(e.$t(s.timerText,{value:t.confirmations||e.$t("timer_text_fixed_after_deposit_postfix")}))},null,8,B)):o("",!0)]),s.showTimer?(r(),f(l,{key:0,end:t.step===3?0:t.end,step:t.step},null,8,["end","step"])):o("",!0)])}const A=u(N,[["render",L]]);export{A as E,V as U};
