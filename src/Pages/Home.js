import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <section class="text-gray-600 body-font h-screen">
      <div
        class="container px-5 py-12 border-2"
        style={{ backgroundImage: `url(./Hero.png)`, objectFit: "fill",width:"100%",backgroundPosition:"center" }}
      >
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 mt-20 ">
            <h1 class="text-white text-6xl title-font font-medium mb-4">
              Experience the food in the space!
            </h1>
            <div class="flex">
              <Link
                to={"/Menu"}
                className="inline-flex items-center bg-[#ff632f] border-0 py-3 px-10 focus:outline-none hover:bg-[#fb7b51] rounded-full text-white md:mt-0 mx-0"
              >
                Order Now!
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col ">
        <div className="flex-grow flex flex-wrap  -mb-10 md:text-left text-center order-first">
          <div className="p-2 lg:w-1/5 md:w-1/2 w-full">
            <Link
              to={"/Pizzas"}
              className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-[#424242] hover:bg-[#ff5432] transition duration-150 ease-out hover:ease-in"
            >
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="pizzaic.png"
              />
              <div className="flex-grow">
                <p className="text-slate-50">Pizzas</p>
              </div>
            </Link>
          </div>
          <div className="p-2 lg:w-1/5 md:w-1/2 w-full">
            <Link
              to={"/Cuisines"}
              className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-[#424242] hover:bg-[#ff5432] transition duration-150 ease-out hover:ease-in"
            >
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="bell.png"
              />
              <div className="flex-grow">
                <p className="text-slate-50">Cuisines</p>
              </div>
            </Link>
          </div>
          <div className="p-2 lg:w-1/5 md:w-1/2 w-full">
            <Link
              to={"/Drinks"}
              className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-[#424242] hover:bg-[#ff5432] transition duration-150 ease-out hover:ease-in"
            >
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="coffee.png"
              />
              <div className="flex-grow">
                <p className="text-slate-50">Drinks</p>
              </div>
            </Link>
          </div>
          <div className="p-2 lg:w-1/5 md:w-1/2 w-full">
            <Link
              to={"/Desserts"}
              className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-[#424242] hover:bg-[#ff5432] transition duration-150 ease-out hover:ease-in"
            >
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="muffin.png"
              />
              <div className="flex-grow">
                <p className="text-slate-50">Desserts</p>
              </div>
            </Link>
          </div>
          <div className="p-2 lg:w-1/5 md:w-1/2 w-full">
            <Link
              to={"/Specials"}
              className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-[#424242] hover:bg-[#ff5432] transition duration-150 ease-out hover:ease-in"
            >
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="cupcake.png"
              />
              <div className="flex-grow">
                <p className="text-slate-50">Special</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
