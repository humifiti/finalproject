import NavigationUtil from '@app/navigation/NavigationUtil'
import React, { useEffect, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

const AccountScreen = () => {
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
        onPress={() => {
          NavigationUtil.navigate('Settings')
        }}
      >
        <Text>Click me</Text>
      </TouchableOpacity>
      <TextInput
        style={{
          width: '100%',
          height: 80,
          backgroundColor: 'blue',
        }}
        value={text}
        onChangeText={e => {
          setText(e)
        }}
      />
    </View>
  )
}

export default AccountScreen
