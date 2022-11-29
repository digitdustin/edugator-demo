import React, { useEffect, useState } from "react";
import GatorSlice from "./GatorSlice";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return <MoonIcon className="w-6 h-6 text-gray-300 " role="button" />;
    } else {
      return <SunIcon className="w-6 h-6 text-yellow-400 " role="button" />;
    }
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 dark:border-b dark:border-b-slate-600 bg-gray-900">
      <div className="flex items-center">
        <div className="w-10 h-10 flex items-center mr-2">
          <GatorSlice />
        </div>
        <h1 className="text-xl font-semibold font-ambit text-white">
          Edugator
        </h1>
      </div>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        {renderThemeChanger()}
      </button>
    </header>
  );
};

export default Header;
