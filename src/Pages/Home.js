import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import menuService from "../service/menu";
import { Toaster } from "react-hot-toast";
import service from "../service/cart";
import util from "../config/util";
const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const list = () => {
    menuService
      .getItems("Pizzas")
      .then((res) => setData(res.data))
      .catch((err) => util.failed(err.message));
  };

  const add = (item) => {
    if (util.isLogged()) {
      service
        .addToCart(
          {
            name: item.name,
            price: item.price,
            quantity: 1,
            img: item?.image_url,
          },
          { user_id: util.getUserId() }
        )
        .then((res) => util.success(res.data.message))
        .catch((err) => util.failed(err.message));
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    list();
  }, []);

  return (
    <section class="text-gray-600 body-font h-screen">
      <Toaster />
      <div
        class="container px-5 py-12 border-2"
        style={{
          backgroundImage: `url("https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/w-qjCHPZbeXCQ-unsplash.jpg")`,
          objectFit: "fill",
          width: "100%",
          backgroundPosition: "center",
        }}
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
      <div>
        <p className="text-4xl px-5 py-6 text-center font-semibold">
          Our Top Trending Categories
        </p>
      </div>
      <div className="container px-5 py-8 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col ">
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
      <div>
        <p className="text-4xl px-5 pt-24 text-center font-semibold">
          Our Marvelous Pizzas
        </p>
      </div>
      <div class="container px-5 py-12 mx-auto">
        <div class="flex flex-wrap -m-4">
          {data.length > 0 &&
            data.map((item) => (
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full " key={item?._id}>
                <a class="block relative h-48 rounded-md overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block"
                    src={item?.image_url}
                  />
                </a>
                <div class="mt-4 ">
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    {item?.name}
                  </h2>
                  <div className="flex justify-between items-start">
                    <p class="mt-1">
                      ₹{item?.price}{" "}
                      <span class="mt-1 line-through">
                        ₹{item?.price * (10 / 100) + item?.price}
                      </span>
                    </p>
                    <div>
                      <button
                        className="bg-[#FB7B51] text-white px-2 rounded-sm"
                        onClick={() => add(item)}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
