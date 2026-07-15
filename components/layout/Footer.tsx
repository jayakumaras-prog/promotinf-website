import Link from "next/link";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
] as const;

export default function Footer() {
  return (
    <footer className="bg-[#081A31] text-white">
      <div className="container-custom py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-4 text-2xl font-bold">PROMOTINF</h2>
            <p className="leading-7 text-gray-400">Crafting Landmarks.<br />Building Legacy.</p>
          </div>
          <div>
            <h2 className="mb-5 font-semibold">Quick Links</h2>
            <ul className="space-y-3 text-gray-400">
              {links.map(([label, href]) => <li key={href}><Link className="transition hover:text-[#C9A227]" href={href}>{label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2 className="mb-5 font-semibold">Contact</h2>
            <ul className="space-y-3 text-gray-400">
              <li><a className="hover:text-[#C9A227]" href="tel:+917540066770">+91 75400 66770</a></li>
              <li><a className="hover:text-[#C9A227]" href="mailto:jayakumaras@promotinf.in">jayakumaras@promotinf.in</a></li>
              <li>Salem, Tamil Nadu</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-5 font-semibold">Office</h2>
            <address className="not-italic leading-7 text-gray-400">D.No. 36, Valmiki Street,<br />Subramania Nagar,<br />Salem – 636005</address>
          </div>
        </div>
        <p className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-500">© 2026 Promotinf Constructions Private Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
