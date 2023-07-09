import{_ as w,D as k,i as F,B as C,z as q,v as S,c as l,a as e,b as x,w as p,d as m,e as d,t as _,f as c,n as A,l as B,F as V,r as h,o as a,A as I,p as M,g as U}from"./app-6beb027d.js";import{M as T}from"./MobileInfleuncerModifySocialAccountsComponent-793f31fb.js";const D={setup(){const u=k(),s=F(),{status:f,user:o}=C(s);return{errors:q({status:!1,errors:{}}),status:f,defaults:u}},inject:["currentUser"],components:{MobileInfleuncerModifySocialAccountsComponent:T},data(){return{influencerForm:S({first_name:null,last_name:null,email:null,phone:null,password:null,password_confirmation:null,bio:null,gender:null,DOB:null,social_account:{facebook:{username:null,influencerClass:null},twitter:{username:null,influencerClass:null},instagram:{username:null,influencerClass:null},tiktok:{username:null,influencerClass:null}}}),activePanel:"Account"}},methods:{moveTo(u){this.influencerForm.check=u,axios.post(route("createInfluencerValidate"),this.influencerForm).then(s=>{s.data.status&&(this.errors.errors={},this.errors.status=!1,this.activePanel=u)}).catch(s=>{console.log(s),s.response.status===422?(this.errors.errors=s.response.data.errors,this.errors.status=!0):(this.errors.errors={},this.errors.status=!1)})},validate(u){console.log(u)},submit(){this.influencerForm.post(route("createUser",["Influencer"]))},debounce(u,s){let f;return function(...o){f&&clearTimeout(f);const r=this;f=setTimeout(()=>{fn.apply(r,o)},s)}},keyCount(){console.log("hi")}},mounted(){this.currentUser!=null&&this.auth.authenticate()}},n=u=>(M("data-v-d16208c3"),u=u(),U(),u),N={class:"flex justify-center",style:{height:"calc(100vh - 60px)"}},P={class:"hidden md:w-[50%] md:block"},j=["src"],L={class:"md:w-[50%] h:100% sm:w-[100%] flex flex-col align-middle",style:{overflow:"auto"}},O=n(()=>e("header",null,[e("h4",{class:"pt-[13px]",style:{color:"var(--t-purple)","text-align":"center"}},"Join The Influencer Community")],-1)),E={class:"content-area"},J={key:0,class:"container mx-w-[800px]"},z=n(()=>e("p",{class:"p3 p-[20px] mb-[20px] text-center"},"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit asperiores ea neque quae eaque possimus vel amet quisquam fugiat sequi repudiandae ex, perferendis minus illum. Sit autem nesciunt totam deserunt!",-1)),G=n(()=>e("h6",{class:"p-[15px] mb-[20px] text-center"},"Join The Influencer Community",-1)),K={class:"form-content"},R={class:"flex"},W={class:"input-group"},H=n(()=>e("label",{for:""},"First Name",-1)),Q={key:0,class:"error span-3 py-[10px] text-red-500"},X={class:"input-group"},Y=n(()=>e("label",{for:""},"Last Name",-1)),Z={key:0,class:"error span-3 py-[10px] text-red-500"},$={class:"flex"},ee={class:"input-group"},se=n(()=>e("label",{for:""},"Gender",-1)),te=n(()=>e("option",null,"Male",-1)),oe=n(()=>e("option",null,"Female",-1)),re=[te,oe],ne={key:0,class:"error span-3 py-[10px] text-red-500"},ie={class:"input-group"},le=n(()=>e("label",{for:""},"Date of Birth",-1)),ae={key:0,class:"error span-3 py-[10px] text-red-500"},ue={class:"input-group"},ce=n(()=>e("label",{for:""},"Email",-1)),pe={key:0,class:"error span-3 py-[10px] text-red-500"},me={class:"input-group"},de=n(()=>e("label",{for:""},"Phone",-1)),_e={key:0,class:"error span-3 py-[10px] text-red-500"},fe={class:"flex"},xe={class:"input-group"},he=n(()=>e("label",{for:""},"Password",-1)),ve={key:0,class:"error span-3 py-[10px] text-red-500"},be={class:"input-group"},ye=n(()=>e("label",{for:""},"Confirm Password",-1)),ge={key:0,class:"error span-3 py-[10px] text-red-500"},we={class:"button-section flex justify-end p-[20px]"},ke={key:1,class:"container"},Fe=n(()=>e("p",{class:"p3 p-[20px] mb-[20px]",style:{"text-align":"center"}},"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit asperiores ea neque quae eaque possimus vel amet quisquam fugiat sequi repudiandae ex, perferendis minus illum. Sit autem nesciunt totam deserunt!",-1)),Ce=n(()=>e("h6",{class:"p-[15px] mb-[20px] text-center"},"Add social accounts",-1)),qe={class:"form-content",style:{"max-width":"700px !important",margin:"auto"}},Se={class:"button-section flex justify-between p-[20px]"},Ae={key:2,class:"container"},Be=n(()=>e("p",{class:"p3 p-[20px] mb-[20px]",style:{"text-align":"center"}},"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit asperiores ea neque quae eaque possimus vel amet quisquam fugiat sequi repudiandae ex, perferendis minus illum. Sit autem nesciunt totam deserunt!",-1)),Ve=n(()=>e("h6",{class:"p-[15px] mb-[20px] text-center"},"Bio",-1)),Ie={class:"form-content",style:{"max-width":"700px !important",margin:"auto"}},Me=n(()=>e("span",{class:"span-2 text-grey-200"},"Max 500 Characters",-1)),Ue={class:"button-section flex justify-between p-[20px]"},Te={key:3,class:"container"},De=n(()=>e("h6",{class:"p-[15px] mb-[20px] text-center"},"Welcome",-1)),Ne=n(()=>e("div",{class:"form-content"},[e("p",{class:"p3 p-[20px] mb-[20px]",style:{"text-align":"center"}},"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit asperiores ea neque quae eaque possimus vel amet quisquam fugiat sequi repudiandae ex, perferendis minus illum. Sit autem nesciunt totam deserunt!")],-1)),Pe={class:"button-section flex justify-between p-[20px]"},je=n(()=>e("footer",null,null,-1));function Le(u,s,f,o,r,i){const v=h("MobileNavigationComponent"),b=h("DesktopNavigationVue"),y=h("MobileInfleuncerModifySocialAccountsComponent"),g=h("Link");return a(),l(V,null,[e("nav",null,[x(v,{activeNavButton:"SignUpAs"}),x(b,{class:"scrolled",activeNavButton:"join"})]),e("section",N,[e("section",P,[e("img",{class:"w-[100%] h-[100%]",style:{"object-fit":"cover"},src:o.defaults.systemImages+"/Join-platform.jpg"},null,8,j)]),e("section",L,[O,e("div",E,[r.activePanel==="Account"?(a(),l("div",J,[z,e("form",{class:"card-shadowed bg-white mb-[50px]",action:"",onSubmit:s[9]||(s[9]=p((...t)=>i.submit&&i.submit(...t),["prevent"]))},[G,e("div",K,[e("section",null,[e("article",R,[e("div",W,[H,m(e("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=t=>r.influencerForm.first_name=t)},null,512),[[d,r.influencerForm.first_name]]),o.errors.errors&&o.errors.errors.first_name?(a(),l("span",Q,_(o.errors.errors.first_name[0]),1)):c("",!0)]),e("div",X,[Y,m(e("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=t=>r.influencerForm.last_name=t)},null,512),[[d,r.influencerForm.last_name]]),o.errors.errors&&o.errors.errors.last_name?(a(),l("span",Z,_(o.errors.errors.last_name[0]),1)):c("",!0)])]),e("article",$,[e("div",ee,[se,m(e("select",{class:"w-[100%]","onUpdate:modelValue":s[2]||(s[2]=t=>r.influencerForm.gender=t)},re,512),[[A,r.influencerForm.gender]]),o.errors.errors&&o.errors.errors.gender?(a(),l("span",ne,_(o.errors.errors.gender[0]),1)):c("",!0)]),e("div",ie,[le,m(e("input",{type:"date","onUpdate:modelValue":s[3]||(s[3]=t=>r.influencerForm.DOB=t)},null,512),[[d,r.influencerForm.DOB]]),o.errors.errors&&o.errors.errors.DOB?(a(),l("span",ae,_(o.errors.errors.DOB[0]),1)):c("",!0)])]),e("div",ue,[ce,m(e("input",{type:"email","onUpdate:modelValue":s[4]||(s[4]=t=>r.influencerForm.email=t)},null,512),[[d,r.influencerForm.email]]),o.errors.errors&&o.errors.errors.email?(a(),l("span",pe,_(o.errors.errors.email[0]),1)):c("",!0)]),e("div",me,[de,m(e("input",{type:"tel","onUpdate:modelValue":s[5]||(s[5]=t=>r.influencerForm.phone=t)},null,512),[[d,r.influencerForm.phone]]),o.errors.errors&&o.errors.errors.phone?(a(),l("span",_e,_(o.errors.errors.phone[0]),1)):c("",!0)]),e("article",fe,[e("div",xe,[he,m(e("input",{type:"password","onUpdate:modelValue":s[6]||(s[6]=t=>r.influencerForm.password=t)},null,512),[[d,r.influencerForm.password]]),o.errors.errors&&o.errors.errors.password?(a(),l("span",ve,_(o.errors.errors.password[0]),1)):c("",!0)]),e("div",be,[ye,m(e("input",{type:"password","onUpdate:modelValue":s[7]||(s[7]=t=>r.influencerForm.password_confirmation=t)},null,512),[[d,r.influencerForm.password_confirmation]]),o.errors.errors&&o.errors.errors.password_confirmation?(a(),l("span",ge,_(o.errors.errors.password_confirmation[0]),1)):c("",!0)])])])]),e("div",we,[e("button",{onClick:s[8]||(s[8]=p(t=>i.moveTo("SocialAccounts"),["prevent"])),class:"purple",type:"submit"},"Social Accounts ")])],32)])):c("",!0),r.activePanel==="SocialAccounts"?(a(),l("div",ke,[Fe,e("form",{class:"card-shadowed mb-[50px] w-[100%]",action:"",onSubmit:s[12]||(s[12]=p((...t)=>i.submit&&i.submit(...t),["prevent"]))},[Ce,e("div",qe,[x(y,{supportedPlatforms:r.influencerForm,class:"w-[100%]"},null,8,["supportedPlatforms"])]),e("div",Se,[e("button",{onClick:s[10]||(s[10]=p(t=>i.moveTo("Account"),["prevent"])),class:"purple",type:"submit"},"Account"),e("button",{onClick:s[11]||(s[11]=p(t=>i.moveTo("Bio"),["prevent"])),class:"purple",type:"submit"},"Bio")])],32)])):c("",!0),r.activePanel==="Bio"?(a(),l("div",Ae,[Be,e("form",{class:"card-shadowed mb-[50px] w-[100%]",action:"",onSubmit:s[17]||(s[17]=p((...t)=>i.submit&&i.submit(...t),["prevent"]))},[Ve,e("div",Ie,[m(e("textarea",{class:"w-[100%] h-[200px]",onKeyup:s[13]||(s[13]=t=>i.debounce(i.keyCount,300)),"onUpdate:modelValue":s[14]||(s[14]=t=>r.influencerForm.bio=t)},`\r
\r
                    `,544),[[d,r.influencerForm.bio]]),Me]),e("div",Ue,[e("button",{onClick:s[15]||(s[15]=p(t=>i.moveTo("SocialAccounts"),["prevent"])),class:"purple",type:"submit"},"Social Accounts "),e("button",{onClick:s[16]||(s[16]=p(t=>i.submit(),["prevent"])),class:"purple",type:"submit"},"Finish")])],32)])):c("",!0),r.activePanel==="Finish"?(a(),l("div",Te,[e("form",{class:"card-shadowed mb-[50px] w-[100%]",action:"",onSubmit:s[18]||(s[18]=p((...t)=>i.submit&&i.submit(...t),["prevent"]))},[De,Ne,e("div",Pe,[x(g,{as:"button",href:"/login",class:"purple",type:"submit"},{default:B(()=>[I("Log In")]),_:1})])],32)])):c("",!0)])])]),je],64)}const Je=w(D,[["render",Le],["__scopeId","data-v-d16208c3"]]);export{Je as default};
