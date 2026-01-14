const models = [
  "Cinematic Pro",
  "Product Showcase",
  "Social Viral",
  "Luxury Ad",
  "UGC Style",
  "E-commerce Clean",
];

export default function ModelSelector() {
  return (
    <div>
      <label className="text-sm text-white/70">
        AI Model
      </label>
      <select className="mt-2 w-full rounded-lg bg-black border border-white/20 p-2">
        {models.map((m) => (
          <option key={m}>{m}</option>
        ))}
      </select>
    </div>
  );
}
