import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import RecommendedUsers from "./components/RecommendedUsers";
import ProfileCard from "./components/ProfileCard";
import CreatePosts from "./components/CreatePosts";
import Posts from "./components/Posts";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Layout from "./components/Layout";
import EditProfileCard from "./components/EditProfileCard";

function App() {
  return (
    <>
      {/* <SignIn/>
      <SignUp/> */}
      {/* <Header />
      <div className=''>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-4">
        <div className="hidden md:block md:col-span-3"><ProfileCard/></div>
        <div className='md:col-span-6 space-y-6'>
        <Profile />
          <CreatePosts />
          <Posts/>
        </div>
        <div className='hidden md:block md:col-span-3'> <RecommendedUsers/></div>
      </div> 
      </div> */}
      {/* <Profile/> */}
      <Layout rightSidebar={<RecommendedUsers />}>
        <CreatePosts />
        <Posts />
        <EditProfileCard />
      </Layout>
    </>
  );
}

export default App;
