import EditProfile from "../EditProfile"
import ProfileCard from "../ProfileCard"


function Profile() {
  return (
    <main className="bg-background">
        <div className="flex justify-between"> 
            {/* <ProfileCard / > */}
            <EditProfile />
        </div>
    </main>
  );
}

export default Profile
