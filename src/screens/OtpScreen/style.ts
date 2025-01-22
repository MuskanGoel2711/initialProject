import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        marginBottom: 10,
        backgroundColor: '#70706e',
        marginTop: 5,
        color: 'white',
    },
    buttonContainer: {
        padding: 15,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white',
        width: '90%',
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default styles;