import Image from "next/image";
import { useTranslations } from "next-intl";
import SectionHeadline from "@/components/SectionHeadline";
import Certifications from "@/components/Certifications";
import FAQ from "@/components/FAQ";

export default function About() {
  const t = useTranslations("AboutPage");
  const qualificationsItems = t.raw("qualifications.items");

  return (
    <div className="mt-12">
      {/* Our Mission Section */}
      <section className="flex justify-center bg-accent section-spacing">
        <div className="px-sm mx-auto md:max-w-2xl lg:max-w-4xl">
          <h2 className="h2-custom text-white text-center">
            {t("ourMission.title")}
          </h2>
          <p className="p-custom text-center text-white">
            {t("ourMission.description")}
          </p>
        </div>
      </section>
      {/* About Me Section */}
      <section className="bg-bgBase flex justify-center section-spacing">
        <div className="flex flex-col md:flex-row br-bgBase items-center mx-auto lg:max-w-6xl">
          <div className=" md:w-1/2 mx-auto text-center md:text-left md:mr-8">
            <SectionHeadline
              title={t("aboutMe.title")}
              subTitle={t("aboutMe.subtitle")}
            />
            <p className="p-custom">{t("aboutMe.description")}</p>
            <br />
            <p className="p-custom">{t("aboutMe.goodby")}</p>
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
      <section className="section-spacing ">
        <div className="mx-auto lg:max-w-6xl lg:gap-5">
          <SectionHeadline
            title={t("qualifications.title")}
            subTitle={t("qualifications.subtitle")}
          />

          <div className="px-2 flex flex-col items-center">
            <div>
              {qualificationsItems.map(
                (
                  item: { name: string; description: string },
                  index: number
                ) => (
                  <div key={index}>
                    <h5 className="h5-custom">{item.name}</h5>
                    <p className="p-custom">{item.description}</p>
                  </div>
                )
              )}
            </div>
            <div className="relative w-full h-auto overflow-hidden items-center">
              <Certifications />
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="bg-bgBase section-spacing">
        <div className="mx-auto lg:max-w-3xl">
          <h2 className="h2-custom text-center">{t("faq.title")}</h2>
          <p className="p-custom text-center pb-8 md:pb-12">
            {t("faq.description")}
          </p>
        </div>
        <FAQ />
      </section>
    </div>
  );
}
