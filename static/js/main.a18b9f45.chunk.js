(this["webpackJsonpreact-master"]=this["webpackJsonpreact-master"]||[]).push([[0],{79:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t.n(c),r=t(25),o=t.n(r),a=t(8),s=t(7),d=t(19),l=t(10),j=t(4),h=t(17),b="https://api.coinpaprika.com/v1";function p(){return fetch("".concat(b,"/coins")).then((function(e){return e.json()}))}var x=t(50),u=t.n(x),g=t(14),O=Object(g.b)({key:"isDark",default:!0}),m=t(1);var f,v,y,_,k=function(e){var n=e.coinId,t=Object(h.useQuery)(["ohlcv",n],(function(){return function(e){var n=Math.floor(Date.now()/1e3),t=n-2419200;return fetch("".concat(b,"/coins/").concat(e,"/ohlcv/historical?start=").concat(t,"&end=").concat(n)).then((function(e){return e.json()}))}(n)}),{refetchInterval:1e4}),c=t.isLoading,i=t.data,r=Object(g.d)(O);return Object(m.jsx)("div",{children:c?"Loading chart...":Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(u.a,{type:"candlestick",series:[{data:null===i||void 0===i?void 0:i.map((function(e){return{x:e.time_close,y:[e.open,e.high,e.low,e.close]}}))}],options:{theme:{mode:r?"dark":"light"},chart:{type:"candlestick",height:500,background:"transparent",toolbar:{show:!1}},title:{text:"CandleStick Chart",align:"left"},xaxis:{type:"datetime"},yaxis:{tooltip:{enabled:!0}}}})})})},C=s.c.div(f||(f=Object(a.a)(["\n  padding: 10px 20px;\n"]))),w=s.c.div(v||(v=Object(a.a)(["\n  display: grid;\n  grid-template-columns: 1fr 2.5fr;\n  width: 100%;\n  height: 40px;\n  margin-bottom: 5px;\n\n  /* background-color: rebeccapurple; */\n  place-content: center;\n  align-items: center;\n  gap: 10px;\n  border: solid 1px ",";\n\n  div:first-child {\n    /* background-color: red; */\n    text-align: end;\n    text-transform: uppercase;\n    font-weight: 500;\n  }\n"])),(function(e){return e.theme.textColor})),S=s.c.div(y||(y=Object(a.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 5px;\n  margin-bottom: 40px;\n"]))),q=s.c.div(_||(_=Object(a.a)(["\n  border: solid 2px ",";\n  color: ",";\n  background-color: rgba(255, 255, 255, 0.7);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  height: 50px;\n\n  div:last-child {\n    font-weight: 800;\n  }\n"])),(function(e){return e.isRed?"red":"blue"}),(function(e){return e.isRed?"red":"blue"}));var D,U,L,R,z,I,Q,M,A,B,F,P=function(e){var n=e.info,t=e.price;return Object(m.jsxs)(C,{children:[Object(m.jsxs)(S,{children:[Object(m.jsxs)(q,{isRed:t.quotes.USD.percent_change_15m>0,children:[Object(m.jsx)("div",{children:"15m"}),Object(m.jsxs)("div",{children:[t.quotes.USD.percent_change_15m,"%"]})]}),Object(m.jsxs)(q,{isRed:t.quotes.USD.percent_change_30m>0,children:[Object(m.jsx)("div",{children:"30m"}),Object(m.jsxs)("div",{children:[t.quotes.USD.percent_change_30m,"%"]})]}),Object(m.jsxs)(q,{isRed:t.quotes.USD.percent_change_1h>0,children:[Object(m.jsx)("div",{children:"1h"}),Object(m.jsxs)("div",{children:[t.quotes.USD.percent_change_1h,"%"]})]}),Object(m.jsxs)(q,{isRed:t.quotes.USD.percent_change_6h>0,children:[Object(m.jsx)("div",{children:"6h"}),Object(m.jsxs)("div",{children:[t.quotes.USD.percent_change_6h,"%"]})]}),Object(m.jsxs)(q,{isRed:t.quotes.USD.percent_change_12h>0,children:[Object(m.jsx)("div",{children:"12h"}),Object(m.jsxs)("div",{children:[t.quotes.USD.percent_change_12h,"%"]})]}),Object(m.jsxs)(q,{isRed:t.quotes.USD.percent_change_24h>0,children:[Object(m.jsx)("div",{children:"24h"}),Object(m.jsxs)("div",{children:[t.quotes.USD.percent_change_24h,"%"]})]}),Object(m.jsxs)(q,{isRed:t.quotes.USD.percent_change_7d>0,children:[Object(m.jsx)("div",{children:"7d"}),Object(m.jsxs)("div",{children:[t.quotes.USD.percent_change_7d,"%"]})]}),Object(m.jsxs)(q,{isRed:t.quotes.USD.percent_change_30d>0,children:[Object(m.jsx)("div",{children:"30d"}),Object(m.jsxs)("div",{children:[t.quotes.USD.percent_change_30d,"%"]})]})]}),Object(m.jsxs)(w,{children:[Object(m.jsx)("div",{children:"started at : "}),Object(m.jsx)("div",{children:n.started_at})]}),Object(m.jsxs)(w,{children:[Object(m.jsx)("div",{children:"proof type : "}),Object(m.jsx)("div",{children:n.proof_type})]}),Object(m.jsxs)(w,{children:[Object(m.jsx)("div",{children:"\uc804\uace0\uc810 : "}),Object(m.jsx)("div",{children:t.quotes.USD.ath_price})]}),Object(m.jsxs)(w,{children:[Object(m.jsx)("div",{children:"\uc804\uace0\uc810 day : "}),Object(m.jsx)("div",{children:t.quotes.USD.ath_date})]}),Object(m.jsxs)(w,{children:[Object(m.jsx)("div",{children:"\uc804\uace0\uc810 \ub300\ube44 : "}),Object(m.jsxs)("div",{children:[t.quotes.USD.percent_from_price_ath,"%"]})]})]})},T=t(37),H=s.c.div(D||(D=Object(a.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n  height: 120vh;\n"]))),J=s.c.header(U||(U=Object(a.a)(["\n  height: 10vh;\n  /* padding: 100px 0px; */\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  place-content: center;\n  padding: 0 20px;\n  gap: 20px;\n"]))),E=s.c.button(L||(L=Object(a.a)(["\n  display: flex;\n  cursor: pointer;\n  justify-content: center;\n  align-items: center;\n  height: 30%;\n  justify-self: start;\n  align-self: center;\n  border-radius: 5px;\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  font-size: 30px;\n  font-weight: 500;\n  background-color: ",";\n  color: ",";\n  text-align: center;\n"])),(function(e){return e.isDark?e.theme.textColor:e.theme.bgColor}),(function(e){return e.theme.accentColor})),$=s.c.h1(R||(R=Object(a.a)(["\n  font-size: 30px;\n  color: ",";\n  grid-column: 2 / 3;\n  place-self: center;\n"])),(function(e){return e.theme.accentColor})),G=s.c.button(z||(z=Object(a.a)(["\n  display: flex;\n  cursor: pointer;\n  justify-content: center;\n  align-items: center;\n  height: 30%;\n  place-self: center;\n  justify-self: start;\n  border-radius: 5px;\n  padding: 15px;\n  span {\n    font-size: 12px;\n  }\n"]))),K=s.c.span(I||(I=Object(a.a)(["\n  text-align: center;\n"]))),N=s.c.div(Q||(Q=Object(a.a)(["\n  /* background-color: black; */\n  width: 90%;\n  height: 70px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: auto;\n  padding: 00px 40px;\n  margin-bottom: 30px;\n  border: 1px solid ",";\n"])),(function(e){return e.theme.textColor})),V=s.c.div(M||(M=Object(a.a)(["\n  /* background-color: yellowgreen; */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n\n  & span:first-child {\n    font-size: 12px;\n    text-transform: uppercase;\n  }\n"]))),W=s.c.div(A||(A=Object(a.a)(["\n  display: flex;\n  font-size: 15px;\n  /* text-align: center; */\n  width: 90%;\n  margin: auto;\n  margin-bottom: 30px;\n  line-height: 1.3;\n"]))),X=s.c.div(B||(B=Object(a.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n  width: 90%;\n  margin: auto;\n  justify-content: space-evenly;\n\n  margin-bottom: 40px;\n"]))),Y=s.c.div(F||(F=Object(a.a)(["\n  /* background-color: black; */\n  text-align: center;\n  text-transform: uppercase;\n  border-radius: 15px;\n  border: solid 1px\n    ",";\n  a {\n    display: block;\n    height: 100%;\n    padding: 20px 0px;\n\n    color: ",";\n  }\n"])),(function(e){return e.isActive?e.theme.accentColor:e.theme.textColor}),(function(e){return e.isActive?e.theme.accentColor:e.theme.textColor}));var Z,ee,ne,te,ce,ie,re,oe,ae=function(){var e=Object(l.g)().coinId;console.log(e);var n=Object(l.f)().state,t=Object(l.h)("/:random1/chart"),c=Object(l.h)("/:random2/price"),i=Object(g.c)(O),r=Object(j.a)(i,2),o=r[0],a=r[1],s=Object(h.useQuery)(["info",e],(function(){return function(e){return fetch("".concat(b,"/coins/").concat(e)).then((function(e){return e.json()}))}(e)})),p=s.isLoading,x=s.data,u=Object(h.useQuery)(["tickers",e],(function(){return function(e){return fetch("".concat(b,"/tickers/").concat(e)).then((function(e){return e.json()}))}(e)})),f=u.isLoading,v=u.data,y=p||f;return Object(m.jsxs)(H,{children:[Object(m.jsx)(T.a,{children:Object(m.jsx)("title",{children:null!==n&&void 0!==n&&n.name?null===n||void 0===n?void 0:n.name:y?"Loading...":"abc"})}),Object(m.jsxs)(J,{children:[Object(m.jsx)(E,{isDark:o,children:Object(m.jsx)(d.b,{to:"/",children:"< "})}),Object(m.jsx)($,{children:null!==n&&void 0!==n&&n.name?null===n||void 0===n?void 0:n.name:y?"Loading...":null===x||void 0===x?void 0:x.name}),Object(m.jsx)(G,{onClick:function(){return a((function(e){return!e}))},children:Object(m.jsx)("span",{children:o?"white mode":"dark mode"})})]}),y?Object(m.jsx)(K,{children:"Loading..."}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(N,{children:[Object(m.jsxs)(V,{children:[Object(m.jsx)("span",{children:"Rank:"}),Object(m.jsx)("span",{children:null===x||void 0===x?void 0:x.rank})]}),Object(m.jsxs)(V,{children:[Object(m.jsx)("span",{children:"symbol"}),Object(m.jsx)("span",{children:null===x||void 0===x?void 0:x.symbol})]}),Object(m.jsxs)(V,{children:[Object(m.jsx)("span",{children:"Price:"}),Object(m.jsxs)("span",{children:["$",null===v||void 0===v?void 0:v.quotes.USD.price.toFixed(3)]})]})]}),Object(m.jsx)(W,{children:null===x||void 0===x?void 0:x.description}),Object(m.jsxs)(N,{children:[Object(m.jsxs)(V,{children:[Object(m.jsx)("span",{children:"Total Suply:"}),Object(m.jsx)("span",{children:null===v||void 0===v?void 0:v.total_supply})]}),Object(m.jsxs)(V,{children:[Object(m.jsx)("span",{children:"Max Supply:"}),Object(m.jsx)("span",{children:null===v||void 0===v?void 0:v.max_supply})]})]}),Object(m.jsxs)(N,{children:[Object(m.jsxs)(V,{children:[Object(m.jsx)("span",{children:"total supply"}),Object(m.jsx)("span",{children:null===v||void 0===v?void 0:v.total_supply.toLocaleString()})]}),Object(m.jsxs)(V,{children:[Object(m.jsx)("span",{children:"max supply"}),Object(m.jsx)("span",{children:null===v||void 0===v?void 0:v.max_supply.toLocaleString()})]})]}),Object(m.jsxs)(X,{children:[Object(m.jsx)(Y,{isActive:null!==t,children:Object(m.jsx)(d.b,{to:{pathname:"/".concat(e,"/chart"),state:{name:null===x||void 0===x?void 0:x.name}},children:"chart"})}),Object(m.jsx)(Y,{isActive:null!==c,children:Object(m.jsx)(d.b,{to:{pathname:"/".concat(e,"/price"),state:{name:null===x||void 0===x?void 0:x.name}},children:"price"})})]}),Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{path:"/:random3/chart",children:Object(m.jsx)(k,{coinId:e})}),Object(m.jsx)(l.a,{path:"/:random4/price",children:x&&v&&Object(m.jsx)(P,{info:x,price:v})})]})]})]})},se=s.c.div(Z||(Z=Object(a.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),de=s.c.header(ee||(ee=Object(a.a)(["\n  height: 10vh;\n  /* padding: 100px 0px; */\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  padding-right: 20px;\n"]))),le=s.c.h1(ne||(ne=Object(a.a)(["\n  font-size: 48px;\n  color: ",";\n  grid-column: 2 / 3;\n  place-self: center;\n"])),(function(e){return e.theme.accentColor})),je=s.c.button(te||(te=Object(a.a)(["\n  display: flex;\n  cursor: pointer;\n  justify-content: center;\n  align-items: center;\n  height: 30%;\n  place-self: center;\n  justify-self: flex-end;\n  border-radius: 5px;\n  padding: 15px;\n  span {\n    font-size: 12px;\n  }\n"]))),he=s.c.ul(ce||(ce=Object(a.a)([""]))),be=s.c.li(ie||(ie=Object(a.a)(["\n  background-color: ",";\n  color: ",";\n  border: solid 1px ",";\n\n  border-radius: 15px;\n  margin-bottom: 10px;\n  img {\n    height: 40px;\n    width: 40px;\n    margin-right: 10px;\n  }\n  a {\n    padding: 20px;\n    transition: color 0.2s ease-in;\n    /* display: block; */\n    display: flex;\n    align-items: center;\n  }\n  &:hover {\n    border: solid 1px ",";\n    a {\n      color: ",";\n      font-weight: 500;\n    }\n  }\n"])),(function(e){return e.theme.cardBgColor}),(function(e){return e.theme.textColor}),(function(e){return e.theme.textColor}),(function(e){return e.theme.accentColor}),(function(e){return e.theme.accentColor})),pe=s.c.span(re||(re=Object(a.a)(["\n  text-align: center;\n"]))),xe=s.c.img(oe||(oe=Object(a.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"])));var ue=function(){var e=Object(h.useQuery)("allCoins",p),n=e.isLoading,t=e.data,c=Object(g.c)(O),i=Object(j.a)(c,2),r=i[0],o=i[1];return Object(m.jsxs)(se,{children:[Object(m.jsx)(T.a,{children:Object(m.jsx)("title",{children:"Coins"})}),Object(m.jsxs)(de,{children:[Object(m.jsx)(le,{children:"Coins"}),Object(m.jsx)(je,{onClick:function(){return o((function(e){return!e}))},children:Object(m.jsx)("span",{children:r?"white mode":"dark mode"})})]}),n?Object(m.jsx)(pe,{children:"Loading..."}):Object(m.jsx)(he,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(e){return Object(m.jsx)(be,{children:Object(m.jsxs)(d.b,{to:{pathname:"/".concat(e.id,"/chart"),state:{name:e.name}},children:[Object(m.jsx)(xe,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(e.symbol.toLowerCase())}),e.name," \u2192"]})},be.id)}))})]})};var ge,Oe=function(){return console.log("/coin-challenge-final"),Object(m.jsx)(d.a,{basename:"/coin-challenge-final",children:Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{path:"/:coinId",children:Object(m.jsx)(ae,{})}),Object(m.jsx)(l.a,{path:"/",children:Object(m.jsx)(ue,{})})]})})},me=t(58),fe={bgColor:"#2f3640",textColor:"white",accentColor:"#9c88ff",cardBgColor:"transparent"},ve={bgColor:"smokewhite",textColor:"black",accentColor:"#9c88ff",cardBgColor:"white"},ye=Object(s.b)(ge||(ge=Object(a.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video, button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.textColor}));var _e=function(){var e=Object(g.d)(O);return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(s.a,{theme:e?fe:ve,children:[Object(m.jsx)(ye,{}),Object(m.jsx)(Oe,{}),Object(m.jsx)(me.ReactQueryDevtools,{initialIsOpen:!0})]})})},ke=new h.QueryClient;o.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(g.a,{children:Object(m.jsx)(h.QueryClientProvider,{client:ke,children:Object(m.jsx)(_e,{})})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.a18b9f45.chunk.js.map