webpackJsonp([1],{

/***/ 101:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * vis.js
 * https://github.com/almende/vis
 *
 * A dynamic, browser-based visualization library.
 *
 * @version 4.19.1
 * @date    2017-03-19
 *
 * @license
 * Copyright (C) 2011-2017 Almende B.V, http://almende.com
 *
 * Vis.js is dual licensed under both
 *
 * * The Apache 2.0 License
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * and
 *
 * * The MIT License
 *   http://opensource.org/licenses/MIT
 *
 * Vis.js may be distributed under either license.
 */
!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vis=e():t.vis=e()}(this,function(){return function(t){function e(o){if(i[o])return i[o].exports;var n=i[o]={exports:{},id:o,loaded:!1};return t[o].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){var o=i(1);o.extend(e,i(87)),o.extend(e,i(116)),o.extend(e,i(158))},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}var n=i(2),s=o(n),r=i(55),a=o(r),h=i(58),d=o(h),l=i(62),u=o(l),c=i(82),p=i(86);e.isNumber=function(t){return t instanceof Number||"number"==typeof t},e.recursiveDOMDelete=function(t){if(t)for(;t.hasChildNodes()===!0;)e.recursiveDOMDelete(t.firstChild),t.removeChild(t.firstChild)},e.giveRange=function(t,e,i,o){if(e==t)return.5;var n=1/(e-t);return Math.max(0,(o-t)*n)},e.isString=function(t){return t instanceof String||"string"==typeof t},e.isDate=function(t){if(t instanceof Date)return!0;if(e.isString(t)){if(f.exec(t))return!0;if(!isNaN(Date.parse(t)))return!0}return!1},e.randomUUID=function(){return p.v4()},e.assignAllKeys=function(t,e){for(var i in t)t.hasOwnProperty(i)&&"object"!==(0,u.default)(t[i])&&(t[i]=e)},e.fillIfDefined=function(t,i){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];for(var n in t)void 0!==i[n]&&("object"!==(0,u.default)(i[n])?void 0!==i[n]&&null!==i[n]||void 0===t[n]||o!==!0?t[n]=i[n]:delete t[n]:"object"===(0,u.default)(t[n])&&e.fillIfDefined(t[n],i[n],o))},e.protoExtend=function(t,e){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var n in o)t[n]=o[n]}return t},e.extend=function(t,e){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var n in o)o.hasOwnProperty(n)&&(t[n]=o[n])}return t},e.selectiveExtend=function(t,e,i){if(!Array.isArray(t))throw new Error("Array with property names expected as first argument");for(var o=2;o<arguments.length;o++)for(var n=arguments[o],s=0;s<t.length;s++){var r=t[s];n.hasOwnProperty(r)&&(e[r]=n[r])}return e},e.selectiveDeepExtend=function(t,i,o){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(Array.isArray(o))throw new TypeError("Arrays are not supported by deepExtend");for(var s=2;s<arguments.length;s++)for(var r=arguments[s],a=0;a<t.length;a++){var h=t[a];if(r.hasOwnProperty(h))if(o[h]&&o[h].constructor===Object)void 0===i[h]&&(i[h]={}),i[h].constructor===Object?e.deepExtend(i[h],o[h],!1,n):null===o[h]&&void 0!==i[h]&&n===!0?delete i[h]:i[h]=o[h];else{if(Array.isArray(o[h]))throw new TypeError("Arrays are not supported by deepExtend");null===o[h]&&void 0!==i[h]&&n===!0?delete i[h]:i[h]=o[h]}}return i},e.selectiveNotDeepExtend=function(t,i,o){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(Array.isArray(o))throw new TypeError("Arrays are not supported by deepExtend");for(var s in o)if(o.hasOwnProperty(s)&&t.indexOf(s)==-1)if(o[s]&&o[s].constructor===Object)void 0===i[s]&&(i[s]={}),i[s].constructor===Object?e.deepExtend(i[s],o[s]):null===o[s]&&void 0!==i[s]&&n===!0?delete i[s]:i[s]=o[s];else if(Array.isArray(o[s])){i[s]=[];for(var r=0;r<o[s].length;r++)i[s].push(o[s][r])}else null===o[s]&&void 0!==i[s]&&n===!0?delete i[s]:i[s]=o[s];return i},e.deepExtend=function(t,i,o,n){for(var s in i)if(i.hasOwnProperty(s)||o===!0)if(i[s]&&i[s].constructor===Object)void 0===t[s]&&(t[s]={}),t[s].constructor===Object?e.deepExtend(t[s],i[s],o):null===i[s]&&void 0!==t[s]&&n===!0?delete t[s]:t[s]=i[s];else if(Array.isArray(i[s])){t[s]=[];for(var r=0;r<i[s].length;r++)t[s].push(i[s][r])}else null===i[s]&&void 0!==t[s]&&n===!0?delete t[s]:t[s]=i[s];return t},e.equalArray=function(t,e){if(t.length!=e.length)return!1;for(var i=0,o=t.length;i<o;i++)if(t[i]!=e[i])return!1;return!0},e.convert=function(t,i){var o;if(void 0!==t){if(null===t)return null;if(!i)return t;if("string"!=typeof i&&!(i instanceof String))throw new Error("Type must be a string");switch(i){case"boolean":case"Boolean":return Boolean(t);case"number":case"Number":return e.isString(t)&&!isNaN(Date.parse(t))?c(t).valueOf():Number(t.valueOf());case"string":case"String":return String(t);case"Date":if(e.isNumber(t))return new Date(t);if(t instanceof Date)return new Date(t.valueOf());if(c.isMoment(t))return new Date(t.valueOf());if(e.isString(t))return o=f.exec(t),o?new Date(Number(o[1])):c(new Date(t)).toDate();throw new Error("Cannot convert object of type "+e.getType(t)+" to type Date");case"Moment":if(e.isNumber(t))return c(t);if(t instanceof Date)return c(t.valueOf());if(c.isMoment(t))return c(t);if(e.isString(t))return o=f.exec(t),c(o?Number(o[1]):t);throw new Error("Cannot convert object of type "+e.getType(t)+" to type Date");case"ISODate":if(e.isNumber(t))return new Date(t);if(t instanceof Date)return t.toISOString();if(c.isMoment(t))return t.toDate().toISOString();if(e.isString(t))return o=f.exec(t),o?new Date(Number(o[1])).toISOString():c(t).format();throw new Error("Cannot convert object of type "+e.getType(t)+" to type ISODate");case"ASPDate":if(e.isNumber(t))return"/Date("+t+")/";if(t instanceof Date)return"/Date("+t.valueOf()+")/";if(e.isString(t)){o=f.exec(t);return"/Date("+(o?new Date(Number(o[1])).valueOf():new Date(t).valueOf())+")/"}throw new Error("Cannot convert object of type "+e.getType(t)+" to type ASPDate");default:throw new Error('Unknown type "'+i+'"')}}};var f=/^\/?Date\((\-?\d+)/i;e.getType=function(t){var e=void 0===t?"undefined":(0,u.default)(t);return"object"==e?null===t?"null":t instanceof Boolean?"Boolean":t instanceof Number?"Number":t instanceof String?"String":Array.isArray(t)?"Array":t instanceof Date?"Date":"Object":"number"==e?"Number":"boolean"==e?"Boolean":"string"==e?"String":void 0===e?"undefined":e},e.copyAndExtendArray=function(t,e){for(var i=[],o=0;o<t.length;o++)i.push(t[o]);return i.push(e),i},e.copyArray=function(t){for(var e=[],i=0;i<t.length;i++)e.push(t[i]);return e},e.getAbsoluteLeft=function(t){return t.getBoundingClientRect().left},e.getAbsoluteRight=function(t){return t.getBoundingClientRect().right},e.getAbsoluteTop=function(t){return t.getBoundingClientRect().top},e.addClassName=function(t,e){var i=t.className.split(" ");i.indexOf(e)==-1&&(i.push(e),t.className=i.join(" "))},e.removeClassName=function(t,e){var i=t.className.split(" "),o=i.indexOf(e);o!=-1&&(i.splice(o,1),t.className=i.join(" "))},e.forEach=function(t,e){var i,o;if(Array.isArray(t))for(i=0,o=t.length;i<o;i++)e(t[i],i,t);else for(i in t)t.hasOwnProperty(i)&&e(t[i],i,t)},e.toArray=function(t){var e=[];for(var i in t)t.hasOwnProperty(i)&&e.push(t[i]);return e},e.updateProperty=function(t,e,i){return t[e]!==i&&(t[e]=i,!0)},e.throttle=function(t){var e=!1;return function(){e||(e=!0,requestAnimationFrame(function(){e=!1,t()}))}},e.addEventListener=function(t,e,i,o){t.addEventListener?(void 0===o&&(o=!1),"mousewheel"===e&&navigator.userAgent.indexOf("Firefox")>=0&&(e="DOMMouseScroll"),t.addEventListener(e,i,o)):t.attachEvent("on"+e,i)},e.removeEventListener=function(t,e,i,o){t.removeEventListener?(void 0===o&&(o=!1),"mousewheel"===e&&navigator.userAgent.indexOf("Firefox")>=0&&(e="DOMMouseScroll"),t.removeEventListener(e,i,o)):t.detachEvent("on"+e,i)},e.preventDefault=function(t){t||(t=window.event),t.preventDefault?t.preventDefault():t.returnValue=!1},e.getTarget=function(t){t||(t=window.event);var e;return t.target?e=t.target:t.srcElement&&(e=t.srcElement),void 0!=e.nodeType&&3==e.nodeType&&(e=e.parentNode),e},e.hasParent=function(t,e){for(var i=t;i;){if(i===e)return!0;i=i.parentNode}return!1},e.option={},e.option.asBoolean=function(t,e){return"function"==typeof t&&(t=t()),null!=t?0!=t:e||null},e.option.asNumber=function(t,e){return"function"==typeof t&&(t=t()),null!=t?Number(t)||e||null:e||null},e.option.asString=function(t,e){return"function"==typeof t&&(t=t()),null!=t?String(t):e||null},e.option.asSize=function(t,i){return"function"==typeof t&&(t=t()),e.isString(t)?t:e.isNumber(t)?t+"px":i||null},e.option.asElement=function(t,e){return"function"==typeof t&&(t=t()),t||e||null},e.hexToRGB=function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,i,o){return e+e+i+i+o+o});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null},e.overrideOpacity=function(t,i){if(t.indexOf("rgba")!=-1)return t;if(t.indexOf("rgb")!=-1){var o=t.substr(t.indexOf("(")+1).replace(")","").split(",");return"rgba("+o[0]+","+o[1]+","+o[2]+","+i+")"}var o=e.hexToRGB(t);return null==o?t:"rgba("+o.r+","+o.g+","+o.b+","+i+")"},e.RGBToHex=function(t,e,i){return"#"+((1<<24)+(t<<16)+(e<<8)+i).toString(16).slice(1)},e.parseColor=function(t){var i;if(e.isString(t)===!0){if(e.isValidRGB(t)===!0){var o=t.substr(4).substr(0,t.length-5).split(",").map(function(t){return parseInt(t)});t=e.RGBToHex(o[0],o[1],o[2])}if(e.isValidHex(t)===!0){var n=e.hexToHSV(t),s={h:n.h,s:.8*n.s,v:Math.min(1,1.02*n.v)},r={h:n.h,s:Math.min(1,1.25*n.s),v:.8*n.v},a=e.HSVToHex(r.h,r.s,r.v),h=e.HSVToHex(s.h,s.s,s.v);i={background:t,border:a,highlight:{background:h,border:a},hover:{background:h,border:a}}}else i={background:t,border:t,highlight:{background:t,border:t},hover:{background:t,border:t}}}else i={},i.background=t.background||void 0,i.border=t.border||void 0,e.isString(t.highlight)?i.highlight={border:t.highlight,background:t.highlight}:(i.highlight={},i.highlight.background=t.highlight&&t.highlight.background||void 0,i.highlight.border=t.highlight&&t.highlight.border||void 0),e.isString(t.hover)?i.hover={border:t.hover,background:t.hover}:(i.hover={},i.hover.background=t.hover&&t.hover.background||void 0,i.hover.border=t.hover&&t.hover.border||void 0);return i},e.RGBToHSV=function(t,e,i){t/=255,e/=255,i/=255;var o=Math.min(t,Math.min(e,i)),n=Math.max(t,Math.max(e,i));if(o==n)return{h:0,s:0,v:o};var s=t==o?e-i:i==o?t-e:i-t;return{h:60*((t==o?3:i==o?1:5)-s/(n-o))/360,s:(n-o)/n,v:n}};var m={split:function(t){var e={};return t.split(";").forEach(function(t){if(""!=t.trim()){var i=t.split(":"),o=i[0].trim(),n=i[1].trim();e[o]=n}}),e},join:function(t){return(0,d.default)(t).map(function(e){return e+": "+t[e]}).join("; ")}};e.addCssText=function(t,i){var o=m.split(t.style.cssText),n=m.split(i),s=e.extend(o,n);t.style.cssText=m.join(s)},e.removeCssText=function(t,e){var i=m.split(t.style.cssText),o=m.split(e);for(var n in o)o.hasOwnProperty(n)&&delete i[n];t.style.cssText=m.join(i)},e.HSVToRGB=function(t,e,i){var o,n,s,r=Math.floor(6*t),a=6*t-r,h=i*(1-e),d=i*(1-a*e),l=i*(1-(1-a)*e);switch(r%6){case 0:o=i,n=l,s=h;break;case 1:o=d,n=i,s=h;break;case 2:o=h,n=i,s=l;break;case 3:o=h,n=d,s=i;break;case 4:o=l,n=h,s=i;break;case 5:o=i,n=h,s=d}return{r:Math.floor(255*o),g:Math.floor(255*n),b:Math.floor(255*s)}},e.HSVToHex=function(t,i,o){var n=e.HSVToRGB(t,i,o);return e.RGBToHex(n.r,n.g,n.b)},e.hexToHSV=function(t){var i=e.hexToRGB(t);return e.RGBToHSV(i.r,i.g,i.b)},e.isValidHex=function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},e.isValidRGB=function(t){return t=t.replace(" ",""),/rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/i.test(t)},e.isValidRGBA=function(t){return t=t.replace(" ",""),/rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(.{1,3})\)/i.test(t)},e.selectiveBridgeObject=function(t,i){if("object"==(void 0===i?"undefined":(0,u.default)(i))){for(var o=(0,a.default)(i),n=0;n<t.length;n++)i.hasOwnProperty(t[n])&&"object"==(0,u.default)(i[t[n]])&&(o[t[n]]=e.bridgeObject(i[t[n]]));return o}return null},e.bridgeObject=function(t){if("object"==(void 0===t?"undefined":(0,u.default)(t))){var i=(0,a.default)(t);for(var o in t)t.hasOwnProperty(o)&&"object"==(0,u.default)(t[o])&&(i[o]=e.bridgeObject(t[o]));return i}return null},e.insertSort=function(t,e){for(var i=0;i<t.length;i++){for(var o=t[i],n=i;n>0&&e(o,t[n-1])<0;n--)t[n]=t[n-1];t[n]=o}return t},e.mergeOptions=function(t,e,i){var o=(arguments.length>3&&void 0!==arguments[3]&&arguments[3],arguments.length>4&&void 0!==arguments[4]?arguments[4]:{});if(null===e[i])t[i]=(0,a.default)(o[i]);else if(void 0!==e[i])if("boolean"==typeof e[i])t[i].enabled=e[i];else{void 0===e[i].enabled&&(t[i].enabled=!0);for(var n in e[i])e[i].hasOwnProperty(n)&&(t[i][n]=e[i][n])}},e.binarySearchCustom=function(t,e,i,o){for(var n=0,s=0,r=t.length-1;s<=r&&n<1e4;){var a=Math.floor((s+r)/2),h=t[a],d=void 0===o?h[i]:h[i][o],l=e(d);if(0==l)return a;l==-1?s=a+1:r=a-1,n++}return-1},e.binarySearchValue=function(t,e,i,o,n){for(var s,r,a,h,d=0,l=0,u=t.length-1,n=void 0!=n?n:function(t,e){return t==e?0:t<e?-1:1};l<=u&&d<1e4;){if(h=Math.floor(.5*(u+l)),s=t[Math.max(0,h-1)][i],r=t[h][i],a=t[Math.min(t.length-1,h+1)][i],0==n(r,e))return h;if(n(s,e)<0&&n(r,e)>0)return"before"==o?Math.max(0,h-1):h;if(n(r,e)<0&&n(a,e)>0)return"before"==o?h:Math.min(t.length-1,h+1);n(r,e)<0?l=h+1:u=h-1,d++}return-1},e.easingFunctions={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}},e.getScrollBarWidth=function(){var t=document.createElement("p");t.style.width="100%",t.style.height="200px";var e=document.createElement("div");e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.visibility="hidden",e.style.width="200px",e.style.height="150px",e.style.overflow="hidden",e.appendChild(t),document.body.appendChild(e);var i=t.offsetWidth;e.style.overflow="scroll";var o=t.offsetWidth;return i==o&&(o=e.clientWidth),document.body.removeChild(e),i-o},e.topMost=function(t,e){var i=void 0;Array.isArray(e)||(e=[e]);var o=!0,n=!1,r=void 0;try{for(var a,h=(0,s.default)(t);!(o=(a=h.next()).done);o=!0){var d=a.value;if(d){i=d[e[0]];for(var l=1;l<e.length;l++)i&&(i=i[e[l]]);if(void 0!==i)break}}}catch(t){n=!0,r=t}finally{try{!o&&h.return&&h.return()}finally{if(n)throw r}}return i}},function(t,e,i){t.exports={default:i(3),__esModule:!0}},function(t,e,i){i(4),i(50),t.exports=i(52)},function(t,e,i){i(5);for(var o=i(16),n=i(20),s=i(8),r=i(47)("toStringTag"),a=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],h=0;h<5;h++){var d=a[h],l=o[d],u=l&&l.prototype;u&&!u[r]&&n(u,r,d),s[d]=s.Array}},function(t,e,i){var o=i(6),n=i(7),s=i(8),r=i(9);t.exports=i(13)(Array,"Array",function(t,e){this._t=r(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,i=this._i++;return!t||i>=t.length?(this._t=void 0,n(1)):"keys"==e?n(0,i):"values"==e?n(0,t[i]):n(0,[i,t[i]])},"values"),s.Arguments=s.Array,o("keys"),o("values"),o("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e){t.exports={}},function(t,e,i){var o=i(10),n=i(12);t.exports=function(t){return o(n(t))}},function(t,e,i){var o=i(11);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e){var i={}.toString;t.exports=function(t){return i.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,i){var o=i(14),n=i(15),s=i(30),r=i(20),a=i(31),h=i(8),d=i(32),l=i(46),u=i(48),c=i(47)("iterator"),p=!([].keys&&"next"in[].keys()),f=function(){return this};t.exports=function(t,e,i,m,v,g,y){d(i,e,m);var b,_,w,x=function(t){if(!p&&t in M)return M[t];switch(t){case"keys":return function(){return new i(this,t)};case"values":return function(){return new i(this,t)}}return function(){return new i(this,t)}},k=e+" Iterator",O="values"==v,S=!1,M=t.prototype,D=M[c]||M["@@iterator"]||v&&M[v],C=D||x(v),T=v?O?x("entries"):C:void 0,E="Array"==e?M.entries||D:D;if(E&&(w=u(E.call(new t)))!==Object.prototype&&(l(w,k,!0),o||a(w,c)||r(w,c,f)),O&&D&&"values"!==D.name&&(S=!0,C=function(){return D.call(this)}),o&&!y||!p&&!S&&M[c]||r(M,c,C),h[e]=C,h[k]=f,v)if(b={values:O?C:x("values"),keys:g?C:x("keys"),entries:T},y)for(_ in b)_ in M||s(M,_,b[_]);else n(n.P+n.F*(p||S),e,b);return b}},function(t,e){t.exports=!0},function(t,e,i){var o=i(16),n=i(17),s=i(18),r=i(20),a=function(t,e,i){var h,d,l,u=t&a.F,c=t&a.G,p=t&a.S,f=t&a.P,m=t&a.B,v=t&a.W,g=c?n:n[e]||(n[e]={}),y=g.prototype,b=c?o:p?o[e]:(o[e]||{}).prototype;c&&(i=e);for(h in i)(d=!u&&b&&void 0!==b[h])&&h in g||(l=d?b[h]:i[h],g[h]=c&&"function"!=typeof b[h]?i[h]:m&&d?s(l,o):v&&b[h]==l?function(t){var e=function(e,i,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,i)}return new t(e,i,o)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):f&&"function"==typeof l?s(Function.call,l):l,f&&((g.virtual||(g.virtual={}))[h]=l,t&a.R&&y&&!y[h]&&r(y,h,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){var i=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=i)},function(t,e){var i=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=i)},function(t,e,i){var o=i(19);t.exports=function(t,e,i){if(o(t),void 0===e)return t;switch(i){case 1:return function(i){return t.call(e,i)};case 2:return function(i,o){return t.call(e,i,o)};case 3:return function(i,o,n){return t.call(e,i,o,n)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,i){var o=i(21),n=i(29);t.exports=i(25)?function(t,e,i){return o.f(t,e,n(1,i))}:function(t,e,i){return t[e]=i,t}},function(t,e,i){var o=i(22),n=i(24),s=i(28),r=Object.defineProperty;e.f=i(25)?Object.defineProperty:function(t,e,i){if(o(t),e=s(e,!0),o(i),n)try{return r(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(t[e]=i.value),t}},function(t,e,i){var o=i(23);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,i){t.exports=!i(25)&&!i(26)(function(){return 7!=Object.defineProperty(i(27)("div"),"a",{get:function(){return 7}}).a})},function(t,e,i){t.exports=!i(26)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,i){var o=i(23),n=i(16).document,s=o(n)&&o(n.createElement);t.exports=function(t){return s?n.createElement(t):{}}},function(t,e,i){var o=i(23);t.exports=function(t,e){if(!o(t))return t;var i,n;if(e&&"function"==typeof(i=t.toString)&&!o(n=i.call(t)))return n;if("function"==typeof(i=t.valueOf)&&!o(n=i.call(t)))return n;if(!e&&"function"==typeof(i=t.toString)&&!o(n=i.call(t)))return n;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,i){t.exports=i(20)},function(t,e){var i={}.hasOwnProperty;t.exports=function(t,e){return i.call(t,e)}},function(t,e,i){var o=i(33),n=i(29),s=i(46),r={};i(20)(r,i(47)("iterator"),function(){return this}),t.exports=function(t,e,i){t.prototype=o(r,{next:n(1,i)}),s(t,e+" Iterator")}},function(t,e,i){var o=i(22),n=i(34),s=i(44),r=i(41)("IE_PROTO"),a=function(){},h=function(){var t,e=i(27)("iframe"),o=s.length;for(e.style.display="none",i(45).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object</script>"),t.close(),h=t.F;o--;)delete h.prototype[s[o]];return h()};t.exports=Object.create||function(t,e){var i;return null!==t?(a.prototype=o(t),i=new a,a.prototype=null,i[r]=t):i=h(),void 0===e?i:n(i,e)}},function(t,e,i){var o=i(21),n=i(22),s=i(35);t.exports=i(25)?Object.defineProperties:function(t,e){n(t);for(var i,r=s(e),a=r.length,h=0;a>h;)o.f(t,i=r[h++],e[i]);return t}},function(t,e,i){var o=i(36),n=i(44);t.exports=Object.keys||function(t){return o(t,n)}},function(t,e,i){var o=i(31),n=i(9),s=i(37)(!1),r=i(41)("IE_PROTO");t.exports=function(t,e){var i,a=n(t),h=0,d=[];for(i in a)i!=r&&o(a,i)&&d.push(i);for(;e.length>h;)o(a,i=e[h++])&&(~s(d,i)||d.push(i));return d}},function(t,e,i){var o=i(9),n=i(38),s=i(40);t.exports=function(t){return function(e,i,r){var a,h=o(e),d=n(h.length),l=s(r,d);if(t&&i!=i){for(;d>l;)if((a=h[l++])!=a)return!0}else for(;d>l;l++)if((t||l in h)&&h[l]===i)return t||l||0;return!t&&-1}}},function(t,e,i){var o=i(39),n=Math.min;t.exports=function(t){return t>0?n(o(t),9007199254740991):0}},function(t,e){var i=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:i)(t)}},function(t,e,i){var o=i(39),n=Math.max,s=Math.min;t.exports=function(t,e){return t=o(t),t<0?n(t+e,0):s(t,e)}},function(t,e,i){var o=i(42)("keys"),n=i(43);t.exports=function(t){return o[t]||(o[t]=n(t))}},function(t,e,i){var o=i(16),n=o["__core-js_shared__"]||(o["__core-js_shared__"]={});t.exports=function(t){return n[t]||(n[t]={})}},function(t,e){var i=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++i+o).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,i){t.exports=i(16).document&&document.documentElement},function(t,e,i){var o=i(21).f,n=i(31),s=i(47)("toStringTag");t.exports=function(t,e,i){t&&!n(t=i?t:t.prototype,s)&&o(t,s,{configurable:!0,value:e})}},function(t,e,i){var o=i(42)("wks"),n=i(43),s=i(16).Symbol,r="function"==typeof s;(t.exports=function(t){return o[t]||(o[t]=r&&s[t]||(r?s:n)("Symbol."+t))}).store=o},function(t,e,i){var o=i(31),n=i(49),s=i(41)("IE_PROTO"),r=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=n(t),o(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?r:null}},function(t,e,i){var o=i(12);t.exports=function(t){return Object(o(t))}},function(t,e,i){var o=i(51)(!0);i(13)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,i=this._i;return i>=e.length?{value:void 0,done:!0}:(t=o(e,i),this._i+=t.length,{value:t,done:!1})})},function(t,e,i){var o=i(39),n=i(12);t.exports=function(t){return function(e,i){var s,r,a=String(n(e)),h=o(i),d=a.length;return h<0||h>=d?t?"":void 0:(s=a.charCodeAt(h),s<55296||s>56319||h+1===d||(r=a.charCodeAt(h+1))<56320||r>57343?t?a.charAt(h):s:t?a.slice(h,h+2):r-56320+(s-55296<<10)+65536)}}},function(t,e,i){var o=i(22),n=i(53);t.exports=i(17).getIterator=function(t){var e=n(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return o(e.call(t))}},function(t,e,i){var o=i(54),n=i(47)("iterator"),s=i(8);t.exports=i(17).getIteratorMethod=function(t){if(void 0!=t)return t[n]||t["@@iterator"]||s[o(t)]}},function(t,e,i){var o=i(11),n=i(47)("toStringTag"),s="Arguments"==o(function(){return arguments}()),r=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,i,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=r(e=Object(t),n))?i:s?o(e):"Object"==(a=o(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,i){t.exports={default:i(56),__esModule:!0}},function(t,e,i){i(57);var o=i(17).Object;t.exports=function(t,e){return o.create(t,e)}},function(t,e,i){var o=i(15);o(o.S,"Object",{create:i(33)})},function(t,e,i){t.exports={default:i(59),__esModule:!0}},function(t,e,i){i(60),t.exports=i(17).Object.keys},function(t,e,i){var o=i(49),n=i(35);i(61)("keys",function(){return function(t){return n(o(t))}})},function(t,e,i){var o=i(15),n=i(17),s=i(26);t.exports=function(t,e){var i=(n.Object||{})[t]||Object[t],r={};r[t]=e(i),o(o.S+o.F*s(function(){i(1)}),"Object",r)}},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var n=i(63),s=o(n),r=i(66),a=o(r),h="function"==typeof a.default&&"symbol"==typeof s.default?function(t){return typeof t}:function(t){return t&&"function"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?"symbol":typeof t};e.default="function"==typeof a.default&&"symbol"===h(s.default)?function(t){return void 0===t?"undefined":h(t)}:function(t){return t&&"function"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?"symbol":void 0===t?"undefined":h(t)}},function(t,e,i){t.exports={default:i(64),__esModule:!0}},function(t,e,i){i(50),i(4),t.exports=i(65).f("iterator")},function(t,e,i){e.f=i(47)},function(t,e,i){t.exports={default:i(67),__esModule:!0}},function(t,e,i){i(68),i(79),i(80),i(81),t.exports=i(17).Symbol},function(t,e,i){var o=i(16),n=i(31),s=i(25),r=i(15),a=i(30),h=i(69).KEY,d=i(26),l=i(42),u=i(46),c=i(43),p=i(47),f=i(65),m=i(70),v=i(71),g=i(72),y=i(75),b=i(22),_=i(9),w=i(28),x=i(29),k=i(33),O=i(76),S=i(78),M=i(21),D=i(35),C=S.f,T=M.f,E=O.f,P=o.Symbol,I=o.JSON,N=I&&I.stringify,R=p("_hidden"),z=p("toPrimitive"),A={}.propertyIsEnumerable,L=l("symbol-registry"),F=l("symbols"),B=l("op-symbols"),j=Object.prototype,H="function"==typeof P,W=o.QObject,Y=!W||!W.prototype||!W.prototype.findChild,G=s&&d(function(){return 7!=k(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(t,e,i){var o=C(j,e);o&&delete j[e],T(t,e,i),o&&t!==j&&T(j,e,o)}:T,V=function(t){var e=F[t]=k(P.prototype);return e._k=t,e},U=H&&"symbol"==typeof P.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof P},q=function(t,e,i){return t===j&&q(B,e,i),b(t),e=w(e,!0),b(i),n(F,e)?(i.enumerable?(n(t,R)&&t[R][e]&&(t[R][e]=!1),i=k(i,{enumerable:x(0,!1)})):(n(t,R)||T(t,R,x(1,{})),t[R][e]=!0),G(t,e,i)):T(t,e,i)},X=function(t,e){b(t);for(var i,o=g(e=_(e)),n=0,s=o.length;s>n;)q(t,i=o[n++],e[i]);return t},Z=function(t,e){return void 0===e?k(t):X(k(t),e)},K=function(t){var e=A.call(this,t=w(t,!0));return!(this===j&&n(F,t)&&!n(B,t))&&(!(e||!n(this,t)||!n(F,t)||n(this,R)&&this[R][t])||e)},J=function(t,e){if(t=_(t),e=w(e,!0),t!==j||!n(F,e)||n(B,e)){var i=C(t,e);return!i||!n(F,e)||n(t,R)&&t[R][e]||(i.enumerable=!0),i}},Q=function(t){for(var e,i=E(_(t)),o=[],s=0;i.length>s;)n(F,e=i[s++])||e==R||e==h||o.push(e);return o},$=function(t){for(var e,i=t===j,o=E(i?B:_(t)),s=[],r=0;o.length>r;)!n(F,e=o[r++])||i&&!n(j,e)||s.push(F[e]);return s};H||(P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var t=c(arguments.length>0?arguments[0]:void 0),e=function(i){this===j&&e.call(B,i),n(this,R)&&n(this[R],t)&&(this[R][t]=!1),G(this,t,x(1,i))};return s&&Y&&G(j,t,{configurable:!0,set:e}),V(t)},a(P.prototype,"toString",function(){return this._k}),S.f=J,M.f=q,i(77).f=O.f=Q,i(74).f=K,i(73).f=$,s&&!i(14)&&a(j,"propertyIsEnumerable",K,!0),f.f=function(t){return V(p(t))}),r(r.G+r.W+r.F*!H,{Symbol:P});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)p(tt[et++]);for(var tt=D(p.store),et=0;tt.length>et;)m(tt[et++]);r(r.S+r.F*!H,"Symbol",{for:function(t){return n(L,t+="")?L[t]:L[t]=P(t)},keyFor:function(t){if(U(t))return v(L,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){Y=!0},useSimple:function(){Y=!1}}),r(r.S+r.F*!H,"Object",{create:Z,defineProperty:q,defineProperties:X,getOwnPropertyDescriptor:J,getOwnPropertyNames:Q,getOwnPropertySymbols:$}),I&&r(r.S+r.F*(!H||d(function(){var t=P();return"[null]"!=N([t])||"{}"!=N({a:t})||"{}"!=N(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!U(t)){for(var e,i,o=[t],n=1;arguments.length>n;)o.push(arguments[n++]);return e=o[1],"function"==typeof e&&(i=e),!i&&y(e)||(e=function(t,e){if(i&&(e=i.call(this,t,e)),!U(e))return e}),o[1]=e,N.apply(I,o)}}}),P.prototype[z]||i(20)(P.prototype,z,P.prototype.valueOf),u(P,"Symbol"),u(Math,"Math",!0),u(o.JSON,"JSON",!0)},function(t,e,i){var o=i(43)("meta"),n=i(23),s=i(31),r=i(21).f,a=0,h=Object.isExtensible||function(){return!0},d=!i(26)(function(){return h(Object.preventExtensions({}))}),l=function(t){r(t,o,{value:{i:"O"+ ++a,w:{}}})},u=function(t,e){if(!n(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!s(t,o)){if(!h(t))return"F";if(!e)return"E";l(t)}return t[o].i},c=function(t,e){if(!s(t,o)){if(!h(t))return!0;if(!e)return!1;l(t)}return t[o].w},p=function(t){return d&&f.NEED&&h(t)&&!s(t,o)&&l(t),t},f=t.exports={KEY:o,NEED:!1,fastKey:u,getWeak:c,onFreeze:p}},function(t,e,i){var o=i(16),n=i(17),s=i(14),r=i(65),a=i(21).f;t.exports=function(t){var e=n.Symbol||(n.Symbol=s?{}:o.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:r.f(t)})}},function(t,e,i){var o=i(35),n=i(9);t.exports=function(t,e){for(var i,s=n(t),r=o(s),a=r.length,h=0;a>h;)if(s[i=r[h++]]===e)return i}},function(t,e,i){var o=i(35),n=i(73),s=i(74);t.exports=function(t){var e=o(t),i=n.f;if(i)for(var r,a=i(t),h=s.f,d=0;a.length>d;)h.call(t,r=a[d++])&&e.push(r);return e}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,i){var o=i(11);t.exports=Array.isArray||function(t){return"Array"==o(t)}},function(t,e,i){var o=i(9),n=i(77).f,s={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return n(t)}catch(t){return r.slice()}};t.exports.f=function(t){return r&&"[object Window]"==s.call(t)?a(t):n(o(t))}},function(t,e,i){var o=i(36),n=i(44).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,n)}},function(t,e,i){var o=i(74),n=i(29),s=i(9),r=i(28),a=i(31),h=i(24),d=Object.getOwnPropertyDescriptor;e.f=i(25)?d:function(t,e){if(t=s(t),e=r(e,!0),h)try{return d(t,e)}catch(t){}if(a(t,e))return n(!o.f.call(t,e),t[e])}},function(t,e){},function(t,e,i){i(70)("asyncIterator")},function(t,e,i){i(70)("observable")},function(t,e,i){t.exports="undefined"!=typeof window&&window.moment||i(83)},function(t,e,i){(function(t){!function(e,i){t.exports=i()}(0,function(){function e(){return bo.apply(null,arguments)}function i(t){return t instanceof Array||"[object Array]"===Object.prototype.toString.call(t)}function o(t){return null!=t&&"[object Object]"===Object.prototype.toString.call(t)}function n(t){var e;for(e in t)return!1;return!0}function s(t){return void 0===t}function r(t){return"number"==typeof t||"[object Number]"===Object.prototype.toString.call(t)}function a(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)}function h(t,e){var i,o=[];for(i=0;i<t.length;++i)o.push(e(t[i],i));return o}function d(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function l(t,e){for(var i in e)d(e,i)&&(t[i]=e[i]);return d(e,"toString")&&(t.toString=e.toString),d(e,"valueOf")&&(t.valueOf=e.valueOf),t}function u(t,e,i,o){return ye(t,e,i,o,!0).utc()}function c(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function p(t){return null==t._pf&&(t._pf=c()),t._pf}function f(t){if(null==t._isValid){var e=p(t),i=wo.call(e.parsedDateParts,function(t){return null!=t}),o=!isNaN(t._d.getTime())&&e.overflow<0&&!e.empty&&!e.invalidMonth&&!e.invalidWeekday&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&i);if(t._strict&&(o=o&&0===e.charsLeftOver&&0===e.unusedTokens.length&&void 0===e.bigHour),null!=Object.isFrozen&&Object.isFrozen(t))return o;t._isValid=o}return t._isValid}function m(t){var e=u(NaN);return null!=t?l(p(e),t):p(e).userInvalidated=!0,e}function v(t,e){var i,o,n;if(s(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),s(e._i)||(t._i=e._i),s(e._f)||(t._f=e._f),s(e._l)||(t._l=e._l),s(e._strict)||(t._strict=e._strict),s(e._tzm)||(t._tzm=e._tzm),
s(e._isUTC)||(t._isUTC=e._isUTC),s(e._offset)||(t._offset=e._offset),s(e._pf)||(t._pf=p(e)),s(e._locale)||(t._locale=e._locale),xo.length>0)for(i=0;i<xo.length;i++)o=xo[i],n=e[o],s(n)||(t[o]=n);return t}function g(t){v(this,t),this._d=new Date(null!=t._d?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),ko===!1&&(ko=!0,e.updateOffset(this),ko=!1)}function y(t){return t instanceof g||null!=t&&null!=t._isAMomentObject}function b(t){return t<0?Math.ceil(t)||0:Math.floor(t)}function _(t){var e=+t,i=0;return 0!==e&&isFinite(e)&&(i=b(e)),i}function w(t,e,i){var o,n=Math.min(t.length,e.length),s=Math.abs(t.length-e.length),r=0;for(o=0;o<n;o++)(i&&t[o]!==e[o]||!i&&_(t[o])!==_(e[o]))&&r++;return r+s}function x(t){e.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+t)}function k(t,i){var o=!0;return l(function(){if(null!=e.deprecationHandler&&e.deprecationHandler(null,t),o){for(var n,s=[],r=0;r<arguments.length;r++){if(n="","object"==typeof arguments[r]){n+="\n["+r+"] ";for(var a in arguments[0])n+=a+": "+arguments[0][a]+", ";n=n.slice(0,-2)}else n=arguments[r];s.push(n)}x(t+"\nArguments: "+Array.prototype.slice.call(s).join("")+"\n"+(new Error).stack),o=!1}return i.apply(this,arguments)},i)}function O(t,i){null!=e.deprecationHandler&&e.deprecationHandler(t,i),Oo[t]||(x(i),Oo[t]=!0)}function S(t){return t instanceof Function||"[object Function]"===Object.prototype.toString.call(t)}function M(t){var e,i;for(i in t)e=t[i],S(e)?this[i]=e:this["_"+i]=e;this._config=t,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function D(t,e){var i,n=l({},t);for(i in e)d(e,i)&&(o(t[i])&&o(e[i])?(n[i]={},l(n[i],t[i]),l(n[i],e[i])):null!=e[i]?n[i]=e[i]:delete n[i]);for(i in t)d(t,i)&&!d(e,i)&&o(t[i])&&(n[i]=l({},n[i]));return n}function C(t){null!=t&&this.set(t)}function T(t,e,i){var o=this._calendar[t]||this._calendar.sameElse;return S(o)?o.call(e,i):o}function E(t){var e=this._longDateFormat[t],i=this._longDateFormat[t.toUpperCase()];return e||!i?e:(this._longDateFormat[t]=i.replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t])}function P(){return this._invalidDate}function I(t){return this._ordinal.replace("%d",t)}function N(t,e,i,o){var n=this._relativeTime[i];return S(n)?n(t,e,i,o):n.replace(/%d/i,t)}function R(t,e){var i=this._relativeTime[t>0?"future":"past"];return S(i)?i(e):i.replace(/%s/i,e)}function z(t,e){var i=t.toLowerCase();Po[i]=Po[i+"s"]=Po[e]=t}function A(t){return"string"==typeof t?Po[t]||Po[t.toLowerCase()]:void 0}function L(t){var e,i,o={};for(i in t)d(t,i)&&(e=A(i))&&(o[e]=t[i]);return o}function F(t,e){Io[t]=e}function B(t){var e=[];for(var i in t)e.push({unit:i,priority:Io[i]});return e.sort(function(t,e){return t.priority-e.priority}),e}function j(t,i){return function(o){return null!=o?(W(this,t,o),e.updateOffset(this,i),this):H(this,t)}}function H(t,e){return t.isValid()?t._d["get"+(t._isUTC?"UTC":"")+e]():NaN}function W(t,e,i){t.isValid()&&t._d["set"+(t._isUTC?"UTC":"")+e](i)}function Y(t){return t=A(t),S(this[t])?this[t]():this}function G(t,e){if("object"==typeof t){t=L(t);for(var i=B(t),o=0;o<i.length;o++)this[i[o].unit](t[i[o].unit])}else if(t=A(t),S(this[t]))return this[t](e);return this}function V(t,e,i){var o=""+Math.abs(t),n=e-o.length;return(t>=0?i?"+":"":"-")+Math.pow(10,Math.max(0,n)).toString().substr(1)+o}function U(t,e,i,o){var n=o;"string"==typeof o&&(n=function(){return this[o]()}),t&&(Ao[t]=n),e&&(Ao[e[0]]=function(){return V(n.apply(this,arguments),e[1],e[2])}),i&&(Ao[i]=function(){return this.localeData().ordinal(n.apply(this,arguments),t)})}function q(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function X(t){var e,i,o=t.match(No);for(e=0,i=o.length;e<i;e++)Ao[o[e]]?o[e]=Ao[o[e]]:o[e]=q(o[e]);return function(e){var n,s="";for(n=0;n<i;n++)s+=S(o[n])?o[n].call(e,t):o[n];return s}}function Z(t,e){return t.isValid()?(e=K(e,t.localeData()),zo[e]=zo[e]||X(e),zo[e](t)):t.localeData().invalidDate()}function K(t,e){function i(t){return e.longDateFormat(t)||t}var o=5;for(Ro.lastIndex=0;o>=0&&Ro.test(t);)t=t.replace(Ro,i),Ro.lastIndex=0,o-=1;return t}function J(t,e,i){Ho[t]=S(e)?e:function(t,o){return t&&i?i:e}}function Q(t,e){return d(Ho,t)?Ho[t](e._strict,e._locale):new RegExp($(t))}function $(t){return tt(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,e,i,o,n){return e||i||o||n}))}function tt(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function et(t,e){var i,o=e;for("string"==typeof t&&(t=[t]),r(e)&&(o=function(t,i){i[e]=_(t)}),i=0;i<t.length;i++)Wo[t[i]]=o}function it(t,e){et(t,function(t,i,o,n){o._w=o._w||{},e(t,o._w,o,n)})}function ot(t,e,i){null!=e&&d(Wo,t)&&Wo[t](e,i._a,i,t)}function nt(t,e){return new Date(Date.UTC(t,e+1,0)).getUTCDate()}function st(t,e){return t?i(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||$o).test(e)?"format":"standalone"][t.month()]:i(this._months)?this._months:this._months.standalone}function rt(t,e){return t?i(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[$o.test(e)?"format":"standalone"][t.month()]:i(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function at(t,e,i){var o,n,s,r=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],o=0;o<12;++o)s=u([2e3,o]),this._shortMonthsParse[o]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[o]=this.months(s,"").toLocaleLowerCase();return i?"MMM"===e?(n=Qo.call(this._shortMonthsParse,r),n!==-1?n:null):(n=Qo.call(this._longMonthsParse,r),n!==-1?n:null):"MMM"===e?(n=Qo.call(this._shortMonthsParse,r))!==-1?n:(n=Qo.call(this._longMonthsParse,r),n!==-1?n:null):(n=Qo.call(this._longMonthsParse,r))!==-1?n:(n=Qo.call(this._shortMonthsParse,r),n!==-1?n:null)}function ht(t,e,i){var o,n,s;if(this._monthsParseExact)return at.call(this,t,e,i);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),o=0;o<12;o++){if(n=u([2e3,o]),i&&!this._longMonthsParse[o]&&(this._longMonthsParse[o]=new RegExp("^"+this.months(n,"").replace(".","")+"$","i"),this._shortMonthsParse[o]=new RegExp("^"+this.monthsShort(n,"").replace(".","")+"$","i")),i||this._monthsParse[o]||(s="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[o]=new RegExp(s.replace(".",""),"i")),i&&"MMMM"===e&&this._longMonthsParse[o].test(t))return o;if(i&&"MMM"===e&&this._shortMonthsParse[o].test(t))return o;if(!i&&this._monthsParse[o].test(t))return o}}function dt(t,e){var i;if(!t.isValid())return t;if("string"==typeof e)if(/^\d+$/.test(e))e=_(e);else if(e=t.localeData().monthsParse(e),!r(e))return t;return i=Math.min(t.date(),nt(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,i),t}function lt(t){return null!=t?(dt(this,t),e.updateOffset(this,!0),this):H(this,"Month")}function ut(){return nt(this.year(),this.month())}function ct(t){return this._monthsParseExact?(d(this,"_monthsRegex")||ft.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(d(this,"_monthsShortRegex")||(this._monthsShortRegex=on),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)}function pt(t){return this._monthsParseExact?(d(this,"_monthsRegex")||ft.call(this),t?this._monthsStrictRegex:this._monthsRegex):(d(this,"_monthsRegex")||(this._monthsRegex=nn),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)}function ft(){function t(t,e){return e.length-t.length}var e,i,o=[],n=[],s=[];for(e=0;e<12;e++)i=u([2e3,e]),o.push(this.monthsShort(i,"")),n.push(this.months(i,"")),s.push(this.months(i,"")),s.push(this.monthsShort(i,""));for(o.sort(t),n.sort(t),s.sort(t),e=0;e<12;e++)o[e]=tt(o[e]),n[e]=tt(n[e]);for(e=0;e<24;e++)s[e]=tt(s[e]);this._monthsRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+o.join("|")+")","i")}function mt(t){return vt(t)?366:365}function vt(t){return t%4==0&&t%100!=0||t%400==0}function gt(){return vt(this.year())}function yt(t,e,i,o,n,s,r){var a=new Date(t,e,i,o,n,s,r);return t<100&&t>=0&&isFinite(a.getFullYear())&&a.setFullYear(t),a}function bt(t){var e=new Date(Date.UTC.apply(null,arguments));return t<100&&t>=0&&isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t),e}function _t(t,e,i){var o=7+e-i;return-((7+bt(t,0,o).getUTCDay()-e)%7)+o-1}function wt(t,e,i,o,n){var s,r,a=(7+i-o)%7,h=_t(t,o,n),d=1+7*(e-1)+a+h;return d<=0?(s=t-1,r=mt(s)+d):d>mt(t)?(s=t+1,r=d-mt(t)):(s=t,r=d),{year:s,dayOfYear:r}}function xt(t,e,i){var o,n,s=_t(t.year(),e,i),r=Math.floor((t.dayOfYear()-s-1)/7)+1;return r<1?(n=t.year()-1,o=r+kt(n,e,i)):r>kt(t.year(),e,i)?(o=r-kt(t.year(),e,i),n=t.year()+1):(n=t.year(),o=r),{week:o,year:n}}function kt(t,e,i){var o=_t(t,e,i),n=_t(t+1,e,i);return(mt(t)-o+n)/7}function Ot(t){return xt(t,this._week.dow,this._week.doy).week}function St(){return this._week.dow}function Mt(){return this._week.doy}function Dt(t){var e=this.localeData().week(this);return null==t?e:this.add(7*(t-e),"d")}function Ct(t){var e=xt(this,1,4).week;return null==t?e:this.add(7*(t-e),"d")}function Tt(t,e){return"string"!=typeof t?t:isNaN(t)?(t=e.weekdaysParse(t),"number"==typeof t?t:null):parseInt(t,10)}function Et(t,e){return"string"==typeof t?e.weekdaysParse(t)%7||7:isNaN(t)?null:t}function Pt(t,e){return t?i(this._weekdays)?this._weekdays[t.day()]:this._weekdays[this._weekdays.isFormat.test(e)?"format":"standalone"][t.day()]:i(this._weekdays)?this._weekdays:this._weekdays.standalone}function It(t){return t?this._weekdaysShort[t.day()]:this._weekdaysShort}function Nt(t){return t?this._weekdaysMin[t.day()]:this._weekdaysMin}function Rt(t,e,i){var o,n,s,r=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],o=0;o<7;++o)s=u([2e3,1]).day(o),this._minWeekdaysParse[o]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[o]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[o]=this.weekdays(s,"").toLocaleLowerCase();return i?"dddd"===e?(n=Qo.call(this._weekdaysParse,r),n!==-1?n:null):"ddd"===e?(n=Qo.call(this._shortWeekdaysParse,r),n!==-1?n:null):(n=Qo.call(this._minWeekdaysParse,r),n!==-1?n:null):"dddd"===e?(n=Qo.call(this._weekdaysParse,r))!==-1?n:(n=Qo.call(this._shortWeekdaysParse,r))!==-1?n:(n=Qo.call(this._minWeekdaysParse,r),n!==-1?n:null):"ddd"===e?(n=Qo.call(this._shortWeekdaysParse,r))!==-1?n:(n=Qo.call(this._weekdaysParse,r))!==-1?n:(n=Qo.call(this._minWeekdaysParse,r),n!==-1?n:null):(n=Qo.call(this._minWeekdaysParse,r))!==-1?n:(n=Qo.call(this._weekdaysParse,r))!==-1?n:(n=Qo.call(this._shortWeekdaysParse,r),n!==-1?n:null)}function zt(t,e,i){var o,n,s;if(this._weekdaysParseExact)return Rt.call(this,t,e,i);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),o=0;o<7;o++){if(n=u([2e3,1]).day(o),i&&!this._fullWeekdaysParse[o]&&(this._fullWeekdaysParse[o]=new RegExp("^"+this.weekdays(n,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[o]=new RegExp("^"+this.weekdaysShort(n,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[o]=new RegExp("^"+this.weekdaysMin(n,"").replace(".",".?")+"$","i")),this._weekdaysParse[o]||(s="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[o]=new RegExp(s.replace(".",""),"i")),i&&"dddd"===e&&this._fullWeekdaysParse[o].test(t))return o;if(i&&"ddd"===e&&this._shortWeekdaysParse[o].test(t))return o;if(i&&"dd"===e&&this._minWeekdaysParse[o].test(t))return o;if(!i&&this._weekdaysParse[o].test(t))return o}}function At(t){if(!this.isValid())return null!=t?this:NaN;var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?(t=Tt(t,this.localeData()),this.add(t-e,"d")):e}function Lt(t){if(!this.isValid())return null!=t?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return null==t?e:this.add(t-e,"d")}function Ft(t){if(!this.isValid())return null!=t?this:NaN;if(null!=t){var e=Et(t,this.localeData());return this.day(this.day()%7?e:e-7)}return this.day()||7}function Bt(t){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Wt.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(d(this,"_weekdaysRegex")||(this._weekdaysRegex=ln),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)}function jt(t){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Wt.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(d(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=un),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Ht(t){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Wt.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(d(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=cn),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Wt(){function t(t,e){return e.length-t.length}var e,i,o,n,s,r=[],a=[],h=[],d=[];for(e=0;e<7;e++)i=u([2e3,1]).day(e),o=this.weekdaysMin(i,""),n=this.weekdaysShort(i,""),s=this.weekdays(i,""),r.push(o),a.push(n),h.push(s),d.push(o),d.push(n),d.push(s);for(r.sort(t),a.sort(t),h.sort(t),d.sort(t),e=0;e<7;e++)a[e]=tt(a[e]),h[e]=tt(h[e]),d[e]=tt(d[e]);this._weekdaysRegex=new RegExp("^("+d.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+h.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+r.join("|")+")","i")}function Yt(){return this.hours()%12||12}function Gt(){return this.hours()||24}function Vt(t,e){U(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}function Ut(t,e){return e._meridiemParse}function qt(t){return"p"===(t+"").toLowerCase().charAt(0)}function Xt(t,e,i){return t>11?i?"pm":"PM":i?"am":"AM"}function Zt(t){return t?t.toLowerCase().replace("_","-"):t}function Kt(t){for(var e,i,o,n,s=0;s<t.length;){for(n=Zt(t[s]).split("-"),e=n.length,i=Zt(t[s+1]),i=i?i.split("-"):null;e>0;){if(o=Jt(n.slice(0,e).join("-")))return o;if(i&&i.length>=e&&w(n,i,!0)>=e-1)break;e--}s++}return null}function Jt(e){var i=null;if(!vn[e]&&void 0!==t&&t&&t.exports)try{i=pn._abbr,function(){var t=new Error('Cannot find module "./locale"');throw t.code="MODULE_NOT_FOUND",t}(),Qt(i)}catch(t){}return vn[e]}function Qt(t,e){var i;return t&&(i=s(e)?ee(t):$t(t,e))&&(pn=i),pn._abbr}function $t(t,e){if(null!==e){var i=mn;if(e.abbr=t,null!=vn[t])O("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),i=vn[t]._config;else if(null!=e.parentLocale){if(null==vn[e.parentLocale])return gn[e.parentLocale]||(gn[e.parentLocale]=[]),gn[e.parentLocale].push({name:t,config:e}),null;i=vn[e.parentLocale]._config}return vn[t]=new C(D(i,e)),gn[t]&&gn[t].forEach(function(t){$t(t.name,t.config)}),Qt(t),vn[t]}return delete vn[t],null}function te(t,e){if(null!=e){var i,o=mn;null!=vn[t]&&(o=vn[t]._config),e=D(o,e),i=new C(e),i.parentLocale=vn[t],vn[t]=i,Qt(t)}else null!=vn[t]&&(null!=vn[t].parentLocale?vn[t]=vn[t].parentLocale:null!=vn[t]&&delete vn[t]);return vn[t]}function ee(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return pn;if(!i(t)){if(e=Jt(t))return e;t=[t]}return Kt(t)}function ie(){return Do(vn)}function oe(t){var e,i=t._a;return i&&p(t).overflow===-2&&(e=i[Go]<0||i[Go]>11?Go:i[Vo]<1||i[Vo]>nt(i[Yo],i[Go])?Vo:i[Uo]<0||i[Uo]>24||24===i[Uo]&&(0!==i[qo]||0!==i[Xo]||0!==i[Zo])?Uo:i[qo]<0||i[qo]>59?qo:i[Xo]<0||i[Xo]>59?Xo:i[Zo]<0||i[Zo]>999?Zo:-1,p(t)._overflowDayOfYear&&(e<Yo||e>Vo)&&(e=Vo),p(t)._overflowWeeks&&e===-1&&(e=Ko),p(t)._overflowWeekday&&e===-1&&(e=Jo),p(t).overflow=e),t}function ne(t){var e,i,o,n,s,r,a=t._i,h=yn.exec(a)||bn.exec(a);if(h){for(p(t).iso=!0,e=0,i=wn.length;e<i;e++)if(wn[e][1].exec(h[1])){n=wn[e][0],o=wn[e][2]!==!1;break}if(null==n)return void(t._isValid=!1);if(h[3]){for(e=0,i=xn.length;e<i;e++)if(xn[e][1].exec(h[3])){s=(h[2]||" ")+xn[e][0];break}if(null==s)return void(t._isValid=!1)}if(!o&&null!=s)return void(t._isValid=!1);if(h[4]){if(!_n.exec(h[4]))return void(t._isValid=!1);r="Z"}t._f=n+(s||"")+(r||""),ue(t)}else t._isValid=!1}function se(t){var e,i,o,n,s,r,a,h,d={" GMT":" +0000"," EDT":" -0400"," EST":" -0500"," CDT":" -0500"," CST":" -0600"," MDT":" -0600"," MST":" -0700"," PDT":" -0700"," PST":" -0800"},l="YXWVUTSRQPONZABCDEFGHIKLM";if(e=t._i.replace(/\([^\)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s|\s$/g,""),i=On.exec(e)){if(o=i[1]?"ddd"+(5===i[1].length?", ":" "):"",n="D MMM "+(i[2].length>10?"YYYY ":"YY "),s="HH:mm"+(i[4]?":ss":""),i[1]){var u=new Date(i[2]),c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][u.getDay()];if(i[1].substr(0,3)!==c)return p(t).weekdayMismatch=!0,void(t._isValid=!1)}switch(i[5].length){case 2:0===h?a=" +0000":(h=l.indexOf(i[5][1].toUpperCase())-12,a=(h<0?" -":" +")+(""+h).replace(/^-?/,"0").match(/..$/)[0]+"00");break;case 4:a=d[i[5]];break;default:a=d[" GMT"]}i[5]=a,t._i=i.splice(1).join(""),r=" ZZ",t._f=o+n+s+r,ue(t),p(t).rfc2822=!0}else t._isValid=!1}function re(t){var i=kn.exec(t._i);if(null!==i)return void(t._d=new Date(+i[1]));ne(t),t._isValid===!1&&(delete t._isValid,se(t),t._isValid===!1&&(delete t._isValid,e.createFromInputFallback(t)))}function ae(t,e,i){return null!=t?t:null!=e?e:i}function he(t){var i=new Date(e.now());return t._useUTC?[i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()]:[i.getFullYear(),i.getMonth(),i.getDate()]}function de(t){var e,i,o,n,s=[];if(!t._d){for(o=he(t),t._w&&null==t._a[Vo]&&null==t._a[Go]&&le(t),null!=t._dayOfYear&&(n=ae(t._a[Yo],o[Yo]),(t._dayOfYear>mt(n)||0===t._dayOfYear)&&(p(t)._overflowDayOfYear=!0),i=bt(n,0,t._dayOfYear),t._a[Go]=i.getUTCMonth(),t._a[Vo]=i.getUTCDate()),e=0;e<3&&null==t._a[e];++e)t._a[e]=s[e]=o[e];for(;e<7;e++)t._a[e]=s[e]=null==t._a[e]?2===e?1:0:t._a[e];24===t._a[Uo]&&0===t._a[qo]&&0===t._a[Xo]&&0===t._a[Zo]&&(t._nextDay=!0,t._a[Uo]=0),t._d=(t._useUTC?bt:yt).apply(null,s),null!=t._tzm&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[Uo]=24)}}function le(t){var e,i,o,n,s,r,a,h;if(e=t._w,null!=e.GG||null!=e.W||null!=e.E)s=1,r=4,i=ae(e.GG,t._a[Yo],xt(be(),1,4).year),o=ae(e.W,1),((n=ae(e.E,1))<1||n>7)&&(h=!0);else{s=t._locale._week.dow,r=t._locale._week.doy;var d=xt(be(),s,r);i=ae(e.gg,t._a[Yo],d.year),o=ae(e.w,d.week),null!=e.d?((n=e.d)<0||n>6)&&(h=!0):null!=e.e?(n=e.e+s,(e.e<0||e.e>6)&&(h=!0)):n=s}o<1||o>kt(i,s,r)?p(t)._overflowWeeks=!0:null!=h?p(t)._overflowWeekday=!0:(a=wt(i,o,n,s,r),t._a[Yo]=a.year,t._dayOfYear=a.dayOfYear)}function ue(t){if(t._f===e.ISO_8601)return void ne(t);if(t._f===e.RFC_2822)return void se(t);t._a=[],p(t).empty=!0;var i,o,n,s,r,a=""+t._i,h=a.length,d=0;for(n=K(t._f,t._locale).match(No)||[],i=0;i<n.length;i++)s=n[i],o=(a.match(Q(s,t))||[])[0],o&&(r=a.substr(0,a.indexOf(o)),r.length>0&&p(t).unusedInput.push(r),a=a.slice(a.indexOf(o)+o.length),d+=o.length),Ao[s]?(o?p(t).empty=!1:p(t).unusedTokens.push(s),ot(s,o,t)):t._strict&&!o&&p(t).unusedTokens.push(s);p(t).charsLeftOver=h-d,a.length>0&&p(t).unusedInput.push(a),t._a[Uo]<=12&&p(t).bigHour===!0&&t._a[Uo]>0&&(p(t).bigHour=void 0),p(t).parsedDateParts=t._a.slice(0),p(t).meridiem=t._meridiem,t._a[Uo]=ce(t._locale,t._a[Uo],t._meridiem),de(t),oe(t)}function ce(t,e,i){var o;return null==i?e:null!=t.meridiemHour?t.meridiemHour(e,i):null!=t.isPM?(o=t.isPM(i),o&&e<12&&(e+=12),o||12!==e||(e=0),e):e}function pe(t){var e,i,o,n,s;if(0===t._f.length)return p(t).invalidFormat=!0,void(t._d=new Date(NaN));for(n=0;n<t._f.length;n++)s=0,e=v({},t),null!=t._useUTC&&(e._useUTC=t._useUTC),e._f=t._f[n],ue(e),f(e)&&(s+=p(e).charsLeftOver,s+=10*p(e).unusedTokens.length,p(e).score=s,(null==o||s<o)&&(o=s,i=e));l(t,i||e)}function fe(t){if(!t._d){var e=L(t._i);t._a=h([e.year,e.month,e.day||e.date,e.hour,e.minute,e.second,e.millisecond],function(t){return t&&parseInt(t,10)}),de(t)}}function me(t){var e=new g(oe(ve(t)));return e._nextDay&&(e.add(1,"d"),e._nextDay=void 0),e}function ve(t){var e=t._i,o=t._f;return t._locale=t._locale||ee(t._l),null===e||void 0===o&&""===e?m({nullInput:!0}):("string"==typeof e&&(t._i=e=t._locale.preparse(e)),y(e)?new g(oe(e)):(a(e)?t._d=e:i(o)?pe(t):o?ue(t):ge(t),f(t)||(t._d=null),t))}function ge(t){var n=t._i;s(n)?t._d=new Date(e.now()):a(n)?t._d=new Date(n.valueOf()):"string"==typeof n?re(t):i(n)?(t._a=h(n.slice(0),function(t){return parseInt(t,10)}),de(t)):o(n)?fe(t):r(n)?t._d=new Date(n):e.createFromInputFallback(t)}function ye(t,e,s,r,a){var h={};return s!==!0&&s!==!1||(r=s,s=void 0),(o(t)&&n(t)||i(t)&&0===t.length)&&(t=void 0),h._isAMomentObject=!0,h._useUTC=h._isUTC=a,h._l=s,h._i=t,h._f=e,h._strict=r,me(h)}function be(t,e,i,o){return ye(t,e,i,o,!1)}function _e(t,e){var o,n;if(1===e.length&&i(e[0])&&(e=e[0]),!e.length)return be();for(o=e[0],n=1;n<e.length;++n)e[n].isValid()&&!e[n][t](o)||(o=e[n]);return o}function we(){return _e("isBefore",[].slice.call(arguments,0))}function xe(){return _e("isAfter",[].slice.call(arguments,0))}function ke(t){for(var e in t)if(Cn.indexOf(e)===-1||null!=t[e]&&isNaN(t[e]))return!1;for(var i=!1,o=0;o<Cn.length;++o)if(t[Cn[o]]){if(i)return!1;parseFloat(t[Cn[o]])!==_(t[Cn[o]])&&(i=!0)}return!0}function Oe(){return this._isValid}function Se(){return Ge(NaN)}function Me(t){var e=L(t),i=e.year||0,o=e.quarter||0,n=e.month||0,s=e.week||0,r=e.day||0,a=e.hour||0,h=e.minute||0,d=e.second||0,l=e.millisecond||0;this._isValid=ke(e),this._milliseconds=+l+1e3*d+6e4*h+1e3*a*60*60,this._days=+r+7*s,this._months=+n+3*o+12*i,this._data={},this._locale=ee(),this._bubble()}function De(t){return t instanceof Me}function Ce(t){return t<0?Math.round(-1*t)*-1:Math.round(t)}function Te(t,e){U(t,0,0,function(){var t=this.utcOffset(),i="+";return t<0&&(t=-t,i="-"),i+V(~~(t/60),2)+e+V(~~t%60,2)})}function Ee(t,e){var i=(e||"").match(t);if(null===i)return null;var o=i[i.length-1]||[],n=(o+"").match(Tn)||["-",0,0],s=+(60*n[1])+_(n[2]);return 0===s?0:"+"===n[0]?s:-s}function Pe(t,i){var o,n;return i._isUTC?(o=i.clone(),n=(y(t)||a(t)?t.valueOf():be(t).valueOf())-o.valueOf(),o._d.setTime(o._d.valueOf()+n),e.updateOffset(o,!1),o):be(t).local()}function Ie(t){return 15*-Math.round(t._d.getTimezoneOffset()/15)}function Ne(t,i,o){var n,s=this._offset||0;if(!this.isValid())return null!=t?this:NaN;if(null!=t){if("string"==typeof t){if(null===(t=Ee(Bo,t)))return this}else Math.abs(t)<16&&!o&&(t*=60);return!this._isUTC&&i&&(n=Ie(this)),this._offset=t,this._isUTC=!0,null!=n&&this.add(n,"m"),s!==t&&(!i||this._changeInProgress?Ze(this,Ge(t-s,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,e.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?s:Ie(this)}function Re(t,e){return null!=t?("string"!=typeof t&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}function ze(t){return this.utcOffset(0,t)}function Ae(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(Ie(this),"m")),this}function Le(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var t=Ee(Fo,this._i);null!=t?this.utcOffset(t):this.utcOffset(0,!0)}return this}function Fe(t){return!!this.isValid()&&(t=t?be(t).utcOffset():0,(this.utcOffset()-t)%60==0)}function Be(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function je(){if(!s(this._isDSTShifted))return this._isDSTShifted;var t={};if(v(t,this),t=ve(t),t._a){var e=t._isUTC?u(t._a):be(t._a);this._isDSTShifted=this.isValid()&&w(t._a,e.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function He(){return!!this.isValid()&&!this._isUTC}function We(){return!!this.isValid()&&this._isUTC}function Ye(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Ge(t,e){var i,o,n,s=t,a=null;return De(t)?s={ms:t._milliseconds,d:t._days,M:t._months}:r(t)?(s={},e?s[e]=t:s.milliseconds=t):(a=En.exec(t))?(i="-"===a[1]?-1:1,s={y:0,d:_(a[Vo])*i,h:_(a[Uo])*i,m:_(a[qo])*i,s:_(a[Xo])*i,ms:_(Ce(1e3*a[Zo]))*i}):(a=Pn.exec(t))?(i="-"===a[1]?-1:1,s={y:Ve(a[2],i),M:Ve(a[3],i),w:Ve(a[4],i),d:Ve(a[5],i),h:Ve(a[6],i),m:Ve(a[7],i),s:Ve(a[8],i)}):null==s?s={}:"object"==typeof s&&("from"in s||"to"in s)&&(n=qe(be(s.from),be(s.to)),s={},s.ms=n.milliseconds,s.M=n.months),o=new Me(s),De(t)&&d(t,"_locale")&&(o._locale=t._locale),o}function Ve(t,e){var i=t&&parseFloat(t.replace(",","."));return(isNaN(i)?0:i)*e}function Ue(t,e){var i={milliseconds:0,months:0};return i.months=e.month()-t.month()+12*(e.year()-t.year()),t.clone().add(i.months,"M").isAfter(e)&&--i.months,i.milliseconds=+e-+t.clone().add(i.months,"M"),i}function qe(t,e){var i;return t.isValid()&&e.isValid()?(e=Pe(e,t),t.isBefore(e)?i=Ue(t,e):(i=Ue(e,t),i.milliseconds=-i.milliseconds,i.months=-i.months),i):{milliseconds:0,months:0}}function Xe(t,e){return function(i,o){var n,s;return null===o||isNaN(+o)||(O(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=i,i=o,o=s),i="string"==typeof i?+i:i,n=Ge(i,o),Ze(this,n,t),this}}function Ze(t,i,o,n){var s=i._milliseconds,r=Ce(i._days),a=Ce(i._months);t.isValid()&&(n=null==n||n,s&&t._d.setTime(t._d.valueOf()+s*o),r&&W(t,"Date",H(t,"Date")+r*o),a&&dt(t,H(t,"Month")+a*o),n&&e.updateOffset(t,r||a))}function Ke(t,e){var i=t.diff(e,"days",!0);return i<-6?"sameElse":i<-1?"lastWeek":i<0?"lastDay":i<1?"sameDay":i<2?"nextDay":i<7?"nextWeek":"sameElse"}function Je(t,i){var o=t||be(),n=Pe(o,this).startOf("day"),s=e.calendarFormat(this,n)||"sameElse",r=i&&(S(i[s])?i[s].call(this,o):i[s]);return this.format(r||this.localeData().calendar(s,this,be(o)))}function Qe(){return new g(this)}function $e(t,e){var i=y(t)?t:be(t);return!(!this.isValid()||!i.isValid())&&(e=A(s(e)?"millisecond":e),"millisecond"===e?this.valueOf()>i.valueOf():i.valueOf()<this.clone().startOf(e).valueOf())}function ti(t,e){var i=y(t)?t:be(t);return!(!this.isValid()||!i.isValid())&&(e=A(s(e)?"millisecond":e),"millisecond"===e?this.valueOf()<i.valueOf():this.clone().endOf(e).valueOf()<i.valueOf())}function ei(t,e,i,o){return o=o||"()",("("===o[0]?this.isAfter(t,i):!this.isBefore(t,i))&&(")"===o[1]?this.isBefore(e,i):!this.isAfter(e,i))}function ii(t,e){var i,o=y(t)?t:be(t);return!(!this.isValid()||!o.isValid())&&(e=A(e||"millisecond"),"millisecond"===e?this.valueOf()===o.valueOf():(i=o.valueOf(),this.clone().startOf(e).valueOf()<=i&&i<=this.clone().endOf(e).valueOf()))}function oi(t,e){return this.isSame(t,e)||this.isAfter(t,e)}function ni(t,e){return this.isSame(t,e)||this.isBefore(t,e)}function si(t,e,i){var o,n,s,r;return this.isValid()?(o=Pe(t,this),o.isValid()?(n=6e4*(o.utcOffset()-this.utcOffset()),e=A(e),"year"===e||"month"===e||"quarter"===e?(r=ri(this,o),"quarter"===e?r/=3:"year"===e&&(r/=12)):(s=this-o,r="second"===e?s/1e3:"minute"===e?s/6e4:"hour"===e?s/36e5:"day"===e?(s-n)/864e5:"week"===e?(s-n)/6048e5:s),i?r:b(r)):NaN):NaN}function ri(t,e){var i,o,n=12*(e.year()-t.year())+(e.month()-t.month()),s=t.clone().add(n,"months");return e-s<0?(i=t.clone().add(n-1,"months"),o=(e-s)/(s-i)):(i=t.clone().add(n+1,"months"),o=(e-s)/(i-s)),-(n+o)||0}function ai(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function hi(){if(!this.isValid())return null;var t=this.clone().utc();return t.year()<0||t.year()>9999?Z(t,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):S(Date.prototype.toISOString)?this.toDate().toISOString():Z(t,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function di(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var t="moment",e="";this.isLocal()||(t=0===this.utcOffset()?"moment.utc":"moment.parseZone",e="Z");var i="["+t+'("]',o=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",n=e+'[")]';return this.format(i+o+"-MM-DD[T]HH:mm:ss.SSS"+n)}function li(t){t||(t=this.isUtc()?e.defaultFormatUtc:e.defaultFormat);var i=Z(this,t);return this.localeData().postformat(i)}function ui(t,e){return this.isValid()&&(y(t)&&t.isValid()||be(t).isValid())?Ge({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function ci(t){return this.from(be(),t)}function pi(t,e){return this.isValid()&&(y(t)&&t.isValid()||be(t).isValid())?Ge({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function fi(t){return this.to(be(),t)}function mi(t){var e;return void 0===t?this._locale._abbr:(e=ee(t),null!=e&&(this._locale=e),this)}function vi(){return this._locale}function gi(t){switch(t=A(t)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===t&&this.weekday(0),"isoWeek"===t&&this.isoWeekday(1),"quarter"===t&&this.month(3*Math.floor(this.month()/3)),this}function yi(t){return void 0===(t=A(t))||"millisecond"===t?this:("date"===t&&(t="day"),this.startOf(t).add(1,"isoWeek"===t?"week":t).subtract(1,"ms"))}function bi(){return this._d.valueOf()-6e4*(this._offset||0)}function _i(){return Math.floor(this.valueOf()/1e3)}function wi(){return new Date(this.valueOf())}function xi(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function ki(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function Oi(){return this.isValid()?this.toISOString():null}function Si(){return f(this)}function Mi(){return l({},p(this))}function Di(){return p(this).overflow}function Ci(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Ti(t,e){U(0,[t,t.length],0,e)}function Ei(t){return Ri.call(this,t,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Pi(t){return Ri.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)}function Ii(){return kt(this.year(),1,4)}function Ni(){var t=this.localeData()._week;return kt(this.year(),t.dow,t.doy)}function Ri(t,e,i,o,n){var s;return null==t?xt(this,o,n).year:(s=kt(t,o,n),e>s&&(e=s),zi.call(this,t,e,i,o,n))}function zi(t,e,i,o,n){var s=wt(t,e,i,o,n),r=bt(s.year,0,s.dayOfYear);return this.year(r.getUTCFullYear()),this.month(r.getUTCMonth()),this.date(r.getUTCDate()),this}function Ai(t){return null==t?Math.ceil((this.month()+1)/3):this.month(3*(t-1)+this.month()%3)}function Li(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==t?e:this.add(t-e,"d")}function Fi(t,e){e[Zo]=_(1e3*("0."+t))}function Bi(){return this._isUTC?"UTC":""}function ji(){return this._isUTC?"Coordinated Universal Time":""}function Hi(t){return be(1e3*t)}function Wi(){return be.apply(null,arguments).parseZone()}function Yi(t){return t}function Gi(t,e,i,o){var n=ee(),s=u().set(o,e);return n[i](s,t)}function Vi(t,e,i){if(r(t)&&(e=t,t=void 0),t=t||"",null!=e)return Gi(t,e,i,"month");var o,n=[];for(o=0;o<12;o++)n[o]=Gi(t,o,i,"month");return n}function Ui(t,e,i,o){"boolean"==typeof t?(r(e)&&(i=e,e=void 0),e=e||""):(e=t,i=e,t=!1,r(e)&&(i=e,e=void 0),e=e||"");var n=ee(),s=t?n._week.dow:0;if(null!=i)return Gi(e,(i+s)%7,o,"day");var a,h=[];for(a=0;a<7;a++)h[a]=Gi(e,(a+s)%7,o,"day");return h}function qi(t,e){return Vi(t,e,"months")}function Xi(t,e){return Vi(t,e,"monthsShort")}function Zi(t,e,i){return Ui(t,e,i,"weekdays")}function Ki(t,e,i){return Ui(t,e,i,"weekdaysShort")}function Ji(t,e,i){return Ui(t,e,i,"weekdaysMin")}function Qi(){var t=this._data
;return this._milliseconds=Wn(this._milliseconds),this._days=Wn(this._days),this._months=Wn(this._months),t.milliseconds=Wn(t.milliseconds),t.seconds=Wn(t.seconds),t.minutes=Wn(t.minutes),t.hours=Wn(t.hours),t.months=Wn(t.months),t.years=Wn(t.years),this}function $i(t,e,i,o){var n=Ge(e,i);return t._milliseconds+=o*n._milliseconds,t._days+=o*n._days,t._months+=o*n._months,t._bubble()}function to(t,e){return $i(this,t,e,1)}function eo(t,e){return $i(this,t,e,-1)}function io(t){return t<0?Math.floor(t):Math.ceil(t)}function oo(){var t,e,i,o,n,s=this._milliseconds,r=this._days,a=this._months,h=this._data;return s>=0&&r>=0&&a>=0||s<=0&&r<=0&&a<=0||(s+=864e5*io(so(a)+r),r=0,a=0),h.milliseconds=s%1e3,t=b(s/1e3),h.seconds=t%60,e=b(t/60),h.minutes=e%60,i=b(e/60),h.hours=i%24,r+=b(i/24),n=b(no(r)),a+=n,r-=io(so(n)),o=b(a/12),a%=12,h.days=r,h.months=a,h.years=o,this}function no(t){return 4800*t/146097}function so(t){return 146097*t/4800}function ro(t){if(!this.isValid())return NaN;var e,i,o=this._milliseconds;if("month"===(t=A(t))||"year"===t)return e=this._days+o/864e5,i=this._months+no(e),"month"===t?i:i/12;switch(e=this._days+Math.round(so(this._months)),t){case"week":return e/7+o/6048e5;case"day":return e+o/864e5;case"hour":return 24*e+o/36e5;case"minute":return 1440*e+o/6e4;case"second":return 86400*e+o/1e3;case"millisecond":return Math.floor(864e5*e)+o;default:throw new Error("Unknown unit "+t)}}function ao(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*_(this._months/12):NaN}function ho(t){return function(){return this.as(t)}}function lo(t){return t=A(t),this.isValid()?this[t+"s"]():NaN}function uo(t){return function(){return this.isValid()?this._data[t]:NaN}}function co(){return b(this.days()/7)}function po(t,e,i,o,n){return n.relativeTime(e||1,!!i,t,o)}function fo(t,e,i){var o=Ge(t).abs(),n=ns(o.as("s")),s=ns(o.as("m")),r=ns(o.as("h")),a=ns(o.as("d")),h=ns(o.as("M")),d=ns(o.as("y")),l=n<=ss.ss&&["s",n]||n<ss.s&&["ss",n]||s<=1&&["m"]||s<ss.m&&["mm",s]||r<=1&&["h"]||r<ss.h&&["hh",r]||a<=1&&["d"]||a<ss.d&&["dd",a]||h<=1&&["M"]||h<ss.M&&["MM",h]||d<=1&&["y"]||["yy",d];return l[2]=e,l[3]=+t>0,l[4]=i,po.apply(null,l)}function mo(t){return void 0===t?ns:"function"==typeof t&&(ns=t,!0)}function vo(t,e){return void 0!==ss[t]&&(void 0===e?ss[t]:(ss[t]=e,"s"===t&&(ss.ss=e-1),!0))}function go(t){if(!this.isValid())return this.localeData().invalidDate();var e=this.localeData(),i=fo(this,!t,e);return t&&(i=e.pastFuture(+this,i)),e.postformat(i)}function yo(){if(!this.isValid())return this.localeData().invalidDate();var t,e,i,o=rs(this._milliseconds)/1e3,n=rs(this._days),s=rs(this._months);t=b(o/60),e=b(t/60),o%=60,t%=60,i=b(s/12),s%=12;var r=i,a=s,h=n,d=e,l=t,u=o,c=this.asSeconds();return c?(c<0?"-":"")+"P"+(r?r+"Y":"")+(a?a+"M":"")+(h?h+"D":"")+(d||l||u?"T":"")+(d?d+"H":"")+(l?l+"M":"")+(u?u+"S":""):"P0D"}var bo,_o;_o=Array.prototype.some?Array.prototype.some:function(t){for(var e=Object(this),i=e.length>>>0,o=0;o<i;o++)if(o in e&&t.call(this,e[o],o,e))return!0;return!1};var wo=_o,xo=e.momentProperties=[],ko=!1,Oo={};e.suppressDeprecationWarnings=!1,e.deprecationHandler=null;var So;So=Object.keys?Object.keys:function(t){var e,i=[];for(e in t)d(t,e)&&i.push(e);return i};var Mo,Do=So,Co={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},To={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Eo={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Po={},Io={},No=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Ro=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,zo={},Ao={},Lo=/[+-]?\d{6}/,Fo=/Z|[+-]\d\d:?\d\d/gi,Bo=/Z|[+-]\d\d(?::?\d\d)?/gi,jo=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Ho={},Wo={},Yo=0,Go=1,Vo=2,Uo=3,qo=4,Xo=5,Zo=6,Ko=7,Jo=8;Mo=Array.prototype.indexOf?Array.prototype.indexOf:function(t){var e;for(e=0;e<this.length;++e)if(this[e]===t)return e;return-1};var Qo=Mo;U("M",["MM",2],"Mo",function(){return this.month()+1}),U("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)}),U("MMMM",0,0,function(t){return this.localeData().months(this,t)}),z("month","M"),F("month",8),J("M",/\d\d?/),J("MM",/\d\d?/,/\d\d/),J("MMM",function(t,e){return e.monthsShortRegex(t)}),J("MMMM",function(t,e){return e.monthsRegex(t)}),et(["M","MM"],function(t,e){e[Go]=_(t)-1}),et(["MMM","MMMM"],function(t,e,i,o){var n=i._locale.monthsParse(t,o,i._strict);null!=n?e[Go]=n:p(i).invalidMonth=t});var $o=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,tn="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),en="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),on=jo,nn=jo;U("Y",0,0,function(){var t=this.year();return t<=9999?""+t:"+"+t}),U(0,["YY",2],0,function(){return this.year()%100}),U(0,["YYYY",4],0,"year"),U(0,["YYYYY",5],0,"year"),U(0,["YYYYYY",6,!0],0,"year"),z("year","y"),F("year",1),J("Y",/[+-]?\d+/),J("YY",/\d\d?/,/\d\d/),J("YYYY",/\d{1,4}/,/\d{4}/),J("YYYYY",/[+-]?\d{1,6}/,Lo),J("YYYYYY",/[+-]?\d{1,6}/,Lo),et(["YYYYY","YYYYYY"],Yo),et("YYYY",function(t,i){i[Yo]=2===t.length?e.parseTwoDigitYear(t):_(t)}),et("YY",function(t,i){i[Yo]=e.parseTwoDigitYear(t)}),et("Y",function(t,e){e[Yo]=parseInt(t,10)}),e.parseTwoDigitYear=function(t){return _(t)+(_(t)>68?1900:2e3)};var sn=j("FullYear",!0);U("w",["ww",2],"wo","week"),U("W",["WW",2],"Wo","isoWeek"),z("week","w"),z("isoWeek","W"),F("week",5),F("isoWeek",5),J("w",/\d\d?/),J("ww",/\d\d?/,/\d\d/),J("W",/\d\d?/),J("WW",/\d\d?/,/\d\d/),it(["w","ww","W","WW"],function(t,e,i,o){e[o.substr(0,1)]=_(t)});var rn={dow:0,doy:6};U("d",0,"do","day"),U("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)}),U("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)}),U("dddd",0,0,function(t){return this.localeData().weekdays(this,t)}),U("e",0,0,"weekday"),U("E",0,0,"isoWeekday"),z("day","d"),z("weekday","e"),z("isoWeekday","E"),F("day",11),F("weekday",11),F("isoWeekday",11),J("d",/\d\d?/),J("e",/\d\d?/),J("E",/\d\d?/),J("dd",function(t,e){return e.weekdaysMinRegex(t)}),J("ddd",function(t,e){return e.weekdaysShortRegex(t)}),J("dddd",function(t,e){return e.weekdaysRegex(t)}),it(["dd","ddd","dddd"],function(t,e,i,o){var n=i._locale.weekdaysParse(t,o,i._strict);null!=n?e.d=n:p(i).invalidWeekday=t}),it(["d","e","E"],function(t,e,i,o){e[o]=_(t)});var an="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),hn="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),dn="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ln=jo,un=jo,cn=jo;U("H",["HH",2],0,"hour"),U("h",["hh",2],0,Yt),U("k",["kk",2],0,Gt),U("hmm",0,0,function(){return""+Yt.apply(this)+V(this.minutes(),2)}),U("hmmss",0,0,function(){return""+Yt.apply(this)+V(this.minutes(),2)+V(this.seconds(),2)}),U("Hmm",0,0,function(){return""+this.hours()+V(this.minutes(),2)}),U("Hmmss",0,0,function(){return""+this.hours()+V(this.minutes(),2)+V(this.seconds(),2)}),Vt("a",!0),Vt("A",!1),z("hour","h"),F("hour",13),J("a",Ut),J("A",Ut),J("H",/\d\d?/),J("h",/\d\d?/),J("k",/\d\d?/),J("HH",/\d\d?/,/\d\d/),J("hh",/\d\d?/,/\d\d/),J("kk",/\d\d?/,/\d\d/),J("hmm",/\d\d\d\d?/),J("hmmss",/\d\d\d\d\d\d?/),J("Hmm",/\d\d\d\d?/),J("Hmmss",/\d\d\d\d\d\d?/),et(["H","HH"],Uo),et(["k","kk"],function(t,e,i){var o=_(t);e[Uo]=24===o?0:o}),et(["a","A"],function(t,e,i){i._isPm=i._locale.isPM(t),i._meridiem=t}),et(["h","hh"],function(t,e,i){e[Uo]=_(t),p(i).bigHour=!0}),et("hmm",function(t,e,i){var o=t.length-2;e[Uo]=_(t.substr(0,o)),e[qo]=_(t.substr(o)),p(i).bigHour=!0}),et("hmmss",function(t,e,i){var o=t.length-4,n=t.length-2;e[Uo]=_(t.substr(0,o)),e[qo]=_(t.substr(o,2)),e[Xo]=_(t.substr(n)),p(i).bigHour=!0}),et("Hmm",function(t,e,i){var o=t.length-2;e[Uo]=_(t.substr(0,o)),e[qo]=_(t.substr(o))}),et("Hmmss",function(t,e,i){var o=t.length-4,n=t.length-2;e[Uo]=_(t.substr(0,o)),e[qo]=_(t.substr(o,2)),e[Xo]=_(t.substr(n))});var pn,fn=j("Hours",!0),mn={calendar:Co,longDateFormat:To,invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:Eo,months:tn,monthsShort:en,week:rn,weekdays:an,weekdaysMin:dn,weekdaysShort:hn,meridiemParse:/[ap]\.?m?\.?/i},vn={},gn={},yn=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,bn=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_n=/Z|[+-]\d\d(?::?\d\d)?/,wn=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],xn=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],kn=/^\/?Date\((\-?\d+)/i,On=/^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;e.createFromInputFallback=k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))}),e.ISO_8601=function(){},e.RFC_2822=function(){};var Sn=k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=be.apply(null,arguments);return this.isValid()&&t.isValid()?t<this?this:t:m()}),Mn=k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=be.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:m()}),Dn=function(){return Date.now?Date.now():+new Date},Cn=["year","quarter","month","week","day","hour","minute","second","millisecond"];Te("Z",":"),Te("ZZ",""),J("Z",Bo),J("ZZ",Bo),et(["Z","ZZ"],function(t,e,i){i._useUTC=!0,i._tzm=Ee(Bo,t)});var Tn=/([\+\-]|\d\d)/gi;e.updateOffset=function(){};var En=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Pn=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Ge.fn=Me.prototype,Ge.invalid=Se;var In=Xe(1,"add"),Nn=Xe(-1,"subtract");e.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",e.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Rn=k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return void 0===t?this.localeData():this.locale(t)});U(0,["gg",2],0,function(){return this.weekYear()%100}),U(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Ti("gggg","weekYear"),Ti("ggggg","weekYear"),Ti("GGGG","isoWeekYear"),Ti("GGGGG","isoWeekYear"),z("weekYear","gg"),z("isoWeekYear","GG"),F("weekYear",1),F("isoWeekYear",1),J("G",/[+-]?\d+/),J("g",/[+-]?\d+/),J("GG",/\d\d?/,/\d\d/),J("gg",/\d\d?/,/\d\d/),J("GGGG",/\d{1,4}/,/\d{4}/),J("gggg",/\d{1,4}/,/\d{4}/),J("GGGGG",/[+-]?\d{1,6}/,Lo),J("ggggg",/[+-]?\d{1,6}/,Lo),it(["gggg","ggggg","GGGG","GGGGG"],function(t,e,i,o){e[o.substr(0,2)]=_(t)}),it(["gg","GG"],function(t,i,o,n){i[n]=e.parseTwoDigitYear(t)}),U("Q",0,"Qo","quarter"),z("quarter","Q"),F("quarter",7),J("Q",/\d/),et("Q",function(t,e){e[Go]=3*(_(t)-1)}),U("D",["DD",2],"Do","date"),z("date","D"),F("date",9),J("D",/\d\d?/),J("DD",/\d\d?/,/\d\d/),J("Do",function(t,e){return t?e._dayOfMonthOrdinalParse||e._ordinalParse:e._dayOfMonthOrdinalParseLenient}),et(["D","DD"],Vo),et("Do",function(t,e){e[Vo]=_(t.match(/\d\d?/)[0],10)});var zn=j("Date",!0);U("DDD",["DDDD",3],"DDDo","dayOfYear"),z("dayOfYear","DDD"),F("dayOfYear",4),J("DDD",/\d{1,3}/),J("DDDD",/\d{3}/),et(["DDD","DDDD"],function(t,e,i){i._dayOfYear=_(t)}),U("m",["mm",2],0,"minute"),z("minute","m"),F("minute",14),J("m",/\d\d?/),J("mm",/\d\d?/,/\d\d/),et(["m","mm"],qo);var An=j("Minutes",!1);U("s",["ss",2],0,"second"),z("second","s"),F("second",15),J("s",/\d\d?/),J("ss",/\d\d?/,/\d\d/),et(["s","ss"],Xo);var Ln=j("Seconds",!1);U("S",0,0,function(){return~~(this.millisecond()/100)}),U(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),U(0,["SSS",3],0,"millisecond"),U(0,["SSSS",4],0,function(){return 10*this.millisecond()}),U(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),U(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),U(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),U(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),U(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),z("millisecond","ms"),F("millisecond",16),J("S",/\d{1,3}/,/\d/),J("SS",/\d{1,3}/,/\d\d/),J("SSS",/\d{1,3}/,/\d{3}/);var Fn;for(Fn="SSSS";Fn.length<=9;Fn+="S")J(Fn,/\d+/);for(Fn="S";Fn.length<=9;Fn+="S")et(Fn,Fi);var Bn=j("Milliseconds",!1);U("z",0,0,"zoneAbbr"),U("zz",0,0,"zoneName");var jn=g.prototype;jn.add=In,jn.calendar=Je,jn.clone=Qe,jn.diff=si,jn.endOf=yi,jn.format=li,jn.from=ui,jn.fromNow=ci,jn.to=pi,jn.toNow=fi,jn.get=Y,jn.invalidAt=Di,jn.isAfter=$e,jn.isBefore=ti,jn.isBetween=ei,jn.isSame=ii,jn.isSameOrAfter=oi,jn.isSameOrBefore=ni,jn.isValid=Si,jn.lang=Rn,jn.locale=mi,jn.localeData=vi,jn.max=Mn,jn.min=Sn,jn.parsingFlags=Mi,jn.set=G,jn.startOf=gi,jn.subtract=Nn,jn.toArray=xi,jn.toObject=ki,jn.toDate=wi,jn.toISOString=hi,jn.inspect=di,jn.toJSON=Oi,jn.toString=ai,jn.unix=_i,jn.valueOf=bi,jn.creationData=Ci,jn.year=sn,jn.isLeapYear=gt,jn.weekYear=Ei,jn.isoWeekYear=Pi,jn.quarter=jn.quarters=Ai,jn.month=lt,jn.daysInMonth=ut,jn.week=jn.weeks=Dt,jn.isoWeek=jn.isoWeeks=Ct,jn.weeksInYear=Ni,jn.isoWeeksInYear=Ii,jn.date=zn,jn.day=jn.days=At,jn.weekday=Lt,jn.isoWeekday=Ft,jn.dayOfYear=Li,jn.hour=jn.hours=fn,jn.minute=jn.minutes=An,jn.second=jn.seconds=Ln,jn.millisecond=jn.milliseconds=Bn,jn.utcOffset=Ne,jn.utc=ze,jn.local=Ae,jn.parseZone=Le,jn.hasAlignedHourOffset=Fe,jn.isDST=Be,jn.isLocal=He,jn.isUtcOffset=We,jn.isUtc=Ye,jn.isUTC=Ye,jn.zoneAbbr=Bi,jn.zoneName=ji,jn.dates=k("dates accessor is deprecated. Use date instead.",zn),jn.months=k("months accessor is deprecated. Use month instead",lt),jn.years=k("years accessor is deprecated. Use year instead",sn),jn.zone=k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Re),jn.isDSTShifted=k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",je);var Hn=C.prototype;Hn.calendar=T,Hn.longDateFormat=E,Hn.invalidDate=P,Hn.ordinal=I,Hn.preparse=Yi,Hn.postformat=Yi,Hn.relativeTime=N,Hn.pastFuture=R,Hn.set=M,Hn.months=st,Hn.monthsShort=rt,Hn.monthsParse=ht,Hn.monthsRegex=pt,Hn.monthsShortRegex=ct,Hn.week=Ot,Hn.firstDayOfYear=Mt,Hn.firstDayOfWeek=St,Hn.weekdays=Pt,Hn.weekdaysMin=Nt,Hn.weekdaysShort=It,Hn.weekdaysParse=zt,Hn.weekdaysRegex=Bt,Hn.weekdaysShortRegex=jt,Hn.weekdaysMinRegex=Ht,Hn.isPM=qt,Hn.meridiem=Xt,Qt("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10;return t+(1===_(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th")}}),e.lang=k("moment.lang is deprecated. Use moment.locale instead.",Qt),e.langData=k("moment.langData is deprecated. Use moment.localeData instead.",ee);var Wn=Math.abs,Yn=ho("ms"),Gn=ho("s"),Vn=ho("m"),Un=ho("h"),qn=ho("d"),Xn=ho("w"),Zn=ho("M"),Kn=ho("y"),Jn=uo("milliseconds"),Qn=uo("seconds"),$n=uo("minutes"),ts=uo("hours"),es=uo("days"),is=uo("months"),os=uo("years"),ns=Math.round,ss={ss:44,s:45,m:45,h:22,d:26,M:11},rs=Math.abs,as=Me.prototype;return as.isValid=Oe,as.abs=Qi,as.add=to,as.subtract=eo,as.as=ro,as.asMilliseconds=Yn,as.asSeconds=Gn,as.asMinutes=Vn,as.asHours=Un,as.asDays=qn,as.asWeeks=Xn,as.asMonths=Zn,as.asYears=Kn,as.valueOf=ao,as._bubble=oo,as.get=lo,as.milliseconds=Jn,as.seconds=Qn,as.minutes=$n,as.hours=ts,as.days=es,as.weeks=co,as.months=is,as.years=os,as.humanize=go,as.toISOString=yo,as.toString=yo,as.toJSON=yo,as.locale=mi,as.localeData=vi,as.toIsoString=k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",yo),as.lang=Rn,U("X",0,0,"unix"),U("x",0,0,"valueOf"),J("x",/[+-]?\d+/),J("X",/[+-]?\d+(\.\d{1,3})?/),et("X",function(t,e,i){i._d=new Date(1e3*parseFloat(t,10))}),et("x",function(t,e,i){i._d=new Date(_(t))}),e.version="2.18.0",function(t){bo=t}(be),e.fn=jn,e.min=we,e.max=xe,e.now=Dn,e.utc=u,e.unix=Hi,e.months=qi,e.isDate=a,e.locale=Qt,e.invalid=m,e.duration=Ge,e.isMoment=y,e.weekdays=Zi,e.parseZone=Wi,e.localeData=ee,e.isDuration=De,e.monthsShort=Xi,e.weekdaysMin=Ji,e.defineLocale=$t,e.updateLocale=te,e.locales=ie,e.weekdaysShort=Ki,e.normalizeUnits=A,e.relativeTimeRounding=mo,e.relativeTimeThreshold=vo,e.calendarFormat=Ke,e.prototype=jn,e})}).call(e,i(84)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){function i(t){throw new Error("Cannot find module '"+t+"'.")}i.keys=function(){return[]},i.resolve=i,t.exports=i,i.id=85},function(t,e){(function(e){function i(t,e,i){var o=e&&i||0,n=0;for(e=e||[],t.toLowerCase().replace(/[0-9a-f]{2}/g,function(t){n<16&&(e[o+n++]=u[t])});n<16;)e[o+n++]=0;return e}function o(t,e){var i=e||0,o=l;return o[t[i++]]+o[t[i++]]+o[t[i++]]+o[t[i++]]+"-"+o[t[i++]]+o[t[i++]]+"-"+o[t[i++]]+o[t[i++]]+"-"+o[t[i++]]+o[t[i++]]+"-"+o[t[i++]]+o[t[i++]]+o[t[i++]]+o[t[i++]]+o[t[i++]]+o[t[i++]]}function n(t,e,i){var n=e&&i||0,s=e||[];t=t||{};var r=void 0!==t.clockseq?t.clockseq:m,a=void 0!==t.msecs?t.msecs:(new Date).getTime(),h=void 0!==t.nsecs?t.nsecs:g+1,d=a-v+(h-g)/1e4;if(d<0&&void 0===t.clockseq&&(r=r+1&16383),(d<0||a>v)&&void 0===t.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");v=a,g=h,m=r,a+=122192928e5;var l=(1e4*(268435455&a)+h)%4294967296;s[n++]=l>>>24&255,s[n++]=l>>>16&255,s[n++]=l>>>8&255,s[n++]=255&l;var u=a/4294967296*1e4&268435455;s[n++]=u>>>8&255,s[n++]=255&u,s[n++]=u>>>24&15|16,s[n++]=u>>>16&255,s[n++]=r>>>8|128,s[n++]=255&r;for(var c=t.node||f,p=0;p<6;p++)s[n+p]=c[p];return e?e:o(s)}function s(t,e,i){var n=e&&i||0;"string"==typeof t&&(e="binary"==t?new Array(16):null,t=null),t=t||{};var s=t.random||(t.rng||r)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,e)for(var a=0;a<16;a++)e[n+a]=s[a];return e||o(s)}var r,a="undefined"!=typeof window?window:void 0!==e?e:null;if(a&&a.crypto&&crypto.getRandomValues){var h=new Uint8Array(16);r=function(){return crypto.getRandomValues(h),h}}if(!r){var d=new Array(16);r=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),d[e]=t>>>((3&e)<<3)&255;return d}}for(var l=[],u={},c=0;c<256;c++)l[c]=(c+256).toString(16).substr(1),u[l[c]]=c;var p=r(),f=[1|p[0],p[1],p[2],p[3],p[4],p[5]],m=16383&(p[6]<<8|p[7]),v=0,g=0,y=s;y.v1=n,y.v4=s,y.parse=i,y.unparse=o,t.exports=y}).call(e,function(){return this}())},function(t,e,i){e.util=i(1),e.DOMutil=i(88),e.DataSet=i(89),e.DataView=i(93),e.Queue=i(92),e.Graph3d=i(94),e.graph3d={Camera:i(102),Filter:i(107),Point2d:i(101),Point3d:i(100),Slider:i(108),StepNumber:i(109)},e.moment=i(82),e.Hammer=i(112),e.keycharm=i(115)},function(t,e){e.prepareElements=function(t){for(var e in t)t.hasOwnProperty(e)&&(t[e].redundant=t[e].used,t[e].used=[])},e.cleanupElements=function(t){for(var e in t)if(t.hasOwnProperty(e)&&t[e].redundant){for(var i=0;i<t[e].redundant.length;i++)t[e].redundant[i].parentNode.removeChild(t[e].redundant[i]);t[e].redundant=[]}},e.resetElements=function(t){e.prepareElements(t),e.cleanupElements(t),e.prepareElements(t)},e.getSVGElement=function(t,e,i){var o;return e.hasOwnProperty(t)?e[t].redundant.length>0?(o=e[t].redundant[0],e[t].redundant.shift()):(o=document.createElementNS("http://www.w3.org/2000/svg",t),i.appendChild(o)):(o=document.createElementNS("http://www.w3.org/2000/svg",t),e[t]={used:[],redundant:[]},i.appendChild(o)),e[t].used.push(o),o},e.getDOMElement=function(t,e,i,o){var n;return e.hasOwnProperty(t)?e[t].redundant.length>0?(n=e[t].redundant[0],e[t].redundant.shift()):(n=document.createElement(t),void 0!==o?i.insertBefore(n,o):i.appendChild(n)):(n=document.createElement(t),e[t]={used:[],redundant:[]},void 0!==o?i.insertBefore(n,o):i.appendChild(n)),e[t].used.push(n),n},e.drawPoint=function(t,i,o,n,s,r){var a;if("circle"==o.style?(a=e.getSVGElement("circle",n,s),a.setAttributeNS(null,"cx",t),a.setAttributeNS(null,"cy",i),a.setAttributeNS(null,"r",.5*o.size)):(a=e.getSVGElement("rect",n,s),a.setAttributeNS(null,"x",t-.5*o.size),a.setAttributeNS(null,"y",i-.5*o.size),a.setAttributeNS(null,"width",o.size),a.setAttributeNS(null,"height",o.size)),void 0!==o.styles&&a.setAttributeNS(null,"style",o.styles),a.setAttributeNS(null,"class",o.className+" vis-point"),r){var h=e.getSVGElement("text",n,s);r.xOffset&&(t+=r.xOffset),r.yOffset&&(i+=r.yOffset),r.content&&(h.textContent=r.content),r.className&&h.setAttributeNS(null,"class",r.className+" vis-label"),h.setAttributeNS(null,"x",t),h.setAttributeNS(null,"y",i)}return a},e.drawBar=function(t,i,o,n,s,r,a,h){if(0!=n){n<0&&(n*=-1,i-=n);var d=e.getSVGElement("rect",r,a);d.setAttributeNS(null,"x",t-.5*o),d.setAttributeNS(null,"y",i),d.setAttributeNS(null,"width",o),d.setAttributeNS(null,"height",n),d.setAttributeNS(null,"class",s),h&&d.setAttributeNS(null,"style",h)}}},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(t&&!Array.isArray(t)&&(e=t,t=null),this._options=e||{},this._data={},this.length=0,this._fieldId=this._options.fieldId||"id",this._type={},this._options.type)for(var i=(0,l.default)(this._options.type),o=0,n=i.length;o<n;o++){var s=i[o],r=this._options.type[s];this._type[s]="Date"==r||"ISODate"==r||"ASPDate"==r?"Date":r}if(this._options.convert)throw new Error('Option "convert" is deprecated. Use "type" instead.');this._subscribers={},t&&this.add(t),this.setOptions(e)}var s=i(90),r=o(s),a=i(62),h=o(a),d=i(58),l=o(d),u=i(1),c=i(92);n.prototype.setOptions=function(t){t&&void 0!==t.queue&&(t.queue===!1?this._queue&&(this._queue.destroy(),delete this._queue):(this._queue||(this._queue=c.extend(this,{replace:["add","update","remove"]})),"object"===(0,h.default)(t.queue)&&this._queue.setOptions(t.queue)))},n.prototype.on=function(t,e){var i=this._subscribers[t];i||(i=[],this._subscribers[t]=i),i.push({callback:e})},n.prototype.subscribe=function(){throw new Error("DataSet.subscribe is deprecated. Use DataSet.on instead.")},n.prototype.off=function(t,e){var i=this._subscribers[t];i&&(this._subscribers[t]=i.filter(function(t){return t.callback!=e}))},n.prototype.unsubscribe=function(){throw new Error("DataSet.unsubscribe is deprecated. Use DataSet.off instead.")},n.prototype._trigger=function(t,e,i){if("*"==t)throw new Error("Cannot trigger event *");var o=[];t in this._subscribers&&(o=o.concat(this._subscribers[t])),"*"in this._subscribers&&(o=o.concat(this._subscribers["*"]));for(var n=0,s=o.length;n<s;n++){var r=o[n];r.callback&&r.callback(t,e,i||null)}},n.prototype.add=function(t,e){var i,o=[],n=this;if(Array.isArray(t))for(var s=0,r=t.length;s<r;s++)i=n._addItem(t[s]),o.push(i);else{if(!t||"object"!==(void 0===t?"undefined":(0,h.default)(t)))throw new Error("Unknown dataType");i=n._addItem(t),o.push(i)}return o.length&&this._trigger("add",{items:o},e),o},n.prototype.update=function(t,e){var i=[],o=[],n=[],s=[],r=this,a=r._fieldId,d=function(t){var e=t[a];if(r._data[e]){var h=u.extend({},r._data[e]);e=r._updateItem(t),o.push(e),s.push(t),n.push(h)}else e=r._addItem(t),i.push(e)};if(Array.isArray(t))for(var l=0,c=t.length;l<c;l++)t[l]&&"object"===(0,h.default)(t[l])?d(t[l]):console.warn("Ignoring input item, which is not an object at index "+l);else{if(!t||"object"!==(void 0===t?"undefined":(0,h.default)(t)))throw new Error("Unknown dataType");d(t)}if(i.length&&this._trigger("add",{items:i},e),o.length){var p={items:o,oldData:n,data:s};this._trigger("update",p,e)}return i.concat(o)},n.prototype.get=function(t){var e,i,o,n=this,s=u.getType(arguments[0]);"String"==s||"Number"==s?(e=arguments[0],o=arguments[1]):"Array"==s?(i=arguments[0],o=arguments[1]):o=arguments[0];var r;if(o&&o.returnType){r=["Array","Object"].indexOf(o.returnType)==-1?"Array":o.returnType}else r="Array";var a,h,d,c,p,f=o&&o.type||this._options.type,m=o&&o.filter,v=[];if(void 0!=e)(a=n._getItem(e,f))&&m&&!m(a)&&(a=null);else if(void 0!=i)for(c=0,p=i.length;c<p;c++)a=n._getItem(i[c],f),m&&!m(a)||v.push(a);else for(h=(0,l.default)(this._data),c=0,p=h.length;c<p;c++)d=h[c],a=n._getItem(d,f),m&&!m(a)||v.push(a);if(o&&o.order&&void 0==e&&this._sort(v,o.order),o&&o.fields){var g=o.fields;if(void 0!=e)a=this._filterFields(a,g);else for(c=0,p=v.length;c<p;c++)v[c]=this._filterFields(v[c],g)}if("Object"==r){var y,b={};for(c=0,p=v.length;c<p;c++)y=v[c],b[y.id]=y;return b}return void 0!=e?a:v},n.prototype.getIds=function(t){var e,i,o,n,s,r=this._data,a=t&&t.filter,h=t&&t.order,d=t&&t.type||this._options.type,u=(0,l.default)(r),c=[];if(a)if(h){for(s=[],e=0,i=u.length;e<i;e++)o=u[e],n=this._getItem(o,d),a(n)&&s.push(n);for(this._sort(s,h),e=0,i=s.length;e<i;e++)c.push(s[e][this._fieldId])}else for(e=0,i=u.length;e<i;e++)o=u[e],n=this._getItem(o,d),a(n)&&c.push(n[this._fieldId]);else if(h){for(s=[],e=0,i=u.length;e<i;e++)o=u[e],s.push(r[o]);for(this._sort(s,h),e=0,i=s.length;e<i;e++)c.push(s[e][this._fieldId])}else for(e=0,i=u.length;e<i;e++)o=u[e],n=r[o],c.push(n[this._fieldId]);return c},n.prototype.getDataSet=function(){return this},n.prototype.forEach=function(t,e){var i,o,n,s,r=e&&e.filter,a=e&&e.type||this._options.type,h=this._data,d=(0,l.default)(h);if(e&&e.order){var u=this.get(e);for(i=0,o=u.length;i<o;i++)n=u[i],s=n[this._fieldId],t(n,s)}else for(i=0,o=d.length;i<o;i++)s=d[i],n=this._getItem(s,a),r&&!r(n)||t(n,s)},n.prototype.map=function(t,e){var i,o,n,s,r=e&&e.filter,a=e&&e.type||this._options.type,h=[],d=this._data,u=(0,l.default)(d);for(i=0,o=u.length;i<o;i++)n=u[i],s=this._getItem(n,a),r&&!r(s)||h.push(t(s,n));return e&&e.order&&this._sort(h,e.order),h},n.prototype._filterFields=function(t,e){if(!t)return t;var i,o,n={},s=(0,l.default)(t),r=s.length;if(Array.isArray(e))for(i=0;i<r;i++)o=s[i],e.indexOf(o)!=-1&&(n[o]=t[o]);else for(i=0;i<r;i++)o=s[i],e.hasOwnProperty(o)&&(n[e[o]]=t[o]);return n},n.prototype._sort=function(t,e){if(u.isString(e)){var i=e;t.sort(function(t,e){var o=t[i],n=e[i];return o>n?1:o<n?-1:0})}else{if("function"!=typeof e)throw new TypeError("Order must be a function or a string");t.sort(e)}},n.prototype.remove=function(t,e){var i,o,n,s,r=[],a=[],h=[];for(h=Array.isArray(t)?t:[t],i=0,o=h.length;i<o;i++)(s=this._remove(h[i]))&&void 0!=(n=s[this._fieldId])&&(r.push(n),a.push(s));return r.length&&this._trigger("remove",{items:r,oldData:a},e),r},n.prototype._remove=function(t){var e,i;return u.isNumber(t)||u.isString(t)?i=t:t&&"object"===(void 0===t?"undefined":(0,h.default)(t))&&(i=t[this._fieldId]),void 0!==i&&this._data[i]?(e=this._data[i],delete this._data[i],this.length--,e):null},n.prototype.clear=function(t){var e,i,o=(0,l.default)(this._data),n=[];for(e=0,i=o.length;e<i;e++)n.push(this._data[o[e]]);return this._data={},this.length=0,this._trigger("remove",{items:o,oldData:n},t),o},n.prototype.max=function(t){var e,i,o=this._data,n=(0,l.default)(o),s=null,r=null;for(e=0,i=n.length;e<i;e++){var a=n[e],h=o[a],d=h[t];null!=d&&(!s||d>r)&&(s=h,r=d)}return s},n.prototype.min=function(t){var e,i,o=this._data,n=(0,l.default)(o),s=null,r=null;for(e=0,i=n.length;e<i;e++){var a=n[e],h=o[a],d=h[t];null!=d&&(!s||d<r)&&(s=h,r=d)}return s},n.prototype.distinct=function(t){var e,i,o,n=this._data,s=(0,l.default)(n),r=[],a=this._options.type&&this._options.type[t]||null,h=0;for(e=0,o=s.length;e<o;e++){var d=s[e],c=n[d],p=c[t],f=!1;for(i=0;i<h;i++)if(r[i]==p){f=!0;break}f||void 0===p||(r[h]=p,h++)}if(a)for(e=0,o=r.length;e<o;e++)r[e]=u.convert(r[e],a);return r},n.prototype._addItem=function(t){var e=t[this._fieldId];if(void 0!=e){if(this._data[e])throw new Error("Cannot add item: item with id "+e+" already exists")}else e=u.randomUUID(),t[this._fieldId]=e;var i,o,n={},s=(0,l.default)(t);for(i=0,o=s.length;i<o;i++){var r=s[i],a=this._type[r];n[r]=u.convert(t[r],a)}return this._data[e]=n,this.length++,e},n.prototype._getItem=function(t,e){var i,o,n,s,r=this._data[t];if(!r)return null;var a={},h=(0,l.default)(r);if(e)for(n=0,s=h.length;n<s;n++)i=h[n],o=r[i],a[i]=u.convert(o,e[i]);else for(n=0,s=h.length;n<s;n++)i=h[n],o=r[i],a[i]=o;return a[this._fieldId]||(a[this._fieldId]=r.id),a},n.prototype._updateItem=function(t){var e=t[this._fieldId];if(void 0==e)throw new Error("Cannot update item: item has no id (item: "+(0,r.default)(t)+")");var i=this._data[e];if(!i)throw new Error("Cannot update item: no item with id "+e+" found");for(var o=(0,l.default)(t),n=0,s=o.length;n<s;n++){var a=o[n],h=this._type[a];i[a]=u.convert(t[a],h)}return e},t.exports=n},function(t,e,i){t.exports={default:i(91),__esModule:!0}},function(t,e,i){var o=i(17),n=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}},function(t,e){function i(t){this.delay=null,this.max=1/0,this._queue=[],this._timeout=null,this._extended=null,this.setOptions(t)}i.prototype.setOptions=function(t){t&&void 0!==t.delay&&(this.delay=t.delay),t&&void 0!==t.max&&(this.max=t.max),this._flushIfNeeded()},i.extend=function(t,e){var o=new i(e);if(void 0!==t.flush)throw new Error("Target object already has a property flush");t.flush=function(){o.flush()};var n=[{name:"flush",original:void 0}];if(e&&e.replace)for(var s=0;s<e.replace.length;s++){var r=e.replace[s];n.push({name:r,original:t[r]}),o.replace(t,r)}return o._extended={object:t,methods:n},o},i.prototype.destroy=function(){if(this.flush(),this._extended){for(var t=this._extended.object,e=this._extended.methods,i=0;i<e.length;i++){var o=e[i];o.original?t[o.name]=o.original:delete t[o.name]}this._extended=null}},i.prototype.replace=function(t,e){var i=this,o=t[e];if(!o)throw new Error("Method "+e+" undefined");t[e]=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];i.queue({args:t,fn:o,context:this})}},i.prototype.queue=function(t){"function"==typeof t?this._queue.push({fn:t}):this._queue.push(t),this._flushIfNeeded()},i.prototype._flushIfNeeded=function(){if(this._queue.length>this.max&&this.flush(),clearTimeout(this._timeout),this.queue.length>0&&"number"==typeof this.delay){var t=this;this._timeout=setTimeout(function(){t.flush()},this.delay)}},i.prototype.flush=function(){for(;this._queue.length>0;){var t=this._queue.shift();t.fn.apply(t.context||t.fn,t.args||[])}},t.exports=i},function(t,e,i){function o(t,e){this._data=null,this._ids={},this.length=0,this._options=e||{},this._fieldId="id",this._subscribers={};var i=this;this.listener=function(){i._onEvent.apply(i,arguments)},this.setData(t)}var n=i(58),s=function(t){return t&&t.__esModule?t:{default:t}}(n),r=i(1),a=i(89);o.prototype.setData=function(t){var e,i,o,n,s;if(this._data){for(this._data.off&&this._data.off("*",this.listener),e=this._data.getIds({filter:this._options&&this._options.filter}),s=[],o=0,n=e.length;o<n;o++)s.push(this._data._data[e[o]]);this._ids={},this.length=0,this._trigger("remove",{items:e,oldData:s})}if(this._data=t,this._data){
for(this._fieldId=this._options.fieldId||this._data&&this._data.options&&this._data.options.fieldId||"id",e=this._data.getIds({filter:this._options&&this._options.filter}),o=0,n=e.length;o<n;o++)i=e[o],this._ids[i]=!0;this.length=e.length,this._trigger("add",{items:e}),this._data.on&&this._data.on("*",this.listener)}},o.prototype.refresh=function(){var t,e,i,o=this._data.getIds({filter:this._options&&this._options.filter}),n=(0,s.default)(this._ids),r={},a=[],h=[],d=[];for(e=0,i=o.length;e<i;e++)t=o[e],r[t]=!0,this._ids[t]||(a.push(t),this._ids[t]=!0);for(e=0,i=n.length;e<i;e++)t=n[e],r[t]||(h.push(t),d.push(this._data._data[t]),delete this._ids[t]);this.length+=a.length-h.length,a.length&&this._trigger("add",{items:a}),h.length&&this._trigger("remove",{items:h,oldData:d})},o.prototype.get=function(t){var e,i,o,n=this,s=r.getType(arguments[0]);"String"==s||"Number"==s||"Array"==s?(e=arguments[0],i=arguments[1],o=arguments[2]):(i=arguments[0],o=arguments[1]);var a=r.extend({},this._options,i);this._options.filter&&i&&i.filter&&(a.filter=function(t){return n._options.filter(t)&&i.filter(t)});var h=[];return void 0!=e&&h.push(e),h.push(a),h.push(o),this._data&&this._data.get.apply(this._data,h)},o.prototype.getIds=function(t){var e;if(this._data){var i,o=this._options.filter;i=t&&t.filter?o?function(e){return o(e)&&t.filter(e)}:t.filter:o,e=this._data.getIds({filter:i,order:t&&t.order})}else e=[];return e},o.prototype.map=function(t,e){var i=[];if(this._data){var o,n=this._options.filter;o=e&&e.filter?n?function(t){return n(t)&&e.filter(t)}:e.filter:n,i=this._data.map(t,{filter:o,order:e&&e.order})}else i=[];return i},o.prototype.getDataSet=function(){for(var t=this;t instanceof o;)t=t._data;return t||null},o.prototype._onEvent=function(t,e,i){var o,n,s,r,a=e&&e.items,h=[],d=[],l=[],u=[],c=[],p=[];if(a&&this._data){switch(t){case"add":for(o=0,n=a.length;o<n;o++)s=a[o],(r=this.get(s))&&(this._ids[s]=!0,h.push(s));break;case"update":for(o=0,n=a.length;o<n;o++)s=a[o],r=this.get(s),r?this._ids[s]?(d.push(s),c.push(e.data[o]),u.push(e.oldData[o])):(this._ids[s]=!0,h.push(s)):this._ids[s]&&(delete this._ids[s],l.push(s),p.push(e.oldData[o]));break;case"remove":for(o=0,n=a.length;o<n;o++)s=a[o],this._ids[s]&&(delete this._ids[s],l.push(s),p.push(e.oldData[o]))}this.length+=h.length-l.length,h.length&&this._trigger("add",{items:h},i),d.length&&this._trigger("update",{items:d,oldData:u,data:c},i),l.length&&this._trigger("remove",{items:l,oldData:p},i)}},o.prototype.on=a.prototype.on,o.prototype.off=a.prototype.off,o.prototype._trigger=a.prototype._trigger,o.prototype.subscribe=o.prototype.on,o.prototype.unsubscribe=o.prototype.off,t.exports=o},function(t,e,i){function o(t,e,i){if(!(this instanceof o))throw new SyntaxError("Constructor must be called with the new operator");this.containerElement=t,this.dataTable=null,this.dataPoints=null,this.create(),y.setDefaults(_,this),this.colX=void 0,this.colY=void 0,this.colZ=void 0,this.colValue=void 0,this.colFilter=void 0,this.setOptions(i),e&&this.setData(e)}function n(t){return"clientX"in t?t.clientX:t.targetTouches[0]&&t.targetTouches[0].clientX||0}function s(t){return"clientY"in t?t.clientY:t.targetTouches[0]&&t.targetTouches[0].clientY||0}var r=i(95),a=function(t){return t&&t.__esModule?t:{default:t}}(r),h=i(99),d=i(89),l=i(93),u=i(1),c=i(100),p=i(101),f=(i(102),i(107)),m=i(108),v=i(109),g=i(110),y=i(111);o.STYLE=y.STYLE;var b=void 0,_={width:"400px",height:"400px",filterLabel:"time",legendLabel:"value",xLabel:"x",yLabel:"y",zLabel:"z",xValueLabel:function(t){return t},yValueLabel:function(t){return t},zValueLabel:function(t){return t},showXAxis:!0,showYAxis:!0,showZAxis:!0,showGrid:!0,showPerspective:!0,showShadow:!1,keepAspectRatio:!0,verticalRatio:.5,dotSizeRatio:.02,showAnimationControls:b,animationInterval:1e3,animationPreload:!1,animationAutoStart:b,axisColor:"#4D4D4D",gridColor:"#D3D3D3",xCenter:"55%",yCenter:"50%",style:o.STYLE.DOT,tooltip:!1,tooltipStyle:{content:{padding:"10px",border:"1px solid #4d4d4d",color:"#1a1a1a",background:"rgba(255,255,255,0.7)",borderRadius:"2px",boxShadow:"5px 5px 10px rgba(128,128,128,0.5)"},line:{height:"40px",width:"0",borderLeft:"1px solid #4d4d4d"},dot:{height:"0",width:"0",border:"5px solid #4d4d4d",borderRadius:"5px"}},showLegend:b,backgroundColor:b,dataColor:{fill:"#7DC1FF",stroke:"#3267D2",strokeWidth:1},cameraPosition:{horizontal:1,vertical:.5,distance:1.7},xBarWidth:b,yBarWidth:b,valueMin:b,valueMax:b,xMin:b,xMax:b,xStep:b,yMin:b,yMax:b,yStep:b,zMin:b,zMax:b,zStep:b};h(o.prototype),o.prototype._setScale=function(){this.scale=new c(1/this.xRange.range(),1/this.yRange.range(),1/this.zRange.range()),this.keepAspectRatio&&(this.scale.x<this.scale.y?this.scale.y=this.scale.x:this.scale.x=this.scale.y),this.scale.z*=this.verticalRatio,void 0!==this.valueRange&&(this.scale.value=1/this.valueRange.range());var t=this.xRange.center()*this.scale.x,e=this.yRange.center()*this.scale.y,i=this.zRange.center()*this.scale.z;this.camera.setArmLocation(t,e,i)},o.prototype._convert3Dto2D=function(t){var e=this._convertPointToTranslation(t);return this._convertTranslationToScreen(e)},o.prototype._convertPointToTranslation=function(t){var e=this.camera.getCameraLocation(),i=this.camera.getCameraRotation(),o=t.x*this.scale.x,n=t.y*this.scale.y,s=t.z*this.scale.z,r=e.x,a=e.y,h=e.z,d=Math.sin(i.x),l=Math.cos(i.x),u=Math.sin(i.y),p=Math.cos(i.y),f=Math.sin(i.z),m=Math.cos(i.z);return new c(p*(f*(n-a)+m*(o-r))-u*(s-h),d*(p*(s-h)+u*(f*(n-a)+m*(o-r)))+l*(m*(n-a)-f*(o-r)),l*(p*(s-h)+u*(f*(n-a)+m*(o-r)))-d*(m*(n-a)-f*(o-r)))},o.prototype._convertTranslationToScreen=function(t){var e,i,o=this.eye.x,n=this.eye.y,s=this.eye.z,r=t.x,a=t.y,h=t.z;return this.showPerspective?(e=s/h*(r-o),i=s/h*(a-n)):(e=r*-(s/this.camera.getArmLength()),i=a*-(s/this.camera.getArmLength())),new p(this.currentXCenter+e*this.frame.canvas.clientWidth,this.currentYCenter-i*this.frame.canvas.clientWidth)},o.prototype._calcTranslations=function(t,e){void 0===e&&(e=!0);for(var i=0;i<t.length;i++){var o=t[i];o.trans=this._convertPointToTranslation(o.point),o.screen=this._convertTranslationToScreen(o.trans);var n=this._convertPointToTranslation(o.bottom);o.dist=this.showPerspective?n.length():-n.z}if(e){var s=function(t,e){return e.dist-t.dist};t.sort(s)}},o.prototype.getNumberOfRows=function(t){return t.length},o.prototype.getNumberOfColumns=function(t){var e=0;for(var i in t[0])t[0].hasOwnProperty(i)&&e++;return e},o.prototype.getDistinctValues=function(t,e){for(var i=[],o=0;o<t.length;o++)i.indexOf(t[o][e])==-1&&i.push(t[o][e]);return i.sort(function(t,e){return t-e})},o.prototype.getSmallestDifference=function(t,e){for(var i=this.getDistinctValues(t,e),o=null,n=1;n<i.length;n++){var s=i[n]-i[n-1];(null==o||o>s)&&(o=s)}return o},o.prototype.getColumnRange=function(t,e){for(var i=new g,o=0;o<t.length;o++){var n=t[o][e];i.adjust(n)}return i},o.prototype._checkValueField=function(t){if(this.style===o.STYLE.BARCOLOR||this.style===o.STYLE.BARSIZE||this.style===o.STYLE.DOTCOLOR||this.style===o.STYLE.DOTSIZE){if(void 0===this.colValue)throw new Error("Expected data to have  field 'style'  for graph style '"+this.style+"'");if(void 0===t[0][this.colValue])throw new Error("Expected data to have  field '"+this.colValue+"'  for graph style '"+this.style+"'")}},o.prototype._setRangeDefaults=function(t,e,i){void 0!==e&&(t.min=e),void 0!==i&&(t.max=i),t.max<=t.min&&(t.max=t.min+1)},o.prototype._dataInitialize=function(t,e){var i=this;if(this.dataSet&&this.dataSet.off("*",this._onChange),void 0!==t){Array.isArray(t)&&(t=new d(t));var n;if(!(t instanceof d||t instanceof l))throw new Error("Array, DataSet, or DataView expected");if(n=t.get(),0!=n.length){this.dataSet=t,this.dataTable=n,this._onChange=function(){i.setData(i.dataSet)},this.dataSet.on("*",this._onChange),this.colX="x",this.colY="y",this.colZ="z";var s=this.style==o.STYLE.BAR||this.style==o.STYLE.BARCOLOR||this.style==o.STYLE.BARSIZE;s&&(void 0!==this.defaultXBarWidth?this.xBarWidth=this.defaultXBarWidth:this.xBarWidth=this.getSmallestDifference(n,this.colX)||1,void 0!==this.defaultYBarWidth?this.yBarWidth=this.defaultYBarWidth:this.yBarWidth=this.getSmallestDifference(n,this.colY)||1);var r=this.getColumnRange(n,this.colX);s&&r.expand(this.xBarWidth/2),this._setRangeDefaults(r,this.defaultXMin,this.defaultXMax),this.xRange=r,this.xStep=void 0!==this.defaultXStep?this.defaultXStep:r.range()/5;var a=this.getColumnRange(n,this.colY);s&&a.expand(this.yBarWidth/2),this._setRangeDefaults(a,this.defaultYMin,this.defaultYMax),this.yRange=a,this.yStep=void 0!==this.defaultYStep?this.defaultYStep:a.range()/5;var h=this.getColumnRange(n,this.colZ);if(this._setRangeDefaults(h,this.defaultZMin,this.defaultZMax),this.zRange=h,this.zStep=void 0!==this.defaultZStep?this.defaultZStep:h.range()/5,n[0].hasOwnProperty("style")){this.colValue="style";var u=this.getColumnRange(n,this.colValue);this._setRangeDefaults(u,this.defaultValueMin,this.defaultValueMax),this.valueRange=u}n[0].hasOwnProperty("filter")&&(this.colFilter="filter",void 0===this.dataFilter&&(this.dataFilter=new f(t,this.colFilter,this),this.dataFilter.setOnLoadCallback(function(){i.redraw()}))),this._setScale()}}},o.prototype._getDataPoints=function(t){var e,i,n,s,r,a,h=[];if(this.style===o.STYLE.GRID||this.style===o.STYLE.SURFACE){var d=[],l=[];for(n=0;n<this.getNumberOfRows(t);n++)e=t[n][this.colX]||0,i=t[n][this.colY]||0,d.indexOf(e)===-1&&d.push(e),l.indexOf(i)===-1&&l.push(i);var u=function(t,e){return t-e};d.sort(u),l.sort(u);var p=[];for(n=0;n<t.length;n++){e=t[n][this.colX]||0,i=t[n][this.colY]||0,s=t[n][this.colZ]||0;var f=d.indexOf(e),m=l.indexOf(i);void 0===p[f]&&(p[f]=[]);var v=new c;v.x=e,v.y=i,v.z=s,v.data=t[n],r={},r.point=v,r.trans=void 0,r.screen=void 0,r.bottom=new c(e,i,this.zRange.min),p[f][m]=r,h.push(r)}for(e=0;e<p.length;e++)for(i=0;i<p[e].length;i++)p[e][i]&&(p[e][i].pointRight=e<p.length-1?p[e+1][i]:void 0,p[e][i].pointTop=i<p[e].length-1?p[e][i+1]:void 0,p[e][i].pointCross=e<p.length-1&&i<p[e].length-1?p[e+1][i+1]:void 0)}else for(this._checkValueField(t),n=0;n<t.length;n++)a=new c,a.x=t[n][this.colX]||0,a.y=t[n][this.colY]||0,a.z=t[n][this.colZ]||0,a.data=t[n],void 0!==this.colValue&&(a.value=t[n][this.colValue]||0),r={},r.point=a,r.bottom=new c(a.x,a.y,this.zRange.min),r.trans=void 0,r.screen=void 0,this.style===o.STYLE.LINE&&n>0&&(h[n-1].pointNext=r),h.push(r);return h},o.prototype.create=function(){for(;this.containerElement.hasChildNodes();)this.containerElement.removeChild(this.containerElement.firstChild);this.frame=document.createElement("div"),this.frame.style.position="relative",this.frame.style.overflow="hidden",this.frame.canvas=document.createElement("canvas"),this.frame.canvas.style.position="relative",this.frame.appendChild(this.frame.canvas);var t=document.createElement("DIV");t.style.color="red",t.style.fontWeight="bold",t.style.padding="10px",t.innerHTML="Error: your browser does not support HTML canvas",this.frame.canvas.appendChild(t),this.frame.filter=document.createElement("div"),this.frame.filter.style.position="absolute",this.frame.filter.style.bottom="0px",this.frame.filter.style.left="0px",this.frame.filter.style.width="100%",this.frame.appendChild(this.frame.filter);var e=this,i=function(t){e._onMouseDown(t)},o=function(t){e._onTouchStart(t)},n=function(t){e._onWheel(t)},s=function(t){e._onTooltip(t)},r=function(t){e._onClick(t)};u.addEventListener(this.frame.canvas,"mousedown",i),u.addEventListener(this.frame.canvas,"touchstart",o),u.addEventListener(this.frame.canvas,"mousewheel",n),u.addEventListener(this.frame.canvas,"mousemove",s),u.addEventListener(this.frame.canvas,"click",r),this.containerElement.appendChild(this.frame)},o.prototype._setSize=function(t,e){this.frame.style.width=t,this.frame.style.height=e,this._resizeCanvas()},o.prototype._resizeCanvas=function(){this.frame.canvas.style.width="100%",this.frame.canvas.style.height="100%",this.frame.canvas.width=this.frame.canvas.clientWidth,this.frame.canvas.height=this.frame.canvas.clientHeight,this.frame.filter.style.width=this.frame.canvas.clientWidth-20+"px"},o.prototype.animationStart=function(){if(!this.frame.filter||!this.frame.filter.slider)throw new Error("No animation available");this.frame.filter.slider.play()},o.prototype.animationStop=function(){this.frame.filter&&this.frame.filter.slider&&this.frame.filter.slider.stop()},o.prototype._resizeCenter=function(){"%"===this.xCenter.charAt(this.xCenter.length-1)?this.currentXCenter=parseFloat(this.xCenter)/100*this.frame.canvas.clientWidth:this.currentXCenter=parseFloat(this.xCenter),"%"===this.yCenter.charAt(this.yCenter.length-1)?this.currentYCenter=parseFloat(this.yCenter)/100*(this.frame.canvas.clientHeight-this.frame.filter.clientHeight):this.currentYCenter=parseFloat(this.yCenter)},o.prototype.getCameraPosition=function(){var t=this.camera.getArmRotation();return t.distance=this.camera.getArmLength(),t},o.prototype._readData=function(t){this._dataInitialize(t,this.style),this.dataFilter?this.dataPoints=this.dataFilter._getDataPoints():this.dataPoints=this._getDataPoints(this.dataTable),this._redrawFilter()},o.prototype.setData=function(t){this._readData(t),this.redraw(),this.animationAutoStart&&this.dataFilter&&this.animationStart()},o.prototype.setOptions=function(t){this.animationStop(),y.setOptions(t,this),this.setPointDrawingMethod(),this._setSize(this.width,this.height),this.dataTable&&this.setData(this.dataTable),this.animationAutoStart&&this.dataFilter&&this.animationStart()},o.prototype.setPointDrawingMethod=function(){var t=void 0;switch(this.style){case o.STYLE.BAR:t=o.prototype._redrawBarGraphPoint;break;case o.STYLE.BARCOLOR:t=o.prototype._redrawBarColorGraphPoint;break;case o.STYLE.BARSIZE:t=o.prototype._redrawBarSizeGraphPoint;break;case o.STYLE.DOT:t=o.prototype._redrawDotGraphPoint;break;case o.STYLE.DOTLINE:t=o.prototype._redrawDotLineGraphPoint;break;case o.STYLE.DOTCOLOR:t=o.prototype._redrawDotColorGraphPoint;break;case o.STYLE.DOTSIZE:t=o.prototype._redrawDotSizeGraphPoint;break;case o.STYLE.SURFACE:t=o.prototype._redrawSurfaceGraphPoint;break;case o.STYLE.GRID:t=o.prototype._redrawGridGraphPoint;break;case o.STYLE.LINE:t=o.prototype._redrawLineGraphPoint;break;default:throw new Error("Can not determine point drawing method for graph style '"+this.style+"'")}this._pointDrawingMethod=t},o.prototype.redraw=function(){if(void 0===this.dataPoints)throw new Error("Graph data not initialized");this._resizeCanvas(),this._resizeCenter(),this._redrawSlider(),this._redrawClear(),this._redrawAxis(),this._redrawDataGraph(),this._redrawInfo(),this._redrawLegend()},o.prototype._getContext=function(){var t=this.frame.canvas,e=t.getContext("2d");return e.lineJoin="round",e.lineCap="round",e},o.prototype._redrawClear=function(){var t=this.frame.canvas;t.getContext("2d").clearRect(0,0,t.width,t.height)},o.prototype._dotSize=function(){return this.frame.clientWidth*this.dotSizeRatio},o.prototype._getLegendWidth=function(){var t;if(this.style===o.STYLE.DOTSIZE){var e=this._dotSize();t=e/2+2*e}else t=this.style===o.STYLE.BARSIZE?this.xBarWidth:20;return t},o.prototype._redrawLegend=function(){if(this.showLegend===!0&&this.style!==o.STYLE.LINE&&this.style!==o.STYLE.BARSIZE){var t=this.style===o.STYLE.BARSIZE||this.style===o.STYLE.DOTSIZE,e=this.style===o.STYLE.DOTSIZE||this.style===o.STYLE.DOTCOLOR||this.style===o.STYLE.BARCOLOR,i=Math.max(.25*this.frame.clientHeight,100),n=this.margin,s=this._getLegendWidth(),r=this.frame.clientWidth-this.margin,a=r-s,h=n+i,d=this._getContext();if(d.lineWidth=1,d.font="14px arial",t===!1){var l,u=i;for(l=0;l<u;l++){var c=(l-0)/(u-0),f=240*c,m=this._hsv2rgb(f,1,1);d.strokeStyle=m,d.beginPath(),d.moveTo(a,n+l),d.lineTo(r,n+l),d.stroke()}d.strokeStyle=this.axisColor,d.strokeRect(a,n,s,i)}else{var g;if(this.style===o.STYLE.DOTSIZE){g=this._dotSize()/2}else this.style,o.STYLE.BARSIZE;d.strokeStyle=this.axisColor,d.fillStyle=this.dataColor.fill,d.beginPath(),d.moveTo(a,n),d.lineTo(r,n),d.lineTo(r-s+g,h),d.lineTo(a,h),d.closePath(),d.fill(),d.stroke()}var y=e?this.valueRange.min:this.zRange.min,b=e?this.valueRange.max:this.zRange.max,_=new v(y,b,(b-y)/5,!0);_.start(!0);for(var l,w,x;!_.end();)l=h-(_.getCurrent()-y)/(b-y)*i,w=new p(a-5,l),x=new p(a,l),this._line(d,w,x),d.textAlign="right",d.textBaseline="middle",d.fillStyle=this.axisColor,d.fillText(_.getCurrent(),a-10,l),_.next();d.textAlign="right",d.textBaseline="top";var k=this.legendLabel;d.fillText(k,r,h+this.margin)}},o.prototype._redrawFilter=function(){if(this.frame.filter.innerHTML="",this.dataFilter){var t={visible:this.showAnimationControls},e=new m(this.frame.filter,t);this.frame.filter.slider=e,this.frame.filter.style.padding="10px",e.setValues(this.dataFilter.values),e.setPlayInterval(this.animationInterval);var i=this,o=function(){var t=e.getIndex();i.dataFilter.selectValue(t),i.dataPoints=i.dataFilter._getDataPoints(),i.redraw()};e.setOnChangeCallback(o)}else this.frame.filter.slider=void 0},o.prototype._redrawSlider=function(){void 0!==this.frame.filter.slider&&this.frame.filter.slider.redraw()},o.prototype._redrawInfo=function(){if(this.dataFilter){var t=this._getContext();t.font="14px arial",t.lineStyle="gray",t.fillStyle="gray",t.textAlign="left",t.textBaseline="top";var e=this.margin,i=this.margin;t.fillText(this.dataFilter.getLabel()+": "+this.dataFilter.getSelectedValue(),e,i)}},o.prototype._line=function(t,e,i,o){void 0!==o&&(t.strokeStyle=o),t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(i.x,i.y),t.stroke()},o.prototype.drawAxisLabelX=function(t,e,i,o,n){void 0===n&&(n=0);var s=this._convert3Dto2D(e);Math.cos(2*o)>0?(t.textAlign="center",t.textBaseline="top",s.y+=n):Math.sin(2*o)<0?(t.textAlign="right",t.textBaseline="middle"):(t.textAlign="left",t.textBaseline="middle"),t.fillStyle=this.axisColor,t.fillText(i,s.x,s.y)},o.prototype.drawAxisLabelY=function(t,e,i,o,n){void 0===n&&(n=0);var s=this._convert3Dto2D(e);Math.cos(2*o)<0?(t.textAlign="center",t.textBaseline="top",s.y+=n):Math.sin(2*o)>0?(t.textAlign="right",t.textBaseline="middle"):(t.textAlign="left",t.textBaseline="middle"),t.fillStyle=this.axisColor,t.fillText(i,s.x,s.y)},o.prototype.drawAxisLabelZ=function(t,e,i,o){void 0===o&&(o=0);var n=this._convert3Dto2D(e);t.textAlign="right",t.textBaseline="middle",t.fillStyle=this.axisColor,t.fillText(i,n.x-o,n.y)},o.prototype._line3d=function(t,e,i,o){var n=this._convert3Dto2D(e),s=this._convert3Dto2D(i);this._line(t,n,s,o)},o.prototype._redrawAxis=function(){var t,e,i,o,n,s,r,a,h,d,l,u=this._getContext();u.font=24/this.camera.getArmLength()+"px arial";var f=.025/this.scale.x,m=.025/this.scale.y,g=5/this.camera.getArmLength(),y=this.camera.getArmRotation().horizontal,b=new p(Math.cos(y),Math.sin(y)),_=this.xRange,w=this.yRange,x=this.zRange;for(u.lineWidth=1,o=void 0===this.defaultXStep,i=new v(_.min,_.max,this.xStep,o),i.start(!0);!i.end();){var k=i.getCurrent();if(this.showGrid?(t=new c(k,w.min,x.min),e=new c(k,w.max,x.min),this._line3d(u,t,e,this.gridColor)):this.showXAxis&&(t=new c(k,w.min,x.min),e=new c(k,w.min+f,x.min),this._line3d(u,t,e,this.axisColor),t=new c(k,w.max,x.min),e=new c(k,w.max-f,x.min),this._line3d(u,t,e,this.axisColor)),this.showXAxis){r=b.x>0?w.min:w.max;var O=new c(k,r,x.min),S="  "+this.xValueLabel(k)+"  ";this.drawAxisLabelX(u,O,S,y,g)}i.next()}for(u.lineWidth=1,o=void 0===this.defaultYStep,i=new v(w.min,w.max,this.yStep,o),i.start(!0);!i.end();){var M=i.getCurrent();if(this.showGrid?(t=new c(_.min,M,x.min),e=new c(_.max,M,x.min),this._line3d(u,t,e,this.gridColor)):this.showYAxis&&(t=new c(_.min,M,x.min),e=new c(_.min+m,M,x.min),this._line3d(u,t,e,this.axisColor),t=new c(_.max,M,x.min),e=new c(_.max-m,M,x.min),this._line3d(u,t,e,this.axisColor)),this.showYAxis){s=b.y>0?_.min:_.max,O=new c(s,M,x.min);var S="  "+this.yValueLabel(M)+"  ";this.drawAxisLabelY(u,O,S,y,g)}i.next()}if(this.showZAxis){for(u.lineWidth=1,o=void 0===this.defaultZStep,i=new v(x.min,x.max,this.zStep,o),i.start(!0),s=b.x>0?_.min:_.max,r=b.y<0?w.min:w.max;!i.end();){var D=i.getCurrent(),C=new c(s,r,D),T=this._convert3Dto2D(C);e=new p(T.x-g,T.y),this._line(u,T,e,this.axisColor);var S=this.zValueLabel(D)+" ";this.drawAxisLabelZ(u,C,S,5),i.next()}u.lineWidth=1,t=new c(s,r,x.min),e=new c(s,r,x.max),this._line3d(u,t,e,this.axisColor)}if(this.showXAxis){var E,P;u.lineWidth=1,E=new c(_.min,w.min,x.min),P=new c(_.max,w.min,x.min),this._line3d(u,E,P,this.axisColor),E=new c(_.min,w.max,x.min),P=new c(_.max,w.max,x.min),this._line3d(u,E,P,this.axisColor)}this.showYAxis&&(u.lineWidth=1,t=new c(_.min,w.min,x.min),e=new c(_.min,w.max,x.min),this._line3d(u,t,e,this.axisColor),t=new c(_.max,w.min,x.min),e=new c(_.max,w.max,x.min),this._line3d(u,t,e,this.axisColor));var I=this.xLabel;I.length>0&&this.showXAxis&&(l=.1/this.scale.y,s=(_.max+3*_.min)/4,r=b.x>0?w.min-l:w.max+l,n=new c(s,r,x.min),this.drawAxisLabelX(u,n,I,y));var N=this.yLabel;N.length>0&&this.showYAxis&&(d=.1/this.scale.x,s=b.y>0?_.min-d:_.max+d,r=(w.max+3*w.min)/4,n=new c(s,r,x.min),this.drawAxisLabelY(u,n,N,y));var R=this.zLabel;R.length>0&&this.showZAxis&&(h=30,s=b.x>0?_.min:_.max,r=b.y<0?w.min:w.max,a=(x.max+3*x.min)/4,n=new c(s,r,a),this.drawAxisLabelZ(u,n,R,h))},o.prototype._hsv2rgb=function(t,e,i){var o,n,s,r,a,h;switch(r=i*e,a=Math.floor(t/60),h=r*(1-Math.abs(t/60%2-1)),a){case 0:o=r,n=h,s=0;break;case 1:o=h,n=r,s=0;break;case 2:o=0,n=r,s=h;break;case 3:o=0,n=h,s=r;break;case 4:o=h,n=0,s=r;break;case 5:o=r,n=0,s=h;break;default:o=0,n=0,s=0}return"RGB("+parseInt(255*o)+","+parseInt(255*n)+","+parseInt(255*s)+")"},o.prototype._getStrokeWidth=function(t){return void 0!==t?this.showPerspective?1/-t.trans.z*this.dataColor.strokeWidth:-(this.eye.z/this.camera.getArmLength())*this.dataColor.strokeWidth:this.dataColor.strokeWidth},o.prototype._redrawBar=function(t,e,i,o,n,s){var r,a,h=this,d=e.point,l=this.zRange.min,u=[{point:new c(d.x-i,d.y-o,d.z)},{point:new c(d.x+i,d.y-o,d.z)},{point:new c(d.x+i,d.y+o,d.z)},{point:new c(d.x-i,d.y+o,d.z)}],p=[{point:new c(d.x-i,d.y-o,l)},{point:new c(d.x+i,d.y-o,l)},{point:new c(d.x+i,d.y+o,l)},{point:new c(d.x-i,d.y+o,l)}];u.forEach(function(t){t.screen=h._convert3Dto2D(t.point)}),p.forEach(function(t){t.screen=h._convert3Dto2D(t.point)});var f=[{corners:u,center:c.avg(p[0].point,p[2].point)},{corners:[u[0],u[1],p[1],p[0]],center:c.avg(p[1].point,p[0].point)},{corners:[u[1],u[2],p[2],p[1]],center:c.avg(p[2].point,p[1].point)},{corners:[u[2],u[3],p[3],p[2]],center:c.avg(p[3].point,p[2].point)},{corners:[u[3],u[0],p[0],p[3]],center:c.avg(p[0].point,p[3].point)}];for(e.surfaces=f,r=0;r<f.length;r++){a=f[r];var m=this._convertPointToTranslation(a.center);a.dist=this.showPerspective?m.length():-m.z}for(f.sort(function(t,e){var i=e.dist-t.dist;return i?i:t.corners===u?1:e.corners===u?-1:0}),t.lineWidth=this._getStrokeWidth(e),t.strokeStyle=s,t.fillStyle=n,r=2;r<f.length;r++)a=f[r],this._polygon(t,a.corners)},o.prototype._polygon=function(t,e,i,o){if(!(e.length<2)){void 0!==i&&(t.fillStyle=i),void 0!==o&&(t.strokeStyle=o),t.beginPath(),t.moveTo(e[0].screen.x,e[0].screen.y);for(var n=1;n<e.length;++n){var s=e[n];t.lineTo(s.screen.x,s.screen.y)}t.closePath(),t.fill(),t.stroke()}},o.prototype._drawCircle=function(t,e,i,o,n){var s=this._calcRadius(e,n);t.lineWidth=this._getStrokeWidth(e),t.strokeStyle=o,t.fillStyle=i,t.beginPath(),t.arc(e.screen.x,e.screen.y,s,0,2*Math.PI,!0),t.fill(),t.stroke()},o.prototype._getColorsRegular=function(t){var e=240*(1-(t.point.z-this.zRange.min)*this.scale.z/this.verticalRatio);return{fill:this._hsv2rgb(e,1,1),border:this._hsv2rgb(e,1,.8)}},o.prototype._getColorsColor=function(t){var e,i;if("string"==typeof t.point.value)e=t.point.value,i=t.point.value;else{var o=240*(1-(t.point.value-this.valueRange.min)*this.scale.value);e=this._hsv2rgb(o,1,1),i=this._hsv2rgb(o,1,.8)}return{fill:e,border:i}},o.prototype._getColorsSize=function(){return{fill:this.dataColor.fill,border:this.dataColor.stroke}},o.prototype._calcRadius=function(t,e){void 0===e&&(e=this._dotSize());var i;return i=this.showPerspective?e/-t.trans.z:e*-(this.eye.z/this.camera.getArmLength()),i<0&&(i=0),i},o.prototype._redrawBarGraphPoint=function(t,e){var i=this.xBarWidth/2,o=this.yBarWidth/2,n=this._getColorsRegular(e);this._redrawBar(t,e,i,o,n.fill,n.border)},o.prototype._redrawBarColorGraphPoint=function(t,e){var i=this.xBarWidth/2,o=this.yBarWidth/2,n=this._getColorsColor(e);this._redrawBar(t,e,i,o,n.fill,n.border)},o.prototype._redrawBarSizeGraphPoint=function(t,e){var i=(e.point.value-this.valueRange.min)/this.valueRange.range(),o=this.xBarWidth/2*(.8*i+.2),n=this.yBarWidth/2*(.8*i+.2),s=this._getColorsSize();this._redrawBar(t,e,o,n,s.fill,s.border)},o.prototype._redrawDotGraphPoint=function(t,e){var i=this._getColorsRegular(e);this._drawCircle(t,e,i.fill,i.border)},o.prototype._redrawDotLineGraphPoint=function(t,e){var i=this._convert3Dto2D(e.bottom);t.lineWidth=1,this._line(t,i,e.screen,this.gridColor),this._redrawDotGraphPoint(t,e)},o.prototype._redrawDotColorGraphPoint=function(t,e){var i=this._getColorsColor(e);this._drawCircle(t,e,i.fill,i.border)},o.prototype._redrawDotSizeGraphPoint=function(t,e){var i=this._dotSize(),o=(e.point.value-this.valueRange.min)/this.valueRange.range(),n=i/2+2*i*o,s=this._getColorsSize();this._drawCircle(t,e,s.fill,s.border,n)},o.prototype._redrawSurfaceGraphPoint=function(t,e){var i=e.pointRight,o=e.pointTop,n=e.pointCross;if(void 0!==e&&void 0!==i&&void 0!==o&&void 0!==n){var s,r,a=!0;if(this.showGrayBottom||this.showShadow){var h=c.subtract(n.trans,e.trans),d=c.subtract(o.trans,i.trans),l=c.crossProduct(h,d),u=l.length();a=l.z>0}if(a){var p,f=(e.point.z+i.point.z+o.point.z+n.point.z)/4,m=240*(1-(f-this.zRange.min)*this.scale.z/this.verticalRatio);this.showShadow?(p=Math.min(1+l.x/u/2,1),s=this._hsv2rgb(m,1,p),r=s):(p=1,s=this._hsv2rgb(m,1,p),r=this.axisColor)}else s="gray",r=this.axisColor;t.lineWidth=this._getStrokeWidth(e);var v=[e,i,n,o];this._polygon(t,v,s,r)}},o.prototype._drawGridLine=function(t,e,i){if(void 0!==e&&void 0!==i){var o=(e.point.z+i.point.z)/2,n=240*(1-(o-this.zRange.min)*this.scale.z/this.verticalRatio);t.lineWidth=2*this._getStrokeWidth(e),t.strokeStyle=this._hsv2rgb(n,1,1),this._line(t,e.screen,i.screen)}},o.prototype._redrawGridGraphPoint=function(t,e){this._drawGridLine(t,e,e.pointRight),this._drawGridLine(t,e,e.pointTop)},o.prototype._redrawLineGraphPoint=function(t,e){void 0!==e.pointNext&&(t.lineWidth=this._getStrokeWidth(e),t.strokeStyle=this.dataColor.stroke,this._line(t,e.screen,e.pointNext.screen))},o.prototype._redrawDataGraph=function(){var t,e=this._getContext();if(!(void 0===this.dataPoints||this.dataPoints.length<=0))for(this._calcTranslations(this.dataPoints),t=0;t<this.dataPoints.length;t++){var i=this.dataPoints[t];this._pointDrawingMethod.call(this,e,i)}},o.prototype._storeMousePosition=function(t){this.startMouseX=n(t),this.startMouseY=s(t),this._startCameraOffset=this.camera.getOffset()},o.prototype._onMouseDown=function(t){if(t=t||window.event,this.leftButtonDown&&this._onMouseUp(t),this.leftButtonDown=t.which?1===t.which:1===t.button,this.leftButtonDown||this.touchDown){this._storeMousePosition(t),this.startStart=new Date(this.start),this.startEnd=new Date(this.end),this.startArmRotation=this.camera.getArmRotation(),this.frame.style.cursor="move";var e=this;this.onmousemove=function(t){e._onMouseMove(t)},this.onmouseup=function(t){e._onMouseUp(t)},u.addEventListener(document,"mousemove",e.onmousemove),u.addEventListener(document,"mouseup",e.onmouseup),u.preventDefault(t)}},o.prototype._onMouseMove=function(t){this.moving=!0,t=t||window.event;var e=parseFloat(n(t))-this.startMouseX,i=parseFloat(s(t))-this.startMouseY;if(t&&t.ctrlKey===!0){var o=.5*this.frame.clientWidth,r=.5*this.frame.clientHeight,a=(this._startCameraOffset.x||0)-e/o*this.camera.armLength*.8,h=(this._startCameraOffset.y||0)+i/r*this.camera.armLength*.8;this.camera.setOffset(a,h),this._storeMousePosition(t)}else{var d=this.startArmRotation.horizontal+e/200,l=this.startArmRotation.vertical+i/200,c=Math.sin(4/360*2*Math.PI);Math.abs(Math.sin(d))<c&&(d=Math.round(d/Math.PI)*Math.PI-.001),Math.abs(Math.cos(d))<c&&(d=(Math.round(d/Math.PI-.5)+.5)*Math.PI-.001),Math.abs(Math.sin(l))<c&&(l=Math.round(l/Math.PI)*Math.PI),Math.abs(Math.cos(l))<c&&(l=(Math.round(l/Math.PI-.5)+.5)*Math.PI),this.camera.setArmRotation(d,l)}this.redraw();var p=this.getCameraPosition();this.emit("cameraPositionChange",p),u.preventDefault(t)},o.prototype._onMouseUp=function(t){this.frame.style.cursor="auto",this.leftButtonDown=!1,u.removeEventListener(document,"mousemove",this.onmousemove),u.removeEventListener(document,"mouseup",this.onmouseup),u.preventDefault(t)},o.prototype._onClick=function(t){if(this.onclick_callback){if(this.moving)this.moving=!1;else{var e=this.frame.getBoundingClientRect(),i=n(t)-e.left,o=s(t)-e.top,r=this._dataPointFromXY(i,o);r&&this.onclick_callback(r.point.data)}u.preventDefault(t)}},o.prototype._onTooltip=function(t){var e=this.frame.getBoundingClientRect(),i=n(t)-e.left,o=s(t)-e.top;if(this.showTooltip){if(this.tooltipTimeout&&clearTimeout(this.tooltipTimeout),this.leftButtonDown)return void this._hideTooltip();if(this.tooltip&&this.tooltip.dataPoint){var r=this._dataPointFromXY(i,o);r!==this.tooltip.dataPoint&&(r?this._showTooltip(r):this._hideTooltip())}else{var a=this;this.tooltipTimeout=setTimeout(function(){a.tooltipTimeout=null;var t=a._dataPointFromXY(i,o);t&&a._showTooltip(t)},300)}}},o.prototype._onTouchStart=function(t){this.touchDown=!0;var e=this;this.ontouchmove=function(t){e._onTouchMove(t)},this.ontouchend=function(t){e._onTouchEnd(t)},u.addEventListener(document,"touchmove",e.ontouchmove),u.addEventListener(document,"touchend",e.ontouchend),this._onMouseDown(t)},o.prototype._onTouchMove=function(t){this._onMouseMove(t)},o.prototype._onTouchEnd=function(t){this.touchDown=!1,u.removeEventListener(document,"touchmove",this.ontouchmove),u.removeEventListener(document,"touchend",this.ontouchend),this._onMouseUp(t)},o.prototype._onWheel=function(t){t||(t=window.event);var e=0;if(t.wheelDelta?e=t.wheelDelta/120:t.detail&&(e=-t.detail/3),e){var i=this.camera.getArmLength(),o=i*(1-e/10);this.camera.setArmLength(o),this.redraw(),this._hideTooltip()}var n=this.getCameraPosition();this.emit("cameraPositionChange",n),u.preventDefault(t)},o.prototype._insideTriangle=function(t,e){function i(t){return t>0?1:t<0?-1:0}var o=e[0],n=e[1],s=e[2],r=i((n.x-o.x)*(t.y-o.y)-(n.y-o.y)*(t.x-o.x)),a=i((s.x-n.x)*(t.y-n.y)-(s.y-n.y)*(t.x-n.x)),h=i((o.x-s.x)*(t.y-s.y)-(o.y-s.y)*(t.x-s.x));return!(0!=r&&0!=a&&r!=a||0!=a&&0!=h&&a!=h||0!=r&&0!=h&&r!=h)},o.prototype._dataPointFromXY=function(t,e){var i,n=null,s=null,r=null,a=new p(t,e);if(this.style===o.STYLE.BAR||this.style===o.STYLE.BARCOLOR||this.style===o.STYLE.BARSIZE)for(i=this.dataPoints.length-1;i>=0;i--){n=this.dataPoints[i];var h=n.surfaces;if(h)for(var d=h.length-1;d>=0;d--){var l=h[d],u=l.corners,c=[u[0].screen,u[1].screen,u[2].screen],f=[u[2].screen,u[3].screen,u[0].screen];if(this._insideTriangle(a,c)||this._insideTriangle(a,f))return n}}else for(i=0;i<this.dataPoints.length;i++){n=this.dataPoints[i];var m=n.screen;if(m){var v=Math.abs(t-m.x),g=Math.abs(e-m.y),y=Math.sqrt(v*v+g*g);(null===r||y<r)&&y<100&&(r=y,s=n)}}return s},o.prototype._showTooltip=function(t){var e,i,o;this.tooltip?(e=this.tooltip.dom.content,i=this.tooltip.dom.line,o=this.tooltip.dom.dot):(e=document.createElement("div"),(0,a.default)(e.style,{},this.tooltipStyle.content),e.style.position="absolute",i=document.createElement("div"),(0,a.default)(i.style,{},this.tooltipStyle.line),i.style.position="absolute",o=document.createElement("div"),(0,a.default)(o.style,{},this.tooltipStyle.dot),o.style.position="absolute",this.tooltip={dataPoint:null,dom:{content:e,line:i,dot:o}}),this._hideTooltip(),this.tooltip.dataPoint=t,
"function"==typeof this.showTooltip?e.innerHTML=this.showTooltip(t.point):e.innerHTML="<table><tr><td>"+this.xLabel+":</td><td>"+t.point.x+"</td></tr><tr><td>"+this.yLabel+":</td><td>"+t.point.y+"</td></tr><tr><td>"+this.zLabel+":</td><td>"+t.point.z+"</td></tr></table>",e.style.left="0",e.style.top="0",this.frame.appendChild(e),this.frame.appendChild(i),this.frame.appendChild(o);var n=e.offsetWidth,s=e.offsetHeight,r=i.offsetHeight,h=o.offsetWidth,d=o.offsetHeight,l=t.screen.x-n/2;l=Math.min(Math.max(l,10),this.frame.clientWidth-10-n),i.style.left=t.screen.x+"px",i.style.top=t.screen.y-r+"px",e.style.left=l+"px",e.style.top=t.screen.y-r-s+"px",o.style.left=t.screen.x-h/2+"px",o.style.top=t.screen.y-d/2+"px"},o.prototype._hideTooltip=function(){if(this.tooltip){this.tooltip.dataPoint=null;for(var t in this.tooltip.dom)if(this.tooltip.dom.hasOwnProperty(t)){var e=this.tooltip.dom[t];e&&e.parentNode&&e.parentNode.removeChild(e)}}},o.prototype.setCameraPosition=function(t){y.setCameraPosition(t,this),this.redraw()},o.prototype.setSize=function(t,e){this._setSize(t,e),this.redraw()},t.exports=o},function(t,e,i){t.exports={default:i(96),__esModule:!0}},function(t,e,i){i(97),t.exports=i(17).Object.assign},function(t,e,i){var o=i(15);o(o.S+o.F,"Object",{assign:i(98)})},function(t,e,i){var o=i(35),n=i(73),s=i(74),r=i(49),a=i(10),h=Object.assign;t.exports=!h||i(26)(function(){var t={},e={},i=Symbol(),o="abcdefghijklmnopqrst";return t[i]=7,o.split("").forEach(function(t){e[t]=t}),7!=h({},t)[i]||Object.keys(h({},e)).join("")!=o})?function(t,e){for(var i=r(t),h=arguments.length,d=1,l=n.f,u=s.f;h>d;)for(var c,p=a(arguments[d++]),f=l?o(p).concat(l(p)):o(p),m=f.length,v=0;m>v;)u.call(p,c=f[v++])&&(i[c]=p[c]);return i}:h},function(t,e){function i(t){if(t)return o(t)}function o(t){for(var e in i.prototype)t[e]=i.prototype[e];return t}t.exports=i,i.prototype.on=i.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[t]=this._callbacks[t]||[]).push(e),this},i.prototype.once=function(t,e){function i(){o.off(t,i),e.apply(this,arguments)}var o=this;return this._callbacks=this._callbacks||{},i.fn=e,this.on(t,i),this},i.prototype.off=i.prototype.removeListener=i.prototype.removeAllListeners=i.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var i=this._callbacks[t];if(!i)return this;if(1==arguments.length)return delete this._callbacks[t],this;for(var o,n=0;n<i.length;n++)if((o=i[n])===e||o.fn===e){i.splice(n,1);break}return this},i.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),i=this._callbacks[t];if(i){i=i.slice(0);for(var o=0,n=i.length;o<n;++o)i[o].apply(this,e)}return this},i.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[t]||[]},i.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e){function i(t,e,i){this.x=void 0!==t?t:0,this.y=void 0!==e?e:0,this.z=void 0!==i?i:0}i.subtract=function(t,e){var o=new i;return o.x=t.x-e.x,o.y=t.y-e.y,o.z=t.z-e.z,o},i.add=function(t,e){var o=new i;return o.x=t.x+e.x,o.y=t.y+e.y,o.z=t.z+e.z,o},i.avg=function(t,e){return new i((t.x+e.x)/2,(t.y+e.y)/2,(t.z+e.z)/2)},i.crossProduct=function(t,e){var o=new i;return o.x=t.y*e.z-t.z*e.y,o.y=t.z*e.x-t.x*e.z,o.z=t.x*e.y-t.y*e.x,o},i.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},t.exports=i},function(t,e){function i(t,e){this.x=void 0!==t?t:0,this.y=void 0!==e?e:0}t.exports=i},function(t,e,i){function o(){this.armLocation=new r,this.armRotation={},this.armRotation.horizontal=0,this.armRotation.vertical=0,this.armLength=1.7,this.cameraOffset=new r,this.offsetMultiplier=.6,this.cameraLocation=new r,this.cameraRotation=new r(.5*Math.PI,0,0),this.calculateCameraOrientation()}var n=i(103),s=function(t){return t&&t.__esModule?t:{default:t}}(n),r=i(100);o.prototype.setOffset=function(t,e){var i=Math.abs,o=s.default,n=this.offsetMultiplier,r=this.armLength*n;i(t)>r&&(t=o(t)*r),i(e)>r&&(e=o(e)*r),this.cameraOffset.x=t,this.cameraOffset.y=e,this.calculateCameraOrientation()},o.prototype.getOffset=function(t,e){return this.cameraOffset},o.prototype.setArmLocation=function(t,e,i){this.armLocation.x=t,this.armLocation.y=e,this.armLocation.z=i,this.calculateCameraOrientation()},o.prototype.setArmRotation=function(t,e){void 0!==t&&(this.armRotation.horizontal=t),void 0!==e&&(this.armRotation.vertical=e,this.armRotation.vertical<0&&(this.armRotation.vertical=0),this.armRotation.vertical>.5*Math.PI&&(this.armRotation.vertical=.5*Math.PI)),void 0===t&&void 0===e||this.calculateCameraOrientation()},o.prototype.getArmRotation=function(){var t={};return t.horizontal=this.armRotation.horizontal,t.vertical=this.armRotation.vertical,t},o.prototype.setArmLength=function(t){void 0!==t&&(this.armLength=t,this.armLength<.71&&(this.armLength=.71),this.armLength>5&&(this.armLength=5),this.setOffset(this.cameraOffset.x,this.cameraOffset.y),this.calculateCameraOrientation())},o.prototype.getArmLength=function(){return this.armLength},o.prototype.getCameraLocation=function(){return this.cameraLocation},o.prototype.getCameraRotation=function(){return this.cameraRotation},o.prototype.calculateCameraOrientation=function(){this.cameraLocation.x=this.armLocation.x-this.armLength*Math.sin(this.armRotation.horizontal)*Math.cos(this.armRotation.vertical),this.cameraLocation.y=this.armLocation.y-this.armLength*Math.cos(this.armRotation.horizontal)*Math.cos(this.armRotation.vertical),this.cameraLocation.z=this.armLocation.z+this.armLength*Math.sin(this.armRotation.vertical),this.cameraRotation.x=Math.PI/2-this.armRotation.vertical,this.cameraRotation.y=0,this.cameraRotation.z=-this.armRotation.horizontal;var t=this.cameraRotation.x,e=(this.cameraRotation.y,this.cameraRotation.z),i=this.cameraOffset.x,o=this.cameraOffset.y,n=Math.sin,s=Math.cos;this.cameraLocation.x=this.cameraLocation.x+i*s(e)+o*-n(e)*s(t),this.cameraLocation.y=this.cameraLocation.y+i*n(e)+o*s(e)*s(t),this.cameraLocation.z=this.cameraLocation.z+o*n(t)},t.exports=o},function(t,e,i){t.exports={default:i(104),__esModule:!0}},function(t,e,i){i(105),t.exports=i(17).Math.sign},function(t,e,i){var o=i(15);o(o.S,"Math",{sign:i(106)})},function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,e,i){function o(t,e,i){this.data=t,this.column=e,this.graph=i,this.index=void 0,this.value=void 0,this.values=i.getDistinctValues(t.get(),this.column),this.values.sort(function(t,e){return t>e?1:t<e?-1:0}),this.values.length>0&&this.selectValue(0),this.dataPoints=[],this.loaded=!1,this.onLoadCallback=void 0,i.animationPreload?(this.loaded=!1,this.loadInBackground()):this.loaded=!0}var n=i(93);o.prototype.isLoaded=function(){return this.loaded},o.prototype.getLoadedProgress=function(){for(var t=this.values.length,e=0;this.dataPoints[e];)e++;return Math.round(e/t*100)},o.prototype.getLabel=function(){return this.graph.filterLabel},o.prototype.getColumn=function(){return this.column},o.prototype.getSelectedValue=function(){if(void 0!==this.index)return this.values[this.index]},o.prototype.getValues=function(){return this.values},o.prototype.getValue=function(t){if(t>=this.values.length)throw new Error("Index out of range");return this.values[t]},o.prototype._getDataPoints=function(t){if(void 0===t&&(t=this.index),void 0===t)return[];var e;if(this.dataPoints[t])e=this.dataPoints[t];else{var i={};i.column=this.column,i.value=this.values[t];var o=new n(this.data,{filter:function(t){return t[i.column]==i.value}}).get();e=this.graph._getDataPoints(o),this.dataPoints[t]=e}return e},o.prototype.setOnLoadCallback=function(t){this.onLoadCallback=t},o.prototype.selectValue=function(t){if(t>=this.values.length)throw new Error("Index out of range");this.index=t,this.value=this.values[t]},o.prototype.loadInBackground=function(t){void 0===t&&(t=0);var e=this.graph.frame;if(t<this.values.length){this._getDataPoints(t);void 0===e.progress&&(e.progress=document.createElement("DIV"),e.progress.style.position="absolute",e.progress.style.color="gray",e.appendChild(e.progress));var i=this.getLoadedProgress();e.progress.innerHTML="Loading animation... "+i+"%",e.progress.style.bottom="60px",e.progress.style.left="10px";var o=this;setTimeout(function(){o.loadInBackground(t+1)},10),this.loaded=!1}else this.loaded=!0,void 0!==e.progress&&(e.removeChild(e.progress),e.progress=void 0),this.onLoadCallback&&this.onLoadCallback()},t.exports=o},function(t,e,i){function o(t,e){if(void 0===t)throw new Error("No container element defined");if(this.container=t,this.visible=!e||void 0==e.visible||e.visible,this.visible){this.frame=document.createElement("DIV"),this.frame.style.width="100%",this.frame.style.position="relative",this.container.appendChild(this.frame),this.frame.prev=document.createElement("INPUT"),this.frame.prev.type="BUTTON",this.frame.prev.value="Prev",this.frame.appendChild(this.frame.prev),this.frame.play=document.createElement("INPUT"),this.frame.play.type="BUTTON",this.frame.play.value="Play",this.frame.appendChild(this.frame.play),this.frame.next=document.createElement("INPUT"),this.frame.next.type="BUTTON",this.frame.next.value="Next",this.frame.appendChild(this.frame.next),this.frame.bar=document.createElement("INPUT"),this.frame.bar.type="BUTTON",this.frame.bar.style.position="absolute",this.frame.bar.style.border="1px solid red",this.frame.bar.style.width="100px",this.frame.bar.style.height="6px",this.frame.bar.style.borderRadius="2px",this.frame.bar.style.MozBorderRadius="2px",this.frame.bar.style.border="1px solid #7F7F7F",this.frame.bar.style.backgroundColor="#E5E5E5",this.frame.appendChild(this.frame.bar),this.frame.slide=document.createElement("INPUT"),this.frame.slide.type="BUTTON",this.frame.slide.style.margin="0px",this.frame.slide.value=" ",this.frame.slide.style.position="relative",this.frame.slide.style.left="-100px",this.frame.appendChild(this.frame.slide);var i=this;this.frame.slide.onmousedown=function(t){i._onMouseDown(t)},this.frame.prev.onclick=function(t){i.prev(t)},this.frame.play.onclick=function(t){i.togglePlay(t)},this.frame.next.onclick=function(t){i.next(t)}}this.onChangeCallback=void 0,this.values=[],this.index=void 0,this.playTimeout=void 0,this.playInterval=1e3,this.playLoop=!0}var n=i(1);o.prototype.prev=function(){var t=this.getIndex();t>0&&(t--,this.setIndex(t))},o.prototype.next=function(){var t=this.getIndex();t<this.values.length-1&&(t++,this.setIndex(t))},o.prototype.playNext=function(){var t=new Date,e=this.getIndex();e<this.values.length-1?(e++,this.setIndex(e)):this.playLoop&&(e=0,this.setIndex(e));var i=new Date,o=i-t,n=Math.max(this.playInterval-o,0),s=this;this.playTimeout=setTimeout(function(){s.playNext()},n)},o.prototype.togglePlay=function(){void 0===this.playTimeout?this.play():this.stop()},o.prototype.play=function(){this.playTimeout||(this.playNext(),this.frame&&(this.frame.play.value="Stop"))},o.prototype.stop=function(){clearInterval(this.playTimeout),this.playTimeout=void 0,this.frame&&(this.frame.play.value="Play")},o.prototype.setOnChangeCallback=function(t){this.onChangeCallback=t},o.prototype.setPlayInterval=function(t){this.playInterval=t},o.prototype.getPlayInterval=function(t){return this.playInterval},o.prototype.setPlayLoop=function(t){this.playLoop=t},o.prototype.onChange=function(){void 0!==this.onChangeCallback&&this.onChangeCallback()},o.prototype.redraw=function(){if(this.frame){this.frame.bar.style.top=this.frame.clientHeight/2-this.frame.bar.offsetHeight/2+"px",this.frame.bar.style.width=this.frame.clientWidth-this.frame.prev.clientWidth-this.frame.play.clientWidth-this.frame.next.clientWidth-30+"px";var t=this.indexToLeft(this.index);this.frame.slide.style.left=t+"px"}},o.prototype.setValues=function(t){this.values=t,this.values.length>0?this.setIndex(0):this.index=void 0},o.prototype.setIndex=function(t){if(!(t<this.values.length))throw new Error("Index out of range");this.index=t,this.redraw(),this.onChange()},o.prototype.getIndex=function(){return this.index},o.prototype.get=function(){return this.values[this.index]},o.prototype._onMouseDown=function(t){if(t.which?1===t.which:1===t.button){this.startClientX=t.clientX,this.startSlideX=parseFloat(this.frame.slide.style.left),this.frame.style.cursor="move";var e=this;this.onmousemove=function(t){e._onMouseMove(t)},this.onmouseup=function(t){e._onMouseUp(t)},n.addEventListener(document,"mousemove",this.onmousemove),n.addEventListener(document,"mouseup",this.onmouseup),n.preventDefault(t)}},o.prototype.leftToIndex=function(t){var e=parseFloat(this.frame.bar.style.width)-this.frame.slide.clientWidth-10,i=t-3,o=Math.round(i/e*(this.values.length-1));return o<0&&(o=0),o>this.values.length-1&&(o=this.values.length-1),o},o.prototype.indexToLeft=function(t){var e=parseFloat(this.frame.bar.style.width)-this.frame.slide.clientWidth-10;return t/(this.values.length-1)*e+3},o.prototype._onMouseMove=function(t){var e=t.clientX-this.startClientX,i=this.startSlideX+e,o=this.leftToIndex(i);this.setIndex(o),n.preventDefault()},o.prototype._onMouseUp=function(t){this.frame.style.cursor="auto",n.removeEventListener(document,"mousemove",this.onmousemove),n.removeEventListener(document,"mouseup",this.onmouseup),n.preventDefault()},t.exports=o},function(t,e){function i(t,e,i,o){this._start=0,this._end=0,this._step=1,this.prettyStep=!0,this.precision=5,this._current=0,this.setRange(t,e,i,o)}i.prototype.isNumeric=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},i.prototype.setRange=function(t,e,i,o){if(!this.isNumeric(t))throw new Error("Parameter 'start' is not numeric; value: "+t);if(!this.isNumeric(e))throw new Error("Parameter 'end' is not numeric; value: "+t);if(!this.isNumeric(i))throw new Error("Parameter 'step' is not numeric; value: "+t);this._start=t?t:0,this._end=e?e:0,this.setStep(i,o)},i.prototype.setStep=function(t,e){void 0===t||t<=0||(void 0!==e&&(this.prettyStep=e),this.prettyStep===!0?this._step=i.calculatePrettyStep(t):this._step=t)},i.calculatePrettyStep=function(t){var e=function(t){return Math.log(t)/Math.LN10},i=Math.pow(10,Math.round(e(t))),o=2*Math.pow(10,Math.round(e(t/2))),n=5*Math.pow(10,Math.round(e(t/5))),s=i;return Math.abs(o-t)<=Math.abs(s-t)&&(s=o),Math.abs(n-t)<=Math.abs(s-t)&&(s=n),s<=0&&(s=1),s},i.prototype.getCurrent=function(){return parseFloat(this._current.toPrecision(this.precision))},i.prototype.getStep=function(){return this._step},i.prototype.start=function(t){void 0===t&&(t=!1),this._current=this._start-this._start%this._step,t&&this.getCurrent()<this._start&&this.next()},i.prototype.next=function(){this._current+=this._step},i.prototype.end=function(){return this._current>this._end},t.exports=i},function(t,e){function i(){this.min=void 0,this.max=void 0}i.prototype.adjust=function(t){void 0!==t&&((void 0===this.min||this.min>t)&&(this.min=t),(void 0===this.max||this.max<t)&&(this.max=t))},i.prototype.combine=function(t){this.add(t.min),this.add(t.max)},i.prototype.expand=function(t){if(void 0!==t){var e=this.min-t,i=this.max+t;if(e>i)throw new Error("Passed expansion value makes range invalid");this.min=e,this.max=i}},i.prototype.range=function(){return this.max-this.min},i.prototype.center=function(){return(this.min+this.max)/2},t.exports=i},function(t,e,i){function o(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}function n(t){return void 0===t||""===t||"string"!=typeof t?t:t.charAt(0).toUpperCase()+t.slice(1)}function s(t,e){return void 0===t||""===t?e:t+n(e)}function r(t,e,i,o){var n,r;for(var a in i)n=i[a],r=s(o,n),e[r]=t[n]}function a(t,e,i,o){var n,r;for(var a in i)n=i[a],void 0!==t[n]&&(r=s(o,n),e[r]=t[n])}function h(t,e){if(void 0===t||o(t))throw new Error("No DEFAULTS passed");if(void 0===e)throw new Error("No dst passed");D=t,r(t,e,S),r(t,e,M,"default"),l(t,e),e.margin=10,e.showGrayBottom=!1,e.showTooltip=!1,e.onclick_callback=null,e.eye=new x(0,0,-1)}function d(t,e){if(void 0!==t){if(void 0===e)throw new Error("No dst passed");if(void 0===D||o(D))throw new Error("DEFAULTS not set for module Settings");a(t,e,S),a(t,e,M,"default"),l(t,e)}}function l(t,e){void 0!==t.backgroundColor&&m(t.backgroundColor,e),v(t.dataColor,e),f(t.style,e),u(t.showLegend,e),g(t.cameraPosition,e),void 0!==t.tooltip&&(e.showTooltip=t.tooltip),void 0!=t.onclick&&(e.onclick_callback=t.onclick),void 0!==t.tooltipStyle&&_.selectiveDeepExtend(["tooltipStyle"],e,t)}function u(t,e){if(void 0===t){if(void 0===D.showLegend){var i=e.style===k.DOTCOLOR||e.style===k.DOTSIZE;e.showLegend=i}}else e.showLegend=t}function c(t){var e=O[t];return void 0===e?-1:e}function p(t){var e=!1;for(var i in k)if(k[i]===t){e=!0;break}return e}function f(t,e){if(void 0!==t){var i;if("string"==typeof t){if((i=c(t))===-1)throw new Error("Style '"+t+"' is invalid")}else{if(!p(t))throw new Error("Style '"+t+"' is invalid");i=t}e.style=i}}function m(t,e){var i="white",o="gray",n=1;if("string"==typeof t)i=t,o="none",n=0;else{if("object"!==(void 0===t?"undefined":(0,b.default)(t)))throw new Error("Unsupported type of backgroundColor");void 0!==t.fill&&(i=t.fill),void 0!==t.stroke&&(o=t.stroke),void 0!==t.strokeWidth&&(n=t.strokeWidth)}e.frame.style.backgroundColor=i,e.frame.style.borderColor=o,e.frame.style.borderWidth=n+"px",e.frame.style.borderStyle="solid"}function v(t,e){void 0!==t&&(void 0===e.dataColor&&(e.dataColor={}),"string"==typeof t?(e.dataColor.fill=t,e.dataColor.stroke=t):(t.fill&&(e.dataColor.fill=t.fill),t.stroke&&(e.dataColor.stroke=t.stroke),void 0!==t.strokeWidth&&(e.dataColor.strokeWidth=t.strokeWidth)))}function g(t,e){var i=t;void 0!==i&&(void 0===e.camera&&(e.camera=new w),e.camera.setArmRotation(i.horizontal,i.vertical),e.camera.setArmLength(i.distance))}var y=i(62),b=function(t){return t&&t.__esModule?t:{default:t}}(y),_=i(1),w=i(102),x=i(100),k={BAR:0,BARCOLOR:1,BARSIZE:2,DOT:3,DOTLINE:4,DOTCOLOR:5,DOTSIZE:6,GRID:7,LINE:8,SURFACE:9},O={dot:k.DOT,"dot-line":k.DOTLINE,"dot-color":k.DOTCOLOR,"dot-size":k.DOTSIZE,line:k.LINE,grid:k.GRID,surface:k.SURFACE,bar:k.BAR,"bar-color":k.BARCOLOR,"bar-size":k.BARSIZE},S=["width","height","filterLabel","legendLabel","xLabel","yLabel","zLabel","xValueLabel","yValueLabel","zValueLabel","showXAxis","showYAxis","showZAxis","showGrid","showPerspective","showShadow","keepAspectRatio","verticalRatio","dotSizeRatio","showAnimationControls","animationInterval","animationPreload","animationAutoStart","axisColor","gridColor","xCenter","yCenter"],M=["xBarWidth","yBarWidth","valueMin","valueMax","xMin","xMax","xStep","yMin","yMax","yStep","zMin","zMax","zStep"],D=void 0;t.exports.STYLE=k,t.exports.setDefaults=h,t.exports.setOptions=d,t.exports.setCameraPosition=g},function(t,e,i){if("undefined"!=typeof window){var o=i(113),n=window.Hammer||i(114);t.exports=o(n,{preventDefault:"mouse"})}else t.exports=function(){throw Error("hammer.js is only available in a browser, not in node.js.")}},function(t,e,i){var o,n,s;!function(i){n=[],o=i,void 0!==(s="function"==typeof o?o.apply(e,n):o)&&(t.exports=s)}(function(){var t=null;return function e(i,o){function n(t){return t.match(/[^ ]+/g)}function s(e){if("hammer.input"!==e.type){if(e.srcEvent._handled||(e.srcEvent._handled={}),e.srcEvent._handled[e.type])return;e.srcEvent._handled[e.type]=!0}var i=!1;e.stopPropagation=function(){i=!0};var o=e.srcEvent.stopPropagation.bind(e.srcEvent);"function"==typeof o&&(e.srcEvent.stopPropagation=function(){o(),e.stopPropagation()}),e.firstTarget=t;for(var n=t;n&&!i;){var s=n.hammer;if(s)for(var r,a=0;a<s.length;a++)if(r=s[a]._handlers[e.type])for(var h=0;h<r.length&&!i;h++)r[h](e);n=n.parentNode}}var r=o||{preventDefault:!1};if(i.Manager){var a=i,h=function(t,i){var o=Object.create(r);return i&&a.assign(o,i),e(new a(t,o),o)};return a.assign(h,a),h.Manager=function(t,i){var o=Object.create(r);return i&&a.assign(o,i),e(new a.Manager(t,o),o)},h}var d=Object.create(i),l=i.element;return l.hammer||(l.hammer=[]),l.hammer.push(d),i.on("hammer.input",function(e){r.preventDefault!==!0&&r.preventDefault!==e.pointerType||e.preventDefault(),e.isFirst&&(t=e.target)}),d._handlers={},d.on=function(t,e){return n(t).forEach(function(t){var o=d._handlers[t];o||(d._handlers[t]=o=[],i.on(t,s)),o.push(e)}),d},d.off=function(t,e){return n(t).forEach(function(t){var o=d._handlers[t];o&&(o=e?o.filter(function(t){return t!==e}):[],o.length>0?d._handlers[t]=o:(i.off(t,s),delete d._handlers[t]))}),d},d.emit=function(e,o){t=o.target,i.emit(e,o)},d.destroy=function(){var t=i.element.hammer,e=t.indexOf(d);e!==-1&&t.splice(e,1),t.length||delete i.element.hammer,d._handlers={},i.destroy()},d}})},function(t,e,i){var o;!function(n,s,r,a){function h(t,e,i){return setTimeout(p(t,i),e)}function d(t,e,i){return!!Array.isArray(t)&&(l(t,i[e],i),!0)}function l(t,e,i){var o;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==a)for(o=0;o<t.length;)e.call(i,t[o],o,t),o++;else for(o in t)t.hasOwnProperty(o)&&e.call(i,t[o],o,t)}function u(t,e,i){var o="DEPRECATED METHOD: "+e+"\n"+i+" AT \n";return function(){var e=new Error("get-stack-trace"),i=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",s=n.console&&(n.console.warn||n.console.log);return s&&s.call(n.console,o,i),t.apply(this,arguments)}}function c(t,e,i){var o,n=e.prototype;o=t.prototype=Object.create(n),o.constructor=t,o._super=n,i&&ft(o,i)}function p(t,e){return function(){return t.apply(e,arguments)}}function f(t,e){return typeof t==gt?t.apply(e?e[0]||a:a,e):t}function m(t,e){return t===a?e:t}function v(t,e,i){l(_(e),function(e){t.addEventListener(e,i,!1)})}function g(t,e,i){l(_(e),function(e){t.removeEventListener(e,i,!1)})}function y(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function b(t,e){return t.indexOf(e)>-1}function _(t){return t.trim().split(/\s+/g)}function w(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var o=0;o<t.length;){if(i&&t[o][i]==e||!i&&t[o]===e)return o;o++}return-1}function x(t){return Array.prototype.slice.call(t,0)}function k(t,e,i){for(var o=[],n=[],s=0;s<t.length;){var r=e?t[s][e]:t[s];w(n,r)<0&&o.push(t[s]),n[s]=r,s++}return i&&(o=e?o.sort(function(t,i){return t[e]>i[e]}):o.sort()),o}function O(t,e){for(var i,o,n=e[0].toUpperCase()+e.slice(1),s=0;s<mt.length;){if(i=mt[s],(o=i?i+n:e)in t)return o;s++}return a}function S(){return kt++}function M(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||n}function D(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){f(t.options.enable,[t])&&i.handler(e)},this.init()}function C(t){var e=t.options.inputClass;return new(e?e:Mt?W:Dt?V:St?q:H)(t,T)}function T(t,e,i){var o=i.pointers.length,n=i.changedPointers.length,s=e&Tt&&o-n==0,r=e&(Pt|It)&&o-n==0;i.isFirst=!!s,i.isFinal=!!r,s&&(t.session={}),i.eventType=e,E(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function E(t,e){var i=t.session,o=e.pointers,n=o.length;i.firstInput||(i.firstInput=N(e)),n>1&&!i.firstMultiple?i.firstMultiple=N(e):1===n&&(i.firstMultiple=!1);var s=i.firstInput,r=i.firstMultiple,a=r?r.center:s.center,h=e.center=R(o);e.timeStamp=_t(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=F(a,h),e.distance=L(a,h),P(i,e),e.offsetDirection=A(e.deltaX,e.deltaY);var d=z(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=d.x,e.overallVelocityY=d.y,e.overallVelocity=bt(d.x)>bt(d.y)?d.x:d.y,e.scale=r?j(r.pointers,o):1,e.rotation=r?B(r.pointers,o):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,I(i,e);var l=t.element;y(e.srcEvent.target,l)&&(l=e.srcEvent.target),e.target=l}function P(t,e){var i=e.center,o=t.offsetDelta||{},n=t.prevDelta||{},s=t.prevInput||{};e.eventType!==Tt&&s.eventType!==Pt||(n=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},o=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=n.x+(i.x-o.x),e.deltaY=n.y+(i.y-o.y)}function I(t,e){var i,o,n,s,r=t.lastInterval||e,h=e.timeStamp-r.timeStamp;if(e.eventType!=It&&(h>Ct||r.velocity===a)){var d=e.deltaX-r.deltaX,l=e.deltaY-r.deltaY,u=z(h,d,l);o=u.x,n=u.y,i=bt(u.x)>bt(u.y)?u.x:u.y,s=A(d,l),t.lastInterval=e}else i=r.velocity,o=r.velocityX,n=r.velocityY,s=r.direction;e.velocity=i,e.velocityX=o,e.velocityY=n,e.direction=s}function N(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:yt(t.pointers[i].clientX),clientY:yt(t.pointers[i].clientY)},i++;return{timeStamp:_t(),pointers:e,center:R(e),deltaX:t.deltaX,deltaY:t.deltaY}}function R(t){var e=t.length;if(1===e)return{x:yt(t[0].clientX),y:yt(t[0].clientY)};for(var i=0,o=0,n=0;n<e;)i+=t[n].clientX,o+=t[n].clientY,n++;return{x:yt(i/e),y:yt(o/e)}}function z(t,e,i){return{x:e/t||0,y:i/t||0}}function A(t,e){return t===e?Nt:bt(t)>=bt(e)?t<0?Rt:zt:e<0?At:Lt}function L(t,e,i){i||(i=Ht);var o=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]];return Math.sqrt(o*o+n*n)}function F(t,e,i){i||(i=Ht);var o=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]];return 180*Math.atan2(n,o)/Math.PI}function B(t,e){return F(e[1],e[0],Wt)+F(t[1],t[0],Wt)}function j(t,e){return L(e[0],e[1],Wt)/L(t[0],t[1],Wt)}function H(){this.evEl=Gt,this.evWin=Vt,this.pressed=!1,D.apply(this,arguments)}function W(){this.evEl=Xt,this.evWin=Zt,D.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function Y(){this.evTarget=Jt,this.evWin=Qt,this.started=!1,D.apply(this,arguments)}function G(t,e){var i=x(t.touches),o=x(t.changedTouches);return e&(Pt|It)&&(i=k(i.concat(o),"identifier",!0)),[i,o]}function V(){this.evTarget=te,this.targetIds={},D.apply(this,arguments)}function U(t,e){var i=x(t.touches),o=this.targetIds;if(e&(Tt|Et)&&1===i.length)return o[i[0].identifier]=!0,[i,i];var n,s,r=x(t.changedTouches),a=[],h=this.target;if(s=i.filter(function(t){return y(t.target,h)}),e===Tt)for(n=0;n<s.length;)o[s[n].identifier]=!0,n++;for(n=0;n<r.length;)o[r[n].identifier]&&a.push(r[n]),e&(Pt|It)&&delete o[r[n].identifier],n++;return a.length?[k(s.concat(a),"identifier",!0),a]:void 0}function q(){D.apply(this,arguments);var t=p(this.handler,this);this.touch=new V(this.manager,t),this.mouse=new H(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function X(t,e){t&Tt?(this.primaryTouch=e.changedPointers[0].identifier,Z.call(this,e)):t&(Pt|It)&&Z.call(this,e)}function Z(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var o=this.lastTouches,n=function(){var t=o.indexOf(i);t>-1&&o.splice(t,1)};setTimeout(n,ee)}}function K(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,o=0;o<this.lastTouches.length;o++){var n=this.lastTouches[o],s=Math.abs(e-n.x),r=Math.abs(i-n.y);if(s<=ie&&r<=ie)return!0}return!1}function J(t,e){this.manager=t,this.set(e)}function Q(t){if(b(t,ae))return ae;var e=b(t,he),i=b(t,de);return e&&i?ae:e||i?e?he:de:b(t,re)?re:se}function $(t){this.options=ft({},this.defaults,t||{}),this.id=S(),this.manager=null,this.options.enable=m(this.options.enable,!0),this.state=ue,this.simultaneous={},this.requireFail=[]}function tt(t){return t&ve?"cancel":t&fe?"end":t&pe?"move":t&ce?"start":""}function et(t){return t==Lt?"down":t==At?"up":t==Rt?"left":t==zt?"right":""}function it(t,e){var i=e.manager;return i?i.get(t):t}function ot(){$.apply(this,arguments)}function nt(){ot.apply(this,arguments),this.pX=null,this.pY=null}function st(){ot.apply(this,arguments)}function rt(){$.apply(this,arguments),this._timer=null,this._input=null}function at(){ot.apply(this,arguments)}function ht(){ot.apply(this,arguments)}function dt(){$.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function lt(t,e){return e=e||{},e.recognizers=m(e.recognizers,lt.defaults.preset),new ut(t,e)}function ut(t,e){this.options=ft({},lt.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=C(this),this.touchAction=new J(this,this.options.touchAction),ct(this,!0),l(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ct(t,e){var i=t.element;if(i.style){var o;l(t.options.cssProps,function(n,s){o=O(i.style,s),e?(t.oldCssProps[o]=i.style[o],i.style[o]=n):i.style[o]=t.oldCssProps[o]||""}),e||(t.oldCssProps={})}}function pt(t,e){var i=s.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}var ft,mt=["","webkit","Moz","MS","ms","o"],vt=s.createElement("div"),gt="function",yt=Math.round,bt=Math.abs,_t=Date.now;ft="function"!=typeof Object.assign?function(t){if(t===a||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var o=arguments[i];if(o!==a&&null!==o)for(var n in o)o.hasOwnProperty(n)&&(e[n]=o[n])}return e}:Object.assign;var wt=u(function(t,e,i){for(var o=Object.keys(e),n=0;n<o.length;)(!i||i&&t[o[n]]===a)&&(t[o[n]]=e[o[n]]),n++;return t},"extend","Use `assign`."),xt=u(function(t,e){return wt(t,e,!0)},"merge","Use `assign`."),kt=1,Ot=/mobile|tablet|ip(ad|hone|od)|android/i,St="ontouchstart"in n,Mt=O(n,"PointerEvent")!==a,Dt=St&&Ot.test(navigator.userAgent),Ct=25,Tt=1,Et=2,Pt=4,It=8,Nt=1,Rt=2,zt=4,At=8,Lt=16,Ft=Rt|zt,Bt=At|Lt,jt=Ft|Bt,Ht=["x","y"],Wt=["clientX","clientY"];D.prototype={handler:function(){},init:function(){this.evEl&&v(this.element,this.evEl,this.domHandler),this.evTarget&&v(this.target,this.evTarget,this.domHandler),this.evWin&&v(M(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&g(this.element,this.evEl,this.domHandler),this.evTarget&&g(this.target,this.evTarget,this.domHandler),this.evWin&&g(M(this.element),this.evWin,this.domHandler)}};var Yt={mousedown:Tt,mousemove:Et,mouseup:Pt},Gt="mousedown",Vt="mousemove mouseup";c(H,D,{handler:function(t){var e=Yt[t.type];e&Tt&&0===t.button&&(this.pressed=!0),e&Et&&1!==t.which&&(e=Pt),this.pressed&&(e&Pt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var Ut={pointerdown:Tt,pointermove:Et,pointerup:Pt,pointercancel:It,pointerout:It},qt={2:"touch",3:"pen",4:"mouse",5:"kinect"},Xt="pointerdown",Zt="pointermove pointerup pointercancel";n.MSPointerEvent&&!n.PointerEvent&&(Xt="MSPointerDown",Zt="MSPointerMove MSPointerUp MSPointerCancel"),c(W,D,{handler:function(t){var e=this.store,i=!1,o=t.type.toLowerCase().replace("ms",""),n=Ut[o],s=qt[t.pointerType]||t.pointerType,r="touch"==s,a=w(e,t.pointerId,"pointerId");n&Tt&&(0===t.button||r)?a<0&&(e.push(t),a=e.length-1):n&(Pt|It)&&(i=!0),a<0||(e[a]=t,this.callback(this.manager,n,{pointers:e,changedPointers:[t],pointerType:s,srcEvent:t}),i&&e.splice(a,1))}});var Kt={touchstart:Tt,touchmove:Et,touchend:Pt,touchcancel:It},Jt="touchstart",Qt="touchstart touchmove touchend touchcancel";c(Y,D,{handler:function(t){var e=Kt[t.type];if(e===Tt&&(this.started=!0),this.started){var i=G.call(this,t,e);e&(Pt|It)&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:"touch",srcEvent:t})}}});var $t={touchstart:Tt,touchmove:Et,touchend:Pt,touchcancel:It},te="touchstart touchmove touchend touchcancel";c(V,D,{handler:function(t){var e=$t[t.type],i=U.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:"touch",srcEvent:t})}});var ee=2500,ie=25;c(q,D,{handler:function(t,e,i){var o="touch"==i.pointerType,n="mouse"==i.pointerType;if(!(n&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(o)X.call(this,e,i);else if(n&&K.call(this,i))return;this.callback(t,e,i)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var oe=O(vt.style,"touchAction"),ne=oe!==a,se="auto",re="manipulation",ae="none",he="pan-x",de="pan-y",le=function(){if(!ne)return!1;var t={},e=n.CSS&&n.CSS.supports
;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){t[i]=!e||n.CSS.supports("touch-action",i)}),t}();J.prototype={set:function(t){"compute"==t&&(t=this.compute()),ne&&this.manager.element.style&&le[t]&&(this.manager.element.style[oe]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return l(this.manager.recognizers,function(e){f(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),Q(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var o=this.actions,n=b(o,ae)&&!le[ae],s=b(o,de)&&!le[de],r=b(o,he)&&!le[he];if(n){var a=1===t.pointers.length,h=t.distance<2,d=t.deltaTime<250;if(a&&h&&d)return}return r&&s?void 0:n||s&&i&Ft||r&&i&Bt?this.preventSrc(e):void 0},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var ue=1,ce=2,pe=4,fe=8,me=fe,ve=16;$.prototype={defaults:{},set:function(t){return ft(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(d(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=it(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return d(t,"dropRecognizeWith",this)?this:(t=it(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(d(t,"requireFailure",this))return this;var e=this.requireFail;return t=it(t,this),w(e,t)===-1&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(d(t,"dropRequireFailure",this))return this;t=it(t,this);var e=w(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){i.manager.emit(e,t)}var i=this,o=this.state;o<fe&&e(i.options.event+tt(o)),e(i.options.event),t.additionalEvent&&e(t.additionalEvent),o>=fe&&e(i.options.event+tt(o))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|ue)))return!1;t++}return!0},recognize:function(t){var e=ft({},t);if(!f(this.options.enable,[this,e]))return this.reset(),void(this.state=32);this.state&(me|ve|32)&&(this.state=ue),this.state=this.process(e),this.state&(ce|pe|fe|ve)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},c(ot,$,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,o=e&(ce|pe),n=this.attrTest(t);return o&&(i&It||!n)?e|ve:o||n?i&Pt?e|fe:e&ce?e|pe:ce:32}}),c(nt,ot,{defaults:{event:"pan",threshold:10,pointers:1,direction:jt},getTouchAction:function(){var t=this.options.direction,e=[];return t&Ft&&e.push(de),t&Bt&&e.push(he),e},directionTest:function(t){var e=this.options,i=!0,o=t.distance,n=t.direction,s=t.deltaX,r=t.deltaY;return n&e.direction||(e.direction&Ft?(n=0===s?Nt:s<0?Rt:zt,i=s!=this.pX,o=Math.abs(t.deltaX)):(n=0===r?Nt:r<0?At:Lt,i=r!=this.pY,o=Math.abs(t.deltaY))),t.direction=n,i&&o>e.threshold&&n&e.direction},attrTest:function(t){return ot.prototype.attrTest.call(this,t)&&(this.state&ce||!(this.state&ce)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=et(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),c(st,ot,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[ae]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&ce)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),c(rt,$,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[se]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,o=t.distance<e.threshold,n=t.deltaTime>e.time;if(this._input=t,!o||!i||t.eventType&(Pt|It)&&!n)this.reset();else if(t.eventType&Tt)this.reset(),this._timer=h(function(){this.state=me,this.tryEmit()},e.time,this);else if(t.eventType&Pt)return me;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===me&&(t&&t.eventType&Pt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=_t(),this.manager.emit(this.options.event,this._input)))}}),c(at,ot,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[ae]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&ce)}}),c(ht,ot,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Ft|Bt,pointers:1},getTouchAction:function(){return nt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return i&(Ft|Bt)?e=t.overallVelocity:i&Ft?e=t.overallVelocityX:i&Bt&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&i&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&bt(e)>this.options.velocity&&t.eventType&Pt},emit:function(t){var e=et(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),c(dt,$,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[re]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,o=t.distance<e.threshold,n=t.deltaTime<e.time;if(this.reset(),t.eventType&Tt&&0===this.count)return this.failTimeout();if(o&&n&&i){if(t.eventType!=Pt)return this.failTimeout();var s=!this.pTime||t.timeStamp-this.pTime<e.interval,r=!this.pCenter||L(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,r&&s?this.count+=1:this.count=1,this._input=t;if(0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=h(function(){this.state=me,this.tryEmit()},e.interval,this),ce):me}return 32},failTimeout:function(){return this._timer=h(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==me&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),lt.VERSION="2.0.7",lt.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[at,{enable:!1}],[st,{enable:!1},["rotate"]],[ht,{direction:Ft}],[nt,{direction:Ft},["swipe"]],[dt],[dt,{event:"doubletap",taps:2},["tap"]],[rt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};ut.prototype={set:function(t){return ft(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,o=this.recognizers,n=e.curRecognizer;(!n||n&&n.state&me)&&(n=e.curRecognizer=null);for(var s=0;s<o.length;)i=o[s],2===e.stopped||n&&i!=n&&!i.canRecognizeWith(n)?i.reset():i.recognize(t),!n&&i.state&(ce|pe|fe)&&(n=e.curRecognizer=i),s++}},get:function(t){if(t instanceof $)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(d(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(d(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,i=w(e,t);i!==-1&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==a&&e!==a){var i=this.handlers;return l(_(t),function(t){i[t]=i[t]||[],i[t].push(e)}),this}},off:function(t,e){if(t!==a){var i=this.handlers;return l(_(t),function(t){e?i[t]&&i[t].splice(w(i[t],e),1):delete i[t]}),this}},emit:function(t,e){this.options.domEvents&&pt(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var o=0;o<i.length;)i[o](e),o++}},destroy:function(){this.element&&ct(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},ft(lt,{INPUT_START:Tt,INPUT_MOVE:Et,INPUT_END:Pt,INPUT_CANCEL:It,STATE_POSSIBLE:ue,STATE_BEGAN:ce,STATE_CHANGED:pe,STATE_ENDED:fe,STATE_RECOGNIZED:me,STATE_CANCELLED:ve,STATE_FAILED:32,DIRECTION_NONE:Nt,DIRECTION_LEFT:Rt,DIRECTION_RIGHT:zt,DIRECTION_UP:At,DIRECTION_DOWN:Lt,DIRECTION_HORIZONTAL:Ft,DIRECTION_VERTICAL:Bt,DIRECTION_ALL:jt,Manager:ut,Input:D,TouchAction:J,TouchInput:V,MouseInput:H,PointerEventInput:W,TouchMouseInput:q,SingleTouchInput:Y,Recognizer:$,AttrRecognizer:ot,Tap:dt,Pan:nt,Swipe:ht,Pinch:st,Rotate:at,Press:rt,on:v,off:g,each:l,merge:xt,extend:wt,assign:ft,inherit:c,bindFn:p,prefixed:O}),(void 0!==n?n:"undefined"!=typeof self?self:{}).Hammer=lt,(o=function(){return lt}.call(e,i,e,t))!==a&&(t.exports=o)}(window,document)},function(t,e,i){var o,n,s;!function(i,r){n=[],o=r,void 0!==(s="function"==typeof o?o.apply(e,n):o)&&(t.exports=s)}(0,function(){function t(t){var e,i=t&&t.preventDefault||!1,o=t&&t.container||window,n={},s={keydown:{},keyup:{}},r={};for(e=97;e<=122;e++)r[String.fromCharCode(e)]={code:e-97+65,shift:!1};for(e=65;e<=90;e++)r[String.fromCharCode(e)]={code:e,shift:!0};for(e=0;e<=9;e++)r[""+e]={code:48+e,shift:!1};for(e=1;e<=12;e++)r["F"+e]={code:111+e,shift:!1};for(e=0;e<=9;e++)r["num"+e]={code:96+e,shift:!1};r["num*"]={code:106,shift:!1},r["num+"]={code:107,shift:!1},r["num-"]={code:109,shift:!1},r["num/"]={code:111,shift:!1},r["num."]={code:110,shift:!1},r.left={code:37,shift:!1},r.up={code:38,shift:!1},r.right={code:39,shift:!1},r.down={code:40,shift:!1},r.space={code:32,shift:!1},r.enter={code:13,shift:!1},r.shift={code:16,shift:void 0},r.esc={code:27,shift:!1},r.backspace={code:8,shift:!1},r.tab={code:9,shift:!1},r.ctrl={code:17,shift:!1},r.alt={code:18,shift:!1},r.delete={code:46,shift:!1},r.pageup={code:33,shift:!1},r.pagedown={code:34,shift:!1},r["="]={code:187,shift:!1},r["-"]={code:189,shift:!1},r["]"]={code:221,shift:!1},r["["]={code:219,shift:!1};var a=function(t){d(t,"keydown")},h=function(t){d(t,"keyup")},d=function(t,e){if(void 0!==s[e][t.keyCode]){for(var o=s[e][t.keyCode],n=0;n<o.length;n++)void 0===o[n].shift?o[n].fn(t):1==o[n].shift&&1==t.shiftKey?o[n].fn(t):0==o[n].shift&&0==t.shiftKey&&o[n].fn(t);1==i&&t.preventDefault()}};return n.bind=function(t,e,i){if(void 0===i&&(i="keydown"),void 0===r[t])throw new Error("unsupported key: "+t);void 0===s[i][r[t].code]&&(s[i][r[t].code]=[]),s[i][r[t].code].push({fn:e,shift:r[t].shift})},n.bindAll=function(t,e){void 0===e&&(e="keydown");for(var i in r)r.hasOwnProperty(i)&&n.bind(i,t,e)},n.getKey=function(t){for(var e in r)if(r.hasOwnProperty(e)){if(1==t.shiftKey&&1==r[e].shift&&t.keyCode==r[e].code)return e;if(0==t.shiftKey&&0==r[e].shift&&t.keyCode==r[e].code)return e;if(t.keyCode==r[e].code&&"shift"==e)return e}return"unknown key, currently not supported"},n.unbind=function(t,e,i){if(void 0===i&&(i="keydown"),void 0===r[t])throw new Error("unsupported key: "+t);if(void 0!==e){var o=[],n=s[i][r[t].code];if(void 0!==n)for(var a=0;a<n.length;a++)n[a].fn==e&&n[a].shift==r[t].shift||o.push(s[i][r[t].code][a]);s[i][r[t].code]=o}else s[i][r[t].code]=[]},n.reset=function(){s={keydown:{},keyup:{}}},n.destroy=function(){s={keydown:{},keyup:{}},o.removeEventListener("keydown",a,!0),o.removeEventListener("keyup",h,!0)},o.addEventListener("keydown",a,!0),o.addEventListener("keyup",h,!0),n}return t})},function(t,e,i){e.util=i(1),e.DOMutil=i(88),e.DataSet=i(89),e.DataView=i(93),e.Queue=i(92),e.Timeline=i(117),e.Graph2d=i(148),e.timeline={Core:i(130),DateUtil:i(129),Range:i(127),stack:i(135),TimeStep:i(133),components:{items:{Item:i(137),BackgroundItem:i(141),BoxItem:i(139),PointItem:i(140),RangeItem:i(136)},BackgroundGroup:i(138),Component:i(128),CurrentTime:i(146),CustomTime:i(144),DataAxis:i(150),DataScale:i(151),GraphGroup:i(152),Group:i(134),ItemSet:i(131),Legend:i(156),LineGraph:i(149),TimeAxis:i(142)}},e.moment=i(82),e.Hammer=i(112),e.keycharm=i(115)},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e,i,o){if(!(this instanceof n))throw new SyntaxError("Constructor must be called with the new operator");if(!(Array.isArray(i)||i instanceof u||i instanceof c)&&i instanceof Object){var s=o;o=i,i=s}o&&o.throttleRedraw&&console.warn('Timeline option "throttleRedraw" is DEPRICATED and no longer supported. It will be removed in the next MAJOR release.');var r=this;if(this.defaultOptions={start:null,end:null,autoResize:!0,orientation:{axis:"bottom",item:"bottom"},moment:d,width:null,height:null,maxHeight:null,minHeight:null},this.options=l.deepExtend({},this.defaultOptions),this._create(t),!o||o&&void 0===o.rtl){for(var a,h=this.dom.root;!a&&h;)a=window.getComputedStyle(h,null).direction,h=h.parentElement;this.options.rtl=a&&"rtl"==a.toLowerCase()}else this.options.rtl=o.rtl;this.options.rollingMode=o&&o.rollingMode,this.components=[],this.body={dom:this.dom,domProps:this.props,emitter:{on:this.on.bind(this),off:this.off.bind(this),emit:this.emit.bind(this)},hiddenDates:[],util:{getScale:function(){return r.timeAxis.step.scale},getStep:function(){return r.timeAxis.step.step},toScreen:r._toScreen.bind(r),toGlobalScreen:r._toGlobalScreen.bind(r),toTime:r._toTime.bind(r),toGlobalTime:r._toGlobalTime.bind(r)}},this.range=new p(this.body,this.options),this.components.push(this.range),this.body.range=this.range,this.timeAxis=new m(this.body,this.options),this.timeAxis2=null,this.components.push(this.timeAxis),this.currentTime=new v(this.body,this.options),this.components.push(this.currentTime),this.itemSet=new y(this.body,this.options),this.components.push(this.itemSet),this.itemsData=null,this.groupsData=null,this.dom.root.onclick=function(t){r.emit("click",r.getEventProperties(t))},this.dom.root.ondblclick=function(t){r.emit("doubleClick",r.getEventProperties(t))},this.dom.root.oncontextmenu=function(t){r.emit("contextmenu",r.getEventProperties(t))},this.dom.root.onmouseover=function(t){r.emit("mouseOver",r.getEventProperties(t))},this.dom.root.onmousemove=function(t){r.emit("mouseMove",r.getEventProperties(t))},this.fitDone=!1,this.on("changed",function(){if(null!=this.itemsData&&!this.options.rollingMode&&!r.fitDone)if(r.fitDone=!0,void 0!=r.options.start||void 0!=r.options.end){if(void 0==r.options.start||void 0==r.options.end)var t=r.getItemRange();var e=void 0!=r.options.start?r.options.start:t.min,i=void 0!=r.options.end?r.options.end:t.max;r.setWindow(e,i,{animation:!1})}else r.fit({animation:!1})}),o&&this.setOptions(o),i&&this.setGroups(i),e&&this.setItems(e),this._redraw()}var s=i(118),r=o(s),a=i(126),h=o(a),d=(i(99),i(112),i(82)),l=i(1),u=i(89),c=i(93),p=i(127),f=i(130),m=i(142),v=i(146),g=i(144),y=i(131),b=i(126).printStyle,_=i(147).allOptions,w=i(147).configureOptions;n.prototype=new f,n.prototype._createConfigurator=function(){return new r.default(this,this.dom.container,w)},n.prototype.redraw=function(){this.itemSet&&this.itemSet.markDirty({refreshItems:!0}),this._redraw()},n.prototype.setOptions=function(t){if(h.default.validate(t,_)===!0&&console.log("%cErrors have been found in the supplied options object.",b),f.prototype.setOptions.call(this,t),"type"in t&&t.type!==this.options.type){this.options.type=t.type;var e=this.itemsData;if(e){var i=this.getSelection();this.setItems(null),this.setItems(e),this.setSelection(i)}}},n.prototype.setItems=function(t){var e;e=t?t instanceof u||t instanceof c?t:new u(t,{type:{start:"Date",end:"Date"}}):null,this.itemsData=e,this.itemSet&&this.itemSet.setItems(e)},n.prototype.setGroups=function(t){var e;if(t){var i=function(t){return t.visible!==!1};e=t instanceof u||t instanceof c?new c(t,{filter:i}):new u(t.filter(i))}else e=null;this.groupsData=e,this.itemSet.setGroups(e)},n.prototype.setData=function(t){t&&t.groups&&this.setGroups(t.groups),t&&t.items&&this.setItems(t.items)},n.prototype.setSelection=function(t,e){this.itemSet&&this.itemSet.setSelection(t),e&&e.focus&&this.focus(t,e)},n.prototype.getSelection=function(){return this.itemSet&&this.itemSet.getSelection()||[]},n.prototype.focus=function(t,e){if(this.itemsData&&void 0!=t){var i=Array.isArray(t)?t:[t],o=this.itemsData.getDataSet().get(i,{type:{start:"Date",end:"Date"}}),n=null,s=null;if(o.forEach(function(t){var e=t.start.valueOf(),i="end"in t?t.end.valueOf():t.start.valueOf();(null===n||e<n)&&(n=e),(null===s||i>s)&&(s=i)}),null!==n&&null!==s){var r=(n+s)/2,a=Math.max(this.range.end-this.range.start,1.1*(s-n)),h=!e||void 0===e.animation||e.animation;this.range.setRange(r-a/2,r+a/2,h)}}},n.prototype.fit=function(t){var e,i=!t||void 0===t.animation||t.animation,o=this.itemsData&&this.itemsData.getDataSet();1===o.length&&void 0===o.get()[0].end?(e=this.getDataRange(),this.moveTo(e.min.valueOf(),{animation:i})):(e=this.getItemRange(),this.range.setRange(e.min,e.max,i))},n.prototype.getItemRange=function(){var t=this.getDataRange(),e=null!==t.min?t.min.valueOf():null,i=null!==t.max?t.max.valueOf():null,o=null,n=null;if(null!=e&&null!=i){var s=function(t){return l.convert(t.data.start,"Date").valueOf()},r=function(t){var e=void 0!=t.data.end?t.data.end:t.data.start;return l.convert(e,"Date").valueOf()},a=i-e;a<=0&&(a=10);var h=a/this.props.center.width;if(l.forEach(this.itemSet.items,function(t){t.groupShowing&&(t.show(),t.repositionX());var a=s(t),d=r(t);if(this.options.rtl)var l=a-(t.getWidthRight()+10)*h,u=d+(t.getWidthLeft()+10)*h;else var l=a-(t.getWidthLeft()+10)*h,u=d+(t.getWidthRight()+10)*h;l<e&&(e=l,o=t),u>i&&(i=u,n=t)}.bind(this)),o&&n){var d=o.getWidthLeft()+10,u=n.getWidthRight()+10,c=this.props.center.width-d-u;c>0&&(this.options.rtl?(e=s(o)-u*a/c,i=r(n)+d*a/c):(e=s(o)-d*a/c,i=r(n)+u*a/c))}}return{min:null!=e?new Date(e):null,max:null!=i?new Date(i):null}},n.prototype.getDataRange=function(){var t=null,e=null,i=this.itemsData&&this.itemsData.getDataSet();return i&&i.forEach(function(i){var o=l.convert(i.start,"Date").valueOf(),n=l.convert(void 0!=i.end?i.end:i.start,"Date").valueOf();(null===t||o<t)&&(t=o),(null===e||n>e)&&(e=n)}),{min:null!=t?new Date(t):null,max:null!=e?new Date(e):null}},n.prototype.getEventProperties=function(t){var e=t.center?t.center.x:t.clientX,i=t.center?t.center.y:t.clientY;if(this.options.rtl)var o=l.getAbsoluteRight(this.dom.centerContainer)-e;else var o=e-l.getAbsoluteLeft(this.dom.centerContainer);var n=i-l.getAbsoluteTop(this.dom.centerContainer),s=this.itemSet.itemFromTarget(t),r=this.itemSet.groupFromTarget(t),a=g.customTimeFromTarget(t),h=this.itemSet.options.snap||null,d=this.body.util.getScale(),u=this.body.util.getStep(),c=this._toTime(o),p=h?h(c,d,u):c,f=l.getTarget(t),m=null;return null!=s?m="item":null!=a?m="custom-time":l.hasParent(f,this.timeAxis.dom.foreground)?m="axis":this.timeAxis2&&l.hasParent(f,this.timeAxis2.dom.foreground)?m="axis":l.hasParent(f,this.itemSet.dom.labelSet)?m="group-label":l.hasParent(f,this.currentTime.bar)?m="current-time":l.hasParent(f,this.dom.center)&&(m="background"),{event:t,item:s?s.id:null,group:r?r.groupId:null,what:m,pageX:t.srcEvent?t.srcEvent.pageX:t.pageX,pageY:t.srcEvent?t.srcEvent.pageY:t.pageY,x:o,y:n,time:c,snappedTime:p}},n.prototype.toggleRollingMode=function(){this.range.rolling?this.range.stopRolling():(void 0==this.options.rollingMode&&this.setOptions(this.options),this.range.startRolling())},t.exports=n},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(90),s=o(n),r=i(62),a=o(r),h=i(119),d=o(h),l=i(120),u=o(l),c=i(124),p=o(c),f=i(1),m=function(){function t(e,i,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;(0,d.default)(this,t),this.parent=e,this.changedOptions=[],this.container=i,this.allowCreation=!1,this.options={},this.initialized=!1,this.popupCounter=0,this.defaultOptions={enabled:!1,filter:!0,container:void 0,showButton:!0},f.extend(this.options,this.defaultOptions),this.configureOptions=o,this.moduleOptions={},this.domElements=[],this.popupDiv={},this.popupLimit=5,this.popupHistory={},this.colorPicker=new p.default(n),this.wrapper=void 0}return(0,u.default)(t,[{key:"setOptions",value:function(t){if(void 0!==t){this.popupHistory={},this._removePopup();var e=!0;"string"==typeof t?this.options.filter=t:t instanceof Array?this.options.filter=t.join():"object"===(void 0===t?"undefined":(0,a.default)(t))?(void 0!==t.container&&(this.options.container=t.container),void 0!==t.filter&&(this.options.filter=t.filter),void 0!==t.showButton&&(this.options.showButton=t.showButton),void 0!==t.enabled&&(e=t.enabled)):"boolean"==typeof t?(this.options.filter=!0,e=t):"function"==typeof t&&(this.options.filter=t,e=!0),this.options.filter===!1&&(e=!1),this.options.enabled=e}this._clean()}},{key:"setModuleOptions",value:function(t){this.moduleOptions=t,this.options.enabled===!0&&(this._clean(),void 0!==this.options.container&&(this.container=this.options.container),this._create())}},{key:"_create",value:function(){var t=this;this._clean(),this.changedOptions=[];var e=this.options.filter,i=0,o=!1;for(var n in this.configureOptions)this.configureOptions.hasOwnProperty(n)&&(this.allowCreation=!1,o=!1,"function"==typeof e?(o=e(n,[]),o=o||this._handleObject(this.configureOptions[n],[n],!0)):e!==!0&&e.indexOf(n)===-1||(o=!0),o!==!1&&(this.allowCreation=!0,i>0&&this._makeItem([]),this._makeHeader(n),this._handleObject(this.configureOptions[n],[n])),i++);if(this.options.showButton===!0){var s=document.createElement("div");s.className="vis-configuration vis-config-button",s.innerHTML="generate options",s.onclick=function(){t._printOptions()},s.onmouseover=function(){s.className="vis-configuration vis-config-button hover"},s.onmouseout=function(){s.className="vis-configuration vis-config-button"},this.optionsContainer=document.createElement("div"),this.optionsContainer.className="vis-configuration vis-config-option-container",this.domElements.push(this.optionsContainer),this.domElements.push(s)}this._push()}},{key:"_push",value:function(){this.wrapper=document.createElement("div"),this.wrapper.className="vis-configuration-wrapper",this.container.appendChild(this.wrapper);for(var t=0;t<this.domElements.length;t++)this.wrapper.appendChild(this.domElements[t]);this._showPopupIfNeeded()}},{key:"_clean",value:function(){for(var t=0;t<this.domElements.length;t++)this.wrapper.removeChild(this.domElements[t]);void 0!==this.wrapper&&(this.container.removeChild(this.wrapper),this.wrapper=void 0),this.domElements=[],this._removePopup()}},{key:"_getValue",value:function(t){for(var e=this.moduleOptions,i=0;i<t.length;i++){if(void 0===e[t[i]]){e=void 0;break}e=e[t[i]]}return e}},{key:"_makeItem",value:function(t){if(this.allowCreation===!0){var e=document.createElement("div");e.className="vis-configuration vis-config-item vis-config-s"+t.length;for(var i=arguments.length,o=Array(i>1?i-1:0),n=1;n<i;n++)o[n-1]=arguments[n];return o.forEach(function(t){e.appendChild(t)}),this.domElements.push(e),this.domElements.length}return 0}},{key:"_makeHeader",value:function(t){var e=document.createElement("div");e.className="vis-configuration vis-config-header",e.innerHTML=t,this._makeItem([],e)}},{key:"_makeLabel",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=document.createElement("div");return o.className="vis-configuration vis-config-label vis-config-s"+e.length,o.innerHTML=i===!0?"<i><b>"+t+":</b></i>":t+":",o}},{key:"_makeDropdown",value:function(t,e,i){var o=document.createElement("select");o.className="vis-configuration vis-config-select";var n=0;void 0!==e&&t.indexOf(e)!==-1&&(n=t.indexOf(e));for(var s=0;s<t.length;s++){var r=document.createElement("option");r.value=t[s],s===n&&(r.selected="selected"),r.innerHTML=t[s],o.appendChild(r)}var a=this;o.onchange=function(){a._update(this.value,i)};var h=this._makeLabel(i[i.length-1],i);this._makeItem(i,h,o)}},{key:"_makeRange",value:function(t,e,i){var o=t[0],n=t[1],s=t[2],r=t[3],a=document.createElement("input");a.className="vis-configuration vis-config-range";try{a.type="range",a.min=n,a.max=s}catch(t){}a.step=r;var h="",d=0;if(void 0!==e){e<0&&1.2*e<n?(a.min=Math.ceil(1.2*e),d=a.min,h="range increased"):e/1.2<n&&(a.min=Math.ceil(e/1.2),d=a.min,h="range increased"),1.2*e>s&&1!==s&&(a.max=Math.ceil(1.2*e),d=a.max,h="range increased"),a.value=e}else a.value=o;var l=document.createElement("input");l.className="vis-configuration vis-config-rangeinput",l.value=a.value;var u=this;a.onchange=function(){l.value=this.value,u._update(Number(this.value),i)},a.oninput=function(){l.value=this.value};var c=this._makeLabel(i[i.length-1],i),p=this._makeItem(i,c,a,l);""!==h&&this.popupHistory[p]!==d&&(this.popupHistory[p]=d,this._setupPopup(h,p))}},{key:"_setupPopup",value:function(t,e){var i=this;if(this.initialized===!0&&this.allowCreation===!0&&this.popupCounter<this.popupLimit){var o=document.createElement("div");o.id="vis-configuration-popup",o.className="vis-configuration-popup",o.innerHTML=t,o.onclick=function(){i._removePopup()},this.popupCounter+=1,this.popupDiv={html:o,index:e}}}},{key:"_removePopup",value:function(){void 0!==this.popupDiv.html&&(this.popupDiv.html.parentNode.removeChild(this.popupDiv.html),clearTimeout(this.popupDiv.hideTimeout),clearTimeout(this.popupDiv.deleteTimeout),this.popupDiv={})}},{key:"_showPopupIfNeeded",value:function(){var t=this;if(void 0!==this.popupDiv.html){var e=this.domElements[this.popupDiv.index],i=e.getBoundingClientRect();this.popupDiv.html.style.left=i.left+"px",this.popupDiv.html.style.top=i.top-30+"px",document.body.appendChild(this.popupDiv.html),this.popupDiv.hideTimeout=setTimeout(function(){t.popupDiv.html.style.opacity=0},1500),this.popupDiv.deleteTimeout=setTimeout(function(){t._removePopup()},1800)}}},{key:"_makeCheckbox",value:function(t,e,i){var o=document.createElement("input");o.type="checkbox",o.className="vis-configuration vis-config-checkbox",o.checked=t,void 0!==e&&(o.checked=e,e!==t&&("object"===(void 0===t?"undefined":(0,a.default)(t))?e!==t.enabled&&this.changedOptions.push({path:i,value:e}):this.changedOptions.push({path:i,value:e})));var n=this;o.onchange=function(){n._update(this.checked,i)};var s=this._makeLabel(i[i.length-1],i);this._makeItem(i,s,o)}},{key:"_makeTextInput",value:function(t,e,i){var o=document.createElement("input");o.type="text",o.className="vis-configuration vis-config-text",o.value=e,e!==t&&this.changedOptions.push({path:i,value:e});var n=this;o.onchange=function(){n._update(this.value,i)};var s=this._makeLabel(i[i.length-1],i);this._makeItem(i,s,o)}},{key:"_makeColorField",value:function(t,e,i){var o=this,n=t[1],s=document.createElement("div");e=void 0===e?n:e,"none"!==e?(s.className="vis-configuration vis-config-colorBlock",s.style.backgroundColor=e):s.className="vis-configuration vis-config-colorBlock none",e=void 0===e?n:e,s.onclick=function(){o._showColorPicker(e,s,i)};var r=this._makeLabel(i[i.length-1],i);this._makeItem(i,r,s)}},{key:"_showColorPicker",value:function(t,e,i){var o=this;e.onclick=function(){},this.colorPicker.insertTo(e),this.colorPicker.show(),this.colorPicker.setColor(t),this.colorPicker.setUpdateCallback(function(t){var n="rgba("+t.r+","+t.g+","+t.b+","+t.a+")";e.style.backgroundColor=n,o._update(n,i)}),this.colorPicker.setCloseCallback(function(){e.onclick=function(){o._showColorPicker(t,e,i)}})}},{key:"_handleObject",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=!1,n=this.options.filter,s=!1;for(var r in t)if(t.hasOwnProperty(r)){o=!0;var a=t[r],h=f.copyAndExtendArray(e,r);if("function"==typeof n&&(o=n(r,e))===!1&&!(a instanceof Array)&&"string"!=typeof a&&"boolean"!=typeof a&&a instanceof Object&&(this.allowCreation=!1,o=this._handleObject(a,h,!0),this.allowCreation=i===!1),o!==!1){s=!0;var d=this._getValue(h);if(a instanceof Array)this._handleArray(a,d,h);else if("string"==typeof a)this._makeTextInput(a,d,h);else if("boolean"==typeof a)this._makeCheckbox(a,d,h);else if(a instanceof Object){var l=!0;if(e.indexOf("physics")!==-1&&this.moduleOptions.physics.solver!==r&&(l=!1),l===!0)if(void 0!==a.enabled){var u=f.copyAndExtendArray(h,"enabled"),c=this._getValue(u);if(c===!0){var p=this._makeLabel(r,h,!0);this._makeItem(h,p),s=this._handleObject(a,h)||s}else this._makeCheckbox(a,c,h)}else{var m=this._makeLabel(r,h,!0);this._makeItem(h,m),s=this._handleObject(a,h)||s}}else console.error("dont know how to handle",a,r,h)}}return s}},{key:"_handleArray",value:function(t,e,i){"string"==typeof t[0]&&"color"===t[0]?(this._makeColorField(t,e,i),t[1]!==e&&this.changedOptions.push({path:i,value:e})):"string"==typeof t[0]?(this._makeDropdown(t,e,i),t[0]!==e&&this.changedOptions.push({path:i,value:e})):"number"==typeof t[0]&&(this._makeRange(t,e,i),t[0]!==e&&this.changedOptions.push({path:i,value:Number(e)}))}},{key:"_update",value:function(t,e){var i=this._constructOptions(t,e);this.parent.body&&this.parent.body.emitter&&this.parent.body.emitter.emit&&this.parent.body.emitter.emit("configChange",i),this.initialized=!0,this.parent.setOptions(i)}},{key:"_constructOptions",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i;t="true"===t||t,t="false"!==t&&t;for(var n=0;n<e.length;n++)"global"!==e[n]&&(void 0===o[e[n]]&&(o[e[n]]={}),n!==e.length-1?o=o[e[n]]:o[e[n]]=t);return i}},{key:"_printOptions",value:function(){var t=this.getOptions();this.optionsContainer.innerHTML="<pre>var options = "+(0,s.default)(t,null,2)+"</pre>"}},{key:"getOptions",value:function(){for(var t={},e=0;e<this.changedOptions.length;e++)this._constructOptions(this.changedOptions[e].value,this.changedOptions[e].path,t);return t}}]),t}();e.default=m},function(t,e){e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,i){e.__esModule=!0;var o=i(121),n=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,n.default)(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}()},function(t,e,i){t.exports={default:i(122),__esModule:!0}},function(t,e,i){i(123);var o=i(17).Object;t.exports=function(t,e,i){return o.defineProperty(t,e,i)}},function(t,e,i){var o=i(15);o(o.S+o.F*!i(25),"Object",{defineProperty:i(21).f})},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(90),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(112),u=i(125),c=i(1),p=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;(0,a.default)(this,t),this.pixelRatio=e,this.generated=!1,this.centerCoordinates={x:144.5,y:144.5},this.r=289*.49,this.color={r:255,g:255,b:255,a:1},this.hueCircle=void 0,this.initialColor={r:255,g:255,b:255,a:1},this.previousColor=void 0,this.applied=!1,this.updateCallback=function(){},this.closeCallback=function(){},this._create()}return(0,d.default)(t,[{key:"insertTo",value:function(t){void 0!==this.hammer&&(this.hammer.destroy(),this.hammer=void 0),this.container=t,this.container.appendChild(this.frame),this._bindHammer(),this._setSize()}},{key:"setUpdateCallback",value:function(t){if("function"!=typeof t)throw new Error("Function attempted to set as colorPicker update callback is not a function.");this.updateCallback=t}},{key:"setCloseCallback",value:function(t){if("function"!=typeof t)throw new Error("Function attempted to set as colorPicker closing callback is not a function.");this.closeCallback=t}},{key:"_isColorString",value:function(t){var e={
black:"#000000",navy:"#000080",darkblue:"#00008B",mediumblue:"#0000CD",blue:"#0000FF",darkgreen:"#006400",green:"#008000",teal:"#008080",darkcyan:"#008B8B",deepskyblue:"#00BFFF",darkturquoise:"#00CED1",mediumspringgreen:"#00FA9A",lime:"#00FF00",springgreen:"#00FF7F",aqua:"#00FFFF",cyan:"#00FFFF",midnightblue:"#191970",dodgerblue:"#1E90FF",lightseagreen:"#20B2AA",forestgreen:"#228B22",seagreen:"#2E8B57",darkslategray:"#2F4F4F",limegreen:"#32CD32",mediumseagreen:"#3CB371",turquoise:"#40E0D0",royalblue:"#4169E1",steelblue:"#4682B4",darkslateblue:"#483D8B",mediumturquoise:"#48D1CC",indigo:"#4B0082",darkolivegreen:"#556B2F",cadetblue:"#5F9EA0",cornflowerblue:"#6495ED",mediumaquamarine:"#66CDAA",dimgray:"#696969",slateblue:"#6A5ACD",olivedrab:"#6B8E23",slategray:"#708090",lightslategray:"#778899",mediumslateblue:"#7B68EE",lawngreen:"#7CFC00",chartreuse:"#7FFF00",aquamarine:"#7FFFD4",maroon:"#800000",purple:"#800080",olive:"#808000",gray:"#808080",skyblue:"#87CEEB",lightskyblue:"#87CEFA",blueviolet:"#8A2BE2",darkred:"#8B0000",darkmagenta:"#8B008B",saddlebrown:"#8B4513",darkseagreen:"#8FBC8F",lightgreen:"#90EE90",mediumpurple:"#9370D8",darkviolet:"#9400D3",palegreen:"#98FB98",darkorchid:"#9932CC",yellowgreen:"#9ACD32",sienna:"#A0522D",brown:"#A52A2A",darkgray:"#A9A9A9",lightblue:"#ADD8E6",greenyellow:"#ADFF2F",paleturquoise:"#AFEEEE",lightsteelblue:"#B0C4DE",powderblue:"#B0E0E6",firebrick:"#B22222",darkgoldenrod:"#B8860B",mediumorchid:"#BA55D3",rosybrown:"#BC8F8F",darkkhaki:"#BDB76B",silver:"#C0C0C0",mediumvioletred:"#C71585",indianred:"#CD5C5C",peru:"#CD853F",chocolate:"#D2691E",tan:"#D2B48C",lightgrey:"#D3D3D3",palevioletred:"#D87093",thistle:"#D8BFD8",orchid:"#DA70D6",goldenrod:"#DAA520",crimson:"#DC143C",gainsboro:"#DCDCDC",plum:"#DDA0DD",burlywood:"#DEB887",lightcyan:"#E0FFFF",lavender:"#E6E6FA",darksalmon:"#E9967A",violet:"#EE82EE",palegoldenrod:"#EEE8AA",lightcoral:"#F08080",khaki:"#F0E68C",aliceblue:"#F0F8FF",honeydew:"#F0FFF0",azure:"#F0FFFF",sandybrown:"#F4A460",wheat:"#F5DEB3",beige:"#F5F5DC",whitesmoke:"#F5F5F5",mintcream:"#F5FFFA",ghostwhite:"#F8F8FF",salmon:"#FA8072",antiquewhite:"#FAEBD7",linen:"#FAF0E6",lightgoldenrodyellow:"#FAFAD2",oldlace:"#FDF5E6",red:"#FF0000",fuchsia:"#FF00FF",magenta:"#FF00FF",deeppink:"#FF1493",orangered:"#FF4500",tomato:"#FF6347",hotpink:"#FF69B4",coral:"#FF7F50",darkorange:"#FF8C00",lightsalmon:"#FFA07A",orange:"#FFA500",lightpink:"#FFB6C1",pink:"#FFC0CB",gold:"#FFD700",peachpuff:"#FFDAB9",navajowhite:"#FFDEAD",moccasin:"#FFE4B5",bisque:"#FFE4C4",mistyrose:"#FFE4E1",blanchedalmond:"#FFEBCD",papayawhip:"#FFEFD5",lavenderblush:"#FFF0F5",seashell:"#FFF5EE",cornsilk:"#FFF8DC",lemonchiffon:"#FFFACD",floralwhite:"#FFFAF0",snow:"#FFFAFA",yellow:"#FFFF00",lightyellow:"#FFFFE0",ivory:"#FFFFF0",white:"#FFFFFF"};if("string"==typeof t)return e[t]}},{key:"setColor",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if("none"!==t){var i=void 0,o=this._isColorString(t);if(void 0!==o&&(t=o),c.isString(t)===!0){if(c.isValidRGB(t)===!0){var n=t.substr(4).substr(0,t.length-5).split(",");i={r:n[0],g:n[1],b:n[2],a:1}}else if(c.isValidRGBA(t)===!0){var r=t.substr(5).substr(0,t.length-6).split(",");i={r:r[0],g:r[1],b:r[2],a:r[3]}}else if(c.isValidHex(t)===!0){var a=c.hexToRGB(t);i={r:a.r,g:a.g,b:a.b,a:1}}}else if(t instanceof Object&&void 0!==t.r&&void 0!==t.g&&void 0!==t.b){var h=void 0!==t.a?t.a:"1.0";i={r:t.r,g:t.g,b:t.b,a:h}}if(void 0===i)throw new Error("Unknown color passed to the colorPicker. Supported are strings: rgb, hex, rgba. Object: rgb ({r:r,g:g,b:b,[a:a]}). Supplied: "+(0,s.default)(t));this._setColor(i,e)}}},{key:"show",value:function(){void 0!==this.closeCallback&&(this.closeCallback(),this.closeCallback=void 0),this.applied=!1,this.frame.style.display="block",this._generateHueCircle()}},{key:"_hide",value:function(){var t=this;(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])===!0&&(this.previousColor=c.extend({},this.color)),this.applied===!0&&this.updateCallback(this.initialColor),this.frame.style.display="none",setTimeout(function(){void 0!==t.closeCallback&&(t.closeCallback(),t.closeCallback=void 0)},0)}},{key:"_save",value:function(){this.updateCallback(this.color),this.applied=!1,this._hide()}},{key:"_apply",value:function(){this.applied=!0,this.updateCallback(this.color),this._updatePicker(this.color)}},{key:"_loadLast",value:function(){void 0!==this.previousColor?this.setColor(this.previousColor,!1):alert("There is no last color to load...")}},{key:"_setColor",value:function(t){(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])===!0&&(this.initialColor=c.extend({},t)),this.color=t;var e=c.RGBToHSV(t.r,t.g,t.b),i=2*Math.PI,o=this.r*e.s,n=this.centerCoordinates.x+o*Math.sin(i*e.h),s=this.centerCoordinates.y+o*Math.cos(i*e.h);this.colorPickerSelector.style.left=n-.5*this.colorPickerSelector.clientWidth+"px",this.colorPickerSelector.style.top=s-.5*this.colorPickerSelector.clientHeight+"px",this._updatePicker(t)}},{key:"_setOpacity",value:function(t){this.color.a=t/100,this._updatePicker(this.color)}},{key:"_setBrightness",value:function(t){var e=c.RGBToHSV(this.color.r,this.color.g,this.color.b);e.v=t/100;var i=c.HSVToRGB(e.h,e.s,e.v);i.a=this.color.a,this.color=i,this._updatePicker()}},{key:"_updatePicker",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.color,e=c.RGBToHSV(t.r,t.g,t.b),i=this.colorPickerCanvas.getContext("2d");void 0===this.pixelRation&&(this.pixelRatio=(window.devicePixelRatio||1)/(i.webkitBackingStorePixelRatio||i.mozBackingStorePixelRatio||i.msBackingStorePixelRatio||i.oBackingStorePixelRatio||i.backingStorePixelRatio||1)),i.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0);var o=this.colorPickerCanvas.clientWidth,n=this.colorPickerCanvas.clientHeight;i.clearRect(0,0,o,n),i.putImageData(this.hueCircle,0,0),i.fillStyle="rgba(0,0,0,"+(1-e.v)+")",i.circle(this.centerCoordinates.x,this.centerCoordinates.y,this.r),i.fill(),this.brightnessRange.value=100*e.v,this.opacityRange.value=100*t.a,this.initialColorDiv.style.backgroundColor="rgba("+this.initialColor.r+","+this.initialColor.g+","+this.initialColor.b+","+this.initialColor.a+")",this.newColorDiv.style.backgroundColor="rgba("+this.color.r+","+this.color.g+","+this.color.b+","+this.color.a+")"}},{key:"_setSize",value:function(){this.colorPickerCanvas.style.width="100%",this.colorPickerCanvas.style.height="100%",this.colorPickerCanvas.width=289*this.pixelRatio,this.colorPickerCanvas.height=289*this.pixelRatio}},{key:"_create",value:function(){if(this.frame=document.createElement("div"),this.frame.className="vis-color-picker",this.colorPickerDiv=document.createElement("div"),this.colorPickerSelector=document.createElement("div"),this.colorPickerSelector.className="vis-selector",this.colorPickerDiv.appendChild(this.colorPickerSelector),this.colorPickerCanvas=document.createElement("canvas"),this.colorPickerDiv.appendChild(this.colorPickerCanvas),this.colorPickerCanvas.getContext){var t=this.colorPickerCanvas.getContext("2d");this.pixelRatio=(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1),this.colorPickerCanvas.getContext("2d").setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0)}else{var e=document.createElement("DIV");e.style.color="red",e.style.fontWeight="bold",e.style.padding="10px",e.innerHTML="Error: your browser does not support HTML canvas",this.colorPickerCanvas.appendChild(e)}this.colorPickerDiv.className="vis-color",this.opacityDiv=document.createElement("div"),this.opacityDiv.className="vis-opacity",this.brightnessDiv=document.createElement("div"),this.brightnessDiv.className="vis-brightness",this.arrowDiv=document.createElement("div"),this.arrowDiv.className="vis-arrow",this.opacityRange=document.createElement("input");try{this.opacityRange.type="range",this.opacityRange.min="0",this.opacityRange.max="100"}catch(t){}this.opacityRange.value="100",this.opacityRange.className="vis-range",this.brightnessRange=document.createElement("input");try{this.brightnessRange.type="range",this.brightnessRange.min="0",this.brightnessRange.max="100"}catch(t){}this.brightnessRange.value="100",this.brightnessRange.className="vis-range",this.opacityDiv.appendChild(this.opacityRange),this.brightnessDiv.appendChild(this.brightnessRange);var i=this;this.opacityRange.onchange=function(){i._setOpacity(this.value)},this.opacityRange.oninput=function(){i._setOpacity(this.value)},this.brightnessRange.onchange=function(){i._setBrightness(this.value)},this.brightnessRange.oninput=function(){i._setBrightness(this.value)},this.brightnessLabel=document.createElement("div"),this.brightnessLabel.className="vis-label vis-brightness",this.brightnessLabel.innerHTML="brightness:",this.opacityLabel=document.createElement("div"),this.opacityLabel.className="vis-label vis-opacity",this.opacityLabel.innerHTML="opacity:",this.newColorDiv=document.createElement("div"),this.newColorDiv.className="vis-new-color",this.newColorDiv.innerHTML="new",this.initialColorDiv=document.createElement("div"),this.initialColorDiv.className="vis-initial-color",this.initialColorDiv.innerHTML="initial",this.cancelButton=document.createElement("div"),this.cancelButton.className="vis-button vis-cancel",this.cancelButton.innerHTML="cancel",this.cancelButton.onclick=this._hide.bind(this,!1),this.applyButton=document.createElement("div"),this.applyButton.className="vis-button vis-apply",this.applyButton.innerHTML="apply",this.applyButton.onclick=this._apply.bind(this),this.saveButton=document.createElement("div"),this.saveButton.className="vis-button vis-save",this.saveButton.innerHTML="save",this.saveButton.onclick=this._save.bind(this),this.loadButton=document.createElement("div"),this.loadButton.className="vis-button vis-load",this.loadButton.innerHTML="load last",this.loadButton.onclick=this._loadLast.bind(this),this.frame.appendChild(this.colorPickerDiv),this.frame.appendChild(this.arrowDiv),this.frame.appendChild(this.brightnessLabel),this.frame.appendChild(this.brightnessDiv),this.frame.appendChild(this.opacityLabel),this.frame.appendChild(this.opacityDiv),this.frame.appendChild(this.newColorDiv),this.frame.appendChild(this.initialColorDiv),this.frame.appendChild(this.cancelButton),this.frame.appendChild(this.applyButton),this.frame.appendChild(this.saveButton),this.frame.appendChild(this.loadButton)}},{key:"_bindHammer",value:function(){var t=this;this.drag={},this.pinch={},this.hammer=new l(this.colorPickerCanvas),this.hammer.get("pinch").set({enable:!0}),u.onTouch(this.hammer,function(e){t._moveSelector(e)}),this.hammer.on("tap",function(e){t._moveSelector(e)}),this.hammer.on("panstart",function(e){t._moveSelector(e)}),this.hammer.on("panmove",function(e){t._moveSelector(e)}),this.hammer.on("panend",function(e){t._moveSelector(e)})}},{key:"_generateHueCircle",value:function(){if(this.generated===!1){var t=this.colorPickerCanvas.getContext("2d");void 0===this.pixelRation&&(this.pixelRatio=(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)),t.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0);var e=this.colorPickerCanvas.clientWidth,i=this.colorPickerCanvas.clientHeight;t.clearRect(0,0,e,i);var o=void 0,n=void 0,s=void 0,r=void 0;this.centerCoordinates={x:.5*e,y:.5*i},this.r=.49*e;var a=2*Math.PI/360,h=1/this.r,d=void 0;for(s=0;s<360;s++)for(r=0;r<this.r;r++)o=this.centerCoordinates.x+r*Math.sin(a*s),n=this.centerCoordinates.y+r*Math.cos(a*s),d=c.HSVToRGB(s*(1/360),r*h,1),t.fillStyle="rgb("+d.r+","+d.g+","+d.b+")",t.fillRect(o-.5,n-.5,2,2);t.strokeStyle="rgba(0,0,0,1)",t.circle(this.centerCoordinates.x,this.centerCoordinates.y,this.r),t.stroke(),this.hueCircle=t.getImageData(0,0,e,i)}this.generated=!0}},{key:"_moveSelector",value:function(t){var e=this.colorPickerDiv.getBoundingClientRect(),i=t.center.x-e.left,o=t.center.y-e.top,n=.5*this.colorPickerDiv.clientHeight,s=.5*this.colorPickerDiv.clientWidth,r=i-s,a=o-n,h=Math.atan2(r,a),d=.98*Math.min(Math.sqrt(r*r+a*a),s),l=Math.cos(h)*d+n,u=Math.sin(h)*d+s;this.colorPickerSelector.style.top=l-.5*this.colorPickerSelector.clientHeight+"px",this.colorPickerSelector.style.left=u-.5*this.colorPickerSelector.clientWidth+"px";var p=h/(2*Math.PI);p=p<0?p+1:p;var f=d/this.r,m=c.RGBToHSV(this.color.r,this.color.g,this.color.b);m.h=p,m.s=f;var v=c.HSVToRGB(m.h,m.s,m.v);v.a=this.color.a,this.color=v,this.initialColorDiv.style.backgroundColor="rgba("+this.initialColor.r+","+this.initialColor.g+","+this.initialColor.b+","+this.initialColor.a+")",this.newColorDiv.style.backgroundColor="rgba("+this.color.r+","+this.color.g+","+this.color.b+","+this.color.a+")"}}]),t}();e.default=p},function(t,e,i){i(112);e.onTouch=function(t,e){e.inputHandler=function(t){t.isFirst&&e(t)},t.on("hammer.input",e.inputHandler)},e.onRelease=function(t,e){return e.inputHandler=function(t){t.isFinal&&e(t)},t.on("hammer.input",e.inputHandler)},e.offTouch=function(t,e){t.off("hammer.input",e.inputHandler)},e.offRelease=e.offTouch,e.disablePreventDefaultVertically=function(t){return t.getTouchAction=function(){return["pan-y"]},t}},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.printStyle=void 0;var n=i(90),s=o(n),r=i(62),a=o(r),h=i(58),d=o(h),l=i(119),u=o(l),c=i(120),p=o(c),f=i(1),m=!1,v=void 0,g="background: #FFeeee; color: #dd0000",y=function(){function t(){(0,u.default)(this,t)}return(0,p.default)(t,null,[{key:"validate",value:function(e,i,o){m=!1,v=i;var n=i;return void 0!==o&&(n=i[o]),t.parse(e,n,[]),m}},{key:"parse",value:function(e,i,o){for(var n in e)e.hasOwnProperty(n)&&t.check(n,e,i,o)}},{key:"check",value:function(e,i,o,n){void 0===o[e]&&void 0===o.__any__?t.getSuggestion(e,o,n):void 0===o[e]&&void 0!==o.__any__?"object"===t.getType(i[e])&&void 0!==o.__any__.__type__?t.checkFields(e,i,o,"__any__",o.__any__.__type__,n):t.checkFields(e,i,o,"__any__",o.__any__,n):void 0!==o[e].__type__?t.checkFields(e,i,o,e,o[e].__type__,n):t.checkFields(e,i,o,e,o[e],n)}},{key:"checkFields",value:function(e,i,o,n,s,r){var a=t.getType(i[e]),h=s[a];void 0!==h?"array"===t.getType(h)&&h.indexOf(i[e])===-1?(console.log('%cInvalid option detected in "'+e+'". Allowed values are:'+t.print(h)+' not "'+i[e]+'". '+t.printLocation(r,e),g),m=!0):"object"===a&&"__any__"!==n&&(r=f.copyAndExtendArray(r,e),t.parse(i[e],o[n],r)):void 0===s.any&&(console.log('%cInvalid type received for "'+e+'". Expected: '+t.print((0,d.default)(s))+". Received ["+a+'] "'+i[e]+'"'+t.printLocation(r,e),g),m=!0)}},{key:"getType",value:function(t){var e=void 0===t?"undefined":(0,a.default)(t);return"object"===e?null===t?"null":t instanceof Boolean?"boolean":t instanceof Number?"number":t instanceof String?"string":Array.isArray(t)?"array":t instanceof Date?"date":void 0!==t.nodeType?"dom":t._isAMomentObject===!0?"moment":"object":"number"===e?"number":"boolean"===e?"boolean":"string"===e?"string":void 0===e?"undefined":e}},{key:"getSuggestion",value:function(e,i,o){var n=t.findInOptions(e,i,o,!1),s=t.findInOptions(e,v,[],!0);void 0!==n.indexMatch?console.log('%cUnknown option detected: "'+e+'" in '+t.printLocation(n.path,e,"")+'Perhaps it was incomplete? Did you mean: "'+n.indexMatch+'"?\n\n',g):s.distance<=4&&n.distance>s.distance?console.log('%cUnknown option detected: "'+e+'" in '+t.printLocation(n.path,e,"")+"Perhaps it was misplaced? Matching option found at: "+t.printLocation(s.path,s.closestMatch,""),g):n.distance<=8?console.log('%cUnknown option detected: "'+e+'". Did you mean "'+n.closestMatch+'"?'+t.printLocation(n.path,e),g):console.log('%cUnknown option detected: "'+e+'". Did you mean one of these: '+t.print((0,d.default)(i))+t.printLocation(o,e),g),m=!0}},{key:"findInOptions",value:function(e,i,o){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=1e9,r="",a=[],h=e.toLowerCase(),d=void 0;for(var l in i){var u=void 0;if(void 0!==i[l].__type__&&n===!0){var c=t.findInOptions(e,i[l],f.copyAndExtendArray(o,l));s>c.distance&&(r=c.closestMatch,a=c.path,s=c.distance,d=c.indexMatch)}else l.toLowerCase().indexOf(h)!==-1&&(d=l),u=t.levenshteinDistance(e,l),s>u&&(r=l,a=f.copyArray(o),s=u)}return{closestMatch:r,path:a,distance:s,indexMatch:d}}},{key:"printLocation",value:function(t,e){for(var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Problem value found at: \n",o="\n\n"+i+"options = {\n",n=0;n<t.length;n++){for(var s=0;s<n+1;s++)o+="  ";o+=t[n]+": {\n"}for(var r=0;r<t.length+1;r++)o+="  ";o+=e+"\n";for(var a=0;a<t.length+1;a++){for(var h=0;h<t.length-a;h++)o+="  ";o+="}\n"}return o+"\n\n"}},{key:"print",value:function(t){return(0,s.default)(t).replace(/(\")|(\[)|(\])|(,"__type__")/g,"").replace(/(\,)/g,", ")}},{key:"levenshteinDistance",value:function(t,e){if(0===t.length)return e.length;if(0===e.length)return t.length;var i,o=[];for(i=0;i<=e.length;i++)o[i]=[i];var n;for(n=0;n<=t.length;n++)o[0][n]=n;for(i=1;i<=e.length;i++)for(n=1;n<=t.length;n++)e.charAt(i-1)==t.charAt(n-1)?o[i][n]=o[i-1][n-1]:o[i][n]=Math.min(o[i-1][n-1]+1,Math.min(o[i][n-1]+1,o[i-1][n]+1));return o[e.length][t.length]}}]),t}();e.default=y,e.printStyle=g},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e){var i=p().hours(0).minutes(0).seconds(0).milliseconds(0),o=i.clone().add(-3,"days").valueOf(),n=i.clone().add(3,"days").valueOf();void 0===e?(this.start=o,this.end=n):(this.start=e.start||o,this.end=e.end||n),this.rolling=!1,this.body=t,this.deltaDifference=0,this.scaleOffset=0,this.startToFront=!1,this.endToFront=!0,this.defaultOptions={rtl:!1,start:null,end:null,moment:p,direction:"horizontal",moveable:!0,zoomable:!0,min:null,max:null,zoomMin:10,zoomMax:31536e10},this.options=c.extend({},this.defaultOptions),this.props={touch:{}},this.animationTimer=null,this.body.emitter.on("panstart",this._onDragStart.bind(this)),this.body.emitter.on("panmove",this._onDrag.bind(this)),this.body.emitter.on("panend",this._onDragEnd.bind(this)),this.body.emitter.on("mousewheel",this._onMouseWheel.bind(this)),this.body.emitter.on("touch",this._onTouch.bind(this)),this.body.emitter.on("pinch",this._onPinch.bind(this)),this.body.dom.rollingModeBtn.addEventListener("click",this.startRolling.bind(this)),this.setOptions(e)}function s(t){if("horizontal"!=t&&"vertical"!=t)throw new TypeError('Unknown direction "'+t+'". Choose "horizontal" or "vertical".')}var r=i(58),a=o(r),h=i(90),d=o(h),l=i(62),u=o(l),c=i(1),p=(i(125),i(82)),f=i(128),m=i(129);n.prototype=new f,n.prototype.setOptions=function(t){if(t){var e=["animation","direction","min","max","zoomMin","zoomMax","moveable","zoomable","moment","activate","hiddenDates","zoomKey","rtl","showCurrentTime","rollMode","horizontalScroll"];c.selectiveExtend(e,this.options,t),t.rollingMode&&this.startRolling(),("start"in t||"end"in t)&&this.setRange(t.start,t.end)}},n.prototype.startRolling=function(){function t(){e.stopRolling(),e.rolling=!0;var i=e.end-e.start,o=c.convert(new Date,"Date").valueOf(),n=o-i/2,s=o+i/2;!e.options||void 0===e.options.animation||e.options.animation;e.setRange(n,s,!1);var r=e.conversion(e.body.domProps.center.width).scale,i=1/r/10;i<30&&(i=30),i>1e3&&(i=1e3),e.body.dom.rollingModeBtn.style.visibility="hidden",e.currentTimeTimer=setTimeout(t,i)}var e=this;t()},n.prototype.stopRolling=function(){void 0!==this.currentTimeTimer&&(clearTimeout(this.currentTimeTimer),this.rolling=!1,this.body.dom.rollingModeBtn.style.visibility="visible")},n.prototype.setRange=function(t,e,i,o,n){o!==!0&&(o=!1);var s=void 0!=t?c.convert(t,"Date").valueOf():null,r=void 0!=e?c.convert(e,"Date").valueOf():null;if(this._cancelAnimation(),i){var h=this,l=this.start,p=this.end,f="object"===(void 0===i?"undefined":(0,u.default)(i))&&"duration"in i?i.duration:500,v="object"===(void 0===i?"undefined":(0,u.default)(i))&&"easingFunction"in i?i.easingFunction:"easeInOutQuad",g=c.easingFunctions[v];if(!g)throw new Error("Unknown easing function "+(0,d.default)(v)+". Choose from: "+(0,a.default)(c.easingFunctions).join(", "));var y=(new Date).valueOf(),b=!1;return function t(){if(!h.props.touch.dragging){var e=(new Date).valueOf(),i=e-y,a=g(i/f),d=i>f,u=d||null===s?s:l+(s-l)*a,c=d||null===r?r:p+(r-p)*a;_=h._applyRange(u,c),m.updateHiddenDates(h.options.moment,h.body,h.options.hiddenDates),b=b||_;var v={start:new Date(h.start),end:new Date(h.end),byUser:o,event:n};_&&h.body.emitter.emit("rangechange",v),d?b&&h.body.emitter.emit("rangechanged",v):h.animationTimer=setTimeout(t,20)}}()}var _=this._applyRange(s,r);if(m.updateHiddenDates(this.options.moment,this.body,this.options.hiddenDates),_){var w={start:new Date(this.start),end:new Date(this.end),byUser:o,event:n};this.body.emitter.emit("rangechange",w),this.body.emitter.emit("rangechanged",w)}},n.prototype.getMillisecondsPerPixel=function(){return(this.end-this.start)/this.body.dom.center.clientWidth},n.prototype._cancelAnimation=function(){this.animationTimer&&(clearTimeout(this.animationTimer),this.animationTimer=null)},n.prototype._applyRange=function(t,e){var i,o=null!=t?c.convert(t,"Date").valueOf():this.start,n=null!=e?c.convert(e,"Date").valueOf():this.end,s=null!=this.options.max?c.convert(this.options.max,"Date").valueOf():null,r=null!=this.options.min?c.convert(this.options.min,"Date").valueOf():null;if(isNaN(o)||null===o)throw new Error('Invalid start "'+t+'"');if(isNaN(n)||null===n)throw new Error('Invalid end "'+e+'"');if(n<o&&(n=o),null!==r&&o<r&&(i=r-o,o+=i,n+=i,null!=s&&n>s&&(n=s)),null!==s&&n>s&&(i=n-s,o-=i,n-=i,null!=r&&o<r&&(o=r)),null!==this.options.zoomMin){var a=parseFloat(this.options.zoomMin);if(a<0&&(a=0),n-o<a){this.end-this.start===a&&o>=this.start-.5&&n<=this.end?(o=this.start,n=this.end):(i=a-(n-o),o-=i/2,n+=i/2)}}if(null!==this.options.zoomMax){var h=parseFloat(this.options.zoomMax);h<0&&(h=0),n-o>h&&(this.end-this.start===h&&o<this.start&&n>this.end?(o=this.start,n=this.end):(i=n-o-h,o+=i/2,n-=i/2))}var d=this.start!=o||this.end!=n;return o>=this.start&&o<=this.end||n>=this.start&&n<=this.end||this.start>=o&&this.start<=n||this.end>=o&&this.end<=n||this.body.emitter.emit("checkRangedItems"),this.start=o,this.end=n,d},n.prototype.getRange=function(){return{start:this.start,end:this.end}},n.prototype.conversion=function(t,e){return n.conversion(this.start,this.end,t,e)},n.conversion=function(t,e,i,o){return void 0===o&&(o=0),0!=i&&e-t!=0?{offset:t,scale:i/(e-t-o)}:{offset:0,scale:1}},n.prototype._onDragStart=function(t){this.deltaDifference=0,this.previousDelta=0,this.options.moveable&&this._isInsideRange(t)&&this.props.touch.allowDragging&&(this.stopRolling(),this.props.touch.start=this.start,this.props.touch.end=this.end,this.props.touch.dragging=!0,this.body.dom.root&&(this.body.dom.root.style.cursor="move"))},n.prototype._onDrag=function(t){if(t&&this.props.touch.dragging&&this.options.moveable&&this.props.touch.allowDragging){var e=this.options.direction;s(e);var i="horizontal"==e?t.deltaX:t.deltaY;i-=this.deltaDifference;var o=this.props.touch.end-this.props.touch.start;o-=m.getHiddenDurationBetween(this.body.hiddenDates,this.start,this.end);var n="horizontal"==e?this.body.domProps.center.width:this.body.domProps.center.height;if(this.options.rtl)var r=i/n*o;else var r=-i/n*o;var a=this.props.touch.start+r,h=this.props.touch.end+r,d=m.snapAwayFromHidden(this.body.hiddenDates,a,this.previousDelta-i,!0),l=m.snapAwayFromHidden(this.body.hiddenDates,h,this.previousDelta-i,!0);if(d!=a||l!=h)return this.deltaDifference+=i,this.props.touch.start=d,this.props.touch.end=l,void this._onDrag(t);this.previousDelta=i,this._applyRange(a,h);var u=new Date(this.start),c=new Date(this.end);this.body.emitter.emit("rangechange",{start:u,end:c,byUser:!0,event:t}),this.body.emitter.emit("panmove")}},n.prototype._onDragEnd=function(t){this.props.touch.dragging&&this.options.moveable&&this.props.touch.allowDragging&&(this.props.touch.dragging=!1,this.body.dom.root&&(this.body.dom.root.style.cursor="auto"),this.body.emitter.emit("rangechanged",{start:new Date(this.start),end:new Date(this.end),byUser:!0,event:t}))},n.prototype._onMouseWheel=function(t){var e=0;if(t.wheelDelta?e=t.wheelDelta/120:t.detail&&(e=-t.detail/3),this.options.zoomKey&&!t[this.options.zoomKey]&&this.options.zoomable||!this.options.zoomable&&this.options.moveable){if(this.options.horizontalScroll){t.preventDefault();var i=e*(this.end-this.start)/20,o=this.start-i,n=this.end-i;this.setRange(o,n,!1,!0,t)}}else if(this.options.zoomable&&this.options.moveable&&this._isInsideRange(t)&&e){var s;s=e<0?1-e/5:1/(1+e/5);var r;if(this.rolling)r=(this.start+this.end)/2;else{var a=this.getPointer({x:t.clientX,y:t.clientY},this.body.dom.center);r=this._pointerToDate(a)}this.zoom(s,r,e,t),t.preventDefault()}},n.prototype._onTouch=function(t){this.props.touch.start=this.start,this.props.touch.end=this.end,this.props.touch.allowDragging=!0,this.props.touch.center=null,this.scaleOffset=0,this.deltaDifference=0},n.prototype._onPinch=function(t){if(this.options.zoomable&&this.options.moveable){this.props.touch.allowDragging=!1,this.props.touch.center||(this.props.touch.center=this.getPointer(t.center,this.body.dom.center)),this.stopRolling();var e=1/(t.scale+this.scaleOffset),i=this._pointerToDate(this.props.touch.center),o=m.getHiddenDurationBetween(this.body.hiddenDates,this.start,this.end),n=m.getHiddenDurationBefore(this.options.moment,this.body.hiddenDates,this,i),s=o-n,r=i-n+(this.props.touch.start-(i-n))*e,a=i+s+(this.props.touch.end-(i+s))*e;this.startToFront=1-e<=0,this.endToFront=e-1<=0;var h=m.snapAwayFromHidden(this.body.hiddenDates,r,1-e,!0),d=m.snapAwayFromHidden(this.body.hiddenDates,a,e-1,!0);h==r&&d==a||(this.props.touch.start=h,this.props.touch.end=d,this.scaleOffset=1-t.scale,r=h,a=d),this.setRange(r,a,!1,!0,t),this.startToFront=!1,this.endToFront=!0}},n.prototype._isInsideRange=function(t){var e=t.center?t.center.x:t.clientX;if(this.options.rtl)var i=e-c.getAbsoluteLeft(this.body.dom.centerContainer);else var i=c.getAbsoluteRight(this.body.dom.centerContainer)-e;var o=this.body.util.toTime(i);return o>=this.start&&o<=this.end},n.prototype._pointerToDate=function(t){var e,i=this.options.direction;if(s(i),"horizontal"==i)return this.body.util.toTime(t.x).valueOf();var o=this.body.domProps.center.height;return e=this.conversion(o),t.y/e.scale+e.offset},n.prototype.getPointer=function(t,e){return this.options.rtl?{x:c.getAbsoluteRight(e)-t.x,y:t.y-c.getAbsoluteTop(e)}:{x:t.x-c.getAbsoluteLeft(e),y:t.y-c.getAbsoluteTop(e)}},n.prototype.zoom=function(t,e,i,o){null==e&&(e=(this.start+this.end)/2);var n=m.getHiddenDurationBetween(this.body.hiddenDates,this.start,this.end),s=m.getHiddenDurationBefore(this.options.moment,this.body.hiddenDates,this,e),r=n-s,a=e-s+(this.start-(e-s))*t,h=e+r+(this.end-(e+r))*t;this.startToFront=!(i>0),this.endToFront=!(-i>0);var d=m.snapAwayFromHidden(this.body.hiddenDates,a,i,!0),l=m.snapAwayFromHidden(this.body.hiddenDates,h,-i,!0);d==a&&l==h||(a=d,h=l),this.setRange(a,h,!1,!0,o),this.startToFront=!1,this.endToFront=!0},n.prototype.move=function(t){var e=this.end-this.start,i=this.start+e*t,o=this.end+e*t;this.start=i,this.end=o},n.prototype.moveTo=function(t){var e=(this.start+this.end)/2,i=e-t,o=this.start-i,n=this.end-i;this.setRange(o,n,!1,!0,null)},t.exports=n},function(t,e,i){function o(t,e){this.options=null,this.props=null}var n=i(1);o.prototype.setOptions=function(t){t&&n.extend(this.options,t)},o.prototype.redraw=function(){return!1},o.prototype.destroy=function(){},o.prototype._isResized=function(){var t=this.props._previousWidth!==this.props.width||this.props._previousHeight!==this.props.height;return this.props._previousWidth=this.props.width,this.props._previousHeight=this.props.height,t},t.exports=o},function(t,e){e.convertHiddenOptions=function(t,i,o){if(o&&!Array.isArray(o))return e.convertHiddenOptions(t,i,[o]);if(i.hiddenDates=[],o&&1==Array.isArray(o)){for(var n=0;n<o.length;n++)if(void 0===o[n].repeat){var s={};s.start=t(o[n].start).toDate().valueOf(),s.end=t(o[n].end).toDate().valueOf(),i.hiddenDates.push(s)}i.hiddenDates.sort(function(t,e){return t.start-e.start})}},e.updateHiddenDates=function(t,i,o){if(o&&!Array.isArray(o))return e.updateHiddenDates(t,i,[o]);if(o&&void 0!==i.domProps.centerContainer.width){e.convertHiddenOptions(t,i,o);for(var n=t(i.range.start),s=t(i.range.end),r=i.range.end-i.range.start,a=r/i.domProps.centerContainer.width,h=0;h<o.length;h++)if(void 0!==o[h].repeat){var d=t(o[h].start),l=t(o[h].end);if("Invalid Date"==d._d)throw new Error("Supplied start date is not valid: "+o[h].start);if("Invalid Date"==l._d)throw new Error("Supplied end date is not valid: "+o[h].end);var u=l-d;if(u>=4*a){var c=0,p=s.clone();switch(o[h].repeat){case"daily":d.day()!=l.day()&&(c=1),d.dayOfYear(n.dayOfYear()),d.year(n.year()),d.subtract(7,"days"),l.dayOfYear(n.dayOfYear()),l.year(n.year()),l.subtract(7-c,"days"),p.add(1,"weeks");break;case"weekly":var f=l.diff(d,"days"),m=d.day();d.date(n.date()),d.month(n.month()),d.year(n.year()),l=d.clone(),d.day(m),l.day(m),l.add(f,"days"),d.subtract(1,"weeks"),l.subtract(1,"weeks"),p.add(1,"weeks");break;case"monthly":d.month()!=l.month()&&(c=1),d.month(n.month()),d.year(n.year()),d.subtract(1,"months"),l.month(n.month()),l.year(n.year()),l.subtract(1,"months"),l.add(c,"months"),p.add(1,"months");break;case"yearly":d.year()!=l.year()&&(c=1),d.year(n.year()),d.subtract(1,"years"),l.year(n.year()),l.subtract(1,"years"),l.add(c,"years"),p.add(1,"years");break;default:return void console.log("Wrong repeat format, allowed are: daily, weekly, monthly, yearly. Given:",o[h].repeat)}for(;d<p;)switch(i.hiddenDates.push({start:d.valueOf(),end:l.valueOf()}),o[h].repeat){case"daily":d.add(1,"days"),l.add(1,"days");break;case"weekly":d.add(1,"weeks"),l.add(1,"weeks");break;case"monthly":d.add(1,"months"),l.add(1,"months");break;case"yearly":d.add(1,"y"),l.add(1,"y");break;default:return void console.log("Wrong repeat format, allowed are: daily, weekly, monthly, yearly. Given:",o[h].repeat)}i.hiddenDates.push({start:d.valueOf(),end:l.valueOf()})}}e.removeDuplicates(i);var v=e.isHidden(i.range.start,i.hiddenDates),g=e.isHidden(i.range.end,i.hiddenDates),y=i.range.start,b=i.range.end;1==v.hidden&&(y=1==i.range.startToFront?v.startDate-1:v.endDate+1),1==g.hidden&&(b=1==i.range.endToFront?g.startDate-1:g.endDate+1),1!=v.hidden&&1!=g.hidden||i.range._applyRange(y,b)}},e.removeDuplicates=function(t){for(var e=t.hiddenDates,i=[],o=0;o<e.length;o++)for(var n=0;n<e.length;n++)o!=n&&1!=e[n].remove&&1!=e[o].remove&&(e[n].start>=e[o].start&&e[n].end<=e[o].end?e[n].remove=!0:e[n].start>=e[o].start&&e[n].start<=e[o].end?(e[o].end=e[n].end,e[n].remove=!0):e[n].end>=e[o].start&&e[n].end<=e[o].end&&(e[o].start=e[n].start,e[n].remove=!0));for(var o=0;o<e.length;o++)e[o].remove!==!0&&i.push(e[o]);t.hiddenDates=i,t.hiddenDates.sort(function(t,e){return t.start-e.start})},e.printDates=function(t){for(var e=0;e<t.length;e++)console.log(e,new Date(t[e].start),new Date(t[e].end),t[e].start,t[e].end,t[e].remove)},e.stepOverHiddenDates=function(t,e,i){for(var o=!1,n=e.current.valueOf(),s=0;s<e.hiddenDates.length;s++){var r=e.hiddenDates[s].start,a=e.hiddenDates[s].end;if(n>=r&&n<a){o=!0;break}}if(1==o&&n<e._end.valueOf()&&n!=i){var h=t(i),d=t(a);h.year()!=d.year()?e.switchedYear=!0:h.month()!=d.month()?e.switchedMonth=!0:h.dayOfYear()!=d.dayOfYear()&&(e.switchedDay=!0),e.current=d}},e.toScreen=function(t,i,o){if(0==t.body.hiddenDates.length){var n=t.range.conversion(o);return(i.valueOf()-n.offset)*n.scale}var s=e.isHidden(i,t.body.hiddenDates);1==s.hidden&&(i=s.startDate);var r=e.getHiddenDurationBetween(t.body.hiddenDates,t.range.start,t.range.end);if(i<t.range.start){var n=t.range.conversion(o,r),a=e.getHiddenDurationBeforeStart(t.body.hiddenDates,i,n.offset);return i=t.options.moment(i).toDate().valueOf(),i+=a,
-(n.offset-i.valueOf())*n.scale}if(i>t.range.end){var h={start:t.range.start,end:i};i=e.correctTimeForHidden(t.options.moment,t.body.hiddenDates,h,i);var n=t.range.conversion(o,r);return(i.valueOf()-n.offset)*n.scale}i=e.correctTimeForHidden(t.options.moment,t.body.hiddenDates,t.range,i);var n=t.range.conversion(o,r);return(i.valueOf()-n.offset)*n.scale},e.toTime=function(t,i,o){if(0==t.body.hiddenDates.length){var n=t.range.conversion(o);return new Date(i/n.scale+n.offset)}var s=e.getHiddenDurationBetween(t.body.hiddenDates,t.range.start,t.range.end),r=t.range.end-t.range.start-s,a=r*i/o,h=e.getAccumulatedHiddenDuration(t.body.hiddenDates,t.range,a);return new Date(h+a+t.range.start)},e.getHiddenDurationBetween=function(t,e,i){for(var o=0,n=0;n<t.length;n++){var s=t[n].start,r=t[n].end;s>=e&&r<i&&(o+=r-s)}return o},e.getHiddenDurationBeforeStart=function(t,e,i){for(var o=0,n=0;n<t.length;n++){var s=t[n].start,r=t[n].end;s>=e&&r<=i&&(o+=r-s)}return o},e.correctTimeForHidden=function(t,i,o,n){return n=t(n).toDate().valueOf(),n-=e.getHiddenDurationBefore(t,i,o,n)},e.getHiddenDurationBefore=function(t,e,i,o){var n=0;o=t(o).toDate().valueOf();for(var s=0;s<e.length;s++){var r=e[s].start,a=e[s].end;r>=i.start&&a<i.end&&o>=a&&(n+=a-r)}return n},e.getAccumulatedHiddenDuration=function(t,e,i){for(var o=0,n=0,s=e.start,r=0;r<t.length;r++){var a=t[r].start,h=t[r].end;if(a>=e.start&&h<e.end){if(n+=a-s,s=h,n>=i)break;o+=h-a}}return o},e.snapAwayFromHidden=function(t,i,o,n){var s=e.isHidden(i,t);return 1==s.hidden?o<0?1==n?s.startDate-(s.endDate-i)-1:s.startDate-1:1==n?s.endDate+(i-s.startDate)+1:s.endDate+1:i},e.isHidden=function(t,e){for(var i=0;i<e.length;i++){var o=e[i].start,n=e[i].end;if(t>=o&&t<n)return{hidden:!0,startDate:o,endDate:n}}return{hidden:!1,startDate:o,endDate:n}}},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}function n(){}var s=i(90),r=o(s),a=i(62),h=o(a),d=i(99),l=i(112),u=i(125),c=i(1),p=(i(89),i(93),i(127),i(131),i(142)),f=i(143),m=i(129),v=i(144);d(n.prototype),n.prototype._create=function(t){function e(t){if(this.isActive()&&this.emit("mousewheel",t),this.options.verticalScroll&&!this.options.horizontalScroll&&this.options.zoomKey&&!t[this.options.zoomKey]){t.preventDefault();var e=0;t.wheelDelta?e=t.wheelDelta/120:t.detail&&(e=-t.detail/3);var i=this.props.scrollTop,o=i+120*e;this.isActive()&&(this._setScrollTop(o),this._redraw(),this.emit("scroll",t))}}function i(t){if(s.options.verticalScroll&&(t.preventDefault(),s.isActive())){var e=-t.target.scrollTop;s._setScrollTop(e),s._redraw(),s.emit("scrollSide",t)}}function o(t){if(t.preventDefault&&t.preventDefault(),!(!t.target.className.indexOf("vis")>-1||a))return t.dataTransfer.dropEffect="move",a=!0,!1}function n(t){t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation();try{if(!JSON.parse(t.dataTransfer.getData("text")).content)return}catch(t){return!1}return a=!1,t.center={x:t.clientX,y:t.clientY},s.itemSet._onAddItem(t),!1}this.dom={},this.dom.container=t,this.dom.root=document.createElement("div"),this.dom.background=document.createElement("div"),this.dom.backgroundVertical=document.createElement("div"),this.dom.backgroundHorizontal=document.createElement("div"),this.dom.centerContainer=document.createElement("div"),this.dom.leftContainer=document.createElement("div"),this.dom.rightContainer=document.createElement("div"),this.dom.center=document.createElement("div"),this.dom.left=document.createElement("div"),this.dom.right=document.createElement("div"),this.dom.top=document.createElement("div"),this.dom.bottom=document.createElement("div"),this.dom.shadowTop=document.createElement("div"),this.dom.shadowBottom=document.createElement("div"),this.dom.shadowTopLeft=document.createElement("div"),this.dom.shadowBottomLeft=document.createElement("div"),this.dom.shadowTopRight=document.createElement("div"),this.dom.shadowBottomRight=document.createElement("div"),this.dom.rollingModeBtn=document.createElement("div"),this.dom.root.className="vis-timeline",this.dom.background.className="vis-panel vis-background",this.dom.backgroundVertical.className="vis-panel vis-background vis-vertical",this.dom.backgroundHorizontal.className="vis-panel vis-background vis-horizontal",this.dom.centerContainer.className="vis-panel vis-center",this.dom.leftContainer.className="vis-panel vis-left",this.dom.rightContainer.className="vis-panel vis-right",this.dom.top.className="vis-panel vis-top",this.dom.bottom.className="vis-panel vis-bottom",this.dom.left.className="vis-content",this.dom.center.className="vis-content",this.dom.right.className="vis-content",this.dom.shadowTop.className="vis-shadow vis-top",this.dom.shadowBottom.className="vis-shadow vis-bottom",this.dom.shadowTopLeft.className="vis-shadow vis-top",this.dom.shadowBottomLeft.className="vis-shadow vis-bottom",this.dom.shadowTopRight.className="vis-shadow vis-top",this.dom.shadowBottomRight.className="vis-shadow vis-bottom",this.dom.rollingModeBtn.className="vis-rolling-mode-btn",this.dom.root.appendChild(this.dom.background),this.dom.root.appendChild(this.dom.backgroundVertical),this.dom.root.appendChild(this.dom.backgroundHorizontal),this.dom.root.appendChild(this.dom.centerContainer),this.dom.root.appendChild(this.dom.leftContainer),this.dom.root.appendChild(this.dom.rightContainer),this.dom.root.appendChild(this.dom.top),this.dom.root.appendChild(this.dom.bottom),this.dom.root.appendChild(this.dom.bottom),this.dom.root.appendChild(this.dom.rollingModeBtn),this.dom.centerContainer.appendChild(this.dom.center),this.dom.leftContainer.appendChild(this.dom.left),this.dom.rightContainer.appendChild(this.dom.right),this.dom.centerContainer.appendChild(this.dom.shadowTop),this.dom.centerContainer.appendChild(this.dom.shadowBottom),this.dom.leftContainer.appendChild(this.dom.shadowTopLeft),this.dom.leftContainer.appendChild(this.dom.shadowBottomLeft),this.dom.rightContainer.appendChild(this.dom.shadowTopRight),this.dom.rightContainer.appendChild(this.dom.shadowBottomRight),this.props={root:{},background:{},centerContainer:{},leftContainer:{},rightContainer:{},center:{},left:{},right:{},top:{},bottom:{},border:{},scrollTop:0,scrollTopMin:0},this.on("rangechange",function(){this.initialDrawDone===!0&&this._redraw()}.bind(this)),this.on("touch",this._onTouch.bind(this)),this.on("panmove",this._onDrag.bind(this));var s=this;this._origRedraw=this._redraw.bind(this),this._redraw=c.throttle(this._origRedraw),this.on("_change",function(t){s.itemSet&&s.itemSet.initialItemSetDrawn&&t&&1==t.queue?s._redraw():s._origRedraw()}),this.hammer=new l(this.dom.root);var r=this.hammer.get("pinch").set({enable:!0});u.disablePreventDefaultVertically(r),this.hammer.get("pan").set({threshold:5,direction:l.DIRECTION_HORIZONTAL}),this.listeners={},["tap","doubletap","press","pinch","pan","panstart","panmove","panend"].forEach(function(t){var e=function(e){s.isActive()&&s.emit(t,e)};s.hammer.on(t,e),s.listeners[t]=e}),u.onTouch(this.hammer,function(t){s.emit("touch",t)}.bind(this)),u.onRelease(this.hammer,function(t){s.emit("release",t)}.bind(this)),this.dom.centerContainer.addEventListener?(this.dom.centerContainer.addEventListener("mousewheel",e.bind(this),!1),this.dom.centerContainer.addEventListener("DOMMouseScroll",e.bind(this),!1)):this.dom.centerContainer.attachEvent("onmousewheel",e.bind(this)),this.dom.left.parentNode.addEventListener("scroll",i.bind(this)),this.dom.right.parentNode.addEventListener("scroll",i.bind(this));var a=!1;if(this.dom.center.addEventListener("dragover",o.bind(this),!1),this.dom.center.addEventListener("drop",n.bind(this),!1),this.customTimes=[],this.touch={},this.redrawCount=0,this.initialDrawDone=!1,!t)throw new Error("No container provided");t.appendChild(this.dom.root)},n.prototype.setOptions=function(t){if(t){var e=["width","height","minHeight","maxHeight","autoResize","start","end","clickToUse","dataAttributes","hiddenDates","locale","locales","moment","rtl","zoomKey","horizontalScroll","verticalScroll"];if(c.selectiveExtend(e,this.options,t),this.dom.rollingModeBtn.style.visibility="hidden",this.options.rtl&&(this.dom.container.style.direction="rtl",this.dom.backgroundVertical.className="vis-panel vis-background vis-vertical-rtl"),this.options.verticalScroll&&(this.options.rtl?this.dom.rightContainer.className="vis-panel vis-right vis-vertical-scroll":this.dom.leftContainer.className="vis-panel vis-left vis-vertical-scroll"),this.options.orientation={item:void 0,axis:void 0},"orientation"in t&&("string"==typeof t.orientation?this.options.orientation={item:t.orientation,axis:t.orientation}:"object"===(0,h.default)(t.orientation)&&("item"in t.orientation&&(this.options.orientation.item=t.orientation.item),"axis"in t.orientation&&(this.options.orientation.axis=t.orientation.axis))),"both"===this.options.orientation.axis){if(!this.timeAxis2){var i=this.timeAxis2=new p(this.body);i.setOptions=function(t){var e=t?c.extend({},t):{};e.orientation="top",p.prototype.setOptions.call(i,e)},this.components.push(i)}}else if(this.timeAxis2){var o=this.components.indexOf(this.timeAxis2);o!==-1&&this.components.splice(o,1),this.timeAxis2.destroy(),this.timeAxis2=null}if("function"==typeof t.drawPoints&&(t.drawPoints={onRender:t.drawPoints}),"hiddenDates"in this.options&&m.convertHiddenOptions(this.options.moment,this.body,this.options.hiddenDates),"clickToUse"in t&&(t.clickToUse?this.activator||(this.activator=new f(this.dom.root)):this.activator&&(this.activator.destroy(),delete this.activator)),"showCustomTime"in t)throw new Error("Option `showCustomTime` is deprecated. Create a custom time bar via timeline.addCustomTime(time [, id])");this._initAutoResize()}if(this.components.forEach(function(e){return e.setOptions(t)}),"configure"in t){this.configurator||(this.configurator=this._createConfigurator()),this.configurator.setOptions(t.configure);var n=c.deepExtend({},this.options);this.components.forEach(function(t){c.deepExtend(n,t.options)}),this.configurator.setModuleOptions({global:n})}this._redraw()},n.prototype.isActive=function(){return!this.activator||this.activator.active},n.prototype.destroy=function(){this.setItems(null),this.setGroups(null),this.off(),this._stopAutoResize(),this.dom.root.parentNode&&this.dom.root.parentNode.removeChild(this.dom.root),this.dom=null,this.activator&&(this.activator.destroy(),delete this.activator);for(var t in this.listeners)this.listeners.hasOwnProperty(t)&&delete this.listeners[t];this.listeners=null,this.hammer=null,this.components.forEach(function(t){return t.destroy()}),this.body=null},n.prototype.setCustomTime=function(t,e){var i=this.customTimes.filter(function(t){return e===t.options.id});if(0===i.length)throw new Error("No custom time bar found with id "+(0,r.default)(e));i.length>0&&i[0].setCustomTime(t)},n.prototype.getCustomTime=function(t){var e=this.customTimes.filter(function(e){return e.options.id===t});if(0===e.length)throw new Error("No custom time bar found with id "+(0,r.default)(t));return e[0].getCustomTime()},n.prototype.setCustomTimeTitle=function(t,e){var i=this.customTimes.filter(function(t){return t.options.id===e});if(0===i.length)throw new Error("No custom time bar found with id "+(0,r.default)(e));if(i.length>0)return i[0].setCustomTitle(t)},n.prototype.getEventProperties=function(t){return{event:t}},n.prototype.addCustomTime=function(t,e){var i=void 0!==t?c.convert(t,"Date").valueOf():new Date;if(this.customTimes.some(function(t){return t.options.id===e}))throw new Error("A custom time with id "+(0,r.default)(e)+" already exists");var o=new v(this.body,c.extend({},this.options,{time:i,id:e}));return this.customTimes.push(o),this.components.push(o),this._redraw(),e},n.prototype.removeCustomTime=function(t){var e=this.customTimes.filter(function(e){return e.options.id===t});if(0===e.length)throw new Error("No custom time bar found with id "+(0,r.default)(t));e.forEach(function(t){this.customTimes.splice(this.customTimes.indexOf(t),1),this.components.splice(this.components.indexOf(t),1),t.destroy()}.bind(this))},n.prototype.getVisibleItems=function(){return this.itemSet&&this.itemSet.getVisibleItems()||[]},n.prototype.fit=function(t){var e=this.getDataRange();if(null!==e.min||null!==e.max){var i=e.max-e.min,o=new Date(e.min.valueOf()-.01*i),n=new Date(e.max.valueOf()+.01*i),s=!t||void 0===t.animation||t.animation;this.range.setRange(o,n,s)}},n.prototype.getDataRange=function(){throw new Error("Cannot invoke abstract method getDataRange")},n.prototype.setWindow=function(t,e,i){var o;if(1==arguments.length){var n=arguments[0];o=void 0===n.animation||n.animation,this.range.setRange(n.start,n.end,o)}else o=!i||void 0===i.animation||i.animation,this.range.setRange(t,e,o)},n.prototype.moveTo=function(t,e){var i=this.range.end-this.range.start,o=c.convert(t,"Date").valueOf(),n=o-i/2,s=o+i/2,r=!e||void 0===e.animation||e.animation;this.range.setRange(n,s,r)},n.prototype.getWindow=function(){var t=this.range.getRange();return{start:new Date(t.start),end:new Date(t.end)}},n.prototype.zoomIn=function(t,e){if(!(!t||t<0||t>1)){var i=this.getWindow(),o=i.start.valueOf(),n=i.end.valueOf(),s=n-o,r=s/(1+t),a=(s-r)/2,h=o+a,d=n-a;this.setWindow(h,d,e)}},n.prototype.zoomOut=function(t,e){if(!(!t||t<0||t>1)){var i=this.getWindow(),o=i.start.valueOf(),n=i.end.valueOf(),s=n-o,r=o-s*t/2,a=n+s*t/2;this.setWindow(r,a,e)}},n.prototype.redraw=function(){this._redraw()},n.prototype._redraw=function(){this.redrawCount++;var t=!1,e=this.options,i=this.props,o=this.dom;if(o&&o.container&&0!=o.root.offsetWidth){m.updateHiddenDates(this.options.moment,this.body,this.options.hiddenDates),"top"==e.orientation?(c.addClassName(o.root,"vis-top"),c.removeClassName(o.root,"vis-bottom")):(c.removeClassName(o.root,"vis-top"),c.addClassName(o.root,"vis-bottom")),o.root.style.maxHeight=c.option.asSize(e.maxHeight,""),o.root.style.minHeight=c.option.asSize(e.minHeight,""),o.root.style.width=c.option.asSize(e.width,""),i.border.left=(o.centerContainer.offsetWidth-o.centerContainer.clientWidth)/2,i.border.right=i.border.left,i.border.top=(o.centerContainer.offsetHeight-o.centerContainer.clientHeight)/2,i.border.bottom=i.border.top,i.borderRootHeight=o.root.offsetHeight-o.root.clientHeight,i.borderRootWidth=o.root.offsetWidth-o.root.clientWidth,0===o.centerContainer.clientHeight&&(i.border.left=i.border.top,i.border.right=i.border.left),0===o.root.clientHeight&&(i.borderRootWidth=i.borderRootHeight),i.center.height=o.center.offsetHeight,i.left.height=o.left.offsetHeight,i.right.height=o.right.offsetHeight,i.top.height=o.top.clientHeight||-i.border.top,i.bottom.height=o.bottom.clientHeight||-i.border.bottom;var n=Math.max(i.left.height,i.center.height,i.right.height),s=i.top.height+n+i.bottom.height+i.borderRootHeight+i.border.top+i.border.bottom;o.root.style.height=c.option.asSize(e.height,s+"px"),i.root.height=o.root.offsetHeight,i.background.height=i.root.height-i.borderRootHeight;var r=i.root.height-i.top.height-i.bottom.height-i.borderRootHeight;i.centerContainer.height=r,i.leftContainer.height=r,i.rightContainer.height=i.leftContainer.height,i.root.width=o.root.offsetWidth,i.background.width=i.root.width-i.borderRootWidth,this.initialDrawDone||(i.scrollbarWidth=c.getScrollBarWidth()),e.verticalScroll?e.rtl?(i.left.width=o.leftContainer.clientWidth||-i.border.left,i.right.width=o.rightContainer.clientWidth+i.scrollbarWidth||-i.border.right):(i.left.width=o.leftContainer.clientWidth+i.scrollbarWidth||-i.border.left,i.right.width=o.rightContainer.clientWidth||-i.border.right):(i.left.width=o.leftContainer.clientWidth||-i.border.left,i.right.width=o.rightContainer.clientWidth||-i.border.right),this._setDOM();var a=this._updateScrollTop();"top"!=e.orientation.item&&(a+=Math.max(i.centerContainer.height-i.center.height-i.border.top-i.border.bottom,0)),o.center.style.top=a+"px";var h=0==i.scrollTop?"hidden":"",d=i.scrollTop==i.scrollTopMin?"hidden":"";o.shadowTop.style.visibility=h,o.shadowBottom.style.visibility=d,o.shadowTopLeft.style.visibility=h,o.shadowBottomLeft.style.visibility=d,o.shadowTopRight.style.visibility=h,o.shadowBottomRight.style.visibility=d,e.verticalScroll&&(o.rightContainer.className="vis-panel vis-right vis-vertical-scroll",o.leftContainer.className="vis-panel vis-left vis-vertical-scroll",o.shadowTopRight.style.visibility="hidden",o.shadowBottomRight.style.visibility="hidden",o.shadowTopLeft.style.visibility="hidden",o.shadowBottomLeft.style.visibility="hidden",o.left.style.top="0px",o.right.style.top="0px"),(!e.verticalScroll||i.center.height<i.centerContainer.height)&&(o.left.style.top=a+"px",o.right.style.top=a+"px",o.rightContainer.className=o.rightContainer.className.replace(new RegExp("(?:^|\\s)vis-vertical-scroll(?:\\s|$)")," "),o.leftContainer.className=o.leftContainer.className.replace(new RegExp("(?:^|\\s)vis-vertical-scroll(?:\\s|$)")," "),i.left.width=o.leftContainer.clientWidth||-i.border.left,i.right.width=o.rightContainer.clientWidth||-i.border.right,this._setDOM());var u=i.center.height>i.centerContainer.height;this.hammer.get("pan").set({direction:u?l.DIRECTION_ALL:l.DIRECTION_HORIZONTAL}),this.components.forEach(function(e){t=e.redraw()||t});if(t){if(this.redrawCount<5)return void this.body.emitter.emit("_change");console.log("WARNING: infinite loop in redraw?")}else this.redrawCount=0;this.initialDrawDone=!0,this.body.emitter.emit("changed")}},n.prototype._setDOM=function(){var t=this.props,e=this.dom;t.leftContainer.width=t.left.width,t.rightContainer.width=t.right.width;var i=t.root.width-t.left.width-t.right.width-t.borderRootWidth;t.center.width=i,t.centerContainer.width=i,t.top.width=i,t.bottom.width=i,e.background.style.height=t.background.height+"px",e.backgroundVertical.style.height=t.background.height+"px",e.backgroundHorizontal.style.height=t.centerContainer.height+"px",e.centerContainer.style.height=t.centerContainer.height+"px",e.leftContainer.style.height=t.leftContainer.height+"px",e.rightContainer.style.height=t.rightContainer.height+"px",e.background.style.width=t.background.width+"px",e.backgroundVertical.style.width=t.centerContainer.width+"px",e.backgroundHorizontal.style.width=t.background.width+"px",e.centerContainer.style.width=t.center.width+"px",e.top.style.width=t.top.width+"px",e.bottom.style.width=t.bottom.width+"px",e.background.style.left="0",e.background.style.top="0",e.backgroundVertical.style.left=t.left.width+t.border.left+"px",e.backgroundVertical.style.top="0",e.backgroundHorizontal.style.left="0",e.backgroundHorizontal.style.top=t.top.height+"px",e.centerContainer.style.left=t.left.width+"px",e.centerContainer.style.top=t.top.height+"px",e.leftContainer.style.left="0",e.leftContainer.style.top=t.top.height+"px",e.rightContainer.style.left=t.left.width+t.center.width+"px",e.rightContainer.style.top=t.top.height+"px",e.top.style.left=t.left.width+"px",e.top.style.top="0",e.bottom.style.left=t.left.width+"px",e.bottom.style.top=t.top.height+t.centerContainer.height+"px",e.center.style.left="0",e.left.style.left="0",e.right.style.left="0"},n.prototype.repaint=function(){throw new Error("Function repaint is deprecated. Use redraw instead.")},n.prototype.setCurrentTime=function(t){if(!this.currentTime)throw new Error("Option showCurrentTime must be true");this.currentTime.setCurrentTime(t)},n.prototype.getCurrentTime=function(){if(!this.currentTime)throw new Error("Option showCurrentTime must be true");return this.currentTime.getCurrentTime()},n.prototype._toTime=function(t){return m.toTime(this,t,this.props.center.width)},n.prototype._toGlobalTime=function(t){return m.toTime(this,t,this.props.root.width)},n.prototype._toScreen=function(t){return m.toScreen(this,t,this.props.center.width)},n.prototype._toGlobalScreen=function(t){return m.toScreen(this,t,this.props.root.width)},n.prototype._initAutoResize=function(){1==this.options.autoResize?this._startAutoResize():this._stopAutoResize()},n.prototype._startAutoResize=function(){var t=this;this._stopAutoResize(),this._onResize=function(){if(1!=t.options.autoResize)return void t._stopAutoResize();t.dom.root&&(t.dom.root.offsetWidth==t.props.lastWidth&&t.dom.root.offsetHeight==t.props.lastHeight||(t.props.lastWidth=t.dom.root.offsetWidth,t.props.lastHeight=t.dom.root.offsetHeight,t.props.scrollbarWidth=c.getScrollBarWidth(),t.body.emitter.emit("_change")))},c.addEventListener(window,"resize",this._onResize),t.dom.root&&(t.props.lastWidth=t.dom.root.offsetWidth,t.props.lastHeight=t.dom.root.offsetHeight),this.watchTimer=setInterval(this._onResize,1e3)},n.prototype._stopAutoResize=function(){this.watchTimer&&(clearInterval(this.watchTimer),this.watchTimer=void 0),this._onResize&&(c.removeEventListener(window,"resize",this._onResize),this._onResize=null)},n.prototype._onTouch=function(t){this.touch.allowDragging=!0,this.touch.initialScrollTop=this.props.scrollTop},n.prototype._onPinch=function(t){this.touch.allowDragging=!1},n.prototype._onDrag=function(t){if(t&&this.touch.allowDragging){var e=t.deltaY,i=this._getScrollTop(),o=this._setScrollTop(this.touch.initialScrollTop+e);this.options.verticalScroll&&(this.dom.left.parentNode.scrollTop=-this.props.scrollTop,this.dom.right.parentNode.scrollTop=-this.props.scrollTop),o!=i&&this.emit("verticalDrag")}},n.prototype._setScrollTop=function(t){return this.props.scrollTop=t,this._updateScrollTop(),this.props.scrollTop},n.prototype._updateScrollTop=function(){var t=Math.min(this.props.centerContainer.height-this.props.center.height,0);return t!=this.props.scrollTopMin&&("top"!=this.options.orientation.item&&(this.props.scrollTop+=t-this.props.scrollTopMin),this.props.scrollTopMin=t),this.props.scrollTop>0&&(this.props.scrollTop=0),this.props.scrollTop<t&&(this.props.scrollTop=t),this.options.verticalScroll&&(this.dom.left.parentNode.scrollTop=-this.props.scrollTop,this.dom.right.parentNode.scrollTop=-this.props.scrollTop),this.props.scrollTop},n.prototype._getScrollTop=function(){return this.props.scrollTop},n.prototype._createConfigurator=function(){throw new Error("Cannot invoke abstract method _createConfigurator")},t.exports=n},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e){this.body=t,this.defaultOptions={type:null,orientation:{item:"bottom"},align:"auto",stack:!0,stackSubgroups:!0,groupOrderSwap:function(t,e,i){var o=e.order;e.order=t.order,t.order=o},groupOrder:"order",selectable:!0,multiselect:!1,itemsAlwaysDraggable:!1,editable:{updateTime:!1,updateGroup:!1,add:!1,remove:!1,overrideItems:!1},groupEditable:{order:!1,add:!1,remove:!1},snap:m.snap,onAdd:function(t,e){e(t)},onUpdate:function(t,e){e(t)},onMove:function(t,e){e(t)},onRemove:function(t,e){e(t)},onMoving:function(t,e){e(t)},onAddGroup:function(t,e){e(t)},onMoveGroup:function(t,e){e(t)},onRemoveGroup:function(t,e){e(t)},margin:{item:{horizontal:10,vertical:10},axis:20},tooltip:{followMouse:!1,overflowMethod:"flip"},tooltipOnItemUpdateTime:!1},this.options=c.extend({},this.defaultOptions),this.options.rtl=e.rtl,this.itemOptions={type:{start:"Date",end:"Date"}},this.conversion={toScreen:t.util.toScreen,toTime:t.util.toTime},this.dom={},this.props={},this.hammer=null;var i=this;this.itemsData=null,this.groupsData=null,this.itemListeners={add:function(t,e,o){i._onAdd(e.items)},update:function(t,e,o){i._onUpdate(e.items)},remove:function(t,e,o){i._onRemove(e.items)}},this.groupListeners={add:function(t,e,o){i._onAddGroups(e.items)},update:function(t,e,o){i._onUpdateGroups(e.items)},remove:function(t,e,o){i._onRemoveGroups(e.items)}},this.items={},this.groups={},this.groupIds=[],this.selection=[],this.stackDirty=!0,this.popup=null,this.touchParams={},this.groupTouchParams={},this._create(),this.setOptions(e)}var s=i(55),r=o(s),a=i(62),h=o(a),d=i(132),l=o(d),u=i(112),c=i(1),p=i(89),f=i(93),m=i(133),v=i(128),g=i(134),y=i(138),b=i(139),_=i(140),w=i(136),x=i(141),k="__ungrouped__",O="__background__";n.prototype=new v,n.types={background:x,box:b,range:w,point:_},n.prototype._create=function(){var t=document.createElement("div");t.className="vis-itemset",t["timeline-itemset"]=this,this.dom.frame=t;var e=document.createElement("div");e.className="vis-background",t.appendChild(e),this.dom.background=e;var i=document.createElement("div");i.className="vis-foreground",t.appendChild(i),this.dom.foreground=i;var o=document.createElement("div");o.className="vis-axis",this.dom.axis=o;var n=document.createElement("div");n.className="vis-labelset",this.dom.labelSet=n,this._updateUngrouped();var s=new y(O,null,this);s.show(),this.groups[O]=s,this.hammer=new u(this.body.dom.centerContainer),this.hammer.on("hammer.input",function(t){t.isFirst&&this._onTouch(t)}.bind(this)),this.hammer.on("panstart",this._onDragStart.bind(this)),this.hammer.on("panmove",this._onDrag.bind(this)),this.hammer.on("panend",this._onDragEnd.bind(this)),this.hammer.get("pan").set({threshold:5,direction:u.DIRECTION_HORIZONTAL}),this.hammer.on("tap",this._onSelectItem.bind(this)),this.hammer.on("press",this._onMultiSelectItem.bind(this)),this.hammer.on("doubletap",this._onAddItem.bind(this)),this.options.rtl?this.groupHammer=new u(this.body.dom.rightContainer):this.groupHammer=new u(this.body.dom.leftContainer),this.groupHammer.on("tap",this._onGroupClick.bind(this)),this.groupHammer.on("panstart",this._onGroupDragStart.bind(this)),this.groupHammer.on("panmove",this._onGroupDrag.bind(this)),this.groupHammer.on("panend",this._onGroupDragEnd.bind(this)),this.groupHammer.get("pan").set({threshold:5,direction:u.DIRECTION_VERTICAL}),this.body.dom.centerContainer.addEventListener("mouseover",this._onMouseOver.bind(this)),this.body.dom.centerContainer.addEventListener("mouseout",this._onMouseOut.bind(this)),this.body.dom.centerContainer.addEventListener("mousemove",this._onMouseMove.bind(this)),this.body.dom.centerContainer.addEventListener("contextmenu",this._onDragEnd.bind(this)),this.body.dom.centerContainer.addEventListener("mousewheel",this._onMouseWheel.bind(this)),this.show()},n.prototype.setOptions=function(t){if(t){var e=["type","rtl","align","order","stack","stackSubgroups","selectable","multiselect","itemsAlwaysDraggable","multiselectPerGroup","groupOrder","dataAttributes","template","groupTemplate","visibleFrameTemplate","hide","snap","groupOrderSwap","tooltip","tooltipOnItemUpdateTime"];c.selectiveExtend(e,this.options,t),"orientation"in t&&("string"==typeof t.orientation?this.options.orientation.item="top"===t.orientation?"top":"bottom":"object"===(0,h.default)(t.orientation)&&"item"in t.orientation&&(this.options.orientation.item=t.orientation.item)),"margin"in t&&("number"==typeof t.margin?(this.options.margin.axis=t.margin,this.options.margin.item.horizontal=t.margin,this.options.margin.item.vertical=t.margin):"object"===(0,h.default)(t.margin)&&(c.selectiveExtend(["axis"],this.options.margin,t.margin),"item"in t.margin&&("number"==typeof t.margin.item?(this.options.margin.item.horizontal=t.margin.item,this.options.margin.item.vertical=t.margin.item):"object"===(0,h.default)(t.margin.item)&&c.selectiveExtend(["horizontal","vertical"],this.options.margin.item,t.margin.item)))),"editable"in t&&("boolean"==typeof t.editable?(this.options.editable.updateTime=t.editable,this.options.editable.updateGroup=t.editable,this.options.editable.add=t.editable,this.options.editable.remove=t.editable,this.options.editable.overrideItems=!1):"object"===(0,h.default)(t.editable)&&c.selectiveExtend(["updateTime","updateGroup","add","remove","overrideItems"],this.options.editable,t.editable)),"groupEditable"in t&&("boolean"==typeof t.groupEditable?(this.options.groupEditable.order=t.groupEditable,this.options.groupEditable.add=t.groupEditable,this.options.groupEditable.remove=t.groupEditable):"object"===(0,h.default)(t.groupEditable)&&c.selectiveExtend(["order","add","remove"],this.options.groupEditable,t.groupEditable));var i=function(e){var i=t[e];if(i){if(!(i instanceof Function))throw new Error("option "+e+" must be a function "+e+"(item, callback)");this.options[e]=i}}.bind(this);["onAdd","onUpdate","onRemove","onMove","onMoving","onAddGroup","onMoveGroup","onRemoveGroup"].forEach(i),this.markDirty()}},n.prototype.markDirty=function(t){this.groupIds=[],this.stackDirty=!0,t&&t.refreshItems&&c.forEach(this.items,function(t){t.dirty=!0,t.displayed&&t.redraw()})},n.prototype.destroy=function(){this.hide(),this.setItems(null),this.setGroups(null),this.hammer=null,this.body=null,this.conversion=null},n.prototype.hide=function(){this.dom.frame.parentNode&&this.dom.frame.parentNode.removeChild(this.dom.frame),this.dom.axis.parentNode&&this.dom.axis.parentNode.removeChild(this.dom.axis),this.dom.labelSet.parentNode&&this.dom.labelSet.parentNode.removeChild(this.dom.labelSet)},n.prototype.show=function(){this.dom.frame.parentNode||this.body.dom.center.appendChild(this.dom.frame),this.dom.axis.parentNode||this.body.dom.backgroundVertical.appendChild(this.dom.axis),this.dom.labelSet.parentNode||(this.options.rtl?this.body.dom.right.appendChild(this.dom.labelSet):this.body.dom.left.appendChild(this.dom.labelSet))},n.prototype.setSelection=function(t){var e,i,o,n;for(void 0==t&&(t=[]),Array.isArray(t)||(t=[t]),e=0,i=this.selection.length;e<i;e++)o=this.selection[e],(n=this.items[o])&&n.unselect();for(this.selection=[],e=0,i=t.length;e<i;e++)o=t[e],(n=this.items[o])&&(this.selection.push(o),n.select())},n.prototype.getSelection=function(){return this.selection.concat([])},n.prototype.getVisibleItems=function(){var t=this.body.range.getRange();if(this.options.rtl)var e=this.body.util.toScreen(t.start),i=this.body.util.toScreen(t.end);else var i=this.body.util.toScreen(t.start),e=this.body.util.toScreen(t.end);var o=[];for(var n in this.groups)if(this.groups.hasOwnProperty(n))for(var s=this.groups[n],r=s.visibleItems,a=0;a<r.length;a++){var h=r[a];this.options.rtl?h.right<i&&h.right+h.width>e&&o.push(h.id):h.left<e&&h.left+h.width>i&&o.push(h.id)}return o},n.prototype._deselect=function(t){for(var e=this.selection,i=0,o=e.length;i<o;i++)if(e[i]==t){e.splice(i,1);break}},n.prototype.redraw=function(){var t=this.options.margin,e=this.body.range,i=c.option.asSize,o=this.options,n=o.orientation.item,s=!1,r=this.dom.frame;this.props.top=this.body.domProps.top.height+this.body.domProps.border.top,this.options.rtl?this.props.right=this.body.domProps.right.width+this.body.domProps.border.right:this.props.left=this.body.domProps.left.width+this.body.domProps.border.left,r.className="vis-itemset",s=this._orderGroups()||s;var a=e.end-e.start,h=a!=this.lastVisibleInterval||this.props.width!=this.props.lastWidth,d=e.start!=this.lastRangeStart;(h||d)&&(this.stackDirty=!0),this.lastVisibleInterval=a,this.lastRangeStart=e.start,this.props.lastWidth=this.props.width;var l=this.stackDirty,u=this._firstGroup(),p={item:t.item,axis:t.axis},f={item:t.item,axis:t.item.vertical/2},m=0,v=t.axis+t.item.vertical;return this.groups[O].redraw(e,f,l),c.forEach(this.groups,function(t){var i=t==u?p:f;s=t.redraw(e,i,l)||s,m+=t.height}),m=Math.max(m,v),this.stackDirty=!1,r.style.height=i(m),this.props.width=r.offsetWidth,this.props.height=m,this.dom.axis.style.top=i("top"==n?this.body.domProps.top.height+this.body.domProps.border.top:this.body.domProps.top.height+this.body.domProps.centerContainer.height),this.options.rtl?this.dom.axis.style.right="0":this.dom.axis.style.left="0",this.initialItemSetDrawn=!0,s=this._isResized()||s},n.prototype._firstGroup=function(){var t="top"==this.options.orientation.item?0:this.groupIds.length-1,e=this.groupIds[t];return this.groups[e]||this.groups[k]||null},n.prototype._updateUngrouped=function(){var t,e,i=this.groups[k];this.groups[O];if(this.groupsData){if(i){i.hide(),delete this.groups[k];for(e in this.items)if(this.items.hasOwnProperty(e)){t=this.items[e],t.parent&&t.parent.remove(t);var o=this._getGroupId(t.data),n=this.groups[o];n&&n.add(t)||t.hide()}}}else if(!i){i=new g(null,null,this),this.groups[k]=i;for(e in this.items)this.items.hasOwnProperty(e)&&(t=this.items[e],i.add(t));i.show()}},n.prototype.getLabelSet=function(){
return this.dom.labelSet},n.prototype.setItems=function(t){var e,i=this,o=this.itemsData;if(t){if(!(t instanceof p||t instanceof f))throw new TypeError("Data must be an instance of DataSet or DataView");this.itemsData=t}else this.itemsData=null;if(o&&(c.forEach(this.itemListeners,function(t,e){o.off(e,t)}),e=o.getIds(),this._onRemove(e)),this.itemsData){var n=this.id;c.forEach(this.itemListeners,function(t,e){i.itemsData.on(e,t,n)}),e=this.itemsData.getIds(),this._onAdd(e),this._updateUngrouped()}this.body.emitter.emit("_change",{queue:!0})},n.prototype.getItems=function(){return this.itemsData},n.prototype.setGroups=function(t){var e,i=this;if(this.groupsData&&(c.forEach(this.groupListeners,function(t,e){i.groupsData.off(e,t)}),e=this.groupsData.getIds(),this.groupsData=null,this._onRemoveGroups(e)),t){if(!(t instanceof p||t instanceof f))throw new TypeError("Data must be an instance of DataSet or DataView");this.groupsData=t}else this.groupsData=null;if(this.groupsData){var o=this.groupsData;this.groupsData instanceof f&&(o=this.groupsData.getDataSet()),o.get().forEach(function(t){t.nestedGroups&&t.nestedGroups.forEach(function(e){var i=o.get(e);i.nestedInGroup=t.id,0==t.showNested&&(i.visible=!1),o.update(i)})});var n=this.id;c.forEach(this.groupListeners,function(t,e){i.groupsData.on(e,t,n)}),e=this.groupsData.getIds(),this._onAddGroups(e)}this._updateUngrouped(),this._order(),this.body.emitter.emit("_change",{queue:!0})},n.prototype.getGroups=function(){return this.groupsData},n.prototype.removeItem=function(t){var e=this.itemsData.get(t),i=this.itemsData.getDataSet();this.items[t];e&&this.options.onRemove(e,function(e){e&&i.remove(t)})},n.prototype._getType=function(t){return t.type||this.options.type||(t.end?"range":"box")},n.prototype._getGroupId=function(t){return"background"==this._getType(t)&&void 0==t.group?O:this.groupsData?t.group:k},n.prototype._onUpdate=function(t){var e=this;t.forEach(function(t){var i,o=e.itemsData.get(t,e.itemOptions),s=e.items[t],r=o?e._getType(o):null,a=n.types[r];if(s&&(a&&s instanceof a?e._updateItem(s,o):(i=s.selected,e._removeItem(s),s=null)),!s&&o){if(!a)throw"rangeoverflow"==r?new TypeError('Item type "rangeoverflow" is deprecated. Use css styling instead: .vis-item.vis-range .vis-item-content {overflow: visible;}'):new TypeError('Unknown item type "'+r+'"');s=new a(o,e.conversion,e.options),s.id=t,e._addItem(s),i&&(this.selection.push(t),s.select())}}.bind(this)),this._order(),this.stackDirty=!0,this.body.emitter.emit("_change",{queue:!0})},n.prototype._onAdd=n.prototype._onUpdate,n.prototype._onRemove=function(t){var e=0,i=this;t.forEach(function(t){var o=i.items[t];o&&(e++,i._removeItem(o))}),e&&(this._order(),this.stackDirty=!0,this.body.emitter.emit("_change",{queue:!0}))},n.prototype._order=function(){c.forEach(this.groups,function(t){t.order()})},n.prototype._onUpdateGroups=function(t){this._onAddGroups(t)},n.prototype._onAddGroups=function(t){var e=this;t.forEach(function(t){var i=e.groupsData.get(t),o=e.groups[t];if(o)o.setData(i);else{if(t==k||t==O)throw new Error("Illegal group id. "+t+" is a reserved id.");var n=(0,r.default)(e.options);c.extend(n,{height:null}),o=new g(t,i,e),e.groups[t]=o;for(var s in e.items)if(e.items.hasOwnProperty(s)){var a=e.items[s];a.data.group==t&&o.add(a)}o.order(),o.show()}}),this.body.emitter.emit("_change",{queue:!0})},n.prototype._onRemoveGroups=function(t){var e=this.groups;t.forEach(function(t){var i=e[t];i&&(i.hide(),delete e[t])}),this.markDirty(),this.body.emitter.emit("_change",{queue:!0})},n.prototype._orderGroups=function(){if(this.groupsData){var t=this.groupsData.getIds({order:this.options.groupOrder});t=this._orderNestedGroups(t);var e=!c.equalArray(t,this.groupIds);if(e){var i=this.groups;t.forEach(function(t){i[t].hide()}),t.forEach(function(t){i[t].show()}),this.groupIds=t}return e}return!1},n.prototype._orderNestedGroups=function(t){var e=[];return t.forEach(function(t){var i=this.groupsData.get(t);if(i.nestedInGroup||e.push(t),i.nestedGroups){var o=this.groupsData.get({filter:function(e){return e.nestedInGroup==t},order:this.options.groupOrder}),n=o.map(function(t){return t.id});e=e.concat(n)}},this),e},n.prototype._addItem=function(t){this.items[t.id]=t;var e=this._getGroupId(t.data),i=this.groups[e];i?i&&i.data&&i.data.showNested&&(t.groupShowing=!0):t.groupShowing=!1,i&&i.add(t)},n.prototype._updateItem=function(t,e){var i=t.data.group,o=t.data.subgroup;if(i!=e.group){var n=this.groups[i];n&&n.remove(t)}t.setData(e);var s=this._getGroupId(t.data),r=this.groups[s];r?r&&r.data&&r.data.showNested&&(t.groupShowing=!0):t.groupShowing=!1,r&&(i!=t.data.group?r.add(t):o!=t.data.subgroup&&r.changeSubgroup(t,o))},n.prototype._removeItem=function(t){t.hide(),delete this.items[t.id];var e=this.selection.indexOf(t.id);e!=-1&&this.selection.splice(e,1),t.parent&&t.parent.remove(t)},n.prototype._constructByEndArray=function(t){for(var e=[],i=0;i<t.length;i++)t[i]instanceof w&&e.push(t[i]);return e},n.prototype._onTouch=function(t){this.touchParams.item=this.itemFromTarget(t),this.touchParams.dragLeftItem=t.target.dragLeftItem||!1,this.touchParams.dragRightItem=t.target.dragRightItem||!1,this.touchParams.itemProps=null},n.prototype._getGroupIndex=function(t){for(var e=0;e<this.groupIds.length;e++)if(t==this.groupIds[e])return e},n.prototype._onDragStart=function(t){if(!this.touchParams.itemIsDragging){var e,i=this.touchParams.item||null,o=this;if(i&&(i.selected||this.options.itemsAlwaysDraggable)){if(this.options.editable.overrideItems&&!this.options.editable.updateTime&&!this.options.editable.updateGroup)return;if(null!=i.editable&&!i.editable.updateTime&&!i.editable.updateGroup&&!this.options.editable.overrideItems)return;var n=this.touchParams.dragLeftItem,s=this.touchParams.dragRightItem;if(this.touchParams.itemIsDragging=!0,this.touchParams.selectedItem=i,n)e={item:n,initialX:t.center.x,dragLeft:!0,data:this._cloneItemData(i.data)},this.touchParams.itemProps=[e];else if(s)e={item:s,initialX:t.center.x,dragRight:!0,data:this._cloneItemData(i.data)},this.touchParams.itemProps=[e];else{var r=this._getGroupIndex(i.data.group),a=this.options.itemsAlwaysDraggable&&!i.selected?[i.id]:this.getSelection();this.touchParams.itemProps=a.map(function(e){var i=o.items[e],n=o._getGroupIndex(i.data.group);return{item:i,initialX:t.center.x,groupOffset:r-n,data:this._cloneItemData(i.data)}}.bind(this))}t.stopPropagation()}else this.options.editable.add&&(t.srcEvent.ctrlKey||t.srcEvent.metaKey)&&this._onDragStartAddItem(t)}},n.prototype._onDragStartAddItem=function(t){var e=this.options.snap||null;if(this.options.rtl)var i=c.getAbsoluteRight(this.dom.frame),o=i-t.center.x+10;else var i=c.getAbsoluteLeft(this.dom.frame),o=t.center.x-i-10;var n=this.body.util.toTime(o),s=this.body.util.getScale(),r=this.body.util.getStep(),a=e?e(n,s,r):n,h=a,d={type:"range",start:a,end:h,content:"new item"},l=c.randomUUID();d[this.itemsData._fieldId]=l;var u=this.groupFromTarget(t);u&&(d.group=u.groupId);var p=new w(d,this.conversion,this.options);p.id=l,p.data=this._cloneItemData(d),this._addItem(p),this.touchParams.selectedItem=p;var f={item:p,initialX:t.center.x,data:p.data};this.options.rtl?f.dragLeft=!0:f.dragRight=!0,this.touchParams.itemProps=[f],t.stopPropagation()},n.prototype._onDrag=function(t){if(this.touchParams.itemProps){t.stopPropagation();var e=this,i=this.options.snap||null;if(this.options.rtl)var o=this.body.dom.root.offsetLeft+this.body.domProps.right.width;else var o=this.body.dom.root.offsetLeft+this.body.domProps.left.width;var n=this.body.util.getScale(),s=this.body.util.getStep(),r=this.touchParams.selectedItem,a=(this.options.editable.overrideItems||null==r.editable)&&this.options.editable.updateGroup||!this.options.editable.overrideItems&&null!=r.editable&&r.editable.updateGroup,h=null;if(a&&r&&void 0!=r.data.group){var d=e.groupFromTarget(t);d&&(h=this._getGroupIndex(d.groupId))}this.touchParams.itemProps.forEach(function(d){var l=e.body.util.toTime(t.center.x-o),u=e.body.util.toTime(d.initialX-o);if(this.options.rtl)var p=-(l-u);else var p=l-u;var f=this._cloneItemData(d.item.data);if(null==d.item.editable||d.item.editable.updateTime||d.item.editable.updateGroup||e.options.editable.overrideItems){if((this.options.editable.overrideItems||null==r.editable)&&this.options.editable.updateTime||!this.options.editable.overrideItems&&null!=r.editable&&r.editable.updateTime)if(d.dragLeft){if(this.options.rtl){if(void 0!=f.end){var m=c.convert(d.data.end,"Date"),v=new Date(m.valueOf()+p);f.end=i?i(v,n,s):v}}else if(void 0!=f.start){var g=c.convert(d.data.start,"Date"),y=new Date(g.valueOf()+p);f.start=i?i(y,n,s):y}}else if(d.dragRight){if(this.options.rtl){if(void 0!=f.start){var g=c.convert(d.data.start,"Date"),y=new Date(g.valueOf()+p);f.start=i?i(y,n,s):y}}else if(void 0!=f.end){var m=c.convert(d.data.end,"Date"),v=new Date(m.valueOf()+p);f.end=i?i(v,n,s):v}}else if(void 0!=f.start){var g=c.convert(d.data.start,"Date").valueOf(),y=new Date(g+p);if(void 0!=f.end){var m=c.convert(d.data.end,"Date"),b=m.valueOf()-g.valueOf();f.start=i?i(y,n,s):y,f.end=new Date(f.start.valueOf()+b)}else f.start=i?i(y,n,s):y}if(a&&!d.dragLeft&&!d.dragRight&&null!=h&&void 0!=f.group){var _=h-d.groupOffset;_=Math.max(0,_),_=Math.min(e.groupIds.length-1,_),f.group=e.groupIds[_]}f=this._cloneItemData(f),e.options.onMoving(f,function(t){t&&d.item.setData(this._cloneItemData(t,"Date"))}.bind(this))}}.bind(this)),this.stackDirty=!0,this.body.emitter.emit("_change")}},n.prototype._moveToGroup=function(t,e){var i=this.groups[e];if(i&&i.groupId!=t.data.group){var o=t.parent;o.remove(t),o.order(),i.add(t),i.order(),t.data.group=i.groupId}},n.prototype._onDragEnd=function(t){if(this.touchParams.itemIsDragging=!1,this.touchParams.itemProps){t.stopPropagation();var e=this,i=this.itemsData.getDataSet(),o=this.touchParams.itemProps;this.touchParams.itemProps=null,o.forEach(function(t){var o=t.item.id;if(null!=e.itemsData.get(o,e.itemOptions)){var n=this._cloneItemData(t.item.data);e.options.onMove(n,function(n){n?(n[i._fieldId]=o,i.update(n)):(t.item.setData(t.data),e.stackDirty=!0,e.body.emitter.emit("_change"))})}else e.options.onAdd(t.item.data,function(i){e._removeItem(t.item),i&&e.itemsData.getDataSet().add(i),e.stackDirty=!0,e.body.emitter.emit("_change")})}.bind(this))}},n.prototype._onGroupClick=function(t){var e=this.groupFromTarget(t);if(e&&e.nestedGroups){var i=this.groupsData;this.groupsData instanceof f&&(i=this.groupsData.getDataSet()),e.showNested=!e.showNested;var o=i.get(e.nestedGroups).map(function(t){return void 0==t.visible&&(t.visible=!0),t.visible=!!e.showNested,t});if(i.update(o),e.showNested)c.removeClassName(e.dom.label,"collapsed"),c.addClassName(e.dom.label,"expanded");else{c.removeClassName(e.dom.label,"expanded");var n=this.options.rtl?"collapsed-rtl":"collapsed";c.addClassName(e.dom.label,n)}}},n.prototype._onGroupDragStart=function(t){this.options.groupEditable.order&&(this.groupTouchParams.group=this.groupFromTarget(t),this.groupTouchParams.group&&(t.stopPropagation(),this.groupTouchParams.originalOrder=this.groupsData.getIds({order:this.options.groupOrder})))},n.prototype._onGroupDrag=function(t){if(this.options.groupEditable.order&&this.groupTouchParams.group){t.stopPropagation();var e=this.groupsData;this.groupsData instanceof f&&(e=this.groupsData.getDataSet());var i=this.groupFromTarget(t);if(i&&i.height!=this.groupTouchParams.group.height){var o=i.top<this.groupTouchParams.group.top,n=t.center?t.center.y:t.clientY,s=c.getAbsoluteTop(i.dom.foreground),r=this.groupTouchParams.group.height;if(o){if(s+r<n)return}else{if(s+i.height-r>n)return}}if(i&&i!=this.groupTouchParams.group){var a=e.get(i.groupId),h=e.get(this.groupTouchParams.group.groupId);h&&a&&(this.options.groupOrderSwap(h,a,e),e.update(h),e.update(a));var d=e.getIds({order:this.options.groupOrder});if(!c.equalArray(d,this.groupTouchParams.originalOrder))for(var l=this.groupTouchParams.originalOrder,u=this.groupTouchParams.group.groupId,p=Math.min(l.length,d.length),m=0,v=0,g=0;m<p;){for(;m+v<p&&m+g<p&&d[m+v]==l[m+g];)m++;if(m+v>=p)break;if(d[m+v]!=u)if(l[m+g]!=u){var y=d.indexOf(l[m+g]),b=e.get(d[m+v]),_=e.get(l[m+g]);this.options.groupOrderSwap(b,_,e),e.update(b),e.update(_);var w=d[m+v];d[m+v]=l[m+g],d[y]=w,m++}else g=1;else v=1}}}},n.prototype._onGroupDragEnd=function(t){if(this.options.groupEditable.order&&this.groupTouchParams.group){t.stopPropagation();var e=this,i=e.groupTouchParams.group.groupId,o=e.groupsData.getDataSet(),n=c.extend({},o.get(i));e.options.onMoveGroup(n,function(t){if(t)t[o._fieldId]=i,o.update(t);else{var n=o.getIds({order:e.options.groupOrder});if(!c.equalArray(n,e.groupTouchParams.originalOrder))for(var s=e.groupTouchParams.originalOrder,r=Math.min(s.length,n.length),a=0;a<r;){for(;a<r&&n[a]==s[a];)a++;if(a>=r)break;var h=n.indexOf(s[a]),d=o.get(n[a]),l=o.get(s[a]);e.options.groupOrderSwap(d,l,o),o.update(d),o.update(l);var u=n[a];n[a]=s[a],n[h]=u,a++}}}),e.body.emitter.emit("groupDragged",{groupId:i})}},n.prototype._onSelectItem=function(t){if(this.options.selectable){var e=t.srcEvent&&(t.srcEvent.ctrlKey||t.srcEvent.metaKey),i=t.srcEvent&&t.srcEvent.shiftKey;if(e||i)return void this._onMultiSelectItem(t);var o=this.getSelection(),n=this.itemFromTarget(t),s=n?[n.id]:[];this.setSelection(s);var r=this.getSelection();(r.length>0||o.length>0)&&this.body.emitter.emit("select",{items:r,event:t})}},n.prototype._onMouseOver=function(t){var e=this.itemFromTarget(t);if(e){if(e!==this.itemFromRelatedTarget(t)){var i=e.getTitle();if(i){null==this.popup&&(this.popup=new l.default(this.body.dom.root,this.options.tooltip.overflowMethod||"flip")),this.popup.setText(i);var o=this.body.dom.centerContainer;this.popup.setPosition(t.clientX-c.getAbsoluteLeft(o)+o.offsetLeft,t.clientY-c.getAbsoluteTop(o)+o.offsetTop),this.popup.show()}else null!=this.popup&&this.popup.hide();this.body.emitter.emit("itemover",{item:e.id,event:t})}}},n.prototype._onMouseOut=function(t){var e=this.itemFromTarget(t);if(e){e!==this.itemFromRelatedTarget(t)&&(null!=this.popup&&this.popup.hide(),this.body.emitter.emit("itemout",{item:e.id,event:t}))}},n.prototype._onMouseMove=function(t){if(this.itemFromTarget(t)&&this.options.tooltip.followMouse&&this.popup&&!this.popup.hidden){var e=this.body.dom.centerContainer;this.popup.setPosition(t.clientX-c.getAbsoluteLeft(e)+e.offsetLeft,t.clientY-c.getAbsoluteTop(e)+e.offsetTop),this.popup.show()}},n.prototype._onMouseWheel=function(t){this.touchParams.itemIsDragging&&this._onDragEnd(t)},n.prototype._onUpdateItem=function(t){if(this.options.selectable&&this.options.editable.add){var e=this;if(t){var i=e.itemsData.get(t.id);this.options.onUpdate(i,function(t){t&&e.itemsData.getDataSet().update(t)})}}},n.prototype._onAddItem=function(t){if(this.options.selectable&&this.options.editable.add){var e=this,i=this.options.snap||null;if(!this.itemFromTarget(t)){if(this.options.rtl)var o=c.getAbsoluteRight(this.dom.frame),n=o-t.center.x;else var o=c.getAbsoluteLeft(this.dom.frame),n=t.center.x-o;var s=this.body.util.toTime(n),r=this.body.util.getScale(),a=this.body.util.getStep(),h={start:i?i(s,r,a):s,content:"new item"};if("drop"==t.type){var d=JSON.parse(t.dataTransfer.getData("text"));if(h.content=d.content,h.type=d.type||"box",h[this.itemsData._fieldId]=d.id||c.randomUUID(),"range"==d.type||d.end&&d.start)if(d.end)h.end=d.end,h.start=d.start;else{var l=this.body.util.toTime(n+this.props.width/5);h.end=i?i(l,r,a):l}}else if(h[this.itemsData._fieldId]=c.randomUUID(),"range"===this.options.type){var l=this.body.util.toTime(n+this.props.width/5);h.end=i?i(l,r,a):l}var u=this.groupFromTarget(t);u&&(h.group=u.groupId),h=this._cloneItemData(h),this.options.onAdd(h,function(i){i&&(e.itemsData.getDataSet().add(i),"drop"==t.type&&e.setSelection([i.id]))})}}},n.prototype._onMultiSelectItem=function(t){if(this.options.selectable){var e=this.itemFromTarget(t);if(e){var i=this.options.multiselect?this.getSelection():[];if((t.srcEvent&&t.srcEvent.shiftKey||!1)&&this.options.multiselect){var o=this.itemsData.get(e.id).group,s=void 0;this.options.multiselectPerGroup&&i.length>0&&(s=this.itemsData.get(i[0]).group),this.options.multiselectPerGroup&&void 0!=s&&s!=o||i.push(e.id);var r=n._getItemRange(this.itemsData.get(i,this.itemOptions));if(!this.options.multiselectPerGroup||s==o){i=[];for(var a in this.items)if(this.items.hasOwnProperty(a)){var h=this.items[a],d=h.data.start,l=void 0!==h.data.end?h.data.end:d;!(d>=r.min&&l<=r.max)||this.options.multiselectPerGroup&&s!=this.itemsData.get(h.id).group||h instanceof x||i.push(h.id)}}}else{var u=i.indexOf(e.id);u==-1?i.push(e.id):i.splice(u,1)}this.setSelection(i),this.body.emitter.emit("select",{items:this.getSelection(),event:t})}}},n._getItemRange=function(t){var e=null,i=null;return t.forEach(function(t){(null==i||t.start<i)&&(i=t.start),void 0!=t.end?(null==e||t.end>e)&&(e=t.end):(null==e||t.start>e)&&(e=t.start)}),{min:i,max:e}},n.prototype.itemFromElement=function(t){for(var e=t;e;){if(e.hasOwnProperty("timeline-item"))return e["timeline-item"];e=e.parentNode}return null},n.prototype.itemFromTarget=function(t){return this.itemFromElement(t.target)},n.prototype.itemFromRelatedTarget=function(t){return this.itemFromElement(t.relatedTarget)},n.prototype.groupFromTarget=function(t){for(var e=t.center?t.center.y:t.clientY,i=0;i<this.groupIds.length;i++){var o=this.groupIds[i],n=this.groups[o],s=n.dom.foreground,r=c.getAbsoluteTop(s);if(e>r&&e<r+s.offsetHeight)return n;if("top"===this.options.orientation.item){if(i===this.groupIds.length-1&&e>r)return n}else if(0===i&&e<r+s.offset)return n}return null},n.itemSetFromTarget=function(t){for(var e=t.target;e;){if(e.hasOwnProperty("timeline-itemset"))return e["timeline-itemset"];e=e.parentNode}return null},n.prototype._cloneItemData=function(t,e){var i=c.extend({},t);return e||(e=this.itemsData.getDataSet()._options.type),void 0!=i.start&&(i.start=c.convert(i.start,e&&e.start||"Date")),void 0!=i.end&&(i.end=c.convert(i.end,e&&e.end||"Date")),i},t.exports=n},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(119),s=o(n),r=i(120),a=o(r),h=function(){function t(e,i){(0,s.default)(this,t),this.container=e,this.overflowMethod=i||"cap",this.x=0,this.y=0,this.padding=5,this.hidden=!1,this.frame=document.createElement("div"),this.frame.className="vis-tooltip",this.container.appendChild(this.frame)}return(0,a.default)(t,[{key:"setPosition",value:function(t,e){this.x=parseInt(t),this.y=parseInt(e)}},{key:"setText",value:function(t){t instanceof Element?(this.frame.innerHTML="",this.frame.appendChild(t)):this.frame.innerHTML=t}},{key:"show",value:function(t){if(void 0===t&&(t=!0),t===!0){var e=this.frame.clientHeight,i=this.frame.clientWidth,o=this.frame.parentNode.clientHeight,n=this.frame.parentNode.clientWidth,s=0,r=0;if("flip"==this.overflowMethod){var a=!1,h=!0;this.y-e<this.padding&&(h=!1),this.x+i>n-this.padding&&(a=!0),s=a?this.x-i:this.x,r=h?this.y-e:this.y}else r=this.y-e,r+e+this.padding>o&&(r=o-e-this.padding),r<this.padding&&(r=this.padding),s=this.x,s+i+this.padding>n&&(s=n-i-this.padding),s<this.padding&&(s=this.padding);this.frame.style.left=s+"px",this.frame.style.top=r+"px",this.frame.style.visibility="visible",this.hidden=!1}else this.hide()}},{key:"hide",value:function(){this.hidden=!0,this.frame.style.visibility="hidden"}},{key:"destroy",value:function(){this.frame.parentNode.removeChild(this.frame)}}]),t}();e.default=h},function(t,e,i){function o(t,e,i,s){this.moment=n,this.current=this.moment(),this._start=this.moment(),this._end=this.moment(),this.autoScale=!0,this.scale="day",this.step=1,this.setRange(t,e,i),this.switchedDay=!1,this.switchedMonth=!1,this.switchedYear=!1,Array.isArray(s)?this.hiddenDates=s:this.hiddenDates=void 0!=s?[s]:[],this.format=o.FORMAT}var n=i(82),s=i(129),r=i(1);o.FORMAT={minorLabels:{millisecond:"SSS",second:"s",minute:"HH:mm",hour:"HH:mm",weekday:"ddd D",day:"D",month:"MMM",year:"YYYY"},majorLabels:{millisecond:"HH:mm:ss",second:"D MMMM HH:mm",minute:"ddd D MMMM",hour:"ddd D MMMM",weekday:"MMMM YYYY",day:"MMMM YYYY",month:"YYYY",year:""}},o.prototype.setMoment=function(t){this.moment=t,this.current=this.moment(this.current.valueOf()),this._start=this.moment(this._start.valueOf()),this._end=this.moment(this._end.valueOf())},o.prototype.setFormat=function(t){var e=r.deepExtend({},o.FORMAT);this.format=r.deepExtend(e,t)},o.prototype.setRange=function(t,e,i){if(!(t instanceof Date&&e instanceof Date))throw"No legal start or end date in method setRange";this._start=void 0!=t?this.moment(t.valueOf()):new Date,this._end=void 0!=e?this.moment(e.valueOf()):new Date,this.autoScale&&this.setMinimumStep(i)},o.prototype.start=function(){this.current=this._start.clone(),this.roundToMinor()},o.prototype.roundToMinor=function(){switch(this.scale){case"year":this.current.year(this.step*Math.floor(this.current.year()/this.step)),this.current.month(0);case"month":this.current.date(1);case"day":case"weekday":this.current.hours(0);case"hour":this.current.minutes(0);case"minute":this.current.seconds(0);case"second":this.current.milliseconds(0)}if(1!=this.step)switch(this.scale){case"millisecond":this.current.subtract(this.current.milliseconds()%this.step,"milliseconds");break;case"second":this.current.subtract(this.current.seconds()%this.step,"seconds");break;case"minute":this.current.subtract(this.current.minutes()%this.step,"minutes");break;case"hour":this.current.subtract(this.current.hours()%this.step,"hours");break;case"weekday":case"day":this.current.subtract((this.current.date()-1)%this.step,"day");break;case"month":this.current.subtract(this.current.month()%this.step,"month");break;case"year":this.current.subtract(this.current.year()%this.step,"year")}},o.prototype.hasNext=function(){return this.current.valueOf()<=this._end.valueOf()},o.prototype.next=function(){var t=this.current.valueOf();switch(this.scale){case"millisecond":this.current.add(this.step,"millisecond");break;case"second":this.current.add(this.step,"second");break;case"minute":this.current.add(this.step,"minute");break;case"hour":this.current.add(this.step,"hour"),this.current.month()<6?this.current.subtract(this.current.hours()%this.step,"hour"):this.current.hours()%this.step!=0&&this.current.add(this.step-this.current.hours()%this.step,"hour");break;case"weekday":case"day":this.current.add(this.step,"day");break;case"month":this.current.add(this.step,"month");break;case"year":this.current.add(this.step,"year")}if(1!=this.step)switch(this.scale){case"millisecond":this.current.milliseconds()>0&&this.current.milliseconds()<this.step&&this.current.milliseconds(0);break;case"second":this.current.seconds()>0&&this.current.seconds()<this.step&&this.current.seconds(0);break;case"minute":this.current.minutes()>0&&this.current.minutes()<this.step&&this.current.minutes(0);break;case"hour":this.current.hours()>0&&this.current.hours()<this.step&&this.current.hours(0);break;case"weekday":case"day":this.current.date()<this.step+1&&this.current.date(1);break;case"month":this.current.month()<this.step&&this.current.month(0);break;case"year":}this.current.valueOf()==t&&(this.current=this._end.clone()),this.switchedDay=!1,this.switchedMonth=!1,this.switchedYear=!1,s.stepOverHiddenDates(this.moment,this,t)},o.prototype.getCurrent=function(){return this.current},o.prototype.setScale=function(t){t&&"string"==typeof t.scale&&(this.scale=t.scale,this.step=t.step>0?t.step:1,this.autoScale=!1)},o.prototype.setAutoScale=function(t){this.autoScale=t},o.prototype.setMinimumStep=function(t){if(void 0!=t){31104e9>t&&(this.scale="year",this.step=1e3),15552e9>t&&(this.scale="year",this.step=500),31104e8>t&&(this.scale="year",this.step=100),15552e8>t&&(this.scale="year",this.step=50),31104e7>t&&(this.scale="year",this.step=10),15552e7>t&&(this.scale="year",this.step=5),31104e6>t&&(this.scale="year",this.step=1),7776e6>t&&(this.scale="month",this.step=3),2592e6>t&&(this.scale="month",this.step=1),432e6>t&&(this.scale="day",this.step=5),1728e5>t&&(this.scale="day",this.step=2),864e5>t&&(this.scale="day",this.step=1),432e5>t&&(this.scale="weekday",this.step=1),144e5>t&&(this.scale="hour",this.step=4),36e5>t&&(this.scale="hour",this.step=1),9e5>t&&(this.scale="minute",this.step=15),6e5>t&&(this.scale="minute",this.step=10),3e5>t&&(this.scale="minute",this.step=5),6e4>t&&(this.scale="minute",this.step=1),15e3>t&&(this.scale="second",this.step=15),1e4>t&&(this.scale="second",this.step=10),5e3>t&&(this.scale="second",this.step=5),1e3>t&&(this.scale="second",this.step=1),200>t&&(this.scale="millisecond",this.step=200),100>t&&(this.scale="millisecond",this.step=100),50>t&&(this.scale="millisecond",this.step=50),10>t&&(this.scale="millisecond",this.step=10),5>t&&(this.scale="millisecond",this.step=5),1>t&&(this.scale="millisecond",this.step=1)}},o.snap=function(t,e,i){var o=n(t);if("year"==e){var s=o.year()+Math.round(o.month()/12);o.year(Math.round(s/i)*i),o.month(0),o.date(0),o.hours(0),o.minutes(0),o.seconds(0),o.milliseconds(0)}else if("month"==e)o.date()>15?(o.date(1),o.add(1,"month")):o.date(1),o.hours(0),o.minutes(0),o.seconds(0),o.milliseconds(0);else if("day"==e){switch(i){case 5:case 2:o.hours(24*Math.round(o.hours()/24));break;default:o.hours(12*Math.round(o.hours()/12))}o.minutes(0),o.seconds(0),o.milliseconds(0)}else if("weekday"==e){switch(i){case 5:case 2:o.hours(12*Math.round(o.hours()/12));break;default:o.hours(6*Math.round(o.hours()/6))}o.minutes(0),o.seconds(0),o.milliseconds(0)}else if("hour"==e){switch(i){case 4:o.minutes(60*Math.round(o.minutes()/60));break;default:o.minutes(30*Math.round(o.minutes()/30))}o.seconds(0),o.milliseconds(0)}else if("minute"==e){switch(i){case 15:case 10:o.minutes(5*Math.round(o.minutes()/5)),o.seconds(0);break;case 5:o.seconds(60*Math.round(o.seconds()/60));break;default:o.seconds(30*Math.round(o.seconds()/30))}o.milliseconds(0)}else if("second"==e)switch(i){case 15:case 10:o.seconds(5*Math.round(o.seconds()/5)),o.milliseconds(0);break;case 5:o.milliseconds(1e3*Math.round(o.milliseconds()/1e3));break;default:o.milliseconds(500*Math.round(o.milliseconds()/500))}else if("millisecond"==e){var r=i>5?i/2:1;o.milliseconds(Math.round(o.milliseconds()/r)*r)}return o},o.prototype.isMajor=function(){if(1==this.switchedYear)switch(this.scale){case"year":case"month":case"weekday":case"day":case"hour":case"minute":case"second":case"millisecond":return!0;default:return!1}else if(1==this.switchedMonth)switch(this.scale){case"weekday":case"day":case"hour":case"minute":case"second":case"millisecond":return!0;default:return!1}else if(1==this.switchedDay)switch(this.scale){case"millisecond":case"second":case"minute":case"hour":return!0;default:return!1}var t=this.moment(this.current);switch(this.scale){case"millisecond":return 0==t.milliseconds();case"second":return 0==t.seconds();case"minute":return 0==t.hours()&&0==t.minutes();case"hour":return 0==t.hours();case"weekday":case"day":return 1==t.date();case"month":return 0==t.month();case"year":return!1;default:return!1}},o.prototype.getLabelMinor=function(t){if(void 0==t&&(t=this.current),t instanceof Date&&(t=this.moment(t)),"function"==typeof this.format.minorLabels)return this.format.minorLabels(t,this.scale,this.step);var e=this.format.minorLabels[this.scale];return e&&e.length>0?this.moment(t).format(e):""},o.prototype.getLabelMajor=function(t){if(void 0==t&&(t=this.current),t instanceof Date&&(t=this.moment(t)),"function"==typeof this.format.majorLabels)return this.format.majorLabels(t,this.scale,this.step);var e=this.format.majorLabels[this.scale];return e&&e.length>0?this.moment(t).format(e):""},o.prototype.getClassName=function(){function t(t){return t/r%2==0?" vis-even":" vis-odd"}function e(t){return t.isSame(new Date,"day")?" vis-today":t.isSame(o().add(1,"day"),"day")?" vis-tomorrow":t.isSame(o().add(-1,"day"),"day")?" vis-yesterday":""}function i(t){return t.isSame(new Date,"month")?" vis-current-month":""}var o=this.moment,n=this.moment(this.current),s=n.locale?n.locale("en"):n.lang("en"),r=this.step;switch(this.scale){case"millisecond":return e(s)+t(s.milliseconds()).trim();case"second":return e(s)+t(s.seconds()).trim();case"minute":return e(s)+t(s.minutes()).trim();case"hour":return"vis-h"+s.hours()+(4==this.step?"-h"+(s.hours()+4):"")+e(s)+t(s.hours());case"weekday":return"vis-"+s.format("dddd").toLowerCase()+e(s)+function(t){return t.isSame(new Date,"week")?" vis-current-week":""}(s)+t(s.date());case"day":return"vis-day"+s.date()+" vis-"+s.format("MMMM").toLowerCase()+e(s)+i(s)+(this.step<=2?e(s):"")+(this.step<=2?" vis-"+s.format("dddd").toLowerCase():""+t(s.date()-1));case"month":return"vis-"+s.format("MMMM").toLowerCase()+i(s)+t(s.month());case"year":var a=s.year();return"vis-year"+a+function(t){return t.isSame(new Date,"year")?" vis-current-year":""}(s)+t(a);default:return""}},t.exports=o},function(t,e,i){function o(t,e,i){this.groupId=t,this.subgroups={},this.subgroupIndex=0,this.subgroupOrderer=e&&e.subgroupOrder,this.itemSet=i,this.isVisible=null,e&&e.nestedGroups&&(this.nestedGroups=e.nestedGroups,0==e.showNested?this.showNested=!1:this.showNested=!0),this.nestedInGroup=null,this.dom={},this.props={label:{width:0,height:0}},this.className=null,this.items={},this.visibleItems=[],this.itemsInRange=[],this.orderedItems={byStart:[],byEnd:[]},this.checkRangedItems=!1;var o=this;this.itemSet.body.emitter.on("checkRangedItems",function(){o.checkRangedItems=!0}),this._create(),this.setData(e)}var n=i(58),s=function(t){return t&&t.__esModule?t:{default:t}}(n),r=i(1),a=i(135);i(136);o.prototype._create=function(){var t=document.createElement("div");this.itemSet.options.groupEditable.order?t.className="vis-label draggable":t.className="vis-label",this.dom.label=t;var e=document.createElement("div");e.className="vis-inner",t.appendChild(e),this.dom.inner=e;var i=document.createElement("div");i.className="vis-group",i["timeline-group"]=this,this.dom.foreground=i,this.dom.background=document.createElement("div"),this.dom.background.className="vis-group",this.dom.axis=document.createElement("div"),this.dom.axis.className="vis-group",this.dom.marker=document.createElement("div"),this.dom.marker.style.visibility="hidden",this.dom.marker.style.position="absolute",this.dom.marker.innerHTML="",this.dom.background.appendChild(this.dom.marker)},o.prototype.setData=function(t){var e,i;if(this.itemSet.options&&this.itemSet.options.groupTemplate?(i=this.itemSet.options.groupTemplate.bind(this),e=i(t,this.dom.inner)):e=t&&t.content,e instanceof Element){for(this.dom.inner.appendChild(e);this.dom.inner.firstChild;)this.dom.inner.removeChild(this.dom.inner.firstChild);this.dom.inner.appendChild(e)}else e instanceof Object?i(t,this.dom.inner):this.dom.inner.innerHTML=void 0!==e&&null!==e?e:this.groupId||"";if(this.dom.label.title=t&&t.title||"",this.dom.inner.firstChild?r.removeClassName(this.dom.inner,"vis-hidden"):r.addClassName(this.dom.inner,"vis-hidden"),t&&t.nestedGroups){this.nestedGroups&&this.nestedGroups==t.nestedGroups||(this.nestedGroups=t.nestedGroups),void 0===t.showNested&&void 0!==this.showNested||(0==t.showNested?this.showNested=!1:this.showNested=!0),r.addClassName(this.dom.label,"vis-nesting-group");var o=this.itemSet.options.rtl?"collapsed-rtl":"collapsed";this.showNested?(r.removeClassName(this.dom.label,o),r.addClassName(this.dom.label,"expanded")):(r.removeClassName(this.dom.label,"expanded"),r.addClassName(this.dom.label,o))}else if(this.nestedGroups){this.nestedGroups=null;var o=this.itemSet.options.rtl?"collapsed-rtl":"collapsed";r.removeClassName(this.dom.label,o),r.removeClassName(this.dom.label,"expanded"),r.removeClassName(this.dom.label,"vis-nesting-group")}t&&t.nestedInGroup&&(r.addClassName(this.dom.label,"vis-nested-group"),this.itemSet.options&&this.itemSet.options.rtl?this.dom.inner.style.paddingRight="30px":this.dom.inner.style.paddingLeft="30px");var n=t&&t.className||null
;n!=this.className&&(this.className&&(r.removeClassName(this.dom.label,this.className),r.removeClassName(this.dom.foreground,this.className),r.removeClassName(this.dom.background,this.className),r.removeClassName(this.dom.axis,this.className)),r.addClassName(this.dom.label,n),r.addClassName(this.dom.foreground,n),r.addClassName(this.dom.background,n),r.addClassName(this.dom.axis,n),this.className=n),this.style&&(r.removeCssText(this.dom.label,this.style),this.style=null),t&&t.style&&(r.addCssText(this.dom.label,t.style),this.style=t.style)},o.prototype.getLabelWidth=function(){return this.props.label.width},o.prototype.redraw=function(t,e,i){var o=!1,n=this.dom.marker.clientHeight;n!=this.lastMarkerHeight&&(this.lastMarkerHeight=n,r.forEach(this.items,function(t){t.dirty=!0,t.displayed&&t.redraw()}),i=!0),this._calculateSubGroupHeights(e);var s=this.dom.foreground;if(this.top=s.offsetTop,this.right=s.offsetLeft,this.width=s.offsetWidth,this.isVisible=this._isGroupVisible(t,e),"function"==typeof this.itemSet.options.order){if(i){var h=this;r.forEach(this.items,function(t){t.displayed||(t.redraw(),h.visibleItems.push(t)),t.repositionX(!1)});var d=this.orderedItems.byStart.slice().sort(function(t,e){return h.itemSet.options.order(t.data,e.data)});a.stack(d,e,!0)}this.visibleItems=this._updateItemsInRange(this.orderedItems,this.visibleItems,t)}else this.visibleItems=this._updateItemsInRange(this.orderedItems,this.visibleItems,t),this.itemSet.options.stack?a.stack(this.visibleItems,e,i):a.nostack(this.visibleItems,e,this.subgroups,this.itemSet.options.stackSubgroups);this._updateSubgroupsSizes();var l=this._calculateHeight(e),s=this.dom.foreground;this.top=s.offsetTop,this.right=s.offsetLeft,this.width=s.offsetWidth,o=r.updateProperty(this,"height",l)||o,o=r.updateProperty(this.props.label,"width",this.dom.inner.clientWidth)||o,o=r.updateProperty(this.props.label,"height",this.dom.inner.clientHeight)||o,this.dom.background.style.height=l+"px",this.dom.foreground.style.height=l+"px",this.dom.label.style.height=l+"px";for(var u=0,c=this.visibleItems.length;u<c;u++){var p=this.visibleItems[u];p.repositionY(e),this.isVisible||"__background__"==this.groupId||p.displayed&&p.hide()}return!this.isVisible&&this.height?o=!1:o},o.prototype._calculateSubGroupHeights=function(t){if((0,s.default)(this.subgroups).length>0){var e=this;this.resetSubgroups(),r.forEach(this.visibleItems,function(i){void 0!==i.data.subgroup&&(e.subgroups[i.data.subgroup].height=Math.max(e.subgroups[i.data.subgroup].height,i.height+t.item.vertical),e.subgroups[i.data.subgroup].visible=!0)})}},o.prototype._isGroupVisible=function(t,e){return this.top<=t.body.domProps.centerContainer.height-t.body.domProps.scrollTop+e.axis&&this.top+this.height+e.axis>=-t.body.domProps.scrollTop},o.prototype._calculateHeight=function(t){var e,i=this.visibleItems;if(i.length>0){var o=i[0].top,n=i[0].top+i[0].height;if(r.forEach(i,function(t){o=Math.min(o,t.top),n=Math.max(n,t.top+t.height)}),o>t.axis){var s=o-t.axis;n-=s,r.forEach(i,function(t){t.top-=s})}e=n+t.item.vertical/2}else e=0;return e=Math.max(e,this.props.label.height)},o.prototype.show=function(){this.dom.label.parentNode||this.itemSet.dom.labelSet.appendChild(this.dom.label),this.dom.foreground.parentNode||this.itemSet.dom.foreground.appendChild(this.dom.foreground),this.dom.background.parentNode||this.itemSet.dom.background.appendChild(this.dom.background),this.dom.axis.parentNode||this.itemSet.dom.axis.appendChild(this.dom.axis)},o.prototype.hide=function(){var t=this.dom.label;t.parentNode&&t.parentNode.removeChild(t);var e=this.dom.foreground;e.parentNode&&e.parentNode.removeChild(e);var i=this.dom.background;i.parentNode&&i.parentNode.removeChild(i);var o=this.dom.axis;o.parentNode&&o.parentNode.removeChild(o)},o.prototype.add=function(t){if(this.items[t.id]=t,t.setParent(this),void 0!==t.data.subgroup&&(this._addToSubgroup(t),this.orderSubgroups()),this.visibleItems.indexOf(t)==-1){var e=this.itemSet.body.range;this._checkIfVisible(t,this.visibleItems,e)}},o.prototype._addToSubgroup=function(t,e){e=e||t.data.subgroup,void 0!=e&&void 0===this.subgroups[e]&&(this.subgroups[e]={height:0,top:0,start:t.data.start,end:t.data.end,visible:!1,index:this.subgroupIndex,items:[]},this.subgroupIndex++),new Date(t.data.start)<new Date(this.subgroups[e].start)&&(this.subgroups[e].start=t.data.start),new Date(t.data.end)>new Date(this.subgroups[e].end)&&(this.subgroups[e].end=t.data.end),this.subgroups[e].items.push(t)},o.prototype._updateSubgroupsSizes=function(){var t=this;if(t.subgroups)for(var e in t.subgroups){var i=t.subgroups[e].items[0].data.start,o=t.subgroups[e].items[0].data.end;t.subgroups[e].items.forEach(function(t){new Date(t.data.start)<new Date(i)&&(i=t.data.start),new Date(t.data.end)>new Date(o)&&(o=t.data.end)}),t.subgroups[e].start=i,t.subgroups[e].end=o}},o.prototype.orderSubgroups=function(){if(void 0!==this.subgroupOrderer){var t=[];if("string"==typeof this.subgroupOrderer){for(var e in this.subgroups)t.push({subgroup:e,sortField:this.subgroups[e].items[0].data[this.subgroupOrderer]});t.sort(function(t,e){return t.sortField-e.sortField})}else if("function"==typeof this.subgroupOrderer){for(var e in this.subgroups)t.push(this.subgroups[e].items[0].data);t.sort(this.subgroupOrderer)}if(t.length>0)for(var i=0;i<t.length;i++)this.subgroups[t[i].subgroup].index=i}},o.prototype.resetSubgroups=function(){for(var t in this.subgroups)this.subgroups.hasOwnProperty(t)&&(this.subgroups[t].visible=!1)},o.prototype.remove=function(t){delete this.items[t.id],t.setParent(null);var e=this.visibleItems.indexOf(t);e!=-1&&this.visibleItems.splice(e,1),void 0!==t.data.subgroup&&(this._removeFromSubgroup(t),this.orderSubgroups())},o.prototype._removeFromSubgroup=function(t,e){if(void 0!=(e=e||t.data.subgroup)){var i=this.subgroups[e];if(i){var o=i.items.indexOf(t);o>=0&&(i.items.splice(o,1),i.items.length?this._updateSubgroupsSizes():delete this.subgroups[e])}}},o.prototype.removeFromDataSet=function(t){this.itemSet.removeItem(t.id)},o.prototype.order=function(){for(var t=r.toArray(this.items),e=[],i=[],o=0;o<t.length;o++)void 0!==t[o].data.end&&i.push(t[o]),e.push(t[o]);this.orderedItems={byStart:e,byEnd:i},a.orderByStart(this.orderedItems.byStart),a.orderByEnd(this.orderedItems.byEnd)},o.prototype._updateItemsInRange=function(t,e,i){var o=[],n={},s=(i.end-i.start)/4,a=i.start-s,h=i.end+s,d=function(t){return t<a?-1:t<=h?0:1};if(e.length>0)for(var l=0;l<e.length;l++)this._checkIfVisibleWithReference(e[l],o,n,i);var u=r.binarySearchCustom(t.byStart,d,"data","start");if(this._traceVisible(u,t.byStart,o,n,function(t){return t.data.start<a||t.data.start>h}),1==this.checkRangedItems)for(this.checkRangedItems=!1,l=0;l<t.byEnd.length;l++)this._checkIfVisibleWithReference(t.byEnd[l],o,n,i);else{var c=r.binarySearchCustom(t.byEnd,d,"data","end");this._traceVisible(c,t.byEnd,o,n,function(t){return t.data.end<a||t.data.end>h})}for(var l=0;l<o.length;l++){var p=o[l];p.displayed||p.show(),p.repositionX()}return o},o.prototype._traceVisible=function(t,e,i,o,n){if(t!=-1){for(var s=t;s>=0;s--){var r=e[s];if(n(r))break;void 0===o[r.id]&&(o[r.id]=!0,i.push(r))}for(var s=t+1;s<e.length;s++){var r=e[s];if(n(r))break;void 0===o[r.id]&&(o[r.id]=!0,i.push(r))}}},o.prototype._checkIfVisible=function(t,e,i){t.isVisible(i)?(t.displayed||t.show(),t.repositionX(),e.push(t)):t.displayed&&t.hide()},o.prototype._checkIfVisibleWithReference=function(t,e,i,o){t.isVisible(o)?void 0===i[t.id]&&(i[t.id]=!0,e.push(t)):t.displayed&&t.hide()},o.prototype.changeSubgroup=function(t,e,i){this._removeFromSubgroup(t,e),this._addToSubgroup(t,i),this.orderSubgroups()},t.exports=o},function(t,e){e.orderByStart=function(t){t.sort(function(t,e){return t.data.start-e.data.start})},e.orderByEnd=function(t){t.sort(function(t,e){return("end"in t.data?t.data.end:t.data.start)-("end"in e.data?e.data.end:e.data.start)})},e.stack=function(t,i,o){if(o)for(var n=0;n<t.length;n++)t[n].top=null;for(var n=0;n<t.length;n++){var s=t[n];if(s.stack&&null===s.top){s.top=i.axis;do{for(var r=null,a=0,h=t.length;a<h;a++){var d=t[a];if(null!==d.top&&d!==s&&d.stack&&e.collision(s,d,i.item,d.options.rtl)){r=d;break}}null!=r&&(s.top=r.top+r.height+i.item.vertical)}while(r)}}},e.nostack=function(t,i,o,n){for(var s=0;s<t.length;s++)if(void 0==t[s].data.subgroup)t[s].top=i.item.vertical;else if(void 0!==t[s].data.subgroup&&n){var r=0;for(var a in o)o.hasOwnProperty(a)&&1==o[a].visible&&o[a].index<o[t[s].data.subgroup].index&&(r+=o[a].height,o[t[s].data.subgroup].top=r);t[s].top=r+.5*i.item.vertical}n||e.stackSubgroups(t,i,o)},e.stackSubgroups=function(t,i,o){for(var n in o)if(o.hasOwnProperty(n)){o[n].top=0;do{var s=null;for(var r in o)if(null!==o[r].top&&r!==n&&o[n].index>o[r].index&&e.collisionByTimes(o[n],o[r])){s=o[r];break}null!=s&&(o[n].top=s.top+s.height)}while(s)}for(var a=0;a<t.length;a++)void 0!==t[a].data.subgroup&&(t[a].top=o[t[a].data.subgroup].top+.5*i.item.vertical)},e.collision=function(t,e,i,o){return o?t.right-i.horizontal+.001<e.right+e.width&&t.right+t.width+i.horizontal-.001>e.right&&t.top-i.vertical+.001<e.top+e.height&&t.top+t.height+i.vertical-.001>e.top:t.left-i.horizontal+.001<e.left+e.width&&t.left+t.width+i.horizontal-.001>e.left&&t.top-i.vertical+.001<e.top+e.height&&t.top+t.height+i.vertical-.001>e.top},e.collisionByTimes=function(t,e){return t.start<=e.start&&t.end>=e.start&&t.top<e.top+e.height&&t.top+t.height>e.top||e.start<=t.start&&e.end>=t.start&&e.top<t.top+t.height&&e.top+e.height>t.top}},function(t,e,i){function o(t,e,i){if(this.props={content:{width:0}},this.overflow=!1,this.options=i,t){if(void 0==t.start)throw new Error('Property "start" missing in item '+t.id);if(void 0==t.end)throw new Error('Property "end" missing in item '+t.id)}n.call(this,t,e,i)}var n=(i(112),i(137));o.prototype=new n(null,null,null),o.prototype.baseClassName="vis-item vis-range",o.prototype.isVisible=function(t){return this.data.start<t.end&&this.data.end>t.start},o.prototype.redraw=function(){var t=this.dom;if(t||(this.dom={},t=this.dom,t.box=document.createElement("div"),t.frame=document.createElement("div"),t.frame.className="vis-item-overflow",t.box.appendChild(t.frame),t.visibleFrame=document.createElement("div"),t.visibleFrame.className="vis-item-visible-frame",t.box.appendChild(t.visibleFrame),t.content=document.createElement("div"),t.content.className="vis-item-content",t.frame.appendChild(t.content),t.box["timeline-item"]=this,this.dirty=!0),!this.parent)throw new Error("Cannot redraw item: no parent attached");if(!t.box.parentNode){var e=this.parent.dom.foreground;if(!e)throw new Error("Cannot redraw item: parent has no foreground container element");e.appendChild(t.box)}if(this.displayed=!0,this.dirty){this._updateContents(this.dom.content),this._updateDataAttributes(this.dom.box),this._updateStyle(this.dom.box);var i=this.editable.updateTime||this.editable.updateGroup,o=(this.data.className?" "+this.data.className:"")+(this.selected?" vis-selected":"")+(i?" vis-editable":" vis-readonly");t.box.className=this.baseClassName+o,this.overflow="hidden"!==window.getComputedStyle(t.frame).overflow,this.dom.content.style.maxWidth="none",this.props.content.width=this.dom.content.offsetWidth,this.height=this.dom.box.offsetHeight,this.dom.content.style.maxWidth="",this.dirty=!1}this._repaintOnItemUpdateTimeTooltip(t.box),this._repaintDeleteButton(t.box),this._repaintDragCenter(),this._repaintDragLeft(),this._repaintDragRight()},o.prototype.show=function(){this.displayed||this.redraw()},o.prototype.hide=function(){if(this.displayed){var t=this.dom.box;t.parentNode&&t.parentNode.removeChild(t),this.displayed=!1}},o.prototype.repositionX=function(t){var e,i,o=this.parent.width,n=this.conversion.toScreen(this.data.start),s=this.conversion.toScreen(this.data.end);void 0!==t&&t!==!0||(n<-o&&(n=-o),s>2*o&&(s=2*o));var r=Math.max(s-n+.5,1);switch(this.overflow?(this.options.rtl?this.right=n:this.left=n,this.width=r+this.props.content.width,i=this.props.content.width):(this.options.rtl?this.right=n:this.left=n,this.width=r,i=Math.min(s-n,this.props.content.width)),this.options.rtl?this.dom.box.style.right=this.right+"px":this.dom.box.style.left=this.left+"px",this.dom.box.style.width=r+"px",this.options.align){case"left":this.options.rtl?this.dom.content.style.right="0":this.dom.content.style.left="0";break;case"right":this.options.rtl?this.dom.content.style.right=Math.max(r-i,0)+"px":this.dom.content.style.left=Math.max(r-i,0)+"px";break;case"center":this.options.rtl?this.dom.content.style.right=Math.max((r-i)/2,0)+"px":this.dom.content.style.left=Math.max((r-i)/2,0)+"px";break;default:e=this.overflow?s>0?Math.max(-n,0):-i:n<0?-n:0,this.options.rtl?this.dom.content.style.right=e+"px":(this.dom.content.style.left=e+"px",this.dom.content.style.width="calc(100% - "+e+"px)")}},o.prototype.repositionY=function(){var t=this.options.orientation.item,e=this.dom.box;e.style.top="top"==t?this.top+"px":this.parent.height-this.top-this.height+"px"},o.prototype._repaintDragLeft=function(){if(this.selected&&this.options.editable.updateTime&&!this.dom.dragLeft){var t=document.createElement("div");t.className="vis-drag-left",t.dragLeftItem=this,this.dom.box.appendChild(t),this.dom.dragLeft=t}else!this.selected&&this.dom.dragLeft&&(this.dom.dragLeft.parentNode&&this.dom.dragLeft.parentNode.removeChild(this.dom.dragLeft),this.dom.dragLeft=null)},o.prototype._repaintDragRight=function(){if(this.selected&&this.options.editable.updateTime&&!this.dom.dragRight){var t=document.createElement("div");t.className="vis-drag-right",t.dragRightItem=this,this.dom.box.appendChild(t),this.dom.dragRight=t}else!this.selected&&this.dom.dragRight&&(this.dom.dragRight.parentNode&&this.dom.dragRight.parentNode.removeChild(this.dom.dragRight),this.dom.dragRight=null)},t.exports=o},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e,i){this.id=null,this.parent=null,this.data=t,this.dom=null,this.conversion=e||{},this.options=i||{},this.selected=!1,this.displayed=!1,this.groupShowing=!0,this.dirty=!0,this.top=null,this.right=null,this.left=null,this.width=null,this.height=null,this.editable=null,this._updateEditStatus()}var s=i(62),r=o(s),a=i(58),h=o(a),d=i(112),l=i(1),u=i(82);n.prototype.stack=!0,n.prototype.select=function(){this.selected=!0,this.dirty=!0,this.displayed&&this.redraw()},n.prototype.unselect=function(){this.selected=!1,this.dirty=!0,this.displayed&&this.redraw()},n.prototype.setData=function(t){void 0!=t.group&&this.data.group!=t.group&&this.parent.itemSet._moveToGroup(this,t.group),this.data=t,this._updateEditStatus(),this.dirty=!0,this.displayed&&this.redraw()},n.prototype.setParent=function(t){this.displayed?(this.hide(),this.parent=t,this.parent&&this.show()):this.parent=t},n.prototype.isVisible=function(t){return!1},n.prototype.show=function(){return!1},n.prototype.hide=function(){return!1},n.prototype.redraw=function(){},n.prototype.repositionX=function(){},n.prototype.repositionY=function(){},n.prototype._repaintDragCenter=function(){if(this.selected&&this.options.editable.updateTime&&!this.dom.dragCenter){var t=this,e=document.createElement("div");e.className="vis-drag-center",e.dragCenterItem=this,new d(e).on("doubletap",function(e){e.stopPropagation(),t.parent.itemSet._onUpdateItem(t)}),this.dom.box?this.dom.box.appendChild(e):this.dom.point&&this.dom.point.appendChild(e),this.dom.dragCenter=e}else!this.selected&&this.dom.dragCenter&&(this.dom.dragCenter.parentNode&&this.dom.dragCenter.parentNode.removeChild(this.dom.dragCenter),this.dom.dragCenter=null)},n.prototype._repaintDeleteButton=function(t){var e=(this.options.editable.overrideItems||null==this.editable)&&this.options.editable.remove||!this.options.editable.overrideItems&&null!=this.editable&&this.editable.remove;if(this.selected&&e&&!this.dom.deleteButton){var i=this,o=document.createElement("div");this.options.rtl?o.className="vis-delete-rtl":o.className="vis-delete",o.title="Delete this item",new d(o).on("tap",function(t){t.stopPropagation(),i.parent.removeFromDataSet(i)}),t.appendChild(o),this.dom.deleteButton=o}else!this.selected&&this.dom.deleteButton&&(this.dom.deleteButton.parentNode&&this.dom.deleteButton.parentNode.removeChild(this.dom.deleteButton),this.dom.deleteButton=null)},n.prototype._repaintOnItemUpdateTimeTooltip=function(t){if(this.options.tooltipOnItemUpdateTime){var e=(this.options.editable.updateTime||this.data.editable===!0)&&this.data.editable!==!1;if(this.selected&&e&&!this.dom.onItemUpdateTimeTooltip){var i=document.createElement("div");i.className="vis-onUpdateTime-tooltip",t.appendChild(i),this.dom.onItemUpdateTimeTooltip=i}else!this.selected&&this.dom.onItemUpdateTimeTooltip&&(this.dom.onItemUpdateTimeTooltip.parentNode&&this.dom.onItemUpdateTimeTooltip.parentNode.removeChild(this.dom.onItemUpdateTimeTooltip),this.dom.onItemUpdateTimeTooltip=null);if(this.dom.onItemUpdateTimeTooltip){this.dom.onItemUpdateTimeTooltip.style.visibility=this.parent.itemSet.touchParams.itemIsDragging?"visible":"hidden",this.options.rtl?this.dom.onItemUpdateTimeTooltip.style.right=this.dom.content.style.right:this.dom.onItemUpdateTimeTooltip.style.left=this.dom.content.style.left;var o,n=this.parent.itemSet.body.domProps.scrollTop;o="top"==this.options.orientation.item?this.top:this.parent.height-this.top-this.height;o+this.parent.top-50<-n?(this.dom.onItemUpdateTimeTooltip.style.bottom="",this.dom.onItemUpdateTimeTooltip.style.top=this.height+2+"px"):(this.dom.onItemUpdateTimeTooltip.style.top="",this.dom.onItemUpdateTimeTooltip.style.bottom=this.height+2+"px");var s,r;this.options.tooltipOnItemUpdateTime&&this.options.tooltipOnItemUpdateTime.template?(r=this.options.tooltipOnItemUpdateTime.template.bind(this),s=r(this.data)):(s="start: "+u(this.data.start).format("MM/DD/YYYY hh:mm"),this.data.end&&(s+="<br> end: "+u(this.data.end).format("MM/DD/YYYY hh:mm"))),this.dom.onItemUpdateTimeTooltip.innerHTML=s}}},n.prototype._updateContents=function(t){var e,i,o,n,s=this.parent.itemSet.itemsData.get(this.id),r=this.dom.box||this.dom.point,a=r.getElementsByClassName("vis-item-visible-frame")[0];if(this.options.visibleFrameTemplate?(n=this.options.visibleFrameTemplate.bind(this),o=n(s,r)):o="",a)if(o instanceof Object&&!(o instanceof Element))n(s,a);else{var h=this._contentToString(this.itemVisibleFrameContent)!==this._contentToString(o);if(h){if(o instanceof Element)a.innerHTML="",a.appendChild(o);else if(void 0!=o)a.innerHTML=o;else if("background"!=this.data.type||void 0!==this.data.content)throw new Error('Property "content" missing in item '+this.id);this.itemVisibleFrameContent=o}}if(this.options.template?(i=this.options.template.bind(this),e=i(s,t,this.data)):e=this.data.content,e instanceof Object&&!(e instanceof Element))i(s,t);else{var h=this._contentToString(this.content)!==this._contentToString(e);if(h){if(e instanceof Element)t.innerHTML="",t.appendChild(e);else if(void 0!=e)t.innerHTML=e;else if("background"!=this.data.type||void 0!==this.data.content)throw new Error('Property "content" missing in item '+this.id);this.content=e}}},n.prototype._updateDataAttributes=function(t){if(this.options.dataAttributes&&this.options.dataAttributes.length>0){var e=[];if(Array.isArray(this.options.dataAttributes))e=this.options.dataAttributes;else{if("all"!=this.options.dataAttributes)return;e=(0,h.default)(this.data)}for(var i=0;i<e.length;i++){var o=e[i],n=this.data[o];null!=n?t.setAttribute("data-"+o,n):t.removeAttribute("data-"+o)}}},n.prototype._updateStyle=function(t){this.style&&(l.removeCssText(t,this.style),this.style=null),this.data.style&&(l.addCssText(t,this.data.style),this.style=this.data.style)},n.prototype._contentToString=function(t){return"string"==typeof t?t:t&&"outerHTML"in t?t.outerHTML:t},n.prototype._updateEditStatus=function(){this.options&&("boolean"==typeof this.options.editable?this.editable={updateTime:this.options.editable,updateGroup:this.options.editable,remove:this.options.editable}:"object"===(0,r.default)(this.options.editable)&&(this.editable={},l.selectiveExtend(["updateTime","updateGroup","remove"],this.editable,this.options.editable))),this.options&&this.options.editable&&this.options.editable.overrideItems===!0||this.data&&("boolean"==typeof this.data.editable?this.editable={updateTime:this.data.editable,updateGroup:this.data.editable,remove:this.data.editable}:"object"===(0,r.default)(this.data.editable)&&(this.editable={},l.selectiveExtend(["updateTime","updateGroup","remove"],this.editable,this.data.editable)))},n.prototype.getWidthLeft=function(){return 0},n.prototype.getWidthRight=function(){return 0},n.prototype.getTitle=function(){return this.data.title},t.exports=n},function(t,e,i){function o(t,e,i){r.call(this,t,e,i),this.width=0,this.height=0,this.top=0,this.left=0}var n=i(55),s=function(t){return t&&t.__esModule?t:{default:t}}(n),r=(i(1),i(134));o.prototype=(0,s.default)(r.prototype),o.prototype.redraw=function(t,e,i){this.visibleItems=this._updateItemsInRange(this.orderedItems,this.visibleItems,t),this.width=this.dom.background.offsetWidth,this.dom.background.style.height="0";for(var o=0,n=this.visibleItems.length;o<n;o++){this.visibleItems[o].repositionY(e)}return!1},o.prototype.show=function(){this.dom.background.parentNode||this.itemSet.dom.background.appendChild(this.dom.background)},t.exports=o},function(t,e,i){function o(t,e,i){if(this.props={dot:{width:0,height:0},line:{width:0,height:0}},this.options=i,t&&void 0==t.start)throw new Error('Property "start" missing in item '+t);n.call(this,t,e,i)}var n=i(137);i(1);o.prototype=new n(null,null,null),o.prototype.isVisible=function(t){var e=this.options.align,i=this.width*t.getMillisecondsPerPixel();return"right"==e?this.data.start.getTime()>t.start&&this.data.start.getTime()-i<t.end:"left"==e?this.data.start.getTime()+i>t.start&&this.data.start.getTime()<t.end:this.data.start.getTime()+i/2>t.start&&this.data.start.getTime()-i/2<t.end},o.prototype.redraw=function(){var t=this.dom;if(t||(this.dom={},t=this.dom,t.box=document.createElement("DIV"),t.content=document.createElement("DIV"),t.content.className="vis-item-content",t.box.appendChild(t.content),t.line=document.createElement("DIV"),t.line.className="vis-line",t.dot=document.createElement("DIV"),t.dot.className="vis-dot",t.box["timeline-item"]=this,this.dirty=!0),!this.parent)throw new Error("Cannot redraw item: no parent attached");if(!t.box.parentNode){var e=this.parent.dom.foreground;if(!e)throw new Error("Cannot redraw item: parent has no foreground container element");e.appendChild(t.box)}if(!t.line.parentNode){var i=this.parent.dom.background;if(!i)throw new Error("Cannot redraw item: parent has no background container element");i.appendChild(t.line)}if(!t.dot.parentNode){var o=this.parent.dom.axis;if(!i)throw new Error("Cannot redraw item: parent has no axis container element");o.appendChild(t.dot)}if(this.displayed=!0,this.dirty){this._updateContents(this.dom.content),this._updateDataAttributes(this.dom.box),this._updateStyle(this.dom.box);var n=this.editable.updateTime||this.editable.updateGroup,s=(this.data.className?" "+this.data.className:"")+(this.selected?" vis-selected":"")+(n?" vis-editable":" vis-readonly");t.box.className="vis-item vis-box"+s,t.line.className="vis-item vis-line"+s,t.dot.className="vis-item vis-dot"+s;var r=t.box.style.right,a=t.box.style.left;this.options.rtl?t.box.style.right="0px":t.box.style.left="0px",this.props.dot.height=t.dot.offsetHeight,this.props.dot.width=t.dot.offsetWidth,this.props.line.width=t.line.offsetWidth,this.width=t.box.offsetWidth,this.height=t.box.offsetHeight,this.options.rtl?t.box.style.right=r:t.box.style.left=a,this.dirty=!1}this._repaintOnItemUpdateTimeTooltip(t.box),this._repaintDragCenter(),this._repaintDeleteButton(t.box)},o.prototype.show=function(){this.displayed||this.redraw()},o.prototype.hide=function(){if(this.displayed){var t=this.dom;t.box.parentNode&&t.box.parentNode.removeChild(t.box),t.line.parentNode&&t.line.parentNode.removeChild(t.line),t.dot.parentNode&&t.dot.parentNode.removeChild(t.dot),this.displayed=!1}},o.prototype.repositionX=function(){var t=this.conversion.toScreen(this.data.start),e=this.options.align;"right"==e?this.options.rtl?(this.right=t-this.width,this.dom.box.style.right=this.right+"px",this.dom.line.style.right=t-this.props.line.width+"px",this.dom.dot.style.right=t-this.props.line.width/2-this.props.dot.width/2+"px"):(this.left=t-this.width,this.dom.box.style.left=this.left+"px",this.dom.line.style.left=t-this.props.line.width+"px",this.dom.dot.style.left=t-this.props.line.width/2-this.props.dot.width/2+"px"):"left"==e?this.options.rtl?(this.right=t,this.dom.box.style.right=this.right+"px",this.dom.line.style.right=t+"px",this.dom.dot.style.right=t+this.props.line.width/2-this.props.dot.width/2+"px"):(this.left=t,this.dom.box.style.left=this.left+"px",this.dom.line.style.left=t+"px",this.dom.dot.style.left=t+this.props.line.width/2-this.props.dot.width/2+"px"):this.options.rtl?(this.right=t-this.width/2,this.dom.box.style.right=this.right+"px",this.dom.line.style.right=t-this.props.line.width+"px",this.dom.dot.style.right=t-this.props.dot.width/2+"px"):(this.left=t-this.width/2,this.dom.box.style.left=this.left+"px",this.dom.line.style.left=t-this.props.line.width/2+"px",this.dom.dot.style.left=t-this.props.dot.width/2+"px")},o.prototype.repositionY=function(){var t=this.options.orientation.item,e=this.dom.box,i=this.dom.line,o=this.dom.dot;if("top"==t)e.style.top=(this.top||0)+"px",i.style.top="0",i.style.height=this.parent.top+this.top+1+"px",i.style.bottom="";else{var n=this.parent.itemSet.props.height,s=n-this.parent.top-this.parent.height+this.top;e.style.top=(this.parent.height-this.top-this.height||0)+"px",i.style.top=n-s+"px",i.style.bottom="0"}o.style.top=-this.props.dot.height/2+"px"},o.prototype.getWidthLeft=function(){return this.width/2},o.prototype.getWidthRight=function(){return this.width/2},t.exports=o},function(t,e,i){function o(t,e,i){if(this.props={dot:{top:0,width:0,height:0},content:{height:0,marginLeft:0,marginRight:0}},this.options=i,t&&void 0==t.start)throw new Error('Property "start" missing in item '+t);n.call(this,t,e,i)}var n=i(137);o.prototype=new n(null,null,null),o.prototype.isVisible=function(t){var e=this.width*t.getMillisecondsPerPixel();return this.data.start.getTime()+e>t.start&&this.data.start<t.end},o.prototype.redraw=function(){var t=this.dom;if(t||(this.dom={},t=this.dom,t.point=document.createElement("div"),t.content=document.createElement("div"),t.content.className="vis-item-content",t.point.appendChild(t.content),t.dot=document.createElement("div"),t.point.appendChild(t.dot),t.point["timeline-item"]=this,this.dirty=!0),!this.parent)throw new Error("Cannot redraw item: no parent attached");if(!t.point.parentNode){var e=this.parent.dom.foreground;if(!e)throw new Error("Cannot redraw item: parent has no foreground container element");e.appendChild(t.point)}if(this.displayed=!0,this.dirty){this._updateContents(this.dom.content),this._updateDataAttributes(this.dom.point),this._updateStyle(this.dom.point);var i=this.editable.updateTime||this.editable.updateGroup,o=(this.data.className?" "+this.data.className:"")+(this.selected?" vis-selected":"")+(i?" vis-editable":" vis-readonly");t.point.className="vis-item vis-point"+o,t.dot.className="vis-item vis-dot"+o,this.props.dot.width=t.dot.offsetWidth,this.props.dot.height=t.dot.offsetHeight,this.props.content.height=t.content.offsetHeight,this.options.rtl?t.content.style.marginRight=2*this.props.dot.width+"px":t.content.style.marginLeft=2*this.props.dot.width+"px",this.width=t.point.offsetWidth,this.height=t.point.offsetHeight,t.dot.style.top=(this.height-this.props.dot.height)/2+"px",this.options.rtl?t.dot.style.right=this.props.dot.width/2+"px":t.dot.style.left=this.props.dot.width/2+"px",this.dirty=!1}this._repaintOnItemUpdateTimeTooltip(t.point),this._repaintDragCenter(),this._repaintDeleteButton(t.point)},o.prototype.show=function(){this.displayed||this.redraw()},o.prototype.hide=function(){this.displayed&&(this.dom.point.parentNode&&this.dom.point.parentNode.removeChild(this.dom.point),this.displayed=!1)},o.prototype.repositionX=function(){var t=this.conversion.toScreen(this.data.start);this.options.rtl?(this.right=t-this.props.dot.width,this.dom.point.style.right=this.right+"px"):(this.left=t-this.props.dot.width,this.dom.point.style.left=this.left+"px")},o.prototype.repositionY=function(){var t=this.options.orientation.item,e=this.dom.point;e.style.top="top"==t?this.top+"px":this.parent.height-this.top-this.height+"px"},o.prototype.getWidthLeft=function(){return this.props.dot.width},o.prototype.getWidthRight=function(){return this.props.dot.width},t.exports=o},function(t,e,i){function o(t,e,i){if(this.props={content:{width:0}},this.overflow=!1,t){if(void 0==t.start)throw new Error('Property "start" missing in item '+t.id);if(void 0==t.end)throw new Error('Property "end" missing in item '+t.id)}n.call(this,t,e,i)}var n=(i(112),i(137)),s=i(138),r=i(136);o.prototype=new n(null,null,null),o.prototype.baseClassName="vis-item vis-background",o.prototype.stack=!1,o.prototype.isVisible=function(t){return this.data.start<t.end&&this.data.end>t.start},o.prototype.redraw=function(){var t=this.dom;if(t||(this.dom={},t=this.dom,t.box=document.createElement("div"),t.frame=document.createElement("div"),t.frame.className="vis-item-overflow",t.box.appendChild(t.frame),t.content=document.createElement("div"),t.content.className="vis-item-content",t.frame.appendChild(t.content),this.dirty=!0),!this.parent)throw new Error("Cannot redraw item: no parent attached");if(!t.box.parentNode){var e=this.parent.dom.background;if(!e)throw new Error("Cannot redraw item: parent has no background container element");e.appendChild(t.box)}if(this.displayed=!0,this.dirty){this._updateContents(this.dom.content),this._updateDataAttributes(this.dom.content),this._updateStyle(this.dom.box);var i=(this.data.className?" "+this.data.className:"")+(this.selected?" vis-selected":"");t.box.className=this.baseClassName+i,this.overflow="hidden"!==window.getComputedStyle(t.content).overflow,this.props.content.width=this.dom.content.offsetWidth,this.height=0,this.dirty=!1}},o.prototype.show=r.prototype.show,o.prototype.hide=r.prototype.hide,o.prototype.repositionX=r.prototype.repositionX,o.prototype.repositionY=function(t){var e,i=this.options.orientation.item;if(void 0!==this.data.subgroup){var o=this.data.subgroup,n=this.parent.subgroups;n[o].index;this.dom.box.style.height=this.parent.subgroups[o].height+"px",this.dom.box.style.top="top"==i?this.parent.top+this.parent.subgroups[o].top+"px":this.parent.top+this.parent.height-this.parent.subgroups[o].top-this.parent.subgroups[o].height+"px",this.dom.box.style.bottom=""}else this.parent instanceof s?(e=Math.max(this.parent.height,this.parent.itemSet.body.domProps.center.height,this.parent.itemSet.body.domProps.centerContainer.height),this.dom.box.style.bottom="bottom"==i?"0":"",this.dom.box.style.top="top"==i?"0":""):(e=this.parent.height,this.dom.box.style.top=this.parent.top+"px",this.dom.box.style.bottom="");this.dom.box.style.height=e+"px"},t.exports=o},function(t,e,i){function o(t,e){this.dom={foreground:null,lines:[],majorTexts:[],minorTexts:[],redundant:{lines:[],majorTexts:[],minorTexts:[]}},this.props={range:{start:0,end:0,minimumStep:0},lineTop:0},this.defaultOptions={orientation:{axis:"bottom"},showMinorLabels:!0,showMajorLabels:!0,maxMinorChars:7,format:h.FORMAT,moment:l,timeAxis:null},this.options=r.extend({},this.defaultOptions),this.body=t,this._create(),this.setOptions(e)}var n=i(62),s=function(t){return t&&t.__esModule?t:{default:t}}(n),r=i(1),a=i(128),h=i(133),d=i(129),l=i(82);o.prototype=new a,o.prototype.setOptions=function(t){t&&(r.selectiveExtend(["showMinorLabels","showMajorLabels","maxMinorChars","hiddenDates","timeAxis","moment","rtl"],this.options,t),r.selectiveDeepExtend(["format"],this.options,t),
"orientation"in t&&("string"==typeof t.orientation?this.options.orientation.axis=t.orientation:"object"===(0,s.default)(t.orientation)&&"axis"in t.orientation&&(this.options.orientation.axis=t.orientation.axis)),"locale"in t&&("function"==typeof l.locale?l.locale(t.locale):l.lang(t.locale)))},o.prototype._create=function(){this.dom.foreground=document.createElement("div"),this.dom.background=document.createElement("div"),this.dom.foreground.className="vis-time-axis vis-foreground",this.dom.background.className="vis-time-axis vis-background"},o.prototype.destroy=function(){this.dom.foreground.parentNode&&this.dom.foreground.parentNode.removeChild(this.dom.foreground),this.dom.background.parentNode&&this.dom.background.parentNode.removeChild(this.dom.background),this.body=null},o.prototype.redraw=function(){var t=this.props,e=this.dom.foreground,i=this.dom.background,o="top"==this.options.orientation.axis?this.body.dom.top:this.body.dom.bottom,n=e.parentNode!==o;this._calculateCharSize();var s=this.options.showMinorLabels&&"none"!==this.options.orientation.axis,r=this.options.showMajorLabels&&"none"!==this.options.orientation.axis;t.minorLabelHeight=s?t.minorCharHeight:0,t.majorLabelHeight=r?t.majorCharHeight:0,t.height=t.minorLabelHeight+t.majorLabelHeight,t.width=e.offsetWidth,t.minorLineHeight=this.body.domProps.root.height-t.majorLabelHeight-("top"==this.options.orientation.axis?this.body.domProps.bottom.height:this.body.domProps.top.height),t.minorLineWidth=1,t.majorLineHeight=t.minorLineHeight+t.majorLabelHeight,t.majorLineWidth=1;var a=e.nextSibling,h=i.nextSibling;return e.parentNode&&e.parentNode.removeChild(e),i.parentNode&&i.parentNode.removeChild(i),e.style.height=this.props.height+"px",this._repaintLabels(),a?o.insertBefore(e,a):o.appendChild(e),h?this.body.dom.backgroundVertical.insertBefore(i,h):this.body.dom.backgroundVertical.appendChild(i),this._isResized()||n},o.prototype._repaintLabels=function(){var t=this.options.orientation.axis,e=r.convert(this.body.range.start,"Number"),i=r.convert(this.body.range.end,"Number"),o=this.body.util.toTime((this.props.minorCharWidth||10)*this.options.maxMinorChars).valueOf(),n=o-d.getHiddenDurationBefore(this.options.moment,this.body.hiddenDates,this.body.range,o);n-=this.body.util.toTime(0).valueOf();var s=new h(new Date(e),new Date(i),n,this.body.hiddenDates);s.setMoment(this.options.moment),this.options.format&&s.setFormat(this.options.format),this.options.timeAxis&&s.setScale(this.options.timeAxis),this.step=s;var a=this.dom;a.redundant.lines=a.lines,a.redundant.majorTexts=a.majorTexts,a.redundant.minorTexts=a.minorTexts,a.lines=[],a.majorTexts=[],a.minorTexts=[];var l,c,p,f,m,v,g,y,b=0,_=void 0,w=0;for(s.start(),l=s.getCurrent(),p=this.body.util.toScreen(l);s.hasNext()&&w<1e3;){w++,f=s.isMajor(),y=s.getClassName(),g=s.getLabelMinor(),l,c=p,s.next(),l=s.getCurrent(),s.isMajor(),p=this.body.util.toScreen(l),m=b,b=p-c;var x=b>=.4*m;if(this.options.showMinorLabels&&x){var k=this._repaintMinorText(c,g,t,y);k.style.width=b+"px"}f&&this.options.showMajorLabels?(c>0&&(void 0==_&&(_=c),k=this._repaintMajorText(c,s.getLabelMajor(),t,y)),v=this._repaintMajorLine(c,b,t,y)):x?v=this._repaintMinorLine(c,b,t,y):v&&(v.style.width=parseInt(v.style.width)+b+"px")}if(1e3!==w||u||(console.warn("Something is wrong with the Timeline scale. Limited drawing of grid lines to 1000 lines."),u=!0),this.options.showMajorLabels){var O=this.body.util.toTime(0),S=s.getLabelMajor(O),M=S.length*(this.props.majorCharWidth||10)+10;(void 0==_||M<_)&&this._repaintMajorText(0,S,t,y)}r.forEach(this.dom.redundant,function(t){for(;t.length;){var e=t.pop();e&&e.parentNode&&e.parentNode.removeChild(e)}})},o.prototype._repaintMinorText=function(t,e,i,o){var n=this.dom.redundant.minorTexts.shift();if(!n){var s=document.createTextNode("");n=document.createElement("div"),n.appendChild(s),this.dom.foreground.appendChild(n)}return this.dom.minorTexts.push(n),n.innerHTML=e,n.style.top="top"==i?this.props.majorLabelHeight+"px":"0",this.options.rtl?(n.style.left="",n.style.right=t+"px"):n.style.left=t+"px",n.className="vis-text vis-minor "+o,n},o.prototype._repaintMajorText=function(t,e,i,o){var n=this.dom.redundant.majorTexts.shift();if(!n){var s=document.createElement("div");n=document.createElement("div"),n.appendChild(s),this.dom.foreground.appendChild(n)}return n.childNodes[0].innerHTML=e,n.className="vis-text vis-major "+o,n.style.top="top"==i?"0":this.props.minorLabelHeight+"px",this.options.rtl?(n.style.left="",n.style.right=t+"px"):n.style.left=t+"px",this.dom.majorTexts.push(n),n},o.prototype._repaintMinorLine=function(t,e,i,o){var n=this.dom.redundant.lines.shift();n||(n=document.createElement("div"),this.dom.background.appendChild(n)),this.dom.lines.push(n);var s=this.props;return n.style.top="top"==i?s.majorLabelHeight+"px":this.body.domProps.top.height+"px",n.style.height=s.minorLineHeight+"px",this.options.rtl?(n.style.left="",n.style.right=t-s.minorLineWidth/2+"px",n.className="vis-grid vis-vertical-rtl vis-minor "+o):(n.style.left=t-s.minorLineWidth/2+"px",n.className="vis-grid vis-vertical vis-minor "+o),n.style.width=e+"px",n},o.prototype._repaintMajorLine=function(t,e,i,o){var n=this.dom.redundant.lines.shift();n||(n=document.createElement("div"),this.dom.background.appendChild(n)),this.dom.lines.push(n);var s=this.props;return n.style.top="top"==i?"0":this.body.domProps.top.height+"px",this.options.rtl?(n.style.left="",n.style.right=t-s.majorLineWidth/2+"px",n.className="vis-grid vis-vertical-rtl vis-major "+o):(n.style.left=t-s.majorLineWidth/2+"px",n.className="vis-grid vis-vertical vis-major "+o),n.style.height=s.majorLineHeight+"px",n.style.width=e+"px",n},o.prototype._calculateCharSize=function(){this.dom.measureCharMinor||(this.dom.measureCharMinor=document.createElement("DIV"),this.dom.measureCharMinor.className="vis-text vis-minor vis-measure",this.dom.measureCharMinor.style.position="absolute",this.dom.measureCharMinor.appendChild(document.createTextNode("0")),this.dom.foreground.appendChild(this.dom.measureCharMinor)),this.props.minorCharHeight=this.dom.measureCharMinor.clientHeight,this.props.minorCharWidth=this.dom.measureCharMinor.clientWidth,this.dom.measureCharMajor||(this.dom.measureCharMajor=document.createElement("DIV"),this.dom.measureCharMajor.className="vis-text vis-major vis-measure",this.dom.measureCharMajor.style.position="absolute",this.dom.measureCharMajor.appendChild(document.createTextNode("0")),this.dom.foreground.appendChild(this.dom.measureCharMajor)),this.props.majorCharHeight=this.dom.measureCharMajor.clientHeight,this.props.majorCharWidth=this.dom.measureCharMajor.clientWidth};var u=!1;t.exports=o},function(t,e,i){function o(t){this.active=!1,this.dom={container:t},this.dom.overlay=document.createElement("div"),this.dom.overlay.className="vis-overlay",this.dom.container.appendChild(this.dom.overlay),this.hammer=a(this.dom.overlay),this.hammer.on("tap",this._onTapOverlay.bind(this));var e=this;["tap","doubletap","press","pinch","pan","panstart","panmove","panend"].forEach(function(t){e.hammer.on(t,function(t){t.stopPropagation()})}),document&&document.body&&(this.onClick=function(i){n(i.target,t)||e.deactivate()},document.body.addEventListener("click",this.onClick)),void 0!==this.keycharm&&this.keycharm.destroy(),this.keycharm=s(),this.escListener=this.deactivate.bind(this)}function n(t,e){for(;t;){if(t===e)return!0;t=t.parentNode}return!1}var s=i(115),r=i(99),a=i(112),h=i(1);r(o.prototype),o.current=null,o.prototype.destroy=function(){this.deactivate(),this.dom.overlay.parentNode.removeChild(this.dom.overlay),this.onClick&&document.body.removeEventListener("click",this.onClick),this.hammer.destroy(),this.hammer=null},o.prototype.activate=function(){o.current&&o.current.deactivate(),o.current=this,this.active=!0,this.dom.overlay.style.display="none",h.addClassName(this.dom.container,"vis-active"),this.emit("change"),this.emit("activate"),this.keycharm.bind("esc",this.escListener)},o.prototype.deactivate=function(){this.active=!1,this.dom.overlay.style.display="",h.removeClassName(this.dom.container,"vis-active"),this.keycharm.unbind("esc",this.escListener),this.emit("change"),this.emit("deactivate")},o.prototype._onTapOverlay=function(t){this.activate(),t.stopPropagation()},t.exports=o},function(t,e,i){function o(t,e){this.body=t,this.defaultOptions={moment:a,locales:h,locale:"en",id:void 0,title:void 0},this.options=s.extend({},this.defaultOptions),e&&e.time?this.customTime=e.time:this.customTime=new Date,this.eventParams={},this.setOptions(e),this._create()}var n=i(112),s=i(1),r=i(128),a=i(82),h=i(145);o.prototype=new r,o.prototype.setOptions=function(t){t&&s.selectiveExtend(["moment","locale","locales","id"],this.options,t)},o.prototype._create=function(){function t(t){this.body.range._onMouseWheel(t)}var e=document.createElement("div");e["custom-time"]=this,e.className="vis-custom-time "+(this.options.id||""),e.style.position="absolute",e.style.top="0px",e.style.height="100%",this.bar=e;var i=document.createElement("div");i.style.position="relative",i.style.top="0px",i.style.left="-10px",i.style.height="100%",i.style.width="20px",i.addEventListener?(i.addEventListener("mousewheel",t.bind(this),!1),i.addEventListener("DOMMouseScroll",t.bind(this),!1)):i.attachEvent("onmousewheel",t.bind(this)),e.appendChild(i),this.hammer=new n(i),this.hammer.on("panstart",this._onDragStart.bind(this)),this.hammer.on("panmove",this._onDrag.bind(this)),this.hammer.on("panend",this._onDragEnd.bind(this)),this.hammer.get("pan").set({threshold:5,direction:n.DIRECTION_HORIZONTAL})},o.prototype.destroy=function(){this.hide(),this.hammer.destroy(),this.hammer=null,this.body=null},o.prototype.redraw=function(){var t=this.body.dom.backgroundVertical;this.bar.parentNode!=t&&(this.bar.parentNode&&this.bar.parentNode.removeChild(this.bar),t.appendChild(this.bar));var e=this.body.util.toScreen(this.customTime),i=this.options.locales[this.options.locale];i||(this.warned||(console.log("WARNING: options.locales['"+this.options.locale+"'] not found. See http://visjs.org/docs/timeline/#Localization"),this.warned=!0),i=this.options.locales.en);var o=this.options.title;return void 0===o?(o=i.time+": "+this.options.moment(this.customTime).format("dddd, MMMM Do YYYY, H:mm:ss"),o=o.charAt(0).toUpperCase()+o.substring(1)):"function"==typeof o&&(o=o.call(this.customTime)),this.bar.style.left=e+"px",this.bar.title=o,!1},o.prototype.hide=function(){this.bar.parentNode&&this.bar.parentNode.removeChild(this.bar)},o.prototype.setCustomTime=function(t){this.customTime=s.convert(t,"Date"),this.redraw()},o.prototype.getCustomTime=function(){return new Date(this.customTime.valueOf())},o.prototype.setCustomTitle=function(t){this.options.title=t},o.prototype._onDragStart=function(t){this.eventParams.dragging=!0,this.eventParams.customTime=this.customTime,t.stopPropagation()},o.prototype._onDrag=function(t){if(this.eventParams.dragging){var e=this.body.util.toScreen(this.eventParams.customTime)+t.deltaX,i=this.body.util.toTime(e);this.setCustomTime(i),this.body.emitter.emit("timechange",{id:this.options.id,time:new Date(this.customTime.valueOf()),event:s.elementsCensor(t)}),t.stopPropagation()}},o.prototype._onDragEnd=function(t){this.eventParams.dragging&&(this.body.emitter.emit("timechanged",{id:this.options.id,time:new Date(this.customTime.valueOf()),event:s.elementsCensor(t)}),t.stopPropagation())},o.customTimeFromTarget=function(t){for(var e=t.target;e;){if(e.hasOwnProperty("custom-time"))return e["custom-time"];e=e.parentNode}return null},t.exports=o},function(t,e){e.en={current:"current",time:"time"},e.en_EN=e.en,e.en_US=e.en,e.it={current:"attuale",time:"tempo"},e.it_IT=e.it,e.it_CH=e.it,e.nl={current:"huidige",time:"tijd"},e.nl_NL=e.nl,e.nl_BE=e.nl,e.de={current:"Aktuelle",time:"Zeit"},e.de_DE=e.de,e.fr={current:"actuel",time:"heure"},e.fr_FR=e.fr,e.fr_CA=e.fr,e.fr_BE=e.fr,e.es={current:"corriente",time:"hora"},e.es_ES=e.es},function(t,e,i){function o(t,e){this.body=t,this.defaultOptions={rtl:!1,showCurrentTime:!0,moment:r,locales:a,locale:"en"},this.options=n.extend({},this.defaultOptions),this.offset=0,this._create(),this.setOptions(e)}var n=i(1),s=i(128),r=i(82),a=i(145);o.prototype=new s,o.prototype._create=function(){var t=document.createElement("div");t.className="vis-current-time",t.style.position="absolute",t.style.top="0px",t.style.height="100%",this.bar=t},o.prototype.destroy=function(){this.options.showCurrentTime=!1,this.redraw(),this.body=null},o.prototype.setOptions=function(t){t&&n.selectiveExtend(["rtl","showCurrentTime","moment","locale","locales"],this.options,t)},o.prototype.redraw=function(){if(this.options.showCurrentTime){var t=this.body.dom.backgroundVertical;this.bar.parentNode!=t&&(this.bar.parentNode&&this.bar.parentNode.removeChild(this.bar),t.appendChild(this.bar),this.start());var e=this.options.moment((new Date).valueOf()+this.offset),i=this.body.util.toScreen(e),o=this.options.locales[this.options.locale];o||(this.warned||(console.log("WARNING: options.locales['"+this.options.locale+"'] not found. See http://visjs.org/docs/timeline/#Localization"),this.warned=!0),o=this.options.locales.en);var n=o.current+" "+o.time+": "+e.format("dddd, MMMM Do YYYY, H:mm:ss");n=n.charAt(0).toUpperCase()+n.substring(1),this.options.rtl?this.bar.style.right=i+"px":this.bar.style.left=i+"px",this.bar.title=n}else this.bar.parentNode&&this.bar.parentNode.removeChild(this.bar),this.stop();return!1},o.prototype.start=function(){function t(){e.stop();var i=e.body.range.conversion(e.body.domProps.center.width).scale,o=1/i/10;o<30&&(o=30),o>1e3&&(o=1e3),e.redraw(),e.body.emitter.emit("currentTimeTick"),e.currentTimeTimer=setTimeout(t,o)}var e=this;t()},o.prototype.stop=function(){void 0!==this.currentTimeTimer&&(clearTimeout(this.currentTimeTimer),delete this.currentTimeTimer)},o.prototype.setCurrentTime=function(t){var e=n.convert(t,"Date").valueOf(),i=(new Date).valueOf();this.offset=e-i,this.redraw()},o.prototype.getCurrentTime=function(){return new Date((new Date).valueOf()+this.offset)},t.exports=o},function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var i="string",o="boolean",n="number",s="object",r={configure:{enabled:{boolean:o},filter:{boolean:o,function:"function"},container:{dom:"dom"},__type__:{object:s,boolean:o,function:"function"}},align:{string:i},rtl:{boolean:o,undefined:"undefined"},rollingMode:{boolean:o,undefined:"undefined"},verticalScroll:{boolean:o,undefined:"undefined"},horizontalScroll:{boolean:o,undefined:"undefined"},autoResize:{boolean:o},throttleRedraw:{number:n},clickToUse:{boolean:o},dataAttributes:{string:i,array:"array"},editable:{add:{boolean:o,undefined:"undefined"},remove:{boolean:o,undefined:"undefined"},updateGroup:{boolean:o,undefined:"undefined"},updateTime:{boolean:o,undefined:"undefined"},overrideItems:{boolean:o,undefined:"undefined"},__type__:{boolean:o,object:s}},end:{number:n,date:"date",string:i,moment:"moment"},format:{minorLabels:{millisecond:{string:i,undefined:"undefined"},second:{string:i,undefined:"undefined"},minute:{string:i,undefined:"undefined"},hour:{string:i,undefined:"undefined"},weekday:{string:i,undefined:"undefined"},day:{string:i,undefined:"undefined"},month:{string:i,undefined:"undefined"},year:{string:i,undefined:"undefined"},__type__:{object:s,function:"function"}},majorLabels:{millisecond:{string:i,undefined:"undefined"},second:{string:i,undefined:"undefined"},minute:{string:i,undefined:"undefined"},hour:{string:i,undefined:"undefined"},weekday:{string:i,undefined:"undefined"},day:{string:i,undefined:"undefined"},month:{string:i,undefined:"undefined"},year:{string:i,undefined:"undefined"},__type__:{object:s,function:"function"}},__type__:{object:s}},moment:{function:"function"},groupOrder:{string:i,function:"function"},groupEditable:{add:{boolean:o,undefined:"undefined"},remove:{boolean:o,undefined:"undefined"},order:{boolean:o,undefined:"undefined"},__type__:{boolean:o,object:s}},groupOrderSwap:{function:"function"},height:{string:i,number:n},hiddenDates:{start:{date:"date",number:n,string:i,moment:"moment"},end:{date:"date",number:n,string:i,moment:"moment"},repeat:{string:i},__type__:{object:s,array:"array"}},itemsAlwaysDraggable:{boolean:o},locale:{string:i},locales:{__any__:{any:"any"},__type__:{object:s}},margin:{axis:{number:n},item:{horizontal:{number:n,undefined:"undefined"},vertical:{number:n,undefined:"undefined"},__type__:{object:s,number:n}},__type__:{object:s,number:n}},max:{date:"date",number:n,string:i,moment:"moment"},maxHeight:{number:n,string:i},maxMinorChars:{number:n},min:{date:"date",number:n,string:i,moment:"moment"},minHeight:{number:n,string:i},moveable:{boolean:o},multiselect:{boolean:o},multiselectPerGroup:{boolean:o},onAdd:{function:"function"},onUpdate:{function:"function"},onMove:{function:"function"},onMoving:{function:"function"},onRemove:{function:"function"},onAddGroup:{function:"function"},onMoveGroup:{function:"function"},onRemoveGroup:{function:"function"},order:{function:"function"},orientation:{axis:{string:i,undefined:"undefined"},item:{string:i,undefined:"undefined"},__type__:{string:i,object:s}},selectable:{boolean:o},showCurrentTime:{boolean:o},showMajorLabels:{boolean:o},showMinorLabels:{boolean:o},stack:{boolean:o},stackSubgroups:{boolean:o},snap:{function:"function",null:"null"},start:{date:"date",number:n,string:i,moment:"moment"},template:{function:"function"},groupTemplate:{function:"function"},visibleFrameTemplate:{string:i,function:"function"},tooltip:{followMouse:{boolean:o},overflowMethod:{string:["cap","flip"]},__type__:{object:s}},tooltipOnItemUpdateTime:{template:{function:"function"},__type__:{boolean:o,object:s}},timeAxis:{scale:{string:i,undefined:"undefined"},step:{number:n,undefined:"undefined"},__type__:{object:s}},type:{string:i},width:{string:i,number:n},zoomable:{boolean:o},zoomKey:{string:["ctrlKey","altKey","metaKey",""]},zoomMax:{number:n},zoomMin:{number:n},__type__:{object:s}},a={global:{align:["center","left","right"],direction:!1,autoResize:!0,clickToUse:!1,editable:{add:!1,remove:!1,updateGroup:!1,updateTime:!1},end:"",format:{minorLabels:{millisecond:"SSS",second:"s",minute:"HH:mm",hour:"HH:mm",weekday:"ddd D",day:"D",month:"MMM",year:"YYYY"},majorLabels:{millisecond:"HH:mm:ss",second:"D MMMM HH:mm",minute:"ddd D MMMM",hour:"ddd D MMMM",weekday:"MMMM YYYY",day:"MMMM YYYY",month:"YYYY",year:""}},groupsDraggable:!1,height:"",locale:"",margin:{axis:[20,0,100,1],item:{horizontal:[10,0,100,1],vertical:[10,0,100,1]}},max:"",maxHeight:"",maxMinorChars:[7,0,20,1],min:"",minHeight:"",moveable:!1,multiselect:!1,multiselectPerGroup:!1,orientation:{axis:["both","bottom","top"],item:["bottom","top"]},selectable:!0,showCurrentTime:!1,showMajorLabels:!0,showMinorLabels:!0,stack:!0,stackSubgroups:!0,start:"",tooltip:{followMouse:!1,overflowMethod:"flip"},tooltipOnItemUpdateTime:!1,type:["box","point","range","background"],width:"100%",zoomable:!0,zoomKey:["ctrlKey","altKey","metaKey",""],zoomMax:[31536e10,10,31536e10,1],zoomMin:[10,10,31536e10,1]}};e.allOptions=r,e.configureOptions=a},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e,i,o){if(!(Array.isArray(i)||i instanceof u||i instanceof c)&&i instanceof Object){var n=o;o=i,i=n}o&&o.throttleRedraw&&console.warn('Graph2d option "throttleRedraw" is DEPRICATED and no longer supported. It will be removed in the next MAJOR release.');var s=this;this.defaultOptions={start:null,end:null,autoResize:!0,orientation:{axis:"bottom",item:"bottom"},moment:d,width:null,height:null,maxHeight:null,minHeight:null},this.options=l.deepExtend({},this.defaultOptions),this._create(t),this.components=[],this.body={dom:this.dom,domProps:this.props,emitter:{on:this.on.bind(this),off:this.off.bind(this),emit:this.emit.bind(this)},hiddenDates:[],util:{toScreen:s._toScreen.bind(s),toGlobalScreen:s._toGlobalScreen.bind(s),toTime:s._toTime.bind(s),toGlobalTime:s._toGlobalTime.bind(s)}},this.range=new p(this.body),this.components.push(this.range),this.body.range=this.range,this.timeAxis=new m(this.body),this.components.push(this.timeAxis),this.currentTime=new v(this.body),this.components.push(this.currentTime),this.linegraph=new y(this.body),this.components.push(this.linegraph),this.itemsData=null,this.groupsData=null,this.on("tap",function(t){s.emit("click",s.getEventProperties(t))}),this.on("doubletap",function(t){s.emit("doubleClick",s.getEventProperties(t))}),this.dom.root.oncontextmenu=function(t){s.emit("contextmenu",s.getEventProperties(t))},o&&this.setOptions(o),i&&this.setGroups(i),e&&this.setItems(e),this._redraw()}var s=i(118),r=o(s),a=i(126),h=o(a),d=(i(99),i(112),i(82)),l=i(1),u=i(89),c=i(93),p=i(127),f=i(130),m=i(142),v=i(146),g=i(144),y=i(149),b=i(126).printStyle,_=i(157).allOptions,w=i(157).configureOptions;n.prototype=new f,n.prototype.setOptions=function(t){h.default.validate(t,_)===!0&&console.log("%cErrors have been found in the supplied options object.",b),f.prototype.setOptions.call(this,t)},n.prototype.setItems=function(t){var e,i=null==this.itemsData;if(e=t?t instanceof u||t instanceof c?t:new u(t,{type:{start:"Date",end:"Date"}}):null,this.itemsData=e,this.linegraph&&this.linegraph.setItems(e),i)if(void 0!=this.options.start||void 0!=this.options.end){var o=void 0!=this.options.start?this.options.start:null,n=void 0!=this.options.end?this.options.end:null;this.setWindow(o,n,{animation:!1})}else this.fit({animation:!1})},n.prototype.setGroups=function(t){var e;e=t?t instanceof u||t instanceof c?t:new u(t):null,this.groupsData=e,this.linegraph.setGroups(e)},n.prototype.getLegend=function(t,e,i){return void 0===e&&(e=15),void 0===i&&(i=15),void 0!==this.linegraph.groups[t]?this.linegraph.groups[t].getLegend(e,i):"cannot find group:'"+t+"'"},n.prototype.isGroupVisible=function(t){return void 0!==this.linegraph.groups[t]&&(this.linegraph.groups[t].visible&&(void 0===this.linegraph.options.groups.visibility[t]||1==this.linegraph.options.groups.visibility[t]))},n.prototype.getDataRange=function(){var t=null,e=null;for(var i in this.linegraph.groups)if(this.linegraph.groups.hasOwnProperty(i)&&1==this.linegraph.groups[i].visible)for(var o=0;o<this.linegraph.groups[i].itemsData.length;o++){var n=this.linegraph.groups[i].itemsData[o],s=l.convert(n.x,"Date").valueOf();t=null==t?s:t>s?s:t,e=null==e?s:e<s?s:e}return{min:null!=t?new Date(t):null,max:null!=e?new Date(e):null}},n.prototype.getEventProperties=function(t){var e=t.center?t.center.x:t.clientX,i=t.center?t.center.y:t.clientY,o=e-l.getAbsoluteLeft(this.dom.centerContainer),n=i-l.getAbsoluteTop(this.dom.centerContainer),s=this._toTime(o),r=g.customTimeFromTarget(t),a=l.getTarget(t),h=null;l.hasParent(a,this.timeAxis.dom.foreground)?h="axis":this.timeAxis2&&l.hasParent(a,this.timeAxis2.dom.foreground)?h="axis":l.hasParent(a,this.linegraph.yAxisLeft.dom.frame)?h="data-axis":l.hasParent(a,this.linegraph.yAxisRight.dom.frame)?h="data-axis":l.hasParent(a,this.linegraph.legendLeft.dom.frame)?h="legend":l.hasParent(a,this.linegraph.legendRight.dom.frame)?h="legend":null!=r?h="custom-time":l.hasParent(a,this.currentTime.bar)?h="current-time":l.hasParent(a,this.dom.center)&&(h="background");var d=[],u=this.linegraph.yAxisLeft,c=this.linegraph.yAxisRight;return!u.hidden&&this.itemsData.length>0&&d.push(u.screenToValue(n)),!c.hidden&&this.itemsData.length>0&&d.push(c.screenToValue(n)),{event:t,what:h,pageX:t.srcEvent?t.srcEvent.pageX:t.pageX,pageY:t.srcEvent?t.srcEvent.pageY:t.pageY,x:o,y:n,time:s,value:d}},n.prototype._createConfigurator=function(){return new r.default(this,this.dom.container,w)},t.exports=n},function(t,e,i){function o(t,e){this.id=r.randomUUID(),this.body=t,this.defaultOptions={yAxisOrientation:"left",defaultGroup:"default",sort:!0,sampling:!0,stack:!1,graphHeight:"400px",shaded:{enabled:!1,orientation:"bottom"},style:"line",barChart:{width:50,sideBySide:!1,align:"center"},interpolation:{enabled:!0,parametrization:"centripetal",alpha:.5},drawPoints:{enabled:!0,size:6,style:"square"},dataAxis:{},legend:{},groups:{visibility:{}}},this.options=r.extend({},this.defaultOptions),this.dom={},this.props={},this.hammer=null,this.groups={},this.abortedGraphUpdate=!1,this.updateSVGheight=!1,this.updateSVGheightOnResize=!1,this.forceGraphUpdate=!0;var i=this;this.itemsData=null,this.groupsData=null,this.itemListeners={add:function(t,e,o){i._onAdd(e.items)},update:function(t,e,o){i._onUpdate(e.items)},remove:function(t,e,o){i._onRemove(e.items)}},this.groupListeners={add:function(t,e,o){i._onAddGroups(e.items)},update:function(t,e,o){i._onUpdateGroups(e.items)},remove:function(t,e,o){i._onRemoveGroups(e.items)}},this.items={},this.selection=[],this.lastStart=this.body.range.start,this.touchParams={},this.svgElements={},this.setOptions(e),this.groupsUsingDefaultStyles=[0],this.body.emitter.on("rangechanged",function(){i.lastStart=i.body.range.start,i.svg.style.left=r.option.asSize(-i.props.width),i.forceGraphUpdate=!0,i.redraw.call(i)}),this._create(),this.framework={svg:this.svg,svgElements:this.svgElements,options:this.options,groups:this.groups}}var n=i(62),s=function(t){return t&&t.__esModule?t:{default:t}}(n),r=i(1),a=i(88),h=i(89),d=i(93),l=i(128),u=i(150),c=i(152),p=i(156),f=i(153),m=i(155),v=i(154);o.prototype=new l,o.prototype._create=function(){var t=document.createElement("div");t.className="vis-line-graph",this.dom.frame=t,this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.style.position="relative",this.svg.style.height=(""+this.options.graphHeight).replace("px","")+"px",this.svg.style.display="block",t.appendChild(this.svg),this.options.dataAxis.orientation="left",this.yAxisLeft=new u(this.body,this.options.dataAxis,this.svg,this.options.groups),this.options.dataAxis.orientation="right",this.yAxisRight=new u(this.body,this.options.dataAxis,this.svg,this.options.groups),delete this.options.dataAxis.orientation,this.legendLeft=new p(this.body,this.options.legend,"left",this.options.groups),this.legendRight=new p(this.body,this.options.legend,"right",this.options.groups),this.show()},o.prototype.setOptions=function(t){if(t){var e=["sampling","defaultGroup","stack","height","graphHeight","yAxisOrientation","style","barChart","dataAxis","sort","groups"];void 0===t.graphHeight&&void 0!==t.height?(this.updateSVGheight=!0,this.updateSVGheightOnResize=!0):void 0!==this.body.domProps.centerContainer.height&&void 0!==t.graphHeight&&parseInt((t.graphHeight+"").replace("px",""))<this.body.domProps.centerContainer.height&&(this.updateSVGheight=!0),r.selectiveDeepExtend(e,this.options,t),r.mergeOptions(this.options,t,"interpolation"),r.mergeOptions(this.options,t,"drawPoints"),r.mergeOptions(this.options,t,"shaded"),r.mergeOptions(this.options,t,"legend"),t.interpolation&&"object"==(0,s.default)(t.interpolation)&&t.interpolation.parametrization&&("uniform"==t.interpolation.parametrization?this.options.interpolation.alpha=0:"chordal"==t.interpolation.parametrization?this.options.interpolation.alpha=1:(this.options.interpolation.parametrization="centripetal",this.options.interpolation.alpha=.5)),this.yAxisLeft&&void 0!==t.dataAxis&&(this.yAxisLeft.setOptions(this.options.dataAxis),this.yAxisRight.setOptions(this.options.dataAxis)),this.legendLeft&&void 0!==t.legend&&(this.legendLeft.setOptions(this.options.legend),this.legendRight.setOptions(this.options.legend)),this.groups.hasOwnProperty("__ungrouped__")&&this.groups.__ungrouped__.setOptions(t)}this.dom.frame&&(this.forceGraphUpdate=!0,this.body.emitter.emit("_change",{queue:!0}))},o.prototype.hide=function(){this.dom.frame.parentNode&&this.dom.frame.parentNode.removeChild(this.dom.frame)},o.prototype.show=function(){this.dom.frame.parentNode||this.body.dom.center.appendChild(this.dom.frame)},o.prototype.setItems=function(t){var e,i=this,o=this.itemsData;if(t){if(!(t instanceof h||t instanceof d))throw new TypeError("Data must be an instance of DataSet or DataView");this.itemsData=t}else this.itemsData=null;if(o&&(r.forEach(this.itemListeners,function(t,e){o.off(e,t)}),e=o.getIds(),this._onRemove(e)),this.itemsData){var n=this.id;r.forEach(this.itemListeners,function(t,e){i.itemsData.on(e,t,n)}),e=this.itemsData.getIds(),this._onAdd(e)}},o.prototype.setGroups=function(t){var e,i=this;if(this.groupsData){r.forEach(this.groupListeners,function(t,e){i.groupsData.off(e,t)}),e=this.groupsData.getIds(),this.groupsData=null;for(var o=0;o<e.length;o++)this._removeGroup(e[o])}if(t){if(!(t instanceof h||t instanceof d))throw new TypeError("Data must be an instance of DataSet or DataView");this.groupsData=t}else this.groupsData=null;if(this.groupsData){var n=this.id;r.forEach(this.groupListeners,function(t,e){i.groupsData.on(e,t,n)}),e=this.groupsData.getIds(),this._onAddGroups(e)}},o.prototype._onUpdate=function(t){this._updateAllGroupData(t)},o.prototype._onAdd=function(t){this._onUpdate(t)},o.prototype._onRemove=function(t){this._onUpdate(t)},o.prototype._onUpdateGroups=function(t){this._updateAllGroupData(null,t)},o.prototype._onAddGroups=function(t){this._onUpdateGroups(t)},o.prototype._onRemoveGroups=function(t){for(var e=0;e<t.length;e++)this._removeGroup(t[e]);this.forceGraphUpdate=!0,this.body.emitter.emit("_change",{queue:!0})},o.prototype._removeGroup=function(t){this.groups.hasOwnProperty(t)&&("right"==this.groups[t].options.yAxisOrientation?(this.yAxisRight.removeGroup(t),this.legendRight.removeGroup(t),this.legendRight.redraw()):(this.yAxisLeft.removeGroup(t),this.legendLeft.removeGroup(t),this.legendLeft.redraw()),delete this.groups[t])},o.prototype._updateGroup=function(t,e){this.groups.hasOwnProperty(e)?(this.groups[e].update(t),"right"==this.groups[e].options.yAxisOrientation?(this.yAxisRight.updateGroup(e,this.groups[e]),this.legendRight.updateGroup(e,this.groups[e]),this.yAxisLeft.removeGroup(e),this.legendLeft.removeGroup(e)):(this.yAxisLeft.updateGroup(e,this.groups[e]),this.legendLeft.updateGroup(e,this.groups[e]),this.yAxisRight.removeGroup(e),this.legendRight.removeGroup(e))):(this.groups[e]=new c(t,e,this.options,this.groupsUsingDefaultStyles),"right"==this.groups[e].options.yAxisOrientation?(this.yAxisRight.addGroup(e,this.groups[e]),this.legendRight.addGroup(e,this.groups[e])):(this.yAxisLeft.addGroup(e,this.groups[e]),this.legendLeft.addGroup(e,this.groups[e]))),this.legendLeft.redraw(),this.legendRight.redraw()},o.prototype._updateAllGroupData=function(t,e){if(null!=this.itemsData){var i={},o=this.itemsData.get(),n=this.itemsData._fieldId,s={};t&&t.map(function(t){s[t]=t});for(var a={},h=0;h<o.length;h++){var d=o[h],l=d.group;null!==l&&void 0!==l||(l="__ungrouped__"),a.hasOwnProperty(l)?a[l]++:a[l]=1}if(!e&&t)for(var l in this.groups)if(this.groups.hasOwnProperty(l)){var u=this.groups[l],c=u.getItems();i[l]=c.filter(function(t){return t[n]!==s[t[n]]});var p=a[l];a[l]-=i[l].length,i[l].length<p&&(i[l][p-1]={})}for(var h=0;h<o.length;h++){var d=o[h],l=d.group;if(null!==l&&void 0!==l||(l="__ungrouped__"),e||!t||d[n]===s[d[n]]){i.hasOwnProperty(l)||(i[l]=new Array(a[l]));var f=r.bridgeObject(d);f.x=r.convert(d.x,"Date"),f.end=r.convert(d.end,"Date"),f.orginalY=d.y,f.y=Number(d.y),f[n]=d[n];var m=i[l].length-a[l]--;i[l][m]=f}}for(var l in this.groups)this.groups.hasOwnProperty(l)&&(i.hasOwnProperty(l)||(i[l]=new Array(0)));for(var l in i)if(i.hasOwnProperty(l))if(0==i[l].length)this.groups.hasOwnProperty(l)&&this._removeGroup(l);else{var u=void 0;void 0!=this.groupsData&&(u=this.groupsData.get(l)),void 0==u&&(u={id:l,content:this.options.defaultGroup+l}),this._updateGroup(u,l),this.groups[l].setItems(i[l])}this.forceGraphUpdate=!0,this.body.emitter.emit("_change",{queue:!0})}},o.prototype.redraw=function(){var t=!1;this.props.width=this.dom.frame.offsetWidth,this.props.height=this.body.domProps.centerContainer.height-this.body.domProps.border.top-this.body.domProps.border.bottom,t=this._isResized()||t;var e=this.body.range.end-this.body.range.start,i=e!=this.lastVisibleInterval;if(this.lastVisibleInterval=e,
1==t&&(this.svg.style.width=r.option.asSize(3*this.props.width),this.svg.style.left=r.option.asSize(-this.props.width),(this.options.height+"").indexOf("%")==-1&&1!=this.updateSVGheightOnResize||(this.updateSVGheight=!0)),1==this.updateSVGheight?(this.options.graphHeight!=this.props.height+"px"&&(this.options.graphHeight=this.props.height+"px",this.svg.style.height=this.props.height+"px"),this.updateSVGheight=!1):this.svg.style.height=(""+this.options.graphHeight).replace("px","")+"px",1==t||1==i||1==this.abortedGraphUpdate||1==this.forceGraphUpdate)t=this._updateGraph()||t,this.forceGraphUpdate=!1;else if(0!=this.lastStart){var o=this.body.range.start-this.lastStart,n=this.body.range.end-this.body.range.start;if(0!=this.props.width){var s=this.props.width/n,a=o*s;this.svg.style.left=-this.props.width-a+"px"}}return this.legendLeft.redraw(),this.legendRight.redraw(),t},o.prototype._getSortedGroupIds=function(){var t=[];for(var e in this.groups)if(this.groups.hasOwnProperty(e)){var i=this.groups[e];1!=i.visible||void 0!==this.options.groups.visibility[e]&&1!=this.options.groups.visibility[e]||t.push({id:e,zIndex:i.options.zIndex})}r.insertSort(t,function(t,e){var i=t.zIndex,o=e.zIndex;return void 0===i&&(i=0),void 0===o&&(o=0),i==o?0:i<o?-1:1});for(var o=new Array(t.length),n=0;n<t.length;n++)o[n]=t[n].id;return o},o.prototype._updateGraph=function(){if(a.prepareElements(this.svgElements),0!=this.props.width&&null!=this.itemsData){var t,e,i={},o=this.body.util.toGlobalTime(-this.body.domProps.root.width),n=this.body.util.toGlobalTime(2*this.body.domProps.root.width),s=this._getSortedGroupIds();if(s.length>0){var r={};for(this._getRelevantData(s,r,o,n),this._applySampling(s,r),e=0;e<s.length;e++)this._convertXcoordinates(r[s[e]]);if(this._getYRanges(s,r,i),1==this._updateYAxis(s,i))return a.cleanupElements(this.svgElements),this.abortedGraphUpdate=!0,!0;this.abortedGraphUpdate=!1;var h=void 0;for(e=0;e<s.length;e++)t=this.groups[s[e]],this.options.stack===!0&&"line"===this.options.style&&(void 0!=t.options.excludeFromStacking&&t.options.excludeFromStacking||(void 0!=h&&(this._stack(r[t.id],r[h.id]),1==t.options.shaded.enabled&&"group"!==t.options.shaded.orientation&&("top"==t.options.shaded.orientation&&"group"!==h.options.shaded.orientation?(h.options.shaded.orientation="group",h.options.shaded.groupId=t.id):(t.options.shaded.orientation="group",t.options.shaded.groupId=h.id))),h=t)),this._convertYcoordinates(r[s[e]],t);var d={};for(e=0;e<s.length;e++)if(t=this.groups[s[e]],"line"===t.options.style&&1==t.options.shaded.enabled){var l=r[s[e]];if(null==l||0==l.length)continue;if(d.hasOwnProperty(s[e])||(d[s[e]]=m.calcPath(l,t)),"group"===t.options.shaded.orientation){var u=t.options.shaded.groupId;if(s.indexOf(u)===-1){console.log(t.id+": Unknown shading group target given:"+u);continue}d.hasOwnProperty(u)||(d[u]=m.calcPath(r[u],this.groups[u])),m.drawShading(d[s[e]],t,d[u],this.framework)}else m.drawShading(d[s[e]],t,void 0,this.framework)}for(f.draw(s,r,this.framework),e=0;e<s.length;e++)if(t=this.groups[s[e]],r[s[e]].length>0)switch(t.options.style){case"line":d.hasOwnProperty(s[e])||(d[s[e]]=m.calcPath(r[s[e]],t)),m.draw(d[s[e]],t,this.framework);case"point":case"points":"point"!=t.options.style&&"points"!=t.options.style&&1!=t.options.drawPoints.enabled||v.draw(r[s[e]],t,this.framework);break;case"bar":}}}return a.cleanupElements(this.svgElements),!1},o.prototype._stack=function(t,e){var i,o,n,s,r;i=0;for(var a=0;a<t.length;a++){s=void 0,r=void 0;for(var h=i;h<e.length;h++){if(e[h].x===t[a].x){s=e[h],r=e[h],i=h;break}if(e[h].x>t[a].x){r=e[h],s=0==h?r:e[h-1],i=h;break}}void 0===r&&(s=e[e.length-1],r=e[e.length-1]),o=r.x-s.x,n=r.y-s.y,t[a].y=0==o?t[a].orginalY+r.y:t[a].orginalY+n/o*(t[a].x-s.x)+s.y}},o.prototype._getRelevantData=function(t,e,i,o){var n,s,a,h;if(t.length>0)for(s=0;s<t.length;s++){n=this.groups[t[s]];var d=n.getItems();if(1==n.options.sort){var l=function(t,e){return t.getTime()==e.getTime()?0:t<e?-1:1},u=Math.max(0,r.binarySearchValue(d,i,"x","before",l)),c=Math.min(d.length,r.binarySearchValue(d,o,"x","after",l)+1);c<=0&&(c=d.length);var p=new Array(c-u);for(a=u;a<c;a++)h=n.itemsData[a],p[a-u]=h;e[t[s]]=p}else e[t[s]]=n.itemsData}},o.prototype._applySampling=function(t,e){var i;if(t.length>0)for(var o=0;o<t.length;o++)if(i=this.groups[t[o]],1==i.options.sampling){var n=e[t[o]];if(n.length>0){var s=1,r=n.length,a=this.body.util.toGlobalScreen(n[n.length-1].x)-this.body.util.toGlobalScreen(n[0].x),h=r/a;s=Math.min(Math.ceil(.2*r),Math.max(1,Math.round(h)));for(var d=new Array(r),l=0;l<r;l+=s){var u=Math.round(l/s);d[u]=n[l]}e[t[o]]=d.splice(0,Math.round(r/s))}}},o.prototype._getYRanges=function(t,e,i){var o,n,s,r,a=[],h=[];if(t.length>0){for(s=0;s<t.length;s++)o=e[t[s]],r=this.groups[t[s]].options,o.length>0&&(n=this.groups[t[s]],r.stack===!0&&"bar"===r.style?"left"===r.yAxisOrientation?a=a.concat(o):h=h.concat(o):i[t[s]]=n.getYRange(o,t[s]));f.getStackedYRange(a,i,t,"__barStackLeft","left"),f.getStackedYRange(h,i,t,"__barStackRight","right")}},o.prototype._updateYAxis=function(t,e){var i,o,n=!1,s=!1,r=!1,a=1e9,h=1e9,d=-1e9,l=-1e9;if(t.length>0){for(var u=0;u<t.length;u++){var c=this.groups[t[u]];c&&"right"!=c.options.yAxisOrientation?(s=!0,a=1e9,d=-1e9):c&&c.options.yAxisOrientation&&(r=!0,h=1e9,l=-1e9)}for(var u=0;u<t.length;u++)e.hasOwnProperty(t[u])&&e[t[u]].ignore!==!0&&(i=e[t[u]].min,o=e[t[u]].max,"right"!=e[t[u]].yAxisOrientation?(s=!0,a=a>i?i:a,d=d<o?o:d):(r=!0,h=h>i?i:h,l=l<o?o:l));1==s&&this.yAxisLeft.setRange(a,d),1==r&&this.yAxisRight.setRange(h,l)}n=this._toggleAxisVisiblity(s,this.yAxisLeft)||n,n=this._toggleAxisVisiblity(r,this.yAxisRight)||n,1==r&&1==s?(this.yAxisLeft.drawIcons=!0,this.yAxisRight.drawIcons=!0):(this.yAxisLeft.drawIcons=!1,this.yAxisRight.drawIcons=!1),this.yAxisRight.master=!s,this.yAxisRight.masterAxis=this.yAxisLeft,0==this.yAxisRight.master?(this.yAxisLeft.lineOffset=1==r?this.yAxisRight.width:0,n=this.yAxisLeft.redraw()||n,n=this.yAxisRight.redraw()||n):n=this.yAxisRight.redraw()||n;for(var p=["__barStackLeft","__barStackRight","__lineStackLeft","__lineStackRight"],u=0;u<p.length;u++)t.indexOf(p[u])!=-1&&t.splice(t.indexOf(p[u]),1);return n},o.prototype._toggleAxisVisiblity=function(t,e){var i=!1;return 0==t?e.dom.frame.parentNode&&0==e.hidden&&(e.hide(),i=!0):e.dom.frame.parentNode||1!=e.hidden||(e.show(),i=!0),i},o.prototype._convertXcoordinates=function(t){for(var e=this.body.util.toScreen,i=0;i<t.length;i++)t[i].screen_x=e(t[i].x)+this.props.width,t[i].screen_y=t[i].y,void 0!=t[i].end?t[i].screen_end=e(t[i].end)+this.props.width:t[i].screen_end=void 0},o.prototype._convertYcoordinates=function(t,e){var i=this.yAxisLeft,o=Number(this.svg.style.height.replace("px",""));"right"==e.options.yAxisOrientation&&(i=this.yAxisRight);for(var n=0;n<t.length;n++)t[n].screen_y=Math.round(i.convertValue(t[n].y));e.setZeroPosition(Math.min(o,i.convertValue(0)))},t.exports=o},function(t,e,i){function o(t,e,i,o){this.id=r.randomUUID(),this.body=t,this.defaultOptions={orientation:"left",showMinorLabels:!0,showMajorLabels:!0,icons:!1,majorLinesOffset:7,minorLinesOffset:4,labelOffsetX:10,labelOffsetY:2,iconWidth:20,width:"40px",visible:!0,alignZeros:!0,left:{range:{min:void 0,max:void 0},format:function(t){return""+parseFloat(t.toPrecision(3))},title:{text:void 0,style:void 0}},right:{range:{min:void 0,max:void 0},format:function(t){return""+parseFloat(t.toPrecision(3))},title:{text:void 0,style:void 0}}},this.linegraphOptions=o,this.linegraphSVG=i,this.props={},this.DOMelements={lines:{},labels:{},title:{}},this.dom={},this.scale=void 0,this.range={start:0,end:0},this.options=r.extend({},this.defaultOptions),this.conversionFactor=1,this.setOptions(e),this.width=Number((""+this.options.width).replace("px","")),this.minWidth=this.width,this.height=this.linegraphSVG.getBoundingClientRect().height,this.hidden=!1,this.stepPixels=25,this.zeroCrossing=-1,this.amountOfSteps=-1,this.lineOffset=0,this.master=!0,this.masterAxis=null,this.svgElements={},this.iconsRemoved=!1,this.groups={},this.amountOfGroups=0,this._create(),this.framework={svg:this.svg,svgElements:this.svgElements,options:this.options,groups:this.groups};var n=this;this.body.emitter.on("verticalDrag",function(){n.dom.lineContainer.style.top=n.body.domProps.scrollTop+"px"})}var n=i(58),s=function(t){return t&&t.__esModule?t:{default:t}}(n),r=i(1),a=i(88),h=i(128),d=i(151);o.prototype=new h,o.prototype.addGroup=function(t,e){this.groups.hasOwnProperty(t)||(this.groups[t]=e),this.amountOfGroups+=1},o.prototype.updateGroup=function(t,e){this.groups.hasOwnProperty(t)||(this.amountOfGroups+=1),this.groups[t]=e},o.prototype.removeGroup=function(t){this.groups.hasOwnProperty(t)&&(delete this.groups[t],this.amountOfGroups-=1)},o.prototype.setOptions=function(t){if(t){var e=!1;this.options.orientation!=t.orientation&&void 0!==t.orientation&&(e=!0);var i=["orientation","showMinorLabels","showMajorLabels","icons","majorLinesOffset","minorLinesOffset","labelOffsetX","labelOffsetY","iconWidth","width","visible","left","right","alignZeros"];r.selectiveDeepExtend(i,this.options,t),this.minWidth=Number((""+this.options.width).replace("px","")),e===!0&&this.dom.frame&&(this.hide(),this.show())}},o.prototype._create=function(){this.dom.frame=document.createElement("div"),this.dom.frame.style.width=this.options.width,this.dom.frame.style.height=this.height,this.dom.lineContainer=document.createElement("div"),this.dom.lineContainer.style.width="100%",this.dom.lineContainer.style.height=this.height,this.dom.lineContainer.style.position="relative",this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.style.position="absolute",this.svg.style.top="0px",this.svg.style.height="100%",this.svg.style.width="100%",this.svg.style.display="block",this.dom.frame.appendChild(this.svg)},o.prototype._redrawGroupIcons=function(){a.prepareElements(this.svgElements);var t,e=this.options.iconWidth,i=11.5;t="left"===this.options.orientation?4:this.width-e-4;var o=(0,s.default)(this.groups);o.sort(function(t,e){return t<e?-1:1});for(var n=0;n<o.length;n++){var r=o[n];this.groups[r].visible!==!0||void 0!==this.linegraphOptions.visibility[r]&&this.linegraphOptions.visibility[r]!==!0||(this.groups[r].getLegend(e,15,this.framework,t,i),i+=19)}a.cleanupElements(this.svgElements),this.iconsRemoved=!1},o.prototype._cleanupIcons=function(){this.iconsRemoved===!1&&(a.prepareElements(this.svgElements),a.cleanupElements(this.svgElements),this.iconsRemoved=!0)},o.prototype.show=function(){this.hidden=!1,this.dom.frame.parentNode||("left"===this.options.orientation?this.body.dom.left.appendChild(this.dom.frame):this.body.dom.right.appendChild(this.dom.frame)),this.dom.lineContainer.parentNode||this.body.dom.backgroundHorizontal.appendChild(this.dom.lineContainer)},o.prototype.hide=function(){this.hidden=!0,this.dom.frame.parentNode&&this.dom.frame.parentNode.removeChild(this.dom.frame),this.dom.lineContainer.parentNode&&this.dom.lineContainer.parentNode.removeChild(this.dom.lineContainer)},o.prototype.setRange=function(t,e){this.range.start=t,this.range.end=e},o.prototype.redraw=function(){var t=!1,e=0;this.dom.lineContainer.style.top=this.body.domProps.scrollTop+"px";for(var i in this.groups)this.groups.hasOwnProperty(i)&&(this.groups[i].visible!==!0||void 0!==this.linegraphOptions.visibility[i]&&this.linegraphOptions.visibility[i]!==!0||e++);if(0===this.amountOfGroups||0===e)this.hide();else{this.show(),this.height=Number(this.linegraphSVG.style.height.replace("px","")),this.dom.lineContainer.style.height=this.height+"px",this.width=this.options.visible===!0?Number((""+this.options.width).replace("px","")):0;var o=this.props,n=this.dom.frame;n.className="vis-data-axis",this._calculateCharSize();var s=this.options.orientation,r=this.options.showMinorLabels,a=this.options.showMajorLabels;o.minorLabelHeight=r?o.minorCharHeight:0,o.majorLabelHeight=a?o.majorCharHeight:0,o.minorLineWidth=this.body.dom.backgroundHorizontal.offsetWidth-this.lineOffset-this.width+2*this.options.minorLinesOffset,o.minorLineHeight=1,o.majorLineWidth=this.body.dom.backgroundHorizontal.offsetWidth-this.lineOffset-this.width+2*this.options.majorLinesOffset,o.majorLineHeight=1,"left"===s?(n.style.top="0",n.style.left="0",n.style.bottom="",n.style.width=this.width+"px",n.style.height=this.height+"px",this.props.width=this.body.domProps.left.width,this.props.height=this.body.domProps.left.height):(n.style.top="",n.style.bottom="0",n.style.left="0",n.style.width=this.width+"px",n.style.height=this.height+"px",this.props.width=this.body.domProps.right.width,this.props.height=this.body.domProps.right.height),t=this._redrawLabels(),t=this._isResized()||t,this.options.icons===!0?this._redrawGroupIcons():this._cleanupIcons(),this._redrawTitle(s)}return t},o.prototype._redrawLabels=function(){var t=this,e=!1;a.prepareElements(this.DOMelements.lines),a.prepareElements(this.DOMelements.labels);var i=this.options.orientation,o=void 0!=this.options[i].range?this.options[i].range:{},n=!0;void 0!=o.max&&(this.range.end=o.max,n=!1);var s=!0;void 0!=o.min&&(this.range.start=o.min,s=!1),this.scale=new d(this.range.start,this.range.end,s,n,this.dom.frame.offsetHeight,this.props.majorCharHeight,this.options.alignZeros,this.options[i].format),this.master===!1&&void 0!=this.masterAxis&&this.scale.followScale(this.masterAxis.scale),this.maxLabelSize=0,this.scale.getLines().forEach(function(e){var o=e.y,n=e.major;t.options.showMinorLabels&&n===!1&&t._redrawLabel(o-2,e.val,i,"vis-y-axis vis-minor",t.props.minorCharHeight),n&&o>=0&&t._redrawLabel(o-2,e.val,i,"vis-y-axis vis-major",t.props.majorCharHeight),t.master===!0&&(n?t._redrawLine(o,i,"vis-grid vis-horizontal vis-major",t.options.majorLinesOffset,t.props.majorLineWidth):t._redrawLine(o,i,"vis-grid vis-horizontal vis-minor",t.options.minorLinesOffset,t.props.minorLineWidth))});var r=0;void 0!==this.options[i].title&&void 0!==this.options[i].title.text&&(r=this.props.titleCharHeight);var h=this.options.icons===!0?Math.max(this.options.iconWidth,r)+this.options.labelOffsetX+15:r+this.options.labelOffsetX+15;return this.maxLabelSize>this.width-h&&this.options.visible===!0?(this.width=this.maxLabelSize+h,this.options.width=this.width+"px",a.cleanupElements(this.DOMelements.lines),a.cleanupElements(this.DOMelements.labels),this.redraw(),e=!0):this.maxLabelSize<this.width-h&&this.options.visible===!0&&this.width>this.minWidth?(this.width=Math.max(this.minWidth,this.maxLabelSize+h),this.options.width=this.width+"px",a.cleanupElements(this.DOMelements.lines),a.cleanupElements(this.DOMelements.labels),this.redraw(),e=!0):(a.cleanupElements(this.DOMelements.lines),a.cleanupElements(this.DOMelements.labels),e=!1),e},o.prototype.convertValue=function(t){return this.scale.convertValue(t)},o.prototype.screenToValue=function(t){return this.scale.screenToValue(t)},o.prototype._redrawLabel=function(t,e,i,o,n){var s=a.getDOMElement("div",this.DOMelements.labels,this.dom.frame);s.className=o,s.innerHTML=e,"left"===i?(s.style.left="-"+this.options.labelOffsetX+"px",s.style.textAlign="right"):(s.style.right="-"+this.options.labelOffsetX+"px",s.style.textAlign="left"),s.style.top=t-.5*n+this.options.labelOffsetY+"px",e+="";var r=Math.max(this.props.majorCharWidth,this.props.minorCharWidth);this.maxLabelSize<e.length*r&&(this.maxLabelSize=e.length*r)},o.prototype._redrawLine=function(t,e,i,o,n){if(this.master===!0){var s=a.getDOMElement("div",this.DOMelements.lines,this.dom.lineContainer);s.className=i,s.innerHTML="","left"===e?s.style.left=this.width-o+"px":s.style.right=this.width-o+"px",s.style.width=n+"px",s.style.top=t+"px"}},o.prototype._redrawTitle=function(t){if(a.prepareElements(this.DOMelements.title),void 0!==this.options[t].title&&void 0!==this.options[t].title.text){var e=a.getDOMElement("div",this.DOMelements.title,this.dom.frame);e.className="vis-y-axis vis-title vis-"+t,e.innerHTML=this.options[t].title.text,void 0!==this.options[t].title.style&&r.addCssText(e,this.options[t].title.style),"left"===t?e.style.left=this.props.titleCharHeight+"px":e.style.right=this.props.titleCharHeight+"px",e.style.width=this.height+"px"}a.cleanupElements(this.DOMelements.title)},o.prototype._calculateCharSize=function(){if(!("minorCharHeight"in this.props)){var t=document.createTextNode("0"),e=document.createElement("div");e.className="vis-y-axis vis-minor vis-measure",e.appendChild(t),this.dom.frame.appendChild(e),this.props.minorCharHeight=e.clientHeight,this.props.minorCharWidth=e.clientWidth,this.dom.frame.removeChild(e)}if(!("majorCharHeight"in this.props)){var i=document.createTextNode("0"),o=document.createElement("div");o.className="vis-y-axis vis-major vis-measure",o.appendChild(i),this.dom.frame.appendChild(o),this.props.majorCharHeight=o.clientHeight,this.props.majorCharWidth=o.clientWidth,this.dom.frame.removeChild(o)}if(!("titleCharHeight"in this.props)){var n=document.createTextNode("0"),s=document.createElement("div");s.className="vis-y-axis vis-title vis-measure",s.appendChild(n),this.dom.frame.appendChild(s),this.props.titleCharHeight=s.clientHeight,this.props.titleCharWidth=s.clientWidth,this.dom.frame.removeChild(s)}},t.exports=o},function(t,e){function i(t,e,i,o,n,s){var r=arguments.length>6&&void 0!==arguments[6]&&arguments[6],a=arguments.length>7&&void 0!==arguments[7]&&arguments[7];if(this.majorSteps=[1,2,5,10],this.minorSteps=[.25,.5,1,2],this.customLines=null,this.containerHeight=n,this.majorCharHeight=s,this._start=t,this._end=e,this.scale=1,this.minorStepIdx=-1,this.magnitudefactor=1,this.determineScale(),this.zeroAlign=r,this.autoScaleStart=i,this.autoScaleEnd=o,this.formattingFunction=a,i||o){var h=this,d=function(t){var e=t-t%(h.magnitudefactor*h.minorSteps[h.minorStepIdx]);return t%(h.magnitudefactor*h.minorSteps[h.minorStepIdx])>h.magnitudefactor*h.minorSteps[h.minorStepIdx]*.5?e+h.magnitudefactor*h.minorSteps[h.minorStepIdx]:e};i&&(this._start-=2*this.magnitudefactor*this.minorSteps[this.minorStepIdx],this._start=d(this._start)),o&&(this._end+=this.magnitudefactor*this.minorSteps[this.minorStepIdx],this._end=d(this._end)),this.determineScale()}}i.prototype.setCharHeight=function(t){this.majorCharHeight=t},i.prototype.setHeight=function(t){this.containerHeight=t},i.prototype.determineScale=function(){var t=this._end-this._start;this.scale=this.containerHeight/t;var e=this.majorCharHeight/this.scale,i=t>0?Math.round(Math.log(t)/Math.LN10):0;this.minorStepIdx=-1,this.magnitudefactor=Math.pow(10,i);var o=0;i<0&&(o=i);for(var n=!1,s=o;Math.abs(s)<=Math.abs(i);s++){this.magnitudefactor=Math.pow(10,s);for(var r=0;r<this.minorSteps.length;r++){if(this.magnitudefactor*this.minorSteps[r]>=e){n=!0,this.minorStepIdx=r;break}}if(n===!0)break}},i.prototype.is_major=function(t){return t%(this.magnitudefactor*this.majorSteps[this.minorStepIdx])==0},i.prototype.getStep=function(){return this.magnitudefactor*this.minorSteps[this.minorStepIdx]},i.prototype.getFirstMajor=function(){var t=this.magnitudefactor*this.majorSteps[this.minorStepIdx];return this.convertValue(this._start+(t-this._start%t)%t)},i.prototype.formatValue=function(t){var e=t.toPrecision(5);return"function"==typeof this.formattingFunction&&(e=this.formattingFunction(t)),"number"==typeof e?""+e:"string"==typeof e?e:t.toPrecision(5)},i.prototype.getLines=function(){for(var t=[],e=this.getStep(),i=(e-this._start%e)%e,o=this._start+i;this._end-o>1e-5;o+=e)o!=this._start&&t.push({major:this.is_major(o),y:this.convertValue(o),val:this.formatValue(o)});return t},i.prototype.followScale=function(t){var e=this.minorStepIdx,i=this._start,o=this._end,n=this,s=function(){n.magnitudefactor*=2},r=function(){n.magnitudefactor/=2};t.minorStepIdx<=1&&this.minorStepIdx<=1||t.minorStepIdx>1&&this.minorStepIdx>1||(t.minorStepIdx<this.minorStepIdx?(this.minorStepIdx=1,2==e?s():(s(),s())):(this.minorStepIdx=2,1==e?r():(r(),r())));for(var a=(t.getLines(),t.convertValue(0)),h=t.getStep()*t.scale,d=!1,l=0;!d&&l++<5;){this.scale=h/(this.minorSteps[this.minorStepIdx]*this.magnitudefactor);var u=this.containerHeight/this.scale;this._start=i,this._end=this._start+u;var c=this._end*this.scale,p=this.magnitudefactor*this.majorSteps[this.minorStepIdx],f=this.getFirstMajor()-t.getFirstMajor();if(this.zeroAlign){var m=a-c;this._end+=m/this.scale,this._start=this._end-u}else this.autoScaleStart?(this._start-=f/this.scale,this._end=this._start+u):(this._start+=p-f/this.scale,this._end=this._start+u);if(!this.autoScaleEnd&&this._end>o+1e-5)r(),d=!1;else{if(!this.autoScaleStart&&this._start<i-1e-5){if(!(this.zeroAlign&&i>=0)){r(),d=!1;continue}console.warn("Can't adhere to given 'min' range, due to zeroalign")}this.autoScaleStart&&this.autoScaleEnd&&u<o-i?(s(),d=!1):d=!0}}},i.prototype.convertValue=function(t){return this.containerHeight-(t-this._start)*this.scale},i.prototype.screenToValue=function(t){return(this.containerHeight-t)/this.scale+this._start},t.exports=i},function(t,e,i){function o(t,e,i,o){this.id=e;var n=["sampling","style","sort","yAxisOrientation","barChart","drawPoints","shaded","interpolation","zIndex","excludeFromStacking","excludeFromLegend"];this.options=r.selectiveBridgeObject(n,i),this.usingDefaultStyle=void 0===t.className,this.groupsUsingDefaultStyles=o,this.zeroPosition=0,this.update(t),1==this.usingDefaultStyle&&(this.groupsUsingDefaultStyles[0]+=1),this.itemsData=[],this.visible=void 0===t.visible||t.visible}var n=i(62),s=function(t){return t&&t.__esModule?t:{default:t}}(n),r=i(1),a=(i(88),i(153)),h=i(155),d=i(154);o.prototype.setItems=function(t){null!=t?(this.itemsData=t,1==this.options.sort&&r.insertSort(this.itemsData,function(t,e){return t.x>e.x?1:-1})):this.itemsData=[]},o.prototype.getItems=function(){return this.itemsData},o.prototype.setZeroPosition=function(t){this.zeroPosition=t},o.prototype.setOptions=function(t){if(void 0!==t){var e=["sampling","style","sort","yAxisOrientation","barChart","zIndex","excludeFromStacking","excludeFromLegend"];r.selectiveDeepExtend(e,this.options,t),"function"==typeof t.drawPoints&&(t.drawPoints={onRender:t.drawPoints}),r.mergeOptions(this.options,t,"interpolation"),r.mergeOptions(this.options,t,"drawPoints"),r.mergeOptions(this.options,t,"shaded"),t.interpolation&&"object"==(0,s.default)(t.interpolation)&&t.interpolation.parametrization&&("uniform"==t.interpolation.parametrization?this.options.interpolation.alpha=0:"chordal"==t.interpolation.parametrization?this.options.interpolation.alpha=1:(this.options.interpolation.parametrization="centripetal",this.options.interpolation.alpha=.5))}},o.prototype.update=function(t){this.group=t,this.content=t.content||"graph",this.className=t.className||this.className||"vis-graph-group"+this.groupsUsingDefaultStyles[0]%10,this.visible=void 0===t.visible||t.visible,this.style=t.style,this.setOptions(t.options)},o.prototype.getLegend=function(t,e,i,o,n){if(void 0==i||null==i){i={svg:document.createElementNS("http://www.w3.org/2000/svg","svg"),svgElements:{},options:this.options,groups:[this]}}switch(void 0!=o&&null!=o||(o=0),void 0!=n&&null!=n||(n=.5*e),this.options.style){case"line":h.drawIcon(this,o,n,t,e,i);break;case"points":case"point":d.drawIcon(this,o,n,t,e,i);break;case"bar":a.drawIcon(this,o,n,t,e,i)}return{icon:i.svg,label:this.content,orientation:this.options.yAxisOrientation}},o.prototype.getYRange=function(t){for(var e=t[0].y,i=t[0].y,o=0;o<t.length;o++)e=e>t[o].y?t[o].y:e,i=i<t[o].y?t[o].y:i;return{min:e,max:i,yAxisOrientation:this.options.yAxisOrientation}},t.exports=o},function(t,e,i){function o(t,e){}var n=i(88),s=i(154);o.drawIcon=function(t,e,i,o,s,r){var a=.5*s,h=n.getSVGElement("rect",r.svgElements,r.svg);h.setAttributeNS(null,"x",e),h.setAttributeNS(null,"y",i-a),h.setAttributeNS(null,"width",o),h.setAttributeNS(null,"height",2*a),h.setAttributeNS(null,"class","vis-outline");var d=Math.round(.3*o),l=t.options.barChart.width,u=l/d,c=Math.round(.4*s),p=Math.round(.75*s),f=Math.round((o-2*d)/3);if(n.drawBar(e+.5*d+f,i+a-c-1,d,c,t.className+" vis-bar",r.svgElements,r.svg,t.style),n.drawBar(e+1.5*d+f+2,i+a-p-1,d,p,t.className+" vis-bar",r.svgElements,r.svg,t.style),1==t.options.drawPoints.enabled){var m={style:t.options.drawPoints.style,styles:t.options.drawPoints.styles,size:t.options.drawPoints.size/u,className:t.className};n.drawPoint(e+.5*d+f,i+a-c-1,m,r.svgElements,r.svg),n.drawPoint(e+1.5*d+f+2,i+a-p-1,m,r.svgElements,r.svg)}},o.draw=function(t,e,i){var r,a,h,d,l,u,c=[],p={},f=0;for(l=0;l<t.length;l++)if(d=i.groups[t[l]],"bar"===d.options.style&&d.visible===!0&&(void 0===i.options.groups.visibility[t[l]]||i.options.groups.visibility[t[l]]===!0))for(u=0;u<e[t[l]].length;u++)c.push({screen_x:e[t[l]][u].screen_x,screen_end:e[t[l]][u].screen_end,screen_y:e[t[l]][u].screen_y,x:e[t[l]][u].x,end:e[t[l]][u].end,y:e[t[l]][u].y,groupId:t[l],label:e[t[l]][u].label}),f+=1;if(0!==f)for(c.sort(function(t,e){return t.screen_x===e.screen_x?t.groupId<e.groupId?-1:1:t.screen_x-e.screen_x}),o._getDataIntersections(p,c),l=0;l<c.length;l++){d=i.groups[c[l].groupId];var m=void 0!=d.options.barChart.minWidth?d.options.barChart.minWidth:.1*d.options.barChart.width;a=c[l].screen_x;var v=0;if(void 0===p[a])l+1<c.length&&(r=Math.abs(c[l+1].screen_x-a)),h=o._getSafeDrawData(r,d,m);else{var g=l+(p[a].amount-p[a].resolved);p[a].resolved;g<c.length&&(r=Math.abs(c[g].screen_x-a)),h=o._getSafeDrawData(r,d,m),p[a].resolved+=1,d.options.stack===!0&&d.options.excludeFromStacking!==!0?c[l].screen_y<d.zeroPosition?(v=p[a].accumulatedNegative,p[a].accumulatedNegative+=d.zeroPosition-c[l].screen_y):(v=p[a].accumulatedPositive,p[a].accumulatedPositive+=d.zeroPosition-c[l].screen_y):d.options.barChart.sideBySide===!0&&(h.width=h.width/p[a].amount,h.offset+=p[a].resolved*h.width-.5*h.width*(p[a].amount+1))}var y=h.width,b=c[l].screen_x;if(void 0!=c[l].screen_end?(y=c[l].screen_end-c[l].screen_x,b+=.5*y):b+=h.offset,n.drawBar(b,c[l].screen_y-v,y,d.zeroPosition-c[l].screen_y,d.className+" vis-bar",i.svgElements,i.svg,d.style),d.options.drawPoints.enabled===!0){var _={screen_x:c[l].screen_x,screen_y:c[l].screen_y-v,x:c[l].x,y:c[l].y,groupId:c[l].groupId,label:c[l].label};s.draw([_],d,i,h.offset)}}},o._getDataIntersections=function(t,e){for(var i,o=0;o<e.length;o++)o+1<e.length&&(i=Math.abs(e[o+1].screen_x-e[o].screen_x)),o>0&&(i=Math.min(i,Math.abs(e[o-1].screen_x-e[o].screen_x))),0===i&&(void 0===t[e[o].screen_x]&&(t[e[o].screen_x]={amount:0,resolved:0,accumulatedPositive:0,accumulatedNegative:0}),t[e[o].screen_x].amount+=1)},o._getSafeDrawData=function(t,e,i){var o,n;return t<e.options.barChart.width&&t>0?(o=t<i?i:t,n=0,"left"===e.options.barChart.align?n-=.5*t:"right"===e.options.barChart.align&&(n+=.5*t)):(o=e.options.barChart.width,n=0,"left"===e.options.barChart.align?n-=.5*e.options.barChart.width:"right"===e.options.barChart.align&&(n+=.5*e.options.barChart.width)),{width:o,offset:n}},o.getStackedYRange=function(t,e,i,n,s){if(t.length>0){t.sort(function(t,e){return t.screen_x===e.screen_x?t.groupId<e.groupId?-1:1:t.screen_x-e.screen_x});var r={};o._getDataIntersections(r,t),e[n]=o._getStackedYRange(r,t),e[n].yAxisOrientation=s,i.push(n)}},o._getStackedYRange=function(t,e){for(var i,o=e[0].screen_y,n=e[0].screen_y,s=0;s<e.length;s++)i=e[s].screen_x,void 0===t[i]?(o=o>e[s].screen_y?e[s].screen_y:o,n=n<e[s].screen_y?e[s].screen_y:n):e[s].screen_y<0?t[i].accumulatedNegative+=e[s].screen_y:t[i].accumulatedPositive+=e[s].screen_y;for(var r in t)t.hasOwnProperty(r)&&(o=o>t[r].accumulatedNegative?t[r].accumulatedNegative:o,o=o>t[r].accumulatedPositive?t[r].accumulatedPositive:o,n=n<t[r].accumulatedNegative?t[r].accumulatedNegative:n,n=n<t[r].accumulatedPositive?t[r].accumulatedPositive:n);return{min:o,max:n}},t.exports=o},function(t,e,i){function o(t,e){}function n(t,e){return e=void 0===e?{}:e,{style:e.style||t.options.drawPoints.style,styles:e.styles||t.options.drawPoints.styles,size:e.size||t.options.drawPoints.size,className:e.className||t.className}}function s(t,e){var i=void 0;return t.options&&t.options.drawPoints&&t.options.drawPoints.onRender&&"function"==typeof t.options.drawPoints.onRender&&(i=t.options.drawPoints.onRender),e.group.options&&e.group.options.drawPoints&&e.group.options.drawPoints.onRender&&"function"==typeof e.group.options.drawPoints.onRender&&(i=e.group.options.drawPoints.onRender),i}var r=i(62),a=function(t){return t&&t.__esModule?t:{default:t}}(r),h=i(88);o.draw=function(t,e,i,o){o=o||0;for(var r=s(i,e),d=0;d<t.length;d++)if(r){var l=r(t[d],e);l!==!0&&"object"!==(void 0===l?"undefined":(0,a.default)(l))||h.drawPoint(t[d].screen_x+o,t[d].screen_y,n(e,l),i.svgElements,i.svg,t[d].label)}else h.drawPoint(t[d].screen_x+o,t[d].screen_y,n(e),i.svgElements,i.svg,t[d].label)},o.drawIcon=function(t,e,i,o,s,r){var a=.5*s,d=h.getSVGElement("rect",r.svgElements,r.svg);d.setAttributeNS(null,"x",e),d.setAttributeNS(null,"y",i-a),d.setAttributeNS(null,"width",o),d.setAttributeNS(null,"height",2*a),d.setAttributeNS(null,"class","vis-outline"),h.drawPoint(e+.5*o,i,n(t),r.svgElements,r.svg)},t.exports=o},function(t,e,i){function o(t,e){}var n=i(88);o.calcPath=function(t,e){if(null!=t&&t.length>0){return 1==e.options.interpolation.enabled?o._catmullRom(t,e):o._linear(t)}},o.drawIcon=function(t,e,i,o,s,r){var a,h,d=.5*s,l=n.getSVGElement("rect",r.svgElements,r.svg);if(l.setAttributeNS(null,"x",e),l.setAttributeNS(null,"y",i-d),l.setAttributeNS(null,"width",o),l.setAttributeNS(null,"height",2*d),l.setAttributeNS(null,"class","vis-outline"),a=n.getSVGElement("path",r.svgElements,r.svg),a.setAttributeNS(null,"class",t.className),void 0!==t.style&&a.setAttributeNS(null,"style",t.style),a.setAttributeNS(null,"d","M"+e+","+i+" L"+(e+o)+","+i),1==t.options.shaded.enabled&&(h=n.getSVGElement("path",r.svgElements,r.svg),"top"==t.options.shaded.orientation?h.setAttributeNS(null,"d","M"+e+", "+(i-d)+"L"+e+","+i+" L"+(e+o)+","+i+" L"+(e+o)+","+(i-d)):h.setAttributeNS(null,"d","M"+e+","+i+" L"+e+","+(i+d)+" L"+(e+o)+","+(i+d)+"L"+(e+o)+","+i),h.setAttributeNS(null,"class",t.className+" vis-icon-fill"),void 0!==t.options.shaded.style&&""!==t.options.shaded.style&&h.setAttributeNS(null,"style",t.options.shaded.style)),1==t.options.drawPoints.enabled){var u={style:t.options.drawPoints.style,styles:t.options.drawPoints.styles,size:t.options.drawPoints.size,className:t.className};n.drawPoint(e+.5*o,i,u,r.svgElements,r.svg)}},o.drawShading=function(t,e,i,o){if(1==e.options.shaded.enabled){var s=Number(o.svg.style.height.replace("px","")),r=n.getSVGElement("path",o.svgElements,o.svg),a="L";1==e.options.interpolation.enabled&&(a="C");var h,d=0;d="top"==e.options.shaded.orientation?0:"bottom"==e.options.shaded.orientation?s:Math.min(Math.max(0,e.zeroPosition),s),h="group"==e.options.shaded.orientation&&null!=i&&void 0!=i?"M"+t[0][0]+","+t[0][1]+" "+this.serializePath(t,a,!1)+" L"+i[i.length-1][0]+","+i[i.length-1][1]+" "+this.serializePath(i,a,!0)+i[0][0]+","+i[0][1]+" Z":"M"+t[0][0]+","+t[0][1]+" "+this.serializePath(t,a,!1)+" V"+d+" H"+t[0][0]+" Z",r.setAttributeNS(null,"class",e.className+" vis-fill"),void 0!==e.options.shaded.style&&r.setAttributeNS(null,"style",e.options.shaded.style),r.setAttributeNS(null,"d",h)}},o.draw=function(t,e,i){if(null!=t&&void 0!=t){var o=n.getSVGElement("path",i.svgElements,i.svg);o.setAttributeNS(null,"class",e.className),void 0!==e.style&&o.setAttributeNS(null,"style",e.style);var s="L";1==e.options.interpolation.enabled&&(s="C"),o.setAttributeNS(null,"d","M"+t[0][0]+","+t[0][1]+" "+this.serializePath(t,s,!1))}},o.serializePath=function(t,e,i){if(t.length<2)return"";var o=e;if(i)for(var n=t.length-2;n>0;n--)o+=t[n][0]+","+t[n][1]+" ";else for(var n=1;n<t.length;n++)o+=t[n][0]+","+t[n][1]+" ";return o},o._catmullRomUniform=function(t){var e,i,o,n,s,r,a=[];a.push([Math.round(t[0].screen_x),Math.round(t[0].screen_y)]);for(var h=t.length,d=0;d<h-1;d++)e=0==d?t[0]:t[d-1],i=t[d],o=t[d+1],n=d+2<h?t[d+2]:o,s={screen_x:(-e.screen_x+6*i.screen_x+o.screen_x)*(1/6),
screen_y:(-e.screen_y+6*i.screen_y+o.screen_y)*(1/6)},r={screen_x:(i.screen_x+6*o.screen_x-n.screen_x)*(1/6),screen_y:(i.screen_y+6*o.screen_y-n.screen_y)*(1/6)},a.push([s.screen_x,s.screen_y]),a.push([r.screen_x,r.screen_y]),a.push([o.screen_x,o.screen_y]);return a},o._catmullRom=function(t,e){var i=e.options.interpolation.alpha;if(0==i||void 0===i)return this._catmullRomUniform(t);var o,n,s,r,a,h,d,l,u,c,p,f,m,v,g,y,b,_,w,x=[];x.push([Math.round(t[0].screen_x),Math.round(t[0].screen_y)]);for(var k=t.length,O=0;O<k-1;O++)o=0==O?t[0]:t[O-1],n=t[O],s=t[O+1],r=O+2<k?t[O+2]:s,d=Math.sqrt(Math.pow(o.screen_x-n.screen_x,2)+Math.pow(o.screen_y-n.screen_y,2)),l=Math.sqrt(Math.pow(n.screen_x-s.screen_x,2)+Math.pow(n.screen_y-s.screen_y,2)),u=Math.sqrt(Math.pow(s.screen_x-r.screen_x,2)+Math.pow(s.screen_y-r.screen_y,2)),v=Math.pow(u,i),y=Math.pow(u,2*i),g=Math.pow(l,i),b=Math.pow(l,2*i),w=Math.pow(d,i),_=Math.pow(d,2*i),c=2*_+3*w*g+b,p=2*y+3*v*g+b,f=3*w*(w+g),f>0&&(f=1/f),m=3*v*(v+g),m>0&&(m=1/m),a={screen_x:(-b*o.screen_x+c*n.screen_x+_*s.screen_x)*f,screen_y:(-b*o.screen_y+c*n.screen_y+_*s.screen_y)*f},h={screen_x:(y*n.screen_x+p*s.screen_x-b*r.screen_x)*m,screen_y:(y*n.screen_y+p*s.screen_y-b*r.screen_y)*m},0==a.screen_x&&0==a.screen_y&&(a=n),0==h.screen_x&&0==h.screen_y&&(h=s),x.push([a.screen_x,a.screen_y]),x.push([h.screen_x,h.screen_y]),x.push([s.screen_x,s.screen_y]);return x},o._linear=function(t){for(var e=[],i=0;i<t.length;i++)e.push([t[i].screen_x,t[i].screen_y]);return e},t.exports=o},function(t,e,i){function o(t,e,i,o){this.body=t,this.defaultOptions={enabled:!1,icons:!0,iconSize:20,iconSpacing:6,left:{visible:!0,position:"top-left"},right:{visible:!0,position:"top-right"}},this.side=i,this.options=r.extend({},this.defaultOptions),this.linegraphOptions=o,this.svgElements={},this.dom={},this.groups={},this.amountOfGroups=0,this._create(),this.framework={svg:this.svg,svgElements:this.svgElements,options:this.options,groups:this.groups},this.setOptions(e)}var n=i(58),s=function(t){return t&&t.__esModule?t:{default:t}}(n),r=i(1),a=i(88),h=i(128);o.prototype=new h,o.prototype.clear=function(){this.groups={},this.amountOfGroups=0},o.prototype.addGroup=function(t,e){1!=e.options.excludeFromLegend&&(this.groups.hasOwnProperty(t)||(this.groups[t]=e),this.amountOfGroups+=1)},o.prototype.updateGroup=function(t,e){this.groups[t]=e},o.prototype.removeGroup=function(t){this.groups.hasOwnProperty(t)&&(delete this.groups[t],this.amountOfGroups-=1)},o.prototype._create=function(){this.dom.frame=document.createElement("div"),this.dom.frame.className="vis-legend",this.dom.frame.style.position="absolute",this.dom.frame.style.top="10px",this.dom.frame.style.display="block",this.dom.textArea=document.createElement("div"),this.dom.textArea.className="vis-legend-text",this.dom.textArea.style.position="relative",this.dom.textArea.style.top="0px",this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.style.position="absolute",this.svg.style.top="0px",this.svg.style.width=this.options.iconSize+5+"px",this.svg.style.height="100%",this.dom.frame.appendChild(this.svg),this.dom.frame.appendChild(this.dom.textArea)},o.prototype.hide=function(){this.dom.frame.parentNode&&this.dom.frame.parentNode.removeChild(this.dom.frame)},o.prototype.show=function(){this.dom.frame.parentNode||this.body.dom.center.appendChild(this.dom.frame)},o.prototype.setOptions=function(t){var e=["enabled","orientation","icons","left","right"];r.selectiveDeepExtend(e,this.options,t)},o.prototype.redraw=function(){var t=0,e=(0,s.default)(this.groups);e.sort(function(t,e){return t<e?-1:1});for(var i=0;i<e.length;i++){var o=e[i];1!=this.groups[o].visible||void 0!==this.linegraphOptions.visibility[o]&&1!=this.linegraphOptions.visibility[o]||t++}if(0==this.options[this.side].visible||0==this.amountOfGroups||0==this.options.enabled||0==t)this.hide();else{if(this.show(),"top-left"==this.options[this.side].position||"bottom-left"==this.options[this.side].position?(this.dom.frame.style.left="4px",this.dom.frame.style.textAlign="left",this.dom.textArea.style.textAlign="left",this.dom.textArea.style.left=this.options.iconSize+15+"px",this.dom.textArea.style.right="",this.svg.style.left="0px",this.svg.style.right=""):(this.dom.frame.style.right="4px",this.dom.frame.style.textAlign="right",this.dom.textArea.style.textAlign="right",this.dom.textArea.style.right=this.options.iconSize+15+"px",this.dom.textArea.style.left="",this.svg.style.right="0px",this.svg.style.left=""),"top-left"==this.options[this.side].position||"top-right"==this.options[this.side].position)this.dom.frame.style.top=4-Number(this.body.dom.center.style.top.replace("px",""))+"px",this.dom.frame.style.bottom="";else{var n=this.body.domProps.center.height-this.body.domProps.centerContainer.height;this.dom.frame.style.bottom=4+n+Number(this.body.dom.center.style.top.replace("px",""))+"px",this.dom.frame.style.top=""}0==this.options.icons?(this.dom.frame.style.width=this.dom.textArea.offsetWidth+10+"px",this.dom.textArea.style.right="",this.dom.textArea.style.left="",this.svg.style.width="0px"):(this.dom.frame.style.width=this.options.iconSize+15+this.dom.textArea.offsetWidth+10+"px",this.drawLegendIcons());for(var r="",i=0;i<e.length;i++){var o=e[i];1!=this.groups[o].visible||void 0!==this.linegraphOptions.visibility[o]&&1!=this.linegraphOptions.visibility[o]||(r+=this.groups[o].content+"<br />")}this.dom.textArea.innerHTML=r,this.dom.textArea.style.lineHeight=.75*this.options.iconSize+this.options.iconSpacing+"px"}},o.prototype.drawLegendIcons=function(){if(this.dom.frame.parentNode){var t=(0,s.default)(this.groups);t.sort(function(t,e){return t<e?-1:1}),a.resetElements(this.svgElements);var e=window.getComputedStyle(this.dom.frame).paddingTop,i=Number(e.replace("px","")),o=i,n=this.options.iconSize,r=.75*this.options.iconSize,h=i+.5*r+3;this.svg.style.width=n+5+i+"px";for(var d=0;d<t.length;d++){var l=t[d];1!=this.groups[l].visible||void 0!==this.linegraphOptions.visibility[l]&&1!=this.linegraphOptions.visibility[l]||(this.groups[l].getLegend(n,r,this.framework,o,h),h+=r+this.options.iconSpacing)}}},t.exports=o},function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var i="string",o="boolean",n="number",s="object",r={configure:{enabled:{boolean:o},filter:{boolean:o,function:"function"},container:{dom:"dom"},__type__:{object:s,boolean:o,function:"function"}},yAxisOrientation:{string:["left","right"]},defaultGroup:{string:i},sort:{boolean:o},sampling:{boolean:o},stack:{boolean:o},graphHeight:{string:i,number:n},shaded:{enabled:{boolean:o},orientation:{string:["bottom","top","zero","group"]},groupId:{object:s},__type__:{boolean:o,object:s}},style:{string:["line","bar","points"]},barChart:{width:{number:n},minWidth:{number:n},sideBySide:{boolean:o},align:{string:["left","center","right"]},__type__:{object:s}},interpolation:{enabled:{boolean:o},parametrization:{string:["centripetal","chordal","uniform"]},alpha:{number:n},__type__:{object:s,boolean:o}},drawPoints:{enabled:{boolean:o},onRender:{function:"function"},size:{number:n},style:{string:["square","circle"]},__type__:{object:s,boolean:o,function:"function"}},dataAxis:{showMinorLabels:{boolean:o},showMajorLabels:{boolean:o},icons:{boolean:o},width:{string:i,number:n},visible:{boolean:o},alignZeros:{boolean:o},left:{range:{min:{number:n,undefined:"undefined"},max:{number:n,undefined:"undefined"},__type__:{object:s}},format:{function:"function"},title:{text:{string:i,number:n,undefined:"undefined"},style:{string:i,undefined:"undefined"},__type__:{object:s}},__type__:{object:s}},right:{range:{min:{number:n,undefined:"undefined"},max:{number:n,undefined:"undefined"},__type__:{object:s}},format:{function:"function"},title:{text:{string:i,number:n,undefined:"undefined"},style:{string:i,undefined:"undefined"},__type__:{object:s}},__type__:{object:s}},__type__:{object:s}},legend:{enabled:{boolean:o},icons:{boolean:o},left:{visible:{boolean:o},position:{string:["top-right","bottom-right","top-left","bottom-left"]},__type__:{object:s}},right:{visible:{boolean:o},position:{string:["top-right","bottom-right","top-left","bottom-left"]},__type__:{object:s}},__type__:{object:s,boolean:o}},groups:{visibility:{any:"any"},__type__:{object:s}},autoResize:{boolean:o},throttleRedraw:{number:n},clickToUse:{boolean:o},end:{number:n,date:"date",string:i,moment:"moment"},format:{minorLabels:{millisecond:{string:i,undefined:"undefined"},second:{string:i,undefined:"undefined"},minute:{string:i,undefined:"undefined"},hour:{string:i,undefined:"undefined"},weekday:{string:i,undefined:"undefined"},day:{string:i,undefined:"undefined"},month:{string:i,undefined:"undefined"},year:{string:i,undefined:"undefined"},__type__:{object:s}},majorLabels:{millisecond:{string:i,undefined:"undefined"},second:{string:i,undefined:"undefined"},minute:{string:i,undefined:"undefined"},hour:{string:i,undefined:"undefined"},weekday:{string:i,undefined:"undefined"},day:{string:i,undefined:"undefined"},month:{string:i,undefined:"undefined"},year:{string:i,undefined:"undefined"},__type__:{object:s}},__type__:{object:s}},moment:{function:"function"},height:{string:i,number:n},hiddenDates:{start:{date:"date",number:n,string:i,moment:"moment"},end:{date:"date",number:n,string:i,moment:"moment"},repeat:{string:i},__type__:{object:s,array:"array"}},locale:{string:i},locales:{__any__:{any:"any"},__type__:{object:s}},max:{date:"date",number:n,string:i,moment:"moment"},maxHeight:{number:n,string:i},maxMinorChars:{number:n},min:{date:"date",number:n,string:i,moment:"moment"},minHeight:{number:n,string:i},moveable:{boolean:o},multiselect:{boolean:o},orientation:{string:i},showCurrentTime:{boolean:o},showMajorLabels:{boolean:o},showMinorLabels:{boolean:o},start:{date:"date",number:n,string:i,moment:"moment"},timeAxis:{scale:{string:i,undefined:"undefined"},step:{number:n,undefined:"undefined"},__type__:{object:s}},width:{string:i,number:n},zoomable:{boolean:o},zoomKey:{string:["ctrlKey","altKey","metaKey",""]},zoomMax:{number:n},zoomMin:{number:n},zIndex:{number:n},__type__:{object:s}},a={global:{sort:!0,sampling:!0,stack:!1,shaded:{enabled:!1,orientation:["zero","top","bottom","group"]},style:["line","bar","points"],barChart:{width:[50,5,100,5],minWidth:[50,5,100,5],sideBySide:!1,align:["left","center","right"]},interpolation:{enabled:!0,parametrization:["centripetal","chordal","uniform"]},drawPoints:{enabled:!0,size:[6,2,30,1],style:["square","circle"]},dataAxis:{showMinorLabels:!0,showMajorLabels:!0,icons:!1,width:[40,0,200,1],visible:!0,alignZeros:!0,left:{title:{text:"",style:""}},right:{title:{text:"",style:""}}},legend:{enabled:!1,icons:!0,left:{visible:!0,position:["top-right","bottom-right","top-left","bottom-left"]},right:{visible:!0,position:["top-right","bottom-right","top-left","bottom-left"]}},autoResize:!0,clickToUse:!1,end:"",format:{minorLabels:{millisecond:"SSS",second:"s",minute:"HH:mm",hour:"HH:mm",weekday:"ddd D",day:"D",month:"MMM",year:"YYYY"},majorLabels:{millisecond:"HH:mm:ss",second:"D MMMM HH:mm",minute:"ddd D MMMM",hour:"ddd D MMMM",weekday:"MMMM YYYY",day:"MMMM YYYY",month:"YYYY",year:""}},height:"",locale:"",max:"",maxHeight:"",maxMinorChars:[7,0,20,1],min:"",minHeight:"",moveable:!0,orientation:["both","bottom","top"],showCurrentTime:!1,showMajorLabels:!0,showMinorLabels:!0,start:"",width:"100%",zoomable:!0,zoomKey:["ctrlKey","altKey","metaKey",""],zoomMax:[31536e10,10,31536e10,1],zoomMin:[10,10,31536e10,1],zIndex:0}};e.allOptions=r,e.configureOptions=a},function(t,e,i){e.util=i(1),e.DOMutil=i(88),e.DataSet=i(89),e.DataView=i(93),e.Queue=i(92),e.Network=i(159),e.network={Images:i(160),dotparser:i(228),gephiParser:i(229),allOptions:i(224)},e.network.convertDot=function(t){return e.network.dotparser.DOTToGraph(t)},e.network.convertGephi=function(t,i){return e.network.gephiParser.parseGephi(t,i)},e.moment=i(82),e.Hammer=i(112),e.keycharm=i(115)},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e,i){var o=this;if(!(this instanceof n))throw new SyntaxError("Constructor must be called with the new operator");this.options={},this.defaultOptions={locale:"en",locales:Y,clickToUse:!1},B.extend(this.options,this.defaultOptions),this.body={container:t,nodes:{},nodeIndices:[],edges:{},edgeIndices:[],emitter:{on:this.on.bind(this),off:this.off.bind(this),emit:this.emit.bind(this),once:this.once.bind(this)},eventListeners:{onTap:function(){},onTouch:function(){},onDoubleTap:function(){},onHold:function(){},onDragStart:function(){},onDrag:function(){},onDragEnd:function(){},onMouseWheel:function(){},onPinch:function(){},onMouseMove:function(){},onRelease:function(){},onContext:function(){}},data:{nodes:null,edges:null},functions:{createNode:function(){},createEdge:function(){},getPointer:function(){}},modules:{},view:{scale:1,translation:{x:0,y:0}}},this.bindEventListeners(),this.images=new r.default(function(){return o.body.emitter.emit("_requestRedraw")}),this.groups=new h.default,this.canvas=new _.default(this.body),this.selectionHandler=new M.default(this.body,this.canvas),this.interactionHandler=new O.default(this.body,this.canvas,this.selectionHandler),this.view=new x.default(this.body,this.canvas),this.renderer=new y.default(this.body,this.canvas),this.physics=new f.default(this.body),this.layoutEngine=new C.default(this.body),this.clustering=new v.default(this.body),this.manipulation=new E.default(this.body,this.canvas,this.selectionHandler),this.nodesHandler=new l.default(this.body,this.images,this.groups,this.layoutEngine),this.edgesHandler=new c.default(this.body,this.images,this.groups),this.body.modules.kamadaKawai=new L.default(this.body,150,.05),this.body.modules.clustering=this.clustering,this.canvas._create(),this.setOptions(i),this.setData(e)}var s=i(160),r=o(s),a=i(161),h=o(a),d=i(162),l=o(d),u=i(195),c=o(u),p=i(204),f=o(p),m=i(213),v=o(m),g=i(216),y=o(g),b=i(217),_=o(b),w=i(218),x=o(w),k=i(219),O=o(k),S=i(221),M=o(S),D=i(222),C=o(D),T=i(223),E=o(T),P=i(118),I=o(P),N=i(126),R=o(N),z=i(224),A=i(225),L=o(A);i(227);var F=i(99),B=i(1),j=(i(89),i(93),i(228)),H=i(229),W=i(143),Y=i(230);F(n.prototype),n.prototype.setOptions=function(t){var e=this;if(void 0!==t){R.default.validate(t,z.allOptions)===!0&&console.log("%cErrors have been found in the supplied options object.",N.printStyle);var i=["locale","locales","clickToUse"];if(B.selectiveDeepExtend(i,this.options,t),t=this.layoutEngine.setOptions(t.layout,t),this.canvas.setOptions(t),this.groups.setOptions(t.groups),this.nodesHandler.setOptions(t.nodes),this.edgesHandler.setOptions(t.edges),this.physics.setOptions(t.physics),this.manipulation.setOptions(t.manipulation,t,this.options),this.interactionHandler.setOptions(t.interaction),this.renderer.setOptions(t.interaction),this.selectionHandler.setOptions(t.interaction),void 0!==t.groups&&this.body.emitter.emit("refreshNodes"),"configure"in t&&(this.configurator||(this.configurator=new I.default(this,this.body.container,z.configureOptions,this.canvas.pixelRatio)),this.configurator.setOptions(t.configure)),this.configurator&&this.configurator.options.enabled===!0){var o={nodes:{},edges:{},layout:{},interaction:{},manipulation:{},physics:{},global:{}};B.deepExtend(o.nodes,this.nodesHandler.options),B.deepExtend(o.edges,this.edgesHandler.options),B.deepExtend(o.layout,this.layoutEngine.options),B.deepExtend(o.interaction,this.selectionHandler.options),B.deepExtend(o.interaction,this.renderer.options),B.deepExtend(o.interaction,this.interactionHandler.options),B.deepExtend(o.manipulation,this.manipulation.options),B.deepExtend(o.physics,this.physics.options),B.deepExtend(o.global,this.canvas.options),B.deepExtend(o.global,this.options),this.configurator.setModuleOptions(o)}void 0!==t.clickToUse?t.clickToUse===!0?void 0===this.activator&&(this.activator=new W(this.canvas.frame),this.activator.on("change",function(){e.body.emitter.emit("activate")})):(void 0!==this.activator&&(this.activator.destroy(),delete this.activator),this.body.emitter.emit("activate")):this.body.emitter.emit("activate"),this.canvas.setSize(),this.body.emitter.emit("startSimulation")}},n.prototype._updateVisibleIndices=function(){var t=this.body.nodes,e=this.body.edges;this.body.nodeIndices=[],this.body.edgeIndices=[];for(var i in t)t.hasOwnProperty(i)&&t[i].options.hidden===!1&&this.body.nodeIndices.push(t[i].id);for(var o in e)e.hasOwnProperty(o)&&e[o].options.hidden===!1&&this.body.edgeIndices.push(e[o].id)},n.prototype.bindEventListeners=function(){var t=this;this.body.emitter.on("_dataChanged",function(){t._updateVisibleIndices(),t.body.emitter.emit("_requestRedraw"),t.body.emitter.emit("_dataUpdated")}),this.body.emitter.on("_dataUpdated",function(){t._updateValueRange(t.body.nodes),t._updateValueRange(t.body.edges),t.body.emitter.emit("startSimulation"),t.body.emitter.emit("_requestRedraw")})},n.prototype.setData=function(t){if(this.body.emitter.emit("resetPhysics"),this.body.emitter.emit("_resetData"),this.selectionHandler.unselectAll(),t&&t.dot&&(t.nodes||t.edges))throw new SyntaxError('Data must contain either parameter "dot" or  parameter pair "nodes" and "edges", but not both.');if(this.setOptions(t&&t.options),t&&t.dot){console.log("The dot property has been deprecated. Please use the static convertDot method to convert DOT into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertDot(dotString);");var e=j.DOTToGraph(t.dot);return void this.setData(e)}if(t&&t.gephi){console.log("The gephi property has been deprecated. Please use the static convertGephi method to convert gephi into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertGephi(gephiJson);");var i=H.parseGephi(t.gephi);return void this.setData(i)}this.nodesHandler.setData(t&&t.nodes,!0),this.edgesHandler.setData(t&&t.edges,!0),this.body.emitter.emit("_dataChanged"),this.body.emitter.emit("_dataLoaded"),this.body.emitter.emit("initPhysics")},n.prototype.destroy=function(){this.body.emitter.emit("destroy"),this.body.emitter.off(),this.off(),delete this.groups,delete this.canvas,delete this.selectionHandler,delete this.interactionHandler,delete this.view,delete this.renderer,delete this.physics,delete this.layoutEngine,delete this.clustering,delete this.manipulation,delete this.nodesHandler,delete this.edgesHandler,delete this.configurator,delete this.images;for(var t in this.body.nodes)delete this.body.nodes[t];for(var e in this.body.edges)delete this.body.edges[e];B.recursiveDOMDelete(this.body.container)},n.prototype._updateValueRange=function(t){var e,i=void 0,o=void 0,n=0;for(e in t)if(t.hasOwnProperty(e)){var s=t[e].getValue();void 0!==s&&(i=void 0===i?s:Math.min(s,i),o=void 0===o?s:Math.max(s,o),n+=s)}if(void 0!==i&&void 0!==o)for(e in t)t.hasOwnProperty(e)&&t[e].setValueRange(i,o,n)},n.prototype.isActive=function(){return!this.activator||this.activator.active},n.prototype.setSize=function(){return this.canvas.setSize.apply(this.canvas,arguments)},n.prototype.canvasToDOM=function(){return this.canvas.canvasToDOM.apply(this.canvas,arguments)},n.prototype.DOMtoCanvas=function(){return this.canvas.DOMtoCanvas.apply(this.canvas,arguments)},n.prototype.findNode=function(){return this.clustering.findNode.apply(this.clustering,arguments)},n.prototype.isCluster=function(){return this.clustering.isCluster.apply(this.clustering,arguments)},n.prototype.openCluster=function(){return this.clustering.openCluster.apply(this.clustering,arguments)},n.prototype.cluster=function(){return this.clustering.cluster.apply(this.clustering,arguments)},n.prototype.getNodesInCluster=function(){return this.clustering.getNodesInCluster.apply(this.clustering,arguments)},n.prototype.clusterByConnection=function(){return this.clustering.clusterByConnection.apply(this.clustering,arguments)},n.prototype.clusterByHubsize=function(){return this.clustering.clusterByHubsize.apply(this.clustering,arguments)},n.prototype.clusterOutliers=function(){return this.clustering.clusterOutliers.apply(this.clustering,arguments)},n.prototype.getSeed=function(){return this.layoutEngine.getSeed.apply(this.layoutEngine,arguments)},n.prototype.enableEditMode=function(){return this.manipulation.enableEditMode.apply(this.manipulation,arguments)},n.prototype.disableEditMode=function(){return this.manipulation.disableEditMode.apply(this.manipulation,arguments)},n.prototype.addNodeMode=function(){return this.manipulation.addNodeMode.apply(this.manipulation,arguments)},n.prototype.editNode=function(){return this.manipulation.editNode.apply(this.manipulation,arguments)},n.prototype.editNodeMode=function(){return console.log("Deprecated: Please use editNode instead of editNodeMode."),this.manipulation.editNode.apply(this.manipulation,arguments)},n.prototype.addEdgeMode=function(){return this.manipulation.addEdgeMode.apply(this.manipulation,arguments)},n.prototype.editEdgeMode=function(){return this.manipulation.editEdgeMode.apply(this.manipulation,arguments)},n.prototype.deleteSelected=function(){return this.manipulation.deleteSelected.apply(this.manipulation,arguments)},n.prototype.getPositions=function(){return this.nodesHandler.getPositions.apply(this.nodesHandler,arguments)},n.prototype.storePositions=function(){return this.nodesHandler.storePositions.apply(this.nodesHandler,arguments)},n.prototype.moveNode=function(){return this.nodesHandler.moveNode.apply(this.nodesHandler,arguments)},n.prototype.getBoundingBox=function(){return this.nodesHandler.getBoundingBox.apply(this.nodesHandler,arguments)},n.prototype.getConnectedNodes=function(t){return void 0!==this.body.nodes[t]?this.nodesHandler.getConnectedNodes.apply(this.nodesHandler,arguments):this.edgesHandler.getConnectedNodes.apply(this.edgesHandler,arguments)},n.prototype.getConnectedEdges=function(){return this.nodesHandler.getConnectedEdges.apply(this.nodesHandler,arguments)},n.prototype.startSimulation=function(){return this.physics.startSimulation.apply(this.physics,arguments)},n.prototype.stopSimulation=function(){return this.physics.stopSimulation.apply(this.physics,arguments)},n.prototype.stabilize=function(){return this.physics.stabilize.apply(this.physics,arguments)},n.prototype.getSelection=function(){return this.selectionHandler.getSelection.apply(this.selectionHandler,arguments)},n.prototype.setSelection=function(){return this.selectionHandler.setSelection.apply(this.selectionHandler,arguments)},n.prototype.getSelectedNodes=function(){return this.selectionHandler.getSelectedNodes.apply(this.selectionHandler,arguments)},n.prototype.getSelectedEdges=function(){return this.selectionHandler.getSelectedEdges.apply(this.selectionHandler,arguments)},n.prototype.getNodeAt=function(){var t=this.selectionHandler.getNodeAt.apply(this.selectionHandler,arguments);return void 0!==t&&void 0!==t.id?t.id:t},n.prototype.getEdgeAt=function(){var t=this.selectionHandler.getEdgeAt.apply(this.selectionHandler,arguments);return void 0!==t&&void 0!==t.id?t.id:t},n.prototype.selectNodes=function(){return this.selectionHandler.selectNodes.apply(this.selectionHandler,arguments)},n.prototype.selectEdges=function(){return this.selectionHandler.selectEdges.apply(this.selectionHandler,arguments)},n.prototype.unselectAll=function(){this.selectionHandler.unselectAll.apply(this.selectionHandler,arguments),this.redraw()},n.prototype.redraw=function(){return this.renderer.redraw.apply(this.renderer,arguments)},n.prototype.getScale=function(){return this.view.getScale.apply(this.view,arguments)},n.prototype.getViewPosition=function(){return this.view.getViewPosition.apply(this.view,arguments)},n.prototype.fit=function(){return this.view.fit.apply(this.view,arguments)},n.prototype.moveTo=function(){return this.view.moveTo.apply(this.view,arguments)},n.prototype.focus=function(){return this.view.focus.apply(this.view,arguments)},n.prototype.releaseNode=function(){return this.view.releaseNode.apply(this.view,arguments)},n.prototype.getOptionsFromConfigurator=function(){var t={};return this.configurator&&(t=this.configurator.getOptions.apply(this.configurator)),t},t.exports=n},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(119),s=o(n),r=i(120),a=o(r),h=function(){function t(e){(0,s.default)(this,t),this.images={},this.imageBroken={},this.callback=e}return(0,a.default)(t,[{key:"_addImageToCache",value:function(t,e){0===e.width&&(document.body.appendChild(e),e.width=e.offsetWidth,e.height=e.offsetHeight,document.body.removeChild(e)),this.images[t]=e}},{key:"_tryloadBrokenUrl",value:function(t,e,i){var o=this;void 0!==t&&void 0!==e&&void 0!==i&&(i.onerror=function(){console.error("Could not load brokenImage:",e),o._addImageToCache(t,new Image)},i.src=e)}},{key:"_redrawWithImage",value:function(t){this.callback&&this.callback(t)}},{key:"load",value:function(t,e,i){var o=this,n=this.images[t];if(n)return n;var s=new Image;return s.onload=function(){o._addImageToCache(t,s),o._redrawWithImage(s)},s.onerror=function(){console.error("Could not load image:",t),o._tryloadBrokenUrl(t,e,s)},s.src=t,s}}]),t}();e.default=h},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(119),s=o(n),r=i(120),a=o(r),h=i(1),d=function(){function t(){(0,s.default)(this,t),this.clear(),this.defaultIndex=0,this.groupsArray=[],this.groupIndex=0,this.defaultGroups=[{border:"#2B7CE9",background:"#97C2FC",highlight:{border:"#2B7CE9",background:"#D2E5FF"},hover:{border:"#2B7CE9",background:"#D2E5FF"}},{border:"#FFA500",background:"#FFFF00",highlight:{border:"#FFA500",background:"#FFFFA3"},hover:{border:"#FFA500",background:"#FFFFA3"}},{border:"#FA0A10",background:"#FB7E81",highlight:{border:"#FA0A10",background:"#FFAFB1"},hover:{border:"#FA0A10",background:"#FFAFB1"}},{border:"#41A906",background:"#7BE141",highlight:{border:"#41A906",background:"#A1EC76"},hover:{border:"#41A906",background:"#A1EC76"}},{border:"#E129F0",background:"#EB7DF4",highlight:{border:"#E129F0",background:"#F0B3F5"},hover:{border:"#E129F0",background:"#F0B3F5"}},{border:"#7C29F0",background:"#AD85E4",highlight:{border:"#7C29F0",background:"#D3BDF0"},hover:{border:"#7C29F0",background:"#D3BDF0"}},{border:"#C37F00",background:"#FFA807",highlight:{border:"#C37F00",background:"#FFCA66"},hover:{border:"#C37F00",background:"#FFCA66"}},{border:"#4220FB",background:"#6E6EFD",highlight:{border:"#4220FB",background:"#9B9BFD"},hover:{border:"#4220FB",background:"#9B9BFD"}},{border:"#FD5A77",background:"#FFC0CB",highlight:{border:"#FD5A77",background:"#FFD1D9"},hover:{border:"#FD5A77",background:"#FFD1D9"}},{border:"#4AD63A",background:"#C2FABC",highlight:{border:"#4AD63A",background:"#E6FFE3"},hover:{border:"#4AD63A",background:"#E6FFE3"}},{border:"#990000",background:"#EE0000",highlight:{border:"#BB0000",background:"#FF3333"},hover:{border:"#BB0000",background:"#FF3333"}},{border:"#FF6000",background:"#FF6000",highlight:{border:"#FF6000",background:"#FF6000"},hover:{border:"#FF6000",background:"#FF6000"}},{border:"#97C2FC",background:"#2B7CE9",highlight:{border:"#D2E5FF",background:"#2B7CE9"},hover:{border:"#D2E5FF",background:"#2B7CE9"}},{border:"#399605",background:"#255C03",highlight:{border:"#399605",background:"#255C03"},hover:{border:"#399605",background:"#255C03"}},{border:"#B70054",background:"#FF007E",highlight:{border:"#B70054",background:"#FF007E"},hover:{border:"#B70054",background:"#FF007E"}},{border:"#AD85E4",background:"#7C29F0",highlight:{border:"#D3BDF0",background:"#7C29F0"},hover:{border:"#D3BDF0",background:"#7C29F0"}},{border:"#4557FA",background:"#000EA1",highlight:{border:"#6E6EFD",background:"#000EA1"},hover:{border:"#6E6EFD",background:"#000EA1"}},{border:"#FFC0CB",background:"#FD5A77",highlight:{border:"#FFD1D9",background:"#FD5A77"},hover:{border:"#FFD1D9",background:"#FD5A77"}},{border:"#C2FABC",background:"#74D66A",highlight:{border:"#E6FFE3",background:"#74D66A"},hover:{border:"#E6FFE3",background:"#74D66A"}},{border:"#EE0000",background:"#990000",highlight:{border:"#FF3333",background:"#BB0000"},hover:{border:"#FF3333",background:"#BB0000"}}],this.options={},this.defaultOptions={useDefaultGroups:!0},h.extend(this.options,this.defaultOptions)}return(0,a.default)(t,[{key:"setOptions",value:function(t){var e=["useDefaultGroups"];if(void 0!==t)for(var i in t)if(t.hasOwnProperty(i)&&e.indexOf(i)===-1){var o=t[i];this.add(i,o)}}},{key:"clear",value:function(){this.groups={},this.groupsArray=[]}},{key:"get",value:function(t){var e=this.groups[t];if(void 0===e)if(this.options.useDefaultGroups===!1&&this.groupsArray.length>0){var i=this.groupIndex%this.groupsArray.length;this.groupIndex++,e={},e.color=this.groups[this.groupsArray[i]],this.groups[t]=e}else{var o=this.defaultIndex%this.defaultGroups.length;this.defaultIndex++,e={},e.color=this.defaultGroups[o],this.groups[t]=e}return e}},{key:"add",value:function(t,e){return this.groups[t]=e,this.groupsArray.push(t),e}}]),t}();e.default=d},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(119),s=o(n),r=i(120),a=o(r),h=i(163),d=o(h),l=i(164),u=o(l),c=i(1),p=i(89),f=i(93),m=function(){function t(e,i,o,n){var r=this;(0,s.default)(this,t),this.body=e,this.images=i,this.groups=o,this.layoutEngine=n,this.body.functions.createNode=this.create.bind(this),this.nodesListeners={add:function(t,e){r.add(e.items)},update:function(t,e){r.update(e.items,e.data)},remove:function(t,e){r.remove(e.items)}},this.options={},this.defaultOptions={borderWidth:1,borderWidthSelected:2,brokenImage:void 0,color:{border:"#2B7CE9",background:"#97C2FC",highlight:{border:"#2B7CE9",background:"#D2E5FF"},hover:{border:"#2B7CE9",background:"#D2E5FF"}},fixed:{x:!1,y:!1},font:{color:"#343434",size:14,face:"arial",background:"none",strokeWidth:0,strokeColor:"#ffffff",align:"center",vadjust:0,multi:!1,bold:{mod:"bold"},boldital:{mod:"bold italic"},ital:{mod:"italic"},mono:{mod:"",size:15,face:"courier new",vadjust:2}},group:void 0,hidden:!1,icon:{face:"FontAwesome",code:void 0,size:50,color:"#2B7CE9"},image:void 0,label:void 0,labelHighlightBold:!0,level:void 0,margin:{top:5,right:5,bottom:5,left:5},mass:1,physics:!0,scaling:{min:10,max:30,label:{enabled:!1,min:14,max:30,maxVisible:30,drawThreshold:5},customScalingFunction:function(t,e,i,o){if(e===t)return.5;var n=1/(e-t);return Math.max(0,(o-t)*n)}},shadow:{enabled:!1,color:"rgba(0,0,0,0.5)",size:10,x:5,y:5},shape:"ellipse",shapeProperties:{borderDashes:!1,borderRadius:6,interpolation:!0,useImageSize:!1,useBorderWithImage:!1},size:25,title:void 0,value:void 0,x:void 0,y:void 0},c.extend(this.options,this.defaultOptions),this.bindEventListeners()}return(0,a.default)(t,[{key:"bindEventListeners",value:function(){var t=this;this.body.emitter.on("refreshNodes",this.refresh.bind(this)),this.body.emitter.on("refresh",this.refresh.bind(this)),this.body.emitter.on("destroy",function(){c.forEach(t.nodesListeners,function(e,i){t.body.data.nodes&&t.body.data.nodes.off(i,e)}),delete t.body.functions.createNode,delete t.nodesListeners.add,delete t.nodesListeners.update,delete t.nodesListeners.remove,delete t.nodesListeners})}},{key:"setOptions",value:function(t){if(this.nodeOptions=t,void 0!==t){if(d.default.parseOptions(this.options,t),void 0!==t.shape)for(var e in this.body.nodes)this.body.nodes.hasOwnProperty(e)&&this.body.nodes[e].updateShape();if(void 0!==t.font){u.default.parseOptions(this.options.font,t);for(var i in this.body.nodes)this.body.nodes.hasOwnProperty(i)&&(this.body.nodes[i].updateLabelModule(),this.body.nodes[i]._reset())}if(void 0!==t.size)for(var o in this.body.nodes)this.body.nodes.hasOwnProperty(o)&&this.body.nodes[o]._reset();void 0===t.hidden&&void 0===t.physics||this.body.emitter.emit("_dataChanged")}}},{key:"setData",value:function(t){
var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.body.data.nodes;if(t instanceof p||t instanceof f)this.body.data.nodes=t;else if(Array.isArray(t))this.body.data.nodes=new p,this.body.data.nodes.add(t);else{if(t)throw new TypeError("Array or DataSet expected");this.body.data.nodes=new p}if(i&&c.forEach(this.nodesListeners,function(t,e){i.off(e,t)}),this.body.nodes={},this.body.data.nodes){var o=this;c.forEach(this.nodesListeners,function(t,e){o.body.data.nodes.on(e,t)});var n=this.body.data.nodes.getIds();this.add(n,!0)}e===!1&&this.body.emitter.emit("_dataChanged")}},{key:"add",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=void 0,o=[],n=0;n<t.length;n++){i=t[n];var s=this.body.data.nodes.get(i),r=this.create(s);o.push(r),this.body.nodes[i]=r}this.layoutEngine.positionInitially(o),e===!1&&this.body.emitter.emit("_dataChanged")}},{key:"update",value:function(t,e){for(var i=this.body.nodes,o=!1,n=0;n<t.length;n++){var s=t[n],r=i[s],a=e[n];void 0!==r?o=r.setOptions(a):(o=!0,r=this.create(a),i[s]=r)}o===!0?this.body.emitter.emit("_dataChanged"):this.body.emitter.emit("_dataUpdated")}},{key:"remove",value:function(t){for(var e=this.body.nodes,i=0;i<t.length;i++){delete e[t[i]]}this.body.emitter.emit("_dataChanged")}},{key:"create",value:function(t){return new(arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.default)(t,this.body,this.images,this.groups,this.options,this.defaultOptions,this.nodeOptions)}},{key:"refresh",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.body.nodes;for(var i in e){var o=void 0;e.hasOwnProperty(i)&&(o=e[i]);var n=this.body.data.nodes._data[i];void 0!==o&&void 0!==n&&(t===!0&&o.setOptions({x:null,y:null}),o.setOptions({fixed:!1}),o.setOptions(n))}}},{key:"getPositions",value:function(t){var e={};if(void 0!==t){if(Array.isArray(t)===!0){for(var i=0;i<t.length;i++)if(void 0!==this.body.nodes[t[i]]){var o=this.body.nodes[t[i]];e[t[i]]={x:Math.round(o.x),y:Math.round(o.y)}}}else if(void 0!==this.body.nodes[t]){var n=this.body.nodes[t];e[t]={x:Math.round(n.x),y:Math.round(n.y)}}}else for(var s=0;s<this.body.nodeIndices.length;s++){var r=this.body.nodes[this.body.nodeIndices[s]];e[this.body.nodeIndices[s]]={x:Math.round(r.x),y:Math.round(r.y)}}return e}},{key:"storePositions",value:function(){var t=[],e=this.body.data.nodes.getDataSet();for(var i in e._data)if(e._data.hasOwnProperty(i)){var o=this.body.nodes[i];e._data[i].x==Math.round(o.x)&&e._data[i].y==Math.round(o.y)||t.push({id:o.id,x:Math.round(o.x),y:Math.round(o.y)})}e.update(t)}},{key:"getBoundingBox",value:function(t){if(void 0!==this.body.nodes[t])return this.body.nodes[t].shape.boundingBox}},{key:"getConnectedNodes",value:function(t){var e=[];if(void 0!==this.body.nodes[t])for(var i=this.body.nodes[t],o={},n=0;n<i.edges.length;n++){var s=i.edges[n];s.toId==i.id?void 0===o[s.fromId]&&(e.push(s.fromId),o[s.fromId]=!0):s.fromId==i.id&&void 0===o[s.toId]&&(e.push(s.toId),o[s.toId]=!0)}return e}},{key:"getConnectedEdges",value:function(t){var e=[];if(void 0!==this.body.nodes[t])for(var i=this.body.nodes[t],o=0;o<i.edges.length;o++)e.push(i.edges[o].id);else console.log("NodeId provided for getConnectedEdges does not exist. Provided: ",t);return e}},{key:"moveNode",value:function(t,e,i){var o=this;void 0!==this.body.nodes[t]?(this.body.nodes[t].x=Number(e),this.body.nodes[t].y=Number(i),setTimeout(function(){o.body.emitter.emit("startSimulation")},0)):console.log("Node id supplied to moveNode does not exist. Provided: ",t)}}]),t}();e.default=m},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(62),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(164),u=o(l),c=i(169),p=o(c),f=i(180),m=o(f),v=i(182),g=o(v),y=i(183),b=o(y),_=i(184),w=o(_),x=i(186),k=o(x),O=i(187),S=o(O),M=i(188),D=o(M),C=i(189),T=o(C),E=i(190),P=o(E),I=i(191),N=o(I),R=i(192),z=o(R),A=i(193),L=o(A),F=i(194),B=o(F),j=i(126),H=(o(j),i(1)),W=function(){function t(e,i,o,n,s,r,h){(0,a.default)(this,t),this.options=H.bridgeObject(s),this.globalOptions=s,this.defaultOptions=r,this.nodeOptions=h,this.body=i,this.edges=[],this.id=void 0,this.imagelist=o,this.grouplist=n,this.x=void 0,this.y=void 0,this.baseSize=this.options.size,this.baseFontSize=this.options.font.size,this.predefinedPosition=!1,this.selected=!1,this.hover=!1,this.labelModule=new u.default(this.body,this.options,!1),this.setOptions(e)}return(0,d.default)(t,[{key:"attachEdge",value:function(t){this.edges.indexOf(t)===-1&&this.edges.push(t)}},{key:"detachEdge",value:function(t){var e=this.edges.indexOf(t);e!=-1&&this.edges.splice(e,1)}},{key:"setOptions",value:function(e){var i=this.options.shape;if(e){if(void 0!==e.id&&(this.id=e.id),void 0===this.id)throw"Node must have an id";if(void 0!==e.x&&(null===e.x?(this.x=void 0,this.predefinedPosition=!1):(this.x=parseInt(e.x),this.predefinedPosition=!0)),void 0!==e.y&&(null===e.y?(this.y=void 0,this.predefinedPosition=!1):(this.y=parseInt(e.y),this.predefinedPosition=!0)),void 0!==e.size&&(this.baseSize=e.size),void 0!==e.value&&(e.value=parseFloat(e.value)),"number"==typeof e.group||"string"==typeof e.group&&""!=e.group){var o=this.grouplist.get(e.group);H.deepExtend(this.options,o),this.options.color=H.parseColor(this.options.color)}if(t.parseOptions(this.options,e,!0,this.globalOptions),this.choosify(e),void 0!==this.options.image){if(!this.imagelist)throw"No imagelist provided";"string"==typeof this.options.image?this.imageObj=this.imagelist.load(this.options.image,this.options.brokenImage,this.id):(this.imageObj=this.imagelist.load(this.options.image.unselected,this.options.brokenImage,this.id),this.imageObjAlt=this.imagelist.load(this.options.image.selected,this.options.brokenImage,this.id))}return this.updateLabelModule(e),this.updateShape(i),this.labelModule.propagateFonts(this.nodeOptions,e,this.defaultOptions),void 0!==e.hidden||void 0!==e.physics}}},{key:"choosify",value:function(t){this.chooser=!0;var e=[t,this.options,this.defaultOptions],i=H.topMost(e,"chosen");if("boolean"==typeof i)this.chooser=i;else if("object"===(void 0===i?"undefined":(0,s.default)(i))){var o=H.topMost(e,["chosen","node"]);"boolean"!=typeof o&&"function"!=typeof o||(this.chooser=o)}}},{key:"getFormattingValues",value:function(){var t={color:this.options.color.background,borderWidth:this.options.borderWidth,borderColor:this.options.color.border,size:this.options.size,borderDashes:this.options.shapeProperties.borderDashes,borderRadius:this.options.shapeProperties.borderRadius,shadow:this.options.shadow.enabled,shadowColor:this.options.shadow.color,shadowSize:this.options.shadow.size,shadowX:this.options.shadow.x,shadowY:this.options.shadow.y};return this.selected||this.hover?this.chooser===!0?this.selected?(t.borderWidth*=2,t.color=this.options.color.highlight.background,t.borderColor=this.options.color.highlight.border,t.shadow=this.options.shadow.enabled):this.hover&&(t.color=this.options.color.hover.background,t.borderColor=this.options.color.hover.border,t.shadow=this.options.shadow.enabled):"function"==typeof this.chooser&&(this.chooser(t,this.options.id,this.selected,this.hover),t.shadow===!1&&(t.shadowColor===this.options.shadow.color&&t.shadowSize===this.options.shadow.size&&t.shadowX===this.options.shadow.x&&t.shadowY===this.options.shadow.y||(t.shadow=!0))):t.shadow=this.options.shadow.enabled,t}},{key:"updateLabelModule",value:function(t){void 0!==this.options.label&&null!==this.options.label||(this.options.label=""),this.labelModule.setOptions(this.options,!0),void 0!==this.labelModule.baseSize&&(this.baseFontSize=this.labelModule.baseSize),this.labelModule.constrain(this.nodeOptions,t,this.defaultOptions),this.labelModule.choosify(this.nodeOptions,t,this.defaultOptions)}},{key:"updateShape",value:function(t){if(t===this.options.shape&&this.shape)this.shape.setOptions(this.options,this.imageObj,this.imageObjAlt);else switch(this.options.shape){case"box":this.shape=new p.default(this.options,this.body,this.labelModule);break;case"circle":this.shape=new m.default(this.options,this.body,this.labelModule);break;case"circularImage":this.shape=new g.default(this.options,this.body,this.labelModule,this.imageObj,this.imageObjAlt);break;case"database":this.shape=new b.default(this.options,this.body,this.labelModule);break;case"diamond":this.shape=new w.default(this.options,this.body,this.labelModule);break;case"dot":this.shape=new k.default(this.options,this.body,this.labelModule);break;case"ellipse":this.shape=new S.default(this.options,this.body,this.labelModule);break;case"icon":this.shape=new D.default(this.options,this.body,this.labelModule);break;case"image":this.shape=new T.default(this.options,this.body,this.labelModule,this.imageObj,this.imageObjAlt);break;case"square":this.shape=new P.default(this.options,this.body,this.labelModule);break;case"star":this.shape=new N.default(this.options,this.body,this.labelModule);break;case"text":this.shape=new z.default(this.options,this.body,this.labelModule);break;case"triangle":this.shape=new L.default(this.options,this.body,this.labelModule);break;case"triangleDown":this.shape=new B.default(this.options,this.body,this.labelModule);break;default:this.shape=new S.default(this.options,this.body,this.labelModule)}this._reset()}},{key:"select",value:function(){this.selected=!0,this._reset()}},{key:"unselect",value:function(){this.selected=!1,this._reset()}},{key:"_reset",value:function(){this.shape.width=void 0,this.shape.height=void 0}},{key:"getTitle",value:function(){return this.options.title}},{key:"distanceToBorder",value:function(t,e){return this.shape.distanceToBorder(t,e)}},{key:"isFixed",value:function(){return this.options.fixed.x&&this.options.fixed.y}},{key:"isSelected",value:function(){return this.selected}},{key:"getValue",value:function(){return this.options.value}},{key:"setValueRange",value:function(t,e,i){if(void 0!==this.options.value){var o=this.options.scaling.customScalingFunction(t,e,i,this.options.value),n=this.options.scaling.max-this.options.scaling.min;if(this.options.scaling.label.enabled===!0){var s=this.options.scaling.label.max-this.options.scaling.label.min;this.options.font.size=this.options.scaling.label.min+o*s}this.options.size=this.options.scaling.min+o*n}else this.options.size=this.baseSize,this.options.font.size=this.baseFontSize;this.updateLabelModule()}},{key:"draw",value:function(t){var e=this.getFormattingValues();this.shape.draw(t,this.x,this.y,this.selected,this.hover,e)}},{key:"updateBoundingBox",value:function(t){this.shape.updateBoundingBox(this.x,this.y,t)}},{key:"resize",value:function(t){var e=this.getFormattingValues();this.shape.resize(t,this.selected,this.hover,e)}},{key:"isOverlappingWith",value:function(t){return this.shape.left<t.right&&this.shape.left+this.shape.width>t.left&&this.shape.top<t.bottom&&this.shape.top+this.shape.height>t.top}},{key:"isBoundingBoxOverlappingWith",value:function(t){return this.shape.boundingBox.left<t.right&&this.shape.boundingBox.right>t.left&&this.shape.boundingBox.top<t.bottom&&this.shape.boundingBox.bottom>t.top}}],[{key:"parseOptions",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=["color","font","fixed","shadow"];if(H.selectiveNotDeepExtend(n,t,e,i),H.mergeOptions(t,e,"shadow",i,o),void 0!==e.color&&null!==e.color){var s=H.parseColor(e.color);H.fillIfDefined(t.color,s)}else i===!0&&null===e.color&&(t.color=H.bridgeObject(o.color));void 0!==e.fixed&&null!==e.fixed&&("boolean"==typeof e.fixed?(t.fixed.x=e.fixed,t.fixed.y=e.fixed):(void 0!==e.fixed.x&&"boolean"==typeof e.fixed.x&&(t.fixed.x=e.fixed.x),void 0!==e.fixed.y&&"boolean"==typeof e.fixed.y&&(t.fixed.y=e.fixed.y))),void 0!==e.font&&null!==e.font?u.default.parseOptions(t.font,e):i===!0&&null===e.font&&(t.font=H.bridgeObject(o.font)),void 0!==e.scaling&&H.mergeOptions(t.scaling,e.scaling,"label",i,o.scaling)}}]),t}();e.default=W},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(165),s=o(n),r=i(2),a=o(r),h=i(62),d=o(h),l=i(119),u=o(l),c=i(120),p=o(c),f=i(1),m=function(){function t(e,i){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];(0,u.default)(this,t),this.body=e,this.pointToSelf=!1,this.baseSize=void 0,this.fontOptions={},this.setOptions(i),this.size={top:0,left:0,width:0,height:0,yLine:0},this.isEdgeLabel=o}return(0,p.default)(t,[{key:"setOptions",value:function(e){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.elementOptions=e,this.fontOptions=f.deepExtend({},e.font,!0),void 0!==e.label&&(this.labelDirty=!0),void 0!==e.font&&(t.parseOptions(this.fontOptions,e,i),"string"==typeof e.font?this.baseSize=this.fontOptions.size:"object"===(0,d.default)(e.font)&&void 0!==e.font.size&&(this.baseSize=e.font.size))}},{key:"constrain",value:function(t,e,i){this.fontOptions.constrainWidth=!1,this.fontOptions.maxWdt=-1,this.fontOptions.minWdt=-1;var o=[e,t,i],n=f.topMost(o,"widthConstraint");if("number"==typeof n)this.fontOptions.maxWdt=Number(n),this.fontOptions.minWdt=Number(n);else if("object"===(void 0===n?"undefined":(0,d.default)(n))){var s=f.topMost(o,["widthConstraint","maximum"]);"number"==typeof s&&(this.fontOptions.maxWdt=Number(s));var r=f.topMost(o,["widthConstraint","minimum"]);"number"==typeof r&&(this.fontOptions.minWdt=Number(r))}this.fontOptions.constrainHeight=!1,this.fontOptions.minHgt=-1,this.fontOptions.valign="middle";var a=f.topMost(o,"heightConstraint");if("number"==typeof a)this.fontOptions.minHgt=Number(a);else if("object"===(void 0===a?"undefined":(0,d.default)(a))){var h=f.topMost(o,["heightConstraint","minimum"]);"number"==typeof h&&(this.fontOptions.minHgt=Number(h));var l=f.topMost(o,["heightConstraint","valign"]);"string"==typeof l&&("top"!==l&&"bottom"!==l||(this.fontOptions.valign=l))}}},{key:"choosify",value:function(t,e,i){this.fontOptions.chooser=!0;var o=[e,t,i],n=f.topMost(o,"chosen");if("boolean"==typeof n)this.fontOptions.chooser=n;else if("object"===(void 0===n?"undefined":(0,d.default)(n))){var s=f.topMost(o,["chosen","label"]);"boolean"!=typeof s&&"function"!=typeof s||(this.fontOptions.chooser=s)}}},{key:"adjustSizes",value:function(t){var e=t?t.right+t.left:0;this.fontOptions.constrainWidth&&(this.fontOptions.maxWdt-=e,this.fontOptions.minWdt-=e);var i=t?t.top+t.bottom:0;this.fontOptions.constrainHeight&&(this.fontOptions.minHgt-=i)}},{key:"propagateFonts",value:function(t,e,i){if(this.fontOptions.multi){var o=["bold","ital","boldital","mono"],n=!0,s=!1,r=void 0;try{for(var h,d=(0,a.default)(o);!(n=(h=d.next()).done);n=!0){var l=h.value,u=void 0;if(t.font&&(u=t.font[l]),"string"==typeof u){var c=u.split(" ");this.fontOptions[l].size=c[0].replace("px",""),this.fontOptions[l].face=c[1],this.fontOptions[l].color=c[2],this.fontOptions[l].vadjust=this.fontOptions.vadjust,this.fontOptions[l].mod=i.font[l].mod}else{if(u&&u.hasOwnProperty("face")?this.fontOptions[l].face=u.face:e.font&&e.font[l]&&e.font[l].hasOwnProperty("face")?this.fontOptions[l].face=e.font[l].face:"mono"===l?this.fontOptions[l].face=i.font[l].face:e.font&&e.font.hasOwnProperty("face")?this.fontOptions[l].face=e.font.face:this.fontOptions[l].face=this.fontOptions.face,u&&u.hasOwnProperty("color")?this.fontOptions[l].color=u.color:e.font&&e.font[l]&&e.font[l].hasOwnProperty("color")?this.fontOptions[l].color=e.font[l].color:e.font&&e.font.hasOwnProperty("color")?this.fontOptions[l].color=e.font.color:this.fontOptions[l].color=this.fontOptions.color,u&&u.hasOwnProperty("mod")?this.fontOptions[l].mod=u.mod:e.font&&e.font[l]&&e.font[l].hasOwnProperty("mod")?this.fontOptions[l].mod=e.font[l].mod:e.font&&e.font.hasOwnProperty("mod")?this.fontOptions[l].mod=e.font.mod:this.fontOptions[l].mod=i.font[l].mod,u&&u.hasOwnProperty("size"))this.fontOptions[l].size=u.size;else if(e.font&&e.font[l]&&e.font[l].hasOwnProperty("size"))this.fontOptions[l].size=e.font[l].size;else if(this.fontOptions[l].face===i.font[l].face&&this.fontOptions.face===i.font.face){var p=this.fontOptions.size/Number(i.font.size);this.fontOptions[l].size=i.font[l].size*p}else e.font&&e.font.hasOwnProperty("size")?this.fontOptions[l].size=e.font.size:this.fontOptions[l].size=this.fontOptions.size;if(u&&u.hasOwnProperty("vadjust"))this.fontOptions[l].vadjust=u.vadjust;else if(e.font&&e.font[l]&&e.font[l].hasOwnProperty("vadjust"))this.fontOptions[l].vadjust=e.font[l].vadjust;else if(this.fontOptions[l].face===i.font[l].face&&this.fontOptions.face===i.font.face){var f=this.fontOptions.size/Number(i.font.size);this.fontOptions[l].vadjust=i.font[l].vadjust*Math.round(f)}else e.font&&e.font.hasOwnProperty("vadjust")?this.fontOptions[l].vadjust=e.font.vadjust:this.fontOptions[l].vadjust=this.fontOptions.vadjust}this.fontOptions[l].size=Number(this.fontOptions[l].size),this.fontOptions[l].vadjust=Number(this.fontOptions[l].vadjust)}}catch(t){s=!0,r=t}finally{try{!n&&d.return&&d.return()}finally{if(s)throw r}}}}},{key:"draw",value:function(t,e,i,o,n){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"middle";if(void 0!==this.elementOptions.label){var r=this.fontOptions.size*this.body.view.scale;this.elementOptions.label&&r<this.elementOptions.scaling.label.drawThreshold-1||(this.calculateLabelSize(t,o,n,e,i,s),this._drawBackground(t),this._drawText(t,o,n,e,i,s))}}},{key:"_drawBackground",value:function(t){if(void 0!==this.fontOptions.background&&"none"!==this.fontOptions.background){t.fillStyle=this.fontOptions.background;if(this.isEdgeLabel)switch(this.fontOptions.align){case"middle":t.fillRect(.5*-this.size.width,.5*-this.size.height,this.size.width,this.size.height);break;case"top":t.fillRect(.5*-this.size.width,-(this.size.height+2),this.size.width,this.size.height);break;case"bottom":t.fillRect(.5*-this.size.width,2,this.size.width,this.size.height);break;default:t.fillRect(this.size.left,this.size.top-1,this.size.width,this.size.height)}else t.fillRect(this.size.left,this.size.top-1,this.size.width,this.size.height)}}},{key:"_drawText",value:function(t,e,i,o,n){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"middle",a=this.fontOptions.size,h=a*this.body.view.scale;h>=this.elementOptions.scaling.label.maxVisible&&(a=Number(this.elementOptions.scaling.label.maxVisible)/this.body.view.scale);var d=this.size.yLine,l=this._setAlignment(t,o,d,r),u=(0,s.default)(l,2);o=u[0],d=u[1],t.textAlign="left",o-=this.size.width/2,this.fontOptions.valign&&this.size.height>this.size.labelHeight&&("top"===this.fontOptions.valign&&(d-=(this.size.height-this.size.labelHeight)/2),"bottom"===this.fontOptions.valign&&(d+=(this.size.height-this.size.labelHeight)/2));for(var c=0;c<this.lineCount;c++)if(this.lines[c]&&this.lines[c].blocks){var p=0;this.isEdgeLabel||"center"===this.fontOptions.align?p+=(this.size.width-this.lines[c].width)/2:"right"===this.fontOptions.align&&(p+=this.size.width-this.lines[c].width);for(var f=0;f<this.lines[c].blocks.length;f++){var m=this.lines[c].blocks[f];t.font=m.font;var v=this._getColor(m.color,h,m.strokeColor),g=(0,s.default)(v,2),y=g[0],b=g[1];m.strokeWidth>0&&(t.lineWidth=m.strokeWidth,t.strokeStyle=b,t.lineJoin="round"),t.fillStyle=y,m.strokeWidth>0&&t.strokeText(m.text,o+p,d+m.vadjust),t.fillText(m.text,o+p,d+m.vadjust),p+=m.width}d+=this.lines[c].height}}},{key:"_setAlignment",value:function(t,e,i,o){if(this.isEdgeLabel&&"horizontal"!==this.fontOptions.align&&this.pointToSelf===!1){e=0,i=0;"top"===this.fontOptions.align?(t.textBaseline="alphabetic",i-=4):"bottom"===this.fontOptions.align?(t.textBaseline="hanging",i+=4):t.textBaseline="middle"}else t.textBaseline=o;return[e,i]}},{key:"_getColor",value:function(t,e,i){var o=t||"#000000",n=i||"#ffffff";if(e<=this.elementOptions.scaling.label.drawThreshold){var s=Math.max(0,Math.min(1,1-(this.elementOptions.scaling.label.drawThreshold-e)));o=f.overrideOpacity(o,s),n=f.overrideOpacity(n,s)}return[o,n]}},{key:"getTextSize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return this._processLabel(t,e,i),{width:this.size.width,height:this.size.height,lineCount:this.lineCount}}},{key:"calculateLabelSize",value:function(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"middle";this.labelDirty===!0&&this._processLabel(t,e,i),this.size.left=o-.5*this.size.width,this.size.top=n-.5*this.size.height,this.size.yLine=n+.5*(1-this.lineCount)*this.fontOptions.size,"hanging"===s&&(this.size.top+=.5*this.fontOptions.size,this.size.top+=4,this.size.yLine+=4),this.labelDirty=!1}},{key:"decodeMarkupSystem",value:function(t){var e="none";return"markdown"===t||"md"===t?e="markdown":t!==!0&&"html"!==t||(e="html"),e}},{key:"splitBlocks",value:function(t,e){var i=this.decodeMarkupSystem(e);return"none"===i?[{text:t,mod:"normal"}]:"markdown"===i?this.splitMarkdownBlocks(t):"html"===i?this.splitHtmlBlocks(t):void 0}},{key:"splitMarkdownBlocks",value:function(t){var e=[],i={bold:!1,ital:!1,mono:!1,beginable:!0,spacing:!1,position:0,buffer:"",modStack:[]};for(i.mod=function(){return 0===this.modStack.length?"normal":this.modStack[0]},i.modName=function(){return 0===this.modStack.length?"normal":"mono"===this.modStack[0]?"mono":i.bold&&i.ital?"boldital":i.bold?"bold":i.ital?"ital":void 0},i.emitBlock=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.spacing&&(this.add(" "),this.spacing=!1),this.buffer.length>0&&(e.push({text:this.buffer,mod:this.modName()}),this.buffer="")},i.add=function(t){" "===t&&(i.spacing=!0),i.spacing&&(this.buffer+=" ",this.spacing=!1)," "!=t&&(this.buffer+=t)};i.position<t.length;){var o=t.charAt(i.position);/[ \t]/.test(o)?(i.mono?i.add(o):i.spacing=!0,i.beginable=!0):/\\/.test(o)?i.position<t.length+1&&(i.position++,o=t.charAt(i.position),/ \t/.test(o)?i.spacing=!0:(i.add(o),i.beginable=!1)):i.mono||i.bold||!i.beginable&&!i.spacing||!/\*/.test(o)?i.mono||i.ital||!i.beginable&&!i.spacing||!/\_/.test(o)?!i.mono&&(i.beginable||i.spacing)&&/`/.test(o)?(i.emitBlock(),i.mono=!0,i.modStack.unshift("mono")):!i.mono&&"bold"===i.mod()&&/\*/.test(o)?i.position===t.length-1||/[.,_` \t\n]/.test(t.charAt(i.position+1))?(i.emitBlock(),i.bold=!1,i.modStack.shift()):i.add(o):!i.mono&&"ital"===i.mod()&&/\_/.test(o)?i.position===t.length-1||/[.,*` \t\n]/.test(t.charAt(i.position+1))?(i.emitBlock(),i.ital=!1,i.modStack.shift()):i.add(o):i.mono&&"mono"===i.mod()&&/`/.test(o)?i.position===t.length-1||/[.,*_ \t\n]/.test(t.charAt(i.position+1))?(i.emitBlock(),i.mono=!1,i.modStack.shift()):i.add(o):(i.add(o),i.beginable=!1):(i.emitBlock(),i.ital=!0,i.modStack.unshift("ital")):(i.emitBlock(),i.bold=!0,i.modStack.unshift("bold")),i.position++}return i.emitBlock(),e}},{key:"splitHtmlBlocks",value:function(t){var e=[],i={bold:!1,ital:!1,mono:!1,spacing:!1,position:0,buffer:"",modStack:[]};for(i.mod=function(){return 0===this.modStack.length?"normal":this.modStack[0]},i.modName=function(){return 0===this.modStack.length?"normal":"mono"===this.modStack[0]?"mono":i.bold&&i.ital?"boldital":i.bold?"bold":i.ital?"ital":void 0},i.emitBlock=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.spacing&&(this.add(" "),this.spacing=!1),this.buffer.length>0&&(e.push({text:this.buffer,mod:this.modName()}),this.buffer="")},i.add=function(t){" "===t&&(i.spacing=!0),i.spacing&&(this.buffer+=" ",this.spacing=!1)," "!=t&&(this.buffer+=t)};i.position<t.length;){var o=t.charAt(i.position);/[ \t]/.test(o)?i.mono?i.add(o):i.spacing=!0:/</.test(o)?i.mono||i.bold||!/<b>/.test(t.substr(i.position,3))?i.mono||i.ital||!/<i>/.test(t.substr(i.position,3))?!i.mono&&/<code>/.test(t.substr(i.position,6))?(i.emitBlock(),i.mono=!0,i.modStack.unshift("mono"),i.position+=5):!i.mono&&"bold"===i.mod()&&/<\/b>/.test(t.substr(i.position,4))?(i.emitBlock(),i.bold=!1,i.modStack.shift(),i.position+=3):!i.mono&&"ital"===i.mod()&&/<\/i>/.test(t.substr(i.position,4))?(i.emitBlock(),i.ital=!1,i.modStack.shift(),i.position+=3):"mono"===i.mod()&&/<\/code>/.test(t.substr(i.position,7))?(i.emitBlock(),i.mono=!1,i.modStack.shift(),i.position+=6):i.add(o):(i.emitBlock(),i.ital=!0,i.modStack.unshift("ital"),i.position+=2):(i.emitBlock(),i.bold=!0,i.modStack.unshift("bold"),i.position+=2):/&/.test(o)?/&lt;/.test(t.substr(i.position,4))?(i.add("<"),i.position+=3):/&amp;/.test(t.substr(i.position,5))?(i.add("&"),i.position+=4):i.add("&"):i.add(o),i.position++}return i.emitBlock(),e}},{key:"getFormattingValues",value:function(t,e,i,o){var n={color:"normal"===o?this.fontOptions.color:this.fontOptions[o].color,size:"normal"===o?this.fontOptions.size:this.fontOptions[o].size,face:"normal"===o?this.fontOptions.face:this.fontOptions[o].face,mod:"normal"===o?"":this.fontOptions[o].mod,vadjust:"normal"===o?this.fontOptions.vadjust:this.fontOptions[o].vadjust,strokeWidth:this.fontOptions.strokeWidth,strokeColor:this.fontOptions.strokeColor};return"normal"===o?(e||i)&&(this.fontOptions.chooser===!0&&this.elementOptions.labelHighlightBold?n.mod="bold":"function"==typeof this.fontOptions.chooser&&this.fontOptions.chooser(t,n,this.elementOptions.id,e,i)):(e||i)&&"function"==typeof this.fontOptions.chooser&&this.fontOptions.chooser(t,n,this.elementOptions.id,e,i),t.font=(n.mod+" "+n.size+"px "+n.face).replace(/"/g,""),n.font=t.font,n.height=n.size,n}},{key:"differentState",value:function(t,e){return t!==this.fontOptions.selectedState&&e!==this.fontOptions.hoverState}},{key:"_processLabel",value:function(t,e,i){var o=0,n=0,s=[],r=0;if(s.add=function(t,e,i,o,n,s,r,a,h,d){this.length==t&&(this[t]={width:0,height:0,blocks:[]}),this[t].blocks.push({text:e,font:i,color:o,width:n,height:s,vadjust:r,mod:a,strokeWidth:h,strokeColor:d})},s.accumulate=function(t,e,i){this[t].width+=e,this[t].height=i>this[t].height?i:this[t].height},s.addAndAccumulate=function(t,e,i,o,n,s,r,a,h,d){this.add(t,e,i,o,n,s,r,a,h,d),this.accumulate(t,n,s)},void 0!==this.elementOptions.label){var a=String(this.elementOptions.label).split("\n"),h=a.length;if(this.elementOptions.font.multi)for(var d=0;d<h;d++){var l=this.splitBlocks(a[d],this.elementOptions.font.multi),u=0,c=0;if(l){if(0==l.length){var p=this.getFormattingValues(t,e,i,"normal");s.addAndAccumulate(r,"",p.font,p.color,0,p.size,p.vadjust,"normal",p.strokeWidth,p.strokeColor),n+=s[r].height,r++;continue}for(var f=0;f<l.length;f++)if(this.fontOptions.maxWdt>0)for(var m=this.getFormattingValues(t,e,i,l[f].mod),v=l[f].text.split(" "),g=!0,y="",b={width:0},_=void 0,w=0;w<v.length;){var x=g?"":" ";_=b,b=t.measureText(y+x+v[w]),u+b.width>this.fontOptions.maxWdt&&0!=_.width?(c=m.height>c?m.height:c,s.add(r,y,m.font,m.color,_.width,m.height,m.vadjust,l[f].mod,m.strokeWidth,m.strokeColor),s.accumulate(r,_.width,c),y="",g=!0,u=0,o=s[r].width>o?s[r].width:o,n+=s[r].height,r++):(y=y+x+v[w],w===v.length-1&&(c=m.height>c?m.height:c,u+=b.width,s.add(r,y,m.font,m.color,b.width,m.height,m.vadjust,l[f].mod,m.strokeWidth,m.strokeColor),s.accumulate(r,b.width,c),f===l.length-1&&(o=s[r].width>o?s[r].width:o,n+=s[r].height,r++)),w++,g=!1)}else{var k=this.getFormattingValues(t,e,i,l[f].mod),O=t.measureText(l[f].text);s.addAndAccumulate(r,l[f].text,k.font,k.color,O.width,k.height,k.vadjust,l[f].mod,k.strokeWidth,k.strokeColor),o=s[r].width>o?s[r].width:o,l.length-1===f&&(n+=s[r].height,r++)}}}else for(var S=0;S<h;S++){var M=this.getFormattingValues(t,e,i,"normal");if(this.fontOptions.maxWdt>0)for(var D=a[S].split(" "),C="",T={width:0},E=void 0,P=0;P<D.length;){var I=""===C?"":" ";E=T,T=t.measureText(C+I+D[P]),T.width>this.fontOptions.maxWdt&&0!=E.width?(s.addAndAccumulate(r,C,M.font,M.color,E.width,M.size,M.vadjust,"normal",M.strokeWidth,M.strokeColor),o=s[r].width>o?s[r].width:o,n+=s[r].height,C="",r++):(C=C+I+D[P],P===D.length-1&&(s.addAndAccumulate(r,C,M.font,M.color,T.width,M.size,M.vadjust,"normal",M.strokeWidth,M.strokeColor),o=s[r].width>o?s[r].width:o,n+=s[r].height,r++),P++)}else{var N=a[S],R=t.measureText(N);s.addAndAccumulate(r,N,M.font,M.color,R.width,M.size,M.vadjust,"normal",M.strokeWidth,M.strokeColor),o=s[r].width>o?s[r].width:o,n+=s[r].height,r++}}}this.fontOptions.minWdt>0&&o<this.fontOptions.minWdt&&(o=this.fontOptions.minWdt),this.size.labelHeight=n,this.fontOptions.minHgt>0&&n<this.fontOptions.minHgt&&(n=this.fontOptions.minHgt),this.lines=s,this.lineCount=s.length,this.size.width=o,this.size.height=n,this.selectedState=e,this.hoverState=i}}],[{key:"parseOptions",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("string"==typeof e.font){var o=e.font.split(" ");t.size=o[0].replace("px",""),t.face=o[1],t.color=o[2],t.vadjust=0}else"object"===(0,d.default)(e.font)&&f.fillIfDefined(t,e.font,i);t.size=Number(t.size),t.vadjust=Number(t.vadjust)}}]),t}();e.default=m},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var n=i(166),s=o(n),r=i(2),a=o(r);e.default=function(){function t(t,e){var i=[],o=!0,n=!1,s=void 0;try{for(var r,h=(0,a.default)(t);!(o=(r=h.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(t){n=!0,s=t}finally{try{!o&&h.return&&h.return()}finally{if(n)throw s}}return i}return function(e,i){if(Array.isArray(e))return e;if((0,s.default)(Object(e)))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(t,e,i){t.exports={default:i(167),__esModule:!0}},function(t,e,i){i(4),i(50),t.exports=i(168)},function(t,e,i){var o=i(54),n=i(47)("iterator"),s=i(8);t.exports=i(17).isIterable=function(t){var e=Object(t);return void 0!==e[n]||"@@iterator"in e||s.hasOwnProperty(o(e))}},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(170),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(173),u=o(l),c=i(174),p=o(c),f=i(179),m=o(f),v=function(t){function e(t,i,o){(0,a.default)(this,e);var n=(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o));return n._setMargins(o),n}return(0,p.default)(e,t),(0,d.default)(e,[{key:"resize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover;(void 0===this.width||this.labelModule.differentState(e,i))&&(this.textSize=this.labelModule.getTextSize(t,e,i),this.width=this.textSize.width+this.margin.right+this.margin.left,this.height=this.textSize.height+this.margin.top+this.margin.bottom,this.radius=this.width/2)}},{key:"draw",value:function(t,e,i,o,n,s){this.resize(t,o,n),this.left=e-this.width/2,this.top=i-this.height/2,t.strokeStyle=s.borderColor,t.lineWidth=s.borderWidth,t.lineWidth/=this.body.view.scale,t.lineWidth=Math.min(this.width,t.lineWidth),t.fillStyle=s.color,t.roundRect(this.left,this.top,this.width,this.height,s.borderRadius),this.enableShadow(t,s),t.fill(),this.disableShadow(t,s),t.save(),s.borderWidth>0&&(this.enableBorderDashes(t,s),t.stroke(),this.disableBorderDashes(t,s)),t.restore(),this.updateBoundingBox(e,i,t,o,n),this.labelModule.draw(t,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,o,n)}},{key:"updateBoundingBox",value:function(t,e,i,o,n){this.resize(i,o,n),this.left=t-this.width/2,this.top=e-this.height/2;var s=this.options.shapeProperties.borderRadius;this.boundingBox.left=this.left-s,this.boundingBox.top=this.top-s,this.boundingBox.bottom=this.top+this.height+s,this.boundingBox.right=this.left+this.width+s}},{key:"distanceToBorder",value:function(t,e){this.resize(t);var i=this.options.borderWidth;return Math.min(Math.abs(this.width/2/Math.cos(e)),Math.abs(this.height/2/Math.sin(e)))+i}}]),e}(m.default);e.default=v},function(t,e,i){t.exports={default:i(171),__esModule:!0}},function(t,e,i){i(172),t.exports=i(17).Object.getPrototypeOf},function(t,e,i){
var o=i(49),n=i(48);i(61)("getPrototypeOf",function(){return function(t){return n(o(t))}})},function(t,e,i){e.__esModule=!0;var o=i(62),n=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,n.default)(e))&&"function"!=typeof e?t:e}},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var n=i(175),s=o(n),r=i(55),a=o(r),h=i(62),d=o(h);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,d.default)(e)));t.prototype=(0,a.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(s.default?(0,s.default)(t,e):t.__proto__=e)}},function(t,e,i){t.exports={default:i(176),__esModule:!0}},function(t,e,i){i(177),t.exports=i(17).Object.setPrototypeOf},function(t,e,i){var o=i(15);o(o.S,"Object",{setPrototypeOf:i(178).set})},function(t,e,i){var o=i(23),n=i(22),s=function(t,e){if(n(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{o=i(18)(Function.call,i(78).f(Object.prototype,"__proto__").set,2),o(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,i){return s(t,i),e?t.__proto__=i:o(t,i),t}}({},!1):void 0),check:s}},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(62),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=function(){function t(e,i,o){(0,a.default)(this,t),this.body=i,this.labelModule=o,this.setOptions(e),this.top=void 0,this.left=void 0,this.height=void 0,this.width=void 0,this.radius=void 0,this.margin=void 0,this.boundingBox={top:0,left:0,right:0,bottom:0}}return(0,d.default)(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"_setMargins",value:function(t){this.margin={},this.options.margin&&("object"==(0,s.default)(this.options.margin)?(this.margin.top=this.options.margin.top,this.margin.right=this.options.margin.right,this.margin.bottom=this.options.margin.bottom,this.margin.left=this.options.margin.left):(this.margin.top=this.options.margin,this.margin.right=this.options.margin,this.margin.bottom=this.options.margin,this.margin.left=this.options.margin)),t.adjustSizes(this.margin)}},{key:"_distanceToBorder",value:function(t,e){var i=this.options.borderWidth;return this.resize(t),Math.min(Math.abs(this.width/2/Math.cos(e)),Math.abs(this.height/2/Math.sin(e)))+i}},{key:"enableShadow",value:function(t,e){e.shadow&&(t.shadowColor=e.shadowColor,t.shadowBlur=e.shadowSize,t.shadowOffsetX=e.shadowX,t.shadowOffsetY=e.shadowY)}},{key:"disableShadow",value:function(t,e){e.shadow&&(t.shadowColor="rgba(0,0,0,0)",t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0)}},{key:"enableBorderDashes",value:function(t,e){if(e.borderDashes!==!1)if(void 0!==t.setLineDash){var i=e.borderDashes;i===!0&&(i=[5,15]),t.setLineDash(i)}else console.warn("setLineDash is not supported in this browser. The dashed borders cannot be used."),this.options.shapeProperties.borderDashes=!1,e.borderDashes=!1}},{key:"disableBorderDashes",value:function(t,e){e.borderDashes!==!1&&(void 0!==t.setLineDash?t.setLineDash([0]):(console.warn("setLineDash is not supported in this browser. The dashed borders cannot be used."),this.options.shapeProperties.borderDashes=!1,e.borderDashes=!1))}}]),t}();e.default=l},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(170),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(173),u=o(l),c=i(174),p=o(c),f=i(181),m=o(f),v=function(t){function e(t,i,o){(0,a.default)(this,e);var n=(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o));return n._setMargins(o),n}return(0,p.default)(e,t),(0,d.default)(e,[{key:"resize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover;arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.options.size;if(void 0===this.width||this.labelModule.differentState(e,i)){this.textSize=this.labelModule.getTextSize(t,e,i);var o=Math.max(this.textSize.width+this.margin.right+this.margin.left,this.textSize.height+this.margin.top+this.margin.bottom);this.options.size=o/2,this.width=o,this.height=o,this.radius=this.width/2}}},{key:"draw",value:function(t,e,i,o,n,s){this.resize(t,o,n),this.left=e-this.width/2,this.top=i-this.height/2,this._drawRawCircle(t,e,i,o,n,s),this.boundingBox.top=i-s.size,this.boundingBox.left=e-s.size,this.boundingBox.right=e+s.size,this.boundingBox.bottom=i+s.size,this.updateBoundingBox(e,i),this.labelModule.draw(t,this.left+this.textSize.width/2+this.margin.left,i,o,n)}},{key:"updateBoundingBox",value:function(t,e){this.boundingBox.top=e-this.options.size,this.boundingBox.left=t-this.options.size,this.boundingBox.right=t+this.options.size,this.boundingBox.bottom=e+this.options.size}},{key:"distanceToBorder",value:function(t,e){return this.resize(t),.5*this.width}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(170),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(173),u=o(l),c=i(174),p=o(c),f=i(179),m=o(f),v=function(t){function e(t,i,o){(0,a.default)(this,e);var n=(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o));return n.labelOffset=0,n.imageLoaded=!1,n.selected=!1,n}return(0,p.default)(e,t),(0,d.default)(e,[{key:"setOptions",value:function(t,e,i){this.options=t,this.setImages(e,i)}},{key:"setImages",value:function(t,e){t&&(this.imageObj=t,e&&(this.imageObjAlt=e))}},{key:"switchImages",value:function(t){if(t&&!this.selected||!t&&this.selected){var e=this.imageObj;this.imageObj=this.imageObjAlt,this.imageObjAlt=e}this.selected=t}},{key:"_resizeImage",value:function(){var t=!1;if(this.imageObj.width&&this.imageObj.height?this.imageLoaded===!1&&(this.imageLoaded=!0,t=!0):this.imageLoaded=!1,!this.width||!this.height||t===!0){var e,i,o;this.imageObj.width&&this.imageObj.height&&(e=0,i=0),this.options.shapeProperties.useImageSize===!1?this.imageObj.width>this.imageObj.height?(o=this.imageObj.width/this.imageObj.height,e=2*this.options.size*o||this.imageObj.width,i=2*this.options.size||this.imageObj.height):(o=this.imageObj.width&&this.imageObj.height?this.imageObj.height/this.imageObj.width:1,e=2*this.options.size,i=2*this.options.size*o):(e=this.imageObj.width,i=this.imageObj.height),this.width=e,this.height=i,this.radius=.5*this.width}}},{key:"_drawRawCircle",value:function(t,e,i,o,n,s){var r=s.borderWidth/this.body.view.scale;t.lineWidth=Math.min(this.width,r),t.strokeStyle=s.borderColor,t.fillStyle=s.color,t.circle(e,i,s.size),this.enableShadow(t,s),t.fill(),this.disableShadow(t,s),t.save(),r>0&&(this.enableBorderDashes(t,s),t.stroke(),this.disableBorderDashes(t,s)),t.restore()}},{key:"_drawImageAtPosition",value:function(t,e){if(0!=this.imageObj.width){t.globalAlpha=1,this.enableShadow(t,e);var i=this.imageObj.width/this.width/this.body.view.scale;if(i>2&&this.options.shapeProperties.interpolation===!0){var o=this.imageObj.width,n=this.imageObj.height,s=document.createElement("canvas");s.width=o,s.height=o;var r=s.getContext("2d");i*=.5,o*=.5,n*=.5,r.drawImage(this.imageObj,0,0,o,n);for(var a=0,h=1;i>2&&h<4;)r.drawImage(s,a,0,o,n,a+o,0,o/2,n/2),a+=o,i*=.5,o*=.5,n*=.5,h+=1;t.drawImage(s,a,0,o,n,this.left,this.top,this.width,this.height)}else t.drawImage(this.imageObj,this.left,this.top,this.width,this.height);this.disableShadow(t,e)}}},{key:"_drawImageLabel",value:function(t,e,i,o,n){var s,r=0;if(void 0!==this.height){r=.5*this.height;var a=this.labelModule.getTextSize(t,o,n);a.lineCount>=1&&(r+=a.height/2)}s=i+r,this.options.label&&(this.labelOffset=r),this.labelModule.draw(t,e,s,o,n,"hanging")}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(170),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(173),u=o(l),c=i(174),p=o(c),f=i(181),m=o(f),v=function(t){function e(t,i,o,n,r){(0,a.default)(this,e);var h=(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o));return h.setImages(n,r),h._swapToImageResizeWhenImageLoaded=!0,h}return(0,p.default)(e,t),(0,d.default)(e,[{key:"resize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover;if(void 0===this.imageObj.src||void 0===this.imageObj.width||void 0===this.imageObj.height||this.labelModule.differentState(e,i)){var o=2*this.options.size;this.width=o,this.height=o,this._swapToImageResizeWhenImageLoaded=!0,this.radius=.5*this.width}else this._swapToImageResizeWhenImageLoaded&&(this.width=void 0,this.height=void 0,this._swapToImageResizeWhenImageLoaded=!1),this._resizeImage()}},{key:"draw",value:function(t,e,i,o,n,s){this.imageObjAlt&&this.switchImages(o),this.resize(),this.left=e-this.width/2,this.top=i-this.height/2;Math.min(.5*this.height,.5*this.width);this._drawRawCircle(t,e,i,o,n,s),t.save(),t.clip(),this._drawImageAtPosition(t,s),t.restore(),this._drawImageLabel(t,e,i,o,n),this.updateBoundingBox(e,i)}},{key:"updateBoundingBox",value:function(t,e){this.boundingBox.top=e-this.options.size,this.boundingBox.left=t-this.options.size,this.boundingBox.right=t+this.options.size,this.boundingBox.bottom=e+this.options.size,this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelOffset)}},{key:"distanceToBorder",value:function(t,e){return this.resize(t),.5*this.width}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(170),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(173),u=o(l),c=i(174),p=o(c),f=i(179),m=o(f),v=function(t){function e(t,i,o){(0,a.default)(this,e);var n=(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o));return n._setMargins(o),n}return(0,p.default)(e,t),(0,d.default)(e,[{key:"resize",value:function(t,e,i){if(void 0===this.width||this.labelModule.differentState(e,i)){this.textSize=this.labelModule.getTextSize(t,e,i);var o=this.textSize.width+this.margin.right+this.margin.left;this.width=o,this.height=o,this.radius=this.width/2}}},{key:"draw",value:function(t,e,i,o,n,s){this.resize(t,o,n),this.left=e-this.width/2,this.top=i-this.height/2;var r=s.borderWidth/this.body.view.scale;t.lineWidth=Math.min(this.width,r),t.strokeStyle=s.borderColor,t.fillStyle=s.color,t.database(e-this.width/2,i-this.height/2,this.width,this.height),this.enableShadow(t,s),t.fill(),this.disableShadow(t,s),t.save(),r>0&&(this.enableBorderDashes(t,s),t.stroke(),this.disableBorderDashes(t,s)),t.restore(),this.updateBoundingBox(e,i,t,o,n),this.labelModule.draw(t,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,o,n)}},{key:"updateBoundingBox",value:function(t,e,i,o,n){this.resize(i,o,n),this.left=t-.5*this.width,this.top=e-.5*this.height,this.boundingBox.left=this.left,this.boundingBox.top=this.top,this.boundingBox.bottom=this.top+this.height,this.boundingBox.right=this.left+this.width}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(170),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(173),u=o(l),c=i(174),p=o(c),f=i(185),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"resize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover,o=arguments[3];this._resizeShape(e,i,o)}},{key:"draw",value:function(t,e,i,o,n,s){this._drawShape(t,"diamond",4,e,i,o,n,s)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(170),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(173),u=o(l),c=i(174),p=o(c),f=i(179),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"_resizeShape",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.selected,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.hover,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{size:this.options.size};if(void 0===this.width||this.labelModule.differentState(t,e)){var o=2*i.size;this.width=o,this.height=o,this.radius=.5*this.width}}},{key:"_drawShape",value:function(t,e,i,o,n,s,r,a){this._resizeShape(s,r,a),this.left=o-this.width/2,this.top=n-this.height/2;var h=a.borderWidth/this.body.view.scale;if(t.lineWidth=Math.min(this.width,h),t.strokeStyle=a.borderColor,t.fillStyle=a.color,t[e](o,n,a.size),this.enableShadow(t,a),t.fill(),this.disableShadow(t,a),t.save(),h>0&&(this.enableBorderDashes(t,a),t.stroke(),this.disableBorderDashes(t,a)),t.restore(),void 0!==this.options.label){var d=n+.5*this.height+3;this.labelModule.draw(t,o,d,s,r,"hanging")}this.updateBoundingBox(o,n)}},{key:"updateBoundingBox",value:function(t,e){this.boundingBox.top=e-this.options.size,this.boundingBox.left=t-this.options.size,this.boundingBox.right=t+this.options.size,this.boundingBox.bottom=e+this.options.size,void 0!==this.options.label&&this.labelModule.size.width>0&&(this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelModule.size.height+3))}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(170),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(173),u=o(l),c=i(174),p=o(c),f=i(185),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"resize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover,o=arguments[3];this._resizeShape(e,i,o)}},{key:"draw",value:function(t,e,i,o,n,s){this._drawShape(t,"circle",2,e,i,o,n,s)}},{key:"distanceToBorder",value:function(t,e){return this.resize(t),this.options.size}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(170),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(173),u=o(l),c=i(174),p=o(c),f=i(179),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"resize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover;if(void 0===this.width||this.labelModule.differentState(e,i)){var o=this.labelModule.getTextSize(t,e,i);this.height=2*o.height,this.width=o.width+this.height,this.radius=.5*this.width}}},{key:"draw",value:function(t,e,i,o,n,s){this.resize(t,o,n),this.left=e-.5*this.width,this.top=i-.5*this.height;var r=s.borderWidth/this.body.view.scale;t.lineWidth=Math.min(this.width,r),t.strokeStyle=s.borderColor,t.fillStyle=s.color,t.ellipse(this.left,this.top,this.width,this.height),this.enableShadow(t,s),t.fill(),this.disableShadow(t,s),t.save(),r>0&&(this.enableBorderDashes(t,s),t.stroke(),this.disableBorderDashes(t,s)),t.restore(),this.updateBoundingBox(e,i,t,o,n),this.labelModule.draw(t,e,i,o,n)}},{key:"updateBoundingBox",value:function(t,e,i,o,n){this.resize(i,o,n),this.left=t-.5*this.width,this.top=e-.5*this.height,this.boundingBox.left=this.left,this.boundingBox.top=this.top,this.boundingBox.bottom=this.top+this.height,this.boundingBox.right=this.left+this.width}},{key:"distanceToBorder",value:function(t,e){this.resize(t);var i=.5*this.width,o=.5*this.height,n=Math.sin(e)*i,s=Math.cos(e)*o;return i*o/Math.sqrt(n*n+s*s)}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(170),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(173),u=o(l),c=i(174),p=o(c),f=i(179),m=o(f),v=function(t){function e(t,i,o){(0,a.default)(this,e);var n=(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o));return n._setMargins(o),n}return(0,p.default)(e,t),(0,d.default)(e,[{key:"resize",value:function(t,e,i){(void 0===this.width||this.labelModule.differentState(e,i))&&(this.iconSize={width:Number(this.options.icon.size),height:Number(this.options.icon.size)},this.width=this.iconSize.width+this.margin.right+this.margin.left,this.height=this.iconSize.height+this.margin.top+this.margin.bottom,this.radius=.5*this.width)}},{key:"draw",value:function(t,e,i,o,n,s){if(this.resize(t,o,n),this.options.icon.size=this.options.icon.size||50,this.left=e-this.width/2,this.top=i-this.height/2,this._icon(t,e,i,o,n,s),void 0!==this.options.label){this.labelModule.draw(t,this.left+this.iconSize.width/2+this.margin.left,i+this.height/2+5,o)}this.updateBoundingBox(e,i)}},{key:"updateBoundingBox",value:function(t,e){if(this.boundingBox.top=e-.5*this.options.icon.size,this.boundingBox.left=t-.5*this.options.icon.size,this.boundingBox.right=t+.5*this.options.icon.size,this.boundingBox.bottom=e+.5*this.options.icon.size,void 0!==this.options.label&&this.labelModule.size.width>0){this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelModule.size.height+5)}}},{key:"_icon",value:function(t,e,i,o,n,s){var r=Number(this.options.icon.size);void 0!==this.options.icon.code?(t.font=(o?"bold ":"")+r+"px "+this.options.icon.face,t.fillStyle=this.options.icon.color||"black",t.textAlign="center",t.textBaseline="middle",this.enableShadow(t,s),t.fillText(this.options.icon.code,e,i),this.disableShadow(t,s)):console.error("When using the icon shape, you need to define the code in the icon options object. This can be done per node or globally.")}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(170),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(173),u=o(l),c=i(174),p=o(c),f=i(181),m=o(f),v=function(t){function e(t,i,o,n,r){(0,a.default)(this,e);var h=(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o));return h.setImages(n,r),h}return(0,p.default)(e,t),(0,d.default)(e,[{key:"resize",value:function(){this._resizeImage()}},{key:"draw",value:function(t,e,i,o,n,s){if(this.imageObjAlt&&this.switchImages(o),this.selected=o,this.resize(),this.left=e-this.width/2,this.top=i-this.height/2,this.options.shapeProperties.useBorderWithImage===!0){var r=this.options.borderWidth,a=this.options.borderWidthSelected||2*this.options.borderWidth,h=(o?a:r)/this.body.view.scale;t.lineWidth=Math.min(this.width,h),t.beginPath(),t.strokeStyle=o?this.options.color.highlight.border:n?this.options.color.hover.border:this.options.color.border,t.fillStyle=o?this.options.color.highlight.background:n?this.options.color.hover.background:this.options.color.background,t.rect(this.left-.5*t.lineWidth,this.top-.5*t.lineWidth,this.width+t.lineWidth,this.height+t.lineWidth),t.fill(),t.save(),h>0&&(this.enableBorderDashes(t,s),t.stroke(),this.disableBorderDashes(t,s)),t.restore(),t.closePath()}this._drawImageAtPosition(t,s),this._drawImageLabel(t,e,i,o,n),this.updateBoundingBox(e,i)}},{key:"updateBoundingBox",value:function(t,e){this.resize(),this.left=t-this.width/2,this.top=e-this.height/2,this.boundingBox.top=this.top,this.boundingBox.left=this.left,this.boundingBox.right=this.left+this.width,this.boundingBox.bottom=this.top+this.height,void 0!==this.options.label&&this.labelModule.size.width>0&&(this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelOffset))}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(170),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(173),u=o(l),c=i(174),p=o(c),f=i(185),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"resize",value:function(){this._resizeShape()}},{key:"draw",value:function(t,e,i,o,n,s){this._drawShape(t,"square",2,e,i,o,n,s)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(170),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(173),u=o(l),c=i(174),p=o(c),f=i(185),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"resize",value:function(t,e,i,o){this._resizeShape(e,i,o)}},{key:"draw",value:function(t,e,i,o,n,s){this._drawShape(t,"star",4,e,i,o,n,s)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(170),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(173),u=o(l),c=i(174),p=o(c),f=i(179),m=o(f),v=function(t){function e(t,i,o){(0,a.default)(this,e);var n=(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o));return n._setMargins(o),n}return(0,p.default)(e,t),(0,d.default)(e,[{key:"resize",value:function(t,e,i){(void 0===this.width||this.labelModule.differentState(e,i))&&(this.textSize=this.labelModule.getTextSize(t,e,i),this.width=this.textSize.width+this.margin.right+this.margin.left,this.height=this.textSize.height+this.margin.top+this.margin.bottom,this.radius=.5*this.width)}},{key:"draw",value:function(t,e,i,o,n,s){this.resize(t,o,n),this.left=e-this.width/2,this.top=i-this.height/2,this.enableShadow(t,s),this.labelModule.draw(t,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,o,n),this.disableShadow(t,s),this.updateBoundingBox(e,i,t,o,n)}},{key:"updateBoundingBox",value:function(t,e,i,o,n){this.resize(i,o,n),this.left=t-this.width/2,this.top=e-this.height/2,this.boundingBox.top=this.top,this.boundingBox.left=this.left,this.boundingBox.right=this.left+this.width,this.boundingBox.bottom=this.top+this.height}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(170),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(173),u=o(l),c=i(174),p=o(c),f=i(185),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"resize",value:function(t){this._resizeShape()}},{key:"draw",value:function(t,e,i,o,n,s){this._drawShape(t,"triangle",3,e,i,o,n,s)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(170),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(173),u=o(l),c=i(174),p=o(c),f=i(185),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"resize",value:function(t){this._resizeShape()}},{key:"draw",value:function(t,e,i,o,n,s){this._drawShape(t,"triangleDown",3,e,i,o,n,s)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(119),s=o(n),r=i(120),a=o(r),h=i(196),d=o(h),l=i(164),u=o(l),c=i(1),p=i(89),f=i(93),m=function(){function t(e,i,o){var n=this;(0,s.default)(this,t),this.body=e,this.images=i,this.groups=o,this.body.functions.createEdge=this.create.bind(this),this.edgesListeners={add:function(t,e){n.add(e.items)},update:function(t,e){n.update(e.items)},remove:function(t,e){n.remove(e.items)}},this.options={},this.defaultOptions={arrows:{to:{enabled:!1,scaleFactor:1,type:"arrow"},middle:{enabled:!1,scaleFactor:1,type:"arrow"},from:{enabled:!1,scaleFactor:1,type:"arrow"}},arrowStrikethrough:!0,color:{color:"#848484",highlight:"#848484",hover:"#848484",inherit:"from",opacity:1},dashes:!1,font:{color:"#343434",size:14,face:"arial",background:"none",strokeWidth:2,strokeColor:"#ffffff",align:"horizontal",multi:!1,vadjust:0,bold:{mod:"bold"},boldital:{mod:"bold italic"},ital:{mod:"italic"},mono:{mod:"",size:15,face:"courier new",vadjust:2}},hidden:!1,hoverWidth:1.5,label:void 0,labelHighlightBold:!0,length:void 0,physics:!0,scaling:{min:1,max:15,label:{enabled:!0,min:14,max:30,maxVisible:30,drawThreshold:5},customScalingFunction:function(t,e,i,o){if(e===t)return.5;var n=1/(e-t);return Math.max(0,(o-t)*n)}},selectionWidth:1.5,selfReferenceSize:20,shadow:{enabled:!1,color:"rgba(0,0,0,0.5)",size:10,x:5,y:5},smooth:{enabled:!0,type:"dynamic",forceDirection:"none",roundness:.5},title:void 0,width:1,value:void 0},c.extend(this.options,this.defaultOptions),this.bindEventListeners()}return(0,a.default)(t,[{key:"bindEventListeners",value:function(){var t=this;this.body.emitter.on("_forceDisableDynamicCurves",function(e){"dynamic"===e&&(e="continuous");var i=!1;for(var o in t.body.edges)if(t.body.edges.hasOwnProperty(o)){var n=t.body.edges[o],s=t.body.data.edges._data[o];if(void 0!==s){var r=s.smooth;void 0!==r&&r.enabled===!0&&"dynamic"===r.type&&(void 0===e?n.setOptions({smooth:!1}):n.setOptions({smooth:{type:e}}),i=!0)}}i===!0&&t.body.emitter.emit("_dataChanged")}),this.body.emitter.on("_dataUpdated",function(){t.reconnectEdges()}),this.body.emitter.on("refreshEdges",this.refresh.bind(this)),this.body.emitter.on("refresh",this.refresh.bind(this)),this.body.emitter.on("destroy",function(){c.forEach(t.edgesListeners,function(e,i){t.body.data.edges&&t.body.data.edges.off(i,e)}),delete t.body.functions.createEdge,delete t.edgesListeners.add,delete t.edgesListeners.update,delete t.edgesListeners.remove,delete t.edgesListeners})}},{key:"setOptions",value:function(t){if(this.edgeOptions=t,void 0!==t){d.default.parseOptions(this.options,t);var e=!1;if(void 0!==t.smooth)for(var i in this.body.edges)this.body.edges.hasOwnProperty(i)&&(e=this.body.edges[i].updateEdgeType()||e);if(void 0!==t.font){u.default.parseOptions(this.options.font,t);for(var o in this.body.edges)this.body.edges.hasOwnProperty(o)&&this.body.edges[o].updateLabelModule()}void 0===t.hidden&&void 0===t.physics&&e!==!0||this.body.emitter.emit("_dataChanged")}}},{key:"setData",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=this.body.data.edges;if(t instanceof p||t instanceof f)this.body.data.edges=t;else if(Array.isArray(t))this.body.data.edges=new p,this.body.data.edges.add(t);else{if(t)throw new TypeError("Array or DataSet expected");this.body.data.edges=new p}if(o&&c.forEach(this.edgesListeners,function(t,e){o.off(e,t)}),this.body.edges={},this.body.data.edges){c.forEach(this.edgesListeners,function(t,i){e.body.data.edges.on(i,t)});var n=this.body.data.edges.getIds();this.add(n,!0)}i===!1&&this.body.emitter.emit("_dataChanged")}},{key:"add",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.body.edges,o=this.body.data.edges,n=0;n<t.length;n++){var s=t[n],r=i[s];r&&r.disconnect();var a=o.get(s,{showInternalIds:!0});i[s]=this.create(a)}e===!1&&this.body.emitter.emit("_dataChanged")}},{key:"update",value:function(t){for(var e=this.body.edges,i=this.body.data.edges,o=!1,n=0;n<t.length;n++){var s=t[n],r=i.get(s),a=e[s];void 0!==a?(a.disconnect(),o=a.setOptions(r)||o,a.connect()):(this.body.edges[s]=this.create(r),o=!0)}o===!0?this.body.emitter.emit("_dataChanged"):this.body.emitter.emit("_dataUpdated")}},{key:"remove",value:function(t){for(var e=this.body.edges,i=0;i<t.length;i++){var o=t[i],n=e[o];void 0!==n&&(n.cleanup(),n.disconnect(),delete e[o])}this.body.emitter.emit("_dataChanged")}},{key:"refresh",value:function(){var t=this.body.edges;for(var e in t){var i=void 0;t.hasOwnProperty(e)&&(i=t[e]);var o=this.body.data.edges._data[e];void 0!==i&&void 0!==o&&i.setOptions(o)}}},{key:"create",value:function(t){return new d.default(t,this.body,this.options,this.defaultOptions,this.edgeOptions)}},{key:"reconnectEdges",value:function(){var t,e=this.body.nodes,i=this.body.edges;for(t in e)e.hasOwnProperty(t)&&(e[t].edges=[]);for(t in i)if(i.hasOwnProperty(t)){var o=i[t];o.from=null,o.to=null,o.connect()}}},{key:"getConnectedNodes",value:function(t){var e=[];if(void 0!==this.body.edges[t]){var i=this.body.edges[t];i.fromId&&e.push(i.fromId),i.toId&&e.push(i.toId)}return e}}]),t}();e.default=m},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(90),s=o(n),r=i(55),a=o(r),h=i(62),d=o(h),l=i(119),u=o(l),c=i(120),p=o(c),f=i(164),m=o(f),v=i(197),g=o(v),y=i(201),b=o(y),_=i(202),w=o(_),x=i(203),k=o(x),O=i(1),S=function(){function t(e,i,o,n,s){if((0,u.default)(this,t),void 0===i)throw"No body provided";this.options=O.bridgeObject(o),this.globalOptions=o,this.defaultOptions=n,this.edgeOptions=s,this.body=i,this.id=void 0,this.fromId=void 0,this.toId=void 0,this.selected=!1,this.hover=!1,this.labelDirty=!0,this.baseWidth=this.options.width,this.baseFontSize=this.options.font.size,this.from=void 0,this.to=void 0,this.edgeType=void 0,this.connected=!1,this.labelModule=new m.default(this.body,this.options,!0),this.setOptions(e)}return(0,p.default)(t,[{key:"setOptions",value:function(e){if(e){t.parseOptions(this.options,e,!0,this.globalOptions),void 0!==e.id&&(this.id=e.id),void 0!==e.from&&(this.fromId=e.from),void 0!==e.to&&(this.toId=e.to),void 0!==e.title&&(this.title=e.title),void 0!==e.value&&(e.value=parseFloat(e.value)),this.choosify(e),this.updateLabelModule(e),this.labelModule.propagateFonts(this.edgeOptions,e,this.defaultOptions);var i=this.updateEdgeType();return this._setInteractionWidths(),this.connect(),void 0===e.hidden&&void 0===e.physics||(i=!0),i}}},{key:"choosify",value:function(t){this.chooser=!0
;var e=[t,this.options,this.defaultOptions],i=O.topMost(e,"chosen");if("boolean"==typeof i)this.chooser=i;else if("object"===(void 0===i?"undefined":(0,d.default)(i))){var o=O.topMost(e,["chosen","edge"]);"boolean"!=typeof o&&"function"!=typeof o||(this.chooser=o)}}},{key:"getFormattingValues",value:function(){var t=this.options.arrows.to===!0||this.options.arrows.to.enabled===!0,e=this.options.arrows.from===!0||this.options.arrows.from.enabled===!0,i=this.options.arrows.middle===!0||this.options.arrows.middle.enabled===!0,o=this.options.color.inherit,n={toArrow:t,toArrowScale:this.options.arrows.to.scaleFactor,toArrowType:this.options.arrows.to.type,middleArrow:i,middleArrowScale:this.options.arrows.middle.scaleFactor,middleArrowType:this.options.arrows.middle.type,fromArrow:e,fromArrowScale:this.options.arrows.from.scaleFactor,fromArrowType:this.options.arrows.from.type,arrowStrikethrough:this.options.arrowStrikethrough,color:o?void 0:this.options.color.color,inheritsColor:o,opacity:this.options.color.opacity,hidden:this.options.hidden,length:this.options.length,shadow:this.options.shadow.enabled,shadowColor:this.options.shadow.color,shadowSize:this.options.shadow.size,shadowX:this.options.shadow.x,shadowY:this.options.shadow.y,dashes:this.options.dashes,width:this.options.width};if(this.selected||this.hover)if(this.chooser===!0){if(this.selected){var s=this.options.selectionWidth;"function"==typeof s?n.width=s(n.width):"number"==typeof s&&(n.width+=s),n.width=Math.max(n.width,.3/this.body.view.scale),n.color=this.options.color.highlight,n.shadow=this.options.shadow.enabled}else if(this.hover){var r=this.options.hoverWidth;"function"==typeof r?n.width=r(n.width):"number"==typeof r&&(n.width+=r),n.width=Math.max(n.width,.3/this.body.view.scale),n.color=this.options.color.hover,n.shadow=this.options.shadow.enabled}}else"function"==typeof this.chooser&&(this.chooser(n,this.options.id,this.selected,this.hover),void 0!==n.color&&(n.inheritsColor=!1),n.shadow===!1&&(n.shadowColor===this.options.shadow.color&&n.shadowSize===this.options.shadow.size&&n.shadowX===this.options.shadow.x&&n.shadowY===this.options.shadow.y||(n.shadow=!0)));else n.shadow=this.options.shadow.enabled,n.width=Math.max(n.width,.3/this.body.view.scale);return n}},{key:"updateLabelModule",value:function(t){this.labelModule.setOptions(this.options,!0),void 0!==this.labelModule.baseSize&&(this.baseFontSize=this.labelModule.baseSize),this.labelModule.constrain(this.edgeOptions,t,this.defaultOptions),this.labelModule.choosify(this.edgeOptions,t,this.defaultOptions)}},{key:"updateEdgeType",value:function(){var t=this.options.smooth,e=!1,i=!0;return void 0!==this.edgeType&&((this.edgeType instanceof b.default&&t.enabled===!0&&"dynamic"===t.type||this.edgeType instanceof g.default&&t.enabled===!0&&"cubicBezier"===t.type||this.edgeType instanceof w.default&&t.enabled===!0&&"dynamic"!==t.type&&"cubicBezier"!==t.type||this.edgeType instanceof k.default&&t.type.enabled===!1)&&(i=!1),i===!0&&(e=this.cleanup())),i===!0?t.enabled===!0?"dynamic"===t.type?(e=!0,this.edgeType=new b.default(this.options,this.body,this.labelModule)):"cubicBezier"===t.type?this.edgeType=new g.default(this.options,this.body,this.labelModule):this.edgeType=new w.default(this.options,this.body,this.labelModule):this.edgeType=new k.default(this.options,this.body,this.labelModule):this.edgeType.setOptions(this.options),e}},{key:"connect",value:function(){this.disconnect(),this.from=this.body.nodes[this.fromId]||void 0,this.to=this.body.nodes[this.toId]||void 0,this.connected=void 0!==this.from&&void 0!==this.to,this.connected===!0?(this.from.attachEdge(this),this.to.attachEdge(this)):(this.from&&this.from.detachEdge(this),this.to&&this.to.detachEdge(this)),this.edgeType.connect()}},{key:"disconnect",value:function(){this.from&&(this.from.detachEdge(this),this.from=void 0),this.to&&(this.to.detachEdge(this),this.to=void 0),this.connected=!1}},{key:"getTitle",value:function(){return this.title}},{key:"isSelected",value:function(){return this.selected}},{key:"getValue",value:function(){return this.options.value}},{key:"setValueRange",value:function(t,e,i){if(void 0!==this.options.value){var o=this.options.scaling.customScalingFunction(t,e,i,this.options.value),n=this.options.scaling.max-this.options.scaling.min;if(this.options.scaling.label.enabled===!0){var s=this.options.scaling.label.max-this.options.scaling.label.min;this.options.font.size=this.options.scaling.label.min+o*s}this.options.width=this.options.scaling.min+o*n}else this.options.width=this.baseWidth,this.options.font.size=this.baseFontSize;this._setInteractionWidths(),this.updateLabelModule()}},{key:"_setInteractionWidths",value:function(){"function"==typeof this.options.hoverWidth?this.edgeType.hoverWidth=this.options.hoverWidth(this.options.width):this.edgeType.hoverWidth=this.options.hoverWidth+this.options.width,"function"==typeof this.options.selectionWidth?this.edgeType.selectionWidth=this.options.selectionWidth(this.options.width):this.edgeType.selectionWidth=this.options.selectionWidth+this.options.width}},{key:"draw",value:function(t){var e=this.getFormattingValues();if(!e.hidden){var i=this.edgeType.getViaNode(),o={};this.edgeType.fromPoint=this.edgeType.from,this.edgeType.toPoint=this.edgeType.to,e.fromArrow&&(o.from=this.edgeType.getArrowData(t,"from",i,this.selected,this.hover,e),e.arrowStrikethrough===!1&&(this.edgeType.fromPoint=o.from.core)),e.toArrow&&(o.to=this.edgeType.getArrowData(t,"to",i,this.selected,this.hover,e),e.arrowStrikethrough===!1&&(this.edgeType.toPoint=o.to.core)),e.middleArrow&&(o.middle=this.edgeType.getArrowData(t,"middle",i,this.selected,this.hover,e)),this.edgeType.drawLine(t,e,this.selected,this.hover,i),this.drawArrows(t,o,e),this.drawLabel(t,i)}}},{key:"drawArrows",value:function(t,e,i){i.fromArrow&&this.edgeType.drawArrowHead(t,i,this.selected,this.hover,e.from),i.middleArrow&&this.edgeType.drawArrowHead(t,i,this.selected,this.hover,e.middle),i.toArrow&&this.edgeType.drawArrowHead(t,i,this.selected,this.hover,e.to)}},{key:"drawLabel",value:function(t,e){if(void 0!==this.options.label){var i=this.from,o=this.to,n=this.from.selected||this.to.selected||this.selected;if(i.id!=o.id){this.labelModule.pointToSelf=!1;var s=this.edgeType.getPoint(.5,e);t.save(),"horizontal"!==this.options.font.align&&(this.labelModule.calculateLabelSize(t,n,this.hover,s.x,s.y),t.translate(s.x,this.labelModule.size.yLine),this._rotateForLabelAlignment(t)),this.labelModule.draw(t,s.x,s.y,n,this.hover),t.restore()}else{this.labelModule.pointToSelf=!0;var r,a,h=this.options.selfReferenceSize;i.shape.width>i.shape.height?(r=i.x+.5*i.shape.width,a=i.y-h):(r=i.x+h,a=i.y-.5*i.shape.height),s=this._pointOnCircle(r,a,h,.125),this.labelModule.draw(t,s.x,s.y,n,this.hover)}}}},{key:"isOverlappingWith",value:function(t){if(this.connected){var e=this.from.x,i=this.from.y,o=this.to.x,n=this.to.y,s=t.left,r=t.top;return this.edgeType.getDistanceToEdge(e,i,o,n,s,r)<10}return!1}},{key:"_rotateForLabelAlignment",value:function(t){var e=this.from.y-this.to.y,i=this.from.x-this.to.x,o=Math.atan2(e,i);(o<-1&&i<0||o>0&&i<0)&&(o+=Math.PI),t.rotate(o)}},{key:"_pointOnCircle",value:function(t,e,i,o){var n=2*o*Math.PI;return{x:t+i*Math.cos(n),y:e-i*Math.sin(n)}}},{key:"select",value:function(){this.selected=!0}},{key:"unselect",value:function(){this.selected=!1}},{key:"cleanup",value:function(){return this.edgeType.cleanup()}}],[{key:"parseOptions",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=["arrowStrikethrough","id","from","hidden","hoverWidth","label","labelHighlightBold","length","line","opacity","physics","scaling","selectionWidth","selfReferenceSize","to","title","value","width"];if(O.selectiveDeepExtend(n,t,e,i),O.mergeOptions(t,e,"smooth",i,o),O.mergeOptions(t,e,"shadow",i,o),void 0!==e.dashes&&null!==e.dashes?t.dashes=e.dashes:i===!0&&null===e.dashes&&(t.dashes=(0,a.default)(o.dashes)),void 0!==e.scaling&&null!==e.scaling?(void 0!==e.scaling.min&&(t.scaling.min=e.scaling.min),void 0!==e.scaling.max&&(t.scaling.max=e.scaling.max),O.mergeOptions(t.scaling,e.scaling,"label",i,o.scaling)):i===!0&&null===e.scaling&&(t.scaling=(0,a.default)(o.scaling)),void 0!==e.arrows&&null!==e.arrows)if("string"==typeof e.arrows){var r=e.arrows.toLowerCase();t.arrows.to.enabled=r.indexOf("to")!=-1,t.arrows.middle.enabled=r.indexOf("middle")!=-1,t.arrows.from.enabled=r.indexOf("from")!=-1}else{if("object"!==(0,d.default)(e.arrows))throw new Error("The arrow newOptions can only be an object or a string. Refer to the documentation. You used:"+(0,s.default)(e.arrows));O.mergeOptions(t.arrows,e.arrows,"to",i,o.arrows),O.mergeOptions(t.arrows,e.arrows,"middle",i,o.arrows),O.mergeOptions(t.arrows,e.arrows,"from",i,o.arrows)}else i===!0&&null===e.arrows&&(t.arrows=(0,a.default)(o.arrows));if(void 0!==e.color&&null!==e.color)if(t.color=O.deepExtend({},t.color,!0),O.isString(e.color))t.color.color=e.color,t.color.highlight=e.color,t.color.hover=e.color,t.color.inherit=!1;else{var h=!1;void 0!==e.color.color&&(t.color.color=e.color.color,h=!0),void 0!==e.color.highlight&&(t.color.highlight=e.color.highlight,h=!0),void 0!==e.color.hover&&(t.color.hover=e.color.hover,h=!0),void 0!==e.color.inherit&&(t.color.inherit=e.color.inherit),void 0!==e.color.opacity&&(t.color.opacity=Math.min(1,Math.max(0,e.color.opacity))),void 0===e.color.inherit&&h===!0&&(t.color.inherit=!1)}else i===!0&&null===e.color&&(t.color=O.bridgeObject(o.color));void 0!==e.font&&null!==e.font?m.default.parseOptions(t.font,e):i===!0&&null===e.font&&(t.font=O.bridgeObject(o.font))}}]),t}();e.default=S},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(165),s=o(n),r=i(170),a=o(r),h=i(119),d=o(h),l=i(120),u=o(l),c=i(173),p=o(c),f=i(174),m=o(f),v=i(198),g=o(v),y=function(t){function e(t,i,o){return(0,d.default)(this,e),(0,p.default)(this,(e.__proto__||(0,a.default)(e)).call(this,t,i,o))}return(0,m.default)(e,t),(0,u.default)(e,[{key:"_line",value:function(t,e,i){var o=i[0],n=i[1];t.beginPath(),t.moveTo(this.fromPoint.x,this.fromPoint.y),void 0===i||void 0===o.x?t.lineTo(this.toPoint.x,this.toPoint.y):t.bezierCurveTo(o.x,o.y,n.x,n.y,this.toPoint.x,this.toPoint.y),this.enableShadow(t,e),t.stroke(),this.disableShadow(t,e)}},{key:"_getViaCoordinates",value:function(){var t=this.from.x-this.to.x,e=this.from.y-this.to.y,i=void 0,o=void 0,n=void 0,s=void 0,r=this.options.smooth.roundness;return(Math.abs(t)>Math.abs(e)||this.options.smooth.forceDirection===!0||"horizontal"===this.options.smooth.forceDirection)&&"vertical"!==this.options.smooth.forceDirection?(o=this.from.y,s=this.to.y,i=this.from.x-r*t,n=this.to.x+r*t):(o=this.from.y-r*e,s=this.to.y+r*e,i=this.from.x,n=this.to.x),[{x:i,y:o},{x:n,y:s}]}},{key:"getViaNode",value:function(){return this._getViaCoordinates()}},{key:"_findBorderPosition",value:function(t,e){return this._findBorderPositionBezier(t,e)}},{key:"_getDistanceToEdge",value:function(t,e,i,o,n,r){var a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:this._getViaCoordinates(),h=(0,s.default)(a,2),d=h[0],l=h[1];return this._getDistanceToBezierEdge(t,e,i,o,n,r,d,l)}},{key:"getPoint",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._getViaCoordinates(),i=(0,s.default)(e,2),o=i[0],n=i[1],r=t,a=[];return a[0]=Math.pow(1-r,3),a[1]=3*r*Math.pow(1-r,2),a[2]=3*Math.pow(r,2)*(1-r),a[3]=Math.pow(r,3),{x:a[0]*this.fromPoint.x+a[1]*o.x+a[2]*n.x+a[3]*this.toPoint.x,y:a[0]*this.fromPoint.y+a[1]*o.y+a[2]*n.y+a[3]*this.toPoint.y}}}]),e}(g.default);e.default=y},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(170),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(173),u=o(l),c=i(174),p=o(c),f=i(199),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"_getDistanceToBezierEdge",value:function(t,e,i,o,n,s,r,a){var h=1e9,d=void 0,l=void 0,u=void 0,c=void 0,p=void 0,f=t,m=e,v=[0,0,0,0];for(l=1;l<10;l++)u=.1*l,v[0]=Math.pow(1-u,3),v[1]=3*u*Math.pow(1-u,2),v[2]=3*Math.pow(u,2)*(1-u),v[3]=Math.pow(u,3),c=v[0]*t+v[1]*r.x+v[2]*a.x+v[3]*i,p=v[0]*e+v[1]*r.y+v[2]*a.y+v[3]*o,l>0&&(d=this._getDistanceToLine(f,m,c,p,n,s),h=d<h?d:h),f=c,m=p;return h}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(170),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(173),u=o(l),c=i(174),p=o(c),f=i(200),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"_findBorderPositionBezier",value:function(t,e){var i,o,n,s,r,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._getViaCoordinates(),h=0,d=0,l=1,u=this.to,c=!1;for(t.id===this.from.id&&(u=this.from,c=!0);d<=l&&h<10;){var p=.5*(d+l);if(i=this.getPoint(p,a),o=Math.atan2(u.y-i.y,u.x-i.x),n=u.distanceToBorder(e,o),s=Math.sqrt(Math.pow(i.x-u.x,2)+Math.pow(i.y-u.y,2)),r=n-s,Math.abs(r)<.2)break;r<0?c===!1?d=p:l=p:c===!1?l=p:d=p,h++}return i.t=p,i}},{key:"_getDistanceToBezierEdge",value:function(t,e,i,o,n,s,r){var a=1e9,h=void 0,d=void 0,l=void 0,u=void 0,c=void 0,p=t,f=e;for(d=1;d<10;d++)l=.1*d,u=Math.pow(1-l,2)*t+2*l*(1-l)*r.x+Math.pow(l,2)*i,c=Math.pow(1-l,2)*e+2*l*(1-l)*r.y+Math.pow(l,2)*o,d>0&&(h=this._getDistanceToLine(p,f,u,c,n,s),a=h<a?h:a),p=u,f=c;return a}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(165),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(1),u=function(){function t(e,i,o){(0,a.default)(this,t),this.body=i,this.labelModule=o,this.options={},this.setOptions(e),this.colorDirty=!0,this.color={},this.selectionWidth=2,this.hoverWidth=1.5,this.fromPoint=this.from,this.toPoint=this.to}return(0,d.default)(t,[{key:"connect",value:function(){this.from=this.body.nodes[this.options.from],this.to=this.body.nodes[this.options.to]}},{key:"cleanup",value:function(){return!1}},{key:"setOptions",value:function(t){this.options=t,this.from=this.body.nodes[this.options.from],this.to=this.body.nodes[this.options.to],this.id=this.options.id}},{key:"drawLine",value:function(t,e,i,o,n){t.strokeStyle=this.getColor(t,e,i,o),t.lineWidth=e.width,e.dashes!==!1?this._drawDashedLine(t,e,n):this._drawLine(t,e,n)}},{key:"_drawLine",value:function(t,e,i,o,n){if(this.from!=this.to)this._line(t,e,i,o,n);else{var r=this._getCircleData(t),a=(0,s.default)(r,3),h=a[0],d=a[1],l=a[2];this._circle(t,e,h,d,l)}}},{key:"_drawDashedLine",value:function(t,e,i,o,n){t.lineCap="round";var r=[5,5];if(Array.isArray(e.dashes)===!0&&(r=e.dashes),void 0!==t.setLineDash){if(t.save(),t.setLineDash(r),t.lineDashOffset=0,this.from!=this.to)this._line(t,e,i);else{var a=this._getCircleData(t),h=(0,s.default)(a,3),d=h[0],l=h[1],u=h[2];this._circle(t,e,d,l,u)}t.setLineDash([0]),t.lineDashOffset=0,t.restore()}else{if(this.from!=this.to)t.dashedLine(this.from.x,this.from.y,this.to.x,this.to.y,r);else{var c=this._getCircleData(t),p=(0,s.default)(c,3),f=p[0],m=p[1],v=p[2];this._circle(t,e,f,m,v)}this.enableShadow(t,e),t.stroke(),this.disableShadow(t,e)}}},{key:"findBorderPosition",value:function(t,e,i){return this.from!=this.to?this._findBorderPosition(t,e,i):this._findBorderPositionCircle(t,e,i)}},{key:"findBorderPositions",value:function(t){var e={},i={};if(this.from!=this.to)e=this._findBorderPosition(this.from,t),i=this._findBorderPosition(this.to,t);else{var o=this._getCircleData(t),n=(0,s.default)(o,3),r=n[0],a=n[1];n[2];e=this._findBorderPositionCircle(this.from,t,{x:r,y:a,low:.25,high:.6,direction:-1}),i=this._findBorderPositionCircle(this.from,t,{x:r,y:a,low:.6,high:.8,direction:1})}return{from:e,to:i}}},{key:"_getCircleData",value:function(t){var e=void 0,i=void 0,o=this.from,n=this.options.selfReferenceSize;return void 0!==t&&void 0===o.shape.width&&o.shape.resize(t),o.shape.width>o.shape.height?(e=o.x+.5*o.shape.width,i=o.y-n):(e=o.x+n,i=o.y-.5*o.shape.height),[e,i,n]}},{key:"_pointOnCircle",value:function(t,e,i,o){var n=2*o*Math.PI;return{x:t+i*Math.cos(n),y:e-i*Math.sin(n)}}},{key:"_findBorderPositionCircle",value:function(t,e,i){for(var o=i.x,n=i.y,s=i.low,r=i.high,a=i.direction,h=0,d=this.options.selfReferenceSize,l=void 0,u=void 0,c=void 0,p=void 0,f=void 0,m=.5*(s+r);s<=r&&h<10&&(m=.5*(s+r),l=this._pointOnCircle(o,n,d,m),u=Math.atan2(t.y-l.y,t.x-l.x),c=t.distanceToBorder(e,u),p=Math.sqrt(Math.pow(l.x-t.x,2)+Math.pow(l.y-t.y,2)),f=c-p,!(Math.abs(f)<.05));)f>0?a>0?s=m:r=m:a>0?r=m:s=m,h++;return l.t=m,l}},{key:"getLineWidth",value:function(t,e){return t===!0?Math.max(this.selectionWidth,.3/this.body.view.scale):e===!0?Math.max(this.hoverWidth,.3/this.body.view.scale):Math.max(this.options.width,.3/this.body.view.scale)}},{key:"getColor",value:function(t,e,i,o){if(e.inheritsColor!==!1){if("both"===e.inheritsColor&&this.from.id!==this.to.id){var n=t.createLinearGradient(this.from.x,this.from.y,this.to.x,this.to.y),s=void 0,r=void 0;return s=this.from.options.color.highlight.border,r=this.to.options.color.highlight.border,this.from.selected===!1&&this.to.selected===!1?(s=l.overrideOpacity(this.from.options.color.border,e.opacity),r=l.overrideOpacity(this.to.options.color.border,e.opacity)):this.from.selected===!0&&this.to.selected===!1?r=this.to.options.color.border:this.from.selected===!1&&this.to.selected===!0&&(s=this.from.options.color.border),n.addColorStop(0,s),n.addColorStop(1,r),n}return"to"===e.inheritsColor?l.overrideOpacity(this.to.options.color.border,e.opacity):l.overrideOpacity(this.from.options.color.border,e.opacity)}return l.overrideOpacity(e.color,e.opacity)}},{key:"_circle",value:function(t,e,i,o,n){this.enableShadow(t,e),t.beginPath(),t.arc(i,o,n,0,2*Math.PI,!1),t.stroke(),this.disableShadow(t,e)}},{key:"getDistanceToEdge",value:function(t,e,i,o,n,r,a,h){var d=0;if(this.from!=this.to)d=this._getDistanceToEdge(t,e,i,o,n,r,a);else{var l=this._getCircleData(void 0),u=(0,s.default)(l,3),c=u[0],p=u[1],f=u[2],m=c-n,v=p-r;d=Math.abs(Math.sqrt(m*m+v*v)-f)}return this.labelModule.size.left<n&&this.labelModule.size.left+this.labelModule.size.width>n&&this.labelModule.size.top<r&&this.labelModule.size.top+this.labelModule.size.height>r?0:d}},{key:"_getDistanceToLine",value:function(t,e,i,o,n,s){var r=i-t,a=o-e,h=r*r+a*a,d=((n-t)*r+(s-e)*a)/h;d>1?d=1:d<0&&(d=0);var l=t+d*r,u=e+d*a,c=l-n,p=u-s;return Math.sqrt(c*c+p*p)}},{key:"getArrowData",value:function(t,e,i,o,n,r){var a=void 0,h=void 0,d=void 0,l=void 0,u=void 0,c=void 0,p=void 0,f=r.width;if("from"===e?(d=this.from,l=this.to,u=.1,c=r.fromArrowScale,p=r.fromArrowType):"to"===e?(d=this.to,l=this.from,u=-.1,c=r.toArrowScale,p=r.toArrowType):(d=this.to,l=this.from,c=r.middleArrowScale,p=r.middleArrowType),d!=l)if("middle"!==e)if(this.options.smooth.enabled===!0){h=this.findBorderPosition(d,t,{via:i});var m=this.getPoint(Math.max(0,Math.min(1,h.t+u)),i);a=Math.atan2(h.y-m.y,h.x-m.x)}else a=Math.atan2(d.y-l.y,d.x-l.x),h=this.findBorderPosition(d,t);else a=Math.atan2(d.y-l.y,d.x-l.x),h=this.getPoint(.5,i);else{var v=this._getCircleData(t),g=(0,s.default)(v,3),y=g[0],b=g[1],_=g[2];"from"===e?(h=this.findBorderPosition(this.from,t,{x:y,y:b,low:.25,high:.6,direction:-1}),a=h.t*-2*Math.PI+1.5*Math.PI+.1*Math.PI):"to"===e?(h=this.findBorderPosition(this.from,t,{x:y,y:b,low:.6,high:1,direction:1}),a=h.t*-2*Math.PI+1.5*Math.PI-1.1*Math.PI):(h=this._pointOnCircle(y,b,_,.175),a=3.9269908169872414)}var w=15*c+3*f;return{point:h,core:{x:h.x-.9*w*Math.cos(a),y:h.y-.9*w*Math.sin(a)},angle:a,length:w,type:p}}},{key:"drawArrowHead",value:function(t,e,i,o,n){t.strokeStyle=this.getColor(t,e,i,o),t.fillStyle=t.strokeStyle,t.lineWidth=e.width,n.type&&"circle"===n.type.toLowerCase()?t.circleEndpoint(n.point.x,n.point.y,n.angle,n.length):t.arrowEndpoint(n.point.x,n.point.y,n.angle,n.length),this.enableShadow(t,e),t.fill(),this.disableShadow(t,e)}},{key:"enableShadow",value:function(t,e){e.shadow===!0&&(t.shadowColor=e.shadowColor,t.shadowBlur=e.shadowSize,t.shadowOffsetX=e.shadowX,t.shadowOffsetY=e.shadowY)}},{key:"disableShadow",value:function(t,e){e.shadow===!0&&(t.shadowColor="rgba(0,0,0,0)",t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0)}}]),t}();e.default=u},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(165),s=o(n),r=i(170),a=o(r),h=i(119),d=o(h),l=i(120),u=o(l),c=i(173),p=o(c),f=i(174),m=o(f),v=i(199),g=o(v),y=function(t){function e(t,i,o){(0,d.default)(this,e);var n=(0,p.default)(this,(e.__proto__||(0,a.default)(e)).call(this,t,i,o));return n._boundFunction=function(){n.positionBezierNode()},n.body.emitter.on("_repositionBezierNodes",n._boundFunction),n}return(0,m.default)(e,t),(0,u.default)(e,[{key:"setOptions",value:function(t){var e=!1;this.options.physics!==t.physics&&(e=!0),this.options=t,this.id=this.options.id,this.from=this.body.nodes[this.options.from],this.to=this.body.nodes[this.options.to],this.setupSupportNode(),this.connect(),e===!0&&(this.via.setOptions({physics:this.options.physics}),this.positionBezierNode())}},{key:"connect",value:function(){this.from=this.body.nodes[this.options.from],this.to=this.body.nodes[this.options.to],void 0===this.from||void 0===this.to||this.options.physics===!1?this.via.setOptions({physics:!1}):this.from.id===this.to.id?this.via.setOptions({physics:!1}):this.via.setOptions({physics:!0})}},{key:"cleanup",value:function(){return this.body.emitter.off("_repositionBezierNodes",this._boundFunction),void 0!==this.via&&(delete this.body.nodes[this.via.id],this.via=void 0,!0)}},{key:"setupSupportNode",value:function(){if(void 0===this.via){var t="edgeId:"+this.id,e=this.body.functions.createNode({id:t,shape:"circle",physics:!0,hidden:!0});this.body.nodes[t]=e,this.via=e,this.via.parentEdgeId=this.id,this.positionBezierNode()}}},{key:"positionBezierNode",value:function(){void 0!==this.via&&void 0!==this.from&&void 0!==this.to?(this.via.x=.5*(this.from.x+this.to.x),this.via.y=.5*(this.from.y+this.to.y)):void 0!==this.via&&(this.via.x=0,this.via.y=0)}},{key:"_line",value:function(t,e,i){t.beginPath(),t.moveTo(this.fromPoint.x,this.fromPoint.y),void 0===i.x?t.lineTo(this.toPoint.x,this.toPoint.y):t.quadraticCurveTo(i.x,i.y,this.toPoint.x,this.toPoint.y),this.enableShadow(t,e),t.stroke(),this.disableShadow(t,e)}},{key:"getViaNode",value:function(){return this.via}},{key:"getPoint",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.via,i=t,o=void 0,n=void 0;if(this.from===this.to){var r=this._getCircleData(this.from),a=(0,s.default)(r,3),h=a[0],d=a[1],l=a[2],u=2*Math.PI*(1-i);o=h+l*Math.sin(u),n=d+l-l*(1-Math.cos(u))}else o=Math.pow(1-i,2)*this.fromPoint.x+2*i*(1-i)*e.x+Math.pow(i,2)*this.toPoint.x,n=Math.pow(1-i,2)*this.fromPoint.y+2*i*(1-i)*e.y+Math.pow(i,2)*this.toPoint.y;return{x:o,y:n}}},{key:"_findBorderPosition",value:function(t,e){return this._findBorderPositionBezier(t,e,this.via)}},{key:"_getDistanceToEdge",value:function(t,e,i,o,n,s){return this._getDistanceToBezierEdge(t,e,i,o,n,s,this.via)}}]),e}(g.default);e.default=y},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(170),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(173),u=o(l),c=i(174),p=o(c),f=i(199),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"_line",value:function(t,e,i){t.beginPath(),t.moveTo(this.fromPoint.x,this.fromPoint.y),void 0===i.x?t.lineTo(this.toPoint.x,this.toPoint.y):t.quadraticCurveTo(i.x,i.y,this.toPoint.x,this.toPoint.y),this.enableShadow(t,e),t.stroke(),this.disableShadow(t,e)}},{key:"getViaNode",value:function(){return this._getViaCoordinates()}},{key:"_getViaCoordinates",value:function(){var t=void 0,e=void 0,i=this.options.smooth.roundness,o=this.options.smooth.type,n=Math.abs(this.from.x-this.to.x),s=Math.abs(this.from.y-this.to.y);if("discrete"===o||"diagonalCross"===o)Math.abs(this.from.x-this.to.x)<=Math.abs(this.from.y-this.to.y)?(this.from.y>=this.to.y?this.from.x<=this.to.x?(t=this.from.x+i*s,e=this.from.y-i*s):this.from.x>this.to.x&&(t=this.from.x-i*s,e=this.from.y-i*s):this.from.y<this.to.y&&(this.from.x<=this.to.x?(t=this.from.x+i*s,e=this.from.y+i*s):this.from.x>this.to.x&&(t=this.from.x-i*s,e=this.from.y+i*s)),"discrete"===o&&(t=n<i*s?this.from.x:t)):Math.abs(this.from.x-this.to.x)>Math.abs(this.from.y-this.to.y)&&(this.from.y>=this.to.y?this.from.x<=this.to.x?(t=this.from.x+i*n,e=this.from.y-i*n):this.from.x>this.to.x&&(t=this.from.x-i*n,e=this.from.y-i*n):this.from.y<this.to.y&&(this.from.x<=this.to.x?(t=this.from.x+i*n,e=this.from.y+i*n):this.from.x>this.to.x&&(t=this.from.x-i*n,e=this.from.y+i*n)),"discrete"===o&&(e=s<i*n?this.from.y:e));else if("straightCross"===o)Math.abs(this.from.x-this.to.x)<=Math.abs(this.from.y-this.to.y)?(t=this.from.x,e=this.from.y<this.to.y?this.to.y-(1-i)*s:this.to.y+(1-i)*s):Math.abs(this.from.x-this.to.x)>Math.abs(this.from.y-this.to.y)&&(t=this.from.x<this.to.x?this.to.x-(1-i)*n:this.to.x+(1-i)*n,e=this.from.y);else if("horizontal"===o)t=this.from.x<this.to.x?this.to.x-(1-i)*n:this.to.x+(1-i)*n,e=this.from.y;else if("vertical"===o)t=this.from.x,e=this.from.y<this.to.y?this.to.y-(1-i)*s:this.to.y+(1-i)*s;else if("curvedCW"===o){n=this.to.x-this.from.x,s=this.from.y-this.to.y;var r=Math.sqrt(n*n+s*s),a=Math.PI,h=Math.atan2(s,n),d=(h+(.5*i+.5)*a)%(2*a);t=this.from.x+(.5*i+.5)*r*Math.sin(d),e=this.from.y+(.5*i+.5)*r*Math.cos(d)}else if("curvedCCW"===o){n=this.to.x-this.from.x,s=this.from.y-this.to.y;var l=Math.sqrt(n*n+s*s),u=Math.PI,c=Math.atan2(s,n),p=(c+(.5*-i+.5)*u)%(2*u);t=this.from.x+(.5*i+.5)*l*Math.sin(p),e=this.from.y+(.5*i+.5)*l*Math.cos(p)}else Math.abs(this.from.x-this.to.x)<=Math.abs(this.from.y-this.to.y)?this.from.y>=this.to.y?this.from.x<=this.to.x?(t=this.from.x+i*s,e=this.from.y-i*s,t=this.to.x<t?this.to.x:t):this.from.x>this.to.x&&(t=this.from.x-i*s,e=this.from.y-i*s,t=this.to.x>t?this.to.x:t):this.from.y<this.to.y&&(this.from.x<=this.to.x?(t=this.from.x+i*s,e=this.from.y+i*s,t=this.to.x<t?this.to.x:t):this.from.x>this.to.x&&(t=this.from.x-i*s,e=this.from.y+i*s,t=this.to.x>t?this.to.x:t)):Math.abs(this.from.x-this.to.x)>Math.abs(this.from.y-this.to.y)&&(this.from.y>=this.to.y?this.from.x<=this.to.x?(t=this.from.x+i*n,e=this.from.y-i*n,e=this.to.y>e?this.to.y:e):this.from.x>this.to.x&&(t=this.from.x-i*n,e=this.from.y-i*n,e=this.to.y>e?this.to.y:e):this.from.y<this.to.y&&(this.from.x<=this.to.x?(t=this.from.x+i*n,e=this.from.y+i*n,e=this.to.y<e?this.to.y:e):this.from.x>this.to.x&&(t=this.from.x-i*n,e=this.from.y+i*n,e=this.to.y<e?this.to.y:e)));return{x:t,y:e}}},{key:"_findBorderPosition",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this._findBorderPositionBezier(t,e,i.via)}},{key:"_getDistanceToEdge",value:function(t,e,i,o,n,s){var r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:this._getViaCoordinates();return this._getDistanceToBezierEdge(t,e,i,o,n,s,r)}},{key:"getPoint",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._getViaCoordinates(),i=t;return{x:Math.pow(1-i,2)*this.fromPoint.x+2*i*(1-i)*e.x+Math.pow(i,2)*this.toPoint.x,y:Math.pow(1-i,2)*this.fromPoint.y+2*i*(1-i)*e.y+Math.pow(i,2)*this.toPoint.y}}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(170),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(173),u=o(l),c=i(174),p=o(c),f=i(200),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"_line",value:function(t,e){t.beginPath(),t.moveTo(this.fromPoint.x,this.fromPoint.y),t.lineTo(this.toPoint.x,this.toPoint.y),this.enableShadow(t,e),t.stroke(),this.disableShadow(t,e)}},{key:"getViaNode",value:function(){}},{key:"getPoint",value:function(t){return{x:(1-t)*this.fromPoint.x+t*this.toPoint.x,y:(1-t)*this.fromPoint.y+t*this.toPoint.y}}},{key:"_findBorderPosition",value:function(t,e){var i=this.to,o=this.from;t.id===this.from.id&&(i=this.from,o=this.to);var n=Math.atan2(i.y-o.y,i.x-o.x),s=i.x-o.x,r=i.y-o.y,a=Math.sqrt(s*s+r*r),h=t.distanceToBorder(e,n),d=(a-h)/a,l={};return l.x=(1-d)*o.x+d*i.x,l.y=(1-d)*o.y+d*i.y,l}},{key:"_getDistanceToEdge",value:function(t,e,i,o,n,s){return this._getDistanceToLine(t,e,i,o,n,s)}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(58),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(205),u=o(l),c=i(206),p=o(c),f=i(207),m=o(f),v=i(208),g=o(v),y=i(209),b=o(y),_=i(210),w=o(_),x=i(211),k=o(x),O=i(212),S=o(O),M=i(1),D=function(){function t(e){(0,a.default)(this,t),this.body=e,this.physicsBody={physicsNodeIndices:[],physicsEdgeIndices:[],forces:{},velocities:{}},this.physicsEnabled=!0,this.simulationInterval=1e3/60,this.requiresTimeout=!0,this.previousStates={},this.referenceState={},this.freezeCache={},this.renderTimer=void 0,this.adaptiveTimestep=!1,this.adaptiveTimestepEnabled=!1,this.adaptiveCounter=0,this.adaptiveInterval=3,this.stabilized=!1,this.startedStabilization=!1,this.stabilizationIterations=0,this.ready=!1,this.options={},this.defaultOptions={enabled:!0,barnesHut:{theta:.5,gravitationalConstant:-2e3,centralGravity:.3,springLength:95,springConstant:.04,damping:.09,avoidOverlap:0},forceAtlas2Based:{theta:.5,gravitationalConstant:-50,centralGravity:.01,springConstant:.08,springLength:100,damping:.4,avoidOverlap:0},repulsion:{centralGravity:.2,springLength:200,springConstant:.05,nodeDistance:100,damping:.09,avoidOverlap:0},hierarchicalRepulsion:{centralGravity:0,springLength:100,springConstant:.01,nodeDistance:120,damping:.09},maxVelocity:50,minVelocity:.75,solver:"barnesHut",stabilization:{enabled:!0,iterations:1e3,updateInterval:50,onlyDynamicEdges:!1,fit:!0},timestep:.5,adaptiveTimestep:!0},M.extend(this.options,this.defaultOptions),this.timestep=.5,this.layoutFailed=!1,this.bindEventListeners()}return(0,d.default)(t,[{key:"bindEventListeners",value:function(){var t=this;this.body.emitter.on("initPhysics",function(){t.initPhysics()}),this.body.emitter.on("_layoutFailed",function(){t.layoutFailed=!0}),this.body.emitter.on("resetPhysics",function(){t.stopSimulation(),t.ready=!1}),this.body.emitter.on("disablePhysics",function(){t.physicsEnabled=!1,t.stopSimulation()}),this.body.emitter.on("restorePhysics",function(){t.setOptions(t.options),t.ready===!0&&t.startSimulation()}),this.body.emitter.on("startSimulation",function(){t.ready===!0&&t.startSimulation()}),this.body.emitter.on("stopSimulation",function(){t.stopSimulation()}),this.body.emitter.on("destroy",function(){t.stopSimulation(!1),t.body.emitter.off()}),this.body.emitter.on("_dataChanged",function(){t.updatePhysicsData()})}},{key:"setOptions",value:function(t){void 0!==t&&(t===!1?(this.options.enabled=!1,this.physicsEnabled=!1,this.stopSimulation()):(this.physicsEnabled=!0,M.selectiveNotDeepExtend(["stabilization"],this.options,t),M.mergeOptions(this.options,t,"stabilization"),void 0===t.enabled&&(this.options.enabled=!0),this.options.enabled===!1&&(this.physicsEnabled=!1,this.stopSimulation()),this.timestep=this.options.timestep)),this.init()}},{key:"init",value:function(){var t;"forceAtlas2Based"===this.options.solver?(t=this.options.forceAtlas2Based,this.nodesSolver=new k.default(this.body,this.physicsBody,t),this.edgesSolver=new g.default(this.body,this.physicsBody,t),
this.gravitySolver=new S.default(this.body,this.physicsBody,t)):"repulsion"===this.options.solver?(t=this.options.repulsion,this.nodesSolver=new p.default(this.body,this.physicsBody,t),this.edgesSolver=new g.default(this.body,this.physicsBody,t),this.gravitySolver=new w.default(this.body,this.physicsBody,t)):"hierarchicalRepulsion"===this.options.solver?(t=this.options.hierarchicalRepulsion,this.nodesSolver=new m.default(this.body,this.physicsBody,t),this.edgesSolver=new b.default(this.body,this.physicsBody,t),this.gravitySolver=new w.default(this.body,this.physicsBody,t)):(t=this.options.barnesHut,this.nodesSolver=new u.default(this.body,this.physicsBody,t),this.edgesSolver=new g.default(this.body,this.physicsBody,t),this.gravitySolver=new w.default(this.body,this.physicsBody,t)),this.modelOptions=t}},{key:"initPhysics",value:function(){this.physicsEnabled===!0&&this.options.enabled===!0?this.options.stabilization.enabled===!0?this.stabilize():(this.stabilized=!1,this.ready=!0,this.body.emitter.emit("fit",{},this.layoutFailed),this.startSimulation()):(this.ready=!0,this.body.emitter.emit("fit"))}},{key:"startSimulation",value:function(){this.physicsEnabled===!0&&this.options.enabled===!0?(this.stabilized=!1,this.adaptiveTimestep=!1,this.body.emitter.emit("_resizeNodes"),void 0===this.viewFunction&&(this.viewFunction=this.simulationStep.bind(this),this.body.emitter.on("initRedraw",this.viewFunction),this.body.emitter.emit("_startRendering"))):this.body.emitter.emit("_redraw")}},{key:"stopSimulation",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.stabilized=!0,t===!0&&this._emitStabilized(),void 0!==this.viewFunction&&(this.body.emitter.off("initRedraw",this.viewFunction),this.viewFunction=void 0,t===!0&&this.body.emitter.emit("_stopRendering"))}},{key:"simulationStep",value:function(){var t=Date.now();this.physicsTick(),(Date.now()-t<.4*this.simulationInterval||this.runDoubleSpeed===!0)&&this.stabilized===!1&&(this.physicsTick(),this.runDoubleSpeed=!0),this.stabilized===!0&&this.stopSimulation()}},{key:"_emitStabilized",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.stabilizationIterations;(this.stabilizationIterations>1||this.startedStabilization===!0)&&setTimeout(function(){t.body.emitter.emit("stabilized",{iterations:e}),t.startedStabilization=!1,t.stabilizationIterations=0},0)}},{key:"physicsTick",value:function(){if(this.startedStabilization===!1&&(this.body.emitter.emit("startStabilizing"),this.startedStabilization=!0),this.stabilized===!1){if(this.adaptiveTimestep===!0&&this.adaptiveTimestepEnabled===!0){this.adaptiveCounter%this.adaptiveInterval==0?(this.timestep=2*this.timestep,this.calculateForces(),this.moveNodes(),this.revert(),this.timestep=.5*this.timestep,this.calculateForces(),this.moveNodes(),this.calculateForces(),this.moveNodes(),this._evaluateStepQuality()===!0?this.timestep=1.2*this.timestep:this.timestep/1.2<this.options.timestep?this.timestep=this.options.timestep:(this.adaptiveCounter=-1,this.timestep=Math.max(this.options.timestep,this.timestep/1.2))):(this.calculateForces(),this.moveNodes()),this.adaptiveCounter+=1}else this.timestep=this.options.timestep,this.calculateForces(),this.moveNodes();this.stabilized===!0&&this.revert(),this.stabilizationIterations++}}},{key:"updatePhysicsData",value:function(){this.physicsBody.forces={},this.physicsBody.physicsNodeIndices=[],this.physicsBody.physicsEdgeIndices=[];var t=this.body.nodes,e=this.body.edges;for(var i in t)t.hasOwnProperty(i)&&t[i].options.physics===!0&&this.physicsBody.physicsNodeIndices.push(t[i].id);for(var o in e)e.hasOwnProperty(o)&&e[o].options.physics===!0&&this.physicsBody.physicsEdgeIndices.push(e[o].id);for(var n=0;n<this.physicsBody.physicsNodeIndices.length;n++){var s=this.physicsBody.physicsNodeIndices[n];this.physicsBody.forces[s]={x:0,y:0},void 0===this.physicsBody.velocities[s]&&(this.physicsBody.velocities[s]={x:0,y:0})}for(var r in this.physicsBody.velocities)void 0===t[r]&&delete this.physicsBody.velocities[r]}},{key:"revert",value:function(){var t=(0,s.default)(this.previousStates),e=this.body.nodes,i=this.physicsBody.velocities;this.referenceState={};for(var o=0;o<t.length;o++){var n=t[o];void 0!==e[n]?e[n].options.physics===!0&&(this.referenceState[n]={positions:{x:e[n].x,y:e[n].y}},i[n].x=this.previousStates[n].vx,i[n].y=this.previousStates[n].vy,e[n].x=this.previousStates[n].x,e[n].y=this.previousStates[n].y):delete this.previousStates[n]}}},{key:"_evaluateStepQuality",value:function(){var t=void 0,e=void 0,i=this.body.nodes,o=this.referenceState;for(var n in this.referenceState)if(this.referenceState.hasOwnProperty(n)&&void 0!==i[n]&&(t=i[n].x-o[n].positions.x,e=i[n].y-o[n].positions.y,Math.sqrt(Math.pow(t,2)+Math.pow(e,2))>.3))return!1;return!0}},{key:"moveNodes",value:function(){for(var t=this.physicsBody.physicsNodeIndices,e=this.options.maxVelocity?this.options.maxVelocity:1e9,i=0,o=0,n=0;n<t.length;n++){var s=t[n],r=this._performStep(s,e);i=Math.max(i,r),o+=r}this.adaptiveTimestepEnabled=o/t.length<5,this.stabilized=i<this.options.minVelocity}},{key:"_performStep",value:function(t,e){var i=this.body.nodes[t],o=this.timestep,n=this.physicsBody.forces,s=this.physicsBody.velocities;if(this.previousStates[t]={x:i.x,y:i.y,vx:s[t].x,vy:s[t].y},i.options.fixed.x===!1){var r=this.modelOptions.damping*s[t].x,a=(n[t].x-r)/i.options.mass;s[t].x+=a*o,s[t].x=Math.abs(s[t].x)>e?s[t].x>0?e:-e:s[t].x,i.x+=s[t].x*o}else n[t].x=0,s[t].x=0;if(i.options.fixed.y===!1){var h=this.modelOptions.damping*s[t].y,d=(n[t].y-h)/i.options.mass;s[t].y+=d*o,s[t].y=Math.abs(s[t].y)>e?s[t].y>0?e:-e:s[t].y,i.y+=s[t].y*o}else n[t].y=0,s[t].y=0;return Math.sqrt(Math.pow(s[t].x,2)+Math.pow(s[t].y,2))}},{key:"calculateForces",value:function(){this.gravitySolver.solve(),this.nodesSolver.solve(),this.edgesSolver.solve()}},{key:"_freezeNodes",value:function(){var t=this.body.nodes;for(var e in t)t.hasOwnProperty(e)&&t[e].x&&t[e].y&&(this.freezeCache[e]={x:t[e].options.fixed.x,y:t[e].options.fixed.y},t[e].options.fixed.x=!0,t[e].options.fixed.y=!0)}},{key:"_restoreFrozenNodes",value:function(){var t=this.body.nodes;for(var e in t)t.hasOwnProperty(e)&&void 0!==this.freezeCache[e]&&(t[e].options.fixed.x=this.freezeCache[e].x,t[e].options.fixed.y=this.freezeCache[e].y);this.freezeCache={}}},{key:"stabilize",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.stabilization.iterations;if("number"!=typeof e&&(console.log("The stabilize method needs a numeric amount of iterations. Switching to default: ",this.options.stabilization.iterations),e=this.options.stabilization.iterations),0===this.physicsBody.physicsNodeIndices.length)return void(this.ready=!0);this.adaptiveTimestep=this.options.adaptiveTimestep,this.body.emitter.emit("_resizeNodes"),this.stopSimulation(),this.stabilized=!1,this.body.emitter.emit("_blockRedraw"),this.targetIterations=e,this.options.stabilization.onlyDynamicEdges===!0&&this._freezeNodes(),this.stabilizationIterations=0,setTimeout(function(){return t._stabilizationBatch()},0)}},{key:"_stabilizationBatch",value:function(){this.startedStabilization===!1&&(this.body.emitter.emit("startStabilizing"),this.startedStabilization=!0);for(var t=0;this.stabilized===!1&&t<this.options.stabilization.updateInterval&&this.stabilizationIterations<this.targetIterations;)this.physicsTick(),t++;this.stabilized===!1&&this.stabilizationIterations<this.targetIterations?(this.body.emitter.emit("stabilizationProgress",{iterations:this.stabilizationIterations,total:this.targetIterations}),setTimeout(this._stabilizationBatch.bind(this),0)):this._finalizeStabilization()}},{key:"_finalizeStabilization",value:function(){this.body.emitter.emit("_allowRedraw"),this.options.stabilization.fit===!0&&this.body.emitter.emit("fit"),this.options.stabilization.onlyDynamicEdges===!0&&this._restoreFrozenNodes(),this.body.emitter.emit("stabilizationIterationsDone"),this.body.emitter.emit("_requestRedraw"),this.stabilized===!0?this._emitStabilized():this.startSimulation(),this.ready=!0}},{key:"_drawForces",value:function(t){for(var e=0;e<this.physicsBody.physicsNodeIndices.length;e++){var i=this.body.nodes[this.physicsBody.physicsNodeIndices[e]],o=this.physicsBody.forces[this.physicsBody.physicsNodeIndices[e]],n=Math.sqrt(Math.pow(o.x,2)+Math.pow(o.x,2)),s=Math.min(Math.max(5,n),15),r=3*s,a=M.HSVToHex((180-180*Math.min(1,Math.max(0,.03*n)))/360,1,1);t.lineWidth=s,t.strokeStyle=a,t.beginPath(),t.moveTo(i.x,i.y),t.lineTo(i.x+20*o.x,i.y+20*o.y),t.stroke();var h=Math.atan2(o.y,o.x);t.fillStyle=a,t.arrowEndpoint(i.x+20*o.x+Math.cos(h)*r,i.y+20*o.y+Math.sin(h)*r,h,r),t.fill()}}}]),t}();e.default=D},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(119),s=o(n),r=i(120),a=o(r),h=function(){function t(e,i,o){(0,s.default)(this,t),this.body=e,this.physicsBody=i,this.barnesHutTree,this.setOptions(o),this.randomSeed=5}return(0,a.default)(t,[{key:"setOptions",value:function(t){this.options=t,this.thetaInversed=1/this.options.theta,this.overlapAvoidanceFactor=1-Math.max(0,Math.min(1,this.options.avoidOverlap))}},{key:"seededRandom",value:function(){var t=1e4*Math.sin(this.randomSeed++);return t-Math.floor(t)}},{key:"solve",value:function(){if(0!==this.options.gravitationalConstant&&this.physicsBody.physicsNodeIndices.length>0){var t=void 0,e=this.body.nodes,i=this.physicsBody.physicsNodeIndices,o=i.length,n=this._formBarnesHutTree(e,i);this.barnesHutTree=n;for(var s=0;s<o;s++)t=e[i[s]],t.options.mass>0&&(this._getForceContribution(n.root.children.NW,t),this._getForceContribution(n.root.children.NE,t),this._getForceContribution(n.root.children.SW,t),this._getForceContribution(n.root.children.SE,t))}}},{key:"_getForceContribution",value:function(t,e){if(t.childrenCount>0){var i=void 0,o=void 0,n=void 0;i=t.centerOfMass.x-e.x,o=t.centerOfMass.y-e.y,n=Math.sqrt(i*i+o*o),n*t.calcSize>this.thetaInversed?this._calculateForces(n,i,o,e,t):4===t.childrenCount?(this._getForceContribution(t.children.NW,e),this._getForceContribution(t.children.NE,e),this._getForceContribution(t.children.SW,e),this._getForceContribution(t.children.SE,e)):t.children.data.id!=e.id&&this._calculateForces(n,i,o,e,t)}}},{key:"_calculateForces",value:function(t,e,i,o,n){0===t&&(t=.1,e=t),this.overlapAvoidanceFactor<1&&o.shape.radius&&(t=Math.max(.1+this.overlapAvoidanceFactor*o.shape.radius,t-o.shape.radius));var s=this.options.gravitationalConstant*n.mass*o.options.mass/Math.pow(t,3),r=e*s,a=i*s;this.physicsBody.forces[o.id].x+=r,this.physicsBody.forces[o.id].y+=a}},{key:"_formBarnesHutTree",value:function(t,e){for(var i=void 0,o=e.length,n=t[e[0]].x,s=t[e[0]].y,r=t[e[0]].x,a=t[e[0]].y,h=1;h<o;h++){var d=t[e[h]].x,l=t[e[h]].y;t[e[h]].options.mass>0&&(d<n&&(n=d),d>r&&(r=d),l<s&&(s=l),l>a&&(a=l))}var u=Math.abs(r-n)-Math.abs(a-s);u>0?(s-=.5*u,a+=.5*u):(n+=.5*u,r-=.5*u);var c=Math.max(1e-5,Math.abs(r-n)),p=.5*c,f=.5*(n+r),m=.5*(s+a),v={root:{centerOfMass:{x:0,y:0},mass:0,range:{minX:f-p,maxX:f+p,minY:m-p,maxY:m+p},size:c,calcSize:1/c,children:{data:null},maxWidth:0,level:0,childrenCount:4}};this._splitBranch(v.root);for(var g=0;g<o;g++)i=t[e[g]],i.options.mass>0&&this._placeInTree(v.root,i);return v}},{key:"_updateBranchMass",value:function(t,e){var i=t.mass+e.options.mass,o=1/i;t.centerOfMass.x=t.centerOfMass.x*t.mass+e.x*e.options.mass,t.centerOfMass.x*=o,t.centerOfMass.y=t.centerOfMass.y*t.mass+e.y*e.options.mass,t.centerOfMass.y*=o,t.mass=i;var n=Math.max(Math.max(e.height,e.radius),e.width);t.maxWidth=t.maxWidth<n?n:t.maxWidth}},{key:"_placeInTree",value:function(t,e,i){1==i&&void 0!==i||this._updateBranchMass(t,e),t.children.NW.range.maxX>e.x?t.children.NW.range.maxY>e.y?this._placeInRegion(t,e,"NW"):this._placeInRegion(t,e,"SW"):t.children.NW.range.maxY>e.y?this._placeInRegion(t,e,"NE"):this._placeInRegion(t,e,"SE")}},{key:"_placeInRegion",value:function(t,e,i){switch(t.children[i].childrenCount){case 0:t.children[i].children.data=e,t.children[i].childrenCount=1,this._updateBranchMass(t.children[i],e);break;case 1:t.children[i].children.data.x===e.x&&t.children[i].children.data.y===e.y?(e.x+=this.seededRandom(),e.y+=this.seededRandom()):(this._splitBranch(t.children[i]),this._placeInTree(t.children[i],e));break;case 4:this._placeInTree(t.children[i],e)}}},{key:"_splitBranch",value:function(t){var e=null;1===t.childrenCount&&(e=t.children.data,t.mass=0,t.centerOfMass.x=0,t.centerOfMass.y=0),t.childrenCount=4,t.children.data=null,this._insertRegion(t,"NW"),this._insertRegion(t,"NE"),this._insertRegion(t,"SW"),this._insertRegion(t,"SE"),null!=e&&this._placeInTree(t,e)}},{key:"_insertRegion",value:function(t,e){var i=void 0,o=void 0,n=void 0,s=void 0,r=.5*t.size;switch(e){case"NW":i=t.range.minX,o=t.range.minX+r,n=t.range.minY,s=t.range.minY+r;break;case"NE":i=t.range.minX+r,o=t.range.maxX,n=t.range.minY,s=t.range.minY+r;break;case"SW":i=t.range.minX,o=t.range.minX+r,n=t.range.minY+r,s=t.range.maxY;break;case"SE":i=t.range.minX+r,o=t.range.maxX,n=t.range.minY+r,s=t.range.maxY}t.children[e]={centerOfMass:{x:0,y:0},mass:0,range:{minX:i,maxX:o,minY:n,maxY:s},size:.5*t.size,calcSize:2*t.calcSize,children:{data:null},maxWidth:0,level:t.level+1,childrenCount:0}}},{key:"_debug",value:function(t,e){void 0!==this.barnesHutTree&&(t.lineWidth=1,this._drawBranch(this.barnesHutTree.root,t,e))}},{key:"_drawBranch",value:function(t,e,i){void 0===i&&(i="#FF0000"),4===t.childrenCount&&(this._drawBranch(t.children.NW,e),this._drawBranch(t.children.NE,e),this._drawBranch(t.children.SE,e),this._drawBranch(t.children.SW,e)),e.strokeStyle=i,e.beginPath(),e.moveTo(t.range.minX,t.range.minY),e.lineTo(t.range.maxX,t.range.minY),e.stroke(),e.beginPath(),e.moveTo(t.range.maxX,t.range.minY),e.lineTo(t.range.maxX,t.range.maxY),e.stroke(),e.beginPath(),e.moveTo(t.range.maxX,t.range.maxY),e.lineTo(t.range.minX,t.range.maxY),e.stroke(),e.beginPath(),e.moveTo(t.range.minX,t.range.maxY),e.lineTo(t.range.minX,t.range.minY),e.stroke()}}]),t}();e.default=h},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(119),s=o(n),r=i(120),a=o(r),h=function(){function t(e,i,o){(0,s.default)(this,t),this.body=e,this.physicsBody=i,this.setOptions(o)}return(0,a.default)(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"solve",value:function(){for(var t,e,i,o,n,s,r,a,h=this.body.nodes,d=this.physicsBody.physicsNodeIndices,l=this.physicsBody.forces,u=this.options.nodeDistance,c=-2/3/u,p=0;p<d.length-1;p++){r=h[d[p]];for(var f=p+1;f<d.length;f++)a=h[d[f]],t=a.x-r.x,e=a.y-r.y,i=Math.sqrt(t*t+e*e),0===i&&(i=.1*Math.random(),t=i),i<2*u&&(s=i<.5*u?1:c*i+4/3,s/=i,o=t*s,n=e*s,l[r.id].x-=o,l[r.id].y-=n,l[a.id].x+=o,l[a.id].y+=n)}}}]),t}();e.default=h},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(119),s=o(n),r=i(120),a=o(r),h=function(){function t(e,i,o){(0,s.default)(this,t),this.body=e,this.physicsBody=i,this.setOptions(o)}return(0,a.default)(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"solve",value:function(){var t,e,i,o,n,s,r,a,h,d,l=this.body.nodes,u=this.physicsBody.physicsNodeIndices,c=this.physicsBody.forces,p=this.options.nodeDistance;for(h=0;h<u.length-1;h++)for(r=l[u[h]],d=h+1;d<u.length;d++)if(a=l[u[d]],r.level===a.level){t=a.x-r.x,e=a.y-r.y,i=Math.sqrt(t*t+e*e);s=i<p?-Math.pow(.05*i,2)+Math.pow(.05*p,2):0,0===i?i=.01:s/=i,o=t*s,n=e*s,c[r.id].x-=o,c[r.id].y-=n,c[a.id].x+=o,c[a.id].y+=n}}}]),t}();e.default=h},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(119),s=o(n),r=i(120),a=o(r),h=function(){function t(e,i,o){(0,s.default)(this,t),this.body=e,this.physicsBody=i,this.setOptions(o)}return(0,a.default)(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"solve",value:function(){for(var t=void 0,e=void 0,i=this.physicsBody.physicsEdgeIndices,o=this.body.edges,n=void 0,s=void 0,r=void 0,a=0;a<i.length;a++)e=o[i[a]],e.connected===!0&&e.toId!==e.fromId&&void 0!==this.body.nodes[e.toId]&&void 0!==this.body.nodes[e.fromId]&&(void 0!==e.edgeType.via?(t=void 0===e.options.length?this.options.springLength:e.options.length,n=e.to,s=e.edgeType.via,r=e.from,this._calculateSpringForce(n,s,.5*t),this._calculateSpringForce(s,r,.5*t)):(t=void 0===e.options.length?1.5*this.options.springLength:e.options.length,this._calculateSpringForce(e.from,e.to,t)))}},{key:"_calculateSpringForce",value:function(t,e,i){var o=t.x-e.x,n=t.y-e.y,s=Math.max(Math.sqrt(o*o+n*n),.01),r=this.options.springConstant*(i-s)/s,a=o*r,h=n*r;void 0!==this.physicsBody.forces[t.id]&&(this.physicsBody.forces[t.id].x+=a,this.physicsBody.forces[t.id].y+=h),void 0!==this.physicsBody.forces[e.id]&&(this.physicsBody.forces[e.id].x-=a,this.physicsBody.forces[e.id].y-=h)}}]),t}();e.default=h},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(119),s=o(n),r=i(120),a=o(r),h=function(){function t(e,i,o){(0,s.default)(this,t),this.body=e,this.physicsBody=i,this.setOptions(o)}return(0,a.default)(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"solve",value:function(){for(var t,e,i,o,n,s,r,a,h=this.body.edges,d=this.physicsBody.physicsEdgeIndices,l=this.physicsBody.physicsNodeIndices,u=this.physicsBody.forces,c=0;c<l.length;c++){var p=l[c];u[p].springFx=0,u[p].springFy=0}for(var f=0;f<d.length;f++)e=h[d[f]],e.connected===!0&&(t=void 0===e.options.length?this.options.springLength:e.options.length,i=e.from.x-e.to.x,o=e.from.y-e.to.y,a=Math.sqrt(i*i+o*o),a=0===a?.01:a,r=this.options.springConstant*(t-a)/a,n=i*r,s=o*r,e.to.level!=e.from.level?(void 0!==u[e.toId]&&(u[e.toId].springFx-=n,u[e.toId].springFy-=s),void 0!==u[e.fromId]&&(u[e.fromId].springFx+=n,u[e.fromId].springFy+=s)):(void 0!==u[e.toId]&&(u[e.toId].x-=.5*n,u[e.toId].y-=.5*s),void 0!==u[e.fromId]&&(u[e.fromId].x+=.5*n,u[e.fromId].y+=.5*s)));for(var m,v,r=1,g=0;g<l.length;g++){var y=l[g];m=Math.min(r,Math.max(-r,u[y].springFx)),v=Math.min(r,Math.max(-r,u[y].springFy)),u[y].x+=m,u[y].y+=v}for(var b=0,_=0,w=0;w<l.length;w++){var x=l[w];b+=u[x].x,_+=u[x].y}for(var k=b/l.length,O=_/l.length,S=0;S<l.length;S++){var M=l[S];u[M].x-=k,u[M].y-=O}}}]),t}();e.default=h},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(119),s=o(n),r=i(120),a=o(r),h=function(){function t(e,i,o){(0,s.default)(this,t),this.body=e,this.physicsBody=i,this.setOptions(o)}return(0,a.default)(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"solve",value:function(){for(var t=void 0,e=void 0,i=void 0,o=void 0,n=this.body.nodes,s=this.physicsBody.physicsNodeIndices,r=this.physicsBody.forces,a=0;a<s.length;a++){o=n[s[a]],t=-o.x,e=-o.y,i=Math.sqrt(t*t+e*e),this._calculateForces(i,t,e,r,o)}}},{key:"_calculateForces",value:function(t,e,i,o,n){var s=0===t?0:this.options.centralGravity/t;o[n.id].x=e*s,o[n.id].y=i*s}}]),t}();e.default=h},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(170),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(173),u=o(l),c=i(174),p=o(c),f=i(205),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"_calculateForces",value:function(t,e,i,o,n){0===t&&(t=.1*Math.random(),e=t),this.overlapAvoidanceFactor<1&&o.shape.radius&&(t=Math.max(.1+this.overlapAvoidanceFactor*o.shape.radius,t-o.shape.radius));var s=o.edges.length+1,r=this.options.gravitationalConstant*n.mass*o.options.mass*s/Math.pow(t,2),a=e*r,h=i*r;this.physicsBody.forces[o.id].x+=a,this.physicsBody.forces[o.id].y+=h}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(170),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(173),u=o(l),c=i(174),p=o(c),f=i(210),m=o(f),v=function(t){function e(t,i,o){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o))}return(0,p.default)(e,t),(0,d.default)(e,[{key:"_calculateForces",value:function(t,e,i,o,n){if(t>0){var s=n.edges.length+1,r=this.options.centralGravity*s*n.options.mass;o[n.id].x=e*r,o[n.id].y=i*r}}}]),e}(m.default);e.default=v},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(58),s=o(n),r=i(62),a=o(r),h=i(119),d=o(h),l=i(120),u=o(l),c=i(214),p=o(c),f=i(215),m=o(f),v=i(1),g=function(){function t(e){var i=this;(0,d.default)(this,t),this.body=e,this.clusteredNodes={},this.clusteredEdges={},this.options={},this.defaultOptions={},v.extend(this.options,this.defaultOptions),this.body.emitter.on("_resetData",function(){i.clusteredNodes={},i.clusteredEdges={}})}return(0,u.default)(t,[{key:"clusterByHubsize",value:function(t,e){void 0===t?t=this._getHubSize():"object"===(void 0===t?"undefined":(0,a.default)(t))&&(e=this._checkOptions(t),t=this._getHubSize());for(var i=[],o=0;o<this.body.nodeIndices.length;o++){var n=this.body.nodes[this.body.nodeIndices[o]];n.edges.length>=t&&i.push(n.id)}for(var s=0;s<i.length;s++)this.clusterByConnection(i[s],e,!0);this.body.emitter.emit("_dataChanged")}},{key:"cluster",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(void 0===t.joinCondition)throw new Error("Cannot call clusterByNodeData without a joinCondition function in the options.");t=this._checkOptions(t);for(var i={},o={},n=0;n<this.body.nodeIndices.length;n++){var s=this.body.nodeIndices[n],r=this.body.nodes[s],a=p.default.cloneOptions(r);if(t.joinCondition(a)===!0){i[s]=this.body.nodes[s];for(var h=0;h<r.edges.length;h++){var d=r.edges[h];void 0===this.clusteredEdges[d.id]&&(o[d.id]=d)}}}this._cluster(i,o,t,e)}},{key:"clusterByEdgeCount",value:function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];e=this._checkOptions(e);for(var o=[],n={},r=void 0,a=void 0,h=void 0,d=void 0,l=void 0,u=0;u<this.body.nodeIndices.length;u++){var c={},f={};if(d=this.body.nodeIndices[u],void 0===n[d]){l=0,h=this.body.nodes[d],a=[];for(var m=0;m<h.edges.length;m++)r=h.edges[m],void 0===this.clusteredEdges[r.id]&&(r.toId!==r.fromId&&l++,a.push(r));if(l===t){for(var v=!0,g=0;g<a.length;g++){r=a[g];var y=this._getConnectedId(r,d);if(void 0===e.joinCondition)f[r.id]=r,c[d]=this.body.nodes[d],c[y]=this.body.nodes[y],n[d]=!0;else{var b=p.default.cloneOptions(this.body.nodes[d]);if(e.joinCondition(b)!==!0){v=!1;break}f[r.id]=r,c[d]=this.body.nodes[d],n[d]=!0}}(0,s.default)(c).length>0&&(0,s.default)(f).length>0&&v===!0&&o.push({nodes:c,edges:f})}}}for(var _=0;_<o.length;_++)this._cluster(o[_].nodes,o[_].edges,e,!1);i===!0&&this.body.emitter.emit("_dataChanged")}},{key:"clusterOutliers",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.clusterByEdgeCount(1,t,e)}},{key:"clusterBridges",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.clusterByEdgeCount(2,t,e)}},{key:"clusterByConnection",value:function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(void 0===t)throw new Error("No nodeId supplied to clusterByConnection!");if(void 0===this.body.nodes[t])throw new Error("The nodeId given to clusterByConnection does not exist!");var o=this.body.nodes[t];e=this._checkOptions(e,o),void 0===e.clusterNodeProperties.x&&(e.clusterNodeProperties.x=o.x),void 0===e.clusterNodeProperties.y&&(e.clusterNodeProperties.y=o.y),void 0===e.clusterNodeProperties.fixed&&(e.clusterNodeProperties.fixed={},e.clusterNodeProperties.fixed.x=o.options.fixed.x,e.clusterNodeProperties.fixed.y=o.options.fixed.y);var n={},r={},a=o.id,h=p.default.cloneOptions(o);n[a]=o;for(var d=0;d<o.edges.length;d++){var l=o.edges[d];if(void 0===this.clusteredEdges[l.id]){var u=this._getConnectedId(l,a);if(void 0===this.clusteredNodes[u])if(u!==a)if(void 0===e.joinCondition)r[l.id]=l,n[u]=this.body.nodes[u];else{var c=p.default.cloneOptions(this.body.nodes[u]);e.joinCondition(h,c)===!0&&(r[l.id]=l,n[u]=this.body.nodes[u])}else r[l.id]=l}}var f=(0,s.default)(n).map(function(t){return n[t].id});for(m in n)for(var m=n[m],v=0;v<m.edges.length;v++){var g=m.edges[v];f.indexOf(this._getConnectedId(g,m.id))>-1&&(r[g.id]=g)}this._cluster(n,r,e,i)}},{key:"_createClusterEdges",value:function(t,e,i,o){for(var n=void 0,r=void 0,a=void 0,h=void 0,d=void 0,l=void 0,u=(0,s.default)(t),c=[],f=0;f<u.length;f++){r=u[f],a=t[r];for(var m=0;m<a.edges.length;m++)n=a.edges[m],void 0===this.clusteredEdges[n.id]&&(n.toId==n.fromId?e[n.id]=n:n.toId==r?(h=i.id,d=n.fromId,l=d):(h=n.toId,d=i.id,l=h),void 0===t[l]&&c.push({edge:n,fromId:d,toId:h}))}for(var g=0;g<c.length;g++){var y=c[g].edge,b=p.default.cloneOptions(y,"edge");v.deepExtend(b,o),b.from=c[g].fromId,b.to=c[g].toId,b.id="clusterEdge:"+v.randomUUID();var _=this.body.functions.createEdge(b);_.clusteringEdgeReplacingId=y.id,this.body.edges[y.id].edgeReplacedById=_.id,this.body.edges[_.id]=_,_.connect(),this._backupEdgeOptions(y),y.setOptions({physics:!1,hidden:!0})}}},{key:"_checkOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return void 0===t.clusterEdgeProperties&&(t.clusterEdgeProperties={}),void 0===t.clusterNodeProperties&&(t.clusterNodeProperties={}),t}},{key:"_cluster",value:function(t,e,i){var o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(0!=(0,s.default)(t).length&&(1!=(0,s.default)(t).length||1==i.clusterNodeProperties.allowSingleNodeCluster)){for(var n in t)if(t.hasOwnProperty(n)&&void 0!==this.clusteredNodes[n])return;var r=v.deepExtend({},i.clusterNodeProperties);if(void 0!==i.processProperties){var a=[];for(var h in t)if(t.hasOwnProperty(h)){var d=p.default.cloneOptions(t[h]);a.push(d)}var l=[];for(var u in e)if(e.hasOwnProperty(u)&&"clusterEdge:"!==u.substr(0,12)){var c=p.default.cloneOptions(e[u],"edge");l.push(c)}if(!(r=i.processProperties(r,a,l)))throw new Error("The processProperties function does not return properties!")}void 0===r.id&&(r.id="cluster:"+v.randomUUID());var f=r.id;void 0===r.label&&(r.label="cluster");var g=void 0;void 0===r.x&&(g=this._getClusterPosition(t),r.x=g.x),void 0===r.y&&(void 0===g&&(g=this._getClusterPosition(t)),r.y=g.y),r.id=f;var y=this.body.functions.createNode(r,m.default);y.isCluster=!0,y.containedNodes=t,y.containedEdges=e,y.clusterEdgeProperties=i.clusterEdgeProperties,this.body.nodes[r.id]=y,this._createClusterEdges(t,e,r,i.clusterEdgeProperties);for(var b in e)if(e.hasOwnProperty(b)&&void 0!==this.body.edges[b]){var _=this.body.edges[b];this._backupEdgeOptions(_),_.setOptions({physics:!1,hidden:!0})}for(var w in t)t.hasOwnProperty(w)&&(this.clusteredNodes[w]={clusterId:r.id,node:this.body.nodes[w]},this.body.nodes[w].setOptions({hidden:!0,physics:!1}));r.id=void 0,o===!0&&this.body.emitter.emit("_dataChanged")}}},{key:"_backupEdgeOptions",value:function(t){void 0===this.clusteredEdges[t.id]&&(this.clusteredEdges[t.id]={physics:t.options.physics,hidden:t.options.hidden})}},{key:"_restoreEdge",value:function(t){var e=this.clusteredEdges[t.id];void 0!==e&&(t.setOptions({physics:e.physics,hidden:e.hidden}),delete this.clusteredEdges[t.id])}},{key:"isCluster",value:function(t){return void 0!==this.body.nodes[t]?this.body.nodes[t].isCluster===!0:(console.log("Node does not exist."),!1)}},{key:"_getClusterPosition",value:function(t){for(var e=(0,s.default)(t),i=t[e[0]].x,o=t[e[0]].x,n=t[e[0]].y,r=t[e[0]].y,a=void 0,h=1;h<e.length;h++)a=t[e[h]],i=a.x<i?a.x:i,o=a.x>o?a.x:o,n=a.y<n?a.y:n,r=a.y>r?a.y:r;return{x:.5*(i+o),y:.5*(n+r)}}},{key:"openCluster",value:function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(void 0===t)throw new Error("No clusterNodeId supplied to openCluster.");if(void 0===this.body.nodes[t])throw new Error("The clusterNodeId supplied to openCluster does not exist.");if(void 0===this.body.nodes[t].containedNodes)return void console.log("The node:"+t+" is not a cluster.");var o=this.body.nodes[t],n=o.containedNodes,s=o.containedEdges;if(void 0!==e&&void 0!==e.releaseFunction&&"function"==typeof e.releaseFunction){var r={},a={x:o.x,y:o.y};for(var h in n)if(n.hasOwnProperty(h)){var d=this.body.nodes[h];r[h]={x:d.x,y:d.y}}var l=e.releaseFunction(a,r);for(var u in n)if(n.hasOwnProperty(u)){var c=this.body.nodes[u];void 0!==l[u]&&(c.x=void 0===l[u].x?o.x:l[u].x,c.y=void 0===l[u].y?o.y:l[u].y)}}else for(var f in n)if(n.hasOwnProperty(f)){var m=this.body.nodes[f];m=n[f],m.options.fixed.x===!1&&(m.x=o.x),m.options.fixed.y===!1&&(m.y=o.y)}for(var g in n)if(n.hasOwnProperty(g)){var y=this.body.nodes[g];y.vx=o.vx,y.vy=o.vy,y.setOptions({hidden:!1,physics:!0}),delete this.clusteredNodes[g]}for(var b=[],_=0;_<o.edges.length;_++)b.push(o.edges[_]);for(var w=0;w<b.length;w++){var x=b[w],k=this._getConnectedId(x,t);if(void 0!==this.clusteredNodes[k]){var O=this.body.nodes[this.clusteredNodes[k].clusterId],S=this.body.edges[x.clusteringEdgeReplacingId];if(void 0!==S){O.containedEdges[S.id]=S,delete s[S.id];var M=S.fromId,D=S.toId;S.toId==k?D=this.clusteredNodes[k].clusterId:M=this.clusteredNodes[k].clusterId;var C=p.default.cloneOptions(S,"edge");v.deepExtend(C,O.clusterEdgeProperties);var T="clusterEdge:"+v.randomUUID();v.deepExtend(C,{from:M,to:D,hidden:!1,physics:!0,id:T});var E=this.body.functions.createEdge(C);E.clusteringEdgeReplacingId=S.id,this.body.edges[T]=E,this.body.edges[T].connect()}}else{var P=this.body.edges[x.clusteringEdgeReplacingId];void 0!==P&&this._restoreEdge(P)}x.cleanup(),x.disconnect(),delete this.body.edges[x.id]}for(var I in s)s.hasOwnProperty(I)&&this._restoreEdge(s[I]);delete this.body.nodes[t],i===!0&&this.body.emitter.emit("_dataChanged")}},{key:"getNodesInCluster",value:function(t){var e=[];if(this.isCluster(t)===!0){var i=this.body.nodes[t].containedNodes;for(var o in i)i.hasOwnProperty(o)&&e.push(this.body.nodes[o].id)}return e}},{key:"findNode",value:function(t){for(var e=[],i=0;void 0!==this.clusteredNodes[t]&&i<100;)e.push(this.body.nodes[t].id),t=this.clusteredNodes[t].clusterId,i++;return e.push(this.body.nodes[t].id),e.reverse(),e}},{key:"updateClusteredNode",value:function(t,e){if(void 0===t)throw new Error("No clusteredNodeId supplied to updateClusteredNode.");if(void 0===e)throw new Error("No newOptions supplied to updateClusteredNode.");if(void 0===this.body.nodes[t])throw new Error("The clusteredNodeId supplied to updateClusteredNode does not exist.");this.body.nodes[t].setOptions(e),this.body.emitter.emit("_dataChanged")}},{key:"updateEdge",value:function(t,e){if(void 0===t)throw new Error("No startEdgeId supplied to updateEdge.");if(void 0===e)throw new Error("No newOptions supplied to updateEdge.");if(void 0===this.body.edges[t])throw new Error("The startEdgeId supplied to updateEdge does not exist.");for(var i=this.getClusteredEdges(t),o=0;o<i.length;o++){this.body.edges[i[o]].setOptions(e)}this.body.emitter.emit("_dataChanged")}},{key:"getClusteredEdges",value:function(t){for(var e=[],i=0;void 0!==t&&void 0!==this.body.edges[t]&&i<100;)e.push(this.body.edges[t].id),t=this.body.edges[t].edgeReplacedById,i++;return e.reverse(),e}},{key:"getBaseEdge",value:function(t){for(var e=t,i=0;void 0!==t&&void 0!==this.body.edges[t]&&i<100;)t=this.body.edges[t].clusteringEdgeReplacingId,i++,void 0!==t&&(e=t);return e}},{key:"_getConnectedId",value:function(t,e){return t.toId!=e?t.toId:(t.fromId,t.fromId)}},{key:"_getHubSize",value:function(){for(var t=0,e=0,i=0,o=0,n=0;n<this.body.nodeIndices.length;n++){var s=this.body.nodes[this.body.nodeIndices[n]];s.edges.length>o&&(o=s.edges.length),t+=s.edges.length,e+=Math.pow(s.edges.length,2),i+=1}t/=i,e/=i
;var r=e-Math.pow(t,2),a=Math.sqrt(r),h=Math.floor(t+2*a);return h>o&&(h=o),h}}]),t}();e.default=g},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(119),s=o(n),r=i(120),a=o(r),h=i(1),d=function(){function t(){(0,s.default)(this,t)}return(0,a.default)(t,null,[{key:"getRange",value:function(t){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=1e9,n=-1e9,s=1e9,r=-1e9;if(i.length>0)for(var a=0;a<i.length;a++)e=t[i[a]],s>e.shape.boundingBox.left&&(s=e.shape.boundingBox.left),r<e.shape.boundingBox.right&&(r=e.shape.boundingBox.right),o>e.shape.boundingBox.top&&(o=e.shape.boundingBox.top),n<e.shape.boundingBox.bottom&&(n=e.shape.boundingBox.bottom);return 1e9===s&&r===-1e9&&1e9===o&&n===-1e9&&(o=0,n=0,s=0,r=0),{minX:s,maxX:r,minY:o,maxY:n}}},{key:"getRangeCore",value:function(t){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=1e9,n=-1e9,s=1e9,r=-1e9;if(i.length>0)for(var a=0;a<i.length;a++)e=t[i[a]],s>e.x&&(s=e.x),r<e.x&&(r=e.x),o>e.y&&(o=e.y),n<e.y&&(n=e.y);return 1e9===s&&r===-1e9&&1e9===o&&n===-1e9&&(o=0,n=0,s=0,r=0),{minX:s,maxX:r,minY:o,maxY:n}}},{key:"findCenter",value:function(t){return{x:.5*(t.maxX+t.minX),y:.5*(t.maxY+t.minY)}}},{key:"cloneOptions",value:function(t,e){var i={};return void 0===e||"node"===e?(h.deepExtend(i,t.options,!0),i.x=t.x,i.y=t.y,i.amountOfConnections=t.edges.length):h.deepExtend(i,t.options,!0),i}}]),t}();e.default=d},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(170),s=o(n),r=i(119),a=o(r),h=i(173),d=o(h),l=i(174),u=o(l),c=i(163),p=o(c),f=function(t){function e(t,i,o,n,r){(0,a.default)(this,e);var h=(0,d.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t,i,o,n,r));return h.isCluster=!0,h.containedNodes={},h.containedEdges={},h}return(0,u.default)(e,t),e}(p.default);e.default=f},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(119),s=o(n),r=i(120),a=o(r);"undefined"!=typeof window&&(window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame);var h=i(1),d=function(){function t(e,i){(0,s.default)(this,t),this.body=e,this.canvas=i,this.redrawRequested=!1,this.renderTimer=void 0,this.requiresTimeout=!0,this.renderingActive=!1,this.renderRequests=0,this.pixelRatio=void 0,this.allowRedraw=!0,this.dragging=!1,this.options={},this.defaultOptions={hideEdgesOnDrag:!1,hideNodesOnDrag:!1},h.extend(this.options,this.defaultOptions),this._determineBrowserMethod(),this.bindEventListeners()}return(0,a.default)(t,[{key:"bindEventListeners",value:function(){var t=this;this.body.emitter.on("dragStart",function(){t.dragging=!0}),this.body.emitter.on("dragEnd",function(){t.dragging=!1}),this.body.emitter.on("_resizeNodes",function(){t._resizeNodes()}),this.body.emitter.on("_redraw",function(){t.renderingActive===!1&&t._redraw()}),this.body.emitter.on("_blockRedraw",function(){t.allowRedraw=!1}),this.body.emitter.on("_allowRedraw",function(){t.allowRedraw=!0,t.redrawRequested=!1}),this.body.emitter.on("_requestRedraw",this._requestRedraw.bind(this)),this.body.emitter.on("_startRendering",function(){t.renderRequests+=1,t.renderingActive=!0,t._startRendering()}),this.body.emitter.on("_stopRendering",function(){t.renderRequests-=1,t.renderingActive=t.renderRequests>0,t.renderTimer=void 0}),this.body.emitter.on("destroy",function(){t.renderRequests=0,t.allowRedraw=!1,t.renderingActive=!1,t.requiresTimeout===!0?clearTimeout(t.renderTimer):cancelAnimationFrame(t.renderTimer),t.body.emitter.off()})}},{key:"setOptions",value:function(t){if(void 0!==t){var e=["hideEdgesOnDrag","hideNodesOnDrag"];h.selectiveDeepExtend(e,this.options,t)}}},{key:"_startRendering",value:function(){this.renderingActive===!0&&void 0===this.renderTimer&&(this.requiresTimeout===!0?this.renderTimer=window.setTimeout(this._renderStep.bind(this),this.simulationInterval):this.renderTimer=window.requestAnimationFrame(this._renderStep.bind(this)))}},{key:"_renderStep",value:function(){this.renderingActive===!0&&(this.renderTimer=void 0,this.requiresTimeout===!0&&this._startRendering(),this._redraw(),this.requiresTimeout===!1&&this._startRendering())}},{key:"redraw",value:function(){this.body.emitter.emit("setSize"),this._redraw()}},{key:"_requestRedraw",value:function(){var t=this;this.redrawRequested!==!0&&this.renderingActive===!1&&this.allowRedraw===!0&&(this.redrawRequested=!0,this.requiresTimeout===!0?window.setTimeout(function(){t._redraw(!1)},0):window.requestAnimationFrame(function(){t._redraw(!1)}))}},{key:"_redraw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.allowRedraw===!0){this.body.emitter.emit("initRedraw"),this.redrawRequested=!1;var e=this.canvas.frame.canvas.getContext("2d");0!==this.canvas.frame.canvas.width&&0!==this.canvas.frame.canvas.height||this.canvas.setSize(),this.pixelRatio=(window.devicePixelRatio||1)/(e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1),e.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0);var i=this.canvas.frame.canvas.clientWidth,o=this.canvas.frame.canvas.clientHeight;if(e.clearRect(0,0,i,o),0===this.canvas.frame.clientWidth)return;e.save(),e.translate(this.body.view.translation.x,this.body.view.translation.y),e.scale(this.body.view.scale,this.body.view.scale),e.beginPath(),this.body.emitter.emit("beforeDrawing",e),e.closePath(),t===!1&&(this.dragging===!1||this.dragging===!0&&this.options.hideEdgesOnDrag===!1)&&this._drawEdges(e),(this.dragging===!1||this.dragging===!0&&this.options.hideNodesOnDrag===!1)&&this._drawNodes(e,t),e.beginPath(),this.body.emitter.emit("afterDrawing",e),e.closePath(),e.restore(),t===!0&&e.clearRect(0,0,i,o)}}},{key:"_resizeNodes",value:function(){var t=this.canvas.frame.canvas.getContext("2d");void 0===this.pixelRatio&&(this.pixelRatio=(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)),t.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0),t.save(),t.translate(this.body.view.translation.x,this.body.view.translation.y),t.scale(this.body.view.scale,this.body.view.scale);var e=this.body.nodes,i=void 0;for(var o in e)e.hasOwnProperty(o)&&(i=e[o],i.resize(t),i.updateBoundingBox(t,i.selected));t.restore()}},{key:"_drawNodes",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.body.nodes,o=this.body.nodeIndices,n=void 0,s=[],r=this.canvas.DOMtoCanvas({x:-20,y:-20}),a=this.canvas.DOMtoCanvas({x:this.canvas.frame.canvas.clientWidth+20,y:this.canvas.frame.canvas.clientHeight+20}),h={top:r.y,left:r.x,bottom:a.y,right:a.x},d=0;d<o.length;d++)n=i[o[d]],n.isSelected()?s.push(o[d]):e===!0?n.draw(t):n.isBoundingBoxOverlappingWith(h)===!0?n.draw(t):n.updateBoundingBox(t,n.selected);for(var l=0;l<s.length;l++)n=i[s[l]],n.draw(t)}},{key:"_drawEdges",value:function(t){for(var e=this.body.edges,i=this.body.edgeIndices,o=void 0,n=0;n<i.length;n++)o=e[i[n]],o.connected===!0&&o.draw(t)}},{key:"_determineBrowserMethod",value:function(){if("undefined"!=typeof window){var t=navigator.userAgent.toLowerCase();this.requiresTimeout=!1,t.indexOf("msie 9.0")!=-1?this.requiresTimeout=!0:t.indexOf("safari")!=-1&&t.indexOf("chrome")<=-1&&(this.requiresTimeout=!0)}else this.requiresTimeout=!0}}]),t}();e.default=d},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(119),s=o(n),r=i(120),a=o(r),h=i(112),d=i(125),l=i(1),u=function(){function t(e){(0,s.default)(this,t),this.body=e,this.pixelRatio=1,this.resizeTimer=void 0,this.resizeFunction=this._onResize.bind(this),this.cameraState={},this.initialized=!1,this.canvasViewCenter={},this.options={},this.defaultOptions={autoResize:!0,height:"100%",width:"100%"},l.extend(this.options,this.defaultOptions),this.bindEventListeners()}return(0,a.default)(t,[{key:"bindEventListeners",value:function(){var t=this;this.body.emitter.once("resize",function(e){0!==e.width&&(t.body.view.translation.x=.5*e.width),0!==e.height&&(t.body.view.translation.y=.5*e.height)}),this.body.emitter.on("setSize",this.setSize.bind(this)),this.body.emitter.on("destroy",function(){t.hammerFrame.destroy(),t.hammer.destroy(),t._cleanUp()})}},{key:"setOptions",value:function(t){var e=this;if(void 0!==t){var i=["width","height","autoResize"];l.selectiveDeepExtend(i,this.options,t)}this.options.autoResize===!0&&(this._cleanUp(),this.resizeTimer=setInterval(function(){e.setSize()===!0&&e.body.emitter.emit("_requestRedraw")},1e3),this.resizeFunction=this._onResize.bind(this),l.addEventListener(window,"resize",this.resizeFunction))}},{key:"_cleanUp",value:function(){void 0!==this.resizeTimer&&clearInterval(this.resizeTimer),l.removeEventListener(window,"resize",this.resizeFunction),this.resizeFunction=void 0}},{key:"_onResize",value:function(){this.setSize(),this.body.emitter.emit("_redraw")}},{key:"_getCameraState",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.pixelRatio;this.initialized===!0&&(this.cameraState.previousWidth=this.frame.canvas.width/t,this.cameraState.previousHeight=this.frame.canvas.height/t,this.cameraState.scale=this.body.view.scale,this.cameraState.position=this.DOMtoCanvas({x:.5*this.frame.canvas.width/t,y:.5*this.frame.canvas.height/t}))}},{key:"_setCameraState",value:function(){if(void 0!==this.cameraState.scale&&0!==this.frame.canvas.clientWidth&&0!==this.frame.canvas.clientHeight&&0!==this.pixelRatio&&this.cameraState.previousWidth>0){var t=this.frame.canvas.width/this.pixelRatio/this.cameraState.previousWidth,e=this.frame.canvas.height/this.pixelRatio/this.cameraState.previousHeight,i=this.cameraState.scale;1!=t&&1!=e?i=.5*this.cameraState.scale*(t+e):1!=t?i=this.cameraState.scale*t:1!=e&&(i=this.cameraState.scale*e),this.body.view.scale=i;var o=this.DOMtoCanvas({x:.5*this.frame.canvas.clientWidth,y:.5*this.frame.canvas.clientHeight}),n={x:o.x-this.cameraState.position.x,y:o.y-this.cameraState.position.y};this.body.view.translation.x+=n.x*this.body.view.scale,this.body.view.translation.y+=n.y*this.body.view.scale}}},{key:"_prepareValue",value:function(t){if("number"==typeof t)return t+"px";if("string"==typeof t){if(t.indexOf("%")!==-1||t.indexOf("px")!==-1)return t;if(t.indexOf("%")===-1)return t+"px"}throw new Error("Could not use the value supplied for width or height:"+t)}},{key:"_create",value:function(){for(;this.body.container.hasChildNodes();)this.body.container.removeChild(this.body.container.firstChild);if(this.frame=document.createElement("div"),this.frame.className="vis-network",this.frame.style.position="relative",this.frame.style.overflow="hidden",this.frame.tabIndex=900,this.frame.canvas=document.createElement("canvas"),this.frame.canvas.style.position="relative",this.frame.appendChild(this.frame.canvas),this.frame.canvas.getContext){var t=this.frame.canvas.getContext("2d");this.pixelRatio=(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1),this.frame.canvas.getContext("2d").setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0)}else{var e=document.createElement("DIV");e.style.color="red",e.style.fontWeight="bold",e.style.padding="10px",e.innerHTML="Error: your browser does not support HTML canvas",this.frame.canvas.appendChild(e)}this.body.container.appendChild(this.frame),this.body.view.scale=1,this.body.view.translation={x:.5*this.frame.canvas.clientWidth,y:.5*this.frame.canvas.clientHeight},this._bindHammer()}},{key:"_bindHammer",value:function(){var t=this;void 0!==this.hammer&&this.hammer.destroy(),this.drag={},this.pinch={},this.hammer=new h(this.frame.canvas),this.hammer.get("pinch").set({enable:!0}),this.hammer.get("pan").set({threshold:5,direction:h.DIRECTION_ALL}),d.onTouch(this.hammer,function(e){t.body.eventListeners.onTouch(e)}),this.hammer.on("tap",function(e){t.body.eventListeners.onTap(e)}),this.hammer.on("doubletap",function(e){t.body.eventListeners.onDoubleTap(e)}),this.hammer.on("press",function(e){t.body.eventListeners.onHold(e)}),this.hammer.on("panstart",function(e){t.body.eventListeners.onDragStart(e)}),this.hammer.on("panmove",function(e){t.body.eventListeners.onDrag(e)}),this.hammer.on("panend",function(e){t.body.eventListeners.onDragEnd(e)}),this.hammer.on("pinch",function(e){t.body.eventListeners.onPinch(e)}),this.frame.canvas.addEventListener("mousewheel",function(e){t.body.eventListeners.onMouseWheel(e)}),this.frame.canvas.addEventListener("DOMMouseScroll",function(e){t.body.eventListeners.onMouseWheel(e)}),this.frame.canvas.addEventListener("mousemove",function(e){t.body.eventListeners.onMouseMove(e)}),this.frame.canvas.addEventListener("contextmenu",function(e){t.body.eventListeners.onContext(e)}),this.hammerFrame=new h(this.frame),d.onRelease(this.hammerFrame,function(e){t.body.eventListeners.onRelease(e)})}},{key:"setSize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.width,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.height;t=this._prepareValue(t),e=this._prepareValue(e);var i=!1,o=this.frame.canvas.width,n=this.frame.canvas.height,s=this.frame.canvas.getContext("2d"),r=this.pixelRatio;return this.pixelRatio=(window.devicePixelRatio||1)/(s.webkitBackingStorePixelRatio||s.mozBackingStorePixelRatio||s.msBackingStorePixelRatio||s.oBackingStorePixelRatio||s.backingStorePixelRatio||1),t!=this.options.width||e!=this.options.height||this.frame.style.width!=t||this.frame.style.height!=e?(this._getCameraState(r),this.frame.style.width=t,this.frame.style.height=e,this.frame.canvas.style.width="100%",this.frame.canvas.style.height="100%",this.frame.canvas.width=Math.round(this.frame.canvas.clientWidth*this.pixelRatio),this.frame.canvas.height=Math.round(this.frame.canvas.clientHeight*this.pixelRatio),this.options.width=t,this.options.height=e,this.canvasViewCenter={x:.5*this.frame.clientWidth,y:.5*this.frame.clientHeight},i=!0):(this.frame.canvas.width==Math.round(this.frame.canvas.clientWidth*this.pixelRatio)&&this.frame.canvas.height==Math.round(this.frame.canvas.clientHeight*this.pixelRatio)||this._getCameraState(r),this.frame.canvas.width!=Math.round(this.frame.canvas.clientWidth*this.pixelRatio)&&(this.frame.canvas.width=Math.round(this.frame.canvas.clientWidth*this.pixelRatio),i=!0),this.frame.canvas.height!=Math.round(this.frame.canvas.clientHeight*this.pixelRatio)&&(this.frame.canvas.height=Math.round(this.frame.canvas.clientHeight*this.pixelRatio),i=!0)),i===!0&&(this.body.emitter.emit("resize",{width:Math.round(this.frame.canvas.width/this.pixelRatio),height:Math.round(this.frame.canvas.height/this.pixelRatio),oldWidth:Math.round(o/this.pixelRatio),oldHeight:Math.round(n/this.pixelRatio)}),this._setCameraState()),this.initialized=!0,i}},{key:"_XconvertDOMtoCanvas",value:function(t){return(t-this.body.view.translation.x)/this.body.view.scale}},{key:"_XconvertCanvasToDOM",value:function(t){return t*this.body.view.scale+this.body.view.translation.x}},{key:"_YconvertDOMtoCanvas",value:function(t){return(t-this.body.view.translation.y)/this.body.view.scale}},{key:"_YconvertCanvasToDOM",value:function(t){return t*this.body.view.scale+this.body.view.translation.y}},{key:"canvasToDOM",value:function(t){return{x:this._XconvertCanvasToDOM(t.x),y:this._YconvertCanvasToDOM(t.y)}}},{key:"DOMtoCanvas",value:function(t){return{x:this._XconvertDOMtoCanvas(t.x),y:this._YconvertDOMtoCanvas(t.y)}}}]),t}();e.default=u},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(119),s=o(n),r=i(120),a=o(r),h=i(214),d=o(h),l=i(1),u=function(){function t(e,i){var o=this;(0,s.default)(this,t),this.body=e,this.canvas=i,this.animationSpeed=1/this.renderRefreshRate,this.animationEasingFunction="easeInOutQuint",this.easingTime=0,this.sourceScale=0,this.targetScale=0,this.sourceTranslation=0,this.targetTranslation=0,this.lockedOnNodeId=void 0,this.lockedOnNodeOffset=void 0,this.touchTime=0,this.viewFunction=void 0,this.body.emitter.on("fit",this.fit.bind(this)),this.body.emitter.on("animationFinished",function(){o.body.emitter.emit("_stopRendering")}),this.body.emitter.on("unlockNode",this.releaseNode.bind(this))}return(0,a.default)(t,[{key:"setOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.options=t}},{key:"fit",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{nodes:[]},e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=void 0,o=void 0;if(void 0!==t.nodes&&0!==t.nodes.length||(t.nodes=this.body.nodeIndices),e===!0){var n=0;for(var s in this.body.nodes)if(this.body.nodes.hasOwnProperty(s)){var r=this.body.nodes[s];r.predefinedPosition===!0&&(n+=1)}if(n>.5*this.body.nodeIndices.length)return void this.fit(t,!1);i=d.default.getRange(this.body.nodes,t.nodes);o=12.662/(this.body.nodeIndices.length+7.4147)+.0964822;o*=Math.min(this.canvas.frame.canvas.clientWidth/600,this.canvas.frame.canvas.clientHeight/600)}else{this.body.emitter.emit("_resizeNodes"),i=d.default.getRange(this.body.nodes,t.nodes);var a=1.1*Math.abs(i.maxX-i.minX),h=1.1*Math.abs(i.maxY-i.minY),l=this.canvas.frame.canvas.clientWidth/a,u=this.canvas.frame.canvas.clientHeight/h;o=l<=u?l:u}o>1?o=1:0===o&&(o=1);var c=d.default.findCenter(i),p={position:c,scale:o,animation:t.animation};this.moveTo(p)}},{key:"focus",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(void 0!==this.body.nodes[t]){var i={x:this.body.nodes[t].x,y:this.body.nodes[t].y};e.position=i,e.lockedOnNode=t,this.moveTo(e)}else console.log("Node: "+t+" cannot be found.")}},{key:"moveTo",value:function(t){if(void 0===t)return void(t={});void 0===t.offset&&(t.offset={x:0,y:0}),void 0===t.offset.x&&(t.offset.x=0),void 0===t.offset.y&&(t.offset.y=0),void 0===t.scale&&(t.scale=this.body.view.scale),void 0===t.position&&(t.position=this.getViewPosition()),void 0===t.animation&&(t.animation={duration:0}),t.animation===!1&&(t.animation={duration:0}),t.animation===!0&&(t.animation={}),void 0===t.animation.duration&&(t.animation.duration=1e3),void 0===t.animation.easingFunction&&(t.animation.easingFunction="easeInOutQuad"),this.animateView(t)}},{key:"animateView",value:function(t){if(void 0!==t){this.animationEasingFunction=t.animation.easingFunction,this.releaseNode(),t.locked===!0&&(this.lockedOnNodeId=t.lockedOnNode,this.lockedOnNodeOffset=t.offset),0!=this.easingTime&&this._transitionRedraw(!0),this.sourceScale=this.body.view.scale,this.sourceTranslation=this.body.view.translation,this.targetScale=t.scale,this.body.view.scale=this.targetScale;var e=this.canvas.DOMtoCanvas({x:.5*this.canvas.frame.canvas.clientWidth,y:.5*this.canvas.frame.canvas.clientHeight}),i={x:e.x-t.position.x,y:e.y-t.position.y};this.targetTranslation={x:this.sourceTranslation.x+i.x*this.targetScale+t.offset.x,y:this.sourceTranslation.y+i.y*this.targetScale+t.offset.y},0===t.animation.duration?void 0!=this.lockedOnNodeId?(this.viewFunction=this._lockedRedraw.bind(this),this.body.emitter.on("initRedraw",this.viewFunction)):(this.body.view.scale=this.targetScale,this.body.view.translation=this.targetTranslation,this.body.emitter.emit("_requestRedraw")):(this.animationSpeed=1/(60*t.animation.duration*.001)||1/60,this.animationEasingFunction=t.animation.easingFunction,this.viewFunction=this._transitionRedraw.bind(this),this.body.emitter.on("initRedraw",this.viewFunction),this.body.emitter.emit("_startRendering"))}}},{key:"_lockedRedraw",value:function(){var t={x:this.body.nodes[this.lockedOnNodeId].x,y:this.body.nodes[this.lockedOnNodeId].y},e=this.canvas.DOMtoCanvas({x:.5*this.canvas.frame.canvas.clientWidth,y:.5*this.canvas.frame.canvas.clientHeight}),i={x:e.x-t.x,y:e.y-t.y},o=this.body.view.translation,n={x:o.x+i.x*this.body.view.scale+this.lockedOnNodeOffset.x,y:o.y+i.y*this.body.view.scale+this.lockedOnNodeOffset.y};this.body.view.translation=n}},{key:"releaseNode",value:function(){void 0!==this.lockedOnNodeId&&void 0!==this.viewFunction&&(this.body.emitter.off("initRedraw",this.viewFunction),this.lockedOnNodeId=void 0,this.lockedOnNodeOffset=void 0)}},{key:"_transitionRedraw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.easingTime+=this.animationSpeed,this.easingTime=t===!0?1:this.easingTime;var e=l.easingFunctions[this.animationEasingFunction](this.easingTime);this.body.view.scale=this.sourceScale+(this.targetScale-this.sourceScale)*e,this.body.view.translation={x:this.sourceTranslation.x+(this.targetTranslation.x-this.sourceTranslation.x)*e,y:this.sourceTranslation.y+(this.targetTranslation.y-this.sourceTranslation.y)*e},this.easingTime>=1&&(this.body.emitter.off("initRedraw",this.viewFunction),this.easingTime=0,void 0!=this.lockedOnNodeId&&(this.viewFunction=this._lockedRedraw.bind(this),this.body.emitter.on("initRedraw",this.viewFunction)),this.body.emitter.emit("animationFinished"))}},{key:"getScale",value:function(){return this.body.view.scale}},{key:"getViewPosition",value:function(){return this.canvas.DOMtoCanvas({x:.5*this.canvas.frame.canvas.clientWidth,y:.5*this.canvas.frame.canvas.clientHeight})}}]),t}();e.default=u},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(119),s=o(n),r=i(120),a=o(r),h=i(220),d=o(h),l=i(132),u=o(l),c=i(1),p=function(){function t(e,i,o){(0,s.default)(this,t),this.body=e,this.canvas=i,this.selectionHandler=o,this.navigationHandler=new d.default(e,i),this.body.eventListeners.onTap=this.onTap.bind(this),this.body.eventListeners.onTouch=this.onTouch.bind(this),this.body.eventListeners.onDoubleTap=this.onDoubleTap.bind(this),this.body.eventListeners.onHold=this.onHold.bind(this),this.body.eventListeners.onDragStart=this.onDragStart.bind(this),this.body.eventListeners.onDrag=this.onDrag.bind(this),this.body.eventListeners.onDragEnd=this.onDragEnd.bind(this),this.body.eventListeners.onMouseWheel=this.onMouseWheel.bind(this),this.body.eventListeners.onPinch=this.onPinch.bind(this),this.body.eventListeners.onMouseMove=this.onMouseMove.bind(this),this.body.eventListeners.onRelease=this.onRelease.bind(this),this.body.eventListeners.onContext=this.onContext.bind(this),this.touchTime=0,this.drag={},this.pinch={},this.popup=void 0,this.popupObj=void 0,this.popupTimer=void 0,this.body.functions.getPointer=this.getPointer.bind(this),this.options={},this.defaultOptions={dragNodes:!0,dragView:!0,hover:!1,keyboard:{enabled:!1,speed:{x:10,y:10,zoom:.02},bindToWindow:!0},navigationButtons:!1,tooltipDelay:300,zoomView:!0},c.extend(this.options,this.defaultOptions),this.bindEventListeners()}return(0,a.default)(t,[{key:"bindEventListeners",value:function(){var t=this;this.body.emitter.on("destroy",function(){clearTimeout(t.popupTimer),delete t.body.functions.getPointer})}},{key:"setOptions",value:function(t){if(void 0!==t){var e=["hideEdgesOnDrag","hideNodesOnDrag","keyboard","multiselect","selectable","selectConnectedEdges"];c.selectiveNotDeepExtend(e,this.options,t),c.mergeOptions(this.options,t,"keyboard"),t.tooltip&&(c.extend(this.options.tooltip,t.tooltip),t.tooltip.color&&(this.options.tooltip.color=c.parseColor(t.tooltip.color)))}this.navigationHandler.setOptions(this.options)}},{key:"getPointer",value:function(t){return{x:t.x-c.getAbsoluteLeft(this.canvas.frame.canvas),y:t.y-c.getAbsoluteTop(this.canvas.frame.canvas)}}},{key:"onTouch",value:function(t){(new Date).valueOf()-this.touchTime>50&&(this.drag.pointer=this.getPointer(t.center),this.drag.pinched=!1,this.pinch.scale=this.body.view.scale,this.touchTime=(new Date).valueOf())}},{key:"onTap",value:function(t){var e=this.getPointer(t.center),i=this.selectionHandler.options.multiselect&&(t.changedPointers[0].ctrlKey||t.changedPointers[0].metaKey);this.checkSelectionChanges(e,t,i),this.selectionHandler._generateClickEvent("click",t,e)}},{key:"onDoubleTap",value:function(t){var e=this.getPointer(t.center);this.selectionHandler._generateClickEvent("doubleClick",t,e)}},{key:"onHold",value:function(t){var e=this.getPointer(t.center),i=this.selectionHandler.options.multiselect;this.checkSelectionChanges(e,t,i),this.selectionHandler._generateClickEvent("click",t,e),this.selectionHandler._generateClickEvent("hold",t,e)}},{key:"onRelease",value:function(t){if((new Date).valueOf()-this.touchTime>10){var e=this.getPointer(t.center);this.selectionHandler._generateClickEvent("release",t,e),this.touchTime=(new Date).valueOf()}}},{key:"onContext",value:function(t){var e=this.getPointer({x:t.clientX,y:t.clientY});this.selectionHandler._generateClickEvent("oncontext",t,e)}},{key:"checkSelectionChanges",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=this.selectionHandler._getSelectedEdgeCount(),n=this.selectionHandler._getSelectedNodeCount(),s=this.selectionHandler.getSelection(),r=void 0;r=i===!0?this.selectionHandler.selectAdditionalOnPoint(t):this.selectionHandler.selectOnPoint(t);var a=this.selectionHandler._getSelectedEdgeCount(),h=this.selectionHandler._getSelectedNodeCount(),d=this.selectionHandler.getSelection(),l=this._determineIfDifferent(s,d),u=l.nodesChanged,c=l.edgesChanged,p=!1;h-n>0?(this.selectionHandler._generateClickEvent("selectNode",e,t),r=!0,p=!0):u===!0&&h>0?(this.selectionHandler._generateClickEvent("deselectNode",e,t,s),this.selectionHandler._generateClickEvent("selectNode",e,t),p=!0,r=!0):h-n<0&&(this.selectionHandler._generateClickEvent("deselectNode",e,t,s),r=!0),a-o>0&&p===!1?(this.selectionHandler._generateClickEvent("selectEdge",e,t),r=!0):a>0&&c===!0?(this.selectionHandler._generateClickEvent("deselectEdge",e,t,s),this.selectionHandler._generateClickEvent("selectEdge",e,t),r=!0):a-o<0&&(this.selectionHandler._generateClickEvent("deselectEdge",e,t,s),r=!0),r===!0&&this.selectionHandler._generateClickEvent("select",e,t)}},{key:"_determineIfDifferent",value:function(t,e){for(var i=!1,o=!1,n=0;n<t.nodes.length;n++)e.nodes.indexOf(t.nodes[n])===-1&&(i=!0);for(var s=0;s<e.nodes.length;s++)t.nodes.indexOf(t.nodes[s])===-1&&(i=!0);for(var r=0;r<t.edges.length;r++)e.edges.indexOf(t.edges[r])===-1&&(o=!0);for(var a=0;a<e.edges.length;a++)t.edges.indexOf(t.edges[a])===-1&&(o=!0);return{nodesChanged:i,edgesChanged:o}}},{key:"onDragStart",value:function(t){void 0===this.drag.pointer&&this.onTouch(t);var e=this.selectionHandler.getNodeAt(this.drag.pointer);if(this.drag.dragging=!0,this.drag.selection=[],this.drag.translation=c.extend({},this.body.view.translation),this.drag.nodeId=void 0,void 0!==e&&this.options.dragNodes===!0){this.drag.nodeId=e.id,e.isSelected()===!1&&(this.selectionHandler.unselectAll(),this.selectionHandler.selectObject(e)),this.selectionHandler._generateClickEvent("dragStart",t,this.drag.pointer);var i=this.selectionHandler.selectionObj.nodes;for(var o in i)if(i.hasOwnProperty(o)){var n=i[o],s={id:n.id,node:n,x:n.x,y:n.y,xFixed:n.options.fixed.x,yFixed:n.options.fixed.y};n.options.fixed.x=!0,n.options.fixed.y=!0,this.drag.selection.push(s)}}else this.selectionHandler._generateClickEvent("dragStart",t,this.drag.pointer,void 0,!0)}},{key:"onDrag",value:function(t){var e=this;if(this.drag.pinched!==!0){this.body.emitter.emit("unlockNode");var i=this.getPointer(t.center),o=this.drag.selection;if(o&&o.length&&this.options.dragNodes===!0){this.selectionHandler._generateClickEvent("dragging",t,i);var n=i.x-this.drag.pointer.x,s=i.y-this.drag.pointer.y;o.forEach(function(t){var i=t.node;t.xFixed===!1&&(i.x=e.canvas._XconvertDOMtoCanvas(e.canvas._XconvertCanvasToDOM(t.x)+n)),t.yFixed===!1&&(i.y=e.canvas._YconvertDOMtoCanvas(e.canvas._YconvertCanvasToDOM(t.y)+s))}),this.body.emitter.emit("startSimulation")}else if(this.options.dragView===!0){if(this.selectionHandler._generateClickEvent("dragging",t,i,void 0,!0),void 0===this.drag.pointer)return void this.onDragStart(t);var r=i.x-this.drag.pointer.x,a=i.y-this.drag.pointer.y;this.body.view.translation={x:this.drag.translation.x+r,y:this.drag.translation.y+a},this.body.emitter.emit("_redraw")}}}},{key:"onDragEnd",value:function(t){this.drag.dragging=!1;var e=this.drag.selection;e&&e.length?(e.forEach(function(t){t.node.options.fixed.x=t.xFixed,t.node.options.fixed.y=t.yFixed}),this.selectionHandler._generateClickEvent("dragEnd",t,this.getPointer(t.center)),this.body.emitter.emit("startSimulation")):(this.selectionHandler._generateClickEvent("dragEnd",t,this.getPointer(t.center),void 0,!0),this.body.emitter.emit("_requestRedraw"))}},{key:"onPinch",value:function(t){var e=this.getPointer(t.center);this.drag.pinched=!0,void 0===this.pinch.scale&&(this.pinch.scale=1);var i=this.pinch.scale*t.scale;this.zoom(i,e)}},{key:"zoom",value:function(t,e){if(this.options.zoomView===!0){var i=this.body.view.scale;t<1e-5&&(t=1e-5),t>10&&(t=10);var o=void 0;void 0!==this.drag&&this.drag.dragging===!0&&(o=this.canvas.DOMtoCanvas(this.drag.pointer));var n=this.body.view.translation,s=t/i,r=(1-s)*e.x+n.x*s,a=(1-s)*e.y+n.y*s;if(this.body.view.scale=t,this.body.view.translation={x:r,y:a},void 0!=o){var h=this.canvas.canvasToDOM(o);this.drag.pointer.x=h.x,this.drag.pointer.y=h.y}this.body.emitter.emit("_requestRedraw"),i<t?this.body.emitter.emit("zoom",{direction:"+",scale:this.body.view.scale,pointer:e}):this.body.emitter.emit("zoom",{direction:"-",scale:this.body.view.scale,pointer:e})}}},{key:"onMouseWheel",value:function(t){if(this.options.zoomView===!0){var e=0;if(t.wheelDelta?e=t.wheelDelta/120:t.detail&&(e=-t.detail/3),0!==e){var i=this.body.view.scale,o=e/10;e<0&&(o/=1-o),i*=1+o;var n=this.getPointer({x:t.clientX,y:t.clientY});this.zoom(i,n)}t.preventDefault()}}},{key:"onMouseMove",value:function(t){var e=this,i=this.getPointer({x:t.clientX,y:t.clientY}),o=!1;if(void 0!==this.popup&&(this.popup.hidden===!1&&this._checkHidePopup(i),this.popup.hidden===!1&&(o=!0,this.popup.setPosition(i.x+3,i.y-5),this.popup.show())),this.options.keyboard.bindToWindow===!1&&this.options.keyboard.enabled===!0&&this.canvas.frame.focus(),o===!1&&(void 0!==this.popupTimer&&(clearInterval(this.popupTimer),this.popupTimer=void 0),this.drag.dragging||(this.popupTimer=setTimeout(function(){return e._checkShowPopup(i)},this.options.tooltipDelay))),this.options.hover===!0){var n=this.selectionHandler.getNodeAt(i);void 0===n&&(n=this.selectionHandler.getEdgeAt(i)),this.selectionHandler.hoverObject(n)}}},{key:"_checkShowPopup",value:function(t){var e=this.canvas._XconvertDOMtoCanvas(t.x),i=this.canvas._YconvertDOMtoCanvas(t.y),o={left:e,top:i,right:e,bottom:i},n=void 0===this.popupObj?void 0:this.popupObj.id,s=!1,r="node";if(void 0===this.popupObj){for(var a=this.body.nodeIndices,h=this.body.nodes,d=void 0,l=[],c=0;c<a.length;c++)d=h[a[c]],d.isOverlappingWith(o)===!0&&void 0!==d.getTitle()&&l.push(a[c]);l.length>0&&(this.popupObj=h[l[l.length-1]],s=!0)}if(void 0===this.popupObj&&s===!1){for(var p=this.body.edgeIndices,f=this.body.edges,m=void 0,v=[],g=0;g<p.length;g++)m=f[p[g]],m.isOverlappingWith(o)===!0&&m.connected===!0&&void 0!==m.getTitle()&&v.push(p[g]);v.length>0&&(this.popupObj=f[v[v.length-1]],r="edge")}void 0!==this.popupObj?this.popupObj.id!==n&&(void 0===this.popup&&(this.popup=new u.default(this.canvas.frame)),this.popup.popupTargetType=r,this.popup.popupTargetId=this.popupObj.id,this.popup.setPosition(t.x+3,t.y-5),this.popup.setText(this.popupObj.getTitle()),this.popup.show(),this.body.emitter.emit("showPopup",this.popupObj.id)):void 0!==this.popup&&(this.popup.hide(),this.body.emitter.emit("hidePopup"))}},{key:"_checkHidePopup",value:function(t){var e=this.selectionHandler._pointerToPositionObject(t),i=!1;if("node"===this.popup.popupTargetType){
if(void 0!==this.body.nodes[this.popup.popupTargetId]&&(i=this.body.nodes[this.popup.popupTargetId].isOverlappingWith(e))===!0){var o=this.selectionHandler.getNodeAt(t);i=void 0!==o&&o.id===this.popup.popupTargetId}}else void 0===this.selectionHandler.getNodeAt(t)&&void 0!==this.body.edges[this.popup.popupTargetId]&&(i=this.body.edges[this.popup.popupTargetId].isOverlappingWith(e));i===!1&&(this.popupObj=void 0,this.popup.hide(),this.body.emitter.emit("hidePopup"))}}]),t}();e.default=p},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(119),s=o(n),r=i(120),a=o(r),h=(i(1),i(112)),d=i(125),l=i(115),u=function(){function t(e,i){var o=this;(0,s.default)(this,t),this.body=e,this.canvas=i,this.iconsCreated=!1,this.navigationHammers=[],this.boundFunctions={},this.touchTime=0,this.activated=!1,this.body.emitter.on("activate",function(){o.activated=!0,o.configureKeyboardBindings()}),this.body.emitter.on("deactivate",function(){o.activated=!1,o.configureKeyboardBindings()}),this.body.emitter.on("destroy",function(){void 0!==o.keycharm&&o.keycharm.destroy()}),this.options={}}return(0,a.default)(t,[{key:"setOptions",value:function(t){void 0!==t&&(this.options=t,this.create())}},{key:"create",value:function(){this.options.navigationButtons===!0?this.iconsCreated===!1&&this.loadNavigationElements():this.iconsCreated===!0&&this.cleanNavigation(),this.configureKeyboardBindings()}},{key:"cleanNavigation",value:function(){if(0!=this.navigationHammers.length){for(var t=0;t<this.navigationHammers.length;t++)this.navigationHammers[t].destroy();this.navigationHammers=[]}this.navigationDOM&&this.navigationDOM.wrapper&&this.navigationDOM.wrapper.parentNode&&this.navigationDOM.wrapper.parentNode.removeChild(this.navigationDOM.wrapper),this.iconsCreated=!1}},{key:"loadNavigationElements",value:function(){var t=this;this.cleanNavigation(),this.navigationDOM={};var e=["up","down","left","right","zoomIn","zoomOut","zoomExtends"],i=["_moveUp","_moveDown","_moveLeft","_moveRight","_zoomIn","_zoomOut","_fit"];this.navigationDOM.wrapper=document.createElement("div"),this.navigationDOM.wrapper.className="vis-navigation",this.canvas.frame.appendChild(this.navigationDOM.wrapper);for(var o=0;o<e.length;o++){this.navigationDOM[e[o]]=document.createElement("div"),this.navigationDOM[e[o]].className="vis-button vis-"+e[o],this.navigationDOM.wrapper.appendChild(this.navigationDOM[e[o]]);var n=new h(this.navigationDOM[e[o]]);"_fit"===i[o]?d.onTouch(n,this._fit.bind(this)):d.onTouch(n,this.bindToRedraw.bind(this,i[o])),this.navigationHammers.push(n)}var s=new h(this.canvas.frame);d.onRelease(s,function(){t._stopMovement()}),this.navigationHammers.push(s),this.iconsCreated=!0}},{key:"bindToRedraw",value:function(t){void 0===this.boundFunctions[t]&&(this.boundFunctions[t]=this[t].bind(this),this.body.emitter.on("initRedraw",this.boundFunctions[t]),this.body.emitter.emit("_startRendering"))}},{key:"unbindFromRedraw",value:function(t){void 0!==this.boundFunctions[t]&&(this.body.emitter.off("initRedraw",this.boundFunctions[t]),this.body.emitter.emit("_stopRendering"),delete this.boundFunctions[t])}},{key:"_fit",value:function(){(new Date).valueOf()-this.touchTime>700&&(this.body.emitter.emit("fit",{duration:700}),this.touchTime=(new Date).valueOf())}},{key:"_stopMovement",value:function(){for(var t in this.boundFunctions)this.boundFunctions.hasOwnProperty(t)&&(this.body.emitter.off("initRedraw",this.boundFunctions[t]),this.body.emitter.emit("_stopRendering"));this.boundFunctions={}}},{key:"_moveUp",value:function(){this.body.view.translation.y+=this.options.keyboard.speed.y}},{key:"_moveDown",value:function(){this.body.view.translation.y-=this.options.keyboard.speed.y}},{key:"_moveLeft",value:function(){this.body.view.translation.x+=this.options.keyboard.speed.x}},{key:"_moveRight",value:function(){this.body.view.translation.x-=this.options.keyboard.speed.x}},{key:"_zoomIn",value:function(){var t=this.body.view.scale,e=this.body.view.scale*(1+this.options.keyboard.speed.zoom),i=this.body.view.translation,o=e/t,n=(1-o)*this.canvas.canvasViewCenter.x+i.x*o,s=(1-o)*this.canvas.canvasViewCenter.y+i.y*o;this.body.view.scale=e,this.body.view.translation={x:n,y:s},this.body.emitter.emit("zoom",{direction:"+",scale:this.body.view.scale,pointer:null})}},{key:"_zoomOut",value:function(){var t=this.body.view.scale,e=this.body.view.scale/(1+this.options.keyboard.speed.zoom),i=this.body.view.translation,o=e/t,n=(1-o)*this.canvas.canvasViewCenter.x+i.x*o,s=(1-o)*this.canvas.canvasViewCenter.y+i.y*o;this.body.view.scale=e,this.body.view.translation={x:n,y:s},this.body.emitter.emit("zoom",{direction:"-",scale:this.body.view.scale,pointer:null})}},{key:"configureKeyboardBindings",value:function(){var t=this;void 0!==this.keycharm&&this.keycharm.destroy(),this.options.keyboard.enabled===!0&&(this.options.keyboard.bindToWindow===!0?this.keycharm=l({container:window,preventDefault:!0}):this.keycharm=l({container:this.canvas.frame,preventDefault:!0}),this.keycharm.reset(),this.activated===!0&&(this.keycharm.bind("up",function(){t.bindToRedraw("_moveUp")},"keydown"),this.keycharm.bind("down",function(){t.bindToRedraw("_moveDown")},"keydown"),this.keycharm.bind("left",function(){t.bindToRedraw("_moveLeft")},"keydown"),this.keycharm.bind("right",function(){t.bindToRedraw("_moveRight")},"keydown"),this.keycharm.bind("=",function(){t.bindToRedraw("_zoomIn")},"keydown"),this.keycharm.bind("num+",function(){t.bindToRedraw("_zoomIn")},"keydown"),this.keycharm.bind("num-",function(){t.bindToRedraw("_zoomOut")},"keydown"),this.keycharm.bind("-",function(){t.bindToRedraw("_zoomOut")},"keydown"),this.keycharm.bind("[",function(){t.bindToRedraw("_zoomOut")},"keydown"),this.keycharm.bind("]",function(){t.bindToRedraw("_zoomIn")},"keydown"),this.keycharm.bind("pageup",function(){t.bindToRedraw("_zoomIn")},"keydown"),this.keycharm.bind("pagedown",function(){t.bindToRedraw("_zoomOut")},"keydown"),this.keycharm.bind("up",function(){t.unbindFromRedraw("_moveUp")},"keyup"),this.keycharm.bind("down",function(){t.unbindFromRedraw("_moveDown")},"keyup"),this.keycharm.bind("left",function(){t.unbindFromRedraw("_moveLeft")},"keyup"),this.keycharm.bind("right",function(){t.unbindFromRedraw("_moveRight")},"keyup"),this.keycharm.bind("=",function(){t.unbindFromRedraw("_zoomIn")},"keyup"),this.keycharm.bind("num+",function(){t.unbindFromRedraw("_zoomIn")},"keyup"),this.keycharm.bind("num-",function(){t.unbindFromRedraw("_zoomOut")},"keyup"),this.keycharm.bind("-",function(){t.unbindFromRedraw("_zoomOut")},"keyup"),this.keycharm.bind("[",function(){t.unbindFromRedraw("_zoomOut")},"keyup"),this.keycharm.bind("]",function(){t.unbindFromRedraw("_zoomIn")},"keyup"),this.keycharm.bind("pageup",function(){t.unbindFromRedraw("_zoomIn")},"keyup"),this.keycharm.bind("pagedown",function(){t.unbindFromRedraw("_zoomOut")},"keyup")))}}]),t}();e.default=u},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(119),s=o(n),r=i(120),a=o(r),h=i(163),d=o(h),l=i(196),u=o(l),c=i(1),p=function(){function t(e,i){var o=this;(0,s.default)(this,t),this.body=e,this.canvas=i,this.selectionObj={nodes:[],edges:[]},this.hoverObj={nodes:{},edges:{}},this.options={},this.defaultOptions={multiselect:!1,selectable:!0,selectConnectedEdges:!0,hoverConnectedEdges:!0},c.extend(this.options,this.defaultOptions),this.body.emitter.on("_dataChanged",function(){o.updateSelection()})}return(0,a.default)(t,[{key:"setOptions",value:function(t){if(void 0!==t){var e=["multiselect","hoverConnectedEdges","selectable","selectConnectedEdges"];c.selectiveDeepExtend(e,this.options,t)}}},{key:"selectOnPoint",value:function(t){var e=!1;if(this.options.selectable===!0){var i=this.getNodeAt(t)||this.getEdgeAt(t);this.unselectAll(),void 0!==i&&(e=this.selectObject(i)),this.body.emitter.emit("_requestRedraw")}return e}},{key:"selectAdditionalOnPoint",value:function(t){var e=!1;if(this.options.selectable===!0){var i=this.getNodeAt(t)||this.getEdgeAt(t);void 0!==i&&(e=!0,i.isSelected()===!0?this.deselectObject(i):this.selectObject(i),this.body.emitter.emit("_requestRedraw"))}return e}},{key:"_generateClickEvent",value:function(t,e,i,o){var n=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=void 0;s=n===!0?{nodes:[],edges:[]}:this.getSelection(),s.pointer={DOM:{x:i.x,y:i.y},canvas:this.canvas.DOMtoCanvas(i)},s.event=e,void 0!==o&&(s.previousSelection=o),this.body.emitter.emit(t,s)}},{key:"selectObject",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.selectConnectedEdges;return void 0!==t&&(t instanceof d.default&&e===!0&&this._selectConnectedEdges(t),t.select(),this._addToSelection(t),!0)}},{key:"deselectObject",value:function(t){t.isSelected()===!0&&(t.selected=!1,this._removeFromSelection(t))}},{key:"_getAllNodesOverlappingWith",value:function(t){for(var e=[],i=this.body.nodes,o=0;o<this.body.nodeIndices.length;o++){var n=this.body.nodeIndices[o];i[n].isOverlappingWith(t)&&e.push(n)}return e}},{key:"_pointerToPositionObject",value:function(t){var e=this.canvas.DOMtoCanvas(t);return{left:e.x-1,top:e.y+1,right:e.x+1,bottom:e.y-1}}},{key:"getNodeAt",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this._pointerToPositionObject(t),o=this._getAllNodesOverlappingWith(i);return o.length>0?e===!0?this.body.nodes[o[o.length-1]]:o[o.length-1]:void 0}},{key:"_getEdgesOverlappingWith",value:function(t,e){for(var i=this.body.edges,o=0;o<this.body.edgeIndices.length;o++){var n=this.body.edgeIndices[o];i[n].isOverlappingWith(t)&&e.push(n)}}},{key:"_getAllEdgesOverlappingWith",value:function(t){var e=[];return this._getEdgesOverlappingWith(t,e),e}},{key:"getEdgeAt",value:function(t){for(var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this.canvas.DOMtoCanvas(t),o=10,n=null,s=this.body.edges,r=0;r<this.body.edgeIndices.length;r++){var a=this.body.edgeIndices[r],h=s[a];if(h.connected){var d=h.from.x,l=h.from.y,u=h.to.x,c=h.to.y,p=h.edgeType.getDistanceToEdge(d,l,u,c,i.x,i.y);p<o&&(n=a,o=p)}}return n?e===!0?this.body.edges[n]:n:void 0}},{key:"_addToSelection",value:function(t){t instanceof d.default?this.selectionObj.nodes[t.id]=t:this.selectionObj.edges[t.id]=t}},{key:"_addToHover",value:function(t){t instanceof d.default?this.hoverObj.nodes[t.id]=t:this.hoverObj.edges[t.id]=t}},{key:"_removeFromSelection",value:function(t){t instanceof d.default?(delete this.selectionObj.nodes[t.id],this._unselectConnectedEdges(t)):delete this.selectionObj.edges[t.id]}},{key:"unselectAll",value:function(){for(var t in this.selectionObj.nodes)this.selectionObj.nodes.hasOwnProperty(t)&&this.selectionObj.nodes[t].unselect();for(var e in this.selectionObj.edges)this.selectionObj.edges.hasOwnProperty(e)&&this.selectionObj.edges[e].unselect();this.selectionObj={nodes:{},edges:{}}}},{key:"_getSelectedNodeCount",value:function(){var t=0;for(var e in this.selectionObj.nodes)this.selectionObj.nodes.hasOwnProperty(e)&&(t+=1);return t}},{key:"_getSelectedNode",value:function(){for(var t in this.selectionObj.nodes)if(this.selectionObj.nodes.hasOwnProperty(t))return this.selectionObj.nodes[t]}},{key:"_getSelectedEdge",value:function(){for(var t in this.selectionObj.edges)if(this.selectionObj.edges.hasOwnProperty(t))return this.selectionObj.edges[t]}},{key:"_getSelectedEdgeCount",value:function(){var t=0;for(var e in this.selectionObj.edges)this.selectionObj.edges.hasOwnProperty(e)&&(t+=1);return t}},{key:"_getSelectedObjectCount",value:function(){var t=0;for(var e in this.selectionObj.nodes)this.selectionObj.nodes.hasOwnProperty(e)&&(t+=1);for(var i in this.selectionObj.edges)this.selectionObj.edges.hasOwnProperty(i)&&(t+=1);return t}},{key:"_selectionIsEmpty",value:function(){for(var t in this.selectionObj.nodes)if(this.selectionObj.nodes.hasOwnProperty(t))return!1;for(var e in this.selectionObj.edges)if(this.selectionObj.edges.hasOwnProperty(e))return!1;return!0}},{key:"_clusterInSelection",value:function(){for(var t in this.selectionObj.nodes)if(this.selectionObj.nodes.hasOwnProperty(t)&&this.selectionObj.nodes[t].clusterSize>1)return!0;return!1}},{key:"_selectConnectedEdges",value:function(t){for(var e=0;e<t.edges.length;e++){var i=t.edges[e];i.select(),this._addToSelection(i)}}},{key:"_hoverConnectedEdges",value:function(t){for(var e=0;e<t.edges.length;e++){var i=t.edges[e];i.hover=!0,this._addToHover(i)}}},{key:"_unselectConnectedEdges",value:function(t){for(var e=0;e<t.edges.length;e++){var i=t.edges[e];i.unselect(),this._removeFromSelection(i)}}},{key:"blurObject",value:function(t){t.hover===!0&&(t.hover=!1,t instanceof d.default?this.body.emitter.emit("blurNode",{node:t.id}):this.body.emitter.emit("blurEdge",{edge:t.id}))}},{key:"hoverObject",value:function(t){var e=!1;for(var i in this.hoverObj.nodes)this.hoverObj.nodes.hasOwnProperty(i)&&(void 0===t||t instanceof d.default&&t.id!=i||t instanceof u.default)&&(this.blurObject(this.hoverObj.nodes[i]),delete this.hoverObj.nodes[i],e=!0);for(var o in this.hoverObj.edges)this.hoverObj.edges.hasOwnProperty(o)&&(e===!0?(this.hoverObj.edges[o].hover=!1,delete this.hoverObj.edges[o]):(void 0===t||t instanceof u.default&&t.id!=o||t instanceof d.default&&!t.hover)&&(this.blurObject(this.hoverObj.edges[o]),delete this.hoverObj.edges[o],e=!0));void 0!==t&&(t.hover===!1&&(t.hover=!0,this._addToHover(t),e=!0,t instanceof d.default?this.body.emitter.emit("hoverNode",{node:t.id}):this.body.emitter.emit("hoverEdge",{edge:t.id})),t instanceof d.default&&this.options.hoverConnectedEdges===!0&&this._hoverConnectedEdges(t)),e===!0&&this.body.emitter.emit("_requestRedraw")}},{key:"getSelection",value:function(){return{nodes:this.getSelectedNodes(),edges:this.getSelectedEdges()}}},{key:"getSelectedNodes",value:function(){var t=[];if(this.options.selectable===!0)for(var e in this.selectionObj.nodes)this.selectionObj.nodes.hasOwnProperty(e)&&t.push(this.selectionObj.nodes[e].id);return t}},{key:"getSelectedEdges",value:function(){var t=[];if(this.options.selectable===!0)for(var e in this.selectionObj.edges)this.selectionObj.edges.hasOwnProperty(e)&&t.push(this.selectionObj.edges[e].id);return t}},{key:"setSelection",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=void 0,o=void 0;if(!t||!t.nodes&&!t.edges)throw"Selection must be an object with nodes and/or edges properties";if((e.unselectAll||void 0===e.unselectAll)&&this.unselectAll(),t.nodes)for(i=0;i<t.nodes.length;i++){o=t.nodes[i];var n=this.body.nodes[o];if(!n)throw new RangeError('Node with id "'+o+'" not found');this.selectObject(n,e.highlightEdges)}if(t.edges)for(i=0;i<t.edges.length;i++){o=t.edges[i];var s=this.body.edges[o];if(!s)throw new RangeError('Edge with id "'+o+'" not found');this.selectObject(s)}this.body.emitter.emit("_requestRedraw")}},{key:"selectNodes",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!t||void 0===t.length)throw"Selection must be an array with ids";this.setSelection({nodes:t},{highlightEdges:e})}},{key:"selectEdges",value:function(t){if(!t||void 0===t.length)throw"Selection must be an array with ids";this.setSelection({edges:t})}},{key:"updateSelection",value:function(){for(var t in this.selectionObj.nodes)this.selectionObj.nodes.hasOwnProperty(t)&&(this.body.nodes.hasOwnProperty(t)||delete this.selectionObj.nodes[t]);for(var e in this.selectionObj.edges)this.selectionObj.edges.hasOwnProperty(e)&&(this.body.edges.hasOwnProperty(e)||delete this.selectionObj.edges[e])}}]),t}();e.default=p},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(58),s=o(n),r=i(165),a=o(r),h=i(62),d=o(h),l=i(119),u=o(l),c=i(120),p=o(c),f=i(214),m=o(f),v=i(1),g=function(){function t(e){(0,u.default)(this,t),this.body=e,this.initialRandomSeed=Math.round(1e6*Math.random()),this.randomSeed=this.initialRandomSeed,this.setPhysics=!1,this.options={},this.optionsBackup={physics:{}},this.defaultOptions={randomSeed:void 0,improvedLayout:!0,hierarchical:{enabled:!1,levelSeparation:150,nodeSpacing:100,treeSpacing:200,blockShifting:!0,edgeMinimization:!0,parentCentralization:!0,direction:"UD",sortMethod:"hubsize"}},v.extend(this.options,this.defaultOptions),this.bindEventListeners()}return(0,p.default)(t,[{key:"bindEventListeners",value:function(){var t=this;this.body.emitter.on("_dataChanged",function(){t.setupHierarchicalLayout()}),this.body.emitter.on("_dataLoaded",function(){t.layoutNetwork()}),this.body.emitter.on("_resetHierarchicalLayout",function(){t.setupHierarchicalLayout()})}},{key:"setOptions",value:function(t,e){if(void 0!==t){var i=this.options.hierarchical.enabled;if(v.selectiveDeepExtend(["randomSeed","improvedLayout"],this.options,t),v.mergeOptions(this.options,t,"hierarchical"),void 0!==t.randomSeed&&(this.initialRandomSeed=t.randomSeed),this.options.hierarchical.enabled===!0)return i===!0&&this.body.emitter.emit("refresh",!0),"RL"===this.options.hierarchical.direction||"DU"===this.options.hierarchical.direction?this.options.hierarchical.levelSeparation>0&&(this.options.hierarchical.levelSeparation*=-1):this.options.hierarchical.levelSeparation<0&&(this.options.hierarchical.levelSeparation*=-1),this.body.emitter.emit("_resetHierarchicalLayout"),this.adaptAllOptionsForHierarchicalLayout(e);if(i===!0)return this.body.emitter.emit("refresh"),v.deepExtend(e,this.optionsBackup)}return e}},{key:"adaptAllOptionsForHierarchicalLayout",value:function(t){if(this.options.hierarchical.enabled===!0){void 0===t.physics||t.physics===!0?(t.physics={enabled:void 0===this.optionsBackup.physics.enabled||this.optionsBackup.physics.enabled,solver:"hierarchicalRepulsion"},this.optionsBackup.physics.enabled=void 0===this.optionsBackup.physics.enabled||this.optionsBackup.physics.enabled,this.optionsBackup.physics.solver=this.optionsBackup.physics.solver||"barnesHut"):"object"===(0,d.default)(t.physics)?(this.optionsBackup.physics.enabled=void 0===t.physics.enabled||t.physics.enabled,this.optionsBackup.physics.solver=t.physics.solver||"barnesHut",t.physics.solver="hierarchicalRepulsion"):t.physics!==!1&&(this.optionsBackup.physics.solver="barnesHut",t.physics={solver:"hierarchicalRepulsion"});var e="horizontal";"RL"!==this.options.hierarchical.direction&&"LR"!==this.options.hierarchical.direction||(e="vertical"),void 0===t.edges?(this.optionsBackup.edges={smooth:{enabled:!0,type:"dynamic"}},t.edges={smooth:!1}):void 0===t.edges.smooth?(this.optionsBackup.edges={smooth:{enabled:!0,type:"dynamic"}},t.edges.smooth=!1):"boolean"==typeof t.edges.smooth?(this.optionsBackup.edges={smooth:t.edges.smooth},t.edges.smooth={enabled:t.edges.smooth,type:e}):(void 0!==t.edges.smooth.type&&"dynamic"!==t.edges.smooth.type&&(e=t.edges.smooth.type),this.optionsBackup.edges={smooth:void 0===t.edges.smooth.enabled||t.edges.smooth.enabled,type:void 0===t.edges.smooth.type?"dynamic":t.edges.smooth.type,roundness:void 0===t.edges.smooth.roundness?.5:t.edges.smooth.roundness,forceDirection:void 0!==t.edges.smooth.forceDirection&&t.edges.smooth.forceDirection},t.edges.smooth={enabled:void 0===t.edges.smooth.enabled||t.edges.smooth.enabled,type:e,roundness:void 0===t.edges.smooth.roundness?.5:t.edges.smooth.roundness,forceDirection:void 0!==t.edges.smooth.forceDirection&&t.edges.smooth.forceDirection}),this.body.emitter.emit("_forceDisableDynamicCurves",e)}return t}},{key:"seededRandom",value:function(){var t=1e4*Math.sin(this.randomSeed++);return t-Math.floor(t)}},{key:"positionInitially",value:function(t){if(this.options.hierarchical.enabled!==!0){this.randomSeed=this.initialRandomSeed;for(var e=0;e<t.length;e++){var i=t[e],o=1*t.length+10,n=2*Math.PI*this.seededRandom();void 0===i.x&&(i.x=o*Math.cos(n)),void 0===i.y&&(i.y=o*Math.sin(n))}}}},{key:"layoutNetwork",value:function(){if(this.options.hierarchical.enabled!==!0&&this.options.improvedLayout===!0){for(var t=0,e=0;e<this.body.nodeIndices.length;e++){this.body.nodes[this.body.nodeIndices[e]].predefinedPosition===!0&&(t+=1)}if(t<.5*this.body.nodeIndices.length){var i=0;if(this.body.nodeIndices.length>100){for(var o=this.body.nodeIndices.length;this.body.nodeIndices.length>100;){i+=1;var n=this.body.nodeIndices.length;i%3==0?this.body.modules.clustering.clusterBridges():this.body.modules.clustering.clusterOutliers();if(n==this.body.nodeIndices.length&&i%3!=0||i>10)return this._declusterAll(),this.body.emitter.emit("_layoutFailed"),void console.info("This network could not be positioned by this version of the improved layout algorithm. Please disable improvedLayout for better performance.")}this.body.modules.kamadaKawai.setOptions({springLength:Math.max(150,2*o)})}this.body.modules.kamadaKawai.solve(this.body.nodeIndices,this.body.edgeIndices,!0),this._shiftToCenter();for(var s=0;s<this.body.nodeIndices.length;s++)this.body.nodes[this.body.nodeIndices[s]].predefinedPosition===!1&&(this.body.nodes[this.body.nodeIndices[s]].x+=70*(.5-this.seededRandom()),this.body.nodes[this.body.nodeIndices[s]].y+=70*(.5-this.seededRandom()));this._declusterAll(),this.body.emitter.emit("_repositionBezierNodes")}}}},{key:"_shiftToCenter",value:function(){for(var t=m.default.getRangeCore(this.body.nodes,this.body.nodeIndices),e=m.default.findCenter(t),i=0;i<this.body.nodeIndices.length;i++)this.body.nodes[this.body.nodeIndices[i]].x-=e.x,this.body.nodes[this.body.nodeIndices[i]].y-=e.y}},{key:"_declusterAll",value:function(){for(var t=!0;t===!0;){t=!1;for(var e=0;e<this.body.nodeIndices.length;e++)this.body.nodes[this.body.nodeIndices[e]].isCluster===!0&&(t=!0,this.body.modules.clustering.openCluster(this.body.nodeIndices[e],{},!1));t===!0&&this.body.emitter.emit("_dataChanged")}}},{key:"getSeed",value:function(){return this.initialRandomSeed}},{key:"setupHierarchicalLayout",value:function(){if(this.options.hierarchical.enabled===!0&&this.body.nodeIndices.length>0){var t=void 0,e=void 0,i=!1,o=!1;this.hierarchicalLevels={},this.lastNodeOnLevel={},this.hierarchicalChildrenReference={},this.hierarchicalParentReference={},this.hierarchicalTrees={},this.treeIndex=-1,this.distributionOrdering={},this.distributionIndex={},this.distributionOrderingPresence={};for(e in this.body.nodes)this.body.nodes.hasOwnProperty(e)&&(t=this.body.nodes[e],void 0===t.options.x&&void 0===t.options.y&&!1,void 0!==t.options.level?(i=!0,this.hierarchicalLevels[e]=t.options.level):o=!0);if(o===!0&&i===!0)throw new Error("To use the hierarchical layout, nodes require either no predefined levels or levels have to be defined for all nodes.");o===!0&&("hubsize"===this.options.hierarchical.sortMethod?this._determineLevelsByHubsize():"directed"===this.options.hierarchical.sortMethod?this._determineLevelsDirected():"custom"===this.options.hierarchical.sortMethod&&this._determineLevelsCustomCallback());for(var n in this.body.nodes)this.body.nodes.hasOwnProperty(n)&&void 0===this.hierarchicalLevels[n]&&(this.hierarchicalLevels[n]=0);var s=this._getDistribution();this._generateMap(),this._placeNodesByHierarchy(s),this._condenseHierarchy(),this._shiftToCenter()}}},{key:"_condenseHierarchy",value:function(){var t=this,e=!1,i={},o=function(e,i){for(var o in t.hierarchicalTrees)if(t.hierarchicalTrees.hasOwnProperty(o)&&t.hierarchicalTrees[o]===e){var n=t.body.nodes[o],s=t._getPositionForHierarchy(n);t._setPositionForHierarchy(n,s+i,void 0,!0)}},n=function(e){var i=1e9,o=-1e9;for(var n in t.hierarchicalTrees)if(t.hierarchicalTrees.hasOwnProperty(n)&&t.hierarchicalTrees[n]===e){var s=t._getPositionForHierarchy(t.body.nodes[n]);i=Math.min(s,i),o=Math.max(s,o)}return{min:i,max:o}},r=function(){for(var e=[],i=0;i<=t.treeIndex;i++)e.push(n(i));return e},h=function e(i,o){if(!o[i.id]&&(o[i.id]=!0,t.hierarchicalChildrenReference[i.id])){var n=t.hierarchicalChildrenReference[i.id];if(n.length>0)for(var s=0;s<n.length;s++)e(t.body.nodes[n[s]],o)}},d=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e9,o=1e9,n=1e9,s=1e9,r=-1e9;for(var h in e)if(e.hasOwnProperty(h)){var d=t.body.nodes[h],l=t.hierarchicalLevels[d.id],u=t._getPositionForHierarchy(d),c=t._getSpaceAroundNode(d,e),p=(0,a.default)(c,2),f=p[0],m=p[1];o=Math.min(f,o),n=Math.min(m,n),l<=i&&(s=Math.min(u,s),r=Math.max(u,r))}return[s,r,o,n]},l=function(e){var i={};return function e(o){if(void 0!==i[o])return i[o];var n=t.hierarchicalLevels[o];if(t.hierarchicalChildrenReference[o]){var s=t.hierarchicalChildrenReference[o];if(s.length>0)for(var r=0;r<s.length;r++)n=Math.max(n,e(s[r]))}return i[o]=n,n}(e)},u=function(t,e){var i=l(t.id),o=l(e.id);return Math.min(i,o)},c=function(e,i){var o=t.hierarchicalParentReference[e.id],n=t.hierarchicalParentReference[i.id];if(void 0===o||void 0===n)return!1;for(var s=0;s<o.length;s++)for(var r=0;r<n.length;r++)if(o[s]==n[r])return!0;return!1},p=function(e,i,o){for(var n=0;n<i.length;n++){var s=i[n],r=t.distributionOrdering[s];if(r.length>1)for(var a=0;a<r.length-1;a++)c(r[a],r[a+1])===!0&&t.hierarchicalTrees[r[a].id]===t.hierarchicalTrees[r[a+1].id]&&e(r[a],r[a+1],o)}},f=function(i,o){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=t._getPositionForHierarchy(i),r=t._getPositionForHierarchy(o);if(Math.abs(r-s)>t.options.hierarchical.nodeSpacing){var l={},c={};h(i,l),h(o,c);var p=u(i,o),f=d(l,p),m=(0,a.default)(f,4),v=(m[0],m[1]),g=(m[2],m[3],d(c,p)),y=(0,a.default)(g,4),b=y[0],_=(y[1],y[2]);if(y[3],Math.abs(v-b)>t.options.hierarchical.nodeSpacing){var w=v-b+t.options.hierarchical.nodeSpacing;w<-_+t.options.hierarchical.nodeSpacing&&(w=-_+t.options.hierarchical.nodeSpacing),w<0&&(t._shiftBlock(o.id,w),e=!0,n===!0&&t._centerParent(o))}}},m=function(o,n){for(var s=n.id,r=n.edges,l=t.hierarchicalLevels[n.id],u=t.options.hierarchical.levelSeparation*t.options.hierarchical.levelSeparation,c={},p=[],f=0;f<r.length;f++){var m=r[f];if(m.toId!=m.fromId){var v=m.toId==s?m.from:m.to;c[r[f].id]=v,t.hierarchicalLevels[v.id]<l&&p.push(m)}}var g=function(e,i){for(var o=0,n=0;n<i.length;n++)if(void 0!==c[i[n].id]){var s=t._getPositionForHierarchy(c[i[n].id])-e;o+=s/Math.sqrt(s*s+u)}return o},y=function(e,i){for(var o=0,n=0;n<i.length;n++)if(void 0!==c[i[n].id]){var s=t._getPositionForHierarchy(c[i[n].id])-e;o-=u*Math.pow(s*s+u,-1.5)}return o},b=function(e,i){for(var o=t._getPositionForHierarchy(n),s={},r=0;r<e;r++){var a=g(o,i),h=y(o,i);if(o-=Math.max(-40,Math.min(40,Math.round(a/h))),void 0!==s[o])break;s[o]=r}return o},_=b(o,p);!function(o){var s=t._getPositionForHierarchy(n);if(void 0===i[n.id]){var r={};h(n,r),i[n.id]=r}var l=d(i[n.id]),u=(0,a.default)(l,4),c=(u[0],u[1],u[2]),p=u[3],f=o-s,m=0;f>0?m=Math.min(f,p-t.options.hierarchical.nodeSpacing):f<0&&(m=-Math.min(-f,c-t.options.hierarchical.nodeSpacing)),0!=m&&(t._shiftBlock(n.id,m),e=!0)}(_),_=b(o,r),function(i){var o=t._getPositionForHierarchy(n),s=t._getSpaceAroundNode(n),r=(0,a.default)(s,2),h=r[0],d=r[1],l=i-o,u=o;l>0?u=Math.min(o+(d-t.options.hierarchical.nodeSpacing),i):l<0&&(u=Math.max(o-(h-t.options.hierarchical.nodeSpacing),i)),u!==o&&(t._setPositionForHierarchy(n,u,void 0,!0),e=!0)}(_)};this.options.hierarchical.blockShifting===!0&&(function(i){var o=(0,s.default)(t.distributionOrdering);o=o.reverse();for(var n=0;n<i&&(e=!1,p(f,o,!0),e===!0);n++);}(5),function(){for(var e in t.body.nodes)t.body.nodes.hasOwnProperty(e)&&t._centerParent(t.body.nodes[e])}()),this.options.hierarchical.edgeMinimization===!0&&function(i){var o=(0,s.default)(t.distributionOrdering);o=o.reverse();for(var n=0;n<i;n++){e=!1;for(var r=0;r<o.length;r++)for(var a=o[r],h=t.distributionOrdering[a],d=0;d<h.length;d++)m(1e3,h[d]);if(e!==!0)break}}(20),this.options.hierarchical.parentCentralization===!0&&function(){var e=(0,s.default)(t.distributionOrdering);e=e.reverse();for(var i=0;i<e.length;i++)for(var o=e[i],n=t.distributionOrdering[o],r=0;r<n.length;r++)t._centerParent(n[r])}(),function(){for(var e=r(),i=0,n=0;n<e.length-1;n++){i+=e[n].max-e[n+1].min+t.options.hierarchical.treeSpacing,o(n+1,i)}}()}},{key:"_getSpaceAroundNode",value:function(t,e){var i=!0;void 0===e&&(i=!1);var o=this.hierarchicalLevels[t.id];if(void 0!==o){var n=this.distributionIndex[t.id],s=this._getPositionForHierarchy(t),r=1e9,a=1e9;if(0!==n){var h=this.distributionOrdering[o][n-1];if(i===!0&&void 0===e[h.id]||i===!1){r=s-this._getPositionForHierarchy(h)}}if(n!=this.distributionOrdering[o].length-1){var d=this.distributionOrdering[o][n+1];if(i===!0&&void 0===e[d.id]||i===!1){var l=this._getPositionForHierarchy(d);a=Math.min(a,l-s)}}return[r,a]}return[0,0]}},{key:"_centerParent",value:function(t){if(this.hierarchicalParentReference[t.id])for(var e=this.hierarchicalParentReference[t.id],i=0;i<e.length;i++){var o=e[i],n=this.body.nodes[o];if(this.hierarchicalChildrenReference[o]){var s=1e9,r=-1e9,h=this.hierarchicalChildrenReference[o];if(h.length>0)for(var d=0;d<h.length;d++){var l=this.body.nodes[h[d]];s=Math.min(s,this._getPositionForHierarchy(l)),r=Math.max(r,this._getPositionForHierarchy(l))}var u=this._getPositionForHierarchy(n),c=this._getSpaceAroundNode(n),p=(0,a.default)(c,2),f=p[0],m=p[1],v=.5*(s+r),g=u-v;(g<0&&Math.abs(g)<m-this.options.hierarchical.nodeSpacing||g>0&&Math.abs(g)<f-this.options.hierarchical.nodeSpacing)&&this._setPositionForHierarchy(n,v,void 0,!0)}}}},{key:"_placeNodesByHierarchy",value:function(t){this.positionedNodes={};for(var e in t)if(t.hasOwnProperty(e)){var i=(0,s.default)(t[e]);i=this._indexArrayToNodes(i),this._sortNodeArray(i);for(var o=0,n=0;n<i.length;n++){var r=i[n];if(void 0===this.positionedNodes[r.id]){var a=this.options.hierarchical.nodeSpacing*o;o>0&&(a=this._getPositionForHierarchy(i[n-1])+this.options.hierarchical.nodeSpacing),this._setPositionForHierarchy(r,a,e),this._validataPositionAndContinue(r,e,a),o++}}}}},{key:"_placeBranchNodes",value:function(t,e){if(void 0!==this.hierarchicalChildrenReference[t]){for(var i=[],o=0;o<this.hierarchicalChildrenReference[t].length;o++)i.push(this.body.nodes[this.hierarchicalChildrenReference[t][o]]);this._sortNodeArray(i);for(var n=0;n<i.length;n++){var s=i[n],r=this.hierarchicalLevels[s.id];if(!(r>e&&void 0===this.positionedNodes[s.id]))return;var a=void 0;a=0===n?this._getPositionForHierarchy(this.body.nodes[t]):this._getPositionForHierarchy(i[n-1])+this.options.hierarchical.nodeSpacing,this._setPositionForHierarchy(s,a,r),this._validataPositionAndContinue(s,r,a)}for(var h=1e9,d=-1e9,l=0;l<i.length;l++){var u=i[l].id;h=Math.min(h,this._getPositionForHierarchy(this.body.nodes[u])),d=Math.max(d,this._getPositionForHierarchy(this.body.nodes[u]))}this._setPositionForHierarchy(this.body.nodes[t],.5*(h+d),e)}}},{key:"_validataPositionAndContinue",value:function(t,e,i){if(void 0!==this.lastNodeOnLevel[e]){var o=this._getPositionForHierarchy(this.body.nodes[this.lastNodeOnLevel[e]]);if(i-o<this.options.hierarchical.nodeSpacing){var n=o+this.options.hierarchical.nodeSpacing-i,s=this._findCommonParent(this.lastNodeOnLevel[e],t.id);this._shiftBlock(s.withChild,n)}}this.lastNodeOnLevel[e]=t.id,this.positionedNodes[t.id]=!0,this._placeBranchNodes(t.id,e)}},{key:"_indexArrayToNodes",value:function(t){for(var e=[],i=0;i<t.length;i++)e.push(this.body.nodes[t[i]]);return e}},{key:"_getDistribution",value:function(){var t={},e=void 0,i=void 0;for(e in this.body.nodes)if(this.body.nodes.hasOwnProperty(e)){i=this.body.nodes[e];var o=void 0===this.hierarchicalLevels[e]?0:this.hierarchicalLevels[e];"UD"===this.options.hierarchical.direction||"DU"===this.options.hierarchical.direction?(i.y=this.options.hierarchical.levelSeparation*o,i.options.fixed.y=!0):(i.x=this.options.hierarchical.levelSeparation*o,i.options.fixed.x=!0),void 0===t[o]&&(t[o]={}),t[o][e]=i}return t}},{key:"_getHubSize",value:function(){var t=0;for(var e in this.body.nodes)if(this.body.nodes.hasOwnProperty(e)){var i=this.body.nodes[e];void 0===this.hierarchicalLevels[e]&&(t=i.edges.length<t?t:i.edges.length)}return t}},{key:"_determineLevelsByHubsize",value:function(){for(var t=this,e=1,i=function(e,i){
void 0===t.hierarchicalLevels[i.id]&&(void 0===t.hierarchicalLevels[e.id]&&(t.hierarchicalLevels[e.id]=0),t.hierarchicalLevels[i.id]=t.hierarchicalLevels[e.id]+1)};e>0&&0!==(e=this._getHubSize());)for(var o in this.body.nodes)if(this.body.nodes.hasOwnProperty(o)){var n=this.body.nodes[o];n.edges.length===e&&this._crawlNetwork(i,o)}}},{key:"_determineLevelsCustomCallback",value:function(){var t=this,e=function(e,i,o){void 0===t.hierarchicalLevels[e.id]&&(t.hierarchicalLevels[e.id]=1e5);var n=(m.default.cloneOptions(e,"node"),m.default.cloneOptions(i,"node"),void m.default.cloneOptions(o,"edge"));t.hierarchicalLevels[i.id]=t.hierarchicalLevels[e.id]+n};this._crawlNetwork(e),this._setMinLevelToZero()}},{key:"_determineLevelsDirected",value:function(){var t=this,e=function(e,i,o){void 0===t.hierarchicalLevels[e.id]&&(t.hierarchicalLevels[e.id]=1e4),o.toId==i.id?t.hierarchicalLevels[i.id]=t.hierarchicalLevels[e.id]+1:t.hierarchicalLevels[i.id]=t.hierarchicalLevels[e.id]-1};this._crawlNetwork(e),this._setMinLevelToZero()}},{key:"_setMinLevelToZero",value:function(){var t=1e9;for(var e in this.body.nodes)this.body.nodes.hasOwnProperty(e)&&void 0!==this.hierarchicalLevels[e]&&(t=Math.min(this.hierarchicalLevels[e],t));for(var i in this.body.nodes)this.body.nodes.hasOwnProperty(i)&&void 0!==this.hierarchicalLevels[i]&&(this.hierarchicalLevels[i]-=t)}},{key:"_generateMap",value:function(){var t=this,e=function(e,i){if(t.hierarchicalLevels[i.id]>t.hierarchicalLevels[e.id]){var o=e.id,n=i.id;void 0===t.hierarchicalChildrenReference[o]&&(t.hierarchicalChildrenReference[o]=[]),t.hierarchicalChildrenReference[o].push(n),void 0===t.hierarchicalParentReference[n]&&(t.hierarchicalParentReference[n]=[]),t.hierarchicalParentReference[n].push(o)}};this._crawlNetwork(e)}},{key:"_crawlNetwork",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},i=arguments[1],o={},n=0,s=function i(n,s){if(void 0===o[n.id]){void 0===t.hierarchicalTrees[n.id]&&(t.hierarchicalTrees[n.id]=s,t.treeIndex=Math.max(s,t.treeIndex)),o[n.id]=!0;for(var r=void 0,a=0;a<n.edges.length;a++)n.edges[a].connected===!0&&(r=n.edges[a].toId===n.id?n.edges[a].from:n.edges[a].to,n.id!==r.id&&(e(n,r,n.edges[a]),i(r,s)))}};if(void 0===i)for(var r=0;r<this.body.nodeIndices.length;r++){var a=this.body.nodes[this.body.nodeIndices[r]];void 0===o[a.id]&&(s(a,n),n+=1)}else{var h=this.body.nodes[i];if(void 0===h)return void console.error("Node not found:",i);s(h)}}},{key:"_shiftBlock",value:function(t,e){var i=this,o={};!function t(n){if(!o[n]&&(o[n]=!0,"UD"===i.options.hierarchical.direction||"DU"===i.options.hierarchical.direction?i.body.nodes[n].x+=e:i.body.nodes[n].y+=e,void 0!==i.hierarchicalChildrenReference[n]))for(var s=0;s<i.hierarchicalChildrenReference[n].length;s++)t(i.hierarchicalChildrenReference[n][s])}(t)}},{key:"_findCommonParent",value:function(t,e){var i=this,o={};return function t(e,o){if(void 0!==i.hierarchicalParentReference[o])for(var n=0;n<i.hierarchicalParentReference[o].length;n++){var s=i.hierarchicalParentReference[o][n];e[s]=!0,t(e,s)}}(o,t),function t(e,o){if(void 0!==i.hierarchicalParentReference[o])for(var n=0;n<i.hierarchicalParentReference[o].length;n++){var s=i.hierarchicalParentReference[o][n];if(void 0!==e[s])return{foundParent:s,withChild:o};var r=t(e,s);if(null!==r.foundParent)return r}return{foundParent:null,withChild:o}}(o,e)}},{key:"_setPositionForHierarchy",value:function(t,e,i){(arguments.length>3&&void 0!==arguments[3]&&arguments[3])!==!0&&(void 0===this.distributionOrdering[i]&&(this.distributionOrdering[i]=[],this.distributionOrderingPresence[i]={}),void 0===this.distributionOrderingPresence[i][t.id]&&(this.distributionOrdering[i].push(t),this.distributionIndex[t.id]=this.distributionOrdering[i].length-1),this.distributionOrderingPresence[i][t.id]=!0),"UD"===this.options.hierarchical.direction||"DU"===this.options.hierarchical.direction?t.x=e:t.y=e}},{key:"_getPositionForHierarchy",value:function(t){return"UD"===this.options.hierarchical.direction||"DU"===this.options.hierarchical.direction?t.x:t.y}},{key:"_sortNodeArray",value:function(t){t.length>1&&("UD"===this.options.hierarchical.direction||"DU"===this.options.hierarchical.direction?t.sort(function(t,e){return t.x-e.x}):t.sort(function(t,e){return t.y-e.y}))}}]),t}();e.default=g},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(58),s=o(n),r=i(90),a=o(r),h=i(62),d=o(h),l=i(119),u=o(l),c=i(120),p=o(c),f=i(1),m=i(112),v=i(125),g=function(){function t(e,i,o){var n=this;(0,u.default)(this,t),this.body=e,this.canvas=i,this.selectionHandler=o,this.editMode=!1,this.manipulationDiv=void 0,this.editModeDiv=void 0,this.closeDiv=void 0,this.manipulationHammers=[],this.temporaryUIFunctions={},this.temporaryEventFunctions=[],this.touchTime=0,this.temporaryIds={nodes:[],edges:[]},this.guiEnabled=!1,this.inMode=!1,this.selectedControlNode=void 0,this.options={},this.defaultOptions={enabled:!1,initiallyActive:!1,addNode:!0,addEdge:!0,editNode:void 0,editEdge:!0,deleteNode:!0,deleteEdge:!0,controlNodeStyle:{shape:"dot",size:6,color:{background:"#ff0000",border:"#3c3c3c",highlight:{background:"#07f968",border:"#3c3c3c"}},borderWidth:2,borderWidthSelected:2}},f.extend(this.options,this.defaultOptions),this.body.emitter.on("destroy",function(){n._clean()}),this.body.emitter.on("_dataChanged",this._restore.bind(this)),this.body.emitter.on("_resetData",this._restore.bind(this))}return(0,p.default)(t,[{key:"_restore",value:function(){this.inMode!==!1&&(this.options.initiallyActive===!0?this.enableEditMode():this.disableEditMode())}},{key:"setOptions",value:function(t,e,i){void 0!==e&&(void 0!==e.locale?this.options.locale=e.locale:this.options.locale=i.locale,void 0!==e.locales?this.options.locales=e.locales:this.options.locales=i.locales),void 0!==t&&("boolean"==typeof t?this.options.enabled=t:(this.options.enabled=!0,f.deepExtend(this.options,t)),this.options.initiallyActive===!0&&(this.editMode=!0),this._setup())}},{key:"toggleEditMode",value:function(){this.editMode===!0?this.disableEditMode():this.enableEditMode()}},{key:"enableEditMode",value:function(){this.editMode=!0,this._clean(),this.guiEnabled===!0&&(this.manipulationDiv.style.display="block",this.closeDiv.style.display="block",this.editModeDiv.style.display="none",this.showManipulatorToolbar())}},{key:"disableEditMode",value:function(){this.editMode=!1,this._clean(),this.guiEnabled===!0&&(this.manipulationDiv.style.display="none",this.closeDiv.style.display="none",this.editModeDiv.style.display="block",this._createEditButton())}},{key:"showManipulatorToolbar",value:function(){if(this._clean(),this.manipulationDOM={},this.guiEnabled===!0){this.editMode=!0,this.manipulationDiv.style.display="block",this.closeDiv.style.display="block";var t=this.selectionHandler._getSelectedNodeCount(),e=this.selectionHandler._getSelectedEdgeCount(),i=t+e,o=this.options.locales[this.options.locale],n=!1;this.options.addNode!==!1&&(this._createAddNodeButton(o),n=!0),this.options.addEdge!==!1&&(n===!0?this._createSeperator(1):n=!0,this._createAddEdgeButton(o)),1===t&&"function"==typeof this.options.editNode?(n===!0?this._createSeperator(2):n=!0,this._createEditNodeButton(o)):1===e&&0===t&&this.options.editEdge!==!1&&(n===!0?this._createSeperator(3):n=!0,this._createEditEdgeButton(o)),0!==i&&(t>0&&this.options.deleteNode!==!1?(n===!0&&this._createSeperator(4),this._createDeleteButton(o)):0===t&&this.options.deleteEdge!==!1&&(n===!0&&this._createSeperator(4),this._createDeleteButton(o))),this._bindHammerToDiv(this.closeDiv,this.toggleEditMode.bind(this)),this._temporaryBindEvent("select",this.showManipulatorToolbar.bind(this))}this.body.emitter.emit("_redraw")}},{key:"addNodeMode",value:function(){if(this.editMode!==!0&&this.enableEditMode(),this._clean(),this.inMode="addNode",this.guiEnabled===!0){var t=this.options.locales[this.options.locale];this.manipulationDOM={},this._createBackButton(t),this._createSeperator(),this._createDescription(t.addDescription||this.options.locales.en.addDescription),this._bindHammerToDiv(this.closeDiv,this.toggleEditMode.bind(this))}this._temporaryBindEvent("click",this._performAddNode.bind(this))}},{key:"editNode",value:function(){var t=this;this.editMode!==!0&&this.enableEditMode(),this._clean();var e=this.selectionHandler._getSelectedNode();if(void 0!==e){if(this.inMode="editNode","function"!=typeof this.options.editNode)throw new Error("No function has been configured to handle the editing of nodes.");if(e.isCluster!==!0){var i=f.deepExtend({},e.options,!1);if(i.x=e.x,i.y=e.y,2!==this.options.editNode.length)throw new Error("The function for edit does not support two arguments (data, callback)");this.options.editNode(i,function(e){null!==e&&void 0!==e&&"editNode"===t.inMode&&t.body.data.nodes.getDataSet().update(e),t.showManipulatorToolbar()})}else alert(this.options.locales[this.options.locale].editClusterError||this.options.locales.en.editClusterError)}else this.showManipulatorToolbar()}},{key:"addEdgeMode",value:function(){if(this.editMode!==!0&&this.enableEditMode(),this._clean(),this.inMode="addEdge",this.guiEnabled===!0){var t=this.options.locales[this.options.locale];this.manipulationDOM={},this._createBackButton(t),this._createSeperator(),this._createDescription(t.edgeDescription||this.options.locales.en.edgeDescription),this._bindHammerToDiv(this.closeDiv,this.toggleEditMode.bind(this))}this._temporaryBindUI("onTouch",this._handleConnect.bind(this)),this._temporaryBindUI("onDragEnd",this._finishConnect.bind(this)),this._temporaryBindUI("onDrag",this._dragControlNode.bind(this)),this._temporaryBindUI("onRelease",this._finishConnect.bind(this)),this._temporaryBindUI("onDragStart",function(){}),this._temporaryBindUI("onHold",function(){})}},{key:"editEdgeMode",value:function(){if(this.editMode!==!0&&this.enableEditMode(),this._clean(),this.inMode="editEdge","object"===(0,d.default)(this.options.editEdge)&&"function"==typeof this.options.editEdge.editWithoutDrag&&(this.edgeBeingEditedId=this.selectionHandler.getSelectedEdges()[0],void 0!==this.edgeBeingEditedId)){var t=this.body.edges[this.edgeBeingEditedId];return void this._performEditEdge(t.from,t.to)}if(this.guiEnabled===!0){var e=this.options.locales[this.options.locale];this.manipulationDOM={},this._createBackButton(e),this._createSeperator(),this._createDescription(e.editEdgeDescription||this.options.locales.en.editEdgeDescription),this._bindHammerToDiv(this.closeDiv,this.toggleEditMode.bind(this))}if(this.edgeBeingEditedId=this.selectionHandler.getSelectedEdges()[0],void 0!==this.edgeBeingEditedId){var i=this.body.edges[this.edgeBeingEditedId],o=this._getNewTargetNode(i.from.x,i.from.y),n=this._getNewTargetNode(i.to.x,i.to.y);this.temporaryIds.nodes.push(o.id),this.temporaryIds.nodes.push(n.id),this.body.nodes[o.id]=o,this.body.nodeIndices.push(o.id),this.body.nodes[n.id]=n,this.body.nodeIndices.push(n.id),this._temporaryBindUI("onTouch",this._controlNodeTouch.bind(this)),this._temporaryBindUI("onTap",function(){}),this._temporaryBindUI("onHold",function(){}),this._temporaryBindUI("onDragStart",this._controlNodeDragStart.bind(this)),this._temporaryBindUI("onDrag",this._controlNodeDrag.bind(this)),this._temporaryBindUI("onDragEnd",this._controlNodeDragEnd.bind(this)),this._temporaryBindUI("onMouseMove",function(){}),this._temporaryBindEvent("beforeDrawing",function(t){var e=i.edgeType.findBorderPositions(t);o.selected===!1&&(o.x=e.from.x,o.y=e.from.y),n.selected===!1&&(n.x=e.to.x,n.y=e.to.y)}),this.body.emitter.emit("_redraw")}else this.showManipulatorToolbar()}},{key:"deleteSelected",value:function(){var t=this;this.editMode!==!0&&this.enableEditMode(),this._clean(),this.inMode="delete";var e=this.selectionHandler.getSelectedNodes(),i=this.selectionHandler.getSelectedEdges(),o=void 0;if(e.length>0){for(var n=0;n<e.length;n++)if(this.body.nodes[e[n]].isCluster===!0)return void alert(this.options.locales[this.options.locale].deleteClusterError||this.options.locales.en.deleteClusterError);"function"==typeof this.options.deleteNode&&(o=this.options.deleteNode)}else i.length>0&&"function"==typeof this.options.deleteEdge&&(o=this.options.deleteEdge);if("function"==typeof o){var s={nodes:e,edges:i};if(2!==o.length)throw new Error("The function for delete does not support two arguments (data, callback)");o(s,function(e){null!==e&&void 0!==e&&"delete"===t.inMode?(t.body.data.edges.getDataSet().remove(e.edges),t.body.data.nodes.getDataSet().remove(e.nodes),t.body.emitter.emit("startSimulation"),t.showManipulatorToolbar()):(t.body.emitter.emit("startSimulation"),t.showManipulatorToolbar())})}else this.body.data.edges.getDataSet().remove(i),this.body.data.nodes.getDataSet().remove(e),this.body.emitter.emit("startSimulation"),this.showManipulatorToolbar()}},{key:"_setup",value:function(){this.options.enabled===!0?(this.guiEnabled=!0,this._createWrappers(),this.editMode===!1?this._createEditButton():this.showManipulatorToolbar()):(this._removeManipulationDOM(),this.guiEnabled=!1)}},{key:"_createWrappers",value:function(){void 0===this.manipulationDiv&&(this.manipulationDiv=document.createElement("div"),this.manipulationDiv.className="vis-manipulation",this.editMode===!0?this.manipulationDiv.style.display="block":this.manipulationDiv.style.display="none",this.canvas.frame.appendChild(this.manipulationDiv)),void 0===this.editModeDiv&&(this.editModeDiv=document.createElement("div"),this.editModeDiv.className="vis-edit-mode",this.editMode===!0?this.editModeDiv.style.display="none":this.editModeDiv.style.display="block",this.canvas.frame.appendChild(this.editModeDiv)),void 0===this.closeDiv&&(this.closeDiv=document.createElement("div"),this.closeDiv.className="vis-close",this.closeDiv.style.display=this.manipulationDiv.style.display,this.canvas.frame.appendChild(this.closeDiv))}},{key:"_getNewTargetNode",value:function(t,e){var i=f.deepExtend({},this.options.controlNodeStyle);i.id="targetNode"+f.randomUUID(),i.hidden=!1,i.physics=!1,i.x=t,i.y=e;var o=this.body.functions.createNode(i);return o.shape.boundingBox={left:t,right:t,top:e,bottom:e},o}},{key:"_createEditButton",value:function(){this._clean(),this.manipulationDOM={},f.recursiveDOMDelete(this.editModeDiv);var t=this.options.locales[this.options.locale],e=this._createButton("editMode","vis-button vis-edit vis-edit-mode",t.edit||this.options.locales.en.edit);this.editModeDiv.appendChild(e),this._bindHammerToDiv(e,this.toggleEditMode.bind(this))}},{key:"_clean",value:function(){this.inMode=!1,this.guiEnabled===!0&&(f.recursiveDOMDelete(this.editModeDiv),f.recursiveDOMDelete(this.manipulationDiv),this._cleanManipulatorHammers()),this._cleanupTemporaryNodesAndEdges(),this._unbindTemporaryUIs(),this._unbindTemporaryEvents(),this.body.emitter.emit("restorePhysics")}},{key:"_cleanManipulatorHammers",value:function(){if(0!=this.manipulationHammers.length){for(var t=0;t<this.manipulationHammers.length;t++)this.manipulationHammers[t].destroy();this.manipulationHammers=[]}}},{key:"_removeManipulationDOM",value:function(){this._clean(),f.recursiveDOMDelete(this.manipulationDiv),f.recursiveDOMDelete(this.editModeDiv),f.recursiveDOMDelete(this.closeDiv),this.manipulationDiv&&this.canvas.frame.removeChild(this.manipulationDiv),this.editModeDiv&&this.canvas.frame.removeChild(this.editModeDiv),this.closeDiv&&this.canvas.frame.removeChild(this.closeDiv),this.manipulationDiv=void 0,this.editModeDiv=void 0,this.closeDiv=void 0}},{key:"_createSeperator",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.manipulationDOM["seperatorLineDiv"+t]=document.createElement("div"),this.manipulationDOM["seperatorLineDiv"+t].className="vis-separator-line",this.manipulationDiv.appendChild(this.manipulationDOM["seperatorLineDiv"+t])}},{key:"_createAddNodeButton",value:function(t){var e=this._createButton("addNode","vis-button vis-add",t.addNode||this.options.locales.en.addNode);this.manipulationDiv.appendChild(e),this._bindHammerToDiv(e,this.addNodeMode.bind(this))}},{key:"_createAddEdgeButton",value:function(t){var e=this._createButton("addEdge","vis-button vis-connect",t.addEdge||this.options.locales.en.addEdge);this.manipulationDiv.appendChild(e),this._bindHammerToDiv(e,this.addEdgeMode.bind(this))}},{key:"_createEditNodeButton",value:function(t){var e=this._createButton("editNode","vis-button vis-edit",t.editNode||this.options.locales.en.editNode);this.manipulationDiv.appendChild(e),this._bindHammerToDiv(e,this.editNode.bind(this))}},{key:"_createEditEdgeButton",value:function(t){var e=this._createButton("editEdge","vis-button vis-edit",t.editEdge||this.options.locales.en.editEdge);this.manipulationDiv.appendChild(e),this._bindHammerToDiv(e,this.editEdgeMode.bind(this))}},{key:"_createDeleteButton",value:function(t){if(this.options.rtl)var e="vis-button vis-delete-rtl";else var e="vis-button vis-delete";var i=this._createButton("delete",e,t.del||this.options.locales.en.del);this.manipulationDiv.appendChild(i),this._bindHammerToDiv(i,this.deleteSelected.bind(this))}},{key:"_createBackButton",value:function(t){var e=this._createButton("back","vis-button vis-back",t.back||this.options.locales.en.back);this.manipulationDiv.appendChild(e),this._bindHammerToDiv(e,this.showManipulatorToolbar.bind(this))}},{key:"_createButton",value:function(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"vis-label";return this.manipulationDOM[t+"Div"]=document.createElement("div"),this.manipulationDOM[t+"Div"].className=e,this.manipulationDOM[t+"Label"]=document.createElement("div"),this.manipulationDOM[t+"Label"].className=o,this.manipulationDOM[t+"Label"].innerHTML=i,this.manipulationDOM[t+"Div"].appendChild(this.manipulationDOM[t+"Label"]),this.manipulationDOM[t+"Div"]}},{key:"_createDescription",value:function(t){this.manipulationDiv.appendChild(this._createButton("description","vis-button vis-none",t))}},{key:"_temporaryBindEvent",value:function(t,e){this.temporaryEventFunctions.push({event:t,boundFunction:e}),this.body.emitter.on(t,e)}},{key:"_temporaryBindUI",value:function(t,e){if(void 0===this.body.eventListeners[t])throw new Error("This UI function does not exist. Typo? You tried: "+t+" possible are: "+(0,a.default)((0,s.default)(this.body.eventListeners)));this.temporaryUIFunctions[t]=this.body.eventListeners[t],this.body.eventListeners[t]=e}},{key:"_unbindTemporaryUIs",value:function(){for(var t in this.temporaryUIFunctions)this.temporaryUIFunctions.hasOwnProperty(t)&&(this.body.eventListeners[t]=this.temporaryUIFunctions[t],delete this.temporaryUIFunctions[t]);this.temporaryUIFunctions={}}},{key:"_unbindTemporaryEvents",value:function(){for(var t=0;t<this.temporaryEventFunctions.length;t++){var e=this.temporaryEventFunctions[t].event,i=this.temporaryEventFunctions[t].boundFunction;this.body.emitter.off(e,i)}this.temporaryEventFunctions=[]}},{key:"_bindHammerToDiv",value:function(t,e){var i=new m(t,{});v.onTouch(i,e),this.manipulationHammers.push(i)}},{key:"_cleanupTemporaryNodesAndEdges",value:function(){for(var t=0;t<this.temporaryIds.edges.length;t++){this.body.edges[this.temporaryIds.edges[t]].disconnect(),delete this.body.edges[this.temporaryIds.edges[t]];var e=this.body.edgeIndices.indexOf(this.temporaryIds.edges[t]);e!==-1&&this.body.edgeIndices.splice(e,1)}for(var i=0;i<this.temporaryIds.nodes.length;i++){delete this.body.nodes[this.temporaryIds.nodes[i]];var o=this.body.nodeIndices.indexOf(this.temporaryIds.nodes[i]);o!==-1&&this.body.nodeIndices.splice(o,1)}this.temporaryIds={nodes:[],edges:[]}}},{key:"_controlNodeTouch",value:function(t){this.selectionHandler.unselectAll(),this.lastTouch=this.body.functions.getPointer(t.center),this.lastTouch.translation=f.extend({},this.body.view.translation)}},{key:"_controlNodeDragStart",value:function(t){var e=this.lastTouch,i=this.selectionHandler._pointerToPositionObject(e),o=this.body.nodes[this.temporaryIds.nodes[0]],n=this.body.nodes[this.temporaryIds.nodes[1]],s=this.body.edges[this.edgeBeingEditedId];this.selectedControlNode=void 0;var r=o.isOverlappingWith(i),a=n.isOverlappingWith(i);r===!0?(this.selectedControlNode=o,s.edgeType.from=o):a===!0&&(this.selectedControlNode=n,s.edgeType.to=n),void 0!==this.selectedControlNode&&this.selectionHandler.selectObject(this.selectedControlNode),this.body.emitter.emit("_redraw")}},{key:"_controlNodeDrag",value:function(t){this.body.emitter.emit("disablePhysics");var e=this.body.functions.getPointer(t.center),i=this.canvas.DOMtoCanvas(e);if(void 0!==this.selectedControlNode)this.selectedControlNode.x=i.x,this.selectedControlNode.y=i.y;else{var o=e.x-this.lastTouch.x,n=e.y-this.lastTouch.y;this.body.view.translation={x:this.lastTouch.translation.x+o,y:this.lastTouch.translation.y+n}}this.body.emitter.emit("_redraw")}},{key:"_controlNodeDragEnd",value:function(t){var e=this.body.functions.getPointer(t.center),i=this.selectionHandler._pointerToPositionObject(e),o=this.body.edges[this.edgeBeingEditedId];if(void 0!==this.selectedControlNode){this.selectionHandler.unselectAll();for(var n=this.selectionHandler._getAllNodesOverlappingWith(i),s=void 0,r=n.length-1;r>=0;r--)if(n[r]!==this.selectedControlNode.id){s=this.body.nodes[n[r]];break}if(void 0!==s&&void 0!==this.selectedControlNode)if(s.isCluster===!0)alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError);else{var a=this.body.nodes[this.temporaryIds.nodes[0]];this.selectedControlNode.id===a.id?this._performEditEdge(s.id,o.to.id):this._performEditEdge(o.from.id,s.id)}else o.updateEdgeType(),this.body.emitter.emit("restorePhysics");this.body.emitter.emit("_redraw")}}},{key:"_handleConnect",value:function(t){if((new Date).valueOf()-this.touchTime>100){this.lastTouch=this.body.functions.getPointer(t.center),this.lastTouch.translation=f.extend({},this.body.view.translation);var e=this.lastTouch,i=this.selectionHandler.getNodeAt(e);if(void 0!==i)if(i.isCluster===!0)alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError);else{var o=this._getNewTargetNode(i.x,i.y);this.body.nodes[o.id]=o,this.body.nodeIndices.push(o.id);var n=this.body.functions.createEdge({id:"connectionEdge"+f.randomUUID(),from:i.id,to:o.id,physics:!1,smooth:{enabled:!0,type:"continuous",roundness:.5}});this.body.edges[n.id]=n,this.body.edgeIndices.push(n.id),this.temporaryIds.nodes.push(o.id),this.temporaryIds.edges.push(n.id)}this.touchTime=(new Date).valueOf()}}},{key:"_dragControlNode",value:function(t){var e=this.body.functions.getPointer(t.center);if(void 0!==this.temporaryIds.nodes[0]){var i=this.body.nodes[this.temporaryIds.nodes[0]];i.x=this.canvas._XconvertDOMtoCanvas(e.x),i.y=this.canvas._YconvertDOMtoCanvas(e.y),this.body.emitter.emit("_redraw")}else{var o=e.x-this.lastTouch.x,n=e.y-this.lastTouch.y;this.body.view.translation={x:this.lastTouch.translation.x+o,y:this.lastTouch.translation.y+n}}}},{key:"_finishConnect",value:function(t){var e=this.body.functions.getPointer(t.center),i=this.selectionHandler._pointerToPositionObject(e),o=void 0;void 0!==this.temporaryIds.edges[0]&&(o=this.body.edges[this.temporaryIds.edges[0]].fromId);for(var n=this.selectionHandler._getAllNodesOverlappingWith(i),s=void 0,r=n.length-1;r>=0;r--)if(this.temporaryIds.nodes.indexOf(n[r])===-1){s=this.body.nodes[n[r]];break}this._cleanupTemporaryNodesAndEdges(),void 0!==s&&(s.isCluster===!0?alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError):void 0!==this.body.nodes[o]&&void 0!==this.body.nodes[s.id]&&this._performAddEdge(o,s.id)),this.body.emitter.emit("_redraw")}},{key:"_performAddNode",value:function(t){var e=this,i={id:f.randomUUID(),x:t.pointer.canvas.x,y:t.pointer.canvas.y,label:"new"};if("function"==typeof this.options.addNode){if(2!==this.options.addNode.length)throw new Error("The function for add does not support two arguments (data,callback)");this.options.addNode(i,function(t){null!==t&&void 0!==t&&"addNode"===e.inMode&&(e.body.data.nodes.getDataSet().add(t),e.showManipulatorToolbar())})}else this.body.data.nodes.getDataSet().add(i),this.showManipulatorToolbar()}},{key:"_performAddEdge",value:function(t,e){var i=this,o={from:t,to:e};if("function"==typeof this.options.addEdge){if(2!==this.options.addEdge.length)throw new Error("The function for connect does not support two arguments (data,callback)");this.options.addEdge(o,function(t){null!==t&&void 0!==t&&"addEdge"===i.inMode&&(i.body.data.edges.getDataSet().add(t),i.selectionHandler.unselectAll(),i.showManipulatorToolbar())})}else this.body.data.edges.getDataSet().add(o),this.selectionHandler.unselectAll(),this.showManipulatorToolbar()}},{key:"_performEditEdge",value:function(t,e){var i=this,o={id:this.edgeBeingEditedId,from:t,to:e,label:this.body.data.edges._data[this.edgeBeingEditedId].label},n=this.options.editEdge;if("object"===(void 0===n?"undefined":(0,d.default)(n))&&(n=n.editWithoutDrag),"function"==typeof n){if(2!==n.length)throw new Error("The function for edit does not support two arguments (data, callback)");n(o,function(t){null===t||void 0===t||"editEdge"!==i.inMode?(i.body.edges[o.id].updateEdgeType(),i.body.emitter.emit("_redraw"),i.showManipulatorToolbar()):(i.body.data.edges.getDataSet().update(t),i.selectionHandler.unselectAll(),i.showManipulatorToolbar())})}else this.body.data.edges.getDataSet().update(o),this.selectionHandler.unselectAll(),this.showManipulatorToolbar()}}]),t}();e.default=g},function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var i="string",o="boolean",n="number",s="object",r={configure:{enabled:{boolean:o},filter:{boolean:o,string:i,array:"array",function:"function"},container:{dom:"dom"},showButton:{boolean:o},__type__:{object:s,boolean:o,string:i,array:"array",function:"function"}},edges:{arrows:{to:{enabled:{boolean:o},scaleFactor:{number:n},type:{string:["arrow","circle"]},__type__:{object:s,boolean:o}},middle:{enabled:{boolean:o},scaleFactor:{number:n},type:{string:["arrow","circle"]},__type__:{object:s,boolean:o}},from:{enabled:{boolean:o},scaleFactor:{number:n},type:{string:["arrow","circle"]},__type__:{object:s,boolean:o}},__type__:{string:["from","to","middle"],object:s}},arrowStrikethrough:{boolean:o},chosen:{label:{boolean:o,function:"function"},edge:{boolean:o,function:"function"},__type__:{object:s,boolean:o}},color:{color:{string:i},highlight:{string:i},hover:{string:i},inherit:{string:["from","to","both"],boolean:o},opacity:{number:n},__type__:{object:s,string:i}},dashes:{boolean:o,array:"array"},font:{color:{string:i},size:{number:n},face:{string:i},background:{string:i},strokeWidth:{number:n},strokeColor:{string:i},align:{string:["horizontal","top","middle","bottom"]},vadjust:{number:n},multi:{boolean:o,string:i},bold:{color:{string:i},size:{number:n},face:{string:i},mod:{string:i},vadjust:{number:n},__type__:{object:s,string:i}},boldital:{color:{string:i},size:{number:n},face:{string:i},mod:{string:i},vadjust:{number:n},__type__:{object:s,string:i}},ital:{color:{string:i},size:{number:n},face:{string:i},mod:{string:i},vadjust:{number:n},__type__:{object:s,string:i}},mono:{color:{string:i},size:{number:n},face:{string:i},mod:{string:i},vadjust:{number:n},__type__:{object:s,string:i}},__type__:{object:s,string:i}},hidden:{boolean:o},hoverWidth:{function:"function",number:n},label:{string:i,undefined:"undefined"},labelHighlightBold:{boolean:o},length:{number:n,undefined:"undefined"},physics:{boolean:o},scaling:{min:{number:n},max:{number:n},label:{enabled:{boolean:o},min:{number:n},max:{number:n},maxVisible:{number:n},drawThreshold:{number:n},__type__:{object:s,boolean:o}},customScalingFunction:{function:"function"},__type__:{object:s}},selectionWidth:{function:"function",number:n},selfReferenceSize:{number:n},shadow:{enabled:{boolean:o},color:{string:i},size:{number:n},x:{number:n},y:{number:n},__type__:{object:s,boolean:o}},smooth:{enabled:{boolean:o},type:{string:["dynamic","continuous","discrete","diagonalCross","straightCross","horizontal","vertical","curvedCW","curvedCCW","cubicBezier"]},roundness:{number:n},forceDirection:{string:["horizontal","vertical","none"],boolean:o},__type__:{object:s,boolean:o}},title:{string:i,undefined:"undefined"},width:{number:n},widthConstraint:{maximum:{number:n},__type__:{object:s,boolean:o,number:n}},value:{number:n,undefined:"undefined"},__type__:{object:s}},groups:{useDefaultGroups:{boolean:o},__any__:"get from nodes, will be overwritten below",__type__:{object:s}},interaction:{dragNodes:{boolean:o},dragView:{boolean:o},hideEdgesOnDrag:{boolean:o},hideNodesOnDrag:{boolean:o},hover:{boolean:o},keyboard:{enabled:{boolean:o},speed:{x:{number:n},y:{number:n},zoom:{number:n},__type__:{object:s}},bindToWindow:{boolean:o},__type__:{object:s,boolean:o}},multiselect:{boolean:o},navigationButtons:{boolean:o},selectable:{boolean:o},selectConnectedEdges:{boolean:o},hoverConnectedEdges:{boolean:o},tooltipDelay:{number:n},zoomView:{boolean:o},__type__:{object:s}},layout:{randomSeed:{undefined:"undefined",number:n},improvedLayout:{boolean:o},hierarchical:{enabled:{boolean:o},levelSeparation:{number:n},nodeSpacing:{number:n},treeSpacing:{number:n},blockShifting:{boolean:o},edgeMinimization:{boolean:o},parentCentralization:{boolean:o},direction:{string:["UD","DU","LR","RL"]},sortMethod:{string:["hubsize","directed"]},__type__:{object:s,boolean:o}},__type__:{object:s}},manipulation:{enabled:{boolean:o},initiallyActive:{boolean:o},addNode:{boolean:o,function:"function"},addEdge:{boolean:o,function:"function"},editNode:{function:"function"},editEdge:{editWithoutDrag:{function:"function"},__type__:{object:s,boolean:o,function:"function"}},deleteNode:{boolean:o,function:"function"},deleteEdge:{boolean:o,function:"function"},controlNodeStyle:"get from nodes, will be overwritten below",__type__:{object:s,boolean:o}},nodes:{borderWidth:{number:n},borderWidthSelected:{number:n,undefined:"undefined"},brokenImage:{string:i,undefined:"undefined"},chosen:{label:{boolean:o,function:"function"},node:{boolean:o,function:"function"},__type__:{object:s,boolean:o}},color:{border:{string:i},background:{string:i},highlight:{border:{string:i},background:{string:i},__type__:{object:s,string:i}},hover:{border:{string:i},background:{string:i},__type__:{object:s,string:i}},__type__:{object:s,string:i}},fixed:{x:{boolean:o},y:{boolean:o},__type__:{object:s,boolean:o}},font:{align:{string:i},color:{string:i},size:{number:n},face:{string:i},background:{string:i},strokeWidth:{number:n},strokeColor:{string:i},vadjust:{number:n},multi:{boolean:o,string:i},bold:{color:{string:i},size:{number:n},face:{string:i},mod:{string:i},vadjust:{number:n},__type__:{object:s,string:i}},boldital:{color:{string:i},size:{number:n},face:{string:i},mod:{string:i},vadjust:{number:n},__type__:{object:s,string:i}},ital:{color:{string:i},size:{number:n},face:{string:i},mod:{string:i},vadjust:{number:n},__type__:{object:s,string:i}},mono:{color:{string:i},size:{number:n},face:{string:i},mod:{string:i},vadjust:{number:n},__type__:{object:s,string:i}},__type__:{object:s,string:i}},group:{string:i,number:n,undefined:"undefined"},heightConstraint:{minimum:{number:n},valign:{string:i},__type__:{object:s,boolean:o,number:n}},hidden:{boolean:o},icon:{face:{string:i},code:{string:i},size:{number:n},color:{string:i},__type__:{object:s}},id:{string:i,number:n},image:{selected:{string:i,undefined:"undefined"},unselected:{string:i,undefined:"undefined"},__type__:{object:s,string:i}},label:{string:i,undefined:"undefined"},labelHighlightBold:{boolean:o},level:{number:n,undefined:"undefined"},margin:{top:{number:n},right:{number:n},bottom:{number:n},left:{number:n},__type__:{object:s,number:n}},mass:{number:n},physics:{boolean:o},scaling:{min:{number:n},max:{number:n},label:{enabled:{boolean:o},min:{number:n},max:{number:n},maxVisible:{number:n},drawThreshold:{number:n},__type__:{object:s,boolean:o}},customScalingFunction:{function:"function"},
__type__:{object:s}},shadow:{enabled:{boolean:o},color:{string:i},size:{number:n},x:{number:n},y:{number:n},__type__:{object:s,boolean:o}},shape:{string:["ellipse","circle","database","box","text","image","circularImage","diamond","dot","star","triangle","triangleDown","square","icon"]},shapeProperties:{borderDashes:{boolean:o,array:"array"},borderRadius:{number:n},interpolation:{boolean:o},useImageSize:{boolean:o},useBorderWithImage:{boolean:o},__type__:{object:s}},size:{number:n},title:{string:i,undefined:"undefined"},value:{number:n,undefined:"undefined"},widthConstraint:{minimum:{number:n},maximum:{number:n},__type__:{object:s,boolean:o,number:n}},x:{number:n},y:{number:n},__type__:{object:s}},physics:{enabled:{boolean:o},barnesHut:{gravitationalConstant:{number:n},centralGravity:{number:n},springLength:{number:n},springConstant:{number:n},damping:{number:n},avoidOverlap:{number:n},__type__:{object:s}},forceAtlas2Based:{gravitationalConstant:{number:n},centralGravity:{number:n},springLength:{number:n},springConstant:{number:n},damping:{number:n},avoidOverlap:{number:n},__type__:{object:s}},repulsion:{centralGravity:{number:n},springLength:{number:n},springConstant:{number:n},nodeDistance:{number:n},damping:{number:n},__type__:{object:s}},hierarchicalRepulsion:{centralGravity:{number:n},springLength:{number:n},springConstant:{number:n},nodeDistance:{number:n},damping:{number:n},__type__:{object:s}},maxVelocity:{number:n},minVelocity:{number:n},solver:{string:["barnesHut","repulsion","hierarchicalRepulsion","forceAtlas2Based"]},stabilization:{enabled:{boolean:o},iterations:{number:n},updateInterval:{number:n},onlyDynamicEdges:{boolean:o},fit:{boolean:o},__type__:{object:s,boolean:o}},timestep:{number:n},adaptiveTimestep:{boolean:o},__type__:{object:s,boolean:o}},autoResize:{boolean:o},clickToUse:{boolean:o},locale:{string:i},locales:{__any__:{any:"any"},__type__:{object:s}},height:{string:i},width:{string:i},__type__:{object:s}};r.groups.__any__=r.nodes,r.manipulation.controlNodeStyle=r.nodes;var a={nodes:{borderWidth:[1,0,10,1],borderWidthSelected:[2,0,10,1],color:{border:["color","#2B7CE9"],background:["color","#97C2FC"],highlight:{border:["color","#2B7CE9"],background:["color","#D2E5FF"]},hover:{border:["color","#2B7CE9"],background:["color","#D2E5FF"]}},fixed:{x:!1,y:!1},font:{color:["color","#343434"],size:[14,0,100,1],face:["arial","verdana","tahoma"],background:["color","none"],strokeWidth:[0,0,50,1],strokeColor:["color","#ffffff"]},hidden:!1,labelHighlightBold:!0,physics:!0,scaling:{min:[10,0,200,1],max:[30,0,200,1],label:{enabled:!1,min:[14,0,200,1],max:[30,0,200,1],maxVisible:[30,0,200,1],drawThreshold:[5,0,20,1]}},shadow:{enabled:!1,color:"rgba(0,0,0,0.5)",size:[10,0,20,1],x:[5,-30,30,1],y:[5,-30,30,1]},shape:["ellipse","box","circle","database","diamond","dot","square","star","text","triangle","triangleDown"],shapeProperties:{borderDashes:!1,borderRadius:[6,0,20,1],interpolation:!0,useImageSize:!1},size:[25,0,200,1]},edges:{arrows:{to:{enabled:!1,scaleFactor:[1,0,3,.05],type:"arrow"},middle:{enabled:!1,scaleFactor:[1,0,3,.05],type:"arrow"},from:{enabled:!1,scaleFactor:[1,0,3,.05],type:"arrow"}},arrowStrikethrough:!0,color:{color:["color","#848484"],highlight:["color","#848484"],hover:["color","#848484"],inherit:["from","to","both",!0,!1],opacity:[1,0,1,.05]},dashes:!1,font:{color:["color","#343434"],size:[14,0,100,1],face:["arial","verdana","tahoma"],background:["color","none"],strokeWidth:[2,0,50,1],strokeColor:["color","#ffffff"],align:["horizontal","top","middle","bottom"]},hidden:!1,hoverWidth:[1.5,0,5,.1],labelHighlightBold:!0,physics:!0,scaling:{min:[1,0,100,1],max:[15,0,100,1],label:{enabled:!0,min:[14,0,200,1],max:[30,0,200,1],maxVisible:[30,0,200,1],drawThreshold:[5,0,20,1]}},selectionWidth:[1.5,0,5,.1],selfReferenceSize:[20,0,200,1],shadow:{enabled:!1,color:"rgba(0,0,0,0.5)",size:[10,0,20,1],x:[5,-30,30,1],y:[5,-30,30,1]},smooth:{enabled:!0,type:["dynamic","continuous","discrete","diagonalCross","straightCross","horizontal","vertical","curvedCW","curvedCCW","cubicBezier"],forceDirection:["horizontal","vertical","none"],roundness:[.5,0,1,.05]},width:[1,0,30,1]},layout:{hierarchical:{enabled:!1,levelSeparation:[150,20,500,5],nodeSpacing:[100,20,500,5],treeSpacing:[200,20,500,5],blockShifting:!0,edgeMinimization:!0,parentCentralization:!0,direction:["UD","DU","LR","RL"],sortMethod:["hubsize","directed"]}},interaction:{dragNodes:!0,dragView:!0,hideEdgesOnDrag:!1,hideNodesOnDrag:!1,hover:!1,keyboard:{enabled:!1,speed:{x:[10,0,40,1],y:[10,0,40,1],zoom:[.02,0,.1,.005]},bindToWindow:!0},multiselect:!1,navigationButtons:!1,selectable:!0,selectConnectedEdges:!0,hoverConnectedEdges:!0,tooltipDelay:[300,0,1e3,25],zoomView:!0},manipulation:{enabled:!1,initiallyActive:!1},physics:{enabled:!0,barnesHut:{gravitationalConstant:[-2e3,-3e4,0,50],centralGravity:[.3,0,10,.05],springLength:[95,0,500,5],springConstant:[.04,0,1.2,.005],damping:[.09,0,1,.01],avoidOverlap:[0,0,1,.01]},forceAtlas2Based:{gravitationalConstant:[-50,-500,0,1],centralGravity:[.01,0,1,.005],springLength:[95,0,500,5],springConstant:[.08,0,1.2,.005],damping:[.4,0,1,.01],avoidOverlap:[0,0,1,.01]},repulsion:{centralGravity:[.2,0,10,.05],springLength:[200,0,500,5],springConstant:[.05,0,1.2,.005],nodeDistance:[100,0,500,5],damping:[.09,0,1,.01]},hierarchicalRepulsion:{centralGravity:[.2,0,10,.05],springLength:[100,0,500,5],springConstant:[.01,0,1.2,.005],nodeDistance:[120,0,500,5],damping:[.09,0,1,.01]},maxVelocity:[50,0,150,1],minVelocity:[.1,.01,.5,.01],solver:["barnesHut","forceAtlas2Based","repulsion","hierarchicalRepulsion"],timestep:[.5,.01,1,.01]}};e.allOptions=r,e.configureOptions=a},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(165),s=o(n),r=i(119),a=o(r),h=i(120),d=o(h),l=i(226),u=o(l),c=function(){function t(e,i,o){(0,a.default)(this,t),this.body=e,this.springLength=i,this.springConstant=o,this.distanceSolver=new u.default}return(0,d.default)(t,[{key:"setOptions",value:function(t){t&&(t.springLength&&(this.springLength=t.springLength),t.springConstant&&(this.springConstant=t.springConstant))}},{key:"solve",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=this.distanceSolver.getDistances(this.body,t,e);this._createL_matrix(o),this._createK_matrix(o);for(var n=0,r=Math.max(1e3,Math.min(10*this.body.nodeIndices.length,6e3)),a=1e9,h=0,d=0,l=0,u=0,c=0;a>.01&&n<r;){n+=1;var p=this._getHighestEnergyNode(i),f=(0,s.default)(p,4);for(h=f[0],a=f[1],d=f[2],l=f[3],u=a,c=0;u>1&&c<5;){c+=1,this._moveNode(h,d,l);var m=this._getEnergy(h),v=(0,s.default)(m,3);u=v[0],d=v[1],l=v[2]}}}},{key:"_getHighestEnergyNode",value:function(t){for(var e=this.body.nodeIndices,i=this.body.nodes,o=0,n=e[0],r=0,a=0,h=0;h<e.length;h++){var d=e[h];if(i[d].predefinedPosition===!1||i[d].isCluster===!0&&t===!0||i[d].options.fixed.x===!0||i[d].options.fixed.y===!0){var l=this._getEnergy(d),u=(0,s.default)(l,3),c=u[0],p=u[1],f=u[2];o<c&&(o=c,n=d,r=p,a=f)}}return[n,o,r,a]}},{key:"_getEnergy",value:function(t){for(var e=this.body.nodeIndices,i=this.body.nodes,o=i[t].x,n=i[t].y,s=0,r=0,a=0;a<e.length;a++){var h=e[a];if(h!==t){var d=i[h].x,l=i[h].y,u=1/Math.sqrt(Math.pow(o-d,2)+Math.pow(n-l,2));s+=this.K_matrix[t][h]*(o-d-this.L_matrix[t][h]*(o-d)*u),r+=this.K_matrix[t][h]*(n-l-this.L_matrix[t][h]*(n-l)*u)}}return[Math.sqrt(Math.pow(s,2)+Math.pow(r,2)),s,r]}},{key:"_moveNode",value:function(t,e,i){for(var o=this.body.nodeIndices,n=this.body.nodes,s=0,r=0,a=0,h=n[t].x,d=n[t].y,l=0;l<o.length;l++){var u=o[l];if(u!==t){var c=n[u].x,p=n[u].y,f=1/Math.pow(Math.pow(h-c,2)+Math.pow(d-p,2),1.5);s+=this.K_matrix[t][u]*(1-this.L_matrix[t][u]*Math.pow(d-p,2)*f),r+=this.K_matrix[t][u]*(this.L_matrix[t][u]*(h-c)*(d-p)*f),a+=this.K_matrix[t][u]*(1-this.L_matrix[t][u]*Math.pow(h-c,2)*f)}}var m=s,v=r,g=e,y=a,b=i,_=(g/m+b/v)/(v/m-y/v),w=-(v*_+g)/m;n[t].x+=w,n[t].y+=_}},{key:"_createL_matrix",value:function(t){var e=this.body.nodeIndices,i=this.springLength;this.L_matrix=[];for(var o=0;o<e.length;o++){this.L_matrix[e[o]]={};for(var n=0;n<e.length;n++)this.L_matrix[e[o]][e[n]]=i*t[e[o]][e[n]]}}},{key:"_createK_matrix",value:function(t){var e=this.body.nodeIndices,i=this.springConstant;this.K_matrix=[];for(var o=0;o<e.length;o++){this.K_matrix[e[o]]={};for(var n=0;n<e.length;n++)this.K_matrix[e[o]][e[n]]=i*Math.pow(t[e[o]][e[n]],-2)}}}]),t}();e.default=c},function(t,e,i){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(119),s=o(n),r=i(120),a=o(r),h=function(){function t(){(0,s.default)(this,t)}return(0,a.default)(t,[{key:"getDistances",value:function(t,e,i){for(var o={},n=t.edges,s=0;s<e.length;s++){o[e[s]]={},o[e[s]]={};for(var r=0;r<e.length;r++)o[e[s]][e[r]]=s==r?0:1e9,o[e[s]][e[r]]=s==r?0:1e9}for(var a=0;a<i.length;a++){var h=n[i[a]];h.connected===!0&&void 0!==o[h.fromId]&&void 0!==o[h.toId]&&(o[h.fromId][h.toId]=1,o[h.toId][h.fromId]=1)}for(var d=e.length,l=0;l<d;l++)for(var u=0;u<d-1;u++)for(var c=u+1;c<d;c++)o[e[u]][e[c]]=Math.min(o[e[u]][e[c]],o[e[u]][e[l]]+o[e[l]][e[c]]),o[e[c]][e[u]]=o[e[u]][e[c]];return o}}]),t}();e.default=h},function(t,e){"undefined"!=typeof CanvasRenderingContext2D&&(CanvasRenderingContext2D.prototype.circle=function(t,e,i){this.beginPath(),this.arc(t,e,i,0,2*Math.PI,!1),this.closePath()},CanvasRenderingContext2D.prototype.square=function(t,e,i){this.beginPath(),this.rect(t-i,e-i,2*i,2*i),this.closePath()},CanvasRenderingContext2D.prototype.triangle=function(t,e,i){this.beginPath(),i*=1.15,e+=.275*i;var o=2*i,n=o/2,s=Math.sqrt(3)/6*o,r=Math.sqrt(o*o-n*n);this.moveTo(t,e-(r-s)),this.lineTo(t+n,e+s),this.lineTo(t-n,e+s),this.lineTo(t,e-(r-s)),this.closePath()},CanvasRenderingContext2D.prototype.triangleDown=function(t,e,i){this.beginPath(),i*=1.15,e-=.275*i;var o=2*i,n=o/2,s=Math.sqrt(3)/6*o,r=Math.sqrt(o*o-n*n);this.moveTo(t,e+(r-s)),this.lineTo(t+n,e-s),this.lineTo(t-n,e-s),this.lineTo(t,e+(r-s)),this.closePath()},CanvasRenderingContext2D.prototype.star=function(t,e,i){this.beginPath(),i*=.82,e+=.1*i;for(var o=0;o<10;o++){var n=o%2==0?1.3*i:.5*i;this.lineTo(t+n*Math.sin(2*o*Math.PI/10),e-n*Math.cos(2*o*Math.PI/10))}this.closePath()},CanvasRenderingContext2D.prototype.diamond=function(t,e,i){this.beginPath(),this.lineTo(t,e+i),this.lineTo(t+i,e),this.lineTo(t,e-i),this.lineTo(t-i,e),this.closePath()},CanvasRenderingContext2D.prototype.roundRect=function(t,e,i,o,n){var s=Math.PI/180;i-2*n<0&&(n=i/2),o-2*n<0&&(n=o/2),this.beginPath(),this.moveTo(t+n,e),this.lineTo(t+i-n,e),this.arc(t+i-n,e+n,n,270*s,360*s,!1),this.lineTo(t+i,e+o-n),this.arc(t+i-n,e+o-n,n,0,90*s,!1),this.lineTo(t+n,e+o),this.arc(t+n,e+o-n,n,90*s,180*s,!1),this.lineTo(t,e+n),this.arc(t+n,e+n,n,180*s,270*s,!1),this.closePath()},CanvasRenderingContext2D.prototype.ellipse=function(t,e,i,o){var n=i/2*.5522848,s=o/2*.5522848,r=t+i,a=e+o,h=t+i/2,d=e+o/2;this.beginPath(),this.moveTo(t,d),this.bezierCurveTo(t,d-s,h-n,e,h,e),this.bezierCurveTo(h+n,e,r,d-s,r,d),this.bezierCurveTo(r,d+s,h+n,a,h,a),this.bezierCurveTo(h-n,a,t,d+s,t,d),this.closePath()},CanvasRenderingContext2D.prototype.database=function(t,e,i,o){var n=i,s=o*(1/3),r=n/2*.5522848,a=s/2*.5522848,h=t+n,d=e+s,l=t+n/2,u=e+s/2,c=e+(o-s/2),p=e+o;this.beginPath(),this.moveTo(h,u),this.bezierCurveTo(h,u+a,l+r,d,l,d),this.bezierCurveTo(l-r,d,t,u+a,t,u),this.bezierCurveTo(t,u-a,l-r,e,l,e),this.bezierCurveTo(l+r,e,h,u-a,h,u),this.lineTo(h,c),this.bezierCurveTo(h,c+a,l+r,p,l,p),this.bezierCurveTo(l-r,p,t,c+a,t,c),this.lineTo(t,u)},CanvasRenderingContext2D.prototype.arrowEndpoint=function(t,e,i,o){var n=t-o*Math.cos(i),s=e-o*Math.sin(i),r=t-.9*o*Math.cos(i),a=e-.9*o*Math.sin(i),h=n+o/3*Math.cos(i+.5*Math.PI),d=s+o/3*Math.sin(i+.5*Math.PI),l=n+o/3*Math.cos(i-.5*Math.PI),u=s+o/3*Math.sin(i-.5*Math.PI);this.beginPath(),this.moveTo(t,e),this.lineTo(h,d),this.lineTo(r,a),this.lineTo(l,u),this.closePath()},CanvasRenderingContext2D.prototype.circleEndpoint=function(t,e,i,o){var n=.4*o,s=t-n*Math.cos(i),r=e-n*Math.sin(i);this.circle(s,r,n)},CanvasRenderingContext2D.prototype.dashedLine=function(t,e,i,o,n){this.beginPath(),this.moveTo(t,e);for(var s=n.length,r=i-t,a=o-e,h=a/r,d=Math.sqrt(r*r+a*a),l=0,u=!0,c=0,p=n[0];d>=.1;)p=n[l++%s],p>d&&(p=d),c=Math.sqrt(p*p/(1+h*h)),c=r<0?-c:c,t+=c,e+=h*c,u===!0?this.lineTo(t,e):this.moveTo(t,e),d-=p,u=!u})},function(t,e,i){function o(t){return R=t,f()}function n(){z=0,A=R.charAt(0)}function s(){z++,A=R.charAt(z)}function r(){return R.charAt(z+1)}function a(t){return B.test(t)}function h(t,e){if(t||(t={}),e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function d(t,e,i){for(var o=e.split("."),n=t;o.length;){var s=o.shift();o.length?(n[s]||(n[s]={}),n=n[s]):n[s]=i}}function l(t,e){for(var i,o,n=null,s=[t],r=t;r.parent;)s.push(r.parent),r=r.parent;if(r.nodes)for(i=0,o=r.nodes.length;i<o;i++)if(e.id===r.nodes[i].id){n=r.nodes[i];break}for(n||(n={id:e.id},t.node&&(n.attr=h(n.attr,t.node))),i=s.length-1;i>=0;i--){var a=s[i];a.nodes||(a.nodes=[]),a.nodes.indexOf(n)===-1&&a.nodes.push(n)}e.attr&&(n.attr=h(n.attr,e.attr))}function u(t,e){if(t.edges||(t.edges=[]),t.edges.push(e),t.edge){var i=h({},t.edge);e.attr=h(i,e.attr)}}function c(t,e,i,o,n){var s={from:e,to:i,type:o};return t.edge&&(s.attr=h({},t.edge)),s.attr=h(s.attr||{},n),s}function p(){for(F=I.NULL,L="";" "===A||"\t"===A||"\n"===A||"\r"===A;)s();do{var t=!1;if("#"===A){for(var e=z-1;" "===R.charAt(e)||"\t"===R.charAt(e);)e--;if("\n"===R.charAt(e)||""===R.charAt(e)){for(;""!=A&&"\n"!=A;)s();t=!0}}if("/"===A&&"/"===r()){for(;""!=A&&"\n"!=A;)s();t=!0}if("/"===A&&"*"===r()){for(;""!=A;){if("*"===A&&"/"===r()){s(),s();break}s()}t=!0}for(;" "===A||"\t"===A||"\n"===A||"\r"===A;)s()}while(t);if(""===A)return void(F=I.DELIMITER);var i=A+r();if(N[i])return F=I.DELIMITER,L=i,s(),void s();if(N[A])return F=I.DELIMITER,L=A,void s();if(a(A)||"-"===A){for(L+=A,s();a(A);)L+=A,s();return"false"===L?L=!1:"true"===L?L=!0:isNaN(Number(L))||(L=Number(L)),void(F=I.IDENTIFIER)}if('"'===A){for(s();""!=A&&('"'!=A||'"'===A&&'"'===r());)L+=A,'"'===A&&s(),s();if('"'!=A)throw x('End of string " expected');return s(),void(F=I.IDENTIFIER)}for(F=I.UNKNOWN;""!=A;)L+=A,s();throw new SyntaxError('Syntax error in part "'+k(L,30)+'"')}function f(){var t={};if(n(),p(),"strict"===L&&(t.strict=!0,p()),"graph"!==L&&"digraph"!==L||(t.type=L,p()),F===I.IDENTIFIER&&(t.id=L,p()),"{"!=L)throw x("Angle bracket { expected");if(p(),m(t),"}"!=L)throw x("Angle bracket } expected");if(p(),""!==L)throw x("End of file expected");return p(),delete t.node,delete t.edge,delete t.graph,t}function m(t){for(;""!==L&&"}"!=L;)v(t),";"===L&&p()}function v(t){var e=g(t);if(e)return void _(t,e);if(!y(t)){if(F!=I.IDENTIFIER)throw x("Identifier expected");var i=L;if(p(),"="===L){if(p(),F!=I.IDENTIFIER)throw x("Identifier expected");t[i]=L,p()}else b(t,i)}}function g(t){var e=null;if("subgraph"===L&&(e={},e.type="subgraph",p(),F===I.IDENTIFIER&&(e.id=L,p())),"{"===L){if(p(),e||(e={}),e.parent=t,e.node=t.node,e.edge=t.edge,e.graph=t.graph,m(e),"}"!=L)throw x("Angle bracket } expected");p(),delete e.node,delete e.edge,delete e.graph,delete e.parent,t.subgraphs||(t.subgraphs=[]),t.subgraphs.push(e)}return e}function y(t){return"node"===L?(p(),t.node=w(),"node"):"edge"===L?(p(),t.edge=w(),"edge"):"graph"===L?(p(),t.graph=w(),"graph"):null}function b(t,e){var i={id:e},o=w();o&&(i.attr=o),l(t,i),_(t,e)}function _(t,e){for(;"->"===L||"--"===L;){var i,o=L;p();var n=g(t);if(n)i=n;else{if(F!=I.IDENTIFIER)throw x("Identifier or subgraph expected");i=L,l(t,{id:i}),p()}u(t,c(t,e,i,o,w())),e=i}}function w(){for(var t=null;"["===L;){for(p(),t={};""!==L&&"]"!=L;){if(F!=I.IDENTIFIER)throw x("Attribute name expected");var e=L;if(p(),"="!=L)throw x("Equal sign = expected");if(p(),F!=I.IDENTIFIER)throw x("Attribute value expected");d(t,e,L),p(),","==L&&p()}if("]"!=L)throw x("Bracket ] expected");p()}return t}function x(t){return new SyntaxError(t+', got "'+k(L,30)+'" (char '+z+")")}function k(t,e){return t.length<=e?t:t.substr(0,27)+"..."}function O(t,e,i){Array.isArray(t)?t.forEach(function(t){Array.isArray(e)?e.forEach(function(e){i(t,e)}):i(t,e)}):Array.isArray(e)?e.forEach(function(e){i(t,e)}):i(t,e)}function S(t,e,i){for(var o=e.split("."),n=o.pop(),s=t,r=0;r<o.length;r++){var a=o[r];a in s||(s[a]={}),s=s[a]}return s[n]=i,t}function M(t,e){var i={};for(var o in t)if(t.hasOwnProperty(o)){var n=e[o];Array.isArray(n)?n.forEach(function(e){S(i,e,t[o])}):"string"==typeof n?S(i,n,t[o]):S(i,o,t[o])}return i}function D(t){var e=o(t),i={nodes:[],edges:[],options:{}};if(e.nodes&&e.nodes.forEach(function(t){var e={id:t.id,label:String(t.label||t.id)};h(e,M(t.attr,E)),e.image&&(e.shape="image"),i.nodes.push(e)}),e.edges){var n=function(t){var e={from:t.from,to:t.to};return h(e,M(t.attr,P)),e.arrows="->"===t.type?"to":void 0,e};e.edges.forEach(function(t){var e,o;e=t.from instanceof Object?t.from.nodes:{id:t.from},o=t.to instanceof Object?t.to.nodes:{id:t.to},t.from instanceof Object&&t.from.edges&&t.from.edges.forEach(function(t){var e=n(t);i.edges.push(e)}),O(e,o,function(e,o){var s=c(i,e.id,o.id,t.type,t.attr),r=n(s);i.edges.push(r)}),t.to instanceof Object&&t.to.edges&&t.to.edges.forEach(function(t){var e=n(t);i.edges.push(e)})})}return e.attr&&(i.options=e.attr),i}var C=i(55),T=function(t){return t&&t.__esModule?t:{default:t}}(C),E={fontsize:"font.size",fontcolor:"font.color",labelfontcolor:"font.color",fontname:"font.face",color:["color.border","color.background"],fillcolor:"color.background",tooltip:"title",labeltooltip:"title"},P=(0,T.default)(E);P.color="color.color";var I={NULL:0,DELIMITER:1,IDENTIFIER:2,UNKNOWN:3},N={"{":!0,"}":!0,"[":!0,"]":!0,";":!0,"=":!0,",":!0,"->":!0,"--":!0},R="",z=0,A="",L="",F=I.NULL,B=/[a-zA-Z_0-9.:#]/;e.parseDOT=o,e.DOTToGraph=D},function(t,e){function i(t,e){var i=[],o=[],n={edges:{inheritColor:!1},nodes:{fixed:!1,parseColor:!1}};void 0!==e&&(void 0!==e.fixed&&(n.nodes.fixed=e.fixed),void 0!==e.parseColor&&(n.nodes.parseColor=e.parseColor),void 0!==e.inheritColor&&(n.edges.inheritColor=e.inheritColor));for(var s=t.edges,r=t.nodes,a=0;a<s.length;a++){var h={},d=s[a];h.id=d.id,h.from=d.source,h.to=d.target,h.attributes=d.attributes,h.label=d.label,h.title=void 0!==d.attributes?d.attributes.title:void 0,"Directed"===d.type&&(h.arrows="to"),d.color&&n.inheritColor===!1&&(h.color=d.color),i.push(h)}for(var a=0;a<r.length;a++){var l={},u=r[a];l.id=u.id,l.attributes=u.attributes,l.title=u.title,l.x=u.x,l.y=u.y,l.label=u.label,l.title=void 0!==u.attributes?u.attributes.title:void 0,n.nodes.parseColor===!0?l.color=u.color:l.color=void 0!==u.color?{background:u.color,border:u.color,highlight:{background:u.color,border:u.color},hover:{background:u.color,border:u.color}}:void 0,l.size=u.size,l.fixed=n.nodes.fixed&&void 0!==u.x&&void 0!==u.y,o.push(l)}return{nodes:o,edges:i}}e.parseGephi=i},function(t,e){e.en={edit:"Edit",del:"Delete selected",back:"Back",addNode:"Add Node",addEdge:"Add Edge",editNode:"Edit Node",editEdge:"Edit Edge",addDescription:"Click in an empty space to place a new node.",edgeDescription:"Click on a node and drag the edge to another node to connect them.",editEdgeDescription:"Click on the control points and drag them to a node to connect to it.",createEdgeError:"Cannot link edges to a cluster.",deleteClusterError:"Clusters cannot be deleted.",editClusterError:"Clusters cannot be edited."},e.en_EN=e.en,e.en_US=e.en,e.de={edit:"Editieren",del:"Lösche Auswahl",back:"Zurück",addNode:"Knoten hinzufügen",addEdge:"Kante hinzufügen",editNode:"Knoten editieren",editEdge:"Kante editieren",addDescription:"Klicke auf eine freie Stelle, um einen neuen Knoten zu plazieren.",edgeDescription:"Klicke auf einen Knoten und ziehe die Kante zu einem anderen Knoten, um diese zu verbinden.",editEdgeDescription:"Klicke auf die Verbindungspunkte und ziehe diese auf einen Knoten, um sie zu verbinden.",createEdgeError:"Es ist nicht möglich, Kanten mit Clustern zu verbinden.",deleteClusterError:"Cluster können nicht gelöscht werden.",editClusterError:"Cluster können nicht editiert werden."},e.de_DE=e.de,e.es={edit:"Editar",del:"Eliminar selección",back:"Átras",addNode:"Añadir nodo",addEdge:"Añadir arista",editNode:"Editar nodo",editEdge:"Editar arista",addDescription:"Haga clic en un lugar vacío para colocar un nuevo nodo.",edgeDescription:"Haga clic en un nodo y arrastre la arista hacia otro nodo para conectarlos.",editEdgeDescription:"Haga clic en un punto de control y arrastrelo a un nodo para conectarlo.",createEdgeError:"No se puede conectar una arista a un grupo.",deleteClusterError:"No es posible eliminar grupos.",editClusterError:"No es posible editar grupos."},e.es_ES=e.es,e.it={edit:"Modifica",del:"Cancella la selezione",back:"Indietro",addNode:"Aggiungi un nodo",addEdge:"Aggiungi un vertice",editNode:"Modifica il nodo",editEdge:"Modifica il vertice",addDescription:"Clicca per aggiungere un nuovo nodo",edgeDescription:"Clicca su un nodo e trascinalo ad un altro nodo per connetterli.",editEdgeDescription:"Clicca sui Punti di controllo e trascinali ad un nodo per connetterli.",createEdgeError:"Non si possono collegare vertici ad un cluster",deleteClusterError:"I cluster non possono essere cancellati",editClusterError:"I clusters non possono essere modificati."},e.it_IT=e.it,e.nl={edit:"Wijzigen",del:"Selectie verwijderen",back:"Terug",addNode:"Node toevoegen",addEdge:"Link toevoegen",editNode:"Node wijzigen",editEdge:"Link wijzigen",addDescription:"Klik op een leeg gebied om een nieuwe node te maken.",edgeDescription:"Klik op een node en sleep de link naar een andere node om ze te verbinden.",editEdgeDescription:"Klik op de verbindingspunten en sleep ze naar een node om daarmee te verbinden.",createEdgeError:"Kan geen link maken naar een cluster.",deleteClusterError:"Clusters kunnen niet worden verwijderd.",editClusterError:"Clusters kunnen niet worden aangepast."},e.nl_NL=e.nl,e.nl_BE=e.nl,e["pt-br"]={edit:"Editar",del:"Remover selecionado",back:"Voltar",addNode:"Adicionar nó",addEdge:"Adicionar aresta",editNode:"Editar nó",editEdge:"Editar aresta",addDescription:"Clique em um espaço em branco para adicionar um novo nó",edgeDescription:"Clique em um nó e arraste a aresta até outro nó para conectá-los",editEdgeDescription:"Clique nos pontos de controle e os arraste para um nó para conectá-los",createEdgeError:"Não foi possível linkar arestas a um cluster.",deleteClusterError:"Clusters não puderam ser removidos.",editClusterError:"Clusters não puderam ser editados."},e["pt-BR"]=e["pt-br"],e.pt_BR=e["pt-br"],e.pt_br=e["pt-br"],e.ru={edit:"Редактировать",del:"Удалить выбранное",back:"Назад",addNode:"Добавить узел",addEdge:"Добавить ребро",editNode:"Редактировать узел",editEdge:"Редактировать ребро",addDescription:"Кликните в свободное место, чтобы добавить новый узел.",edgeDescription:"Кликните на узел и протяните ребро к другому узлу, чтобы соединить их.",editEdgeDescription:"Кликните на контрольные точки и перетащите их в узел, чтобы подключиться к нему.",createEdgeError:"Невозможно соединить ребра в кластер.",deleteClusterError:"Кластеры не могут быть удалены",editClusterError:"Кластеры недоступны для редактирования."},e.ru_RU=e.ru}])});
//# sourceMappingURL=vis.map


/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : English (Australia) [en-au]
//! author : Jared Morse : https://github.com/jarcoal

;(function (global, factory) {
    true ? factory(__webpack_require__(30)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var enAu = moment.defineLocale('en-au', {
    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY h:mm A',
        LLLL : 'dddd, D MMMM YYYY h:mm A'
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'in %s',
        past : '%s ago',
        s : 'a few seconds',
        m : 'a minute',
        mm : '%d minutes',
        h : 'an hour',
        hh : '%d hours',
        d : 'a day',
        dd : '%d days',
        M : 'a month',
        MM : '%d months',
        y : 'a year',
        yy : '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return enAu;

})));


/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : English (Canada) [en-ca]
//! author : Jonathan Abourbih : https://github.com/jonbca

;(function (global, factory) {
    true ? factory(__webpack_require__(30)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var enCa = moment.defineLocale('en-ca', {
    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'YYYY-MM-DD',
        LL : 'MMMM D, YYYY',
        LLL : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'in %s',
        past : '%s ago',
        s : 'a few seconds',
        m : 'a minute',
        mm : '%d minutes',
        h : 'an hour',
        hh : '%d hours',
        d : 'a day',
        dd : '%d days',
        M : 'a month',
        MM : '%d months',
        y : 'a year',
        yy : '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

return enCa;

})));


/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : English (United Kingdom) [en-gb]
//! author : Chris Gedrim : https://github.com/chrisgedrim

;(function (global, factory) {
    true ? factory(__webpack_require__(30)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var enGb = moment.defineLocale('en-gb', {
    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'in %s',
        past : '%s ago',
        s : 'a few seconds',
        m : 'a minute',
        mm : '%d minutes',
        h : 'an hour',
        hh : '%d hours',
        d : 'a day',
        dd : '%d days',
        M : 'a month',
        MM : '%d months',
        y : 'a year',
        yy : '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return enGb;

})));


/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : English (Ireland) [en-ie]
//! author : Chris Cartlidge : https://github.com/chriscartlidge

;(function (global, factory) {
    true ? factory(__webpack_require__(30)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var enIe = moment.defineLocale('en-ie', {
    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD-MM-YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'in %s',
        past : '%s ago',
        s : 'a few seconds',
        m : 'a minute',
        mm : '%d minutes',
        h : 'an hour',
        hh : '%d hours',
        d : 'a day',
        dd : '%d days',
        M : 'a month',
        MM : '%d months',
        y : 'a year',
        yy : '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return enIe;

})));


/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : English (New Zealand) [en-nz]
//! author : Luke McGregor : https://github.com/lukemcgregor

;(function (global, factory) {
    true ? factory(__webpack_require__(30)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var enNz = moment.defineLocale('en-nz', {
    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY h:mm A',
        LLLL : 'dddd, D MMMM YYYY h:mm A'
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'in %s',
        past : '%s ago',
        s : 'a few seconds',
        m : 'a minute',
        mm : '%d minutes',
        h : 'an hour',
        hh : '%d hours',
        d : 'a day',
        dd : '%d days',
        M : 'a month',
        MM : '%d months',
        y : 'a year',
        yy : '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return enNz;

})));


/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : French (Canada) [fr-ca]
//! author : Jonathan Abourbih : https://github.com/jonbca

;(function (global, factory) {
    true ? factory(__webpack_require__(30)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var frCa = moment.defineLocale('fr-ca', {
    months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact : true,
    weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'YYYY-MM-DD',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Aujourd’hui à] LT',
        nextDay : '[Demain à] LT',
        nextWeek : 'dddd [à] LT',
        lastDay : '[Hier à] LT',
        lastWeek : 'dddd [dernier à] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'dans %s',
        past : 'il y a %s',
        s : 'quelques secondes',
        m : 'une minute',
        mm : '%d minutes',
        h : 'une heure',
        hh : '%d heures',
        d : 'un jour',
        dd : '%d jours',
        M : 'un mois',
        MM : '%d mois',
        y : 'un an',
        yy : '%d ans'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
    ordinal : function (number, period) {
        switch (period) {
            // Words with masculine grammatical gender: mois, trimestre, jour
            default:
            case 'M':
            case 'Q':
            case 'D':
            case 'DDD':
            case 'd':
                return number + (number === 1 ? 'er' : 'e');

            // Words with feminine grammatical gender: semaine
            case 'w':
            case 'W':
                return number + (number === 1 ? 're' : 'e');
        }
    }
});

return frCa;

})));


/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : French (Switzerland) [fr-ch]
//! author : Gaspard Bucher : https://github.com/gaspard

;(function (global, factory) {
    true ? factory(__webpack_require__(30)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var frCh = moment.defineLocale('fr-ch', {
    months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact : true,
    weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Aujourd’hui à] LT',
        nextDay : '[Demain à] LT',
        nextWeek : 'dddd [à] LT',
        lastDay : '[Hier à] LT',
        lastWeek : 'dddd [dernier à] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'dans %s',
        past : 'il y a %s',
        s : 'quelques secondes',
        m : 'une minute',
        mm : '%d minutes',
        h : 'une heure',
        hh : '%d heures',
        d : 'un jour',
        dd : '%d jours',
        M : 'un mois',
        MM : '%d mois',
        y : 'un an',
        yy : '%d ans'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
    ordinal : function (number, period) {
        switch (period) {
            // Words with masculine grammatical gender: mois, trimestre, jour
            default:
            case 'M':
            case 'Q':
            case 'D':
            case 'DDD':
            case 'd':
                return number + (number === 1 ? 'er' : 'e');

            // Words with feminine grammatical gender: semaine
            case 'w':
            case 'W':
                return number + (number === 1 ? 're' : 'e');
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return frCh;

})));


/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : French [fr]
//! author : John Fischer : https://github.com/jfroffice

;(function (global, factory) {
    true ? factory(__webpack_require__(30)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var fr = moment.defineLocale('fr', {
    months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact : true,
    weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Aujourd’hui à] LT',
        nextDay : '[Demain à] LT',
        nextWeek : 'dddd [à] LT',
        lastDay : '[Hier à] LT',
        lastWeek : 'dddd [dernier à] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'dans %s',
        past : 'il y a %s',
        s : 'quelques secondes',
        m : 'une minute',
        mm : '%d minutes',
        h : 'une heure',
        hh : '%d heures',
        d : 'un jour',
        dd : '%d jours',
        M : 'un mois',
        MM : '%d mois',
        y : 'un an',
        yy : '%d ans'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
    ordinal : function (number, period) {
        switch (period) {
            // TODO: Return 'e' when day of month > 1. Move this case inside
            // block for masculine words below.
            // See https://github.com/moment/moment/issues/3375
            case 'D':
                return number + (number === 1 ? 'er' : '');

            // Words with masculine grammatical gender: mois, trimestre, jour
            default:
            case 'M':
            case 'Q':
            case 'DDD':
            case 'd':
                return number + (number === 1 ? 'er' : 'e');

            // Words with feminine grammatical gender: semaine
            case 'w':
            case 'W':
                return number + (number === 1 ? 're' : 'e');
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return fr;

})));


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
    var k;
    for (k in obj) {
        // even if its not own property I'd still call it non-empty
        return false;
    }
    return true;
}

function isUndefined(input) {
    return input === void 0;
}

function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
    for (var i in b) {
        if (hasOwnProp(b, i)) {
            a[i] = b[i];
        }
    }

    if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}

function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        overflow        : -2,
        charsLeftOver   : 0,
        nullInput       : false,
        invalidMonth    : null,
        invalidFormat   : false,
        userInvalidated : false,
        iso             : false,
        parsedDateParts : [],
        meridiem        : null,
        rfc2822         : false,
        weekdayMismatch : false
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}

var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

var some$1 = some;

function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some$1.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
        to._i = from._i;
    }
    if (!isUndefined(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined(from._l)) {
        to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
        to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
        to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (var key in arguments[0]) {
                        arg += key + ': ' + arguments[0][key] + ', ';
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set (config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
            this[i] = prop;
        } else {
            this['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
        }
    }
    return res;
}

function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

var keys$1 = keys;

var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
    });

    return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
    return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    ss : '%d seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}

function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get (mom, unit) {
    return mom.isValid() ?
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$1 (mom, unit, value) {
    if (mom.isValid()) {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }
}

// MOMENTS

function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
        return this[units]();
    }
    return this;
}


function stringSet (units, value) {
    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units](value);
        }
    }
    return this;
}

function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '', i;
        for (i = 0; i < length; i++) {
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


var regexes = {};

function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

var indexOf$1 = indexOf;

function daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[MONTH] = month;
    } else {
        getParsingFlags(config).invalidMonth = input;
    }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
    if (!m) {
        return isArray(this._months) ? this._months :
            this._months['standalone'];
    }
    return isArray(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return isArray(this._monthsShort) ? this._monthsShort :
            this._monthsShort['standalone'];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse (monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = toInt(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth (value) {
    if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
    } else {
        return get(this, 'Month');
    }
}

function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
}

function computeMonthsParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

// FORMATTING

addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
    return isLeapYear(this.year());
}

function createDate (y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date = new Date(y, m, d, h, M, s, ms);

    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear, resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek, resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
    return this._week.dow;
}

function localeFirstDayOfYear () {
    return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        getParsingFlags(config).invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
    if (!m) {
        return isArray(this._weekdays) ? this._weekdays :
            this._weekdays['standalone'];
    }
    return isArray(this._weekdays) ? this._weekdays[m.day()] :
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse (weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ?
            this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ?
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ?
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}


function computeWeekdaysParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('k',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);
addRegexToken('kk', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
});
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}

function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            __webpack_require__(593)("./" + name);
            // because defineLocale currently also sets the global locale, we
            // want to undo that for lazy loaded locales
            getSetGlobalLocale(oldLocale);
        } catch (e) { }
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        }
    }

    return globalLocale._abbr;
}

function defineLocale (name, config) {
    if (config !== null) {
        var parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config
                });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);


        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale, parentConfig = baseConfig;
        // MERGE
        if (locales[name] != null) {
            parentConfig = locales[name]._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return keys$1(locales);
}

function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow =
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
            -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
    var i, l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
var basicRfcRegex = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;

// date and time from ref 2822 format
function configFromRFC2822(config) {
    var string, match, dayFormat,
        dateFormat, timeFormat, tzFormat;
    var timezones = {
        ' GMT': ' +0000',
        ' EDT': ' -0400',
        ' EST': ' -0500',
        ' CDT': ' -0500',
        ' CST': ' -0600',
        ' MDT': ' -0600',
        ' MST': ' -0700',
        ' PDT': ' -0700',
        ' PST': ' -0800'
    };
    var military = 'YXWVUTSRQPONZABCDEFGHIKLM';
    var timezone, timezoneIndex;

    string = config._i
        .replace(/\([^\)]*\)|[\n\t]/g, ' ') // Remove comments and folding whitespace
        .replace(/(\s\s+)/g, ' ') // Replace multiple-spaces with a single space
        .replace(/^\s|\s$/g, ''); // Remove leading and trailing spaces
    match = basicRfcRegex.exec(string);

    if (match) {
        dayFormat = match[1] ? 'ddd' + ((match[1].length === 5) ? ', ' : ' ') : '';
        dateFormat = 'D MMM ' + ((match[2].length > 10) ? 'YYYY ' : 'YY ');
        timeFormat = 'HH:mm' + (match[4] ? ':ss' : '');

        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        if (match[1]) { // day of week given
            var momentDate = new Date(match[2]);
            var momentDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][momentDate.getDay()];

            if (match[1].substr(0,3) !== momentDay) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return;
            }
        }

        switch (match[5].length) {
            case 2: // military
                if (timezoneIndex === 0) {
                    timezone = ' +0000';
                } else {
                    timezoneIndex = military.indexOf(match[5][1].toUpperCase()) - 12;
                    timezone = ((timezoneIndex < 0) ? ' -' : ' +') +
                        (('' + timezoneIndex).replace(/^-?/, '0')).match(/..$/)[0] + '00';
                }
                break;
            case 4: // Zone
                timezone = timezones[match[5]];
                break;
            default: // UT or +/-9999
                timezone = timezones[' GMT'];
        }
        match[5] = timezone;
        config._i = match.splice(1).join('');
        tzFormat = ' ZZ';
        config._f = dayFormat + dateFormat + timeFormat + tzFormat;
        configFromStringAndFormat(config);
        getParsingFlags(config).rfc2822 = true;
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    // Final attempt, use Input Fallback
    hooks.createFromInputFallback(config);
}

hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);

// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
    var i, date, input = [], currentDate, yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[HOUR] = 24;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// constant that refers to the RFC 2822 form
hooks.RFC_2822 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
    }
    if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i, parsedInput, tokens, token, skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,

        scoreToBeat,
        i,
        currentScore;

    if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}

function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig (config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
        return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
        return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
        config._d = input;
    } else if (isArray(format)) {
        configFromStringAndArray(config);
    } else if (format) {
        configFromStringAndFormat(config);
    }  else {
        configFromInput(config);
    }

    if (!isValid(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
        config._d = new Date(hooks.now());
    } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        configFromString(config);
    } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        configFromArray(config);
    } else if (isObject(input)) {
        configFromObject(config);
    } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}

var now = function () {
    return Date.now ? Date.now() : +(new Date());
};

var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

function isDurationValid(m) {
    for (var key in m) {
        if (!(ordering.indexOf(key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
        }
    }

    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
            if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }

    return true;
}

function isValid$1() {
    return this._isValid;
}

function createInvalid$1() {
    return createDuration(NaN);
}

function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    this._isValid = isDurationValid(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
        weeks * 7;
    // It is impossible translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
        quarters * 3 +
        years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
}

function isDuration (obj) {
    return obj instanceof Duration;
}

function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

// FORMATTING

function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
        return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
    } else {
        return createLocal(input).local();
    }
}

function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone (input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset () {
    if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        }
        else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted () {
    if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
            compareArrays(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal () {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
}

function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
        duration = {
            ms : input._milliseconds,
            d  : input._days,
            M  : input._months
        };
    } else if (isNumber(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y  : 0,
            d  : toInt(match[DATE])                         * sign,
            h  : toInt(match[HOUR])                         * sign,
            m  : toInt(match[MINUTE])                       * sign,
            s  : toInt(match[SECOND])                       * sign,
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y : parseIso(match[2], sign),
            M : parseIso(match[3], sign),
            w : parseIso(match[4], sign),
            d : parseIso(match[5], sign),
            h : parseIso(match[6], sign),
            m : parseIso(match[7], sign),
            s : parseIso(match[8], sign)
        };
    } else if (duration == null) {// checks for null or undefined
        duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;

function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
        (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val; val = period; period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
    return new Moment(this);
}

function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
    var that,
        zoneDelta,
        delta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    if (units === 'year' || units === 'month' || units === 'quarter') {
        output = monthDiff(this, that);
        if (units === 'quarter') {
            output = output / 3;
        } else if (units === 'year') {
            output = output / 12;
        }
    } else {
        delta = this - that;
        output = units === 'second' ? delta / 1e3 : // 1000
            units === 'minute' ? delta / 6e4 : // 1000 * 60
            units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
            units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
            units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
            delta;
    }
    return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2, adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString() {
    if (!this.isValid()) {
        return null;
    }
    var m = this.clone().utc();
    if (m.year() < 0 || m.year() > 9999) {
        return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }
    if (isFunction(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        return this.toDate().toISOString();
    }
    return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect () {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData () {
    return this._locale;
}

function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
        units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
    return Math.floor(this.valueOf() / 1000);
}

function toDate () {
    return new Date(this.valueOf());
}

function toArray () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}

function isValid$2 () {
    return isValid(this);
}

function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

function invalidAt () {
    return getParsingFlags(this).overflow;
}

function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return weekOfYear(this, dow, doy).year;
    } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIOROITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ?
      (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
      locale._dayOfMonthOrdinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0], 10);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;

proto.add               = add;
proto.calendar          = calendar$1;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid$2;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray;
proto.toObject          = toObject;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;

// Year
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;

// Week Year
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;

// Quarter
proto.quarter = proto.quarters = getSetQuarter;

// Month
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;

// Week
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;

// Day
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;

// Hour
proto.hour = proto.hours = getSetHour;

// Minute
proto.minute = proto.minutes = getSetMinute;

// Second
proto.second = proto.seconds = getSetSecond;

// Millisecond
proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;

// Timezone
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;

// Deprecations
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
    return string;
}

var proto$1 = Locale.prototype;

proto$1.calendar        = calendar;
proto$1.longDateFormat  = longDateFormat;
proto$1.invalidDate     = invalidDate;
proto$1.ordinal         = ordinal;
proto$1.preparse        = preParsePostFormat;
proto$1.postformat      = preParsePostFormat;
proto$1.relativeTime    = relativeTime;
proto$1.pastFuture      = pastFuture;
proto$1.set             = set;

// Month
proto$1.months            =        localeMonths;
proto$1.monthsShort       =        localeMonthsShort;
proto$1.monthsParse       =        localeMonthsParse;
proto$1.monthsRegex       = monthsRegex;
proto$1.monthsShortRegex  = monthsShortRegex;

// Week
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
proto$1.weekdays       =        localeWeekdays;
proto$1.weekdaysMin    =        localeWeekdaysMin;
proto$1.weekdaysShort  =        localeWeekdaysShort;
proto$1.weekdaysParse  =        localeWeekdaysParse;

proto$1.weekdaysRegex       =        weekdaysRegex;
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$1 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
    if (isNumber(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

// Side effect imports
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
}

function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$1 (input, value) {
    return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
}

function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}

function as (units) {
    if (!this.isValid()) {
        return NaN;
    }
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
        days   = this._days   + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week'   : return days / 7     + milliseconds / 6048e5;
            case 'day'    : return days         + milliseconds / 864e5;
            case 'hour'   : return days * 24    + milliseconds / 36e5;
            case 'minute' : return days * 1440  + milliseconds / 6e4;
            case 'second' : return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
            default: throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
    if (!this.isValid()) {
        return NaN;
    }
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
    );
}

function makeAs (alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function get$2 (units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
    return function () {
        return this.isValid() ? this._data[name] : NaN;
    };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
    return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
    ss: 44,         // a few seconds to seconds
    s : 45,         // seconds to minute
    m : 45,         // minutes to hour
    h : 22,         // hours to day
    d : 26,         // days to month
    M : 11          // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds <= thresholds.ss && ['s', seconds]  ||
            seconds < thresholds.s   && ['ss', seconds] ||
            minutes <= 1             && ['m']           ||
            minutes < thresholds.m   && ['mm', minutes] ||
            hours   <= 1             && ['h']           ||
            hours   < thresholds.h   && ['hh', hours]   ||
            days    <= 1             && ['d']           ||
            days    < thresholds.d   && ['dd', days]    ||
            months  <= 1             && ['M']           ||
            months  < thresholds.M   && ['MM', months]  ||
            years   <= 1             && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof(roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}

function humanize (withSuffix) {
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}

var abs$1 = Math.abs;

function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds;
    var total = this.asSeconds();

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    return (total < 0 ? '-' : '') +
        'P' +
        (Y ? Y + 'Y' : '') +
        (M ? M + 'M' : '') +
        (D ? D + 'D' : '') +
        ((h || m || s) ? 'T' : '') +
        (h ? h + 'H' : '') +
        (m ? m + 'M' : '') +
        (s ? s + 'S' : '');
}

var proto$2 = Duration.prototype;

proto$2.isValid        = isValid$1;
proto$2.abs            = abs;
proto$2.add            = add$1;
proto$2.subtract       = subtract$1;
proto$2.as             = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds      = asSeconds;
proto$2.asMinutes      = asMinutes;
proto$2.asHours        = asHours;
proto$2.asDays         = asDays;
proto$2.asWeeks        = asWeeks;
proto$2.asMonths       = asMonths;
proto$2.asYears        = asYears;
proto$2.valueOf        = valueOf$1;
proto$2._bubble        = bubble;
proto$2.get            = get$2;
proto$2.milliseconds   = milliseconds;
proto$2.seconds        = seconds;
proto$2.minutes        = minutes;
proto$2.hours          = hours;
proto$2.days           = days;
proto$2.weeks          = weeks;
proto$2.months         = months;
proto$2.years          = years;
proto$2.humanize       = humanize;
proto$2.toISOString    = toISOString$1;
proto$2.toString       = toISOString$1;
proto$2.toJSON         = toISOString$1;
proto$2.locale         = locale;
proto$2.localeData     = localeData;

// Deprecations
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});

// Side effect imports


hooks.version = '2.18.1';

setHookCallback(createLocal);

hooks.fn                    = proto;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto;

return hooks;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(101)(module)))

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en-au": 270,
	"./en-au.js": 270,
	"./en-ca": 271,
	"./en-ca.js": 271,
	"./en-gb": 272,
	"./en-gb.js": 272,
	"./en-ie": 273,
	"./en-ie.js": 273,
	"./en-nz": 274,
	"./en-nz.js": 274,
	"./fr": 277,
	"./fr-ca": 275,
	"./fr-ca.js": 275,
	"./fr-ch": 276,
	"./fr-ch.js": 276,
	"./fr.js": 277
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 593;

/***/ }),

/***/ 829:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30);
module.exports = __webpack_require__(212);


/***/ })

},[829]);
//# sourceMappingURL=vendor.6d371b85e23567ea057e.js.map