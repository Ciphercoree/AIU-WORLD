import Image from "next/image";

export default function Countries() {
  // Changed 'flag' to 'code'
  const countries = [
    {
      name: "Malaysia",
      code: "my",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000&auto=format&fit=crop",
      committee: ["Rep 1", "Rep 2"]
    },
    {
      name: "United Arab Emirates",
      code: "ae",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      committee: ["Rep 1", "Rep 2"]
    },
    {
      name: "Japan",
      code: "jp",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop",
      committee: ["Rep 1", "Rep 2"]
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-4">Countries of AIU</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Discover the diverse cultures that make up our global community, represented by our dedicated student committees.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country) => (
            <div key={country.name} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
              <div className="relative h-48 w-full overflow-hidden">
                <img src={country.image} alt={country.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-md shadow-sm overflow-hidden w-10 h-7 border border-gray-200">
                  <img src={`https://flagcdn.com/${country.code}.svg`} alt={country.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{country.name}</h3>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Country Committee</p>
                  <div className="flex gap-4">
                    {country.committee.map((rep, index) => (
                      <div key={index} className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-lg">
                          {rep.charAt(0)}
                        </div>
                        <span className="text-xs font-medium text-gray-600">{rep}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}