"use client";

import type { NextPage } from "next";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";

const CreateBlog: NextPage = () => {
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the content to an API endpoint
    console.log("Blog content:", content);
    alert("Blog saved! (This is a demo, check console for content)");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
          <h2 className="text-2xl text-primary-purple font-bold mb-4">
            Create New Blog
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <ReactQuill
              value={content}
              onChange={setContent}
              className="h-64 mb-4"
              placeholder="Write your blog content here..."
            />
            <button
              type="submit"
              className="w-full mt-4 p-2 bg-primary-purple text-white rounded hover:bg-primary-purple/90"
            >
              Save Blog
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
