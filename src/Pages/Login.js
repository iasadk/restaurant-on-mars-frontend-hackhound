import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import util from "../config/util";
import _ from "underscore";
import service from "../service/user";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [data, setData] = useState({});
  const navigate = useNavigate();
  const handleChange = (value) => {
    setData({ ...data, ...value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    if (_.isEmpty(data)){
      util.failed("Please Fill the Form.");
      return;
    }
    else{
        await service.login(data)
        .then(res => {
            if(res.message){
                util.success(res.message);
                util.setUserData(res);
                setTimeout(()=>{
                    navigate("/")
                },2000)
                
            }
        })
        .catch(err => util.failed(err.error))

    }
  };
  return (
    <main>
      <Toaster />
      <section className="text-gray-800 body-font test">
        <div className="container mx-auto ">
          <div className="w-full flex flex-wrap h-max">
            <img
              alt="Background-img"
              className="w-[45%] object-cover object-center"
              src="signup.svg"
              width={200}
              height={200}
            ></img>
            <div className="w-1/2 pt-12 flex flex-col items-center mx-auto">
              <div className="flex flex-col gap-12 w-9/12">
                <div className="sign-up-title text-left font-PTSans text-2xl">
                  Login to your Cosmic Cusine
                </div>
              </div>
              <div className="w-9/12">
                <form action="#" method="POST" className="font-PTSans" onSubmit={e => handleLogin(e)}>
                  <div className="w-full ">
                    <div className="py-5 ">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-12 sm:col-span-6">
                          <input
                            type="email"
                            name="email-details"
                            id="email-details"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border-[1px] font-md p-2 border-[#7E8488] shadow-sm focus:border-gray-700 focus:ring-gray-700 sm:text-sm outline-none"
                            placeholder="Enter Email"
                            onChange={(e) =>
                                handleChange({ email: e.target.value.trim() })
                              }
                          />
                        </div>

                        <div className="col-span-12 sm:col-span-6">
                          <input
                            type="password"
                            name="password"
                            id="password"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border-[1px] font-md p-2 border-[#7E8488] shadow-sm focus:border-gray-700 focus:ring-gray-700 sm:text-sm outline-none"
                            placeholder="Password"
                            onChange={(e) =>
                                handleChange({ password: e.target.value.trim() })
                              }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 py-3 flex flex-col justify-between gap-10">
                      <a href="#" className="text-[#5591C5] hover:underline ">
                        Forgot Password ?
                      </a>
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-[#ff632f] py-2 px-4 text-sm text-white shadow-sm hover:bg-[#ff632f] focus:outline-none focus:ring-2 focus:ring-[#ff632f] focus:ring-offset-2 w-[130px]"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
