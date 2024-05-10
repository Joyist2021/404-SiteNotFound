(()=>{var t={6780:(t,r,e)=>{var n=e(73);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */i=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",f=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function h(r,e,n,o){var i,c,u=Object.create((e&&e.prototype instanceof g?e:g).prototype);return a(u,"_invoke",{value:(i=new P(o||[]),c=v,function(e,o){if(c===y)throw Error("Generator is already running");if(c===d){if("throw"===e)throw o;return{value:t,done:!0}}for(i.method=e,i.arg=o;;){var a=i.delegate;if(a){var u=function r(e,n){var o=n.method,i=e.iterator[o];if(i===t)return n.delegate=null,"throw"===o&&e.iterator.return&&(n.method="return",n.arg=t,r(e,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),m;var a=p(i,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,m;var c=a.arg;return c?c.done?(n[e.resultName]=c.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,m)}(a,i);if(u){if(u===m)continue;return u}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(c===v)throw c=d,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);c=y;var f=p(r,n,i);if("normal"===f.type){if(c=i.done?d:"suspendedYield",f.arg===m)continue;return{value:f.arg,done:i.done}}"throw"===f.type&&(c=d,i.method="throw",i.arg=f.arg)}})}),u}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var v="suspendedStart",y="executing",d="completed",m={};function g(){}function w(){}function b(){}var x={};l(x,u,function(){return this});var L=Object.getPrototypeOf,O=L&&L(L(S([])));O&&O!==e&&n.call(O,u)&&(x=O);var _=b.prototype=g.prototype=Object.create(x);function E(t){["next","throw","return"].forEach(function(r){l(t,r,function(t){return this._invoke(r,t)})})}function j(t,r){var e;a(this,"_invoke",{value:function(i,a){function c(){return new r(function(e,c){!function e(i,a,c,u){var f=p(t[i],t,a);if("throw"!==f.type){var s=f.arg,l=s.value;return l&&"object"==o(l)&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,c,u)},function(t){e("throw",t,c,u)}):r.resolve(l).then(function(t){s.value=t,c(s)},function(t){return e("throw",t,c,u)})}u(f.arg)}(i,a,e,c)})}return e=e?e.then(c,c):c()}})}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function S(r){if(r||""===r){var e=r[u];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var i=-1,a=function e(){for(;++i<r.length;)if(n.call(r,i))return e.value=r[i],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw TypeError(o(r)+" is not iterable")}return w.prototype=b,a(_,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:w,configurable:!0}),w.displayName=l(b,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},r.awrap=function(t){return{__await:t}},E(j.prototype),l(j.prototype,f,function(){return this}),r.AsyncIterator=j,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new j(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(_),l(_,s,"Generator"),l(_,u,function(){return this}),l(_,"toString",function(){return"[object Generator]"}),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=S,P.prototype={constructor:P,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;N(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:S(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),m}},r}function a(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){e(t);return}c.done?r(u):Promise.resolve(u).then(n,o)}function c(){return Math.floor(Date.now()/1e3)}n(document).ready(function(){function t(){return r.apply(this,arguments)}function r(){var o;return o=i().mark(function r(){var o,a,u,f,s,l;return i().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return o="_resources/app/jsondata/live_data_sb.json?m="+Date.now(),r.prev=1,r.next=4,window.fetch(o);case 4:return u=r.sent,r.next=7,u.json();case 7:a=r.sent,r.next=14;break;case 10:return r.prev=10,r.t0=r.catch(1),console.error(r.t0),r.abrupt("return");case 14:var i;e((s=Number((f=function(t){var r=c(),e=Number.POSITIVE_INFINITY,n="";return t.forEach(function(t){t.next_reduce_timestamp<e&&t.next_reduce_timestamp>r&&(e=t.next_reduce_timestamp,n=t.cpu)}),{minTime:e,name:n}}(a.server)).minTime))-c()),i=f.name,n("#sb-name").html(i),l=window.setInterval(function(){var r=s-c();r>=0?e(r):(window.clearInterval(l),t())},1e3);case 19:case"end":return r.stop()}},r,null,[[1,10]])}),(r=function(){var t=this,r=arguments;return new Promise(function(e,n){var i=o.apply(t,r);function c(t){a(i,e,n,c,u,"next",t)}function u(t){a(i,e,n,c,u,"throw",t)}c(void 0)})}).apply(this,arguments)}function e(t){var r=n("#sb-time"),e=parseInt(t,10),o=Math.floor(e/3600),i=Math.floor((e-3600*o)/60),a=e-3600*o-60*i;o<10&&(o="0"+o),i<10&&(i="0"+i),a<10&&(a="0"+a),r.html(o+":"+i+":"+a)}t().catch(function(t){return console.error(t)})})}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n].call(i.exports,i,i.exports,e),i.exports}e.m=t,e.amdO={},(()=>{var t=[];e.O=(r,n,o,i)=>{if(n){i=i||0;for(var a=t.length;a>0&&t[a-1][2]>i;a--)t[a]=t[a-1];t[a]=[n,o,i];return}for(var c=1/0,a=0;a<t.length;a++){for(var[n,o,i]=t[a],u=!0,f=0;f<n.length;f++)c>=i&&Object.keys(e.O).every(t=>e.O[t](n[f]))?n.splice(f--,1):(u=!1,i<c&&(c=i));if(u){t.splice(a--,1);var s=o();void 0!==s&&(r=s)}}return r}})(),e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),e.j=8789,(()=>{var t={8789:0};e.O.j=r=>0===t[r];var r=(r,n)=>{var o,i,[a,c,u]=n,f=0;if(a.some(r=>0!==t[r])){for(o in c)e.o(c,o)&&(e.m[o]=c[o]);if(u)var s=u(e)}for(r&&r(n);f<a.length;f++)i=a[f],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(s)},n=self.webpackChunkhetzner_ss=self.webpackChunkhetzner_ss||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var n=e.O(void 0,[8096],()=>e(6780));n=e.O(n)})();