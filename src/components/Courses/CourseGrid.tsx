import { Link } from 'react-router-dom';
import CourseCard from './Cards/CourseCard/CourseCard';
import data from '../../data/data.json';
import { motion } from 'framer-motion';

interface CourseGridProps {
  haveTitle?: boolean;
}

const CourseGrid: React.FC<CourseGridProps> = ({ haveTitle = false }) => {
  return (
    <>
      {haveTitle && <div className="flex justify-center mb-12">
        <h2 className="relative w-fit text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-500 before:absolute before:h-1 before:-bottom-1.5 before:bg-indigo-500 before:rounded-3xl before:w-1/2 hover:before:w-full before:transition-all before:duration-300">
          كورسات مميزة
        </h2>
      </div>}
      <motion.div
        className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
    </>
  );
}

export default CourseGrid;