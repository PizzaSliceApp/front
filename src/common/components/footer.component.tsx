export const Footer = () => {
  return (
    <footer className="flex flex-col bg-gray-900 text-white">
      <div className="border-b border-b-zinc-500 p-12 pb-9">
        <span className="text-zinc-500 uppercase inline-block mb-4 text-sm font-semibold">
          Contacts
        </span>
        <ul>
          <li className="text-sm text-gray-400 hover:text-gray-300 mb-2">
            <a href="tel:+351954789435">+351 954 789 435</a>
          </li>
          <li className="text-sm text-gray-400 hover:text-gray-300">
            <a href="mailto:info@pizzaslice.com">info@pizzaslice.com</a>
          </li>
        </ul>
      </div>

      <div className="px-12 py-9 text-xl font-bold">🍕 PizzaSlice</div>
    </footer>
  );
};
