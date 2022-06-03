const asyncHandler = require('express-async-handler')
const Student = require('../Models/Student')


// @desc Get students
// @route Get /api/student
// @access private
const getStudents = asyncHandler(async (req,res) => {
    const students = await Student.find()

    res.status (200).json({count:students.length,students})
})

// @desc Post students
// @route Post /api/student
// @access private
const setStudents = asyncHandler(async (req,res) => {
    if(!req.body){
        res.status(400)
        throw new Error('Please add all the information')
    }
    const addStudents = await Student.create(req.body)
    res.status (200).json(addStudents)
})

// @desc Update students
// @route Update /api/student/:id
// @access private

const updateStudents = asyncHandler (async (req,res) => {
    const  student = await Student.findById(req.params.id)

    if(!student){
        res.status(400)
        throw new Error('Student not found')
    }
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status (200).json(updateStudents)
})

// @desc Delete students
// @route Delete /api/student/:id
// @access private
const deleteStudents = asyncHandler (async (req,res) => {
    const  student = await Student.findById(req.params.id)

    if(!student){
        res.status(400)
        throw new Error('Student not found')
    }

    await student.remove()
    res.status (200).json({id : req.params.id})
})



module.exports = {getStudents,setStudents, updateStudents, deleteStudents}