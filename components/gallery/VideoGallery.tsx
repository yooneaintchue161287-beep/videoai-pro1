const videos = [
  { src: "/videos/shoe.mp4", model: "Cinematic Pro" },
  { src: "/videos/phone.mp4", model: "Social Viral" },
];

export default function VideoGallery() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {videos.map((v, i) => (
        <video
          key={i}
          src={v.src}
          autoPlay
          muted
          loop
          className="rounded-xl border border-white/10"
        />
      ))}
    </div>
  );
}
