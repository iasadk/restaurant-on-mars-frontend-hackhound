import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import util from "../config/util";
import menuService from "../service/menu";
import { Toaster } from "react-hot-toast";
import service from "../service/cart";

const ItemList = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const list = () => {
    menuService
      .getItems(category)
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
  }, [category]);
  return (
    <section class="text-gray-600 body-font">
      <div className="categoryImg">
        <Toaster />
      </div>
      <div class="container px-5 py-24 mx-auto">
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
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {category}
                  </h3>
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

export default ItemList;


