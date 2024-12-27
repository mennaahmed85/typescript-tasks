import { status, priority, TaskScheduler } from "./interfaces/interface";
/*
**Concepts**: Array of Objects, Array Methods, Functions

### **Problem Description**:

Build a **task scheduler** to manage a list of tasks. Each task is represented by an object with the following properties: `taskId`, `description`, `status` (which can be `"pending"`, `"in progress"`, or `"completed"`), and `priority` (which can be `1`, `2`, or `3`).

1. **Add a new task** to the list.
2. **Change the status** of a task by `taskId`.
3. **Display all tasks** sorted by priority.
4. **Filter tasks** based on their current status.
5. **Count the number of tasks** in each status category.
*/

const taskScheduler: TaskScheduler[] = [
  {
    taskId: 1,
    description: "Complete the TypeScript assignment",
    status: "pending",
    priority: 2,
  },
  {
    taskId: 2,
    description: "Review pull requests on GitHub",
    status: "in progress",
    priority: 1,
  },
  {
    taskId: 3,
    description: "Prepare for the team meeting",
    status: "completed",
    priority: 3,
  },
  {
    taskId: 4,
    description: "Update project documentation",
    status: "pending",
    priority: 1,
  },
  {
    taskId: 5,
    description: "Fix bugs reported by QA team",
    status: "in progress",
    priority: 2,
  },
  {
    taskId: 6,
    description: "Optimize database queries",
    status: "completed",
    priority: 3,
  },
];

//Add a new task to the list.
function addNewTasks(task: TaskScheduler) {
  const checkTask = taskScheduler.find((task) => task.taskId === task.taskId);
  if (checkTask) {
    return `this task already in the task scheduler.`;
  }
  taskScheduler.push(task);
  return `task added successfully.`;
}

//Change the status of a task by taskId.
function ChangeTheStatus(id: number, newStatus: status): void {
  const reqTak = taskScheduler.find((el) => el.taskId === id);
  if (reqTak) {
    reqTak.status = newStatus;
  } else {
    console.log(`there is no task id = ${id}`);
  }
}

//Display all tasks sorted by priority.
taskScheduler.sort(
  (a: TaskScheduler, b: TaskScheduler) => a.priority - b.priority
);

//Filter tasks based on their current status
function filterTasks(status: status) {
  const filteredArr: TaskScheduler[] = taskScheduler.filter(
    (el) => el.status === status
  );
  return filteredArr;
}

//Count the number of tasks in each status category.
function countTheNumberOfTasks() {
  let pending: number = 0;
  let inProgress: number = 0;
  let completed: number = 0;
  taskScheduler.map((el) =>
    el.status === "completed"
      ? (completed += 1)
      : el.status === "in progress"
      ? (inProgress += 1)
      : (pending += 1)
  );
  return {
    pending: pending,
    inProgress: inProgress,
    completed: completed,
  };
}
console.log(countTheNumberOfTasks());
