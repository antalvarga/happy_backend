// Aula2 - 2:56
import express from 'express';

// Aula2 - 0:32:32
import './database/connection';

// Aula2 - 0:54:11
import {getRepository} from 'typeorm';

// Aula2 - 0:54:36 - importar classe orfanato
import Orphanage from './models/Orphanage';



const app = express();

// Aula2 - 0:24:11
app.use(express.json());

// Aula2 - 13:04
// Rota = conjunto
// Recurso = users
// Metodos HTTP  GET, POST, PUT, DELETE
// Parametros (parms)   
    // Query parms: http://localhost:3333/users?search=antal&page=2
    // Route parms: http://localhost:3333/users/1   (identificar um recurso)
    // body       : http://localhost:3333/users/1   (identificar um recurso)
// Aula2 - 0:11:11
// Aula2 - 0:51:10
// app.get('/users', (request, response) => { 
    // console.log( 'hello world');

    // Aula2 - 22:12 - query parms
    // console.log(request.query);

    // Aula2 - 22:14 route params
    // console.log(request.params);

    // Aula2 - 23:04 - body
    // console.log(request.body);

    // return response.send( 'hello world');
    // return response.json({ message: 'hello world'}); 

// Aula2 - 0:51:10    
// Aula2 - 0:56:14 async await
app.post('/orphanages', async (request, response) => {

    // Aula2 - 0:53:36
    const {
        name
        , latitude
        , longitude
        , about
        , instructions
        , opening_hours
        , open_on_weekends

    } = request.body;


    // Aula2 - 0:54:51
    const orphanagesRepository = getRepository(Orphanage);

    // Aula2 - 0:55:15
    const orphanage = orphanagesRepository.create({
        name
        , latitude
        , longitude
        , about
        , instructions
        , opening_hours
        , open_on_weekends

    })

    // Aula2 - 0:55:38 para salvar no banco
    await orphanagesRepository.save(orphanage);

    // console.log( request.body );

    // Aula2 - 0:58:15
    // return response.json({ message: 'Hello world'});
    return response.status(201).json( orphanage );

} );

app.listen(3333);
    