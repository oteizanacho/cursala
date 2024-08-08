import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.render('login')
})

router.post('/', (req, res) => {
    res.send('login')
})
  
router.put('/', (req, res) => {
    res.send('Request PUT')
})
  
router.delete('/', (req, res) => {
    res.send('Request DELETE')
})

export default router