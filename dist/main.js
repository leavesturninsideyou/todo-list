(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");if(a.length)for(var c=a.length-1;c>-1&&!t;)t=a[c--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"svgs/format-list-bulleted-square..svg",n=e.p+"svgs/information-variant-circle-outline..svg",a=e.p+"svgs/archive..svg",c=e.p+"svgs/calendar..svg",s=e.p+"svgs/calendar-arrow-right..svg",o=e.p+"svgs/star..svg",d=e.p+"svgs/check-bold..svg",l=e.p+"svgs/message-text-outline..svg",r=e.p+"svgs/star-outline..svg",i=e.p+"svgs/cog-outline..svg",u=e.p+"svgs/close-circle..svg";function m(e){let t=document.createElement("img");return t.src=e,t.classList.add("svg"),t}const p={param1:undefined,param2:undefined,param3:undefined,param4:undefined,param5:undefined,icon:function(e){return m(e)},domProject:function(e,n){return function(e,n){const a=document.querySelector("#projects-menu > ul");let c=document.createElement("li");c.setAttribute("data-pnum",n);let s=document.createElement("p");s.textContent=e;let o=m(t);c.append(o,s),a.append(c)}(e,n)},domTask:function(e,t,n,a,c){return function(e,t,n,a,c){const s=document.getElementById("tasks");let o=document.createElement("li");o.setAttribute("data-tnum",`${c}.${a}`);let d=document.createElement("div");d.classList.add("task");let u=document.createElement("div");u.classList.add("task-check");let p=document.createElement("p");p.textContent=e;let g=document.createElement("p");g.classList.add("parent-project-name"),g.textContent=`(${t})`,g.style.display="All Tasks"===n?"block":"none",d.append(u,p,g);let f=document.createElement("div");f.classList.add("task-config");let E=m(l);E.classList.add("notes");let v=m(r);v.classList.add("star");let k=m(i);k.classList.add("other"),f.append(E,v,k),o.append(d,f),s.append(o)}(e,t,n,a,c)},textField:function(e,t){return function(e,t){const n=document.createElement("li"),a=document.createElement("label");a.htmlFor=t,a.textContent=e,a.style.alignSelf="center";const c=document.createElement("input");return c.id=t,c.type="text",c.name=t,c.required=!0,n.append(a,c),n}(e,t)},textAreaField:function(e,t){return function(e,t){const n=document.createElement("li");n.style.flexDirection="column";const a=document.createElement("label");a.htmlFor=t,a.textContent=e;const c=document.createElement("textarea");return c.id=t,c.name=t,c.rows="10",c.cols="20",c.placeholder="Type some notes or a description here",n.append(a,c),n}(e,t)},dateField:function(e,t){return function(e,t){const n=document.createElement("li"),a=document.createElement("label");a.htmlFor=t,a.textContent=e,a.style.alignSelf="center",a.style.marginRight="-15px";const c=document.createElement("input");return c.id=t,c.name=t,c.type="date",n.append(a,c),n}(e,t)}};function g(e){const t=document.querySelector("form > ul");document.querySelector(".dialog-heading > p ").textContent=e,t.replaceChildren()}function f(e,t){return{title:e,selected:t,tasks:[]}}const E=[],v=f("All Tasks",!0);function k(){document.querySelector("#projects-menu > ul").replaceChildren(),E.forEach(((e,t)=>{t>0&&p.domProject(e.title,t)}))}function y(e){document.getElementById("tasks").replaceChildren(),e.tasks.forEach((t=>{const n=E.findIndex((e=>e.title===t.parentProject)),a=E[n].tasks.findIndex((e=>e.number===t.number));t.number=a,p.domTask(t.title,t.parentProject,e.title,a,n)}))}function h(e){let t=E[e];E.forEach((e=>{e.title!==t.title?e.selected=!1:e.selected=!0})),function(e){const t=document.getElementById("add-task"),n=document.querySelector(".project-name");e===E[0]?t.style.display="none":t.style.display="block",n.textContent=e.title}(t),y(t)}E.push(v),document.getElementById("content").append(function(){const e=document.createElement("header"),a=p.icon(t),c=document.createElement("p");c.id="header-text",c.textContent="To-Do List";const s=p.icon(n);return e.append(a,c,s),e}(),function(){const e=document.createElement("main");return e.append(function(){const e=document.createElement("nav");return e.append(function(){const e=document.createElement("div");e.id="filter-tasks";const t=document.createElement("p");t.classList.add("nav-header"),t.textContent="Filter Tasks";const n=document.createElement("ul");for(let e=0;e<5;e++){let t,l=document.createElement("li"),r=document.createElement("p");switch(e){case 0:t=a,r.textContent="All Tasks",l.classList.add("all-tasks");break;case 1:t=c,r.textContent="Today",l.classList.add("todays-tasks");break;case 2:t=s,r.textContent="7 Days",l.classList.add("7days-tasks");break;case 3:t=o,r.textContent="Starred",l.classList.add("starred-tasks");break;case 4:t=d,l.classList.add("completed-tasks"),r.textContent="Completed"}let i=p.icon(t);l.append(i,r),n.append(l)}return e.append(t,n),e}(),function(){const e=document.createElement("div");e.id="projects-menu";const t=document.createElement("p");t.classList.add("nav-header"),t.textContent="Projects";const n=document.createElement("ul"),a=document.createElement("button");return a.type="button",a.id="add-project",a.textContent="Add project",e.append(t,n,a),e}()),e}(),function(){const e=document.createElement("div");e.id="overview";const t=document.createElement("p");t.textContent="PLACEHOLDER",t.classList.add("project-name");const n=document.createElement("ul");n.id="tasks";const a=document.createElement("button");return a.type="button",a.id="add-task",a.textContent="Add task",e.append(t,n,a),e}()),e}(),function(){const e=document.createElement("dialog"),t=document.createElement("div");t.classList.add("dialog-heading");const n=document.createElement("p");n.textContent="placeholder";const a=p.icon(u);a.classList.add("close-dialog"),t.append(n,a);const c=document.createElement("form");c.method="dialog";const s=document.createElement("ul");return c.append(s),e.append(t,c),e}()),h(0),window.addEventListener("click",(function(e){const t=document.querySelector("dialog");"all-tasks"!==e.target.className&&"all-tasks"!==e.target.parentNode.className||h(0),e.target.dataset.pnum?h(e.target.dataset.pnum):e.target.parentNode.dataset.pnum&&h(e.target.parentNode.dataset.pnum),"add-task"===e.target.id&&(t.showModal(),function(){g("Add Task");const e=document.querySelector("form > ul"),t=p.textField("Title:","task-title"),n=p.textAreaField("Details:","task-details"),a=p.dateField("Due:","task-due"),c=document.createElement("button");c.type="submit",c.classList.add("submit-task"),c.textContent="Done",e.append(t,n,a,c)}()),"add-project"===e.target.id&&(t.showModal(),function(){g("Add Project");const e=document.querySelector("form > ul"),t=p.textField("Title:","project-title"),n=document.createElement("button");n.type="submit",n.classList.add("submit-project"),n.textContent="Done",e.append(t,n)}()),"submit-task"===e.target.className&&function(){const e=document.getElementById("task-title"),t=document.getElementById("task-details"),n=document.getElementById("task-due"),a=E.find((e=>!0===e.selected)),c=document.querySelector("dialog");if(""!==e.value){const s=function(e,t,n,a,c,s){return{title:e,details:t,dueDate:n,starred:!1,parentProject:c,number:void 0}}(e.value,t.value,n.value,0,a.title);a.tasks.push(s),v.tasks.push(s),c.close(),y(a)}}(),"submit-project"===e.target.className&&function(){const e=document.getElementById("project-title"),t=document.querySelector("dialog");if(""!==e.value){const n=f(e.value,!1);E.push(n),t.close(),k()}}(),"svg close-dialog"===e.target.className&&t.close(),"svg notes"===e.target.className&&(t.showModal(),function(){g("Details");const e=document.querySelector("form > ul"),t=p.textAreaField("","task-details"),n=document.createElement("button");n.type="submit",n.classList.add("confirm-details"),n.textContent="Done",e.append(t,n)}(),function(e){const t=document.getElementById("task-details"),n=document.querySelector("dialog"),a=e.split("."),c=a[0],s=a[1],o=E[c].tasks[s];n.setAttribute("data-tnum",e),t.textContent=o.details}(e.target.parentNode.parentNode.dataset.tnum)),"confirm-details"===e.target.className&&function(){const e=document.getElementById("task-details");if(1==confirm("Are you sure?")){const t=document.querySelector("dialog"),n=t.dataset.tnum.split("."),a=n[0],c=n[1];E[a].tasks[c].details=e.value,t.close()}}()})),k()})();