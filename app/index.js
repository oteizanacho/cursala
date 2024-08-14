import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import loginRoutes from '../routes/login.js';
import ejs from 'ejs'

const app = express();
const port = 3000;

//necesario para obtener __dirname en ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//configuracion del view engine
app.set('view engine', 'html');
app.engine('html', ejs.renderFile)

//archivos estaticos
app.use(express.static(path.join(__dirname, '../public')));

//middleware para parsear el cuerpo de las peticiones como JSON
app.use(express.json());

//rutas
app.use('/login', loginRoutes);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});