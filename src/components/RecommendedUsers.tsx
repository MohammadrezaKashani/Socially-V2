import { useRecommendedUsers } from "../hooks/useRecommendedUsers";
import defaultProfilePic from "../assets/Images/Profilepic.png";
import { useToggleFollow } from "../hooks/useToggleFollow";

function RecommendedUsers() {
  const { data } = useRecommendedUsers();
  const { mutate, isPending } = useToggleFollow();
  const users = data?.data || [];
  if (users.length === 0) {
    return (
      <div className="bg-card rounded-xl border border-border flex flex-col items-start justify-center">
        <div className="text-primary p-5 font-bold text-xl">
          Recommended users
        </div>
        <p className="text-indigo-500 px-4 py-2">
          No users to recommend. You’re following everyone.
        </p>
      </div>
    );
  }
  return (
    <>
      <div className="bg-card rounded-xl border border-border">
        <div className="text-primary p-5 font-bold text-xl">
          Recommended users
        </div>
        <div className="flex flex-col">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between px-3 py-1 "
            >
              <div className="flex items-center gap-3">
                <img
                  className="size-14 rounded-full object-cover"
                  src={user.image || defaultProfilePic}
                  alt="people"
                />
                <div className="-ml-3">
                  <h4 className="text-primary  font-medium">{user.name}</h4>
                  <p className="text-muted-foreground ">
                    {user._count.followers}{" "}
                    {user._count.followers === 1 ? "follower" : "followers"}
                  </p>
                </div>
              </div>

              <button
                className="bg-card hover:bg-asent border border-border  text-primary font-bold px-4 py-1.5 rounded-xl transition-all shadow-xl"
                onClick={() => {
                  mutate(user.id);
                }}
                disabled={isPending}
              >
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RecommendedUsers;
