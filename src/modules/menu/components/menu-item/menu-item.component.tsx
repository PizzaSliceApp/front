import { FC } from 'react';

import image from '../../../../assets/images/pizza.jpg';
import { MenuItemImage } from './menu-item-image.component';

interface MenuItemProps {
  id: number;
  imagePath: string;
  imageAttributionText?: string;
  imageAttributionLink?: string;
  title: string;
  ingredients: string;
  price: number;
  weight: number;
}

export const MenuItem: FC<MenuItemProps> = ({
  title,
  ingredients,
  price,
  weight,
}) => {
  const imageAttribution = {
    link: 'https://www.freepik.com/free-ai-image/delicious-pizza-indoors_72560830.htm#query=pizza&position=6&from_view=search&track=sph',
    text: 'Image By freepik',
  };

  return (
    <article className="w-full max-w-sm overflow-hidden rounded-md shadow-lg">
      <MenuItemImage
        imagePath={image}
        imageAttributionLink={imageAttribution.link}
        imageAttributionText={imageAttribution.text}
      />
      <div className="p-8">
        <h4 className="mb-2 font-semibold text-lg">{title}</h4>
        <p className="mb-8 text-sm">{ingredients}</p>
        <div className="flex justify-between items-baseline">
          <span className="font-bold text-lg bg-orange-100 px-1.5 py-1 rounded-md">
            {price} €
          </span>
          <div className="bg-green-100 px-1.5 py-1 rounded-md text-sm">
            {weight} g
          </div>
        </div>
      </div>
    </article>
  );
};
