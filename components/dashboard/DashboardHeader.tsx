export default function DashboardHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4">
      <div>
        <h1 className="text-3xl font-semibold">
          Dashboard
        </h1>
        <p className="text-white/60">
          Manage your videos and credits
        </p>
      </div>

      <a
        href="/pricing"
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 font-semibold hover:opacity-90"
      >
        Upgrade Plan
      </a>
    </div>
  );
}
