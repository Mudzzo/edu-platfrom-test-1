
export default function BackgroundShapes() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-purple-50/30" />
      <div className="absolute -left-12 -top-12 w-24 h-24 bg-purple-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
      <div className="absolute -right-12 -bottom-12 w-24 h-24 bg-purple-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
    </>
  )
}
