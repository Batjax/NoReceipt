import React from 'react'
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
import AuthScreen from '../Containers/Auth/AuthScreen'
import RegistrationScreen from '../Containers/Auth/RegistrationScreen'
import TicketsListScreen from '../Containers/Content/Tickets/TicketsListScreen'
import ProfileScreen from '../Containers/Content/Profile/ProfileScreen'
import { Icon } from 'react-native-elements'
import {Dimensions} from "react-native";


/* 
    Application tree :

    - AppSwitchNavigator
        - AuthStackNavigator
            - AuthScreen
            - RegistrationScreen
            - ContentTabNavigator
                - TicketStackNavigator
                    - TicketsListScreen
                - ProfileStackNavigator
                    - ProfileScreen
                - ...

*/

const AuthStackNavigator = createStackNavigator(
    {
        AuthScreen: {
            screen: AuthScreen
        },
        RegistrationScreen: {
            screen: RegistrationScreen
        },
    },
    {
        headerLayoutPreset: 'center',
    }

);

const TicketStackNavigator = createStackNavigator(
    {
        TicketListScreen: TicketsListScreen,
    },
    {
        headerLayoutPreset: 'center',
    }
);

const ProfileStackNavigator = createStackNavigator(
    {
       ProfileScreen: ProfileScreen,
    },
    {
        headerLayoutPreset: 'center',
    }
);

const ContentTabNavigator = createBottomTabNavigator(
    {
        TicketStack: {
            screen: TicketStackNavigator,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name='receipt' size={30} color={tintColor}/>
                )
            } 
        },
        ProfileStack : {
            screen: ProfileStackNavigator,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name='account-circle' size={30} color={tintColor}/>
                )
            }
        }
    },
    {
        swipeEnabled: true,
        tabBarOptions: {
            showLabel: false,
            activeBackgroundColor: '#6ab04c11', //last pair of digits specifies opacity in hexa - from 00 (transparent) to ff (opaque)
            activeTintColor: '#6ab04c',
            inactiveTintColor: '#535c68',
            style: {
                height: 60,
            }
        },
    }
);

const AppSwitchNavigator = createSwitchNavigator({
    AuthStack: {
        screen: AuthStackNavigator
    },
    ContentStack: {
        screen: ContentTabNavigator
    }
},
{
    initialRouteName: 'AuthStack',
});

export default createAppContainer(AppSwitchNavigator);

