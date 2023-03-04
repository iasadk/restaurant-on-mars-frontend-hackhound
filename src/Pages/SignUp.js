import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import util from "../config/util";
import _ from "underscore"
import service from "../service/user";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const handleChange = (value) => {
    setData({ ...data, ...value });
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    if (_.isEmpty(data)){
      util.failed("Please Fill the Form.");
      return;
    }
    else{
        if(data.password !== data.cPass){
            util.failed("Password is not matching.");
            return;
        }
        await service.saveUser(data)
        .then(res => {
            if(res.user_id){
                util.success("Register Successfully.")
                setTimeout(()=>{
                    navigate("/login")
                },2000)
                
            }
        })
        .catch(err => util.failed(err.error))

    }
  };
  return (
    <main className="h-[900px] overflow-hidden">
      <Toaster />
      <section className="text-gray-800 body-font">
        <div className="container mx-auto h-screen">
          <div className="w-full flex flex-wrap">
            <img
              alt="Background-img"
              className="w-[45%] object-cover object-center"
              src="https://images.pexels.com/photos/1813465/pexels-photo-1813465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={400}
              height={400}
            ></img>
            <div className="w-1/2 pt-20 flex flex-col items-center mx-auto">
              <div className="flex flex-col gap-12 w-9/12">
                <div className="sign-up-title text-center font-PTSans text-2xl">
                  Sign up to Cosmic Cuisine
                </div>
              </div>
              <div className="w-9/12  pb-12">
                <form
                  method="POST"
                  className="font-PTSans"
                  onSubmit={(e) => handleSignup(e)}
                >
                  <div className="w-full ">
                    <div className="py-5 ">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Name
                            <sup>*</sup>
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            className="mt-1 block w-full rounded-md border-[1px] font-md p-2 border-[#7E8488] shadow-sm focus:border-gray-700 focus:ring-gray-700 sm:text-sm outline-none"
                            placeholder="John"
                            onChange={(e) =>
                              handleChange({ name: e.target.value.trim() })
                            }
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email address
                            <sup>*</sup>
                          </label>
                          <input
                            type="email"
                            name="email-address"
                            id="email-address"
                            autoComplete="email"
                            className="mt-1 block w-full rounded-md border-[1px] font-md p-2 border-[#7E8488] shadow-sm focus:border-gray-700 focus:ring-gray-700 sm:text-sm outline-none"
                            placeholder="john.doe@example.com"
                            onChange={(e) =>
                              handleChange({ email: e.target.value.trim() })
                            }
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Phone Number
                            <sup>*</sup>
                          </label>
                          <input
                            type="phone"
                            name="phone"
                            id="phone"
                            autoComplete="email"
                            className="mt-1 block w-full rounded-md border-[1px] font-md p-2 border-[#7E8488] shadow-sm focus:border-gray-700 focus:ring-gray-700 sm:text-sm outline-none"
                            placeholder="88514875145"
                            onChange={(e) =>
                              handleChange({ phone: e.target.value.trim() })
                            }
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Password
                            <sup>*</sup>
                          </label>
                          <div className="flex gap-5">
                            <input
                              type="password"
                              name="password"
                              id="password"
                              autoComplete="given-name"
                              className="mt-1 block w-full rounded-md border-[1px] font-md p-2 border-[#7E8488] shadow-sm focus:border-gray-700 focus:ring-gray-700 sm:text-sm outline-none"
                              placeholder="8+ characters"
                              onChange={(e) =>
                                handleChange({ password: e.target.value.trim() })
                              }
                            />
                          </div>
                        </div>

                        <div className="col-span-6 sm:col-span-3 border-2 w-full">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Confirm Password
                            <sup>*</sup>
                          </label>
                          <input
                            type="password"
                            name="confirmPass"
                            id="confirmPass"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border-[1px] font-md p-2 border-[#7E8488] shadow-sm focus:border-gray-700 focus:ring-gray-700 sm:text-sm outline-none"
                            placeholder="Password@123"
                            onChange={(e) =>
                              handleChange({ cPass: e.target.value.trim() })
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 py-3 flex justify-between ">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-[#ff632f] py-2 px-4 text-sm text-white shadow-sm hover:bg-[#f4845f] focus:outline-none focus:ring-2 focus:ring-[#ff632f] focus:ring-offset-2 "
                      >
                        Create Account
                      </button>
                      <span>
                        Already a member?{" "}
                        <Link
                          to={"/login"}
                          className="text-[#ff632f] hover:underline "
                        >
                          Sign In
                        </Link>
                      </span>
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

export default SignUp;
