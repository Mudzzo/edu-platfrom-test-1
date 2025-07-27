import StatCard from "./components/StatCard";

export default function Hero() {
  return (
    <div className='hero min-h-screen flex flex-col gap-7 md:gap-10 justify-center items-center py-10'>
        <h1 className="text-4xl text-center md:text-7xl text-blue-100 font-bold">أكاديميتك الرقمية المتكامله</h1>
        <p className="text-blue-200 text-lg md:text-2xl w-[700px] max-w-[80%] text-center">أنشئ، صنف، ونظم كورساتك التعليمية باحتراف مع أدوات قوية لإدارة المحتوى، المدرسين، والطلاب</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5">
        <StatCard title="مدرس متاح" value='+100' />
        <StatCard title="طالب متاح" value='+1000' />
        <StatCard title="كورس متاح" value='+50' />
        </div>
    </div>
  )
}
