import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import  Check from "./pages/check/src/Check";
import  Payment from "./pages/payment/src/Payment";
import Layout from "./components/Layout/Layout";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { useEffect } from "react";
import Cookies from "js-cookie";


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
  const { t } = useTranslation();
  const lang = Cookies.get("i18next") || "";
  const currentLang = ["ar", "en"].includes(lang) ? lang : "ar";

  useEffect(() => {
    if (lang !== "en" && lang !== "ar") {
      window.document.dir = "rtl";
      Cookies.set("i18next", "ar", {
        expires: 100,
      });
    }
  }, [lang]);

  useEffect(() => {
    window.document.dir = i18n.dir();
  }, [currentLang, lang]);
  return (
    <div>
      {t("")}
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/check" element={<Check />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
