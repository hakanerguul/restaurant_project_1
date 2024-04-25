const Footer = () => {
    return (
        <>
            <footer className="" id="footer">
                <div className="w-full h-[200px] bg-black flex sm:flex-row flex-col">
                    <div className="sm:w-1/2 sm:h-auto w-full h-[100px]  flex flex-col justify-center items-center">
                        <h1 className="text-3xl text-white font-bold">Neredeyiz?</h1>
                        <p className="text-white font-thin">
                        Küçük Çamlıca, Üçpınarlar Cd. No: 3 D:1, 34660 Üsküdar/İstanbul
                        </p>
                    </div>
                    <div className="sm:w-1/2 sm:h-auto w-full h-[100px] flex flex-col justify-center items-center">
                        <h1 className="text-3xl text-white font-bold">Hizmet Saatlerimiz</h1>
                        <p className="text-white font-thin">
                            08:30 - 00:00
                        </p>
                    </div>
                </div>
                <div className="w-full py-4 bg-gray-500 text-white font-thin flex justify-center items-center">
                    &copy; Copyright Hakan & Talha Was Here 2023
                </div>
            </footer>
        </>
    );
}

export default Footer