import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ActionButton from "@/components/ActionLink";
import SectionHeadline from "@/components/SectionHeadline";
import OfferItemCard from "@/components/Cards/OfferItemCard";
import SymptomCard from "@/components/Cards/SymptomCard";

export default function Home() {
  const t = useTranslations("HomePage");
  const serviceKeys = ["service1", "service2", "service3"];
  const symptomKeys = ["symptom1", "symptom2", "symptom3", "symptom4"];

  return (
    <div>
      {/* Hero Section */}
      <section className="md:min-h-screen bg-gradient-to-b from-green-50 to-cyan-50 px-5 pt-20 pb-6 lg:p-32">
        <div className="mx-auto flex flex-col justify-center items-center md:flex-row gap-8 lg:max-w-6xl">
          <Image
            src="/hero-img.jpg"
            alt={"Massage therapist in Edinburg"}
            className="hidden md:block rounded-lg"
            width={400}
            height={400}
            priority
          />
          <div className="text-center md:text-left">
            <h3 className="h3-custom">
              <strong>{t("hero.subtitle.offer")}</strong>&nbsp;|&nbsp;
              {t("hero.subtitle.location")}
            </h3>
            <h1 className="h1-custom">{t("hero.headline")}</h1>
            <p className="p-custom">{t("hero.bio")}</p>
            <div className="my-5 flex flex-row items-center gap-2 md:hidden lg:hidden">
              <Image
                src="/hero-img.jpg"
                alt="Wellness"
                className="rounded-lg"
                width={170}
                height={230}
                priority
                style={{ width: "auto", height: "auto" }}
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
      <section className="bg-bgBase section-spacing">
        <SectionHeadline
          title={t("problem.headline")}
          subTitle={t("problem.subtitle")}
        />
        <div className="grid grid-cols-2 gap-2 md:gap-6 md:grid-cols-4">
          <div className="relative h-full w-full">
            <Image
              src="/stress-woman.jpg"
              alt={t("problem.img_problem_alt")}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            {symptomKeys.map((key, index) => (
              <SymptomCard
                key={index}
                id={""}
                symptomName={t(`problem.${key}`)}
              />
            ))}
          </div>
          <div className="col-span-2 bg-accent p-5 rounded-lg h-full flex items-end justify-center">
            <div>
              <h4 className="h4-custom font-light text-white text-center">
                {t("solution")}
              </h4>
              <div className="my-6 flex justify-center">
                <ActionButton
                  href="#"
                  variant="secondary"
                  label={t("problem.cta_book_consultation")}
                  className="bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Offer Section */}
      <section className="section-spacing">
        <SectionHeadline
          title={t("services.headline")}
          subTitle={t("services.subtitle")}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {serviceKeys.map((key, index) => (
            <OfferItemCard
              key={index}
              id={""}
              title={t(`services.${key}.name`)}
              imageUrl={t(`services.${key}.imageUrl`)}
              imageAlt={t(`services.${key}.img_service_alt`)}
              description={t(`services.${key}.description`)}
            />
          ))}
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="bg-bgBase section-spacing">
        <SectionHeadline
          title={t("testimonials.headline")}
          subTitle={t("testimonials.subtitle")}
        />
        <p className="p-custom text-center md:text-left">
          {t("testimonials.description")}
        </p>
        <Testimonials />
      </section>
      <section className="bg-accent text-center section-spacing">
        <h2 className="h2-custom text-white">{t("cta_final.headline")}</h2>
        <div className="flex justify-center">
          <ActionButton
            href="#"
            variant="secondary"
            label={t("cta_final.cta_book")}
            className="bg-white"
          />
        </div>
      </section>
    </div>
  );
}
