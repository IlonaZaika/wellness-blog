import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-auto mt-16">
      <section className="p-sm md:p-md lg:px-lg ">
        <div className="flex flex-col md:flex-row md:space-x-6 justify-center">
          {/* Left Side - Contact Info */}
          <div className="bg-bgBase text-textGrey p-10 rounded-lg flex items-center">
            <div className="">
              <div className="flex items-start space-x-4 py-4">
                <FaMapMarkerAlt className="text-accent text-2xl" />
                <div>
                  <h3 className="font-medium text-accent font-inter">
                    Address
                  </h3>
                  <p className="p-custom">
                    A108 Adam Street, New York, NY 535022
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 py-4">
                <FaPhoneAlt className="text-accent text-2xl" />
                <div>
                  <h3 className="font-medium text-accent font-inter">
                    WhatsApp
                  </h3>
                  <p className="p-custom">+1 5589 55488 55 </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 py-4">
                <FaEnvelope className="text-accent text-2xl" />
                <div>
                  <h3 className="font-medium text-accent font-inter">Email</h3>
                  <p className="p-custom">info@example.com </p>{" "}
                </div>
              </div>
            </div>
          </div>
          {/* Right Side - Contact Form */}
          <div>
            <h2 className="h2-custom">Contact Us</h2>
            <form className="font-inter font-light text-white text-[13px]">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 mb-2 rounded-lg w-full font-inter text-textGreen border border-textGrey focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 mb-2  rounded-lg w-full font-inter text-textGreen border border-textGrey focus:outline-none"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="px-4 py-3 mb-2 rounded-lg w-full font-inter text-textGreen border border-textGrey focus:outline-none"
              ></textarea>
              <button type="submit" className="primary-btn w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
