import EditProfile from "../EditProfile"
import Layout from "../Layout";
import NoPost from "../NoPost";
import PostnLikes from "../PostnLikes";


function Profile() {
  return (
    <>
      <Layout variant="wide">
         <EditProfile />
        <PostnLikes />
        <NoPost/>

      </Layout>
      </>
  );
}

export default Profile
