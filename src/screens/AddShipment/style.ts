import { StyleSheet } from "react-native";
import { vw, vh } from '../../utils/Dimensions'
import sizes from "../../utils/sizes";

interface Theme {
    backgroundColor: string;
    tintColor: string;
    textColor: string;
}

export const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.backgroundColor
        },
        topHeader: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 23,
            marginBottom: 20,
            // padding: 20,
        },
        icon: {
            width: vw(23),
            height: vh(23),
            tintColor: theme.tintColor
        },
        text: {
            width: '100%',
            textAlign: 'center',
            fontSize: sizes.description,
            color: theme.textColor,
            fontFamily: "Roboto-Bold"
        },
        tabsContainer: {
            flex: 1,
        },
    })
}