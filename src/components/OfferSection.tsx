import OfferItemCard from "@/components/Cards/OfferItemCard";
import { servicesItems } from "@/constants/servicesItems";

export default function OfferSection() {
  return (
    <div>
      <section className=" p-sm md:p-md lg:px-lg">
        <h3 className="h3-custom">Services</h3>
        <h2 className="h2-custom">Tailored to fit your needs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {servicesItems.map((item, index) => (
            <OfferItemCard
              key={index}
              title={item.title}
              imageUrl={item.imageUrl}
              description={item.description}
              imageAlt={""}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
