import React from "react";
import {Link} from 'react-router-dom'
import { FaStar } from "react-icons/fa";

import "../styles/style.css";

const Cake = () => {
  return (
    <div className="background2" id="cake">
      <div className="container2cake">
        <h1 className="heading">Super Delicious</h1>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://img.freepik.com/free-photo/cupcakes-decorated-whipped-cream-frozen-raspberries_114579-7877.jpg?size=626&ext=jpg&ga=GA1.1.2067541460.1688021673&semt=ais"
                  />
                </Link>
                <div className="mt-4">
                  <div style={{display: "flex"}}>
                  {[...Array(5)].map(star =>{
                    return <FaStar/>

                  })}
                  </div>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Cup Cake
                  </h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://img.freepik.com/free-photo/cupcakes-decorated-whipped-cream-frozen-raspberries_114579-7877.jpg?size=626&ext=jpg&ga=GA1.1.2067541460.1688021673&semt=ais"
                  />
                </Link>
                <div className="mt-4">
                  <div style={{display: "flex"}}>
                  {[...Array(5)].map(star =>{
                    return <FaStar/>

                  })}
                  </div> 
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Black Forest
                  </h2> 
                  <p className="mt-1">$21.15</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://img.freepik.com/free-photo/cupcakes-decorated-whipped-cream-frozen-raspberries_114579-7877.jpg?size=626&ext=jpg&ga=GA1.1.2067541460.1688021673&semt=ais"
                  />
                </Link>
                <div className="mt-4">
                <div style={{display: "flex"}}>
                  {[...Array(5)].map(star =>{
                    return <FaStar/>

                  })}
                  </div>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Black Forest
                  </h2>
                  <p className="mt-1">$12.00</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://img.freepik.com/premium-photo/chocolate-cake-with-strawberry-table-closeup_392895-346517.jpg?size=626&ext=jpg&ga=GA1.1.2067541460.1688021673&semt=ais"
                  />
                </Link>
                <div className="mt-4">
                <div style={{display: "flex"}}>
                  {[...Array(5)].map(star =>{
                    return <FaStar/>

                  })}
                  </div>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Red Valvet
                  </h2>
                  <p className="mt-1">$18.40</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://img.freepik.com/premium-photo/chocolate-cake-with-strawberry-table-closeup_392895-346517.jpg?size=626&ext=jpg&ga=GA1.1.2067541460.1688021673&semt=ais"
                  />
                </Link>
                <div className="mt-4">
                <div style={{display: "flex"}}>
                  {[...Array(5)].map(star =>{
                    return <FaStar/>

                  })}
                  </div>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Doracake
                  </h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://img.freepik.com/premium-photo/chocolate-cake-with-strawberry-table-closeup_392895-346517.jpg?size=626&ext=jpg&ga=GA1.1.2067541460.1688021673&semt=ais"
                  />
                </Link>
                <div className="mt-4">
                <div style={{display: "flex"}}>
                  {[...Array(5)].map(star =>{
                    return <FaStar/>

                  })}
                  </div>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Vegiicake
                  </h2>
                  <p className="mt-1">$21.15</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://img.freepik.com/free-photo/closeup-shot-delicious-cupcake-with-cream-cherry-top-dessert-stand_181624-42199.jpg?size=626&ext=jpg&ga=GA1.2.2067541460.1688021673&semt=ais"
                  />
                </Link>
                <div className="mt-4">
                <div style={{display: "flex"}}>
                  {[...Array(5)].map(star =>{
                    return <FaStar/>

                  })}
                  </div>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    chocolate
                  </h2>
                  <p className="mt-1">$12.00</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://img.freepik.com/free-photo/closeup-shot-delicious-cupcake-with-cream-cherry-top-dessert-stand_181624-42199.jpg?size=626&ext=jpg&ga=GA1.2.2067541460.1688021673&semt=ais"
                  />
                </Link>
                <div className="mt-4">
                <div style={{display: "flex"}}>
                  {[...Array(5)].map(star =>{
                    return <FaStar/>

                  })}
                  </div>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Vanilla
                  </h2>
                  <p className="mt-1">$18.40</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cake;
