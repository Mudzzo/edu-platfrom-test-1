import { Link } from 'react-router-dom';
import CourseCard from '../components/Courses/Cards/CourseCard/CourseCard';
import data from '../data/data.json';
import { motion } from 'framer-motion';

export default function CourseGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {data.courses.map((c) => (
        <Link to={`/courses/${c.id}`} key={c.id}>
          <CourseCard
            title={`مادة ${c.name}`}
            description={c.description}
            lessons={c.teachers.reduce((acc, t) => acc + t.videos, 0)}
            students={c.teachers.reduce((acc, t) => acc + t.students, 0)}
            icon={<svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth={1.5} d={c.iconPath} /></svg>}
          />
        </Link>
      ))}
    </motion.div>
  );
}