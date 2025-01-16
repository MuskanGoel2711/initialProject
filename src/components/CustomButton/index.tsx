import React from 'react';
import {TouchableOpacity, Text, StyleSheet, useColorScheme, Image, View} from 'react-native';
import {vh} from '../../utils/Dimensions';


interface CustomButtonProps {
  title: string;
  onPress: () => void;
  isButtonDisabled?: boolean;
  iconSource?: any;
  style?: any;
  key?: any;
  textStyle?: any
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  isButtonDisabled = false,
  iconSource,
  style,
  key,
  textStyle
}) => {
  const theme = useColorScheme();
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

const Styles = (theme: any) =>
  StyleSheet.create({
    disabledButton: {
      backgroundColor: theme === 'dark' ? '#000' : '#FFF',
      shadowColor: theme === 'dark' ? '#FFF' : '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 3,
      elevation: 5,
    },
    submitButton: {
      backgroundColor: '#3260a8',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: '85%',
      marginTop: vh(44),
      paddingVertical: vh(16),
      borderRadius: 10,
      shadowColor: theme.textColor,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 3,
      elevation: 5,
    },
    submitButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    disabledButtonText: {
      color: '#E2E2E2',
    },
    contentContainer: {
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    rowContainer: {
      flexDirection: 'row', 
      alignItems: 'center',
    },
    iconStyle: {
      width: 24,
      height: 24,
      marginRight: 8, 
    },
  });

export default CustomButton;