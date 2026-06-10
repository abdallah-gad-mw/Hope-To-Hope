import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Facebook, Instagram, Twitter, Youtube, CheckCircle2 } from "lucide-react";
import logo from "@/assets/angels-care-logo.webp.asset.json";
import footerData from "@/content/footer.json";

const socialIconMap = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  twitter: Twitter,
};

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 5000);
    }
  };

  return (
    <footer className="bg-ink text-white w-full border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 lg:px-16">
        {/* Inline Newsletter Signup */}
        <div className="border-b border-white/10 pb-10 mb-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-md text-center lg:text-left">
              <h3 className="text-xl font-bold mb-2">{footerData.newsletterTitle}</h3>
              <p className="text-white/70 text-sm">{footerData.newsletterSubtext}</p>
            </div>
            <div className="w-full max-w-md">
              {isSubscribed ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 flex items-center gap-3 text-emerald-300">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <span className="text-sm font-semibold">Successfully Subscribed!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full">
                  <input
                    id="footer-newsletter-email"
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/20 w-full"
                  />
                  <button
                    type="submit"
                    className="bg-[#1cbee7] hover:bg-[#15a2c6] text-white rounded-full px-6 py-3 text-xs uppercase tracking-wider font-bold transition duration-200 shrink-0 w-full sm:w-auto"
                  >
                    {footerData.newsletterButtonText}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4 lg:col-span-5">
            <div className="inline-block">
              <img src={logo.url} alt="Angels Care Uganda" className="h-10 w-auto" />
            </div>
            <p className="mt-5 text-white/70 max-w-sm">{footerData.aboutText}</p>
            <div className="mt-6 flex gap-2">
              {footerData.socials.map((social) => {
                const IconComponent = socialIconMap[social.type as keyof typeof socialIconMap];
                if (!IconComponent) return null;
                return (
                  <a
                    key={social.type}
                    href={social.url}
                    className="h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-coral transition"
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-3 gap-4">
            {footerData.columns.map((col) => (
              <FooterCol key={col.title} title={col.title} links={col.links} />
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-white/60">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Angels Care Uganda. All rights reserved. Powered by{" "}
            <a href={footerData.poweredByUrl} target="_blank" rel="noopener noreferrer">
              {footerData.poweredByText}
            </a>
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="text-sm text-white/50 uppercase tracking-widest font-medium">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-white/85 hover:text-coral transition">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
