import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { getPopularMovies } from '../../utils/service/TMDBService';
import { Slider } from './Slider';
import { DataMovie } from '../interfaces/Movie';
import { CarouselHeader } from '../components/CarouselHeader';
import { CarouselMovies } from '../components/CarouselMovies';
import { stylesScreen } from '../../styles/screenStyles';
import useTMDB from '../hooks/useTMDB';


export function Home() {
  const { data, error, loading } = useTMDB<DataMovie[]>({ path: "popular", initialStateData: [] })


  if (loading)
    return <View>
      <Text>Loading .... </Text>
    </View>;
  if (error)
    return <View>
      <Text>Error while fetching data </Text>
    </View>;

  return (
    <ScrollView style={stylesScreen.container}>
      <Slider movies={data!.slice(0, 5)} />
      <CarouselHeader title={'Marvel studios'} onPressSeeMore={() => { }} />
      <CarouselMovies typeTitle='textBelow' movies={data!.slice(0, 10)} />
      <CarouselHeader title={'BestMovies'} onPressSeeMore={() => { }} />
      <CarouselMovies typeTitle='textOver' movies={data!.slice(0, 10)} />
    </ScrollView>
  );
}
