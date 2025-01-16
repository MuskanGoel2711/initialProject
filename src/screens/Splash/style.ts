import { StyleSheet, ViewStyle, ImageStyle } from 'react-native';
import {vh,vw} from '../../utils/Dimensions';
import Colors from '../../utils/colors';

const styles = StyleSheet.create<{
    MainContainer: ViewStyle;
    RootView: ViewStyle;
    ChildView: ViewStyle;
    gif: ImageStyle;
}>({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY_WHITE
    },
    RootView: {
        // justifyContent: 'center',
        // flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    ChildView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    gif: {
        
    },
});

export default styles;