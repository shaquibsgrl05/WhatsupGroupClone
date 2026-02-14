import express from "express"
import {
  createGroup,
  getAllGroups,
  getGroupById,
  deleteGroup
} from "../controller/group.controller"

const router = express.Router()

// GET all groups
router.get("/", getAllGroups)

// POST create group
router.post("/", createGroup)

// GET single group
router.get("/:id", getGroupById)

// DELETE group
router.delete("/:id", deleteGroup)

export default router
