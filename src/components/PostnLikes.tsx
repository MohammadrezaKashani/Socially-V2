import { useState } from "react";

function PostnLikes() {
  const [activeTab, setActiveTab] = useState("Posts");  
  return (
    <div className="flex w-full items-center justify-between rounded-xl bg-card p-1 gap-1">
      <button
        className={`flex-1 py-1 rounded-lg transition-all duration-100 font-medium ${activeTab === "Posts" ?  "bg-neutral-800 text-white border border-neutral-600 shadow-sm" : "text-neutral-500 "}`}
        onClick={() => setActiveTab("Posts")}
      >
        Posts
      </button>
      
      <button
        className={`flex-1 py-1 rounded-lg transition-all duration-100 font-medium ${activeTab === "Likes" ?  "bg-neutral-800 text-white border border-neutral-600 shadow-sm" : "text-neutral-500 "}`}
        onClick={() => setActiveTab("Likes")}
      >
        Likes
      </button>
    </div>
  );
}

export default PostnLikes;
