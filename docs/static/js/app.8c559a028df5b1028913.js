webpackJsonp([0],[,,,function(o,e,m){"use strict";e.a={name:"app"}},function(o,e,m){"use strict";var c=m(19),a=m(20),n=c.a.os,i=c.a.browser,p=c.a.platform,t=c.a.vendor;e.a={name:"Home",data:function(){var o=i.name+" "+i.version+", "+n.name+", OS "+n.version+",\n    "+p+", "+t;return{title:"W3C TEST BROWSER",cards:a.a,info:o}}}},function(o,e,m){o.exports=m.p+"static/img/logo-white.c1ba9a2.png"},function(o,e,m){"use strict";var c=m(24);e.a={name:"hello",data:function(){return{apps:c.a,title:"W3C TEST BROWSER",msg:"Welcome to Your Vue.js PWA"}}}},function(o,e,m){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c=m(1),a=m(11),n=m(15);c.a.config.productionTip=!1,new c.a({el:"#app",router:n.a,template:"<App/>",components:{App:a.a}})},,,,function(o,e,m){"use strict";function c(o){m(12)}var a=m(3),n=m(14),i=m(0),p=c,t=i(a.a,n.a,!1,p,null,null);e.a=t.exports},function(o,e){},,function(o,e,m){"use strict";var c=function(){var o=this,e=o.$createElement,m=o._self._c||e;return m("div",{attrs:{id:"app"}},[m("router-view")],1)},a=[],n={render:c,staticRenderFns:a};e.a=n},function(o,e,m){"use strict";var c=m(1),a=m(16),n=m(17),i=m(22);c.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Home",component:n.a},{path:"/universal-detector",name:"universal-detector",component:i.a}]})},,function(o,e,m){"use strict";function c(o){m(18)}var a=m(4),n=m(21),i=m(0),p=c,t=i(a.a,n.a,!1,p,"data-v-2c67d288",null);e.a=t.exports},function(o,e){},function(o,e,m){"use strict";function c(o){return String(o).replace(/_/g,".")}var a=navigator.userAgent;e.a={browser:function(o){for(var e={name:"unknown",version:"0.0.0"},m=[{name:"QQ",reg:/MQQBrowser\/([\d.]+)/},{name:"UC",reg:/(?:UCWEB|UCBrowser\/)([\d.]+)/},{name:"Firefox",reg:/(?:Firefox|FxiOS)\/([\d.]+)/},{name:"IE",reg:/MSIE\s([\d.]+)/},{name:"IEMobile",reg:/IEMobile\/([\d.]+)/},{name:"Chrome",reg:/(?:Chrome|CriOS)\/([\d.]+)/,fn:function(e){/Version\/[\d+.]+\s*Chrome/.test(o)&&(e.name="Chrome Webview",e.isWebview=!0)}},{name:"Android",reg:/Android[\s\/]([\d.]+)/},{name:"ios",reg:/iPhone|iPad|iPod/,fn:function(e){/Safari/.test(o)&&/Version\/([\d.]+)/.test(o)?(e.name="Safari",e.version=RegExp.$1,e.isSafari=!0):/OS ([\d_.]+) like Mac OS X/.test(o)&&(e.name="iOS Webview",e.version=RegExp.$1,e.isWebview=!0)}}],a=0;a<m.length;a+=1)if(m[a].reg.test(o)){e.version=RegExp.$1,e.version&&(e.name=m[a].name,e["is"+m[a].name]=!0),m[a].fn&&m[a].fn(e);break}return e.version=c(e.version),e}(a),os:function(o){var e={name:"unknown",version:"0.0.0"};if(/Windows\sPhone\s(?:OS\s)?([\d.]+)/.test(o))e={name:"Windows Phone",isWindowsPhone:!0,version:RegExp.$1};else if(/Safari/.test(o)&&/Android[\s\/]([\d.]+)/.test(o))e.version=RegExp.$1,/Mobile\s+Safari/.test(o)?(e.name="Android",e.isAndroid=!0):(e.isAndroid=!0,e.name="AndroidPad",e.isAndroidPad=!0);else if(/(iPhone|iPad|iPod)/.test(o)){var m=RegExp.$1;/OS ([\d_.]+) like Mac OS X/.test(o)&&(e={name:m,isIPhone:"iPad"!==m,isIPad:"iPad"===m,isIOS:!0,version:RegExp.$1})}return e.version=c(e.version),e}(a),platform:navigator.platform,vendor:navigator.vendor}},function(o,e,m){"use strict";e.a=[{name:"Octane 2.0",desc:"Google V8基准测试",class:"young_grass",link:"https://chromium.github.io/octane/"},{name:"FishIE Tank",desc:"GPU加速测试",class:"tempting_azure",link:"https://testdrive-archive.azurewebsites.net/Performance/FishIETank/Default.html"},{name:"JetStream",desc:"JavaScript benchmark",class:"sleepless_night",link:"http://browserbench.org/JetStream/"},{name:"HTML5 test",desc:"Test how well does your browser support html5",class:"malibu_beach",link:"http://html5test.com/"},{name:"ACID3",desc:"Web标准基准测试",class:"new_life",link:"http://acid3.acidtests.org/"},{name:"Peacekeeper",desc:"浏览器的综合性能评估",class:"high_flight",link:"http://peacekeeper.futuremark.com/run.action"},{name:"Robohornet Pro",desc:"Robohornet + Animation + Touch + Power",class:"colorful_peach",link:"https://testdrive-archive.azurewebsites.net/performance/robohornetpro/"},{name:"ACID3",desc:"Web标准基准测试",class:"crystalline",link:"http://acid3.acidtests.org/"}]},function(o,e,m){"use strict";var c=function(){var o=this,e=o.$createElement,c=o._self._c||e;return c("div",{staticClass:"wrapper"},[c("header",{staticClass:"north_miracle"},[c("img",{staticClass:"logo",attrs:{src:m(5),alt:"w3c-test"}}),o._v(" "),c("h1",[o._v(o._s(o.title))]),o._v(" "),c("p",[o._v(o._s(o.info))])]),o._v(" "),c("main",o._l(o.cards,function(e){return c("a",{key:e.name,class:"card-tpl "+e.class,attrs:{href:e.link}},[c("h1",[o._v(o._s(e.name))]),o._v(" "),c("p",[o._v(o._s(e.desc))])])}))])},a=[],n={render:c,staticRenderFns:a};e.a=n},function(o,e,m){"use strict";function c(o){m(23)}var a=m(6),n=m(26),i=m(0),p=c,t=i(a.a,n.a,!1,p,"data-v-89b04a2a",null);e.a=t.exports},function(o,e){},function(o,e,m){"use strict";var c=m(25),a=m.n(c);e.a=a.a},function(o,e){o.exports=[{code:"com.UCMobile",img:"http://pp.myapp.com/ma_icon/0/icon_10936_1512375490/96",name:"UC浏览器"},{code:"sogou.mobile.explorer",img:"http://pp.myapp.com/ma_icon/0/icon_1310756_1513653310/96",name:"搜狗浏览器"},{code:"com.ijinshan.browser_fast",img:"http://pp.myapp.com/ma_icon/0/icon_10619355_1513650229/96",name:"猎豹浏览器极速版"},{code:"com.android.chrome",img:"http://pp.myapp.com/ma_icon/0/icon_74260_1514010403/96",name:"谷歌浏览器Google Chrome"},{code:"com.tencent.qvrplay",img:"http://pp.myapp.com/ma_icon/0/icon_52449360_1510112434/96",name:"QQ浏览器VR"},{code:"com.baidu.browser.apps",img:"http://pp.myapp.com/ma_icon/0/icon_4920_1510543693/96",name:"百度浏览器"},{code:"com.browser2345",img:"http://pp.myapp.com/ma_icon/0/icon_276376_1513044053/96",name:"2345手机浏览器"},{code:"com.baidu.hao123",img:"http://pp.myapp.com/ma_icon/0/icon_7153_1511850985/96",name:"hao123上网导航"},{code:"com.daohang2345",img:"http://pp.myapp.com/ma_icon/0/icon_10423083_1512023641/96",name:"2345网址导航浏览器"},{code:"com.ledu.ebrowser",img:"http://pp.myapp.com/ma_icon/0/icon_42357511_1513773112/96",name:"e浏览器"},{code:"com.oupeng.mini.android",img:"http://pp.myapp.com/ma_icon/0/icon_8115_1513309491/96",name:"欧朋浏览器"},{code:"com.quark.browser",img:"http://pp.myapp.com/ma_icon/0/icon_42375936_1513669808/96",name:"夸克浏览器"},{code:"org.mozilla.firefox",img:"http://pp.myapp.com/ma_icon/0/icon_8106_1512029232/96",name:"火狐浏览器"},{code:"com.jx.minibrowser",img:"http://pp.myapp.com/ma_icon/0/icon_12185725_1511855623/96",name:"极速浏览器"},{code:"com.funnylemon.browser",img:"http://pp.myapp.com/ma_icon/0/icon_11803577_1492507230/96",name:"VC浏览器"},{code:"com.uc.browser.hd",img:"http://pp.myapp.com/ma_icon/0/icon_3540_1452677129/96",name:"UC浏览器HD"},{code:"com.jx.safebrowser",img:"http://pp.myapp.com/ma_icon/0/icon_42262093_1513232671/96",name:"安全浏览器"},{code:"com.estrongs.android.pop",img:"http://pp.myapp.com/ma_icon/0/icon_11322_1513445506/96",name:"ES文件浏览器"},{code:"com.vivo.browser",img:"http://pp.myapp.com/ma_icon/0/icon_12222348_1499223606/96",name:"vivo浏览器"},{code:"com.mx.browser",img:"http://pp.myapp.com/ma_icon/0/icon_5865_1513837562/96",name:"傲游云浏览器"},{code:"com.lenovo.browser",img:"http://pp.myapp.com/ma_icon/0/icon_10418044_1510052093/96",name:"绿茶浏览器"},{code:"com.yuedong.browser",img:"http://pp.myapp.com/ma_icon/0/icon_26331_1504233361/96",name:"悦动浏览器"},{code:"com.jx.fastbrowser",img:"http://pp.myapp.com/ma_icon/0/icon_12223982_1511233678/96",name:"高速浏览器"},{code:"com.hsc.huanyu",img:"http://pp.myapp.com/ma_icon/0/icon_52503587_1501153302/96",name:"寰宇浏览器"},{code:"com.roboo.explorer",img:"http://pp.myapp.com/ma_icon/0/icon_1140513_1506761945/96",name:"4G浏览器"},{code:"com.storm.yeelion",img:"http://pp.myapp.com/ma_icon/0/icon_12102302_1460717697/96",name:"快看浏览器"},{code:"com.lieying.browser",img:"http://pp.myapp.com/ma_icon/0/icon_42314397_1507881588/96",name:"猎鹰浏览器"},{code:"com.tencent.mtt.x86",img:"http://pp.myapp.com/ma_icon/0/icon_10605652_1474959997/96",name:"QQ浏览器(X86版)"},{code:"com.bu88.topbrowser",img:"http://pp.myapp.com/ma_icon/0/icon_10643689_18343707_1415022867/96",name:"淘扑浏览器"},{code:"com.ume.browser",img:"http://pp.myapp.com/ma_icon/0/icon_10293533_1513939121/96",name:"微米浏览器"},{code:"com.opera.mini.android",img:"http://pp.myapp.com/ma_icon/0/icon_8258_1511352374/96",name:"Opera迷你浏览器 Opera Mini 7"},{code:"com.huohoubrowser",img:"http://pp.myapp.com/ma_icon/0/icon_10126360_1503882755/96",name:"火猴浏览器"},{code:"com.mianfeinovel",img:"http://pp.myapp.com/ma_icon/0/icon_11367140_1513836427/96",name:"TXT免费全本阅读器"},{code:"com.juzi.browser",img:"http://pp.myapp.com/ma_icon/0/icon_12262377_1513917692/96",name:"桔子浏览器"},{code:"com.android.ch.browser",img:"http://pp.myapp.com/ma_icon/0/icon_11955408_1510211007/96",name:"虹米浏览器"},{code:"com.kk.jd.browser",img:"http://pp.myapp.com/ma_icon/0/icon_10138575_1466128678/96",name:"KK浏览器"},{code:"com.apc.browser",img:"http://pp.myapp.com/ma_icon/0/icon_86436_21082227_1431497322/96",name:"APC浏览器"},{code:"com.qq.reader",img:"http://pp.myapp.com/ma_icon/0/icon_10555_1511936885/96",name:"QQ阅读-小说漫画电子书阅读器"},{code:"com.shuqi.contq3",img:"http://pp.myapp.com/ma_icon/0/icon_11037654_1510367718/96",name:"海纳小说阅读器"},{code:"com.kk.jd.browser",img:"http://pp.myapp.com/ma_icon/0/icon_10138575_1466128678/96",name:"KK浏览器"},{code:"com.cplatform.android.cmsurfclient",img:"http://pp.myapp.com/ma_icon/0/icon_7727_18293802_1403861073/96",name:"冲浪浏览器"},{code:"com.xf.browser",img:"http://pp.myapp.com/ma_icon/0/icon_52460062_1495521326/96",name:"旋风浏览器"},{code:"com.mianfeinovel",img:"http://pp.myapp.com/ma_icon/0/icon_11367140_1513836427/96",name:"TXT免费全本阅读器"},{code:"com.autoapp.dsbrowser",img:"http://pp.myapp.com/ma_icon/0/icon_10679367_19573103_1416566201/96",name:"DS浏览器"},{code:"com.ireadercity",img:"http://pp.myapp.com/ma_icon/0/icon_3204_1511923175/96",name:"书香云集小说阅读器"},{code:"com.ninesky.nqbrowsercn",img:"http://pp.myapp.com/ma_icon/0/icon_1308409_17249137_1389875786/96",name:"网秦浏览器"},{code:"com.foxit.mobile.pdf.lite",img:"http://pp.myapp.com/ma_icon/0/icon_1165175_1513241924/96",name:"福昕PDF阅读器"},{code:"com.idbear",img:"http://pp.myapp.com/ma_icon/0/icon_12259785_1491468708/96",name:"谷熊浏览器"},{code:"com.imysky.skyalbum",img:"http://pp.myapp.com/ma_icon/0/icon_42272508_1513248270/96",name:"AR浏览器"},{code:"com.seal.browser",img:"http://pp.myapp.com/ma_icon/0/icon_42357283_1474623105/96",name:"海豹浏览器"},{code:"com.juwan.market",img:"http://pp.myapp.com/ma_icon/0/icon_10947850_1497951241/96",name:"WiFi看头条"},{code:"com.sixrpg.opalyer",img:"http://pp.myapp.com/ma_icon/0/icon_42356365_1513246932/96",name:"橙光"},{code:"cn.miren.browser",img:"http://pp.myapp.com/ma_icon/0/icon_9930_17246206_1389867779/96",name:"迷人浏览器"},{code:"com.ninesky.browser",img:"http://pp.myapp.com/ma_icon/0/icon_20410_19576820_1416638554/96",name:"九天浏览器"},{code:"com.mediawoz.xbrowser",img:"http://pp.myapp.com/ma_icon/0/icon_4418_518847_1415080434/96",name:"GO浏览器"},{code:"com.boatgo.browser",img:"http://pp.myapp.com/ma_icon/0/icon_5835_1462423330/96",name:"云舟迷你浏览器"},{code:"com.boatbrowser.free",img:"http://pp.myapp.com/ma_icon/0/icon_74617_1480511108/96",name:"云舟浏览器"},{code:"com.vee.project.browser",img:"http://pp.myapp.com/ma_icon/0/icon_285591_810524_1386698137/96",name:"云狐浏览器"},{code:"com.jike.browser",img:"http://pp.myapp.com/ma_icon/0/icon_235393_749681_1386686042/96",name:"即刻浏览器"},{code:"cn.com.wiisoft.andowser",img:"http://pp.myapp.com/ma_icon/0/icon_121852_14706774_1415108012/96",name:"安卓之窗浏览器"},{code:"com.access_company.android.nflifebrowser_zh",img:"http://pp.myapp.com/ma_icon/0/icon_19891_541090_1415086532/96",name:"爱可信NF Life浏览器"},{code:"com.duokan.reader",img:"http://pp.myapp.com/ma_icon/0/icon_6986_1511516923/96",name:"多看阅读"},{code:"jb.activity.mbook",img:"http://pp.myapp.com/ma_icon/0/icon_11216_1513579839/96",name:"GGBook看书小说软件"},{code:"mobi.mgeek.mypdf",img:"http://pp.myapp.com/ma_icon/0/icon_96973_1489067547/96",name:"网页转PDF"},{code:"com.ushaqi.zhuishushenqi",img:"http://pp.myapp.com/ma_icon/0/icon_1210709_1513964094/96",name:"追书神器"},{code:"com.iyd.reader.ReadingJoy",img:"http://pp.myapp.com/ma_icon/0/icon_5410_1513954477/96",name:"爱阅读"},{code:"com.baidu.yuedu",img:"http://pp.myapp.com/ma_icon/0/icon_10225149_1514107844/96",name:"百度阅读"},{code:"com.lectek.android.sfreader",img:"http://pp.myapp.com/ma_icon/0/icon_11490_1501494690/96",name:"天翼阅读"},{code:"com.sogou.novel",img:"http://pp.myapp.com/ma_icon/0/icon_1181247_1513669666/96",name:"搜狗阅读"},{code:"com.book2345.reader",img:"http://pp.myapp.com/ma_icon/0/icon_11087544_1513955250/96",name:"阅读王"},{code:"com.wtzw.reader",img:"http://pp.myapp.com/ma_icon/0/icon_52460351_1511257986/96",name:"梧桐阅读"},{code:"com.iBookStar.activity",img:"http://pp.myapp.com/ma_icon/0/icon_269518_1509002571/96",name:"阅读星"},{code:"com.tencent.news",img:"http://pp.myapp.com/ma_icon/0/icon_5613_1513820886/96",name:"腾讯新闻-头条新闻热点阅读软件"},{code:"com.ss.android.article.news",img:"http://pp.myapp.com/ma_icon/0/icon_213141_1513838778/96",name:"今日头条（新闻阅读）"},{code:"com.tencent.reading",img:"http://pp.myapp.com/ma_icon/0/icon_12082013_1513132665/96",name:"天天快报-腾讯兴趣阅读平台"},{code:"com.chaozh.iReaderFree",img:"http://pp.myapp.com/ma_icon/0/icon_11569_1513145662/96",name:"掌阅"},{code:"com.ophone.reader.ui",img:"http://pp.myapp.com/ma_icon/0/icon_9938_1513655581/96",name:"咪咕阅读"},{code:"com.myzaker.ZAKER_Phone",img:"http://pp.myapp.com/ma_icon/0/icon_48238_1513047065/96",name:"ZAKER（新闻阅读）"},{code:"com.esbook.reader",img:"http://pp.myapp.com/ma_icon/0/icon_10231316_1513851601/96",name:"宜搜小说"},{code:"com.android.comicsisland.activity",img:"http://pp.myapp.com/ma_icon/0/icon_10169396_1513933960/96",name:"漫画岛-手机漫画阅读神器"},{code:"com.alensw.PicFolder",img:"http://pp.myapp.com/ma_icon/0/icon_6272_1502755323/96",name:"快图浏览"},{code:"com.netease.pris",img:"http://pp.myapp.com/ma_icon/0/icon_9330_1512381221/96",name:"网易云阅读"},{code:"com.bittorrent.client",img:"http://pp.myapp.com/ma_icon/0/icon_220447_1509050325/96",name:"BT下载器"},{code:"hu.tagsoft.ttorrent.lite",img:"http://pp.myapp.com/ma_icon/0/icon_37996_1482610529/96",name:"安卓BT下载 tTorrent"},{code:"com.wjz.andtelecontrol",img:"http://pp.myapp.com/ma_icon/0/icon_220914_884826_1386698920/96",name:"手机遥控器"}]},function(o,e,m){"use strict";var c=function(){var o=this,e=o.$createElement,c=o._self._c||e;return c("div",{staticClass:"wrapper"},[c("aside",{staticClass:"side-bar purple_blue"},[c("img",{staticClass:"logo",attrs:{src:m(5),alt:"w3c-test"}}),o._v(" "),c("h1",[o._v(o._s(o.title))]),o._v(" "),o._m(0)]),o._v(" "),c("main",{staticClass:"flex-main"},o._l(o.apps,function(e,m){return c("div",{key:m,staticClass:"app-wrapper"},[c("div",{class:"app-ctx x"+e.class},[c("img",{staticClass:"app-icon",attrs:{src:e.img.replace("http:","")}}),o._v(" "),c("p",{staticClass:"app-name"},[o._v(o._s(e.name))])])])}))])},a=[function(){var o=this,e=o.$createElement,m=o._self._c||e;return m("p",{staticClass:"footer"},[o._v("应用信息抓取自"),m("a",{attrs:{href:"http://sj.qq.com/myapp/",target:"_blank"}},[o._v("腾讯应用宝")])])}],n={render:c,staticRenderFns:a};e.a=n}],[7]);
//# sourceMappingURL=app.8c559a028df5b1028913.js.map