import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "الكورسات", href: "/courses" },
  { label: "المدرسين", href: "/teachers" },
  { label: "الدفع", href: "/payment" },
];

export default function NavBar() {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <nav 
      className="
        sticky top-0 z-50 
        w-full 
        overflow-hidden
        border-b border-blue-400/20
        backdrop-blur-md
      "
    >
     
      <div 
        className="
          absolute inset-0
          opacity-80
          -z-10
          bg-stone-50/[.10]
          shadow-[0_4px_30px_rgba(0,0,0,0.1)]
          backdrop-blur-[1px]
          border-b border-white/5
        "
      />

      <div className="relative z-10 container mx-auto px-12 flex items-center justify-between p-4 text-white">
        <div className="flex flex-col gap-1.5">
          <Link to="/" className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-500 ">
            المعلم
          </Link>
          <span className="text-sm">المنصة الذكية للتعليم</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <NavLink
                key={link.label}
                to={link.href}
                className="relative text-lg font-medium text-gray-300 hover:text-white transition-colors group"
              >
                {link.label}
                <span 
                  className={`
                    absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-indigo-800 to-indigo-400
                    transition-all duration-300
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                  `}
                />
              </NavLink>
            );
          })}
         <Link 
            to={'/'} 
            className="mr-7 px-6 py-2 rounded-full text-white text-sm bg-gradient-to-br from-indigo-400 to-indigo-800"
         >
             ابدأ الان رحلتك التعليمية
         </Link>
        </div>

        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

  

      {isMenuOpen && (
        <div className="md:hidden bg-black/30 pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block w-full text-center px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link 
              to={'/'} 
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 w-1/2 text-center px-5 py-2 rounded-full text-white text-sm font-semibold bg-gradient-to-br from-indigo-500 to-blue-600"
            >
              ابدأ الان رحلتك التعليمية
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}