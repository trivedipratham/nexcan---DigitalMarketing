import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="border-t border-border pt-20 pb-8">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-display font-extrabold text-xl tracking-tight">
              <span className="text-primary">NEXUS</span>
              <span className="text-foreground">DIGITAL</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              Next-generation digital marketing for brands that refuse to be ordinary.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Navigate</h4>
            <ul className="space-y-3">
              {["About", "Services", "Case Studies", "Pricing", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              {["SEO Growth Engine", "Social Media Growth", "Performance Advertising", "Content Marketing", "Email Automation"].map((s) => (
                <li key={s}>
                  <span className="text-sm text-muted-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">Get weekly growth insights delivered to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="bg-primary text-primary-foreground rounded-lg px-4 py-3 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)] transition-all">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Nexus Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <a key={social} href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
