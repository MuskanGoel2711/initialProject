import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';
import GeneralDetails from './screens/GeneralDetails';
import Shipment1Details from './screens/Shipment1Details';
import PickUpDetails from './screens/PickUpDetails';
import { useThemeColors } from '../../utils/theme/theme';
import sizes from '../../utils/sizes';
import { ScreenNames } from '../../utils/screenNames';
import Colors from '../../utils/colors';

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
    const theme = useThemeColors();
    return (
        <Tab.Navigator
            screenOptions={{
                swipeEnabled: false,
                tabBarLabelStyle: { fontSize: sizes.labelTopTabBar, fontWeight: 'bold' },
                tabBarIndicatorStyle: { backgroundColor:  theme.backgroundColor},
                tabBarActiveTintColor: Colors.BLACK,
                tabBarInactiveTintColor: Colors.PRIMARY_WHITE,
                tabBarStyle: { backgroundColor: Colors.tabBarStyle },
            }}
        >
            <Tab.Screen name={ScreenNames.GeneralDetails} component={GeneralDetails} listeners={({ navigation, route }) => ({
                    tabPress: (e) => {
                        e.preventDefault();
                    },
                })}/>
            <Tab.Screen name={ScreenNames.Shipment1Details} component={Shipment1Details} listeners={({ navigation, route }) => ({
                    tabPress: (e) => {
                        e.preventDefault();
                    },
                })}/>
            <Tab.Screen name={ScreenNames.PickUpDetails} component={PickUpDetails} listeners={({ navigation, route }) => ({
                    tabPress: (e) => {
                        e.preventDefault();
                    },
                })}/>
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    
});

export default TopTabs;
