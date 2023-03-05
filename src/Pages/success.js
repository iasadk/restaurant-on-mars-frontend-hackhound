import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import util from "../config/util";
import service from "../service/cart";
const Success = () => {
  const [searchParams] = useSearchParams();
  const clearCart = () => {
    service.clearCart({},{user_id: util.getUserId()})
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  };

  useEffect(() => {
    clearCart();
  }, [])
  
  return (
    <section>
      <div class="grid h-screen place-items-center py-20 my-0 z-0">
        <h1 class="text-slate-500 text-3xl title-font font-bold z-10">
          Payment Successful! ✅
        </h1>
        <p class="text-slate-500 text-sm title-font font-light z-10">
          Your food will be prepared in 20:00 mins
        </p>
        <p class="text-xsm title-font font-light z-10 text-orange-600">
          Order id: {searchParams.get("orderId")}
        </p>
        <img
          alt="Background-img"
          className="w-[30%] object-cover object-center"
          src="success.svg"
          width={200}
          height={200}
        ></img>
      </div>
    </section>
  );
};

export default Success;
