import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Slider } from './Slider';
import { DataMovie } from '../interfaces/Movie';
import { CarouselHeader } from '../components/CarouselHeader';
import { CarouselMovies } from '../components/CarouselMovies';
import { stylesScreen } from '../../styles/screenStyles';
import useTMDB from '../hooks/useTMDB';
import { listMarvelMovies, listPopularMovies, topRatedMovies } from '../constants/apiPath';

export function Home() {
  const {
    data: popMoviesData,
    error: popMoviesError,
    loading: popMoviesLoading,
  } = useTMDB<DataMovie[]>({
    pathData: listPopularMovies,
    initialStateData: [],
  });

  const {
    data: marvelMoviesData,
    error: marvelMoviesError,
    loading: marvelMoviesLoading,
  } = useTMDB<DataMovie[]>({
    pathData: listMarvelMovies,
    initialStateData: [],
  });

  const {
    data: bestMoviesData,
    error: bestMoviesError,
    loading: bestMoviesLoading,
  } = useTMDB<DataMovie[]>({
    pathData: topRatedMovies,
    initialStateData: [],
  });

  if (popMoviesLoading && bestMoviesLoading && marvelMoviesLoading)
    return (
      <View>
        <Text>Loading .... </Text>
      </View>
    );
  if (popMoviesError && marvelMoviesError && bestMoviesError)
    return (
      <View>
        <Text>Error while fetching data </Text>
      </View>
    );

  return (
    <ScrollView style={stylesScreen.container}>
      <Slider movies={popMoviesData!.slice(0, 5)} />
      <CarouselHeader title={'Marvel studios'} onPressSeeMore={() => {}} />
      <CarouselMovies typeTitle="textBelow" movies={marvelMoviesData!.slice(0, 10)} />
      <CarouselHeader title={'BestMovies'} onPressSeeMore={() => {}} />
      <CarouselMovies typeTitle="textOver" movies={bestMoviesData!.slice(0, 10)} />
    </ScrollView>
  );
}
