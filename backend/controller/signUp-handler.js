const User = require("../model/user-model")
const CryptoJS = require("crypto-js")// used to encrypt password
const isValidEmail = require("../functions/isValidEmail")

const signUpHandler = (req,res)=>{
    const newUser = new User({...req.body,
        password:CryptoJS.AES.encrypt(req.body.password,process.env.PASSWORD_SECRET_KEY).toString()})
    const {email,phone,name} = req.body;
    if(!phone || phone.length!=10){
        res.send({
            ok:false,
            message:"please enter a valid phone number"
        })
    }
    if(!isValidEmail(email)){
        res.send({
            ok:false,
            message:"please enter a valid email address"
        })
    } 
    User.findOne({email})
    .then((user)=>{
        if(user){
            res.send({
                ok:false,
                message:`email already exist please use different email or sign in with given ${email}`
            })
        }
        else{
            User.findOne({phone})
            .then((user)=>{
                if(user){
                    res.send({
                        ok:false,
                        message:`phone number already exist please use different email or sign in with given ${phone}`
                    })
                }
                else{
                    newUser.save()
                    .then(()=>res.send({
                        ok:true,
                        user:name
                    }))
                    .catch((err)=>res.send({
                        ok:false,
                        err:err
                    }))
                    res.send({
                        ok:true,
                        new_user:name
                    })
                }
            })
            .catch(()=>res.send({
                ok:false,
                message:"failed to find user"
            }))
        }
    })
    .catch(()=>res.send({
        ok:false,
        message:"failed to find User"
    }))
}

module.exports = signUpHandler