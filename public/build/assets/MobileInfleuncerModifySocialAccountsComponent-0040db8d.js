import{r as x,y as g,o as u,c as f,a as o,w as m,z as _,F as b,m as w,e as v,f as I,u as d,l as k,g as M,p as D,d as C,k as S}from"./app-6ca4d7f9.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";const l=c=>(D("data-v-159d0c79"),c=c(),C(),c),y={class:"card-shadowed bg-white"},N={class:"header h-[40px] flex"},V=l(()=>o("img",{class:"w-[30px] h-[30px]",src:"/storage/DESIGN/WORKSPACE/icons/facebook-icon.png"},null,-1)),P=[V],K=l(()=>o("img",{class:"w-[30px] h-[30px]",src:"/storage/DESIGN/WORKSPACE/icons/twitter-icon.png"},null,-1)),A=[K],O=l(()=>o("img",{class:"w-[30px] h-[30px]",src:"/storage/DESIGN/WORKSPACE/icons/instagram-icon.png"},null,-1)),U=[O],G=l(()=>o("img",{class:"w-[30px] h-[30px]",src:"/storage/DESIGN/WORKSPACE/icons/tiktok-icon.png"},null,-1)),R=[G],W={key:0,class:"body mb-[20px]",id:"facebook"},$={class:"input-group flex p-[20px]",style:{"flex-direction":"column"}},B=l(()=>o("label",{class:"mb-[10px]",for:""},"Username",-1)),T=["onUpdate:modelValue"],j={class:"input-group flex p-[20px]",style:{"flex-direction":"column"}},z=l(()=>o("label",{class:"mb-[10px]",for:""},"Influencer Class",-1)),F=["onUpdate:modelValue"],L=S('<option value="Nano-Influencer" data-v-159d0c79>Nano-Influencer (1K - 10K )</option><option value="Micro-Influencer" data-v-159d0c79>Micro-Influencer (10K - 100K )</option><option value="Macro-Influencer" data-v-159d0c79>Macro-Influencer (100K - 500K )</option><option value="Meta-Influencer" data-v-159d0c79>Meta-Influencer (500K - 1M )</option><option value="Mega-Influencer" data-v-159d0c79>Mega-Influencer (1M+)</option>',5),q=[L],H=l(()=>o("hr",{class:"mb-[20px] bg-grey"},null,-1)),J={name:"Mobile-brand-Project-breakdown-Entry-component"},Q=Object.assign(J,{props:["supportedPlatforms"],setup(c){const h=c,i=x("facebook"),e=h.supportedPlatforms.social_account;g(e,(r,t)=>{for(let a in e){let n=a;for(let s in e[n].platformDetail)e[n].platformDetail[s].status=(()=>!(e[n].platformDetail[s].value==="undefined"||e[n].platformDetail[s].value==null||e[n].platformDetail[s].value===0))()}});for(let r in e){let t=r;for(let a in e[t].platformDetail)e[t].platformDetail[a].status=(()=>!(e[t].platformDetail[a].value==="undefined"||e[t].platformDetail[a].value==null||e[t].platformDetail[a].value===0))()}function p(r){i.value=r}return(r,t)=>(u(),f("div",y,[o("div",N,[o("div",{onClick:t[0]||(t[0]=m(a=>p("facebook"),["prevent"])),class:_(["social-media-icon-holder h-[40px] w-[40px]",{active:i.value=="facebook"}])},P,2),o("div",{onClick:t[1]||(t[1]=m(a=>p("twitter"),["prevent"])),class:_(["social-media-icon-holder h-[40px] w-[40px]",{active:i.value=="twitter"}])},A,2),o("div",{onClick:t[2]||(t[2]=m(a=>p("instagram"),["prevent"])),class:_(["social-media-icon-holder h-[40px] w-[40px]",{active:i.value=="instagram"}])},U,2),o("div",{onClick:t[3]||(t[3]=m(a=>p("tiktok"),["prevent"])),class:_(["social-media-icon-holder h-[40px] w-[40px]",{active:i.value=="tiktok"}])},R,2)]),(u(!0),f(b,null,w(d(e),(a,n)=>(u(),f("section",null,[i.value===n?(u(),f("div",W,[o("div",$,[B,v(o("input",{style:{"border-radius":"5px !important"},"onUpdate:modelValue":s=>d(e)[n].username=s},null,8,T),[[I,d(e)[n].username]])]),o("div",j,[z,v(o("select",{style:{width:"100%","border-radius":"5px !important"},"onUpdate:modelValue":s=>d(e)[n].influencerClass=s},q,8,F),[[k,d(e)[n].influencerClass]])]),H])):M("",!0)]))),256))]))}}),Z=E(Q,[["__scopeId","data-v-159d0c79"]]);export{Z as M};
