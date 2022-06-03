const asyncHandler = require('express-async-handler')

// @desc Get students
// @route Get /api/student
// @access private
const getStudents = asyncHandler(async (req,res) => {
    res.status (200).json({ message : 'Get students'})
})

// @desc Post students
// @route Post /api/student
// @access private
const setStudents = asyncHandler(async (req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status (200).json({ message : 'Set students'})
})

// @desc Update students
// @route Update /api/student/:id
// @access private

const updateStudents = asyncHandler (async (req,res) => {
    res.status (200).json({ message : `Update students ${req.params.id}`})
})

// @desc Delete students
// @route Delete /api/student/:id
// @access private
const deleteStudents = asyncHandler (async (req,res) => {
    res.status (200).json({ message : `Delete students ${req.params.id}`})
})



module.exports = {getStudents,setStudents, updateStudents, deleteStudents}