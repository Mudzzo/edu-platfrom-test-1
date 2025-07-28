interface PlanInfoProps {
    title: string;
    subtitle: string;
    bullets: string[];
    lessons: string;
    hours: string;
    price: string;
    period: string;
}

const PlanInfo: React.FC<PlanInfoProps> = ({ title, subtitle, price, period, lessons, hours, bullets }) =>  {
  return <>
   <div className="text-center h-[140px] flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold text-stone-50 mb-2 group-hover:text-purple-600 transition-colors">
            {title}
          </h3>
          <p className="text-stone-200 leading-relaxed max-w-[250px]">{subtitle}</p>
        </div>

        <div className="text-center h-[80px] flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-1">
            <span className="text-3xl font-bold bg-gradient-to-l from-indigo-800 to-purple-500 bg-clip-text text-transparent">
              {price}
            </span>
          </div>
          <span className="text-sm text-stone-200">{period}</span>
        </div>

        <div className="bg-stone-50/5 rounded-xl p-4 h-[280px]">
          <div className="flex items-center justify-between text-sm text-stone-200 mb-4 pb-4 border-b border-indigo-400/50">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>{lessons}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{hours}</span>
            </div>
          </div>

          <ul className="space-y-3">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 group/item">
                <div className="relative mt-1">
                  <div className="w-4 h-4 rounded-full bg-stone-50/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 group-hover/item:scale-150 transition-transform" />
                  </div>
                </div>
                <span className="text-stone-200 group-hover/item:text-purple-600 transition-colors">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
  </>
}

export default PlanInfo;