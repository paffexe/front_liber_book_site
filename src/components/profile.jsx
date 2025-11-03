import girl from "../assets/aaaaa/sis2.png";

const Profile = () => {
  return (
    <div className="w-[966px] bg-[#ff7f4d] h-[175px] rounded-[11px]">
      <div className="flex justify-between ">
        <div className="w-[340px] pl-8 pt-8 font-bold text-[26px] leading-[31.87px] tracking-[0%] text-white">
          <h2>Узингиз севган булимга обуна бўлинг</h2>
        </div>
        <img src={girl} alt="" />
      </div>
    </div>
  );
};

export default Profile;
