import{M as F}from"./Modal-5bdc59e0.js";import{_ as b,D as j,o as n,c as a,a as e,t as r,f as h,F as f,s as g,m as T,p as y,g as x,z as w,r as k,k as I,b as D,l as E,T as V,w as u,j as z,q as H,A as N,x as W,d as P,e as K,H as L}from"./app-6beb027d.js";import{f as O}from"./followersFormat-58554cdc.js";import{p as B}from"./pdf-10d8791c.js";import{c as q}from"./convertDate-873f89eb.js";const G={setup(){const s=j();function l(t){let c=null;switch(t){case"facebook":c="facebook-icon.png";break;case"twitter":c="twitter-icon.png";break;case"instagram":c="instagram-icon.png";break;case"tiktok":c="tiktok-icon.png";break}return c}return{defaults:s,displayIcon:l,followerFormat:O}},data(){return{}},props:["influencer","marketerHandle","owner","display"],name:"Mobile-brand-Project-breakdown-Entry-component",methods:{closeModal(){this.$emit("closeModal")}}},M=s=>(y("data-v-a4b02e3c"),s=s(),x(),s),X={class:"card bg-white",id:"displayCard"},J={class:"header h-[25px] mb-[10px] pr-[10px] pt-[10px] flex",style:{"justify-content":"flex-end"}},Q={class:"w-[20px] h-[20px] bg-red-500",style:{"border-radius":"50%"}},R={class:"body"},Y={class:"w-[90%] mx-auto",style:{"border-bottom":"1px solid var(--light-grey)","margin-bottom":"20px","padding-bottom":"20px"}},Z={class:"user-display"},ee={class:"image-section grid",style:{"place-items":"center"}},te=["src"],se=["src"],oe={class:"name-section"},ie={class:"p2",style:{"font-weight":"bolder"}},ne=T('<div class="h-[25px] flex items-center justify-center" style="width:fit-content;" data-v-a4b02e3c><div class="star-icon w-[100%] h-[100%] p-[3px]" data-v-a4b02e3c></div><p class="pt-[3px]" data-v-a4b02e3c>4.5</p></div><div class="availability-section" data-v-a4b02e3c><p class="p2" style="color:var(--light-green);" data-v-a4b02e3c>Available</p></div>',2),le={class:"bid-details text-gray-500 p3"},ae=M(()=>e("label",{class:"w-[100px]"},"Bid Amount",-1)),ce={class:"w-[130px]",style:{display:"inline-block","text-align":"right"}},de={key:0,class:"w-[90%] mx-auto",style:{"border-bottom":"1px solid var(--light-grey)","margin-bottom":"20px","padding-bottom":"20px"}},re=M(()=>e("p",{class:"p2 mb-[5px]",style:{"font-weight":"bolder"}},"Comment",-1)),_e={class:"p4 text-grey-100"},pe={class:"w-[90%] mx-auto",style:{"margin-bottom":"20px","padding-bottom":"20px"}},ue={class:"account-section mb-[30px]"},he={class:"social-media-icon-holder h-[30px] w-[30px] mb-[10px]"},me=["src"],be={class:"flex justify-between mb-[5px]"},ve=M(()=>e("p",{class:"p3 text-grey-200"},"Class",-1)),fe={class:"p3 text-grey-200"};function ge(s,l,t,c,_,d){return n(),a("div",X,[e("div",J,[e("div",Q,[e("p",{onClick:l[0]||(l[0]=(...o)=>d.closeModal&&d.closeModal(...o)),class:"text-white p-[2px]",style:{"text-align":"center","font-size":"0.8em",cursor:"pointer"}},"X")])]),e("div",R,[e("section",Y,[e("div",Z,[e("div",ee,[t.influencer.user.influencer.image_path!=null?(n(),a("img",{key:0,src:"/storage/"+t.influencer.user.influencer.image_path},null,8,te)):(n(),a("img",{key:1,class:"w-[100px] h-[100px]",style:{"border-radius":"50%",overflow:"hidden","object-fit":"cover"},src:c.defaults.systemImages+"/default-avatar.jpg"},null,8,se))]),e("div",oe,[e("p",ie,r(t.influencer.user.first_name)+" "+r(t.influencer.user.last_name),1)]),ne]),e("div",le,[e("div",null,[ae,e("p",ce," KSh "+r(t.influencer.bid_amount),1)])])]),t.owner?(n(),a("section",de,[re,e("p",_e,r(t.influencer.description),1)])):h("",!0),e("section",pe,[(n(!0),a(f,null,g(t.influencer.user.social_accounts,o=>(n(),a("div",ue,[e("div",he,[e("img",{class:"w-[27px] h-[27px]",style:{"border-radius":"50%",padding:"2px"},src:c.defaults.platformIcons+"/"+c.displayIcon(o.platform.name)},null,8,me)]),e("div",be,[ve,e("p",fe,r(o.influencer_class.name)+" ("+r(c.followerFormat(o.influencer_class.min_count))+" - "+r(c.followerFormat(o.influencer_class.max_count))+")",1)])]))),256))])])])}const ye=b(G,[["render",ge],["__scopeId","data-v-a4b02e3c"]]);const xe={setup(){const s=j(),l={properties:w({visible:!1}),openModal:()=>{document.body.style.overflow="hidden",l.properties.visible=!0},closeModal:()=>{document.body.style.overflow="auto",l.properties.visible=!1}};return{modal:l,defaults:s}},inject:["currentUser","assignmentDetails"],props:["display","bid"],data(){return{activeTab:"facebook",owner:!1}},methods:{hireBid(s){axios.post(route("AcceptBid",[this.bid.id])).then(l=>{alert(l.data.message)}).catch(l=>{alert("Error Assigning bid")}).finally(()=>{window.location.reload()})},changeTab(s){this.activeTab=s}},components:{Modal:F,MobileBidModalComponent:ye},mounted(){this.currentUser!=null&&this.bid.user.id==this.currentUser.id&&(this.owner=!0)}},m=s=>(y("data-v-13ac945c"),s=s(),x(),s),we={class:"card-shadowed bg-white"},ke={class:"p-[10px]"},$e={class:"flex mb-[20px]"},Me={class:"w-[100px] h-[100px] p-[3px] mr-[20px]"},Ce=["src"],De=["src"],Be={class:"p2"},je=m(()=>e("li",null,[e("div",{class:"w-[40%] h-[30px]"})],-1)),Ie=m(()=>e("li",null,[e("p",{class:"p3",style:{color:"var(--light-green)"}},"Active")],-1)),Se={class:"flex"},Ue=m(()=>e("label",{class:"w-[100px]"},"Amount",-1)),Ae={class:"flex"},Fe=m(()=>e("label",{class:"w-[100px]"},"Bid Status",-1)),Te=m(()=>e("hr",{style:{margin:"auto",width:"calc(100% - 20px)"}},null,-1)),Ee={key:0,class:"p-[10px]"},Ve=m(()=>e("p",{class:"p2",style:{"font-weight":"bolder"}}," Description",-1)),ze={class:"flex justify-between py-[20px] px-[10px]"},He={key:0,class:"flex"};function Ne(s,l,t,c,_,d){const o=k("MobileBidModalComponent"),i=k("Modal");return n(),a("div",we,[(n(),I(V,{to:"body"},[D(i,{class:"py-[50px]",visible:c.modal.properties.visible},{default:E(()=>[D(o,{influencer:t.bid,class:"w-[98%] h-[90%] m-[auto]",style:{overflow:"auto"},display:t.display,onCloseModal:l[0]||(l[0]=p=>c.modal.closeModal())},null,8,["influencer","display"])]),_:1},8,["visible"])])),e("div",ke,[e("div",$e,[e("div",Me,[t.bid.user.influencer.image_path!=null?(n(),a("img",{key:0,class:"w-[100px] h-[100px]",style:{"border-radius":"50%",overflow:"hidden","object-fit":"cover"},src:"/storage/"+t.bid.user.influencer.image_path},null,8,Ce)):(n(),a("img",{key:1,class:"w-[100px] h-[100px]",style:{"border-radius":"50%",overflow:"hidden","object-fit":"cover"},src:c.defaults.systemImages+"/default-avatar.jpg"},null,8,De))]),e("ul",null,[e("li",null,[e("p",Be,r(t.bid.user.first_name)+" "+r(t.bid.user.last_name),1)]),je,Ie])]),e("ul",null,[e("li",Se,[Ue,e("p",null,"Ksh "+r(t.bid.bid_amount),1)]),e("li",Ae,[Fe,e("p",null,r(t.bid.assignment!=null?"Assigned":"Unassigned"),1)])])]),Te,t.bid.description&&(t.display=="Marketer"||d.currentUser!=null&&d.currentUser.id==t.bid.user.id)?(n(),a("div",Ee,[Ve,e("p",null,r(t.bid.description),1)])):h("",!0),e("div",ze,[e("button",{onClick:l[1]||(l[1]=p=>c.modal.openModal()),class:"button text-white",style:{"background-color":"var(--bright-blue)"}},"View Influencer"),t.display=="Marketer"&&!d.assignmentDetails.is_assigned?(n(),a("div",He,[e("button",{id:"click",onClick:l[2]||(l[2]=u(p=>d.hireBid(t.bid.id),["prevent"])),class:"button text-white",style:{"background-color":"var(--light-green)"}},"Hire")])):h("",!0)])])}const We=b(xe,[["render",Ne],["__scopeId","data-v-13ac945c"]]);const Pe={name:"bidDisplay",props:["bids","display"],components:{MobileBidComponent:We}},Ke=s=>(y("data-v-2b7b6c1d"),s=s(),x(),s),Le={key:0,class:"bid-display gap-[20px] flex justify-center flex-wrap"},Oe={key:1},qe=Ke(()=>e("p",null,"No Bid Made",-1)),Ge=[qe];function Xe(s,l,t,c,_,d){const o=k("MobileBidComponent");return n(),a("div",null,[t.bids!=null&&t.bids.length>0?(n(),a("div",Le,[(n(!0),a(f,null,g(t.bids,i=>(n(),I(o,{display:t.display,bid:i,class:""},null,8,["display","bid"]))),256))])):(n(),a("div",Oe,Ge))])}const Vt=b(Pe,[["render",Xe],["__scopeId","data-v-2b7b6c1d"]]);const Je={class:"media-display"},Qe={class:"upload-section"},Re={class:"input-group"},Ye={class:"display-section mb-[80px]"},Ze={key:0,class:"image-display"},et=["src"],tt={class:"image-overlay"},st=["onClick"],ot=["onClick"],it={key:1,class:"image-display"},nt=["data-file"],lt={class:"image-overlay"},at=["onClick"],ct=["onClick"],dt={key:2,class:"image-display flex items-center justify-between"},rt={class:"p-[10px]",style:{height:"100%"},controls:"",autoplay:""},_t=["src"],pt={class:"image-overlay"},ut=["onClick"],ht=["onClick"],mt={name:"mediaDispay"},bt=Object.assign(mt,{props:["fileForm","medias"],setup(s){w(s.assignmentDetails);const t=w({data:null}),c=z([]);H(async()=>{for(const d of c.value)try{const o=window.location.origin;let i=d.getAttribute("data-file");const S=(o+"/storage/"+i).replace(/\s/g,"%20");B.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js";const C=await(await B.getDocument(S).promise).getPage(1),U=C.getViewport({scale:.4}),v=document.createElement("canvas");v.width=280,v.height=300;const A={canvasContext:v.getContext("2d"),viewport:U};await C.render(A).promise,d.appendChild(v)}catch{}});function _(d){const o=`/storage/${d.path}`,i=document.createElement("a");i.href=o,i.download=d.path.split("/").pop(),document.body.appendChild(i),i.click(),document.body.removeChild(i)}return(d,o)=>(n(),a("div",Je,[e("div",Qe,[e("div",Re,[e("input",{type:"file",onInput:o[0]||(o[0]=i=>t.data=i.target.files[0])},null,32)]),e("button",{onClick:o[1]||(o[1]=u(i=>d.$emit("uploadFile",t),["prevent"]))},"Upload")]),e("ul",Ye,[(n(!0),a(f,null,g(s.medias,i=>(n(),a("li",null,[i.type=="image"?(n(),a("div",Ze,[e("img",{src:"/storage/"+i.path},null,8,et),e("div",tt,[e("ul",null,[e("li",null,[e("button",{onClick:u(p=>_(i),["prevent"])},"Download",8,st)]),e("li",null,[e("button",{onClick:u(p=>d.$emit("DeleteMedia",i),["prevent"])},"remove",8,ot)])])])])):h("",!0),i.type=="PDF"?(n(),a("div",it,[e("div",{class:"pdf-display","data-file":i.path,ref_for:!0,ref_key:"pdf_display",ref:c},null,8,nt),e("div",lt,[e("ul",null,[e("li",null,[e("button",{onClick:u(p=>_(i),["prevent"])},"Download",8,at)]),e("li",null,[e("button",{onClick:u(p=>d.$emit("DeleteMedia",i),["prevent"])},"remove",8,ct)])])])])):h("",!0),i.type=="video"?(n(),a("div",dt,[e("video",rt,[e("source",{src:"/storage/"+i.path},null,8,_t),N(" Error Message ")]),e("div",pt,[e("ul",null,[e("li",null,[e("button",{onClick:u(p=>_(i),["prevent"])},"Download",8,ut)]),e("li",null,[e("button",{onClick:u(p=>d.$emit("DeleteMedia",i),["prevent"])},"remove",8,ht)])])])])):h("",!0)]))),256))])]))}}),zt=b(bt,[["__scopeId","data-v-1463b6b0"]]);const vt={setup(){return{convertDate:q}},name:"chatsDisplay",props:["chats"],data(){return{user:this.currentUser,message:null}},inject:["currentUser"],methods:{sendM(){this.$emit("sendMessage",this.message),this.message=null}},mounted(){let s=$("#chatWindow");s.animate({scrollTop:s.get(0).scrollHeight},1e3),$("#autoresizing").on("input",function(){this.style.height="auto",this.style.height=this.scrollHeight+"px"}),$("#autoresizing").on("",function(){this.style.height="auto",this.style.height=this.scrollHeight+"px"})}},ft=s=>(y("data-v-f5f72cfe"),s=s(),x(),s),gt={class:"chats-display sm:mb-[80px] md:mb-[0px]"},yt={class:"chat-holder"},xt={id:"chatWindow",class:"chat-timeline",ref:"chatWindow"},wt={class:"message"},kt={class:"p3 message-content"},$t=ft(()=>e("div",{class:"carret"},null,-1)),Mt={class:"message-details p3"},Ct={class:"send-pannel"},Dt={class:"input-group"},Bt={class:"button-holder"};function jt(s,l,t,c,_,d){return n(),a("div",gt,[e("div",yt,[e("div",xt,[e("ul",null,[(n(!0),a(f,null,g(t.chats,o=>(n(),a("li",{class:W([o.sender_id==_.user.id?"right-chat":"left-chat"])},[e("div",wt,[e("div",kt,r(o.message),1),$t]),e("div",Mt,r(c.convertDate(o.created_at)),1)],2))),256))])],512),e("div",Ct,[e("div",Dt,[P(e("textarea",{id:"autoresizing",class:"h-[40px]","onUpdate:modelValue":l[0]||(l[0]=o=>_.message=o)},null,512),[[K,_.message]])]),e("div",Bt,[e("button",{class:"purple",onClick:l[1]||(l[1]=u(o=>d.sendM(),["prevent"]))},"Send")])])])])}const Ht=b(vt,[["render",jt],["__scopeId","data-v-f5f72cfe"]]);function Nt(s){return axios.post(L("getMarketerDetails",[s]))}export{Vt as B,Ht as c,Nt as g,zt as m};
