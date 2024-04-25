"use client";

import { Icon } from "@iconify/react";
import { CSSProperties, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TextField } from "@/components/TextField";

function MenuItem(props: { name: string; img: string; info: string }) {
	return (
		<div className="flex gap-[10px] flex-col items-center w-[300px] h-[400px]">
			<img
				className="rounded-lg object-cover w-full flex-1"
				src={props.img}
			/>
			<h3 className="font-bold">{props.name}</h3>
			<p className="text-center text-[13px]">{props.info}</p>
		</div>
	);
}

function ServiceItem(props: { icon: string | ReactNode; info: string }) {
	return (
		<div className="text-black flex gap-3 flex-col items-center">
			{typeof props.icon === "string" && (
				<Icon className="text-[50px]" icon={props.icon} />
			)}
			{typeof props.icon !== "string" && props.icon}
			<div className="text-center font-bold text-[20px]">
				{props.info}
			</div>
		</div>
	);
}

function WhyUsItem(props: { icon: string; title: string; text: string }) {
	return (
		<div className="text-center w-[300px] flex flex-col items-center">
			<Icon className="text-[80px]" icon={props.icon} />
			<h3 className="font-bold text-[20px]">{props.title}</h3>
			<p className="text-[13px]">{props.text}</p>
		</div>
	);
}

function GalleryItem(props: { style?: CSSProperties; children?: ReactNode }) {
	return (
		<div
			className={twMerge(
				"inline-flex w-full items-center justify-center h-[300px]",
				"hover:cursor-pointer"
			)}
		>
			<img
				className="w-full h-full object-cover rounded-lg shadow-sm"
				src="https://placehold.co/400x400"
			/>
		</div>
	);
}

function Video(props: { url: string; title: string }) {
	return (
		<div className="gap-2 w-full flex-1 flex flex-col items-center h-[300px]">
			<iframe
				className="rounded-lg shadow-lg w-full h-full border-0"
				src={props.url}
				title={props.title}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			/>
			<h3 className="font-bold text-[20px]">{props.title}</h3>
		</div>
	);
}

function ContactInfo(props: { icon: string; title: string; text: string }) {
	return (
		<div className="flex gap-[40px]">
			<div>
				<Icon
					className="text-orange-500 text-[40px]"
					icon={props.icon}
				/>
			</div>
			<div className="flex flex-col">
				<h3 className="text-[23px] font-bold">{props.title}</h3>
				<p>{props.text}</p>
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<main className="flex flex-col w-screen">
			<section
				className={twMerge(
					"h-screen min-h-[700px] w-full relative flex items-center justify-center",
					"sm:h-[700px]"
				)}
			>
				<div className="absolute w-full h-full bg-black/40 z-[-1]" />
				<img
					src="https://placehold.co/500x500"
					className="absolute left-0 top-0 z-[-10] w-full h-full object-cover"
				/>
				<div className={twMerge("max-w-[1200px] flex-1 flex p-[10px]")}>
					<div className="text-white gap-[10px] flex flex-col">
						<h1
							className={twMerge("text-[18px]", "md:text-[21px]")}
						>
							Lorem ipsum dolor sit amet
						</h1>
						<p
							className={twMerge(
								"text-[15px] w-full max-w-[400px]",
								"md:text-[17px]"
							)}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Curabitur condimentum.
						</p>
						<div
							className={twMerge(
								"flex gap-[5px]",
								"md:gap-[20px]"
							)}
						>
							<a
								href="#menu"
								className={twMerge(
									"bg-orange-400 w-fit px-3 py-2 rounded-full",
									"md:px-4 md:py-3",
									"hover:bg-orange-300"
								)}
							>
								Menü
							</a>
							<a
								href="#hakkimizda"
								className={twMerge(
									"bg-orange-400 w-fit px-3 py-2 rounded-full",
									"md:px-4 md:py-3",
									"hover:bg-orange-300"
								)}
							>
								Hakkımızda
							</a>
							<a
								href="#hizmetler"
								className={twMerge(
									"bg-orange-400 w-fit px-3 py-2 rounded-full",
									"md:px-4 md:py-3",
									"hover:bg-orange-300"
								)}
							>
								Hizmetler
							</a>
						</div>
					</div>
				</div>
			</section>
			<div className="h-[100px]" />
			<section className="w-full items-center flex flex-col">
				<h2 id="menu" className="text-[30px] font-bold">
					Menü
				</h2>
				<div
					className={twMerge(
						"grid row-auto gap-[30px] grid-cols-1 grid-ce",
						"md:grid-cols-2",
						"lg:grid-cols-3"
					)}
				>
					<MenuItem
						name="Lorem ipsum"
						img="https://placehold.co/300x300"
						info="Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Curabitur condimentum."
					/>
					<MenuItem
						name="Lorem ipsum"
						img="https://placehold.co/300x300"
						info="Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Curabitur condimentum."
					/>
					<MenuItem
						name="Lorem ipsum"
						img="https://placehold.co/300x300"
						info="Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Curabitur condimentum."
					/>
					<MenuItem
						name="Lorem ipsum"
						img="https://placehold.co/300x300"
						info="Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Curabitur condimentum."
					/>
					<MenuItem
						name="Lorem ipsum"
						img="https://placehold.co/300x300"
						info="Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Curabitur condimentum."
					/>
					<MenuItem
						name="Lorem ipsum"
						img="https://placehold.co/300x300"
						info="Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Curabitur condimentum."
					/>
					<MenuItem
						name="Lorem ipsum"
						img="https://placehold.co/300x300"
						info="Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Curabitur condimentum."
					/>
					<MenuItem
						name="Lorem ipsum"
						img="https://placehold.co/300x300"
						info="Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Curabitur condimentum."
					/>
					<MenuItem
						name="Lorem ipsum"
						img="https://placehold.co/300x300"
						info="Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Curabitur condimentum."
					/>
				</div>
			</section>
			<div className="h-[200px]" />
			<section
				className={twMerge(
					"w-full items-center flex flex-col gap-[30px]"
				)}
			>
				<h2 id="hizmetler" className="font-bold text-[30px]">
					Hizmetler
				</h2>
				<div
					className={twMerge(
						"w-full relative p-[90px]",
						"md:py-[90px] md:px-0"
					)}
				>
					<div className="absolute left-0 top-0 z-[-1] bg-black/10 w-full h-full" />
					<img
						className="absolute left-0 top-0 z-[-2] object-cover w-full h-full"
						src="https://placehold.co/800x800"
					/>

					<div
						className={twMerge(
							"w-full flex flex-col gap-[30px]",
							"md:flex-row md:justify-evenly md:items-center md:gap-[40px]"
						)}
					>
						<ServiceItem
							info="Çeşitli Ödeme İmkanları"
							icon="solar:card-broken"
						/>
						<ServiceItem
							info="Organizasyon"
							icon="material-symbols-light:event-outline"
						/>
						<ServiceItem
							info="Al Götür"
							icon="streamline:coffee-takeaway-cup"
						/>
						<ServiceItem
							info="Nargile"
							icon={
								<img
									className="w-[45px] h-[45px]"
									src="/nargile.png"
								/>
							}
						/>
					</div>
				</div>
			</section>
			<div className="h-[130px]" />
			<section
				id="hakkimizda"
				className={twMerge(
					"w-full flex flex-col items-center gap-[30px] px-4"
				)}
			>
				<h2 className="font-bold text-[30px]">Hakkımızda</h2>
				<img
					className="w-full max-w-[768px] object-cover h-[300px] rounded-lg shadow-lg"
					src="https://placehold.co/1280x960"
				/>
				<p
					className={twMerge(
						"text-[13px] w-full max-w-[768px]",
						"md:text-[16px]"
					)}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					at elementum magna. Cras tristique ultricies neque vel
					pretium. Suspendisse mattis, ipsum vitae porta laoreet,
					tellus massa accumsan leo, quis lobortis felis quam vel
					libero. Vivamus ut ante odio. Quisque pretium tortor eget
					tincidunt sollicitudin. Nullam ultricies semper magna, non
					viverra nibh aliquam sed. Curabitur rhoncus, nunc in
					tincidunt fermentum, libero nisl varius purus, non finibus
					ante erat ac lectus. Ut laoreet consequat pellentesque.
					Praesent facilisis id ipsum sed aliquam. Sed pharetra ut mi
					at euismod. Sed sed felis a mauris porta bibendum. Sed et mi
					tincidunt libero iaculis maximus. Aliquam et sem risus.
					Etiam ut risus semper, malesuada eros eu, elementum ex. Sed
					rutrum neque vitae metus aliquam fringilla. Mauris ac turpis
					id enim dictum imperdiet.
				</p>
			</section>
			<div className="h-[100px]" />
			<section className="w-full items-center flex flex-col gap-[20px]">
				<h2 className="font-bold text-[30px]">Neden Biz?</h2>

				<div className="py-[50px] relative w-full flex flex-col items-center justify-evenly">
					<div className="absolute left-0 top-0 z-[-1] bg-black/10 w-full h-full" />
					<img
						className="absolute left-0 top-0 z-[-2] object-cover w-full h-full"
						src="https://placehold.co/800x800"
					/>
					<div className="flex justify-evenly w-full flex-wrap gap-[10px]">
						<WhyUsItem
							icon="ep:food"
							title="Lorem ipsum"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Sed at elementum magna. Cras tristique
							ultricies neque vel pretium."
						/>
						<WhyUsItem
							icon="ep:food"
							title="Lorem ipsum"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Sed at elementum magna. Cras tristique
							ultricies neque vel pretium."
						/>
						<WhyUsItem
							icon="ep:food"
							title="Lorem ipsum"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Sed at elementum magna. Cras tristique
							ultricies neque vel pretium."
						/>
					</div>
				</div>
			</section>
			<div className="h-[100px]" />
			<section className="w-full flex items-center h-[400px] flex-col gap-[30px]">
				<h2 className="font-bold text-[30px]">Galeri</h2>
				<Slider
					className="w-full slider "
					infinite
					centerMode
					autoplay
					responsive={[
						{
							breakpoint: 768,
							settings: { slidesToShow: 1 },
						},
						{
							breakpoint: 1024,
							settings: { slidesToShow: 2 },
						},
						{
							breakpoint: 1280,
							settings: { slidesToShow: 3 },
						},
						{
							breakpoint: 1450,
							settings: { slidesToShow: 4 },
						},
					]}
					slidesToShow={4}
					speed={1000}
				>
					{[1, 1, 1, 1, 1, 1, 1, 11, 1, 11, 1, 1].map((x, i) => (
						<GalleryItem key={i}></GalleryItem>
					))}
				</Slider>
			</section>
			<div className="h-[100px]" />
			<section className="flex items-center flex-col w-full">
				<h2 className="my-3 font-bold text-[30px]">Videolar</h2>
				<div
					className={twMerge(
						"gap-[40px] px-[5%] max-w-[1200px] w-full grid row-auto grid-cols-1",
						"sm:grid-cols-2"
					)}
				>
					<Video
						url="https://www.youtube.com/embed/4poqZjNTZjI?list=PLcKa-34z76PvI5KvI5S2JGj0RcBVuz3jg"
						title="Lorem ipsum dolor"
					/>
					<Video
						url="https://www.youtube.com/embed/4poqZjNTZjI?list=PLcKa-34z76PvI5KvI5S2JGj0RcBVuz3jg"
						title="Lorem ipsum dolor"
					/>
					<Video
						url="https://www.youtube.com/embed/4poqZjNTZjI?list=PLcKa-34z76PvI5KvI5S2JGj0RcBVuz3jg"
						title="Lorem ipsum dolor"
					/>
					<Video
						url="https://www.youtube.com/embed/4poqZjNTZjI?list=PLcKa-34z76PvI5KvI5S2JGj0RcBVuz3jg"
						title="Lorem ipsum dolor"
					/>
				</div>
			</section>
			<div className="h-[100px]" />
			<section className="flex w-full flex-col gap-3 items-center">
				<h2 className="font-bold text-[30px]">Değerlendirmeler</h2>
				<Icon
					className="text-orange-400 text-[30px]"
					icon="gridicons:quote"
				/>
				<Slider
					className="w-full slider"
					infinite
					autoplay
					autoplaySpeed={5000}
					dots
					slidesToShow={1}
					speed={1000}
				>
					{[
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices sed velit interdum cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In et metus ultrices.",
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices sed velit interdum cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In et metus ultrices.",
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices sed velit interdum cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In et metus ultrices.",
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices sed velit interdum cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In et metus ultrices.",
					].map((x, i) => (
						<div className="w-full h-full" key={i}>
							<div
								className={twMerge(
									"flex flex-col items-center gap-5"
								)}
							>
								<p className="w-full max-w-[400px] text-[15px] text-center">
									{x}
								</p>
								<h4 className="font-bold">Müşteri Adı</h4>
							</div>
						</div>
					))}
				</Slider>
			</section>
			<div className="h-[100px]" />
			<section className="w-full h-[300px]">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.523660226118!2d29.058102376487195!3d41.01379801908437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacefcf9d6eed9%3A0xbcc2531c6f917cdd!2sMesken%20Cafe!5e0!3m2!1str!2str!4v1703795522878!5m2!1str!2str"
					className="w-full h-full border-0"
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</section>
			<footer className="w-full text-white flex-col flex bg-amber-900">
				<div
					className={twMerge(
						"py-5 px-[2%] gap-[30px] justify-between flex-1 flex flex-wrap"
					)}
				>
					<div className="w-[200px] flex gap-2 flex-col">
						<h4 className="font-bold mb-2">Mesken Kafe</h4>
						<a href="#">Ana Sayfa</a>
						<a href="#">Menü</a>
						<a href="#">Hakkımızda</a>
						<a href="#">Videolar</a>
					</div>
					<div className="w-[300px] flex gap-2 flex-col">
						<h4 className="font-bold mb-2">İletişim</h4>
						<div className="flex gap-3">
							<div>
								<Icon fontSize={20} icon="gg:pin" />
							</div>
							<div>
								Küçük çamlica mahallesi Üçpınarlar caddesi,
								Kapıağzı Sk. No:11, 34696 Üsküdar/İstanbul
							</div>
						</div>
						<div className="flex gap-3">
							<div>
								<Icon fontSize={20} icon="ic:outline-email" />
							</div>
							<div>info@info.com</div>
						</div>
						<div className="flex gap-3">
							<div>
								<Icon
									fontSize={20}
									icon="icon-park-outline:phone-one"
								/>
							</div>
							<div>000 000 00 00</div>
						</div>
					</div>
					<div className="w-[300px] flex-col flex gap-2">
						<h4 className="font-bold mb-2">Diğer Platformlar</h4>
						<div className="flex gap-3">
							<div className="flex items-center gap-2">
								<a
									className="flex gap-2 text-gray-200 rounded-full p-2 bg-white hover:bg-gray-300"
									href="#"
								>
									<Icon
										className="text-black"
										icon="jam:facebook"
									/>
								</a>
							</div>
							<div className="flex items-center gap-2">
								<a
									className="flex gap-2 text-gray-200 rounded-full p-2 bg-white hover:bg-gray-300"
									href="#"
								>
									<Icon
										className="text-black"
										icon="ri:instagram-line"
									/>
								</a>
							</div>
							<div className="flex items-center gap-2">
								<a
									className="flex gap-2 text-gray-200 rounded-full p-2 bg-white hover:bg-gray-300"
									href="#"
								>
									<Icon
										className="text-black"
										icon="ri:twitter-fill"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div
					className={twMerge(
						"w-full bg-amber-950 p-2 flex justify-between flex-col text-[13px]",
						"md:flex-row md:text-[18px]"
					)}
				>
					<div className="flex gap-2">
						<div>DİLİ DEĞİŞTİR:</div>
						<a href="#">Türkçe</a>
						<a href="#">İngilizce</a>
					</div>
					<div>® 2023 MESKEN KAFE, TÜM HAKLARI SAKLIDIR</div>
				</div>
			</footer>
		</main>
	);
}
