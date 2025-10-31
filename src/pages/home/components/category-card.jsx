export const CategoryCard = ({ title, img }) => {
  return (
    <div className="relative overflow-hidden w-full">
      <img src={img} alt="img" className="w-full h-auto object-cover" />
      <h3 className="absolute inset-0 flex items-end justify-center text-white text-lg font-semibold mb-[17px]">
        {title}
      </h3>
    </div>
  );
};
