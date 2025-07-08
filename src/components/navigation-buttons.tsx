import { ChevronLeft, ChevronRight } from "lucide-react";
import type React from "react";
import { useNavForwardBackward } from "@/hooks/use-nav-forward-backward";

export const NavigationButtons: React.FC = () => {
  const {
    canGoNext,
    canGoPrevious,
    goNext,
    goPrevious,
    nextItem,
    previousItem,
  } = useNavForwardBackward();

  return (
    <div className="flex justify-between items-center mt-8 pt-6 border-[#3e3e42] border-t">
      {/* Previous Button */}
      <button
        type="button"
        onClick={goPrevious}
        disabled={!canGoPrevious}
        className={`flex items-center space-x-2 px-4 py-2 rounded transition-colors ${
          canGoPrevious
            ? "bg-[#2d2d30] hover:bg-[#37373d] text-[#cccccc] hover:text-[#4ec9b0] border border-[#3e3e42]"
            : "bg-[#1e1e1e] text-[#6a6a6a] cursor-not-allowed border border-[#2d2d30]"
        }`}
      >
        <ChevronLeft className="w-4 h-4" />
        <div className="text-left">
          <div className="opacity-70 text-xs">Previous</div>
          {previousItem && (
            <div className="font-medium text-sm">
              {previousItem.type === "module" ? "📚" : "📄"}{" "}
              {previousItem.resource?.name || previousItem.module.name}
            </div>
          )}
        </div>
      </button>

      {/* Next Button */}
      <button
        onClick={goNext}
        type="button"
        disabled={!canGoNext}
        className={`flex items-center space-x-2 px-4 py-2 rounded transition-colors ${
          canGoNext
            ? "bg-[#2d2d30] hover:bg-[#37373d] text-[#cccccc] hover:text-[#4ec9b0] border border-[#3e3e42]"
            : "bg-[#1e1e1e] text-[#6a6a6a] cursor-not-allowed border border-[#2d2d30]"
        }`}
      >
        <div className="text-right">
          <div className="opacity-70 text-xs">Next</div>
          {nextItem && (
            <div className="font-medium text-sm">
              {nextItem.type === "module" ? "📚" : "📄"}{" "}
              {nextItem.resource?.name || nextItem.module.name}
            </div>
          )}
        </div>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};
