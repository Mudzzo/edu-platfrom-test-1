import { useParams, Link } from 'react-router-dom';
import PlanCard from '../../components/Courses/SubscriptionPlans/PlanCard';
import data from '../../data/data.json';

export default function PlansPage() {
  const { courseId, teacherId } = useParams();

  const course = data.courses.find(c => c.id === courseId);
  if (!course) {
    return <div className="text-center text-red-500">Error: Course not found.</div>;
  }

  const teacher = course.teachers.find(t => t.id === teacherId);
  if (!teacher) {
    return <div className="text-center text-red-500">Error: Teacher not found.</div>;
  }

  const availablePlansForTeacher = data.plans.filter(plan =>
    teacher.availablePlans.includes(plan.id)
  );

  return (
    <div className="relative container mx-auto px-4 py-16">
      <div className="relative text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
         باقات الاشتراك للأستاذ {teacher.name}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          اختر الباقة التي تناسبك للمتابعة مع {teacher.name}. باقتك الحالية ستكون مميزة.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {availablePlansForTeacher.map(plan => {
          const isSubscribed = plan.id === teacher.subscribedPlanId;

          return (
            <Link
              key={plan.id}
              to={`/courses/${courseId}/teachers/${teacherId}/content?planId=${plan.id}`}
            >
              <PlanCard
                {...plan}
                isSubscribed={isSubscribed}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}