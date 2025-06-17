import React, { ComponentType } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { Search } from '../src/screens/Search';
import { Home } from '../src/screens/Home';
import { WishList } from '../src/screens/WishList';
import { Profile } from '../src/screens/Profile';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

type IconName = "house" | "magnifying-glass" | "bookmark" | "user";

interface Route {
    iconName: IconName;
    component: ComponentType;
}

const routes: { [key: string]: Route } = {
    "Home": {
        iconName: "house",
        component: Home
    },
    "Search": {
        iconName: "magnifying-glass",
        component: Search
    },
    "WishList": {
        iconName: "bookmark",
        component: WishList
    },
    "Profile": {
        iconName: "user",
        component: Profile
    }
};

export function TabNavigationWrapper(): React.JSX.Element {
    const tabScreens = Object.keys(routes).map((key) => (
        <Tab.Screen key={key} name={key} component={routes[key].component} />
    ));
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    return <FontAwesome6
                        name={routes[route.name].iconName}
                        size={size}
                        color={color}
                        iconStyle='solid'/>;
                },
                headerShown: false,
                tabBarStyle: stylesNavigator.tabBarStyle,
                tabBarActiveTintColor: primaryColor,
                tabBarInactiveTintColor: grayColor
            })}>
                {tabScreens}
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const stylesNavigator = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: "black",
        height: 80,
        paddingTop: 8,
        borderWidth: 0,
        borderColor: "black"
    }
});

const primaryColor = "#F2C94C";
const grayColor = "#F2F2F2";
