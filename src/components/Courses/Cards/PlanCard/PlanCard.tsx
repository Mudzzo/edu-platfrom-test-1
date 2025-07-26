import React from 'react';
import BackgroundShapes from '../BackgroundShapes';
import PlanInfo from './components/PlanInfo';


export interface Plan {
  id: string; 
  title: string;
  subtitle: string;
  bullets: string[];
  lessons: string;
  hours: string;
  price: string;
  period: string;
}

interface PlanCardProps extends Plan {
  isSubscribed?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  subtitle,
  bullets,
  lessons,
  hours,
  price,
  period,
  isSubscribed = false,
}) => (
  <div className="relative group">
    
    {isSubscribed && (
      <div className="absolute -top-7 inset-x-0 mx-auto w-fit z-20">
        <div className={`text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg ${
          isSubscribed
            ? 'bg-gradient-to-r from-green-500 to-green-600' 
            : 'bg-gradient-to-r from-purple-600 to-purple-500' 
        }`}>
          باقتك الحالية
        </div>
      </div>
    )}

    <div
      className={`relative bg-white rounded-2xl p-8 transition-all duration-300
        h-[600px] flex flex-col
        ${isSubscribed 
          ? 'border-2 border-green-400 shadow-xl shadow-green-100 scale-105'
          : 'border border-gray-100 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-100 hover:scale-105 cursor-pointer'} 
          group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-purple-50`}
    >
      
      <BackgroundShapes variant={0} />

      <div className="relative z-10 flex flex-col h-full">
        <PlanInfo title={title} subtitle={subtitle} bullets={bullets} period={period} price={price} lessons={lessons} hours={hours} />

        <div className="mt-auto pt-6">
          <button 
            disabled={isSubscribed}
            className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300
                       ${isSubscribed 
                         ? 'bg-gradient-to-r from-green-500 to-green-600 text-white cursor-default'
                         : 'bg-gradient-to-r from-purple-600 to-purple-500 text-white transform hover:shadow-lg hover:shadow-purple-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
                       }`}
          >
            {isSubscribed ? 'مشترك حالياً' : 'اختر الباقة'}
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default PlanCard;