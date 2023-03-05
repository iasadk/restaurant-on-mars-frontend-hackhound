import React from "react";

const Failure = () => {
  return (
    <section>
    <div class="grid h-screen place-items-center py-20 my-0 z-0">
    <h1 class="text-slate-500 text-3xl title-font font-bold z-10">Payment Failed❗</h1>
    <p class="text-slate-500 text-sm title-font font-light z-10">Something went wrong, please try again!
    </p>
    <p class="text-xsm title-font font-light z-10 text-orange-600">Order id: 890897rufsiy
    </p>
    <img
              alt="Background-img"
              className="w-[30%] object-cover object-center"
              src="failure.svg"
              width={200}
              height={200}
            ></img>
    </div>
    </section>

  );
};

export default Failure;
