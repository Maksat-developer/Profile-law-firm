import{_ as o,c as i,o as m,d as h,f as l,O as k,h as t}from"./chunk-dfeee05c.js";const p={name:"ByBit",link:"https://www.bybit.com/"},w={name:"Binance",link:"https://www.binance.com/"},y={name:"Crystal",link:"https://crystal.com/"},b={name:"Chainalysis",link:"https://www.chainalysis.com/"},g={name:"Bestchange",link:"https://www.bestchange.ru/"},_={name:"Blockchain",link:"https://www.blockchain.com/"},d={name:"Valega",link:"https://www.valegachain.com/"},u={name:"Etherscan",link:"https://etherscan.io/"},s={bybit:p,"bybit-broker":{name:"ByBit Broker",link:"https://www.bybit.com/"},binance:w,"binance-broker":{name:"Binance Broker",link:"https://www.binance.com/"},"match-systems":{name:"MatchSystems",link:"https://matchsystems.com/"},crystal:y,chainalysis:b,bestchange:g,blockchain:_,valega:d,etherscan:u};const B=["href"],f=["src","alt"],v=["src","alt"],x={__name:"partner-link",props:{name:{type:String,required:!0,validator:e=>Object.keys(s).includes(e)},white:{type:Boolean,default:!1},gray:{type:Boolean,default:!1}},setup(e){const n=e,r=i(()=>{var a;return((a=s[n.name])==null?void 0:a.link)||"#"}),c=i(()=>{var a;return((a=s[n.name])==null?void 0:a.name)||n.name});return(a,C)=>(m(),h("a",{href:t(r),class:"partner-link"},[l("img",{class:k(["partner-link__image--mono",{"is-white":e.white,"is-gray":e.gray}]),src:`/partner/mono/${e.name}.svg`,alt:t(c),draggable:"false"},null,10,f),l("img",{class:"partner-link__image",src:`/partner/colorful/${e.name}.svg`,alt:t(c),draggable:"false"},null,8,v)],8,B))}},L=o(x,[["__scopeId","data-v-dee41c13"]]);export{L as P};
