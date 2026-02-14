export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-black text-white rounded-xl text-sm hover:opacity-90 transition"
    >
      {children}
    </button>
  )
}
