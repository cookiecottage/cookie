import Image from "next/image";
import logo from "@/public/images/logo.png";

export default function BackgroundLogo() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center"
      aria-hidden="true"
    >
      <Image
        src={logo}
        alt=""
        sizes="(max-width: 768px) 75vmin, 38rem"
        className="h-[min(78vmin,38rem)] w-[min(78vmin,38rem)] bg-transparent object-contain opacity-40"
      />
    </div>
  );
}
