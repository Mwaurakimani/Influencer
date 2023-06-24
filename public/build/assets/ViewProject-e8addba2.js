import{B as M,m as T,c as S,g as P}from"./marketer-6adcc7b1.js";import{M as B}from"./MobileProjectBreakdownDisplayCard-d2f8524d.js";import{_ as D,y as F,o as d,c as u,b as C,u as v,D as I,i as U,z as k,q as E,J as j,H as y,a as e,t as o,w as m,x as b,f as h,h as V,k as f,F as q,s as N,r as x,I as A,p as R,g as H}from"./app-410688f0.js";import{f as L}from"./followersFormat-58554cdc.js";const z={class:"ProjectDetails px-[10px]"},K={name:"ProjectDisplay"},W=Object.assign(K,{props:["project","assignmentDetails","marketerStatus","MarketerDetails"],setup(s){const a=s.project;return F("assignmentDetails"),(c,i)=>(d(),u("div",z,[C(B,{ProjectType:v(a).type,ProjectRequirements:v(a).project_requirements,class:"w-[9 9%] pt-[20px]"},null,8,["ProjectType","ProjectRequirements"])]))}}),J=D(W,[["__scopeId","data-v-ddc5bce4"]]);const O={setup(s){const t=I(),a=U(),c=k({is_assigned:l(),assignment:g()});let i=k([]);E(()=>{j().props.errors!=null&&j().props.errors.WorkspaceError!=null&&(i[0]=j().props.errors)});function l(){let p=!1;if(s.project!=null&&s.project.bids!=null){for(let n of s.project.bids)if(n.assignment!=null){p=!0;break}}return p}function g(){let p=null;if(s.project!=null&&s.project.bids!=null){for(let n of s.project.bids)if(n.assignment!=null){p=n.assignment;break}}return p}A("assignmentDetails",c);function w(p){let n=null;switch(p){case"facebook":n="facebook-icon.png";break;case"twitter":n="twitter-icon.png";break;case"instagram":n="instagram-icon.png";break;case"tiktok":n="tiktok-icon.png";break}return n}return{auth:a,is_assigned:l,followersFormat:L,errorBag:i,defaults:t,displayIcon:w}},props:["project","display"],inject:["currentUser","activeTab","pageName","assignmentDetails"],components:{BidDisplay:M,ProjectDisplay:J,mediaDispay:T,chatsDisplay:S},data(){return{MarketerDetails:{posted_projects:null,assigned_projects:null,total_spent:null,last_active:null},icons:["facebook","twitter","instagram","tiktok"],fileForm:null,activeSubTab:"Project"}},methods:{async fetchMarketerDetails(s){try{const t=await P(s);this.MarketerDetails=t.data}catch(t){console.error(t)}},switchTabs(s){this.activeSubTab=s},uploadFile(s){this.fileForm=s,axios.post(y("uploadFile"),{project:this.project.id,Upload:this.fileForm.data},{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{t.data.status?(alert("File Uploaded"),window.location.reload()):t.message?alert("Error"):alert(t.data.error)}).catch(t=>{t&&t.response&&t.response.data&&t.response.data.message&&alert(t.response.data.message)})},remove(s){confirm("Are you sure you want to delete this media?")&&axios.delete(y("DeleteMedia",{media:s})).then(t=>{t.data.status?(alert("Media deleted successfully."),window.location.reload()):alert("Error deleting media.")}).catch(t=>{alert("Error deleting media.")})},sendMessage(s){let t={project:this.project,message:s.message};axios.post(y("sendMessage"),t).then(a=>{let c=$("#chatWindow");this.project.chats.push(a.data.chat),c.animate({scrollTop:c.get(0).scrollHeight},1e3)}).catch(a=>{console.log(a)})}},mounted(){this.currentUser!=null&&this.auth.authenticate(),this.fetchMarketerDetails(this.project.marketer.id)}},r=s=>(R("data-v-b42bdfd3"),s=s(),H(),s),G={class:"flex flex-wrap h-[100vh]"},Q={class:"w-[100%] h-fit flex flex-wrap mb-[20px]"},X={class:"w-[100%] flex flex-wrap gap-2 mb-[20px]"},Y={class:"w-[100%] lg:w-[48%] lg:h-[100]"},Z={class:"card-shadowed bg-white p-[10px] h-[100%] mb-[20px]"},ee={class:"text-grey-200 mb-[10px]"},te={class:"p3"},se={class:"w-[100%] lg:w-[48%] card-shadowed bg-white p-[10px]"},ae=r(()=>e("h6",{class:"text-grey-200 mb-[10px]"},"Details",-1)),ie={class:"flex justify-between w-[90%] mb-[10px]"},oe=r(()=>e("label",{class:"p3"},"Status:",-1)),le={class:"p3",style:{color:"var(--light-green)"}},ce={class:"flex justify-between w-[90%] mb-[10px]"},ne=r(()=>e("label",{class:"p3"},"Price:",-1)),re={class:"p3"},de={class:"flex justify-between w-[90%] mb-[10px]"},pe=r(()=>e("label",{class:"p3"},"Run Time",-1)),_e={class:"p3"},he={class:"flex justify-between w-[90%] mb-[10px]"},ue=r(()=>e("label",{class:"p3"},"Total Bids",-1)),me={class:"p3"},be={class:"w-[100%] bg-white pb-[30px]"},fe={class:"w-[100%] h-[50px] items-center mb-[20px] flex justify-between"},xe={class:"container"},ge={class:"w-[100%] h-fit flex flex-wrap items-stretch justify-between"},we={class:"card-shadowed w-[100%] lg:w-[calc(100%-340px)] xl:w-[350px] bg-white p-[20px] mb-[20px]"},je={class:"text-grey-200"},ye=r(()=>e("hr",{class:"mb-[10px]",style:{"background-color":"var(--light-grey)"}},null,-1)),ve={class:"w-[100%] flex justify-between mb-[10px]"},ke=r(()=>e("label",{class:"p3"},"Projects Posted:",-1)),De={class:"p3"},Me={class:"flex justify-between w-[100%] mb-[10px]"},Te=r(()=>e("label",{class:"p3"},"Influencers Hired:",-1)),Se={class:"p3"},Pe={class:"flex justify-between w-[100%] mb-[10px]"},Be=r(()=>e("label",{class:"p3"},"Total Spent:",-1)),Fe={class:"p3"},Ce={key:0,class:"flex justify-between w-[90%] mb-[10px]"},Ie=r(()=>e("label",{class:"p3"},"Last Active:",-1)),Ue={class:"p3"},Ee={class:"card-shadowed w-[100%] lg:w-[300px] bg-white xl:w-[350px] p-[20px] mb-[20px]"},Ve=r(()=>e("h6",{class:"text-grey-200 mb-[10px]"},"Social Account Requirements",-1)),qe={class:"social-accounts-display pl-[10px] pb-[20px]"},Ne={class:"flex"},Ae={class:"social-media-icon-holder h-[30px] w-[30px]"},Re=["src"],He={class:"p3 pt-[5px] text-grey-200 ml-[10px]"},Le={class:"card-shadowed w-[100%] xl:w-[calc(100%-780px)] bg-white p-[20px] mb-[80px]"},ze=r(()=>e("h6",{class:"text-grey-200 mb-[10px]"},"Notes",-1)),Ke={class:"p3"};function We(s,t,a,c,i,l){const g=x("ProjectDisplay"),w=x("BidDisplay"),p=x("media-dispay"),n=x("chats-display");return d(),u("div",G,[e("section",Q,[e("article",X,[e("div",Y,[e("div",Z,[e("h6",ee,o(a.project.title),1),e("p",te,o(a.project.description),1)])]),e("div",se,[ae,e("ul",null,[e("li",ie,[oe,e("p",le,o(a.project.status),1)]),e("li",ce,[ne,e("p",re,"Ksh "+o(a.project.budget),1)]),e("li",de,[pe,e("p",_e,o(a.project.runtime)+" "+o(a.project.metrics),1)]),e("li",he,[ue,e("p",me,o(a.project.bids.length),1)])])])]),e("article",be,[e("nav",null,[e("ul",fe,[e("li",{onClick:t[0]||(t[0]=m(_=>l.switchTabs("Project"),["prevent"])),class:b(["w-[100%]",["text-center",i.activeSubTab==="Project"?"active-tab":""]])},"Project ",2),e("li",{onClick:t[1]||(t[1]=m(_=>l.switchTabs("Bids"),["prevent"])),class:b(["w-[100%]",["text-center",i.activeSubTab==="Bids"?"active-tab":""]])},"Bids ",2),c.is_assigned()&&l.assignmentDetails.assignment.marketer_status!="complete"?(d(),u("li",{key:0,onClick:t[2]||(t[2]=m(_=>l.switchTabs("Media"),["prevent"])),class:b(["w-[100%]",["text-center",i.activeSubTab==="Media"?"active-tab":""]])},"Media ",2)):h("",!0),c.is_assigned()&&l.assignmentDetails.assignment.marketer_status!="complete"?(d(),u("li",{key:1,onClick:t[3]||(t[3]=m(_=>l.switchTabs("Chat"),["prevent"])),class:b(["w-[100%]",["text-center",i.activeSubTab==="Chat"?"active-tab":""]])},"Chat ",2)):h("",!0)])]),e("div",xe,[V(s.$slots,"default",{},()=>[i.activeSubTab==="Project"?(d(),f(g,{key:0,project:a.project,MarketerDetails:i.MarketerDetails},null,8,["project","MarketerDetails"])):h("",!0),i.activeSubTab==="Bids"?(d(),f(w,{key:1,display:a.display,bids:a.project.bids},null,8,["display","bids"])):h("",!0),i.activeSubTab==="Media"?(d(),f(p,{key:2,onUploadFile:l.uploadFile,onDeleteMedia:l.remove,assignmentDetails:l.assignmentDetails},null,8,["onUploadFile","onDeleteMedia","assignmentDetails"])):h("",!0),i.activeSubTab==="Chat"?(d(),f(n,{key:3,onSendMessage:l.sendMessage,chats:a.project.chats},null,8,["onSendMessage","chats"])):h("",!0)],!0)])])]),e("section",ge,[e("div",we,[e("h6",je,o(a.project.marketer.user.first_name)+" "+o(a.project.marketer.user.last_name),1),ye,e("ul",null,[e("li",ve,[ke,e("p",De,o(i.MarketerDetails.posted_projects),1)]),e("li",Me,[Te,e("p",Se,o(i.MarketerDetails.assigned_projects),1)]),e("li",Pe,[Be,e("p",Fe,"Ksh "+o(i.MarketerDetails.total_spent),1)]),i.MarketerDetails.last_active?(d(),u("li",Ce,[Ie,e("p",Ue,o(i.MarketerDetails.last_active),1)])):h("",!0)])]),e("div",Ee,[Ve,e("div",qe,[(d(!0),u(q,null,N(a.project.platforms,_=>(d(),u("div",Ne,[e("div",Ae,[e("img",{class:"w-[27px] h-[27px]",style:{"border-radius":"50%",padding:"2px"},src:c.defaults.platformIcons+"/"+c.displayIcon(_.name)},null,8,Re)]),e("p",He,o(_.pivot.influencer_data.name)+" ("+o(c.followersFormat(_.pivot.influencer_data.min_count))+" - "+o(c.followersFormat(_.pivot.influencer_data.max_count))+")",1)]))),256))])]),e("div",Le,[ze,e("p",Ke,o(a.project.notes),1)])])])}const Xe=D(O,[["render",We],["__scopeId","data-v-b42bdfd3"]]);export{Xe as V};
