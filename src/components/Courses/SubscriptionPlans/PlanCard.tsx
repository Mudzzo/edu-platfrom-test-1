import React from 'react';


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
      
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-purple-50/30 rounded-2xl" />
      <div className="absolute -left-10 -top-10 w-20 h-20 bg-purple-100 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl" />
      <div className="absolute -right-10 -bottom-10 w-20 h-20 bg-purple-100 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl" />

      <div className="relative z-10 flex flex-col h-full">
        
        <div className="text-center h-[140px] flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-500 leading-relaxed max-w-[250px]">{subtitle}</p>
        </div>

        <div className="text-center h-[80px] flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-1">
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
              {price}
            </span>
          </div>
          <span className="text-sm text-gray-500">{period}</span>
        </div>

        <div className="bg-purple-50/50 rounded-xl p-4 h-[280px] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-purple-100">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-4 pb-4 border-b border-purple-100/50 sticky top-0 bg-purple-50/95 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>{lessons}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{hours}</span>
            </div>
          </div>

          <ul className="space-y-3">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 group/item">
                <div className="relative mt-1">
                  <div className="w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-500 group-hover/item:scale-150 transition-transform" />
                  </div>
                </div>
                <span className="text-gray-600 group-hover/item:text-purple-600 transition-colors">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

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