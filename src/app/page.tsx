import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-green-50 to-cyan-50 flex items-center justify-center pt-2 md:p-section lg:pt-20">
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
            <h1 className="h1-custom my-6">Life In a Heathy Body</h1>
            <p className="p-custom">
              I combine expert massage therapy with guided Nordic walking
              sessions to create a complete wellness experience, tailored to
              your body’s unique needs.
            </p>
            <div className="my-6 flex flex-col sm:flex-row space-x-0 sm:space-x-2 gap-2">
              <button className="primary-btn">Learn more</button>
              <button className="secondary-btn">
                Book a free consultation
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Tailored to fit your needs
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            title="Massage Therapy"
            image="/assets/massage.jpg"
            description="Body text for whatever you'd like to add more to the subheading."
          />
          <ServiceCard
            title="Personalized Approach"
            image="/assets/individual-training.jpg"
            description="Body text for whatever you'd like to expand on the main point."
          />
          <ServiceCard
            title="Group Trainings"
            image="/assets/nordic-walking.jpg"
            description="Body text for whatever you'd like to share more."
          />
        </div>
      </section>

      {/* Massage Experience Section */}
      <section className="bg-blue-100 p-12 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Experience the Healing Power of Massage
        </h2>
        <p className="text-gray-700 mb-6">
          Our massage services are designed to rejuvenate your body and mind.
          Whether you’re seeking relaxation or relief from tension, we tailor
          each session to meet your unique needs.
        </p>
        <div className="flex space-x-4 mb-6">
          <Link
            href="#"
            className="bg-green-500 text-white px-6 py-2 rounded-md"
          >
            Book now
          </Link>
          <Link
            href="#"
            className="border border-green-500 text-green-500 px-6 py-2 rounded-md"
          >
            Learn More
          </Link>
        </div>
        <Image
          src="/assets/massage-therapy.jpg"
          width={800}
          height={500}
          alt="Massage"
          className="rounded-lg"
        />
      </section>

      <div className="bg-white text-gray-900">
        <div className="p-8 text-center">
          <h2 className="text-4xl font-bold">
            Transform Your Posture, Transform Your Life
          </h2>
          <p className="mt-4">
            Our posture correction classes are designed to enhance your
            alignment and overall wellness.
          </p>
        </div>

        <section className="flex flex-col md:flex-row items-center p-8 bg-gray-100">
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-semibold">Expert Guidance</h2>
            <p>
              Learn techniques that promote better posture and reduce discomfort
              in daily activities.
            </p>
            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg">
              Book a free consultation
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="/posture-correction.jpg"
              alt="Posture correction"
              className="rounded-lg"
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row-reverse items-center p-8 bg-green-50">
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-semibold">
              Discover the Joy of Nordic Walking
            </h2>
            <p>
              Join our Nordic walking groups to enhance your fitness and
              well-being.
            </p>
            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg">
              Join now
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="/nordic-walking.jpg"
              alt="Nordic walking group"
              className="rounded-lg"
            />
          </div>
        </section>

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
                  "The massage therapy sessions have truly changed my life. I
                  feel more relaxed and rejuvenated than ever before!"
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

function ServiceCard({ title, image, description }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <Image
        src={image}
        width={300}
        height={200}
        alt={title}
        className="rounded-md"
      />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
