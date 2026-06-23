
function PostnLikes() {
  return (
    <div className="flex items-center justify-center bg-card rounded-xl py-1 px-1 gap-1 w-full">
      <button id="deactive" className="cursor-pointer hover:bg-neutral-800 w-1/2 text-neutral-400 rounded-lg">Posts</button>
      <button id="active" className="cursor-pointer hover:bg-neutral-800 bg-neutral-700 w-1/2 border text-foreground border-border rounded-lg">Likes</button>
    </div>
  )
}

export default PostnLikes
