import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Service() {
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
            <h3 className="text-4xl font-bold p-16">Our Services</h3>
        </div>


        {/* coursel properties */}
    <div className=' flex flex-wrap w-[full] ml-[30px] '>
      <div className="w-full md:w-3/4 mt-2">
      <Slider {...settings}>
        {data.map((d) => (

          <div key={d.name}
           className=" h-[450px] bg-[#424242] text-white rounded-xl ">
            <div className='h-56  flex justify-center items-center rounded-t-xl'>
              <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl font-semibold">{d.name}</p>
              <p className="text-center">{d.review}</p>
              <button className= ' w-[80%] bg-indigo-500 text-white text-lg px-6 py-2 rounded-xl'>See Details</button>
            </div>
          </div>
        ))}
      </Slider>
      </div>

      {/* Right side Image */}

      <div className="w-1/4 flex justify-center items-center">
          <img src="/ourService/Green line style Cocktail corner Logo (220 x 120 px).svg" alt="Right Side Image" className="h-auto w-full ml-[-100px]" />
        </div>
      
      </div>
      
    </div>
  );
}

const data = [
  {
    name: `Web Development`,
    img: `/students/John_Morgan.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `App Development`,
    img: `/students/Ellie_Anderson.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Product Design`,
    img: `/students/Nia_Adebayo.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Data Analytics`,
    img: `/students/Rigo_Louie.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `IOT services`,
    img: `/students/Mia_Williams.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  
];

export default Service;