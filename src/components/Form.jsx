import React from "react";

function Form() {
  return (
    <div className="bg-white p-20  rounded-3xl border-1 border-gray-200">
      <h1 className=" text-4xl font-semibold ">Welcome Back</h1>
      <p className=" font-medium text-lg text-gray-500 mt-4 ">
        Welcome back! Please enter your details
      </p>
      <form action="" className="mt-8 ">
        <div className=" mt-2 ">
          <label className="text-lg font-medium">Email</label>
          <input
            type="email"
            placeholder="Email Address"
            className=" w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
          />
        </div>
        <div className="mt-2">
          <label className="text-lg font-medium">Password</label>
          <input
            type="password"
            placeholder="Password"
            className=" w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
          />
        </div>
        <div className="mt-5 lg:flex justify-between items-center">
          <div>
            <input type="checkbox" id="remmember" />
            <label className=" ml-2 font-medium text-base" for="remmember">
              Remember me
            </label>
          </div>
          <button className=" font-medium text-base text-violet-500">
            Forgot password?
          </button>
        </div>
        <div className=" mt-6  flex flex-col gap-y-4">
          <button className="bg-violet-500 text-white text-lg font-bold py-2 rounded-xl active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">
            Sign in
          </button>
          <button className="flex border-2 rounded-xl border-gray-100 py-2 items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m5.2662 9.7645c0.93259-2.8259 3.5882-4.8554 6.7338-4.8554 1.6909 0 3.2182 0.6 4.4182 1.5818l3.4909-3.4909c-2.1273-1.8545-4.8545-3-7.9091-3-4.7299 0-8.8023 2.6983-10.76 6.65l4.0262 3.1145z"
                fill="#EA4335 "
              />
              <path
                d="m16.041 18.013c-1.0898 0.70371-2.4746 1.0783-4.0407 1.0783-3.1335 0-5.7809-2.014-6.723-4.823l-4.0395 3.0671c1.9553 3.9586 6.0275 6.665 10.763 6.665 2.9328 0 5.7353-1.0426 7.8342-3.0004l-3.7935-2.987z"
                fill="#34A853"
              />
              <path
                d="m19.834 21c2.195-2.0475 3.6204-5.0959 3.6204-8.9996 0-0.70909-0.10909-1.4727-0.27273-2.1818h-11.182v4.6364h6.4364c-0.31759 1.5591-1.1701 2.7667-2.3956 3.558l3.7935 2.987z"
                fill="#4A90E2"
              />
              <path
                d="m5.277 14.268c-0.23866-0.71155-0.36789-1.4741-0.36789-2.2679 0-0.78172 0.12535-1.5332 0.35711-2.2355l-4.0262-3.1145c-0.8034 1.6104-1.24 3.4254-1.24 5.35 0 1.9195 0.44478 3.7302 1.2375 5.335l4.0395-3.0671z"
                fill="#FBBC05"
              />
            </svg>
            Sign in with Google
          </button>
        </div>

        <div className="mt-5 flex justify-center items-center ">
          <p className=" font-medium text-base">Don't have an account?</p>
          <button className=" text-violet-500 text-base font-medium  ml-2">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
