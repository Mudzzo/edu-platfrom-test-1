import React, { useEffect } from 'react';
import './payment.css';
import { motion } from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

const Payment: React.FC = () => {

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
        <div className='text-center mb-6'>
          <div className="my-color transition-all duration-300 ease-in-out  w-[90%] mx-auto rounded-xl mt-8 ">
            <div className="card-body py-5">
              <h3 className="card-title text-white text-2xl mb-4">عرض خاص للمشتركين الجدد
                <span><i className='fas fa-gift'></i></span>
              </h3>
              <p className="card-text text-white">احصل على خصم 30% على الاشتراك السنوي</p>
              <div className='custom-translate-up bg-white hover:bg-gray-100 text-center mt-5  py-3 rounded-lg md:w-[25%] w-[70%] mx-auto'>
                <Link to="/check">
                  <span className='benifit text-xl text-gray-900'>استفد من العرض الآن </span>
                  <span><i className='fas fa-tag me-3 text-gray-900'></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        
          <h2 className='text-3xl text-center  main-text mb-5 font-bold'>طرق الاشتراك</h2>
     

        <div className="container  w-[90%] mx-auto lg:py-8 px-5">
          <div className="row grid grid-cols-1 md:grid-cols-2 gap-5 lg:py-5">

            <div className="inner text-center relative overflow-hidden py-9 my-5 rounded-xl main-color main-text  hover:translate-y-[-5px]   hover:shadow-lg hover:shadow-indigo-400 transition-all outline-1 outline-gray-700">
              <div className="card-top-line"></div>
              
      
                           <div className="w-[50px] h-[50px] mx-auto rounded-full flex items-center justify-center lovely-color">
                  <i className="fas fa-calendar-day fa-2xl"></i>
              </div>
              <h4 dir="auto" className="text-2xl font-bold my-4 main-text">اشتراك شهرى</h4>
              <div>
                <span dir="auto" className="text-violet-500 text-3xl font-bold ">ج.م</span>
                <span className="text-violet-500 text-3xl font-bold">150 </span>
              </div>
              <ul dir="auto">
                <li className='my-4 text-xl'>
                  <i className="fas fa-check text-green-700 ml-1"></i>
                  جميع المواد
                </li>
                <li className='my-4 text-xl'>
                  <i className="fas fa-check text-green-700 ml-1"></i>
                  دعم فنى
                </li>
                <li className='my-4 text-xl'>
                  <i className="fas fa-check text-green-700 ml-1 mb-5"></i>
                  تحديثات مستمره
                </li>
              </ul>
              <div className="custom-translate-up transition">
                <Link to='/check' className="text-lg font-bold py-3 px-5 border border-violet-900 rounded-lg  outline-1 text-violet-400 hover:bg-violet-900 hover:text-white transition transform hover:outline-0  custom-translate-up">
                  اختر الخطه
                </Link>
              </div>
            </div>

            <div className="inner relative overflow-hidden text-center py-9 my-5 rounded-xl  main-color main-text hover:translate-y-[-5px] transition hover:shadow-lg hover:shadow-indigo-400 outline-1 outline-gray-700">
               <div className="card-top-line"></div>
              
                      <div className="w-[50px] h-[50px] mx-auto rounded-full flex items-center justify-center lovely-color">
           <i className="fas fa-calendar-day fa-2xl text-white"></i>
              </div>
              <h4 dir="auto" className="text-2xl font-bold my-4 ">اشتراك فصلى</h4>
              <div>
                <span dir="auto" className="text-violet-500 text-3xl font-bold ">ج.م</span>
                <span className="text-violet-500 text-3xl font-bold">500</span>
              </div>
              <ul dir="auto">
                <li className='my-4 text-xl'>
                  <i className="fas fa-check text-green-700 ml-1"></i>
                  جميع المواد
                </li>
                <li className='my-4 text-xl'>
                  <i className="fas fa-check text-green-700 ml-1"></i>
                  دعم فنى متقدم
                </li>
                <li className='my-4 text-xl'>
                  <i className="fas fa-check text-green-700 ml-1 mb-5"></i>
                  اختبارات تقييميه
                </li>
              </ul>
            <div className="custom-translate-up transition">
                <Link to='/check' className="text-lg font-bold py-3 px-5 border border-violet-900 rounded-lg  outline-1 text-violet-400 hover:bg-violet-900 hover:text-white transition transform hover:outline-0  custom-translate-up">
                  اختر الخطه
                </Link>
              </div>
            </div>

            <div className="inner relative overflow-hidden bg-black overflow-hidden relative   text-center py-9 my-5 rounded-xl  outline-1 outline-gray-700 hover:translate-y-[-5px] transition hover:shadow-xl hover:shadow-indigo-200">
              <div className="card-top-line "></div>
              <div className='absolute top-[20px] right-[-34px] lovely-color text-white rotate-45 py-1 font-bold px-8'>الأكثر شعبية</div>
              
            
                       <div className="lovely-color w-[50px] h-[50px] mx-auto rounded-full flex items-center justify-center ">
              <i className="fas fa-calendar-day fa-2xl text-white"></i>
              </div>
              <h4 dir="auto" className="text-2xl font-bold my-4 text-white">اشتراك سنوى</h4>
              <div>
                <span dir="auto" className="text-indigo-500 text-3xl font-bold ">ج.م</span>
                <span className="text-indigo-500 text-3xl font-bold">900</span>
              </div>
              <ul dir="auto">
                <li className='my-4 text-xl text-white'>
                  <i className="fas fa-check ml-1 text-green-500"></i>
                  جميع المواد
                </li>
                <li className='my-4 text-xl text-white'>
                  <i className="fas fa-check ml-1 text-green-500"></i>
                  دعم فنى vip
                </li>
                <li className='my-4 text-xl text-white'>
                  <i className="fas fa-check ml-1 mb-5 text-green-500"></i>
                  شهادات انجاز
                </li>
              </ul>
              <div className="custom-translate-up transition ">
                <Link to='/check' className="text-lg font-bold py-3 px-5 bg-white rounded-lg  text-gray-900  hover:text-black hover:bg-gray-300">
                  اختر الخطه
                </Link>
              </div>
            </div>

            <div className="inner relative overflow-hidden text-center py-9 my-5 rounded-xl main-color main-text  hover:translate-y-[-5px] transition hover:shadow-lg hover:shadow-indigo-400 outline-1 outline-gray-700">
              <div className="w-[50px] h-[50px] mx-auto rounded-full flex items-center justify-center bg-black">
                 <div className="card-top-line"></div>
                
                   <div className="w-[50px] h-[50px] mx-auto rounded-full flex items-center justify-center lovely-color">
            <i className="fas fa-play fa-xl text-white "></i>
              </div>
              </div>
              <h4 dir="auto" className="text-2xl font-bold my-4 ">محاضره منفصله</h4>
              <div>
                <span dir="auto" className="text-violet-500 text-3xl font-bold ">ج.م</span>
                <span className="text-violet-500 text-3xl font-bold">25</span>
              </div>
              <ul dir="auto">
                <li className='my-4 text-xl'>
                  <i className="fas fa-check text-green-700 ml-1"></i>
                  محاضره واحده
                </li>
                <li className='my-4 text-xl'>
                  <i className="fas fa-check text-green-700 ml-1"></i>
                  مدة اسبوع
                </li>
                <li className='my-4 text-xl'>
                  <i className="fas fa-check text-green-700 ml-1 mb-5"></i>
                  مواد تكميليه
                </li>
              </ul>
              <div className="custom-translate-up transition">
                <Link to='/check' className="text-lg font-bold py-3 px-5 border border-violet-900 rounded-lg  outline-1 text-violet-400 hover:bg-violet-900 hover:text-white transition transform hover:outline-0  custom-translate-up">
                  اختر الخطه
                </Link>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </>
  )
}
export default Payment;