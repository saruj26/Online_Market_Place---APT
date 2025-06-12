import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/inventory/products/")
      .then((response) => {
        setProducts(response.data);
        console.log(response.data); // Debug to check image paths
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100">
      <main className="px-10 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Our Products
          </h2>

          {/* Colorful Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 rounded-full bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 text-white placeholder-white focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg transition duration-300"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-4 top-3 text-white text-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-2xl rounded-3xl transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/50 overflow-hidden"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="relative h-80 w-full group overflow-hidden">
                  <img
                    src={`http://127.0.0.1:8000/inventory${product.product_image}`}
                    alt={product.product_name}
                    className="object-contain w-full h-full transition-transform duration-500 transform group-hover:-translate-y-3"
                    onError={(e) =>
                      (e.target.src = "/default-image.jpg") // Fallback image
                    }
                  />
                </div>
                <div className="p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-b-3xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.product_name}
                  </h3>
                  <p className="text-gray-600 mb-2">{product.product_category}</p>
                  <p className="text-xl font-semibold text-indigo-700">
                    ${product.product_price}
                  </p>
                  <button className="mt-4 w-full py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-xl shadow-md hover:from-pink-600 hover:to-red-600 transition-transform duration-300 transform hover:scale-105 active:scale-95">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No products available</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Products;

