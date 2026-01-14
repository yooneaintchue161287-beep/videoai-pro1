import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(req: Request) {
  const body = await req.json();

  const output = await replicate.run(
    "stability-ai/stable-video-diffusion",
    {
      input: {
        input_image: body.image,
        motion_bucket_id: 127,
        fps: 6,
      },
    }
  );

  return Response.json({ videoUrl: output[0] });
}
