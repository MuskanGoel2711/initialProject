import { StyleSheet } from "react-native"

export const getStyles = (theme: any) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: theme.backgroundColor
        }
    })
}