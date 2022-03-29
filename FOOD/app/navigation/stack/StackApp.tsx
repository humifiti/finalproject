import { SCREEN_ROUTER_APP } from '@app/constant/Constant'
import SearchScreen from '@app/screens/App/Home/SearchScreen'
import OrderScreen from '@app/screens/App/Order/OrderScreen'
import FoodDetail from '@app/screens/App/Product/FoodDetail'
import RestaurantDetail from '@app/screens/App/Product/RestaurantDetail'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

const { SEARCH, FOOD_DETAIL, RESTAURANT_DETAIL, ORDER } = SCREEN_ROUTER_APP
const Stack = createStackNavigator()

const mainScreen = {
  [SEARCH]: SearchScreen,
  [FOOD_DETAIL]: FoodDetail,
  [RESTAURANT_DETAIL]: RestaurantDetail,
  [ORDER]: OrderScreen,
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
