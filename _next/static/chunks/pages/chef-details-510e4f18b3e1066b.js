(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[902],{8273:function(e,s,t){"use strict";t.r(s),t.d(s,{CountUp:function(){return i}});var n=function(){return(n=Object.assign||function(e){for(var s,t=1,n=arguments.length;t<n;t++)for(var i in s=arguments[t])Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);return e}).apply(this,arguments)},i=function(){function e(e,s,t){var i=this;this.endVal=s,this.options=t,this.version="2.3.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){i.startTime||(i.startTime=e);var s=e-i.startTime;i.remaining=i.duration-s,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(s,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(s,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(s/i.duration);var t=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=t?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),s<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(e){var s,t,n,a=(Math.abs(e).toFixed(i.options.decimalPlaces)+"").split(".");if(s=a[0],t=a.length>1?i.options.decimal+a[1]:"",i.options.useGrouping){n="";for(var r=0,l=s.length;r<l;++r)0!==r&&r%3==0&&(n=i.options.separator+n),n=s[l-r-1]+n;s=n}return i.options.numerals&&i.options.numerals.length&&(s=s.replace(/[0-9]/g,function(e){return i.options.numerals[+e]}),t=t.replace(/[0-9]/g,function(e){return i.options.numerals[+e]})),(e<0?"-":"")+i.options.prefix+s+t+i.options.suffix},this.easeOutExpo=function(e,s,t,n){return t*(1-Math.pow(2,-10*e/n))*1024/1023+s},this.options=n(n({},this.defaults),t),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(s),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return i.handleScroll(i)}),window.onscroll=function(){window.onScrollFns.forEach(function(e){return e()})},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var s=window.innerHeight+window.scrollY,t=e.el.getBoundingClientRect(),n=t.top+t.height+window.pageYOffset;n<s&&n>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):window.scrollY>n&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>e,Math.abs(e-this.startVal)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var s=this.countDown?1:-1;this.endVal=e+s*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.callback=e,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var s=this.formattingFn(e);"INPUT"===this.el.tagName?this.el.value=s:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=s:this.el.innerHTML=s},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var s=Number(e);return this.ensureNumber(s)?s:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},1619:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chef-details",function(){return t(5958)}])},2796:function(e,s,t){"use strict";var n=t(5893),i=t(1664),a=t.n(i);t(7294),s.Z=function(e){let{pageTitle:s,pageName:t}=e;return(0,n.jsxs)("div",{className:"breadcrumb-section",children:[(0,n.jsx)("div",{className:"breadcrumb-left-vec",children:(0,n.jsx)("img",{src:"assets/images/icon/breadcumb-left-vec.svg",alt:"breadcumb-left-vec"})}),(0,n.jsx)("div",{className:"breadcrumb-right-vec",children:(0,n.jsx)("img",{src:"assets/images/icon/breadcumb-right-vec.svg",alt:"breadcumb-right-vec"})}),(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row d-flex justify-content-center align-items-center",children:(0,n.jsxs)("div",{className:"col-lg-12",children:[(0,n.jsx)("h2",{className:"breadcrumb-title",children:s}),(0,n.jsx)("nav",{"aria-label":"breadcrumb",children:(0,n.jsxs)("ol",{className:"breadcrumb d-flex",children:[(0,n.jsx)("li",{className:"breadcrumb-item",children:(0,n.jsx)(a(),{legacyBehavior:!0,href:"/",children:"Home"})}),(0,n.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:t})]})})]})})})]})}},1988:function(e,s,t){"use strict";var n=t(5893),i=t(9008),a=t.n(i);t(7294);var r=t(8004),l=t(6282);s.Z=function(e){let{children:s}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"Restho - Resturent React Template"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"assets/images/icon/logo-icon.svg"})]}),(0,n.jsx)(l.Z,{}),s,(0,n.jsx)(r.Z,{})]})}},5958:function(e,s,t){"use strict";t.r(s);var n=t(5893);t(7294);var i=t(7857),a=t(2796),r=t(1988);s.default=function(){return(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(a.Z,{pageName:"Chef Details",pageTitle:"Chef Details"}),(0,n.jsx)("div",{className:"chef-details-area pt-120 mb-120",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("div",{className:"row align-items-center g-lg-5 gy-5 mb-60",children:[(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsxs)("div",{className:"chef-introduction",children:[(0,n.jsxs)("div",{className:"chef-name",children:[(0,n.jsx)("h3",{children:"Hello, I’m"}),(0,n.jsx)("h2",{children:"Mr. Willium Jhon"})]}),(0,n.jsxs)("div",{className:"about-chef",children:[(0,n.jsx)("h3",{children:"About Me:"}),(0,n.jsx)("p",{children:"I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."}),(0,n.jsxs)("div",{className:"chef-contact",children:[(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Department:"})," Senior Chef."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Experience:"})," 15 Years."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Phone:"})," ",(0,n.jsx)("a",{href:"tel:+990-8879756",children:"+990-8879756."})]})]}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Email:"})," ",(0,n.jsx)("a",{href:"mailto:info@example.com",children:" info@example.com"})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Fax:"})," ",(0,n.jsx)("a",{href:"fax:+00788-75578",children:"+00788-75578"})]})]})]}),(0,n.jsxs)("div",{className:"social-area",children:[(0,n.jsx)("h3",{children:"Follow Me:"}),(0,n.jsxs)("ul",{className:"social-link d-flex align-items-center justify-content-center",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://www.facebook.com/",children:(0,n.jsx)("i",{className:"bx bxl-facebook"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://www.instagram.com/",children:(0,n.jsx)("i",{className:"bx bxl-instagram-alt"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://www.pinterest.com/",children:(0,n.jsx)("i",{className:"bx bxl-linkedin"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://twitter.com/",children:(0,n.jsx)("i",{className:"bx bxl-twitter"})})})]})]}),(0,n.jsx)("div",{className:"divider",children:(0,n.jsx)("img",{src:"assets/images/bg/chef-dt-shape.png",alt:"chef-dt-shape"})})]})]})}),(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsx)("div",{className:"chef-dt-img",children:(0,n.jsx)("img",{className:"img-fluid",src:"assets/images/bg/chef-dt-1.png",alt:"chef-dt-1"})})})]}),(0,n.jsxs)("div",{className:"row g-lg-5 gy-5",children:[(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsxs)("div",{className:"chef-skills",children:[(0,n.jsx)("h3",{children:"My Skills:"}),(0,n.jsx)("p",{children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."}),(0,n.jsxs)("ul",{className:"skills-bar-container",children:[(0,n.jsxs)("li",{children:[(0,n.jsxs)("div",{className:"progressbar-title",children:[(0,n.jsx)("h4",{children:"Sea Food"}),(0,n.jsx)("span",{className:"percent",id:"html-pourcent",children:"90%"})]}),(0,n.jsxs)("div",{className:"bar-container",children:[(0,n.jsx)("span",{className:"progressbar",id:"progress-html"}),(0,n.jsx)("span",{className:"round-s",id:"progress-round1"})]})]}),(0,n.jsxs)("li",{children:[(0,n.jsxs)("div",{className:"progressbar-title",children:[(0,n.jsx)("h4",{children:"Soup Item"}),(0,n.jsx)("span",{className:"percent",id:"css-pourcent",children:"80%"})]}),(0,n.jsxs)("div",{className:"bar-container",children:[(0,n.jsx)("span",{className:"progressbar",id:"progress-css"}),(0,n.jsx)("span",{className:"round-s",id:"progress-round2"})]})]}),(0,n.jsxs)("li",{children:[(0,n.jsxs)("div",{className:"progressbar-title",children:[(0,n.jsx)("h4",{children:"Mutton Bireyani"}),(0,n.jsx)("span",{className:"percent",id:"javascript-pourcent",children:"93%"})]}),(0,n.jsxs)("div",{className:"bar-container",children:[(0,n.jsx)("span",{className:"progressbar",id:"progress-javascript"}),(0,n.jsx)("span",{className:"round-s",id:"progress-round3"})]})]})]})]})}),(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsx)("div",{className:"chef-dt-counter",children:(0,n.jsxs)("div",{className:"row justify-content-center g-4",children:[(0,n.jsx)("div",{className:"col-xxl-6 col-lg-12 col-md-6 col-sm-6 col-12",children:(0,n.jsxs)("div",{className:"counter-single",children:[(0,n.jsx)("div",{className:"counter-icon",children:(0,n.jsx)("img",{src:"assets/images/icon/chef.svg",alt:"image"})}),(0,n.jsxs)("div",{className:"coundown",children:[(0,n.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,n.jsx)("h3",{className:"odometer",children:(0,n.jsx)(i.ZP,{end:100})}),(0,n.jsx)("span",{children:"+"})]}),(0,n.jsx)("p",{children:"Years Of Expert"})]})]})}),(0,n.jsx)("div",{className:"col-xxl-6 col-lg-12 col-md-6 col-sm-6 col-12",children:(0,n.jsxs)("div",{className:"counter-single",children:[(0,n.jsx)("div",{className:"counter-icon",children:(0,n.jsx)("img",{src:"assets/images/icon/award.svg",alt:"image"})}),(0,n.jsxs)("div",{className:"coundown",children:[(0,n.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,n.jsx)("h3",{className:"odometer",children:(0,n.jsx)(i.ZP,{end:100})}),(0,n.jsx)("span",{children:"+"})]}),(0,n.jsx)("p",{children:"Award Wining"})]})]})}),(0,n.jsx)("div",{className:"col-xxl-6 col-lg-12 col-md-6 col-sm-6 col-12",children:(0,n.jsxs)("div",{className:"counter-single",children:[(0,n.jsx)("div",{className:"counter-icon",children:(0,n.jsx)("img",{src:"assets/images/icon/customer.svg",alt:"image"})}),(0,n.jsxs)("div",{className:"coundown",children:[(0,n.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,n.jsx)("h3",{className:"odometer",children:(0,n.jsx)(i.ZP,{end:100})}),(0,n.jsx)("span",{children:"+"})]}),(0,n.jsx)("p",{children:"Client Rating"})]})]})}),(0,n.jsx)("div",{className:"col-xxl-6 col-lg-12 col-md-6 col-sm-6 col-12",children:(0,n.jsxs)("div",{className:"counter-single",children:[(0,n.jsx)("div",{className:"counter-icon",children:(0,n.jsx)("img",{src:"assets/images/icon/food.svg",alt:"image"})}),(0,n.jsxs)("div",{className:"coundown",children:[(0,n.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,n.jsx)("h3",{className:"odometer",children:(0,n.jsx)(i.ZP,{end:100})}),(0,n.jsx)("span",{children:"+"})]}),(0,n.jsx)("p",{children:"Golden Clients"})]})]})})]})})})]})]})})]})}},9008:function(e,s,t){e.exports=t(3121)},1163:function(e,s,t){e.exports=t(880)},7857:function(e,s,t){"use strict";var n=t(7294),i=t(8273);function a(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,n)}return t}function r(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?a(Object(t),!0).forEach(function(s){var n,i;n=e,i=t[s],s in n?Object.defineProperty(n,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[s]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function o(e,s){if(null==e)return{};var t,n,i=function(e,s){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],s.indexOf(t)>=0||(i[t]=e[t]);return i}(e,s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],!(s.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?n.useLayoutEffect:n.useEffect;function u(e){var s=n.useRef(e);return c(function(){s.current=e}),n.useCallback(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return s.current.apply(void 0,t)},[])}var d=function(e,s){var t=s.decimal,n=s.decimals,a=s.duration,r=s.easingFn,l=s.end,o=s.formattingFn,c=s.numerals,u=s.prefix,d=s.separator,h=s.start,m=s.suffix,p=s.useEasing,f=s.enableScrollSpy,x=s.scrollSpyDelay,g=s.scrollSpyOnce;return new i.CountUp(e,l,{startVal:h,duration:a,decimal:t,decimalPlaces:n,easingFn:r,formattingFn:o,numerals:c,separator:d,prefix:u,suffix:m,useEasing:p,useGrouping:!!d,enableScrollSpy:f,scrollSpyDelay:x,scrollSpyOnce:g})},h=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],m={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},p=function(e){var s=n.useMemo(function(){return r(r({},m),e)},[e]),t=s.ref,i=s.startOnMount,a=s.enableReinitialize,l=s.delay,c=s.onEnd,p=s.onStart,f=s.onPauseResume,x=s.onReset,g=s.onUpdate,j=o(s,h),v=n.useRef(),b=n.useRef(),N=n.useRef(!1),y=u(function(){return d("string"==typeof t?t:t.current,j)}),w=u(function(e){var s=v.current;if(s&&!e)return s;var t=y();return v.current=t,t}),V=u(function(){var e=function(){return w(!0).start(function(){null==c||c({pauseResume:E,reset:O,start:S,update:F})})};l&&l>0?b.current=setTimeout(e,1e3*l):e(),null==p||p({pauseResume:E,reset:O,update:F})}),E=u(function(){w().pauseResume(),null==f||f({reset:O,start:S,update:F})}),O=u(function(){w().el&&(b.current&&clearTimeout(b.current),w().reset(),null==x||x({pauseResume:E,start:S,update:F}))}),F=u(function(e){w().update(e),null==g||g({pauseResume:E,reset:O,start:S})}),S=u(function(){O(),V()}),P=u(function(e){i&&(e&&O(),V())});return n.useEffect(function(){N.current?a&&P(!0):(N.current=!0,P())},[a,N,P,l,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),n.useEffect(function(){return function(){O()}},[O]),{start:S,pauseResume:E,reset:O,update:F,getCountUp:w}},f=["className","redraw","containerProps","children","style"];s.ZP=function(e){var s=e.className,t=e.redraw,i=e.containerProps,a=e.children,c=e.style,d=o(e,f),h=n.useRef(null),m=n.useRef(!1),x=p(r(r({},d),{},{ref:h,startOnMount:"function"!=typeof a||0===e.delay,enableReinitialize:!1})),g=x.start,j=x.reset,v=x.update,b=x.pauseResume,N=x.getCountUp,y=u(function(){g()}),w=u(function(s){e.preserveValue||j(),v(s)}),V=u(function(){if("function"==typeof e.children&&!(h.current instanceof Element)){console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');return}N()});return(n.useEffect(function(){V()},[V]),n.useEffect(function(){m.current&&w(e.end)},[e.end,w]),n.useEffect(function(){t&&m.current&&y()},[y,t,t&&e]),n.useEffect(function(){!t&&m.current&&y()},[y,t,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),n.useEffect(function(){m.current=!0},[]),"function"==typeof a)?a({countUpRef:h,start:g,reset:j,update:v,pauseResume:b,getCountUp:N}):n.createElement("span",l({className:s,ref:h,style:c},i),void 0!==e.start?N().formattingFn(e.start):"")}}},function(e){e.O(0,[664,4,282,774,888,179],function(){return e(e.s=1619)}),_N_E=e.O()}]);