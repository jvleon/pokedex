(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{39:function(n,e,t){n.exports=t.p+"static/media/logo.023d617a.png"},42:function(n,e,t){n.exports=t(56)},47:function(n,e,t){},48:function(n,e,t){},56:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(17),i=t.n(o),c=(t(47),t(48),t(18)),l=t(11),u=t(15),s=t(33),p=t(40),d=t(25),f=[],m=Object(u.c)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0,t=e.type,a=e.payload;switch(t){case"GET_ALL_POKEMONS":return Object(d.a)({},n,{pokemons:Object(p.a)(a)});default:return n}}),Object(u.a)(s.a)),x=t(14),b=t(19),h=t(20),v=t(23),g=t(22),k=t(24),E=t(12),j=t.n(E),O=t(26);var w=function(){var n=Object(O.a)(j.a.mark((function n(e){var t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={},n.prev=1,n.next=4,fetch("https://pokeapi.co/api/v2/pokemon/".concat(e,"/")).then((function(n){return n.json()})).then((function(n){t=n})).catch((function(n){console.log(n)}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),console.log("error on fetch");case 9:return n.abrupt("return",t);case 10:case"end":return n.stop()}}),n,null,[[1,6]])})));return function(e){return n.apply(this,arguments)}}(),y=function(){return function(n){fetch("https://pokeapi.co/api/v2/pokedex/1/").then((function(n){return n.json()})).then(function(){var e=Object(O.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.pokemon_entries.map(function(){var n=Object(O.a)(j.a.mark((function n(e){var t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w(e.pokemon_species.name).then((function(n){return Object(d.a)({},e.pokemon_species,{extra_data:n})}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()));case 2:a=e.sent,n({type:"GET_ALL_POKEMONS",payload:a});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}},_=t(2),C=t(3);function P(){var n=Object(_.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  box-sizing: border-box;\n"]);return P=function(){return n},n}function A(){var n=Object(_.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]);return A=function(){return n},n}var F=C.a.div(A()),S=C.a.div(P());function z(){var n=Object(_.a)(["\n  background-color: dodgerblue;\n  color: white;\n  transform: rotateY(180deg);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: rgba(248, 255, 174, .5);\n  & > div {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    margin: 5px 0;\n    color: black;\n  }\n  & > span {\n    font-weight: 500;\n    font-size: 35px;\n    color: black;\n  }\n"]);return z=function(){return n},n}function D(){var n=Object(_.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n  background: linear-gradient(to bottom,#fff,#43C6AC);\n  color: black;\n  box-sizing: border-box;\n  > img {\n    height: 100%;\n    max-width: 100%;\n  }\n"]);return D=function(){return n},n}function N(){var n=Object(_.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.8s;\n  transform-style: preserve-3d;\n  ",":hover & {\n    transform: rotateY(180deg);\n  }\n"]);return N=function(){return n},n}function L(){var n=Object(_.a)(["\n  background-color: transparent;\n  height: 100%;\n  width: 100%;\n  border: 4px solid #f1f1f1;\n  perspective: 1000px;\n  cursor: pointer;\n  box-sizing: border-box;\n"]);return L=function(){return n},n}function M(){var n=Object(_.a)(["\n  width: 25%;\n  height: 300px;\n  @media screen and (max-width: 500px) {\n    width: 50%;\n  }\n"]);return M=function(){return n},n}var T=C.a.div(M()),B=C.a.div(L()),G=C.a.div(N(),B),J=C.a.div(D()),K=C.a.div(z()),W=function(n){var e=n.onClick,t=n.data;return r.a.createElement(T,null,r.a.createElement(B,{onClick:function(){return e("pokemon/".concat(t.name))}},r.a.createElement(G,null,r.a.createElement(J,null,r.a.createElement("img",{src:t.extra_data&&t.extra_data.sprites&&t.extra_data.sprites.front_default,alt:t.name})),r.a.createElement(K,null,r.a.createElement("span",null,t.name),t.extra_data&&t.extra_data.types&&t.extra_data.types.length>0&&t.extra_data.types.map((function(n,e){return r.a.createElement("div",{key:e},n.type.name)}))))))},Y=t(16);function I(){var n=Object(_.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  ",";\n  & .page-counter {\n    color: #fff;\n    font-weight: 500;\n    letter-spacing: 2px;\n    text-shadow: 2px 0 0 #43c6ac, -2px 0 0 #43c6ac, 0 2px 0 #43c6ac, 0 -2px 0 #43c6ac, 1px 1px #43c6ac, -1px -1px 0 #43c6ac, 1px -1px 0 #43c6ac, -1px 1px 0 #43c6ac;\n  }\n"]);return I=function(){return n},n}function $(){var n=Object(_.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]);return $=function(){return n},n}C.a.div($());var q=C.a.div(I(),(function(n){if(n.alignCenter)return"\n      align-items: center;\n      justify-content: center;\n    "})),H=Object(l.f)((function(n){var e=n.pokemons,t=n.history.push,o=Object(a.useState)([]),i=Object(Y.a)(o,2),c=i[0],l=i[1],u=Object(a.useState)(8),s=Object(Y.a)(u,2),p=s[0],d=(s[1],Object(a.useState)(0)),f=Object(Y.a)(d,2),m=f[0],x=f[1],b=Object(a.useState)(0),h=Object(Y.a)(b,2),v=h[0],g=h[1];Object(a.useEffect)((function(){var n,t=Math.ceil(e.length/p);g(t),n=0===m?e.slice(m,p):e.slice(m,m*p),l(n)}),[e]);return r.a.createElement(q,null,r.a.createElement(q,{alignCenter:!0},r.a.createElement(nn,{onClick:function(){var n=p,t=e.slice(0,n);l(t),x(0)},disabled:0===m},"First"),r.a.createElement(nn,{onClick:function(){var n=m-1,t=n*p,a=n*p+p,r=e.slice(t,a);l(r),x(m-1)},disabled:0===m},"<"),r.a.createElement("div",{className:"page-counter"},"Page: ",m+1),r.a.createElement(nn,{onClick:function(){var n=m+1,t=n*p,a=n*p+p,r=e.slice(t,a);l(r),x(m+1)},disabled:v===m+1},">"),r.a.createElement(nn,{onClick:function(){var n=(v-1)*p,t=v*p+p,a=e.slice(n,t);l(a),x(v-1)},disabled:v===m+1},"Last")),r.a.createElement(q,null,c.map((function(n,e){return r.a.createElement(W,{key:e,data:n,onClick:t})}))))})),Q=t(39),R=t.n(Q);function U(){var n=Object(_.a)(["\n  width: 100%;\n  height: 150px;\n  display: flex;\n  padding: 30px 5px;\n  box-sizing: border-box;\n  align-items: flex-end;\n  background: linear-gradient(to bottom, #F8FFAE, #43C6AC);\n  & > img {\n    width: 300px;\n  }\n  @media screen and (max-width: 500px) {\n    justify-content: center;\n  }\n"]);return U=function(){return n},n}var V=C.a.header(U()),X=function(){return r.a.createElement(V,null,r.a.createElement("img",{src:R.a,alt:"logo"}))};function Z(){var n=Object(_.a)(["\n  margin: 5px;\n  border: 1px solid #43c6ac;\n  background: transparent;\n  padding: 5px 20px;\n  outline: none;\n  transition: .2s;\n  color: #43c6ac;\n  font-weight: 800;\n  &:hover {\n    background: #43c6ac;\n    color: #fff;\n  }\n  &:active {\n    box-shadow: inset 0 1px 10px rgba(0,0,0,.25);\n  }\n  &:disabled {\n    background: gray;\n    color: #fff;\n    cursor: not-allowed;\n    border: 1px solid gray;\n  }\n"]);return Z=function(){return n},n}var nn=C.a.button(Z());function en(){var n=Object(_.a)(["\n  flex: 2;\n  flex-direction: column;\n  & > .abilities {\n    width: 100%;\n    margin: 10px 0;\n  }\n  & > .stats {\n    width: 100%;\n    margin: 10px 0;\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(_.a)(["\n  flex: 1;\n  flex-direction: column;\n  & > div {\n    margin: 10px 0;\n  }\n  & > span {\n    display: block;\n    margin: 10px 0;\n  }\n  & > .types {\n\n  }\n"]);return tn=function(){return n},n}function an(){var n=Object(_.a)(["\n  flex: 4;\n  display: flex;\n  padding: 20px;\n  border-left: 1px solid rgba(0,0,0,.25);\n  flex-direction: row;\n"]);return an=function(){return n},n}function rn(){var n=Object(_.a)(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  border: 2px solid #fff;\n  & > img {\n    width: 100%;\n  }\n"]);return rn=function(){return n},n}function on(){var n=Object(_.a)(["\n  width: 50%;\n  margin: 100px auto;\n  height: 300px;\n  display: flex;\n  box-shadow: 0 2px 15px rgba(0,0,0,.25);\n  padding: 10px;\n"]);return on=function(){return n},n}var cn=C.a.div(on()),ln=C.a.div(rn()),un=C.a.div(an()),sn=C.a.div(tn()),pn=C.a.div(en()),dn=function(n){var e=n.pokemon;return r.a.createElement(cn,null,console.log("pokemon>>",e),r.a.createElement(ln,null,r.a.createElement("img",{src:e.extra_data&&e.extra_data.sprites&&e.extra_data.sprites.front_default,alt:e.name})),r.a.createElement(un,null,r.a.createElement(sn,null,r.a.createElement("span",null,"Name: ",e.name),r.a.createElement("span",null,"Types:"),e.extra_data&&e.extra_data.types&&e.extra_data.types.map((function(n){var e=n.type.name;return r.a.createElement("div",null,e)}))),r.a.createElement(pn,null,r.a.createElement("div",{className:"abilities"},r.a.createElement("span",null,"Abilities: "),r.a.createElement("div",null,e.extra_data&&e.extra_data.abilities.map((function(n,e){var t=n.ability.name;return r.a.createElement("span",{key:e},t," ")})))),r.a.createElement("div",{className:"stats"},r.a.createElement("span",null,"Stats: "),e.extra_data&&e.extra_data.stats.map((function(n,e){var t=n.base_stat,a=n.stat.name;return r.a.createElement("div",{key:e},r.a.createElement("span",null,a," - "),r.a.createElement("span",null,t))}))))))};function fn(){var n=Object(_.a)(["\n  border: 16px solid #F8FFAE;\n  border-top: 16px solid #43C6AC;\n  border-radius: 50%;\n  width: 150px;\n  height: 150px;\n  animation: spin 2s linear infinite;\n  margin: 30vh auto;\n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n  }\n"]);return fn=function(){return n},n}var mn=C.a.div(fn()),xn=function(n){function e(){return Object(b.a)(this,e),Object(v.a)(this,Object(g.a)(e).apply(this,arguments))}return Object(k.a)(e,n),Object(h.a)(e,[{key:"componentDidMount",value:function(){this.props.getPokedex()}},{key:"render",value:function(){var n=this.props.pokemons;return r.a.createElement(F,null,r.a.createElement(S,null,n&&n.length>0?r.a.createElement(H,{pokemons:n}):r.a.createElement(mn,null)))}}]),e}(a.Component),bn={getPokedex:y},hn=Object(x.b)((function(n){return{pokemons:n.pokemons}}),bn)(xn),vn=t(21);function gn(){var n=Object(_.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  box-sizing: border-box;\n"]);return gn=function(){return n},n}function kn(){var n=Object(_.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]);return kn=function(){return n},n}var En=C.a.div(kn()),jn=(C.a.div(gn()),function(n){function e(){var n;return Object(b.a)(this,e),(n=Object(v.a)(this,Object(g.a)(e).call(this))).state={currentPokemon:[]},n.findpokemonData=n.findpokemonData.bind(Object(vn.a)(n)),n}return Object(k.a)(e,n),Object(h.a)(e,[{key:"componentDidMount",value:function(){this.props.getPokedex()}},{key:"findpokemonData",value:function(){var n=this.props.pokemons,e=this.props.match.params.name,t=n.filter((function(n){return n.name==e}));return r.a.createElement(dn,{pokemon:t[0]})}},{key:"render",value:function(){var n=this.props.pokemons,e=this.props.match.params.name;return r.a.createElement(En,null,n&&n.length>0&&e?this.findpokemonData():e?r.a.createElement(mn,null):r.a.createElement(l.a,{push:!0,to:"/"}))}}]),e}(a.Component)),On={getPokedex:y},wn=Object(l.f)(Object(x.b)((function(n){return{pokemons:n.pokemons}}),On)(jn)),yn=function(){return r.a.createElement(x.a,{store:m},r.a.createElement(X,null),r.a.createElement(c.a,null,r.a.createElement(l.b,{exact:!0,path:"/",component:hn}),r.a.createElement(l.b,{component:wn,path:"/pokemon/"}),r.a.createElement(l.b,{component:wn,path:"/pokemon/:name"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(yn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.e3993d1d.chunk.js.map