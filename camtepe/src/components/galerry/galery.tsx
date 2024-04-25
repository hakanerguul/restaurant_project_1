import {Pinyon_Script} from 'next/font/google'
import galeri1 from '../../../assets/galeri1.jpg'
import galeri2 from '../../../assets/galeri2.jpg'
import galeri3 from '../../../assets/galeri3.jpg'
import galeri4 from '../../../assets/galeri4.jpg'
import galeri5 from '../../../assets/galeri5.jpg'
import galeri6 from '../../../assets/galeri6.jpg'
import galeri7 from '../../../assets/galeri7.jpg'
import galeri8 from '../../../assets/galeri8.jpg'
import Image from 'next/image'

const pinyon = Pinyon_Script({ subsets: ['latin'] , weight : '400'})

const MenuItem = (props : {url : string , url2 : string , text:string , left? : boolean}) => {
    return (
        <div className={`flex sm:flex-row flex-col gap-2 m-1`}>
            <div className='h-[300px] flex-[0.5] flex gap-'>
                <img className=" object-cover h-full w-full rounded-md" src={props.url} alt="" />
            </div>
            <div className='h-[300px] flex-[0.5] flex gap-2'>
                <img className=" object-cover h-full w-full rounded-md" src={props.url2} alt="" />
            </div>
        </div>
    );
}

const Gallery = () => {
    return (
        <>
            <section className="" id="gallery">
                <div className="relative h-[500px] w-full bg-[url('https://picsum.photos/1920/1920?random=4')] bg-fixed">
                    <div className=" absolute bg-gray-950/40 inset-0 flex flex-col justify-center items-center">
                        <span className={`text-6xl font-bold -mb-7 text-yellow-500 transition-all duration-300 ${pinyon.className}`}>Çamtepe</span>
                        <span className='mb-4 text-6xl font-bold transition-all duration-300 text-white'>Galeri</span>
                    </div>
                </div>
                <div className="bg-gray-200/40 relative sm:p-[16em] py-[56em]">
                    <div className="absolute z-[100] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-2/3 w-full mx-auto grid sm:grid-rows-2 sm:grid-cols-2 grid-cols-1 grid-rows-4 shadow-2xl shadow-black">
                        <MenuItem left url={galeri1.src} url2={galeri3.src} text="lorem lorem lorem lorem lorem lorem"/>
                        <MenuItem left url={galeri2.src} url2={galeri4.src} text="lorem lorem lorem lorem lorem lorem"/>
                        <MenuItem url={galeri5.src} url2={galeri7.src} text="lorem lorem lorem lorem lorem lorem"/>
                        <MenuItem url={galeri6.src} url2={galeri8.src} text="lorem lorem lorem lorem lorem lorem"/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Gallery