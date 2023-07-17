import{_ as g,I as m,o,d as i,f as e,D as d,Q as v,J as h,g as w,c as P,K as B,r as l,F as b,M as I,P as F,w as _,e as c,G as U,H as j,R as D,E as M,T as k}from"../../chunk-dfeee05c.js";import{P as N}from"../../chunk-a3834845.js";const V={name:"ContactCard",props:{icon:{type:String,default:void 0},title:{type:String,required:!0},description:{type:String,default:void 0},email:{type:String,default:void 0}}},E={class:"contact-card"},T={class:"contact-card__header"},q=["src"],G={class:"contact-card__title"},H={key:0,class:"contact-card__description"},J={class:"contact-card__links"},K={key:0,class:"contact-card__link-wrapper"},L=["href"],Q={class:"icon-copy ml10",style:{cursor:"pointer"}},R={key:0,class:"contact-card__image"};function z(t,p,n,u,f,$){const s=m("copy"),a=m("hint");return o(),i("div",E,[e("div",T,[e("img",{src:n.icon,class:"contact-card__icon"},null,8,q),e("div",null,[e("p",G,d(n.title),1),n.description?(o(),i("p",H,d(n.description),1)):v("",!0)])]),e("div",J,[n.email?(o(),i("div",K,[e("a",{class:"contact-card__link",href:`mailto:${n.email}`},d(n.email),9,L),h(e("i",Q,null,512),[[s,n.email],[a,"Скопировано",void 0,{click:!0}]])])):v("",!0)]),t.$slots.default?(o(),i("div",R,[w(t.$slots,"default",{},void 0,!0)])):v("",!0)])}const C=g(V,[["render",z],["__scopeId","data-v-135f80bf"]]);const A={name:"ClientsSupport",components:{ContactCard:C},setup(){return{products:P(()=>B())}}},O={class:"clients-support"},W={class:"container"},X={class:"clients-support__title"},Y={class:"clients-support__cards"},Z=["src"];function x(t,p,n,u,f,$){const s=l("ContactCard"),a=m("glow");return o(),i("section",O,[e("div",W,[e("h2",X,d(t.$t("clients_support.title")),1),h((o(),i("div",Y,[(o(!0),i(b,null,I(u.products,r=>(o(),F(s,{key:r.app,icon:`/product/${r.app}.svg`,title:r.title,description:r.description,email:`support_${r.app}@alfabit.org`},{default:_(()=>[e("img",{src:`/preview/${r.app}.png`},null,8,Z)]),_:2},1032,["icon","title","description","email"]))),128))])),[[a]])])])}const tt=g(A,[["render",x],["__scopeId","data-v-632542c9"]]);const et={name:"ForPartners",components:{ContactCard:C}},nt=t=>(U("data-v-7e33c541"),t=t(),j(),t),ot={class:"for-partners"},st={class:"container"},ct=nt(()=>e("h2",{class:"for-partners__title"},"Сотрудничество",-1)),it={class:"for-partners__cards"};function at(t,p,n,u,f,$){const s=l("ContactCard"),a=m("glow");return o(),i("section",ot,[e("div",st,[ct,h((o(),i("div",it,[c(s,{icon:"/marketing.svg",title:t.$t("partners_block.marketing.title"),description:t.$t("partners_block.marketing.description"),email:"marketing@alfabit.org"},null,8,["title","description"]),c(s,{icon:"/bank.svg",title:t.$t("partners_block.bank.title"),description:t.$t("partners_block.bank.description"),email:"partners@alfabit.org"},null,8,["title","description"]),c(s,{icon:"/gov.svg",title:t.$t("partners_block.gov.title"),description:t.$t("partners_block.gov.description"),email:"compliance@alfabit.org"},null,8,["title","description"]),c(s,{icon:"/job.svg",title:t.$t("partners_block.job.title"),description:t.$t("partners_block.job.description"),email:"job@alfabit.org"},null,8,["title","description"])])),[[a]])])])}const rt=g(et,[["render",at],["__scopeId","data-v-7e33c541"]]),gt="contacts-page",lt={components:{UiButton:D,PageScreen:N,ForPartners:rt,ClientsSupport:tt,UiMarkdown:M}},_t=e("img",{src:"/contacts-banner.png",style:{"margin-block":"-80px"}},null,-1);function dt(t,p,n,u,f,$){const s=l("UiMarkdown"),a=l("UiButton"),r=l("PageScreen"),y=l("ClientsSupport"),S=l("ForPartners");return o(),i(b,null,[c(r,{title:t.$t("contacts"),subtitle:t.$t("contacts_page.subtitle")},{image:_(()=>[_t]),actions:_(()=>[c(a,{color:"gradient",icon:"chat",onClick:p[0]||(p[0]=pt=>t.$chatra.show())},{default:_(()=>[k(d(t.$t("contacts_page.action_chat")),1)]),_:1}),c(a,{color:"gradient",icon:"telegram",href:"tg://resolve?domain=alfabit_support"},{default:_(()=>[k(d(t.$t("contacts_page.action")),1)]),_:1})]),default:_(()=>[c(s,{source:t.$t("contacts_page.title")},null,8,["source"])]),_:1},8,["title","subtitle"]),c(y),c(S)],64)}const ft=g(lt,[["render",dt]]);export{gt as bodyClass,ft as default};