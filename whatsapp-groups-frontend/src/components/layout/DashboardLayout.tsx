import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-slate-50 min-h-screen">
        <Topbar />
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
