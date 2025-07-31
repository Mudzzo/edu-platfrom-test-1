import "./TeacherSetup.css"
import TeacherList from "./TeacherList";

export default function TeacherSetup() {
    type Teacher = {
        name: string;
        specialization: string;
        experience: number;
    }

    var teachers: Teacher[] = [
        { name: "أحمد محمد", specialization: "الفيزياء", experience: 12 },
        { name: "سارة علي", specialization: "الرياضيات", experience: 21 },
        { name: "محمد حسن", specialization: "الكيمياء", experience: 12 },
        { name: "ليلى يوسف", specialization: "الأحياء", experience: 4 }
    ];

    return (
        <div className='teachers-tab grid grid-cols-3 gap-6'>
            <form className='teachers-form flex justify-center items-center flex-col gap-1 col-span-2'>
                <div className='form-row'>
                    <div className='input-group'>
                        <label>اسم المدرس</label>
                        <input type="text" placeholder='أدخل اسم المدرس الكامل' />
                    </div>
                    <div className='input-group'>
                        <label>التخصص الرئيسي </label>
                        <select >
                            <option value="" >اختر التخصص</option>
                            <option >الفيزياء</option>
                            <option >الرياضيات</option>
                            <option >الكيمياء</option>
                            <option >الأحياء</option>
                        </select>
                    </div>
                </div>
                <div className='form-row'>
                    <div className='input-group'>
                        <label>سنوات الخبرة </label>
                        <input type="number" placeholder=' عدد سنوات الخبرة  ' />
                    </div>
                    <div className='input-group'>
                        <label> معدل التقييم</label>
                        <input type="number" placeholder='من 1 إلى 5' />
                    </div>
                </div>
                <div className='input-group w-full'>
                    <label>نبذة عن المدرس </label>
                    <textarea rows={3} placeholder="اكتب نبذة قصيرة عن المدرس وخبراته"></textarea>
                </div>
                <div className='input-group w-full'>
                    <label>صورة المدرس </label>
                    <div className="upload-zone">
                        <i className="fas fa-cloud-upload-alt" ></i>
                        <p>اسحب صورة المدرس هنا أو انقر للاختيار</p>
                    </div>
                </div>
                <button type="submit" className="submit-btn">
                    <i className="fas fa-plus"></i>
                    <span>إضافة المدرس</span>
                </button>
            </form>
            <div className='teachers-list bg-white/5 h-fit w-90 rounded-2xl border border-gray-700 p-9'>
            <h3 className="font-bold text-l">المدرسين المضافون</h3>
            {teachers.map((teacher, index) => (
                <TeacherList 
                    key={index} 
                    name={teacher.name} 
                    specialization={teacher.specialization} 
                    experience={teacher.experience} 
                />
            ))}
            </div>
        </div>
    )
}