var LUX=LUX||{};LUX.customerid="4265275546";LUX["samplerate"]=1;LUX["jspagelabel"]="type";!function(){"use strict";function e(e){return Math.floor(e)}var t=Math.max,n=Math.round;function r(e){return t(0,e)}function i(e,t){return e-t}function a(){return Date.now?Date.now():+new Date}var o,s=a(),c=window.performance||{},u=c.timing||{activationStart:0,navigationStart:(null===(o=window.LUX)||void 0===o?void 0:o.ns)||s};function l(){return c.navigation&&void 0!==c.navigation.type?c.navigation.type:""}function f(){var t=d("navigation");if(t.length){var n=t[0],r={navigationStart:0,activationStart:0};for(var i in n)r[i]=n[i];return r}var a=l(),o={navigationStart:0,activationStart:0,startTime:0,type:2==a?"back_forward":1===a?"reload":"navigate"};for(var i in u)"number"==typeof u[i]&&"navigationStart"!==i&&(o[i]=e(u[i]-u.navigationStart));return o}function d(e){if("function"==typeof c.getEntriesByType){var t=c.getEntriesByType(e);if(t&&t.length)return t}return[]}function v(e){if("function"==typeof c.getEntriesByName){var t=c.getEntriesByName(e);if(t&&t.length)return t}return[]}function g(){return!document.visibilityState||"visible"===document.visibilityState}function m(e){!function(e){document.prerendering?document.addEventListener("prerenderingchange",e,!0):e()}((function(){if(g())e();else{var t=function(){g()&&(e(),removeEventListener("visibilitychange",t))};addEventListener("visibilitychange",t,!0)}}))}function p(){return document.prerendering||f().activationStart>0}var h=1,T=2,y=4,E=8,b=16,S=32,w=64,U=128,B=256,N=512,k=1024,I=2048,L=4096;function x(e,t){return e|t}function P(e,t,n){void 0===n&&(n=!1),addEventListener?addEventListener(e,t,n):window.attachEvent&&window.attachEvent("on"+e,t)}function D(e,t,n){void 0===n&&(n=!1),removeEventListener?removeEventListener(e,t,n):window.detachEvent&&window.detachEvent("on"+e,t)}var F,M=1,j=2,C=3,H=4,R=5,O=6,X=7,V=8,W=9,_=10,q=11,A=12,z=13,J=21,$=22,G=23,Y=24,K=25,Q=26,Z=41,ee=42,te=43,ne=51,re=52,ie=53,ae=54,oe=55,se=56,ce=57,ue=71,le=72,fe=80,de=81,ve=82,ge=83,me=84,pe=85,he=86,Te=87,ye=89,Ee=90,be=function(){function e(){this.events=[]}return e.prototype.logEvent=function(e,t){void 0===t&&(t=[]),this.events.push([a(),e,t])},e.prototype.getEvents=function(){return this.events},e}(),Se="LUX_start",we="LUX_end";function Ue(){return F}function Be(){var e;return t(Ue()||0,f().activationStart,(null===(e=v(Se).pop())||void 0===e?void 0:e.startTime)||0)}function Ne(t){return r(e(t-Be()))}function ke(){return c.now?e(c.now()):a()-u.navigationStart}function Ie(){var t=ke(),n=v(Se).pop();return n?e(t-n.startTime):t}function Le(e,t,n){for(;e.length<t;)e=n+e;return e}var xe="4.0.29";function Pe(e){void 0===e&&(e=xe);var t=e.split(".");return parseFloat(t[0]+"."+Le(t[1],2,"0")+Le(t[2],2,"0"))}var De="sendBeacon"in navigator?navigator.sendBeacon.bind(navigator):function(e,t){var n=new XMLHttpRequest;return n.open("POST",e,!0),n.setRequestHeader("content-type","application/json"),n.send(String(t)),!0};function Fe(e){return Ue()||p()?e>=0:e>0}function Me(e,t,n){for(var r=e.slice(0,t.maxBeaconUTEntries),i=e.slice(t.maxBeaconUTEntries);(n+"&UT="+r.join(",")).length>t.maxBeaconUrlLength&&r.length>1;)i.unshift(r.pop());return[r,i]}var je=function(){function e(e){var t=this;this.isRecording=!0,this.isSent=!1,this.sendRetries=0,this.maxMeasureTimeout=0,this.flags=0,this.onBeforeSendCbs=[],this.startTime=e.startTime||Be(),this.config=e.config,this.logger=e.logger,this.customerId=e.customerId,this.sessionId=e.sessionId,this.pageId=e.pageId,this.metricData={},this.maxMeasureTimeout=window.setTimeout((function(){t.logger.logEvent(ve),t.stopRecording(),t.send()}),this.config.maxMeasureTime-Ie()),P("securitypolicyviolation",(function(e){if("report"!==e.disposition&&e.blockedURI===t.config.beaconUrlV2&&"URL"in self){if(!t.config.beaconUrlFallback){var n=new URL(t.config.beaconUrl).origin,r=new URL(t.config.beaconUrlV2).pathname;t.config.beaconUrlFallback=n+r}t.config.beaconUrlV2=t.config.beaconUrlFallback,t.logger.logEvent(Ee,[t.config.beaconUrlV2]),t.addFlag(L),t.isSent=!1,t.sendRetries<1&&(t.sendRetries++,t.send())}})),this.logger.logEvent(fe)}return e.prototype.isBeingSampled=function(){return parseInt(String(this.sessionId).slice(-2))<this.config.samplerate},e.prototype.stopRecording=function(){this.isRecording=!1,this.logger.logEvent(he)},e.prototype.setMetricData=function(e,t){this.isRecording?this.metricData[e]=t:this.logger.logEvent(Te,[e])},e.prototype.addFlag=function(e){this.flags=x(this.flags,e)},e.prototype.hasMetricData=function(){return Object.keys(this.metricData).length>0},e.prototype.beaconUrl=function(){return this.config.beaconUrlV2},e.prototype.onBeforeSend=function(e){this.onBeforeSendCbs.push(e)},e.prototype.send=function(){this.logger.logEvent(de);for(var e=0,t=this.onBeforeSendCbs;e<t.length;e++){(0,t[e])()}if(this.isBeingSampled())if(this.hasMetricData()||this.config.allowEmptyPostBeacon)if(this.isSent)this.logger.logEvent(me);else{clearTimeout(this.maxMeasureTimeout);var n=this.beaconUrl(),r=Object.assign({customerId:this.customerId,flags:this.flags,measureDuration:Ie(),pageId:this.pageId,scriptVersion:xe,sessionId:this.sessionId,startTime:this.startTime},this.metricData);try{De(n,JSON.stringify(r))&&(this.isSent=!0,this.logger.logEvent(ge,[n,r]))}catch(e){}this.isSent||this.logger.logEvent(ye,[n,r])}else this.logger.logEvent(pe)},e}();function Ce(e){"complete"===document.readyState?e():P("load",(function(){setTimeout(e,200)}))}var He="https://lux.speedcurve.com";function Re(e,t,n){return void 0!==e[t]?e[t]:n}var Oe="lux_uid",Xe={},Ve={};function We(){return Ve}function _e(e){var t=[];for(var n in e){var r=""+e[n];n=n.replace(/,/g,"").replace(/\|/g,""),r=r.replace(/,/g,"").replace(/\|/g,""),t.push(n+"|"+r)}return encodeURIComponent(t.join(","))}function qe(e){var t;if(e.hasAttribute("data-sctrack")){var n=null===(t=e.getAttribute("data-sctrack"))||void 0===t?void 0:t.trim();if(n)return n}return function(e){if(e.parentNode&&e.parentNode.tagName)return!0;return!1}(e)?qe(e.parentNode):null}function Ae(e,t){void 0===t&&(t="");try{if(t&&(9===e.nodeType||t.length>100||!e.parentNode))return t;var n=e,r=qe(n);if(r)return r;if(n.id)return"#"+n.id+(t?">"+t:"");if(n){for(var i=1===n.nodeType?n.nodeName.toLowerCase():n.nodeName.toUpperCase(),a=n.className?"."+n.className.replace(/\s+/g,"."):"";(i+a).length>100;)a=a.split(".").slice(0,-1).join(".");var o=i+a+(t?">"+t:"");if(n.parentNode){var s=Ae(n.parentNode,o);if(s.length<100)return s}return o}}catch(e){}return t}var ze,Je=0,$e=[],Ge=[],Ye=0;function Ke(){return{value:Ye,startTime:$e[0]?Ne($e[0].startTime):null,largestEntry:ze?{value:ze.value,startTime:Ne(ze.startTime)}:null,sources:Ge.length?Ge:null}}var Qe,Ze=[],et={},tt=0;function nt(e){if(e.interactionId||"first-input"===e.entryType&&(v=e,!Ze.some((function(e){return v.startTime===e.startTime&&v.duration===e.duration})))){var t=e.duration,n=e.startTime,r=e.interactionId,i=e.name,a=e.processingStart,o=e.processingEnd,s=e.target;if(t<0)return;var c=o-a,u=et[r],l=s?Ae(s):null;if(u){var f=t>u.duration,d=t===u.duration&&c>u.processingTime;(f||d)&&(u.duration=t,u.name=i,u.processingEnd=o,u.processingStart=a,u.processingTime=c,u.selector=l,u.startTime=n,u.target=s)}else tt++,et[r]={duration:t,interactionId:r,name:i,processingEnd:o,processingStart:a,processingTime:c,selector:l,startTime:n,target:s},Ze.push(et[r]);Ze.sort((function(e,t){return t.duration-e.duration})),Ze.splice(10).forEach((function(e){delete et[e.interactionId]}))}var v}function rt(){var e=Math.min(Ze.length-1,Math.floor(function(){if("interactionCount"in c)return c.interactionCount;return tt}()/50));return Ze[e]}var it=[];function at(e,t,n){if("function"==typeof PerformanceObserver&&PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){e.getEntries().forEach((function(e){return t(e)}))}));return r.observe(Object.assign({type:e,buffered:!0},{options:n})),r}}function ot(e){return it.filter((function(t){return t.entryType===e}))}function st(e,t,n,r){var i=[];for(var a in e){var o=e[a];if(Array.isArray(o))for(var s in o){var c=o[s];if("string"==typeof c&&ct(c,t,n)){if(r)return a;i.push(a)}}}if(!r)return i}function ct(e,t,n){var r=function(e){return new RegExp("^"+(t=e,t.replace(/[-/\\^$+?.()|[\]{}]/g,"\\$&")).replace(/\*/g,".*")+"$","i");var t}(e);return"/"===e.charAt(0)?r.test(n):r.test(t+n)}var ut=window.LUX||{},lt=s;ut=function(){var a,o,v=new be,L=(o=Re(a=ut,"auto",!0),{allowEmptyPostBeacon:Re(a,"allowEmptyPostBeacon",!1),auto:o,beaconUrl:Re(a,"beaconUrl",He+"/lux/"),beaconUrlFallback:Re(a,"beaconUrlFallback"),beaconUrlV2:Re(a,"beaconUrlV2","https://beacon.speedcurve.com/store"),conversions:Re(a,"conversions"),cookieDomain:Re(a,"cookieDomain"),customerid:Re(a,"customerid"),errorBeaconUrl:Re(a,"errorBeaconUrl",He+"/error/"),interactionBeaconDelay:Re(a,"interactionBeaconDelay",200),jspagelabel:Re(a,"jspagelabel"),label:Re(a,"label"),maxBeaconUrlLength:Re(a,"maxBeaconUrlLength",8190),maxBeaconUTEntries:Re(a,"maxBeaconUTEntries",20),maxErrors:Re(a,"maxErrors",5),maxMeasureTime:Re(a,"maxMeasureTime",6e4),measureUntil:Re(a,"measureUntil","onload"),minMeasureTime:Re(a,"minMeasureTime",0),newBeaconOnPageShow:Re(a,"newBeaconOnPageShow",!1),pagegroups:Re(a,"pagegroups"),samplerate:Re(a,"samplerate",100),sendBeaconOnPageHidden:Re(a,"sendBeaconOnPageHidden",o),serverTiming:Re(a,"serverTiming"),trackErrors:Re(a,"trackErrors",!0),trackHiddenPages:Re(a,"trackHiddenPages",!1)});v.logEvent(M,[xe,JSON.stringify(L)]);var fe=window.document,de=window.addEventListener,ve=window.removeEventListener,ge=window.setTimeout,me=window.clearTimeout,pe=window.encodeURIComponent,he=fe.currentScript||{},Te=0;function ye(e){L.trackErrors&&(Te++,e&&void 0!==e.filename&&void 0!==e.message&&(e.filename.indexOf("/lux.js?")>-1||e.message.indexOf("LUX")>-1||Te<=L.maxErrors&&Xt())&&((new Image).src=L.errorBeaconUrl+"?v="+Pe()+"&id="+$t()+"&fn="+pe(e.filename)+"&ln="+e.lineno+"&cn="+e.colno+"&msg="+pe(e.message)+"&l="+pe(hn())+(Yt()?"&ct="+Yt():"")+"&HN="+pe(fe.location.hostname)+"&PN="+pe(fe.location.pathname)))}de("error",ye);var Ee,De,qe=0,ct=[],ft=[],dt={},vt=0,gt=0,mt=0,pt=1,ht=gn(),Tt=mn(ht),yt=ut.customerid,Et=function(){return new je({config:L,logger:v,customerId:$t(),sessionId:Tt,pageId:ht})},bt=Et(),St=function(e){v.logEvent(ee,[e])},wt=function(e){!function(e){it.push(e)}(e),St(e)};try{at("longtask",wt),at("element",wt),at("paint",wt),at("largest-contentful-paint",(function(n){wt(n),function(e){(!Qe||e.startTime>Qe.startTime)&&(Qe=e)}(n),bt.setMetricData("lcp",function(){if(Qe){var n=null;if(Qe.url){var i=d("resource").find((function(e){return e.name===Qe.url}));if(i){var a=f(),o=a.responseStart||u.responseStart,s=a.activationStart,c=t(0,o-s),l=i.startTime,v=(i.requestStart||l)-s,g=t(v,i.responseEnd-s),m=t(g,l-s);n={resourceLoadDelay:r(e(v-c)),resourceLoadTime:r(e(g-v)),elementRenderDelay:r(e(m-g))}}}var p=Qe.startTime;if(Fe(p))return{value:Ne(p),subParts:n,attribution:Qe.element?{elementSelector:Ae(Qe.element),elementType:Qe.element.nodeName}:null}}}())})),at("layout-shift",(function(e){!function(e){if(!e.hadRecentInput){var n=$e[0],r=$e[$e.length-1],i=e.sources?e.sources.filter((function(e){return e.node})).map((function(t){return{value:e.value,startTime:Ne(e.startTime),elementSelector:Ae(t.node),elementType:t.node.nodeName}})):[];$e.length&&(e.startTime-r.startTime>=1e3||e.startTime-n.startTime>=5e3)?(Je=e.value,$e=[e],Ge=i,ze=e):(Je+=e.value,$e.push(e),Ge=Ge.concat(i),(!ze||e.value>ze.value)&&(ze=e)),Ye=t(Ye,Je)}}(e),bt.setMetricData("cls",Ke()),St(e)}));var Ut=function(t){nt(t);var n=function(){var t,n=rt();if(n)return{value:n.duration,startTime:Ne(n.startTime),subParts:{inputDelay:r(e(n.processingStart-n.startTime)),processingTime:r(e(n.processingTime)),presentationDelay:r(e(n.startTime+n.duration-n.processingEnd))},attribution:n.selector?{elementSelector:n.selector,elementType:(null===(t=n.target)||void 0===t?void 0:t.nodeName)||"",eventType:n.name}:null}}();n&&bt.setMetricData("inp",n)};at("first-input",(function(t){St(t);var n=t.processingStart-t.startTime;(!Bt||Bt<n)&&(Bt=e(n)),Ut(t)})),at("event",(function(e){Ut(e),St({interactionId:e.interactionId,name:e.name,entryType:e.entryType,startTime:e.startTime,duration:e.duration,processingStart:e.processingStart,processingEnd:e.processingEnd})}),{durationThreshold:0})}catch(e){v.logEvent(ne,[e])}Xt()?v.logEvent(J,[L.samplerate]):v.logEvent($,[L.samplerate]);var Bt,Nt=ut.ns?ut.ns-u.navigationStart:0;c.timing||(v.logEvent(ue),qe=x(qe,T),bt.addFlag(T)),v.logEvent(Z,[u.navigationStart]);var kt,It,Lt=["click","mousedown","keydown","touchstart","pointerdown"],xt={passive:!0,capture:!0};function Pt(t){Bt||(Bt=e(t),Lt.forEach((function(e){ve(e,Dt,xt)})))}function Dt(e){var t=!1;try{t=e.cancelable}catch(e){return void v.logEvent(re)}if(t){var n=ke(),r=e.timeStamp;if(r>152e7&&(n=Number(new Date)),r>n)return;var i=n-r;"pointerdown"===e.type?function(e){function t(){Pt(e),r()}function n(){r()}function r(){ve("pointerup",t,xt),ve("pointercancel",n,xt)}de("pointerup",t,xt),de("pointercancel",n,xt)}(i):Pt(i)}}function Ft(){for(var e,t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];if(v.logEvent(H,n),c.mark)return c.mark.apply(c,n);var i={entryType:"mark",duration:0,name:n[0],detail:(null===(e=n[1])||void 0===e?void 0:e.detail)||null,startTime:(null===(t=n[1])||void 0===t?void 0:t.startTime)||Ie()};return ct.push(i),qe=x(qe,y),bt.addFlag(y),i}function Mt(e){return function(e,t){if(t)for(var n=t.length-1;n>=0;n--){var r=t[n];if(e===r.name)return r}return}(e,jt())}function jt(){var e=d("mark");return e.length?e:ct}function Ct(){var n,r={},i=Mt(Se),a=Be();jt().forEach((function(n){var i=n.name;if(i!==Se&&i!==we){var o=e(n.startTime-a);o<0||(void 0===r[i]?r[i]={startTime:o}:r[i].startTime=t(o,r[i].startTime))}})),(n=d("measure"),n.length?n:ft).forEach((function(t){if(!(i&&t.startTime<i.startTime)){var n=t.name,o=e(t.startTime-a),s=e(t.duration);(void 0===r[n]||o>r[n].startTime)&&(r[n]={startTime:o,duration:s})}}));var o=[];for(var s in r){var c=r[s],u=c.startTime,l=c.duration,f=[s,u];void 0!==l&&f.push(l),o.push(f.join("|"))}return o}function Ht(){if(!("PerformanceLongTaskTiming"in self))return"";var t="",r={},a={},o=ot("longtask");if(o.length){var s=Be();o.forEach((function(t){var n=e(t.duration);if(t.startTime<s&&(n-=s-t.startTime),n>0){v.logEvent(te,[t]);var i=t.attribution[0].name;r[i]||(r[i]=0,a[i]=""),r[i]+=n,a[i]+=","+e(t.startTime)+"|"+n}}))}var c=void 0!==r.script?"script":"unknown";void 0===r[c]&&(r[c]=0,a[c]="");var u=function(t){for(var r=0,a=At(),o=a||0,s=void 0===a,c=[],u=t.split(","),l=0;l<u.length;l++){var f=u[l].split("|");if(2===f.length){var d=parseInt(f[0]),v=parseInt(f[1]);if(c.push(v),r=v>r?v:r,!s&&d>o)if(d-o>5e3)s=!0;else{var g=Ne(d+v);Fe(g)&&(o=g)}}}var m=c.length,p=function(t){if(0===t.length)return 0;var r=e(t.length/2);return t.sort(i),t.length%2?t[r]:n((t[r-1]+t[r])/2)}(c);return{count:m,median:p,max:r,fci:o}}(a[c]),l=",n|"+u.count+",d|"+u.median+",x|"+u.max+(void 0===u.fci?"":",i|"+u.fci);return t+="s|"+r[c]+l+a[c]}function Rt(){var e=[];for(var t in dt)e.push(t+"|"+pe(dt[t]));return e.join(",")}function Ot(e,t){v.logEvent(O,[e,t]),"string"==typeof e&&function(e,t){var n=typeof t,r="undefined"===n||null===t;r||Xe[e]===t||(Ve[e]=t),"string"!==n&&"number"!==n&&"boolean"!==n||(Xe[e]=t),r&&delete Xe[e]}(e,t),vt&&(Ee&&me(Ee),Ee=ge(sn,100))}function Xt(){if(void 0===Tt||void 0===L.samplerate)return!1;var e=(""+Tt).substr(-2);return parseInt(e)<L.samplerate}function Vt(e,t){void 0===t&&(t=!0),Mt(we)&&(e?Ft(Se,{startTime:e}):Ft(Se),v.logEvent(C),L.auto&&!bt.isSent&&bt.send(),dt={},vn(),dn(),gt=0,vt=0,mt=0,pt=0,ht=gn(),Tt=mn(ht),Qe=void 0,Je=0,$e=[],Ye=0,ze=void 0,tt=0,Ze=[],et={},Te=0,Bt=void 0,bt=Et(),t&&(qe=x(qe=0,h),bt.addFlag(h)),en())}function Wt(){var e=Kt();if(!e)return function(){for(var e=fe.getElementsByTagName("script"),t=0,n=0,r=e.length;n<r;n++){var i=e[n];!i.src||i.async||i.defer||t++}return t}();for(var t=fe.getElementsByTagName("script"),n=0,r=0,i=t.length;r<i;r++){var a=t[r];a.src&&!a.async&&!a.defer&&4&a.compareDocumentPosition(e)&&n++}return n}function _t(e){for(var t=fe.getElementsByTagName(e),n=0,r=0,i=t.length;r<i;r++){var a=t[r];try{n+=a.innerHTML.length}catch(a){return v.logEvent(ie),-1}}return n}function qt(){var t="",n=u.navigationStart,a=Mt(Se),o=Mt(we);if(a&&o&&!Ue()){var s=e(a.startTime);t=(n+=s)+"as0fs0ls"+(w=e(o.startTime)-s)+"le"+w}else if(c.timing){var l=f(),g=function(){if("PerformancePaintTiming"in self){var t=d("paint");if(t.length)for(var n=t.map((function(e){return e.startTime})).sort(i),r=0;r<n.length;r++){var a=Ne(n[r]);if(Fe(a))return a}}if(c.timing&&u.msFirstPaint)return e(u.msFirstPaint-u.navigationStart);return void v.logEvent(le)}(),m=At(),p=function(){var e=ot("largest-contentful-paint");if(e.length){var t=e[e.length-1],n=Ne(t.startTime);if(Fe(n))return v.logEvent(te,[t]),n}return}(),h=function(e,t,n){if("number"==typeof l[e]){var r=l[e];if(Fe(r)||!n)return t+Ne(r)}return""},T=h("loadEventStart","ls",!0),y=h("loadEventEnd","le",!0);if(Ue()&&a&&o){var E=e(o.startTime-a.startTime);T="ls"+E,y="le"+E}var b=f().redirectCount>0||u.redirectEnd>0,S="https:"===fe.location.protocol;t=[n,"as"+r(l.activationStart),b&&!Ue()?h("redirectStart","rs"):"",b&&!Ue()?h("redirectEnd","re"):"",h("fetchStart","fs"),h("domainLookupStart","ds"),h("domainLookupEnd","de"),h("connectStart","cs"),S?h("secureConnectionStart","sc"):"",h("connectEnd","ce"),h("requestStart","qs"),h("responseStart","bs"),h("responseEnd","be"),h("domInteractive","oi",!0),h("domContentLoadedEventStart","os",!0),h("domContentLoadedEventEnd","oe",!0),h("domComplete","oc",!0),T,y,void 0!==g?"sr"+g:"",void 0!==m?"fc"+m:"",void 0!==p?"lc"+p:""].join("")}else if(o){var w;t=n+"fs0ls"+(w=e(o.startTime))+"le"+w}return t}function At(){for(var e=d("paint"),t=0;t<e.length;t++){var n=e[t];if("first-contentful-paint"===n.name){var r=Ne(n.startTime);if(Fe(r))return r}}}function zt(){if("PerformanceEventTiming"in self)return rt()}function Jt(t){return["&INP="+t.duration,t.selector?"&INPs="+pe(t.selector):"","&INPt="+e(t.startTime),"&INPi="+r(e(t.processingStart-t.startTime)),"&INPp="+r(e(t.processingTime)),"&INPd="+r(e(t.startTime+t.duration-t.processingEnd))].join("")}function $t(){return yt||(yt=he.src.match(/id=(\d+)/).pop()),yt?String(yt):""}function Gt(e){var t=0;if(e.parentNode)for(;e=e.parentNode;)t++;return t}function Yt(){var e=navigator.connection,t="";return e&&e.effectiveType&&(t="slow-2g"===(t=e.effectiveType)?"Slow 2G":"2g"===t||"3g"===t||"4g"===t||"5g"===t?t.toUpperCase():t.charAt(0).toUpperCase()+t.slice(1)),t}function Kt(e){var t;if(e||(e=fe.body),e){var n=e.children;if(n)for(var r=0,i=n.length;r<i;r++){var a=n[r];Qt(a)&&(t=a)}}return t?Kt(t):e}function Qt(e){var t=fe.documentElement.clientHeight,n=fe.documentElement.clientWidth,r=function(e){var t=0,n=0;for(;e;)t+=e.offsetLeft,n+=e.offsetTop,e=e.offsetParent;return[t,n]}(e);return r[0]>=0&&r[1]>=0&&r[0]<n&&r[1]<t&&e.offsetWidth>0&&e.offsetHeight>0}function Zt(e){v.logEvent(A,[e]),e?Ft(we,{startTime:e}):Ft(we)}function en(){tn(),De=ge((function(){qe=x(qe,S),bt.addFlag(S),rn()}),L.maxMeasureTime-Ie())}function tn(){De&&me(De)}function nn(e){var t=["v="+Pe(),"id="+$t(),"sid="+ht,"uid="+Tt,"l="+pe(hn()),"HN="+pe(fe.location.hostname),"PN="+pe(fe.location.pathname)];qe&&t.push("fl="+qe);var n=_e(e);return n&&(t.push("CD="+n),Ve={}),L.beaconUrl+"?"+t.join("&")}function rn(){var r;if(g()||L.trackHiddenPages){if(tn(),$t()&&ht&&Xt()&&!vt){v.logEvent(W);var i=Mt(Se),a=Mt(we);(!i||a&&a.startTime<i.startTime)&&Zt();var o="",d=zt();mt||""===(o=Rt())&&(d=void 0);var m,h,T,y,b=(m=[],ot("element").forEach((function(e){if(e.identifier&&e.startTime){var t=Ne(e.startTime);Fe(t)&&(v.logEvent(te,[e]),m.push(e.identifier+"|"+t))}})),m.join(",")),S=Ht(),w=function(){if("LayoutShift"in self)return Ke().value.toFixed(6)}(),U=function(){var t="";if(pt&&c.getEntriesByName){var n=c.getEntriesByName(he.src);if(n&&n.length){var r=n[0],i=e(r.domainLookupEnd-r.domainLookupStart),a=e(r.connectEnd-r.connectStart),o=e(r.responseStart-r.requestStart),l=e(r.responseEnd-r.responseStart),f=i+a+o+l,d=lt-s,v=r.encodedBodySize?r.encodedBodySize:0;t="d"+i+"t"+a+"f"+o+"c"+l+"n"+f+"e"+d+"r"+L.samplerate+("number"==typeof v?"x"+v:"")+("number"==typeof Nt?"l"+Nt:"")+"s"+(s-u.navigationStart)}}return t+"m"+Ie()}();if(g()||(qe=x(qe,E),bt.addFlag(E)),p()&&(qe=x(qe,k),bt.addFlag(k)),L.serverTiming){var B=f();if(B.serverTiming){var N=(h=L.serverTiming,T=B.serverTiming,y={},T.forEach((function(e){var t=e.name,n=e.description;if(t in h){var r=h[t],i=r[1];if("r"===r[0])y[t]=e.duration*(i||1);else if(n&&i){var a=parseFloat(n);isNaN(a)||(y[t]=a*i)}else y[t]=n||"true"}})),y);for(var I in N)Ot(I,N[I])}}ut.conversions&&st(ut.conversions,location.hostname,location.pathname).forEach((function(e){ut.addData(e,"true")}));var P,D,F,M=nn(Xe),j=_t("script"),C=_t("style"),H=f().encodedBodySize||0,R=Yt(),O=function(){var e=f();if("deliveryType"in e)return e.deliveryType||"(empty string)"}(),X=(gt?"":"&NT="+qt())+"&LJS="+U+"&PS=ns"+function(){for(var e=fe.getElementsByTagName("script"),t=0,n=0,r=e.length;n<r;n++)e[n].src&&t++;return t}()+"bs"+Wt()+(j>-1?"is"+j:"")+"ss"+function(){for(var e=fe.getElementsByTagName("link"),t=0,n=0,r=e.length;n<r;n++){var i=e[n];i.href&&"stylesheet"==i.rel&&t++}return t}()+"bc"+function(){for(var e=0,t=fe.getElementsByTagName("link"),n=0,r=t.length;n<r;n++){var i=t[n];i.href&&"stylesheet"===i.rel&&0!==i.href.indexOf("data:")&&(i.onloadcssdefined||"print"===i.media||"style"===i.as||"function"==typeof i.onload&&"all"===i.media||e++)}return e}()+(C>-1?"ic"+C:"")+"ia"+function(){var e=fe.getElementsByTagName("img"),t=[];if(e)for(var n=0,r=e.length;n<r;n++){var i=e[n];Qt(i)&&t.push(i)}return t}().length+"it"+fe.getElementsByTagName("img").length+"dd"+function(){for(var e=fe.getElementsByTagName("*"),t=e.length,r=0;t--;)r+=Gt(e[t]);return n(r/e.length)}()+"nd"+fe.getElementsByTagName("*").length+"vh"+fe.documentElement.clientHeight+"vw"+fe.documentElement.clientWidth+"dh"+(D=(P=fe).body,F=P.documentElement,t(D?D.scrollHeight:0,D?D.offsetHeight:0,F?F.clientHeight:0,F?F.scrollHeight:0,F?F.offsetHeight:0)+"dw")+function(e){var n=e.body,r=e.documentElement;return t(n?n.scrollWidth:0,n?n.offsetWidth:0,r?r.clientWidth:0,r?r.scrollWidth:0,r?r.offsetWidth:0)}(fe)+(H?"ds"+H:"")+(R?"ct"+R+"_":"")+(void 0!==O?"dt"+O+"_":"")+"er"+Te+"nt"+l()+(navigator.deviceMemory?"dm"+n(navigator.deviceMemory):"")+(o?"&IX="+o:"")+(void 0!==Bt?"&FID="+Bt:"")+(S?"&CPU="+S:"")+(b?"&ET="+b:"")+(void 0!==w?"&CLS="+w:"")+(void 0!==d?Jt(d):""),V=Me(Ct(),L,M+X),_=V[0],q=V[1],A=M+X+(_.length>0?"&UT="+_.join(","):"");for(v.logEvent(G,[A]),cn(A),vt=1,gt=1,mt=o?1:0;q.length;){_=(r=Me(q,L,M))[0],q=r[1];var J=M+"&UT="+_.join(",");v.logEvent(Y,[J]),cn(J)}}}else v.logEvent(z)}function an(){me(kt),kt=ge(on,L.interactionBeaconDelay)}function on(){if($t()&&ht&&Xt()&&!mt&&vt){var e=Rt(),t=zt();if(e){var n=nn(We())+"&IX="+e+(void 0!==Bt?"&FID="+Bt:"")+(void 0!==t?Jt(t):"");v.logEvent(K,[n]),cn(n),mt=1}}}function sn(){if($t()&&ht&&Xt()&&vt&&_e(We())){var e=nn(We());v.logEvent(Q,[e]),cn(e)}}function cn(e){(new Image).src=e}function un(){void 0===dt.s&&(dt.s=Ie())}function ln(e){var t=e.keyCode;if(16!==t&&17!==t&&18!==t&&20!==t&&224!==t){if(void 0===dt.k){if(dt.k=Ie(),e&&e.target instanceof Element){var n=Ae(e.target);n&&(dt.ki=n)}delete dt.s,an()}vn()}}function fn(e){if(void 0===dt.c){dt.c=Ie(),delete dt.s;var t=void 0;try{e&&e.target instanceof Element&&(t=e.target)}catch(e){v.logEvent(ae)}if(t){e.clientX&&(dt.cx=e.clientX,dt.cy=e.clientY);var n=Ae(t);n&&(dt.ci=n)}an()}vn()}function dn(){P("scroll",un),P("keydown",ln),P("mousedown",fn)}function vn(){D("scroll",un),D("keydown",ln),D("mousedown",fn)}function gn(e){return void 0===e&&(e=!1),e?Number(new Date)+"00000":Number(new Date)+Le(String(n(1e5*Math.random())),5,"0")}function mn(e){var t=function(e){try{for(var t=fe.cookie.split(";"),n=0;n<t.length;n++){var r=t[n].split("=");if(e===r[0].trim())return unescape(r[1])}}catch(e){v.logEvent(oe)}return}(Oe);if(!t||t.length<11)t=e;else{var n=parseInt(t.substring(0,10));Number(new Date)/1e3-n>86400&&(t=e)}return pn(t),t}function pn(e){return function(e,t,n){try{fe.cookie=e+"="+escape(t)+(n?"; max-age="+n:"")+(L.cookieDomain?"; domain="+L.cookieDomain:"")+"; path=/; SameSite=Lax"}catch(e){v.logEvent(se)}}(Oe,e,1800),e}function hn(){if(ut.label)return qe=x(qe,U),bt.addFlag(U),ut.label;if(void 0!==ut.pagegroups&&(t=st(ut.pagegroups,location.hostname,location.pathname,!0)))return qe=x(qe,N),bt.addFlag(N),t;if(void 0!==ut.jspagelabel){var e=Function('"use strict"; return '+ut.jspagelabel);try{var t;if(t=e())return qe=x(qe,B),bt.addFlag(B),t}catch(e){v.logEvent(ce,[ut.jspagelabel,e])}}return qe=x(qe,w),bt.addFlag(w),fe.title}if(Lt.forEach((function(e){de(e,Dt,xt)})),L.auto){var Tn=function(){L.trackHiddenPages?rn():m(rn)},yn=function(){var e=Ie(),t=L.minMeasureTime-e;t<=0?(v.logEvent(q,[e,L.minMeasureTime]),"onload"===L.measureUntil&&Ce(Tn)):ge(yn,t)};yn()}L.newBeaconOnPageShow&&de("pageshow",(function(e){var t;e.persisted&&(t=e.timeStamp,F=t,ge((function(){vt&&(Vt(Ue(),!1),Zt()),qe=x(qe,I),bt.addFlag(I)}),0))})),L.sendBeaconOnPageHidden&&(It=function(){qe=x(qe,b),bt.addFlag(b),v.logEvent(_),rn(),on(),bt.send()},"onpagehide"in self?P("pagehide",It,!0):(P("unload",It,!0),P("beforeunload",It,!0)),P("visibilitychange",(function(){"hidden"===fe.visibilityState&&It()}),!0)),dn(),en();var En=L;function bn(e){var t=e[0],n=e.slice(1);"function"==typeof En[t]&&En[t].apply(En,n)}return En.mark=Ft,En.measure=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];v.logEvent(R,e);var n,r=e[0],i=e[1],a=e[2];if("object"==typeof i&&(i=(n=e[1]).start,a=n.end),void 0===i&&(i=Mt(Se)?Se:"navigationStart",n?n.end&&n.duration||(e[1].start=i):e[1]=i),c.measure)return c.measure.apply(c,e);var o=f(),s="number"==typeof i?i:0,u="number"==typeof a?a:Ie(),l=function(e){throw new DOMException("Failed to execute 'measure' on 'Performance': The mark '"+e+"' does not exist")};if("string"==typeof i){var d=Mt(i);d?s=d.startTime:"number"==typeof o[i]?s=o[i]:l(i)}if("string"==typeof a){var g=Mt(a);g?u=g.startTime:"number"==typeof o[a]?u=o[a]:l(a)}var m=u-s,p=null;n&&(n.duration&&(m=n.duration),p=n.detail);var h={entryType:"measure",name:r,detail:p,startTime:s,duration:m};return ft.push(h),qe=x(qe,y),bt.addFlag(y),h},En.init=Vt,En.markLoadTime=Zt,En.send=function(){v.logEvent(X),bt.send(),rn()},En.addData=Ot,En.getSessionId=function(){return Tt},En.getDebug=function(){return console.log("SpeedCurve RUM debugging documentation: https://support.speedcurve.com/docs/rum-js-api#luxgetdebug"),v.getEvents()},En.forceSample=function(){v.logEvent(V),pn(gn(!0))},En.doUpdate=function(){},En.cmd=bn,En.version=xe,ut.ac&&ut.ac.length&&ut.ac.forEach(bn),void 0!==window.LUX_ae&&window.LUX_ae.forEach(ye),v.logEvent(j),En}(),window.LUX=ut,lt=a()}();
//# sourceMappingURL=lux.min.js.map
