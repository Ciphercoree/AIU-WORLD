import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-100 py-12 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <div className="text-2xl font-black text-white tracking-tighter mb-4">
            AIU WORLD
          </div>
          <p className="text-emerald-200 max-w-sm mb-6">
            The digital home for the Albukhary International University community. Celebrating diversity, sports, and student life.
          </p>
          <p className="text-sm text-emerald-400">
            © 2026 AIU WORLD. Built by the community.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wide text-sm">Explore</h4>
          <ul className="space-y-2">
            <li><Link href="/countries" className="hover:text-amber-400 transition-colors">Countries</Link></li>
            <li><Link href="/sports" className="hover:text-amber-400 transition-colors">Sports Hub</Link></li>
            <li><Link href="/events" className="hover:text-amber-400 transition-colors">Events</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wide text-sm">Resources</h4>
          <ul className="space-y-2">
            <li><a href="https://aiu.edu.my" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">Official AIU Website</a></li>
            <li><Link href="/admin" className="hover:text-amber-400 transition-colors">Admin Dashboard</Link></li>
            <li><Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}