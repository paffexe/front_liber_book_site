import girl from "../assets/aaaaa/sis2.png";

import arrowDown from "../assets/arrowDown.svg";

const Profile = () => {
  return (
    <div className="w-[966px] bg-[#ff7f4d] h-[175px] rounded-[11px] h-">
      <div className="flex justify-between ">
        <div className="w-[340px] pl-8 pt-8 font-bold text-[26px] leading-[31.87px] tracking-[0%] text-white">
          <h2>Узингиз севган булимга обуна бўлинг</h2>
        </div>
        <img src={girl} alt="" />
      </div>
      <div className="mt-[22px] flex gap-[172px] shadow-lg rounded-2xl bg-white pb-[121px] ">
        <div className="w-[343px]  ml-8 mt-8">
          <h3 className="font-bold text-[30px] leading-10 text-[#11142D] mb-7.5">
            Обуна
          </h3>
          <div className="mb-6">
            <label className="block text-gray-900 font-medium mb-1.5">
              Обуна давом этиш вакти
            </label>
            <div className="flex relative items-center">
              <select className="w-full px-4 py-3 bg-gray-50 text-gray-400 border border-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>30 кун</option>
                <option>60 кун</option>
                <option>90 кун</option>
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                <img src={arrowDown} alt="arrow" />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-900 font-medium mb-1.5">
              Булимни танланг
            </label>
            <div className="flex relative items-center">
              <select className="w-full px-4 py-3 bg-gray-50 text-gray-400 border border-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Фантастика</option>
                <option>Фантастика</option>
                <option>Фантастика</option>
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                <img src={arrowDown} alt="arrow" />
              </div>
            </div>
          </div>
          <h3 className=" font-bold text-[20px] leading-10 text-[#11142D] mb-7.5 ">
            Обуна 30 кун давом этади
          </h3>
        </div>
        <div className="w-[368px] flex flex-row mt-8">
          <div>
            <div className="mt-[74px] w-[368px] h-[135px] bg-[#F5F5F5]">
              <div className="flex justify-between pt-4  pl-[15px] pr-[9px] ">
                <p className="font-medium text-[14px] leading-5 tracking-[0.1px]">
                  Бошланиш вакти
                </p>
                <p className="font-bold text-[14px] leading-5 tracking-[0.1px]">
                  12/09/2021
                </p>
              </div>
              <div className="flex justify-between pt-4  pl-[15px] pr-[9px] ">
                <p className="font-medium text-[14px] leading-5 tracking-[0.1px]">
                  Якунланиш вакти
                </p>
                <p className="font-bold text-[14px] leading-5 tracking-[0.1px]">
                  12/10/2021
                </p>
              </div>
              <div className="flex justify-between pt-4  pl-[15px] pr-[9px] ">
                <p className="font-medium text-[14px] leading-5 tracking-[0.1px]">
                  Обуна нархи
                </p>
                <p className="font-bold text-[14px] text-primary leading-5 tracking-[0.1px]">
                  12 000 сум
                </p>
              </div>
            </div>

            <button className=" w-full mt-[34px] bg-primary text-white flex items-center justify-center gap-3 py-3 px-6 rounded-[14px] cursor-pointer">
              <p>Обуна булиш</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
