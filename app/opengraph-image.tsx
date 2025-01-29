import { createOpenGraphImage } from "@/lib/opengraph";
import { Logo } from "@/components/brand/logo";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const runtime = "edge";
export const alt = "Flixa - با PDFها گپ بزن!";

export default async function Image() {
  return createOpenGraphImage({
    logo: <Logo size={80} />,
    title: "Flixa",
    line1: "فایلهات رو به AI بده",
    line2: "و درباره اونا با AI گپ بزن!",
  });
}
