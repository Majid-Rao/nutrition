import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Oliver Bennett",
    comment: "The veggies were so fresh and packed beautifully. Love it!",
    img: "src/assets/review1.jpg",
  },
  {
    name: "Amelia Brooks",
    comment: "Quick delivery & top-notch quality. Highly recommend!",
    img: "src/assets/review2.jpg",
  },
  {
    name: "Charlotte Harris",
    comment: "Finally, a brand I can trust for real organic produce.",
    img: "src/assets/review3.jpg",
  },
  {
    name: "James Walker",
    comment: "Organic, fresh, and affordable. My family loves it!",
    img: "src/assets/review4.jpg",
  },
];

const Testimonial = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className="bg-white py-16 px-4 dark:bg-gray-900 dark:text-white duration-200">
      <div className="flex justify-center ">
      <hr className="w-14 border-t-2  border-black mt-3 sm:mt-4 dark:border-white" />
      <h2 className="sm:text-3xl md:text-4xl text-xl font-bold text-center dark:text-white text-gray-800 mb-10">
        What Our Customers Say
      </h2></div>
      <div className="slider-container max-w-6xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-4 mb-2">
              <div className="bg-gray-100  dark:bg-gray-900 dark:text-white duration-200 p-6 rounded-lg shadow-md text-center h-full">
                <img
                  src={item.img}
                  alt={item.name}
                  className=" w-40 h-36 mx-auto rounded-full mb-5"
                />
                <p className="text-gray-700 dark:text-white italic mb-2">"{item.comment}"</p>
                <h4 className="font-semibold text-blue-500">{item.name}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
