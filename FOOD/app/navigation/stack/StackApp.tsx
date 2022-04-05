import { SCREEN_ROUTER_APP } from '@app/constant/Constant'
import AddNewAddress from '@app/screens/App/Account/AddNewAddress'
import ChangePassWordScreen from '@app/screens/App/Account/ChangePass'
import DeliveryAddress from '@app/screens/App/Account/DeliveryAddress'
import UpdateInfoUser from '@app/screens/App/Account/UpdateInfoUser'
import SearchScreen from '@app/screens/App/Home/SearchScreen'
import OrderScreen from '@app/screens/App/Order/OrderScreen'
import FoodDetail from '@app/screens/App/Product/FoodDetail'
import RestaurantDetail from '@app/screens/App/Product/RestaurantDetail'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

const {
  SEARCH,
  FOOD_DETAIL,
  RESTAURANT_DETAIL,
  ORDER,
  UPDATE_USER_INFO,
  DELIVERY_ADDRESS,
  ADD_ADDRESS,
  CHANGE_PASS,
} = SCREEN_ROUTER_APP
const Stack = createStackNavigator()

const mainScreen = {
  [SEARCH]: SearchScreen,
  [FOOD_DETAIL]: FoodDetail,
  [RESTAURANT_DETAIL]: RestaurantDetail,
  [ORDER]: OrderScreen,
  [UPDATE_USER_INFO]: UpdateInfoUser,
  [DELIVERY_ADDRESS]: DeliveryAddress,
  [ADD_ADDRESS]: AddNewAddress,
  [CHANGE_PASS]: ChangePassWordScreen,
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
