const Books = () => {
  return (
    <div className="w-[966px] rounded-sm pl-8 pt-8 shadow-lg ">
      <h3 className="font-bold text-[30px] leading-10 text-[#11142D] mb-[50px] ">
        Китобларим
      </h3>
      <div className="flex gap-[50px]">
        <div className="flex gap-[30px] w-[353px] pb-[125px]">
          <img src={img} alt="" className="w-[139px]" />
          <div>
            <h3 className=" mt-4 text-[#11142D] font-medium text-[18px] mb-2">
              Элжернга аталган гуллар
            </h3>
            <p className="uppercase font-[400px] text-[14px] text-primary mb-2 ">
              SIYOSAT, FANTASTIKA
            </p>
            <div className="flex gap-2.5  mb-5">
              <img src={star} alt="" />
              <p className="font-medium text-[#FF754C] text-[18px]">4.7</p>
              <p className="font-[500px] text-[18px] text-[#AAAAAA]">
                244 фиклар
              </p>
            </div>
            <p className="text-[#FF754C] text-[14px]">Ўчириш</p>
          </div>
        </div>
        <div className="flex gap-[30px] w-[353px] pb-[125px]">
          <img src={img} alt="" className="w-[139px]" />
          <div>
            <h3 className=" mt-4 text-[#11142D] font-medium text-[18px] mb-2">
              Элжернга аталган гуллар
            </h3>
            <p className="uppercase font-[400px] text-[14px] text-primary mb-2 ">
              SIYOSAT, FANTASTIKA
            </p>
            <div className="flex gap-2.5  mb-5">
              <img src={star} alt="" />
              <p className="font-medium text-[#FF754C] text-[18px]">4.7</p>
              <p className="font-[500px] text-[18px] text-[#AAAAAA]">
                244 фиклар
              </p>
            </div>
            <p className="text-[#FF754C] text-[14px]">Ўчириш</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
