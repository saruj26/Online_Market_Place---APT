import React from "react";

const ContactUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <div className="w-3/4 bg-white shadow-lg rounded-lg p-10 flex flex-col md:flex-row">
        {/* Left Side Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img src="/contact.jpg" alt="Contact" className="w-4/5" />
        </div>

        {/* Right Side Form */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-2xl font-bold text-blue-600 text-center">
            Get in Touch
          </h2>
          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">
                First Name
              </label>
              <input
                type="text"
                name="user_name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="user_email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                rows="4"
                name="message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Message..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
