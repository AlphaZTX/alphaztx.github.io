var J=typeof global=="object"&&global&&global.Object===Object&&global,V=typeof self=="object"&&self&&self.Object===Object&&self,O=J||V||Function("return this")(),d=O.Symbol,U=Object.prototype,Q=U.hasOwnProperty,tt=U.toString,b=d?d.toStringTag:void 0;function et(t){var e=Q.call(t,b),r=t[b];try{t[b]=void 0;var n=!0}catch{}var i=tt.call(t);return n&&(e?t[b]=r:delete t[b]),i}var rt=Object.prototype,nt=rt.toString;function it(t){return nt.call(t)}var at="[object Null]",ot="[object Undefined]",R=d?d.toStringTag:void 0;function K(t){return t==null?t===void 0?ot:at:R&&R in Object(t)?et(t):it(t)}function ct(t){return t!=null&&typeof t=="object"}var st="[object Symbol]";function S(t){return typeof t=="symbol"||ct(t)&&K(t)==st}function ut(t,e){for(var r=-1,n=t==null?0:t.length,i=Array(n);++r<n;)i[r]=e(t[r],r,t);return i}var w=Array.isArray,ft=1/0,D=d?d.prototype:void 0,H=D?D.toString:void 0;function X(t){if(typeof t=="string")return t;if(w(t))return ut(t,X)+"";if(S(t))return H?H.call(t):"";var e=t+"";return e=="0"&&1/t==-ft?"-0":e}var lt=/\s/;function ht(t){for(var e=t.length;e--&&lt.test(t.charAt(e)););return e}var dt=/^\s+/;function pt(t){return t&&t.slice(0,ht(t)+1).replace(dt,"")}function p(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var G=NaN,gt=/^[-+]0x[0-9a-f]+$/i,_t=/^0b[01]+$/i,yt=/^0o[0-7]+$/i,mt=parseInt;function W(t){if(typeof t=="number")return t;if(S(t))return G;if(p(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=p(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=pt(t);var r=_t.test(t);return r||yt.test(t)?mt(t.slice(2),r?2:8):gt.test(t)?G:+t}var bt="[object AsyncFunction]",vt="[object Function]",Tt="[object GeneratorFunction]",Ot="[object Proxy]";function St(t){if(!p(t))return!1;var e=K(t);return e==vt||e==Tt||e==bt||e==Ot}var $=O["__core-js_shared__"],L=function(){var t=/[^.]+$/.exec($&&$.keys&&$.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function xt(t){return!!L&&L in t}var Ct=Function.prototype,It=Ct.toString;function jt(t){if(t!=null){try{return It.call(t)}catch{}try{return t+""}catch{}}return""}var Pt=/[\\^$.*+?()[\]{}|]/g,$t=/^\[object .+?Constructor\]$/,Et=Function.prototype,wt=Object.prototype,Nt=Et.toString,zt=wt.hasOwnProperty,Ft=RegExp("^"+Nt.call(zt).replace(Pt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function At(t){if(!p(t)||xt(t))return!1;var e=St(t)?Ft:$t;return e.test(jt(t))}function Mt(t,e){return t==null?void 0:t[e]}function B(t,e){var r=Mt(t,e);return At(r)?r:void 0}function Rt(t,e){return t===e||t!==t&&e!==e}var Dt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ht=/^\w*$/;function Gt(t,e){if(w(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||S(t)?!0:Ht.test(t)||!Dt.test(t)||e!=null&&t in Object(e)}var v=B(Object,"create");function Wt(){this.__data__=v?v(null):{},this.size=0}function Lt(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var Ut="__lodash_hash_undefined__",Kt=Object.prototype,Xt=Kt.hasOwnProperty;function Bt(t){var e=this.__data__;if(v){var r=e[t];return r===Ut?void 0:r}return Xt.call(e,t)?e[t]:void 0}var Yt=Object.prototype,Zt=Yt.hasOwnProperty;function kt(t){var e=this.__data__;return v?e[t]!==void 0:Zt.call(e,t)}var qt="__lodash_hash_undefined__";function Jt(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=v&&e===void 0?qt:e,this}function l(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}l.prototype.clear=Wt;l.prototype.delete=Lt;l.prototype.get=Bt;l.prototype.has=kt;l.prototype.set=Jt;function Vt(){this.__data__=[],this.size=0}function x(t,e){for(var r=t.length;r--;)if(Rt(t[r][0],e))return r;return-1}var Qt=Array.prototype,te=Qt.splice;function ee(t){var e=this.__data__,r=x(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():te.call(e,r,1),--this.size,!0}function re(t){var e=this.__data__,r=x(e,t);return r<0?void 0:e[r][1]}function ne(t){return x(this.__data__,t)>-1}function ie(t,e){var r=this.__data__,n=x(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}function g(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}g.prototype.clear=Vt;g.prototype.delete=ee;g.prototype.get=re;g.prototype.has=ne;g.prototype.set=ie;var ae=B(O,"Map");function oe(){this.size=0,this.__data__={hash:new l,map:new(ae||g),string:new l}}function ce(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function C(t,e){var r=t.__data__;return ce(e)?r[typeof e=="string"?"string":"hash"]:r.map}function se(t){var e=C(this,t).delete(t);return this.size-=e?1:0,e}function ue(t){return C(this,t).get(t)}function fe(t){return C(this,t).has(t)}function le(t,e){var r=C(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}function h(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}h.prototype.clear=oe;h.prototype.delete=se;h.prototype.get=ue;h.prototype.has=fe;h.prototype.set=le;var he="Expected a function";function N(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(he);var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var s=t.apply(this,n);return r.cache=o.set(i,s)||o,s};return r.cache=new(N.Cache||h),r}N.Cache=h;var de=500;function pe(t){var e=N(t,function(n){return r.size===de&&r.clear(),n}),r=e.cache;return e}var ge=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_e=/\\(\\)?/g,ye=pe(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(ge,function(r,n,i,o){e.push(i?o.replace(_e,"$1"):n||r)}),e});function me(t){return t==null?"":X(t)}function be(t,e){return w(t)?t:Gt(t,e)?[t]:ye(me(t))}var ve=1/0;function Te(t){if(typeof t=="string"||S(t))return t;var e=t+"";return e=="0"&&1/t==-ve?"-0":e}function Oe(t,e){e=be(e,t);for(var r=0,n=e.length;t!=null&&r<n;)t=t[Te(e[r++])];return r&&r==n?t:void 0}function Pe(t,e,r){var n=t==null?void 0:Oe(t,e);return n===void 0?r:n}var E=function(){return O.Date.now()},Se="Expected a function",xe=Math.max,Ce=Math.min;function Ie(t,e,r){var n,i,o,s,c,f,_=0,z=!1,y=!1,I=!0;if(typeof t!="function")throw new TypeError(Se);e=W(e)||0,p(r)&&(z=!!r.leading,y="maxWait"in r,o=y?xe(W(r.maxWait)||0,e):o,I="trailing"in r?!!r.trailing:I);function j(a){var u=n,m=i;return n=i=void 0,_=a,s=t.apply(m,u),s}function Y(a){return _=a,c=setTimeout(T,e),z?j(a):s}function Z(a){var u=a-f,m=a-_,M=e-u;return y?Ce(M,o-m):M}function F(a){var u=a-f,m=a-_;return f===void 0||u>=e||u<0||y&&m>=o}function T(){var a=E();if(F(a))return A(a);c=setTimeout(T,Z(a))}function A(a){return c=void 0,I&&n?j(a):(n=i=void 0,s)}function k(){c!==void 0&&clearTimeout(c),_=0,n=f=i=c=void 0}function q(){return c===void 0?s:A(E())}function P(){var a=E(),u=F(a);if(n=arguments,i=this,f=a,u){if(c===void 0)return Y(f);if(y)return clearTimeout(c),c=setTimeout(T,e),j(f)}return c===void 0&&(c=setTimeout(T,e)),s}return P.cancel=k,P.flush=q,P}function $e(t){for(var e=-1,r=t==null?0:t.length,n={};++e<r;){var i=t[e];n[i[0]]=i[1]}return n}var je="Expected a function";function Ee(t,e,r){var n=!0,i=!0;if(typeof t!="function")throw new TypeError(je);return p(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Ie(t,e,{leading:n,maxWait:e,trailing:i})}export{$e as f,Pe as g,Ee as t};
