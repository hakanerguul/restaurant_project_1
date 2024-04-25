import { Pinyon_Script } from 'next/font/google'

const pinyon = Pinyon_Script({ subsets: ['latin'], weight: '400' })

const Rez = () => {
    return (
        <>
            <section className=" w-full min-h-[600px] flex flex-col justify-center items-center gap-x-4 bg-white" id="rez">
                <div className="relative h-[300px] w-full bg-[url('https://picsum.photos/1920/1920?random=2')] bg-fixed ">
                    <div className=" absolute bg-gray-950/40 inset-0 flex flex-col justify-center items-center">
                        <span className={`text-6xl font-bold -mb-7 text-yellow-500 transition-all duration-300 ${pinyon.className}`}>Çamtepe</span>
                        <span className='mb-4 text-6xl font-bold transition-all duration-300 text-white'>Rezarvasyon Oluştur</span>
                    </div>
                </div>
                <div className='w-full flex lg:flex-row flex-col justify-center items-center gap-x-4'>
                    <div className="flex sm:flex-row flex-col justify-center items-center gap-x-4 h-[500px]">
                        <div className="flex flex-col  sm:w-auto w-full">
                            <label htmlFor="" className=" font-thin">Kişi Sayısı</label>
                            <select name="" id="" className="sm:w-[300px] w-full bg-white border-2 rounded-md py-2 mb-4">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                                <option value="">6</option>
                                <option value="">7</option>
                                <option value="">8</option>
                                <option value="">9</option>
                                <option value="">10</option>
                            </select>
                            <label htmlFor="" className=" font-thin">İsim</label>
                            <input type="text" className="sm:w-[300px] w-full bg-white border-2 rounded-md py-2" />
                        </div>
                        <div className="flex flex-col  sm:w-auto w-full">
                            <label htmlFor="" className=" font-thin">Tarih</label>
                            <input type="date" name="" id="" className="sm:w-[300px] w-full bg-white border-2 rounded-md py-2 mb-4" />
                            <label htmlFor="" className=" font-thin">Mail Adresi</label>
                            <input type="email" className="sm:w-[300px] w-full bg-white border-2 rounded-md py-2" />
                        </div>
                        <div className="flex flex-col  sm:w-auto w-full">
                            <label htmlFor="" className=" font-thin">Telefon Numarası</label>
                            <input type="text" className="sm:w-[300px] w-full bg-white border-2 rounded-md py-2 mb-10" />
                            <button className="sm:w-[300px] py-2 rounded-md bg-yellow-500 text-white">Rezervasyon Oluştur</button>
                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.4340932888003!2d29.056202577517734!3d41.01575797134958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac80f280885c3%3A0x80939f9a9228ed8e!2s%C3%87AMTEPE%20RESTORAN%20%26%20KAFE!5e0!3m2!1str!2str!4v1710362374399!5m2!1str!2str" width="600" height="450" style={{border:0}}  loading="lazy" className='rounded-xl shadow-md shadow-black'></iframe>
                </div>

            </section>
        </>
    );
}

export default Rez