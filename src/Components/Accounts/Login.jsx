import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Store/UserSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
 const navigate=useNavigate()
  const handleSubmit = async(e) => {
   

    try {
        e.preventDefault();
      const userData = { email, password };
      await dispatch(loginUser(userData)).then(()=>
        navigate('/')
      );
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    if (e.target.id === 'login-email') {
      setEmail(e.target.value);
    } else if (e.target.id === 'login-password') {
      setPassword(e.target.value);
    }
  };

  console.log(email, password, user, "vvvvvvvvv");

  return (
    <div className='p-10'>
      <div className="flex flex-wrap">
        <div className="flex w-full flex-col md:w-1/2">
          <div className="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
            <a
              href="#"
              className="border-b-gray-700 border-b-4 pb-2 text-2xl font-bold text-gray-900"
            >
            </a>
          </div>
          <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
            <p className="text-left text-3xl font-bold">Welcome back to Future Shope</p>
            <p className="mt-2 text-left text-gray-500">
              Please enter your details.
            </p>
            <button className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white">
              <img
                className="mr-2 h-5"
                src="https://static.cdnlogo.com/logos/g/35/google-icon.svg"
                alt=""
              />{" "}
              Log in with Google
            </button>
            <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
              <div className="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500">
                or
              </div>
            </div>
            <form className="flex flex-col pt-3 md:pt-8" onSubmit={(e) => handleSubmit(e)}>
              <div className="flex flex-col pt-4">
                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                  <input
                    type="email"
                    id="login-email"
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
                    type="password"
                    id="login-password"
                    className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Password"
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2"
              >
                Log in
              </button>
            </form>
            <div className="py-12 text-center">
              <p className="whitespace-nowrap text-gray-600" onClick={()=>navigate('/signup')}>
                Don't have an account?
                <a
                  href="#"
                  className="underline-offset-4 font-semibold text-gray-900 underline"
                >
                  Sign up for free.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
          <img
            className="-z-1 absolute top-0 h-full w-full object-cover opacity-90"
            src="https://wallpapercave.com/wp/wp3537552.jpg"
          />
          <div className="absolute top-10 z-10 px-8 text-white opacity-100">
            <p className="mb-8 text-3xl font-semibold leading-10" style={{ color: 'black' }}>
              Your go-to eCommerce solution for a seamless shopping experience!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
