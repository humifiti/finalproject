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
const ListRestaurant = () => {
  const renderItem = useCallback(({ item }: { item: any }) => {
    return (
      <TouchableOpacity style={styleListRes.v_container}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{}}>
            <View style={styleListRes.v_item}>
              <FstImage
                style={styleListRes.image}
                source={R.images.img_pizza_hut}
              />
            </View>
            <View style={styleListRes.v_evaluate}>
              <Text style={styleListRes.txt_evaluate}>4.5</Text>
            </View>
          </View>
        </View>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 28 }}
        >
          <Text style={{ ...fonts.semi_bold15 }}>Pizza Hut</Text>
          <FstImage
            style={{ width: 8, height: 8, marginLeft: 5 }}
            source={R.images.ic_tick}
          />
        </View>
        <View style={styleListRes.v_row}>
          <FstImage style={styleListRes.icon} source={R.images.ic_delivery} />
          <Text
            style={{ ...fonts.regular12, color: '#5B5B5E', marginRight: 10 }}
          >
            free
          </Text>
          <FstImage style={styleListRes.icon} source={R.images.ic_time} />
          <Text style={{ ...fonts.regular12, color: '#5B5B5E', flex: 1 }}>
            5-10 mins
          </Text>
        </View>
      </TouchableOpacity>
    )
  }, [])
  const keyExtractor = useCallback(item => `${item.id}`, [])
  return (
    <FlatList
      style={styleListRes.v_listProduct}
      columnWrapperStyle={styleListRes.v_column}
      data={['alo', 'alo', 'alo', 'alo', 'alo']}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      numColumns={2}
    />
  )
}

export default ListRestaurant

const styleListRes = StyleSheet.create({
  v_listProduct: {
    paddingHorizontal: 25,
    paddingBottom: Platform.OS === 'ios' ? 60 : 80,
    //backgroundColor: 'red',
  },
  v_column: {
    justifyContent: 'space-between',
  },
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
    padding: 11,
    marginBottom: 0,
  },
  v_item: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 10,
    shadowColor: '#C4C4C4',
    shadowOffset: {
      width: 9,
      height: 9,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 6,
  },
  image: {
    width: 40,
    height: 40,
  },
  v_evaluate: {
    backgroundColor: '#FFC529',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    position: 'absolute',
    right: -10,
    top: -7,
    shadowColor: '#FFC529',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 6,
  },
  txt_evaluate: {
    ...fonts.semi_bold9,
    color: 'white',
    alignSelf: 'center',
  },
  v_row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 11,
  },
  icon: { width: 12, height: 12, marginRight: 5 },
})
