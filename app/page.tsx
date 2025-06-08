'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
    const [selectedCard, setSelectedCard] = useState<number | null>(null);
    const [modalOpen, setModalOpen] = useState<number | null>(null);

    const handleCardClick = (cardNumber: number) => {
        setModalOpen(cardNumber);
    };

    const closeModal = () => {
        setModalOpen(null);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <>
            <div
                className={`w-full min-h-screen flex flex-col bg-white transition-colors duration-200 ${modalOpen ? 'blur-sm' : ''}`}
                data-oid="_u3pygk"
            >
                {/* Header Section - Dark Green */}

                <div
                    className="w-full sticky top-auto right-auto bottom-auto left-auto flex items-center gap-[30px] justify-end p-[30px] pt-[10px] pb-[10px] pr-[60px] h-[92px] bg-[#D0E0D6] opacity-[100%]"
                    data-oid="ot:br33"
                >
                    <button
                        onClick={() => scrollToSection('inicio')}
                        className="bg-[#707070] flex justify-center items-center rounded-[9px] h-[36px] w-[104px] 
                                 transition-all duration-300 ease-in-out transform
                                 hover:bg-green-600 hover:scale-105 hover:shadow-lg
                                 active:scale-95 cursor-pointer"
                        data-oid="xqm4b4i"
                    >
                        <p
                            className="text-center w-[54px] text-[16px] rounded-none h-[26px] text-white font-medium"
                            data-oid="w6cfxp4"
                        >
                            Inicio
                        </p>
                    </button>
                    <button
                        onClick={() => scrollToSection('quienes-somos')}
                        className="bg-[#707070] flex justify-center items-center rounded-[9px] w-[fit-content] h-[36px] px-4
                                 transition-all duration-300 ease-in-out transform
                                 hover:bg-green-600 hover:scale-105 hover:shadow-lg
                                 active:scale-95 cursor-pointer"
                        data-oid="ojg2jk6"
                    >
                        <p
                            className="text-center text-[16px] w-[146px] h-[25px] text-white font-medium"
                            data-oid="wrau2xp"
                        >
                            Quienes somos
                        </p>
                    </button>
                    <button
                        onClick={() => scrollToSection('galeria')}
                        className="w-[104px] bg-[#707070] flex justify-center items-center rounded-[9px] h-[36px]
                                 transition-all duration-300 ease-in-out transform
                                 hover:bg-green-600 hover:scale-105 hover:shadow-lg
                                 active:scale-95 cursor-pointer"
                        data-oid="yoftf1-"
                    >
                        <p
                            className="text-center w-[54px] text-[16px] h-[22px] text-white font-medium"
                            data-oid="6d44l3g"
                        >
                            Galería
                        </p>
                    </button>
                </div>
                <div
                    id="video-introduccion"
                    className="bg-green-800 flex items-center justify-center h-[495px] m-0 w-full rounded-none border-[#00000000]"
                    data-oid="pri04zh"
                >
                    <div className="text-center text-white p-4" data-oid="agni.0n">
                        <h1
                            id="inicio"
                            className="text-2xl md:text-3xl font-semibold mb-2"
                            data-oid=":88b19n"
                        >
                            Video de introducción
                        </h1>
                        <p className="text-lg opacity-90" data-oid="1yzz:da">
                            letras por encima del video
                        </p>
                    </div>
                </div>

                {/* Main Content Section - Light Green */}

                <div
                    id="quienes-somos"
                    className="flex-1 bg-green-200 mx-4 mb-4 min-h-96 flex items-center justify-center rounded-[8px] mt-[16px] h-[fit-content] w-[98%]"
                    data-oid="p2q0-34"
                >
                    <div className="text-center text-green-900 p-4" data-oid="s-k214-">
                        <h1
                            id="quienes-somos"
                            className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight"
                            data-oid="jztzdpu"
                        >
                            Aquí iria quienes somos
                        </h1>
                        <p className="text-xl md:text-2xl" data-oid="knddp1j">
                            y poner mas texto en este mismo formato de tamaño
                        </p>
                    </div>
                </div>

                {/* Gallery Title Section */}
                <div
                    className="px-4 mb-6 flex items-center justify-center w-full"
                    data-oid="krtka36"
                >
                    <h2
                        id="galeria"
                        className="text-3xl md:text-4xl font-bold text-green-800 text-center font-aboreto"
                        data-oid="09zzh.g"
                    >
                        Galería de arte
                    </h2>
                </div>

                {/* Grid Section */}
                <div
                    className="px-4 pb-4 h-[306px] grid grid-cols-[repeat(3,_1fr)] grid-rows-[repeat(2,_1fr)] pt-[16px] gap-[20px] w-full m-[20px] mt-0 ml-0"
                    data-oid="6._9yqw"
                >
                    <div
                        className="bg-white border-4 border-green-800 rounded-lg flex items-center justify-center h-[188px] 
                             transition-all duration-300 ease-in-out transform 
                             hover:scale-105 hover:shadow-2xl hover:shadow-green-800/30 
                             hover:border-green-600
                             cursor-[url('/cursor.svg'),_pointer]
                             active:scale-95 relative overflow-hidden"
                        onClick={() => handleCardClick(1)}
                        data-oid="h40vnj3"
                    >
                        <Image
                            src="/images/d-1.jpg"
                            alt="Photo 1"
                            fill
                            className="object-cover rounded-md"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            data-oid="..h2lf8"
                        />

                        <div
                            className="absolute inset-0 bg-gradient-to-br from-transparent to-green-900/40 opacity-0 hover:opacity-100 transition-opacity duration-300"
                            data-oid="844clf."
                        ></div>
                    </div>
                    <div
                        className="bg-white border-4 border-green-800 rounded-lg flex items-center justify-center h-[188px]
                             transition-all duration-300 ease-in-out transform 
                             hover:scale-105 hover:shadow-2xl hover:shadow-green-800/30 
                             hover:border-green-600
                             cursor-[url('/cursor.svg'),_pointer]
                             active:scale-95 relative overflow-hidden"
                        onClick={() => handleCardClick(2)}
                        data-oid="z77efyq"
                    >
                        <Image
                            src="/images/d-2.jpg"
                            alt="Photo 2"
                            fill
                            className="object-cover rounded-md relative top-auto right-auto bottom-auto left-auto h-[fit-content] w-[200px]"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            data-oid="1s.vzg5"
                        />

                        <div
                            className="absolute inset-0 bg-gradient-to-br from-transparent to-green-900/40 opacity-0 hover:opacity-100 transition-opacity duration-300"
                            data-oid="u5zrrux"
                        ></div>
                    </div>
                    <div
                        className="bg-white border-4 border-green-800 rounded-lg flex items-center justify-center h-[188px]
                             transition-all duration-300 ease-in-out transform 
                             hover:scale-105 hover:shadow-2xl hover:shadow-green-800/30 
                             hover:border-green-600
                             cursor-[url('/cursor.svg'),_pointer]
                             active:scale-95 relative overflow-hidden"
                        onClick={() => handleCardClick(3)}
                        data-oid="i2w3q.9"
                    >
                        <Image
                            src="/images/d-3.jpg"
                            alt="Photo 3"
                            fill
                            className="object-cover rounded-md"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            data-oid="2dym1py"
                        />

                        <div
                            className="absolute inset-0 bg-gradient-to-br from-transparent to-green-900/40 opacity-0 hover:opacity-100 transition-opacity duration-300"
                            data-oid="zacnt96"
                        ></div>
                    </div>
                    <div
                        className="bg-white border-4 border-green-800 rounded-lg flex items-center justify-center h-[188px]
                             transition-all duration-300 ease-in-out transform 
                             hover:scale-105 hover:shadow-2xl hover:shadow-green-800/30 
                             hover:border-green-600
                             cursor-[url('/cursor.svg'),_pointer]
                             active:scale-95 relative overflow-hidden"
                        onClick={() => handleCardClick(4)}
                        data-oid="v3vse6w"
                    >
                        <Image
                            src="/images/d-4.jpg"
                            alt="Photo 4"
                            fill
                            className="object-cover rounded-md"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            data-oid="umgyqoe"
                        />

                        <div
                            className="absolute inset-0 bg-gradient-to-br from-transparent to-green-900/40 opacity-0 hover:opacity-100 transition-opacity duration-300"
                            data-oid="musdwb2"
                        ></div>
                    </div>
                    <div
                        className="bg-white border-4 border-green-800 rounded-lg flex items-center justify-center h-[188px]
                             transition-all duration-300 ease-in-out transform 
                             hover:scale-105 hover:shadow-2xl hover:shadow-green-800/30 
                             hover:border-green-600
                             cursor-[url('/cursor.svg'),_pointer]
                             active:scale-95 relative overflow-hidden"
                        onClick={() => handleCardClick(5)}
                        data-oid="xl..ve1"
                    >
                        <Image
                            src="/images/d-5.jpg"
                            alt="Photo 5"
                            fill
                            className="object-cover rounded-md"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            data-oid="nsds6qr"
                        />

                        <div
                            className="absolute inset-0 bg-gradient-to-br from-transparent to-green-900/40 opacity-0 hover:opacity-100 transition-opacity duration-300"
                            data-oid="5nrk-w6"
                        ></div>
                    </div>
                    <div
                        className="bg-white border-4 border-green-800 rounded-lg flex items-center justify-center h-[188px]
                             transition-all duration-300 ease-in-out transform 
                             hover:scale-105 hover:shadow-2xl hover:shadow-green-800/30 
                             hover:border-green-600
                             cursor-[url('/cursor.svg'),_pointer]
                             active:scale-95 relative overflow-hidden"
                        onClick={() => handleCardClick(6)}
                        data-oid="l08a7h5"
                    >
                        <Image
                            src="/images/d-6.jpg"
                            alt="Photo 6"
                            fill
                            className="object-cover rounded-md"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            data-oid="6do6vaf"
                        />

                        <div
                            className="absolute inset-0 bg-gradient-to-br from-transparent to-green-900/40 opacity-0 hover:opacity-100 transition-opacity duration-300"
                            data-oid="e:m1xzf"
                        ></div>
                    </div>
                </div>
            </div>

            {/* Modal Overlay */}
            {modalOpen && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={closeModal}
                    data-oid="t0xtmpn"
                >
                    {/* Close Button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-white hover:text-green-400 transition-colors duration-200 z-60"
                        data-oid="r9fxuvy"
                    >
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            data-oid="n5-gyrm"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" data-oid="w:g81r1"></line>
                            <line x1="6" y1="6" x2="18" y2="18" data-oid="26z2vyr"></line>
                        </svg>
                    </button>

                    {/* Modal Image */}
                    <div
                        className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                        data-oid=".dnkg46"
                    >
                        <Image
                            src={`/images/d-${modalOpen}.jpg`}
                            alt={`Photo ${modalOpen} - Full Resolution`}
                            width={1200}
                            height={800}
                            className="object-contain max-w-full max-h-full rounded-lg shadow-2xl"
                            quality={100}
                            priority
                            data-oid="u4av14_"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
