import Joi from "joi";

const trainerSchema = Joi.object({
    name: Joi.string().required(),
    nationalId: Joi.string().required().unique(),
    durationStart: Joi.date().required(),
    durationEnd: Joi.date().required(),
})

export default trainerSchema