import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import WelcomeBack from "./pages/WelcomeBack";
import { useSession } from "./hooks/useSession";
import { Navigate } from "react-router-dom";

// function ProtectedRoute({ children }: { children: React.ReactNode }) {
//   const { data, isLoading } = useSession();
//   const isLoggedIn = !!data?.data?.user;

//   if (isLoading) return null;

//   if (isLoggedIn) {
//     return <Navigate to="/" replace />;
//   }

//   return <>{children}</>;
// }
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomeBack />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
