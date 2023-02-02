let models = require ('../../models/index')

async function createGroupChatroom (req, res) {
    try {
        let createGroupChatroom = await models.Group_Chatroom.create(req.body)
        return res.json(req.body)
    } catch (error) {
        return res.json(error)
    }
}

async function getGroupChatroom (req, res) {
    try {
        let result = await models.Group_Chatroom.findAll({})
        if (result.length < 1) {
            res.json({message: 'This chat room is not available!'})
        }
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function getGroupChatroomById (req, res) {
    try {
        let result = await models.Group_Chatroom.findOne({ where: {id: req.params.id} })
        if (result.length < 1) {
            return res.json({message: 'The Chat room is not created yet!'})
        }
        res.json(result)
    } catch (error) {
        res.json(error)        
    }
}

async function updateGroupChatroom (req, res) {
    try {
        let result = await models.Group_Chatroom.findOne({ where: {id: req.params.id} })
        if (result.length < 1) {
            return res.json({message: 'This chat room is not available yet!'})
        }
        let updateGroupChatroom = await result.update(req.body)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function deleteGroupChatroom (req, res) {
    try {
        let deleteGroupChatroom = await models.Group_Chatroom.destroy({ where: {id: req.params.id }})
        res.json({message: 'The chat room has been deleted'})
    } catch (error) {
        res.json(error)       
    }
}

module.exports = {
    createGroupChatroom,
    getGroupChatroom,
    getGroupChatroomById,
    updateGroupChatroom,
    deleteGroupChatroom
}