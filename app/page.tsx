'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
    const [selectedCard, setSelectedCard] = useState<number | null>(null);

    const handleCardClick = (cardNumber: number) => {
        setSelectedCard(selectedCard === cardNumber ? null : cardNumber);
    };

    return (
        <div
            className="w-full min-h-screen flex flex-col bg-white transition-colors duration-200"
            data-oid="dlajs43"
        >
            {/* Header Section - Dark Green */}
            <div
                className="w-full bg-green-800 rounded-lg mx-4 mt-4 mb-4 flex items-center justify-center h-[357px]"
                data-oid="header-section"
                key="olk-H48r"
            >
                <div className="text-center text-white p-4" data-oid="f:z4z5z">
                    <h1 className="text-2xl md:text-3xl font-semibold mb-2" data-oid="m84_j_e">
                        Video de introducción
                    </h1>
                    <p className="text-lg opacity-90" data-oid="dm9onyr">
                        letras por encima del video
                    </p>
                </div>
            </div>

            {/* Main Content Section - Light Green */}
            <div
                className="flex-1 bg-green-200 rounded-lg mx-4 mb-4 min-h-96 flex items-center justify-center"
                data-oid="main-content"
                key="olk-JoGr"
            >
                <div className="text-center text-green-900 p-4" data-oid="dn562an">
                    <h1
                        className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight"
                        data-oid="gf9njfp"
                    >
                        Aquí iria quienes somos
                    </h1>
                    <p className="text-xl md:text-2xl" data-oid="-xuv:yh">
                        y poner mas texto en este mismo formato de tamaño
                    </p>
                </div>
            </div>

            {/* Gallery Title Section */}
            <div
                className="px-4 mb-6 flex items-center justify-center"
                data-oid="gallery-title-section"
                key="olk-gallery-title"
            >
                <h2
                    className="text-3xl md:text-4xl font-bold text-green-800 text-center font-aboreto"
                    data-oid="4dtduxe"
                >
                    Galería de arte
                </h2>
            </div>

            {/* Grid Section */}
            <div
                className="px-4 pb-4 h-[306px] grid grid-cols-[repeat(3,_1fr)] grid-rows-[repeat(2,_1fr)] pt-[16px] gap-[20px]"
                data-oid="0j_esg_"
                key="olk-tusw"
            >
                <div
                    className="bg-white border-4 border-green-800 rounded-lg flex items-center justify-center h-[188px] 
                             transition-all duration-300 ease-in-out transform 
                             hover:scale-105 hover:shadow-2xl hover:shadow-green-800/30 
                             hover:border-green-600
                             cursor-[url('/cursor.svg'),_pointer]
                             active:scale-95 relative overflow-hidden"
                    data-oid="6bange7"
                    key="olk-tSUE"
                    onClick={() => handleCardClick(1)}
                >
                    <Image
                        src="/images/d-1.jpg"
                        alt="Photo 1"
                        fill
                        className="object-cover rounded-md"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-oid="ispetdl"
                    />

                    <div
                        className="absolute inset-0 bg-gradient-to-br from-transparent to-green-900/40 opacity-0 hover:opacity-100 transition-opacity duration-300"
                        data-oid="4sdjjqk"
                    ></div>
                    {selectedCard === 1 && (
                        <div
                            className="absolute inset-2 bg-green-900/80 rounded border border-green-400 flex items-center justify-center z-20"
                            data-oid="4ncn0ah"
                        >
                            <span className="text-xs text-white font-medium" data-oid="kpwgj73">
                                Photo Gallery 1 - Click to close
                            </span>
                        </div>
                    )}
                </div>
                <div
                    className="bg-white border-4 border-green-800 rounded-lg flex items-center justify-center h-[188px]
                             transition-all duration-300 ease-in-out transform 
                             hover:scale-105 hover:shadow-2xl hover:shadow-green-800/30 
                             hover:border-green-600
                             cursor-[url('/cursor.svg'),_pointer]
                             active:scale-95 relative overflow-hidden"
                    data-oid="crb9viq"
                    key="olk-sm-I"
                    onClick={() => handleCardClick(2)}
                >
                    <Image
                        src="/images/d-2.jpg"
                        alt="Photo 2"
                        fill
                        className="object-cover rounded-md relative top-auto right-auto bottom-auto left-auto h-[fit-content] w-[200px]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-oid="of0lg:j"
                    />

                    <div
                        className="absolute inset-0 bg-gradient-to-br from-transparent to-green-900/40 opacity-0 hover:opacity-100 transition-opacity duration-300"
                        data-oid="y8n.63w"
                    ></div>
                    {selectedCard === 2 && (
                        <div
                            className="absolute inset-2 bg-green-900/80 rounded border border-green-400 flex items-center justify-center z-20"
                            data-oid="5jtco2_"
                        >
                            <span className="text-xs text-white font-medium" data-oid="bquo2ie">
                                Photo Gallery 2 - Click to close
                            </span>
                        </div>
                    )}
                </div>
                <div
                    className="bg-white border-4 border-green-800 rounded-lg flex items-center justify-center h-[188px]
                             transition-all duration-300 ease-in-out transform 
                             hover:scale-105 hover:shadow-2xl hover:shadow-green-800/30 
                             hover:border-green-600
                             cursor-[url('/cursor.svg'),_pointer]
                             active:scale-95 relative overflow-hidden"
                    data-oid="q-s44-n"
                    key="olk-8F9j"
                    onClick={() => handleCardClick(3)}
                >
                    <Image
                        src="/images/d-3.jpg"
                        alt="Photo 3"
                        fill
                        className="object-cover rounded-md"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-oid="0em:2nh"
                    />

                    <div
                        className="absolute inset-0 bg-gradient-to-br from-transparent to-green-900/40 opacity-0 hover:opacity-100 transition-opacity duration-300"
                        data-oid="69j1qrm"
                    ></div>
                    {selectedCard === 3 && (
                        <div
                            className="absolute inset-2 bg-green-900/80 rounded border border-green-400 flex items-center justify-center z-20"
                            data-oid="a:9t-ly"
                        >
                            <span className="text-xs text-white font-medium" data-oid="9h4z67g">
                                Photo Gallery 3 - Click to close
                            </span>
                        </div>
                    )}
                </div>
                <div
                    className="bg-white border-4 border-green-800 rounded-lg flex items-center justify-center h-[188px]
                             transition-all duration-300 ease-in-out transform 
                             hover:scale-105 hover:shadow-2xl hover:shadow-green-800/30 
                             hover:border-green-600
                             cursor-[url('/cursor.svg'),_pointer]
                             active:scale-95 relative overflow-hidden"
                    data-oid="kmvdvsp"
                    key="olk-jpkn"
                    onClick={() => handleCardClick(4)}
                >
                    <Image
                        src="/images/d-4.jpg"
                        alt="Photo 4"
                        fill
                        className="object-cover rounded-md"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-oid="n4vzvtw"
                    />

                    <div
                        className="absolute inset-0 bg-gradient-to-br from-transparent to-green-900/40 opacity-0 hover:opacity-100 transition-opacity duration-300"
                        data-oid="dkp3vlj"
                    ></div>
                    {selectedCard === 4 && (
                        <div
                            className="absolute inset-2 bg-green-900/80 rounded border border-green-400 flex items-center justify-center z-20"
                            data-oid="rvmej39"
                        >
                            <span className="text-xs text-white font-medium" data-oid=".3cpat7">
                                Photo Gallery 4 - Click to close
                            </span>
                        </div>
                    )}
                </div>
                <div
                    className="bg-white border-4 border-green-800 rounded-lg flex items-center justify-center h-[188px]
                             transition-all duration-300 ease-in-out transform 
                             hover:scale-105 hover:shadow-2xl hover:shadow-green-800/30 
                             hover:border-green-600
                             cursor-[url('/cursor.svg'),_pointer]
                             active:scale-95 relative overflow-hidden"
                    data-oid="5th-card"
                    key="olk-5th"
                    onClick={() => handleCardClick(5)}
                >
                    <Image
                        src="/images/d-5.jpg"
                        alt="Photo 5"
                        fill
                        className="object-cover rounded-md"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-oid=".sajg0k"
                    />

                    <div
                        className="absolute inset-0 bg-gradient-to-br from-transparent to-green-900/40 opacity-0 hover:opacity-100 transition-opacity duration-300"
                        data-oid="kiw-f19"
                    ></div>
                    {selectedCard === 5 && (
                        <div
                            className="absolute inset-2 bg-green-900/80 rounded border border-green-400 flex items-center justify-center z-20"
                            data-oid="qbdle04"
                        >
                            <span className="text-xs text-white font-medium" data-oid="lny5g5m">
                                Photo Gallery 5 - Click to close
                            </span>
                        </div>
                    )}
                </div>
                <div
                    className="bg-white border-4 border-green-800 rounded-lg flex items-center justify-center h-[188px]
                             transition-all duration-300 ease-in-out transform 
                             hover:scale-105 hover:shadow-2xl hover:shadow-green-800/30 
                             hover:border-green-600
                             cursor-[url('/cursor.svg'),_pointer]
                             active:scale-95 relative overflow-hidden"
                    data-oid="6th-card"
                    key="olk-6th"
                    onClick={() => handleCardClick(6)}
                >
                    <Image
                        src="/images/d-6.jpg"
                        alt="Photo 6"
                        fill
                        className="object-cover rounded-md"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-oid="x7y_-x3"
                    />

                    <div
                        className="absolute inset-0 bg-gradient-to-br from-transparent to-green-900/40 opacity-0 hover:opacity-100 transition-opacity duration-300"
                        data-oid="j46yi-f"
                    ></div>
                    {selectedCard === 6 && (
                        <div
                            className="absolute inset-2 bg-green-900/80 rounded border border-green-400 flex items-center justify-center z-20"
                            data-oid="3j4zzv1"
                        >
                            <span className="text-xs text-white font-medium" data-oid="cxnf227">
                                Photo Gallery 6 - Click to close
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
