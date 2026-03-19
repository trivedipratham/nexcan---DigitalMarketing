import { motion } from "framer-motion";
import dashboard from "../../public/192044-891655420_medium.mp4";
const DashboardMockup = () => (
  <div className="bg-black rounded-[2rem] border border-white/5 w-full max-w-5xl mx-auto overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] relative group">
    {/* Browser Bar */}
    <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-white/[0.02] border-b border-white/5 relative z-30">
      <div className="flex items-center gap-1.5 sm:gap-2">
        <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-500/50" />
        <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-yellow-500/50" />
        <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-green-500/50" />
      </div>
      <div className="w-8 sm:w-12 h-1 bg-white/5 rounded-full" />
    </div>

    {/* Video Engine & Content */}
    <div className="relative aspect-[4/3] sm:aspect-video w-full overflow-hidden">
      {/* Cinematic Tech Background (Reliable Alternative to Video) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.video
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          }}
          src={dashboard}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 brightness-75 scale-105 group-hover:scale-100 transition-all duration-[3000ms]"
        />
      </div>

      {/* Interactive Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#04060b] via-transparent to-transparent z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,_#04060b_100%)] opacity-40 z-10" />

      {/* Scanner Animation */}
      <motion.div
        animate={{ y: ["-100%", "200%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-yellow-400/10 to-transparent z-20 pointer-events-none"
      />

      {/* Overlaid Data Modules */}
      <div className="absolute inset-0 z-30 flex flex-col p-4 sm:p-6 lg:p-12">
        {/* Main Stats Grid - Clears the center for the video */}
        <div className="flex-1 flex items-center justify-center md:pt-10">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-6 md:gap-x-12 lg:gap-x-[35%] sm:gap-y-6 lg:gap-y-8 w-full max-w-4xl">
            {[
              {
                label: "Editing Precision",
                value: "99.9%",
                color: "text-green-500",
                trend: "Frame Perfect",
              },
              {
                label: "Engagement Velocity",
                value: "4.8M",
                color: "text-white",
                trend: "Trending",
              },
              {
                label: "Production Quality",
                value: "8K HDR",
                color: "text-yellow-400",
                trend: "Ultra-HD",
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.8 }}
                className={`bg-white/5 backdrop-blur-xl border border-white/10 p-3 sm:p-5 lg:p-7 rounded-2xl sm:rounded-[2.5rem] group/card hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl overflow-hidden relative ${i === 2 ? "col-span-2 md:col-span-1 md:col-start-1" : ""}`}
              >
                <p className="text-[4px] md:text-xs text-zinc-500 uppercase tracking-[0.2em] font-black mb-3">
                  {stat.label}
                </p>
                <h4
                  className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl font-display font-black tracking-tighter ${stat.color} leading-none mb-2 sm:mb-4`}
                >
                  {stat.value}
                </h4>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-[8px] font-mono text-zinc-400 font-bold tracking-widest uppercase">
                    {stat.trend}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Data Bar */}
        <div className="flex justify-between items-end pb-2">
          <div className="space-y-2 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-4 mt-2 sm:mt-4">
              <div className="h-px sm:h-0.5 w-8 sm:w-12 bg-yellow-400" />
              <p className="text-white font-display text-sm sm:text-lg lg:text-xl font-bold tracking-tight uppercase opacity-80">
                Advanced Reel Production
              </p>
            </div>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((x) => (
                <div key={x} className="w-1 h-1 rounded-full bg-white/20" />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-end gap-2 pr-4">
            <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">
              Export Ready
            </span>
            <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-1/2 h-full bg-yellow-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DashboardMockup;
