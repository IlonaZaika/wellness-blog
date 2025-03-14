import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import { servicesItems } from "@/constants/servicesItems";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ActionButton from "@/components/ActionLink";
import SectionHeadline from "@/components/SectionHeadline";
import SymptomCards from "@/components/SymptomCards";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div>
      {/* Hero Section */}
      <section className="md:min-h-screen bg-gradient-to-b from-green-50 to-cyan-50 px-5 pt-20 pb-6 lg:p-32">
        <div className="mx-auto flex flex-col justify-center items-center md:flex-row gap-8 lg:max-w-6xl">
          <Image
            src="/hero-img.jpg"
            alt={t("hero.img_hero_alt")}
            className="hidden md:block rounded-lg"
            width={400}
            height={400}
          />
          <div className="text-center md:text-left">
            <h3 className="h3-custom">{t("hero.subtitle")}</h3>
            <h1 className="h1-custom">{t("hero.headline")}</h1>
            <p className="p-custom">{t("hero.bio")}</p>
            <div className="my-5 flex flex-row items-center gap-2 md:hidden lg:hidden">
              <Image
                src="/hero-img.jpg"
                alt="Wellness"
                className="rounded-lg"
                width={170}
                height={230}
              />
              <ul className="p-custom text-left">
                <li className="py-2">{t("hero.offer.line1")}</li>
                <li className="py-2">{t("hero.offer.line2")}</li>
                <li className="py-2">{t("hero.offer.line3")}</li>
                <li className="py-2">{t("hero.offer.line4")}</li>
              </ul>
            </div>
            <div className="my-6 flex flex-row gap-3">
              <ActionButton
                href="#"
                variant="primary"
                label={t("hero.cta_book")}
              />
              <ActionButton
                href="#"
                variant="secondary"
                label={t("hero.cta_join")}
                className="bg-white"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Symptoms Section */}
      <section className="bg-bgBase px-4 py-6 md:p-16 lg:p-28">
        <SectionHeadline
          title={t("problem.headline")}
          subTitle={t("problem.subtitle")}
        />
        <div className="grid grid-cols-2 gap-2  md:gap-6 md:grid-cols-4">
          <div className="relative h-full w-full">
            <Image
              src="/stress-woman.jpg"
              alt={t("img_problem_alt")}
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <SymptomCards
              symptoms={[
                t("problem.symptom1"),
                t("problem.symptom2"),
                t("problem.symptom3"),
                t("problem.symptom4"),
              ]}
            />
          </div>
          <div className="col-span-2 bg-accent p-5 rounded-lg h-full flex items-center justify-center">
            <div>
              <h4 className="h4-custom text-white text-center">
                {t("solution")}
              </h4>
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
