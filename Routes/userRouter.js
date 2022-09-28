import { Router } from 'express'
const router = new Router()
import User from '../User.js'

router.post('/registration', async (req, res) => {
    try{
    const {userName, password} = req.body
    const user = await User.create({userName, password})
    res.json(user)
    }catch(e){
        res.status(500).json(e)
    }
})
router.get('/auth/:UsserName', async (req, res) => {
    const UsserName = req.params.UsserName;
    const PPasword = req.params.Password
    try{
        const post = await User.findOne({userName: UsserName})
        return res.json(post)
    }catch(e){
        res.status(500).json(e)
    }
})
   
export default router
