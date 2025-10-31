import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { SearchBar } from "./search-bar";
import { Navbar } from "./navbar";
import Options from "./options";

export const Header = () => {
  return (
    <div>
      <header className="py-[21px]">
        <div className="container flex justify-between gap-5 items-center">
          <div className="flex gap-[46px] grow">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
            <SearchBar />
          </div>
          <Options />
        </div>
      </header>
      <Navbar />
    </div>
  );
};
