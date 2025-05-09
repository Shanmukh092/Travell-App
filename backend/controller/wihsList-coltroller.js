const Wish = require("../model/wishList-model")

const addWishHandler = (req,res)=>{
    const newWish = new Wish(req.body)
    const {hotelId} = req.body
    Wish.findOne({hotelId})
    .then((hotel)=>{
        if(hotel){
            res.send({
                ok:false,
                message:"hotel is already in wishList"
            })
        }
        else{
            newWish.save()
            .then(()=>{
                console.log(req.body.hotelId)
                res.send({
                ok:true,
                wishId:req.body.hotelId
            })})
            .catch(()=>res.send({
                ok:false,
                message:"failed to add wish"
            }))
        }
    }).catch(()=>res.send({
        ok:false,
        message:"failed to fetch data."
    }))
}

const deleteWishHandler = (req,res)=>{
    console.log(req.params)
    Wish.findOne({hotelId:req.params.id})
    .then((hotel)=>{
        if(hotel){
            Wish.deleteOne({hotelId:req.params.id})
            .then((data)=>{
                if(data){
                    res.send({
                        ok:true,
                        message:"hotel removed from wishlist"
                    })
                }
                else{
                    res.send({
                        ok:false,
                        message:"no hotel is present in the wishlist with your given hotel ID"
                    })
                }
            })
            .catch(()=>res.send({
                ok:false,
                message:"failed to connect to db"
            }))
        }
        else res.send({
            ok:false,
            message:"failed to connect to db"
        })
    })
    .catch(()=>res.send({
        ok:false,
        message:"failed to connect to db"
    }))
}

const getAllWishHandler = (req,res)=>{
    Wish.find()
    .then((listOfHotels)=>res.send({
        ok:true,
        listOfHotels,
        message:"Sucessfully fetched data"
    }))
    .catch(()=>res.send({
        ok:false,
        message:"failed to fetch data"
    }))
}



module.exports = {addWishHandler,deleteWishHandler,getAllWishHandler}