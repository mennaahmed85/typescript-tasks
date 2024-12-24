/*
taskId, description, status (which can be "pending", "in progress", or "completed"), 
and priority (which can be 1, 2, or 3).
*/
export type status = "pending" | "in progress" | "completed";
export type priority = 1 | 2 | 3;

export type TaskScheduler = {
  taskId: number;
  description: string;
  status: status;
  priority: priority;
};
