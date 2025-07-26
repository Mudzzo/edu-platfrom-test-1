import { Link, useParams } from 'react-router-dom';
import TeacherCard from '../../components/Courses/Cards/TeacherCard';
import data from '../../data/data.json';
import { motion } from 'framer-motion';

export default function TeacherGrid() {
  const { courseId } = useParams();
  const course = data.courses.find(c => c.id === decodeURIComponent(courseId!))!;

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
  );
}