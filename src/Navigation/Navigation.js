import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
import AuthScreen from '../Containers/AuthScreen'
import RegistrationScreen from '../Containers/RegistrationScreen'
import TicketsListScreen from '../Containers/Content/TicketsListScreen'
import ProfileScreen from '../Containers/Content/ProfileScreen'
import { Icon } from 'react-native-elements'


/* 
    Application tree :

    - AppSwitchNavigator
        - AuthScreen
        - RegistrationScreen
        - ContentStackNavigator
            - ContentTabNavigator
                - TicketsListScreen
                - ProfileScreen
                - ...

*/


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
        }
    },
    {
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state.routes[navigation.state.index];
            return {
                headerTitle: routeName,
                headerTitleStyle: { alignItems: 'center', flex: 1, color: '#535c68' },
            };
        }
    }
);

const ContentStackNavigator = createStackNavigator(
    {
        ContentTabNavigator: ContentTabNavigator
    },
    {
        /*defaultNavigationOptions: ({navigation}) => {
            return {
                headerLeft: (
                    <Icon
                        containerStyle={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name='menu'
                        color='#535c68'
                        size={30}
                    />
                )
            }
        }*/
    }
);

const AppSwitchNavigator = createSwitchNavigator({
    AuthScreen: {
        screen: AuthScreen,
        headerMode: 'none',
    },
    RegistrationScreen: {
        screen: RegistrationScreen,
        headerMode: 'none',
    },
    ContentScreen: {
        screen: ContentStackNavigator
    }
},
{
    headerMode: 'none',
    initialRouteName: 'AuthScreen'
});

export default createAppContainer(AppSwitchNavigator);

