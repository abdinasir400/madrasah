const express =require('express')
const { getTeachers, setTeachers, updateTeachers, deleteTeachers } = require('../Controllers/teacherscontroller')
const router = express.Router()

router.get('/',getTeachers)

router.post('/',setTeachers)

router.put('/:id',updateTeachers)

router.delete('/:id',deleteTeachers)


module.exports = router