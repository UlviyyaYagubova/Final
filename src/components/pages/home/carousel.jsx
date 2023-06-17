import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import carousel1 from '../../data/dataOne';

const carousel = () => {
    const options = {
        margin: 10,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        items: 5,
        navText: ["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
        smartSpeed: 1000,
        autoplayTimeout: 1100,
        loop: true,
        dots:false,
        responsive:{
        0:{
            items:2,
        },
        600:{
            items:3,
        },
        1000:{
            items:5
        }
    }
    };
    return (
        <div className="carousel">
           <div className="carousel-main1">
           <OwlCarousel className="slider-items owl-carousel" {...options}>
            {
                carousel1.dataOne.map((item,index)=>{
                    return(
                        <div className="item"
                         key={item.id} 
                        >
                            <img src={item.img}/> 
                        </div>
                    )
                })
            }
        </OwlCarousel>
           </div>
        </div>
    )
}
export default carousel