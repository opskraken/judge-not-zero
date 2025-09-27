import { CopyButton } from "./ClientComponents";
import KatexRenderer from "@/components/KatexRenderer/KatexRenderer";
import convertTiptapToHtml from "@/utils/tiptapToHtml";
import Link from "next/link";
import { useMemo } from "react";

export default function ProblemViewComponent({ problem, contestId }) {
  const descriptionHtml = useMemo(
    () => convertTiptapToHtml(problem.description),
    [problem.description]
  );
  const inputDescriptionHtml = useMemo(
    () => convertTiptapToHtml(problem.inputDescription),
    [problem.inputDescription]
  );
  const outputDescriptionHtml = useMemo(
    () => convertTiptapToHtml(problem.outputDescription),
    [problem.outputDescription]
  );

  return (
    <>
      <div className=" overflow-y-auto p-4">
        {/* Back button */}
        <div className="mb-3">
          {contestId ? (
            <Link
              href={`/contest/${contestId}`}
              className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Problems
            </Link>
          ) : (
            <div></div>
          )}
        </div>

        <h1 className="text-2xl font-bold mb-4">{problem.name}</h1>

        <div className="border border-zinc-800 p-2 rounded mb-4">
          <p className="font-medium">
            Time Limit: {problem.timeLimit}ms | Memory Limit:{" "}
            {problem.memoryLimit}MB
          </p>
        </div>

        <div className="prose max-w-none leading-relaxed text-gray-700 dark:text-gray-300">
          <KatexRenderer html={descriptionHtml} />
        </div>

        <div className="space-y-4 mb-4">
          {/* input desc */}
          <div className="space-y-2">
            <p className="text-2xl font-bold">Input</p>
            <KatexRenderer html={inputDescriptionHtml} />
          </div>

          {/* output desc */}
          <div className="space-y-2">
            <p className="text-2xl font-bold">Output</p>
            <KatexRenderer html={outputDescriptionHtml} />
          </div>
        </div>

        {/* sample input/output section */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="relative flex flex-col h-full">
            <h3 className="font-semibold mb-2">Sample Input</h3>
            {problem.sampleTestCases.map((sample, index) => (
              <div
                key={index}
                className="border border-zinc-800 rounded p-3 relative flex-grow"
              >
                <pre className="whitespace-pre-wrap h-full">{sample.input}</pre>
                <CopyButton text={sample.input} />
              </div>
            ))}
          </div>
          <div className="relative flex flex-col h-full">
            <h3 className="font-semibold mb-2">Sample Output</h3>
            {problem.sampleTestCases.map((sample, index) => (
              <div
                key={index}
                className="border border-zinc-800 rounded p-3 relative flex-grow"
              >
                <pre className="whitespace-pre-wrap h-full">
                  {sample.output}
                </pre>
                <CopyButton text={sample.output} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
