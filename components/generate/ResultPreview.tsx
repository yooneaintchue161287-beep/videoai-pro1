export default function ResultPreview() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 flex flex-col justify-center items-center">
      <p className="text-white/60 mb-4">
        Generated video preview
      </p>

      <div className="w-full aspect-video rounded-xl border border-white/20 flex items-center justify-center text-white/30">
        Video will appear here
      </div>

      <button className="mt-6 px-6 py-2 rounded-lg border border-white/20 hover:border-cyan-400 transition">
        Download Video
      </button>
    </div>
  );
}
