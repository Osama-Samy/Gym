import { Router } from "express"
import { addMember, getAllMembers, getOneMember, updateMember , deleteMember} from "./member.controller.js"

const memberRouter = Router()

memberRouter.get('/', getAllMembers)

memberRouter.post('/', addMember)

memberRouter.get('/:id', getOneMember)

memberRouter.put('/:id', updateMember)

memberRouter.delete('/:id', deleteMember)

export default memberRouter