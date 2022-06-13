const asyncHandler = require('express-async-handler')
const Parent = require('../Models/Parent')
const parent = require('../Models/Parent')
const Student = require('../Models/Student')

// @desc Get parent
//@route Get /api/parents
// @access private
const getParents = asyncHandler(async(req,res) => {
    const Parents =await Parent.find()
    res.status (200).json({count : Parents.length, Parents})
})

// @desc Get single parent
// @route Get /api/student
// @access private
const getParent = asyncHandler(async (req,res) => {
    const parent = await Parent.findById(req.params.id)

    res.status (200).json({parent})
})

// @desc Post parents
// @route Post /api/parents
// @access private
const setParents = asyncHandler(async (req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    const addParents = await Parent.create(req.body)
    res.status (200).json({ addParents})
})

// @desc Update students
// @route Update /api/parents/:id
// @access private

const updateParents = asyncHandler(async (req,res) => {
    const parent = await Parent.findById(req.params.id)

    if(!parent){
        res.status(400)
        throw new Error('Parent not found')
    }

    const updatedParent = await Student.findByIdAndUpdate(req.params.id, req.body,{
        new:true ,
    })
    res.status (200).json({ updateParents})
})

// @desc Delete parent
// @route Delete /api/parents/:id
// @access private
const deleteParents = asyncHandler(async (req,res) => {

    const parent = await Parent.findById(req.params.id)

    if(!parent){
        res.status(400)
        throw new Error('Parent not found')
    }

    await parent.remove()
    res.status (200).json({ id: req.params.id})
})



module.exports = {getParents,getParent,setParents, updateParents, deleteParents}