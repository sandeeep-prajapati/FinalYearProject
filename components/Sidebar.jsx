// Sidebar.js
import React from 'react';

const Sidebar = ({ recentFiles }) => {
  return (
    <div className="w-64 bg-zinc-900 p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold text-white mb-4">Recent Files</h2>
      <div className="space-y-4">
        {recentFiles.length > 0 ? (
          recentFiles.map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              <div>
                <p className="text-sm text-gray-200">{file.name}</p>
                <p className="text-xs text-gray-400">{file.size} MB</p>
              </div>
              <span className="text-xs text-gray-500">{file.lastModified}</span>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No recent files uploaded.</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
