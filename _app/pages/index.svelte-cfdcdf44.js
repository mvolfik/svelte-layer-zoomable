import{S as Ae,i as Ne,s as De,F as He,e as y,c as S,a as R,d as u,b as Z,f as A,g as k,J as o,L as fe,G as Te,H as Ve,I as Ce,q as ce,o as _e,M as qe,v as Ge,N as Re,w as je,x as Je,y as Ue,z as Be,A as Ie,O as Fe,B as Le,k as J,t as c,P as Qe,m as U,h as _,j as B,p as We,Q as xe,R as $e,C as et,T as tt,n as lt,K as Pe,U as nt}from"../chunks/vendor-f446b465.js";function it(l){let n,e,v=`scale(${l[4]}) translate(${l[9]*(.5-l[5])}px, ${l[10]*(.5-l[6])}px)`,f=`${l[1]?l[0]:0}s`,r,p,s;const h=l[19].default,m=He(h,l,l[18],null);return{c(){n=y("div"),e=y("div"),m&&m.c(),this.h()},l(a){n=S(a,"DIV",{class:!0});var z=R(n);e=S(z,"DIV",{class:!0});var D=R(e);m&&m.l(D),D.forEach(u),z.forEach(u),this.h()},h(){Z(e,"class","inner svelte-6d6utl"),A(e,"width",l[9]===void 0?"100%":`${l[9]}px`,!1),A(e,"height",l[10]===void 0?"100%":`${l[10]}px`,!1),A(e,"transform",v,!1),A(e,"transition-duration",f,!1),Z(n,"class","outer svelte-6d6utl")},m(a,z){k(a,n,z),o(n,e),m&&m.m(e,null),l[22](e),l[23](n),r=!0,p||(s=[fe(window,"mouseup",l[20]),fe(window,"mousemove",l[21]),fe(n,"wheel",l[24]),fe(n,"mousedown",l[25])],p=!0)},p(a,[z]){m&&m.p&&(!r||z&262144)&&Te(m,h,a,a[18],r?Ce(h,a[18],z,null):Ve(a[18]),null),z&512&&A(e,"width",a[9]===void 0?"100%":`${a[9]}px`,!1),z&1024&&A(e,"height",a[10]===void 0?"100%":`${a[10]}px`,!1),z&1648&&v!==(v=`scale(${a[4]}) translate(${a[9]*(.5-a[5])}px, ${a[10]*(.5-a[6])}px)`)&&A(e,"transform",v,!1),z&3&&f!==(f=`${a[1]?a[0]:0}s`)&&A(e,"transition-duration",f,!1)},i(a){r||(ce(m,a),r=!0)},o(a){_e(m,a),r=!1},d(a){a&&u(n),m&&m.d(a),l[22](null),l[23](null),p=!1,qe(s)}}}function at(l,n,e){let{$$slots:v={},$$scope:f}=n,{initialScale:r=1}=n,{initialX:p=.5}=n,{initialY:s=.5}=n,{transitionDuration:h=.2}=n,{maxScale:m=10}=n,{minScale:a=.3}=n,z=!0,D,q,Y=r,O=p,P=s,X=!1,K,H,E;function M({newX:t,newY:N,newScale:C,withTransition:x}){C!==void 0&&e(4,Y=T(C)),t!==void 0&&e(5,O=t),N!==void 0&&e(6,P=N),x||(e(1,z=!1),setTimeout(()=>e(1,z=!0)))}function T(t){return Math.min(Math.max(t,a),m)}function F(t,N,C){X||(t=T(t),e(4,Y=t))}Ge(()=>{M({newX:p,newY:s,newScale:r,withTransition:!1});const t=D.getBoundingClientRect();e(10,E=t.height),e(9,H=t.width)});const Q=()=>e(7,X=!1),V=t=>{!X||K===void 0||t.shiftKey||t.ctrlKey||t.altKey||(e(5,O=K.x+(K.ex-t.clientX)/(H*Y)),e(6,P=K.y+(K.ey-t.clientY)/(E*Y)))};function d(t){Re[t?"unshift":"push"](()=>{q=t,e(3,q)})}function W(t){Re[t?"unshift":"push"](()=>{D=t,e(2,D)})}const G=t=>{t.shiftKey||t.ctrlKey||t.altKey||(F(Y*(1-t.deltaY*.001),t.clientX,t.clientY),t.preventDefault())},L=t=>{t.shiftKey||t.ctrlKey||t.altKey||t.buttons===1&&(t.preventDefault(),e(7,X=!0),e(8,K={x:O,ex:t.clientX,y:P,ey:t.clientY}))};return l.$$set=t=>{"initialScale"in t&&e(12,r=t.initialScale),"initialX"in t&&e(13,p=t.initialX),"initialY"in t&&e(14,s=t.initialY),"transitionDuration"in t&&e(0,h=t.transitionDuration),"maxScale"in t&&e(15,m=t.maxScale),"minScale"in t&&e(16,a=t.minScale),"$$scope"in t&&e(18,f=t.$$scope)},[h,z,D,q,Y,O,P,X,K,H,E,F,r,p,s,m,a,M,f,v,Q,V,d,W,G,L]}class st extends Ae{constructor(n){super();Ne(this,n,at,it,De,{initialScale:12,initialX:13,initialY:14,transitionDuration:0,maxScale:15,minScale:16,moveResize:17})}get moveResize(){return this.$$.ctx[17]}}var ot="/svelte-layer-zoomable/_app/assets/svelte-76a86d68.svg";function rt(l){let n,e,v;return{c(){n=y("div"),e=y("img"),this.h()},l(f){n=S(f,"DIV",{class:!0});var r=R(n);e=S(r,"IMG",{src:!0,alt:!0,class:!0}),r.forEach(u),this.h()},h(){nt(e.src,v=ot)||Z(e,"src",v),Z(e,"alt","Svelte logo"),Z(e,"class","svelte-1c61b5d"),Z(n,"class","inner svelte-1c61b5d")},m(f,r){k(f,n,r),o(n,e)},p:Pe,d(f){f&&u(n)}}}function Ze(l){let n,e,v;const f=[l[2].initOpts,l[2].otherOpts];function r(s){l[4](s)}let p={$$slots:{default:[rt]},$$scope:{ctx:l}};for(let s=0;s<f.length;s+=1)p=et(p,f[s]);return l[1]!==void 0&&(p.moveResize=l[1]),n=new st({props:p}),Re.push(()=>tt(n,"moveResize",r)),{c(){je(n.$$.fragment)},l(s){Je(n.$$.fragment,s)},m(s,h){Ue(n,s,h),v=!0},p(s,h){const m=h&4?Be(f,[Ie(s[2].initOpts),Ie(s[2].otherOpts)]):{};h&32&&(m.$$scope={dirty:h,ctx:s}),!e&&h&2&&(e=!0,m.moveResize=s[1],Fe(()=>e=!1)),n.$set(m)},i(s){v||(ce(n.$$.fragment,s),v=!0)},o(s){_e(n.$$.fragment,s),v=!1},d(s){Le(n,s)}}}function ut(l){let n,e,v,f,r,p,s,h,m,a,z,D,q,Y,O,P,X,K,H,E,M,T,F,Q,V,d,W,G=l[2].otherOpts.transitionDuration+"",L,t,N=l[2].otherOpts.minScale+"",C,x,$=l[2].otherOpts.maxScale+"",ie,ve,ee=l[2].initOpts.initialScale+"",ae,pe,te=l[2].initOpts.initialX+"",se,he,le=l[2].initOpts.initialY+"",oe,de,ne=JSON.stringify(l[2].moveResize).replace(',"withTransition":true',"").replaceAll('":',": ").replaceAll(',"',", ").replace('{"',"{ ").replace("}"," }")+"",re,be,ze,j,Oe=l[0],I,w=Ze(l);return{c(){n=J(),e=y("h1"),v=c("svelte-layer-zoomable"),f=J(),r=y("p"),p=c("GitHub repository: "),s=y("a"),h=c("mvolfik/svelte-layer-zoomable"),m=J(),a=y("p"),z=c("NPM: "),D=y("a"),q=c("svelte-layer-zoomable"),Y=J(),O=y("p"),P=c("Note: do not confuse with "),X=y("code"),K=c("svelte-zoomable"),H=J(),E=y("div"),M=y("div"),T=y("h2"),F=c("Usage:"),Q=J(),V=y("pre"),d=y("code"),W=c(`<script lang="ts">
  import Zoomable from "svelte-layer-zoomable";
  import type { MoveResize } from "svelte-layer-zoomable";

  let moveResize: MoveResize;
  let transitionDuration = `),L=c(G),t=c(`;
  let minScale = `),C=c(N),x=c(`;
  let maxScale = `),ie=c($),ve=c(`;

  // ...
<\/script>

<Zoomable
  bind:moveResize
  initialScale={`),ae=c(ee),pe=c(`}
  initialX={`),se=c(te),he=c(`}
  initialY={`),oe=c(le),de=c(`}
  {transitionDuration}
  {minScale}
  {maxScale}
>
  <!-- layer content -->
</Zoomable>
<p>
  <button
    on:click={() =>
      moveResize(`),re=c(ne),be=c(`)}
  >
    Execute
  </button>
</p>
  `),ze=J(),j=y("div"),w.c(),this.h()},l(i){Qe('[data-svelte="svelte-sxoe5o"]',document.head).forEach(u),n=U(i),e=S(i,"H1",{});var Ee=R(e);v=_(Ee,"svelte-layer-zoomable"),Ee.forEach(u),f=U(i),r=S(i,"P",{});var ye=R(r);p=_(ye,"GitHub repository: "),s=S(ye,"A",{href:!0});var we=R(s);h=_(we,"mvolfik/svelte-layer-zoomable"),we.forEach(u),ye.forEach(u),m=U(i),a=S(i,"P",{});var Se=R(a);z=_(Se,"NPM: "),D=S(Se,"A",{href:!0});var ke=R(D);q=_(ke,"svelte-layer-zoomable"),ke.forEach(u),Se.forEach(u),Y=U(i),O=S(i,"P",{});var ge=R(O);P=_(ge,"Note: do not confuse with "),X=S(ge,"CODE",{});var Ye=R(X);K=_(Ye,"svelte-zoomable"),Ye.forEach(u),ge.forEach(u),H=U(i),E=S(i,"DIV",{class:!0});var ue=R(E);M=S(ue,"DIV",{class:!0});var me=R(M);T=S(me,"H2",{});var Xe=R(T);F=_(Xe,"Usage:"),Xe.forEach(u),Q=U(me),V=S(me,"PRE",{});var Ke=R(V);d=S(Ke,"CODE",{});var g=R(d);W=_(g,`<script lang="ts">
  import Zoomable from "svelte-layer-zoomable";
  import type { MoveResize } from "svelte-layer-zoomable";

  let moveResize: MoveResize;
  let transitionDuration = `),L=_(g,G),t=_(g,`;
  let minScale = `),C=_(g,N),x=_(g,`;
  let maxScale = `),ie=_(g,$),ve=_(g,`;

  // ...
<\/script>

<Zoomable
  bind:moveResize
  initialScale={`),ae=_(g,ee),pe=_(g,`}
  initialX={`),se=_(g,te),he=_(g,`}
  initialY={`),oe=_(g,le),de=_(g,`}
  {transitionDuration}
  {minScale}
  {maxScale}
>
  <!-- layer content -->
</Zoomable>
<p>
  <button
    on:click={() =>
      moveResize(`),re=_(g,ne),be=_(g,`)}
  >
    Execute
  </button>
</p>
  `),g.forEach(u),Ke.forEach(u),me.forEach(u),ze=U(ue),j=S(ue,"DIV",{class:!0});var Me=R(j);w.l(Me),Me.forEach(u),ue.forEach(u),this.h()},h(){document.title="svelte-layer-zoomable",Z(s,"href","https://github.com/mvolfik/svelte-layer-zoomable"),Z(D,"href","https://npmjs.com/package/svelte-layer-zoomable"),A(O,"font-weight","bold",!1),A(V,"overflow","auto",!1),Z(M,"class","usage"),Z(j,"class","outer svelte-1c61b5d"),Z(E,"class","layout")},m(i,b){k(i,n,b),k(i,e,b),o(e,v),k(i,f,b),k(i,r,b),o(r,p),o(r,s),o(s,h),k(i,m,b),k(i,a,b),o(a,z),o(a,D),o(D,q),k(i,Y,b),k(i,O,b),o(O,P),o(O,X),o(X,K),k(i,H,b),k(i,E,b),o(E,M),o(M,T),o(T,F),o(M,Q),o(M,V),o(V,d),o(d,W),o(d,L),o(d,t),o(d,C),o(d,x),o(d,ie),o(d,ve),o(d,ae),o(d,pe),o(d,se),o(d,he),o(d,oe),o(d,de),o(d,re),o(d,be),o(E,ze),o(E,j),w.m(j,null),I=!0},p(i,[b]){(!I||b&4)&&G!==(G=i[2].otherOpts.transitionDuration+"")&&B(L,G),(!I||b&4)&&N!==(N=i[2].otherOpts.minScale+"")&&B(C,N),(!I||b&4)&&$!==($=i[2].otherOpts.maxScale+"")&&B(ie,$),(!I||b&4)&&ee!==(ee=i[2].initOpts.initialScale+"")&&B(ae,ee),(!I||b&4)&&te!==(te=i[2].initOpts.initialX+"")&&B(se,te),(!I||b&4)&&le!==(le=i[2].initOpts.initialY+"")&&B(oe,le),(!I||b&4)&&ne!==(ne=JSON.stringify(i[2].moveResize).replace(',"withTransition":true',"").replaceAll('":',": ").replaceAll(',"',", ").replace('{"',"{ ").replace("}"," }")+"")&&B(re,ne),b&1&&De(Oe,Oe=i[0])?(lt(),_e(w,1,1,Pe),We(),w=Ze(i),w.c(),ce(w),w.m(j,null)):w.p(i,b)},i(i){I||(ce(w),I=!0)},o(i){_e(w),I=!1},d(i){i&&u(n),i&&u(e),i&&u(f),i&&u(r),i&&u(m),i&&u(a),i&&u(Y),i&&u(O),i&&u(H),i&&u(E),w.d(i)}}}function mt(l,n,e){let v,f=0;const r=xe({$label:"svelte-layer-zoomable",initOpts:{$label:"Initialization options",initialScale:{value:1,min:.1,max:10,step:.1},initialX:{value:.4,min:-1.5,max:2.5,step:.1},initialY:{value:.4,min:-1.5,max:2.5,step:.1},"Destroy & recreate to take effect":()=>{e(0,f+=1)}},otherOpts:{$label:"Other options",transitionDuration:{value:.2,min:0,max:2,step:.1},minScale:{value:.3,min:.1,max:1,step:.1},maxScale:{value:10,min:2,max:20,step:.5}},moveResize:{$label:"`Zoomable.moveResize(args)`",newScale:{value:1,min:.1,max:10,step:.1},newX:{value:.4,min:-1.5,max:2.5,step:.1},newY:{value:.4,min:-1.5,max:2.5,step:.1},withTransition:!0,Execute:()=>{p(v.moveResize)}}});$e(l,r,h=>e(2,v=h));let p;function s(h){p=h,e(1,p)}return[f,p,v,r,s]}class ct extends Ae{constructor(n){super();Ne(this,n,mt,ut,De,{})}}export{ct as default};
