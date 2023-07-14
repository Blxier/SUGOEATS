import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import sogologo from "../assets/images/SUGOLOGO.png";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookie("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/");
  };
  return (
    <div className="flex justify-between items-center">
      <div>
        <img src={sogologo} alt="logo" className="md:w-[200px] sm:w-[100px]" />
      </div>
      <div className="flex space-x-5 items-center">
        <div>
          <AiOutlineShoppingCart className="cursor-pointer text-xl md:text-2xl" />
        </div>

        {!cookies.access_token ? (
          <Link
            to="/Login"
            className="md:text-lg sm:text-xs bg-primary text-white p-2 cursor-pointer hover:bg-blue duration-150 "
          >
            Login/Sign Up
          </Link>
        ) : (
          <button onClick={logout} className="bg-primary text-white p-2">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
