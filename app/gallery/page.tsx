import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="bg-[#0B2341] px-6 py-24 text-center text-white">
          <p className="mb-4 uppercase tracking-[0.3em] text-[#C9A227]">Gallery</p>
          <h1 className="text-4xl font-bold sm:text-5xl">Our Work Will Speak for Itself.</h1>
        </section>
        <section className="section">
          <div className="container-custom max-w-3xl text-center">
            <h2 className="mb-5 text-3xl font-bold text-[#0B2341]">Project visuals coming soon</h2>
            <p className="leading-8 text-gray-600">
              Our first residential development is currently under planning. This gallery will be updated
              with project renders, construction progress and completed-work photography as they become available.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
