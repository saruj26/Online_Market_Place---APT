import { useNavigate, useLocation, Link } from "react-router-dom"; // Import Link for routing
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa"; // Importing FontAwesome user icon

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location
  const [user, setUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to toggle the mobile menu

  useEffect(() => {
    // Check if the user is logged in by fetching user data from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Set user data if logged in
    } else {
      setUser(null); // Reset user if no data found
    }
  }, [location.pathname]); // Run whenever the pathname changes

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data
    localStorage.removeItem("access_token"); // Remove JWT token if stored
    setUser(null); // Reset user state
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <header className="bg-gray-900 text-white p-5 shadow-lg backdrop-blur-md">
      <div className="flex justify-between items-center mx-auto">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 cursor-pointer">
          Nitro
        </div>

        {/* Desktop Navigation Links */}
        <nav>
          <ul className="hidden md:flex space-x-8 text-lg font-medium">
            <li>
              <Link to="/" className="hover:text-blue-400 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-blue-400 transition duration-300">
                Products
              </Link>
            </li>
            <li>
              <Link to="faqs" className="hover:text-blue-400 transition duration-300">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="hover:text-blue-400 transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Login/Logout Button */}
        <div className="hidden md:block">
          {location.pathname !== "/sellerDash" && (
            <div>
              {user ? (
                // Check if the user is a buyer or seller and display accordingly
                <button
                  onClick={handleLogout}
                  className={`px-5 py-2 rounded-md transition-all duration-300 hover:scale-105 ${
                    user.user_type === "buyer"
                      ? "bg-gradient-to-r from-green-500 to-teal-600 text-white hover:bg-teal-700"
                      : "bg-gradient-to-r from-red-500 to-pink-600 text-white hover:bg-pink-700"
                  }`}
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Login
                </button>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)} // Toggle mobile menu
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Mobile Login Button */}
          {user ? (
            <button
              onClick={handleLogout}
              className={`px-5 py-2 rounded-md transition-all duration-300 hover:scale-105 ${
                user.user_type === "buyer"
                  ? "bg-gradient-to-r from-green-500 to-teal-600 text-white hover:bg-teal-700"
                  : "bg-gradient-to-r from-red-500 to-pink-600 text-white hover:bg-pink-700"
              }`}
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Links (show when isMobileMenuOpen is true) */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <Link to="/" className="text-lg text-white hover:text-blue-400">
            Home
          </Link>
          <Link to="/products" className="text-lg text-white hover:text-blue-400">
            Products
          </Link>
          <Link to="faqs" className="text-lg text-white hover:text-blue-400">
            FAQs
          </Link>
          <Link to="/contactus" className="text-lg text-white hover:text-blue-400">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
