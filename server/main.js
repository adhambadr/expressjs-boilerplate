import express from 'express'
const router  = express.Router()

router.get('/', (req,res)=>{
	res.json({"err":null})
})

export default router