function h(){}function F(t,n){for(const e in n)t[e]=n[e];return t}function z(t){return t()}function M(){return Object.create(null)}function b(t){t.forEach(z)}function H(t){return typeof t=="function"}function I(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function G(t){return Object.keys(t).length===0}function J(t,...n){if(t==null)return h;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function st(t,n,e){t.$$.on_destroy.push(J(n,e))}function ut(t,n,e,i){if(t){const c=B(t,n,e,i);return t[0](c)}}function B(t,n,e,i){return t[1]&&i?F(e.ctx.slice(),t[1](i(n))):e.ctx}function lt(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const l=[],o=Math.max(n.dirty.length,c.length);for(let s=0;s<o;s+=1)l[s]=n.dirty[s]|c[s];return l}return n.dirty|c}return n.dirty}function ft(t,n,e,i,c,l){if(c){const o=B(n,e,i,l);t.p(o,c)}}function at(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let E=!1;function K(){E=!0}function W(){E=!1}function Q(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const u=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=u?c+1:Q(1,c,g=>n[e[g]].claim_order,u))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const l=[],o=[];let s=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(l.push(n[r-1]);s>=r;s--)o.push(n[s]);s--}for(;s>=0;s--)o.push(n[s]);l.reverse(),o.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<o.length;r++){for(;u<l.length&&o[r].claim_order>=l[u].claim_order;)u++;const a=u<l.length?l[u]:null;t.insertBefore(o[r],a)}}function U(t,n){if(E){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function dt(t,n,e){E&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode.removeChild(t)}function _t(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function X(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function ht(){return S(" ")}function mt(){return S("")}function pt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function yt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,n,e,i,c=!1){Z(t);const l=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const s=t[o];if(n(s)){const r=e(s);return r===void 0?t.splice(o,1):t[o]=r,c||(t.claim_info.last_index=o),s}}for(let o=t.claim_info.last_index-1;o>=0;o--){const s=t[o];if(n(s)){const r=e(s);return r===void 0?t.splice(o,1):t[o]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,s}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function tt(t,n,e,i){return O(t,c=>c.nodeName===n,c=>{const l=[];for(let o=0;o<c.attributes.length;o++){const s=c.attributes[o];e[s.name]||l.push(s.name)}l.forEach(o=>c.removeAttribute(o))},()=>i(n))}function bt(t,n,e){return tt(t,n,e,X)}function nt(t,n){return O(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function gt(t){return nt(t," ")}function xt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function $t(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function wt(t,n,e){t.classList[e?"add":"remove"](n)}let y;function p(t){y=t}function A(){if(!y)throw new Error("Function called outside component initialization");return y}function Et(t){A().$$.on_mount.push(t)}function kt(t){A().$$.after_update.push(t)}function jt(t,n){A().$$.context.set(t,n)}const m=[],L=[],$=[],q=[],T=Promise.resolve();let j=!1;function P(){j||(j=!0,T.then(D))}function Nt(){return P(),T}function N(t){$.push(t)}const k=new Set;let x=0;function D(){const t=y;do{for(;x<m.length;){const n=m[x];x++,p(n),et(n.$$)}for(p(null),m.length=0,x=0;L.length;)L.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];k.has(e)||(k.add(e),e())}$.length=0}while(m.length);for(;q.length;)q.pop()();j=!1,k.clear(),p(t)}function et(t){if(t.fragment!==null){t.update(),b(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const w=new Set;let d;function St(){d={r:0,c:[],p:d}}function At(){d.r||b(d.c),d=d.p}function it(t,n){t&&t.i&&(w.delete(t),t.i(n))}function Ct(t,n,e,i){if(t&&t.o){if(w.has(t))return;w.add(t),d.c.push(()=>{w.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function vt(t,n){const e={},i={},c={$$scope:1};let l=t.length;for(;l--;){const o=t[l],s=n[l];if(s){for(const r in o)r in s||(i[r]=1);for(const r in s)c[r]||(e[r]=s[r],c[r]=1);t[l]=s}else for(const r in o)c[r]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Mt(t){return typeof t=="object"&&t!==null?t:{}}function Lt(t){t&&t.c()}function qt(t,n){t&&t.l(n)}function rt(t,n,e,i){const{fragment:c,on_mount:l,on_destroy:o,after_update:s}=t.$$;c&&c.m(n,e),i||N(()=>{const r=l.map(z).filter(H);o?o.push(...r):b(r),t.$$.on_mount=[]}),s.forEach(N)}function ct(t,n){const e=t.$$;e.fragment!==null&&(b(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){t.$$.dirty[0]===-1&&(m.push(t),P(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function zt(t,n,e,i,c,l,o,s=[-1]){const r=y;p(t);const u=t.$$={fragment:null,ctx:null,props:l,update:h,not_equal:c,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:M(),dirty:s,skip_bound:!1,root:n.target||r.$$.root};o&&o(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(f,g,...C)=>{const v=C.length?C[0]:g;return u.ctx&&c(u.ctx[f],u.ctx[f]=v)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](v),a&&ot(t,f)),g}):[],u.update(),a=!0,b(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){K();const f=Y(n.target);u.fragment&&u.fragment.l(f),f.forEach(V)}else u.fragment&&u.fragment.c();n.intro&&it(t.$$.fragment),rt(t,n.target,n.anchor,n.customElement),W(),D()}p(r)}class Bt{$destroy(){ct(this,1),this.$destroy=h}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const _=[];function Ot(t,n=h){let e;const i=new Set;function c(s){if(I(t,s)&&(t=s,e)){const r=!_.length;for(const u of i)u[1](),_.push(u,t);if(r){for(let u=0;u<_.length;u+=2)_[u][0](_[u+1]);_.length=0}}}function l(s){c(s(t))}function o(s,r=h){const u=[s,r];return i.add(u),i.size===1&&(e=n(c)||h),s(t),()=>{i.delete(u),i.size===0&&(e(),e=null)}}return{set:c,update:l,subscribe:o}}export{Mt as A,ct as B,F as C,Ot as D,Nt as E,U as F,pt as G,h as H,st as I,wt as J,ut as K,ft as L,at as M,lt as N,_t as O,Bt as S,Y as a,yt as b,bt as c,V as d,X as e,$t as f,dt as g,nt as h,zt as i,xt as j,ht as k,mt as l,gt as m,St as n,Ct as o,At as p,it as q,jt as r,I as s,S as t,kt as u,Et as v,Lt as w,qt as x,rt as y,vt as z};