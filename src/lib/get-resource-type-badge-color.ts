export const getResourceTypeBadgeColor = (type: string) => {
  switch (type) {
    case "video":
      return "bg-red-500 bg-opacity-20 text-red-400";
    case "document":
      return "bg-blue-500 bg-opacity-20 text-blue-400";
    case "code":
      return "bg-green-500 bg-opacity-20 text-green-400";
    case "assignment":
      return "bg-yellow-500 bg-opacity-20 text-yellow-400";
    case "playground":
      return "bg-purple-500 bg-opacity-20 text-purple-400";
    case "guide":
      return "bg-orange-500 bg-opacity-20 text-orange-400";
    default:
      return "bg-gray-500 bg-opacity-20 text-gray-400";
  }
};
