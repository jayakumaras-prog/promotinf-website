import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B2341]">

      {/* Background */}
<div className="absolute inset-0 bg-gradient-to-br from-[#061526] via-[#0B2341] to-[#17497D]" />

{/* Gold Glow */}
<div className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#C9A227]/10 blur-3xl" />

{/* Blue Glow */}
<div className="absolute -left-32 bottom-0 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-3xl" />

{/* Grid Pattern */}
<div
  className="absolute inset-0 opacity-[0.04]"
  style={{
    backgroundImage: `
      linear-gradient(to right, white 1px, transparent 1px),
      linear-gradient(to bottom, white 1px, transparent 1px)
    `,
    backgroundSize: "60px 60px",
  }}
/>

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
<FadeIn>
        <div className="max-w-xl">

          <p className="mb-6 text-xs md:text-sm uppercase tracking-[0.35em] text-[#C9A227]">
            Promotinf Constructions Private Limited
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">

            Crafting Landmarks.

            <br />

            <span className="text-[#C9A227]">
              Building Legacy.
            </span>

          </h1>

          <p className="mt-8 text-base md:text-lg lg:text-xl leading-8 text-gray-300">

            Creating thoughtfully designed homes that combine
            quality craftsmanship, spacious living, transparency
            and lasting value for generations.

          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5">
            <Button href="/about">Our Vision</Button>
            <Button href="/contact" variant="secondary">Contact Us</Button>
          </div>

        </div>
</FadeIn>
<div className="hidden lg:flex justify-center">
  <Image
  src="/images/hero/apartment.png"
  alt="Luxury Apartment"
  width={700}
  height={700}
  priority
  className="w-full max-w-[650px] h-auto drop-shadow-2xl float"
 />
</div>
      </div>

    </section>
  );
}
