import{_,k as c,l,v as h,o as v,b as r,a as e,u as i,L as u,A as p,w as f,d as n,e as m,n as U,p as w,g,I as y}from"./app-e3991b4b.js";import{A}from"./AdminLayout-8e0fcdc2.js";import b from"./PageTitle-1059d045.js";const d=a=>(w("data-v-538ec92d"),a=a(),g(),a),F={class:"flex action-tab",style:{gap:"5px"}},x={class:"manipulation-tab mb-[15px] flex"},V={style:{"margin-left":"auto"},class:"h-[42px] w-[250px] flex gap-1 justify-end"},k={class:"content"},I={class:"w-[65%]"},M=d(()=>e("h5",{class:"text-grey-300 mb-[10px]"},"User Details",-1)),N={style:{gap:"20px 5px"},class:"flex flex-wrap justify-between"},S=d(()=>e("select",{class:"w-[15%]",style:{}},[e("option",{value:"+254"},"+254")],-1)),L=d(()=>e("option",{value:""},null,-1)),j=d(()=>e("option",{value:"Administrator"},"Administrator",-1)),B=[L,j],C=d(()=>e("div",{class:"w-[35%]"},null,-1)),T={data(){return{userForm:h({first_name:null,last_name:null,email:null,phone:null,designation:null})}},methods:{saveUser(){axios.post(route("CreateUser"),this.userForm).then(a=>{console.log(a)}).catch(a=>{console.log(a)})}}},D=Object.assign(T,{__name:"AddUsers",props:{},setup(a){return y("activeSideNavigationLink","Users"),(s,t)=>(v(),c(A,null,{default:l(()=>[r(b,{title:"Add User"},{default:l(()=>[e("div",F,[r(i(u),{as:"button",href:s.route("AdminUsers",["Influencers"])},{default:l(()=>[p("Influencer")]),_:1},8,["href"]),r(i(u),{as:"button",href:s.route("AdminUsers",["Marketers"])},{default:l(()=>[p("Marketer")]),_:1},8,["href"]),r(i(u),{as:"button",href:s.route("AdminUsers",["Moderators"])},{default:l(()=>[p("Moderator")]),_:1},8,["href"])])]),_:1}),e("section",x,[e("div",V,[e("button",{onClick:t[0]||(t[0]=f((...o)=>s.saveUser&&s.saveUser(...o),["prevent"]))},"Save"),r(i(u),{as:"button",href:s.route("AdminAddUser")},{default:l(()=>[p("Add New")]),_:1},8,["href"])])]),e("section",k,[e("div",I,[e("form",{onSubmit:t[6]||(t[6]=f(()=>{},["prevent"])),class:"mb-[20px]"},[M,e("div",N,[n(e("input",{class:"w-[49%]",type:"text",placeholder:"First Name","onUpdate:modelValue":t[1]||(t[1]=o=>s.userForm.first_name=o)},null,512),[[m,s.userForm.first_name]]),n(e("input",{class:"w-[49%]",type:"text",placeholder:"Last Name","onUpdate:modelValue":t[2]||(t[2]=o=>s.userForm.last_name=o)},null,512),[[m,s.userForm.last_name]]),n(e("input",{class:"w-[100%]",type:"text",placeholder:"Email","onUpdate:modelValue":t[3]||(t[3]=o=>s.userForm.email=o)},null,512),[[m,s.userForm.email]]),S,n(e("input",{class:"w-[84%]",type:"text",placeholder:"Phone","onUpdate:modelValue":t[4]||(t[4]=o=>s.userForm.phone=o)},null,512),[[m,s.userForm.phone]]),n(e("select",{class:"w-[100%]",style:{},"onUpdate:modelValue":t[5]||(t[5]=o=>s.userForm.designation=o)},B,512),[[U,s.userForm.designation]])])],32)]),C])]),_:1}))}}),q=_(D,[["__scopeId","data-v-538ec92d"]]);export{q as default};
