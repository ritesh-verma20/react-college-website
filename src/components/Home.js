import React from "react";
import "../styles/style.css";
import Online from "./Online";
import Categories from "./Categories";
import Services from "./Services";
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <div className="container1" id="home">
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                style={{ height: 400 }}
                class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center hover:scale-110"
                src="./images/college.avif"
              />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-sm title-font text-white-500 tracking-widest hover:transition-all">
                  BRAND NAME
                </h2>
                <h1 class="text-white-900 text-3xl title-font font-medium mb-1">
                  The Catcher in the Rye
                </h1>
                <p class="leading-relaxed">
                  Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                  sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                  juiceramps cornhole raw denim forage brooklyn. Everyday carry
                  +1 seitan poutine tumeric. Gastropub blue bottle austin
                  listicle pour-over, neutra jean shorts keytar banjo tattooed
                  umami cardigan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* about / events / notices */}
        <div className="container">
          <div class="event">
            <h2 class="heading">Recent Event</h2>
            <div>
              <marquee direction="up" scrollamount="7" style={{ height: 340 }}>
                <ul>
                  <li>
                    <i>01-April-2023 :</i> Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Ut elit tellus...{" "}
                    <img src="images/latest-news-blink-img.gif" alt="" />
                  </li>
                  <li>
                    <i>01-May-2023 :</i> Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Ut elit tellus...{" "}
                    <img src="images/latest-news-blink-img.gif" alt="" />
                  </li>
                  <li>
                    <i>01-June-2023 :</i> Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Ut elit tellus...{" "}
                    <img src="images/latest-news-blink-img.gif" alt="" />
                  </li>
                  <li>
                    <i>01-July-2023 :</i> Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Ut elit tellus...{" "}
                    <img src="images/latest-news-blink-img.gif" alt="" />
                  </li>
                  <li>
                    <i>01-August-2023 :</i> Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Ut elit tellus...{" "}
                    <img src="images/latest-news-blink-img.gif" alt="" />
                  </li>
                  <li>
                    <i>01-September-2023 :</i> Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Ut elit tellus...{" "}
                    <img src="images/latest-news-blink-img.gif" alt="" />
                  </li>
                  <li>
                    <i>01-October-2023 :</i> Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Ut elit tellus...{" "}
                    <img src="images/latest-news-blink-img.gif" alt="" />
                  </li>
                  <li>
                    <i>01-November-2023 :</i> Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Ut elit tellus...{" "}
                    <img src="images/latest-news-blink-img.gif" alt="" />
                  </li>
                  <li>
                    <i>01-December-2023 :</i> Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Ut elit tellus...{" "}
                    <img src="images/latest-news-blink-img.gif" alt="" />
                  </li>
                </ul>
              </marquee>
            </div>
          </div>

          <div class="event campus-news">
            <h2 class="heading">Campus News</h2>
            <div>
              <ul>
                <li>
                  <span class="campus-img">
                    <img src="images/campus-1.png" alt="" />
                  </span>
                  <h2>There are many variations.</h2>
                  <h6>Sep.04.2023</h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry...
                  </p>
                </li>
                <li>
                  <span class="event-img">
                    <img src="images/campus-2.png" alt="" />
                  </span>
                  <h2>There are many variations.</h2>
                  <h6>Sep.04.2023</h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry...
                  </p>
                </li>
                <li>
                  <span class="event-img">
                    <img src="images/campus-3.png" alt="" />
                  </span>
                  <h2>There are many variations.</h2>
                  <h6>Sep.04.2023</h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry...
                  </p>
                </li>
                <li>
                  <span class="event-img">
                    <img src="images/campus-4.png" alt="" />
                  </span>
                  <h2>There are many variations.</h2>
                  <h6>Sep.04.2023</h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry...
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div class="event">
            <h2 class="heading">College Event Calender</h2>
            <div>
              <ul>
                <li>
                  <span class="event-date">
                    11 <br /> April{" "}
                  </span>{" "}
                  Lorem Ipsum is simply dummy text of the printing text printing
                  industry...
                </li>
                <li>
                  <span class="event-date">
                    19 <br /> May{" "}
                  </span>{" "}
                  Lorem Ipsum is simply dummy text of the printing industry
                  dummy text...
                </li>
                <li>
                  <span class="event-date">
                    21 <br /> June{" "}
                  </span>{" "}
                  Lorem Ipsum is simply dummy text of the printing industry orem
                  Ipsum...
                </li>
                <li>
                  <span class="event-date">
                    17 <br /> July{" "}
                  </span>{" "}
                  Lorem Ipsum is simply dummy text of the printing industry
                  simply dummy...
                </li>
                <li>
                  <span class="event-date">
                    31 <br /> August{" "}
                  </span>{" "}
                  Lorem Ipsum is simply dummy text of the printing industry...
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Online/>
      <Categories/>
      <Services/>
      <Contact/>
    </>
  );
};

export default Home;
