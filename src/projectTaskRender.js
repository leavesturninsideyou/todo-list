import { createProject, createTask, getProjects } from "./siteLogic";
import { getTaskFromDialog } from "./otherDomLogic";
import elementCrafter from "./craftingTable";

const projects = getProjects();
const allTaskProject = projects[0];

export function getTask(task) {
    const fullNumber = task.split(".");
    const projectNumber = fullNumber[0];
    const taskNumber = fullNumber[1];

    const desiredTask = projects[projectNumber].tasks[taskNumber];

    return desiredTask;
}

export function updateProjects() {
    const projectsDomMenu = document.querySelector("#projects-menu > ul");
    projectsDomMenu.replaceChildren();

    projects.forEach((project, index) => {
        if (index > 2) {
            elementCrafter.domProject(project.title, index);
        }
    });
}

export function updateTasks(project) {
    const tasksMenu = document.getElementById("tasks");
    tasksMenu.replaceChildren();

    project.tasks.forEach((task, index) => {
        const parentIndex = task.ppIndex;
        const taskIndex = projects[parentIndex].tasks.findIndex((desiredTask) => desiredTask.number === task.number);

        if (task.starred && !task.completed) {
            let star = true;

            task.number = taskIndex;

            elementCrafter.domTask(task.title, task.parentProject, project.title, taskIndex, parentIndex, star);
        } else if (!task.starred && !task.completed) {
            elementCrafter.domTask(task.title, task.parentProject, project.title, taskIndex, parentIndex);

            task.number = taskIndex;
        }

        if (task.completed) {
            elementCrafter.domCompletedTask(task.title, task.parentProject, 2, index);
        }
    });
}

export function domCreateTask() {
    const title = document.getElementById("task-title");
    const details = document.getElementById("task-details");
    const due = document.getElementById("task-due");

    const selectedProject = projects.find((project) => project.selected === true);
    const selectedProjectIndex = projects.findIndex((project) => project.selected);

    const dialogForm = document.querySelector("dialog");

    if (title.value !== "") {
        const newTask = createTask(title.value, details.value, due.value, false, selectedProject.title, "0", selectedProjectIndex, false);
        selectedProject.tasks.push(newTask);
        allTaskProject.tasks.push(newTask);
        dialogForm.close();
        updateTasks(selectedProject);
    }
}

export function domCreateProject() {
    const title = document.getElementById("project-title");

    const dialogForm = document.querySelector("dialog");

    if (title.value !== "") {
        const newProject = createProject(title.value, false);
        projects.push(newProject);
        dialogForm.close();
        updateProjects();
    }
}

export function domProjectSwitch(project) {
    const addTaskBtn = document.getElementById("add-task");
    const domProjectTitle = document.querySelector(".project-name");

    const pIndex = projects.indexOf(project);
    
    if (pIndex < 3) {
        addTaskBtn.style.display = "none";
    } else {
        addTaskBtn.style.display = "block";
    }

    domProjectTitle.textContent = project.title;
}

export function displayDetails(taskNum) {
    const domTaskDetails = document.getElementById("task-details");
    const dialogForm = document.querySelector("dialog");

    const task = getTask(taskNum);

    if (task.completed) {
        domTaskDetails.disabled = true;
    } else if (!task.completed) {
        domTaskDetails.disabled = false;
    }

    dialogForm.setAttribute("data-tnum", taskNum);

    domTaskDetails.textContent = task.details;
}

export function displayTaskTitle() {
    const domTaskTitle = document.getElementById("new-task-title");

    const task = getTaskFromDialog();

    domTaskTitle.value = task.title;
}

export function displayDate(taskNum) {
    const domTaskDue = document.getElementById("task-due");
    const inputParent = domTaskDue.parentNode;
    const confirmDetails = document.querySelector(".confirm-details");

    const dialogForm = document.querySelector("dialog");

    const task = getTask(taskNum);

    if (task.dueDate === "") {
        inputParent.style.display = "none";
        confirmDetails.style.marginTop = "29%";
    } else {
        inputParent.style.display = "block";
        confirmDetails.style.marginTop = "45px";
    }

    if (task.completed) {
        domTaskDue.disabled = true;
    } else if (!task.completed) {
        domTaskDue.disabled = false;
    }

    dialogForm.setAttribute("data-tnum", taskNum);

    domTaskDue.value = task.dueDate;
}

//when the date comes (or is near possibly), change the color of the task to yellow or red depending on how far it is
