import { Send } from "lucide-react";
import TextareaAutosize from 'react-textarea-autosize';

function CreatePosts() {
  return (
    <div className="border border-border bg-card p-5 rounded-xl">
     
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
          ></TextareaAutosize>
        </div>

        <div className="border-t border-border my-3 mx-auto w-[95%]"></div>
    

      <div className="flex justify-end">
        <button
          className="flex justify-center items-center gap-2 bg-primary px-3 py-1 rounded-md hover:bg-primary/80"
          type="submit"
        >
          <Send className="w-4 h-4 " />
          <span className="text-card">Post</span>
        </button>
      </div>
    </div>
  );
}

export default CreatePosts;
