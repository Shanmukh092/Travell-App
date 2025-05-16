const jwt = require("jsonwebtoken")

const verifyUser = (req,res,next)=>{
    const token = req.headers['authorization'];
    // console.log(req.headers)
    if(token){
        jwt.verify(token,process.env.ACCESS_TOKEN,(err,user)=>{
            // console.log(err,user)
            if(err){
                res.send({
                    ok:false,
                    message:"Invalid User"
                })
            }
            req.user = user;
            next()
        }) 
    }
    else{
        res.send({
            ok:false,
            message:"you need to login first"
        })
    }
}
module.exports = verifyUser;