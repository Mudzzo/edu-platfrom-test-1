interface CourseInfoProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}


const CourseInfo: React.FC<CourseInfoProps> = ({ icon, title, description}) => {
  return (
    <>
        <div className="relative w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
          <div className="absolute inset-0 rounded-xl bg-white opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
          <div className="text-indigo-400 transform group-hover:rotate-12 transition-transform duration-300">
            {icon}
          </div>
        </div>

        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-stone-100 mb-2 group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          <div className="h-0.5 w-12 bg-indigo-400 mx-auto transform origin-center group-hover:scale-x-150 transition-transform duration-300" />
        </div>

        <p className="text-gray-100 mb-6 h-12 text-center leading-relaxed">
          {description}
        </p>
    </>
  )
}

export default CourseInfo