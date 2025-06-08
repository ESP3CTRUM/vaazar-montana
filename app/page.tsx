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

    return (
        <>
            <div
                className={`w-full min-h-screen flex flex-col bg-white transition-colors duration-200 ${modalOpen ? 'blur-sm' : ''}`}
                data-oid="zehm7-x"
            >
                {/* Header Section - Dark Green */}

                <div
                    className="bg-[#E3F3FF] w-full sticky top-auto right-auto bottom-auto left-auto flex items-center gap-[30px] justify-end p-[30px] pt-[10px] pb-[10px] pr-[60px] h-[92px]"
                    data-oid="vy0ctti"
                    key="olk-pmbC"
                >
                    <div
                        className="bg-[#707070] flex justify-center items-center rounded-[9px] h-[36px] w-[104px]"
                        data-oid="3s9hket"
                        key="olk-KxEC"
                    >
                        <p
                            className="text-center w-[54px] text-[16px] rounded-none h-[26px]"
                            data-oid="uslub91"
                            key="olk-ZTeq"
                        >
                            inicio
                        </p>
                    </div>
                    <div
                        className="bg-[#707070] flex justify-center items-center rounded-[9px] w-[fit-content] h-[36px]"
                        data-oid="w-x.li9"
                        key="olk-ntt0"
                    >
                        <p
                            className="text-center text-[16px] w-[146px] border-solid h-[25px]"
                            data-oid="jum84gc"
                        >
                            Quienes somos
                        </p>
                    </div>
                    <div
                        className="w-[104px] bg-[#707070] flex justify-center items-center rounded-[9px] h-[36px]"
                        data-oid="a:q4ty1"
                        key="olk-wTss"
                    >
                        <p className="text-center w-[54px] text-[16px] h-[22px]" data-oid="cqrlo-6">
                            Galería
                        </p>
                    </div>
                </div>
                <div
                    className="bg-green-800 rounded-lg flex items-center justify-center h-[495px] w-[1630px] m-0"
                    data-oid="3tgdfl3"
                >
                    <div className="text-center text-white p-4" data-oid="aaxs4:h" key="olk-xrYh">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-2" data-oid="8ybyz9r">
                            Video de introducción
                        </h1>
                        <p className="text-lg opacity-90" data-oid="3g-5fm5">
                            letras por encima del video
                        </p>
                    </div>
                </div>

                {/* Main Content Section - Light Green */}

                <div
                    className="flex-1 bg-green-200 mx-4 mb-4 min-h-96 flex items-center justify-center rounded-[8px] w-[1630px] h-[710px] mt-[16px]"
                    data-oid="ihr2:vd"
                >
                    <div
                        className="text-center text-green-900 p-4"
                        data-oid="251a0ce"
                        key="olk-A8cE"
                    >
                        <h1
                            className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight"
                            data-oid="yeg9oh3"
                        >
                            Aquí iria quienes somos
                        </h1>
                        <p className="text-xl md:text-2xl" data-oid="9k42sxo">
                            y poner mas texto en este mismo formato de tamaño
                        </p>
                    </div>
                </div>

                {/* Gallery Title Section */}
                <div
                    className="px-4 mb-6 flex items-center justify-center w-full"
                    data-oid="szr9i.o"
                >
                    <h2
                        className="text-3xl md:text-4xl font-bold text-green-800 text-center font-aboreto"
                        data-oid="q6a1tc8"
                    >
                        Galería de arte
                    </h2>
                </div>

                {/* Grid Section */}
                <div
                    className="px-4 pb-4 h-[306px] grid grid-cols-[repeat(3,_1fr)] grid-rows-[repeat(2,_1fr)] pt-[16px] gap-[20px] w-full"
                    data-oid="az2nf5-"
                >
                    <div
                        className="bg-white border-4 border-green-800 rounded-lg flex items-center justify-center h-[188px] 
                             transition-all duration-300 ease-in-out transform 
                             hover:scale-105 hover:shadow-2xl hover:shadow-green-800/30 
                             hover:border-green-600
                             cursor-[url('/cursor.svg'),_pointer]
                             active:scale-95 relative overflow-hidden"
                        onClick={() => handleCardClick(1)}
                        data-oid="rmai3kz"
                    >
                        <Image
                            src="/images/d-1.jpg"
                            alt="Photo 1"
                            fill
                            className="object-cover rounded-md"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            data-oid="9jv-gvt"
                        />

                        <div
                            className="absolute inset-0 bg-gradient-to-br from-transparent to-green-900/40 opacity-0 hover:opacity-100 transition-opacity duration-300"
                            data-oid="ns:3r9x"
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
                        data-oid="xby7lja"
                    >
                        <Image
                            src="/images/d-2.jpg"
                            alt="Photo 2"
                            fill
                            className="object-cover rounded-md relative top-auto right-auto bottom-auto left-auto h-[fit-content] w-[200px]"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            data-oid="hx0bwqb"
                        />

                        <div
                            className="absolute inset-0 bg-gradient-to-br from-transparent to-green-900/40 opacity-0 hover:opacity-100 transition-opacity duration-300"
                            data-oid="i3k3spf"
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
                        data-oid="afm-6:3"
                    >
                        <Image
                            src="/images/d-3.jpg"
                            alt="Photo 3"
                            fill
                            className="object-cover rounded-md"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            data-oid="2q3aicf"
                        />

                        <div
                            className="absolute inset-0 bg-gradient-to-br from-transparent to-green-900/40 opacity-0 hover:opacity-100 transition-opacity duration-300"
                            data-oid="w3logao"
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
                        data-oid="rh2fk_e"
                    >
                        <Image
                            src="/images/d-4.jpg"
                            alt="Photo 4"
                            fill
                            className="object-cover rounded-md"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            data-oid="a518zia"
                        />

                        <div
                            className="absolute inset-0 bg-gradient-to-br from-transparent to-green-900/40 opacity-0 hover:opacity-100 transition-opacity duration-300"
                            data-oid="6k3w0:8"
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
                        data-oid=".dguert"
                    >
                        <Image
                            src="/images/d-5.jpg"
                            alt="Photo 5"
                            fill
                            className="object-cover rounded-md"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            data-oid="56q18ql"
                        />

                        <div
                            className="absolute inset-0 bg-gradient-to-br from-transparent to-green-900/40 opacity-0 hover:opacity-100 transition-opacity duration-300"
                            data-oid="4u9-xkc"
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
                        data-oid="gq-8z86"
                    >
                        <Image
                            src="/images/d-6.jpg"
                            alt="Photo 6"
                            fill
                            className="object-cover rounded-md"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            data-oid="j6n:z_3"
                        />

                        <div
                            className="absolute inset-0 bg-gradient-to-br from-transparent to-green-900/40 opacity-0 hover:opacity-100 transition-opacity duration-300"
                            data-oid="3ztvcja"
                        ></div>
                    </div>
                </div>
            </div>

            {/* Modal Overlay */}
            {modalOpen && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={closeModal}
                    data-oid="eg:q:yn"
                >
                    {/* Close Button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-white hover:text-green-400 transition-colors duration-200 z-60"
                        data-oid="uzx1df:"
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
                            data-oid="184.d3x"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" data-oid="871brc:"></line>
                            <line x1="6" y1="6" x2="18" y2="18" data-oid="3d7vbnh"></line>
                        </svg>
                    </button>

                    {/* Modal Image */}
                    <div
                        className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="xy2w:g:"
                    >
                        <Image
                            src={`/images/d-${modalOpen}.jpg`}
                            alt={`Photo ${modalOpen} - Full Resolution`}
                            width={1200}
                            height={800}
                            className="object-contain max-w-full max-h-full rounded-lg shadow-2xl"
                            quality={100}
                            priority
                            data-oid="b:eoq8k"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
