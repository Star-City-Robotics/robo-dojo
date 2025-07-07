import { useState, useMemo } from "react";
import { groupBy } from "remeda";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  useCommandSearch,
  type SearchResult,
} from "@/hooks/use-command-search";
import { Book, FileText, FolderOpen } from "lucide-react";

const getTypeIcon = (type: SearchResult["type"]) => {
  switch (type) {
    case "course":
      return <Book className="w-4 h-4 text-[#569cd6]" />;
    case "module":
      return <FolderOpen className="w-4 h-4 text-[#4ec9b0]" />;
    case "resource":
      return <FileText className="w-4 h-4 text-[#dcdcaa]" />;
    default:
      return <FileText className="w-4 h-4 text-[#cccccc]" />;
  }
};

const getTypeBadge = (type: SearchResult["type"]) => {
  const badges = {
    course: { text: "Course", bg: "bg-[#1e3a8a]", color: "text-[#93c5fd]" },
    module: { text: "Module", bg: "bg-[#065f46]", color: "text-[#6ee7b7]" },
    resource: { text: "Resource", bg: "bg-[#581c87]", color: "text-[#c4b5fd]" },
  };
  return badges[type];
};

export const CommandSearch = () => {
  const { open, setOpen, search, navigateToResult } = useCommandSearch();
  const [query, setQuery] = useState("");

  // Get search results and group them immutably
  const results = search(query);
  const groupedResults = useMemo(() => {
    return groupBy(results, (result) => result.type);
  }, [results]);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <div className="bg-[#1e1e1e] border border-[#3e3e42] rounded-lg overflow-hidden">
        <CommandInput
          placeholder="Search courses, modules, and resources..."
          value={query}
          onValueChange={setQuery}
          className="bg-[#1e1e1e] border-[#3e3e42] border-b text-[#cccccc] placeholder:text-[#6a6a6a]"
        />
        <CommandList className="bg-[#1e1e1e] max-h-[400px] text-[#cccccc]">
          <CommandEmpty className="py-6 text-[#6a6a6a] text-center">
            {query ? "No results found." : "Type to search..."}
          </CommandEmpty>

          {groupedResults.course && (
            <CommandGroup>
              <div className="px-2 py-1.5 font-medium text-[#569cd6] text-xs uppercase tracking-wider">
                Courses
              </div>
              {groupedResults.course.map((result) => (
                <CommandItem
                  key={result.id}
                  onSelect={() => navigateToResult(result)}
                  className="flex items-center gap-3 data-[selected=true]:bg-[#37373d] hover:bg-[#252526] px-2 py-2 text-[#cccccc] cursor-pointer"
                >
                  {getTypeIcon(result.type)}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-[#cccccc] text-sm truncate">
                      {result.title}
                    </div>
                    <div className="text-[#6a6a6a] text-xs truncate">
                      {result.description}
                    </div>
                  </div>
                  <div
                    className={`text-xs px-2 py-1 rounded ${getTypeBadge(result.type).bg} ${getTypeBadge(result.type).color}`}
                  >
                    {getTypeBadge(result.type).text}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {groupedResults.module && (
            <>
              {groupedResults.course && (
                <CommandSeparator className="bg-[#3e3e42]" />
              )}
              <CommandGroup>
                <div className="px-2 py-1.5 font-medium text-[#4ec9b0] text-xs uppercase tracking-wider">
                  Modules
                </div>
                {groupedResults.module.map((result) => (
                  <CommandItem
                    key={result.id}
                    onSelect={() => navigateToResult(result)}
                    className="flex items-center gap-3 data-[selected=true]:bg-[#37373d] hover:bg-[#252526] px-2 py-2 text-[#cccccc] cursor-pointer"
                  >
                    {getTypeIcon(result.type)}
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-[#cccccc] text-sm truncate">
                        {result.title}
                      </div>
                      <div className="text-[#6a6a6a] text-xs truncate">
                        {result.course} • {result.description}
                      </div>
                    </div>
                    <div
                      className={`text-xs px-2 py-1 rounded ${getTypeBadge(result.type).bg} ${getTypeBadge(result.type).color}`}
                    >
                      {getTypeBadge(result.type).text}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}

          {groupedResults.resource && (
            <>
              {(groupedResults.course || groupedResults.module) && (
                <CommandSeparator className="bg-[#3e3e42]" />
              )}
              <CommandGroup>
                <div className="px-2 py-1.5 font-medium text-[#dcdcaa] text-xs uppercase tracking-wider">
                  Resources
                </div>
                {groupedResults.resource.map((result) => (
                  <CommandItem
                    key={result.id}
                    onSelect={() => navigateToResult(result)}
                    className="flex items-center gap-3 data-[selected=true]:bg-[#37373d] hover:bg-[#252526] px-2 py-2 text-[#cccccc] cursor-pointer"
                  >
                    {getTypeIcon(result.type)}
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-[#cccccc] text-sm truncate">
                        {result.title}
                      </div>
                      <div className="text-[#6a6a6a] text-xs truncate">
                        {result.course} • {result.module} • {result.description}
                      </div>
                    </div>
                    <div
                      className={`text-xs px-2 py-1 rounded ${getTypeBadge(result.type).bg} ${getTypeBadge(result.type).color}`}
                    >
                      {getTypeBadge(result.type).text}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}
        </CommandList>
      </div>
    </CommandDialog>
  );
};
