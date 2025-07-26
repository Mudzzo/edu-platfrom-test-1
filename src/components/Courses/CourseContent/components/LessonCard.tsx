import { motion } from 'framer-motion'

interface Lesson {
    title: string;
    duration: string;
    isFree: boolean;
    isCompleted?: boolean;
    isPurchased?: boolean;
    price?: number;
  }

interface LessonCardProps {
    lesson: Lesson;
    lessonIndex: number,
    isIndividualLecturePlan: boolean
}
  

const LessonCard: React.FC<LessonCardProps> = ({ lesson, lessonIndex, isIndividualLecturePlan }) => {
  return (
    <motion.div
    key={lessonIndex}
    className="p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer"
    whileHover={{ x: 4 }}
  >
    <div className="flex items-center">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ml-4 
        ${lesson.isCompleted 
          ? 'bg-green-100 text-green-600' 
          : 'bg-purple-100 text-purple-600'}`}
      >
        {lesson.isCompleted ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        ) : (
          <span className="font-semibold">{lessonIndex + 1}</span>
        )}
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{lesson.title}</h3>
        <p className="text-sm text-gray-500">{lesson.duration}</p>
      </div>
    </div>
    <div className="flex items-center gap-4">
      {isIndividualLecturePlan ? (
        <>
          {lesson.isFree ? (
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              مجاني
            </span>
          ) : lesson.isPurchased ? (
            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              تم الشراء
            </span>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-gray-600 font-medium">{lesson.price} ج.م</span>
              <button className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium px-3 py-1 rounded-full transition-colors">
                شراء المحاضرة
              </button>
            </div>
          )}
        </>
      ) : (
        <>
          {lesson.isFree ? (
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              مجاني
            </span>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          )}
        </>
      )}
      <button className="text-blue-600 hover:text-blue-700 text-sm">
        تفاصيل
      </button>
    </div>
  </motion.div>
  )
}

export default LessonCard;