import pizzaMenu from '@app/mocks/pizza.json';

import { MenuList } from '@modules/menu/components/menu-list/menu-list.component';

import { Header } from '@common/components/header.components';

export const App = () => {
  return (
    <>
      <Header />

      <MenuList items={pizzaMenu} />
    </>
  );
};
