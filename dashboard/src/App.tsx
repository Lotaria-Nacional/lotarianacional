import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./app/context/auth-context";
import Sidebar from "./shared/components/common/sidebar";
import Header from "./shared/components/common/header";
import BottomNavbar from "./shared/components/mobile/bottom-navbar";

function App() {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <main className="min-h-screen pb-[60px] lg:pb-0 flex">
      <Sidebar />

      <section className="relative min-h-screen flex flex-col w-full lg:w-main-content overflow-x-hidden pt-[80px] pb-[20px]">
        <Header />
        <div className="w-full min-h-main-content py-4">
          <Outlet />
        </div>
      </section>

      <BottomNavbar />
    </main>
  );
}

export default App;
