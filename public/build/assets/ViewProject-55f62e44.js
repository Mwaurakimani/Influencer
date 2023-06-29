import{c as D,m as M,B,g as P}from"./marketer-4e7f2a75.js";import{_ as C,D as F,i as S,j as v,z as V,v as T,c as d,k as N,b as m,l as I,T as U,a as t,w as p,t as a,f as A,F as f,s as L,r as h,o as r,d as y,e as j,p as E,g as K,I as R}from"./app-e3991b4b.js";import{f as q}from"./followersFormat-58554cdc.js";import{M as z}from"./Modal-09ee0d24.js";import H from"./ProjectDisplay-84b88520.js";import"./pdf-b8c7dce0.js";import"./MobileProjectBreakdownDisplayCard-2910b6cb.js";const X={setup(){const s=F(),e=S(),n=v("project"),l=v("project"),c={properties:V({visible:!1}),openModal:()=>{document.body.style.overflow="hidden",c.properties.visible=!0},closeModal:()=>{document.body.style.overflow="auto",c.properties.visible=!1}},u=T({amount:null,comment:null});function b(){n.value="bids"}function x(w){let _=null;switch(w){case"facebook":_="facebook-icon.png";break;case"twitter":_="twitter-icon.png";break;case"instagram":_="instagram-icon.png";break;case"tiktok":_="tiktok-icon.png";break}return _}return R("assignmentDetails",null),{auth:e,activeTab:n,modal:c,bidForm:u,openBids:b,activeSubTab:l,followersFormat:q,defaults:s,displayIcon:x}},props:["project"],inject:["currentUser"],components:{chatsDisplay:D,mediaDispay:M,Modal:z,ProjectDisplay:H,BidDisplay:B},data(){return{MarketerDetails:{posted_projects:null,assigned_projects:null,total_spent:null,last_active:null}}},methods:{async fetchMarketerDetails(s){try{const e=await P(s);this.MarketerDetails=e.data}catch(e){console.error(e)}},submitBid(){axios.post(route("MakeBid",[this.project.id]),this.bidForm).then(s=>{s.data.status?(alert("Bid was made successfully"),window.location.href=window.location.href):alert("Bid could not be made")}).catch(s=>{s.response.data.message?alert(s.response.data.message):s.response.data&&alert(s.response.data)}).finally(()=>{this.modal.closeModal()})}},beforeMount(){this.currentUser!=null&&this.auth.authenticate(),this.fetchMarketerDetails(this.project.marketer.id)}},i=s=>(E("data-v-7144a2e1"),s=s(),K(),s),G={class:"bid-display"},J={class:"bid-container"},O={class:"header"},Q=i(()=>t("h6",null,"Bid for Project",-1)),W={class:"body"},Y={class:"input-group"},Z=i(()=>t("label",{class:"p3"},"Amount",-1)),$={class:"input-group"},tt=i(()=>t("label",{class:"p3"},"Comment",-1)),et=i(()=>t("div",{class:"footer"},null,-1)),st={class:"modile-header"},ot={class:"container"},it={class:"m-hide"},lt=i(()=>t("h1",{class:"pt-[13px]",style:{color:"var(--t-purple)"}},"Project",-1)),at={class:"actions pt-[10px]"},nt={class:"d-hide"},ct=i(()=>t("h1",{class:"pt-[13px]",style:{color:"var(--t-purple)"}},"Project",-1)),rt={class:"actions pt-[10px]"},dt={class:"flex flex-wrap md:flex-nowrap"},pt={class:"sm:w-[100%] sm:p-[10px] md:pt-[0px] md:w-[calc(100%-300px)] h-fit flex flex-wrap mb-[20px]"},_t={class:"w-[100%] flex flex-wrap gap-2 mb-[20px]"},mt={class:"w-[100%] lg:w-[48%] lg:h-[100]"},ht={class:"card-shadowed bg-white p-[10px] h-[100%] mb-[20px]"},ut={class:"text-grey-200 mb-[10px]"},bt={class:"p3"},xt={class:"w-[100%] lg:w-[48%] card-shadowed bg-white p-[10px]"},wt=i(()=>t("h6",{class:"text-grey-200 mb-[10px]"},"Details",-1)),vt={class:"flex justify-between w-[90%] mb-[10px]"},ft=i(()=>t("label",{class:"p3"},"Status:",-1)),yt={class:"p3",style:{color:"var(--light-green)"}},jt={class:"flex justify-between w-[90%] mb-[10px]"},gt=i(()=>t("label",{class:"p3"},"Price:",-1)),kt={class:"p3"},Dt={class:"flex justify-between w-[90%] mb-[10px]"},Mt=i(()=>t("label",{class:"p3"},"Run Time",-1)),Bt={class:"p3"},Pt={class:"flex justify-between w-[90%] mb-[10px]"},Ct=i(()=>t("label",{class:"p3"},"Total Bids",-1)),Ft={class:"p3"},St={class:"w-[100%]"},Vt={class:"w-[100%] bg-white p-[10px]"},Tt=i(()=>t("h6",{class:"text-grey-200 mb-[10px]"},"Bids",-1)),Nt={class:"sm:w-[100%] md:w-[275px] h-fit flex flex-wrap items-stretch justify-between"},It={class:"card-shadowed w-[100%] lg:w-[calc(100%)] xl:w-[350px] bg-white p-[20px] mb-[20px]"},Ut={class:"text-grey-200"},At=i(()=>t("hr",{class:"mb-[10px]",style:{"background-color":"var(--light-grey)"}},null,-1)),Lt={class:"w-[100%] flex justify-between mb-[10px]"},Et=i(()=>t("label",{class:"p3"},"Projects Posted:",-1)),Kt={class:"p3"},Rt={class:"flex justify-between w-[100%] mb-[10px]"},qt=i(()=>t("label",{class:"p3"},"Influencers Hired:",-1)),zt={class:"p3"},Ht={class:"flex justify-between w-[100%] mb-[10px]"},Xt=i(()=>t("label",{class:"p3"},"Total Spent:",-1)),Gt={class:"p3"},Jt={key:0,class:"flex justify-between w-[90%] mb-[10px]"},Ot=i(()=>t("label",{class:"p3"},"Last Active:",-1)),Qt={class:"p3"},Wt={class:"card-shadowed w-[100%] lg:w-[300px] bg-white xl:w-[350px] p-[20px] mb-[20px]"},Yt=i(()=>t("h6",{class:"text-grey-200 mb-[10px]"},"Social Account Requirements",-1)),Zt={class:"social-accounts-display pl-[10px] pb-[20px]"},$t={class:"flex"},te={class:"social-media-icon-holder h-[30px] w-[30px]"},ee=["src"],se={class:"p3 pt-[5px] text-grey-200 ml-[10px]"},oe={class:"card-shadowed w-[100%] xl:w-[calc(100%)] bg-white p-[20px] mb-[80px]"},ie=i(()=>t("h6",{class:"text-grey-200 mb-[10px]"},"Notes",-1)),le={class:"p3"};function ae(s,e,n,l,c,u){const b=h("Modal"),x=h("MobileNavigationComponent"),w=h("DesktopNavigationVue"),_=h("ProjectDisplay"),g=h("BidDisplay"),k=h("Footer");return r(),d(f,null,[(r(),N(U,{to:"body"},[m(b,{visible:l.modal.properties.visible},{default:I(()=>[t("div",G,[t("div",J,[t("div",O,[Q,t("button",{class:"text-white",onClick:e[0]||(e[0]=o=>l.modal.closeModal())},"X")]),t("div",W,[t("form",{onSubmit:e[4]||(e[4]=p(()=>{},["prevent"]))},[t("div",Y,[Z,y(t("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=o=>l.bidForm.amount=o)},null,512),[[j,l.bidForm.amount]])]),t("div",$,[tt,y(t("textarea",{"onUpdate:modelValue":e[2]||(e[2]=o=>l.bidForm.comment=o)},null,512),[[j,l.bidForm.comment]])]),t("button",{class:"purple",type:"submit",onClick:e[3]||(e[3]=p((...o)=>u.submitBid&&u.submitBid(...o),["prevent"]))},"Submit")],32)]),et])])]),_:1},8,["visible"])])),t("nav",null,[m(x,{activeNavButton:"Projects"}),m(w,{class:"scrolled",activeNavButton:"Projects"})]),t("header",null,[t("div",st,[t("div",ot,[t("section",it,[lt,t("div",at,[l.activeTab=="project"?(r(),d("button",{key:0,onClick:e[5]||(e[5]=p((...o)=>l.openBids&&l.openBids(...o),["prevent"])),class:"pink mr-[10px]",style:{"padding-top":"8px"}},"View Bids ")):(r(),d("button",{key:1,onClick:e[6]||(e[6]=p((...o)=>s.openProject&&s.openProject(...o),["prevent"])),class:"pink mr-[10px]",style:{"padding-top":"8px"}},"View Project ")),t("button",{onClick:e[7]||(e[7]=p(o=>l.modal.openModal(),["prevent"])),class:"purple",style:{"padding-top":"8px"}},"Bid Project ")])]),t("section",nt,[ct,t("div",rt,[l.activeTab=="project"?(r(),d("button",{key:0,onClick:e[8]||(e[8]=p(o=>s.router.visit("/Projects"),["prevent"])),class:"pink mr-[10px]",style:{"padding-top":"8px"}},"Projects ")):(r(),d("button",{key:1,onClick:e[9]||(e[9]=p((...o)=>s.openProject&&s.openProject(...o),["prevent"])),class:"pink mr-[10px]",style:{"padding-top":"8px"}},"View Project ")),t("button",{onClick:e[10]||(e[10]=p(o=>l.modal.openModal(),["prevent"])),class:"purple",style:{"padding-top":"8px"}},"Bid Project ")])])])])]),t("div",dt,[t("section",pt,[t("article",_t,[t("div",mt,[t("div",ht,[t("h6",ut,a(n.project.title),1),t("p",bt,a(n.project.description),1)])]),t("div",xt,[wt,t("ul",null,[t("li",vt,[ft,t("p",yt,a(n.project.status),1)]),t("li",jt,[gt,t("p",kt,"Ksh "+a(n.project.budget),1)]),t("li",Dt,[Mt,t("p",Bt,a(n.project.runtime)+" "+a(n.project.metrics),1)]),t("li",Pt,[Ct,t("p",Ft,a(n.project.bids.length),1)])])])]),t("article",St,[m(_,{project:n.project,MarketerDetails:c.MarketerDetails},null,8,["project","MarketerDetails"]),t("div",Vt,[Tt,m(g,{display:null,bids:n.project.bids},null,8,["bids"])])])]),t("section",Nt,[t("div",It,[t("h6",Ut,a(n.project.marketer.user.first_name)+" "+a(n.project.marketer.user.last_name),1),At,t("ul",null,[t("li",Lt,[Et,t("p",Kt,a(c.MarketerDetails.posted_projects),1)]),t("li",Rt,[qt,t("p",zt,a(c.MarketerDetails.assigned_projects),1)]),t("li",Ht,[Xt,t("p",Gt,"Ksh "+a(c.MarketerDetails.total_spent),1)]),c.MarketerDetails.last_active?(r(),d("li",Jt,[Ot,t("p",Qt,a(c.MarketerDetails.last_active),1)])):A("",!0)])]),t("div",Wt,[Yt,t("div",Zt,[(r(!0),d(f,null,L(n.project.platforms,o=>(r(),d("div",$t,[t("div",te,[t("img",{class:"w-[27px] h-[27px]",style:{"border-radius":"50%",padding:"2px"},src:l.defaults.platformIcons+"/"+l.displayIcon(o.name)},null,8,ee)]),t("p",se,a(o.pivot.influencer_data.name)+" ("+a(l.followersFormat(o.pivot.influencer_data.min_count))+" - "+a(l.followersFormat(o.pivot.influencer_data.max_count))+")",1)]))),256))])]),t("div",oe,[ie,t("p",le,a(n.project.notes),1)])])]),t("footer",null,[m(k)])],64)}const he=C(X,[["render",ae],["__scopeId","data-v-7144a2e1"]]);export{he as default};