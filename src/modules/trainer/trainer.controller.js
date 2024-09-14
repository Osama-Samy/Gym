import { Trainer } from "../../../database/models/trainer.models.js"

const getAllTrainers = async (req, res) => {
    try {
    let trainers = await Trainer.find()
    res.send(trainers)
    } catch (error) {
        res.send(error)
    }
}

const addTrainer = async (req, res) => {
    try {
    let trainer = Trainer(req.body)
    await trainer.save()
    res.send({"message" : "Trainer Added Successfully"})
    } catch (error) {
        res.send(error)
    }
}

const getOneTrainer = async (req, res) => {
    try {
    let trainer = await Trainer.findById(req.params.id)
    res.send(trainer)
    } catch (error) {
        res.send({"message" : "Trainer Not Found"})
    }
}

const updateTrainer = async (req, res) => {
    try {
    await Trainer.findByIdAndUpdate(req.params.id, req.body)
    res.send({"message" : "Trainer Updated Successfully"})

    } catch (error) {
        res.send({"message" : "Trainer Not Found"})
    }
}

const deleteTrainer = async (req, res) => {
    try {
    await Trainer.findByIdAndDelete(req.params.id)
    res.send({"message" : "Trainer Deleted Successfully"})
    
    } catch (error) {
        res.send({"message" : "Trainer Not Found"})
    }
}

export { 
    getAllTrainers,
    addTrainer,
    getOneTrainer,
    updateTrainer,
    deleteTrainer
}