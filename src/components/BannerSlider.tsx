import Link from "next/link";
import Image from "next/image";

export default function BannerComponent() {
  return (
    <>
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url("/banner.jpg")` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Content */}
        <div className="relative z-10 flex justify-end items-center h-full text-center text-white md:px-16 md:py-8">
          <div className="bg-bgBase rounded-lg h-4/5 md:p-16 md:w-1/2">
            <h2 className="h2-custom text-center">Our Mission</h2>
            <p className="p-custom text-center text-white">
              At <strong>Wellness Studio</strong>, our mission is to help you
              move freely, feel strong, and live without limits. We believe that
              true wellness comes from balance—between body and mind, strength
              and relaxation, movement and stillness.
            </p>
            <p className="p-custom text-center text-white mt-3">
              Founded by Iryna, an experienced massage therapist and certified
              Nordic Walking Instructor, Wellness Studio is more than just a
              place for healing—it is a space for transformation. With over
              seven years of expertise in therapeutic massage, posture
              correction, and holistic movement, Iryna combines scientific
              knowledge with a deep passion for helping others.
            </p>
            <p className="p-custom text-center text-white  mt-3">
              At Wellness Studio, we offer a tailored approach to healing,
              blending advanced massage techniques with movement-based therapies
              like Nordic Walking. Whether you are recovering from injury,
              seeking relief from chronic pain, or looking to enhance your
              overall vitality, we are here to support you—every step of the
              way. You are never too old, too injured, or too late to start.
              Let&apos;s move forward—together.
            </p>
          </div>
        </div>
      </div>
      ;{/* Massage Experience Section */}
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
      ;{/* Posture Correction Section */}
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
      ;{/* Nordic Walking Section */}
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
    </>
  );
}
