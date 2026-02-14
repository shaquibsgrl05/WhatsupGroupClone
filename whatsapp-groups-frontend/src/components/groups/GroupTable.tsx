"use client";

import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { getGroups } from "../../services/group.service";
import { Group } from "../../types/group.types";
import AvatarStack from "../ui/AvatarStack";
import GroupDetailsPanel from "./GroupDetailsPanel";
import { Users } from "lucide-react";

export default function GroupTable() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [selected, setSelected] = useState<Group | null>(null);
  const [search, setSearch] = useState("");
  const [projectFilter, setProjectFilter] = useState("all");
  const [labelFilter, setLabelFilter] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGroups();
      setGroups(data);
    };

    fetchData();
  }, []);

  const getProjectColor = (project: string) => {
    const colors: Record<string, string> = {
      "WhatsApp Clone": "bg-green-100 text-green-700",
      Demo: "bg-blue-100 text-blue-700",
    };

    return colors[project] || "bg-purple-100 text-purple-700";
  };

  const getAvatarColor = (name: string) => {
    const colors = [
      "bg-blue-100 text-blue-600",
      "bg-green-100 text-green-600",
      "bg-purple-100 text-purple-600",
      "bg-pink-100 text-pink-600",
    ];

    const index = name.length % colors.length;
    return colors[index];
  };

  const filteredGroups = groups.filter((group) => {
    const matchesSearch = group.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesProject =
      projectFilter === "all" || group.project === projectFilter;

    const matchesLabel =
      labelFilter === "all" || group.labels?.includes(labelFilter);

    return matchesSearch && matchesProject && matchesLabel;
  });

  return (
    <div className="flex h-[calc(100vh-80px)] bg-gray-50">

      {/* LEFT SIDE */}
      <div className="flex-1 p-6 flex flex-col">

        {/* Filters */}
        <div className="flex items-center gap-4 mb-6">

          <div className="w-72">
            <input
              type="text"
              placeholder="Search groups..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 text-sm border rounded-lg bg-white
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <select
            value={projectFilter}
            onChange={(e) => setProjectFilter(e.target.value)}
            className="px-4 py-2 text-sm border rounded-lg bg-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Projects</option>
            {[...new Set(groups.map((g) => g.project))].map((project) => (
              <option key={project} value={project}>
                {project}
              </option>
            ))}
          </select>

          <select
            value={labelFilter}
            onChange={(e) => setLabelFilter(e.target.value)}
            className="px-4 py-2 text-sm border rounded-lg bg-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Labels</option>
            {[...new Set(groups.flatMap((g) => g.labels || []))].map((label) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))}
          </select>

        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow-sm border flex flex-col flex-1 min-h-0">

          {/* Header */}
          <div className="border-b bg-gray-50">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-600">

                  {/* ✅ Checkbox Header */}
                  <th className="px-6 py-3 w-10 text-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 
                                 text-blue-600 focus:ring-blue-500"
                    />
                  </th>

                  <th className="text-left px-6 py-3 font-medium">Group Name</th>
                  <th className="text-left px-6 py-3 font-medium">Project</th>
                  <th className="text-left px-6 py-3 font-medium">Labels</th>
                  <th className="text-left px-6 py-3 font-medium">Members</th>
                  <th className="text-left px-6 py-3 font-medium">Last Active</th>
                </tr>
              </thead>
            </table>
          </div>

          {/* Scrollable Body */}
          <div className="overflow-y-auto flex-1 min-h-0">
            <table className="w-full text-sm">
              <tbody>
                {filteredGroups.map((group) => (
                  <tr
                    key={group.id}
                    onClick={() => setSelected(group)}
                    className="border-b hover:bg-gray-50 transition cursor-pointer"
                  >

                    {/* ✅ Row Checkbox */}
                    <td
                      className="px-6 py-4 text-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 
                                   text-blue-600 focus:ring-blue-500"
                      />
                    </td>

                    {/* Avatar + Name */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`h-9 w-9 rounded-full flex items-center justify-center ${getAvatarColor(
                            group.name
                          )}`}
                        >
                          <Users size={18} />
                        </div>

                        <span className="font-medium text-gray-800">
                          {group.name}
                        </span>
                      </div>
                    </td>

                    {/* Project */}
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 text-xs rounded-full font-medium ${getProjectColor(
                          group.project
                        )}`}
                      >
                        {group.project}
                      </span>
                    </td>

                    {/* Labels */}
                    <td className="px-6 py-4">
                      <div className="flex gap-2 flex-wrap">
                        {group.labels?.map((label, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
                          >
                            {label}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* Members */}
                    <td className="px-6 py-4">
                      <AvatarStack count={group.members} />
                    </td>

                    {/* Last Active */}
                    <td className="px-6 py-4 text-gray-500">
                      {formatDistanceToNow(new Date(group.lastActive), {
                        addSuffix: true,
                      })}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE PANEL */}
      <GroupDetailsPanel group={selected} />

    </div>
  );
}
