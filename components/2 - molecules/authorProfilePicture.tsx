import { FastAverageColor } from "fast-average-color";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Author } from "./testimonials-section";

interface ProfilePictureProps {
  author: Author;
}

const DEFAULT_AVATAR_BORDER = "rgba(0, 0, 0, 0.4)";

export const ProfilePicture = ({ author }: ProfilePictureProps) => {
  const [shadowColor, setShadowColor] = useState(DEFAULT_AVATAR_BORDER);
  const imageRef = useRef(null);
  const fac = new FastAverageColor();

  useEffect(() => {
    if (imageRef.current) {
      fac
        .getColorAsync(imageRef.current)
        .then((color) => {
          setShadowColor(color.rgba);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, [imageRef]);
  return (
    <Image
      src={`https://metadata.ens.domains/mainnet/avatar/${author.ensName}`}
      alt={author.ensName}
      width={60}
      height={60}
      className="w-[60px] h-[60px] rounded-[8px] bg-white"
      priority={true}
      ref={imageRef}
      style={{
        borderWidth: "1px",
        borderColor: shadowColor,
      }}
    />
  );
};
