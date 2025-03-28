import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  console.log(" requested locale", requested);

  const locale = routing.locales.includes(
    requested as (typeof routing.locales)[number]
  )
    ? requested
    : routing.defaultLocale;
  console.log(" final locale", locale);

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});
