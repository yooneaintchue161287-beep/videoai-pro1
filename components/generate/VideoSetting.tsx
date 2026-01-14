export default function VideoSettings() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="text-sm text-white/70">
          Duration
        </label>
        <select className="mt-2 w-full rounded-lg bg-black border border-white/20 p-2">
          <option>5 seconds</option>
          <option>10 seconds</option>
          <option>15 seconds</option>
        </select>
      </div>

      <div>
        <label className="text-sm text-white/70">
          Aspect Ratio
        </label>
        <select className="mt-2 w-full rounded-lg bg-black border border-white/20 p-2">
          <option>1:1 (Instagram)</option>
          <option>9:16 (Reels/TikTok)</option>
          <option>16:9 (YouTube)</option>
        </select>
      </div>
    </div>
  );
}
