webpackJsonp([0],[,,,function(e,n,t){"use strict";n.a={name:"app"}},function(e,n,t){"use strict";var a=t(17),r=t(18),s=a.a.os,i=a.a.browser,o=a.a.platform,c=a.a.vendor;n.a={name:"Home",data:function(){var e=i.name+" "+i.version+", "+s.name+", OS "+s.version+",\n    "+o+", "+c;return{title:"W3C TEST BROWSER",cards:r.a,info:e}}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t(9),s=t(13);a.a.config.productionTip=!1,new a.a({el:"#app",router:s.a,template:"<App/>",components:{App:r.a}})},,,,function(e,n,t){"use strict";function a(e){t(10)}var r=t(3),s=t(12),i=t(2),o=a,c=i(r.a,s.a,!1,o,null,null);n.a=c.exports},function(e,n){},,function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],s={render:a,staticRenderFns:r};n.a=s},function(e,n,t){"use strict";var a=t(0),r=t(14),s=t(15);a.a.use(r.a),n.a=new r.a({routes:[{path:"/",name:"Home",component:s.a}]})},,function(e,n,t){"use strict";function a(e){t(16)}var r=t(4),s=t(19),i=t(2),o=a,c=i(r.a,s.a,!1,o,null,null);n.a=c.exports},function(e,n){},function(e,n,t){"use strict";function a(e){return String(e).replace(/_/g,".")}var r=navigator.userAgent;n.a={browser:function(e){for(var n={name:"unknown",version:"0.0.0"},t=[{name:"QQ",reg:/MQQBrowser\/([\d.]+)/},{name:"UC",reg:/(?:UCWEB|UCBrowser\/)([\d.]+)/},{name:"Firefox",reg:/(?:Firefox|FxiOS)\/([\d.]+)/},{name:"IE",reg:/MSIE\s([\d.]+)/},{name:"IEMobile",reg:/IEMobile\/([\d.]+)/},{name:"Chrome",reg:/(?:Chrome|CriOS)\/([\d.]+)/,fn:function(n){/Version\/[\d+.]+\s*Chrome/.test(e)&&(n.name="Chrome Webview",n.isWebview=!0)}},{name:"Android",reg:/Android[\s\/]([\d.]+)/},{name:"ios",reg:/iPhone|iPad|iPod/,fn:function(n){/Safari/.test(e)&&/Version\/([\d.]+)/.test(e)?(n.name="Safari",n.version=RegExp.$1,n.isSafari=!0):/OS ([\d_.]+) like Mac OS X/.test(e)&&(n.name="iOS Webview",n.version=RegExp.$1,n.isWebview=!0)}}],r=0;r<t.length;r+=1)if(t[r].reg.test(e)){n.version=RegExp.$1,n.version&&(n.name=t[r].name,n["is"+t[r].name]=!0),t[r].fn&&t[r].fn(n);break}return n.version=a(n.version),n}(r),os:function(e){var n={name:"unknown",version:"0.0.0"};if(/Windows\sPhone\s(?:OS\s)?([\d.]+)/.test(e))n={name:"Windows Phone",isWindowsPhone:!0,version:RegExp.$1};else if(/Safari/.test(e)&&/Android[\s\/]([\d.]+)/.test(e))n.version=RegExp.$1,/Mobile\s+Safari/.test(e)?(n.name="Android",n.isAndroid=!0):(n.isAndroid=!0,n.name="AndroidPad",n.isAndroidPad=!0);else if(/(iPhone|iPad|iPod)/.test(e)){var t=RegExp.$1;/OS ([\d_.]+) like Mac OS X/.test(e)&&(n={name:t,isIPhone:"iPad"!==t,isIPad:"iPad"===t,isIOS:!0,version:RegExp.$1})}return n.version=a(n.version),n}(r),platform:navigator.platform,vendor:navigator.vendor}},function(e,n,t){"use strict";n.a=[{name:"Octane 2.0",desc:"Google V8基准测试",class:"young_grass",link:"https://chromium.github.io/octane/"},{name:"FishIE Tank",desc:"GPU加速测试",class:"tempting_azure",link:"https://testdrive-archive.azurewebsites.net/Performance/FishIETank/Default.html"},{name:"JetStream",desc:"JavaScript benchmark",class:"sleepless_night",link:"http://browserbench.org/JetStream/"},{name:"HTML5 test",desc:"Test how well does your browser support html5",class:"malibu_beach",link:"http://html5test.com/"},{name:"ACID3",desc:"Web标准基准测试",class:"new_life",link:"http://acid3.acidtests.org/"},{name:"Peacekeeper",desc:"浏览器的综合性能评估",class:"high_flight",link:"http://peacekeeper.futuremark.com/run.action"},{name:"Robohornet Pro",desc:"Robohornet + Animation + Touch + Power",class:"colorful_peach",link:"https://testdrive-archive.azurewebsites.net/performance/robohornetpro/"},{name:"ACID3",desc:"Web标准基准测试",class:"crystalline",link:"http://acid3.acidtests.org/"}]},function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"wrapper"},[a("header",{staticClass:"north_miracle"},[a("img",{staticClass:"logo",attrs:{src:t(20),alt:"w3c-test"}}),e._v(" "),a("h1",[e._v(e._s(e.title))]),e._v(" "),a("p",[e._v(e._s(e.info))])]),e._v(" "),a("main",e._l(e.cards,function(n){return a("a",{class:"card-tpl "+n.class,attrs:{href:n.link}},[a("h1",[e._v(e._s(n.name))]),e._v(" "),a("p",[e._v(e._s(n.desc))])])}))])},r=[],s={render:a,staticRenderFns:r};n.a=s},function(e,n,t){e.exports=t.p+"static/img/logo-white.c1ba9a2.png"}],[5]);
//# sourceMappingURL=app.f623c3e9d512a99e5b0b.js.map