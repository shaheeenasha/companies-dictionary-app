function Navbar({ toggleTheme, theme }) {
  return (
    <nav
      className={`flex justify-between items-center px-8 py-4 shadow-md ${
        theme === "light"
          ? "bg-white text-gray-800"
          : "bg-gray-800 text-gray-100"
      }`}
    >
      <h1 className="text-2xl font-semibold tracking-wide">Companies Directory</h1>
      <button
        onClick={toggleTheme}
        className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-medium shadow-md hover:bg-indigo-700 active:scale-95 transition"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </nav>
  );
}

export default Navbar;
