import { Outlet, useNavigate, useLocation, useParams } from 'react-router-dom';

export function CourseLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams(); 

  const getBackLink = () => {
    const { courseId, teacherId } = params;
    const { pathname } = location;

    if (pathname.endsWith('/content') && courseId && teacherId) {
      return {
        path: `/courses/${courseId}/teachers/${teacherId}`,
        label: 'العودة إلى الخطط' 
      };
    }

    if (teacherId) {
      return {
        path: `/courses/${courseId}`,
        label: 'العودة إلى المدرسين'
      };
    }

    
    if (courseId) {
        return {
          path: `/`,
          label: 'العودة إلى الكورسات'
        };
      }

    return null;
  };

  const backLink = getBackLink();

  return (
    <div className="container mx-auto px-4">
      {backLink && (
        <button 
          onClick={() => navigate(backLink.path)} 
          className="my-6 bg-gray-200 hover:bg-purple-500 text-gray-800 hover:text-white font-bold py-2 px-4 rounded-lg inline-flex items-center transition-colors"
        >
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          <span>{backLink.label}</span>
        </button>
      )}
      
      <main>
        <Outlet />
      </main>
    </div>
  );
}