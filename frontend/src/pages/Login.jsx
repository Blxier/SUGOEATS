import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notifyError, notifySuccess } from "../components/Notification";
// Redux for Login successfull message
import { preMessage } from "../store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Login = () => {
  //Redux
  const premessage = useSelector((state) => state.message.value.mssg);
  const dispatch = useDispatch();
  //FOR LOGIN
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  //ON SUBMIT LOGIN BUTTON
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/auth/login", {
        username,
        password,
      });
      const responseData = response.data;
      const responseMessage = responseData.message;
      console.log(responseMessage); // Access the response data
      if (responseMessage == "The username or password is incorrect") {
        notifyError(responseMessage);
      } else {
        dispatch(preMessage({ mssg: responseMessage }));
        setCookies("access_token", response.data.token);
        window.localStorage.setItem("userID", response.data.userID);
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      console.log("ERROR!");
    }
  };

  useEffect(() => {
    if (premessage == "User Registered Sucessfully") {
      notifySuccess(premessage);
    }
  }, []);

  return (
    <div>
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
      <section className="mx-0 lg:mx-20">
        <form onSubmit={onSubmit}>
          {error && <div>{error}</div>}
          <div className="container px-5 py-24 mx-auto flex flex-wrap md:flex-wrap-reverse items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 cursor-default">
              <h1 className="title-font font-medium text-8xl">SUGO EATS</h1>
              <p className="leading-relaxed mt-4 text-xl">
                Delivering food to your comfort
              </p>
            </div>
            <div className="lg:w-2/6 md:w-1/2 bg-grayesh rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5"></h2>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="on"
                  required
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className="w-full bg-white rounded border border-white focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="password"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="off"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full bg-white rounded border border-white focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-primary border-0 py-2 px-8 focus:outline-none rounded text-lg hover:scale-105 duration-100"
              >
                Login
              </button>
              <p className="m-auto pt-2">OR</p>
              <button
                type="button"
                className="text-white bg-gmail border-0 py-2 px-8 focus:outline-none rounded text-lg hover:scale-105 duration-100 flex items-center justify-center gap-1"
              >
                <AiOutlineGoogle /> Sign in with Google
              </button>
              <p className=" text-gray-500 mt-3 underline cursor-pointer hover:font-semibold">
                Forget password?
              </p>
              <div className="border-b mt-5"></div>
              <Link
                to="/Register"
                className="text-white bg-black max-w-[200px] m-auto border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-2 hover:scale-105 duration-100"
              >
                Create Account
              </Link>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
