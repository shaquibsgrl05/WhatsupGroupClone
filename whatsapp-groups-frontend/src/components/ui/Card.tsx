export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white border rounded-2xl shadow-sm p-6">
      {children}
    </div>
  )
}
