import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';
import GeneralDetails from './screens/GeneralDetails';
import Shipment1Details from './screens/Shipment1Details';
import PickUpDetails from './screens/PickUpDetails';
import { useThemeColors } from '../../utils/theme/theme';
import sizes from '../../utils/sizes';

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
    const theme = useThemeColors();
    return (
        <Tab.Navigator
            screenOptions={{
                swipeEnabled: false,
                tabBarLabelStyle: { fontSize: sizes.labelTopTabBar },
                tabBarIndicatorStyle: { backgroundColor:  theme.backgroundColor},
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'black'
            }}
        >
            <Tab.Screen name="GeneralDetails" component={GeneralDetails} />
            <Tab.Screen name="Shipment1Details" component={Shipment1Details} />
            <Tab.Screen name="PickUpDetails" component={PickUpDetails} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    
});

export default TopTabs;
