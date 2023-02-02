let models = require ('../../models/index')

async function getUserById (req, res) {
    try {
        let result = await models.Users.findOne({ 
            where: {id: req.params.id},
            attributes: ['fullname', 'email', 'phone_number', 'bio']            
        })
        if (result.length < 1) {
            return res.json({message: 'This user account does not exist. Try searching for another!'})
        }
        res.json(result)
    } catch (error) {
        res.json(error)        
    }
}

async function updateUser(req, res) {
    try {
        let result = await models.Users.findOne({ where: {id: req.params.id} })
            if (result.length < 1) {
                res.json({message: 'This user account does not exist!'})
            }
            let updateUser = await result.update(req.body)
            res.json(result)
    } catch (error) {
        res.json(error)
    }    
}

async function deleteUser (req, res) {
    try {
        let deleteUser = await models.Users.destroy({ where: { id: req.params.id }})
        res.json({message: "This user account has been deleted", id: req.params.id})
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    getUserById,
    updateUser,
    deleteUser
}