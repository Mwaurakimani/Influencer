import{_ as p,c,a as e,t,F as i,s as h,o,f as n,p as r,g as x,A as a}from"./app-e3991b4b.js";const f={name:"BalanceComponent",props:["balance"]},l=d=>(r("data-v-b202593f"),d=d(),x(),d),m={class:"bg-white balance flex flex-wrap card-shadowed mb-[20px] w-[95%] mx-[auto]"},u={class:"w-[40%] m-[5%] flex flex-col justify-center items-center"},y=l(()=>e("h6",{class:"text-center mb-[5px] text-grey-200"},[a(" Credit "),e("br"),a(" Balance ")],-1)),b={class:"p2 text-center"},g={class:"w-[40%] m-[5%] flex flex-col justify-center items-center"},w=l(()=>e("h6",{class:"text-center mb-[5px] text-grey-200"},[a(" Escrow "),e("br"),a(" Value ")],-1)),v={class:"p2 text-center"},k={class:"w-[40%] m-[5%] flex flex-col justify-center items-center"},B=l(()=>e("h6",{class:"text-center mb-[5px] text-grey-200"},[a(" Pending "),e("br"),a(" Deposit ")],-1)),C={class:"p2 text-center"},V={class:"w-[40%] m-[5%] flex flex-col justify-center items-center"},j=l(()=>e("h6",{class:"text-center mb-[5px] text-grey-200"},[a(" Pending "),e("br"),a(" Withdrawal ")],-1)),K={class:"p2 text-center"},D=l(()=>e("h5",{class:"w-[96%] mx-[auto] mb-[20px] text-grey-200"},"Transactions",-1)),I={class:"p-[10px]"},S={class:"flex bg-white mb-[10px] justify-between p-[10px] card-shadowed",style:{width:"100%",gap:"5px"}},A={class:"grow",style:{width:"calc(100% - 100px)"}},N={key:0,class:"flex items-center"},T=l(()=>e("label",{class:"p3 p-[10px]"},"Type:",-1)),E={class:"p3"},F={key:1,class:"flex items-center"},P=l(()=>e("label",{class:"p3 p-[10px]"},"Agent:",-1)),W={class:"p3"},L={key:2,class:"flex items-center"},R=l(()=>e("label",{class:"p3 p-[10px]"},"Value:",-1)),q={class:"p3"},z={key:3,class:"flex items-center"},G=l(()=>e("label",{class:"p3 p-[10px]"},"Ref:",-1)),H={class:"p3"},J={key:4,class:"flex items-center"},M=l(()=>e("label",{class:"p3 p-[10px]"},"Date:",-1)),O={class:"p3"},Q={style:{width:"100px"}},U={key:0,class:"p3",style:{color:"var(--light-green)"}},X={key:1,class:"p3"};function Y(d,Z,_,$,ee,se){return o(),c(i,null,[e("div",m,[e("div",u,[y,e("p",b,"Ksh "+t(_.balance.creditBalance),1)]),e("div",g,[w,e("p",v,"Ksh "+t(_.balance.escrowValue),1)]),e("div",k,[B,e("p",C,"Ksh "+t(_.balance.pendingDeposits),1)]),e("div",V,[j,e("p",K,"Ksh "+t(_.balance.pendingWithdrawals),1)])]),D,e("ul",I,[(o(!0),c(i,null,h(_.balance.transactions,s=>(o(),c("li",S,[e("div",A,[s.type?(o(),c("div",N,[T,e("p",E,t(s.type),1)])):n("",!0),s.type?(o(),c("div",F,[P,e("p",W,t(s.Agent),1)])):n("",!0),s.type?(o(),c("div",L,[R,e("p",q,"Ksh "+t(s.value),1)])):n("",!0),s.type?(o(),c("div",z,[G,e("p",H,t(s.ref),1)])):n("",!0),s.type?(o(),c("div",J,[M,e("p",O,t(s.date),1)])):n("",!0)]),e("div",Q,[s.status=="Confirmed"?(o(),c("p",U,t(s.status),1)):(o(),c("p",X,t(s.status),1))])]))),256))])],64)}const ce=p(f,[["render",Y],["__scopeId","data-v-b202593f"]]);export{ce as default};
