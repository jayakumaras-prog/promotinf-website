import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="section bg-white">
      <div className="container-custom">

        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-[#0B2341] px-8 py-20 text-center shadow-2xl lg:px-16">

            {/* Gold Glow */}
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[#C9A227]/10 blur-3xl" />

            {/* Blue Glow */}
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative z-10">

              <p className="mb-4 font-semibold uppercase tracking-[5px] text-[#C9A227]">
                LET&apos;S BUILD TOGETHER
              </p>

              <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
                Your Dream Home Begins Here.
              </h2>

              <p className="mx-auto mb-10 max-w-2xl leading-8 text-gray-300">
                Whether you're looking for your first apartment or your forever home,
                we're here to guide you with honesty, quality and commitment.
              </p>

              <div className="flex flex-col justify-center gap-5 sm:flex-row">
                <Button href="/contact">
                  Enquire Now
                </Button>

                <Button href="/contact" variant="secondary">
                  Contact Us
                </Button>
              </div>

            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}