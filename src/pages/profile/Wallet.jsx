import coin from "../../assets/profile/coin.svg";
import click from "../../assets/profile/click.svg";
import payme from "../../assets/profile/payme.svg";

const Wallet = () => {
  return (
    <div className="w-[966px] rounded-sm pl-8 pt-8 shadow-lg ">
      <h3 className="font-bold text-[30px] leading-10 text-[#11142D] mb-[31px] ">
        Э-Хисоб
      </h3>
      <div className="w-[906px] bg-primary rounded-[20px] text-white pt-4 pl-[26px]  flex justify-between mb-9">
        <div>
          <p className="mb-3">Баланс</p>
          <strong className="font-bold text-2xl leading-6">45 000 сўм</strong>
        </div>
        <img src={coin} alt="" className="w-20" />
      </div>
      <div className="w-[906px]  rounded-[20px] text-white pt-4 pl-[26px] border border-[#EDEDED] shadow-sm py-[22px] flex justify-center mb-9">
        <img src={click} alt="" className="w-[60px]" />
      </div>
      <div className="w-[906px]  rounded-[20px] text-white pt-4 pl-[26px] border border-[#EDEDED] shadow-sm py-[22px] flex justify-center mb-[76px]">
        <img src={payme} alt="" className="w-[60px]" />
      </div>
    </div>
  );
};

export default Wallet;
