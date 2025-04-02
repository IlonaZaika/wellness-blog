import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ActionButton from "@/components/ActionLink";
import SectionHeadline from "@/components/SectionHeadline";
import OfferItemCard from "@/components/Cards/OfferItemCard";
import SymptomCard from "@/components/Cards/SymptomCard";
import ImageSwiper from "@/components/ImageSwiper";
import { navItems, serviceLinks } from "@/constants/navItems";

export default function Home() {
  const t = useTranslations("HomePage");
  const serviceKeys = [
    "massage_therapy",
    "posture_correction",
    "nordic_walking_groups",
  ];
  const symptomKeys = ["symptom1", "symptom2", "symptom3", "symptom4"];
  const servicesHref =
    navItems.find((item) => item.name === "services")?.href || "";
  const joinNordicWalkingGroupHref =
    serviceLinks.find((item) => item.name === "nordic_walking_groups")?.href ||
    "";
  const contactHref =
    navItems.find((item) => item.name === "contact")?.href || "";

  return (
    <div>
      {/* Hero Section */}

      <section className="relative overflow-hidden bg-gradient-to-r from-green-50 via-cyan-50 to-green-100 animate-gradient px-5 pt-20 pb-6 lg:p-32">
        <div className="absolute inset-0 bg-noise opacity-20"></div>
        <div className="relative flex flex-col md:flex-row gap-8 lg:max-w-6xl mx-auto">
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
                  href={servicesHref}
                  variant="primary"
                  label={t("hero.cta_book")}
                />
                <ActionButton
                  href={joinNordicWalkingGroupHref}
                  variant="secondary"
                  label={t("hero.cta_join")}
                  className="bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="section-spacing">
        <div className="mx-auto lg:max-w-6xl">
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
                    href={contactHref}
                    variant="secondary"
                    label={t("problem.cta_book_consultation")}
                    className="bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Offer Section */}
      <section className="section-spacing bg-bgBase">
        <div className="mx-auto lg:max-w-6xl">
          <SectionHeadline
            title={t("services.headline")}
            subTitle={t("services.subtitle")}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {serviceKeys.map((key, index) => (
              <OfferItemCard
                key={index}
                id={key}
                link={
                  serviceLinks.find((item) => item.name === key)?.href || ""
                }
                title={t(`services.${key}.name`)}
                imageUrl={t(`services.${key}.imageUrl`)}
                imageAlt={t(`services.${key}.img_service_alt`)}
                description={t(`services.${key}.description`)}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="bg-bgBase section-spacing">
        <div className="mx-auto lg:max-w-6xl">
          <SectionHeadline
            title={t("testimonials.headline")}
            subTitle={t("testimonials.subtitle")}
          />
          <p className="p-custom text-center md:text-left">
            {t("testimonials.description")}
          </p>
          <Testimonials />
        </div>
      </section>
      <section className="bg-serface section-spacing">
        <div className="flex flex-col md:flex-row gap-8 mx-auto lg:max-w-6xl">
          {/* Image - Show at Bottom on Small Screens, Left on Medium+ Screens */}
          <div className="md:w-1/2 order-2 md:order-1">
            <ImageSwiper />
          </div>

          {/* Text - Show at Top on Small Screens, Right on Medium+ Screens */}
          <div className="flex flex-col justify-center items-center md:w-1/2 order-1 md:order-2">
            <h2 className="font-heading text-3xl my-4 md:my-10 text-textGreen text-center  md:text-4xl lg:text-5xl">
              {t("cta_final.headline")}
            </h2>
            <ActionButton
              href={servicesHref}
              variant="primary"
              label={t("cta_final.cta_book")}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
