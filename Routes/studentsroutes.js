const express =require('express');
const router = express.Router();
const {getStudents,deleteStudents, setStudents, updateStudents,getStudent} = require ('../Controllers/studentscontroller')

// @route Get Students
// @desc Get /api/students
// @access private

router.get('/', getStudents)

// @route Get Students
// @desc Get /api/students
// @access private

router.get('/:id', getStudent)

// @route Post Students
// @desc Register new students /api/students
// @access private

router.post('/',setStudents)

// @route Update Students
// @desc Get /api/students
// @access private

router.put('/:id',updateStudents)

// @route Delete Students
// @desc Delete /api/students
// @access private

router.delete('/:id',deleteStudents)




module.exports = router