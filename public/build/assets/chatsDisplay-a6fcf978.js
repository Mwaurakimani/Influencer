import{_ as p,j as u,v as h,q as v,c as l,a as s,F as m,s as g,d as f,e as y,u as a,w as x,o as d,x as w,t as i,y as D,p as S,g as b}from"./app-e3991b4b.js";import{c as k}from"./convertDate-873f89eb.js";const I=t=>(S("data-v-9e6d0730"),t=t(),b(),t),M={class:"chats-display mb-[80px]"},U={class:"chat-holder"},j={class:"message"},B={class:"message-content"},W=I(()=>s("div",{class:"carret"},null,-1)),C={class:"message-details"},F={class:"send-pannel"},T={class:"input-group"},V={class:"button-holder"},$={name:"chatsDisplay"},q=Object.assign($,{props:["chats"],setup(t){const r=D("currentUser"),n=u(null),c=h({message:null});return v(()=>{n.value.scrollTop=n.value.scrollHeight}),(_,o)=>(d(),l("div",M,[s("div",U,[s("div",{id:"chatWindow",class:"chat-timeline",ref_key:"chatWindow",ref:n},[s("ul",null,[(d(!0),l(m,null,g(t.chats,e=>(d(),l("li",{class:w([e.sender_id==a(r).id?"right-chat":"left-chat"])},[s("div",j,[s("div",B,i(e.message),1),W]),s("div",C,i(a(k)(e.created_at)),1)],2))),256))])],512),s("div",F,[s("div",T,[f(s("textarea",{class:"h-[40px]","onUpdate:modelValue":o[0]||(o[0]=e=>a(c).message=e)},null,512),[[y,a(c).message]])]),s("div",V,[s("button",{class:"purple",onClick:o[1]||(o[1]=x(e=>_.$emit("sendMessage",a(c)),["prevent"]))},"Send")])])])]))}}),L=p(q,[["__scopeId","data-v-9e6d0730"]]);export{L as default};
