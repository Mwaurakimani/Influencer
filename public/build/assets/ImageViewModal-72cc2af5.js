import{_ as n,c as l,a as e,w as o,o as _}from"./app-b3887409.js";const c={class:"image-display"},r={class:"image-section"},m={class:"header-section"},p={class:"body"},v={class:"image-view"},g=["src"],u={class:"footer"},w={name:"ImageViewModal"},f=Object.assign(w,{props:["media"],setup(a){const i=a;return(s,t)=>(_(),l("div",c,[e("div",r,[e("div",m,[e("p",{onClick:t[0]||(t[0]=o(d=>s.$emit("closeModel"),["prevent"]))},"X")]),e("div",p,[e("div",v,[e("img",{src:"/storage/"+a.media.data.path},null,8,g)])]),e("div",u,[e("button",{onClick:t[1]||(t[1]=o(d=>s.$emit("download",i.media.data.path),["prevent"]))},"Download"),e("button",{onClick:t[2]||(t[2]=o(d=>s.$emit("DeleteMedia",i.media.data),["prevent"]))},"remove")])])]))}}),M=n(f,[["__scopeId","data-v-d0226a84"]]);export{M as default};
