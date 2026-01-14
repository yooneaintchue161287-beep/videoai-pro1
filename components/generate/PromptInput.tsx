export default function PromptInput() {
  return (
    <div>
      <label className="text-sm text-white/70">
        Prompt (optional)
      </label>
      <textarea
        placeholder="Luxury product shot with soft lighting and cinematic movement..."
        className="mt-2 w-full h-24 rounded-lg bg-black border border-white/20 p-3 text-sm"
      />
    </div>
  );
}
