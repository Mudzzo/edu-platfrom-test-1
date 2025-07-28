import React from 'react';
import BackgroundShapes from '../BackgroundShapes';
import StatsCard from '../StatsCard';
import CourseInfo from './components/CourseInfo';

interface CourseCardProps {
  title: string;
  description: string;
  lessons: number;
  students: number;
  icon: React.ReactNode;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, lessons, students, icon }) => {
  return (
    <div className="group relative bg-white/[.05] backdrop-blur-[20px] border border-white/[.1] 
        rounded-[20px] overflow-hidden font-sans cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20">
      <BackgroundShapes />
      <div className="relative z-10 p-6">
        <CourseInfo title={title} description={description} icon={icon} />
        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
          <StatsCard title='طالب' value={students} />
          <StatsCard title='درس' value={lessons} />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
