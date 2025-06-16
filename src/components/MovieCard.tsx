import { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

type MovieCardProps = {
  imageUri: string;
  title: string;
  puntuation?: number;
  typeTitle: 'textBelow' | 'textOver';
  onPress?: () => void;
};

export function MovieCard({
  imageUri,
  title,
  puntuation = 1,
  typeTitle,
  onPress
}: MovieCardProps) {
  useEffect(() => {
    console.log(imageUri);
  }, []);

  return (
    <View style={{ alignItems: 'center', paddingHorizontal: 5 }}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{ uri: imageUri }}
          style={{
            height: 200,
            width: 150,
            borderRadius: 15,
          }}
        />
      </TouchableOpacity>
      {typeTitle === 'textBelow' ? (
        <View style={{ paddingTop: 5 }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
            }}>
            {title}
          </Text>
        </View>
      ) : (
        <View style={{ position: 'relative', width: 150, bottom: 40, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              color: 'white',
              width: "60%"
            }}>
            {title}
          </Text>
          <Text
            style={{
              color: 'white',
            }}>
            ⭐{puntuation}
          </Text>
        </View>
      )}
    </View>
  );
}
