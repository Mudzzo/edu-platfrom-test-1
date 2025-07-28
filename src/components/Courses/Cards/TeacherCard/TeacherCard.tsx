import React from 'react';
import { type Plan } from '../PlanCard/PlanCard';
import StatsCard from '../StatsCard';
import BackgroundShapes from '../BackgroundShapes';
import TeacherImage from './components/TeacherImage';
import TeacherInfo from './components/TeacherInfo';

interface TeacherCardProps {
  id: string;
  name: string;
  subject: string;
  courses: number;
  videos: number;
  students: number;
  hours: number;
  avatarUrl: string;
  subscribedPlanId: string | null;
  allPlans: Plan[],
}

const TeacherCard: React.FC<TeacherCardProps> = ({
  name,
  subject,
  courses,
  videos,
  students,
  hours,
  avatarUrl,
  subscribedPlanId,
  allPlans,
}) => {
  const subscribedPlan = allPlans.find(p => p.id === subscribedPlanId);

  return (
    <div dir="rtl" className="group relative bg-gradient-to-br to-stone-50/10 rounded-2xl w-full max-w-sm mx-auto font-sans overflow-hidden">
      <BackgroundShapes />
      <div className="relative z-10 p-8">
        <TeacherImage name={name} avatarUrl={avatarUrl} isSub={subscribedPlanId !== null} />
        <TeacherInfo name={name} subject={subject} subscribedPlan={subscribedPlan} />

        <div className="grid grid-cols-2 gap-4">
          <StatsCard title='كورس' value={courses} />
          <StatsCard title='فيديو' value={videos} />
          <StatsCard title='طالب' value={students} />
          <StatsCard title='ساعة' value={hours} />
        </div>

        <button className="w-full mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium 
          transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-200 active:scale-[0.98]
          group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
          عرض الملف الشخصي
        </button>
        
      </div>
    </div>
  );
};

export default TeacherCard;