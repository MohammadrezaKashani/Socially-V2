import React from 'react';

function SignIn() {
    return (
      
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1a1a] p-4"> 
            
            
            <div className="w-full max-w-sm bg-[#2c2c2c] p-8 rounded-lg shadow-xl"> 
                
        <h2 className="text-center text-white text-3xl font-extrabold mb-2">Welcome back</h2> 
        <p className="text-center text-gray-400 mb-6">Login to your Socially account</p> 

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="m@example.com"
              className="shadow appearance-none border border-[#404040] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#3a3a3a]" 
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-white text-sm font-bold mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="shadow appearance-none border border-[#404040] rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline bg-[#3a3a3a]" 
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              type="submit" 
              className="w-full bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-center text-xs text-gray-500 mt-8">
          By clicking continue, you agree to our <a className="text-white border-b-2">Terms of Service</a> and <a className="text-white border-b-2">Privacy Policy</a>.
        </p>
            </div>
            
            
    </div>
  )
}

export default SignIn;
