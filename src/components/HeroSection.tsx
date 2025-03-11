import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className=" ">
      <section className="section-custom bg-gradient-to-b from-green-50 to-cyan-50 flex items-center justify-center">
        <div className="pt-16 mx-auto max-w-6xl flex flex-col px-4 items-center md:flex-row gap-8 lg:px-6">
          <Image
            src="/hero-img.jpg"
            alt="Wellness"
            className="rounded-lg w-3/5 h-3/5"
            width={400}
            height={400}
            style={{ width: "80%", height: "auto" }}
          />
          <div className="text-center md:text-left">
            <h3 className="h3-custom">
              <strong>Massage Therapy & Nordic Walking </strong>| Edinburgh
              <span className="hidden md:inline-block">, Scotland</span>
            </h3>
            <h1 className="h1-custom">Life In a Heathy Body</h1>
            <p className="p-custom">
              I combine expert massage therapy with guided Nordic walking
              sessions to create a complete wellness experience, tailored to
              your body’s unique needs.
            </p>
            <div className="my-6 flex flex-col sm:flex-row space-x-0 sm:space-x-2 gap-2">
              <Link href="#" className="primary-btn">
                Book Services
              </Link>
              <Link href="#" className="secondary-btn">
                Get free consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
