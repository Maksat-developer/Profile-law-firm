import{P as x}from"../../../chunk-a3834845.js";import{j as $,c as B,o as r,d as o,e as t,f as e,F as l,M as _,h as a,K as u,w as m,O as P,P as w,D as n,$ as V,am as h,an as g,al as f,ao as C,ap as T,aq as D,T as E,a6 as M,k as N}from"../../../chunk-dfeee05c.js";import{_ as y}from"../../../chunk-720e63d1.js";const R={class:"container"},S={class:"links-container mobile-up"},j={class:"dropdown-trigger"},q=["src","alt"],z={class:"dropdown-trigger__title"},F=e("i",{class:"dropdown-trigger__chevron icon-caret-down"},null,-1),H={class:"providers"},O=["src"],A={class:"reviews-provider__rate"},I={class:"reviews"},K={class:"review-card__content"},L={class:"review-card__name"},Y={class:"review-card__date"},G={class:"review-card__review"},J={class:"review-card__bottom"},Q={class:"review-card__asset"},W=e("i",{class:"icon-exchange"},null,-1),X={class:"review-card__asset"},Z={class:"add-review"},ee=e("article",{class:"add-review__article"},[e("h2",{class:"add-review__title"},"Оставьте отзыв"),e("p",{class:"add-review__description"}," Ваши пожелания и предложения очень ценны для нас. Мы улучшаем сервис благодаря вашей обратной связи ")],-1),se={class:"add-review__form review-form"},de="page--reviews",{global:{t:ae}}=N,te={head(){return{title:ae("pages.ecosystem.reviews.title")}}},ce=Object.assign(te,{__name:"index.page",props:{product:{type:String,required:!0}},setup(i){const b=i,p=$(!1),U=[{name:"bestchange",rate:"6 093"},{name:"trustpilot",rate:82},{name:"wot",rate:75}],k=[{id:1,name:"Иванов И.И.",date:"21.01.2023, 23:42",rate:4,review:"Отличный обменник, быстро и за выгодный курс к тому же"},{id:2,name:"Иванов И.И.",date:"21.01.2023, 23:42",rate:5,review:`Благодарю ваш сервис за услугу. Очень оперативный ответ при необходимости решить любые вопросы. !!!
Все как положено, удобно, быстро
Большое спасибо за качественный и быстрый обмен! Вы молодцы!`},{id:3,name:"Иванов И.И.",date:"21.01.2023, 23:42",rate:5,review:"Беспроблемная сделка - помощь доступна в чате моментально. Отличный обмен!"},{id:4,name:"Иванов И.И.",date:"21.01.2023, 23:42",rate:4,review:"Отличный обменник, быстро и за выгодный курс к тому же"},{id:5,name:"Иванов И.И.",date:"21.01.2023, 23:42",rate:5,review:`Благодарю ваш сервис за услугу. Очень оперативный ответ при необходимости решить любые вопросы. !!!
Все как положено, удобно, быстро
Большое спасибо за качественный и быстрый обмен! Вы молодцы!`},{id:6,name:"Иванов И.И.",date:"21.01.2023, 23:42",rate:5,review:"Беспроблемная сделка - помощь доступна в чате моментально. Отличный обмен!"}],v=B(()=>u().find(d=>d.app===b.product));return(d,c)=>(r(),o("div",{class:P(["product-reviews-page",`product-reviews-page--${i.product}`])},[t(x,{title:"Отзывы",subtitle:"Отзывы наших клиентов"}),e("div",R,[e("div",S,[(r(!0),o(l,null,_(a(u)(),s=>(r(),w(y,{id:s.app,key:s.app,href:d.$path(`ecosystem/reviews/${s.app}`),"is-active":s.app===i.product},null,8,["id","href","is-active"]))),128))]),t(a(V),{modelValue:p.value,"onUpdate:modelValue":c[1]||(c[1]=s=>p.value=s),class:"mobile-only",position:"bottom-start","hide-chevron":""},{trigger:m(()=>[e("div",j,[e("img",{class:"dropdown-trigger__icon",src:`/product/${a(v).app}.svg`,alt:a(v).title},null,8,q),e("div",z,n(a(v).title),1),F])]),default:m(()=>[(r(!0),o(l,null,_(a(u)(),s=>(r(),w(y,{id:s.app,key:s.app,href:d.$path(`ecosystem/reviews/${s.app}`),"is-active":s.app===i.product,onClick:c[0]||(c[0]=re=>p.value=!1)},null,8,["id","href","is-active"]))),128))]),_:1},8,["modelValue"]),e("div",H,[(r(),o(l,null,_(U,s=>e("div",{key:s.name,class:"reviews-provider"},[e("img",{class:"reviews-provider__image",src:`/partner/colorful/${s.name}.svg`,alt:""},null,8,O),e("div",A,n(s.rate),1)])),64))]),e("div",I,[(r(),o(l,null,_(k,s=>e("div",{key:s.name,class:"review-card"},[e("article",K,[e("p",L,n(s.name),1),e("p",Y,n(s.date),1),t(a(h),{class:"review-card__rate","model-value":s.rate,readonly:""},null,8,["model-value"]),e("p",G,n(s.review),1)]),e("div",J,[e("div",Q,[t(a(g),{name:"ETH",class:"mr8"}),t(a(f),{title:"Ethereum",text:"0.0032 ETH"})]),W,e("div",X,[t(a(g),{name:"YAMRUB",class:"mr8"}),t(a(f),{title:"ЮMoney ",text:"1 043 RUB"})])])])),64))]),t(a(C),{"items-total":999,"hide-limiter":"",class:"pagination"}),e("div",Z,[ee,e("form",se,[t(a(h),{class:"review-form__rate"}),t(a(T),{class:"review-form__name",type:"secondary",label:"Имя"}),t(a(D),{class:"review-form__text",label:"Отзыв"}),t(a(M),{class:"review-form__button",size:"large",icon:"send-a-message"},{default:m(()=>[E(" Отправить отзыв ")]),_:1})])])])],2))}});export{de as bodyClass,ce as default};