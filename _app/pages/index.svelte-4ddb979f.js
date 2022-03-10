import{S as Xe,i as Ke,s as ze,F as Ie,e as O,c as E,a as w,d as s,b as F,f as K,L as Ae,g as R,J as r,M as He,N as re,G as Ne,H as Pe,I as Te,q as me,o as ue,O as Ve,v as qe,P as Me,w as Ce,x as Ge,y as je,z as Je,A as ge,Q as Ue,B as We,k as j,t as p,R as Be,m as J,h as v,j as U,p as Fe,T as Le,U as Qe,C as xe,V as $e,n as et,K as Ze,W as tt}from"../chunks/vendor-e0500188.js";function lt(n){let i,t,h=`scale(${n[3]}) translate(${n[8]*(.5-n[4])}px, ${n[9]*(.5-n[5])}px)`,m=`${n[1]?n[0]:0}s`,u,f,a,d;const y=n[18].default,c=Ie(y,n,n[17],null);return{c(){i=O("div"),t=O("div"),c&&c.c(),this.h()},l(o){i=E(o,"DIV",{class:!0});var z=w(i);t=E(z,"DIV",{class:!0});var D=w(t);c&&c.l(D),D.forEach(s),z.forEach(s),this.h()},h(){F(t,"class","inner svelte-oxi4f5"),K(t,"transform",h,!1),K(t,"transition-duration",m,!1),F(i,"class","outer svelte-oxi4f5"),Ae(()=>n[22].call(i))},m(o,z){R(o,i,z),r(i,t),c&&c.m(t,null),n[21](i),u=He(i,n[22].bind(i)),f=!0,a||(d=[re(window,"mouseup",n[19]),re(window,"mousemove",n[20]),re(i,"wheel",n[23]),re(i,"mousedown",n[24])],a=!0)},p(o,[z]){c&&c.p&&(!f||z&131072)&&Ne(c,y,o,o[17],f?Te(y,o[17],z,null):Pe(o[17]),null),z&824&&h!==(h=`scale(${o[3]}) translate(${o[8]*(.5-o[4])}px, ${o[9]*(.5-o[5])}px)`)&&K(t,"transform",h,!1),z&3&&m!==(m=`${o[1]?o[0]:0}s`)&&K(t,"transition-duration",m,!1)},i(o){f||(me(c,o),f=!0)},o(o){ue(c,o),f=!1},d(o){o&&s(i),c&&c.d(o),n[21](null),u(),a=!1,Ve(d)}}}function it(n,i,t){let{$$slots:h={},$$scope:m}=i,{initialScale:u=1}=i,{initialX:f=.5}=i,{initialY:a=.5}=i,{transitionDuration:d=.2}=i,{maxScale:y=10}=i,{minScale:c=.3}=i,o=!0,z,D=u,M=f,k=a,Z=!1,g,N,I;function A({newX:l,newY:P,newScale:C,withTransition:G}){C!==void 0&&t(3,D=W(C)),l!==void 0&&t(4,M=l),P!==void 0&&t(5,k=P),G||(t(1,o=!1),setTimeout(()=>t(1,o=!0)))}function W(l){return Math.min(Math.max(l,c),y)}function V(l,P,C){Z||(l=W(l),t(3,D=l))}qe(()=>A({newX:f,newY:a,newScale:u,withTransition:!1}));const H=()=>t(6,Z=!1),b=l=>{!Z||g===void 0||l.shiftKey||l.ctrlKey||l.altKey||(t(4,M=g.x+(g.ex-l.clientX)/(N*D)),t(5,k=g.y+(g.ey-l.clientY)/(I*D)))};function L(l){Me[l?"unshift":"push"](()=>{z=l,t(2,z)})}function q(){N=this.clientWidth,I=this.clientHeight,t(8,N),t(9,I)}const B=l=>{l.shiftKey||l.ctrlKey||l.altKey||(V(D*(1-l.deltaY*.001),l.clientX,l.clientY),l.preventDefault())},Q=l=>{l.shiftKey||l.ctrlKey||l.altKey||l.buttons===1&&(l.preventDefault(),t(6,Z=!0),t(7,g={x:M,ex:l.clientX,y:k,ey:l.clientY}))};return n.$$set=l=>{"initialScale"in l&&t(11,u=l.initialScale),"initialX"in l&&t(12,f=l.initialX),"initialY"in l&&t(13,a=l.initialY),"transitionDuration"in l&&t(0,d=l.transitionDuration),"maxScale"in l&&t(14,y=l.maxScale),"minScale"in l&&t(15,c=l.minScale),"$$scope"in l&&t(17,m=l.$$scope)},[d,o,z,D,M,k,Z,g,N,I,V,u,f,a,y,c,A,m,h,H,b,L,q,B,Q]}class nt extends Xe{constructor(i){super();Ke(this,i,it,lt,ze,{initialScale:11,initialX:12,initialY:13,transitionDuration:0,maxScale:14,minScale:15,moveResize:16})}get moveResize(){return this.$$.ctx[16]}}var at="/svelte-layer-zoomable/_app/assets/svelte-d72399d3.png";function st(n){let i,t,h;return{c(){i=O("div"),t=O("img"),this.h()},l(m){i=E(m,"DIV",{});var u=w(i);t=E(u,"IMG",{src:!0,alt:!0}),u.forEach(s),this.h()},h(){tt(t.src,h=at)||F(t,"src",h),F(t,"alt","Svelte logo"),K(i,"height","100%",!1),K(i,"width","100%",!1),K(i,"outline","1px solid black",!1),K(i,"outline-offset","-1px",!1)},m(m,u){R(m,i,u),r(i,t)},p:Ze,d(m){m&&s(i)}}}function Ye(n){let i,t,h;const m=[n[2].initOpts,n[2].otherOpts];function u(a){n[4](a)}let f={$$slots:{default:[st]},$$scope:{ctx:n}};for(let a=0;a<m.length;a+=1)f=xe(f,m[a]);return n[1]!==void 0&&(f.moveResize=n[1]),i=new nt({props:f}),Me.push(()=>$e(i,"moveResize",u)),{c(){Ce(i.$$.fragment)},l(a){Ge(i.$$.fragment,a)},m(a,d){je(i,a,d),h=!0},p(a,d){const y=d&4?Je(m,[ge(a[2].initOpts),ge(a[2].otherOpts)]):{};d&32&&(y.$$scope={dirty:d,ctx:a}),!t&&d&2&&(t=!0,y.moveResize=a[1],Ue(()=>t=!1)),i.$set(y)},i(a){h||(me(i.$$.fragment,a),h=!0)},o(a){ue(i.$$.fragment,a),h=!1},d(a){We(i,a)}}}function ot(n){let i,t,h,m,u,f,a,d,y,c,o,z,D,M,k,Z,g,N,I,A,W,V,H,b,L,q=n[2].otherOpts.transitionDuration+"",B,Q,l=n[2].otherOpts.minScale+"",P,C,G=n[2].otherOpts.maxScale+"",le,fe,x=n[2].initOpts.initialScale+"",ie,ce,$=n[2].initOpts.initialX+"",ne,_e,ee=n[2].initOpts.initialY+"",ae,pe,te=JSON.stringify(n[2].moveResize).replace(',"withTransition":true',"").replaceAll('":',": ").replaceAll(',"',", ").replace('{"',"{ ").replace("}"," }")+"",se,ve,oe,T,ye=n[0],X,Y=Ye(n);return{c(){i=j(),t=O("h1"),h=p("svelte-layer-zoomable"),m=j(),u=O("p"),f=p("GitHub repository: "),a=O("a"),d=p("mvolfik/svelte-layer-zoomable"),y=j(),c=O("p"),o=p("NPM: "),z=O("a"),D=p("svelte-layer-zoomable"),M=j(),k=O("p"),Z=p("Note: do not confuse with "),g=O("code"),N=p("svelte-zoomable"),I=j(),A=O("h2"),W=p("Usage:"),V=j(),H=O("pre"),b=O("code"),L=p(`<script lang="ts">
  import Zoomable from "svelte-layer-zoomable";
  import type { MoveResize } from "svelte-layer-zoomable";

  let moveResize: MoveResize;
  let transitionDuration = `),B=p(q),Q=p(`;
  let minScale = `),P=p(l),C=p(`;
  let maxScale = `),le=p(G),fe=p(`;

  // ...
<\/script>

<Zoomable
  bind:moveResize
  initialScale={`),ie=p(x),ce=p(`}
  initialX={`),ne=p($),_e=p(`}
  initialY={`),ae=p(ee),pe=p(`}
  {transitionDuration}
  {minScale}
  {maxScale}
>
  <!-- layer content -->
</Zoomable>
<p>
  <button
    on:click={() =>
      moveResize(`),se=p(te),ve=p(`)}
  >
    Execute
  </button>
</p>
  `),oe=j(),T=O("div"),Y.c(),this.h()},l(e){Be('[data-svelte="svelte-sxoe5o"]',document.head).forEach(s),i=J(e),t=E(e,"H1",{});var Se=w(t);h=v(Se,"svelte-layer-zoomable"),Se.forEach(s),m=J(e),u=E(e,"P",{});var he=w(u);f=v(he,"GitHub repository: "),a=E(he,"A",{href:!0});var Re=w(a);d=v(Re,"mvolfik/svelte-layer-zoomable"),Re.forEach(s),he.forEach(s),y=J(e),c=E(e,"P",{});var be=w(c);o=v(be,"NPM: "),z=E(be,"A",{href:!0});var Oe=w(z);D=v(Oe,"svelte-layer-zoomable"),Oe.forEach(s),be.forEach(s),M=J(e),k=E(e,"P",{});var de=w(k);Z=v(de,"Note: do not confuse with "),g=E(de,"CODE",{});var Ee=w(g);N=v(Ee,"svelte-zoomable"),Ee.forEach(s),de.forEach(s),I=J(e),A=E(e,"H2",{});var we=w(A);W=v(we,"Usage:"),we.forEach(s),V=J(e),H=E(e,"PRE",{style:!0});var De=w(H);b=E(De,"CODE",{});var S=w(b);L=v(S,`<script lang="ts">
  import Zoomable from "svelte-layer-zoomable";
  import type { MoveResize } from "svelte-layer-zoomable";

  let moveResize: MoveResize;
  let transitionDuration = `),B=v(S,q),Q=v(S,`;
  let minScale = `),P=v(S,l),C=v(S,`;
  let maxScale = `),le=v(S,G),fe=v(S,`;

  // ...
<\/script>

<Zoomable
  bind:moveResize
  initialScale={`),ie=v(S,x),ce=v(S,`}
  initialX={`),ne=v(S,$),_e=v(S,`}
  initialY={`),ae=v(S,ee),pe=v(S,`}
  {transitionDuration}
  {minScale}
  {maxScale}
>
  <!-- layer content -->
</Zoomable>
<p>
  <button
    on:click={() =>
      moveResize(`),se=v(S,te),ve=v(S,`)}
  >
    Execute
  </button>
</p>
  `),S.forEach(s),De.forEach(s),oe=J(e),T=E(e,"DIV",{});var ke=w(T);Y.l(ke),ke.forEach(s),this.h()},h(){document.title="svelte-layer-zoomable",F(a,"href","https://github.com/mvolfik/svelte-layer-zoomable"),F(z,"href","https://npmjs.com/package/svelte-layer-zoomable"),K(k,"font-weight","bold",!1),K(H,"overflow","auto"),K(T,"background-color","#ccc",!1)},m(e,_){R(e,i,_),R(e,t,_),r(t,h),R(e,m,_),R(e,u,_),r(u,f),r(u,a),r(a,d),R(e,y,_),R(e,c,_),r(c,o),r(c,z),r(z,D),R(e,M,_),R(e,k,_),r(k,Z),r(k,g),r(g,N),R(e,I,_),R(e,A,_),r(A,W),R(e,V,_),R(e,H,_),r(H,b),r(b,L),r(b,B),r(b,Q),r(b,P),r(b,C),r(b,le),r(b,fe),r(b,ie),r(b,ce),r(b,ne),r(b,_e),r(b,ae),r(b,pe),r(b,se),r(b,ve),R(e,oe,_),R(e,T,_),Y.m(T,null),X=!0},p(e,[_]){(!X||_&4)&&q!==(q=e[2].otherOpts.transitionDuration+"")&&U(B,q),(!X||_&4)&&l!==(l=e[2].otherOpts.minScale+"")&&U(P,l),(!X||_&4)&&G!==(G=e[2].otherOpts.maxScale+"")&&U(le,G),(!X||_&4)&&x!==(x=e[2].initOpts.initialScale+"")&&U(ie,x),(!X||_&4)&&$!==($=e[2].initOpts.initialX+"")&&U(ne,$),(!X||_&4)&&ee!==(ee=e[2].initOpts.initialY+"")&&U(ae,ee),(!X||_&4)&&te!==(te=JSON.stringify(e[2].moveResize).replace(',"withTransition":true',"").replaceAll('":',": ").replaceAll(',"',", ").replace('{"',"{ ").replace("}"," }")+"")&&U(se,te),_&1&&ze(ye,ye=e[0])?(et(),ue(Y,1,1,Ze),Fe(),Y=Ye(e),Y.c(),me(Y),Y.m(T,null)):Y.p(e,_)},i(e){X||(me(Y),X=!0)},o(e){ue(Y),X=!1},d(e){e&&s(i),e&&s(t),e&&s(m),e&&s(u),e&&s(y),e&&s(c),e&&s(M),e&&s(k),e&&s(I),e&&s(A),e&&s(V),e&&s(H),e&&s(oe),e&&s(T),Y.d(e)}}}function rt(n,i,t){let h,m=0;const u=Le({$label:"svelte-layer-zoomable",initOpts:{$label:"Initialization options",initialScale:{value:1,min:.1,max:10,step:.1},initialX:{value:.4,min:-1.5,max:2.5,step:.1},initialY:{value:.4,min:-1.5,max:2.5,step:.1},"Destroy & recreate to take effect":()=>{t(0,m+=1)}},otherOpts:{$label:"Other options",transitionDuration:{value:.2,min:0,max:2,step:.1},minScale:{value:.3,min:.1,max:1,step:.1},maxScale:{value:10,min:2,max:20,step:.5}},moveResize:{$label:"`Zoomable.moveResize(args)`",newScale:{value:1,min:.1,max:10,step:.1},newX:{value:.4,min:-1.5,max:2.5,step:.1},newY:{value:.4,min:-1.5,max:2.5,step:.1},withTransition:!0,Execute:()=>{f(h.moveResize)}}});Qe(n,u,d=>t(2,h=d));let f;function a(d){f=d,t(1,f)}return[m,f,h,u,a]}class ut extends Xe{constructor(i){super();Ke(this,i,rt,ot,ze,{})}}export{ut as default};
