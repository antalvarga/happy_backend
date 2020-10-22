// . Aula2 - 1:01:39 - criar pasta controllers

// Aula2 - 1:02:54
import {Request, Response} from 'express';

// Aula2 - 1:02:19
// Aula2 - 0:54:11
import {getRepository} from 'typeorm';

// Aula2 - 1:34:28
import orphanageView from '../views/orphanages_view';

// Aula2 - 0:54:36 - importar classe orfanato
import Orphanage from '../models/Orphanage';

// Aula2 1:45:41 - como o yup não tem um export default 
// é preciso importar assim
import * as Yup from 'yup';






export default {
    // Aula2 - 1:04:18
    async index(request: Request, response: Response) {

        const orphanagesRepository = getRepository(Orphanage);

        // Aula2 - 1:31:18 -  relacionamento tab images
        // const orphanages = await orphanagesRepository.find();
        const orphanages = await orphanagesRepository.find({
            relations: ['images']
        });
        

        // Se quiser fazer alguma condiçao where 
        // const orphanages2 = await orphanagesRepository.find({
        // });

        // Aula2 - 1:36:18
        // return response.json(orphanages);
        return response.json(orphanageView.renderMany(orphanages));
        
    },

    async show( request: Request, response: Response ) {
        const {id} = request.params;

        const orphanagesRepository = getRepository(Orphanage);

        // Aula2 - join/ relacionamento tab images
        // const orphanage = await orphanagesRepository.findOneOrFail(id);
        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images']
        });

        // Aula2 - 1:34:42 - Alterar controler, metodo show 
        // return response.json(orphanage);
        return response.json(orphanageView.render(orphanage));
    },


    // Aula2 - 1:02:32 - alteracao para request, response
    async create(request: Request, response: Response) {
    
    // Aula2 - 1:26:56
    //console.log(request.files);

    // Aula2 - 0:53:36
    const {
        name
        , latitude
        , longitude
        , about
        , instructions
        , opening_hours
        , open_on_weekends
        , // images
    } = request.body;

    // Aula2 - 0:54:51
    const orphanagesRepository = getRepository(Orphanage);

    // Aula2 - 1:27:42
    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => {
        return { path: image.filename}
    })

    // Aula2 - 1:45:28
    const data = {
        name
        , latitude
        , longitude
        , about
        , instructions
        , opening_hours
        , open_on_weekends
        , images 

    }

    // Aula2 - 1:46:11
    const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatório')
        , latitude: Yup.number().required()
        , longitude: Yup.number().required()
        , about: Yup.string().max(300)
        , instructions: Yup.string().required()
        , opening_hours:  Yup.string().required()
        , opening_on_weekends:  Yup.boolean().required()
        , images: Yup.array(
            Yup.object().shape({
                path: Yup.string().required()
            })
        )
    });
    // Aula2 - 1:48:16
    await schema.validate(data, {
        abortEarly: false
        , 
    })


    // Aula2 - 0:55:15
    // Aula2 - 1:45:28
    // const orphanage = orphanagesRepository.create({
    //     name
    //     , latitude
    //     , longitude
    //     , about
    //     , instructions
    //     , opening_hours
    //     , open_on_weekends
    //     , images   // Aula2 - 1:26:43   
    // })

    const orphanage = orphanagesRepository.create( data );

    // Aula2 - 0:55:38 para salvar no banco
    await orphanagesRepository.save(orphanage);

    // console.log( request.body );

    // Aula2 - 0:58:15
    // return response.json({ message: 'Hello world'});
    return response.status(201).json( orphanage );

    }
};