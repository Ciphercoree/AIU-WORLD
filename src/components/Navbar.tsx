import Link from "next/link";

export default function Navbar() {
  return (
    <>
      {/* Top Notice Bar - Matches the institutional vibe */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 text-center font-semibold tracking-widest uppercase">
        Welcome to the official student platform for Albukhary International University
      </div>
      
      {/* Main Navbar */}
      <nav className="w-full bg-white/90 backdrop-blur-md shadow-sm py-4 px-8 flex justify-between items-center sticky top-0 z-50 border-b border-gray-100">
        <div className="flex items-center gap-3">
          {/* Standard img tag to bypass Next.js Image caching issues */}
          <img 
            src="/images/aiu-logo.jpg" 
            alt="AIU Logo" 
            className="h-10 w-auto object-contain"
          />
          <div className="text-2xl font-black text-emerald-950 tracking-tighter">
            AIU WORLD
          </div>
        </div>
        <ul className="hidden md:flex gap-8 font-bold text-gray-600 text-sm uppercase tracking-wide">
          <li><Link href="/" className="hover:text-emerald-700 transition-colors">Home</Link></li>
          <li><Link href="/countries" className="hover:text-emerald-700 transition-colors">Countries</Link></li>
          <li><Link href="/sports" className="hover:text-emerald-700 transition-colors">Sports</Link></li>
          <li><Link href="/events" className="hover:text-emerald-700 transition-colors">Events</Link></li>
        </ul>
        
        {/* FIXED: Changed button to Link and added href="/admin" */}
        <Link href="/admin" className="bg-emerald-800 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wide transition-all shadow-md hover:shadow-lg">
          Student Login
        </Link>
      </nav>
    </>
  );
}