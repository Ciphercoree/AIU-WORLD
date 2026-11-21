"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { supabase } from "../../lib/supabase";

type Country = {
  id: number;
  name: string;
  code: string;
  region: string;
};

const flagAnimation = `
  @keyframes wave {
    0% { transform: rotateZ(0deg) skewY(0deg) scale(1); }
    25% { transform: rotateZ(2deg) skewY(3deg) scale(1.02); }
    50% { transform: rotateZ(0deg) skewY(0deg) scale(1); }
    75% { transform: rotateZ(-2deg) skewY(-3deg) scale(1.02); }
    100% { transform: rotateZ(0deg) skewY(0deg) scale(1); }
  }
  .flag-animate {
    animation: wave 2s ease-in-out infinite;
    transform-origin: left center;
  }
`;

export default function CountriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    const fetchCountries = async () => {
      try {
        if (!supabase) {
          throw new Error(
            "Supabase configuration is missing. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
          );
        }

        const allCountries: Country[] = [];
        const pageSize = 1000;
        let offset = 0;
        let totalCount = 0;

        do {
          const {
            data,
            error: fetchError,
            count,
          } = await supabase
            .from("countries")
            .select("id, name, code, region", { count: "exact" })
            .order("id")
            .range(offset, offset + pageSize - 1);

          if (fetchError) {
            throw fetchError;
          }
          if (data === null || count === null) {
            throw new Error("Supabase did not return the countries data.");
          }
          if (data.length === 0 && offset < count) {
            throw new Error("Country pagination ended before all rows loaded.");
          }

          allCountries.push(...data);
          offset += data.length;
          totalCount = count;
        } while (offset < totalCount);

        if (active) {
          setCountries(allCountries);
        }
      } catch (fetchError) {
        if (active) {
          setError(
            fetchError instanceof Error
              ? fetchError.message
              : "Unable to load countries."
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    void fetchCountries();

    return () => {
      active = false;
    };
  }, []);

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const visibleCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(normalizedSearch)
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <style>{flagAnimation}</style>

      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-emerald-950 tracking-tight mb-4">
            Explore Our Countries
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            AIU is a global village. Discover the cultures, student committees,
            and stories from every country represented on campus.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for your country..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full px-6 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-700"
            />
            <div className="absolute right-2 top-2 bg-emerald-800 text-white p-2.5 rounded-full pointer-events-none">
              🔍
            </div>
          </div>
        </div>

        {loading ? (
          <p className="text-center text-gray-500" role="status">
            Loading countries...
          </p>
        ) : error ? (
          <p className="text-center text-red-700" role="alert">
            Could not load countries: {error}
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {visibleCountries.map((country) => (
                <div
                  key={country.id}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center group"
                >
                  <div className="w-20 h-14 mx-auto mb-6 rounded-md overflow-hidden shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
                      alt={`${country.name} Flag`}
                      className="w-full h-full object-cover flag-animate"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {country.name}
                  </h3>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    {country.region}
                  </p>
                </div>
              ))}
            </div>

            {visibleCountries.length === 0 && (
              <div className="text-center text-gray-500 mt-12">
                {normalizedSearch
                  ? "No country found. Try searching for another name."
                  : "No countries found."}
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
