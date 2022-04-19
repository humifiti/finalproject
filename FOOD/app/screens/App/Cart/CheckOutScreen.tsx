/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import AddressApi from '../Account/api/AddressApi'
import ScreenWrapper from '@app/components/Screen/ScreenWrapper'
import { colors, fonts } from '@app/theme'
import FstImage from '@app/components/FstImage/FstImage'
import R from '@app/assets/R'
import NavigationUtil from '@app/navigation/NavigationUtil'
import { SCREEN_ROUTER_APP } from '@app/constant/Constant'
import { formatNumber } from '@app/utils/Format'
import CartApi from './api/CartApi'
import RNButton from '@app/components/RNButton'
import { hideLoading, showLoading } from '@app/utils/LoadingProgressRef'
import LinkingUtils, { LINKING_TYPE } from '@app/utils/LinkingUtils'

const CheckOutScreen = (props: any) => {
  const [addressDefault, setAddressDefault] = useState<any>(null)
  const [deliveryFee, setDeliveryFee] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    getAddressDefault()
  }, [])

  const getAddressDefault = async () => {
    try {
      const res = await AddressApi.getAddressDefault()
      preCheckOut(res.data.id)
      setAddressDefault(res.data)
    } catch (error) {}
  }

  const preCheckOut = async (address_id: number) => {
    try {
      const res = await CartApi.preCheckOut({ address_id })
      setDeliveryFee(res.data.ship_fee)
      setTotalPrice(res.data.total_price)
    } catch (error) {}
  }
  const updateAddressUser = ({ item }: { item: any }) => {
    setAddressDefault(item)
    preCheckOut(item.id)
  }

  const checkOut = async () => {
    showLoading()
    try {
      const res = await CartApi.checkOutByMomo({
        user_addr_id: addressDefault.id,
      })
      LinkingUtils(LINKING_TYPE.WEB, res.data.payUrl)
      NavigationUtil.navigate(SCREEN_ROUTER_APP.ORDER)
    } catch (error) {
    } finally {
      hideLoading()
    }
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
        <ScrollView style={styles.v_container}>
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
          <FstImage
            style={{ width: 50, height: 50, marginTop: 20, marginBottom: 30 }}
            source={R.images.ic_momo}
          />
          <View style={styles.v_price}>
            <ViewRow
              label="Subtotal"
              content={`${formatNumber(props.route.params.subTotal)} đ`}
            />
            <ViewRow
              label="Delivery"
              content={`${formatNumber(deliveryFee)} đ`}
            />
            <ViewRow label="Total" content={`${formatNumber(totalPrice)} đ`} />
          </View>
          <TouchableOpacity onPress={checkOut} style={styles.v_button}>
            <Text style={{ ...fonts.semi_bold16, color: 'white' }}>
              CONFIRM ORDER
            </Text>
          </TouchableOpacity>
        </ScrollView>
      }
    />
  )
}

const ViewRow = ({ label, content }: { label: string; content: string }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      }}
    >
      <Text style={{ ...fonts.regular18, fontWeight: '500', flex: 1 }}>
        {label}
      </Text>
      <Text style={{ ...fonts.regular18, fontWeight: '500' }}>{content}</Text>
    </View>
  )
}

export default CheckOutScreen

const styles = StyleSheet.create({
  v_button: {
    paddingHorizontal: 56,
    paddingVertical: 20,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 28,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.6,
    shadowRadius: 9.11,
    elevation: 6,
  },
  v_price: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
    paddingTop: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.2,
    shadowRadius: 9.11,
    elevation: 6,
    borderRadius: 12,
  },
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
    marginTop: 40,
  },
})
