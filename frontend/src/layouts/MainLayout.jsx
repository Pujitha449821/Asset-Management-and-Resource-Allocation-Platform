import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <Sidebar />
      {children}
    </>
  );
}

export default MainLayout;