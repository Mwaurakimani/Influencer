import{_ as M,i as F,B as W,j as C,z as _,q as T,J as p,c as g,k as r,b as i,T as L,l as N,F as j,y as V,r as u,o as s,a as t,w as d,x as v,f as b,I as h}from"./app-e3991b4b.js";import{M as $}from"./Modal-09ee0d24.js";import z from"./BalanceComponent-9ec25c03.js";import E from"./Deposit-e985d9a7.js";import H from"./Withdraw-660a3780.js";const I={class:""},U={class:"w-[100%] h-[50px] items-center flex justify-around"},q={class:"container h-[100vh]"},J={__name:"Finance",props:["finance"],setup(w){const l=w,y=V("currentUser"),f=F();y!=null&&f.authenticate(),W(f);const e=C("Balance");h("activeTab","Finance"),h("pageName","Finance");const o={properties:_({visible:!1,bid:null}),openModal:n=>{document.body.style.overflow="hidden",o.properties.visible=!0,o.properties.bid=n},closeModal:()=>{document.body.style.overflow="auto",o.properties.visible=!1,o.properties.bid=null}};let D=_([]);T(()=>{p().props.errors!=null&&p().props.errors.WorkspaceError!=null&&(D[0]=p().props.errors)});function c(n){e.value=n}return(n,a)=>{const k=u("MobileDashboardLayout"),B=u("MobileDashboardHeader"),x=u("DesktopDashbooardLayout");return s(),g(j,null,[(s(),r(L,{to:"body"},[i($,{visible:o.properties.visible},null,8,["visible"]),i(k,{activePage:"Finance"})])),i(B,{backButton:!0,title:"Finance"}),i(x,null,{default:N(()=>[t("nav",I,[t("ul",U,[t("li",{onClick:a[0]||(a[0]=d(m=>c("Balance"),["prevent"])),class:v(["w-[33.3%]","text-center",e.value==="Balance"?"active-tab":""])},"Balance ",2),t("li",{onClick:a[1]||(a[1]=d(m=>c("Deposit"),["prevent"])),class:v(["w-[33.3%]","text-center",e.value==="Deposit"?"active-tab":""])},"Deposit ",2),t("li",{onClick:a[2]||(a[2]=d(m=>c("Withdraw"),["prevent"])),class:v(["w-[33.3%]","text-center",e.value==="Withdraw"?"active-tab":""])},"Withdraw ",2)])]),t("div",q,[e.value==="Balance"?(s(),r(z,{key:0,balance:l.finance.Balance},null,8,["balance"])):b("",!0),e.value==="Deposit"?(s(),r(E,{key:1,Deposit:l.finance.Deposit},null,8,["Deposit"])):b("",!0),e.value==="Withdraw"?(s(),r(H,{key:2,Withdrawal:l.finance.Withdrawal},null,8,["Withdrawal"])):b("",!0)])]),_:1})],64)}}},K=M(J,[["__scopeId","data-v-c14b1568"]]);export{K as default};