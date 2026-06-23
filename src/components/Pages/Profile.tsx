import EditProfile from "../EditProfile"
import NoPost from "../NoPost";
import PostnLikes from "../PostnLikes";
import ProfileCard from "../ProfileCard"


function Profile() {
  return (
    <main className="bg-background">
        <div className="flex flex-col gap-5 justify-between"> 
            <EditProfile />
            <PostnLikes />
            <NoPost />
        </div>
    </main>
  );
}

export default Profile
