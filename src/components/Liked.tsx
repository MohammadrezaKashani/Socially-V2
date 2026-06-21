import { Heart } from "lucide-react";


function Liked() {
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
                      <Heart className="w-4 h-4 text-red-500" />
                          <p className="text-muted-foreground"><span className="text-primary">name</span> liked your post</p>
                      </div>
                     
                      <p className="text-primary">متن پیام لایک شده</p>
                      <p className="text-muted-foreground"> time </p>
          </div>
        </div>
            </div>
            </>
  )
}

export default Liked
