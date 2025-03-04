import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-textGreen font-inter font-light text-white text-[13px] pt-12 pb-3">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2 grid grid-cols-1 md:pr-10">
          <div>
            <div className="mb-2">
              <Link
                href="/"
                className="text-xl font-light font-heading text-white tracking-wide"
              >
                WELLNESS STUDIO
              </Link>
            </div>
            <h3 className="font-inter font-light text-white">
              Subscribe to our newsletter for the latest updates on wellness and
              services.
            </h3>
            <form className="flex mt-4">
              <input
                type="email"
                placeholder="Your Email Here"
                className="px-4 py-3 rounded-lg w-full font-inter text-textGreen focus:outline-none"
              />
              <button className="px-4 py-3 ml-2 rounded-lg bg-accent text-white font-inter">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div>
          <h4 className="font-inter font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li className="link">About Us</li>
            <li className="link">Services</li>
            <li className="link">Blog</li>
            <li className="link">Contact Us</li>
          </ul>
        </div>
        <div>
          <h4 className="font-inter font-semibold text-white">
            Connect With Us
          </h4>
          <ul className="mt-4 space-y-2">
            <li className="link">Events</li>
            <li className="link">FAQs</li>
            <li className="link">Gallery</li>
          </ul>
        </div>

        <div>
          <h4 className="font-inter font-semibold text-white">Stay Updated </h4>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center space-x-2 link">
              <FaFacebook className="text-white" />
              <span>Facebook</span>
            </li>
            <li className="flex items-center space-x-2 link">
              <FaInstagram className="text-white" />
              <span>Instagram</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bgLight mt-8 pt-3 text-xs text-center">
        <p className="px-6 pt-1">
          © 2024 Wellness Studio. All rights reserved. ·
          <Link href="#" className="link pl-1">
            Website by Ilona Zaika
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
