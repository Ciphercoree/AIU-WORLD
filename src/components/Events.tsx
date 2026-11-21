export default function Events() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-6">
          <div>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-2">University Events</h2>
            <p className="text-gray-500 text-lg">Relive the best moments from our cultural festivals and student activities.</p>
          </div>
          <button className="text-emerald-700 font-bold hover:text-emerald-900 hidden md:block transition-colors uppercase tracking-wide text-sm">
            View All Events &rarr;
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Event Card 1 */}
          <div className="group cursor-pointer">
            <div className="h-64 rounded-xl overflow-hidden mb-4 shadow-sm relative">
              <img 
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop" 
                alt="Cultural Festival" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">Cultural Festival</div>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-emerald-700 transition-colors mb-2">International Food & Culture Day</h3>
            <p className="text-gray-500 text-sm">Experience the flavors and traditions from over 60 countries represented at AIU.</p>
          </div>

          {/* Event Card 2 */}
          <div className="group cursor-pointer">
            <div className="h-64 rounded-xl overflow-hidden mb-4 shadow-sm relative">
              <img 
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop" 
                alt="Graduation" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Academic</div>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-emerald-700 transition-colors mb-2">Class of 2026 Graduation</h3>
            <p className="text-gray-500 text-sm">Celebrating the hard work and achievements of our graduating seniors.</p>
          </div>

          {/* Event Card 3 */}
          <div className="group cursor-pointer">
            <div className="h-64 rounded-xl overflow-hidden mb-4 shadow-sm relative">
              <img 
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop" 
                alt="Music Night" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-2">Student Life</div>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-emerald-700 transition-colors mb-2">AIU Talent & Music Night</h3>
            <p className="text-gray-500 text-sm">An evening of performances, music, and cultural showcases by our students.</p>
          </div>

        </div>
      </div>
    </section>
  );
}