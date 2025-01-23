import { StyleSheet } from 'react-native';
import { vw, vh } from '../../utils/Dimensions';

interface Theme {
  backgroundColor: string;
}

export const getStyles = (theme: Theme) => {
  return StyleSheet.create({
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
    backgroundColor: theme.backgroundColor,
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
})};