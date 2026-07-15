import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>

        {/* Hero */}

        <section className="bg-[#0B2341] text-white py-28">

          <div className="container-custom text-center">

            <p className="uppercase tracking-[4px] text-[#C9A227] mb-4">
              ABOUT US
            </p>

            <h1 className="text-5xl font-bold">
              Building Trust.
              <br />
              Building Communities.
            </h1>

          </div>

        </section>

        {/* Company Story */}

        <section className="section">

          <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <h2 className="text-4xl font-bold text-[#0B2341] mb-6">
                Who We Are
              </h2>

              <p className="text-gray-600 leading-8 mb-6">
                Promotinf Constructions Private Limited is committed to
                delivering quality residential developments that combine
                superior craftsmanship, thoughtful planning and long-term value.
              </p>

              <p className="text-gray-600 leading-8">
                We believe every family deserves a home that is spacious,
                reliable and built with complete transparency.
              </p>

            </div>

            <div className="bg-[#0B2341] h-[450px] rounded-3xl flex items-center justify-center">

              <FadeIn>
  <Image
  src="/images/about/apartment4.png"
  alt="Promotinf Constructions"
  width={1536}
  height={1024}
  className="h-[550px] w-full rounded-3xl object-cover shadow-2xl transition duration-700 hover:scale-105"
  priority
/>
</FadeIn>
            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}