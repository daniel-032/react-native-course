import {Button, StyleSheet, Text, View} from 'react-native';
import { TMDB_BASE_URL } from '@env';

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
  footerSlider: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '15',
  },
});

export function Slider() {
  return (
    <View style={styles.containerSlider}>
      <View style={styles.headerSlider}>
        <Text>My List</Text>
        <Text>Discover</Text>
      </View>
      <View style={styles.mainSlider}>
        <Text>1</Text>
      </View>
      <View style={styles.footerSlider}>
        <Button color={'green'} title="WishList" onPress={() => {console.log(TMDB_BASE_URL)}}></Button>
        <Button color={'green'} title="Details"></Button>
      </View>
    </View>
  );
}
