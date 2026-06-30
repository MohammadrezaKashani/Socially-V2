import Header from "../Header";
import NotificationsCard from "../NotificationsCard";
import ProfileCard from "../ProfileCard";

function Notifications() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <div className="grid grid-cols-1 md:grid-cols-12  p-4 gap-6 border border-border ">
          <div className="hidden md:block md:col-span-3">
            <ProfileCard />
          </div>
          <div className="md:col-span-9 ">
            <NotificationsCard />
          </div>
        </div>
      </main>
    </>
  );
}

export default Notifications;
