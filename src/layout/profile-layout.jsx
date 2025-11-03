import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import girl from "../assets/profile/girl.png";
import obuna from "../assets/profile/obuna.svg";
import hisob from "../assets/profile/hisob.svg";
import kitob from "../assets/profile/kitoblarim.svg";
import fav from "../assets/profile/fav.svg";
import settings from "../assets/profile/settings.svg";
import moon from "../assets/profile/moon.svg";

const ProfileLayout = () => {
  return (
    <div className="container">
      <div className=" mt-[52px]">
        <div className="shadow-lg rounded-sm bg-white mb-[60px]">
          <div className="flex items-center p-6 gap-[33px]">
            <div className="w-[163px]">
              <img src={girl} alt="" className="rounded-full" />
            </div>
            <div className="h-full">
              <h2 className="font-bold text-[30px] leading-10 mb-2.5 tracking-[0%]">
                Суғдиёна Икромова
              </h2>
              <p className="font-medium text-[20px] leading-10 mb-2.5 tracking-[0%]">
                +998 90 253 77 53
              </p>
              <p className="font-medium text-[20px] leading-6 tracking-[0%] text-[#9A9A9A]">
                ID: 0001 Баланс: 45 000 сўм
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-9">
        <div className="flex gap-[7px] flex-col w-[288px] border border-blue-400 px-6 pt-7 pb-12">
          <NavLink
            to={"/profile"}
            className={({ isActive }) =>
              `flex gap-4 text-[18px] leading-10 tracking-[0%] text-primary ${
                isActive
                  ? "border-blue-500 font-bold pl-2 border-l-[5px] "
                  : "border-transparent font-normal"
              }`
            }
          >
            <img src={obuna} alt="" className="w-6" />
            <p>Обуна бўлиш</p>
          </NavLink>
          <NavLink
            to={"wallet"}
            className={({ isActive }) =>
              `flex gap-4 text-[18px] leading-10 tracking-[0%] text-primary ${
                isActive ? "font-bold" : "font-normal"
              }`
            }
          >
            <img src={hisob} alt="" className="w-6" />
            Э-Хисоб
          </NavLink>
          <NavLink
            to={"my-books"}
            className={({ isActive }) =>
              `flex gap-4 text-[18px] leading-10 tracking-[0%] text-primary ${
                isActive ? "font-bold" : "font-normal"
              }`
            }
          >
            <img src={kitob} alt="" className="w-6" />
            Китобларим
          </NavLink>
          <NavLink
            to={"wishlist"}
            className={({ isActive }) =>
              `flex gap-4 text-[18px] leading-10 tracking-[0%] text-primary ${
                isActive ? "font-bold" : "font-normal"
              }`
            }
          >
            <img src={fav} alt="" className="w-6" />
            Сақланганлар
          </NavLink>
          <NavLink
            to={"settings"}
            className={({ isActive }) =>
              `flex gap-4 text-[18px] leading-10 tracking-[0%] text-primary ${
                isActive ? "font-bold" : "font-normal"
              }`
            }
          >
            <img src={settings} alt="" className="w-6" />
            Созламалар
          </NavLink>
          <div className="flex gap-4">
            <img src={moon} alt="" className="w-6" />
            <p className="text-[18px] leading-10 tracking-[0%] text-primary">
              Тунги режим
            </p>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;
