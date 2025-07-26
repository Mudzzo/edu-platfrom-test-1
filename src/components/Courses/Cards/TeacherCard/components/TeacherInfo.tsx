interface TeacherInfoProps {
  name: string;
  subject: string;
  subscribedPlan: any;
}

const TeacherInfo: React.FC<TeacherInfoProps> = ({ subscribedPlan, name, subject }) => {
  return (
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
  )
}

export default TeacherInfo