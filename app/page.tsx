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
            className="w-full min-h-screen flex flex-col bg-white dark:bg-black transition-colors duration-200"
            data-oid="dlajs43"
        >
            {/* Header Section */}
            <div
                className="w-full bg-gray-600 dark:bg-gray-700 rounded-lg mx-4 mt-4 mb-4 flex items-center justify-center h-[357px]"
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

            {/* Main Content Section */}
            <div
                className="flex-1 bg-gray-300 dark:bg-gray-400 rounded-lg mx-4 mb-4 min-h-96 flex items-center justify-center"
                data-oid="main-content"
                key="olk-JoGr"
            >
                <div
                    className="text-center text-gray-800 dark:text-gray-900 p-4"
                    data-oid="dn562an"
                >
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

            {/* Grid Section */}
            <div
                className="px-4 pb-4 h-[306px] grid grid-cols-[repeat(3,_1fr)] grid-rows-[repeat(2,_1fr)] pt-[16px] gap-[20px]"
                data-oid="0j_esg_"
                key="olk-tusw"
            >
                <div
                    className="bg-gray-600 dark:bg-gray-700 rounded-lg flex items-center justify-center h-[188px] 
                             transition-all duration-300 ease-in-out transform 
                             hover:scale-105 hover:shadow-2xl hover:shadow-black/30 
                             hover:bg-gray-500 dark:hover:bg-gray-600
                             cursor-[url('/cursor.svg'),_pointer]
                             active:scale-95 relative overflow-hidden"
                    data-oid="6bange7"
                    key="olk-tSUE"
                    onClick={() => handleCardClick(1)}
                >
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
                        data-oid="4sdjjqk"
                    ></div>
                    <span
                        className="text-white text-sm font-medium relative z-10"
                        data-oid="6ayah2g"
                    >
                        {selectedCard === 1 ? 'Photo Gallery 1 - Click to close' : 'Photo 1'}
                    </span>
                    {selectedCard === 1 && (
                        <div
                            className="absolute inset-2 bg-white/10 rounded border border-white/30 flex items-center justify-center"
                            data-oid="4ncn0ah"
                        >
                            <span className="text-xs text-white/80" data-oid="kpwgj73">
                                Photo content here
                            </span>
                        </div>
                    )}
                </div>
                <div
                    className="bg-gray-600 dark:bg-gray-700 rounded-lg flex items-center justify-center h-[188px]
                             transition-all duration-300 ease-in-out transform 
                             hover:scale-105 hover:shadow-2xl hover:shadow-black/30 
                             hover:bg-gray-500 dark:hover:bg-gray-600
                             cursor-[url('/cursor.svg'),_pointer]
                             active:scale-95 relative overflow-hidden"
                    data-oid="crb9viq"
                    key="olk-sm-I"
                    onClick={() => handleCardClick(2)}
                >
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
                        data-oid="y8n.63w"
                    ></div>
                    <span
                        className="text-white text-sm font-medium relative z-10"
                        data-oid="2px9jl9"
                    >
                        {selectedCard === 2 ? 'Photo Gallery 2 - Click to close' : 'Photo 2'}
                    </span>
                    {selectedCard === 2 && (
                        <div
                            className="absolute inset-2 bg-white/10 rounded border border-white/30 flex items-center justify-center"
                            data-oid="5jtco2_"
                        >
                            <span className="text-xs text-white/80" data-oid="bquo2ie">
                                Photo content here
                            </span>
                        </div>
                    )}
                </div>
                <div
                    className="bg-gray-600 dark:bg-gray-700 rounded-lg flex items-center justify-center h-[188px]
                             transition-all duration-300 ease-in-out transform 
                             hover:scale-105 hover:shadow-2xl hover:shadow-black/30 
                             hover:bg-gray-500 dark:hover:bg-gray-600
                             cursor-[url('/cursor.svg'),_pointer]
                             active:scale-95 relative overflow-hidden"
                    data-oid="q-s44-n"
                    key="olk-8F9j"
                    onClick={() => handleCardClick(3)}
                >
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
                        data-oid="69j1qrm"
                    ></div>
                    <span
                        className="text-white text-sm font-medium relative z-10"
                        data-oid="cqm8g4r"
                    >
                        {selectedCard === 3 ? 'Photo Gallery 3 - Click to close' : 'Photo 3'}
                    </span>
                    {selectedCard === 3 && (
                        <div
                            className="absolute inset-2 bg-white/10 rounded border border-white/30 flex items-center justify-center"
                            data-oid="a:9t-ly"
                        >
                            <span className="text-xs text-white/80" data-oid="9h4z67g">
                                Photo content here
                            </span>
                        </div>
                    )}
                </div>
                <div
                    className="bg-gray-600 dark:bg-gray-700 rounded-lg flex items-center justify-center h-[188px]
                             transition-all duration-300 ease-in-out transform 
                             hover:scale-105 hover:shadow-2xl hover:shadow-black/30 
                             hover:bg-gray-500 dark:hover:bg-gray-600
                             cursor-[url('/cursor.svg'),_pointer]
                             active:scale-95 relative overflow-hidden"
                    data-oid="kmvdvsp"
                    key="olk-jpkn"
                    onClick={() => handleCardClick(4)}
                >
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
                        data-oid="dkp3vlj"
                    ></div>
                    <span
                        className="text-white text-sm font-medium relative z-10"
                        data-oid="v.dic-j"
                    >
                        {selectedCard === 4 ? 'Photo Gallery 4 - Click to close' : 'Photo 4'}
                    </span>
                    {selectedCard === 4 && (
                        <div
                            className="absolute inset-2 bg-white/10 rounded border border-white/30 flex items-center justify-center"
                            data-oid="rvmej39"
                        >
                            <span className="text-xs text-white/80" data-oid=".3cpat7">
                                Photo content here
                            </span>
                        </div>
                    )}
                </div>
                <div
                    className="bg-gray-600 dark:bg-gray-700 rounded-lg flex items-center justify-center h-[188px]
                             transition-all duration-300 ease-in-out transform 
                             hover:scale-105 hover:shadow-2xl hover:shadow-black/30 
                             hover:bg-gray-500 dark:hover:bg-gray-600
                             cursor-[url('/cursor.svg'),_pointer]
                             active:scale-95 relative overflow-hidden"
                    data-oid="5th-card"
                    key="olk-5th"
                    onClick={() => handleCardClick(5)}
                >
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
                        data-oid="kiw-f19"
                    ></div>
                    <span
                        className="text-white text-sm font-medium relative z-10"
                        data-oid="p6kr6zy"
                    >
                        {selectedCard === 5 ? 'Photo Gallery 5 - Click to close' : 'Photo 5'}
                    </span>
                    {selectedCard === 5 && (
                        <div
                            className="absolute inset-2 bg-white/10 rounded border border-white/30 flex items-center justify-center"
                            data-oid="qbdle04"
                        >
                            <span className="text-xs text-white/80" data-oid="lny5g5m">
                                Photo content here
                            </span>
                        </div>
                    )}
                </div>
                <div
                    className="bg-gray-600 dark:bg-gray-700 rounded-lg flex items-center justify-center h-[188px]
                             transition-all duration-300 ease-in-out transform 
                             hover:scale-105 hover:shadow-2xl hover:shadow-black/30 
                             hover:bg-gray-500 dark:hover:bg-gray-600
                             cursor-[url('/cursor.svg'),_pointer]
                             active:scale-95 relative overflow-hidden"
                    data-oid="6th-card"
                    key="olk-6th"
                    onClick={() => handleCardClick(6)}
                >
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
                        data-oid="j46yi-f"
                    ></div>
                    <span
                        className="text-white text-sm font-medium relative z-10"
                        data-oid="zejlkto"
                    >
                        {selectedCard === 6 ? 'Photo Gallery 6 - Click to close' : 'Photo 6'}
                    </span>
                    {selectedCard === 6 && (
                        <div
                            className="absolute inset-2 bg-white/10 rounded border border-white/30 flex items-center justify-center"
                            data-oid="3j4zzv1"
                        >
                            <span className="text-xs text-white/80" data-oid="cxnf227">
                                Photo content here
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
