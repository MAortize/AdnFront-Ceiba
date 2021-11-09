export class Peliculas{
    title: string;
    overview: string;
    poster_path: string;

    constructor(title: string, overview: string, poster_path: string){
        this.title = title;
        this.overview = overview;
        this.poster_path = poster_path;
    }

}