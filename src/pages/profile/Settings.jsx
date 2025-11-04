import account from "../../assets/profile/account.svg";

const Settings = () => {
  return (
    <div className="w-[966px] rounded-sm pl-8 pt-8 shadow-lg ">
      <h3 className="font-bold text-[30px] leading-10 text-[#11142D] mb-[47px] ">
        Созламалар
      </h3>
      <div className="flex items-center gap-5 mb-[45px]">
        <img src={account} alt="" className="w-16" />

        <p className="font-medium text-base leading-normal tracking-normal text-primary">
          Сурат юклаш
        </p>
      </div>
      <div className="w-[343px] pb-[47px]">
        <p className="mb-1 font-medium text-[14px] leading-5">Исмингиз</p>
        <div className=" border border-[#EDEDED] rounded-2xl py-3 pl-3 flex gap-2">
          <input
            type="text"
            className="w-[380px] h-full outline-none text-[#9A9A9A] "
            placeholder="Исмингиз"
          />
        </div>
        <button className=" w-full mt-[65px] bg-primary text-white flex items-center justify-center gap-3 py-3 px-6 rounded-[14px] cursor-pointer">
          <p>Сақлаш</p>
        </button>
      </div>
    </div>
  );
};

export default Settings;
