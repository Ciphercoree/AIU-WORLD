export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center bg-emerald-950">
      
      {/* Background Image with cinematic overlay - FIXED WITH STANDARD CSS */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/aiu-campus.jpg')" }}
      ></div>
      
      {/* Dark overlay so the text is readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-emerald-950/80 to-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white mt-12">
        <span className="inline-block bg-amber-500/20 border border-amber-500/50 text-amber-300 font-bold uppercase tracking-widest text-xs px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
          Explore the International Community
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] tracking-tighter drop-shadow-2xl">
          Discover the <br/> World at <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">AIU</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
          Explore countries, follow live sports competitions, and relive the greatest university events. Your digital home for the AIU community.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-amber-500 hover:bg-amber-400 text-emerald-950 font-black py-4 px-10 rounded-xl transition-all duration-300 shadow-[0_0_40px_-10px_rgba(245,158,11,0.6)] hover:scale-105 w-full sm:w-auto text-lg uppercase tracking-wide">
            Explore Countries
          </button>
          <button className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 w-full sm:w-auto text-lg uppercase tracking-wide">
            Upcoming Events
          </button>
        </div>
      </div>
    </section>
  );
}