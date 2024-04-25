import {Pinyon_Script} from 'next/font/google'
import yemek1 from '../../../assets/yemek1.jpg'
import yemek2 from '../../../assets/yemek2.jpg'
import yemek3 from '../../../assets/yemek3.jpg'
import yemek4 from '../../../assets/yemek4.jpg'
import yemek5 from '../../../assets/yemek5.jpg'
import yemek6 from '../../../assets/yemek6.jpg'
import Image from 'next/image'

const pinyon = Pinyon_Script({ subsets: ['latin'] , weight : '400'})

const MenuItem = (props : {url : string , header : string , text:string , left? : boolean}) => {
    return (
        <div className={`flex ${props.left ? 'sm:flex-row flex-col' : 'sm:flex-row-reverse'} sm:flex-row flex-col`}>
            <div className='h-[300px] flex-[0.5]'>
                <img className="object-cover h-full w-full" src={props.url} alt=""/>
            </div>
            <div className="flex-[0.5] bg-white h-[300px] flex flex-col justify-center items-center text-center">
                <h1 className="text-xl font-bold ">Food1</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, tenetur.</p>
            </div>
        </div>
    );
}

const Menu = () => {
    return (
        <>
            <section className="" id="menu">
                <div className="relative h-[500px] w-full bg-[url('https://picsum.photos/1920/1920?random=1')] bg-fixed">
                    <div className=" absolute bg-gray-950/40 inset-0 flex flex-col justify-center items-center">
                        <span className={`text-6xl font-bold -mb-7 text-yellow-500 transition-all duration-300 ${pinyon.className}`}>Çamtepe</span>
                        <span className='mb-4 text-6xl font-bold transition-all duration-300 text-white'>Menü</span>
                    </div>
                </div>
                <div className="bg-gray-200/40 relative sm:p-[24em] py-[76em]">
                    <div className="absolute z-[100] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-2/3 w-full mx-auto grid sm:grid-rows-3 sm:grid-cols-2 grid-cols-1 grid-rows-6 shadow-2xl shadow-black">
                        <MenuItem left url={yemek1.src} header="Food1" text="lorem lorem lorem lorem lorem lorem"/>
                        <MenuItem left url={yemek2.src} header="Food1" text="lorem lorem lorem lorem lorem lorem"/>
                        <MenuItem url={yemek3.src} header="Food1" text="lorem lorem lorem lorem lorem lorem"/>
                        <MenuItem url={yemek4.src} header="Food1" text="lorem lorem lorem lorem lorem lorem"/>
                        <MenuItem left url={yemek5.src} header="Food1" text="lorem lorem lorem lorem lorem lorem"/>
                        <MenuItem left url={yemek6.src} header="Food1" text="lorem lorem lorem lorem lorem lorem"/>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Menu