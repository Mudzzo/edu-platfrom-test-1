import React from 'react';
import { motion } from 'framer-motion';

const CrownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L16.732 3.732z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 14l-4.5 4.5" />
    </svg>
);

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.05 10.1c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.95-.69L11.049 2.927z" />
    </svg>
);

const UserAddIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
    </svg>
);

const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8v8M7 8v8" />
    </svg>
);


interface Achievement {
    name: string;
    detail: string;
    icon: React.ReactNode;
    iconBgColor: string;
    iconTextColor: string;
    avatarUrl: string;
}

const achievementsData = {
    topStudents: [
        { name: 'أحمد محمود', detail: 'الأول على الفيزياء', icon: <CrownIcon />, iconBgColor: 'bg-yellow-400/20', iconTextColor: 'text-yellow-300', avatarUrl: 'https://i.pravatar.cc/40?u=ahmed' },
        { name: 'فاطمة علي', detail: 'الأول على الرياضيات', icon: <CrownIcon />, iconBgColor: 'bg-yellow-400/20', iconTextColor: 'text-yellow-300', avatarUrl: 'https://i.pravatar.cc/40?u=fatima' },
    ],
    distinguishedStudents: [
        { name: 'محمد حسن', detail: 'أكمل 50 كورس', icon: <StarIcon />, iconBgColor: 'bg-gray-500/20', iconTextColor: 'text-gray-300', avatarUrl: 'https://i.pravatar.cc/40?u=mohamed' },
        { name: 'نور أحمد', detail: 'معدل تفاعل 95%', icon: <StarIcon />, iconBgColor: 'bg-gray-500/20', iconTextColor: 'text-gray-300', avatarUrl: 'https://i.pravatar.cc/40?u=nour' },
    ],
    newSubscribers: [
        { name: 'سارة محمد', detail: 'انضمت اليوم', icon: <UserAddIcon />, iconBgColor: 'bg-cyan-400/20', iconTextColor: 'text-cyan-300', avatarUrl: 'https://i.pravatar.cc/40?u=sara' },
        { name: 'عمر يوسف', detail: 'انضم أمس', icon: <UserAddIcon />, iconBgColor: 'bg-cyan-400/20', iconTextColor: 'text-cyan-300', avatarUrl: 'https://i.pravatar.cc/40?u=omar' },
    ],
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
};

const columnVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
};


const AchievementCard: React.FC<{ achievement: Achievement }> = ({ achievement }) => (
    <motion.div
        variants={cardVariants}
        className="group relative bg-gray-800/40 backdrop-blur-xl p-5 rounded-2xl flex items-center justify-between transition-all duration-300"
        whileHover={{ scale: 1.05 }}
    >
        <div className="absolute -inset-px bg-gradient-to-r from-purple-600/50 to-cyan-600/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
        <div className="relative flex items-center gap-4 w-full">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center ring-2 ring-gray-700/80">
                 <img src={achievement.avatarUrl} alt={achievement.name} className="rounded-full w-11 h-11" />
            </div>
            <div className='ml-auto'>
                <h4 className="font-bold text-white text-md">{achievement.name}</h4>
                <p className="text-sm text-gray-400">{achievement.detail}</p>
            </div>
            <div className={`w-14 h-14 rounded-full flex items-center justify-center ${achievement.iconBgColor} ${achievement.iconTextColor} flex-shrink-0 border-2 border-gray-700/50`}>
                {achievement.icon}
            </div>
        </div>
    </motion.div>
);

const StudentAchievements = () => {
    return (
        <div dir="rtl" className="bg-gradient-to-b to-purple-500/10 backdrop-blur-2xl text-white py-24 px-4 sm:px-6 lg:px-8 rounded-3xl my-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    className="flex justify-between items-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-5">
                        <TrophyIcon />
                        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-wide">إنجازات الطلاب</h2>
                    </div>
                    <button className="text-purple-300 hover:text-white transition-colors font-semibold px-5 py-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20">
                        عرض الكل
                    </button>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Top Students */}
                    <motion.div className="space-y-8" variants={columnVariants}>
                        <h3 className="text-2xl font-bold text-center text-gray-200 border-b-2 border-purple-500/30 pb-4">طلاب متفوقون</h3>
                        <div className="space-y-5">
                            {achievementsData.topStudents.map((student, index) => (
                                <AchievementCard key={`top-${index}`} achievement={student} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Distinguished Students */}
                    <motion.div className="space-y-8" variants={columnVariants}>
                        <h3 className="text-2xl font-bold text-center text-gray-200 border-b-2 border-purple-500/30 pb-4">طلاب متميزين</h3>
                        <div className="space-y-5">
                            {achievementsData.distinguishedStudents.map((student, index) => (
                                <AchievementCard key={`distinguished-${index}`} achievement={student} />
                            ))}
                        </div>
                    </motion.div>

                    {/* New Subscribers */}
                    <motion.div className="space-y-8" variants={columnVariants}>
                        <h3 className="text-2xl font-bold text-center text-gray-200 border-b-2 border-purple-500/30 pb-4">مشتركين جدد</h3>
                        <div className="space-y-5">
                            {achievementsData.newSubscribers.map((student, index) => (
                                <AchievementCard key={`new-${index}`} achievement={student} />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default StudentAchievements;