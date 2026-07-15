import Image from "next/image";
import Button from "@/components/ui/Button";
import FadeIn from "../ui/FadeIn";

export default function About() {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <p className="uppercase tracking-[4px] text-[#C9A227] font-semibold mb-3">
              OUR STORY
            </p>

            <h2 className="text-4xl font-bold text-[#0B2341] mb-6">
              Building Homes.
              <br />
              Building Trust.
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              Promotinf Constructions Private Limited is committed to
              developing thoughtfully designed residential communities
              where quality construction, spacious living and customer
              satisfaction come first.
            </p>

            <p className="text-gray-600 leading-8 mb-8">
              Every apartment we build reflects our promise of
              transparency, reliability and long-term value.
            </p>

            <Button href="/about">Learn More</Button>

          </div>

          {/* Right */}

         <div className="relative">

  <FadeIn>
  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
    <Image
      src="/images/about/apartment2.png"
      alt="Promotinf Luxury Apartment"
      width={700}
      height={700}
      className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
    />
  </div>
</FadeIn>

</div>

        </div>

      </div>
    </section>
  );
}
