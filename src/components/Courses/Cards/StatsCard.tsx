interface StatsCardProps {
  title: string;
  value: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-stone-50/10 to-stone-50/2 p-3 transition-all duration-300 hover:from-stone-50/2 hover:to-stone-50/10">
    <div className="flex items-center justify-center gap-3">
      <div className="relative">
        <div className="absolute inset-0 bg-purple-500 opacity-0 rounded-full group-hover/stat:opacity-10 transition-opacity duration-300" />
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.184-1.268-.5-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.184-1.268.5-1.857m0 0a5.002 5.002 0 019 0m-4.5 4.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
        </svg>
      </div>
      <span className="font-bold text-lg text-gray-200">{value.toLocaleString()}</span>
    </div>
    <p className="text-sm text-center text-gray-100 mt-1">{title}</p>
  </div>
  )
}


export default StatsCard