import{_ as y,z as h,c,k as g,b as k,l as M,T as C,a as s,F as w,s as b,o as d,w as m,d as r,e as u,t as i,p as W,g as S}from"./app-6beb027d.js";import{M as V}from"./Modal-5bdc59e0.js";const o=p=>(W("data-v-791033f7"),p=p(),S(),p),B={class:"bid-display"},A={class:"bid-container"},I={class:"header"},N=o(()=>s("h6",null,"Make Deposit",-1)),T={class:"body"},U={class:"input-group"},D=o(()=>s("label",{class:"p3"},"Agent Name",-1)),E={class:"input-group"},L=o(()=>s("label",{class:"p3"},"Amount",-1)),F={class:"input-group mb-[30px]"},K=o(()=>s("label",{class:"p3"},"M-Pesa Number",-1)),P={class:"input-group mb-[30px]"},$=o(()=>s("label",{class:"p3"},"Enter your password",-1)),j=["onClick"],z=o(()=>s("div",{class:"footer"},null,-1)),H=o(()=>s("h6",{class:"mb-[10px]"},"How to make a withdraw",-1)),O=o(()=>s("ol",{class:"pl-[20px] mb-[30px]",type:"1"},[s("li",null,"Select an agent from the list below."),s("li",null,"Enter the amount of credits you wish to withdraw"),s("li",null,"Provide your password"),s("li",null,"Click confirm to complete"),s("li",null,"The agent will transfer your money to your account")],-1)),X=o(()=>s("h6",{class:"mb-[15px]"},"Agents List",-1)),q=["onClick"],G={class:"user-icon"},J={style:{}},Q={class:"flex-wrap"},R=o(()=>s("label",{class:"p4 font-semibold w-[100%] mr-[10px] text-grey-100"},"Limit:",-1)),Y={class:"ml-[20px] p3"},Z={class:"flex-wrap"},ss=o(()=>s("label",{class:"p3 font-semibold mr-[10px] w-[100%]"},"Method:",-1)),ts={class:"pl-[20px]"},es={class:"p3"},os={class:"p3"},ls={class:"flex-wrap"},is=o(()=>s("label",{class:"p4 font-semibold w-[100%] mr-[10px]"},"Waiting time:",-1)),ns={class:"p3 pl-[20px]"},as={name:"BalanceComponent"},ds=Object.assign(as,{props:["Withdrawal"],setup(p){const v=p,l=h({agent:null,amount:0,phone:null,password:null});function f(a){l.agent=a,n.openModal()}const n={properties:h({visible:!1}),openModal:()=>{document.body.style.overflow="hidden",n.properties.visible=!0},closeModal:()=>{document.body.style.overflow="auto",n.properties.visible=!1}};function x(){axios.post(route("makeWithdrawal"),l).then(a=>{alert(a.data.message),n.closeModal()}).catch(a=>{console.log(a)})}return(a,e)=>(d(),c("div",null,[(d(),g(C,{to:"body"},[k(V,{visible:n.properties.visible},{default:M(()=>[s("div",B,[s("div",A,[s("div",I,[N,s("button",{class:"text-white",onClick:e[0]||(e[0]=t=>n.closeModal())},"X")]),s("div",T,[s("form",{onSubmit:e[5]||(e[5]=m(()=>{},["prevent"]))},[s("div",U,[D,r(s("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>l.agent=t),disabled:""},null,512),[[u,l.agent]])]),s("div",E,[L,r(s("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=t=>l.amount=t)},null,512),[[u,l.amount]])]),s("div",F,[K,r(s("input",{type:"number","onUpdate:modelValue":e[3]||(e[3]=t=>l.phone=t)},null,512),[[u,l.phone]])]),s("div",P,[$,r(s("input",{type:"password","onUpdate:modelValue":e[4]||(e[4]=t=>l.password=t)},null,512),[[u,l.password]])]),s("button",{class:"purple",type:"submit",onClick:m(x,["prevent"])},"Confirm",8,j)],32)]),z])])]),_:1},8,["visible"])])),H,O,X,s("ul",null,[(d(!0),c(w,null,b(v.Withdrawal.agents,t=>(d(),c("li",{onClick:m(_=>f(t.name),["prevent"]),class:"w-[95%] md:w-[340px] bg-white sm:m-[auto] md:m-[0px] mb-[20px] card-shadowed"},[s("div",G,[s("p",null,i(t.name[0]),1)]),s("section",null,[s("p",J,i(t.username),1),s("div",Q,[R,s("p",Y,"Ksh "+i(t.limit.lower_limit)+" - Ksh "+i(t.limit.upper_limit),1)]),s("div",Z,[ss,s("ul",ts,[(d(!0),c(w,null,b(t.methods,_=>(d(),c("li",null,[s("label",es,i(_.name)+" -",1),s("p",os,i(_.account),1)]))),256))])]),s("div",ls,[is,s("p",ns,i(t.wait_time.value)+" "+i(t.wait_time.unit),1)])])],8,q))),256))])]))}}),rs=y(ds,[["__scopeId","data-v-791033f7"]]);export{rs as default};
