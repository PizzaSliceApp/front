import pizzaMenu from '@app/mocks/pizza.json';

import { MenuList } from '@modules/menu/components/menu-list/menu-list.component';

import { Footer } from '@common/components/footer.component';
import { Header } from '@common/components/header.component';

export const App = () => {
  return (
    <>
      <Header />

      <main className="mt-12 mb-24 mx-10">
        <MenuList items={pizzaMenu} />
      </main>

      <Footer />
    </>
  );
};
