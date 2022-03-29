import R from '@app/assets/R'
import FstImage from '@app/components/FstImage/FstImage'
import { colors, dimensions, fonts } from '@app/theme'
import React, { useCallback } from 'react'
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

interface ListOrderProps {
  type: number
}
const ListOrder = (props: ListOrderProps) => {
  const { type } = props
  const renderItem = useCallback(({ item }: { item: any }) => {
    return (
      <TouchableOpacity style={styleListRes.v_container}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styleListRes.v_item}>
            <FstImage
              style={styleListRes.image}
              source={R.images.img_pizza_hut}
            />
          </View>
          <View style={styleListRes.v_info}>
            <View style={styleListRes.v_row}>
              <Text style={styleListRes.txt_time}>20 Jun, 10:30</Text>
              <View style={styleListRes.v_dot} />
              <Text style={styleListRes.txt_count}>3 item</Text>
              <Text style={{ ...fonts.regular16, color: colors.primary }}>
                $15.30
              </Text>
            </View>
            <View style={styleListRes.v_name}>
              <Text style={{ ...fonts.semi_bold14 }}>Pizza Hut</Text>
              <FstImage
                style={{ width: 8, height: 8, marginLeft: 5 }}
                source={R.images.ic_tick}
              />
            </View>
            <View style={styleListRes.v_status}>
              <View style={styleListRes.v_dot2} />
              <Text style={styleListRes.txt_status}>Order Delivered</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 25,
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity style={styleListRes.button1}>
            <Text style={{ ...fonts.semi_bold16 }}>
              {type === 1 ? 'Cancel' : 'Rate'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styleListRes.button2}>
            <Text style={{ ...fonts.semi_bold16, color: 'white' }}>
              {type === 1 ? 'TrackOrder' : 'Re-Order'}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
  }, [])
  const keyExtractor = useCallback(item => `${item.id}`, [])
  return (
    <FlatList
      style={styleListRes.v_listProduct}
      data={['alo', 'alo', 'alo', 'alo', 'alo']}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default ListOrder

const styleListRes = StyleSheet.create({
  v_listProduct: {
    paddingHorizontal: 25,
    paddingBottom: Platform.OS === 'ios' ? 60 : 80,
    //backgroundColor: 'red',
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
    //width: width * 0.4,
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
  v_info: {
    marginLeft: 18,
    flex: 1,
  },
  v_row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt_time: {
    ...fonts.regular12,
    color: '#9796A1',
    fontWeight: '400',
    marginRight: 10,
  },
  v_dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#9796A1',
    marginRight: 8,
  },
  txt_count: {
    ...fonts.regular12,
    color: '#9796A1',
    fontWeight: '400',
    flex: 1,
  },
  v_name: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  v_status: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },
  v_dot2: {
    width: 5,
    height: 5,
    borderRadius: 5 / 2,
    backgroundColor: '#4EE476',
  },
  txt_status: {
    ...fonts.semi_bold12,
    marginLeft: 8,
    color: '#4EE476',
  },
  button1: {
    backgroundColor: 'white',
    paddingVertical: 15,
    width: dimensions.width / 2.6,
    alignItems: 'center',
    borderRadius: 25,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 9,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,

    elevation: 6,
  },
  button2: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    width: dimensions.width / 2.6,
    alignItems: 'center',
    borderRadius: 25,
  },
})