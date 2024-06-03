import React, { useState } from 'react';

const data = [
    {
        subHeading: 'Corporate',
        items: [
            {
                subSubHeading: 'Sub-Sub-Heading 1.1',
                image: 'https://i.pinimg.com/564x/76/38/3a/76383ac3fac2cd60f183520bbaf180d4.jpg',
                description: 'Description for 1.1',
            },
            {
                subSubHeading: 'Sub-Sub-Heading 1.2',
                image: 'https://i.pinimg.com/564x/6e/ba/87/6eba8716013c59853fb9e9a5afb50de3.jpg',
                description: 'Description for 1.2',
            },
            {
                subSubHeading: 'Sub-Sub-Heading 1.3',
                image: 'https://i.pinimg.com/564x/6e/ba/87/6eba8716013c59853fb9e9a5afb50de3.jpg',
                description: 'Description for 1.3',
            },
            {
                subSubHeading: 'Sub-Sub-Heading 1.4',
                image: 'https://i.pinimg.com/564x/6e/ba/87/6eba8716013c59853fb9e9a5afb50de3.jpg',
                description: 'Description for 1.4',
            },
            {
                subSubHeading: 'Sub-Sub-Heading 1.5',
                image: 'https://i.pinimg.com/564x/6e/ba/87/6eba8716013c59853fb9e9a5afb50de3.jpg',
                description: 'Description for 1.5',
            },
        ],
    },
    {
        subHeading: 'Advertising',
        items: [
            {
                subSubHeading: 'Sub-Sub-Heading 2.1',
                image: 'image2a.jpg',
                description: 'Description for 2.1',
            },
            {
                subSubHeading: 'Sub-Sub-Heading 2.2',
                image: 'image2b.jpg',
                description: 'Description for 2.2',
            },
            {
                subSubHeading: 'Sub-Sub-Heading 2.3',
                image: 'image2c.jpg',
                description: 'Description for 2.3',
            },
            {
                subSubHeading: 'Sub-Sub-Heading 2.4',
                image: 'image2d.jpg',
                description: 'Description for 2.4',
            },
            {
                subSubHeading: 'Sub-Sub-Heading 2.5',
                image: 'image2e.jpg',
                description: 'Description for 2.5',
            },
        ],
    },
    {
        subHeading: 'Marketing',
        items: [
            {
                subSubHeading: 'Sub-Sub-Heading 3.1',
                image: 'image3a.jpg',
                description: 'Description for 3.1',
            },
            {
                subSubHeading: 'Sub-Sub-Heading 3.2',
                image: 'image3b.jpg',
                description: 'Description for 3.2',
            },
            {
                subSubHeading: 'Sub-Sub-Heading 3.3',
                image: 'image3c.jpg',
                description: 'Description for 3.3',
            },
            {
                subSubHeading: 'Sub-Sub-Heading 3.4',
                image: 'image3d.jpg',
                description: 'Description for 3.4',
            },
            {
                subSubHeading: 'Sub-Sub-Heading 3.5',
                image: 'image3e.jpg',
                description: 'Description for 3.5',
            },
        ],
    },
    {
        subHeading: 'Government',
        items: [
            {
                subSubHeading: 'Sub-Sub-Heading 4.1',
                image: 'image4a.jpg',
                description: 'Description for 4.1',
            },
            {
                subSubHeading: 'Sub-Sub-Heading 4.2',
                image: 'image4b.jpg',
                description: 'Description for 4.2',
            },
            {
                subSubHeading: 'Sub-Sub-Heading 4.3',
                image: 'image4c.jpg',
                description: 'Description for 4.3',
            },
            {
                subSubHeading: 'Sub-Sub-Heading 4.4',
                image: 'image4d.jpg',
                description: 'Description for 4.4',
            },
            {
                subSubHeading: 'Sub-Sub-Heading 4.5',
                image: 'image4e.jpg',
                description: 'Description for 4.5',
            },
        ],
    },
];

const ContentLayout = () => {
    const [selected, setSelected] = useState(data[0]);

    return (
        <div className="flex flex-col md:flex-row p-4 text-white m-[100px] gap-5">
            {/* Left Column */}
            {/* <div className="w-full md:w-1/5 p-4 ">
        <h1 className="text-5xl font-bold mb-4 py-5">Case Studies</h1>
        {data.map((item, index) => (
          <div key={index} className="mb-4 cursor-pointer" onClick={() => setSelected(item)}>
            <h2 className="text-2xl font-semibold py-5">{item.subHeading}</h2>
          </div>
        ))}
      </div> */}


            <div className="w-full md:w-1/5  ">
                <h1 className="text-5xl font-bold mb-4 py-5">Case Studies</h1>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`mb-8 cursor-pointer p-2 rounded ${selected === item ? 'bg-[#BBDEFB] text-blue-500' : ''}`}
                        onClick={() => setSelected(item)}
                    >
                        <h2 className="text-2xl font-semibold ml-4 ">{item.subHeading}</h2>
                    </div>
                ))}
            </div>

            {/* Right Column */}
            <div className="w-full md:w-3/4 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid grid-rows-2 gap-4">
                        <div className="relative">
                            <img src={selected.items[0].image} alt={selected.items[0].subSubHeading} className="w-full h-full object-cover rounded" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
                                <h3 className="text-lg font-bold text-white">{selected.items[0].subSubHeading}</h3>
                                <p className="text-sm text-white">{selected.items[0].description}</p>
                            </div>
                        </div>
                        <div className="relative">
                            <img src={selected.items[1].image} alt={selected.items[1].subSubHeading} className="w-full h-full object-cover rounded" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
                                <h3 className="text-lg font-bold text-white">{selected.items[1].subSubHeading}</h3>
                                <p className="text-sm text-white">{selected.items[1].description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-rows-3 gap-4">
                        <div className="relative">
                            <img src={selected.items[2].image} alt={selected.items[2].subSubHeading} className="w-full h-full object-cover rounded" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
                                <h3 className="text-lg font-bold text-white">{selected.items[2].subSubHeading}</h3>
                                <p className="text-sm text-white">{selected.items[2].description}</p>
                            </div>
                        </div>
                        <div className="relative">
                            <img src={selected.items[3].image} alt={selected.items[3].subSubHeading} className="w-full h-full object-cover rounded" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
                                <h3 className="text-lg font-bold text-white">{selected.items[3].subSubHeading}</h3>
                                <p className="text-sm text-white">{selected.items[3].description}</p>
                            </div>
                        </div>
                        <div className="relative">
                            <img src={selected.items[4].image} alt={selected.items[4].subSubHeading} className="w-full h-full object-cover rounded" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
                                <h3 className="text-lg font-bold text-white">{selected.items[4].subSubHeading}</h3>
                                <p className="text-sm text-white">{selected.items[4].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentLayout;
