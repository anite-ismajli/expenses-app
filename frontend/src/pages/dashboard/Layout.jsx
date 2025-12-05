import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";


const Layout = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-[#0b1220] text-slate-100">
      <AppSidebar />

      <main className="flex-1 p-6">
        {children}
      </main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;