const express =require('express')
const { getParents, setParents, updateParents, deleteParents,getParent } = require('../Controllers/parentscontroller')
const router = express.Router()

router.get('/',getParents)

router.get('/:id',getParent)
router.post('/',setParents)

router.put('/:id',updateParents)

router.delete('/:id',deleteParents)


module.exports = router