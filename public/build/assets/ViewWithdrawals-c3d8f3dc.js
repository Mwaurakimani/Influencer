import{_ as c,k as _,l as d,v as m,o as f,b as r,a as t,u as h,L as u,A as p,w,d as l,e as n,n as v,p as b,g as x,I as y}from"./app-410688f0.js";import{A as W}from"./AdminLayout-389a8f4c.js";import g from"./PageTitle-61dd269e.js";const o=i=>(b("data-v-26861255"),i=i(),x(),i),U={class:"flex action-tab",style:{gap:"5px"}},V={class:"manipulation-tab mb-[15px] flex"},N={style:{"margin-left":"auto"},class:"h-[42px] w-[250px] flex gap-1 justify-end"},S={class:"content"},A={class:"w-[65%]"},C=o(()=>t("h5",{class:"text-grey-300 mb-[10px]"},"User Details",-1)),j={style:{gap:"20px 5px"},class:"flex flex-wrap justify-between"},F={class:"flex w-[49%]",style:{"flex-direction":"column"}},T=o(()=>t("label",null,"Agent Name",-1)),k={class:"flex w-[49%]",style:{"flex-direction":"column"}},I=o(()=>t("label",null,"User Name",-1)),L={class:"flex w-[49%]",style:{"flex-direction":"column"}},D=o(()=>t("label",null,"Phone Number",-1)),B={class:"flex w-[49%]",style:{"flex-direction":"column"}},M=o(()=>t("label",null,"Transaction Code",-1)),P={class:"flex w-[100%]",style:{"flex-direction":"column"}},R=o(()=>t("label",null,"Amount",-1)),O={class:"flex w-[100%]",style:{"flex-direction":"column"}},q=o(()=>t("label",null,"Status",-1)),z=o(()=>t("option",{value:"Unprocessed"},"Unprocessed",-1)),E=o(()=>t("option",{value:"Canceled"},"Canceled",-1)),G=o(()=>t("option",{value:"Confirmed"},"Confirmed",-1)),H=o(()=>t("option",{value:"Rejected"},"Rejected",-1)),J=[z,E,G,H],K={class:"w-[35%]"},Q=o(()=>t("h5",{class:"text-grey-300 mb-[10px]"},"Notes",-1)),X={style:{gap:"20px 5px"},class:"flex flex-wrap justify-between"},Y={class:"flex w-[100%]",style:{"flex-direction":"column"}},Z={data(){return{Withdraw:m({agent:this.withdraw.agent.first_name+" "+this.withdraw.agent.last_name,client:this.withdraw.user.first_name+" "+this.withdraw.user.last_name,phone:this.withdraw.phone,transaction_code:this.withdraw.transaction_code,amount:this.withdraw.amount,status:this.withdraw.status,notes:this.withdraw.notes})}},methods:{saveUser(){axios.post(route("AdminUpdateTransaction",[this.withdraw.id,"withdrawal"]),this.Withdraw).then(i=>{alert(i.data.message)}).catch(i=>{alert(resp.data.message)})}}},$=Object.assign(Z,{__name:"ViewWithdrawals",props:["withdraw"],setup(i){return y("activeSideNavigationLink","Finance"),(s,e)=>(f(),_(W,null,{default:d(()=>[r(g,{title:"View Withdrawal"},{default:d(()=>[t("div",U,[r(h(u),{as:"button",href:"/dashboard"},{default:d(()=>[p("Stats")]),_:1}),r(h(u),{as:"button",href:"/dashboard"},{default:d(()=>[p("Transfers")]),_:1}),r(h(u),{as:"button",href:s.route("AdminListDeposits")},{default:d(()=>[p("Deposits")]),_:1},8,["href"]),r(h(u),{as:"button",href:s.route("AdminListWithdraws")},{default:d(()=>[p("Withdraws")]),_:1},8,["href"])])]),_:1}),t("section",V,[t("div",N,[t("button",{onClick:e[0]||(e[0]=w((...a)=>s.saveUser&&s.saveUser(...a),["prevent"]))},"Update")])]),t("section",S,[t("div",A,[t("form",{onSubmit:e[7]||(e[7]=w(()=>{},["prevent"]))},[C,t("div",j,[t("div",F,[T,l(t("input",{disabled:"",class:"w-[100%]",type:"text",placeholder:"First Name","onUpdate:modelValue":e[1]||(e[1]=a=>s.Withdraw.agent=a)},null,512),[[n,s.Withdraw.agent]])]),t("div",k,[I,l(t("input",{disabled:"",class:"w-[100%]",type:"text",placeholder:"First Name","onUpdate:modelValue":e[2]||(e[2]=a=>s.Withdraw.client=a)},null,512),[[n,s.Withdraw.client]])]),t("div",L,[D,l(t("input",{disabled:"",class:"w-[100%]",type:"text",placeholder:"First Name","onUpdate:modelValue":e[3]||(e[3]=a=>s.Withdraw.phone=a)},null,512),[[n,s.Withdraw.phone]])]),t("div",B,[M,l(t("input",{disabled:"",class:"w-[100%]",type:"text",placeholder:"First Name","onUpdate:modelValue":e[4]||(e[4]=a=>s.Withdraw.transaction_code=a)},null,512),[[n,s.Withdraw.transaction_code]])]),t("div",P,[R,l(t("input",{disabled:"",class:"w-[100%]",type:"text",placeholder:"First Name","onUpdate:modelValue":e[5]||(e[5]=a=>s.Withdraw.amount=a)},null,512),[[n,s.Withdraw.amount]])]),t("div",O,[q,l(t("select",{class:"w-[100%]","onUpdate:modelValue":e[6]||(e[6]=a=>s.Withdraw.status=a)},J,512),[[v,s.Withdraw.status]])])])],32)]),t("div",K,[t("form",{onSubmit:e[9]||(e[9]=w(()=>{},["prevent"]))},[Q,t("div",X,[t("div",Y,[l(t("textarea",{class:"w-[100%] h-[300px]","onUpdate:modelValue":e[8]||(e[8]=a=>s.Withdraw.notes=a)},null,512),[[n,s.Withdraw.notes]])])])],32)])])]),_:1}))}}),at=c($,[["__scopeId","data-v-26861255"]]);export{at as default};