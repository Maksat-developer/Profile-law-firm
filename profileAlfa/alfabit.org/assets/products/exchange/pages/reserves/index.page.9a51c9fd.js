import{_ as p,an as b,r as _,o as a,d as n,f as t,e as d,D as i,O as U,g as C,a6 as I,ao as B,Q as f,F as g,M as y,P as $,ap as R,k as V}from"../../../../chunk-dfeee05c.js";const x={name:"reserves-item",components:{UiCoin:b},props:{item:{type:Object,default:()=>{}},color:{type:String,default:null}}},S={class:"item__title"},P={class:"item__value"};function N(e,r,s,u,v,l){const c=_("UiCoin");return a(),n("div",{class:U(["item",`item--${s.color}`])},[t("div",null,[d(c,{class:"item__icon",name:s.item.name},null,8,["name"]),t("p",S,i(s.item.name),1)]),t("p",P,i(s.item.value),1)],2)}const A=p(x,[["render",N],["__scopeId","data-v-8ed01e38"]]);const D={name:"Chip",props:{color:{type:String,default:"default"}}};function E(e,r,s,u,v,l){return a(),n("div",{class:U(["chip",`chip--${s.color}`])},[C(e.$slots,"default",{},void 0,!0)],2)}const F=p(D,[["render",E],["__scopeId","data-v-2a682862"]]);const O={name:"reserves-block",components:{Chip:F,ReservesItem:A,UiButton:I,UiPagination:B},props:{reserves:{type:Array,default:()=>[]},search:{type:String,default:""}},data:()=>({buttons:[{text:"all",active:!0},{text:"crypto",active:!1},{text:"fiat",active:!1}],page:1}),methods:{setSelected(e){this.buttons.forEach((r,s)=>r.active=e===s)}},computed:{items(){return this.reserves.slice(this.page*9,(this.page+1)*9)}}},j={key:0,class:"reserves__block"},q={class:"reserves__grid mobile-up"},z={class:"reserves__grid mobile-only"},L={key:1,class:"reserves__block"},M={class:"reserves__block__empty__title"},Q={class:"reserves__block__empty__text"};function w(e,r,s,u,v,l){_("UiButton"),_("Chip");const c=_("ReservesItem"),m=_("UiPagination");return a(),n(g,null,[s.reserves.length?(a(),n("div",j,[f("",!0),t("div",q,[(a(!0),n(g,null,y(s.reserves,(o,h)=>(a(),$(c,{key:h,item:o},null,8,["item"]))),128))]),t("div",z,[(a(!0),n(g,null,y(l.items,(o,h)=>(a(),$(c,{key:h,item:o},null,8,["item"]))),128))]),d(m,{modelValue:e.page,"onUpdate:modelValue":r[0]||(r[0]=o=>e.page=o),class:"mt24 mobile-only","items-total":s.reserves.length,"per-page":9,"hide-limiter":""},null,8,["modelValue","items-total"])])):f("",!0),s.reserves.length?f("",!0):(a(),n("div",L,[t("p",M,i(e.$t("no_results")),1),t("p",Q,i(e.$t("no_results_description",[s.search])),1)]))],64)}const G=p(O,[["render",w],["__scopeId","data-v-e87e4a03"]]);const{global:{t:k}}=V,H={name:"ReservesPage",components:{UiInput:R,ReservesBlock:G},props:{reserves:{type:Array,default:()=>[]}},head(){const e=k("pages.reserves.title"),r=k("pages.reserves.description");return{title:e,description:r}},data:()=>({search:""}),computed:{filteredReserves(){return this.search?this.reserves.filter(e=>e.name.toUpperCase().includes(this.search.toUpperCase())):this.reserves}}},J={class:"reserves__page"},K={class:"container"},T={class:"reserves__header"},W={class:"reserves__header__title"},X={class:"reserves__header__content"},Y={class:"reserves__header__content__text"};function Z(e,r,s,u,v,l){const c=_("UiInput"),m=_("ReservesBlock");return a(),n("div",J,[t("div",K,[t("div",T,[t("h1",W,i(e.$t("reserves")),1),t("div",X,[t("p",Y,i(e.$t("reserves_acquaintance")),1),d(c,{id:"reserves-search",modelValue:e.search,"onUpdate:modelValue":r[0]||(r[0]=o=>e.search=o),class:"reserves__header__content__search",placeholder:e.$t("search_for_asset"),"native-type":"search",clearable:"",type:"secondary"},null,8,["modelValue","placeholder"])])]),d(m,{reserves:l.filteredReserves,search:e.search},null,8,["reserves","search"])])])}const se=p(H,[["render",Z],["__scopeId","data-v-911a6973"]]);export{se as default};