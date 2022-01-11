import { MAIN_AUTH, SCREEN_ROUTER_APP } from '@app/constant/Constant'
import NotificationScreen from '@app/screens/App/Notification/NotificationScreen'
import ProductFlashSaleScreen from '@app/screens/App/Product/ProductFlashSaleScreen'
import ProductScreen from '@app/screens/App/Product/ProductScreen'
import ProductSellingScreen from '@app/screens/App/Product/ProductSellingScreen'
import LoginScreen from '@app/screens/Auth/LoginScreen'
import SplashScreen from '@app/screens/SplashScreen'
import {
  createStackNavigator,
  StackCardInterpolationProps,
} from '@react-navigation/stack'
import React from 'react'
const MainStack = createStackNavigator()
const AuthStack = createStackNavigator()

const { NOTIFICATION, PRODUCT, PRODUCT_FLASH_SALE, PRODUCT_SELLING } =
  SCREEN_ROUTER_APP

const { SPLASH, LOGIN, REGISTER, FORGOTPASS } = MAIN_AUTH

const mainScreen = {
  [PRODUCT]: ProductScreen,
  [NOTIFICATION]: NotificationScreen,
  [PRODUCT_FLASH_SALE]: ProductFlashSaleScreen,
  [PRODUCT_SELLING]: ProductSellingScreen,
}

const authScreen = {
  [SPLASH]: SplashScreen,
  [LOGIN]: LoginScreen,
  [REGISTER]: LoginScreen,
  [FORGOTPASS]: LoginScreen,
}

const forFade = ({ current }: StackCardInterpolationProps) => ({
  cardStyle: {
    opacity: current.progress,
  },
})

const StackAppScreen = () => {
  return (
    <>
      {Object.keys(mainScreen).map((item, index) => (
        <MainStack.Screen
          key={index}
          name={item}
          component={mainScreen[item]}
        />
      ))}
    </>
  )
}

const StackAuthScreen = () => {
  return (
    <>
      {Object.keys(authScreen).map((item, index) => {
        if (item === SPLASH || item === LOGIN) {
          return (
            <AuthStack.Screen
              options={{
                cardStyleInterpolator: forFade,
              }}
              key={index}
              name={item}
              component={authScreen[item]}
            />
          )
        } else {
          return (
            <AuthStack.Screen
              key={index}
              name={item}
              component={authScreen[item]}
            />
          )
        }
      })}
    </>
  )
}

export { MainStack, AuthStack, StackAppScreen, StackAuthScreen }
