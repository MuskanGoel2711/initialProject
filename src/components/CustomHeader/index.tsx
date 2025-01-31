import React from 'react';
import { ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { images } from '../../assets/index';
import CustomImage from '../CustomArrow';

interface CustomHeaderProps {
  onBack: () => void; 
  onSetting?: () => void; 
  rightImage?: ImageSourcePropType; 
  header: string;
  style?: any;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ onBack, onSetting, rightImage, header,style }) => {
  return (
    <View style={[styles.topHeader,style]}>
      <CustomImage imageStyle={styles.image} source={images.back} onPress={onBack} />
      <Text style={styles.text}>{header}</Text>
      {rightImage && (
        <CustomImage imageStyle={styles.image} source={rightImage} onPress={onSetting} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 24,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
});

export default CustomHeader;