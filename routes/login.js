import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.render('login')
})

router.post('/', (req, res) => {
    /*
    const { username, password } = req.body
    let newUser = {
        username,
        password
    }
    res.send(newUser)
    */
   const user = req.body;
   console.log(user)

   res.send('request post')
})
  
router.put('/', (req, res) => {
    res.send('Request PUT')
})
  
router.delete('/', (req, res) => {
    res.send('Request DELETE')
})

export default router