import React from 'react';
import {TouchableOpacity, Text, StyleSheet, useColorScheme, Image, View, ImageSourcePropType, ViewStyle, StyleProp, TextStyle} from 'react-native';
import {vh} from '../../utils/Dimensions';
import {Styles} from './style';
import { useThemeColors } from '../../utils/theme/theme';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  isButtonDisabled?: boolean;
  iconSource?: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  key?: string | number;
  textStyle?: StyleProp<TextStyle>
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  isButtonDisabled = false,
  iconSource,
  style,
  key,
  textStyle,
}) => {
  const theme = useThemeColors();
  const styles = Styles(theme);
  return (
    <TouchableOpacity
      style={[styles.submitButton, isButtonDisabled && [styles.disabledButton], style]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={isButtonDisabled} key={key}>
      <View
        style={[
          styles.contentContainer,
          iconSource && styles.rowContainer,
        ]}>
        {iconSource && <Image source={iconSource} style={styles.iconStyle} />}
        <Text
          style={[
            styles.submitButtonText,
            isButtonDisabled && styles.disabledButtonText,
            textStyle
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;