/*! jQuery v1.12.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=R.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.rnamespace||a.rnamespace.test(g.namespace))&&(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ra(b),i=l.boxSizing&&"border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Sa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Oa.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+eb(b,c,e||(i?"border":"content"),f,h)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){
return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb,tb,ub=n.expr.attrHandle,vb=/^(?:checked|selected)$/i,wb=l.getSetAttribute,xb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?tb:sb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?xb&&wb||!vb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(wb?c:d)}}),tb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):xb&&wb||!vb.test(c)?a.setAttribute(!wb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ub[b]||n.find.attr;xb&&wb||!vb.test(b)?ub[b]=function(a,b,d){var e,f;return d||(f=ub[b],ub[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ub[b]=f),e}:ub[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),xb&&wb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):sb&&sb.set(a,b,c)}}),wb||(sb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ub.id=ub.name=ub.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:sb.set},n.attrHooks.contenteditable={set:function(a,b,c){sb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var yb=/^(?:input|select|textarea|button|object)$/i,zb=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):yb.test(a.nodeName)||zb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Ab=/[\t\r\n\f]/g;function Bb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Bb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Bb(c),d=1===c.nodeType&&(" "+e+" ").replace(Ab," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Bb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Bb(c),d=1===c.nodeType&&(" "+e+" ").replace(Ab," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Bb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(void 0===a||"boolean"===c)&&(b=Bb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Bb(c)+" ").replace(Ab," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Cb=a.location,Db=n.now(),Eb=/\?/,Fb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Fb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Gb=/#.*$/,Hb=/([?&])_=[^&]*/,Ib=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Jb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Kb=/^(?:GET|HEAD)$/,Lb=/^\/\//,Mb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Nb={},Ob={},Pb="*/".concat("*"),Qb=Cb.href,Rb=Mb.exec(Qb.toLowerCase())||[];function Sb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Tb(a,b,c,d){var e={},f=a===Ob;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ub(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Vb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Wb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Qb,type:"GET",isLocal:Jb.test(Rb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Pb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ub(Ub(a,n.ajaxSettings),b):Ub(n.ajaxSettings,a)},ajaxPrefilter:Sb(Nb),ajaxTransport:Sb(Ob),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Ib.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Qb)+"").replace(Gb,"").replace(Lb,Rb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Mb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Rb[1]&&d[2]===Rb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Rb[3]||("http:"===Rb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Tb(Nb,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Kb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Eb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Hb.test(f)?f.replace(Hb,"$1_="+Db++):f+(Eb.test(f)?"&":"?")+"_="+Db++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Pb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Tb(Ob,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Vb(l,w,d)),v=Wb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,(b||!y)&&(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Xb(a){return a.style&&a.style.display||n.css(a,"display")}function Yb(a){while(a&&1===a.nodeType){if("none"===Xb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Yb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Zb=/%20/g,$b=/\[\]$/,_b=/\r?\n/g,ac=/^(?:submit|button|image|reset|file)$/i,bc=/^(?:input|select|textarea|keygen)/i;function cc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||$b.test(a)?d(a,e):cc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)cc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)cc(c,a[c],b,e);return d.join("&").replace(Zb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&bc.test(this.nodeName)&&!ac.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(_b,"\r\n")}}):{name:b.name,value:c.replace(_b,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?hc():d.documentMode>8?gc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&gc()||hc()}:gc;var dc=0,ec={},fc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in ec)ec[a](void 0,!0)}),l.cors=!!fc&&"withCredentials"in fc,fc=l.ajax=!!fc,fc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++dc;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete ec[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=ec[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function gc(){try{return new a.XMLHttpRequest}catch(b){}}function hc(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ic=[],jc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ic.pop()||n.expando+"_"+Db++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(jc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&jc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(jc,"$1"+e):b.jsonp!==!1&&(b.url+=(Eb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ic.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),l.createHTMLDocument=function(){if(!d.implementation.createHTMLDocument)return!1;var a=d.implementation.createHTMLDocument("");return a.body.innerHTML="<form></form><form></form>",2===a.body.childNodes.length}(),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||(l.createHTMLDocument?d.implementation.createHTMLDocument(""):d);var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var kc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&kc)return kc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function lc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=lc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=lc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e);
},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var mc=a.jQuery,nc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=nc),b&&a.jQuery===n&&(a.jQuery=mc),n},b||(a.jQuery=a.$=n),n});

/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function r(e){return 11===e?pe:10===e?se:pe||se}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent||null;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TH','TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return ee(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function c(e){var t=e.body,o=e.documentElement,n=r(10)&&getComputedStyle(o);return{height:h('Height',t,o,n),width:h('Width',t,o,n)}}function g(e){return fe({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c(e.ownerDocument):{},d=s.width||e.clientWidth||p.right-p.left,a=s.height||e.clientHeight||p.bottom-p.top,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&s&&(a.top=ee(a.top,0),a.left=ee(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var w=parseFloat(m.marginTop,10),y=parseFloat(m.marginLeft,10);b.top-=h-w,b.bottom-=h-w,b.left-=c-y,b.right-=c-y,b.marginTop=w,b.marginLeft=y}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function w(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=ee(o.clientWidth,window.innerWidth||0),r=ee(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function y(e){var n=e.nodeName;if('BODY'===n||'HTML'===n)return!1;if('fixed'===t(e,'position'))return!0;var i=o(e);return!!i&&y(i)}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,i,r){var p=4<arguments.length&&void 0!==arguments[4]&&arguments[4],s={top:0,left:0},d=p?E(e):a(e,t);if('viewport'===r)s=w(d,p);else{var l;'scrollParent'===r?(l=n(o(t)),'BODY'===l.nodeName&&(l=e.ownerDocument.documentElement)):'window'===r?l=e.ownerDocument.documentElement:l=r;var f=b(l,d,p);if('HTML'===l.nodeName&&!y(d)){var m=c(e.ownerDocument),h=m.height,g=m.width;s.top+=f.top-f.marginTop,s.bottom=h+f.top,s.left+=f.left-f.marginLeft,s.right=g+f.left}else s=f}i=i||0;var u='number'==typeof i;return s.left+=u?i:i.left||0,s.top+=u?i:i.top||0,s.right-=u?i:i.right||0,s.bottom-=u?i:i.bottom||0,s}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return fe({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,i=n?E(t):a(t,o);return b(o,i,n)}function S(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function D(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function C(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=C(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=D(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function H(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function B(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[H('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function F(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function j(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function V(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=$,p=function(e){return e},s=r(i.width),d=r(n.width),a=-1!==['left','right'].indexOf(e.placement),l=-1!==e.placement.indexOf('-'),f=t?a||l||s%2==d%2?r:Z:p,m=t?r:p;return{left:f(1==s%2&&1==d%2&&!l&&t?n.left-1:n.left),top:m(n.top),bottom:m(n.bottom),right:f(n.right)}}function K(e,t,o){var n=C(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function z(e){return'end'===e?'start':'start'===e?'end':e}function G(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ce.indexOf(e),n=ce.slice(o+1).concat(ce.slice(0,o));return t?n.reverse():n}function _(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?ee(document.documentElement.clientHeight,window.innerHeight||0):ee(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function X(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(C(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return _(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function J(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:X(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var Q=Math.min,Z=Math.floor,$=Math.round,ee=Math.max,te='undefined'!=typeof window&&'undefined'!=typeof document,oe=['Edge','Trident','Firefox'],ne=0,ie=0;ie<oe.length;ie+=1)if(te&&0<=navigator.userAgent.indexOf(oe[ie])){ne=1;break}var i=te&&window.Promise,re=i?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ne))}},pe=te&&!!(window.MSInputMethodContext&&document.documentMode),se=te&&/MSIE 10/.test(navigator.userAgent),de=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},ae=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),le=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},fe=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},me=te&&/Firefox/i.test(navigator.userAgent),he=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ce=he.slice(3),ge={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ue=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};de(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=re(this.update.bind(this)),this.options=fe({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(fe({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=fe({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return fe({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return ae(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return B.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ue.Utils=('undefined'==typeof window?global:window).PopperUtils,ue.placements=he,ue.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:le({},d,r[d]),end:le({},d,r[d]+r[a]-p[a])};e.offsets.popper=fe({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:J,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=H('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=ee(f[e],a[e])),le({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=Q(f[o],a[e]-('right'===e?f.width:f.height))),le({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=fe({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!K(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=ee(Q(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},le(n,m,$(v)),le(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ge.FLIP:p=[n,i];break;case ge.CLOCKWISE:p=G(n);break;case ge.COUNTERCLOCKWISE:p=G(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u);(m||b||y)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),y&&(r=z(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=fe({},e.offsets.popper,D(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=C(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=C(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h=q(e,2>window.devicePixelRatio||!me),c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=H('transform');if(d='bottom'==c?'HTML'===l.nodeName?-l.clientHeight+h.bottom:-f.height+h.bottom:h.top,s='right'==g?'HTML'===l.nodeName?-l.clientWidth+h.right:-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==g?-1:1;m[c]=d*w,m[g]=s*y,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=fe({},E,e.attributes),e.styles=fe({},m,e.styles),e.arrowStyles=fe({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return j(e.instance.popper,e.styles),V(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&j(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),j(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ue});
//# sourceMappingURL=popper.min.js.map

/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,g,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}g=g&&g.hasOwnProperty("default")?g.default:g,u=u&&u.hasOwnProperty("default")?u.default:u;var e="transitionend";function n(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}};g.fn.emulateTransitionEnd=n,g.event.special[_.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var o="alert",r="bs.alert",a="."+r,c=g.fn[o],h={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",m="show",p=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,r),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=g(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=g.Event(h.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(m),g(e).hasClass(d)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(h.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(r);e||(e=new i(this),t.data(r,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),g.fn[o]=p._jQueryInterface,g.fn[o].Constructor=p,g.fn[o].noConflict=function(){return g.fn[o]=c,p._jQueryInterface};var v="button",y="bs.button",E="."+y,C=".data-api",T=g.fn[v],S="active",b="btn",I="focus",D='[data-toggle^="button"]',w='[data-toggle="buttons"]',A='input:not([type="hidden"])',N=".active",O=".btn",k={CLICK_DATA_API:"click"+E+C,FOCUS_BLUR_DATA_API:"focus"+E+C+" blur"+E+C},P=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(w)[0];if(n){var i=this._element.querySelector(A);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(N);o&&g(o).removeClass(S)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(S),g(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S)},t.dispose=function(){g.removeData(this._element,y),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(y);t||(t=new n(this),g(this).data(y,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),n}();g(document).on(k.CLICK_DATA_API,D,function(t){t.preventDefault();var e=t.target;g(e).hasClass(b)||(e=g(e).closest(O)),P._jQueryInterface.call(g(e),"toggle")}).on(k.FOCUS_BLUR_DATA_API,D,function(t){var e=g(t.target).closest(O)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g.fn[v]=P._jQueryInterface,g.fn[v].Constructor=P,g.fn[v].noConflict=function(){return g.fn[v]=T,P._jQueryInterface};var L="carousel",j="bs.carousel",H="."+j,R=".data-api",x=g.fn[L],F={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},W="next",q="prev",M="left",K="right",Q={SLIDE:"slide"+H,SLID:"slid"+H,KEYDOWN:"keydown"+H,MOUSEENTER:"mouseenter"+H,MOUSELEAVE:"mouseleave"+H,TOUCHSTART:"touchstart"+H,TOUCHMOVE:"touchmove"+H,TOUCHEND:"touchend"+H,POINTERDOWN:"pointerdown"+H,POINTERUP:"pointerup"+H,DRAG_START:"dragstart"+H,LOAD_DATA_API:"load"+H+R,CLICK_DATA_API:"click"+H+R},B="carousel",V="active",Y="slide",z="carousel-item-right",X="carousel-item-left",$="carousel-item-next",G="carousel-item-prev",J="pointer-event",Z=".active",tt=".active.carousel-item",et=".carousel-item",nt=".carousel-item img",it=".carousel-item-next, .carousel-item-prev",ot=".carousel-indicators",rt="[data-slide], [data-slide-to]",st='[data-ride="carousel"]',at={TOUCH:"touch",PEN:"pen"},lt=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(ot),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(W)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(it)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(tt);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?W:q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(H),g.removeData(this._element,j),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},F,t),_.typeCheckConfig(L,t,U),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;0<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var n=this;if(this._touchSupported){var e=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]?n.touchStartX=t.originalEvent.clientX:n._pointerEvent||(n.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]&&(n.touchDeltaX=t.originalEvent.clientX-n.touchStartX),n._handleSwipe(),"hover"===n._config.pause&&(n.pause(),n.touchTimeout&&clearTimeout(n.touchTimeout),n.touchTimeout=setTimeout(function(t){return n.cycle(t)},500+n._config.interval))};g(this._element.querySelectorAll(nt)).on(Q.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Q.POINTERDOWN,function(t){return e(t)}),g(this._element).on(Q.POINTERUP,function(t){return i(t)}),this._element.classList.add(J)):(g(this._element).on(Q.TOUCHSTART,function(t){return e(t)}),g(this._element).on(Q.TOUCHMOVE,function(t){var e;(e=t).originalEvent.touches&&1<e.originalEvent.touches.length?n.touchDeltaX=0:n.touchDeltaX=e.originalEvent.touches[0].clientX-n.touchStartX}),g(this._element).on(Q.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(et)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===W,i=t===q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===q?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(tt)),o=g.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(Z));g(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(V)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(tt),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===W?(n=X,i=$,M):(n=z,i=G,K),l&&g(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Q.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass(Y)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);this._config.interval=f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,f):this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(V),g(s).removeClass(V+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(V),g(l).addClass(V),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(j),e=l({},F,g(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(j,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(B)){var i=l({},g(n).data(),g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(j).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return F}}]),r}();g(document).on(Q.CLICK_DATA_API,rt,lt._dataApiClickHandler),g(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(st)),e=0,n=t.length;e<n;e++){var i=g(t[e]);lt._jQueryInterface.call(i,i.data())}}),g.fn[L]=lt._jQueryInterface,g.fn[L].Constructor=lt,g.fn[L].noConflict=function(){return g.fn[L]=x,lt._jQueryInterface};var ct="collapse",ht="bs.collapse",ut="."+ht,ft=g.fn[ct],dt={toggle:!0,parent:""},gt={toggle:"boolean",parent:"(string|element)"},_t={SHOW:"show"+ut,SHOWN:"shown"+ut,HIDE:"hide"+ut,HIDDEN:"hidden"+ut,CLICK_DATA_API:"click"+ut+".data-api"},mt="show",pt="collapse",vt="collapsing",yt="collapsed",Et="width",Ct="height",Tt=".show, .collapsing",St='[data-toggle="collapse"]',bt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(St)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(mt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(mt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(pt)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(ht))&&e._isTransitioning))){var i=g.Event(_t.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(ht,null));var o=this._getDimension();g(this._element).removeClass(pt).addClass(vt),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(yt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(vt).addClass(pt).addClass(mt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(_t.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(mt)){var e=g.Event(_t.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(vt).removeClass(pt).removeClass(mt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(mt)||g(r).addClass(yt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,ht),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},dt,t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ct,t,gt),t},t._getDimension=function(){return g(this._element).hasClass(Et)?Et:Ct},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(mt);e.length&&g(e).toggleClass(yt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(ht),n=l({},dt,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(ht,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return dt}}]),a}();g(document).on(_t.CLICK_DATA_API,St,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(ht)?"toggle":n.data();bt._jQueryInterface.call(t,e)})}),g.fn[ct]=bt._jQueryInterface,g.fn[ct].Constructor=bt,g.fn[ct].noConflict=function(){return g.fn[ct]=ft,bt._jQueryInterface};var It="dropdown",Dt="bs.dropdown",wt="."+Dt,At=".data-api",Nt=g.fn[It],Ot=new RegExp("38|40|27"),kt={HIDE:"hide"+wt,HIDDEN:"hidden"+wt,SHOW:"show"+wt,SHOWN:"shown"+wt,CLICK:"click"+wt,CLICK_DATA_API:"click"+wt+At,KEYDOWN_DATA_API:"keydown"+wt+At,KEYUP_DATA_API:"keyup"+wt+At},Pt="disabled",Lt="show",jt="dropup",Ht="dropright",Rt="dropleft",xt="dropdown-menu-right",Ft="position-static",Ut='[data-toggle="dropdown"]',Wt=".dropdown form",qt=".dropdown-menu",Mt=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Qt="top-start",Bt="top-end",Vt="bottom-start",Yt="bottom-end",zt="right-start",Xt="left-start",$t={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Gt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Jt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)){var t=c._getParentFromElement(this._element),e=g(this._menu).hasClass(Lt);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=g.Event(kt.SHOW,n);if(g(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=t:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(t).addClass(Ft),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(t).closest(Mt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Lt),g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN,n))}}}},t.show=function(){if(!(this._element.disabled||g(this._element).hasClass(Pt)||g(this._menu).hasClass(Lt))){var t={relatedTarget:this._element},e=g.Event(kt.SHOW,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN,t)))}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)&&g(this._menu).hasClass(Lt)){var t={relatedTarget:this._element},e=g.Event(kt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Dt),g(this._element).off(wt),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(kt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,g(this._element).data(),t),_.typeCheckConfig(It,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Vt;return t.hasClass(jt)?(e=Qt,g(this._menu).hasClass(xt)&&(e=Bt)):t.hasClass(Ht)?e=zt:t.hasClass(Rt)?e=Xt:g(this._menu).hasClass(xt)&&(e=Yt),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),t},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Dt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Dt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Ut)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Dt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Lt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(kt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),g(a).removeClass(Lt),g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(qt).length)):Ot.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Pt))){var e=c._getParentFromElement(this),n=g(e).hasClass(Lt);if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(Ut);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return $t}},{key:"DefaultType",get:function(){return Gt}}]),c}();g(document).on(kt.KEYDOWN_DATA_API,Ut,Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API,qt,Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API+" "+kt.KEYUP_DATA_API,Jt._clearMenus).on(kt.CLICK_DATA_API,Ut,function(t){t.preventDefault(),t.stopPropagation(),Jt._jQueryInterface.call(g(this),"toggle")}).on(kt.CLICK_DATA_API,Wt,function(t){t.stopPropagation()}),g.fn[It]=Jt._jQueryInterface,g.fn[It].Constructor=Jt,g.fn[It].noConflict=function(){return g.fn[It]=Nt,Jt._jQueryInterface};var Zt="modal",te="bs.modal",ee="."+te,ne=g.fn[Zt],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0},oe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},re={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"},se="modal-dialog-scrollable",ae="modal-scrollbar-measure",le="modal-backdrop",ce="modal-open",he="fade",ue="show",fe=".modal-dialog",de=".modal-body",ge='[data-toggle="modal"]',_e='[data-dismiss="modal"]',me=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",pe=".sticky-top",ve=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(fe),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(he)&&(this._isTransitioning=!0);var n=g.Event(re.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(re.CLICK_DISMISS,_e,function(t){return e.hide(t)}),g(this._dialog).on(re.MOUSEDOWN_DISMISS,function(){g(e._element).one(re.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(re.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(he);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(re.FOCUSIN),g(this._element).removeClass(ue),g(this._element).off(re.CLICK_DISMISS),g(this._dialog).off(re.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(ee)}),g(document).off(re.FOCUSIN),g.removeData(this._element,te),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},ie,t),_.typeCheckConfig(Zt,t,oe),t},t._showElement=function(t){var e=this,n=g(this._element).hasClass(he);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),g(this._dialog).hasClass(se)?this._dialog.querySelector(de).scrollTop=0:this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(ue),this._config.focus&&this._enforceFocus();var i=g.Event(re.SHOWN,{relatedTarget:t}),o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(i)};if(n){var r=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()},t._enforceFocus=function(){var e=this;g(document).off(re.FOCUSIN).on(re.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(re.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||g(this._element).off(re.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(re.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(re.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(ce),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(re.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(he)?he:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=le,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(re.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(ue),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(ue);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(he)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(me)),e=[].slice.call(document.querySelectorAll(pe));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(ce)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(me));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+pe));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=ae,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(te),e=l({},ie,g(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ie}}]),o}();g(document).on(re.CLICK_DATA_API,ge,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(te)?"toggle":l({},g(e).data(),g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(re.SHOW,function(t){t.isDefaultPrevented()||r.one(re.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});ve._jQueryInterface.call(g(e),o,this)}),g.fn[Zt]=ve._jQueryInterface,g.fn[Zt].Constructor=ve,g.fn[Zt].noConflict=function(){return g.fn[Zt]=ne,ve._jQueryInterface};var ye=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Ee={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Ce=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Te=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function Se(t,s,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),a=Object.keys(s),l=[].slice.call(n.body.querySelectorAll("*")),i=function(t,e){var n=l[t],i=n.nodeName.toLowerCase();if(-1===a.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var o=[].slice.call(n.attributes),r=[].concat(s["*"]||[],s[i]||[]);o.forEach(function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===ye.indexOf(n)||Boolean(t.nodeValue.match(Ce)||t.nodeValue.match(Te));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1})(t,r)||n.removeAttribute(t.nodeName)})},o=0,r=l.length;o<r;o++)i(o);return n.body.innerHTML}var be="tooltip",Ie="bs.tooltip",De="."+Ie,we=g.fn[be],Ae="bs-tooltip",Ne=new RegExp("(^|\\s)"+Ae+"\\S+","g"),Oe=["sanitize","whiteList","sanitizeFn"],ke={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},Pe={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Le={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Ee},je="show",He="out",Re={HIDE:"hide"+De,HIDDEN:"hidden"+De,SHOW:"show"+De,SHOWN:"shown"+De,INSERTED:"inserted"+De,CLICK:"click"+De,FOCUSIN:"focusin"+De,FOCUSOUT:"focusout"+De,MOUSEENTER:"mouseenter"+De,MOUSELEAVE:"mouseleave"+De},xe="fade",Fe="show",Ue=".tooltip-inner",We=".arrow",qe="hover",Me="focus",Ke="click",Qe="manual",Be=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Fe))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(xe);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,{placement:a,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:We},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),g(o).addClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===He&&e._leave(null,e)};if(g(this.tip).hasClass(xe)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=g.Event(this.constructor.Event.HIDE),o=function(){e._hoverState!==je&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),g(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(g(this.element).trigger(i),!i.isDefaultPrevented()){if(g(n).removeClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[Ke]=!1,this._activeTrigger[Me]=!1,this._activeTrigger[qe]=!1,g(this.tip).hasClass(xe)){var r=_.getTransitionDurationFromElement(n);g(n).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Ae+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ue)),this.getTitle()),g(t).removeClass(xe+" "+Fe)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=Se(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return Pe[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Qe){var e=t===qe?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===qe?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),g(this.element).closest(".modal").on("hide.bs.modal",function(){i.element&&i.hide()}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Me:qe]=!0),g(e.getTipElement()).hasClass(Fe)||e._hoverState===je?e._hoverState=je:(clearTimeout(e._timeout),e._hoverState=je,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===je&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Me:qe]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=He,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===He&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=g(this.element).data();return Object.keys(e).forEach(function(t){-1!==Oe.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(be,t,this.constructor.DefaultType),t.sanitize&&(t.template=Se(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ne);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(xe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ie),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ie,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Le}},{key:"NAME",get:function(){return be}},{key:"DATA_KEY",get:function(){return Ie}},{key:"Event",get:function(){return Re}},{key:"EVENT_KEY",get:function(){return De}},{key:"DefaultType",get:function(){return ke}}]),i}();g.fn[be]=Be._jQueryInterface,g.fn[be].Constructor=Be,g.fn[be].noConflict=function(){return g.fn[be]=we,Be._jQueryInterface};var Ve="popover",Ye="bs.popover",ze="."+Ye,Xe=g.fn[Ve],$e="bs-popover",Ge=new RegExp("(^|\\s)"+$e+"\\S+","g"),Je=l({},Be.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ze=l({},Be.DefaultType,{content:"(string|element|function)"}),tn="fade",en="show",nn=".popover-header",on=".popover-body",rn={HIDE:"hide"+ze,HIDDEN:"hidden"+ze,SHOW:"show"+ze,SHOWN:"shown"+ze,INSERTED:"inserted"+ze,CLICK:"click"+ze,FOCUSIN:"focusin"+ze,FOCUSOUT:"focusout"+ze,MOUSEENTER:"mouseenter"+ze,MOUSELEAVE:"mouseleave"+ze},sn=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var o=i.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){g(this.getTipElement()).addClass($e+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},o.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(nn),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(on),e),t.removeClass(tn+" "+en)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ge);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ye),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ye,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Je}},{key:"NAME",get:function(){return Ve}},{key:"DATA_KEY",get:function(){return Ye}},{key:"Event",get:function(){return rn}},{key:"EVENT_KEY",get:function(){return ze}},{key:"DefaultType",get:function(){return Ze}}]),i}(Be);g.fn[Ve]=sn._jQueryInterface,g.fn[Ve].Constructor=sn,g.fn[Ve].noConflict=function(){return g.fn[Ve]=Xe,sn._jQueryInterface};var an="scrollspy",ln="bs.scrollspy",cn="."+ln,hn=g.fn[an],un={offset:10,method:"auto",target:""},fn={offset:"number",method:"string",target:"(string|element)"},dn={ACTIVATE:"activate"+cn,SCROLL:"scroll"+cn,LOAD_DATA_API:"load"+cn+".data-api"},gn="dropdown-item",_n="active",mn='[data-spy="scroll"]',pn=".nav, .list-group",vn=".nav-link",yn=".nav-item",En=".list-group-item",Cn=".dropdown",Tn=".dropdown-item",Sn=".dropdown-toggle",bn="offset",In="position",Dn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+vn+","+this._config.target+" "+En+","+this._config.target+" "+Tn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(dn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?bn:In,o="auto"===this._config.method?t:this._config.method,r=o===In?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,ln),g(this._scrollElement).off(cn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},un,"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(an),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(an,t,fn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(gn)?(n.closest(Cn).find(Sn).addClass(_n),n.addClass(_n)):(n.addClass(_n),n.parents(pn).prev(vn+", "+En).addClass(_n),n.parents(pn).prev(yn).children(vn).addClass(_n)),g(this._scrollElement).trigger(dn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(_n)}).forEach(function(t){return t.classList.remove(_n)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(ln);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data(ln,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return un}}]),n}();g(window).on(dn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(mn)),e=t.length;e--;){var n=g(t[e]);Dn._jQueryInterface.call(n,n.data())}}),g.fn[an]=Dn._jQueryInterface,g.fn[an].Constructor=Dn,g.fn[an].noConflict=function(){return g.fn[an]=hn,Dn._jQueryInterface};var wn="bs.tab",An="."+wn,Nn=g.fn.tab,On={HIDE:"hide"+An,HIDDEN:"hidden"+An,SHOW:"show"+An,SHOWN:"shown"+An,CLICK_DATA_API:"click"+An+".data-api"},kn="dropdown-menu",Pn="active",Ln="disabled",jn="fade",Hn="show",Rn=".dropdown",xn=".nav, .list-group",Fn=".active",Un="> li > .active",Wn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',qn=".dropdown-toggle",Mn="> .dropdown-menu .active",Kn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(Pn)||g(this._element).hasClass(Ln))){var t,i,e=g(this._element).closest(xn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?Un:Fn;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(On.HIDE,{relatedTarget:this._element}),a=g.Event(On.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(On.HIDDEN,{relatedTarget:n._element}),e=g.Event(On.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,wn),this._element=null},t._activate=function(t,e,n){var i=this,o=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(Fn):g(e).find(Un))[0],r=n&&o&&g(o).hasClass(jn),s=function(){return i._transitionComplete(t,o,n)};if(o&&r){var a=_.getTransitionDurationFromElement(o);g(o).removeClass(Hn).one(_.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(Pn);var i=g(e.parentNode).find(Mn)[0];i&&g(i).removeClass(Pn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(Pn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),t.classList.contains(jn)&&t.classList.add(Hn),t.parentNode&&g(t.parentNode).hasClass(kn)){var o=g(t).closest(Rn)[0];if(o){var r=[].slice.call(o.querySelectorAll(qn));g(r).addClass(Pn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(wn);if(e||(e=new i(this),t.data(wn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(On.CLICK_DATA_API,Wn,function(t){t.preventDefault(),Kn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Kn._jQueryInterface,g.fn.tab.Constructor=Kn,g.fn.tab.noConflict=function(){return g.fn.tab=Nn,Kn._jQueryInterface};var Qn="toast",Bn="bs.toast",Vn="."+Bn,Yn=g.fn[Qn],zn={CLICK_DISMISS:"click.dismiss"+Vn,HIDE:"hide"+Vn,HIDDEN:"hidden"+Vn,SHOW:"show"+Vn,SHOWN:"shown"+Vn},Xn="fade",$n="hide",Gn="show",Jn="showing",Zn={animation:"boolean",autohide:"boolean",delay:"number"},ti={animation:!0,autohide:!0,delay:500},ei='[data-dismiss="toast"]',ni=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this;g(this._element).trigger(zn.SHOW),this._config.animation&&this._element.classList.add(Xn);var e=function(){t._element.classList.remove(Jn),t._element.classList.add(Gn),g(t._element).trigger(zn.SHOWN),t._config.autohide&&t.hide()};if(this._element.classList.remove($n),this._element.classList.add(Jn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},t.hide=function(t){var e=this;this._element.classList.contains(Gn)&&(g(this._element).trigger(zn.HIDE),t?this._close():this._timeout=setTimeout(function(){e._close()},this._config.delay))},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Gn)&&this._element.classList.remove(Gn),g(this._element).off(zn.CLICK_DISMISS),g.removeData(this._element,Bn),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},ti,g(this._element).data(),"object"==typeof t&&t?t:{}),_.typeCheckConfig(Qn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(zn.CLICK_DISMISS,ei,function(){return t.hide(!0)})},t._close=function(){var t=this,e=function(){t._element.classList.add($n),g(t._element).trigger(zn.HIDDEN)};if(this._element.classList.remove(Gn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Bn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Bn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Zn}},{key:"Default",get:function(){return ti}}]),i}();g.fn[Qn]=ni._jQueryInterface,g.fn[Qn].Constructor=ni,g.fn[Qn].noConflict=function(){return g.fn[Qn]=Yn,ni._jQueryInterface},function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=_,t.Alert=p,t.Button=P,t.Carousel=lt,t.Collapse=bt,t.Dropdown=Jt,t.Modal=ve,t.Popover=sn,t.Scrollspy=Dn,t.Tab=Kn,t.Toast=ni,t.Tooltip=Be,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
/**
 * Swiper 4.3.3
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 5, 2018
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Swiper=t()}(this,function(){"use strict";var e="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,t="undefined"==typeof window?{document:e,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,i=function(e){for(var t=0;t<e.length;t+=1)this[t]=e[t];return this.length=e.length,this};function s(s,a){var r=[],n=0;if(s&&!a&&s instanceof i)return s;if(s)if("string"==typeof s){var o,l,d=s.trim();if(d.indexOf("<")>=0&&d.indexOf(">")>=0){var h="div";for(0===d.indexOf("<li")&&(h="ul"),0===d.indexOf("<tr")&&(h="tbody"),0!==d.indexOf("<td")&&0!==d.indexOf("<th")||(h="tr"),0===d.indexOf("<tbody")&&(h="table"),0===d.indexOf("<option")&&(h="select"),(l=e.createElement(h)).innerHTML=d,n=0;n<l.childNodes.length;n+=1)r.push(l.childNodes[n])}else for(o=a||"#"!==s[0]||s.match(/[ .<>:~]/)?(a||e).querySelectorAll(s.trim()):[e.getElementById(s.trim().split("#")[1])],n=0;n<o.length;n+=1)o[n]&&r.push(o[n])}else if(s.nodeType||s===t||s===e)r.push(s);else if(s.length>0&&s[0].nodeType)for(n=0;n<s.length;n+=1)r.push(s[n]);return new i(r)}function a(e){for(var t=[],i=0;i<e.length;i+=1)-1===t.indexOf(e[i])&&t.push(e[i]);return t}s.fn=i.prototype,s.Class=i,s.Dom7=i;var r={addClass:function(e){if(void 0===e)return this;for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s].classList&&this[s].classList.add(t[i]);return this},removeClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s].classList&&this[s].classList.remove(t[i]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s].classList&&this[s].classList.toggle(t[i]);return this},attr:function(e,t){var i=arguments;if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var s=0;s<this.length;s+=1)if(2===i.length)this[s].setAttribute(e,t);else for(var a in e)this[s][a]=e[a],this[s].setAttribute(a,e[a]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},data:function(e,t){var i;if(void 0!==t){for(var s=0;s<this.length;s+=1)(i=this[s]).dom7ElementDataStorage||(i.dom7ElementDataStorage={}),i.dom7ElementDataStorage[e]=t;return this}if(i=this[0]){if(i.dom7ElementDataStorage&&e in i.dom7ElementDataStorage)return i.dom7ElementDataStorage[e];var a=i.getAttribute("data-"+e);return a||void 0}},transform:function(e){for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransform=e,i.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransitionDuration=e,i.transitionDuration=e}return this},on:function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];var a=t[0],r=t[1],n=t[2],o=t[3];function l(e){var t=e.target;if(t){var i=e.target.dom7EventData||[];if(i.indexOf(e)<0&&i.unshift(e),s(t).is(r))n.apply(t,i);else for(var a=s(t).parents(),o=0;o<a.length;o+=1)s(a[o]).is(r)&&n.apply(a[o],i)}}function d(e){var t=e&&e.target?e.target.dom7EventData||[]:[];t.indexOf(e)<0&&t.unshift(e),n.apply(this,t)}"function"==typeof t[1]&&(a=(e=t)[0],n=e[1],o=e[2],r=void 0),o||(o=!1);for(var h,p=a.split(" "),c=0;c<this.length;c+=1){var u=this[c];if(r)for(h=0;h<p.length;h+=1){var v=p[h];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[v]||(u.dom7LiveListeners[v]=[]),u.dom7LiveListeners[v].push({listener:n,proxyListener:l}),u.addEventListener(v,l,o)}else for(h=0;h<p.length;h+=1){var f=p[h];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[f]||(u.dom7Listeners[f]=[]),u.dom7Listeners[f].push({listener:n,proxyListener:d}),u.addEventListener(f,d,o)}}return this},off:function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];var s=t[0],a=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(s=(e=t)[0],r=e[1],n=e[2],a=void 0),n||(n=!1);for(var o=s.split(" "),l=0;l<o.length;l+=1)for(var d=o[l],h=0;h<this.length;h+=1){var p=this[h],c=void 0;if(!a&&p.dom7Listeners?c=p.dom7Listeners[d]:a&&p.dom7LiveListeners&&(c=p.dom7LiveListeners[d]),c&&c.length)for(var u=c.length-1;u>=0;u-=1){var v=c[u];r&&v.listener===r?(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1)):r||(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1))}}return this},trigger:function(){for(var i=[],s=arguments.length;s--;)i[s]=arguments[s];for(var a=i[0].split(" "),r=i[1],n=0;n<a.length;n+=1)for(var o=a[n],l=0;l<this.length;l+=1){var d=this[l],h=void 0;try{h=new t.CustomEvent(o,{detail:r,bubbles:!0,cancelable:!0})}catch(t){(h=e.createEvent("Event")).initEvent(o,!0,!0),h.detail=r}d.dom7EventData=i.filter(function(e,t){return t>0}),d.dispatchEvent(h),d.dom7EventData=[],delete d.dom7EventData}return this},transitionEnd:function(e){var t,i=["webkitTransitionEnd","transitionend"],s=this;function a(r){if(r.target===this)for(e.call(this,r),t=0;t<i.length;t+=1)s.off(i[t],a)}if(e)for(t=0;t<i.length;t+=1)s.on(i[t],a);return this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(this.length>0){var i=this[0],s=i.getBoundingClientRect(),a=e.body,r=i.clientTop||a.clientTop||0,n=i.clientLeft||a.clientLeft||0,o=i===t?t.scrollY:i.scrollTop,l=i===t?t.scrollX:i.scrollLeft;return{top:s.top+o-r,left:s.left+l-n}}return null},css:function(e,i){var s;if(1===arguments.length){if("string"!=typeof e){for(s=0;s<this.length;s+=1)for(var a in e)this[s].style[a]=e[a];return this}if(this[0])return t.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(s=0;s<this.length;s+=1)this[s].style[e]=i;return this}return this},each:function(e){if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(this[t],t,this[t]))return this;return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(a){var r,n,o=this[0];if(!o||void 0===a)return!1;if("string"==typeof a){if(o.matches)return o.matches(a);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(a);if(o.msMatchesSelector)return o.msMatchesSelector(a);for(r=s(a),n=0;n<r.length;n+=1)if(r[n]===o)return!0;return!1}if(a===e)return o===e;if(a===t)return o===t;if(a.nodeType||a instanceof i){for(r=a.nodeType?[a]:a,n=0;n<r.length;n+=1)if(r[n]===o)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,s=this.length;return new i(e>s-1?[]:e<0?(t=s+e)<0?[]:[this[t]]:[this[e]])},append:function(){for(var t,s=[],a=arguments.length;a--;)s[a]=arguments[a];for(var r=0;r<s.length;r+=1){t=s[r];for(var n=0;n<this.length;n+=1)if("string"==typeof t){var o=e.createElement("div");for(o.innerHTML=t;o.firstChild;)this[n].appendChild(o.firstChild)}else if(t instanceof i)for(var l=0;l<t.length;l+=1)this[n].appendChild(t[l]);else this[n].appendChild(t)}return this},prepend:function(t){var s,a;for(s=0;s<this.length;s+=1)if("string"==typeof t){var r=e.createElement("div");for(r.innerHTML=t,a=r.childNodes.length-1;a>=0;a-=1)this[s].insertBefore(r.childNodes[a],this[s].childNodes[0])}else if(t instanceof i)for(a=0;a<t.length;a+=1)this[s].insertBefore(t[a],this[s].childNodes[0]);else this[s].insertBefore(t,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&s(this[0].nextElementSibling).is(e)?new i([this[0].nextElementSibling]):new i([]):this[0].nextElementSibling?new i([this[0].nextElementSibling]):new i([]):new i([])},nextAll:function(e){var t=[],a=this[0];if(!a)return new i([]);for(;a.nextElementSibling;){var r=a.nextElementSibling;e?s(r).is(e)&&t.push(r):t.push(r),a=r}return new i(t)},prev:function(e){if(this.length>0){var t=this[0];return e?t.previousElementSibling&&s(t.previousElementSibling).is(e)?new i([t.previousElementSibling]):new i([]):t.previousElementSibling?new i([t.previousElementSibling]):new i([])}return new i([])},prevAll:function(e){var t=[],a=this[0];if(!a)return new i([]);for(;a.previousElementSibling;){var r=a.previousElementSibling;e?s(r).is(e)&&t.push(r):t.push(r),a=r}return new i(t)},parent:function(e){for(var t=[],i=0;i<this.length;i+=1)null!==this[i].parentNode&&(e?s(this[i].parentNode).is(e)&&t.push(this[i].parentNode):t.push(this[i].parentNode));return s(a(t))},parents:function(e){for(var t=[],i=0;i<this.length;i+=1)for(var r=this[i].parentNode;r;)e?s(r).is(e)&&t.push(r):t.push(r),r=r.parentNode;return s(a(t))},closest:function(e){var t=this;return void 0===e?new i([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],s=0;s<this.length;s+=1)for(var a=this[s].querySelectorAll(e),r=0;r<a.length;r+=1)t.push(a[r]);return new i(t)},children:function(e){for(var t=[],r=0;r<this.length;r+=1)for(var n=this[r].childNodes,o=0;o<n.length;o+=1)e?1===n[o].nodeType&&s(n[o]).is(e)&&t.push(n[o]):1===n[o].nodeType&&t.push(n[o]);return new i(a(t))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,a;for(i=0;i<e.length;i+=1){var r=s(e[i]);for(a=0;a<r.length;a+=1)this[this.length]=r[a],this.length+=1}return this},styles:function(){return this[0]?t.getComputedStyle(this[0],null):{}}};Object.keys(r).forEach(function(e){s.fn[e]=r[e]});var n,o,l,d={deleteProps:function(e){var t=e;Object.keys(t).forEach(function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}})},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,i){var s,a,r;void 0===i&&(i="x");var n=t.getComputedStyle(e,null);return t.WebKitCSSMatrix?((a=n.transform||n.webkitTransform).split(",").length>6&&(a=a.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),r=new t.WebKitCSSMatrix("none"===a?"":a)):s=(r=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===i&&(a=t.WebKitCSSMatrix?r.m41:16===s.length?parseFloat(s[12]):parseFloat(s[4])),"y"===i&&(a=t.WebKitCSSMatrix?r.m42:16===s.length?parseFloat(s[13]):parseFloat(s[5])),a||0},parseUrlQuery:function(e){var i,s,a,r,n={},o=e||t.location.href;if("string"==typeof o&&o.length)for(r=(s=(o=o.indexOf("?")>-1?o.replace(/\S*\?/,""):"").split("&").filter(function(e){return""!==e})).length,i=0;i<r;i+=1)a=s[i].replace(/#\S+/g,"").split("="),n[decodeURIComponent(a[0])]=void 0===a[1]?void 0:decodeURIComponent(a[1])||"";return n},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var i=Object(e[0]),s=1;s<e.length;s+=1){var a=e[s];if(void 0!==a&&null!==a)for(var r=Object.keys(Object(a)),n=0,o=r.length;n<o;n+=1){var l=r[n],h=Object.getOwnPropertyDescriptor(a,l);void 0!==h&&h.enumerable&&(d.isObject(i[l])&&d.isObject(a[l])?d.extend(i[l],a[l]):!d.isObject(i[l])&&d.isObject(a[l])?(i[l]={},d.extend(i[l],a[l])):i[l]=a[l])}}return i}},h=(l=e.createElement("div"),{touch:t.Modernizr&&!0===t.Modernizr.touch||!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch),pointerEvents:!(!t.navigator.pointerEnabled&&!t.PointerEvent),prefixedPointerEvents:!!t.navigator.msPointerEnabled,transition:(o=l.style,"transition"in o||"webkitTransition"in o||"MozTransition"in o),transforms3d:t.Modernizr&&!0===t.Modernizr.csstransforms3d||(n=l.style,"webkitPerspective"in n||"MozPerspective"in n||"OPerspective"in n||"MsPerspective"in n||"perspective"in n),flexbox:function(){for(var e=l.style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),i=0;i<t.length;i+=1)if(t[i]in e)return!0;return!1}(),observer:"MutationObserver"in t||"WebkitMutationObserver"in t,passiveListener:function(){var e=!1;try{var i=Object.defineProperty({},"passive",{get:function(){e=!0}});t.addEventListener("testPassiveListener",null,i)}catch(e){}return e}(),gestures:"ongesturestart"in t}),p=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach(function(e){t.on(e,t.params.on[e])})},c={components:{configurable:!0}};p.prototype.on=function(e,t,i){var s=this;if("function"!=typeof t)return s;var a=i?"unshift":"push";return e.split(" ").forEach(function(e){s.eventsListeners[e]||(s.eventsListeners[e]=[]),s.eventsListeners[e][a](t)}),s},p.prototype.once=function(e,t,i){var s=this;if("function"!=typeof t)return s;return s.on(e,function i(){for(var a=[],r=arguments.length;r--;)a[r]=arguments[r];t.apply(s,a),s.off(e,i)},i)},p.prototype.off=function(e,t){var i=this;return i.eventsListeners?(e.split(" ").forEach(function(e){void 0===t?i.eventsListeners[e]=[]:i.eventsListeners[e].forEach(function(s,a){s===t&&i.eventsListeners[e].splice(a,1)})}),i):i},p.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,s,a,r=this;return r.eventsListeners?("string"==typeof e[0]||Array.isArray(e[0])?(i=e[0],s=e.slice(1,e.length),a=r):(i=e[0].events,s=e[0].data,a=e[0].context||r),(Array.isArray(i)?i:i.split(" ")).forEach(function(e){if(r.eventsListeners&&r.eventsListeners[e]){var t=[];r.eventsListeners[e].forEach(function(e){t.push(e)}),t.forEach(function(e){e.apply(a,s)})}}),r):r},p.prototype.useModulesParams=function(e){var t=this;t.modules&&Object.keys(t.modules).forEach(function(i){var s=t.modules[i];s.params&&d.extend(e,s.params)})},p.prototype.useModules=function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach(function(i){var s=t.modules[i],a=e[i]||{};s.instance&&Object.keys(s.instance).forEach(function(e){var i=s.instance[e];t[e]="function"==typeof i?i.bind(t):i}),s.on&&t.on&&Object.keys(s.on).forEach(function(e){t.on(e,s.on[e])}),s.create&&s.create.bind(t)(a)})},c.components.set=function(e){this.use&&this.use(e)},p.installModule=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;s.prototype.modules||(s.prototype.modules={});var a=e.name||Object.keys(s.prototype.modules).length+"_"+d.now();return s.prototype.modules[a]=e,e.proto&&Object.keys(e.proto).forEach(function(t){s.prototype[t]=e.proto[t]}),e.static&&Object.keys(e.static).forEach(function(t){s[t]=e.static[t]}),e.install&&e.install.apply(s,t),s},p.use=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;return Array.isArray(e)?(e.forEach(function(e){return s.installModule(e)}),s):s.installModule.apply(s,[e].concat(t))},Object.defineProperties(p,c);var u={updateSize:function(){var e,t,i=this.$el;e=void 0!==this.params.width?this.params.width:i[0].clientWidth,t=void 0!==this.params.height?this.params.height:i[0].clientHeight,0===e&&this.isHorizontal()||0===t&&this.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),d.extend(this,{width:e,height:t,size:this.isHorizontal()?e:t}))},updateSlides:function(){var e=this.params,i=this.$wrapperEl,s=this.size,a=this.rtlTranslate,r=this.wrongRTL,n=this.virtual&&e.virtual.enabled,o=n?this.virtual.slides.length:this.slides.length,l=i.children("."+this.params.slideClass),p=n?this.virtual.slides.length:l.length,c=[],u=[],v=[],f=e.slidesOffsetBefore;"function"==typeof f&&(f=e.slidesOffsetBefore.call(this));var m=e.slidesOffsetAfter;"function"==typeof m&&(m=e.slidesOffsetAfter.call(this));var g=this.snapGrid.length,b=this.snapGrid.length,w=e.spaceBetween,y=-f,x=0,E=0;if(void 0!==s){var T,S;"string"==typeof w&&w.indexOf("%")>=0&&(w=parseFloat(w.replace("%",""))/100*s),this.virtualSize=-w,a?l.css({marginLeft:"",marginTop:""}):l.css({marginRight:"",marginBottom:""}),e.slidesPerColumn>1&&(T=Math.floor(p/e.slidesPerColumn)===p/this.params.slidesPerColumn?p:Math.ceil(p/e.slidesPerColumn)*e.slidesPerColumn,"auto"!==e.slidesPerView&&"row"===e.slidesPerColumnFill&&(T=Math.max(T,e.slidesPerView*e.slidesPerColumn)));for(var C,M=e.slidesPerColumn,z=T/M,k=z-(e.slidesPerColumn*z-p),P=0;P<p;P+=1){S=0;var $=l.eq(P);if(e.slidesPerColumn>1){var L=void 0,I=void 0,D=void 0;"column"===e.slidesPerColumnFill?(D=P-(I=Math.floor(P/M))*M,(I>k||I===k&&D===M-1)&&(D+=1)>=M&&(D=0,I+=1),L=I+D*T/M,$.css({"-webkit-box-ordinal-group":L,"-moz-box-ordinal-group":L,"-ms-flex-order":L,"-webkit-order":L,order:L})):I=P-(D=Math.floor(P/z))*z,$.css("margin-"+(this.isHorizontal()?"top":"left"),0!==D&&e.spaceBetween&&e.spaceBetween+"px").attr("data-swiper-column",I).attr("data-swiper-row",D)}if("none"!==$.css("display")){if("auto"===e.slidesPerView){var O=t.getComputedStyle($[0],null),A=$[0].style.transform,G=$[0].style.webkitTransform;A&&($[0].style.transform="none"),G&&($[0].style.webkitTransform="none"),S=this.isHorizontal()?$[0].getBoundingClientRect().width+parseFloat(O.getPropertyValue("margin-left"))+parseFloat(O.getPropertyValue("margin-right")):$[0].getBoundingClientRect().height+parseFloat(O.getPropertyValue("margin-top"))+parseFloat(O.getPropertyValue("margin-bottom")),A&&($[0].style.transform=A),G&&($[0].style.webkitTransform=G),e.roundLengths&&(S=Math.floor(S))}else S=(s-(e.slidesPerView-1)*w)/e.slidesPerView,e.roundLengths&&(S=Math.floor(S)),l[P]&&(this.isHorizontal()?l[P].style.width=S+"px":l[P].style.height=S+"px");l[P]&&(l[P].swiperSlideSize=S),v.push(S),e.centeredSlides?(y=y+S/2+x/2+w,0===x&&0!==P&&(y=y-s/2-w),0===P&&(y=y-s/2-w),Math.abs(y)<.001&&(y=0),e.roundLengths&&(y=Math.floor(y)),E%e.slidesPerGroup==0&&c.push(y),u.push(y)):(e.roundLengths&&(y=Math.floor(y)),E%e.slidesPerGroup==0&&c.push(y),u.push(y),y=y+S+w),this.virtualSize+=S+w,x=S,E+=1}}if(this.virtualSize=Math.max(this.virtualSize,s)+m,a&&r&&("slide"===e.effect||"coverflow"===e.effect)&&i.css({width:this.virtualSize+e.spaceBetween+"px"}),h.flexbox&&!e.setWrapperSize||(this.isHorizontal()?i.css({width:this.virtualSize+e.spaceBetween+"px"}):i.css({height:this.virtualSize+e.spaceBetween+"px"})),e.slidesPerColumn>1&&(this.virtualSize=(S+e.spaceBetween)*T,this.virtualSize=Math.ceil(this.virtualSize/e.slidesPerColumn)-e.spaceBetween,this.isHorizontal()?i.css({width:this.virtualSize+e.spaceBetween+"px"}):i.css({height:this.virtualSize+e.spaceBetween+"px"}),e.centeredSlides)){C=[];for(var H=0;H<c.length;H+=1){var N=c[H];e.roundLengths&&(N=Math.floor(N)),c[H]<this.virtualSize+c[0]&&C.push(N)}c=C}if(!e.centeredSlides){C=[];for(var B=0;B<c.length;B+=1){var X=c[B];e.roundLengths&&(X=Math.floor(X)),c[B]<=this.virtualSize-s&&C.push(X)}c=C,Math.floor(this.virtualSize-s)-Math.floor(c[c.length-1])>1&&c.push(this.virtualSize-s)}0===c.length&&(c=[0]),0!==e.spaceBetween&&(this.isHorizontal()?a?l.css({marginLeft:w+"px"}):l.css({marginRight:w+"px"}):l.css({marginBottom:w+"px"})),d.extend(this,{slides:l,snapGrid:c,slidesGrid:u,slidesSizesGrid:v}),p!==o&&this.emit("slidesLengthChange"),c.length!==g&&(this.params.watchOverflow&&this.checkOverflow(),this.emit("snapGridLengthChange")),u.length!==b&&this.emit("slidesGridLengthChange"),(e.watchSlidesProgress||e.watchSlidesVisibility)&&this.updateSlidesOffset()}},updateAutoHeight:function(e){var t,i=[],s=0;if("number"==typeof e?this.setTransition(e):!0===e&&this.setTransition(this.params.speed),"auto"!==this.params.slidesPerView&&this.params.slidesPerView>1)for(t=0;t<Math.ceil(this.params.slidesPerView);t+=1){var a=this.activeIndex+t;if(a>this.slides.length)break;i.push(this.slides.eq(a)[0])}else i.push(this.slides.eq(this.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var r=i[t].offsetHeight;s=r>s?r:s}s&&this.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this.params,i=this.slides,s=this.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&this.updateSlidesOffset();var a=-e;s&&(a=e),i.removeClass(t.slideVisibleClass);for(var r=0;r<i.length;r+=1){var n=i[r],o=(a+(t.centeredSlides?this.minTranslate():0)-n.swiperSlideOffset)/(n.swiperSlideSize+t.spaceBetween);if(t.watchSlidesVisibility){var l=-(a-n.swiperSlideOffset),d=l+this.slidesSizesGrid[r];(l>=0&&l<this.size||d>0&&d<=this.size||l<=0&&d>=this.size)&&i.eq(r).addClass(t.slideVisibleClass)}n.progress=s?-o:o}}},updateProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this.params,i=this.maxTranslate()-this.minTranslate(),s=this.progress,a=this.isBeginning,r=this.isEnd,n=a,o=r;0===i?(s=0,a=!0,r=!0):(a=(s=(e-this.minTranslate())/i)<=0,r=s>=1),d.extend(this,{progress:s,isBeginning:a,isEnd:r}),(t.watchSlidesProgress||t.watchSlidesVisibility)&&this.updateSlidesProgress(e),a&&!n&&this.emit("reachBeginning toEdge"),r&&!o&&this.emit("reachEnd toEdge"),(n&&!a||o&&!r)&&this.emit("fromEdge"),this.emit("progress",s)},updateSlidesClasses:function(){var e,t=this.slides,i=this.params,s=this.$wrapperEl,a=this.activeIndex,r=this.realIndex,n=this.virtual&&i.virtual.enabled;t.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=n?this.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+a+'"]'):t.eq(a)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass));var o=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===o.length&&(o=t.eq(0)).addClass(i.slideNextClass);var l=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===l.length&&(l=t.eq(-1)).addClass(i.slidePrevClass),i.loop&&(o.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,i=this.rtlTranslate?this.translate:-this.translate,s=this.slidesGrid,a=this.snapGrid,r=this.params,n=this.activeIndex,o=this.realIndex,l=this.snapIndex,h=e;if(void 0===h){for(var p=0;p<s.length;p+=1)void 0!==s[p+1]?i>=s[p]&&i<s[p+1]-(s[p+1]-s[p])/2?h=p:i>=s[p]&&i<s[p+1]&&(h=p+1):i>=s[p]&&(h=p);r.normalizeSlideIndex&&(h<0||void 0===h)&&(h=0)}if((t=a.indexOf(i)>=0?a.indexOf(i):Math.floor(h/r.slidesPerGroup))>=a.length&&(t=a.length-1),h!==n){var c=parseInt(this.slides.eq(h).attr("data-swiper-slide-index")||h,10);d.extend(this,{snapIndex:t,realIndex:c,previousIndex:n,activeIndex:h}),this.emit("activeIndexChange"),this.emit("snapIndexChange"),o!==c&&this.emit("realIndexChange"),this.emit("slideChange")}else t!==l&&(this.snapIndex=t,this.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this.params,i=s(e.target).closest("."+t.slideClass)[0],a=!1;if(i)for(var r=0;r<this.slides.length;r+=1)this.slides[r]===i&&(a=!0);if(!i||!a)return this.clickedSlide=void 0,void(this.clickedIndex=void 0);this.clickedSlide=i,this.virtual&&this.params.virtual.enabled?this.clickedIndex=parseInt(s(i).attr("data-swiper-slide-index"),10):this.clickedIndex=s(i).index(),t.slideToClickedSlide&&void 0!==this.clickedIndex&&this.clickedIndex!==this.activeIndex&&this.slideToClickedSlide()}};var v={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,i=this.rtlTranslate,s=this.translate,a=this.$wrapperEl;if(t.virtualTranslate)return i?-s:s;var r=d.getTranslate(a[0],e);return i&&(r=-r),r||0},setTranslate:function(e,t){var i=this.rtlTranslate,s=this.params,a=this.$wrapperEl,r=this.progress,n=0,o=0;this.isHorizontal()?n=i?-e:e:o=e,s.roundLengths&&(n=Math.floor(n),o=Math.floor(o)),s.virtualTranslate||(h.transforms3d?a.transform("translate3d("+n+"px, "+o+"px, 0px)"):a.transform("translate("+n+"px, "+o+"px)")),this.previousTranslate=this.translate,this.translate=this.isHorizontal()?n:o;var l=this.maxTranslate()-this.minTranslate();(0===l?0:(e-this.minTranslate())/l)!==r&&this.updateProgress(e),this.emit("setTranslate",this.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]}};var f={setTransition:function(e,t){this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.params,a=this.previousIndex;s.autoHeight&&this.updateAutoHeight();var r=t;if(r||(r=i>a?"next":i<a?"prev":"reset"),this.emit("transitionStart"),e&&i!==a){if("reset"===r)return void this.emit("slideResetTransitionStart");this.emit("slideChangeTransitionStart"),"next"===r?this.emit("slideNextTransitionStart"):this.emit("slidePrevTransitionStart")}},transitionEnd:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.previousIndex;this.animating=!1,this.setTransition(0);var a=t;if(a||(a=i>s?"next":i<s?"prev":"reset"),this.emit("transitionEnd"),e&&i!==s){if("reset"===a)return void this.emit("slideResetTransitionEnd");this.emit("slideChangeTransitionEnd"),"next"===a?this.emit("slideNextTransitionEnd"):this.emit("slidePrevTransitionEnd")}}};var m={slideTo:function(e,t,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var a=this,r=e;r<0&&(r=0);var n=a.params,o=a.snapGrid,l=a.slidesGrid,d=a.previousIndex,p=a.activeIndex,c=a.rtlTranslate;if(a.animating&&n.preventIntercationOnTransition)return!1;var u=Math.floor(r/n.slidesPerGroup);u>=o.length&&(u=o.length-1),(p||n.initialSlide||0)===(d||0)&&i&&a.emit("beforeSlideChangeStart");var v,f=-o[u];if(a.updateProgress(f),n.normalizeSlideIndex)for(var m=0;m<l.length;m+=1)-Math.floor(100*f)>=Math.floor(100*l[m])&&(r=m);if(a.initialized&&r!==p){if(!a.allowSlideNext&&f<a.translate&&f<a.minTranslate())return!1;if(!a.allowSlidePrev&&f>a.translate&&f>a.maxTranslate()&&(p||0)!==r)return!1}return v=r>p?"next":r<p?"prev":"reset",c&&-f===a.translate||!c&&f===a.translate?(a.updateActiveIndex(r),n.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),"slide"!==n.effect&&a.setTranslate(f),"reset"!==v&&(a.transitionStart(i,v),a.transitionEnd(i,v)),!1):(0!==t&&h.transition?(a.setTransition(t),a.setTranslate(f),a.updateActiveIndex(r),a.updateSlidesClasses(),a.emit("beforeTransitionStart",t,s),a.transitionStart(i,v),a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||(a.onSlideToWrapperTransitionEnd=function(e){a&&!a.destroyed&&e.target===this&&(a.$wrapperEl[0].removeEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.$wrapperEl[0].removeEventListener("webkitTransitionEnd",a.onSlideToWrapperTransitionEnd),a.transitionEnd(i,v))}),a.$wrapperEl[0].addEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.$wrapperEl[0].addEventListener("webkitTransitionEnd",a.onSlideToWrapperTransitionEnd))):(a.setTransition(0),a.setTranslate(f),a.updateActiveIndex(r),a.updateSlidesClasses(),a.emit("beforeTransitionStart",t,s),a.transitionStart(i,v),a.transitionEnd(i,v)),!0)},slideToLoop:function(e,t,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var a=e;return this.params.loop&&(a+=this.loopedSlides),this.slideTo(a,t,i,s)},slideNext:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating;return s.loop?!a&&(this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft,this.slideTo(this.activeIndex+s.slidesPerGroup,e,t,i)):this.slideTo(this.activeIndex+s.slidesPerGroup,e,t,i)},slidePrev:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating,r=this.snapGrid,n=this.slidesGrid,o=this.rtlTranslate;if(s.loop){if(a)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}function l(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var d,h=l(o?this.translate:-this.translate),p=r.map(function(e){return l(e)}),c=(n.map(function(e){return l(e)}),r[p.indexOf(h)],r[p.indexOf(h)-1]);return void 0!==c&&(d=n.indexOf(c))<0&&(d=this.activeIndex-1),this.slideTo(d,e,t,i)},slideReset:function(e,t,i){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,i)},slideToClosest:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.activeIndex,a=Math.floor(s/this.params.slidesPerGroup);if(a<this.snapGrid.length-1){var r=this.rtlTranslate?this.translate:-this.translate,n=this.snapGrid[a];r-n>(this.snapGrid[a+1]-n)/2&&(s=this.params.slidesPerGroup)}return this.slideTo(s,e,t,i)},slideToClickedSlide:function(){var e,t=this,i=t.params,a=t.$wrapperEl,r="auto"===i.slidesPerView?t.slidesPerViewDynamic():i.slidesPerView,n=t.clickedIndex;if(i.loop){if(t.animating)return;e=parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"),10),i.centeredSlides?n<t.loopedSlides-r/2||n>t.slides.length-t.loopedSlides+r/2?(t.loopFix(),n=a.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),d.nextTick(function(){t.slideTo(n)})):t.slideTo(n):n>t.slides.length-r?(t.loopFix(),n=a.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),d.nextTick(function(){t.slideTo(n)})):t.slideTo(n)}else t.slideTo(n)}};var g={loopCreate:function(){var t=this,i=t.params,a=t.$wrapperEl;a.children("."+i.slideClass+"."+i.slideDuplicateClass).remove();var r=a.children("."+i.slideClass);if(i.loopFillGroupWithBlank){var n=i.slidesPerGroup-r.length%i.slidesPerGroup;if(n!==i.slidesPerGroup){for(var o=0;o<n;o+=1){var l=s(e.createElement("div")).addClass(i.slideClass+" "+i.slideBlankClass);a.append(l)}r=a.children("."+i.slideClass)}}"auto"!==i.slidesPerView||i.loopedSlides||(i.loopedSlides=r.length),t.loopedSlides=parseInt(i.loopedSlides||i.slidesPerView,10),t.loopedSlides+=i.loopAdditionalSlides,t.loopedSlides>r.length&&(t.loopedSlides=r.length);var d=[],h=[];r.each(function(e,i){var a=s(i);e<t.loopedSlides&&h.push(i),e<r.length&&e>=r.length-t.loopedSlides&&d.push(i),a.attr("data-swiper-slide-index",e)});for(var p=0;p<h.length;p+=1)a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));for(var c=d.length-1;c>=0;c-=1)a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))},loopFix:function(){var e,t=this.params,i=this.activeIndex,s=this.slides,a=this.loopedSlides,r=this.allowSlidePrev,n=this.allowSlideNext,o=this.snapGrid,l=this.rtlTranslate;this.allowSlidePrev=!0,this.allowSlideNext=!0;var d=-o[i]-this.getTranslate();i<a?(e=s.length-3*a+i,e+=a,this.slideTo(e,0,!1,!0)&&0!==d&&this.setTranslate((l?-this.translate:this.translate)-d)):("auto"===t.slidesPerView&&i>=2*a||i>=s.length-a)&&(e=-s.length+i+a,e+=a,this.slideTo(e,0,!1,!0)&&0!==d&&this.setTranslate((l?-this.translate:this.translate)-d));this.allowSlidePrev=r,this.allowSlideNext=n},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,i=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass).remove(),i.removeAttr("data-swiper-slide-index")}};var b={setGrabCursor:function(e){if(!(h.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked)){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){h.touch||this.params.watchOverflow&&this.isLocked||(this.el.style.cursor="")}};var w={appendSlide:function(e){var t=this.$wrapperEl,i=this.params;if(i.loop&&this.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&t.append(e[s]);else t.append(e);i.loop&&this.loopCreate(),i.observer&&h.observer||this.update()},prependSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&this.loopDestroy();var a=s+1;if("object"==typeof e&&"length"in e){for(var r=0;r<e.length;r+=1)e[r]&&i.prepend(e[r]);a=s+e.length}else i.prepend(e);t.loop&&this.loopCreate(),t.observer&&h.observer||this.update(),this.slideTo(a,0,!1)},addSlide:function(e,t){var i=this.$wrapperEl,s=this.params,a=this.activeIndex;s.loop&&(a-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+s.slideClass));var r=this.slides.length;if(e<=0)this.prependSlide(t);else if(e>=r)this.appendSlide(t);else{for(var n=a>e?a+1:a,o=[],l=r-1;l>=e;l-=1){var d=this.slides.eq(l);d.remove(),o.unshift(d)}if("object"==typeof t&&"length"in t){for(var p=0;p<t.length;p+=1)t[p]&&i.append(t[p]);n=a>e?a+t.length:a}else i.append(t);for(var c=0;c<o.length;c+=1)i.append(o[c]);s.loop&&this.loopCreate(),s.observer&&h.observer||this.update(),s.loop?this.slideTo(n+this.loopedSlides,0,!1):this.slideTo(n,0,!1)}},removeSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&(s-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+t.slideClass));var a,r=s;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)a=e[n],this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1);r=Math.max(r,0)}else a=e,this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1),r=Math.max(r,0);t.loop&&this.loopCreate(),t.observer&&h.observer||this.update(),t.loop?this.slideTo(r+this.loopedSlides,0,!1):this.slideTo(r,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},y=function(){var i=t.navigator.userAgent,s={ios:!1,android:!1,androidChrome:!1,desktop:!1,windows:!1,iphone:!1,ipod:!1,ipad:!1,cordova:t.cordova||t.phonegap,phonegap:t.cordova||t.phonegap},a=i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),r=i.match(/(Android);?[\s\/]+([\d.]+)?/),n=i.match(/(iPad).*OS\s([\d_]+)/),o=i.match(/(iPod)(.*OS\s([\d_]+))?/),l=!n&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if(a&&(s.os="windows",s.osVersion=a[2],s.windows=!0),r&&!a&&(s.os="android",s.osVersion=r[2],s.android=!0,s.androidChrome=i.toLowerCase().indexOf("chrome")>=0),(n||l||o)&&(s.os="ios",s.ios=!0),l&&!o&&(s.osVersion=l[2].replace(/_/g,"."),s.iphone=!0),n&&(s.osVersion=n[2].replace(/_/g,"."),s.ipad=!0),o&&(s.osVersion=o[3]?o[3].replace(/_/g,"."):null,s.iphone=!0),s.ios&&s.osVersion&&i.indexOf("Version/")>=0&&"10"===s.osVersion.split(".")[0]&&(s.osVersion=i.toLowerCase().split("version/")[1].split(" ")[0]),s.desktop=!(s.os||s.android||s.webView),s.webView=(l||n||o)&&i.match(/.*AppleWebKit(?!.*Safari)/i),s.os&&"ios"===s.os){var d=s.osVersion.split("."),h=e.querySelector('meta[name="viewport"]');s.minimalUi=!s.webView&&(o||l)&&(1*d[0]==7?1*d[1]>=1:1*d[0]>7)&&h&&h.getAttribute("content").indexOf("minimal-ui")>=0}return s.pixelRatio=t.devicePixelRatio||1,s}();function x(){var e=this.params,t=this.el;if(!t||0!==t.offsetWidth){e.breakpoints&&this.setBreakpoint();var i=this.allowSlideNext,s=this.allowSlidePrev,a=this.snapGrid;if(this.allowSlideNext=!0,this.allowSlidePrev=!0,this.updateSize(),this.updateSlides(),e.freeMode){var r=Math.min(Math.max(this.translate,this.maxTranslate()),this.minTranslate());this.setTranslate(r),this.updateActiveIndex(),this.updateSlidesClasses(),e.autoHeight&&this.updateAutoHeight()}else this.updateSlidesClasses(),("auto"===e.slidesPerView||e.slidesPerView>1)&&this.isEnd&&!this.params.centeredSlides?this.slideTo(this.slides.length-1,0,!1,!0):this.slideTo(this.activeIndex,0,!1,!0);this.allowSlidePrev=s,this.allowSlideNext=i,this.params.watchOverflow&&a!==this.snapGrid&&this.checkOverflow()}}var E={attachEvents:function(){var i=this.params,a=this.touchEvents,r=this.el,n=this.wrapperEl;this.onTouchStart=function(i){var a=this.touchEventsData,r=this.params,n=this.touches;if(!this.animating||!r.preventIntercationOnTransition){var o=i;if(o.originalEvent&&(o=o.originalEvent),a.isTouchEvent="touchstart"===o.type,(a.isTouchEvent||!("which"in o)||3!==o.which)&&(!a.isTouched||!a.isMoved))if(r.noSwiping&&s(o.target).closest(r.noSwipingSelector?r.noSwipingSelector:"."+r.noSwipingClass)[0])this.allowClick=!0;else if(!r.swipeHandler||s(o).closest(r.swipeHandler)[0]){n.currentX="touchstart"===o.type?o.targetTouches[0].pageX:o.pageX,n.currentY="touchstart"===o.type?o.targetTouches[0].pageY:o.pageY;var l=n.currentX,h=n.currentY;if(!y.ios||y.cordova||!r.iOSEdgeSwipeDetection||!(l<=r.iOSEdgeSwipeThreshold||l>=t.screen.width-r.iOSEdgeSwipeThreshold)){if(d.extend(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),n.startX=l,n.startY=h,a.touchStartTime=d.now(),this.allowClick=!0,this.updateSize(),this.swipeDirection=void 0,r.threshold>0&&(a.allowThresholdMove=!1),"touchstart"!==o.type){var p=!0;s(o.target).is(a.formElements)&&(p=!1),e.activeElement&&s(e.activeElement).is(a.formElements)&&e.activeElement!==o.target&&e.activeElement.blur(),p&&this.allowTouchMove&&o.preventDefault()}this.emit("touchStart",o)}}}}.bind(this),this.onTouchMove=function(t){var i=this.touchEventsData,a=this.params,r=this.touches,n=this.rtlTranslate,o=t;if(o.originalEvent&&(o=o.originalEvent),i.isTouched){if(!i.isTouchEvent||"mousemove"!==o.type){var l="touchmove"===o.type?o.targetTouches[0].pageX:o.pageX,h="touchmove"===o.type?o.targetTouches[0].pageY:o.pageY;if(o.preventedByNestedSwiper)return r.startX=l,void(r.startY=h);if(!this.allowTouchMove)return this.allowClick=!1,void(i.isTouched&&(d.extend(r,{startX:l,startY:h,currentX:l,currentY:h}),i.touchStartTime=d.now()));if(i.isTouchEvent&&a.touchReleaseOnEdges&&!a.loop)if(this.isVertical()){if(h<r.startY&&this.translate<=this.maxTranslate()||h>r.startY&&this.translate>=this.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(l<r.startX&&this.translate<=this.maxTranslate()||l>r.startX&&this.translate>=this.minTranslate())return;if(i.isTouchEvent&&e.activeElement&&o.target===e.activeElement&&s(o.target).is(i.formElements))return i.isMoved=!0,void(this.allowClick=!1);if(i.allowTouchCallbacks&&this.emit("touchMove",o),!(o.targetTouches&&o.targetTouches.length>1)){r.currentX=l,r.currentY=h;var p,c=r.currentX-r.startX,u=r.currentY-r.startY;if(void 0===i.isScrolling&&(this.isHorizontal()&&r.currentY===r.startY||this.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:c*c+u*u>=25&&(p=180*Math.atan2(Math.abs(u),Math.abs(c))/Math.PI,i.isScrolling=this.isHorizontal()?p>a.touchAngle:90-p>a.touchAngle)),i.isScrolling&&this.emit("touchMoveOpposite",o),"undefined"==typeof startMoving&&(r.currentX===r.startX&&r.currentY===r.startY||(i.startMoving=!0)),i.isScrolling)i.isTouched=!1;else if(i.startMoving){this.allowClick=!1,o.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&o.stopPropagation(),i.isMoved||(a.loop&&this.loopFix(),i.startTranslate=this.getTranslate(),this.setTransition(0),this.animating&&this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!a.grabCursor||!0!==this.allowSlideNext&&!0!==this.allowSlidePrev||this.setGrabCursor(!0),this.emit("sliderFirstMove",o)),this.emit("sliderMove",o),i.isMoved=!0;var v=this.isHorizontal()?c:u;r.diff=v,v*=a.touchRatio,n&&(v=-v),this.swipeDirection=v>0?"prev":"next",i.currentTranslate=v+i.startTranslate;var f=!0,m=a.resistanceRatio;if(a.touchReleaseOnEdges&&(m=0),v>0&&i.currentTranslate>this.minTranslate()?(f=!1,a.resistance&&(i.currentTranslate=this.minTranslate()-1+Math.pow(-this.minTranslate()+i.startTranslate+v,m))):v<0&&i.currentTranslate<this.maxTranslate()&&(f=!1,a.resistance&&(i.currentTranslate=this.maxTranslate()+1-Math.pow(this.maxTranslate()-i.startTranslate-v,m))),f&&(o.preventedByNestedSwiper=!0),!this.allowSlideNext&&"next"===this.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!this.allowSlidePrev&&"prev"===this.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),a.threshold>0){if(!(Math.abs(v)>a.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,void(r.diff=this.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY)}a.followFinger&&((a.freeMode||a.watchSlidesProgress||a.watchSlidesVisibility)&&(this.updateActiveIndex(),this.updateSlidesClasses()),a.freeMode&&(0===i.velocities.length&&i.velocities.push({position:r[this.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:r[this.isHorizontal()?"currentX":"currentY"],time:d.now()})),this.updateProgress(i.currentTranslate),this.setTranslate(i.currentTranslate))}}}}else i.startMoving&&i.isScrolling&&this.emit("touchMoveOpposite",o)}.bind(this),this.onTouchEnd=function(e){var t=this,i=t.touchEventsData,s=t.params,a=t.touches,r=t.rtlTranslate,n=t.$wrapperEl,o=t.slidesGrid,l=t.snapGrid,h=e;if(h.originalEvent&&(h=h.originalEvent),i.allowTouchCallbacks&&t.emit("touchEnd",h),i.allowTouchCallbacks=!1,!i.isTouched)return i.isMoved&&s.grabCursor&&t.setGrabCursor(!1),i.isMoved=!1,void(i.startMoving=!1);s.grabCursor&&i.isMoved&&i.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,c=d.now(),u=c-i.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(h),t.emit("tap",h),u<300&&c-i.lastClickTime>300&&(i.clickTimeout&&clearTimeout(i.clickTimeout),i.clickTimeout=d.nextTick(function(){t&&!t.destroyed&&t.emit("click",h)},300)),u<300&&c-i.lastClickTime<300&&(i.clickTimeout&&clearTimeout(i.clickTimeout),t.emit("doubleTap",h))),i.lastClickTime=d.now(),d.nextTick(function(){t.destroyed||(t.allowClick=!0)}),!i.isTouched||!i.isMoved||!t.swipeDirection||0===a.diff||i.currentTranslate===i.startTranslate)return i.isTouched=!1,i.isMoved=!1,void(i.startMoving=!1);if(i.isTouched=!1,i.isMoved=!1,i.startMoving=!1,p=s.followFinger?r?t.translate:-t.translate:-i.currentTranslate,s.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<l.length?t.slideTo(l.length-1):t.slideTo(t.slides.length-1));if(s.freeModeMomentum){if(i.velocities.length>1){var v=i.velocities.pop(),f=i.velocities.pop(),m=v.position-f.position,g=v.time-f.time;t.velocity=m/g,t.velocity/=2,Math.abs(t.velocity)<s.freeModeMinimumVelocity&&(t.velocity=0),(g>150||d.now()-v.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=s.freeModeMomentumVelocityRatio,i.velocities.length=0;var b=1e3*s.freeModeMomentumRatio,w=t.velocity*b,y=t.translate+w;r&&(y=-y);var x,E,T=!1,S=20*Math.abs(t.velocity)*s.freeModeMomentumBounceRatio;if(y<t.maxTranslate())s.freeModeMomentumBounce?(y+t.maxTranslate()<-S&&(y=t.maxTranslate()-S),x=t.maxTranslate(),T=!0,i.allowMomentumBounce=!0):y=t.maxTranslate(),s.loop&&s.centeredSlides&&(E=!0);else if(y>t.minTranslate())s.freeModeMomentumBounce?(y-t.minTranslate()>S&&(y=t.minTranslate()+S),x=t.minTranslate(),T=!0,i.allowMomentumBounce=!0):y=t.minTranslate(),s.loop&&s.centeredSlides&&(E=!0);else if(s.freeModeSticky){for(var C,M=0;M<l.length;M+=1)if(l[M]>-y){C=M;break}y=-(y=Math.abs(l[C]-y)<Math.abs(l[C-1]-y)||"next"===t.swipeDirection?l[C]:l[C-1])}if(E&&t.once("transitionEnd",function(){t.loopFix()}),0!==t.velocity)b=r?Math.abs((-y-t.translate)/t.velocity):Math.abs((y-t.translate)/t.velocity);else if(s.freeModeSticky)return void t.slideToClosest();s.freeModeMomentumBounce&&T?(t.updateProgress(x),t.setTransition(b),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&i.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(s.speed),t.setTranslate(x),n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))})):t.velocity?(t.updateProgress(y),t.setTransition(b),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))):t.updateProgress(y),t.updateActiveIndex(),t.updateSlidesClasses()}else if(s.freeModeSticky)return void t.slideToClosest();(!s.freeModeMomentum||u>=s.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var z=0,k=t.slidesSizesGrid[0],P=0;P<o.length;P+=s.slidesPerGroup)void 0!==o[P+s.slidesPerGroup]?p>=o[P]&&p<o[P+s.slidesPerGroup]&&(z=P,k=o[P+s.slidesPerGroup]-o[P]):p>=o[P]&&(z=P,k=o[o.length-1]-o[o.length-2]);var $=(p-o[z])/k;if(u>s.longSwipesMs){if(!s.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&($>=s.longSwipesRatio?t.slideTo(z+s.slidesPerGroup):t.slideTo(z)),"prev"===t.swipeDirection&&($>1-s.longSwipesRatio?t.slideTo(z+s.slidesPerGroup):t.slideTo(z))}else{if(!s.shortSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&t.slideTo(z+s.slidesPerGroup),"prev"===t.swipeDirection&&t.slideTo(z)}}}.bind(this),this.onClick=function(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}.bind(this);var o="container"===i.touchEventsTarget?r:n,l=!!i.nested;if(h.touch||!h.pointerEvents&&!h.prefixedPointerEvents){if(h.touch){var p=!("touchstart"!==a.start||!h.passiveListener||!i.passiveListeners)&&{passive:!0,capture:!1};o.addEventListener(a.start,this.onTouchStart,p),o.addEventListener(a.move,this.onTouchMove,h.passiveListener?{passive:!1,capture:l}:l),o.addEventListener(a.end,this.onTouchEnd,p)}(i.simulateTouch&&!y.ios&&!y.android||i.simulateTouch&&!h.touch&&y.ios)&&(o.addEventListener("mousedown",this.onTouchStart,!1),e.addEventListener("mousemove",this.onTouchMove,l),e.addEventListener("mouseup",this.onTouchEnd,!1))}else o.addEventListener(a.start,this.onTouchStart,!1),e.addEventListener(a.move,this.onTouchMove,l),e.addEventListener(a.end,this.onTouchEnd,!1);(i.preventClicks||i.preventClicksPropagation)&&o.addEventListener("click",this.onClick,!0),this.on(y.ios||y.android?"resize orientationchange observerUpdate":"resize observerUpdate",x,!0)},detachEvents:function(){var t=this.params,i=this.touchEvents,s=this.el,a=this.wrapperEl,r="container"===t.touchEventsTarget?s:a,n=!!t.nested;if(h.touch||!h.pointerEvents&&!h.prefixedPointerEvents){if(h.touch){var o=!("onTouchStart"!==i.start||!h.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.removeEventListener(i.start,this.onTouchStart,o),r.removeEventListener(i.move,this.onTouchMove,n),r.removeEventListener(i.end,this.onTouchEnd,o)}(t.simulateTouch&&!y.ios&&!y.android||t.simulateTouch&&!h.touch&&y.ios)&&(r.removeEventListener("mousedown",this.onTouchStart,!1),e.removeEventListener("mousemove",this.onTouchMove,n),e.removeEventListener("mouseup",this.onTouchEnd,!1))}else r.removeEventListener(i.start,this.onTouchStart,!1),e.removeEventListener(i.move,this.onTouchMove,n),e.removeEventListener(i.end,this.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&r.removeEventListener("click",this.onClick,!0),this.off(y.ios||y.android?"resize orientationchange observerUpdate":"resize observerUpdate",x)}};var T={setBreakpoint:function(){var e=this.activeIndex,t=this.initialized,i=this.loopedSlides;void 0===i&&(i=0);var s=this.params,a=s.breakpoints;if(a&&(!a||0!==Object.keys(a).length)){var r=this.getBreakpoint(a);if(r&&this.currentBreakpoint!==r){var n=r in a?a[r]:this.originalParams,o=s.loop&&n.slidesPerView!==s.slidesPerView;d.extend(this.params,n),d.extend(this,{allowTouchMove:this.params.allowTouchMove,allowSlideNext:this.params.allowSlideNext,allowSlidePrev:this.params.allowSlidePrev}),this.currentBreakpoint=r,o&&t&&(this.loopDestroy(),this.loopCreate(),this.updateSlides(),this.slideTo(e-i+this.loopedSlides,0,!1)),this.emit("breakpoint",n)}}},getBreakpoint:function(e){if(e){var i=!1,s=[];Object.keys(e).forEach(function(e){s.push(e)}),s.sort(function(e,t){return parseInt(e,10)-parseInt(t,10)});for(var a=0;a<s.length;a+=1){var r=s[a];r>=t.innerWidth&&!i&&(i=r)}return i||"max"}}},S=function(){return{isIE:!!t.navigator.userAgent.match(/Trident/g)||!!t.navigator.userAgent.match(/MSIE/g),isSafari:(e=t.navigator.userAgent.toLowerCase(),e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)};var e}();var C={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,preventIntercationOnTransition:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},M={update:u,translate:v,transition:f,slide:m,loop:g,grabCursor:b,manipulation:w,events:E,breakpoints:T,checkOverflow:{checkOverflow:function(){var e=this.isLocked;this.isLocked=1===this.snapGrid.length,this.allowSlideNext=!this.isLocked,this.allowSlidePrev=!this.isLocked,e!==this.isLocked&&this.emit(this.isLocked?"lock":"unlock"),e&&e!==this.isLocked&&(this.isEnd=!1,this.navigation.update())}},classes:{addClasses:function(){var e=this.classNames,t=this.params,i=this.rtl,s=this.$el,a=[];a.push(t.direction),t.freeMode&&a.push("free-mode"),h.flexbox||a.push("no-flexbox"),t.autoHeight&&a.push("autoheight"),i&&a.push("rtl"),t.slidesPerColumn>1&&a.push("multirow"),y.android&&a.push("android"),y.ios&&a.push("ios"),S.isIE&&(h.pointerEvents||h.prefixedPointerEvents)&&a.push("wp8-"+t.direction),a.forEach(function(i){e.push(t.containerModifierClass+i)}),s.addClass(e.join(" "))},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" "))}},images:{loadImage:function(e,i,s,a,r,n){var o;function l(){n&&n()}e.complete&&r?l():i?((o=new t.Image).onload=l,o.onerror=l,a&&(o.sizes=a),s&&(o.srcset=s),i&&(o.src=i)):l()},preloadImages:function(){var e=this;function t(){void 0!==e&&null!==e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var i=0;i<e.imagesToLoad.length;i+=1){var s=e.imagesToLoad[i];e.loadImage(s,s.currentSrc||s.getAttribute("src"),s.srcset||s.getAttribute("srcset"),s.sizes||s.getAttribute("sizes"),!0,t)}}}},z={},k=function(e){function t(){for(var i,a,r,n=[],o=arguments.length;o--;)n[o]=arguments[o];1===n.length&&n[0].constructor&&n[0].constructor===Object?r=n[0]:(a=(i=n)[0],r=i[1]),r||(r={}),r=d.extend({},r),a&&!r.el&&(r.el=a),e.call(this,r),Object.keys(M).forEach(function(e){Object.keys(M[e]).forEach(function(i){t.prototype[i]||(t.prototype[i]=M[e][i])})});var l=this;void 0===l.modules&&(l.modules={}),Object.keys(l.modules).forEach(function(e){var t=l.modules[e];if(t.params){var i=Object.keys(t.params)[0],s=t.params[i];if("object"!=typeof s)return;if(!(i in r&&"enabled"in s))return;!0===r[i]&&(r[i]={enabled:!0}),"object"!=typeof r[i]||"enabled"in r[i]||(r[i].enabled=!0),r[i]||(r[i]={enabled:!1})}});var p=d.extend({},C);l.useModulesParams(p),l.params=d.extend({},p,z,r),l.originalParams=d.extend({},l.params),l.passedParams=d.extend({},r),l.$=s;var c=s(l.params.el);if(a=c[0]){if(c.length>1){var u=[];return c.each(function(e,i){var s=d.extend({},r,{el:i});u.push(new t(s))}),u}a.swiper=l,c.data("swiper",l);var v,f,m=c.children("."+l.params.wrapperClass);return d.extend(l,{$el:c,el:a,$wrapperEl:m,wrapperEl:m[0],classNames:[],slides:s(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===l.params.direction},isVertical:function(){return"vertical"===l.params.direction},rtl:"rtl"===a.dir.toLowerCase()||"rtl"===c.css("direction"),rtlTranslate:"horizontal"===l.params.direction&&("rtl"===a.dir.toLowerCase()||"rtl"===c.css("direction")),wrongRTL:"-webkit-box"===m.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEvents:(v=["touchstart","touchmove","touchend"],f=["mousedown","mousemove","mouseup"],h.pointerEvents?f=["pointerdown","pointermove","pointerup"]:h.prefixedPointerEvents&&(f=["MSPointerDown","MSPointerMove","MSPointerUp"]),l.touchEventsTouch={start:v[0],move:v[1],end:v[2]},l.touchEventsDesktop={start:f[0],move:f[1],end:f[2]},h.touch||!l.params.simulateTouch?l.touchEventsTouch:l.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video",lastClickTime:d.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.useModules(),l.params.init&&l.init(),l}}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var i={extendedDefaults:{configurable:!0},defaults:{configurable:!0},Class:{configurable:!0},$:{configurable:!0}};return t.prototype.slidesPerViewDynamic=function(){var e=this.params,t=this.slides,i=this.slidesGrid,s=this.size,a=this.activeIndex,r=1;if(e.centeredSlides){for(var n,o=t[a].swiperSlideSize,l=a+1;l<t.length;l+=1)t[l]&&!n&&(r+=1,(o+=t[l].swiperSlideSize)>s&&(n=!0));for(var d=a-1;d>=0;d-=1)t[d]&&!n&&(r+=1,(o+=t[d].swiperSlideSize)>s&&(n=!0))}else for(var h=a+1;h<t.length;h+=1)i[h]-i[a]<s&&(r+=1);return r},t.prototype.update=function(){var e=this;if(e&&!e.destroyed){var t=e.snapGrid,i=e.params;i.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode?(s(),e.params.autoHeight&&e.updateAutoHeight()):(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0))||s(),i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}function s(){var t=e.rtlTranslate?-1*e.translate:e.translate,i=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(i),e.updateActiveIndex(),e.updateSlidesClasses()}},t.prototype.init=function(){this.initialized||(this.emit("beforeInit"),this.params.breakpoints&&this.setBreakpoint(),this.addClasses(),this.params.loop&&this.loopCreate(),this.updateSize(),this.updateSlides(),this.params.watchOverflow&&this.checkOverflow(),this.params.grabCursor&&this.setGrabCursor(),this.params.preloadImages&&this.preloadImages(),this.params.loop?this.slideTo(this.params.initialSlide+this.loopedSlides,0,this.params.runCallbacksOnInit):this.slideTo(this.params.initialSlide,0,this.params.runCallbacksOnInit),this.attachEvents(),this.initialized=!0,this.emit("init"))},t.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var i=this,s=i.params,a=i.$el,r=i.$wrapperEl,n=i.slides;return void 0===i.params||i.destroyed?null:(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),s.loop&&i.loopDestroy(),t&&(i.removeClasses(),a.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([s.slideVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(function(e){i.off(e)}),!1!==e&&(i.$el[0].swiper=null,i.$el.data("swiper",null),d.deleteProps(i)),i.destroyed=!0,null)},t.extendDefaults=function(e){d.extend(z,e)},i.extendedDefaults.get=function(){return z},i.defaults.get=function(){return C},i.Class.get=function(){return e},i.$.get=function(){return s},Object.defineProperties(t,i),t}(p),P={name:"device",proto:{device:y},static:{device:y}},$={name:"support",proto:{support:h},static:{support:h}},L={name:"browser",proto:{browser:S},static:{browser:S}},I={name:"resize",create:function(){var e=this;d.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){t.addEventListener("resize",this.resize.resizeHandler),t.addEventListener("orientationchange",this.resize.orientationChangeHandler)},destroy:function(){t.removeEventListener("resize",this.resize.resizeHandler),t.removeEventListener("orientationchange",this.resize.orientationChangeHandler)}}},D={func:t.MutationObserver||t.WebkitMutationObserver,attach:function(e,t){void 0===t&&(t={});var i=this,s=new(0,D.func)(function(e){e.forEach(function(e){i.emit("observerUpdate",e)})});s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),i.observer.observers.push(s)},init:function(){if(h.observer&&this.params.observer){if(this.params.observeParents)for(var e=this.$el.parents(),t=0;t<e.length;t+=1)this.observer.attach(e[t]);this.observer.attach(this.$el[0],{childList:!1}),this.observer.attach(this.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach(function(e){e.disconnect()}),this.observer.observers=[]}},O={name:"observer",params:{observer:!1,observeParents:!1},create:function(){d.extend(this,{observer:{init:D.init.bind(this),attach:D.attach.bind(this),destroy:D.destroy.bind(this),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},A={update:function(e){var t=this,i=t.params,s=i.slidesPerView,a=i.slidesPerGroup,r=i.centeredSlides,n=t.virtual,o=n.from,l=n.to,h=n.slides,p=n.slidesGrid,c=n.renderSlide,u=n.offset;t.updateActiveIndex();var v,f,m,g=t.activeIndex||0;v=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",r?(f=Math.floor(s/2)+a,m=Math.floor(s/2)+a):(f=s+(a-1),m=a);var b=Math.max((g||0)-m,0),w=Math.min((g||0)+f,h.length-1),y=(t.slidesGrid[b]||0)-(t.slidesGrid[0]||0);function x(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(d.extend(t.virtual,{from:b,to:w,offset:y,slidesGrid:t.slidesGrid}),o===b&&l===w&&!e)return t.slidesGrid!==p&&y!==u&&t.slides.css(v,y+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:y,from:b,to:w,slides:function(){for(var e=[],t=b;t<=w;t+=1)e.push(h[t]);return e}()}),void x();var E=[],T=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var S=o;S<=l;S+=1)(S<b||S>w)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+S+'"]').remove();for(var C=0;C<h.length;C+=1)C>=b&&C<=w&&(void 0===l||e?T.push(C):(C>l&&T.push(C),C<o&&E.push(C)));T.forEach(function(e){t.$wrapperEl.append(c(h[e],e))}),E.sort(function(e,t){return e<t}).forEach(function(e){t.$wrapperEl.prepend(c(h[e],e))}),t.$wrapperEl.children(".swiper-slide").css(v,y+"px"),x()},renderSlide:function(e,t){var i=this.params.virtual;if(i.cache&&this.virtual.cache[t])return this.virtual.cache[t];var a=i.renderSlide?s(i.renderSlide.call(this,e,t)):s('<div class="'+this.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return a.attr("data-swiper-slide-index")||a.attr("data-swiper-slide-index",t),i.cache&&(this.virtual.cache[t]=a),a},appendSlide:function(e){this.virtual.slides.push(e),this.virtual.update(!0)},prependSlide:function(e){if(this.virtual.slides.unshift(e),this.params.virtual.cache){var t=this.virtual.cache,i={};Object.keys(t).forEach(function(e){i[e+1]=t[e]}),this.virtual.cache=i}this.virtual.update(!0),this.slideNext(0)}},G={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null}},create:function(){d.extend(this,{virtual:{update:A.update.bind(this),appendSlide:A.appendSlide.bind(this),prependSlide:A.prependSlide.bind(this),renderSlide:A.renderSlide.bind(this),slides:this.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){if(this.params.virtual.enabled){this.classNames.push(this.params.containerModifierClass+"virtual");var e={watchSlidesProgress:!0};d.extend(this.params,e),d.extend(this.originalParams,e),this.virtual.update()}},setTranslate:function(){this.params.virtual.enabled&&this.virtual.update()}}},H={handle:function(i){var s=this.rtlTranslate,a=i;a.originalEvent&&(a=a.originalEvent);var r=a.keyCode||a.charCode;if(!this.allowSlideNext&&(this.isHorizontal()&&39===r||this.isVertical()&&40===r))return!1;if(!this.allowSlidePrev&&(this.isHorizontal()&&37===r||this.isVertical()&&38===r))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||e.activeElement&&e.activeElement.nodeName&&("input"===e.activeElement.nodeName.toLowerCase()||"textarea"===e.activeElement.nodeName.toLowerCase()))){if(this.params.keyboard.onlyInViewport&&(37===r||39===r||38===r||40===r)){var n=!1;if(this.$el.parents("."+this.params.slideClass).length>0&&0===this.$el.parents("."+this.params.slideActiveClass).length)return;var o=t.innerWidth,l=t.innerHeight,d=this.$el.offset();s&&(d.left-=this.$el[0].scrollLeft);for(var h=[[d.left,d.top],[d.left+this.width,d.top],[d.left,d.top+this.height],[d.left+this.width,d.top+this.height]],p=0;p<h.length;p+=1){var c=h[p];c[0]>=0&&c[0]<=o&&c[1]>=0&&c[1]<=l&&(n=!0)}if(!n)return}this.isHorizontal()?(37!==r&&39!==r||(a.preventDefault?a.preventDefault():a.returnValue=!1),(39===r&&!s||37===r&&s)&&this.slideNext(),(37===r&&!s||39===r&&s)&&this.slidePrev()):(38!==r&&40!==r||(a.preventDefault?a.preventDefault():a.returnValue=!1),40===r&&this.slideNext(),38===r&&this.slidePrev()),this.emit("keyPress",r)}},enable:function(){this.keyboard.enabled||(s(e).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){this.keyboard.enabled&&(s(e).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},N={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0}},create:function(){d.extend(this,{keyboard:{enabled:!1,enable:H.enable.bind(this),disable:H.disable.bind(this),handle:H.handle.bind(this)}})},on:{init:function(){this.params.keyboard.enabled&&this.keyboard.enable()},destroy:function(){this.keyboard.enabled&&this.keyboard.disable()}}};var B={lastScrollTime:d.now(),event:t.navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var t="onwheel"in e;if(!t){var i=e.createElement("div");i.setAttribute("onwheel","return;"),t="function"==typeof i.onwheel}return!t&&e.implementation&&e.implementation.hasFeature&&!0!==e.implementation.hasFeature("","")&&(t=e.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel",normalize:function(e){var t=0,i=0,s=0,a=0;return"detail"in e&&(i=e.detail),"wheelDelta"in e&&(i=-e.wheelDelta/120),"wheelDeltaY"in e&&(i=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=i,i=0),s=10*t,a=10*i,"deltaY"in e&&(a=e.deltaY),"deltaX"in e&&(s=e.deltaX),(s||a)&&e.deltaMode&&(1===e.deltaMode?(s*=40,a*=40):(s*=800,a*=800)),s&&!t&&(t=s<1?-1:1),a&&!i&&(i=a<1?-1:1),{spinX:t,spinY:i,pixelX:s,pixelY:a}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var i=e,s=this,a=s.params.mousewheel;if(!s.mouseEntered&&!a.releaseOnEdges)return!0;i.originalEvent&&(i=i.originalEvent);var r=0,n=s.rtlTranslate?-1:1,o=B.normalize(i);if(a.forceToAxis)if(s.isHorizontal()){if(!(Math.abs(o.pixelX)>Math.abs(o.pixelY)))return!0;r=o.pixelX*n}else{if(!(Math.abs(o.pixelY)>Math.abs(o.pixelX)))return!0;r=o.pixelY}else r=Math.abs(o.pixelX)>Math.abs(o.pixelY)?-o.pixelX*n:-o.pixelY;if(0===r)return!0;if(a.invert&&(r=-r),s.params.freeMode){s.params.loop&&s.loopFix();var l=s.getTranslate()+r*a.sensitivity,h=s.isBeginning,p=s.isEnd;if(l>=s.minTranslate()&&(l=s.minTranslate()),l<=s.maxTranslate()&&(l=s.maxTranslate()),s.setTransition(0),s.setTranslate(l),s.updateProgress(),s.updateActiveIndex(),s.updateSlidesClasses(),(!h&&s.isBeginning||!p&&s.isEnd)&&s.updateSlidesClasses(),s.params.freeModeSticky&&(clearTimeout(s.mousewheel.timeout),s.mousewheel.timeout=d.nextTick(function(){s.slideToClosest()},300)),s.emit("scroll",i),s.params.autoplay&&s.params.autoplayDisableOnInteraction&&s.autoplay.stop(),l===s.minTranslate()||l===s.maxTranslate())return!0}else{if(d.now()-s.mousewheel.lastScrollTime>60)if(r<0)if(s.isEnd&&!s.params.loop||s.animating){if(a.releaseOnEdges)return!0}else s.slideNext(),s.emit("scroll",i);else if(s.isBeginning&&!s.params.loop||s.animating){if(a.releaseOnEdges)return!0}else s.slidePrev(),s.emit("scroll",i);s.mousewheel.lastScrollTime=(new t.Date).getTime()}return i.preventDefault?i.preventDefault():i.returnValue=!1,!1},enable:function(){if(!B.event)return!1;if(this.mousewheel.enabled)return!1;var e=this.$el;return"container"!==this.params.mousewheel.eventsTarged&&(e=s(this.params.mousewheel.eventsTarged)),e.on("mouseenter",this.mousewheel.handleMouseEnter),e.on("mouseleave",this.mousewheel.handleMouseLeave),e.on(B.event,this.mousewheel.handle),this.mousewheel.enabled=!0,!0},disable:function(){if(!B.event)return!1;if(!this.mousewheel.enabled)return!1;var e=this.$el;return"container"!==this.params.mousewheel.eventsTarged&&(e=s(this.params.mousewheel.eventsTarged)),e.off(B.event,this.mousewheel.handle),this.mousewheel.enabled=!1,!0}},X={update:function(){var e=this.params.navigation;if(!this.params.loop){var t=this.navigation,i=t.$nextEl,s=t.$prevEl;s&&s.length>0&&(this.isBeginning?s.addClass(e.disabledClass):s.removeClass(e.disabledClass),s[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass)),i&&i.length>0&&(this.isEnd?i.addClass(e.disabledClass):i.removeClass(e.disabledClass),i[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass))}},init:function(){var e,t,i=this,a=i.params.navigation;(a.nextEl||a.prevEl)&&(a.nextEl&&(e=s(a.nextEl),i.params.uniqueNavElements&&"string"==typeof a.nextEl&&e.length>1&&1===i.$el.find(a.nextEl).length&&(e=i.$el.find(a.nextEl))),a.prevEl&&(t=s(a.prevEl),i.params.uniqueNavElements&&"string"==typeof a.prevEl&&t.length>1&&1===i.$el.find(a.prevEl).length&&(t=i.$el.find(a.prevEl))),e&&e.length>0&&e.on("click",function(e){e.preventDefault(),i.isEnd&&!i.params.loop||i.slideNext()}),t&&t.length>0&&t.on("click",function(e){e.preventDefault(),i.isBeginning&&!i.params.loop||i.slidePrev()}),d.extend(i.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;t&&t.length&&(t.off("click"),t.removeClass(this.params.navigation.disabledClass)),i&&i.length&&(i.off("click"),i.removeClass(this.params.navigation.disabledClass))}},Y={update:function(){var e=this.rtl,t=this.params.pagination;if(t.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var i,a=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,r=this.pagination.$el,n=this.params.loop?Math.ceil((a-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length;if(this.params.loop?((i=Math.ceil((this.activeIndex-this.loopedSlides)/this.params.slidesPerGroup))>a-1-2*this.loopedSlides&&(i-=a-2*this.loopedSlides),i>n-1&&(i-=n),i<0&&"bullets"!==this.params.paginationType&&(i=n+i)):i=void 0!==this.snapIndex?this.snapIndex:this.activeIndex||0,"bullets"===t.type&&this.pagination.bullets&&this.pagination.bullets.length>0){var o,l,d,h=this.pagination.bullets;if(t.dynamicBullets&&(this.pagination.bulletSize=h.eq(0)[this.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(this.isHorizontal()?"width":"height",this.pagination.bulletSize*(t.dynamicMainBullets+4)+"px"),t.dynamicMainBullets>1&&void 0!==this.previousIndex&&(this.pagination.dynamicBulletIndex+=i-this.previousIndex,this.pagination.dynamicBulletIndex>t.dynamicMainBullets-1?this.pagination.dynamicBulletIndex=t.dynamicMainBullets-1:this.pagination.dynamicBulletIndex<0&&(this.pagination.dynamicBulletIndex=0)),o=i-this.pagination.dynamicBulletIndex,d=((l=o+(Math.min(h.length,t.dynamicMainBullets)-1))+o)/2),h.removeClass(t.bulletActiveClass+" "+t.bulletActiveClass+"-next "+t.bulletActiveClass+"-next-next "+t.bulletActiveClass+"-prev "+t.bulletActiveClass+"-prev-prev "+t.bulletActiveClass+"-main"),r.length>1)h.each(function(e,a){var r=s(a),n=r.index();n===i&&r.addClass(t.bulletActiveClass),t.dynamicBullets&&(n>=o&&n<=l&&r.addClass(t.bulletActiveClass+"-main"),n===o&&r.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),n===l&&r.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next"))});else if(h.eq(i).addClass(t.bulletActiveClass),t.dynamicBullets){for(var p=h.eq(o),c=h.eq(l),u=o;u<=l;u+=1)h.eq(u).addClass(t.bulletActiveClass+"-main");p.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),c.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next")}if(t.dynamicBullets){var v=Math.min(h.length,t.dynamicMainBullets+4),f=(this.pagination.bulletSize*v-this.pagination.bulletSize)/2-d*this.pagination.bulletSize,m=e?"right":"left";h.css(this.isHorizontal()?m:"top",f+"px")}}if("fraction"===t.type&&(r.find("."+t.currentClass).text(t.formatFractionCurrent(i+1)),r.find("."+t.totalClass).text(t.formatFractionTotal(n))),"progressbar"===t.type){var g;g=t.progressbarOpposite?this.isHorizontal()?"vertical":"horizontal":this.isHorizontal()?"horizontal":"vertical";var b=(i+1)/n,w=1,y=1;"horizontal"===g?w=b:y=b,r.find("."+t.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+w+") scaleY("+y+")").transition(this.params.speed)}"custom"===t.type&&t.renderCustom?(r.html(t.renderCustom(this,i+1,n)),this.emit("paginationRender",this,r[0])):this.emit("paginationUpdate",this,r[0]),r[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](t.lockClass)}},render:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,i=this.pagination.$el,s="";if("bullets"===e.type){for(var a=this.params.loop?Math.ceil((t-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length,r=0;r<a;r+=1)e.renderBullet?s+=e.renderBullet.call(this,r,e.bulletClass):s+="<"+e.bulletElement+' class="'+e.bulletClass+'"></'+e.bulletElement+">";i.html(s),this.pagination.bullets=i.find("."+e.bulletClass)}"fraction"===e.type&&(s=e.renderFraction?e.renderFraction.call(this,e.currentClass,e.totalClass):'<span class="'+e.currentClass+'"></span> / <span class="'+e.totalClass+'"></span>',i.html(s)),"progressbar"===e.type&&(s=e.renderProgressbar?e.renderProgressbar.call(this,e.progressbarFillClass):'<span class="'+e.progressbarFillClass+'"></span>',i.html(s)),"custom"!==e.type&&this.emit("paginationRender",this.pagination.$el[0])}},init:function(){var e=this,t=e.params.pagination;if(t.el){var i=s(t.el);0!==i.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&i.length>1&&1===e.$el.find(t.el).length&&(i=e.$el.find(t.el)),"bullets"===t.type&&t.clickable&&i.addClass(t.clickableClass),i.addClass(t.modifierClass+t.type),"bullets"===t.type&&t.dynamicBullets&&(i.addClass(""+t.modifierClass+t.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&i.addClass(t.progressbarOppositeClass),t.clickable&&i.on("click","."+t.bulletClass,function(t){t.preventDefault();var i=s(this).index()*e.params.slidesPerGroup;e.params.loop&&(i+=e.loopedSlides),e.slideTo(i)}),d.extend(e.pagination,{$el:i,el:i[0]}))}},destroy:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.pagination.$el;t.removeClass(e.hiddenClass),t.removeClass(e.modifierClass+e.type),this.pagination.bullets&&this.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&t.off("click","."+e.bulletClass)}}},V={setTranslate:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=this.rtlTranslate,i=this.progress,s=e.dragSize,a=e.trackSize,r=e.$dragEl,n=e.$el,o=this.params.scrollbar,l=s,d=(a-s)*i;t?(d=-d)>0?(l=s-d,d=0):-d+s>a&&(l=a+d):d<0?(l=s+d,d=0):d+s>a&&(l=a-d),this.isHorizontal()?(h.transforms3d?r.transform("translate3d("+d+"px, 0, 0)"):r.transform("translateX("+d+"px)"),r[0].style.width=l+"px"):(h.transforms3d?r.transform("translate3d(0px, "+d+"px, 0)"):r.transform("translateY("+d+"px)"),r[0].style.height=l+"px"),o.hide&&(clearTimeout(this.scrollbar.timeout),n[0].style.opacity=1,this.scrollbar.timeout=setTimeout(function(){n[0].style.opacity=0,n.transition(400)},1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=e.$dragEl,i=e.$el;t[0].style.width="",t[0].style.height="";var s,a=this.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,r=this.size/this.virtualSize,n=r*(a/this.size);s="auto"===this.params.scrollbar.dragSize?a*r:parseInt(this.params.scrollbar.dragSize,10),this.isHorizontal()?t[0].style.width=s+"px":t[0].style.height=s+"px",i[0].style.display=r>=1?"none":"",this.params.scrollbarHide&&(i[0].style.opacity=0),d.extend(e,{trackSize:a,divider:r,moveDivider:n,dragSize:s}),e.$el[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](this.params.scrollbar.lockClass)}},setDragPosition:function(e){var t,i=this.scrollbar,s=this.rtlTranslate,a=i.$el,r=i.dragSize,n=i.trackSize;t=((this.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY)-a.offset()[this.isHorizontal()?"left":"top"]-r/2)/(n-r),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var o=this.minTranslate()+(this.maxTranslate()-this.minTranslate())*t;this.updateProgress(o),this.setTranslate(o),this.updateActiveIndex(),this.updateSlidesClasses()},onDragStart:function(e){var t=this.params.scrollbar,i=this.scrollbar,s=this.$wrapperEl,a=i.$el,r=i.$dragEl;this.scrollbar.isTouched=!0,e.preventDefault(),e.stopPropagation(),s.transition(100),r.transition(100),i.setDragPosition(e),clearTimeout(this.scrollbar.dragTimeout),a.transition(0),t.hide&&a.css("opacity",1),this.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,i=this.$wrapperEl,s=t.$el,a=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),i.transition(0),s.transition(0),a.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this.params.scrollbar,i=this.scrollbar.$el;this.scrollbar.isTouched&&(this.scrollbar.isTouched=!1,t.hide&&(clearTimeout(this.scrollbar.dragTimeout),this.scrollbar.dragTimeout=d.nextTick(function(){i.css("opacity",0),i.transition(400)},1e3)),this.emit("scrollbarDragEnd",e),t.snapOnRelease&&this.slideToClosest())},enableDraggable:function(){if(this.params.scrollbar.el){var t=this.scrollbar,i=this.touchEvents,s=this.touchEventsDesktop,a=this.params,r=t.$el[0],n=!(!h.passiveListener||!a.passiveListener)&&{passive:!1,capture:!1},o=!(!h.passiveListener||!a.passiveListener)&&{passive:!0,capture:!1};h.touch||!h.pointerEvents&&!h.prefixedPointerEvents?(h.touch&&(r.addEventListener(i.start,this.scrollbar.onDragStart,n),r.addEventListener(i.move,this.scrollbar.onDragMove,n),r.addEventListener(i.end,this.scrollbar.onDragEnd,o)),(a.simulateTouch&&!y.ios&&!y.android||a.simulateTouch&&!h.touch&&y.ios)&&(r.addEventListener("mousedown",this.scrollbar.onDragStart,n),e.addEventListener("mousemove",this.scrollbar.onDragMove,n),e.addEventListener("mouseup",this.scrollbar.onDragEnd,o))):(r.addEventListener(s.start,this.scrollbar.onDragStart,n),e.addEventListener(s.move,this.scrollbar.onDragMove,n),e.addEventListener(s.end,this.scrollbar.onDragEnd,o))}},disableDraggable:function(){if(this.params.scrollbar.el){var t=this.scrollbar,i=this.touchEvents,s=this.touchEventsDesktop,a=this.params,r=t.$el[0],n=!(!h.passiveListener||!a.passiveListener)&&{passive:!1,capture:!1},o=!(!h.passiveListener||!a.passiveListener)&&{passive:!0,capture:!1};h.touch||!h.pointerEvents&&!h.prefixedPointerEvents?(h.touch&&(r.removeEventListener(i.start,this.scrollbar.onDragStart,n),r.removeEventListener(i.move,this.scrollbar.onDragMove,n),r.removeEventListener(i.end,this.scrollbar.onDragEnd,o)),(a.simulateTouch&&!y.ios&&!y.android||a.simulateTouch&&!h.touch&&y.ios)&&(r.removeEventListener("mousedown",this.scrollbar.onDragStart,n),e.removeEventListener("mousemove",this.scrollbar.onDragMove,n),e.removeEventListener("mouseup",this.scrollbar.onDragEnd,o))):(r.removeEventListener(s.start,this.scrollbar.onDragStart,n),e.removeEventListener(s.move,this.scrollbar.onDragMove,n),e.removeEventListener(s.end,this.scrollbar.onDragEnd,o))}},init:function(){if(this.params.scrollbar.el){var e=this.scrollbar,t=this.$el,i=this.params.scrollbar,a=s(i.el);this.params.uniqueNavElements&&"string"==typeof i.el&&a.length>1&&1===t.find(i.el).length&&(a=t.find(i.el));var r=a.find("."+this.params.scrollbar.dragClass);0===r.length&&(r=s('<div class="'+this.params.scrollbar.dragClass+'"></div>'),a.append(r)),d.extend(e,{$el:a,el:a[0],$dragEl:r,dragEl:r[0]}),i.draggable&&e.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},R={setTransform:function(e,t){var i=this.rtl,a=s(e),r=i?-1:1,n=a.attr("data-swiper-parallax")||"0",o=a.attr("data-swiper-parallax-x"),l=a.attr("data-swiper-parallax-y"),d=a.attr("data-swiper-parallax-scale"),h=a.attr("data-swiper-parallax-opacity");if(o||l?(o=o||"0",l=l||"0"):this.isHorizontal()?(o=n,l="0"):(l=n,o="0"),o=o.indexOf("%")>=0?parseInt(o,10)*t*r+"%":o*t*r+"px",l=l.indexOf("%")>=0?parseInt(l,10)*t+"%":l*t+"px",void 0!==h&&null!==h){var p=h-(h-1)*(1-Math.abs(t));a[0].style.opacity=p}if(void 0===d||null===d)a.transform("translate3d("+o+", "+l+", 0px)");else{var c=d-(d-1)*(1-Math.abs(t));a.transform("translate3d("+o+", "+l+", 0px) scale("+c+")")}},setTranslate:function(){var e=this,t=e.$el,i=e.slides,a=e.progress,r=e.snapGrid;t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t,i){e.parallax.setTransform(i,a)}),i.each(function(t,i){var n=i.progress;e.params.slidesPerGroup>1&&"auto"!==e.params.slidesPerView&&(n+=Math.ceil(t/2)-a*(r.length-1)),n=Math.min(Math.max(n,-1),1),s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t,i){e.parallax.setTransform(i,n)})})},setTransition:function(e){void 0===e&&(e=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t,i){var a=s(i),r=parseInt(a.attr("data-swiper-parallax-duration"),10)||e;0===e&&(r=0),a.transition(r)})}},F={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,i=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,a=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-t,2)+Math.pow(a-i,2))},onGestureStart:function(e){var t=this.params.zoom,i=this.zoom,a=i.gesture;if(i.fakeGestureTouched=!1,i.fakeGestureMoved=!1,!h.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;i.fakeGestureTouched=!0,a.scaleStart=F.getDistanceBetweenTouches(e)}a.$slideEl&&a.$slideEl.length||(a.$slideEl=s(e.target).closest(".swiper-slide"),0===a.$slideEl.length&&(a.$slideEl=this.slides.eq(this.activeIndex)),a.$imageEl=a.$slideEl.find("img, svg, canvas"),a.$imageWrapEl=a.$imageEl.parent("."+t.containerClass),a.maxRatio=a.$imageWrapEl.attr("data-swiper-zoom")||t.maxRatio,0!==a.$imageWrapEl.length)?(a.$imageEl.transition(0),this.zoom.isScaling=!0):a.$imageEl=void 0},onGestureChange:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(!h.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;i.fakeGestureMoved=!0,s.scaleMove=F.getDistanceBetweenTouches(e)}s.$imageEl&&0!==s.$imageEl.length&&(h.gestures?this.zoom.scale=e.scale*i.currentScale:i.scale=s.scaleMove/s.scaleStart*i.currentScale,i.scale>s.maxRatio&&(i.scale=s.maxRatio-1+Math.pow(i.scale-s.maxRatio+1,.5)),i.scale<t.minRatio&&(i.scale=t.minRatio+1-Math.pow(t.minRatio-i.scale+1,.5)),s.$imageEl.transform("translate3d(0,0,0) scale("+i.scale+")"))},onGestureEnd:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(!h.gestures){if(!i.fakeGestureTouched||!i.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!y.android)return;i.fakeGestureTouched=!1,i.fakeGestureMoved=!1}s.$imageEl&&0!==s.$imageEl.length&&(i.scale=Math.max(Math.min(i.scale,s.maxRatio),t.minRatio),s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+i.scale+")"),i.currentScale=i.scale,i.isScaling=!1,1===i.scale&&(s.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,i=t.gesture,s=t.image;i.$imageEl&&0!==i.$imageEl.length&&(s.isTouched||(y.android&&e.preventDefault(),s.isTouched=!0,s.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this.zoom,i=t.gesture,s=t.image,a=t.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(this.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=d.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=d.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),this.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var r=s.width*t.scale,n=s.height*t.scale;if(!(r<i.slideWidth&&n<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-r/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-n/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!t.isScaling){if(this.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!this.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),a.prevPositionX||(a.prevPositionX=s.touchesCurrent.x),a.prevPositionY||(a.prevPositionY=s.touchesCurrent.y),a.prevTime||(a.prevTime=Date.now()),a.x=(s.touchesCurrent.x-a.prevPositionX)/(Date.now()-a.prevTime)/2,a.y=(s.touchesCurrent.y-a.prevPositionY)/(Date.now()-a.prevTime)/2,Math.abs(s.touchesCurrent.x-a.prevPositionX)<2&&(a.x=0),Math.abs(s.touchesCurrent.y-a.prevPositionY)<2&&(a.y=0),a.prevPositionX=s.touchesCurrent.x,a.prevPositionY=s.touchesCurrent.y,a.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,i=e.image,s=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!i.isTouched||!i.isMoved)return i.isTouched=!1,void(i.isMoved=!1);i.isTouched=!1,i.isMoved=!1;var a=300,r=300,n=s.x*a,o=i.currentX+n,l=s.y*r,d=i.currentY+l;0!==s.x&&(a=Math.abs((o-i.currentX)/s.x)),0!==s.y&&(r=Math.abs((d-i.currentY)/s.y));var h=Math.max(a,r);i.currentX=o,i.currentY=d;var p=i.width*e.scale,c=i.height*e.scale;i.minX=Math.min(t.slideWidth/2-p/2,0),i.maxX=-i.minX,i.minY=Math.min(t.slideHeight/2-c/2,0),i.maxY=-i.minY,i.currentX=Math.max(Math.min(i.currentX,i.maxX),i.minX),i.currentY=Math.max(Math.min(i.currentY,i.maxY),i.minY),t.$imageWrapEl.transition(h).transform("translate3d("+i.currentX+"px, "+i.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl.transform("translate3d(0,0,0)"),t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0,e.scale=1,e.currentScale=1)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,i,a,r,n,o,l,d,h,p,c,u,v,f,m,g,b=this.zoom,w=this.params.zoom,y=b.gesture,x=b.image;(y.$slideEl||(y.$slideEl=this.clickedSlide?s(this.clickedSlide):this.slides.eq(this.activeIndex),y.$imageEl=y.$slideEl.find("img, svg, canvas"),y.$imageWrapEl=y.$imageEl.parent("."+w.containerClass)),y.$imageEl&&0!==y.$imageEl.length)&&(y.$slideEl.addClass(""+w.zoomedSlideClass),void 0===x.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,i="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=x.touchesStart.x,i=x.touchesStart.y),b.scale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,b.currentScale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,e?(m=y.$slideEl[0].offsetWidth,g=y.$slideEl[0].offsetHeight,a=y.$slideEl.offset().left+m/2-t,r=y.$slideEl.offset().top+g/2-i,l=y.$imageEl[0].offsetWidth,d=y.$imageEl[0].offsetHeight,h=l*b.scale,p=d*b.scale,v=-(c=Math.min(m/2-h/2,0)),f=-(u=Math.min(g/2-p/2,0)),n=a*b.scale,o=r*b.scale,n<c&&(n=c),n>v&&(n=v),o<u&&(o=u),o>f&&(o=f)):(n=0,o=0),y.$imageWrapEl.transition(300).transform("translate3d("+n+"px, "+o+"px,0)"),y.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+b.scale+")"))},out:function(){var e=this.zoom,t=this.params.zoom,i=e.gesture;i.$slideEl||(i.$slideEl=this.clickedSlide?s(this.clickedSlide):this.slides.eq(this.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas"),i.$imageWrapEl=i.$imageEl.parent("."+t.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(e.scale=1,e.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+t.zoomedSlideClass),i.$slideEl=void 0)},enable:function(){var e=this.zoom;if(!e.enabled){e.enabled=!0;var t=!("touchstart"!==this.touchEvents.start||!h.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1};h.gestures?(this.$wrapperEl.on("gesturestart",".swiper-slide",e.onGestureStart,t),this.$wrapperEl.on("gesturechange",".swiper-slide",e.onGestureChange,t),this.$wrapperEl.on("gestureend",".swiper-slide",e.onGestureEnd,t)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.on(this.touchEvents.start,".swiper-slide",e.onGestureStart,t),this.$wrapperEl.on(this.touchEvents.move,".swiper-slide",e.onGestureChange,t),this.$wrapperEl.on(this.touchEvents.end,".swiper-slide",e.onGestureEnd,t)),this.$wrapperEl.on(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove)}},disable:function(){var e=this.zoom;if(e.enabled){this.zoom.enabled=!1;var t=!("touchstart"!==this.touchEvents.start||!h.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1};h.gestures?(this.$wrapperEl.off("gesturestart",".swiper-slide",e.onGestureStart,t),this.$wrapperEl.off("gesturechange",".swiper-slide",e.onGestureChange,t),this.$wrapperEl.off("gestureend",".swiper-slide",e.onGestureEnd,t)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.off(this.touchEvents.start,".swiper-slide",e.onGestureStart,t),this.$wrapperEl.off(this.touchEvents.move,".swiper-slide",e.onGestureChange,t),this.$wrapperEl.off(this.touchEvents.end,".swiper-slide",e.onGestureEnd,t)),this.$wrapperEl.off(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove)}}},W={loadInSlide:function(e,t){void 0===t&&(t=!0);var i=this,a=i.params.lazy;if(void 0!==e&&0!==i.slides.length){var r=i.virtual&&i.params.virtual.enabled?i.$wrapperEl.children("."+i.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):i.slides.eq(e),n=r.find("."+a.elementClass+":not(."+a.loadedClass+"):not(."+a.loadingClass+")");!r.hasClass(a.elementClass)||r.hasClass(a.loadedClass)||r.hasClass(a.loadingClass)||(n=n.add(r[0])),0!==n.length&&n.each(function(e,n){var o=s(n);o.addClass(a.loadingClass);var l=o.attr("data-background"),d=o.attr("data-src"),h=o.attr("data-srcset"),p=o.attr("data-sizes");i.loadImage(o[0],d||l,h,p,!1,function(){if(void 0!==i&&null!==i&&i&&(!i||i.params)&&!i.destroyed){if(l?(o.css("background-image",'url("'+l+'")'),o.removeAttr("data-background")):(h&&(o.attr("srcset",h),o.removeAttr("data-srcset")),p&&(o.attr("sizes",p),o.removeAttr("data-sizes")),d&&(o.attr("src",d),o.removeAttr("data-src"))),o.addClass(a.loadedClass).removeClass(a.loadingClass),r.find("."+a.preloaderClass).remove(),i.params.loop&&t){var e=r.attr("data-swiper-slide-index");if(r.hasClass(i.params.slideDuplicateClass)){var s=i.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+i.params.slideDuplicateClass+")");i.lazy.loadInSlide(s.index(),!1)}else{var n=i.$wrapperEl.children("."+i.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');i.lazy.loadInSlide(n.index(),!1)}}i.emit("lazyImageReady",r[0],o[0])}}),i.emit("lazyImageLoad",r[0],o[0])})}},load:function(){var e=this,t=e.$wrapperEl,i=e.params,a=e.slides,r=e.activeIndex,n=e.virtual&&i.virtual.enabled,o=i.lazy,l=i.slidesPerView;function d(e){if(n){if(t.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(a[e])return!0;return!1}function h(e){return n?s(e).attr("data-swiper-slide-index"):s(e).index()}if("auto"===l&&(l=0),e.lazy.initialImageLoaded||(e.lazy.initialImageLoaded=!0),e.params.watchSlidesVisibility)t.children("."+i.slideVisibleClass).each(function(t,i){var a=n?s(i).attr("data-swiper-slide-index"):s(i).index();e.lazy.loadInSlide(a)});else if(l>1)for(var p=r;p<r+l;p+=1)d(p)&&e.lazy.loadInSlide(p);else e.lazy.loadInSlide(r);if(o.loadPrevNext)if(l>1||o.loadPrevNextAmount&&o.loadPrevNextAmount>1){for(var c=o.loadPrevNextAmount,u=l,v=Math.min(r+u+Math.max(c,u),a.length),f=Math.max(r-Math.max(u,c),0),m=r+l;m<v;m+=1)d(m)&&e.lazy.loadInSlide(m);for(var g=f;g<r;g+=1)d(g)&&e.lazy.loadInSlide(g)}else{var b=t.children("."+i.slideNextClass);b.length>0&&e.lazy.loadInSlide(h(b));var w=t.children("."+i.slidePrevClass);w.length>0&&e.lazy.loadInSlide(h(w))}}},q={LinearSpline:function(e,t){var i,s,a,r,n,o=function(e,t){for(s=-1,i=e.length;i-s>1;)e[a=i+s>>1]<=t?s=a:i=a;return i};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=o(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){this.controller.spline||(this.controller.spline=this.params.loop?new q.LinearSpline(this.slidesGrid,e.slidesGrid):new q.LinearSpline(this.snapGrid,e.snapGrid))},setTranslate:function(e,t){var i,s,a=this,r=a.controller.control;function n(e){var t=a.rtlTranslate?-a.translate:a.translate;"slide"===a.params.controller.by&&(a.controller.getInterpolateFunction(e),s=-a.controller.spline.interpolate(-t)),s&&"container"!==a.params.controller.by||(i=(e.maxTranslate()-e.minTranslate())/(a.maxTranslate()-a.minTranslate()),s=(t-a.minTranslate())*i+e.minTranslate()),a.params.controller.inverse&&(s=e.maxTranslate()-s),e.updateProgress(s),e.setTranslate(s,a),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof k&&n(r[o]);else r instanceof k&&t!==r&&n(r)},setTransition:function(e,t){var i,s=this,a=s.controller.control;function r(t){t.setTransition(e,s),0!==e&&(t.transitionStart(),t.$wrapperEl.transitionEnd(function(){a&&(t.params.loop&&"slide"===s.params.controller.by&&t.loopFix(),t.transitionEnd())}))}if(Array.isArray(a))for(i=0;i<a.length;i+=1)a[i]!==t&&a[i]instanceof k&&r(a[i]);else a instanceof k&&t!==a&&r(a)}},j={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this.params.a11y;if(13===e.keyCode){var i=s(e.target);this.navigation&&this.navigation.$nextEl&&i.is(this.navigation.$nextEl)&&(this.isEnd&&!this.params.loop||this.slideNext(),this.isEnd?this.a11y.notify(t.lastSlideMessage):this.a11y.notify(t.nextSlideMessage)),this.navigation&&this.navigation.$prevEl&&i.is(this.navigation.$prevEl)&&(this.isBeginning&&!this.params.loop||this.slidePrev(),this.isBeginning?this.a11y.notify(t.firstSlideMessage):this.a11y.notify(t.prevSlideMessage)),this.pagination&&i.is("."+this.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){if(!this.params.loop){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;i&&i.length>0&&(this.isBeginning?this.a11y.disableEl(i):this.a11y.enableEl(i)),t&&t.length>0&&(this.isEnd?this.a11y.disableEl(t):this.a11y.enableEl(t))}},updatePagination:function(){var e=this,t=e.params.a11y;e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.bullets.each(function(i,a){var r=s(a);e.a11y.makeElFocusable(r),e.a11y.addElRole(r,"button"),e.a11y.addElLabel(r,t.paginationBulletMessage.replace(/{{index}}/,r.index()+1))})},init:function(){this.$el.append(this.a11y.liveRegion);var e,t,i=this.params.a11y;this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&(this.a11y.makeElFocusable(e),this.a11y.addElRole(e,"button"),this.a11y.addElLabel(e,i.nextSlideMessage),e.on("keydown",this.a11y.onEnterKey)),t&&(this.a11y.makeElFocusable(t),this.a11y.addElRole(t,"button"),this.a11y.addElLabel(t,i.prevSlideMessage),t.on("keydown",this.a11y.onEnterKey)),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.on("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)},destroy:function(){var e,t;this.a11y.liveRegion&&this.a11y.liveRegion.length>0&&this.a11y.liveRegion.remove(),this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&e.off("keydown",this.a11y.onEnterKey),t&&t.off("keydown",this.a11y.onEnterKey),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.off("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)}},K={init:function(){if(this.params.history){if(!t.history||!t.history.pushState)return this.params.history.enabled=!1,void(this.params.hashNavigation.enabled=!0);var e=this.history;e.initialized=!0,e.paths=K.getPathValues(),(e.paths.key||e.paths.value)&&(e.scrollToSlide(0,e.paths.value,this.params.runCallbacksOnInit),this.params.history.replaceState||t.addEventListener("popstate",this.history.setHistoryPopState))}},destroy:function(){this.params.history.replaceState||t.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=K.getPathValues(),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(){var e=t.location.pathname.slice(1).split("/").filter(function(e){return""!==e}),i=e.length;return{key:e[i-2],value:e[i-1]}},setHistory:function(e,i){if(this.history.initialized&&this.params.history.enabled){var s=this.slides.eq(i),a=K.slugify(s.attr("data-history"));t.location.pathname.includes(e)||(a=e+"/"+a);var r=t.history.state;r&&r.value===a||(this.params.history.replaceState?t.history.replaceState({value:a},null,a):t.history.pushState({value:a},null,a))}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,i){if(t)for(var s=0,a=this.slides.length;s<a;s+=1){var r=this.slides.eq(s);if(K.slugify(r.attr("data-history"))===t&&!r.hasClass(this.params.slideDuplicateClass)){var n=r.index();this.slideTo(n,e,i)}}else this.slideTo(0,e,i)}},U={onHashCange:function(){var t=e.location.hash.replace("#","");t!==this.slides.eq(this.activeIndex).attr("data-hash")&&this.slideTo(this.$wrapperEl.children("."+this.params.slideClass+'[data-hash="'+t+'"]').index())},setHash:function(){if(this.hashNavigation.initialized&&this.params.hashNavigation.enabled)if(this.params.hashNavigation.replaceState&&t.history&&t.history.replaceState)t.history.replaceState(null,null,"#"+this.slides.eq(this.activeIndex).attr("data-hash")||"");else{var i=this.slides.eq(this.activeIndex),s=i.attr("data-hash")||i.attr("data-history");e.location.hash=s||""}},init:function(){if(!(!this.params.hashNavigation.enabled||this.params.history&&this.params.history.enabled)){this.hashNavigation.initialized=!0;var i=e.location.hash.replace("#","");if(i)for(var a=0,r=this.slides.length;a<r;a+=1){var n=this.slides.eq(a);if((n.attr("data-hash")||n.attr("data-history"))===i&&!n.hasClass(this.params.slideDuplicateClass)){var o=n.index();this.slideTo(o,0,this.params.runCallbacksOnInit,!0)}}this.params.hashNavigation.watchState&&s(t).on("hashchange",this.hashNavigation.onHashCange)}},destroy:function(){this.params.hashNavigation.watchState&&s(t).off("hashchange",this.hashNavigation.onHashCange)}},_={run:function(){var e=this,t=e.slides.eq(e.activeIndex),i=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(i=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),e.autoplay.timeout=d.nextTick(function(){e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay"))},i)},start:function(){return void 0===this.autoplay.timeout&&(!this.autoplay.running&&(this.autoplay.running=!0,this.emit("autoplayStart"),this.autoplay.run(),!0))},stop:function(){return!!this.autoplay.running&&(void 0!==this.autoplay.timeout&&(this.autoplay.timeout&&(clearTimeout(this.autoplay.timeout),this.autoplay.timeout=void 0),this.autoplay.running=!1,this.emit("autoplayStop"),!0))},pause:function(e){this.autoplay.running&&(this.autoplay.paused||(this.autoplay.timeout&&clearTimeout(this.autoplay.timeout),this.autoplay.paused=!0,0!==e&&this.params.autoplay.waitForTransition?(this.$wrapperEl[0].addEventListener("transitionend",this.autoplay.onTransitionEnd),this.$wrapperEl[0].addEventListener("webkitTransitionEnd",this.autoplay.onTransitionEnd)):(this.autoplay.paused=!1,this.autoplay.run())))}},Z={setTranslate:function(){for(var e=this.slides,t=0;t<e.length;t+=1){var i=this.slides.eq(t),s=-i[0].swiperSlideOffset;this.params.virtualTranslate||(s-=this.translate);var a=0;this.isHorizontal()||(a=s,s=0);var r=this.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:r}).transform("translate3d("+s+"px, "+a+"px, 0px)")}},setTransition:function(e){var t=this,i=t.slides,s=t.$wrapperEl;if(i.transition(e),t.params.virtualTranslate&&0!==e){var a=!1;i.transitionEnd(function(){if(!a&&t&&!t.destroyed){a=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)s.trigger(e[i])}})}}},Q={setTranslate:function(){var e,t=this.$el,i=this.$wrapperEl,a=this.slides,r=this.width,n=this.height,o=this.rtlTranslate,l=this.size,d=this.params.cubeEffect,h=this.isHorizontal(),p=this.virtual&&this.params.virtual.enabled,c=0;d.shadow&&(h?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=s('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=t.find(".swiper-cube-shadow")).length&&(e=s('<div class="swiper-cube-shadow"></div>'),t.append(e)));for(var u=0;u<a.length;u+=1){var v=a.eq(u),f=u;p&&(f=parseInt(v.attr("data-swiper-slide-index"),10));var m=90*f,g=Math.floor(m/360);o&&(m=-m,g=Math.floor(-m/360));var b=Math.max(Math.min(v[0].progress,1),-1),w=0,y=0,x=0;f%4==0?(w=4*-g*l,x=0):(f-1)%4==0?(w=0,x=4*-g*l):(f-2)%4==0?(w=l+4*g*l,x=l):(f-3)%4==0&&(w=-l,x=3*l+4*l*g),o&&(w=-w),h||(y=w,w=0);var E="rotateX("+(h?0:-m)+"deg) rotateY("+(h?m:0)+"deg) translate3d("+w+"px, "+y+"px, "+x+"px)";if(b<=1&&b>-1&&(c=90*f+90*b,o&&(c=90*-f-90*b)),v.transform(E),d.slideShadows){var T=h?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),C=h?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===T.length&&(T=s('<div class="swiper-slide-shadow-'+(h?"left":"top")+'"></div>'),v.append(T)),0===C.length&&(C=s('<div class="swiper-slide-shadow-'+(h?"right":"bottom")+'"></div>'),v.append(C)),T.length&&(T[0].style.opacity=Math.max(-b,0)),C.length&&(C[0].style.opacity=Math.max(b,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),d.shadow)if(h)e.transform("translate3d(0px, "+(r/2+d.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+d.shadowScale+")");else{var M=Math.abs(c)-90*Math.floor(Math.abs(c)/90),z=1.5-(Math.sin(2*M*Math.PI/360)/2+Math.cos(2*M*Math.PI/360)/2),k=d.shadowScale,P=d.shadowScale/z,$=d.shadowOffset;e.transform("scale3d("+k+", 1, "+P+") translate3d(0px, "+(n/2+$)+"px, "+-n/2/P+"px) rotateX(-90deg)")}var L=S.isSafari||S.isUiWebView?-l/2:0;i.transform("translate3d(0px,0,"+L+"px) rotateX("+(this.isHorizontal()?0:c)+"deg) rotateY("+(this.isHorizontal()?-c:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},J={setTranslate:function(){for(var e=this.slides,t=this.rtlTranslate,i=0;i<e.length;i+=1){var a=e.eq(i),r=a[0].progress;this.params.flipEffect.limitRotation&&(r=Math.max(Math.min(a[0].progress,1),-1));var n=-180*r,o=0,l=-a[0].swiperSlideOffset,d=0;if(this.isHorizontal()?t&&(n=-n):(d=l,l=0,o=-n,n=0),a[0].style.zIndex=-Math.abs(Math.round(r))+e.length,this.params.flipEffect.slideShadows){var h=this.isHorizontal()?a.find(".swiper-slide-shadow-left"):a.find(".swiper-slide-shadow-top"),p=this.isHorizontal()?a.find(".swiper-slide-shadow-right"):a.find(".swiper-slide-shadow-bottom");0===h.length&&(h=s('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"left":"top")+'"></div>'),a.append(h)),0===p.length&&(p=s('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"right":"bottom")+'"></div>'),a.append(p)),h.length&&(h[0].style.opacity=Math.max(-r,0)),p.length&&(p[0].style.opacity=Math.max(r,0))}a.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var t=this,i=t.slides,s=t.activeIndex,a=t.$wrapperEl;if(i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.virtualTranslate&&0!==e){var r=!1;i.eq(s).transitionEnd(function(){if(!r&&t&&!t.destroyed){r=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)a.trigger(e[i])}})}}},ee={setTranslate:function(){for(var e=this.width,t=this.height,i=this.slides,a=this.$wrapperEl,r=this.slidesSizesGrid,n=this.params.coverflowEffect,o=this.isHorizontal(),l=this.translate,d=o?e/2-l:t/2-l,p=o?n.rotate:-n.rotate,c=n.depth,u=0,v=i.length;u<v;u+=1){var f=i.eq(u),m=r[u],g=(d-f[0].swiperSlideOffset-m/2)/m*n.modifier,b=o?p*g:0,w=o?0:p*g,y=-c*Math.abs(g),x=o?0:n.stretch*g,E=o?n.stretch*g:0;Math.abs(E)<.001&&(E=0),Math.abs(x)<.001&&(x=0),Math.abs(y)<.001&&(y=0),Math.abs(b)<.001&&(b=0),Math.abs(w)<.001&&(w=0);var T="translate3d("+E+"px,"+x+"px,"+y+"px)  rotateX("+w+"deg) rotateY("+b+"deg)";if(f.transform(T),f[0].style.zIndex=1-Math.abs(Math.round(g)),n.slideShadows){var S=o?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),C=o?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===S.length&&(S=s('<div class="swiper-slide-shadow-'+(o?"left":"top")+'"></div>'),f.append(S)),0===C.length&&(C=s('<div class="swiper-slide-shadow-'+(o?"right":"bottom")+'"></div>'),f.append(C)),S.length&&(S[0].style.opacity=g>0?g:0),C.length&&(C[0].style.opacity=-g>0?-g:0)}}(h.pointerEvents||h.prefixedPointerEvents)&&(a[0].style.perspectiveOrigin=d+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},te=[P,$,L,I,O,G,N,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){d.extend(this,{mousewheel:{enabled:!1,enable:B.enable.bind(this),disable:B.disable.bind(this),handle:B.handle.bind(this),handleMouseEnter:B.handleMouseEnter.bind(this),handleMouseLeave:B.handleMouseLeave.bind(this),lastScrollTime:d.now()}})},on:{init:function(){this.params.mousewheel.enabled&&this.mousewheel.enable()},destroy:function(){this.mousewheel.enabled&&this.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){d.extend(this,{navigation:{init:X.init.bind(this),update:X.update.bind(this),destroy:X.destroy.bind(this)}})},on:{init:function(){this.navigation.init(),this.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(e){var t=this.navigation,i=t.$nextEl,a=t.$prevEl;!this.params.navigation.hideOnClick||s(e.target).is(a)||s(e.target).is(i)||(i&&i.toggleClass(this.params.navigation.hiddenClass),a&&a.toggleClass(this.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){d.extend(this,{pagination:{init:Y.init.bind(this),render:Y.render.bind(this),update:Y.update.bind(this),destroy:Y.destroy.bind(this),dynamicBulletIndex:0}})},on:{init:function(){this.pagination.init(),this.pagination.render(),this.pagination.update()},activeIndexChange:function(){this.params.loop?this.pagination.update():void 0===this.snapIndex&&this.pagination.update()},snapIndexChange:function(){this.params.loop||this.pagination.update()},slidesLengthChange:function(){this.params.loop&&(this.pagination.render(),this.pagination.update())},snapGridLengthChange:function(){this.params.loop||(this.pagination.render(),this.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(e){this.params.pagination.el&&this.params.pagination.hideOnClick&&this.pagination.$el.length>0&&!s(e.target).hasClass(this.params.pagination.bulletClass)&&this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){d.extend(this,{scrollbar:{init:V.init.bind(this),destroy:V.destroy.bind(this),updateSize:V.updateSize.bind(this),setTranslate:V.setTranslate.bind(this),setTransition:V.setTransition.bind(this),enableDraggable:V.enableDraggable.bind(this),disableDraggable:V.disableDraggable.bind(this),setDragPosition:V.setDragPosition.bind(this),onDragStart:V.onDragStart.bind(this),onDragMove:V.onDragMove.bind(this),onDragEnd:V.onDragEnd.bind(this),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){this.scrollbar.init(),this.scrollbar.updateSize(),this.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){d.extend(this,{parallax:{setTransform:R.setTransform.bind(this),setTranslate:R.setTranslate.bind(this),setTransition:R.setTransition.bind(this)}})},on:{beforeInit:function(){this.params.parallax.enabled&&(this.params.watchSlidesProgress=!0)},init:function(){this.params.parallax&&this.parallax.setTranslate()},setTranslate:function(){this.params.parallax&&this.parallax.setTranslate()},setTransition:function(e){this.params.parallax&&this.parallax.setTransition(e)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var e=this,t={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i){t[i]=F[i].bind(e)}),d.extend(e,{zoom:t})},on:{init:function(){this.params.zoom.enabled&&this.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){this.zoom.enabled&&this.zoom.onTouchStart(e)},touchEnd:function(e){this.zoom.enabled&&this.zoom.onTouchEnd(e)},doubleTap:function(e){this.params.zoom.enabled&&this.zoom.enabled&&this.params.zoom.toggle&&this.zoom.toggle(e)},transitionEnd:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){d.extend(this,{lazy:{initialImageLoaded:!1,load:W.load.bind(this),loadInSlide:W.loadInSlide.bind(this)}})},on:{beforeInit:function(){this.params.lazy.enabled&&this.params.preloadImages&&(this.params.preloadImages=!1)},init:function(){this.params.lazy.enabled&&!this.params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},resize:function(){this.params.lazy.enabled&&this.lazy.load()},scrollbarDragMove:function(){this.params.lazy.enabled&&this.lazy.load()},transitionStart:function(){this.params.lazy.enabled&&(this.params.lazy.loadOnTransitionStart||!this.params.lazy.loadOnTransitionStart&&!this.lazy.initialImageLoaded)&&this.lazy.load()},transitionEnd:function(){this.params.lazy.enabled&&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){d.extend(this,{controller:{control:this.params.controller.control,getInterpolateFunction:q.getInterpolateFunction.bind(this),setTranslate:q.setTranslate.bind(this),setTransition:q.setTransition.bind(this)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},resize:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},setTranslate:function(e,t){this.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var e=this;d.extend(e,{a11y:{liveRegion:s('<span class="'+e.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(j).forEach(function(t){e.a11y[t]=j[t].bind(e)})},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},destroy:function(){this.params.a11y.enabled&&this.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){d.extend(this,{history:{init:K.init.bind(this),setHistory:K.setHistory.bind(this),setHistoryPopState:K.setHistoryPopState.bind(this),scrollToSlide:K.scrollToSlide.bind(this),destroy:K.destroy.bind(this)}})},on:{init:function(){this.params.history.enabled&&this.history.init()},destroy:function(){this.params.history.enabled&&this.history.destroy()},transitionEnd:function(){this.history.initialized&&this.history.setHistory(this.params.history.key,this.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){d.extend(this,{hashNavigation:{initialized:!1,init:U.init.bind(this),destroy:U.destroy.bind(this),setHash:U.setHash.bind(this),onHashCange:U.onHashCange.bind(this)}})},on:{init:function(){this.params.hashNavigation.enabled&&this.hashNavigation.init()},destroy:function(){this.params.hashNavigation.enabled&&this.hashNavigation.destroy()},transitionEnd:function(){this.hashNavigation.initialized&&this.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){var e=this;d.extend(e,{autoplay:{running:!1,paused:!1,run:_.run.bind(e),start:_.start.bind(e),stop:_.stop.bind(e),pause:_.pause.bind(e),onTransitionEnd:function(t){e&&!e.destroyed&&e.$wrapperEl&&t.target===this&&(e.$wrapperEl[0].removeEventListener("transitionend",e.autoplay.onTransitionEnd),e.$wrapperEl[0].removeEventListener("webkitTransitionEnd",e.autoplay.onTransitionEnd),e.autoplay.paused=!1,e.autoplay.running?e.autoplay.run():e.autoplay.stop())}}})},on:{init:function(){this.params.autoplay.enabled&&this.autoplay.start()},beforeTransitionStart:function(e,t){this.autoplay.running&&(t||!this.params.autoplay.disableOnInteraction?this.autoplay.pause(e):this.autoplay.stop())},sliderFirstMove:function(){this.autoplay.running&&(this.params.autoplay.disableOnInteraction?this.autoplay.stop():this.autoplay.pause())},destroy:function(){this.autoplay.running&&this.autoplay.stop()}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){d.extend(this,{fadeEffect:{setTranslate:Z.setTranslate.bind(this),setTransition:Z.setTransition.bind(this)}})},on:{beforeInit:function(){if("fade"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"fade");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};d.extend(this.params,e),d.extend(this.originalParams,e)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){d.extend(this,{cubeEffect:{setTranslate:Q.setTranslate.bind(this),setTransition:Q.setTransition.bind(this)}})},on:{beforeInit:function(){if("cube"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"cube"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};d.extend(this.params,e),d.extend(this.originalParams,e)}},setTranslate:function(){"cube"===this.params.effect&&this.cubeEffect.setTranslate()},setTransition:function(e){"cube"===this.params.effect&&this.cubeEffect.setTransition(e)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){d.extend(this,{flipEffect:{setTranslate:J.setTranslate.bind(this),setTransition:J.setTransition.bind(this)}})},on:{beforeInit:function(){if("flip"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"flip"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};d.extend(this.params,e),d.extend(this.originalParams,e)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffect.setTransition(e)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){d.extend(this,{coverflowEffect:{setTranslate:ee.setTranslate.bind(this),setTransition:ee.setTransition.bind(this)}})},on:{beforeInit:function(){"coverflow"===this.params.effect&&(this.classNames.push(this.params.containerModifierClass+"coverflow"),this.classNames.push(this.params.containerModifierClass+"3d"),this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},setTranslate:function(){"coverflow"===this.params.effect&&this.coverflowEffect.setTranslate()},setTransition:function(e){"coverflow"===this.params.effect&&this.coverflowEffect.setTransition(e)}}}];return void 0===k.use&&(k.use=k.Class.use,k.installModule=k.Class.installModule),k.use(te),k});
//# sourceMappingURL=swiper.min.js.map

/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

/**
 * Bridget makes jQuery widgets
 * v2.0.1
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'jquery-bridget/jquery-bridget',[ 'jquery' ], function( jQuery ) {
      return factory( window, jQuery );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('jquery')
    );
  } else {
    // browser global
    window.jQueryBridget = factory(
      window,
      window.jQuery
    );
  }

}( window, function factory( window, jQuery ) {
'use strict';

// ----- utils ----- //

var arraySlice = Array.prototype.slice;

// helper function for logging errors
// $.error breaks jQuery chaining
var console = window.console;
var logError = typeof console == 'undefined' ? function() {} :
  function( message ) {
    console.error( message );
  };

// ----- jQueryBridget ----- //

function jQueryBridget( namespace, PluginClass, $ ) {
  $ = $ || jQuery || window.jQuery;
  if ( !$ ) {
    return;
  }

  // add option method -> $().plugin('option', {...})
  if ( !PluginClass.prototype.option ) {
    // option setter
    PluginClass.prototype.option = function( opts ) {
      // bail out if not an object
      if ( !$.isPlainObject( opts ) ){
        return;
      }
      this.options = $.extend( true, this.options, opts );
    };
  }

  // make jQuery plugin
  $.fn[ namespace ] = function( arg0 /*, arg1 */ ) {
    if ( typeof arg0 == 'string' ) {
      // method call $().plugin( 'methodName', { options } )
      // shift arguments by 1
      var args = arraySlice.call( arguments, 1 );
      return methodCall( this, arg0, args );
    }
    // just $().plugin({ options })
    plainCall( this, arg0 );
    return this;
  };

  // $().plugin('methodName')
  function methodCall( $elems, methodName, args ) {
    var returnValue;
    var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';

    $elems.each( function( i, elem ) {
      // get instance
      var instance = $.data( elem, namespace );
      if ( !instance ) {
        logError( namespace + ' not initialized. Cannot call methods, i.e. ' +
          pluginMethodStr );
        return;
      }

      var method = instance[ methodName ];
      if ( !method || methodName.charAt(0) == '_' ) {
        logError( pluginMethodStr + ' is not a valid method' );
        return;
      }

      // apply method, get return value
      var value = method.apply( instance, args );
      // set return value if value is returned, use only first value
      returnValue = returnValue === undefined ? value : returnValue;
    });

    return returnValue !== undefined ? returnValue : $elems;
  }

  function plainCall( $elems, options ) {
    $elems.each( function( i, elem ) {
      var instance = $.data( elem, namespace );
      if ( instance ) {
        // set options & init
        instance.option( options );
        instance._init();
      } else {
        // initialize new instance
        instance = new PluginClass( elem, options );
        $.data( elem, namespace, instance );
      }
    });
  }

  updateJQuery( $ );

}

// ----- updateJQuery ----- //

// set $.bridget for v1 backwards compatibility
function updateJQuery( $ ) {
  if ( !$ || ( $ && $.bridget ) ) {
    return;
  }
  $.bridget = jQueryBridget;
}

updateJQuery( jQuery || window.jQuery );

// -----  ----- //

return jQueryBridget;

}));

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {



function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));

/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'get-size/get-size',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.getSize = factory();
  }

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});

/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'desandro-matches-selector/matches-selector',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.matchesSelector = factory();
  }

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));

/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'fizzy-ui-utils/utils',[
      'desandro-matches-selector/matches-selector'
    ], function( matchesSelector ) {
      return factory( window, matchesSelector );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-matches-selector')
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.matchesSelector
    );
  }

}( window, function factory( window, matchesSelector ) {



var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));

/**
 * Outlayer Item
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'outlayer/item',[
        'ev-emitter/ev-emitter',
        'get-size/get-size'
      ],
      factory
    );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      require('ev-emitter'),
      require('get-size')
    );
  } else {
    // browser global
    window.Outlayer = {};
    window.Outlayer.Item = factory(
      window.EvEmitter,
      window.getSize
    );
  }

}( window, function factory( EvEmitter, getSize ) {
'use strict';

// ----- helpers ----- //

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //


var docElemStyle = document.documentElement.style;

var transitionProperty = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';
var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProperty ];

// cache all vendor properties that could have vendor prefix
var vendorProperties = {
  transform: transformProperty,
  transition: transitionProperty,
  transitionDuration: transitionProperty + 'Duration',
  transitionProperty: transitionProperty + 'Property',
  transitionDelay: transitionProperty + 'Delay'
};

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EvEmitter
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;

proto._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  var x = parseFloat( xValue );
  var y = parseFloat( yValue );
  // convert percent to pixels
  var layoutSize = this.layout.size;
  if ( xValue.indexOf('%') != -1 ) {
    x = ( x / 100 ) * layoutSize.width;
  }
  if ( yValue.indexOf('%') != -1 ) {
    y = ( y / 100 ) * layoutSize.height;
  }
  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');

  // x
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};

proto._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var didNotMove = x == this.position.x && y == this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

proto.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};

// non transition + transform support
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

proto.moveTo = proto._transitionTo;

proto.setPosition = function( x, y ) {
  this.position.x = parseFloat( x );
  this.position.y = parseFloat( y );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto.transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' + toDashedAll( transformProperty );

proto.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // munge number to millisecond, to match stagger
  var duration = this.layout.options.transitionDuration;
  duration = typeof duration == 'number' ? duration + 'ms' : duration;
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: duration,
    transitionDelay: this.staggerDelay || 0
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

// ----- events ----- //

proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};

proto.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: '',
  transitionDelay: ''
};

proto.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- stagger ----- //

proto.stagger = function( delay ) {
  delay = isNaN( delay ) ? 0 : delay;
  this.staggerDelay = delay + 'ms';
};

// ----- show/hide/remove ----- //

// remove element from DOM
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

proto.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};

proto.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

proto.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));

/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'outlayer/outlayer',[
        'ev-emitter/ev-emitter',
        'get-size/get-size',
        'fizzy-ui-utils/utils',
        './item'
      ],
      function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }
    );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      window,
      require('ev-emitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./item')
    );
  } else {
    // browser global
    window.Outlayer = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      window.Outlayer.Item
    );
  }

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

var proto = Outlayer.prototype;
// inherit EvEmitter
utils.extend( proto, EvEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};

Outlayer.compatOptions = {
  // currentName: oldName
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};

proto._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
proto.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
proto._init = proto.layout;

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};


proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  items.forEach( function( item ) {
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  this.updateStagger();
  queue.forEach( function( obj, i ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
  }, this );
};

// set stagger from option in milliseconds number
proto.updateStagger = function() {
  var stagger = this.options.stagger;
  if ( stagger === null || stagger === undefined ) {
    this.stagger = 0;
    return;
  }
  this.stagger = getMilliseconds( stagger );
  return this.stagger;
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant, i ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.stagger( i * this.stagger );
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};

proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }

  // bind callback
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  elems.forEach( this.ignore, this );
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  elems.forEach( function( elem ) {
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  this.stamps.forEach( this._manageStamp, this );
};

// update boundingLeft / Top
proto._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent = utils.handleEvent;

/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};

proto.onresize = function() {
  this.resize();
};

utils.debounceMethod( Outlayer, 'onresize', 100 );

proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.reveal();
  });
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.hide();
  });
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  removeItems.forEach( function( item ) {
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }, this );
};

// ----- destroy ----- //

// remove and disable Outlayer instance
proto.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  this.items.forEach( function( item ) {
    item.destroy();
  });

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  var Layout = subclass( Outlayer );
  // apply new options and compatOptions
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = subclass( Item );

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }

  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;

  return SubClass;
}

// ----- helpers ----- //

// how many milliseconds are in each unit
var msUnits = {
  ms: 1,
  s: 1000
};

// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds( time ) {
  if ( typeof time == 'number' ) {
    return time;
  }
  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
  var num = matches && matches[1];
  var unit = matches && matches[2];
  if ( !num.length ) {
    return 0;
  }
  num = parseFloat( num );
  var mult = msUnits[ unit ] || 1;
  return num * mult;
}

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));

/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
        'outlayer/outlayer',
        'get-size/get-size'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('outlayer'),
      require('get-size')
    );
  } else {
    // browser global
    window.Masonry = factory(
      window.Outlayer,
      window.getSize
    );
  }

}( window, function factory( Outlayer, getSize ) {



// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  var proto = Masonry.prototype;

  proto._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
    this.horizontalColIndex = 0;
  };

  proto.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  proto.getContainerWidth = function() {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  proto._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );
    // use horizontal or top column position
    var colPosMethod = this.options.horizontalOrder ?
      '_getHorizontalColPosition' : '_getTopColPosition';
    var colPosition = this[ colPosMethod ]( colSpan, item );
    // position the brick
    var position = {
      x: this.columnWidth * colPosition.col,
      y: colPosition.y
    };
    // apply setHeight to necessary columns
    var setHeight = colPosition.y + item.size.outerHeight;
    var setMax = colSpan + colPosition.col;
    for ( var i = colPosition.col; i < setMax; i++ ) {
      this.colYs[i] = setHeight;
    }

    return position;
  };

  proto._getTopColPosition = function( colSpan ) {
    var colGroup = this._getTopColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );

    return {
      col: colGroup.indexOf( minimumY ),
      y: minimumY,
    };
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  proto._getTopColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      colGroup[i] = this._getColGroupY( i, colSpan );
    }
    return colGroup;
  };

  proto._getColGroupY = function( col, colSpan ) {
    if ( colSpan < 2 ) {
      return this.colYs[ col ];
    }
    // make an array of colY values for that one group
    var groupColYs = this.colYs.slice( col, col + colSpan );
    // and get the max value of the array
    return Math.max.apply( Math, groupColYs );
  };

  // get column position based on horizontal index. #873
  proto._getHorizontalColPosition = function( colSpan, item ) {
    var col = this.horizontalColIndex % this.cols;
    var isOver = colSpan > 1 && col + colSpan > this.cols;
    // shift to next row if item can't fit on current row
    col = isOver ? 0 : col;
    // don't let zero-size items take up space
    var hasSize = item.size.outerWidth && item.size.outerHeight;
    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

    return {
      col: col,
      y: this._getColGroupY( col, colSpan ),
    };
  };

  proto._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  proto._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  proto._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  proto.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));


/**
 * Owl Carousel v2.3.3
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&(console.log("update called"),this.update())},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.$stage.children().toArray().slice(b,c),e=[],f=0;a.each(d,function(b,c){e.push(a(c).height())}),f=Math.max.apply(null,e),this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};if(b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),"youtube"===f.type?c='<iframe width="'+g+'" height="'+h+'" src="//www.youtube.com/embed/'+f.id+"?autoplay=1&rel=0&v="+f.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===f.type?c='<iframe src="//player.vimeo.com/video/'+f.id+'?autoplay=1" width="'+g+'" height="'+h+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===f.type&&(c='<iframe frameborder="0"height="'+h+'"width="'+g+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+f.id+'/player?autoplay=true"></iframe>'),a('<div class="owl-video-frame">'+c+"</div>").insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){
if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.4.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,g,h,e=this;if(e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rtl:!1,slide:"",slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,g=e.options.responsive||null,g&&g.length>-1){e.respondTo=e.options.respondTo||"window";for(h in g)g.hasOwnProperty(h)&&(e.breakpoints.push(g[h].breakpoint),e.breakpointSettings[g[h].breakpoint]=g[h].settings);e.breakpoints.sort(function(a,b){return e.options.mobileFirst===!0?a-b:b-a})}"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.msHidden?(e.hidden="msHidden",e.visibilityChange="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.init(),e.checkResponsive(!0)}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),d[e.animType]=e.options.vertical===!1?"translate3d("+b+"px, 0px, 0px)":"translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=null!==c.options.asNavFor?a(c.options.asNavFor).slick("getSlick"):null;null!==d&&d.slideHandler(b,!0)},b.prototype.applyTransition=function(a){var b=this,c={};c[b.transitionType]=b.options.fade===!1?b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:"opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(0===a.currentSlide-1&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow=a(b.options.prevArrow),b.$nextArrow=a(b.options.nextArrow),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.appendTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled"))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),b.$slidesCache=b.$slides,b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.options.accessibility===!0&&b.$list.prop("tabIndex",0),b.setSlideClasses("number"==typeof this.currentSlide?this.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.checkResponsive=function(b){var d,e,f,c=this,g=c.$slider.width(),h=window.innerWidth||a(window).width();if("window"===c.respondTo?f=h:"slider"===c.respondTo?f=g:"min"===c.respondTo&&(f=Math.min(h,g)),c.originalSettings.responsive&&c.originalSettings.responsive.length>-1&&null!==c.originalSettings.responsive){e=null;for(d in c.breakpoints)c.breakpoints.hasOwnProperty(d)&&(c.originalSettings.mobileFirst===!1?f<c.breakpoints[d]&&(e=c.breakpoints[d]):f>c.breakpoints[d]&&(e=c.breakpoints[d]));null!==e?null!==c.activeBreakpoint?e!==c.activeBreakpoint&&(c.activeBreakpoint=e,"unslick"===c.breakpointSettings[e]?c.unslick():(c.options=a.extend({},c.originalSettings,c.breakpointSettings[e]),b===!0&&(c.currentSlide=c.options.initialSlide),c.refresh())):(c.activeBreakpoint=e,"unslick"===c.breakpointSettings[e]?c.unslick():(c.options=a.extend({},c.originalSettings,c.breakpointSettings[e]),b===!0&&(c.currentSlide=c.options.initialSlide),c.refresh())):null!==c.activeBreakpoint&&(c.activeBreakpoint=null,c.options=c.originalSettings,b===!0&&(c.currentSlide=c.options.initialSlide),c.refresh())}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),h=0!==d.slideCount%d.options.slidesToScroll,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||a(b.target).parent().index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c);break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(){var b=this;b.autoPlayClear(),b.touchObject={},a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&"object"!=typeof b.options.prevArrow&&b.$prevArrow.remove(),b.$nextArrow&&"object"!=typeof b.options.nextArrow&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("data-slick-index").css({position:"",left:"",top:"",zIndex:"",opacity:"",width:""}),b.$slider.removeClass("slick-slider"),b.$slider.removeClass("slick-initialized"),b.$list.off(".slick"),a(window).off(".slick-"+b.instanceUid),a(document).off(".slick-"+b.instanceUid),b.$slider.html(b.$slides)},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:1e3}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:1e3}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)d=Math.ceil(a.slideCount/a.options.slidesToScroll);else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideWidth*b.options.slidesToShow,e=-1*d*b.options.slidesToShow),0!==b.slideCount%b.options.slidesToScroll&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=-1*(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth,e=-1*(b.options.slidesToShow-(a-b.slideCount))*d):(b.slideOffset=-1*b.slideCount%b.options.slidesToScroll*b.slideWidth,e=-1*b.slideCount%b.options.slidesToScroll*d))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?-1*a*b.slideWidth+b.slideOffset:-1*a*d+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?(e=a.slideCount-a.options.slidesToShow+1,a.options.centerMode===!0&&(e=a.slideCount)):(b=-1*a.slideCount,c=-1*a.slideCount,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(){var b=this;a(b.$slider).hasClass("slick-initialized")||(a(b.$slider).addClass("slick-initialized"),b.buildOut(),b.setProps(),b.startLoad(),b.loadSlider(),b.initializeEvents(),b.updateArrows(),b.updateDots()),b.$slider.trigger("init",[b])},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",function(){b.paused=!0,b.autoPlayClear()}).on("mouseleave.slick",function(){b.paused=!1,b.autoPlay()})},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),b.options.autoplay===!0&&(a(document).on(b.visibilityChange,function(){b.visibility()}),b.options.pauseOnHover===!0&&(b.$list.on("mouseenter.slick",function(){b.paused=!0,b.autoPlayClear()}),b.$list.on("mouseleave.slick",function(){b.paused=!1,b.autoPlay()}))),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,function(){b.checkResponsive(),b.setPosition()}),a(window).on("resize.slick.slick-"+b.instanceUid,function(){a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.setPosition()},50))}),a("*[draggable!=true]",b.$slideTrack).on("dragstart",function(a){a.preventDefault()}),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}})},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy");b.load(function(){b.animate({opacity:1},200)}).css({opacity:0}).attr("src",c).removeAttr("data-lazy").removeClass("slick-loading")})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(){var b=this,c=b.currentSlide;b.destroy(),a.extend(b,b.initials),b.init(),b.changeSlide({data:{message:"index",index:c}},!0)},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b])},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,d.reinit(),void 0)},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;if(a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1)a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length));else if(a.options.variableWidth===!0){var b=0;a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.children(".slick-slide").each(function(){b+=a.listWidth}),a.$slideTrack.width(Math.ceil(b)+1)}else a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length));var c=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-c)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=-1*b.slideWidth*d,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:800,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:800,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:900,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(a,b,c){var d=this;d.options[a]=b,c===!0&&(d.unload(),d.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;b.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"),d=b.$slider.find(".slick-slide"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active"):d.length<=b.options.slidesToShow?d.addClass("slick-active"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.selectHandler=function(b){var c=this,d=parseInt(a(b.target).parents(".slick-slide").attr("data-slick-index"));return d||(d=0),c.slideCount<=c.options.slidesToShow?(c.$slider.find(".slick-slide").removeClass("slick-active"),c.$slides.eq(d).addClass("slick-active"),c.options.centerMode===!0&&(c.$slider.find(".slick-slide").removeClass("slick-center"),c.$slides.eq(d).addClass("slick-center")),c.asNavFor(d),void 0):(c.slideHandler(d),void 0)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?0!==i.slideCount%i.options.slidesToScroll?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?0!==i.slideCount%i.options.slidesToScroll?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?i.fadeSlide(e,function(){i.postSlide(e)}):i.postSlide(e),i.animateHeight(),void 0):(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e),void 0)))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":"vertical"},b.prototype.swipeEnd=function(){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.swipeLeft=b.options.vertical===!1?d+f*g:d+f*(b.$list.height()/b.listWidth)*g,b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):(b.setCSS(b.swipeLeft),void 0)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,b.dragging=!0,void 0)},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&"object"!=typeof b.options.prevArrow&&b.$prevArrow.remove(),b.$nextArrow&&"object"!=typeof b.options.nextArrow&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible").css("width","")},b.prototype.unslick=function(){var a=this;a.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.options.infinite!==!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.removeClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")))
},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):(a.paused=!1,a.autoPlay())},a.fn.slick=function(){var g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length,f=0;for(f;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a},a(function(){a("[data-slick]").slick()})});
var gj = {};
gj.widget = function () {
        var a = this;
        a.xhr = null, a.generateGUID = function () {
            function a() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
        }, a.mouseX = function (a) {
            if (a) {
                if (a.pageX) return a.pageX;
                if (a.clientX) return a.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
                if (a.touches && a.touches.length) return a.touches[0].pageX;
                if (a.changedTouches && a.changedTouches.length) return a.changedTouches[0].pageX;
                if (a.originalEvent && a.originalEvent.touches && a.originalEvent.touches.length) return a.originalEvent.touches[0].pageX;
                if (a.originalEvent && a.originalEvent.changedTouches && a.originalEvent.changedTouches.length) return a.originalEvent.touches[0].pageX
            }
            return null
        }, a.mouseY = function (a) {
            if (a) {
                if (a.pageY) return a.pageY;
                if (a.clientY) return a.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
                if (a.touches && a.touches.length) return a.touches[0].pageY;
                if (a.changedTouches && a.changedTouches.length) return a.changedTouches[0].pageY;
                if (a.originalEvent && a.originalEvent.touches && a.originalEvent.touches.length) return a.originalEvent.touches[0].pageY;
                if (a.originalEvent && a.originalEvent.changedTouches && a.originalEvent.changedTouches.length) return a.originalEvent.touches[0].pageY
            }
            return null
        }
    }, gj.widget.prototype.init = function (a, b) {
        var c, d, e;
        this.attr("data-type", b), d = $.extend(!0, {}, this.getHTMLConfig() || {}), $.extend(!0, d, a || {}), e = this.getConfig(d, b), this.attr("data-guid", e.guid), this.data(e);
        for (c in e) gj[b].events.hasOwnProperty(c) && (this.on(c, e[c]), delete e[c]);
        for (plugin in gj[b].plugins) gj[b].plugins.hasOwnProperty(plugin) && gj[b].plugins[plugin].configure(this, e, d);
        return this
    }, gj.widget.prototype.getConfig = function (a, b) {
        var c, d, e, f;
        c = $.extend(!0, {}, gj[b].config.base), d = a.hasOwnProperty("uiLibrary") ? a.uiLibrary : c.uiLibrary, gj[b].config[d] && $.extend(!0, c, gj[b].config[d]), e = a.hasOwnProperty("iconsLibrary") ? a.iconsLibrary : c.iconsLibrary, gj[b].config[e] && $.extend(!0, c, gj[b].config[e]);
        for (f in gj[b].plugins) gj[b].plugins.hasOwnProperty(f) && ($.extend(!0, c, gj[b].plugins[f].config.base), gj[b].plugins[f].config[d] && $.extend(!0, c, gj[b].plugins[f].config[d]), gj[b].plugins[f].config[e] && $.extend(!0, c, gj[b].plugins[f].config[e]));
        return $.extend(!0, c, a), c.guid || (c.guid = this.generateGUID()), c
    }, gj.widget.prototype.getHTMLConfig = function () {
        var a = this.data(),
            b = this[0].attributes;
        return b.width && (a.width = b.width.value), b.height && (a.height = b.height.value), b.value && (a.value = b.value.value), b.align && (a.align = b.align.value), a && a.source && (a.dataSource = a.source, delete a.source), a
    }, gj.widget.prototype.createDoneHandler = function () {
        var a = this;
        return function (b) {
            "string" == typeof b && JSON && (b = JSON.parse(b)), gj[a.data("type")].methods.render(a, b)
        }
    }, gj.widget.prototype.createErrorHandler = function () {
        return function (a) {
            a && a.statusText && "abort" !== a.statusText && alert(a.statusText)
        }
    }, gj.widget.prototype.reload = function (a) {
        var b, c, d = this.data(),
            e = this.data("type");
        return void 0 === d.dataSource && gj[e].methods.useHtmlDataSource(this, d), $.extend(d.params, a), $.isArray(d.dataSource) ? (c = gj[e].methods.filter(this), gj[e].methods.render(this, c)) : "string" == typeof d.dataSource ? (b = {
            url: d.dataSource,
            data: d.params
        }, this.xhr && this.xhr.abort(), this.xhr = $.ajax(b).done(this.createDoneHandler()).fail(this.createErrorHandler())) : "object" == typeof d.dataSource && (d.dataSource.data || (d.dataSource.data = {}), $.extend(d.dataSource.data, d.params), b = $.extend(!0, {}, d.dataSource), "json" === b.dataType && "object" == typeof b.data && (b.data = JSON.stringify(b.data)), b.success || (b.success = this.createDoneHandler()), b.error || (b.error = this.createErrorHandler()), this.xhr && this.xhr.abort(), this.xhr = $.ajax(b)), this
    }, gj.documentManager = {
        events: {},
        subscribeForEvent: function (a, b, c) {
            if (gj.documentManager.events[a] && 0 !== gj.documentManager.events[a].length) {
                if (gj.documentManager.events[a][b]) throw "Event " + a + ' for widget with guid="' + b + '" is already attached.';
                gj.documentManager.events[a].push({
                    widgetId: b,
                    callback: c
                })
            } else gj.documentManager.events[a] = [{
                widgetId: b,
                callback: c
            }], $(document).on(a, gj.documentManager.executeCallbacks)
        },
        executeCallbacks: function (a) {
            var b = gj.documentManager.events[a.type];
            if (b)
                for (var c = 0; c < b.length; c++) b[c].callback(a)
        },
        unsubscribeForEvent: function (a, b) {
            var c = !1,
                d = gj.documentManager.events[a];
            if (d)
                for (var e = 0; e < d.length; e++) d[e].widgetId === b && (d.splice(e, 1), c = !0, 0 === d.length && ($(document).off(a), delete gj.documentManager.events[a]));
            if (!c) throw 'The "' + a + '" for widget with guid="' + b + "\" can't be removed."
        }
    }, gj.core = {
        messages: {
            "en-us": {
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthShortNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                weekDaysMin: ["S", "M", "T", "W", "T", "F", "S"],
                weekDaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                weekDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                am: "AM",
                pm: "PM",
                ok: "Ok",
                cancel: "Cancel",
                titleFormat: "mmmm yyyy"
            }
        },
        parseDate: function (a, b, c) {
            var d, e, f, g, h = 0,
                i = 0,
                j = 1,
                k = 0,
                l = 0;
            if (a && "string" == typeof a) {
                if (/^\d+$/.test(a)) g = new Date(a);
                else if (a.indexOf("/Date(") > -1) g = new Date(parseInt(a.substr(6), 10));
                else if (a) {
                    for (f = b.split(/[\s,-\.\/\/\:]+/), e = a.split(/[\s]+/), e.length != f.length && (e = a.split(/[\s,-\.\/\/\:]+/)), d = 0; d < f.length; d++)["d", "dd"].indexOf(f[d]) > -1 ? j = parseInt(e[d], 10) : ["m", "mm"].indexOf(f[d]) > -1 ? i = parseInt(e[d], 10) - 1 : "mmm" === f[d] ? i = gj.core.messages[c || "en-us"].monthShortNames.indexOf(e[d]) : "mmmm" === f[d] ? i = gj.core.messages[c || "en-us"].monthNames.indexOf(e[d]) : ["yy", "yyyy"].indexOf(f[d]) > -1 ? (h = parseInt(e[d], 10), "yy" === f[d] && (h += 2e3)) : ["h", "hh", "H", "HH"].indexOf(f[d]) > -1 ? k = parseInt(e[d], 10) : ["M", "MM"].indexOf(f[d]) > -1 && (l = parseInt(e[d], 10));
                    g = new Date(h, i, j, k, l)
                }
            } else "number" == typeof a ? g = new Date(a) : a instanceof Date && (g = a);
            return g
        },
        formatDate: function (a, b, c) {
            var d, e, f = "",
                g = b.split(/[\s,-\.\/\/\:]+/),
                h = b.split(/s+|M+|H+|h+|t+|T+|d+|m+|y+/);
            for (h = h.splice(1, h.length - 2), i = 0; i < g.length; i++) switch (d = h[i] || "", g[i]) {
                case "s":
                    f += a.getSeconds() + d;
                    break;
                case "ss":
                    f += gj.core.pad(a.getSeconds()) + d;
                    break;
                case "M":
                    f += a.getMinutes() + d;
                    break;
                case "MM":
                    f += gj.core.pad(a.getMinutes()) + d;
                    break;
                case "H":
                    f += a.getHours() + d;
                    break;
                case "HH":
                    f += gj.core.pad(a.getHours()) + d;
                    break;
                case "h":
                    e = a.getHours() > 12 ? a.getHours() % 12 : a.getHours(), f += e + d;
                    break;
                case "hh":
                    e = a.getHours() > 12 ? a.getHours() % 12 : a.getHours(), f += gj.core.pad(e) + d;
                    break;
                case "tt":
                    f += (a.getHours() >= 12 ? "pm" : "am") + d;
                    break;
                case "TT":
                    f += (a.getHours() >= 12 ? "PM" : "AM") + d;
                    break;
                case "d":
                    f += a.getDate() + d;
                    break;
                case "dd":
                    f += gj.core.pad(a.getDate()) + d;
                    break;
                case "ddd":
                    f += gj.core.messages[c || "en-us"].weekDaysShort[a.getDay()] + d;
                    break;
                case "dddd":
                    f += gj.core.messages[c || "en-us"].weekDays[a.getDay()] + d;
                    break;
                case "m":
                    f += a.getMonth() + 1 + d;
                    break;
                case "mm":
                    f += gj.core.pad(a.getMonth() + 1) + d;
                    break;
                case "mmm":
                    f += gj.core.messages[c || "en-us"].monthShortNames[a.getMonth()] + d;
                    break;
                case "mmmm":
                    f += gj.core.messages[c || "en-us"].monthNames[a.getMonth()] + d;
                    break;
                case "yy":
                    f += a.getFullYear().toString().substr(2) + d;
                    break;
                case "yyyy":
                    f += a.getFullYear() + d
            }
            return f
        },
        pad: function (a, b) {
            for (a = String(a), b = b || 2; a.length < b;) a = "0" + a;
            return a
        },
        center: function (a) {
            var b = $(window).width() / 2 - a.width() / 2,
                c = $(window).height() / 2 - a.height() / 2;
            a.css("position", "absolute"), a.css("left", b > 0 ? b : 0), a.css("top", c > 0 ? c : 0)
        },
        isIE: function () {
            return !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g)
        },
        setChildPosition: function (a, b) {
            var c = a.getBoundingClientRect(),
                d = gj.core.height(a, !0),
                e = gj.core.height(b, !0),
                f = gj.core.width(a, !0),
                g = gj.core.width(b, !0),
                h = window.scrollY || window.pageYOffset || 0,
                i = window.scrollX || window.pageXOffset || 0;
            c.top + d + e > window.innerHeight && c.top > e ? b.style.top = Math.round(c.top + h - e - 3) + "px" : b.style.top = Math.round(c.top + h + d + 3) + "px", c.left + g > document.body.clientWidth ? b.style.left = Math.round(c.left + i + f - g) + "px" : b.style.left = Math.round(c.left + i) + "px"
        },
        height: function (a, b) {
            var c, d = window.getComputedStyle(a);
            return "border-box" === d.boxSizing ? (c = parseInt(d.height, 10), gj.core.isIE() && (c += parseInt(d.paddingTop || 0, 10) + parseInt(d.paddingBottom || 0, 10), c += parseInt(d.borderTopWidth || 0, 10) + parseInt(d.borderBottomWidth || 0, 10))) : (c = parseInt(d.height, 10), c += parseInt(d.paddingTop || 0, 10) + parseInt(d.paddingBottom || 0, 10), c += parseInt(d.borderTopWidth || 0, 10) + parseInt(d.borderBottomWidth || 0, 10)), b && (c += parseInt(d.marginTop || 0, 10) + parseInt(d.marginBottom || 0, 10)), c
        },
        width: function (a, b) {
            var c, d = window.getComputedStyle(a);
            return "border-box" === d.boxSizing ? c = parseInt(d.width, 10) : (c = parseInt(d.width, 10), c += parseInt(d.paddingLeft || 0, 10) + parseInt(d.paddingRight || 0, 10), c += parseInt(d.borderLeftWidth || 0, 10) + parseInt(d.borderRightWidth || 0, 10)), b && (c += parseInt(d.marginLeft || 0, 10) + parseInt(d.marginRight || 0, 10)), c
        },
        addClasses: function (a, b) {
            var c, d;
            if (b)
                for (d = b.split(" "), c = 0; c < d.length; c++) a.classList.add(d[c])
        },
        position: function (a) {
            for (var b, c, d = 0, e = 0, f = gj.core.height(a), g = gj.core.width(a); a;) "BODY" == a.tagName ? (b = a.scrollLeft || document.documentElement.scrollLeft, c = a.scrollTop || document.documentElement.scrollTop, d += a.offsetLeft - b, e += a.offsetTop - c) : (d += a.offsetLeft - a.scrollLeft, e += a.offsetTop - a.scrollTop), a = a.offsetParent;
            return {
                top: e,
                left: d,
                bottom: e + f,
                right: d + g
            }
        },
        setCaretAtEnd: function (a) {
            var b;
            if (a)
                if (b = a.value.length, document.selection) {
                    a.focus();
                    var c = document.selection.createRange();
                    c.moveStart("character", -b), c.moveStart("character", b), c.moveEnd("character", 0), c.select()
                } else(a.selectionStart || "0" == a.selectionStart) && (a.selectionStart = b, a.selectionEnd = b, a.focus())
        },
        getScrollParent: function (a) {
            return null == a ? null : a.scrollHeight > a.clientHeight ? a : gj.core.getScrollParent(a.parentNode)
        }
    }, gj.picker = {
        messages: {
            "en-us": {}
        }
    }, gj.picker.methods = {
        initialize: function (a, b, c) {
            var d, e = c.createPicker(a, b),
                f = a.parent('div[role="wrapper"]');
            d = "bootstrap" === b.uiLibrary ? $('<span class="input-group-addon">' + b.icons.rightIcon + "</span>") : "bootstrap4" === b.uiLibrary ? $('<span class="input-group-append"><button class="btn btn-outline-secondary border-left-0" type="button">' + b.icons.rightIcon + "</button></span>") : $(b.icons.rightIcon), d.attr("role", "right-icon"), 0 === f.length ? (f = $('<div role="wrapper" />').addClass(b.style.wrapper), a.wrap(f)) : f.addClass(b.style.wrapper), f = a.parent('div[role="wrapper"]'), b.width && f.css("width", b.width), a.val(b.value).addClass(b.style.input).attr("role", "input"), b.fontSize && a.css("font-size", b.fontSize), "bootstrap" === b.uiLibrary || "bootstrap4" === b.uiLibrary ? "small" === b.size ? (f.addClass("input-group-sm"), a.addClass("form-control-sm")) : "large" === b.size && (f.addClass("input-group-lg"), a.addClass("form-control-lg")) : "small" === b.size ? f.addClass("small") : "large" === b.size && f.addClass("large"), d.on("click", function (b) {
                e.is(":visible") ? a.close() : a.open()
            }), f.append(d), !0 !== b.footer && (a.on("blur", function () {
                a.timeout = setTimeout(function () {
                    a.close()
                }, 500)
            }), e.mousedown(function () {
                return clearTimeout(a.timeout), a.focus(), !1
            }), e.on("click", function () {
                clearTimeout(a.timeout), a.focus()
            }))
        }
    }, gj.picker.widget = function (a, b) {
        var c = this,
            d = gj.picker.methods;
        return c.destroy = function () {
            return d.destroy(this)
        }, a
    }, gj.picker.widget.prototype = new gj.widget, gj.picker.widget.constructor = gj.picker.widget, gj.picker.widget.prototype.init = function (a, b, c) {
        return gj.widget.prototype.init.call(this, a, b), this.attr("data-" + b, "true"), gj.picker.methods.initialize(this, this.data(), gj[b].methods), this
    }, gj.picker.widget.prototype.open = function (a) {
        var b = this.data(),
            c = $("body").find('[role="picker"][guid="' + this.attr("data-guid") + '"]');
        return c.show(), c.closest('div[role="modal"]').show(), b.modal ? gj.core.center(c) : (gj.core.setChildPosition(this[0], c[0]), this.focus()), clearTimeout(this.timeout), gj[a].events.open(this), this
    }, gj.picker.widget.prototype.close = function (a) {
        var b = $("body").find('[role="picker"][guid="' + this.attr("data-guid") + '"]');
        return b.hide(), b.closest('div[role="modal"]').hide(), gj[a].events.close(this), this
    }, gj.picker.widget.prototype.destroy = function (a) {
        var b = this.data(),
            c = this.parent(),
            d = $("body").find('[role="picker"][guid="' + this.attr("data-guid") + '"]');
        return b && (this.off(), d.parent('[role="modal"]').length > 0 && d.unwrap(), d.remove(), this.removeData(), this.removeAttr("data-type").removeAttr("data-guid").removeAttr("data-" + a), this.removeClass(), c.children('[role="right-icon"]').remove(), this.unwrap()), this
    }, gj.dialog = {
        plugins: {},
        messages: {}
    }, gj.dialog.config = {
        base: {
            autoOpen: !0,
            closeButtonInHeader: !0,
            closeOnEscape: !0,
            draggable: !0,
            height: "auto",
            locale: "en-us",
            maxHeight: void 0,
            maxWidth: void 0,
            minHeight: void 0,
            minWidth: void 0,
            modal: !1,
            resizable: !1,
            scrollable: !1,
            title: void 0,
            uiLibrary: void 0,
            width: 300,
            style: {
                modal: "gj-modal",
                content: "gj-dialog-md",
                header: "gj-dialog-md-header gj-unselectable",
                headerTitle: "gj-dialog-md-title",
                headerCloseButton: "gj-dialog-md-close",
                body: "gj-dialog-md-body",
                footer: "gj-dialog-footer gj-dialog-md-footer"
            }
        },
        bootstrap: {
            style: {
                modal: "modal",
                content: "modal-content gj-dialog-bootstrap",
                header: "modal-header",
                headerTitle: "modal-title",
                headerCloseButton: "close",
                body: "modal-body",
                footer: "gj-dialog-footer modal-footer"
            }
        },
        bootstrap4: {
            style: {
                modal: "modal",
                content: "modal-content gj-dialog-bootstrap4",
                header: "modal-header",
                headerTitle: "modal-title",
                headerCloseButton: "close",
                body: "modal-body",
                footer: "gj-dialog-footer modal-footer"
            }
        }
    }, gj.dialog.events = {
        initialized: function (a) {
            a.trigger("initialized")
        },
        opening: function (a) {
            a.trigger("opening")
        },
        opened: function (a) {
            a.trigger("opened")
        },
        closing: function (a) {
            a.trigger("closing")
        },
        closed: function (a) {
            a.trigger("closed")
        },
        drag: function (a) {
            a.trigger("drag")
        },
        dragStart: function (a) {
            a.trigger("dragStart")
        },
        dragStop: function (a) {
            a.trigger("dragStop")
        },
        resize: function (a) {
            a.trigger("resize")
        },
        resizeStart: function (a) {
            a.trigger("resizeStart")
        },
        resizeStop: function (a) {
            a.trigger("resizeStop")
        }
    }, gj.dialog.methods = {
        init: function (a) {
            return gj.widget.prototype.init.call(this, a, "dialog"), gj.dialog.methods.localization(this), gj.dialog.methods.initialize(this), gj.dialog.events.initialized(this), this
        },
        localization: function (a) {
            var b = a.data();
            void 0 === b.title && (b.title = gj.dialog.messages[b.locale].DefaultTitle)
        },
        getHTMLConfig: function () {
            var a = gj.widget.prototype.getHTMLConfig.call(this),
                b = this[0].attributes;
            return b.title && (a.title = b.title.value), a
        },
        initialize: function (a) {
            var b, c, d, e = a.data();
            a.addClass(e.style.content), gj.dialog.methods.setSize(a), e.closeOnEscape && $(document).keyup(function (b) {
                27 === b.keyCode && a.close()
            }), c = a.children('div[data-role="body"]'), 0 === c.length ? (c = $('<div data-role="body"/>').addClass(e.style.body), a.wrapInner(c)) : c.addClass(e.style.body), b = gj.dialog.methods.renderHeader(a), d = a.children('div[data-role="footer"]').addClass(e.style.footer), a.find('[data-role="close"]').on("click", function () {
                a.close()
            }), gj.draggable && (e.draggable && gj.dialog.methods.draggable(a, b), e.resizable && gj.dialog.methods.resizable(a)), e.scrollable && e.height && (a.addClass("gj-dialog-scrollable"), a.on("opened", function () {
                a.children('div[data-role="body"]').css("height", e.height - b.outerHeight() - (d.length ? d.outerHeight() : 0))
            })), gj.core.center(a), e.modal && a.wrapAll('<div data-role="modal" class="' + e.style.modal + '"/>'), e.autoOpen && a.open()
        },
        setSize: function (a) {
            var b = a.data();
            b.width && a.css("width", b.width), b.height && a.css("height", b.height)
        },
        renderHeader: function (a) {
            var b, c, d, e = a.data();
            return b = a.children('div[data-role="header"]'), 0 === b.length && (b = $('<div data-role="header" />'), a.prepend(b)), b.addClass(e.style.header), c = b.find('[data-role="title"]'), 0 === c.length && (c = $('<h4 data-role="title">' + e.title + "</h4>"), b.append(c)), c.addClass(e.style.headerTitle), d = b.find('[data-role="close"]'), 0 === d.length && e.closeButtonInHeader ? (d = $('<button type="button" data-role="close" title="' + gj.dialog.messages[e.locale].Close + '"><span>×</span></button>'), d.addClass(e.style.headerCloseButton), b.append(d)) : d.length > 0 && !1 === e.closeButtonInHeader ? d.hide() : d.addClass(e.style.headerCloseButton), b
        },
        draggable: function (a, b) {
            a.appendTo("body"), b.addClass("gj-draggable"), a.draggable({
                handle: b,
                start: function () {
                    a.addClass("gj-unselectable"), gj.dialog.events.dragStart(a)
                },
                stop: function () {
                    a.removeClass("gj-unselectable"), gj.dialog.events.dragStop(a)
                }
            })
        },
        resizable: function (a) {
            var b = {
                drag: gj.dialog.methods.resize,
                start: function () {
                    a.addClass("gj-unselectable"), gj.dialog.events.resizeStart(a)
                },
                stop: function () {
                    this.removeAttribute("style"), a.removeClass("gj-unselectable"), gj.dialog.events.resizeStop(a)
                }
            };
            a.append($('<div class="gj-resizable-handle gj-resizable-n"></div>').draggable($.extend(!0, {
                horizontal: !1
            }, b))), a.append($('<div class="gj-resizable-handle gj-resizable-e"></div>').draggable($.extend(!0, {
                vertical: !1
            }, b))), a.append($('<div class="gj-resizable-handle gj-resizable-s"></div>').draggable($.extend(!0, {
                horizontal: !1
            }, b))), a.append($('<div class="gj-resizable-handle gj-resizable-w"></div>').draggable($.extend(!0, {
                vertical: !1
            }, b))), a.append($('<div class="gj-resizable-handle gj-resizable-ne"></div>').draggable($.extend(!0, {}, b))), a.append($('<div class="gj-resizable-handle gj-resizable-nw"></div>').draggable($.extend(!0, {}, b))), a.append($('<div class="gj-resizable-handle gj-resizable-sw"></div>').draggable($.extend(!0, {}, b))), a.append($('<div class="gj-resizable-handle gj-resizable-se"></div>').draggable($.extend(!0, {}, b)))
        },
        resize: function (a, b) {
            var c, d, e, f, g, h, i, j, k = !1;
            return c = $(this), d = c.parent(), e = gj.core.position(this), offset = {
                top: b.top - e.top,
                left: b.left - e.left
            }, f = d.data(), c.hasClass("gj-resizable-n") ? (g = d.height() - offset.top, i = d.offset().top + offset.top) : c.hasClass("gj-resizable-e") ? h = d.width() + offset.left : c.hasClass("gj-resizable-s") ? g = d.height() + offset.top : c.hasClass("gj-resizable-w") ? (h = d.width() - offset.left, j = d.offset().left + offset.left) : c.hasClass("gj-resizable-ne") ? (g = d.height() - offset.top, i = d.offset().top + offset.top, h = d.width() + offset.left) : c.hasClass("gj-resizable-nw") ? (g = d.height() - offset.top, i = d.offset().top + offset.top, h = d.width() - offset.left, j = d.offset().left + offset.left) : c.hasClass("gj-resizable-se") ? (g = d.height() + offset.top, h = d.width() + offset.left) : c.hasClass("gj-resizable-sw") && (g = d.height() + offset.top, h = d.width() - offset.left, j = d.offset().left + offset.left), g && (!f.minHeight || g >= f.minHeight) && (!f.maxHeight || g <= f.maxHeight) && (d.height(g), i && d.css("top", i), k = !0), h && (!f.minWidth || h >= f.minWidth) && (!f.maxWidth || h <= f.maxWidth) && (d.width(h), j && d.css("left", j), k = !0), k && gj.dialog.events.resize(d), k
        },
        open: function (a, b) {
            var c;
            return gj.dialog.events.opening(a), a.css("display", "block"), a.closest('div[data-role="modal"]').css("display", "block"), c = a.children('div[data-role="footer"]'), c.length && c.outerHeight() && a.children('div[data-role="body"]').css("margin-bottom", c.outerHeight()), void 0 !== b && a.find('[data-role="title"]').html(b), gj.dialog.events.opened(a), a
        },
        close: function (a) {
            return a.is(":visible") && (gj.dialog.events.closing(a), a.css("display", "none"), a.closest('div[data-role="modal"]').css("display", "none"), gj.dialog.events.closed(a)), a
        },
        isOpen: function (a) {
            return a.is(":visible")
        },
        content: function (a, b) {
            var c = a.children('div[data-role="body"]');
            return void 0 === b ? c.html() : c.html(b)
        },
        destroy: function (a, b) {
            var c = a.data();
            return c && (!1 === b ? a.remove() : (a.close(), a.off(), a.removeData(), a.removeAttr("data-type"), a.removeClass(c.style.content), a.find('[data-role="header"]').removeClass(c.style.header), a.find('[data-role="title"]').removeClass(c.style.headerTitle), a.find('[data-role="close"]').remove(), a.find('[data-role="body"]').removeClass(c.style.body), a.find('[data-role="footer"]').removeClass(c.style.footer))), a
        }
    }, gj.dialog.widget = function (a, b) {
        var c = this,
            d = gj.dialog.methods;
        return c.open = function (a) {
            return d.open(this, a)
        }, c.close = function () {
            return d.close(this)
        }, c.isOpen = function () {
            return d.isOpen(this)
        }, c.content = function (a) {
            return d.content(this, a)
        }, c.destroy = function (a) {
            return d.destroy(this, a)
        }, $.extend(a, c), "dialog" !== a.attr("data-type") && d.init.call(a, b), a
    }, gj.dialog.widget.prototype = new gj.widget, gj.dialog.widget.constructor = gj.dialog.widget, gj.dialog.widget.prototype.getHTMLConfig = gj.dialog.methods.getHTMLConfig,
    function (a) {
        a.fn.dialog = function (a) {
            var b;
            if (this && this.length) {
                if ("object" != typeof a && a) {
                    if (b = new gj.dialog.widget(this, null), b[a]) return b[a].apply(this, Array.prototype.slice.call(arguments, 1));
                    throw "Method " + a + " does not exist."
                }
                return new gj.dialog.widget(this, a)
            }
        }
    }(jQuery), gj.dialog.messages["en-us"] = {
        Close: "Close",
        DefaultTitle: "Dialog"
    }, gj.draggable = {
        plugins: {}
    }, gj.draggable.config = {
        base: {
            handle: void 0,
            vertical: !0,
            horizontal: !0,
            containment: void 0
        }
    }, gj.draggable.methods = {
        init: function (a) {
            var b, c, d = this;
            return gj.widget.prototype.init.call(this, a, "draggable"), c = this.data(), d.attr("data-draggable", "true"), b = gj.draggable.methods.getHandleElement(d), b.on("touchstart mousedown", function (a) {
                var e = gj.core.position(d[0]);
                d[0].style.top = e.top + "px", d[0].style.left = e.left + "px", d[0].style.position = "fixed", d.attr("draggable-dragging", !0), d.removeAttr("draggable-x").removeAttr("draggable-y"), gj.documentManager.subscribeForEvent("touchmove", d.data("guid"), gj.draggable.methods.createMoveHandler(d, b, c)), gj.documentManager.subscribeForEvent("mousemove", d.data("guid"), gj.draggable.methods.createMoveHandler(d, b, c))
            }), gj.documentManager.subscribeForEvent("mouseup", d.data("guid"), gj.draggable.methods.createUpHandler(d)), gj.documentManager.subscribeForEvent("touchend", d.data("guid"), gj.draggable.methods.createUpHandler(d)), gj.documentManager.subscribeForEvent("touchcancel", d.data("guid"), gj.draggable.methods.createUpHandler(d)), d
        },
        getHandleElement: function (a) {
            var b = a.data("handle");
            return b && b.length ? b : a
        },
        createUpHandler: function (a) {
            return function (b) {
                "true" === a.attr("draggable-dragging") && (a.attr("draggable-dragging", !1), gj.documentManager.unsubscribeForEvent("mousemove", a.data("guid")), gj.documentManager.unsubscribeForEvent("touchmove", a.data("guid")), gj.draggable.events.stop(a, {
                    x: a.mouseX(b),
                    y: a.mouseY(b)
                }))
            }
        },
        createMoveHandler: function (a, b, c) {
            return function (b) {
                var d, e, f, g, h, i;
                "true" === a.attr("draggable-dragging") && (d = Math.round(a.mouseX(b)), e = Math.round(a.mouseY(b)), h = a.attr("draggable-x"), i = a.attr("draggable-y"), h && i ? (f = c.horizontal ? d - parseInt(h, 10) : 0, g = c.vertical ? e - parseInt(i, 10) : 0, gj.draggable.methods.move(a[0], c, f, g, d, e)) : gj.draggable.events.start(a, d, e), a.attr("draggable-x", d), a.attr("draggable-y", e))
            }
        },
        move: function (a, b, c, d, e, f) {
            var g, h, i, j = gj.core.position(a),
                k = j.top + d,
                l = j.left + c;
            b.containment && (g = gj.core.position(b.containment), h = g.top + gj.core.height(b.containment) - gj.core.height(a), i = g.left + gj.core.width(b.containment) - gj.core.width(a), k > g.top && k < h ? (g.top >= f || g.bottom <= f) && (k = j.top) : k = k <= g.top ? g.top + 1 : h - 1, l > g.left && l < i ? (g.left >= e || g.right <= e) && (l = j.left) : l = l <= g.left ? g.left + 1 : i - 1), !1 !== gj.draggable.events.drag($(a), l, k, e, f) && (a.style.top = k + "px", a.style.left = l + "px")
        },
        destroy: function (a) {
            return "true" === a.attr("data-draggable") && (gj.documentManager.unsubscribeForEvent("mouseup", a.data("guid")), a.removeData(), a.removeAttr("data-guid").removeAttr("data-type").removeAttr("data-draggable"), a.removeAttr("draggable-x").removeAttr("draggable-y").removeAttr("draggable-dragging"), a[0].style.top = "", a[0].style.left = "", a[0].style.position = "", a.off("drag").off("start").off("stop"), gj.draggable.methods.getHandleElement(a).off("mousedown")), a
        }
    }, gj.draggable.events = {
        drag: function (a, b, c, d, e) {
            return a.triggerHandler("drag", [{
                left: b,
                top: c
            }, {
                x: d,
                y: e
            }])
        },
        start: function (a, b, c) {
            a.triggerHandler("start", [{
                x: b,
                y: c
            }])
        },
        stop: function (a, b) {
            a.triggerHandler("stop", [b])
        }
    }, gj.draggable.widget = function (a, b) {
        var c = this,
            d = gj.draggable.methods;
        return a.destroy || (c.destroy = function () {
            return d.destroy(this)
        }), $.extend(a, c), "true" !== a.attr("data-draggable") && d.init.call(a, b), a
    }, gj.draggable.widget.prototype = new gj.widget, gj.draggable.widget.constructor = gj.draggable.widget,
    function (a) {
        a.fn.draggable = function (a) {
            var b;
            if (this && this.length) {
                if ("object" != typeof a && a) {
                    if (b = new gj.draggable.widget(this, null), b[a]) return b[a].apply(this, Array.prototype.slice.call(arguments, 1));
                    throw "Method " + a + " does not exist."
                }
                return new gj.draggable.widget(this, a)
            }
        }
    }(jQuery), gj.droppable = {
        plugins: {}
    }, gj.droppable.config = {
        hoverClass: void 0
    }, gj.droppable.methods = {
        init: function (a) {
            var b = this;
            return gj.widget.prototype.init.call(this, a, "droppable"), b.attr("data-droppable", "true"), gj.documentManager.subscribeForEvent("mousedown", b.data("guid"), gj.droppable.methods.createMouseDownHandler(b)), gj.documentManager.subscribeForEvent("mousemove", b.data("guid"), gj.droppable.methods.createMouseMoveHandler(b)), gj.documentManager.subscribeForEvent("mouseup", b.data("guid"), gj.droppable.methods.createMouseUpHandler(b)), b
        },
        createMouseDownHandler: function (a) {
            return function (b) {
                a.isDragging = !0
            }
        },
        createMouseMoveHandler: function (a) {
            return function (b) {
                if (a.isDragging) {
                    var c = a.data("hoverClass"),
                        d = {
                            x: a.mouseX(b),
                            y: a.mouseY(b)
                        },
                        e = gj.droppable.methods.isOver(a, d);
                    e != a.isOver && (e ? (c && a.addClass(c), gj.droppable.events.over(a, d)) : (c && a.removeClass(c), gj.droppable.events.out(a))), a.isOver = e
                }
            }
        },
        createMouseUpHandler: function (a) {
            return function (b) {
                var c = {
                    left: a.mouseX(b),
                    top: a.mouseY(b)
                };
                a.isDragging = !1, gj.droppable.methods.isOver(a, c) && gj.droppable.events.drop(a)
            }
        },
        isOver: function (a, b) {
            var c = a.offset().top,
                d = a.offset().left;
            return b.x > d && b.x < d + a.outerWidth(!0) && b.y > c && b.y < c + a.outerHeight(!0)
        },
        destroy: function (a) {
            return "true" === a.attr("data-droppable") && (gj.documentManager.unsubscribeForEvent("mousedown", a.data("guid")), gj.documentManager.unsubscribeForEvent("mousemove", a.data("guid")), gj.documentManager.unsubscribeForEvent("mouseup", a.data("guid")), a.removeData(), a.removeAttr("data-guid"), a.removeAttr("data-droppable"), a.off("drop").off("over").off("out")), a
        }
    }, gj.droppable.events = {
        drop: function (a, b, c) {
            a.trigger("drop", [{
                top: c,
                left: b
            }])
        },
        over: function (a, b) {
            a.trigger("over", [b])
        },
        out: function (a) {
            a.trigger("out")
        }
    }, gj.droppable.widget = function (a, b) {
        var c = this,
            d = gj.droppable.methods;
        return c.isOver = !1, c.isDragging = !1, c.destroy = function () {
            return d.destroy(this)
        }, c.isOver = function (a) {
            return d.isOver(this, a)
        }, $.extend(a, c), "true" !== a.attr("data-droppable") && d.init.call(a, b), a
    }, gj.droppable.widget.prototype = new gj.widget, gj.droppable.widget.constructor = gj.droppable.widget,
    function (a) {
        a.fn.droppable = function (a) {
            var b;
            if (this && this.length) {
                if ("object" != typeof a && a) {
                    if (b = new gj.droppable.widget(this, null), b[a]) return b[a].apply(this, Array.prototype.slice.call(arguments, 1));
                    throw "Method " + a + " does not exist."
                }
                return new gj.droppable.widget(this, a)
            }
        }
    }(jQuery), gj.grid = {
        plugins: {},
        messages: {}
    }, gj.grid.config = {
        base: {
            dataSource: void 0,
            columns: [],
            autoGenerateColumns: !1,
            defaultColumnSettings: {
                hidden: !1,
                width: void 0,
                sortable: !1,
                type: "text",
                title: void 0,
                field: void 0,
                align: void 0,
                cssClass: void 0,
                headerCssClass: void 0,
                tooltip: void 0,
                icon: void 0,
                events: void 0,
                format: "mm/dd/yyyy",
                decimalDigits: void 0,
                tmpl: void 0,
                stopPropagation: !1,
                renderer: void 0,
                filter: void 0
            },
            mapping: {
                dataField: "records",
                totalRecordsField: "total"
            },
            params: {},
            paramNames: {
                sortBy: "sortBy",
                direction: "direction"
            },
            uiLibrary: "materialdesign",
            iconsLibrary: "materialicons",
            selectionType: "single",
            selectionMethod: "basic",
            autoLoad: !0,
            notFoundText: void 0,
            width: void 0,
            minWidth: void 0,
            headerRowHeight: "fixed",
            bodyRowHeight: "autogrow",
            fontSize: void 0,
            primaryKey: void 0,
            locale: "en-us",
            defaultIconColumnWidth: 70,
            defaultCheckBoxColumnWidth: 70,
            style: {
                wrapper: "gj-grid-wrapper",
                table: "gj-grid gj-grid-md",
                loadingCover: "gj-grid-loading-cover",
                loadingText: "gj-grid-loading-text",
                header: {
                    cell: void 0,
                    sortable: "gj-cursor-pointer gj-unselectable"
                },
                content: {
                    rowSelected: "gj-grid-md-select"
                }
            },
            icons: {
                asc: "▲",
                desc: "▼"
            }
        },
        bootstrap: {
            style: {
                wrapper: "gj-grid-wrapper",
                table: "gj-grid gj-grid-bootstrap gj-grid-bootstrap-3 table table-bordered table-hover",
                content: {
                    rowSelected: "active"
                }
            },
            iconsLibrary: "glyphicons",
            defaultIconColumnWidth: 34,
            defaultCheckBoxColumnWidth: 36
        },
        bootstrap4: {
            style: {
                wrapper: "gj-grid-wrapper",
                table: "gj-grid gj-grid-bootstrap gj-grid-bootstrap-4 table table-bordered table-hover",
                content: {
                    rowSelected: "active"
                }
            },
            defaultIconColumnWidth: 42,
            defaultCheckBoxColumnWidth: 44
        },
        materialicons: {
            icons: {
                asc: '<i class="gj-icon arrow-upward" />',
                desc: '<i class="gj-icon arrow-downward" />'
            }
        },
        fontawesome: {
            icons: {
                asc: '<i class="fa fa-sort-amount-asc" aria-hidden="true"></i>',
                desc: '<i class="fa fa-sort-amount-desc" aria-hidden="true"></i>'
            }
        },
        glyphicons: {
            icons: {
                asc: '<span class="glyphicon glyphicon-sort-by-alphabet" />',
                desc: '<span class="glyphicon glyphicon-sort-by-alphabet-alt" />'
            }
        }
    }, gj.grid.events = {
        beforeEmptyRowInsert: function (a, b) {
            return a.triggerHandler("beforeEmptyRowInsert", [b])
        },
        dataBinding: function (a, b) {
            return a.triggerHandler("dataBinding", [b])
        },
        dataBound: function (a, b, c) {
            return a.triggerHandler("dataBound", [b, c])
        },
        rowDataBound: function (a, b, c, d) {
            return a.triggerHandler("rowDataBound", [b, c, d])
        },
        cellDataBound: function (a, b, c, d, e) {
            return a.triggerHandler("cellDataBound", [b, c, d, e])
        },
        rowSelect: function (a, b, c, d) {
            return a.triggerHandler("rowSelect", [b, c, d])
        },
        rowUnselect: function (a, b, c, d) {
            return a.triggerHandler("rowUnselect", [b, c, d])
        },
        rowRemoving: function (a, b, c, d) {
            return a.triggerHandler("rowRemoving", [b, c, d])
        },
        destroying: function (a) {
            return a.triggerHandler("destroying")
        },
        columnHide: function (a, b) {
            return a.triggerHandler("columnHide", [b])
        },
        columnShow: function (a, b) {
            return a.triggerHandler("columnShow", [b])
        },
        initialized: function (a) {
            return a.triggerHandler("initialized")
        },
        dataFiltered: function (a, b) {
            return a.triggerHandler("dataFiltered", [b])
        }
    }, gj.grid.methods = {
        init: function (a) {
            return gj.widget.prototype.init.call(this, a, "grid"), gj.grid.methods.initialize(this), this.data("autoLoad") && this.reload(), this
        },
        getConfig: function (a, b) {
            var c = gj.widget.prototype.getConfig.call(this, a, b);
            return gj.grid.methods.setDefaultColumnConfig(c.columns, c.defaultColumnSettings), c
        },
        setDefaultColumnConfig: function (a, b) {
            var c, d;
            if (a && a.length)
                for (d = 0; d < a.length; d++) c = $.extend(!0, {}, b), $.extend(!0, c, a[d]), a[d] = c
        },
        getHTMLConfig: function () {
            var a = gj.widget.prototype.getHTMLConfig.call(this);
            return a.columns = [], this.find("thead > tr > th").each(function () {
                var b = $(this),
                    c = b.text(),
                    d = gj.widget.prototype.getHTMLConfig.call(b);
                d.title = c, d.field || (d.field = c), d.events && (d.events = gj.grid.methods.eventsParser(d.events)), a.columns.push(d)
            }), a
        },
        eventsParser: function (events) {
            var result = {},
                list, i, key, func, position;
            for (list = events.split(","), i = 0; i < list.length; i++)(position = list[i].indexOf(":")) > 0 && (key = $.trim(list[i].substr(0, position)), func = $.trim(list[i].substr(position + 1, list[i].length)), result[key] = eval("window." + func));
            return result
        },
        initialize: function (a) {
            var b = a.data(),
                c = a.parent('div[data-role="wrapper"]');
            gj.grid.methods.localization(b), 0 === c.length ? (c = $('<div data-role="wrapper" />').addClass(b.style.wrapper), a.wrap(c)) : c.addClass(b.style.wrapper), b.width && a.parent().css("width", b.width), b.minWidth && a.css("min-width", b.minWidth), b.fontSize && a.css("font-size", b.fontSize), "autogrow" === b.headerRowHeight && a.addClass("autogrow-header-row"), "fixed" === b.bodyRowHeight && a.addClass("fixed-body-rows"), a.addClass(b.style.table), "checkbox" === b.selectionMethod && b.columns.splice(gj.grid.methods.getColumnPositionNotInRole(a), 0, {
                title: "",
                width: b.defaultCheckBoxColumnWidth,
                align: "center",
                type: "checkbox",
                role: "selectRow",
                events: {
                    click: function (b) {
                        gj.grid.methods.setSelected(a, b.data.id, $(this).closest("tr"))
                    }
                },
                headerCssClass: "gj-grid-select-all",
                stopPropagation: !0
            }), 0 === a.children("tbody").length && a.append($("<tbody/>")), gj.grid.methods.renderHeader(a), gj.grid.methods.appendEmptyRow(a, "&nbsp;"), gj.grid.events.initialized(a)
        },
        localization: function (a) {
            a.notFoundText || (a.notFoundText = gj.grid.messages[a.locale].NoRecordsFound)
        },
        renderHeader: function (a) {
            var b, c, d, e, f, g, h, i, j;
            for (b = a.data(), c = b.columns, d = b.style.header, e = a.children("thead"), 0 === e.length && (e = $("<thead />"), a.prepend(e)), f = $('<tr data-role="caption" />'), i = 0; i < c.length; i += 1) g = $('<th data-field="' + (c[i].field || "") + '" />'), c[i].width ? g.attr("width", c[i].width) : "checkbox" === c[i].type && g.attr("width", b.defaultIconColumnWidth), g.addClass(d.cell), c[i].headerCssClass && g.addClass(c[i].headerCssClass), g.css("text-align", c[i].align || "left"), "checkbox" === b.selectionMethod && "multiple" === b.selectionType && "checkbox" === c[i].type && "selectRow" === c[i].role ? (j = g.find('input[data-role="selectAll"]'), 0 === j.length && (j = $('<input type="checkbox" data-role="selectAll" />'), g.append(j), j.checkbox({
                uiLibrary: b.uiLibrary
            })), j.off("click").on("click", function () {
                this.checked ? a.selectAll() : a.unSelectAll()
            })) : (h = $('<div data-role="title"/>').html(void 0 === c[i].title ? c[i].field : c[i].title), g.append(h), c[i].sortable && (h.addClass(d.sortable), h.on("click", gj.grid.methods.createSortHandler(a, c[i])))), c[i].hidden && g.hide(), f.append(g);
            e.empty().append(f)
        },
        createSortHandler: function (a, b) {
            return function () {
                var c, d = {};
                a.count() > 0 && (c = a.data(), d[c.paramNames.sortBy] = b.field, b.direction = "asc" === b.direction ? "desc" : "asc", d[c.paramNames.direction] = b.direction, a.reload(d))
            }
        },
        updateHeader: function (a) {
            var b, c, d = a.data(),
                e = d.params[d.paramNames.sortBy],
                f = d.params[d.paramNames.direction];
            a.find('thead tr th [data-role="sorticon"]').remove(), e && (position = gj.grid.methods.getColumnPosition(a.data("columns"), e), position > -1 && (c = a.find("thead tr th:eq(" + position + ') div[data-role="title"]'), b = $('<div data-role="sorticon" class="gj-unselectable" />').append("desc" === f ? d.icons.desc : d.icons.asc), c.after(b)))
        },
        useHtmlDataSource: function (a, b) {
            var c, d, e, f, g = [],
                h = a.find('tbody tr[data-role != "empty"]');
            for (c = 0; c < h.length; c++) {
                for (e = $(h[c]).find("td"), f = {}, d = 0; d < e.length; d++) f[b.columns[d].field] = $(e[d]).html();
                g.push(f)
            }
            b.dataSource = g
        },
        startLoading: function (a) {
            var b, c, d, e, f, g, h;
            gj.grid.methods.stopLoading(a), h = a.data(), 0 !== a.outerHeight() && (b = a.children("tbody"), e = b.outerWidth(!1), f = b.outerHeight(!1), g = Math.abs(a.parent().offset().top - b.offset().top), c = $('<div data-role="loading-cover" />').addClass(h.style.loadingCover).css({
                width: e,
                height: f,
                top: g
            }), d = $('<div data-role="loading-text">' + gj.grid.messages[h.locale].Loading + "</div>").addClass(h.style.loadingText), d.insertAfter(a), c.insertAfter(a), d.css({
                top: g + f / 2 - d.outerHeight(!1) / 2,
                left: e / 2 - d.outerWidth(!1) / 2
            }))
        },
        stopLoading: function (a) {
            a.parent().find('div[data-role="loading-cover"]').remove(), a.parent().find('div[data-role="loading-text"]').remove()
        },
        appendEmptyRow: function (a, b) {
            var c, d, e, f;
            c = a.data(), d = $('<tr data-role="empty"/>'), e = $("<td/>").css({
                width: "100%",
                "text-align": "center"
            }), e.attr("colspan", gj.grid.methods.countVisibleColumns(a)), f = $("<div />").html(b || c.notFoundText), e.append(f), d.append(e), gj.grid.events.beforeEmptyRowInsert(a, d), a.append(d)
        },
        autoGenerateColumns: function (a, b) {
            var c, d, e, f, g = a.data();
            if (g.columns = [], b.length > 0) {
                for (c = Object.getOwnPropertyNames(b[0]), f = 0; f < c.length; f++) d = b[0][c[f]], e = "text", d && ("number" == typeof d ? e = "number" : d.indexOf("/Date(") > -1 && (e = "date")), g.columns.push({
                    field: c[f],
                    type: e
                });
                gj.grid.methods.setDefaultColumnConfig(g.columns, g.defaultColumnSettings)
            }
            gj.grid.methods.renderHeader(a)
        },
        loadData: function (a) {
            var b, c, d, e, f, g, h, i;
            for (b = a.data(), c = a.getAll(), gj.grid.events.dataBinding(a, c), e = c.length, gj.grid.methods.stopLoading(a), b.autoGenerateColumns && gj.grid.methods.autoGenerateColumns(a, c), g = a.children("tbody"), "checkbox" === b.selectionMethod && "multiple" === b.selectionType && a.find('thead input[data-role="selectAll"]').prop("checked", !1), g.children("tr").not('[data-role="row"]').remove(), 0 === e && (g.empty(), gj.grid.methods.appendEmptyRow(a)), h = g.children("tr"), f = h.length, d = 0; d < f; d++) {
                if (!(d < e)) {
                    g.find('tr[data-role="row"]:gt(' + (d - 1) + ")").remove();
                    break
                }
                i = h.eq(d), gj.grid.methods.renderRow(a, i, c[d], d)
            }
            for (d = f; d < e; d++) gj.grid.methods.renderRow(a, null, c[d], d);
            gj.grid.events.dataBound(a, c, b.totalRecords)
        },
        getId: function (a, b, c) {
            return b && a[b] ? a[b] : c
        },
        renderRow: function (a, b, c, d) {
            var e, f, g, h, i;
            for (h = a.data(), b && 0 !== b.length ? (i = "update", b.removeClass(h.style.content.rowSelected).removeAttr("data-selected").off("click")) : (i = "create", b = $('<tr data-role="row"/>'), a.children("tbody").append(b)), e = gj.grid.methods.getId(c, h.primaryKey, d + 1), b.attr("data-position", d + 1), "checkbox" !== h.selectionMethod && b.on("click", gj.grid.methods.createRowClickHandler(a, e)), g = 0; g < h.columns.length; g++) "update" === i ? (f = b.find("td:eq(" + g + ")"), gj.grid.methods.renderCell(a, f, h.columns[g], c, e)) : (f = gj.grid.methods.renderCell(a, null, h.columns[g], c, e), b.append(f));
            gj.grid.events.rowDataBound(a, b, e, c)
        },
        renderCell: function (a, b, c, d, e, f) {
            var g, h;
            if (b && 0 !== b.length ? (g = b.find('div[data-role="display"]'), f = "update") : (b = $("<td/>"), g = $('<div data-role="display" />'), c.align && b.css("text-align", c.align), c.cssClass && b.addClass(c.cssClass), b.append(g), f = "create"), gj.grid.methods.renderDisplayElement(a, g, c, d, e, f), "update" === f && (b.off(), g.off()), c.events)
                for (h in c.events) c.events.hasOwnProperty(h) && b.on(h, {
                    id: e,
                    field: c.field,
                    record: d
                }, gj.grid.methods.createCellEventHandler(c, c.events[h]));
            return c.hidden && b.hide(), gj.grid.events.cellDataBound(a, g, e, c, d), b
        },
        createCellEventHandler: function (a, b) {
            return function (c) {
                a.stopPropagation && c.stopPropagation(), b.call(this, c)
            }
        },
        renderDisplayElement: function (a, b, c, d, e, f) {
            var g, h;
            "checkbox" === c.type && gj.checkbox ? "create" === f ? (h = $('<input type="checkbox" />').val(e).prop("checked", !!d[c.field]), c.role && h.attr("data-role", c.role), b.append(h), h.checkbox({
                uiLibrary: a.data("uiLibrary")
            }), "selectRow" === c.role ? h.on("click", function () {
                return !1
            }) : h.prop("disabled", !0)) : b.find('input[type="checkbox"]').val(e).prop("checked", !!d[c.field]) : "icon" === c.type ? "create" === f && (b.append($("<span/>").addClass(c.icon).css({
                cursor: "pointer"
            })), "bootstrap" === a.data().uiLibrary && b.children("span").addClass("glyphicon"), c.stopPropagation = !0) : c.tmpl ? (g = c.tmpl, c.tmpl.replace(/\{(.+?)\}/g, function (a, b) {
                g = g.replace(a, gj.grid.methods.formatText(d[b], c))
            }), b.html(g)) : c.renderer && "function" == typeof c.renderer ? (g = c.renderer(d[c.field], d, b.parent(), b, e, a)) && b.html(g) : (d[c.field] = gj.grid.methods.formatText(d[c.field], c), !c.tooltip && d[c.field] && b.attr("title", d[c.field]), b.html(d[c.field])), c.tooltip && "create" === f && b.attr("title", c.tooltip)
        },
        formatText: function (a, b) {
            return a = a && ["date", "time", "datetime"].indexOf(b.type) > -1 ? gj.core.formatDate(gj.core.parseDate(a, b.format), b.format) : void 0 === a || null === a ? "" : a.toString(), b.decimalDigits && a && (a = parseFloat(a).toFixed(b.decimalDigits)), a
        },
        setRecordsData: function (a, b) {
            var c = [],
                d = 0,
                e = a.data();
            return $.isArray(b) ? (c = b, d = b.length) : e && e.mapping && $.isArray(b[e.mapping.dataField]) && (c = b[e.mapping.dataField], (d = b[e.mapping.totalRecordsField]) && !isNaN(d) || (d = 0)), a.data("records", c), a.data("totalRecords", d), c
        },
        createRowClickHandler: function (a, b) {
            return function () {
                gj.grid.methods.setSelected(a, b, $(this))
            }
        },
        selectRow: function (a, b, c, d) {
            var e;
            return c.addClass(b.style.content.rowSelected), c.attr("data-selected", "true"), "checkbox" === b.selectionMethod && (e = c.find('input[type="checkbox"][data-role="selectRow"]'), e.length && !e.prop("checked") && e.prop("checked", !0), "multiple" === b.selectionType && a.getSelections().length === a.count(!1) && a.find('thead input[data-role="selectAll"]').prop("checked", !0)), gj.grid.events.rowSelect(a, c, d, a.getById(d))
        },
        unselectRow: function (a, b, c, d) {
            var e;
            if ("true" === c.attr("data-selected")) return c.removeClass(b.style.content.rowSelected), "checkbox" === b.selectionMethod && (e = c.find('td input[type="checkbox"][data-role="selectRow"]'), e.length && e.prop("checked") && e.prop("checked", !1), "multiple" === b.selectionType && a.find('thead input[data-role="selectAll"]').prop("checked", !1)), c.removeAttr("data-selected"), gj.grid.events.rowUnselect(a, c, d, a.getById(d))
        },
        setSelected: function (a, b, c) {
            var d = a.data();
            return c && c.length || (c = gj.grid.methods.getRowById(a, b)), c && ("true" === c.attr("data-selected") ? gj.grid.methods.unselectRow(a, d, c, b) : ("single" === d.selectionType && c.siblings('[data-selected="true"]').each(function () {
                var b = $(this),
                    c = gj.grid.methods.getId(b, d.primaryKey, b.data("position"));
                gj.grid.methods.unselectRow(a, d, b, c)
            }), gj.grid.methods.selectRow(a, d, c, b))), a
        },
        selectAll: function (a) {
            var b = a.data();
            return a.find('tbody tr[data-role="row"]').each(function () {
                var c = $(this),
                    d = c.data("position"),
                    e = a.get(d),
                    f = gj.grid.methods.getId(e, b.primaryKey, d);
                gj.grid.methods.selectRow(a, b, c, f)
            }), a.find('thead input[data-role="selectAll"]').prop("checked", !0), a
        },
        unSelectAll: function (a) {
            var b = a.data();
            return a.find("tbody tr").each(function () {
                var c = $(this),
                    d = c.data("position"),
                    e = a.get(d),
                    f = gj.grid.methods.getId(e, b.primaryKey, d);
                gj.grid.methods.unselectRow(a, b, c, f), c.find('input[type="checkbox"][data-role="selectRow"]').prop("checked", !1)
            }), a.find('thead input[data-role="selectAll"]').prop("checked", !1), a
        },
        getSelected: function (a) {
            var b, c, d, e = null;
            return b = a.find('tbody>tr[data-selected="true"]'), b.length > 0 && (d = $(b[0]).data("position"), c = a.get(d), e = gj.grid.methods.getId(c, a.data().primaryKey, d)), e
        },
        getSelectedRows: function (a) {
            a.data();
            return a.find('tbody>tr[data-selected="true"]')
        },
        getSelections: function (a) {
            var b, c, d = [],
                e = a.data(),
                f = gj.grid.methods.getSelectedRows(a);
            return 0 < f.length && f.each(function () {
                b = $(this).data("position"), c = a.get(b), d.push(gj.grid.methods.getId(c, e.primaryKey, b))
            }), d
        },
        getById: function (a, b) {
            var c, d = null,
                e = a.data("primaryKey"),
                f = a.data("records");
            if (e) {
                for (c = 0; c < f.length; c++)
                    if (f[c][e] == b) {
                        d = f[c];
                        break
                    }
            } else d = a.get(b);
            return d
        },
        getRecVPosById: function (a, b) {
            var c, d = b,
                e = a.data();
            if (e.primaryKey)
                for (c = 0; c < e.dataSource.length; c++)
                    if (e.dataSource[c][e.primaryKey] == b) {
                        d = c;
                        break
                    } return d
        },
        getRowById: function (a, b) {
            var c, d, e = a.getAll(!1),
                f = a.data("primaryKey"),
                g = void 0;
            if (f) {
                for (d = 0; d < e.length; d++)
                    if (e[d][f] == b) {
                        c = d + 1;
                        break
                    }
            } else c = b;
            return c && (g = a.children("tbody").children('tr[data-position="' + c + '"]')), g
        },
        getByPosition: function (a, b) {
            return a.getAll(!1)[b - 1]
        },
        getColumnPosition: function (a, b) {
            var c, d = -1;
            for (c = 0; c < a.length; c++)
                if (a[c].field === b) {
                    d = c;
                    break
                } return d
        },
        getColumnInfo: function (a, b) {
            var c, d = {},
                e = a.data();
            for (c = 0; c < e.columns.length; c += 1)
                if (e.columns[c].field === b) {
                    d = e.columns[c];
                    break
                } return d
        },
        getCell: function (a, b, c) {
            var d, e, f = null;
            return d = gj.grid.methods.getColumnPosition(a.data("columns"), c), d > -1 && (e = gj.grid.methods.getRowById(a, b), f = e.find("td:eq(" + d + ') div[data-role="display"]')), f
        },
        setCellContent: function (a, b, c, d) {
            var e, f = gj.grid.methods.getCell(a, b, c);
            f && (f.empty(), "object" == typeof d ? f.append(d) : (e = gj.grid.methods.getColumnInfo(a, c), gj.grid.methods.renderDisplayElement(a, f, e, a.getById(b), b, "update")))
        },
        clone: function (a) {
            var b = [];
            return $.each(a, function () {
                b.push(this.clone())
            }), b
        },
        getAll: function (a) {
            return a.data("records")
        },
        countVisibleColumns: function (a) {
            var b, c, d;
            for (b = a.data().columns, c = 0, d = 0; d < b.length; d++) !0 !== b[d].hidden && c++;
            return c
        },
        clear: function (a, b) {
            var c = a.data();
            return a.xhr && a.xhr.abort(), a.children("tbody").empty(), c.records = [], gj.grid.methods.stopLoading(a), gj.grid.methods.appendEmptyRow(a, b ? c.notFoundText : "&nbsp;"), gj.grid.events.dataBound(a, [], 0), a
        },
        render: function (a, b) {
            return b && (gj.grid.methods.setRecordsData(a, b), gj.grid.methods.updateHeader(a), gj.grid.methods.loadData(a)), a
        },
        filter: function (a) {
            var b, c, d = a.data(),
                e = d.dataSource.slice();
            d.params[d.paramNames.sortBy] && (c = gj.grid.methods.getColumnInfo(a, d.params[d.paramNames.sortBy]), e.sort(c.sortable.sorter ? c.sortable.sorter(c.direction, c) : gj.grid.methods.createDefaultSorter(c.direction, c.field)));
            for (b in d.params) d.params[b] && !d.paramNames[b] && (c = gj.grid.methods.getColumnInfo(a, b), e = $.grep(e, function (a) {
                var e = a[b] || "",
                    f = d.params[b] || "";
                return c && "function" == typeof c.filter ? c.filter(e, f) : e.toUpperCase().indexOf(f.toUpperCase()) > -1
            }));
            return gj.grid.events.dataFiltered(a, e), e
        },
        createDefaultSorter: function (a, b) {
            return function (c, d) {
                var e = (c[b] || "").toString(),
                    f = (d[b] || "").toString();
                return "asc" === a ? e.localeCompare(f) : f.localeCompare(e)
            }
        },
        destroy: function (a, b, c) {
            return a.data() && (gj.grid.events.destroying(a), gj.grid.methods.stopLoading(a), a.xhr && a.xhr.abort(), a.off(), !1 === c && a.parent('div[data-role="wrapper"]').length > 0 && a.unwrap(), a.removeData(), !1 === b ? a.remove() : a.removeClass().empty(), a.removeAttr("data-type")), a
        },
        showColumn: function (a, b) {
            var c, d = a.data(),
                e = gj.grid.methods.getColumnPosition(d.columns, b);
            return e > -1 && (a.find("thead>tr").each(function () {
                $(this).children("th").eq(e).show()
            }), $.each(a.find("tbody>tr"), function () {
                $(this).children("td").eq(e).show()
            }), d.columns[e].hidden = !1, c = a.find('tbody > tr[data-role="empty"] > td'), c && c.length && c.attr("colspan", gj.grid.methods.countVisibleColumns(a)), gj.grid.events.columnShow(a, d.columns[e])), a
        },
        hideColumn: function (a, b) {
            var c, d = a.data(),
                e = gj.grid.methods.getColumnPosition(d.columns, b);
            return e > -1 && (a.find("thead>tr").each(function () {
                $(this).children("th").eq(e).hide()
            }), $.each(a.find("tbody>tr"), function () {
                $(this).children("td").eq(e).hide()
            }), d.columns[e].hidden = !0, c = a.find('tbody > tr[data-role="empty"] > td'), c && c.length && c.attr("colspan", gj.grid.methods.countVisibleColumns(a)), gj.grid.events.columnHide(a, d.columns[e])), a
        },
        isLastRecordVisible: function () {
            return !0
        },
        addRow: function (a, b) {
            var c = a.data();
            return c.totalRecords = a.data("totalRecords") + 1, gj.grid.events.dataBinding(a, [b]), c.records.push(b), $.isArray(c.dataSource) && c.dataSource.push(b), 1 === c.totalRecords && a.children("tbody").empty(), gj.grid.methods.isLastRecordVisible(a) && gj.grid.methods.renderRow(a, null, b, a.count() - 1), gj.grid.events.dataBound(a, [b], c.totalRecords), a
        },
        updateRow: function (a, b, c) {
            var d, e = gj.grid.methods.getRowById(a, b),
                f = a.data();
            return f.records[e.data("position") - 1] = c, $.isArray(f.dataSource) && (d = gj.grid.methods.getRecVPosById(a, b), f.dataSource[d] = c), gj.grid.methods.renderRow(a, e, c, e.index()), a
        },
        removeRow: function (a, b) {
            var c, d = a.data(),
                e = gj.grid.methods.getRowById(a, b);
            return gj.grid.events.rowRemoving(a, e, b, a.getById(b)), $.isArray(d.dataSource) && (c = gj.grid.methods.getRecVPosById(a, b), d.dataSource.splice(c, 1)), a.reload(), a
        },
        count: function (a, b) {
            return b ? a.data().totalRecords : a.getAll().length
        },
        getColumnPositionByRole: function (a, b) {
            var c, d, e = a.data("columns");
            for (c = 0; c < e.length; c++)
                if (e[c].role === b) {
                    d = c;
                    break
                } return d
        },
        getColumnPositionNotInRole: function (a) {
            var b, c = 0,
                d = a.data("columns");
            for (b = 0; b < d.length; b++)
                if (!d[b].role) {
                    c = b;
                    break
                } return c
        }
    }, gj.grid.widget = function (a, b) {
        var c = this,
            d = gj.grid.methods;
        return c.reload = function (a) {
            return d.startLoading(this), gj.widget.prototype.reload.call(this, a)
        }, c.clear = function (a) {
            return d.clear(this, a)
        }, c.count = function (a) {
            return d.count(this, a)
        }, c.render = function (b) {
            return d.render(a, b)
        }, c.destroy = function (a, b) {
            return d.destroy(this, a, b)
        }, c.setSelected = function (a) {
            return d.setSelected(this, a)
        }, c.getSelected = function () {
            return d.getSelected(this)
        }, c.getSelections = function () {
            return d.getSelections(this)
        }, c.selectAll = function () {
            return d.selectAll(this)
        }, c.unSelectAll = function () {
            return d.unSelectAll(this)
        }, c.getById = function (a) {
            return d.getById(this, a)
        }, c.get = function (a) {
            return d.getByPosition(this, a)
        }, c.getAll = function (a) {
            return d.getAll(this, a)
        }, c.showColumn = function (a) {
            return d.showColumn(this, a)
        }, c.hideColumn = function (a) {
            return d.hideColumn(this, a)
        }, c.addRow = function (a) {
            return d.addRow(this, a)
        }, c.updateRow = function (a, b) {
            return d.updateRow(this, a, b)
        }, c.setCellContent = function (a, b, c) {
            d.setCellContent(this, a, b, c)
        }, c.removeRow = function (a) {
            return d.removeRow(this, a)
        }, $.extend(a, c), "grid" !== a.attr("data-type") && d.init.call(a, b), a
    }, gj.grid.widget.prototype = new gj.widget, gj.grid.widget.constructor = gj.grid.widget, gj.grid.widget.prototype.getConfig = gj.grid.methods.getConfig, gj.grid.widget.prototype.getHTMLConfig = gj.grid.methods.getHTMLConfig,
    function (a) {
        a.fn.grid = function (a) {
            var b;
            if (this && this.length) {
                if ("object" != typeof a && a) {
                    if (b = new gj.grid.widget(this, null), b[a]) return b[a].apply(this, Array.prototype.slice.call(arguments, 1));
                    throw "Method " + a + " does not exist."
                }
                return new gj.grid.widget(this, a)
            }
        }
    }(jQuery), gj.grid.plugins.fixedHeader = {
        config: {
            base: {
                fixedHeader: !1,
                height: 300
            }
        },
        private: {
            init: function (a) {
                var b = a.data(),
                    c = a.children("tbody"),
                    d = a.children("thead"),
                    e = b.height - d.outerHeight() - (a.children("tfoot").outerHeight() || 0);
                a.addClass("gj-grid-scrollable"), c.css("width", d.outerWidth()), c.height(e)
            },
            refresh: function (a) {
                var b, c, d = (a.data(), a.children("tbody")),
                    e = a.children("thead"),
                    f = a.find('tbody tr[data-role="row"] td'),
                    g = a.find('thead tr[data-role="caption"] th');
                for (a.children("tbody").height() < gj.grid.plugins.fixedHeader.private.getRowsHeight(a) ? d.css("width", e.outerWidth() + gj.grid.plugins.fixedHeader.private.getScrollBarWidth() + (navigator.userAgent.toLowerCase().indexOf("firefox") > -1 ? 1 : 0)) : d.css("width", e.outerWidth()), b = 0; b < g.length; b++) c = $(g[b]).outerWidth(), 0 === b && gj.core.isIE() && (c -= 1), $(f[b]).attr("width", c)
            },
            getRowsHeight: function (a) {
                var b = 0;
                return a.find("tbody tr").each(function () {
                    b += $(this).height()
                }), b
            },
            getScrollBarWidth: function () {
                var a = document.createElement("p");
                a.style.width = "100%", a.style.height = "200px";
                var b = document.createElement("div");
                b.style.position = "absolute", b.style.top = "0px", b.style.left = "0px", b.style.visibility = "hidden", b.style.width = "200px", b.style.height = "150px", b.style.overflow = "hidden", b.appendChild(a), document.body.appendChild(b);
                var c = a.offsetWidth;
                b.style.overflow = "scroll";
                var d = a.offsetWidth;
                return c == d && (d = b.clientWidth), document.body.removeChild(b), c - d
            }
        },
        public: {},
        events: {},
        configure: function (a, b, c) {
            $.extend(!0, a, gj.grid.plugins.fixedHeader.public);
            a.data();
            c.fixedHeader && (a.on("initialized", function () {
                gj.grid.plugins.fixedHeader.private.init(a)
            }), a.on("dataBound", function () {
                gj.grid.plugins.fixedHeader.private.refresh(a)
            }), a.on("resize", function () {
                gj.grid.plugins.fixedHeader.private.refresh(a)
            }))
        }
    }, gj.grid.plugins.expandCollapseRows = {
        config: {
            base: {
                detailTemplate: void 0,
                keepExpandedRows: !0,
                expandedRows: [],
                icons: {
                    expandRow: '<i class="gj-icon chevron-right" />',
                    collapseRow: '<i class="gj-icon chevron-down" />'
                }
            },
            fontawesome: {
                icons: {
                    expandRow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
                    collapseRow: '<i class="fa fa-angle-down" aria-hidden="true"></i>'
                }
            },
            glyphicons: {
                icons: {
                    expandRow: '<span class="glyphicon glyphicon-chevron-right" />',
                    collapseRow: '<span class="glyphicon glyphicon-chevron-down" />'
                }
            }
        },
        private: {
            expandDetail: function (a, b, c) {
                var d = b.closest("tr"),
                    e = $('<tr data-role="details" />'),
                    f = $('<td colspan="' + gj.grid.methods.countVisibleColumns(a) + '" />'),
                    g = $('<div data-role="display" />'),
                    h = a.data(),
                    i = d.data("position"),
                    j = a.get(i),
                    k = gj.grid.plugins.expandCollapseRows;
                void 0 === typeof c && (c = gj.grid.methods.getId(j, h.primaryKey, j)), e.append(f.append(g.append(d.data("details")))), e.insertAfter(d), b.children('div[data-role="display"]').empty().append(h.icons.collapseRow), a.updateDetails(d), k.private.keepSelection(a, c), k.events.detailExpand(a, e.find("td>div"), c)
            },
            collapseDetail: function (a, b, c) {
                var d = b.closest("tr"),
                    e = d.next('tr[data-role="details"]'),
                    f = a.data(),
                    g = gj.grid.plugins.expandCollapseRows;
                void 0 === typeof c && (c = gj.grid.methods.getId(record, f.primaryKey, record)), e.remove(), b.children('div[data-role="display"]').empty().append(f.icons.expandRow), g.private.removeSelection(a, c), g.events.detailCollapse(a, e.find("td>div"), c)
            },
            keepSelection: function (a, b) {
                var c = a.data();
                c.keepExpandedRows && ($.isArray(c.expandedRows) ? -1 == c.expandedRows.indexOf(b) && c.expandedRows.push(b) : c.expandedRows = [b])
            },
            removeSelection: function (a, b) {
                var c = a.data();
                c.keepExpandedRows && $.isArray(c.expandedRows) && c.expandedRows.indexOf(b) > -1 && c.expandedRows.splice(c.expandedRows.indexOf(b), 1)
            },
            updateDetailsColSpan: function (a) {
                var b = a.find('tbody > tr[data-role="details"] > td');
                b && b.length && b.attr("colspan", gj.grid.methods.countVisibleColumns(a))
            }
        },
        public: {
            collapseAll: function () {
                var a, b = this,
                    c = b.data();
                return void 0 !== c.detailTemplate && (a = gj.grid.methods.getColumnPositionByRole(b, "expander"), b.find('tbody tr[data-role="row"]').each(function () {
                    gj.grid.plugins.expandCollapseRows.private.collapseDetail(b, $(this).find("td:eq(" + a + ")"))
                })), void 0 !== c.grouping && b.find('tbody tr[role="group"]').each(function () {
                    gj.grid.plugins.grouping.private.collapseGroup(c, $(this).find("td:eq(0)"))
                }), b
            },
            expandAll: function () {
                var a, b = this,
                    c = b.data();
                return void 0 !== c.detailTemplate && (a = gj.grid.methods.getColumnPositionByRole(b, "expander"), b.find('tbody tr[data-role="row"]').each(function () {
                    gj.grid.plugins.expandCollapseRows.private.expandDetail(b, $(this).find("td:eq(" + a + ")"))
                })), void 0 !== c.grouping && b.find('tbody tr[role="group"]').each(function () {
                    gj.grid.plugins.grouping.private.expandGroup(c, $(this).find("td:eq(0)"))
                }), b
            },
            updateDetails: function (a) {
                var b = this,
                    c = a.data("details"),
                    d = c.html(),
                    e = b.get(a.data("position"));
                return e && d && (c.html().replace(/\{(.+?)\}/g, function (a, c) {
                    var f = gj.grid.methods.getColumnInfo(b, c);
                    d = d.replace(a, gj.grid.methods.formatText(e[c], f))
                }), c.html(d)), b
            }
        },
        events: {
            detailExpand: function (a, b, c) {
                a.triggerHandler("detailExpand", [b, c])
            },
            detailCollapse: function (a, b, c) {
                a.triggerHandler("detailCollapse", [b, c])
            }
        },
        configure: function (a) {
            var b, c = a.data();
            $.extend(!0, a, gj.grid.plugins.expandCollapseRows.public), void 0 !== c.detailTemplate && (b = {
                title: "",
                width: c.defaultIconColumnWidth,
                align: "center",
                stopPropagation: !0,
                cssClass: "gj-cursor-pointer gj-unselectable",
                tmpl: c.icons.expandRow,
                role: "expander",
                events: {
                    click: function (b) {
                        var c = $(this),
                            d = gj.grid.plugins.expandCollapseRows.private;
                        "details" === c.closest("tr").next().attr("data-role") ? d.collapseDetail(a, c, b.data.id) : d.expandDetail(a, $(this), b.data.id)
                    }
                }
            }, c.columns = [b].concat(c.columns), a.on("rowDataBound", function (a, b, d, e) {
                b.data("details", $(c.detailTemplate))
            }), a.on("columnShow", function (b, c) {
                gj.grid.plugins.expandCollapseRows.private.updateDetailsColSpan(a)
            }), a.on("columnHide", function (b, c) {
                gj.grid.plugins.expandCollapseRows.private.updateDetailsColSpan(a)
            }), a.on("rowRemoving", function (b, c, d, e) {
                gj.grid.plugins.expandCollapseRows.private.collapseDetail(a, c.children("td").first(), d)
            }), a.on("dataBinding", function () {
                a.collapseAll()
            }), a.on("pageChanging", function () {
                a.collapseAll()
            }), a.on("dataBound", function () {
                var b, c, d, e, f = a.data();
                if (f.keepExpandedRows && $.isArray(f.expandedRows))
                    for (b = 0; b < f.expandedRows.length; b++)(d = gj.grid.methods.getRowById(a, f.expandedRows[b])) && d.length && (e = gj.grid.methods.getColumnPositionByRole(a, "expander"), (c = d.children("td:eq(" + e + ")")) && c.length && gj.grid.plugins.expandCollapseRows.private.expandDetail(a, c))
            }))
        }
    }, gj.grid.plugins.inlineEditing = {
        renderers: {
            editManager: function (a, b, c, d, e, f) {
                var g = f.data(),
                    h = $(g.inlineEditing.editButton).attr("key", e),
                    i = $(g.inlineEditing.deleteButton).attr("key", e),
                    j = $(g.inlineEditing.updateButton).attr("key", e).hide(),
                    k = $(g.inlineEditing.cancelButton).attr("key", e).hide();
                h.on("click", function (a) {
                    f.edit($(this).attr("key"))
                }), i.on("click", function (a) {
                    f.removeRow($(this).attr("key"))
                }), j.on("click", function (a) {
                    f.update($(this).attr("key"))
                }), k.on("click", function (a) {
                    f.cancel($(this).attr("key"))
                }), d.empty().append(h).append(i).append(j).append(k)
            }
        }
    }, gj.grid.plugins.inlineEditing.config = {
        base: {
            defaultColumnSettings: {
                editor: void 0,
                editField: void 0,
                mode: "readEdit"
            },
            inlineEditing: {
                mode: "click",
                managementColumn: !0,
                managementColumnConfig: {
                    width: 300,
                    role: "managementColumn",
                    align: "center",
                    renderer: gj.grid.plugins.inlineEditing.renderers.editManager,
                    cssClass: "gj-grid-management-column"
                }
            }
        },
        bootstrap: {
            inlineEditing: {
                managementColumnConfig: {
                    width: 200,
                    role: "managementColumn",
                    align: "center",
                    renderer: gj.grid.plugins.inlineEditing.renderers.editManager,
                    cssClass: "gj-grid-management-column"
                }
            }
        },
        bootstrap4: {
            inlineEditing: {
                managementColumnConfig: {
                    width: 280,
                    role: "managementColumn",
                    align: "center",
                    renderer: gj.grid.plugins.inlineEditing.renderers.editManager,
                    cssClass: "gj-grid-management-column"
                }
            }
        }
    }, gj.grid.plugins.inlineEditing.private = {
        localization: function (a) {
            "bootstrap" === a.uiLibrary ? (a.inlineEditing.editButton = '<button role="edit" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> ' + gj.grid.messages[a.locale].Edit + "</button>", a.inlineEditing.deleteButton = '<button role="delete" class="btn btn-default btn-sm gj-margin-left-10"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> ' + gj.grid.messages[a.locale].Delete + "</button>", a.inlineEditing.updateButton = '<button role="update" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> ' + gj.grid.messages[a.locale].Update + "</button>", a.inlineEditing.cancelButton = '<button role="cancel" class="btn btn-default btn-sm gj-margin-left-10"><span class="glyphicon glyphicon-ban-circle" aria-hidden="true"></span> ' + gj.grid.messages[a.locale].Cancel + "</button>") : (a.inlineEditing.editButton = '<button role="edit" class="gj-button-md"><i class="gj-icon pencil" /> ' + gj.grid.messages[a.locale].Edit.toUpperCase() + "</button>", a.inlineEditing.deleteButton = '<button role="delete" class="gj-button-md"><i class="gj-icon delete" /> ' + gj.grid.messages[a.locale].Delete.toUpperCase() + "</button>", a.inlineEditing.updateButton = '<button role="update" class="gj-button-md"><i class="gj-icon check-circle" /> ' + gj.grid.messages[a.locale].Update.toUpperCase() + "</button>", a.inlineEditing.cancelButton = '<button role="cancel" class="gj-button-md"><i class="gj-icon cancel" /> ' + gj.grid.messages[a.locale].Cancel.toUpperCase() + "</button>")
        },
        editMode: function (a, b, c, d) {
            var e, f, g, h, i, j = a.data();
            if ("edit" !== b.attr("data-mode"))
                if (c.editor) {
                    if (gj.grid.plugins.inlineEditing.private.updateOtherCells(a, c.mode), e = b.find('div[data-role="display"]').hide(), f = b.find('div[data-role="edit"]').show(), 0 === f.length && (f = $('<div data-role="edit" />'), b.append(f)), h = d[c.editField || c.field], g = f.find("input, select, textarea").first(), g.length) switch (c.type) {
                        case "checkbox":
                            g.prop("checked", h);
                            break;
                        case "dropdown":
                            g = g.dropdown("value", h);
                            break;
                        default:
                            g.val(h)
                    } else {
                        if ("function" == typeof c.editor) c.editor(f, h, d), g = f.find("input, select, textarea").first();
                        else if (i = "object" == typeof c.editor ? c.editor : {}, i.uiLibrary = j.uiLibrary, i.iconsLibrary = j.iconsLibrary, i.fontSize = a.css("font-size"), i.showOnFocus = !1, "checkbox" === c.type && gj.checkbox) g = $('<input type="checkbox" />').prop("checked", h), f.append(g), g.checkbox(i);
                        else if ("date" === c.type && gj.datepicker || "time" === c.type && gj.timepicker || "datetime" === c.type && gj.datetimepicker) {
                            switch (g = $('<input type="text" width="100%"/>'), f.append(g), c.format && (i.format = c.format), c.type) {
                                case "date":
                                    g = g.datepicker(i);
                                    break;
                                case "time":
                                    g = g.timepicker(i);
                                    break;
                                case "datetime":
                                    g = g.datetimepicker(i)
                            }
                            g.value && g.value(e.html())
                        } else "dropdown" === c.type && gj.dropdown ? (g = $('<select type="text" width="100%"/>'), f.append(g), i.dataBound = function (a) {
                            var b = $(this).dropdown();
                            c.editField ? b.value(d[c.editField]) : b.value(d[c.field])
                        }, g = g.dropdown(i)) : (g = $('<input type="text" value="' + h + '" class="gj-width-full"/>'), "materialdesign" === j.uiLibrary && g.addClass("gj-textbox-md").css("font-size", a.css("font-size")), f.append(g));
                        "command" !== j.inlineEditing.mode && "editOnly" !== c.mode && (g = f.find("input, select, textarea").first(), g.on("keyup", function (d) {
                            13 !== d.keyCode && 27 !== d.keyCode || gj.grid.plugins.inlineEditing.private.displayMode(a, b, c)
                        }))
                    }
                    "INPUT" === g.prop("tagName").toUpperCase() && "TEXT" === g.prop("type").toUpperCase() ? gj.core.setCaretAtEnd(g[0]) : g.focus(), b.attr("data-mode", "edit")
                } else "managementColumn" === c.role && (b.find('[role="edit"]').hide(), b.find('[role="delete"]').hide(), b.find('[role="update"]').show(), b.find('[role="cancel"]').show())
        },
        displayMode: function (a, b, c, d) {
            var e, f, g, h, i, j, k;
            "editOnly" !== c.mode && ("edit" === b.attr("data-mode") && (e = b.find('div[data-role="edit"]'), f = b.find('div[data-role="display"]'), g = e.find("input, select, textarea").first(), "SELECT" === g[0].tagName.toUpperCase() && g[0].selectedIndex > -1 ? (h = g[0].options[g[0].selectedIndex].innerHTML, i = g[0].value) : h = "INPUT" === g[0].tagName.toUpperCase() && "CHECKBOX" === g[0].type.toUpperCase() ? g[0].checked : g.val(), k = b.parent().data("position"), j = a.get(k), !0 !== d && h !== j[c.field] && (j[c.field] = "date" === c.type ? gj.core.parseDate(h, c.format) : h, c.editField && (j[c.editField] = i || h), "editOnly" !== c.mode && (gj.grid.methods.renderDisplayElement(a, f, c, j, gj.grid.methods.getId(j, a.data("primaryKey"), k), "update"), 0 === b.find("span.gj-dirty").length && b.prepend($('<span class="gj-dirty" />'))), gj.grid.plugins.inlineEditing.events.cellDataChanged(a, b, c, j, h), gj.grid.plugins.inlineEditing.private.updateChanges(a, c, j, h)), e.hide(), f.show(), b.attr("data-mode", "display")), "managementColumn" === c.role && (b.find('[role="update"]').hide(), b.find('[role="cancel"]').hide(), b.find('[role="edit"]').show(), b.find('[role="delete"]').show()))
        },
        updateOtherCells: function (a, b) {
            var c = a.data();
            "command" !== c.inlineEditing.mode && "editOnly" !== b && a.find('div[data-role="edit"]:visible').parent("td").each(function () {
                var b = $(this),
                    d = c.columns[b.index()];
                gj.grid.plugins.inlineEditing.private.displayMode(a, b, d)
            })
        },
        updateChanges: function (a, b, c, d) {
            var e, f, g, h = a.data();
            h.guid || (h.guid = gj.grid.plugins.inlineEditing.private.generateGUID()), h.primaryKey && (e = JSON.parse(sessionStorage.getItem("gj.grid." + h.guid)), e ? f = e.filter(function (a) {
                return a[h.primaryKey] === c[h.primaryKey]
            }) : e = [], f && 1 === f.length ? f[0][b.field] = d : (g = {}, g[h.primaryKey] = c[h.primaryKey], h.primaryKey !== b.field && (g[b.field] = d), e.push(g)), sessionStorage.setItem("gj.grid." + h.guid, JSON.stringify(e)))
        },
        generateGUID: function () {
            function a() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
        }
    }, gj.grid.plugins.inlineEditing.public = {
        getChanges: function () {
            return JSON.parse(sessionStorage.getItem("gj.grid." + this.data().guid))
        },
        edit: function (a) {
            var b, c = this.getById(a),
                d = gj.grid.methods.getRowById(this, a).children("td"),
                e = this.data("columns");
            for (b = 0; b < d.length; b++) gj.grid.plugins.inlineEditing.private.editMode(this, $(d[b]), e[b], c);
            return this
        },
        update: function (a) {
            var b, c = this.getById(a),
                d = gj.grid.methods.getRowById(this, a).children("td"),
                e = this.data("columns");
            for (b = 0; b < d.length; b++) gj.grid.plugins.inlineEditing.private.displayMode(this, $(d[b]), e[b], !1);
            return gj.grid.plugins.inlineEditing.events.rowDataChanged(this, a, c), this
        },
        cancel: function (a) {
            var b, c = (this.getById(a), gj.grid.methods.getRowById(this, a).children("td")),
                d = this.data("columns");
            for (b = 0; b < c.length; b++) gj.grid.plugins.inlineEditing.private.displayMode(this, $(c[b]), d[b], !0);
            return this
        }
    }, gj.grid.plugins.inlineEditing.events = {
        cellDataChanged: function (a, b, c, d, e, f) {
            a.triggerHandler("cellDataChanged", [b, c, d, e, f])
        },
        rowDataChanged: function (a, b, c) {
            a.triggerHandler("rowDataChanged", [b, c])
        }
    }, gj.grid.plugins.inlineEditing.configure = function (a, b, c) {
        var d = a.data();
        $.extend(!0, a, gj.grid.plugins.inlineEditing.public), c.inlineEditing && (a.on("dataBound", function () {
            a.find("span.gj-dirty").remove()
        }), a.on("rowDataBound", function (b, c, d, e) {
            a.cancel(d)
        })), "command" === d.inlineEditing.mode ? (gj.grid.plugins.inlineEditing.private.localization(d), b.inlineEditing.managementColumn && d.columns.push(b.inlineEditing.managementColumnConfig)) : a.on("cellDataBound", function (b, c, e, f, g) {
            f.editor && ("editOnly" === f.mode ? gj.grid.plugins.inlineEditing.private.editMode(a, c.parent(), f, g) : c.parent("td").on("dblclick" === d.inlineEditing.mode ? "dblclick" : "click", function () {
                gj.grid.plugins.inlineEditing.private.editMode(a, c.parent(), f, g)
            }))
        })
    }, gj.grid.plugins.optimisticPersistence = {
        config: {
            base: {
                optimisticPersistence: {
                    localStorage: void 0,
                    sessionStorage: void 0
                }
            }
        },
        private: {
            applyParams: function (a) {
                var b, c = a.data(),
                    d = {};
                b = JSON.parse(sessionStorage.getItem("gj.grid." + c.guid)), b && b.optimisticPersistence && $.extend(d, b.optimisticPersistence), b = JSON.parse(localStorage.getItem("gj.grid." + c.guid)), b && b.optimisticPersistence && $.extend(d, b.optimisticPersistence), $.extend(c.params, d)
            },
            saveParams: function (a) {
                var b, c, d = a.data(),
                    e = {
                        optimisticPersistence: {}
                    };
                if (d.optimisticPersistence.sessionStorage) {
                    for (b = 0; b < d.optimisticPersistence.sessionStorage.length; b++) c = d.optimisticPersistence.sessionStorage[b], e.optimisticPersistence[c] = d.params[c];
                    e = $.extend(!0, JSON.parse(sessionStorage.getItem("gj.grid." + d.guid)), e), sessionStorage.setItem("gj.grid." + d.guid, JSON.stringify(e))
                }
                if (d.optimisticPersistence.localStorage) {
                    for (e = {
                            optimisticPersistence: {}
                        }, b = 0; b < d.optimisticPersistence.localStorage.length; b++) c = d.optimisticPersistence.localStorage[b], e.optimisticPersistence[c] = d.params[c];
                    e = $.extend(!0, JSON.parse(localStorage.getItem("gj.grid." + d.guid)), e), localStorage.setItem("gj.grid." + d.guid, JSON.stringify(e))
                }
            }
        },
        configure: function (a, b, c) {
            b.guid && (b.optimisticPersistence.localStorage || b.optimisticPersistence.sessionStorage) && (gj.grid.plugins.optimisticPersistence.private.applyParams(a), a.on("dataBound", function (b) {
                gj.grid.plugins.optimisticPersistence.private.saveParams(a)
            }))
        }
    }, gj.grid.plugins.pagination = {
        config: {
            base: {
                style: {
                    pager: {
                        panel: "",
                        stateDisabled: "",
                        activeButton: ""
                    }
                },
                paramNames: {
                    page: "page",
                    limit: "limit"
                },
                pager: {
                    limit: 10,
                    sizes: [5, 10, 20, 100],
                    leftControls: void 0,
                    rightControls: void 0
                }
            },
            bootstrap: {
                style: {
                    pager: {
                        panel: "",
                        stateDisabled: ""
                    }
                }
            },
            bootstrap4: {
                style: {
                    pager: {
                        panel: "btn-toolbar",
                        stateDisabled: ""
                    }
                }
            },
            glyphicons: {
                icons: {
                    first: '<span class="glyphicon glyphicon-step-backward"></span>',
                    previous: '<span class="glyphicon glyphicon-backward"></span>',
                    next: '<span class="glyphicon glyphicon-forward"></span>',
                    last: '<span class="glyphicon glyphicon-step-forward"></span>',
                    refresh: '<span class="glyphicon glyphicon-refresh"></span>'
                }
            },
            materialicons: {
                icons: {
                    first: '<i class="gj-icon first-page" />',
                    previous: '<i class="gj-icon chevron-left" />',
                    next: '<i class="gj-icon chevron-right" />',
                    last: '<i class="gj-icon last-page" />',
                    refresh: '<i class="gj-icon refresh" />'
                }
            },
            fontawesome: {
                icons: {
                    first: '<i class="fa fa-fast-backward" aria-hidden="true"></i>',
                    previous: '<i class="fa fa-backward" aria-hidden="true"></i>',
                    next: '<i class="fa fa-forward" aria-hidden="true"></i>',
                    last: '<i class="fa fa-fast-forward" aria-hidden="true"></i>',
                    refresh: '<i class="fa fa-refresh" aria-hidden="true"></i>'
                }
            }
        },
        private: {
            init: function (a) {
                var b, c, d, e, f, g, h, i, j, k;
                if (d = a.data(), d.pager)
                    for (d.params[d.paramNames.page] || (d.params[d.paramNames.page] = 1), d.params[d.paramNames.limit] || (d.params[d.paramNames.limit] = d.pager.limit), gj.grid.plugins.pagination.private.localization(d), b = $('<tr data-role="pager"/>'), c = $("<th/>"), b.append(c), f = $('<div data-role="display" />').addClass(d.style.pager.panel).css({
                            float: "left"
                        }), g = $('<div data-role="display" />').addClass(d.style.pager.panel).css({
                            float: "right"
                        }), c.append(f).append(g), h = $("<tfoot />").append(b), a.append(h), gj.grid.plugins.pagination.private.updatePagerColSpan(a), i = gj.grid.methods.clone(d.pager.leftControls), $.each(i, function () {
                            f.append(this)
                        }), j = gj.grid.methods.clone(d.pager.rightControls), $.each(j, function () {
                            g.append(this)
                        }), e = a.find("tfoot [data-role]"), k = 0; k < e.length; k++) gj.grid.plugins.pagination.private.initPagerControl($(e[k]), a)
            },
            localization: function (a) {
                "bootstrap" === a.uiLibrary ? gj.grid.plugins.pagination.private.localizationBootstrap(a) : "bootstrap4" === a.uiLibrary ? gj.grid.plugins.pagination.private.localizationBootstrap4(a) : gj.grid.plugins.pagination.private.localizationMaterialDesign(a)
            },
            localizationBootstrap: function (a) {
                var b = gj.grid.messages[a.locale];
                void 0 === a.pager.leftControls && (a.pager.leftControls = [$('<button type="button" class="btn btn-default btn-sm">' + (a.icons.first || b.First) + "</button>").attr("title", b.FirstPageTooltip).attr("data-role", "page-first"), $('<button type="button" class="btn btn-default btn-sm">' + (a.icons.previous || b.Previous) + "</button>").attr("title", b.PreviousPageTooltip).attr("data-role", "page-previous"), $("<div>" + b.Page + "</div>"), $('<input data-role="page-number" class="form-control input-sm" type="text" value="0">'), $("<div>" + b.Of + "</div>"), $('<div data-role="page-label-last">0</div>'), $('<button type="button" class="btn btn-default btn-sm">' + (a.icons.next || b.Next) + "</button>").attr("title", b.NextPageTooltip).attr("data-role", "page-next"), $('<button type="button" class="btn btn-default btn-sm">' + (a.icons.last || b.Last) + "</button>").attr("title", b.LastPageTooltip).attr("data-role", "page-last"), $('<button type="button" class="btn btn-default btn-sm">' + (a.icons.refresh || b.Refresh) + "</button>").attr("title", b.Refresh).attr("data-role", "page-refresh"), $('<select data-role="page-size" class="form-control input-sm" width="60"></select>')]), void 0 === a.pager.rightControls && (a.pager.rightControls = [$("<div>" + b.DisplayingRecords + "</div>"), $('<div data-role="record-first">0</div>'), $("<div>-</div>"), $('<div data-role="record-last">0</div>'), $("<div>" + b.Of + "</div>"), $('<div data-role="record-total">0</div>')])
            },
            localizationBootstrap4: function (a) {
                var b = gj.grid.messages[a.locale];
                void 0 === a.pager.leftControls && (a.pager.leftControls = [$('<button class="btn btn-default btn-sm gj-cursor-pointer">' + (a.icons.first || b.First) + "</button>").attr("title", b.FirstPageTooltip).attr("data-role", "page-first"), $('<button class="btn btn-default btn-sm gj-cursor-pointer">' + (a.icons.previous || b.Previous) + "</button>").attr("title", b.PreviousPageTooltip).attr("data-role", "page-previous"), $("<div>" + b.Page + "</div>"), $('<div class="input-group"><input data-role="page-number" class="form-control form-control-sm" type="text" value="0"></div>'), $("<div>" + b.Of + "</div>"), $('<div data-role="page-label-last">0</div>'), $('<button class="btn btn-default btn-sm gj-cursor-pointer">' + (a.icons.next || b.Next) + "</button>").attr("title", b.NextPageTooltip).attr("data-role", "page-next"), $('<button class="btn btn-default btn-sm gj-cursor-pointer">' + (a.icons.last || b.Last) + "</button>").attr("title", b.LastPageTooltip).attr("data-role", "page-last"), $('<button class="btn btn-default btn-sm gj-cursor-pointer">' + (a.icons.refresh || b.Refresh) + "</button>").attr("title", b.Refresh).attr("data-role", "page-refresh"), $('<select data-role="page-size" class="form-control input-sm" width="60"></select>')]), void 0 === a.pager.rightControls && (a.pager.rightControls = [$("<div>" + b.DisplayingRecords + "&nbsp;</div>"), $('<div data-role="record-first">0</div>'), $("<div>-</div>"), $('<div data-role="record-last">0</div>'), $("<div>" + b.Of + "</div>"), $('<div data-role="record-total">0</div>')])
            },
            localizationMaterialDesign: function (a) {
                var b = gj.grid.messages[a.locale];
                void 0 === a.pager.leftControls && (a.pager.leftControls = []), void 0 === a.pager.rightControls && (a.pager.rightControls = [$('<span class="">' + b.RowsPerPage + "</span>"), $('<select data-role="page-size" class="gj-grid-md-limit-select" width="52"></select></div>'), $('<span class="gj-md-spacer-32">&nbsp;</span>'), $('<span data-role="record-first" class="">0</span>'), $('<span class="">-</span>'), $('<span data-role="record-last" class="">0</span>'), $('<span class="gj-grid-mdl-pager-label">' + b.Of + "</span>"), $('<span data-role="record-total" class="">0</span>'), $('<span class="gj-md-spacer-32">&nbsp;</span>'), $('<button class="gj-button-md">' + (a.icons.previous || b.Previous) + "</button>").attr("title", b.PreviousPageTooltip).attr("data-role", "page-previous").addClass(a.icons.first ? "gj-button-md-icon" : ""), $('<span class="gj-md-spacer-24">&nbsp;</span>'), $('<button class="gj-button-md">' + (a.icons.next || b.Next) + "</button>").attr("title", b.NextPageTooltip).attr("data-role", "page-next").addClass(a.icons.first ? "gj-button-md-icon" : "")])
            },
            initPagerControl: function (a, b) {
                var c = b.data();
                switch (a.data("role")) {
                    case "page-size":
                        c.pager.sizes && 0 < c.pager.sizes.length ? (a.show(), $.each(c.pager.sizes, function () {
                            a.append($("<option/>").attr("value", this.toString()).text(this.toString()))
                        }), a.change(function () {
                            var a = parseInt(this.value, 10);
                            c.params[c.paramNames.limit] = a, gj.grid.plugins.pagination.private.changePage(b, 1), gj.grid.plugins.pagination.events.pageSizeChange(b, a)
                        }), a.val(c.params[c.paramNames.limit]), gj.dropdown && a.dropdown({
                            uiLibrary: c.uiLibrary,
                            iconsLibrary: c.iconsLibrary,
                            fontSize: a.css("font-size"),
                            style: {
                                presenter: "btn btn-default btn-sm"
                            }
                        })) : a.hide();
                        break;
                    case "page-refresh":
                        a.on("click", function () {
                            b.reload()
                        })
                }
            },
            reloadPager: function (a, b) {
                var c, d, e, f, g, h, i, j;
                if (h = a.data(), h.pager) {
                    for (c = 0 === b ? 0 : parseInt(h.params[h.paramNames.page], 10), d = parseInt(h.params[h.paramNames.limit], 10), e = Math.ceil(b / d), f = 0 === c ? 0 : d * (c - 1) + 1, g = f + d > b ? b : f + d - 1, i = a.find("TFOOT [data-role]"), j = 0; j < i.length; j++) gj.grid.plugins.pagination.private.reloadPagerControl($(i[j]), a, c, e, f, g, b);
                    gj.grid.plugins.pagination.private.updatePagerColSpan(a)
                }
            },
            reloadPagerControl: function (a, b, c, d, e, f, g) {
                var h;
                switch (a.data("role")) {
                    case "page-first":
                        gj.grid.plugins.pagination.private.assignPageHandler(b, a, 1, c < 2);
                        break;
                    case "page-previous":
                        gj.grid.plugins.pagination.private.assignPageHandler(b, a, c - 1, c < 2);
                        break;
                    case "page-number":
                        a.val(c).off("change").on("change", gj.grid.plugins.pagination.private.createChangePageHandler(b, c));
                        break;
                    case "page-label-last":
                        a.text(d);
                        break;
                    case "page-next":
                        gj.grid.plugins.pagination.private.assignPageHandler(b, a, c + 1, d === c);
                        break;
                    case "page-last":
                        gj.grid.plugins.pagination.private.assignPageHandler(b, a, d, d === c);
                        break;
                    case "page-button-one":
                        h = 1 === c ? 1 : c == d ? c - 2 : c - 1, gj.grid.plugins.pagination.private.assignButtonHandler(b, a, c, h, d);
                        break;
                    case "page-button-two":
                        h = 1 === c ? 2 : c == d ? d - 1 : c, gj.grid.plugins.pagination.private.assignButtonHandler(b, a, c, h, d);
                        break;
                    case "page-button-three":
                        h = 1 === c ? c + 2 : c == d ? c : c + 1, gj.grid.plugins.pagination.private.assignButtonHandler(b, a, c, h, d);
                        break;
                    case "record-first":
                        a.text(e);
                        break;
                    case "record-last":
                        a.text(f);
                        break;
                    case "record-total":
                        a.text(g)
                }
            },
            assignPageHandler: function (a, b, c, d) {
                var e = a.data().style.pager;
                d ? b.addClass(e.stateDisabled).prop("disabled", !0).off("click") : b.removeClass(e.stateDisabled).prop("disabled", !1).off("click").on("click", function () {
                    gj.grid.plugins.pagination.private.changePage(a, c)
                })
            },
            assignButtonHandler: function (a, b, c, d, e) {
                var f = a.data().style.pager;
                d < 1 || d > e ? b.hide() : (b.show().off("click").text(d), d === c ? b.addClass(f.activeButton) : b.removeClass(f.activeButton).on("click", function () {
                    gj.grid.plugins.pagination.private.changePage(a, d)
                }))
            },
            createChangePageHandler: function (a, b) {
                return function () {
                    var b = (a.data(), parseInt(this.value, 10));
                    gj.grid.plugins.pagination.private.changePage(a, b)
                }
            },
            changePage: function (a, b) {
                var c = a.data();
                !1 === gj.grid.plugins.pagination.events.pageChanging(a, b) || isNaN(b) || (a.find('TFOOT [data-role="page-number"]').val(b), c.params[c.paramNames.page] = b), a.reload()
            },
            updatePagerColSpan: function (a) {
                var b = a.find('tfoot > tr[data-role="pager"] > th');
                b && b.length && b.attr("colspan", gj.grid.methods.countVisibleColumns(a))
            },
            isLastRecordVisible: function (a) {
                var b = !0,
                    c = a.data(),
                    d = parseInt(c.params[c.paramNames.limit], 10),
                    e = parseInt(c.params[c.paramNames.page], 10),
                    f = a.count();
                return d && e && (b = (e - 1) * d + f === c.totalRecords), b
            }
        },
        public: {
            getAll: function (a) {
                var b, c, d, e = this.data();
                return $.isArray(e.dataSource) ? a ? e.dataSource : e.params[e.paramNames.limit] && e.params[e.paramNames.page] ? (b = parseInt(e.params[e.paramNames.limit], 10), c = parseInt(e.params[e.paramNames.page], 10), d = (c - 1) * b, e.records.slice(d, d + b)) : e.records : e.records
            }
        },
        events: {
            pageSizeChange: function (a, b) {
                a.triggerHandler("pageSizeChange", [b])
            },
            pageChanging: function (a, b) {
                a.triggerHandler("pageChanging", [b])
            }
        },
        configure: function (a, b, c) {
            $.extend(!0, a, gj.grid.plugins.pagination.public);
            a.data();
            c.pager && (gj.grid.methods.isLastRecordVisible = gj.grid.plugins.pagination.private.isLastRecordVisible, a.on("initialized", function () {
                gj.grid.plugins.pagination.private.init(a)
            }), a.on("dataBound", function (b, c, d) {
                gj.grid.plugins.pagination.private.reloadPager(a, d)
            }), a.on("columnShow", function () {
                gj.grid.plugins.pagination.private.updatePagerColSpan(a)
            }), a.on("columnHide", function () {
                gj.grid.plugins.pagination.private.updatePagerColSpan(a)
            }))
        }
    }, gj.grid.plugins.responsiveDesign = {
        config: {
            base: {
                resizeCheckInterval: 500,
                responsive: !1,
                showHiddenColumnsAsDetails: !1,
                defaultColumn: {
                    priority: void 0,
                    minWidth: 250
                },
                style: {
                    rowDetailItem: ""
                }
            },
            bootstrap: {
                style: {
                    rowDetailItem: "col-lg-4"
                }
            }
        },
        private: {
            orderColumns: function (a) {
                var b = [];
                if (a.columns && a.columns.length) {
                    for (i = 0; i < a.columns.length; i++) b.push({
                        position: i,
                        field: a.columns[i].field,
                        minWidth: a.columns[i].width || a.columns[i].minWidth || a.defaultColumn.minWidth,
                        priority: a.columns[i].priority || 0
                    });
                    b.sort(function (a, b) {
                        var c = 0;
                        return a.priority < b.priority ? c = -1 : a.priority > b.priority && (c = 1), c
                    })
                }
                return b
            },
            updateDetails: function (a) {
                var b, c, d, e, f, g, h, i, j;
                for (b = a.find('tbody > tr[data-role="row"]'), c = a.data(), d = 0; d < b.length; d++) {
                    for (f = $(b[d]), g = f.data("details"), e = 0; e < c.columns.length; e++) i = c.columns[e], h = g && g.find('div[data-id="' + i.field + '"]'), c.columns[e].hidden ? (j = "<b>" + (i.title || i.field) + "</b>: {" + i.field + "}", h && h.length ? h.empty().html(j) : (h = $('<div data-id="' + i.field + '"/>').html(j), h.addClass(c.style.rowDetailItem), g && g.length || (g = $('<div class="row"/>')), g.append(h))) : h && h.length && h.remove();
                    a.updateDetails(f)
                }
            }
        },
        public: {
            oldWidth: void 0,
            resizeCheckIntervalId: void 0,
            makeResponsive: function () {
                var a, b, c = 0,
                    d = this.data(),
                    e = gj.grid.plugins.responsiveDesign.private.orderColumns(d);
                for (a = 0; a < e.length; a++) b = this.find("thead>tr>th:eq(" + e[a].position + ")"), b.is(":visible") && e[a].minWidth < b.width() && (c += b.width() - e[a].minWidth);
                if (c)
                    for (a = 0; a < e.length; a++) b = this.find("thead>tr>th:eq(" + e[a].position + ")"), !b.is(":visible") && e[a].minWidth <= c && (this.showColumn(e[a].field), c -= b.width());
                for (a = e.length - 1; a >= 0; a--) b = this.find("thead>tr>th:eq(" + e[a].position + ")"), b.is(":visible") && e[a].priority && e[a].minWidth > b.outerWidth() && this.hideColumn(e[a].field);
                return this
            }
        },
        events: {
            resize: function (a, b, c) {
                a.triggerHandler("resize", [b, c])
            }
        },
        configure: function (a, b, c) {
            $.extend(!0, a, gj.grid.plugins.responsiveDesign.public), b.responsive && (a.on("initialized", function () {
                a.makeResponsive(), a.oldWidth = a.width(), a.resizeCheckIntervalId = setInterval(function () {
                    var b = a.width();
                    b !== a.oldWidth && gj.grid.plugins.responsiveDesign.events.resize(a, b, a.oldWidth), a.oldWidth = b
                }, b.resizeCheckInterval)
            }), a.on("destroy", function () {
                a.resizeCheckIntervalId && clearInterval(a.resizeCheckIntervalId)
            }), a.on("resize", function () {
                a.makeResponsive()
            })), b.showHiddenColumnsAsDetails && gj.grid.plugins.expandCollapseRows && (a.on("dataBound", function () {
                gj.grid.plugins.responsiveDesign.private.updateDetails(a)
            }), a.on("columnHide", function () {
                gj.grid.plugins.responsiveDesign.private.updateDetails(a)
            }), a.on("columnShow", function () {
                gj.grid.plugins.responsiveDesign.private.updateDetails(a)
            }), a.on("rowDataBound", function () {
                gj.grid.plugins.responsiveDesign.private.updateDetails(a)
            }))
        }
    }, gj.grid.plugins.toolbar = {
        config: {
            base: {
                toolbarTemplate: void 0,
                title: void 0,
                style: {
                    toolbar: "gj-grid-md-toolbar"
                }
            },
            bootstrap: {
                style: {
                    toolbar: "gj-grid-bootstrap-toolbar"
                }
            },
            bootstrap4: {
                style: {
                    toolbar: "gj-grid-bootstrap-4-toolbar"
                }
            }
        },
        private: {
            init: function (a) {
                var b, c, d;
                b = a.data(), c = a.prev('div[data-role="toolbar"]'), (void 0 !== b.toolbarTemplate || void 0 !== b.title || c.length > 0) && (0 === c.length && (c = $('<div data-role="toolbar"></div>'), a.before(c)), c.addClass(b.style.toolbar), 0 === c.children().length && b.toolbarTemplate && c.append(b.toolbarTemplate), d = c.find('[data-role="title"]'), 0 === d.length && (d = $('<div data-role="title"/>'), c.prepend(d)), b.title && d.text(b.title), b.minWidth && c.css("min-width", b.minWidth))
            }
        },
        public: {
            title: function (a) {
                var b = this.parent().find('div[data-role="toolbar"] [data-role="title"]');
                return void 0 !== a ? (b.text(a), this) : b.text()
            }
        },
        configure: function (a) {
            $.extend(!0, a, gj.grid.plugins.toolbar.public), a.on("initialized", function () {
                gj.grid.plugins.toolbar.private.init(a)
            }), a.on("destroying", function () {
                a.prev('[data-role="toolbar"]').remove()
            })
        }
    }, gj.grid.plugins.resizableColumns = {
        config: {
            base: {
                resizableColumns: !1
            }
        },
        private: {
            init: function (a, b) {
                var c, d, e, f, g, h;
                if (c = a.find('thead tr[data-role="caption"] th'), c.length) {
                    for (e = 0; e < c.length - 1; e++) d = $(c[e]), f = $('<div class="gj-grid-column-resizer-wrapper" />'), h = parseInt(d.css("padding-right"), 10) + 3, g = $('<span class="gj-grid-column-resizer" />').css("margin-right", "-" + h + "px"), g.draggable({
                        start: function () {
                            a.addClass("gj-unselectable"), a.addClass("gj-grid-resize-cursor")
                        },
                        stop: function () {
                            a.removeClass("gj-unselectable"), a.removeClass("gj-grid-resize-cursor"), this.style.removeProperty("top"), this.style.removeProperty("left"), this.style.removeProperty("position")
                        },
                        drag: gj.grid.plugins.resizableColumns.private.createResizeHandle(a, d, b.columns[e])
                    }), d.append(f.append(g));
                    for (e = 0; e < c.length; e++) d = $(c[e]), d.attr("width") || d.attr("width", d.outerWidth())
                }
            },
            createResizeHandle: function (a, b, c) {
                var d = a.data();
                return function (e, f) {
                    var g, h, i, j, k, l, m = parseInt(b.attr("width"), 10),
                        n = gj.core.position(this),
                        o = {
                            top: f.top - n.top,
                            left: f.left - n.left
                        };
                    if (m || (m = b.outerWidth()), o.left && (k = m + o.left, c.width = k, b.attr("width", k), h = b[0].cellIndex, j = b[0].parentElement.children[h + 1], l = parseInt($(j).attr("width"), 10) - o.left, j.setAttribute("width", l), d.resizableColumns))
                        for (i = a[0].tBodies[0].children, g = 0; g < i.length; g++) i[g].cells[h].setAttribute("width", k), j = i[g].cells[h + 1], j.setAttribute("width", l)
                }
            }
        },
        public: {},
        configure: function (a, b, c) {
            $.extend(!0, a, gj.grid.plugins.resizableColumns.public), b.resizableColumns && gj.draggable && a.on("initialized", function () {
                gj.grid.plugins.resizableColumns.private.init(a, b)
            })
        }
    }, gj.grid.plugins.rowReorder = {
        config: {
            base: {
                rowReorder: !1,
                rowReorderColumn: void 0,
                orderNumberField: void 0,
                style: {
                    targetRowIndicatorTop: "gj-grid-row-reorder-indicator-top",
                    targetRowIndicatorBottom: "gj-grid-row-reorder-indicator-bottom"
                }
            }
        },
        private: {
            init: function (a) {
                var b, c, d, e = a.find('tbody tr[data-role="row"]');
                for (a.data("rowReorderColumn") && (c = gj.grid.methods.getColumnPosition(a.data("columns"), a.data("rowReorderColumn"))), b = 0; b < e.length; b++) d = $(e[b]), void 0 !== c ? d.find("td:eq(" + c + ")").on("mousedown", gj.grid.plugins.rowReorder.private.createRowMouseDownHandler(a, d)) : d.on("mousedown", gj.grid.plugins.rowReorder.private.createRowMouseDownHandler(a, d))
            },
            createRowMouseDownHandler: function (a, b) {
                return function (c) {
                    var d, e, f = a.clone(),
                        g = a.data("columns");
                    for (a.addClass("gj-unselectable"), $("body").append(f), f.attr("data-role", "draggable-clone").css("cursor", "move"), f.children("thead").remove().children("tfoot").remove(), f.find('tbody tr:not([data-position="' + b.data("position") + '"])').remove(), e = f.find("tbody tr td"), d = 0; d < e.length; d++) g[d].width && e[d].setAttribute("width", g[d].width);
                    f.draggable({
                        stop: gj.grid.plugins.rowReorder.private.createDragStopHandler(a, b)
                    }), f.css({
                        position: "absolute",
                        top: b.offset().top,
                        left: b.offset().left,
                        width: b.width(),
                        zIndex: 1
                    }), "true" === b.attr("data-droppable") && b.droppable("destroy"), b.siblings('tr[data-role="row"]').each(function () {
                        var a = $(this);
                        "true" === a.attr("data-droppable") && a.droppable("destroy"), a.droppable({
                            over: gj.grid.plugins.rowReorder.private.createDroppableOverHandler(b),
                            out: gj.grid.plugins.rowReorder.private.droppableOut
                        })
                    }), f.trigger("mousedown")
                }
            },
            createDragStopHandler: function (a, b) {
                return function (c, d) {
                    $('table[data-role="draggable-clone"]').draggable("destroy").remove(), a.removeClass("gj-unselectable"), b.siblings('tr[data-role="row"]').each(function () {
                        var c, e, f, g, h, i = $(this),
                            j = i.data("position"),
                            k = b.data("position"),
                            l = a.data();
                        if (i.droppable("isOver", d)) {
                            for (j < k ? i.before(b) : i.after(b), l.records.splice(j - 1, 0, l.records.splice(k - 1, 1)[0]), c = i.parent().find('tr[data-role="row"]'), f = 0; f < c.length; f++) $(c[f]).attr("data-position", f + 1);
                            if (l.orderNumberField) {
                                for (f = 0; f < l.records.length; f++) l.records[f][l.orderNumberField] = f + 1;
                                for (f = 0; f < c.length; f++) e = $(c[f]), h = gj.grid.methods.getId(e, l.primaryKey, e.attr("data-position")), g = gj.grid.methods.getByPosition(a, e.attr("data-position")), a.setCellContent(h, l.orderNumberField, g[l.orderNumberField])
                            }
                        }
                        i.removeClass("gj-grid-top-border"), i.removeClass("gj-grid-bottom-border"), i.droppable("destroy")
                    })
                }
            },
            createDroppableOverHandler: function (a) {
                return function (b) {
                    var c = $(this);
                    c.data("position") < a.data("position") ? c.addClass("gj-grid-top-border") : c.addClass("gj-grid-bottom-border")
                }
            },
            droppableOut: function () {
                $(this).removeClass("gj-grid-top-border"), $(this).removeClass("gj-grid-bottom-border")
            }
        },
        public: {},
        configure: function (a, b, c) {
            $.extend(!0, a, gj.grid.plugins.rowReorder.public), b.rowReorder && gj.draggable && gj.droppable && a.on("dataBound", function () {
                gj.grid.plugins.rowReorder.private.init(a)
            })
        }
    }, gj.grid.plugins.export = {
        config: {
            base: {}
        },
        public: {
            getCSV: function (a) {
                var b, c, d = "",
                    e = "",
                    f = this.data().columns,
                    g = this.getAll(a);
                if (g.length) {
                    for (b = 0; b < f.length; b++) gj.grid.plugins.export.public.isColumnApplicable(f[b]) && (d += '"' + (f[b].title || f[b].field).replace(/<[^>]+>/g, " ") + '",');
                    for (e += d.slice(0, d.length - 1) + "\r\n", b = 0; b < g.length; b++) {
                        for (d = "", c = 0; c < f.length; c++) gj.grid.plugins.export.public.isColumnApplicable(f[c]) && (d += '"' + g[b][f[c].field] + '",');
                        e += d.slice(0, d.length - 1) + "\r\n"
                    }
                }
                return e
            },
            downloadCSV: function (a, b) {
                var c = document.createElement("a");
                return document.body.appendChild(c), c.download = a || "griddata.csv", window.navigator.userAgent.indexOf("Edge") > -1 ? c.href = URL.createObjectURL(new Blob([this.getCSV(b)], {
                    type: "text/csv;charset=utf-8;"
                })) : c.href = "data:text/csv;charset=utf-8," + escape(this.getCSV(b)), c.click(), document.body.removeChild(c), this
            },
            isColumnApplicable: function (a) {
                return !0 !== a.hidden && !a.role
            }
        },
        configure: function (a) {
            $.extend(!0, a, gj.grid.plugins.export.public)
        }
    }, gj.grid.plugins.columnReorder = {
        config: {
            base: {
                columnReorder: !1,
                dragReady: !1,
                style: {
                    targetRowIndicatorTop: "gj-grid-row-reorder-indicator-top",
                    targetRowIndicatorBottom: "gj-grid-row-reorder-indicator-bottom"
                }
            }
        },
        private: {
            init: function (a) {
                var b, c, d = a.find("thead tr th");
                for (b = 0; b < d.length; b++) c = $(d[b]), c.on("mousedown", gj.grid.plugins.columnReorder.private.createMouseDownHandler(a, c)), c.on("mousemove", gj.grid.plugins.columnReorder.private.createMouseMoveHandler(a, c)), c.on("mouseup", gj.grid.plugins.columnReorder.private.createMouseUpHandler(a, c))
            },
            createMouseDownHandler: function (a) {
                return function (b) {
                    a.timeout = setTimeout(function () {
                        a.data("dragReady", !0)
                    }, 100)
                }
            },
            createMouseUpHandler: function (a) {
                return function (b) {
                    clearTimeout(a.timeout), a.data("dragReady", !1)
                }
            },
            createMouseMoveHandler: function (a, b) {
                return function (c) {
                    var d, e;
                    a.data("dragReady") && (a.data("dragReady", !1), d = a.clone(), e = b.index(), a.addClass("gj-unselectable"), $("body").append(d), d.attr("data-role", "draggable-clone").css("cursor", "move"), d.find("thead tr th:eq(" + e + ")").siblings().remove(), d.find('tbody tr[data-role != "row"]').remove(), d.find("tbody tr td:nth-child(" + (e + 1) + ")").siblings().remove(), d.find("tfoot").remove(), d.draggable({
                        stop: gj.grid.plugins.columnReorder.private.createDragStopHandler(a, b)
                    }), d.css({
                        position: "absolute",
                        top: b.offset().top,
                        left: b.offset().left,
                        width: b.width(),
                        zIndex: 1
                    }), "true" === b.attr("data-droppable") && b.droppable("destroy"), b.siblings("th").each(function () {
                        var c = $(this);
                        "true" === c.attr("data-droppable") && c.droppable("destroy"), c.droppable({
                            over: gj.grid.plugins.columnReorder.private.createDroppableOverHandler(a, b),
                            out: gj.grid.plugins.columnReorder.private.droppableOut
                        })
                    }), d.trigger("mousedown"))
                }
            },
            createDragStopHandler: function (a, b) {
                return function (c, d) {
                    $('table[data-role="draggable-clone"]').draggable("destroy").remove(), a.removeClass("gj-unselectable"), b.siblings("th").each(function () {
                        var c = $(this),
                            e = a.data(),
                            f = gj.grid.methods.getColumnPosition(e.columns, c.data("field")),
                            g = gj.grid.methods.getColumnPosition(e.columns, b.data("field"));
                        c.removeClass("gj-grid-left-border").removeClass("gj-grid-right-border"), c.closest("table").find('tbody tr[data-role="row"] td:nth-child(' + (c.index() + 1) + ")").removeClass("gj-grid-left-border").removeClass("gj-grid-right-border"), c.droppable("isOver", d) && (f < g ? c.before(b) : c.after(b), gj.grid.plugins.columnReorder.private.moveRowCells(a, g, f), e.columns.splice(f, 0, e.columns.splice(g, 1)[0])), c.droppable("destroy")
                    })
                }
            },
            moveRowCells: function (a, b, c) {
                var d, e, f = a.find('tbody tr[data-role="row"]');
                for (d = 0; d < f.length; d++) e = $(f[d]), c < b ? e.find("td:eq(" + c + ")").before(e.find("td:eq(" + b + ")")) : e.find("td:eq(" + c + ")").after(e.find("td:eq(" + b + ")"))
            },
            createDroppableOverHandler: function (a, b) {
                return function (c) {
                    var d = $(this),
                        e = a.data();
                    gj.grid.methods.getColumnPosition(e.columns, d.data("field")) < gj.grid.methods.getColumnPosition(e.columns, b.data("field")) ? (d.addClass("gj-grid-left-border"), a.find('tbody tr[data-role="row"] td:nth-child(' + (d.index() + 1) + ")").addClass("gj-grid-left-border")) : (d.addClass("gj-grid-right-border"), a.find('tbody tr[data-role="row"] td:nth-child(' + (d.index() + 1) + ")").addClass("gj-grid-right-border"))
                }
            },
            droppableOut: function () {
                var a = $(this);
                a.removeClass("gj-grid-left-border").removeClass("gj-grid-right-border"), a.closest("table").find('tbody tr[data-role="row"] td:nth-child(' + (a.index() + 1) + ")").removeClass("gj-grid-left-border").removeClass("gj-grid-right-border")
            }
        },
        public: {},
        configure: function (a, b, c) {
            $.extend(!0, a, gj.grid.plugins.columnReorder.public), b.columnReorder && a.on("initialized", function () {
                gj.grid.plugins.columnReorder.private.init(a)
            })
        }
    }, gj.grid.plugins.headerFilter = {
        config: {
            base: {
                defaultColumnSettings: {
                    filterable: !0
                },
                headerFilter: {
                    type: "onenterkeypress"
                }
            }
        },
        private: {
            init: function (a) {
                var b, c, d, e = a.data(),
                    f = $('<tr data-role="filter"/>');
                for (b = 0; b < e.columns.length; b++) c = $("<th/>"), e.columns[b].filterable && (d = $('<input data-field="' + e.columns[b].field + '" class="gj-width-full" />'), "onchange" === e.headerFilter.type ? d.on("input propertychange", function (b) {
                    gj.grid.plugins.headerFilter.private.reload(a, $(this))
                }) : (d.on("keypress", function (b) {
                    13 == b.which && gj.grid.plugins.headerFilter.private.reload(a, $(this))
                }), d.on("blur", function (b) {
                    gj.grid.plugins.headerFilter.private.reload(a, $(this))
                })), c.append(d)), e.columns[b].hidden && c.hide(), f.append(c);
                a.children("thead").append(f)
            },
            reload: function (a, b) {
                var c = {};
                c[b.data("field")] = b.val(), a.reload(c)
            }
        },
        public: {},
        events: {},
        configure: function (a, b, c) {
            $.extend(!0, a, gj.grid.plugins.headerFilter.public);
            a.data();
            c.headerFilter && a.on("initialized", function () {
                gj.grid.plugins.headerFilter.private.init(a)
            })
        }
    }, gj.grid.plugins.grouping = {
        config: {
            base: {
                paramNames: {
                    groupBy: "groupBy",
                    groupByDirection: "groupByDirection"
                },
                grouping: {
                    groupBy: void 0,
                    direction: "asc"
                },
                icons: {
                    expandGroup: '<i class="gj-icon plus" />',
                    collapseGroup: '<i class="gj-icon minus" />'
                }
            },
            fontawesome: {
                icons: {
                    expandGroup: '<i class="fa fa-plus" aria-hidden="true"></i>',
                    collapseGroup: '<i class="fa fa-minus" aria-hidden="true"></i>'
                }
            },
            glyphicons: {
                icons: {
                    expandGroup: '<span class="glyphicon glyphicon-plus" />',
                    collapseGroup: '<span class="glyphicon glyphicon-minus" />'
                }
            }
        },
        private: {
            init: function (a) {
                var b, c = a.data();
                b = void 0, a.on("rowDataBound", function (d, e, f, g) {
                    if (b !== g[c.grouping.groupBy] || 1 === e[0].rowIndex) {
                        var h = gj.grid.methods.countVisibleColumns(a) - 1,
                            i = $('<tr role="group" />'),
                            j = $('<td class="gj-text-align-center gj-unselectable gj-cursor-pointer" />');
                        j.append('<div data-role="display">' + c.icons.collapseGroup + "</div>"), j.on("click", gj.grid.plugins.grouping.private.createExpandCollapseHandler(c)), i.append(j), i.append('<td colspan="' + h + '"><div data-role="display">' + c.grouping.groupBy + ": " + g[c.grouping.groupBy] + "</div></td>"), i.insertBefore(e), b = g[c.grouping.groupBy]
                    }
                    e.show()
                }), c.params[c.paramNames.groupBy] = c.grouping.groupBy, c.params[c.paramNames.groupByDirection] = c.grouping.direction
            },
            grouping: function (a, b) {
                var c = a.data();
                b.sort(gj.grid.methods.createDefaultSorter(c.grouping.direction, c.grouping.groupBy))
            },
            createExpandCollapseHandler: function (a) {
                return function (b) {
                    var c = $(this),
                        d = gj.grid.plugins.grouping.private;
                    "row" === c.closest("tr").next(":visible").data("role") ? d.collapseGroup(a, c) : d.expandGroup(a, c)
                }
            },
            collapseGroup: function (a, b) {
                var c = b.children('div[data-role="display"]');
                b.closest("tr").nextUntil('[role="group"]').hide(), c.empty().append(a.icons.expandGroup)
            },
            expandGroup: function (a, b) {
                var c = b.children('div[data-role="display"]');
                b.closest("tr").nextUntil('[role="group"]').show(), c.empty().append(a.icons.collapseGroup)
            }
        },
        public: {},
        configure: function (a) {
            var b, c = a.data();
            $.extend(!0, a, gj.grid.plugins.grouping.public), c.grouping && c.grouping.groupBy && (b = {
                title: "",
                width: c.defaultIconColumnWidth,
                align: "center",
                stopPropagation: !0,
                cssClass: "gj-cursor-pointer gj-unselectable"
            }, c.columns = [b].concat(c.columns), a.on("initialized", function () {
                gj.grid.plugins.grouping.private.init(a)
            }), a.on("dataFiltered", function (b, c) {
                gj.grid.plugins.grouping.private.grouping(a, c)
            }))
        }
    }, gj.grid.messages["en-us"] = {
        First: "First",
        Previous: "Previous",
        Next: "Next",
        Last: "Last",
        Page: "Page",
        FirstPageTooltip: "First Page",
        PreviousPageTooltip: "Previous Page",
        NextPageTooltip: "Next Page",
        LastPageTooltip: "Last Page",
        Refresh: "Refresh",
        Of: "of",
        DisplayingRecords: "Displaying records",
        RowsPerPage: "Rows per page:",
        Edit: "Edit",
        Delete: "Delete",
        Update: "Update",
        Cancel: "Cancel",
        NoRecordsFound: "No records found.",
        Loading: "Loading..."
    }, gj.tree = {
        plugins: {}
    }, gj.tree.config = {
        base: {
            params: {},
            autoLoad: !0,
            selectionType: "single",
            cascadeSelection: !1,
            dataSource: void 0,
            primaryKey: void 0,
            textField: "text",
            childrenField: "children",
            hasChildrenField: "hasChildren",
            imageCssClassField: "imageCssClass",
            imageUrlField: "imageUrl",
            imageHtmlField: "imageHtml",
            disabledField: "disabled",
            width: void 0,
            border: !1,
            uiLibrary: "materialdesign",
            iconsLibrary: "materialicons",
            autoGenId: 1,
            autoGenFieldName: "autoId_b5497cc5-7ef3-49f5-a7dc-4a932e1aee4a",
            indentation: 24,
            style: {
                wrapper: "gj-unselectable",
                list: "gj-list gj-list-md",
                item: void 0,
                active: "gj-list-md-active",
                leafIcon: void 0,
                border: "gj-tree-md-border"
            },
            icons: {
                expand: '<i class="gj-icon chevron-right" />',
                collapse: '<i class="gj-icon chevron-down" />'
            }
        },
        bootstrap: {
            style: {
                wrapper: "gj-unselectable gj-tree-bootstrap-3",
                list: "gj-list gj-list-bootstrap list-group",
                item: "list-group-item",
                active: "active",
                border: "gj-tree-bootstrap-border"
            },
            iconsLibrary: "glyphicons"
        },
        bootstrap4: {
            style: {
                wrapper: "gj-unselectable gj-tree-bootstrap-4",
                list: "gj-list gj-list-bootstrap",
                item: "list-group-item",
                active: "active",
                border: "gj-tree-bootstrap-border"
            },
            icons: {
                expand: '<i class="gj-icon plus" />',
                collapse: '<i class="gj-icon minus" />'
            }
        },
        materialicons: {
            style: {
                expander: "gj-tree-material-icons-expander"
            }
        },
        fontawesome: {
            style: {
                expander: "gj-tree-font-awesome-expander"
            },
            icons: {
                expand: '<i class="fa fa-plus" aria-hidden="true"></i>',
                collapse: '<i class="fa fa-minus" aria-hidden="true"></i>'
            }
        },
        glyphicons: {
            style: {
                expander: "gj-tree-glyphicons-expander"
            },
            icons: {
                expand: '<span class="glyphicon glyphicon-plus" />',
                collapse: '<span class="glyphicon glyphicon-minus" />'
            }
        }
    }, gj.tree.events = {
        initialized: function (a) {
            a.triggerHandler("initialized")
        },
        dataBinding: function (a) {
            a.triggerHandler("dataBinding")
        },
        dataBound: function (a) {
            a.triggerHandler("dataBound")
        },
        select: function (a, b, c) {
            return a.triggerHandler("select", [b, c])
        },
        unselect: function (a, b, c) {
            return a.triggerHandler("unselect", [b, c])
        },
        expand: function (a, b, c) {
            return a.triggerHandler("expand", [b, c])
        },
        collapse: function (a, b, c) {
            return a.triggerHandler("collapse", [b, c])
        },
        enable: function (a, b) {
            return a.triggerHandler("enable", [b])
        },
        disable: function (a, b) {
            return a.triggerHandler("disable", [b])
        },
        destroying: function (a) {
            return a.triggerHandler("destroying")
        },
        nodeDataBound: function (a, b, c, d) {
            return a.triggerHandler("nodeDataBound", [b, c, d])
        }
    }, gj.tree.methods = {
        init: function (a) {
            return gj.widget.prototype.init.call(this, a, "tree"), gj.tree.methods.initialize.call(this), this.data("autoLoad") && this.reload(), this
        },
        initialize: function () {
            var a = this.data(),
                b = $('<ul class="' + a.style.list + '"/>');
            this.empty().addClass(a.style.wrapper).append(b), a.width && this.width(a.width), a.border && this.addClass(a.style.border), gj.tree.events.initialized(this)
        },
        useHtmlDataSource: function (a, b) {
            b.dataSource = []
        },
        render: function (a, b) {
            var c;
            return b && ("string" == typeof b && JSON && (b = JSON.parse(b)), c = a.data(), c.records = b, c.primaryKey || gj.tree.methods.genAutoId(c, c.records), gj.tree.methods.loadData(a)), a
        },
        filter: function (a) {
            return a.data().dataSource
        },
        genAutoId: function (a, b) {
            var c;
            for (c = 0; c < b.length; c++) b[c][a.autoGenFieldName] = a.autoGenId++, b[c][a.childrenField] && b[c][a.childrenField].length && gj.tree.methods.genAutoId(a, b[c][a.childrenField])
        },
        loadData: function (a) {
            var b, c = a.data("records"),
                d = a.children("ul");
            for (gj.tree.events.dataBinding(a), d.off().empty(), b = 0; b < c.length; b++) gj.tree.methods.appendNode(a, d, c[b], 1);
            gj.tree.events.dataBound(a)
        },
        appendNode: function (a, b, c, d, e) {
            var f, g, h, i, j, k = a.data(),
                l = k.primaryKey ? c[k.primaryKey] : c[k.autoGenFieldName];
            if (g = $('<li data-id="' + l + '" data-role="node" />').addClass(k.style.item), $wrapper = $('<div data-role="wrapper" />'), $expander = $('<span data-role="expander" data-mode="close"></span>').addClass(k.style.expander), $display = $('<span data-role="display">' + c[k.textField] + "</span>"), hasChildren = void 0 !== c[k.hasChildrenField] && "true" === c[k.hasChildrenField].toString().toLowerCase(), disabled = void 0 !== c[k.disabledField] && "true" === c[k.disabledField].toString().toLowerCase(), k.indentation && $wrapper.append('<span data-role="spacer" style="width: ' + k.indentation * (d - 1) + 'px;"></span>'), disabled ? gj.tree.methods.disableNode(a, g) : ($expander.on("click", gj.tree.methods.expanderClickHandler(a)), $display.on("click", gj.tree.methods.displayClickHandler(a))), $wrapper.append($expander), $wrapper.append($display), g.append($wrapper), e ? b.find("li:eq(" + (e - 1) + ")").before(g) : b.append(g), k.imageCssClassField && c[k.imageCssClassField] ? (i = $('<span data-role="image"><span class="' + c[k.imageCssClassField] + '"></span></span>'), i.insertBefore($display)) : k.imageUrlField && c[k.imageUrlField] ? (i = $('<span data-role="image"></span>'), i.insertBefore($display), j = $('<img src="' + c[k.imageUrlField] + '"></img>'), j.attr("width", i.width()).attr("height", i.height()), i.append(j)) : k.imageHtmlField && c[k.imageHtmlField] && (i = $('<span data-role="image">' + c[k.imageHtmlField] + "</span>"), i.insertBefore($display)), c[k.childrenField] && c[k.childrenField].length || hasChildren) {
                if ($expander.empty().append(k.icons.expand), h = $("<ul />").addClass(k.style.list).addClass("gj-hidden"), g.append(h), c[k.childrenField] && c[k.childrenField].length)
                    for (f = 0; f < c[k.childrenField].length; f++) gj.tree.methods.appendNode(a, h, c[k.childrenField][f], d + 1)
            } else k.style.leafIcon ? $expander.addClass(k.style.leafIcon) : $expander.html("&nbsp;");
            gj.tree.events.nodeDataBound(a, g, c.id, c)
        },
        expanderClickHandler: function (a) {
            return function (b) {
                var c = $(this),
                    d = c.closest("li");
                "close" === c.attr("data-mode") ? a.expand(d) : a.collapse(d)
            }
        },
        expand: function (a, b, c) {
            var d, e, f = b.find('>[data-role="wrapper"]>[data-role="expander"]'),
                g = a.data(),
                h = b.attr("data-id"),
                i = b.children("ul");
            if (!1 !== gj.tree.events.expand(a, b, h) && i && i.length && (i.show(), f.attr("data-mode", "open"), f.empty().append(g.icons.collapse), c))
                for (d = b.find("ul>li"), e = 0; e < d.length; e++) gj.tree.methods.expand(a, $(d[e]), c);
            return a
        },
        collapse: function (a, b, c) {
            var d, e, f = b.find('>[data-role="wrapper"]>[data-role="expander"]'),
                g = a.data(),
                h = b.attr("data-id"),
                i = b.children("ul");
            if (!1 !== gj.tree.events.collapse(a, b, h) && i && i.length && (i.hide(), f.attr("data-mode", "close"), f.empty().append(g.icons.expand), c))
                for (d = b.find("ul>li"), e = 0; e < d.length; e++) gj.tree.methods.collapse(a, $(d[e]), c);
            return a
        },
        expandAll: function (a) {
            var b, c = a.find("ul>li");
            for (b = 0; b < c.length; b++) gj.tree.methods.expand(a, $(c[b]), !0);
            return a
        },
        collapseAll: function (a) {
            var b, c = a.find("ul>li");
            for (b = 0; b < c.length; b++) gj.tree.methods.collapse(a, $(c[b]), !0);
            return a
        },
        displayClickHandler: function (a) {
            return function (b) {
                var c = $(this),
                    d = c.closest("li"),
                    e = a.data().cascadeSelection;
                "true" === d.attr("data-selected") ? gj.tree.methods.unselect(a, d, e) : ("single" === a.data("selectionType") && gj.tree.methods.unselectAll(a), gj.tree.methods.select(a, d, e))
            }
        },
        selectAll: function (a) {
            var b, c = a.find("ul>li");
            for (b = 0; b < c.length; b++) gj.tree.methods.select(a, $(c[b]), !0);
            return a
        },
        select: function (a, b, c) {
            var d, e, f = a.data();
            if ("true" !== b.attr("data-selected") && !1 !== gj.tree.events.select(a, b, b.attr("data-id")) && (b.addClass(f.style.active).attr("data-selected", "true"), c))
                for (e = b.find("ul>li"), d = 0; d < e.length; d++) gj.tree.methods.select(a, $(e[d]), c)
        },
        unselectAll: function (a) {
            var b, c = a.find("ul>li");
            for (b = 0; b < c.length; b++) gj.tree.methods.unselect(a, $(c[b]), !0);
            return a
        },
        unselect: function (a, b, c) {
            var d, e;
            a.data();
            if ("true" === b.attr("data-selected") && !1 !== gj.tree.events.unselect(a, b, b.attr("data-id")) && (b.removeClass(a.data().style.active).removeAttr("data-selected"), c))
                for (e = b.find("ul>li"), d = 0; d < e.length; d++) gj.tree.methods.unselect(a, $(e[d]), c)
        },
        getSelections: function (a) {
            var b, c, d, e = [],
                f = a.children("li");
            if (f && f.length)
                for (b = 0; b < f.length; b++) c = $(f[b]), "true" === c.attr("data-selected") ? e.push(c.attr("data-id")) : c.has("ul") && (d = gj.tree.methods.getSelections(c.children("ul")), d.length && (e = e.concat(d)));
            return e
        },
        getDataById: function (a, b, c) {
            var d, e = a.data(),
                f = void 0;
            for (d = 0; d < c.length; d++) {
                if (e.primaryKey && c[d][e.primaryKey] == b) {
                    f = c[d];
                    break
                }
                if (c[d][e.autoGenFieldName] == b) {
                    f = c[d];
                    break
                }
                if (c[d][e.childrenField] && c[d][e.childrenField].length && (f = gj.tree.methods.getDataById(a, b, c[d][e.childrenField]))) break
            }
            return f
        },
        getDataByText: function (a, b, c) {
            var d, e = void 0,
                f = a.data();
            for (d = 0; d < c.length; d++) {
                if (b === c[d][f.textField]) {
                    e = c[d];
                    break
                }
                if (c[d][f.childrenField] && c[d][f.childrenField].length && (e = gj.tree.methods.getDataByText(a, b, c[d][f.childrenField]))) break
            }
            return e
        },
        getNodeById: function (a, b) {
            var c, d, e = void 0,
                f = a.children("li");
            if (f && f.length)
                for (c = 0; c < f.length; c++) {
                    if (d = $(f[c]), b == d.attr("data-id")) {
                        e = d;
                        break
                    }
                    if (d.has("ul") && (e = gj.tree.methods.getNodeById(d.children("ul"), b))) break
                }
            return e
        },
        getNodeByText: function (a, b) {
            var c, d, e = void 0,
                f = a.children("li");
            if (f && f.length)
                for (c = 0; c < f.length; c++) {
                    if (d = $(f[c]), b === d.find('>[data-role="wrapper"]>[data-role="display"]').text()) {
                        e = d;
                        break
                    }
                    if (d.has("ul") && (e = gj.tree.methods.getNodeByText(d.children("ul"), b))) break
                }
            return e
        },
        addNode: function (a, b, c, d) {
            var e, f, g = a.data();
            return c && c.length ? ("li" === c[0].tagName.toLowerCase() && (0 === c.children("ul").length && (c.find('[data-role="expander"]').empty().append(g.icons.collapse), c.append($("<ul />").addClass(g.style.list))), c = c.children("ul")), f = a.getDataById(c.parent().data("id")), f[g.childrenField] || (f[g.childrenField] = []), f[g.childrenField].push(b)) : (c = a.children("ul"), a.data("records").push(b)), e = c.parentsUntil('[data-type="tree"]', "ul").length + 1, g.primaryKey || gj.tree.methods.genAutoId(g, [b]), gj.tree.methods.appendNode(a, c, b, e, d), a
        },
        remove: function (a, b) {
            return gj.tree.methods.removeDataById(a, b.attr("data-id"), a.data("records")), b.remove(), a
        },
        removeDataById: function (a, b, c) {
            var d, e = a.data();
            for (d = 0; d < c.length; d++) {
                if (e.primaryKey && c[d][e.primaryKey] == b) {
                    c.splice(d, 1);
                    break
                }
                if (c[d][e.autoGenFieldName] == b) {
                    c.splice(d, 1);
                    break
                }
                c[d][e.childrenField] && c[d][e.childrenField].length && gj.tree.methods.removeDataById(a, b, c[d][e.childrenField])
            }
        },
        update: function (a, b, c) {
            var d = a.data(),
                e = a.getNodeById(b);
            a.getDataById(b);
            return c, e.find('>[data-role="wrapper"]>[data-role="display"]').html(c[d.textField]), gj.tree.events.nodeDataBound(a, e, b, c), a
        },
        getChildren: function (a, b, c) {
            var d, e, f = [],
                c = void 0 === c || c;
            for (e = c ? b.find("ul li") : b.find(">ul>li"), d = 0; d < e.length; d++) f.push($(e[d]).data("id"));
            return f
        },
        enableAll: function (a) {
            var b, c = a.find("ul>li");
            for (b = 0; b < c.length; b++) gj.tree.methods.enableNode(a, $(c[b]), !0);
            return a
        },
        enableNode: function (a, b, c) {
            var d, e, f = b.find('>[data-role="wrapper"]>[data-role="expander"]'),
                g = b.find('>[data-role="wrapper"]>[data-role="display"]'),
                c = void 0 === c || c;
            if (b.removeClass("disabled"), f.on("click", gj.tree.methods.expanderClickHandler(a)), g.on("click", gj.tree.methods.displayClickHandler(a)), gj.tree.events.enable(a, b), c)
                for (e = b.find("ul>li"), d = 0; d < e.length; d++) gj.tree.methods.enableNode(a, $(e[d]), c)
        },
        disableAll: function (a) {
            var b, c = a.find("ul>li");
            for (b = 0; b < c.length; b++) gj.tree.methods.disableNode(a, $(c[b]), !0);
            return a
        },
        disableNode: function (a, b, c) {
            var d, e, f = b.find('>[data-role="wrapper"]>[data-role="expander"]'),
                g = b.find('>[data-role="wrapper"]>[data-role="display"]'),
                c = void 0 === c || c;
            if (b.addClass("disabled"), f.off("click"), g.off("click"), gj.tree.events.disable(a, b), c)
                for (e = b.find("ul>li"), d = 0; d < e.length; d++) gj.tree.methods.disableNode(a, $(e[d]), c)
        },
        destroy: function (a) {
            return a.data() && (gj.tree.events.destroying(a), a.xhr && a.xhr.abort(), a.off(), a.removeData(), a.removeAttr("data-type"), a.removeClass().empty()), a
        },
        pathFinder: function (a, b, c, d) {
            var e, f = !1;
            for (e = 0; e < b.length; e++) {
                if (b[e].id == c) {
                    f = !0;
                    break
                }
                if (gj.tree.methods.pathFinder(a, b[e][a.childrenField], c, d)) {
                    d.push(b[e].data[a.textField]), f = !0;
                    break
                }
            }
            return f
        }
    }, gj.tree.widget = function (a, b) {
        var c = this,
            d = gj.tree.methods;
        return c.reload = function (a) {
            return gj.widget.prototype.reload.call(this, a)
        }, c.render = function (a) {
            return d.render(this, a)
        }, c.addNode = function (a, b, c) {
            return d.addNode(this, a, b, c)
        }, c.removeNode = function (a) {
            return d.remove(this, a)
        }, c.updateNode = function (a, b) {
            return d.update(this, a, b)
        }, c.destroy = function () {
            return d.destroy(this)
        }, c.expand = function (a, b) {
            return d.expand(this, a, b)
        }, c.collapse = function (a, b) {
            return d.collapse(this, a, b)
        }, c.expandAll = function () {
            return d.expandAll(this)
        }, c.collapseAll = function () {
            return d.collapseAll(this)
        }, c.getDataById = function (a) {
            return d.getDataById(this, a, this.data("records"))
        }, c.getDataByText = function (a) {
            return d.getDataByText(this, a, this.data("records"))
        }, c.getNodeById = function (a) {
            return d.getNodeById(this.children("ul"), a)
        }, c.getNodeByText = function (a) {
            return d.getNodeByText(this.children("ul"), a)
        }, c.getAll = function () {
            return this.data("records")
        }, c.select = function (a) {
            return d.select(this, a)
        }, c.unselect = function (a) {
            return d.unselect(this, a)
        }, c.selectAll = function () {
            return d.selectAll(this)
        }, c.unselectAll = function () {
            return d.unselectAll(this)
        }, c.getSelections = function () {
            return d.getSelections(this.children("ul"))
        }, c.getChildren = function (a, b) {
            return d.getChildren(this, a, b)
        }, c.parents = function (a) {
            var b = [],
                c = this.data();
            return d.pathFinder(c, c.records, a, b), b.reverse()
        }, c.enable = function (a, b) {
            return d.enableNode(this, a, b)
        }, c.enableAll = function () {
            return d.enableAll(this)
        }, c.disable = function (a, b) {
            return d.disableNode(this, a, b)
        }, c.disableAll = function () {
            return d.disableAll(this)
        }, $.extend(a, c), "tree" !== a.attr("data-type") && d.init.call(a, b), a
    }, gj.tree.widget.prototype = new gj.widget, gj.tree.widget.constructor = gj.tree.widget,
    function (a) {
        a.fn.tree = function (a) {
            var b;
            if (this && this.length) {
                if ("object" != typeof a && a) {
                    if (b = new gj.tree.widget(this, null), b[a]) return b[a].apply(this, Array.prototype.slice.call(arguments, 1));
                    throw "Method " + a + " does not exist."
                }
                return new gj.tree.widget(this, a)
            }
        }
    }(jQuery), gj.tree.plugins.checkboxes = {
        config: {
            base: {
                checkboxes: void 0,
                checkedField: "checked",
                cascadeCheck: !0
            }
        },
        private: {
            dataBound: function (a) {
                var b;
                a.data("cascadeCheck") && (b = a.find('li[data-role="node"]'), $.each(b, function () {
                    var a = $(this),
                        b = a.find('[data-role="checkbox"] input[type="checkbox"]').checkbox("state");
                    "checked" === b && (gj.tree.plugins.checkboxes.private.updateChildrenState(a, b), gj.tree.plugins.checkboxes.private.updateParentState(a, b))
                }))
            },
            nodeDataBound: function (a, b, c, d) {
                var e, f, g, h, i;
                0 === b.find('> [data-role="wrapper"] > [data-role="checkbox"]').length && (e = a.data(), f = b.find('> [data-role="wrapper"] > [data-role="expander"]'), g = $('<input type="checkbox"/>'), h = $('<span data-role="checkbox"></span>').append(g), i = void 0 !== d[e.disabledField] && "true" === d[e.disabledField].toString().toLowerCase(), g = g.checkbox({
                    uiLibrary: e.uiLibrary,
                    iconsLibrary: e.iconsLibrary,
                    change: function (c, e) {
                        gj.tree.plugins.checkboxes.events.checkboxChange(a, b, d, g.state())
                    }
                }), i && g.prop("disabled", !0), d[e.checkedField] && g.state("checked"), g.on("click", function (a) {
                    var b = g.closest("li"),
                        c = g.state();
                    e.cascadeCheck && (gj.tree.plugins.checkboxes.private.updateChildrenState(b, c), gj.tree.plugins.checkboxes.private.updateParentState(b, c))
                }), f.after(h))
            },
            updateParentState: function (a, b) {
                var c, d, e, f, g, h;
                c = a.parent("ul").parent("li"), 1 === c.length && (d = a.parent("ul").parent("li").find('> [data-role="wrapper"] > [data-role="checkbox"] input[type="checkbox"]'), e = a.siblings().find('> [data-role="wrapper"] > span[data-role="checkbox"] input[type="checkbox"]'), f = "checked" === b, g = "unchecked" === b, h = "indeterminate", $.each(e, function () {
                    var a = $(this).checkbox("state");
                    f && "checked" !== a && (f = !1), g && "unchecked" !== a && (g = !1)
                }), f && !g && (h = "checked"), !f && g && (h = "unchecked"), d.checkbox("state", h), gj.tree.plugins.checkboxes.private.updateParentState(c, d.checkbox("state")))
            },
            updateChildrenState: function (a, b) {
                var c = a.find('ul li [data-role="wrapper"] [data-role="checkbox"] input[type="checkbox"]');
                c.length > 0 && $.each(c, function () {
                    $(this).checkbox("state", b)
                })
            },
            update: function (a, b, c) {
                var d = b.find('[data-role="checkbox"] input[type="checkbox"]').first();
                $(d).checkbox("state", c), a.data().cascadeCheck && (gj.tree.plugins.checkboxes.private.updateChildrenState(b, c), gj.tree.plugins.checkboxes.private.updateParentState(b, c))
            }
        },
        public: {
            getCheckedNodes: function () {
                var a = [],
                    b = this.find('li [data-role="checkbox"] input[type="checkbox"]');
                return $.each(b, function () {
                    var b = $(this);
                    "checked" === b.checkbox("state") && a.push(b.closest("li").data("id"))
                }), a
            },
            checkAll: function () {
                var a = this.find('li [data-role="checkbox"] input[type="checkbox"]');
                return $.each(a, function () {
                    $(this).checkbox("state", "checked")
                }), this
            },
            uncheckAll: function () {
                var a = this.find('li [data-role="checkbox"] input[type="checkbox"]');
                return $.each(a, function () {
                    $(this).checkbox("state", "unchecked")
                }), this
            },
            check: function (a) {
                return gj.tree.plugins.checkboxes.private.update(this, a, "checked"), this
            },
            uncheck: function (a) {
                return gj.tree.plugins.checkboxes.private.update(this, a, "unchecked"), this
            }
        },
        events: {
            checkboxChange: function (a, b, c, d) {
                return a.triggerHandler("checkboxChange", [b, c, d])
            }
        },
        configure: function (a) {
            a.data("checkboxes") && gj.checkbox && ($.extend(!0, a, gj.tree.plugins.checkboxes.public), a.on("nodeDataBound", function (b, c, d, e) {
                gj.tree.plugins.checkboxes.private.nodeDataBound(a, c, d, e)
            }), a.on("dataBound", function () {
                gj.tree.plugins.checkboxes.private.dataBound(a)
            }), a.on("enable", function (a, b) {
                b.find('>[data-role="wrapper"]>[data-role="checkbox"] input[type="checkbox"]').prop("disabled", !1)
            }), a.on("disable", function (a, b) {
                b.find('>[data-role="wrapper"]>[data-role="checkbox"] input[type="checkbox"]').prop("disabled", !0)
            }))
        }
    }, gj.tree.plugins.dragAndDrop = {
        config: {
            base: {
                dragAndDrop: void 0,
                style: {
                    dragEl: "gj-tree-drag-el gj-tree-md-drag-el",
                    dropAsChildIcon: "gj-cursor-pointer gj-icon plus",
                    dropAbove: "gj-tree-drop-above",
                    dropBelow: "gj-tree-drop-below"
                }
            },
            bootstrap: {
                style: {
                    dragEl: "gj-tree-drag-el gj-tree-bootstrap-drag-el",
                    dropAsChildIcon: "glyphicon glyphicon-plus",
                    dropAbove: "drop-above",
                    dropBelow: "drop-below"
                }
            },
            bootstrap4: {
                style: {
                    dragEl: "gj-tree-drag-el gj-tree-bootstrap-drag-el",
                    dropAsChildIcon: "gj-cursor-pointer gj-icon plus",
                    dropAbove: "drop-above",
                    dropBelow: "drop-below"
                }
            }
        },
        private: {
            nodeDataBound: function (a, b) {
                var c = b.children('[data-role="wrapper"]'),
                    d = b.find('>[data-role="wrapper"]>[data-role="display"]');
                c.length && d.length && (d.on("mousedown", gj.tree.plugins.dragAndDrop.private.createNodeMouseDownHandler(a)), d.on("mousemove", gj.tree.plugins.dragAndDrop.private.createNodeMouseMoveHandler(a, b, d)), d.on("mouseup", gj.tree.plugins.dragAndDrop.private.createNodeMouseUpHandler(a)))
            },
            createNodeMouseDownHandler: function (a) {
                return function (b) {
                    a.data("dragReady", !0)
                }
            },
            createNodeMouseUpHandler: function (a) {
                return function (b) {
                    a.data("dragReady", !1)
                }
            },
            createNodeMouseMoveHandler: function (a, b, c) {
                return function (d) {
                    if (a.data("dragReady")) {
                        var e, f, g, h, i = a.data();
                        a.data("dragReady", !1), e = c.clone().wrap('<div data-role="wrapper"/>').closest("div").wrap('<li class="' + i.style.item + '" />').closest("li").wrap('<ul class="' + i.style.list + '" />').closest("ul"), $("body").append(e), e.attr("data-role", "draggable-clone").addClass("gj-unselectable").addClass(i.style.dragEl), e.find('[data-role="wrapper"]').prepend('<span data-role="indicator" />'), e.draggable({
                            drag: gj.tree.plugins.dragAndDrop.private.createDragHandler(a, b, c),
                            stop: gj.tree.plugins.dragAndDrop.private.createDragStopHandler(a, b, c)
                        }), f = c.parent(), g = c.offset().top, g -= parseInt(f.css("border-top-width")) + parseInt(f.css("margin-top")) + parseInt(f.css("padding-top")), h = c.offset().left, h -= parseInt(f.css("border-left-width")) + parseInt(f.css("margin-left")) + parseInt(f.css("padding-left")), h -= e.find('[data-role="indicator"]').outerWidth(!0), e.css({
                            position: "absolute",
                            top: g,
                            left: h,
                            width: c.outerWidth(!0)
                        }), "true" === c.attr("data-droppable") && c.droppable("destroy"), gj.tree.plugins.dragAndDrop.private.getTargetDisplays(a, b, c).each(function () {
                            var a = $(this);
                            "true" === a.attr("data-droppable") && a.droppable("destroy"), a.droppable()
                        }), gj.tree.plugins.dragAndDrop.private.getTargetDisplays(a, b).each(function () {
                            var a = $(this);
                            "true" === a.attr("data-droppable") && a.droppable("destroy"), a.droppable()
                        }), e.trigger("mousedown")
                    }
                }
            },
            getTargetDisplays: function (a, b, c) {
                return a.find('[data-role="display"]').not(c).not(b.find('[data-role="display"]'))
            },
            getTargetWrappers: function (a, b) {
                return a.find('[data-role="wrapper"]').not(b.find('[data-role="wrapper"]'))
            },
            createDragHandler: function (a, b, c) {
                var d = gj.tree.plugins.dragAndDrop.private.getTargetDisplays(a, b, c),
                    e = gj.tree.plugins.dragAndDrop.private.getTargetWrappers(a, b),
                    f = a.data();
                return function (a, b, c) {
                    var g = $(this),
                        h = !1;
                    d.each(function () {
                        var a, b = $(this);
                        if (b.droppable("isOver", c)) return a = g.find('[data-role="indicator"]'), f.style.dropAsChildIcon ? a.addClass(f.style.dropAsChildIcon) : a.text("+"), h = !0, !1;
                        g.find('[data-role="indicator"]').removeClass(f.style.dropAsChildIcon).empty()
                    }), e.each(function () {
                        var a, b = $(this);
                        !h && b.droppable("isOver", c) ? (a = b.position().top + b.outerHeight() / 2, c.y < a ? b.addClass(f.style.dropAbove).removeClass(f.style.dropBelow) : b.addClass(f.style.dropBelow).removeClass(f.style.dropAbove)) : b.removeClass(f.style.dropAbove).removeClass(f.style.dropBelow)
                    })
                }
            },
            createDragStopHandler: function (a, b, c) {
                var d = gj.tree.plugins.dragAndDrop.private.getTargetDisplays(a, b, c),
                    e = gj.tree.plugins.dragAndDrop.private.getTargetWrappers(a, b),
                    f = a.data();
                return function (c, g) {
                    var h, i, j, k, l = !1;
                    $(this).draggable("destroy").remove(), d.each(function () {
                        var c, d = $(this);
                        if (d.droppable("isOver", g)) return i = d.closest("li"), j = b.parent("ul").parent("li"), c = i.children("ul"), 0 === c.length && (c = $("<ul />").addClass(f.style.list), i.append(c)), !1 !== gj.tree.plugins.dragAndDrop.events.nodeDrop(a, b.data("id"), i.data("id"), c.children("li").length + 1) && (c.append(b), h = a.getDataById(b.data("id")), gj.tree.methods.removeDataById(a, b.data("id"), f.records), k = a.getDataById(c.parent().data("id")), void 0 === k[f.childrenField] && (k[f.childrenField] = []), k[f.childrenField].push(h), gj.tree.plugins.dragAndDrop.private.refresh(a, b, i, j)), l = !0, !1;
                        d.droppable("destroy")
                    }), l || e.each(function () {
                        var c, d, e, k = $(this);
                        if (k.droppable("isOver", g)) return i = k.closest("li"), j = b.parent("ul").parent("li"), c = g.y < k.position().top + k.outerHeight() / 2, e = b.data("id"), d = i.prevAll('li:not([data-id="' + e + '"])').length + (c ? 1 : 2), !1 !== gj.tree.plugins.dragAndDrop.events.nodeDrop(a, e, i.parent("ul").parent("li").data("id"), d) && (h = a.getDataById(b.data("id")), gj.tree.methods.removeDataById(a, b.data("id"), f.records), a.getDataById(i.parent().data("id"))[f.childrenField].splice(i.index() + (c ? 0 : 1), 0, h), c ? b.insertBefore(i) : b.insertAfter(i), gj.tree.plugins.dragAndDrop.private.refresh(a, b, i, j)), !1;
                        k.droppable("destroy")
                    })
                }
            },
            refresh: function (a, b, c, d) {
                var e = a.data();
                gj.tree.plugins.dragAndDrop.private.refreshNode(a, c), gj.tree.plugins.dragAndDrop.private.refreshNode(a, d), gj.tree.plugins.dragAndDrop.private.refreshNode(a, b), b.find('li[data-role="node"]').each(function () {
                    gj.tree.plugins.dragAndDrop.private.refreshNode(a, $(this))
                }), c.children('[data-role="wrapper"]').removeClass(e.style.dropAbove).removeClass(e.style.dropBelow)
            },
            refreshNode: function (a, b) {
                var c = b.children('[data-role="wrapper"]'),
                    d = c.children('[data-role="expander"]'),
                    e = c.children('[data-role="spacer"]'),
                    f = b.children("ul"),
                    g = a.data(),
                    h = b.parentsUntil('[data-type="tree"]', "ul").length;
                f.length && f.children().length ? f.is(":visible") ? d.empty().append(g.icons.collapse) : d.empty().append(g.icons.expand) : d.empty(), c.removeClass(g.style.dropAbove).removeClass(g.style.dropBelow), e.css("width", g.indentation * (h - 1))
            }
        },
        public: {},
        events: {
            nodeDrop: function (a, b, c, d) {
                return a.triggerHandler("nodeDrop", [b, c, d])
            }
        },
        configure: function (a) {
            $.extend(!0, a, gj.tree.plugins.dragAndDrop.public), a.data("dragAndDrop") && gj.draggable && gj.droppable && a.on("nodeDataBound", function (b, c) {
                gj.tree.plugins.dragAndDrop.private.nodeDataBound(a, c)
            })
        }
    }, gj.tree.plugins.lazyLoading = {
        config: {
            base: {
                paramNames: {
                    parentId: "parentId"
                },
                lazyLoading: !1
            }
        },
        private: {
            nodeDataBound: function (a, b, c, d) {
                var e = a.data(),
                    f = b.find('> [data-role="wrapper"] > [data-role="expander"]');
                d.hasChildren && f.empty().append(e.icons.expand)
            },
            createDoneHandler: function (a, b) {
                return function (c) {
                    var d, e, f, g = a.data();
                    if ("string" == typeof c && JSON && (c = JSON.parse(c)), c && c.length) {
                        for (f = b.children("ul"), 0 === f.length && (f = $("<ul />").addClass(g.style.list), b.append(f)), d = 0; d < c.length; d++) a.addNode(c[d], f);
                        e = b.find('>[data-role="wrapper"]>[data-role="expander"]'), e.attr("data-mode", "open"), e.empty().append(g.icons.collapse), gj.tree.events.dataBound(a)
                    }
                }
            },
            expand: function (a, b, c) {
                var d, e = a.data(),
                    f = {},
                    g = b.find(">ul>li");
                g && g.length || "string" == typeof e.dataSource && (f[e.paramNames.parentId] = c, d = {
                    url: e.dataSource,
                    data: f
                }, a.xhr && a.xhr.abort(), a.xhr = $.ajax(d).done(gj.tree.plugins.lazyLoading.private.createDoneHandler(a, b)).fail(a.createErrorHandler()))
            }
        },
        public: {},
        events: {},
        configure: function (a, b, c) {
            c.lazyLoading && (a.on("nodeDataBound", function (b, c, d, e) {
                gj.tree.plugins.lazyLoading.private.nodeDataBound(a, c, d, e)
            }), a.on("expand", function (b, c, d) {
                gj.tree.plugins.lazyLoading.private.expand(a, c, d)
            }))
        }
    }, gj.checkbox = {
        plugins: {}
    }, gj.checkbox.config = {
        base: {
            uiLibrary: "materialdesign",
            iconsLibrary: "materialicons",
            style: {
                wrapperCssClass: "gj-checkbox-md",
                spanCssClass: void 0
            }
        },
        bootstrap: {
            style: {
                wrapperCssClass: "gj-checkbox-bootstrap"
            },
            iconsLibrary: "glyphicons"
        },
        bootstrap4: {
            style: {
                wrapperCssClass: "gj-checkbox-bootstrap gj-checkbox-bootstrap-4"
            },
            iconsLibrary: "materialicons"
        },
        materialicons: {
            style: {
                iconsCssClass: "gj-checkbox-material-icons",
                spanCssClass: "gj-icon"
            }
        },
        glyphicons: {
            style: {
                iconsCssClass: "gj-checkbox-glyphicons",
                spanCssClass: ""
            }
        },
        fontawesome: {
            style: {
                iconsCssClass: "gj-checkbox-fontawesome",
                spanCssClass: "fa"
            }
        }
    }, gj.checkbox.methods = {
        init: function (a) {
            var b = this;
            return gj.widget.prototype.init.call(this, a, "checkbox"), b.attr("data-checkbox", "true"), gj.checkbox.methods.initialize(b), b
        },
        initialize: function (a) {
            var b, c, d = a.data();
            d.style.wrapperCssClass && (b = $('<label class="' + d.style.wrapperCssClass + " " + d.style.iconsCssClass + '"></label>'), a.attr("id") && b.attr("for", a.attr("id")), a.wrap(b), c = $("<span />"), d.style.spanCssClass && c.addClass(d.style.spanCssClass), a.parent().append(c))
        },
        state: function (a, b) {
            return b ? ("checked" === b ? (a.prop("indeterminate", !1), a.prop("checked", !0)) : "unchecked" === b ? (a.prop("indeterminate", !1), a.prop("checked", !1)) : "indeterminate" === b && (a.prop("checked", !0), a.prop("indeterminate", !0)), gj.checkbox.events.change(a, b), a) : b = a.prop("indeterminate") ? "indeterminate" : a.prop("checked") ? "checked" : "unchecked"
        },
        toggle: function (a) {
            return "checked" == a.state() ? a.state("unchecked") : a.state("checked"), a
        },
        destroy: function (a) {
            return "true" === a.attr("data-checkbox") && (a.removeData(), a.removeAttr("data-guid"), a.removeAttr("data-checkbox"), a.off(), a.next("span").remove(), a.unwrap()), a
        }
    }, gj.checkbox.events = {
        change: function (a, b) {
            return a.triggerHandler("change", [b])
        }
    }, gj.checkbox.widget = function (a, b) {
        var c = this,
            d = gj.checkbox.methods;
        return c.toggle = function () {
            return d.toggle(this)
        }, c.state = function (a) {
            return d.state(this, a)
        }, c.destroy = function () {
            return d.destroy(this)
        }, $.extend(a, c), "true" !== a.attr("data-checkbox") && d.init.call(a, b), a
    }, gj.checkbox.widget.prototype = new gj.widget, gj.checkbox.widget.constructor = gj.checkbox.widget,
    function (a) {
        a.fn.checkbox = function (a) {
            var b;
            if (this && this.length) {
                if ("object" != typeof a && a) {
                    if (b = new gj.checkbox.widget(this, null), b[a]) return b[a].apply(this, Array.prototype.slice.call(arguments, 1));
                    throw "Method " + a + " does not exist."
                }
                return new gj.checkbox.widget(this, a)
            }
        }
    }(jQuery), gj.editor = {
        plugins: {},
        messages: {}
    }, gj.editor.config = {
        base: {
            height: 300,
            width: void 0,
            uiLibrary: "materialdesign",
            iconsLibrary: "materialicons",
            locale: "en-us",
            buttons: void 0,
            style: {
                wrapper: "gj-editor gj-editor-md",
                buttonsGroup: "gj-button-md-group",
                button: "gj-button-md",
                buttonActive: "active"
            }
        },
        bootstrap: {
            style: {
                wrapper: "gj-editor gj-editor-bootstrap",
                buttonsGroup: "btn-group",
                button: "btn btn-default gj-cursor-pointer",
                buttonActive: "active"
            }
        },
        bootstrap4: {
            style: {
                wrapper: "gj-editor gj-editor-bootstrap",
                buttonsGroup: "btn-group",
                button: "btn btn-outline-secondary gj-cursor-pointer",
                buttonActive: "active"
            }
        },
        materialicons: {
            icons: {
                bold: '<i class="gj-icon bold" />',
                italic: '<i class="gj-icon italic" />',
                strikethrough: '<i class="gj-icon strikethrough" />',
                underline: '<i class="gj-icon underlined" />',
                listBulleted: '<i class="gj-icon list-bulleted" />',
                listNumbered: '<i class="gj-icon list-numbered" />',
                indentDecrease: '<i class="gj-icon indent-decrease" />',
                indentIncrease: '<i class="gj-icon indent-increase" />',
                alignLeft: '<i class="gj-icon align-left" />',
                alignCenter: '<i class="gj-icon align-center" />',
                alignRight: '<i class="gj-icon align-right" />',
                alignJustify: '<i class="gj-icon align-justify" />',
                undo: '<i class="gj-icon undo" />',
                redo: '<i class="gj-icon redo" />'
            }
        },
        fontawesome: {
            icons: {
                bold: '<i class="fa fa-bold" aria-hidden="true"></i>',
                italic: '<i class="fa fa-italic" aria-hidden="true"></i>',
                strikethrough: '<i class="fa fa-strikethrough" aria-hidden="true"></i>',
                underline: '<i class="fa fa-underline" aria-hidden="true"></i>',
                listBulleted: '<i class="fa fa-list-ul" aria-hidden="true"></i>',
                listNumbered: '<i class="fa fa-list-ol" aria-hidden="true"></i>',
                indentDecrease: '<i class="fa fa-indent" aria-hidden="true"></i>',
                indentIncrease: '<i class="fa fa-outdent" aria-hidden="true"></i>',
                alignLeft: '<i class="fa fa-align-left" aria-hidden="true"></i>',
                alignCenter: '<i class="fa fa-align-center" aria-hidden="true"></i>',
                alignRight: '<i class="fa fa-align-right" aria-hidden="true"></i>',
                alignJustify: '<i class="fa fa-align-justify" aria-hidden="true"></i>',
                undo: '<i class="fa fa-undo" aria-hidden="true"></i>',
                redo: '<i class="fa fa-repeat" aria-hidden="true"></i>'
            }
        }
    }, gj.editor.methods = {
        init: function (a) {
            return gj.widget.prototype.init.call(this, a, "editor"), this.attr("data-editor", "true"), gj.editor.methods.initialize(this), this
        },
        initialize: function (a) {
            var b, c, d, e, f, g = this,
                h = a.data();
            if (a.hide(), "wrapper" !== a[0].parentElement.attributes.role && (d = document.createElement("div"), d.setAttribute("role", "wrapper"), a[0].parentNode.insertBefore(d, a[0]), d.appendChild(a[0])), gj.editor.methods.localization(h), $(d).addClass(h.style.wrapper), h.width && $(d).width(h.width), e = $(d).children('div[role="body"]'), 0 === e.length && (e = $('<div role="body"></div>'), $(d).append(e), a[0].innerText && (e[0].innerHTML = a[0].innerText)), e.attr("contenteditable", !0), e.on("keydown", function (b) {
                    var c = event.keyCode || event.charCode;
                    !1 === gj.editor.events.changing(a) && 8 !== c && 46 !== c && b.preventDefault()
                }), e.on("mouseup keyup mouseout cut paste", function (b) {
                    g.updateToolbar(a, f), gj.editor.events.changed(a), a.html(e.html())
                }), f = $(d).children('div[role="toolbar"]'), 0 === f.length) {
                f = $('<div role="toolbar"></div>'), e.before(f);
                for (var i in h.buttons) {
                    b = $("<div />").addClass(h.style.buttonsGroup);
                    for (var j in h.buttons[i]) c = $(h.buttons[i][j]), c.on("click", function () {
                        gj.editor.methods.executeCmd(a, e, f, $(this))
                    }), b.append(c);
                    f.append(b)
                }
            }
            e.height(h.height - gj.core.height(f[0], !0))
        },
        localization: function (a) {
            var b = gj.editor.messages[a.locale];
            void 0 === a.buttons && (a.buttons = [
                ['<button type="button" class="' + a.style.button + '" title="' + b.bold + '" role="bold">' + a.icons.bold + "</button>", '<button type="button" class="' + a.style.button + '" title="' + b.italic + '" role="italic">' + a.icons.italic + "</button>", '<button type="button" class="' + a.style.button + '" title="' + b.strikethrough + '" role="strikethrough">' + a.icons.strikethrough + "</button>", '<button type="button" class="' + a.style.button + '" title="' + b.underline + '" role="underline">' + a.icons.underline + "</button>"],
                ['<button type="button" class="' + a.style.button + '" title="' + b.listBulleted + '" role="insertunorderedlist">' + a.icons.listBulleted + "</button>", '<button type="button" class="' + a.style.button + '" title="' + b.listNumbered + '" role="insertorderedlist">' + a.icons.listNumbered + "</button>", '<button type="button" class="' + a.style.button + '" title="' + b.indentDecrease + '" role="outdent">' + a.icons.indentDecrease + "</button>", '<button type="button" class="' + a.style.button + '" title="' + b.indentIncrease + '" role="indent">' + a.icons.indentIncrease + "</button>"],
                ['<button type="button" class="' + a.style.button + '" title="' + b.alignLeft + '" role="justifyleft">' + a.icons.alignLeft + "</button>", '<button type="button" class="' + a.style.button + '" title="' + b.alignCenter + '" role="justifycenter">' + a.icons.alignCenter + "</button>", '<button type="button" class="' + a.style.button + '" title="' + b.alignRight + '" role="justifyright">' + a.icons.alignRight + "</button>", '<button type="button" class="' + a.style.button + '" title="' + b.alignJustify + '" role="justifyfull">' + a.icons.alignJustify + "</button>"],
                ['<button type="button" class="' + a.style.button + '" title="' + b.undo + '" role="undo">' + a.icons.undo + "</button>", '<button type="button" class="' + a.style.button + '" title="' + b.redo + '" role="redo">' + a.icons.redo + "</button>"]
            ])
        },
        updateToolbar: function (a, b) {
            var c = a.data();
            $buttons = b.find("[role]").each(function () {
                var a = $(this),
                    b = a.attr("role");
                b && document.queryCommandEnabled(b) && "true" === document.queryCommandValue(b) ? a.addClass(c.style.buttonActive) : a.removeClass(c.style.buttonActive)
            })
        },
        executeCmd: function (a, b, c, d) {
            b.focus(), document.execCommand(d.attr("role"), !1), gj.editor.methods.updateToolbar(a, c)
        },
        content: function (a, b) {
            var c = a.parent().children('div[role="body"]');
            return void 0 === b ? c.html() : c.html(b)
        },
        destroy: function (a) {
            var b;
            return "true" === a.attr("data-editor") && (b = a.parent(), b.children('div[role="body"]').remove(), b.children('div[role="toolbar"]').remove(), a.unwrap(), a.removeData(), a.removeAttr("data-guid"), a.removeAttr("data-editor"), a.off(), a.show()), a
        }
    }, gj.editor.events = {
        changing: function (a) {
            return a.triggerHandler("changing")
        },
        changed: function (a) {
            return a.triggerHandler("changed")
        }
    }, gj.editor.widget = function (a, b) {
        var c = this,
            d = gj.editor.methods;
        return c.content = function (a) {
            return d.content(this, a)
        }, c.destroy = function () {
            return d.destroy(this)
        }, $.extend(a, c), "true" !== a.attr("data-editor") && d.init.call(a, b), a
    }, gj.editor.widget.prototype = new gj.widget, gj.editor.widget.constructor = gj.editor.widget,
    function (a) {
        a.fn.editor = function (a) {
            var b;
            if (this && this.length) {
                if ("object" != typeof a && a) {
                    if (b = new gj.editor.widget(this, null), b[a]) return b[a].apply(this, Array.prototype.slice.call(arguments, 1));
                    throw "Method " + a + " does not exist."
                }
                return new gj.editor.widget(this, a)
            }
        }
    }(jQuery), gj.editor.messages["en-us"] = {
        bold: "Bold",
        italic: "Italic",
        strikethrough: "Strikethrough",
        underline: "Underline",
        listBulleted: "List Bulleted",
        listNumbered: "List Numbered",
        indentDecrease: "Indent Decrease",
        indentIncrease: "Indent Increase",
        alignLeft: "Align Left",
        alignCenter: "Align Center",
        alignRight: "Align Right",
        alignJustify: "Align Justify",
        undo: "Undo",
        redo: "Redo"
    }, gj.dropdown = {
        plugins: {}
    }, gj.dropdown.config = {
        base: {
            dataSource: void 0,
            textField: "text",
            valueField: "value",
            selectedField: "selected",
            width: void 0,
            maxHeight: "auto",
            placeholder: void 0,
            fontSize: void 0,
            uiLibrary: "materialdesign",
            iconsLibrary: "materialicons",
            icons: {
                dropdown: '<i class="gj-icon arrow-dropdown" />',
                dropup: '<i class="gj-icon arrow-dropup" />'
            },
            style: {
                wrapper: "gj-dropdown gj-dropdown-md gj-unselectable",
                list: "gj-list gj-list-md gj-dropdown-list-md",
                active: "gj-list-md-active"
            }
        },
        bootstrap: {
            style: {
                wrapper: "gj-dropdown gj-dropdown-bootstrap gj-dropdown-bootstrap-3 gj-unselectable",
                presenter: "btn btn-default",
                list: "gj-list gj-list-bootstrap gj-dropdown-list-bootstrap list-group",
                item: "list-group-item",
                active: "active"
            },
            iconsLibrary: "glyphicons"
        },
        bootstrap4: {
            style: {
                wrapper: "gj-dropdown gj-dropdown-bootstrap gj-dropdown-bootstrap-4 gj-unselectable",
                presenter: "btn btn-outline-secondary",
                list: "gj-list gj-list-bootstrap gj-dropdown-list-bootstrap list-group",
                item: "list-group-item",
                active: "active"
            }
        },
        materialicons: {
            style: {
                expander: "gj-dropdown-expander-mi"
            }
        },
        fontawesome: {
            icons: {
                dropdown: '<i class="fa fa-caret-down" aria-hidden="true"></i>',
                dropup: '<i class="fa fa-caret-up" aria-hidden="true"></i>'
            },
            style: {
                expander: "gj-dropdown-expander-fa"
            }
        },
        glyphicons: {
            icons: {
                dropdown: '<span class="caret"></span>',
                dropup: '<span class="dropup"><span class="caret" ></span></span>'
            },
            style: {
                expander: "gj-dropdown-expander-glyphicons"
            }
        }
    }, gj.dropdown.methods = {
        init: function (a) {
            return gj.widget.prototype.init.call(this, a, "dropdown"), this.attr("data-dropdown", "true"), gj.dropdown.methods.initialize(this), this
        },
        getHTMLConfig: function () {
            var a = gj.widget.prototype.getHTMLConfig.call(this),
                b = this[0].attributes;
            return b.placeholder && (a.placeholder = b.placeholder.value), a
        },
        initialize: function (a) {
            var b = a.data(),
                c = a.parent('div[role="wrapper"]'),
                d = $('<span role="display"></span>'),
                e = $('<span role="expander">' + b.icons.dropdown + "</span>").addClass(b.style.expander),
                f = $('<button role="presenter" type="button"></button>').addClass(b.style.presenter),
                g = $('<ul role="list" class="' + b.style.list + '"></ul>').attr("guid", a.attr("data-guid"));
            0 === c.length ? (c = $('<div role="wrapper" />').addClass(b.style.wrapper), a.wrap(c)) : c.addClass(b.style.wrapper), b.fontSize && f.css("font-size", b.fontSize), f.on("click", function (b) {
                g.is(":visible") ? gj.dropdown.methods.close(a, g) : gj.dropdown.methods.open(a, g)
            }), f.on("blur", function (b) {
                setTimeout(function () {
                    gj.dropdown.methods.close(a, g)
                }, 500)
            }), f.append(d).append(e), a.hide(), a.after(f), $("body").append(g), g.hide(), a.reload()
        },
        setListPosition: function (a, b, c) {
            var d, e, f, g, h = a.getBoundingClientRect(),
                i = window.scrollY || window.pageYOffset || 0;
            window.scrollX || window.pageXOffset;
            b.style.overflow = "", b.style.overflowX = "", b.style.height = "", gj.core.setChildPosition(a, b), d = gj.core.height(b, !0), g = b.getBoundingClientRect(), e = gj.core.height(a, !0), "auto" === c.maxHeight ? h.top < g.top ? h.top + d + e > window.innerHeight && (f = window.innerHeight - h.top - e - 3) : h.top - d - 3 > 0 ? b.style.top = Math.round(h.top + i - d - 3) + "px" : (b.style.top = i + "px", f = h.top - 3) : !isNaN(c.maxHeight) && c.maxHeight < d && (f = c.maxHeight), f && (b.style.overflow = "scroll", b.style.overflowX = "hidden", b.style.height = f + "px")
        },
        useHtmlDataSource: function (a, b) {
            var c, d, e = [],
                f = a.find("option");
            for (c = 0; c < f.length; c++) d = {}, d[b.valueField] = f[c].value, d[b.textField] = f[c].innerHTML, d[b.selectedField] = a[0].value === f[c].value, e.push(d);
            b.dataSource = e
        },
        filter: function (a) {
            var b, c, d = a.data();
            if (d.dataSource) {
                if ("string" == typeof d.dataSource[0])
                    for (b = 0; b < d.dataSource.length; b++) c = {}, c[d.valueField] = d.dataSource[b], c[d.textField] = d.dataSource[b], d.dataSource[b] = c
            } else d.dataSource = [];
            return d.dataSource
        },
        render: function (a, b) {
            var c = [],
                d = a.data(),
                e = a.parent(),
                f = $("body").children('[role="list"][guid="' + a.attr("data-guid") + '"]'),
                g = e.children('[role="presenter"]'),
                h = (g.children('[role="expander"]'), g.children('[role="display"]'));
            if (a.data("records", b), a.empty(), f.empty(), b && b.length)
                if ($.each(b, function () {
                        var b, e = this[d.valueField],
                            g = this[d.textField],
                            h = this[d.selectedField] && "true" === this[d.selectedField].toString().toLowerCase();
                        b = $('<li value="' + e + '"><div data-role="wrapper"><span data-role="display">' + g + "</span></div></li>"), b.addClass(d.style.item), b.on("click", function (b) {
                            gj.dropdown.methods.select(a, e)
                        }), f.append(b), a.append('<option value="' + e + '">' + g + "</option>"), h && c.push(e)
                    }), 0 === c.length) a.prepend('<option value=""></option>'), a[0].selectedIndex = 0, d.placeholder && (h[0].innerHTML = '<span class="placeholder">' + d.placeholder + "</span>");
                else
                    for (i = 0; i < c.length; i++) gj.dropdown.methods.select(a, c[i]);
            return d.width && (e.css("width", d.width), g.css("width", d.width)), d.fontSize && f.children("li").css("font-size", d.fontSize), gj.dropdown.events.dataBound(a), a
        },
        open: function (a, b) {
            var c = a.data(),
                d = a.parent().find('[role="expander"]'),
                e = a.parent().find('[role="presenter"]'),
                f = gj.core.getScrollParent(a[0]);
            b.css("width", gj.core.width(e[0])), b.show(), gj.dropdown.methods.setListPosition(e[0], b[0], c), d.html(c.icons.dropup), f && (c.parentScrollHandler = function () {
                gj.dropdown.methods.setListPosition(e[0], b[0], c)
            }, gj.dropdown.methods.addParentsScrollListener(f, c.parentScrollHandler))
        },
        close: function (a, b) {
            var c = a.data(),
                d = a.parent().find('[role="expander"]'),
                e = gj.core.getScrollParent(a[0]);
            d.html(c.icons.dropdown), e && c.parentScrollHandler && gj.dropdown.methods.removeParentsScrollListener(e, c.parentScrollHandler), b.hide()
        },
        addParentsScrollListener: function (a, b) {
            var c = gj.core.getScrollParent(a.parentNode);
            a.addEventListener("scroll", b), c && gj.dropdown.methods.addParentsScrollListener(c, b)
        },
        removeParentsScrollListener: function (a, b) {
            var c = gj.core.getScrollParent(a.parentNode);
            a.removeEventListener("scroll", b), c && gj.dropdown.methods.removeParentsScrollListener(c, b)
        },
        select: function (a, b) {
            var c = a.data(),
                d = $("body").children('[role="list"][guid="' + a.attr("data-guid") + '"]'),
                e = d.children('li[value="' + b + '"]'),
                f = a.next('[role="presenter"]').find('[role="display"]'),
                g = gj.dropdown.methods.getRecordByValue(a, b);
            return d.children("li").removeClass(c.style.active), g ? (e.addClass(c.style.active), a[0].value = b, f[0].innerHTML = g[c.textField]) : (c.placeholder && (f[0].innerHTML = '<span class="placeholder">' + c.placeholder + "</span>"), a[0].value = ""), gj.dropdown.events.change(a), gj.dropdown.methods.close(a, d), a
        },
        getRecordByValue: function (a, b) {
            var c, d = a.data(),
                e = void 0;
            for (c = 0; c < d.records.length; c++)
                if (d.records[c][d.valueField] === b) {
                    e = d.records[c];
                    break
                } return e
        },
        value: function (a, b) {
            return void 0 === b ? a.val() : (gj.dropdown.methods.select(a, b), a)
        },
        destroy: function (a) {
            var b = a.data(),
                c = a.parent('div[role="wrapper"]');
            return b && (a.xhr && a.xhr.abort(), a.off(), a.removeData(), a.removeAttr("data-type").removeAttr("data-guid").removeAttr("data-dropdown"), a.removeClass(), c.length > 0 && (c.children('[role="presenter"]').remove(), c.children('[role="list"]').remove(), a.unwrap()), a.show()), a
        }
    }, gj.dropdown.events = {
        change: function (a) {
            return a.triggerHandler("change")
        },
        dataBound: function (a) {
            return a.triggerHandler("dataBound")
        }
    }, gj.dropdown.widget = function (a, b) {
        var c = this,
            d = gj.dropdown.methods;
        return c.value = function (a) {
            return d.value(this, a)
        }, c.enable = function () {
            return d.enable(this)
        }, c.disable = function () {
            return d.disable(this)
        }, c.destroy = function () {
            return d.destroy(this)
        }, $.extend(a, c), "true" !== a.attr("data-dropdown") && d.init.call(a, b), a
    }, gj.dropdown.widget.prototype = new gj.widget, gj.dropdown.widget.constructor = gj.dropdown.widget, gj.dropdown.widget.prototype.getHTMLConfig = gj.dropdown.methods.getHTMLConfig,
    function (a) {
        a.fn.dropdown = function (a) {
            var b;
            if (this && this.length) {
                if ("object" != typeof a && a) {
                    if (b = new gj.dropdown.widget(this, null), b[a]) return b[a].apply(this, Array.prototype.slice.call(arguments, 1));
                    throw "Method " + a + " does not exist."
                }
                return new gj.dropdown.widget(this, a)
            }
        }
    }(jQuery), gj.datepicker = {
        plugins: {}
    }, gj.datepicker.config = {
        base: {
            showOtherMonths: !1,
            selectOtherMonths: !0,
            width: void 0,
            minDate: void 0,
            maxDate: void 0,
            format: "mm/dd/yyyy",
            uiLibrary: "materialdesign",
            iconsLibrary: "materialicons",
            value: void 0,
            weekStartDay: 0,
            disableDates: void 0,
            disableDaysOfWeek: void 0,
            calendarWeeks: !1,
            keyboardNavigation: !0,
            locale: "en-us",
            icons: {
                rightIcon: '<i class="ti-calendar"></i>',
                previousMonth: '<i class="gj-icon chevron-left"></i>',
                nextMonth: '<i class="gj-icon chevron-right"></i>'
            },
            fontSize: void 0,
            size: "default",
            modal: !1,
            header: !1,
            footer: !1,
            showOnFocus: !0,
            showRightIcon: !0,
            style: {
                modal: "gj-modal",
                wrapper: "gj-datepicker gj-datepicker-md gj-unselectable",
                input: "gj-textbox-md",
                calendar: "gj-picker gj-picker-md datepicker gj-unselectable",
                footer: "",
                button: "gj-button-md"
            }
        },
        bootstrap: {
            style: {
                wrapper: "gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group",
                input: "form-control",
                calendar: "gj-picker gj-picker-bootstrap datepicker gj-unselectable",
                footer: "modal-footer",
                button: "btn btn-default"
            },
            iconsLibrary: "glyphicons",
            showOtherMonths: !0
        },
        bootstrap4: {
            style: {
                wrapper: "gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group",
                input: "form-control",
                calendar: "gj-picker gj-picker-bootstrap datepicker gj-unselectable",
                footer: "modal-footer",
                button: "btn btn-default"
            },
            showOtherMonths: !0
        },
        fontawesome: {
            icons: {
                rightIcon: '<i class="fa fa-calendar" aria-hidden="true"></i>',
                previousMonth: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
                nextMonth: '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
            }
        },
        glyphicons: {
            icons: {
                rightIcon: '<span class="glyphicon glyphicon-calendar"></span>',
                previousMonth: '<span class="glyphicon glyphicon-chevron-left"></span>',
                nextMonth: '<span class="glyphicon glyphicon-chevron-right"></span>'
            }
        }
    }, gj.datepicker.methods = {
        init: function (a) {
            return gj.widget.prototype.init.call(this, a, "datepicker"), this.attr("data-datepicker", "true"), gj.datepicker.methods.initialize(this, this.data()), this
        },
        initialize: function (a, b) {
            var c, d, e = a.parent('div[role="wrapper"]');
            0 === e.length ? (e = $('<div role="wrapper" />').addClass(b.style.wrapper), a.wrap(e)) : e.addClass(b.style.wrapper), e = a.parent('div[role="wrapper"]'), b.width && e.css("width", b.width), a.val(b.value).addClass(b.style.input).attr("role", "input"), b.fontSize && a.css("font-size", b.fontSize), "bootstrap" === b.uiLibrary || "bootstrap4" === b.uiLibrary ? "small" === b.size ? (e.addClass("input-group-sm"), a.addClass("form-control-sm")) : "large" === b.size && (e.addClass("input-group-lg"), a.addClass("form-control-lg")) : "small" === b.size ? e.addClass("small") : "large" === b.size && e.addClass("large"), b.showRightIcon && (d = "bootstrap" === b.uiLibrary ? $('<span class="input-group-addon">' + b.icons.rightIcon + "</span>") : "bootstrap4" === b.uiLibrary ? $('<span class="input-group-append"><button class="btn btn-outline-secondary border-left-0" type="button">' + b.icons.rightIcon + "</button></span>") : $(b.icons.rightIcon), d.attr("role", "right-icon"), d.on("click", function (c) {
                $("body").find('[role="calendar"][guid="' + a.attr("data-guid") + '"]').is(":visible") ? gj.datepicker.methods.close(a) : gj.datepicker.methods.open(a, b)
            }), e.append(d)), b.showOnFocus && a.on("focus", function () {
                gj.datepicker.methods.open(a, b)
            }), c = gj.datepicker.methods.createCalendar(a, b), !0 !== b.footer && (a.on("blur", function () {
                a.timeout = setTimeout(function () {
                    gj.datepicker.methods.close(a)
                }, 500)
            }), c.mousedown(function () {
                return clearTimeout(a.timeout), document.activeElement !== a[0] && a.focus(), !1
            }), c.on("click", function () {
                clearTimeout(a.timeout), document.activeElement !== a[0] && a.focus()
            })), b.keyboardNavigation && $(document).on("keydown", gj.datepicker.methods.createKeyDownHandler(a, c, b))
        },
        createCalendar: function (a, b) {
            var c, d, e, f, g, h = $('<div role="calendar" type="month"/>').addClass(b.style.calendar).attr("guid", a.attr("data-guid"));
            return b.fontSize && h.css("font-size", b.fontSize), c = gj.core.parseDate(b.value, b.format, b.locale), !c || isNaN(c.getTime()) ? c = new Date : a.attr("day", c.getFullYear() + "-" + c.getMonth() + "-" + c.getDate()), h.attr("month", c.getMonth()), h.attr("year", c.getFullYear()), gj.datepicker.methods.renderHeader(a, h, b, c), d = $('<div role="body" />'), h.append(d), b.footer && (e = $('<div role="footer" class="' + b.style.footer + '" />'), f = $('<button class="' + b.style.button + '">' + gj.core.messages[b.locale].cancel + "</button>"), f.on("click", function () {
                a.close()
            }), e.append(f), g = $('<button class="' + b.style.button + '">' + gj.core.messages[b.locale].ok + "</button>"), g.on("click", function () {
                var c, d, e = h.attr("selectedDay");
                e ? (d = e.split("-"), c = new Date(d[0], d[1], d[2], h.attr("hour") || 0, h.attr("minute") || 0), gj.datepicker.methods.change(a, h, b, c)) : a.close()
            }), e.append(g), h.append(e)), h.hide(), $("body").append(h), b.modal && (h.wrapAll('<div role="modal" class="' + b.style.modal + '"/>'), gj.core.center(h)), h
        },
        renderHeader: function (a, b, c, d) {
            var e, f, g;
            c.header && (e = $('<div role="header" />'), g = $('<div role="year" />').on("click", function () {
                gj.datepicker.methods.renderDecade(a, b, c), g.addClass("selected"), f.removeClass("selected")
            }), g.html(gj.core.formatDate(d, "yyyy", c.locale)), e.append(g), f = $('<div role="date" class="selected" />').on("click", function () {
                gj.datepicker.methods.renderMonth(a, b, c), f.addClass("selected"), g.removeClass("selected")
            }), f.html(gj.core.formatDate(d, "ddd, mmm dd", c.locale)), e.append(f), b.append(e))
        },
        updateHeader: function (a, b, c) {
            a.find('[role="header"] [role="year"]').removeClass("selected").html(gj.core.formatDate(c, "yyyy", b.locale)), a.find('[role="header"] [role="date"]').addClass("selected").html(gj.core.formatDate(c, "ddd, mmm dd", b.locale)), a.find('[role="header"] [role="hour"]').removeClass("selected").html(gj.core.formatDate(c, "HH", b.locale)), a.find('[role="header"] [role="minute"]').removeClass("selected").html(gj.core.formatDate(c, "MM", b.locale))
        },
        createNavigation: function (a, b, c, d) {
            var e, f, g = $("<thead/>");
            for (f = $('<div role="navigator" />'), f.append($("<div>" + d.icons.previousMonth + "</div>").on("click", gj.datepicker.methods.prev(a, d))), f.append($('<div role="period"></div>').on("click", gj.datepicker.methods.changePeriod(a, d))), f.append($("<div>" + d.icons.nextMonth + "</div>").on("click", gj.datepicker.methods.next(a, d))), b.append(f), e = $('<tr role="week-days" />'), d.calendarWeeks && e.append("<th><div>&nbsp;</div></th>"), i = d.weekStartDay; i < gj.core.messages[d.locale].weekDaysMin.length; i++) e.append("<th><div>" + gj.core.messages[d.locale].weekDaysMin[i] + "</div></th>");
            for (i = 0; i < d.weekStartDay; i++) e.append("<th><div>" + gj.core.messages[d.locale].weekDaysMin[i] + "</div></th>");
            g.append(e), c.append(g)
        },
        renderMonth: function (a, b, c) {
            var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = b.children('[role="body"]'),
                t = $("<table/>"),
                u = $("<tbody/>"),
                v = gj.core.messages[c.locale].titleFormat;
            for (s.off().empty(), gj.datepicker.methods.createNavigation(a, s, t, c), g = parseInt(b.attr("month"), 10), h = parseInt(b.attr("year"), 10), b.attr("type", "month"), v = v.replace("mmmm", gj.core.messages[c.locale].monthNames[g]).replace("yyyy", h), b.find('div[role="period"]').text(v), i = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31), h % 4 == 0 && 1900 != h && (i[1] = 29), j = i[g], k = (new Date(h, g, 1).getDay() + 7 - c.weekStartDay) % 7, d = 0, $row = $("<tr />"), n = gj.datepicker.methods.getPrevMonth(g, h), l = 1; l <= k; l++) f = i[n.month] - k + l, r = new Date(n.year, n.month, f), c.calendarWeeks && 1 === l && $row.append('<td class="calendar-week"><div>' + gj.datepicker.methods.getWeekNumber(r) + "</div></td>"), p = $('<td class="other-month" />'), c.showOtherMonths && (q = $("<div>" + f + "</div>"), p.append(q), c.selectOtherMonths && gj.datepicker.methods.isSelectable(c, r) ? (p.addClass("gj-cursor-pointer").attr("day", f).attr("month", n.month).attr("year", n.year), q.on("click", gj.datepicker.methods.dayClickHandler(a, b, c, r)), q.on("mousedown", function (a) {
                a.stopPropagation()
            })) : p.addClass("disabled")), $row.append(p), d++;
            for (l > 1 && u.append($row), m = new Date, l = 1; l <= j; l++) r = new Date(h, g, l), 0 == d && ($row = $("<tr>"), c.calendarWeeks && $row.append('<td class="calendar-week"><div>' + gj.datepicker.methods.getWeekNumber(r) + "</div></td>")), p = $('<td day="' + l + '" month="' + g + '" year="' + h + '" />'), h === m.getFullYear() && g === m.getMonth() && l === m.getDate() ? p.addClass("today") : p.addClass("current-month"), q = $("<div>" + l + "</div>"), gj.datepicker.methods.isSelectable(c, r) ? (p.addClass("gj-cursor-pointer"), q.on("click", gj.datepicker.methods.dayClickHandler(a, b, c, r)), q.on("mousedown", function (a) {
                a.stopPropagation()
            })) : p.addClass("disabled"), p.append(q), $row.append(p), 7 == ++d && (u.append($row), d = 0);
            for (o = gj.datepicker.methods.getNextMonth(g, h), l = 1; 0 != d; l++) r = new Date(o.year, o.month, l), p = $('<td class="other-month" />'), c.showOtherMonths && (q = $("<div>" + l + "</div>"), c.selectOtherMonths && gj.datepicker.methods.isSelectable(c, r) ? (p.addClass("gj-cursor-pointer").attr("day", l).attr("month", o.month).attr("year", o.year), q.on("click", gj.datepicker.methods.dayClickHandler(a, b, c, r)), q.on("mousedown", function (a) {
                a.stopPropagation()
            })) : p.addClass("disabled"), p.append(q)), $row.append(p), 7 == ++d && (u.append($row), d = 0);
            t.append(u), s.append(t), b.attr("selectedDay") && (e = b.attr("selectedDay").split("-"), r = new Date(e[0], e[1], e[2], b.attr("hour") || 0, b.attr("minute") || 0), b.find('tbody td[day="' + e[2] + '"][month="' + e[1] + '"]').addClass("selected"), gj.datepicker.methods.updateHeader(b, c, r))
        },
        renderYear: function (a, b, c) {
            var d, e, f, g, h = b.find('>[role="body"]>table'),
                i = h.children("tbody");
            for (h.children("thead").hide(), d = parseInt(b.attr("year"), 10), b.attr("type", "year"), b.find('div[role="period"]').text(d), i.empty(), e = 0; e < 3; e++) {
                for ($row = $("<tr />"), f = 4 * e; f <= 4 * e + 3; f++) g = $("<div>" + gj.core.messages[c.locale].monthShortNames[f] + "</div>"), g.on("click", gj.datepicker.methods.selectMonth(a, b, c, f)), $cell = $("<td></td>").append(g), $row.append($cell);
                i.append($row)
            }
        },
        renderDecade: function (a, b, c) {
            var d, e, f, g, h, i = b.find('>[role="body"]>table'),
                j = i.children("tbody");
            for (i.children("thead").hide(), d = parseInt(b.attr("year"), 10), e = d - d % 10, b.attr("type", "decade"), b.find('div[role="period"]').text(e + " - " + (e + 9)), j.empty(), f = e - 1; f <= e + 10; f += 4) {
                for ($row = $("<tr />"), g = f; g <= f + 3; g++) h = $("<div>" + g + "</div>"), h.on("click", gj.datepicker.methods.selectYear(a, b, c, g)), $cell = $("<td></td>").append(h), $row.append($cell);
                j.append($row)
            }
        },
        renderCentury: function (a, b, c) {
            var d, e, f, g, h, i = b.find('>[role="body"]>table'),
                j = i.children("tbody");
            for (i.children("thead").hide(), d = parseInt(b.attr("year"), 10), e = d - d % 100, b.attr("type", "century"), b.find('div[role="period"]').text(e + " - " + (e + 99)), j.empty(), f = e - 10; f < e + 100; f += 40) {
                for ($row = $("<tr />"), g = f; g <= f + 30; g += 10) h = $("<div>" + g + "</div>"), h.on("click", gj.datepicker.methods.selectDecade(a, b, c, g)), $cell = $("<td></td>").append(h), $row.append($cell);
                j.append($row)
            }
        },
        getWeekNumber: function (a) {
            var b = new Date(a.valueOf());
            b.setDate(b.getDate() + 6), b = new Date(Date.UTC(b.getFullYear(), b.getMonth(), b.getDate())), b.setUTCDate(b.getUTCDate() + 4 - (b.getUTCDay() || 7));
            var c = new Date(Date.UTC(b.getUTCFullYear(), 0, 1));
            return Math.ceil(((b - c) / 864e5 + 1) / 7)
        },
        getMinDate: function (a) {
            var b;
            return a.minDate && ("string" == typeof a.minDate ? b = gj.core.parseDate(a.minDate, a.format, a.locale) : "function" == typeof a.minDate ? "string" == typeof (b = a.minDate()) && (b = gj.core.parseDate(b, a.format, a.locale)) : "function" == typeof a.minDate.getMonth && (b = a.minDate)), b
        },
        getMaxDate: function (a) {
            var b;
            return a.maxDate && ("string" == typeof a.maxDate ? b = gj.core.parseDate(a.maxDate, a.format, a.locale) : "function" == typeof a.maxDate ? "string" == typeof (b = a.maxDate()) && (b = gj.core.parseDate(b, a.format, a.locale)) : "function" == typeof a.maxDate.getMonth && (b = a.maxDate)), b
        },
        isSelectable: function (a, b) {
            var c, d = !0,
                e = gj.datepicker.methods.getMinDate(a),
                f = gj.datepicker.methods.getMaxDate(a);
            if (e && b < e ? d = !1 : f && b > f && (d = !1), d) {
                if (a.disableDates)
                    if ($.isArray(a.disableDates))
                        for (c = 0; c < a.disableDates.length; c++) a.disableDates[c] instanceof Date && a.disableDates[c].getTime() === b.getTime() ? d = !1 : "string" == typeof a.disableDates[c] && gj.core.parseDate(a.disableDates[c], a.format, a.locale).getTime() === b.getTime() && (d = !1);
                    else a.disableDates instanceof Function && (d = a.disableDates(b));
                $.isArray(a.disableDaysOfWeek) && a.disableDaysOfWeek.indexOf(b.getDay()) > -1 && (d = !1)
            }
            return d
        },
        getPrevMonth: function (a, b) {
            return date = new Date(b, a, 1), date.setMonth(date.getMonth() - 1), {
                month: date.getMonth(),
                year: date.getFullYear()
            }
        },
        getNextMonth: function (a, b) {
            return date = new Date(b, a, 1), date.setMonth(date.getMonth() + 1), {
                month: date.getMonth(),
                year: date.getFullYear()
            }
        },
        prev: function (a, b) {
            return function () {
                var c, d, e, f, g, h = $("body").find('[role="calendar"][guid="' + a.attr("data-guid") + '"]');
                switch (e = parseInt(h.attr("year"), 10), h.attr("type")) {
                    case "month":
                        d = parseInt(h.attr("month"), 10), c = gj.datepicker.methods.getPrevMonth(d, e), h.attr("month", c.month), h.attr("year", c.year), gj.datepicker.methods.renderMonth(a, h, b);
                        break;
                    case "year":
                        h.attr("year", e - 1), gj.datepicker.methods.renderYear(a, h, b);
                        break;
                    case "decade":
                        f = e - e % 10, h.attr("year", f - 10), gj.datepicker.methods.renderDecade(a, h, b);
                        break;
                    case "century":
                        g = e - e % 100, h.attr("year", g - 100), gj.datepicker.methods.renderCentury(a, h, b)
                }
            }
        },
        next: function (a, b) {
            return function () {
                var c, d, e, f, g, h = $("body").find('[role="calendar"][guid="' + a.attr("data-guid") + '"]');
                switch (e = parseInt(h.attr("year"), 10), h.attr("type")) {
                    case "month":
                        d = parseInt(h.attr("month"), 10), c = gj.datepicker.methods.getNextMonth(d, e), h.attr("month", c.month), h.attr("year", c.year), gj.datepicker.methods.renderMonth(a, h, b);
                        break;
                    case "year":
                        h.attr("year", e + 1), gj.datepicker.methods.renderYear(a, h, b);
                        break;
                    case "decade":
                        f = e - e % 10, h.attr("year", f + 10), gj.datepicker.methods.renderDecade(a, h, b);
                        break;
                    case "century":
                        g = e - e % 100, h.attr("year", g + 100), gj.datepicker.methods.renderCentury(a, h, b)
                }
            }
        },
        changePeriod: function (a, b) {
            return function (c) {
                var d = $("body").find('[role="calendar"][guid="' + a.attr("data-guid") + '"]');
                switch (d.attr("type")) {
                    case "month":
                        gj.datepicker.methods.renderYear(a, d, b);
                        break;
                    case "year":
                        gj.datepicker.methods.renderDecade(a, d, b);
                        break;
                    case "decade":
                        gj.datepicker.methods.renderCentury(a, d, b)
                }
            }
        },
        dayClickHandler: function (a, b, c, d) {
            return function (e) {
                return e && e.stopPropagation(), gj.datepicker.methods.selectDay(a, b, c, d), !0 !== c.footer && !1 !== c.autoClose && gj.datepicker.methods.change(a, b, c, d), a
            }
        },
        change: function (a, b, c, d) {
            var e = (d.getDate(), d.getMonth()),
                f = d.getFullYear(),
                g = gj.core.formatDate(d, c.format, c.locale);
            b.attr("month", e), b.attr("year", f), a.val(g), gj.datepicker.events.change(a), "none" !== window.getComputedStyle(b[0]).display && gj.datepicker.methods.close(a)
        },
        selectDay: function (a, b, c, d) {
            var e = d.getDate(),
                f = d.getMonth(),
                g = d.getFullYear();
            b.attr("selectedDay", g + "-" + f + "-" + e), b.find("tbody td").removeClass("selected"), b.find('tbody td[day="' + e + '"][month="' + f + '"]').addClass("selected"), gj.datepicker.methods.updateHeader(b, c, d), gj.datepicker.events.select(a, "day")
        },
        selectMonth: function (a, b, c, d) {
            return function (e) {
                b.attr("month", d), gj.datepicker.methods.renderMonth(a, b, c), gj.datepicker.events.select(a, "month")
            }
        },
        selectYear: function (a, b, c, d) {
            return function (e) {
                b.attr("year", d), gj.datepicker.methods.renderYear(a, b, c), gj.datepicker.events.select(a, "year")
            }
        },
        selectDecade: function (a, b, c, d) {
            return function (e) {
                b.attr("year", d), gj.datepicker.methods.renderDecade(a, b, c), gj.datepicker.events.select(a, "decade")
            }
        },
        open: function (a, b) {
            var c, d = $("body").find('[role="calendar"][guid="' + a.attr("data-guid") + '"]');
            switch (a.val() ? a.value(a.val()) : (c = new Date, d.attr("month", c.getMonth()), d.attr("year", c.getFullYear())), d.attr("type")) {
                case "month":
                    gj.datepicker.methods.renderMonth(a, d, b);
                    break;
                case "year":
                    gj.datepicker.methods.renderYear(a, d, b);
                    break;
                case "decade":
                    gj.datepicker.methods.renderDecade(a, d, b);
                    break;
                case "century":
                    gj.datepicker.methods.renderCentury(a, d, b)
            }
            d.show(), d.closest('div[role="modal"]').show(), b.modal ? gj.core.center(d) : (gj.core.setChildPosition(a[0], d[0]), document.activeElement !== a[0] && a.focus()), clearTimeout(a.timeout), gj.datepicker.events.open(a)
        },
        close: function (a) {
            var b = $("body").find('[role="calendar"][guid="' + a.attr("data-guid") + '"]');
            b.hide(), b.closest('div[role="modal"]').hide(), gj.datepicker.events.close(a)
        },
        createKeyDownHandler: function (a, b, c) {
            return function (d) {
                var e, f, g, h, i, j, d = d || window.event;
                "none" !== window.getComputedStyle(b[0]).display && (j = gj.datepicker.methods.getActiveCell(b), "38" == d.keyCode ? (h = j.index(), i = j.closest("tr").prev("tr").find("td:eq(" + h + ")"), i.is("[day]") || (gj.datepicker.methods.prev(a, c)(), i = b.find("tbody tr").last().find("td:eq(" + h + ")"), i.is(":empty") && (i = b.find("tbody tr").last().prev().find("td:eq(" + h + ")"))), i.is("[day]") && (i.addClass("focused"), j.removeClass("focused"))) : "40" == d.keyCode ? (h = j.index(), i = j.closest("tr").next("tr").find("td:eq(" + h + ")"), i.is("[day]") || (gj.datepicker.methods.next(a, c)(), i = b.find("tbody tr").first().find("td:eq(" + h + ")"), i.is("[day]") || (i = b.find("tbody tr:eq(1)").find("td:eq(" + h + ")"))), i.is("[day]") && (i.addClass("focused"), j.removeClass("focused"))) : "37" == d.keyCode ? (i = j.prev("td[day]:not(.disabled)"), 0 === i.length && (i = j.closest("tr").prev("tr").find("td[day]").last()), 0 === i.length && (gj.datepicker.methods.prev(a, c)(), i = b.find("tbody tr").last().find("td[day]").last()), i.length > 0 && (i.addClass("focused"), j.removeClass("focused"))) : "39" == d.keyCode ? (i = j.next("[day]:not(.disabled)"), 0 === i.length && (i = j.closest("tr").next("tr").find("td[day]").first()), 0 === i.length && (gj.datepicker.methods.next(a, c)(), i = b.find("tbody tr").first().find("td[day]").first()), i.length > 0 && (i.addClass("focused"), j.removeClass("focused"))) : "13" == d.keyCode ? (g = parseInt(j.attr("day"), 10), e = parseInt(j.attr("month"), 10), f = parseInt(j.attr("year"), 10), gj.datepicker.methods.dayClickHandler(a, b, c, new Date(f, e, g))()) : "27" == d.keyCode && a.close())
            }
        },
        getActiveCell: function (a) {
            var b = a.find("td[day].focused");
            return 0 === b.length && (b = a.find("td[day].selected"), 0 === b.length && (b = a.find("td[day].today"), 0 === b.length && (b = a.find("td[day]:not(.disabled)").first()))), b
        },
        value: function (a, b) {
            var c, d, e = a.data();
            return void 0 === b ? a.val() : (d = gj.core.parseDate(b, e.format, e.locale), d && d.getTime() ? (c = $("body").find('[role="calendar"][guid="' + a.attr("data-guid") + '"]'), gj.datepicker.methods.dayClickHandler(a, c, e, d)()) : a.val(""), a)
        },
        destroy: function (a) {
            var b = a.data(),
                c = a.parent(),
                d = $("body").find('[role="calendar"][guid="' + a.attr("data-guid") + '"]');
            return b && (a.off(), d.parent('[role="modal"]').length > 0 && d.unwrap(), d.remove(), a.removeData(), a.removeAttr("data-type").removeAttr("data-guid").removeAttr("data-datepicker"), a.removeClass(), c.children('[role="right-icon"]').remove(), a.unwrap()), a
        }
    }, gj.datepicker.events = {
        change: function (a) {
            return a.triggerHandler("change")
        },
        select: function (a, b) {
            return a.triggerHandler("select", [b])
        },
        open: function (a) {
            return a.triggerHandler("open")
        },
        close: function (a) {
            return a.triggerHandler("close")
        }
    }, gj.datepicker.widget = function (a, b) {
        var c = this,
            d = gj.datepicker.methods;
        return c.value = function (a) {
            return d.value(this, a)
        }, c.destroy = function () {
            return d.destroy(this)
        }, c.open = function () {
            return d.open(this, this.data())
        }, c.close = function () {
            return d.close(this)
        }, $.extend(a, c), "true" !== a.attr("data-datepicker") && d.init.call(a, b), a
    }, gj.datepicker.widget.prototype = new gj.widget, gj.datepicker.widget.constructor = gj.datepicker.widget,
    function (a) {
        a.fn.datepicker = function (a) {
            var b;
            if (this && this.length) {
                if ("object" != typeof a && a) {
                    if (b = new gj.datepicker.widget(this, null), b[a]) return b[a].apply(this, Array.prototype.slice.call(arguments, 1));
                    throw "Method " + a + " does not exist."
                }
                return new gj.datepicker.widget(this, a)
            }
        }
    }(jQuery), gj.timepicker = {
        plugins: {}
    }, gj.timepicker.config = {
        base: {
            width: void 0,
            modal: !0,
            header: !0,
            footer: !0,
            format: "HH:MM",
            uiLibrary: "materialdesign",
            value: void 0,
            mode: "ampm",
            locale: "en-us",
            size: "default",
            icons: {
                rightIcon: '<i class="gj-icon clock" />'
            },
            style: {
                modal: "gj-modal",
                wrapper: "gj-timepicker gj-timepicker-md gj-unselectable",
                input: "gj-textbox-md",
                clock: "gj-picker gj-picker-md timepicker",
                footer: "",
                button: "gj-button-md"
            }
        },
        bootstrap: {
            style: {
                wrapper: "gj-timepicker gj-timepicker-bootstrap gj-unselectable input-group",
                input: "form-control",
                clock: "gj-picker gj-picker-bootstrap timepicker",
                footer: "modal-footer",
                button: "btn btn-default"
            },
            iconsLibrary: "glyphicons"
        },
        bootstrap4: {
            style: {
                wrapper: "gj-timepicker gj-timepicker-bootstrap gj-unselectable input-group",
                input: "form-control border",
                clock: "gj-picker gj-picker-bootstrap timepicker",
                footer: "modal-footer",
                button: "btn btn-default"
            }
        }
    }, gj.timepicker.methods = {
        init: function (a) {
            return gj.picker.widget.prototype.init.call(this, a, "timepicker"), this
        },
        initialize: function () {},
        initMouse: function (a, b, c, d) {
            a.off(), a.on("mousedown", gj.timepicker.methods.mouseDownHandler(b, c)), a.on("mousemove", gj.timepicker.methods.mouseMoveHandler(b, c, d)), a.on("mouseup", gj.timepicker.methods.mouseUpHandler(b, c, d))
        },
        createPicker: function (a) {
            var b, c = a.data(),
                d = $('<div role="picker" />').addClass(c.style.clock).attr("guid", a.attr("data-guid")),
                e = $('<div role="hour" />'),
                f = $('<div role="minute" />'),
                g = $('<div role="header" />'),
                h = $('<div role="mode" />'),
                i = $('<div role="body" />'),
                j = $('<button class="' + c.style.button + '">' + gj.core.messages[c.locale].ok + "</button>"),
                k = $('<button class="' + c.style.button + '">' + gj.core.messages[c.locale].cancel + "</button>"),
                l = $('<div role="footer" class="' + c.style.footer + '" />');
            return b = gj.core.parseDate(c.value, c.format, c.locale), !b || isNaN(b.getTime()) ? b = new Date : a.attr("hours", b.getHours()), gj.timepicker.methods.initMouse(i, a, d, c), c.header && (e.on("click", function () {
                gj.timepicker.methods.renderHours(a, d, c)
            }), f.on("click", function () {
                gj.timepicker.methods.renderMinutes(a, d, c)
            }), g.append(e).append(":").append(f), "ampm" === c.mode && (h.append($('<span role="am">' + gj.core.messages[c.locale].am + "</span>").on("click", function () {
                var b = gj.timepicker.methods.getHour(d);
                d.attr("mode", "am"), $(this).addClass("selected"), $(this).parent().children('[role="pm"]').removeClass("selected"), b >= 12 && d.attr("hour", b - 12), c.modal || (clearTimeout(a.timeout), a.focus())
            })), h.append("<br />"), h.append($('<span role="pm">' + gj.core.messages[c.locale].pm + "</span>").on("click", function () {
                var b = gj.timepicker.methods.getHour(d);
                d.attr("mode", "pm"), $(this).addClass("selected"), $(this).parent().children('[role="am"]').removeClass("selected"), b < 12 && d.attr("hour", b + 12), c.modal || (clearTimeout(a.timeout), a.focus())
            })), g.append(h)), d.append(g)), d.append(i), c.footer && (k.on("click", function () {
                a.close()
            }), l.append(k), j.on("click", gj.timepicker.methods.setTime(a, d)), l.append(j), d.append(l)), d.hide(), $("body").append(d), c.modal && (d.wrapAll('<div role="modal" class="' + c.style.modal + '"/>'), gj.core.center(d)), d
        },
        getHour: function (a) {
            return parseInt(a.attr("hour"), 10) || 0
        },
        getMinute: function (a) {
            return parseInt(a.attr("minute"), 10) || 0
        },
        setTime: function (a, b) {
            return function () {
                var c = gj.timepicker.methods.getHour(b),
                    d = gj.timepicker.methods.getMinute(b),
                    e = b.attr("mode"),
                    f = new Date(0, 0, 0, 12 === c && "am" === e ? 0 : c, d),
                    g = a.data(),
                    h = gj.core.formatDate(f, g.format, g.locale);
                a.value(h), a.close()
            }
        },
        getPointerValue: function (a, b, c) {
            var d, e, f = 256,
                g = Math.atan2(f / 2 - a, f / 2 - b) / Math.PI * 180;
            switch (g < 0 && (g = 360 + g), c) {
                case "ampm":
                    return d = 12 - Math.round(12 * g / 360), 0 === d ? 12 : d;
                case "24hr":
                    return e = Math.sqrt(Math.pow(f / 2 - a, 2) + Math.pow(f / 2 - b, 2)), d = 12 - Math.round(12 * g / 360), 0 === d && (d = 12), e < f / 2 - 32 && (d = 12 === d ? 0 : d + 12), d;
                case "minutes":
                    return d = Math.round(60 - 60 * g / 360), 60 === d ? 0 : d
            }
        },
        updateArrow: function (a, b, c, d) {
            var e, f, g = b.mouseX(a),
                h = b.mouseY(a),
                i = window.scrollY || window.pageYOffset || 0,
                j = window.scrollX || window.pageXOffset || 0;
            e = a.target.getBoundingClientRect(), "hours" == d.dialMode ? (f = gj.timepicker.methods.getPointerValue(g - j - e.left, h - i - e.top, d.mode), c.attr("hour", "ampm" === d.mode && "pm" === c.attr("mode") && f < 12 ? f + 12 : f)) : "minutes" == d.dialMode && (f = gj.timepicker.methods.getPointerValue(g - j - e.left, h - i - e.top, "minutes"), c.attr("minute", f)), gj.timepicker.methods.update(b, c, d)
        },
        update: function (a, b, c) {
            var d, e, f, g, h, i;
            d = gj.timepicker.methods.getHour(b), e = gj.timepicker.methods.getMinute(b), f = b.find('[role="arrow"]'), "hours" == c.dialMode && (0 == d || d > 12) && "24hr" === c.mode ? f.css("width", "calc(50% - 52px)") : f.css("width", "calc(50% - 20px)"), "hours" == c.dialMode ? f.css("transform", "rotate(" + (30 * d - 90).toString() + "deg)") : f.css("transform", "rotate(" + (6 * e - 90).toString() + "deg)"), f.show(), g = "ampm" === c.mode && d > 12 ? d - 12 : 0 == d ? 12 : d, i = b.find('[role="body"] span'), i.removeClass("selected"), i.filter(function (a) {
                return "hours" == c.dialMode ? parseInt($(this).text(), 10) == g : parseInt($(this).text(), 10) == e
            }).addClass("selected"), c.header && (h = b.find('[role="header"]'), h.find('[role="hour"]').text(g), h.find('[role="minute"]').text(gj.core.pad(e)), "ampm" === c.mode && (d >= 12 ? (h.find('[role="pm"]').addClass("selected"), h.find('[role="am"]').removeClass("selected")) : (h.find('[role="am"]').addClass("selected"), h.find('[role="pm"]').removeClass("selected"))))
        },
        mouseDownHandler: function (a, b) {
            return function (b) {
                a.mouseMove = !0
            }
        },
        mouseMoveHandler: function (a, b, c) {
            return function (d) {
                a.mouseMove && gj.timepicker.methods.updateArrow(d, a, b, c)
            }
        },
        mouseUpHandler: function (a, b, c) {
            return function (d) {
                gj.timepicker.methods.updateArrow(d, a, b, c), a.mouseMove = !1, c.modal || (clearTimeout(a.timeout), a.focus()), "hours" == c.dialMode ? setTimeout(function () {
                    gj.timepicker.events.select(a, "hour"), gj.timepicker.methods.renderMinutes(a, b, c)
                }, 1e3) : "minutes" == c.dialMode && (!0 !== c.footer && !1 !== c.autoClose && gj.timepicker.methods.setTime(a, b)(), gj.timepicker.events.select(a, "minute"))
            }
        },
        renderHours: function (a, b, c) {
            var d, e = b.find('[role="body"]');
            clearTimeout(a.timeout), e.empty(), d = $('<div role="dial"></div>'), d.append('<div role="arrow" style="transform: rotate(-90deg); display: none;"><div class="arrow-begin"></div><div class="arrow-end"></div></div>'), d.append('<span role="hour" style="transform: translate(54px, -93.5307px);">1</span>'), d.append('<span role="hour" style="transform: translate(93.5307px, -54px);">2</span>'), d.append('<span role="hour" style="transform: translate(108px, 0px);">3</span>'), d.append('<span role="hour" style="transform: translate(93.5307px, 54px);">4</span>'), d.append('<span role="hour" style="transform: translate(54px, 93.5307px);">5</span>'), d.append('<span role="hour" style="transform: translate(6.61309e-15px, 108px);">6</span>'), d.append('<span role="hour" style="transform: translate(-54px, 93.5307px);">7</span>'), d.append('<span role="hour" style="transform: translate(-93.5307px, 54px);">8</span>'), d.append('<span role="hour" style="transform: translate(-108px, 1.32262e-14px);">9</span>'), d.append('<span role="hour" style="transform: translate(-93.5307px, -54px);">10</span>'), d.append('<span role="hour" style="transform: translate(-54px, -93.5307px);">11</span>'), d.append('<span role="hour" style="transform: translate(-1.98393e-14px, -108px);">12</span>'), "24hr" === c.mode && (d.append('<span role="hour" style="transform: translate(38px, -65.8179px);">13</span>'), d.append('<span role="hour" style="transform: translate(65.8179px, -38px);">14</span>'), d.append('<span role="hour" style="transform: translate(76px, 0px);">15</span>'), d.append('<span role="hour" style="transform: translate(65.8179px, 38px);">16</span>'), d.append('<span role="hour" style="transform: translate(38px, 65.8179px);">17</span>'), d.append('<span role="hour" style="transform: translate(4.65366e-15px, 76px);">18</span>'), d.append('<span role="hour" style="transform: translate(-38px, 65.8179px);">19</span>'), d.append('<span role="hour" style="transform: translate(-65.8179px, 38px);">20</span>'), d.append('<span role="hour" style="transform: translate(-76px, 9.30732e-15px);">21</span>'), d.append('<span role="hour" style="transform: translate(-65.8179px, -38px);">22</span>'), d.append('<span role="hour" style="transform: translate(-38px, -65.8179px);">23</span>'), d.append('<span role="hour" style="transform: translate(-1.3961e-14px, -76px);">00</span>')), e.append(d), b.find('[role="header"] [role="hour"]').addClass("selected"), b.find('[role="header"] [role="minute"]').removeClass("selected"), c.dialMode = "hours", gj.timepicker.methods.update(a, b, c)
        },
        renderMinutes: function (a, b, c) {
            var d = b.find('[role="body"]');
            clearTimeout(a.timeout), d.empty(), $dial = $('<div role="dial"></div>'), $dial.append('<div role="arrow" style="transform: rotate(-90deg); display: none;"><div class="arrow-begin"></div><div class="arrow-end"></div></div>'), $dial.append('<span role="hour" style="transform: translate(54px, -93.5307px);">5</span>'), $dial.append('<span role="hour" style="transform: translate(93.5307px, -54px);">10</span>'), $dial.append('<span role="hour" style="transform: translate(108px, 0px);">15</span>'), $dial.append('<span role="hour" style="transform: translate(93.5307px, 54px);">20</span>'), $dial.append('<span role="hour" style="transform: translate(54px, 93.5307px);">25</span>'), $dial.append('<span role="hour" style="transform: translate(6.61309e-15px, 108px);">30</span>'), $dial.append('<span role="hour" style="transform: translate(-54px, 93.5307px);">35</span>'), $dial.append('<span role="hour" style="transform: translate(-93.5307px, 54px);">40</span>'), $dial.append('<span role="hour" style="transform: translate(-108px, 1.32262e-14px);">45</span>'), $dial.append('<span role="hour" style="transform: translate(-93.5307px, -54px);">50</span>'), $dial.append('<span role="hour" style="transform: translate(-54px, -93.5307px);">55</span>'), $dial.append('<span role="hour" style="transform: translate(-1.98393e-14px, -108px);">00</span>'), d.append($dial), b.find('[role="header"] [role="hour"]').removeClass("selected"), b.find('[role="header"] [role="minute"]').addClass("selected"), c.dialMode = "minutes", gj.timepicker.methods.update(a, b, c)
        },
        open: function (a) {
            var b, c, d = a.data(),
                e = $("body").find('[role="picker"][guid="' + a.attr("data-guid") + '"]');
            return b = a.value() ? gj.core.parseDate(a.value(), d.format, d.locale) : new Date, c = b.getHours(), "ampm" === d.mode && e.attr("mode", c > 12 ? "pm" : "am"), e.attr("hour", c), e.attr("minute", b.getMinutes()), gj.timepicker.methods.renderHours(a, e, d), gj.picker.widget.prototype.open.call(a, "timepicker"), a
        },
        value: function (a, b) {
            a.data();
            return void 0 === b ? a.val() : (a.val(b), gj.timepicker.events.change(a), a)
        }
    }, gj.timepicker.events = {
        change: function (a) {
            return a.triggerHandler("change")
        },
        select: function (a, b) {
            return a.triggerHandler("select", [b])
        },
        open: function (a) {
            return a.triggerHandler("open")
        },
        close: function (a) {
            return a.triggerHandler("close")
        }
    }, gj.timepicker.widget = function (a, b) {
        var c = this,
            d = gj.timepicker.methods;
        return c.mouseMove = !1, c.value = function (a) {
            return d.value(this, a)
        }, c.destroy = function () {
            return gj.picker.widget.prototype.destroy.call(this, "timepicker")
        }, c.open = function () {
            return gj.timepicker.methods.open(this)
        }, c.close = function () {
            return gj.picker.widget.prototype.close.call(this, "timepicker")
        }, $.extend(a, c), "true" !== a.attr("data-timepicker") && d.init.call(a, b), a
    }, gj.timepicker.widget.prototype = new gj.picker.widget, gj.timepicker.widget.constructor = gj.timepicker.widget,
    function (a) {
        a.fn.timepicker = function (a) {
            var b;
            if (this && this.length) {
                if ("object" != typeof a && a) {
                    if (b = new gj.timepicker.widget(this, null), b[a]) return b[a].apply(this, Array.prototype.slice.call(arguments, 1));
                    throw "Method " + a + " does not exist."
                }
                return new gj.timepicker.widget(this, a)
            }
        }
    }(jQuery), gj.datetimepicker = {
        plugins: {},
        messages: {
            "en-us": {}
        }
    }, gj.datetimepicker.config = {
        base: {
            datepicker: gj.datepicker.config.base,
            timepicker: gj.timepicker.config.base,
            uiLibrary: "materialdesign",
            value: void 0,
            format: "HH:MM mm/dd/yyyy",
            width: void 0,
            modal: !1,
            footer: !1,
            size: "default",
            locale: "en-us",
            icons: {},
            style: {
                calendar: "gj-picker gj-picker-md datetimepicker gj-unselectable"
            }
        },
        bootstrap: {
            style: {
                calendar: "gj-picker gj-picker-bootstrap datetimepicker gj-unselectable"
            },
            iconsLibrary: "glyphicons"
        },
        bootstrap4: {
            style: {
                calendar: "gj-picker gj-picker-bootstrap datetimepicker gj-unselectable"
            }
        }
    }, gj.datetimepicker.methods = {
        init: function (a) {
            return gj.widget.prototype.init.call(this, a, "datetimepicker"), this.attr("data-datetimepicker", "true"), gj.datetimepicker.methods.initialize(this), this
        },
        getConfig: function (a, b) {
            var c = gj.widget.prototype.getConfig.call(this, a, b);
            return uiLibrary = a.hasOwnProperty("uiLibrary") ? a.uiLibrary : c.uiLibrary, gj.datepicker.config[uiLibrary] && $.extend(!0, c.datepicker, gj.datepicker.config[uiLibrary]), gj.timepicker.config[uiLibrary] && $.extend(!0, c.timepicker, gj.timepicker.config[uiLibrary]), iconsLibrary = a.hasOwnProperty("iconsLibrary") ? a.iconsLibrary : c.iconsLibrary, gj.datepicker.config[iconsLibrary] && $.extend(!0, c.datepicker, gj.datepicker.config[iconsLibrary]), gj.timepicker.config[iconsLibrary] && $.extend(!0, c.timepicker, gj.timepicker.config[iconsLibrary]), c
        },
        initialize: function (a) {
            var b, c, d, e, f, g, h, i, j = a.data();
            j.datepicker.uiLibrary = j.uiLibrary, j.datepicker.iconsLibrary = j.iconsLibrary, j.datepicker.width = j.width, j.datepicker.format = j.format, j.datepicker.locale = j.locale, j.datepicker.modal = j.modal, j.datepicker.footer = j.footer, j.datepicker.style.calendar = j.style.calendar, j.datepicker.value = j.value, j.datepicker.size = j.size, j.datepicker.autoClose = !1, gj.datepicker.methods.initialize(a, j.datepicker), a.on("select", function (c, d) {
                var e, f;
                "day" === d ? gj.datetimepicker.methods.createShowHourHandler(a, b, j)() : "minute" === d && b.attr("selectedDay") && !0 !== j.footer && (selectedDay = b.attr("selectedDay").split("-"), e = new Date(selectedDay[0], selectedDay[1], selectedDay[2], b.attr("hour") || 0, b.attr("minute") || 0), f = gj.core.formatDate(e, j.format, j.locale), a.val(f), gj.datetimepicker.events.change(a), gj.datetimepicker.methods.close(a))
            }), a.on("open", function () {
                var a = b.children('[role="header"]');
                a.find('[role="calendarMode"]').addClass("selected"), a.find('[role="clockMode"]').removeClass("selected")
            }), b = $("body").find('[role="calendar"][guid="' + a.attr("data-guid") + '"]'), f = j.value ? gj.core.parseDate(j.value, j.format, j.locale) : new Date, b.attr("hour", f.getHours()), b.attr("minute", f.getMinutes()), j.timepicker.uiLibrary = j.uiLibrary, j.timepicker.iconsLibrary = j.iconsLibrary, j.timepicker.format = j.format, j.timepicker.locale = j.locale, j.timepicker.header = !0, j.timepicker.footer = j.footer, j.timepicker.size = j.size, j.timepicker.mode = "24hr", j.timepicker.autoClose = !1, c = $('<div role="header" />'), d = $('<div role="date" class="selected" />'), d.on("click", gj.datetimepicker.methods.createShowDateHandler(a, b, j)), d.html(gj.core.formatDate(new Date, "ddd, mmm dd", j.locale)), c.append(d), g = $('<div role="switch"></div>'), h = $('<i class="gj-icon selected" role="calendarMode">event</i>'), h.on("click", gj.datetimepicker.methods.createShowDateHandler(a, b, j)), g.append(h), e = $('<div role="time" />'), e.append($('<div role="hour" />').on("click", gj.datetimepicker.methods.createShowHourHandler(a, b, j)).html(gj.core.formatDate(new Date, "HH", j.locale))), e.append(":"), e.append($('<div role="minute" />').on("click", gj.datetimepicker.methods.createShowMinuteHandler(a, b, j)).html(gj.core.formatDate(new Date, "MM", j.locale))), g.append(e), i = $('<i class="gj-icon" role="clockMode">clock</i>'), i.on("click", gj.datetimepicker.methods.createShowHourHandler(a, b, j)), g.append(i), c.append(g), b.prepend(c)
        },
        createShowDateHandler: function (a, b, c) {
            return function (d) {
                var e = b.children('[role="header"]');
                e.find('[role="calendarMode"]').addClass("selected"), e.find('[role="date"]').addClass("selected"), e.find('[role="clockMode"]').removeClass("selected"), e.find('[role="hour"]').removeClass("selected"), e.find('[role="minute"]').removeClass("selected"), gj.datepicker.methods.renderMonth(a, b, c.datepicker)
            }
        },
        createShowHourHandler: function (a, b, c) {
            return function () {
                var d = b.children('[role="header"]');
                d.find('[role="calendarMode"]').removeClass("selected"), d.find('[role="date"]').removeClass("selected"), d.find('[role="clockMode"]').addClass("selected"), d.find('[role="hour"]').addClass("selected"), d.find('[role="minute"]').removeClass("selected"), gj.timepicker.methods.initMouse(b.children('[role="body"]'), a, b, c.timepicker), gj.timepicker.methods.renderHours(a, b, c.timepicker)
            }
        },
        createShowMinuteHandler: function (a, b, c) {
            return function () {
                var d = b.children('[role="header"]');
                d.find('[role="calendarMode"]').removeClass("selected"), d.find('[role="date"]').removeClass("selected"), d.find('[role="clockMode"]').addClass("selected"), d.find('[role="hour"]').removeClass("selected"), d.find('[role="minute"]').addClass("selected"), gj.timepicker.methods.initMouse(b.children('[role="body"]'), a, b, c.timepicker), gj.timepicker.methods.renderMinutes(a, b, c.timepicker)
            }
        },
        close: function (a) {
            var b = $("body").find('[role="calendar"][guid="' + a.attr("data-guid") + '"]');
            b.hide(), b.closest('div[role="modal"]').hide()
        },
        value: function (a, b) {
            var c, d, e, f = a.data();
            return void 0 === b ? a.val() : (d = gj.core.parseDate(b, f.format, f.locale), d ? (c = $("body").find('[role="calendar"][guid="' + a.attr("data-guid") + '"]'), gj.datepicker.methods.dayClickHandler(a, c, f, d)(), e = d.getHours(), "ampm" === f.mode && c.attr("mode", e > 12 ? "pm" : "am"), c.attr("hour", e), c.attr("minute", d.getMinutes()), a.val(b)) : a.val(""), a)
        },
        destroy: function (a) {
            var b = a.data(),
                c = a.parent(),
                d = $("body").find('[role="calendar"][guid="' + a.attr("data-guid") + '"]');
            return b && (a.off(), d.parent('[role="modal"]').length > 0 && d.unwrap(), d.remove(), a.removeData(), a.removeAttr("data-type").removeAttr("data-guid").removeAttr("data-datetimepicker"), a.removeClass(), c.children('[role="right-icon"]').remove(), a.unwrap()), a
        }
    }, gj.datetimepicker.events = {
        change: function (a) {
            return a.triggerHandler("change")
        }
    }, gj.datetimepicker.widget = function (a, b) {
        var c = this,
            d = gj.datetimepicker.methods;
        return c.mouseMove = !1, c.value = function (a) {
            return d.value(this, a)
        }, c.open = function () {
            gj.datepicker.methods.open(this, this.data().datepicker)
        }, c.close = function () {
            gj.datepicker.methods.close(this)
        }, c.destroy = function () {
            return d.destroy(this)
        }, $.extend(a, c), "true" !== a.attr("data-datetimepicker") && d.init.call(a, b), a
    }, gj.datetimepicker.widget.prototype = new gj.widget, gj.datetimepicker.widget.constructor = gj.datetimepicker.widget, gj.datetimepicker.widget.prototype.getConfig = gj.datetimepicker.methods.getConfig,
    function (a) {
        a.fn.datetimepicker = function (a) {
            var b;
            if (this && this.length) {
                if ("object" != typeof a && a) {
                    if (b = new gj.datetimepicker.widget(this, null), b[a]) return b[a].apply(this, Array.prototype.slice.call(arguments, 1));
                    throw "Method " + a + " does not exist."
                }
                return new gj.datetimepicker.widget(this, a)
            }
        }
    }(jQuery), gj.slider = {
        plugins: {},
        messages: {
            "en-us": {}
        }
    }, gj.slider.config = {
        base: {
            min: 0,
            max: 100,
            width: void 0,
            uiLibrary: "materialdesign",
            value: void 0,
            icons: {},
            style: {
                wrapper: "gj-slider gj-slider-md",
                progress: void 0,
                track: void 0
            }
        },
        bootstrap: {
            style: {
                wrapper: "gj-slider gj-slider-bootstrap gj-slider-bootstrap-3",
                progress: "progress-bar",
                track: "progress"
            }
        },
        bootstrap4: {
            style: {
                wrapper: "gj-slider gj-slider-bootstrap gj-slider-bootstrap-4",
                progress: "progress-bar",
                track: "progress"
            }
        }
    }, gj.slider.methods = {
        init: function (a) {
            return gj.widget.prototype.init.call(this, a, "slider"), this.attr("data-slider", "true"), gj.slider.methods.initialize(this, this.data()), this
        },
        initialize: function (a, b) {
            var c, d, e, f;
            a[0].style.display = "none", "wrapper" !== a[0].parentElement.attributes.role ? (c = document.createElement("div"), c.setAttribute("role", "wrapper"), a[0].parentNode.insertBefore(c, a[0]), c.appendChild(a[0])) : c = a[0].parentElement, b.width && (c.style.width = b.width + "px"), gj.core.addClasses(c, b.style.wrapper), d = a[0].querySelector('[role="track"]'), null == d && (d = document.createElement("div"), d.setAttribute("role", "track"), c.appendChild(d)), gj.core.addClasses(d, b.style.track), e = a[0].querySelector('[role="handle"]'), null == e && (e = document.createElement("div"), e.setAttribute("role", "handle"), c.appendChild(e)), f = a[0].querySelector('[role="progress"]'), null == f && (f = document.createElement("div"), f.setAttribute("role", "progress"), c.appendChild(f)), gj.core.addClasses(f, b.style.progress), b.value || (b.value = b.min), gj.slider.methods.value(a, b, b.value), gj.documentManager.subscribeForEvent("mouseup", a.data("guid"), gj.slider.methods.createMouseUpHandler(a, e, b)), e.addEventListener("mousedown", gj.slider.methods.createMouseDownHandler(e, b)), gj.documentManager.subscribeForEvent("mousemove", a.data("guid"), gj.slider.methods.createMouseMoveHandler(a, d, e, f, b)), e.addEventListener("click", function (a) {
                a.stopPropagation()
            }), c.addEventListener("click", gj.slider.methods.createClickHandler(a, d, e, b))
        },
        createClickHandler: function (a, b, c, d) {
            return function (e) {
                var f, g, h, i, j;
                "true" !== c.getAttribute("drag") && (f = gj.core.position(a[0].parentElement), g = (new gj.widget).mouseX(e) - f.left, h = gj.core.width(c) / 2, i = gj.core.width(b) / (d.max - d.min), j = Math.round((g - h) / i) + d.min, gj.slider.methods.value(a, d, j))
            }
        },
        createMouseUpHandler: function (a, b, c) {
            return function (c) {
                "true" === b.getAttribute("drag") && (b.setAttribute("drag", "false"), gj.slider.events.change(a))
            }
        },
        createMouseDownHandler: function (a, b) {
            return function (b) {
                a.setAttribute("drag", "true")
            }
        },
        createMouseMoveHandler: function (a, b, c, d, e) {
            return function (d) {
                var f, g, h, i, j, k, l;
                "true" === c.getAttribute("drag") && (f = gj.core.position(a[0].parentElement), g = (new gj.widget).mouseX(d) - f.left, h = gj.core.width(b), i = gj.core.width(c) / 2, j = h / (e.max - e.min), k = (e.value - e.min) * j, g >= i && g <= h + i && (g > k + j / 2 || g < k - j / 2) && (l = Math.round((g - i) / j) + e.min, gj.slider.methods.value(a, e, l)))
            }
        },
        value: function (a, b, c) {
            var d, e, f, g;
            return void 0 === c ? a[0].value : (a[0].setAttribute("value", c), b.value = c, e = a.parent().children('[role="track"]')[0], d = gj.core.width(e) / (b.max - b.min), f = a.parent().children('[role="handle"]')[0], f.style.left = (c - b.min) * d + "px", g = a.parent().children('[role="progress"]')[0], g.style.width = (c - b.min) * d + "px", gj.slider.events.slide(a, c), a)
        },
        destroy: function (a) {
            var b = a.data(),
                c = a.parent();
            return b && (c.children('[role="track"]').remove(), c.children('[role="handle"]').remove(), c.children('[role="progress"]').remove(), a.unwrap(), a.off(), a.removeData(), a.removeAttr("data-type").removeAttr("data-guid").removeAttr("data-slider"), a.removeClass(), a.show()), a
        }
    }, gj.slider.events = {
        change: function (a) {
            return a.triggerHandler("change")
        },
        slide: function (a, b) {
            return a.triggerHandler("slide", [b])
        }
    }, gj.slider.widget = function (a, b) {
        var c = this,
            d = gj.slider.methods;
        return c.value = function (a) {
            return d.value(this, this.data(), a)
        }, c.destroy = function () {
            return d.destroy(this)
        }, $.extend(a, c), "true" !== a.attr("data-slider") && d.init.call(a, b), a
    }, gj.slider.widget.prototype = new gj.widget, gj.slider.widget.constructor = gj.slider.widget,
    function (a) {
        a.fn.slider = function (a) {
            var b;
            if (this && this.length) {
                if ("object" != typeof a && a) {
                    if (b = new gj.slider.widget(this, null), b[a]) return b[a].apply(this, Array.prototype.slice.call(arguments, 1));
                    throw "Method " + a + " does not exist."
                }
                return new gj.slider.widget(this, a)
            }
        }
    }(jQuery), gj.colorpicker = {
        plugins: {},
        messages: {
            "en-us": {}
        }
    }, gj.colorpicker.config = {
        base: {
            uiLibrary: "materialdesign",
            value: void 0,
            icons: {
                rightIcon: '<i class="ti-calendar"></i>'
            },
            style: {
                modal: "gj-modal",
                wrapper: "gj-colorpicker gj-colorpicker-md gj-unselectable",
                input: "gj-textbox-md",
                picker: "gj-picker gj-picker-md colorpicker gj-unselectable",
                footer: "",
                button: "gj-button-md"
            }
        },
        bootstrap: {
            style: {}
        },
        bootstrap4: {
            style: {}
        }
    }, gj.colorpicker.methods = {
        init: function (a) {
            return gj.picker.widget.prototype.init.call(this, a, "colorpicker"), gj.colorpicker.methods.initialize(this), this
        },
        initialize: function (a) {},
        createPicker: function (a, b) {
            var c = $('<div role="picker" />').addClass(b.style.picker).attr("guid", a.attr("data-guid"));
            return c.html("test"), c.hide(), $("body").append(c), c
        },
        open: function (a) {
            return a.val() && a.value(a.val()), gj.picker.widget.prototype.open.call(a, "colorpicker")
        }
    }, gj.colorpicker.events = {
        change: function (a) {
            return a.triggerHandler("change")
        },
        select: function (a) {
            return a.triggerHandler("select")
        },
        open: function (a) {
            return a.triggerHandler("open")
        },
        close: function (a) {
            return a.triggerHandler("close")
        }
    }, gj.colorpicker.widget = function (a, b) {
        var c = this,
            d = gj.colorpicker.methods;
        return c.value = function (a) {
            return d.value(this, a)
        }, c.destroy = function () {
            return gj.picker.widget.prototype.destroy.call(this, "colorpicker")
        }, c.open = function () {
            return d.open(this)
        }, c.close = function () {
            return gj.picker.widget.prototype.close.call(this, "colorpicker")
        }, $.extend(a, c), "true" !== a.attr("data-colorpicker") && d.init.call(a, b), a
    }, gj.colorpicker.widget.prototype = new gj.picker.widget, gj.colorpicker.widget.constructor = gj.colorpicker.widget,
    function (a) {
        a.fn.colorpicker = function (a) {
            var b;
            if (this && this.length) {
                if ("object" != typeof a && a) {
                    if (b = new gj.colorpicker.widget(this, null), b[a]) return b[a].apply(this, Array.prototype.slice.call(arguments, 1));
                    throw "Method " + a + " does not exist."
                }
                return new gj.colorpicker.widget(this, a)
            }
        }
    }(jQuery);
/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!function(e){e.fn.niceSelect=function(t){function s(t){t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class")||"").addClass(t.attr("disabled")?"disabled":"").attr("tabindex",t.attr("disabled")?null:"0").html('<span class="current"></span><ul class="list"></ul>'));var s=t.next(),n=t.find("option"),i=t.find("option:selected");s.find(".current").html(i.data("display")||i.text()),n.each(function(t){var n=e(this),i=n.data("display");s.find("ul").append(e("<li></li>").attr("data-value",n.val()).attr("data-display",i||null).addClass("option"+(n.is(":selected")?" selected":"")+(n.is(":disabled")?" disabled":"")).html(n.text()))})}if("string"==typeof t)return"update"==t?this.each(function(){var t=e(this),n=e(this).next(".nice-select"),i=n.hasClass("open");n.length&&(n.remove(),s(t),i&&t.next().trigger("click"))}):"destroy"==t?(this.each(function(){var t=e(this),s=e(this).next(".nice-select");s.length&&(s.remove(),t.css("display",""))}),0==e(".nice-select").length&&e(document).off(".nice_select")):console.log('Method "'+t+'" does not exist.'),this;this.hide(),this.each(function(){var t=e(this);t.next().hasClass("nice-select")||s(t)}),e(document).off(".nice_select"),e(document).on("click.nice_select",".nice-select",function(t){var s=e(this);e(".nice-select").not(s).removeClass("open"),s.toggleClass("open"),s.hasClass("open")?(s.find(".option"),s.find(".focus").removeClass("focus"),s.find(".selected").addClass("focus")):s.focus()}),e(document).on("click.nice_select",function(t){0===e(t.target).closest(".nice-select").length&&e(".nice-select").removeClass("open").find(".option")}),e(document).on("click.nice_select",".nice-select .option:not(.disabled)",function(t){var s=e(this),n=s.closest(".nice-select");n.find(".selected").removeClass("selected"),s.addClass("selected");var i=s.data("display")||s.text();n.find(".current").text(i),n.prev("select").val(s.data("value")).trigger("change")}),e(document).on("keydown.nice_select",".nice-select",function(t){var s=e(this),n=e(s.find(".focus")||s.find(".list .option.selected"));if(32==t.keyCode||13==t.keyCode)return s.hasClass("open")?n.trigger("click"):s.trigger("click"),!1;if(40==t.keyCode){if(s.hasClass("open")){var i=n.nextAll(".option:not(.disabled)").first();i.length>0&&(s.find(".focus").removeClass("focus"),i.addClass("focus"))}else s.trigger("click");return!1}if(38==t.keyCode){if(s.hasClass("open")){var l=n.prevAll(".option:not(.disabled)").first();l.length>0&&(s.find(".focus").removeClass("focus"),l.addClass("focus"))}else s.trigger("click");return!1}if(27==t.keyCode)s.hasClass("open")&&s.trigger("click");else if(9==t.keyCode&&s.hasClass("open"))return!1});var n=document.createElement("a").style;return n.cssText="pointer-events:auto","auto"!==n.pointerEvents&&e("html").addClass("no-csspointerevents"),this}}(jQuery);
(function ($) {
  "use strict";

  $('#datepicker').datepicker();

  var review = $('.player_info_item');
  if (review.length) {
    review.owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      autoplay: true,
      margin: 40,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      navText: [
        '<img src="img/icon/left.svg" alt="">',
        '<img src="img/icon/right.svg" alt="">'

      ],
      responsive: {
        0: {
          margin: 15,
        },
        600: {
          margin: 10,
        },
        1000: {
          margin: 10,
        }
      }
    });
  }
  $('.popup-youtube, .popup-vimeo').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  if (document.getElementById('default-select')) {
    $('select').niceSelect();
  }


  var review = $('.client_review_part');
  if (review.length) {
    review.owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: false,
    });
  }
  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
  });

//   $(document).ready(function(){

//     var owl_1 = $('#owl-1');
//     var owl_2 = $('#owl-2');

//     owl_1.owlCarousel({
//       loop:true,
//       margin:10,
//       nav:false,
//       items: 1,
//       dots: false,
//       navText: false,
//       autoplay: true,
      
//     });
//  owl_2.find(".item").click(function(){
//     var slide_index = owl_2.find(".item").index(this);
//     owl_1.trigger('to.owl.carousel',[slide_index,300]);
//   });

//     owl_2.owlCarousel({
//       margin:50,
//       nav: true,
//       items: 3,
//       dots: false,
//       center: true,
//       loop:true,
//       navText: false,
//       autoplay: true,
//       center: true
//     });
    
//   });
 


  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 300,
    infinite: true,
    asNavFor: '.slider-nav-thumbnails',
    // autoplay:true,
    pauseOnFocus: true,
    dots: true,
  });
 
  $('.slider-nav-thumbnails').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
    focusOnSelect: true,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
        }
      }
    ]
  });
 
  //remove active class from all thumbnail slides
  $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
 
  //set active class to first thumbnail slides
  $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');
 
  // On before slide change match active thumbnail to current slide
  $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
    $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
 });
 
 //UPDATED 
   
 $('.slider').on('afterChange', function(event, slick, currentSlide){   
   $('.content').hide();
   $('.content[data-id=' + (currentSlide + 1) + ']').show();
 }); 

 $('.gallery_img').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});




}(jQuery));