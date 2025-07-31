export default function TeacherList({name, specialization, experience}: {name: string, specialization: string, experience: number}) {
    return (
        <div>
            <div className="bg-white/5 rounded-2xl border border-gray-700 mt-2 p-4 flex items-center">
                <div className="h-10 w-10 bg-linear-135 from-secondary to-primary rounded-full flex items-center justify-center">
                    <i className="fas fa-user"></i>
                </div>
                <div className=" flex flex-col gap-1 text-xs text-gray-500 mx-2">
                    <h3 className="text-white bold text-sm">{name}</h3>
                    <p>{specialization} - {experience}  سنة خبرة </p>
                </div>
                <div className="flex items-center gap-2 mr-auto">
                    <button className="h-10 w-10 bg-red-500/30 rounded-full">
                        <i className="fas fa-edit opacity-30"></i>
                    </button>
                    <button className="h-10 w-10 bg-blue-600/30 rounded-full">
                        <i className="fas fa-trash opacity-30"></i>
                    </button>
                </div>
            </div>
        </div>

    )
}