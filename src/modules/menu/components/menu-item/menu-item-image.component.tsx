import { FC } from 'react';

interface MenuItemImageProps {
  imagePath: string;
  imageAttributionLink: string;
  imageAttributionText: string;
}

export const MenuItemImage: FC<MenuItemImageProps> = ({
  imagePath,
  imageAttributionLink,
  imageAttributionText,
}) => {
  return (
    <div className="text-right relative">
      <img
        className="w-full h-60 object-center object-cover"
        src={imagePath}
        alt={imageAttributionText}
      />
      <a
        className="text-xs pr-8 text-gray-300 absolute -bottom-6 right-0"
        target="new"
        href={imageAttributionLink}
      >
        {imageAttributionText}
      </a>
    </div>
  );
};
