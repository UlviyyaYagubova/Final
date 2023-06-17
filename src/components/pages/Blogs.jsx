import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import imagesblog1 from "../assets/img/blog1.jpg";
import imagesblog2 from "../assets/img/blog2.jpg";
import imagesblog3 from "../assets/img/blog3.jpg";
import imagesblog4 from "../assets/img/blog4.jpg";
import { useTranslation } from "react-i18next";

const Blogs = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="all-blogs">
      <div className="all-blogs-in">
        <div className="whole-blog-one">
          <img src={imagesblog1} alt="#" />
          <div className="blog-text-1">
           <div className="blog-text-in">
           <h4>Creative and Exterior design</h4>
            <p style={{fontSize: "17px"}}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem…
            </p>
            <button>Continue Reading</button>
           </div>
          </div>
        </div>
        <div className="whole-blog-two">
          <img src={imagesblog2} alt="#" />
          <div className="blog-text-1">
           <div className="blog-text-in">
           <h4>Creative and Exterior design</h4>
            <p style={{fontSize: "17px"}}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem…
            </p>
            <button>Continue Reading</button>
           </div>
          </div>
        </div>
        <div className="whole-blog-three">
          <img src={imagesblog3} alt="#" />
          <div className="blog-text-1">
           <div className="blog-text-in">
           <h4>Creative and Exterior design</h4>
            <p style={{fontSize: "17px"}}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem…
            </p>
            <button>Continue Reading</button>
           </div>
          </div>
        </div>
        <div className="whole-blog-four">
          <img src={imagesblog4} alt="#" />
          <div className="blog-text-1">
           <div className="blog-text-in">
           <h4>Creative and Exterior design</h4>
            <p style={{fontSize: "17px"}}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem…
            </p>
            <button>Continue Reading</button>
           </div>
          </div>
        </div>
      </div>     
    </div>
  );
};

export default Blogs;
