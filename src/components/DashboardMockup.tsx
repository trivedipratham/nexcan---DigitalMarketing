const DashboardMockup = () => (
  <div className="bg-card rounded-2xl border border-border p-6 md:p-8 w-full max-w-3xl mx-auto">
    <div className="flex items-center gap-2 mb-6">
      <div className="w-3 h-3 rounded-full bg-destructive" />
      <div className="w-3 h-3 rounded-full bg-primary" />
      <div className="w-3 h-3 rounded-full bg-muted" />
      <span className="ml-4 text-xs text-muted-foreground font-body">analytics.karmadude.io</span>
    </div>

    <div className="grid grid-cols-3 gap-4 mb-6">
      {[
        { label: "Total Visitors", value: "124,891", change: "+18.3%" },
        { label: "Conversions", value: "3,847", change: "+24.1%" },
        { label: "Revenue", value: "$89.2K", change: "+31.7%" },
      ].map((stat) => (
        <div key={stat.label} className="bg-secondary rounded-lg p-4">
          <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
          <p className="text-lg md:text-2xl font-heading text-foreground mt-1">{stat.value}</p>
          <p className="text-xs text-primary font-medium mt-1">{stat.change}</p>
        </div>
      ))}
    </div>

    <div className="bg-secondary rounded-lg p-4 h-32 md:h-44 flex items-end gap-[3px]">
      {[35, 55, 40, 65, 50, 80, 60, 90, 70, 95, 75, 85].map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm bg-primary/30"
          style={{ height: `${h}%` }}
        >
          <div
            className="w-full rounded-t-sm bg-primary"
            style={{ height: `${Math.min(h + 15, 100)}%` }}
          />
        </div>
      ))}
    </div>
  </div>
);

export default DashboardMockup;
