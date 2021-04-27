!function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function i(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function o(e,t){e.appendChild(t)}function a(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function l(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function c(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function f(e){return document.createTextNode(e)}function d(){return f(" ")}function p(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function g(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function m(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function _(e,t){e.value=null==t?"":t}function y(e,t,n,r){e.style.setProperty(t,n,r?"important":"")}function v(e,t,n){e.classList[n?"add":"remove"](t)}let w;function b(e){w=e}const k=[],x=[],E=[],C=[],R=Promise.resolve();let S=!1;function O(e){E.push(e)}let I=!1;const T=new Set;function A(){if(!I){I=!0;do{for(let e=0;e<k.length;e+=1){const t=k[e];b(t),D(t.$$)}for(b(null),k.length=0;x.length;)x.pop()();for(let e=0;e<E.length;e+=1){const t=E[e];T.has(t)||(T.add(t),t())}E.length=0}while(k.length);for(;C.length;)C.pop()();S=!1,I=!1,T.clear()}}function D(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O)}}const $=new Set;function L(e,t){-1===e.$$.dirty[0]&&(k.push(e),S||(S=!0,R.then(A)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function M(s,o,a,l,h,c,f=[-1]){const d=w;b(s);const p=s.$$={fragment:null,ctx:null,props:c,update:e,not_equal:h,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:o.context||[]),callbacks:n(),dirty:f,skip_bound:!1};let g=!1;if(p.ctx=a?a(s,o.props||{},((e,t,...n)=>{const r=n.length?n[0]:t;return p.ctx&&h(p.ctx[e],p.ctx[e]=r)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](r),g&&L(s,e)),t})):[],p.update(),g=!0,r(p.before_update),p.fragment=!!l&&l(p.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);p.fragment&&p.fragment.l(e),e.forEach(u)}else p.fragment&&p.fragment.c();o.intro&&((m=s.$$.fragment)&&m.i&&($.delete(m),m.i(_))),function(e,n,s,o){const{fragment:a,on_mount:u,on_destroy:l,after_update:h}=e.$$;a&&a.m(n,s),o||O((()=>{const n=u.map(t).filter(i);l?l.push(...n):r(n),e.$$.on_mount=[]})),h.forEach(O)}(s,o.target,o.anchor,o.customElement),A()}var m,_;b(d)}class F{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function j(e,t,n){const r=e.slice();return r[4]=t[n],r}function q(e){let t,n,r,i,s,l,h=e[4].from_airport+"";return{c(){t=c("circle"),n=c("title"),r=f(h),g(t,"cx",i=e[2](e[4].from_long,-180,180,0,800)),g(t,"cy",s=e[2](e[4].from_lat,-90,90,400,0)),g(t,"r",l=e[2](e[4].distance,1,15406,2,10)),g(t,"class","svelte-1n4tf4y"),v(t,"international",e[4].from_country!=e[4].to_country),v(t,"hidden",Math.abs(e[4].distance-e[0])>1e3)},m(e,i){a(e,t,i),o(t,n),o(n,r)},p(e,n){2&n&&h!==(h=e[4].from_airport+"")&&m(r,h),2&n&&i!==(i=e[2](e[4].from_long,-180,180,0,800))&&g(t,"cx",i),2&n&&s!==(s=e[2](e[4].from_lat,-90,90,400,0))&&g(t,"cy",s),2&n&&l!==(l=e[2](e[4].distance,1,15406,2,10))&&g(t,"r",l),2&n&&v(t,"international",e[4].from_country!=e[4].to_country),3&n&&v(t,"hidden",Math.abs(e[4].distance-e[0])>1e3)},d(e){e&&u(t)}}}function z(t){let n,i,s,o,y,v,w,b,k,x,E,C,R,S=t[0]-1e3+"",O=t[0]+1e3+"",I=t[1],T=[];for(let e=0;e<I.length;e+=1)T[e]=q(j(t,I,e));return{c(){n=h("h1"),n.textContent="Airport flights data",i=f("\n  Airports serving flights in this range (km): "),s=f(S),o=f(" - "),y=f(O),v=d(),w=h("br"),b=d(),k=h("input"),x=d(),E=c("svg");for(let e=0;e<T.length;e+=1)T[e].c();g(k,"type","range"),g(k,"min","1"),g(k,"max","15406"),g(k,"class","slider"),g(k,"id","myRange"),g(E,"width","1000"),g(E,"height","500")},m(e,r){a(e,n,r),a(e,i,r),a(e,s,r),a(e,o,r),a(e,y,r),a(e,v,r),a(e,w,r),a(e,b,r),a(e,k,r),_(k,t[0]),a(e,x,r),a(e,E,r);for(let e=0;e<T.length;e+=1)T[e].m(E,null);C||(R=[p(k,"change",t[3]),p(k,"input",t[3])],C=!0)},p(e,[t]){if(1&t&&S!==(S=e[0]-1e3+"")&&m(s,S),1&t&&O!==(O=e[0]+1e3+"")&&m(y,O),1&t&&_(k,e[0]),7&t){let n;for(I=e[1],n=0;n<I.length;n+=1){const r=j(e,I,n);T[n]?T[n].p(r,t):(T[n]=q(r),T[n].c(),T[n].m(E,null))}for(;n<T.length;n+=1)T[n].d(1);T.length=I.length}},i:e,o:e,d(e){e&&u(n),e&&u(i),e&&u(s),e&&u(o),e&&u(y),e&&u(v),e&&u(w),e&&u(b),e&&u(k),e&&u(x),e&&u(E),l(T,e),C=!1,r(R)}}}function U(e,t,n){let r=5e3,i=[];fetch("https://vda-lab.github.io/assets/svelte-flights.json").then((e=>e.json())).then((e=>n(1,i=e.slice(1,5e3))));return[r,i,function(e,t,n,r,i){return(i-r)*(e-t)/(n-t)+r},function(){var e;e=this.value,r=""===e?null:+e,n(0,r)}]}function N(t){let n,r,i,s,l;return{c(){n=f(t[0]),r=h("br"),i=d(),s=c("svg"),l=c("rect"),g(l,"x",t[0]),g(l,"y","15"),g(l,"width","20"),g(l,"height","20"),g(l,"class","svelte-5msny2"),g(s,"width","400"),g(s,"height","50")},m(e,t){a(e,n,t),a(e,r,t),a(e,i,t),a(e,s,t),o(s,l)},p(e,[t]){1&t&&m(n,e[0]),1&t&&g(l,"x",e[0])},i:e,o:e,d(e){e&&u(n),e&&u(r),e&&u(i),e&&u(s)}}}function P(e,t,n){let r=0;return setInterval((()=>{n(0,r+=1),r>400&&n(0,r=0)}),100),[r]}function B(t){let n,r,i,s,l,p,_,y,v;return{c(){n=f(t[0]),r=h("br"),i=d(),s=c("svg"),l=c("g"),p=c("circle"),_=c("line"),g(p,"cx","0"),g(p,"cy","0"),g(p,"r",K/2),g(p,"class","svelte-94tp03"),g(_,"x1","0"),g(_,"y1","0"),g(_,"x2",y=t[2](K/2,t[1])),g(_,"y2",v=t[3](K/2,t[1])),g(_,"class","svelte-94tp03"),g(l,"transform","translate("+(K/2+5)+","+(K/2+5)+")"),g(s,"width",K+10),g(s,"height",K+10)},m(e,t){a(e,n,t),a(e,r,t),a(e,i,t),a(e,s,t),o(s,l),o(l,p),o(l,_)},p(e,[t]){1&t&&m(n,e[0]),2&t&&y!==(y=e[2](K/2,e[1]))&&g(_,"x2",y),2&t&&v!==(v=e[3](K/2,e[1]))&&g(_,"y2",v)},i:e,o:e,d(e){e&&u(n),e&&u(r),e&&u(i),e&&u(s)}}}let K=200;function W(e,t,n){let r,i=0;return setInterval((()=>{n(0,i+=1),360==i&&n(0,i=0)}),10),e.$$.update=()=>{1&e.$$.dirty&&n(1,r=i*Math.PI/180)},[i,r,function(e,t){return e*Math.cos(t)},function(e,t){return e*Math.sin(t)}]}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;
/* @license
    Papa Parse
    v5.3.0
    https://github.com/mholt/PapaParse
    License: MIT
    */
var H,Q=(function(e,t){e.exports=function e(){var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},n=!t.document&&!!t.postMessage,r=n&&/blob:/i.test((t.location||{}).protocol),i={},s=0,o={parse:function(n,r){var a=(r=r||{}).dynamicTyping||!1;if(b(a)&&(r.dynamicTypingFunction=a,a={}),r.dynamicTyping=a,r.transform=!!b(r.transform)&&r.transform,r.worker&&o.WORKERS_SUPPORTED){var u=function(){if(!o.WORKERS_SUPPORTED)return!1;var n,r,a=(n=t.URL||t.webkitURL||null,r=e.toString(),o.BLOB_URL||(o.BLOB_URL=n.createObjectURL(new Blob(["(",r,")();"],{type:"text/javascript"})))),u=new t.Worker(a);return u.onmessage=m,u.id=s++,i[u.id]=u}();return u.userStep=r.step,u.userChunk=r.chunk,u.userComplete=r.complete,u.userError=r.error,r.step=b(r.step),r.chunk=b(r.chunk),r.complete=b(r.complete),r.error=b(r.error),delete r.worker,void u.postMessage({input:n,config:r,workerId:u.id})}var d=null;return"string"==typeof n?d=r.download?new l(r):new c(r):!0===n.readable&&b(n.read)&&b(n.on)?d=new f(r):(t.File&&n instanceof File||n instanceof Object)&&(d=new h(r)),d.stream(n)},unparse:function(e,t){var n=!1,r=!0,i=",",s="\r\n",a='"',u=a+a,l=!1,h=null,c=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||o.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(i=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(n=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(l=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(a=t.quoteChar),"boolean"==typeof t.header&&(r=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");h=t.columns}void 0!==t.escapeChar&&(u=t.escapeChar+a),"boolean"==typeof t.escapeFormulae&&(c=t.escapeFormulae)}}();var f=new RegExp(p(a),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return g(null,e,l);if("object"==typeof e[0])return g(h||d(e[0]),e,l)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:d(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),g(e.fields||[],e.data||[],l);throw new Error("Unable to serialize unrecognized input");function d(e){if("object"!=typeof e)return[];var t=[];for(var n in e)t.push(n);return t}function g(e,t,n){var o="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var a=Array.isArray(e)&&0<e.length,u=!Array.isArray(t[0]);if(a&&r){for(var l=0;l<e.length;l++)0<l&&(o+=i),o+=m(e[l],l);0<t.length&&(o+=s)}for(var h=0;h<t.length;h++){var c=a?e.length:t[h].length,f=!1,d=a?0===Object.keys(t[h]).length:0===t[h].length;if(n&&!a&&(f="greedy"===n?""===t[h].join("").trim():1===t[h].length&&0===t[h][0].length),"greedy"===n&&a){for(var p=[],g=0;g<c;g++){var _=u?e[g]:g;p.push(t[h][_])}f=""===p.join("").trim()}if(!f){for(var y=0;y<c;y++){0<y&&!d&&(o+=i);var v=a&&u?e[y]:y;o+=m(t[h][v],y)}h<t.length-1&&(!n||0<c&&!d)&&(o+=s)}}return o}function m(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);!0===c&&"string"==typeof e&&null!==e.match(/^[=+\-@].*$/)&&(e="'"+e);var r=e.toString().replace(f,u);return"boolean"==typeof n&&n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||function(e,t){for(var n=0;n<t.length;n++)if(-1<e.indexOf(t[n]))return!0;return!1}(r,o.BAD_DELIMITERS)||-1<r.indexOf(i)||" "===r.charAt(0)||" "===r.charAt(r.length-1)?a+r+a:r}}};if(o.RECORD_SEP=String.fromCharCode(30),o.UNIT_SEP=String.fromCharCode(31),o.BYTE_ORDER_MARK="\ufeff",o.BAD_DELIMITERS=["\r","\n",'"',o.BYTE_ORDER_MARK],o.WORKERS_SUPPORTED=!n&&!!t.Worker,o.NODE_STREAM_INPUT=1,o.LocalChunkSize=10485760,o.RemoteChunkSize=5242880,o.DefaultDelimiter=",",o.Parser=g,o.ParserHandle=d,o.NetworkStreamer=l,o.FileStreamer=h,o.StringStreamer=c,o.ReadableStreamStreamer=f,t.jQuery){var a=t.jQuery;a.fn.parse=function(e){var n=e.config||{},r=[];return this.each((function(e){if("INPUT"!==a(this).prop("tagName").toUpperCase()||"file"!==a(this).attr("type").toLowerCase()||!t.FileReader||!this.files||0===this.files.length)return!0;for(var i=0;i<this.files.length;i++)r.push({file:this.files[i],inputElem:this,instanceConfig:a.extend({},n)})})),i(),this;function i(){if(0!==r.length){var t,n,i,u,l=r[0];if(b(e.before)){var h=e.before(l.file,l.inputElem);if("object"==typeof h){if("abort"===h.action)return t="AbortError",n=l.file,i=l.inputElem,u=h.reason,void(b(e.error)&&e.error({name:t},n,i,u));if("skip"===h.action)return void s();"object"==typeof h.config&&(l.instanceConfig=a.extend(l.instanceConfig,h.config))}else if("skip"===h)return void s()}var c=l.instanceConfig.complete;l.instanceConfig.complete=function(e){b(c)&&c(e,l.file,l.inputElem),s()},o.parse(l.file,l.instanceConfig)}else b(e.complete)&&e.complete()}function s(){r.splice(0,1),i()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=v(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new d(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,n){if(this.isFirstChunk&&b(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);void 0!==i&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var a=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var u=a.meta.cursor;this._finished||(this._partialLine=s.substring(u-this._baseIndex),this._baseIndex=u),a&&a.data&&(this._rowCount+=a.data.length);var l=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(r)t.postMessage({results:a,workerId:o.WORKER_ID,finished:l});else if(b(this._config.chunk)&&!n){if(this._config.chunk(a,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);a=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(a.data),this._completeResults.errors=this._completeResults.errors.concat(a.errors),this._completeResults.meta=a.meta),this._completed||!l||!b(this._config.complete)||a&&a.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),l||a&&a.meta.paused||this._nextChunk(),a}this._halted=!0},this._sendError=function(e){b(this._config.error)?this._config.error(e):r&&this._config.error&&t.postMessage({workerId:o.WORKER_ID,error:e,finished:!1})}}function l(e){var t;(e=e||{}).chunkSize||(e.chunkSize=o.RemoteChunkSize),u.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),n||(t.onload=w(this._chunkLoaded,this),t.onerror=w(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var r in e)t.setRequestHeader(r,e[r])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}n&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){var n=t.statusText||e;this._sendError(new Error(n))}}function h(e){var t,n;(e=e||{}).chunkSize||(e.chunkSize=o.LocalChunkSize),u.call(this,e);var r="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,r?((t=new FileReader).onload=w(this._chunkLoaded,this),t.onerror=w(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var i=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,i)}var s=t.readAsText(e,this._config.encoding);r||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function c(e){var t;u.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,n=this._config.chunkSize;return n?(e=t.substring(0,n),t=t.substring(n)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function f(e){u.call(this,e=e||{});var t=[],n=!0,r=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){r&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):n=!0},this._streamData=w((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),n&&(n=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=w((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=w((function(){this._streamCleanUp(),r=!0,this._streamData("")}),this),this._streamCleanUp=w((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function d(e){var t,n,r,i=Math.pow(2,53),s=-i,a=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/,u=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,l=this,h=0,c=0,f=!1,d=!1,m=[],_={data:[],errors:[],meta:{}};if(b(e.step)){var y=e.step;e.step=function(t){if(_=t,x())k();else{if(k(),0===_.data.length)return;h+=t.data.length,e.preview&&h>e.preview?n.abort():(_.data=_.data[0],y(_,l))}}}function w(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function k(){if(_&&r&&(C("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+o.DefaultDelimiter+"'"),r=!1),e.skipEmptyLines)for(var t=0;t<_.data.length;t++)w(_.data[t])&&_.data.splice(t--,1);return x()&&function(){if(_)if(Array.isArray(_.data[0])){for(var t=0;x()&&t<_.data.length;t++)_.data[t].forEach(n);_.data.splice(0,1)}else _.data.forEach(n);function n(t,n){b(e.transformHeader)&&(t=e.transformHeader(t,n)),m.push(t)}}(),function(){if(!_||!e.header&&!e.dynamicTyping&&!e.transform)return _;function t(t,n){var r,i=e.header?{}:[];for(r=0;r<t.length;r++){var s=r,o=t[r];e.header&&(s=r>=m.length?"__parsed_extra":m[r]),e.transform&&(o=e.transform(o,s)),o=E(s,o),"__parsed_extra"===s?(i[s]=i[s]||[],i[s].push(o)):i[s]=o}return e.header&&(r>m.length?C("FieldMismatch","TooManyFields","Too many fields: expected "+m.length+" fields but parsed "+r,c+n):r<m.length&&C("FieldMismatch","TooFewFields","Too few fields: expected "+m.length+" fields but parsed "+r,c+n)),i}var n=1;return!_.data.length||Array.isArray(_.data[0])?(_.data=_.data.map(t),n=_.data.length):_.data=t(_.data,0),e.header&&_.meta&&(_.meta.fields=m),c+=n,_}()}function x(){return e.header&&0===m.length}function E(t,n){return r=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[r]&&(e.dynamicTyping[r]=e.dynamicTypingFunction(r)),!0===(e.dynamicTyping[r]||e.dynamicTyping)?"true"===n||"TRUE"===n||"false"!==n&&"FALSE"!==n&&(function(e){if(a.test(e)){var t=parseFloat(e);if(s<t&&t<i)return!0}return!1}(n)?parseFloat(n):u.test(n)?new Date(n):""===n?null:n):n;var r}function C(e,t,n,r){var i={type:e,code:t,message:n};void 0!==r&&(i.row=r),_.errors.push(i)}this.parse=function(i,s,a){var u=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var n=new RegExp(p(t)+"([^]*?)"+p(t),"gm"),r=(e=e.replace(n,"")).split("\r"),i=e.split("\n"),s=1<i.length&&i[0].length<r[0].length;if(1===r.length||s)return"\n";for(var o=0,a=0;a<r.length;a++)"\n"===r[a][0]&&o++;return o>=r.length/2?"\r\n":"\r"}(i,u)),r=!1,e.delimiter)b(e.delimiter)&&(e.delimiter=e.delimiter(i),_.meta.delimiter=e.delimiter);else{var l=function(t,n,r,i,s){var a,u,l,h;s=s||[",","\t","|",";",o.RECORD_SEP,o.UNIT_SEP];for(var c=0;c<s.length;c++){var f=s[c],d=0,p=0,m=0;l=void 0;for(var _=new g({comments:i,delimiter:f,newline:n,preview:10}).parse(t),y=0;y<_.data.length;y++)if(r&&w(_.data[y]))m++;else{var v=_.data[y].length;p+=v,void 0!==l?0<v&&(d+=Math.abs(v-l),l=v):l=v}0<_.data.length&&(p/=_.data.length-m),(void 0===u||d<=u)&&(void 0===h||h<p)&&1.99<p&&(u=d,a=f,h=p)}return{successful:!!(e.delimiter=a),bestDelimiter:a}}(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);l.successful?e.delimiter=l.bestDelimiter:(r=!0,e.delimiter=o.DefaultDelimiter),_.meta.delimiter=e.delimiter}var h=v(e);return e.preview&&e.header&&h.preview++,t=i,n=new g(h),_=n.parse(t,s,a),k(),f?{meta:{paused:!0}}:_||{meta:{paused:!1}}},this.paused=function(){return f},this.pause=function(){f=!0,n.abort(),t=b(e.chunk)?"":t.substring(n.getCharIndex())},this.resume=function(){l.streamer._halted?(f=!1,l.streamer.parseChunk(t,!0)):setTimeout(l.resume,3)},this.aborted=function(){return d},this.abort=function(){d=!0,n.abort(),_.meta.aborted=!0,b(e.complete)&&e.complete(_),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(e){var t,n=(e=e||{}).delimiter,r=e.newline,i=e.comments,s=e.step,a=e.preview,u=e.fastMode,l=t=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(l=e.escapeChar),("string"!=typeof n||-1<o.BAD_DELIMITERS.indexOf(n))&&(n=","),i===n)throw new Error("Comment character same as delimiter");!0===i?i="#":("string"!=typeof i||-1<o.BAD_DELIMITERS.indexOf(i))&&(i=!1),"\n"!==r&&"\r"!==r&&"\r\n"!==r&&(r="\n");var h=0,c=!1;this.parse=function(e,o,f){if("string"!=typeof e)throw new Error("Input must be a string");var d=e.length,g=n.length,m=r.length,_=i.length,y=b(s),v=[],w=[],k=[],x=h=0;if(!e)return j();if(u||!1!==u&&-1===e.indexOf(t)){for(var E=e.split(r),C=0;C<E.length;C++){if(k=E[C],h+=k.length,C!==E.length-1)h+=r.length;else if(f)return j();if(!i||k.substring(0,_)!==i){if(y){if(v=[],$(k.split(n)),q(),c)return j()}else $(k.split(n));if(a&&a<=C)return v=v.slice(0,a),j(!0)}}return j()}for(var R=e.indexOf(n,h),S=e.indexOf(r,h),O=new RegExp(p(l)+p(t),"g"),I=e.indexOf(t,h);;)if(e[h]!==t)if(i&&0===k.length&&e.substring(h,h+_)===i){if(-1===S)return j();h=S+m,S=e.indexOf(r,h),R=e.indexOf(n,h)}else{if(-1!==R&&(R<S||-1===S)){if(!(R<I)){k.push(e.substring(h,R)),h=R+g,R=e.indexOf(n,h);continue}var T=z(R,I,S);if(T&&void 0!==T.nextDelim){R=T.nextDelim,I=T.quoteSearch,k.push(e.substring(h,R)),h=R+g,R=e.indexOf(n,h);continue}}if(-1===S)break;if(k.push(e.substring(h,S)),F(S+m),y&&(q(),c))return j();if(a&&v.length>=a)return j(!0)}else for(I=h,h++;;){if(-1===(I=e.indexOf(t,I+1)))return f||w.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:v.length,index:h}),M();if(I===d-1)return M(e.substring(h,I).replace(O,t));if(t!==l||e[I+1]!==l){if(t===l||0===I||e[I-1]!==l){-1!==R&&R<I+1&&(R=e.indexOf(n,I+1)),-1!==S&&S<I+1&&(S=e.indexOf(r,I+1));var A=L(-1===S?R:Math.min(R,S));if(e[I+1+A]===n){k.push(e.substring(h,I).replace(O,t)),e[h=I+1+A+g]!==t&&(I=e.indexOf(t,h)),R=e.indexOf(n,h),S=e.indexOf(r,h);break}var D=L(S);if(e.substring(I+1+D,I+1+D+m)===r){if(k.push(e.substring(h,I).replace(O,t)),F(I+1+D+m),R=e.indexOf(n,h),I=e.indexOf(t,h),y&&(q(),c))return j();if(a&&v.length>=a)return j(!0);break}w.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:v.length,index:h}),I++}}else I++}return M();function $(e){v.push(e),x=h}function L(t){var n=0;if(-1!==t){var r=e.substring(I+1,t);r&&""===r.trim()&&(n=r.length)}return n}function M(t){return f||(void 0===t&&(t=e.substring(h)),k.push(t),h=d,$(k),y&&q()),j()}function F(t){h=t,$(k),k=[],S=e.indexOf(r,h)}function j(e){return{data:v,errors:w,meta:{delimiter:n,linebreak:r,aborted:c,truncated:!!e,cursor:x+(o||0)}}}function q(){s(j()),v=[],w=[]}function z(r,i,s){var o={nextDelim:void 0,quoteSearch:void 0},a=e.indexOf(t,i+1);if(i<r&&r<a&&(a<s||-1===s)){var u=e.indexOf(n,a);if(-1===u)return o;a<u&&(a=e.indexOf(t,a+1)),o=z(u,a,s)}else o={nextDelim:r,quoteSearch:i};return o}},this.abort=function(){c=!0},this.getCharIndex=function(){return h}}function m(e){var t=e.data,n=i[t.workerId],r=!1;if(t.error)n.userError(t.error,t.file);else if(t.results&&t.results.data){var s={abort:function(){r=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(b(n.userStep)){for(var o=0;o<t.results.data.length&&(n.userStep({data:t.results.data[o],errors:t.results.errors,meta:t.results.meta},s),!r);o++);delete t.results}else b(n.userChunk)&&(n.userChunk(t.results,s,t.file),delete t.results)}t.finished&&!r&&_(t.workerId,t.results)}function _(e,t){var n=i[e];b(n.userComplete)&&n.userComplete(t),n.terminate(),delete i[e]}function y(){throw new Error("Not implemented.")}function v(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var n in e)t[n]=v(e[n]);return t}function w(e,t){return function(){e.apply(t,arguments)}}function b(e){return"function"==typeof e}return r&&(t.onmessage=function(e){var n=e.data;if(void 0===o.WORKER_ID&&n&&(o.WORKER_ID=n.workerId),"string"==typeof n.input)t.postMessage({workerId:o.WORKER_ID,results:o.parse(n.input,n.config),finished:!0});else if(t.File&&n.input instanceof File||n.input instanceof Object){var r=o.parse(n.input,n.config);r&&t.postMessage({workerId:o.WORKER_ID,results:r,finished:!0})}}),(l.prototype=Object.create(u.prototype)).constructor=l,(h.prototype=Object.create(u.prototype)).constructor=h,(c.prototype=Object.create(c.prototype)).constructor=c,(f.prototype=Object.create(u.prototype)).constructor=f,o}()}(H={exports:{}},H.exports),H.exports);function J(e,t,n){const r=e.slice();return r[9]=t[n],r}function Z(e){let t,n,i,s,o;function l(...t){return e[7](e[9],...t)}return{c(){t=c("circle"),g(t,"cx",n=e[4](e[9].sepal_length,4.3,7.9,20,380)),g(t,"cy",i=e[4](e[9].sepal_width,2,4.4,20,380)),g(t,"r","6"),g(t,"class","svelte-1po3p6w")},m(n,r){a(n,t,r),s||(o=[p(t,"mouseover",l),p(t,"mouseout",e[8])],s=!0)},p(r,s){e=r,1&s&&n!==(n=e[4](e[9].sepal_length,4.3,7.9,20,380))&&g(t,"cx",n),1&s&&i!==(i=e[4](e[9].sepal_width,2,4.4,20,380))&&g(t,"cy",i)},d(e){e&&u(t),s=!1,r(o)}}}function Y(e){let t,n,r,i,s,l;return{c(){t=c("svg"),n=c("line"),r=c("line"),i=c("path"),l=c("circle"),g(n,"class","axis svelte-1po3p6w"),g(n,"x1","0"),g(n,"x2","50"),g(n,"y1","25"),g(n,"y2","25"),g(r,"class","axis svelte-1po3p6w"),g(r,"x1","25"),g(r,"x2","25"),g(r,"y1","0"),g(r,"y2","50"),g(i,"d",s=e[6](e[1])),g(l,"cx","25"),g(l,"cy","25"),g(l,"r","2"),y(l,"fill","white"),y(l,"fill-opacity","1"),g(l,"class","svelte-1po3p6w"),g(t,"width","50"),g(t,"height","50"),g(t,"id","tooltip"),y(t,"left",e[2]+10+"px"),y(t,"top",e[3]-10+"px"),g(t,"class","svelte-1po3p6w")},m(e,s){a(e,t,s),o(t,n),o(t,r),o(t,i),o(t,l)},p(e,n){2&n&&s!==(s=e[6](e[1]))&&g(i,"d",s),4&n&&y(t,"left",e[2]+10+"px"),8&n&&y(t,"top",e[3]-10+"px")},d(e){e&&u(t)}}}function G(t){let n,r,i,s,o,p=t[0],m=[];for(let e=0;e<p.length;e+=1)m[e]=Z(J(t,p,e));let _=null!=t[1]&&Y(t);return{c(){n=c("svg");for(let e=0;e<m.length;e+=1)m[e].c();r=d(),i=h("br"),s=d(),_&&_.c(),o=f(""),g(n,"width","400"),g(n,"height","400"),g(n,"class","svelte-1po3p6w")},m(e,t){a(e,n,t);for(let e=0;e<m.length;e+=1)m[e].m(n,null);a(e,r,t),a(e,i,t),a(e,s,t),_&&_.m(e,t),a(e,o,t)},p(e,[t]){if(51&t){let r;for(p=e[0],r=0;r<p.length;r+=1){const i=J(e,p,r);m[r]?m[r].p(i,t):(m[r]=Z(i),m[r].c(),m[r].m(n,null))}for(;r<m.length;r+=1)m[r].d(1);m.length=p.length}null!=e[1]?_?_.p(e,t):(_=Y(e),_.c(),_.m(o.parentNode,o)):_&&(_.d(1),_=null)},i:e,o:e,d(e){e&&u(n),l(m,e),e&&u(r),e&&u(i),e&&u(s),_&&_.d(e),e&&u(o)}}}function X(e,t,n){let r,i,s,o=[];Q.parse("https://vda-lab.github.io/assets/iris.csv",{header:!0,download:!0,complete(e){n(0,o=e.data)}});const a=function(e){n(2,i=e.clientX),n(3,s=e.clientY)};return[o,r,i,s,function(e,t,n,r,i){return(i-r)*(e-t)/(n-t)+r},a,function(e){return"M 25 "+(25-3*+e.sepal_length)+" L "+(25+3*+e.petal_length)+" 25 L 25 "+(25+3*+e.sepal_width)+" L "+(25-3*+e.petal_width)+" 25 Z"},(e,t)=>{n(1,r=e),a(t)},()=>{n(1,r=void 0)}]}new class extends F{constructor(e){super(),M(this,e,U,z,s,{})}}({target:document.querySelector("#svelte-airports")}),new class extends F{constructor(e){super(),M(this,e,P,N,s,{})}}({target:document.querySelector("#svelte-animation1")}),new class extends F{constructor(e){super(),M(this,e,W,B,s,{})}}({target:document.querySelector("#svelte-animation2")}),new class extends F{constructor(e){super(),M(this,e,X,G,s,{})}}({target:document.querySelector("#svelte-iris")})}();
//# sourceMappingURL=svelte-bundle.js.map
