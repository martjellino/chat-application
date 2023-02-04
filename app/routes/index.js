let express = require('express')
let router = express.Router()

let authController = require('../controllers/authController')
let userController = require('../controllers/userController')
let personalMessageController = require('../controllers/personalMessageController')
let personalChatroomMessage = require('../controllers/personalChatroomController')
let groupMessageController = require('../controllers/groupMessageController')
let groupChatroomController = require('../controllers/groupChatroomController')
let groupMemberController = require('../controllers/groupMemberController')
let authMiddleware = require('../middlewares/authMiddleware')

// Register & Login 
router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

// CRUD User
router.get('/user/:id', authMiddleware.isAuthenticate, userController.getUserById)
router.put('/user/:id', authMiddleware.isAuthenticate, userController.updateUser)
router.delete('/user/:id', authMiddleware.isAuthenticate, userController.deleteUser)

// CRUD Personal Chatroom (Can't update/change chatroom)
router.post('/personal_chatroom', authMiddleware.isAuthenticate, personalChatroomMessage.createPersonalChatroom)
router.get('/personal_chatroom', authMiddleware.isAuthenticate, personalChatroomMessage.getPersonalChatroom)
router.get('/personal_chatroom/:id', authMiddleware.isAuthenticate, personalChatroomMessage.getPersonalChatroomById)
router.delete('/personal_chatroom/:id', authMiddleware.isAuthenticate, personalChatroomMessage.deletePersonalChatroom)

// CRUD Personal Message (Can't update/change message)
router.post('/personal_message', authMiddleware.isAuthenticate, personalMessageController.createPersonalMessage)
router.get('/personal_message/:personal_chatroom_id/:id', authMiddleware.isAuthenticate, personalMessageController.getPersonalMessageById)
router.delete('/personal_message/:personal_chatroom_id/:id', authMiddleware.isAuthenticate, personalMessageController.deletePersonalMessage)

// CRUD Group Message (Can't update/change message)
router.post('/group_message', authMiddleware.isAuthenticate, groupMessageController.createGroupMessage)
router.get('/group_message/:group_chatroom_id/:id', authMiddleware.isAuthenticate, groupMessageController.getGroupMessageById)
router.delete('/group_message/:group_chatroom_id/:id,', authMiddleware.isAuthenticate, groupMemberController.deleteGroupMember)

// CRUD Group Chatroom
router.post('/group_chatroom', authMiddleware.isAuthenticate, groupChatroomController.createGroupChatroom)
router.get('/group_chatroom', authMiddleware.isAuthenticate, groupChatroomController.getGroupChatroom)
router.get('/group_chatroom/:id', authMiddleware.isAuthenticate, groupChatroomController.getGroupChatroomById)
router.put('/group_chatroom/:id', authMiddleware.isAuthenticate, groupChatroomController.updateGroupChatroom)
router.delete('/group_chatroom/:id', authMiddleware.isAuthenticate, groupChatroomController.deleteGroupChatroom)

// CRUD Group Member 
router.post('/member', authMiddleware.isAuthenticate, groupMemberController.createGroupMember)
router.get('/member', authMiddleware.isAuthenticate, groupMemberController.getGroupMember)
router.get('/member/:id', authMiddleware.isAuthenticate, groupMemberController.getGroupMemberById)
router.delete('/member/:id', authMiddleware.isAuthenticate, groupMemberController.deleteGroupMember)

module.exports = router