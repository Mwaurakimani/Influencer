import{_ as d,D as p,c as u,a as t,b as n,F as m,o as _,p as h,g as x,r as i}from"./app-7ce278c5.js";const g={setup(){return{defaults:p()}},inject:["currentUser"],data(){return{activeTab:"Influencer"}},methods:{changeTagLine(){let e=$(event.target),a=e.parent();$.each(a.find("li"),function(c,s){$(s).removeClass("active"),$(s).text()==e.text()&&(activeTab.value=e.text(),$(s).addClass("active"))})}}},o=e=>(h("data-v-18179c11"),e=e(),x(),e),v={class:"banner flex justify-around align-middle",style:{"align-items":"center",height:"100vh"}},f={class:"flex flex-col justify-center align-middle w-[500px]"},b=o(()=>t("h3",{class:"text-center text-white mb-[20px]"},"Welcome to Vumisha where brands and influencers make magic happen. . .",-1)),y=["src"],w=o(()=>t("p",{class:"text-white p-[10px]"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eius esse repudiandae tempora. Atque deleniti dolorum, ducimus est eum ex facere itaque, libero nihil quo sed suscipit tempore veniam. Unde?",-1)),k=o(()=>t("div",{class:"banner-image"},null,-1)),N=o(()=>t("section",{class:"d-hide"},[t("div",{class:"w-[550px] h-[360px] bg-white",style:{"border-radius":"8px","box-shadow":"0 0 8px lightgray"}})],-1));function I(e,a,c,s,C,V){const l=i("MobileNavigationComponent"),r=i("DesktopNavigationVue");return _(),u(m,null,[t("nav",null,[n(l,{"active-nav-button":"Home"}),n(r,{style:{position:"absolute"},class:"w-[100%]",alter:!0,activeNavButton:"Home",static:!0})]),t("div",v,[t("section",f,[b,t("img",{class:"p-[10px] w-[90px] mb-[10px] mx-[auto] h-[90px] bg-white",style:{"border-radius":"50%",display:"block"},src:s.defaults.systemImages+"/logos/colored/icon-colored.svg"},null,8,y),w,k]),N])],64)}const B=d(g,[["render",I],["__scopeId","data-v-18179c11"]]);export{B as default};
