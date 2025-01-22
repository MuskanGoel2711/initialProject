import { StyleSheet } from "react-native";
import { vw,vh } from "../../utils/Dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 20
    },
    buttonContainer: {
        padding: 15,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white',
        width: '90%',
        marginTop: 100,
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    viewContainer: {
        flexDirection: 'row',
    },
    leftContainer: {},
    left: {
        width: vw(25),
        height: vh(25),
        tintColor: 'white',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        width: '90%',
    },
});

export default styles;