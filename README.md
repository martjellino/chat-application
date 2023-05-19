# Chat Application
Chat Application is my final project of Back End Web Development Bootcamp from Dibimbing. The scenario is to be back end developer who create chat application starting from scratch with personal message and group message features.

## General Information
Generally the chat application uses javascript as programming language, node js as run time environment, express js as framework, adn MySQL as RDBMS. Client must register as user to create account. Then User can login with exact combination of email and password to access chat application. Users can create, read, and delete the messages but they are not permissible to update its created messages.

## Simple Architecture Diagram
![image](https://user-images.githubusercontent.com/119112916/216761763-7fe2f143-42f6-4b09-9fc0-8deed9406cb5.png)

- **Chat Application** is used for register and login
- **API Gateway** is used for user management and authentication
- **Chat Service** is used for CRUD about chat service
- **Chat Database** is used to store all data

## Entity Relationship Diagram
![image](https://user-images.githubusercontent.com/119112916/216761881-4a4d44cc-391e-49f9-93fb-a0dec2e4dc6c.png)

Chat application has 6 entities which all of them have one to many relationship from related table.
- **users** is person who want to use chat application
- **personal_messages** is messages that communicate between 2 users
- **personal_chatroom** is chat room that contain 2 users
- **group_messages** is messages that communicate more than 2 users
- **group_chatroom** is chat room that can contain more than 2 users
- **group_members** is member of created group chat room

## Technologies 
![image](https://user-images.githubusercontent.com/119112916/216762452-092e0eeb-4c18-4da0-8690-fbe4165012c9.png)

The chat application is created by:
- bcrypt: ^5.1.0
- express: ^4.18.2
- jsonwebtoken: ^9.0.0
- mysql: ^3.0.1
- sequelize: ^6.28.0
- validatorjs: ^3.22.1

## RESTful API Endpoints
API Endpoint of Register & Login
Method | Endpoint | Function |
--- | --- | --- |
Post | /auth/register | to register itself/create an account in the chat app |
Post | /auth/login | to login in the merchant service in chat app |

API Endpoint of users
Method | Endpoint | Function |
--- | --- | --- |
Get | /user/:id | to get or read single list of user in chat app |
Put | /user/:id | to update a user data in chat app |
Delete | /user/:id | to delete a user in the chat app |

API Endpoint of personal_chatrooms
Method | Endpoint | Function |
--- | --- | --- |
Post | /personal_chatroom | to create a personal chat room in the chat app |
Get | /personal_chatroom | to get the all list of personal chat room from the chat app |
Get | /personal_chatroom/:id | to get the single list of its personal chat room from the chat app |
Delete | /personal_chatroom/:id | to remove a personal chat room in the chat app |

API Endpoint of personal_messages
Method | Endpoint | Function |
--- | --- | --- |
Post | /personal_message | to create a personal message in the chat app |
Get | /personal_message/:personal_chatroom_id/:id | to get the specific single list of personal message from the chat app |
Get | /personal_message/:personal_chatroom_id | to get all list personal message of chat room from the chat app |
Delete | /personal_message/:personal_chatroom_id/:id | to remove personal message from the chat app |

API Endpoint of group_chatroom
Method | Endpoint | Function |
--- | --- | --- |
Post | /group_chatroom | to create a group chat room in the chat app |
Get | /group_chatroom | to get the all list of group chat room from the chat app |
Get | /group_chatroom/:id | to get the single list of its group chat room from the chat app |
Put | /group_chatroom/:id| to update a group chat room in the chat app |
Delete | /group_chatroom/:id | to remove a group chat room in the chat app |

API Endpoint of group_messages
Method | Endpoint | Function |
--- | --- | --- |
Post | /group_message | to create a group message in the chat app |
Get | /group_message/:group_chatroom_id/:id | to get the single list of its group message from the chat app |
Get | /group_message/:group_chatroom_id | to get all list group message of chat room from the chat app |
Delete | /group_message/:group_chatroom_id/:id | to remove a group message in the chat app |

API Endpoint of group_member
Method | Endpoint | Function |
--- | --- | --- |
Post | /member | to create a group member in the chat app |
Get | /member | to get the all list of group member from the chat app |
Get | /member/:id | to get the single list of its group member from the chat app |
Delete | /member/:id | to remove a group member in the chat app |

**Validation of Users Entity**
Field | Format |
--- | --- |
fullname | required, min:3, max:50 |
username | required, min:3, max:30 |
email | required, email, min:10 |
password | required, min:6 |
phone_number | required, numeric |
bio | max:50 |

### Deploy it in 7 seconds: 
It’s already successfully deployed in https://tense-tank-top-hen.cyclic.app/
