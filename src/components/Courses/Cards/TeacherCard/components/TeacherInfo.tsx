import {type Plan} from '../../PlanCard/PlanCard'

interface TeacherInfoProps {
  name: string;
  subject: string;
  subscribedPlan?: Plan;
}

const TeacherInfo: React.FC<TeacherInfoProps> = ({ subscribedPlan, name, subject }) => {
  return (
    <div className="text-center mb-8">
    <h3 className="text-2xl font-bold text-stone-100 mb-2 group-hover:text-purple-600 transition-colors duration-300">
      {name}
    </h3>
    <div className="inline-flex items-center justify-center mb-2">
      <span className="text-purple-600 px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-br to-stone-50/10">
        {subject}
      </span>
    </div>
    
    {subscribedPlan && (
      <div className="mt-2 text-sm text-stone-100 bg-indigo-500 px-3 py-1 rounded-full inline-block font-medium">
        مشترك في: {subscribedPlan.title}
      </div>
    )}
  </div>
  )
}

export default TeacherInfo