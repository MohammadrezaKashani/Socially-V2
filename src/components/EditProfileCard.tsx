import TextareaAutosize from "react-textarea-autosize";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useSession } from "../hooks/useSession";
import { useUpdateProfile } from "../hooks/useUpdateProfile";

type EditProfileCardProps = {
  onClose: () => void;
  profile?: {
    name?: string;
    bio?: string | null;
    location?: string | null;
    website?: string | null;
  };
};

function EditProfileCard({ onClose, profile }: EditProfileCardProps) {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const { data } = useSession();
  const userId = data?.data?.user?.id;

  const { mutate: updateProfile } = useUpdateProfile();
  useEffect(() => {
    if (!profile) return;
    setName(profile.name ?? "");
    setBio(profile.bio ?? "");
    setLocation(profile.location ?? "");
    setWebsite(profile.website ?? "");
  }, [profile]);
  function handleSaveChanges() {
    if (!userId) return;

    updateProfile(
      {
        userId,
        name,
        bio,
        location,
        website,
      },
      {
        onSuccess: () => {
          onClose();
        },
      },
    );
  }

  return (
    <div className="text-white fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
      <div className="sm:w-[90%] md:w-[40%] xl:w-1/4 rounded-xl bg-background border border-border p-7">
        <div className="flex justify-end">
          <button
            className="text-neutral-400 cursor-pointer hover:text-foreground transition-colors duration-150"
            onClick={onClose}
          >
            <IoClose className="size-5" />
          </button>
        </div>
        <h3 className="font-bold text-xl">Edit profile</h3>
        <p className="text-sm my-1.5 mb-5 text-neutral-400">
          Make changes to your profile here. Click save when you're done.
        </p>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-sm">Name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-card border border-border p-2 rounded-xl font-semibold text-sm selection:bg-foreground selection:text-background"
            type="text"
            placeholder="Enter your name"
          />
          <span className="font-semibold text-sm">Bio</span>
          <TextareaAutosize
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            minRows={2}
            placeholder="Enter your bio"
            className="text-primary resize-none w-full bg-card border border-border p-2 rounded-xl font-semibold text-sm selection:bg-foreground selection:text-background"
          />
          <span className="font-semibold text-sm">Location</span>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-card border border-border p-2 rounded-xl font-semibold text-sm selection:bg-foreground selection:text-background"
            type="text"
            placeholder="Enter your location"
          />
          <span className="font-semibold text-sm">Website</span>
          <input
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="bg-card border border-border p-2 rounded-xl font-semibold text-sm selection:bg-foreground selection:text-background"
            type="text"
            placeholder="Enter your website"
          />
        </div>
        <div className="flex flex-col sm:flex-row  justify-end items-center gap-3 mt-7">
          <button
            className="border border-border hover:bg-neutral-500 transition-colors duration-200 px-2.5 py-1.5 rounded-xl cursor-pointer font-semibold w-full sm:w-fit"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-foreground text-background hover:bg-neutral-500 transition-colors duration-200 border border-border px-2.5 py-1.5 rounded-xl cursor-pointer font-semibold w-full sm:w-fit"
            onClick={handleSaveChanges}
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfileCard;
