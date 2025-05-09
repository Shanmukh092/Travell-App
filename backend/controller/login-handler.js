const jwt = require("jsonwebtoken")
const User = require("../model/user-model")
const CryptoJS = require("crypto-js")// used to encrypt password

const loginHandler = (req,res)=>{
    const {name,email,password} = req.body;
    User.findOne({name,email})
    .then((data)=>{
        if(data){
            decryptPass = CryptoJS.AES.decrypt(data.password,process.env.PASSWORD_SECRET_KEY).
            toString(CryptoJS.enc.Utf8)
            console.log(decryptPass)
            if(decryptPass===password){
                const accessToken = jwt.sign({name},process.env.ACCESS_TOKEN)
                req.headers.authorization = accessToken
                console.log(req.headers)
                res.send({
                    ok:true,
                    message:"login sucess",
                    token:accessToken
                })
            }
            else{
                res.send({
                    ok:false,
                    message:"invalid password"
                })
            } 
        }
        else{
            console.log(data)
            res.send({
                ok:false,
                message:"invalid user"
            })
        }
    })
    .catch(()=>res.send({
        ok:false,
        message:"failed to fetch data"
    }))
}

module.exports = loginHandler