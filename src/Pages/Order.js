import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import util from "../config/util";
import service from "../service/order";
const Order = () => {
  const [orderData, setOrderData] = useState([]);
  const navigate = useNavigate()
  const list = () => {
    service
      .list({ user_id: util.getUserId() })
      .then((res) => setOrderData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if(util.getUserId()===""){
        navigate("/")
      }
    list();
  }, []);

  return (
    <div>
      <h1 className="text-center text-4xl my-5">Your Orders</h1>
      <div className="bg-slate-100 p-4 my-12 w-full md:w-8/12 transition-all delay-100 ease-in-out mx-auto">
        {orderData.length > 0 &&
          orderData.map((item) => (
            <div>
              <div className=" mt-20 text-lg md:text-2xl font-semibold text-gray-400 flex justify-between">
                <p>Order ID: {item?._id}</p>
              </div>
              <div className="flex flex-col md:flex-row justify-between text-sm mt-4">
                <div className="flex gap-1 mb-2">
                  <p>Order date: {new Date().toLocaleString()}</p>
                  <span className="font-semibold text-md"></span>
                </div>
              </div>

              {item?.items.map((v) => (
                <div className="my-12">
                  <div className="flex justify-between bg-slate-200 rounded my-4 p-4">
                    <div className="flex gap-2 my-4 ">
                      <img
                        src={
                          v?.img || "https://img.freepik.com/free-photo/spicy-salmon-salad_74190-647.jpg?size=626&ext=jpg"
                        }
                        alt="OrderedItem"
                        className="w-1/4 md:w-1/6"
                        width={500}
                        height={500}
                      />
                      <div className="text-slate-500 flex flex-col gap-3 md:justify-end">
                        <p className="text-lg font-normal ">{v?.name}</p>
                      </div>
                    </div>
                    <div className="flex flex-col text-md w-[230px] justify-start md:justify-end items-start  my-4">
                      <p className="md:text-lg font-bold">₹ {v?.price}</p>
                      <div className="text-sm mt-2">
                        <p className="text-slate-500 font-thin">Qty: {v?.quantity}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-2 row-auto gap-y-3">
                <div className="payment">
                  <h1 className="text-slate-600 flex items-center gap-1 font-semibold lg:text-lg">
                    Payment <i className="ri-currency-line"></i>
                  </h1>
                  <div className="mt-2">
                    <p className="text-md font-thin lg:text-base">
                      **56 <i className="ri-visa-line text-lg"></i>
                    </p>
                  </div>
                </div>

                <div></div>

                <div>
                  <h1 className="text-slate-600 flex items-center gap-1 font-semibold lg:text-lg">
                    Need help <i className="ri-question-line"></i>
                  </h1>
                  <div>
                    <p className="text-xs text-slate-500 font-thin my-2 flex items-center gap-1 xl:text-base">
                      <i className="ri-questionnaire-fill"></i> Order Issue{" "}
                      <i className="ri-arrow-right-up-line"></i>
                    </p>
                    <p className="text-xs text-slate-500 font-thin my-2 flex items-center gap-1 xl:text-base">
                      <i className="ri-arrow-go-back-line"></i> Returns{" "}
                      <i className="ri-arrow-right-up-line"></i>
                    </p>
                  </div>
                </div>

                <div>
                  <h1 className="text-slate-600 mt-1 flex items-center gap-1 border-t-2 border-slate-300 font-semibold lg:text-lg">
                    Order Summary
                  </h1>
                  <div className="flex justify-between items-center ">
                    <p className="text-sm text-slate-500 font-thin my-2 lg:text-base"></p>
                  </div>
                  <div className="flex justify-between items-center border-t-2 border-slate-300">
                    <p className="text-sm text-slate-500 font-thin my-2 lg:text-base">
                      Total
                    </p>
                    <p>₹{item?.total_price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Order;
