import{S as Ze,i as Ae,s as ge,F as Pe,e as y,c as S,a as O,d as r,b as I,f as B,L as Ve,g as X,J as s,M as Te,N as me,G as qe,H as Ce,I as Ge,q as fe,o as ce,O as je,v as Je,P as He,w as Ue,x as We,y as Be,z as Fe,A as Me,Q as Le,B as Qe,k as j,t as _,R as xe,m as J,h as v,j as U,p as $e,T as et,U as tt,C as lt,V as it,n as at,K as Ne,W as nt}from"../chunks/vendor-e0500188.js";function st(a){let l,e,p=`scale(${a[3]}) translate(${a[8]*(.5-a[4])}px, ${a[9]*(.5-a[5])}px)`,u=`${a[1]?a[0]:0}s`,m,f,n,b;const R=a[18].default,c=Pe(R,a,a[17],null);return{c(){l=y("div"),e=y("div"),c&&c.c(),this.h()},l(o){l=S(o,"DIV",{class:!0});var z=O(l);e=S(z,"DIV",{class:!0});var E=O(e);c&&c.l(E),E.forEach(r),z.forEach(r),this.h()},h(){I(e,"class","inner svelte-oxi4f5"),B(e,"transform",p,!1),B(e,"transition-duration",u,!1),I(l,"class","outer svelte-oxi4f5"),Ve(()=>a[22].call(l))},m(o,z){X(o,l,z),s(l,e),c&&c.m(e,null),a[21](l),m=Te(l,a[22].bind(l)),f=!0,n||(b=[me(window,"mouseup",a[19]),me(window,"mousemove",a[20]),me(l,"wheel",a[23]),me(l,"mousedown",a[24])],n=!0)},p(o,[z]){c&&c.p&&(!f||z&131072)&&qe(c,R,o,o[17],f?Ge(R,o[17],z,null):Ce(o[17]),null),z&824&&p!==(p=`scale(${o[3]}) translate(${o[8]*(.5-o[4])}px, ${o[9]*(.5-o[5])}px)`)&&B(e,"transform",p,!1),z&3&&u!==(u=`${o[1]?o[0]:0}s`)&&B(e,"transition-duration",u,!1)},i(o){f||(fe(c,o),f=!0)},o(o){ce(c,o),f=!1},d(o){o&&r(l),c&&c.d(o),a[21](null),m(),n=!1,je(b)}}}function ot(a,l,e){let{$$slots:p={},$$scope:u}=l,{initialScale:m=1}=l,{initialX:f=.5}=l,{initialY:n=.5}=l,{transitionDuration:b=.2}=l,{maxScale:R=10}=l,{minScale:c=.3}=l,o=!0,z,E=m,Z=f,D=n,A=!1,w,P,H;function k({newX:t,newY:C,newScale:N,withTransition:W}){N!==void 0&&e(3,E=K(N)),t!==void 0&&e(4,Z=t),C!==void 0&&e(5,D=C),W||(e(1,o=!1),setTimeout(()=>e(1,o=!0)))}function K(t){return Math.min(Math.max(t,c),R)}function V(t,C,N){A||(t=K(t),e(3,E=t))}Je(()=>k({newX:f,newY:n,newScale:m,withTransition:!1}));const F=()=>e(6,A=!1),L=t=>{!A||w===void 0||t.shiftKey||t.ctrlKey||t.altKey||(e(4,Z=w.x+(w.ex-t.clientX)/(P*E)),e(5,D=w.y+(w.ey-t.clientY)/(H*E)))};function T(t){He[t?"unshift":"push"](()=>{z=t,e(2,z)})}function h(){P=this.clientWidth,H=this.clientHeight,e(8,P),e(9,H)}const Q=t=>{t.shiftKey||t.ctrlKey||t.altKey||(V(E*(1-t.deltaY*.001),t.clientX,t.clientY),t.preventDefault())},q=t=>{t.shiftKey||t.ctrlKey||t.altKey||t.buttons===1&&(t.preventDefault(),e(6,A=!0),e(7,w={x:Z,ex:t.clientX,y:D,ey:t.clientY}))};return a.$$set=t=>{"initialScale"in t&&e(11,m=t.initialScale),"initialX"in t&&e(12,f=t.initialX),"initialY"in t&&e(13,n=t.initialY),"transitionDuration"in t&&e(0,b=t.transitionDuration),"maxScale"in t&&e(14,R=t.maxScale),"minScale"in t&&e(15,c=t.minScale),"$$scope"in t&&e(17,u=t.$$scope)},[b,o,z,E,Z,D,A,w,P,H,V,m,f,n,R,c,k,u,p,F,L,T,h,Q,q]}class rt extends Ze{constructor(l){super();Ae(this,l,ot,st,ge,{initialScale:11,initialX:12,initialY:13,transitionDuration:0,maxScale:14,minScale:15,moveResize:16})}get moveResize(){return this.$$.ctx[16]}}var ut="/svelte-layer-zoomable/_app/assets/svelte-76a86d68.svg";function mt(a){let l,e,p;return{c(){l=y("div"),e=y("img"),this.h()},l(u){l=S(u,"DIV",{class:!0});var m=O(l);e=S(m,"IMG",{src:!0,alt:!0,class:!0}),m.forEach(r),this.h()},h(){nt(e.src,p=ut)||I(e,"src",p),I(e,"alt","Svelte logo"),I(e,"class","svelte-eru7si"),I(l,"class","inner svelte-eru7si")},m(u,m){X(u,l,m),s(l,e)},p:Ne,d(u){u&&r(l)}}}function Ie(a){let l,e,p;const u=[a[2].initOpts,a[2].otherOpts];function m(n){a[4](n)}let f={$$slots:{default:[mt]},$$scope:{ctx:a}};for(let n=0;n<u.length;n+=1)f=lt(f,u[n]);return a[1]!==void 0&&(f.moveResize=a[1]),l=new rt({props:f}),He.push(()=>it(l,"moveResize",m)),{c(){Ue(l.$$.fragment)},l(n){We(l.$$.fragment,n)},m(n,b){Be(l,n,b),p=!0},p(n,b){const R=b&4?Fe(u,[Me(n[2].initOpts),Me(n[2].otherOpts)]):{};b&32&&(R.$$scope={dirty:b,ctx:n}),!e&&b&2&&(e=!0,R.moveResize=n[1],Le(()=>e=!1)),l.$set(R)},i(n){p||(fe(l.$$.fragment,n),p=!0)},o(n){ce(l.$$.fragment,n),p=!1},d(n){Qe(l,n)}}}function ft(a){let l,e,p,u,m,f,n,b,R,c,o,z,E,Z,D,A,w,P,H,k,K,V,F,L,T,h,Q,q=a[2].otherOpts.transitionDuration+"",t,C,N=a[2].otherOpts.minScale+"",W,_e,x=a[2].otherOpts.maxScale+"",ie,ve,$=a[2].initOpts.initialScale+"",ae,pe,ee=a[2].initOpts.initialX+"",ne,he,te=a[2].initOpts.initialY+"",se,de,le=JSON.stringify(a[2].moveResize).replace(',"withTransition":true',"").replaceAll('":',": ").replaceAll(',"',", ").replace('{"',"{ ").replace("}"," }")+"",oe,be,ze,G,Oe=a[0],M,Y=Ie(a);return{c(){l=j(),e=y("h1"),p=_("svelte-layer-zoomable"),u=j(),m=y("p"),f=_("GitHub repository: "),n=y("a"),b=_("mvolfik/svelte-layer-zoomable"),R=j(),c=y("p"),o=_("NPM: "),z=y("a"),E=_("svelte-layer-zoomable"),Z=j(),D=y("p"),A=_("Note: do not confuse with "),w=y("code"),P=_("svelte-zoomable"),H=j(),k=y("div"),K=y("div"),V=y("h2"),F=_("Usage:"),L=j(),T=y("pre"),h=y("code"),Q=_(`<script lang="ts">
  import Zoomable from "svelte-layer-zoomable";
  import type { MoveResize } from "svelte-layer-zoomable";

  let moveResize: MoveResize;
  let transitionDuration = `),t=_(q),C=_(`;
  let minScale = `),W=_(N),_e=_(`;
  let maxScale = `),ie=_(x),ve=_(`;

  // ...
<\/script>

<Zoomable
  bind:moveResize
  initialScale={`),ae=_($),pe=_(`}
  initialX={`),ne=_(ee),he=_(`}
  initialY={`),se=_(te),de=_(`}
  {transitionDuration}
  {minScale}
  {maxScale}
>
  <!-- layer content -->
</Zoomable>
<p>
  <button
    on:click={() =>
      moveResize(`),oe=_(le),be=_(`)}
  >
    Execute
  </button>
</p>
  `),ze=j(),G=y("div"),Y.c(),this.h()},l(i){xe('[data-svelte="svelte-sxoe5o"]',document.head).forEach(r),l=J(i),e=S(i,"H1",{});var Ee=O(e);p=v(Ee,"svelte-layer-zoomable"),Ee.forEach(r),u=J(i),m=S(i,"P",{});var ye=O(m);f=v(ye,"GitHub repository: "),n=S(ye,"A",{href:!0});var De=O(n);b=v(De,"mvolfik/svelte-layer-zoomable"),De.forEach(r),ye.forEach(r),R=J(i),c=S(i,"P",{});var Se=O(c);o=v(Se,"NPM: "),z=S(Se,"A",{href:!0});var we=O(z);E=v(we,"svelte-layer-zoomable"),we.forEach(r),Se.forEach(r),Z=J(i),D=S(i,"P",{});var Re=O(D);A=v(Re,"Note: do not confuse with "),w=S(Re,"CODE",{});var ke=O(w);P=v(ke,"svelte-zoomable"),ke.forEach(r),Re.forEach(r),H=J(i),k=S(i,"DIV",{class:!0});var re=O(k);K=S(re,"DIV",{class:!0});var ue=O(K);V=S(ue,"H2",{});var Ye=O(V);F=v(Ye,"Usage:"),Ye.forEach(r),L=J(ue),T=S(ue,"PRE",{});var Xe=O(T);h=S(Xe,"CODE",{});var g=O(h);Q=v(g,`<script lang="ts">
  import Zoomable from "svelte-layer-zoomable";
  import type { MoveResize } from "svelte-layer-zoomable";

  let moveResize: MoveResize;
  let transitionDuration = `),t=v(g,q),C=v(g,`;
  let minScale = `),W=v(g,N),_e=v(g,`;
  let maxScale = `),ie=v(g,x),ve=v(g,`;

  // ...
<\/script>

<Zoomable
  bind:moveResize
  initialScale={`),ae=v(g,$),pe=v(g,`}
  initialX={`),ne=v(g,ee),he=v(g,`}
  initialY={`),se=v(g,te),de=v(g,`}
  {transitionDuration}
  {minScale}
  {maxScale}
>
  <!-- layer content -->
</Zoomable>
<p>
  <button
    on:click={() =>
      moveResize(`),oe=v(g,le),be=v(g,`)}
  >
    Execute
  </button>
</p>
  `),g.forEach(r),Xe.forEach(r),ue.forEach(r),ze=J(re),G=S(re,"DIV",{class:!0});var Ke=O(G);Y.l(Ke),Ke.forEach(r),re.forEach(r),this.h()},h(){document.title="svelte-layer-zoomable",I(n,"href","https://github.com/mvolfik/svelte-layer-zoomable"),I(z,"href","https://npmjs.com/package/svelte-layer-zoomable"),B(D,"font-weight","bold",!1),B(T,"overflow","auto",!1),I(K,"class","usage"),I(G,"class","outer svelte-eru7si"),I(k,"class","layout svelte-eru7si")},m(i,d){X(i,l,d),X(i,e,d),s(e,p),X(i,u,d),X(i,m,d),s(m,f),s(m,n),s(n,b),X(i,R,d),X(i,c,d),s(c,o),s(c,z),s(z,E),X(i,Z,d),X(i,D,d),s(D,A),s(D,w),s(w,P),X(i,H,d),X(i,k,d),s(k,K),s(K,V),s(V,F),s(K,L),s(K,T),s(T,h),s(h,Q),s(h,t),s(h,C),s(h,W),s(h,_e),s(h,ie),s(h,ve),s(h,ae),s(h,pe),s(h,ne),s(h,he),s(h,se),s(h,de),s(h,oe),s(h,be),s(k,ze),s(k,G),Y.m(G,null),M=!0},p(i,[d]){(!M||d&4)&&q!==(q=i[2].otherOpts.transitionDuration+"")&&U(t,q),(!M||d&4)&&N!==(N=i[2].otherOpts.minScale+"")&&U(W,N),(!M||d&4)&&x!==(x=i[2].otherOpts.maxScale+"")&&U(ie,x),(!M||d&4)&&$!==($=i[2].initOpts.initialScale+"")&&U(ae,$),(!M||d&4)&&ee!==(ee=i[2].initOpts.initialX+"")&&U(ne,ee),(!M||d&4)&&te!==(te=i[2].initOpts.initialY+"")&&U(se,te),(!M||d&4)&&le!==(le=JSON.stringify(i[2].moveResize).replace(',"withTransition":true',"").replaceAll('":',": ").replaceAll(',"',", ").replace('{"',"{ ").replace("}"," }")+"")&&U(oe,le),d&1&&ge(Oe,Oe=i[0])?(at(),ce(Y,1,1,Ne),$e(),Y=Ie(i),Y.c(),fe(Y),Y.m(G,null)):Y.p(i,d)},i(i){M||(fe(Y),M=!0)},o(i){ce(Y),M=!1},d(i){i&&r(l),i&&r(e),i&&r(u),i&&r(m),i&&r(R),i&&r(c),i&&r(Z),i&&r(D),i&&r(H),i&&r(k),Y.d(i)}}}function ct(a,l,e){let p,u=0;const m=et({$label:"svelte-layer-zoomable",initOpts:{$label:"Initialization options",initialScale:{value:1,min:.1,max:10,step:.1},initialX:{value:.4,min:-1.5,max:2.5,step:.1},initialY:{value:.4,min:-1.5,max:2.5,step:.1},"Destroy & recreate to take effect":()=>{e(0,u+=1)}},otherOpts:{$label:"Other options",transitionDuration:{value:.2,min:0,max:2,step:.1},minScale:{value:.3,min:.1,max:1,step:.1},maxScale:{value:10,min:2,max:20,step:.5}},moveResize:{$label:"`Zoomable.moveResize(args)`",newScale:{value:1,min:.1,max:10,step:.1},newX:{value:.4,min:-1.5,max:2.5,step:.1},newY:{value:.4,min:-1.5,max:2.5,step:.1},withTransition:!0,Execute:()=>{f(p.moveResize)}}});tt(a,m,b=>e(2,p=b));let f;function n(b){f=b,e(1,f)}return[u,f,p,m,n]}class vt extends Ze{constructor(l){super();Ae(this,l,ct,ft,ge,{})}}export{vt as default};
