import { useState, useEffect } from "react";

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ Fetch from JSON Server API
  useEffect(() => {
    fetch("http://localhost:5000/companies")
      .then((res) => res.json())
      .then((data) => {
        setCompanies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching companies:", err);
        setLoading(false);
      });
  }, []);

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <p className="text-center mt-8">Loading companies...</p>;
  }

  return (
    <div>
      {/* 🔍 Search bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search companies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-600 focus:outline-none transition"
        />
      </div>

      {/* 🧩 Company cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCompanies.map((company) => (
          <div
            key={company.id}
            className="bg-[#fefdfb] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold font-serif text-blue-900 dark:text-indigo-300">
              {company.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{company.location}</p>
            <p className="mt-2 text-blue-700 dark:text-indigo-400 font-medium italic">
              {company.industry}
            </p>
          </div>
        ))}
      </div>

      {/* ⚠️ No results */}
      {filteredCompanies.length === 0 && (
        <p className="text-center mt-8 text-gray-500 dark:text-gray-400">
          No companies found.
        </p>
      )}
    </div>
  );
}

export default CompanyList;
