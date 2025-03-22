import Image from "next/image";
import Testimonials from "@/components/Testimonials";
import { useTranslations } from "next-intl";
import SectionHeadline from "@/components/SectionHeadline";
import Certifications from "@/components/Certifications";

export default function About() {
  const t = useTranslations("AboutPage");
  const qualificationsItems = t.raw("qualifications.items");

  return (
    <div className="min-h-screen mt-12">
      {/* Our Mission Section */}
      <section className="flex justify-center bg-accent section-spacing">
        <div className="px-6 md:w-3/5 pb-16 pt-10">
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
        <div className="flex flex-col md:flex-row br-bgBase items-center max-w-6xl w-full">
          <div className="p-sm md:w-1/2 mx-auto text-center md:text-left mr-8">
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
        <div className="lg:gap-5">
          <SectionHeadline
            title={t("qualifications.title")}
            subTitle={t("qualifications.subtitle")}
          />

          <div className="flex flex-col items-center">
            <div className="pb-8">
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
            <div className="relative w-full h-96 overflow-hidden">
              <Certifications />
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="bg-bgBase section-spacing">
        <SectionHeadline
          title={t("testimonials.title")}
          subTitle={t("testimonials.subtitle")}
        />
        <p className="p-custom">{t("testimonials.description")}</p>
        <Testimonials />
      </section>
    </div>
  );
}
