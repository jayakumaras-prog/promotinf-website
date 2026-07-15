import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const services = [
  {
    title: "Residential Development",
    description:
      "Thoughtfully planned apartments designed for comfortable, practical everyday living.",
  },
  {
    title: "Quality Construction",
    description:
      "Careful attention to materials, workmanship and lasting value at every stage.",
  },
  {
    title: "Support Beyond Possession",
    description:
      "Dedicated assistance for minor electrical, plumbing and paint repairs after handover.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="bg-[#0B2341] px-6 py-24 text-center text-white">
          <p className="mb-4 uppercase tracking-[0.3em] text-[#C9A227]">Services</p>
          <h1 className="text-4xl font-bold sm:text-5xl">Built Around Better Living.</h1>
        </section>
        <section className="section">
          <div className="container-custom grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-gray-200 p-8">
                <h2 className="mb-3 text-2xl font-bold text-[#0B2341]">{service.title}</h2>
                <p className="leading-7 text-gray-600">{service.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
