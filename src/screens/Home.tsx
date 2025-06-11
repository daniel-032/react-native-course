import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {getImagePath, getPopularMovies} from '../../utils/service/TMDBService';

interface DataMovie {
  id: string;
  overview: string;
  title: string;
  poster_path: string;
  release_date: string;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d49e8',
    marginVertical: 70,
    paddingHorizontal: 16,
    paddingVertical: 40,
  },
});

export function Home() {
  const [movies, setMovies] = useState<DataMovie[]>([]);
  const showPopularMovies = () => {
    getPopularMovies().then((data: any) => {
      setMovies(data);
      console.log(data);
    });
  };
  useEffect(() => {
    showPopularMovies();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Homes component</Text>
      <ScrollView>
        {movies.map(movie => (
          <View key={movie.id}>
            <View>
              <Image
                source={{uri: getImagePath(movie.poster_path)}}
                style={{width: 200, height: 300}}
                resizeMode="cover"
              />
            </View>
            <View>
              <View>
                <Text>Title: {movie.title}</Text>
              </View>
              <View>
                <Text>description: {movie.overview}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
