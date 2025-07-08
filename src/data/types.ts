import type { RESOURCE_ICONS, RESOURCE_ICON_COLORS } from "./constants";

export type Module = {
  id: string;
  name: string;
  description: string;
  resources: Resource[];
};

export type Course = {
  id: string;
  name: string;
  description: string;
  modules: Module[];
};

export type Resource = {
  resourceType: "guide";
  id: string;
  name: string;
  completed: boolean;
  description: string;
  content: React.ComponentType;
  icon?: keyof typeof RESOURCE_ICONS;
  iconColor?: keyof typeof RESOURCE_ICON_COLORS;
};
