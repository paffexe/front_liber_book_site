import account from "../../assets/accaunt.svg";
import lang from "../../assets/lang.svg";

const Options = () => {
  return (
    <div className="w-[276px] h-[52px]  flex gap-5 items-center justify-between">
      <div className="w-[105px] bg-primary-soft py-3 px-6 rounded-[14px] cursor-pointer">
        <img src={lang} alt="" />
      </div>
      <div className="w-[151px] bg-primary text-white flex items-center justify-center gap-3 py-3 px-6 rounded-[14px] cursor-pointer">
        <img src={account} alt="" width={"24px"} />
        <p>Кириш</p>
      </div>
    </div>
  );
};

export default Options;
