import React, { useState } from "react";
import useModules from "../../hooks/useModules";
import ModuleDropDown from "./ModuleDropDown";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";

const ProblemList = () => {
  const [collapsed, setCollapsed] = useState(false);

  const modules = useModules();

  return (
    <div className="relative">
      <div
        className={`absolute flex transition items-center justify-center top-0 left-0 w-9 h-9 bg-green-500 rounded-br-xl z-10 ${
          collapsed ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-5 h-5 flex items-center justify-center hover:bg-green-600 transition rounded-sm"
        >
          <ChevronDoubleRightIcon className="w-4 h-4 text-slate-800" />
        </button>
      </div>
      <div
        className={`transition-all relative whitespace-nowrap duration-500 ease-in-out min-w-[14rem] h-full flex flex-col bg-slate-300 dark:bg-slate-900 overflow-y-scroll ${
          collapsed
            ? "min-w-0 w-0"
            : "w-56 border-r border-r-slate-400 dark:border-r-slate-600"
        }`}
      >
        <div className="w-full border-b border-b-slate-400 dark:border-b-slate-600 font-grotesk bg-green-500">
          <div className="flex items-center justify-between w-full px-3 py-2 focus:outline-none">
            <h1 className="text-sm font-medium transition dark:font-semibold text-slate-800 dark:text-slate-800">
              Exercises
            </h1>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="w-5 h-5 flex items-center justify-center hover:bg-green-600 transition rounded-sm"
            >
              <ChevronDoubleLeftIcon className="w-4 h-4 text-slate-800" />
            </button>
          </div>
        </div>
        {modules.status === "loading" && <div>Loading...</div>}
        {modules.status === "loaded" &&
          modules.payload.map((module, i) => (
            <ModuleDropDown module={module} number={i} key={module._id} />
          ))}
        {modules.status === "error" && (
          <div>Error, modules cannot be fetched.</div>
        )}
      </div>
    </div>
  );
};

export default ProblemList;
