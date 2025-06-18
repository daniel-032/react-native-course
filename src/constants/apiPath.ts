import { ApiPath } from "../interfaces/Movie";

export const listPopularMovies: ApiPath = {
    path: "/movie/popular",
    params: {
        include_adult: false,
        include_video: false,
        language: 'en-US',
        page: 1, 
    }    
}

export const listMarvelMovies: ApiPath = {
    path: "/discover/movie",
    params: {
        include_adult: false,
        include_video: false,
        language: 'en-US',
        page: 1,
        sort_by: 'popularity.desc',
        with_companies: 420 
    }
}

export const topRatedMovies: ApiPath = {
    path: "/discover/movie",
    params: {
        include_adult: false,
        include_video: false,
        language: 'en-US',
        page: 1,
        sort_by: 'vote_count.desc'
    }
}
