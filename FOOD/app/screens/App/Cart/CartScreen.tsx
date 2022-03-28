import ScreenWrapper from '@app/components/Screen/ScreenWrapper'
import { SCREEN_ROUTER_APP } from '@app/constant/Constant'
import NavigationUtil from '@app/navigation/NavigationUtil'
import React, { useEffect, useState } from 'react'
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native'

const CartScreen = () => {
  useEffect(() => {
    return () => {}
  }, [])
  return (
    <ScreenWrapper
      back
      unsafe
      color="black"
      titleHeader="Cart"
      backgroundHeader="white"
      forceInset={['left']}
      children={
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}></ScrollView>
      }
    />
  )
}

export default CartScreen
