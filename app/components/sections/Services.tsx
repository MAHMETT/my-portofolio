import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Services = () => {
    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg">What I offer</h4>
            <h2 className="text-center text-5xl">My Services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
                I am a frontend developer from Jepara, Indonesia with 1 year of
                experience in multiple companies like Tefa Studio.
            </p>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(12.5rem,1fr))] gap-6 my-10">
                {serviceData.map(
                    ({ icon, title, description, link }, index) => (
                        <div
                            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightover hover:-translate-1 duration-500 flex flex-col justify-start"
                            key={index}
                        >
                            <Image src={icon} alt={title} className="" />
                            <div className="flex flex-col justify-between gap-3">
                                <div className="flex-1">
                                    <h3 className="text-lg my-4 text-gray-700 font-bold">
                                        {title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-5">
                                        {description}
                                    </p>
                                </div>
                                <a
                                    href={link}
                                    className="flex items-center gap-2"
                                >
                                    Read more
                                    <Image
                                        src={assets.right_arrow}
                                        alt="right_arrow"
                                        className="w-5 h-3 hover:translate-x-1 duration-300"
                                    />
                                </a>
                            </div>
                        </div>
                    ),
                )}
            </div>
        </div>
    );
};

export default Services;
