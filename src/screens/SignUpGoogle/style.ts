import { StyleSheet } from "react-native";
import {vh,vw} from '../../utils/Dimensions'
const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: 'black',
        alignItems: 'center',
        padding: 20
    },
    viewContainer: { 
        flexDirection: 'row',
        marginRight: 25,
        alignItems: 'center'
    },
    leftContainer: {
        // marginRight: 16,
    },
    left: { 
        width: vw(25), 
        height: vh(25), 
        tintColor: 'white' 
    },
    text: { fontSize: 24, fontWeight: 'bold', color:'white', textAlign: 'center', width: '90%' },
    buttonContainer: { 
        flexDirection: 'row', 
        padding: 15, 
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white',
        width: '90%',
        textAlign: 'center',
    },
    googleImage: {
        width: vw(100),
        height: vh(100),
        marginBottom: 40,
    },
    googleLogo: { width: vw(24), height: vh(24)},
    buttonText: { color: '#fff', fontSize: 16, marginLeft: 23  },
});
export default styles;