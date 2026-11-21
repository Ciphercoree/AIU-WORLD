export default function Stats() {
  return (
    <section className="py-24 bg-[#0B0F19]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { label: "Countries", value: "60+" },
          { label: "Students", value: "1,200+" },
          { label: "Events", value: "50+" },
          { label: "Sports", value: "12" },
        ].map((stat) => (
          <div key={stat.label} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-4xl font-bold text-blue-500 mb-2">{stat.value}</div>
            <div className="text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}