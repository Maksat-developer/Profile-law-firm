import{_ as R,c as X,j as Y,a2 as Z,q as H,o as J,P as Q,w as B,e as W,h as q,Z as ee,f as te,D as re,E as ne,Y as se}from"./chunk-dfeee05c.js";var V,$;function ie(){if($)return V;$=1;var L=9007199254740991,j="[object Arguments]",h="[object Function]",s="[object GeneratorFunction]",o=/^(?:0|[1-9]\d*)$/;function y(e,t){for(var n=-1,g=Array(e);++n<e;)g[n]=t(n);return g}function a(e,t){return function(n){return e(t(n))}}var p=Object.prototype,c=p.hasOwnProperty,w=p.toString,A=p.propertyIsEnumerable,m=a(Object.keys,Object);function I(e,t){var n=f(e)||u(e)?y(e.length,String):[],g=n.length,F=!!g;for(var b in e)(t||c.call(e,b))&&!(F&&(b=="length"||O(b,g)))&&n.push(b);return n}var k=E();function x(e,t){return e&&k(e,t,K)}function D(e,t,n,g){return x(e,function(F,b,U){t(g,n(F),b,U)}),g}function S(e){if(!C(e))return m(e);var t=[];for(var n in Object(e))c.call(e,n)&&n!="constructor"&&t.push(n);return t}function E(e){return function(t,n,g){for(var F=-1,b=Object(t),U=g(t),N=U.length;N--;){var P=U[e?N:++F];if(n(b[P],P,b)===!1)break}return t}}function z(e,t){return function(n,g){return D(n,e,t(g),{})}}function O(e,t){return t=t??L,!!t&&(typeof e=="number"||o.test(e))&&e>-1&&e%1==0&&e<t}function C(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||p;return e===n}function u(e){return r(e)&&c.call(e,"callee")&&(!A.call(e,"callee")||w.call(e)==j)}var f=Array.isArray;function _(e){return e!=null&&d(e.length)&&!v(e)}function r(e){return l(e)&&_(e)}function v(e){var t=i(e)?w.call(e):"";return t==h||t==s}function d(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=L}function i(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function l(e){return!!e&&typeof e=="object"}var T=z(function(e,t,n){e[t]=n},M(G));function K(e){return _(e)?I(e):S(e)}function M(e){return function(){return e}}function G(e){return e}return V=T,V}var oe=function(j){const h=ie(),s=j?j.preset:"ru",o={а:"a",б:"b",в:"v",д:"d",з:"z",й:"y",к:"k",л:"l",м:"m",н:"n",о:"o",п:"p",р:"r",с:"s",т:"t",у:"u",ф:"f",ь:""};s==="ru"?Object.assign(o,{г:"g",и:"i",ъ:"",ы:"i",э:"e"}):s==="uk"?Object.assign(o,{г:"h",ґ:"g",е:"e",и:"y",і:"i","'":"","’":"",ʼ:""}):s==="mn"&&Object.assign(o,{г:"g",ө:"o",ү:"u",и:"i",ы:"y",э:"e",ъ:""});let y;s==="ru"?y=Object.assign(h(o),{i:"и","":""}):s==="uk"?y=Object.assign(h(o),{"":""}):s==="mn"&&(y=Object.assign(h(o),{"":""}));const a=s==="ru"?{е:"ye"}:{є:"ye",ї:"yi"},p={ё:"yo",ж:"zh",х:"kh",ц:"ts",ч:"ch",ш:"sh",щ:"shch",ю:"yu",я:"ya"},c=Object.assign({},p,a),w=Object.assign(h(c)),A=Object.assign(o,c),m=Object.assign({},o,{й:"i"});s==="ru"?Object.assign(m,{е:"e"}):s==="uk"?Object.assign(m,{ї:"i"}):s==="mn"&&Object.assign(m,{е:"e"});let I;s==="ru"?I=Object.assign(h(o),{i:"и",y:"ы",e:"е","":""}):s==="uk"&&(I=Object.assign(h(o),{"":""}));let k={};s==="uk"&&(k={є:"ie",ю:"iu",я:"ia"});const x=Object.assign(p,k),D=Object.assign(h(x)),S=Object.assign(m,x);function E(O,C){if(!O)return"";const u=O.normalize();let f="",_=!1;for(let r=0;r<u.length;r++){const v=u[r]===u[r].toUpperCase();let d=u[r].toLowerCase();if(d===" "){f+=C||" ",_=!0;continue}let i;s==="uk"&&u.slice(r-1,r+1).toLowerCase()==="зг"?i="gh":r===0||_?(i=A[d],_=!1):i=S[d],typeof i>"u"?f+=v?d.toUpperCase():d:v?i.length>1?f+=i[0].toUpperCase()+i.slice(1):f+=i.toUpperCase():f+=i}return f}function z(O,C){if(!O)return"";const u=O.normalize();let f="",_=!1,r=0;for(;r<u.length;){const v=u[r]===u[r].toUpperCase();let d=u[r].toLowerCase(),i=r;if(d===" "||d===C){f+=" ",_=!0,r++;continue}let l,T=u.slice(r,r+2).toLowerCase();r===0||_?(l=w[T],l?r+=2:(l=y[d],r++),_=!1):(l=D[T],l?r+=2:(l=I[d],r++)),u.slice(i,i+4).toLowerCase()==="shch"?(l="щ",r=i+4):u.slice(i-1,i+2).toLowerCase()==="zgh"&&(l="г",r=i+2),typeof l>"u"?f+=v?d.toUpperCase():d:v?l.length>1?f+=l[0].toUpperCase()+l.slice(1):f+=l.toUpperCase():f+=l}return f}return{transform:E,reverse:z}};const ae={__name:"faq-accordion",props:{items:{type:Array,default:()=>[]}},setup(L){const j=L,h=a=>new oe().transform(a,"-").toLowerCase(),s=X(()=>j.items.map(a=>({...a,slug:h(a.title)})));let o;{const{hash:a}=location,p="#faq-item-";a.startsWith(p)&&(o=s.value.find(({slug:c})=>c===a.replace(p,"")))}const y=Y(o);return Z(()=>{o&&document.querySelector(`[data-slug="${o.slug}"]`).scrollIntoView({behavior:"smooth",block:"center"})}),H(y,a=>{a?location.hash=`#faq-item-${a.slug}`:history.replaceState("","",location.pathname)}),(a,p)=>(J(),Q(q(se),{modelValue:y.value,"onUpdate:modelValue":p[0]||(p[0]=c=>y.value=c),class:"faq-accordion",items:q(s)},{default:B(({item:c,onExpand:w,isActive:A})=>[W(q(ee),{expanded:A(c),class:"faq-accordion__item","data-slug":c.slug,onExpand:m=>w(c)},{title:B(()=>[te("span",null,re(c.title),1)]),default:B(()=>[W(q(ne),{class:"faq-accordion__item-content",source:c.content},null,8,["source"])]),_:2},1032,["expanded","data-slug","onExpand"])]),_:1},8,["modelValue","items"]))}},le=R(ae,[["__scopeId","data-v-68718581"]]);export{le as F};