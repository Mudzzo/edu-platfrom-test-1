import { t } from "i18next";
import CourseGrid from "../CourseGrid";

export default function Home() {
  return (
    <div>
      Home Page
      <h1 className=" text-center ">{t("hi")}</h1>
      <CourseGrid />
    </div>
  );
}
