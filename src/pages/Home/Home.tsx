// import { t } from "i18next";
import CourseGrid from "../../components/Courses/CourseGrid";
import Hero from "../Hero/Hero";
import TeacherGrid from "../../components/Courses/TeacherGrid.tsx";
import NewLessonsSection from "../../components/NewLessonsSection.tsx";
import StudentAchievements from "../../components/StudentAchievements.tsx";

export default function Home() {
  return (
    <div>
      {/* Home Page
      <h1 className=" text-center ">{t("hi")}</h1> */}
      <Hero />
      <section className="container mx-auto px-3 md:px-0">
        <CourseGrid haveTitle={true} />
        <TeacherGrid haveTitle={true} />
        <NewLessonsSection />
        <StudentAchievements />
      </section>
    </div>
  );
}
