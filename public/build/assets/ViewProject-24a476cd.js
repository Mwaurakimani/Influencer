import{V as j}from"./ViewProject-3cf16631.js";import{_ as g,i as k,z as _,q as h,J as p,c as f,k as D,b as i,T as P,l as v,F as w,H as y,r as c,o as u,a as M,w as V,f as x,I as d}from"./app-b3887409.js";import"./marketer-9c158f59.js";import"./Modal-63cdc757.js";import"./followersFormat-58554cdc.js";import"./pdf-503b6162.js";import"./MobileProjectBreakdownDisplayCard-a51c1a32.js";const C={setup(t){d("activeTab","All Projects"),d("pageName","All Projects");const a=k(),o=_({is_assigned:l(),assignment:m()});h(()=>{p().props.errors!=null&&p().props.errors.WorkspaceError!=null&&(n[0]=p().props.errors)});function r(){axios.post(y("MarketerMarkAsComplete",o)).then(e=>{e.data.status&&window.location.reload()}).catch(e=>{})}function l(){let e=!1;if(t.project!=null&&t.project.bids!=null){for(let s of t.project.bids)if(s.assignment!=null){e=!0;break}}return e}function m(){let e=null;if(t.project!=null&&t.project.bids!=null){for(let s of t.project.bids)if(s.assignment!=null){e=s.assignment;break}}return e}d("assignmentDetails",o);let n=_([]);return{auth:a,is_assigned:l,assignmentDetails:o,errorBag:n,markAsComplete:r}},components:{ViewProject:j},props:["project"],inject:["currentUser"]},B={key:0,class:"flex justify-end mb-[10px]"};function A(t,a,o,r,l,m){const n=c("MobileDashboardLayout"),e=c("MobileDashboardHeader"),s=c("ViewProject",!0),b=c("DesktopDashbooardLayout");return u(),f(w,null,[(u(),D(P,{to:"body"},[i(n,{activePage:"Projects"})])),i(e,{backButton:!0,title:"Projects"}),i(b,null,{default:v(()=>[r.assignmentDetails&&r.assignmentDetails.is_assigned&&o.project.status!="completed"?(u(),f("div",B,[M("button",{onClick:a[0]||(a[0]=V(L=>r.markAsComplete(),["prevent"])),class:"purple p4"},"Mark Project as Complete ")])):x("",!0),i(s,{project:o.project,display:"Marketer"},null,8,["project"])]),_:1})],64)}const z=g(C,[["render",A],["__scopeId","data-v-07b6f9ae"]]);export{z as default};