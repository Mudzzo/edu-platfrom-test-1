import React from 'react';
import { motion } from 'framer-motion';

export interface Lesson {
  title: string;
  duration: string;
  isFree: boolean;
  imageUrl?: string;
  isCompleted?: boolean;
  isPurchased?: boolean;
  price?: number;
}

interface LessonCardProps {
  lesson: Lesson;
  lessonIndex: number;
  isIndividualLecturePlan: boolean;
}

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);



const LessonCard: React.FC<LessonCardProps> = ({ lesson, lessonIndex, isIndividualLecturePlan }) => {
  return (
    <motion.div
      className="flex flex-col sm:flex-row bg-gradient-to-br to-stone-50/10 backdrop-blur-xl rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out my-4"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      
      <div className="sm:w-48 w-full h-48 sm:h-auto flex-shrink-0">
        <img 
          className="w-full h-full object-cover" 
          src={`https://placehold.co/600x400/8B5CF6/FFFFFF?text=Lesson`} 
          alt={lesson.title} 
        />
      </div>

      
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-start justify-between">
            <h3 className="font-bold text-lg text-stone-100 mb-1">{lesson.title}</h3>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 
              ${lesson.isCompleted ? 'bg-green-100 text-green-600' : 'bg-purple-100 text-purple-600'}`}
            >
              {lesson.isCompleted ? <CheckIcon /> : <span className="font-bold text-sm">{lessonIndex + 1}</span>}
            </div>
          </div>
          <p className="text-sm text-gray-400">{lesson.duration}</p>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          
          <div className="flex items-center gap-4">
            {isIndividualLecturePlan ? (
              <>
                {lesson.isFree ? (
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">مجاني</span>
                ) : lesson.isPurchased ? (
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                    <CheckIcon /> تم الشراء
                  </span>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-stone-300 font-semibold">{lesson.price} ج.م</span>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors duration-300">
                      شراء المحاضرة
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                {lesson.isFree ? (
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">مجاني</span>
                ) : (
                  <LockIcon />
                )}
              </>
            )}
          </div>
          
          <button className="text-purple-600 hover:text-purple-800 font-semibold text-sm transition-colors duration-300">
            تفاصيل
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default LessonCard;
