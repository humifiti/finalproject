import { SCREEN_ROUTER, SCREEN_ROUTER_APP } from '@app/constant/Constant'
import NavigationUtil from '@app/navigation/NavigationUtil'
import { navigateSwitch } from '@app/navigation/switchNavigatorSlice'
import AsyncStorageService from '@app/service/AsyncStorage/AsyncStorageService'
import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'

const AccountScreen = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {}
  }, [])
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        onPress={async () => {
          await AsyncStorageService.putToken('')
          dispatch(navigateSwitch(SCREEN_ROUTER.AUTH))
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={async () => {
          NavigationUtil.navigate(SCREEN_ROUTER_APP.ORDER)
        }}
      >
        <Text>Order</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AccountScreen
