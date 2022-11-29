import { useEffect, useState } from "react";
import { Service } from "../utils/types";

export interface Problem {
  _id: string;
  title: string;
}

export interface Module {
  _id: string;
  name: string;
  number: number;
  problems: Problem[];
  __v: number;
}

const useModules = () => {
  const [result, setResult] = useState<Service<Module[]>>({
    status: "loading",
  });

  useEffect(() => {
    fetch("https://edugator-admin.com/v1/module/WithNonHiddenProblems")
      .then((response) => response.json())
      .then((response) => setResult({ status: "loaded", payload: response }))
      .catch((error) => setResult({ status: "error", error }));
  }, []);

  return result;
};

export default useModules;
