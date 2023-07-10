import React from "react";
import "../styles/style.css";

const Categories = () => {
  return (
    <div className="background2" id="categories">
      <div className="container2cake">
        <h1 className="heading">Best Courses</h1>
        <div class="section">
          <div class="image image-container">
            <img
              src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?size=626&ext=jpg&ga=GA1.1.2067541460.1688021673&semt=ais"
              alt=""
            />
            <h2>Full Stack Developer</h2>
          </div>
          <div class="image image-container">
            <img
              src="https://img.freepik.com/free-vector/futuristic-ai-technology-template-vector-disruptive-technology-blog-banner_53876-112229.jpg?size=626&ext=jpg&ga=GA1.1.2067541460.1688021673&semt=ais"
              alt=""
            />
            <h1>Artificial Intelligence</h1>
          </div>
          <div class="image image-container">
            <img
              src="https://img.freepik.com/free-photo/medium-shot-man-holding-device_23-2149192120.jpg?size=626&ext=jpg&ga=GA1.1.2067541460.1688021673&semt=ais"
              alt=""
            />
            <h1>Ethical Hacking</h1>
          </div>
          <div class="image image-container">
            <img
              src="https://img.freepik.com/free-photo/man-using-tablet-work-connect-with-others_23-2149369110.jpg?size=626&ext=jpg&ga=GA1.1.2067541460.1688021673&semt=ais"
              alt=""
            />
            <h1>Data Science</h1>
          </div>
        </div>

        {/* placement section */}
        <div className="placement">
          <h3 className="heading">Top Recruiters Company</h3>
          <marquee className="recruiter-marquee">
            <img src="images/recruiter-1.jpg" alt="" />
            <img src="images/recruiter-2.jpg" alt="" />
            <img src="images/recruiter-3.jpg" alt="" />
            <img src="images/recruiter-4.jpg" alt="" />
            <img src="images/recruiter-5.jpg" alt="" />
            <img src="images/recruiter-6.jpg" alt="" />
            <img src="images/recruiter-7.jpg" alt="" />
            <img src="images/recruiter-8.jpg" alt="" />
            <img src="images/recruiter-9.jpg" alt="" />
            <img src="images/recruiter-10.jpg" alt="" />
            <img src="images/recruiter-11.jpg" alt="" />
            <img src="images/recruiter-12.jpg" alt="" />
            <img src="images/recruiter-13.jpg" alt="" />
            <img src="images/recruiter-14.jpg" alt="" />
            <img src="images/recruiter-15.jpg" alt="" />
            <img src="images/recruiter-16.jpg" alt="" />
            <img src="images/recruiter-17.jpg" alt="" />
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Categories;
