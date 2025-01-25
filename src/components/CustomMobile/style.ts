import { StyleSheet } from 'react-native';
import { vh, vw } from '../../utils/Dimensions';
import Colors from '../../utils/colors';
import sizes from '../../utils/sizes';

interface Theme {
  backgroundColor: string;
  textColor: string;
}

export const getStyles = (theme: Theme) => {
  return StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh(16),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.borderColor,
    // width: '100%',
    // padding: 1,
    backgroundColor: theme.backgroundColor
  },
  flagContainer: {},
  telephoneButton: {
    paddingHorizontal: vw(14),
    borderColor: Colors.borderColor,
    borderRightWidth: 1,
    marginRight: vw(4),
  },
  iconStyle: {
    width: vw(20),
    height: vw(20),
    tintColor: Colors.PRIMARY_GRAY,
    resizeMode: 'contain',
  },
  countryCodeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryCodeText: {
    fontSize: sizes.inputText,
    color: theme.textColor,
  },
  phoneInputMobile: {
    flex:1,
    borderEndEndRadius: 10,
    borderTopEndRadius: 10,
    fontSize: sizes.inputText,
    backgroundColor: theme.backgroundColor,
    overflow: 'hidden',
    marginRight:2,
  },
  errorContainer: {
    borderColor: Colors.RED,
  },
  errorText: {
    color: Colors.RED,
    fontSize: sizes.errorText,
    marginTop: vh(4),
    textAlign: 'left',
  },
})};