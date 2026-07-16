import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Send } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";
import api from "../lib/axios";
import { useState } from "react";

async function createPost(payload: { content: string }) {
  const res = await api.post("/api/posts", payload);
  return res.data;
}

function CreatePosts() {
  const [formData, setFormData] = useState({ content: "" });

  const queryClient = useQueryClient();

  const { mutate ,isPending} = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      setFormData({ content: "" });
    },
  });
  return (
    <form
      className="border border-border bg-card p-5 rounded-xl"
      onSubmit={(e) => {
        e.preventDefault();
        if (!formData.content.trim()) return;
        mutate(formData);
      }}
    >
      <div className="flex items-start ">
        <img
          className="size-14"
          src="src/assets/Images/Profilepic.png"
          alt="people"
        />

        <TextareaAutosize
          minRows={2}
          placeholder="Whats on your mind?"
          className="text-primary resize-none w-full outline-none pt-2 placeholder:text-muted-foreground"
          value={formData.content}
          onChange={(e) => {
            setFormData({ ...formData, content: e.target.value });
          }}
        />
      </div>

      <div className="border-t border-border my-3 mx-auto w-[95%]"></div>

      <div className="flex justify-end">
        <button
          className="flex justify-center items-center gap-2 bg-primary px-3 py-1 rounded-md hover:bg-primary/80"
          type="submit"
          disabled={isPending || !formData.content.trim()}
        >
          <Send className="w-4 h-4 " />
          <span className="text-card">
            {isPending ? "Posting..." : "Post"}
          </span>
        </button>
      </div>
    </form>
  );
}

export default CreatePosts;
