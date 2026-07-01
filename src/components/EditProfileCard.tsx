import TextareaAutosize from 'react-textarea-autosize';
import { IoClose } from "react-icons/io5";

function EditProfileCard() {
  return (
    <div className="text-white fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
        <div className="sm:w-[90%] md:w-[40%] xl:w-1/4 rounded-xl bg-background border border-border p-7">
          <div className='flex justify-end'>
            <button className='text-neutral-400 cursor-pointer hover:text-foreground transition-colors duration-150'>
            <IoClose className='size-5' />
            </button>
          </div>
          <h3 className="font-bold text-xl">
            Edit profile
          </h3>
          <p className="text-sm my-1.5 mb-5 text-neutral-400">
          Make changes to your profile here. Click save when you're done.
          </p>
          <div className="flex flex-col gap-2">
              <span className="font-semibold text-sm">
                Name
              </span>
              <input
               className="bg-card border border-border p-2 rounded-xl font-semibold text-sm selection:bg-foreground selection:text-background" type="text" placeholder="Enter your name"
                />
                <span className="font-semibold text-sm">
                    Bio
                </span>
              <TextareaAutosize
            minRows={2}
            placeholder="Enter your bio"
            className="text-primary resize-none w-full bg-card border border-border p-2 rounded-xl font-semibold text-sm selection:bg-foreground selection:text-background"
          />
              <span className="font-semibold text-sm">
                Location
                </span>
              <input
               className="bg-card border border-border p-2 rounded-xl font-semibold text-sm selection:bg-foreground selection:text-background" type="text" placeholder="Enter your location" 
               />
              <span className="font-semibold text-sm">
                Website
                </span>
              <input
               className="bg-card border border-border p-2 rounded-xl font-semibold text-sm selection:bg-foreground selection:text-background" type="text" placeholder="Enter your website" 
               />
          </div>
          <div className='flex flex-col sm:flex-row  justify-end items-center gap-3 mt-7'>
           <button className='border border-border hover:bg-neutral-500 transition-colors duration-200 px-2.5 py-1.5 rounded-xl cursor-pointer font-semibold w-full sm:w-fit'>Cancel</button>
           <button className='bg-foreground text-background hover:bg-neutral-500 transition-colors duration-200 border border-border px-2.5 py-1.5 rounded-xl cursor-pointer font-semibold w-full sm:w-fit'>Save changes</button>
          </div>
      </div>
    </div>
  )
}

export default EditProfileCard
