(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(2),a=n.n(r),i=n(16),s=n.n(i),l=(n(23),n(4)),o=n.n(l),u=n(11),j=n(6),d=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function p(e){var t=e.getBoundingClientRect(),n=t.top,c=t.bottom;return c<0||c-n>window.innerHeight/3&&n<window.innerHeight||c-n<window.innerHeight/3&&n>=0&&c<=window.innerHeight}var b=function(e,t){var n=document.querySelector(e);p(n)?t((function(e){return e+1})):window.addEventListener("scroll",(function e(){p(n)&&(setTimeout((function(){t((function(e){return e+1}))}),200),this.removeEventListener("scroll",e))}))},h=function(e){var t=e.selectorTypewriter,n=e.typewriterText,a=e.ChildComponent,i=Object(r.useState)({content:"",carriage:0}),s=Object(j.a)(i,2),l=s[0],p=l.content,h=l.carriage,f=s[1],m=Object(r.useState)(!1),O=Object(j.a)(m,2),g=O[0],x=O[1],w=Object(r.useState)(0),v=Object(j.a)(w,2),y=v[0],E=v[1];return Object(r.useEffect)((function(){0===y&&b(t,E)}),[y,t]),Object(r.useEffect)((function(){if(1===y){if(h===n.length)return void setTimeout((function(){x(!0)}),200);var e=setTimeout(Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==p){t.next=3;break}return t.next=3,d(1200);case 3:f({content:p+n[h],carriage:h+1}),clearTimeout(e);case 5:case"end":return t.stop()}}),t)}))),70)}}),[p,h,n,y]),Object(c.jsx)(a,{typewriterText:p,startAnimations:g})},f=(n(25),function(e){var t=e.typewriterText,n=e.startAnimations,a=Object(r.useState)(0),i=Object(j.a)(a,2),s=i[0],l=i[1];return Object(r.useEffect)((function(){n&&function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b("#landing li:nth-of-type(1)",l),e.next=3,d(200);case 3:return b("#landing li:nth-of-type(2)",l),e.next=6,d(200);case 6:b("#landing li:nth-of-type(3)",l);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[n]),Object(c.jsxs)("section",{id:"landing",children:[Object(c.jsxs)("div",{className:"landing-title-wrapper",children:[Object(c.jsx)("div",{className:"landing-title-name",children:"MIHAIL MARIAN,"}),Object(c.jsxs)("div",{className:"landing-title-role",children:[Object(c.jsx)("span",{children:t}),Object(c.jsx)("span",{className:"typewriter-cursor",children:"|"})]})]}),Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{className:s<1?"slide-out":"",children:Object(c.jsx)("a",{href:"#about",children:"ABOUT"})}),Object(c.jsx)("li",{className:s<2?"slide-out":"",children:Object(c.jsx)("a",{href:"#projects",children:"PROJECTS"})}),Object(c.jsx)("li",{className:s<3?"slide-out":"",children:Object(c.jsx)("a",{href:"#contact",children:"CONTACT"})})]})})]})}),m=(n(26),n.p+"static/media/ProfileImage.73d23297.png"),O=(n(27),function(e){var t=e.text;return Object(c.jsxs)("div",{className:"section-title",children:[t,Object(c.jsx)("span",{className:"typewriter-cursor",children:"|"})]})}),g=function(e){var t=e.typewriterText,n=e.startAnimations,a=Object(r.useState)(0),i=Object(j.a)(a,2),s=i[0],l=i[1];return Object(r.useEffect)((function(){n&&function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(".about-description>img",l),b(".about-description>div",l),e.next=4,d(200);case 4:b(".competencies-container>h2",l),b(".competencies-container>div",l);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[n]),Object(c.jsxs)("section",{id:"about",className:"section-styling",children:[Object(c.jsx)(O,{text:t}),Object(c.jsxs)("div",{className:"about-content",children:[Object(c.jsxs)("div",{className:"about-description",children:[Object(c.jsx)("img",{className:s>=1?"":"about-hide",src:m,alt:"Profile"}),Object(c.jsxs)("div",{className:s>=2?"":"about-hide",children:[Object(c.jsx)("p",{children:"Hi, my name is Mihail and I'm a Front-End Developer who loves building cool UIs that work splendidly across all devices. I specialise in React web apps that are powered by Firebase backend services."}),Object(c.jsx)("p",{children:"I taught myself how to code, so it's safe to say that I can learn any new, complex concepts on my own. My previous life in software sales has also made me great at teamwork and effective communication. Last but not least, I can understand product-market strategies very well, having worked on a number of B2B and B2C startups."})]})]}),Object(c.jsxs)("div",{className:"competencies-container",children:[Object(c.jsx)("h2",{className:s>=3?"":"about-hide",children:"Competencies"}),Object(c.jsxs)("div",{className:s>=4?"":"about-hide",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Languages & Frameworks"}),Object(c.jsx)("p",{children:"JavaScript, React, jQuery, HTML, CSS, Sass, Bootstrap 4, SQL"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Dev Tools & Software"}),Object(c.jsx)("p",{children:"Firebase, Git, GitHub, GitHub Pages, NPM, Webpack, Visual Studio Code, Figma, Webflow"})]})]})]})]})]})},x=n(14),w=n(13),v=(n(33),n(34),n(35),w.a.initializeApp({apiKey:"AIzaSyDeGIjqo1s7Y-Vsel1AXPTmZKYQN-U3BWQ",authDomain:"personal-site-62ba5.firebaseapp.com",projectId:"personal-site-62ba5",storageBucket:"personal-site-62ba5.appspot.com",messagingSenderId:"500725287358",appId:"1:500725287358:web:e7d184da0d99ac0933d1ef",measurementId:"G-9F9D3GCV65"}));w.a.analytics();var y=v;function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var k=r.createElement("g",null,r.createElement("g",null,r.createElement("path",{d:"M492,236H68.442l70.164-69.824c7.829-7.792,7.859-20.455,0.067-28.284c-7.792-7.83-20.456-7.859-28.285-0.068 l-104.504,104c-0.007,0.006-0.012,0.013-0.018,0.019c-7.809,7.792-7.834,20.496-0.002,28.314c0.007,0.006,0.012,0.013,0.018,0.019 l104.504,104c7.828,7.79,20.492,7.763,28.285-0.068c7.792-7.829,7.762-20.492-0.067-28.284L68.442,276H492 c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"}))),S=r.createElement("g",null),T=r.createElement("g",null),I=r.createElement("g",null),C=r.createElement("g",null),B=r.createElement("g",null),P=r.createElement("g",null),A=r.createElement("g",null),H=r.createElement("g",null),_=r.createElement("g",null),L=r.createElement("g",null),M=r.createElement("g",null),R=r.createElement("g",null),D=r.createElement("g",null),F=r.createElement("g",null),G=r.createElement("g",null);function U(e,t){var n=e.title,c=e.titleId,a=N(e,["title","titleId"]);return r.createElement("svg",E({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,k,S,T,I,C,B,P,A,H,_,L,M,R,D,F,G)}var W=r.forwardRef(U);n.p;function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Q=r.createElement("g",null,r.createElement("g",null,r.createElement("path",{d:"M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068 c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557 l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104 c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"}))),V=r.createElement("g",null),K=r.createElement("g",null),X=r.createElement("g",null),q=r.createElement("g",null),Y=r.createElement("g",null),Z=r.createElement("g",null),$=r.createElement("g",null),ee=r.createElement("g",null),te=r.createElement("g",null),ne=r.createElement("g",null),ce=r.createElement("g",null),re=r.createElement("g",null),ae=r.createElement("g",null),ie=r.createElement("g",null),se=r.createElement("g",null);function le(e,t){var n=e.title,c=e.titleId,a=J(e,["title","titleId"]);return r.createElement("svg",z({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,Q,V,K,X,q,Y,Z,$,ee,te,ne,ce,re,ae,ie,se)}var oe=r.forwardRef(le),ue=(n.p,n(29),function(e){var t=e.typewriterText,n=e.startAnimations,a=Object(r.useState)([]),i=Object(j.a)(a,2),s=i[0],l=i[1];Object(r.useEffect)((function(){y.firestore().collection("projects").orderBy("publication_date","desc").get().then((function(e){var t=[];e.forEach((function(e){var n=Object(x.a)({id:e.id},e.data());t=t.concat(n)})),l(t)})).catch((function(e){console.log("Error getting project data",e)}))}),[]);var p=Object(r.useState)(0),h=Object(j.a)(p,2),f=h[0],m=h[1];Object(r.useEffect)((function(){n&&s.length>0&&function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(".project-image",m),e.next=3,d(200);case 3:return b(".project-info>h2",m),b(".project-description",m),e.next=7,d(200);case 7:b(".project-links",m),b(".arrow-right",m);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[n,s]);var g=Object(r.useState)({id:"",image_src:"",description:"",title:"",website_link:"",github_link:""}),w=Object(j.a)(g,2),v=w[0],E=w[1],N=Object(r.useState)(0),k=Object(j.a)(N,2),S=k[0],T=k[1];Object(r.useEffect)((function(){if(s.length>0){var e=s[S];y.storage().ref().child("img/".concat(e.id,".png")).getDownloadURL().then((function(t){E(Object(x.a)({image_src:t},e))})).catch((function(e){console.log("Error getting image: ",e)}))}}),[S,s]);var I=Object(r.useState)(!1),C=Object(j.a)(I,2),B=C[0],P=C[1];Object(r.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(400);case 2:P(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[v]);var A=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),e.next=3,d(200);case 3:T((function(e){return e<s.length-1?e+1:e}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),e.next=3,d(200);case 3:T((function(e){return e>0?e-1:e}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("section",{id:"projects",className:"section-styling",children:[Object(c.jsx)(O,{text:t}),Object(c.jsxs)("div",{className:"project-chooser",children:[S>=1?Object(c.jsx)("button",{className:"arrow-left ".concat(f>=4&&!B?"project-show":"project-hide"),onClick:H,children:Object(c.jsx)(W,{})}):Object(c.jsx)("div",{className:"arrow-left"}),Object(c.jsx)("img",{className:"project-image ".concat(f>=1&&!B?"project-show":"project-hide"),src:v.image_src,alt:v.title}),S<=s.length-2?Object(c.jsx)("button",{className:"arrow-right ".concat(f>=4&&!B?"project-show":"project-hide"),onClick:A,children:Object(c.jsx)(oe,{})}):Object(c.jsx)("div",{className:"arrow-right"}),Object(c.jsxs)("div",{className:"project-info",children:[Object(c.jsx)("h2",{className:"".concat(f>=2&&!B?"project-show":"project-hide"),children:v.title}),Object(c.jsx)("p",{className:"project-description ".concat(f>=3&&!B?"project-show":"project-hide"),children:v.description}),Object(c.jsxs)("p",{className:"project-links ".concat(f>=4&&!B?"project-show":"project-hide"),children:[Object(c.jsx)("a",{href:v.website_link,rel:"noreferrer",target:"_blank",children:"Website"})," ","|"," ",Object(c.jsx)("a",{href:v.github_link,rel:"noreferrer",target:"_blank",children:"GitHub"})]})]})]})]})}),je=(n(30),n.p+"static/media/Cat.70c3e735.gif"),de=function(e){var t=e.typewriterText,n=e.startAnimations,a=Object(r.useState)(0),i=Object(j.a)(a,2),s=i[0],l=i[1];return Object(r.useEffect)((function(){n&&function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b("#contact>img",l),e.next=3,d(400);case 3:return b("#contact>h2",l),e.next=6,d(400);case 6:b("#contact li:nth-of-type(1)>a",l),b("#contact li:nth-of-type(2)>a",l),b("#contact li:nth-of-type(3)>a",l);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[n]),Object(c.jsxs)("section",{id:"contact",className:"section-styling",children:[Object(c.jsx)(O,{text:t}),Object(c.jsx)("img",{className:s>=1?"":"contact-hide",src:je,alt:"Cat typing"}),Object(c.jsx)("h2",{className:s>=2?"":"contact-hide",children:"Want to chat? Feel welcome to send me a message via:"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:s>=3?"":"contact-hide",href:"mailto:mihail.marian@woondering.com",children:"EMAIL"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:s>=4?"":"contact-hide",href:"https://www.linkedin.com/in/mihailmarian",rel:"noreferrer",target:"_blank",children:"LINKEDIN"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:s>=5?"":"contact-hide",href:"https://github.com/mihailthebuilder",rel:"noreferrer",target:"_blank",children:"GITHUB"})})]})]})},pe=(n(31),function(){return Object(c.jsxs)("footer",{children:[Object(c.jsx)("div",{children:"\xa9 Mihail Marian"}),Object(c.jsx)("div",{className:"ps-footer",children:"(P.S. I don't actually know how this copyright disclaimer helps me...)"})]})});var be=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(h,{selectorTypewriter:".landing-title-role",typewriterText:"FRONT-END DEVELOPER.",ChildComponent:f}),Object(c.jsx)(h,{selectorTypewriter:"#about>.section-title",typewriterText:"about.",ChildComponent:g}),Object(c.jsx)(h,{selectorTypewriter:"#projects>.section-title",typewriterText:"projects.",ChildComponent:ue}),Object(c.jsx)(h,{selectorTypewriter:"#contact>.section-title",typewriterText:"contact.",ChildComponent:de}),Object(c.jsx)(pe,{})]})};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(be,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.5021b696.chunk.js.map