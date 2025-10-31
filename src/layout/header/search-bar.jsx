import catIcon from "../../assets/category.svg";
import arrowDown from "../../assets/arrowDown.svg";
import search from "../../assets/search.svg";

export const SearchBar = () => {
  return (
    <div className="border max-w-[739px] h-12 grow flex gap-1 rounded-[14px] bg-gray02 ">
      <div className="w-[180px] border-r border-gray02 flex items-center justify-center gap-3  ">
        <img src={catIcon} alt="" className="w-6" />
        <p className="text-primary">Ruknlar</p>
        <img src={arrowDown} alt="" />
      </div>
      <div className=" w-[484px] flex items-center pl-7 ">
        <input
          type="text"
          className="w-full text-gray01 broder-none focus:outline-none"
          placeholder="Қидириш"
        />
      </div>
      <div className="flex items-center justify-center pl-5 border-l border-gray02 cursor-pointer">
        <img src={search} alt="" className="w-6 " />
      </div>
    </div>
  );
};
