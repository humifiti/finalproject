import NavigationUtil from '@app/navigation/NavigationUtil'
import React from 'react'
import { View, Text, Button } from 'react-native'

const ProductDetailScreen = () => {
  return (
    <View>
      <Button
        title="Product"
        onPress={() => {
          NavigationUtil.navigate('LoginScreen')
        }}
      />
      <Text>ProductDetailScreen</Text>
    </View>
  )
}

export default ProductDetailScreen
