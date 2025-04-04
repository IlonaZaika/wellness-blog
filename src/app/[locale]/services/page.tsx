// app/services/page.tsx

import SectionHeadline from "@/components/SectionHeadline";
import ServicesSliderWithSuspense from "@/components/ServicesSliderWithSuspense";
import { useTranslations } from "next-intl";

export default function ServicesPage() {
  const t = useTranslations("ServicesPage");

  return (
    <div className="min-h-screen mt-12 bg-bgBase px-4 py-6 md:p-16 lg:px-32">
      <div className="mx-auto lg:max-w-6xl">
        <SectionHeadline title={t("headline")} subTitle={t("subtitle")} />
        <ServicesSliderWithSuspense />
      </div>
    </div>
  );
}
