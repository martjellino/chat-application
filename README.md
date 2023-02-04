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

## 

This is the simplest possible nodejs api using express that responds to any request with: 
```
Yo!
```

### Deploy it in 7 seconds: 
It’s already successfully deployed in https://tense-tank-top-hen.cyclic.app/
![image](https://user-images.githubusercontent.com/119112916/216761486-5e68663f-adba-4d3c-a03f-a355751a3052.png)

[![Deploy to Cyclic](https://deploy.cyclic.app/button.svg)](https://deploy.cyclic.app/)

