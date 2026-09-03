import Image from "next/image";
import logo from "@/public/images/logo.png";

type LogoProps = {
  className?: string;
  preload?: boolean;
  sizes?: string;
};

export default function Logo({
  className = "h-16 w-16",
  preload = false,
  sizes,
}: LogoProps) {
  return (
    <Image
      src={logo}
      alt="Little Cookie Cottage"
      preload={preload}
      sizes={sizes}
      className={className}
    />
  );
}
