const jwt = require("jsonwebtoken")
const User = require("../model/user-model")
const CryptoJS = require("crypto-js")// used to encrypt password

const loginHandler = async(req,res)=>{
    const {phone,password} = req.body;

    const user = await  User.findOne({phone});
    const {name} = user
    if(user){
        decryptPass = CryptoJS.AES.decrypt(user.password,process.env.PASSWORD_SECRET_KEY).
        toString(CryptoJS.enc.Utf8)
        if(decryptPass===password){
            const accessToken = jwt.sign({name},process.env.ACCESS_TOKEN)
            req.headers.authorization = accessToken
            res.send({
                ok:true,
                message:"login sucess",
                token:accessToken,
                userData:user
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
        res.send({
            ok:"false",
            message:"Invalid Phone NUmber"
        })
    }
    // User.findOne({phone})
    // .then((data)=>{
    //     if(data){
    //         decryptPass = CryptoJS.AES.decrypt(data.password,process.env.PASSWORD_SECRET_KEY).
    //         toString(CryptoJS.enc.Utf8)
    //         console.log(data.phone==phone)
    //         if(decryptPass===password){
    //             const accessToken = jwt.sign({name},process.env.ACCESS_TOKEN)
    //             req.headers.authorization = accessToken
    //             res.send({
    //                 ok:true,
    //                 message:"login sucess",
    //                 token:accessToken
    //             })
    //         }
    //         else{
    //             res.send({
    //                 ok:false,
    //                 message:"invalid password"
    //             })
    //         } 
    //     }
    //     else{
    //         res.send({
    //             ok:false,
    //             message:"invalid user"
    //         })
    //     }
    // })
    // .catch(()=>res.send({
    //     ok:false,
    //     message:"failed to fetch dataaaa"
    // }))
}

module.exports = loginHandler