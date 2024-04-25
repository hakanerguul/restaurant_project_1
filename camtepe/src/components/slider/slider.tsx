'use client'
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { Pinyon_Script } from 'next/font/google'
import slider1 from '../../../assets/slider1.jpg'
import slider2 from '../../../assets/slider2.jpg'
import slider3 from '../../../assets/slider3.jpg'
import React from 'react';

const pinyon = Pinyon_Script({ subsets: ['latin'], weight: '400' })


interface sliderElement {
    url: string,
    headerText: string,
    contentText: string,
}

const SliderComp = () => {

    const sliderElementArray: sliderElement[] = [
        {
            url: slider1.src,
            headerText: "Çamtepe",
            contentText: "Lezzetin"
        },
        {
            url: slider2.src,
            headerText: "Çamtepe",
            contentText: "ve Manzaranın"
        },
        {
            url: slider3.src,
            headerText: "Çamtepe",
            contentText: "Buluştuğu Nokta"
        },

    ]

    const [activeSlide, setActiveSlide] = useState<number>(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (activeSlide + 1 > sliderElementArray.length - 1)
                setActiveSlide(0);
            else
                setActiveSlide(activeSlide + 1);
        }, 3000)

        return () => clearInterval(interval)
    }, [activeSlide])

    return (
        <>
            <div className="w-full h-[750px] relative group">
                <button onClick={() => {
                    if (activeSlide - 1 < 0)
                        setActiveSlide(sliderElementArray.length - 1);
                    else
                        setActiveSlide(activeSlide - 1);
                }} className="absolute left-0 top-1/2 z-10 -translate-y-1/2 p-4 pl-6 bg-gray-950/50 group-hover:opacity-100 sm:opacity-0 opacity-100 transition-all duration-300">
                    <Icon icon="ep:arrow-left-bold" className='text-white' width={32} height={32} />
                </button>
                <button onClick={() => {
                    if (activeSlide + 1 > sliderElementArray.length - 1)
                        setActiveSlide(0);
                    else
                        setActiveSlide(activeSlide + 1);
                }} className="absolute right-0 top-1/2 z-10 -translate-y-1/2 p-4 pr-6 bg-gray-950/50 group-hover:opacity-100 sm:opacity-0 opacity-100 transition-all duration-300">
                    <Icon icon="ep:arrow-right-bold" className='text-white' width={32} height={32} />
                </button>
                <div className='absolute left-1/2 -translate-x-1/2 bottom-8 flex justify-center items-center py-2 px-4 gap-x-2'>
                    {
                        sliderElementArray.map((_element, key) => (
                            <span key={key} className={`border-2 p-2 rounded-full ${activeSlide === key ? "bg-white" : "bg-white/20"}`}></span>

                        ))
                    }
                </div>

                <div className={`flex flex-col justify-center items-center w-full h-[750px] transition-all duration-300 relative`}>
                    <img src={sliderElementArray[activeSlide].url} alt="" className='absolute inset-0 w-full h-full -z-10 object-cover' />
                    <span className={`text-6xl font-bold -mb-5 text-yellow-500 transition-all duration-300 ${pinyon.className}`}>{sliderElementArray[activeSlide].headerText}</span>
                    <span className='text-white text-7xl font-bold transition-all duration-300'>{sliderElementArray[activeSlide].contentText}</span>
                </div>
            </div>
        </>
    );
}

export default SliderComp