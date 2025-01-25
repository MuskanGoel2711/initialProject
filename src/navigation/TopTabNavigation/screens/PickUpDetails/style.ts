import { StyleSheet } from "react-native";

interface Theme {
    backgroundColor: string;
}

export const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: 20,
            backgroundColor: theme.backgroundColor
        }
    })
}