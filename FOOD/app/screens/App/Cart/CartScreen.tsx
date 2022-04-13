import R from '@app/assets/R'
import FstImage from '@app/components/FstImage/FstImage'
import ScreenWrapper from '@app/components/Screen/ScreenWrapper'
import { colors, dimensions, fonts } from '@app/theme'
import { formatNumber } from '@app/utils/Format'
import React, { useCallback, useEffect, useState } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import CartApi from './api/CartApi'

const CartScreen = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    getDataCart()
  }, [])

  const getDataCart = async () => {
    try {
      const res = await CartApi.getCart()
      setData(res.data)
    } catch (error) {}
  }

  const renderItem = useCallback(({ item }: { item: any }) => {
    return (
      <View style={styles.v_item}>
        <FstImage
          resizeMode="cover"
          style={styles.image}
          source={R.images.img_food}
        />
        <View style={styles.v_info}>
          <View>
            <Text style={{ ...fonts.semi_bold18 }}>{item?.food?.name}</Text>
            <Text style={styles.txt_description}>
              {item?.food?.description}
            </Text>
          </View>

          <View style={styles.v_row}>
            <Text style={styles.txt_$}>
              đ
              <Text style={styles.txt_price}>
                {formatNumber(item?.food?.price)}
              </Text>
            </Text>
            <TouchableOpacity>
              <FstImage style={styles.ic_plus} source={R.images.ic_plus} />
            </TouchableOpacity>
            <Text style={styles.txt_quantity}>{item.quantity}</Text>
            <FstImage style={styles.ic_plus} source={R.images.ic_plus} />
          </View>
        </View>
      </View>
    )
  }, [])
  const keyExtractor = useCallback(item => `${item.id}`, [])

  const renderFooter = () => {
    return (
      <>
        <ViewRow label={'Subtotal'} content={'$52.50'} />
        <ViewRow label={'Tax and Fees'} content={'$52.50'} />
        <ViewRow label={'Delivery'} content={'$52.50'} />
        <ViewRow label={'Total'} content={'$52.50'} />
        <TouchableOpacity style={styles.v_button}>
          <Text style={styles.txt_checkOut}>CHECKOUT</Text>
        </TouchableOpacity>
      </>
    )
  }

  return (
    <ScreenWrapper
      back
      unsafe
      color="black"
      titleHeader="Cart"
      backgroundHeader="white"
      forceInset={['left']}
      children={
        <FlatList
          style={styles.v_container}
          // contentContainerStyle={styles.v_list}
          // onRefresh={onRefreshData}
          // refreshing={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={renderFooter}
        />
      }
    />
  )
}

const ViewRow = ({ label, content }: { label: string; content: string }) => {
  return (
    <View style={styles.v_content}>
      <Text style={styles.txt_label}>{label}</Text>
      <Text style={{ ...fonts.semi_bold16 }}>{content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  v_container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  v_item: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  image: {
    width: 82,
    height: 82,
    borderRadius: 16,
  },
  v_info: {
    marginLeft: 20,
    justifyContent: 'space-between',
    flex: 1,
  },
  txt_description: {
    ...fonts.regular14,
    marginTop: 8,
  },
  v_row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt_price: {
    ...fonts.semi_bold18,
    color: 'black',
  },
  txt_$: {
    ...fonts.semi_bold14,
    color: colors.primary,
    flex: 1,
  },
  ic_plus: {
    width: 24,
    height: 24,
  },
  txt_quantity: {
    ...fonts.semi_bold16,
    color: colors.primary,
    marginHorizontal: 18,
  },
  v_button: {
    alignSelf: 'center',
    marginTop: 100,
    backgroundColor: colors.primary,
    width: dimensions.width / 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 26,
  },
  txt_checkOut: {
    ...fonts.semi_bold16,
    color: 'white',
    marginHorizontal: 18,
  },
  v_content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  txt_label: {
    ...fonts.semi_bold16,
    flex: 1,
  },
})

export default CartScreen
