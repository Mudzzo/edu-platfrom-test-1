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
            <div dir="auto" className="text-center pt-7   ">
          <i className="fas fa-credit-card fa-2xl main-text"></i>
          <span className="text-3xl font-medium main-text ">صفحة الدفع</span>
          <p className="py-3 main-text">
            اختر الباقة المناسبة لك وأكمل عملية الدفع
          </p>
        </div>
<div className='lg:flex  w-[100%]  lg:my-5'>
    <div className='lg:w-[80%] '>
      

        <div className="container relative bg-black outline-1  outline-gray-700 transition-all hover:shadow-lg hover:shadow-indigo-500 my-5 pb-5 custom-translate-up overflow-hidden rounded-2xl  w-[90%] mx-auto lg:gap-5">
          <div className='card-top-line'></div>
          <div className="text-right pr-6 py-5 mb-5 ">
            <span className="text-2xl text-white">اختر باقة الاشتراك</span>
            <i className="fas fa-tag text-white fa-2xl"></i>
          </div>

          <div className="row px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 shadow-2xl  ">
            <div className="inner  overflow-hidden outline-1 outline-gray-700   relative text-center py-10  rounded-xl custom-translate-up transition-all main-color  hover:shadow-lg hover:shadow-indigo-500">
              <div className='card-top-line'></div>
              <label><input type="radio" name="payment" className="absolute top-5 left-5" /></label>
           
                 <div className="w-[50px] h-[50px] mx-auto rounded-full flex items-center justify-center year">
                  <i className="fas fa-calendar-day fa-2xl main-text"></i>
              </div>
              <h5 className="text-xl font-semibold my-4 main-text">اشتراك شهري</h5>
              <div dir="auto" className="py-5">
                <span className="text-indigo-600 text-3xl font-bold">150</span>
                <span className="text-3xl text-indigo-600 font-bold">ج.م</span>
              </div>
              <p className="text-gray-500 text-xl">شهر واحد</p>
            </div>

            <div className="inner relative overflow-hidden outline-1 outline-gray-700  relative text-center py-10  rounded-xl custom-translate-up transition-all main-color shadow-lg hover:shadow-lg hover:shadow-indigo-500">
              <div className='card-top-line'></div>
              <label><input type="radio" name="payment" className="absolute top-5 left-5" /></label>
              
                 <div className="w-[50px] h-[50px] mx-auto rounded-full flex items-center justify-center year">
               <i className="fas fa-calendar-alt fa-2xl main-text"></i>
              </div>
              <h5 className="text-xl font-semibold my-4 main-text">اشتراك فصلى</h5>
              <div dir="auto" className="py-5">
                <span className="text-indigo-600 text-3xl font-bold">500</span>
                <span className="text-3xl text-indigo-600 font-bold">ج.م</span>
              </div>
              <p className="text-gray-500 text-xl">فصل دراسي كامل</p>
            </div>

            <div className="inner year relative overflow-hidden shadow-gray-400 hover:scale-95 text-center pt-10 rounded-xl bg-white hover:translate-y-[-5px] transition hover:shadow-3xl hover:shadow-gray-300">
              <div className="absolute top-[12px] right-[-38px] card text-white rotate-45 py-1 font-bold px-8">الأكثر شعبية</div>
              <label><input type="radio" name="payment" className="absolute top-5 left-5" /></label>
             
                 <div className="w-[50px] h-[50px] mx-auto rounded-full flex items-center justify-center main-color ">
       <i className="fas fa-calendar fa-2xl text-white  "></i>
              </div>
              <h4 dir="auto" className="text-xl font-bold my-4 text-white">اشتراك سنوى</h4>
              <div className="pt-10">
                <span dir="auto" className="text-white text-3xl font-bold">ج.م</span>
                <span className="text-white text-3xl font-bold">900</span>
              </div>
              <p className="text-gray-300 mb-3 pt-10 text-xl">عام كامل</p>
            </div>

            <div className="inner relative overflow-hidden outline-1 outline-gray-700   text-center py-10  rounded-xl custom-translate-up transition-all main-color hover:shadow-lg hover:shadow-indigo-500">
                <div className='card-top-line'></div>
              <label><input type="radio" name="payment" className="absolute top-5 left-5" /></label>
              <div className="w-[50px] h-[50px] mx-auto rounded-full flex items-center justify-center year ">
                <i className="fas fa-play fa-xl text-white"></i>
              </div>
              <h5 className="text-2xl font-bold my-4 main-text">محاضرة منفصلة</h5>
              <div dir="auto" className="py-5">
                <span className="text-indigo-600 text-3xl font-bold">25</span>
                <span className="text-3xl text-indigo-600 font-bold">ج.م</span>
              </div>
              <p className="text-gray-500 text-xl">محاضرة واحدة</p>
            </div>
          </div>
        </div>

        <div className="bg-black relative shadow-indigo-500 outline-1 outline-gray-700 w-[90%]  rounded-xl overflow-hidden mx-auto hover:shadow-lg custom-translate-up transition-all">
           <div className='card-top-line'></div>
          <div dir="auto" className=" text-right py-5 pr-5">
            <i className="fas fa-percentage text-white text-xl"></i>
            <span className="main-text text-xl">كود الخصم</span>
          </div>
          <input dir="rtl" type="text" className="pr-5 w-[90%] mt-5 mx-auto  outline-2 outline-gray-600 mb-5 block py-4 main-color rounded-lg placeholder:text-gray-400" placeholder="ادخل كود الخصم او كود السنتر" />
          <button className="w-[90%] mb-5 mx-auto mt-1 py-3 rounded-lg text-indigo-600  outline-2 font-bold outline-indigo-600 hover:bg-indigo-600 hover:text-white transition block">
            <span>تطبيق الكود</span>
            <i className="fas fa-check ml-2"></i>
          </button>
        </div>

      <div className="main-color relative shadow-gray-700 outline-1 outline-gray-700 w-[90%]  my-10 rounded-xl overflow-hidden mx-auto hover:shadow-lg hover:shadow-indigo-400 custom-translate-up transition-all"> 
         <div className='card-top-line'></div>
  <div dir="auto" className=" text-right bg-black py-5 pr-5"> 
    <span className="text-white text-xl">وسيلة الدفع</span> 
  </div> 

  
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:gap-5 px-4 pb-6 bg-black">
    {['credit-card', 'mobile-alt', 'qrcode'].map((icon, index) => ( 
      <div key={index} className="relative py-5"> 
        <div className="text-center relative overflow-hidden py-9 rounded-xl main-color shadow-lg   hover:shadow-lg hover:shadow-indigo-500   transition-all  "> 
          <div className='card-top-line'></div>
          <label>
            <input type="radio" name="payWay" className="absolute top-6 left-1" />
          </label> 
          <i className={`fas fa-${icon} fa-2xl main-text `}></i> 
          <h4 className="text-xl main-text font-semibold mt-4"> 
            {icon === 'credit-card' ? 'بطاقة ائتمان' : icon === 'mobile-alt' ? 'فودافون كاش' : 'إنستاباي'} 
          </h4> 
        </div> 
      </div> 
    ))} 
  </div>
</div>

  </div>

        <div className="relative overflow-hidden lg:w-[30%] lg:mt-5 lg:ml-5 bg-black text-white  w-[90%]   rounded-xl  mx-auto hover:shadow-xl  transition-all outline  outline-gray-200 mb-5 ">
          <div className='card-top-line'></div>
          <div dir="auto" className=" text-right py-5 pr-5">
            <i className="fas fa-receipt text-2xl "></i>
            <span className=" text-2xl font-bold">ملخص الطلب</span>
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
              <span className="text-lg text-green-800">خصم العرض الخاص:</span>
              <span className="text-lg text-green-800">-270 ج.م</span>
            </div>
            <div dir="auto" className="flex justify-between items-center py-2">
              <span className="text-lg">كود الخصم:</span>
              <span className="text-lg">-0 ج.م</span>
            </div>
            <hr />
            <div dir="auto" className="flex justify-between items-center py-2">
              <span className="text-lg font-bold">المجموع:</span>
              <span className="text-xl font-bold text-green-800">630 ج.م</span>
            </div>
            <div dir="auto" className="bg-green-200 rounded outline-green-900 my-5 outline-2 py-5">
              <i className="fas fa-gift text-green-950 font-bold text-xl px-5"></i>
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