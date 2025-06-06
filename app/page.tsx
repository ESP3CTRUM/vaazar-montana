'use client';

import Image from 'next/image';

export default function Page() {
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
                    className="bg-gray-600 dark:bg-gray-700 rounded-lg flex items-center justify-center h-[188px]"
                    data-oid="6bange7"
                    key="olk-tSUE"
                >
                    <span className="text-white text-sm font-medium" data-oid="6ayah2g">
                        Card 1
                    </span>
                </div>
                <div
                    className="bg-gray-600 dark:bg-gray-700 rounded-lg flex items-center justify-center h-[188px]"
                    data-oid="crb9viq"
                    key="olk-sm-I"
                >
                    <span className="text-white text-sm font-medium" data-oid="2px9jl9">
                        Card 2
                    </span>
                </div>
                <div
                    className="bg-gray-600 dark:bg-gray-700 rounded-lg flex items-center justify-center h-[188px]"
                    data-oid="q-s44-n"
                    key="olk-8F9j"
                >
                    <span className="text-white text-sm font-medium" data-oid="cqm8g4r">
                        Card 3
                    </span>
                </div>
                <div
                    className="bg-gray-600 dark:bg-gray-700 rounded-lg flex items-center justify-center h-[188px]"
                    data-oid="kmvdvsp"
                    key="olk-jpkn"
                >
                    <span className="text-white text-sm font-medium" data-oid="v.dic-j">
                        Card 2
                    </span>
                </div>
            </div>
        </div>
    );
}
