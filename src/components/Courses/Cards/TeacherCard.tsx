import React from 'react';
import { type Plan } from '../SubscriptionPlans/PlanCard';

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
  allPlans: Plan[]; 
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
    <div dir="rtl" className="group relative bg-white rounded-2xl w-full max-w-sm mx-auto font-sans overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-purple-50/30" />
      <div className="absolute -left-12 -top-12 w-24 h-24 bg-purple-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
      <div className="absolute -right-12 -bottom-12 w-24 h-24 bg-purple-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
      
      
      <div className="relative z-10 p-8">
        
        <div className="relative mx-auto w-32 h-32 mb-6 transform group-hover:scale-105 transition-all duration-300">
          {subscribedPlanId !== null && (
            <div className="absolute -top-2 -right-2 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
              ✓
            </div>
          )}
          
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 opacity-75 group-hover:opacity-100 transition-opacity duration-300"
               style={{
                 padding: '3px',
                 background: 'linear-gradient(45deg, #a855f7, #8b5cf6, #6366f1)',
                 mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                 maskComposite: 'exclude',
                 WebkitMaskComposite: 'xor',
                 animation: 'spin 8s linear infinite'
               }} />
          
          <div className="absolute inset-0 rounded-full border-4 border-white shadow-inner">
            <img 
              src={avatarUrl} 
              alt={name} 
              className="w-full h-full rounded-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
            {name}
          </h3>
          <div className="inline-flex items-center justify-center mb-2">
            <span className="text-purple-600 px-3 py-1 rounded-full bg-purple-50 text-sm font-medium">
              {subject}
            </span>
          </div>
          
          {subscribedPlan && (
            <div className="mt-2 text-sm text-green-700 bg-green-100 px-3 py-1 rounded-full inline-block font-medium">
              مشترك في: {subscribedPlan.title}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="group/stat relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-white p-4 transition-all duration-300 hover:from-purple-100">
            <div className="relative z-10 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-100/50 group-hover/stat:bg-purple-100 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-9-5.747h18" />
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-bold text-xl text-gray-800">{courses}</span>
                <span className="text-sm text-gray-500">كورس</span>
              </div>
            </div>
          </div>

          <div className="group/stat relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-white p-4 transition-all duration-300 hover:from-purple-100">
            <div className="relative z-10 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-100/50 group-hover/stat:bg-purple-100 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-bold text-xl text-gray-800">{videos}</span>
                <span className="text-sm text-gray-500">فيديو</span>
              </div>
            </div>
          </div>

          <div className="group/stat relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-white p-4 transition-all duration-300 hover:from-purple-100">
            <div className="relative z-10 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-100/50 group-hover/stat:bg-purple-100 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.184-1.268-.5-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.184-1.268.5-1.857m0 0a5.002 5.002 0 019 0m-4.5 4.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-bold text-xl text-gray-800">{students}</span>
                <span className="text-sm text-gray-500">طالب</span>
              </div>
            </div>
          </div>

          <div className="group/stat relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-white p-4 transition-all duration-300 hover:from-purple-100">
            <div className="relative z-10 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-100/50 group-hover/stat:bg-purple-100 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-bold text-xl text-gray-800">{hours}</span>
                <span className="text-sm text-gray-500">ساعة</span>
              </div>
            </div>
          </div>
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