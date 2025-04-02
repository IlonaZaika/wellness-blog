import { useTranslations } from "next-intl";
import FAQ from "@/components/FAQ";
import ActionButton from "@/components/ActionLink";
import { navItems } from "@/constants/navItems";

export default function About() {
  const t = useTranslations("FaqPage");
  const contactHref =
    navItems.find((item) => item.name === "contact")?.href || "";

  return (
    <div className="mt-12 min-h-screen bg-bgBase">
      <section className=" section-spacing">
        <div className="mx-auto lg:max-w-3xl">
          <h2 className="h2-custom text-center">{t("title")}</h2>
          <p className="p-custom text-center pb-8 md:pb-12">
            {t("description")}
          </p>
        </div>
        <FAQ />
      </section>
      <section>
        <div className="flex flex-col justify-center items-center pb-20">
          <div className="flex flex-col justify-center items-center lg:max-w-2xl">
            <h2 className="h2-custom text-center">{t("cta_final.headline")}</h2>
            <p className="p-custom text-center pb-8 md:pb-12">
              {t("cta_final.description")}
            </p>
            <ActionButton
              href={contactHref}
              variant="primary"
              label={t("cta_final.cta_contact")}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
