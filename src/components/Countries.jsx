import React, { useState, useEffect } from "react";
import Country from "./Country";
import CountriesSkeleton from "./CountriesSkeleton";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCountries([
          {
      name: "Afghanistan",
      flag: "/flags/flag-afghanistan.jpg",
      currency: "Afghan afghani",
      continent: "Asia",
      description:
        "A landlocked country in South-Central Asia, known for its mountains and history.",
    },
    {
      name: "Albania",
      flag: "./flags/flag-albania.png",
      currency: "Albanian lek",
      continent: "Europe",
      description:
        "A small mountainous country in Southeast Europe, known for its history and landscapes.",
    },
    {
      name: "Argentina",
      flag: "./flags/flag-argentina.jpg",
      currency: "Argentine peso",
      continent: "South America",
      description:
        "The second-largest country in South America, famous for tango, beef, and Patagonia.",
    },
    {
      name: "Brazil",
      flag: "./flags/flag-brazil.png",
      currency: "Brazilian real",
      continent: "South America",
      description:
        "The largest country in South America, home to the Amazon rainforest and Rio de Janeiro.",
    },
    {
      name: "China",
      flag: "./flags/flag-china.png",
      currency: "Renminbi (Yuan)",
      continent: "Asia",
      description:
        "The most populous country in the world, known for its long history and the Great Wall.",
    },
    {
      name: "Djibouti",
      flag: "./flags/flag-djibouti.png",
      currency: "Djiboutian franc",
      continent: "Africa",
      description:
        "A small country in the Horn of Africa, strategically located near the Red Sea.",
    },
    {
      name: "Ethiopia",
      flag: "./flags/flag-ethiopia.png",
      currency: "Ethiopian birr",
      continent: "Africa",
      description:
        "One of the oldest nations in the world, known for its coffee and diverse cultures.",
    },
    {
      name: "France",
      flag: "./flags/flag-france.png",
      currency: "Euro",
      continent: "Europe",
      description:
        "A Western European country, famous for art, cuisine, fashion, and the Eiffel Tower.",
    },
    {
      name: "India",
      flag: "./flags/flag-india.png",
      currency: "Indian rupee",
      continent: "Asia",
      description:
        "A diverse South Asian country, known for its culture, Bollywood, and the Taj Mahal.",
    },
    {
      name: "Japan",
      flag: "./flags/flag-japan.png",
      currency: "Japanese yen",
      continent: "Asia",
      description:
        "An island nation in East Asia, famous for technology, sushi, and Mount Fuji.",
    },
    {
      name: "Kenya",
      flag: "./flags/flag-kenya.png",
      currency: "Kenyan shilling",
      continent: "Africa",
      description:
        "An East African country, known for safaris, wildlife, and the Great Rift Valley.",
    },
    {
      name: "Nepal",
      flag: "./flags/flag-nepal.png",
      currency: "Nepalese rupee",
      continent: "Asia",
      description:
        "A Himalayan country, home to Mount Everest and rich cultural heritage.",
    },
    {
      name: "Palestine",
      flag: "./flags/flag-palestine.jpg",
      currency:
        "Palestinian pound (historical) / Israeli shekel & Jordanian dinar (used)",
      continent: "Asia",
      description:
        "A region in Western Asia with deep historical and cultural significance.",
    },
    {
      name: "Somalia",
      flag: "./flags/flag-somalia.png",
      currency: "Somali shilling",
      continent: "Africa",
      description:
        "A Horn of Africa country with a long coastline and rich cultural traditions.",
    },
    {
      name: "Turkey",
      flag: "./flags/flag-turkey.png",
      currency: "Turkish lira",
      continent: "Europe & Asia",
      description:
        "A transcontinental country, famous for Istanbul, Cappadocia, and rich Ottoman history.",
    },
    {
      name: "United Kingdom",
      flag: "./flags/flag-united-kingdom.png",
      currency: "British pound sterling",
      continent: "Europe",
      description:
        "An island nation made up of England, Scotland, Wales, and Northern Ireland.",
    },
    {
      name: "United States",
      flag: "./flags/flag-united-states.png",
      currency: "US dollar",
      continent: "North America",
      description:
        "A diverse nation, the third-largest in the world, known for innovation and culture.",
    },
    {
      name: "Vietnam",
      flag: "./flags/flag-vietnam.png",
      currency: "Vietnamese dong",
      continent: "Asia",
      description:
        "A Southeast Asian country, famous for its history, cuisine, and Ha Long Bay.",
    },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(filter.toLowerCase()) ||
      country.continent.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex lg:flex-row md:flex-row flex-col justify-between">
        <h1 className="text-2xl md:text-2xl font-bold text-center mb-6 text-gray-800">
          World Countries
        </h1>
        <input
          type="text"
          placeholder="Search by country name or continent..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-400 rounded-lg w-[400px] h-10 m-2 px-4 text-gray-700 shadow-sm transition-all duration-200 outline-none"
        />
      </div>

      {/* Skeleton marka uu loading yahay */}
      {loading ? (
        <CountriesSkeleton />
      ) : filteredCountries.length === 0 ? (
        // ⚠️ No Results Found state
        <div className="flex flex-col items-center justify-center h-64 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mb-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.553 2.276A1 1 0 0120 13.118V18a2 2 0 01-2 2H6a2 2 0 01-2-2v-4.882a1 1 0 01.447-.842L9 10m6 0V6a3 3 0 00-6 0v4m6 0H9"
            />
          </svg>
          <h2 className="text-xl font-semibold">No Results Found</h2>
          <p className="text-gray-400">Try searching for another country or continent.</p>
        </div>
      ) : (
        // ✅ Show data marka loading = false
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCountries.map((country, index) => (
            <Country key={index} country={country} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Countries;
