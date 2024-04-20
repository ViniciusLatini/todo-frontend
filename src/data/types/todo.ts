export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
  user: {
    id: string;
    name: string;
  };
}

export interface TodosStats {
  id: string;
  completed: boolean;
  count: number;
}
