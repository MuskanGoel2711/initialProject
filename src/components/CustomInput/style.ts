import {StyleSheet} from 'react-native';
import {vw, vh} from '../../utils/Dimensions';

interface Theme {}

export const getStyles = (theme: Theme) => {
  return StyleSheet.create({
    iconButton: {
      paddingHorizontal: vw(14),
      borderColor: '#ccc',
      borderRightWidth: 1,
      marginRight: vw(4),
      borderWidth: 1
    },
    iconStyle: {
      width: vw(20),
      height: vw(20),
      resizeMode: 'contain',
    },
    phoneInput: {
      width: '100%',
      marginTop: 23,
      fontSize: 15,
      backgroundColor: 'white',
      overflow: 'hidden',
    },
    errorContainer: {
      borderColor: 'red',
      borderWidth: 1
    },
    errorText: {
      color: 'red',
      fontSize: 14,
      marginTop: vw(4),
      textAlign: 'left',
    },
  })};