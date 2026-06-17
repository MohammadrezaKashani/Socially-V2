import { IoLocationOutline } from "react-icons/io5";
import { FiLink } from "react-icons/fi";



function ProfileCard() {
  return (
      <div className=" hidden lg:flex lg:flex-col bg-card text-foreground  justify-center items-center rounded-xl border py-6  gap-6 border-border">
        <section>
            <button className="flex flex-col items-center cursor-pointer w-full">
                <img className="size-23 " src="src/assets/Images/Profilepic.png" alt="people" />
                <h2 className="font-extrabold">
                    Name
                </h2>
                <p className="text-muted-foreground text-sm">
                    Your Id .................................
                </p>
            </button>
        </section>
            <hr className="w-[80%] text-muted-foreground" />
        <section className="w-[80%]">
            <div className="flex justify-between items-center ">
                <div className="flex flex-col items-center">
                    <p className="font-bold">0</p>
                    <p className="text-muted-foreground">Following</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="font-bold">0</p>
                    <p className="text-muted-foreground">Followers</p>
                </div>
            </div>
        </section>
        <hr className="w-[80%] text-muted-foreground" />
        <section className="w-[80%] text-muted-foreground">
            <div className="flex flex-col items-start justify-start gap-3">
            <div className="flex items-center gap-1.5">
             <IoLocationOutline />
                 <p>
               Your Location
                </p>
         </div>
         <div className="flex items-center gap-1.5">
            <FiLink />
                 <p>
               Your Website
                </p>
         </div>
         </div>
        </section>
      </div> 
  )
}

export default ProfileCard
