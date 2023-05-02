import{s as O,x as p,v as D,y as A,c as v,h as M,b as _,j as P,T as E,a as e,t as f,q as I,u as n,e as W,l as z,w as S,g as h,z as F,F as L,i as R,o as r,p as q,d as H}from"./app-6ca4d7f9.js";import{_ as K}from"./MobileNavigationComponent-dc1639cb.js";import{_ as G}from"./DesktopNavigation-4e9e7884.js";/* empty css                                                                              */import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";import{c as Q}from"./convertDate-873f89eb.js";import{a as X,r as w}from"./AuthStore-87755225.js";import{M as Y}from"./Modal-cb95c12b.js";/* empty css                                                                              */import Z from"./mediaDispay-9c1a6084.js";import ee from"./chatsDisplay-50bd31eb.js";import te from"./ImageViewModal-27d0e9fa.js";import oe from"./pdfViewModal-1823ea04.js";/* empty css                                                                  *//* empty css                                                          */import"./pdf-ac36aa31.js";const a=m=>(q("data-v-18a445fb"),m=m(),H(),m),se=a(()=>e("header",null,[e("div",{class:"modile-header"},[e("div",{class:"container"},[e("section",null,[e("h1",null,"Projects")])])])],-1)),ie={class:"content-area"},ae={class:"container"},ne={class:"top-section"},le={class:"left-section"},ce={class:"cont-bid"},re=a(()=>e("label",null,"Bid",-1)),de=a(()=>e("div",{class:"cont-budget"},[e("label",null,"Budget"),e("p",null,"Ksh 15,000")],-1)),pe={class:"cont-location"},me=a(()=>e("label",null,"Location",-1)),ue={class:"right-section"},_e={class:"desktop-date"},he={class:"description-section"},ve=a(()=>e("h3",null,"Description",-1)),fe={style:{color:"grey"}},ge={class:"container actions-section"},be=a(()=>e("option",{value:"Assigned"},"Assigned",-1)),ye=a(()=>e("option",{value:"Assigned"},"Assigned",-1)),Me=a(()=>e("option",{value:"Progressing"},"Progressing",-1)),Se=a(()=>e("option",{value:"Finished"},"Finished",-1)),we=[be,ye,Me,Se],ke={class:"container working-area"},je={class:"mobile-working-area"},Ce={class:"navigation-section"},De={key:0,class:"media-area"},Fe={key:1,class:"chat-area"},xe=a(()=>e("div",{class:"desktop-working-area"},null,-1)),Be=a(()=>e("div",{class:"container bidders-container",style:{"box-shadow":"none"}},null,-1)),Ve=a(()=>e("footer",null,null,-1)),Te={__name:"WorkingSpace",props:{canLogin:Boolean,canRegister:Boolean,laravelVersion:String,phpVersion:String,project:Object,media:Object,chats:Object,assignment:Object,account_type:String},setup(m){const c=m,x=R("currentUser"),k=X();x!=null&&k.authenticate(),O(k);const u=p(c.project),B=p(c.media),s={properties:p({visible:!1,media:null}),openModal:o=>{document.body.style.overflow="hidden",s.properties.visible=!0,s.properties.media=o},closeModal:()=>{document.body.style.overflow="auto",s.properties.visible=!1,s.properties.media=null}},V=c.chats;D({amount:null,comment:null});let l={properties:p({activeSection:"media"}),changeTabs:o=>{o=="chats"?l.properties.activeSection="chats":l.properties.activeSection="media"}};const d=p({active:l.properties.activeSection});A(l.properties,o=>{o.activeSection=="chats",d.active=o.activeSection,console.log(d)});const g=D({fileUpload:null});function T(o){g.fileUpload=o,axios.post(w("uploadFile"),{project:c.project,fileData:g.fileUpload},{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{t.data.status?(alert("File Uploaded"),window.location.reload()):alert(t.data.error)}).catch(t=>{alert("File is missing or is unsupported")})}function j(o){const t=`/storage/${o}`,i=document.createElement("a");i.href=t,i.download=o.split("/").pop(),document.body.appendChild(i),i.click(),document.body.removeChild(i)}function b(o){confirm("Are you sure you want to delete this media?")&&axios.delete(w("DeleteMedia",{media:o})).then(t=>{t.data.status?(alert("Media deleted successfully."),window.location.reload()):alert("Error deleting media.")}).catch(t=>{alert("Error deleting media.")})}function U(o){let t={project:u[0],message:o.message};axios.post(w("sendMessage"),t).then(i=>{let C=$("#chatWindow");c.chats.push(i.data.chat),C.animate({scrollTop:C.get(0).scrollHeight},1e3)}).catch(i=>{console.log(i)})}let y=p([]);function N(){y[0]=c.assignment[0].assignments.marketer_status}return N(),(o,t)=>(r(),v(L,null,[(r(),M(E,{to:"body"},[_(Y,{visible:s.properties.visible},{default:P(()=>[s.properties.media!=null&&s.properties.media.type=="image"?(r(),M(te,{key:0,media:s.properties.media,onCloseModel:s.closeModal,onDownload:j,onDeleteMedia:b},null,8,["media","onCloseModel"])):h("",!0),s.properties.media!=null&&s.properties.media.type=="pdf"?(r(),M(oe,{key:1,media:s.properties.media,onCloseModel:s.closeModal,onDownload:j,onDeleteMedia:b},null,8,["media","onCloseModel"])):h("",!0)]),_:1},8,["visible"])])),e("nav",null,[_(K,{activeNavButton:"Projects"}),_(G,{activeNavButton:"Projects"})]),se,e("div",ie,[e("div",ae,[e("div",ne,[e("div",le,[e("div",ce,[re,e("p",null,f(u[0].bids.length),1)]),de,e("div",pe,[me,e("p",null,f(u[0].location),1)])]),e("div",ue,[e("p",_e,[I("Date Posted : "),e("span",null,f(n(Q)(u[0].created_at)),1)])])]),e("div",he,[ve,e("p",fe,f(u[0].description),1)])]),e("div",ge,[W(e("select",{"onUpdate:modelValue":t[0]||(t[0]=i=>n(y)[0]=i)},we,512),[[z,n(y)[0]]]),c.account_type=="Marketer"?(r(),v("button",{key:0,onClick:t[1]||(t[1]=S(i=>o.update_status(),["prevent"]))},"Update Status")):h("",!0)]),e("div",ke,[e("div",je,[e("ul",Ce,[e("li",null,[e("button",{onClick:t[2]||(t[2]=S(i=>n(l).changeTabs("media"),["prevent"])),class:F(n(l).properties.activeSection=="media"?"active-section":"")}," Media ",2)]),e("li",null,[e("button",{onClick:t[3]||(t[3]=S(i=>n(l).changeTabs("chats"),["prevent"])),class:F(n(l).properties.activeSection=="chats"?"active-section":"")}," Chats ",2)])]),d.active=="media"?(r(),v("div",De,[_(Z,{onOpenModal:s.openModal,fileForm:n(g),media:B,onUploadFile:T,onDeleteMedia:b},null,8,["onOpenModal","fileForm","media"])])):h("",!0),d.active=="chats"?(r(),v("div",Fe,[_(ee,{chats:n(V),onSendMessage:U},null,8,["chats"])])):h("",!0)]),xe]),Be]),Ve],64))}},Je=J(Te,[["__scopeId","data-v-18a445fb"]]);export{Je as default};
