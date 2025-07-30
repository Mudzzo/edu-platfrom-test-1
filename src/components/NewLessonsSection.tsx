import React from 'react';
import LessonCard from './Courses/CourseContent/components/LessonCard';
import { type Lesson } from './Courses/CourseContent/components/LessonCard';

const latestLessons: Lesson[] = [
    {
        title: "مقدمة في الكيمياء العضوية",
        duration: "45 دقيقة",
        isFree: true,
        isCompleted: true,
        isPurchased: true,
    },
    {
        title: "أساسيات قوانين نيوتن",
        duration: "60 دقيقة",
        isFree: false,
        price: 25,
        isCompleted: false,
        isPurchased: false,
    },
    {
        title: "التفاضل والتكامل للمبتدئين",
        duration: "75 دقيقة",
        isFree: false,
        price: 30,
        isCompleted: false,
        isPurchased: true,
    },
    {
        title: "مراجعة على الوحدة الأولى جبر",
        duration: "50 دقيقة",
        isFree: false,
        price: 20,
        isCompleted: false,
        isPurchased: false,
    },
];

const NewLessonsSection: React.FC = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-indigo-400 to-indigo-500">أحدث الدروس</h2>
        <p className="text-blue-400/40 mt-2">تصفح أحدث الدروس المضافة حديثًا</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gradient-to-br p-5 rounded-2xl to-indigo-800/30">
        {latestLessons.map((lesson, index) => (
          <LessonCard
            key={index}
            lesson={lesson}
            lessonIndex={index}
            isIndividualLecturePlan={true}
          />
        ))}
      </div>
    </div>
  );
};

export default NewLessonsSection;
