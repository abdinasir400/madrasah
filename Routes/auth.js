const express =require('express')
const router = express.Router()

// Get api/Auth
//
// @access private
router.get('/',(req,res)=>{
    res.status(200).json({message:'Authenticated'})
})




module.exports = router