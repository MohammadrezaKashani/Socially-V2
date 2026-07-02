import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import { Routes,Route } from "react-router";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="notifications" element={<Notifications />} />
         <Route path="profile" element={<Profile />} />
      </Routes>


      



    </>
  );
}

export default App;
