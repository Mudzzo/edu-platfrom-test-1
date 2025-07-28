import React, { useState } from 'react';
import { Link } from 'react-router';

interface CrownIconProps {
    className: string;
}

const CrownIcon: React.FC<CrownIconProps> = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
    </svg>
  );

const SubscribeModal: React.FC = () => {

    const [isVisible, setIsVisible] = useState(true);

    return (
        <>
            <div 
                onClick={() => setIsVisible(false)}
                className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${
                    isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            />

            <div 
                dir="rtl" 
                className={`fixed bottom-0 md:bottom-5 left-1/2 -translate-x-1/2 w-full md:w-[90%] md:max-w-4xl z-50 transition-all duration-300 ease-in-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
            >
                <div className="relative backdrop-blur-2xl md:rounded-xl shadow-2xl shadow-blue-900/20 p-5 w-full">

                    <div className="flex flex-col md:flex-row items-center justify-between gap-y-4 md:gap-x-6">
                        
                        <div className="text-right flex-grow">
                            <h3 className="text-lg font-bold text-white">
                                اشترك في الخطة السنوية
                            </h3>
                            <p className="text-gray-300 text-sm">
                                وصول كامل لكل الكورسات بخصم 30%
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-x-4">
                            <div className="flex items-baseline gap-x-2">
                                <span className="text-2xl font-bold text-cyan-400">
                                    630 ج.م
                                </span>
                                <span className="text-md text-gray-500 line-through">
                                    900 ج.م
                                </span>
                            </div>
                        </div>

                        <Link to={'/payment'}>
                            <div className="w-full md:w-auto md:flex-shrink-0">
                                <button className="cursor-pointer w-full flex items-center justify-center gap-2 px-6 py-3 text-white font-bold rounded-lg bg-gradient-to-l from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 transition-all duration-300 shadow-lg shadow-blue-500/30 transform hover:scale-105">
                                    <CrownIcon className="w-5 h-5 text-white" />
                                    <span>الترقية الآن</span>
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubscribeModal;