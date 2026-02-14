import { formatDistanceToNow } from "date-fns"
import { Group } from "../../types/group.types"

interface Props {
  group: Group | null
}

export default function GroupDetailsPanel({ group }: Props) {
  if (!group) {
    return (
      <div className="w-80 border-l bg-gray-50 p-6 text-gray-400">
        Select a group
      </div>
    )
  }

  return (
    <div className="w-80 border-l bg-white p-6">
      <h2 className="text-lg font-semibold mb-4">{group.name}</h2>

      <div className="space-y-3 text-sm">
        <div>
          <p className="text-gray-500">Project</p>
          <p className="font-medium">{group.project}</p>
        </div>

          <div>
          <p className="text-gray-500">Avatar</p>
          <p className="font-medium">{group.labels}</p>
        </div>

        <div>
          <p className="text-gray-500">Members</p>
          <p className="font-medium">{group.members}</p>
        </div>

        <div>
          <p className="text-gray-500">Last Active</p>
          <p className="font-medium">
            {formatDistanceToNow(new Date(group.lastActive), {
              addSuffix: true,
            })}
          </p>
        </div>
      </div>
    </div>
  )
}
