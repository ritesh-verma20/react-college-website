import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import "../styles/style.css";

const Cake = () => {
  return (
    <div className="background2" id="online">
      <div className="container2cake">
        <h1 className="heading">Online Courses</h1>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link className="block relative h-48 rounded overflow-hidden image-container">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901783.jpg?size=626&ext=jpg&ga=GA1.1.2067541460.1688021673&semt=ais"
                  />
                </Link>
                <div className="mt-4">
                  <div style={{ display: "flex" }}>
                    {[...Array(5)].map((star) => {
                      return <FaStar />;
                    })}
                  </div>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    HTML
                  </h2>
                  <p className="mt-1">$16.00</p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                    <a href="/images/html_tutorial.pdf" download="HTML PDF">
                      PDF Download
                    </a>
                  </button>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link className="block relative h-48 rounded overflow-hidden image-container">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://img.freepik.com/premium-photo/text-css-cascading-style-sheet-writing-brown-card-with-magnifying-glass-pencilcalculator-glasses-black-background_406607-3459.jpg?size=626&ext=jpg&ga=GA1.1.2067541460.1688021673&semt=ais"
                  />
                </Link>
                <div className="mt-4">
                  <div style={{ display: "flex" }}>
                    {[...Array(5)].map((star) => {
                      return <FaStar />;
                    })}
                  </div>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    CSS
                  </h2>
                  <p className="mt-1">$21.15</p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                    <a href="/images/css_tutorial.pdf" download="HTML PDF">
                      PDF Download
                    </a>
                  </button>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link className="block relative h-48 rounded overflow-hidden image-container">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://img.freepik.com/premium-photo/javascript-programming-text_272306-138.jpg?size=626&ext=jpg&ga=GA1.1.2067541460.1688021673&semt=ais"
                  />
                </Link>
                <div className="mt-4">
                  <div style={{ display: "flex" }}>
                    {[...Array(5)].map((star) => {
                      return <FaStar />;
                    })}
                  </div>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    JavaScript
                  </h2>
                  <p className="mt-1">$12.00</p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                    <a href="/images/javascript_tutorial.pdf" download="HTML PDF">
                      PDF Download
                    </a>
                  </button>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link className="block relative h-48 rounded overflow-hidden image-container">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://img.freepik.com/premium-photo/futuristic-robot-artificial-intelligence-revolutionary-ai-technology-concept_31965-47938.jpg?size=626&ext=jpg&ga=GA1.1.2067541460.1688021673&semt=ais"
                  />
                </Link>
                <div className="mt-4">
                  <div style={{ display: "flex" }}>
                    {[...Array(5)].map((star) => {
                      return <FaStar />;
                    })}
                  </div>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    React JS
                  </h2>
                  <p className="mt-1">$18.40</p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                    <a href="/images/react_tutorial.pdf" download="HTML PDF">
                      PDF Download
                    </a>
                  </button>
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
