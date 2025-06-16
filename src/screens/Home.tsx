import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { getPopularMovies } from '../../utils/service/TMDBService';
import { Slider } from './Slider';
import { DataMovie } from '../interfaces/Movie';
import { CarouselHeader } from '../components/CarouselHeader';
import { CarouselMovies } from '../components/CarouselMovies';

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
});

export function Home() {
  const [movies, setMovies] = useState<DataMovie[]>([]);
  const showPopularMovies = () => {
    getPopularMovies().then((data: any) => {
      setMovies(data);
    });
  };
  useEffect(() => {
    showPopularMovies();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <Slider movies={movies.slice(0, 5)} />
      <CarouselHeader title={'Marvel studios'} onPressSeeMore={() => { }} />
      <CarouselMovies typeTitle='textBelow' movies={movies.slice(0, 10)} />
      <CarouselHeader title={'Marvel studios'} onPressSeeMore={() => { }} />
      <CarouselMovies typeTitle='textOver' movies={movies.slice(0, 10)} />
    </ScrollView>
  );
}
