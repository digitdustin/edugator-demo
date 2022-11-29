import React, { useState } from "react";
import { Module, Problem } from "../../hooks/useModules";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useProblemStore } from "../../stores/useProblemStore";

const ModuleDropDown = ({
  module,
  number,
}: {
  module: Module;
  number: number;
}) => {
  const [open, setOpen] = useState(false);

  const setProblemId = useProblemStore((state) => state.setProblemId);
  const problemId = useProblemStore((state) => state.problemId);

  const onProblemClick = (id: string) => {
    setProblemId(id);
  };

  return (
    <div className="w-full border-b border-b-slate-400 dark:border-b-slate-600 font-grotesk">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-3 py-4 focus:outline-none"
      >
        <div className="flex items-center">
          <h1 className="text-sm font-medium transition dark:font-semibold text-slate-800 dark:text-slate-300">
            {number + 1}. {module.name}
          </h1>
        </div>
        <ChevronDownIcon className="w-4 h-4 text-slate-300" />
      </button>
      <div
        style={{
          height: open ? `${module.problems.length * 45}px` : "0px",
        }}
        className={`w-full flex flex-col transition-all duration-500 overflow-hidden`}
      >
        {module.problems.map((problem: Problem) => (
          <button
            onClick={() => onProblemClick(problem._id)}
            key={problem._id}
            className={`w-full flex items-center border-t hover:bg-slate-400 dark:hover:bg-slate-600 transition border-t-slate-400 dark:border-t-slate-500 text-ellipsis bg-slate-100 dark:bg-slate-800 px-3 py-3 ${
              problem._id === problemId
                ? "dark:bg-emerald-700 dark:hover:bg-emerald-700 bg-emerald-400 hover:bg-emerald-500"
                : ""
            }`}
          >
            <h1 className="text-sm font-base dark:font-semibold text-slate-800 dark:text-slate-300 whitespace-nowrap ">
              {problem.title}
            </h1>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModuleDropDown;
