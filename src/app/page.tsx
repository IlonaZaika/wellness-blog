import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import { servicesItems } from "@/constants/servicesItems";
import { callToAction, symptomsData } from "@/constants/symptomsData";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-cyan-50 flex items-center justify-center pt-2 md:p-md lg:pt-20 border border-b-white">
        <div className="container mx-auto max-w-6xl flex flex-col px-4 items-center md:flex-row gap-8 pt-16 lg:px-6">
          <Image
            src="/hero-img.jpg"
            alt="Wellness"
            className="rounded-lg w-3/5 h-3/5"
            width={400}
            height={400}
          />
          <div className="text-center md:text-left">
            <h3 className="h3-custom">
              <strong>Massage Therapy & Nordic Walking </strong>| Edinburgh
              <span className="hidden md:inline-block">, Scotland</span>
            </h3>
            <h1 className="h1-custom">Life In a Heathy Body</h1>
            <p className="p-custom">
              I combine expert massage therapy with guided Nordic walking
              sessions to create a complete wellness experience, tailored to
              your body’s unique needs.
            </p>
            <div className="my-6 flex flex-col sm:flex-row space-x-0 sm:space-x-2 gap-2">
              <Link href="#" className="primary-btn">
                Book Services
              </Link>
              <Link href="#" className="secondary-btn">
                Get free consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Symptoms Section */}
      <section className="bg-bgBase p-sm md:p-md lg:px-lg">
        <div className="max-w-full">
          <h2 className="h2-custom mb-6 text-center md:text-left">
            If You Are Experiencing...
          </h2>

          {/* Grid Layout for Two Rows on md */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Image Card (Ensures Full Fit) */}
            <div className="h-full w-full md:my-2">
              <Image
                src="/stress-woman.jpg"
                alt="Stressed Woman"
                width={400}
                height={400}
                className="rounded-lg object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col">
              {/* Cards for Symptoms */}
              {symptomsData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-5 m-2 rounded-lg shadow-sm h-full flex flex-col justify-start"
                >
                  <h4 className="font-rokkit text-textGreen text-2xl">
                    {item.title}
                  </h4>
                  <p className="py-2 text-textGrey font-inter font-light text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Call to Action Box */}
            <div className="bg-accent p-5 md:my-2 rounded-lg shadow-sm h-full flex items-center justify-center">
              <p className="py-2 text-white font-inter font-light text-sm">
                {callToAction}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className=" p-sm md:p-md lg:px-lg">
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
      <section className="bg-bgBlue p-sm md:p-md lg:px-lg">
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
            src="/massage-therapy.jpg"
            alt="Massage"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </section>
      {/* Posture Correction Section */}
      <section className="bg-bgBase p-sm md:p-md lg:px-lg">
        <div className="flex flex-col md:flex-row py-sm">
          <div className="md:w-2/3 md:pr-sm">
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
            <div className="flex flex-col my-4 sm:flex-row space-x-0 sm:space-x-2 gap-2 text-center md:text-left md:mt-sm">
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
              src="/posture-correction.jpg"
              alt="Posture correction"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
      {/* Nordic Walking Section */}
      <section className="bg-bgGreen p-sm md:p-md lg:px-lg">
        <div className="flex flex-col md:flex-row py-sm">
          <div className="md:w-1/2 md:pr-sm">
            <h3 className="h3-custom">Move</h3>
            <h2 className="h2-custom">Discover the Joy of Nordic Walking</h2>
            <p className="p-custom">
              Join our Nordic walking groups to enhance your fitness and
              well-being.
            </p>
            <div className="flex flex-col my-4 sm:flex-row space-x-0 sm:space-x-2 gap-2 text-center md:text-left md:mt-sm">
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
              src="/nordic-walking.jpg"
              alt="Posture correction"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="bg-bgBase p-sm md:p-md lg:px-lg">
        <h3 className="h3-custom">Testimonials</h3>

        <h2 className="h2-custom">Real Stories, Real Results</h2>
        <p className="p-custom">
          Hear from our clients and discover how our personalized wellness
          approach has improved their lives
        </p>
        <Testimonials />
      </section>
      <section className="p-sm md:p-md lg:px-lg text-center">
        <h2 className="h2-custom text-accent">
          Ready To Transform Your Health?
        </h2>
        <button className="mt-4 secondary-btn bg-bgGreen">
          Start Your Journey Now
        </button>
      </section>
    </div>
  );
}
