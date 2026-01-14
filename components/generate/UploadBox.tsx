export default function UploadBox() {
  return (
    <div className="border border-dashed border-white/20 rounded-xl p-6 text-center hover:border-cyan-400 transition">
      <p className="text-sm text-white/70">
        Upload your product image
      </p>
      <p className="text-xs text-white/40 mt-1">
        PNG, JPG, WEBP (max 10MB)
      </p>

      <input
        type="file"
        accept="image/*"
        className="mt-4 block w-full text-sm"
      />
    </div>
  );
}
