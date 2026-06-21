import { MessageCircle } from "lucide-react";

function Commented() {
  return (
    <>
      <div className="bg-asent rounded-xl ">
        <div className="flex justify-start items-start py-2 gap-1.5">
          <img
            className="size-14 rounded-full object-cover -mt-2"
            src="src/assets/Images/Profilepic.png"
            alt="people"
          />

                  <div className="flex flex-col gap-5 ">
                      <div className="flex items-center gap-3">
                      <MessageCircle className="w-4 h-4 text-blue-500" />
                          <p className="text-muted-foreground"><span className="text-primary">name</span> commented on your post</p>
                      </div>
                      <p className="text-primary">comment خود طرف</p>
                      <p className="text-primary">comment جواب</p>
                      <p className="text-muted-foreground"> time </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Commented;
