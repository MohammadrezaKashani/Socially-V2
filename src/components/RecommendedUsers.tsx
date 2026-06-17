function RecommendedUsers() {
  return (
      <>
          
            
         
      <div className="bg-card rounded-xl border border-border">
        <div className="text-primary p-5"> Recommended users</div>

        <div className="flex items-center justify-between p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold"></div>
            <div>
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
