import { StyleSheet } from "react-native";
import Colors from "../../../../utils/colors";

interface Theme {
  backgroundColor: string;
  textColor: string;
}

export const getStyles = (theme: Theme) => {
    return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: theme.backgroundColor
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      // alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: Colors.PRIMARY_WHITE,
      borderRadius: 10,
      padding: 20,
      // alignItems: 'center',
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    option: {
      padding: 15,
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: Colors.borderColor,
    },
    optionText: {
      fontSize: 16,
      color: '#333',
    },
    closeButton: {
      marginTop: 20,
      padding: 10,
      backgroundColor: '#007BFF',
      borderRadius: 5,
    },
    closeButtonText: {
      color: Colors.PRIMARY_WHITE,
      fontSize: 16,
      textAlign: 'center'
    },
  })}