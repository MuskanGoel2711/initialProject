import { StyleSheet } from "react-native";

interface Theme {
    backgroundColor: string;
    textColor: string;
}

export const getStyles = (theme: Theme) => {
    return StyleSheet.create({
    input: {
      fontSize: 16,
      marginTop: 23,
      backgroundColor: theme.backgroundColor,
    },
    icon: {
      width: 30,
      height: 30
    },
  })};