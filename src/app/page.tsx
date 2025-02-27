import ServiceCard from "@/components/ServiceCard";
import { servicesItems } from "@/constants/servicesItems";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-cyan-50 flex items-center justify-center pt-2 md:p-md lg:pt-20">
        <div className="container mx-auto max-w-6xl flex flex-col px-4 items-center md:flex-row gap-8 pt-16 lg:px-6">
          <Image
            src="/assets/hero-img.jpg"
            alt="Wellness"
            className="rounded-lg w-3/5 h-3/5"
            width={400}
            height={400}
          />
          <div className="text-center md:text-left">
            <h3 className="h3-custom">
              Holistic Well-being Through Movement and Touch
            </h3>
            <h1 className="h1-custom">Life In a Heathy Body</h1>
            <p className="p-custom">
              I combine expert massage therapy with guided Nordic walking
              sessions to create a complete wellness experience, tailored to
              your body’s unique needs.
            </p>
            <div className="my-6 flex flex-col sm:flex-row space-x-0 sm:space-x-2 gap-2">
              <Link href="#" className="primary-btn">
                Learn more
              </Link>
              <Link href="#" className="secondary-btn">
                Book a free consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="mb-12 p-sm md:p-md lg:px-lg">
        <h3 className="h3-custom">Services</h3>
        <h2 className="h2-custom">Tailored to fit your needs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {servicesItems.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.title}
              imageUrl={item.imageUrl}
              description={item.description}
            />
          ))}
        </div>
      </section>
      {/* Massage Experience Section */}
      <section className="bg-bgBlue p-sm md:p-md lg:p-lg">
        <div className="flex flex-col md:flex-row py-sm lg:gap-5">
          <div className="w-full">
            <h3 className="h3-custom">Revitalize</h3>
            <h2 className="h2-custom">
              Experience the Healing Power of Massage
            </h2>
          </div>
          <div className="w-full">
            <p className="p-custom mb-6">
              Our massage services are designed to rejuvenate your body and
              mind. Whether you’re seeking relaxation or relief from tension, we
              tailor each session to meet your unique needs.
            </p>
            <div className="my-6 flex flex-col sm:flex-row space-x-0 sm:space-x-2 gap-2 text-center md:text-left">
              <Link href="#" className="secondary-btn">
                Learn more
              </Link>
              <Link href="#" className="primary-btn">
                Book Now
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full relative min-h-[200px] md:min-h-[400px] lg:min-h-[600px]">
          <Image
            src="/assets/massage-therapy.jpg"
            alt="Massage"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>
      {/* Posture Correction Section */}
      <section className="bg-bgBase p-sm md:p-md lg:p-lg">
        <div className="flex flex-col md:flex-row py-sm">
          <div className="md:w-2/3 pr-sm">
            <h3 className="h3-custom">Balance</h3>
            <h2 className="h2-custom">
              Transform Your Posture, Transform Your Life
            </h2>
            <p className="p-custom mt-4">
              Our posture correction classes are designed to enhance your
              alignment and overall wellness.
            </p>
            <div className="flex flex-col md:flex-row py-4">
              <div className="md:w-1/2 mr-4">
                <h4 className="h4-custom">Expert Guidance</h4>
                <p className="p-custom mt-2">
                  Learn techniques that promote better posture and reduce
                  discomfort in daily activities.
                </p>
              </div>
              <div className="md:w-1/2">
                <h4 className="h4-custom">Join Us</h4>
                <p className="p-custom mt-2">
                  Connect with a community focused on improving health and
                  well-being through movement.
                </p>
              </div>
            </div>
            <div className="flex flex-col my-4 sm:flex-row space-x-0 sm:space-x-2 gap-2 text-center md:text-left">
              <Link href="#" className="secondary-btn">
                Learn more
              </Link>
              <Link href="#" className="primary-btn">
                Book a Free Consultation
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3 relative min-h-[200px] md:min-h-[400px]">
            <Image
              src="/assets/posture-correction.jpg"
              alt="Posture correction"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      {/* Nordic Walking Section */}
      <section className="bg-bgGreen p-sm md:p-md lg:p-lg">
        <div className="flex flex-col md:flex-row py-sm">
          <div className="md:w-1/2 pr-sm">
            <h3 className="h3-custom">Move</h3>
            <h2 className="h2-custom">Discover the Joy of Nordic Walking</h2>
            <p className="p-custom">
              Join our Nordic walking groups to enhance your fitness and
              well-being.
            </p>
            <div className="flex flex-col my-4 sm:flex-row space-x-0 sm:space-x-2 gap-2 text-center md:text-left">
              <Link href="#" className="secondary-btn">
                Learn more
              </Link>
              <Link href="#" className="primary-btn">
                Join Now
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative min-h-[200px] md:min-h-[400px]">
            <Image
              src="/assets/nordic-walking.jpg"
              alt="Posture correction"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <div className="bg-white text-gray-900">
        <section className="p-8 bg-white">
          <h2 className="text-2xl font-bold text-center">
            Real Stories, Real Results
          </h2>
          <div className="flex flex-col md:flex-row justify-around mt-8">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="bg-gray-50 p-4 rounded-lg shadow-md w-80 mb-4"
              >
                <p className="italic">
                  The massage therapy sessions have truly changed my life. I
                  feel more relaxed and rejuvenated than ever before!
                </p>
                <p className="mt-2 text-sm">May 17, 2023</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="p-8 bg-gray-900 text-white text-center">
          <h2 className="text-2xl font-bold">
            Ready To Transform Your Health?
          </h2>
          <button className="mt-4 px-6 py-2 bg-green-600 rounded-lg">
            Start Your Journey Now
          </button>
          <p className="mt-8 text-sm">
            © 2024 Wellness Studio. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
