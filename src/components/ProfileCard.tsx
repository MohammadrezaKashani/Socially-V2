import { IoLocationOutline } from "react-icons/io5";
import { FiLink } from "react-icons/fi";
import { useSession } from "../hooks/useSession";
import { userName } from "../utils/userName";

function ProfileCard() {
  const { data } = useSession();
  const user = data?.data?.user;
  return (
    <div className="hidden lg:flex flex-col items-center bg-card text-foreground rounded-xl border border-border p-6 gap-6 w-full ">
      
      <button className="flex flex-col items-center text-center gap-1 cursor-pointer">
        <img 
          className="size-24 rounded-full object-cover" 
          src="src/assets/Images/Profilepic.png" 
          alt="people" 
        />
        <h2 className="font-extrabold text-lg">{user?.name}</h2>
        <p className="text-muted-foreground text-sm">{userName(user?.email)}</p>
      </button>

      <div className="w-full border-t border-border"></div>
      
      <div className="flex justify-between w-full">
        <div className="flex flex-col items-center">
          <p className="font-bold">0</p>
          <p className="text-muted-foreground text-sm">Following</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold">0</p>
          <p className="text-muted-foreground text-sm">Followers</p>
        </div>
      </div>

      <div className="w-full border-t border-border"></div>
      
      
      <div className="w-full flex flex-col items-start gap-3 text-muted-foreground">
        <div className="flex items-center gap-2">
          <IoLocationOutline className="size-5" />
          <p className="text-sm">Your Location</p>
        </div>
        <div className="flex items-center gap-2">
          <FiLink className="size-5" />
          <p className="text-sm">Your Website</p>
        </div>
      </div>
      
    </div>
  );
}

export default ProfileCard;
