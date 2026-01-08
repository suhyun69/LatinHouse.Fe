export default function HeroSection() {
  return (
    <div className="w-full bg-background-page relative">
      <div className="px-6 md:px-20 lg:px-40 py-8">
        <div className="@container">
          <div
            className="flex flex-col md:flex-row gap-6 bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden relative min-h-[360px] items-center justify-start p-8 md:p-14 shadow-2xl shadow-orange-900/20"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 60%, rgba(0,0,0,0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYJ5acO-vzODQZNxWTUgBIeBIO9TkWRdL5TiL1b2cDrcPl8XFUrgx_PPMgpQq4SI0rJCkjM9SOKdMmiqNu6uNrR4N3iLTlHMQ4DO2r_5PbZTJnpB-MfSIYiHXqTIf93cLHxKhgS_HuppWI1Z4k8LcXngb7PL-M9uk1zguZ47P7edu_iZiMAxPGghbScDYzQ80vEgragYiY7NoBSmp1ft7Z2fMAVQdTAx-yFg5Xo7g3RaoXsjwZhYZ8LFwcFibHEVsliDDfQWCxzc0")`
            }}
          >
            <div className="flex flex-col gap-5 max-w-2xl z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold uppercase tracking-widest w-fit">
                Welcome to the floor
              </span>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-sm">
                Find Your Rhythm <br />
                <span className="text-primary">In Your City</span>
              </h1>
              <p className="text-white/90 text-lg font-medium leading-relaxed max-w-lg drop-shadow-sm">
                Discover top-rated Salsa and Bachata classes from world-class instructors. Book your next lesson today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
