export type Module = {
  id: string;
  name: string;
  resources: Resource[];
};

export type Course = {
  name: string;
  modules: Module[];
};

export type Resource = {
  resourceType: "guide";
  id: string;
  name: string;
  completed: boolean;
  description: string;
  content: string | React.ComponentType;
};
