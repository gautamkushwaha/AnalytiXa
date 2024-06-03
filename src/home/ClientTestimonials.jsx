import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ClientTestimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (


        <div className="bg-[#0D47A1] bg-opacity-20 pb-[100px]">
            <div>
                <h3 className="text-6xl font-bold p-16 text-white">Client Testimonials</h3>
            </div>


            {/* coursel properties */}
            <div className=' flex flex-wrap w-[full] ml-[30px] '>
                <div className="w-full md:w-[70%] mt-2">
                    <Slider {...settings}>
                        {data.map((d) => (
                            <div className="">
                                <div key={d.name} className=" h-[250px] w-[275px] p-10 bg-[#424242] text-white rounded-tr-3xl rounded-tl-3xl rounded-br-3xl  ">
                                    <p className="text-left">{d.review}</p>

                                </div>
                                <div className="flex flex-col md:flex-row items-left   gap-4 pt-4">
                                    <div className=" flex ">
                                        <img src={d.img} alt="" className="h-20 w-20 rounded-full p-1 border" />
                                    </div>
                                    <div className="md:w-[70%] flex flex-col items-left md:items-start text-center md:text-left text-white">
                                        <p className="text-xl font-semibold p-2">{d.name}</p>
                                        <p className="text-[18px] font-light text-gray-400">{d.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Right side Image */}

                <div className="w-1/4 flex justify-center items-center">
                    <img src="file:///Users/gautam/Downloads/gautam%20image%20(1)/1.svg" alt="Right Side Image" className="h-auto w-full ml-[-100px]" />
                </div>

            </div>

        </div>
    );
}

const data = [
    {
        name: `Ravi Teja`,
        img: `/clientTestimonials/gautamkushwaha.jpeg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        position:`Chief Marketing officier`
    },
    {
        name: `Gautam Kushwaha`,
        img: `/clientTestimonials/gautamkushwaha.jpeg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        position:`Chief Marketing officier`
    },
    {
        name: `Sai Komal`,
        img: `/clientTestimonials/gautamkushwaha.jpeg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        position:`Chief Marketing officier`
    },
    {
        name: `Dhileshwar`,
        img: `/clientTestimonials/gautamkushwaha.jpeg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        position:`Chief Marketing officier`
    },
    {
        name: `Janani`,
        img: `/clientTestimonials/gautamkushwaha.jpeg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        position:`Chief Marketing officier`
    },

];

export default ClientTestimonials;