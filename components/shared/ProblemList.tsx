import React from "react";
import useModules from "../../hooks/useModules";
import ModuleDropDown from "./ModuleDropDown";

const ProblemList = () => {
  const modules = useModules();

  return (
    <div className="w-56 min-w-[14rem] h-full flex flex-col bg-slate-300 transition dark:bg-slate-900 border-r border-r-slate-400 dark:border-r-slate-600 overflow-y-scroll">
      {modules.status === "loading" && <div>Loading...</div>}
      {modules.status === "loaded" &&
        modules.payload.map((module, i) => (
          <ModuleDropDown module={module} number={i} key={module._id} />
        ))}
      {modules.status === "error" && (
        <div>Error, modules cannot be fetched.</div>
      )}
    </div>
  );
};

export default ProblemList;
