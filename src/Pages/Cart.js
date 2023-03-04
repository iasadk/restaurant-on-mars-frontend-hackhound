import React, { useEffect, useState } from "react";
import util from "../config/util";
import service from "../service/cart";

const Cart = () => {
  const [cartData, setCartData] = useState([]);

  const list = () => {
    service
      .list({}, { user_id: util.getUserId() })
      .then((res) => setCartData(res.data))
      .catch((err) => util.failed(err.message));
  };

  const handleOrder = ()=>{
    console.log("order palced");
  }
  useEffect(() => {
    list();
  }, []);

  return (
    <div className="my-8 h-screen">
      <p className="text-center text-6xl my-8">Your Cart</p>
      <div className=" w-8/12 mx-auto p-4 rounded-lg">
        {cartData.length !== 0 &&
          cartData?.items.map((item, idx) => (
            <div className=" bg-gray-200 w-[80%] mx-auto rounded-lg p-4 flex justify-between items-center">
              <div className="flex  items-center flex-row ">
                <img src={item?.img} alt="cart-item" className="h-20 mr-8" />
                <p className="text-md md:text-lg mt-3">{`${idx + 1}. ${
                  item?.name
                }  : ₹${item?.price}`}</p>
              </div>
              <div className="flex justify-center">
                <button className="bg-[#FB7B51] text-white px-2 rounded-sm">
                  +
                </button>
                <span className="px-2 py-1">{item?.quantity}</span>
                <button className="bg-[#FB7B51] text-white px-2 rounded-sm">
                  -
                </button>
              </div>
            </div>
          ))}
        <div className="w-[80%] mx-auto p-4 text-xl font-semibold">
                <button onClick={()=>handleOrder}>Total: {" "}₹{cartData?.total_price}</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
