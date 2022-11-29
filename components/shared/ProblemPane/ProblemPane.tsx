import React from "react";
import useProblem from "../../../hooks/useProblem";
import ReactMarkdown from "react-markdown";

const Image = (props: { alt: string } & any) => {
  return <img alt={props.alt} {...props} style={{ maxWidth: "100%" }} />;
};

const ProblemPane = () => {
  const problem = useProblem();

  return (
    <div className="flex-grow bg-slate-50 transition-colors dark:bg-slate-800 max-w-full max-h-full overflow-y-scroll">
      {problem.status === "loaded" && (
        <div>
          <div className="p-8">
            <h1 className="text-3xl font-bold transition dark:text-slate-100 font-grotesk mb-4">
              {problem.payload.title}
            </h1>
            <div className="w-full h-px bg-gradient-to-r from-green-500 to-transparent mb-4"></div>
            <ReactMarkdown
              className="markdown rounded-md"
              components={{ img: Image }}
            >
              {problem.payload.statement}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProblemPane;
