const asyncHandler = require('express-async-handler')
const parent = require('../Models/Parent')

// @desc Get parent
//@route Get /api/parents
// @access private
const getParents = asyncHandler(async(req,res) => {
    res.status (200).json({ message : 'Get parents'})
})

// @desc Post parents
// @route Post /api/parents
// @access private
const setParents = asyncHandler(async (req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status (200).json({ message : 'Set Parents'})
})

// @desc Update students
// @route Update /api/parents/:id
// @access private

const updateParents = asyncHandler(async (req,res) => {
    res.status (200).json({ message : `Update parents ${req.params.id}`})
})

// @desc Delete parent
// @route Delete /api/parents/:id
// @access private
const deleteParents = asyncHandler(async (req,res) => {
    res.status (200).json({ message : `Delete parents ${req.params.id}`})
})



module.exports = {getParents,setParents, updateParents, deleteParents}