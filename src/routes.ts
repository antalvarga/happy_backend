
// Aula2 - 0:59:16 - Organizacao da aplicação
// Trazendo o POST do arquivo server.ts para cá

// Aula2 - 0:54:11
import {getRepository} from 'typeorm';

// Aula2 - 0:54:36 - importar classe orfanato
import Orphanage from './models/Orphanage';

// Aula2 - 0:59:41
import { Router } from 'express';


// Aula2 - 1:17:07 
import multer from 'multer';

// Aula2 - 1:17:20
import uploadConfig from './config/upload';


// Aula2 - 1:03:28
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();


// Aula2 - 1:17:07 
const upload = multer(uploadConfig);

// (11) 93224-4216 Andreia HeadHunter 

// Aula2 - 0:51:10    
// Aula2 - 0:56:14 async await
// Aual2 - 0:59:56 trocando app por routes
// app.post('/orphanages', async (request, response) => {
// Aula2 - 1:03:40     
// routes.post('/orphanages', async (request, response) => {
    // Aula2 - 1:02:06 - toda a logica de criaçAo do orfanato 
    // foi transferida para OrphanagesController
// } );
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

// Aula2 - 1:05:16
routes.get('/orphanages', OrphanagesController.index);

// Aula2 - 1:06:33
routes.get('/orphanages/:id', OrphanagesController.show);

// Aula2 - 1:00:02
export default routes;
