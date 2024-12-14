const jwt=require('jsonwebtoken');
const adminLogin=(req,res)=>{
    const {username,password}=req.body;
    if(username==='admin' && password==='admin@123'){
        const token=jwt.sign({role:'admin'},process.env.JWT_SECRET);
        return res.status(200).json({token:token});
    }
  res.status(401).json({message:'Invalid credentials'});
}

module.exports={adminLogin};