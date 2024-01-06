(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!t;)t=a[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"svgs/format-list-bulleted-square..svg",n=e.p+"svgs/information-variant-circle-outline..svg",a=e.p+"svgs/archive..svg",o=(e.p,e.p,e.p+"svgs/star..svg"),c=e.p+"svgs/check-bold..svg",s=e.p+"svgs/message-text-outline..svg",d=e.p+"svgs/star-outline..svg",l=e.p+"svgs/cog-outline..svg",r=e.p+"svgs/close-circle..svg";function u(e){let t=document.createElement("img");return t.src=e,t.classList.add("svg"),t}const i={param1:undefined,param2:undefined,param3:undefined,param4:undefined,param5:undefined,param6:undefined,icon:function(e){return u(e)},domProject:function(e,n){return function(e,n){const a=document.querySelector("#projects-menu > ul");let o=document.createElement("button");o.setAttribute("data-pnum",n),o.type="button";let c=document.createElement("p");c.textContent=e;let s=u(t);o.append(s,c),a.append(o)}(e,n)},domTask:function(e,t,n,a,c,r){return function(e,t,n,a,c,r){const i=document.getElementById("tasks");let m=document.createElement("li");m.setAttribute("data-tnum",`${c}.${a}`);let p=document.createElement("div");p.classList.add("task");let g=document.createElement("button");g.classList.add("task-check");let f=document.createElement("p");f.textContent=e;let k=document.createElement("p");k.classList.add("parent-project-name"),k.textContent=`(${t})`,k.style.display="All Tasks"===n||"Starred"===n||"Completed"===n?"block":"none",p.append(g,f,k);let E=document.createElement("div");E.classList.add("task-config");let y,b=u(s);b.classList.add("notes"),y=u(r?o:d),y.classList.add("star");let v=u(l);v.classList.add("other"),E.append(b,y,v),m.append(p,E),i.append(m)}(e,t,n,a,c,r)},textField:function(e,t){return function(e,t){const n=document.createElement("li"),a=document.createElement("label");a.htmlFor=t,a.textContent=e,a.style.alignSelf="center";const o=document.createElement("input");return o.id=t,o.type="text",o.name=t,o.required=!0,n.append(a,o),n}(e,t)},textAreaField:function(e,t){return function(e,t){const n=document.createElement("li");n.style.flexDirection="column";const a=document.createElement("label");a.htmlFor=t,a.textContent=e;const o=document.createElement("textarea");return o.id=t,o.name=t,o.rows="10",o.cols="20",o.placeholder="Type some notes or a description here",n.append(a,o),n}(e,t)},dateField:function(e,t){return function(e,t){const n=document.createElement("li"),a=document.createElement("label");a.htmlFor=t,a.textContent=e,a.style.alignSelf="center",a.style.marginRight="-15px";const o=document.createElement("input");return o.id=t,o.name=t,o.type="date",n.append(a,o),n}(e,t)},domCompletedTask:function(e,t,n,a){return function(e,t,n,a,o){const c=document.getElementById("tasks");let d=document.createElement("li");d.classList.add("completed"),d.setAttribute("data-tnum",`${n}.${a}`);let l=document.createElement("div");l.classList.add("task");let r=document.createElement("button");r.classList.add("task-check","completed"),r.style.userSelect="none";let i=document.createElement("p");i.textContent=e;let m=document.createElement("p");m.classList.add("parent-project-name"),m.textContent=`(${t})`,l.append(r,i,m);let p=document.createElement("div");p.classList.add("task-config");let g=u(s);g.classList.add("notes","completed"),p.append(g),d.append(l,p),c.append(d)}(e,t,n,a)}};function m(e){const t=document.querySelector("form > ul");document.querySelector(".dialog-heading > p ").textContent=e,t.replaceChildren()}const p=[],g=E("All Tasks",!0),f=E("Starred",!1),k=E("Completed",!1);function E(e,t){return{title:e,selected:t,tasks:[]}}p.push(g,f,k);const y=p,b=y[0],v=y[1],h=y[2];function x(e){const t=e.split("."),n=t[0],a=t[1];return y[n].tasks[a]}function C(){return x(document.querySelector("dialog").dataset.tnum)}function S(){document.querySelector("#projects-menu > ul").replaceChildren(),y.forEach(((e,t)=>{t>2&&i.domProject(e.title,t)}))}function L(e){document.getElementById("tasks").replaceChildren(),e.tasks.forEach(((t,n)=>{const a=t.ppIndex,o=y[a].tasks.findIndex((e=>e.number===t.number));if(t.starred&&!t.completed){let n=!0;t.number=o,i.domTask(t.title,t.parentProject,e.title,o,a,n)}else t.starred||t.completed||(i.domTask(t.title,t.parentProject,e.title,o,a),t.number=o);t.completed&&i.domCompletedTask(t.title,t.parentProject,2,n)}))}function q(e){let t=y[e];y.forEach((e=>{e.selected=e===t})),function(e){const t=document.getElementById("add-task"),n=document.querySelector(".project-name"),a=y.indexOf(e);t.style.display=a<3?"none":"block",n.textContent=e.title}(t),L(t)}document.getElementById("content").append(function(){const e=document.createElement("header"),a=i.icon(t),o=document.createElement("p");o.id="header-text",o.textContent="To-Do List";const c=i.icon(n);return e.append(a,o,c),e}(),function(){const e=document.createElement("main");return e.append(function(){const e=document.createElement("nav");return e.append(function(){const e=document.createElement("div");e.id="filter-tasks";const t=document.createElement("p");t.classList.add("nav-header"),t.textContent="Filter Tasks";const n=document.createElement("ul");for(let e=0;e<3;e++){let t=document.createElement("button");t.type="button";let s,d=document.createElement("p");switch(e){case 0:s=a,d.textContent="All Tasks",t.classList.add("all-tasks");break;case 1:s=o,d.textContent="Starred",t.classList.add("starred-tasks");break;case 2:s=c,t.classList.add("completed-tasks"),d.textContent="Completed"}let l=i.icon(s);t.append(l,d),n.append(t)}return e.append(t,n),e}(),function(){const e=document.createElement("div");e.id="projects-menu";const t=document.createElement("p");t.classList.add("nav-header"),t.textContent="Projects";const n=document.createElement("ul"),a=document.createElement("button");return a.type="button",a.id="add-project",a.textContent="Add project",e.append(t,n,a),e}()),e}(),function(){const e=document.createElement("div");e.id="overview";const t=document.createElement("p");t.textContent="PLACEHOLDER",t.classList.add("project-name");const n=document.createElement("ul");n.id="tasks";const a=document.createElement("button");return a.type="button",a.id="add-task",a.textContent="Add task",e.append(t,n,a),e}()),e}(),function(){const e=document.createElement("dialog"),t=document.createElement("div");t.classList.add("dialog-heading");const n=document.createElement("p");n.textContent="placeholder";const a=i.icon(r);a.classList.add("close-dialog"),t.append(n,a);const o=document.createElement("form");o.method="dialog";const c=document.createElement("ul");return o.append(c),e.append(t,o),e}()),q(0),window.addEventListener("click",(function(e){let t=e.target.parentNode.parentNode.dataset.tnum;var n;"all-tasks"!==e.target.className&&"all-tasks"!==e.target.parentNode.className||q(0),"starred-tasks"!==e.target.className&&"starred-tasks"!==e.target.parentNode.className||q(1),"completed-tasks"!==e.target.className&&"completed-tasks"!==e.target.parentNode.className||q(2),e.target.dataset.pnum?q(e.target.dataset.pnum):e.target.parentNode.dataset.pnum&&q(e.target.parentNode.dataset.pnum),"add-task"===e.target.id&&function(){document.querySelector("dialog").showModal(),m("Add Task");const e=document.querySelector("form > ul"),t=i.textField("Title:","task-title"),n=i.textAreaField("Details:","task-details"),a=i.dateField("Due:","task-due"),o=document.createElement("button");o.type="submit",o.classList.add("submit-task"),o.textContent="Done",e.append(t,n,a,o)}(),"add-project"===e.target.id&&function(){document.querySelector("dialog").showModal(),m("Add Project");const e=document.querySelector("form > ul"),t=i.textField("Title:","project-title"),n=document.createElement("button");n.type="submit",n.classList.add("submit-project"),n.textContent="Done",e.append(t,n)}(),"submit-task"===e.target.className&&function(){const e=document.getElementById("task-title"),t=document.getElementById("task-details"),n=document.getElementById("task-due"),a=y.find((e=>!0===e.selected)),o=y.findIndex((e=>e.selected)),c=document.querySelector("dialog");if(""!==e.value){const s=function(e,t,n,a,o,c,s,d){return{title:e,details:t,dueDate:n,starred:!1,parentProject:o,number:"0",ppIndex:s,completed:!1}}(e.value,t.value,n.value,0,a.title,0,o);a.tasks.push(s),b.tasks.push(s),c.close(),L(a)}}(),"submit-project"===e.target.className&&function(){const e=document.getElementById("project-title"),t=document.querySelector("dialog");if(""!==e.value){const n=E(e.value,!1);y.push(n),t.close(),S()}}(),"svg close-dialog"===e.target.className&&document.querySelector("dialog").close(),"svg notes"!==e.target.className&&"svg notes completed"!==e.target.className||(function(){document.querySelector("dialog").showModal(),m("Details");const e=document.querySelector("form > ul"),t=i.textAreaField("","task-details"),n=i.dateField("Due:","task-due"),a=document.createElement("button");a.type="submit",a.classList.add("confirm-details"),a.textContent="Done",e.append(t,n,a)}(),function(e){const t=document.getElementById("task-details"),n=document.querySelector("dialog"),a=x(e);a.completed?t.disabled=!0:a.completed||(t.disabled=!1),n.setAttribute("data-tnum",e),t.textContent=a.details}(t),function(e){const t=document.getElementById("task-due"),n=t.parentNode,a=document.querySelector(".confirm-details"),o=document.querySelector("dialog"),c=x(e);""===c.dueDate?(n.style.display="none",a.style.marginTop="29%"):(n.style.display="block",a.style.marginTop="45px"),c.completed?t.disabled=!0:c.completed||(t.disabled=!1),o.setAttribute("data-tnum",e),t.value=c.dueDate}(t)),"confirm-details"===e.target.className&&function(){const e=document.querySelector("dialog"),t=document.getElementById("task-details"),n=C();n.completed||(n.details!==t.value?!0===confirm("Confirm Changes")&&(n.details=t.value,e.close()):e.close())}(),"svg star"===e.target.className&&function(e){const t=x(e),n=y.find((e=>!0===e.selected));t.starred?(t.starred=!1,v.tasks.splice(t.number,1)):(t.starred=!0,v.tasks.push(t)),L(n)}(t),"svg other"===e.target.className&&(function(){document.querySelector("dialog").showModal(),m("Task Settings");const e=document.querySelector("form > ul"),t=document.createElement("button");t.type="button",t.classList.add("rename-task"),t.textContent="Rename";const n=document.createElement("button");n.type="button",n.classList.add("delete-task"),n.textContent="Delete",e.append(t,n)}(),n=t,document.querySelector("dialog").setAttribute("data-tnum",n)),"rename-task"===e.target.className&&(function(){document.querySelector("dialog").showModal();const e=document.querySelector("form > ul");e.replaceChildren();const t=i.textField("Title:","new-task-title"),n=document.createElement("button");n.type="submit",n.classList.add("confirm-new-task-title"),n.textContent="Done",e.append(t,n)}(),function(){const e=document.getElementById("new-task-title"),t=C();e.value=t.title}()),"confirm-new-task-title"===e.target.className&&function(){const e=document.querySelector("dialog"),t=document.getElementById("new-task-title"),n=C(),a=y.find((e=>!0===e.selected));n.title!==t.value&&(!0===confirm("Confirm Changes")?(n.title=t.value,e.close(),L(a)):e.close())}(),"delete-task"===e.target.className&&function(){const e=document.querySelector("dialog"),t=C(),n=y[t.ppIndex];!0===confirm("Confirm Delete Task")?(y.forEach((e=>{e.tasks.forEach((n=>{n.number===t.number&&n.ppIndex===t.ppIndex&&e.tasks.splice(n.number,1)}))})),L(n),e.close()):e.close()}(),"task-check"===e.target.className&&function(e){const t=x(e),n=y.find((e=>!0===e.selected));!0===confirm("Confirm Complete Task")&&(t.completed=!0,h.tasks.push(t),y.forEach((e=>{e!==h&&e.tasks.forEach((n=>{t.ppIndex===n.ppIndex&&t.number===n.number&&e.tasks.splice(n.number,1)}))}))),L(n)}(t)})),window.addEventListener("mouseover",(function(e){e.target.dataset.pnum||e.target.parentNode.dataset.pnum})),S()})();