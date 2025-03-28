import { useTranslations } from "next-intl";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  const t = useTranslations("ContactPage");

  return (
    <div className="min-h-auto mt-16">
      <section className="p-sm md:p-md lg:px-lg ">
        <div className="flex flex-col md:flex-row md:space-x-6 justify-center">
          <div className="bg-bgBase text-textGrey p-10 rounded-lg flex items-center">
            <div>
              <div className="flex items-start space-x-4 py-4">
                <FaMapMarkerAlt className="text-accent text-2xl" />
                <div>
                  <h3 className="font-medium text-accent font-inter">
                    {t("address.title")}
                  </h3>
                  <p className="p-custom">{t("address.content")}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 py-4">
                <FaPhoneAlt className="text-accent text-2xl" />
                <div>
                  <h3 className="font-medium text-accent font-inter">
                    {t("whatsapp.title")}
                  </h3>
                  <p className="p-custom">{t("whatsapp.content")}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 py-4">
                <FaEnvelope className="text-accent text-2xl" />
                <div>
                  <h3 className="font-medium text-accent font-inter">
                    {t("email.title")}
                  </h3>
                  <p className="p-custom">{t("email.content")}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 py-4">
                <FaClock className="text-accent text-2xl" />
                <div>
                  <h3 className="font-medium text-accent font-inter">
                    {t("opening_hours.title")}
                  </h3>
                  <p className="p-custom">
                    {t("opening_hours.content.mon_sat")}
                    <br />
                    {t("opening_hours.content.sunday")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="h2-custom text-center md:text-left">
              {t("contact_form.title")}
            </h2>

            <form className="font-inter font-light text-white text-[13px]">
              <input
                type="text"
                placeholder={t("contact_form.form.name_placeholder")}
                className="px-4 py-3 mb-2 rounded-lg w-full font-inter text-textGreen border border-textGrey focus:outline-none"
              />
              <input
                type="email"
                placeholder={t("contact_form.form.email_placeholder")}
                className="px-4 py-3 mb-2  rounded-lg w-full font-inter text-textGreen border border-textGrey focus:outline-none"
              />
              <textarea
                placeholder={t("contact_form.form.message_placeholder")}
                rows={5}
                className="px-4 py-3 mb-2 rounded-lg w-full font-inter text-textGreen border border-textGrey focus:outline-none"
              ></textarea>
              <button type="submit" className="primary-btn w-full">
                {t("contact_form.form.submit_button")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
