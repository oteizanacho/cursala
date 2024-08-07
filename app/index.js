import ejs from 'ejs';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import indexRouter from './routes/index.js';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('view engine', 'ejs');

app.get('/', indexRouter);

app.listen(port, () => {
    console.log(`running on http://localhost:3000`);
})