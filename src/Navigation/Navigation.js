import React from 'react'
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
import AuthScreen from '../Containers/Auth/AuthScreen'
import RegistrationScreen from '../Containers/Auth/RegistrationScreen'
import TicketsListScreen from '../Containers/Content/TicketsListScreen'
import ProfileScreen from '../Containers/Content/ProfileScreen'
import { Icon } from 'react-native-elements'


/* 
    Application tree :

    - AppSwitchNavigator
        - AuthStackNativagor
            - AuthScreen
            - RegistrationScreen
        - ContentStackNavigator
            - ContentTabNavigator
                - TicketsListScreen
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

const ContentTabNavigator = createBottomTabNavigator(
    {
        TicketsListScreen: {
            screen: TicketsListScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name='receipt' size={30} color={tintColor}/>
                )
            } 
        },
        ProfileScreen : {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name='account-circle' size={30} color={tintColor}/>
                )
            }
        }
    },
    {
        tabBarOptions: {
            showLabel: false,
            activeTintColor: '#6ab04c',
            inactiveTintColor: '#535c68',
            style: {
                height: 60,
            }
        },
    }
);

const ContentStackNavigator = createStackNavigator(
    {
        ContentTabNavigator: ContentTabNavigator
    }
);

const AppSwitchNavigator = createSwitchNavigator({
    AuthStack: {
        screen: AuthStackNavigator
    },
    ContentStack: {
        screen: ContentStackNavigator
    }
},
{
    initialRouteName: 'AuthStack',
});

export default createAppContainer(AppSwitchNavigator);

