import React from 'react'
import { Text, Image } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import Icon from 'react-native-vector-icons/MaterialIcons'
import logo from '../assets/header.png'

import SingIn from '../pages/SignIn'
import Checkin from '../pages/Chekin'
import Pedidos from '../pages/Pedidos'

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Login: SingIn,
        App: createBottomTabNavigator(
          {
            Checkin: createStackNavigator(
                {
                    Checkin,
                },
                {
                  navigationOptions: {
                    tabBarLabel: 'Check-ins',
                  },
                  defaultNavigationOptions: {
                    headerTitle : <Image source = {logo}/>,
                    headerTitleAlign: "center"
                  }

                }
                ),
            Pedidos: createStackNavigator(
                {
                  Pedidos,
                },
                {
                  navigationOptions: {
                    tabBarLabel: 'Pedidos de Ajuda',
                  },
                  defaultNavigationOptions: {
                    headerTitle : <Image source = {logo}/>,
                    headerTitleAlign: "center",
                  }
                }
                ),
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              activeTintColor: '#EE4E62',
              inactiveTintColor: '#798',
              style: { backgroundColor: '#fff' }
            }
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Login'
      }
    ),
  );

