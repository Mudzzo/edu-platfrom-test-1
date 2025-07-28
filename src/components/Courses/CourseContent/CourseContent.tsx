import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import LessonCard from './components/LessonCard';
import SubscribeModal from '../SubscribeModal';

interface Lesson {
  title: string;
  duration: string;
  isFree: boolean;
  isCompleted?: boolean;
  isPurchased?: boolean;
  price?: number;
}

interface Section {
  title: string;
  lessonsCount: number;
  description?: string;
  lessons: Lesson[];
}

interface MonthData {
  name: string;
  arabicName: string;
  isSubscribed: boolean;
  startIndex: number;
  endIndex: number;
}

const fullCourseData: Section[] = [
  {
    title: 'الميكانيكا والحركة',
    lessonsCount: 4,
    lessons: [
      { title: 'مقدمة في الحركة', duration: '45 دقيقة', isFree: true, isCompleted: true, isPurchased: true, price: 0 },
      { title: 'السرعة والتسارع', duration: '38 دقيقة', isFree: false, isCompleted: true, isPurchased: true, price: 50 },
      { title: 'قوانين نيوتن', duration: '52 دقيقة', isFree: false, isPurchased: false, price: 50 },
      { title: 'الحركة الدائرية', duration: '41 دقيقة', isFree: false, isPurchased: false, price: 100 },
    ],
  },
  {
    title: 'الكهرباء والمغناطيسية',
    lessonsCount: 3,
    lessons: [
      { title: 'مفاهيم أساسية في الكهرباء', duration: '35 دقيقة', isFree: true, isPurchased: true, price: 0 },
      { title: 'التيار والجهد', duration: '42 دقيقة', isFree: false, isPurchased: false, price: 150 },
      { title: 'المجالات المغناطيسية', duration: '39 دقيقة', isFree: false, isPurchased: true, price: 150 },
    ],
  },
];

const monthsData: MonthData[] = [
  { name: 'september', arabicName: 'سبتمبر', isSubscribed: true, startIndex: 0, endIndex: 1 },
  { name: 'october', arabicName: 'أكتوبر', isSubscribed: true, startIndex: 1, endIndex: 2 },
  { name: 'november', arabicName: 'نوفمبر', isSubscribed: false, startIndex: 2, endIndex: 2 },
  { name: 'december', arabicName: 'ديسمبر', isSubscribed: false, startIndex: 2, endIndex: 2 }
];


const CourseContent: React.FC = () => {
  const [searchParams] = useSearchParams();
  const planId = searchParams.get('planId');
  const isIndividualLecturePlan = planId === 'plan-single-lecture';

  const [activeSemester, setActiveSemester] = useState<'first' | 'second'>('first');
  const [activeMonth, setActiveMonth] = useState<string>('september');

  const getCourseData = (): Section[] => {

    const midPoint = Math.ceil(fullCourseData.length / 2);
    const firstSemester = fullCourseData.slice(0, midPoint);
    const secondSemester = fullCourseData.slice(midPoint);
    const currentMonth = monthsData.find(month => month.name === activeMonth);

    switch (planId) {
      case 'plan-semester':
        return activeSemester === 'first' ? firstSemester : secondSemester;
      case 'plan-monthly':
        if (!currentMonth) return [];
        return fullCourseData.slice(currentMonth.startIndex, currentMonth.endIndex);
      case 'plan-full-year':
      case 'plan-single-lecture':
        return fullCourseData;
      default:
        return [];
    }
  };

  const courseData = getCourseData();

  return (
    <div className="max-w-5xl mx-auto">
      <SubscribeModal />
      <div className="flex flex-col items-center gap-6 mb-8">
        {planId === 'plan-semester' && (
          <div className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br to-stone-50/10 rounded-lg p-1">
            <button
              onClick={() => setActiveSemester('first')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeSemester === 'first'
                  ? 'bg-white/20 text-indigo-400 shadow-sm'
                  : 'text-stone-300 hover:text-indigo-400'
              }`}
            >
              الفصل الدراسي الأول
            </button>
            <button
              onClick={() => setActiveSemester('second')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeSemester === 'second'
                  ? 'bg-white/20 text-indigo-400 shadow-sm'
                  : 'text-stone-300 hover:text-indigo-400'
              }`}
            >
              الفصل الدراسي الثاني
            </button>
          </div>
        )}

        {planId === 'plan-monthly' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {monthsData.map((month) => (
              <button
                key={month.name}
                onClick={() => month.isSubscribed && setActiveMonth(month.name)}
                className={`relative py-4 px-8 rounded-lg transition-all duration-200 cursor-pointer bg-gradient-to-br to-stone-50/10 ${
                  !month.isSubscribed
                    ? 'cursor-not-allowed'
                    : activeMonth === month.name
                    ? 'border border-purple-600'
                    : 'hover:border hover:border-purple-300'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <span className={`text-lg font-medium ${
                    !month.isSubscribed
                      ? 'text-stone-600'
                      : activeMonth === month.name
                      ? 'text-purple-700'
                      : 'text-stone-300'
                  }`}>
                    {month.arabicName}
                  </span>
                  {!month.isSubscribed && (
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] rounded-lg flex items-center justify-center">
                      <div className="flex items-center gap-2 text-stone-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="text-sm font-medium">غير مشترك</span>
                      </div>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>


      <div className="space-y-6">
        {courseData.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: sectionIndex * 0.1 }}
          >
            
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-t-xl p-4 flex items-center justify-between text-white">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h2 className="text-lg font-semibold">{section.title}</h2>
              </div>
              <div className="flex items-center">
                <span className="text-sm">{section.lessonsCount} درس</span>
              </div>
            </div>

            <div>
              {section.lessons.map((lesson, lessonIndex) => (
                <LessonCard key={lessonIndex} lesson={lesson} lessonIndex={lessonIndex} isIndividualLecturePlan={isIndividualLecturePlan} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;