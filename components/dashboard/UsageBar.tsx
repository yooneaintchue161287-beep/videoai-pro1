export default function UsageBar() {
  const used = 12;
  const total = 30;
  const percent = (used / total) * 100;

  return (
    <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
      <p className="text-sm text-white/60">
        Monthly Usage
      </p>

      <div className="mt-4">
        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-600"
            style={{ width: `${percent}%` }}
          />
        </div>

        <p className="text-xs text-white/50 mt-2">
          {used} of {total} videos generated
        </p>
      </div>
    </div>
  );
}
