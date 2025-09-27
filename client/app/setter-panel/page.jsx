"use client";

import Link from "next/link";
import { useState } from "react";
import { MdCreate, MdList } from "react-icons/md";
import Button from "@/components/ButtonComponent/Button";
import CreateProblem from "@/components/CreateProblemComponent/CreateProblemComponent";

function setterPanel() {
  const [activeItem, setActiveItem] = useState(0);
  const [modalActive, setModalActive] = useState(false);

  const handleCreate = () => {
    setModalActive(true);
  };

  const menuItems = [
    {
      title: "Available Problems",
      href: "#problems",
      icon: <MdList className="text-xl" />,
    },
  ];

  const problemData = [
    { title: "Two Sum" },
    { title: "Binary Search Tree" },
    { title: "Graph Traversal" },
  ];

  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-gradient-to-br from-zinc-950 to-zinc-900">
      {modalActive ? (
        <CreateProblem setModalActive={setModalActive} />
      ) : (
        <div></div>
      )}

      {/* Sidebar */}
      <div className="w-72 bg-zinc-900/80 shadow-xl backdrop-blur-sm border-r border-zinc-800">
        <div className="p-5 border-b border-zinc-800">
          <h2 className="text-xl font-bold text-orange-400">Setter Panel</h2>
          <p className="text-xs text-zinc-500 mt-1">
            Manage your problems and contests
          </p>
        </div>

        <div className="py-2 px-3">
          <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2 ml-2">
            Navigation
          </p>
          {menuItems.map((item, idx) => (
            <div
              className={`px-4 py-3 mb-1 rounded-lg transition-all duration-200 flex items-center gap-3 cursor-pointer ${
                activeItem === idx
                  ? "bg-orange-500/90 text-white shadow-md shadow-orange-900/20 font-medium"
                  : "hover:bg-zinc-800/70 text-zinc-400 hover:text-white"
              }`}
              key={`nav-item-${idx}`}
              onClick={() => setActiveItem(idx)}
            >
              <span className="text-lg">{item.icon}</span>
              <Link href={item.href} className="w-full">
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="bg-zinc-900/80 backdrop-blur-sm rounded-xl shadow-xl border border-zinc-800/50 p-6 h-full">
          <div className="flex justify-between items-center pb-4 mb-6 border-b border-zinc-800">
            <div className="flex items-center space-x-2">
              <span className="p-2 bg-orange-500/10 text-orange-500 rounded-lg">
                {menuItems[activeItem].icon}
              </span>
              <h1 className="text-2xl font-bold text-white">
                {menuItems[activeItem].title}
              </h1>
            </div>
            <div>
              <Button
                name="Create New Problem"
                icon={<MdCreate />}
                onClick={handleCreate}
              />
            </div>
          </div>

          <div>
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search problems..."
                  className="w-full pl-10 pr-4 py-2 bg-zinc-800/80 border border-zinc-700 rounded-lg text-zinc-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <div className="absolute left-3 top-2.5 text-zinc-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {problemData.length > 0 ? (
              <div className="bg-zinc-800/70 rounded-lg overflow-hidden shadow-lg border border-zinc-700/50">
                <table className="min-w-full divide-y divide-zinc-700">
                  <thead className="bg-zinc-700/50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider"
                      >
                        No.
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-zinc-800/30 divide-y divide-zinc-700/50">
                    {problemData.map((problem, index) => (
                      <tr
                        key={index}
                        className="hover:bg-zinc-700/30 transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-100">
                          {problem.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">
                          <div className="flex space-x-3">
                            <button className="text-blue-400 hover:text-blue-300 transition-colors">
                              Edit
                            </button>
                            <button className="text-red-400 hover:text-red-300 transition-colors">
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="mt-6 p-6 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-center">
                <p className="text-zinc-500">
                  No problems available yet. Create your first problem to get
                  started.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default setterPanel;
