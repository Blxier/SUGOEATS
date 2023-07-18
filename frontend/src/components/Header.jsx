import React, { useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import sogologo from "../assets/images/SUGOLOGO.png";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { notifySuccess } from "./Notification";
const Header = () => {
  const premessage = useSelector((state) => state.message.value.mssg);
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const logout = () => {
    setCookie("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/");
    notifySuccess("Logout Successfull");
  };

  useEffect(() => {
    if (premessage == "Welcome User!") {
      toast.success("Welcome User!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }, []);

  return (
    <div className="flex justify-between items-center">
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
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
