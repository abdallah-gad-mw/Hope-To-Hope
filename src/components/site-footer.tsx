import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Facebook, Instagram, Twitter, Youtube, CheckCircle2 } from "lucide-react";
import logo from "@/assets/angels-care-logo.webp.asset.json";

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
              <h3 className="text-xl font-bold mb-2">Stay Connected</h3>
              <p className="text-white/70 text-sm">
                Sign up with your email address to receive monthly news, hope stories, and updates.
              </p>
            </div>
            <div className="w-full max-w-md">
              {isSubscribed ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 flex items-center gap-3 text-emerald-300">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <span className="text-sm font-semibold">Successfully Subscribed!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 w-full">
                  <input
                    id="footer-newsletter-email"
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/20"
                  />
                  <button
                    type="submit"
                    className="bg-[#1cbee7] hover:bg-[#15a2c6] text-white rounded-full px-6 py-3 text-xs uppercase tracking-wider font-bold transition duration-200 shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="inline-block">
              <img src={logo.url} alt="Angels Care Uganda" className="h-10 w-auto" />
            </div>
            <p className="mt-5 text-white/70 max-w-sm">
              Bringing hope, education and care to refugee children in the Kyaka II settlement since
              2008.
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Facebook, Youtube, Twitter].map((I, k) => (
                <a
                  key={k}
                  href="#"
                  className="h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-coral transition"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="About"
            links={[
              { label: "Our Vision", to: "/about/our-vision" },
              { label: "Kyaka II", to: "/about/kyaka-ii" },
              { label: "Our Team", to: "/about/our-team" },
            ]}
          />
          <FooterCol
            title="Projects"
            links={[
              { label: "Angels Care School", to: "/projects/school" },
              { label: "Medical Centre", to: "/projects/medical-centre" },
              { label: "Orphanage", to: "/projects/orphanage" },
              { label: "Hope Projects", to: "/projects/hope-projects" },
            ]}
          />
          <FooterCol
            title="Community"
            links={[
              { label: "Hope Stories", to: "/hope-stories" },
              { label: "Hope Family", to: "/hope-family" },
            ]}
          />
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} Angels Care Uganda. All rights reserved. Powered by{" "}
            <a href="https://morellis.us/" target="_blank">
              Morellis
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
    <div className="md:col-span-2">
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
