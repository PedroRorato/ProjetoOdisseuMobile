export type TaskLogItem = {
  date: string;
  isCompleted?: boolean;
};

export type TaskLog = {
  month: string;
  year: number;
  checklist: TaskLogItem[];
};

export type Task = {
  id: string;
  title: string;
  description?: string;
  color?: string;
  isArchived: boolean;
  isDeleted: boolean;
  createdAt: string;
  logs: TaskLog[];
};

/* 2.0 version
export type TimeType = "sec" | "min" | "hr";

export type QuantityType =
  | "count"
  | "steps"
  | "m"
  | "km"
  | "Cal"
  | "g"
  | "mg"
  | "l"
  | "ml";

export type AmountUnity = "simple" | TimeType | QuantityType;

export type TaskLogItem = {
  date: string;
  isCompleted?: boolean;
  isPartiallyCompleted: boolean;
  amount?: number;
};

export type TaskLog = {
  month: string;
  year: number;
  checklist: TaskLogItem[];
};

export type Task = {
  id: string;
  title: string;
  description?: string;
  color?: string;
  unit: AmountUnity;
  amountGoal: boolean | number;
  partialGoal?: boolean | number;
  isArchived: boolean;
  isDeleted: boolean;
  createdAt: string;
  logs: TaskLog[];
};
*/
