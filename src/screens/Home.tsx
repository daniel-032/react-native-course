import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { getPopularMovies } from '../../utils/service/TMDBService';
import { Slider } from './Slider';
import { DataMovie } from '../interfaces/Movie';
import { CarouselHeader } from '../components/CarouselHeader';

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
    <View style={styles.container}>
      <Slider movies={movies.slice(0, 5)} />
      <CarouselHeader title={'Marvel studios'} onPressSeeMore={ () => {}}/>
    </View>
  );
}
