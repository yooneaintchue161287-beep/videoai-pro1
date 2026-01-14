import VideoGeneratorForm from "@/components/generate/VideoGeneratorForm";
import ResultPreview from "@/components/generate/ResultPreview";

export default function GeneratePage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <VideoGeneratorForm />
        <ResultPreview />
      </div>
    </div>
  );
}
