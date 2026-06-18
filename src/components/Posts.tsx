import { Heart, MessageCircle } from "lucide-react";

function Posts() {
  return (
      <div className="border border-border bg-card rounded-xl p-6">
          <div className="flex flex-col items-start justify-center">
              
      <div className="flex items-center justify-start">
        <img
          className="size-14 -ml-3"
          src="src/assets/Images/Profilepic.png"
          alt="people"
                  />
                  
                  <div className="flex gap-6 md:hidden">
                      <div className="flex flex-col items-start">
                           <span className="text-primary font-bold"> name</span>
          <span className="text-muted-foreground">username</span>
                      </div>
                       <span className="text-muted-foreground">time</span>
                      
                  </div>
        <div className=" gap-5 hidden md:flex">          
          <span className="text-primary font-bold"> name</span>
          <span className="text-muted-foreground">username</span>
          <span className="text-muted-foreground">time</span>
        </div>
      </div>
        <div className="mb-8">
      <p className="text-primary ">
        some comments: Lorem ipsum, dolor sit amet consectetur
              </p>
              </div>

      <div className="flex gap-8">
        <button className="hover:bg-asent px-3 py-1 rounded-md flex gap-2.5 items-center cursor-pointer">
          <Heart className="w-4 h-4 group-hover:fill-current text-muted-foreground" />
          <span className="text-muted-foreground">5</span>
        </button>
        <button className="hover:bg-asent  px-3 py-1 rounded-md flex gap-2.5 items-center cursor-pointer">
          <MessageCircle className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">8</span>
        </button>
      </div>
      </div>
    </div>
  );
}

export default Posts;
