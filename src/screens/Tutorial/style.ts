import { Dimensions, StyleSheet } from 'react-native';
import Colors from '../../utils/colors';
import { vh, vw } from '../../utils/Dimensions';
import sizes from '../../utils/sizes';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK
  },
  slide: {
    width,
    alignItems: 'center'
  },
  overlay: {
    padding: 20,
    borderRadius: 10
  },
  image: {
    width: '100%',
    height: '80%',
    marginBottom: 20
  },
  title: {
    fontSize: sizes.header,
    fontWeight: 'bold',
    color: Colors.PRIMARY_WHITE,
    marginBottom: 5
  },
  description: {
    fontSize: sizes.description,
    color: Colors.PRIMARY_WHITE,
    textAlign: 'center'
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20
  },
  paginationDot: {
    height: vh(10),
    width: vw(10),
    borderRadius: 5,
    backgroundColor: Colors.AZURE,
    marginHorizontal: 5,
    marginBottom: 25
  },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10
  },
  buttonText: {
    color: Colors.PRIMARY_WHITE,
    fontSize: sizes.buttonText,
    fontWeight: '600'
  },
  buttonContainer: {
    left: 0,
    right: 0,
    paddingHorizontal: 20
  },
  Login: {
    backgroundColor: Colors.PRIMARY_WHITE,
    borderRadius: 80
  },
  ViewButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 45
  }
});

export default styles;