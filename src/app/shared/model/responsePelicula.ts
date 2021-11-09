import { Peliculas } from 'src/app/feature/peliculas/model/pelicula';

export class ResponsePeliculas{
    results: Peliculas[];

    constructor(results: Peliculas[]){
        this.results = results;
    }
}
