import { IoLocationOutline } from "react-icons/io5";
import { FiLink } from "react-icons/fi";
import { FaRegCalendar } from "react-icons/fa6";
import EditProfileCard from "./EditProfileCard";
import { useState } from "react";
import { useSession } from "../hooks/useSession";
import { useInformationUserName } from "../hooks/useInformationUserName";
import { timeAgo } from "../utils/timeAgo";
import { userName } from "../utils/userName";

function EditProfile() {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const handleEdit = () => {
    setIsEditProfileOpen(true);
  };
  const { data: sessionData } = useSession();
  const user = sessionData?.data?.user;
  const userNamee = user?.email;

  const { data: profileName } = useInformationUserName(userName(userNamee));

  return (
    <div className="flex flex-col bg-card text-foreground rounded-xl border border-border py-6 gap-6 w-full max-w-xl mx-auto px-6 mb-7">
      <section>
        <button className="flex flex-col items-center cursor-pointer w-full gap-2">
          <img
            className="size-25 "
            src="src/assets/Images/Profilepic.png"
            alt="profile"
          />
          <h2 className="font-extrabold">{profileName?.name}</h2>
          <p className="text-muted-foreground text-sm">
            {userName(profileName?.email)}
          </p>
        </button>
      </section>
      <section className="w-full">
        <div className="flex justify-between items-center ">
          <div className="flex flex-col items-center">
            <p className="font-bold">{profileName?._count?.followings}</p>
            <p className="text-muted-foreground">Following</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">{profileName?._count?.followers}</p>
            <p className="text-muted-foreground">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">{profileName?._count?.posts}</p>
            <p className="text-muted-foreground">Posts</p>
          </div>
        </div>
      </section>
      <button
        className=" w-full border bg-foreground text-background  rounded-lg font-semibold py-1.5 hover:bg-neutral-400 duration-100 transition-colors cursor-pointer"
        onClick={handleEdit}
      >
        Edit Profile
      </button>
      {isEditProfileOpen && (
        <EditProfileCard onClose={() => setIsEditProfileOpen(false)}
         profile={profileName}/>
      )}
      <section className="w-full text-muted-foreground">
        <div className="flex flex-col items-start justify-start gap-3">
          <div className="flex items-center gap-1.5">
            <IoLocationOutline />
            <p className="text-sm">{profileName?.location || "No location"}</p>
          </div>
          <div className="flex items-center gap-1.5">
            <FiLink />
            <p className="text-sm">{profileName?.website || "No Website"}</p>
          </div>
          <div className="flex items-center gap-1.5">
            <FaRegCalendar />
            <p className="text-sm">
              {profileName && timeAgo(profileName.createdAt)}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EditProfile;
