let models = require ('../../models/index')

async function createGroupMember (req, res) {
    try {
        let createGroupMember = await models.Group_Members.create(req.body)
        return res.json(req.body)
    } catch (error) {
        return res.json(error)
    }
}

async function getGroupMember (req, res) {
    try {
        let result = await models.Group_Members.findAll({})
        if (result.length < 1) {
            res.json({message: 'This group member is not available yet!'})
        }
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function getGroupMemberById (req, res) {
    try {
        let result = await models.Group_Members.findOne({ where: {id: req.params.id} })
        if (result.length < 1) {
            return res.json({message: 'The group member is not created yet!'})
        }
        res.json(result)
    } catch (error) {
        res.json(error)        
    }
}

async function deleteGroupMember (req, res) {
    try {
        let deleteGroupMember = await models.Group_Members.destroy({ where: {id: req.params.id }})
        res.json({message: 'The group member has been deleted'})
    } catch (error) {
        res.json(error)       
    }
}

module.exports = {
    createGroupMember,
    getGroupMember,
    getGroupMemberById,
    deleteGroupMember
}