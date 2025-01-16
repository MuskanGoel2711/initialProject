import {StyleSheet} from 'react-native';
import {vw, vh} from '../../utils/Dimensions';

export const Styles = (theme: any) =>
  StyleSheet.create({
    iconButton: {
      paddingHorizontal: vw(14),
      borderColor: '#ccc',
      borderRightWidth: 1,
      marginRight: vw(4),
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
      // backgroundColor:'red',
      // marginHorizontal: 8,
      overflow: 'hidden',
    },
    eyeImg: {
      width: vw(24),
      height: vw(24),
      resizeMode: 'contain',
      marginTop: vh(7),
    },
    errorContainer: {
      borderColor: 'red',
    },
    errorText: {
      color: 'red',
      fontSize: 14,
      marginTop: vw(4),
      textAlign: 'left',
    },
  });