import pizzaImage from '../../../assets/images/2150702795.jpg';

export const MenuItemImage = () => {
  const imageAttribution = {
    link: 'https://www.freepik.com/free-ai-image/delicious-pizza-indoors_72560830.htm#query=pizza&position=6&from_view=search&track=sph',
    text: 'Image By freepik',
  };
  return (
    <div className="text-right relative">
      <img
        className="w-full h-60 object-center object-cover"
        src={pizzaImage}
        alt={imageAttribution.text}
      />
      <a
        className="text-xs pr-8 text-gray-300 absolute -bottom-6 right-0"
        target="new"
        href={imageAttribution.link}
      >
        {imageAttribution.text}
      </a>
    </div>
  );
};
