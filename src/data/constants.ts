export const javaProgrammingCourse: Course = {
  name: "Java Programming",
  modules: [
    {
      id: "install",
      name: "How to install stuff",
      resources: [
        {
          type: "video",
          completed: false,
          description: "some string yayy",
          duration: "10m",
          id: "how to install vscode",
          name: "How to Install VSCode",
        },
        {
          type: "guide",
          completed: false,
          description: "This document goes over how to set up git",
          id: "git-setup-fun-time-robot-stuff",
          content: ``,
        },
      ],
    },
  ],
};
type Module = {
  id: string;
  name: string;
  resources: Resource[];
};

type Course = {
  name: string;
  modules: Module[];
};
type Resource =
  | {
      id: string;
      name: string;
      type: "video";
      duration: string;
      completed: boolean;
      description: string;
    }
  | {
      type: "guide";
      id: string;
      name: string;
      completed: boolean;
      description: string;
      content: string;
    }
  | {
      id: string;
      type: "assignment";
      name: string;
      dueDate: string;
      completed: false;
      description: string;
    }
  | {
      type: "document";
      id: string;
      name: string;
      pages: number;
      completed: boolean;
      description: string;
    };
