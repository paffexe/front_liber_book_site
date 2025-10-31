import { Banner } from "./components/banner";
import { Spark } from "../../assets/icons/spark";
import { categoryData } from "../../data/data";
import { CategoryCard } from "./components/category-card";
import { ProductWrapper } from "./components/product-wrapper";
import Like from "../../assets/icons/Like";
import Like2 from "../../assets/icons/Like2";
import Star from "../../assets/icons/Star";

export const Home = () => {
  return (
    <>
      <Banner />
      <section>
        <div className="container">
          <div className="flex justify-between">
            <div className="flex w-[322px]  items-center gap-[19px]">
              <div className=" bg-primary-soft rounded-[11px] flex items-center justify-center p-3 ">
                <Spark />
              </div>
              <div className=" py-[26px] flex-col">
                <h3 className="font-bold text-[15.93px] leading-[19.11px] mb-[7px]">
                  Тезкор етказиш
                </h3>
                <p className="font-normal text-[11.15px] leading-[100%] text-gray01 w-[212px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="flex w-[322px]  items-center gap-[19px]">
              <div className=" bg-primary-soft rounded-[11px] flex items-center justify-center p-3 ">
                <Like />
              </div>
              <div className=" py-[26px] flex-col">
                <h3 className="font-bold text-[15.93px] leading-[19.11px] mb-[7px]">
                  Тезкор етказиш
                </h3>
                <p className="font-normal text-[11.15px] leading-[100%] text-gray01 w-[212px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="flex w-[322px]  items-center gap-[19px]">
              <div className=" bg-primary-soft rounded-[11px] flex items-center justify-center p-3 ">
                <Like2 />
              </div>
              <div className=" py-[26px] flex-col">
                <h3 className="font-bold text-[15.93px] leading-[19.11px] mb-[7px]">
                  Тезкор етказиш
                </h3>
                <p className="font-normal text-[11.15px] leading-[100%] text-gray01 w-[212px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="flex w-[322px]  items-center gap-[19px]">
              <div className=" bg-primary-soft rounded-[11px] flex items-center justify-center p-3 ">
                <Star />
              </div>
              <div className=" py-[26px] flex-col">
                <h3 className="font-bold text-[15.93px] leading-[19.11px] mb-[7px]">
                  Тезкор етказиш
                </h3>
                <p className="font-normal text-[11.15px] leading-[100%] text-gray01 w-[212px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 mb-[62px]">
        <div className="container">
          <h2 className="mb-8 text-[32px] leading-10">Рукнлар</h2>
          <div className="grid grid-cols-6 gap-4  ">
            {categoryData.map((item) => (
              <CategoryCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className="mb-[65px]">
        <div className="container">
          <h2 className="mb-8 text-[32px] leading-10">Янги қўшилганлар</h2>
          <ProductWrapper path={"new-books"} />
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="mb-8 text-[32px] leading-10">Аудио китоблар</h2>

          <ProductWrapper path={"audio-books"} />
        </div>
      </section>
    </>
  );
};
