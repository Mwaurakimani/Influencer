import{V as j}from"./ViewProject-f22408b1.js";import{_ as g,i as k,z as _,q as D,J as m,c as f,k as h,b as n,T as P,l as v,F as w,H as y,r as i,o as p,a as V,w as x,f as C,I as u}from"./app-6beb027d.js";import"./marketer-af2eb23a.js";import"./Modal-5bdc59e0.js";import"./followersFormat-58554cdc.js";import"./pdf-10d8791c.js";import"./convertDate-873f89eb.js";import"./MobileProjectBreakdownDisplayCard-cdef13d7.js";import"./Projects-10ad0c97.js";import"./MobileProjectDisplayCard-3c6bb014.js";const M={setup(o){u("activeTab","All Projects"),u("pageName","All Projects");const a=k(),s=_({is_assigned:t(),assignment:d()});D(()=>{m().props.errors!=null&&m().props.errors.WorkspaceError!=null&&(c[0]=m().props.errors)});function t(){let e=!1;if(o.project!=null&&o.project.bids!=null){for(let r of o.project.bids)if(r.assignment!=null){e=!0;break}}return e}function d(){let e=null;if(o.project!=null&&o.project.bids!=null){for(let r of o.project.bids)if(r.assignment!=null){e=r.assignment;break}}return e}u("assignmentDetails",s);let c=_([]);function l(){axios.post(y("InfluencerMarkAsComplete",s)).then(e=>{e.data.status&&window.location.reload()}).catch(e=>{})}return{auth:a,is_assigned:t,errorBag:c,assignmentDetails:s,markAsComplete:l}},components:{ViewProject:j},props:["project","marketer"],inject:["currentUser"]},B={key:0,class:"flex justify-end mb-[10px]"};function A(o,a,s,t,d,c){const l=i("MobileDashboardLayout"),e=i("MobileDashboardHeader"),r=i("ViewProject",!0),b=i("DesktopDashboardLayout");return p(),f(w,null,[(p(),h(P,{to:"body"},[n(l,{activePage:"Projects"})])),n(e,{backButton:!0,title:"Projects"}),n(b,null,{default:v(()=>[t.assignmentDetails&&t.assignmentDetails.is_assigned&&t.assignmentDetails.assignment.marketer_status=="complete"&&t.assignmentDetails.assignment.influencer_status!="complete"?(p(),f("div",B,[V("button",{onClick:a[0]||(a[0]=x(I=>t.markAsComplete(),["prevent"])),class:"purple p4"},"Mark Project as Complete")])):C("",!0),n(r,{project:s.project,marketer:s.marketer,display:"Influencer"},null,8,["project","marketer"])]),_:1})],64)}const U=g(M,[["render",A],["__scopeId","data-v-b5734ce7"]]);export{U as default};
