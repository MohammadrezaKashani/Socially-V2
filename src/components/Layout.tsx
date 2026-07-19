import Header from "./Header";
import ProfileCard from "./ProfileCard";

interface LayoutProps {
  children: React.ReactNode;
  rightSidebar?: React.ReactNode;
  variant?: "feed" | "wide"; // feed:3/6/3   wide:3/9
}

function Layout({ children, rightSidebar, variant="feed" }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 p-4">
        <div className="hidden md:block md:col-span-3">
          <div className="sticky top-24 ">
            <ProfileCard />
          </div>
        </div>

        <div
          className={
            variant === "feed"
              ? "md:col-span-6 space-y-6  pr-2"
              : "md:col-span-9"
          }
        >
         
            {children}
          
        </div>

        {variant === "feed" && (
          <div className="hidden md:block md:col-span-3">
             <div className="sticky top-24 ">
            {rightSidebar}
          </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Layout;
