import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import  Check from "./pages/check/Check";
import  Payment from "./pages/payment/Payment";

import Layout from "./components/Layout/Layout";
import CourseContent from "./components/Courses/CourseContent/CourseContent";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { useEffect } from "react";
import Cookies from "js-cookie";

import TeacherGrid from "./pages/TeachersPage/TeacherGrid";
import PlansPage from "./pages/PlansPage/PlansPage";
import { CourseLayout } from "./components/Layout/CourseLayout";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "ar",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
      lookupCookie: "i18next",
    },
    backend: {
      loadPath: "/Locale/{{lng}}/translation.json",
    },
  });

function App() {
  const lang = Cookies.get("i18next") || "";
  const currentLang = ["ar", "en"].includes(lang) ? lang : "ar";

  useEffect(() => {
    if (lang !== "en" && lang !== "ar") {
      document.dir = "rtl";
      Cookies.set("i18next", "ar", { expires: 100 });
    }
  }, [lang]);

  useEffect(() => {
    document.dir = i18n.dir();
  }, [currentLang, lang]);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/courses/:courseId" element={<CourseLayout />}>
            <Route index element={<TeacherGrid />} />
            <Route path="teachers/:teacherId" element={<PlansPage />} />
            <Route path="teachers/:teacherId/content" element={<CourseContent />} />
          </Route>
          
          <Route path="/payment" element={<Payment />} />
          <Route path="/check" element={<Check />} />
         

          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;