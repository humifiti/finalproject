import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import React, { useCallback } from 'react'
import FstImage from '@app/components/FstImage/FstImage'
import { fonts } from '@app/theme'
import R from '@app/assets/R'

const { width } = Dimensions.get('window')
const ListFood = () => {
  const renderItem = useCallback(({ item }: { item: any }) => {
    return (
      <TouchableOpacity style={styleListFood.v_container}>
        <FstImage style={styleListFood.image} source={R.images.img_food} />
        <View style={{ marginTop: 11, alignItems: 'center' }}>
          <Text style={{ ...fonts.semi_bold15 }}>Red n hot pizza</Text>
          <Text style={{ ...fonts.regular12, color: '#5B5B5E', marginTop: 8 }}>
            Spicy chicken, beef
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            position: 'absolute',
            left: 10,
            top: 10,
            paddingHorizontal: 7,
            paddingVertical: 4,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
        >
          <Text style={{ ...fonts.semi_bold14 }}>9.50 $ </Text>
        </View>
      </TouchableOpacity>
    )
  }, [])
  const keyExtractor = useCallback(item => `${item.id}`, [])
  return (
    <FlatList
      style={styleListFood.v_listProduct}
      columnWrapperStyle={styleListFood.v_column}
      data={['alo', 'alo', 'alo', 'alo', 'alo']}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      numColumns={2}
    />
  )
}

export default ListFood

const styleListFood = StyleSheet.create({
  v_listProduct: {
    paddingHorizontal: 25,
    paddingBottom: Platform.OS === 'ios' ? 60 : 80,
    //backgroundColor: 'red',
  },
  v_column: {
    justifyContent: 'space-between',
  },
  image: { width: '100%', aspectRatio: 1, borderRadius: 15 },
  v_container: {
    borderRadius: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 9,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,

    elevation: 6,
    marginTop: 20,
    width: width * 0.4,
    paddingBottom: 15,
  },
})
