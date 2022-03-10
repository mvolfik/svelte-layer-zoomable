import{S as Ae,i as je,s as De,F as Pe,e as y,c as S,a as g,d as u,b as k,f as N,g as X,J as o,L as me,G as Ce,H as He,I as Te,q as ce,o as ve,M as Ve,v as qe,N as Re,w as Ge,x as Be,y as Je,z as Ue,A as Ie,O as Fe,B as Le,k as q,t as v,P as Qe,m as G,h as _,j as F,p as We,Q as xe,R as $e,C as et,T as tt,n as lt,K as Ne,U as nt}from"../chunks/vendor-f446b465.js";function at(l){let n,e,h=`translate(${l[9]*(.5-l[5])*l[4]}px, ${l[10]*(.5-l[6])*l[4]}px) scale(${l[4]})`,p=`${l[1]?l[0]:0}s`,r,c,i;const m=l[19].default,f=Pe(m,l,l[18],null);return{c(){n=y("div"),e=y("div"),f&&f.c(),this.h()},l(s){n=S(s,"DIV",{class:!0});var z=g(n);e=S(z,"DIV",{class:!0});var D=g(e);f&&f.l(D),D.forEach(u),z.forEach(u),this.h()},h(){k(e,"class","inner svelte-6d6utl"),N(e,"width",l[9]===void 0?"100%":`${l[9]}px`,!1),N(e,"height",l[10]===void 0?"100%":`${l[10]}px`,!1),N(e,"transform",h,!1),N(e,"transition-duration",p,!1),k(n,"class","outer svelte-6d6utl")},m(s,z){X(s,n,z),o(n,e),f&&f.m(e,null),l[22](e),l[23](n),r=!0,c||(i=[me(window,"mouseup",l[20]),me(window,"mousemove",l[21]),me(n,"wheel",l[24]),me(n,"mousedown",l[25])],c=!0)},p(s,[z]){f&&f.p&&(!r||z&262144)&&Ce(f,m,s,s[18],r?Te(m,s[18],z,null):He(s[18]),null),z&512&&N(e,"width",s[9]===void 0?"100%":`${s[9]}px`,!1),z&1024&&N(e,"height",s[10]===void 0?"100%":`${s[10]}px`,!1),z&1648&&h!==(h=`translate(${s[9]*(.5-s[5])*s[4]}px, ${s[10]*(.5-s[6])*s[4]}px) scale(${s[4]})`)&&N(e,"transform",h,!1),z&3&&p!==(p=`${s[1]?s[0]:0}s`)&&N(e,"transition-duration",p,!1)},i(s){r||(ce(f,s),r=!0)},o(s){ve(f,s),r=!1},d(s){s&&u(n),f&&f.d(s),l[22](null),l[23](null),c=!1,Ve(i)}}}function it(l,n,e){let{$$slots:h={},$$scope:p}=n,{initialScale:r=1}=n,{initialX:c=.5}=n,{initialY:i=.5}=n,{transitionDuration:m=.2}=n,{maxScale:f=10}=n,{minScale:s=.3}=n,z=!0,D,B,E=r,w=c,P=i,K=!1,M,A,O;function I({newX:t,newY:j,newScale:C,withTransition:V}){C!==void 0&&e(4,E=H(C)),t!==void 0&&e(5,w=t),j!==void 0&&e(6,P=j),V||(e(1,z=!1),setTimeout(()=>e(1,z=!0)))}function H(t){return Math.min(Math.max(t,s),f)}function L(t,j,C){if(K)return;const V=D.getBoundingClientRect();t=H(t),e(5,w-=(.5*A-j+V.left)*(t-E)/(A*t*E)),e(6,P-=(.5*O-C+V.top)*(t-E)/(O*t*E)),e(4,E=t)}qe(()=>{I({newX:c,newY:i,newScale:r,withTransition:!1});const t=D.getBoundingClientRect();e(10,O=t.height),e(9,A=t.width)});const W=()=>e(7,K=!1),T=t=>{!K||M===void 0||t.shiftKey||t.ctrlKey||t.altKey||(e(5,w=M.x+(M.ex-t.clientX)/(A*E)),e(6,P=M.y+(M.ey-t.clientY)/(O*E)))};function d(t){Re[t?"unshift":"push"](()=>{B=t,e(3,B)})}function x(t){Re[t?"unshift":"push"](()=>{D=t,e(2,D)})}const J=t=>{t.shiftKey||t.ctrlKey||t.altKey||(L(E*(1-t.deltaY*.001),t.clientX,t.clientY),t.preventDefault())},Q=t=>{t.shiftKey||t.ctrlKey||t.altKey||t.buttons===1&&(t.target.matches("a, a *, button, button *")||(t.preventDefault(),e(7,K=!0),e(8,M={x:w,ex:t.clientX,y:P,ey:t.clientY})))};return l.$$set=t=>{"initialScale"in t&&e(12,r=t.initialScale),"initialX"in t&&e(13,c=t.initialX),"initialY"in t&&e(14,i=t.initialY),"transitionDuration"in t&&e(0,m=t.transitionDuration),"maxScale"in t&&e(15,f=t.maxScale),"minScale"in t&&e(16,s=t.minScale),"$$scope"in t&&e(18,p=t.$$scope)},[m,z,D,B,E,w,P,K,M,A,O,L,r,c,i,f,s,I,p,h,W,T,d,x,J,Q]}class st extends Ae{constructor(n){super();je(this,n,it,at,De,{initialScale:12,initialX:13,initialY:14,transitionDuration:0,maxScale:15,minScale:16,moveResize:17})}get moveResize(){return this.$$.ctx[17]}}var ot="/svelte-layer-zoomable/_app/assets/svelte-76a86d68.svg";function rt(l){let n,e,h,p,r,c;return{c(){n=y("div"),e=y("img"),p=q(),r=y("a"),c=v("Svelte docs"),this.h()},l(i){n=S(i,"DIV",{class:!0});var m=g(n);e=S(m,"IMG",{src:!0,alt:!0,class:!0}),p=G(m),r=S(m,"A",{href:!0,class:!0});var f=g(r);c=_(f,"Svelte docs"),f.forEach(u),m.forEach(u),this.h()},h(){nt(e.src,h=ot)||k(e,"src",h),k(e,"alt","Svelte logo"),k(e,"class","svelte-15a52j6"),k(r,"href","https://svelte.dev/docs"),k(r,"class","svelte-15a52j6"),k(n,"class","inner svelte-15a52j6")},m(i,m){X(i,n,m),o(n,e),o(n,p),o(n,r),o(r,c)},p:Ne,d(i){i&&u(n)}}}function Ze(l){let n,e,h;const p=[l[2].initOpts,l[2].otherOpts];function r(i){l[4](i)}let c={$$slots:{default:[rt]},$$scope:{ctx:l}};for(let i=0;i<p.length;i+=1)c=et(c,p[i]);return l[1]!==void 0&&(c.moveResize=l[1]),n=new st({props:c}),Re.push(()=>tt(n,"moveResize",r)),{c(){Ge(n.$$.fragment)},l(i){Be(n.$$.fragment,i)},m(i,m){Je(n,i,m),h=!0},p(i,m){const f=m&4?Ue(p,[Ie(i[2].initOpts),Ie(i[2].otherOpts)]):{};m&32&&(f.$$scope={dirty:m,ctx:i}),!e&&m&2&&(e=!0,f.moveResize=i[1],Fe(()=>e=!1)),n.$set(f)},i(i){h||(ce(n.$$.fragment,i),h=!0)},o(i){ve(n.$$.fragment,i),h=!1},d(i){Le(n,i)}}}function ut(l){let n,e,h,p,r,c,i,m,f,s,z,D,B,E,w,P,K,M,A,O,I,H,L,W,T,d,x,J=l[2].otherOpts.transitionDuration+"",Q,t,j=l[2].otherOpts.minScale+"",C,V,$=l[2].otherOpts.maxScale+"",ae,_e,ee=l[2].initOpts.initialScale+"",ie,pe,te=l[2].initOpts.initialX+"",se,he,le=l[2].initOpts.initialY+"",oe,de,ne=JSON.stringify(l[2].moveResize).replace(',"withTransition":true',"").replaceAll('":',": ").replaceAll(',"',", ").replace('{"',"{ ").replace("}"," }")+"",re,be,ze,U,Ee=l[0],Z,Y=Ze(l);return{c(){n=q(),e=y("h1"),h=v("svelte-layer-zoomable"),p=q(),r=y("p"),c=v("GitHub repository: "),i=y("a"),m=v("mvolfik/svelte-layer-zoomable"),f=q(),s=y("p"),z=v("NPM: "),D=y("a"),B=v("svelte-layer-zoomable"),E=q(),w=y("p"),P=v("Note: do not confuse with "),K=y("code"),M=v("svelte-zoomable"),A=q(),O=y("div"),I=y("div"),H=y("h2"),L=v("Usage:"),W=q(),T=y("pre"),d=y("code"),x=v(`<script lang="ts">
  import Zoomable from "svelte-layer-zoomable";
  import type { MoveResize } from "svelte-layer-zoomable";

  let moveResize: MoveResize;
  let transitionDuration = `),Q=v(J),t=v(`;
  let minScale = `),C=v(j),V=v(`;
  let maxScale = `),ae=v($),_e=v(`;

  // ...
<\/script>

<Zoomable
  bind:moveResize
  initialScale={`),ie=v(ee),pe=v(`}
  initialX={`),se=v(te),he=v(`}
  initialY={`),oe=v(le),de=v(`}
  {transitionDuration}
  {minScale}
  {maxScale}
>
  <!-- layer content -->
</Zoomable>
<p>
  <button
    on:click={() =>
      moveResize(`),re=v(ne),be=v(`)}
  >
    Execute
  </button>
</p>
  `),ze=q(),U=y("div"),Y.c(),this.h()},l(a){Qe('[data-svelte="svelte-sxoe5o"]',document.head).forEach(u),n=G(a),e=S(a,"H1",{});var Oe=g(e);h=_(Oe,"svelte-layer-zoomable"),Oe.forEach(u),p=G(a),r=S(a,"P",{});var ye=g(r);c=_(ye,"GitHub repository: "),i=S(ye,"A",{href:!0});var we=g(i);m=_(we,"mvolfik/svelte-layer-zoomable"),we.forEach(u),ye.forEach(u),f=G(a),s=S(a,"P",{});var Se=g(s);z=_(Se,"NPM: "),D=S(Se,"A",{href:!0});var ke=g(D);B=_(ke,"svelte-layer-zoomable"),ke.forEach(u),Se.forEach(u),E=G(a),w=S(a,"P",{});var ge=g(w);P=_(ge,"Note: do not confuse with "),K=S(ge,"CODE",{});var Ye=g(K);M=_(Ye,"svelte-zoomable"),Ye.forEach(u),ge.forEach(u),A=G(a),O=S(a,"DIV",{class:!0});var ue=g(O);I=S(ue,"DIV",{class:!0});var fe=g(I);H=S(fe,"H2",{});var Xe=g(H);L=_(Xe,"Usage:"),Xe.forEach(u),W=G(fe),T=S(fe,"PRE",{});var Ke=g(T);d=S(Ke,"CODE",{});var R=g(d);x=_(R,`<script lang="ts">
  import Zoomable from "svelte-layer-zoomable";
  import type { MoveResize } from "svelte-layer-zoomable";

  let moveResize: MoveResize;
  let transitionDuration = `),Q=_(R,J),t=_(R,`;
  let minScale = `),C=_(R,j),V=_(R,`;
  let maxScale = `),ae=_(R,$),_e=_(R,`;

  // ...
<\/script>

<Zoomable
  bind:moveResize
  initialScale={`),ie=_(R,ee),pe=_(R,`}
  initialX={`),se=_(R,te),he=_(R,`}
  initialY={`),oe=_(R,le),de=_(R,`}
  {transitionDuration}
  {minScale}
  {maxScale}
>
  <!-- layer content -->
</Zoomable>
<p>
  <button
    on:click={() =>
      moveResize(`),re=_(R,ne),be=_(R,`)}
  >
    Execute
  </button>
</p>
  `),R.forEach(u),Ke.forEach(u),fe.forEach(u),ze=G(ue),U=S(ue,"DIV",{class:!0});var Me=g(U);Y.l(Me),Me.forEach(u),ue.forEach(u),this.h()},h(){document.title="svelte-layer-zoomable",k(i,"href","https://github.com/mvolfik/svelte-layer-zoomable"),k(D,"href","https://npmjs.com/package/svelte-layer-zoomable"),N(w,"font-weight","bold",!1),N(T,"overflow","auto",!1),k(I,"class","usage"),k(U,"class","outer svelte-15a52j6"),k(O,"class","layout")},m(a,b){X(a,n,b),X(a,e,b),o(e,h),X(a,p,b),X(a,r,b),o(r,c),o(r,i),o(i,m),X(a,f,b),X(a,s,b),o(s,z),o(s,D),o(D,B),X(a,E,b),X(a,w,b),o(w,P),o(w,K),o(K,M),X(a,A,b),X(a,O,b),o(O,I),o(I,H),o(H,L),o(I,W),o(I,T),o(T,d),o(d,x),o(d,Q),o(d,t),o(d,C),o(d,V),o(d,ae),o(d,_e),o(d,ie),o(d,pe),o(d,se),o(d,he),o(d,oe),o(d,de),o(d,re),o(d,be),o(O,ze),o(O,U),Y.m(U,null),Z=!0},p(a,[b]){(!Z||b&4)&&J!==(J=a[2].otherOpts.transitionDuration+"")&&F(Q,J),(!Z||b&4)&&j!==(j=a[2].otherOpts.minScale+"")&&F(C,j),(!Z||b&4)&&$!==($=a[2].otherOpts.maxScale+"")&&F(ae,$),(!Z||b&4)&&ee!==(ee=a[2].initOpts.initialScale+"")&&F(ie,ee),(!Z||b&4)&&te!==(te=a[2].initOpts.initialX+"")&&F(se,te),(!Z||b&4)&&le!==(le=a[2].initOpts.initialY+"")&&F(oe,le),(!Z||b&4)&&ne!==(ne=JSON.stringify(a[2].moveResize).replace(',"withTransition":true',"").replaceAll('":',": ").replaceAll(',"',", ").replace('{"',"{ ").replace("}"," }")+"")&&F(re,ne),b&1&&De(Ee,Ee=a[0])?(lt(),ve(Y,1,1,Ne),We(),Y=Ze(a),Y.c(),ce(Y),Y.m(U,null)):Y.p(a,b)},i(a){Z||(ce(Y),Z=!0)},o(a){ve(Y),Z=!1},d(a){a&&u(n),a&&u(e),a&&u(p),a&&u(r),a&&u(f),a&&u(s),a&&u(E),a&&u(w),a&&u(A),a&&u(O),Y.d(a)}}}function ft(l,n,e){let h,p=0;const r=xe({$label:"svelte-layer-zoomable",initOpts:{$label:"Initialization options",initialScale:{value:1,min:.1,max:10,step:.1},initialX:{value:.4,min:-1.5,max:2.5,step:.1},initialY:{value:.4,min:-1.5,max:2.5,step:.1},"Destroy & recreate to take effect":()=>{e(0,p+=1)}},otherOpts:{$label:"Other options",transitionDuration:{value:.2,min:0,max:2,step:.1},minScale:{value:.3,min:.1,max:1,step:.1},maxScale:{value:10,min:2,max:20,step:.5}},moveResize:{$label:"`Zoomable.moveResize(args)`",newScale:{value:1,min:.1,max:10,step:.1},newX:{value:.4,min:-1.5,max:2.5,step:.1},newY:{value:.4,min:-1.5,max:2.5,step:.1},withTransition:!0,Execute:()=>{c(h.moveResize)}}});$e(l,r,m=>e(2,h=m));let c;function i(m){c=m,e(1,c)}return[p,c,h,r,i]}class ct extends Ae{constructor(n){super();je(this,n,ft,ut,De,{})}}export{ct as default};
