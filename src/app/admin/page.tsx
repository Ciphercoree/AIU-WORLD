import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-black text-emerald-950 tracking-tight">Admin Dashboard</h1>
            <p className="text-gray-500">Manage countries, sports, and events for AIU WORLD.</p>
          </div>
          <button className="bg-emerald-800 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-bold transition-colors">
            + Add New Content
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Total Countries</h3>
            <p className="text-4xl font-black text-emerald-700">195</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Active Sports</h3>
            <p className="text-4xl font-black text-emerald-700">12</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Upcoming Events</h3>
            <p className="text-4xl font-black text-emerald-700">5</p>
          </div>
        </div>

        {/* Management Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 bg-gray-50">
            <h2 className="text-lg font-bold text-gray-800">Recent Content</h2>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200">
                <th className="p-4">Type</th>
                <th className="p-4">Title</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { type: "Country", title: "Malaysia", status: "Published" },
                { type: "Event", title: "Global Cultural Festival 2026", status: "Draft" },
                { type: "Sport", title: "Football League Standings", status: "Published" },
                { type: "Country", title: "Indonesia", status: "Published" },
              ].map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-bold text-emerald-700">{item.type}</td>
                  <td className="p-4 font-semibold text-gray-800">{item.title}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      item.status === "Published" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-blue-600 hover:text-blue-800 font-bold text-sm mr-4">Edit</button>
                    <button className="text-red-600 hover:text-red-800 font-bold text-sm">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </main>

      <Footer />
    </div>
  );
}