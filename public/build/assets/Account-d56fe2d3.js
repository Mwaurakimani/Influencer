import{_ as v,o as i,c as u,h as C,a as s,t as a,p as P,g as M,i as D,j as S,D as E,M as V,v as y,k as b,b as f,T as N,l as g,F as j,r as h,w as c,f as w,d as l,e as d}from"./app-e3991b4b.js";import{a as I}from"./authenticate-d9a63ebe.js";const _=o=>(P("data-v-7c7f4b9a"),o=o(),M(),o),L={class:"card-shadowed pb-[20px] px-[5px] bg-white"},$=_(()=>s("h6",{class:"text-grey-400 p-[10px] mb-[5px]"},"About",-1)),T={class:"px-[30px]"},B={class:"flex justify-between md:justify-start md:gap-2"},q={class:"sm:w-[100px]"},H=_(()=>s("label",{class:"p3",style:{color:"darkgrey"}}," First Name",-1)),R={class:"p4 text-grey-200",style:{"font-weight":"600"}},Y={class:""},z=_(()=>s("label",{class:"p3",style:{color:"darkgrey"}}," Last Name",-1)),G={class:"p4 text-grey-200",style:{"font-weight":"600"}},J={class:"sm:w-[100px]"},K={class:""},O=_(()=>s("label",{class:"p3",style:{color:"darkgrey"}},"Email",-1)),Q={class:"p4 text-grey-200",style:{"font-weight":"600"}},W={class:"sm:w-[100px]"},X={class:""},Z=_(()=>s("label",{class:"p3",style:{color:"darkgrey"}},"Phone",-1)),ss={class:"p4 text-grey-200",style:{"font-weight":"600"}},es={__name:"MarketerAboutCard",props:["user"],setup(o){const e=o;return(m,x)=>(i(),u("div",L,[C(m.$slots,"default",{},void 0,!0),$,s("div",T,[s("div",B,[s("div",q,[H,s("p",R,a(e.user.first_name),1)]),s("div",Y,[z,s("p",G,a(e.user.last_name),1)])]),s("div",J,[s("div",K,[O,s("p",Q,a(e.user.email),1)])]),s("div",W,[s("div",X,[Z,s("p",ss,a(e.user.phone),1)])])])]))}},ts=v(es,[["__scopeId","data-v-7c7f4b9a"]]);const os={setup(){const o=D(),e=S(!1),m=E();return{auth:o,authenticated:e,defaults:m}},props:["user","marketer","company","requestStatus","message"],inject:["currentUser"],provide:{activeTab:"Account",pageName:"Account"},components:{MobileDashboardHeader:V,MarketerAboutCard:ts},data(){return{userForm:y({...this.user}),userPassword:y({currentPassword:null,currentPasswordError:this.$attrs.errors.currentPassword?this.$attrs.errors.currentPassword:null,newPassword:null,confirmPassword:null,confirmPasswordError:null}),mode:"viewMode"}},methods:{updateUser(){axios.post(route("updateEmployer",["MarketerUpdate",this.user.id]),this.userForm).then(o=>{o.data.status==!0&&alert(o.data.message)}).catch(o=>{console.log(o),alert("Error Updating Your account")})},validatePassword(){this.userPassword.confirmPassword!=this.userPassword.newPassword?this.userPassword.confirmPasswordError="Password entered does not match":this.userPassword.post(route("updateUserPassword",[this.user.id]))},changeMode(o){this.mode=o}},beforeMount(){I(),(this.currentUser==null||this.currentUser=="undefined")&&(window.location.href=window.location.href)},mounted(){this.requestStatus&&alert(this.requestStatus),this.message&&console.log(this.$props.message)}},n=o=>(P("data-v-550eb70e"),o=o(),M(),o),rs={class:"flex gap-[20px] flex-wrap",style:{height:"fit-content"}},ns={class:"intro"},as={class:"p2",style:{"text-align":"center"}},ls={class:"h-[25px] flex items-center justify-center",style:{width:"fit-content"}},ds={class:"star-icon w-[100%] h-[100%] p-[3px]"},is=["src"],ps=n(()=>s("p",{class:"pt-[3px]"},"4.5",-1)),cs=n(()=>s("p",{class:"p3 mb-[5px]",style:{"text-align":"center",color:"var(--light-green)"}},"Available",-1)),us=["src"],_s={key:1,class:"pr-[10px] flex justify-end items-end w-[100%] gap-[10px]"},ms={class:"w-[100%] h-[100%] flex flex-wrap md:flex-nowrap gap-[10px]"},hs={key:0,class:"card-shadowed h-[100%] w-[100%] md:w-[60%] mb-[20px] bg-white"},ws=n(()=>s("h5",{class:"p-[10px]"},"Account",-1)),xs={class:"flex"},fs={class:"input-group w-[50%]"},ys=n(()=>s("label",null,"First Name",-1)),bs={class:"input-group w-[50%]"},gs=n(()=>s("label",null,"Last Name",-1)),vs={class:"input-group w-[100%]"},Ps=n(()=>s("label",null,"Email",-1)),Ms={class:"input-group w-[100%] mb-[50px]"},ks=n(()=>s("label",null,"Phone",-1)),Fs=n(()=>s("div",{class:"form-action flex w-[100%] align-middle justify-between"},[s("button",{class:"px-[20px] py-[10px] purple",type:"submit"},"Update Account"),s("button",{class:"px-[20px] py-[10px] purple",type:"reset"},"Reset Form")],-1)),Us={key:1,class:"card-shadowed h-[100%] w-[100%] md:w-[39%] mb-[70px] bg-white"},As=n(()=>s("h5",{class:"p-[10px]"},"Password",-1)),Cs={class:"input-group w-[100%]"},Ds=n(()=>s("label",null,"Current Password",-1)),Ss={style:{color:"red"}},Es={class:"input-group w-[100%] mb-[20px]"},Vs=n(()=>s("label",null,"New Password",-1)),Ns={class:"input-group w-[100%] mb-[20px]"},js=n(()=>s("label",null,"Confirm New Password",-1)),Is={style:{color:"red"}},Ls={style:{color:"red"}},$s=n(()=>s("div",{class:"form-action flex w-[100%] align-middle justify-between"},[s("button",{class:"px-[20px] py-[10px] purple",type:"submit"},"Update Password"),s("button",{class:"px-[20px] py-[10px] purple",type:"reset"},"Reset Form")],-1));function Ts(o,e,m,x,t,p){const k=h("MobileDashboardLayout"),F=h("MobileDashboardHeader"),U=h("MarketerAboutCard"),A=h("DesktopDashbooardLayout");return i(),u(j,null,[(i(),b(N,{to:"body"},[f(k,{activePage:"Account"})])),f(F,{title:"Account"}),f(A,null,{default:g(()=>[s("div",rs,[t.mode!="editMode"?(i(),b(U,{key:0,user:t.userForm,class:"w-[100%] mx-[auto]"},{default:g(()=>[s("div",ns,[s("p",as,a(t.userForm.first_name)+" "+a(t.userForm.last_name),1),s("div",ls,[s("div",ds,[s("img",{style:{"max-width":"20px","max-height":"20px"},src:x.defaults.systemIcons+"/icons8-star-100.png"},null,8,is)]),ps]),cs,s("span",{onClick:e[0]||(e[0]=c(r=>p.changeMode("editMode"),["prevent"])),as:"span",class:"icon w-[30px] h-[30px] p-[5px]"},[s("img",{src:x.defaults.systemIcons+"/icons8-pencil-96.png"},null,8,us)])])]),_:1},8,["user"])):w("",!0),t.mode=="editMode"?(i(),u("div",_s,[s("button",{class:"px-[20px] py-[10px] purple",onClick:e[1]||(e[1]=c(r=>p.changeMode("viewMode"),["prevent"]))},"View"),s("button",{class:"px-[20px] py-[10px] purple",onClick:e[2]||(e[2]=c(r=>p.changeMode("viewMode"),["prevent"]))},"Cancel")])):w("",!0),s("section",ms,[t.mode=="editMode"?(i(),u("section",hs,[ws,s("form",{class:"p-[10px] w-[100%] flex flex-col gap-[5px]",action:"",onSubmit:e[7]||(e[7]=c(r=>p.updateUser(),["prevent"]))},[s("article",xs,[s("div",fs,[ys,l(s("input",{class:"w-[100%]",type:"text","onUpdate:modelValue":e[3]||(e[3]=r=>t.userForm.first_name=r)},null,512),[[d,t.userForm.first_name]])]),s("div",bs,[gs,l(s("input",{class:"w-[100%]",type:"text","onUpdate:modelValue":e[4]||(e[4]=r=>t.userForm.last_name=r)},null,512),[[d,t.userForm.last_name]])])]),s("div",vs,[Ps,l(s("input",{type:"text","onUpdate:modelValue":e[5]||(e[5]=r=>t.userForm.email=r)},null,512),[[d,t.userForm.email]])]),s("div",Ms,[ks,l(s("input",{type:"text","onUpdate:modelValue":e[6]||(e[6]=r=>t.userForm.phone=r)},null,512),[[d,t.userForm.phone]])]),Fs],32)])):w("",!0),t.mode=="editMode"?(i(),u("section",Us,[As,s("form",{class:"p-[10px] w-[100%] flex gap-[10px] flex-wrap",action:"",onSubmit:e[11]||(e[11]=c(r=>p.validatePassword(),["prevent"]))},[s("div",Cs,[Ds,l(s("input",{type:"text","onUpdate:modelValue":e[8]||(e[8]=r=>t.userPassword.currentPassword=r)},null,512),[[d,t.userPassword.currentPassword]]),s("span",Ss,a(this.$attrs.errors.currentPassword),1)]),s("div",Es,[Vs,l(s("input",{type:"text","onUpdate:modelValue":e[9]||(e[9]=r=>t.userPassword.newPassword=r)},null,512),[[d,t.userPassword.newPassword]])]),s("div",Ns,[js,l(s("input",{type:"text","onUpdate:modelValue":e[10]||(e[10]=r=>t.userPassword.confirmPassword=r)},null,512),[[d,t.userPassword.confirmPassword]]),s("span",Is,a(t.userPassword.confirmPasswordError),1),s("span",Ls,a(this.$attrs.errors.confirmPasswordError),1)]),$s],32)])):w("",!0)])])]),_:1})],64)}const Hs=v(os,[["render",Ts],["__scopeId","data-v-550eb70e"]]);export{Hs as default};
