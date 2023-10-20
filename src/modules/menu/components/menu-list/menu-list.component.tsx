import { FC } from 'react';

import { Pizza } from '@modules/menu/types/pizza';

import { MenuItem } from '../menu-item/menu-item.component';

interface MenuListProps {
  items: Pizza[];
}

export const MenuList: FC<MenuListProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {items.map(({ image, ...pizza }) => (
        <MenuItem key={pizza.id} imagePath={image} {...pizza} />
      ))}
    </div>
  );
};
