import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/angels-care-logo.webp.asset.json";

export function SiteFooter() {
  return (
    <footer className="px-4 pb-6 pt-12">
      <div className="max-w-7xl mx-auto rounded-[32px] bg-ink text-white p-10 md:p-14">
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
          <p>© {new Date().getFullYear()} Angels Care Uganda. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
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
