import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-16">
    <div className="content-column">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="font-heading text-lg text-foreground mb-3">KARMADUDE</p>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            We believe good work yields good results. Digital growth, delivered with intention.
          </p>
        </div>
        <div>
          <p className="font-body font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">Pages</p>
          <nav className="flex flex-col gap-2">
            {[
              { label: "Home", path: "/" },
              { label: "Services", path: "/services" },
              { label: "About", path: "/about" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="font-body font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">Connect</p>
          <div className="flex gap-4">
            {["Twitter", "LinkedIn", "Instagram"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} Karmadude Studio. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
