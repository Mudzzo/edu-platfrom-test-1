import React, { useEffect } from 'react';
import './check.css';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Check: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 5, behavior: 'smooth' });
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
            <div dir="auto" className="text-center pt-7 ">
          <i className="fas fa-credit-card fa-2xl text-gray-400"></i>
          <span className="text-3xl font-medium text-gray-400 ">صفحة الدفع</span>
          <p className="py-3 text-gray-600">
            اختر الباقة المناسبة لك وأكمل عملية الدفع
          </p>
        </div>
<div className='lg:flex  w-[100%]'>
    <div className='lg:w-2/3'>
      

        <div className="container transition-all hover:shadow-xl my-5 pb-5 custom-translate-up overflow-hidden rounded-2xl shadow-gray-800 w-[90%] mx-auto">
          <div className="text-right pr-6 partBg py-5 mb-5">
            <span className="text-2xl text-white">اختر باقة الاشتراك</span>
            <i className="fas fa-tag text-white fa-2xl"></i>
          </div>

          <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="inner relative text-center py-10 hover:scale-105 rounded-xl custom-translate-up transition-all bg-white shadow-xl hover:shadow-2xl">
              <label><input type="radio" name="payment" className="absolute top-5 left-5" /></label>
              <i className="fas fa-calendar-day fa-2xl"></i>
              <h5 className="text-2xl font-bold my-4 text-gray-900">اشتراك شهري</h5>
              <div dir="auto" className="py-5">
                <span className="text-indigo-600 text-3xl font-bold">150</span>
                <span className="text-3xl text-indigo-600 font-bold">ج.م</span>
              </div>
              <p className="text-gray-500 text-xl">شهر واحد</p>
            </div>

            <div className="inner hover:scale-105 relative text-center py-10 rounded-xl custom-translate-up transition-all bg-white shadow-xl hover:shadow-2xl">
              <label><input type="radio" name="payment" className="absolute top-5 left-5" /></label>
              <i className="fas fa-calendar-alt fa-2xl"></i>
              <h5 className="text-2xl font-bold my-4 text-gray-900">اشتراك فصلى</h5>
              <div dir="auto" className="py-5">
                <span className="text-indigo-600 text-3xl font-bold">500</span>
                <span className="text-3xl text-indigo-600 font-bold">ج.م</span>
              </div>
              <p className="text-gray-500 text-xl">فصل دراسي كامل</p>
            </div>

            <div className="inner year relative overflow-hidden shadow-gray-400 hover:scale-95 text-center pt-10 rounded-xl bg-white hover:translate-y-[-5px] transition hover:shadow-3xl hover:shadow-gray-300">
              <div className="absolute top-[15px] right-[-33px] card text-white rotate-45 py-1 font-bold px-8">الأكثر شعبية</div>
              <label><input type="radio" name="payment" className="absolute top-5 left-5" /></label>
              <i className="fas fa-calendar fa-2xl text-white"></i>
              <h4 dir="auto" className="text-2xl font-bold my-4 text-white">اشتراك سنوى</h4>
              <div className="pt-5">
                <span dir="auto" className="text-white text-3xl font-bold">ج.م</span>
                <span className="text-white text-3xl font-bold">900</span>
              </div>
              <p className="text-gray-700 pt-5 pb-5 text-xl">عام كامل</p>
            </div>

            <div className="inner  relative text-center py-10 hover:scale-105 rounded-xl custom-translate-up transition-all bg-white shadow-xl hover:shadow-2xl">
              <label><input type="radio" name="payment" className="absolute top-5 left-5" /></label>
              <div className="w-[50px] h-[50px] mx-auto rounded-full flex items-center justify-center bg-black">
                <i className="fas fa-play fa-xl text-white"></i>
              </div>
              <h5 className="text-2xl font-bold my-4 text-gray-900">محاضرة منفصلة</h5>
              <div dir="auto" className="py-5">
                <span className="text-indigo-600 text-3xl font-bold">25</span>
                <span className="text-3xl text-indigo-600 font-bold">ج.م</span>
              </div>
              <p className="text-gray-500 text-xl">محاضرة واحدة</p>
            </div>
          </div>
        </div>

        <div className="bg-white w-[90%] shadow-xl rounded-xl overflow-hidden mx-auto hover:shadow-2xl custom-translate-up transition-all">
          <div dir="auto" className="partBg text-right py-5 pr-5">
            <i className="fas fa-percentage text-white text-xl"></i>
            <span className="text-white text-xl">كود الخصم</span>
          </div>
          <input dir="rtl" type="text" className="pr-5 w-[90%] mt-5 mx-auto outline outline-2 outline-gray-200 block py-4 rounded-lg" placeholder="ادخل كود الخصم او كود السنتر" />
          <button className="w-[90%] mb-5 mx-auto mt-1 py-3 rounded-lg text-blue-700 outline outline-2 font-bold outline-blue-700 hover:bg-blue-800 hover:text-white transition block">
            <span>تطبيق الكود</span>
            <i className="fas fa-check ml-2"></i>
          </button>
        </div>

      <div className="bg-white w-[90%] my-10 rounded-xl overflow-hidden mx-auto hover:shadow-xl custom-translate-up transition-all"> 
  <div dir="auto" className="partBg text-right py-5 pr-5"> 
    <span className="text-white text-xl">وسيلة الدفع</span> 
  </div> 

  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-6">
    {['credit-card', 'mobile-alt', 'qrcode'].map((icon, index) => ( 
      <div key={index} className="relative py-5"> 
        <div className="text-center py-9 rounded-xl bg-white shadow-xl   hover:shadow-2xl hover:shadow-gray-600 transition-all "> 
          <label>
            <input type="radio" name="payWay" className="absolute top-5 left-5" />
          </label> 
          <i className={`fas fa-${icon} fa-2xl`}></i> 
          <h4 className="text-xl font-semibold mt-4"> 
            {icon === 'credit-card' ? 'بطاقة ائتمان' : icon === 'mobile-alt' ? 'فودافون كاش' : 'إنستاباي'} 
          </h4> 
        </div> 
      </div> 
    ))} 
  </div>
</div>

  </div>

        <div className="lg:w-1/3 lg:mt-5 bg-white w-[90%]  rounded-xl overflow-hidden mx-auto hover:shadow-xl custom-translate-up transition-all">
          <div dir="auto" className="partBg text-right py-5 pr-5">
            <i className="fas fa-receipt text-2xl text-white"></i>
            <span className="text-white text-2xl font-bold">ملخص الطلب</span>
          </div>
          <div className="w-[90%] mx-auto">
            <div dir="auto" className="flex justify-between items-center py-2">
              <span className="text-lg">الباقة المختارة:</span>
              <span className="text-lg">اشتراك سنوي</span>
            </div>
            <div dir="auto" className="flex justify-between items-center py-2">
              <span className="text-lg">السعر الأساسي:</span>
              <span className="text-lg">900 ج.م</span>
            </div>
            <div dir="auto" className="flex justify-between items-center py-2">
              <span className="text-lg text-green-700">خصم العرض الخاص:</span>
              <span className="text-lg text-green-700">-270 ج.م</span>
            </div>
            <div dir="auto" className="flex justify-between items-center py-2">
              <span className="text-lg">كود الخصم:</span>
              <span className="text-lg">-0 ج.م</span>
            </div>
            <hr />
            <div dir="auto" className="flex justify-between items-center py-2">
              <span className="text-lg font-bold text-xl">المجموع:</span>
              <span className="text-lg text-green-700">630 ج.م</span>
            </div>
            <div dir="auto" className="bg-green-200 rounded outline-green-600 my-5 outline-1 py-5">
              <i className="fas fa-gift text-green-950 font-bold text-xl px-2"></i>
              <span className="text-green-950 font-bold text-xl">وفرت 270 ج.م!</span>
            </div>
            <button dir="auto" className="cursor-pointer partBg transition-all custom-translate-up rounded-xl py-3 w-full mb-5 mx-auto block">
              <i className="fas fa-lock text-white text-xl font-bold"></i>
              <span className="font-bold text-xl text-white">تأكيد الدفع</span>
            </button>
            <p dir="auto" className="mb-5 text-gray-500 text-center">
              <i className="fas fa-shield-alt text-gray-500"></i>
              دفع آمن ومشفر
            </p>
          </div>
        </div>
</div>
      </motion.div>
    </>
  );
};

export default Check;