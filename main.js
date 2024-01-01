(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!e;)e=a[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t.p+"svgs/format-list-bulleted-square..svg",n=t.p+"svgs/information-variant-circle-outline..svg",a=t.p+"svgs/archive..svg",o=(t.p,t.p,t.p+"svgs/star..svg"),c=t.p+"svgs/check-bold..svg",s=t.p+"svgs/message-text-outline..svg",d=t.p+"svgs/star-outline..svg",r=t.p+"svgs/cog-outline..svg",l=t.p+"svgs/close-circle..svg";function u(t){let e=document.createElement("img");return e.src=t,e.classList.add("svg"),e}const i={param1:undefined,param2:undefined,param3:undefined,param4:undefined,param5:undefined,param6:undefined,icon:function(t){return u(t)},domProject:function(t,n){return function(t,n){const a=document.querySelector("#projects-menu > ul");let o=document.createElement("button");o.setAttribute("data-pnum",n),o.type="button";let c=document.createElement("p");c.textContent=t;let s=u(e);o.append(s,c),a.append(o)}(t,n)},domTask:function(t,e,n,a,c,l){return function(t,e,n,a,c,l){const i=document.getElementById("tasks");let m=document.createElement("li");m.setAttribute("data-tnum",`${c}.${a}`);let p=document.createElement("div");p.classList.add("task");let g=document.createElement("button");g.classList.add("task-check");let f=document.createElement("p");f.textContent=t;let E=document.createElement("p");E.classList.add("parent-project-name"),E.textContent=`(${e})`,E.style.display="All Tasks"===n?"block":"none",p.append(g,f,E);let y=document.createElement("div");y.classList.add("task-config");let k,v=u(s);v.classList.add("notes"),k=u(l?o:d),k.classList.add("star");let b=u(r);b.classList.add("other"),y.append(v,k,b),m.append(p,y),i.append(m)}(t,e,n,a,c,l)},textField:function(t,e){return function(t,e){const n=document.createElement("li"),a=document.createElement("label");a.htmlFor=e,a.textContent=t,a.style.alignSelf="center";const o=document.createElement("input");return o.id=e,o.type="text",o.name=e,o.required=!0,n.append(a,o),n}(t,e)},textAreaField:function(t,e){return function(t,e){const n=document.createElement("li");n.style.flexDirection="column";const a=document.createElement("label");a.htmlFor=e,a.textContent=t;const o=document.createElement("textarea");return o.id=e,o.name=e,o.rows="10",o.cols="20",o.placeholder="Type some notes or a description here",n.append(a,o),n}(t,e)},dateField:function(t,e){return function(t,e){const n=document.createElement("li"),a=document.createElement("label");a.htmlFor=e,a.textContent=t,a.style.alignSelf="center",a.style.marginRight="-15px";const o=document.createElement("input");return o.id=e,o.name=e,o.type="date",n.append(a,o),n}(t,e)}};function m(t){const e=document.querySelector("form > ul");document.querySelector(".dialog-heading > p ").textContent=t,e.replaceChildren()}const p=[],g=f("All Tasks",!0);function f(t,e){return{title:t,selected:e,tasks:[]}}p.push(g);const E=p,y=E[0];function k(t){const e=t.split("."),n=e[0],a=e[1];return E[n].tasks[a]}function v(){return k(document.querySelector("dialog").dataset.tnum)}function b(t){const e=t.split(".")[0];return E.find((t=>t===E[e]))}function h(){document.querySelector("#projects-menu > ul").replaceChildren(),E.forEach(((t,e)=>{e>0&&i.domProject(t.title,e)}))}function x(t){document.getElementById("tasks").replaceChildren(),t.tasks.forEach((e=>{const n=E.indexOf(t),a=E[n].tasks.findIndex((t=>t.number===e.number));if(e.number=a,e.starred){let o=!0;i.domTask(e.title,e.parentProject,t.title,a,n,o)}else i.domTask(e.title,e.parentProject,t.title,a,n)}))}function C(t){let e=E[t];E.forEach((t=>{t.selected=t===e})),function(t){const e=document.getElementById("add-task"),n=document.querySelector(".project-name");t===E[0]?e.style.display="none":e.style.display="block",n.textContent=t.title}(e),x(e)}document.getElementById("content").append(function(){const t=document.createElement("header"),a=i.icon(e),o=document.createElement("p");o.id="header-text",o.textContent="To-Do List";const c=i.icon(n);return t.append(a,o,c),t}(),function(){const t=document.createElement("main");return t.append(function(){const t=document.createElement("nav");return t.append(function(){const t=document.createElement("div");t.id="filter-tasks";const e=document.createElement("p");e.classList.add("nav-header"),e.textContent="Filter Tasks";const n=document.createElement("ul");for(let t=0;t<3;t++){let e=document.createElement("button");e.type="button";let s,d=document.createElement("p");switch(t){case 0:s=a,d.textContent="All Tasks",e.classList.add("all-tasks");break;case 1:s=o,d.textContent="Starred",e.classList.add("starred-tasks");break;case 2:s=c,e.classList.add("completed-tasks"),d.textContent="Completed"}let r=i.icon(s);e.append(r,d),n.append(e)}return t.append(e,n),t}(),function(){const t=document.createElement("div");t.id="projects-menu";const e=document.createElement("p");e.classList.add("nav-header"),e.textContent="Projects";const n=document.createElement("ul"),a=document.createElement("button");return a.type="button",a.id="add-project",a.textContent="Add project",t.append(e,n,a),t}()),t}(),function(){const t=document.createElement("div");t.id="overview";const e=document.createElement("p");e.textContent="PLACEHOLDER",e.classList.add("project-name");const n=document.createElement("ul");n.id="tasks";const a=document.createElement("button");return a.type="button",a.id="add-task",a.textContent="Add task",t.append(e,n,a),t}()),t}(),function(){const t=document.createElement("dialog"),e=document.createElement("div");e.classList.add("dialog-heading");const n=document.createElement("p");n.textContent="placeholder";const a=i.icon(l);a.classList.add("close-dialog"),e.append(n,a);const o=document.createElement("form");o.method="dialog";const c=document.createElement("ul");return o.append(c),t.append(e,o),t}()),C(0),window.addEventListener("click",(function(t){const e=document.querySelector("dialog");var n;"all-tasks"!==t.target.className&&"all-tasks"!==t.target.parentNode.className||C(0),t.target.dataset.pnum?C(t.target.dataset.pnum):t.target.parentNode.dataset.pnum&&C(t.target.parentNode.dataset.pnum),"add-task"===t.target.id&&(e.showModal(),function(){m("Add Task");const t=document.querySelector("form > ul"),e=i.textField("Title:","task-title"),n=i.textAreaField("Details:","task-details"),a=i.dateField("Due:","task-due"),o=document.createElement("button");o.type="submit",o.classList.add("submit-task"),o.textContent="Done",t.append(e,n,a,o)}()),"add-project"===t.target.id&&(e.showModal(),function(){m("Add Project");const t=document.querySelector("form > ul"),e=i.textField("Title:","project-title"),n=document.createElement("button");n.type="submit",n.classList.add("submit-project"),n.textContent="Done",t.append(e,n)}()),"submit-task"===t.target.className&&function(){const t=document.getElementById("task-title"),e=document.getElementById("task-details"),n=document.getElementById("task-due"),a=E.find((t=>!0===t.selected)),o=document.querySelector("dialog");if(""!==t.value){const c=function(t,e,n,a,o,c){return{title:t,details:e,dueDate:n,starred:!1,parentProject:o,number:void 0}}(t.value,e.value,n.value,0,a.title);a.tasks.push(c),y.tasks.push(c),o.close(),x(a)}}(),"submit-project"===t.target.className&&function(){const t=document.getElementById("project-title"),e=document.querySelector("dialog");if(""!==t.value){const n=f(t.value,!1);E.push(n),e.close(),h()}}(),"svg close-dialog"===t.target.className&&e.close(),"svg notes"===t.target.className&&(e.showModal(),function(){m("Details");const t=document.querySelector("form > ul"),e=i.textAreaField("","task-details"),n=document.createElement("button");n.type="submit",n.classList.add("confirm-details"),n.textContent="Done",t.append(e,n)}(),function(t){const e=document.getElementById("task-details"),n=document.querySelector("dialog"),a=k(t);n.setAttribute("data-tnum",t),e.textContent=a.details}(t.target.parentNode.parentNode.dataset.tnum)),"confirm-details"===t.target.className&&function(){const t=document.querySelector("dialog"),e=document.getElementById("task-details"),n=v();n.details!==e.value?!0===confirm("Confirm Changes")&&(n.details=e.value,t.close()):t.close()}(),"svg star"===t.target.className&&function(t){const e=k(t),n=b(t);e.starred?e.starred=!1:e.starred=!0,x(n)}(t.target.parentNode.parentNode.dataset.tnum),"svg other"===t.target.className&&(e.showModal(),function(){m("Task Settings");const t=document.querySelector("form > ul"),e=document.createElement("button");e.type="button",e.classList.add("rename-task"),e.textContent="Rename";const n=document.createElement("button");n.type="button",n.classList.add("delete-task"),n.textContent="Delete",t.append(e,n)}(),n=t.target.parentNode.parentNode.dataset.tnum,document.querySelector("dialog").setAttribute("data-tnum",n)),"rename-task"===t.target.className&&(e.showModal(),function(){const t=document.querySelector("form > ul");t.replaceChildren();const e=i.textField("Title:","new-task-title"),n=document.createElement("button");n.type="submit",n.classList.add("confirm-new-task-title"),n.textContent="Done",t.append(e,n)}(),function(){const t=document.getElementById("new-task-title"),e=(document.querySelector("dialog"),v());t.value=e.title}()),"confirm-new-task-title"===t.target.className&&function(){const t=document.querySelector("dialog"),e=document.getElementById("new-task-title"),n=t.dataset.tnum,a=v(),o=b(n);a.title!==e.value?!0===confirm("Confirm Changes")&&(a.title=e.value,t.close(),x(o)):t.close()}()})),h()})();