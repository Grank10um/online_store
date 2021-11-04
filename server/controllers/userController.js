const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models');
const ApiError = require("../error/apiError");

const generationJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role}, 
        process.env.SECRET_KEY, 
        {expiresIn: '24h'}
    )
}

class UserController {

    async registration(req,res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            next(ApiError.badRequest('password or email is not correct'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('User allready exists!'))
        }
        const hashPassword = await bcrypt.hash(password,5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generationJwt(user.id, user.email, user.role)
            return res.json({token})
    }

    async login(req,res, next) {
        const {email, password} =req.body
        const user = await User.findOne({where:{email}})
        if (!user) {
            return next(ApiError.internal('User not found!'))
        } 
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Wrong password!'))
        }
        const token = generationJwt(user.id, user.email, user.role)
        return res.json({token})
    
    }

    async check(req,res,next) {
        const token = generationJwt(req.user.id, req.user.email, req.email.role)
        return res.json({token})  
    }

}

module.exports = new UserController()