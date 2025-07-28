import NavBar from "./NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen font-sans overflow-x-clip" >
      <NavBar />
      <div>{children}</div>
    </div>
  );
}