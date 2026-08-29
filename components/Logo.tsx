import Image from "next/image";
import logo from "@/public/images/logo.jpg";

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
      placeholder="blur"
      preload={preload}
      sizes={sizes}
      className={className}
    />
  );
}
