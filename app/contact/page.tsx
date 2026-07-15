import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="bg-[#0B2341] px-6 py-24 text-center text-white">
          <p className="mb-4 uppercase tracking-[0.3em] text-[#C9A227]">Contact Us</p>
          <h1 className="text-4xl font-bold sm:text-5xl">Let&apos;s Build Something That Lasts.</h1>
        </section>
        <section className="section">
          <div className="container-custom grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#0B2341]">Speak with Promotinf</h2>
              <div className="space-y-5 leading-7 text-gray-600">
                <p><strong className="text-[#0B2341]">Phone:</strong> <a className="hover:text-[#C9A227]" href="tel:+917540066770">+91 75400 66770</a></p>
                <p><strong className="text-[#0B2341]">Email:</strong> <a className="hover:text-[#C9A227]" href="mailto:jayakumaras@promotinf.in">jayakumaras@promotinf.in</a></p>
                <p><strong className="text-[#0B2341]">Office:</strong><br />D.No. 36, Valmiki Street,<br />Subramania Nagar, Salem, Tamil Nadu – 636005</p>
              </div>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8">
              <h2 className="mb-4 text-2xl font-bold text-[#0B2341]">Send an enquiry</h2>
              <p className="leading-7 text-gray-600">Call or email us to discuss your enquiry. A website enquiry form will be added when we connect the site to an email service for launch.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
