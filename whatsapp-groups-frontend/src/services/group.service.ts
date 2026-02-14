import axios from "axios"
import { Group } from "../types/group.types"

const API = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
})

/**
 * GET ALL GROUPS
 */
// export const getGroups = async (): Promise<Group[]> => {
//   const res = await API.get("/groups")

//   // Backend returns { success, count, data }
//   return res.data.data
// }
export const getGroups = async (): Promise<Group[]> => {
  const res = await API.get("/groups")

return res.data.data.map((group: any) => ({
  id: group.id,
  name: group.name,
  project: group.project,
  members: group.members_count,
  lastActive: group.last_active,
  labels: group.labels || [],
}))
}

/**
 * GET GROUP BY ID
 */
export const getGroupById = async (id: string): Promise<Group> => {
  const res = await API.get(`/groups/${id}`)

  // Backend returns { success, data }
  return res.data.data
}

/**
 * CREATE GROUP
 */
export const createGroup = async (data: {
  name: string
  project?: string
  members_count?: number
}): Promise<Group> => {
  const res = await API.post("/groups", data)

  // Backend returns { success, data }
  return res.data.data
}

/**
 * DELETE GROUP
 */
export const deleteGroup = async (id: string): Promise<void> => {
  await API.delete(`/groups/${id}`)
}
