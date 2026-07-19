import Header from "../components/Header";
import Posts from "../components/Posts";
import WelcomeBackComponent from "../components/WelcomeBackComponent";
function WelcomeBack() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 p-4">
          <div className="hidden md:block md:col-span-3">
            <div className="sticky top-24 ">
              <WelcomeBackComponent />
            </div>
          </div>
          <div className="md:col-span-6 space-y-6  pr-2">
            <Posts />
          </div>
        </main>
      </div>
    </>
  );
}

export default WelcomeBack;
