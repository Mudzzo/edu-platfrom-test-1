import { t } from "i18next";
import CourseList from "../../components/Courses/CourseList/CourseList";

export default function Home() {
  return (
    <div>
      Home Page
      <h1 className=" text-center ">{t("hi")}</h1>
      <CourseList />
    </div>
  );
}
