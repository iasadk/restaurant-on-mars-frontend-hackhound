import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <section class="text-gray-600 body-font">
      <h1 className='text-center text-4xl my-5'>Menu</h1>
  <div class="container px-10 py-7 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <Link
              to={"/Pizza"}
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
        </a>
      </div>
    
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
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
        </a>
      </div>
    
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
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
        </a>
      </div>
    
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
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
        </a>
      </div>
    
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
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
        </a>
      </div>
    
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <Link
              to={"/Italian"}
              className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-[#424242] hover:bg-[#ff5432] transition duration-150 ease-out hover:ease-in"
            >
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="spaghetti.png"
              />
              <div className="flex-grow">
                <p className="text-slate-50">Italian</p>
              </div>
            </Link>
        </a>
      </div>
    
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <Link
              to={"/Chinese"}
              className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-[#424242] hover:bg-[#ff5432] transition duration-150 ease-out hover:ease-in"
            >
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="ramen.png"
              />
              <div className="flex-grow">
                <p className="text-slate-50">Chinese</p>
              </div>
            </Link>
        </a>
      </div>
    
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <Link
              to={"/FastFood"}
              className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-[#424242] hover:bg-[#ff5432] transition duration-150 ease-out hover:ease-in"
            >
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="burger.png"
              />
              <div className="flex-grow">
                <p className="text-slate-50">Fast Food</p>
              </div>
            </Link>
        </a>
      </div>
    
    </div>
  </div>
</section>
  )
}

export default Menu