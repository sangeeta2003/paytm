const express = require('express')
const zod = rtequire('zod');
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('./config');
 const router = express.Router();
 const {User} = require('../routes/config');
const { authMiddleware } = require('./middleware');


//  signup and signin routes

const signupSchema = zod.object({
    username:zod.string().email(),
    password:zod.string(),
    firstName:zod.string(),
    lastName:zod.string()
}) 
 router.post('/signup',async(req,res)=>{
    // const body = req.body;
    const {success} = signupSchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message:"Email already taken  /Incorrect inputs"
        })
    }
    const existingUser =await User.findOne({
        username:body.username
    })
    if(existingUser){
        return res.status(411).json({
            message:"Email already taken  /Incorrect inputs"
        })
    }
    const user = await User.create({
        username:req.body.username,
        password:req.body.password,
        firstName:user.body.firstName,
        lastName:user.body.lastName,
    })

    const userId = user._id;

   
    const token = jwt.sign({
       userId
    },JWT_SECRET);
    res.json({
        message:"user created successfully",
        token:token
    })
 })


 const signinBody = zod.object({
    username:zod.string().email(),
    password:zod.string()
 })
 router.post('/signin',async(req,res)=>{
    const {success} = signinBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            msg:"email already taken /incorrect inputs"
        })
    }
    const user = await User.findOne({
        username:req.body.username,
        password:req.body.password
    });
    if(user){
        const token =jwt.sign({
            userId : user._id

        },JWT_SECRET) ;
        res.json({
            msg:"error while loggin in"
        })  
    }
 })

const updateBody = zod.object({
    password:zod.string().optional(),
    firstName:zod.string().optional(),
    lastName:zod.string().optional(),

})
router.put('/',authMiddleware, async(req,res)=>{
    const success = req.safeParse(req.body)
    if(!success){
        req.status(411).json({
            msg:"error while updating the information"
        })
    }
    await User.updateBody(req.body,{
        id:req.userId
    })
    res.json({
        msg:"updated successfully"  
    })
} )
router.get('/bulk',async(req,res)=>{
const filter = req.query.filter || "";

const users = await User.find({
    $or:[{
        firstName:{
            "$regex":filter
        }

    },  {
        lastName:{
            "$regex":filter
        }
    }
]
})
res.json({
    user:users.map(user=>({
        username:user.username  ,
        firstName:user.firstName,
        lastName:user.lastName,
        _id:user._id,

    }))
})

})


 module.exports = router