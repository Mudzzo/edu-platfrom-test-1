import React from 'react';
import CourseGrid from '../components/Courses/CourseGrid';

const CoursesPage: React.FC = () => {

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-stone-100 tracking-tight">
          تصفح الكورسات
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-stone-300">
          ابحث عن الكورس المثالي لك من بين مجموعتنا المتنوعة من المواد التعليمية.
        </p>
      </div>

      <div className="mb-12 max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="ابحث عن كورس..."
            className="w-full p-4 pr-12 text-lg border border-gray-300 rounded-full shadow-sm focus:outline-none"
            dir="rtl"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
            <svg className="h-6 w-6 text-stone-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      <CourseGrid />
    </div>
  );
};

export default CoursesPage;