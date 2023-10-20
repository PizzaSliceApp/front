import { MenuItem } from '../menu-item/menu-item.component';
import pizzaMenu from '@app/mocks/pizza.json';

export const MenuList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {pizzaMenu.map(({ image, ...pizza }) => (
        <MenuItem key={pizza.id} imagePath={image} {...pizza} />
      ))}
    </div>
  );
};
