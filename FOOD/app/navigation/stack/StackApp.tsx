import { SCREEN_ROUTER_APP } from '@app/constant/Constant'
import SearchScreen from '@app/screens/App/Home/SearchScreen'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

const { SEARCH } = SCREEN_ROUTER_APP
const Stack = createStackNavigator()

const mainScreen = {
  [SEARCH]: SearchScreen,
}

export const StackAppCustomerScreen = () => {
  return (
    <>
      {Object.keys(mainScreen).map((item, index) => (
        <Stack.Screen key={index} name={item} component={mainScreen[item]} />
      ))}
    </>
  )
}
