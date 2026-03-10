import { motion } from "framer-motion";
import { useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", business: "", service: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission
  };

  return (
    <section className="min-h-screen pt-32 pb-20">
      <div className="section-container max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-primary text-xs font-display font-bold uppercase tracking-[0.2em] mb-4 block">
            Contact
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl uppercase tracking-tight mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Ready to scale? Tell us about your brand and we'll craft a growth strategy tailored to your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.form
            className="lg:col-span-3 glass-card p-8 md:p-12 space-y-6"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-display font-bold uppercase tracking-wider text-muted-foreground mb-2 block">Name</label>
                <input
                  type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-display font-bold uppercase tracking-wider text-muted-foreground mb-2 block">Email</label>
                <input
                  type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-display font-bold uppercase tracking-wider text-muted-foreground mb-2 block">Phone</label>
                <input
                  type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label className="text-xs font-display font-bold uppercase tracking-wider text-muted-foreground mb-2 block">Business Type</label>
                <input
                  type="text" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="e.g. Ecommerce, SaaS"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-display font-bold uppercase tracking-wider text-muted-foreground mb-2 block">Service Required</label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-5 py-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Select a service</option>
                <option value="seo">SEO Growth Engine</option>
                <option value="social">Social Media Growth</option>
                <option value="ads">Performance Advertising</option>
                <option value="content">Content Marketing</option>
                <option value="email">Email Automation</option>
                <option value="full">Full-Stack Growth</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-display font-bold uppercase tracking-wider text-muted-foreground mb-2 block">Message</label>
              <textarea
                value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full bg-secondary border border-border rounded-lg px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="Tell us about your goals..."
              />
            </div>
            <button type="submit" className="btn-neon w-full">
              Send Inquiry
              <Send size={16} />
            </button>
          </motion.form>

          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {[
              { icon: MapPin, title: "Visit Us", detail: "123 Innovation Drive, San Francisco, CA 94102" },
              { icon: Phone, title: "Call Us", detail: "+1 (555) 123-4567" },
              { icon: Mail, title: "Email Us", detail: "hello@nexusdigital.com" },
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm uppercase mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="glass-card h-48 flex items-center justify-center">
              <span className="text-xs text-muted-foreground">Google Maps Integration</span>
            </div>

            <div className="glass-card p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Average response time</p>
              <p className="font-display font-extrabold text-2xl text-primary">{"< 2 Hours"}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
