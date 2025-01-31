import { StyleSheet } from 'react-native';
import { vh, vw } from '../../utils/Dimensions';
import sizes from '../../utils/sizes';

interface Theme {
  backgroundColor: string;
  textColor: string;
}

export const getStyles = (theme: Theme) => {
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    subContainer: {
      paddingHorizontal: vw(20),
    },
    backButton: {
      width: vw(40),
      height: vw(40),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E7E7E7',
      borderRadius: 50,
    },
    Left: {
      width: vw(24),
      height: vw(24),
      resizeMode: 'contain',
    },
    contentHeader: {},
    headerText: {
      fontSize: sizes.header,
      fontWeight: 'bold',
      color: theme.textColor,
      marginTop: vh(20),
    },
    detailTextContainer: {
      marginTop: vh(10),
      marginBottom: vh(10),
    },
    detailText: {
      fontSize: sizes.description,
      color: 'gray',
    },
  })
};