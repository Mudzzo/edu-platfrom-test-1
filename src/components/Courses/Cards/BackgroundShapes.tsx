interface BackgroundShapesProps {
  variant?: number;
}

const BackgroundShapes: React.FC<BackgroundShapesProps> = ({ variant = 1 }) => {
  return (
    <>
      {variant ? <>
      <div className="absolute inset-0 bg-gradient-to-br to-stone-50/5" />
      <div className="absolute -left-12 -top-12 w-24 h-24 bg-indigo-200/10 backdrop-blur-[20px] rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
      <div className="absolute -right-12 -bottom-12 w-24 h-24 bg-indigo-200/10 backdrop-blur-[20px] rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
      </> 
      : 
      <> 
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-purple-50/30 rounded-2xl" />
      <div className="absolute -left-10 -top-10 w-20 h-20 bg-purple-100 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl" />
      <div className="absolute -right-10 -bottom-10 w-20 h-20 bg-purple-100 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl" />
      </>}
    </>
  )
}

export default BackgroundShapes;