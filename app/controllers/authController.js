let models = require('../../models/index')
let jwt = require('jsonwebtoken')
let bcrypt = require('bcrypt')
let Validator = require('validatorjs')

async function register (req, res) {
    try {
        let rules = {
            fullname: 'required|min:3|max:50',
            username: 'required|min:3|max:30',
            email: 'required|email|min:10',
            password: 'required|min:6',
            phone_number: 'required|numeric',
            bio: 'max:50'
        }
        let validation = new Validator (req.body, rules)

        if (validation.passes()) {
            let salt = bcrypt.genSaltSync(10)
            let password = bcrypt.hashSync(req.body.password, salt)
            req.body.password = password

            let register = await models.Users.create(req.body)

            let emailCheck = await models.Users.findOne({ where: {email: req.body.email} })
            if (emailCheck.length > 0) {
                return res.json({message: 'This email has been registered, please change to another email!'})
            }

            let usernameCheck = await models.Users.findOne({ where: {username: req.body.username} })
            if (usernameCheck.length > 0) {
                return res.json({message: 'This username has been registered, please change to another username!'})
            }
            
            let phoneNumberCheck = await models.Users.findOne({ where: {phone_number: req.body.phone_number} })
            if (phoneNumberCheck.length > 0) {
                return res.json({message: 'This phone number has been registered, please change to another phone number!'})
            } else {
                return res.json({message: 'Your account has been registered successfully!'})
            }
        } else {
            return res.json({ errors: validation.errors.all() })
        }
    } catch (error) {
        res.json(error)
    }
}

async function login (req, res) {
    try {
        let result = await models.Users.findOne({where: {email: req.body.email}})
        if (result.length < 1) {
            return res.send("Your account is not registered yet!")
        }
        
        let password = req.body.password
        let match = await bcrypt.compare(password, result.password)
        if (!match) {
            return res.send("Incorrect email or password!")
        }

        let payload = {
            id: result.id,
            name: result.name,
            email: result.email
        }

        let token = jwt.sign(payload, 'secret')
        return res.json({message: "Successfully Login!", access_token: token})

    }   catch (error) {
        return res.json(error)
    }
}

module.exports = {
    register,
    login
}