import Layout from "../components/Layout"
import CreatePosts from "../components/CreatePosts"
import Posts from "../components/Posts"
import RecommendedUsers from "../components/RecommendedUsers"


function Home() {
  return (
      <>
        <Layout rightSidebar={<RecommendedUsers />}>
        <CreatePosts />
        <Posts />
    
      </Layout>
      </>
  )
}

export default Home
