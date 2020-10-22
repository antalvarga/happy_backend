// Aula2 - 1:36:41 - Criar images_view
import Image from '../models/Image';


export default {
    render(image: Image) {
        return {            

            id: image.id
            , url: `http://localhost:3333/uploads/${image.path}`
            ,
        };
    }
    // Aula2 - 1:35:48
    , renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    }
};