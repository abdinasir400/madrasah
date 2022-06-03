const express =require('express')
const { getParents, setParents, updateParents, deleteParents } = require('../Controllers/parentscontroller')
const router = express.Router()

router.get('/',getParents)

router.post('/',setParents)

router.put('/:id',updateParents)

router.delete('/:id',deleteParents)


module.exports = router