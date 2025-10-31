import hero from "../../../assets/hero/hero.png";
import books from "../../../data/products2";
import arrowRight from "../../../assets/hero/arrowright.svg";
import arrowLeft from "../../../assets/hero/arrowleft.svg";
import heart from "../../../assets/hero/heart.svg";

export const Banner = () => {
  return (
    <section className="pt-4 pb-14">
      <div className="container">
        <div className="flex gap-6">
          <div className="grow bg-primary-soft flex items-center gap-12 relative rounded-2xl">
            <div className="w-[287px] flex-col h-full flex justify-end gap-4">
              <h2 className="font-bold text-[24px] leading-[100%] text-center text-main ">
                Кўп ўқилаётганлар
              </h2>
              <img src={hero} alt="" />
            </div>
            <img
              src={arrowRight}
              alt="arrow right"
              className="w-8 absolute left-[29%] cursor-pointer"
            />
            <img
              src={arrowLeft}
              alt="arrow left"
              className="w-8 absolute right-[2%] cursor-pointer"
            ></img>
            <div className="flex gap-4">
              {books.slice(0, 3).map((item) => (
                <div>
                  <img src={item.img} alt="" className="w-[190px]" />
                  <h2 className="text-center mt-4 text-main uppercase">
                    {item.title}
                  </h2>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[261px] h-[351px] bg-primary bg-my-image bg-cover bg-center text-center flex flex-col items-center justify-center text-white rounded-2xl">
            <h3 className="font-bold text-[24px] leading-8 mx-6 mb-5 ">
              Китоб ўқишни ёқтирасизми?
            </h3>
            <p className="font-normal text-[18px] leading-6  mx-6 mb-[77px]">
              Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг
            </p>
            <button className="w-[210px] bg-white text-black rounded-[14px] font-bold text-[18px] leading-[100%] align-middle flex items-center justify-center gap-3 py-3 px-6">
              <img src={heart} alt="heart icon" className="w-6 " />
              Обуна бўлиш
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
