import { useState } from "react";
import "./Managment.css"
import TeacherSetup from "../../components/Layout/Setup/Teachers/TeacerSetup";

export default function Managment(){
    const [activeTab, setActiveTab] = useState('teachers');
    return (
            <section id='setup' className='setup-section'>
                <div className='setup-container gap-6'>
                    <div className='setup-header'>
                        <h2 className='header'>تهيئة المنصة التعليمية</h2>
                        <p className='subheader'>أضف المدرسين، الكورسات، والمحاضرات في خطوات بسيطة</p>
                    </div>
                    <div className='tab-control '>
                        <button className='tab-button' onClick={() => setActiveTab('teachers')}>
                            <i className="fas fa-chalkboard-teacher" w-tid="489"></i>
                            <span>المدرسين</span>
                        </button>
                        <button className='tab-button' onClick={() => setActiveTab('courses')}>
                            <i className="fas fa-graduation-cap" w-tid="495"></i>
                            <span>الكورسات</span>
                        </button>
                        <button className='tab-button' onClick={() => setActiveTab('lectures')}>
                            <i className="fas fa-play-circle" w-tid="501"></i>
                            <span>المحاضرات</span>
                        </button>
                    </div>
                    <div className='tab-content '>
                        {activeTab === 'teachers' && (
                            <TeacherSetup />
                        )}
                        {activeTab === 'courses' && (
                            <div className='courses-tab'>
                                <h3>إضافة كورسات</h3>
                                {/* محتوى إضافة الكورسات */}
                            </div>
                        )}
                        {activeTab === 'lectures' && (
                            <div className='lectures-tab'>
                                <h3>إضافة محاضرات</h3>
                                {/* محتوى إضافة المحاضرات */}
                            </div>
                        )}
                    </div>
                </div>
            </section>
    )
}