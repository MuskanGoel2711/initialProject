import { StyleSheet } from "react-native";
import {vw,vh} from '../../utils/Dimensions'
import sizes from "../../utils/sizes";

export const getStyles = (theme: any) => {
    return StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.backgroundColor
    },
    topHeader:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 23,
        marginBottom: 20,
        padding: 20,
    },
    icon: {
        width: vw(23),
        height: vh(23),
        tintColor: theme.tintColor
    },
    text: {
        width: '100%',
        textAlign: 'center',
        fontSize: sizes.header,
        color: theme.textColor
    },
    tabsContainer: {
        flex: 1, 
    },
})}