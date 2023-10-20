import { MenuItemImage } from './menu-item-image.component';

export const MenuItem = () => {
  return (
    <article className="max-w-sm overflow-hidden rounded-md shadow-lg">
      <MenuItemImage />
      <div className="p-8">
        <h4 className="mb-2 font-bold text-lg">Піца Мангеттен</h4>
        <p className="mb-8 text-sm">
          (подвійна порція грибів), Гриби, Моцарела, Пепероні, Соус Альфредо
        </p>
        <div className="flex justify-between items-baseline">
          <span className="font-bold text-lg bg-orange-100 px-1.5 py-1 rounded-md">
            215 грн
          </span>
          <div className="bg-green-100 px-1.5 py-1 rounded-md text-sm">
            555 г
          </div>
        </div>
      </div>
    </article>
  );
};
