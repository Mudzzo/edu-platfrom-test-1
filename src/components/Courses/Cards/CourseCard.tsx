import React from 'react';

interface CourseCardProps {
  title: string;
  description: string;
  lessons: number;
  students: number;
  icon: React.ReactNode;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, lessons, students, icon }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden font-sans cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-purple-200">
      
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent z-0" />
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
      <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-purple-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
      
      <div className="relative z-10 p-6">
        
        <div className="relative w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
          <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          <div className="text-white transform group-hover:rotate-12 transition-transform duration-300">
            {icon}
          </div>
        </div>

        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
            {title}
          </h3>
          <div className="h-0.5 w-12 bg-purple-500 mx-auto transform origin-center group-hover:scale-x-150 transition-transform duration-300" />
        </div>

        <p className="text-gray-600 mb-6 h-12 text-center leading-relaxed">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
          <div className="group/stat relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-transparent p-3 transition-all duration-300 hover:from-purple-100">
            <div className="flex items-center justify-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500 opacity-0 rounded-full group-hover/stat:opacity-10 transition-opacity duration-300" />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.184-1.268-.5-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.184-1.268.5-1.857m0 0a5.002 5.002 0 019 0m-4.5 4.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                </svg>
              </div>
              <span className="font-bold text-lg text-gray-700">{students.toLocaleString()}</span>
            </div>
            <p className="text-sm text-center text-gray-500 mt-1">طالب</p>
          </div>

          <div className="group/stat relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-transparent p-3 transition-all duration-300 hover:from-purple-100">
            <div className="flex items-center justify-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500 opacity-0 rounded-full group-hover/stat:opacity-10 transition-opacity duration-300" />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-bold text-lg text-gray-700">{lessons}</span>
            </div>
            <p className="text-sm text-center text-gray-500 mt-1">درس</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
