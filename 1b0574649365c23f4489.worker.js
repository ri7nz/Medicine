!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=2)}([function(t,e,n){var r,o=(r=n(1))&&"object"==typeof r&&"default"in r?r.default:r;function i(t,e){if(Array.isArray(t)){t=t.slice(0,e.length);for(var n=0;n<e.length;n++)void 0!==e[n]&&(t[n]=u(e[n],t[n]))}else for(var r in t=function(t,e){for(var n in e)t[n]=e[n];return t}({},t),e)e.hasOwnProperty(r)&&(void 0===e[r]?delete t[r]:t[r]=u(e[r],t[r]));return t}function u(t,e){return null!=e&&null!=t&&"object"==typeof e&&"object"==typeof t?i(e,t):t}function a(t,e){var n,r;if(Array.isArray(t))for(n=new Array(t.length),r=0;r<t.length;r++)t[r]!==e[r]&&(n[r]=f(t[r],e[r]));else for(r in n={},t)t.hasOwnProperty(r)&&t[r]!==e[r]&&(n[r]=f(t[r],e[r]));return n}function f(t,e){return"object"==typeof t&&"object"==typeof e?a(t,e):t}t.exports=function(t){var e=o(t),n=e.actions={},r={},u=0,f=[],s=[];for(var c in t)r[c]=t[c];function l(t){1===s.push(t)&&setTimeout(p)}function p(){"function"==typeof postMessage&&postMessage(s),s.length=0}function d(t){if(u>0)return f.push(t);var r=t.type,o=t.id,a=t.overwrite,s=t.update,c=t.action;if("@@STATE"===r)!0===t.partial&&(s=i(e.getState(),s),a=!0),e.setState(s,!0===a,c);else if("@@ACTION"===r){var p=n[c.type];c.params?p.apply(n,c.params):p.call(n,c.payload),o&&l({type:"@@ACTIONCOMPLETE",id:o})}}return"function"==typeof addEventListener&&addEventListener("message",function(t){var e=t.data;if("object"!=typeof e);else if("pop"in e)if(1===e.length)d(e[0]);else for(var n=0;n<e.length;n++)d(e[n]);else d(e)}),e.subscribe(function(t,e){var n=a(t,r);r=t,l({type:"@@STATE",update:n,action:e&&e.name,partial:!0})}),e.registerActions=function(t){for(var r in"function"==typeof t&&(t=t(e)),t)n[r]=e.action(t[r])},e.freeze=function(){u++},e.unfreeze=function(){if(!--u){var t=f;f=[];for(var e=0;e<t.length;e++)d(t[e])}},l({type:"@@STATE",initial:!0,update:e.getState()}),e}},function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}n.r(e),e.default=function(t){var e=[];function n(t){for(var n=[],r=0;r<e.length;r++)e[r]===t?t=null:n.push(e[r]);e=n}function o(n,o,i){t=o?n:r(r({},t),n);for(var u=e,a=0;a<u.length;a++)u[a](t,i)}return t=t||{},{action:function(e){function n(t){o(t,!1,e)}return function(){for(var r=arguments,o=[t],i=0;i<arguments.length;i++)o.push(r[i]);var u=e.apply(this,o);if(null!=u)return u.then?u.then(n):n(u)}},setState:o,subscribe:function(t){return e.push(t),function(){n(t)}},unsubscribe:n,getState:function(){return t}}}},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i={loading:!0,drawer:!1,menuList:[],todos:[]};function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=0;function f(t){return"__private_"+a+++"_"+t}function s(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}function c(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}var l=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Object.defineProperty(this,p,{writable:!0,value:void 0}),Object.defineProperty(this,d,{writable:!0,value:void 0}),Object.defineProperty(this,y,{writable:!0,value:!1}),s(this,p)[p]=e,s(this,d)[d]=n}var e,n,r;return e=t,(n=[{key:"login",value:function(){"rin"===s(this,p)[p]&&"rin"===s(this,d)[d]&&(s(this,y)[y]=!0,this.isLogin=this.getIsLogin(),this.username=this.getUsername(),this.loggedIn=new Date)}},{key:"getIsLogin",value:function(){return s(this,y)[y]}},{key:"getUsername",value:function(){return s(this,p)[p]}}])&&u(e.prototype,n),r&&u(e,r),t}(),p=f("username"),d=f("password"),y=f("isLogin"),v={setDrawer:function(t){return{drawer:!t.drawer}},setMenu:function(t,e){var n,r,o=t.menuList;return{menuList:Array.isArray(o)?(n=o.concat(e),r="path",n.filter(function(t,e,n){return n.map(function(t){return t[r]}).indexOf(t[r])===e})):e}},createTodo:function(t,e){var n=t.todos;return e===Object(e)&&Object.assign(e,{id:c()}),{todos:n=Array.isArray(n)?n.concat(e):new Array(e)}},deleteTodo:function(t,e){var n=t.todos;if(Array.isArray(n))return{todos:n.filter(function(t,n){return t.id!==e})}},login:function(t,e){var n=e.username,r=e.password,o=new l(n,r);return o.login(),{user:o}}},h=o()(i);h.registerActions(v);e.default=h}]);
//# sourceMappingURL=1b0574649365c23f4489.worker.js.map