let models = require ('../../models/index')

async function createPersonalMessage (req, res) {
    try {
        let createPersonalMessage = await models.Personal_Messages.create(req.body)  
        return res.json({message: 'Message has been sent!'})      
    } catch (error) {
        res.json(error)  
    }
}

async function getPersonalMessageById (req, res) {
    try {
        let result = await models.Personal_Messages.findOne({ where: {id: req.params.id, personal_chatroom_id: req.params.personal_chatroom_id} })    
        if (result.length < 1) {
            return res.json({message: 'The message does not exist'})
        } 
        res.json(result)
    } catch (error) {
        return res.json(error)        
    }
}

async function getPersonalMessageByChatroomId (req, res) {
    try {
        let result = await models.Personal_Messages.findAll({
            where: {personal_chatroom_id: req.params.personal_chatroom_id}
        })
        if (result.length < 1) {
            return res.json({message: 'The message does not exist'})
        }
        res.json(result)
    } catch (error) {
        return res.json(error)
    }
}

async function deletePersonalMessage (req, res) {
    try {
        let deletePersonalMessage = await models.Personal_Messages.destroy({ where: { id: req.params.id, personal_chatroom_id: req.params.personal_chatroom_id }})
        res.json({message: "The message has been deleted!"})
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    createPersonalMessage,
    getPersonalMessageById,
    getPersonalMessageByChatroomId,
    deletePersonalMessage
}