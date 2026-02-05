import Sidebar from "@/components/dashboard/Sidebar";
import TopNavbar from "@/components/dashboard/TopNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Sidebar />
      <TopNavbar />
      <div className="ml-64 pt-20">
        <main className="px-8 py-8">
            {children}
        </main>
      </div>
    </div>
  );
}
