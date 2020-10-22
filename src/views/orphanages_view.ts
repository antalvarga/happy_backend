
// Aula2 - 1:33:18
import Orphanage from '../models/Orphanage';

// Aula2 - 1:37:51
import imagesView from './images_view';



// Aula2 - 1:32:40
export default {
    render(orphanage: Orphanage) {
        return {            

            id: orphanage.id
			, name: orphanage.name
            , latitude: orphanage.latitude
            , longitude:orphanage.longitude
            , about: orphanage.about
            , instructions: orphanage.instructions
            , opening_hours: orphanage.opening_hours
            , open_on_weekends: orphanage.open_on_weekends
            , images: imagesView.renderMany(orphanage.images)
            ,
        };
    }
    // Aula2 - 1:35:48
    , renderMany(orphanages: Orphanage[]) {
        return orphanages.map(orphanage => this.render(orphanage));
    }
};