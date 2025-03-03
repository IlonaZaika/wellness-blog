import Gallery from "@/components/Gallery";
import Image from "next/image";
import { qualificationItems } from "@/constants/qualifications";
import Testimonials from "@/components/Testimonials";

export default function About() {
  return (
    <div className="min-h-screen mt-16">
      {/* Our Mission Section */}
      <section className="p-sm md:p-md lg:px-lg flex justify-center bg-accent">
        <div className="px-6 md:w-3/5 pb-16 pt-10">
          <h2 className="h2-custom text-white text-center">Our Mission</h2>
          <p className="p-custom text-center text-white">
            At <strong>Wellness Studio</strong>, our mission is to help you move
            freely, feel strong, and live without limits. We believe that true
            wellness comes from balance — between body and mind, strength and
            relaxation, movement and stillness. <br />
            Founded by Iryna, an experienced massage therapist and certified
            Nordic Walking Instructor, Wellness Studio is more than just a place
            for healing — it is a space for transformation. With over seven
            years of expertise in therapeutic massage, posture correction, and
            holistic movement, Iryna combines scientific knowledge with a deep
            passion for helping others. <br />
            At Wellness Studio, we offer a tailored approach to healing,
            combining advanced massage techniques with movement — based
            therapies like Nordic Walking. Whether you are recovering from
            injury, seeking relief from chronic pain, or looking to enhance your
            overall vitality, we are here to support you — every step of the
            way. You are never too old, too injured, or too late to start.
            Let&apos;s move forward — together.
          </p>
        </div>
      </section>
      {/* About Me Section */}
      <section className="bg-bgBase p-sm md:p-md lg:px-lg flex justify-center">
        <div className="flex flex-col md:flex-row br-bgBase items-center max-w-6xl w-full">
          <div className="p-sm md:w-1/2 mx-auto text-center md:text-left mr-8">
            <h3 className="h3-custom">Message from the Founder</h3>
            <h2 className="h2-custom">About Me</h2>
            <p className="p-custom">
              In 2006, my life changed in an instant. A broken leg, four
              surgeries, and a long rehabilitation process left me facing a
              future filled with uncertainty. Doctors couldn&apos;t guarantee
              that I would ever walk, run, or dance again. But I refused to
              accept those limitations. Through dedicated training, expert
              guidance, and relentless perseverance, I not only regained my
              mobility—I discovered a passion for movement, healing, and helping
              others do the same.
              <br />
              <br />
              This journey led me to study massage therapy, anatomy, and
              movement science. Over the years, I have had the privilege of
              working with people of all ages and backgrounds, guiding them
              toward stronger, healthier bodies. What I&apos;ve learned is
              simple: movement is freedom. Pain and stiffness should never hold
              you back from living fully. That&apos;s why I created this
              space—to support, inspire, and empower you on your own journey to
              wellness. Whether through massage, posture-focused exercises, or
              Nordic walking, my mission is to help you feel comfortable,
              capable, and confident in your body. You are never too old, too
              injured, or too late to start. Let&apos;s move forward—together.
              <br />
              <br />
              With love, <br />
              Iryna
            </p>
          </div>
          <div className="w-full relative md:w-1/2 min-h-[400px] md:min-h-[550px] lg:min-h-[650px]">
            <Image
              src="/about-hero.jpg"
              alt="Massage"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="p-sm md:p-md lg:px-lg">
        <div className="lg:gap-5">
          <h3 className="h3-custom">
            Experience, Certification, and Passion Combined
          </h3>
          <h2 className="h2-custom">Qualifications</h2>

          <div className="flex flex-col items-center">
            <div className="pb-8">
              {qualificationItems.map((item, index) => (
                <div key={index}>
                  <h5 className="h5-custom">{item.name}</h5>
                  <p className="p-custom">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="relative w-full h-96 overflow-hidden">
              <Gallery />
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="bg-bgBase p-sm md:p-md lg:px-lg">
        <h3 className="h3-custom">Testimonials</h3>

        <h2 className="h2-custom">What Our Customers Say</h2>
        <p className="p-custom">
          Hear from our clients and discover how our personalized wellness
          approach has improved their lives
        </p>
        <Testimonials />
      </section>
    </div>
  );
}
