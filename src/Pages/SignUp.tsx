import { z } from "zod";

const registerSchema = z.object({
  Name: z.string().min(3, "Name must be at least 3 characters long "),
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 6 characters long"),
});

const SignUp = () => {
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary p-12  text-muted-foreground">
      <div className="flex w-full max-w-4xl bg-card rounded-xl border border-[#ffffff1a] overflow-hidden min-h-100 shadow-md">
        
        
        <div className="w-full md:w-1/2 p-8 md:p-7 flex flex-col justify-center">
          <div className="text-center mb-6">
            <h1 className="text-foreground text-2xl font-semibold mb-2">Create your account</h1>
            <p className="text-muted-foreground text-md">Enter your email below to create your account</p>
          </div>

          <form className="space-y-4" >
          <div className="mb-7">
              <label htmlFor="email" className="block text-foreground text-sm font-medium mb-3">
                Name
              </label>
              <input
                id="Name"
                type="Name"
                placeholder="Enter your name"
                className="w-full bg-[#1c1c1c] border border-[#333] rounded-lg py-1 px-3 text-foreground placeholder-mutext-muted-foreground focus:outline-none  transition-all focus:border-white/50 focus:ring-4 focus:ring-white/10"
                
              />
              
            </div>

            <div className="mb-7">
              <label htmlFor="email" className="block text-foreground text-sm font-medium mb-3">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="w-full bg-[#1c1c1c] border border-[#333] rounded-lg py-1 px-3 text-foreground placeholder-mutext-muted-foreground focus:outline-none  transition-all focus:border-white/50 focus:ring-4 focus:ring-white/10"
                
              />
              
            </div>

            <div>
              <label htmlFor="password" className="block text-foreground text-sm font-medium mb-3" >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full bg-[#1c1c1c] border border-[#333] rounded-lg py-1 px-3 text-foreground focus:outline-none  transition-all focus:border-white/50 focus:ring-4 focus:ring-white/10"
                
              />
               
            </div>

            <button
              type="submit"
              className="w-full bg-[#e1e1e1] hover:bg-white text-black font-semibold py-2 px-4 rounded-lg mt-4 transition-colors"
            >
              Create account
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
           Already have an account? <a href="#" className="text-muted-foreground underline underline-offset-4 hover:text-foreground">Sign In</a>
            </p>
          </div>
        </div>

       
        <div className="hidden md:block md:w-1/2 bg-secondary border-l border-[#ffffff1a]">
            <img className="object-cover h-full" src="src/Images/socially-v2-Dark.png" alt="Socially" />
        </div>
      </div>

      
      <footer className="mt-8 text-center text-sm text-muted-foreground">
        By clicking continue, you agree to our{' '}
        <a href="#" className="underline underline-offset-2 hover:text-primary">Terms of Service</a> and{' '}
        <a href="#" className="underline underline-offset-2 hover:text-primary">Privacy Policy</a>.
      </footer>
    </div>
  )
}

export default SignUp
