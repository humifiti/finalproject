import { SCREEN_ROUTER } from '@app/constant/Constant'
import NavigationUtil from '@app/navigation/NavigationUtil'
import { navigateSwitch } from '@app/navigation/switchNavigatorSlice'
import AsyncStorageService from '@app/service/AsyncStorage/AsyncStorageService'
import React, { useEffect, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'

const AccountScreen = () => {
  const dispatch = useDispatch()
  const [text, setText] = useState<string>()
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
    </View>
  )
}

export default AccountScreen
