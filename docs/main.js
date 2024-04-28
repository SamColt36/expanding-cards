(()=>{var t={328:(t,e,r)=>{r(624),t.exports=self.fetch.bind(self)},624:(t,e,r)=>{"use strict";r.r(e),r.d(e,{DOMException:()=>A,Headers:()=>h,Request:()=>m,Response:()=>v,fetch:()=>T});var o="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==r.g&&r.g||{},n={searchParams:"URLSearchParams"in o,iterable:"Symbol"in o&&"iterator"in Symbol,blob:"FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in o,arrayBuffer:"ArrayBuffer"in o};if(n.arrayBuffer)var i=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],s=ArrayBuffer.isView||function(t){return t&&i.indexOf(Object.prototype.toString.call(t))>-1};function a(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError('Invalid character in header field name: "'+t+'"');return t.toLowerCase()}function u(t){return"string"!=typeof t&&(t=String(t)),t}function c(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return n.iterable&&(e[Symbol.iterator]=function(){return e}),e}function h(t){this.map={},t instanceof h?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){if(2!=t.length)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+t.length);this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function f(t){if(!t._noBody)return t.bodyUsed?Promise.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function d(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function l(t){var e=new FileReader,r=d(e);return e.readAsArrayBuffer(t),r}function p(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(t){var e;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:n.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:n.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():n.arrayBuffer&&n.blob&&(e=t)&&DataView.prototype.isPrototypeOf(e)?(this._bodyArrayBuffer=p(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||s(t))?this._bodyArrayBuffer=p(t):this._bodyText=t=Object.prototype.toString.call(t):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n.blob&&(this.blob=function(){var t=f(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer)return f(this)||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer));if(n.blob)return this.blob().then(l);throw new Error("could not read as ArrayBuffer")},this.text=function(){var t,e,r,o,n,i=f(this);if(i)return i;if(this._bodyBlob)return t=this._bodyBlob,r=d(e=new FileReader),n=(o=/charset=([A-Za-z0-9_-]+)/.exec(t.type))?o[1]:"utf-8",e.readAsText(t,n),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n.formData&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(t,e){t=a(t),e=u(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},h.prototype.delete=function(t){delete this.map[a(t)]},h.prototype.get=function(t){return t=a(t),this.has(t)?this.map[t]:null},h.prototype.has=function(t){return this.map.hasOwnProperty(a(t))},h.prototype.set=function(t,e){this.map[a(t)]=u(e)},h.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},h.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),c(t)},h.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),c(t)},h.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),c(t)},n.iterable&&(h.prototype[Symbol.iterator]=h.prototype.entries);var b=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function m(t,e){if(!(this instanceof m))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,n,i=(e=e||{}).body;if(t instanceof m){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new h(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,i||null==t._bodyInit||(i=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new h(e.headers)),this.method=(n=(r=e.method||this.method||"GET").toUpperCase(),b.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal||function(){if("AbortController"in o)return(new AbortController).signal}(),this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(i),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==e.cache&&"no-cache"!==e.cache)){var s=/([?&])_=[^&]*/;s.test(this.url)?this.url=this.url.replace(s,"$1_="+(new Date).getTime()):this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}function w(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}})),e}function v(t,e){if(!(this instanceof v))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=void 0===e.statusText?"":""+e.statusText,this.headers=new h(e.headers),this.url=e.url||"",this._initBody(t)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},y.call(m.prototype),y.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:200,statusText:""});return t.status=0,t.type="error",t};var g=[301,302,303,307,308];v.redirect=function(t,e){if(-1===g.indexOf(e))throw new RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})};var A=o.DOMException;try{new A}catch(t){(A=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),A.prototype.constructor=A}function T(t,e){return new Promise((function(r,i){var s=new m(t,e);if(s.signal&&s.signal.aborted)return i(new A("Aborted","AbortError"));var c=new XMLHttpRequest;function f(){c.abort()}if(c.onload=function(){var t,e,o={statusText:c.statusText,headers:(t=c.getAllResponseHeaders()||"",e=new h,t.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(t){return 0===t.indexOf("\n")?t.substr(1,t.length):t})).forEach((function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();try{e.append(o,n)}catch(t){console.warn("Response "+t.message)}}})),e)};s.url.startsWith("file://")&&(c.status<200||c.status>599)?o.status=200:o.status=c.status,o.url="responseURL"in c?c.responseURL:o.headers.get("X-Request-URL");var n="response"in c?c.response:c.responseText;setTimeout((function(){r(new v(n,o))}),0)},c.onerror=function(){setTimeout((function(){i(new TypeError("Network request failed"))}),0)},c.ontimeout=function(){setTimeout((function(){i(new TypeError("Network request timed out"))}),0)},c.onabort=function(){setTimeout((function(){i(new A("Aborted","AbortError"))}),0)},c.open(s.method,function(t){try{return""===t&&o.location.href?o.location.href:t}catch(e){return t}}(s.url),!0),"include"===s.credentials?c.withCredentials=!0:"omit"===s.credentials&&(c.withCredentials=!1),"responseType"in c&&(n.blob?c.responseType="blob":n.arrayBuffer&&(c.responseType="arraybuffer")),e&&"object"==typeof e.headers&&!(e.headers instanceof h||o.Headers&&e.headers instanceof o.Headers)){var d=[];Object.getOwnPropertyNames(e.headers).forEach((function(t){d.push(a(t)),c.setRequestHeader(t,u(e.headers[t]))})),s.headers.forEach((function(t,e){-1===d.indexOf(e)&&c.setRequestHeader(e,t)}))}else s.headers.forEach((function(t,e){c.setRequestHeader(e,t)}));s.signal&&(s.signal.addEventListener("abort",f),c.onreadystatechange=function(){4===c.readyState&&s.signal.removeEventListener("abort",f)}),c.send(void 0===s._bodyInit?null:s._bodyInit)}))}T.polyfill=!0,o.fetch||(o.fetch=T,o.Headers=h,o.Request=m,o.Response=v)},516:()=>{const t=()=>{const t=document.createElement("figure"),e=document.createElement("img");return t.setAttribute("role","figure"),t.setAttribute("class","flex justify-center items-center overflow-hidden transition-all duration-500 border cursor-pointer border-gray-500 hover:brightness-100 brightness-75"),e.setAttribute("role","img"),e.setAttribute("class","object-cover w-full h-full image-landscape"),e.setAttribute("src","https://placehold.co/600?text=Carregando"),e.setAttribute("alt","Model image obtained from https://placehold.co/. A simple, fast and free image placeholder service."),t.appendChild(e),t};(()=>{const e=document.querySelector("main");for(let r=0;r<6;r++){const r=t();e.appendChild(r)}})()}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,r),i.exports}r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";r(516);var t={photo:"https://api.pexels.com/v1/",video:"https://api.pexels.com/videos/",collections:"https://api.pexels.com/v1/collections/"};function e(e,r){var o={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","User-Agent":"Pexels/JavaScript",Authorization:e}},n=t[r];return function(t,e){return fetch(""+n+t+"?"+function(t){return Object.keys(t).map((function(e){return e+"="+t[e]})).join("&")}(e||{}),o).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()}))}}function o(t){var r=e(t,"collections");return{all:function(t){return void 0===t&&(t={}),r("",t)},media:function(t){var e=t.id,o=function(t,e){if(null==t)return{};var r,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)e.indexOf(r=i[o])>=0||(n[r]=t[r]);return n}(t,["id"]);return r(""+e,o)},featured:function(t){return void 0===t&&(t={}),r("featured",t)}}}function n(t){return!(!t||!t.photos)}var i={__proto__:null,isPhotos:n,isVideos:function(t){return!(!t||!t.videos)},isError:function(t){return!!t.error}};function s(t){var r=e(t,"photo");return{search:function(t){return r("/search",t)},curated:function(t){return void 0===t&&(t={}),r("/curated",t)},show:function(t){return r("/photos/"+t.id)},random:function(){try{var t=Math.floor(1e3*Math.random());return Promise.resolve(this.curated({page:t,per_page:1})).then((function(t){return n(t)?t.photos[0]:t}))}catch(t){return Promise.reject(t)}}}}function a(t){var r=e(t,"video");return{search:function(t){return r("/search",t)},popular:function(t){return void 0===t&&(t={}),r("/popular",t)},show:function(t){return r("/videos/"+t.id)}}}r(328);const u=function(t){return{typeCheckers:i,photos:s(t),videos:a(t),collections:o(t)}}("IvtJEQNWC4iFB0UrtKN5jCpbamoJjhMUvWRp28gHUn5u2IrHFEQeXOE8");setInterval((async()=>async function(){const t=document.querySelectorAll(".image-landscape"),e=await(async()=>(await u.photos.search({query:"forest",size:"small",per_page:6,page:Math.floor(11*Math.random())+0})).photos)(),r=Array.from(t).map((async(t,r)=>({src:await e[r].src.portrait,alt:await e[r].alt}))),o=await Promise.all(r);t.forEach(((t,e)=>{const r=o[e];t.src=r.src,t.alt=r.alt}))}()),7e3)})()})();