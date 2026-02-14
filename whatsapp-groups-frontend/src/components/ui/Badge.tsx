export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-1 text-xs bg-slate-100 rounded-full">
      {children}
    </span>
  )
}
