const asyncHandler = require('express-async-handler')

// @desc Get teacher
// @route Get /api/teachers
// @access private
const getTeachers = asyncHandler( async (req,res) => {
    res.status (200).json({ message : 'Get teachers'})
})

// @desc Post teachers
// @route Post /api/teachers
// @access private
const setTeachers = asyncHandler( async (req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status (200).json({ message : 'Set teachers'})
})

// @desc Update teachers
// @route Update /api/teachers/:id
// @access private

const updateTeachers = asyncHandler( async (req,res) => {
    res.status (200).json({ message : `Update teachers ${req.params.id}`})
})

// @desc Delete teacher
// @route Delete /api/teachers/:id
// @access private
const deleteTeachers = asyncHandler( async (req,res) => {
    res.status (200).json({ message : `Delete teachers ${req.params.id}`})
})



module.exports = {getTeachers,setTeachers, updateTeachers, deleteTeachers}