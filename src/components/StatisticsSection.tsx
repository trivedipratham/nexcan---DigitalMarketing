import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";

const statistics = [
  { value: 300, prefix: "", suffix: "%", label: "Organic Traffic Growth" },
  { value: 5, prefix: "", suffix: "X", label: "Lead Generation" },
  { value: 120, prefix: "", suffix: "+", label: "Campaigns Managed" },
  { value: 50, prefix: "", suffix: "+", label: "Happy Clients" },
];

const StatisticsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-zinc-950 relative border-y border-zinc-800" ref={ref}>
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {statistics.map((stat, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-yellow-400">
                {stat.prefix}
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    useEasing={true}
                  />
                ) : (
                  "0"
                )}
                {stat.suffix}
              </div>
              <p className="text-zinc-400 font-body text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
