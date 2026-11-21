import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 w-full">
        {/* Page Header */}
        <div className="bg-emerald-950 py-16 px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            University Events
          </h1>
          <p className="text-emerald-200 text-lg max-w-2xl mx-auto">
            From cultural festivals to graduation ceremonies, discover the moments that bring the AIU community together.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          
          {/* Featured Event */}
          <div className="mb-16">
            <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] group cursor-pointer shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop" 
                alt="Featured Event" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <span className="bg-amber-500 text-emerald-950 text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider mb-4 inline-block">Upcoming Major Event</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-3xl">Global Cultural Festival 2026</h2>
                <p className="text-gray-300 max-w-2xl mb-6 text-lg">Join us for a week-long celebration of food, music, and traditions from over 60 countries.</p>
                <div className="flex items-center gap-6 text-white font-semibold">
                  <div className="flex items-center gap-2">
                    <span>📅</span> Oct 15 - Oct 22, 2026
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📍</span> Main Campus Courtyard
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Past & Upcoming Events Grid */}
          <h3 className="text-2xl font-bold text-gray-800 mb-8 border-b border-gray-200 pb-4">More Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Event Card 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop" 
                  alt="Graduation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-gray-800 uppercase tracking-wider">
                  Academic
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-emerald-600 font-bold mb-2">Dec 10, 2026</p>
                <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-700 transition-colors">Class of 2026 Graduation Ceremony</h4>
                <p className="text-gray-500 text-sm">Celebrating the achievements of our graduating seniors as they begin their next journey.</p>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop" 
                  alt="Music Night" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-gray-800 uppercase tracking-wider">
                  Student Life
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-emerald-600 font-bold mb-2">Nov 25, 2026</p>
                <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-700 transition-colors">AIU Talent & Music Night</h4>
                <p className="text-gray-500 text-sm">An evening of performances, music, and cultural showcases by our talented students.</p>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop" 
                  alt="Career Fair" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-gray-800 uppercase tracking-wider">
                  Career
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-emerald-600 font-bold mb-2">Nov 05, 2026</p>
                <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-700 transition-colors">AIU Annual Career Fair</h4>
                <p className="text-gray-500 text-sm">Connect with top employers and explore internship opportunities for the upcoming year.</p>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}