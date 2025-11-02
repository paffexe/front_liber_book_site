import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import book from "../../assets/books/book.svg";
import headphone from "../../assets/books/headphone.svg";
import star from "../../assets/books/star.svg";
import comment from "../../assets/books/comment.svg";

import product1 from "../../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const foundProduct = product1.find((item) => item.id === Number(id));
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  return (
    <div className="container">
      {product ? (
        <div className="flex gap-6 mt-4">
          <div className="w-[300px] ">
            <img
              src={product.img}
              alt="img"
              className="h-full object-cover rounded-2xl"
            />
          </div>
          <div className="w-full border-b border-dashed">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl">{product.title}</h2>
              <div className="flex items-center gap-2">
                <div className="flex gap-4">
                  <img src={headphone} alt="" />
                  <img src={book} alt="" />
                </div>

                <div className="flex ga-2  font-bold text-[24px] leading-[100%] tracking-[0%] text-right mr-[47px] ml-[29px]">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <span className="ml-[22px]">4.0</span>
                </div>
                <div className="flex gap-3 ">
                  <img src={comment} alt="" />
                  <p> 235 Фикрлар</p>
                </div>
              </div>
            </div>
            <div className="text-primary mt-3 mb-4">
              <p className="text-2xl">{product.genre}</p>
            </div>
            <div className="text-[14px] leading-6 mb-4 tracking-[0%]">
              <p className="text-lg">{product.description}</p>
            </div>
            <div className="flex gap-[69px]">
              <div>
                <p className="text-gray01 text-[14px] leading-[100%] tracking-[0%] mb-2">
                  Муаллиф
                </p>
                <p className="font-semibold text-[18px] leading-[100%] tracking-[0%] text-dark-purple">
                  {product.author}
                </p>
              </div>
              <div>
                <p className="text-gray01 text-[14px] leading-[100%] tracking-[0%] mb-2">
                  Нашриёт
                </p>
                <p className="font-semibold text-[18px] leading-[100%] tracking-[0%] text-dark-purple">
                  {product.year}
                </p>
              </div>
              <div>
                <p className="text-gray01 text-[14px] leading-[100%] tracking-[0%] mb-2">
                  Йил
                </p>
                <p className="font-semibold text-[18px] leading-[100%] tracking-[0%] text-dark-purple">
                  {product.publisher}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetail;
