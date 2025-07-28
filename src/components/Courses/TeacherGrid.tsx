import { Link, useParams } from 'react-router-dom';
import TeacherCard from '../../components/Courses/Cards/TeacherCard/TeacherCard';
import data from '../../data/data.json';
import { motion } from 'framer-motion';

interface TeacherGridProps {
  haveTitle?: boolean;
}


const TeacherGrid: React.FC<TeacherGridProps> = ({ haveTitle = false }) => {
  const { courseId } = useParams();
  const course = !courseId || haveTitle ? data.courses.find(c => c.id === "chem-101")! : data.courses.find(c => c.id === decodeURIComponent(courseId!))!;

  return (
    <>
      {haveTitle && <div className="flex justify-center mb-12">
        <h2 className="relative w-fit text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-500 before:absolute before:h-1 before:-bottom-1.5 before:bg-indigo-500 before:rounded-3xl before:w-1/2 hover:before:w-full before:transition-all before:duration-300">
          مدرسين مميزين
        </h2>
      </div>}
      <motion.div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
          {course.teachers.map((t) => (
            <Link
              to={`/courses/${course.id}/teachers/${t.id}`}
              key={t.id}
            >
              <TeacherCard {...t} allPlans={data.plans} />
            </Link>
          ))}
      </motion.div>
    </>
  );
}

export default TeacherGrid;