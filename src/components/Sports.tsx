export default function Sports() {
  return (
    <section className="py-24 bg-emerald-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-emerald-800/50 pb-6">
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-2">AIU Sports Hub</h2>
            <p className="text-emerald-200 text-lg">Follow the action. Live results, fixtures, and standings.</p>
          </div>
          <button className="mt-4 md:mt-0 bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold py-2 px-6 rounded-md transition-colors">
            View All Fixtures
          </button>
        </div>

        {/* Main Feature: Football & Rugby */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Football Card */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden h-[400px] group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1200&auto=format&fit=crop" 
              alt="Football" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-amber-500 text-emerald-950 text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider mb-4 inline-block">Featured Sport</span>
              <h3 className="text-3xl font-bold mb-2">AIU Football League</h3>
              <p className="text-gray-300 max-w-md">Catch the latest match results, player statistics, and league standings for our flagship sport.</p>
            </div>
          </div>

          {/* Live Match Widget */}
          <div className="bg-emerald-900/50 border border-emerald-800 rounded-2xl p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-red-400 tracking-wider uppercase">Live Match</span>
            </div>
            
            <div className="flex justify-between items-center mb-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl mb-2 mx-auto shadow-lg">🇲🇾</div>
                <span className="font-bold">Malaysia</span>
              </div>
              <div className="text-4xl font-black text-amber-400">2 - 1</div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl mb-2 mx-auto shadow-lg">🇯🇵</div>
                <span className="font-bold">Japan</span>
              </div>
            </div>
            <p className="text-center text-emerald-300 text-sm">75' | Second Half</p>
          </div>

        </div>

        {/* Other Sports Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { name: "Rugby", icon: "🏉" },
            { name: "Basketball", icon: "🏀" },
            { name: "Volleyball", icon: "🏐" },
            { name: "Badminton", icon: "🏸" },
          ].map((sport) => (
            <div key={sport.name} className="bg-emerald-900/30 border border-emerald-800 hover:bg-emerald-800/50 transition-colors rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer">
              <span className="text-4xl mb-3">{sport.icon}</span>
              <span className="font-bold text-emerald-100">{sport.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}