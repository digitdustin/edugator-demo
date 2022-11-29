import { useEffect, useState } from "react";
import { Service } from "../utils/types";
import { Problem } from "./useModules";
import { useProblemStore } from "../stores/useProblemStore";

export interface ProblemData {
  code: {
    body: string;
  };
  _id: string;
  statement: string;
  title: string;
  hidden: false;
  language: string;
  dueDate: string;
  fileExtension: string;
  testCases: [
    {
      input: string;
      expectedOutput: string;
      hint: string;
      visibility: number;
      _id: string;
    }
  ];
  templatePackage: string;
  timeLimit: number;
  memoryLimit: number;
  buildCommand: string;
  __v: number;
}

const useProblem = () => {
  const [result, setResult] = useState<Service<ProblemData>>({
    status: "loading",
  });

  const problemId = useProblemStore((state) => state.problemId);

  useEffect(() => {
    if (problemId) {
      setResult({ status: "loading" });
      fetch(`https://edugator-admin.com/v1/student/problem/${problemId}`)
        .then((response) => response.json())
        .then((response) => setResult({ status: "loaded", payload: response }))
        .catch((error) => setResult({ status: "error", error }));
    }
  }, [problemId]);

  return result;
};

export default useProblem;
