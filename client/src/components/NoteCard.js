import React from "react";
import { Link } from "react-router-dom";

const NoteCard = ({ note }) => {
  if (!note) {
    return (
      <div className="card m-2 border border-gray-300 rounded-lg p-4">
        <p className="text-sm text-gray-500">No data available</p>
      </div>
    );
  }

  const { id, title, content, author } = note;

  return (
    <Link to={`/notes/${id}`}>
      <div className="card m-2 cursor-pointer border border-purple-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
        <div className="m-4">
          <h2 className="text-lg mb-2 text-purple-900">{title}</h2>
          <p className="font-light font-mono text-sm text-indigo-600 hover:text-gray-900 transition-all duration-200">
            {content}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
