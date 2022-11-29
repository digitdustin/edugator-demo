import { CodeBracketIcon, HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

const TopicSidebar = () => {
  return (
    <div className="w-16 min-w-[4rem] h-full dark:border-r dark:border-r-slate-600 bg-slate-900 flex flex-col space-y-4 p-4 items-center">
      <button className="p-2 flex items-center justify-center">
        <HomeIcon className="w-6 h-6 text-slate-300" />
      </button>
      <div className="w-full h-px bg-slate-600"></div>
      <button className="transition hover:bg-slate-700 p-2 flex items-center justify-center">
        <CodeBracketIcon className="w-6 h-6 text-slate-300" />
      </button>
    </div>
  );
};

export default TopicSidebar;
