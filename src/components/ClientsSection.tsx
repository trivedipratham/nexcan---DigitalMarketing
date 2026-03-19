import { motion } from "framer-motion";
import kd from "../../public/kd.png";
import salad from "../../public/saladwala.png";
import mpos from "../../public/mpos.png";
import purely from "../../public/purely.png";
import jewelmart from "../../public/jewelmart.png";
import bmi from "../../public/bmi.png";
import falcon from "../../public/falcon.png";
import event from "../../public/event.png";
const clientsRow1 = [
  { name: "Karma Dude", img: kd },
  { name: "The Salad Wala", img: salad },
  { name: "MPOS", img: mpos },
  { name: "Purely", img: purely },
];

const clientsRow2 = [
  { name: "Jewelmart", img: jewelmart },
  { name: "BMI", img: bmi },
  { name: "Falcon", img: falcon },
  { name: "Event", img: event },
];

const ClientsSection = () => {
  return (
    <section className="py-12 bg-[#0B0F19] relative border-t border-white/5 overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 left-1/4 w-1/2 h-full bg-yellow-400/5 blur-[120px] rounded-full opacity-30 select-none pointer-events-none" />

      <div className="section-container relative z-10 px-6">
        <div className="flex flex-col items-center mb-10 space-y-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-2"
          >
            <span className="text-[11px] font-mono text-yellow-400 uppercase tracking-[0.3em] font-bold">
              Trusted Network
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-white text-center tracking-tight"
          >
            Global <span className="text-yellow-400">Partners.</span>
          </motion.h2>
        </div>

        {/* Double Row Staggered Marquee */}
        <div className="space-y-6 relative">
          {/* Faders removed to eliminate shadow effect on white cards */}

          {/* Row 1 - Left to Right */}
          <div className="relative overflow-hidden py-2">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex gap-8 md:gap-16 w-max items-center"
            >
              {[...clientsRow1, ...clientsRow1].map((client, i) => (
                <div
                  key={`${client.name}-${i}`}
                  className="group relative flex items-center justify-center w-40 h-20 md:w-64 md:h-32 bg-white border border-white/10 rounded-2xl md:rounded-[2.5rem] hover:bg-white/10 hover:border-yellow-400/50 transition-all duration-500 overflow-hidden p-2"
                >
                  <img
                    src={client.img}
                    alt={client.name}
                    className="w-full h-full object-contain transition-all duration-700 p-2 md:p-3"
                  />
                  <div className="absolute inset-0 transition-colors" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="relative overflow-hidden py-2">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-8 md:gap-16 w-max items-center"
            >
              {[...clientsRow2, ...clientsRow2].map((client, i) => (
                <div
                  key={`${client.name}-${i}`}
                  className="group relative flex items-center justify-center w-40 h-20 md:w-64 md:h-32 bg-white border border-white/10 rounded-2xl md:rounded-[2.5rem] hover:bg-white/10 hover:border-yellow-400/50 transition-all duration-500 overflow-hidden p-2"
                >
                  <img
                    src={client.img}
                    alt={client.name}
                    className="w-full h-full object-contain transition-all duration-700 p-2 md:p-3"
                  />
                  <div className="absolute inset-0 transition-colors" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Global Performance Metric */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 opacity-40 text-xs font-mono text-zinc-300 uppercase tracking-[0.4em]">
          <span className="flex items-center gap-2">
            <div className="w-1 h-1 bg-yellow-400 rounded-full" /> 24/7 NETWORK
            OPERATIONAL
          </span>
          <span className="hidden md:block">|</span>
          <span className="flex items-center gap-2">
            <div className="w-1 h-1 bg-white rounded-full" /> SCALE:
            INFINITE_GROWTH
          </span>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
