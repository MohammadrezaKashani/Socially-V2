import EditProfile from "../components/EditProfile";
import Layout from "../components/Layout";
import NoPost from "../components/NoPost";
import PostnLikes from "../components/PostnLikes";

function Profile() {
  return (
    <>
      <Layout variant="wide">
        <EditProfile />
        <PostnLikes />
        <NoPost />
      </Layout>
    </>
  );
}

export default Profile;
