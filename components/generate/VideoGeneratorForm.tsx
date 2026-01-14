"use client";

import UploadBox from "./UploadBox";
import ModelSelector from "./ModelSelector";
import VideoSettings from "./VideoSettings";
import PromptInput from "./PromptInput";

export default function VideoGeneratorForm() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 space-y-6">
      <h2 className="text-2xl font-semibold">
        Generate Product Video
      </h2>

      <UploadBox />
      <ModelSelector />
      <VideoSettings />
      <PromptInput />

      <button className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 font-semibold hover:opacity-90 transition">
        Generate Video
      </button>

      <p className="text-xs text-white/50 text-center">
        Video generation may take 1–3 minutes
      </p>
    </div>
  );
}
