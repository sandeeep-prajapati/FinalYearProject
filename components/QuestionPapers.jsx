import React from "react";

const QuestionPaper = () => {
  const documents = [
    {
      name: "Product Requirements",
      contractor: "Brooklyn Simmons",
      ssn: "196707209364",
      status: "Active",
      type: "pdf",
      date: "5th Feb, 2023",
    },
    {
      name: "Contracts Rafiqur",
      contractor: "Jerome Bell",
      ssn: "196601292078",
      status: "Active",
      type: "pdf",
      date: "5th Feb, 2023",
    },
    {
      name: "Apollo NDA Sabir",
      contractor: "Marvin McKinney",
      ssn: "198805070607",
      status: "Completed",
      type: "doc",
      date: "5th Feb, 2023",
    },
    {
      name: "Fillo Objectives",
      contractor: "Marvin McKinney",
      ssn: "199609077111",
      status: "Active",
      type: "doc",
      date: "5th Feb, 2023",
    },
    {
      name: "Fillo Objectives",
      contractor: "Marvin McKinney",
      ssn: "199609077111",
      status: "Active",
      type: "doc",
      date: "5th Feb, 2023",
    },
    {
      name: "Fillo Objectives",
      contractor: "Marvin McKinney",
      ssn: "199609077111",
      status: "Active",
      type: "doc",
      date: "5th Feb, 2023",
    },
    {
      name: "Fillo Objectives",
      contractor: "Marvin McKinney",
      ssn: "199609077111",
      status: "Active",
      type: "doc",
      date: "5th Feb, 2023",
    },
    {
      name: "Fillo Objectives",
      contractor: "Marvin McKinney",
      ssn: "199609077111",
      status: "Active",
      type: "doc",
      date: "5th Feb, 2023",
    },
    {
      name: "Fillo Objectives",
      contractor: "Marvin McKinney",
      ssn: "199609077111",
      status: "Active",
      type: "doc",
      date: "5th Feb, 2023",
    },
  ];

 

  return (
    <div className="bg-black text-gray-200 min-h-screen p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-white">
          Compliance Documents
        </h1>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
          New Project
        </button>
      </header>

      {/* Sidebar & Main Content Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-700 p-6 rounded-lg mr-6">
          <h2 className="text-lg font-semibold text-purple-400 mb-4">
            Navigation
          </h2>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center justify-between hover:text-white">
              <span>All Files</span>
              <span className="bg-gray-700 text-gray-300 text-xs rounded-full px-2 py-1">
                235
              </span>
            </li>
            <li className="flex items-center justify-between hover:text-white">
              <span>Shared</span>
              <span className="bg-gray-700 text-gray-300 text-xs rounded-full px-2 py-1">
                12
              </span>
            </li>
            <li className="flex items-center justify-between hover:text-white">
              <span>Recent</span>
              <span className="bg-gray-700 text-gray-300 text-xs rounded-full px-2 py-1">
                89
              </span>
            </li>
          </ul>
          <div className="mt-6 text-gray-500 text-sm">
            <p>Settings</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-3/4">
          {/* Actions Bar */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-gray-300">
              <button className="hover:text-purple-400">All</button>
              <button className="ml-4 hover:text-purple-400">Active</button>
              <button className="ml-4 hover:text-purple-400">Completed</button>
              <button className="ml-4 hover:text-purple-400">Apps</button>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search contract..."
                className="bg-gray-800 text-gray-300 rounded px-4 py-2 outline-none placeholder-gray-500"
              />
              <button className="bg-gray-800 text-gray-300 hover:text-purple-400 rounded px-4 py-2">
                File Type
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-700 text-gray-400">
                <tr>
                  <th className="p-4 text-left">Subject Name</th>
                  <th className="p-4 text-left">Type</th>
                  <th className="p-4 text-left">Subject Code</th>
                  <th className="p-4 text-left">Unlocks at</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-700 hover:bg-gray-700"
                  >
                    <td className="p-4 flex items-center space-x-3 text-gray-300">
                      <span className="text-purple-400">
                        {doc.type === "pdf" ? "📄" : "📃"}
                      </span>
                      <span>{doc.name}</span>
                    </td>
                    <td className="p-4 text-gray-300">{doc.type}</td>
                    <td className="p-4 text-gray-300">{doc.contractor}</td>
                    <td className="p-4 text-gray-300">{doc.ssn}</td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          doc.status === "Active"
                            ? "bg-green-600 text-green-100"
                            : "bg-purple-600 text-purple-100"
                        }`}
                      >
                        {doc.status}
                      </span>
                    </td>
                    <td className="p-4 flex items-center space-x-4">
                      <button
                        className="text-gray-400 hover:text-purple-400"
                        
                      >
                        📥
                      </button>
                      <button className="text-gray-400 hover:text-purple-400">
                        ⋮
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default QuestionPaper;
