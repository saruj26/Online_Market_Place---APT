import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          {/* About Us */}
          <div className="md:w-2/5 mb-6 md:mb-0 text-center">
            <h5 className="text-lg font-semibold">About Us</h5>
            <p className="text-gray-400 text-lg mt-4 leading-relaxed">
              We provide comprehensive inventory management and distribution
              solutions to streamline your supply chain.
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <a
                href="https://www.facebook.com"
                className="text-gray-400 hover:text-blue-600 transition"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://www.twitter.com"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href="https://www.instagram.com"
                className="text-gray-400 hover:text-pink-500 transition"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="md:w-2/5 mb-6 md:mb-0 flex flex-col items-center">
            <h5 className="text-lg font-semibold">Contact Us</h5>
            <p className="text-gray-400 text-lg mt-2 flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              nitro@inventoryfulfillment.com
            </p>
            <p className="text-gray-400 text-lg mt-2 flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              (123) 456-7890
            </p>
            <p className="text-gray-400 text-lg mt-2 flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              123 Main St, Suite 500, Cityville, USA
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/5">
            <h5 className="text-lg font-semibold">Quick Links</h5>
            <ul className="mt-2 space-y-2 text-lg">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-gray-400 hover:text-white transition"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/contactus"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/faqs"
                  className="text-gray-400 hover:text-white transition"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-gray-400 text-lg">
            &copy; 2024 Inventory Fulfillment and Distribution. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
