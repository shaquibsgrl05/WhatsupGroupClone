interface Props {
  count: number
}

export default function AvatarStack({ count }: Props) {
  const maxVisible = 3
  const extra = count - maxVisible

  return (
    <div className="flex items-center">
      {[...Array(Math.min(count, maxVisible))].map((_, index) => (
        <div
          key={index}
          className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white -ml-2 first:ml-0"
        />
      ))}

      {extra > 0 && (
        <div className="w-8 h-8 rounded-full bg-gray-500 text-white text-xs flex items-center justify-center border-2 border-white -ml-2">
          +{extra}
        </div>
      )}
    </div>
  )
}
