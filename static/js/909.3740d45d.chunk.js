!function(){var e={7313:function(e){function t(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=function(){return[]},t.resolve=t,t.id=7313,e.exports=t},3909:function(e,t,r){"use strict";var a={},n=!1;var o=function(){var e=Array.prototype.slice.call(arguments).join(" ");console.error(e)};self.alert=function(){var e=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:e,threadId:a._pthread_self()})},a.instantiateWasm=function(e,t){var r=new WebAssembly.Instance(a.wasmModule,e);return t(r),a.wasmModule=null,r.exports},self.onmessage=function(e){try{if("load"===e.data.cmd)a.wasmModule=e.data.wasmModule,a.wasmMemory=e.data.wasmMemory,a.buffer=a.wasmMemory.buffer,a.ENVIRONMENT_IS_PTHREAD=!0,(e.data.urlOrBlob?r(7313)(e.data.urlOrBlob):r.e(308).then(r.bind(r,8308))).then((function(e){return e.default(a)})).then((function(e){a=e}));else if("run"===e.data.cmd){a.__performance_now_clock_drift=performance.now()-e.data.time,a.__emscripten_thread_init(e.data.threadInfoStruct,0,0,1),a.establishStackSpace(),a.PThread.receiveObjectTransfer(e.data),a.PThread.threadInit(),n||(a.___embind_register_native_and_builtin_types(),n=!0);try{var t=a.invokeEntryPoint(e.data.start_routine,e.data.arg);a.keepRuntimeAlive()?a.PThread.setExitStatus(t):a.__emscripten_thread_exit(t)}catch(i){if("unwind"!=i){if(!(i instanceof a.ExitStatus))throw i;a.keepRuntimeAlive()||a.__emscripten_thread_exit(i.status)}}}else"cancel"===e.data.cmd?a._pthread_self()&&a.__emscripten_thread_exit(-1):"setimmediate"===e.data.target||("processProxyingQueue"===e.data.cmd?(a._pthread_self()&&a._emscripten_proxy_execute_queue(e.data.queue),Atomics.sub(HEAP32,e.data.queue>>2,1)):(o("worker.js received unknown command "+e.data.cmd),o(e.data)))}catch(i){throw o("worker.js onmessage() captured an uncaught exception: "+i),i&&i.stack&&o(i.stack),a.__emscripten_thread_crashed&&a.__emscripten_thread_crashed(),i}}}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,r),o.exports}r.m=e,r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,a){return r.f[a](e,t),t}),[]))},r.u=function(e){return"static/js/"+e+"."+{308:"50d3045c",909:"3740d45d"}[e]+".chunk.js"},r.miniCssF=function(e){},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",function(){r.b=self.location+"/../../../";var e={909:1};r.f.i=function(t,a){e[t]||importScripts(r.p+r.u(t))};var t=self.webpackChunkkana=self.webpackChunkkana||[],a=t.push.bind(t);t.push=function(t){var n=t[0],o=t[1],i=t[2];for(var s in o)r.o(o,s)&&(r.m[s]=o[s]);for(i&&i(r);n.length;)e[n.pop()]=1;a(t)}}();r(3909)}();
//# sourceMappingURL=909.3740d45d.chunk.js.map