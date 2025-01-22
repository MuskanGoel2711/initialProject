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
            padding: 20,
            justifyContent: 'space-between',
            backgroundColor: theme.backgroundColor
        },
        header: {
            color: theme.textColor
        },
        optionContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            margin: 15
        },
        image: {
            width: 23,
            height: 23,
            // tintColor: theme.tintColor
        },
        optionText: {
            marginLeft: 12,
            color: theme.textColor
        },
        inputsContainer: {
            marginTop: 20,
        },
    })
}
