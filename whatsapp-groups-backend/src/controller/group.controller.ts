import { Request, Response } from "express";
import {
  createGroupService,
  getAllGroupsService,
  getGroupByIdService,
  deleteGroupService,
} from "../services/group.service";
import { asyncHandler } from "../utils/asyncHandler";

export const createGroup = asyncHandler(async (req: Request, res: Response) => {
  const { name, project, members_count, labels } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Group name is required" });
  }

  const { data, error } = await createGroupService({
    name,
    project,
    members_count,
    labels,
  });

  if (error) throw new Error(error.message);

  res.status(201).json({
    success: true,
    data,
  });
});

export const getAllGroups = asyncHandler(async (_: Request, res: Response) => {
  const { data, error } = await getAllGroupsService();

  if (error) throw new Error(error.message);

  res.status(200).json({
    success: true,
    count: data?.length,
    data,
  });
});

export const getGroupById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    if (Array.isArray(id)) {
      throw new Error("Invalid ID");
    }

    const { data, error } = await getGroupByIdService(id);

    if (error) {
      return res.status(404).json({ message: "Group not found" });
    }

    res.status(200).json({
      success: true,
      data,
    });
  },
);

export const deleteGroup = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  if (Array.isArray(id)) {
    throw new Error("Invalid ID");
  }

  const { error } = await deleteGroupService(id);

  if (error) throw new Error(error.message);

  res.status(200).json({
    success: true,
    message: "Group deleted successfully",
  });
});
