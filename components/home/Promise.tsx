import FadeIn from "@/components/ui/FadeIn";
import {
  Building2,
  House,
  Hammer,
  Handshake
} from "lucide-react";
export default function Promise() {
  const promises = [
    {
      title: "Superior Construction",
      description:
        "Built with quality materials and attention to every detail.",
      icon: <Building2 className="mx-auto mb-6 h-14 w-14 text-[#C9A227]" strokeWidth={1.8} />,
    },
    {
      title: "Spacious Living",
      description:
        "Thoughtfully designed apartments with maximum usable space.",
      icon: <House className="mx-auto mb-6 h-14 w-14 text-[#C9A227]" strokeWidth={1.8} />,
    },
    {
      title: "Lifetime Free Service",
      description:
        "Minor electrical, plumbing and paint support after handover.",
      icon: <Hammer className="mx-auto mb-6 h-14 w-14 text-[#C9A227]" strokeWidth={1.8} />,
    },
    {
      title: "Transparent Process",
      description:
        "Honest communication and complete transparency from booking to delivery.",
      icon: <Handshake className="mx-auto mb-6 h-14 w-14 text-[#C9A227]" strokeWidth={1.8} />,
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center text-[#0B2341] mb-4">
          Why Choose Promotinf?
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Every Promotinf home is built around quality, trust and long-term
          customer satisfaction.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
         {promises.map((item, index) => (
           <FadeIn
  key={item.title}
  delay={index * 0.2}
>
  <div className="rounded-2xl border border-gray-200 p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-5xl mb-5">{item.icon}</div>

              <h3 className="text-xl font-semibold text-[#0B2341] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>
              </div>
</FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}