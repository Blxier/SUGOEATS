import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// Redux for registration successfull message
import { preMessage } from "../store";
import { useDispatch } from "react-redux";
import { notifyError, notifySuccess } from "../components/Notification";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  //FOR LOGIN
  const [username, setUsername] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [password, setPassword] = useState("");
  const [ispasswordmatch, setIspasswordmatch] = useState(true);

  //ON SUBMIT REGISTER BUTTON
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (password == confirmpassword) {
        const response = await axios.post(
          "http://localhost:5001/auth/register",
          {
            username,
            password,
          }
        );

        const responseData = response.data;
        const responseMessage = responseData.message;
        console.log(responseMessage); // Access the response data
        if (responseMessage == "User already exists") {
          notifyError("User already exists");
        } else {
          dispatch(preMessage({ mssg: responseMessage }));
          navigate("/Login");
        }
      } else {
        setIspasswordmatch(false);

        toast.error("Password Doesn't Match", {
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
    } catch (err) {
      console.error(err);
      console.log("ERROR!");
    }
  };
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
          <div className="container px-5 py-24 mx-auto flex flex-wrap md:flex-wrap-reverse items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 cursor-default">
              <h1 className="title-font font-medium text-8xl">REGISTER</h1>
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
                  className={
                    ispasswordmatch
                      ? "w-full bg-white rounded border border-white focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      : "w-full bg-white rounded border border-red focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  }
                />
                <label
                  htmlFor="password"
                  className="leading-7 text-sm text-gray-600"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmpassword"
                  name="confirmpassword"
                  autoComplete="off"
                  required
                  value={confirmpassword}
                  onChange={(event) => setConfirmpassword(event.target.value)}
                  className={
                    ispasswordmatch
                      ? "w-full bg-white rounded border border-white focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      : "w-full bg-white rounded border border-red focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  }
                />
              </div>
              <button
                type="submit"
                className="text-white bg-primary border-0 py-2 px-8 focus:outline-none rounded text-lg hover:scale-105 duration-100"
              >
                Register
              </button>
              <Link
                to="/Login"
                className=" text-gray-500 mt-3 underline cursor-pointer hover:font-semibold"
              >
                Already have an account?
              </Link>
              <div className="border-b mt-5"></div>

              <button className="mt-5 text-white bg-gmail border-0 py-2 px-8 focus:outline-none rounded text-lg hover:scale-105 duration-100 flex items-center justify-center gap-1">
                <AiOutlineGoogle /> Sign up with Google
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Register;
