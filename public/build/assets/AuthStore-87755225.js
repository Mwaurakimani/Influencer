import{G as K}from"./app-6ca4d7f9.js";var W=String.prototype.replace,k=/%20/g,F={RFC1738:"RFC1738",RFC3986:"RFC3986"},R={default:F.RFC3986,formatters:{RFC1738:function(o){return W.call(o,k,"+")},RFC3986:function(o){return String(o)}},RFC1738:F.RFC1738,RFC3986:F.RFC3986},X=R,P=Object.prototype.hasOwnProperty,w=Array.isArray,v=function(){for(var o=[],e=0;e<256;++e)o.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return o}(),Y=function(e){for(;e.length>1;){var r=e.pop(),t=r.obj[r.prop];if(w(t)){for(var n=[],i=0;i<t.length;++i)typeof t[i]<"u"&&n.push(t[i]);r.obj[r.prop]=n}}},z=function(e,r){for(var t=r&&r.plainObjects?Object.create(null):{},n=0;n<e.length;++n)typeof e[n]<"u"&&(t[n]=e[n]);return t},J=function o(e,r,t){if(!r)return e;if(typeof r!="object"){if(w(e))e.push(r);else if(e&&typeof e=="object")(t&&(t.plainObjects||t.allowPrototypes)||!P.call(Object.prototype,r))&&(e[r]=!0);else return[e,r];return e}if(!e||typeof e!="object")return[e].concat(r);var n=e;return w(e)&&!w(r)&&(n=z(e,t)),w(e)&&w(r)?(r.forEach(function(i,a){if(P.call(e,a)){var s=e[a];s&&typeof s=="object"&&i&&typeof i=="object"?e[a]=o(s,i,t):e.push(i)}else e[a]=i}),e):Object.keys(r).reduce(function(i,a){var s=r[a];return P.call(i,a)?i[a]=o(i[a],s,t):i[a]=s,i},n)},ee=function(e,r){return Object.keys(r).reduce(function(t,n){return t[n]=r[n],t},e)},re=function(o,e,r){var t=o.replace(/\+/g," ");if(r==="iso-8859-1")return t.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(t)}catch{return t}},te=function(e,r,t,n,i){if(e.length===0)return e;var a=e;if(typeof e=="symbol"?a=Symbol.prototype.toString.call(e):typeof e!="string"&&(a=String(e)),t==="iso-8859-1")return escape(a).replace(/%u[0-9a-f]{4}/gi,function(u){return"%26%23"+parseInt(u.slice(2),16)+"%3B"});for(var s="",l=0;l<a.length;++l){var f=a.charCodeAt(l);if(f===45||f===46||f===95||f===126||f>=48&&f<=57||f>=65&&f<=90||f>=97&&f<=122||i===X.RFC1738&&(f===40||f===41)){s+=a.charAt(l);continue}if(f<128){s=s+v[f];continue}if(f<2048){s=s+(v[192|f>>6]+v[128|f&63]);continue}if(f<55296||f>=57344){s=s+(v[224|f>>12]+v[128|f>>6&63]+v[128|f&63]);continue}l+=1,f=65536+((f&1023)<<10|a.charCodeAt(l)&1023),s+=v[240|f>>18]+v[128|f>>12&63]+v[128|f>>6&63]+v[128|f&63]}return s},ne=function(e){for(var r=[{obj:{o:e},prop:"o"}],t=[],n=0;n<r.length;++n)for(var i=r[n],a=i.obj[i.prop],s=Object.keys(a),l=0;l<s.length;++l){var f=s[l],u=a[f];typeof u=="object"&&u!==null&&t.indexOf(u)===-1&&(r.push({obj:a,prop:f}),t.push(u))}return Y(r),e},ie=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},ae=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},oe=function(e,r){return[].concat(e,r)},fe=function(e,r){if(w(e)){for(var t=[],n=0;n<e.length;n+=1)t.push(r(e[n]));return t}return r(e)},q={arrayToObject:z,assign:ee,combine:oe,compact:ne,decode:re,encode:te,isBuffer:ae,isRegExp:ie,maybeMap:fe,merge:J},C=q,S=R,se=Object.prototype.hasOwnProperty,H={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,r){return e+"["+r+"]"},repeat:function(e){return e}},O=Array.isArray,le=String.prototype.split,ue=Array.prototype.push,Z=function(o,e){ue.apply(o,O(e)?e:[e])},ce=Date.prototype.toISOString,U=S.default,p={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:C.encode,encodeValuesOnly:!1,format:U,formatter:S.formatters[U],indices:!1,serializeDate:function(e){return ce.call(e)},skipNulls:!1,strictNullHandling:!1},de=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},he=function o(e,r,t,n,i,a,s,l,f,u,d,m,g,h){var c=e;if(typeof s=="function"?c=s(r,c):c instanceof Date?c=u(c):t==="comma"&&O(c)&&(c=C.maybeMap(c,function(N){return N instanceof Date?u(N):N})),c===null){if(n)return a&&!g?a(r,p.encoder,h,"key",d):r;c=""}if(de(c)||C.isBuffer(c)){if(a){var T=g?r:a(r,p.encoder,h,"key",d);if(t==="comma"&&g){for(var L=le.call(String(c),","),Q="",j=0;j<L.length;++j)Q+=(j===0?"":",")+m(a(L[j],p.encoder,h,"value",d));return[m(T)+"="+Q]}return[m(T)+"="+m(a(c,p.encoder,h,"value",d))]}return[m(r)+"="+m(String(c))]}var $=[];if(typeof c>"u")return $;var _;if(t==="comma"&&O(c))_=[{value:c.length>0?c.join(",")||null:void 0}];else if(O(s))_=s;else{var I=Object.keys(c);_=l?I.sort(l):I}for(var E=0;E<_.length;++E){var b=_[E],B=typeof b=="object"&&typeof b.value<"u"?b.value:c[b];if(!(i&&B===null)){var G=O(c)?typeof t=="function"?t(r,b):r:r+(f?"."+b:"["+b+"]");Z($,o(B,G,t,n,i,a,s,l,f,u,d,m,g,h))}}return $},ye=function(e){if(!e)return p;if(e.encoder!==null&&typeof e.encoder<"u"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var r=e.charset||p.charset;if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=S.default;if(typeof e.format<"u"){if(!se.call(S.formatters,e.format))throw new TypeError("Unknown format option provided.");t=e.format}var n=S.formatters[t],i=p.filter;return(typeof e.filter=="function"||O(e.filter))&&(i=e.filter),{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:p.addQueryPrefix,allowDots:typeof e.allowDots>"u"?p.allowDots:!!e.allowDots,charset:r,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:p.charsetSentinel,delimiter:typeof e.delimiter>"u"?p.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:p.encode,encoder:typeof e.encoder=="function"?e.encoder:p.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:p.encodeValuesOnly,filter:i,format:t,formatter:n,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:p.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:p.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:p.strictNullHandling}},pe=function(o,e){var r=o,t=ye(e),n,i;typeof t.filter=="function"?(i=t.filter,r=i("",r)):O(t.filter)&&(i=t.filter,n=i);var a=[];if(typeof r!="object"||r===null)return"";var s;e&&e.arrayFormat in H?s=e.arrayFormat:e&&"indices"in e?s=e.indices?"indices":"repeat":s="indices";var l=H[s];n||(n=Object.keys(r)),t.sort&&n.sort(t.sort);for(var f=0;f<n.length;++f){var u=n[f];t.skipNulls&&r[u]===null||Z(a,he(r[u],u,l,t.strictNullHandling,t.skipNulls,t.encode?t.encoder:null,t.filter,t.sort,t.allowDots,t.serializeDate,t.format,t.formatter,t.encodeValuesOnly,t.charset))}var d=a.join(t.delimiter),m=t.addQueryPrefix===!0?"?":"";return t.charsetSentinel&&(t.charset==="iso-8859-1"?m+="utf8=%26%2310003%3B&":m+="utf8=%E2%9C%93&"),d.length>0?m+d:""},x=q,D=Object.prototype.hasOwnProperty,me=Array.isArray,y={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:x.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},ge=function(o){return o.replace(/&#(\d+);/g,function(e,r){return String.fromCharCode(parseInt(r,10))})},V=function(o,e){return o&&typeof o=="string"&&e.comma&&o.indexOf(",")>-1?o.split(","):o},ve="utf8=%26%2310003%3B",be="utf8=%E2%9C%93",we=function(e,r){var t={},n=r.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=r.parameterLimit===1/0?void 0:r.parameterLimit,a=n.split(r.delimiter,i),s=-1,l,f=r.charset;if(r.charsetSentinel)for(l=0;l<a.length;++l)a[l].indexOf("utf8=")===0&&(a[l]===be?f="utf-8":a[l]===ve&&(f="iso-8859-1"),s=l,l=a.length);for(l=0;l<a.length;++l)if(l!==s){var u=a[l],d=u.indexOf("]="),m=d===-1?u.indexOf("="):d+1,g,h;m===-1?(g=r.decoder(u,y.decoder,f,"key"),h=r.strictNullHandling?null:""):(g=r.decoder(u.slice(0,m),y.decoder,f,"key"),h=x.maybeMap(V(u.slice(m+1),r),function(c){return r.decoder(c,y.decoder,f,"value")})),h&&r.interpretNumericEntities&&f==="iso-8859-1"&&(h=ge(h)),u.indexOf("[]=")>-1&&(h=me(h)?[h]:h),D.call(t,g)?t[g]=x.combine(t[g],h):t[g]=h}return t},Oe=function(o,e,r,t){for(var n=t?e:V(e,r),i=o.length-1;i>=0;--i){var a,s=o[i];if(s==="[]"&&r.parseArrays)a=[].concat(n);else{a=r.plainObjects?Object.create(null):{};var l=s.charAt(0)==="["&&s.charAt(s.length-1)==="]"?s.slice(1,-1):s,f=parseInt(l,10);!r.parseArrays&&l===""?a={0:n}:!isNaN(f)&&s!==l&&String(f)===l&&f>=0&&r.parseArrays&&f<=r.arrayLimit?(a=[],a[f]=n):l!=="__proto__"&&(a[l]=n)}n=a}return n},xe=function(e,r,t,n){if(e){var i=t.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/,s=/(\[[^[\]]*])/g,l=t.depth>0&&a.exec(i),f=l?i.slice(0,l.index):i,u=[];if(f){if(!t.plainObjects&&D.call(Object.prototype,f)&&!t.allowPrototypes)return;u.push(f)}for(var d=0;t.depth>0&&(l=s.exec(i))!==null&&d<t.depth;){if(d+=1,!t.plainObjects&&D.call(Object.prototype,l[1].slice(1,-1))&&!t.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+i.slice(l.index)+"]"),Oe(u,r,t,n)}},_e=function(e){if(!e)return y;if(e.decoder!==null&&e.decoder!==void 0&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=typeof e.charset>"u"?y.charset:e.charset;return{allowDots:typeof e.allowDots>"u"?y.allowDots:!!e.allowDots,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:y.allowPrototypes,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:y.arrayLimit,charset:r,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:y.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:y.comma,decoder:typeof e.decoder=="function"?e.decoder:y.decoder,delimiter:typeof e.delimiter=="string"||x.isRegExp(e.delimiter)?e.delimiter:y.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:y.depth,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:y.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:y.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:y.plainObjects,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:y.strictNullHandling}},Se=function(o,e){var r=_e(e);if(o===""||o===null||typeof o>"u")return r.plainObjects?Object.create(null):{};for(var t=typeof o=="string"?we(o,r):o,n=r.plainObjects?Object.create(null):{},i=Object.keys(t),a=0;a<i.length;++a){var s=i[a],l=xe(s,t[s],r,typeof o=="string");n=x.merge(n,l,r)}return x.compact(n)},je=pe,$e=Se,Ee=R,M={formats:Ee,parse:$e,stringify:je};class A{constructor(e,r,t){this.name=e,this.definition=r,this.bindings=r.bindings??{},this.wheres=r.wheres??{},this.config=t}get template(){return`${this.config.absolute?this.definition.domain?`${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port?`:${this.config.port}`:""}`:this.config.url:""}/${this.definition.uri}`.replace(/\/+$/,"")}get parameterSegments(){var e;return((e=this.template.match(/{[^}?]+\??}/g))==null?void 0:e.map(r=>({name:r.replace(/{|\??}/g,""),required:!/\?}$/.test(r)})))??[]}matchesUrl(e){if(!this.definition.methods.includes("GET"))return!1;const r=this.template.replace(/(\/?){([^}?]*)(\??)}/g,(a,s,l,f)=>{var d;const u=`(?<${l}>${((d=this.wheres[l])==null?void 0:d.replace(/(^\^)|(\$$)/g,""))||"[^/?]+"})`;return f?`(${s}${u})?`:`${s}${u}`}).replace(/^\w+:\/\//,""),[t,n]=e.replace(/^\w+:\/\//,"").split("?"),i=new RegExp(`^${r}/?$`).exec(t);return i?{params:i.groups,query:M.parse(n)}:!1}compile(e){const r=this.parameterSegments;return r.length?this.template.replace(/{([^}?]+)(\??)}/g,(t,n,i)=>{if(!i&&[null,void 0].includes(e[n]))throw new Error(`Ziggy error: '${n}' parameter is required for route '${this.name}'.`);if(r[r.length-1].name===n&&this.wheres[n]===".*")return encodeURIComponent(e[n]??"").replace(/%2F/g,"/");if(this.wheres[n]&&!new RegExp(`^${i?`(${this.wheres[n]})?`:this.wheres[n]}$`).test(e[n]??""))throw new Error(`Ziggy error: '${n}' parameter does not match required format '${this.wheres[n]}' for route '${this.name}'.`);return encodeURIComponent(e[n]??"")}).replace(/\/+$/,""):this.template}}class Ne extends String{constructor(e,r,t=!0,n){if(super(),this._config=n??(typeof Ziggy<"u"?Ziggy:globalThis==null?void 0:globalThis.Ziggy),this._config={...this._config,absolute:t},e){if(!this._config.routes[e])throw new Error(`Ziggy error: route '${e}' is not in the route list.`);this._route=new A(e,this._config.routes[e],this._config),this._params=this._parse(r)}}toString(){const e=Object.keys(this._params).filter(r=>!this._route.parameterSegments.some(({name:t})=>t===r)).filter(r=>r!=="_query").reduce((r,t)=>({...r,[t]:this._params[t]}),{});return this._route.compile(this._params)+M.stringify({...e,...this._params._query},{addQueryPrefix:!0,arrayFormat:"indices",encodeValuesOnly:!0,skipNulls:!0,encoder:(r,t)=>typeof r=="boolean"?Number(r):t(r)})}_unresolve(e){e?this._config.absolute&&e.startsWith("/")&&(e=this._location().host+e):e=this._currentUrl();let r={};const[t,n]=Object.entries(this._config.routes).find(([i,a])=>r=new A(i,a,this._config).matchesUrl(e))||[void 0,void 0];return{name:t,...r,route:n}}_currentUrl(){const{host:e,pathname:r,search:t}=this._location();return(this._config.absolute?e+r:r.replace(this._config.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,"/"))+t}current(e,r){const{name:t,params:n,query:i,route:a}=this._unresolve();if(!e)return t;const s=new RegExp(`^${e.replace(/\./g,"\\.").replace(/\*/g,".*")}$`).test(t);if([null,void 0].includes(r)||!s)return s;const l=new A(t,a,this._config);r=this._parse(r,l);const f={...n,...i};return Object.values(r).every(u=>!u)&&!Object.values(f).some(u=>u!==void 0)?!0:Object.entries(r).every(([u,d])=>f[u]==d)}_location(){var n,i,a;const{host:e="",pathname:r="",search:t=""}=typeof window<"u"?window.location:{};return{host:((n=this._config.location)==null?void 0:n.host)??e,pathname:((i=this._config.location)==null?void 0:i.pathname)??r,search:((a=this._config.location)==null?void 0:a.search)??t}}get params(){const{params:e,query:r}=this._unresolve();return{...e,...r}}has(e){return Object.keys(this._config.routes).includes(e)}_parse(e={},r=this._route){e??(e={}),e=["string","number"].includes(typeof e)?[e]:e;const t=r.parameterSegments.filter(({name:n})=>!this._config.defaults[n]);return Array.isArray(e)?e=e.reduce((n,i,a)=>t[a]?{...n,[t[a].name]:i}:typeof i=="object"?{...n,...i}:{...n,[i]:""},{}):t.length===1&&!e[t[0].name]&&(e.hasOwnProperty(Object.values(r.bindings)[0])||e.hasOwnProperty("id"))&&(e={[t[0].name]:e}),{...this._defaults(r),...this._substituteBindings(e,r)}}_defaults(e){return e.parameterSegments.filter(({name:r})=>this._config.defaults[r]).reduce((r,{name:t},n)=>({...r,[t]:this._config.defaults[t]}),{})}_substituteBindings(e,{bindings:r,parameterSegments:t}){return Object.entries(e).reduce((n,[i,a])=>{if(!a||typeof a!="object"||Array.isArray(a)||!t.some(({name:s})=>s===i))return{...n,[i]:a};if(!a.hasOwnProperty(r[i]))if(a.hasOwnProperty("id"))r[i]="id";else throw new Error(`Ziggy error: object passed as '${i}' parameter is missing route model binding key '${r[i]}'.`);return{...n,[i]:a[r[i]]}},{})}valueOf(){return this.toString()}check(e){return this.has(e)}}function Fe(o,e,r,t){const n=new Ne(o,e,r,t);return o?n.toString():n}const Ae=K("authenticationStore",{state:()=>({status:!1,user:null,confirmed:!1}),getters:{getUSer(){return this.user},isAuthenticated(){return this.status}},actions:{unAuthenticate(){this.status=!1,this.user=null},authenticate(o){this.status=!0,this.user=o},testIfLoggedIn(){try{return axios.post(Fe("routeIsLoggedIn"))}catch(o){console.error(o)}}}});export{Ae as a,Fe as r};
