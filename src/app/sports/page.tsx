import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function SportsPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 w-full">
        {/* Page Header */}
        <div className="bg-emerald-950 py-16 px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            AIU Sports Hub
          </h1>
          <p className="text-emerald-200 text-lg max-w-2xl mx-auto">
            The home of university athletics. Follow live scores, fixtures, and league standings.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Sports Categories (Visual Tabs) */}
          <div className="flex overflow-x-auto gap-4 pb-4 mb-8 hide-scrollbar">
            <button className="bg-emerald-800 text-white px-6 py-2 rounded-full font-bold whitespace-nowrap shadow-md">
              Football ⚽
            </button>
            <button className="bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 px-6 py-2 rounded-full font-bold whitespace-nowrap transition-colors">
              Rugby 🏉
            </button>
            <button className="bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 px-6 py-2 rounded-full font-bold whitespace-nowrap transition-colors">
              Basketball 🏀
            </button>
            <button className="bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 px-6 py-2 rounded-full font-bold whitespace-nowrap transition-colors">
              Volleyball 🏐
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* League Table */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 bg-gray-50">
                <h2 className="text-xl font-bold text-gray-800">Football League Standings</h2>
              </div>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                    <th className="p-4">Pos</th>
                    <th className="p-4">Team</th>
                    <th className="p-4 text-center">P</th>
                    <th className="p-4 text-center">W</th>
                    <th className="p-4 text-center">D</th>
                    <th className="p-4 text-center">L</th>
                    <th className="p-4 text-right">Pts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { pos: 1, team: "Team Malaysia", p: 10, w: 8, d: 1, l: 1, pts: 25 },
                    { pos: 2, team: "Team Yemen", p: 10, w: 7, d: 2, l: 1, pts: 23 },
                    { pos: 3, team: "Team Somalia", p: 10, w: 6, d: 1, l: 3, pts: 19 },
                    { pos: 4, team: "Team Japan", p: 10, w: 4, d: 3, l: 3, pts: 15 },
                    { pos: 5, team: "Team Nigeria", p: 10, w: 3, d: 2, l: 5, pts: 11 },
                  ].map((row) => (
                    <tr key={row.pos} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-bold text-gray-500">{row.pos}</td>
                      <td className="p-4 font-bold text-gray-800">{row.team}</td>
                      <td className="p-4 text-center text-gray-600">{row.p}</td>
                      <td className="p-4 text-center text-gray-600">{row.w}</td>
                      <td className="p-4 text-center text-gray-600">{row.d}</td>
                      <td className="p-4 text-center text-gray-600">{row.l}</td>
                      <td className="p-4 text-right font-black text-emerald-700">{row.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Upcoming Fixtures */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 bg-gray-50">
                <h2 className="text-xl font-bold text-gray-800">Next Fixtures</h2>
              </div>
              <div className="p-6 space-y-6">
                
                {/* Fixture 1 */}
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded w-fit">Today, 16:00</span>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2"><span className="text-xl">🇲🇾</span> <span className="font-bold text-gray-700">Malaysia</span></div>
                    <span className="text-gray-400 font-bold">vs</span>
                    <div className="flex items-center gap-2"><span className="font-bold text-gray-700">Yemen</span> <span className="text-xl">🇾🇪</span></div>
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* Fixture 2 */}
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded w-fit">Tomorrow, 14:00</span>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2"><span className="text-xl">🇯🇵</span> <span className="font-bold text-gray-700">Japan</span></div>
                    <span className="text-gray-400 font-bold">vs</span>
                    <div className="flex items-center gap-2"><span className="font-bold text-gray-700">Nigeria</span> <span className="text-xl">🇳🇬</span></div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
