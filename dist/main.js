(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!t;)t=a[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"svgs/format-list-bulleted-square..svg",n=e.p+"svgs/information-variant-circle-outline..svg",a=e.p+"svgs/archive..svg",o=(e.p,e.p,e.p+"svgs/star..svg"),c=e.p+"svgs/check-bold..svg",s=e.p+"svgs/message-text-outline..svg",d=e.p+"svgs/star-outline..svg",l=e.p+"svgs/cog-outline..svg",r=e.p+"svgs/close-circle..svg";function u(e){let t=document.createElement("img");return t.src=e,t.classList.add("svg"),t}const i={param1:undefined,param2:undefined,param3:undefined,param4:undefined,param5:undefined,param6:undefined,icon:function(e){return u(e)},domProject:function(e,n){return function(e,n){const a=document.querySelector("#projects-menu > ul");let o=document.createElement("button");o.setAttribute("data-pnum",n),o.type="button";let c=document.createElement("p");c.textContent=e;let s=u(t);o.append(s,c),a.append(o)}(e,n)},domTask:function(e,t,n,a,c,r){return function(e,t,n,a,c,r){const i=document.getElementById("tasks");let m=document.createElement("li");m.setAttribute("data-tnum",`${c}.${a}`);let p=document.createElement("div");p.classList.add("task");let g=document.createElement("button");g.classList.add("task-check");let f=document.createElement("p");f.textContent=e;let E=document.createElement("p");E.classList.add("parent-project-name"),E.textContent=`(${t})`,E.style.display="All Tasks"===n?"block":"none",p.append(g,f,E);let k=document.createElement("div");k.classList.add("task-config");let y,v=u(s);v.classList.add("notes"),y=u(r?o:d),y.classList.add("star");let b=u(l);b.classList.add("other"),k.append(v,y,b),m.append(p,k),i.append(m)}(e,t,n,a,c,r)},textField:function(e,t){return function(e,t){const n=document.createElement("li"),a=document.createElement("label");a.htmlFor=t,a.textContent=e,a.style.alignSelf="center";const o=document.createElement("input");return o.id=t,o.type="text",o.name=t,o.required=!0,n.append(a,o),n}(e,t)},textAreaField:function(e,t){return function(e,t){const n=document.createElement("li");n.style.flexDirection="column";const a=document.createElement("label");a.htmlFor=t,a.textContent=e;const o=document.createElement("textarea");return o.id=t,o.name=t,o.rows="10",o.cols="20",o.placeholder="Type some notes or a description here",n.append(a,o),n}(e,t)},dateField:function(e,t){return function(e,t){const n=document.createElement("li"),a=document.createElement("label");a.htmlFor=t,a.textContent=e,a.style.alignSelf="center",a.style.marginRight="-15px";const o=document.createElement("input");return o.id=t,o.name=t,o.type="date",n.append(a,o),n}(e,t)}};function m(e){const t=document.querySelector("form > ul");document.querySelector(".dialog-heading > p ").textContent=e,t.replaceChildren()}const p=[],g=k("All Tasks",!0),f=k("Starred",!1),E=k("Completed",!1);function k(e,t){return{title:e,selected:t,tasks:[]}}p.push(g,f,E);const y=p,v=y[0],b=y[1];function x(e){const t=e.split("."),n=t[0],a=t[1];return y[n].tasks[a]}function h(){return x(document.querySelector("dialog").dataset.tnum)}function C(){document.querySelector("#projects-menu > ul").replaceChildren(),y.forEach(((e,t)=>{t>2&&i.domProject(e.title,t)}))}function S(e){document.getElementById("tasks").replaceChildren(),e.tasks.forEach((t=>{const n=t.ppIndex,a=y[n].tasks.findIndex((e=>e.number===t.number));if(t.number=a,t.starred){let o=!0;i.domTask(t.title,t.parentProject,e.title,a,n,o)}else i.domTask(t.title,t.parentProject,e.title,a,n)}))}function q(e){let t=y[e];y.forEach((e=>{e.selected=e===t})),function(e){const t=document.getElementById("add-task"),n=document.querySelector(".project-name");e.index<3?t.style.display="none":t.style.display="block",n.textContent=e.title}(t),S(t)}y[2],document.getElementById("content").append(function(){const e=document.createElement("header"),a=i.icon(t),o=document.createElement("p");o.id="header-text",o.textContent="To-Do List";const c=i.icon(n);return e.append(a,o,c),e}(),function(){const e=document.createElement("main");return e.append(function(){const e=document.createElement("nav");return e.append(function(){const e=document.createElement("div");e.id="filter-tasks";const t=document.createElement("p");t.classList.add("nav-header"),t.textContent="Filter Tasks";const n=document.createElement("ul");for(let e=0;e<3;e++){let t=document.createElement("button");t.type="button";let s,d=document.createElement("p");switch(e){case 0:s=a,d.textContent="All Tasks",t.classList.add("all-tasks");break;case 1:s=o,d.textContent="Starred",t.classList.add("starred-tasks");break;case 2:s=c,t.classList.add("completed-tasks"),d.textContent="Completed"}let l=i.icon(s);t.append(l,d),n.append(t)}return e.append(t,n),e}(),function(){const e=document.createElement("div");e.id="projects-menu";const t=document.createElement("p");t.classList.add("nav-header"),t.textContent="Projects";const n=document.createElement("ul"),a=document.createElement("button");return a.type="button",a.id="add-project",a.textContent="Add project",e.append(t,n,a),e}()),e}(),function(){const e=document.createElement("div");e.id="overview";const t=document.createElement("p");t.textContent="PLACEHOLDER",t.classList.add("project-name");const n=document.createElement("ul");n.id="tasks";const a=document.createElement("button");return a.type="button",a.id="add-task",a.textContent="Add task",e.append(t,n,a),e}()),e}(),function(){const e=document.createElement("dialog"),t=document.createElement("div");t.classList.add("dialog-heading");const n=document.createElement("p");n.textContent="placeholder";const a=i.icon(r);a.classList.add("close-dialog"),t.append(n,a);const o=document.createElement("form");o.method="dialog";const c=document.createElement("ul");return o.append(c),e.append(t,o),e}()),q(0),window.addEventListener("click",(function(e){var t;"all-tasks"!==e.target.className&&"all-tasks"!==e.target.parentNode.className||q(0),e.target.dataset.pnum?q(e.target.dataset.pnum):e.target.parentNode.dataset.pnum&&q(e.target.parentNode.dataset.pnum),"add-task"===e.target.id&&function(){document.querySelector("dialog").showModal(),m("Add Task");const e=document.querySelector("form > ul"),t=i.textField("Title:","task-title"),n=i.textAreaField("Details:","task-details"),a=i.dateField("Due:","task-due"),o=document.createElement("button");o.type="submit",o.classList.add("submit-task"),o.textContent="Done",e.append(t,n,a,o)}(),"add-project"===e.target.id&&function(){document.querySelector("dialog").showModal(),m("Add Project");const e=document.querySelector("form > ul"),t=i.textField("Title:","project-title"),n=document.createElement("button");n.type="submit",n.classList.add("submit-project"),n.textContent="Done",e.append(t,n)}(),"submit-task"===e.target.className&&function(){const e=document.getElementById("task-title"),t=document.getElementById("task-details"),n=document.getElementById("task-due"),a=y.find((e=>!0===e.selected)),o=y.findIndex((e=>e.selected)),c=document.querySelector("dialog");if(""!==e.value){const s=function(e,t,n,a,o,c,s){return{title:e,details:t,dueDate:n,starred:!1,parentProject:o,number:"0",ppIndex:s}}(e.value,t.value,n.value,0,a.title,0,o);a.tasks.push(s),v.tasks.push(s),c.close(),S(a)}}(),"submit-project"===e.target.className&&function(){const e=document.getElementById("project-title"),t=document.querySelector("dialog");if(""!==e.value){const n=k(e.value,!1);y.push(n),t.close(),C()}}(),"svg close-dialog"===e.target.className&&document.querySelector("dialog").close(),"svg notes"===e.target.className&&(function(){document.querySelector("dialog").showModal(),m("Details");const e=document.querySelector("form > ul"),t=i.textAreaField("","task-details"),n=document.createElement("button");n.type="submit",n.classList.add("confirm-details"),n.textContent="Done",e.append(t,n)}(),function(e){const t=document.getElementById("task-details"),n=document.querySelector("dialog"),a=x(e);n.setAttribute("data-tnum",e),t.textContent=a.details}(e.target.parentNode.parentNode.dataset.tnum)),"confirm-details"===e.target.className&&function(){const e=document.querySelector("dialog"),t=document.getElementById("task-details"),n=h();n.details!==t.value?!0===confirm("Confirm Changes")&&(n.details=t.value,e.close()):e.close()}(),"svg star"===e.target.className&&function(e){const t=x(e);console.log(t);const n=y.find((e=>!0===e.selected));t.starred?(t.starred=!1,b.tasks.splice(t.index,1)):(t.starred=!0,b.tasks.push(t)),S(n)}(e.target.parentNode.parentNode.dataset.tnum),"svg other"===e.target.className&&(function(){document.querySelector("dialog").showModal(),m("Task Settings");const e=document.querySelector("form > ul"),t=document.createElement("button");t.type="button",t.classList.add("rename-task"),t.textContent="Rename";const n=document.createElement("button");n.type="button",n.classList.add("delete-task"),n.textContent="Delete",e.append(t,n)}(),t=e.target.parentNode.parentNode.dataset.tnum,document.querySelector("dialog").setAttribute("data-tnum",t)),"rename-task"===e.target.className&&(function(){document.querySelector("dialog").showModal();const e=document.querySelector("form > ul");e.replaceChildren();const t=i.textField("Title:","new-task-title"),n=document.createElement("button");n.type="submit",n.classList.add("confirm-new-task-title"),n.textContent="Done",e.append(t,n)}(),function(){const e=document.getElementById("new-task-title"),t=h();e.value=t.title}()),"confirm-new-task-title"===e.target.className&&function(){const e=document.querySelector("dialog"),t=document.getElementById("new-task-title"),n=h(),a=y[n.ppIndex];n.title!==t.value?!0===confirm("Confirm Changes")&&(n.title=t.value,e.close(),S(a)):e.close()}(),"delete-task"===e.target.className&&function(){const e=document.querySelector("dialog"),t=h(),n=y[t.ppIndex];if(!0===confirm("Confirm Delete Task")){const a=y[0].tasks.findIndex((e=>e.ppIndex===t.ppIndex&&e.number===t.number));n.tasks.splice(t.index,1),y[0].tasks.splice(a,1),S(n),e.close()}else e.close()}()})),C()})();