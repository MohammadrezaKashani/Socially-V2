
import SignIn from './components/pages/SignIn'
import SignUp from './components/pages/SignUp'
import Header from './components/Header'
import RecommendedUsers from './components/RecommendedUsers' 



function App() {
  

  return (
    <>
      {/* <SignIn/>
      <SignUp/> */}
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-4">
        <div className="hidden md:block md:col-span-3">سمت راست</div>
        <div className='md:col-span-6 space-y-6'>وسط</div>
        <div className='hidden md:block md:col-span-3'> <RecommendedUsers/></div>
      </div>
      
       
      
      
    </>
  )
}

export default App
