import { supabase } from '../config/supabase'
import { Group } from '../types/group.types'

export const createGroupService = async (group: any) => {
  return await supabase
    .from("groups")
    .insert([group])
    .select()
    .single()
}

export const getAllGroupsService = async () => {
  return await supabase
    .from('groups')
    .select('*')
    .order('last_active', { ascending: false })
}

export const getGroupByIdService = async (id: string) => {
  return await supabase
    .from('groups')
    .select('*')
    .eq('id', id)
    .single()
}

export const deleteGroupService = async (id: string) => {
  return await supabase
    .from('groups')
    .delete()
    .eq('id', id)
}
