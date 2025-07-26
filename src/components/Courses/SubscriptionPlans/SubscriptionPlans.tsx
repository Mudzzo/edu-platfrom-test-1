import React from 'react';
import PlanCard, { type Plan } from './PlanCard';


interface Props {
  plans: Plan[];
  teacherName?: string;
  subscribedPlanId: string | null;
}

const SubscriptionPlans: React.FC<Props> = ({ plans, teacherName, subscribedPlanId }) => (
  <div className="relative container mx-auto px-4 py-16">
    
    <div className="absolute inset-0">
      <div className="absolute left-20 top-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply opacity-70 animate-blob blur-xl"></div>
      <div className="absolute right-20 top-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000 blur-xl"></div>
      <div className="absolute left-40 bottom-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-4000 blur-xl"></div>
    </div>

    <div className="relative text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
        {teacherName ? `باقات اشتراك الأستاذ ${teacherName}` : 'اختر باقتك المناسبة'}
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        نقدم لك باقات متنوعة تناسب احتياجاتك التعليمية. اختر الباقة المناسبة وابدأ رحلتك التعليمية معنا.
      </p>
    </div>

    <div className="relative max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {plans.map(p => (
          <div key={p.id} className="transform transition-all duration-300 hover:translate-y-[-10px] h-full">
            <PlanCard 
              {...p} 
              isSubscribed={p.id === subscribedPlanId}
            />
          </div>
        ))}
      </div>
    </div>

    <div className="relative mt-16 text-center">
      <p className="text-gray-500 mb-4">لديك أسئلة عن الباقات؟</p>
      <button className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors">
        <span>تواصل معنا</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
);

export default SubscriptionPlans;