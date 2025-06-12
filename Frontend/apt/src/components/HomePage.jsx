import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faBox, faCogs, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faPinterest, faGooglePlus, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const HomePage = () => {
  const images = [ "/bg1.jpg", "/bg3.jpg", "/bg4.jpg", "/bg5.jpg"];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div>
      {/* Banner Section */}
      <div
        className="relative h-screen flex items-center justify-center bg-contain bg-no-repeat bg-center transition-all duration-1000 p-10"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundColor: "white",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for Opacity Effect */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Text Content */}
        <div className="relative text-center text-white z-10">
          <h1 className="text-6xl font-bold">Nitro</h1>
          <p className="text-2xl mt-4">Connecting Buyers and Sellers Digitally</p>
          <p className="mt-6 text-lg max-w-lg mx-auto">
            Track your goods throughout your entire supply chain, from purchasing to production to end sales.
          </p>
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[{ icon: faTruck, title: "Fast Delivery", desc: "Get your orders delivered at lightning speed." },
            { icon: faBox, title: "Good Products", desc: "We provide high-quality and reliable products." },
            { icon: faCogs, title: "Easy Customization", desc: "Personalize your shopping experience easily." },
            { icon: faHeadset, title: "24/7 Support", desc: "Customer support available round the clock." }]
            .map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-blue-100 hover:shadow-2xl"
              >
                <FontAwesomeIcon icon={feature.icon} className="text-4xl text-blue-500" />
                <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.desc}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Social Media Section */}
      <div className="py-16 px-6 text-center bg-gray-50">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Say Hi & Get in Touch</h3>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          Connect with us on social media and stay engaged with the Sellora community. Follow us for updates, share your feedback, and join the conversation. We value your input and look forward to hearing from you!
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://twitter.com/yourhandle"
            className="text-2xl text-blue-500 hover:text-blue-700 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.facebook.com/yourpage"
            className="text-2xl text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.pinterest.com/yourprofile"
            className="text-2xl text-red-500 hover:text-red-700 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          <a
            href="https://plus.google.com/yourprofile"
            className="text-2xl text-gray-700 hover:text-gray-900 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faGooglePlus} />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            className="text-2xl text-blue-700 hover:text-blue-900 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.youtube.com/channel/yourchannel"
            className="text-2xl text-red-600 hover:text-red-800 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
