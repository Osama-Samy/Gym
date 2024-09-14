import { Member } from "../../../database/models/member.model.js"


const getAllMembers = async (req, res) => {
    try {
    let members = await Member.find()
    res.send(members)
    } catch (error) {
        res.send(error)
    }
}

const addMember = async (req, res) => {
    try {
    let member = Member(req.body)
    await member.save()
    res.send({"message" : "Member Added Successfully"})
    } catch (error) {
        res.send(error)
    }
}

const updateMember = async (req, res) => {
    try {
    await Member.findByIdAndUpdate(req.params.id, req.body)
    res.send({"message" : "Member Updated Successfully"})
    } catch (error) {
        res.send({"message" : "Member Not Found"})
    }
}

const deleteMember = async (req, res) => {
    await Member.findByIdAndDelete(req.params.id)
    res.send({"message" : "Member Deleted Successfully"})
}

const getOneMember = async (req, res) => {
    try {
    let member = await Member.findById(req.params.id)
    res.send(member)
    } catch (error) {
        res.send({"message" : "Member Not Found"})
    }
}


export { 
    getAllMembers,
    addMember,
    getOneMember,
    updateMember,
    deleteMember
}