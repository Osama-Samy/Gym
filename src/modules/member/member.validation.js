import Joi from "joi"

const memberSchema = Joi.object({
    name: Joi.string().required(),
    nationalId: Joi.string().required().unique(),
    phone: Joi.string().required(),
    membershipStart: Joi.date().required(),
    membershipEnd: Joi.date().required(),
    cost: Joi.number().required(),
    status: Joi.string().required(),
    trainer: Joi.string().required()
})

export default memberSchema