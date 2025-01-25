import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";
import { vh, vw } from '../../utils/Dimensions';
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
            backgroundColor: '#3260a8'
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
            tintColor: Colors.PRIMARY_WHITE
        },
        text: {
            textAlign: 'center',
            fontSize: sizes.headerText,
            color: Colors.PRIMARY_WHITE,
            fontFamily: "Roboto-Bold",
            paddingLeft: 30
        },
        tabsContainer: {
            flex: 1,
        },
    })
}