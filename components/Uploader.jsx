import React, { useState } from 'react';
import { Upload, Search, Filter, ChevronLeft, Share, UserPlus, Plus, File, Settings,Folder,Users,Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

// const Sidebar = ({ recentFiles }) => (
//   <div className="bg-zinc-900 p-4 w-64 rounded-2xl shadow-lg flex-shrink-0">
//     <h2 className="text-white text-xl font-bold mb-4">Recent Files</h2>
//     <ul className="space-y-4">
//       {recentFiles.map((file) => (
//         <li key={file.id} className="flex items-center justify-between text-gray-400">
//           <span>{file.name}</span>
//           <span className="text-xs text-gray-500">{file.size} MB</span>
//         </li>
//       ))}
//     </ul>
//   </div>
// );


const Sidebar = ({ recentFiles }) => {
  const navigation = [
    { name: 'All Files', icon: Folder, count: '235' },
    { name: 'Shared', icon: Users, count: '12' },
    { name: 'Recent', icon: Clock, count: '89' },
  ];

  return (
    <div className="bg-zinc-900 p-6 w-72 rounded-2xl shadow-lg flex-shrink-0 flex flex-col gap-8">
      {/* New Project Button */}
      <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center gap-2">
        <Plus className="w-4 h-4" />
        New Project
      </Button>

      {/* Navigation Section */}
      <div>
        <h3 className="text-gray-400 text-sm font-medium mb-3 px-2">Navigation</h3>
        <nav className="space-y-1">
          {navigation.map((item) => (
            <button
              key={item.name}
              className="w-full flex items-center justify-between px-3 py-2 text-gray-300 hover:bg-zinc-800 rounded-lg group transition-colors"
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-4 h-4 text-gray-400 group-hover:text-indigo-400" />
                <span className="text-sm font-medium group-hover:text-white">
                  {item.name}
                </span>
              </div>
              <span className="text-xs text-gray-500 bg-zinc-800 px-2 py-1 rounded-full group-hover:bg-zinc-700">
                {item.count}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Recent Files Section */}
      <div>
        <h3 className="text-gray-400 text-sm font-medium mb-3 px-2">Recent Files</h3>
        <ul className="space-y-2">
          {recentFiles.map((file) => (
            <li 
              key={file.id}
              className="group px-3 py-2 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              <div className="flex items-center gap-3">
                <File className="w-4 h-4 text-indigo-400" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-200 truncate group-hover:text-white">
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {file.size} MB • {file.lastModified}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Settings Section */}
      <div className="mt-auto">
        <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-zinc-800 rounded-lg group transition-colors">
          <Settings className="w-4 h-4 text-gray-400 group-hover:text-indigo-400" />
          <span className="text-sm font-medium group-hover:text-white">Settings</span>
        </button>
      </div>
    </div>
  );
};





const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleFileUpload = (event) => {
    const newFiles = Array.from(event.target.files).map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(2),
      lastModified: new Date(file.lastModified).toLocaleDateString(),
      uploadedBy: 'Current User',
      email: 'user@example.com'
    }));
    setFiles([...files, ...newFiles]);
  };

  return (
    <div className="flex gap-6 ">
      {/* Sidebar Component */}
      <Sidebar recentFiles={files.slice(-5)} />

      {/* Main File Upload Area */}
      <div className="flex-1 p-6 bg-zinc-900 rounded-2xl shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <button className="flex items-center text-sm text-gray-400 hover:text-gray-200">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to All Projects
            </button>
            <h1 className="text-2xl font-bold text-white">My Files & Assets</h1>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2 border-zinc-700 text-white-200 hover:text-white hover:bg-zinc-800">
              <Share className="w-4 h-4" />
              Share
            </Button>
            <Button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white">
              <UserPlus className="w-4 h-4" />
              Add Collaborator
            </Button>
          </div>
        </div>

        {/* Upload Area */}
        <div className="border-2 border-dashed border-zinc-700 rounded-xl p-8 mb-6 text-center bg-zinc-800/50">
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileUpload}
            multiple
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex flex-col items-center gap-2"
          >
            <Upload className="w-8 h-8 text-indigo-400" />
            <span className="text-gray-300">Click here to upload your file or drag.</span>
            <span className="text-sm text-gray-500">
              Supported Format: SVG, JPG, PNG (10mb each)
            </span>
          </label>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg 
                       text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 
                       focus:ring-indigo-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2 border-zinc-700 text-white-200 hover:text-white  hover:bg-zinc-800">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>

        {/* Files Table */}
        <div className="border border-zinc-700 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-zinc-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  File Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  File Size
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Last Modified
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Uploaded By
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-700 bg-zinc-800/50">
              {files.map((file) => (
                <tr key={file.id} className="hover:bg-zinc-800 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-200">{file.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-400">{file.size} MB</td>
                  <td className="px-6 py-4 text-sm text-gray-400">{file.lastModified}</td>
                  <td className="px-6 py-4 text-sm text-gray-400">{file.email}</td>
                  <td className="px-6 py-4 text-sm text-right space-x-2">
                    <button className="text-indigo-400 hover:text-indigo-300">Edit</button>
                    <button className="text-red-400 hover:text-red-300">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
