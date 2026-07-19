import React from "react";
import { Link } from "react-router-dom";

function WelcomeBackComponent() {
  return (
    <div className="flex flex-col items-center bg-card text-foreground rounded-xl border border-border p-6 gap-3 w-full">
      <p className="text-primary font-bold text-xl">Welcome Back!</p>
      <p className="text-muted-foreground text-center text-[14px]">
        Sign in to access your profile and connect with others.
      </p>
      <div className="flex flex-col w-full gap-2.5 mt-3">
        <Link to="/signIn" className=" text-center border border-border rounded-md text-primary py-1 bg-asent hover:bg-input/90">
          Sign in
        </Link>
        <Link to='/signUp' className="text-center text-card bg-primary  rounded-md py-1 hover:bg-primary/70">
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default WelcomeBackComponent;
