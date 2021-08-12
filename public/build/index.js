var Lt=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var p=(i,t,e)=>(Lt(i,t,"read from private field"),e?e.call(i):t.get(i)),c=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},C=(i,t,e,r)=>(Lt(i,t,"write to private field"),r?r.call(i,e):t.set(i,e),e);var g=(i,t,e)=>(Lt(i,t,"access private method"),e);var te=new WeakMap,Vt=i=>(...t)=>{let e=i(...t);return te.set(e,!0),e},O=i=>typeof i=="function"&&te.has(i);var Mt=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,pt=(i,t,e=null,r=null)=>{for(;t!==e;){let s=t.nextSibling;i.insertBefore(t,r),t=s}},M=(i,t,e=null)=>{for(;t!==e;){let r=t.nextSibling;i.removeChild(t),t=r}};var k={},$={};var _=`{{lit-${String(Math.random()).slice(2)}}}`,Rt=`<!--${_}-->`,ee=new RegExp(`${_}|${Rt}`),q="$lit$",D=class{constructor(t,e){this.parts=[],this.element=e;let r=[],s=[],n=document.createTreeWalker(e.content,133,null,!1),a=0,o=-1,l=0,{strings:m,values:{length:w}}=t;for(;l<w;){let d=n.nextNode();if(d===null){n.currentNode=s.pop();continue}if(o++,d.nodeType===1){if(d.hasAttributes()){let T=d.attributes,{length:f}=T,y=0;for(let u=0;u<f;u++)re(T[u].name,q)&&y++;for(;y-- >0;){let u=m[l],x=dt.exec(u)[2],b=x.toLowerCase()+q,j=d.getAttribute(b);d.removeAttribute(b);let A=j.split(ee);this.parts.push({type:"attribute",index:o,name:x,strings:A}),l+=A.length-1}}d.tagName==="TEMPLATE"&&(s.push(d),n.currentNode=d.content)}else if(d.nodeType===3){let T=d.data;if(T.indexOf(_)>=0){let f=d.parentNode,y=T.split(ee),u=y.length-1;for(let x=0;x<u;x++){let b,j=y[x];if(j==="")b=E();else{let A=dt.exec(j);A!==null&&re(A[2],q)&&(j=j.slice(0,A.index)+A[1]+A[2].slice(0,-q.length)+A[3]),b=document.createTextNode(j)}f.insertBefore(b,d),this.parts.push({type:"node",index:++o})}y[u]===""?(f.insertBefore(E(),d),r.push(d)):d.data=y[u],l+=u}}else if(d.nodeType===8)if(d.data===_){let T=d.parentNode;(d.previousSibling===null||o===a)&&(o++,T.insertBefore(E(),d)),a=o,this.parts.push({type:"node",index:o}),d.nextSibling===null?d.data="":(r.push(d),o--),l++}else{let T=-1;for(;(T=d.data.indexOf(_,T+1))!==-1;)this.parts.push({type:"node",index:-1}),l++}}for(let d of r)d.parentNode.removeChild(d)}},re=(i,t)=>{let e=i.length-t.length;return e>=0&&i.slice(e)===t},rt=i=>i.index!==-1,E=()=>document.createComment(""),dt=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;var B=class{constructor(t,e,r){this.__parts=[],this.template=t,this.processor=e,this.options=r}update(t){let e=0;for(let r of this.__parts)r!==void 0&&r.setValue(t[e]),e++;for(let r of this.__parts)r!==void 0&&r.commit()}_clone(){let t=Mt?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],r=this.template.parts,s=document.createTreeWalker(t,133,null,!1),n=0,a=0,o,l=s.nextNode();for(;n<r.length;){if(o=r[n],!rt(o)){this.__parts.push(void 0),n++;continue}for(;a<o.index;)a++,l.nodeName==="TEMPLATE"&&(e.push(l),s.currentNode=l.content),(l=s.nextNode())===null&&(s.currentNode=e.pop(),l=s.nextNode());if(o.type==="node"){let m=this.processor.handleTextExpression(this.options);m.insertAfterNode(l.previousSibling),this.__parts.push(m)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));n++}return Mt&&(document.adoptNode(t),customElements.upgrade(t)),t}};var ie=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:i=>i}),ye=` ${_} `,F=class{constructor(t,e,r,s){this.strings=t,this.values=e,this.type=r,this.processor=s}getHTML(){let t=this.strings.length-1,e="",r=!1;for(let s=0;s<t;s++){let n=this.strings[s],a=n.lastIndexOf("<!--");r=(a>-1||r)&&n.indexOf("-->",a+1)===-1;let o=dt.exec(n);o===null?e+=n+(r?ye:Rt):e+=n.substr(0,o.index)+o[1]+o[2]+q+o[3]+_}return e+=this.strings[t],e}getTemplateElement(){let t=document.createElement("template"),e=this.getHTML();return ie!==void 0&&(e=ie.createHTML(e)),t.innerHTML=e,t}};var ct=i=>i===null||!(typeof i=="object"||typeof i=="function"),ht=i=>Array.isArray(i)||!!(i&&i[Symbol.iterator]),it=class{constructor(t,e,r){this.dirty=!0,this.element=t,this.name=e,this.strings=r,this.parts=[];for(let s=0;s<r.length-1;s++)this.parts[s]=this._createPart()}_createPart(){return new ut(this)}_getValue(){let t=this.strings,e=t.length-1,r=this.parts;if(e===1&&t[0]===""&&t[1]===""){let n=r[0].value;if(typeof n=="symbol")return String(n);if(typeof n=="string"||!ht(n))return n}let s="";for(let n=0;n<e;n++){s+=t[n];let a=r[n];if(a!==void 0){let o=a.value;if(ct(o)||!ht(o))s+=typeof o=="string"?o:String(o);else for(let l of o)s+=typeof l=="string"?l:String(l)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}},ut=class{constructor(t){this.value=void 0,this.committer=t}setValue(t){t!==k&&(!ct(t)||t!==this.value)&&(this.value=t,O(t)||(this.committer.dirty=!0))}commit(){for(;O(this.value);){let t=this.value;this.value=k,t(this)}this.value!==k&&this.committer.commit()}},L=class{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(E()),this.endNode=t.appendChild(E())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=E()),t.__insert(this.endNode=E())}insertAfterPart(t){t.__insert(this.startNode=E()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(this.startNode.parentNode===null)return;for(;O(this.__pendingValue);){let e=this.__pendingValue;this.__pendingValue=k,e(this)}let t=this.__pendingValue;t!==k&&(ct(t)?t!==this.value&&this.__commitText(t):t instanceof F?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):ht(t)?this.__commitIterable(t):t===$?(this.value=$,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){let e=this.startNode.nextSibling;t=t??"";let r=typeof t=="string"?t:String(t);e===this.endNode.previousSibling&&e.nodeType===3?e.data=r:this.__commitNode(document.createTextNode(r)),this.value=t}__commitTemplateResult(t){let e=this.options.templateFactory(t);if(this.value instanceof B&&this.value.template===e)this.value.update(t.values);else{let r=new B(e,t.processor,this.options),s=r._clone();r.update(t.values),this.__commitNode(s),this.value=r}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());let e=this.value,r=0,s;for(let n of t)s=e[r],s===void 0&&(s=new L(this.options),e.push(s),r===0?s.appendIntoPart(this):s.insertAfterPart(e[r-1])),s.setValue(n),s.commit(),r++;r<e.length&&(e.length=r,this.clear(s&&s.endNode))}clear(t=this.startNode){M(this.startNode.parentNode,t.nextSibling,this.endNode)}},mt=class{constructor(t,e,r){if(this.value=void 0,this.__pendingValue=void 0,r.length!==2||r[0]!==""||r[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=r}setValue(t){this.__pendingValue=t}commit(){for(;O(this.__pendingValue);){let e=this.__pendingValue;this.__pendingValue=k,e(this)}if(this.__pendingValue===k)return;let t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=k}},gt=class extends it{constructor(t,e,r){super(t,e,r);this.single=r.length===2&&r[0]===""&&r[1]===""}_createPart(){return new It(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}},It=class extends ut{},se=!1;(()=>{try{let i={get capture(){return se=!0,!1}};window.addEventListener("test",i,i),window.removeEventListener("test",i,i)}catch(i){}})();var ft=class{constructor(t,e,r){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=r,this.__boundHandleEvent=s=>this.handleEvent(s)}setValue(t){this.__pendingValue=t}commit(){for(;O(this.__pendingValue);){let n=this.__pendingValue;this.__pendingValue=k,n(this)}if(this.__pendingValue===k)return;let t=this.__pendingValue,e=this.value,r=t==null||e!=null&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=t!=null&&(e==null||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=xe(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=k}handleEvent(t){typeof this.value=="function"?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}},xe=i=>i&&(se?{capture:i.capture,passive:i.passive,once:i.once}:i.capture);var Ot=class{handleAttributeExpressions(t,e,r,s){let n=e[0];return n==="."?new gt(t,e.slice(1),r).parts:n==="@"?[new ft(t,e.slice(1),s.eventContext)]:n==="?"?[new mt(t,e.slice(1),r)]:new it(t,e,r).parts}handleTextExpression(t){return new L(t)}},$t=new Ot;function Bt(i){let t=W.get(i.type);t===void 0&&(t={stringsArray:new WeakMap,keyString:new Map},W.set(i.type,t));let e=t.stringsArray.get(i.strings);if(e!==void 0)return e;let r=i.strings.join(_);return e=t.keyString.get(r),e===void 0&&(e=new D(i,i.getTemplateElement()),t.keyString.set(r,e)),t.stringsArray.set(i.strings,e),e}var W=new Map;var I=new WeakMap,Ft=(i,t,e)=>{let r=I.get(t);r===void 0&&(M(t,t.firstChild),I.set(t,r=new L(Object.assign({templateFactory:Bt},e))),r.appendInto(t)),r.setValue(i),r.commit()};typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");var S=(i,...t)=>new F(i,t,"html",$t);var Wt=133;function zt(i,t){let{element:{content:e},parts:r}=i,s=document.createTreeWalker(e,Wt,null,!1),n=st(r),a=r[n],o=-1,l=0,m=[],w=null;for(;s.nextNode();){o++;let d=s.currentNode;for(d.previousSibling===w&&(w=null),t.has(d)&&(m.push(d),w===null&&(w=d)),w!==null&&l++;a!==void 0&&a.index===o;)a.index=w!==null?-1:a.index-l,n=st(r,n),a=r[n]}m.forEach(d=>d.parentNode.removeChild(d))}var we=i=>{let t=i.nodeType===11?0:1,e=document.createTreeWalker(i,Wt,null,!1);for(;e.nextNode();)t++;return t},st=(i,t=-1)=>{for(let e=t+1;e<i.length;e++){let r=i[e];if(rt(r))return e}return-1};function ne(i,t,e=null){let{element:{content:r},parts:s}=i;if(e==null){r.appendChild(t);return}let n=document.createTreeWalker(r,Wt,null,!1),a=st(s),o=0,l=-1;for(;n.nextNode();)for(l++,n.currentNode===e&&(o=we(t),e.parentNode.insertBefore(t,e));a!==-1&&s[a].index===l;){if(o>0){for(;a!==-1;)s[a].index+=o,a=st(s,a);return}a=st(s,a)}}var oe=(i,t)=>`${i}--${t}`,yt=!0;typeof window.ShadyCSS=="undefined"?yt=!1:typeof window.ShadyCSS.prepareTemplateDom=="undefined"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),yt=!1);var be=i=>t=>{let e=oe(t.type,i),r=W.get(e);r===void 0&&(r={stringsArray:new WeakMap,keyString:new Map},W.set(e,r));let s=r.stringsArray.get(t.strings);if(s!==void 0)return s;let n=t.strings.join(_);if(s=r.keyString.get(n),s===void 0){let a=t.getTemplateElement();yt&&window.ShadyCSS.prepareTemplateDom(a,i),s=new D(t,a),r.keyString.set(n,s)}return r.stringsArray.set(t.strings,s),s},Se=["html","svg"],Ce=i=>{Se.forEach(t=>{let e=W.get(oe(t,i));e!==void 0&&e.keyString.forEach(r=>{let{element:{content:s}}=r,n=new Set;Array.from(s.querySelectorAll("style")).forEach(a=>{n.add(a)}),zt(r,n)})})},ae=new Set,Ne=(i,t,e)=>{ae.add(i);let r=e?e.element:document.createElement("template"),s=t.querySelectorAll("style"),{length:n}=s;if(n===0){window.ShadyCSS.prepareTemplateStyles(r,i);return}let a=document.createElement("style");for(let m=0;m<n;m++){let w=s[m];w.parentNode.removeChild(w),a.textContent+=w.textContent}Ce(i);let o=r.content;e?ne(e,a,o.firstChild):o.insertBefore(a,o.firstChild),window.ShadyCSS.prepareTemplateStyles(r,i);let l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&l!==null)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(e){o.insertBefore(a,o.firstChild);let m=new Set;m.add(a),zt(e,m)}},le=(i,t,e)=>{if(!e||typeof e!="object"||!e.scopeName)throw new Error("The `scopeName` option is required.");let r=e.scopeName,s=I.has(t),n=yt&&t.nodeType===11&&!!t.host,a=n&&!ae.has(r),o=a?document.createDocumentFragment():t;if(Ft(i,o,Object.assign({templateFactory:be(r)},e)),a){let l=I.get(o);I.delete(o);let m=l.value instanceof B?l.value.template:void 0;Ne(r,o,m),M(t,t.firstChild),t.appendChild(o),I.set(t,l)}!s&&n&&window.ShadyCSS.styleElement(t.host)};var z,nt,ot,Ht=class{constructor(){c(this,z,void 0);c(this,nt,void 0);c(this,ot,void 0)}enqueue(t){var e;p(this,z)!==void 0&&((e=p(this,ot))==null||e.call(this)),C(this,z,new Promise((r,s)=>{C(this,nt,r),C(this,ot,s)})),p(this,z).then(t).catch(()=>{}).finally(()=>C(this,z,void 0)),queueMicrotask(p(this,nt))}};z=new WeakMap,nt=new WeakMap,ot=new WeakMap;var Z,pe=class{constructor(t){c(this,Z,void 0);C(this,Z,new CSSStyleSheet),p(this,Z).replaceSync(t[0])}get styleSheet(){return p(this,Z)}};Z=new WeakMap;var N=i=>new pe(i).styleSheet;var V,P,X,Kt,Y,qt,G,Dt,at,xt,H,J,Q,U,lt,R,vt,ke,wt,Te,bt,Ee,tt,Zt,St,Ae,h=class extends HTMLElement{constructor(){super(...arguments);c(this,vt);c(this,wt);c(this,bt);c(this,tt);c(this,St);c(this,at,this.attachShadow({mode:"open"}));c(this,xt,new Ht);c(this,H,!1);c(this,J,!1);c(this,Q,void 0);c(this,U,void 0);c(this,lt,new MutationObserver(this.slotChangedCallback.bind(this)));c(this,R,void 0)}static get styles(){return[]}static get reactives(){var t;return g(t=h,Y,qt).call(t,this),[...p(h,V).get(this)]}static get attributes(){var t;return g(t=h,G,Dt).call(t,this),[...p(h,P).get(this).keys()]}static get propertyKeysForObservedAttributes(){let t=new Set(this.reactives);return this.attributes.filter(e=>t.has(e))}static get observedAttributes(){return this.propertyKeysForObservedAttributes.map(g(h,X,Kt))}static register(t){customElements.define(t,this)}static createReactives(t){var r;g(r=h,Y,qt).call(r,this),new Set(t).forEach(s=>{let n=Reflect.getOwnPropertyDescriptor(this.prototype,s),a=n?.get?null:Symbol(s);p(h,V).set(this,new Set([...p(h,V).get(this),s])),Reflect.defineProperty(this.prototype,s,{configurable:!0,enumerable:!0,get(){return a!==null?this[a]:n.get.call(this)},set(o){let l=this[s];n?.set?.call?.(this,o),a&&l!==o&&(this[a]=o,g(this,tt,Zt).call(this))}})})}static createAttributes(t){var r;g(r=h,G,Dt).call(r,this),new Map(t).forEach((s,n)=>{let a=Reflect.getOwnPropertyDescriptor(this.prototype,n);p(h,P).set(this,new Map([...p(h,P).get(this),[n,s]])),Reflect.defineProperty(this.prototype,n,{configurable:!0,enumerable:!0,get(){return a?.get?.call?.(this),g(this,wt,Te).call(this,n)},set(o){a?.set?.call?.(this,o),g(this,bt,Ee).call(this,n,o)}})})}get removedSignal(){return p(this,Q)?.signal}get unmountedSignal(){return p(this,U)?.signal}get template(){return k}get mountAnimation(){return this.updateOrSlotChangeAnimation}get updateOrSlotChangeAnimation(){return null}attributeChangedCallback(t,e,r){e!==r&&g(this,tt,Zt).call(this)}connectedCallback(){g(this,vt,ke).call(this),this.addedCallback(),C(this,H,!0),g(this,tt,Zt).call(this)}disconnectedCallback(){this.removedCallback(),C(this,H,!1),g(this,St,Ae).call(this)}addedCallback(){C(this,Q,new AbortController)}updatedCallback(){p(this,R)?.cancel?.(),this.updateOrSlotChangeAnimation!==null&&C(this,R,this.animate(...this.updateOrSlotChangeAnimation))}slotChangedCallback(){p(this,R)?.cancel?.(),this.updateOrSlotChangeAnimation!==null&&C(this,R,this.animate(...this.updateOrSlotChangeAnimation))}mountedCallback(){p(this,R)?.cancel?.(),this.mountAnimation!==null&&C(this,R,this.animate(...this.mountAnimation)),C(this,U,new AbortController)}removedCallback(){p(this,Q)?.abort?.()}unmountedCallback(){p(this,U)?.abort?.()}getCSSProperty(t){return getComputedStyle(this).getPropertyValue(t)}},v=h;V=new WeakMap,P=new WeakMap,X=new WeakSet,Kt=function(t){return t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z])(?=[a-z])/g,"$1-$2").toLowerCase()},Y=new WeakSet,qt=function(t){var r;if(!p(h,V).has(t)){let s=Reflect.getPrototypeOf(t);!p(h,V).has(s)&&s!==h&&g(r=h,Y,qt).call(r,s),p(h,V).set(t,p(h,V).get(s))}},G=new WeakSet,Dt=function(t){var r;if(!p(h,P).has(t)){let s=Reflect.getPrototypeOf(t);!p(h,P).has(s)&&s!==h&&g(r=h,G,Dt).call(r,s),p(h,P).set(t,p(h,P).get(s))}},at=new WeakMap,xt=new WeakMap,H=new WeakMap,J=new WeakMap,Q=new WeakMap,U=new WeakMap,lt=new WeakMap,R=new WeakMap,vt=new WeakSet,ke=function(){let{styles:t}=this.constructor;p(this,at).adoptedStyleSheets=[...t]},wt=new WeakSet,Te=function(t){var s;let e=p(h,P).get(this.constructor).get(t),r=g(s=h,X,Kt).call(s,t);switch(e){case Boolean:return this.hasAttribute(r);case String:case Number:return this.hasAttribute(r)?e(this.getAttribute(r)):null;default:throw new RangeError("Invalid type for attribute.")}},bt=new WeakSet,Ee=function(t,e){var n;let r=p(h,P).get(this.constructor).get(t),s=g(n=h,X,Kt).call(n,t);if(e===void 0)throw new TypeError("Attribute value cannot be undefined.");if(e!==null&&e.constructor!==r)throw new TypeError("Attribute value doesn't match its type.");switch(r){case Boolean:if(e)this.setAttribute(s,"");else{if(e===null)throw new TypeError("Boolean attribute cannot be null.");this.removeAttribute(s)}break;case String:case Number:e===null?this.removeAttribute(s):this.setAttribute(s,String(e));break;default:throw new RangeError("Invalid type for attribute.")}},tt=new WeakSet,Zt=function(){p(this,xt).enqueue(()=>{p(this,H)&&(le(this.template,p(this,at),{scopeName:this.localName,eventContext:this}),requestAnimationFrame(()=>{this.updatedCallback(),p(this,J)||(this.slotChangedCallback(),C(this,J,!0),this.mountedCallback(),p(this,lt).observe(this,{subtree:!0,characterData:!0,childList:!0}))}))})},St=new WeakSet,Ae=function(){p(this,H)||(p(this,lt).disconnect(),C(this,J,!1),this.unmountedCallback())},c(v,X),c(v,Y),c(v,G),c(v,V,new WeakMap([[h,new Set]])),c(v,P,new WeakMap([[h,new Map]]));var Xt=class extends v{static get styles(){return[...super.styles,N`
        :host {
          display: grid;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          position: relative;
          box-sizing: border-box;
          background: var(--backgroundColor);
          color: var(--onBackgroundColor);

          --primaryColor: #5701a8;
          --onPrimaryColor: #ffffff;
          --backgroundColor: #fafafa;
          --onBackgroundColor: #000000;
          --surfaceColor: #ffffff;
          --onSurfaceColor: #000000;
          --errorColor: #d43936;

          --shadowLvl1: rgba(0, 0, 0, 0.04) 0px 1px 3px 0px;
          --shadowLvl2: rgba(0, 0, 0, 0.08) 0px 2px 6px 0px;
          --shadowLvl3: rgba(0, 0, 0, 0.12) 0px 3px 9px 0px;
          --shadowLvl4: rgba(0, 0, 0, 0.16) 0px 4px 12px 0px;

          --durationLvl1: 200ms;
          --durationLvl2: 275ms;
          --durationLvl3: 350ms;
          --durationLvl4: 1600ms;

          --standardEase: cubic-bezier(0.4, 0, 0.2, 1);
          --acceleratedEase: cubic-bezier(0.4, 0, 1, 1);
          --deceleratedEase: cubic-bezier(0, 0, 0.2, 1);
        }

        @media (prefers-color-scheme: dark) {
          :host {
            --onPrimaryColor: #111111;
            --backgroundColor: #111111;
            --onBackgroundColor: #ffffff;
            --surfaceColor: #212121;
            --onSurfaceColor: #ffffff;
            --errorColor: #d43936;
          }
        }
      `]}};var Ct=class extends v{static get styles(){return[...super.styles,N`
        :host {
          font-family: 'Material Icons';
          font-weight: normal;
          font-style: normal;
          font-size: 24px;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          word-wrap: normal;
          font-feature-settings: 'liga';
          -webkit-font-smoothing: antialiased;
        }

        :host::before {
          content: attr(value);
        }
      `]}get mountAnimation(){return[[{transform:"rotateX(-90deg)",opacity:"0"},{transform:"rotateX(0deg)",opacity:"1"}],{duration:Number(this.getCSSProperty("--durationLvl2").replace("ms","")),easing:this.getCSSProperty("--standardEase"),fill:"forwards"}]}get updateOrSlotChangeAnimation(){return[[{transform:"rotateZ(-90deg)",opacity:"0"},{transform:"rotateZ(0deg)",opacity:"1"}],{duration:Number(this.getCSSProperty("--durationLvl2").replace("ms","")),easing:this.getCSSProperty("--standardEase"),fill:"forwards"}]}};Ct.createAttributes([["value",String]]);Ct.createReactives(["value"]);Ct.register("icon-widget");var kt,_e,et,Yt,Tt,Pe,Et,je,Nt=class extends v{constructor(){super(...arguments);c(this,kt);c(this,et);c(this,Tt);c(this,Et)}static get styles(){return[...super.styles,N`
        :host {
          position: relative;
          overflow: hidden;
        }

        :host([disabled]) {
          opacity: 0.32;
          pointer-events: none;
        }

        :host(:not([disabled]))::before {
          content: '';
          background: var(--interactionEffectsColor);
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          border-radius: inherit;
          opacity: var(--hoverOpacity, 0);
          transition: opacity var(--durationLvl2) var(--standardEase);
          will-change: opacity;
          pointer-events: none;
        }

        :host(:not([disabled]))::after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          width: var(--rippleSize, 0px);
          height: var(--rippleSize, 0px);
          background: var(--interactionEffectsColor);
          opacity: var(--rippleOpacity, 0.08);
          border-radius: 50%;
          transform: var(--rippleTranslate, translate(-50%, -50%)) var(--rippleScale);
          transition: opacity var(--rippleTimer, var(--durationLvl2)) var(--standardEase),
            transform var(--rippleTimer, var(--durationLvl2)) var(--standardEase);
          will-change: opacity, transform;
          pointer-events: none;
        }
      `]}addedCallback(){super.addedCallback(),this.style.setProperty("--interactionEffectsColor",this.getCSSProperty("color")),this.addEventListener("pointerdown",g(this,kt,_e),{signal:this.removedSignal}),this.addEventListener("pointerup",g(this,et,Yt),{signal:this.removedSignal}),this.addEventListener("pointerleave",g(this,et,Yt),{signal:this.removedSignal}),this.addEventListener("touchend",g(this,et,Yt),{signal:this.removedSignal}),this.addEventListener("pointerenter",g(this,Tt,Pe),{signal:this.removedSignal}),this.addEventListener("pointerleave",g(this,Et,je),{signal:this.removedSignal})}};kt=new WeakSet,_e=function({clientX:t,clientY:e}){let{width:r,height:s,left:n,top:a}=this.getBoundingClientRect(),o=this.centeredRipple?Math.max(r,s):Math.sqrt(r**2+s**2),l=this.centeredRipple?0-o/2:t-n-r/2-o/2,m=this.centeredRipple?0-o/2:e-a-s/2-o/2;this.style.setProperty("--interactionEffectsColor",this.getCSSProperty("color")),this.style.setProperty("--rippleTimer","0ms"),this.style.setProperty("--rippleSize",`${o}px`),this.style.setProperty("--rippleTranslate",`translate(${l}px, ${m}px)`),this.style.setProperty("--rippleScale","scale(0)"),this.style.setProperty("--rippleOpacity","0.08"),requestAnimationFrame(()=>{this.style.setProperty("--rippleTimer","var(--durationLvl2)"),this.style.setProperty("--rippleTranslate","translate(-50%, -50%)"),this.style.setProperty("--rippleScale","scale(1.0)")})},et=new WeakSet,Yt=function(){this.style.setProperty("--rippleOpacity","0")},Tt=new WeakSet,Pe=function(){this.style.setProperty("--interactionEffectsColor",this.getCSSProperty("color")),this.style.setProperty("--hoverOpacity","0.04")},Et=new WeakSet,je=function(){this.style.setProperty("--hoverOpacity","0")};Nt.createAttributes([["centeredRipple",Boolean]]);var Gt=class extends v{static get styles(){return[...super.styles,N`
        :host {
          display: block;
          word-wrap: break-word;
          font-size: inherit;
          font-family: 'Dana VF', 'Jost VF';
          line-height: normal;
          letter-spacing: 0.25px;
          padding: 0px;
          margin: 0px;
          box-sizing: border-box;
          font-variation-settings: 'wght' var(--typographyWeight);
        }

        :host([variant='text']) {
          padding: 0px 16px;
          font-size: 16px;
          --typographyWeight: 350;
        }

        :host([variant='iranic']) {
          display: inline;
          font-variation-settings: 'wght' var(--typographyWeight), 'slnt' 8;
        }

        :host([variant='iranic']:dir(ltr)) {
          font-variation-settings: 'wght' var(--typographyWeight) 'ital' 1;
        }

        :host([variant='button-uppercased']),
        :host([variant='button-normal']) {
          padding: 0px;
          font-size: 16px;
          letter-spacing: 0.75px;
          text-transform: capitalize;
          --typographyWeight: 425;
        }

        :host([variant='button-uppercased']) {
          text-transform: uppercase;
          letter-spacing: 1.25px;
          font-size: 14px;
          --typographyWeight: 500;
        }

        :host([variant='headline']) {
          text-transform: capitalize;
          padding: 0px 16px;
          font-size: 18px;
          --typographyWeight: 575;
        }

        :host([variant='top-bar']) {
          text-transform: capitalize;
          padding: 0px 16px;
          font-size: 20px;
          --typographyWeight: 650;
        }

        :host([one-line]) {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `]}get template(){return S`<slot></slot>`}get mountAnimation(){return this.variant==="top-bar"?[[{opacity:"0",transform:"scale(0.9)"},{opacity:"1",transform:"scale(1)"}],{duration:Number(this.getCSSProperty("--durationLvl2").replace("ms","")),easing:this.getCSSProperty("--deceleratedEase"),fill:"forwards"}]:this.updateOrSlotChangeAnimation}get updateOrSlotChangeAnimation(){return this.variant==="top-bar"?[[{opacity:"0",transform:"translateY(-16px) rotateX(-90deg)"},{opacity:"1",transform:"translateY(0px) rotateX(0deg)"}],{duration:Number(this.getCSSProperty("--durationLvl2").replace("ms","")),easing:this.getCSSProperty("--deceleratedEase"),fill:"forwards"}]:[[{opacity:"0"},{opacity:"1"}],{duration:Number(this.getCSSProperty("--durationLvl1").replace("ms","")),easing:this.getCSSProperty("--deceleratedEase"),fill:"forwards"}]}};Gt.createAttributes([["variant",String]]);Gt.register("typography-widget");var _t,Le,Pt,Ve,At=class extends Nt{constructor(){super(...arguments);c(this,_t);c(this,Pt)}static get styles(){return[...super.styles,N`
        :host {
          display: grid;
          grid-template-columns: 1fr;
          box-sizing: border-box;
          align-items: center;
          padding: 8px;
          cursor: pointer;
          background: inherit;
        }

        :host([icon]) {
          width: 40px;
          border-radius: 50%;
        }

        :host([text]) {
          border-radius: 4px;
          height: max-content;
          padding: 6px 8px;
          width: max-content;
          align-items: center;
        }

        :host([text][icon]) {
          grid-template-columns: 24px 1fr;
        }

        :host([variant='menu'][text][icon]),
        :host([variant='list'][text][icon]) {
          color: var(--onSurfaceColor);
          width: 100%;
          gap: 32px;
          min-height: 40px;
        }

        :host([variant='list'][text][icon]) {
          min-height: 48px;
          border-radius: 0px;
          padding: 6px 16px;
        }

        :host([variant='text']) {
          color: var(--primaryColor);
        }

        :host([variant='solid']) {
          background: var(--primaryColor);
          color: var(--onPrimaryColor);
          box-shadow: var(--shadowLvl3);
        }

        :host([no-shadow]) {
          box-shadow: none;
        }

        :host([variant='text'][text]),
        :host([variant='solid'][text]) {
          min-width: 64px;
          min-height: 36px;
          text-align: center;
        }

        :host([variant='solid'][text]) {
          padding: 6px 16px;
        }

        :host([variant='text'][text][icon]) {
          gap: 8px;
        }

        :host([variant='solid'][text][icon]) {
          gap: 16px;
        }
      `]}addedCallback(){super.addedCallback(),this.addEventListener("click",g(this,Pt,Ve),{signal:this.removedSignal})}updatedCallback(){super.updatedCallback(),this.centeredRipple=!this.text}get template(){return S`
      ${this.icon?S`<icon-widget value=${this.icon} class="icon"></icon-widget>`:$}
      ${this.text?S`
            <typography-widget variant=${p(this,_t,Le)}>${this.text}</typography-widget>
          `:$}
    `}};_t=new WeakSet,Le=function(){return this.variant==="solid"||this.variant==="text"?"button-uppercased":"button-normal"},Pt=new WeakSet,Ve=function(){this.link&&history.pushState({},document.title,this.link)};At.createAttributes([["variant",String],["text",String],["icon",String],["link",String]]);At.createReactives(["text","icon"]);At.register("button-widget");var jt=class extends v{static get styles(){return[...super.styles,N`
        :host {
          box-sizing: border-box;
        }

        :host([variant='list']),
        :host([variant='inputs']),
        :host([variant='paragraphs']) {
          display: flex;
          flex-direction: column;
          gap: 0px;
          padding: 8px 0px;
        }

        :host([variant='paragraphs']),
        :host([variant='inputs']) {
          padding: 16px 0px;
          gap: 8px;
        }

        :host([variant='inputs']) {
          gap: 16px;
        }

        :host([variant='buttons']) {
          display: flex;
          justify-content: space-between;
          gap: 8px;
          padding: 8px;
        }

        :host([variant='buttons']) > div {
          align-items: center;
          display: grid;
          grid-auto-flow: column;
          gap: 8px;
        }
      `]}get template(){return S`
      ${this.variant==="buttons"?S`
            <div><slot name="icons"></slot></div>
            <div><slot name="buttons"></slot></div>
          `:S`<slot></slot>`}
    `}};jt.createAttributes([["variant",String]]);jt.createReactives(["variant"]);jt.register("section-widget");var de=(i,t)=>{let e=i.startNode.parentNode,r=t===void 0?i.endNode:t.startNode,s=e.insertBefore(E(),r);e.insertBefore(E(),r);let n=new L(i.options);return n.insertAfterNode(s),n},K=(i,t)=>(i.setValue(t),i.commit(),i),Jt=(i,t,e)=>{let r=i.startNode.parentNode,s=e?e.startNode:i.endNode,n=t.endNode.nextSibling;n!==s&&pt(r,t.startNode,n,s)},Qt=i=>{M(i.startNode.parentNode,i.startNode,i.endNode.nextSibling)},ce=(i,t,e)=>{let r=new Map;for(let s=t;s<=e;s++)r.set(i[s],s);return r},he=new WeakMap,ue=new WeakMap,me=Vt((i,t,e)=>{let r;return e===void 0?e=t:t!==void 0&&(r=t),s=>{if(!(s instanceof L))throw new Error("repeat can only be used in text bindings");let n=he.get(s)||[],a=ue.get(s)||[],o=[],l=[],m=[],w=0;for(let b of i)m[w]=r?r(b,w):w,l[w]=e(b,w),w++;let d,T,f=0,y=n.length-1,u=0,x=l.length-1;for(;f<=y&&u<=x;)if(n[f]===null)f++;else if(n[y]===null)y--;else if(a[f]===m[u])o[u]=K(n[f],l[u]),f++,u++;else if(a[y]===m[x])o[x]=K(n[y],l[x]),y--,x--;else if(a[f]===m[x])o[x]=K(n[f],l[x]),Jt(s,n[f],o[x+1]),f++,x--;else if(a[y]===m[u])o[u]=K(n[y],l[u]),Jt(s,n[y],n[f]),y--,u++;else if(d===void 0&&(d=ce(m,u,x),T=ce(a,f,y)),!d.has(a[f]))Qt(n[f]),f++;else if(!d.has(a[y]))Qt(n[y]),y--;else{let b=T.get(m[u]),j=b!==void 0?n[b]:null;if(j===null){let A=de(s,n[f]);K(A,l[u]),o[u]=A}else o[u]=K(j,l[u]),Jt(s,j,n[f]),n[b]=null;u++}for(;u<=x;){let b=de(s,o[x+1]);K(b,l[u]),o[u++]=b}for(;f<=y;){let b=n[f++];b!==null&&Qt(b)}he.set(s,o),ue.set(s,m)}});var Ut=class extends v{static get styles(){return[...super.styles,N`
        :host {
          margin: auto;
          display: flex;
          scroll-snap-type: x mandatory;
          scroll-padding: 32px;
          overflow: auto hidden;
          width: max-content;
          max-width: 100vw;
        }

        :host .images-container {
          display: grid;
          box-sizing: border-box;
          gap: 16px;
          padding: 0px 16px;
          width: max-content;
          grid-auto-flow: column;
        }

        :host .image {
          display: flex;
          overflow: hidden;
          scroll-snap-align: center;
          width: 256px;
          border-radius: 8px;
          background-color: black;
        }

        :host img {
          margin: auto;
          width: 100%;
        }
      `]}get template(){return S`
      <div class="images-container">
        ${me(this.imageSrcs,t=>t,t=>S` <div class="image"><img src=${t} /></div> `)}
      </div>
    `}};Ut.createReactives(["imageSrcs"]);Ut.register("carousel-widget");var ge=class extends Xt{static get styles(){return[...super.styles,N`
        :host {
          display: flex;
          overflow: hidden auto;
          box-sizing: border-box;
          align-items: center;
          justify-content: center;
          background-color: var(--surfaceColor);

          --primaryColor: #0076c5;
        }

        :host .wrapper {
          width: max-content;
          max-width: 100vw;
          display: grid;
          margin: auto;
        }

        :host a {
          color: var(--primaryColor);
          text-decoration: none;
        }
      `]}get template(){return S`
      <div class="wrapper">
        <section-widget variant="buttons">
          <a slot="icons" href="mailto:itshawmex@gmail.com" target="_blank">
            <button-widget
              style="--primaryColor: #aa0f3e;"
              variant="text"
              icon="mail"
            ></button-widget>
          </a>
          <a slot="icons" href="https://t.me/hawmex" target="_blank">
            <button-widget slot="icons" variant="text" icon="telegram"></button-widget>
          </a>
          <a slot="buttons" href="https://github.com/Hawmex" target="_blank">
            <button-widget style="--primaryColor: #24292f;" variant="solid" text="گیتهاب من">
            </button-widget>
          </a>
        </section-widget>
        <section-widget variant="paragraphs">
          <typography-widget variant="top-bar">حامد اعراب</typography-widget>
          <typography-widget variant="text">
            درود. من حامد اعراب هستم، یک توسعه‌دهنده‌ی وب در بخش‌های فرانت‌اند و بک‌اند.
          </typography-widget>
        </section-widget>
        <section-widget variant="paragraphs">
          <typography-widget variant="headline">زبان‌ها</typography-widget>
          <typography-widget dir="auto" variant="text">JavaScript (ESNext)</typography-widget>
          <typography-widget dir="auto" variant="text">TypeScript</typography-widget>
          <typography-widget dir="auto" variant="text">HTML</typography-widget>
          <typography-widget dir="auto" variant="text">CSS</typography-widget>
        </section-widget>
        <section-widget variant="paragraphs">
          <typography-widget variant="headline">مهارت‌ها</typography-widget>
          <typography-widget dir="auto" variant="text">Front-End</typography-widget>
          <typography-widget dir="auto" variant="text">Back-End</typography-widget>
        </section-widget>
        <section-widget variant="paragraphs">
          <typography-widget variant="top-bar">نمونه‌کارها</typography-widget>
          <typography-widget variant="headline">
            <a href="https://healthteam.herokuapp.com" target="_blank">اپلیکیشن وب تیم سلامتی</a>
          </typography-widget>
          <typography-widget variant="text">توسعه Full-Stack</typography-widget>
          <typography-widget variant="text">نمره کامل PWA</typography-widget>
          <typography-widget variant="text">رابط کاربری Material</typography-widget>
          <typography-widget variant="text">متصل به درگاه پرداخت</typography-widget>
          <carousel-widget
            .imageSrcs=${["/assets/health-team-app-home.png","/assets/health-team-app-shop.png","/assets/health-team-app-home-dark.png","/assets/health-team-app-shop-dark.png"]}
          ></carousel-widget>
        </section-widget>
      </div>
    `}};ge.register("app-widget");var fe=class extends v{get template(){return S`<app-widget dir="rtl"></app-widget>`}};fe.register("app-provider");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
