import{B as M,m as T,c as S,g as C}from"./marketer-fe1ab80d.js";import{M as P}from"./MobileProjectBreakdownDisplayCard-89a385dc.js";import{_ as y,y as B,o as l,c as u,b as F,u as D,a as e,d as I,e as U,m as E,D as V,i as N,z as R,q as L,J as j,H as x,t as o,w as f,x as b,f as m,h as q,k as g,F as A,s as H,r as w,I as z,p as K,g as W}from"./app-db7343c9.js";import{f as J}from"./followersFormat-58554cdc.js";import O from"./Projects-e5a9f3e7.js";const G={class:"ProjectDetails px-[10px]"},Q={name:"ProjectDisplay"},X=Object.assign(Q,{props:["project","assignmentDetails","marketerStatus","MarketerDetails"],setup(a){const s=a.project;return B("assignmentDetails"),(c,i)=>(l(),u("div",G,[F(P,{ProjectType:D(s).type,ProjectRequirements:D(s).project_requirements,class:"w-[9 9%] pt-[20px]"},null,8,["ProjectType","ProjectRequirements"])]))}}),Y=y(X,[["__scopeId","data-v-ddc5bce4"]]);const Z={name:"RatingComponent",props:["assignment","user_type"],data(){return{comment:null}},methods:{submitReview(){let t={rating:$(".stars .active").length,comment:this.comment};this.$emit("rate",t)},fillRating(a){let t=$(".stars i");for(let s=0;s<a;s++)$(t[s]).addClass("active")}},mounted(){const a=document.querySelectorAll(".stars i");a.forEach((t,s)=>{t.addEventListener("click",()=>{a.forEach((c,i)=>{s>=i?c.classList.add("active"):c.classList.remove("active")})})}),this.user_type=="influencer"?(this.comment=this.assignment.influencer_comment??null,this.fillRating(this.assignment.influencer_rating_count)):(this.comment=this.assignment.marketer_comment??null,this.fillRating(this.assignment.marketer_rating_count))}},ee={class:"w-[100%]"},te={class:"rating-box mb-[20px]"},se=E('<header data-v-1109ec2d>Review</header><div class="stars mb-[25px]" data-v-1109ec2d><i class="fa-solid fa-star" data-v-1109ec2d></i><i class="fa-solid fa-star" data-v-1109ec2d></i><i class="fa-solid fa-star" data-v-1109ec2d></i><i class="fa-solid fa-star" data-v-1109ec2d></i><i class="fa-solid fa-star" data-v-1109ec2d></i></div>',2);function ae(a,t,s,c,i,n){return l(),u("div",ee,[e("div",te,[se,I(e("textarea",{class:"h-[100px] w-[100%] mb-[25px]",placeholder:"Comment...","onUpdate:modelValue":t[0]||(t[0]=h=>i.comment=h)},null,512),[[U,i.comment]]),e("button",{class:"block mx-[auto] purple p2",onClick:t[1]||(t[1]=(...h)=>n.submitReview&&n.submitReview(...h))},"Submit")])])}const ie=y(Z,[["render",ae],["__scopeId","data-v-1109ec2d"]]);const ne={computed:{projects(){return O}},setup(a){const t=V(),s=N(),c=R({is_assigned:n(),assignment:h()});let i=R([]);L(()=>{j().props.errors!=null&&j().props.errors.WorkspaceError!=null&&(i[0]=j().props.errors)});function n(){let _=!1;if(a.project.assignment!=null){for(let r of a.project.bids)if(r.assignment!=null){_=!0;break}}return _}function h(){let _=null;if(a.project!=null&&a.project.bids!=null){for(let r of a.project.bids)if(r.assignment!=null){_=r.assignment;break}}return _}z("assignmentDetails",c);function v(_){let r=null;switch(_){case"facebook":r="facebook-icon.png";break;case"twitter":r="twitter-icon.png";break;case"instagram":r="instagram-icon.png";break;case"tiktok":r="tiktok-icon.png";break}return r}return{auth:s,is_assigned:n,followersFormat:J,errorBag:i,defaults:t,displayIcon:v}},props:["project","display","marketer"],inject:["currentUser","activeTab","pageName","assignmentDetails"],components:{RatingComponent:ie,BidDisplay:M,ProjectDisplay:Y,mediaDispay:T,chatsDisplay:S},data(){return{MarketerDetails:{posted_projects:null,assigned_projects:null,total_spent:null,last_active:null},icons:["facebook","twitter","instagram","tiktok"],fileForm:null,activeSubTab:"Project"}},methods:{async fetchMarketerDetails(a){try{const t=await C(a);this.MarketerDetails=t.data}catch(t){console.error(t)}},switchTabs(a){this.activeSubTab=a},uploadFile(a){this.fileForm=a,axios.post(x("uploadFile"),{project:this.project.id,Upload:this.fileForm.data},{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{t.data.status?(alert("File Uploaded"),window.location.reload()):t.message?alert("Error"):alert(t.data.error)}).catch(t=>{t&&t.response&&t.response.data&&t.response.data.message&&alert(t.response.data.message)})},remove(a){confirm("Are you sure you want to delete this media?")&&axios.delete(x("DeleteMedia",{media:a})).then(t=>{t.data.status?(alert("Media deleted successfully."),window.location.reload()):alert("Error deleting media.")}).catch(t=>{alert("Error deleting media.")})},sendMessage(a){let t={project:this.project.id,message:a};axios.post(x("sendMessage"),t).then(s=>{let c=$("#chatWindow");this.project.chats.push(s.data.chat),c.animate({scrollTop:c.get(0).scrollHeight},1e3)}).catch(s=>{console.log(s)})},marketerRating(a){axios.post(x("rateInfluencer",[this.project.id]),a).then(t=>{alert("Updated")}).catch(t=>{alert("Could not update rating")})},influencerRating(a){axios.post(x("rateMarketer",[this.project.id]),a).then(t=>{alert("Updated")}).catch(t=>{alert("Could not update rating")})}},mounted(){this.currentUser!=null&&this.auth.authenticate(),this.fetchMarketerDetails(this.project.marketer.id)}},d=a=>(K("data-v-f7cd2355"),a=a(),W(),a),ce={class:"flex flex-wrap"},oe={class:"w-[100%] h-fit flex flex-wrap mb-[20px]"},le={class:"w-[100%] flex md:justify-around flex-wrap gap-2 mb-[20px]"},re={class:"w-[100%] lg:w-[48%] lg:h-[100]"},de={class:"card-shadowed bg-white p-[10px] h-[100%] mb-[20px]"},pe={class:"text-grey-200 mb-[10px]"},me={class:"p3"},_e={class:"w-[100%] lg:w-[48%] card-shadowed bg-white p-[10px]"},ue=d(()=>e("h6",{class:"text-grey-200 mb-[10px]"},"Details",-1)),he={class:"flex justify-between w-[90%] mb-[10px]"},fe=d(()=>e("label",{class:"p3"},"Status:",-1)),be={class:"p3",style:{color:"var(--light-green)"}},ge={class:"flex justify-between w-[90%] mb-[10px]"},xe=d(()=>e("label",{class:"p3"},"Price:",-1)),we={class:"p3"},ve={class:"flex justify-between w-[90%] mb-[10px]"},je=d(()=>e("label",{class:"p3"},"Run Time",-1)),ye={class:"p3"},ke={class:"flex justify-between w-[90%] mb-[10px]"},De=d(()=>e("label",{class:"p3"},"Total Bids",-1)),Re={class:"p3"},Me={class:"w-[100%] bg-white pb-[30px]"},Te={class:"w-[100%] h-[50px] items-center mb-[20px] flex justify-between"},Se={class:"container"},Ce={class:"w-[100%] h-fit flex flex-wrap items-stretch justify-between"},Pe={class:"card-shadowed w-[100%] lg:w-[calc(100%-340px)] xl:w-[350px] bg-white p-[20px] mb-[20px]"},Be={class:"text-grey-200"},Fe=d(()=>e("hr",{class:"mb-[10px]",style:{"background-color":"var(--light-grey)"}},null,-1)),Ie={class:"w-[100%] flex justify-between mb-[10px]"},Ue=d(()=>e("label",{class:"p3"},"Projects Posted:",-1)),Ee={class:"p3"},Ve={class:"flex justify-between w-[100%] mb-[10px]"},Ne=d(()=>e("label",{class:"p3"},"Influencers Hired:",-1)),Le={class:"p3"},qe={class:"flex justify-between w-[100%] mb-[10px]"},Ae=d(()=>e("label",{class:"p3"},"Total Spent:",-1)),He={class:"p3"},ze={class:"card-shadowed w-[100%] lg:w-[300px] bg-white xl:w-[350px] p-[20px] mb-[20px]"},Ke=d(()=>e("h6",{class:"text-grey-200 mb-[10px]"},"Social Account Requirements",-1)),We={class:"social-accounts-display pl-[10px] pb-[20px]"},Je={class:"flex"},Oe={class:"social-media-icon-holder h-[30px] w-[30px]"},Ge=["src"],Qe={class:"p3 pt-[5px] text-grey-200 ml-[10px]"},Xe={class:"card-shadowed w-[100%] xl:w-[calc(100%-780px)] bg-white p-[20px] mb-[80px]"},Ye=d(()=>e("h6",{class:"text-grey-200 mb-[10px]"},"Notes",-1)),Ze={class:"p3"};function $e(a,t,s,c,i,n){const h=w("ProjectDisplay"),v=w("BidDisplay"),_=w("media-dispay"),r=w("chats-display"),k=w("RatingComponent");return l(),u("div",ce,[e("section",oe,[e("article",le,[e("div",re,[e("div",de,[e("h6",pe,o(s.project.title),1),e("p",me,o(s.project.description),1)])]),e("div",_e,[ue,e("ul",null,[e("li",he,[fe,e("p",be,o(s.project.status),1)]),e("li",ge,[xe,e("p",we,"Ksh "+o(s.project.budget),1)]),e("li",ve,[je,e("p",ye,o(s.project.runtime)+" "+o(s.project.metrics),1)]),e("li",ke,[De,e("p",Re,o(s.project.bids.length),1)])])])]),e("article",Me,[e("nav",null,[e("ul",Te,[e("li",{onClick:t[0]||(t[0]=f(p=>n.switchTabs("Project"),["prevent"])),class:b(["w-[100%]",["text-center",i.activeSubTab==="Project"?"active-tab":""]])},"Project ",2),e("li",{onClick:t[1]||(t[1]=f(p=>n.switchTabs("Bids"),["prevent"])),class:b(["w-[100%]",["text-center",i.activeSubTab==="Bids"?"active-tab":""]])},"Bids ",2),c.is_assigned()&&n.assignmentDetails.assignment.marketer_status!="complete"?(l(),u("li",{key:0,onClick:t[2]||(t[2]=f(p=>n.switchTabs("Media"),["prevent"])),class:b(["w-[100%]",["text-center",i.activeSubTab==="Media"?"active-tab":""]])},"Media ",2)):m("",!0),c.is_assigned()&&n.assignmentDetails.assignment.marketer_status!="complete"?(l(),u("li",{key:1,onClick:t[3]||(t[3]=f(p=>n.switchTabs("Chat"),["prevent"])),class:b(["w-[100%]",["text-center",i.activeSubTab==="Chat"?"active-tab":""]])},"Chat ",2)):m("",!0),c.is_assigned()&&s.project.assignment.marketer_status=="complete"&&s.project.marketer.user.id==n.currentUser.id?(l(),u("li",{key:2,onClick:t[4]||(t[4]=f(p=>n.switchTabs("RateMarketer"),["prevent"])),class:b(["w-[100%]",["text-center",i.activeSubTab==="RateMarketer"?"active-tab":""]])},"Rate ",2)):m("",!0),c.is_assigned()&&s.project.assignment.influencer_status=="complete"&&s.project.influencer&&s.project.influencer.id==n.currentUser.id?(l(),u("li",{key:3,onClick:t[5]||(t[5]=f(p=>n.switchTabs("RateInfluencer"),["prevent"])),class:b(["w-[100%]",["text-center",i.activeSubTab==="RateInfluencer"?"active-tab":""]])},"Rate ",2)):m("",!0)])]),e("div",Se,[q(a.$slots,"default",{},()=>[i.activeSubTab==="Project"?(l(),g(h,{key:0,project:s.project,MarketerDetails:i.MarketerDetails},null,8,["project","MarketerDetails"])):m("",!0),i.activeSubTab==="Bids"?(l(),g(v,{key:1,display:s.display,bids:s.project.bids},null,8,["display","bids"])):m("",!0),i.activeSubTab==="Media"?(l(),g(_,{key:2,onUploadFile:n.uploadFile,onDeleteMedia:n.remove,medias:s.project.media},null,8,["onUploadFile","onDeleteMedia","medias"])):m("",!0),i.activeSubTab==="Chat"?(l(),g(r,{key:3,onSendMessage:n.sendMessage,chats:s.project.chats},null,8,["onSendMessage","chats"])):m("",!0),i.activeSubTab==="RateMarketer"?(l(),g(k,{key:4,onRate:n.marketerRating,user_type:"marketer",assignment:s.project.assignment},null,8,["onRate","assignment"])):m("",!0),i.activeSubTab==="RateInfluencer"?(l(),g(k,{key:5,onRate:n.influencerRating,user_type:"influencer",assignment:s.project.assignment},null,8,["onRate","assignment"])):m("",!0)],!0)])])]),e("section",Ce,[e("div",Pe,[e("h6",Be,o(s.project.marketer.user.first_name)+" "+o(s.project.marketer.user.last_name),1),Fe,e("ul",null,[e("li",Ie,[Ue,e("p",Ee,o(s.marketer.posted_projects),1)]),e("li",Ve,[Ne,e("p",Le,o(s.marketer.assigned_projects),1)]),e("li",qe,[Ae,e("p",He,"Ksh "+o(s.marketer.total_spent),1)])])]),e("div",ze,[Ke,e("div",We,[(l(!0),u(A,null,H(s.project.project_requirements,p=>(l(),u("div",Je,[e("div",Oe,[e("img",{class:"w-[27px] h-[27px]",style:{"border-radius":"50%",padding:"2px"},src:c.defaults.platformIcons+"/"+c.displayIcon(p.platform.name)},null,8,Ge)]),e("p",Qe,o(p.influencerClass.name)+" ("+o(c.followersFormat(p.influencerClass.min_count))+" - "+o(c.followersFormat(p.influencerClass.max_count))+")",1)]))),256))])]),e("div",Xe,[Ye,e("p",Ze,o(s.project.notes),1)])])])}const nt=y(ne,[["render",$e],["__scopeId","data-v-f7cd2355"]]);export{nt as V};