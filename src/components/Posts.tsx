import { useQuery } from "@tanstack/react-query";
import { Heart, MessageCircle } from "lucide-react";
import api from "../lib/axios";
import { timeAgo } from "../utils/timeAgo";
import { userName } from "../utils/userName";

type Post = {
  id: string;
  authorId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  author?: {
    name?: string;
    email?: string;
    image?: string | null;
  };
  likes?: unknown[];
  comments?: unknown[];
  _count?: {
    likes?: number;
    comments?: number;
  };
};

async function getPosts() {
  const res = await api.get("/api/posts");
  return res.data;
}
function Posts() {
  const { data: response } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  return (
    <div className="flex flex-col gap-4">
      {response?.data?.map((post: Post) => (
        <div className="border border-border bg-card rounded-xl px-6 py-4">
          <div className="flex flex-col items-start justify-center">
            <div className="flex items-center justify-start">
              <img
                className="size-14 -ml-3"
                src="src/assets/Images/Profilepic.png"
                alt="people"
              />

              <div className="flex gap-6 md:hidden">
                <div className="flex flex-col items-start">
                  <span className="text-primary font-bold">
                    {" "}
                    {post.author?.name}
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    {post.author?.email}
                  </span>
                </div>
                <span className="text-muted-foreground">
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className=" gap-5 hidden md:flex">
                <span className="text-primary font-bold">
                  {" "}
                  {post.author?.name}
                </span>
                <span className="text-muted-foreground">@{userName(post.author?.email)}</span>
                <span className="text-muted-foreground">
                  {timeAgo(post.createdAt)}
                </span>
              </div>
            </div>
            <div className="mb-8">
              <p className="text-primary ">{post.content}</p>
            </div>

            <div className="flex gap-8">
              <button className="hover:bg-asent px-3 py-1 rounded-md flex gap-2.5 items-center cursor-pointer">
                <Heart className="w-4 h-4 group-hover:fill-current text-muted-foreground" />
                <span className="text-muted-foreground">
                  {post._count?.likes ?? 0}
                </span>
              </button>
              <button className="hover:bg-asent  px-3 py-1 rounded-md flex gap-2.5 items-center cursor-pointer">
                <MessageCircle className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  {post._count?.comments ?? 0}
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
