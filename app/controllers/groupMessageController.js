let models = require ('../../models/index')

async function createGroupMessage (req, res) {
    try {
        let createGroupMessage = await models.Group_Messages.create(req.body)
        return res.json({message: 'Message has been sent!'})
    } catch (error) {
        res.json(error)
    }
}

async function getGroupMessageById (req, res) {
    try {
        let result = await models.Group_Messages.findOne({ 
            where: {id: req.params.id, group_chatroom_id: req.params.group_chatroom_id},
            include: {
                association: 'group_chatroom',
                attributes: ['group_name'],
                include: {
                    association: 'group_members',
                    attributes: ['users_id']
                }
            }
        })
        if (result.length < 1) {
            return res.json({message: 'The message does not exist'})
        }
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function getGroupMessageByChatroomId (req, res) {
    try {
        let result = await models.Group_Messages.findAll({
            where: {group_chatroom_id: req.params.group_chatroom_id},
            include: {
                association: 'group_chatroom',
                attributes: ['group_name'],
                include: {
                    association: 'group_members',
                    attributes: ['users_id']
                }
            }
        })
        if (result.length < 1) {
            return res.json({message: 'The message does not exist'})
        }
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function deleteGroupMessage (req, res) {
    try {
        let deleteGroupMessage = await models.Group_Messages.destroy({ where: {group_chatroom_id: req.params.group_chatroom_id, id: req.params.id } })
        res.json({message: 'The message has been deleted!'})
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    createGroupMessage,
    getGroupMessageById,
    getGroupMessageByChatroomId,
    deleteGroupMessage
}