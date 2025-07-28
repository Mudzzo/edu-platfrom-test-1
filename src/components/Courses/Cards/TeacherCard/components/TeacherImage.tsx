interface TeacherImageProps {
    isSub: boolean;
    avatarUrl: string;
    name: string;
}


const TeacherImage: React.FC<TeacherImageProps> = ({ isSub, avatarUrl, name}) => {
  return (
    <div className="relative mx-auto w-32 h-32 mb-6 transform group-hover:scale-105 transition-all duration-300">
        {isSub && (
            <div className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-br to-indigo-400 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                ✓
            </div>
        )}
        
        <div className="absolute inset-0 rounded-full border-4 border-purple-400 shadow-inner">
        <img 
            src={avatarUrl} 
            alt={name} 
            className="w-full h-full rounded-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
        />
        </div>
    </div>
  )
}

export default TeacherImage