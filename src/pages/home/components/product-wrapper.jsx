import { ProductCard } from "../../../components/product-card";
import audioBooks from "../../../data/products2";
import newBooks from "../../../data/products";

export const ProductWrapper = ({ path }) => {
  let dataToRender = [];

  switch (path) {
    case "new-books":
      dataToRender = newBooks;
      break;
    case "audio-books":
      dataToRender = audioBooks;
      break;
    default: 
      dataToRender = newBooks
  }
  return (
    <div className="grid grid-cols-5 gap-6">
      {dataToRender.map((item) => (
        <ProductCard
          key={item.id}
          img={item.img}
          title={item.title}
          genre={item.genre}
          rating={item.rating}
          id={item.id}
          hasAudio={item.hasAudio}
        />
      ))}
    </div>
  );
};
