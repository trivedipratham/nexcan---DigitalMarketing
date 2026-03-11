import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    alert("Thank you! We'll be in touch shortly.");
    setForm({ name: "", email: "", service: "", message: "" });
  };

  const inputStyles =
    "w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200";

  return (
    <div>
      <section className="section-spacing pt-32">
        <div className="content-column">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-body">Contact</p>
            <h1 className="text-4xl md:text-5xl font-heading text-foreground mb-6">
              Let's <span className="text-emphasis">talk.</span>
            </h1>
            <p className="text-muted-foreground max-w-lg font-body leading-relaxed mb-16">
              Every great result starts with a conversation. Tell us what you're working toward.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-16">
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs text-muted-foreground font-body uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className={inputStyles}
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground font-body uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    required
                    className={inputStyles}
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground font-body uppercase tracking-wider mb-2">Service Needed</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    required
                    className={inputStyles}
                  >
                    <option value="">Select a service</option>
                    <option value="seo">SEO</option>
                    <option value="ppc">PPC Advertising</option>
                    <option value="social">Social Media Management</option>
                    <option value="content">Content Strategy</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground font-body uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your goals..."
                    rows={5}
                    required
                    className={inputStyles + " resize-none"}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-body font-semibold text-sm hover:brightness-110 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                {[
                  { icon: Mail, label: "Email", value: "hello@karmadude.studio" },
                  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                  { icon: MapPin, label: "Location", value: "New York, NY" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Icon size={18} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">{label}</p>
                      <p className="text-sm text-foreground font-body">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
