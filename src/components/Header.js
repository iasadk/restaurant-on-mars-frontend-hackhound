import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import util from "../config/util";
const Header = () => {
  const location = useLocation()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(util.isLogged());
  }, [location.pathname]);

 
  
  return (
    <header className="text-gray-600 body-font shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src={"/logo-1.png"} alt="" className="w-12" />
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to={"/menu"} className="mr-5 hover:text-gray-900">
            Menu
          </Link>
          <Link to={"/qr"} className="mr-5 hover:text-gray-900">
            QR Code
          </Link>
          {isLoggedIn && <Link to={"/orders"} className="mr-5 hover:text-gray-900">
          Orders
        </Link>}
          <Link to={"/offer"} className="mr-5 hover:text-gray-900">
            Offers
          </Link>
        </nav>
        {!isLoggedIn && (
          <Link
            to={"/login"}
            className="inline-flex items-center bg-[#FF5432] border-0 py-1 px-3 focus:outline-none hover:bg-[#fb7b51] rounded text-white mt-4 md:mt-0 mx-5"
          >
            Login

          </Link>
        )}
        {!isLoggedIn && (
          <Link
            to={"/signup"}
            className="inline-flex items-center bg-[#FF5432] border-0 py-1 px-3 focus:outline-none hover:bg-[#fb7b51] rounded mx-5 text-white mt-4 md:mt-0"
          >
            Sign Up
          </Link>
        )}
        {isLoggedIn && (
          <button
            onClick={()=>util.logout()}
            className="inline-flex items-center bg-[#FF5432] border-0 py-1 px-3 focus:outline-none hover:bg-[#fb7b51] rounded text-white mt-4 md:mt-0 mx-5"
          >
          <i class="ri-logout-circle-line mx-2"></i>{util.getUserData()}
          </button>
        )}
        {isLoggedIn && (
          <Link
            to={"/checkout"}
            className="inline-flex items-center bg-[#FF5432] border-0 py-1 px-3 focus:outline-none hover:bg-[#fb7b51] rounded text-white mt-4 md:mt-0"
          >
            <i class="ri-shopping-cart-line"></i>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
