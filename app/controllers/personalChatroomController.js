let models = require ('../../models/index')

async function createPersonalChatroom (req, res) {
    try {
        let createPersonalChatroom = await models.Personal_Chatroom.create(req.body)
        return res.json(req.body)
    } catch (error) {
        return res.json(error)
    }
}

async function getPersonalChatroom (req, res) {
    try {
        let result = await models.Personal_Chatroom.findAll({})
        if (result.length < 1) {
            res.json({message: 'This chat room is not available!'})
        }
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function getPersonalChatroomById (req, res) {
    try {
        let result = await models.Personal_Chatroom.findOne({ where: {id: req.params.id} })
        if (result.length < 1) {
            return res.json({message: 'The Chat room is not created yet!'})
        }
        res.json(result)
    } catch (error) {
        res.json(error)        
    }
}

async function deletePersonalChatroom (req, res) {
    try {
        let deletePersonalChatroom = await models.Personal_Chatroom.destroy({ where: {id: req.params.id }})
        res.json({message: 'The chat room has been deleted'})
    } catch (error) {
        res.json(error)       
    }
}

module.exports = {
    createPersonalChatroom,
    getPersonalChatroom,
    getPersonalChatroomById,
    deletePersonalChatroom
}