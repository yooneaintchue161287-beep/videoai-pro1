const videos = [
  {
    id: 1,
    name: "Sneaker Ad",
    model: "Cinematic Pro",
    date: "Jan 10, 2026",
    src: "/videos/sample1.mp4",
  },
  {
    id: 2,
    name: "Phone Launch",
    model: "Social Viral",
    date: "Jan 8, 2026",
    src: "/videos/sample2.mp4",
  },
];

export default function VideoHistory() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
      <h3 className="text-xl font-semibold mb-6">
        Generated Videos
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        {videos.map((v) => (
          <div
            key={v.id}
            className="border border-white/10 rounded-xl p-4"
          >
            <video
              src={v.src}
              className="rounded-lg mb-3"
              controls
            />

            <p className="font-medium">{v.name}</p>
            <p className="text-xs text-white/50">
              {v.model} • {v.date}
            </p>

            <button className="mt-3 w-full py-2 rounded-lg border border-white/20 hover:border-cyan-400 transition">
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
