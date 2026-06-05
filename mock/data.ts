import { Task } from "@/types/task";

/*
export const taskListData: Task[] = [
  { id: "1", title: "Acordar 5hrs", completed: false },
  { id: "2", title: "Tomar 2 copos de água", completed: false },
  { id: "3", title: "Ler mais de 10 páginas", completed: false },
  { id: "4", title: "Beber 1L de água", completed: false },
  { id: "5", title: "Ir na Musculação", completed: false },
];
*/

export const taskListData: Task[] = [
  {
    id: "1",
    title: "Acordar 5hrs",
    unit: "simple",
    amountGoal: true,
    isArchived: false,
    isDeleted: false,
    createdAt: "",
    logs: [{ month: "december", year: 2025, checklist: [] }],
  },
];
