import { Header } from '@common/components/header.components';
import { MenuItem } from '@modules/menu/menu-item/menu-item.component';

export const App = () => {
  return (
    <>
      <Header />
      <h1 className="">🍕 Pizza</h1>
      <MenuItem />
    </>
  );
};
