import{c as a,a as s,t as l,F as h,m as f,g as r,w as m,o as c,q as b,u as _,p as v,d as g}from"./app-6ca4d7f9.js";import{f as u}from"./followersFormat-58554cdc.js";/* empty css                                                                              */import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const n=t=>(v("data-v-ea8179bd"),t=t(),g(),t),I={class:"influencer-details"},k={class:"influencer-display-holder"},y={class:"header"},C=n(()=>s("h3",null,"View Influencer",-1)),x={class:"body"},V={class:"top-holder"},S={class:"user-view"},B=n(()=>s("div",{class:"image-view"},[s("div",{class:"image"})],-1)),D={class:"details"},F=n(()=>s("a",{href:""},"View Profile",-1)),N={class:"social"},T={key:0},E={for:""},M={class:"class-display"},$={class:"class-name"},j={class:"stats-holder"},q={class:"stats"},A=n(()=>s("ul",null,[s("li",null,[s("label",null,"Average Engagement"),s("p",null,"10%")]),s("li",null,[s("label",null,"Total Tasks Completed"),s("p",null,"36")]),s("li",null,[s("label",null,"Rating"),s("p",null,"5")])],-1)),H=["onClick"],L=n(()=>s("div",{class:"footer"},null,-1)),O={name:"InfluencerDisplayCard"},P=Object.assign(O,{props:["bid"],setup(t){const e=t;function p(){axios.post(route("hireInfluencer"),{influencer_id:e.bid.user.id,bid_id:e.bid.id}).then(o=>{console.log(o)}).catch(o=>{console.log(o)})}return(o,d)=>(c(),a("div",I,[s("div",k,[s("div",y,[C,s("button",{class:"text-white",onClick:d[0]||(d[0]=i=>o.$emit("closeModal"))},"X")]),s("div",x,[s("div",V,[s("div",S,[B,s("div",D,[s("h3",null,l(e.bid!=null&&e.bid.user!=null?e.bid.user.first_name+" "+e.bid.user.last_name:null),1),F])]),s("div",N,[e.bid&&e.bid.user?(c(),a("ul",T,[e.bid.user.social_accounts?(c(!0),a(h,{key:0},f(e.bid.user.social_accounts,i=>(c(),a("li",null,[s("label",E,l(i.platform.name),1),b(" "+l()+" ",1),s("p",M,l(_(u)(i.influencer_class.min_count))+" - "+l(_(u)(i.influencer_class.max_count)),1),s("p",$,l(i.influencer_class.name),1)]))),256)):r("",!0)])):r("",!0)])]),s("div",j,[s("div",q,[A,s("button",{onClick:m(p,["prevent"])},"Hire",8,H)])])]),L])]))}}),J=w(P,[["__scopeId","data-v-ea8179bd"]]);export{J as default};
