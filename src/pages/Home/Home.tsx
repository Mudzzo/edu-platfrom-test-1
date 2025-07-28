// import { t } from "i18next";
import CourseGrid from "../CourseGrid";
import Hero from "../Hero/Hero";

export default function Home() {
  return (
    <div>
      {/* Home Page
      <h1 className=" text-center ">{t("hi")}</h1> */}
      <Hero />
      <CourseGrid />
    </div>
  );
}
