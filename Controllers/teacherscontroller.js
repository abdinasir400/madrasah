const asyncHandler = require('express-async-handler')
const Teacher = require('../Models/Teacher')
const teacher = require('../Models/Teacher')

// @desc Get teacher
// @route Get /api/teachers
// @access private
const getTeachers = asyncHandler( async (req,res) => {
  const teachers = await Teacher.find()
    res.status (200).json({ count : teachers.length, teachers})
})

// @desc Post teachers
// @route Post /api/teachers
// @access private
const setTeachers = asyncHandler( async (req,res) => {
    const {FirstName,Surname, Gender, Address, Postcode, City,Phone, Email, DOB}= req.body
    
    if(!FirstName || !Surname || !Gender || !Address || !Postcode || !City || !Phone || !Email|| !DOB){
        res.status(400)
        throw new Error('Please complete all fields')
    }
   
    // Check if teacher exists
const teacherExists = await Teacher.findOne({ Email })

if (teacherExists) {
  res.status(400)
  throw new Error('Teacher already exists')
}

    // Create teacher
const newteacher = await teacher.create({
    FirstName,
    Surname,
    Gender,
    Address,
    Postcode,
    City,
    Phone,
    Email,
    DOB,
  })

  newteacher.save()

  if (newteacher) {
    res.status(201).json({
      _id: newteacher.id,
      FirstName: newteacher.FirstName,
      Surname: newteacher.Surname,
      Gender: newteacher.Gender,
      Address: newteacher.Address,
      Postcode: newteacher.Postcode,
      City: newteacher.City,
      Phone: newteacher.Phone,
      Email: newteacher.Email,
      DOB: newteacher.DOB,
      
    })
  } else {
    res.status(400)
    throw new Error('Invalid teacher data')
  }

})



// @desc Update teachers
// @route Update /api/teachers/:id
// @access private

const updateTeachers = asyncHandler( async (req,res) => {
  const  teacher = await teacher.findById(req.params.id)

  if(!teacher){
      res.status(400)
      throw new Error('teacher not found')
  }
  const updatedteacher = await teacher.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
  })
    res.status (200).json({ updatedteacher})
})

// @desc Delete teacher
// @route Delete /api/teachers/:id
// @access private
const deleteTeachers = asyncHandler( async (req,res) => {
  
    res.status (200).json({ message : `Delete teachers ${req.params.id}`})
})



module.exports = {getTeachers,setTeachers, updateTeachers, deleteTeachers}