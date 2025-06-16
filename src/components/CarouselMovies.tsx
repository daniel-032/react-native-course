import { View } from "react-native";
import { DataMovie } from "../interfaces/Movie";
import { FlatList } from "react-native-gesture-handler";
import { MovieCard } from "./MovieCard";
import { getImagePath } from "../../utils/service/TMDBService";

type CarouselMoviesProps = {
    movies: DataMovie[];
    typeTitle: "textBelow" | "textOver";
}

export function CarouselMovies({ movies, typeTitle }: CarouselMoviesProps) {
    return (
        <FlatList
        style={{
            
        }}
            data={movies}
            renderItem={({ index }) => (
                <MovieCard
                    imageUri={getImagePath(movies[index].poster_path)}
                    title={movies[index].title}
                    typeTitle={typeTitle} puntuation={0} />
            )}
            horizontal
        />
    );
}
