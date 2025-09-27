"use client";

export default function LimitsTab({ problemData, handleInputChange }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white border-b pb-2 border-zinc-700">
        Time and Memory Limits
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="timeLimit"
            className="block text-sm font-medium text-zinc-300 mb-1"
          >
            Time Limit (ms)
          </label>
          <input
            type="number"
            id="timeLimit"
            name="timeLimit"
            value={problemData.timeLimit}
            onChange={handleInputChange}
            min="100"
            step="100"
            className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <p className="mt-1 text-xs text-zinc-400">
            Recommended: 1000ms for most problems
          </p>
        </div>

        <div>
          <label
            htmlFor="memoryLimit"
            className="block text-sm font-medium text-zinc-300 mb-1"
          >
            Memory Limit (MB)
          </label>
          <input
            type="number"
            id="memoryLimit"
            name="memoryLimit"
            value={problemData.memoryLimit}
            onChange={handleInputChange}
            min="16"
            step="16"
            className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <p className="mt-1 text-xs text-zinc-400">
            Recommended: 256MB for most problems
          </p>
        </div>
      </div>
    </div>
  );
}
