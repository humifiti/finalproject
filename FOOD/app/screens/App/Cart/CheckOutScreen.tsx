import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AddressApi from '../Account/api/AddressApi'
import ScreenWrapper from '@app/components/Screen/ScreenWrapper'
import { fonts } from '@app/theme'
import FstImage from '@app/components/FstImage/FstImage'
import R from '@app/assets/R'
import NavigationUtil from '@app/navigation/NavigationUtil'
import { SCREEN_ROUTER_APP } from '@app/constant/Constant'

const CheckOutScreen = () => {
  const [addressDefault, setAddressDefault] = useState<any>(null)
  useEffect(() => {
    getAddressDefault()
  }, [])

  const getAddressDefault = async () => {
    try {
      const res = await AddressApi.getAddressDefault()
      setAddressDefault(res.data)
    } catch (error) {}
  }
  const updateAddressUser = ({ item }: { item: any }) => {
    setAddressDefault(item)
  }
  return (
    <ScreenWrapper
      back
      unsafe
      color="black"
      titleHeader="Payment"
      backgroundHeader="white"
      forceInset={['left']}
      children={
        <View style={styles.v_container}>
          <TouchableOpacity
            onPress={() => {
              NavigationUtil.navigate(SCREEN_ROUTER_APP.DELIVERY_ADDRESS, {
                callback: updateAddressUser,
              })
            }}
            style={styles.v_row}
          >
            <Text style={styles.txt_ship}>Shipping to</Text>
            <FstImage
              style={styles.ic_arrow}
              source={R.images.ic_arrow_right}
            />
          </TouchableOpacity>

          <View style={styles.v_location}>
            <FstImage style={styles.img_map} source={R.images.img_map} />
            <View style={styles.v_info}>
              <Text
                style={styles.textInfo}
              >{`${addressDefault?.name} | ${addressDefault?.phone}`}</Text>
              <Text
                style={styles.textInfo}
              >{`${addressDefault?.address}`}</Text>
            </View>
          </View>
          <Text style={styles.txt_payment}>Payment Method</Text>
        </View>
      }
    />
  )
}

export default CheckOutScreen

const styles = StyleSheet.create({
  ic_arrow: {
    width: 24,
    height: 24,
  },
  v_row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  v_container: { flex: 1, backgroundColor: 'white', paddingHorizontal: 15 },
  txt_ship: {
    ...fonts.semi_bold18,
    flex: 1,
  },
  v_location: {
    flexDirection: 'row',
    marginTop: 20,
  },
  img_map: {
    width: 90,
    aspectRatio: 1,
  },
  textInfo: {
    ...fonts.regular18,
  },
  v_info: {
    marginLeft: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  txt_payment: {
    ...fonts.semi_bold18,
    flex: 1,
    marginTop: 40,
  },
})
