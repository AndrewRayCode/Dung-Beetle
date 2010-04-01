/*
* Javascript based DOM/CSS inspector by Andrew Ray
* AndrewRay.me
*/

// See licenses.txt or http://jquery.com/ for license information. Excluding from source for brevity
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();

window.dung_beetle = {
	start: function() {
		this.jq = jQuery.noConflict('EXTREMEZ!1!one');
		this.jq('<link rel="stylesheet" id="dung_style_sheet" type="text/css" href="'+this.settings.css+'" />').appendTo('head');
		if(document.domain.indexOf('www') > -1) {
			document.domain = document.domain.replace(/$www\.?/, '');
		}
		this.setup();
	},
	setup: function() {
		this.jq(document).bind('mousemove', this.bind(this.mouseCapture, this));
		var me = this;
		//window.onerror = this.bind(this.trapError, this);
		//this.jq(window).bind('error', this.bind(this.trapError, this));

		this.elements.overlay = this.jq('<div></div>').attr('class', 'dung_overlay').appendTo('body');
		this.elements.padding = {
			top: this.jq('<div></div>').attr('class', 'dung_padding').appendTo('body'),
			right: this.jq('<div></div>').attr('class', 'dung_padding').appendTo('body'),
			bottom: this.jq('<div></div>').attr('class', 'dung_padding').appendTo('body'),
			left: this.jq('<div></div>').attr('class', 'dung_padding').appendTo('body')
		};
		this.elements.margin = {
			top: this.jq('<div></div>').attr('class', 'dung_margin').appendTo('body'),
			right: this.jq('<div></div>').attr('class', 'dung_margin').appendTo('body'),
			bottom: this.jq('<div></div>').attr('class', 'dung_margin').appendTo('body'),
			left: this.jq('<div></div>').attr('class', 'dung_margin').appendTo('body')
		};
		this.elements.outlines = {
			top: this.jq('<div></div>').attr('class', 'dung_outline').appendTo('body'),
			right: this.jq('<div></div>').attr('class', 'dung_outline').appendTo('body'),
			bottom: this.jq('<div></div>').attr('class', 'dung_outline').appendTo('body'),
			left: this.jq('<div></div>').attr('class', 'dung_outline').appendTo('body')
		};
		this.elements.push = this.jq('<div></div>').attr('class', 'dung_push').appendTo('body');
		this.elements.color_hover = this.jq('<div></div>').attr('class', 'dung_color_view').appendTo('body');

		this.elements.dung_beetle = this.jq('<div></div>')
			.attr('class', 'dung_beetle')
			.css({'height':this.settings.default_height + 'px', 'width':this.jq(window).width()+'px', 'left':0})
			.appendTo('body');

		this.merge(this.elements, this.injectClassedDivsTo(
			['resize', 'display', 'styler', 'header', 'cursor', 'upsize', 'vertical_divide', 'tray', 'logo', 'close', 'updown', 'windowed', 'inspect'],
			this.elements.dung_beetle
		));
		this.elements.logo.attr('title', 'More Information about Dung Beetle (opens in new window)').click(this.bind(this.spamThemAll, this));
		this.registerTabs([{
				label: 'console',
				text: 'Console'
			},{
				label: 'html',
				text: 'HTML',
				active: true
			},{
				label: 'dom',
				text: 'DOM'
		}]);
		
		this.elements.cursor.html('&#187;');
		this.console.init(this.elements.dung_beetle, this);

		this.elements.inspect.bind('click', this.bind(this.toggleInspection, this)).html('Inspect').text('Inspect').appendTo(this.elements.header);
		this.tabs.console.bind('click', this.bind(this.showConsoleTab, this));
		this.tabs.html.bind('click', this.bind(this.showHtmlTab, this));
		this.tabs.dom.bind('click', this.bind(this.showDomTab, this));

		this.elements.close.bind('click', this.bind(this.stop, this));
		this.elements.updown.bind('click', this.bind(this.toggleUpDown, this));
		this.elements.windowed.bind('click', this.bind(this.maximize, this));

		this.elements.upsize.bind('click', this.bind(this.toggleUpsize, this));

		this.elements.dung_beetle.bind('click', this.bind(this.dungClick, this))
			.bind('mouseover', this.bind(this.hoverEvent, this))
			.bind('dblclick', this.bind(this.dblClickEvent, this));

		this.jq(window).bind('scroll', this.bind(this.stick, this)).bind('resize', this.bind(this.stick, this));
		this.jq('body').bind('mouseover', this.bind(this.bodyHoverEvent, this)).click(this.bind(this.bodyClickEvent, this));

		this.checkCSSLoaded();
		this.tree = new this.dungTree(this.elements.display, {
			jq: this.jq,
			dung: this
		}).parseTopLevel();

		//TODO: Why don't browsers stick properly the first time?
		setTimeout(this.bind(this.stick, this), 10);

		if(this.jq.browser.opera) {
			// Opera doesn't implement onerror but has it's own API http://dragonfly.opera.com/app/scope-interface/scope-dom-interface.html
			var connected = function(services) {
				for (var service in services) {
					if (service.substring(0, 5) == "stp-0") {
						alert("Connected to STP/1 host but using STP/0 fallback");
						return;
					} else if (service == "stp-1") {
						alert("Connected to STP/1 host");
						return;
					}
					alert("Connected to STP/0 host");
				}
			};
			var receive = function(service, message, command, status, tag) {
				if (status != 0) {
					alert("Error in command " + command);
					return;
				}
				if (tag != 0) {
					// Handle response to previous command
				} else {
					// Handle event
				}
			};
			var quit = function() {};
			console.log(opera);
			//opera.scopeAddClient(connected, receive, quit, 0);
		}
	
	},
	toggleUpsize: function() {
		if(this.console.mode == this.console.MODES.FULL) {
			this.setMode(this.console.MODES.FULL_MULTI);
			this.jq('#dung_show_console').addClass('dung_active');
		} else {
			this.setMode(this.console.MODES.MULTI);
			this.jq('#dung_show_console').addClass('dung_active');
		}
	},
	showConsoleTab: function() {
		if(this.console.mode == console.MODES.INSET) {
			if(this.dungstatus.realtime_inspect) {
				this.stopDOMInspection();
			}
			this.setMode(console.MODES.FULL);
			this.jq('#dung_show_console').addClass('dung_active');
		}
	},
	showHtmlTab: function() {
		if(this.console.mode != this.console.MODES.INSET) {
			this.setMode(this.console.MODES.INSET);
			this.jq('#dung_show_html').addClass('dung_active');
		}
	},
	showDomTab: function() {
		// You know, it would probably be good to make this into an actual tab system
	},
	toggleInspection: function() {
		if(this.console.mode != this.console.MODES.INSET) {
			this.setMode(this.console.MODES.INSET);
			this.tabs.html.addClass('dung_active');
		}

		if(this.dungstatus.realtime_inspect) {
			this.stopDOMInspection();
		} else {
			this.startDOMInspection();
		}
	},
	dungClick: function(evt) {
		evt = this.jq(evt);
		var clicked = this.jq(evt.target);
		if(clicked.hasClass('dung_color_hover')) {
			clicked = clicked.parent();
		}
		var input = this.elements.dung_beetle.find('input');

		// Don't do anything if we click on an active input
		if(clicked.attr('tag') == 'input') {
			return evt.stopPropagation();
		}

		// Dispose of any active inputs if clicking away (passing the input to the method fires its cancel function)
		if(input.length && input[0] != clicked[0]) {
			if(input.parent().parent().hasClass('dung_pair')) {
				this.inputKeyEvent(input);
			}
		}

		// Edit a CSS attribute or vlaue
		if(clicked.hasClass('dung_attr') || clicked.hasClass('dung_val') || clicked.hasClass('dung_html_prop') || clicked.hasClass('dung_attr_edit')) {
			this.editValue(clicked);
		} else if( (clicked.hasClass('dung_tag_open') || clicked.hasClass('dung_tag_close')) && clicked.parent().children()[0] != this.current_dom_node) {
			var clckd = this.jq(clckd.parent().children()[0]);
			clckd.addClass('dung_dom_selected');
			this.inspectElement(clckd[0].hover_highlight);
			if(this.current_dom_node) {
				this.current_dom_node.removeClass('dung_dom_selected');
			}
			this.current_dom_node = clckd;
		} else if(clicked.hasClass('cancel')) {
			this.toggleCSSStyle(this.jq(clicked.parent()));
		} else if(clicked.attr('src') && clicked.attr('src').indexOf('cancel') > -1) {
			this.toggleCSSRule(this.jq(clicked.parent().parent().parent()));
		}

		// Execute multi-line script in console
		if(clicked.hasClass('dung_execute')) {
			this.execute();
		} else if(clicked.hasClass('dung_clear')) {
			this.console.elements.console.html('');
			this.console.elements.input.val('');
		}
		evt.stop();
	},
	dblClickEvent: function() {
		
	}, 
	hoverEvent: function() {
		
	},
	registerTabs: function(tabs) {
		this.tabs = this.tabs || {};
		this.tab_count = this.tab_count || 0;
		for(var x=0; x<tabs.length; x++) {
			this.registerTab(tabs[x]);
		}
	},
	registerTab: function(tab) {
		this.tabs[tab.label] = this.jq('<div></div>').attr({
				id: 'dung_show_'+tab.label,
				'class': 'dung_tab dung_'+tab.label+(tab.active ? ' dung_active' : '')
			})
			.text(tab.text)
			.css('left', (this.settings.tab_offset + (this.tab_count * this.settings.tab_width))+'px')
			.appendTo(this.elements.header);
		this.tab_count++;
	},
	stick: function() {
		var scroll = {y: this.jq('body').scrollTop(), x:this.jq('body').scrollLeft()};
		var w_size = {y: this.jq('body').height(), x: this.jq('body').width()};

		this.elements.dung_beetle.css({width:(parseInt(w_size.x))+'px', 'left':scroll.x+'px'});
		this.elements.tray.css({width:(parseInt(w_size.x))+'px', 'left':scroll.x+'px'});
		var height = this.elements.dung_beetle.height();
		this.elements.push.css('height', height+'px');

		var v_pos = parseInt(this.elements.vertical_divide.css('left'));
		if(v_pos > parseInt(w_size.x)) {
			v_pos = parseInt(w_size.x) - 200;
			this.elements.vertical_divide.css('left', v_pos+'px');
		}
		var width_before_divide = v_pos - 4;
		var width_after_divide = parseInt(w_size.x) - v_pos - 8;

		if(this.console.mode == this.console.MODES.INSET) {
			this.elements.vertical_divide.css('height', Math.max(height-28, 0)+'px');
			this.elements.styler.css({'width':width_after_divide+'px', 'left':(v_pos+3)+'px', 'height':Math.max(height-55, 0)+'px'});
			this.elements.display.css({'width':width_before_divide+'px', 'height':Math.max(height-87, 0)+'px'});
			this.console.elements.input.css('width', (width_before_divide-10)+'px');
			this.console.elements.console.css('width', width_before_divide+'px');
		} else if(this.console.mode == this.console.MODES.FULL) {
			this.console.elements.input.css({'width':(parseInt(w_size.x)-16)+'px', 'left':'12px'});
			this.console.elements.console.css({'width':(parseInt(w_size.x)-6)+'px', 'height':Math.max(height-71, 0)+'px'});
		} else if(this.console.mode == this.console.MODES.FULL_MULTI) {
			this.elements.vertical_divide.css('height', Math.max(height-28, 0)+'px');
			this.console.elements.input.css({'height': Math.max(height-48, 0)+'px', 'width':(width_after_divide+1)+'px', 'left':(v_pos+3)+'px'});
			this.console.elements.console.css({'height':Math.max(height-30, 0)+'px', 'width':width_before_divide+'px'});
			this.console.elements.input.css({'width':(width_after_divide-15)+'px'});
		}
	},
	displayDom: function() {
		
	},
	// Given an element in the body, highlight the respective element in the DOM view
	highlightInDOMView: function(element) {
		var node = this.tree.expandToElement(element[0]);
		node.tag_open.addClass('dung_dom_selected');
		this.scrollTo(this.elements.display, node.main);
	},
	// Returns div containing view element in DOM viewer (returns "tag_open" div of found DOM node)
	findInDOMView: function(element, papa) {
		var found = false;
		if(!papa) {papa = this.elements.display[0];}
		if(element.className) {
			if(element.className.match('dung_beetle')) {
				return null;
			}
		}

		if(papa.hover_highlight == element) {
			return this.jq(papa);
		} else {
			var nodes=papa.childNodes;
			if(nodes.length) {
				for(var x=0; x<nodes.length; x++) {
					var find = this.findInDOMView(element, nodes[x]);
					if(find) return this.jq(find);
				}
			}
		}
	},
	// Display everything inside the body tag and highlight it
	displayDOM: function(papa, element) {
		if(!papa) {papa = this.elements.display[0]; this.elements.display.empty();}
		element = element || this.jq('body')[0];
		if(element.className) {
			if(element.className.match('dung')) {
				return;
			}
		}

		if(this.type(element) == 'textnode') {
			var text = this.jq('<span></span>').appendTo(papa);
			text.html(element.nodeValue);
			//text.hover_highlight = element.parentNode;
		} else if(element.nodeName == '#text') {
			this.jq(papa).remove();
		} else {
			var tag_open = this.jq('<div></div>').attr('class', 'dung_tag_open').text('<'+element.nodeName.toLowerCase()).appendTo(papa);
			var tag_close = this.jq('<div></div>').attr('class', 'dung_tag_close').text('</'+element.nodeName.toLowerCase()+'>');
			papa.hover_highlight = element;
			//console.warn(papa, papa.hover_highlight);
			tag_open[0].hover_highlight = element;
			tag_open[0].dung_position = tag_open.position().top - this.jq('body').scrollTop();
			tag_close[0].hover_highlight = element;

			var attributes = this.getElementAttributes(element);
			var styles = '';
			if(attributes.length) {
				for(var x=0; x<attributes.length; x++) {
					styles += '<span class="dung_html_attr"> <span class="dung_html_prop">'+attributes[x].nodeName+'</span>="'
						+'<span class="dung_attr_edit">'+attributes[x].nodeValue+'</span><span class="dung_html_attr">"</span></span>';
				}
			}
			tag_open.html(tag_open.html() + styles);

			var nodes = element.childNodes;
			if(nodes.length) {
				for(x=0; x<nodes.length; x++) {
					var node = this.jq('<div></div>').attr('class', 'dung_node').appendTo(papa)[0];
					this.displayDOM(node, nodes[x]);
				}
				tag_open.html(tag_open.html() + '&gt;');
				tag_close.appendTo(papa);
			} else {
				tag_open.html(tag_open.html() + ' /&gt;');
			}
		}
	},
	// Show an element's styles and highlight it in the DOM. Takes in click event on element or element in body
	inspectElement: function(mixed) {
		var elem;
		if(this.type(mixed) != 'element') {
			mixed.stopPropagation();
			elem = this.jq(mixed.target);
		} else {
			elem = this.jq(mixed);
		}
		this.current_element = /dung/.test(elem.className) ? this.current_element : elem;
		var full_selector = this.getFullSelector(this.current_element);
		var element_selector = this.getSelector(this.current_element);

		var str = '<div class="dung_css_selector"><div class="dung_style_header">element.style</div><div class="dung_cancel_selector" alt="Cancel this CSS Selector"></div>{</div>';
		if(elem.attr('style')) {
			var styles = elem.attr('style').split(';');
			for(var x=0; x<styles.length; x++) {
				if(this.trim(styles[x])) {
					var pair = styles[x].split(':');
					str += '<div class="dung_pair"><div class="dung_style_cancel"></div><span class="dung_attr">'+pair[0].toLowerCase()+'</span>: <span class="dung_val">'+this.colorize(pair[1].toLowerCase().replace(';', ''))+'</span>;</div>';
				}
			}
		}
		this.elements.styler.html(str + '<span>}</span></div><br />');

		// Determine inherited styles. This loop determines what styles from the stylesheet affect the given element.
		var uses = false;
		for(var stylesheet in this.CSS) {
			var css_styles = [];
			for(var rule in this.CSS[stylesheet]) {
				if(this.matchFullSelector(rule, full_selector)) {
					css_styles[css_styles.length] = {
						weight: this.getSelectorWeight(rule, element_selector), 'html':'<div class="dung_css_selector"><div class="dung_style_header">'
							+'<div class="dung_style_header">'+rule+'</div>'
							+'<div class="dung_cancel_selector" alt="Cancel this CSS Selector"></div>{</div>'
					};
					var rules = this.CSS[stylesheet][rule].split('; ');
					for(var x=0; x<rules.length; x++) {
						if(rules[x].length > 0) {
							var pair = rules[x].split(':');
							if(pair[0].indexOf('-moz') == -1) {
								css_styles[css_styles.length-1]['html'] += '<div class="dung_pair"><div class="dung_style_cancel"></div><span class="dung_attr">'+pair[0].toLowerCase()
									+'</span>: <span class="dung_val">'+this.colorize(pair[1].toLowerCase().replace(';', ''))+'</span>;</div>';
							}
						}
					}
					css_styles[css_styles.length-1].html += '<span>}</span></div><br />';
				}
			}
			css_styles.sort(this.weightedSort);
			for(var y=0; y<css_styles.length; y++) {
				this.elements.styler.html(this.elements.styler.html() + css_styles[y].html);
			}
		}
	},
	// Gets the full selector to an element, including parents.
	// Breaks nested elements like '<div><span class="content"><h3></h3></span></div>' into string 'div span.content h3'
	getFullSelector: function(element) {
		var str = this.getSelector(element);
		var papa = element.parent();
		if(papa && papa[0] != document) {
			str = this.getFullSelector(papa) + ' '+str;
		}
		return str;
	},
	// Get the selector for an element, for example <div class="body" id="info"/> into div .body #info
	getSelector: function(element) {
		element = element[0];
		var str = element.nodeName.toLowerCase();

		var classes = element.className.split(' ');
		for(var x=0; x<classes.length; x++) {
			if(classes[x] != '') {
				str+=' .'+classes[x];
			}
		}
		if(element.id) {
			str+=' #'+element.id;
		}
		return str;
	},
	// Determines if a CSS selector affects an element by analyzing the element's full DOM parentage.
	// For example, '.class div#id span h3' will match the selector of 'div#id h3'
	matchFullSelector: function(test, selector) {
		// Craziness to escape tags with *
		var regex = test.replace(/\./g, ' \\.').split(/[ ]+/).join(' [\\S\\s]d~~d').replace(/\*/g, '\\*').replace(/d~~d/g, '*') + '( |$)';
		return new RegExp(regex, 'i').test(selector);
	}, 
	// Determine CSS inheritance by "weight" of selectors (heaviest is most specific). Example: "#bob .hi" outweights ".hi"
	getSelectorWeight: function(str, current_selector) {
		var tags = str.match(/(^| )[a-zA-Z0-9]+(\.| |$)/g);
		var classes = str.match(/\.[^ ]+/g);
		var ids = str.match(/\#[^ ]+/g);
		return (tags ? tags.length : 0)
			+ (classes ? classes.length * 10 : 0)
			+ (ids ? ids.length * 100 : 0)
			+ (this.matchFullSelector(str, current_selector) ? 10000 : 0);
	}, 
	// Show or hide the blue outlines around elements being inspected
	toggleOutlines: function() {
		if(this.elements.outlines.top.css('display') == 'none') {
			this.elements.outlines.top.css('display', 'block');
			this.elements.outlines.bottom.css('display', 'block');
			this.elements.outlines.right.css('display', 'block');
			this.elements.outlines.left.css('display', 'block');
		} else {
			this.elements.outlines.top.css('display', 'none');
			this.elements.outlines.bottom.css('display', 'none');
			this.elements.outlines.right.css('display', 'none');
			this.elements.outlines.left.css('display', 'none');
		}
	}, 
	dungTree: function(papa, options) {
		this.elements = {};
		this.jq = options.jq;
		var tree = this;
		tree.dung = options.dung;
		this.stroller = this.jq('<div></div>').addClass('dung_tree').appendTo(papa);

		this.parseTopLevel = function(element) {
			if(element) {

			} else {
				var head = tree.dung.jq('head');
				if(head.length) {
					tree.head = new tree.node({
						jq: tree.jq,
						papa: tree,
						dom_node: head[0]
					}).expand();
				}
				tree.body = new tree.node({
					jq: tree.jq,
					papa: tree,
					dom_node: tree.dung.jq('body')[0]
				}).expand();
			}
			return this;
		};
		this.expandToElement = function(element, papa) {
			for(var x=0, l=tree.head.children.length; x<l; x++) {
				tree.head.children[x].collapse();
			}
			for(var x=0, l=tree.body.children.length; x<l; x++) {
				tree.body.children[x].collapse();
			}
			var findme = element;
			var path = [findme];
			var searching = true;
			var found;
			while(searching) {
				findme = findme.parentNode;
				path.push(findme);
				for(var x=0, l=tree.body.children.length; x<l; x++) {
					if(findme == tree.body.children[x].dom_node) {
						found = tree.body.children[x];
						searching = false;
						break;
					}
				}
			}
			var matched = found.expand();
			for(var x=path.length-1; x>=0; x--) {
				for(var y=0, l=found.children.length; y<l; y++) {
					if(found.children[y].dom_node == path[x]) {
						found = found.children[y].expand();
						break;
					}
				}
			}
			return found;
		};
		this.findByElement = function(element, papa) {
			var found = false;
			if(!papa) {
                papa = stroller;
            }

			if(papa.hover_highlight == element) {
				return this.jq(papa);
			} else {
				var nodes = papa.children;
				for(var x=0, l=nodes.lenth; x<l; x++) {
					var find = this.findByElement(element, nodes[x]);
					if(find) return this.jq(find);
				}
			}
		
			return false;
		};
		this.node = function(options) {
			this.jq = options.jq;
			this.dom_node = options.dom_node;
			this.children = [];
			this.tree = tree;
			var type = this.tree.dung.type(this.dom_node);
			if(type == 'whitespace') {
				return;
			} else if(type == 'textnode') {
				if(this.dom_node.nodeValue) {
					var text = this.jq('<div></div>').addClass('dung_text_node').text(this.dom_node.nodeValue).appendTo(options.papa.stroller);
				}
				return;
			}
			this.tag_name = this.dom_node.nodeName.toLowerCase();
			this.main = this.jq('<div></div>').addClass('dung_node').appendTo(options.papa.stroller);
			this.toggle_btn = this.jq('<div></div>').addClass('dung_node_toggle closed').appendTo(this.main);
			this.tag_open = this.jq('<div></div>').addClass('dung_tag_start').text('<'+this.tag_name).appendTo(this.main);
			this.dung_position = this.main.position().top - this.jq('body').scrollTop();

			//text.hover_highlight = element.parentNode;
			var attributes = tree.dung.getElementAttributes(this.dom_node);
			var styles = '';
			if(attributes.length) {
				for(var x=0; x<attributes.length; x++) {
					styles += '<span class="dung_html_attr"> <span class="dung_html_prop">'+attributes[x].nodeName+'</span>="'
						+'<span class="dung_attr_edit">'+attributes[x].nodeValue+'</span><span class="dung_html_attr">"</span></span>';
				}
			}
			this.tag_open.html(this.tag_open.html() + styles+'&gt;');
			this.toggle_btn.click(tree.dung.bind(this.toggle, this));
		};
		this.node.prototype.addChild = function(child) {
			if(!this.expanded) {
				this.setExpanded();
			}
			child.appendTo(this.stroller);
		};
		this.node.prototype.toggle = function() {
			if(this.expanded) {
				this.collapse();
			} else {
				this.expand();
			}
		};
		this.node.prototype.setExpanded = function() {
			this.toggle_btn.toggleClass('closed');
			this.stroller = this.jq('<div></div>').addClass('dung_children').appendTo(this.main);
			this.closeTag = this.jq('<div></div>').addClass('dung_tag_end').text('</'+this.tag_name+'>').appendTo(this.main);
			this.expanded = true;
		};
		this.node.prototype.expand = function(depth) {
			var expand = tree.dung.type(depth) == 'number' && depth > 0 ? true : false;
			if(this.expanded) {
                return this;
            }
			this.setExpanded();
			this.expanded = true;
			var kids = this.jq(this.dom_node).contents();
			for(var x=0, l=kids.length; x<l; x++) {
				if(/dung/.test(this.jq(kids[x]).attr('class'))) {
					break;
				}
				// TODO: Do I really want to create myself inside myself? this.tree.node feels dirty
				this.children.push(new this.tree.node({
					jq: this.jq,
					papa: this,
					dom_node: kids[x]
				}));
				if(expand) {
					this.children[this.children.length-1].expand(depth - 1);
				}
			}
			return this;
		};
		this.node.prototype.collapse = function() {
			if(!this.expanded) {
                return this;
            }
			this.expanded = false;
			this.stroller.remove();
			this.closeTag.remove();
			this.children = [];
		};
		return this;
	},
	stop: function(event) {
		this.dungstatus.enabled = false;
		this.stopDOMInspection();
		this.elements.dung_beetle.remove();
		this.elements.outlines.top.remove();
		this.elements.outlines.bottom.remove();
		this.elements.outlines.right.remove();
		this.elements.outlines.left.remove();
		this.elements.dung_push.remove();
	},
	toggleUpDown: function() {
		alert('down boy!');
	},
	maximize: function() {
		alert('here boy!');
	},
	showOutlines: function() {
		if(this.elements.outlines.top.css('display') == 'none') {
			this.toggleOutlines();
		}
	},
	// Show the margin and padding of an element
	visualizeElement: function(elem) {
		this.dungstatus.visualizing = true;
		var pos = elem.offset();
		var padding = {
			top: parseInt(elem.css('padding-top')),
			left: parseInt(elem.css('padding-left')),
			bottom: parseInt(elem.css('padding-bottom')),
			right: parseInt(elem.css('padding-right'))
		};
		var size = {
			x:elem.width() - padding.left - padding.right,
			y:elem.height() - padding.top - padding.bottom
		};
		var margin = {
			top: parseInt(elem.css('margin-top').toInt()),
			left: parseInt(elem.css('margin-left').toInt()),
			bottom: parseInt(elem.css('margin-bottom').toInt()),
			right: parseInt(elem.css('margin-right').toInt())
		};

		this.elements.overlay.setStyles({'display':'block', 'left':(pos.left+padding.left)+'px', 'top':(pos.top+padding.top)+'px', 'width':size.x+'px', 'height':size.y+'px'});
		this.elements.padding.top.setStyles({'display':'block', 'left':pos.left+'px', 'top':pos.top+'px', 'width':(padding.left+padding.right+size.x)+'px', 'height':(padding.top)+'px'});
		this.elements.padding.left.setStyles({'display':'block', 'left':pos.left+'px', 'top':(pos.top+padding.top)+'px', 'width':(padding.left)+'px', 'height':(size.y)+'px'});
		this.elements.padding.bottom.setStyles({'display':'block', 'left':pos.left+'px', 'top':(pos.top+padding.top+size.y)+'px', 'width':(padding.left+padding.right+size.x)+'px', 'height':(padding.bottom)+'px'});
		this.elements.padding.right.setStyles({'display':'block', 'left':(pos.left+size.x+padding.left)+'px', 'top':(pos.top+padding.top)+'px', 'width':(padding.left)+'px', 'height':(size.y)+'px'});

		this.elements.margin.top.setStyles({'display':'block', 'left':(pos.left-margin.left)+'px', 'top':(pos.top-margin.top)+'px', 'width':(padding.left+padding.right+size.x+margin.left+margin.right)+'px', 'height':(margin.top)+'px'});
		this.elements.margin.left.setStyles({'display':'block', 'left':(pos.left-margin.left)+'px', 'top':(pos.top)+'px', 'width':(margin.left)+'px', 'height':(size.y+padding.top+padding.bottom)+'px'});
		this.elements.margin.bottom.setStyles({'display':'block', 'left':(pos.left-margin.left)+'px', 'top':(pos.top+size.y+padding.bottom+padding.top)+'px', 'width':(padding.left+padding.right+size.x+margin.left+margin.right)+'px', 'height':(margin.bottom)+'px'});
		this.elements.margin.right.setStyles({'display':'block', 'left':(pos.left+size.x+padding.left+padding.right)+'px', 'top':(pos.top)+'px', 'width':(margin.right)+'px', 'height':(size.y+padding.top+padding.bottom)+'px'});
	},
	hideElementVisuals: function() {
		this.dungstatus.visualizing = false;
		this.elements.overlay.setStyle('display', 'none');
		this.elements.padding.top.setStyle('display', 'none');
		this.elements.padding.left.setStyle('display', 'none');
		this.elements.padding.bottom.setStyle('display', 'none');
		this.elements.padding.right.setStyle('display', 'none');

		this.elements.margin.top.setStyle('display', 'none');
		this.elements.margin.left.setStyle('display', 'none');
		this.elements.margin.bottom.setStyle('display', 'none');
		this.elements.margin.right.setStyle('display', 'none');
	},
	// Display the blue outlines around an element to show it's position
	outlineElement: function(mixed) {
		var elem;
		if(this.type(mixed) == 'element') {
			elem = mixed;
		} else {
			mixed.stopPropagation();
			elem = this.jq(mixed.target);
			if(elem.className && elem.className.match('dung')) return;

			if(this.dungstatus.indung_lock != true) {
				var me = this;
				this.triggerTimeoutEvent(function() {
					if(me.current_dom_node) {
						me.current_dom_node.removeClass('dung_dom_selected');
					}
					me.highlightInDOMView(elem);
					me.inspectElement(mixed);
				}, this.settings.inspect_delay);
			}
		}

		if(!/dung/.test(elem.className) && elem != document.body) {
			var pos = elem.offset();
			var size = {x: elem.outerWidth(), y: elem.outerHeight()};

			this.elements.outlines.top.css({'top':pos.top, 'left':pos.left, 'width':size.x});
			this.elements.outlines.bottom.css({'top':pos.top+size.y, 'left':pos.left, 'width':(parseInt(size.x)+2)+'px'});
			this.elements.outlines.right.css({'top':pos.top, 'left':pos.left+size.x, 'height':size.y});
			this.elements.outlines.left.css({'top':pos.top, 'left':pos.left, 'height':size.y});
		}
	},
	hideOutlines: function() {
		if(this.elements.outlines.top.css('display') != 'none') {
			this.toggleOutlines();
		}
	},
	// Handles hovering over body elements
	bodyHoverEvent: function(evt) {
		if(this.dungstatus.realtime_inspect && !/dung/.test(evt.target.className) && !this.jq(evt.target).parents().hasClass('dung_beetle') && evt.target != document.body) {
			this.outlineElement(evt);
		} else if(this.dungstatus.visualizing) {
			this.hideElementVisuals();
		}
	},
	// Handles click on the actual page. Only active at certain times
	bodyClickEvent: function(evt) {
		if(!this.dungstatus.realtime_inspect || /dung/.test(evt.target.className) || this.jq(evt.target).parents().hasClass('dung_beetle')) {
			return;
		}

		this.dungstatus.indung_lock = true;

		
		if(this.current_dom_node) {
			this.current_dom_node.removeClass('dung_dom_selected');
		}

		if(this.current_element && evt.target != this.current_element[0]) {
			this.jq(evt).stopPropagation();
			if(!evt.target.className || !/dung/.test(evt.target.className)) {
				this.inspectElement(evt);
				this.highlightInDOMView(this.jq(evt.target));
			} else {
				this.highlightInDOMView(this.current_element);
			}
		}
		this.stopDOMInspection();
		return false;
	},
	stopDOMInspection: function() {
		//Stop DOM inspection
		this.elements.inspect.removeClass('dung_active');
		this.hideOutlines();
		this.dungstatus.realtime_inspect = false;
	},
	startDOMInspection: function() {
		//Start DOM inspection
		this.elements.inspect.addClass('dung_active');
		this.dungstatus.realtime_inspect = true;
		this.dungstatus.indung_lock = false;
		this.showOutlines();
	},
	checkCSSLoaded: function() {
		var failed = [];
		this.styleSheets = [];
		for(var x=0; x <document.styleSheets.length; x++) {
			try {
				var styleSheet = document.styleSheets[x];
				styleSheet.rules || styleSheet.cssRules;
				this.styleSheets.push(styleSheet);
			} catch(e) {
				if(styleSheet.href.indexOf('dung-styles.css') < 0) {
					failed.push(styleSheet.href);
				}
			}
		}
		if(failed.length) {
			console.warn('Warning, the following style sheets will not be parsed by Dung Beetle as they are are not on this domain or a subdomain:');
			console.warn(failed);
		} 
		this.CSS = this.parseCSS();
	},
	parseCSS: function() {
		var styleSheet, loc, css={};
		for(var x=0; x <this.styleSheets.length; x++) {
			styleSheet = this.styleSheets[x];
			loc = styleSheet.href || x;
			css[loc] = {};
			var rules = styleSheet.rules || styleSheet.cssRules;
			for(var i=0; i<rules.length; i++) {
                if(rules[i]) {
                    css[loc][rules[i].selectorText] = rules[i].style.cssText;
                }
			}
		}
		return css;
	},
	setMode: function(mode) {
		this.elements.dung_beetle.find('.dung_tab').removeClass('dung_active');
		switch(mode) {
			// Set to inline console on HTML page
			case this.console.MODES.INSET:
				this.elements.vertical_divide.css('display', 'block');
				this.elements.cursor.css('display', 'block');
				this.elements.display.css('display', 'block');
				this.elements.styler.css('display', 'block');
				this.console.elements.input.css({'width':'680px', 'left':'12px', 'height':'15px', 'bottom':'2px'});
				this.console.elements.console.css({'width':'690px', 'height':'15px', 'bottom':'18px'});
				this.elements.upsize.css('display', 'none');
				this.console.elements.buttons.css('display', 'none');
			break;
			// Set to full console with one line input
			case this.console.MODES.FULL:
				this.elements.vertical_divide.css('display', 'none');
				this.elements.display.css('display', 'none');
				this.elements.styler.css('display', 'none');
				this.elements.cursor.css('display', 'block');
				this.console.elements.input.css({width:(this.jq(window).width()-16)+'px', left:'2px', height:'15px', bottom:'2px'});
				this.console.elements.console.css({bottom:'18px', width:(this.jq(window).width()-16)+'px', height:(this.elements.dung_beetle.height()-46)+'px'});
				this.elements.upsize.css({display:'block', bottom:'2px'}).attr('class', 'dung_toggle_btns upsize');
				this.console.elements.buttons.css('display', 'none');
			break;
			// Set to full console with multiline input
			case this.console.MODES.FULL_MULTI:
				this.elements.vertical_divide.css('display', 'block');
				this.elements.display.css('display', 'none');
				this.elements.styler.css('display', 'none');
				this.elements.cursor.css('display', 'none');
				this.console.elements.input.css({bottom:'25px', left:(this.jq(window).width()-204)+'px', width:'200px', height:(this.elements.dung_beetle.height()-30)+'px'});
				this.console.elements.console.css({bottom:'2px', width:(this.jq(window).width()-210)+'px', height:(this.elements.dung_beetle.height()-30)+'px'});
				this.elements.upsize.css({display:'block', bottom:'4px'}).set('class', 'dung_toggle_btns downsize');
				this.console.elements.buttons.css('display', 'block');
			break;
		}
		this.console.mode = mode;
		this.stick();
	},
	trapError: function(evt, url, linenumber) {
		if(this.type(evt) == 'string') {
			 // Window onerror
			this.lasterrordata = {msg: evt, url: url, line: linenumber};
		} else {
			console.error(); return;
			// JQuery error event
			if(this.lasterrordata) {
				console.error(this.lasterrordata.msg, this.lasterrordata.url, ', on line: ',this.lasterrordata.line);
			} else {
				console.error('ERROR !', evt);
			}
			evt.stopImmediatePropagation();
		}
		if(this.settings.trap_errors) {
			return true;
		}
	},
	compileStyles: function(style_group) {
		var styles = splatStyles(style_group);
		var first = this.jq(this.jq(style_group.children()[0]).children()[0]);
		var selector = first.innerHTML;
		if(selector == 'element.style') {
			this.current_element.set('style', styles);
			var style = this.getCurrentStyleTag().next()[0];
			style.innerHTML = styles;
		} else {
			this.addCSSRule(first.innerHTML, styles);
		}
	},
	getCurrentStyleTag: function() {
		for(var x=0, children=this.current_dom_node.children(); x<children.length; x++) {
			if(children[x].children()[0].innerHTML.toString() == 'style') {
				return this.jq(children[x].children()[0]);
			}
		}
	},
	// Take a style group and convert it to a string of all the styles, like "border:1px dotted green; color:red"
	splatStyles: function(style_group) {
		var style_pairs = style_group.children();
		var str = '';

		// Splicing fails in IE so just start at 2 and end at -1 for the span tags
		for(var x=1; x<style_pairs.length-1; x++) {
			if(this.jq(style_pairs[x]).hasClass('canceled')) {
				continue;
			}

			// We have an active input
			var css = this.jq(this.jq(style_pairs[x].children()[0]).next());
			var first = this.jq(css.children()[0]);
			var selector = (first && first.get('tag') == 'input') ? first[0].value : css[0].innerHTML;

			css = this.jq(css.next());
			first = this.jq(css.next());
			var rule = (first && first.get('tag') == 'input') ? first[0].value : css[0].innerHTML;

			str += selector+': '+rule+'; ';
		}
		return this.dungStripTags(this.trim(str));
	},
	addCSSRule: function(selector, attributes) {
		var ss = this.styleSheets;
		
		// Edit an existing rule if we find it
		for(var x=0; x<ss.length; x++) {
			var styleSheet = ss[x];
			var rules = styleSheet.rules || styleSheet.cssRules;
			for(var i=0; i<rules.length; i++) {
				if(rules[i]['selectorText'] == selector) {
					if(styleSheet.rules) {
						this.styleSheets[x].rules[i]['style']['cssText'] = attributes;
					} else {
						this.styleSheets[x].cssRules[i]['style']['cssText'] = attributes;
					}
					return;
				}
			}
		}
		// Else add a new one
		if(document.styleSheets[0].insertRule) {
			// Non-IE
			document.styleSheets[0].insertRule(selector + '{'+attributes+'}', document.styleSheets[0].cssRules.length);
			// IE
		} else if(document.styleSheets[0].addRule) {
			document.styleSheets[0].addRule(selector, attributes, document.styleSheets[0].rules.length);
		} else {
			console.error('This browser does not support CSS editing');
		}
	},
	toggleCSSStyle: function(style_pair) {
		style_pair.toggleClass('canceled');
		this.compileStyles(this.jq(style_pair.parent()));
	},
	// Toggle an entire selector, like turn off all styles under ".class"
	toggleCSSRule: function(css_group) {
		var selector_span = this.jq(this.jq(css_group.children()[0]).children()[0]);
		var selector = selector_span[0].innerHTML;
		css_group.toggleClass('canceled');
		this.jq(selector_span.next()).first().src = css_group.hasClass('canceled') ? 'dung_cancel.gif' : 'dung_cancel_gray.gif';
		
		if(selector == 'element.style') {
			var style = this.jq(this.getCurrentStyleTag().next());
			return;
		}

		var ss = this.styleSheets;
		for(var x=0; x <ss.length; x++) {
			var styleSheet = ss[x];
			var rules = styleSheet.rules || styleSheet.cssRules;
			for(var i=0; i<rules.length; i++) {
				var canceled = rules[i].selectorText.indexOf('#DungCancel ') > -1;
				var replaced = rules[i].selectorText.replace('#DungCancel ', '');
				if(selector.toLowerCase() == replaced.toLowerCase()) {
					var rule;
					if(styleSheet.rules) {
						rule = styleSheet.rules[i].style.cssText;
						styleSheet.removeRule(i);
					} else {
						rule = styleSheet.cssRules[i].style.cssText;
						styleSheet.deleteRule(i);
					}
					this.addCSSRule( (canceled ? replaced : '#DungCancel '+selector), rule);
					return;
				}
			}
		}
		console.error('Warning: Rule to toggle not found');
	},
	// The console object, gives us .log, .warn, .error
	console: {
		init: function(where, dung_beetle) {
			this.dung = dung_beetle;
			this.jq = this.dung.jq;
			this.mode = this.MODES.INSET;
			this.max_objects = 500;

			this.elements.console = this.jq('<div></div>').attr('class', 'dung_console').appendTo(this.dung.elements.dung_beetle);
			this.elements.buttons = this.jq('<div></div>')
				.html('<span class="dung_execute">Execute</span><span class="dung_clear">Clear</span>')
				.attr('class', 'buttons').appendTo(where);
			this.elements.input = this.jq('<textarea></textarea>')
				.appendTo(this.dung.elements.dung_beetle)
				.keypress(this.dung.bind(this.keyEvent, this));

			try {
				window.console = this;
			} catch(e) {
				try {
					this.dung.merge(console, this);
				} catch(e) {
					console.warn('Warning, cannot overwrite console methods, Dung Beetle MAY explode and eat your family');
				}
			}

			this.printStackTrace.implementation = function() {};
			this.printStackTrace.implementation.prototype = {
				run: function(ex) {
					// Use either the stored mode, or resolve it
					var mode = this._mode || this.mode();
					if (mode === 'other') {
						return this.other(arguments.callee);
					} else {
						ex = ex ||
							(function() {
								try {
									(0)();
								} catch (e) {
									return e;
								}
							})();
						return this[mode](ex);
					}
				},
				mode: function() {
					try {
						(0)();
					} catch (e) {
						if (e.arguments) {
							return (this._mode = 'chrome');
						}
						if (e.stack) {
							return (this._mode = 'firefox');
						}
						if (window.opera && !('stacktrace' in e)) { //Opera 9-
							return (this._mode = 'opera');
						}
					}
					return (this._mode = 'other');
				},
				chrome: function(e) {
					return e.stack.replace(/^.*?\n/, '').
							replace(/^.*?\n/, '').
							replace(/^.*?\n/, '').
							replace(/^[^\(]+?[\n$]/gm, '').
							replace(/^\s+at\s+/gm, '').
							replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@').
							split("\n");
				},
				firefox: function(e) {
					return e.stack.replace(/^.*?\n/, '').
							replace(/(?:\n@:0)?\s+$/m, '').
							replace(/^\(/gm, '{anonymous}(').
							split("\n");
				},
				// Opera 7.x and 8.x only!
				opera: function(e) {
					var lines = e.message.split("\n"), ANON = '{anonymous}', 
						lineRE = /Line\s+(\d+).*?script\s+(http\S+)(?:.*?in\s+function\s+(\S+))?/i, i, j, len;
					
					for (i = 4, j = 0, len = lines.length; i < len; i += 2) {
						if (lineRE.test(lines[i])) {
							lines[j++] = (RegExp.$3 ? RegExp.$3 + '()@' + RegExp.$2 + RegExp.$1 : ANON + '()@' + RegExp.$2 + ':' + RegExp.$1) +
							' -- ' +
							lines[i + 1].replace(/^\s+/, '');
						}
					}
					
					lines.splice(j, lines.length - j);
					return lines;
				},
				// Safari, Opera 9+, IE, and others
				other: function(curr) {
					var ANON = "{anonymous}", fnRE = /function\s*([\w\-$]+)?\s*\(/i, stack = [], j = 0, fn, args;
					
					var maxStackSize = 10;
					while (curr && stack.length < maxStackSize) {
						fn = fnRE.test(curr.toString()) ? RegExp.$1 || ANON : ANON;
						args = Array.prototype.slice.call(curr['arguments']);
						stack[j++] = fn + '(' + printStackTrace.implementation.prototype.stringifyArguments(args) + ')';
						
						//Opera bug: if curr.caller does not exist, Opera returns curr (WTF)
						if (curr === curr.caller && window.opera) {
							//TODO: check for same arguments if possible
							break;
						}
						curr = curr.caller;
					}
					return stack;
				},
				stringifyArguments: function(args) {
					for (var i = 0; i < args.length; ++i) {
						var argument = args[i];
						if (typeof argument == 'object') {
							args[i] = '#object';
						} else if (typeof argument == 'function') {
							args[i] = '#function';
						} else if (typeof argument == 'string') {
							args[i] = '"' + argument + '"';
						}
					}
					return args.join(',');
				},
				sourceCache: {},
				ajax: function(url) {
					var req = this.createXMLHTTPObject();
					if (!req) {
						return;
					}
					req.open('GET', url, false);
					req.setRequestHeader("User-Agent", "XMLHTTP/1.0");
					req.send('');
					return req.responseText;
				},
				createXMLHTTPObject: function() {
					// Try XHR methods in order and store XHR factory
					var xmlhttp, XMLHttpFactories = [
						function() {
							return new XMLHttpRequest();
						}, function() {
							return new ActiveXObject("Msxml2.XMLHTTP");
						}, function() {
							return new ActiveXObject("Msxml3.XMLHTTP");
						}, function() {
							return new ActiveXObject("Microsoft.XMLHTTP");
						}
					];
					for (var i = 0; i < XMLHttpFactories.length; i++) {
						try {
							xmlhttp = XMLHttpFactories[i]();
							// Use memoization to cache the factory
							this.createXMLHTTPObject = XMLHttpFactories[i];
							return xmlhttp;
						} catch (e) {}
					}
				},
				getSource: function(url) {
					if (!(url in this.sourceCache)) {
						this.sourceCache[url] = this.ajax(url).split("\n");
					}
					return this.sourceCache[url];
				},
				guessFunctions: function(stack) {
					for (var i = 0; i < stack.length; ++i) {
						var reStack = /{anonymous}\(.*\)@(\w+:\/\/([-\w\.]+)+(:\d+)?[^:]+):(\d+):?(\d+)?/;
						var frame = stack[i], m = reStack.exec(frame);
						if (m) {
							var file = m[1], lineno = m[4]; //m[7] is character position in Chrome
							if (file && lineno) {
								var functionName = this.guessFunctionName(file, lineno);
								stack[i] = frame.replace('{anonymous}', functionName);
							}
						}
					}
					return stack;
				},
				guessFunctionName: function(url, lineNo) {
					try {
						return this.guessFunctionNameFromLines(lineNo, this.getSource(url));
					} catch (e) {
						return 'getSource failed with url: ' + url + ', exception: ' + e.toString();
					}
				},
				guessFunctionNameFromLines: function(lineNo, source) {
					var reFunctionArgNames = /function ([^(]*)\(([^)]*)\)/;
					var reGuessFunction = /['"]?([0-9A-Za-z_]+)['"]?\s*[:=]\s*(function|eval|new Function)/;
					// Walk backwards from the first line in the function until we find the line which
					// matches the pattern above, which is the function definition
					var line = "", maxLines = 10;
					for (var i = 0; i < maxLines; ++i) {
						line = source[lineNo - i] + line;
						if (line !== undefined) {
							var m = reGuessFunction.exec(line);
							if (m) {
								return m[1];
							}
							else {
								m = reFunctionArgNames.exec(line);
							}
							if (m && m[1]) {
								return m[1];
							}
						}
					}
					return "(?)";
				}
			};
			this.history_position = 0;
			this.history = ["console.log('Dung Beetle:',dung_beetle);"];
			console.log('Dung Beetle:', dung_beetle);
		},
		log: function() {
			this.addToConsole(arguments);
		},
		error: function() {
			//this.addToConsole(this.printStackTrace(), 'dung_error');
			console.warn(this.printStackTrace());
		},
		warn: function() {
			this.addToConsole(arguments, 'dung_warn');
		},
		addToConsole: function(args, wrapclass) {
			var str = '';
			for(var x=0, l=args.length; x<l; x++) {
				str += this.formatObject(args[x])+' ';
			}
			this.elements.console.html(this.elements.console.html() + '<div class="console_response"><span class="'+(wrapclass || 'dung_log_message')+'">'+str+'</span></div>');
			this.dung.toBottom(this.elements.console);
		},
		keyEvent: function(evt) {
			this.dung.getKeyPressed(evt);
			var exerr;
			if(this.mode != this.MODES.FULL_MULTI) {
				this.elements.input.val(this.elements.input.val().replace(/[\n\r]/g, ''));

				if(evt.key == 'up') {
					this.history_position = Math.max(this.history_position-1, 0);
					this.elements.input.val(this.history[this.history_position]);
				} else if(evt.key == 'down') {
					this.history_position = Math.min(this.history_position+1, this.history.length-1);
					this.elements.input.val(this.history[this.history_position]);
				}
			}
			if(evt.key == 'enter') {
				var val = this.elements.input.val();
				if(val == 'clear()' || val == 'clear' || val == 'cls') {
					this.history_position++;
					this.history[console.history.length] = val;
					this.elements.console.html('');
					this.elements.input.val('');
					return;
				}
				if(this.mode == this.MODES.INLINE || this.mode == this.MODES.FULL) {
					this.elements.input.val(this.dung.trim(val));
					this.history_position++;
					this.history[this.history.length] = val;
					this.history_position = this.history.length;
					exerr = this.execute();
					this.elements.input.val('');
				} else if(evt.ctrlKey == true) {
					this.elements.input.val(this.dung.trim(val));
					exerr = this.execute();
				}
				if(exerr) {
					throw exerr;
				}
			}
		},
		execute: function() {
			var exerr;
			var kids = this.elements.console.size();
			try {
				var res = eval(this.elements.input.val());
				this.log(res);
			} catch(e) {
				exerr = e;
			}
			if(!res && this.elements.console.size() == kids) {
				this.log('Evaluated: '+this.elements.input.val());
			}
			return exerr;
		},
		// Recursive function to format an object for display in the console
		formatObject: function(obj, depth) {
			depth = (depth || 0) + 1;
			var str = '';
			var type = this.dung.type(obj);
			if(type == 'string' ) {
				str += '"<span class="dung_string">'+obj+'</span>"';
			} else if(type == 'number' || type == 'boolean') {
				str += '<span class="dung_'+type+'">'+obj+'</span>';
			} else if(type == 'array') {
				str += '[';
				for(var x=0; x<obj.length; x++) {
					str += this.formatObject(obj[x], depth)+', ';
				}
				str = str.substring(0, str.length-2)+'] ';
			} else if(type == 'object') {
				var i = 0;
				var formats = [];
				if(depth == 1) {
					for(var x in obj) {
						if(i++ >= this.max_objects) break;
						formats.push(x+'</span>='+this.formatObject(obj[x], depth));
					}
					str = '<span class="dung_obj_lbl">Object '+formats.join(' <span class="dung_obj_lbl">');
				} else {
					str += '<span class="dung_obj_lbl dung_sub_obj">Object</span>';
				}
			} else if(type == 'element') {
				var attrs = this.dung.getElementAttributes(obj);
				str += '[<span class="dung_element">HTML '+obj.nodeName.toLowerCase()+'</span>'+(attrs.length >0 ? ':{' : '');
				for(var x=0; x<attrs.length; x++) {
					str += '<span class="dung_string">'+attrs[x].nodeName+'</span>="<span class="dung_string">'+attrs[x].nodeValue+'</span>", ';
				}
				str = (attrs.length >0 ? str.substring(0, str.length-2)+'}' : str)+'] ';
			} else if(type == 'function'){
				str += '<span class="dung_function">function()</span>';
			} else {
				str += '<span class="dung_other">'+obj+'</span>';
			}
			return str;
		},
		// See licenses.txt or http://github.com/emwendelin/javascript-stacktrace for license information. Removed from source for brevity
		printStackTrace: function(options) {
			var ex = (options && options.e) ? options.e : null;
			var guess = (options && options.guess) ? options.guess : false;
			
			var p = new this.printStackTrace.implementation();
			var result = p.run(ex);
			return (guess) ? p.guessFunctions(result) : result;
		},
		MODES: {
			INSET: 1,		// Inset one-line
			FULL: 2,		// Full one-line
			FULL_MULTI: 3,	// Full multiline
			DOM: 4			// DOM tab view
		},
		elements: {}
	},
	spamThemAll: function(evt) {
		window.open(this.settings.my_site, '_blank');	
	},
	dungstatus: {
		enabled: false,
		visualizing: false,
		color_hover: false
	},
	settings: {
		css: 'http://andrewray.me/dung-beetle/secret/dung-styles.css',
		default_height: 180,
		trap_errors: false,
		tab_width: 105,
		tab_offset: 140,
		inspect_delay: 300,
		my_site: 'http://andrewray.me/dung-beetle/index.html'
	},
	input: {
		mouse: {x:1, y:1}
	},
	constants: {
		valid_css_elements: [
			'background', 'background-attachment', 'background-color', 'background-image', 'background-position',
			'background-repeat', 'border', 'border-collapse', 'border-color', 'border-spacing', 'border-style',
			'border-width', 'bottom', 'caption-side', 'clear', 'clip', 'color', 'content', 'counter-increment',
			'counter-reset', 'cursor', 'direction', 'display', 'empty-cells', 'float', 'font', 'font-family',
			'font-size', 'font-style', 'font-variant', 'font-weight', 'height', 'left', 'letter-spacing',
			'line-height', 'list-style', 'list-style-image', 'list-style-position', 'list-style-type', 'margin',
			'max-height', 'max-width', 'min-height', 'min-width', 'orphans', 'outline', 'outline-color',
			'outline-style', 'outline-width', 'overflow', 'padding', 'page-break-after', 'page-break-before',
			'page-break-inside', 'position', 'quotes', 'right', 'table-layout', 'text-align', 'text-decoration',
			'text-indent', 'text-transform', 'top', 'unicode-bidi', 'vertical-align', 'visibility', 'white-space',
			'widows', 'width', 'word-spacing', 'z-index'],
		colors: ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown',
			'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan',
			'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'Darkorange', 'DarkOrchid', 'DarkRed',
			'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue',
			'DimGray', 'DimGrey', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod',
			'Gray', 'Grey', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed', 'Indigo', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen',
			'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGrey', 'LightGreen', 'LightPink', 'LightSalmon',
			'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSlateGrey', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta',
			'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen',
			'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive',
			'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff',
			'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell',
			'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'SlateGrey', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato',
			'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen'],
		input_ac_words: ['top', 'bottom', 'left', 'right', 'center', '!important', 'solid', 'inset', 'ridge', 'none', 'dashed', 'dotted',
			'relative', 'absolute', 'no-repeat', 'repeat-x', 'repeat-y', 'scroll', 'pointer', 'text'],
		keyLabels: { 38:'up', 40:'down', 37:'left', 39:'right', 13:'enter', 8:'backspace'}
	},
	elements: {
		outlines: {
			top: null,
			bottom: null,
			left: null,
			right: null
		},
		display: null,
		vertical_divide: null,
		push: null,
		cursor: null,
		upsize: null,
		styler: null,
		resize: null,
		header: null,
		body: null,
		current_element: null,
		current_dom_node: null
	},
	getKeyPressed: function(evt) {
		var code = evt.which || evt.charCode;
		var k, c;
		if(k = this.constants.keyLabels[evt.keyCode]) {
			evt.key = k;
		} else if(c = String.fromCharCode(code)) {
			evt.key = c;
		}
		return evt;
	},
	// Merges b in to a
	merge: function(a, b) {
		for(var thing in b) {
			a[thing] = b[thing];
		}
	},
	injectClassedDivsTo: function(classes, par) {
		var built = {};
		for(var x=0, l=classes.length; x<l; x++) {
			built[classes[x]] = this.jq('<div></div>').attr('class', 'dung_'+classes[x]).appendTo(par);
		}
		return built;
	},
	// Really craving MooTool's bindWithEvent right now
	bind: function(func, scope) {
		return function() {
			return func.apply(scope, arguments)
		}
	},
	mouseCapture: function(evt) {
		this.input.mouse.x = evt.pageX;
		this.input.mouse.y = evt.pageY;
		if(this.dungstatus.color_hover) {
			this.elements.color_hover.css({'left':(this.input.mouse.x+9)+'px', 'top':(this.input.mouse.y+9)+'px'});
		}
	},
	toBottom: function(elem, time) {
		time = time || 200;
		elem = this.jq(elem);
		elem.animate({scrollTop: elem[0].scrollHeight}, {queue:false, duration:time});
	},
	scrollTo: function(elem, to, time) {
		time = time || 200;
		var target = this.type(to) == 'number' ? to : this.jq(to).offset().top + (elem.scrollTop() - elem.offset().top);
		elem.animate({scrollTop: target}, {queue:false, duration:time});
	},
	// Add spans to tags for color hovering
	colorize: function(str) {
		var regex = '('+this.constants.colors.join('|')+'|#[a-zA-Z0-9]+|rgb\\([0-9\\, ]+\\))';
		return str.replace(new RegExp(regex, 'gi'), '<span class="dung_color_hover" style="border-bottom:1px dotted $1">$1</span>');
	},
	// Stolen verbatim from MooTools
	type: function(obj){
		if (obj == undefined) return 'undefined';
		if (obj === null) return 'null';
		if (typeof obj.length == 'number' && typeof obj.push == 'function') return 'array';
		if (obj.nodeName){
			switch (obj.nodeType){
				case 1: return 'element';
				case 3: return (/\S/).test(obj.nodeValue) ? 'textnode' : 'whitespace';
			}
		} else if (typeof obj.length == 'number'){
			if (obj.callee) return 'arguments';
			else if (obj.item) return 'collection';
		}
		return typeof obj;
	},
	// Get an array of all attributes of a DOM node
	// For example <div class="foo" style="bar"> returns
	//	[ {nodeName:'class', nodeValue:'foo'}, {nodeName:'style', nodeClass:'bar'} ]
	getElementAttributes: function(element) {
		var attrs = [];
		var hold = this.jq('<div></div>');
		try {
			element = this.jq(element).clone().text('').appendTo(hold);
		} catch(e) {
			hold.remove();
			return attrs;
		}

		var groups = hold.html().match(/([a-zA-Z0-9\-]+)=("[^">]+"[ >]|[^">]+[ >])/g);

		if(groups != null && groups != false && groups.length) {
			for(var x=0; x<groups.length; x++) {
				var pair = groups[x].split('=');
				attrs[x] = {
					'nodeName':pair[0],
					'nodeValue':pair[1].replace(/"| $/g, '').replace('>', '')
				};
			}
		}
		hold.remove();
		return attrs;
	},
	trim: function(str){
		return str.replace(/^\s+|\s+$/g, '');
	},
	// Custom sort function for comparing CSS inheritence/importance
	weightedSort: function(a, b) {
		if (a.weight < b.weight) return 1;
		if (a.weight > b.weight) return -1;
		return 0;
	},
	triggerTimeoutEvent: function(func, timeout) {
		if(this.uncalled) {
			clearTimeout(this.uncalled); 
		}
		this.uncalled = setTimeout(this.bind(func, this), timeout);
	}
};

function inspectHover(event) {
	var e = new Event(event).stop();
	var elem = e.target;
}

// Turn an editable value into an input box
function editValue(mixed) {
	var elem;
	if($type(mixed) == 'event') {
		var e = new Event(mixed).stop();
		var elem = e.target;
	} else {
		elem = mixed;
	}

	var value = elem.innerHTML;
	var stripped = dungStripTags(value.trim());
	elem.set('text', '');

	var edit_input = new Element('input', {'class':'edit_input', 'style':'width:'+(stripped.length * 7)+'px;'});
	edit_input.original_value = value.trim();
	edit_input.inject(elem).set('value', stripped).focus();
	edit_input.select();

	edit_input.addEvent('keydown', inputKeyEvent);
	edit_input.addEvent('keyup', inputKeyEvent);
}

// Handles all major clicks on the console. Stops event bubbling and determines action
function consoleClick(event) {
}

function consoleHover(event) {
	var e = new Event(event).stop();
	var elem = new Element(e.target);
	var highlight = elem.hover_highlight;
	if(highlight && elem.hasClass('dung_tag_open')) {
		visualizeElement(highlight);
	} else if(dung_status.visualizing) {
		hideElementVisuals();
	}
	if(elem.hasClass('dung_color_hover')) {
		dung_color_hover.enabled = true;
		dung_color_hover.setStyles({'display':'block', 'background-color':elem.innerHTML});
	} else if(dung_color_hover.enabled == true) {
		dung_color_hover.enabled = false;
		dung_color_hover.setStyle('display', 'none');
	}
}

// Function to handle all console double clicks
function consoleDblClick(event) {
	var e = new Event(event);
	var elem = new Element(e.target);

	// Double click on a CSS rule, so insert a new element
	if(elem.hasClass('dung_css_selector') || elem.getParent().hasClass('dung_css_selector')) {
		var style_group = new Element('div', {'class':'dung_pair new'});
		var css_group = e.target.hasClass('dung_pair') || e.target.hasClass('css_title') ? e.target.getParent() : e.target;

		// Search for a style attribute on the element
		if(css_group.getFirst().getFirst().innerHTML == 'element.style') {
			var style = getCurrentStyleTag(); // The div of the attributes of the element
/* 			for(var x=0, children = current_dom_node.getChildren(); x<children.length; x++) {
				if(children[x].getFirst().innerHTML.toString() == 'style') {
					style = children[x].getFirst();
					break;
				}
			} */
			if(!$defined(style)) {
				var last = current_dom_node.getLast();
				var html = ' <span class="dung_html_prop">style</span>="<span class="dung_attr_edit"></span><span class="dung_html_attr">"</span>';
				if(last) {
					new Element('span', {'class':'dung_html_attr'}).inject(last, 'after').innerHTML = html;
				} else {
					current_dom_node.innerHTML = current_dom_node.innerHTML.substring(0, current_dom_node.innerHTML.length - 4) + '<span class="dung_html_attr">' + html + '</span>&gt;';
				}
			}
		}

		//Create the inputs
		style_group.injectBefore(css_group.getChildren()[1]).innerHTML = '<div class="cancel"></div><span class="dung_attr"><input class="edit_input" /></span>: <span class="dung_val"><input class="edit_input" /></span>;';

		// Wire the two inputs for clicking
		style_group.getFirst().getNext().getFirst().addEvent('keydown', inputKeyEvent).addEvent('keyup', inputKeyEvent).focus();
		style_group.getChildren()[2].getFirst().addEvent('keydown', inputKeyEvent).addEvent('keyup', inputKeyEvent);
	}
}

// Key handler for console
function consoleKeyEvent(event) {
}

function executeConsole() {
}

// Key event handler for all input fields when editing values. Determines action based on what input it is
function inputKeyEvent(mixed) {
	var event, input;
	if($type(mixed) == 'event') {
		event = mixed;
		input = event.target;
	} else {
		event = {'key':'esc'};
		input = mixed;
	}
	var parent = input.getParent();
	var grandparent = parent.getParent();
	var greatparent = grandparent.getParent();

	if(greatparent.getFirst().getFirst().innerHTML == 'element.style') {
		var style;
		for(var x=0, children = current_dom_node.getChildren(); x<children.length; x++) {
			if(children[x].getFirst().innerHTML.toString() == 'style') {
				style = children[x].getFirst().getNext();
			}
		}
		style.innerHTML = splatStyles(greatparent);
	}

	// They key event came from a CSS attribute, like "border" in "border: 3px solid blue"
	if(parent.hasClass('dung_attr')) {
		if(event.key != 'backspace') { autoComplete(input, valid_css_elements); }
		if(input.value.indexOf(':') > 1 || ((event.key == 'tab' || event.key == 'enter') && input.value.length > 0)) {
			input.value = input.value.replace(':', '').trim();
			input.getParent().innerHTML = this.colorize(input.value);

			// Either focus on the next box or...
			var nextInput = parent.getNext().getFirst();
			if(nextInput != null) {
				// Focus on the next area for editing, hack because IE does not focus, probably race condition
				setTimeout(function() {parent.getNext().getFirst().focus();}, 1);
			} else {
				new Event(event).stop();
				grandparent.removeClass('new');
				if(event.key == 'enter') {
					compileStyles(greatparent);
				} else {
					editValue(parent.getNext());
					setTimeout(function() {parent.getNext().getFirst().select();}, 1);
				}
			}
		} else if(event.key == 'esc' || event.key == 'enter' || event.key == 'tab') {
			input.value = input.value.trim();
			if(grandparent.hasClass('new')) {
				grandparent.destroy();
			} else {
				grandparent.removeClass('new');
				parent.innerHTML = input.original_value;
				input.destroy();
			}
		}
	// The key event came from a CSS value, like "3px solid blue" in "border: 3px solid blue"
	} else if(parent.hasClass('dung_val')) {
		compileStyles(greatparent);
		if(event.key != 'backspace') { autoComplete(input, input_ac_words); }
		if((event.key == 'tab' || event.key == 'enter') && input.value.length > 0) {
			input.value = input.value.replace(';', '').trim();
			input.getParent().innerHTML = this.colorize(input.value);
			grandparent.removeClass('new');
			compileStyles(greatparent);
		} else if((event.key == 'esc' || event.key == 'tab'|| event.key == 'enter') && !grandparent.hasClass('new')) {
			input.value = input.value.trim();
			if(grandparent.hasClass('new') || input.value.length == 0) {
				grandparent.destroy();
			} else {
				grandparent.removeClass('new');
				parent.innerHTML = input.original_value;
				input.destroy();
			}
		}
	// Event fired from DOM node
	} else if(parent.hasClass('dung_html_prop') || parent.hasClass('dung_attr_edit')) {
		var isAttribute = parent.hasClass('dung_html_prop');
		if(!isAttribute) {
			applyAttributes(greatparent);
		}
		current_dom_node = greatparent;
		current_element = current_dom_node.hover_highlight;
		if((input.value.indexOf('=') > 1 && isAttribute) || (event.key == 'tab' && input.value.length > 0)) {
			parent.innerHTML = input.value;
			input.destroy();
			applyAttributes(greatparent);
		} else if(event.key == 'enter' && input.value.trim().length > 0) {
			if(input.value != input.original_value) {
				 current_element.erase(input.original_value);
			}
			parent.innerHTML = input.value;
			applyAttributes(greatparent);
			input.destroy();
		} else if(event.key == 'enter' || event.key == 'tab') {
			if(isAttribute) {
				parent.innerHTML = input.original_value;
				parent.getNext().innerHTML = '';
			} else {
				parent.innerHTML = '';
			}
			applyAttributes(greatparent);
			grandparent.destroy();
		} else if(event.key == 'esc') {
			parent.innerHTML = input.original_value;
		}
	}

	// Auto size the input field
	input.setStyle('width', ((input.value.length * 7) + 8)+'px');
};

// Applies attributes set from DOM editing to the actual element in page body
function applyAttributes(tag_open, set_to) {
	var children = tag_open.getChildren();
	for(var x=0; x<children.length; x ++) {
		// Get the attribute (like "class") and the value (like "content") from either input box or already-compiled
		var first = children[x].getFirst().getFirst();
		var attr = first ? first.value : children[x].getFirst().innerHTML;

		first = children[x].getFirst().getNext().getFirst();
		var value = first ? first.value : children[x].getFirst().getNext().innerHTML;

		if(attr == 'style') {
			current_element.erase('style');
			var styles = value.split(';');
			for(var y=0; y<styles.length; y++) {
				var pair = styles[y].trim().split(':');
				current_element.setStyle(pair[0], pair[1]);
			}
		} else {
			current_element.set(attr, set_to ? null : value);
		}
	}
	inspectElement(current_element);
}

function getTags(elem) {
	if(elem == null) { return ''; }
	var holder = new Element('div', {});
	elem.clone().inject(holder);
	var tags = holder.innerHTML;
	//tags = tags.replace(/>([^<]+)</, '>'++'<');
	holder.dispose();
	return tags;
}

// Seat the console on the bottom of the screen
function stickConsole() {
}

function isValidCSSAttr(str) {
	for(var x=0; x<valid_css_elements.length; x++) {
		if(valid_css_elements[x] == str) {
			return true;
		}
	}
	return false;
}

// Auto-complete for input fields. Suggestions come from object
function autoComplete(input, match_obj) {
	var orig_value = input.value;
	if(orig_value.length == 0) {return;}

	var match = orig_value.match(/[^ ]+($)/);
	if( match == null) {return;}

	var wordToTest = match[0];

	for(var x=0; x <match_obj.length; x++) {
		var word = match_obj[x];
		if(word == wordToTest) {
			return;
		}
		if(word.indexOf(wordToTest) == 0) {
			input.value = orig_value.replace(new RegExp(word, 'g'), word.charAt(0)+'###'+word.substr(1));
			input.value = orig_value.replace(new RegExp(wordToTest+'$'), '') + word;
			input.value = input.value.replace('###', '');

			if(input.setSelectionRange) {
				input.setSelectionRange(orig_value.length, input.value.length);
			} else {
				range = input.createTextRange();
				range.findText(word.substr(wordToTest.length), -2);
				range.select();
			}
			break;
		}
	}
}

// Strip all HTML tags from a value
function dungStripTags(str) {
	return str.replace(/\<[^>]+\>/g, '');
}

function stopKeyDown(event) {
	var e = new Event(event).stop();
}
