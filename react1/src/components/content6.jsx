import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Content6() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='w-full m-auto p-4'>
            <h1 className='text-6xl font-semibold text-brandPrimary  p-12'>What Our Customers Say</h1>
            <div className='mt-16 p-4'> {/* Added padding to the top */}
                <Slider {...settings}>
                    {data.map((d, index) => (
                        <div key={index} className='h-44 rounded-2xl shadow-lg shadow-purple-700'>
                            <div className='flex flex-col justify-center items-center gap-4 p-4'>
                                <p className='text-xl font-semibold'>{d.name}</p>
                                <p>{d.review}</p>
                                <button className='bg-orange-900 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

const data = [
    {
        name: `Rahul Kumar`,
        review: `All-in-One Solution for Car Care!`,
    },
    {
        name: `Divyanshu Bhardwaj`,
        review: `Expert Maintenance and Repair Services`,
    },
    {
        name: `Vijay Pal`,
        review: `Convenient EV Charging Solutions!`,
    },
    {
        name: `Khushi Gupta`,
        review: `Quality Spare Parts for Every Need!`,
    },
    {
        name: `Tahir Hussain`,
        review: `Efficient Maintenance Services!`,
    },
    {
        name: `Gopal Singh`,
        review: `Expert Repair Solutions for Peace of Mind!`,
    },
    // Add more data items as needed
];

export default Content6;
