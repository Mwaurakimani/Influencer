import{M as V}from"./Modal-09ee0d24.js";import{_ as b,D as I,o as n,c as i,a as e,t as _,f as m,F as g,s as y,m as N,p as x,g as w,z as $,r as M,k as S,b as j,l as H,T as W,w as h,j as U,q as F,A as z,v as O,x as P,u as k,d as K,e as L,y as q,H as G}from"./app-e3991b4b.js";import{f as X}from"./followersFormat-58554cdc.js";import{p as B}from"./pdf-b8c7dce0.js";const J={setup(){const s=I();function l(t){let d=null;switch(t){case"facebook":d="facebook-icon.png";break;case"twitter":d="twitter-icon.png";break;case"instagram":d="instagram-icon.png";break;case"tiktok":d="tiktok-icon.png";break}return d}return{defaults:s,displayIcon:l,followerFormat:X}},data(){return{}},props:["influencer","marketerHandle","owner"],name:"Mobile-brand-Project-breakdown-Entry-component",methods:{closeModal(){this.$emit("closeModal")}}},C=s=>(x("data-v-bc62dfbd"),s=s(),w(),s),Q={class:"card bg-white",id:"displayCard"},R={class:"header h-[25px] mb-[10px] pr-[10px] pt-[10px] flex",style:{"justify-content":"flex-end"}},Y={class:"w-[20px] h-[20px] bg-red-500",style:{"border-radius":"50%"}},Z={class:"body"},ee={class:"w-[90%] mx-auto",style:{"border-bottom":"1px solid var(--light-grey)","margin-bottom":"20px","padding-bottom":"20px"}},te={class:"user-display"},se={class:"image-section grid",style:{"place-items":"center"}},oe=["src"],ne=["src"],ie={class:"name-section"},le={class:"p2",style:{"font-weight":"bolder"}},ae=N('<div class="h-[25px] flex items-center justify-center" style="width:fit-content;" data-v-bc62dfbd><div class="star-icon w-[100%] h-[100%] p-[3px]" data-v-bc62dfbd></div><p class="pt-[3px]" data-v-bc62dfbd>4.5</p></div><div class="availability-section" data-v-bc62dfbd><p class="p2" style="color:var(--light-green);" data-v-bc62dfbd>Available</p></div>',2),de={class:"bid-details text-gray-500 p3"},ce=C(()=>e("label",{class:"w-[100px]"},"Bid Amount",-1)),re={class:"w-[130px]",style:{display:"inline-block","text-align":"right"}},_e={key:0,class:"w-[90%] mx-auto",style:{"border-bottom":"1px solid var(--light-grey)","margin-bottom":"20px","padding-bottom":"20px"}},pe=C(()=>e("p",{class:"p2 mb-[5px]",style:{"font-weight":"bolder"}},"Comment",-1)),ue={class:"p4 text-grey-100"},he={class:"w-[90%] mx-auto",style:{"margin-bottom":"20px","padding-bottom":"20px"}},me={class:"account-section mb-[30px]"},ve={class:"social-media-icon-holder h-[30px] w-[30px] mb-[10px]"},be=["src"],fe={class:"flex justify-between mb-[5px]"},ge=C(()=>e("p",{class:"p3 text-grey-200"},"Class",-1)),ye={class:"p3 text-grey-200"};function xe(s,l,t,d,u,c){return n(),i("div",Q,[e("div",R,[e("div",Y,[e("p",{onClick:l[0]||(l[0]=(...a)=>c.closeModal&&c.closeModal(...a)),class:"text-white p-[2px]",style:{"text-align":"center","font-size":"0.8em",cursor:"pointer"}},"X")])]),e("div",Z,[e("section",ee,[e("div",te,[e("div",se,[t.influencer.user.influencer.image_path!=null?(n(),i("img",{key:0,src:"/storage/"+t.influencer.user.influencer.image_path},null,8,oe)):(n(),i("img",{key:1,class:"w-[100px] h-[100px]",style:{"border-radius":"50%",overflow:"hidden","object-fit":"cover"},src:d.defaults.systemImages+"/default-avatar.jpg"},null,8,ne))]),e("div",ie,[e("p",le,_(t.influencer.user.first_name)+" "+_(t.influencer.user.last_name),1)]),ae]),e("div",de,[e("div",null,[ce,e("p",re," KSh "+_(t.influencer.bid_amount),1)])])]),t.owner?(n(),i("section",_e,[pe,e("p",ue,_(t.influencer.description),1)])):m("",!0),e("section",he,[(n(!0),i(g,null,y(t.influencer.user.social_accounts,a=>(n(),i("div",me,[e("div",ve,[e("img",{class:"w-[27px] h-[27px]",style:{"border-radius":"50%",padding:"2px"},src:d.defaults.platformIcons+"/"+d.displayIcon(a.platform.name)},null,8,be)]),e("div",fe,[ge,e("p",ye,_(a.influencer_class.name)+" ("+_(d.followerFormat(a.influencer_class.min_count))+" - "+_(d.followerFormat(a.influencer_class.max_count))+")",1)])]))),256))])])])}const we=b(J,[["render",xe],["__scopeId","data-v-bc62dfbd"]]);const ke={setup(){const s=I(),l={properties:$({visible:!1}),openModal:()=>{document.body.style.overflow="hidden",l.properties.visible=!0},closeModal:()=>{document.body.style.overflow="auto",l.properties.visible=!1}};return{modal:l,defaults:s}},inject:["currentUser","assignmentDetails"],props:["display","bid"],data(){return{activeTab:"facebook",owner:!1}},methods:{hireBid(s){axios.post(route("AcceptBid",[this.bid.id])).then(l=>{console.log(l)}).catch(l=>{console.log("Error: "+l)}).finally(()=>{window.location.reload()})},changeTab(s){this.activeTab=s}},components:{Modal:V,MobileBidModalComponent:we},mounted(){this.currentUser!=null&&this.bid.user.id==this.currentUser.id&&(this.owner=!0)}},v=s=>(x("data-v-828146e0"),s=s(),w(),s),$e={class:"card-shadowed bg-white"},Me={class:"p-[10px]"},Ce={class:"flex mb-[20px]"},De={class:"w-[100px] h-[100px] p-[3px] mr-[20px]"},je=["src"],Be=["src"],Ie={class:"p2"},Se=v(()=>e("li",null,[e("div",{class:"w-[40%] h-[30px]"})],-1)),Ue=v(()=>e("li",null,[e("p",{class:"p3",style:{color:"var(--light-green)"}},"Active")],-1)),Fe={class:"flex"},Te=v(()=>e("label",{class:"w-[100px]"},"Amount",-1)),Ae={class:"flex"},Ee=v(()=>e("label",{class:"w-[100px]"},"Bid Status",-1)),Ve=v(()=>e("hr",{style:{margin:"auto",width:"calc(100% - 20px)"}},null,-1)),Ne={key:0,class:"p-[10px]"},He=v(()=>e("p",{class:"p2",style:{"font-weight":"bolder"}}," Description",-1)),We={class:"flex justify-between py-[20px] px-[10px]"},ze={key:0,class:"flex"};function Oe(s,l,t,d,u,c){const a=M("MobileBidModalComponent"),r=M("Modal");return n(),i("div",$e,[(n(),S(W,{to:"body"},[j(r,{class:"py-[50px]",visible:d.modal.properties.visible},{default:H(()=>[j(a,{influencer:t.bid,class:"w-[98%] h-[90%] m-[auto]",style:{overflow:"auto"},onCloseModal:l[0]||(l[0]=o=>d.modal.closeModal())},null,8,["influencer"])]),_:1},8,["visible"])])),e("div",Me,[e("div",Ce,[e("div",De,[t.bid.user.influencer.image_path!=null?(n(),i("img",{key:0,class:"w-[100px] h-[100px]",style:{"border-radius":"50%",overflow:"hidden","object-fit":"cover"},src:"/storage/"+t.bid.user.influencer.image_path},null,8,je)):(n(),i("img",{key:1,class:"w-[100px] h-[100px]",style:{"border-radius":"50%",overflow:"hidden","object-fit":"cover"},src:d.defaults.systemImages+"/default-avatar.jpg"},null,8,Be))]),e("ul",null,[e("li",null,[e("p",Ie,_(t.bid.user.first_name)+" "+_(t.bid.user.last_name),1)]),Se,Ue])]),e("ul",null,[e("li",Fe,[Te,e("p",null,"Ksh "+_(t.bid.bid_amount),1)]),e("li",Ae,[Ee,e("p",null,_(t.bid.status),1)])])]),Ve,t.bid.description&&(t.display=="Marketer"||c.currentUser!=null&&c.currentUser.id==t.bid.user.id)?(n(),i("div",Ne,[He,e("p",null,_(t.bid.description),1)])):m("",!0),e("div",We,[e("button",{onClick:l[1]||(l[1]=o=>d.modal.openModal()),class:"button text-white",style:{"background-color":"var(--bright-blue)"}},"View Influencer"),t.display=="Marketer"&&!c.assignmentDetails.is_assigned?(n(),i("div",ze,[e("button",{onClick:l[2]||(l[2]=h(o=>c.hireBid(t.bid.id),["prevent"])),class:"button text-white",style:{"background-color":"var(--light-green)"}},"Hire")])):m("",!0)])])}const Pe=b(ke,[["render",Oe],["__scopeId","data-v-828146e0"]]);const Ke={name:"bidDisplay",props:["bids","display"],components:{MobileBidComponent:Pe}},Le=s=>(x("data-v-a8567ad6"),s=s(),w(),s),qe={key:0,class:"bid-display gap-[20px] flex justify-center flex-wrap"},Ge={key:1},Xe=Le(()=>e("p",null,"No Bid was Made",-1)),Je=[Xe];function Qe(s,l,t,d,u,c){const a=M("MobileBidComponent");return n(),i("div",null,[t.bids!=null&&t.bids.length>0?(n(),i("div",qe,[(n(!0),i(g,null,y(t.bids,r=>(n(),S(a,{display:t.display,bid:r,class:"comp w-[90%] md:w-[350px] mb-[20px]"},null,8,["display","bid"]))),256))])):(n(),i("div",Ge,Je))])}const Et=b(Ke,[["render",Qe],["__scopeId","data-v-a8567ad6"]]);const Re={class:"media-display"},Ye={class:"upload-section"},Ze={class:"input-group"},et={class:"display-section mb-[80px]"},tt={key:0,class:"image-display"},st=["src"],ot={class:"image-overlay"},nt=["onClick"],it=["onClick"],lt={key:1,class:"image-display"},at=["data-file"],dt={class:"image-overlay"},ct=["onClick"],rt=["onClick"],_t={key:2,class:"image-display flex items-center justify-between"},pt={class:"p-[10px]",style:{height:"100%"},controls:"",autoplay:""},ut=["src"],ht={class:"image-overlay"},mt=["onClick"],vt=["onClick"],bt={name:"mediaDispay"},ft=Object.assign(bt,{props:["fileForm","assignmentDetails"],setup(s){const t=$(s.assignmentDetails),d=$({data:null}),u=U([]);F(async()=>{for(const a of u.value)try{const r=window.location.origin;let o=a.getAttribute("data-file");const T=(r+"/storage/"+o).replace(/\s/g,"%20");B.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js";const D=await(await B.getDocument(T).promise).getPage(1),A=D.getViewport({scale:.4}),f=document.createElement("canvas");f.width=280,f.height=300;const E={canvasContext:f.getContext("2d"),viewport:A};await D.render(E).promise,a.appendChild(f)}catch{}});function c(a){const r=`/storage/${a.path}`,o=document.createElement("a");o.href=r,o.download=a.path.split("/").pop(),document.body.appendChild(o),o.click(),document.body.removeChild(o)}return(a,r)=>(n(),i("div",Re,[e("div",Ye,[e("div",Ze,[e("input",{type:"file",onInput:r[0]||(r[0]=o=>d.data=o.target.files[0])},null,32)]),e("button",{onClick:r[1]||(r[1]=h(o=>a.$emit("uploadFile",d),["prevent"]))},"Upload")]),e("ul",et,[(n(!0),i(g,null,y(t.assignment.media,o=>(n(),i("li",null,[o.type=="image"?(n(),i("div",tt,[e("img",{src:"/storage/"+o.path},null,8,st),e("div",ot,[e("ul",null,[e("li",null,[e("button",{onClick:h(p=>c(o),["prevent"])},"Download",8,nt)]),e("li",null,[e("button",{onClick:h(p=>a.$emit("DeleteMedia",o),["prevent"])},"remove",8,it)])])])])):m("",!0),o.type=="PDF"?(n(),i("div",lt,[e("div",{class:"pdf-display","data-file":o.path,ref_for:!0,ref_key:"pdf_display",ref:u},null,8,at),e("div",dt,[e("ul",null,[e("li",null,[e("button",{onClick:h(p=>c(o),["prevent"])},"Download",8,ct)]),e("li",null,[e("button",{onClick:h(p=>a.$emit("DeleteMedia",o),["prevent"])},"remove",8,rt)])])])])):m("",!0),o.type=="video"?(n(),i("div",_t,[e("video",pt,[e("source",{src:"/storage/"+o.path},null,8,ut),z(" Error Message ")]),e("div",ht,[e("ul",null,[e("li",null,[e("button",{onClick:h(p=>c(o),["prevent"])},"Download",8,mt)]),e("li",null,[e("button",{onClick:h(p=>a.$emit("DeleteMedia",o),["prevent"])},"remove",8,vt)])])])])):m("",!0)]))),256))])]))}}),Vt=b(ft,[["__scopeId","data-v-2269145c"]]);const gt=s=>(x("data-v-fa578d95"),s=s(),w(),s),yt={class:"chats-display mb-[80px]"},xt={class:"chat-holder"},wt={class:"message"},kt={class:"p3 message-content"},$t=gt(()=>e("div",{class:"carret"},null,-1)),Mt={class:"send-pannel"},Ct={class:"input-group"},Dt={class:"button-holder"},jt={name:"chatsDisplay"},Bt=Object.assign(jt,{props:["chats"],emits:["sendMessage"],setup(s,{emit:l}){const d=q("currentUser"),u=U(null),c=O({message:null});function a(){l("sendMessage",c),c.message=null}return F(()=>{u.value.scrollTop=u.value.scrollHeight}),(r,o)=>(n(),i("div",yt,[e("div",xt,[e("div",{id:"chatWindow",class:"chat-timeline",ref_key:"chatWindow",ref:u},[e("ul",null,[(n(!0),i(g,null,y(s.chats,p=>(n(),i("li",{class:P([p.sender_id==k(d).id?"right-chat":"left-chat"])},[e("div",wt,[e("div",kt,_(p.message),1),$t])],2))),256))])],512),e("div",Mt,[e("div",Ct,[K(e("textarea",{class:"h-[40px]","onUpdate:modelValue":o[0]||(o[0]=p=>k(c).message=p)},null,512),[[L,k(c).message]])]),e("div",Dt,[e("button",{class:"purple",onClick:o[1]||(o[1]=h(p=>a(),["prevent"]))},"Send")])])])]))}}),Nt=b(Bt,[["__scopeId","data-v-fa578d95"]]);function Ht(s){return axios.post(G("getMarketerDetails",[s]))}export{Et as B,Nt as c,Ht as g,Vt as m};
