function RecommendedUsers() {
  return (
      <>
          
            
         
      <div className="bg-card rounded-xl border border-border">
        <div className="text-primary p-5 font-bold text-xl"> Recommended users</div>

        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-3">
            <img 
          className="size-14 rounded-full object-cover" 
          src="src/assets/Images/Profilepic.png" 
          alt="people" 
        />
            <div className="-ml-3">
              <h4 className="text-primary  font-medium">name</h4>
              <p className="text-muted-foreground "> 0 followers</p>
            </div>
          </div>

          <button className="bg-card hover:bg-asent border border-border  text-primary font-bold px-4 py-1.5 rounded-xl transition-all shadow-xl">
            Follow
          </button>
        </div>
              </div>
              
    </>
  );
}

export default RecommendedUsers;
