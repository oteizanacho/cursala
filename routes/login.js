import { Router } from 'express';
const router = Router();

let users = []; 

//mostrar el formulario de login
router.get('/', (req, res) => {
    res.render('login');
});

//registrar un nuevo usuario
router.post('/', (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password });
    console.log(users);
    res.status(201).send('Usuario registrado');
});

export default router;
