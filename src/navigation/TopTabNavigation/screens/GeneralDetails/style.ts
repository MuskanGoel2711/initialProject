import { StyleSheet } from "react-native";

interface Theme {
    backgroundColor: string;
    textColor: string;
}

export const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
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
