import React from 'react';
import {
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
  View,
  StyleProp,
} from 'react-native';

type CustomButtonProps = {
  onPress?: (event: GestureResponderEvent) => void;
  backgroundColor?: string;
  textColor?: string;
  text?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  backgroundColor = '#007BFF',
  textColor = '#FFFFFF',
  text,
  style,
  textStyle,
  children,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor,
          paddingVertical: 12,
          paddingHorizontal: 50,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        },
        style,
      ]}
    >
      {children ? (
        children
      ) : text ? (
        <Text style={[{ color: textColor, fontSize: 16 }, textStyle]}>
          {text}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
};

export default CustomButton;
