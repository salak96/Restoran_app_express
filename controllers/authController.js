const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { errorResponse } = require('../utils/errorResponse.js');

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findByEmail(email);
        if(existingUser){
            return errorResponse(res,400,"Email sudah terdaftar");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const userId = await User.create({ name, email, password: hashedPassword });

        res.status(201).json({ message: 'User registered successfully', userId });
    } catch (error) {
       return errorResponse(res,500,error.message);
    }
};

exports.login = async(req,res)=>{
    try {
        const { email, password } = req.body;
        const user = await User.findByEmail(email);

        if(!user){
             return errorResponse(res,400,"Email atau Password salah");
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
             return errorResponse(res,400,"Email atau Password salah");
        }
        const token = jwt.sign({id: user.id},process.env.JWT_SECRET,{expiresIn:'1h'})
        res.status(200).json({token})
    } catch (error) {
        return errorResponse(res,500,error.message);
    }
}