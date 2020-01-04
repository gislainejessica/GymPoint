import React from 'react'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
// import { createStackNavigator } from 'react-navigation-stack'

import Icon from 'react-native-vector-icons/MaterialIcons'

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
            Checkin: {
              screen: Checkin,
              navigationOptions: {
                tabBarLabel: 'Checkin',
                tabBarIcon: (
                  <Icon
                    size={20}
                    name="add-circle-outline"
                    color="#EE4E62"
                  />
                )
              }
            },
            Pedidos: {
              screen: Pedidos,
              navigationOptions: {
                tabBarLabel: 'Pedidos',
                tabBarIcon: (
                  <Icon
                    size={20}
                    name="add-circle-outline"
                    color="#EE4E62"
                  />
                )
              }
            },
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              activeTintColor: '#EE4E62',
              inactiveTintColor: '#798',
              style: { backgroundColor: '#fff' }
            }
          }
        )
      },
      {
        initialRouteName: signedIn ? 'App' : 'Login'
      }
    )
  )
