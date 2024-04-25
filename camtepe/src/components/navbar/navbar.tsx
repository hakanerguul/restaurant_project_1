'use client'
import { use, useEffect, useState } from "react";
import { Icon } from '@iconify/react';

const Navbar = () => {

    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        function onScroll() {
            setScrolled(window.scrollY > 0);
        }

        document.addEventListener("scroll", onScroll);

        console.log(scrolled);
    }, [scrolled])

    const [mobileOpen , setMobileOpen] = useState<boolean>(false);
    return (
        <>
            <header className={` fixed z-[101] w-full transition-all duration-300 flex justify-center items-center ${scrolled ? "py-2 text-black bg-white" : " py-8 sm:text-white text-black"}`}>
                <nav className="lg:w-2/3 w-full flex justify-between items-center lg:px-0 px-4">
                    <h1 className={`font-bold border-2 py-2 px-8 ${scrolled ? "border-black" : " text-white"}`}>Çamtepe Restoran & Cafe</h1>
                    <ul className="sm:flex hidden justify-between lg:w-1/3 w-2/3">
                        <a href="#" className="hover:cursor-pointer hover:text-yellow-400 transition-all duration-300 select-none py-2 px-4 rounded-md">
                            Anasayfa
                        </a>
                        <a href="#about" className="hover:cursor-pointer hover:text-yellow-400 transition-all duration-300 select-none py-2 px-4 rounded-md">Hakkımızda</a>
                        <a href="#menu" className="hover:cursor-pointer hover:text-yellow-400 transition-all duration-300 select-none py-2 px-4 rounded-md">
                            Menü
                        </a>
                        <a href="#gallery" className="hover:cursor-pointer hover:text-yellow-400 transition-all duration-300 select-none py-2 px-4 rounded-md">
                            Galeri
                        </a>
                        <a href="#rez" className="hover:cursor-pointer hover:text-yellow-400 transition-all duration-300 select-none py-2 px-4 rounded-md">
                            Rezervasyon
                        </a>
                        <a href="#footer" className="hover:cursor-pointer hover:text-yellow-400 transition-all duration-300 select-none py-2 px-4 rounded-md">Neredeyiz?</a>
                    </ul>
                    <button className={`sm:hidden block ${scrolled ? "" : "text-white"}`} onClick={() => {setMobileOpen(true)}}>
                        <Icon icon="material-symbols:menu" width={32} height={32} />
                    </button>
                </nav>
            </header>
            <ul onClick={() => {setMobileOpen(false)}} className={`flex flex-col justify-start gap-y-4 p-8 text-white fixed inset-0 z-[999] sm:hidden bg-gray-950 w-full ${mobileOpen ? "left-0" : "left-[-1000px]"} transition-all duration-300`}>
                <a href="#" onClick={() => {setMobileOpen(false)}} className="hover:cursor-pointer hover:bg-gray-800/70 hover:text-white transition-all duration-300 select-none py-2 px-4 rounded-md">
                    Anasayfa
                </a>
                <a href="#about" onClick={() => {setMobileOpen(false)}} className="hover:cursor-pointer hover:bg-gray-800/70 hover:text-white transition-all duration-300 select-none py-2 px-4 rounded-md">Hakkımızda</a>
                <a href="#menu" className="hover:cursor-pointer hover:bg-gray-800/70 hover:text-white transition-all duration-300 select-none py-2 px-4 rounded-md">
                    Menü
                    
                </a>
                <a href="#rez" onClick={() => {setMobileOpen(false)}} className="hover:cursor-pointer hover:bg-gray-800/70 hover:text-white transition-all duration-300 select-none py-2 px-4 rounded-md">
                    Rezerve
                </a>
                <a href="#footer" className="hover:cursor-pointer hover:bg-gray-800/70 hover:text-white transition-all duration-300 select-none py-2 px-4 rounded-md">Location</a>
            </ul>
        </>
    );
}

export default Navbar