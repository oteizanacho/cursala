import ejs from 'ejs';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import indexRouter from '../routes/index.js';
import loginRouter from '../routes/login.js'

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('view engine', 'ejs');

app.get('/', indexRouter)

function logStuff(req, res, next){
    console.log('middleware')
    next()
}

app.use('/login', logStuff, loginRouter)

app.listen(port, () => {
    console.log(`running on http://localhost:3000`);
})