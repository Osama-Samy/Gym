import { Router } from "express"
import { addTrainer, getAllTrainers, getOneTrainer, updateTrainer , deleteTrainer} from "./trainer.controller.js"

const trainerRouter = Router()

trainerRouter.get('/', getAllTrainers)

trainerRouter.post('/', addTrainer)

trainerRouter.get('/:id', getOneTrainer)

trainerRouter.put('/:id', updateTrainer)

trainerRouter.delete('/:id', deleteTrainer)

export default trainerRouter