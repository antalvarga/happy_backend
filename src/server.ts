// Aula2 - 2:56
import express from 'express';

// Aula2 - 0:32:32
import './database/connection';

// Aula2 - 1:38:53
import path from 'path';

// Aula2 - 1:41:20
import 'express-async-errors';

// Aula2 - 1:00:07
import routes from './routes';

// Aula2 - 1:44:03
import errorHandler from './errors/hander';

// Aula2 - 1:53:39
import cors from 'cors';




const app = express();



// Aula2 - 1:53:54
app.use(cors());

// Aula2 - 0:24:11
app.use(express.json());

// Aula2 - 1:00:20 
app.use(routes);

// Vide mais comentários em routes_bk

// Aula2 - 1:38:55
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// Aula2 - 1:44:03
app.use(errorHandler);

app.listen(3333);
    