import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
const Login = () => {
  const [isemailon, setisemailOn] = useState(false);
  const [ispasson, setispassOn] = useState(false);

  const handleEmailChange = (event) => {
    setisemailOn(event.target.value !== "");
  };

  const handlePasswordChange = (event) => {
    setispassOn(event.target.value !== "");
  };

  return (
    <div>
      <section className="mx-0 lg:mx-20">
        <form>
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
                  onChange={handleEmailChange}
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
                  onChange={handlePasswordChange}
                  className="w-full bg-white rounded border border-white focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                type="submit"
                className={
                  isemailon & ispasson
                    ? "text-white bg-primary border-0 py-2 px-8 focus:outline-none rounded text-lg hover:scale-105 duration-100"
                    : "text-black bg-secondary border-0 py-2 px-8 focus:outline-none rounded text-lg cursor-auto"
                }
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

export default Login;
