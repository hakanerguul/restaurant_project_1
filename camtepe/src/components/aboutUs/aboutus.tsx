import {Pinyon_Script} from 'next/font/google'
import hakkimizda from '../../../assets/hakkimizda.jpeg'
import Image from 'next/image'

const pinyon = Pinyon_Script({ subsets: ['latin'] , weight : '400'})

const AboutUs = () => {
    return (
        <>
            <section className="flex sm:flex-row flex-col" id="about">
                <div className="h-[500px] sm:w-1/2 w-full flex flex-col justify-center items-center">
                    <span className={`text-5xl font-bold -mb-4 text-yellow-500 transition-all duration-300 ${pinyon.className}`}></span>
                    <span className='mb-4 text-black text-3xl font-bold transition-all duration-300'>Hakkımızda</span>
                    <p className="sm:w-2/3 w-11/12 text-center">Çamtepe Restoran & Cafe, İstanbul &apos; un göz kamaştıran manzarası eşliğinde, sıcak ve samimi bir ortam sunan bir mekandır. Günün her saati, arkadaşlarınızla veya ailenizle birlikte gelip keyifli vakit geçirebileceğiniz bir yer olarak uygundur. </p>
                </div>
                <div className="h-[500px] sm:w-1/2 w-full relative">
                    <img src={hakkimizda.src} className=" object-cover absolute w-[90%] h-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="" />
                </div>
            </section>
        </>
    );
}

export default AboutUs