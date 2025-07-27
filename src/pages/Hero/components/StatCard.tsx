interface StatCardProps {
    title: string,
    value: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <div>
        <div className="py-5 md:py-10 px-4 md:px-6 flex flex-col items-center 
        gap-5 bg-white/[.05] backdrop-blur-[20px] border border-white/[.1] 
        rounded-[20px] p-8 text-center transition-all duration-300 ease-in-out"
        >
            <span className="text-2xl md:text-5xl font-bold text-indigo-500">{value}</span>
            <span className="text-sm md:text-xl text-white">{title}</span>
        </div>
    </div>
  )
}

export default StatCard;