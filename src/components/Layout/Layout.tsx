import NavBar from "./NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" min-h-screen " >
      <NavBar />
      <div className=" p-2 bg-black shadow-md rounded-2xl m-8 md:mx-12 xl:mx-26 ">{children}</div>
    </div>
  );
}
