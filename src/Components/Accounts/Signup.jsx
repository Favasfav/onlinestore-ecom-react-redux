import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = {
        "phone_no":phoneno,
        "username":username,
        "password":password,
        "email":email
      }
      const response= await axios.post("http://127.0.0.1:8000/accounts/signup/",data)
      console.log(response.data)
      Swal.fire({
        title: "User Created",
        text: "Welcome ..",
        timer: 2000,
      });
      navigate('/login')

    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    } else if (e.target.id === "phoneno") {
      setPhoneno(e.target.value);
    } else if (e.target.id === "username") {
      setUsername(e.target.value);
    }
  };

  console.log(email, password, username, phoneno, "vvvvvvvvv");

  return (
    <div className="p-10">
      <div className="flex flex-wrap">
        <div className="flex w-full flex-col md:w-1/2">
          <div className="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
            <a
              href="#"
              className="border-b-gray-700 border-b-4 pb-2 text-2xl font-bold text-gray-900"
            ></a>
          </div>
          <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
            <p className="text-left text-3xl font-bold">
              Welcome back to Future Shope
            </p>
            <p className="mt-2 text-left pt-5 text-gray-500">
              Please enter your details.
            </p>
            
            <form
              className="flex flex-col pt-3 md:pt-8"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="flex flex-col pt-4">
                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                  <input
                    type="email"

                    id="email"
                    className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Email"
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="mb-12 flex flex-col pt-4">
                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                  <input
                    type="text"
                    id="username"
                    className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Username"
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-12 flex flex-col pt-4">
                  <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                    <input
                      type="text"
                      id="phoneno"
                      className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                      placeholder="Phone number"
                      required
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="mb-12 flex flex-col pt-4">
                    <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                      <input
                        type="password"
                        id="password"
                        
                        className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                        placeholder="Password"
                        required
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
        <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
          <img
            className="-z-1 absolute top-0 h-full w-full object-cover opacity-90"
            src="https://wallpapercave.com/wp/wp3537552.jpg"
          />
          <div className="absolute top-10 z-10 px-8 text-white opacity-100">
            <p
              className="mb-8 text-3xl font-semibold leading-10"
              style={{ color: "black" }}
            >
              Your go-to eCommerce solution for a seamless shopping experience!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
