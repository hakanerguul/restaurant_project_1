"use client";

import { Icon } from "@iconify/react";
import { Montserrat, Carattere, Roboto_Condensed } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });
const carattere = Carattere({ subsets: ["latin"], weight: "400" });
const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

export function Navbar() {
	const [scrolled, setScrolled] = useState<boolean>(false);
	const [menu, setMenu] = useState<boolean>(false);
	const menuRef = useRef<HTMLUListElement | null>(null);

	useEffect(() => {
		function onScroll() {
			setScrolled(window.scrollY > 0);
		}

		function onClick(e: MouseEvent) {
			if (menu && !menuRef.current?.contains(e.target as Node)) {
				setMenu(false);
			}
		}

		document.addEventListener("scroll", onScroll);
		document.addEventListener("click", onClick);
		return () => {
			document.removeEventListener("scroll", onScroll);
			document.removeEventListener("click", onClick);
		};
	}, [menu]);

	return (
		<header className={twMerge("w-screen z-10 fixed", "md:absolute")}>
			<div
				className={twMerge(
					"w-full justify-center text-white hidden",
					"md:flex"
				)}
			>
				<div
					className={twMerge(
						"w-full flex justify-between",
						"md:w-[700px]",
						"lg:w-[1200px]"
					)}
				>
					<div className="flex items-center gap-[50px]">
						<a
							href="#"
							className="hover:text-gray-500 flex items-center gap-[5px]"
						>
							<Icon
								className="text-[18px]"
								icon="ph:map-pin-fill"
							/>
							<div>Üsküdar</div>
						</a>

						<ul className="text-[20px] flex gap-[10px]">
							<li>
								<a href="#" className="hover:text-gray-500">
									<Icon icon="ant-design:facebook-filled" />
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-gray-500">
									<Icon icon="ri:instagram-fill" />
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-gray-500">
									<Icon icon="pajamas:twitter" />
								</a>
							</li>
						</ul>
					</div>
					<div
						className={twMerge(
							"text-white flex items-center gap-[20px]",
							montserrat.className
						)}
					>
						<a
							href="tel:+000000000000"
							className="hover:text-gray-500 flex items-center gap-2"
						>
							<Icon icon="ic:baseline-phone" />
							<div>+00 000 000 00 00</div>
						</a>
						<a
							href="emailto:>info@info.com"
							className="hover:text-gray-500 flex items-center gap-2"
						>
							<Icon icon="ic:email" />
							<div>info@info.com</div>
						</a>
					</div>
				</div>
			</div>
			<nav
				className={twMerge(
					"text-white w-full transition-all duration-200 flex items-center justify-between",
					scrolled || menu
						? "bg-orange-700/90 h-[60px]"
						: "h-[80px] bg-transparent",
					"md:h-[80px] md:bg-transparent",
					"md:px-[10%]"
				)}
			>
				<div
					className={twMerge(
						"flex gap-3 items-center w-[180px] text-[24px] m-3",
						"lg:text-[30px] lg:w-[200px]",
						"xl:text-[35px] xl:w-[220px]"
					)}
				>
					<img src="https://placehold.co/40x40" />
					<div className={twMerge(carattere.className)}>
						Mesken Kafe
					</div>
				</div>
				<Icon
					onClick={() => setMenu((old) => !old)}
					className={twMerge(
						"text-[30px] block m-3",
						"hover:cursor-pointer",
						"md:hidden"
					)}
					icon="ic:outline-menu"
				/>
				<ul
					ref={menuRef}
					className={twMerge(
						"transition-all duration-200 px-[30px] items-center gap-[30px] navbar-links uppercase text-[20px] absolute overflow-hidden",
						"md:static md:h-fit",
						menu
							? "flex top-[60px] bg-orange-800/50 flex-col w-full items-center"
							: "h-0",
						"md:flex",
						robotoCondensed.className
					)}
				>
					<li>
						<a href="#menu">Menü</a>
					</li>
					<li>
						<a href="#hizmetler">Hizmetler</a>
					</li>
					<li>
						<a href="#hakkimizda">Hakkımızda</a>
					</li>
					<li>
						<a href="#galeri">Galeri</a>
					</li>
				</ul>
			</nav>
			{/* <div
				className={twMerge(
					"w-full justify-between flex text-white",
					"2xl:w-[1200px]"
				)}
			>
				<div className="flex items-center gap-[50px]">
					<a
						href="#"
						className="hover:text-gray-500 flex items-center gap-[5px]"
					>
						<Icon className="text-[18px]" icon="ph:map-pin-fill" />
						<div>Üsküdar</div>
					</a>

					<ul className="text-[20px] flex gap-[10px]">
						<li>
							<a href="#" className="hover:text-gray-500">
								<Icon icon="ant-design:facebook-filled" />
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-500">
								<Icon icon="ri:instagram-fill" />
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-500">
								<Icon icon="pajamas:twitter" />
							</a>
						</li>
					</ul>
				</div>
				<div
					className={twMerge(
						"text-white flex items-center gap-[20px]",
						montserrat.className
					)}
				>
					<a
						href="tel:+000000000000"
						className="hover:text-gray-500 flex items-center gap-2"
					>
						<Icon icon="ic:baseline-phone" />
						<div>+00 000 000 00 00</div>
					</a>
					<a
						href="emailto:>info@info.com"
						className="hover:text-gray-500 flex items-center gap-2"
					>
						<Icon icon="ic:email" />
						<div>info@info.com</div>
					</a>
				</div>
			</div> */}
			{/* <nav
				className={twMerge(
					"w-full items-center justify-between flex text-white",
					"2xl:w-[1200px]"
				)}
			>
				<div
					className={twMerge(
						"flex items-center gap-[30px] text-[35px]",
						carattere.className
					)}
				>
					<img src="https://placehold.co/80x80" />
					Mesken Kafe
				</div>
				<Icon
					onClick={() => setMenu((old) => !old)}
					className={twMerge(
						"text-[30px] block",
						"hover:cursor-pointer"
					)}
					icon="ic:outline-menu"
				/>
				<ul
					className={twMerge(
						"flex gap-[40px] text-[19px] uppercase navbar-links",

						"transition-all duration-200 items-center gap-[30px] absolute overflow-hidden",
						"md:static md:h-fit",
						menu
							? "flex top-[60px] bg-black/50 flex-col w-full items-center"
							: "h-0",
						"md:flex",
						robotoCondensed.className
					)}
				>
				
				</ul>
			</nav> */}
		</header>
	);
}

// https://placehold.co/600x400
