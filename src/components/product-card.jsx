import star from "../assets/books/star.svg";
import headphone from "../assets/books/headphone.svg";
import book from "../assets/books/book.svg";


export const ProductCard = ({ img, title, genre, rating, hasAudio }) => {
  return (
    <div className="w-60">
      <div>
        <img src={img} alt={title} className="rounded-2xl" />

        <h2 className="mt-[18px] mb-3 font-bold text-[20px] leading-[100%]">
          {title}
        </h2>

        <p className="text-[14px] leading-[100%] text-[#3F51B5] mb-4 uppercase">
          {genre}
        </p>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <img src={star} alt="star" />
            <span className="font-bold text-[18px] leading-[100%] text-[#FF7F4D]">
              {rating}
            </span>
          </div>
          <div>
            {hasAudio ? (
              <div className="flex gap-4">
                <img src={headphone} alt="" />
                <img src={book} alt="" />
              </div>
            ) : (
              <img src={headphone} alt="" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
