import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { DataMovie } from '../interfaces/Movie';
import { useRef } from 'react';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import { getImagePath } from '../../utils/service/TMDBService';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../components/CustomButton';

type SliderProps = {
  movies: DataMovie[];
};

const styles = StyleSheet.create({
  containerSlider: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  headerSlider: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  mainSlider: {
    paddingVertical: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBlockColor: 'black',
    borderWidth: 1,
  },
  buttonsSlider: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footerSlider: {
    position: 'relative',
    width: '100%',
    bottom: 20,
  },
});

const width = Dimensions.get('window').width;

export function Slider({ movies }: SliderProps) {
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View style={styles.containerSlider}>
      <Carousel
        ref={ref}
        width={width}
        height={500}
        data={movies}
        onProgressChange={progress}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <Image
              source={{ uri: getImagePath(movies[index].poster_path) }}
              style={{ width: width, height: 500 }}
              resizeMode="cover"
            />
            <LinearGradient
              colors={['transparent', 'rgb(0, 0, 0)']}
              style={{
                position: 'absolute',
                bottom: -10,
                width: '100%',
                height: 200,
              }}
            />
          </View>
        )}
      />
      <View style={styles.footerSlider}>
        <View style={styles.buttonsSlider}>
          <CustomButton
            text="+ Wishlist"
            textColor="white"
            textStyle={{
              fontWeight: '400',
              fontSize: 20,
            }}
            backgroundColor="#333333"></CustomButton>
          <CustomButton
            text="Details"
            textColor="black"
            textStyle={{
              fontWeight: '400',
              fontSize: 20,
            }}
            backgroundColor="#F2C94C"></CustomButton>
        </View>
      </View>
      <Pagination.Basic
        progress={progress}
        data={movies}
        dotStyle={{
          backgroundColor: '#F2F2F2',
          borderRadius: 50,
        }}
        activeDotStyle={{ backgroundColor: '#F2C94C' }}
        containerStyle={{ gap: 8, marginTop: 10 }}
        onPress={onPressPagination}
      />
    </View>
  );
}
