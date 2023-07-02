import React from "react";
import "../styles/style.css";

const Categories = () => {
  return (
    <div className="background2" id="categories">
      
      <div className="container2cake">
        <h1 className="heading">Popular Categories</h1>
        <div class="section">
          <div class="image">
            <img src="https://img.freepik.com/premium-photo/black-forest-cake-isolated_1339-66930.jpg?size=626&ext=jpg&ga=GA1.2.2067541460.1688021673&semt=ais" alt="" />
            <h2>Cakes</h2>

          </div>
          <div class="image">
            <img src="https://img.freepik.com/free-photo/pasta-fettuccine-bolognese-with-tomato-sauce-white-bowl_2829-20035.jpg?size=626&ext=jpg&ga=GA1.2.2067541460.1688021673&semt=ais" alt="" />
            <h1>Pasta</h1>
          </div>
          <div class="image">
            <img src="https://img.freepik.com/free-photo/delicious-breakfast-meal-assortment_23-2148878829.jpg?size=626&ext=jpg&ga=GA1.1.2067541460.1688021673&semt=ais" alt="" />
            Breakfast
          </div>
          <div class="image">
            <img src="https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?size=626&ext=jpg&ga=GA1.1.2067541460.1688021673&semt=ais" alt="" />
            <h1>Pizza</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
