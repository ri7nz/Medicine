(self.webpackJsonp=self.webpackJsonp||[]).push([[1],{14:function(e,t,n){e.exports=n(23)},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(4),a=(n(19),n(21),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function c(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var l,s=n(7),u=n(2),f=n(3),d=n.n(f),g=(n(10),n(11)),v=n(5),m=n(6),w=n(12),b=n(1),h=function(){function e(t){Object(v.a)(this,e),Object.defineProperty(this,p,{writable:!0,value:void 0}),Object(b.a)(this,p)[p]=t}return Object(m.a)(e,[{key:"save",value:function(e){this.storage.setItem(Object(b.a)(this,p)[p],e)}},{key:"remove",value:function(){this.storage.removeItem()}},{key:"get",value:function(){return this.storage.getItem()}},{key:"storage",get:function(){var e=this,t=Object(g.a)({},window.localStorage);return Object.assign(t,{setItem:function(e,t){return window.localStorage.setItem(e,JSON.stringify(t))},removeItem:function(){return window.localStorage.removeItem(Object(b.a)(e,p)[p])},getItem:function(){return window.localStorage.getItem(Object(b.a)(e,p)[p])?JSON.parse(window.localStorage.getItem(Object(b.a)(e,p)[p])):null}}),t}}]),e}(),p=Object(w.a)("key"),k=new h("app_state");l=Object(u.a)(new d.a),k.get()&&l.setState(k.get(),!0),l.subscribe(function(e){k.save(e)});var j=l,O=Object(o.lazy)(function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,329))}),y=Object(o.lazy)(function(){return Promise.all([n.e(0),n.e(4),n.e(3)]).then(n.bind(null,331))});[{id:"app",element:r.a.createElement(s.Provider,{store:j},r.a.createElement(o.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(y,null)))},{id:"footer",element:r.a.createElement(o.Suspense,{fallback:r.a.createElement("div",null,"")},r.a.createElement(O,null))}].forEach(function(e){var t=document.createElement("div");t.setAttribute("id",e.id),document.body.appendChild(t),Object(i.render)(e.element,document.getElementById(e.id))}),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");a?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):c(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):c(e)})}}()},3:function(e,t,n){e.exports=function(){return new Worker(n.p+"c2de9823b3621abe9fbb.worker.js")}}},[[14,6,5]]]);
//# sourceMappingURL=main.a3a1af3e.chunk.js.map